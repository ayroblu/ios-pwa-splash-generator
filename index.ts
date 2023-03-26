import { webkit, devices, BrowserContext } from "playwright";
import type { Browser } from "playwright";
import { iosDetailsGenerated, manualDevices } from "./iphone-details";
import path from "path";

const url = process.argv[2];
if (!url) {
  console.log(
    "Please enter a path for example: ts-node index.ts https://twitter.com"
  );
  process.exit(1);
}

const dir = "output";

withBrowser(async (browser) => {
  for (const { orientation, playwrightName, name } of iosDetailsGenerated) {
    // @ts-expect-error - keyof playwrightName
    const device = devices[playwrightName] ?? manualDevices[playwrightName];
    const viewport =
      orientation === "portrait"
        ? // @ts-expect-error - screen is missing in types
          device.screen ?? device.viewport
        : (() => {
            const { width: height, height: width } =
              // @ts-expect-error - screen is missing in types
              device.screen ?? device.viewport;
            return { width, height };
          })();
    const context = await browser.newContext({
      ...device,
      viewport,
    });
    await blockRoute(context, /abs.twimg.com/);
    const page = await context.newPage();
    await page.goto(url);
    await page.screenshot({
      path: path.join(dir, `${name}.png`),
    });
    await context.close();
  }
}).catch(console.error);

// MARK: Helper funcs

async function withBrowser(func: (browser: Browser) => Promise<void>) {
  const browser = await webkit.launch({
    // headless: false,
  });
  return func(browser).finally(async () => {
    await browser.close();
  });
}
async function blockRoute(context: BrowserContext, regex: RegExp) {
  await context.route(regex, (route) => route.abort());
}

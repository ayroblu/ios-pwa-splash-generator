import { webkit, devices, BrowserContext } from "playwright";
import type { Browser } from "playwright";
import { iosDetailsGenerated, manualDevices } from "./iphone-details";
import path from "path";
import fs from "fs";

const url = process.argv[2];
if (!url) {
  console.log(
    "Please enter a path for example: ts-node index.ts https://twitter.com"
  );
  process.exit(1);
}

const dir = "output";

withBrowser(async (browser) => {
  for (const {
    orientation,
    colorScheme,
    playwrightName,
    name,
  } of iosDetailsGenerated) {
    const filename = path.join(dir, `${name}.png`);
    if (fs.existsSync(filename)) {
      continue;
    }
    console.log("processing", name);
    // @ts-expect-error - keyof playwrightName
    const device = devices[playwrightName] ?? manualDevices[playwrightName];
    if (!device) {
      console.log("device not found", playwrightName, name);
      throw new Error("device not found");
    }
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
      colorScheme,
    });
    await emptyRoute(context, /abs.twimg.com/);
    const page = await context.newPage();
    await page.goto(url, { waitUntil: "domcontentloaded" });
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
// async function blockRoute(context: BrowserContext, regex: RegExp) {
//   await context.route(regex, (route) => route.abort());
// }
async function emptyRoute(context: BrowserContext, regex: RegExp) {
  await context.route(regex, (route) =>
    route.fulfill({ body: "window.__SCRIPTS_LOADED__.main = true" })
  );
}

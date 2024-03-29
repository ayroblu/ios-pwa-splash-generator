import { devices } from "playwright";

// https://www.webmobilefirst.com/en/devices/
const iosDetailsSimple = [
  {
    width: 430,
    height: 932,
    pixelRatio: 3,
    name: "iPhone_15_Pro_Max__iPhone_15_Plus__iPhone_14_Pro_Max",
    playwrightName: "iPhone 15 Pro Max",
    top: 59,
    hasLandscape: false,
  },
  {
    width: 393,
    height: 852,
    pixelRatio: 3,
    name: "iPhone_15_Pro__iPhone_15__iPhone_14_Pro",
    playwrightName: "iPhone 15 Pro",
    top: 59,
    hasLandscape: false,
  },
  {
    width: 390,
    height: 844,
    pixelRatio: 3,
    name: "iPhone_14__iPhone_13_Pro__iPhone_13__iPhone_12_Pro__iPhone_12",
    playwrightName: "iPhone 13 Pro",
    top: 47,
    hasLandscape: false,
  },
  {
    width: 428,
    height: 926,
    pixelRatio: 3,
    name: "iPhone_14_Plus__iPhone_13_Pro_Max__iPhone_12_Pro_Max",
    playwrightName: "iPhone 13 Pro Max",
    top: 47,
    hasLandscape: false,
  },
  {
    width: 375,
    height: 812,
    pixelRatio: 3,
    name: "iPhone_13_mini__iPhone_12_mini__iPhone_11_Pro__iPhone_XS__iPhone_X",
    playwrightName: "iPhone 13 Mini",
    top: 50,
    hasLandscape: false,
  },
  {
    width: 414,
    height: 736,
    pixelRatio: 3,
    name: "iPhone_8_Plus__iPhone_7_Plus__iPhone_6s_Plus__iPhone_6_Plus",
    playwrightName: "iPhone 8 Plus",
    hasLandscape: false,
  },
  {
    width: 320,
    height: 568,
    pixelRatio: 2,
    name: "4__iPhone_SE__iPod_touch_5th_generation_and_later",
    playwrightName: "iPhone SE",
    hasLandscape: false,
  },
  {
    width: 414,
    height: 896,
    pixelRatio: 3,
    name: "iPhone_11_Pro_Max__iPhone_XS_Max",
    playwrightName: "iPhone 11 Pro Max",
    top: 47,
    hasLandscape: false,
  },
  {
    width: 414,
    height: 896,
    pixelRatio: 2,
    name: "iPhone_11__iPhone_XR",
    playwrightName: "iPhone 11",
    top: 47,
    hasLandscape: false,
  },
  {
    width: 375,
    height: 667,
    pixelRatio: 2,
    name: "iPhone_8__iPhone_7__iPhone_6s__iPhone_6__4.7__iPhone_SE",
    playwrightName: "iPhone 8",
    hasLandscape: false,
  },
  {
    width: 1024,
    height: 1366,
    pixelRatio: 2,
    name: "12.9__iPad_Pro",
    playwrightName: "iPad Pro 12.9",
    hasLandscape: true,
  },
  {
    width: 834,
    height: 1194,
    pixelRatio: 2,
    name: "11__iPad_Pro__10.5__iPad_Pro",
    playwrightName: "iPad Pro 11",
    hasLandscape: true,
  },
  {
    width: 820,
    height: 1180,
    pixelRatio: 2,
    name: "10.9__iPad_Air",
    playwrightName: "iPad Air 10.9",
    hasLandscape: true,
  },
  {
    width: 810,
    height: 1080,
    pixelRatio: 2,
    name: "10.2__iPad",
    playwrightName: "iPad (gen 7)",
    hasLandscape: true,
  },
  {
    width: 834,
    height: 1112,
    pixelRatio: 2,
    name: "10.5__iPad_Air",
    playwrightName: "iPad Air 10.5",
    hasLandscape: true,
  },
  {
    width: 768,
    height: 1024,
    pixelRatio: 2,
    name: "9.7__iPad_Pro__7.9__iPad_mini__9.7__iPad_Air__9.7__iPad",
    playwrightName: "iPad (gen 6)",
    hasLandscape: true,
  },
  {
    width: 744,
    height: 1133,
    pixelRatio: 2,
    name: "8.3__iPad_Mini",
    playwrightName: "iPad Mini 8.3",
    hasLandscape: true,
  },
] as const;

type IosType = {
  width: number;
  height: number;
  pixelRatio: number;
  orientation: string;
  name: string;
  playwrightName: keyof typeof devices | keyof typeof manualDevices;
  colorScheme: "light" | "dark";
  top?: number;
};
export const manualDevices = {
  "iPhone 14 Pro Max": {
    userAgent:
      "Mozilla/5.0 (iPhone; CPU iPhone OS 15_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.4 Mobile/15E148 Safari/604.1",
    viewport: {
      width: 393,
      height: 852,
    },
    deviceScaleFactor: 3,
    isMobile: true,
    hasTouch: true,
    defaultBrowserType: "webkit",
  },
  "iPhone 14 Pro": {
    userAgent:
      "Mozilla/5.0 (iPhone; CPU iPhone OS 15_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.4 Mobile/15E148 Safari/604.1",
    viewport: {
      width: 393,
      height: 852,
    },
    deviceScaleFactor: 3,
    isMobile: true,
    hasTouch: true,
    defaultBrowserType: "webkit",
  },
  "iPad Pro 12.9": {
    userAgent:
      "Mozilla/5.0 (iPad; CPU OS 12_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.4 Mobile/15E148 Safari/604.1",
    viewport: {
      width: 1024,
      height: 1366,
    },
    deviceScaleFactor: 2,
    isMobile: true,
    hasTouch: true,
    defaultBrowserType: "webkit",
  },
  "iPad Air 10.5": {
    userAgent:
      "Mozilla/5.0 (iPad; CPU OS 12_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.4 Mobile/15E148 Safari/604.1",
    viewport: {
      width: 834,
      height: 1112,
    },
    deviceScaleFactor: 2,
    isMobile: true,
    hasTouch: true,
    defaultBrowserType: "webkit",
  },
  "iPad Air 10.9": {
    userAgent:
      "Mozilla/5.0 (iPad; CPU OS 12_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.4 Mobile/15E148 Safari/604.1",
    viewport: {
      width: 820,
      height: 1180,
    },
    deviceScaleFactor: 2,
    isMobile: true,
    hasTouch: true,
    defaultBrowserType: "webkit",
  },
  "iPad Mini 8.3": {
    userAgent:
      "Mozilla/5.0 (iPad; CPU OS 12_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.4 Mobile/15E148 Safari/604.1",
    viewport: {
      width: 744,
      height: 1133,
    },
    deviceScaleFactor: 2,
    isMobile: true,
    hasTouch: true,
    defaultBrowserType: "webkit",
  },
} as const;
export const iosDetailsGenerated = iosDetailsSimple.reduce<IosType[]>(
  (list, { hasLandscape, ...details }) => {
    const orientations = ["portrait", "landscape"] as const;
    const colorSchemes = ["light", "dark"] as const;
    for (const orientation of orientations) {
      for (const colorScheme of colorSchemes) {
        if (orientation === "portrait" || hasLandscape) {
          list.push({
            ...details,
            orientation,
            name: details.name + `_${orientation}_${colorScheme}`,
            colorScheme,
          });
        }
      }
    }
    return list;
  },
  []
);

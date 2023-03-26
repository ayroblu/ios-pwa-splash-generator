import { devices } from "playwright";

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
const iosDetailsSimple = [
  {
    width: 430,
    height: 932,
    pixelRatio: 3,
    name: "iPhone_14_Pro_Max",
    playwrightName: "iPhone 14 Pro Max",
  },
  {
    width: 393,
    height: 852,
    pixelRatio: 3,
    name: "iPhone_14_Pro",
    playwrightName: "iPhone 14 Pro",
  },
  {
    width: 390,
    height: 844,
    pixelRatio: 3,
    name: "iPhone_14__iPhone_13_Pro__iPhone_13__iPhone_12_Pro__iPhone_12",
    playwrightName: "iPhone 13 Pro",
  },
  {
    width: 428,
    height: 926,
    pixelRatio: 3,
    name: "iPhone_14_Plus__iPhone_13_Pro_Max__iPhone_12_Pro_Max",
    playwrightName: "iPhone 13 Pro Max",
  },
  {
    width: 375,
    height: 812,
    pixelRatio: 3,
    name: "iPhone_13_mini__iPhone_12_mini__iPhone_11_Pro__iPhone_XS__iPhone_X",
    playwrightName: "iPhone 13 Mini",
  },
  {
    width: 414,
    height: 736,
    pixelRatio: 3,
    name: "iPhone_8_Plus__iPhone_7_Plus__iPhone_6s_Plus__iPhone_6_Plus",
    playwrightName: "iPhone 8 Plus",
  },
  {
    width: 320,
    height: 568,
    pixelRatio: 2,
    name: "4__iPhone_SE__iPod_touch_5th_generation_and_later",
    playwrightName: "iPhone SE",
  },
  {
    width: 414,
    height: 896,
    pixelRatio: 3,
    name: "iPhone_11_Pro_Max__iPhone_XS_Max",
    playwrightName: "iPhone 11 Pro Max",
  },
  {
    width: 414,
    height: 896,
    pixelRatio: 2,
    name: "iPhone_11__iPhone_XR",
    playwrightName: "iPhone 11",
  },
  {
    width: 375,
    height: 667,
    pixelRatio: 2,
    name: "iPhone_8__iPhone_7__iPhone_6s__iPhone_6__4.7__iPhone_SE",
    playwrightName: "iPhone 8",
  },
  {
    width: 1024,
    height: 1366,
    pixelRatio: 2,
    name: "12.9__iPad_Pro",
    playwrightName: "",
  },
  {
    width: 834,
    height: 1194,
    pixelRatio: 2,
    name: "11__iPad_Pro__10.5__iPad_Pro",
    playwrightName: "iPad Pro 11",
  },
  {
    width: 820,
    height: 1180,
    pixelRatio: 2,
    name: "10.9__iPad_Air",
    playwrightName: "",
  },
  {
    width: 810,
    height: 1080,
    pixelRatio: 2,
    name: "10.2__iPad",
    playwrightName: "iPad (gen 7)",
  },
  {
    width: 834,
    height: 1112,
    pixelRatio: 2,
    name: "10.5__iPad_Air",
    playwrightName: "iPad Air 10.5",
  },
  {
    width: 768,
    height: 1024,
    pixelRatio: 2,
    name: "9.7__iPad_Pro__7.9__iPad_mini__9.7__iPad_Air__9.7__iPad",
    playwrightName: "iPad (gen 6)",
  },
  {
    width: 744,
    height: 1133,
    pixelRatio: 2,
    name: "8.3__iPad_Mini",
    playwrightName: "iPad Mini 8.3",
  },
] as const;
type IosType = {
  width: number;
  height: number;
  pixelRatio: number;
  orientation: string;
  name: string;
  playwrightName: keyof typeof devices | keyof typeof manualDevices;
};
export const iosDetailsGenerated = iosDetailsSimple.reduce<IosType[]>(
  (list, details) => {
    const orientations = ["portrait", "landscape"];
    for (const orientation of orientations) {
      list.push({
        ...details,
        orientation,
        name: details.name + `_${orientation}`,
      });
    }
    return list;
  },
  []
);
export const iosDetails = [
  {
    width: "834px",
    height: "1112px",
    pixelRatio: 2,
    orientation: "landscape",
    name: "10.5__iPad_Air_landscape.png",
  },
  {
    width: "744px",
    height: "1133px",
    pixelRatio: 2,
    orientation: "portrait",
    name: "8.3__iPad_Mini_portrait.png",
  },
  {
    width: "414px",
    height: "896px",
    pixelRatio: 2,
    orientation: "landscape",
    name: "iPhone_11__iPhone_XR_landscape.png",
  },
  {
    width: "375px",
    height: "812px",
    pixelRatio: 3,
    orientation: "landscape",
    name: "iPhone_13_mini__iPhone_12_mini__iPhone_11_Pro__iPhone_XS__iPhone_X_landscape.png",
  },
  {
    width: "390px",
    height: "844px",
    pixelRatio: 3,
    orientation: "portrait",
    name: "iPhone_14__iPhone_13_Pro__iPhone_13__iPhone_12_Pro__iPhone_12_portrait.png",
  },
  {
    width: "375px",
    height: "812px",
    pixelRatio: 3,
    orientation: "portrait",
    name: "iPhone_13_mini__iPhone_12_mini__iPhone_11_Pro__iPhone_XS__iPhone_X_portrait.png",
  },
  {
    width: "375px",
    height: "667px",
    pixelRatio: 2,
    orientation: "landscape",
    name: "iPhone_8__iPhone_7__iPhone_6s__iPhone_6__4.7__iPhone_SE_landscape.png",
  },
  {
    width: "820px",
    height: "1180px",
    pixelRatio: 2,
    orientation: "landscape",
    name: "10.9__iPad_Air_landscape.png",
  },
  {
    width: "430px",
    height: "932px",
    pixelRatio: 3,
    orientation: "portrait",
    name: "iPhone_14_Pro_Max_portrait.png",
  },
  {
    width: "1024px",
    height: "1366px",
    pixelRatio: 2,
    orientation: "portrait",
    name: "12.9__iPad_Pro_portrait.png",
  },
  {
    width: "834px",
    height: "1194px",
    pixelRatio: 2,
    orientation: "portrait",
    name: "11__iPad_Pro__10.5__iPad_Pro_portrait.png",
  },
  {
    width: "414px",
    height: "736px",
    pixelRatio: 3,
    orientation: "portrait",
    name: "iPhone_8_Plus__iPhone_7_Plus__iPhone_6s_Plus__iPhone_6_Plus_portrait.png",
  },
  {
    width: "430px",
    height: "932px",
    pixelRatio: 3,
    orientation: "landscape",
    name: "iPhone_14_Pro_Max_landscape.png",
  },
  {
    width: "810px",
    height: "1080px",
    pixelRatio: 2,
    orientation: "portrait",
    name: "10.2__iPad_portrait.png",
  },
  {
    width: "393px",
    height: "852px",
    pixelRatio: 3,
    orientation: "landscape",
    name: "iPhone_14_Pro_landscape.png",
  },
  {
    width: "834px",
    height: "1112px",
    pixelRatio: 2,
    orientation: "portrait",
    name: "10.5__iPad_Air_portrait.png",
  },
  {
    width: "768px",
    height: "1024px",
    pixelRatio: 2,
    orientation: "portrait",
    name: "9.7__iPad_Pro__7.9__iPad_mini__9.7__iPad_Air__9.7__iPad_portrait.png",
  },
  {
    width: "414px",
    height: "736px",
    pixelRatio: 3,
    orientation: "landscape",
    name: "iPhone_8_Plus__iPhone_7_Plus__iPhone_6s_Plus__iPhone_6_Plus_landscape.png",
  },
  {
    width: "810px",
    height: "1080px",
    pixelRatio: 2,
    orientation: "landscape",
    name: "10.2__iPad_landscape.png",
  },
  {
    width: "393px",
    height: "852px",
    pixelRatio: 3,
    orientation: "portrait",
    name: "iPhone_14_Pro_portrait.png",
  },
  {
    width: "428px",
    height: "926px",
    pixelRatio: 3,
    orientation: "landscape",
    name: "iPhone_14_Plus__iPhone_13_Pro_Max__iPhone_12_Pro_Max_landscape.png",
  },
  {
    width: "1024px",
    height: "1366px",
    pixelRatio: 2,
    orientation: "landscape",
    name: "12.9__iPad_Pro_landscape.png",
  },
  {
    width: "320px",
    height: "568px",
    pixelRatio: 2,
    orientation: "portrait",
    name: "4__iPhone_SE__iPod_touch_5th_generation_and_later_portrait.png",
  },
  {
    width: "834px",
    height: "1194px",
    pixelRatio: 2,
    orientation: "landscape",
    name: "11__iPad_Pro__10.5__iPad_Pro_landscape.png",
  },
  {
    width: "414px",
    height: "896px",
    pixelRatio: 3,
    orientation: "portrait",
    name: "iPhone_11_Pro_Max__iPhone_XS_Max_portrait.png",
  },
  {
    width: "428px",
    height: "926px",
    pixelRatio: 3,
    orientation: "portrait",
    name: "iPhone_14_Plus__iPhone_13_Pro_Max__iPhone_12_Pro_Max_portrait.png",
  },
  {
    width: "414px",
    height: "896px",
    pixelRatio: 2,
    orientation: "portrait",
    name: "iPhone_11__iPhone_XR_portrait.png",
  },
  {
    width: "390px",
    height: "844px",
    pixelRatio: 3,
    orientation: "landscape",
    name: "iPhone_14__iPhone_13_Pro__iPhone_13__iPhone_12_Pro__iPhone_12_landscape.png",
  },
  {
    width: "375px",
    height: "667px",
    pixelRatio: 2,
    orientation: "portrait",
    name: "iPhone_8__iPhone_7__iPhone_6s__iPhone_6__4.7__iPhone_SE_portrait.png",
  },
  {
    width: "744px",
    height: "1133px",
    pixelRatio: 2,
    orientation: "landscape",
    name: "8.3__iPad_Mini_landscape.png",
  },
  {
    width: "768px",
    height: "1024px",
    pixelRatio: 2,
    orientation: "landscape",
    name: "9.7__iPad_Pro__7.9__iPad_mini__9.7__iPad_Air__9.7__iPad_landscape.png",
  },
  {
    width: "320px",
    height: "568px",
    pixelRatio: 2,
    orientation: "landscape",
    name: "4__iPhone_SE__iPod_touch_5th_generation_and_later_landscape.png",
  },
  {
    width: "820px",
    height: "1180px",
    pixelRatio: 2,
    orientation: "portrait",
    name: "10.9__iPad_Air_portrait.png",
  },
  {
    width: "414px",
    height: "896px",
    pixelRatio: 3,
    orientation: "landscape",
    name: "iPhone_11_Pro_Max__iPhone_XS_Max_landscape.png",
  },
];

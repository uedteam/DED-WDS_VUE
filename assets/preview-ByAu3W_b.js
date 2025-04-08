var _a, _b;
import { e as entry_preview_exports, s as setup } from "./entry-preview-DXRK-NRy.js";
import "./vue.esm-bundler-K7CzQrxl.js";
import { Z as SvgWindow, $ as SvgWarningTri, a0 as SvgWarning, a1 as SvgVisibilityOff, a2 as SvgVisibility, a3 as SvgUser, a4 as SvgTemperature, a5 as SvgSuccessCircle, a6 as SvgSettings, a7 as SvgSearch, a8 as SvgQuestionCircle, a9 as SvgPower, aa as SvgPlus, ab as SvgOnline, ac as SvgOffline, ad as SvgNotification, ae as SvgNavigateArrow, af as SvgMoreVert, ag as SvgMinus, ah as SvgMail, ai as SvgLogout, aj as SvgLock, ak as SvgLocation, al as SvgLine, am as SvgLight, an as SvgLanguage, ao as SvgInfoCircle, ap as SvgInfo, aq as SvgIdle, ar as SvgHumidity, as as SvgHome, at as SvgGoogle, au as SvgFirstLastPage, av as SvgFavorite, aw as SvgFan, ax as SvgFacebook, ay as SvgErrorCircle, az as SvgDoor, aA as SvgDisableCircle, aB as SvgDatabase, aC as SvgCurtain, aD as SvgClose, aE as SvgClock, aF as SvgCheck, aG as SvgCalendar, aH as SvgBusy, aI as SvgBarChart, aJ as SvgArrowLeft, aK as SvgArrowDropDown, aL as SvgAir, aM as SvgAdd, aN as SvgAccount } from "./SvgWindow-eXiSerha.js";
const { definePreview } = __STORYBOOK_MODULE_PREVIEW_API__;
var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all) __defProp(target, name, { get: all[name], enumerable: true });
};
var preview_exports = {};
__export(preview_exports, { initialGlobals: () => initialGlobals });
var PARAM_KEY = "viewport";
var modern = { [PARAM_KEY]: { value: void 0, isRotated: false } }, legacy = { viewport: "reset", viewportRotated: false }, initialGlobals = ((_a = globalThis.FEATURES) == null ? void 0 : _a.viewportStoryGlobals) ? modern : legacy;
var INITIAL_VIEWPORTS_DATA = { iphone5: { name: "iPhone 5", styles: { height: "568px", width: "320px" }, type: "mobile" }, iphone6: { name: "iPhone 6", styles: { height: "667px", width: "375px" }, type: "mobile" }, iphone6p: { name: "iPhone 6 Plus", styles: { height: "736px", width: "414px" }, type: "mobile" }, iphone8p: { name: "iPhone 8 Plus", styles: { height: "736px", width: "414px" }, type: "mobile" }, iphonex: { name: "iPhone X", styles: { height: "812px", width: "375px" }, type: "mobile" }, iphonexr: { name: "iPhone XR", styles: { height: "896px", width: "414px" }, type: "mobile" }, iphonexsmax: { name: "iPhone XS Max", styles: { height: "896px", width: "414px" }, type: "mobile" }, iphonese2: { name: "iPhone SE (2nd generation)", styles: { height: "667px", width: "375px" }, type: "mobile" }, iphone12mini: { name: "iPhone 12 mini", styles: { height: "812px", width: "375px" }, type: "mobile" }, iphone12: { name: "iPhone 12", styles: { height: "844px", width: "390px" }, type: "mobile" }, iphone12promax: { name: "iPhone 12 Pro Max", styles: { height: "926px", width: "428px" }, type: "mobile" }, iphoneSE3: { name: "iPhone SE 3rd generation", styles: { height: "667px", width: "375px" }, type: "mobile" }, iphone13: { name: "iPhone 13", styles: { height: "844px", width: "390px" }, type: "mobile" }, iphone13pro: { name: "iPhone 13 Pro", styles: { height: "844px", width: "390px" }, type: "mobile" }, iphone13promax: { name: "iPhone 13 Pro Max", styles: { height: "926px", width: "428px" }, type: "mobile" }, iphone14: { name: "iPhone 14", styles: { height: "844px", width: "390px" }, type: "mobile" }, iphone14pro: { name: "iPhone 14 Pro", styles: { height: "852px", width: "393px" }, type: "mobile" }, iphone14promax: { name: "iPhone 14 Pro Max", styles: { height: "932px", width: "430px" }, type: "mobile" }, ipad: { name: "iPad", styles: { height: "1024px", width: "768px" }, type: "tablet" }, ipad10p: { name: "iPad Pro 10.5-in", styles: { height: "1112px", width: "834px" }, type: "tablet" }, ipad11p: { name: "iPad Pro 11-in", styles: { height: "1194px", width: "834px" }, type: "tablet" }, ipad12p: { name: "iPad Pro 12.9-in", styles: { height: "1366px", width: "1024px" }, type: "tablet" }, galaxys5: { name: "Galaxy S5", styles: { height: "640px", width: "360px" }, type: "mobile" }, galaxys9: { name: "Galaxy S9", styles: { height: "740px", width: "360px" }, type: "mobile" }, nexus5x: { name: "Nexus 5X", styles: { height: "660px", width: "412px" }, type: "mobile" }, nexus6p: { name: "Nexus 6P", styles: { height: "732px", width: "412px" }, type: "mobile" }, pixel: { name: "Pixel", styles: { height: "960px", width: "540px" }, type: "mobile" }, pixelxl: { name: "Pixel XL", styles: { height: "1280px", width: "720px" }, type: "mobile" } }, INITIAL_VIEWPORTS = INITIAL_VIEWPORTS_DATA;
const { global } = __STORYBOOK_MODULE_GLOBAL__;
const { setDefaultProjectAnnotations, setProjectAnnotations: setProjectAnnotations$1, composeStory: composeStory$1, composeStories: composeStories$1 } = __STORYBOOK_MODULE_PREVIEW_API__;
var { window: globalWindow } = global;
globalWindow.STORYBOOK_ENV = "vue3";
globalWindow.PLUGINS_SETUP_FUNCTIONS || (globalWindow.PLUGINS_SETUP_FUNCTIONS = /* @__PURE__ */ new Set());
({ ...entry_preview_exports });
try {
  ((_b = module == null ? void 0 : module.hot) == null ? void 0 : _b.decline) && module.hot.decline();
} catch {
}
const icons = {
  SvgAccount,
  SvgAdd,
  SvgAir,
  SvgArrowDown: SvgArrowDropDown,
  SvgArrowDropDown,
  SvgArrowLeft,
  SvgBarChart,
  SvgBusy,
  SvgCalendar,
  SvgCheck,
  SvgClock,
  SvgClose,
  SvgCurtain,
  SvgDatabase,
  SvgDisableCircle,
  SvgDoor,
  SvgErrorCircle,
  SvgFacebook,
  SvgFan,
  SvgFavorite,
  SvgFirstLastPage,
  SvgGoogle,
  SvgHome,
  SvgHumidity,
  SvgIdle,
  SvgInfo,
  SvgInfoCircle,
  SvgLanguage,
  SvgLight,
  SvgLine,
  SvgLocation,
  SvgLock,
  SvgLogout,
  SvgMail,
  SvgMinus,
  SvgMoreVert,
  SvgNavigateArrow,
  SvgNotification,
  SvgOffline,
  SvgOnline,
  SvgPlus,
  SvgPower,
  SvgQuestionCircle,
  SvgSearch,
  SvgSettings,
  SvgSuccessCircle,
  SvgTemperature,
  SvgUser,
  SvgVisibility,
  SvgVisibilityOff,
  SvgWarning,
  SvgWarningTri,
  SvgWindow
};
setup((app) => {
  app.provide("icons", icons);
});
const preview = {
  parameters: {
    backgrounds: {
      values: [
        { name: "light", value: "#fff" },
        { name: "dark", value: "#333" },
        { name: "gray", value: "#f0f0f0" }
      ]
    },
    options: {
      storySort: {
        method: "alphabetical",
        order: ["Introduction", "Components"],
        locales: "en-US"
      }
    },
    viewport: {
      viewports: INITIAL_VIEWPORTS
    },
    controls: {
      expanded: true,
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    }
  },
  tags: ["autodocs"]
};
export {
  preview as default
};

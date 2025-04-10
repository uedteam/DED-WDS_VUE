import { v as ref, g as computed, A as onMounted, B as onUnmounted, c as createElementBlock, j as createBlock, d as createCommentVNode, k as normalizeStyle, b as createVNode, a as createBaseVNode, F as Fragment, o as openBlock } from "./vue.esm-bundler-K7CzQrxl.js";
import { _ as _sfc_main$3 } from "./Avatar-Bup2bs56.js";
import { _ as _sfc_main$5 } from "./Button-8IAwqsIt.js";
import { _ as _sfc_main$2 } from "./Icon-B6pI5HKs.js";
import { _ as _sfc_main$6 } from "./Input-CBUjHHWU.js";
import { _ as _sfc_main$4 } from "./Menu-DmxDrp5J.js";
import { _ as _sfc_main$1 } from "./Navbar-cAnq8cPW.js";
const _hoisted_1 = {
  key: 0,
  class: "ded-side-nav-header"
};
const _hoisted_2 = {
  key: 0,
  class: "ded-side-nav-header-logo"
};
const _hoisted_3 = ["href"];
const _hoisted_4 = ["src"];
const _hoisted_5 = {
  key: 1,
  class: "ded-side-nav-desktop"
};
const _hoisted_6 = {
  key: 2,
  class: "ded-side-nav-mobile"
};
const MOBILE_BREAKPOINT = 1024;
const _sfc_main = {
  __name: "SideNav",
  props: {
    themeColor: {
      type: String,
      default: "#00467C"
    },
    mobileLogoSrc: {
      type: String,
      default: ""
    },
    desktopLogoSrc: {
      type: String,
      default: ""
    },
    logoLink: {
      type: String,
      default: ""
    },
    hasLogo: {
      type: Boolean,
      default: false
    },
    hasRWD: {
      type: Boolean,
      default: false
    },
    userName: {
      type: String,
      required: true
    },
    caption: {
      type: String,
      required: true
    },
    userStatus: {
      type: String,
      required: true,
      validator: (value) => ["none", "online", "busy", "idle", "offline"].includes(value)
    },
    hasSearch: {
      type: Boolean,
      default: false
    },
    dataSource: {
      type: Array,
      required: true
    },
    className: {
      type: String,
      default: ""
    }
  },
  setup(__props) {
    const props = __props;
    const isMobile = ref(false);
    const isCollapsed = ref(false);
    const sortDataSource = computed(() => {
      return [...props.dataSource].sort((a, b) => a.order - b.order);
    });
    function handleCollapsed() {
      isCollapsed.value = !isCollapsed.value;
    }
    function handleResize() {
      const isBelowBreakpoint = window.innerWidth < MOBILE_BREAKPOINT;
      isMobile.value = isBelowBreakpoint;
      isCollapsed.value = isBelowBreakpoint;
    }
    const computedThemeColor = computed(() => {
      var _a;
      const color = props.themeColor;
      const presetColors = {
        blue: "#00467C",
        yellow: "#F4E069",
        grape: "#AB86D1",
        black: "#000000"
      };
      const isHexColor = /^#(?:[0-9A-F]{3}){1,2}$/i.test(color);
      const presetName = (_a = Object.entries(presetColors).find(
        ([, value]) => value.toLowerCase() === color.toLowerCase()
      )) == null ? void 0 : _a[0];
      if (presetName === "blue" || presetName === "yellow") {
        return {
          backgroundColor: presetColors[presetName]
        };
      }
      return {
        backgroundColor: presetColors[color] || (isHexColor ? color : "#ffffff")
      };
    });
    const computedContentColor = computed(() => {
      var _a;
      const color = props.themeColor;
      const presetColors = {
        blue: "#00467C",
        yellow: "#F4E069",
        grape: "#AB86D1",
        black: "#000000"
      };
      const presetTextColors = {
        blue: "#ffffff",
        yellow: "#004E81",
        grape: "#004E81",
        black: "#cccccc"
      };
      if (presetTextColors[color]) {
        return presetTextColors[color];
      }
      const presetName = (_a = Object.entries(presetColors).find(
        ([, value]) => value.toLowerCase() === color.toLowerCase()
      )) == null ? void 0 : _a[0];
      if (presetName && presetTextColors[presetName]) {
        return presetTextColors[presetName];
      }
      return "#000000";
    });
    const hasLogo = computed(() => {
      return props.logo !== "";
    });
    onMounted(() => {
      handleResize();
      window.addEventListener("resize", handleResize);
    });
    onUnmounted(() => {
      window.removeEventListener("resize", handleResize);
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        isMobile.value && isCollapsed.value && __props.hasRWD ? (openBlock(), createBlock(_sfc_main$1, {
          key: 0,
          "data-source": sortDataSource.value,
          "has-logo": hasLogo.value,
          "logo-src": props.mobileLogoSrc,
          "class-name": "ded-side-nav-rwd",
          style: { "position": "fixed", "top": "0", "height": "60px", "width": "100%" }
        }, null, 8, ["data-source", "has-logo", "logo-src"])) : createCommentVNode("", true),
        !isMobile.value ? (openBlock(), createElementBlock("div", {
          key: 1,
          class: "ded-side-nav",
          style: normalizeStyle({ width: isCollapsed.value ? "auto" : "100%", ...computedThemeColor.value })
        }, [
          props.hasLogo ? (openBlock(), createElementBlock("div", _hoisted_1, [
            !isCollapsed.value ? (openBlock(), createElementBlock("div", _hoisted_2, [
              props.logoLink ? (openBlock(), createElementBlock("a", {
                key: 0,
                href: props.logoLink
              }, [
                createBaseVNode("img", {
                  src: props.desktopLogoSrc,
                  alt: "logo"
                }, null, 8, _hoisted_4)
              ], 8, _hoisted_3)) : (openBlock(), createBlock(_sfc_main$2, {
                key: 1,
                name: props.logo,
                width: "90",
                height: "30",
                color: computedContentColor.value
              }, null, 8, ["name", "color"]))
            ])) : createCommentVNode("", true),
            createBaseVNode("button", {
              class: "side-nav-toggle",
              onClick: handleCollapsed
            }, [
              createVNode(_sfc_main$2, {
                name: "SvgArrowDown",
                size: "24",
                color: "#fff",
                style: normalizeStyle({ transform: isCollapsed.value ? "rotate(-90deg)" : "rotate(90deg)" })
              }, null, 8, ["style"])
            ])
          ])) : createCommentVNode("", true),
          !isCollapsed.value ? (openBlock(), createElementBlock("div", _hoisted_5, [
            createVNode(_sfc_main$3, {
              shape: "circle",
              size: "large",
              status: props.userStatus,
              "is-show-info": true,
              src: "https://storage.googleapis.com/ded-wds-bucket/fox.png",
              alt: "無圖顯示",
              "user-name": props.userName,
              caption: props.caption,
              "class-name": ""
            }, null, 8, ["status", "user-name", "caption"]),
            createVNode(_sfc_main$5, {
              "theme-color": "primary",
              variant: "text",
              size: "large",
              prefix: "SvgLogout"
            })
          ])) : (openBlock(), createElementBlock("div", _hoisted_6, [
            createVNode(_sfc_main$3, {
              shape: "circle",
              size: "small",
              status: "online",
              "is-show-info": false,
              src: "https://storage.googleapis.com/ded-wds-bucket/fox.png",
              alt: "無圖顯示",
              "user-name": "Name",
              caption: "Caption",
              "class-name": ""
            })
          ])),
          !isCollapsed.value && props.hasSearch ? (openBlock(), createBlock(_sfc_main$6, {
            key: 3,
            type: "text",
            placeholder: "Search...",
            prefix: "SvgSearch",
            size: "medium",
            "init-value": "",
            onChange: () => {
            }
          })) : createCommentVNode("", true),
          createVNode(_sfc_main$4, {
            "data-source": sortDataSource.value,
            "is-collapsed": isCollapsed.value,
            color: computedContentColor.value,
            "has-divider": false,
            "class-name": ""
          }, null, 8, ["data-source", "is-collapsed", "color"])
        ], 4)) : createCommentVNode("", true)
      ], 64);
    };
  }
};
_sfc_main.__docgenInfo = { "exportName": "default", "displayName": "SideNav", "description": "", "tags": {}, "props": [{ "name": "themeColor", "type": { "name": "string" }, "defaultValue": { "func": false, "value": '"#00467C"' } }, { "name": "mobileLogoSrc", "type": { "name": "string" }, "defaultValue": { "func": false, "value": '""' } }, { "name": "desktopLogoSrc", "type": { "name": "string" }, "defaultValue": { "func": false, "value": '""' } }, { "name": "logoLink", "type": { "name": "string" }, "defaultValue": { "func": false, "value": '""' } }, { "name": "hasLogo", "type": { "name": "boolean" }, "defaultValue": { "func": false, "value": "false" } }, { "name": "hasRWD", "type": { "name": "boolean" }, "defaultValue": { "func": false, "value": "false" } }, { "name": "userName", "type": { "name": "string" }, "required": true }, { "name": "caption", "type": { "name": "string" }, "required": true }, { "name": "userStatus", "type": { "name": "string" }, "required": true, "values": ["none", "online", "busy", "idle", "offline"] }, { "name": "hasSearch", "type": { "name": "boolean" }, "defaultValue": { "func": false, "value": "false" } }, { "name": "dataSource", "type": { "name": "array" }, "required": true }, { "name": "className", "type": { "name": "string" }, "defaultValue": { "func": false, "value": '""' } }], "sourceFiles": ["/Users/auouser/Desktop/Work_Space/DED-WDS_VUE/libs/src/ui/element/SideNav/SideNav.vue"] };
export {
  _sfc_main as _
};

import { g as computed, j as createBlock, d as createCommentVNode, o as openBlock, n as normalizeClass, c as createElementBlock, a as createBaseVNode, b as createVNode, t as toDisplayString } from "./vue.esm-bundler-K7CzQrxl.js";
import { _ as _sfc_main$2 } from "./Icon-B6pI5HKs.js";
import { _ as _sfc_main$3 } from "./Image-BJOsgKZf.js";
const _sfc_main$1 = {
  __name: "AvatarStatus",
  props: {
    avatarSize: {
      type: String,
      validator: (value) => ["xsmall", "small", "medium", "large"].includes(value)
    },
    avatarStatus: {
      type: String,
      default: "none",
      validator: (value) => ["none", "online", "idle", "busy", "offline"].includes(value)
    }
  },
  setup(__props) {
    const props = __props;
    const statusIcon = computed(() => {
      const statusMap = {
        online: "SvgOnline",
        idle: "SvgIdle",
        busy: "SvgBusy",
        offline: "SvgOffline"
      };
      return statusMap[props.avatarStatus] || null;
    });
    return (_ctx, _cache) => {
      return props.avatarStatus !== "none" ? (openBlock(), createBlock(_sfc_main$2, {
        key: 0,
        name: statusIcon.value,
        class: normalizeClass(["ded-avatar-icon", [`ded-avatar-icon-${props.avatarSize}`, `ded-avatar-icon-${props.avatarStatus}`]])
      }, null, 8, ["name", "class"])) : createCommentVNode("", true);
    };
  }
};
_sfc_main$1.__docgenInfo = { "exportName": "default", "displayName": "AvatarStatus", "description": "", "tags": {}, "props": [{ "name": "avatarSize", "type": { "name": "string" }, "values": ["xsmall", "small", "medium", "large"] }, { "name": "avatarStatus", "type": { "name": "string" }, "defaultValue": { "func": false, "value": '"none"' }, "values": ["none", "online", "idle", "busy", "offline"] }], "sourceFiles": ["/Users/auouser/Desktop/Work_Space/DED-WDS_VUE/libs/src/ui/element/Avatar/AvatarStatus.vue"] };
const _hoisted_1 = { class: "ded-avatar-wrapper" };
const _hoisted_2 = {
  key: 0,
  class: "ded-avatar-info"
};
const _hoisted_3 = { class: "ded-avatar-info-name" };
const _hoisted_4 = { class: "ded-avatar-info-caption" };
const _sfc_main = {
  __name: "Avatar",
  props: {
    shape: {
      type: String,
      default: "circle",
      validator: (value) => ["circle", "square"].includes(value)
    },
    size: {
      type: String,
      default: "medium",
      validator: (value) => ["small", "medium", "large"].includes(value)
    },
    status: {
      type: String,
      default: "none",
      validator: (value) => ["none", "online", "idle", "busy", "offline"].includes(value)
    },
    isShowInfo: {
      type: Boolean,
      default: false
    },
    src: {
      type: String,
      default: ""
    },
    alt: {
      type: String,
      default: "無圖顯示"
    },
    userName: {
      type: String,
      required: true
    },
    caption: {
      type: String,
      required: true
    },
    className: {
      type: String,
      default: ""
    }
  },
  setup(__props) {
    const props = __props;
    function getInitialsOrDefault(string, count) {
      let matchCount = 0;
      let matchString = "";
      string.split("").forEach((char) => {
        if (/^[A-Z]+$/.test(char)) {
          if (matchCount < 2) {
            matchCount++;
            matchString = matchString + char;
          }
        }
      });
      return matchCount < 2 ? string.slice(0, count).toUpperCase() : matchString;
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createBaseVNode("div", {
          class: normalizeClass(["ded-avatar-container", {
            [`ded-avatar-container-${props.size}`]: true,
            [props.className]: !!props.className
          }])
        }, [
          createBaseVNode("div", {
            class: normalizeClass(["ded-avatar", [`ded-avatar-${props.shape}`]])
          }, [
            props.src ? (openBlock(), createBlock(_sfc_main$3, {
              key: 0,
              src: props.src,
              alt: props.alt,
              ratio: "1x1",
              "object-fit": "cover"
            }, null, 8, ["src", "alt"])) : (openBlock(), createElementBlock("span", {
              key: 1,
              class: normalizeClass(["ded-avatar-text", [`ded-text-${props.size}`]])
            }, toDisplayString(getInitialsOrDefault(props.userName, 2)), 3))
          ], 2),
          createVNode(_sfc_main$1, {
            "avatar-status": props.status,
            "avatar-size": props.size
          }, null, 8, ["avatar-status", "avatar-size"])
        ], 2),
        props.isShowInfo ? (openBlock(), createElementBlock("div", _hoisted_2, [
          createBaseVNode("div", _hoisted_3, toDisplayString(props.userName), 1),
          createBaseVNode("div", _hoisted_4, toDisplayString(props.caption), 1)
        ])) : createCommentVNode("", true)
      ]);
    };
  }
};
_sfc_main.__docgenInfo = { "exportName": "default", "displayName": "Avatar", "description": "", "tags": {}, "props": [{ "name": "shape", "type": { "name": "string" }, "defaultValue": { "func": false, "value": '"circle"' }, "values": ["circle", "square"] }, { "name": "size", "type": { "name": "string" }, "defaultValue": { "func": false, "value": '"medium"' }, "values": ["small", "medium", "large"] }, { "name": "status", "type": { "name": "string" }, "defaultValue": { "func": false, "value": '"none"' }, "values": ["none", "online", "idle", "busy", "offline"] }, { "name": "isShowInfo", "type": { "name": "boolean" }, "defaultValue": { "func": false, "value": "false" } }, { "name": "src", "type": { "name": "string" }, "defaultValue": { "func": false, "value": '""' } }, { "name": "alt", "type": { "name": "string" }, "defaultValue": { "func": false, "value": '"無圖顯示"' } }, { "name": "userName", "type": { "name": "string" }, "required": true }, { "name": "caption", "type": { "name": "string" }, "required": true }, { "name": "className", "type": { "name": "string" }, "defaultValue": { "func": false, "value": '""' } }], "sourceFiles": ["/Users/auouser/Desktop/Work_Space/DED-WDS_VUE/libs/src/ui/element/Avatar/Avatar.vue"] };
export {
  _sfc_main as _
};

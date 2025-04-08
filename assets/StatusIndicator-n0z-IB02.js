import { c as createElementBlock, d as createCommentVNode, a as createBaseVNode, b as createVNode, n as normalizeClass, r as renderSlot, o as openBlock } from "./vue.esm-bundler-K7CzQrxl.js";
import { _ as _sfc_main$1 } from "./Icon-B6pI5HKs.js";
const _hoisted_1 = {
  key: 0,
  style: { "line-height": "1" }
};
const _hoisted_2 = {
  key: 1,
  class: "status-indicator-content"
};
const _sfc_main = /* @__PURE__ */ Object.assign({
  name: "StatusIndicator"
}, {
  __name: "StatusIndicator",
  props: {
    themeColor: {
      type: String,
      default: "primary",
      validator: (value) => [
        "primary",
        "secondary",
        "neutral",
        "info",
        "success",
        "warning",
        "error"
      ].includes(value)
    },
    variant: {
      type: String,
      default: "text",
      validator: (value) => ["text", "soft", "filled"].includes(value)
    },
    isShowDot: {
      type: Boolean,
      default: true
    },
    prefix: {
      type: String
    },
    size: {
      type: String,
      validator: (value) => ["small", "medium", "large"].includes(value)
    },
    className: {
      type: String,
      default: ""
    }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(["status-indicator", {
          [`status-indicator-${props.variant}-${props.themeColor}`]: props.variant && props.themeColor,
          [props.className]: !!props.className
        }]),
        role: "status"
      }, [
        props.prefix ? (openBlock(), createElementBlock("div", _hoisted_1, [
          createVNode(_sfc_main$1, {
            name: props.prefix,
            size: "20"
          }, null, 8, ["name"])
        ])) : createCommentVNode("", true),
        props.isShowDot && !props.prefix ? (openBlock(), createElementBlock("div", _hoisted_2, [
          createBaseVNode("span", {
            class: normalizeClass(["status-indicator-dot", {
              "status-indicator-dot-white": props.variant === "filled",
              [`status-indicator-dot-${props.themeColor}`]: props.variant === "text" && props.themeColor || props.variant === "soft" && props.themeColor
            }])
          }, null, 2)
        ])) : createCommentVNode("", true),
        createBaseVNode("div", {
          class: normalizeClass(`ded-text-${props.size}`)
        }, [
          renderSlot(_ctx.$slots, "default")
        ], 2)
      ], 2);
    };
  }
});
_sfc_main.__docgenInfo = { "name": "StatusIndicator", "exportName": "default", "displayName": "StatusIndicator", "description": "", "tags": {}, "props": [{ "name": "themeColor", "type": { "name": "string" }, "defaultValue": { "func": false, "value": '"primary"' }, "values": ["primary", "secondary", "neutral", "info", "success", "warning", "error"] }, { "name": "variant", "type": { "name": "string" }, "defaultValue": { "func": false, "value": '"text"' }, "values": ["text", "soft", "filled"] }, { "name": "isShowDot", "type": { "name": "boolean" }, "defaultValue": { "func": false, "value": "true" } }, { "name": "prefix", "type": { "name": "string" } }, { "name": "size", "type": { "name": "string" }, "values": ["small", "medium", "large"] }, { "name": "className", "type": { "name": "string" }, "defaultValue": { "func": false, "value": '""' } }], "slots": [{ "name": "default" }], "sourceFiles": ["/Users/auouser/Desktop/Work_Space/DED-WDS_VUE/libs/src/ui/element/StatusIndicator/StatusIndicator.vue"] };
export {
  _sfc_main as _
};

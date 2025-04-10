import { c as createElementBlock, d as createCommentVNode, n as normalizeClass, b as createVNode, r as renderSlot, o as openBlock } from "./vue.esm-bundler-K7CzQrxl.js";
import { _ as _sfc_main$1 } from "./Icon-B6pI5HKs.js";
const _hoisted_1 = {
  key: 1,
  class: "ded-button-content"
};
const _sfc_main = {
  __name: "Button",
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
      required: true,
      validator: (value) => ["text", "filled", "ghost", "soft"].includes(value)
    },
    prefix: {
      type: String
    },
    suffix: {
      type: String
    },
    size: {
      type: String,
      default: "medium",
      validator: (value) => ["small", "medium", "large"].includes(value)
    },
    width: {
      type: String,
      default: "fit",
      validator: (value) => ["fluid", "fit"].includes(value)
    },
    borderWidth: {
      type: String,
      validator: (value) => ["none", "1px", "2px", "3px", "4px", "5px"].includes(value)
    },
    radius: {
      type: String,
      validator: (value) => ["none", "2px", "4px", "8px", "12px", "16px", "32px", "full"].includes(value)
    },
    isDisabled: {
      type: Boolean,
      default: false
    },
    className: {
      type: String,
      default: ""
    }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("button", {
        class: normalizeClass(["ded-button", {
          [`ded-button-${props.width}`]: props.width,
          [`ded-text-${props.size}`]: props.size,
          [`ded-button-${props.variant}`]: props.variant,
          [`ded-button-${props.variant}-${props.themeColor}`]: props.variant && props.themeColor,
          [`ded-button-${props.variant}-disabled`]: props.variant && props.isDisabled,
          [`ded-button-border-width-${props.borderWidth}`]: props.borderWidth,
          [`ded-button-radius-${props.radius}`]: props.radius,
          [props.className]: !!props.className
        }])
      }, [
        __props.prefix ? (openBlock(), createElementBlock("div", {
          key: 0,
          class: normalizeClass(`ded-icon-${props.size}`)
        }, [
          createVNode(_sfc_main$1, {
            name: props.prefix
          }, null, 8, ["name"])
        ], 2)) : createCommentVNode("", true),
        _ctx.$slots.default ? (openBlock(), createElementBlock("div", _hoisted_1, [
          renderSlot(_ctx.$slots, "default")
        ])) : createCommentVNode("", true),
        __props.suffix ? (openBlock(), createElementBlock("div", {
          key: 2,
          class: normalizeClass(`ded-icon-${props.size}`)
        }, [
          createVNode(_sfc_main$1, {
            name: props.suffix
          }, null, 8, ["name"])
        ], 2)) : createCommentVNode("", true)
      ], 2);
    };
  }
};
_sfc_main.__docgenInfo = { "exportName": "default", "displayName": "Button", "description": "", "tags": {}, "props": [{ "name": "themeColor", "type": { "name": "string" }, "defaultValue": { "func": false, "value": '"primary"' }, "values": ["primary", "secondary", "neutral", "info", "success", "warning", "error"] }, { "name": "variant", "type": { "name": "string" }, "required": true, "values": ["text", "filled", "ghost", "soft"] }, { "name": "prefix", "type": { "name": "string" } }, { "name": "suffix", "type": { "name": "string" } }, { "name": "size", "type": { "name": "string" }, "defaultValue": { "func": false, "value": '"medium"' }, "values": ["small", "medium", "large"] }, { "name": "width", "type": { "name": "string" }, "defaultValue": { "func": false, "value": '"fit"' }, "values": ["fluid", "fit"] }, { "name": "borderWidth", "type": { "name": "string" }, "values": ["none", "1px", "2px", "3px", "4px", "5px"] }, { "name": "radius", "type": { "name": "string" }, "values": ["none", "2px", "4px", "8px", "12px", "16px", "32px", "full"] }, { "name": "isDisabled", "type": { "name": "boolean" }, "defaultValue": { "func": false, "value": "false" } }, { "name": "className", "type": { "name": "string" }, "defaultValue": { "func": false, "value": '""' } }], "slots": [{ "name": "default" }], "sourceFiles": ["/Users/auouser/Desktop/Work_Space/DED-WDS_VUE/libs/src/ui/element/Button/Button.vue"] };
export {
  _sfc_main as _
};

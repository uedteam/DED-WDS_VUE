import { g as computed, c as createElementBlock, r as renderSlot, a as createBaseVNode, d as createCommentVNode, t as toDisplayString, n as normalizeClass, o as openBlock } from "./vue.esm-bundler-K7CzQrxl.js";
const _hoisted_1 = {
  key: 0,
  class: "ded-badge-content"
};
const _hoisted_2 = { class: "ded-badge-content-text" };
const _hoisted_3 = {
  key: 0,
  class: "ded-badge-content-text"
};
const _sfc_main = {
  __name: "Badge",
  props: {
    themeColor: {
      type: String,
      default: "error",
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
    isShowDot: {
      type: Boolean,
      default: false
    },
    value: {
      type: Number,
      default: 0
    },
    limit: {
      type: Number,
      default: 0
    },
    className: {
      type: String,
      default: ""
    }
  },
  setup(__props) {
    const props = __props;
    const computedValue = computed(() => {
      if (props.value > props.limit) {
        return props.value > props.limit ? props.limit : props.value;
      }
      return props.value;
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(["ded-badge-container", { [props.className]: !!props.className }])
      }, [
        renderSlot(_ctx.$slots, "default"),
        createBaseVNode("div", {
          class: normalizeClass(["ded-badge", [
            `ded-badge-color-${props.themeColor}`,
            props.isShowDot ? "ded-badge-dot" : ""
          ]])
        }, [
          props.isShowDot === false && props.value > 0 ? (openBlock(), createElementBlock("div", _hoisted_1, [
            createBaseVNode("span", _hoisted_2, toDisplayString(computedValue.value), 1),
            props.value > props.limit ? (openBlock(), createElementBlock("span", _hoisted_3, "+")) : createCommentVNode("", true)
          ])) : createCommentVNode("", true)
        ], 2)
      ], 2);
    };
  }
};
_sfc_main.__docgenInfo = { "exportName": "default", "displayName": "Badge", "description": "", "tags": {}, "props": [{ "name": "themeColor", "type": { "name": "string" }, "defaultValue": { "func": false, "value": '"error"' }, "values": ["primary", "secondary", "neutral", "info", "success", "warning", "error"] }, { "name": "isShowDot", "type": { "name": "boolean" }, "defaultValue": { "func": false, "value": "false" } }, { "name": "value", "type": { "name": "number" }, "defaultValue": { "func": false, "value": "0" } }, { "name": "limit", "type": { "name": "number" }, "defaultValue": { "func": false, "value": "0" } }, { "name": "className", "type": { "name": "string" }, "defaultValue": { "func": false, "value": '""' } }], "slots": [{ "name": "default" }], "sourceFiles": ["/Users/auouser/Desktop/Work_Space/DED-WDS_VUE/libs/src/ui/element/Badge/Badge.vue"] };
export {
  _sfc_main as _
};

import { c as createElementBlock, d as createCommentVNode, r as renderSlot, n as normalizeClass, o as openBlock } from "./vue.esm-bundler-K7CzQrxl.js";
const _hoisted_1 = {
  key: 0,
  class: "ded-divider-content"
};
const _sfc_main = {
  __name: "Divider",
  props: {
    width: {
      type: String,
      default: "1px",
      validator: (value) => ["1px", "2px", "3px", "4px", "5px"].includes(value)
    },
    type: {
      type: String,
      default: "solid",
      validator: (value) => ["solid", "dashed", "dotted"].includes(value)
    },
    direction: {
      type: String,
      default: "horizontal",
      validator: (value) => ["horizontal", "vertical"].includes(value)
    },
    align: {
      type: String,
      default: "center",
      validator: (value) => ["start", "center", "end"].includes(value)
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
        class: normalizeClass(["ded-divider", [
          `ded-divider-${props.direction}`,
          `ded-divider-${props.width}`,
          `ded-divider-${props.type}`,
          _ctx.$slots.default ? `ded-divider-${props.align}` : "",
          ...props.className.split(" ")
        ]])
      }, [
        _ctx.$slots.default && _ctx.$slots.default().some((node) => {
          var _a;
          return (_a = node.children) == null ? void 0 : _a.trim();
        }) ? (openBlock(), createElementBlock("div", _hoisted_1, [
          renderSlot(_ctx.$slots, "default")
        ])) : createCommentVNode("", true)
      ], 2);
    };
  }
};
_sfc_main.__docgenInfo = { "exportName": "default", "displayName": "Divider", "description": "", "tags": {}, "props": [{ "name": "width", "type": { "name": "string" }, "defaultValue": { "func": false, "value": '"1px"' }, "values": ["1px", "2px", "3px", "4px", "5px"] }, { "name": "type", "type": { "name": "string" }, "defaultValue": { "func": false, "value": '"solid"' }, "values": ["solid", "dashed", "dotted"] }, { "name": "direction", "type": { "name": "string" }, "defaultValue": { "func": false, "value": '"horizontal"' }, "values": ["horizontal", "vertical"] }, { "name": "align", "type": { "name": "string" }, "defaultValue": { "func": false, "value": '"center"' }, "values": ["start", "center", "end"] }, { "name": "className", "type": { "name": "string" }, "defaultValue": { "func": false, "value": '""' } }], "slots": [{ "name": "default" }], "sourceFiles": ["/Users/auouser/Desktop/Work_Space/DED-WDS_VUE/libs/src/ui/element/Divider/Divider.vue"] };
export {
  _sfc_main as _
};

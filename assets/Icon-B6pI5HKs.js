import { g as computed, c as createElementBlock, j as createBlock, d as createCommentVNode, k as normalizeStyle, l as resolveDynamicComponent, m as inject, o as openBlock } from "./vue.esm-bundler-K7CzQrxl.js";
const _hoisted_1 = ["src", "width", "height"];
const _sfc_main = {
  __name: "Icon",
  props: {
    name: {
      type: String
    },
    size: {
      type: String
    },
    width: {
      type: String
    },
    height: {
      type: String
    },
    color: {
      type: String,
      default: "currentColor"
    },
    src: {
      type: String
    }
  },
  setup(__props) {
    const props = __props;
    const icons = inject("icons", {});
    const IconComponent = computed(() => icons[props.name] || null);
    return (_ctx, _cache) => {
      return props.src ? (openBlock(), createElementBlock("img", {
        key: 0,
        src: props.src,
        width: props.size ? props.size : props.width,
        height: props.size ? props.size : props.height,
        style: normalizeStyle({ fill: props.color })
      }, null, 12, _hoisted_1)) : IconComponent.value ? (openBlock(), createBlock(resolveDynamicComponent(IconComponent.value), {
        key: 1,
        width: props.size ? props.size : props.width,
        height: props.size ? props.size : props.height,
        style: normalizeStyle({ fill: props.color })
      }, null, 8, ["width", "height", "style"])) : createCommentVNode("", true);
    };
  }
};
_sfc_main.__docgenInfo = { "exportName": "default", "displayName": "Icon", "description": "", "tags": {}, "props": [{ "name": "name", "type": { "name": "string" } }, { "name": "size", "type": { "name": "string" } }, { "name": "width", "type": { "name": "string" } }, { "name": "height", "type": { "name": "string" } }, { "name": "color", "type": { "name": "string" }, "defaultValue": { "func": false, "value": '"currentColor"' } }, { "name": "src", "type": { "name": "string" } }], "sourceFiles": ["/Users/auouser/Desktop/Work_Space/DED-WDS_VUE/libs/src/ui/element/Icon/Icon.vue"] };
export {
  _sfc_main as _
};

import { g as computed, c as createElementBlock, r as renderSlot, n as normalizeClass, o as openBlock } from "./vue.esm-bundler-K7CzQrxl.js";
const _sfc_main = {
  __name: "Title",
  props: {
    themeColor: {
      type: String,
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
    level: {
      type: Number,
      default: 0,
      validator: (value) => [0, 1, 2, 3, 4, 5, 6].includes(value)
    },
    className: {
      type: String,
      default: ""
    }
  },
  setup(__props) {
    const props = __props;
    const headingCVAClass = computed(() => {
      return [
        `ded-title`,
        `ded-title-level-${props.level}`,
        props.themeColor ? `ded-title-${props.themeColor}` : ""
      ].filter(Boolean).join(" ");
    });
    const finalHeadingClass = computed(() => {
      return [headingCVAClass.value, props.className].filter(Boolean).join(" ");
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(finalHeadingClass.value)
      }, [
        renderSlot(_ctx.$slots, "default")
      ], 2);
    };
  }
};
_sfc_main.__docgenInfo = { "exportName": "default", "displayName": "Title", "description": "", "tags": {}, "props": [{ "name": "themeColor", "type": { "name": "string" }, "values": ["primary", "secondary", "neutral", "info", "success", "warning", "error"] }, { "name": "level", "type": { "name": "number" }, "defaultValue": { "func": false, "value": "0" }, "values": [1, 2, 3, 4, 5, 6] }, { "name": "className", "type": { "name": "string" }, "defaultValue": { "func": false, "value": '""' } }], "slots": [{ "name": "default" }], "sourceFiles": ["/Users/auouser/Desktop/Work_Space/DED-WDS_VUE/libs/src/ui/element/Title/Title.vue"] };
export {
  _sfc_main as _
};

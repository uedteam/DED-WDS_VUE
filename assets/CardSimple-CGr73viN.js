import { c as createElementBlock, a as createBaseVNode, b as createVNode, d as createCommentVNode, n as normalizeClass, e as withCtx, t as toDisplayString, o as openBlock, f as createTextVNode } from "./vue.esm-bundler-K7CzQrxl.js";
import { _ as _sfc_main$3 } from "./Button-8IAwqsIt.js";
import { _ as _sfc_main$1 } from "./Image-BJOsgKZf.js";
import { _ as _sfc_main$2 } from "./Title-BgzIyXq9.js";
const _hoisted_1 = { class: "ded-card-simple-image" };
const _hoisted_2 = { class: "ded-card-simple-content" };
const _hoisted_3 = {
  key: 0,
  class: "ded-card-simple-text-subtitle"
};
const _hoisted_4 = {
  key: 1,
  class: "ded-card-simple-text-desc ded-multiline-ellipsis"
};
const _sfc_main = {
  __name: "CardSimple",
  props: {
    layout: {
      type: String,
      default: "vertical",
      validator: (value) => ["horizontal", "vertical"].includes(value)
    },
    hasBorder: {
      type: Boolean,
      default: true
    },
    imgSrc: {
      type: String,
      required: true
    },
    buttonName: {
      type: String
    },
    align: {
      type: String,
      default: "left",
      validator: (value) => ["left", "center", "right"].includes(value)
    },
    title: {
      type: String,
      required: true
    },
    subtitle: {
      type: String
    },
    description: {
      type: String
    }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(["ded-card-simple", {
          [`ded-card-simple-${props.layout}`]: props.layout,
          "ded-card-simple-border": props.hasBorder
        }])
      }, [
        createBaseVNode("div", _hoisted_1, [
          createVNode(_sfc_main$1, {
            src: props.imgSrc,
            alt: "placeholder",
            ratio: props.layout === "vertical" ? "16x9" : "1x1",
            "object-fit": "cover"
          }, null, 8, ["src", "ratio"])
        ]),
        createBaseVNode("div", _hoisted_2, [
          createBaseVNode("div", {
            class: normalizeClass(["ded-card-simple-text", [
              `ded-card-simple-text-${props.layout}`
            ]])
          }, [
            createVNode(_sfc_main$2, {
              "theme-color": "primary",
              level: 3
            }, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(props.title), 1)
              ]),
              _: 1
            }),
            props.subtitle ? (openBlock(), createElementBlock("p", _hoisted_3, toDisplayString(props.subtitle), 1)) : createCommentVNode("", true),
            props.description ? (openBlock(), createElementBlock("p", _hoisted_4, toDisplayString(props.description), 1)) : createCommentVNode("", true)
          ], 2),
          props.buttonName ? (openBlock(), createElementBlock("div", {
            key: 0,
            class: normalizeClass(["ded-card-simple-content-button-group", {
              [`ded-card-simple-content-button-group-${props.align}`]: props.align
            }])
          }, [
            createVNode(_sfc_main$3, {
              "theme-color": "primary",
              variant: "filled",
              size: props.layout === "vertical" ? "medium" : "large",
              width: props.align === "center" ? "fluid" : "fit",
              "border-width": "1px",
              radius: "4px"
            }, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(props.buttonName), 1)
              ]),
              _: 1
            }, 8, ["size", "width"])
          ], 2)) : createCommentVNode("", true)
        ])
      ], 2);
    };
  }
};
_sfc_main.__docgenInfo = { "exportName": "default", "displayName": "CardSimple", "description": "", "tags": {}, "props": [{ "name": "layout", "type": { "name": "string" }, "defaultValue": { "func": false, "value": '"vertical"' }, "values": ["horizontal", "vertical"] }, { "name": "hasBorder", "type": { "name": "boolean" }, "defaultValue": { "func": false, "value": "true" } }, { "name": "imgSrc", "type": { "name": "string" }, "required": true }, { "name": "buttonName", "type": { "name": "string" } }, { "name": "align", "type": { "name": "string" }, "defaultValue": { "func": false, "value": '"left"' }, "values": ["left", "center", "right"] }, { "name": "title", "type": { "name": "string" }, "required": true }, { "name": "subtitle", "type": { "name": "string" } }, { "name": "description", "type": { "name": "string" } }], "sourceFiles": ["/Users/auouser/Desktop/Work_Space/DED-WDS_VUE/libs/src/ui/element/CardSimple/CardSimple.vue"] };
export {
  _sfc_main as _
};

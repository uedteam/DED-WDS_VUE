import { c as createElementBlock, o as openBlock, d as createCommentVNode, a as createBaseVNode, r as renderSlot, j as createBlock, t as toDisplayString, n as normalizeClass, F as Fragment, q as renderList } from "./vue.esm-bundler-K7CzQrxl.js";
import { _ as _sfc_main$2 } from "./Icon-B6pI5HKs.js";
const _hoisted_1 = ["href"];
const _hoisted_2 = {
  key: 0,
  class: "ded-list-icon"
};
const _hoisted_3 = { class: "ded-list-item-label" };
const _hoisted_4 = {
  key: 1,
  class: "ded-list-item-text"
};
const _hoisted_5 = {
  key: 0,
  class: "ded-list-icon"
};
const _hoisted_6 = { class: "ded-list-item-label" };
const _sfc_main$1 = {
  __name: "ListItem",
  props: {
    label: {
      type: String,
      default: ""
    },
    value: {
      type: String,
      default: "value1"
    },
    href: {
      type: String
    },
    prefix: {
      type: String,
      default: ""
    },
    hasDivider: {
      type: Boolean,
      default: false
    },
    isDisabled: {
      type: Boolean,
      default: false
    },
    className: {
      type: String
    },
    openInNewTab: {
      type: Boolean,
      default: false
    }
  },
  emits: ["selectedItem"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    function handleClick(event) {
      if (!props.href) {
        emits("selectedItem", props.label);
      } else {
        if (props.openInNewTab) {
          event.preventDefault();
          window.open(props.href, "_blank", "noopener,noreferrer");
        } else {
          window.location.href = props.href;
        }
        emits("selectedItem", props.value);
      }
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("li", {
        class: normalizeClass(["ded-list-item", {
          "ded-list-item-side": props.hasDivider,
          "ded-list-item-disabled": props.isDisabled,
          [props.className]: !!props.className
        }]),
        onClick: handleClick
      }, [
        props.href ? (openBlock(), createElementBlock("a", {
          key: 0,
          href: props.href,
          class: "ded-list-item-text ded-list-item-link"
        }, [
          props.prefix || _ctx.$slots.default ? (openBlock(), createElementBlock("div", _hoisted_2, [
            renderSlot(_ctx.$slots, "default", {}, () => [
              props.prefix ? (openBlock(), createBlock(_sfc_main$2, {
                key: 0,
                name: props.prefix
              }, null, 8, ["name"])) : createCommentVNode("", true)
            ])
          ])) : createCommentVNode("", true),
          createBaseVNode("div", _hoisted_3, toDisplayString(props.label), 1)
        ], 8, _hoisted_1)) : (openBlock(), createElementBlock("div", _hoisted_4, [
          props.prefix || _ctx.$slots.default ? (openBlock(), createElementBlock("div", _hoisted_5, [
            renderSlot(_ctx.$slots, "default", {}, () => [
              props.prefix ? (openBlock(), createBlock(_sfc_main$2, {
                key: 0,
                name: props.prefix
              }, null, 8, ["name"])) : createCommentVNode("", true)
            ])
          ])) : createCommentVNode("", true),
          createBaseVNode("div", _hoisted_6, toDisplayString(props.label), 1)
        ]))
      ], 2);
    };
  }
};
_sfc_main$1.__docgenInfo = { "exportName": "default", "displayName": "ListItem", "description": "", "tags": {}, "props": [{ "name": "label", "type": { "name": "string" }, "defaultValue": { "func": false, "value": '""' } }, { "name": "value", "type": { "name": "string" }, "defaultValue": { "func": false, "value": '"value1"' } }, { "name": "href", "type": { "name": "string" } }, { "name": "prefix", "type": { "name": "string" }, "defaultValue": { "func": false, "value": '""' } }, { "name": "hasDivider", "type": { "name": "boolean" }, "defaultValue": { "func": false, "value": "false" } }, { "name": "isDisabled", "type": { "name": "boolean" }, "defaultValue": { "func": false, "value": "false" } }, { "name": "className", "type": { "name": "string" } }, { "name": "openInNewTab", "type": { "name": "boolean" }, "defaultValue": { "func": false, "value": "false" } }], "events": [{ "name": "selectedItem" }], "slots": [{ "name": "default" }], "sourceFiles": ["/Users/auouser/Desktop/Work_Space/DED-WDS_VUE/libs/src/ui/element/List/ListItem.vue"] };
const _sfc_main = {
  __name: "List",
  props: {
    dataSource: {
      type: Object,
      required: true
    },
    hasOutline: {
      type: Boolean,
      default: false
    },
    hasDivider: {
      type: Boolean,
      default: false
    },
    className: {
      type: String,
      default: ""
    }
  },
  emits: ["onSelect"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    function handleItemClick(value) {
      emits("onSelect", value);
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("ul", {
        class: normalizeClass(["ded-list", {
          "ded-outline": props.hasOutline,
          [props.className]: !!props.className
        }])
      }, [
        renderSlot(_ctx.$slots, "default", {}, () => [
          (openBlock(true), createElementBlock(Fragment, null, renderList(props.dataSource, (item, index) => {
            return openBlock(), createBlock(_sfc_main$1, {
              key: index,
              label: item.label,
              value: item.value,
              href: item.href,
              prefix: item.prefix,
              "has-divider": props.hasDivider,
              "is-disabled": item.isDisabled,
              "open-in-new-tab": true,
              onSelectedItem: handleItemClick
            }, null, 8, ["label", "value", "href", "prefix", "has-divider", "is-disabled"]);
          }), 128))
        ])
      ], 2);
    };
  }
};
_sfc_main.__docgenInfo = { "exportName": "default", "displayName": "List", "description": "", "tags": {}, "props": [{ "name": "dataSource", "type": { "name": "object" }, "required": true }, { "name": "hasOutline", "type": { "name": "boolean" }, "defaultValue": { "func": false, "value": "false" } }, { "name": "hasDivider", "type": { "name": "boolean" }, "defaultValue": { "func": false, "value": "false" } }, { "name": "className", "type": { "name": "string" }, "defaultValue": { "func": false, "value": '""' } }], "events": [{ "name": "onSelect" }], "slots": [{ "name": "default" }], "sourceFiles": ["/Users/auouser/Desktop/Work_Space/DED-WDS_VUE/libs/src/ui/element/List/List.vue"] };
export {
  _sfc_main as _,
  _sfc_main$1 as a
};

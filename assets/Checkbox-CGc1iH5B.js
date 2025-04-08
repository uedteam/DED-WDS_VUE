import { p as mergeModels, u as useModel, c as createElementBlock, F as Fragment, q as renderList, n as normalizeClass, o as openBlock, a as createBaseVNode, s as mergeProps, j as createBlock, d as createCommentVNode, t as toDisplayString } from "./vue.esm-bundler-K7CzQrxl.js";
import { _ as _sfc_main$1 } from "./Icon-B6pI5HKs.js";
import { v as v4 } from "./v4-CjlX8hrF.js";
const _hoisted_1 = ["for"];
const _hoisted_2 = ["id", "name", "value", "checked", "onChange"];
const _sfc_main = /* @__PURE__ */ Object.assign({ inheritAttrs: false }, {
  __name: "Checkbox",
  props: /* @__PURE__ */ mergeModels({
    dataSource: {
      type: Array,
      required: true
    },
    direction: {
      type: String,
      default: "row",
      validator: (value) => ["row", "column"].includes(value)
    },
    size: {
      type: String,
      default: "medium",
      validator: (value) => ["small", "medium", "large"].includes(value)
    },
    className: {
      type: String,
      default: ""
    }
  }, {
    "modelValue": {
      default: []
    },
    "modelModifiers": {}
  }),
  emits: ["update:modelValue"],
  setup(__props) {
    const props = __props;
    const modelValue = useModel(__props, "modelValue");
    const baseId = v4();
    const generateId = (index) => `${baseId}-checkbox-${index}`;
    function handleCheck(item) {
      if (modelValue.value.includes(item.value)) {
        modelValue.value = modelValue.value.filter((value) => value !== item.value);
      } else {
        modelValue.value = [...modelValue.value, item.value];
      }
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(["ded-checkbox-container", {
          [`ded-checkbox-container-${__props.direction}`]: __props.direction,
          [__props.className]: !!__props.className
        }])
      }, [
        (openBlock(true), createElementBlock(Fragment, null, renderList(__props.dataSource, (item, index) => {
          return openBlock(), createElementBlock("label", {
            key: item.value,
            for: generateId(index),
            class: normalizeClass(["ded-checkbox", {
              "ded-checkbox-input-disabled": item.isDisabled,
              [`ded-text-${props.size}`]: props.size
            }])
          }, [
            createBaseVNode("input", mergeProps({
              id: generateId(index),
              class: "ded-checkbox-input",
              type: "checkbox",
              name: item.name,
              value: item.value,
              checked: modelValue.value.includes(item.value),
              ref_for: true
            }, _ctx.$attrs, {
              onChange: ($event) => handleCheck(item)
            }), null, 16, _hoisted_2),
            createBaseVNode("div", {
              class: normalizeClass(["ded-checkbox-icon", [
                `ded-icon-${props.size}`,
                item.isDisabled ? "ded-checkbox-icon-disabled" : "",
                modelValue.value.includes(item.value) ? `ded-checkbox-checked` : `ded-checkbox-unchecked`
              ]])
            }, [
              modelValue.value.includes(item.value) ? (openBlock(), createBlock(_sfc_main$1, {
                key: 0,
                name: "SvgCheck"
              })) : createCommentVNode("", true)
            ], 2),
            createBaseVNode("span", {
              class: normalizeClass(["ded-checkbox-text", item.isDisabled ? "ded-checkbox-text-disabled" : ""])
            }, toDisplayString(item.label), 3)
          ], 10, _hoisted_1);
        }), 128))
      ], 2);
    };
  }
});
_sfc_main.__docgenInfo = { "exportName": "default", "displayName": "Checkbox", "description": "", "tags": {}, "props": [{ "name": "dataSource", "type": { "name": "array" }, "required": true }, { "name": "direction", "type": { "name": "string" }, "defaultValue": { "func": false, "value": '"row"' }, "values": ["row", "column"] }, { "name": "size", "type": { "name": "string" }, "defaultValue": { "func": false, "value": '"medium"' }, "values": ["small", "medium", "large"] }, { "name": "className", "type": { "name": "string" }, "defaultValue": { "func": false, "value": '""' } }], "sourceFiles": ["/Users/auouser/Desktop/Work_Space/DED-WDS_VUE/libs/src/ui/element/Checkbox/Checkbox.vue"] };
export {
  _sfc_main as _
};

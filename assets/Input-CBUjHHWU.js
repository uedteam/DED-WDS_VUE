import { p as mergeModels, u as useModel, v as ref, g as computed, c as createElementBlock, d as createCommentVNode, a as createBaseVNode, n as normalizeClass, t as toDisplayString, x as withDirectives, b as createVNode, y as vModelDynamic, s as mergeProps, F as Fragment, j as createBlock, l as resolveDynamicComponent, f as createTextVNode, o as openBlock } from "./vue.esm-bundler-K7CzQrxl.js";
import { _ as _sfc_main$1 } from "./Icon-B6pI5HKs.js";
import { v as v4 } from "./v4-CjlX8hrF.js";
const _hoisted_1 = ["type", "placeholder", "maxlength"];
const _hoisted_2 = { class: "ded-input-feat-icon" };
const _sfc_main = /* @__PURE__ */ Object.assign({ name: "StatusIndicator", inheritAttrs: false }, {
  __name: "Input",
  props: /* @__PURE__ */ mergeModels({
    label: {
      type: String,
      default: ""
    },
    type: {
      type: String,
      default: "text"
    },
    hasClear: {
      type: Boolean,
      default: true
    },
    placeholder: {
      type: String,
      default: "Placeholder"
    },
    prefix: {
      type: String,
      default: ""
    },
    size: {
      type: String,
      default: "medium",
      validator: (value) => ["small", "medium", "large"].includes(value)
    },
    maxLimit: {
      type: Number,
      default: 0
    },
    hint: {
      type: Object,
      default: () => ({ error: "", description: "" })
    },
    isDisabled: {
      type: Boolean,
      default: false
    },
    isOpen: {
      type: Boolean,
      default: void 0
    },
    className: {
      type: String,
      default: ""
    }
  }, {
    "modelValue": {},
    "modelModifiers": {}
  }),
  emits: /* @__PURE__ */ mergeModels(["clearDatePicker"], ["update:modelValue"]),
  setup(__props, { expose: __expose, emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const modelValue = useModel(__props, "modelValue");
    const inputRef = ref(null);
    __expose({
      input: inputRef
    });
    const baseId = v4();
    const uniqueId = `${baseId}-input`;
    const hintClass = computed(() => {
      if (props.hint.error)
        return "error";
      if (props.hint.description)
        return "desc";
      return "";
    });
    function clearInput() {
      modelValue.value = "";
      emits("clearDatePicker");
    }
    const showPassword = ref(false);
    function togglePasswordVisibility() {
      showPassword.value = !showPassword.value;
    }
    function toggleDropdown() {
      if (props.isOpen !== void 0) {
        modelValue.value = "";
      }
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(["ded-input-container", { [props.className]: !!props.className }])
      }, [
        __props.label ? (openBlock(), createElementBlock("label", {
          key: 0,
          for: uniqueId,
          class: normalizeClass(props.isDisabled ? "ded-input-disable" : "ded-input-label")
        }, toDisplayString(__props.label), 3)) : createCommentVNode("", true),
        createBaseVNode("div", {
          class: normalizeClass(["ded-input-group", {
            [`ded-text-${props.size}`]: props.size,
            [`ded-input-border-${hintClass.value}`]: hintClass.value,
            "ded-input-disable": props.isDisabled
          }])
        }, [
          __props.prefix ? (openBlock(), createElementBlock("label", {
            key: 0,
            for: uniqueId,
            class: normalizeClass(["ded-input-icon", {
              [`ded-icon-${props.size}`]: props.size,
              "ded-input-icon-disable": props.isDisabled,
              "ded-input-icon-error": props.hint.error.length > 0 || typeof props.hint.error === "function"
            }])
          }, [
            createVNode(_sfc_main$1, {
              name: props.prefix
            }, null, 8, ["name"])
          ], 2)) : createCommentVNode("", true),
          withDirectives(createBaseVNode("input", mergeProps({
            id: uniqueId,
            ref_key: "inputRef",
            ref: inputRef,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => modelValue.value = $event),
            type: showPassword.value && props.type === "password" ? "text" : props.type,
            placeholder: props.placeholder,
            maxlength: props.maxLimit > 0 ? props.maxLimit : void 0,
            class: ["ded-input", {
              [`ded-text-${props.size}`]: props.size,
              "ded-input-prefix": props.prefix,
              "ded-input-disable": props.isDisabled
            }]
          }, _ctx.$attrs), null, 16, _hoisted_1), [
            [vModelDynamic, modelValue.value]
          ]),
          createBaseVNode("div", _hoisted_2, [
            modelValue.value && props.hasClear && !props.isDisabled ? (openBlock(), createElementBlock("div", {
              key: 0,
              class: normalizeClass(`ded-icon-${props.size}`),
              style: { "cursor": "pointer" },
              onClick: _cache[1] || (_cache[1] = ($event) => clearInput())
            }, [
              createVNode(_sfc_main$1, { name: "SvgClose" })
            ], 2)) : createCommentVNode("", true),
            props.type === "password" && modelValue.value ? (openBlock(), createElementBlock("div", {
              key: 1,
              class: normalizeClass(`ded-icon-${props.size}`),
              style: { "cursor": "pointer" },
              onClick: togglePasswordVisibility
            }, [
              createVNode(_sfc_main$1, {
                name: showPassword.value ? "SvgVisibility" : "SvgVisibilityOff"
              }, null, 8, ["name"])
            ], 2)) : createCommentVNode("", true),
            props.isOpen !== void 0 ? (openBlock(), createElementBlock("div", {
              key: 2,
              class: normalizeClass(`ded-icon-${props.size}`),
              style: { "cursor": "pointer" },
              onClick: toggleDropdown
            }, [
              createVNode(_sfc_main$1, {
                name: "SvgArrowDown",
                class: normalizeClass(["ded-dropdown-arrow", props.isOpen ? "ded-dropdown-open" : "ded-dropdown-close"])
              }, null, 8, ["class"])
            ], 2)) : createCommentVNode("", true)
          ])
        ], 2),
        createBaseVNode("small", {
          class: normalizeClass(["ded-input-hint", {
            [`ded-input-hint-${hintClass.value}`]: hintClass.value && !props.isDisabled,
            "ded-input-disable": props.isDisabled
          }])
        }, [
          props.hint.error ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
            typeof props.hint.error === "function" ? (openBlock(), createBlock(resolveDynamicComponent(props.hint.error), { key: 0 })) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
              createTextVNode(toDisplayString(props.hint.error), 1)
            ], 64))
          ], 64)) : props.hint.description ? (openBlock(), createElementBlock(Fragment, { key: 1 }, [
            typeof props.hint.description === "function" ? (openBlock(), createBlock(resolveDynamicComponent(props.hint.description), { key: 0 })) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
              createTextVNode(toDisplayString(props.hint.description), 1)
            ], 64))
          ], 64)) : createCommentVNode("", true)
        ], 2)
      ], 2);
    };
  }
});
_sfc_main.__docgenInfo = { "name": "StatusIndicator", "exportName": "default", "displayName": "Input", "description": "", "tags": {}, "expose": [{ "name": "input" }], "props": [{ "name": "label", "type": { "name": "string" }, "defaultValue": { "func": false, "value": '""' } }, { "name": "type", "type": { "name": "string" }, "defaultValue": { "func": false, "value": '"text"' } }, { "name": "hasClear", "type": { "name": "boolean" }, "defaultValue": { "func": false, "value": "true" } }, { "name": "placeholder", "type": { "name": "string" }, "defaultValue": { "func": false, "value": '"Placeholder"' } }, { "name": "prefix", "type": { "name": "string" }, "defaultValue": { "func": false, "value": '""' } }, { "name": "size", "type": { "name": "string" }, "defaultValue": { "func": false, "value": '"medium"' }, "values": ["small", "medium", "large"] }, { "name": "maxLimit", "type": { "name": "number" }, "defaultValue": { "func": false, "value": "0" } }, { "name": "hint", "type": { "name": "object" }, "defaultValue": { "func": false, "value": '{\n  error: "",\n  description: ""\n}' } }, { "name": "isDisabled", "type": { "name": "boolean" }, "defaultValue": { "func": false, "value": "false" } }, { "name": "isOpen", "type": { "name": "boolean" }, "defaultValue": { "func": false, "value": "undefined" } }, { "name": "className", "type": { "name": "string" }, "defaultValue": { "func": false, "value": '""' } }], "events": [{ "name": "clearDatePicker" }], "sourceFiles": ["/Users/auouser/Desktop/Work_Space/DED-WDS_VUE/libs/src/ui/element/Input/Input.vue"] };
export {
  _sfc_main as _
};

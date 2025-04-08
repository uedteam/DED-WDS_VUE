import { p as mergeModels, u as useModel, C as useTemplateRef, v as ref, g as computed, w as watch, A as onMounted, D as nextTick, E as onBeforeUnmount, c as createElementBlock, a as createBaseVNode, d as createCommentVNode, x as withDirectives, n as normalizeClass, t as toDisplayString, G as vModelText, f as createTextVNode, k as normalizeStyle, o as openBlock } from "./vue.esm-bundler-K7CzQrxl.js";
const _hoisted_1 = { class: "ded-slider-wrapper" };
const _hoisted_2 = ["min", "max", "step", "disabled"];
const _hoisted_3 = { key: 0 };
const _hoisted_4 = { key: 0 };
const thumbWidth = 20;
const tooltipWidth = 0;
const _sfc_main = {
  __name: "Slider",
  props: /* @__PURE__ */ mergeModels({
    // themeColor: {
    //     type: String,
    //     default: "primary",
    //     validator: (value) =>
    //         [
    //             "primary",
    //             "secondary",
    //             "tertiary",
    //             "success",
    //             "warning",
    //             "error",
    //             "info",
    //         ].includes(value),
    // },
    min: {
      type: Number,
      default: 0
    },
    max: {
      type: Number,
      default: 100
    },
    step: {
      type: Number,
      default: 1
    },
    label: {
      type: String,
      default: ""
    },
    isShowRange: {
      type: Boolean,
      default: false
    },
    isShowCurrValue: {
      type: Boolean,
      default: false
    },
    isDisabled: {
      type: Boolean,
      default: false
    },
    className: {
      type: String,
      default: ""
    }
  }, {
    "modelValue": {},
    "modelModifiers": {}
  }),
  emits: ["update:modelValue"],
  setup(__props, { expose: __expose }) {
    const props = __props;
    const modelValue = useModel(__props, "modelValue");
    const rangeRef = useTemplateRef("rangeRef");
    const containerRef = useTemplateRef("containerRef");
    const rangeWidth = ref(0);
    const thumbPosition = ref(0);
    function updateThumbPosition(val) {
      if (rangeWidth.value === 0)
        return;
      const calculatedWidth = rangeWidth.value - thumbWidth;
      thumbPosition.value = (val - props.min) / (props.max - props.min) * calculatedWidth;
    }
    function updateRangeBackground(val) {
      const valuePercentage = (val - props.min) / (props.max - props.min) * 100;
      if (containerRef.value) {
        containerRef.value.style.setProperty("--progress", `${valuePercentage}%`);
      }
    }
    const tooltipPosition = computed(() => {
      if (rangeWidth.value === 0)
        return "0px";
      const calculatedWidth = rangeWidth.value - thumbWidth;
      const position = (modelValue.value - props.min) / (props.max - props.min) * calculatedWidth;
      const finalPosition = position + thumbWidth / 2 - tooltipWidth / 2;
      return `${finalPosition}px`;
    });
    function handleChange(e) {
      const newValue = Number.parseInt(e.target.value, 10);
      modelValue.value = newValue;
      updateRangeBackground(newValue);
      updateThumbPosition(newValue);
    }
    watch(modelValue, (newValue) => {
      updateRangeBackground(newValue);
      updateThumbPosition(newValue);
    });
    watch([() => props.min, () => props.max], () => {
      nextTick(() => {
        updateWidth();
      });
    });
    function updateWidth() {
      if (rangeRef.value) {
        rangeWidth.value = rangeRef.value.offsetWidth;
        updateThumbPosition(modelValue.value);
        updateRangeBackground(modelValue.value);
      }
    }
    let resizeObserver = null;
    onMounted(() => {
      nextTick(() => {
        updateWidth();
        resizeObserver = new ResizeObserver(() => {
          updateWidth();
        });
        if (rangeRef.value) {
          resizeObserver.observe(rangeRef.value);
        }
      });
    });
    onBeforeUnmount(() => {
      if (resizeObserver) {
        resizeObserver.disconnect();
        resizeObserver = null;
      }
    });
    __expose({ updateWidth });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        ref_key: "containerRef",
        ref: containerRef,
        class: normalizeClass(["ded-slider-container", {
          [props.className]: !!props.className,
          "ded-slider-container-range": props.isShowRange,
          "ded-slider-container-fluid": !props.isShowRange
        }])
      }, [
        createBaseVNode("div", _hoisted_1, [
          props.isShowRange ? (openBlock(), createElementBlock("div", {
            key: 0,
            class: normalizeClass(["ded-slider-range ded-slider-range-start", {
              "ded-slider-range-disable": props.isDisabled
            }])
          }, toDisplayString(props.min), 3)) : createCommentVNode("", true),
          withDirectives(createBaseVNode("input", {
            ref_key: "rangeRef",
            ref: rangeRef,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => modelValue.value = $event),
            type: "range",
            min: props.min,
            max: props.max,
            step: props.step,
            disabled: props.isDisabled,
            class: normalizeClass(["ded-slider", [props.isDisabled ? "ded-slider-disable" : `ded-slider-${props.themeColor}`]]),
            onInput: handleChange
          }, null, 42, _hoisted_2), [
            [vModelText, modelValue.value]
          ]),
          props.isShowRange ? (openBlock(), createElementBlock("div", {
            key: 1,
            class: normalizeClass(["ded-slider-range ded-slider-range-end", {
              "ded-slider-range-disable": props.isDisabled
            }])
          }, toDisplayString(props.max), 3)) : createCommentVNode("", true)
        ]),
        createBaseVNode("div", {
          id: "tooltip",
          class: normalizeClass(["ded-slider-tooltip", [props.isDisabled ? "ded-slider-tooltip-disable" : `ded-slider-tooltip-${props.themeColor}`]]),
          style: normalizeStyle({ left: tooltipPosition.value, transform: `translate(-50%)` })
        }, [
          props.isShowCurrValue ? (openBlock(), createElementBlock("div", _hoisted_3, [
            createTextVNode(toDisplayString(modelValue.value), 1),
            props.label ? (openBlock(), createElementBlock("span", _hoisted_4, toDisplayString(props.label), 1)) : createCommentVNode("", true)
          ])) : createCommentVNode("", true)
        ], 6)
      ], 2);
    };
  }
};
_sfc_main.__docgenInfo = { "exportName": "default", "displayName": "Slider", "description": "", "tags": {}, "expose": [{ "name": "updateWidth" }], "props": [{ "name": "min", "type": { "name": "number" }, "defaultValue": { "func": false, "value": "0" } }, { "name": "max", "type": { "name": "number" }, "defaultValue": { "func": false, "value": "100" } }, { "name": "step", "type": { "name": "number" }, "defaultValue": { "func": false, "value": "1" } }, { "name": "label", "type": { "name": "string" }, "defaultValue": { "func": false, "value": '""' } }, { "name": "isShowRange", "type": { "name": "boolean" }, "defaultValue": { "func": false, "value": "false" } }, { "name": "isShowCurrValue", "type": { "name": "boolean" }, "defaultValue": { "func": false, "value": "false" } }, { "name": "isDisabled", "type": { "name": "boolean" }, "defaultValue": { "func": false, "value": "false" } }, { "name": "className", "type": { "name": "string" }, "defaultValue": { "func": false, "value": '""' } }], "sourceFiles": ["/Users/auouser/Desktop/Work_Space/DED-WDS_VUE/libs/src/ui/element/Slider/Slider.vue"] };
export {
  _sfc_main as _
};

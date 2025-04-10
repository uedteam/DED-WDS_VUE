var _a, _b, _c;
import { p as mergeModels, u as useModel, g as computed, c as createElementBlock, b as createVNode, e as withCtx, n as normalizeClass, o as openBlock, r as renderSlot, j as createBlock, d as createCommentVNode } from "./vue.esm-bundler-K7CzQrxl.js";
import { _ as _sfc_main$1 } from "./Button-8IAwqsIt.js";
import { _ as _sfc_main$3 } from "./Icon-B6pI5HKs.js";
import { _ as _sfc_main$2 } from "./Slider-BFSeM0Zz.js";
const _sfc_main = {
  __name: "SliderControl",
  props: /* @__PURE__ */ mergeModels({
    // themeColor: {
    //     type: String,
    //     default: "primary",
    //     validator: (value) =>
    //         [
    //             "primary",
    //             "secondary",
    //             "neutral",
    //             "info",
    //             "success",
    //             "warning",
    //             "error",
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
    prefix: {
      type: String,
      default: ""
    },
    suffix: {
      type: String,
      default: ""
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
  setup(__props) {
    const props = __props;
    const modelValue = useModel(__props, "modelValue");
    const computedValue = computed({
      get: () => modelValue.value ?? props.min,
      set: (newValue) => {
        modelValue.value = newValue;
      }
    });
    function handleIncreaseClick() {
      computedValue.value = Math.min(computedValue.value + Number(props.step), props.max);
    }
    function handleDecreaseClick() {
      computedValue.value = Math.max(computedValue.value - Number(props.step), props.min);
    }
    const prefixIcon = computed(() => {
      if (props.prefix === "increase") {
        return "SvgPlus";
      } else if (props.prefix === "decrease") {
        return "SvgMinus";
      }
      return "";
    });
    const suffixIcon = computed(() => {
      if (props.suffix === "increase") {
        return "SvgPlus";
      } else if (props.suffix === "decrease") {
        return "SvgMinus";
      }
      return "";
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(["ded-slider-control", { [props.className]: !!props.className }])
      }, [
        createVNode(_sfc_main$1, {
          variant: "text",
          "theme-color": props.themeColor,
          "is-disabled": props.isDisabled,
          onClick: handleDecreaseClick
        }, {
          default: withCtx(() => [
            renderSlot(_ctx.$slots, "prefix", {}, () => [
              props.prefix ? (openBlock(), createBlock(_sfc_main$3, {
                key: 0,
                name: prefixIcon.value,
                size: "32"
              }, null, 8, ["name"])) : createCommentVNode("", true)
            ])
          ]),
          _: 3
        }, 8, ["theme-color", "is-disabled"]),
        createVNode(_sfc_main$2, {
          modelValue: computedValue.value,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => computedValue.value = $event),
          "theme-color": props.themeColor,
          min: props.min,
          max: props.max,
          step: props.step,
          label: props.label,
          "is-show-range": false,
          "is-show-curr-value": true,
          "is-disabled": props.isDisabled
        }, null, 8, ["modelValue", "theme-color", "min", "max", "step", "label", "is-disabled"]),
        createVNode(_sfc_main$1, {
          variant: "text",
          "theme-color": props.themeColor,
          "is-disabled": props.isDisabled,
          onClick: handleIncreaseClick
        }, {
          default: withCtx(() => [
            renderSlot(_ctx.$slots, "suffix", {}, () => [
              props.suffix ? (openBlock(), createBlock(_sfc_main$3, {
                key: 0,
                name: suffixIcon.value,
                size: "32"
              }, null, 8, ["name"])) : createCommentVNode("", true)
            ])
          ]),
          _: 3
        }, 8, ["theme-color", "is-disabled"])
      ], 2);
    };
  }
};
_sfc_main.__docgenInfo = { "exportName": "default", "displayName": "SliderControl", "description": "", "tags": {}, "props": [{ "name": "min", "type": { "name": "number" }, "defaultValue": { "func": false, "value": "0" } }, { "name": "max", "type": { "name": "number" }, "defaultValue": { "func": false, "value": "100" } }, { "name": "step", "type": { "name": "number" }, "defaultValue": { "func": false, "value": "1" } }, { "name": "label", "type": { "name": "string" }, "defaultValue": { "func": false, "value": '""' } }, { "name": "prefix", "type": { "name": "string" }, "defaultValue": { "func": false, "value": '""' } }, { "name": "suffix", "type": { "name": "string" }, "defaultValue": { "func": false, "value": '""' } }, { "name": "isDisabled", "type": { "name": "boolean" }, "defaultValue": { "func": false, "value": "false" } }, { "name": "className", "type": { "name": "string" }, "defaultValue": { "func": false, "value": '""' } }], "slots": [{ "name": "prefix" }, { "name": "suffix" }], "sourceFiles": ["/Users/auouser/Desktop/Work_Space/DED-WDS_VUE/libs/src/ui/element/SliderControl/SliderControl.vue"] };
const SliderControl_stories = {
  title: "Component/Slider-Control",
  component: _sfc_main,
  tags: ["autodocs"],
  argTypes: {
    min: {
      description: "最小值",
      control: {
        type: "number"
      }
    },
    max: {
      description: "最大值",
      control: {
        type: "number"
      }
    },
    step: {
      description: "步進值",
      control: {
        type: "number"
      }
    },
    label: {
      description: "單位",
      control: {
        type: "text"
      }
    },
    prefix: {
      description: "前置元素",
      control: {
        type: "select",
        labels: {
          "": "None",
          "increase": "increase",
          "decrease": "decrease"
        }
      },
      options: ["", "increase", "decrease"]
    },
    suffix: {
      description: "後置元素",
      control: {
        type: "select",
        labels: {
          "": "None",
          "increase": "increase",
          "decrease": "decrease"
        }
      },
      options: ["", "increase", "decrease"]
    },
    isDisabled: {
      description: "是否禁用",
      control: {
        type: "boolean"
      }
    },
    className: {
      description: "客製化樣式",
      control: {
        type: "text"
      }
    },
    modelValue: {
      description: "輸入值",
      control: {
        type: "number"
      },
      table: {
        type: {
          summary: "number"
        },
        category: "v-model"
        // defaultValue: { summary: '""' },
      }
    }
  },
  parameters: {
    // 自動文件
    docs: {
      title: "SliderControl",
      description: {
        component: "按鈕滑桿輸入組件的呈現及說明。"
      }
    }
  }
};
const SliderButton = {
  name: "預設項目",
  args: {
    min: -100,
    max: 100,
    step: 1,
    label: "℃",
    prefix: "decrease",
    suffix: "increase",
    isDisabled: false,
    className: "",
    modelValue: 8
  },
  render: (args) => ({
    components: {
      SliderControl: _sfc_main
    },
    setup() {
      return {
        args
      };
    },
    template: `
      <SliderControl
        :min="args.min"
        :max="args.max"
        :step="args.step"
        :label="args.label"
        :prefix="args.prefix"
        :suffix="args.suffix"
        :isDisabled="args.isDisabled"
        :className="args.className"
        v-model="args.modelValue"
      ></SliderControl>`
  }),
  parameters: {
    controls: {
      // include or exclude keys as needed
    },
    docs: {
      source: {
        transform: (src, storyContext) => {
          const {
            args
          } = storyContext;
          return [`<script setup>`, 'import { ref } from "vue";', `import { SliderControl } from "@ded-wds-vue/ui";`, `const modelValue = ref(${args.modelValue});`, `<\/script>`, "", "<template>", `  <SliderControl`, `    ${args.min !== void 0 ? `:min="${args.min}"` : ""}`, `    ${args.max !== void 0 ? `:max="${args.max}"` : ""}`, `    ${args.step !== void 0 ? `:step="${args.step}"` : ""}`, `    ${args.label ? `label="${args.label}"` : ""}`, `    ${args.prefix ? `prefix="${args.prefix}"` : ""}`, `    ${args.suffix ? `suffix="${args.suffix}"` : ""}`, `    ${args.isDisabled !== void 0 ? `:isDisabled="${args.isDisabled}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, `    v-model="modelValue"`, `  ></SliderControl>`, "</template>"].filter(Boolean).join("\n").trim();
        }
      }
    }
  }
};
SliderButton.parameters = {
  ...SliderButton.parameters,
  docs: {
    ...(_a = SliderButton.parameters) == null ? void 0 : _a.docs,
    source: {
      originalSource: '{\n  name: "預設項目",\n  args: {\n    min: -100,\n    max: 100,\n    step: 1,\n    label: "℃",\n    prefix: "decrease",\n    suffix: "increase",\n    isDisabled: false,\n    className: "",\n    modelValue: 8\n  },\n  render: args => ({\n    components: {\n      SliderControl\n    },\n    setup() {\n      return {\n        args\n      };\n    },\n    template: `\n      <SliderControl\n        :min="args.min"\n        :max="args.max"\n        :step="args.step"\n        :label="args.label"\n        :prefix="args.prefix"\n        :suffix="args.suffix"\n        :isDisabled="args.isDisabled"\n        :className="args.className"\n        v-model="args.modelValue"\n      ></SliderControl>`\n  }),\n  parameters: {\n    controls: {\n      // include or exclude keys as needed\n    },\n    docs: {\n      source: {\n        transform: (src, storyContext) => {\n          const {\n            args\n          } = storyContext;\n          return [`<script setup>`, "import { ref } from \\"vue\\";", `import { SliderControl } from "@ded-wds-vue/ui";`, `const modelValue = ref(${args.modelValue});`, `<\/script>`, "", "<template>", `  <SliderControl`, `    ${args.min !== undefined ? `:min="${args.min}"` : ""}`, `    ${args.max !== undefined ? `:max="${args.max}"` : ""}`, `    ${args.step !== undefined ? `:step="${args.step}"` : ""}`, `    ${args.label ? `label="${args.label}"` : ""}`, `    ${args.prefix ? `prefix="${args.prefix}"` : ""}`, `    ${args.suffix ? `suffix="${args.suffix}"` : ""}`, `    ${args.isDisabled !== undefined ? `:isDisabled="${args.isDisabled}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, `    v-model="modelValue"`, `  ></SliderControl>`, "</template>"].filter(Boolean).join("\\n").trim();\n        }\n      }\n    }\n  }\n}',
      ...(_c = (_b = SliderButton.parameters) == null ? void 0 : _b.docs) == null ? void 0 : _c.source
    }
  }
};
const __namedExportsOrder = ["SliderButton"];
export {
  SliderButton,
  __namedExportsOrder,
  SliderControl_stories as default
};

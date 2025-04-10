var _a, _b, _c, _d, _e, _f, _g, _h, _i;
import { _ as _sfc_main } from "./Slider-BFSeM0Zz.js";
import "./vue.esm-bundler-K7CzQrxl.js";
const Slider_stories = {
  title: "Component/Slider",
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
    isShowRange: {
      description: "是否顯示範圍",
      control: {
        type: "boolean"
      }
    },
    isShowCurrValue: {
      description: "是否顯示目前值",
      control: {
        type: "boolean"
      }
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
    updateWidth: {
      table: {
        disable: true
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
      title: "Slider",
      description: {
        component: "Slider組件的呈現及說明。"
      }
    }
  }
};
const SliderDefault = {
  name: "預設項目",
  args: {
    // themeColor: 'primary',
    min: -100,
    max: 100,
    step: 1,
    label: "℃",
    isShowRange: true,
    isShowCurrValue: true,
    isDisabled: false,
    className: "",
    modelValue: 8
  },
  render: (args) => ({
    components: {
      Slider: _sfc_main
    },
    setup() {
      return {
        args
      };
    },
    template: `
      <slider
        :min="args.min"
        :max="args.max"
        :step="args.step"
        :label="args.label"
        :isShowRange="args.isShowRange"
        :isShowCurrValue="args.isShowCurrValue"
        :isDisabled="args.isDisabled"
        :className="args.className"
        v-model="args.modelValue"
      ></slider>`
  }),
  // 控制 controls 中能控制的參數
  parameters: {
    controls: {
      // include: ['themeColor', 'label', 'value', 'name' ],
      // exclude:['updateWidth']
    },
    docs: {
      source: {
        transform: (src, storyContext) => {
          const {
            args
          } = storyContext;
          return [`<script setup>`, 'import { ref } from "vue";', `import { Slider } from "@ded-wds-vue/ui";`, `const modelValue = ref("${args.modelValue}");`, `<\/script>`, "", "<template>", `  <Slider`, `    ${args.min !== void 0 ? `:min="${args.min}"` : ""}`, `    ${args.max !== void 0 ? `:max="${args.max}"` : ""}`, `    ${args.step !== void 0 ? `:step="${args.step}"` : ""}`, `    ${args.label ? `label="${args.label}"` : ""}`, `    ${args.isShowRange !== void 0 ? `:isShowRange="${args.isShowRange}"` : ""}`, `    ${args.isShowCurrValue !== void 0 ? `:isShowCurrValue="${args.isShowCurrValue}"` : ""}`, `    ${args.isDisabled !== void 0 ? `:isDisabled="${args.isDisabled}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, `    v-model="modelValue"`, `  ></Slider>`, "</template>"].filter(Boolean).join("\n").trim();
        }
      }
    }
  }
};
const SliderCurrent = {
  name: "顯示目前值",
  args: {
    // themeColor: 'primary',
    min: -100,
    max: 100,
    step: 1,
    label: "℃",
    isShowRange: false,
    isDisabled: false,
    className: "",
    modelValue: 8
  },
  render: (args) => ({
    components: {
      Slider: _sfc_main
    },
    setup() {
      return {
        args
      };
    },
    template: `
      <slider
        :min="args.min"
        :max="args.max"
        :step="args.step"
        :label="args.label"
        :isShowRange="args.isShowRange"
        :isShowCurrValue="true"
        :isDisabled="args.isDisabled"
        :className="args.className"
        v-model="args.modelValue"
      ></slider>`
  }),
  // 控制 controls 中能控制的參數
  parameters: {
    controls: {
      // include: ['themeColor', 'label', 'value', 'name' ],
      // exclude:['updateWidth']
    },
    docs: {
      source: {
        transform: (src, storyContext) => {
          const {
            args
          } = storyContext;
          return [`<script setup>`, 'import { ref } from "vue";', `import { Slider } from "@ded-wds-vue/ui";`, `const modelValue = ref("${args.modelValue}");`, `<\/script>`, "", "<template>", `  <Slider`, `    ${args.min !== void 0 ? `:min="${args.min}"` : ""}`, `    ${args.max !== void 0 ? `:max="${args.max}"` : ""}`, `    ${args.step !== void 0 ? `:step="${args.step}"` : ""}`, `    ${args.label ? `label="${args.label}"` : ""}`, `    ${args.isShowRange !== void 0 ? `:isShowRange="${args.isShowRange}"` : ""}`, `    :isShowCurrValue="true"`, `    ${args.isDisabled !== void 0 ? `:isDisabled="${args.isDisabled}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, `    v-model="modelValue"`, `  ></Slider>`, "</template>"].filter(Boolean).join("\n").trim();
        }
      }
    }
  }
};
const SliderAround = {
  name: "顯示範圍",
  args: {
    min: -100,
    max: 100,
    step: 1,
    label: "℃",
    isShowCurrValue: false,
    isDisabled: false,
    className: "",
    modelValue: 8
  },
  render: (args) => ({
    components: {
      Slider: _sfc_main
    },
    setup() {
      return {
        args
      };
    },
    template: `
      <slider
        :min="args.min"
        :max="args.max"
        :step="args.step"
        :label="args.label"
        :isShowRange="true"
        :isShowCurrValue="args.isShowCurrValue"
        :isDisabled="args.isDisabled"
        :className="args.className"
        v-model="args.modelValue"
      ></slider>`
  }),
  // 控制 controls 中能控制的參數
  parameters: {
    controls: {
      // include: ['themeColor', 'label', 'value', 'name' ],
      // exclude:['updateWidth']
    },
    docs: {
      source: {
        transform: (src, storyContext) => {
          const {
            args
          } = storyContext;
          return [`<script setup>`, 'import { ref } from "vue";', `import { Slider } from "@ded-wds-vue/ui";`, `const modelValue = ref("${args.modelValue}");`, `<\/script>`, "", "<template>", `  <Slider`, `    ${args.min !== void 0 ? `:min="${args.min}"` : ""}`, `    ${args.max !== void 0 ? `:max="${args.max}"` : ""}`, `    ${args.step !== void 0 ? `:step="${args.step}"` : ""}`, `    ${args.label ? `label="${args.label}"` : ""}`, `    :isShowRange="true"`, `    ${args.isShowCurrValue !== void 0 ? `:isShowCurrValue="${args.isShowCurrValue}"` : ""}`, `    ${args.isDisabled !== void 0 ? `:isDisabled="${args.isDisabled}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, `    v-model="modelValue"`, `  ></Slider>`, "</template>"].filter(Boolean).join("\n").trim();
        }
      }
    }
  }
};
SliderDefault.parameters = {
  ...SliderDefault.parameters,
  docs: {
    ...(_a = SliderDefault.parameters) == null ? void 0 : _a.docs,
    source: {
      originalSource: '{\n  name: "預設項目",\n  args: {\n    // themeColor: \'primary\',\n    min: -100,\n    max: 100,\n    step: 1,\n    label: "℃",\n    isShowRange: true,\n    isShowCurrValue: true,\n    isDisabled: false,\n    className: "",\n    modelValue: 8\n  },\n  render: args => ({\n    components: {\n      Slider\n    },\n    setup() {\n      return {\n        args\n      };\n    },\n    template: `\n      <slider\n        :min="args.min"\n        :max="args.max"\n        :step="args.step"\n        :label="args.label"\n        :isShowRange="args.isShowRange"\n        :isShowCurrValue="args.isShowCurrValue"\n        :isDisabled="args.isDisabled"\n        :className="args.className"\n        v-model="args.modelValue"\n      ></slider>`\n  }),\n  // 控制 controls 中能控制的參數\n  parameters: {\n    controls: {\n      // include: [\'themeColor\', \'label\', \'value\', \'name\' ],\n      // exclude:[\'updateWidth\']\n    },\n    docs: {\n      source: {\n        transform: (src, storyContext) => {\n          const {\n            args\n          } = storyContext;\n          return [`<script setup>`, "import { ref } from \\"vue\\";", `import { Slider } from "@ded-wds-vue/ui";`, `const modelValue = ref("${args.modelValue}");`, `<\/script>`, "", "<template>", `  <Slider`, `    ${args.min !== undefined ? `:min="${args.min}"` : ""}`, `    ${args.max !== undefined ? `:max="${args.max}"` : ""}`, `    ${args.step !== undefined ? `:step="${args.step}"` : ""}`, `    ${args.label ? `label="${args.label}"` : ""}`, `    ${args.isShowRange !== undefined ? `:isShowRange="${args.isShowRange}"` : ""}`, `    ${args.isShowCurrValue !== undefined ? `:isShowCurrValue="${args.isShowCurrValue}"` : ""}`, `    ${args.isDisabled !== undefined ? `:isDisabled="${args.isDisabled}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, `    v-model="modelValue"`, `  ></Slider>`, "</template>"].filter(Boolean).join("\\n").trim();\n        }\n      }\n    }\n  }\n}',
      ...(_c = (_b = SliderDefault.parameters) == null ? void 0 : _b.docs) == null ? void 0 : _c.source
    }
  }
};
SliderCurrent.parameters = {
  ...SliderCurrent.parameters,
  docs: {
    ...(_d = SliderCurrent.parameters) == null ? void 0 : _d.docs,
    source: {
      originalSource: '{\n  name: "顯示目前值",\n  args: {\n    // themeColor: \'primary\',\n    min: -100,\n    max: 100,\n    step: 1,\n    label: "℃",\n    isShowRange: false,\n    isDisabled: false,\n    className: "",\n    modelValue: 8\n  },\n  render: args => ({\n    components: {\n      Slider\n    },\n    setup() {\n      return {\n        args\n      };\n    },\n    template: `\n      <slider\n        :min="args.min"\n        :max="args.max"\n        :step="args.step"\n        :label="args.label"\n        :isShowRange="args.isShowRange"\n        :isShowCurrValue="true"\n        :isDisabled="args.isDisabled"\n        :className="args.className"\n        v-model="args.modelValue"\n      ></slider>`\n  }),\n  // 控制 controls 中能控制的參數\n  parameters: {\n    controls: {\n      // include: [\'themeColor\', \'label\', \'value\', \'name\' ],\n      // exclude:[\'updateWidth\']\n    },\n    docs: {\n      source: {\n        transform: (src, storyContext) => {\n          const {\n            args\n          } = storyContext;\n          return [`<script setup>`, "import { ref } from \\"vue\\";", `import { Slider } from "@ded-wds-vue/ui";`, `const modelValue = ref("${args.modelValue}");`, `<\/script>`, "", "<template>", `  <Slider`, `    ${args.min !== undefined ? `:min="${args.min}"` : ""}`, `    ${args.max !== undefined ? `:max="${args.max}"` : ""}`, `    ${args.step !== undefined ? `:step="${args.step}"` : ""}`, `    ${args.label ? `label="${args.label}"` : ""}`, `    ${args.isShowRange !== undefined ? `:isShowRange="${args.isShowRange}"` : ""}`, `    :isShowCurrValue="true"`, `    ${args.isDisabled !== undefined ? `:isDisabled="${args.isDisabled}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, `    v-model="modelValue"`, `  ></Slider>`, "</template>"].filter(Boolean).join("\\n").trim();\n        }\n      }\n    }\n  }\n}',
      ...(_f = (_e = SliderCurrent.parameters) == null ? void 0 : _e.docs) == null ? void 0 : _f.source
    }
  }
};
SliderAround.parameters = {
  ...SliderAround.parameters,
  docs: {
    ...(_g = SliderAround.parameters) == null ? void 0 : _g.docs,
    source: {
      originalSource: '{\n  name: "顯示範圍",\n  args: {\n    min: -100,\n    max: 100,\n    step: 1,\n    label: "℃",\n    isShowCurrValue: false,\n    isDisabled: false,\n    className: "",\n    modelValue: 8\n  },\n  render: args => ({\n    components: {\n      Slider\n    },\n    setup() {\n      return {\n        args\n      };\n    },\n    template: `\n      <slider\n        :min="args.min"\n        :max="args.max"\n        :step="args.step"\n        :label="args.label"\n        :isShowRange="true"\n        :isShowCurrValue="args.isShowCurrValue"\n        :isDisabled="args.isDisabled"\n        :className="args.className"\n        v-model="args.modelValue"\n      ></slider>`\n  }),\n  // 控制 controls 中能控制的參數\n  parameters: {\n    controls: {\n      // include: [\'themeColor\', \'label\', \'value\', \'name\' ],\n      // exclude:[\'updateWidth\']\n    },\n    docs: {\n      source: {\n        transform: (src, storyContext) => {\n          const {\n            args\n          } = storyContext;\n          return [`<script setup>`, "import { ref } from \\"vue\\";", `import { Slider } from "@ded-wds-vue/ui";`, `const modelValue = ref("${args.modelValue}");`, `<\/script>`, "", "<template>", `  <Slider`, `    ${args.min !== undefined ? `:min="${args.min}"` : ""}`, `    ${args.max !== undefined ? `:max="${args.max}"` : ""}`, `    ${args.step !== undefined ? `:step="${args.step}"` : ""}`, `    ${args.label ? `label="${args.label}"` : ""}`, `    :isShowRange="true"`, `    ${args.isShowCurrValue !== undefined ? `:isShowCurrValue="${args.isShowCurrValue}"` : ""}`, `    ${args.isDisabled !== undefined ? `:isDisabled="${args.isDisabled}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, `    v-model="modelValue"`, `  ></Slider>`, "</template>"].filter(Boolean).join("\\n").trim();\n        }\n      }\n    }\n  }\n}',
      ...(_i = (_h = SliderAround.parameters) == null ? void 0 : _h.docs) == null ? void 0 : _i.source
    }
  }
};
const __namedExportsOrder = ["SliderDefault", "SliderCurrent", "SliderAround"];
export {
  SliderAround,
  SliderCurrent,
  SliderDefault,
  __namedExportsOrder,
  Slider_stories as default
};

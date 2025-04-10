var _a, _b, _c, _d, _e, _f;
import { p as mergeModels, u as useModel, c as createElementBlock, a as createBaseVNode, n as normalizeClass, t as toDisplayString, I as withModifiers, o as openBlock } from "./vue.esm-bundler-K7CzQrxl.js";
const _sfc_main = {
  __name: "Toggle",
  props: /* @__PURE__ */ mergeModels({
    themeColor: {
      type: String,
      default: "primary",
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
    checkLabel: {
      type: String,
      default: "on"
    },
    unCheckLabel: {
      type: String,
      default: "off"
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
    "modelValue": { type: Boolean, default: false },
    "modelModifiers": {}
  }),
  emits: ["update:modelValue"],
  setup(__props) {
    const props = __props;
    const isChecked = useModel(__props, "modelValue");
    function handleToggle() {
      isChecked.value = !isChecked.value;
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(["ded-toggle", {
          [`ded-toggle-${props.themeColor}`]: props.themeColor,
          "ded-toggle-on": isChecked.value,
          "ded-toggle-off": !isChecked.value,
          "ded-toggle-disabled": props.isDisabled,
          [props.className]: !!props.className
        }]),
        onClick: withModifiers(handleToggle, ["prevent"])
      }, [
        createBaseVNode("div", {
          class: normalizeClass(["ded-toggle-thumb", {
            "ded-toggle-thumb-on": isChecked.value,
            "ded-toggle-thumb-off": !isChecked.value,
            "ded-toggle-thumb-disabled": props.isDisabled
          }])
        }, null, 2),
        createBaseVNode("label", {
          class: normalizeClass(["ded-toggle-label", {
            "ded-toggle-label-on": isChecked.value,
            "ded-toggle-label-off": !isChecked.value,
            "ded-toggle-label-disabled": props.isDisabled
          }])
        }, toDisplayString(isChecked.value === true ? props.checkLabel : props.unCheckLabel), 3)
      ], 2);
    };
  }
};
_sfc_main.__docgenInfo = { "exportName": "default", "displayName": "Toggle", "description": "", "tags": {}, "props": [{ "name": "themeColor", "type": { "name": "string" }, "defaultValue": { "func": false, "value": '"primary"' }, "values": ["primary", "secondary", "neutral", "info", "success", "warning", "error"] }, { "name": "checkLabel", "type": { "name": "string" }, "defaultValue": { "func": false, "value": '"on"' } }, { "name": "unCheckLabel", "type": { "name": "string" }, "defaultValue": { "func": false, "value": '"off"' } }, { "name": "isDisabled", "type": { "name": "boolean" }, "defaultValue": { "func": false, "value": "false" } }, { "name": "className", "type": { "name": "string" }, "defaultValue": { "func": false, "value": '""' } }], "sourceFiles": ["/Users/auouser/Desktop/Work_Space/DED-WDS_VUE/libs/src/ui/element/Toggle/Toggle.vue"] };
const Toggle_stories = {
  title: "Component/Toggle",
  component: _sfc_main,
  tags: ["autodocs"],
  argTypes: {
    themeColor: {
      description: "主題顏色",
      control: {
        type: "select"
      },
      options: ["primary", "secondary", "neutral", "info", "success", "warning", "error"],
      table: {
        type: {
          summary: "primary | secondary | neutral | info | success | warning | error"
        }
      }
    },
    checkLabel: {
      description: "開啟文字",
      control: {
        type: "text"
      }
    },
    unCheckLabel: {
      description: "關閉文字",
      control: {
        type: "text"
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
    modelValue: {
      description: "是否開啟",
      control: {
        type: "boolean"
      },
      table: {
        type: {
          summary: "boolean"
        },
        category: "v-model"
      }
    }
  },
  parameters: {
    // 自動文件
    docs: {
      title: "Toggle",
      description: {
        component: "Toggle 組件的呈現及說明。"
      }
    }
  }
};
const ToggleDefault = {
  name: "預設項目",
  args: {
    themeColor: "success",
    checkLabel: "on",
    unCheckLabel: "off",
    isDisabled: false,
    className: "",
    modelValue: true
  },
  render: (args) => ({
    components: {
      Toggle: _sfc_main
    },
    setup() {
      return {
        args
      };
    },
    template: `
      <div style="display:flex; gap: 16px">
        <Toggle
          :themeColor="args.themeColor"
          :checkLabel="args.checkLabel"
          :unCheckLabel="args.unCheckLabel"
          :isDisabled="args.isDisabled"
          :className="args.className" 
          v-model="args.modelValue">
        </Toggle>
      </div>`
  }),
  // 控制 controls 中能控制的參數
  parameters: {
    controls: {
      exclude: ["toggleIsChecked"]
    },
    docs: {
      source: {
        transform: (src, storyContext) => {
          const {
            args
          } = storyContext;
          return [`<script setup>`, 'import { ref } from "vue";', `import { Toggle } from "@ded-wds-vue/ui";`, `const modelValue = ref(${args.modelValue});`, `<\/script>`, "", "<template>", "  <Toggle", `    ${args.themeColor ? `themeColor="${args.themeColor}"` : ""}`, `    ${args.checkLabel ? `checkLabel="${args.checkLabel}"` : ""}`, `    ${args.unCheckLabel ? `unCheckLabel="${args.unCheckLabel}"` : ""}`, `    ${args.isDisabled !== void 0 ? `:isDisabled="${args.isDisabled}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, `    v-model="modelValue"`, "  ></Toggle>", "</template>"].filter(Boolean).join("\n").trim();
        }
      }
    }
  }
};
const ToggleColor = {
  name: "主題色彩",
  args: {
    // themeColor: 'success',
    checkLabel: "on",
    unCheckLabel: "off",
    isDisabled: false,
    className: "",
    modelValue: true
  },
  render: (args) => ({
    components: {
      Toggle: _sfc_main
    },
    setup() {
      return {
        args
      };
    },
    template: `
      <div style="display: flex; gap: 16px">
        <Toggle
          themeColor="primary"
          :checkLabel="args.checkLabel"
          :unCheckLabel="args.unCheckLabel"
          :isDisabled="args.isDisabled"
          :className="args.className"
          v-model="args.modelValue"
        ></Toggle>

        <Toggle
          themeColor="secondary"
          :checkLabel="args.checkLabel"
          :unCheckLabel="args.unCheckLabel"
          :isDisabled="args.isDisabled"
          :className="args.className"
          v-model="args.modelValue"
        ></Toggle>

        <Toggle
          themeColor="neutral"
          :checkLabel="args.checkLabel"
          :unCheckLabel="args.unCheckLabel"
          :isDisabled="args.isDisabled"
          :className="args.className"
          v-model="args.modelValue"
        ></Toggle>

        <Toggle
          themeColor="info"
          :checkLabel="args.checkLabel"
          :unCheckLabel="args.unCheckLabel"
          :isDisabled="args.isDisabled"
          :className="args.className"
          v-model="args.modelValue"
        ></Toggle>

        <Toggle
          themeColor="success"
          :checkLabel="args.checkLabel"
          :unCheckLabel="args.unCheckLabel"
          :isDisabled="args.isDisabled"
          :className="args.className"
          v-model="args.modelValue"
        ></Toggle>

        <Toggle
          themeColor="warning"
          :checkLabel="args.checkLabel"
          :unCheckLabel="args.unCheckLabel"
          :isDisabled="args.isDisabled"
          :className="args.className"
          v-model="args.modelValue"
        ></Toggle>

        <Toggle
          themeColor="error"
          :checkLabel="args.checkLabel"
          :unCheckLabel="args.unCheckLabel"
          :isDisabled="args.isDisabled"
          :className="args.className"
          v-model="args.modelValue"
        ></Toggle>
      </div>`
  }),
  // 控制 controls 中能控制的參數
  parameters: {
    controls: {
      exclude: ["themeColor"]
    },
    docs: {
      source: {
        transform: (src, storyContext) => {
          const {
            args
          } = storyContext;
          return [`<script setup>`, 'import { ref } from "vue";', `import { Toggle } from "@ded-wds-vue/ui";`, `const modelValue = ref(${args.modelValue});`, `<\/script>`, "", "<template>", "  <Toggle", `    themeColor="primary"`, `    ${args.checkLabel ? `checkLabel="${args.checkLabel}"` : ""}`, `    ${args.unCheckLabel ? `unCheckLabel="${args.unCheckLabel}"` : ""}`, `    ${args.isDisabled !== void 0 ? `:isDisabled="${args.isDisabled}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, `    v-model="modelValue"`, "  ></Toggle>", "  <Toggle", `    themeColor="secondary"`, `    ${args.checkLabel ? `checkLabel="${args.checkLabel}"` : ""}`, `    ${args.unCheckLabel ? `unCheckLabel="${args.unCheckLabel}"` : ""}`, `    ${args.isDisabled !== void 0 ? `:isDisabled="${args.isDisabled}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, `    v-model="modelValue"`, "  ></Toggle>", "  <Toggle", `    themeColor="neutral"`, `    ${args.checkLabel ? `checkLabel="${args.checkLabel}"` : ""}`, `    ${args.unCheckLabel ? `unCheckLabel="${args.unCheckLabel}"` : ""}`, `    ${args.isDisabled !== void 0 ? `:isDisabled="${args.isDisabled}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, `    v-model="modelValue"`, "  ></Toggle>", "  <Toggle", `    themeColor="info"`, `    ${args.checkLabel ? `checkLabel="${args.checkLabel}"` : ""}`, `    ${args.unCheckLabel ? `unCheckLabel="${args.unCheckLabel}"` : ""}`, `    ${args.isDisabled !== void 0 ? `:isDisabled="${args.isDisabled}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, `    v-model="modelValue"`, "  ></Toggle>", "  <Toggle", `    themeColor="success"`, `    ${args.checkLabel ? `checkLabel="${args.checkLabel}"` : ""}`, `    ${args.unCheckLabel ? `unCheckLabel="${args.unCheckLabel}"` : ""}`, `    ${args.isDisabled !== void 0 ? `:isDisabled="${args.isDisabled}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, `    v-model="modelValue"`, "  ></Toggle>", "  <Toggle", `    themeColor="warning"`, `    ${args.checkLabel ? `checkLabel="${args.checkLabel}"` : ""}`, `    ${args.unCheckLabel ? `unCheckLabel="${args.unCheckLabel}"` : ""}`, `    ${args.isDisabled !== void 0 ? `:isDisabled="${args.isDisabled}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, `    v-model="modelValue"`, "  ></Toggle>", "  <Toggle", `    themeColor="error"`, `    ${args.checkLabel ? `checkLabel="${args.checkLabel}"` : ""}`, `    ${args.unCheckLabel ? `unCheckLabel="${args.unCheckLabel}"` : ""}`, `    ${args.isDisabled !== void 0 ? `:isDisabled="${args.isDisabled}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, `    v-model="modelValue"`, "  ></Toggle>", "</template>"].filter(Boolean).join("\n").trim();
        }
      }
    }
  }
};
ToggleDefault.parameters = {
  ...ToggleDefault.parameters,
  docs: {
    ...(_a = ToggleDefault.parameters) == null ? void 0 : _a.docs,
    source: {
      originalSource: '{\n  name: "預設項目",\n  args: {\n    themeColor: "success",\n    checkLabel: "on",\n    unCheckLabel: "off",\n    isDisabled: false,\n    className: "",\n    modelValue: true\n  },\n  render: args => ({\n    components: {\n      Toggle\n    },\n    setup() {\n      return {\n        args\n      };\n    },\n    template: `\n      <div style="display:flex; gap: 16px">\n        <Toggle\n          :themeColor="args.themeColor"\n          :checkLabel="args.checkLabel"\n          :unCheckLabel="args.unCheckLabel"\n          :isDisabled="args.isDisabled"\n          :className="args.className" \n          v-model="args.modelValue">\n        </Toggle>\n      </div>`\n  }),\n  // 控制 controls 中能控制的參數\n  parameters: {\n    controls: {\n      exclude: ["toggleIsChecked"]\n    },\n    docs: {\n      source: {\n        transform: (src, storyContext) => {\n          const {\n            args\n          } = storyContext;\n          return [`<script setup>`, "import { ref } from \\"vue\\";", `import { Toggle } from "@ded-wds-vue/ui";`, `const modelValue = ref(${args.modelValue});`, `<\/script>`, "", "<template>", "  <Toggle", `    ${args.themeColor ? `themeColor="${args.themeColor}"` : ""}`, `    ${args.checkLabel ? `checkLabel="${args.checkLabel}"` : ""}`, `    ${args.unCheckLabel ? `unCheckLabel="${args.unCheckLabel}"` : ""}`, `    ${args.isDisabled !== undefined ? `:isDisabled="${args.isDisabled}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, `    v-model="modelValue"`, "  ></Toggle>", "</template>"].filter(Boolean).join("\\n").trim();\n        }\n      }\n    }\n  }\n}',
      ...(_c = (_b = ToggleDefault.parameters) == null ? void 0 : _b.docs) == null ? void 0 : _c.source
    }
  }
};
ToggleColor.parameters = {
  ...ToggleColor.parameters,
  docs: {
    ...(_d = ToggleColor.parameters) == null ? void 0 : _d.docs,
    source: {
      originalSource: '{\n  name: "主題色彩",\n  args: {\n    // themeColor: \'success\',\n    checkLabel: "on",\n    unCheckLabel: "off",\n    isDisabled: false,\n    className: "",\n    modelValue: true\n  },\n  render: args => ({\n    components: {\n      Toggle\n    },\n    setup() {\n      return {\n        args\n      };\n    },\n    template: `\n      <div style="display: flex; gap: 16px">\n        <Toggle\n          themeColor="primary"\n          :checkLabel="args.checkLabel"\n          :unCheckLabel="args.unCheckLabel"\n          :isDisabled="args.isDisabled"\n          :className="args.className"\n          v-model="args.modelValue"\n        ></Toggle>\n\n        <Toggle\n          themeColor="secondary"\n          :checkLabel="args.checkLabel"\n          :unCheckLabel="args.unCheckLabel"\n          :isDisabled="args.isDisabled"\n          :className="args.className"\n          v-model="args.modelValue"\n        ></Toggle>\n\n        <Toggle\n          themeColor="neutral"\n          :checkLabel="args.checkLabel"\n          :unCheckLabel="args.unCheckLabel"\n          :isDisabled="args.isDisabled"\n          :className="args.className"\n          v-model="args.modelValue"\n        ></Toggle>\n\n        <Toggle\n          themeColor="info"\n          :checkLabel="args.checkLabel"\n          :unCheckLabel="args.unCheckLabel"\n          :isDisabled="args.isDisabled"\n          :className="args.className"\n          v-model="args.modelValue"\n        ></Toggle>\n\n        <Toggle\n          themeColor="success"\n          :checkLabel="args.checkLabel"\n          :unCheckLabel="args.unCheckLabel"\n          :isDisabled="args.isDisabled"\n          :className="args.className"\n          v-model="args.modelValue"\n        ></Toggle>\n\n        <Toggle\n          themeColor="warning"\n          :checkLabel="args.checkLabel"\n          :unCheckLabel="args.unCheckLabel"\n          :isDisabled="args.isDisabled"\n          :className="args.className"\n          v-model="args.modelValue"\n        ></Toggle>\n\n        <Toggle\n          themeColor="error"\n          :checkLabel="args.checkLabel"\n          :unCheckLabel="args.unCheckLabel"\n          :isDisabled="args.isDisabled"\n          :className="args.className"\n          v-model="args.modelValue"\n        ></Toggle>\n      </div>`\n  }),\n  // 控制 controls 中能控制的參數\n  parameters: {\n    controls: {\n      exclude: ["themeColor"]\n    },\n    docs: {\n      source: {\n        transform: (src, storyContext) => {\n          const {\n            args\n          } = storyContext;\n          return [`<script setup>`, "import { ref } from \\"vue\\";", `import { Toggle } from "@ded-wds-vue/ui";`, `const modelValue = ref(${args.modelValue});`, `<\/script>`, "", "<template>", "  <Toggle", `    themeColor="primary"`, `    ${args.checkLabel ? `checkLabel="${args.checkLabel}"` : ""}`, `    ${args.unCheckLabel ? `unCheckLabel="${args.unCheckLabel}"` : ""}`, `    ${args.isDisabled !== undefined ? `:isDisabled="${args.isDisabled}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, `    v-model="modelValue"`, "  ></Toggle>", "  <Toggle", `    themeColor="secondary"`, `    ${args.checkLabel ? `checkLabel="${args.checkLabel}"` : ""}`, `    ${args.unCheckLabel ? `unCheckLabel="${args.unCheckLabel}"` : ""}`, `    ${args.isDisabled !== undefined ? `:isDisabled="${args.isDisabled}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, `    v-model="modelValue"`, "  ></Toggle>", "  <Toggle", `    themeColor="neutral"`, `    ${args.checkLabel ? `checkLabel="${args.checkLabel}"` : ""}`, `    ${args.unCheckLabel ? `unCheckLabel="${args.unCheckLabel}"` : ""}`, `    ${args.isDisabled !== undefined ? `:isDisabled="${args.isDisabled}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, `    v-model="modelValue"`, "  ></Toggle>", "  <Toggle", `    themeColor="info"`, `    ${args.checkLabel ? `checkLabel="${args.checkLabel}"` : ""}`, `    ${args.unCheckLabel ? `unCheckLabel="${args.unCheckLabel}"` : ""}`, `    ${args.isDisabled !== undefined ? `:isDisabled="${args.isDisabled}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, `    v-model="modelValue"`, "  ></Toggle>", "  <Toggle", `    themeColor="success"`, `    ${args.checkLabel ? `checkLabel="${args.checkLabel}"` : ""}`, `    ${args.unCheckLabel ? `unCheckLabel="${args.unCheckLabel}"` : ""}`, `    ${args.isDisabled !== undefined ? `:isDisabled="${args.isDisabled}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, `    v-model="modelValue"`, "  ></Toggle>", "  <Toggle", `    themeColor="warning"`, `    ${args.checkLabel ? `checkLabel="${args.checkLabel}"` : ""}`, `    ${args.unCheckLabel ? `unCheckLabel="${args.unCheckLabel}"` : ""}`, `    ${args.isDisabled !== undefined ? `:isDisabled="${args.isDisabled}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, `    v-model="modelValue"`, "  ></Toggle>", "  <Toggle", `    themeColor="error"`, `    ${args.checkLabel ? `checkLabel="${args.checkLabel}"` : ""}`, `    ${args.unCheckLabel ? `unCheckLabel="${args.unCheckLabel}"` : ""}`, `    ${args.isDisabled !== undefined ? `:isDisabled="${args.isDisabled}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, `    v-model="modelValue"`, "  ></Toggle>", "</template>"].filter(Boolean).join("\\n").trim();\n        }\n      }\n    }\n  }\n}',
      ...(_f = (_e = ToggleColor.parameters) == null ? void 0 : _e.docs) == null ? void 0 : _f.source
    }
  }
};
const __namedExportsOrder = ["ToggleDefault", "ToggleColor"];
export {
  ToggleColor,
  ToggleDefault,
  __namedExportsOrder,
  Toggle_stories as default
};

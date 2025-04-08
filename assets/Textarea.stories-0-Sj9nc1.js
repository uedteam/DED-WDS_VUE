var _a, _b, _c, _d, _e, _f, _g, _h, _i;
import { p as mergeModels, u as useModel, g as computed, c as createElementBlock, d as createCommentVNode, a as createBaseVNode, n as normalizeClass, t as toDisplayString, x as withDirectives, G as vModelText, s as mergeProps, F as Fragment, j as createBlock, l as resolveDynamicComponent, f as createTextVNode, o as openBlock, h } from "./vue.esm-bundler-K7CzQrxl.js";
import { v as v4 } from "./v4-CjlX8hrF.js";
import { _ as _sfc_main$1 } from "./Icon-B6pI5HKs.js";
import { _ as _sfc_main$2 } from "./StatusIndicator-n0z-IB02.js";
const _hoisted_1 = ["maxlength", "placeholder"];
const _sfc_main = /* @__PURE__ */ Object.assign({ inheritAttrs: false }, {
  __name: "Textarea",
  props: /* @__PURE__ */ mergeModels({
    label: {
      type: String
    },
    placeholder: {
      type: String,
      default: "Placeholder"
    },
    limit: {
      type: Number,
      default: 30
    },
    hint: {
      type: Object,
      default: () => ({ error: "", description: "" })
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
    const baseId = v4();
    const generateId = `${baseId}-textarea`;
    const modelValue = useModel(__props, "modelValue");
    const hintClass = computed(() => {
      if (props.hint.error)
        return "error";
      if (props.hint.description)
        return "desc";
      return "";
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(["ded-textarea-container", { [props.className]: !!props.className }])
      }, [
        props.label ? (openBlock(), createElementBlock("label", {
          key: 0,
          class: normalizeClass(["ded-textarea-label", [{ "ded-textarea-disable": props.isDisabled }]]),
          for: generateId
        }, toDisplayString(props.label), 3)) : createCommentVNode("", true),
        createBaseVNode("div", {
          class: normalizeClass(["ded-textarea-group", [
            { "ded-textarea-disable": props.isDisabled },
            hintClass.value ? `ded-textarea-border-${hintClass.value}` : ""
          ]])
        }, [
          withDirectives(createBaseVNode("textarea", mergeProps({
            id: generateId,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => modelValue.value = $event),
            class: ["ded-textarea", [{ "ded-textarea-disable": props.isDisabled }]],
            maxlength: props.limit > 0 ? props.limit : void 0,
            placeholder: props.placeholder
          }, _ctx.$attrs), null, 16, _hoisted_1), [
            [vModelText, modelValue.value]
          ]),
          modelValue.value.length > 0 && props.limit !== 0 ? (openBlock(), createElementBlock("small", {
            key: 0,
            class: normalizeClass(["ded-textarea-hint-count", [{ "ded-textarea-disable": props.isDisabled }]])
          }, toDisplayString(modelValue.value.length > 0 ? `${modelValue.value.length} / ${props.limit}` : ""), 3)) : createCommentVNode("", true)
        ], 2),
        createBaseVNode("small", {
          class: normalizeClass(["ded-textarea-hint", [{ "ded-textarea-disable": props.isDisabled }, `ded-textarea-hint-${hintClass.value}`]])
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
_sfc_main.__docgenInfo = { "exportName": "default", "displayName": "Textarea", "description": "", "tags": {}, "props": [{ "name": "label", "type": { "name": "string" } }, { "name": "placeholder", "type": { "name": "string" }, "defaultValue": { "func": false, "value": '"Placeholder"' } }, { "name": "limit", "type": { "name": "number" }, "defaultValue": { "func": false, "value": "30" } }, { "name": "hint", "type": { "name": "object" }, "defaultValue": { "func": false, "value": '{\n  error: "",\n  description: ""\n}' } }, { "name": "isDisabled", "type": { "name": "boolean" }, "defaultValue": { "func": false, "value": "false" } }, { "name": "className", "type": { "name": "string" }, "defaultValue": { "func": false, "value": '""' } }], "sourceFiles": ["/Users/auouser/Desktop/Work_Space/DED-WDS_VUE/libs/src/ui/element/Textarea/Textarea.vue"] };
function formatDataSource(hint) {
  return `{
      error: ${typeof hint.error === "function" ? `${hint.error}` : '""'},
      description: ${typeof hint.description === "function" ? `${hint.description}` : '""'}
}`;
}
const Textarea_stories = {
  title: "Component/Textarea",
  component: _sfc_main,
  tags: ["autodocs"],
  argTypes: {
    label: {
      description: "標題",
      control: {
        type: "text"
      }
    },
    placeholder: {
      description: "輸入提示",
      control: {
        type: "text"
      }
    },
    limit: {
      description: "字數限制",
      control: {
        type: "number"
      }
    },
    hint: {
      description: "提示訊息",
      control: {
        type: "object"
      },
      table: {
        type: {
          summary: "{ error: string | VNode; description: string | VNode; }"
        }
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
      description: "輸入值",
      control: {
        type: "text"
      },
      table: {
        type: {
          summary: "string"
        },
        category: "v-model"
        // defaultValue: { summary: '""' },
      }
    }
  },
  parameters: {
    // 自動文件
    docs: {
      title: "Textarea",
      description: {
        component: "Textarea 組件的呈現及說明。"
      }
    }
  }
};
const TextareaDefault = {
  name: "預設項目",
  args: {
    label: "Label",
    placeholder: "Placeholder",
    limit: 0,
    hint: {
      error: "",
      description: ""
    },
    isDisabled: false,
    className: "",
    modelValue: "Type something"
  },
  render: (args) => ({
    components: {
      Textarea: _sfc_main
    },
    setup() {
      return {
        args
      };
    },
    template: `
      <Textarea
        :label="args.label"
        :placeholder="args.placeholder"
        :limit="args.limit"
        :hint="args.hint"
        :isDisabled="args.isDisabled"
        :className="args.className"
        v-model="args.modelValue"
      ></Textarea>`
  }),
  // 控制 controls 中能控制的參數
  parameters: {
    controls: {
      // include: ['themeColor', 'label', 'value', 'name' ],
      // exclude: [],
    },
    docs: {
      source: {
        transform: (src, storyContext) => {
          const {
            args
          } = storyContext;
          const dataSourceString = formatDataSource(args.hint);
          return [`<script setup>`, 'import { ref, h } from "vue";', `import { Textarea } from "@ded-wds-vue/ui";`, `const hint = ${dataSourceString};`, `const modelValue = ref("${args.modelValue}");`, `<\/script>`, "", "<template>", "  <Textarea", `    ${args.label ? `label="${args.label}"` : ""}`, `    ${args.placeholder ? `placeholder="${args.placeholder}"` : ""}`, `    ${args.limit !== void 0 ? `:limit="${args.limit}"` : ""}`, `    :hint="hint"`, `    ${args.isDisabled !== void 0 ? `:isDisabled="${args.isDisabled}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, `    v-model="modelValue"`, "  ></Textarea>", "</template>"].filter(Boolean).join("\n").trim();
        }
      }
    }
  }
};
const TextareaLimit = {
  name: "字數限制",
  args: {
    label: "Label",
    placeholder: "Placeholder",
    limit: 30,
    hint: {
      error: "",
      description: ""
    },
    isDisabled: false,
    className: "",
    modelValue: "Type something"
  },
  render: (args) => ({
    components: {
      Textarea: _sfc_main
    },
    setup() {
      return {
        args
      };
    },
    template: `
      <Textarea
        :label="args.label"
        :placeholder="args.placeholder"
        :limit="args.limit"
        :hint="args.hint"
        :isDisabled="args.isDisabled"
        :className="args.className"
        v-model="args.modelValue"
      ></Textarea>`
  }),
  // 控制 controls 中能控制的參數
  parameters: {
    controls: {
      // include: ['themeColor', 'label', 'value', 'name' ],
      // exclude: ['limit' ],
    },
    docs: {
      source: {
        transform: (src, storyContext) => {
          const {
            args
          } = storyContext;
          const dataSourceString = formatDataSource(args.hint);
          return [`<script setup>`, 'import { ref, h } from "vue";', `import { Textarea } from "@ded-wds-vue/ui";`, `const hint = ${dataSourceString};`, `const modelValue = ref("${args.modelValue}");`, `<\/script>`, "", "<template>", "  <Textarea", `    ${args.label ? `label="${args.label}"` : ""}`, `    ${args.placeholder ? `placeholder="${args.placeholder}"` : ""}`, `    ${args.limit !== void 0 ? `:limit="${args.limit}"` : ""}`, `    :hint="hint"`, `    ${args.isDisabled !== void 0 ? `:isDisabled="${args.isDisabled}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, `    v-model="modelValue"`, "  ></Textarea>", "</template>"].filter(Boolean).join("\n").trim();
        }
      }
    }
  }
};
const TextareaStatus = {
  name: "輸入框狀態",
  args: {
    label: "Label",
    placeholder: "Placeholder",
    limit: 30,
    hintPrompt: {
      error: "",
      description: () => h(_sfc_main$2, {
        themeColor: "neutral",
        variant: "text",
        size: "medium",
        isShowDot: false
      }, "Prompt message")
    },
    hintError: {
      error: () => h(_sfc_main$2, {
        themeColor: "error",
        variant: "text",
        size: "medium",
        prefix: "SvgErrorCircle",
        isShowDot: false
      }, "Error message"),
      description: ""
    },
    hint: {
      error: "",
      description: ""
    },
    isDisabled: false,
    className: "",
    modelValue: "Type something"
  },
  render: (args) => ({
    components: {
      Textarea: _sfc_main
    },
    setup() {
      return {
        args,
        StatusIndicator: _sfc_main$2,
        Icon: _sfc_main$1
      };
    },
    template: `
      <div style="display: flex; flex-direction: column; gap:16px">
        
        <Textarea
            :label="args.label"
            :placeholder="args.placeholder"
            :limit="args.limit"
            :hint="args.hintPrompt"
            :isDisabled="args.isDisabled"
            :className="args.className"
            v-model="args.modelValue"
        ></Textarea>
        
        <Textarea
          :label="args.label"
          :placeholder="args.placeholder"
          :limit="args.limit"
          :hint="args.hintError"
          :isDisabled="args.isDisabled"
          :className="args.className"
          v-model="args.modelValue"
        ></Textarea>

        <Textarea
          :label="args.label"
          :placeholder="args.placeholder"
          :limit="args.limit"
          :hint="args.hint"
          :isDisabled="true"
          :className="args.className"
          v-model="args.modelValue"
        ></Textarea>
      </div>`
  }),
  // 控制 controls 中能控制的參數
  parameters: {
    controls: {
      exclude: ["hint", "isDisabled"]
    },
    docs: {
      source: {
        transform: (src, storyContext) => {
          const {
            args
          } = storyContext;
          const dataSourceStringPrompt = formatDataSource(args.hintPrompt);
          const dataSourceStringError = formatDataSource(args.hintError);
          const dataSourceString = formatDataSource(args.hint);
          return [`<script setup>`, 'import { ref, h } from "vue";', `import { Textarea, Icon, StatusIndicator } from "@ded-wds-vue/ui";`, `const hintPrompt = ${dataSourceStringPrompt};`, `const hintError = ${dataSourceStringError};`, `const hint = ${dataSourceString};`, `const modelValue = ref("${args.modelValue}");`, `<\/script>`, "", "<template>", "  <Textarea", `    ${args.label ? `label="${args.label}"` : ""}`, `    ${args.placeholder ? `placeholder="${args.placeholder}"` : ""}`, `    ${args.limit !== void 0 ? `:limit="${args.limit}"` : ""}`, `    :hint="hintPrompt"`, `    ${args.isDisabled !== void 0 ? `:isDisabled="${args.isDisabled}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, `    v-model="modelValue"`, "  ></Textarea>", "  <Textarea", `    ${args.label ? `label="${args.label}"` : ""}`, `    ${args.placeholder ? `placeholder="${args.placeholder}"` : ""}`, `    ${args.limit !== void 0 ? `:limit="${args.limit}"` : ""}`, `    :hint="hintError"`, `    ${args.isDisabled !== void 0 ? `:isDisabled="${args.isDisabled}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, `    v-model="modelValue"`, "  ></Textarea>", "  <Textarea", `    ${args.label ? `label="${args.label}"` : ""}`, `    ${args.placeholder ? `placeholder="${args.placeholder}"` : ""}`, `    ${args.limit !== void 0 ? `:limit="${args.limit}"` : ""}`, `    :hint="hint"`, `    v-model="modelValue"`, "  ></Textarea>", "</template>"].filter(Boolean).join("\n").trim();
        }
      }
    }
  }
};
TextareaDefault.parameters = {
  ...TextareaDefault.parameters,
  docs: {
    ...(_a = TextareaDefault.parameters) == null ? void 0 : _a.docs,
    source: {
      originalSource: '{\n  name: "預設項目",\n  args: {\n    label: "Label",\n    placeholder: "Placeholder",\n    limit: 0,\n    hint: {\n      error: "",\n      description: ""\n    },\n    isDisabled: false,\n    className: "",\n    modelValue: "Type something"\n  },\n  render: args => ({\n    components: {\n      Textarea\n    },\n    setup() {\n      return {\n        args\n      };\n    },\n    template: `\n      <Textarea\n        :label="args.label"\n        :placeholder="args.placeholder"\n        :limit="args.limit"\n        :hint="args.hint"\n        :isDisabled="args.isDisabled"\n        :className="args.className"\n        v-model="args.modelValue"\n      ></Textarea>`\n  }),\n  // 控制 controls 中能控制的參數\n  parameters: {\n    controls: {\n      // include: [\'themeColor\', \'label\', \'value\', \'name\' ],\n      // exclude: [],\n    },\n    docs: {\n      source: {\n        transform: (src, storyContext) => {\n          const {\n            args\n          } = storyContext;\n          const dataSourceString = formatDataSource(args.hint);\n          return [`<script setup>`, "import { ref, h } from \\"vue\\";", `import { Textarea } from "@ded-wds-vue/ui";`, `const hint = ${dataSourceString};`, `const modelValue = ref("${args.modelValue}");`, `<\/script>`, "", "<template>", "  <Textarea", `    ${args.label ? `label="${args.label}"` : ""}`, `    ${args.placeholder ? `placeholder="${args.placeholder}"` : ""}`, `    ${args.limit !== undefined ? `:limit="${args.limit}"` : ""}`, `    :hint="hint"`, `    ${args.isDisabled !== undefined ? `:isDisabled="${args.isDisabled}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, `    v-model="modelValue"`, "  ></Textarea>", "</template>"].filter(Boolean).join("\\n").trim();\n        }\n      }\n    }\n  }\n}',
      ...(_c = (_b = TextareaDefault.parameters) == null ? void 0 : _b.docs) == null ? void 0 : _c.source
    }
  }
};
TextareaLimit.parameters = {
  ...TextareaLimit.parameters,
  docs: {
    ...(_d = TextareaLimit.parameters) == null ? void 0 : _d.docs,
    source: {
      originalSource: '{\n  name: "字數限制",\n  args: {\n    label: "Label",\n    placeholder: "Placeholder",\n    limit: 30,\n    hint: {\n      error: "",\n      description: ""\n    },\n    isDisabled: false,\n    className: "",\n    modelValue: "Type something"\n  },\n  render: args => ({\n    components: {\n      Textarea\n    },\n    setup() {\n      return {\n        args\n      };\n    },\n    template: `\n      <Textarea\n        :label="args.label"\n        :placeholder="args.placeholder"\n        :limit="args.limit"\n        :hint="args.hint"\n        :isDisabled="args.isDisabled"\n        :className="args.className"\n        v-model="args.modelValue"\n      ></Textarea>`\n  }),\n  // 控制 controls 中能控制的參數\n  parameters: {\n    controls: {\n      // include: [\'themeColor\', \'label\', \'value\', \'name\' ],\n      // exclude: [\'limit\' ],\n    },\n    docs: {\n      source: {\n        transform: (src, storyContext) => {\n          const {\n            args\n          } = storyContext;\n          const dataSourceString = formatDataSource(args.hint);\n          return [`<script setup>`, "import { ref, h } from \\"vue\\";", `import { Textarea } from "@ded-wds-vue/ui";`, `const hint = ${dataSourceString};`, `const modelValue = ref("${args.modelValue}");`, `<\/script>`, "", "<template>", "  <Textarea", `    ${args.label ? `label="${args.label}"` : ""}`, `    ${args.placeholder ? `placeholder="${args.placeholder}"` : ""}`, `    ${args.limit !== undefined ? `:limit="${args.limit}"` : ""}`, `    :hint="hint"`, `    ${args.isDisabled !== undefined ? `:isDisabled="${args.isDisabled}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, `    v-model="modelValue"`, "  ></Textarea>", "</template>"].filter(Boolean).join("\\n").trim();\n        }\n      }\n    }\n  }\n}',
      ...(_f = (_e = TextareaLimit.parameters) == null ? void 0 : _e.docs) == null ? void 0 : _f.source
    }
  }
};
TextareaStatus.parameters = {
  ...TextareaStatus.parameters,
  docs: {
    ...(_g = TextareaStatus.parameters) == null ? void 0 : _g.docs,
    source: {
      originalSource: '{\n  name: "輸入框狀態",\n  args: {\n    label: "Label",\n    placeholder: "Placeholder",\n    limit: 30,\n    hintPrompt: {\n      error: "",\n      description: () => h(StatusIndicator, {\n        themeColor: "neutral",\n        variant: "text",\n        size: "medium",\n        isShowDot: false\n      }, "Prompt message")\n    },\n    hintError: {\n      error: () => h(StatusIndicator, {\n        themeColor: "error",\n        variant: "text",\n        size: "medium",\n        prefix: "SvgErrorCircle",\n        isShowDot: false\n      }, "Error message"),\n      description: ""\n    },\n    hint: {\n      error: "",\n      description: ""\n    },\n    isDisabled: false,\n    className: "",\n    modelValue: "Type something"\n  },\n  render: args => ({\n    components: {\n      Textarea\n    },\n    setup() {\n      return {\n        args,\n        StatusIndicator,\n        Icon\n      };\n    },\n    template: `\n      <div style="display: flex; flex-direction: column; gap:16px">\n        \n        <Textarea\n            :label="args.label"\n            :placeholder="args.placeholder"\n            :limit="args.limit"\n            :hint="args.hintPrompt"\n            :isDisabled="args.isDisabled"\n            :className="args.className"\n            v-model="args.modelValue"\n        ></Textarea>\n        \n        <Textarea\n          :label="args.label"\n          :placeholder="args.placeholder"\n          :limit="args.limit"\n          :hint="args.hintError"\n          :isDisabled="args.isDisabled"\n          :className="args.className"\n          v-model="args.modelValue"\n        ></Textarea>\n\n        <Textarea\n          :label="args.label"\n          :placeholder="args.placeholder"\n          :limit="args.limit"\n          :hint="args.hint"\n          :isDisabled="true"\n          :className="args.className"\n          v-model="args.modelValue"\n        ></Textarea>\n      </div>`\n  }),\n  // 控制 controls 中能控制的參數\n  parameters: {\n    controls: {\n      exclude: ["hint", "isDisabled"]\n    },\n    docs: {\n      source: {\n        transform: (src, storyContext) => {\n          const {\n            args\n          } = storyContext;\n          const dataSourceStringPrompt = formatDataSource(args.hintPrompt);\n          const dataSourceStringError = formatDataSource(args.hintError);\n          const dataSourceString = formatDataSource(args.hint);\n          return [`<script setup>`, "import { ref, h } from \\"vue\\";", `import { Textarea, Icon, StatusIndicator } from "@ded-wds-vue/ui";`, `const hintPrompt = ${dataSourceStringPrompt};`, `const hintError = ${dataSourceStringError};`, `const hint = ${dataSourceString};`, `const modelValue = ref("${args.modelValue}");`, `<\/script>`, "", "<template>", "  <Textarea", `    ${args.label ? `label="${args.label}"` : ""}`, `    ${args.placeholder ? `placeholder="${args.placeholder}"` : ""}`, `    ${args.limit !== undefined ? `:limit="${args.limit}"` : ""}`, `    :hint="hintPrompt"`, `    ${args.isDisabled !== undefined ? `:isDisabled="${args.isDisabled}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, `    v-model="modelValue"`, "  ></Textarea>", "  <Textarea", `    ${args.label ? `label="${args.label}"` : ""}`, `    ${args.placeholder ? `placeholder="${args.placeholder}"` : ""}`, `    ${args.limit !== undefined ? `:limit="${args.limit}"` : ""}`, `    :hint="hintError"`, `    ${args.isDisabled !== undefined ? `:isDisabled="${args.isDisabled}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, `    v-model="modelValue"`, "  ></Textarea>", "  <Textarea", `    ${args.label ? `label="${args.label}"` : ""}`, `    ${args.placeholder ? `placeholder="${args.placeholder}"` : ""}`, `    ${args.limit !== undefined ? `:limit="${args.limit}"` : ""}`, `    :hint="hint"`, `    v-model="modelValue"`, "  ></Textarea>", "</template>"].filter(Boolean).join("\\n").trim();\n        }\n      }\n    }\n  }\n}',
      ...(_i = (_h = TextareaStatus.parameters) == null ? void 0 : _h.docs) == null ? void 0 : _i.source
    }
  }
};
const __namedExportsOrder = ["TextareaDefault", "TextareaLimit", "TextareaStatus"];
export {
  TextareaDefault,
  TextareaLimit,
  TextareaStatus,
  __namedExportsOrder,
  Textarea_stories as default
};

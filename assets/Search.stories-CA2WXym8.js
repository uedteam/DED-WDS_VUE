var _a, _b, _c, _d, _e, _f;
import { p as mergeModels, u as useModel, c as createElementBlock, b as createVNode, e as withCtx, o as openBlock, f as createTextVNode } from "./vue.esm-bundler-K7CzQrxl.js";
import { _ as _sfc_main$2 } from "./Button-8IAwqsIt.js";
import { _ as _sfc_main$1 } from "./Input-CBUjHHWU.js";
import "./Icon-B6pI5HKs.js";
import "./v4-CjlX8hrF.js";
const _hoisted_1 = { class: "ded-search" };
const _sfc_main = {
  __name: "Search",
  props: /* @__PURE__ */ mergeModels({
    // themeColor: {
    //     type: String,
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
    size: {
      type: String,
      default: "medium",
      validator: (value) => ["small", "medium", "large"].includes(value)
    },
    placeholder: {
      type: String,
      default: "Type something"
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
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createVNode(_sfc_main$1, {
          modelValue: modelValue.value,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => modelValue.value = $event),
          type: "text",
          placeholder: props.placeholder,
          prefix: "SvgSearch",
          size: props.size,
          "is-disabled": props.isDisabled,
          "class-name": "ded-search-input"
        }, null, 8, ["modelValue", "placeholder", "size", "is-disabled"]),
        createVNode(_sfc_main$2, {
          variant: "filled",
          size: props.size,
          width: "fit",
          "border-width": "1px",
          radius: "4px",
          "is-disabled": props.isDisabled
        }, {
          default: withCtx(() => _cache[1] || (_cache[1] = [
            createTextVNode(" Search ")
          ])),
          _: 1
        }, 8, ["size", "is-disabled"])
      ]);
    };
  }
};
_sfc_main.__docgenInfo = { "exportName": "default", "displayName": "Search", "description": "", "tags": {}, "props": [{ "name": "size", "type": { "name": "string" }, "defaultValue": { "func": false, "value": '"medium"' }, "values": ["small", "medium", "large"] }, { "name": "placeholder", "type": { "name": "string" }, "defaultValue": { "func": false, "value": '"Type something"' } }, { "name": "isDisabled", "type": { "name": "boolean" }, "defaultValue": { "func": false, "value": "false" } }, { "name": "className", "type": { "name": "string" }, "defaultValue": { "func": false, "value": '""' } }], "sourceFiles": ["/Users/auouser/Desktop/Work_Space/DED-WDS_VUE/libs/src/ui/element/Search/Search.vue"] };
const Search_stories = {
  title: "Component/Search",
  component: _sfc_main,
  tags: ["autodocs"],
  argTypes: {
    size: {
      description: "尺寸",
      control: {
        type: "select"
      },
      options: ["small", "medium", "large"],
      table: {
        type: {
          summary: "small | medium | large "
        }
      }
    },
    placeholder: {
      description: "輸入提示",
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
      description: "輸入值",
      control: {
        type: "text"
      },
      table: {
        type: {
          summary: "string"
        },
        category: "v-model"
      }
    }
  },
  parameters: {
    // 自動文件
    docs: {
      title: "Search",
      description: {
        component: "Search 組件的呈現及說明。"
      }
    }
  }
};
const SearchDefault = {
  name: "預設項目",
  args: {
    // themeColor: 'primary',
    size: "medium",
    placeholder: "Type something",
    isDisabled: false,
    className: "",
    modelValue: ""
  },
  render: (args) => ({
    components: {
      Search: _sfc_main
    },
    setup() {
      return {
        args
      };
    },
    template: `
      <Search
        :size="args.size"
        :placeholder="args.placeholder"
        :isDisabled="args.isDisabled"
        :className="args.className"
        v-model="args.modelValue"
      ></Search>
        `
  }),
  // 控制 controls 中能控制的參數
  parameters: {
    controls: {
      // include: ['variant', 'content', 'themeColor', 'isDisabled', 'prefix'],
    },
    docs: {
      source: {
        transform: (src, storyContext) => {
          const {
            args
          } = storyContext;
          return [`<script setup>`, 'import { ref } from "vue";', `import { Search } from "@ded-wds-vue/ui";`, 'const modelValue = ref("");', `<\/script>`, "", "<template>", `  <Search`, `    ${args.size ? `size="${args.size}"` : ""}`, `    ${args.placeholder ? `placeholder="${args.placeholder}"` : ""}`, `    ${args.isDisabled !== void 0 ? `:isDisabled="${args.isDisabled}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, `    v-model="modelValue"`, `  ></Search>`, "</template>"].filter(Boolean).join("\n").trim();
        }
      }
    }
  }
};
const SearchSize = {
  name: "元件尺寸",
  args: {
    // themeColor: 'primary',
    size: "",
    placeholder: "Type something",
    isDisabled: false,
    className: "",
    modelValue: ""
  },
  render: (args) => ({
    components: {
      Search: _sfc_main
    },
    setup() {
      return {
        args
      };
    },
    template: `
      <div style="display: flex; flex-direction: column; gap: 10px">
        <Search
          :placeholder="args.placeholder"
          size="large"
          :isDisabled="args.isDisabled"
          :className="args.className"
          v-model="args.modelValue"
        ></Search>

        <Search
          :placeholder="args.placeholder"
          size="medium"
          :isDisabled="args.isDisabled"
          :className="args.className"
          v-model="args.modelValue"
        ></Search>

        <Search
          :placeholder="args.placeholder"
          size="small"
          :isDisabled="args.isDisabled"
          :className="args.className"
          v-model="args.modelValue"
        ></Search>
      </div>`
  }),
  // 控制 controls 中能控制的參數
  parameters: {
    controls: {
      exclude: ["size"]
    },
    docs: {
      source: {
        transform: (src, storyContext) => {
          const {
            args
          } = storyContext;
          return [`<script setup>`, 'import { ref } from "vue";', `import { Search } from "@ded-wds-vue/ui";`, 'const modelValue = ref("");', `<\/script>`, "", "<template>", `  <Search`, `    size="large"`, `    ${args.placeholder ? `placeholder="${args.placeholder}"` : ""}`, `    ${args.isDisabled !== void 0 ? `:isDisabled="${args.isDisabled}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, `    v-model="modelValue"`, `  ></Search>`, `  <Search`, `    size="medium"`, `    ${args.placeholder ? `placeholder="${args.placeholder}"` : ""}`, `    ${args.isDisabled !== void 0 ? `:isDisabled="${args.isDisabled}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, `    v-model="modelValue"`, `  ></Search>`, `  <Search`, `    size="small"`, `    ${args.placeholder ? `placeholder="${args.placeholder}"` : ""}`, `    ${args.isDisabled !== void 0 ? `:isDisabled="${args.isDisabled}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, `    v-model="modelValue"`, `  ></Search>`, "</template>"].filter(Boolean).join("\n").trim();
        }
      }
    }
  }
};
SearchDefault.parameters = {
  ...SearchDefault.parameters,
  docs: {
    ...(_a = SearchDefault.parameters) == null ? void 0 : _a.docs,
    source: {
      originalSource: '{\n  name: "預設項目",\n  args: {\n    // themeColor: \'primary\',\n    size: "medium",\n    placeholder: "Type something",\n    isDisabled: false,\n    className: "",\n    modelValue: ""\n  },\n  render: args => ({\n    components: {\n      Search\n    },\n    setup() {\n      return {\n        args\n      };\n    },\n    template: `\n      <Search\n        :size="args.size"\n        :placeholder="args.placeholder"\n        :isDisabled="args.isDisabled"\n        :className="args.className"\n        v-model="args.modelValue"\n      ></Search>\n        `\n  }),\n  // 控制 controls 中能控制的參數\n  parameters: {\n    controls: {\n      // include: [\'variant\', \'content\', \'themeColor\', \'isDisabled\', \'prefix\'],\n    },\n    docs: {\n      source: {\n        transform: (src, storyContext) => {\n          const {\n            args\n          } = storyContext;\n          return [`<script setup>`, "import { ref } from \\"vue\\";", `import { Search } from "@ded-wds-vue/ui";`, "const modelValue = ref(\\"\\");", `<\/script>`, "", "<template>", `  <Search`, `    ${args.size ? `size="${args.size}"` : ""}`, `    ${args.placeholder ? `placeholder="${args.placeholder}"` : ""}`, `    ${args.isDisabled !== undefined ? `:isDisabled="${args.isDisabled}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, `    v-model="modelValue"`, `  ></Search>`, "</template>"].filter(Boolean).join("\\n").trim();\n        }\n      }\n    }\n  }\n}',
      ...(_c = (_b = SearchDefault.parameters) == null ? void 0 : _b.docs) == null ? void 0 : _c.source
    }
  }
};
SearchSize.parameters = {
  ...SearchSize.parameters,
  docs: {
    ...(_d = SearchSize.parameters) == null ? void 0 : _d.docs,
    source: {
      originalSource: '{\n  name: "元件尺寸",\n  args: {\n    // themeColor: \'primary\',\n    size: "",\n    placeholder: "Type something",\n    isDisabled: false,\n    className: "",\n    modelValue: ""\n  },\n  render: args => ({\n    components: {\n      Search\n    },\n    setup() {\n      return {\n        args\n      };\n    },\n    template: `\n      <div style="display: flex; flex-direction: column; gap: 10px">\n        <Search\n          :placeholder="args.placeholder"\n          size="large"\n          :isDisabled="args.isDisabled"\n          :className="args.className"\n          v-model="args.modelValue"\n        ></Search>\n\n        <Search\n          :placeholder="args.placeholder"\n          size="medium"\n          :isDisabled="args.isDisabled"\n          :className="args.className"\n          v-model="args.modelValue"\n        ></Search>\n\n        <Search\n          :placeholder="args.placeholder"\n          size="small"\n          :isDisabled="args.isDisabled"\n          :className="args.className"\n          v-model="args.modelValue"\n        ></Search>\n      </div>`\n  }),\n  // 控制 controls 中能控制的參數\n  parameters: {\n    controls: {\n      exclude: ["size"]\n    },\n    docs: {\n      source: {\n        transform: (src, storyContext) => {\n          const {\n            args\n          } = storyContext;\n          return [`<script setup>`, "import { ref } from \\"vue\\";", `import { Search } from "@ded-wds-vue/ui";`, "const modelValue = ref(\\"\\");", `<\/script>`, "", "<template>", `  <Search`, `    size="large"`, `    ${args.placeholder ? `placeholder="${args.placeholder}"` : ""}`, `    ${args.isDisabled !== undefined ? `:isDisabled="${args.isDisabled}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, `    v-model="modelValue"`, `  ></Search>`, `  <Search`, `    size="medium"`, `    ${args.placeholder ? `placeholder="${args.placeholder}"` : ""}`, `    ${args.isDisabled !== undefined ? `:isDisabled="${args.isDisabled}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, `    v-model="modelValue"`, `  ></Search>`, `  <Search`, `    size="small"`, `    ${args.placeholder ? `placeholder="${args.placeholder}"` : ""}`, `    ${args.isDisabled !== undefined ? `:isDisabled="${args.isDisabled}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, `    v-model="modelValue"`, `  ></Search>`, "</template>"].filter(Boolean).join("\\n").trim();\n        }\n      }\n    }\n  }\n}',
      ...(_f = (_e = SearchSize.parameters) == null ? void 0 : _e.docs) == null ? void 0 : _f.source
    }
  }
};
const __namedExportsOrder = ["SearchDefault", "SearchSize"];
export {
  SearchDefault,
  SearchSize,
  __namedExportsOrder,
  Search_stories as default
};

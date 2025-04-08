var _a, _b, _c;
import { p as mergeModels, u as useModel, v as ref, c as createElementBlock, x as withDirectives, a as createBaseVNode, J as vModelSelect, t as toDisplayString, F as Fragment, q as renderList, n as normalizeClass, b as createVNode, o as openBlock } from "./vue.esm-bundler-K7CzQrxl.js";
import { _ as _sfc_main$1 } from "./Icon-B6pI5HKs.js";
const _hoisted_1 = ["disabled"];
const _hoisted_2 = {
  value: "",
  disabled: "",
  selected: ""
};
const _hoisted_3 = ["value"];
const _sfc_main = {
  __name: "Select",
  props: /* @__PURE__ */ mergeModels({
    dataSource: {
      type: Array,
      required: true
    },
    placeholder: {
      type: String,
      default: "Select"
    },
    suffix: {
      type: String
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
    const selectedValue = ref(modelValue);
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(["ded-select-container", { [props.className]: !!props.className }])
      }, [
        withDirectives(createBaseVNode("select", {
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => selectedValue.value = $event),
          class: normalizeClass(["ded-select", { "ded-select-disabled": props.isDisabled }]),
          disabled: props.isDisabled
        }, [
          createBaseVNode("option", _hoisted_2, toDisplayString(props.placeholder), 1),
          (openBlock(true), createElementBlock(Fragment, null, renderList(props.dataSource, (item) => {
            return openBlock(), createElementBlock("option", {
              key: item.value,
              value: item.value
            }, toDisplayString(item.label), 9, _hoisted_3);
          }), 128))
        ], 10, _hoisted_1), [
          [vModelSelect, selectedValue.value]
        ]),
        createBaseVNode("div", {
          class: normalizeClass(["ded-select-icon", { "ded-select-icon-disabled": props.isDisabled }])
        }, [
          createVNode(_sfc_main$1, {
            name: props.suffix,
            size: "18"
          }, null, 8, ["name"])
        ], 2)
      ], 2);
    };
  }
};
_sfc_main.__docgenInfo = { "exportName": "default", "displayName": "Select", "description": "", "tags": {}, "props": [{ "name": "dataSource", "type": { "name": "array" }, "required": true }, { "name": "placeholder", "type": { "name": "string" }, "defaultValue": { "func": false, "value": '"Select"' } }, { "name": "suffix", "type": { "name": "string" } }, { "name": "isDisabled", "type": { "name": "boolean" }, "defaultValue": { "func": false, "value": "false" } }, { "name": "className", "type": { "name": "string" }, "defaultValue": { "func": false, "value": '""' } }], "sourceFiles": ["/Users/auouser/Desktop/Work_Space/DED-WDS_VUE/libs/src/ui/element/Select/Select.vue"] };
function formatDataSource(dataSource) {
  return `    ${dataSource.map((item) => `{
        label: "${item.label}",
        value: "${item.value}",
    }`).join(",\n    ")}`;
}
const Select_stories = {
  title: "Component/Select",
  component: _sfc_main,
  tags: ["autodocs"],
  argTypes: {
    dataSource: {
      description: "選項",
      control: {
        type: "object"
      },
      table: {
        type: {
          summary: "{ label: string; value: string | number; }[]"
        }
      }
    },
    placeholder: {
      description: "輸入提示",
      control: {
        type: "text"
      }
    },
    suffix: {
      description: "後綴圖示",
      control: {
        type: "select",
        labels: {
          "": "none",
          "SvgAccount": "SvgAccount",
          "SvgSearch": "SvgSearch",
          "SvgVisibility": "SvgVisibility",
          "SvgVisibilityOff": "SvgVisibilityOff"
        }
      },
      options: ["", "SvgAccount", "SvgSearch", "SvgVisibility", "SvgVisibilityOff"]
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
      description: "值",
      control: {
        type: "select",
        labels: {
          "": "none",
          "1": "1",
          "2": "2",
          "3": "3"
        }
      },
      options: ["", "1", "2", "3"],
      table: {
        type: {
          summary: "string | number"
        },
        category: "v-model"
      }
    }
  },
  parameters: {
    // 自動文件
    docs: {
      title: "Select",
      description: {
        component: "選擇組件的呈現及說明。"
      }
    }
  }
};
const SelectDefault = {
  name: "預設項目",
  args: {
    dataSource: [{
      label: "Option 1",
      value: "1"
    }, {
      label: "Option 2",
      value: "2"
    }, {
      label: "Option 3",
      value: "3"
    }],
    placeholder: "Select",
    suffix: "SvgArrowDropDown",
    isDisabled: false,
    className: "",
    modelValue: ""
  },
  render: (args) => ({
    components: {
      Select: _sfc_main
    },
    setup() {
      return {
        args
      };
    },
    template: `
      <Select
        :dataSource="args.dataSource"
        :placeholder="args.placeholder"
        :suffix="args.suffix"
        :isDisabled="args.isDisabled"
        :className="args.className"
        v-model="args.modelValue"
      ></Select>`
  }),
  // 控制 controls 中能控制的參數
  parameters: {
    controls: {
      // include: ['objectFit', 'src', 'value', 'name' ],
    },
    docs: {
      source: {
        transform: (src, storyContext) => {
          const {
            args
          } = storyContext;
          const dataSourceString = formatDataSource(args.dataSource);
          return [`<script setup>`, `import { ref } from "vue";`, `import { Select } from "@ded-wds-vue/ui";`, `const dataSource = [`, `${dataSourceString}`, `];`, 'const modelValue = ref("");', `<\/script>`, "", "<template>", `  <Select`, `    :dataSource="dataSource"`, `    ${args.placeholder ? `placeholder="${args.placeholder}"` : ""}`, `    ${args.suffix ? `suffix="${args.suffix}"` : ""}`, `    ${args.isDisabled !== void 0 ? `:isDisabled="${args.isDisabled}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, `    v-model="modelValue"`, `  ></Select>`, "</template>"].filter(Boolean).join("\n").trim();
        }
      }
    }
  }
};
SelectDefault.parameters = {
  ...SelectDefault.parameters,
  docs: {
    ...(_a = SelectDefault.parameters) == null ? void 0 : _a.docs,
    source: {
      originalSource: '{\n  name: "預設項目",\n  args: {\n    dataSource: [{\n      label: "Option 1",\n      value: "1"\n    }, {\n      label: "Option 2",\n      value: "2"\n    }, {\n      label: "Option 3",\n      value: "3"\n    }],\n    placeholder: "Select",\n    suffix: "SvgArrowDropDown",\n    isDisabled: false,\n    className: "",\n    modelValue: ""\n  },\n  render: args => ({\n    components: {\n      Select\n    },\n    setup() {\n      return {\n        args\n      };\n    },\n    template: `\n      <Select\n        :dataSource="args.dataSource"\n        :placeholder="args.placeholder"\n        :suffix="args.suffix"\n        :isDisabled="args.isDisabled"\n        :className="args.className"\n        v-model="args.modelValue"\n      ></Select>`\n  }),\n  // 控制 controls 中能控制的參數\n  parameters: {\n    controls: {\n      // include: [\'objectFit\', \'src\', \'value\', \'name\' ],\n    },\n    docs: {\n      source: {\n        transform: (src, storyContext) => {\n          const {\n            args\n          } = storyContext;\n          const dataSourceString = formatDataSource(args.dataSource);\n          return [`<script setup>`, `import { ref } from "vue";`, `import { Select } from "@ded-wds-vue/ui";`, `const dataSource = [`, `${dataSourceString}`, `];`, "const modelValue = ref(\\"\\");", `<\/script>`, "", "<template>", `  <Select`, `    :dataSource="dataSource"`, `    ${args.placeholder ? `placeholder="${args.placeholder}"` : ""}`, `    ${args.suffix ? `suffix="${args.suffix}"` : ""}`, `    ${args.isDisabled !== undefined ? `:isDisabled="${args.isDisabled}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, `    v-model="modelValue"`, `  ></Select>`, "</template>"].filter(Boolean).join("\\n").trim();\n        }\n      }\n    }\n  }\n}',
      ...(_c = (_b = SelectDefault.parameters) == null ? void 0 : _b.docs) == null ? void 0 : _c.source
    }
  }
};
const __namedExportsOrder = ["SelectDefault"];
export {
  SelectDefault,
  __namedExportsOrder,
  Select_stories as default
};

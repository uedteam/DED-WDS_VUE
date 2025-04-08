var _a, _b, _c;
import { p as mergeModels, u as useModel, v as ref, A as onMounted, D as nextTick, B as onUnmounted, c as createElementBlock, d as createCommentVNode, a as createBaseVNode, j as createBlock, t as toDisplayString, b as createVNode, k as normalizeStyle, T as Teleport, F as Fragment, o as openBlock } from "./vue.esm-bundler-K7CzQrxl.js";
import { _ as _sfc_main$1 } from "./Input-CBUjHHWU.js";
import { _ as _sfc_main$2 } from "./List-C992H4xg.js";
import { g as getTargetPosition } from "./positionUtils-BrCLcWsx.js";
import "./Icon-B6pI5HKs.js";
import "./v4-CjlX8hrF.js";
const _hoisted_1 = {
  key: 0,
  class: "ded-input-label"
};
const gap = 8;
const placement = "bottom";
const _sfc_main = {
  __name: "Dropdown",
  props: /* @__PURE__ */ mergeModels({
    dataSource: {
      type: Array,
      required: true
    },
    label: {
      type: String,
      default: ""
    },
    placeholder: {
      type: String,
      default: "Placeholder"
    },
    size: {
      type: String,
      validator: (value) => ["small", "medium", "large"].includes(value),
      default: "medium"
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
    const isDropdownVisible = ref(false);
    const dropdown = ref(null);
    const dropdownPosition = ref({});
    function handleSelect(value) {
      modelValue.value = value;
      isDropdownVisible.value = false;
    }
    function handleClickOutside(event) {
      if (dropdown.value && !dropdown.value.contains(event.target)) {
        isDropdownVisible.value = false;
      }
    }
    function updateDropdownPosition() {
      if (dropdown.value) {
        const triggerRect = dropdown.value.getBoundingClientRect();
        dropdownPosition.value = getTargetPosition(
          {
            top: triggerRect.top + window.scrollY,
            // 考慮垂直滾動偏移
            left: triggerRect.left + window.scrollX
            // 考慮水平滾動偏移
          },
          { width: triggerRect.width, height: triggerRect.height },
          placement,
          `${gap}px`,
          true
        );
      }
    }
    onMounted(() => {
      document.addEventListener("click", handleClickOutside);
      window.addEventListener("resize", updateDropdownPosition);
      window.addEventListener("scroll", updateDropdownPosition);
      nextTick(() => updateDropdownPosition());
    });
    onUnmounted(() => {
      document.removeEventListener("click", handleClickOutside);
      window.removeEventListener("resize", updateDropdownPosition);
      window.removeEventListener("scroll", updateDropdownPosition);
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        props.label ? (openBlock(), createElementBlock("label", _hoisted_1, toDisplayString(props.label), 1)) : createCommentVNode("", true),
        createBaseVNode("div", {
          ref_key: "dropdown",
          ref: dropdown,
          class: "ded-dropdown",
          role: "listbox",
          tabindex: "0",
          onClick: _cache[1] || (_cache[1] = () => {
            isDropdownVisible.value = !isDropdownVisible.value;
            updateDropdownPosition();
          })
        }, [
          createVNode(_sfc_main$1, {
            modelValue: modelValue.value,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => modelValue.value = $event),
            type: "text",
            size: props.size,
            placeholder: props.placeholder,
            "is-open": isDropdownVisible.value,
            "class-name": "ded-dropdown-input"
          }, null, 8, ["modelValue", "size", "placeholder", "is-open"])
        ], 512),
        (openBlock(), createBlock(Teleport, { to: "body" }, [
          isDropdownVisible.value ? (openBlock(), createElementBlock("div", {
            key: 0,
            class: "ded-tooltip",
            style: normalizeStyle(dropdownPosition.value)
          }, [
            createVNode(_sfc_main$2, {
              "data-source": props.dataSource,
              "has-outline": true,
              onOnSelect: handleSelect
            }, null, 8, ["data-source"])
          ], 4)) : createCommentVNode("", true)
        ]))
      ], 64);
    };
  }
};
_sfc_main.__docgenInfo = { "exportName": "default", "displayName": "Dropdown", "description": "", "tags": {}, "props": [{ "name": "dataSource", "type": { "name": "array" }, "required": true }, { "name": "label", "type": { "name": "string" }, "defaultValue": { "func": false, "value": '""' } }, { "name": "placeholder", "type": { "name": "string" }, "defaultValue": { "func": false, "value": '"Placeholder"' } }, { "name": "size", "type": { "name": "string" }, "defaultValue": { "func": false, "value": '"medium"' }, "values": ["small", "medium", "large"] }, { "name": "className", "type": { "name": "string" }, "defaultValue": { "func": false, "value": '""' } }], "sourceFiles": ["/Users/auouser/Desktop/Work_Space/DED-WDS_VUE/libs/src/ui/element/Dropdown/Dropdown.vue"] };
function formatDataSource(dataSource) {
  return `    ${dataSource.map((item) => `{
        label: "${item.label}",
        value: "${item.value}",
    }`).join(",\n    ")}`;
}
const Dropdown_stories = {
  title: "Component/Dropdown",
  component: _sfc_main,
  tags: ["autodocs"],
  argTypes: {
    dataSource: {
      description: "資料來源",
      control: {
        type: "object"
      },
      table: {
        type: {
          summary: "{ label: string; value: string; }[]"
        }
      }
    },
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
    size: {
      description: "輸入框尺寸",
      control: {
        type: "select"
      },
      options: ["small", "medium", "large"],
      table: {
        type: {
          summary: "small | medium | large"
        }
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
        type: "select",
        labels: {
          "": "none",
          "option1": "option1",
          "option2": "option2",
          "option3": "option3"
        }
      },
      options: ["", "option1", "option2", "option3"],
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
      title: "Dropdown",
      description: {
        component: "Dropdown 組件的呈現及說明。"
      }
    }
  }
};
const DropdownDefault = {
  name: "預設項目",
  args: {
    dataSource: [{
      label: "Option1",
      value: "option1"
    }, {
      label: "Option2",
      value: "option2"
    }, {
      label: "Option3",
      value: "option3"
    }],
    label: "Label",
    placeholder: "Placeholder",
    size: "medium",
    className: "",
    modelValue: ""
  },
  render: (args) => ({
    components: {
      Dropdown: _sfc_main
    },
    setup() {
      return {
        args
      };
    },
    template: `
      <Dropdown 
        :dataSource="args.dataSource"
        :label="args.label"
        :placeholder="args.placeholder"
        :size="args.size"
        :className="args.className"
        v-model="args.modelValue"
      >
      </Dropdown>
      `
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
          return [`<script setup>`, 'import { ref } from "vue";', `import { Dropdown } from "@ded-wds-vue/ui";`, `const dataSource = [`, `${dataSourceString}`, `];`, 'const modelValue = ref("");', `<\/script>`, "", "<template>", "  <Dropdown", `    :dataSource="dataSource"`, `    ${args.label ? `label="${args.label}"` : ""}`, `    ${args.placeholder ? `placeholder="${args.placeholder}"` : ""}`, `    ${args.size ? `size="${args.size}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, `    v-model="modelValue"`, "  ></Dropdown>", "</template>"].filter(Boolean).join("\n").trim();
        }
      }
    }
  }
};
DropdownDefault.parameters = {
  ...DropdownDefault.parameters,
  docs: {
    ...(_a = DropdownDefault.parameters) == null ? void 0 : _a.docs,
    source: {
      originalSource: '{\n  name: "預設項目",\n  args: {\n    dataSource: [{\n      label: "Option1",\n      value: "option1"\n    }, {\n      label: "Option2",\n      value: "option2"\n    }, {\n      label: "Option3",\n      value: "option3"\n    }],\n    label: "Label",\n    placeholder: "Placeholder",\n    size: "medium",\n    className: "",\n    modelValue: ""\n  },\n  render: args => ({\n    components: {\n      Dropdown\n    },\n    setup() {\n      return {\n        args\n      };\n    },\n    template: `\n      <Dropdown \n        :dataSource="args.dataSource"\n        :label="args.label"\n        :placeholder="args.placeholder"\n        :size="args.size"\n        :className="args.className"\n        v-model="args.modelValue"\n      >\n      </Dropdown>\n      `\n  }),\n  // 控制 controls 中能控制的參數\n  parameters: {\n    controls: {\n      // include: [\'objectFit\', \'src\', \'value\', \'name\' ],\n    },\n    docs: {\n      source: {\n        transform: (src, storyContext) => {\n          const {\n            args\n          } = storyContext;\n          const dataSourceString = formatDataSource(args.dataSource);\n          return [`<script setup>`, "import { ref } from \\"vue\\";", `import { Dropdown } from "@ded-wds-vue/ui";`, `const dataSource = [`, `${dataSourceString}`, `];`, "const modelValue = ref(\\"\\");", `<\/script>`, "", "<template>", "  <Dropdown", `    :dataSource="dataSource"`, `    ${args.label ? `label="${args.label}"` : ""}`, `    ${args.placeholder ? `placeholder="${args.placeholder}"` : ""}`, `    ${args.size ? `size="${args.size}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, `    v-model="modelValue"`, "  ></Dropdown>", "</template>"].filter(Boolean).join("\\n").trim();\n        }\n      }\n    }\n  }\n}',
      ...(_c = (_b = DropdownDefault.parameters) == null ? void 0 : _b.docs) == null ? void 0 : _c.source
    }
  }
};
const __namedExportsOrder = ["DropdownDefault"];
export {
  DropdownDefault,
  __namedExportsOrder,
  Dropdown_stories as default
};

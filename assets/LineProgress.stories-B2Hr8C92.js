var _a, _b, _c;
import { g as computed, c as createElementBlock, d as createCommentVNode, a as createBaseVNode, t as toDisplayString, k as normalizeStyle, n as normalizeClass, o as openBlock } from "./vue.esm-bundler-K7CzQrxl.js";
const _hoisted_1 = { class: "ded-progress-line-container" };
const _hoisted_2 = {
  key: 0,
  class: "ded-progress-label"
};
const _hoisted_3 = { class: "ded-progress-line-label ded-progress-percent-text" };
const _sfc_main = {
  __name: "LineProgress",
  props: {
    label: {
      type: String,
      default: ""
    },
    percent: {
      // 進度
      type: Number,
      default: 0
    },
    strokeWidth: {
      // 線條寬度
      type: Number,
      default: 10
    },
    className: {
      type: String,
      default: ""
    }
  },
  setup(__props) {
    const props = __props;
    const normalizedProgress = computed(() => Math.min(Math.max(props.percent, 0), 100));
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        props.label ? (openBlock(), createElementBlock("div", _hoisted_2, toDisplayString(props.label), 1)) : createCommentVNode("", true),
        createBaseVNode("div", {
          class: normalizeClass(["ded-progress-line", { [props.className]: !!props.className }])
        }, [
          createBaseVNode("div", {
            class: "ded-progress-line-track",
            style: normalizeStyle({ height: `${props.strokeWidth}px` })
          }, [
            createBaseVNode("div", {
              class: "ded-progress-line-percent-form",
              style: normalizeStyle({ width: `${normalizedProgress.value}%` })
            }, null, 4)
          ], 4),
          createBaseVNode("div", _hoisted_3, toDisplayString(`${normalizedProgress.value}%`), 1)
        ], 2)
      ]);
    };
  }
};
_sfc_main.__docgenInfo = { "exportName": "default", "displayName": "LineProgress", "description": "", "tags": {}, "props": [{ "name": "label", "type": { "name": "string" }, "defaultValue": { "func": false, "value": '""' } }, { "name": "percent", "type": { "name": "number" }, "defaultValue": { "func": false, "value": "0" } }, { "name": "strokeWidth", "type": { "name": "number" }, "defaultValue": { "func": false, "value": "10" } }, { "name": "className", "type": { "name": "string" }, "defaultValue": { "func": false, "value": '""' } }], "sourceFiles": ["/Users/auouser/Desktop/Work_Space/DED-WDS_VUE/libs/src/ui/element/Progress/LineProgress/LineProgress.vue"] };
const LineProgress_stories = {
  title: "Component/Progress-Line",
  component: _sfc_main,
  tags: ["autodocs"],
  argTypes: {
    label: {
      description: "進度指示標籤",
      control: {
        type: "text"
      }
    },
    percent: {
      description: "進度",
      control: {
        type: "range",
        min: 0,
        max: 100,
        step: 1
      }
    },
    strokeWidth: {
      description: "線條寬度",
      control: {
        type: "range",
        min: 1,
        max: 20,
        step: 1
      }
    },
    className: {
      description: "客製化樣式",
      control: {
        type: "text"
      }
    }
  },
  parameters: {
    // 自動文件
    docs: {
      title: "LineProgress",
      description: {
        component: "長條進度指示組件的呈現及說明。"
      }
    }
  }
};
const DefaultLineProgress = {
  name: "預設項目",
  args: {
    // themeColor: "primary",
    label: "Label",
    percent: 65,
    strokeWidth: 10,
    className: ""
  },
  render: (args) => ({
    components: {
      LineProgress: _sfc_main
    },
    setup() {
      return {
        args
      };
    },
    template: `
      <LineProgress
        :label="args.label"
        :percent="args.percent"
        :strokeWidth="args.strokeWidth"
        :className="args.className"
      ></LineProgress>`
  }),
  // 控制 controls 中能控制的參數
  parameters: {
    controls: {
      // include: ['themeColor', 'label', 'value', 'name' ],
    },
    docs: {
      source: {
        transform: (src, storyContext) => {
          const {
            args
          } = storyContext;
          return [`<script setup>`, `import { LineProgress } from "@ded-wds-vue/ui";`, `<\/script>`, "", "<template>", `  <LineProgress`, `    ${args.label ? `label="${args.label}"` : ""}`, `    ${args.percent !== void 0 ? `:percent="${args.percent}"` : ""}`, `    ${args.strokeWidth !== void 0 ? `:strokeWidth="${args.strokeWidth}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, `  ></LineProgress>`, "</template>"].filter(Boolean).join("\n").trim();
        }
      }
    }
  }
};
DefaultLineProgress.parameters = {
  ...DefaultLineProgress.parameters,
  docs: {
    ...(_a = DefaultLineProgress.parameters) == null ? void 0 : _a.docs,
    source: {
      originalSource: '{\n  name: "預設項目",\n  args: {\n    // themeColor: "primary",\n    label: "Label",\n    percent: 65,\n    strokeWidth: 10,\n    className: ""\n  },\n  render: args => ({\n    components: {\n      LineProgress\n    },\n    setup() {\n      // Create a ref for modelValue to be used with v-model\n      return {\n        args\n      };\n    },\n    template: `\n      <LineProgress\n        :label="args.label"\n        :percent="args.percent"\n        :strokeWidth="args.strokeWidth"\n        :className="args.className"\n      ></LineProgress>`\n  }),\n  // 控制 controls 中能控制的參數\n  parameters: {\n    controls: {\n      // include: [\'themeColor\', \'label\', \'value\', \'name\' ],\n    },\n    docs: {\n      source: {\n        transform: (src, storyContext) => {\n          const {\n            args\n          } = storyContext;\n          return [`<script setup>`, `import { LineProgress } from "@ded-wds-vue/ui";`, `<\/script>`, "", "<template>", `  <LineProgress`, `    ${args.label ? `label="${args.label}"` : ""}`, `    ${args.percent !== undefined ? `:percent="${args.percent}"` : ""}`, `    ${args.strokeWidth !== undefined ? `:strokeWidth="${args.strokeWidth}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, `  ></LineProgress>`, "</template>"].filter(Boolean).join("\\n").trim();\n        }\n      }\n    }\n  }\n}',
      ...(_c = (_b = DefaultLineProgress.parameters) == null ? void 0 : _b.docs) == null ? void 0 : _c.source
    }
  }
};
const __namedExportsOrder = ["DefaultLineProgress"];
export {
  DefaultLineProgress,
  __namedExportsOrder,
  LineProgress_stories as default
};

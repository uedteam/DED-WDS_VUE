var _a, _b, _c, _d, _e, _f;
import { v as ref, A as onMounted, w as watch, g as computed, c as createElementBlock, d as createCommentVNode, a as createBaseVNode, t as toDisplayString, n as normalizeClass, o as openBlock } from "./vue.esm-bundler-K7CzQrxl.js";
const _hoisted_1 = ["width", "height"];
const _hoisted_2 = ["stroke-width", "r", "cx", "cy"];
const _hoisted_3 = ["stroke-width", "stroke-dasharray", "stroke-dashoffset", "r", "cx", "cy", "transform"];
const _hoisted_4 = ["y"];
const _hoisted_5 = {
  key: 0,
  class: "ded-progress-circle-label"
};
const _hoisted_6 = { class: "ded-progress-label" };
const _hoisted_7 = { class: "ded-progress-percent" };
const _sfc_main = {
  __name: "CircleProgress",
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
    size: {
      // 直徑
      type: Number,
      default: 100
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
    const textRef = ref(null);
    const contentLength = ref(0);
    onMounted(() => {
      if (textRef.value) {
        contentLength.value = textRef.value.getComputedTextLength();
      }
    });
    watch(() => props.label, () => {
      if (textRef.value) {
        contentLength.value = textRef.value.getComputedTextLength();
      }
    });
    const radius = computed(() => (props.size - props.strokeWidth) / 2);
    const circumference = computed(() => 2 * Math.PI * radius.value);
    const offset = computed(() => circumference.value - props.percent / 100 * circumference.value);
    const normalizedProgress = computed(() => Math.min(Math.max(props.percent, 0), 100));
    const getLimitBorder = computed(() => {
      if (!props.label)
        return 64;
      return props.label.length * 10 + props.strokeWidth + 30;
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(["ded-progress-circle-container", { [props.className]: !!props.className }])
      }, [
        (openBlock(), createElementBlock("svg", {
          class: "ded-progress",
          width: props.size,
          height: props.size
        }, [
          createBaseVNode("circle", {
            class: "ded-progress-circle-track",
            fill: "transparent",
            "stroke-width": props.strokeWidth,
            r: radius.value,
            cx: props.size / 2,
            cy: props.size / 2
          }, null, 8, _hoisted_2),
          createBaseVNode("circle", {
            class: "ded-progress-circle-percent-form",
            fill: "transparent",
            "stroke-width": props.strokeWidth,
            "stroke-dasharray": circumference.value,
            "stroke-dashoffset": offset.value,
            "stroke-linecap": "round",
            r: radius.value,
            cx: props.size / 2,
            cy: props.size / 2,
            transform: `rotate(-90 ${props.size / 2} ${props.size / 2})`,
            style: { "transition": "stroke-dashoffset 0.35s" }
          }, null, 8, _hoisted_3),
          props.size >= getLimitBorder.value ? (openBlock(), createElementBlock("text", {
            key: 0,
            ref_key: "textRef",
            ref: textRef,
            class: "ded-progress-label",
            x: "50%",
            y: "45%",
            "text-anchor": "middle",
            "font-size": "1em"
          }, toDisplayString(props.label), 513)) : createCommentVNode("", true),
          props.size >= getLimitBorder.value ? (openBlock(), createElementBlock("text", {
            key: 1,
            class: "ded-progress-percent-text",
            x: "50%",
            y: __props.label ? "60%" : "50%",
            "text-anchor": "middle",
            dy: ".3em",
            "font-size": "1.5em"
          }, toDisplayString(`${normalizedProgress.value}%`), 9, _hoisted_4)) : createCommentVNode("", true)
        ], 8, _hoisted_1)),
        __props.size < getLimitBorder.value ? (openBlock(), createElementBlock("div", _hoisted_5, [
          createBaseVNode("span", _hoisted_6, toDisplayString(props.label), 1),
          createBaseVNode("span", _hoisted_7, toDisplayString(`${normalizedProgress.value}%`), 1)
        ])) : createCommentVNode("", true)
      ], 2);
    };
  }
};
_sfc_main.__docgenInfo = { "exportName": "default", "displayName": "CircleProgress", "description": "", "tags": {}, "props": [{ "name": "label", "type": { "name": "string" }, "defaultValue": { "func": false, "value": '""' } }, { "name": "percent", "type": { "name": "number" }, "defaultValue": { "func": false, "value": "0" } }, { "name": "size", "type": { "name": "number" }, "defaultValue": { "func": false, "value": "100" } }, { "name": "strokeWidth", "type": { "name": "number" }, "defaultValue": { "func": false, "value": "10" } }, { "name": "className", "type": { "name": "string" }, "defaultValue": { "func": false, "value": '""' } }], "sourceFiles": ["/Users/auouser/Desktop/Work_Space/DED-WDS_VUE/libs/src/ui/element/Progress/CircleProgress/CircleProgress.vue"] };
const CircleProgress_stories = {
  title: "Component/Progress-Circle",
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
      required: true,
      control: {
        type: "range",
        min: 0,
        max: 100,
        step: 1
      },
      defaultValue: 66
    },
    size: {
      description: "直徑",
      control: {
        type: "range",
        min: 24,
        max: 200,
        step: 1
      },
      defaultValue: 50
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
      title: "CircleProgress",
      description: {
        component: "圓形進度指示組件的呈現及說明。"
      }
    }
  }
};
const DefaultCircleProgress = {
  name: "預設項目",
  args: {
    // themeColor: "primary",
    label: "Label",
    percent: 65,
    size: 100,
    strokeWidth: 10,
    className: ""
  },
  render: (args) => ({
    components: {
      CircleProgress: _sfc_main
    },
    setup() {
      return {
        args
      };
    },
    template: `
      <CircleProgress
        :label="args.label"
        :percent="args.percent"
        :size="args.size"
        :strokeWidth="args.strokeWidth"
        :className="args.className"
      ></CircleProgress>`
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
          return [`<script setup>`, `import { CircleProgress } from "@ded-wds-vue/ui";`, `<\/script>`, "", "<template>", `  <CircleProgress`, `    ${args.label ? `label="${args.label}"` : ""}`, `    ${args.percent !== void 0 ? `:percent="${args.percent}"` : ""}`, `    ${args.size !== void 0 ? `:size="${args.size}"` : ""}`, `    ${args.strokeWidth !== void 0 ? `:strokeWidth="${args.strokeWidth}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, `  ></CircleProgress>`, "</template>"].filter(Boolean).join("\n").trim();
        }
      }
    }
  }
};
const CircleProgressLabelStory = {
  name: "顯示標籤",
  args: {
    label: "Label",
    percent: 65,
    // size: 100,
    strokeWidth: 10,
    className: ""
  },
  render: (args) => ({
    components: {
      CircleProgress: _sfc_main
    },
    setup() {
      return {
        args
      };
    },
    template: `
      <div style="display:flex; align-items: center; gap: 24px">
        <CircleProgress
          :label="args.label"
          :percent="args.percent"
          size="70"
          :strokeWidth="args.strokeWidth"
          :className="args.className"
        ></CircleProgress>
        <CircleProgress
          :label="args.label"
          :percent="args.percent"
          size="100"
          :strokeWidth="args.strokeWidth"
          :className="args.className"
        ></CircleProgress>
      </div>`
  }),
  // 控制 controls 中能控制的參數
  parameters: {
    controls: {
      exclude: ["size", "label"]
    },
    docs: {
      source: {
        transform: (src, storyContext) => {
          const {
            args
          } = storyContext;
          return [`<script setup>`, `import { CircleProgress } from "@ded-wds-vue/ui";`, `<\/script>`, "", "<template>", `  <CircleProgress`, `    ${args.label ? `label="${args.label}"` : ""}`, `    ${args.percent !== void 0 ? `:percent="${args.percent}"` : ""}`, `    :size="70"`, `    ${args.strokeWidth !== void 0 ? `:strokeWidth="${args.strokeWidth}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, `  ></CircleProgress>`, `  <CircleProgress`, `    ${args.label ? `label="${args.label}"` : ""}`, `    ${args.percent !== void 0 ? `:percent="${args.percent}"` : ""}`, `    :size="100"`, `    ${args.strokeWidth !== void 0 ? `:strokeWidth="${args.strokeWidth}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, `  ></CircleProgress>`, "</template>"].filter(Boolean).join("\n").trim();
        }
      }
    }
  }
};
DefaultCircleProgress.parameters = {
  ...DefaultCircleProgress.parameters,
  docs: {
    ...(_a = DefaultCircleProgress.parameters) == null ? void 0 : _a.docs,
    source: {
      originalSource: '{\n  name: "預設項目",\n  args: {\n    // themeColor: "primary",\n    label: "Label",\n    percent: 65,\n    size: 100,\n    strokeWidth: 10,\n    className: ""\n  },\n  render: args => ({\n    components: {\n      CircleProgress\n    },\n    setup() {\n      // Create a ref for modelValue to be used with v-model\n      return {\n        args\n      };\n    },\n    template: `\n      <CircleProgress\n        :label="args.label"\n        :percent="args.percent"\n        :size="args.size"\n        :strokeWidth="args.strokeWidth"\n        :className="args.className"\n      ></CircleProgress>`\n  }),\n  // 控制 controls 中能控制的參數\n  parameters: {\n    controls: {\n      // include: [\'themeColor\', \'label\', \'value\', \'name\' ],\n    },\n    docs: {\n      source: {\n        transform: (src, storyContext) => {\n          const {\n            args\n          } = storyContext;\n          return [`<script setup>`, `import { CircleProgress } from "@ded-wds-vue/ui";`, `<\/script>`, "", "<template>", `  <CircleProgress`, `    ${args.label ? `label="${args.label}"` : ""}`, `    ${args.percent !== undefined ? `:percent="${args.percent}"` : ""}`, `    ${args.size !== undefined ? `:size="${args.size}"` : ""}`, `    ${args.strokeWidth !== undefined ? `:strokeWidth="${args.strokeWidth}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, `  ></CircleProgress>`, "</template>"].filter(Boolean).join("\\n").trim();\n        }\n      }\n    }\n  }\n}',
      ...(_c = (_b = DefaultCircleProgress.parameters) == null ? void 0 : _b.docs) == null ? void 0 : _c.source
    }
  }
};
CircleProgressLabelStory.parameters = {
  ...CircleProgressLabelStory.parameters,
  docs: {
    ...(_d = CircleProgressLabelStory.parameters) == null ? void 0 : _d.docs,
    source: {
      originalSource: '{\n  name: "顯示標籤",\n  args: {\n    label: "Label",\n    percent: 65,\n    // size: 100,\n    strokeWidth: 10,\n    className: ""\n  },\n  render: args => ({\n    components: {\n      CircleProgress\n    },\n    setup() {\n      return {\n        args\n      };\n    },\n    template: `\n      <div style="display:flex; align-items: center; gap: 24px">\n        <CircleProgress\n          :label="args.label"\n          :percent="args.percent"\n          size="70"\n          :strokeWidth="args.strokeWidth"\n          :className="args.className"\n        ></CircleProgress>\n        <CircleProgress\n          :label="args.label"\n          :percent="args.percent"\n          size="100"\n          :strokeWidth="args.strokeWidth"\n          :className="args.className"\n        ></CircleProgress>\n      </div>`\n  }),\n  // 控制 controls 中能控制的參數\n  parameters: {\n    controls: {\n      exclude: ["size", "label"]\n    },\n    docs: {\n      source: {\n        transform: (src, storyContext) => {\n          const {\n            args\n          } = storyContext;\n          return [`<script setup>`, `import { CircleProgress } from "@ded-wds-vue/ui";`, `<\/script>`, "", "<template>", `  <CircleProgress`, `    ${args.label ? `label="${args.label}"` : ""}`, `    ${args.percent !== undefined ? `:percent="${args.percent}"` : ""}`, `    :size="70"`, `    ${args.strokeWidth !== undefined ? `:strokeWidth="${args.strokeWidth}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, `  ></CircleProgress>`, `  <CircleProgress`, `    ${args.label ? `label="${args.label}"` : ""}`, `    ${args.percent !== undefined ? `:percent="${args.percent}"` : ""}`, `    :size="100"`, `    ${args.strokeWidth !== undefined ? `:strokeWidth="${args.strokeWidth}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, `  ></CircleProgress>`, "</template>"].filter(Boolean).join("\\n").trim();\n        }\n      }\n    }\n  }\n}',
      ...(_f = (_e = CircleProgressLabelStory.parameters) == null ? void 0 : _e.docs) == null ? void 0 : _f.source
    }
  }
};
const __namedExportsOrder = ["DefaultCircleProgress", "CircleProgressLabelStory"];
export {
  CircleProgressLabelStory,
  DefaultCircleProgress,
  __namedExportsOrder,
  CircleProgress_stories as default
};

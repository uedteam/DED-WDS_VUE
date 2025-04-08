var _a, _b, _c, _d, _e, _f;
import { _ as _sfc_main } from "./StatusIndicator-n0z-IB02.js";
import "./vue.esm-bundler-K7CzQrxl.js";
import "./Icon-B6pI5HKs.js";
const StatusIndicator_stories = {
  title: "Component/Status-Indicator",
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
    variant: {
      description: "按鈕樣式",
      required: true,
      control: {
        type: "select"
      },
      options: ["text", "soft", "filled"],
      table: {
        type: {
          summary: "text | soft | filled "
        }
      }
    },
    isShowDot: {
      description: "是否顯示圓點",
      control: {
        type: "boolean"
      }
    },
    prefix: {
      description: "前綴元素",
      control: {
        type: "select",
        labels: {
          "": "none",
          "SvgInfoCircle": "SvgInfoCircle",
          "SvgSuccessCircle": "SvgSuccessCircle",
          "SvgWarningTri": "SvgWarningTri",
          "SvgErrorCircle": "SvgErrorCircle",
          "SvgQuestionCircle": "SvgQuestionCircle",
          "SvgDisableCircle": "SvgDisableCircle"
        }
      },
      options: ["", "SvgInfoCircle", "SvgSuccessCircle", "SvgWarningTri", "SvgErrorCircle", "SvgQuestionCircle", "SvgDisableCircle"]
    },
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
    className: {
      description: "客製化樣式",
      control: {
        type: "text"
      }
    },
    default: {
      description: "內容",
      control: {
        type: "text"
      },
      table: {
        type: {
          summary: "Vue Component | HTML"
        }
      }
    }
  },
  parameters: {
    // 自動文件
    docs: {
      title: "StatusIndicator",
      description: {
        component: "狀態指示組件的呈現及說明。"
      }
    }
  }
};
const StatusIndicatorDefault = {
  name: "預設項目",
  args: {
    themeColor: "success",
    variant: "filled",
    isShowDot: false,
    prefix: "",
    size: "medium",
    className: "",
    default: "Success"
  },
  render: (args) => ({
    components: {
      StatusIndicator: _sfc_main
    },
    setup() {
      return {
        args
      };
    },
    template: `
      <StatusIndicator
        :themeColor="args.themeColor"
        :variant="args.variant"
        :isShowDot="args.isShowDot"
        :prefix="args.prefix"
        :size="args.size"
        :className="args.className"
      >
        {{args.default}}
      </StatusIndicator>`
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
          return [`<script setup>`, `import { StatusIndicator } from "@ded-wds-vue/ui";`, `<\/script>`, "", "<template>", `  <StatusIndicator`, `    ${args.themeColor ? `themeColor="${args.themeColor}"` : ""}`, `    ${args.variant ? `variant="${args.variant}"` : ""}`, `    ${args.isShowDot ? `:isShowDot="${args.isShowDot}"` : `:isShowDot="${args.isShowDot}"`}`, `    ${args.prefix ? `prefix="${args.prefix}"` : ""}`, `    ${args.size ? `size="${args.size}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, `  >`, `    ${args.default || ""}`, `  </StatusIndicator>`, "</template>"].filter(Boolean).join("\n").trim();
        }
      }
    }
  }
};
const StatusIndicatorColors = {
  name: "主題色彩",
  args: {
    themeColor: "",
    variant: "",
    isShowDot: true,
    prefix: "",
    size: "medium",
    className: ""
  },
  render: (args) => ({
    components: {
      StatusIndicator: _sfc_main
    },
    setup() {
      return {
        args
      };
    },
    template: `
      <div style="width: 600px; display: flex; gap: 10px; flex-wrap: wrap;">
        <div style="display: flex; gap: 8px">
          <StatusIndicator
            themeColor="info"
            variant="filled"
            :isShowDot="args.isShowDot"
            :prefix="args.prefix"
            :size="args.size"
            :className="args.className"
          >
            Information
          </StatusIndicator>
      
          <StatusIndicator
            themeColor="success"
            variant="filled"
            :isShowDot="args.isShowDot"
            :prefix="args.prefix"
            :size="args.size"
            :className="args.className"
          >
            Success
          </StatusIndicator>
      
          <StatusIndicator
            themeColor="warning"
            variant="filled"
            :isShowDot="args.isShowDot"
            :prefix="args.prefix"
            :size="args.size"
            :className="args.className"
          >
            Warning
          </StatusIndicator>
      
          <StatusIndicator
            themeColor="error"
            variant="filled"
            :isShowDot="args.isShowDot"
            :prefix="args.prefix"
            :size="args.size"
            :className="args.className"
          >
            Error
          </StatusIndicator>
      
          <StatusIndicator
            themeColor="neutral"
            variant="filled"
            :isShowDot="args.isShowDot"
            :prefix="args.prefix"
            :size="args.size"
            :className="args.className"
          >
            Disable
          </StatusIndicator>
        </div>
      
        <div style="display: flex; gap: 8px">
          <StatusIndicator
            themeColor="info"
            variant="text"
            :isShowDot="args.isShowDot"
            :prefix="args.prefix"
            :size="args.size"
            :className="args.className"
          >
            Information
          </StatusIndicator>
      
          <StatusIndicator
            themeColor="success"
            variant="text"
            :isShowDot="args.isShowDot"
            :prefix="args.prefix"
            :size="args.size"
            :className="args.className"
          >
            Success
          </StatusIndicator>
      
          <StatusIndicator
            themeColor="warning"
            variant="text"
            :isShowDot="args.isShowDot"
            :prefix="args.prefix"
            :size="args.size"
            :className="args.className"
          >
            Warning
          </StatusIndicator>
      
          <StatusIndicator
            themeColor="error"
            variant="text"
            :isShowDot="args.isShowDot"
            :prefix="args.prefix"
            :size="args.size"
            :className="args.className"
          >
            Error
          </StatusIndicator>
      
          <StatusIndicator
            themeColor="neutral"
            variant="text"
            :isShowDot="args.isShowDot"
            :prefix="args.prefix"
            :size="args.size"
            :className="args.className"
          >
            Disable
          </StatusIndicator>
        </div>
      </div>
      `
  }),
  parameters: {
    controls: {
      // include or exclude keys as needed
      exclude: ["themeColor", "default", "variant", "prefix"]
    },
    docs: {
      source: {
        transform: (src, storyContext) => {
          const {
            args
          } = storyContext;
          return [`<script setup>`, `import { StatusIndicator } from "@ded-wds-vue/ui";`, `<\/script>`, "", "<template>", `  <StatusIndicator`, `    themeColor="info"`, `    variant="filled"`, `    ${args.isShowDot ? `:isShowDot="${args.isShowDot}"` : ""}`, `    ${args.prefix ? `prefix="${args.prefix}"` : ""}`, `    ${args.size ? `size="${args.size}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, `  >`, `    Information`, `  </StatusIndicator>`, `  <StatusIndicator`, `    themeColor="success"`, `    variant="filled"`, `    ${args.isShowDot ? `:isShowDot="${args.isShowDot}"` : ""}`, `    ${args.prefix ? `prefix="${args.prefix}"` : ""}`, `    ${args.size ? `size="${args.size}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, `  >`, `    Success`, `  </StatusIndicator>`, `  <StatusIndicator`, `    themeColor="warning"`, `    variant="filled"`, `    ${args.isShowDot ? `:isShowDot="${args.isShowDot}"` : ""}`, `    ${args.prefix ? `prefix="${args.prefix}"` : ""}`, `    ${args.size ? `size="${args.size}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, `  >`, `    Warning`, `  </StatusIndicator>`, `  <StatusIndicator`, `    themeColor="error"`, `    variant="filled"`, `    ${args.isShowDot ? `:isShowDot="${args.isShowDot}"` : ""}`, `    ${args.prefix ? `prefix="${args.prefix}"` : ""}`, `    ${args.size ? `size="${args.size}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, `  >`, `    Error`, `  </StatusIndicator>`, `  <StatusIndicator`, `    themeColor="neutral"`, `    variant="filled"`, `    ${args.isShowDot ? `:isShowDot="${args.isShowDot}"` : ""}`, `    ${args.prefix ? `prefix="${args.prefix}"` : ""}`, `    ${args.size ? `size="${args.size}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, `  >`, `    Disable`, `  </StatusIndicator>`, "", `  <StatusIndicator`, `    themeColor="info"`, `    variant="text"`, `    ${args.isShowDot ? `:isShowDot="${args.isShowDot}"` : ""}`, `    ${args.prefix ? `prefix="${args.prefix}"` : ""}`, `    ${args.size ? `size="${args.size}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, `  >`, `    Information`, `  </StatusIndicator>`, `  <StatusIndicator`, `    themeColor="success"`, `    variant="text"`, `    ${args.isShowDot ? `:isShowDot="${args.isShowDot}"` : ""}`, `    ${args.prefix ? `prefix="${args.prefix}"` : ""}`, `    ${args.size ? `size="${args.size}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, `  >`, `    Success`, `  </StatusIndicator>`, `  <StatusIndicator`, `    themeColor="warning"`, `    variant="text"`, `    ${args.isShowDot ? `:isShowDot="${args.isShowDot}"` : ""}`, `    ${args.prefix ? `prefix="${args.prefix}"` : ""}`, `    ${args.size ? `size="${args.size}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, `  >`, `    Warning`, `  </StatusIndicator>`, `  <StatusIndicator`, `    themeColor="error"`, `    variant="text"`, `    ${args.isShowDot ? `:isShowDot="${args.isShowDot}"` : ""}`, `    ${args.prefix ? `prefix="${args.prefix}"` : ""}`, `    ${args.size ? `size="${args.size}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, `  >`, `    Error`, `  </StatusIndicator>`, `  <StatusIndicator`, `    themeColor="neutral"`, `    variant="text"`, `    ${args.isShowDot ? `:isShowDot="${args.isShowDot}"` : ""}`, `    ${args.prefix ? `prefix="${args.prefix}"` : ""}`, `    ${args.size ? `size="${args.size}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, `  >`, `    Disable`, `  </StatusIndicator>`, `  <StatusIndicator`, `    themeColor="info"`, `    variant="filled"`, `    :isShowDot="false"`, `    prefix="SvgInfoCircle"`, `    ${args.size ? `size="${args.size}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, `  >`, `    Information`, `  </StatusIndicator>`, `  <StatusIndicator`, `    themeColor="success"`, `    variant="filled"`, `    :isShowDot="false"`, `    prefix="SvgSuccessCircle"`, `    ${args.size ? `size="${args.size}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, `  >`, `    Success`, `  </StatusIndicator>`, `  <StatusIndicator`, `    themeColor="warning"`, `    variant="filled"`, `    :isShowDot="false"`, `    prefix="SvgWarningTri"`, `    ${args.size ? `size="${args.size}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, `  >`, `    Warning`, `  </StatusIndicator>`, `  <StatusIndicator`, `    themeColor="error"`, `    variant="filled"`, `    :isShowDot="false"`, `    prefix="SvgErrorCircle"`, `    ${args.size ? `size="${args.size}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, `  >`, `    Error`, `  </StatusIndicator>`, `  <StatusIndicator`, `    themeColor="neutral"`, `    variant="filled"`, `    :isShowDot="false"`, `    prefix="SvgDisableCircle"`, `    ${args.size ? `size="${args.size}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, `  >`, `    Disable`, `  </StatusIndicator>`, "", `  <StatusIndicator`, `    themeColor="info"`, `    variant="text"`, `    :isShowDot="false"`, `    prefix="SvgInfoCircle"`, `    ${args.size ? `size="${args.size}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, `  >`, `    Information`, `  </StatusIndicator>`, `  <StatusIndicator`, `    themeColor="success"`, `    variant="text"`, `    :isShowDot="false"`, `    prefix="SvgSuccessCircle"`, `    ${args.size ? `size="${args.size}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, `  >`, `    Success`, `  </StatusIndicator>`, `  <StatusIndicator`, `    themeColor="warning"`, `    variant="text"`, `    :isShowDot="false"`, `    prefix="SvgWarningTri"`, `    ${args.size ? `size="${args.size}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, `  >`, `    Warning`, `  </StatusIndicator>`, `  <StatusIndicator`, `    themeColor="error"`, `    variant="text"`, `    :isShowDot="false"`, `    prefix="SvgErrorCircle"`, `    ${args.size ? `size="${args.size}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, `  >`, `    Error`, `  </StatusIndicator>`, `  <StatusIndicator`, `    themeColor="neutral"`, `    variant="text"`, `    :isShowDot="false"`, `    prefix="SvgDisableCircle"`, `    ${args.size ? `size="${args.size}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, `  >`, `    Disable`, `  </StatusIndicator>`, "</template>"].filter(Boolean).join("\n").trim();
        }
      }
    }
  }
};
StatusIndicatorDefault.parameters = {
  ...StatusIndicatorDefault.parameters,
  docs: {
    ...(_a = StatusIndicatorDefault.parameters) == null ? void 0 : _a.docs,
    source: {
      originalSource: '{\n  name: "預設項目",\n  args: {\n    themeColor: "success",\n    variant: "filled",\n    isShowDot: false,\n    prefix: "",\n    size: "medium",\n    className: "",\n    default: "Success"\n  },\n  render: args => ({\n    components: {\n      StatusIndicator\n    },\n    setup() {\n      return {\n        args\n      };\n    },\n    template: `\n      <StatusIndicator\n        :themeColor="args.themeColor"\n        :variant="args.variant"\n        :isShowDot="args.isShowDot"\n        :prefix="args.prefix"\n        :size="args.size"\n        :className="args.className"\n      >\n        {{args.default}}\n      </StatusIndicator>`\n  }),\n  parameters: {\n    controls: {\n      // include or exclude keys as needed\n    },\n    docs: {\n      source: {\n        transform: (src, storyContext) => {\n          const {\n            args\n          } = storyContext;\n          return [`<script setup>`, `import { StatusIndicator } from "@ded-wds-vue/ui";`, `<\/script>`, "", "<template>", `  <StatusIndicator`, `    ${args.themeColor ? `themeColor="${args.themeColor}"` : ""}`, `    ${args.variant ? `variant="${args.variant}"` : ""}`, `    ${args.isShowDot ? `:isShowDot="${args.isShowDot}"` : `:isShowDot="${args.isShowDot}"`}`, `    ${args.prefix ? `prefix="${args.prefix}"` : ""}`, `    ${args.size ? `size="${args.size}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, `  >`, `    ${args.default || ""}`, `  </StatusIndicator>`, "</template>"].filter(Boolean).join("\\n").trim();\n        }\n      }\n    }\n  }\n}',
      ...(_c = (_b = StatusIndicatorDefault.parameters) == null ? void 0 : _b.docs) == null ? void 0 : _c.source
    }
  }
};
StatusIndicatorColors.parameters = {
  ...StatusIndicatorColors.parameters,
  docs: {
    ...(_d = StatusIndicatorColors.parameters) == null ? void 0 : _d.docs,
    source: {
      originalSource: '{\n  name: "主題色彩",\n  args: {\n    themeColor: "",\n    variant: "",\n    isShowDot: true,\n    prefix: "",\n    size: "medium",\n    className: ""\n  },\n  render: args => ({\n    components: {\n      StatusIndicator\n    },\n    setup() {\n      return {\n        args\n      };\n    },\n    template: `\n      <div style="width: 600px; display: flex; gap: 10px; flex-wrap: wrap;">\n        <div style="display: flex; gap: 8px">\n          <StatusIndicator\n            themeColor="info"\n            variant="filled"\n            :isShowDot="args.isShowDot"\n            :prefix="args.prefix"\n            :size="args.size"\n            :className="args.className"\n          >\n            Information\n          </StatusIndicator>\n      \n          <StatusIndicator\n            themeColor="success"\n            variant="filled"\n            :isShowDot="args.isShowDot"\n            :prefix="args.prefix"\n            :size="args.size"\n            :className="args.className"\n          >\n            Success\n          </StatusIndicator>\n      \n          <StatusIndicator\n            themeColor="warning"\n            variant="filled"\n            :isShowDot="args.isShowDot"\n            :prefix="args.prefix"\n            :size="args.size"\n            :className="args.className"\n          >\n            Warning\n          </StatusIndicator>\n      \n          <StatusIndicator\n            themeColor="error"\n            variant="filled"\n            :isShowDot="args.isShowDot"\n            :prefix="args.prefix"\n            :size="args.size"\n            :className="args.className"\n          >\n            Error\n          </StatusIndicator>\n      \n          <StatusIndicator\n            themeColor="neutral"\n            variant="filled"\n            :isShowDot="args.isShowDot"\n            :prefix="args.prefix"\n            :size="args.size"\n            :className="args.className"\n          >\n            Disable\n          </StatusIndicator>\n        </div>\n      \n        <div style="display: flex; gap: 8px">\n          <StatusIndicator\n            themeColor="info"\n            variant="text"\n            :isShowDot="args.isShowDot"\n            :prefix="args.prefix"\n            :size="args.size"\n            :className="args.className"\n          >\n            Information\n          </StatusIndicator>\n      \n          <StatusIndicator\n            themeColor="success"\n            variant="text"\n            :isShowDot="args.isShowDot"\n            :prefix="args.prefix"\n            :size="args.size"\n            :className="args.className"\n          >\n            Success\n          </StatusIndicator>\n      \n          <StatusIndicator\n            themeColor="warning"\n            variant="text"\n            :isShowDot="args.isShowDot"\n            :prefix="args.prefix"\n            :size="args.size"\n            :className="args.className"\n          >\n            Warning\n          </StatusIndicator>\n      \n          <StatusIndicator\n            themeColor="error"\n            variant="text"\n            :isShowDot="args.isShowDot"\n            :prefix="args.prefix"\n            :size="args.size"\n            :className="args.className"\n          >\n            Error\n          </StatusIndicator>\n      \n          <StatusIndicator\n            themeColor="neutral"\n            variant="text"\n            :isShowDot="args.isShowDot"\n            :prefix="args.prefix"\n            :size="args.size"\n            :className="args.className"\n          >\n            Disable\n          </StatusIndicator>\n        </div>\n      </div>\n      `\n  }),\n  parameters: {\n    controls: {\n      // include or exclude keys as needed\n      exclude: ["themeColor", "default", "variant", "prefix"]\n    },\n    docs: {\n      source: {\n        transform: (src, storyContext) => {\n          const {\n            args\n          } = storyContext;\n          return [`<script setup>`, `import { StatusIndicator } from "@ded-wds-vue/ui";`, `<\/script>`, "", "<template>", `  <StatusIndicator`, `    themeColor="info"`, `    variant="filled"`, `    ${args.isShowDot ? `:isShowDot="${args.isShowDot}"` : ""}`, `    ${args.prefix ? `prefix="${args.prefix}"` : ""}`, `    ${args.size ? `size="${args.size}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, `  >`, `    Information`, `  </StatusIndicator>`, `  <StatusIndicator`, `    themeColor="success"`, `    variant="filled"`, `    ${args.isShowDot ? `:isShowDot="${args.isShowDot}"` : ""}`, `    ${args.prefix ? `prefix="${args.prefix}"` : ""}`, `    ${args.size ? `size="${args.size}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, `  >`, `    Success`, `  </StatusIndicator>`, `  <StatusIndicator`, `    themeColor="warning"`, `    variant="filled"`, `    ${args.isShowDot ? `:isShowDot="${args.isShowDot}"` : ""}`, `    ${args.prefix ? `prefix="${args.prefix}"` : ""}`, `    ${args.size ? `size="${args.size}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, `  >`, `    Warning`, `  </StatusIndicator>`, `  <StatusIndicator`, `    themeColor="error"`, `    variant="filled"`, `    ${args.isShowDot ? `:isShowDot="${args.isShowDot}"` : ""}`, `    ${args.prefix ? `prefix="${args.prefix}"` : ""}`, `    ${args.size ? `size="${args.size}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, `  >`, `    Error`, `  </StatusIndicator>`, `  <StatusIndicator`, `    themeColor="neutral"`, `    variant="filled"`, `    ${args.isShowDot ? `:isShowDot="${args.isShowDot}"` : ""}`, `    ${args.prefix ? `prefix="${args.prefix}"` : ""}`, `    ${args.size ? `size="${args.size}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, `  >`, `    Disable`, `  </StatusIndicator>`, "", `  <StatusIndicator`, `    themeColor="info"`, `    variant="text"`, `    ${args.isShowDot ? `:isShowDot="${args.isShowDot}"` : ""}`, `    ${args.prefix ? `prefix="${args.prefix}"` : ""}`, `    ${args.size ? `size="${args.size}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, `  >`, `    Information`, `  </StatusIndicator>`, `  <StatusIndicator`, `    themeColor="success"`, `    variant="text"`, `    ${args.isShowDot ? `:isShowDot="${args.isShowDot}"` : ""}`, `    ${args.prefix ? `prefix="${args.prefix}"` : ""}`, `    ${args.size ? `size="${args.size}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, `  >`, `    Success`, `  </StatusIndicator>`, `  <StatusIndicator`, `    themeColor="warning"`, `    variant="text"`, `    ${args.isShowDot ? `:isShowDot="${args.isShowDot}"` : ""}`, `    ${args.prefix ? `prefix="${args.prefix}"` : ""}`, `    ${args.size ? `size="${args.size}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, `  >`, `    Warning`, `  </StatusIndicator>`, `  <StatusIndicator`, `    themeColor="error"`, `    variant="text"`, `    ${args.isShowDot ? `:isShowDot="${args.isShowDot}"` : ""}`, `    ${args.prefix ? `prefix="${args.prefix}"` : ""}`, `    ${args.size ? `size="${args.size}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, `  >`, `    Error`, `  </StatusIndicator>`, `  <StatusIndicator`, `    themeColor="neutral"`, `    variant="text"`, `    ${args.isShowDot ? `:isShowDot="${args.isShowDot}"` : ""}`, `    ${args.prefix ? `prefix="${args.prefix}"` : ""}`, `    ${args.size ? `size="${args.size}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, `  >`, `    Disable`, `  </StatusIndicator>`, `  <StatusIndicator`, `    themeColor="info"`, `    variant="filled"`, `    :isShowDot="false"`, `    prefix="SvgInfoCircle"`, `    ${args.size ? `size="${args.size}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, `  >`, `    Information`, `  </StatusIndicator>`, `  <StatusIndicator`, `    themeColor="success"`, `    variant="filled"`, `    :isShowDot="false"`, `    prefix="SvgSuccessCircle"`, `    ${args.size ? `size="${args.size}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, `  >`, `    Success`, `  </StatusIndicator>`, `  <StatusIndicator`, `    themeColor="warning"`, `    variant="filled"`, `    :isShowDot="false"`, `    prefix="SvgWarningTri"`, `    ${args.size ? `size="${args.size}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, `  >`, `    Warning`, `  </StatusIndicator>`, `  <StatusIndicator`, `    themeColor="error"`, `    variant="filled"`, `    :isShowDot="false"`, `    prefix="SvgErrorCircle"`, `    ${args.size ? `size="${args.size}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, `  >`, `    Error`, `  </StatusIndicator>`, `  <StatusIndicator`, `    themeColor="neutral"`, `    variant="filled"`, `    :isShowDot="false"`, `    prefix="SvgDisableCircle"`, `    ${args.size ? `size="${args.size}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, `  >`, `    Disable`, `  </StatusIndicator>`, "", `  <StatusIndicator`, `    themeColor="info"`, `    variant="text"`, `    :isShowDot="false"`, `    prefix="SvgInfoCircle"`, `    ${args.size ? `size="${args.size}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, `  >`, `    Information`, `  </StatusIndicator>`, `  <StatusIndicator`, `    themeColor="success"`, `    variant="text"`, `    :isShowDot="false"`, `    prefix="SvgSuccessCircle"`, `    ${args.size ? `size="${args.size}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, `  >`, `    Success`, `  </StatusIndicator>`, `  <StatusIndicator`, `    themeColor="warning"`, `    variant="text"`, `    :isShowDot="false"`, `    prefix="SvgWarningTri"`, `    ${args.size ? `size="${args.size}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, `  >`, `    Warning`, `  </StatusIndicator>`, `  <StatusIndicator`, `    themeColor="error"`, `    variant="text"`, `    :isShowDot="false"`, `    prefix="SvgErrorCircle"`, `    ${args.size ? `size="${args.size}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, `  >`, `    Error`, `  </StatusIndicator>`, `  <StatusIndicator`, `    themeColor="neutral"`, `    variant="text"`, `    :isShowDot="false"`, `    prefix="SvgDisableCircle"`, `    ${args.size ? `size="${args.size}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, `  >`, `    Disable`, `  </StatusIndicator>`, "</template>"].filter(Boolean).join("\\n").trim();\n        }\n      }\n    }\n  }\n}',
      ...(_f = (_e = StatusIndicatorColors.parameters) == null ? void 0 : _e.docs) == null ? void 0 : _f.source
    }
  }
};
const __namedExportsOrder = ["StatusIndicatorDefault", "StatusIndicatorColors"];
export {
  StatusIndicatorColors,
  StatusIndicatorDefault,
  __namedExportsOrder,
  StatusIndicator_stories as default
};

var _a, _b, _c, _d, _e, _f, _g, _h, _i;
import { _ as _sfc_main } from "./Title-BgzIyXq9.js";
import "./vue.esm-bundler-K7CzQrxl.js";
const Title_stories = {
  title: "Component/Typography/Title",
  component: _sfc_main,
  tags: ["autodocs"],
  argTypes: {
    themeColor: {
      description: "主題顏色",
      control: {
        type: "select",
        labels: {
          "": "none",
          "primary": "primary",
          "secondary": "secondary",
          "neutral": "neutral",
          "info": "info",
          "success": "success",
          "warning": "warning",
          "error": "error"
        }
      },
      options: ["", "primary", "secondary", "neutral", "info", "success", "warning", "error"],
      table: {
        type: {
          summary: "none | primary | secondary | neutral | info | success | warning | error"
        },
        defaultValue: {
          summary: "none"
        }
      }
    },
    level: {
      description: "標題等級",
      control: {
        type: "select"
      },
      options: [0, 1, 2, 3, 4, 5, 6],
      table: {
        type: {
          summary: "0 | 1 | 2 | 3 | 4 | 5 | 6"
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
      description: "標題內容",
      control: {
        type: "text"
      }
    }
  },
  parameters: {
    // 自動文件
    docs: {
      title: "Title",
      description: {
        component: "標題組件的呈現及說明。"
      }
    }
  }
};
const HeadingDefault = {
  name: "預設項目",
  args: {
    themeColor: "",
    level: 1,
    className: "",
    default: "Title"
  },
  render: (args) => ({
    components: {
      Title: _sfc_main
    },
    setup() {
      return {
        args
      };
    },
    template: `
      <Title
        :themeColor="args.themeColor"
        :level="args.level"
        :className="args.className"
      >{{ args.default }}</Title>
        `
  }),
  // 控制 controls 中能控制的參數
  parameters: {
    controls: {
      // include: ['themeColor', 'label', 'value', 'name' ],
      // exclude:['default']
    },
    docs: {
      source: {
        transform: (src, storyContext) => {
          const {
            args
          } = storyContext;
          return [`<script setup>`, `import { Title } from "@ded-wds-vue/ui";`, `<\/script>`, "", "<template>", `  <Title`, `    ${args.themeColor ? `themeColor="${args.themeColor}"` : ""}`, `    ${args.level !== void 0 ? `:level="${args.level}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, `  >`, `    ${args.default || ""}`, `  </Title>`, "</template>"].filter(Boolean).join("\n").trim();
        }
      }
    }
  }
};
const HeadingSizeDefault = {
  name: "標題大小",
  args: {
    themeColor: "",
    // level: 1,
    className: "",
    default: "Title"
  },
  render: (args) => ({
    components: {
      Title: _sfc_main
    },
    setup() {
      return {
        args
      };
    },
    template: `
      <div style="display: flex; flex-direction: column; gap: 8px">
        <Title
          :level="1"
          :className="args.className"
        >
          Level: 1 {{ args.default }}
        </Title>
      
        <Title
          :level="2"
          :className="args.className"
        >
          Level: 2 {{ args.default }}
        </Title>
      
        <Title
          :level="3"
          :className="args.className"
        >
          Level: 3 {{ args.default }}
        </Title>
      
        <Title
          :level="4"
          :className="args.className"
        >
          Level: 4 {{ args.default }}
        </Title>
      
        <Title
          :level="5"
          :className="args.className"
        >
          Level: 5 {{ args.default }}
        </Title>
      
        <Title
          :level="6"
          :className="args.className"
        >
          Level: 6 {{ args.default }}
        </Title>
      
        <Title
          :level="0"
          :className="args.className"
        >
          Level: 0 {{ args.default }}
        </Title>
      </div>
      `
  }),
  // 控制 controls 中能控制的參數
  parameters: {
    controls: {
      // include: ['themeColor', 'label', 'value', 'name' ],
      exclude: ["level"]
    },
    docs: {
      source: {
        transform: (src, storyContext) => {
          const {
            args
          } = storyContext;
          return [`<script setup>`, `import { Title } from "@ded-wds-vue/ui";`, `<\/script>`, "", "<template>", `  <Title`, `    ${args.themeColor ? `themeColor="${args.themeColor}"` : ""}`, `    :level="1"`, `    ${args.className ? `className="${args.className}"` : ""}`, `  >`, `    Level:1 Title`, `  </Title>`, `  <Title`, `    ${args.themeColor ? `themeColor="${args.themeColor}"` : ""}`, `    :level="2"`, `    ${args.className ? `className="${args.className}"` : ""}`, `  >`, `    Level:2 Title`, `  </Title>`, `  <Title`, `    ${args.themeColor ? `themeColor="${args.themeColor}"` : ""}`, `    :level="3"`, `    ${args.className ? `className="${args.className}"` : ""}`, `  >`, `    Level:3 Title`, `  </Title>`, `  <Title`, `    ${args.themeColor ? `themeColor="${args.themeColor}"` : ""}`, `    :level="4"`, `    ${args.className ? `className="${args.className}"` : ""}`, `  >`, `    Level:4 Title`, `  </Title>`, `  <Title`, `    ${args.themeColor ? `themeColor="${args.themeColor}"` : ""}`, `    :level="5"`, `    ${args.className ? `className="${args.className}"` : ""}`, `  >`, `    Level:5 Title`, `  </Title>`, `  <Title`, `    ${args.themeColor ? `themeColor="${args.themeColor}"` : ""}`, `    :level="6"`, `    ${args.className ? `className="${args.className}"` : ""}`, `  >`, `    Level:6 Title`, `  </Title>`, `  <Title`, `    ${args.themeColor ? `themeColor="${args.themeColor}"` : ""}`, `    :level="0"`, `    ${args.className ? `className="${args.className}"` : ""}`, `  >`, `    Level:0 Title`, `  </Title>`, "</template>"].filter(Boolean).join("\n").trim();
        }
      }
    }
  }
};
const HeadingColorDefault = {
  name: "主題色彩",
  args: {
    // themeColor: "",
    level: 3,
    className: "",
    default: "Title"
  },
  render: (args) => ({
    components: {
      Title: _sfc_main
    },
    setup() {
      return {
        args
      };
    },
    template: `
      <div style="display: flex; gap: 8px">
        <Title
          themeColor="primary"
          :level="args.level"
          :className="args.className"
        >
          {{ args.default }}
        </Title>

        <Title
          themeColor="secondary"
          :level="args.level"
          :className="args.className"
        >
          {{ args.default }}
        </Title>

        <Title
          themeColor="neutral"
          :level="args.level"
          :className="args.className"
        >
          {{ args.default }}
        </Title>

        <Title
          themeColor="info"
          :level="args.level"
          :className="args.className"
        >
          {{ args.default }}
        </Title>

        <Title
          themeColor="success"
          :level="args.level"
          :className="args.className"
        >
          {{ args.default }}
        </Title>

        <Title
          themeColor="warning"
          :level="args.level"
          :className="args.className"
        >
          {{ args.default }}
        </Title>

        <Title
          themeColor="error"
          :level="args.level"
          :className="args.className"
        >
          {{ args.default }}
        </Title>
      </div>`
  }),
  // 控制 controls 中能控制的參數
  parameters: {
    controls: {
      // include: ['themeColor', 'label', 'value', 'name' ],
      exclude: ["themeColor"]
    },
    docs: {
      source: {
        transform: (src, storyContext) => {
          const {
            args
          } = storyContext;
          return [`<script setup>`, `import { Title } from "@ded-wds-vue/ui";`, `<\/script>`, "", "<template>", `  <Title`, `    themeColor="primary"`, `    ${args.level !== void 0 ? `:level="${args.level}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, `  >`, `    ${args.default || ""}`, `  </Title>`, `  <Title`, `    themeColor="secondary"`, `    ${args.level !== void 0 ? `:level="${args.level}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, `  >`, `    ${args.default || ""}`, `  </Title>`, `  <Title`, `    themeColor="neutral"`, `    ${args.level !== void 0 ? `:level="${args.level}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, `  >`, `    ${args.default || ""}`, `  </Title>`, `  <Title`, `    themeColor="info"`, `    ${args.level !== void 0 ? `:level="${args.level}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, `  >`, `    ${args.default || ""}`, `  </Title>`, `  <Title`, `    themeColor="success"`, `    ${args.level !== void 0 ? `:level="${args.level}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, `  >`, `    ${args.default || ""}`, `  </Title>`, `  <Title`, `    themeColor="warning"`, `    ${args.level !== void 0 ? `:level="${args.level}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, `  >`, `    ${args.default || ""}`, `  </Title>`, `  <Title`, `    themeColor="error"`, `    ${args.level !== void 0 ? `:level="${args.level}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, `  >`, `    ${args.default || ""}`, `  </Title>`, "</template>"].filter(Boolean).join("\n").trim();
        }
      }
    }
  }
};
HeadingDefault.parameters = {
  ...HeadingDefault.parameters,
  docs: {
    ...(_a = HeadingDefault.parameters) == null ? void 0 : _a.docs,
    source: {
      originalSource: '{\n  name: "預設項目",\n  args: {\n    themeColor: "",\n    level: 1,\n    className: "",\n    default: "Title"\n  },\n  render: args => ({\n    components: {\n      Title\n    },\n    setup() {\n      return {\n        args\n      };\n    },\n    template: `\n      <Title\n        :themeColor="args.themeColor"\n        :level="args.level"\n        :className="args.className"\n      >{{ args.default }}</Title>\n        `\n  }),\n  // 控制 controls 中能控制的參數\n  parameters: {\n    controls: {\n      // include: [\'themeColor\', \'label\', \'value\', \'name\' ],\n      // exclude:[\'default\']\n    },\n    docs: {\n      source: {\n        transform: (src, storyContext) => {\n          const {\n            args\n          } = storyContext;\n          return [`<script setup>`, `import { Title } from "@ded-wds-vue/ui";`, `<\/script>`, "", "<template>", `  <Title`, `    ${args.themeColor ? `themeColor="${args.themeColor}"` : ""}`, `    ${args.level !== undefined ? `:level="${args.level}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, `  >`, `    ${args.default || ""}`, `  </Title>`, "</template>"].filter(Boolean).join("\\n").trim();\n        }\n      }\n    }\n  }\n}',
      ...(_c = (_b = HeadingDefault.parameters) == null ? void 0 : _b.docs) == null ? void 0 : _c.source
    }
  }
};
HeadingSizeDefault.parameters = {
  ...HeadingSizeDefault.parameters,
  docs: {
    ...(_d = HeadingSizeDefault.parameters) == null ? void 0 : _d.docs,
    source: {
      originalSource: '{\n  name: "標題大小",\n  args: {\n    themeColor: "",\n    // level: 1,\n    className: "",\n    default: "Title"\n  },\n  render: args => ({\n    components: {\n      Title\n    },\n    setup() {\n      return {\n        args\n      };\n    },\n    template: `\n      <div style="display: flex; flex-direction: column; gap: 8px">\n        <Title\n          :level="1"\n          :className="args.className"\n        >\n          Level: 1 {{ args.default }}\n        </Title>\n      \n        <Title\n          :level="2"\n          :className="args.className"\n        >\n          Level: 2 {{ args.default }}\n        </Title>\n      \n        <Title\n          :level="3"\n          :className="args.className"\n        >\n          Level: 3 {{ args.default }}\n        </Title>\n      \n        <Title\n          :level="4"\n          :className="args.className"\n        >\n          Level: 4 {{ args.default }}\n        </Title>\n      \n        <Title\n          :level="5"\n          :className="args.className"\n        >\n          Level: 5 {{ args.default }}\n        </Title>\n      \n        <Title\n          :level="6"\n          :className="args.className"\n        >\n          Level: 6 {{ args.default }}\n        </Title>\n      \n        <Title\n          :level="0"\n          :className="args.className"\n        >\n          Level: 0 {{ args.default }}\n        </Title>\n      </div>\n      `\n  }),\n  // 控制 controls 中能控制的參數\n  parameters: {\n    controls: {\n      // include: [\'themeColor\', \'label\', \'value\', \'name\' ],\n      exclude: ["level"]\n    },\n    docs: {\n      source: {\n        transform: (src, storyContext) => {\n          const {\n            args\n          } = storyContext;\n          return [`<script setup>`, `import { Title } from "@ded-wds-vue/ui";`, `<\/script>`, "", "<template>", `  <Title`, `    ${args.themeColor ? `themeColor="${args.themeColor}"` : ""}`, `    :level="1"`, `    ${args.className ? `className="${args.className}"` : ""}`, `  >`, `    Level:1 Title`, `  </Title>`, `  <Title`, `    ${args.themeColor ? `themeColor="${args.themeColor}"` : ""}`, `    :level="2"`, `    ${args.className ? `className="${args.className}"` : ""}`, `  >`, `    Level:2 Title`, `  </Title>`, `  <Title`, `    ${args.themeColor ? `themeColor="${args.themeColor}"` : ""}`, `    :level="3"`, `    ${args.className ? `className="${args.className}"` : ""}`, `  >`, `    Level:3 Title`, `  </Title>`, `  <Title`, `    ${args.themeColor ? `themeColor="${args.themeColor}"` : ""}`, `    :level="4"`, `    ${args.className ? `className="${args.className}"` : ""}`, `  >`, `    Level:4 Title`, `  </Title>`, `  <Title`, `    ${args.themeColor ? `themeColor="${args.themeColor}"` : ""}`, `    :level="5"`, `    ${args.className ? `className="${args.className}"` : ""}`, `  >`, `    Level:5 Title`, `  </Title>`, `  <Title`, `    ${args.themeColor ? `themeColor="${args.themeColor}"` : ""}`, `    :level="6"`, `    ${args.className ? `className="${args.className}"` : ""}`, `  >`, `    Level:6 Title`, `  </Title>`, `  <Title`, `    ${args.themeColor ? `themeColor="${args.themeColor}"` : ""}`, `    :level="0"`, `    ${args.className ? `className="${args.className}"` : ""}`, `  >`, `    Level:0 Title`, `  </Title>`, "</template>"].filter(Boolean).join("\\n").trim();\n        }\n      }\n    }\n  }\n}',
      ...(_f = (_e = HeadingSizeDefault.parameters) == null ? void 0 : _e.docs) == null ? void 0 : _f.source
    }
  }
};
HeadingColorDefault.parameters = {
  ...HeadingColorDefault.parameters,
  docs: {
    ...(_g = HeadingColorDefault.parameters) == null ? void 0 : _g.docs,
    source: {
      originalSource: '{\n  name: "主題色彩",\n  args: {\n    // themeColor: "",\n    level: 3,\n    className: "",\n    default: "Title"\n  },\n  render: args => ({\n    components: {\n      Title\n    },\n    setup() {\n      return {\n        args\n      };\n    },\n    template: `\n      <div style="display: flex; gap: 8px">\n        <Title\n          themeColor="primary"\n          :level="args.level"\n          :className="args.className"\n        >\n          {{ args.default }}\n        </Title>\n\n        <Title\n          themeColor="secondary"\n          :level="args.level"\n          :className="args.className"\n        >\n          {{ args.default }}\n        </Title>\n\n        <Title\n          themeColor="neutral"\n          :level="args.level"\n          :className="args.className"\n        >\n          {{ args.default }}\n        </Title>\n\n        <Title\n          themeColor="info"\n          :level="args.level"\n          :className="args.className"\n        >\n          {{ args.default }}\n        </Title>\n\n        <Title\n          themeColor="success"\n          :level="args.level"\n          :className="args.className"\n        >\n          {{ args.default }}\n        </Title>\n\n        <Title\n          themeColor="warning"\n          :level="args.level"\n          :className="args.className"\n        >\n          {{ args.default }}\n        </Title>\n\n        <Title\n          themeColor="error"\n          :level="args.level"\n          :className="args.className"\n        >\n          {{ args.default }}\n        </Title>\n      </div>`\n  }),\n  // 控制 controls 中能控制的參數\n  parameters: {\n    controls: {\n      // include: [\'themeColor\', \'label\', \'value\', \'name\' ],\n      exclude: ["themeColor"]\n    },\n    docs: {\n      source: {\n        transform: (src, storyContext) => {\n          const {\n            args\n          } = storyContext;\n          return [`<script setup>`, `import { Title } from "@ded-wds-vue/ui";`, `<\/script>`, "", "<template>", `  <Title`, `    themeColor="primary"`, `    ${args.level !== undefined ? `:level="${args.level}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, `  >`, `    ${args.default || ""}`, `  </Title>`, `  <Title`, `    themeColor="secondary"`, `    ${args.level !== undefined ? `:level="${args.level}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, `  >`, `    ${args.default || ""}`, `  </Title>`, `  <Title`, `    themeColor="neutral"`, `    ${args.level !== undefined ? `:level="${args.level}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, `  >`, `    ${args.default || ""}`, `  </Title>`, `  <Title`, `    themeColor="info"`, `    ${args.level !== undefined ? `:level="${args.level}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, `  >`, `    ${args.default || ""}`, `  </Title>`, `  <Title`, `    themeColor="success"`, `    ${args.level !== undefined ? `:level="${args.level}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, `  >`, `    ${args.default || ""}`, `  </Title>`, `  <Title`, `    themeColor="warning"`, `    ${args.level !== undefined ? `:level="${args.level}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, `  >`, `    ${args.default || ""}`, `  </Title>`, `  <Title`, `    themeColor="error"`, `    ${args.level !== undefined ? `:level="${args.level}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, `  >`, `    ${args.default || ""}`, `  </Title>`, "</template>"].filter(Boolean).join("\\n").trim();\n        }\n      }\n    }\n  }\n}',
      ...(_i = (_h = HeadingColorDefault.parameters) == null ? void 0 : _h.docs) == null ? void 0 : _i.source
    }
  }
};
const __namedExportsOrder = ["HeadingDefault", "HeadingSizeDefault", "HeadingColorDefault"];
export {
  HeadingColorDefault,
  HeadingDefault,
  HeadingSizeDefault,
  __namedExportsOrder,
  Title_stories as default
};

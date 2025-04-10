var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r;
import { _ as _sfc_main } from "./Divider-Bm4p9k55.js";
import "./vue.esm-bundler-K7CzQrxl.js";
const Divider_stories = {
  title: "Component/Divider",
  component: _sfc_main,
  tags: ["autodocs"],
  argTypes: {
    width: {
      description: "線條寬度",
      control: {
        type: "select"
      },
      options: ["1px", "2px", "3px", "4px", "5px"],
      table: {
        type: {
          summary: "1px | 2px | 3px | 4px | 5px"
        }
      }
    },
    type: {
      description: "線條樣式",
      control: {
        type: "select"
      },
      defaultValue: "solid",
      options: ["solid", "dashed", "dotted"],
      table: {
        type: {
          summary: "solid | dashed | dotted"
        }
      }
    },
    direction: {
      description: "線條方向",
      control: {
        type: "select"
      },
      defaultValue: "horizontal",
      options: ["horizontal", "vertical"],
      table: {
        type: {
          summary: "horizontal | vertical"
        }
      }
    },
    align: {
      description: "文字位置",
      control: {
        type: "select"
      },
      options: ["start", "center", "end"],
      table: {
        type: {
          summary: "start | center | end"
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
      description: "分隔線內容",
      control: {
        type: "text"
      }
    }
  },
  parameters: {
    // 自動文件
    docs: {
      title: "Divider",
      description: {
        component: "Divider 組件的呈現及說明。"
      }
    }
  }
};
const DividerDefault = {
  name: "預設項目",
  args: {
    width: "1px",
    type: "solid",
    direction: "horizontal",
    align: "center",
    default: "Divider",
    className: ""
  },
  render: (args) => ({
    components: {
      Divider: _sfc_main
    },
    setup() {
      return {
        args
      };
    },
    template: `
      <div
        style="height: 100px;"
        :style="args.direction === 'vertical' ? 'display: flex;' : ''"
      >
        <Divider
          :width="args.width"
          :type="args.type"
          :direction="args.direction"
          :align="args.align"
          :className="args.className"
        >
          {{ args.default }}
        </Divider>
      </div>
    `
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
          return [`<script setup>`, `import { Divider } from "@ded-wds-vue/ui";`, `<\/script>`, "", "<template>", `  <div`, `    style="height: 100px;"`, `    ${args.direction === "vertical" ? `:style="'display: flex;'"` : ""}`, `  >`, "    <Divider", `      ${args.width ? `width="${args.width}"` : ""}`, `      ${args.type ? `type="${args.type}"` : ""}`, `      ${args.direction ? `direction="${args.direction}"` : ""}`, `      ${args.align ? `align="${args.align}"` : ""}`, `      ${args.className ? `className="${args.className}"` : ""}`, "    >", `      ${args.default || ""}`, "    </Divider>", `  </div>`, "</template>"].filter(Boolean).join("\n").trim();
        }
      }
    }
  }
};
const DividerContent = {
  name: "文字對齊",
  args: {
    width: "1px",
    type: "solid",
    direction: "horizontal",
    // align: "center",
    // default: "Divider",
    className: ""
  },
  render: (args) => ({
    components: {
      Divider: _sfc_main
    },
    setup() {
      return {
        args
      };
    },
    template: `
      <div
        style="display: flex; gap: 16px;"
        :style="{ 
          flexDirection: args.direction === 'horizontal' ? 'column' : 'row',
          height: '100px'
        }"
      >
        <Divider
          :width="args.width"
          :type="args.type"
          :direction="args.direction"
          align="start"
          :className="args.className"
        >
          Start
        </Divider>

        <Divider
          :width="args.width"
          :type="args.type"
          :direction="args.direction"
          align="center"
          :className="args.className"
        >
          Center
        </Divider>

        <Divider
          :width="args.width"
          :type="args.type"
          :direction="args.direction"
          align="end"
          :className="args.className"
        >
          End
        </Divider>
      </div>
    `
  }),
  // 控制 controls 中能控制的參數
  parameters: {
    controls: {
      // include: ['themeColor', 'label', 'value', 'name' ],
      exclude: ["align"]
    },
    docs: {
      source: {
        transform: (src, storyContext) => {
          const {
            args
          } = storyContext;
          return [`<script setup>`, `import { Divider } from "@ded-wds-vue/ui";`, `<\/script>`, "", "<template>", "  <Divider", `    ${args.width ? `width="${args.width}"` : ""}`, `    ${args.type ? `type="${args.type}"` : ""}`, `    ${args.direction ? `direction="${args.direction}"` : ""}`, `    align="start"`, `    ${args.className ? `className="${args.className}"` : ""}`, "  >", `    Start`, "  </Divider>", "  <Divider", `    ${args.width ? `width="${args.width}"` : ""}`, `    ${args.type ? `type="${args.type}"` : ""}`, `    ${args.direction ? `direction="${args.direction}"` : ""}`, `    align="center"`, `    ${args.className ? `className="${args.className}"` : ""}`, "  >", `    Center`, "  </Divider>", "  <Divider", `    ${args.width ? `width="${args.width}"` : ""}`, `    ${args.type ? `type="${args.type}"` : ""}`, `    ${args.direction ? `direction="${args.direction}"` : ""}`, `    align="end"`, `    ${args.className ? `className="${args.className}"` : ""}`, "  >", `    End`, "  </Divider>", "</template>"].filter(Boolean).join("\n").trim();
        }
      }
    }
  }
};
const DividerWidth = {
  name: "線條粗細",
  args: {
    // width:"1px",
    type: "solid",
    direction: "horizontal",
    align: "center",
    className: ""
  },
  render: (args) => ({
    components: {
      Divider: _sfc_main
    },
    setup() {
      return {
        args
      };
    },
    template: `
      <div
        :style="{ flexDirection: args.direction === 'horizontal' ? 'column' : 'row' }"
        style="display: flex; gap: 16px; height: 400px"
      >
        <Divider
          width="1px"
          :type="args.type"
          :direction="args.direction"
          :align="args.align"
          :className="args.className"
        >
          1px
        </Divider>

        <Divider
          width="2px"
          :type="args.type"
          :direction="args.direction"
          :align="args.align"
          :className="args.className"
        >
          2px
        </Divider>

        <Divider
          width="3px"
          :type="args.type"
          :direction="args.direction"
          :align="args.align"
          :className="args.className"
        >
          3px
        </Divider>

        <Divider
          width="4px"
          :type="args.type"
          :direction="args.direction"
          :align="args.align"
        >
          4px
        </Divider>

        <Divider
          width="5px"
          :type="args.type"
          :direction="args.direction"
          :align="args.align"
          :className="args.className"
        >
          5px
        </Divider>
      </div>
    `
  }),
  // 控制 controls 中能控制的參數
  parameters: {
    controls: {
      // include: ['themeColor', 'label', 'value', 'name' ],
      exclude: ["width"]
    },
    docs: {
      source: {
        transform: (src, storyContext) => {
          const {
            args
          } = storyContext;
          return [`<script setup>`, `import { Divider } from "@ded-wds-vue/ui";`, `<\/script>`, "", "<template>", "  <Divider", `    width="1px"`, `    ${args.type ? `type="${args.type}"` : ""}`, `    ${args.direction ? `direction="${args.direction}"` : ""}`, `    ${args.align ? `align="${args.align}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, "  >", `    1px`, "  </Divider>", "  <Divider", `    width="2px"`, `    ${args.type ? `type="${args.type}"` : ""}`, `    ${args.direction ? `direction="${args.direction}"` : ""}`, `    ${args.align ? `align="${args.align}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, "  >", `    2px`, "  </Divider>", "  <Divider", `    width="3px"`, `    ${args.type ? `type="${args.type}"` : ""}`, `    ${args.direction ? `direction="${args.direction}"` : ""}`, `    ${args.align ? `align="${args.align}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, "  >", `    3px`, "  </Divider>", "  <Divider", `    width="4px"`, `    ${args.type ? `type="${args.type}"` : ""}`, `    ${args.direction ? `direction="${args.direction}"` : ""}`, `    ${args.align ? `align="${args.align}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, "  >", `    4px`, "  </Divider>", "  <Divider", `    width="5px"`, `    ${args.type ? `type="${args.type}"` : ""}`, `    ${args.direction ? `direction="${args.direction}"` : ""}`, `    ${args.align ? `align="${args.align}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, "  >", `    5px`, "  </Divider>", "</template>"].filter(Boolean).join("\n").trim();
        }
      }
    }
  }
};
const DividerTypes = {
  name: "線條類型",
  args: {
    width: "1px",
    direction: "horizontal",
    align: "center",
    className: ""
  },
  render: (args) => ({
    components: {
      Divider: _sfc_main
    },
    setup() {
      return {
        args
      };
    },
    template: `
      <div
        :style="{ flexDirection: args.direction === 'horizontal' ? 'column' : 'row' }"
        style="display: flex; gap: 16px; height: 200px"
      >
        <Divider
          :width="args.width"
          type="solid"
          :direction="args.direction"
          :align="args.align"
          :className="args.className"
        >
          Solid
        </Divider>

        <Divider
          :width="args.width"
          type="dashed"
          :direction="args.direction"
          :align="args.align"
          :className="args.className"
        >
          Dashed
        </Divider>

        <Divider
          :width="args.width"
          type="dotted"
          :direction="args.direction"
          :align="args.align"
          :className="args.className"
        >
          Dotted
        </Divider>
      </div>
    `
  }),
  // 控制 controls 中能控制的參數
  parameters: {
    controls: {
      // include: ['themeColor', 'label', 'value', 'name' ],
      exclude: ["type"]
    },
    docs: {
      source: {
        transform: (src, storyContext) => {
          const {
            args
          } = storyContext;
          return [`<script setup>`, `import { Divider } from "@ded-wds-vue/ui";`, `<\/script>`, "", "<template>", "  <Divider", `    ${args.width ? `width="${args.width}"` : ""}`, `    type="solid"`, `    ${args.direction ? `direction="${args.direction}"` : ""}`, `    ${args.align ? `align="${args.align}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, "  >", `    Solid`, "  </Divider>", "  <Divider", `    ${args.width ? `width="${args.width}"` : ""}`, `    type="dashed"`, `    ${args.direction ? `direction="${args.direction}"` : ""}`, `    ${args.align ? `align="${args.align}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, "  >", `    Dashed`, "  </Divider>", "  <Divider", `    ${args.width ? `width="${args.width}"` : ""}`, `    type="dotted"`, `    ${args.direction ? `direction="${args.direction}"` : ""}`, `    ${args.align ? `align="${args.align}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, "  >", `    Dotted`, "  </Divider>", "</template>"].filter(Boolean).join("\n").trim();
        }
      }
    }
  }
};
const DividerColumnDirection = {
  name: "線條方向-垂直",
  args: {
    width: "1px",
    type: "solid",
    // direction: "horizontal",
    // align: "center",
    // default: "vertical",
    className: ""
  },
  render: (args) => ({
    components: {
      Divider: _sfc_main
    },
    setup() {
      return {
        args
      };
    },
    template: `
      <div style="display: flex; height: 100px">
        <Divider
          :themeColor="args.themeColor"
          :width="args.width"
          :type="args.type"
          direction="vertical"
          align="start"
          :className="args.className"
        >
          Start
        </Divider>

        <Divider
          :themeColor="args.themeColor"
          :width="args.width"
          :type="args.type"
          direction="vertical"
          align="center"
          :className="args.className"
        >
          Center
        </Divider>

        <Divider
          :themeColor="args.themeColor"
          :width="args.width"
          :type="args.type"
          direction="vertical"
          align="end"
          :className="args.className"
        >
          End
        </Divider>
      </div>
    `
  }),
  // 控制 controls 中能控制的參數
  parameters: {
    controls: {
      // include: ['themeColor', 'label', 'value', 'name' ],
      exclude: ["direction", "align", "default"]
    },
    docs: {
      source: {
        transform: (src, storyContext) => {
          const {
            args
          } = storyContext;
          return [`<script setup>`, `import { Divider } from "@ded-wds-vue/ui";`, `<\/script>`, "", "<template>", `<div style="display:flex; height: 100px">`, "  <Divider", `    ${args.width ? `width="${args.width}"` : ""}`, `    ${args.type ? `type="${args.type}"` : ""}`, `    direction="vertical"`, `    align="start"`, `    ${args.className ? `className="${args.className}"` : ""}`, "  >", `    Start`, "  </Divider>", "  <Divider", `    ${args.width ? `width="${args.width}"` : ""}`, `    ${args.type ? `type="${args.type}"` : ""}`, `    direction="vertical"`, `    align="center"`, `    ${args.className ? `className="${args.className}"` : ""}`, "  >", `    Center`, "  </Divider>", "  <Divider", `    ${args.width ? `width="${args.width}"` : ""}`, `    ${args.type ? `type="${args.type}"` : ""}`, `    direction="vertical"`, `    align="end"`, `    ${args.className ? `className="${args.className}"` : ""}`, "  >", `    End`, "  </Divider>", `</div>`, "</template>"].filter(Boolean).join("\n").trim();
        }
      }
    }
  }
};
const DividerRowDirection = {
  name: "線條方向-水平",
  args: {
    width: "1px",
    type: "solid",
    // direction: "horizontal",
    // align: "center",
    // default: "horizontal",
    className: ""
  },
  render: (args) => ({
    components: {
      Divider: _sfc_main
    },
    setup() {
      return {
        args
      };
    },
    template: `
      <div style="display: flex; flex-direction: column; height: 100px;">
        <Divider
          :width="args.width"
          :type="args.type"
          direction="horizontal"
          align="start"
          :className="args.className"
        >
          Start
        </Divider>

        <Divider
          :width="args.width"
          :type="args.type"
          direction="horizontal"
          align="center"
          :className="args.className"
        >
          Center
        </Divider>

        <Divider
          :width="args.width"
          :type="args.type"
          direction="horizontal"
          align="end"
          :className="args.className"
        >
          End
        </Divider>
      </div>
    `
  }),
  // 控制 controls 中能控制的參數
  parameters: {
    controls: {
      // include: ['themeColor', 'label', 'value', 'name' ],
      exclude: ["direction", "align", "default"]
    },
    docs: {
      source: {
        transform: (src, storyContext) => {
          const {
            args
          } = storyContext;
          return [`<script setup>`, `import { Divider } from "@ded-wds-vue/ui";`, `<\/script>`, "", "<template>", "  <Divider", `    ${args.width ? `width="${args.width}"` : ""}`, `    ${args.type ? `type="${args.type}"` : ""}`, `    direction="horizontal"`, `    align="start"`, `    ${args.className ? `className="${args.className}"` : ""}`, "  >", `    Start`, "  </Divider>", "  <Divider", `    ${args.width ? `width="${args.width}"` : ""}`, `    ${args.type ? `type="${args.type}"` : ""}`, `    direction="horizontal"`, `    align="center"`, `    ${args.className ? `className="${args.className}"` : ""}`, "  >", `    Center`, "  </Divider>", "  <Divider", `    ${args.width ? `width="${args.width}"` : ""}`, `    ${args.type ? `type="${args.type}"` : ""}`, `    direction="horizontal"`, `    align="end"`, `    ${args.className ? `className="${args.className}"` : ""}`, "  >", `    End`, "  </Divider>", "</template>"].filter(Boolean).join("\n").trim();
        }
      }
    }
  }
};
DividerDefault.parameters = {
  ...DividerDefault.parameters,
  docs: {
    ...(_a = DividerDefault.parameters) == null ? void 0 : _a.docs,
    source: {
      originalSource: '{\n  name: "預設項目",\n  args: {\n    width: "1px",\n    type: "solid",\n    direction: "horizontal",\n    align: "center",\n    default: "Divider",\n    className: ""\n  },\n  render: args => ({\n    components: {\n      Divider\n    },\n    setup() {\n      // Create a ref for modelValue to be used with v-model\n      return {\n        args\n      };\n    },\n    template: `\n      <div\n        style="height: 100px;"\n        :style="args.direction === \'vertical\' ? \'display: flex;\' : \'\'"\n      >\n        <Divider\n          :width="args.width"\n          :type="args.type"\n          :direction="args.direction"\n          :align="args.align"\n          :className="args.className"\n        >\n          {{ args.default }}\n        </Divider>\n      </div>\n    `\n  }),\n  // 控制 controls 中能控制的參數\n  parameters: {\n    controls: {\n      // include: [\'themeColor\', \'label\', \'value\', \'name\' ],\n    },\n    docs: {\n      source: {\n        transform: (src, storyContext) => {\n          const {\n            args\n          } = storyContext;\n          return [`<script setup>`, `import { Divider } from "@ded-wds-vue/ui";`, `<\/script>`, "", "<template>", `  <div`, `    style="height: 100px;"`, `    ${args.direction === "vertical" ? `:style="\'display: flex;\'"` : ""}`, `  >`, "    <Divider", `      ${args.width ? `width="${args.width}"` : ""}`, `      ${args.type ? `type="${args.type}"` : ""}`, `      ${args.direction ? `direction="${args.direction}"` : ""}`, `      ${args.align ? `align="${args.align}"` : ""}`, `      ${args.className ? `className="${args.className}"` : ""}`, "    >", `      ${args.default || ""}`, "    </Divider>", `  </div>`, "</template>"].filter(Boolean).join("\\n").trim();\n        }\n      }\n    }\n  }\n}',
      ...(_c = (_b = DividerDefault.parameters) == null ? void 0 : _b.docs) == null ? void 0 : _c.source
    }
  }
};
DividerContent.parameters = {
  ...DividerContent.parameters,
  docs: {
    ...(_d = DividerContent.parameters) == null ? void 0 : _d.docs,
    source: {
      originalSource: '{\n  name: "文字對齊",\n  args: {\n    width: "1px",\n    type: "solid",\n    direction: "horizontal",\n    // align: "center",\n    // default: "Divider",\n    className: ""\n  },\n  render: args => ({\n    components: {\n      Divider\n    },\n    setup() {\n      // Create a ref for modelValue to be used with v-model\n      return {\n        args\n      };\n    },\n    template: `\n      <div\n        style="display: flex; gap: 16px;"\n        :style="{ \n          flexDirection: args.direction === \'horizontal\' ? \'column\' : \'row\',\n          height: \'100px\'\n        }"\n      >\n        <Divider\n          :width="args.width"\n          :type="args.type"\n          :direction="args.direction"\n          align="start"\n          :className="args.className"\n        >\n          Start\n        </Divider>\n\n        <Divider\n          :width="args.width"\n          :type="args.type"\n          :direction="args.direction"\n          align="center"\n          :className="args.className"\n        >\n          Center\n        </Divider>\n\n        <Divider\n          :width="args.width"\n          :type="args.type"\n          :direction="args.direction"\n          align="end"\n          :className="args.className"\n        >\n          End\n        </Divider>\n      </div>\n    `\n  }),\n  // 控制 controls 中能控制的參數\n  parameters: {\n    controls: {\n      // include: [\'themeColor\', \'label\', \'value\', \'name\' ],\n      exclude: ["align"]\n    },\n    docs: {\n      source: {\n        transform: (src, storyContext) => {\n          const {\n            args\n          } = storyContext;\n          return [`<script setup>`, `import { Divider } from "@ded-wds-vue/ui";`, `<\/script>`, "", "<template>", "  <Divider", `    ${args.width ? `width="${args.width}"` : ""}`, `    ${args.type ? `type="${args.type}"` : ""}`, `    ${args.direction ? `direction="${args.direction}"` : ""}`, `    align="start"`, `    ${args.className ? `className="${args.className}"` : ""}`, "  >", `    Start`, "  </Divider>", "  <Divider", `    ${args.width ? `width="${args.width}"` : ""}`, `    ${args.type ? `type="${args.type}"` : ""}`, `    ${args.direction ? `direction="${args.direction}"` : ""}`, `    align="center"`, `    ${args.className ? `className="${args.className}"` : ""}`, "  >", `    Center`, "  </Divider>", "  <Divider", `    ${args.width ? `width="${args.width}"` : ""}`, `    ${args.type ? `type="${args.type}"` : ""}`, `    ${args.direction ? `direction="${args.direction}"` : ""}`, `    align="end"`, `    ${args.className ? `className="${args.className}"` : ""}`, "  >", `    End`, "  </Divider>", "</template>"].filter(Boolean).join("\\n").trim();\n        }\n      }\n    }\n  }\n}',
      ...(_f = (_e = DividerContent.parameters) == null ? void 0 : _e.docs) == null ? void 0 : _f.source
    }
  }
};
DividerWidth.parameters = {
  ...DividerWidth.parameters,
  docs: {
    ...(_g = DividerWidth.parameters) == null ? void 0 : _g.docs,
    source: {
      originalSource: '{\n  name: "線條粗細",\n  args: {\n    // width:"1px",\n    type: "solid",\n    direction: "horizontal",\n    align: "center",\n    className: ""\n  },\n  render: args => ({\n    components: {\n      Divider\n    },\n    setup() {\n      // Create a ref for modelValue to be used with v-model\n      return {\n        args\n      };\n    },\n    template: `\n      <div\n        :style="{ flexDirection: args.direction === \'horizontal\' ? \'column\' : \'row\' }"\n        style="display: flex; gap: 16px; height: 400px"\n      >\n        <Divider\n          width="1px"\n          :type="args.type"\n          :direction="args.direction"\n          :align="args.align"\n          :className="args.className"\n        >\n          1px\n        </Divider>\n\n        <Divider\n          width="2px"\n          :type="args.type"\n          :direction="args.direction"\n          :align="args.align"\n          :className="args.className"\n        >\n          2px\n        </Divider>\n\n        <Divider\n          width="3px"\n          :type="args.type"\n          :direction="args.direction"\n          :align="args.align"\n          :className="args.className"\n        >\n          3px\n        </Divider>\n\n        <Divider\n          width="4px"\n          :type="args.type"\n          :direction="args.direction"\n          :align="args.align"\n        >\n          4px\n        </Divider>\n\n        <Divider\n          width="5px"\n          :type="args.type"\n          :direction="args.direction"\n          :align="args.align"\n          :className="args.className"\n        >\n          5px\n        </Divider>\n      </div>\n    `\n  }),\n  // 控制 controls 中能控制的參數\n  parameters: {\n    controls: {\n      // include: [\'themeColor\', \'label\', \'value\', \'name\' ],\n      exclude: ["width"]\n    },\n    docs: {\n      source: {\n        transform: (src, storyContext) => {\n          const {\n            args\n          } = storyContext;\n          return [`<script setup>`, `import { Divider } from "@ded-wds-vue/ui";`, `<\/script>`, "", "<template>", "  <Divider", `    width="1px"`, `    ${args.type ? `type="${args.type}"` : ""}`, `    ${args.direction ? `direction="${args.direction}"` : ""}`, `    ${args.align ? `align="${args.align}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, "  >", `    1px`, "  </Divider>", "  <Divider", `    width="2px"`, `    ${args.type ? `type="${args.type}"` : ""}`, `    ${args.direction ? `direction="${args.direction}"` : ""}`, `    ${args.align ? `align="${args.align}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, "  >", `    2px`, "  </Divider>", "  <Divider", `    width="3px"`, `    ${args.type ? `type="${args.type}"` : ""}`, `    ${args.direction ? `direction="${args.direction}"` : ""}`, `    ${args.align ? `align="${args.align}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, "  >", `    3px`, "  </Divider>", "  <Divider", `    width="4px"`, `    ${args.type ? `type="${args.type}"` : ""}`, `    ${args.direction ? `direction="${args.direction}"` : ""}`, `    ${args.align ? `align="${args.align}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, "  >", `    4px`, "  </Divider>", "  <Divider", `    width="5px"`, `    ${args.type ? `type="${args.type}"` : ""}`, `    ${args.direction ? `direction="${args.direction}"` : ""}`, `    ${args.align ? `align="${args.align}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, "  >", `    5px`, "  </Divider>", "</template>"].filter(Boolean).join("\\n").trim();\n        }\n      }\n    }\n  }\n}',
      ...(_i = (_h = DividerWidth.parameters) == null ? void 0 : _h.docs) == null ? void 0 : _i.source
    }
  }
};
DividerTypes.parameters = {
  ...DividerTypes.parameters,
  docs: {
    ...(_j = DividerTypes.parameters) == null ? void 0 : _j.docs,
    source: {
      originalSource: '{\n  name: "線條類型",\n  args: {\n    width: "1px",\n    direction: "horizontal",\n    align: "center",\n    className: ""\n  },\n  render: args => ({\n    components: {\n      Divider\n    },\n    setup() {\n      // Create a ref for modelValue to be used with v-model\n      return {\n        args\n      };\n    },\n    template: `\n      <div\n        :style="{ flexDirection: args.direction === \'horizontal\' ? \'column\' : \'row\' }"\n        style="display: flex; gap: 16px; height: 200px"\n      >\n        <Divider\n          :width="args.width"\n          type="solid"\n          :direction="args.direction"\n          :align="args.align"\n          :className="args.className"\n        >\n          Solid\n        </Divider>\n\n        <Divider\n          :width="args.width"\n          type="dashed"\n          :direction="args.direction"\n          :align="args.align"\n          :className="args.className"\n        >\n          Dashed\n        </Divider>\n\n        <Divider\n          :width="args.width"\n          type="dotted"\n          :direction="args.direction"\n          :align="args.align"\n          :className="args.className"\n        >\n          Dotted\n        </Divider>\n      </div>\n    `\n  }),\n  // 控制 controls 中能控制的參數\n  parameters: {\n    controls: {\n      // include: [\'themeColor\', \'label\', \'value\', \'name\' ],\n      exclude: ["type"]\n    },\n    docs: {\n      source: {\n        transform: (src, storyContext) => {\n          const {\n            args\n          } = storyContext;\n          return [`<script setup>`, `import { Divider } from "@ded-wds-vue/ui";`, `<\/script>`, "", "<template>", "  <Divider", `    ${args.width ? `width="${args.width}"` : ""}`, `    type="solid"`, `    ${args.direction ? `direction="${args.direction}"` : ""}`, `    ${args.align ? `align="${args.align}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, "  >", `    Solid`, "  </Divider>", "  <Divider", `    ${args.width ? `width="${args.width}"` : ""}`, `    type="dashed"`, `    ${args.direction ? `direction="${args.direction}"` : ""}`, `    ${args.align ? `align="${args.align}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, "  >", `    Dashed`, "  </Divider>", "  <Divider", `    ${args.width ? `width="${args.width}"` : ""}`, `    type="dotted"`, `    ${args.direction ? `direction="${args.direction}"` : ""}`, `    ${args.align ? `align="${args.align}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, "  >", `    Dotted`, "  </Divider>", "</template>"].filter(Boolean).join("\\n").trim();\n        }\n      }\n    }\n  }\n}',
      ...(_l = (_k = DividerTypes.parameters) == null ? void 0 : _k.docs) == null ? void 0 : _l.source
    }
  }
};
DividerColumnDirection.parameters = {
  ...DividerColumnDirection.parameters,
  docs: {
    ...(_m = DividerColumnDirection.parameters) == null ? void 0 : _m.docs,
    source: {
      originalSource: '{\n  name: "線條方向-垂直",\n  args: {\n    width: "1px",\n    type: "solid",\n    // direction: "horizontal",\n    // align: "center",\n    // default: "vertical",\n    className: ""\n  },\n  render: args => ({\n    components: {\n      Divider\n    },\n    setup() {\n      // Create a ref for modelValue to be used with v-model\n      return {\n        args\n      };\n    },\n    template: `\n      <div style="display: flex; height: 100px">\n        <Divider\n          :themeColor="args.themeColor"\n          :width="args.width"\n          :type="args.type"\n          direction="vertical"\n          align="start"\n          :className="args.className"\n        >\n          Start\n        </Divider>\n\n        <Divider\n          :themeColor="args.themeColor"\n          :width="args.width"\n          :type="args.type"\n          direction="vertical"\n          align="center"\n          :className="args.className"\n        >\n          Center\n        </Divider>\n\n        <Divider\n          :themeColor="args.themeColor"\n          :width="args.width"\n          :type="args.type"\n          direction="vertical"\n          align="end"\n          :className="args.className"\n        >\n          End\n        </Divider>\n      </div>\n    `\n  }),\n  // 控制 controls 中能控制的參數\n  parameters: {\n    controls: {\n      // include: [\'themeColor\', \'label\', \'value\', \'name\' ],\n      exclude: ["direction", "align", "default"]\n    },\n    docs: {\n      source: {\n        transform: (src, storyContext) => {\n          const {\n            args\n          } = storyContext;\n          return [`<script setup>`, `import { Divider } from "@ded-wds-vue/ui";`, `<\/script>`, "", "<template>", `<div style="display:flex; height: 100px">`, "  <Divider", `    ${args.width ? `width="${args.width}"` : ""}`, `    ${args.type ? `type="${args.type}"` : ""}`, `    direction="vertical"`, `    align="start"`, `    ${args.className ? `className="${args.className}"` : ""}`, "  >", `    Start`, "  </Divider>", "  <Divider", `    ${args.width ? `width="${args.width}"` : ""}`, `    ${args.type ? `type="${args.type}"` : ""}`, `    direction="vertical"`, `    align="center"`, `    ${args.className ? `className="${args.className}"` : ""}`, "  >", `    Center`, "  </Divider>", "  <Divider", `    ${args.width ? `width="${args.width}"` : ""}`, `    ${args.type ? `type="${args.type}"` : ""}`, `    direction="vertical"`, `    align="end"`, `    ${args.className ? `className="${args.className}"` : ""}`, "  >", `    End`, "  </Divider>", `</div>`, "</template>"].filter(Boolean).join("\\n").trim();\n        }\n      }\n    }\n  }\n}',
      ...(_o = (_n = DividerColumnDirection.parameters) == null ? void 0 : _n.docs) == null ? void 0 : _o.source
    }
  }
};
DividerRowDirection.parameters = {
  ...DividerRowDirection.parameters,
  docs: {
    ...(_p = DividerRowDirection.parameters) == null ? void 0 : _p.docs,
    source: {
      originalSource: '{\n  name: "線條方向-水平",\n  args: {\n    width: "1px",\n    type: "solid",\n    // direction: "horizontal",\n    // align: "center",\n    // default: "horizontal",\n    className: ""\n  },\n  render: args => ({\n    components: {\n      Divider\n    },\n    setup() {\n      // Create a ref for modelValue to be used with v-model\n      return {\n        args\n      };\n    },\n    template: `\n      <div style="display: flex; flex-direction: column; height: 100px;">\n        <Divider\n          :width="args.width"\n          :type="args.type"\n          direction="horizontal"\n          align="start"\n          :className="args.className"\n        >\n          Start\n        </Divider>\n\n        <Divider\n          :width="args.width"\n          :type="args.type"\n          direction="horizontal"\n          align="center"\n          :className="args.className"\n        >\n          Center\n        </Divider>\n\n        <Divider\n          :width="args.width"\n          :type="args.type"\n          direction="horizontal"\n          align="end"\n          :className="args.className"\n        >\n          End\n        </Divider>\n      </div>\n    `\n  }),\n  // 控制 controls 中能控制的參數\n  parameters: {\n    controls: {\n      // include: [\'themeColor\', \'label\', \'value\', \'name\' ],\n      exclude: ["direction", "align", "default"]\n    },\n    docs: {\n      source: {\n        transform: (src, storyContext) => {\n          const {\n            args\n          } = storyContext;\n          return [`<script setup>`, `import { Divider } from "@ded-wds-vue/ui";`, `<\/script>`, "", "<template>", "  <Divider", `    ${args.width ? `width="${args.width}"` : ""}`, `    ${args.type ? `type="${args.type}"` : ""}`, `    direction="horizontal"`, `    align="start"`, `    ${args.className ? `className="${args.className}"` : ""}`, "  >", `    Start`, "  </Divider>", "  <Divider", `    ${args.width ? `width="${args.width}"` : ""}`, `    ${args.type ? `type="${args.type}"` : ""}`, `    direction="horizontal"`, `    align="center"`, `    ${args.className ? `className="${args.className}"` : ""}`, "  >", `    Center`, "  </Divider>", "  <Divider", `    ${args.width ? `width="${args.width}"` : ""}`, `    ${args.type ? `type="${args.type}"` : ""}`, `    direction="horizontal"`, `    align="end"`, `    ${args.className ? `className="${args.className}"` : ""}`, "  >", `    End`, "  </Divider>", "</template>"].filter(Boolean).join("\\n").trim();\n        }\n      }\n    }\n  }\n}',
      ...(_r = (_q = DividerRowDirection.parameters) == null ? void 0 : _q.docs) == null ? void 0 : _r.source
    }
  }
};
const __namedExportsOrder = ["DividerDefault", "DividerContent", "DividerWidth", "DividerTypes", "DividerColumnDirection", "DividerRowDirection"];
export {
  DividerColumnDirection,
  DividerContent,
  DividerDefault,
  DividerRowDirection,
  DividerTypes,
  DividerWidth,
  __namedExportsOrder,
  Divider_stories as default
};

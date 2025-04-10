var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l;
import { _ as _sfc_main$1 } from "./Badge-BEMwTXQE.js";
import { _ as _sfc_main } from "./Icon-B6pI5HKs.js";
import "./vue.esm-bundler-K7CzQrxl.js";
const Badge_stories = {
  title: "Component/Badge",
  component: _sfc_main$1,
  components: {
    Icon: _sfc_main
  },
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
    isShowDot: {
      description: "是否顯示圓點",
      control: {
        type: "boolean"
      }
    },
    value: {
      description: "數值",
      control: {
        type: "number"
      }
    },
    limit: {
      description: "數值顯示上限",
      control: {
        type: "number"
      }
    },
    className: {
      description: "客製化樣式",
      control: {
        type: "text"
      }
    },
    default: {
      description: "圖標插槽",
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
      title: "Badge",
      description: {
        component: "徽章組件的呈現及說明。"
      }
    }
  }
};
const BadgeDefault = {
  name: "預設項目",
  args: {
    themeColor: "error",
    isShowDot: false,
    value: 100,
    limit: 99,
    className: "",
    default: `<Icon name="SvgNotification" size="26"></Icon>`
  },
  render: (args) => ({
    components: {
      Badge: _sfc_main$1,
      Icon: _sfc_main
    },
    setup() {
      return {
        args
      };
    },
    template: `
      <Badge 
        :themeColor="args.themeColor"
        :isShowDot="args.isShowDot"
        :value="args.value"
        :limit="args.limit"
        :className="args.className"
      >   
        <Icon name="SvgNotification" size="26"></Icon>
      </Badge>
        `
  }),
  // 控制 controls 中能控制的參數
  parameters: {
    controls: {
      // include: ['themeColor', 'value', 'value', 'name' ],
    },
    docs: {
      source: {
        transform: (src, storyContext) => {
          const {
            args
          } = storyContext;
          return [`<script setup>`, `import { Badge, Icon } from "@ded-wds-vue/ui";`, `<\/script>`, "", "<template>", "  <Badge", `    ${args.themeColor ? `themeColor="${args.themeColor}"` : ""}`, `    ${args.isShowDot !== void 0 ? `:isShowDot="${args.isShowDot}"` : ""}`, `    ${args.value !== void 0 ? `:value="${args.value}"` : ""}`, `    ${args.limit !== void 0 ? `:limit="${args.limit}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, "  >", '    <Icon name="SvgNotification" size="26"></Icon>', "  </Badge>", "</template>"].join("\n").trim();
        }
      }
    }
  }
};
const BadgeStyle = {
  name: "外觀類型",
  args: {
    themeColor: "error",
    // isShowDot: false,
    value: 999,
    limit: 99,
    className: "",
    default: `<Icon name="SvgNotification" size="26"></Icon>`
  },
  render: (args) => ({
    components: {
      Badge: _sfc_main$1,
      Icon: _sfc_main
    },
    setup() {
      return {
        args
      };
    },
    template: `
      <div style="display:flex; gap:24px;">
        <Badge
          :themeColor="args.themeColor"
          :isShowDot= true
          :value="args.value"
          :limit="args.limit"
          :className="args.className"
        >
          <Icon name="SvgNotification" size="26"></Icon>
        </Badge>
        <Badge
          :themeColor="args.themeColor"
          :isShowDot= false
          :value="args.value"
          :limit="args.limit"
          :className="args.className"
        >
          <Icon name="SvgNotification" size="26"></Icon>
        </Badge>
      </div>
        `
  }),
  // 控制 controls 中能控制的參數
  parameters: {
    controls: {
      exclude: ["isShowDot"]
    },
    docs: {
      source: {
        transform: (src, storyContext) => {
          const {
            args
          } = storyContext;
          return [`<script setup>`, `import { Badge, Icon } from "@ded-wds-vue/ui";`, `<\/script>`, "", "<template>", "  <Badge", `    ${args.themeColor ? `themeColor="${args.themeColor}"` : ""}`, `    :isShowDot="true"`, `    ${args.value !== void 0 ? `:value="${args.value}"` : ""}`, `    ${args.limit !== void 0 ? `:limit="${args.limit}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, "  >", '    <Icon name="SvgNotification" size="26"></Icon>', "  </Badge>", "  <Badge", `    ${args.themeColor ? `themeColor="${args.themeColor}"` : ""}`, `    :isShowDot="false"`, `    ${args.value !== void 0 ? `:value="${args.value}"` : ""}`, `    ${args.limit !== void 0 ? `:limit="${args.limit}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, "  >", '    <Icon name="SvgNotification" size="26"></Icon>', "  </Badge>", "</template>"].join("\n").trim();
        }
      }
    }
  }
};
const BadgeLimit = {
  name: "數值顯示上限",
  args: {
    themeColor: "error",
    isShowDot: false,
    value: 999,
    limit: 99,
    className: "",
    default: `<Icon name="SvgNotification" size="26"></Icon>`
  },
  render: (args) => ({
    components: {
      Badge: _sfc_main$1,
      Icon: _sfc_main
    },
    setup() {
      return {
        args
      };
    },
    template: `
      <div style="display:flex; gap:60px; margin-bottom: 24px;">
        <Badge
          :themeColor="args.themeColor"
          :isShowDot="args.isShowDot"
          :value="98"
          :limit="99"
          :className="args.className"
        >
          <Icon name="SvgNotification" size="26"></Icon>
        </Badge>
        <Badge
          :themeColor="args.themeColor"
          :isShowDot="args.isShowDot"
          :value="100"
          :limit="99"
          :className="args.className"
        >
          <Icon name="SvgNotification" size="26"></Icon>
        </Badge>
      </div>
        `
  }),
  // 控制 controls 中能控制的參數
  parameters: {
    controls: {
      // include: ['themeColor', 'value', 'value', 'name' ],
      // exclude: [ 'default' ],
    },
    docs: {
      source: {
        transform: (src, storyContext) => {
          const {
            args
          } = storyContext;
          return [`<script setup>`, `import { Badge, Icon } from "@ded-wds-vue/ui";`, `<\/script>`, "", "<template>", "  <Badge", `    ${args.themeColor ? `themeColor="${args.themeColor}"` : ""}`, `    :isShowDot= false`, `    :value="98"`, `    :limit="99"`, `    ${args.className ? `className="${args.className}"` : ""}`, "  >", '    <Icon name="SvgNotification" size="26"></Icon>', "  </Badge>", "  <Badge", `    ${args.themeColor ? `themeColor="${args.themeColor}"` : ""}`, `    :isShowDot= false`, `    :value="100"`, `    :limit="99"`, `    ${args.className ? `className="${args.className}"` : ""}`, "  >", '    <Icon name="SvgNotification" size="26"></Icon>', "  </Badge>", "</template>"].join("\n").trim();
        }
      }
    }
  }
};
const BadgeThemeColor = {
  name: "主題色彩",
  args: {
    themeColor: "error",
    isShowDot: false,
    value: 999,
    limit: 99,
    className: "",
    default: `<Icon name="SvgNotification" size="26"></Icon>`
  },
  render: (args) => ({
    components: {
      Badge: _sfc_main$1,
      Icon: _sfc_main
    },
    setup() {
      return {
        args
      };
    },
    template: `
      <div style="display:flex; gap:56px; margin-bottom: 24px;">
        <Badge
          themeColor="primary"
          :isShowDot= true
          :value="args.value"
          :limit="args.limit"
          :className="args.className"
        >
          <Icon name="SvgNotification" size="26"></Icon>
        </Badge>
        <Badge
          themeColor="secondary"
          :isShowDot= true
          :value="args.value"
          :limit="args.limit"
          :className="args.className"
        >
          <Icon name="SvgNotification" size="26"></Icon>
        </Badge>
        <Badge
          themeColor="neutral"
          :isShowDot= true
          :value="args.value"
          :limit="args.limit"
          :className="args.className"
        >
          <Icon name="SvgNotification" size="26"></Icon>
        </Badge>
        <Badge
          themeColor="info"
          :isShowDot= true
          :value="args.value"
          :limit="args.limit"
          :className="args.className"
        >
          <Icon name="SvgNotification" size="26"></Icon>
        </Badge>
        <Badge
          themeColor="success"
          :isShowDot= true
          :value="args.value"
          :limit="args.limit"
          :className="args.className"
        >
          <Icon name="SvgNotification" size="26"></Icon>
        </Badge>
        <Badge
          themeColor="warning"
          :isShowDot= true
          :value="args.value"
          :limit="args.limit"
          :className="args.className"
        >
          <Icon name="SvgNotification" size="26"></Icon>
        </Badge>
        <Badge
          themeColor="error"
          :isShowDot= true
          :value="args.value"
          :limit="args.limit"
          :className="args.className"
        >
          <Icon name="SvgNotification" size="26"></Icon>
        </Badge>
      </div>
      <div style="display:flex; gap:56px">
        <Badge
          themeColor="primary"
          :isShowDot= false
          :value="args.value"
          :limit="args.limit"
          :className="args.className"
        >
          <Icon name="SvgNotification" size="26"></Icon>
        </Badge>
        <Badge
          themeColor="secondary"
          :isShowDot= false
          :value="args.value"
          :limit="args.limit"
          :className="args.className"
        >
          <Icon name="SvgNotification" size="26"></Icon>
        </Badge>
        <Badge
          themeColor="neutral"
          :isShowDot= false
          :value="args.value"
          :limit="args.limit"
          :className="args.className"
        >
          <Icon name="SvgNotification" size="26"></Icon>
        </Badge>
        <Badge
          themeColor="info"
          :isShowDot= false
          :value="args.value"
          :limit="args.limit"
          :className="args.className"
        >
          <Icon name="SvgNotification" size="26"></Icon>
        </Badge>
        <Badge
          themeColor="success"
          :isShowDot= false
          :value="args.value"
          :limit="args.limit"
          :className="args.className"
        >
          <Icon name="SvgNotification" size="26"></Icon>
        </Badge>
        <Badge
          themeColor="warning"
          :isShowDot= false
          :value="args.value"
          :limit="args.limit"
          :className="args.className"
        >
          <Icon name="SvgNotification" size="26"></Icon>
        </Badge>
        <Badge
          themeColor="error"
          :isShowDot= false
          :value="args.value"
          :limit="args.limit"
          :className="args.className"
        >
          <Icon name="SvgNotification" size="26"></Icon>
        </Badge>
      </div>
    `
  }),
  // 控制 controls 中能控制的參數
  parameters: {
    controls: {
      // include: ['themeColor', 'value', 'value', 'name' ],
      exclude: ["themeColor", "isShowDot"]
    },
    docs: {
      source: {
        transform: (src, storyContext) => {
          const {
            args
          } = storyContext;
          return [`<script setup>`, `import { Badge, Icon } from "@ded-wds-vue/ui";`, `<\/script>`, "", "<template>", "  <Badge", `    themeColor="primary"`, `    :isShowDot= true`, `    ${args.value !== void 0 ? `:value="${args.value}"` : ""}`, `    ${args.limit !== void 0 ? `:limit="${args.limit}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, "  >", '    <Icon name="SvgNotification" size="26"></Icon>', "  </Badge>", "  <Badge", `    themeColor="secondary"`, `    :isShowDot= true`, `    ${args.value !== void 0 ? `:value="${args.value}"` : ""}`, `    ${args.limit !== void 0 ? `:limit="${args.limit}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, "  >", '    <Icon name="SvgNotification" size="26"></Icon>', "  </Badge>", "  <Badge", `    themeColor="neutral"`, `    :isShowDot= true`, `    ${args.value !== void 0 ? `:value="${args.value}"` : ""}`, `    ${args.limit !== void 0 ? `:limit="${args.limit}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, "  >", '    <Icon name="SvgNotification" size="26"></Icon>', "  </Badge>", "  <Badge", `    themeColor="info"`, `    :isShowDot= true`, `    ${args.value !== void 0 ? `:value="${args.value}"` : ""}`, `    ${args.limit !== void 0 ? `:limit="${args.limit}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, "  >", '    <Icon name="SvgNotification" size="26"></Icon>', "  </Badge>", "  <Badge", `    themeColor="success"`, `    :isShowDot= true`, `    ${args.value !== void 0 ? `:value="${args.value}"` : ""}`, `    ${args.limit !== void 0 ? `:limit="${args.limit}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, "  >", '    <Icon name="SvgNotification" size="26"></Icon>', "  </Badge>", "  <Badge", `    themeColor="warning"`, `    :isShowDot= true`, `    ${args.value !== void 0 ? `:value="${args.value}"` : ""}`, `    ${args.limit !== void 0 ? `:limit="${args.limit}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, "  >", '    <Icon name="SvgNotification" size="26"></Icon>', "  </Badge>", "  <Badge", `    themeColor="error"`, `    :isShowDot= true`, `    ${args.value !== void 0 ? `:value="${args.value}"` : ""}`, `    ${args.limit !== void 0 ? `:limit="${args.limit}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, "  >", '    <Icon name="SvgNotification" size="26"></Icon>', "  </Badge>", "  <Badge", `    themeColor="primary"`, `    :isShowDot= false`, `    ${args.value !== void 0 ? `:value="${args.value}"` : ""}`, `    ${args.limit !== void 0 ? `:limit="${args.limit}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, "  >", '    <Icon name="SvgNotification" size="26"></Icon>', "  </Badge>", "  <Badge", `    themeColor="secondary"`, `    :isShowDot= false`, `    ${args.value !== void 0 ? `:value="${args.value}"` : ""}`, `    ${args.limit !== void 0 ? `:limit="${args.limit}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, "  >", '    <Icon name="SvgNotification" size="26"></Icon>', "  </Badge>", "  <Badge", `    themeColor="neutral"`, `    :isShowDot= false`, `    ${args.value !== void 0 ? `:value="${args.value}"` : ""}`, `    ${args.limit !== void 0 ? `:limit="${args.limit}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, "  >", '    <Icon name="SvgNotification" size="26"></Icon>', "  </Badge>", "  <Badge", `    themeColor="info"`, `    :isShowDot= false`, `    ${args.value !== void 0 ? `:value="${args.value}"` : ""}`, `    ${args.limit !== void 0 ? `:limit="${args.limit}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, "  >", '    <Icon name="SvgNotification" size="26"></Icon>', "  </Badge>", "  <Badge", `    themeColor="success"`, `    :isShowDot= false`, `    ${args.value !== void 0 ? `:value="${args.value}"` : ""}`, `    ${args.limit !== void 0 ? `:limit="${args.limit}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, "  >", '    <Icon name="SvgNotification" size="26"></Icon>', "  </Badge>", "  <Badge", `    themeColor="warning"`, `    :isShowDot= false`, `    ${args.value !== void 0 ? `:value="${args.value}"` : ""}`, `    ${args.limit !== void 0 ? `:limit="${args.limit}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, "  >", '    <Icon name="SvgNotification" size="26"></Icon>', "  </Badge>", "  <Badge", `    themeColor="error"`, `    :isShowDot= false`, `    ${args.value !== void 0 ? `:value="${args.value}"` : ""}`, `    ${args.limit !== void 0 ? `:limit="${args.limit}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, "  >", '    <Icon name="SvgNotification" size="26"></Icon>', "  </Badge>", "</template>"].join("\n").trim();
        }
      }
    }
  }
};
BadgeDefault.parameters = {
  ...BadgeDefault.parameters,
  docs: {
    ...(_a = BadgeDefault.parameters) == null ? void 0 : _a.docs,
    source: {
      originalSource: '{\n  name: "預設項目",\n  args: {\n    themeColor: "error",\n    isShowDot: false,\n    value: 100,\n    limit: 99,\n    className: "",\n    default: `<Icon name="SvgNotification" size="26"></Icon>`\n  },\n  render: args => ({\n    components: {\n      Badge,\n      Icon\n    },\n    setup() {\n      return {\n        args\n      };\n    },\n    template: `\n      <Badge \n        :themeColor="args.themeColor"\n        :isShowDot="args.isShowDot"\n        :value="args.value"\n        :limit="args.limit"\n        :className="args.className"\n      >   \n        <Icon name="SvgNotification" size="26"></Icon>\n      </Badge>\n        `\n  }),\n  // 控制 controls 中能控制的參數\n  parameters: {\n    controls: {\n      // include: [\'themeColor\', \'value\', \'value\', \'name\' ],\n    },\n    docs: {\n      source: {\n        transform: (src, storyContext) => {\n          const {\n            args\n          } = storyContext;\n          return [`<script setup>`, `import { Badge, Icon } from "@ded-wds-vue/ui";`, `<\/script>`, "", "<template>", "  <Badge", `    ${args.themeColor ? `themeColor="${args.themeColor}"` : ""}`, `    ${args.isShowDot !== undefined ? `:isShowDot="${args.isShowDot}"` : ""}`, `    ${args.value !== undefined ? `:value="${args.value}"` : ""}`, `    ${args.limit !== undefined ? `:limit="${args.limit}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, "  >", "    <Icon name=\\"SvgNotification\\" size=\\"26\\"></Icon>", "  </Badge>", "</template>"].join("\\n").trim();\n        }\n      }\n    }\n  }\n}',
      ...(_c = (_b = BadgeDefault.parameters) == null ? void 0 : _b.docs) == null ? void 0 : _c.source
    }
  }
};
BadgeStyle.parameters = {
  ...BadgeStyle.parameters,
  docs: {
    ...(_d = BadgeStyle.parameters) == null ? void 0 : _d.docs,
    source: {
      originalSource: '{\n  name: "外觀類型",\n  args: {\n    themeColor: "error",\n    // isShowDot: false,\n    value: 999,\n    limit: 99,\n    className: "",\n    default: `<Icon name="SvgNotification" size="26"></Icon>`\n  },\n  render: args => ({\n    components: {\n      Badge,\n      Icon\n    },\n    setup() {\n      return {\n        args\n      };\n    },\n    template: `\n      <div style="display:flex; gap:24px;">\n        <Badge\n          :themeColor="args.themeColor"\n          :isShowDot= true\n          :value="args.value"\n          :limit="args.limit"\n          :className="args.className"\n        >\n          <Icon name="SvgNotification" size="26"></Icon>\n        </Badge>\n        <Badge\n          :themeColor="args.themeColor"\n          :isShowDot= false\n          :value="args.value"\n          :limit="args.limit"\n          :className="args.className"\n        >\n          <Icon name="SvgNotification" size="26"></Icon>\n        </Badge>\n      </div>\n        `\n  }),\n  // 控制 controls 中能控制的參數\n  parameters: {\n    controls: {\n      exclude: ["isShowDot"]\n    },\n    docs: {\n      source: {\n        transform: (src, storyContext) => {\n          const {\n            args\n          } = storyContext;\n          return [`<script setup>`, `import { Badge, Icon } from "@ded-wds-vue/ui";`, `<\/script>`, "", "<template>", "  <Badge", `    ${args.themeColor ? `themeColor="${args.themeColor}"` : ""}`, `    :isShowDot="true"`, `    ${args.value !== undefined ? `:value="${args.value}"` : ""}`, `    ${args.limit !== undefined ? `:limit="${args.limit}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, "  >", "    <Icon name=\\"SvgNotification\\" size=\\"26\\"></Icon>", "  </Badge>", "  <Badge", `    ${args.themeColor ? `themeColor="${args.themeColor}"` : ""}`, `    :isShowDot="false"`, `    ${args.value !== undefined ? `:value="${args.value}"` : ""}`, `    ${args.limit !== undefined ? `:limit="${args.limit}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, "  >", "    <Icon name=\\"SvgNotification\\" size=\\"26\\"></Icon>", "  </Badge>", "</template>"].join("\\n").trim();\n        }\n      }\n    }\n  }\n}',
      ...(_f = (_e = BadgeStyle.parameters) == null ? void 0 : _e.docs) == null ? void 0 : _f.source
    }
  }
};
BadgeLimit.parameters = {
  ...BadgeLimit.parameters,
  docs: {
    ...(_g = BadgeLimit.parameters) == null ? void 0 : _g.docs,
    source: {
      originalSource: '{\n  name: "數值顯示上限",\n  args: {\n    themeColor: "error",\n    isShowDot: false,\n    value: 999,\n    limit: 99,\n    className: "",\n    default: `<Icon name="SvgNotification" size="26"></Icon>`\n  },\n  render: args => ({\n    components: {\n      Badge,\n      Icon\n    },\n    setup() {\n      return {\n        args\n      };\n    },\n    template: `\n      <div style="display:flex; gap:60px; margin-bottom: 24px;">\n        <Badge\n          :themeColor="args.themeColor"\n          :isShowDot="args.isShowDot"\n          :value="98"\n          :limit="99"\n          :className="args.className"\n        >\n          <Icon name="SvgNotification" size="26"></Icon>\n        </Badge>\n        <Badge\n          :themeColor="args.themeColor"\n          :isShowDot="args.isShowDot"\n          :value="100"\n          :limit="99"\n          :className="args.className"\n        >\n          <Icon name="SvgNotification" size="26"></Icon>\n        </Badge>\n      </div>\n        `\n  }),\n  // 控制 controls 中能控制的參數\n  parameters: {\n    controls: {\n      // include: [\'themeColor\', \'value\', \'value\', \'name\' ],\n      // exclude: [ \'default\' ],\n    },\n    docs: {\n      source: {\n        transform: (src, storyContext) => {\n          const {\n            args\n          } = storyContext;\n          return [`<script setup>`, `import { Badge, Icon } from "@ded-wds-vue/ui";`, `<\/script>`, "", "<template>", "  <Badge", `    ${args.themeColor ? `themeColor="${args.themeColor}"` : ""}`, `    :isShowDot= false`, `    :value="98"`, `    :limit="99"`, `    ${args.className ? `className="${args.className}"` : ""}`, "  >", "    <Icon name=\\"SvgNotification\\" size=\\"26\\"></Icon>", "  </Badge>", "  <Badge", `    ${args.themeColor ? `themeColor="${args.themeColor}"` : ""}`, `    :isShowDot= false`, `    :value="100"`, `    :limit="99"`, `    ${args.className ? `className="${args.className}"` : ""}`, "  >", "    <Icon name=\\"SvgNotification\\" size=\\"26\\"></Icon>", "  </Badge>", "</template>"].join("\\n").trim();\n        }\n      }\n    }\n  }\n}',
      ...(_i = (_h = BadgeLimit.parameters) == null ? void 0 : _h.docs) == null ? void 0 : _i.source
    }
  }
};
BadgeThemeColor.parameters = {
  ...BadgeThemeColor.parameters,
  docs: {
    ...(_j = BadgeThemeColor.parameters) == null ? void 0 : _j.docs,
    source: {
      originalSource: '{\n  name: "主題色彩",\n  args: {\n    themeColor: "error",\n    isShowDot: false,\n    value: 999,\n    limit: 99,\n    className: "",\n    default: `<Icon name="SvgNotification" size="26"></Icon>`\n  },\n  render: args => ({\n    components: {\n      Badge,\n      Icon\n    },\n    setup() {\n      return {\n        args\n      };\n    },\n    template: `\n      <div style="display:flex; gap:56px; margin-bottom: 24px;">\n        <Badge\n          themeColor="primary"\n          :isShowDot= true\n          :value="args.value"\n          :limit="args.limit"\n          :className="args.className"\n        >\n          <Icon name="SvgNotification" size="26"></Icon>\n        </Badge>\n        <Badge\n          themeColor="secondary"\n          :isShowDot= true\n          :value="args.value"\n          :limit="args.limit"\n          :className="args.className"\n        >\n          <Icon name="SvgNotification" size="26"></Icon>\n        </Badge>\n        <Badge\n          themeColor="neutral"\n          :isShowDot= true\n          :value="args.value"\n          :limit="args.limit"\n          :className="args.className"\n        >\n          <Icon name="SvgNotification" size="26"></Icon>\n        </Badge>\n        <Badge\n          themeColor="info"\n          :isShowDot= true\n          :value="args.value"\n          :limit="args.limit"\n          :className="args.className"\n        >\n          <Icon name="SvgNotification" size="26"></Icon>\n        </Badge>\n        <Badge\n          themeColor="success"\n          :isShowDot= true\n          :value="args.value"\n          :limit="args.limit"\n          :className="args.className"\n        >\n          <Icon name="SvgNotification" size="26"></Icon>\n        </Badge>\n        <Badge\n          themeColor="warning"\n          :isShowDot= true\n          :value="args.value"\n          :limit="args.limit"\n          :className="args.className"\n        >\n          <Icon name="SvgNotification" size="26"></Icon>\n        </Badge>\n        <Badge\n          themeColor="error"\n          :isShowDot= true\n          :value="args.value"\n          :limit="args.limit"\n          :className="args.className"\n        >\n          <Icon name="SvgNotification" size="26"></Icon>\n        </Badge>\n      </div>\n      <div style="display:flex; gap:56px">\n        <Badge\n          themeColor="primary"\n          :isShowDot= false\n          :value="args.value"\n          :limit="args.limit"\n          :className="args.className"\n        >\n          <Icon name="SvgNotification" size="26"></Icon>\n        </Badge>\n        <Badge\n          themeColor="secondary"\n          :isShowDot= false\n          :value="args.value"\n          :limit="args.limit"\n          :className="args.className"\n        >\n          <Icon name="SvgNotification" size="26"></Icon>\n        </Badge>\n        <Badge\n          themeColor="neutral"\n          :isShowDot= false\n          :value="args.value"\n          :limit="args.limit"\n          :className="args.className"\n        >\n          <Icon name="SvgNotification" size="26"></Icon>\n        </Badge>\n        <Badge\n          themeColor="info"\n          :isShowDot= false\n          :value="args.value"\n          :limit="args.limit"\n          :className="args.className"\n        >\n          <Icon name="SvgNotification" size="26"></Icon>\n        </Badge>\n        <Badge\n          themeColor="success"\n          :isShowDot= false\n          :value="args.value"\n          :limit="args.limit"\n          :className="args.className"\n        >\n          <Icon name="SvgNotification" size="26"></Icon>\n        </Badge>\n        <Badge\n          themeColor="warning"\n          :isShowDot= false\n          :value="args.value"\n          :limit="args.limit"\n          :className="args.className"\n        >\n          <Icon name="SvgNotification" size="26"></Icon>\n        </Badge>\n        <Badge\n          themeColor="error"\n          :isShowDot= false\n          :value="args.value"\n          :limit="args.limit"\n          :className="args.className"\n        >\n          <Icon name="SvgNotification" size="26"></Icon>\n        </Badge>\n      </div>\n    `\n  }),\n  // 控制 controls 中能控制的參數\n  parameters: {\n    controls: {\n      // include: [\'themeColor\', \'value\', \'value\', \'name\' ],\n      exclude: ["themeColor", "isShowDot"]\n    },\n    docs: {\n      source: {\n        transform: (src, storyContext) => {\n          const {\n            args\n          } = storyContext;\n          return [`<script setup>`, `import { Badge, Icon } from "@ded-wds-vue/ui";`, `<\/script>`, "", "<template>", "  <Badge", `    themeColor="primary"`, `    :isShowDot= true`, `    ${args.value !== undefined ? `:value="${args.value}"` : ""}`, `    ${args.limit !== undefined ? `:limit="${args.limit}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, "  >", "    <Icon name=\\"SvgNotification\\" size=\\"26\\"></Icon>", "  </Badge>", "  <Badge", `    themeColor="secondary"`, `    :isShowDot= true`, `    ${args.value !== undefined ? `:value="${args.value}"` : ""}`, `    ${args.limit !== undefined ? `:limit="${args.limit}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, "  >", "    <Icon name=\\"SvgNotification\\" size=\\"26\\"></Icon>", "  </Badge>", "  <Badge", `    themeColor="neutral"`, `    :isShowDot= true`, `    ${args.value !== undefined ? `:value="${args.value}"` : ""}`, `    ${args.limit !== undefined ? `:limit="${args.limit}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, "  >", "    <Icon name=\\"SvgNotification\\" size=\\"26\\"></Icon>", "  </Badge>", "  <Badge", `    themeColor="info"`, `    :isShowDot= true`, `    ${args.value !== undefined ? `:value="${args.value}"` : ""}`, `    ${args.limit !== undefined ? `:limit="${args.limit}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, "  >", "    <Icon name=\\"SvgNotification\\" size=\\"26\\"></Icon>", "  </Badge>", "  <Badge", `    themeColor="success"`, `    :isShowDot= true`, `    ${args.value !== undefined ? `:value="${args.value}"` : ""}`, `    ${args.limit !== undefined ? `:limit="${args.limit}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, "  >", "    <Icon name=\\"SvgNotification\\" size=\\"26\\"></Icon>", "  </Badge>", "  <Badge", `    themeColor="warning"`, `    :isShowDot= true`, `    ${args.value !== undefined ? `:value="${args.value}"` : ""}`, `    ${args.limit !== undefined ? `:limit="${args.limit}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, "  >", "    <Icon name=\\"SvgNotification\\" size=\\"26\\"></Icon>", "  </Badge>", "  <Badge", `    themeColor="error"`, `    :isShowDot= true`, `    ${args.value !== undefined ? `:value="${args.value}"` : ""}`, `    ${args.limit !== undefined ? `:limit="${args.limit}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, "  >", "    <Icon name=\\"SvgNotification\\" size=\\"26\\"></Icon>", "  </Badge>", "  <Badge", `    themeColor="primary"`, `    :isShowDot= false`, `    ${args.value !== undefined ? `:value="${args.value}"` : ""}`, `    ${args.limit !== undefined ? `:limit="${args.limit}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, "  >", "    <Icon name=\\"SvgNotification\\" size=\\"26\\"></Icon>", "  </Badge>", "  <Badge", `    themeColor="secondary"`, `    :isShowDot= false`, `    ${args.value !== undefined ? `:value="${args.value}"` : ""}`, `    ${args.limit !== undefined ? `:limit="${args.limit}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, "  >", "    <Icon name=\\"SvgNotification\\" size=\\"26\\"></Icon>", "  </Badge>", "  <Badge", `    themeColor="neutral"`, `    :isShowDot= false`, `    ${args.value !== undefined ? `:value="${args.value}"` : ""}`, `    ${args.limit !== undefined ? `:limit="${args.limit}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, "  >", "    <Icon name=\\"SvgNotification\\" size=\\"26\\"></Icon>", "  </Badge>", "  <Badge", `    themeColor="info"`, `    :isShowDot= false`, `    ${args.value !== undefined ? `:value="${args.value}"` : ""}`, `    ${args.limit !== undefined ? `:limit="${args.limit}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, "  >", "    <Icon name=\\"SvgNotification\\" size=\\"26\\"></Icon>", "  </Badge>", "  <Badge", `    themeColor="success"`, `    :isShowDot= false`, `    ${args.value !== undefined ? `:value="${args.value}"` : ""}`, `    ${args.limit !== undefined ? `:limit="${args.limit}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, "  >", "    <Icon name=\\"SvgNotification\\" size=\\"26\\"></Icon>", "  </Badge>", "  <Badge", `    themeColor="warning"`, `    :isShowDot= false`, `    ${args.value !== undefined ? `:value="${args.value}"` : ""}`, `    ${args.limit !== undefined ? `:limit="${args.limit}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, "  >", "    <Icon name=\\"SvgNotification\\" size=\\"26\\"></Icon>", "  </Badge>", "  <Badge", `    themeColor="error"`, `    :isShowDot= false`, `    ${args.value !== undefined ? `:value="${args.value}"` : ""}`, `    ${args.limit !== undefined ? `:limit="${args.limit}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, "  >", "    <Icon name=\\"SvgNotification\\" size=\\"26\\"></Icon>", "  </Badge>", "</template>"].join("\\n").trim();\n        }\n      }\n    }\n  }\n}',
      ...(_l = (_k = BadgeThemeColor.parameters) == null ? void 0 : _k.docs) == null ? void 0 : _l.source
    }
  }
};
const __namedExportsOrder = ["BadgeDefault", "BadgeStyle", "BadgeLimit", "BadgeThemeColor"];
export {
  BadgeDefault,
  BadgeLimit,
  BadgeStyle,
  BadgeThemeColor,
  __namedExportsOrder,
  Badge_stories as default
};

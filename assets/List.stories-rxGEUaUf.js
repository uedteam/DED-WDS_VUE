var _a, _b, _c, _d, _e, _f, _g, _h, _i;
import { _ as _sfc_main } from "./List-C992H4xg.js";
import { a as action } from "./index-6lyHBX71.js";
import "./vue.esm-bundler-K7CzQrxl.js";
import "./Icon-B6pI5HKs.js";
import "./v4-CjlX8hrF.js";
function formatDataSource(dataSource2) {
  return `    ${dataSource2.map((item) => {
    const properties = [item.label ? `label: "${item.label}"` : "", item.value ? `value: "${item.value}"` : "", item.href ? `href: "${item.href}"` : "", item.prefix ? `prefix: "${item.prefix}"` : "", item.isDisabled !== void 0 ? `isDisabled: ${item.isDisabled}` : ""].filter(Boolean).join(",\n        ");
    return `{
        ${properties}
    }`;
  }).join(",\n    ")}`;
}
const dataSource = [{
  label: "Option1",
  value: "option1",
  prefix: "SvgAccount",
  isDisabled: true
}, {
  label: "Option2",
  value: "option2",
  href: "#",
  prefix: "SvgAccount"
}, {
  label: "Option3",
  value: "option3",
  href: "#",
  prefix: "SvgAccount"
}];
const List_stories = {
  title: "Component/List",
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
          summary: "{ label: string, value: string, href: string, prefix: string, isDisabled: boolean }[]"
        }
      }
    },
    hasOutline: {
      description: "是否為選單",
      control: {
        type: "boolean"
      }
    },
    hasDivider: {
      description: "是否有分隔線",
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
    onSelect: {
      description: "選擇項目時觸發的事件",
      control: false,
      table: {
        category: "EVENTS",
        type: {
          summary: "emit"
        },
        defaultValue: {
          summary: () => ({})
        }
      }
    }
  },
  parameters: {
    // 自動文件
    docs: {
      title: "List",
      description: {
        component: "清單組件的呈現及說明。"
      }
    }
  }
};
const ListDefaultStory = {
  name: "預設項目",
  args: {
    dataSource,
    hasOutline: false,
    hasDivider: false,
    className: ""
  },
  render: (args) => ({
    components: {
      List: _sfc_main
    },
    setup() {
      return {
        args,
        handleItemClick: action("onSelect")
      };
    },
    template: `
      <List
        :dataSource="args.dataSource"
        :hasOutline="args.hasOutline"
        :hasDivider="args.hasDivider"
        :className="args.className"
        @onSelect="handleItemClick"
      >
      </List>
    `
  }),
  // 控制 controls 中能控制的參數
  parameters: {
    controls: {
      exclude: ["default"]
    },
    docs: {
      source: {
        transform: (src, storyContext) => {
          const {
            args
          } = storyContext;
          const dataSourceString = formatDataSource(args.dataSource);
          return [`<script setup>`, `import { List } from "@ded-wds-vue/ui";`, `const dataSource = [`, `${dataSourceString}`, `];`, `const handleItemClick = () => {};`, `<\/script>`, "", "<template>", `  <List`, `    :dataSource="dataSource"`, `    ${args.hasOutline !== void 0 ? `:hasOutline="${args.hasOutline}"` : ""}`, `    ${args.hasDivider !== void 0 ? `:hasDivider="${args.hasDivider}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, `    @onSelect="handleItemClick()"`, `  ></List>`, "</template>"].filter(Boolean).join("\n").trim();
        }
      }
    }
  }
};
const ListOutLineStory = {
  name: "清單樣式-外框",
  args: {
    dataSource,
    hasDivider: false,
    className: ""
  },
  render: (args) => ({
    components: {
      List: _sfc_main
    },
    setup() {
      return {
        args,
        handleItemClick: action("onSelect")
      };
    },
    template: `
      <List
        :dataSource="args.dataSource"
        :hasOutline="true"
        :hasDivider="args.hasDivider"
        :className="args.className"
        @onSelect="handleItemClick"
      >
      </List>
    `
  }),
  // 控制 controls 中能控制的參數
  parameters: {
    controls: {
      exclude: ["hasOutline", "default"]
    },
    docs: {
      source: {
        transform: (src, storyContext) => {
          const {
            args
          } = storyContext;
          const dataSourceString = formatDataSource(args.dataSource);
          return [`<script setup>`, `import { List } from "@ded-wds-vue/ui";`, `const dataSource = [`, `${dataSourceString}`, `];`, `const handleItemClick = () => {};`, `<\/script>`, "", "<template>", `  <List`, `    :dataSource="dataSource"`, `    :hasOutline="true"`, `    ${args.hasDivider !== void 0 ? `:hasDivider="${args.hasDivider}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, `    @onSelect="handleItemClick()"`, `  ></List>`, "</template>"].filter(Boolean).join("\n").trim();
        }
      }
    }
  }
};
const ListDividerStory = {
  name: "清單樣式-分隔線",
  args: {
    dataSource,
    hasOutline: false,
    // hasDivider: false,
    className: ""
  },
  render: (args) => ({
    components: {
      List: _sfc_main
    },
    setup() {
      return {
        args,
        handleItemClick: action("onSelect")
      };
    },
    template: `
      <List
        :dataSource="args.dataSource"
        :hasOutline="args.hasOutline"
        :hasDivider="true"
        :className="args.className"
        @onSelect="handleItemClick"
      >
      </List>
    `
  }),
  // 控制 controls 中能控制的參數
  parameters: {
    controls: {
      exclude: ["hasDivider", "default"]
    },
    docs: {
      source: {
        transform: (src, storyContext) => {
          const {
            args
          } = storyContext;
          const dataSourceString = formatDataSource(args.dataSource);
          return [`<script setup>`, `import { List } from "@ded-wds-vue/ui";`, `const dataSource = [`, `${dataSourceString}`, `];`, `const handleItemClick = () => {};`, `<\/script>`, "", "<template>", `  <List`, `    :dataSource="dataSource"`, `    ${args.hasOutline !== void 0 ? `:hasOutline="${args.hasOutline}"` : ""}`, `    :hasDivider="true"`, `    ${args.className ? `className="${args.className}"` : ""}`, `    @onSelect="handleItemClick()"`, `  ></List>`, "</template>"].filter(Boolean).join("\n").trim();
        }
      }
    }
  }
};
ListDefaultStory.parameters = {
  ...ListDefaultStory.parameters,
  docs: {
    ...(_a = ListDefaultStory.parameters) == null ? void 0 : _a.docs,
    source: {
      originalSource: '{\n  name: "預設項目",\n  args: {\n    dataSource,\n    hasOutline: false,\n    hasDivider: false,\n    className: ""\n  },\n  render: args => ({\n    components: {\n      List\n    },\n    setup() {\n      return {\n        args,\n        handleItemClick: action("onSelect")\n      };\n    },\n    template: `\n      <List\n        :dataSource="args.dataSource"\n        :hasOutline="args.hasOutline"\n        :hasDivider="args.hasDivider"\n        :className="args.className"\n        @onSelect="handleItemClick"\n      >\n      </List>\n    `\n  }),\n  // 控制 controls 中能控制的參數\n  parameters: {\n    controls: {\n      exclude: ["default"]\n    },\n    docs: {\n      source: {\n        transform: (src, storyContext) => {\n          const {\n            args\n          } = storyContext;\n          const dataSourceString = formatDataSource(args.dataSource);\n          return [`<script setup>`, `import { List } from "@ded-wds-vue/ui";`, `const dataSource = [`, `${dataSourceString}`, `];`, `const handleItemClick = () => {};`, `<\/script>`, "", "<template>", `  <List`, `    :dataSource="dataSource"`, `    ${args.hasOutline !== undefined ? `:hasOutline="${args.hasOutline}"` : ""}`, `    ${args.hasDivider !== undefined ? `:hasDivider="${args.hasDivider}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, `    @onSelect="handleItemClick()"`, `  ></List>`, "</template>"].filter(Boolean).join("\\n").trim();\n        }\n      }\n    }\n  }\n}',
      ...(_c = (_b = ListDefaultStory.parameters) == null ? void 0 : _b.docs) == null ? void 0 : _c.source
    }
  }
};
ListOutLineStory.parameters = {
  ...ListOutLineStory.parameters,
  docs: {
    ...(_d = ListOutLineStory.parameters) == null ? void 0 : _d.docs,
    source: {
      originalSource: '{\n  name: "清單樣式-外框",\n  args: {\n    dataSource,\n    hasDivider: false,\n    className: ""\n  },\n  render: args => ({\n    components: {\n      List\n    },\n    setup() {\n      return {\n        args,\n        handleItemClick: action("onSelect")\n      };\n    },\n    template: `\n      <List\n        :dataSource="args.dataSource"\n        :hasOutline="true"\n        :hasDivider="args.hasDivider"\n        :className="args.className"\n        @onSelect="handleItemClick"\n      >\n      </List>\n    `\n  }),\n  // 控制 controls 中能控制的參數\n  parameters: {\n    controls: {\n      exclude: ["hasOutline", "default"]\n    },\n    docs: {\n      source: {\n        transform: (src, storyContext) => {\n          const {\n            args\n          } = storyContext;\n          const dataSourceString = formatDataSource(args.dataSource);\n          return [`<script setup>`, `import { List } from "@ded-wds-vue/ui";`, `const dataSource = [`, `${dataSourceString}`, `];`, `const handleItemClick = () => {};`, `<\/script>`, "", "<template>", `  <List`, `    :dataSource="dataSource"`, `    :hasOutline="true"`, `    ${args.hasDivider !== undefined ? `:hasDivider="${args.hasDivider}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, `    @onSelect="handleItemClick()"`, `  ></List>`, "</template>"].filter(Boolean).join("\\n").trim();\n        }\n      }\n    }\n  }\n}',
      ...(_f = (_e = ListOutLineStory.parameters) == null ? void 0 : _e.docs) == null ? void 0 : _f.source
    }
  }
};
ListDividerStory.parameters = {
  ...ListDividerStory.parameters,
  docs: {
    ...(_g = ListDividerStory.parameters) == null ? void 0 : _g.docs,
    source: {
      originalSource: '{\n  name: "清單樣式-分隔線",\n  args: {\n    dataSource,\n    hasOutline: false,\n    // hasDivider: false,\n    className: ""\n  },\n  render: args => ({\n    components: {\n      List\n    },\n    setup() {\n      return {\n        args,\n        handleItemClick: action("onSelect")\n      };\n    },\n    template: `\n      <List\n        :dataSource="args.dataSource"\n        :hasOutline="args.hasOutline"\n        :hasDivider="true"\n        :className="args.className"\n        @onSelect="handleItemClick"\n      >\n      </List>\n    `\n  }),\n  // 控制 controls 中能控制的參數\n  parameters: {\n    controls: {\n      exclude: ["hasDivider", "default"]\n    },\n    docs: {\n      source: {\n        transform: (src, storyContext) => {\n          const {\n            args\n          } = storyContext;\n          const dataSourceString = formatDataSource(args.dataSource);\n          return [`<script setup>`, `import { List } from "@ded-wds-vue/ui";`, `const dataSource = [`, `${dataSourceString}`, `];`, `const handleItemClick = () => {};`, `<\/script>`, "", "<template>", `  <List`, `    :dataSource="dataSource"`, `    ${args.hasOutline !== undefined ? `:hasOutline="${args.hasOutline}"` : ""}`, `    :hasDivider="true"`, `    ${args.className ? `className="${args.className}"` : ""}`, `    @onSelect="handleItemClick()"`, `  ></List>`, "</template>"].filter(Boolean).join("\\n").trim();\n        }\n      }\n    }\n  }\n}',
      ...(_i = (_h = ListDividerStory.parameters) == null ? void 0 : _h.docs) == null ? void 0 : _i.source
    }
  }
};
const __namedExportsOrder = ["ListDefaultStory", "ListOutLineStory", "ListDividerStory"];
export {
  ListDefaultStory,
  ListDividerStory,
  ListOutLineStory,
  __namedExportsOrder,
  List_stories as default
};

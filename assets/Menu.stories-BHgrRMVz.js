var _a, _b, _c;
import { _ as _sfc_main } from "./Menu-DmxDrp5J.js";
import "./vue.esm-bundler-K7CzQrxl.js";
import "./Icon-B6pI5HKs.js";
function formatDataSource(dataSource) {
  return `        ${dataSource.map((item) => `{
            label: "${item.label}",
            path: "${item.path}",
            prefix: "${item.prefix}",
            ${item.order !== void 0 && item.order !== null ? `order: "${item.order}",` : ""}
            ${item.isDisabled !== void 0 ? `isDisabled: ${item.isDisabled},` : ""}
            ${item.children && item.children.length ? `children: [
                ${item.children.map((child) => `{
                    label: "${child.label}",
                    path: "${child.path}",
                    prefix: "${child.prefix}",
                    ${child.order !== void 0 && child.order !== null ? `order: "${child.order}"` : ""},
                    ${child.isDisabled !== void 0 ? `isDisabled: ${child.isDisabled},` : ""}
                }`).join(",\n                ")}
            ]` : ""}
        }`).join(",\n        ")}`;
}
const Menu_stories = {
  title: "Component/Menu",
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
          summary: "{ label: string; path: string; prefix: string; order: number; isDisabled: boolean; children?: [title:string; path:string; prefix:string; order: number;] }[]"
        }
      }
    },
    isCollapsed: {
      description: "是否收合",
      control: {
        type: "boolean"
      }
    },
    color: {
      description: "顏色",
      control: {
        type: "color"
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
    useRouter: {
      description: "使用 VueRouter",
      control: {
        type: "boolean"
      },
      table: {
        disable: true
      }
    }
  },
  parameters: {
    // 自動文件
    docs: {
      title: "Menu",
      description: {
        component: "選單組件的呈現及說明。"
      }
    }
  }
};
const MenuDefault = {
  name: "預設項目",
  args: {
    dataSource: [{
      label: "Dashboard",
      path: "/",
      prefix: "SvgHome",
      order: 1,
      isDisabled: true
    }, {
      label: "Profile",
      path: "/users",
      prefix: "SvgUser",
      order: 2,
      children: [{
        label: "Contact",
        path: "/users/Contact",
        prefix: "SvgMail",
        order: 1
      }, {
        label: "Password",
        path: "/users/Password",
        prefix: "SvgLock",
        order: 2
      }]
    }, {
      label: "Setting",
      path: "/settings",
      prefix: "SvgSettings",
      order: 3
    }],
    isCollapsed: false,
    color: "#000000",
    hasDivider: false,
    className: ""
  },
  render: (args) => ({
    components: {
      Menu: _sfc_main
    },
    setup() {
      return {
        args
      };
    },
    template: `
      <Menu
        :dataSource="args.dataSource"
        :isCollapsed="args.isCollapsed"
        :color="args.color"
        :hasDivider="args.hasDivider"
        :className="args.className"
      ></Menu>`
  }),
  // 控制 controls 中能控制的參數
  parameters: {
    controls: {
      // include: ["dataSource", "isExpanded"],
      exclude: ["navItemClick", "expandedNav"]
    },
    docs: {
      source: {
        transform: (src, storyContext) => {
          const {
            args
          } = storyContext;
          const dataSourceString = formatDataSource(args.dataSource);
          return [`<script setup>`, `import { Menu } from "@ded-wds-vue/ui";`, `const dataSource = [`, `${dataSourceString}`, `];`, `<\/script>`, "", "<template>", "  <Menu", `    :dataSource="dataSource"`, `    ${args.isCollapsed !== void 0 ? `:isCollapsed="${args.isCollapsed}"` : ""}`, `    ${args.color ? `color="${args.color}"` : ""}`, `    ${args.hasDivider !== void 0 ? `:hasDivider="${args.hasDivider}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, "  ></Menu>", "</template>"].filter(Boolean).join("\n").trim();
        }
      }
    }
  }
};
MenuDefault.parameters = {
  ...MenuDefault.parameters,
  docs: {
    ...(_a = MenuDefault.parameters) == null ? void 0 : _a.docs,
    source: {
      originalSource: '{\n  name: "預設項目",\n  args: {\n    dataSource: [{\n      label: "Dashboard",\n      path: "/",\n      prefix: "SvgHome",\n      order: 1,\n      isDisabled: true\n    }, {\n      label: "Profile",\n      path: "/users",\n      prefix: "SvgUser",\n      order: 2,\n      children: [{\n        label: "Contact",\n        path: "/users/Contact",\n        prefix: "SvgMail",\n        order: 1\n      }, {\n        label: "Password",\n        path: "/users/Password",\n        prefix: "SvgLock",\n        order: 2\n      }]\n    }, {\n      label: "Setting",\n      path: "/settings",\n      prefix: "SvgSettings",\n      order: 3\n    }],\n    isCollapsed: false,\n    color: "#000000",\n    hasDivider: false,\n    className: ""\n  },\n  render: args => ({\n    components: {\n      Menu\n    },\n    setup() {\n      return {\n        args\n      };\n    },\n    template: `\n      <Menu\n        :dataSource="args.dataSource"\n        :isCollapsed="args.isCollapsed"\n        :color="args.color"\n        :hasDivider="args.hasDivider"\n        :className="args.className"\n      ></Menu>`\n  }),\n  // 控制 controls 中能控制的參數\n  parameters: {\n    controls: {\n      // include: ["dataSource", "isExpanded"],\n      exclude: ["navItemClick", "expandedNav"]\n    },\n    docs: {\n      source: {\n        transform: (src, storyContext) => {\n          const {\n            args\n          } = storyContext;\n          const dataSourceString = formatDataSource(args.dataSource);\n          return [`<script setup>`, `import { Menu } from "@ded-wds-vue/ui";`, `const dataSource = [`, `${dataSourceString}`, `];`, `<\/script>`, "", "<template>", "  <Menu", `    :dataSource="dataSource"`, `    ${args.isCollapsed !== undefined ? `:isCollapsed="${args.isCollapsed}"` : ""}`, `    ${args.color ? `color="${args.color}"` : ""}`, `    ${args.hasDivider !== undefined ? `:hasDivider="${args.hasDivider}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, "  ></Menu>", "</template>"].filter(Boolean).join("\\n").trim();\n        }\n      }\n    }\n  }\n}',
      ...(_c = (_b = MenuDefault.parameters) == null ? void 0 : _b.docs) == null ? void 0 : _c.source
    }
  }
};
const __namedExportsOrder = ["MenuDefault"];
export {
  MenuDefault,
  __namedExportsOrder,
  Menu_stories as default
};

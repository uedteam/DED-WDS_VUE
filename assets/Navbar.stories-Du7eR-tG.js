var _a, _b, _c;
import { _ as _sfc_main } from "./Navbar-cAnq8cPW.js";
import "./vue.esm-bundler-K7CzQrxl.js";
import "./Avatar-Bup2bs56.js";
import "./Icon-B6pI5HKs.js";
import "./Image-BJOsgKZf.js";
import "./Badge-BEMwTXQE.js";
import "./Button-8IAwqsIt.js";
import "./Input-CBUjHHWU.js";
import "./v4-CjlX8hrF.js";
function formatDataSource(dataSource) {
  return `    ${dataSource.map((item) => `{
        label: "${item.label}",
        path: "${item.path}",
        order: "${item.order}",
    }`).join(",\n    ")}`;
}
const Navbar_stories = {
  title: "Component/Navbar",
  component: _sfc_main,
  tags: ["autodocs"],
  argTypes: {
    dataSource: {
      description: "連結清單",
      control: {
        type: "object"
      },
      table: {
        type: {
          summary: "{ label: string; path: string; order: number; }[]"
        }
      }
    },
    hasLogo: {
      description: "是否有 Logo",
      control: {
        type: "boolean"
      }
    },
    logoSrc: {
      description: "Logo 圖片連結",
      control: {
        type: "text"
      }
    },
    logoLink: {
      description: "Logo 連結",
      control: {
        type: "text"
      }
    },
    avatarSrc: {
      description: "圖片連結",
      control: {
        type: "text"
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
      title: "Navbar",
      description: {
        component: "Navbar 組件的呈現及說明。"
      }
    }
  }
};
const NavbarDefault = {
  name: "預設項目",
  args: {
    dataSource: [{
      label: "Products",
      path: "#products",
      order: 1
    }, {
      label: "Solutions",
      path: "#solutions",
      order: 2
    }, {
      label: "About",
      path: "#about",
      order: 3
    }, {
      label: "Technologies",
      path: "#technologies",
      order: 4
    }],
    hasLogo: true,
    logoSrc: "https://storage.googleapis.com/ded-wds-bucket/AUO_LOGO.svg",
    logoLink: "https://www.auo.com",
    avatarSrc: "https://storage.googleapis.com/ded-wds-bucket/lion.png",
    className: ""
  },
  render: (args) => ({
    components: {
      Navbar: _sfc_main
    },
    setup() {
      return {
        args
      };
    },
    template: `
      <Navbar
        :dataSource="args.dataSource"
        :hasLogo="args.hasLogo"
        :logoSrc="args.logoSrc"
        :logoLink="args.logoLink"
        :avatarSrc="args.avatarSrc"
        :className="args.className"
      ></Navbar>`
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
          return [`<script setup>`, `import { Navbar } from "@ded-wds-vue/ui";`, `const dataSource = [`, `${dataSourceString}`, `];`, `<\/script>`, "", "<template>", "  <Navbar", `    :dataSource="dataSource"`, `    ${args.hasLogo !== void 0 ? `:hasLogo="${args.hasLogo}"` : ""}`, `    ${args.logoSrc ? `logoSrc="${args.logoSrc}"` : ""}`, `    ${args.logoLink ? `logoLink="${args.logoLink}"` : ""}`, `    ${args.avatarSrc ? `avatarSrc="${args.avatarSrc}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, "  >", "  </Navbar>", "</template>"].filter(Boolean).join("\n").trim();
        }
      }
    }
  }
};
NavbarDefault.parameters = {
  ...NavbarDefault.parameters,
  docs: {
    ...(_a = NavbarDefault.parameters) == null ? void 0 : _a.docs,
    source: {
      originalSource: '{\n  name: "預設項目",\n  args: {\n    dataSource: [{\n      label: "Products",\n      path: "#products",\n      order: 1\n    }, {\n      label: "Solutions",\n      path: "#solutions",\n      order: 2\n    }, {\n      label: "About",\n      path: "#about",\n      order: 3\n    }, {\n      label: "Technologies",\n      path: "#technologies",\n      order: 4\n    }],\n    hasLogo: true,\n    logoSrc: "https://storage.googleapis.com/ded-wds-bucket/AUO_LOGO.svg",\n    logoLink: "https://www.auo.com",\n    avatarSrc: "https://storage.googleapis.com/ded-wds-bucket/lion.png",\n    className: ""\n  },\n  render: args => ({\n    components: {\n      Navbar\n    },\n    setup() {\n      return {\n        args\n      };\n    },\n    template: `\n      <Navbar\n        :dataSource="args.dataSource"\n        :hasLogo="args.hasLogo"\n        :logoSrc="args.logoSrc"\n        :logoLink="args.logoLink"\n        :avatarSrc="args.avatarSrc"\n        :className="args.className"\n      ></Navbar>`\n  }),\n  // 控制 controls 中能控制的參數\n  parameters: {\n    controls: {\n      // include: [\'objectFit\', \'src\', \'value\', \'name\' ],\n    },\n    docs: {\n      source: {\n        transform: (src, storyContext) => {\n          const {\n            args\n          } = storyContext;\n          const dataSourceString = formatDataSource(args.dataSource);\n          return [`<script setup>`, `import { Navbar } from "@ded-wds-vue/ui";`, `const dataSource = [`, `${dataSourceString}`, `];`, `<\/script>`, "", "<template>", "  <Navbar", `    :dataSource="dataSource"`, `    ${args.hasLogo !== undefined ? `:hasLogo="${args.hasLogo}"` : ""}`, `    ${args.logoSrc ? `logoSrc="${args.logoSrc}"` : ""}`, `    ${args.logoLink ? `logoLink="${args.logoLink}"` : ""}`, `    ${args.avatarSrc ? `avatarSrc="${args.avatarSrc}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, "  >", "  </Navbar>", "</template>"].filter(Boolean).join("\\n").trim();\n        }\n      }\n    }\n  }\n}',
      ...(_c = (_b = NavbarDefault.parameters) == null ? void 0 : _b.docs) == null ? void 0 : _c.source
    }
  }
};
const __namedExportsOrder = ["NavbarDefault"];
export {
  NavbarDefault,
  __namedExportsOrder,
  Navbar_stories as default
};

var _a, _b, _c;
import { _ as _sfc_main } from "./SideNav-CEOCPYb3.js";
import { a as _sfc_main$1, _ as _sfc_main$2, b as _sfc_main$3 } from "./Row-CgwqPSLD.js";
import "./vue.esm-bundler-K7CzQrxl.js";
import "./Avatar-Bup2bs56.js";
import "./Icon-B6pI5HKs.js";
import "./Image-BJOsgKZf.js";
import "./Button-8IAwqsIt.js";
import "./Input-CBUjHHWU.js";
import "./v4-CjlX8hrF.js";
import "./Menu-DmxDrp5J.js";
import "./Navbar-cAnq8cPW.js";
import "./Badge-BEMwTXQE.js";
const dataSource = [{
  label: "Home",
  prefix: "SvgHome",
  path: "/Home",
  isDisabled: true,
  order: 1
}, {
  label: "User",
  prefix: "SvgUser",
  path: "/users",
  order: 2,
  children: [{
    label: "Profile",
    path: "/user/profile",
    order: 1
  }, {
    label: "Account",
    path: "/user/account",
    order: 2
  }]
}, {
  label: "Chart",
  prefix: "SvgBarChart",
  path: "/chart",
  order: 3,
  children: [{
    label: "Profile",
    path: "/chart/profile",
    order: 1
  }, {
    label: "Account",
    path: "/chart/account",
    order: 2
  }, {
    label: "Account",
    path: "/chart/account",
    order: 3
  }, {
    label: "Account",
    path: "/chart/account",
    order: 4
  }]
}, {
  label: "Database",
  prefix: "SvgDatabase",
  path: "/database",
  order: 4
}, {
  label: "Favorite",
  prefix: "SvgFavorite",
  path: "/favorite",
  order: 5
}, {
  label: "Calendar",
  prefix: "SvgCalendar",
  path: "/calendar",
  order: 6
}, {
  label: "Notification",
  prefix: "SvgNotification",
  path: "/notification",
  order: 7
}, {
  label: "Language",
  prefix: "SvgLanguage",
  path: "/language",
  order: 8
}];
const SideNav_stories = {
  components: {
    Grid: _sfc_main$3,
    Column: _sfc_main$2,
    Row: _sfc_main$1
  },
  title: "Component/SideNav",
  component: _sfc_main,
  tags: ["autodocs"],
  argTypes: {
    themeColor: {
      description: "背景顏色",
      control: {
        type: "select"
      },
      options: ["blue", "yellow", "grape", "black"],
      table: {
        type: {
          summary: "string"
        }
      }
    },
    mobileLogoSrc: {
      description: "手機 Logo 圖片",
      control: {
        type: "text"
      }
    },
    desktopLogoSrc: {
      description: "桌機 Logo 圖片",
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
    hasLogo: {
      description: "是否有 Logo",
      control: {
        type: "boolean"
      }
    },
    hasRWD: {
      description: "是否有側邊導覽",
      control: {
        type: "boolean"
      }
    },
    userName: {
      description: "使用者名稱",
      control: {
        type: "text"
      }
    },
    caption: {
      description: "使用者描述",
      control: {
        type: "text"
      }
    },
    userStatus: {
      description: "使用者狀態",
      control: {
        type: "select"
      },
      options: ["none", "online", "idle", "busy", "offline"],
      table: {
        type: {
          summary: "none | online | idle | busy | offline"
        }
      }
    },
    hasSearch: {
      description: "是否有搜尋欄",
      control: {
        type: "boolean"
      }
    },
    dataSource: {
      description: "資料來源",
      control: {
        type: "object"
      },
      table: {
        type: {
          summary: "{ label: string; prefix: string; path: string; order: number; children?: [ label:string; path:string; order: number;] }[]"
        }
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
      title: "SideNav",
      description: {
        component: "側邊導覽組件的呈現及說明。"
      }
    }
  }
};
const SideNavDefault = {
  name: "預設項目",
  args: {
    themeColor: "#00467C",
    mobileLogoSrc: "https://storage.googleapis.com/ded-wds-bucket/AUO_LOGO.svg",
    desktopLogoSrc: "https://storage.googleapis.com/ded-wds-bucket/AUO_LOGO_W.svg",
    logoLink: "https://www.auo.com",
    hasLogo: false,
    hasRWD: true,
    userName: "User Name",
    caption: "User Caption",
    userStatus: "online",
    hasSearch: true,
    dataSource,
    className: ""
  },
  render: (args) => ({
    components: {
      SideNav: _sfc_main,
      Grid: _sfc_main$3,
      Column: _sfc_main$2,
      Row: _sfc_main$1
    },
    setup() {
      return {
        args
      };
    },
    template: `
      <Grid fluid>
        <Row hasGap>
          <Column :xs="12" :sm="4" :md="4" style="text-align: start;">
            <SideNav
              :themeColor="args.themeColor"
              :mobileLogoSrc="args.mobileLogoSrc"
              :desktopLogoSrc="args.desktopLogoSrc"
              :logoLink="args.logoLink"
              :hasLogo="args.hasLogo"
              :hasRWD="args.hasRWD"
              :userName="args.userName"
              :caption="args.caption"
              :userStatus="args.userStatus"
              :hasSearch="args.hasSearch"
              :dataSource="args.dataSource"
              :className="args.className"
            ></SideNav>
          </Column>
        </Row>
      </Grid>
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
          return [`<script setup>`, `import { SideNav, Grid, Row, Column } from "@ded-wds-vue/ui";`, ``, `const dataSource = [`, `  {`, `    label: "Home",`, `    prefix: "SvgHome",`, `    path: "/Home",`, `    isDisabled: true,`, `    order: 1,`, `  },`, `  {`, `    label: "User",`, `    prefix: "SvgUser",`, `    path: "/users",`, `    order: 2,`, `    children: [`, `      { label: "Profile", path: "/user/profile", order: 1 },`, `      { label: "Account", path: "/user/account", order: 2 },`, `    ],`, `  },`, `  {`, `    label: "Chart",`, `    prefix: "SvgBarChart",`, `    path: "/chart",`, `    order: 3,`, `    children: [`, `      { label: "Profile", path: "/chart/profile", order: 1 },`, `      { label: "Account", path: "/chart/account", order: 2 },`, `      { label: "Account", path: "/chart/account", order: 3 },`, `      { label: "Account", path: "/chart/account", order: 4 },`, `    ],`, `  },`, `  {`, `    label: "Database",`, `    prefix: "SvgDatabase",`, `    path: "/database",`, `    order: 4,`, `  },`, `  {`, `    label: "Favorite",`, `    prefix: "SvgFavorite",`, `    path: "/favorite",`, `    order: 5,`, `  },`, `  {`, `    label: "Calendar",`, `    prefix: "SvgCalendar",`, `    path: "/calendar",`, `    order: 6,`, `  },`, `  {`, `    label: "Notification",`, `    prefix: "SvgNotification",`, `    path: "/notification",`, `    order: 7,`, `  },`, `  {`, `    label: "Language",`, `    prefix: "SvgLanguage",`, `    path: "/language",`, `    order: 8,`, `  },`, `]`, "<\/script>", "<template>", `  <Grid fluid>`, `    <Row hasGap>`, `      <Column :xs="12" :sm="4" :md="4" style="text-align: start;">`, `        <SideNav`, `          ${args.themeColor ? `themeColor="${args.themeColor}"` : ""}`, `          ${args.mobileLogoSrc ? `mobileLogoSrc="${args.mobileLogoSrc}"` : ""}`, `          ${args.desktopLogoSrc ? `desktopLogoSrc="${args.desktopLogoSrc}"` : ""}`, `          ${args.logoLink ? `logoLink="${args.logoLink}"` : ""}`, `          ${args.hasLogo !== void 0 ? `:hasLogo="${args.hasLogo}"` : ""}`, `          ${args.hasRWD !== void 0 ? `:hasRWD="${args.hasRWD}"` : ""}`, `          ${args.userName !== void 0 ? `userName="${args.userName}"` : ""}`, `          ${args.caption !== void 0 ? `caption="${args.caption}"` : ""}`, `          ${args.userStatus !== void 0 ? `userStatus="${args.userStatus}"` : ""}`, `          ${args.hasSearch !== void 0 ? `:hasSearch="${args.hasSearch}"` : ""}`, `          :dataSource="dataSource"`, `          ${args.className ? `className="${args.className}"` : ""}`, `        ></SideNav>`, `      </Column>`, `    </Row>`, `  </Grid>`, "</template>"].filter(Boolean).join("\n").trim();
        }
      }
    }
  }
};
SideNavDefault.parameters = {
  ...SideNavDefault.parameters,
  docs: {
    ...(_a = SideNavDefault.parameters) == null ? void 0 : _a.docs,
    source: {
      originalSource: '{\n  name: "預設項目",\n  args: {\n    themeColor: "#00467C",\n    mobileLogoSrc: "https://storage.googleapis.com/ded-wds-bucket/AUO_LOGO.svg",\n    desktopLogoSrc: "https://storage.googleapis.com/ded-wds-bucket/AUO_LOGO_W.svg",\n    logoLink: "https://www.auo.com",\n    hasLogo: false,\n    hasRWD: true,\n    userName: "User Name",\n    caption: "User Caption",\n    userStatus: "online",\n    hasSearch: true,\n    dataSource,\n    className: ""\n  },\n  render: args => ({\n    components: {\n      SideNav,\n      Grid,\n      Column,\n      Row\n    },\n    setup() {\n      return {\n        args\n      };\n    },\n    template: `\n      <Grid fluid>\n        <Row hasGap>\n          <Column :xs="12" :sm="4" :md="4" style="text-align: start;">\n            <SideNav\n              :themeColor="args.themeColor"\n              :mobileLogoSrc="args.mobileLogoSrc"\n              :desktopLogoSrc="args.desktopLogoSrc"\n              :logoLink="args.logoLink"\n              :hasLogo="args.hasLogo"\n              :hasRWD="args.hasRWD"\n              :userName="args.userName"\n              :caption="args.caption"\n              :userStatus="args.userStatus"\n              :hasSearch="args.hasSearch"\n              :dataSource="args.dataSource"\n              :className="args.className"\n            ></SideNav>\n          </Column>\n        </Row>\n      </Grid>\n        `\n  }),\n  // 控制 controls 中能控制的參數\n  parameters: {\n    controls: {\n      // include: [\'themeColor\', \'label\', \'value\', \'name\' ],\n    },\n    docs: {\n      source: {\n        transform: (src, storyContext) => {\n          const {\n            args\n          } = storyContext;\n          return [`<script setup>`, `import { SideNav, Grid, Row, Column } from "@ded-wds-vue/ui";`, ``, `const dataSource = [`, `  {`, `    label: "Home",`, `    prefix: "SvgHome",`, `    path: "/Home",`, `    isDisabled: true,`, `    order: 1,`, `  },`, `  {`, `    label: "User",`, `    prefix: "SvgUser",`, `    path: "/users",`, `    order: 2,`, `    children: [`, `      { label: "Profile", path: "/user/profile", order: 1 },`, `      { label: "Account", path: "/user/account", order: 2 },`, `    ],`, `  },`, `  {`, `    label: "Chart",`, `    prefix: "SvgBarChart",`, `    path: "/chart",`, `    order: 3,`, `    children: [`, `      { label: "Profile", path: "/chart/profile", order: 1 },`, `      { label: "Account", path: "/chart/account", order: 2 },`, `      { label: "Account", path: "/chart/account", order: 3 },`, `      { label: "Account", path: "/chart/account", order: 4 },`, `    ],`, `  },`, `  {`, `    label: "Database",`, `    prefix: "SvgDatabase",`, `    path: "/database",`, `    order: 4,`, `  },`, `  {`, `    label: "Favorite",`, `    prefix: "SvgFavorite",`, `    path: "/favorite",`, `    order: 5,`, `  },`, `  {`, `    label: "Calendar",`, `    prefix: "SvgCalendar",`, `    path: "/calendar",`, `    order: 6,`, `  },`, `  {`, `    label: "Notification",`, `    prefix: "SvgNotification",`, `    path: "/notification",`, `    order: 7,`, `  },`, `  {`, `    label: "Language",`, `    prefix: "SvgLanguage",`, `    path: "/language",`, `    order: 8,`, `  },`, `]`, "<\/script>", "<template>", `  <Grid fluid>`, `    <Row hasGap>`, `      <Column :xs="12" :sm="4" :md="4" style="text-align: start;">`, `        <SideNav`, `          ${args.themeColor ? `themeColor="${args.themeColor}"` : ""}`, `          ${args.mobileLogoSrc ? `mobileLogoSrc="${args.mobileLogoSrc}"` : ""}`, `          ${args.desktopLogoSrc ? `desktopLogoSrc="${args.desktopLogoSrc}"` : ""}`, `          ${args.logoLink ? `logoLink="${args.logoLink}"` : ""}`, `          ${args.hasLogo !== undefined ? `:hasLogo="${args.hasLogo}"` : ""}`, `          ${args.hasRWD !== undefined ? `:hasRWD="${args.hasRWD}"` : ""}`, `          ${args.userName !== undefined ? `userName="${args.userName}"` : ""}`, `          ${args.caption !== undefined ? `caption="${args.caption}"` : ""}`, `          ${args.userStatus !== undefined ? `userStatus="${args.userStatus}"` : ""}`, `          ${args.hasSearch !== undefined ? `:hasSearch="${args.hasSearch}"` : ""}`, `          :dataSource="dataSource"`, `          ${args.className ? `className="${args.className}"` : ""}`, `        ></SideNav>`, `      </Column>`, `    </Row>`, `  </Grid>`, "</template>"].filter(Boolean).join("\\n").trim();\n        }\n      }\n    }\n  }\n}',
      ...(_c = (_b = SideNavDefault.parameters) == null ? void 0 : _b.docs) == null ? void 0 : _c.source
    }
  }
};
const __namedExportsOrder = ["SideNavDefault"];
export {
  SideNavDefault,
  __namedExportsOrder,
  SideNav_stories as default
};

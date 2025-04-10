var _a, _b, _c;
import { _ as _sfc_main$b } from "./Button-8IAwqsIt.js";
import { _ as _sfc_main$c } from "./Checkbox-CGc1iH5B.js";
import { _ as _sfc_main$a } from "./Input-CBUjHHWU.js";
import { b as _sfc_main$1, a as _sfc_main$2, _ as _sfc_main$3 } from "./Row-CgwqPSLD.js";
import { j as createBlock, n as normalizeClass, L as unref, e as withCtx, o as openBlock, b as createVNode, a as createBaseVNode } from "./vue.esm-bundler-K7CzQrxl.js";
import { _ as _sfc_main$5 } from "./Navbar-cAnq8cPW.js";
import { _ as _sfc_main$8 } from "./SideNav-CEOCPYb3.js";
import { c as _sfc_main$4, d as _sfc_main$6, a as _sfc_main$7, b as _sfc_main$9 } from "./Side-DiB6Zc4x.js";
import "./Icon-B6pI5HKs.js";
import "./v4-CjlX8hrF.js";
import "./Avatar-Bup2bs56.js";
import "./Image-BJOsgKZf.js";
import "./Badge-BEMwTXQE.js";
import "./Menu-DmxDrp5J.js";
const _sfc_main = {
  __name: "Dashboard",
  props: {
    isGridSystem: {
      type: Boolean,
      default: false
    },
    className: {
      type: String,
      default: ""
    }
  },
  setup(__props) {
    const props = __props;
    const dataSource = [
      {
        label: "Home",
        prefix: "SvgHome",
        path: "/Home",
        order: 1
      },
      {
        label: "User",
        prefix: "SvgUser",
        path: "/users",
        order: 2,
        children: [
          {
            label: "Profile",
            path: "/user/profile",
            order: 1
          },
          {
            label: "Account",
            path: "/user/account",
            order: 2
          }
        ]
      },
      {
        label: "Chart",
        prefix: "SvgBarChart",
        path: "/chart",
        order: 3,
        children: [
          {
            label: "Profile",
            path: "/chart/profile",
            order: 1
          },
          {
            label: "Account",
            path: "/chart/account",
            order: 2
          },
          {
            label: "Account",
            path: "/chart/account",
            order: 3
          },
          {
            label: "Account",
            path: "/chart/account",
            order: 4
          }
        ]
      },
      {
        label: "Database",
        prefix: "SvgDatabase",
        path: "/database",
        order: 4
      },
      {
        label: "Favorite",
        prefix: "SvgFavorite",
        path: "/favorite",
        order: 5
      },
      {
        label: "Calendar",
        prefix: "SvgCalendar",
        path: "/calendar",
        order: 6
      },
      {
        label: "Notification",
        prefix: "SvgNotification",
        path: "/notification",
        order: 7
      },
      {
        label: "Language",
        prefix: "SvgLanguage",
        path: "/language",
        order: 8
      }
    ];
    return (_ctx, _cache) => {
      return props.isGridSystem ? (openBlock(), createBlock(unref(_sfc_main$6), {
        key: 0,
        class: normalizeClass({ [props.className]: !!props.className })
      }, {
        default: withCtx(() => [
          createVNode(_sfc_main$1, { fluid: "" }, {
            default: withCtx(() => [
              createVNode(_sfc_main$2, { "has-gap": false }, {
                default: withCtx(() => [
                  createVNode(_sfc_main$3, { sm: "12" }, {
                    default: withCtx(() => [
                      createVNode(unref(_sfc_main$4), null, {
                        default: withCtx(() => [
                          createVNode(_sfc_main$5, {
                            "data-source": [
                              {
                                href: "#solutions",
                                label: "Solutions",
                                order: 2
                              },
                              {
                                href: "#products",
                                label: "Products",
                                order: 1
                              },
                              {
                                href: "#technologies",
                                label: "Technologies",
                                order: 4
                              },
                              {
                                href: "#about",
                                label: "About",
                                order: 3
                              }
                            ],
                            "logo-src": "https://storage.googleapis.com/ded-wds-bucket/AUO_LOGO.svg"
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          createVNode(unref(_sfc_main$6), null, {
            default: withCtx(() => [
              createVNode(_sfc_main$1, { fluid: "" }, {
                default: withCtx(() => [
                  createVNode(_sfc_main$2, { "has-gap": false }, {
                    default: withCtx(() => [
                      createVNode(_sfc_main$3, { sm: "3" }, {
                        default: withCtx(() => [
                          createVNode(unref(_sfc_main$7), null, {
                            default: withCtx(() => [
                              createVNode(_sfc_main$8, {
                                "theme-color": "blue",
                                "mobile-logo-src": "https://storage.googleapis.com/ded-wds-bucket/AUO_LOGO.svg",
                                "desktop-logo-src": "https://storage.googleapis.com/ded-wds-bucket/AUO_LOGO_W.svg",
                                "logo-link": "https://www.auo.com",
                                "has-logo": false,
                                "has-r-w-d": false,
                                "user-name": "John Doe",
                                caption: "Software Engineer",
                                "user-status": "online",
                                "has-search": true,
                                "data-source": dataSource,
                                style: { "height": "100vh" }
                              })
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(_sfc_main$3, { sm: "9" }, {
                        default: withCtx(() => [
                          createVNode(unref(_sfc_main$9), null, {
                            default: withCtx(() => _cache[0] || (_cache[0] = [
                              createBaseVNode("div", { style: { "align-items": "center", "background-color": "#0958d9", "color": "#fff", "display": "flex", "height": "100vh", "justify-content": "center", "width": "100%" } }, " content ", -1)
                            ])),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["class"])) : (openBlock(), createBlock(unref(_sfc_main$6), {
        key: 1,
        class: normalizeClass({ [props.className]: !!props.className })
      }, {
        default: withCtx(() => [
          createVNode(unref(_sfc_main$4), null, {
            default: withCtx(() => [
              createVNode(_sfc_main$5, {
                "data-source": [
                  {
                    href: "#solutions",
                    label: "Solutions",
                    order: 2
                  },
                  {
                    href: "#products",
                    label: "Products",
                    order: 1
                  },
                  {
                    href: "#technologies",
                    label: "Technologies",
                    order: 4
                  },
                  {
                    href: "#about",
                    label: "About",
                    order: 3
                  }
                ],
                "logo-src": "https://storage.googleapis.com/ded-wds-bucket/AUO_LOGO.svg"
              })
            ]),
            _: 1
          }),
          createVNode(unref(_sfc_main$6), null, {
            default: withCtx(() => [
              createVNode(unref(_sfc_main$7), null, {
                default: withCtx(() => [
                  createVNode(_sfc_main$8, {
                    "theme-color": "blue",
                    "mobile-logo-src": "https://storage.googleapis.com/ded-wds-bucket/AUO_LOGO.svg",
                    "desktop-logo-src": "https://storage.googleapis.com/ded-wds-bucket/AUO_LOGO_W.svg",
                    "logo-link": "https://www.auo.com",
                    "has-logo": false,
                    "has-r-w-d": false,
                    "user-name": "John Doe",
                    caption: "Software Engineer",
                    "user-status": "online",
                    "has-search": true,
                    "data-source": dataSource,
                    style: { "height": "100vh" }
                  })
                ]),
                _: 1
              }),
              createVNode(unref(_sfc_main$9), null, {
                default: withCtx(() => _cache[1] || (_cache[1] = [
                  createBaseVNode("div", { style: { "align-items": "center", "background-color": "#0958d9", "color": "#fff", "display": "flex", "height": "100vh", "justify-content": "center", "width": "100%" } }, " content ", -1)
                ])),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["class"]));
    };
  }
};
_sfc_main.__docgenInfo = { "exportName": "default", "displayName": "Dashboard", "description": "", "tags": {}, "props": [{ "name": "isGridSystem", "type": { "name": "boolean" }, "defaultValue": { "func": false, "value": "false" } }, { "name": "className", "type": { "name": "string" }, "defaultValue": { "func": false, "value": '""' } }], "sourceFiles": ["/Users/auouser/Desktop/Work_Space/DED-WDS_VUE/libs/src/ui/template/Dashboard/Dashboard.vue"] };
const Dashboard_stories = {
  title: "Template/Dashboard",
  component: _sfc_main,
  tags: ["autodocs"],
  argTypes: {
    isGridSystem: {
      description: "開啟格線系統",
      control: {
        type: "boolean"
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
      title: "Dashboard",
      description: {
        component: "Dashboard 組件的呈現及說明。"
      }
    }
  }
};
const defaultDashboardStory = {
  name: "預設項目",
  args: {
    // props
    isGridSystem: false,
    className: ""
  },
  render: (args) => ({
    components: {
      Dashboard: _sfc_main,
      Grid: _sfc_main$1,
      Row: _sfc_main$2,
      Column: _sfc_main$3,
      Checkbox: _sfc_main$c,
      Button: _sfc_main$b,
      Input: _sfc_main$a
    },
    setup() {
      return {
        args
      };
    },
    template: `
      <Dashboard
        :isGridSystem="args.isGridSystem"
        :className="args.className"
      >
      </Dashboard>`
  }),
  // 控制 controls 中能控制的參數
  parameters: {
    controls: {
      // include: ['fluid', 'className', 'justify', 'align', 'g', 'gx', 'gy', 'col', 'sm', 'md', 'lg', 'xl', 'xxl'],
    }
  }
};
defaultDashboardStory.parameters = {
  ...defaultDashboardStory.parameters,
  docs: {
    ...(_a = defaultDashboardStory.parameters) == null ? void 0 : _a.docs,
    source: {
      originalSource: `{
  name: "預設項目",
  args: {
    // props
    isGridSystem: false,
    className: ""
  },
  render: args => ({
    components: {
      Dashboard,
      Grid,
      Row,
      Column,
      Checkbox,
      Button,
      Input
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <Dashboard
        :isGridSystem="args.isGridSystem"
        :className="args.className"
      >
      </Dashboard>\`
  }),
  // 控制 controls 中能控制的參數
  parameters: {
    controls: {
      // include: ['fluid', 'className', 'justify', 'align', 'g', 'gx', 'gy', 'col', 'sm', 'md', 'lg', 'xl', 'xxl'],
    }
  }
}`,
      ...(_c = (_b = defaultDashboardStory.parameters) == null ? void 0 : _b.docs) == null ? void 0 : _c.source
    }
  }
};
const __namedExportsOrder = ["defaultDashboardStory"];
export {
  __namedExportsOrder,
  Dashboard_stories as default,
  defaultDashboardStory
};

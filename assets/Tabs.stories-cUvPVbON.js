var _a, _b, _c, _d, _e, _f, _g, _h, _i;
import { j as createBlock, o as openBlock, e as withCtx, c as createElementBlock, d as createCommentVNode, a as createBaseVNode, b as createVNode, t as toDisplayString, n as normalizeClass, v as ref, w as watch, F as Fragment, q as renderList } from "./vue.esm-bundler-K7CzQrxl.js";
import { _ as _sfc_main$3 } from "./Button-8IAwqsIt.js";
import { _ as _sfc_main$2 } from "./Icon-B6pI5HKs.js";
const _hoisted_1 = {
  key: 0,
  class: "ded-icon"
};
const _sfc_main$1 = {
  __name: "TabItem",
  props: {
    // --  樣式接口 -- //
    themeColor: {
      type: String,
      validator: (value) => [
        "primary",
        "secondary",
        "neutral",
        "info",
        "success",
        "warning",
        "error"
      ].includes(value)
    },
    type: {
      type: String,
      default: "basic",
      validator: (value) => ["basic", "outline", "button"].includes(value)
    },
    prefix: {
      type: String
    },
    // --  內容接口 -- //
    title: {
      type: String,
      default: "頁籤 1"
    },
    index: {
      type: Number
    },
    // --  狀態接口 -- //
    isActive: {
      type: Boolean
    },
    isDisabled: {
      type: Boolean,
      default: false
    },
    // --  事件接口 -- //
    onClick: {
      type: Function
    },
    className: {
      type: String,
      default: ""
    }
  },
  setup(__props) {
    const props = __props;
    function handleClick(event) {
      if (!props.isDisabled && props.onClick) {
        props.onClick(event);
      }
    }
    return (_ctx, _cache) => {
      return openBlock(), createBlock(_sfc_main$3, {
        "theme-color": props.themeColor,
        variant: props.type === "button" ? "filled" : "text",
        "is-disabled": props.isDisabled,
        "data-index": props.index,
        class: normalizeClass({
          "ded-tab ": props.type !== "button",
          [`ded-tab-${props.themeColor}`]: props.type === "basic",
          [`ded-tab-${props.themeColor}-active`]: props.isActive && props.type === "basic",
          [`ded-tab-disable`]: props.isDisabled && props.type === "basic" || props.isDisabled && props.type === "outline",
          [`ded-tab-outline-${props.themeColor}`]: props.themeColor && props.type === "outline",
          [`ded-tab-outline-${props.themeColor}-active`]: props.isActive && props.type === "outline",
          "ded-tab-button ": !props.isActive && props.type === "button",
          [`ded-tab-button-${props.themeColor}`]: props.themeColor && props.type === "button",
          [`ded-tab-button-${props.themeColor}-active`]: props.isActive && props.type === "button",
          [`ded-tab-button-disable`]: props.isDisabled && props.type === "button"
        }),
        onClick: handleClick
      }, {
        default: withCtx(() => [
          props.prefix ? (openBlock(), createElementBlock("span", _hoisted_1, [
            createVNode(_sfc_main$2, { name: "SvgArrowDown" })
          ])) : createCommentVNode("", true),
          createBaseVNode("span", null, toDisplayString(props.title), 1)
        ]),
        _: 1
      }, 8, ["theme-color", "variant", "is-disabled", "data-index", "class"]);
    };
  }
};
_sfc_main$1.__docgenInfo = { "exportName": "default", "displayName": "TabItem", "description": "", "tags": {}, "props": [{ "name": "themeColor", "type": { "name": "string" }, "values": ["primary", "secondary", "neutral", "info", "success", "warning", "error"] }, { "name": "type", "type": { "name": "string" }, "defaultValue": { "func": false, "value": '"basic"' }, "values": ["basic", "outline", "button"] }, { "name": "prefix", "type": { "name": "string" } }, { "name": "title", "type": { "name": "string" }, "defaultValue": { "func": false, "value": '"頁籤 1"' } }, { "name": "index", "type": { "name": "number" } }, { "name": "isActive", "type": { "name": "boolean" } }, { "name": "isDisabled", "type": { "name": "boolean" }, "defaultValue": { "func": false, "value": "false" } }, { "name": "onClick", "type": { "name": "func" } }, { "name": "className", "type": { "name": "string" }, "defaultValue": { "func": false, "value": '""' } }], "sourceFiles": ["/Users/auouser/Desktop/Work_Space/DED-WDS_VUE/libs/src/ui/element/Tabs/TabItem.vue"] };
const _sfc_main = {
  __name: "Tabs",
  props: {
    themeColor: {
      type: String,
      default: "primary",
      validator: (value) => [
        "primary",
        "secondary",
        "neutral",
        "info",
        "success",
        "warning",
        "error"
      ].includes(value)
    },
    dataSource: {
      type: Array,
      required: true,
      validator: (value) => value.every(
        (item) => typeof item.title === "string" && typeof item.content === "string"
      )
    },
    activeIndex: {
      type: Number,
      default: 0
    },
    type: {
      type: String,
      default: "basic",
      validator: (value) => ["basic", "outline", "button"].includes(value)
    },
    prefix: {
      type: String,
      default: ""
    },
    isDisabled: {
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
    const activeTabIndex = ref(props.activeIndex || 0);
    function handleClick(event) {
      activeTabIndex.value = Number.parseInt(event.currentTarget.dataset.index, 10);
    }
    watch(() => props.activeIndex, (newIndex) => {
      activeTabIndex.value = newIndex || 0;
    });
    return (_ctx, _cache) => {
      var _a2;
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(["ded-tabs-container", { [props.className]: !!props.className }])
      }, [
        createBaseVNode("div", {
          class: normalizeClass(["ded-tabs", { "ded-tabs-button": props.type === "button" }])
        }, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(props.dataSource, (item, index) => {
            return openBlock(), createBlock(_sfc_main$1, {
              key: index,
              "theme-color": props.themeColor,
              title: item.title,
              type: props.type,
              prefix: props.prefix,
              index,
              "is-active": index === activeTabIndex.value,
              "is-disabled": props.isDisabled || item.isDisabled,
              onClick: handleClick
            }, null, 8, ["theme-color", "title", "type", "prefix", "index", "is-active", "is-disabled"]);
          }), 128))
        ], 2),
        createBaseVNode("div", {
          class: normalizeClass(["ded-tab-content", [{ "ded-tab-disable": props.isDisabled }]])
        }, toDisplayString((_a2 = props.dataSource[activeTabIndex.value]) == null ? void 0 : _a2.content), 3)
      ], 2);
    };
  }
};
_sfc_main.__docgenInfo = { "exportName": "default", "displayName": "Tabs", "description": "", "tags": {}, "props": [{ "name": "themeColor", "type": { "name": "string" }, "defaultValue": { "func": false, "value": '"primary"' }, "values": ["primary", "secondary", "neutral", "info", "success", "warning", "error"] }, { "name": "dataSource", "type": { "name": "array" }, "required": true }, { "name": "activeIndex", "type": { "name": "number" }, "defaultValue": { "func": false, "value": "0" } }, { "name": "type", "type": { "name": "string" }, "defaultValue": { "func": false, "value": '"basic"' }, "values": ["basic", "outline", "button"] }, { "name": "prefix", "type": { "name": "string" }, "defaultValue": { "func": false, "value": '""' } }, { "name": "isDisabled", "type": { "name": "boolean" }, "defaultValue": { "func": false, "value": "false" } }, { "name": "className", "type": { "name": "string" }, "defaultValue": { "func": false, "value": '""' } }], "sourceFiles": ["/Users/auouser/Desktop/Work_Space/DED-WDS_VUE/libs/src/ui/element/Tabs/Tabs.vue"] };
function formatDataSource(dataSource) {
  return `    ${dataSource.map((item) => `{
        title: "${item.title}",
        content: "${item.content}",
    }`).join(",\n    ")}`;
}
const Tabs_stories = {
  title: "Component/Tabs",
  component: _sfc_main,
  tags: ["Tabs"],
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
    dataSource: {
      description: "資料來源",
      control: {
        type: "object"
      },
      table: {
        type: {
          summary: "{ title: string; content: VNode; }[]"
        }
      }
    },
    activeIndex: {
      description: "活動頁籤索引",
      control: {
        type: "number",
        min: 0,
        max: 2,
        step: 1
      }
    },
    type: {
      description: "頁籤樣式",
      control: {
        type: "select"
      },
      options: ["basic", "outline", "button"],
      table: {
        type: {
          summary: "basic | outline | button "
        }
      }
    },
    prefix: {
      description: "前綴元素",
      control: {
        type: "select",
        labels: {
          "": "none",
          "SvgArrowDown": "SvgArrowDown"
        }
      },
      options: ["", "SvgArrowDown"]
    },
    isDisabled: {
      description: "是否禁用",
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
      title: "Tabs",
      description: {
        component: "頁籤組件的呈現及說明。"
      }
    }
  }
};
const DefaultTabs = {
  name: "預設項目",
  args: {
    themeColor: "primary",
    dataSource: [{
      title: "Tab 1",
      content: "Content 1"
    }, {
      title: "Tab 2",
      content: "Content 2"
    }, {
      title: "Tab 3",
      content: "Content 3"
    }],
    activeIndex: 0,
    type: "basic",
    prefix: "SvgArrowDown",
    isDisabled: false,
    className: ""
  },
  render: (args) => ({
    components: {
      Tabs: _sfc_main
    },
    setup() {
      return {
        args
      };
    },
    template: `
      <Tabs
        :themeColor="args.themeColor"
        :dataSource="args.dataSource"
        :activeIndex="args.activeIndex"
        :type="args.type"
        :prefix="args.prefix"
        :isDisabled="args.isDisabled"
        :className="args.className"
      ></Tabs>`
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
          const dataSourceString = formatDataSource(args.dataSource);
          return [`<script setup>`, `import { Tabs } from "@ded-wds-vue/ui";`, `const dataSource = [`, `${dataSourceString}`, `];`, `<\/script>`, "", "<template>", "  <Tabs", `    ${args.themeColor ? `themeColor="${args.themeColor}"` : ""}`, `    :dataSource="dataSource"`, `    ${args.activeIndex !== void 0 ? `:activeIndex="${args.activeIndex}"` : ""}`, `    ${args.type ? `type="${args.type}"` : ""}`, `    ${args.prefix ? `prefix="${args.prefix}"` : ""}`, `    ${args.isDisabled !== void 0 ? `:isDisabled="${args.isDisabled}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, "  ></Tabs>", "</template>"].filter(Boolean).join("\n").trim();
        }
      }
    }
  }
};
const TabsTypesStory = {
  name: "頁籤類型",
  args: {
    themeColor: "primary",
    dataSource: [{
      title: "Tab 1",
      content: "Content 1"
    }, {
      title: "Tab 2",
      content: "Content 2"
    }, {
      title: "Tab 3",
      content: "Content 3"
    }],
    activeIndex: 0,
    // type: "default",
    prefix: "SvgArrowDown",
    isDisabled: false,
    className: ""
  },
  render: (args) => ({
    components: {
      Tabs: _sfc_main
    },
    setup() {
      return {
        args
      };
    },
    template: `
      <div style="display:flex; flex-direction: column; gap:24px">
        <Tabs
          :themeColor="args.themeColor"
          :dataSource="args.dataSource"
          :activeIndex="args.activeIndex"
          type="basic"
          :prefix="args.prefix"
          :isDisabled="args.isDisabled"
          :className="args.className"
        ></Tabs>
        <Tabs
          :themeColor="args.themeColor"
          :dataSource="args.dataSource"
          :activeIndex="args.activeIndex"
          type="outline"
          :prefix="args.prefix"
          :isDisabled="args.isDisabled"
          :className="args.className"
        ></Tabs>
        <Tabs
          :themeColor="args.themeColor"
          :dataSource="args.dataSource"
          :activeIndex="args.activeIndex"
          type="button"
          :prefix="args.prefix"
          :isDisabled="args.isDisabled"
          :className="args.className"
        ></Tabs>
      </div>`
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
          const dataSourceString = formatDataSource(args.dataSource);
          return [`<script setup>`, `import { Tabs } from "@ded-wds-vue/ui";`, `const dataSource = [`, `${dataSourceString}`, `];`, `<\/script>`, "", "<template>", "  <Tabs", `    ${args.themeColor ? `themeColor="${args.themeColor}"` : ""}`, `    :dataSource="dataSource"`, `    ${args.activeIndex !== void 0 ? `:activeIndex="${args.activeIndex}"` : ""}`, `    type="basic"`, `    ${args.prefix ? `prefix="${args.prefix}"` : ""}`, `    ${args.isDisabled !== void 0 ? `:isDisabled="${args.isDisabled}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, "  ></Tabs>", "  <Tabs", `    ${args.themeColor ? `themeColor="${args.themeColor}"` : ""}`, `    :dataSource="dataSource"`, `    ${args.activeIndex !== void 0 ? `:activeIndex="${args.activeIndex}"` : ""}`, `    type="outline"`, `    ${args.prefix ? `prefix="${args.prefix}"` : ""}`, `    ${args.isDisabled !== void 0 ? `:isDisabled="${args.isDisabled}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, "  ></Tabs>", "  <Tabs", `    ${args.themeColor ? `themeColor="${args.themeColor}"` : ""}`, `    :dataSource="dataSource"`, `    ${args.activeIndex !== void 0 ? `:activeIndex="${args.activeIndex}"` : ""}`, `    type="button"`, `    ${args.prefix ? `prefix="${args.prefix}"` : ""}`, `    ${args.isDisabled !== void 0 ? `:isDisabled="${args.isDisabled}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, "  ></Tabs>", "</template>"].filter(Boolean).join("\n").trim();
        }
      }
    }
  }
};
const TabsColorStory = {
  name: "主題色彩",
  args: {
    // themeColor: "primary",
    dataSource: [{
      title: "Tab 1",
      content: "Content 1"
    }, {
      title: "Tab 2",
      content: "Content 2"
    }, {
      title: "Tab 3",
      content: "Content 3"
    }],
    activeIndex: 0,
    type: "button",
    prefix: "SvgArrowDown",
    isDisabled: false,
    className: ""
  },
  render: (args) => ({
    components: {
      Tabs: _sfc_main
    },
    setup() {
      return {
        args
      };
    },
    template: `
      <div style="display:flex; flex-direction: column; gap:16px">
        <Tabs
          themeColor="primary"
          :dataSource="args.dataSource"
          :activeIndex="args.activeIndex"
          :type="args.type"
          :prefix="args.prefix"
          :isDisabled="args.isDisabled"
          :className="args.className"
        ></Tabs>
        <Tabs
          themeColor="secondary"
          :dataSource="args.dataSource"
          :activeIndex="args.activeIndex"
          :type="args.type"
          :prefix="args.prefix"
          :isDisabled="args.isDisabled"
          :className="args.className"
        ></Tabs>
        <Tabs
          themeColor="neutral"
          :dataSource="args.dataSource"
          :activeIndex="args.activeIndex"
          :type="args.type"
          :prefix="args.prefix"
          :isDisabled="args.isDisabled"
          :className="args.className"
        ></Tabs>
        <Tabs
          themeColor="info"
          :dataSource="args.dataSource"
          :activeIndex="args.activeIndex"
          :type="args.type"
          :prefix="args.prefix"
          :isDisabled="args.isDisabled"
          :className="args.className"
        ></Tabs>
        <Tabs
          themeColor="success"
          :dataSource="args.dataSource"
          :activeIndex="args.activeIndex"
          :type="args.type"
          :prefix="args.prefix"
          :isDisabled="args.isDisabled"
          :className="args.className"
        ></Tabs>
        <Tabs
          themeColor="warning"
          :dataSource="args.dataSource"
          :activeIndex="args.activeIndex"
          :type="args.type"
          :prefix="args.prefix"
          :isDisabled="args.isDisabled"
          :className="args.className"
        ></Tabs>
        <Tabs
          themeColor="error"
          :dataSource="args.dataSource"
          :activeIndex="args.activeIndex"
          :type="args.type"
          :prefix="args.prefix"
          :isDisabled="args.isDisabled"
          :className="args.className"
        ></Tabs>
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
          const dataSourceString = formatDataSource(args.dataSource);
          return [`<script setup>`, `import { Tabs } from "@ded-wds-vue/ui";`, `const dataSource = [`, `${dataSourceString}`, `];`, `<\/script>`, "", "<template>", "  <Tabs", `    themeColor="primary"`, `    :dataSource="dataSource"`, `    ${args.activeIndex !== void 0 ? `:activeIndex="${args.activeIndex}"` : ""}`, `    ${args.type ? `type="${args.type}"` : ""}`, `    ${args.prefix ? `prefix="${args.prefix}"` : ""}`, `    ${args.isDisabled !== void 0 ? `:isDisabled="${args.isDisabled}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, "  ></Tabs>", "  <Tabs", `    themeColor="secondary"`, `    :dataSource="dataSource"`, `    ${args.activeIndex !== void 0 ? `:activeIndex="${args.activeIndex}"` : ""}`, `    ${args.type ? `type="${args.type}"` : ""}`, `    ${args.prefix ? `prefix="${args.prefix}"` : ""}`, `    ${args.isDisabled !== void 0 ? `:isDisabled="${args.isDisabled}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, "  ></Tabs>", "  <Tabs", `    themeColor="neutral"`, `    :dataSource="dataSource"`, `    ${args.activeIndex !== void 0 ? `:activeIndex="${args.activeIndex}"` : ""}`, `    ${args.type ? `type="${args.type}"` : ""}`, `    ${args.prefix ? `prefix="${args.prefix}"` : ""}`, `    ${args.isDisabled !== void 0 ? `:isDisabled="${args.isDisabled}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, "  ></Tabs>", "  <Tabs", `    themeColor="info"`, `    :dataSource="dataSource"`, `    ${args.activeIndex !== void 0 ? `:activeIndex="${args.activeIndex}"` : ""}`, `    ${args.type ? `type="${args.type}"` : ""}`, `    ${args.prefix ? `prefix="${args.prefix}"` : ""}`, `    ${args.isDisabled !== void 0 ? `:isDisabled="${args.isDisabled}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, "  ></Tabs>", "  <Tabs", `    themeColor="success"`, `    :dataSource="dataSource"`, `    ${args.activeIndex !== void 0 ? `:activeIndex="${args.activeIndex}"` : ""}`, `    ${args.type ? `type="${args.type}"` : ""}`, `    ${args.prefix ? `prefix="${args.prefix}"` : ""}`, `    ${args.isDisabled !== void 0 ? `:isDisabled="${args.isDisabled}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, "  ></Tabs>", "  <Tabs", `    themeColor="warning"`, `    :dataSource="dataSource"`, `    ${args.activeIndex !== void 0 ? `:activeIndex="${args.activeIndex}"` : ""}`, `    ${args.type ? `type="${args.type}"` : ""}`, `    ${args.prefix ? `prefix="${args.prefix}"` : ""}`, `    ${args.isDisabled !== void 0 ? `:isDisabled="${args.isDisabled}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, "  ></Tabs>", "  <Tabs", `    themeColor="error"`, `    :dataSource="dataSource"`, `    ${args.activeIndex !== void 0 ? `:activeIndex="${args.activeIndex}"` : ""}`, `    ${args.type ? `type="${args.type}"` : ""}`, `    ${args.prefix ? `prefix="${args.prefix}"` : ""}`, `    ${args.isDisabled !== void 0 ? `:isDisabled="${args.isDisabled}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, "  ></Tabs>", "</template>"].filter(Boolean).join("\n").trim();
        }
      }
    }
  }
};
DefaultTabs.parameters = {
  ...DefaultTabs.parameters,
  docs: {
    ...(_a = DefaultTabs.parameters) == null ? void 0 : _a.docs,
    source: {
      originalSource: '{\n  name: "預設項目",\n  args: {\n    themeColor: "primary",\n    dataSource: [{\n      title: "Tab 1",\n      content: "Content 1"\n    }, {\n      title: "Tab 2",\n      content: "Content 2"\n    }, {\n      title: "Tab 3",\n      content: "Content 3"\n    }],\n    activeIndex: 0,\n    type: "basic",\n    prefix: "SvgArrowDown",\n    isDisabled: false,\n    className: ""\n  },\n  render: args => ({\n    components: {\n      Tabs\n    },\n    setup() {\n      return {\n        args\n      };\n    },\n    template: `\n      <Tabs\n        :themeColor="args.themeColor"\n        :dataSource="args.dataSource"\n        :activeIndex="args.activeIndex"\n        :type="args.type"\n        :prefix="args.prefix"\n        :isDisabled="args.isDisabled"\n        :className="args.className"\n      ></Tabs>`\n  }),\n  // 控制 controls 中能控制的參數\n  parameters: {\n    controls: {\n      // include: [\'themeColor\', \'label\', \'value\', \'name\' ],\n    },\n    docs: {\n      source: {\n        transform: (src, storyContext) => {\n          const {\n            args\n          } = storyContext;\n          const dataSourceString = formatDataSource(args.dataSource);\n          return [`<script setup>`, `import { Tabs } from "@ded-wds-vue/ui";`, `const dataSource = [`, `${dataSourceString}`, `];`, `<\/script>`, "", "<template>", "  <Tabs", `    ${args.themeColor ? `themeColor="${args.themeColor}"` : ""}`, `    :dataSource="dataSource"`, `    ${args.activeIndex !== undefined ? `:activeIndex="${args.activeIndex}"` : ""}`, `    ${args.type ? `type="${args.type}"` : ""}`, `    ${args.prefix ? `prefix="${args.prefix}"` : ""}`, `    ${args.isDisabled !== undefined ? `:isDisabled="${args.isDisabled}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, "  ></Tabs>", "</template>"].filter(Boolean).join("\\n").trim();\n        }\n      }\n    }\n  }\n}',
      ...(_c = (_b = DefaultTabs.parameters) == null ? void 0 : _b.docs) == null ? void 0 : _c.source
    }
  }
};
TabsTypesStory.parameters = {
  ...TabsTypesStory.parameters,
  docs: {
    ...(_d = TabsTypesStory.parameters) == null ? void 0 : _d.docs,
    source: {
      originalSource: '{\n  name: "頁籤類型",\n  args: {\n    themeColor: "primary",\n    dataSource: [{\n      title: "Tab 1",\n      content: "Content 1"\n    }, {\n      title: "Tab 2",\n      content: "Content 2"\n    }, {\n      title: "Tab 3",\n      content: "Content 3"\n    }],\n    activeIndex: 0,\n    // type: "default",\n    prefix: "SvgArrowDown",\n    isDisabled: false,\n    className: ""\n  },\n  render: args => ({\n    components: {\n      Tabs\n    },\n    setup() {\n      return {\n        args\n      };\n    },\n    template: `\n      <div style="display:flex; flex-direction: column; gap:24px">\n        <Tabs\n          :themeColor="args.themeColor"\n          :dataSource="args.dataSource"\n          :activeIndex="args.activeIndex"\n          type="basic"\n          :prefix="args.prefix"\n          :isDisabled="args.isDisabled"\n          :className="args.className"\n        ></Tabs>\n        <Tabs\n          :themeColor="args.themeColor"\n          :dataSource="args.dataSource"\n          :activeIndex="args.activeIndex"\n          type="outline"\n          :prefix="args.prefix"\n          :isDisabled="args.isDisabled"\n          :className="args.className"\n        ></Tabs>\n        <Tabs\n          :themeColor="args.themeColor"\n          :dataSource="args.dataSource"\n          :activeIndex="args.activeIndex"\n          type="button"\n          :prefix="args.prefix"\n          :isDisabled="args.isDisabled"\n          :className="args.className"\n        ></Tabs>\n      </div>`\n  }),\n  // 控制 controls 中能控制的參數\n  parameters: {\n    controls: {\n      // include: [\'themeColor\', \'label\', \'value\', \'name\' ],\n      exclude: ["type"]\n    },\n    docs: {\n      source: {\n        transform: (src, storyContext) => {\n          const {\n            args\n          } = storyContext;\n          const dataSourceString = formatDataSource(args.dataSource);\n          return [`<script setup>`, `import { Tabs } from "@ded-wds-vue/ui";`, `const dataSource = [`, `${dataSourceString}`, `];`, `<\/script>`, "", "<template>", "  <Tabs", `    ${args.themeColor ? `themeColor="${args.themeColor}"` : ""}`, `    :dataSource="dataSource"`, `    ${args.activeIndex !== undefined ? `:activeIndex="${args.activeIndex}"` : ""}`, `    type="basic"`, `    ${args.prefix ? `prefix="${args.prefix}"` : ""}`, `    ${args.isDisabled !== undefined ? `:isDisabled="${args.isDisabled}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, "  ></Tabs>", "  <Tabs", `    ${args.themeColor ? `themeColor="${args.themeColor}"` : ""}`, `    :dataSource="dataSource"`, `    ${args.activeIndex !== undefined ? `:activeIndex="${args.activeIndex}"` : ""}`, `    type="outline"`, `    ${args.prefix ? `prefix="${args.prefix}"` : ""}`, `    ${args.isDisabled !== undefined ? `:isDisabled="${args.isDisabled}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, "  ></Tabs>", "  <Tabs", `    ${args.themeColor ? `themeColor="${args.themeColor}"` : ""}`, `    :dataSource="dataSource"`, `    ${args.activeIndex !== undefined ? `:activeIndex="${args.activeIndex}"` : ""}`, `    type="button"`, `    ${args.prefix ? `prefix="${args.prefix}"` : ""}`, `    ${args.isDisabled !== undefined ? `:isDisabled="${args.isDisabled}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, "  ></Tabs>", "</template>"].filter(Boolean).join("\\n").trim();\n        }\n      }\n    }\n  }\n}',
      ...(_f = (_e = TabsTypesStory.parameters) == null ? void 0 : _e.docs) == null ? void 0 : _f.source
    }
  }
};
TabsColorStory.parameters = {
  ...TabsColorStory.parameters,
  docs: {
    ...(_g = TabsColorStory.parameters) == null ? void 0 : _g.docs,
    source: {
      originalSource: '{\n  name: "主題色彩",\n  args: {\n    // themeColor: "primary",\n    dataSource: [{\n      title: "Tab 1",\n      content: "Content 1"\n    }, {\n      title: "Tab 2",\n      content: "Content 2"\n    }, {\n      title: "Tab 3",\n      content: "Content 3"\n    }],\n    activeIndex: 0,\n    type: "button",\n    prefix: "SvgArrowDown",\n    isDisabled: false,\n    className: ""\n  },\n  render: args => ({\n    components: {\n      Tabs\n    },\n    setup() {\n      return {\n        args\n      };\n    },\n    template: `\n      <div style="display:flex; flex-direction: column; gap:16px">\n        <Tabs\n          themeColor="primary"\n          :dataSource="args.dataSource"\n          :activeIndex="args.activeIndex"\n          :type="args.type"\n          :prefix="args.prefix"\n          :isDisabled="args.isDisabled"\n          :className="args.className"\n        ></Tabs>\n        <Tabs\n          themeColor="secondary"\n          :dataSource="args.dataSource"\n          :activeIndex="args.activeIndex"\n          :type="args.type"\n          :prefix="args.prefix"\n          :isDisabled="args.isDisabled"\n          :className="args.className"\n        ></Tabs>\n        <Tabs\n          themeColor="neutral"\n          :dataSource="args.dataSource"\n          :activeIndex="args.activeIndex"\n          :type="args.type"\n          :prefix="args.prefix"\n          :isDisabled="args.isDisabled"\n          :className="args.className"\n        ></Tabs>\n        <Tabs\n          themeColor="info"\n          :dataSource="args.dataSource"\n          :activeIndex="args.activeIndex"\n          :type="args.type"\n          :prefix="args.prefix"\n          :isDisabled="args.isDisabled"\n          :className="args.className"\n        ></Tabs>\n        <Tabs\n          themeColor="success"\n          :dataSource="args.dataSource"\n          :activeIndex="args.activeIndex"\n          :type="args.type"\n          :prefix="args.prefix"\n          :isDisabled="args.isDisabled"\n          :className="args.className"\n        ></Tabs>\n        <Tabs\n          themeColor="warning"\n          :dataSource="args.dataSource"\n          :activeIndex="args.activeIndex"\n          :type="args.type"\n          :prefix="args.prefix"\n          :isDisabled="args.isDisabled"\n          :className="args.className"\n        ></Tabs>\n        <Tabs\n          themeColor="error"\n          :dataSource="args.dataSource"\n          :activeIndex="args.activeIndex"\n          :type="args.type"\n          :prefix="args.prefix"\n          :isDisabled="args.isDisabled"\n          :className="args.className"\n        ></Tabs>\n      </div>`\n  }),\n  // 控制 controls 中能控制的參數\n  parameters: {\n    controls: {\n      // include: [\'themeColor\', \'label\', \'value\', \'name\' ],\n      exclude: ["themeColor"]\n    },\n    docs: {\n      source: {\n        transform: (src, storyContext) => {\n          const {\n            args\n          } = storyContext;\n          const dataSourceString = formatDataSource(args.dataSource);\n          return [`<script setup>`, `import { Tabs } from "@ded-wds-vue/ui";`, `const dataSource = [`, `${dataSourceString}`, `];`, `<\/script>`, "", "<template>", "  <Tabs", `    themeColor="primary"`, `    :dataSource="dataSource"`, `    ${args.activeIndex !== undefined ? `:activeIndex="${args.activeIndex}"` : ""}`, `    ${args.type ? `type="${args.type}"` : ""}`, `    ${args.prefix ? `prefix="${args.prefix}"` : ""}`, `    ${args.isDisabled !== undefined ? `:isDisabled="${args.isDisabled}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, "  ></Tabs>", "  <Tabs", `    themeColor="secondary"`, `    :dataSource="dataSource"`, `    ${args.activeIndex !== undefined ? `:activeIndex="${args.activeIndex}"` : ""}`, `    ${args.type ? `type="${args.type}"` : ""}`, `    ${args.prefix ? `prefix="${args.prefix}"` : ""}`, `    ${args.isDisabled !== undefined ? `:isDisabled="${args.isDisabled}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, "  ></Tabs>", "  <Tabs", `    themeColor="neutral"`, `    :dataSource="dataSource"`, `    ${args.activeIndex !== undefined ? `:activeIndex="${args.activeIndex}"` : ""}`, `    ${args.type ? `type="${args.type}"` : ""}`, `    ${args.prefix ? `prefix="${args.prefix}"` : ""}`, `    ${args.isDisabled !== undefined ? `:isDisabled="${args.isDisabled}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, "  ></Tabs>", "  <Tabs", `    themeColor="info"`, `    :dataSource="dataSource"`, `    ${args.activeIndex !== undefined ? `:activeIndex="${args.activeIndex}"` : ""}`, `    ${args.type ? `type="${args.type}"` : ""}`, `    ${args.prefix ? `prefix="${args.prefix}"` : ""}`, `    ${args.isDisabled !== undefined ? `:isDisabled="${args.isDisabled}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, "  ></Tabs>", "  <Tabs", `    themeColor="success"`, `    :dataSource="dataSource"`, `    ${args.activeIndex !== undefined ? `:activeIndex="${args.activeIndex}"` : ""}`, `    ${args.type ? `type="${args.type}"` : ""}`, `    ${args.prefix ? `prefix="${args.prefix}"` : ""}`, `    ${args.isDisabled !== undefined ? `:isDisabled="${args.isDisabled}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, "  ></Tabs>", "  <Tabs", `    themeColor="warning"`, `    :dataSource="dataSource"`, `    ${args.activeIndex !== undefined ? `:activeIndex="${args.activeIndex}"` : ""}`, `    ${args.type ? `type="${args.type}"` : ""}`, `    ${args.prefix ? `prefix="${args.prefix}"` : ""}`, `    ${args.isDisabled !== undefined ? `:isDisabled="${args.isDisabled}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, "  ></Tabs>", "  <Tabs", `    themeColor="error"`, `    :dataSource="dataSource"`, `    ${args.activeIndex !== undefined ? `:activeIndex="${args.activeIndex}"` : ""}`, `    ${args.type ? `type="${args.type}"` : ""}`, `    ${args.prefix ? `prefix="${args.prefix}"` : ""}`, `    ${args.isDisabled !== undefined ? `:isDisabled="${args.isDisabled}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, "  ></Tabs>", "</template>"].filter(Boolean).join("\\n").trim();\n        }\n      }\n    }\n  }\n}',
      ...(_i = (_h = TabsColorStory.parameters) == null ? void 0 : _h.docs) == null ? void 0 : _i.source
    }
  }
};
const __namedExportsOrder = ["DefaultTabs", "TabsTypesStory", "TabsColorStory"];
export {
  DefaultTabs,
  TabsColorStory,
  TabsTypesStory,
  __namedExportsOrder,
  Tabs_stories as default
};

var _a, _b, _c, _d, _e, _f, _g, _h, _i;
import { v as ref, w as watch, A as onMounted, E as onBeforeUnmount, c as createElementBlock, o as openBlock, a as createBaseVNode, n as normalizeClass, d as createCommentVNode, b as createVNode, r as renderSlot, g as computed, F as Fragment, q as renderList, h, j as createBlock, e as withCtx, l as resolveDynamicComponent, f as createTextVNode, t as toDisplayString } from "./vue.esm-bundler-K7CzQrxl.js";
import { _ as _sfc_main$2 } from "./Icon-B6pI5HKs.js";
import { _ as _sfc_main$3 } from "./Button-8IAwqsIt.js";
import { _ as _sfc_main$4 } from "./Title-BgzIyXq9.js";
const _hoisted_1$1 = ["open"];
const _hoisted_2$1 = { class: "ded-accordion-title-content" };
const _hoisted_3 = {
  key: 0,
  class: "ded-accordion-title-icon"
};
const _sfc_main$1 = {
  __name: "AccordionItem",
  props: {
    prefix: String,
    borderStyle: {
      type: String,
      default: "",
      validator: (value) => ["solid", "highlight"].includes(value)
    },
    isSmallSize: {
      type: Boolean,
      default: true
    },
    isOpen: {
      type: Boolean,
      default: false
    },
    className: String
  },
  setup(__props) {
    const props = __props;
    const isItemOpen = ref(props.isOpen);
    const detailsRef = ref(null);
    const contentRef = ref(null);
    watch(
      () => props.isOpen,
      (newVal) => {
        isItemOpen.value = newVal;
      }
    );
    function handleToggle(event) {
      isItemOpen.value = event.target.open;
    }
    function addAnimation() {
      if (detailsRef.value && contentRef.value) {
        const content = contentRef.value;
        if (detailsRef.value.open) {
          content.animate(
            [
              { opacity: 0, height: "0px" },
              { opacity: 1, height: `${content.scrollHeight}px` }
            ],
            {
              duration: 500,
              easing: "ease-in-out"
            }
          );
        } else {
          content.animate(
            [
              { opacity: 1, height: `${content.scrollHeight}px` },
              { opacity: 0, height: "0px" }
            ],
            {
              duration: 500,
              easing: "ease-in-out"
            }
          );
        }
      }
    }
    onMounted(() => {
      if (detailsRef.value) {
        detailsRef.value.addEventListener("toggle", addAnimation);
      }
    });
    onBeforeUnmount(() => {
      if (detailsRef.value) {
        detailsRef.value.removeEventListener("toggle", addAnimation);
      }
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("li", {
        class: normalizeClass(["ded-accordion-item", `ded-accordion-item-${props.borderStyle}`])
      }, [
        createBaseVNode("details", {
          ref_key: "detailsRef",
          ref: detailsRef,
          open: isItemOpen.value,
          class: normalizeClass(["ded-accordion-detail", { [props.className]: !!props.className }]),
          onToggle: handleToggle
        }, [
          createBaseVNode("summary", {
            class: normalizeClass(["ded-accordion-title", props.isSmallSize ? "ded-accordion-title-small" : "ded-accordion-title-default"])
          }, [
            createBaseVNode("span", _hoisted_2$1, [
              props.prefix ? (openBlock(), createElementBlock("span", _hoisted_3, [
                createVNode(_sfc_main$2, {
                  name: props.prefix
                }, null, 8, ["name"])
              ])) : createCommentVNode("", true),
              createBaseVNode("span", {
                class: normalizeClass(
                  props.isSmallSize ? "ded-accordion-title-content-small" : "ded-accordion-title-content-default"
                )
              }, [
                renderSlot(_ctx.$slots, "label")
              ], 2)
            ]),
            createBaseVNode("span", {
              class: normalizeClass([isItemOpen.value ? "ded-accordion-item-open" : "ded-accordion-item-close", "ded-icon-medium"])
            }, [
              createVNode(_sfc_main$2, {
                size: "24",
                name: "SvgArrowDown"
              })
            ], 2)
          ], 2),
          createBaseVNode("div", {
            ref_key: "contentRef",
            ref: contentRef,
            class: "ded-accordion-detail-content"
          }, [
            renderSlot(_ctx.$slots, "detail")
          ], 512)
        ], 42, _hoisted_1$1)
      ], 2);
    };
  }
};
_sfc_main$1.__docgenInfo = { "exportName": "default", "displayName": "AccordionItem", "description": "", "tags": {}, "props": [{ "name": "prefix", "type": { "name": "string" } }, { "name": "borderStyle", "type": { "name": "string" }, "defaultValue": { "func": false, "value": '""' }, "values": ["solid", "highlight"] }, { "name": "isSmallSize", "type": { "name": "boolean" }, "defaultValue": { "func": false, "value": "true" } }, { "name": "isOpen", "type": { "name": "boolean" }, "defaultValue": { "func": false, "value": "false" } }, { "name": "className", "type": { "name": "string" } }], "slots": [{ "name": "label" }, { "name": "detail" }], "sourceFiles": ["/Users/auouser/Desktop/Work_Space/DED-WDS_VUE/libs/src/ui/element/Accordion/AccordionItem.vue"] };
const _hoisted_1 = { class: "ded-accordion-container" };
const _hoisted_2 = { key: 1 };
const _sfc_main = {
  __name: "Accordion",
  props: {
    dataSource: {
      type: Array,
      required: true
    },
    prefix: {
      type: String
    },
    borderStyle: {
      type: String,
      default: "highlight",
      validator: (value) => ["solid", "highlight"].includes(value)
    },
    isSmallSize: {
      type: Boolean,
      default: false
    },
    isOpenAll: {
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
    const allOpen = computed(() => props.isOpenAll);
    const sanitizedDataSource = computed(() => {
      return props.dataSource.map((item) => ({
        ...item,
        label: typeof item.label === "function" ? item.label(h) : item.label,
        detail: typeof item.detail === "function" ? item.detail(h) : item.detail
      }));
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createBaseVNode("ul", {
          class: normalizeClass(["ded-accordion", {
            [`ded-accordion-${props.borderStyle}`]: props.borderStyle,
            [props.className]: !!props.className
          }])
        }, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(sanitizedDataSource.value, (item) => {
            return openBlock(), createBlock(_sfc_main$1, {
              key: item.id,
              prefix: props.prefix,
              "border-style": props.borderStyle,
              "is-small-size": props.isSmallSize,
              "is-open": allOpen.value
            }, {
              label: withCtx(() => [
                item.label ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
                  typeof item.label === "object" ? (openBlock(), createBlock(resolveDynamicComponent(item.label), { key: 0 })) : (openBlock(), createElementBlock("span", _hoisted_2, toDisplayString(item.label), 1))
                ], 64)) : createCommentVNode("", true)
              ]),
              detail: withCtx(() => [
                (openBlock(true), createElementBlock(Fragment, null, renderList(item.detail, (detailItem, index) => {
                  return openBlock(), createElementBlock(Fragment, { key: index }, [
                    typeof detailItem === "object" && detailItem.type ? (openBlock(), createBlock(resolveDynamicComponent(detailItem), { key: 0 })) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
                      createTextVNode(toDisplayString(detailItem), 1)
                    ], 64))
                  ], 64);
                }), 128))
              ]),
              _: 2
            }, 1032, ["prefix", "border-style", "is-small-size", "is-open"]);
          }), 128))
        ], 2)
      ]);
    };
  }
};
_sfc_main.__docgenInfo = { "exportName": "default", "displayName": "Accordion", "description": "", "tags": {}, "props": [{ "name": "dataSource", "type": { "name": "array" }, "required": true }, { "name": "prefix", "type": { "name": "string" } }, { "name": "borderStyle", "type": { "name": "string" }, "defaultValue": { "func": false, "value": '"highlight"' }, "values": ["solid", "highlight"] }, { "name": "isSmallSize", "type": { "name": "boolean" }, "defaultValue": { "func": false, "value": "false" } }, { "name": "isOpenAll", "type": { "name": "boolean" }, "defaultValue": { "func": false, "value": "false" } }, { "name": "className", "type": { "name": "string" }, "defaultValue": { "func": false, "value": '""' } }], "sourceFiles": ["/Users/auouser/Desktop/Work_Space/DED-WDS_VUE/libs/src/ui/element/Accordion/Accordion.vue"] };
const dataSource = [{
  id: "1",
  label: () => h(_sfc_main$4, {
    themeColor: "primary"
  }, "What is Vue?"),
  detail: () => [h("p", {}, "Vue is a progressive JavaScript framework for building user interfaces."), h(_sfc_main$3, {
    themeColor: "primary",
    variant: "soft",
    suffix: "SvgArrowDown",
    size: "small",
    width: "fit",
    borderWidth: "none",
    radius: "4px",
    onClick: () => {
      alert("Button clicked!");
    }
  }, "Button")]
}, {
  id: "2",
  label: () => h(_sfc_main$4, {
    themeColor: "primary"
  }, "What are the features of Vue?"),
  detail: () => [h("p", {}, "The features of Vue include reactive data binding, component-based architecture, directives, and a virtual DOM.")]
}, {
  id: "3",
  label: () => h(_sfc_main$4, {
    themeColor: "primary"
  }, "What is included in the Vue ecosystem?"),
  detail: () => [h("p", {}, "The Vue ecosystem includes tools like Vue Router (for routing), Pinia (for state management), and Vite (for fast and modern development).")]
}, {
  id: "4",
  label: () => h(_sfc_main$4, {
    themeColor: "primary"
  }, "What are the advantages of using Vue?"),
  detail: () => [h("p", {}, "The advantages of using Vue include a gentle learning curve, high flexibility, small size, and comprehensive documentation, making it easy for developers to gradually adopt and integrate into existing projects.")]
}];
const oneRecord = [{
  id: "1",
  label: () => h(_sfc_main$4, {
    themeColor: "primary"
  }, "What is Vue?"),
  detail: () => [h("p", {}, "Vue is a progressive JavaScript framework for building user interfaces."), h(_sfc_main$3, {
    themeColor: "primary",
    variant: "soft",
    suffix: "SvgArrowDown",
    size: "small",
    width: "fit",
    borderWidth: "none",
    radius: "4px",
    onClick: () => {
      alert("Button clicked!");
    }
  }, "Button")]
}];
const Accordion_stories = {
  title: "Component/Accordion",
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
          summary: "{ id: string; label: VNode; detail: VNode; }[]"
        }
      }
    },
    prefix: {
      description: "前置元素",
      control: {
        type: "select",
        labels: {
          "": "none",
          "primary": "SvgInfo"
        }
      },
      options: ["", "SvgInfo"],
      table: {
        type: {
          summary: "string"
        }
      }
    },
    borderStyle: {
      description: "邊框樣式",
      control: {
        type: "select"
      },
      options: ["solid", "highlight"],
      table: {
        type: {
          summary: "solid | highlight "
        }
      }
    },
    isSmallSize: {
      description: "是否為小尺寸",
      control: {
        type: "boolean"
      }
    },
    isOpenAll: {
      description: "是否全部展開",
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
    docs: {
      title: "Accordion",
      description: {
        component: "折疊選單組件的呈現及說明。"
      }
    }
  }
};
const AccordionDefault = {
  name: "預設項目",
  args: {
    dataSource,
    prefix: "SvgInfo",
    borderStyle: "highlight",
    isSmallSize: false,
    isOpenAll: false,
    className: ""
  },
  render: (args) => ({
    components: {
      Accordion: _sfc_main,
      Title: _sfc_main$4,
      Button: _sfc_main$3,
      h
    },
    setup() {
      return {
        args,
        h
      };
    },
    template: `
      <Accordion
          :dataSource="args.dataSource"
          :prefix="args.prefix"
          :borderStyle="args.borderStyle"
          :isSmallSize="args.isSmallSize"
          :isOpenAll="args.isOpenAll"
          :className="args.className"
      ></Accordion>
        `
  }),
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
          return [`<script setup>`, `import { h } from "vue";`, `import { Accordion, Title, Button } from "@ded-wds-vue/ui";`, ``, `const dataSource = [`, `  {`, `    id: "1",`, `    label: () => h(Title, { themeColor: "primary" }, "What is Vue?"),`, `    detail: () => [`, `      h("p", {}, "Vue is a progressive JavaScript framework for building user interfaces."),`, `      h(Button, {`, `        themeColor: "primary",`, `        variant: "soft",`, `        suffix: "SvgArrowDown",`, `        size: "small",`, `        width: "fit",`, `        borderWidth: "none",`, `        radius: "4px",`, `        onClick: () => {`, `          alert("Button clicked!");`, `        }`, `      }, "Button")`, `    ],`, `  },`, `  {`, `    id: "2",`, `    label: () => h(Title, { themeColor: "primary" }, "What are the features of Vue?"),`, `    detail: () => [`, `      h("p", {}, "The features of Vue include reactive data binding, component-based architecture, directives, and a virtual DOM."),`, `    ],`, `  },`, `  {`, `    id: "3",`, `    label: () => h(Title, { themeColor: "primary" }, "What is included in the Vue ecosystem?"),`, `    detail: () => [`, `      h("p", {}, "The Vue ecosystem includes tools like Vue Router (for routing), Pinia (for state management), and Vite (for fast and modern development)."),`, `    ],`, `  },`, `  {`, `    id: "4",`, `    label: () => h(Title, { themeColor: "primary" }, "What are the advantages of using Vue?"),`, `    detail: () => [`, `      h("p", {}, "The advantages of using Vue include a gentle learning curve, high flexibility, small size, and comprehensive documentation, making it easy for developers to gradually adopt and integrate into existing projects."),`, `    ],`, `  },`, `];`, `<\/script>`, "", "<template>", "  <Accordion", `    :dataSource="dataSource"`, `    ${args.prefix ? `prefix="${args.prefix}"` : ""}`, `    ${args.borderStyle ? `borderStyle="${args.borderStyle}"` : ""}`, `    ${args.isSmallSize !== void 0 ? `:isSmallSize="${args.isSmallSize}"` : ""}`, `    ${args.isOpenAll !== void 0 ? `:isOpenAll="${args.isOpenAll}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, "  ></Accordion>", "</template>"].join("\n").trim();
        }
      }
    }
  }
};
const AccordionBorderStyle = {
  name: "邊框樣式",
  args: {
    dataSource: oneRecord,
    prefix: "SvgInfo",
    borderStyle: "solid",
    isSmallSize: false,
    isOpenAll: false,
    className: ""
  },
  render: (args) => ({
    components: {
      Accordion: _sfc_main,
      Title: _sfc_main$4,
      Button: _sfc_main$3
    },
    setup() {
      return {
        args
      };
    },
    template: `
      <div style="display:flex; flex-direction: column; gap: 16px">
        <Accordion
          :dataSource="args.dataSource"
          :prefix="args.prefix"
          borderStyle="highlight"
          :isSmallSize="args.isSmallSize"
          :isOpenAll="args.isOpenAll"
          :className="args.className"
        ></Accordion>
        <Accordion
          :dataSource="args.dataSource"
          :prefix="args.prefix"
          borderStyle="solid"
          :isSmallSize="args.isSmallSize"
          :isOpenAll="args.isOpenAll"
          :className="args.className"
        ></Accordion>
      </div>
        `
  }),
  parameters: {
    controls: {
      // include: ['themeColor', 'label', 'value', 'name' ],
      exclude: ["borderStyle"]
    },
    docs: {
      source: {
        transform: (src, storyContext) => {
          const {
            args
          } = storyContext;
          return [`<script setup>`, `import { h } from "vue";`, `import { Accordion, Title, Button } from "@ded-wds-vue/ui";`, ``, `const dataSource = [`, `  {`, `    id: "1",`, `    label: () => h(Title, { themeColor: "primary" }, "What is Vue?"),`, `    detail: () => [`, `      h("p", {}, "Vue is a progressive JavaScript framework for building user interfaces."),`, `      h(Button, {`, `        themeColor: "primary",`, `        variant: "soft",`, `        suffix: "SvgArrowDown",`, `        size: "small",`, `        width: "fit",`, `        borderWidth: "none",`, `        radius: "4px",`, `        onClick: () => {`, `          alert("Button clicked!");`, `        }`, `      }, "Button")`, `    ],`, `  },`, `];`, `<\/script>`, "", `<template>`, "  <Accordion", `    :dataSource="dataSource"`, `    ${args.prefix ? `prefix="${args.prefix}"` : ""}`, `    borderStyle="highlight"`, `    ${args.isSmallSize !== void 0 ? `:isSmallSize="${args.isSmallSize}"` : ""}`, `    ${args.isOpenAll !== void 0 ? `:isOpenAll="${args.isOpenAll}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, "  ></Accordion>", "  <Accordion", `    :dataSource="dataSource"`, `    ${args.prefix ? `prefix="${args.prefix}"` : ""}`, `    borderStyle="solid"`, `    ${args.isSmallSize !== void 0 ? `:isSmallSize="${args.isSmallSize}"` : ""}`, `    ${args.isOpenAll !== void 0 ? `:isOpenAll="${args.isOpenAll}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, "  ></Accordion>", `</template>`].join("\n").trim();
        }
      }
    }
  }
};
const AccordionSizeStory = {
  name: "元件尺寸",
  args: {
    dataSource: oneRecord,
    prefix: "SvgInfo",
    borderStyle: "solid",
    isSmallSize: true,
    isOpenAll: false,
    className: ""
  },
  render: (args) => ({
    components: {
      Accordion: _sfc_main,
      Title: _sfc_main$4,
      Button: _sfc_main$3
    },
    setup() {
      return {
        args
      };
    },
    template: `
      <div style="display:flex; flex-direction: column; gap: 16px">
        <Accordion
          :dataSource="args.dataSource"
          :prefix="args.prefix"
          :borderStyle="args.borderStyle"
          :isSmallSize="false"
          :isOpenAll="args.isOpenAll"
          :className="args.className"
        ></Accordion>
        <Accordion
          :dataSource="args.dataSource"
          :prefix="args.prefix"
          :borderStyle="args.borderStyle"
          :isSmallSize="true"
          :isOpenAll="args.isOpenAll"
          :className="args.className"
        ></Accordion>
      </div>
        `
  }),
  parameters: {
    controls: {
      // include: ['themeColor', 'label', 'value', 'name' ],
      exclude: ["isSmallSize"]
    },
    docs: {
      source: {
        transform: (src, storyContext) => {
          const {
            args
          } = storyContext;
          return [`<script setup>`, `import { h } from "vue";`, `import { Accordion, Title, Button } from "@ded-wds-vue/ui";`, ``, `const dataSource = [`, `  {`, `    id: "1",`, `    label: () => h(Title, { themeColor: "primary" }, "What is Vue?"),`, `    detail: () => [`, `      h("p", {}, "Vue is a progressive JavaScript framework for building user interfaces."),`, `      h(Button, {`, `        themeColor: "primary",`, `        variant: "soft",`, `        suffix: "SvgArrowDown",`, `        size: "small",`, `        width: "fit",`, `        borderWidth: "none",`, `        radius: "4px",`, `        onClick: () => {`, `          alert("Button clicked!");`, `        }`, `      }, "Button")`, `    ],`, `  },`, `];`, `<\/script>`, "", "<template>", "  <Accordion", `    :dataSource="dataSource"`, `    ${args.prefix ? `prefix="${args.prefix}"` : ""}`, `    ${args.borderStyle ? `borderStyle="${args.borderStyle}"` : ""}`, `    :isSmallSize='false'`, `    ${args.isOpenAll !== void 0 ? `:isOpenAll="${args.isOpenAll}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, "  ></Accordion>", "  <Accordion", `    :dataSource="dataSource"`, `    ${args.prefix ? `prefix="${args.prefix}"` : ""}`, `    ${args.borderStyle ? `borderStyle="${args.borderStyle}"` : ""}`, `    :isSmallSize='true'`, `    ${args.isOpenAll !== void 0 ? `:isOpenAll="${args.isOpenAll}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, "  ></Accordion>", "</template>"].join("\n").trim();
        }
      }
    }
  }
};
AccordionDefault.parameters = {
  ...AccordionDefault.parameters,
  docs: {
    ...(_a = AccordionDefault.parameters) == null ? void 0 : _a.docs,
    source: {
      originalSource: '{\n  name: "預設項目",\n  args: {\n    dataSource,\n    prefix: "SvgInfo",\n    borderStyle: "highlight",\n    isSmallSize: false,\n    isOpenAll: false,\n    className: ""\n  },\n  render: args => ({\n    components: {\n      Accordion,\n      Title,\n      Button,\n      h\n    },\n    setup() {\n      return {\n        args,\n        h\n      };\n    },\n    template: `\n      <Accordion\n          :dataSource="args.dataSource"\n          :prefix="args.prefix"\n          :borderStyle="args.borderStyle"\n          :isSmallSize="args.isSmallSize"\n          :isOpenAll="args.isOpenAll"\n          :className="args.className"\n      ></Accordion>\n        `\n  }),\n  parameters: {\n    controls: {\n      // include: [\'themeColor\', \'label\', \'value\', \'name\' ],\n    },\n    docs: {\n      source: {\n        transform: (src, storyContext) => {\n          const {\n            args\n          } = storyContext;\n          return [`<script setup>`, `import { h } from "vue";`, `import { Accordion, Title, Button } from "@ded-wds-vue/ui";`, ``, `const dataSource = [`, `  {`, `    id: "1",`, `    label: () => h(Title, { themeColor: "primary" }, "What is Vue?"),`, `    detail: () => [`, `      h("p", {}, "Vue is a progressive JavaScript framework for building user interfaces."),`, `      h(Button, {`, `        themeColor: "primary",`, `        variant: "soft",`, `        suffix: "SvgArrowDown",`, `        size: "small",`, `        width: "fit",`, `        borderWidth: "none",`, `        radius: "4px",`, `        onClick: () => {`, `          alert("Button clicked!");`, `        }`, `      }, "Button")`, `    ],`, `  },`, `  {`, `    id: "2",`, `    label: () => h(Title, { themeColor: "primary" }, "What are the features of Vue?"),`, `    detail: () => [`, `      h("p", {}, "The features of Vue include reactive data binding, component-based architecture, directives, and a virtual DOM."),`, `    ],`, `  },`, `  {`, `    id: "3",`, `    label: () => h(Title, { themeColor: "primary" }, "What is included in the Vue ecosystem?"),`, `    detail: () => [`, `      h("p", {}, "The Vue ecosystem includes tools like Vue Router (for routing), Pinia (for state management), and Vite (for fast and modern development)."),`, `    ],`, `  },`, `  {`, `    id: "4",`, `    label: () => h(Title, { themeColor: "primary" }, "What are the advantages of using Vue?"),`, `    detail: () => [`, `      h("p", {}, "The advantages of using Vue include a gentle learning curve, high flexibility, small size, and comprehensive documentation, making it easy for developers to gradually adopt and integrate into existing projects."),`, `    ],`, `  },`, `];`, `<\/script>`, "", "<template>", "  <Accordion", `    :dataSource="dataSource"`, `    ${args.prefix ? `prefix="${args.prefix}"` : ""}`, `    ${args.borderStyle ? `borderStyle="${args.borderStyle}"` : ""}`, `    ${args.isSmallSize !== undefined ? `:isSmallSize="${args.isSmallSize}"` : ""}`, `    ${args.isOpenAll !== undefined ? `:isOpenAll="${args.isOpenAll}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, "  ></Accordion>", "</template>"].join("\\n").trim();\n        }\n      }\n    }\n  }\n}',
      ...(_c = (_b = AccordionDefault.parameters) == null ? void 0 : _b.docs) == null ? void 0 : _c.source
    }
  }
};
AccordionBorderStyle.parameters = {
  ...AccordionBorderStyle.parameters,
  docs: {
    ...(_d = AccordionBorderStyle.parameters) == null ? void 0 : _d.docs,
    source: {
      originalSource: '{\n  name: "邊框樣式",\n  args: {\n    dataSource: oneRecord,\n    prefix: "SvgInfo",\n    borderStyle: "solid",\n    isSmallSize: false,\n    isOpenAll: false,\n    className: ""\n  },\n  render: args => ({\n    components: {\n      Accordion,\n      Title,\n      Button\n    },\n    setup() {\n      return {\n        args\n      };\n    },\n    template: `\n      <div style="display:flex; flex-direction: column; gap: 16px">\n        <Accordion\n          :dataSource="args.dataSource"\n          :prefix="args.prefix"\n          borderStyle="highlight"\n          :isSmallSize="args.isSmallSize"\n          :isOpenAll="args.isOpenAll"\n          :className="args.className"\n        ></Accordion>\n        <Accordion\n          :dataSource="args.dataSource"\n          :prefix="args.prefix"\n          borderStyle="solid"\n          :isSmallSize="args.isSmallSize"\n          :isOpenAll="args.isOpenAll"\n          :className="args.className"\n        ></Accordion>\n      </div>\n        `\n  }),\n  parameters: {\n    controls: {\n      // include: [\'themeColor\', \'label\', \'value\', \'name\' ],\n      exclude: ["borderStyle"]\n    },\n    docs: {\n      source: {\n        transform: (src, storyContext) => {\n          const {\n            args\n          } = storyContext;\n          return [`<script setup>`, `import { h } from "vue";`, `import { Accordion, Title, Button } from "@ded-wds-vue/ui";`, ``, `const dataSource = [`, `  {`, `    id: "1",`, `    label: () => h(Title, { themeColor: "primary" }, "What is Vue?"),`, `    detail: () => [`, `      h("p", {}, "Vue is a progressive JavaScript framework for building user interfaces."),`, `      h(Button, {`, `        themeColor: "primary",`, `        variant: "soft",`, `        suffix: "SvgArrowDown",`, `        size: "small",`, `        width: "fit",`, `        borderWidth: "none",`, `        radius: "4px",`, `        onClick: () => {`, `          alert("Button clicked!");`, `        }`, `      }, "Button")`, `    ],`, `  },`, `];`, `<\/script>`, "", `<template>`, "  <Accordion", `    :dataSource="dataSource"`, `    ${args.prefix ? `prefix="${args.prefix}"` : ""}`, `    borderStyle="highlight"`, `    ${args.isSmallSize !== undefined ? `:isSmallSize="${args.isSmallSize}"` : ""}`, `    ${args.isOpenAll !== undefined ? `:isOpenAll="${args.isOpenAll}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, "  ></Accordion>", "  <Accordion", `    :dataSource="dataSource"`, `    ${args.prefix ? `prefix="${args.prefix}"` : ""}`, `    borderStyle="solid"`, `    ${args.isSmallSize !== undefined ? `:isSmallSize="${args.isSmallSize}"` : ""}`, `    ${args.isOpenAll !== undefined ? `:isOpenAll="${args.isOpenAll}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, "  ></Accordion>", `</template>`].join("\\n").trim();\n        }\n      }\n    }\n  }\n}',
      ...(_f = (_e = AccordionBorderStyle.parameters) == null ? void 0 : _e.docs) == null ? void 0 : _f.source
    }
  }
};
AccordionSizeStory.parameters = {
  ...AccordionSizeStory.parameters,
  docs: {
    ...(_g = AccordionSizeStory.parameters) == null ? void 0 : _g.docs,
    source: {
      originalSource: '{\n  name: "元件尺寸",\n  args: {\n    dataSource: oneRecord,\n    prefix: "SvgInfo",\n    borderStyle: "solid",\n    isSmallSize: true,\n    isOpenAll: false,\n    className: ""\n  },\n  render: args => ({\n    components: {\n      Accordion,\n      Title,\n      Button\n    },\n    setup() {\n      return {\n        args\n      };\n    },\n    template: `\n      <div style="display:flex; flex-direction: column; gap: 16px">\n        <Accordion\n          :dataSource="args.dataSource"\n          :prefix="args.prefix"\n          :borderStyle="args.borderStyle"\n          :isSmallSize="false"\n          :isOpenAll="args.isOpenAll"\n          :className="args.className"\n        ></Accordion>\n        <Accordion\n          :dataSource="args.dataSource"\n          :prefix="args.prefix"\n          :borderStyle="args.borderStyle"\n          :isSmallSize="true"\n          :isOpenAll="args.isOpenAll"\n          :className="args.className"\n        ></Accordion>\n      </div>\n        `\n  }),\n  parameters: {\n    controls: {\n      // include: [\'themeColor\', \'label\', \'value\', \'name\' ],\n      exclude: ["isSmallSize"]\n    },\n    docs: {\n      source: {\n        transform: (src, storyContext) => {\n          const {\n            args\n          } = storyContext;\n          return [`<script setup>`, `import { h } from "vue";`, `import { Accordion, Title, Button } from "@ded-wds-vue/ui";`, ``, `const dataSource = [`, `  {`, `    id: "1",`, `    label: () => h(Title, { themeColor: "primary" }, "What is Vue?"),`, `    detail: () => [`, `      h("p", {}, "Vue is a progressive JavaScript framework for building user interfaces."),`, `      h(Button, {`, `        themeColor: "primary",`, `        variant: "soft",`, `        suffix: "SvgArrowDown",`, `        size: "small",`, `        width: "fit",`, `        borderWidth: "none",`, `        radius: "4px",`, `        onClick: () => {`, `          alert("Button clicked!");`, `        }`, `      }, "Button")`, `    ],`, `  },`, `];`, `<\/script>`, "", "<template>", "  <Accordion", `    :dataSource="dataSource"`, `    ${args.prefix ? `prefix="${args.prefix}"` : ""}`, `    ${args.borderStyle ? `borderStyle="${args.borderStyle}"` : ""}`, `    :isSmallSize=\'false\'`, `    ${args.isOpenAll !== undefined ? `:isOpenAll="${args.isOpenAll}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, "  ></Accordion>", "  <Accordion", `    :dataSource="dataSource"`, `    ${args.prefix ? `prefix="${args.prefix}"` : ""}`, `    ${args.borderStyle ? `borderStyle="${args.borderStyle}"` : ""}`, `    :isSmallSize=\'true\'`, `    ${args.isOpenAll !== undefined ? `:isOpenAll="${args.isOpenAll}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, "  ></Accordion>", "</template>"].join("\\n").trim();\n        }\n      }\n    }\n  }\n}',
      ...(_i = (_h = AccordionSizeStory.parameters) == null ? void 0 : _h.docs) == null ? void 0 : _i.source
    }
  }
};
const __namedExportsOrder = ["AccordionDefault", "AccordionBorderStyle", "AccordionSizeStory"];
export {
  AccordionBorderStyle,
  AccordionDefault,
  AccordionSizeStory,
  __namedExportsOrder,
  Accordion_stories as default
};

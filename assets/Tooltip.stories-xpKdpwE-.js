var _a, _b, _c;
import { _ as _sfc_main$1 } from "./Button-8IAwqsIt.js";
import { v as ref, A as onMounted, E as onBeforeUnmount, c as createElementBlock, a as createBaseVNode, j as createBlock, r as renderSlot, n as normalizeClass, b as createVNode, e as withCtx, H as Transition, T as Teleport, F as Fragment, D as nextTick, o as openBlock, d as createCommentVNode, k as normalizeStyle, f as createTextVNode, t as toDisplayString } from "./vue.esm-bundler-K7CzQrxl.js";
import { g as getTargetPosition } from "./positionUtils-BrCLcWsx.js";
import { v as v4 } from "./v4-CjlX8hrF.js";
import "./Icon-B6pI5HKs.js";
const _hoisted_1 = { class: "ded-tooltip-content" };
const _sfc_main = {
  __name: "Tooltip",
  props: {
    content: {
      type: String,
      default: ""
    },
    placement: {
      type: String,
      default: "top",
      validator: (value) => [
        "top-left",
        "top",
        "top-right",
        "right-top",
        "right",
        "right-bottom",
        "bottom-right",
        "bottom",
        "bottom-left",
        "left-top",
        "left",
        "left-bottom"
      ].includes(value)
    },
    showArrow: {
      type: Boolean,
      default: true
    },
    className: {
      type: String,
      default: ""
    }
  },
  setup(__props) {
    const props = __props;
    const tooltipTriggerRef = ref(null);
    const tooltipContentRef = ref(null);
    const tooltipStyles = ref({});
    const baseId = v4();
    const tooltipId = `tooltip-${baseId}`;
    const visible = ref(false);
    function showTooltip() {
      visible.value = true;
      nextTick(updateTooltipPosition);
    }
    function hideTooltip() {
      visible.value = false;
    }
    async function updateTooltipPosition() {
      if (!tooltipTriggerRef.value || !tooltipContentRef.value || !visible.value)
        return;
      await nextTick();
      const triggerElement = tooltipTriggerRef.value.getBoundingClientRect();
      const position = {
        top: triggerElement.top + window.scrollY,
        left: triggerElement.left + window.scrollX
      };
      const childrenSize = {
        width: triggerElement.width,
        height: triggerElement.height
      };
      const gap = "6px";
      tooltipStyles.value = getTargetPosition(position, childrenSize, props.placement, gap, false);
    }
    function throttle(func, limit) {
      let inThrottle;
      return function(...args) {
        if (!inThrottle) {
          func.apply(this, args);
          inThrottle = true;
          setTimeout(() => inThrottle = false, limit);
        }
      };
    }
    onMounted(() => {
      const throttledUpdate = throttle(updateTooltipPosition, 100);
      window.addEventListener("scroll", throttledUpdate);
      window.addEventListener("resize", throttledUpdate);
    });
    onBeforeUnmount(() => {
      window.removeEventListener("scroll", updateTooltipPosition);
      window.removeEventListener("resize", updateTooltipPosition);
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        createBaseVNode("div", {
          ref_key: "tooltipTriggerRef",
          ref: tooltipTriggerRef,
          class: normalizeClass(["ded-tooltip-container", { [props.className]: !!props.className }]),
          "aria-describedby": tooltipId,
          onMouseenter: showTooltip,
          onMouseleave: hideTooltip
        }, [
          renderSlot(_ctx.$slots, "default")
        ], 34),
        (openBlock(), createBlock(Teleport, { to: "body" }, [
          createVNode(Transition, { name: "fade" }, {
            default: withCtx(() => [
              visible.value ? (openBlock(), createElementBlock("div", {
                key: 0,
                id: tooltipId,
                ref_key: "tooltipContentRef",
                ref: tooltipContentRef,
                style: normalizeStyle(tooltipStyles.value),
                class: normalizeClass(["ded-tooltip", `ded-tooltip-${props.placement}`])
              }, [
                createBaseVNode("div", _hoisted_1, [
                  createTextVNode(toDisplayString(props.content) + " ", 1),
                  props.showArrow ? (openBlock(), createElementBlock("div", {
                    key: 0,
                    class: normalizeClass(["ded-tooltip-arrow", `ded-tooltip-arrow-${props.placement}`])
                  }, _cache[0] || (_cache[0] = [
                    createBaseVNode("div", { class: "ded-tooltip-arrow-shape" }, null, -1)
                  ]), 2)) : createCommentVNode("", true)
                ])
              ], 6)) : createCommentVNode("", true)
            ]),
            _: 1
          })
        ]))
      ], 64);
    };
  }
};
_sfc_main.__docgenInfo = { "exportName": "default", "displayName": "Tooltip", "description": "", "tags": {}, "props": [{ "name": "content", "type": { "name": "string" }, "defaultValue": { "func": false, "value": '""' } }, { "name": "placement", "type": { "name": "string" }, "defaultValue": { "func": false, "value": '"top"' }, "values": ["top-left", "top", "top-right", "right-top", "right", "right-bottom", "bottom-right", "bottom", "bottom-left", "left-top", "left", "left-bottom"] }, { "name": "showArrow", "type": { "name": "boolean" }, "defaultValue": { "func": false, "value": "true" } }, { "name": "className", "type": { "name": "string" }, "defaultValue": { "func": false, "value": '""' } }], "slots": [{ "name": "default" }], "sourceFiles": ["/Users/auouser/Desktop/Work_Space/DED-WDS_VUE/libs/src/ui/element/Tooltip/Tooltip.vue"] };
const Tooltip_stories = {
  components: {
    Tooltip: _sfc_main
  },
  title: "Component/Tooltip",
  component: _sfc_main,
  tags: ["autodocs"],
  argTypes: {
    content: {
      description: "提示內容",
      control: {
        type: "text"
      }
    },
    placement: {
      description: "提示框位置",
      control: {
        type: "select"
      },
      options: ["top-left", "top", "top-right", "right-top", "right", "right-bottom", "bottom-right", "bottom", "bottom-left", "left-bottom", "left", "left-top"],
      table: {
        type: {
          summary: "top-left | top | top-right | right-top | right | right-bottom | bottom-right | bottom | bottom-left | left-bottom | left | left-top "
        }
      }
    },
    showArrow: {
      description: "是否顯示箭頭",
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
    default: {
      description: "觸發器插槽",
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
      title: "Tooltip",
      description: {
        component: "提示工具組件的呈現及說明。"
      }
    }
  }
};
const DefaultTooltip = {
  name: "預設項目",
  args: {
    content: "good day",
    placement: "top",
    showArrow: true,
    className: "",
    default: `<Button variant="contained" size="large" prefix="SvgAccount">Hover Me</Button>`
  },
  render: (args) => ({
    components: {
      Tooltip: _sfc_main,
      Button: _sfc_main$1
    },
    setup() {
      return {
        args
      };
    },
    template: `
      <div style="text-align: center">
        <Tooltip
          :content="args.content"
          :showArrow="args.showArrow"
          :placement="args.placement"
          :className="args.className"
        >
          <Button
            themeColor="primary"
            variant="filled"
            prefix="SvgAccount"
          >
            Hover Me
          </Button>
        </Tooltip>
      </div>`
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
          return [`<script setup>`, `import { Tooltip, Button } from "@ded-wds-vue/ui";`, `<\/script>`, "", "<template>", "  <Tooltip", `    ${args.content ? `content="${args.content}"` : ""}`, `    ${args.placement ? `placement="${args.placement}"` : ""}`, `    ${args.showArrow !== void 0 ? `:showArrow="${args.showArrow}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, "  >", '    <Button themeColor="primary" variant="filled" prefix="SvgAccount">Hover Me</Button>', "  </Tooltip>", "</template>"].filter(Boolean).join("\n").trim();
        }
      }
    }
  }
};
DefaultTooltip.parameters = {
  ...DefaultTooltip.parameters,
  docs: {
    ...(_a = DefaultTooltip.parameters) == null ? void 0 : _a.docs,
    source: {
      originalSource: '{\n  name: "預設項目",\n  args: {\n    content: "good day",\n    placement: "top",\n    showArrow: true,\n    className: "",\n    default: `<Button variant="contained" size="large" prefix="SvgAccount">Hover Me</Button>`\n  },\n  render: args => ({\n    components: {\n      Tooltip,\n      Button\n    },\n    setup() {\n      return {\n        args\n      };\n    },\n    template: `\n      <div style="text-align: center">\n        <Tooltip\n          :content="args.content"\n          :showArrow="args.showArrow"\n          :placement="args.placement"\n          :className="args.className"\n        >\n          <Button\n            themeColor="primary"\n            variant="filled"\n            prefix="SvgAccount"\n          >\n            Hover Me\n          </Button>\n        </Tooltip>\n      </div>`\n  }),\n  // 控制 controls 中能控制的參數\n  parameters: {\n    controls: {\n      // include: [\'themeColor\', \'label\', \'value\', \'name\' ],\n    },\n    docs: {\n      source: {\n        transform: (src, storyContext) => {\n          const {\n            args\n          } = storyContext;\n          return [`<script setup>`, `import { Tooltip, Button } from "@ded-wds-vue/ui";`, `<\/script>`, "", "<template>", "  <Tooltip", `    ${args.content ? `content="${args.content}"` : ""}`, `    ${args.placement ? `placement="${args.placement}"` : ""}`, `    ${args.showArrow !== undefined ? `:showArrow="${args.showArrow}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, "  >", "    <Button themeColor=\\"primary\\" variant=\\"filled\\" prefix=\\"SvgAccount\\">Hover Me</Button>", "  </Tooltip>", "</template>"].filter(Boolean).join("\\n").trim();\n        }\n      }\n    }\n  }\n}',
      ...(_c = (_b = DefaultTooltip.parameters) == null ? void 0 : _b.docs) == null ? void 0 : _c.source
    }
  }
};
const __namedExportsOrder = ["DefaultTooltip"];
export {
  DefaultTooltip,
  __namedExportsOrder,
  Tooltip_stories as default
};

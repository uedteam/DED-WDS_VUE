var _a, _b, _c, _d, _e, _f, _g, _h, _i;
import { m as inject, g as computed, O as reactive, P as provide, c as createElementBlock, q as renderList, L as unref, F as Fragment, o as openBlock, j as createBlock, a as createBaseVNode, b as createVNode, e as withCtx, d as createCommentVNode, n as normalizeClass, f as createTextVNode, t as toDisplayString, l as resolveDynamicComponent, T as Teleport, h } from "./vue.esm-bundler-K7CzQrxl.js";
import { v as v4 } from "./v4-CjlX8hrF.js";
import { _ as _sfc_main$2 } from "./Button-8IAwqsIt.js";
import { _ as _sfc_main$1 } from "./Icon-B6pI5HKs.js";
import { _ as _sfc_main$3 } from "./Title-BgzIyXq9.js";
const toasts = reactive({
  "top-right": [],
  "top-left": [],
  "top-center": [],
  "bottom-right": [],
  "bottom-left": [],
  "bottom-center": []
});
const positions = computed(() => Object.keys(toasts));
const timers = /* @__PURE__ */ new Map();
const toastContainers = /* @__PURE__ */ new Map();
function getToastContainer(position) {
  if (toastContainers.has(position)) {
    return toastContainers.get(position);
  }
  const container = document.createElement("div");
  container.id = `toast-container-${position}`;
  container.classList.add("ded-toast-container", `ded-toast-${position}`);
  document.body.appendChild(container);
  toastContainers.set(position, container);
  return container;
}
function removeToastById(id, position) {
  if (!toasts[position])
    return;
  if (timers.has(id)) {
    clearTimeout(timers.get(id));
    timers.delete(id);
  }
  const index = toasts[position].findIndex((toast) => toast.id === id);
  if (index !== -1) {
    toasts[position].splice(index, 1);
    if (toasts[position].length === 0 && toastContainers.has(position)) {
      const container = toastContainers.get(position);
      document.body.removeChild(container);
      toastContainers.delete(position);
    }
  }
}
function addToast(toast) {
  const id = `toast-${v4()}`;
  const position = toast.position || "top-right";
  if (!Array.isArray(toasts[position])) {
    toasts[position] = reactive([]);
  }
  getToastContainer(position);
  const newToast = {
    ...toast,
    id,
    action: toast.action || null
  };
  toasts[position].push(newToast);
  if (toast.duration && toast.duration > 0) {
    const timer = setTimeout(() => {
      removeToastById(id, position);
    }, toast.duration);
    timers.set(id, timer);
  }
}
function clearAllToasts() {
  timers.forEach((timer) => clearTimeout(timer));
  timers.clear();
  Object.keys(toasts).forEach((position) => {
    toasts[position].splice(0, toasts[position].length);
    if (toastContainers.has(position)) {
      const container = toastContainers.get(position);
      document.body.removeChild(container);
      toastContainers.delete(position);
    }
  });
}
function useToast() {
  const injectedToast = inject("useToast", null);
  if (injectedToast) {
    return injectedToast;
  }
  const toastMethods = {
    add: addToast,
    remove: removeToastById,
    clear: clearAllToasts,
    toasts,
    positions
  };
  provide("useToast", toastMethods);
  return toastMethods;
}
const _hoisted_1 = { class: "ded-toast-header" };
const _hoisted_2 = {
  key: 0,
  class: "ded-toast-header-action"
};
const _hoisted_3 = { key: 1 };
const _hoisted_4 = { class: "ded-description" };
const _sfc_main = {
  __name: "Toast",
  props: {
    className: {
      type: String,
      default: ""
    }
  },
  setup(__props) {
    const props = __props;
    const { toasts: toasts2, remove, positions: positions2 } = useToast();
    return (_ctx, _cache) => {
      return openBlock(true), createElementBlock(Fragment, null, renderList(unref(positions2), (position) => {
        return openBlock(), createElementBlock("div", { key: position }, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(unref(toasts2)[position], (toast) => {
            return openBlock(), createElementBlock("div", {
              key: toast.id
            }, [
              (openBlock(), createBlock(Teleport, {
                to: `#toast-container-${toast.position}`
              }, [
                createBaseVNode("div", {
                  class: normalizeClass(["ded-toast", [`ded-toast-border-${toast.themeColor}`, props.className]])
                }, [
                  createVNode(_sfc_main$2, {
                    class: "ded-close-button",
                    variant: "text",
                    "theme-color": "neutral",
                    onClick: ($event) => unref(remove)(toast.id, position)
                  }, {
                    default: withCtx(() => [
                      createVNode(_sfc_main$1, {
                        name: "SvgClose",
                        size: "20"
                      })
                    ]),
                    _: 2
                  }, 1032, ["onClick"]),
                  createBaseVNode("div", _hoisted_1, [
                    createBaseVNode("div", {
                      class: normalizeClass(["ded-toast-header-message", [`ded-toast-header-message-${toast.themeColor}`]])
                    }, [
                      createVNode(_sfc_main$1, {
                        name: toast.prefix,
                        size: "20"
                      }, null, 8, ["name"]),
                      createVNode(_sfc_main$3, {
                        "theme-color": toast.themeColor,
                        level: 5
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(toast.title), 1)
                        ]),
                        _: 2
                      }, 1032, ["theme-color"])
                    ], 2),
                    toast.action ? (openBlock(), createElementBlock("div", _hoisted_2, [
                      typeof toast.action === "object" ? (openBlock(), createBlock(resolveDynamicComponent(toast.action), { key: 0 })) : typeof toast.action === "function" ? (openBlock(), createElementBlock("div", _hoisted_3, [
                        (openBlock(), createBlock(resolveDynamicComponent(toast.action())))
                      ])) : createCommentVNode("", true)
                    ])) : createCommentVNode("", true)
                  ]),
                  createBaseVNode("p", _hoisted_4, toDisplayString(toast.content), 1)
                ], 2)
              ], 8, ["to"]))
            ]);
          }), 128))
        ]);
      }), 128);
    };
  }
};
_sfc_main.__docgenInfo = { "exportName": "default", "displayName": "Toast", "description": "", "tags": {}, "props": [{ "name": "className", "type": { "name": "string" }, "defaultValue": { "func": false, "value": '""' } }], "sourceFiles": ["/Users/auouser/Desktop/Work_Space/DED-WDS_VUE/libs/src/ui/element/Toast/Toast.vue"] };
const Toast_stories = {
  components: {
    Icon: _sfc_main$1,
    Toast: _sfc_main
  },
  title: "Component/Toast",
  component: _sfc_main,
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
        },
        defaultValue: {
          summary: "primary"
        },
        category: "PROPS"
      }
    },
    position: {
      description: "位置",
      control: {
        type: "select"
      },
      options: ["top-right", "top-left", "top-center", "bottom-right", "bottom-left", "bottom-center"],
      table: {
        type: {
          summary: "top-right | top-left | top-center | bottom-right | bottom-left | bottom-center"
        },
        defaultValue: {
          summary: "top-right"
        },
        category: "PROPS"
      }
    },
    title: {
      description: "內容",
      control: {
        type: "text"
      },
      table: {
        category: "PROPS"
      }
    },
    content: {
      description: "說明文字",
      control: {
        type: "text"
      },
      table: {
        defaultValue: {
          summary: "Content"
        },
        category: "PROPS"
      }
    },
    prefix: {
      description: "前綴元素",
      control: {
        type: "select",
        labels: {
          "": "none",
          "SvgInfoCircle": "SvgInfoCircle",
          "SvgSuccessCircle": "SvgSuccessCircle",
          "SvgWarningTri": "SvgWarningTri",
          "SvgErrorCircle": "SvgErrorCircle",
          "SvgDisableCircle": "SvgDisableCircle"
        }
      },
      options: ["", "SvgInfoCircle", "SvgSuccessCircle", "SvgWarningTri", "SvgErrorCircle", "SvgDisableCircle"],
      table: {
        defaultValue: {
          summary: ""
        },
        category: "PROPS"
      }
    },
    duration: {
      description: "持續時間",
      control: {
        type: "range",
        min: 500,
        max: 5e3,
        step: 100
      },
      table: {
        defaultValue: {
          summary: 1e3
        },
        category: "PROPS"
      }
    },
    action: {
      description: "操作",
      control: {
        type: "text"
      },
      table: {
        type: {
          summary: "Vue Component"
        },
        category: "SLOTS"
      }
    },
    className: {
      description: "客製化樣式",
      control: {
        type: "text"
      },
      table: {
        category: "PROPS"
      }
    }
  },
  parameters: {
    // 自動文件
    docs: {
      title: "Toast",
      description: {
        component: "通知訊息組件的呈現及說明。"
      }
    }
  }
};
const ToastDefault = {
  name: "預設項目",
  args: {
    themeColor: "success",
    position: "top-right",
    title: "Notification Title",
    content: "Content",
    prefix: "SvgSuccessCircle",
    duration: 1e3,
    action: `() => h ("div", {onClick: () => window.alert("action")}, "Action")`,
    className: ""
  },
  render: (args) => ({
    components: {
      Toast: _sfc_main,
      Button: _sfc_main$2,
      Title: _sfc_main$3,
      Icon: _sfc_main$1
    },
    setup() {
      const onClose = () => {
        window.alert("Close");
      };
      const toastBorderClass = computed(() => {
        const color = args.themeColor;
        return `ded-toast-border-${color}`;
      });
      const toastHeaderMsgThemeClass = computed(() => {
        const color = args.themeColor;
        return `ded-toast-header-message-${color}`;
      });
      const onAction = () => {
        window.alert("Action");
      };
      return {
        args,
        onClose,
        toastBorderClass,
        toastHeaderMsgThemeClass,
        onAction
        // computedTitle
      };
    },
    template: `
      <div class="ded-toast" :class="toastBorderClass">
        <!-- toast - 關閉按鈕 -->
        <Button 
          class="ded-close-button" 
          variant="text" 
          themeColor="neutral" 
          @click="onClose"
        >
          <Icon name="SvgClose" size="20"></Icon>
        </Button>
      
        <div class="ded-toast-header">
          <div class="ded-toast-header-message" :class="toastHeaderMsgThemeClass">
            <Icon :name="args.prefix" size="20"></Icon>
            <Title :themeColor="args.themeColor" :level="5">
              {{ args.title }}
            </Title>
          </div>
      
          <div class="ded-toast-header-action">
            <div @click="onAction">
              Action
            </div>
          </div>
        </div>
      
        <p class="ded-description">{{ args.content }}</p>
      </div>
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
          return ["<script setup>", `  import { h } from "vue";`, `  import { Toast, Button, useToast } from "@ded-wds-vue/ui";`, "  const { add } = useToast();", `  const showToast = () => {`, `    add({`, `      ${args.themeColor ? `themeColor: "${args.themeColor}",` : ""}`, `      ${args.position ? `position: "${args.position}",` : ""}`, `      ${args.title ? `title: "${args.title}",` : ""}`, `      ${args.content ? `content: "${args.content}",` : ""}`, `      ${args.prefix ? `prefix: "${args.prefix}",` : ""}`, `      ${args.duration !== void 0 ? `duration: ${args.duration},` : ""}`, `      ${args.action !== void 0 ? `action: ${args.action},` : ""}`, `    });`, `  };`, "<\/script>", "", "<template>", `  <Toast ${args.className ? `className="${args.className}"` : ""} />`, `  <Button`, `    themeColor="primary"`, `    variant="filled"`, `    radius="4px"`, `    @click="showToast"`, `  >`, `    Toast Trigger`, `  </Button>`, "</template>"].filter(Boolean).join("\n").trim();
        }
      }
    }
  }
};
const ToastTotal = {
  name: "訊息類型",
  args: {
    // themeColor: "",
    position: "top-right",
    title: "Notification Title",
    content: "Content",
    // prefix:'SvgSuccessCircle',
    duration: 5e3,
    action: `() => h ("div", {onClick: () => window.alert("action")}, "Action")`,
    className: ""
  },
  render: (args) => ({
    components: {
      Toast: _sfc_main,
      Button: _sfc_main$2,
      Title: _sfc_main$3,
      Icon: _sfc_main$1
    },
    setup() {
      const onClose = () => {
        window.alert("Close");
      };
      const onAction = () => {
        window.alert("Action");
      };
      return {
        args,
        onClose,
        onAction
      };
    },
    template: `
      <div class="ded-toast ded-toast-border-success">
        <!-- toast - 關閉按鈕 -->
        <Button class="ded-close-button" variant="text" themeColor="neutral" @click="onClose">
          <Icon name="SvgClose" size="20"></Icon>
        </Button>
        
        <!-- toast - 標題及說明文字 -->
        <div class="ded-toast-header">
          <div class="ded-toast-header-message ded-toast-header-message-success">
            <Icon name="SvgSuccessCircle" size="20"></Icon>
            <Title themeColor="success" :level="5">
              {{ args.title }}
            </Title>
          </div>
          <div class="ded-toast-header-action">
            <div @click="onAction">
              Action
            </div>
          </div>
        </div>
      
        <p class="ded-description">{{ args.content }}</p>
      </div>
      
      <div class="ded-toast ded-toast-border-warning">
        <Button class="ded-close-button" variant="text" themeColor="neutral" @click="onClose">
          <Icon name="SvgClose" size="20"></Icon>
        </Button>
      
        <div class="ded-toast-header">
          <div class="ded-toast-header-message ded-toast-header-message-warning">
            <Icon name="SvgWarningTri" size="20"></Icon>
            <Title themeColor="warning" :level="5">
              {{ args.title }}
            </Title>
          </div>
          <div class="ded-toast-header-action">
            <div @click="onAction">
              Action
            </div>
          </div>
        </div>
      
        <p class="ded-description">{{ args.content }}</p>
      </div>
      
      <div class="ded-toast ded-toast-border-error">
        <Button class="ded-close-button" variant="text" themeColor="neutral" @click="onClose">
          <Icon name="SvgClose" size="20"></Icon>
        </Button>
      
        <div class="ded-toast-header">
          <div class="ded-toast-header-message ded-toast-header-message-error">
            <Icon name="SvgErrorCircle" size="20"></Icon>
            <Title themeColor="error" :level="5">
              {{ args.title }}
            </Title>
          </div>
          <div class="ded-toast-header-action">
            <div @click="onAction">
              Action
            </div>
          </div>
        </div>
      
        <p class="ded-description">{{ args.content }}</p>
      </div>
      
      <div class="ded-toast ded-toast-border-info">
        <Button class="ded-close-button" variant="text" themeColor="neutral" @click="onClose">
          <Icon name="SvgClose" size="20"></Icon>
        </Button>
      
        <div class="ded-toast-header">
          <div class="ded-toast-header-message ded-toast-header-message-info">
            <Icon name="SvgInfoCircle" size="20"></Icon>
            <Title themeColor="info" :level="5">
              {{ args.title }}
            </Title>
          </div>
          <div class="ded-toast-header-action">
            <div @click="onAction">
              Action
            </div>
          </div>
        </div>
      
        <p class="ded-description">{{ args.content }}</p>
      </div>
      
      <div class="ded-toast ded-toast-border-neutral">
        <Button class="ded-close-button" variant="text" themeColor="neutral" @click="onClose">
          <Icon name="SvgClose" size="20"></Icon>
        </Button>
      
        <div class="ded-toast-header">
          <div class="ded-toast-header-message ded-toast-header-message-neutral">
            <Icon name="SvgDisableCircle" size="20"></Icon>
            <Title themeColor="neutral" :level="5">
              {{ args.title }}
            </Title>
          </div>
          <div class="ded-toast-header-action">
            <div @click="onAction">
              Action
            </div>
          </div>
        </div>
      
        <p class="ded-description">{{ args.content }}</p>
      </div>`
  }),
  parameters: {
    controls: {
      exclude: ["themeColor", "prefix", "action", "onClose"]
    },
    docs: {
      source: {
        transform: (src, storyContext) => {
          const {
            args
          } = storyContext;
          return ["<script setup>", `  import { h } from "vue";`, `  import { Toast, Button, useToast } from "@ded-wds-vue/ui";`, "  const { add } = useToast();", "", "  const showSuccessToast = () => {", "    add({", `      themeColor: "success",`, `      ${args.position ? `position: "${args.position}",` : ""}`, `      ${args.title ? `title: "${args.title}",` : ""}`, `      ${args.content ? `content: "${args.content}",` : ""}`, `      prefix: "SvgSuccessCircle",`, `      ${args.duration !== void 0 ? `duration: ${args.duration},` : ""}`, `      ${args.action !== void 0 ? `action: ${args.action},` : ""}`, "    });", "  };", "", "  const showWarningToast = () => {", "    add({", `      themeColor: "warning",`, `      ${args.position ? `position: "${args.position}",` : ""}`, `      ${args.title ? `title: "${args.title}",` : ""}`, `      ${args.content ? `content: "${args.content}",` : ""}`, `      prefix: "SvgWarningTri",`, `      ${args.duration !== void 0 ? `duration: ${args.duration},` : ""}`, `      ${args.action !== void 0 ? `action: ${args.action},` : ""}`, "    });", "  };", "", "  const showErrorToast = () => {", "    add({", `      themeColor: "error",`, `      ${args.position ? `position: "${args.position}",` : ""}`, `      ${args.title ? `title: "${args.title}",` : ""}`, `      ${args.content ? `content: "${args.content}",` : ""}`, `      prefix: "SvgErrorCircle",`, `      ${args.duration !== void 0 ? `duration: ${args.duration},` : ""}`, `      ${args.action !== void 0 ? `action: ${args.action},` : ""}`, "    });", "  };", "", "  const showInfoToast = () => {", "    add({", `      themeColor: "info",`, `      ${args.position ? `position: "${args.position}",` : ""}`, `      ${args.title ? `title: "${args.title}",` : ""}`, `      ${args.content ? `content: "${args.content}",` : ""}`, `      prefix: "SvgInfoCircle",`, `      ${args.duration !== void 0 ? `duration: ${args.duration},` : ""}`, `      ${args.action !== void 0 ? `action: ${args.action},` : ""}`, "    });", "  };", "", "  const showDisableToast = () => {", "    add({", `      themeColor: "neutral",`, `      ${args.position ? `position: "${args.position}",` : ""}`, `      ${args.title ? `title: "${args.title}",` : ""}`, `      ${args.content ? `content: "${args.content}",` : ""}`, `      prefix: "SvgDisableCircle",`, `      ${args.duration !== void 0 ? `duration: ${args.duration},` : ""}`, `      ${args.action !== void 0 ? `action: ${args.action},` : ""}`, "    });", "  };", "<\/script>", "", "<template>", `  <Toast ${args.className ? `className="${args.className}"` : ""} />`, `  <Button`, `    themeColor="success"`, `    variant="filled"`, `    radius="4px"`, `    @click="showSuccessToast"`, `  >`, `    Success Trigger`, `  </Button>`, `  <Button`, `    themeColor="warning"`, `    variant="filled"`, `    radius="4px"`, `    @click="showWarningToast"`, `  >`, `    Warning Trigger`, `  </Button>`, `  <Button`, `    themeColor="error"`, `    variant="filled"`, `    radius="4px"`, `    @click="showErrorToast"`, `  >`, `    Error Trigger`, `  </Button>`, `  <Button`, `    themeColor="info"`, `    variant="filled"`, `    radius="4px"`, `    @click="showInfoToast"`, `  >`, `    Info Trigger`, `  </Button>`, `  <Button`, `    themeColor="neutral"`, `    variant="filled"`, `    radius="4px"`, `    @click="showDisableToast"`, `  >`, `    Disable Trigger`, `  </Button>`, "</template>"].filter(Boolean).join("\n").trim();
        }
      }
    }
  }
};
const ToastInterAction = {
  name: "互動模式",
  args: {
    themeColor: "success",
    position: "top-right",
    title: "Notification Title",
    content: "Content",
    prefix: "SvgSuccessCircle",
    duration: 5e3,
    action: `() => h ("div", {onClick: () => window.alert("action")}, "Action")`,
    className: ""
  },
  render: (args) => ({
    components: {
      Toast: _sfc_main,
      Button: _sfc_main$2
    },
    setup() {
      const {
        add
      } = useToast();
      const showToast = () => {
        add({
          themeColor: args.themeColor,
          position: args.position,
          title: args.title,
          content: args.content,
          prefix: args.prefix,
          duration: args.duration,
          action: () => h("div", {
            onClick: () => window.alert("action")
          }, "Action")
        });
      };
      const onAction = () => {
        window.alert("Action");
      };
      return {
        args,
        add,
        showToast,
        onAction
      };
    },
    template: `
      <Toast :className="args.className"/>
      
      <Button themeColor="primary" variant="filled" radius="4px" @click="showToast">
        Toast Trigger
      </Button>`
  }),
  parameters: {
    controls: {
      // include: ['themeColor', 'label', 'value', 'name' ],
      exclude: ["onClose"]
    },
    docs: {
      source: {
        transform: (src, storyContext) => {
          const {
            args
          } = storyContext;
          return ["<script setup>", `  import { h } from "vue";`, `  import { Toast, Button, useToast } from "@ded-wds-vue/ui";`, "  const { add } = useToast();", `  const showToast = () => {`, `    add({`, `      ${args.themeColor ? `themeColor: "${args.themeColor}",` : ""}`, `      ${args.position ? `position: "${args.position}",` : ""}`, `      ${args.title ? `title: "${args.title}",` : ""}`, `      ${args.content ? `content: "${args.content}",` : ""}`, `      ${args.prefix ? `prefix: "${args.prefix}",` : ""}`, `      ${args.duration !== void 0 ? `duration: ${args.duration},` : ""}`, `      ${args.action !== void 0 ? `action: ${args.action},` : ""}`, `    });`, `  };`, "<\/script>", "", "<template>", `  <Toast ${args.className ? `className="${args.className}"` : ""} />`, `  <Button`, `    themeColor="primary"`, `    variant="filled"`, `    radius="4px"`, `    @click="showToast"`, `  >`, `    Toast Trigger`, `  </Button>`, "</template>"].filter(Boolean).join("\n").trim();
        }
      }
    }
  }
};
ToastDefault.parameters = {
  ...ToastDefault.parameters,
  docs: {
    ...(_a = ToastDefault.parameters) == null ? void 0 : _a.docs,
    source: {
      originalSource: '{\n  name: "預設項目",\n  args: {\n    themeColor: "success",\n    position: "top-right",\n    title: "Notification Title",\n    content: "Content",\n    prefix: "SvgSuccessCircle",\n    duration: 1000,\n    action: `() => h ("div", {onClick: () => window.alert("action")}, "Action")`,\n    className: ""\n  },\n  render: args => ({\n    components: {\n      Toast,\n      Button,\n      Title,\n      Icon\n    },\n    setup() {\n      const onClose = () => {\n        window.alert("Close");\n      };\n      const toastBorderClass = computed(() => {\n        const color = args.themeColor;\n        return `ded-toast-border-${color}`;\n      });\n      const toastHeaderMsgThemeClass = computed(() => {\n        const color = args.themeColor;\n        return `ded-toast-header-message-${color}`;\n      });\n      const onAction = () => {\n        window.alert("Action");\n      };\n      return {\n        args,\n        onClose,\n        toastBorderClass,\n        toastHeaderMsgThemeClass,\n        onAction\n        // computedTitle\n      };\n    },\n    template: `\n      <div class="ded-toast" :class="toastBorderClass">\n        <!-- toast - 關閉按鈕 -->\n        <Button \n          class="ded-close-button" \n          variant="text" \n          themeColor="neutral" \n          @click="onClose"\n        >\n          <Icon name="SvgClose" size="20"></Icon>\n        </Button>\n      \n        <div class="ded-toast-header">\n          <div class="ded-toast-header-message" :class="toastHeaderMsgThemeClass">\n            <Icon :name="args.prefix" size="20"></Icon>\n            <Title :themeColor="args.themeColor" :level="5">\n              {{ args.title }}\n            </Title>\n          </div>\n      \n          <div class="ded-toast-header-action">\n            <div @click="onAction">\n              Action\n            </div>\n          </div>\n        </div>\n      \n        <p class="ded-description">{{ args.content }}</p>\n      </div>\n      `\n  }),\n  parameters: {\n    controls: {\n      // include: [\'themeColor\', \'label\', \'value\', \'name\' ],\n    },\n    docs: {\n      source: {\n        transform: (src, storyContext) => {\n          const {\n            args\n          } = storyContext;\n          return ["<script setup>", `  import { h } from "vue";`, `  import { Toast, Button, useToast } from "@ded-wds-vue/ui";`, "  const { add } = useToast();", `  const showToast = () => {`, `    add({`, `      ${args.themeColor ? `themeColor: "${args.themeColor}",` : ""}`, `      ${args.position ? `position: "${args.position}",` : ""}`, `      ${args.title ? `title: "${args.title}",` : ""}`, `      ${args.content ? `content: "${args.content}",` : ""}`, `      ${args.prefix ? `prefix: "${args.prefix}",` : ""}`, `      ${args.duration !== undefined ? `duration: ${args.duration},` : ""}`, `      ${args.action !== undefined ? `action: ${args.action},` : ""}`, `    });`, `  };`, "<\/script>", "", "<template>", `  <Toast ${args.className ? `className="${args.className}"` : ""} />`, `  <Button`, `    themeColor="primary"`, `    variant="filled"`, `    radius="4px"`, `    @click="showToast"`, `  >`, `    Toast Trigger`, `  </Button>`, "</template>"].filter(Boolean).join("\\n").trim();\n        }\n      }\n    }\n  }\n}',
      ...(_c = (_b = ToastDefault.parameters) == null ? void 0 : _b.docs) == null ? void 0 : _c.source
    }
  }
};
ToastTotal.parameters = {
  ...ToastTotal.parameters,
  docs: {
    ...(_d = ToastTotal.parameters) == null ? void 0 : _d.docs,
    source: {
      originalSource: '{\n  name: "訊息類型",\n  args: {\n    // themeColor: "",\n    position: "top-right",\n    title: "Notification Title",\n    content: "Content",\n    // prefix:\'SvgSuccessCircle\',\n    duration: 5000,\n    action: `() => h ("div", {onClick: () => window.alert("action")}, "Action")`,\n    className: ""\n  },\n  render: args => ({\n    components: {\n      Toast,\n      Button,\n      Title,\n      Icon\n    },\n    setup() {\n      const onClose = () => {\n        window.alert("Close");\n      };\n      const onAction = () => {\n        window.alert("Action");\n      };\n      return {\n        args,\n        onClose,\n        onAction\n      };\n    },\n    template: `\n      <div class="ded-toast ded-toast-border-success">\n        <!-- toast - 關閉按鈕 -->\n        <Button class="ded-close-button" variant="text" themeColor="neutral" @click="onClose">\n          <Icon name="SvgClose" size="20"></Icon>\n        </Button>\n        \n        <!-- toast - 標題及說明文字 -->\n        <div class="ded-toast-header">\n          <div class="ded-toast-header-message ded-toast-header-message-success">\n            <Icon name="SvgSuccessCircle" size="20"></Icon>\n            <Title themeColor="success" :level="5">\n              {{ args.title }}\n            </Title>\n          </div>\n          <div class="ded-toast-header-action">\n            <div @click="onAction">\n              Action\n            </div>\n          </div>\n        </div>\n      \n        <p class="ded-description">{{ args.content }}</p>\n      </div>\n      \n      <div class="ded-toast ded-toast-border-warning">\n        <Button class="ded-close-button" variant="text" themeColor="neutral" @click="onClose">\n          <Icon name="SvgClose" size="20"></Icon>\n        </Button>\n      \n        <div class="ded-toast-header">\n          <div class="ded-toast-header-message ded-toast-header-message-warning">\n            <Icon name="SvgWarningTri" size="20"></Icon>\n            <Title themeColor="warning" :level="5">\n              {{ args.title }}\n            </Title>\n          </div>\n          <div class="ded-toast-header-action">\n            <div @click="onAction">\n              Action\n            </div>\n          </div>\n        </div>\n      \n        <p class="ded-description">{{ args.content }}</p>\n      </div>\n      \n      <div class="ded-toast ded-toast-border-error">\n        <Button class="ded-close-button" variant="text" themeColor="neutral" @click="onClose">\n          <Icon name="SvgClose" size="20"></Icon>\n        </Button>\n      \n        <div class="ded-toast-header">\n          <div class="ded-toast-header-message ded-toast-header-message-error">\n            <Icon name="SvgErrorCircle" size="20"></Icon>\n            <Title themeColor="error" :level="5">\n              {{ args.title }}\n            </Title>\n          </div>\n          <div class="ded-toast-header-action">\n            <div @click="onAction">\n              Action\n            </div>\n          </div>\n        </div>\n      \n        <p class="ded-description">{{ args.content }}</p>\n      </div>\n      \n      <div class="ded-toast ded-toast-border-info">\n        <Button class="ded-close-button" variant="text" themeColor="neutral" @click="onClose">\n          <Icon name="SvgClose" size="20"></Icon>\n        </Button>\n      \n        <div class="ded-toast-header">\n          <div class="ded-toast-header-message ded-toast-header-message-info">\n            <Icon name="SvgInfoCircle" size="20"></Icon>\n            <Title themeColor="info" :level="5">\n              {{ args.title }}\n            </Title>\n          </div>\n          <div class="ded-toast-header-action">\n            <div @click="onAction">\n              Action\n            </div>\n          </div>\n        </div>\n      \n        <p class="ded-description">{{ args.content }}</p>\n      </div>\n      \n      <div class="ded-toast ded-toast-border-neutral">\n        <Button class="ded-close-button" variant="text" themeColor="neutral" @click="onClose">\n          <Icon name="SvgClose" size="20"></Icon>\n        </Button>\n      \n        <div class="ded-toast-header">\n          <div class="ded-toast-header-message ded-toast-header-message-neutral">\n            <Icon name="SvgDisableCircle" size="20"></Icon>\n            <Title themeColor="neutral" :level="5">\n              {{ args.title }}\n            </Title>\n          </div>\n          <div class="ded-toast-header-action">\n            <div @click="onAction">\n              Action\n            </div>\n          </div>\n        </div>\n      \n        <p class="ded-description">{{ args.content }}</p>\n      </div>`\n  }),\n  parameters: {\n    controls: {\n      exclude: ["themeColor", "prefix", "action", "onClose"]\n    },\n    docs: {\n      source: {\n        transform: (src, storyContext) => {\n          const {\n            args\n          } = storyContext;\n          return ["<script setup>", `  import { h } from "vue";`, `  import { Toast, Button, useToast } from "@ded-wds-vue/ui";`, "  const { add } = useToast();", "", "  const showSuccessToast = () => {", "    add({", `      themeColor: "success",`, `      ${args.position ? `position: "${args.position}",` : ""}`, `      ${args.title ? `title: "${args.title}",` : ""}`, `      ${args.content ? `content: "${args.content}",` : ""}`, `      prefix: "SvgSuccessCircle",`, `      ${args.duration !== undefined ? `duration: ${args.duration},` : ""}`, `      ${args.action !== undefined ? `action: ${args.action},` : ""}`, "    });", "  };", "", "  const showWarningToast = () => {", "    add({", `      themeColor: "warning",`, `      ${args.position ? `position: "${args.position}",` : ""}`, `      ${args.title ? `title: "${args.title}",` : ""}`, `      ${args.content ? `content: "${args.content}",` : ""}`, `      prefix: "SvgWarningTri",`, `      ${args.duration !== undefined ? `duration: ${args.duration},` : ""}`, `      ${args.action !== undefined ? `action: ${args.action},` : ""}`, "    });", "  };", "", "  const showErrorToast = () => {", "    add({", `      themeColor: "error",`, `      ${args.position ? `position: "${args.position}",` : ""}`, `      ${args.title ? `title: "${args.title}",` : ""}`, `      ${args.content ? `content: "${args.content}",` : ""}`, `      prefix: "SvgErrorCircle",`, `      ${args.duration !== undefined ? `duration: ${args.duration},` : ""}`, `      ${args.action !== undefined ? `action: ${args.action},` : ""}`, "    });", "  };", "", "  const showInfoToast = () => {", "    add({", `      themeColor: "info",`, `      ${args.position ? `position: "${args.position}",` : ""}`, `      ${args.title ? `title: "${args.title}",` : ""}`, `      ${args.content ? `content: "${args.content}",` : ""}`, `      prefix: "SvgInfoCircle",`, `      ${args.duration !== undefined ? `duration: ${args.duration},` : ""}`, `      ${args.action !== undefined ? `action: ${args.action},` : ""}`, "    });", "  };", "", "  const showDisableToast = () => {", "    add({", `      themeColor: "neutral",`, `      ${args.position ? `position: "${args.position}",` : ""}`, `      ${args.title ? `title: "${args.title}",` : ""}`, `      ${args.content ? `content: "${args.content}",` : ""}`, `      prefix: "SvgDisableCircle",`, `      ${args.duration !== undefined ? `duration: ${args.duration},` : ""}`, `      ${args.action !== undefined ? `action: ${args.action},` : ""}`, "    });", "  };", "<\/script>", "", "<template>", `  <Toast ${args.className ? `className="${args.className}"` : ""} />`, `  <Button`, `    themeColor="success"`, `    variant="filled"`, `    radius="4px"`, `    @click="showSuccessToast"`, `  >`, `    Success Trigger`, `  </Button>`, `  <Button`, `    themeColor="warning"`, `    variant="filled"`, `    radius="4px"`, `    @click="showWarningToast"`, `  >`, `    Warning Trigger`, `  </Button>`, `  <Button`, `    themeColor="error"`, `    variant="filled"`, `    radius="4px"`, `    @click="showErrorToast"`, `  >`, `    Error Trigger`, `  </Button>`, `  <Button`, `    themeColor="info"`, `    variant="filled"`, `    radius="4px"`, `    @click="showInfoToast"`, `  >`, `    Info Trigger`, `  </Button>`, `  <Button`, `    themeColor="neutral"`, `    variant="filled"`, `    radius="4px"`, `    @click="showDisableToast"`, `  >`, `    Disable Trigger`, `  </Button>`, "</template>"].filter(Boolean).join("\\n").trim();\n        }\n      }\n    }\n  }\n}',
      ...(_f = (_e = ToastTotal.parameters) == null ? void 0 : _e.docs) == null ? void 0 : _f.source
    }
  }
};
ToastInterAction.parameters = {
  ...ToastInterAction.parameters,
  docs: {
    ...(_g = ToastInterAction.parameters) == null ? void 0 : _g.docs,
    source: {
      originalSource: '{\n  name: "互動模式",\n  args: {\n    themeColor: "success",\n    position: "top-right",\n    title: "Notification Title",\n    content: "Content",\n    prefix: "SvgSuccessCircle",\n    duration: 5000,\n    action: `() => h ("div", {onClick: () => window.alert("action")}, "Action")`,\n    className: ""\n  },\n  render: args => ({\n    components: {\n      Toast,\n      Button\n    },\n    setup() {\n      const {\n        add\n      } = useToast();\n      const showToast = () => {\n        add({\n          themeColor: args.themeColor,\n          position: args.position,\n          title: args.title,\n          content: args.content,\n          prefix: args.prefix,\n          duration: args.duration,\n          action: () => h("div", {\n            onClick: () => window.alert("action")\n          }, "Action")\n        });\n      };\n      const onAction = () => {\n        window.alert("Action");\n      };\n      return {\n        args,\n        add,\n        showToast,\n        onAction\n      };\n    },\n    template: `\n      <Toast :className="args.className"/>\n      \n      <Button themeColor="primary" variant="filled" radius="4px" @click="showToast">\n        Toast Trigger\n      </Button>`\n  }),\n  parameters: {\n    controls: {\n      // include: [\'themeColor\', \'label\', \'value\', \'name\' ],\n      exclude: ["onClose"]\n    },\n    docs: {\n      source: {\n        transform: (src, storyContext) => {\n          const {\n            args\n          } = storyContext;\n          return ["<script setup>", `  import { h } from "vue";`, `  import { Toast, Button, useToast } from "@ded-wds-vue/ui";`, "  const { add } = useToast();", `  const showToast = () => {`, `    add({`, `      ${args.themeColor ? `themeColor: "${args.themeColor}",` : ""}`, `      ${args.position ? `position: "${args.position}",` : ""}`, `      ${args.title ? `title: "${args.title}",` : ""}`, `      ${args.content ? `content: "${args.content}",` : ""}`, `      ${args.prefix ? `prefix: "${args.prefix}",` : ""}`, `      ${args.duration !== undefined ? `duration: ${args.duration},` : ""}`, `      ${args.action !== undefined ? `action: ${args.action},` : ""}`, `    });`, `  };`, "<\/script>", "", "<template>", `  <Toast ${args.className ? `className="${args.className}"` : ""} />`, `  <Button`, `    themeColor="primary"`, `    variant="filled"`, `    radius="4px"`, `    @click="showToast"`, `  >`, `    Toast Trigger`, `  </Button>`, "</template>"].filter(Boolean).join("\\n").trim();\n        }\n      }\n    }\n  }\n}',
      ...(_i = (_h = ToastInterAction.parameters) == null ? void 0 : _h.docs) == null ? void 0 : _i.source
    }
  }
};
const __namedExportsOrder = ["ToastDefault", "ToastTotal", "ToastInterAction"];
export {
  ToastDefault,
  ToastInterAction,
  ToastTotal,
  __namedExportsOrder,
  Toast_stories as default
};

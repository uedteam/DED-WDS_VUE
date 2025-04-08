var _a, _b, _c, _d, _e, _f;
import { _ as _sfc_main$2 } from "./Button-8IAwqsIt.js";
import { p as mergeModels, u as useModel, j as createBlock, b as createVNode, e as withCtx, H as Transition, T as Teleport, o as openBlock, c as createElementBlock, d as createCommentVNode, I as withModifiers, a as createBaseVNode, n as normalizeClass, r as renderSlot, f as createTextVNode } from "./vue.esm-bundler-K7CzQrxl.js";
import { _ as _sfc_main$1 } from "./Icon-B6pI5HKs.js";
import { _ as _sfc_main$3 } from "./Title-BgzIyXq9.js";
import { _ as _sfc_main$4, a as _sfc_main$5, b as _sfc_main$6 } from "./Row-CgwqPSLD.js";
const _hoisted_1 = { class: "ded-dialog-header" };
const _hoisted_2 = { class: "ded-dialog-body" };
const _hoisted_3 = { class: "ded-dialog-footer" };
const _sfc_main = {
  __name: "Dialog",
  props: /* @__PURE__ */ mergeModels({
    hasClose: {
      type: Boolean,
      default: false
    },
    className: {
      type: String,
      default: ""
    }
  }, {
    "modelValue": {},
    "modelModifiers": {}
  }),
  emits: ["update:modelValue"],
  setup(__props) {
    if (!document.getElementById("dialog")) {
      const dialogContainer = document.createElement("div");
      dialogContainer.id = "dialog";
      document.body.appendChild(dialogContainer);
    }
    const modelValue = useModel(__props, "modelValue");
    return (_ctx, _cache) => {
      return openBlock(), createBlock(Teleport, { to: "#dialog" }, [
        createVNode(Transition, { name: "dialog" }, {
          default: withCtx(() => [
            modelValue.value ? (openBlock(), createElementBlock("div", {
              key: 0,
              class: "mask-overlay",
              onClick: _cache[2] || (_cache[2] = withModifiers(($event) => modelValue.value = false, ["self"]))
            }, [
              createBaseVNode("div", {
                class: normalizeClass(["ded-dialog-content", { [__props.className]: !!__props.className }])
              }, [
                __props.hasClose === true ? (openBlock(), createElementBlock("button", {
                  key: 0,
                  class: "ded-dialog-close-btn",
                  onClick: _cache[0] || (_cache[0] = ($event) => modelValue.value = false)
                }, [
                  createVNode(_sfc_main$1, {
                    name: "SvgClose",
                    size: "20"
                  })
                ])) : createCommentVNode("", true),
                createBaseVNode("div", _hoisted_1, [
                  renderSlot(_ctx.$slots, "header")
                ]),
                createBaseVNode("div", _hoisted_2, [
                  renderSlot(_ctx.$slots, "content")
                ]),
                createBaseVNode("div", _hoisted_3, [
                  renderSlot(_ctx.$slots, "footer", {}, () => [
                    createVNode(_sfc_main$2, {
                      variant: "contained",
                      size: "medium",
                      "class-name": "ded-cancel-btn",
                      onClick: _cache[1] || (_cache[1] = ($event) => modelValue.value = false)
                    }, {
                      default: withCtx(() => _cache[3] || (_cache[3] = [
                        createTextVNode(" Cancel ")
                      ])),
                      _: 1
                    }),
                    createVNode(_sfc_main$2, {
                      variant: "contained",
                      "theme-color": "primary",
                      size: "medium"
                    }, {
                      default: withCtx(() => _cache[4] || (_cache[4] = [
                        createTextVNode(" OK ")
                      ])),
                      _: 1
                    })
                  ])
                ])
              ], 2)
            ])) : createCommentVNode("", true)
          ]),
          _: 3
        })
      ]);
    };
  }
};
_sfc_main.__docgenInfo = { "exportName": "default", "displayName": "Dialog", "description": "", "tags": {}, "props": [{ "name": "hasClose", "type": { "name": "boolean" }, "defaultValue": { "func": false, "value": "false" } }, { "name": "className", "type": { "name": "string" }, "defaultValue": { "func": false, "value": '""' } }], "slots": [{ "name": "header" }, { "name": "content" }, { "name": "footer" }], "sourceFiles": ["/Users/auouser/Desktop/Work_Space/DED-WDS_VUE/libs/src/ui/element/Dialog/Dialog.vue"] };
const Dialog_stories = {
  components: {
    Column: _sfc_main$4,
    Title: _sfc_main$3,
    Dialog: _sfc_main
  },
  title: "Component/Dialog",
  component: _sfc_main,
  tags: ["autodocs"],
  argTypes: {
    hasClose: {
      description: "是否有關閉按鈕",
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
    modelValue: {
      description: "是否開啟",
      control: {
        type: "boolean"
      },
      table: {
        // type: { summary: 'string | string[]' },
        category: "v-model"
        // defaultValue: { summary: '""' },
      }
    },
    header: {
      description: "標題",
      control: {
        type: "text"
      },
      table: {
        type: {
          summary: "Vue Component | HTML"
        },
        defaultValue: {
          summary: "Title"
        }
      }
    },
    content: {
      description: "內容",
      control: {
        type: "text"
      },
      table: {
        type: {
          summary: "Vue Component | HTML"
        },
        defaultValue: {
          summary: "Content"
        }
      }
    },
    footer: {
      description: "附註",
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
      title: "Dialog",
      description: {
        component: "彈窗組件的呈現及說明。"
      }
    },
    actions: {
      disabled: true
    }
  }
};
const DialogDefault = {
  name: "預設項目",
  args: {
    hasClose: true,
    className: "",
    modelValue: true,
    header: `<Title themeColor="primary" :level="2" >Title</Title>`,
    content: `<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard</p>`,
    footer: `<Grid><Row :hasGap="true"><Column :sm="4"><Button variant="filled" radius="4px" width="fluid" @click="onConfirm">OK</Button></Column><Column :sm="4"><Button variant="soft" radius="4px" width="fluid" @click="onCancel">Cancel</Button></Column></Row></Grid>`
  },
  render: (args) => ({
    components: {
      Dialog: _sfc_main,
      Button: _sfc_main$2,
      Icon: _sfc_main$1,
      Title: _sfc_main$3,
      Grid: _sfc_main$6,
      Row: _sfc_main$5,
      Column: _sfc_main$4
    },
    setup() {
      const onClose = () => {
        window.alert("Close");
        args.modelValue = false;
      };
      const onConfirm = () => {
        window.alert("OK");
        args.modelValue = false;
      };
      const onCancel = () => {
        window.alert("Cancel");
        args.modelValue = false;
      };
      return {
        args,
        onClose,
        onConfirm,
        onCancel
      };
    },
    template: `
      <div :class="['ded-dialog-content', ...args.className.split(' ')]" v-if="args.modelValue">
        <button v-if="args.hasClose" class="ded-dialog-close-btn" @click="onClose()">
          <Icon name="SvgClose" size="20"></Icon>
        </button>

        <div class="ded-dialog-header">
          <Title themeColor="primary" :level="2">Title</Title>
        </div>

        <div class="ded-dialog-body">
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard Lorem Ipsum is simply dummy
            text of the printing and typesetting industry. Lorem Ipsum has been the
            industry's standard.
          </p>
        </div>

        <div class="ded-dialog-footer">
          <Grid>
            <Row :hasGap="true">
              <Column :sm="4">
                <Button variant="filled" radius="4px" width="fluid" @click="onConfirm">
                  OK
                </Button>
              </Column>

              <Column :sm="4">
                <Button variant="soft" radius="4px" width="fluid" @click="onCancel">
                  Cancel
                </Button>
              </Column>
            </Row>
          </Grid>
        </div>
      </div>
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
          return [`<script setup>`, `import { ref } from "vue";`, `import { Dialog, Button, Title, Grid, Row, Column } from "@ded-wds-vue/ui";`, `const modelValue = ref(${args.modelValue});`, `<\/script>`, "", "<template>", `  <Dialog`, `    ${args.hasClose !== void 0 ? `:hasClose="${args.hasClose}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, `    v-model="modelValue"`, `  >`, `    <template #header>`, `      <Title themeColor="primary" :level="2">Title</Title>`, `    </template>`, `  `, `    <template #content>`, `      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard</p>`, `    </template>`, `  `, `    <template #footer>`, `      <Grid>`, `        <Row :hasGap="true">`, `          <Column :sm="4">`, `            <Button`, `              variant="filled"`, `              radius="4px"`, `              width="fluid"`, `              @click="onConfirm()"`, `            >`, `              OK`, `            </Button>`, `          </Column>`, `          <Column :sm="4">`, `            <Button`, `              variant="soft"`, `              radius="4px"`, `              width="fluid"`, `              @click="onCancel()"`, `            >`, `              Cancel`, `            </Button>`, `          </Column>`, `        </Row>`, `      </Grid>`, `    </template>`, `  </Dialog>`, `  `, `  <Button`, `    variant="filled"`, `    radius="4px"`, `    @click="modelValue = true"`, `  >`, `    Open Dialog`, `  </Button>`, "</template>"].filter(Boolean).join("\n").trim();
        }
      }
    }
  }
};
const DialogDemo = {
  name: "互動模式",
  args: {
    hasClose: true,
    modelValue: false,
    className: "",
    header: `<Title themeColor="primary" :level="2" >Title</Title>`,
    content: `<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard</p>`,
    footer: `<Grid><Row :hasGap="true"><Column :sm="4"><Button variant="filled" radius="4px" width="fluid" @click="onConfirm">OK</Button></Column><Column :sm="4"><Button variant="soft" radius="4px" width="fluid" @click="onCancel">Cancel</Button></Column></Row></Grid>`
  },
  render: (args) => ({
    components: {
      Dialog: _sfc_main,
      Button: _sfc_main$2,
      Icon: _sfc_main$1,
      Title: _sfc_main$3,
      Grid: _sfc_main$6,
      Row: _sfc_main$5,
      Column: _sfc_main$4
    },
    setup() {
      const onConfirm = () => {
        window.alert("OK");
        args.modelValue = false;
      };
      const onCancel = () => {
        window.alert("Cancel");
        args.modelValue = false;
      };
      return {
        args,
        onConfirm,
        onCancel
      };
    },
    template: `
      <Dialog
        :hasClose="args.hasClose"
        :className="args.className"
        v-model="args.modelValue"
      >
        <template #header>
          <Title themeColor="primary" :level="2">Title</Title>
        </template>

        <template #content>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard Lorem Ipsum is simply dummy
            text of the printing and typesetting industry. Lorem Ipsum has been the
            industry's standard.
          </p>
        </template>

        <template #footer>
          <Grid>
            <Row :hasGap="true">
              <Column :sm="4">
                <Button variant="filled" radius="4px" width="fluid" @click="onConfirm()">
                  OK
                </Button>
              </Column>

              <Column :sm="4">
                <Button variant="soft" radius="4px" width="fluid" @click="onCancel()">
                  Cancel
                </Button>
              </Column>
            </Row>
          </Grid>
        </template>
      </Dialog>

      <Button variant="filled" radius="4px" @click="args.modelValue = true">
        Open Dialog
      </Button>
    `
  }),
  // 控制 controls 中能控制的參數
  parameters: {
    controls: {
      // include: ['themeColor', 'label', 'value', 'name' ],
      // exclude:[ 'header', 'content', 'footer' ]
    },
    docs: {
      source: {
        transform: (src, storyContext) => {
          const {
            args
          } = storyContext;
          return [`<script setup>`, `import { ref } from "vue";`, `import { Dialog, Button, Title, Grid, Row, Column } from "@ded-wds-vue/ui";`, `const modelValue = ref(${args.modelValue});`, `<\/script>`, "", "<template>", `  <Dialog`, `    ${args.hasClose !== void 0 ? `:hasClose="${args.hasClose}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, `    v-model="modelValue"`, `  >`, `    <template #header>`, `      <Title themeColor="primary" :level="2">Title</Title>`, `    </template>`, `  `, `    <template #content>`, `      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard</p>`, `    </template>`, `  `, `    <template #footer>`, `      <Grid>`, `        <Row :hasGap="true">`, `          <Column :sm="4">`, `            <Button`, `              variant="filled"`, `              radius="4px"`, `              width="fluid"`, `              @click="onConfirm()"`, `            >`, `              OK`, `            </Button>`, `          </Column>`, `          <Column :sm="4">`, `            <Button`, `              variant="soft"`, `              radius="4px"`, `              width="fluid"`, `              @click="onCancel()"`, `            >`, `              Cancel`, `            </Button>`, `          </Column>`, `        </Row>`, `      </Grid>`, `    </template>`, `  </Dialog>`, `  `, `  <Button`, `    variant="filled"`, `    radius="4px"`, `    @click="modelValue = true"`, `  >`, `    Open Dialog`, `  </Button>`, "</template>"].filter(Boolean).join("\n").trim();
        }
      }
    }
  }
};
DialogDefault.parameters = {
  ...DialogDefault.parameters,
  docs: {
    ...(_a = DialogDefault.parameters) == null ? void 0 : _a.docs,
    source: {
      originalSource: '{\n  name: "預設項目",\n  args: {\n    hasClose: true,\n    className: "",\n    modelValue: true,\n    header: `<Title themeColor="primary" :level="2" >Title</Title>`,\n    content: `<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard</p>`,\n    footer: `<Grid><Row :hasGap="true"><Column :sm="4"><Button variant="filled" radius="4px" width="fluid" @click="onConfirm">OK</Button></Column><Column :sm="4"><Button variant="soft" radius="4px" width="fluid" @click="onCancel">Cancel</Button></Column></Row></Grid>`\n  },\n  render: args => ({\n    components: {\n      Dialog,\n      Button,\n      Icon,\n      Title,\n      Grid,\n      Row,\n      Column\n    },\n    setup() {\n      const onClose = () => {\n        window.alert("Close");\n        args.modelValue = false; // 關閉對話框\n      };\n      const onConfirm = () => {\n        window.alert("OK");\n        args.modelValue = false; // 關閉對話框\n      };\n      const onCancel = () => {\n        window.alert("Cancel");\n        args.modelValue = false; // 關閉對話框\n      };\n      return {\n        args,\n        onClose,\n        onConfirm,\n        onCancel\n      };\n    },\n    template: `\n      <div :class="[\'ded-dialog-content\', ...args.className.split(\' \')]" v-if="args.modelValue">\n        <button v-if="args.hasClose" class="ded-dialog-close-btn" @click="onClose()">\n          <Icon name="SvgClose" size="20"></Icon>\n        </button>\n\n        <div class="ded-dialog-header">\n          <Title themeColor="primary" :level="2">Title</Title>\n        </div>\n\n        <div class="ded-dialog-body">\n          <p>\n            Lorem Ipsum is simply dummy text of the printing and typesetting industry.\n            Lorem Ipsum has been the industry\'s standard Lorem Ipsum is simply dummy\n            text of the printing and typesetting industry. Lorem Ipsum has been the\n            industry\'s standard.\n          </p>\n        </div>\n\n        <div class="ded-dialog-footer">\n          <Grid>\n            <Row :hasGap="true">\n              <Column :sm="4">\n                <Button variant="filled" radius="4px" width="fluid" @click="onConfirm">\n                  OK\n                </Button>\n              </Column>\n\n              <Column :sm="4">\n                <Button variant="soft" radius="4px" width="fluid" @click="onCancel">\n                  Cancel\n                </Button>\n              </Column>\n            </Row>\n          </Grid>\n        </div>\n      </div>\n    `\n  }),\n  // 控制 controls 中能控制的參數\n  parameters: {\n    controls: {\n      // include: [\'themeColor\', \'label\', \'value\', \'name\' ],\n    },\n    docs: {\n      source: {\n        transform: (src, storyContext) => {\n          const {\n            args\n          } = storyContext;\n          return [`<script setup>`, `import { ref } from "vue";`, `import { Dialog, Button, Title, Grid, Row, Column } from "@ded-wds-vue/ui";`, `const modelValue = ref(${args.modelValue});`, `<\/script>`, "", "<template>", `  <Dialog`, `    ${args.hasClose !== undefined ? `:hasClose="${args.hasClose}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, `    v-model="modelValue"`, `  >`, `    <template #header>`, `      <Title themeColor="primary" :level="2">Title</Title>`, `    </template>`, `  `, `    <template #content>`, `      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard</p>`, `    </template>`, `  `, `    <template #footer>`, `      <Grid>`, `        <Row :hasGap="true">`, `          <Column :sm="4">`, `            <Button`, `              variant="filled"`, `              radius="4px"`, `              width="fluid"`, `              @click="onConfirm()"`, `            >`, `              OK`, `            </Button>`, `          </Column>`, `          <Column :sm="4">`, `            <Button`, `              variant="soft"`, `              radius="4px"`, `              width="fluid"`, `              @click="onCancel()"`, `            >`, `              Cancel`, `            </Button>`, `          </Column>`, `        </Row>`, `      </Grid>`, `    </template>`, `  </Dialog>`, `  `, `  <Button`, `    variant="filled"`, `    radius="4px"`, `    @click="modelValue = true"`, `  >`, `    Open Dialog`, `  </Button>`, "</template>"].filter(Boolean).join("\\n").trim();\n        }\n      }\n    }\n  }\n}',
      ...(_c = (_b = DialogDefault.parameters) == null ? void 0 : _b.docs) == null ? void 0 : _c.source
    }
  }
};
DialogDemo.parameters = {
  ...DialogDemo.parameters,
  docs: {
    ...(_d = DialogDemo.parameters) == null ? void 0 : _d.docs,
    source: {
      originalSource: '{\n  name: "互動模式",\n  args: {\n    hasClose: true,\n    modelValue: false,\n    className: "",\n    header: `<Title themeColor="primary" :level="2" >Title</Title>`,\n    content: `<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard</p>`,\n    footer: `<Grid><Row :hasGap="true"><Column :sm="4"><Button variant="filled" radius="4px" width="fluid" @click="onConfirm">OK</Button></Column><Column :sm="4"><Button variant="soft" radius="4px" width="fluid" @click="onCancel">Cancel</Button></Column></Row></Grid>`\n  },\n  render: args => ({\n    components: {\n      Dialog,\n      Button,\n      Icon,\n      Title,\n      Grid,\n      Row,\n      Column\n    },\n    setup() {\n      const onConfirm = () => {\n        window.alert("OK");\n        args.modelValue = false; // 關閉對話框\n      };\n      const onCancel = () => {\n        window.alert("Cancel");\n        args.modelValue = false; // 關閉對話框\n      };\n      return {\n        args,\n        onConfirm,\n        onCancel\n      };\n    },\n    template: `\n      <Dialog\n        :hasClose="args.hasClose"\n        :className="args.className"\n        v-model="args.modelValue"\n      >\n        <template #header>\n          <Title themeColor="primary" :level="2">Title</Title>\n        </template>\n\n        <template #content>\n          <p>\n            Lorem Ipsum is simply dummy text of the printing and typesetting industry.\n            Lorem Ipsum has been the industry\'s standard Lorem Ipsum is simply dummy\n            text of the printing and typesetting industry. Lorem Ipsum has been the\n            industry\'s standard.\n          </p>\n        </template>\n\n        <template #footer>\n          <Grid>\n            <Row :hasGap="true">\n              <Column :sm="4">\n                <Button variant="filled" radius="4px" width="fluid" @click="onConfirm()">\n                  OK\n                </Button>\n              </Column>\n\n              <Column :sm="4">\n                <Button variant="soft" radius="4px" width="fluid" @click="onCancel()">\n                  Cancel\n                </Button>\n              </Column>\n            </Row>\n          </Grid>\n        </template>\n      </Dialog>\n\n      <Button variant="filled" radius="4px" @click="args.modelValue = true">\n        Open Dialog\n      </Button>\n    `\n  }),\n  // 控制 controls 中能控制的參數\n  parameters: {\n    controls: {\n      // include: [\'themeColor\', \'label\', \'value\', \'name\' ],\n      // exclude:[ \'header\', \'content\', \'footer\' ]\n    },\n    docs: {\n      source: {\n        transform: (src, storyContext) => {\n          const {\n            args\n          } = storyContext;\n          return [`<script setup>`, `import { ref } from "vue";`, `import { Dialog, Button, Title, Grid, Row, Column } from "@ded-wds-vue/ui";`, `const modelValue = ref(${args.modelValue});`, `<\/script>`, "", "<template>", `  <Dialog`, `    ${args.hasClose !== undefined ? `:hasClose="${args.hasClose}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, `    v-model="modelValue"`, `  >`, `    <template #header>`, `      <Title themeColor="primary" :level="2">Title</Title>`, `    </template>`, `  `, `    <template #content>`, `      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard</p>`, `    </template>`, `  `, `    <template #footer>`, `      <Grid>`, `        <Row :hasGap="true">`, `          <Column :sm="4">`, `            <Button`, `              variant="filled"`, `              radius="4px"`, `              width="fluid"`, `              @click="onConfirm()"`, `            >`, `              OK`, `            </Button>`, `          </Column>`, `          <Column :sm="4">`, `            <Button`, `              variant="soft"`, `              radius="4px"`, `              width="fluid"`, `              @click="onCancel()"`, `            >`, `              Cancel`, `            </Button>`, `          </Column>`, `        </Row>`, `      </Grid>`, `    </template>`, `  </Dialog>`, `  `, `  <Button`, `    variant="filled"`, `    radius="4px"`, `    @click="modelValue = true"`, `  >`, `    Open Dialog`, `  </Button>`, "</template>"].filter(Boolean).join("\\n").trim();\n        }\n      }\n    }\n  }\n}',
      ...(_f = (_e = DialogDemo.parameters) == null ? void 0 : _e.docs) == null ? void 0 : _f.source
    }
  }
};
const __namedExportsOrder = ["DialogDefault", "DialogDemo"];
export {
  DialogDefault,
  DialogDemo,
  __namedExportsOrder,
  Dialog_stories as default
};

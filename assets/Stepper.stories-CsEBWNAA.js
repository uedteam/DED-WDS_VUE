var _a, _b, _c, _d, _e, _f, _g, _h, _i;
import { _ as _sfc_main$1 } from "./Button-8IAwqsIt.js";
import { g as computed, c as createElementBlock, a as createBaseVNode, F as Fragment, q as renderList, t as toDisplayString, n as normalizeClass, o as openBlock, d as createCommentVNode } from "./vue.esm-bundler-K7CzQrxl.js";
import "./Icon-B6pI5HKs.js";
const _hoisted_1 = { class: "ded-stepper-header" };
const _hoisted_2 = { class: "ded-step-circle" };
const _hoisted_3 = { class: "ded-step-group" };
const _hoisted_4 = { class: "ded-step-title" };
const _hoisted_5 = {
  key: 0,
  class: "ded-step-description"
};
const _hoisted_6 = {
  key: 0,
  class: "ded-step-connector"
};
const _hoisted_7 = { class: "ded-stepper-content" };
const _sfc_main = {
  __name: "Stepper",
  props: {
    dataSource: {
      type: Array,
      required: true
    },
    currentStep: {
      type: Number,
      required: true
    },
    direction: {
      type: String,
      default: "horizontal",
      validator: (value) => ["horizontal", "vertical"].includes(value)
    },
    className: {
      type: String,
      default: ""
    }
  },
  setup(__props) {
    const props = __props;
    const getStepClass = computed(() => {
      return (index) => {
        if (index === props.currentStep)
          return "ded-step-active";
        if (index < props.currentStep)
          return "ded-step-completed";
        return "";
      };
    });
    return (_ctx, _cache) => {
      var _a2;
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(["ded-stepper", {
          [`ded-stepper-${props.direction}`]: props.direction,
          [props.className]: !!props.className
        }])
      }, [
        createBaseVNode("div", _hoisted_1, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(props.dataSource, (step, index) => {
            return openBlock(), createElementBlock("div", {
              key: index,
              class: normalizeClass(["ded-step", [getStepClass.value(index)]])
            }, [
              createBaseVNode("div", _hoisted_2, toDisplayString(index + 1), 1),
              createBaseVNode("div", _hoisted_3, [
                createBaseVNode("div", _hoisted_4, toDisplayString(step.title), 1),
                step.desc ? (openBlock(), createElementBlock("div", _hoisted_5, toDisplayString(step.desc), 1)) : createCommentVNode("", true)
              ]),
              __props.direction === "vertical" && index !== __props.dataSource.length - 1 ? (openBlock(), createElementBlock("div", _hoisted_6)) : createCommentVNode("", true)
            ], 2);
          }), 128))
        ]),
        createBaseVNode("div", _hoisted_7, toDisplayString(((_a2 = __props.dataSource[__props.currentStep]) == null ? void 0 : _a2.content) || "No content available for this step."), 1)
      ], 2);
    };
  }
};
_sfc_main.__docgenInfo = { "exportName": "default", "displayName": "Stepper", "description": "", "tags": {}, "props": [{ "name": "dataSource", "type": { "name": "array" }, "required": true }, { "name": "currentStep", "type": { "name": "number" }, "required": true }, { "name": "direction", "type": { "name": "string" }, "defaultValue": { "func": false, "value": '"horizontal"' }, "values": ["horizontal", "vertical"] }, { "name": "className", "type": { "name": "string" }, "defaultValue": { "func": false, "value": '""' } }], "sourceFiles": ["/Users/auouser/Desktop/Work_Space/DED-WDS_VUE/libs/src/ui/element/Stepper/Stepper.vue"] };
function formatDataSource(dataSource2) {
  return `    ${dataSource2.map((item) => `{
        title: "${item.title}",
        desc: "${item.desc}",
        content: "${item.content}",
    }`).join(",\n    ")}`;
}
const dataSource = [{
  title: "Step 1",
  desc: "Description",
  content: "Content for Step 1"
}, {
  title: "Step 2",
  desc: "Description",
  content: "Content for Step 2"
}, {
  title: "Step 3",
  desc: "Description",
  content: "Content for Step 3"
}];
const Stepper_stories = {
  title: "Component/Stepper",
  component: _sfc_main,
  tags: ["autodocs"],
  argTypes: {
    dataSource: {
      description: "步驟列表",
      control: {
        type: "object"
      },
      table: {
        type: {
          summary: "{ title: string; desc?: string | undefined; content?: Vue Component; }[]"
        }
      }
    },
    currentStep: {
      description: "當前步驟（從 0 開始）",
      control: {
        type: "number",
        min: 0,
        max: 2,
        step: 1
      }
    },
    direction: {
      description: "方向",
      control: {
        type: "select"
      },
      options: ["horizontal", "vertical"],
      table: {
        type: {
          summary: "horizontal | vertical "
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
      title: "Stepper",
      description: {
        component: "Stepper 組件的呈現及說明。"
      }
    }
  }
};
const StepperDefault = {
  name: "預設項目",
  args: {
    dataSource,
    currentStep: 1,
    direction: "horizontal",
    className: ""
  },
  render: (args) => ({
    components: {
      Stepper: _sfc_main
    },
    setup() {
      return {
        args
      };
    },
    template: `
      <Stepper
        :dataSource="args.dataSource"
        :currentStep="args.currentStep"
        :direction="args.direction"
        :className="args.className"
      ></Stepper>`
  }),
  // 控制 controls 中能控制的參數
  parameters: {
    controls: {
      // exclude: ['status', 'src', 'imageAlt', 'username' ],
    },
    docs: {
      source: {
        transform: (src, storyContext) => {
          const {
            args
          } = storyContext;
          const dataSourceString = formatDataSource(args.dataSource);
          return [`<script setup>`, `import { Stepper } from "@ded-wds-vue/ui";`, `const dataSource = [`, `${dataSourceString}`, `];`, `<\/script>`, "", "<template>", "  <Stepper", `      :dataSource="dataSource"`, `      ${args.currentStep !== void 0 ? `:currentStep="${args.currentStep}"` : ""}`, `      ${args.direction ? `direction="${args.direction}"` : ""}`, `      ${args.className ? `className="${args.className}"` : ""}`, "  ></Stepper>", "</template>"].filter(Boolean).join("\n").trim();
        }
      }
    }
  }
};
const StepperHorizontal = {
  name: "橫向互動模式",
  args: {
    dataSource,
    currentStep: 1,
    direction: "horizontal",
    className: ""
  },
  render: (args) => ({
    components: {
      Stepper: _sfc_main,
      Button: _sfc_main$1
    },
    setup() {
      const updateArgs = (newArgs) => {
        Object.assign(args, newArgs);
      };
      const goToPreviousStep = () => {
        const newStep = Math.max(0, args.currentStep - 1);
        updateArgs({
          currentStep: newStep
        });
      };
      const goToNextStep = () => {
        const newStep = Math.min(args.dataSource.length - 1, args.currentStep + 1);
        updateArgs({
          currentStep: newStep
        });
      };
      return {
        args,
        goToPreviousStep,
        goToNextStep
      };
    },
    template: `
      <Stepper
        :dataSource="args.dataSource"
        :currentStep="args.currentStep"
        :direction="args.direction"
        :className="args.className"
      >
      </Stepper>
      <div style="display: flex; justify-content: flex-start; gap: 8px; margin-top: 16px;">
        <Button variant="filled" :isDisabled="args.currentStep === 0" @click="goToPreviousStep">
          Previous
        </Button>
        <Button variant="filled" :isDisabled="args.currentStep === args.dataSource.length - 1" @click="goToNextStep">
          Next
        </Button>
      </div>`
  }),
  // 控制 controls 中能控制的參數
  parameters: {
    controls: {
      // exclude: ['status', 'src', 'imageAlt', 'username' ],
    },
    docs: {
      source: {
        transform: (src, storyContext) => {
          const {
            args
          } = storyContext;
          return [`<script setup>`, `import { ref } from "vue";`, `import { Stepper, Button } from "@ded-wds-vue/ui";`, ``, `const currentStep = ref(1);`, `const dataSource = [`, `  {`, `    title: "Step 1",`, `    desc: "Description",`, `    content: "Content for Step 1",`, `  },`, `  {`, `    title: "Step 2",`, `    desc: "Description",`, `    content: "Content for Step 2",`, `  },`, `  {`, `    title: "Step 3",`, `    desc: "Description",`, `    content: "Content for Step 3",`, `  }`, `];`, ``, `const goToPreviousStep = () => {`, `  if (currentStep.value > 0) {`, `    currentStep.value -= 1;`, `  }`, `};`, ``, `const goToNextStep = () => {`, `  if (currentStep.value < dataSource.length - 1) {`, `    currentStep.value += 1;`, `  }`, `};`, ``, `<\/script>`, "", "<template>", "  <Stepper", `      :dataSource='dataSource'`, `      :currentStep="currentStep"`, `      ${args.direction ? `direction="${args.direction}"` : ""}`, `      ${args.className ? `className="${args.className}"` : ""}`, "  ></Stepper>", `  <div style="display: flex; justify-content: flex-start; gap: 8px; margin-top: 16px;">`, `    <Button`, `      variant="filled"`, `      :isDisabled="currentStep === 0"`, `      @click="goToPreviousStep()"`, `    >`, `      Previous`, `    </Button>`, `  `, `    <Button`, `      variant="filled"`, `      :isDisabled="currentStep === dataSource.length - 1"`, `      @click="goToNextStep()"`, `    >`, `      Next`, `    </Button>`, `  </div>`, "</template>"].filter(Boolean).join("\n").trim();
        }
      }
    }
  }
};
const StepperVertical = {
  name: "直向互動模式",
  args: {
    dataSource,
    currentStep: 1,
    direction: "vertical",
    className: ""
  },
  render: (args) => ({
    components: {
      Stepper: _sfc_main,
      Button: _sfc_main$1
    },
    setup() {
      const updateArgs = (newArgs) => {
        Object.assign(args, newArgs);
      };
      const goToPreviousStep = () => {
        const newStep = Math.max(0, args.currentStep - 1);
        updateArgs({
          currentStep: newStep
        });
      };
      const goToNextStep = () => {
        const newStep = Math.min(args.dataSource.length - 1, args.currentStep + 1);
        updateArgs({
          currentStep: newStep
        });
      };
      return {
        args,
        goToPreviousStep,
        goToNextStep
      };
    },
    template: `
      <Stepper
        :dataSource="args.dataSource"
        :currentStep="args.currentStep"
        :direction="args.direction"
        :className="args.className"
      >
      </Stepper>

      <div style="display: flex; justify-content: flex-start; gap: 8px; margin-top: 16px;">
        <Button
          variant="filled"
          :isDisabled="args.currentStep === 0"
          @click="goToPreviousStep"
        >
          Previous
        </Button>

        <Button
          variant="filled"
          :isDisabled="args.currentStep === args.dataSource.length - 1"
          @click="goToNextStep"
        >
          Next
        </Button>
      </div>`
  }),
  // 控制 controls 中能控制的參數
  parameters: {
    controls: {
      // exclude: ['status', 'src', 'imageAlt', 'username' ],
    },
    docs: {
      source: {
        transform: (src, storyContext) => {
          const {
            args
          } = storyContext;
          return [`<script setup>`, `import { ref } from "vue";`, `import { Stepper, Button } from "@ded-wds-vue/ui";`, ``, `const currentStep = ref(1);`, `const dataSource = [`, `  {`, `    title: "Step 1",`, `    desc: "Description",`, `    content: "Content for Step 1",`, `  },`, `  {`, `    title: "Step 2",`, `    desc: "Description",`, `    content: "Content for Step 2",`, `  },`, `  {`, `    title: "Step 3",`, `    desc: "Description",`, `    content: "Content for Step 3",`, `  }`, `];`, ``, `const goToPreviousStep = () => {`, `  if (currentStep.value > 0) {`, `    currentStep.value -= 1;`, `  }`, `};`, ``, `const goToNextStep = () => {`, `  if (currentStep.value < dataSource.length - 1) {`, `    currentStep.value += 1;`, `  }`, `};`, ``, `<\/script>`, "", "<template>", "  <Stepper", `      :dataSource='dataSource'`, `      :currentStep="currentStep"`, `      ${args.direction ? `direction="${args.direction}"` : ""}`, `      ${args.className ? `className="${args.className}"` : ""}`, "  ></Stepper>", `  <div style="display: flex; justify-content: flex-start; gap: 8px; margin-top: 16px;">`, `    <Button`, `      variant="filled"`, `      :isDisabled="currentStep === 0"`, `      @click="goToPreviousStep()"`, `    >`, `      Previous`, `    </Button>`, `  `, `    <Button`, `      variant="filled"`, `      :isDisabled="currentStep === dataSource.length - 1"`, `      @click="goToNextStep()"`, `    >`, `      Next`, `    </Button>`, `  </div>`, "</template>"].filter(Boolean).join("\n").trim();
        }
      }
    }
  }
};
StepperDefault.parameters = {
  ...StepperDefault.parameters,
  docs: {
    ...(_a = StepperDefault.parameters) == null ? void 0 : _a.docs,
    source: {
      originalSource: '{\n  name: "預設項目",\n  args: {\n    dataSource,\n    currentStep: 1,\n    direction: "horizontal",\n    className: ""\n  },\n  render: args => ({\n    components: {\n      Stepper\n    },\n    setup() {\n      return {\n        args\n      };\n    },\n    template: `\n      <Stepper\n        :dataSource="args.dataSource"\n        :currentStep="args.currentStep"\n        :direction="args.direction"\n        :className="args.className"\n      ></Stepper>`\n  }),\n  // 控制 controls 中能控制的參數\n  parameters: {\n    controls: {\n      // exclude: [\'status\', \'src\', \'imageAlt\', \'username\' ],\n    },\n    docs: {\n      source: {\n        transform: (src, storyContext) => {\n          const {\n            args\n          } = storyContext;\n          const dataSourceString = formatDataSource(args.dataSource);\n          return [`<script setup>`, `import { Stepper } from "@ded-wds-vue/ui";`, `const dataSource = [`, `${dataSourceString}`, `];`, `<\/script>`, "", "<template>", "  <Stepper", `      :dataSource="dataSource"`, `      ${args.currentStep !== undefined ? `:currentStep="${args.currentStep}"` : ""}`, `      ${args.direction ? `direction="${args.direction}"` : ""}`, `      ${args.className ? `className="${args.className}"` : ""}`, "  ></Stepper>", "</template>"].filter(Boolean).join("\\n").trim();\n        }\n      }\n    }\n  }\n}',
      ...(_c = (_b = StepperDefault.parameters) == null ? void 0 : _b.docs) == null ? void 0 : _c.source
    }
  }
};
StepperHorizontal.parameters = {
  ...StepperHorizontal.parameters,
  docs: {
    ...(_d = StepperHorizontal.parameters) == null ? void 0 : _d.docs,
    source: {
      originalSource: '{\n  name: "橫向互動模式",\n  args: {\n    dataSource,\n    currentStep: 1,\n    direction: "horizontal",\n    className: ""\n  },\n  render: args => ({\n    components: {\n      Stepper,\n      Button\n    },\n    setup() {\n      const updateArgs = newArgs => {\n        Object.assign(args, newArgs);\n      };\n      const goToPreviousStep = () => {\n        const newStep = Math.max(0, args.currentStep - 1);\n        updateArgs({\n          currentStep: newStep\n        });\n      };\n      const goToNextStep = () => {\n        const newStep = Math.min(args.dataSource.length - 1, args.currentStep + 1);\n        updateArgs({\n          currentStep: newStep\n        });\n      };\n      return {\n        args,\n        goToPreviousStep,\n        goToNextStep\n      };\n    },\n    template: `\n      <Stepper\n        :dataSource="args.dataSource"\n        :currentStep="args.currentStep"\n        :direction="args.direction"\n        :className="args.className"\n      >\n      </Stepper>\n      <div style="display: flex; justify-content: flex-start; gap: 8px; margin-top: 16px;">\n        <Button variant="filled" :isDisabled="args.currentStep === 0" @click="goToPreviousStep">\n          Previous\n        </Button>\n        <Button variant="filled" :isDisabled="args.currentStep === args.dataSource.length - 1" @click="goToNextStep">\n          Next\n        </Button>\n      </div>`\n  }),\n  // 控制 controls 中能控制的參數\n  parameters: {\n    controls: {\n      // exclude: [\'status\', \'src\', \'imageAlt\', \'username\' ],\n    },\n    docs: {\n      source: {\n        transform: (src, storyContext) => {\n          const {\n            args\n          } = storyContext;\n          return [`<script setup>`, `import { ref } from "vue";`, `import { Stepper, Button } from "@ded-wds-vue/ui";`, ``, `const currentStep = ref(1);`, `const dataSource = [`, `  {`, `    title: "Step 1",`, `    desc: "Description",`, `    content: "Content for Step 1",`, `  },`, `  {`, `    title: "Step 2",`, `    desc: "Description",`, `    content: "Content for Step 2",`, `  },`, `  {`, `    title: "Step 3",`, `    desc: "Description",`, `    content: "Content for Step 3",`, `  }`, `];`, ``, `const goToPreviousStep = () => {`, `  if (currentStep.value > 0) {`, `    currentStep.value -= 1;`, `  }`, `};`, ``, `const goToNextStep = () => {`, `  if (currentStep.value < dataSource.length - 1) {`, `    currentStep.value += 1;`, `  }`, `};`, ``, `<\/script>`, "", "<template>", "  <Stepper", `      :dataSource=\'dataSource\'`, `      :currentStep="currentStep"`, `      ${args.direction ? `direction="${args.direction}"` : ""}`, `      ${args.className ? `className="${args.className}"` : ""}`, "  ></Stepper>", `  <div style="display: flex; justify-content: flex-start; gap: 8px; margin-top: 16px;">`, `    <Button`, `      variant="filled"`, `      :isDisabled="currentStep === 0"`, `      @click="goToPreviousStep()"`, `    >`, `      Previous`, `    </Button>`, `  `, `    <Button`, `      variant="filled"`, `      :isDisabled="currentStep === dataSource.length - 1"`, `      @click="goToNextStep()"`, `    >`, `      Next`, `    </Button>`, `  </div>`, "</template>"].filter(Boolean).join("\\n").trim();\n        }\n      }\n    }\n  }\n}',
      ...(_f = (_e = StepperHorizontal.parameters) == null ? void 0 : _e.docs) == null ? void 0 : _f.source
    }
  }
};
StepperVertical.parameters = {
  ...StepperVertical.parameters,
  docs: {
    ...(_g = StepperVertical.parameters) == null ? void 0 : _g.docs,
    source: {
      originalSource: '{\n  name: "直向互動模式",\n  args: {\n    dataSource,\n    currentStep: 1,\n    direction: "vertical",\n    className: ""\n  },\n  render: args => ({\n    components: {\n      Stepper,\n      Button\n    },\n    setup() {\n      const updateArgs = newArgs => {\n        Object.assign(args, newArgs);\n      };\n      const goToPreviousStep = () => {\n        const newStep = Math.max(0, args.currentStep - 1);\n        updateArgs({\n          currentStep: newStep\n        });\n      };\n      const goToNextStep = () => {\n        const newStep = Math.min(args.dataSource.length - 1, args.currentStep + 1);\n        updateArgs({\n          currentStep: newStep\n        });\n      };\n      return {\n        args,\n        goToPreviousStep,\n        goToNextStep\n      };\n    },\n    template: `\n      <Stepper\n        :dataSource="args.dataSource"\n        :currentStep="args.currentStep"\n        :direction="args.direction"\n        :className="args.className"\n      >\n      </Stepper>\n\n      <div style="display: flex; justify-content: flex-start; gap: 8px; margin-top: 16px;">\n        <Button\n          variant="filled"\n          :isDisabled="args.currentStep === 0"\n          @click="goToPreviousStep"\n        >\n          Previous\n        </Button>\n\n        <Button\n          variant="filled"\n          :isDisabled="args.currentStep === args.dataSource.length - 1"\n          @click="goToNextStep"\n        >\n          Next\n        </Button>\n      </div>`\n  }),\n  // 控制 controls 中能控制的參數\n  parameters: {\n    controls: {\n      // exclude: [\'status\', \'src\', \'imageAlt\', \'username\' ],\n    },\n    docs: {\n      source: {\n        transform: (src, storyContext) => {\n          const {\n            args\n          } = storyContext;\n          // const dataSourceString = formatDataSource(args.dataSource);\n          return [`<script setup>`, `import { ref } from "vue";`, `import { Stepper, Button } from "@ded-wds-vue/ui";`, ``, `const currentStep = ref(1);`, `const dataSource = [`, `  {`, `    title: "Step 1",`, `    desc: "Description",`, `    content: "Content for Step 1",`, `  },`, `  {`, `    title: "Step 2",`, `    desc: "Description",`, `    content: "Content for Step 2",`, `  },`, `  {`, `    title: "Step 3",`, `    desc: "Description",`, `    content: "Content for Step 3",`, `  }`, `];`, ``, `const goToPreviousStep = () => {`, `  if (currentStep.value > 0) {`, `    currentStep.value -= 1;`, `  }`, `};`, ``, `const goToNextStep = () => {`, `  if (currentStep.value < dataSource.length - 1) {`, `    currentStep.value += 1;`, `  }`, `};`, ``, `<\/script>`, "", "<template>", "  <Stepper", `      :dataSource=\'dataSource\'`, `      :currentStep="currentStep"`, `      ${args.direction ? `direction="${args.direction}"` : ""}`, `      ${args.className ? `className="${args.className}"` : ""}`, "  ></Stepper>", `  <div style="display: flex; justify-content: flex-start; gap: 8px; margin-top: 16px;">`, `    <Button`, `      variant="filled"`, `      :isDisabled="currentStep === 0"`, `      @click="goToPreviousStep()"`, `    >`, `      Previous`, `    </Button>`, `  `, `    <Button`, `      variant="filled"`, `      :isDisabled="currentStep === dataSource.length - 1"`, `      @click="goToNextStep()"`, `    >`, `      Next`, `    </Button>`, `  </div>`, "</template>"].filter(Boolean).join("\\n").trim();\n        }\n      }\n    }\n  }\n}',
      ...(_i = (_h = StepperVertical.parameters) == null ? void 0 : _h.docs) == null ? void 0 : _i.source
    }
  }
};
const __namedExportsOrder = ["StepperDefault", "StepperHorizontal", "StepperVertical"];
export {
  StepperDefault,
  StepperHorizontal,
  StepperVertical,
  __namedExportsOrder,
  Stepper_stories as default
};

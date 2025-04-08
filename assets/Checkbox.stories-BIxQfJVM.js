var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l;
import { _ as _sfc_main } from "./Checkbox-CGc1iH5B.js";
import "./vue.esm-bundler-K7CzQrxl.js";
import "./Icon-B6pI5HKs.js";
import "./v4-CjlX8hrF.js";
function formatDataSource(dataSource) {
  return `    ${dataSource.map((item) => `{
        label: "${item.label}",
        value: "${item.value}",
        isDisabled: ${item.isDisabled}
    }`).join(",\n    ")}`;
}
const Checkbox_stories = {
  title: "Component/Checkbox",
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
          summary: "{ label: string; value: string; isDisabled: boolean; }[]"
        }
      }
    },
    direction: {
      description: "排列方向",
      control: {
        type: "select"
      },
      options: ["row", "column"],
      table: {
        type: {
          summary: "row | column"
        }
      }
    },
    size: {
      description: "尺寸",
      control: {
        type: "select"
      },
      options: ["small", "medium", "large"],
      table: {
        type: {
          summary: "small | medium | large"
        }
      }
    },
    className: {
      description: "客製化樣式",
      control: {
        type: "text"
      }
    },
    modelValue: {
      description: "選中的項目",
      control: {
        type: "object"
      },
      table: {
        type: {
          summary: "string[]"
        },
        category: "v-model"
        // defaultValue: { summary: 'string[]' },
      }
    }
  },
  parameters: {
    // 自動文件
    docs: {
      title: "Checkbox",
      description: {
        component: "複選框組件的呈現及說明。"
      }
    }
  }
};
const CheckboxMultiStory = {
  name: "預設項目",
  args: {
    dataSource: [{
      label: "Option1",
      value: "option1",
      isDisabled: false
    }, {
      label: "Option2",
      value: "option2",
      isDisabled: false
    }, {
      label: "Option3",
      value: "option3",
      isDisabled: true
    }],
    direction: "row",
    size: "medium",
    className: "",
    modelValue: ["option1", "option3"]
  },
  render: (args) => ({
    components: {
      Checkbox: _sfc_main
    },
    setup() {
      return {
        args
      };
    },
    template: `
      <Checkbox
        :dataSource="args.dataSource"
        :direction="args.direction"
        :size="args.size"
        :className="args.className"
        v-model="args.modelValue"
      ></Checkbox>
    `
  }),
  // 控制 controls 中能控制的參數
  parameters: {
    controls: {
      // include: [ 'label', 'id', 'name', 'themeColor', 'className','datasource'],
    },
    docs: {
      source: {
        transform: (src, storyContext) => {
          const {
            args
          } = storyContext;
          const dataSourceString = formatDataSource(args.dataSource);
          return [`<script setup>`, `import { ref } from "vue";`, `import { Checkbox } from "@ded-wds-vue/ui";`, `const dataSource = [`, `${dataSourceString}`, `];`, `const modelValue = ref(["option1", "option3"]);`, `<\/script>`, "", "<template>", "  <Checkbox", `    :dataSource="dataSource"`, `    ${args.direction ? `direction="${args.direction}"` : ""}`, `    ${args.size ? `size="${args.size}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, `    v-model="modelValue"`, "  ></Checkbox>", "</template>"].filter(Boolean).join("\n").trim();
        }
      }
    }
  }
};
const CheckboxColumnDirection = {
  name: "垂直排列",
  args: {
    dataSource: [{
      label: "Option1",
      value: "option4",
      isDisabled: false
    }, {
      label: "Option2",
      value: "option5",
      isDisabled: false
    }, {
      label: "Option3",
      value: "option6",
      isDisabled: false
    }],
    // direction: "column",
    size: "medium",
    className: "",
    modelValue: ["option4", "option6"]
  },
  render: (args) => ({
    components: {
      Checkbox: _sfc_main
    },
    setup() {
      return {
        args
      };
    },
    template: `
      <Checkbox
        :dataSource="args.dataSource"
        direction="column"
        :size="args.size"
        :className="args.className"
        v-model="args.modelValue"
      ></Checkbox>
    `
  }),
  // 控制 controls 中能控制的參數
  parameters: {
    controls: {
      // include: [ 'label', 'id', 'name', 'themeColor', 'className','datasource'],
      exclude: ["direction"]
    },
    docs: {
      source: {
        transform: (src, storyContext) => {
          const {
            args
          } = storyContext;
          const dataSourceString = formatDataSource(args.dataSource);
          return [`<script setup>`, `import { ref } from "vue";`, `import { Checkbox } from "@ded-wds-vue/ui";`, `const dataSource = [`, `${dataSourceString}`, `];`, `const modelValue = ref(["option4", "option6"]);`, `<\/script>`, "", "<template>", "  <Checkbox", `    :dataSource="dataSource"`, `    direction="column"`, `    ${args.size ? `size="${args.size}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, `    v-model="modelValue"`, "  ></Checkbox>", "</template>"].filter(Boolean).join("\n").trim();
        }
      }
    }
  }
};
const CheckboxRowDirection = {
  name: "水平排列",
  args: {
    dataSource: [{
      label: "Option1",
      value: "option7",
      isDisabled: false
    }, {
      label: "Option2",
      value: "option8",
      isDisabled: false
    }, {
      label: "Option3",
      value: "option9",
      isDisabled: false
    }],
    // direction: "column",
    size: "medium",
    className: "",
    modelValue: ["option7", "option9"]
  },
  render: (args) => ({
    components: {
      Checkbox: _sfc_main
    },
    setup() {
      return {
        args
      };
    },
    template: `
      <Checkbox
        :dataSource="args.dataSource"
        direction="row"
        :size="args.size"
        :className="args.className"
        v-model="args.modelValue"
      ></Checkbox>
    `
  }),
  // 控制 controls 中能控制的參數
  parameters: {
    controls: {
      // include: [ 'label', 'id', 'name', 'themeColor', 'className','datasource'],
      exclude: ["direction"]
    },
    docs: {
      source: {
        transform: (src, storyContext) => {
          const {
            args
          } = storyContext;
          const dataSourceString = formatDataSource(args.dataSource);
          return [`<script setup>`, `import { ref } from "vue";`, `import { Checkbox } from "@ded-wds-vue/ui";`, `const dataSource = [`, `${dataSourceString}`, `];`, `const modelValue = ref(["option7", "option9"]);`, `<\/script>`, "", "<template>", "  <Checkbox", `    :dataSource="dataSource"`, `    direction="row"`, `    ${args.size ? `size="${args.size}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, `    v-model="modelValue"`, "  ></Checkbox>", "</template>"].filter(Boolean).join("\n").trim();
        }
      }
    }
  }
};
const CheckboxSizeStory = {
  name: "元件尺寸",
  args: {
    dataSource: [{
      label: "Option1",
      value: "option10",
      isDisabled: false
    }, {
      label: "Option2",
      value: "option11",
      isDisabled: false
    }, {
      label: "Option3",
      value: "option12",
      isDisabled: false
    }],
    direction: "row",
    size: "medium",
    className: "",
    modelValue: ["option10", "option12"]
  },
  render: (args) => ({
    components: {
      Checkbox: _sfc_main
    },
    setup() {
      return {
        args
      };
    },
    template: `
      <div style="display:flex; flex-direction: column; gap: 24px">
        <Checkbox
          :themeColor="args.themeColor"
          :dataSource="args.dataSource"
          :direction="args.direction"
          size="large"
          :className="args.className"
          v-model="args.modelValue"
        ></Checkbox>
        <Checkbox
          :themeColor="args.themeColor"
          :dataSource="args.dataSource"
          :direction="args.direction"
          size="medium"
          :className="args.className"
          v-model="args.modelValue"
        ></Checkbox>
        <Checkbox
          :themeColor="args.themeColor"
          :dataSource="args.dataSource"
          :direction="args.direction"
          size="small"
          :className="args.className"
          v-model="args.modelValue"
        ></Checkbox>
      </div>
    `
  }),
  // 控制 controls 中能控制的參數
  parameters: {
    controls: {
      // include: [ 'label', 'id', 'name', 'themeColor', 'className','datasource'],
      exclude: ["size"]
    },
    docs: {
      source: {
        transform: (src, storyContext) => {
          const {
            args
          } = storyContext;
          const dataSourceString = formatDataSource(args.dataSource);
          return [`<script setup>`, `import { ref } from "vue";`, `import { Checkbox } from "@ded-wds-vue/ui";`, `const dataSource = [`, `${dataSourceString}`, `];`, `const modelValue = ref(["option10", "option12"]);`, `<\/script>`, "", "<template>", "  <Checkbox", `    :dataSource="dataSource"`, `    ${args.direction ? `direction="${args.direction}"` : ""}`, `    size="large"`, `    ${args.className ? `className="${args.className}"` : ""}`, `    v-model="modelValue"`, "  ></Checkbox>", "  <Checkbox", `    :dataSource="dataSource"`, `    ${args.direction ? `direction="${args.direction}"` : ""}`, `    size="medium"`, `    ${args.className ? `className="${args.className}"` : ""}`, `    v-model="modelValue"`, "  ></Checkbox>", "  <Checkbox", `    :dataSource="dataSource"`, `    ${args.direction ? `direction="${args.direction}"` : ""}`, `    size="small"`, `    ${args.className ? `className="${args.className}"` : ""}`, `    v-model="modelValue"`, "  ></Checkbox>", "</template>"].filter(Boolean).join("\n").trim();
        }
      }
    }
  }
};
CheckboxMultiStory.parameters = {
  ...CheckboxMultiStory.parameters,
  docs: {
    ...(_a = CheckboxMultiStory.parameters) == null ? void 0 : _a.docs,
    source: {
      originalSource: '{\n  name: "預設項目",\n  args: {\n    dataSource: [{\n      label: "Option1",\n      value: "option1",\n      isDisabled: false\n    }, {\n      label: "Option2",\n      value: "option2",\n      isDisabled: false\n    }, {\n      label: "Option3",\n      value: "option3",\n      isDisabled: true\n    }],\n    direction: "row",\n    size: "medium",\n    className: "",\n    modelValue: ["option1", "option3"]\n  },\n  render: args => ({\n    components: {\n      Checkbox\n    },\n    setup() {\n      return {\n        args\n      };\n    },\n    template: `\n      <Checkbox\n        :dataSource="args.dataSource"\n        :direction="args.direction"\n        :size="args.size"\n        :className="args.className"\n        v-model="args.modelValue"\n      ></Checkbox>\n    `\n  }),\n  // 控制 controls 中能控制的參數\n  parameters: {\n    controls: {\n      // include: [ \'label\', \'id\', \'name\', \'themeColor\', \'className\',\'datasource\'],\n    },\n    docs: {\n      source: {\n        transform: (src, storyContext) => {\n          const {\n            args\n          } = storyContext;\n          const dataSourceString = formatDataSource(args.dataSource);\n          return [`<script setup>`, `import { ref } from "vue";`, `import { Checkbox } from "@ded-wds-vue/ui";`, `const dataSource = [`, `${dataSourceString}`, `];`, `const modelValue = ref(["option1", "option3"]);`, `<\/script>`, "", "<template>", "  <Checkbox", `    :dataSource="dataSource"`, `    ${args.direction ? `direction="${args.direction}"` : ""}`, `    ${args.size ? `size="${args.size}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, `    v-model="modelValue"`, "  ></Checkbox>", "</template>"].filter(Boolean).join("\\n").trim();\n        }\n      }\n    }\n  }\n}',
      ...(_c = (_b = CheckboxMultiStory.parameters) == null ? void 0 : _b.docs) == null ? void 0 : _c.source
    }
  }
};
CheckboxColumnDirection.parameters = {
  ...CheckboxColumnDirection.parameters,
  docs: {
    ...(_d = CheckboxColumnDirection.parameters) == null ? void 0 : _d.docs,
    source: {
      originalSource: '{\n  name: "垂直排列",\n  args: {\n    dataSource: [{\n      label: "Option1",\n      value: "option4",\n      isDisabled: false\n    }, {\n      label: "Option2",\n      value: "option5",\n      isDisabled: false\n    }, {\n      label: "Option3",\n      value: "option6",\n      isDisabled: false\n    }],\n    // direction: "column",\n    size: "medium",\n    className: "",\n    modelValue: ["option4", "option6"]\n  },\n  render: args => ({\n    components: {\n      Checkbox\n    },\n    setup() {\n      return {\n        args\n      };\n    },\n    template: `\n      <Checkbox\n        :dataSource="args.dataSource"\n        direction="column"\n        :size="args.size"\n        :className="args.className"\n        v-model="args.modelValue"\n      ></Checkbox>\n    `\n  }),\n  // 控制 controls 中能控制的參數\n  parameters: {\n    controls: {\n      // include: [ \'label\', \'id\', \'name\', \'themeColor\', \'className\',\'datasource\'],\n      exclude: ["direction"]\n    },\n    docs: {\n      source: {\n        transform: (src, storyContext) => {\n          const {\n            args\n          } = storyContext;\n          const dataSourceString = formatDataSource(args.dataSource);\n          return [`<script setup>`, `import { ref } from "vue";`, `import { Checkbox } from "@ded-wds-vue/ui";`, `const dataSource = [`, `${dataSourceString}`, `];`, `const modelValue = ref(["option4", "option6"]);`, `<\/script>`, "", "<template>", "  <Checkbox", `    :dataSource="dataSource"`, `    direction="column"`, `    ${args.size ? `size="${args.size}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, `    v-model="modelValue"`, "  ></Checkbox>", "</template>"].filter(Boolean).join("\\n").trim();\n        }\n      }\n    }\n  }\n}',
      ...(_f = (_e = CheckboxColumnDirection.parameters) == null ? void 0 : _e.docs) == null ? void 0 : _f.source
    }
  }
};
CheckboxRowDirection.parameters = {
  ...CheckboxRowDirection.parameters,
  docs: {
    ...(_g = CheckboxRowDirection.parameters) == null ? void 0 : _g.docs,
    source: {
      originalSource: '{\n  name: "水平排列",\n  args: {\n    dataSource: [{\n      label: "Option1",\n      value: "option7",\n      isDisabled: false\n    }, {\n      label: "Option2",\n      value: "option8",\n      isDisabled: false\n    }, {\n      label: "Option3",\n      value: "option9",\n      isDisabled: false\n    }],\n    // direction: "column",\n    size: "medium",\n    className: "",\n    modelValue: ["option7", "option9"]\n  },\n  render: args => ({\n    components: {\n      Checkbox\n    },\n    setup() {\n      return {\n        args\n      };\n    },\n    template: `\n      <Checkbox\n        :dataSource="args.dataSource"\n        direction="row"\n        :size="args.size"\n        :className="args.className"\n        v-model="args.modelValue"\n      ></Checkbox>\n    `\n  }),\n  // 控制 controls 中能控制的參數\n  parameters: {\n    controls: {\n      // include: [ \'label\', \'id\', \'name\', \'themeColor\', \'className\',\'datasource\'],\n      exclude: ["direction"]\n    },\n    docs: {\n      source: {\n        transform: (src, storyContext) => {\n          const {\n            args\n          } = storyContext;\n          const dataSourceString = formatDataSource(args.dataSource);\n          return [`<script setup>`, `import { ref } from "vue";`, `import { Checkbox } from "@ded-wds-vue/ui";`, `const dataSource = [`, `${dataSourceString}`, `];`, `const modelValue = ref(["option7", "option9"]);`, `<\/script>`, "", "<template>", "  <Checkbox", `    :dataSource="dataSource"`, `    direction="row"`, `    ${args.size ? `size="${args.size}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, `    v-model="modelValue"`, "  ></Checkbox>", "</template>"].filter(Boolean).join("\\n").trim();\n        }\n      }\n    }\n  }\n}',
      ...(_i = (_h = CheckboxRowDirection.parameters) == null ? void 0 : _h.docs) == null ? void 0 : _i.source
    }
  }
};
CheckboxSizeStory.parameters = {
  ...CheckboxSizeStory.parameters,
  docs: {
    ...(_j = CheckboxSizeStory.parameters) == null ? void 0 : _j.docs,
    source: {
      originalSource: '{\n  name: "元件尺寸",\n  args: {\n    dataSource: [{\n      label: "Option1",\n      value: "option10",\n      isDisabled: false\n    }, {\n      label: "Option2",\n      value: "option11",\n      isDisabled: false\n    }, {\n      label: "Option3",\n      value: "option12",\n      isDisabled: false\n    }],\n    direction: "row",\n    size: "medium",\n    className: "",\n    modelValue: ["option10", "option12"]\n  },\n  render: args => ({\n    components: {\n      Checkbox\n    },\n    setup() {\n      return {\n        args\n      };\n    },\n    template: `\n      <div style="display:flex; flex-direction: column; gap: 24px">\n        <Checkbox\n          :themeColor="args.themeColor"\n          :dataSource="args.dataSource"\n          :direction="args.direction"\n          size="large"\n          :className="args.className"\n          v-model="args.modelValue"\n        ></Checkbox>\n        <Checkbox\n          :themeColor="args.themeColor"\n          :dataSource="args.dataSource"\n          :direction="args.direction"\n          size="medium"\n          :className="args.className"\n          v-model="args.modelValue"\n        ></Checkbox>\n        <Checkbox\n          :themeColor="args.themeColor"\n          :dataSource="args.dataSource"\n          :direction="args.direction"\n          size="small"\n          :className="args.className"\n          v-model="args.modelValue"\n        ></Checkbox>\n      </div>\n    `\n  }),\n  // 控制 controls 中能控制的參數\n  parameters: {\n    controls: {\n      // include: [ \'label\', \'id\', \'name\', \'themeColor\', \'className\',\'datasource\'],\n      exclude: ["size"]\n    },\n    docs: {\n      source: {\n        transform: (src, storyContext) => {\n          const {\n            args\n          } = storyContext;\n          const dataSourceString = formatDataSource(args.dataSource);\n          return [`<script setup>`, `import { ref } from "vue";`, `import { Checkbox } from "@ded-wds-vue/ui";`, `const dataSource = [`, `${dataSourceString}`, `];`, `const modelValue = ref(["option10", "option12"]);`, `<\/script>`, "", "<template>", "  <Checkbox", `    :dataSource="dataSource"`, `    ${args.direction ? `direction="${args.direction}"` : ""}`, `    size="large"`, `    ${args.className ? `className="${args.className}"` : ""}`, `    v-model="modelValue"`, "  ></Checkbox>", "  <Checkbox", `    :dataSource="dataSource"`, `    ${args.direction ? `direction="${args.direction}"` : ""}`, `    size="medium"`, `    ${args.className ? `className="${args.className}"` : ""}`, `    v-model="modelValue"`, "  ></Checkbox>", "  <Checkbox", `    :dataSource="dataSource"`, `    ${args.direction ? `direction="${args.direction}"` : ""}`, `    size="small"`, `    ${args.className ? `className="${args.className}"` : ""}`, `    v-model="modelValue"`, "  ></Checkbox>", "</template>"].filter(Boolean).join("\\n").trim();\n        }\n      }\n    }\n  }\n}',
      ...(_l = (_k = CheckboxSizeStory.parameters) == null ? void 0 : _k.docs) == null ? void 0 : _l.source
    }
  }
};
const __namedExportsOrder = ["CheckboxMultiStory", "CheckboxColumnDirection", "CheckboxRowDirection", "CheckboxSizeStory"];
export {
  CheckboxColumnDirection,
  CheckboxMultiStory,
  CheckboxRowDirection,
  CheckboxSizeStory,
  __namedExportsOrder,
  Checkbox_stories as default
};

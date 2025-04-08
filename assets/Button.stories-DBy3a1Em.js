var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l;
import { _ as _sfc_main } from "./Button-8IAwqsIt.js";
import "./vue.esm-bundler-K7CzQrxl.js";
import "./Icon-B6pI5HKs.js";
const Button_stories = {
  title: "Component/Button",
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
        }
      }
    },
    variant: {
      description: "按鈕樣式",
      required: true,
      control: {
        type: "select"
      },
      options: ["filled", "ghost", "text", "soft"],
      table: {
        type: {
          summary: "filled | ghost | text | soft"
        }
      }
    },
    prefix: {
      description: "前置元素",
      control: {
        type: "select",
        labels: {
          "": "none",
          "SvgAccount": "SvgAccount",
          "SvgSearch": "SvgSearch",
          "SvgVisibility": "SvgVisibility",
          "SvgVisibilityOff": "SvgVisibilityOff"
        }
      },
      options: ["", "SvgAccount", "SvgSearch", "SvgVisibility", "SvgVisibilityOff"]
    },
    suffix: {
      description: "後置元素",
      control: {
        type: "select",
        labels: {
          "": "none",
          "SvgAccount": "SvgAccount",
          "SvgSearch": "SvgSearch",
          "SvgVisibility": "SvgVisibility",
          "SvgVisibilityOff": "SvgVisibilityOff"
        }
      },
      options: ["", "SvgAccount", "SvgSearch", "SvgVisibility", "SvgVisibilityOff"]
    },
    size: {
      description: "按鈕尺寸",
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
    width: {
      description: "按鈕寬度",
      control: {
        type: "select"
      },
      options: ["fluid", "fit"],
      table: {
        type: {
          summary: "fluid | fit"
        }
      }
    },
    borderWidth: {
      description: "按鈕邊框寬度",
      control: {
        type: "select"
      },
      options: ["none", "1px", "2px", "3px", "4px", "5px"],
      table: {
        type: {
          summary: "none | 1px | 2px | 3px | 4px | 5px"
        }
      }
    },
    radius: {
      description: "按鈕圓角大小",
      control: {
        type: "select"
      },
      options: ["none", "2px", "4px", "8px", "12px", "16px", "32px", "full"],
      table: {
        type: {
          summary: "none | 2px | 4px | 8px | 12px | 16px | 32px |full"
        }
      }
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
    },
    default: {
      description: "按鈕內容",
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
      title: "按鈕",
      description: {
        component: "按鈕組件的呈現及說明。"
      }
    }
  }
};
const DefaultButtonStory = {
  name: "預設項目",
  args: {
    themeColor: "primary",
    variant: "filled",
    prefix: "",
    suffix: "",
    size: "medium",
    width: "fit",
    borderWidth: "1px",
    radius: "4px",
    isDisabled: false,
    className: "",
    default: "Button"
  },
  render: (args) => ({
    components: {
      Button: _sfc_main
    },
    setup() {
      return {
        args
      };
    },
    template: `
      <Button
        :themeColor="args.themeColor"
        :variant="args.variant"
        :prefix="args.prefix"
        :suffix="args.suffix"
        :size="args.size"
        :width="args.width"
        :borderWidth="args.borderWidth"
        :radius="args.radius"
        :isDisabled="args.isDisabled"
        :className="args.className"
      >
        {{ args.default }}
      </Button>
    `
  }),
  // 控制 controls 中能控制的參數
  parameters: {
    controls: {
      // include: ['variant', 'content', 'themeColor', 'isDisabled', 'prefix'],
    },
    docs: {
      source: {
        transform: (src, storyContext) => {
          const {
            args
          } = storyContext;
          return [`<script setup>`, `import { Button } from "@ded-wds-vue/ui";`, `<\/script>`, "", "<template>", `  <Button`, `    ${args.themeColor ? `themeColor="${args.themeColor}"` : ""}`, `    ${args.variant ? `variant="${args.variant}"` : ""}`, `    ${args.prefix ? `prefix="${args.prefix}"` : ""}`, `    ${args.suffix ? `suffix="${args.suffix}"` : ""}`, `    ${args.size ? `size="${args.size}"` : ""}`, `    ${args.width ? `width="${args.width}"` : ""}`, `    ${args.borderWidth ? `borderWidth="${args.borderWidth}"` : ""}`, `    ${args.radius ? `radius="${args.radius}"` : ""}`, `    ${args.isDisabled !== void 0 ? `:isDisabled="${args.isDisabled}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, `  >`, `    ${args.default || ""}`, `  </Button>`, "</template>"].filter(Boolean).join("\n").trim();
        }
      }
    }
  }
};
const ButtonPrefixSuffixStory = {
  name: "附加元素",
  args: {
    themeColor: "primary",
    variant: "ghost",
    prefix: "",
    suffix: "",
    size: "medium",
    width: "fit",
    borderWidth: "1px",
    radius: "4px",
    isDisabled: false,
    className: "",
    default: "Button"
  },
  render: (args) => ({
    components: {
      Button: _sfc_main
    },
    setup() {
      return {
        args
      };
    },
    template: `
      <div style="display:flex; flex-wrap: wrap; gap: 16px">
        <Button
          :themeColor="args.themeColor"
          :variant="args.variant"
          prefix="SvgAccount"
          suffix=""
          :size="args.size"
          :width="args.width"
          :borderWidth="args.borderWidth"
          :radius="args.radius"
          :isDisabled="args.isDisabled"
          :className="args.className"
        >
          {{ args.default }}
        </Button>
        <Button
          :themeColor="args.themeColor"
          :variant="args.variant"
          prefix=""
          suffix="SvgSearch"
          :size="args.size"
          :width="args.width"
          :borderWidth="args.borderWidth"
          :radius="args.radius"
          :isDisabled="args.isDisabled"
          :className="args.className"
        >
          {{ args.default }}
        </Button>
      </div>
    `
  }),
  // 控制 controls 中能控制的參數
  parameters: {
    controls: {
      exclude: ["prefix", "suffix"]
    },
    docs: {
      source: {
        transform: (src, storyContext) => {
          const {
            args
          } = storyContext;
          return [`<script setup>`, `import { Button } from "@ded-wds-vue/ui";`, `<\/script>`, "", "<template>", `  <Button`, `    ${args.themeColor ? `themeColor="${args.themeColor}"` : ""}`, `    ${args.variant ? `variant="${args.variant}"` : ""}`, `    prefix="SvgAccount"`, `    ${args.suffix ? `suffix="${args.suffix}"` : ""}`, `    ${args.size ? `size="${args.size}"` : ""}`, `    ${args.width ? `width="${args.width}"` : ""}`, `    ${args.borderWidth ? `borderWidth="${args.borderWidth}"` : ""}`, `    ${args.radius ? `radius="${args.radius}"` : ""}`, `    ${args.isDisabled !== void 0 ? `:isDisabled="${args.isDisabled}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, `  >`, `    ${args.default || ""}`, `  </Button>`, `  <Button`, `    ${args.themeColor ? `themeColor="${args.themeColor}"` : ""}`, `    ${args.variant ? `variant="${args.variant}"` : ""}`, `    ${args.prefix ? `prefix="${args.prefix}"` : ""}`, `    suffix="SvgSearch"`, `    ${args.size ? `size="${args.size}"` : ""}`, `    ${args.width ? `width="${args.width}"` : ""}`, `    ${args.borderWidth ? `borderWidth="${args.borderWidth}"` : ""}`, `    ${args.radius ? `radius="${args.radius}"` : ""}`, `    ${args.isDisabled !== void 0 ? `:isDisabled="${args.isDisabled}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, `  >`, `    ${args.default || ""}`, `  </Button>`, "</template>"].filter(Boolean).join("\n").trim();
        }
      }
    }
  }
};
const ButtonTypeStory = {
  name: "外觀樣式",
  args: {
    themeColor: "primary",
    variant: "filled",
    prefix: "",
    suffix: "",
    size: "medium",
    width: "fit",
    borderWidth: "1px",
    radius: "4px",
    isDisabled: false,
    className: "",
    default: "Button"
  },
  render: (args) => ({
    components: {
      Button: _sfc_main
    },
    setup() {
      return {
        args
      };
    },
    template: `
    <div style="display:flex; flex-wrap: wrap; gap: 16px">
      <Button
        :themeColor="args.themeColor"
        variant="filled"
        :prefix="args.prefix"
        :suffix="args.suffix"
        :size="args.size"
        :width="args.width"
        :borderWidth="args.borderWidth"
        :radius="args.radius"
        :isDisabled="args.isDisabled"
        :className="args.className"
      >
        {{ args.default }}
      </Button>
      <Button
        :themeColor="args.themeColor"
        variant="ghost"
        :prefix="args.prefix"
        :suffix="args.suffix"
        :size="args.size"
        :width="args.width"
        :borderWidth="args.borderWidth"
        :radius="args.radius"
        :isDisabled="args.isDisabled"
        :className="args.className"
      >
        {{ args.default }}
      </Button>
      <Button
        :themeColor="args.themeColor"
        variant="text"
        :prefix="args.prefix"
        :suffix="args.suffix"
        :size="args.size"
        :width="args.width"
        :borderWidth="args.borderWidth"
        :radius="args.radius"
        :isDisabled="args.isDisabled"
        :className="args.className"
      >
        {{ args.default }}
      </Button>
      <Button
        :themeColor="args.themeColor"
        variant="soft"
        :prefix="args.prefix"
        :suffix="args.suffix"
        :size="args.size"
        :width="args.width"
        :borderWidth="args.borderWidth"
        :radius="args.radius"
        :isDisabled="args.isDisabled"
        :className="args.className"
      >
        {{ args.default }}
      </Button>
    </div>
    `
  }),
  // 控制 controls 中能控制的參數
  parameters: {
    controls: {
      exclude: ["variant"]
    },
    docs: {
      source: {
        transform: (src, storyContext) => {
          const {
            args
          } = storyContext;
          return [`<script setup>`, `import { Button } from "@ded-wds-vue/ui";`, `<\/script>`, "", "<template>", `  <Button`, `    ${args.themeColor ? `themeColor="${args.themeColor}"` : ""}`, `    variant="filled"`, `    ${args.prefix ? `prefix="${args.prefix}"` : ""}`, `    ${args.suffix ? `suffix="${args.suffix}"` : ""}`, `    ${args.size ? `size="${args.size}"` : ""}`, `    ${args.width ? `width="${args.width}"` : ""}`, `    ${args.borderWidth ? `borderWidth="${args.borderWidth}"` : ""}`, `    ${args.radius ? `radius="${args.radius}"` : ""}`, `    ${args.isDisabled !== void 0 ? `:isDisabled="${args.isDisabled}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, `  >`, `    ${args.default || ""}`, `  </Button>`, `  <Button`, `    ${args.themeColor ? `themeColor="${args.themeColor}"` : ""}`, `    variant="ghost"`, `    ${args.prefix ? `prefix="${args.prefix}"` : ""}`, `    ${args.suffix ? `suffix="${args.suffix}"` : ""}`, `    ${args.size ? `size="${args.size}"` : ""}`, `    ${args.width ? `width="${args.width}"` : ""}`, `    ${args.borderWidth ? `borderWidth="${args.borderWidth}"` : ""}`, `    ${args.radius ? `radius="${args.radius}"` : ""}`, `    ${args.isDisabled !== void 0 ? `:isDisabled="${args.isDisabled}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, `  >`, `    ${args.default || ""}`, `  </Button>`, `  <Button`, `    ${args.themeColor ? `themeColor="${args.themeColor}"` : ""}`, `    variant="text"`, `    ${args.prefix ? `prefix="${args.prefix}"` : ""}`, `    ${args.suffix ? `suffix="${args.suffix}"` : ""}`, `    ${args.size ? `size="${args.size}"` : ""}`, `    ${args.width ? `width="${args.width}"` : ""}`, `    ${args.borderWidth ? `borderWidth="${args.borderWidth}"` : ""}`, `    ${args.radius ? `radius="${args.radius}"` : ""}`, `    ${args.isDisabled !== void 0 ? `:isDisabled="${args.isDisabled}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, `  >`, `    ${args.default || ""}`, `  </Button>`, `  <Button`, `    ${args.themeColor ? `themeColor="${args.themeColor}"` : ""}`, `    variant="soft"`, `    ${args.prefix ? `prefix="${args.prefix}"` : ""}`, `    ${args.suffix ? `suffix="${args.suffix}"` : ""}`, `    ${args.size ? `size="${args.size}"` : ""}`, `    ${args.width ? `width="${args.width}"` : ""}`, `    ${args.borderWidth ? `borderWidth="${args.borderWidth}"` : ""}`, `    ${args.radius ? `radius="${args.radius}"` : ""}`, `    ${args.isDisabled !== void 0 ? `:isDisabled="${args.isDisabled}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, `  >`, `    ${args.default || ""}`, `  </Button>`, "</template>"].filter(Boolean).join("\n").trim();
        }
      }
    }
  }
};
const ButtonColorStory = {
  name: "主題色彩",
  args: {
    variant: "filled",
    prefix: "SvgAccount",
    suffix: "",
    size: "medium",
    width: "fit",
    borderWidth: "1px",
    radius: "4px",
    isDisabled: false,
    className: "",
    default: "Button"
  },
  render: (args) => ({
    components: {
      Button: _sfc_main
    },
    setup() {
      return {
        args
      };
    },
    template: `
      <div style="display:flex; flex-wrap: wrap; gap: 16px">
        <Button
          themeColor="primary"
          :variant="args.variant"
          :prefix="args.prefix"
          :suffix="args.suffix"
          :size="args.size"
          :width="args.width"
          :borderWidth="args.borderWidth"
          :radius="args.radius"
          :isDisabled="args.isDisabled"
          :className="args.className"
        >
          {{ args.default }}
        </Button>
        <Button
          themeColor="secondary"
          :variant="args.variant"
          :prefix="args.prefix"
          :suffix="args.suffix"
          :size="args.size"
          :width="args.width"
          :borderWidth="args.borderWidth"
          :radius="args.radius"
          :isDisabled="args.isDisabled"
          :className="args.className"
        >
          {{ args.default }}
        </Button>
        <Button
          themeColor="neutral"
          :variant="args.variant"
          :prefix="args.prefix"
          :suffix="args.suffix"
          :size="args.size"
          :width="args.width"
          :borderWidth="args.borderWidth"
          :radius="args.radius"
          :isDisabled="args.isDisabled"
          :className="args.className"
        >
          {{ args.default }}
        </Button>
        <Button
          themeColor="info"
          :variant="args.variant"
          :prefix="args.prefix"
          :suffix="args.suffix"
          :size="args.size"
          :width="args.width"
          :borderWidth="args.borderWidth"
          :radius="args.radius"
          :isDisabled="args.isDisabled"
          :className="args.className"
        >
          {{ args.default }}
        </Button>
        <Button
          themeColor="success"
          :variant="args.variant"
          :prefix="args.prefix"
          :suffix="args.suffix"
          :size="args.size"
          :width="args.width"
          :borderWidth="args.borderWidth"
          :radius="args.radius"
          :isDisabled="args.isDisabled"
          :className="args.className"
        >
          {{ args.default }}
        </Button>
        <Button
          themeColor="warning"
          :variant="args.variant"
          :prefix="args.prefix"
          :suffix="args.suffix"
          :size="args.size"
          :width="args.width"
          :borderWidth="args.borderWidth"
          :radius="args.radius"
          :isDisabled="args.isDisabled"
          :className="args.className"
        >
          {{ args.default }}
        </Button>
        <Button
          themeColor="error"
          :variant="args.variant"
          :prefix="args.prefix"
          :suffix="args.suffix"
          :size="args.size"
          :width="args.width"
          :borderWidth="args.borderWidth"
          :radius="args.radius"
          :isDisabled="args.isDisabled"
          :className="args.className"
        >
          {{ args.default }}
        </Button>
      </div>
    `
  }),
  // 控制 controls 中能控制的參數
  parameters: {
    controls: {
      exclude: ["themeColor"]
    },
    docs: {
      source: {
        transform: (src, storyContext) => {
          const {
            args
          } = storyContext;
          return [`<script setup>`, `import { Button } from "@ded-wds-vue/ui";`, `<\/script>`, "", "<template>", `  <Button`, `    themeColor="primary"`, `    ${args.variant ? `variant="${args.variant}"` : ""}`, `    ${args.prefix ? `prefix="${args.prefix}"` : ""}`, `    ${args.suffix ? `suffix="${args.suffix}"` : ""}`, `    ${args.size ? `size="${args.size}"` : ""}`, `    ${args.width ? `width="${args.width}"` : ""}`, `    ${args.borderWidth ? `borderWidth="${args.borderWidth}"` : ""}`, `    ${args.radius ? `radius="${args.radius}"` : ""}`, `    ${args.isDisabled !== void 0 ? `:isDisabled="${args.isDisabled}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, `  >`, `    ${args.default || ""}`, `  </Button>`, `  <Button`, `    themeColor="secondary"`, `    ${args.variant ? `variant="${args.variant}"` : ""}`, `    ${args.prefix ? `prefix="${args.prefix}"` : ""}`, `    ${args.suffix ? `suffix="${args.suffix}"` : ""}`, `    ${args.size ? `size="${args.size}"` : ""}`, `    ${args.width ? `width="${args.width}"` : ""}`, `    ${args.borderWidth ? `borderWidth="${args.borderWidth}"` : ""}`, `    ${args.radius ? `radius="${args.radius}"` : ""}`, `    ${args.isDisabled !== void 0 ? `:isDisabled="${args.isDisabled}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, `  >`, `    ${args.default || ""}`, `  </Button>`, `  <Button`, `    themeColor="neutral"`, `    ${args.variant ? `variant="${args.variant}"` : ""}`, `    ${args.prefix ? `prefix="${args.prefix}"` : ""}`, `    ${args.suffix ? `suffix="${args.suffix}"` : ""}`, `    ${args.size ? `size="${args.size}"` : ""}`, `    ${args.width ? `width="${args.width}"` : ""}`, `    ${args.borderWidth ? `borderWidth="${args.borderWidth}"` : ""}`, `    ${args.radius ? `radius="${args.radius}"` : ""}`, `    ${args.isDisabled !== void 0 ? `:isDisabled="${args.isDisabled}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, `  >`, `    ${args.default || ""}`, `  </Button>`, `  <Button`, `    themeColor="info"`, `    ${args.variant ? `variant="${args.variant}"` : ""}`, `    ${args.prefix ? `prefix="${args.prefix}"` : ""}`, `    ${args.suffix ? `suffix="${args.suffix}"` : ""}`, `    ${args.size ? `size="${args.size}"` : ""}`, `    ${args.width ? `width="${args.width}"` : ""}`, `    ${args.borderWidth ? `borderWidth="${args.borderWidth}"` : ""}`, `    ${args.radius ? `radius="${args.radius}"` : ""}`, `    ${args.isDisabled !== void 0 ? `:isDisabled="${args.isDisabled}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, `  >`, `    ${args.default || ""}`, `  </Button>`, `  <Button`, `    themeColor="success"`, `    ${args.variant ? `variant="${args.variant}"` : ""}`, `    ${args.prefix ? `prefix="${args.prefix}"` : ""}`, `    ${args.suffix ? `suffix="${args.suffix}"` : ""}`, `    ${args.size ? `size="${args.size}"` : ""}`, `    ${args.width ? `width="${args.width}"` : ""}`, `    ${args.borderWidth ? `borderWidth="${args.borderWidth}"` : ""}`, `    ${args.radius ? `radius="${args.radius}"` : ""}`, `    ${args.isDisabled !== void 0 ? `:isDisabled="${args.isDisabled}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, `  >`, `    ${args.default || ""}`, `  </Button>`, `  <Button`, `    themeColor="warning"`, `    ${args.variant ? `variant="${args.variant}"` : ""}`, `    ${args.prefix ? `prefix="${args.prefix}"` : ""}`, `    ${args.suffix ? `suffix="${args.suffix}"` : ""}`, `    ${args.size ? `size="${args.size}"` : ""}`, `    ${args.width ? `width="${args.width}"` : ""}`, `    ${args.borderWidth ? `borderWidth="${args.borderWidth}"` : ""}`, `    ${args.radius ? `radius="${args.radius}"` : ""}`, `    ${args.isDisabled !== void 0 ? `:isDisabled="${args.isDisabled}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, `  >`, `    ${args.default || ""}`, `  </Button>`, `  <Button`, `    themeColor="error"`, `    ${args.variant ? `variant="${args.variant}"` : ""}`, `    ${args.prefix ? `prefix="${args.prefix}"` : ""}`, `    ${args.suffix ? `suffix="${args.suffix}"` : ""}`, `    ${args.size ? `size="${args.size}"` : ""}`, `    ${args.width ? `width="${args.width}"` : ""}`, `    ${args.borderWidth ? `borderWidth="${args.borderWidth}"` : ""}`, `    ${args.radius ? `radius="${args.radius}"` : ""}`, `    ${args.isDisabled !== void 0 ? `:isDisabled="${args.isDisabled}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, `  >`, `    ${args.default || ""}`, `  </Button>`, "</template>"].filter(Boolean).join("\n").trim();
        }
      }
    }
  }
};
DefaultButtonStory.parameters = {
  ...DefaultButtonStory.parameters,
  docs: {
    ...(_a = DefaultButtonStory.parameters) == null ? void 0 : _a.docs,
    source: {
      originalSource: '{\n  name: "預設項目",\n  args: {\n    themeColor: "primary",\n    variant: "filled",\n    prefix: "",\n    suffix: "",\n    size: "medium",\n    width: "fit",\n    borderWidth: "1px",\n    radius: "4px",\n    isDisabled: false,\n    className: "",\n    default: "Button"\n  },\n  render: args => ({\n    components: {\n      Button\n    },\n    setup() {\n      return {\n        args\n      };\n    },\n    template: `\n      <Button\n        :themeColor="args.themeColor"\n        :variant="args.variant"\n        :prefix="args.prefix"\n        :suffix="args.suffix"\n        :size="args.size"\n        :width="args.width"\n        :borderWidth="args.borderWidth"\n        :radius="args.radius"\n        :isDisabled="args.isDisabled"\n        :className="args.className"\n      >\n        {{ args.default }}\n      </Button>\n    `\n  }),\n  // 控制 controls 中能控制的參數\n  parameters: {\n    controls: {\n      // include: [\'variant\', \'content\', \'themeColor\', \'isDisabled\', \'prefix\'],\n    },\n    docs: {\n      source: {\n        transform: (src, storyContext) => {\n          const {\n            args\n          } = storyContext;\n          return [`<script setup>`, `import { Button } from "@ded-wds-vue/ui";`, `<\/script>`, "", "<template>", `  <Button`, `    ${args.themeColor ? `themeColor="${args.themeColor}"` : ""}`, `    ${args.variant ? `variant="${args.variant}"` : ""}`, `    ${args.prefix ? `prefix="${args.prefix}"` : ""}`, `    ${args.suffix ? `suffix="${args.suffix}"` : ""}`, `    ${args.size ? `size="${args.size}"` : ""}`, `    ${args.width ? `width="${args.width}"` : ""}`, `    ${args.borderWidth ? `borderWidth="${args.borderWidth}"` : ""}`, `    ${args.radius ? `radius="${args.radius}"` : ""}`, `    ${args.isDisabled !== undefined ? `:isDisabled="${args.isDisabled}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, `  >`, `    ${args.default || ""}`, `  </Button>`, "</template>"].filter(Boolean).join("\\n").trim();\n        }\n      }\n    }\n  }\n}',
      ...(_c = (_b = DefaultButtonStory.parameters) == null ? void 0 : _b.docs) == null ? void 0 : _c.source
    }
  }
};
ButtonPrefixSuffixStory.parameters = {
  ...ButtonPrefixSuffixStory.parameters,
  docs: {
    ...(_d = ButtonPrefixSuffixStory.parameters) == null ? void 0 : _d.docs,
    source: {
      originalSource: '{\n  name: "附加元素",\n  args: {\n    themeColor: "primary",\n    variant: "ghost",\n    prefix: "",\n    suffix: "",\n    size: "medium",\n    width: "fit",\n    borderWidth: "1px",\n    radius: "4px",\n    isDisabled: false,\n    className: "",\n    default: "Button"\n  },\n  render: args => ({\n    components: {\n      Button\n    },\n    setup() {\n      return {\n        args\n      };\n    },\n    template: `\n      <div style="display:flex; flex-wrap: wrap; gap: 16px">\n        <Button\n          :themeColor="args.themeColor"\n          :variant="args.variant"\n          prefix="SvgAccount"\n          suffix=""\n          :size="args.size"\n          :width="args.width"\n          :borderWidth="args.borderWidth"\n          :radius="args.radius"\n          :isDisabled="args.isDisabled"\n          :className="args.className"\n        >\n          {{ args.default }}\n        </Button>\n        <Button\n          :themeColor="args.themeColor"\n          :variant="args.variant"\n          prefix=""\n          suffix="SvgSearch"\n          :size="args.size"\n          :width="args.width"\n          :borderWidth="args.borderWidth"\n          :radius="args.radius"\n          :isDisabled="args.isDisabled"\n          :className="args.className"\n        >\n          {{ args.default }}\n        </Button>\n      </div>\n    `\n  }),\n  // 控制 controls 中能控制的參數\n  parameters: {\n    controls: {\n      exclude: ["prefix", "suffix"]\n    },\n    docs: {\n      source: {\n        transform: (src, storyContext) => {\n          const {\n            args\n          } = storyContext;\n          return [`<script setup>`, `import { Button } from "@ded-wds-vue/ui";`, `<\/script>`, "", "<template>", `  <Button`, `    ${args.themeColor ? `themeColor="${args.themeColor}"` : ""}`, `    ${args.variant ? `variant="${args.variant}"` : ""}`, `    prefix="SvgAccount"`, `    ${args.suffix ? `suffix="${args.suffix}"` : ""}`, `    ${args.size ? `size="${args.size}"` : ""}`, `    ${args.width ? `width="${args.width}"` : ""}`, `    ${args.borderWidth ? `borderWidth="${args.borderWidth}"` : ""}`, `    ${args.radius ? `radius="${args.radius}"` : ""}`, `    ${args.isDisabled !== undefined ? `:isDisabled="${args.isDisabled}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, `  >`, `    ${args.default || ""}`, `  </Button>`, `  <Button`, `    ${args.themeColor ? `themeColor="${args.themeColor}"` : ""}`, `    ${args.variant ? `variant="${args.variant}"` : ""}`, `    ${args.prefix ? `prefix="${args.prefix}"` : ""}`, `    suffix="SvgSearch"`, `    ${args.size ? `size="${args.size}"` : ""}`, `    ${args.width ? `width="${args.width}"` : ""}`, `    ${args.borderWidth ? `borderWidth="${args.borderWidth}"` : ""}`, `    ${args.radius ? `radius="${args.radius}"` : ""}`, `    ${args.isDisabled !== undefined ? `:isDisabled="${args.isDisabled}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, `  >`, `    ${args.default || ""}`, `  </Button>`, "</template>"].filter(Boolean).join("\\n").trim();\n        }\n      }\n    }\n  }\n}',
      ...(_f = (_e = ButtonPrefixSuffixStory.parameters) == null ? void 0 : _e.docs) == null ? void 0 : _f.source
    }
  }
};
ButtonTypeStory.parameters = {
  ...ButtonTypeStory.parameters,
  docs: {
    ...(_g = ButtonTypeStory.parameters) == null ? void 0 : _g.docs,
    source: {
      originalSource: '{\n  name: "外觀樣式",\n  args: {\n    themeColor: "primary",\n    variant: "filled",\n    prefix: "",\n    suffix: "",\n    size: "medium",\n    width: "fit",\n    borderWidth: "1px",\n    radius: "4px",\n    isDisabled: false,\n    className: "",\n    default: "Button"\n  },\n  render: args => ({\n    components: {\n      Button\n    },\n    setup() {\n      return {\n        args\n      };\n    },\n    template: `\n    <div style="display:flex; flex-wrap: wrap; gap: 16px">\n      <Button\n        :themeColor="args.themeColor"\n        variant="filled"\n        :prefix="args.prefix"\n        :suffix="args.suffix"\n        :size="args.size"\n        :width="args.width"\n        :borderWidth="args.borderWidth"\n        :radius="args.radius"\n        :isDisabled="args.isDisabled"\n        :className="args.className"\n      >\n        {{ args.default }}\n      </Button>\n      <Button\n        :themeColor="args.themeColor"\n        variant="ghost"\n        :prefix="args.prefix"\n        :suffix="args.suffix"\n        :size="args.size"\n        :width="args.width"\n        :borderWidth="args.borderWidth"\n        :radius="args.radius"\n        :isDisabled="args.isDisabled"\n        :className="args.className"\n      >\n        {{ args.default }}\n      </Button>\n      <Button\n        :themeColor="args.themeColor"\n        variant="text"\n        :prefix="args.prefix"\n        :suffix="args.suffix"\n        :size="args.size"\n        :width="args.width"\n        :borderWidth="args.borderWidth"\n        :radius="args.radius"\n        :isDisabled="args.isDisabled"\n        :className="args.className"\n      >\n        {{ args.default }}\n      </Button>\n      <Button\n        :themeColor="args.themeColor"\n        variant="soft"\n        :prefix="args.prefix"\n        :suffix="args.suffix"\n        :size="args.size"\n        :width="args.width"\n        :borderWidth="args.borderWidth"\n        :radius="args.radius"\n        :isDisabled="args.isDisabled"\n        :className="args.className"\n      >\n        {{ args.default }}\n      </Button>\n    </div>\n    `\n  }),\n  // 控制 controls 中能控制的參數\n  parameters: {\n    controls: {\n      exclude: ["variant"]\n    },\n    docs: {\n      source: {\n        transform: (src, storyContext) => {\n          const {\n            args\n          } = storyContext;\n          return [`<script setup>`, `import { Button } from "@ded-wds-vue/ui";`, `<\/script>`, "", "<template>", `  <Button`, `    ${args.themeColor ? `themeColor="${args.themeColor}"` : ""}`, `    variant="filled"`, `    ${args.prefix ? `prefix="${args.prefix}"` : ""}`, `    ${args.suffix ? `suffix="${args.suffix}"` : ""}`, `    ${args.size ? `size="${args.size}"` : ""}`, `    ${args.width ? `width="${args.width}"` : ""}`, `    ${args.borderWidth ? `borderWidth="${args.borderWidth}"` : ""}`, `    ${args.radius ? `radius="${args.radius}"` : ""}`, `    ${args.isDisabled !== undefined ? `:isDisabled="${args.isDisabled}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, `  >`, `    ${args.default || ""}`, `  </Button>`, `  <Button`, `    ${args.themeColor ? `themeColor="${args.themeColor}"` : ""}`, `    variant="ghost"`, `    ${args.prefix ? `prefix="${args.prefix}"` : ""}`, `    ${args.suffix ? `suffix="${args.suffix}"` : ""}`, `    ${args.size ? `size="${args.size}"` : ""}`, `    ${args.width ? `width="${args.width}"` : ""}`, `    ${args.borderWidth ? `borderWidth="${args.borderWidth}"` : ""}`, `    ${args.radius ? `radius="${args.radius}"` : ""}`, `    ${args.isDisabled !== undefined ? `:isDisabled="${args.isDisabled}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, `  >`, `    ${args.default || ""}`, `  </Button>`, `  <Button`, `    ${args.themeColor ? `themeColor="${args.themeColor}"` : ""}`, `    variant="text"`, `    ${args.prefix ? `prefix="${args.prefix}"` : ""}`, `    ${args.suffix ? `suffix="${args.suffix}"` : ""}`, `    ${args.size ? `size="${args.size}"` : ""}`, `    ${args.width ? `width="${args.width}"` : ""}`, `    ${args.borderWidth ? `borderWidth="${args.borderWidth}"` : ""}`, `    ${args.radius ? `radius="${args.radius}"` : ""}`, `    ${args.isDisabled !== undefined ? `:isDisabled="${args.isDisabled}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, `  >`, `    ${args.default || ""}`, `  </Button>`, `  <Button`, `    ${args.themeColor ? `themeColor="${args.themeColor}"` : ""}`, `    variant="soft"`, `    ${args.prefix ? `prefix="${args.prefix}"` : ""}`, `    ${args.suffix ? `suffix="${args.suffix}"` : ""}`, `    ${args.size ? `size="${args.size}"` : ""}`, `    ${args.width ? `width="${args.width}"` : ""}`, `    ${args.borderWidth ? `borderWidth="${args.borderWidth}"` : ""}`, `    ${args.radius ? `radius="${args.radius}"` : ""}`, `    ${args.isDisabled !== undefined ? `:isDisabled="${args.isDisabled}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, `  >`, `    ${args.default || ""}`, `  </Button>`, "</template>"].filter(Boolean).join("\\n").trim();\n        }\n      }\n    }\n  }\n}',
      ...(_i = (_h = ButtonTypeStory.parameters) == null ? void 0 : _h.docs) == null ? void 0 : _i.source
    }
  }
};
ButtonColorStory.parameters = {
  ...ButtonColorStory.parameters,
  docs: {
    ...(_j = ButtonColorStory.parameters) == null ? void 0 : _j.docs,
    source: {
      originalSource: '{\n  name: "主題色彩",\n  args: {\n    variant: "filled",\n    prefix: "SvgAccount",\n    suffix: "",\n    size: "medium",\n    width: "fit",\n    borderWidth: "1px",\n    radius: "4px",\n    isDisabled: false,\n    className: "",\n    default: "Button"\n  },\n  render: args => ({\n    components: {\n      Button\n    },\n    setup() {\n      return {\n        args\n      };\n    },\n    template: `\n      <div style="display:flex; flex-wrap: wrap; gap: 16px">\n        <Button\n          themeColor="primary"\n          :variant="args.variant"\n          :prefix="args.prefix"\n          :suffix="args.suffix"\n          :size="args.size"\n          :width="args.width"\n          :borderWidth="args.borderWidth"\n          :radius="args.radius"\n          :isDisabled="args.isDisabled"\n          :className="args.className"\n        >\n          {{ args.default }}\n        </Button>\n        <Button\n          themeColor="secondary"\n          :variant="args.variant"\n          :prefix="args.prefix"\n          :suffix="args.suffix"\n          :size="args.size"\n          :width="args.width"\n          :borderWidth="args.borderWidth"\n          :radius="args.radius"\n          :isDisabled="args.isDisabled"\n          :className="args.className"\n        >\n          {{ args.default }}\n        </Button>\n        <Button\n          themeColor="neutral"\n          :variant="args.variant"\n          :prefix="args.prefix"\n          :suffix="args.suffix"\n          :size="args.size"\n          :width="args.width"\n          :borderWidth="args.borderWidth"\n          :radius="args.radius"\n          :isDisabled="args.isDisabled"\n          :className="args.className"\n        >\n          {{ args.default }}\n        </Button>\n        <Button\n          themeColor="info"\n          :variant="args.variant"\n          :prefix="args.prefix"\n          :suffix="args.suffix"\n          :size="args.size"\n          :width="args.width"\n          :borderWidth="args.borderWidth"\n          :radius="args.radius"\n          :isDisabled="args.isDisabled"\n          :className="args.className"\n        >\n          {{ args.default }}\n        </Button>\n        <Button\n          themeColor="success"\n          :variant="args.variant"\n          :prefix="args.prefix"\n          :suffix="args.suffix"\n          :size="args.size"\n          :width="args.width"\n          :borderWidth="args.borderWidth"\n          :radius="args.radius"\n          :isDisabled="args.isDisabled"\n          :className="args.className"\n        >\n          {{ args.default }}\n        </Button>\n        <Button\n          themeColor="warning"\n          :variant="args.variant"\n          :prefix="args.prefix"\n          :suffix="args.suffix"\n          :size="args.size"\n          :width="args.width"\n          :borderWidth="args.borderWidth"\n          :radius="args.radius"\n          :isDisabled="args.isDisabled"\n          :className="args.className"\n        >\n          {{ args.default }}\n        </Button>\n        <Button\n          themeColor="error"\n          :variant="args.variant"\n          :prefix="args.prefix"\n          :suffix="args.suffix"\n          :size="args.size"\n          :width="args.width"\n          :borderWidth="args.borderWidth"\n          :radius="args.radius"\n          :isDisabled="args.isDisabled"\n          :className="args.className"\n        >\n          {{ args.default }}\n        </Button>\n      </div>\n    `\n  }),\n  // 控制 controls 中能控制的參數\n  parameters: {\n    controls: {\n      exclude: ["themeColor"]\n    },\n    docs: {\n      source: {\n        transform: (src, storyContext) => {\n          const {\n            args\n          } = storyContext;\n          return [`<script setup>`, `import { Button } from "@ded-wds-vue/ui";`, `<\/script>`, "", "<template>", `  <Button`, `    themeColor="primary"`, `    ${args.variant ? `variant="${args.variant}"` : ""}`, `    ${args.prefix ? `prefix="${args.prefix}"` : ""}`, `    ${args.suffix ? `suffix="${args.suffix}"` : ""}`, `    ${args.size ? `size="${args.size}"` : ""}`, `    ${args.width ? `width="${args.width}"` : ""}`, `    ${args.borderWidth ? `borderWidth="${args.borderWidth}"` : ""}`, `    ${args.radius ? `radius="${args.radius}"` : ""}`, `    ${args.isDisabled !== undefined ? `:isDisabled="${args.isDisabled}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, `  >`, `    ${args.default || ""}`, `  </Button>`, `  <Button`, `    themeColor="secondary"`, `    ${args.variant ? `variant="${args.variant}"` : ""}`, `    ${args.prefix ? `prefix="${args.prefix}"` : ""}`, `    ${args.suffix ? `suffix="${args.suffix}"` : ""}`, `    ${args.size ? `size="${args.size}"` : ""}`, `    ${args.width ? `width="${args.width}"` : ""}`, `    ${args.borderWidth ? `borderWidth="${args.borderWidth}"` : ""}`, `    ${args.radius ? `radius="${args.radius}"` : ""}`, `    ${args.isDisabled !== undefined ? `:isDisabled="${args.isDisabled}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, `  >`, `    ${args.default || ""}`, `  </Button>`, `  <Button`, `    themeColor="neutral"`, `    ${args.variant ? `variant="${args.variant}"` : ""}`, `    ${args.prefix ? `prefix="${args.prefix}"` : ""}`, `    ${args.suffix ? `suffix="${args.suffix}"` : ""}`, `    ${args.size ? `size="${args.size}"` : ""}`, `    ${args.width ? `width="${args.width}"` : ""}`, `    ${args.borderWidth ? `borderWidth="${args.borderWidth}"` : ""}`, `    ${args.radius ? `radius="${args.radius}"` : ""}`, `    ${args.isDisabled !== undefined ? `:isDisabled="${args.isDisabled}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, `  >`, `    ${args.default || ""}`, `  </Button>`, `  <Button`, `    themeColor="info"`, `    ${args.variant ? `variant="${args.variant}"` : ""}`, `    ${args.prefix ? `prefix="${args.prefix}"` : ""}`, `    ${args.suffix ? `suffix="${args.suffix}"` : ""}`, `    ${args.size ? `size="${args.size}"` : ""}`, `    ${args.width ? `width="${args.width}"` : ""}`, `    ${args.borderWidth ? `borderWidth="${args.borderWidth}"` : ""}`, `    ${args.radius ? `radius="${args.radius}"` : ""}`, `    ${args.isDisabled !== undefined ? `:isDisabled="${args.isDisabled}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, `  >`, `    ${args.default || ""}`, `  </Button>`, `  <Button`, `    themeColor="success"`, `    ${args.variant ? `variant="${args.variant}"` : ""}`, `    ${args.prefix ? `prefix="${args.prefix}"` : ""}`, `    ${args.suffix ? `suffix="${args.suffix}"` : ""}`, `    ${args.size ? `size="${args.size}"` : ""}`, `    ${args.width ? `width="${args.width}"` : ""}`, `    ${args.borderWidth ? `borderWidth="${args.borderWidth}"` : ""}`, `    ${args.radius ? `radius="${args.radius}"` : ""}`, `    ${args.isDisabled !== undefined ? `:isDisabled="${args.isDisabled}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, `  >`, `    ${args.default || ""}`, `  </Button>`, `  <Button`, `    themeColor="warning"`, `    ${args.variant ? `variant="${args.variant}"` : ""}`, `    ${args.prefix ? `prefix="${args.prefix}"` : ""}`, `    ${args.suffix ? `suffix="${args.suffix}"` : ""}`, `    ${args.size ? `size="${args.size}"` : ""}`, `    ${args.width ? `width="${args.width}"` : ""}`, `    ${args.borderWidth ? `borderWidth="${args.borderWidth}"` : ""}`, `    ${args.radius ? `radius="${args.radius}"` : ""}`, `    ${args.isDisabled !== undefined ? `:isDisabled="${args.isDisabled}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, `  >`, `    ${args.default || ""}`, `  </Button>`, `  <Button`, `    themeColor="error"`, `    ${args.variant ? `variant="${args.variant}"` : ""}`, `    ${args.prefix ? `prefix="${args.prefix}"` : ""}`, `    ${args.suffix ? `suffix="${args.suffix}"` : ""}`, `    ${args.size ? `size="${args.size}"` : ""}`, `    ${args.width ? `width="${args.width}"` : ""}`, `    ${args.borderWidth ? `borderWidth="${args.borderWidth}"` : ""}`, `    ${args.radius ? `radius="${args.radius}"` : ""}`, `    ${args.isDisabled !== undefined ? `:isDisabled="${args.isDisabled}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, `  >`, `    ${args.default || ""}`, `  </Button>`, "</template>"].filter(Boolean).join("\\n").trim();\n        }\n      }\n    }\n  }\n}',
      ...(_l = (_k = ButtonColorStory.parameters) == null ? void 0 : _k.docs) == null ? void 0 : _l.source
    }
  }
};
const __namedExportsOrder = ["DefaultButtonStory", "ButtonPrefixSuffixStory", "ButtonTypeStory", "ButtonColorStory"];
export {
  ButtonColorStory,
  ButtonPrefixSuffixStory,
  ButtonTypeStory,
  DefaultButtonStory,
  __namedExportsOrder,
  Button_stories as default
};

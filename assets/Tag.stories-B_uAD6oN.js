var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l;
import { g as computed, c as createElementBlock, j as createBlock, d as createCommentVNode, f as createTextVNode, b as createVNode, t as toDisplayString, n as normalizeClass, o as openBlock, v as ref } from "./vue.esm-bundler-K7CzQrxl.js";
import { _ as _sfc_main$1 } from "./Icon-B6pI5HKs.js";
const _hoisted_1 = ["href"];
const _hoisted_2 = {
  key: 0,
  class: "ded-tag-icon"
};
const _hoisted_3 = {
  key: 1,
  class: "ded-tag-text"
};
const _hoisted_4 = {
  key: 0,
  class: "ded-tag-icon"
};
const _sfc_main = {
  __name: "Tag",
  props: {
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
    variant: {
      type: String,
      validator: (value) => ["filled", "ghost"].includes(value),
      default: "filled"
    },
    label: {
      type: String,
      required: true
    },
    href: {
      type: String,
      default: ""
    },
    prefix: {
      type: String
    },
    closable: {
      type: Boolean,
      default: true
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
  emits: ["onClose"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    function closeTag() {
      if (!props.isDisabled)
        emits("onClose");
    }
    const isValidHref = computed(() => {
      try {
        return !!props.href && new URL(props.href);
      } catch {
        return false;
      }
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(["ded-tag", [
          { [`ded-tag-${props.variant}`]: props.variant },
          { [`ded-tag-${props.variant}-${props.themeColor}`]: props.variant && props.themeColor && !props.isDisabled },
          { [`ded-tag-${props.variant}-disabled`]: props.isDisabled },
          props.className && props.className.split(" ")
        ]])
      }, [
        props.href && isValidHref.value ? (openBlock(), createElementBlock("a", {
          key: 0,
          href: props.href,
          class: "ded-tag-text"
        }, [
          props.prefix ? (openBlock(), createElementBlock("span", _hoisted_2, [
            createVNode(_sfc_main$1, {
              name: props.prefix
            }, null, 8, ["name"])
          ])) : createCommentVNode("", true),
          createTextVNode(" " + toDisplayString(props.label), 1)
        ], 8, _hoisted_1)) : (openBlock(), createElementBlock("div", _hoisted_3, [
          props.prefix ? (openBlock(), createElementBlock("span", _hoisted_4, [
            createVNode(_sfc_main$1, {
              name: props.prefix
            }, null, 8, ["name"])
          ])) : createCommentVNode("", true),
          createTextVNode(" " + toDisplayString(props.label), 1)
        ])),
        props.closable ? (openBlock(), createBlock(_sfc_main$1, {
          key: 2,
          name: "SvgClose",
          class: "ded-tag-close",
          onClick: closeTag
        })) : createCommentVNode("", true)
      ], 2);
    };
  }
};
_sfc_main.__docgenInfo = { "exportName": "default", "displayName": "Tag", "description": "", "tags": {}, "props": [{ "name": "themeColor", "type": { "name": "string" }, "values": ["primary", "secondary", "neutral", "info", "success", "warning", "error"] }, { "name": "variant", "type": { "name": "string" }, "defaultValue": { "func": false, "value": '"filled"' }, "values": ["filled", "ghost"] }, { "name": "label", "type": { "name": "string" }, "required": true }, { "name": "href", "type": { "name": "string" }, "defaultValue": { "func": false, "value": '""' } }, { "name": "prefix", "type": { "name": "string" } }, { "name": "closable", "type": { "name": "boolean" }, "defaultValue": { "func": false, "value": "true" } }, { "name": "isDisabled", "type": { "name": "boolean" }, "defaultValue": { "func": false, "value": "false" } }, { "name": "className", "type": { "name": "string" }, "defaultValue": { "func": false, "value": '""' } }], "events": [{ "name": "onClose" }], "sourceFiles": ["/Users/auouser/Desktop/Work_Space/DED-WDS_VUE/libs/src/ui/element/Tag/Tag.vue"] };
const Tag_stories = {
  title: "Component/Tag",
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
          summary: "primary | secondary | neutral | info | success | warning | error "
        }
      }
    },
    variant: {
      description: "外觀樣式",
      required: true,
      control: {
        type: "select"
      },
      options: ["filled", "ghost"],
      table: {
        type: {
          summary: "filled | ghost "
        }
      }
    },
    label: {
      description: "標籤文字",
      control: {
        type: "text"
      }
    },
    href: {
      description: "超連結",
      control: {
        type: "text"
      }
    },
    prefix: {
      description: "圖示",
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
    closable: {
      description: "摸到時顯示關閉圖示",
      control: {
        type: "boolean"
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
    onClose: {
      description: "關閉事件"
    }
  },
  parameters: {
    // 自動文件
    docs: {
      title: "Tag",
      description: {
        component: "標籤組件的呈現及說明。"
      }
    }
  }
};
const TagDefaultStory = {
  name: "預設項目",
  args: {
    themeColor: "primary",
    variant: "filled",
    label: "Tag",
    href: "",
    prefix: "",
    closable: true,
    isDisabled: false,
    className: ""
  },
  render: (args) => ({
    components: {
      Tag: _sfc_main
    },
    setup() {
      const showTag = ref(true);
      return {
        args,
        showTag
      };
    },
    template: `
      <Tag 
        v-if="showTag"
        :themeColor="args.themeColor"
        :variant="args.variant"
        :label="args.label"
        :href="args.href"
        :prefix="args.prefix"
        :closable="args.closable"
        :isDisabled="args.isDisabled"
        :className="args.className"
        @onClose="() => showTag = false"
      ></Tag>`
  }),
  // 控制 controls 中能控制的參數
  parameters: {
    controls: {
      // include: ['themeColor', 'removable' ],
    },
    docs: {
      source: {
        transform: (src, storyContext) => {
          const {
            args
          } = storyContext;
          return [`<script setup>`, `import { ref } from "vue";`, `import { Tag } from "@ded-wds-vue/ui";`, `const showTag = ref(true);`, `<\/script>`, "", "<template>", "<Tag", `  v-if="showTag"`, `  ${args.themeColor ? `themeColor="${args.themeColor}"` : ""}`, `  ${args.variant ? `variant="${args.variant}"` : ""}`, `  ${args.label ? `label="${args.label}"` : ""}`, `  ${args.href ? `href="${args.href}"` : ""}`, `  ${args.prefix ? `prefix="${args.prefix}"` : ""}`, `  ${args.closable !== void 0 ? `:closable="${args.closable}"` : ""}`, `  ${args.isDisabled !== void 0 ? `:isDisabled="${args.isDisabled}"` : ""}`, `  ${args.className ? `className="${args.className}"` : ""}`, `  @onClose="() => showTag = false">`, "</Tag>", "</template>"].filter(Boolean).join("\n").trim();
        }
      }
    }
  }
};
const TagPrefixStory = {
  name: "附加元素",
  args: {
    themeColor: "primary",
    variant: "filled",
    label: "Tag",
    href: "",
    prefix: "SvgAccount",
    closable: true,
    isDisabled: false,
    className: ""
  },
  render: (args) => ({
    components: {
      Tag: _sfc_main
    },
    setup() {
      const showTag = ref(true);
      return {
        args,
        showTag
      };
    },
    template: `
      <Tag 
        v-if="showTag"
        :themeColor="args.themeColor"
        :variant="args.variant"
        :label="args.label"
        :href="args.href"
        prefix="SvgAccount"
        :closable="args.closable"
        :isDisabled="args.isDisabled"
        :className="args.className"
        @onClose="() => showTag = false"
      ></Tag>
        `
  }),
  // 控制 controls 中能控制的參數
  parameters: {
    controls: {
      // include: ['themeColor', 'removable' ],
      exclude: ["prefix"]
    },
    docs: {
      source: {
        transform: (src, storyContext) => {
          const {
            args
          } = storyContext;
          return [`<script setup>`, `import { ref } from "vue";`, `import { Tag } from "@ded-wds-vue/ui";`, `const showTag = ref(true);`, `<\/script>`, "", "<template>", "<Tag", `  v-if="showTag"`, `  ${args.themeColor ? `themeColor="${args.themeColor}"` : ""}`, `  ${args.variant ? `variant="${args.variant}"` : ""}`, `  ${args.label ? `label="${args.label}"` : ""}`, `  ${args.href ? `href="${args.href}"` : ""}`, `  ${args.prefix ? `prefix="${args.prefix}"` : ""}`, `  ${args.closable !== void 0 ? `:closable="${args.closable}"` : ""}`, `  ${args.isDisabled !== void 0 ? `:isDisabled="${args.isDisabled}"` : ""}`, `  ${args.className ? `className="${args.className}"` : ""}`, `  @onClose="() => showTag = false">`, "</Tag>", "</template>"].filter(Boolean).join("\n").trim();
        }
      }
    }
  }
};
const TagVariantStory = {
  name: "外觀樣式",
  args: {
    themeColor: "primary",
    variant: "",
    label: "Primary",
    href: "",
    prefix: "",
    closable: true,
    isDisabled: false,
    className: ""
  },
  render: (args) => ({
    components: {
      Tag: _sfc_main
    },
    setup() {
      const showTag = ref(true);
      return {
        args,
        showTag
      };
    },
    template: `
      <div style="display: flex; gap: 8px; flex-wrap: wrap">
        <Tag
          v-if="showTag"
          :themeColor="args.themeColor"
          variant="filled"
          :label="args.label"
          :href="args.href"
          :prefix="args.prefix"
          :closable="args.closable"
          :isDisabled="args.isDisabled"
          :className="args.className"
          @onClose="() => showTag = false"
        >
        </Tag>

        <Tag
          v-if="showTag"
          :themeColor="args.themeColor"
          variant="ghost"
          :label="args.label"
          :href="args.href"
          :prefix="args.prefix"
          :closable="args.closable"
          :isDisabled="args.isDisabled"
          :className="args.className"
          @onClose="() => showTag = false"
        >
        </Tag>
      </div>`
  }),
  // 控制 controls 中能控制的參數
  parameters: {
    controls: {
      // include: ['themeColor', 'removable' ],
      exclude: ["variant"]
    },
    docs: {
      source: {
        transform: (src, storyContext) => {
          const {
            args
          } = storyContext;
          return [`<script setup>`, `import { ref } from "vue";`, `import { Tag } from "@ded-wds-vue/ui";`, `const showTag = ref(true);`, `<\/script>`, "", "<template>", "  <Tag", `    v-if="showTag"`, `    ${args.themeColor ? `themeColor="${args.themeColor}"` : ""}`, `    variant="filled"`, `    ${args.label ? `label="${args.label}"` : ""}`, `    ${args.href ? `href="${args.href}"` : ""}`, `    ${args.prefix ? `prefix="${args.prefix}"` : ""}`, `    ${args.closable !== void 0 ? `:closable="${args.closable}"` : ""}`, `    ${args.isDisabled !== void 0 ? `:isDisabled="${args.isDisabled}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, `    @onClose="() => showTag = false">`, "  </Tag>", "  <Tag", `    v-if="showTag"`, `    ${args.themeColor ? `themeColor="${args.themeColor}"` : ""}`, `    variant="ghost"`, `    ${args.label ? `label="${args.label}"` : ""}`, `    ${args.href ? `href="${args.href}"` : ""}`, `    ${args.prefix ? `prefix="${args.prefix}"` : ""}`, `    ${args.closable !== void 0 ? `:closable="${args.closable}"` : ""}`, `    ${args.isDisabled !== void 0 ? `:isDisabled="${args.isDisabled}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, `    @onClose="() => showTag = false">`, "  </Tag>", "</template>"].filter(Boolean).join("\n").trim();
        }
      }
    }
  }
};
const TagMultiple = {
  name: "主題色彩",
  args: {
    // themeColor: 'primary',
    variant: "filled",
    // label:'',
    href: "",
    prefix: "",
    closable: true,
    isDisabled: false,
    className: ""
  },
  render: (args) => ({
    components: {
      Tag: _sfc_main
    },
    setup() {
      const tagsData = ref([{
        id: 1,
        themeColor: "primary",
        label: "Primary"
      }, {
        id: 2,
        themeColor: "secondary",
        label: "Secondary"
      }, {
        id: 3,
        themeColor: "neutral",
        label: "Neutral"
      }, {
        id: 4,
        themeColor: "info",
        label: "Info"
      }, {
        id: 5,
        themeColor: "success",
        label: "Success"
      }, {
        id: 6,
        themeColor: "warning",
        label: "Warning"
      }, {
        id: 7,
        themeColor: "error",
        label: "Error"
      }]);
      const removeTag = (id) => {
        tagsData.value = tagsData.value.filter((tag) => tag.id !== id);
      };
      return {
        args,
        tagsData,
        removeTag
      };
    },
    template: `
      <div style="display:flex; gap: 8px; flex-wrap: wrap">
        <Tag v-for="tag in tagsData"
          :key="tag.id"
          :themeColor="tag.themeColor"
          :variant="args.variant"
          :label="tag.label"
          :href="args.href"
          :prefix="args.prefix"
          :closable="args.closable"
          :isDisabled="args.isDisabled"
          :className="args.className"
          @onClose="removeTag(tag.id)"
        ></Tag>
      </div>
        `
  }),
  // 控制 controls 中能控制的參數
  parameters: {
    controls: {
      // include: ['themeColor', 'removable' ],
      exclude: ["themeColor", "label"]
    },
    docs: {
      source: {
        transform: (src, storyContext) => {
          const {
            args
          } = storyContext;
          return [`<script setup>`, `import { ref } from "vue";`, `import { Tag } from "@ded-wds-vue/ui";`, `const showTag = ref(true);`, `<\/script>`, "", "<template>", "  <Tag", `    v-if="showTag"`, `    themeColor="primary"`, `    ${args.variant ? `variant="${args.variant}"` : ""}`, `    label="Primary"`, `    ${args.prefix ? `prefix="${args.prefix}"` : ""}`, `    ${args.closable !== void 0 ? `:closable="${args.closable}"` : ""}`, `    ${args.isDisabled !== void 0 ? `:isDisabled="${args.isDisabled}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, `    @onClose="() => showTag = false">`, "  </Tag>", "  <Tag", `    v-if="showTag"`, `    themeColor="secondary"`, `    ${args.variant ? `variant="${args.variant}"` : ""}`, `    label="Secondary"`, `    ${args.href ? `href="${args.href}"` : ""}`, `    ${args.prefix ? `prefix="${args.prefix}"` : ""}`, `    ${args.closable !== void 0 ? `:closable="${args.closable}"` : ""}`, `    ${args.isDisabled !== void 0 ? `:isDisabled="${args.isDisabled}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, `    @onClose="() => showTag = false">`, "  </Tag>", "  <Tag", `    v-if="showTag"`, `    themeColor="neutral"`, `    ${args.variant ? `variant="${args.variant}"` : ""}`, `    label="Neutral"`, `    ${args.href ? `href="${args.href}"` : ""}`, `    ${args.prefix ? `prefix="${args.prefix}"` : ""}`, `    ${args.closable !== void 0 ? `:closable="${args.closable}"` : ""}`, `    ${args.isDisabled !== void 0 ? `:isDisabled="${args.isDisabled}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, `    @onClose="() => showTag = false">`, "  </Tag>", "  <Tag", `    v-if="showTag"`, `    themeColor="info"`, `    ${args.variant ? `variant="${args.variant}"` : ""}`, `    label="Info"`, `    ${args.href ? `href="${args.href}"` : ""}`, `    ${args.prefix ? `prefix="${args.prefix}"` : ""}`, `    ${args.closable !== void 0 ? `:closable="${args.closable}"` : ""}`, `    ${args.isDisabled !== void 0 ? `:isDisabled="${args.isDisabled}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, `    @onClose="() => showTag = false">`, "  </Tag>", "  <Tag", `    v-if="showTag"`, `    themeColor="success"`, `    ${args.variant ? `variant="${args.variant}"` : ""}`, `    label="Success"`, `    ${args.href ? `href="${args.href}"` : ""}`, `    ${args.prefix ? `prefix="${args.prefix}"` : ""}`, `    ${args.closable !== void 0 ? `:closable="${args.closable}"` : ""}`, `    ${args.isDisabled !== void 0 ? `:isDisabled="${args.isDisabled}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, `    @onClose="() => showTag = false">`, "  </Tag>", "  <Tag", `    v-if="showTag"`, `    themeColor="warning"`, `    ${args.variant ? `variant="${args.variant}"` : ""}`, `    label="Warning"`, `    ${args.href ? `href="${args.href}"` : ""}`, `    ${args.prefix ? `prefix="${args.prefix}"` : ""}`, `    ${args.closable !== void 0 ? `:closable="${args.closable}"` : ""}`, `    ${args.isDisabled !== void 0 ? `:isDisabled="${args.isDisabled}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, `    @onClose="() => showTag = false">`, "  </Tag>", "  <Tag", `    v-if="showTag"`, `    themeColor="error"`, `    ${args.variant ? `variant="${args.variant}"` : ""}`, `    label="Error"`, `    ${args.href ? `href="${args.href}"` : ""}`, `    ${args.prefix ? `prefix="${args.prefix}"` : ""}`, `    ${args.closable !== void 0 ? `:closable="${args.closable}"` : ""}`, `    ${args.isDisabled !== void 0 ? `:isDisabled="${args.isDisabled}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, `    @onClose="() => showTag = false">`, "  </Tag>", "</template>"].filter(Boolean).join("\n").trim();
        }
      }
    }
  }
};
TagDefaultStory.parameters = {
  ...TagDefaultStory.parameters,
  docs: {
    ...(_a = TagDefaultStory.parameters) == null ? void 0 : _a.docs,
    source: {
      originalSource: '{\n  name: "預設項目",\n  args: {\n    themeColor: "primary",\n    variant: "filled",\n    label: "Tag",\n    href: "",\n    prefix: "",\n    closable: true,\n    isDisabled: false,\n    className: ""\n  },\n  render: args => ({\n    components: {\n      Tag\n    },\n    setup() {\n      const showTag = ref(true); // 控制單一 Tag 是否顯示\n      return {\n        args,\n        showTag\n      };\n    },\n    template: `\n      <Tag \n        v-if="showTag"\n        :themeColor="args.themeColor"\n        :variant="args.variant"\n        :label="args.label"\n        :href="args.href"\n        :prefix="args.prefix"\n        :closable="args.closable"\n        :isDisabled="args.isDisabled"\n        :className="args.className"\n        @onClose="() => showTag = false"\n      ></Tag>`\n  }),\n  // 控制 controls 中能控制的參數\n  parameters: {\n    controls: {\n      // include: [\'themeColor\', \'removable\' ],\n    },\n    docs: {\n      source: {\n        transform: (src, storyContext) => {\n          const {\n            args\n          } = storyContext;\n          return [`<script setup>`, `import { ref } from "vue";`, `import { Tag } from "@ded-wds-vue/ui";`, `const showTag = ref(true);`, `<\/script>`, "", "<template>", "<Tag", `  v-if="showTag"`, `  ${args.themeColor ? `themeColor="${args.themeColor}"` : ""}`, `  ${args.variant ? `variant="${args.variant}"` : ""}`, `  ${args.label ? `label="${args.label}"` : ""}`, `  ${args.href ? `href="${args.href}"` : ""}`, `  ${args.prefix ? `prefix="${args.prefix}"` : ""}`, `  ${args.closable !== undefined ? `:closable="${args.closable}"` : ""}`, `  ${args.isDisabled !== undefined ? `:isDisabled="${args.isDisabled}"` : ""}`, `  ${args.className ? `className="${args.className}"` : ""}`, `  @onClose="() => showTag = false">`, "</Tag>", "</template>"].filter(Boolean).join("\\n").trim();\n        }\n      }\n    }\n  }\n}',
      ...(_c = (_b = TagDefaultStory.parameters) == null ? void 0 : _b.docs) == null ? void 0 : _c.source
    }
  }
};
TagPrefixStory.parameters = {
  ...TagPrefixStory.parameters,
  docs: {
    ...(_d = TagPrefixStory.parameters) == null ? void 0 : _d.docs,
    source: {
      originalSource: '{\n  name: "附加元素",\n  args: {\n    themeColor: "primary",\n    variant: "filled",\n    label: "Tag",\n    href: "",\n    prefix: "SvgAccount",\n    closable: true,\n    isDisabled: false,\n    className: ""\n  },\n  render: args => ({\n    components: {\n      Tag\n    },\n    setup() {\n      const showTag = ref(true); // 控制單一 Tag 是否顯示\n      return {\n        args,\n        showTag\n      };\n    },\n    template: `\n      <Tag \n        v-if="showTag"\n        :themeColor="args.themeColor"\n        :variant="args.variant"\n        :label="args.label"\n        :href="args.href"\n        prefix="SvgAccount"\n        :closable="args.closable"\n        :isDisabled="args.isDisabled"\n        :className="args.className"\n        @onClose="() => showTag = false"\n      ></Tag>\n        `\n  }),\n  // 控制 controls 中能控制的參數\n  parameters: {\n    controls: {\n      // include: [\'themeColor\', \'removable\' ],\n      exclude: ["prefix"]\n    },\n    docs: {\n      source: {\n        transform: (src, storyContext) => {\n          const {\n            args\n          } = storyContext;\n          return [`<script setup>`, `import { ref } from "vue";`, `import { Tag } from "@ded-wds-vue/ui";`, `const showTag = ref(true);`, `<\/script>`, "", "<template>", "<Tag", `  v-if="showTag"`, `  ${args.themeColor ? `themeColor="${args.themeColor}"` : ""}`, `  ${args.variant ? `variant="${args.variant}"` : ""}`, `  ${args.label ? `label="${args.label}"` : ""}`, `  ${args.href ? `href="${args.href}"` : ""}`, `  ${args.prefix ? `prefix="${args.prefix}"` : ""}`, `  ${args.closable !== undefined ? `:closable="${args.closable}"` : ""}`, `  ${args.isDisabled !== undefined ? `:isDisabled="${args.isDisabled}"` : ""}`, `  ${args.className ? `className="${args.className}"` : ""}`, `  @onClose="() => showTag = false">`, "</Tag>", "</template>"].filter(Boolean).join("\\n").trim();\n        }\n      }\n    }\n  }\n}',
      ...(_f = (_e = TagPrefixStory.parameters) == null ? void 0 : _e.docs) == null ? void 0 : _f.source
    }
  }
};
TagVariantStory.parameters = {
  ...TagVariantStory.parameters,
  docs: {
    ...(_g = TagVariantStory.parameters) == null ? void 0 : _g.docs,
    source: {
      originalSource: '{\n  name: "外觀樣式",\n  args: {\n    themeColor: "primary",\n    variant: "",\n    label: "Primary",\n    href: "",\n    prefix: "",\n    closable: true,\n    isDisabled: false,\n    className: ""\n  },\n  render: args => ({\n    components: {\n      Tag\n    },\n    setup() {\n      const showTag = ref(true); // 控制單一 Tag 是否顯示\n      return {\n        args,\n        showTag\n      };\n    },\n    template: `\n      <div style="display: flex; gap: 8px; flex-wrap: wrap">\n        <Tag\n          v-if="showTag"\n          :themeColor="args.themeColor"\n          variant="filled"\n          :label="args.label"\n          :href="args.href"\n          :prefix="args.prefix"\n          :closable="args.closable"\n          :isDisabled="args.isDisabled"\n          :className="args.className"\n          @onClose="() => showTag = false"\n        >\n        </Tag>\n\n        <Tag\n          v-if="showTag"\n          :themeColor="args.themeColor"\n          variant="ghost"\n          :label="args.label"\n          :href="args.href"\n          :prefix="args.prefix"\n          :closable="args.closable"\n          :isDisabled="args.isDisabled"\n          :className="args.className"\n          @onClose="() => showTag = false"\n        >\n        </Tag>\n      </div>`\n  }),\n  // 控制 controls 中能控制的參數\n  parameters: {\n    controls: {\n      // include: [\'themeColor\', \'removable\' ],\n      exclude: ["variant"]\n    },\n    docs: {\n      source: {\n        transform: (src, storyContext) => {\n          const {\n            args\n          } = storyContext;\n          return [`<script setup>`, `import { ref } from "vue";`, `import { Tag } from "@ded-wds-vue/ui";`, `const showTag = ref(true);`, `<\/script>`, "", "<template>", "  <Tag", `    v-if="showTag"`, `    ${args.themeColor ? `themeColor="${args.themeColor}"` : ""}`, `    variant="filled"`, `    ${args.label ? `label="${args.label}"` : ""}`, `    ${args.href ? `href="${args.href}"` : ""}`, `    ${args.prefix ? `prefix="${args.prefix}"` : ""}`, `    ${args.closable !== undefined ? `:closable="${args.closable}"` : ""}`, `    ${args.isDisabled !== undefined ? `:isDisabled="${args.isDisabled}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, `    @onClose="() => showTag = false">`, "  </Tag>", "  <Tag", `    v-if="showTag"`, `    ${args.themeColor ? `themeColor="${args.themeColor}"` : ""}`, `    variant="ghost"`, `    ${args.label ? `label="${args.label}"` : ""}`, `    ${args.href ? `href="${args.href}"` : ""}`, `    ${args.prefix ? `prefix="${args.prefix}"` : ""}`, `    ${args.closable !== undefined ? `:closable="${args.closable}"` : ""}`, `    ${args.isDisabled !== undefined ? `:isDisabled="${args.isDisabled}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, `    @onClose="() => showTag = false">`, "  </Tag>", "</template>"].filter(Boolean).join("\\n").trim();\n        }\n      }\n    }\n  }\n}',
      ...(_i = (_h = TagVariantStory.parameters) == null ? void 0 : _h.docs) == null ? void 0 : _i.source
    }
  }
};
TagMultiple.parameters = {
  ...TagMultiple.parameters,
  docs: {
    ...(_j = TagMultiple.parameters) == null ? void 0 : _j.docs,
    source: {
      originalSource: '{\n  name: "主題色彩",\n  args: {\n    // themeColor: \'primary\',\n    variant: "filled",\n    // label:\'\',\n    href: "",\n    prefix: "",\n    closable: true,\n    isDisabled: false,\n    className: ""\n  },\n  render: args => ({\n    components: {\n      Tag\n    },\n    setup() {\n      const tagsData = ref([{\n        id: 1,\n        themeColor: "primary",\n        label: "Primary"\n      }, {\n        id: 2,\n        themeColor: "secondary",\n        label: "Secondary"\n      }, {\n        id: 3,\n        themeColor: "neutral",\n        label: "Neutral"\n      }, {\n        id: 4,\n        themeColor: "info",\n        label: "Info"\n      }, {\n        id: 5,\n        themeColor: "success",\n        label: "Success"\n      }, {\n        id: 6,\n        themeColor: "warning",\n        label: "Warning"\n      }, {\n        id: 7,\n        themeColor: "error",\n        label: "Error"\n      }]);\n      const removeTag = id => {\n        tagsData.value = tagsData.value.filter(tag => tag.id !== id);\n      };\n      return {\n        args,\n        tagsData,\n        removeTag\n      };\n    },\n    template: `\n      <div style="display:flex; gap: 8px; flex-wrap: wrap">\n        <Tag v-for="tag in tagsData"\n          :key="tag.id"\n          :themeColor="tag.themeColor"\n          :variant="args.variant"\n          :label="tag.label"\n          :href="args.href"\n          :prefix="args.prefix"\n          :closable="args.closable"\n          :isDisabled="args.isDisabled"\n          :className="args.className"\n          @onClose="removeTag(tag.id)"\n        ></Tag>\n      </div>\n        `\n  }),\n  // 控制 controls 中能控制的參數\n  parameters: {\n    controls: {\n      // include: [\'themeColor\', \'removable\' ],\n      exclude: ["themeColor", "label"]\n    },\n    docs: {\n      source: {\n        transform: (src, storyContext) => {\n          const {\n            args\n          } = storyContext;\n          return [`<script setup>`, `import { ref } from "vue";`, `import { Tag } from "@ded-wds-vue/ui";`, `const showTag = ref(true);`, `<\/script>`, "", "<template>", "  <Tag", `    v-if="showTag"`, `    themeColor="primary"`, `    ${args.variant ? `variant="${args.variant}"` : ""}`, `    label="Primary"`, `    ${args.prefix ? `prefix="${args.prefix}"` : ""}`, `    ${args.closable !== undefined ? `:closable="${args.closable}"` : ""}`, `    ${args.isDisabled !== undefined ? `:isDisabled="${args.isDisabled}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, `    @onClose="() => showTag = false">`, "  </Tag>", "  <Tag", `    v-if="showTag"`, `    themeColor="secondary"`, `    ${args.variant ? `variant="${args.variant}"` : ""}`, `    label="Secondary"`, `    ${args.href ? `href="${args.href}"` : ""}`, `    ${args.prefix ? `prefix="${args.prefix}"` : ""}`, `    ${args.closable !== undefined ? `:closable="${args.closable}"` : ""}`, `    ${args.isDisabled !== undefined ? `:isDisabled="${args.isDisabled}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, `    @onClose="() => showTag = false">`, "  </Tag>", "  <Tag", `    v-if="showTag"`, `    themeColor="neutral"`, `    ${args.variant ? `variant="${args.variant}"` : ""}`, `    label="Neutral"`, `    ${args.href ? `href="${args.href}"` : ""}`, `    ${args.prefix ? `prefix="${args.prefix}"` : ""}`, `    ${args.closable !== undefined ? `:closable="${args.closable}"` : ""}`, `    ${args.isDisabled !== undefined ? `:isDisabled="${args.isDisabled}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, `    @onClose="() => showTag = false">`, "  </Tag>", "  <Tag", `    v-if="showTag"`, `    themeColor="info"`, `    ${args.variant ? `variant="${args.variant}"` : ""}`, `    label="Info"`, `    ${args.href ? `href="${args.href}"` : ""}`, `    ${args.prefix ? `prefix="${args.prefix}"` : ""}`, `    ${args.closable !== undefined ? `:closable="${args.closable}"` : ""}`, `    ${args.isDisabled !== undefined ? `:isDisabled="${args.isDisabled}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, `    @onClose="() => showTag = false">`, "  </Tag>", "  <Tag", `    v-if="showTag"`, `    themeColor="success"`, `    ${args.variant ? `variant="${args.variant}"` : ""}`, `    label="Success"`, `    ${args.href ? `href="${args.href}"` : ""}`, `    ${args.prefix ? `prefix="${args.prefix}"` : ""}`, `    ${args.closable !== undefined ? `:closable="${args.closable}"` : ""}`, `    ${args.isDisabled !== undefined ? `:isDisabled="${args.isDisabled}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, `    @onClose="() => showTag = false">`, "  </Tag>", "  <Tag", `    v-if="showTag"`, `    themeColor="warning"`, `    ${args.variant ? `variant="${args.variant}"` : ""}`, `    label="Warning"`, `    ${args.href ? `href="${args.href}"` : ""}`, `    ${args.prefix ? `prefix="${args.prefix}"` : ""}`, `    ${args.closable !== undefined ? `:closable="${args.closable}"` : ""}`, `    ${args.isDisabled !== undefined ? `:isDisabled="${args.isDisabled}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, `    @onClose="() => showTag = false">`, "  </Tag>", "  <Tag", `    v-if="showTag"`, `    themeColor="error"`, `    ${args.variant ? `variant="${args.variant}"` : ""}`, `    label="Error"`, `    ${args.href ? `href="${args.href}"` : ""}`, `    ${args.prefix ? `prefix="${args.prefix}"` : ""}`, `    ${args.closable !== undefined ? `:closable="${args.closable}"` : ""}`, `    ${args.isDisabled !== undefined ? `:isDisabled="${args.isDisabled}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, `    @onClose="() => showTag = false">`, "  </Tag>", "</template>"].filter(Boolean).join("\\n").trim();\n        }\n      }\n    }\n  }\n}',
      ...(_l = (_k = TagMultiple.parameters) == null ? void 0 : _k.docs) == null ? void 0 : _l.source
    }
  }
};
const __namedExportsOrder = ["TagDefaultStory", "TagPrefixStory", "TagVariantStory", "TagMultiple"];
export {
  TagDefaultStory,
  TagMultiple,
  TagPrefixStory,
  TagVariantStory,
  __namedExportsOrder,
  Tag_stories as default
};

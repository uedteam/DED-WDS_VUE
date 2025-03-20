import Textarea from "@/ui/element/Textarea/Textarea.vue"
import { h } from "vue"
import Icon from "../Icon/Icon.vue"
import StatusIndicator from "../StatusIndicator/StatusIndicator.vue"

function formatDataSource(hint) {
  return `{
        error: '${hint.error || ""}',
        description: '${hint.description || ""}'
    }`
}

export default {
  title: "Component/Textarea",
  component: Textarea,
  tags: ["autodocs"],
  argTypes: {
    label: {
      description: "標題",
      control: { type: "text" },
    },
    placeholder: {
      description: "輸入提示",
      control: { type: "text" },
    },
    limit: {
      description: "字數限制",
      control: { type: "number" },
    },
    hint: {
      description: "提示訊息",
      control: {
        type: "object",
      },
      table: {
        type: {
          summary: "{ error: string | VNode; description: string | VNode; }",
        },
      },
    },
    isDisabled: {
      description: "是否禁用",
      control: { type: "boolean" },
    },
    className: {
      description: "客製化樣式",
      control: { type: "text" },
    },
    modelValue: {
      description: "輸入值",
      control: { type: "text" },
      table: {
        type: { summary: "string" },
        category: "v-model",
        // defaultValue: { summary: '""' },
      },
    },
  },
  parameters: {
    // 自動文件
    docs: {
      title: "Textarea",
      description: {
        component: "Textarea 組件的呈現及說明。",
      },
    },
  },
}

// ==== 預設項目 ====//
export const TextareaDefault = {
  name: "預設項目",
  args: {
    label: "Label",
    placeholder: "Placeholder",
    limit: 0,
    hint: {
      error: "",
      description: "",
    },
    isDisabled: false,
    className: "",
    modelValue: "Type something",
  },
  render: args => ({
    components: { Textarea },
    setup() {
      return {
        args,
      }
    },
    template: `
      <Textarea
        :label="args.label"
        :placeholder="args.placeholder"
        :limit="args.limit"
        :hint="args.hint"
        :isDisabled="args.isDisabled"
        :className="args.className"
        v-model="args.modelValue"
      ></Textarea>`,
  }),
  // 控制 controls 中能控制的參數
  parameters: {
    controls: {
      // include: ['themeColor', 'label', 'value', 'name' ],
      // exclude: [],
    },
    docs: {
      source: {
        transform: (src, storyContext) => {
          const { args } = storyContext
          const dataSourceString = formatDataSource(args.hint)
          return [
            `<script setup>`,
            "import { ref, h } from \"vue\";",
            `import { Textarea } from "@ded-wds-vue/ui";`,
            `const modelValue = ref("${args.modelValue}");`,
            `</script>`,
            "",
            "<template>",
            "  <Textarea",
            `    ${args.label ? `label="${args.label}"` : ""}`,
            `    ${args.placeholder ? `placeholder="${args.placeholder}"` : ""}`,
            `    ${args.limit !== undefined ? `:limit="${args.limit}"` : ""}`,
            `    ${dataSourceString ? `:hint="${dataSourceString}"` : ""}`,
            `    ${args.isDisabled !== undefined ? `:isDisabled="${args.isDisabled}"` : ""}`,
            `    ${args.className ? `className="${args.className}"` : ""}`,
            `    v-model="modelValue"`,
            "  ></Textarea>",
            "</template>",
          ].filter(Boolean).join("\n").trim()
        },
      },
    },
  },
}

// ==== 字數限制 ====//
export const TextareaLimit = {
  name: "字數限制",
  args: {
    label: "Label",
    placeholder: "Placeholder",
    limit: 30,
    hint: { error: "", description: "" },
    isDisabled: false,
    className: "",
    modelValue: "Type something",
  },
  render: args => ({
    components: { Textarea },
    setup() {
      return {
        args,
      }
    },
    template: `
      <Textarea
        :label="args.label"
        :placeholder="args.placeholder"
        :limit="args.limit"
        :hint="args.hint"
        :isDisabled="args.isDisabled"
        :className="args.className"
        v-model="args.modelValue"
      ></Textarea>`,
  }),
  // 控制 controls 中能控制的參數
  parameters: {
    controls: {
      // include: ['themeColor', 'label', 'value', 'name' ],
      // exclude: ['limit' ],
    },
    docs: {
      source: {
        transform: (src, storyContext) => {
          const { args } = storyContext
          const dataSourceString = formatDataSource(args.hint)
          return [
            `<script setup>`,
            "import { ref, h } from \"vue\";",
            `import { Textarea } from "@ded-wds-vue/ui";`,
            `const modelValue = ref("${args.modelValue}");`,
            `</script>`,
            "",
            "<template>",
            "  <Textarea",
            `    ${args.label ? `label="${args.label}"` : ""}`,
            `    ${args.placeholder ? `placeholder="${args.placeholder}"` : ""}`,
            `    ${args.limit !== undefined ? `:limit="${args.limit}"` : ""}`,
            `    ${dataSourceString ? `:hint="${dataSourceString}"` : ""}`,
            `    ${args.isDisabled !== undefined ? `:isDisabled="${args.isDisabled}"` : ""}`,
            `    ${args.className ? `className="${args.className}"` : ""}`,
            `    v-model="modelValue"`,
            "  ></Textarea>",
            "</template>",
          ].filter(Boolean).join("\n").trim()
        },
      },
    },
  },
}

// ==== 輸入框狀態 ====//
export const TextareaStatus = {
  name: "輸入框狀態",
  args: {
    label: "Label",
    placeholder: "Placeholder",
    limit: 30,
    hintError: {
      error: () => h("div", { style: "display: flex; align-items: center; gap: 4px;" }, [
        h(Icon, { name: "SvgErrorCircle", style: "color: red;", size: 16 }),
        h("span", "Error message"),
      ]),
      description: () => h(StatusIndicator, { themeColor: "neutral", variant: "text", size: "medium", isShowDot: false }, "Prompt message"),
    },
    hintPrompt: {
      error: "",
      description: () => h(StatusIndicator, { themeColor: "neutral", variant: "text", size: "medium", isShowDot: false }, "Prompt message"),
    },
    hint: {
      error: "",
      description: "",
    },
    isDisabled: false,
    className: "",
    modelValue: "Type something",
  },
  render: args => ({
    components: { Textarea },
    setup() {
      return {
        args,
        StatusIndicator,
        Icon,
      }
    },
    template: `
      <div style="display: flex; flex-direction: column; gap:16px">
        
        <Textarea
            :label="args.label"
            :placeholder="args.placeholder"
            :limit="args.limit"
            :hint="args.hintPrompt"
            :isDisabled="args.isDisabled"
            :className="args.className"
            v-model="args.modelValue"
        ></Textarea>
        
        <Textarea
          :label="args.label"
          :placeholder="args.placeholder"
          :limit="args.limit"
          :hint="args.hintError"
          :isDisabled="args.isDisabled"
          :className="args.className"
          v-model="args.modelValue"
        ></Textarea>

        <Textarea
          :label="args.label"
          :placeholder="args.placeholder"
          :limit="args.limit"
          :hint="args.hint"
          :isDisabled="true"
          :className="args.className"
          v-model="args.modelValue"
        ></Textarea>
      </div>`,
  }),
  // 控制 controls 中能控制的參數
  parameters: {
    controls: {
      exclude: ["hint", "isDisabled"],
    },
    docs: {
      source: {
        transform: (src, storyContext) => {
          const { args } = storyContext
          return [
            `<script setup>`,
            "import { ref, h } from \"vue\";",
            `import { Textarea, Icon, StatusIndicator } from "@ded-wds-vue/ui";`,
            `const modelValue = ref("${args.modelValue}");`,
            `</script>`,
            "",
            "<template>",
            "  <Textarea",
            `    ${args.label ? `label="${args.label}"` : ""}`,
            `    ${args.placeholder ? `placeholder="${args.placeholder}"` : ""}`,
            `    ${args.limit !== undefined ? `:limit="${args.limit}"` : ""}`,
            `    :hint="{
        error: () => h('div', { style: 'display: flex; align-items: center; gap: 4px;' }, [
          h(Icon, { name: 'SvgErrorCircle', style: 'color: red;', size: 16 }),
          h('span', 'Error message')
        ]),
        description: ''
    }"`,
            `    ${args.isDisabled !== undefined ? `:isDisabled="${args.isDisabled}"` : ""}`,
            `    ${args.className ? `className="${args.className}"` : ""}`,
            `    v-model="modelValue"`,
            "  ></Textarea>",
            "  <Textarea",
            `    ${args.label ? `label="${args.label}"` : ""}`,
            `    ${args.placeholder ? `placeholder="${args.placeholder}"` : ""}`,
            `    ${args.limit !== undefined ? `:limit="${args.limit}"` : ""}`,
            `    :hint="{
        error: '',
        description: () => h( StatusIndicator, {
          themeColor: 'neutral',
          variant: 'text',
          size: 'medium',
          isShowDot: false
        }, 'Prompt message')
    }"`,
            `    ${args.isDisabled !== undefined ? `:isDisabled="${args.isDisabled}"` : ""}`,
            `    ${args.className ? `className="${args.className}"` : ""}`,
            `    v-model="modelValue"`,
            "  ></Textarea>",
            "  <Textarea",
            `    ${args.label ? `label="${args.label}"` : ""}`,
            `    ${args.placeholder ? `placeholder="${args.placeholder}"` : ""}`,
            `    ${args.limit !== undefined ? `:limit="${args.limit}"` : ""}`,
            `    :hint="{ error: '', description: '' }"`,
            `    :isDisabled="true"`,
            `    ${args.className ? `className="${args.className}"` : ""}`,
            `    v-model="modelValue"`,
            "  ></Textarea>",
            "</template>",
          ].filter(Boolean).join("\n").trim()
        },
      },
    },
  },
}

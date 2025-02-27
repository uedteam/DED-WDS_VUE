import{_ as l}from"./Input-CDH1IOlF.js";import"./vue.esm-bundler-Suj5BAdg.js";import"./Icon-BUi6kykL.js";function D(a){return`{
        error: '${a.error||""}',
        description: '${a.description||""}'
    }`}const z={title:"Component/Input",component:l,tags:["autodocs"],argTypes:{label:{description:"標題",control:{type:"text"}},type:{description:"輸入類型",control:{type:"select"},options:["number","text","password","email"],table:{type:{summary:"number | text | password | email "}}},hasClear:{description:"是否顯示清除按鈕",control:{type:"boolean"}},placeholder:{description:"輸入提示",control:{type:"text"}},prefix:{description:"前置元素",control:{type:"select",labels:{"":"none",SvgAccount:"SvgAccount",SvgSearch:"SvgSearch",SvgVisibility:"SvgVisibility",SvgVisibilityOff:"SvgVisibilityOff",SvgMail:"SvgMail"}},options:["","SvgAccount","SvgSearch","SvgVisibility","SvgVisibilityOff","SvgMail"]},size:{description:"輸入框尺寸",control:{type:"select"},options:["small","medium","large"],table:{type:{summary:"small | medium | large "}}},maxLimit:{description:"最長輸入限制",control:{type:"number"}},hint:{description:"提示訊息",control:{type:"object"},table:{type:{summary:"{ error: string; description: string; }"}}},isDisabled:{description:"是否禁用",control:{type:"boolean"}},isOpen:{description:"下拉控制",control:{type:"boolean"},table:{disable:!0}},className:{description:"客製化樣式",control:{type:"text"}},modelValue:{description:"輸入值",control:{type:"text"},table:{type:{summary:"string"},category:"v-model"}}},parameters:{docs:{title:"Input",description:{component:"輸入框組件的呈現及說明。。"}}}},i={name:"預設項目",args:{label:"Label",type:"text",hasClear:!0,placeholder:"Placeholder",prefix:"SvgAccount",size:"medium",maxLimit:0,hint:{error:"",description:"Prompt message"},isDisabled:!1,className:"",modelValue:""},render:a=>({components:{Input:l},setup(){return{args:a}},template:`
            <Input
                :label="args.label"
                :type="args.type"
                :hasClear="args.hasClear"
                :placeholder="args.placeholder"
                :prefix="args.prefix"
                :size="args.size"
                :maxLimit="args.maxLimit"
                :hint="args.hint"
                :isDisabled="args.isDisabled"
                :className="args.className"
                v-model="args.modelValue"
            />
            `}),parameters:{controls:{exclude:["input","clearDatePicker"]},docs:{source:{transform:(a,r)=>{const{args:e}=r,s=D(e.hint);return["<script setup>",'import { ref } from "vue";','import Input from "@/ui/element/Input/Input.vue";','const modelValue = ref("");',"<\/script>","","<template>","  <Input",`    ${e.label?`label="${e.label}"`:""}`,`    ${e.type?`type="${e.type}"`:""}`,`    ${e.hasClear!==void 0?`:hasClear="${e.hasClear}"`:""}`,`    ${e.placeholder?`placeholder="${e.placeholder}"`:""}`,`    ${e.prefix?`prefix="${e.prefix}"`:""}`,`    ${e.size?`size="${e.size}"`:""}`,`    ${e.maxLimit?`maxLimit="${e.maxLimit}"`:""}`,`    ${s?`:hint="${s}"`:""}`,`    ${e.isDisabled!==void 0?`:isDisabled="${e.isDisabled}"`:""}`,`    ${e.className?`className="${e.className}"`:""}`,'    v-model="modelValue"',"  />","</template>"].filter(Boolean).join(`
`).trim()}}}}},t={name:"輸入類型",args:{hasClear:!0,placeholder:"Placeholder",size:"medium",maxLimit:0,hint:{error:"",description:"Prompt message"},isDisabled:!1,className:"",modelValue:""},render:a=>({components:{Input:l},setup(){return{args:a}},template:`
            <div style="display: flex; flex-direction: column; gap:8px">
                <Input
                    label="Number"
                    type="number"
                    :hasClear="args.hasClear"
                    :placeholder="args.placeholder"
                    prefix="SvgSearch"
                    :size="args.size"
                    :maxLimit="args.maxLimit"
                    :hint="args.hint"
                    :isDisabled="args.isDisabled"
                    :className="args.className"
                    v-model="args.modelValue"
                />
                <Input
                    label="Text"
                    type="text"
                    :hasClear="args.hasClear"
                    :placeholder="args.placeholder"
                    prefix="SvgAccount"
                    :size="args.size"
                    :maxLimit="args.maxLimit"
                    :hint="args.hint"
                    :isDisabled="args.isDisabled"
                    :className="args.className"
                    v-model="args.modelValue"
                />
                <Input
                    label="Password"
                    type="password"
                    :hasClear="args.hasClear"
                    :placeholder="args.placeholder"
                    prefix="SvgLock"
                    :size="args.size"
                    :maxLimit="args.maxLimit"
                    :hint="args.hint"
                    :isDisabled="args.isDisabled"
                    :className="args.className"
                    v-model="args.modelValue"
                />
                <Input
                    label="Email"
                    type="email"
                    :hasClear="args.hasClear"
                    :placeholder="args.placeholder"
                    prefix="SvgMail"
                    :size="args.size"
                    :maxLimit="args.maxLimit"
                    :hint="args.hint"
                    :isDisabled="args.isDisabled"
                    :className="args.className"
                    v-model="args.modelValue"
                />
            </div>
        `}),parameters:{controls:{exclude:["label","type","prefix","input","clearDatePicker"]},docs:{source:{transform:(a,r)=>{const{args:e}=r,s=D(e.hint);return["<script setup>",'import { ref } from "vue";','import Input from "@/ui/element/Input/Input.vue";','const modelValue = ref("");',"<\/script>","","<template>","  <Input",'    label="Number"','    type="number"',`    ${e.hasClear!==void 0?`:hasClear="${e.hasClear}"`:""}`,`    ${e.placeholder?`placeholder="${e.placeholder}"`:""}`,'    prefix="SvgSearch"',`    ${e.size?`size="${e.size}"`:""}`,`    ${e.maxLimit?`maxLimit="${e.maxLimit}"`:""}`,`    ${s?`:hint="${s}"`:""}`,`    ${e.isDisabled!==void 0?`:isDisabled="${e.isDisabled}"`:""}`,`    ${e.className?`className="${e.className}"`:""}`,'    v-model="modelValue"',"  />","  <Input",'    label="Text"','    type="text"',`    ${e.hasClear!==void 0?`:hasClear="${e.hasClear}"`:""}`,`    ${e.placeholder?`placeholder="${e.placeholder}"`:""}`,'    prefix="SvgAccount"',`    ${e.size?`size="${e.size}"`:""}`,`    ${e.maxLimit?`maxLimit="${e.maxLimit}"`:""}`,`    ${s?`:hint="${s}"`:""}`,`    ${e.isDisabled!==void 0?`:isDisabled="${e.isDisabled}"`:""}`,`    ${e.className?`className="${e.className}"`:""}`,'    v-model="modelValue"',"  />","  <Input",'    label="Password"','    type="password"',`    ${e.hasClear!==void 0?`:hasClear="${e.hasClear}"`:""}`,`    ${e.placeholder?`placeholder="${e.placeholder}"`:""}`,'    prefix="SvgLock"',`    ${e.size?`size="${e.size}"`:""}`,`    ${e.maxLimit?`maxLimit="${e.maxLimit}"`:""}`,`    ${s?`:hint="${s}"`:""}`,`    ${e.isDisabled!==void 0?`:isDisabled="${e.isDisabled}"`:""}`,`    ${e.className?`className="${e.className}"`:""}`,'    v-model="modelValue"',"  />","  <Input",'    label="Email"','    type="email"',`    ${e.hasClear!==void 0?`:hasClear="${e.hasClear}"`:""}`,`    ${e.placeholder?`placeholder="${e.placeholder}"`:""}`,'    prefix="SvgMail"',`    ${e.size?`size="${e.size}"`:""}`,`    ${e.maxLimit?`maxLimit="${e.maxLimit}"`:""}`,`    ${s?`:hint="${s}"`:""}`,`    ${e.isDisabled!==void 0?`:isDisabled="${e.isDisabled}"`:""}`,`    ${e.className?`className="${e.className}"`:""}`,'    v-model="modelValue"',"  />","</template>"].filter(Boolean).join(`
`).trim()}}}}},n={name:"提示訊息",args:{label:"Account",type:"text",hasClear:!0,placeholder:"Placeholder",prefix:"SvgAccount",size:"medium",maxLimit:0,isDisabled:!1,className:"",modelValue:""},render:a=>({components:{Input:l},setup(){return{args:a}},template:`
            <div style="display: flex; flex-direction: column; gap:8px">
                <Input
                    :label="args.label"
                    :type="args.type"
                    :hasClear="args.hasClear"
                    :placeholder="args.placeholder"
                    :prefix="args.prefix"
                    :size="args.size"
                    :maxLimit="args.maxLimit"
                    :hint="{ error: '', description: 'Prompt message' }"
                    :isDisabled="args.isDisabled"
                    :className="args.className"
                    v-model="args.modelValue"
                />
                <Input
                    :label="args.label"
                    :type="args.type"
                    :hasClear="args.hasClear"
                    :placeholder="args.placeholder"
                    :prefix="args.prefix"
                    :size="args.size"
                    :maxLimit="args.maxLimit"
                    :hint="{ error: 'Error message', description: '' }"
                    :isDisabled="args.isDisabled"
                    :className="args.className"
                    v-model="args.modelValue"
                />
            </div>
        `}),parameters:{controls:{exclude:["hint","input","clearDatePicker"]},docs:{source:{transform:(a,r)=>{const{args:e}=r;return["<script setup>",'import { ref } from "vue";','import Input from "@/ui/element/Input/Input.vue";','const modelValue = ref("");',"<\/script>","","<template>","  <Input",`    ${e.label?`label="${e.label}"`:""}`,`    ${e.type?`type="${e.type}"`:""}`,`    ${e.hasClear!==void 0?`:hasClear="${e.hasClear}"`:""}`,`    ${e.placeholder?`placeholder="${e.placeholder}"`:""}`,`    ${e.prefix?`prefix="${e.prefix}"`:""}`,`    ${e.size?`size="${e.size}"`:""}`,`    ${e.maxLimit?`maxLimit="${e.maxLimit}"`:""}`,`    :hint="{ error: '', description: 'Prompt message' }"`,`    ${e.isDisabled!==void 0?`:isDisabled="${e.isDisabled}"`:""}`,`    ${e.className?`className="${e.className}"`:""}`,'    v-model="modelValue"',"  />","  <Input",`    ${e.label?`label="${e.label}"`:""}`,`    ${e.type?`type="${e.type}"`:""}`,`    ${e.hasClear!==void 0?`:hasClear="${e.hasClear}"`:""}`,`    ${e.placeholder?`placeholder="${e.placeholder}"`:""}`,`    ${e.prefix?`prefix="${e.prefix}"`:""}`,`    ${e.size?`size="${e.size}"`:""}`,`    ${e.maxLimit?`maxLimit="${e.maxLimit}"`:""}`,`    :hint="{ error: 'Error message', description: '' }"`,`    ${e.isDisabled!==void 0?`:isDisabled="${e.isDisabled}"`:""}`,`    ${e.className?`className="${e.className}"`:""}`,'    v-model="modelValue"',"  />","</template>"].filter(Boolean).join(`
`).trim()}}}}},m={name:"輸入框狀態",args:{label:"Account",type:"text",hasClear:!0,placeholder:"Placeholder",prefix:"SvgAccount",size:"medium",maxLimit:0,isDisabled:!1,className:"",modelValue:""},render:a=>({components:{Input:l},setup(){return{args:a}},template:`
            <div style="display: flex; flex-direction: column; gap:8px">
                <Input
                    :label="args.label"
                    :type="args.type"
                    :hasClear="args.hasClear"
                    :placeholder="args.placeholder"
                    :prefix="args.prefix"
                    :size="args.size"
                    :maxLimit="args.maxLimit"
                    :hint="{ error: '', description: 'Prompt message' }"
                    :isDisabled="args.isDisabled"
                    :className="args.className"
                    v-model="args.modelValue"
                />
                <Input
                    :label="args.label"
                    :type="args.type"
                    :hasClear="args.hasClear"
                    :placeholder="args.placeholder"
                    :prefix="args.prefix"
                    :size="args.size"
                    :maxLimit="args.maxLimit"
                    :hint="{ error: 'Error message', description: '' }"
                    :isDisabled="args.isDisabled"
                    :className="args.className"
                    v-model="args.modelValue"
                />
                <Input
                    :label="args.label"
                    :type="args.type"
                    :hasClear="args.hasClear"
                    :placeholder="args.placeholder"
                    :prefix="args.prefix"
                    :size="args.size"
                    :maxLimit="args.maxLimit"
                    :hint="{ error: '', description: 'Prompt message' }"
                    :isDisabled="true"
                    :className="args.className"
                    v-model="args.modelValue"
                />
            </div>
        `}),parameters:{controls:{exclude:["hint","input","clearDatePicker","isDisabled"]},docs:{source:{transform:(a,r)=>{const{args:e}=r;return["<script setup>",'import { ref } from "vue";','import Input from "@/ui/element/Input/Input.vue";','const modelValue = ref("");',"<\/script>","","<template>","  <Input",`    ${e.label?`label="${e.label}"`:""}`,`    ${e.type?`type="${e.type}"`:""}`,`    ${e.hasClear!==void 0?`:hasClear="${e.hasClear}"`:""}`,`    ${e.placeholder?`placeholder="${e.placeholder}"`:""}`,`    ${e.prefix?`prefix="${e.prefix}"`:""}`,`    ${e.size?`size="${e.size}"`:""}`,`    ${e.maxLimit?`maxLimit="${e.maxLimit}"`:""}`,`    :hint="{ error: '', description: 'Prompt message' }"`,`    ${e.isDisabled!==void 0?`:isDisabled="${e.isDisabled}"`:""}`,`    ${e.className?`className="${e.className}"`:""}`,'    v-model="modelValue"',"  />","","  <Input",`    ${e.label?`label="${e.label}"`:""}`,`    ${e.type?`type="${e.type}"`:""}`,`    ${e.hasClear!==void 0?`:hasClear="${e.hasClear}"`:""}`,`    ${e.placeholder?`placeholder="${e.placeholder}"`:""}`,`    ${e.prefix?`prefix="${e.prefix}"`:""}`,`    ${e.size?`size="${e.size}"`:""}`,`    ${e.maxLimit?`maxLimit="${e.maxLimit}"`:""}`,`    :hint="{ error: 'Error message', description: '' }"`,`    ${e.isDisabled!==void 0?`:isDisabled="${e.isDisabled}"`:""}`,`    ${e.className?`className="${e.className}"`:""}`,'    v-model="modelValue"',"  />","","  <Input",`    ${e.label?`label="${e.label}"`:""}`,`    ${e.type?`type="${e.type}"`:""}`,`    ${e.hasClear!==void 0?`:hasClear="${e.hasClear}"`:""}`,`    ${e.placeholder?`placeholder="${e.placeholder}"`:""}`,`    ${e.prefix?`prefix="${e.prefix}"`:""}`,`    ${e.size?`size="${e.size}"`:""}`,`    ${e.maxLimit?`maxLimit="${e.maxLimit}"`:""}`,`    :hint="{ error: '', description: 'Prompt message' }"`,'    :isDisabled="true"',`    ${e.className?`className="${e.className}"`:""}`,'    v-model="modelValue"',"  />","</template>"].filter(Boolean).join(`
`).trim()}}}}};var o,p,d;i.parameters={...i.parameters,docs:{...(o=i.parameters)==null?void 0:o.docs,source:{originalSource:`{
  name: '預設項目',
  args: {
    label: 'Label',
    type: 'text',
    hasClear: true,
    placeholder: 'Placeholder',
    prefix: 'SvgAccount',
    size: 'medium',
    maxLimit: 0,
    hint: {
      error: '',
      description: 'Prompt message'
    },
    isDisabled: false,
    className: '',
    modelValue: ''
  },
  render: args => ({
    components: {
      Input
    },
    setup() {
      return {
        args
      };
    },
    template: \`
            <Input
                :label="args.label"
                :type="args.type"
                :hasClear="args.hasClear"
                :placeholder="args.placeholder"
                :prefix="args.prefix"
                :size="args.size"
                :maxLimit="args.maxLimit"
                :hint="args.hint"
                :isDisabled="args.isDisabled"
                :className="args.className"
                v-model="args.modelValue"
            />
            \`
  }),
  // 控制 controls 中能控制的參數
  parameters: {
    controls: {
      // include: ['label', 'type', 'hasClear', 'placeholder', 'prefix', 'size', 'maxLimit', 'hint', 'isDisabled','className','modelValue'],
      exclude: ['input', 'clearDatePicker']
    },
    docs: {
      source: {
        transform: (src, storyContext) => {
          const {
            args
          } = storyContext;
          const dataSourceString = formatDataSource(args.hint);
          return [\`<script setup>\`, 'import { ref } from "vue";', \`import Input from "@/ui/element/Input/Input.vue";\`, 'const modelValue = ref("");', \`<\/script>\`, '', '<template>', '  <Input', \`    \${args.label ? \`label="\${args.label}"\` : ""}\`, \`    \${args.type ? \`type="\${args.type}"\` : ""}\`, \`    \${args.hasClear !== undefined ? \`:hasClear="\${args.hasClear}"\` : ""}\`, \`    \${args.placeholder ? \`placeholder="\${args.placeholder}"\` : ""}\`, \`    \${args.prefix ? \`prefix="\${args.prefix}"\` : ""}\`, \`    \${args.size ? \`size="\${args.size}"\` : ""}\`, \`    \${args.maxLimit ? \`maxLimit="\${args.maxLimit}"\` : ""}\`, \`    \${dataSourceString ? \`:hint="\${dataSourceString}"\` : ""}\`, \`    \${args.isDisabled !== undefined ? \`:isDisabled="\${args.isDisabled}"\` : ""}\`, \`    \${args.className ? \`className="\${args.className}"\` : ""}\`, \`    v-model="modelValue"\`, '  />', '</template>'].filter(Boolean).join('\\n').trim();
        }
      }
    }
  }
}`,...(d=(p=i.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};var c,g,u;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:'{\n  name: "輸入類型",\n  args: {\n    // label: \'Account\',\n    // type: \'text\',\n    hasClear: true,\n    placeholder: \'Placeholder\',\n    // prefix: \'SvgAccount\',\n    size: \'medium\',\n    maxLimit: 0,\n    hint: {\n      error: \'\',\n      description: \'Prompt message\'\n    },\n    isDisabled: false,\n    className: \'\',\n    modelValue: \'\'\n  },\n  render: args => ({\n    components: {\n      Input\n    },\n    setup() {\n      return {\n        args\n      };\n    },\n    template: `\n            <div style="display: flex; flex-direction: column; gap:8px">\n                <Input\n                    label="Number"\n                    type="number"\n                    :hasClear="args.hasClear"\n                    :placeholder="args.placeholder"\n                    prefix="SvgSearch"\n                    :size="args.size"\n                    :maxLimit="args.maxLimit"\n                    :hint="args.hint"\n                    :isDisabled="args.isDisabled"\n                    :className="args.className"\n                    v-model="args.modelValue"\n                />\n                <Input\n                    label="Text"\n                    type="text"\n                    :hasClear="args.hasClear"\n                    :placeholder="args.placeholder"\n                    prefix="SvgAccount"\n                    :size="args.size"\n                    :maxLimit="args.maxLimit"\n                    :hint="args.hint"\n                    :isDisabled="args.isDisabled"\n                    :className="args.className"\n                    v-model="args.modelValue"\n                />\n                <Input\n                    label="Password"\n                    type="password"\n                    :hasClear="args.hasClear"\n                    :placeholder="args.placeholder"\n                    prefix="SvgLock"\n                    :size="args.size"\n                    :maxLimit="args.maxLimit"\n                    :hint="args.hint"\n                    :isDisabled="args.isDisabled"\n                    :className="args.className"\n                    v-model="args.modelValue"\n                />\n                <Input\n                    label="Email"\n                    type="email"\n                    :hasClear="args.hasClear"\n                    :placeholder="args.placeholder"\n                    prefix="SvgMail"\n                    :size="args.size"\n                    :maxLimit="args.maxLimit"\n                    :hint="args.hint"\n                    :isDisabled="args.isDisabled"\n                    :className="args.className"\n                    v-model="args.modelValue"\n                />\n            </div>\n        `\n  }),\n  // 控制 controls 中能控制的參數\n  parameters: {\n    controls: {\n      // include: [\'label\', \'type\', \'hasClear\', \'placeholder\', \'prefix\', \'size\', \'modelValue\', \'maxLimit\', \'className\'],\n      exclude: [\'label\', \'type\', \'prefix\', \'input\', \'clearDatePicker\']\n    },\n    docs: {\n      source: {\n        transform: (src, storyContext) => {\n          const {\n            args\n          } = storyContext;\n          const dataSourceString = formatDataSource(args.hint);\n          return [`<script setup>`, \'import { ref } from "vue";\', `import Input from "@/ui/element/Input/Input.vue";`, \'const modelValue = ref("");\', `<\/script>`, \'\', \'<template>\', \'  <Input\', `    label="Number"`, `    type="number"`, `    ${args.hasClear !== undefined ? `:hasClear="${args.hasClear}"` : ""}`, `    ${args.placeholder ? `placeholder="${args.placeholder}"` : ""}`, `    prefix="SvgSearch"`, `    ${args.size ? `size="${args.size}"` : ""}`, `    ${args.maxLimit ? `maxLimit="${args.maxLimit}"` : ""}`, `    ${dataSourceString ? `:hint="${dataSourceString}"` : ""}`, `    ${args.isDisabled !== undefined ? `:isDisabled="${args.isDisabled}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, `    v-model="modelValue"`, \'  />\', \'  <Input\', `    label="Text"`, `    type="text"`, `    ${args.hasClear !== undefined ? `:hasClear="${args.hasClear}"` : ""}`, `    ${args.placeholder ? `placeholder="${args.placeholder}"` : ""}`, `    prefix="SvgAccount"`, `    ${args.size ? `size="${args.size}"` : ""}`, `    ${args.maxLimit ? `maxLimit="${args.maxLimit}"` : ""}`, `    ${dataSourceString ? `:hint="${dataSourceString}"` : ""}`, `    ${args.isDisabled !== undefined ? `:isDisabled="${args.isDisabled}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, `    v-model="modelValue"`, \'  />\', \'  <Input\', `    label="Password"`, `    type="password"`, `    ${args.hasClear !== undefined ? `:hasClear="${args.hasClear}"` : ""}`, `    ${args.placeholder ? `placeholder="${args.placeholder}"` : ""}`, `    prefix="SvgLock"`, `    ${args.size ? `size="${args.size}"` : ""}`, `    ${args.maxLimit ? `maxLimit="${args.maxLimit}"` : ""}`, `    ${dataSourceString ? `:hint="${dataSourceString}"` : ""}`, `    ${args.isDisabled !== undefined ? `:isDisabled="${args.isDisabled}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, `    v-model="modelValue"`, \'  />\', \'  <Input\', `    label="Email"`, `    type="email"`, `    ${args.hasClear !== undefined ? `:hasClear="${args.hasClear}"` : ""}`, `    ${args.placeholder ? `placeholder="${args.placeholder}"` : ""}`, `    prefix="SvgMail"`, `    ${args.size ? `size="${args.size}"` : ""}`, `    ${args.maxLimit ? `maxLimit="${args.maxLimit}"` : ""}`, `    ${dataSourceString ? `:hint="${dataSourceString}"` : ""}`, `    ${args.isDisabled !== undefined ? `:isDisabled="${args.isDisabled}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, `    v-model="modelValue"`, \'  />\', \'</template>\'].filter(Boolean).join(\'\\n\').trim();\n        }\n      }\n    }\n  }\n}',...(u=(g=t.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};var $,h,x;n.parameters={...n.parameters,docs:{...($=n.parameters)==null?void 0:$.docs,source:{originalSource:`{
  name: "提示訊息",
  args: {
    label: 'Account',
    type: 'text',
    hasClear: true,
    placeholder: 'Placeholder',
    prefix: 'SvgAccount',
    size: 'medium',
    maxLimit: 0,
    isDisabled: false,
    className: '',
    modelValue: ''
  },
  render: args => ({
    components: {
      Input
    },
    setup() {
      return {
        args
      };
    },
    template: \`
            <div style="display: flex; flex-direction: column; gap:8px">
                <Input
                    :label="args.label"
                    :type="args.type"
                    :hasClear="args.hasClear"
                    :placeholder="args.placeholder"
                    :prefix="args.prefix"
                    :size="args.size"
                    :maxLimit="args.maxLimit"
                    :hint="{ error: '', description: 'Prompt message' }"
                    :isDisabled="args.isDisabled"
                    :className="args.className"
                    v-model="args.modelValue"
                />
                <Input
                    :label="args.label"
                    :type="args.type"
                    :hasClear="args.hasClear"
                    :placeholder="args.placeholder"
                    :prefix="args.prefix"
                    :size="args.size"
                    :maxLimit="args.maxLimit"
                    :hint="{ error: 'Error message', description: '' }"
                    :isDisabled="args.isDisabled"
                    :className="args.className"
                    v-model="args.modelValue"
                />
            </div>
        \`
  }),
  // 控制 controls 中能控制的參數
  parameters: {
    controls: {
      // include: ['label', 'type', 'hasClear', 'placeholder', 'prefix', 'size', 'modelValue', 'maxLimit', 'className'],
      exclude: ['hint', 'input', 'clearDatePicker']
    },
    docs: {
      source: {
        transform: (src, storyContext) => {
          const {
            args
          } = storyContext;
          return [\`<script setup>\`, 'import { ref } from "vue";', \`import Input from "@/ui/element/Input/Input.vue";\`, 'const modelValue = ref("");', \`<\/script>\`, '', '<template>', '  <Input', \`    \${args.label ? \`label="\${args.label}"\` : ""}\`, \`    \${args.type ? \`type="\${args.type}"\` : ""}\`, \`    \${args.hasClear !== undefined ? \`:hasClear="\${args.hasClear}"\` : ""}\`, \`    \${args.placeholder ? \`placeholder="\${args.placeholder}"\` : ""}\`, \`    \${args.prefix ? \`prefix="\${args.prefix}"\` : ""}\`, \`    \${args.size ? \`size="\${args.size}"\` : ""}\`, \`    \${args.maxLimit ? \`maxLimit="\${args.maxLimit}"\` : ""}\`, \`    :hint="{ error: '', description: 'Prompt message' }"\`, \`    \${args.isDisabled !== undefined ? \`:isDisabled="\${args.isDisabled}"\` : ""}\`, \`    \${args.className ? \`className="\${args.className}"\` : ""}\`, \`    v-model="modelValue"\`, '  />', '  <Input', \`    \${args.label ? \`label="\${args.label}"\` : ""}\`, \`    \${args.type ? \`type="\${args.type}"\` : ""}\`, \`    \${args.hasClear !== undefined ? \`:hasClear="\${args.hasClear}"\` : ""}\`, \`    \${args.placeholder ? \`placeholder="\${args.placeholder}"\` : ""}\`, \`    \${args.prefix ? \`prefix="\${args.prefix}"\` : ""}\`, \`    \${args.size ? \`size="\${args.size}"\` : ""}\`, \`    \${args.maxLimit ? \`maxLimit="\${args.maxLimit}"\` : ""}\`, \`    :hint="{ error: 'Error message', description: '' }"\`, \`    \${args.isDisabled !== undefined ? \`:isDisabled="\${args.isDisabled}"\` : ""}\`, \`    \${args.className ? \`className="\${args.className}"\` : ""}\`, \`    v-model="modelValue"\`, '  />', '</template>'].filter(Boolean).join('\\n').trim();
        }
      }
    }
  }
}`,...(x=(h=n.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};var b,f,y;m.parameters={...m.parameters,docs:{...(b=m.parameters)==null?void 0:b.docs,source:{originalSource:'{\n  name: "輸入框狀態",\n  args: {\n    label: \'Account\',\n    type: \'text\',\n    hasClear: true,\n    placeholder: \'Placeholder\',\n    prefix: \'SvgAccount\',\n    size: \'medium\',\n    maxLimit: 0,\n    isDisabled: false,\n    className: \'\',\n    modelValue: \'\'\n  },\n  render: args => ({\n    components: {\n      Input\n    },\n    setup() {\n      return {\n        args\n      };\n    },\n    template: `\n            <div style="display: flex; flex-direction: column; gap:8px">\n                <Input\n                    :label="args.label"\n                    :type="args.type"\n                    :hasClear="args.hasClear"\n                    :placeholder="args.placeholder"\n                    :prefix="args.prefix"\n                    :size="args.size"\n                    :maxLimit="args.maxLimit"\n                    :hint="{ error: \'\', description: \'Prompt message\' }"\n                    :isDisabled="args.isDisabled"\n                    :className="args.className"\n                    v-model="args.modelValue"\n                />\n                <Input\n                    :label="args.label"\n                    :type="args.type"\n                    :hasClear="args.hasClear"\n                    :placeholder="args.placeholder"\n                    :prefix="args.prefix"\n                    :size="args.size"\n                    :maxLimit="args.maxLimit"\n                    :hint="{ error: \'Error message\', description: \'\' }"\n                    :isDisabled="args.isDisabled"\n                    :className="args.className"\n                    v-model="args.modelValue"\n                />\n                <Input\n                    :label="args.label"\n                    :type="args.type"\n                    :hasClear="args.hasClear"\n                    :placeholder="args.placeholder"\n                    :prefix="args.prefix"\n                    :size="args.size"\n                    :maxLimit="args.maxLimit"\n                    :hint="{ error: \'\', description: \'Prompt message\' }"\n                    :isDisabled="true"\n                    :className="args.className"\n                    v-model="args.modelValue"\n                />\n            </div>\n        `\n  }),\n  // 控制 controls 中能控制的參數\n  parameters: {\n    controls: {\n      // include: [\'label\', \'type\', \'hasClear\', \'placeholder\', \'prefix\', \'size\', \'modelValue\', \'maxLimit\', \'className\'],\n      exclude: [\'hint\', \'input\', \'clearDatePicker\', \'isDisabled\']\n    },\n    docs: {\n      source: {\n        transform: (src, storyContext) => {\n          const {\n            args\n          } = storyContext;\n          return [`<script setup>`, \'import { ref } from "vue";\', `import Input from "@/ui/element/Input/Input.vue";`, \'const modelValue = ref("");\', `<\/script>`, \'\', \'<template>\', \'  <Input\', `    ${args.label ? `label="${args.label}"` : ""}`, `    ${args.type ? `type="${args.type}"` : ""}`, `    ${args.hasClear !== undefined ? `:hasClear="${args.hasClear}"` : ""}`, `    ${args.placeholder ? `placeholder="${args.placeholder}"` : ""}`, `    ${args.prefix ? `prefix="${args.prefix}"` : ""}`, `    ${args.size ? `size="${args.size}"` : ""}`, `    ${args.maxLimit ? `maxLimit="${args.maxLimit}"` : ""}`, `    :hint="{ error: \'\', description: \'Prompt message\' }"`, `    ${args.isDisabled !== undefined ? `:isDisabled="${args.isDisabled}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, `    v-model="modelValue"`, \'  />\', \'\', \'  <Input\', `    ${args.label ? `label="${args.label}"` : ""}`, `    ${args.type ? `type="${args.type}"` : ""}`, `    ${args.hasClear !== undefined ? `:hasClear="${args.hasClear}"` : ""}`, `    ${args.placeholder ? `placeholder="${args.placeholder}"` : ""}`, `    ${args.prefix ? `prefix="${args.prefix}"` : ""}`, `    ${args.size ? `size="${args.size}"` : ""}`, `    ${args.maxLimit ? `maxLimit="${args.maxLimit}"` : ""}`, `    :hint="{ error: \'Error message\', description: \'\' }"`, `    ${args.isDisabled !== undefined ? `:isDisabled="${args.isDisabled}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, `    v-model="modelValue"`, \'  />\', \'\', \'  <Input\', `    ${args.label ? `label="${args.label}"` : ""}`, `    ${args.type ? `type="${args.type}"` : ""}`, `    ${args.hasClear !== undefined ? `:hasClear="${args.hasClear}"` : ""}`, `    ${args.placeholder ? `placeholder="${args.placeholder}"` : ""}`, `    ${args.prefix ? `prefix="${args.prefix}"` : ""}`, `    ${args.size ? `size="${args.size}"` : ""}`, `    ${args.maxLimit ? `maxLimit="${args.maxLimit}"` : ""}`, `    :hint="{ error: \'\', description: \'Prompt message\' }"`, `    :isDisabled="true"`, `    ${args.className ? `className="${args.className}"` : ""}`, `    v-model="modelValue"`, \'  />\', \'</template>\'].filter(Boolean).join(\'\\n\').trim();\n        }\n      }\n    }\n  }\n}',...(y=(f=m.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};const v=["InputDefault","InputTypesStory","InputHintTypeStory","InputStatusStory"];export{i as InputDefault,n as InputHintTypeStory,m as InputStatusStory,t as InputTypesStory,v as __namedExportsOrder,z as default};

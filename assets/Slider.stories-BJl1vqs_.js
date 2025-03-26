import{_ as i}from"./Slider-CWJuBLON.js";import"./vue.esm-bundler-CC1hEtM-.js";const f={title:"Component/Slider",component:i,tags:["autodocs"],argTypes:{min:{description:"最小值",control:{type:"number"}},max:{description:"最大值",control:{type:"number"}},step:{description:"步進值",control:{type:"number"}},label:{description:"單位",control:{type:"text"}},isShowRange:{description:"是否顯示範圍",control:{type:"boolean"}},isShowCurrValue:{description:"是否顯示目前值",control:{type:"boolean"}},isDisabled:{description:"是否禁用",control:{type:"boolean"}},className:{description:"客製化樣式",control:{type:"text"}},updateWidth:{table:{disable:!0}},modelValue:{description:"輸入值",control:{type:"number"},table:{type:{summary:"number"},category:"v-model"}}},parameters:{docs:{title:"Slider",description:{component:"Slider組件的呈現及說明。"}}}},r={name:"預設項目",args:{min:-100,max:100,step:1,label:"℃",isShowRange:!0,isShowCurrValue:!0,isDisabled:!1,className:"",modelValue:8},render:s=>({components:{Slider:i},setup(){return{args:s}},template:`
      <slider
        :min="args.min"
        :max="args.max"
        :step="args.step"
        :label="args.label"
        :isShowRange="args.isShowRange"
        :isShowCurrValue="args.isShowCurrValue"
        :isDisabled="args.isDisabled"
        :className="args.className"
        v-model="args.modelValue"
      ></slider>`}),parameters:{controls:{},docs:{source:{transform:(s,a)=>{const{args:e}=a;return["<script setup>",'import { ref } from "vue";','import { Slider } from "@ded-wds-vue/ui";',`const modelValue = ref("${e.modelValue}");`,"<\/script>","","<template>","  <Slider",`    ${e.min!==void 0?`:min="${e.min}"`:""}`,`    ${e.max!==void 0?`:max="${e.max}"`:""}`,`    ${e.step!==void 0?`:step="${e.step}"`:""}`,`    ${e.label?`label="${e.label}"`:""}`,`    ${e.isShowRange!==void 0?`:isShowRange="${e.isShowRange}"`:""}`,`    ${e.isShowCurrValue!==void 0?`:isShowCurrValue="${e.isShowCurrValue}"`:""}`,`    ${e.isDisabled!==void 0?`:isDisabled="${e.isDisabled}"`:""}`,`    ${e.className?`className="${e.className}"`:""}`,'    v-model="modelValue"',"  ></Slider>","</template>"].filter(Boolean).join(`
`).trim()}}}}},n={name:"顯示目前值",args:{min:-100,max:100,step:1,label:"℃",isShowRange:!1,isDisabled:!1,className:"",modelValue:8},render:s=>({components:{Slider:i},setup(){return{args:s}},template:`
      <slider
        :min="args.min"
        :max="args.max"
        :step="args.step"
        :label="args.label"
        :isShowRange="args.isShowRange"
        :isShowCurrValue="true"
        :isDisabled="args.isDisabled"
        :className="args.className"
        v-model="args.modelValue"
      ></slider>`}),parameters:{controls:{},docs:{source:{transform:(s,a)=>{const{args:e}=a;return["<script setup>",'import { ref } from "vue";','import { Slider } from "@ded-wds-vue/ui";',`const modelValue = ref("${e.modelValue}");`,"<\/script>","","<template>","  <Slider",`    ${e.min!==void 0?`:min="${e.min}"`:""}`,`    ${e.max!==void 0?`:max="${e.max}"`:""}`,`    ${e.step!==void 0?`:step="${e.step}"`:""}`,`    ${e.label?`label="${e.label}"`:""}`,`    ${e.isShowRange!==void 0?`:isShowRange="${e.isShowRange}"`:""}`,'    :isShowCurrValue="true"',`    ${e.isDisabled!==void 0?`:isDisabled="${e.isDisabled}"`:""}`,`    ${e.className?`className="${e.className}"`:""}`,'    v-model="modelValue"',"  ></Slider>","</template>"].filter(Boolean).join(`
`).trim()}}}}},l={name:"顯示範圍",args:{min:-100,max:100,step:1,label:"℃",isShowCurrValue:!1,isDisabled:!1,className:"",modelValue:8},render:s=>({components:{Slider:i},setup(){return{args:s}},template:`
      <slider
        :min="args.min"
        :max="args.max"
        :step="args.step"
        :label="args.label"
        :isShowRange="true"
        :isShowCurrValue="args.isShowCurrValue"
        :isDisabled="args.isDisabled"
        :className="args.className"
        v-model="args.modelValue"
      ></slider>`}),parameters:{controls:{},docs:{source:{transform:(s,a)=>{const{args:e}=a;return["<script setup>",'import { ref } from "vue";','import { Slider } from "@ded-wds-vue/ui";',`const modelValue = ref("${e.modelValue}");`,"<\/script>","","<template>","  <Slider",`    ${e.min!==void 0?`:min="${e.min}"`:""}`,`    ${e.max!==void 0?`:max="${e.max}"`:""}`,`    ${e.step!==void 0?`:step="${e.step}"`:""}`,`    ${e.label?`label="${e.label}"`:""}`,'    :isShowRange="true"',`    ${e.isShowCurrValue!==void 0?`:isShowCurrValue="${e.isShowCurrValue}"`:""}`,`    ${e.isDisabled!==void 0?`:isDisabled="${e.isDisabled}"`:""}`,`    ${e.className?`className="${e.className}"`:""}`,'    v-model="modelValue"',"  ></Slider>","</template>"].filter(Boolean).join(`
`).trim()}}}}};var o,t,m;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:'{\n  name: "預設項目",\n  args: {\n    // themeColor: \'primary\',\n    min: -100,\n    max: 100,\n    step: 1,\n    label: "℃",\n    isShowRange: true,\n    isShowCurrValue: true,\n    isDisabled: false,\n    className: "",\n    modelValue: 8\n  },\n  render: args => ({\n    components: {\n      Slider\n    },\n    setup() {\n      return {\n        args\n      };\n    },\n    template: `\n      <slider\n        :min="args.min"\n        :max="args.max"\n        :step="args.step"\n        :label="args.label"\n        :isShowRange="args.isShowRange"\n        :isShowCurrValue="args.isShowCurrValue"\n        :isDisabled="args.isDisabled"\n        :className="args.className"\n        v-model="args.modelValue"\n      ></slider>`\n  }),\n  // 控制 controls 中能控制的參數\n  parameters: {\n    controls: {\n      // include: [\'themeColor\', \'label\', \'value\', \'name\' ],\n      // exclude:[\'updateWidth\']\n    },\n    docs: {\n      source: {\n        transform: (src, storyContext) => {\n          const {\n            args\n          } = storyContext;\n          return [`<script setup>`, "import { ref } from \\"vue\\";", `import { Slider } from "@ded-wds-vue/ui";`, `const modelValue = ref("${args.modelValue}");`, `<\/script>`, "", "<template>", `  <Slider`, `    ${args.min !== undefined ? `:min="${args.min}"` : ""}`, `    ${args.max !== undefined ? `:max="${args.max}"` : ""}`, `    ${args.step !== undefined ? `:step="${args.step}"` : ""}`, `    ${args.label ? `label="${args.label}"` : ""}`, `    ${args.isShowRange !== undefined ? `:isShowRange="${args.isShowRange}"` : ""}`, `    ${args.isShowCurrValue !== undefined ? `:isShowCurrValue="${args.isShowCurrValue}"` : ""}`, `    ${args.isDisabled !== undefined ? `:isDisabled="${args.isDisabled}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, `    v-model="modelValue"`, `  ></Slider>`, "</template>"].filter(Boolean).join("\\n").trim();\n        }\n      }\n    }\n  }\n}',...(m=(t=r.parameters)==null?void 0:t.docs)==null?void 0:m.source}}};var d,u,g;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
  name: "顯示目前值",
  args: {
    // themeColor: 'primary',
    min: -100,
    max: 100,
    step: 1,
    label: "℃",
    isShowRange: false,
    isDisabled: false,
    className: "",
    modelValue: 8
  },
  render: args => ({
    components: {
      Slider
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <slider
        :min="args.min"
        :max="args.max"
        :step="args.step"
        :label="args.label"
        :isShowRange="args.isShowRange"
        :isShowCurrValue="true"
        :isDisabled="args.isDisabled"
        :className="args.className"
        v-model="args.modelValue"
      ></slider>\`
  }),
  // 控制 controls 中能控制的參數
  parameters: {
    controls: {
      // include: ['themeColor', 'label', 'value', 'name' ],
      // exclude:['updateWidth']
    },
    docs: {
      source: {
        transform: (src, storyContext) => {
          const {
            args
          } = storyContext;
          return [\`<script setup>\`, "import { ref } from \\"vue\\";", \`import { Slider } from "@ded-wds-vue/ui";\`, \`const modelValue = ref("\${args.modelValue}");\`, \`<\/script>\`, "", "<template>", \`  <Slider\`, \`    \${args.min !== undefined ? \`:min="\${args.min}"\` : ""}\`, \`    \${args.max !== undefined ? \`:max="\${args.max}"\` : ""}\`, \`    \${args.step !== undefined ? \`:step="\${args.step}"\` : ""}\`, \`    \${args.label ? \`label="\${args.label}"\` : ""}\`, \`    \${args.isShowRange !== undefined ? \`:isShowRange="\${args.isShowRange}"\` : ""}\`, \`    :isShowCurrValue="true"\`, \`    \${args.isDisabled !== undefined ? \`:isDisabled="\${args.isDisabled}"\` : ""}\`, \`    \${args.className ? \`className="\${args.className}"\` : ""}\`, \`    v-model="modelValue"\`, \`  ></Slider>\`, "</template>"].filter(Boolean).join("\\n").trim();
        }
      }
    }
  }
}`,...(g=(u=n.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var p,c,S;l.parameters={...l.parameters,docs:{...(p=l.parameters)==null?void 0:p.docs,source:{originalSource:'{\n  name: "顯示範圍",\n  args: {\n    min: -100,\n    max: 100,\n    step: 1,\n    label: "℃",\n    isShowCurrValue: false,\n    isDisabled: false,\n    className: "",\n    modelValue: 8\n  },\n  render: args => ({\n    components: {\n      Slider\n    },\n    setup() {\n      return {\n        args\n      };\n    },\n    template: `\n      <slider\n        :min="args.min"\n        :max="args.max"\n        :step="args.step"\n        :label="args.label"\n        :isShowRange="true"\n        :isShowCurrValue="args.isShowCurrValue"\n        :isDisabled="args.isDisabled"\n        :className="args.className"\n        v-model="args.modelValue"\n      ></slider>`\n  }),\n  // 控制 controls 中能控制的參數\n  parameters: {\n    controls: {\n      // include: [\'themeColor\', \'label\', \'value\', \'name\' ],\n      // exclude:[\'updateWidth\']\n    },\n    docs: {\n      source: {\n        transform: (src, storyContext) => {\n          const {\n            args\n          } = storyContext;\n          return [`<script setup>`, "import { ref } from \\"vue\\";", `import { Slider } from "@ded-wds-vue/ui";`, `const modelValue = ref("${args.modelValue}");`, `<\/script>`, "", "<template>", `  <Slider`, `    ${args.min !== undefined ? `:min="${args.min}"` : ""}`, `    ${args.max !== undefined ? `:max="${args.max}"` : ""}`, `    ${args.step !== undefined ? `:step="${args.step}"` : ""}`, `    ${args.label ? `label="${args.label}"` : ""}`, `    :isShowRange="true"`, `    ${args.isShowCurrValue !== undefined ? `:isShowCurrValue="${args.isShowCurrValue}"` : ""}`, `    ${args.isDisabled !== undefined ? `:isDisabled="${args.isDisabled}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, `    v-model="modelValue"`, `  ></Slider>`, "</template>"].filter(Boolean).join("\\n").trim();\n        }\n      }\n    }\n  }\n}',...(S=(c=l.parameters)==null?void 0:c.docs)==null?void 0:S.source}}};const h=["SliderDefault","SliderCurrent","SliderAround"];export{l as SliderAround,n as SliderCurrent,r as SliderDefault,h as __namedExportsOrder,f as default};

import{_ as i}from"./Textarea-DWYxSoPN.js";import{C as o}from"./vue.esm-bundler-DDwqdenp.js";import{_ as x}from"./Icon-BF6y4SVm.js";import{_ as n}from"./StatusIndicator-DOND9Pb9.js";import"./v4-CtRu48qb.js";const V={title:"Component/Textarea",component:i,tags:["autodocs"],argTypes:{label:{description:"標題",control:{type:"text"}},placeholder:{description:"輸入提示",control:{type:"text"}},limit:{description:"字數限制",control:{type:"number"}},hint:{description:"提示訊息",control:{type:"object"},table:{type:{summary:"{ error: string | VNode; description: string | VNode; }"}}},isDisabled:{description:"是否禁用",control:{type:"boolean"}},className:{description:"客製化樣式",control:{type:"text"}},modelValue:{description:"輸入值",control:{type:"text"},table:{type:{summary:"string"},category:"v-model"}}},parameters:{docs:{title:"Textarea",description:{component:"Textarea 組件的呈現及說明。"}}}},l={name:"預設項目",args:{label:"Label",placeholder:"Placeholder",limit:0,hint:{error:"",description:""},isDisabled:!1,className:"",modelValue:"Type something"},render:a=>({components:{Textarea:i},setup(){return{args:a}},template:`
      <Textarea
        :label="args.label"
        :placeholder="args.placeholder"
        :limit="args.limit"
        :hint="args.hint"
        :isDisabled="args.isDisabled"
        :className="args.className"
        v-model="args.modelValue"
      ></Textarea>`}),parameters:{controls:{},docs:{source:{transform:(a,r)=>{const{args:e}=r;return["<script setup>",'import { ref, h } from "vue";','import { Textarea } from "@ded-wds-vue/ui";',"const hint = {",'  error: "",','  description: ""',"};",`const modelValue = ref("${e.modelValue}");`,"<\/script>","","<template>","  <Textarea",`    ${e.label?`label="${e.label}"`:""}`,`    ${e.placeholder?`placeholder="${e.placeholder}"`:""}`,`    ${e.limit!==void 0?`:limit="${e.limit}"`:""}`,'    :hint="hint"',`    ${e.isDisabled!==void 0?`:isDisabled="${e.isDisabled}"`:""}`,`    ${e.className?`className="${e.className}"`:""}`,'    v-model="modelValue"',"  ></Textarea>","</template>"].filter(Boolean).join(`
`).trim()}}}}},s={name:"字數限制",args:{label:"Label",placeholder:"Placeholder",limit:30,hint:{error:"",description:""},isDisabled:!1,className:"",modelValue:"Type something"},render:a=>({components:{Textarea:i},setup(){return{args:a}},template:`
      <Textarea
        :label="args.label"
        :placeholder="args.placeholder"
        :limit="args.limit"
        :hint="args.hint"
        :isDisabled="args.isDisabled"
        :className="args.className"
        v-model="args.modelValue"
      ></Textarea>`}),parameters:{controls:{},docs:{source:{transform:(a,r)=>{const{args:e}=r;return["<script setup>",'import { ref, h } from "vue";','import { Textarea } from "@ded-wds-vue/ui";',"const hint = {",'  error: "",','  description: ""',"};",`const modelValue = ref("${e.modelValue}");`,"<\/script>","","<template>","  <Textarea",`    ${e.label?`label="${e.label}"`:""}`,`    ${e.placeholder?`placeholder="${e.placeholder}"`:""}`,`    ${e.limit!==void 0?`:limit="${e.limit}"`:""}`,'    :hint="hint"',`    ${e.isDisabled!==void 0?`:isDisabled="${e.isDisabled}"`:""}`,`    ${e.className?`className="${e.className}"`:""}`,'    v-model="modelValue"',"  ></Textarea>","</template>"].filter(Boolean).join(`
`).trim()}}}}},t={name:"輸入框狀態",args:{label:"Label",placeholder:"Placeholder",limit:30,hintPrompt:{error:"",description:()=>o(n,{themeColor:"neutral",variant:"text",size:"medium",isShowDot:!1},"Prompt message")},hintError:{error:()=>o(n,{themeColor:"error",variant:"text",size:"medium",prefix:"SvgErrorCircle",isShowDot:!1},"Error message"),description:""},hint:{error:"",description:""},isDisabled:!1,className:"",modelValue:"Type something"},render:a=>({components:{Textarea:i},setup(){return{args:a,StatusIndicator:n,Icon:x}},template:`
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
      </div>`}),parameters:{controls:{exclude:["hint","isDisabled"]},docs:{source:{transform:(a,r)=>{const{args:e}=r;return["<script setup>",'import { ref, h } from "vue";','import { Textarea, Icon, StatusIndicator } from "@ded-wds-vue/ui";',"const hintPrompt = {",'  error: "",',"  description: () => h(StatusIndicator, {",'    themeColor: "neutral",','    variant: "text",','    size: "medium",',"    isShowDot: false",'  }, "Prompt message")',"};","","const hintError = {","  error: () => h(StatusIndicator, {",'    themeColor: "error",','    variant: "text",','    size: "medium",','    prefix: "SvgErrorCircle",',"    isShowDot: false",'  }, "Error message"),','  description: ""',"};","","const hint = {",'  error: "",','  description: ""',"};",`const modelValue = ref("${e.modelValue}");`,"<\/script>","","<template>","  <Textarea",`    ${e.label?`label="${e.label}"`:""}`,`    ${e.placeholder?`placeholder="${e.placeholder}"`:""}`,`    ${e.limit!==void 0?`:limit="${e.limit}"`:""}`,'    :hint="hintPrompt"',`    ${e.isDisabled!==void 0?`:isDisabled="${e.isDisabled}"`:""}`,`    ${e.className?`className="${e.className}"`:""}`,'    v-model="modelValue"',"  ></Textarea>","  <Textarea",`    ${e.label?`label="${e.label}"`:""}`,`    ${e.placeholder?`placeholder="${e.placeholder}"`:""}`,`    ${e.limit!==void 0?`:limit="${e.limit}"`:""}`,'    :hint="hintError"',`    ${e.isDisabled!==void 0?`:isDisabled="${e.isDisabled}"`:""}`,`    ${e.className?`className="${e.className}"`:""}`,'    v-model="modelValue"',"  ></Textarea>","  <Textarea",`    ${e.label?`label="${e.label}"`:""}`,`    ${e.placeholder?`placeholder="${e.placeholder}"`:""}`,`    ${e.limit!==void 0?`:limit="${e.limit}"`:""}`,'    :hint="hint"','    v-model="modelValue"',"  ></Textarea>","</template>"].filter(Boolean).join(`
`).trim()}}}}};var m,d,c;l.parameters={...l.parameters,docs:{...(m=l.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: "預設項目",
  args: {
    label: "Label",
    placeholder: "Placeholder",
    limit: 0,
    hint: {
      error: "",
      description: ""
    },
    isDisabled: false,
    className: "",
    modelValue: "Type something"
  },
  render: args => ({
    components: {
      Textarea
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <Textarea
        :label="args.label"
        :placeholder="args.placeholder"
        :limit="args.limit"
        :hint="args.hint"
        :isDisabled="args.isDisabled"
        :className="args.className"
        v-model="args.modelValue"
      ></Textarea>\`
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
          const {
            args
          } = storyContext;
          return [\`<script setup>\`, "import { ref, h } from \\"vue\\";", \`import { Textarea } from "@ded-wds-vue/ui";\`, "const hint = {", \`  error: "",\`, \`  description: ""\`, "};", \`const modelValue = ref("\${args.modelValue}");\`, \`<\/script>\`, "", "<template>", "  <Textarea", \`    \${args.label ? \`label="\${args.label}"\` : ""}\`, \`    \${args.placeholder ? \`placeholder="\${args.placeholder}"\` : ""}\`, \`    \${args.limit !== undefined ? \`:limit="\${args.limit}"\` : ""}\`, \`    :hint="hint"\`, \`    \${args.isDisabled !== undefined ? \`:isDisabled="\${args.isDisabled}"\` : ""}\`, \`    \${args.className ? \`className="\${args.className}"\` : ""}\`, \`    v-model="modelValue"\`, "  ></Textarea>", "</template>"].filter(Boolean).join("\\n").trim();
        }
      }
    }
  }
}`,...(c=(d=l.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};var p,u,g;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: "字數限制",
  args: {
    label: "Label",
    placeholder: "Placeholder",
    limit: 30,
    hint: {
      error: "",
      description: ""
    },
    isDisabled: false,
    className: "",
    modelValue: "Type something"
  },
  render: args => ({
    components: {
      Textarea
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <Textarea
        :label="args.label"
        :placeholder="args.placeholder"
        :limit="args.limit"
        :hint="args.hint"
        :isDisabled="args.isDisabled"
        :className="args.className"
        v-model="args.modelValue"
      ></Textarea>\`
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
          const {
            args
          } = storyContext;
          return [\`<script setup>\`, "import { ref, h } from \\"vue\\";", \`import { Textarea } from "@ded-wds-vue/ui";\`, "const hint = {", \`  error: "",\`, \`  description: ""\`, "};", \`const modelValue = ref("\${args.modelValue}");\`, \`<\/script>\`, "", "<template>", "  <Textarea", \`    \${args.label ? \`label="\${args.label}"\` : ""}\`, \`    \${args.placeholder ? \`placeholder="\${args.placeholder}"\` : ""}\`, \`    \${args.limit !== undefined ? \`:limit="\${args.limit}"\` : ""}\`, \`    :hint="hint"\`, \`    \${args.isDisabled !== undefined ? \`:isDisabled="\${args.isDisabled}"\` : ""}\`, \`    \${args.className ? \`className="\${args.className}"\` : ""}\`, \`    v-model="modelValue"\`, "  ></Textarea>", "</template>"].filter(Boolean).join("\\n").trim();
        }
      }
    }
  }
}`,...(g=(u=s.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var h,b,$;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:'{\n  name: "輸入框狀態",\n  args: {\n    label: "Label",\n    placeholder: "Placeholder",\n    limit: 30,\n    hintPrompt: {\n      error: "",\n      description: () => h(StatusIndicator, {\n        themeColor: "neutral",\n        variant: "text",\n        size: "medium",\n        isShowDot: false\n      }, "Prompt message")\n    },\n    hintError: {\n      error: () => h(StatusIndicator, {\n        themeColor: "error",\n        variant: "text",\n        size: "medium",\n        prefix: "SvgErrorCircle",\n        isShowDot: false\n      }, "Error message"),\n      description: ""\n    },\n    hint: {\n      error: "",\n      description: ""\n    },\n    isDisabled: false,\n    className: "",\n    modelValue: "Type something"\n  },\n  render: args => ({\n    components: {\n      Textarea\n    },\n    setup() {\n      return {\n        args,\n        StatusIndicator,\n        Icon\n      };\n    },\n    template: `\n      <div style="display: flex; flex-direction: column; gap:16px">\n        \n        <Textarea\n            :label="args.label"\n            :placeholder="args.placeholder"\n            :limit="args.limit"\n            :hint="args.hintPrompt"\n            :isDisabled="args.isDisabled"\n            :className="args.className"\n            v-model="args.modelValue"\n        ></Textarea>\n        \n        <Textarea\n          :label="args.label"\n          :placeholder="args.placeholder"\n          :limit="args.limit"\n          :hint="args.hintError"\n          :isDisabled="args.isDisabled"\n          :className="args.className"\n          v-model="args.modelValue"\n        ></Textarea>\n\n        <Textarea\n          :label="args.label"\n          :placeholder="args.placeholder"\n          :limit="args.limit"\n          :hint="args.hint"\n          :isDisabled="true"\n          :className="args.className"\n          v-model="args.modelValue"\n        ></Textarea>\n      </div>`\n  }),\n  // 控制 controls 中能控制的參數\n  parameters: {\n    controls: {\n      exclude: ["hint", "isDisabled"]\n    },\n    docs: {\n      source: {\n        transform: (src, storyContext) => {\n          const {\n            args\n          } = storyContext;\n          return [`<script setup>`, "import { ref, h } from \\"vue\\";", `import { Textarea, Icon, StatusIndicator } from "@ded-wds-vue/ui";`, "const hintPrompt = {", `  error: "",`, `  description: () => h(StatusIndicator, {`, `    themeColor: "neutral",`, `    variant: "text",`, `    size: "medium",`, `    isShowDot: false`, `  }, "Prompt message")`, "};", ``, "const hintError = {", `  error: () => h(StatusIndicator, {`, `    themeColor: "error",`, `    variant: "text",`, `    size: "medium",`, `    prefix: "SvgErrorCircle",`, `    isShowDot: false`, `  }, "Error message"),`, `  description: ""`, "};", ``, "const hint = {", `  error: "",`, `  description: ""`, "};", `const modelValue = ref("${args.modelValue}");`, `<\/script>`, "", "<template>", "  <Textarea", `    ${args.label ? `label="${args.label}"` : ""}`, `    ${args.placeholder ? `placeholder="${args.placeholder}"` : ""}`, `    ${args.limit !== undefined ? `:limit="${args.limit}"` : ""}`, `    :hint="hintPrompt"`, `    ${args.isDisabled !== undefined ? `:isDisabled="${args.isDisabled}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, `    v-model="modelValue"`, "  ></Textarea>", "  <Textarea", `    ${args.label ? `label="${args.label}"` : ""}`, `    ${args.placeholder ? `placeholder="${args.placeholder}"` : ""}`, `    ${args.limit !== undefined ? `:limit="${args.limit}"` : ""}`, `    :hint="hintError"`, `    ${args.isDisabled !== undefined ? `:isDisabled="${args.isDisabled}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, `    v-model="modelValue"`, "  ></Textarea>", "  <Textarea", `    ${args.label ? `label="${args.label}"` : ""}`, `    ${args.placeholder ? `placeholder="${args.placeholder}"` : ""}`, `    ${args.limit !== undefined ? `:limit="${args.limit}"` : ""}`, `    :hint="hint"`, `    v-model="modelValue"`, "  ></Textarea>", "</template>"].filter(Boolean).join("\\n").trim();\n        }\n      }\n    }\n  }\n}',...($=(b=t.parameters)==null?void 0:b.docs)==null?void 0:$.source}}};const y=["TextareaDefault","TextareaLimit","TextareaStatus"];export{l as TextareaDefault,s as TextareaLimit,t as TextareaStatus,y as __namedExportsOrder,V as default};

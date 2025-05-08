import{p as k,u as j,h as z,c as s,d as h,a as g,n as i,t as o,v as A,G as L,s as F,F as d,j as $,l as D,f as T,o as l,y as v}from"./vue.esm-bundler-CIcyrfsw.js";import{v as M}from"./v4-CtRu48qb.js";import{_ as O}from"./Icon-DjPu9lgd.js";import{_ as b}from"./StatusIndicator-CpSCVErv.js";const U=["maxlength","placeholder"],n=Object.assign({inheritAttrs:!1},{__name:"Textarea",props:k({label:{type:String},placeholder:{type:String,default:"Placeholder"},limit:{type:Number,default:30},hint:{type:Object,default:()=>({error:"",description:""})},isDisabled:{type:Boolean,default:!1},className:{type:String,default:""}},{modelValue:{},modelModifiers:{}}),emits:["update:modelValue"],setup(r){const a=r,f=`${M()}-textarea`,t=j(r,"modelValue"),p=z(()=>a.hint.error?"error":a.hint.description?"desc":"");return(_,x)=>(l(),s("div",{class:i(["ded-textarea-container",{[a.className]:!!a.className}])},[a.label?(l(),s("label",{key:0,class:i(["ded-textarea-label",[{"ded-textarea-disable":a.isDisabled}]]),for:f},o(a.label),3)):h("",!0),g("div",{class:i(["ded-textarea-group",[{"ded-textarea-disable":a.isDisabled},p.value?`ded-textarea-border-${p.value}`:""]])},[A(g("textarea",F({id:f,"onUpdate:modelValue":x[0]||(x[0]=B=>t.value=B),class:["ded-textarea",[{"ded-textarea-disable":a.isDisabled}]],maxlength:a.limit>0?a.limit:void 0,placeholder:a.placeholder},_.$attrs),null,16,U),[[L,t.value]]),t.value.length>0&&a.limit!==0?(l(),s("small",{key:0,class:i(["ded-textarea-hint-count",[{"ded-textarea-disable":a.isDisabled}]])},o(t.value.length>0?`${t.value.length} / ${a.limit}`:""),3)):h("",!0)],2),g("small",{class:i(["ded-textarea-hint",[{"ded-textarea-disable":a.isDisabled},`ded-textarea-hint-${p.value}`]])},[a.hint.error?(l(),s(d,{key:0},[typeof a.hint.error=="function"?(l(),$(D(a.hint.error),{key:0})):(l(),s(d,{key:1},[T(o(a.hint.error),1)],64))],64)):a.hint.description?(l(),s(d,{key:1},[typeof a.hint.description=="function"?(l(),$(D(a.hint.description),{key:0})):(l(),s(d,{key:1},[T(o(a.hint.description),1)],64))],64)):h("",!0)],2)],2))}});n.__docgenInfo={exportName:"default",displayName:"Textarea",description:"",tags:{},props:[{name:"label",type:{name:"string"}},{name:"placeholder",type:{name:"string"},defaultValue:{func:!1,value:'"Placeholder"'}},{name:"limit",type:{name:"number"},defaultValue:{func:!1,value:"30"}},{name:"hint",type:{name:"object"},defaultValue:{func:!1,value:`{
  error: "",
  description: ""
}`}},{name:"isDisabled",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"className",type:{name:"string"},defaultValue:{func:!1,value:'""'}}],sourceFiles:["/home/runner/work/DED-WDS_VUE/DED-WDS_VUE/libs/src/ui/element/Textarea/Textarea.vue"]};const J={title:"Component/Textarea",component:n,tags:["autodocs"],argTypes:{label:{description:"標題",control:{type:"text"}},placeholder:{description:"輸入提示",control:{type:"text"}},limit:{description:"字數限制",control:{type:"number"}},hint:{description:"提示訊息",control:{type:"object"},table:{type:{summary:"{ error: string | VNode; description: string | VNode; }"}}},isDisabled:{description:"是否禁用",control:{type:"boolean"}},className:{description:"客製化樣式",control:{type:"text"}},modelValue:{description:"輸入值",control:{type:"text"},table:{type:{summary:"string"},category:"v-model"}}},parameters:{docs:{title:"Textarea",description:{component:"Textarea 組件的呈現及說明。"}}}},m={name:"預設項目",args:{label:"Label",placeholder:"Placeholder",limit:0,hint:{error:"",description:""},isDisabled:!1,className:"",modelValue:"Type something"},render:r=>({components:{Textarea:n},setup(){return{args:r}},template:`
      <Textarea
        :label="args.label"
        :placeholder="args.placeholder"
        :limit="args.limit"
        :hint="args.hint"
        :isDisabled="args.isDisabled"
        :className="args.className"
        v-model="args.modelValue"
      ></Textarea>`}),parameters:{controls:{},docs:{source:{transform:(r,a)=>{const{args:e}=a;return["<script setup>",'import { ref, h } from "vue";','import { Textarea } from "@ded-wds-vue/ui";',"const hint = {",'  error: "",','  description: ""',"};",`const modelValue = ref("${e.modelValue}");`,"<\/script>","","<template>","  <Textarea",`    ${e.label?`label="${e.label}"`:""}`,`    ${e.placeholder?`placeholder="${e.placeholder}"`:""}`,`    ${e.limit!==void 0?`:limit="${e.limit}"`:""}`,'    :hint="hint"',`    ${e.isDisabled!==void 0?`:isDisabled="${e.isDisabled}"`:""}`,`    ${e.className?`className="${e.className}"`:""}`,'    v-model="modelValue"',"  ></Textarea>","</template>"].filter(Boolean).join(`
`).trim()}}}}},c={name:"字數限制",args:{label:"Label",placeholder:"Placeholder",limit:30,hint:{error:"",description:""},isDisabled:!1,className:"",modelValue:"Type something"},render:r=>({components:{Textarea:n},setup(){return{args:r}},template:`
      <Textarea
        :label="args.label"
        :placeholder="args.placeholder"
        :limit="args.limit"
        :hint="args.hint"
        :isDisabled="args.isDisabled"
        :className="args.className"
        v-model="args.modelValue"
      ></Textarea>`}),parameters:{controls:{},docs:{source:{transform:(r,a)=>{const{args:e}=a;return["<script setup>",'import { ref, h } from "vue";','import { Textarea } from "@ded-wds-vue/ui";',"const hint = {",'  error: "",','  description: ""',"};",`const modelValue = ref("${e.modelValue}");`,"<\/script>","","<template>","  <Textarea",`    ${e.label?`label="${e.label}"`:""}`,`    ${e.placeholder?`placeholder="${e.placeholder}"`:""}`,`    ${e.limit!==void 0?`:limit="${e.limit}"`:""}`,'    :hint="hint"',`    ${e.isDisabled!==void 0?`:isDisabled="${e.isDisabled}"`:""}`,`    ${e.className?`className="${e.className}"`:""}`,'    v-model="modelValue"',"  ></Textarea>","</template>"].filter(Boolean).join(`
`).trim()}}}}},u={name:"輸入框狀態",args:{label:"Label",placeholder:"Placeholder",limit:30,hintPrompt:{error:"",description:()=>v(b,{themeColor:"neutral",variant:"text",size:"medium",isShowDot:!1},"Prompt message")},hintError:{error:()=>v(b,{themeColor:"error",variant:"text",size:"medium",prefix:"SvgErrorCircle",isShowDot:!1},"Error message"),description:""},hint:{error:"",description:""},isDisabled:!1,className:"",modelValue:"Type something"},render:r=>({components:{Textarea:n},setup(){return{args:r,StatusIndicator:b,Icon:O}},template:`
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
      </div>`}),parameters:{controls:{exclude:["hint","isDisabled"]},docs:{source:{transform:(r,a)=>{const{args:e}=a;return["<script setup>",'import { ref, h } from "vue";','import { Textarea, Icon, StatusIndicator } from "@ded-wds-vue/ui";',"const hintPrompt = {",'  error: "",',"  description: () => h(StatusIndicator, {",'    themeColor: "neutral",','    variant: "text",','    size: "medium",',"    isShowDot: false",'  }, "Prompt message")',"};","","const hintError = {","  error: () => h(StatusIndicator, {",'    themeColor: "error",','    variant: "text",','    size: "medium",','    prefix: "SvgErrorCircle",',"    isShowDot: false",'  }, "Error message"),','  description: ""',"};","","const hint = {",'  error: "",','  description: ""',"};",`const modelValue = ref("${e.modelValue}");`,"<\/script>","","<template>","  <Textarea",`    ${e.label?`label="${e.label}"`:""}`,`    ${e.placeholder?`placeholder="${e.placeholder}"`:""}`,`    ${e.limit!==void 0?`:limit="${e.limit}"`:""}`,'    :hint="hintPrompt"',`    ${e.isDisabled!==void 0?`:isDisabled="${e.isDisabled}"`:""}`,`    ${e.className?`className="${e.className}"`:""}`,'    v-model="modelValue"',"  ></Textarea>","  <Textarea",`    ${e.label?`label="${e.label}"`:""}`,`    ${e.placeholder?`placeholder="${e.placeholder}"`:""}`,`    ${e.limit!==void 0?`:limit="${e.limit}"`:""}`,'    :hint="hintError"',`    ${e.isDisabled!==void 0?`:isDisabled="${e.isDisabled}"`:""}`,`    ${e.className?`className="${e.className}"`:""}`,'    v-model="modelValue"',"  ></Textarea>","  <Textarea",`    ${e.label?`label="${e.label}"`:""}`,`    ${e.placeholder?`placeholder="${e.placeholder}"`:""}`,`    ${e.limit!==void 0?`:limit="${e.limit}"`:""}`,'    :hint="hint"','    v-model="modelValue"',"  ></Textarea>","</template>"].filter(Boolean).join(`
`).trim()}}}}};var N,V,y;m.parameters={...m.parameters,docs:{...(N=m.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
}`,...(y=(V=m.parameters)==null?void 0:V.docs)==null?void 0:y.source}}};var S,C,E;c.parameters={...c.parameters,docs:{...(S=c.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(E=(C=c.parameters)==null?void 0:C.docs)==null?void 0:E.source}}};var P,I,w;u.parameters={...u.parameters,docs:{...(P=u.parameters)==null?void 0:P.docs,source:{originalSource:'{\n  name: "輸入框狀態",\n  args: {\n    label: "Label",\n    placeholder: "Placeholder",\n    limit: 30,\n    hintPrompt: {\n      error: "",\n      description: () => h(StatusIndicator, {\n        themeColor: "neutral",\n        variant: "text",\n        size: "medium",\n        isShowDot: false\n      }, "Prompt message")\n    },\n    hintError: {\n      error: () => h(StatusIndicator, {\n        themeColor: "error",\n        variant: "text",\n        size: "medium",\n        prefix: "SvgErrorCircle",\n        isShowDot: false\n      }, "Error message"),\n      description: ""\n    },\n    hint: {\n      error: "",\n      description: ""\n    },\n    isDisabled: false,\n    className: "",\n    modelValue: "Type something"\n  },\n  render: args => ({\n    components: {\n      Textarea\n    },\n    setup() {\n      return {\n        args,\n        StatusIndicator,\n        Icon\n      };\n    },\n    template: `\n      <div style="display: flex; flex-direction: column; gap:16px">\n        \n        <Textarea\n            :label="args.label"\n            :placeholder="args.placeholder"\n            :limit="args.limit"\n            :hint="args.hintPrompt"\n            :isDisabled="args.isDisabled"\n            :className="args.className"\n            v-model="args.modelValue"\n        ></Textarea>\n        \n        <Textarea\n          :label="args.label"\n          :placeholder="args.placeholder"\n          :limit="args.limit"\n          :hint="args.hintError"\n          :isDisabled="args.isDisabled"\n          :className="args.className"\n          v-model="args.modelValue"\n        ></Textarea>\n\n        <Textarea\n          :label="args.label"\n          :placeholder="args.placeholder"\n          :limit="args.limit"\n          :hint="args.hint"\n          :isDisabled="true"\n          :className="args.className"\n          v-model="args.modelValue"\n        ></Textarea>\n      </div>`\n  }),\n  // 控制 controls 中能控制的參數\n  parameters: {\n    controls: {\n      exclude: ["hint", "isDisabled"]\n    },\n    docs: {\n      source: {\n        transform: (src, storyContext) => {\n          const {\n            args\n          } = storyContext;\n          return [`<script setup>`, "import { ref, h } from \\"vue\\";", `import { Textarea, Icon, StatusIndicator } from "@ded-wds-vue/ui";`, "const hintPrompt = {", `  error: "",`, `  description: () => h(StatusIndicator, {`, `    themeColor: "neutral",`, `    variant: "text",`, `    size: "medium",`, `    isShowDot: false`, `  }, "Prompt message")`, "};", ``, "const hintError = {", `  error: () => h(StatusIndicator, {`, `    themeColor: "error",`, `    variant: "text",`, `    size: "medium",`, `    prefix: "SvgErrorCircle",`, `    isShowDot: false`, `  }, "Error message"),`, `  description: ""`, "};", ``, "const hint = {", `  error: "",`, `  description: ""`, "};", `const modelValue = ref("${args.modelValue}");`, `<\/script>`, "", "<template>", "  <Textarea", `    ${args.label ? `label="${args.label}"` : ""}`, `    ${args.placeholder ? `placeholder="${args.placeholder}"` : ""}`, `    ${args.limit !== undefined ? `:limit="${args.limit}"` : ""}`, `    :hint="hintPrompt"`, `    ${args.isDisabled !== undefined ? `:isDisabled="${args.isDisabled}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, `    v-model="modelValue"`, "  ></Textarea>", "  <Textarea", `    ${args.label ? `label="${args.label}"` : ""}`, `    ${args.placeholder ? `placeholder="${args.placeholder}"` : ""}`, `    ${args.limit !== undefined ? `:limit="${args.limit}"` : ""}`, `    :hint="hintError"`, `    ${args.isDisabled !== undefined ? `:isDisabled="${args.isDisabled}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, `    v-model="modelValue"`, "  ></Textarea>", "  <Textarea", `    ${args.label ? `label="${args.label}"` : ""}`, `    ${args.placeholder ? `placeholder="${args.placeholder}"` : ""}`, `    ${args.limit !== undefined ? `:limit="${args.limit}"` : ""}`, `    :hint="hint"`, `    v-model="modelValue"`, "  ></Textarea>", "</template>"].filter(Boolean).join("\\n").trim();\n        }\n      }\n    }\n  }\n}',...(w=(I=u.parameters)==null?void 0:I.docs)==null?void 0:w.source}}};const K=["TextareaDefault","TextareaLimit","TextareaStatus"];export{m as TextareaDefault,c as TextareaLimit,u as TextareaStatus,K as __namedExportsOrder,J as default};

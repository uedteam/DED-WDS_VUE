import{p as A,L as F,g as t,u as M,c as s,d as g,a as b,n,t as m,v as O,G as U,s as W,F as c,j as D,l as v,f as T,o as l,y as N}from"./vue.esm-bundler-CRlgvgXF.js";import{v as G}from"./v4-CtRu48qb.js";import{_ as R}from"./Icon-CUK9ssyM.js";import{_ as f}from"./StatusIndicator-CbKma47Y.js";const q=["for"],H=["id","maxlength","placeholder"],i=Object.assign({inheritAttrs:!1},{__name:"Textarea",props:A({label:String,placeholder:{type:String,default:"Placeholder"},limit:{type:Number,default:30},hint:{type:Object,default:()=>({error:"",description:""})},isDisabled:{type:Boolean,default:!1},className:{type:String,default:""}},{modelValue:{},modelModifiers:{}}),emits:["update:modelValue"],setup(r){const a=r,e=F(G()),x=t(()=>`${e.value}-textarea`),o=M(r,"modelValue"),d=t(()=>a.hint.error?"error":a.hint.description?"desc":""),B=t(()=>({[a.className]:!!a.className})),k=t(()=>({"ded-textarea-disable":a.isDisabled,[`ded-textarea-border-${d.value}`]:d.value})),j=t(()=>({"ded-textarea-disable":a.isDisabled,[`ded-textarea-hint-${d.value}`]:d.value}));return(z,$)=>(l(),s("div",{class:n(["ded-textarea-container",B.value])},[a.label?(l(),s("label",{key:0,class:n(["ded-textarea-label",{"ded-textarea-disable":a.isDisabled}]),for:x.value},m(a.label),11,q)):g("",!0),b("div",{class:n(["ded-textarea-group",k.value])},[O(b("textarea",W({id:x.value,"onUpdate:modelValue":$[0]||($[0]=L=>o.value=L),class:["ded-textarea",{"ded-textarea-disable":a.isDisabled}],maxlength:a.limit>0?a.limit:void 0,placeholder:a.placeholder},z.$attrs),null,16,H),[[U,o.value]]),o.value.length>0&&a.limit!==0?(l(),s("small",{key:0,class:n(["ded-textarea-hint-count",{"ded-textarea-disable":a.isDisabled}])},m(`${o.value.length} / ${a.limit}`),3)):g("",!0)],2),b("small",{class:n(["ded-textarea-hint",j.value])},[a.hint.error?(l(),s(c,{key:0},[typeof a.hint.error=="function"?(l(),D(v(a.hint.error),{key:0})):(l(),s(c,{key:1},[T(m(a.hint.error),1)],64))],64)):a.hint.description?(l(),s(c,{key:1},[typeof a.hint.description=="function"?(l(),D(v(a.hint.description),{key:0})):(l(),s(c,{key:1},[T(m(a.hint.description),1)],64))],64)):g("",!0)],2)],2))}});i.__docgenInfo={exportName:"default",displayName:"Textarea",description:"",tags:{},props:[{name:"label",type:{name:"string"}},{name:"placeholder",type:{name:"string"},defaultValue:{func:!1,value:"'Placeholder'"}},{name:"limit",type:{name:"number"},defaultValue:{func:!1,value:"30"}},{name:"hint",type:{name:"object"},defaultValue:{func:!1,value:`{
  error: '',
  description: ''
}`}},{name:"isDisabled",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"className",type:{name:"string"},defaultValue:{func:!1,value:"''"}}],sourceFiles:["/home/runner/work/DED-WDS_VUE/DED-WDS_VUE/libs/src/ui/element/Textarea/Textarea.vue"]};const Y={title:"Component/Textarea",component:i,tags:["autodocs"],argTypes:{label:{description:"標題",control:{type:"text"}},placeholder:{description:"輸入提示",control:{type:"text"}},limit:{description:"字數限制",control:{type:"number"}},hint:{description:"提示訊息",control:{type:"object"},table:{type:{summary:"{ error: string | VNode; description: string | VNode; }"}}},isDisabled:{description:"是否禁用",control:{type:"boolean"}},className:{description:"客製化樣式",control:{type:"text"}},modelValue:{description:"輸入值",control:{type:"text"},table:{type:{summary:"string"},category:"v-model"}}},parameters:{docs:{title:"Textarea",description:{component:"Textarea 組件的呈現及說明。"}}}},u={name:"預設項目",args:{label:"Label",placeholder:"Placeholder",limit:0,hint:{error:"",description:""},isDisabled:!1,className:"",modelValue:"Type something"},render:r=>({components:{Textarea:i},setup(){return{args:r}},template:`
      <Textarea
        :label="args.label"
        :placeholder="args.placeholder"
        :limit="args.limit"
        :hint="args.hint"
        :isDisabled="args.isDisabled"
        :className="args.className"
        v-model="args.modelValue"
      ></Textarea>`}),parameters:{controls:{},docs:{source:{transform:(r,a)=>{const{args:e}=a;return["<script setup>",'import { ref, h } from "vue";','import { Textarea } from "@ded-wds-vue/ui";',"const hint = {",'  error: "",','  description: ""',"};",`const modelValue = ref("${e.modelValue}");`,"<\/script>","","<template>","  <Textarea",`    ${e.label?`label="${e.label}"`:""}`,`    ${e.placeholder?`placeholder="${e.placeholder}"`:""}`,`    ${e.limit!==void 0?`:limit="${e.limit}"`:""}`,'    :hint="hint"',`    ${e.isDisabled!==void 0?`:isDisabled="${e.isDisabled}"`:""}`,`    ${e.className?`className="${e.className}"`:""}`,'    v-model="modelValue"',"  ></Textarea>","</template>"].filter(Boolean).join(`
`).trim()}}}}},p={name:"字數限制",args:{label:"Label",placeholder:"Placeholder",limit:30,hint:{error:"",description:""},isDisabled:!1,className:"",modelValue:"Type something"},render:r=>({components:{Textarea:i},setup(){return{args:r}},template:`
      <Textarea
        :label="args.label"
        :placeholder="args.placeholder"
        :limit="args.limit"
        :hint="args.hint"
        :isDisabled="args.isDisabled"
        :className="args.className"
        v-model="args.modelValue"
      ></Textarea>`}),parameters:{controls:{},docs:{source:{transform:(r,a)=>{const{args:e}=a;return["<script setup>",'import { ref, h } from "vue";','import { Textarea } from "@ded-wds-vue/ui";',"const hint = {",'  error: "",','  description: ""',"};",`const modelValue = ref("${e.modelValue}");`,"<\/script>","","<template>","  <Textarea",`    ${e.label?`label="${e.label}"`:""}`,`    ${e.placeholder?`placeholder="${e.placeholder}"`:""}`,`    ${e.limit!==void 0?`:limit="${e.limit}"`:""}`,'    :hint="hint"',`    ${e.isDisabled!==void 0?`:isDisabled="${e.isDisabled}"`:""}`,`    ${e.className?`className="${e.className}"`:""}`,'    v-model="modelValue"',"  ></Textarea>","</template>"].filter(Boolean).join(`
`).trim()}}}}},h={name:"輸入框狀態",args:{label:"Label",placeholder:"Placeholder",limit:30,hintPrompt:{error:"",description:()=>N(f,{themeColor:"neutral",variant:"text",size:"medium",isShowDot:!1},"Prompt message")},hintError:{error:()=>N(f,{themeColor:"error",variant:"text",size:"medium",prefix:"SvgErrorCircle",isShowDot:!1},"Error message"),description:""},hint:{error:"",description:""},isDisabled:!1,className:"",modelValue:"Type something"},render:r=>({components:{Textarea:i},setup(){return{args:r,StatusIndicator:f,Icon:R}},template:`
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
`).trim()}}}}};var V,y,S;u.parameters={...u.parameters,docs:{...(V=u.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
}`,...(S=(y=u.parameters)==null?void 0:y.docs)==null?void 0:S.source}}};var C,E,P;p.parameters={...p.parameters,docs:{...(C=p.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(P=(E=p.parameters)==null?void 0:E.docs)==null?void 0:P.source}}};var _,w,I;h.parameters={...h.parameters,docs:{...(_=h.parameters)==null?void 0:_.docs,source:{originalSource:'{\n  name: "輸入框狀態",\n  args: {\n    label: "Label",\n    placeholder: "Placeholder",\n    limit: 30,\n    hintPrompt: {\n      error: "",\n      description: () => h(StatusIndicator, {\n        themeColor: "neutral",\n        variant: "text",\n        size: "medium",\n        isShowDot: false\n      }, "Prompt message")\n    },\n    hintError: {\n      error: () => h(StatusIndicator, {\n        themeColor: "error",\n        variant: "text",\n        size: "medium",\n        prefix: "SvgErrorCircle",\n        isShowDot: false\n      }, "Error message"),\n      description: ""\n    },\n    hint: {\n      error: "",\n      description: ""\n    },\n    isDisabled: false,\n    className: "",\n    modelValue: "Type something"\n  },\n  render: args => ({\n    components: {\n      Textarea\n    },\n    setup() {\n      return {\n        args,\n        StatusIndicator,\n        Icon\n      };\n    },\n    template: `\n      <div style="display: flex; flex-direction: column; gap:16px">\n        \n        <Textarea\n            :label="args.label"\n            :placeholder="args.placeholder"\n            :limit="args.limit"\n            :hint="args.hintPrompt"\n            :isDisabled="args.isDisabled"\n            :className="args.className"\n            v-model="args.modelValue"\n        ></Textarea>\n        \n        <Textarea\n          :label="args.label"\n          :placeholder="args.placeholder"\n          :limit="args.limit"\n          :hint="args.hintError"\n          :isDisabled="args.isDisabled"\n          :className="args.className"\n          v-model="args.modelValue"\n        ></Textarea>\n\n        <Textarea\n          :label="args.label"\n          :placeholder="args.placeholder"\n          :limit="args.limit"\n          :hint="args.hint"\n          :isDisabled="true"\n          :className="args.className"\n          v-model="args.modelValue"\n        ></Textarea>\n      </div>`\n  }),\n  // 控制 controls 中能控制的參數\n  parameters: {\n    controls: {\n      exclude: ["hint", "isDisabled"]\n    },\n    docs: {\n      source: {\n        transform: (src, storyContext) => {\n          const {\n            args\n          } = storyContext;\n          return [`<script setup>`, "import { ref, h } from \\"vue\\";", `import { Textarea, Icon, StatusIndicator } from "@ded-wds-vue/ui";`, "const hintPrompt = {", `  error: "",`, `  description: () => h(StatusIndicator, {`, `    themeColor: "neutral",`, `    variant: "text",`, `    size: "medium",`, `    isShowDot: false`, `  }, "Prompt message")`, "};", ``, "const hintError = {", `  error: () => h(StatusIndicator, {`, `    themeColor: "error",`, `    variant: "text",`, `    size: "medium",`, `    prefix: "SvgErrorCircle",`, `    isShowDot: false`, `  }, "Error message"),`, `  description: ""`, "};", ``, "const hint = {", `  error: "",`, `  description: ""`, "};", `const modelValue = ref("${args.modelValue}");`, `<\/script>`, "", "<template>", "  <Textarea", `    ${args.label ? `label="${args.label}"` : ""}`, `    ${args.placeholder ? `placeholder="${args.placeholder}"` : ""}`, `    ${args.limit !== undefined ? `:limit="${args.limit}"` : ""}`, `    :hint="hintPrompt"`, `    ${args.isDisabled !== undefined ? `:isDisabled="${args.isDisabled}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, `    v-model="modelValue"`, "  ></Textarea>", "  <Textarea", `    ${args.label ? `label="${args.label}"` : ""}`, `    ${args.placeholder ? `placeholder="${args.placeholder}"` : ""}`, `    ${args.limit !== undefined ? `:limit="${args.limit}"` : ""}`, `    :hint="hintError"`, `    ${args.isDisabled !== undefined ? `:isDisabled="${args.isDisabled}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, `    v-model="modelValue"`, "  ></Textarea>", "  <Textarea", `    ${args.label ? `label="${args.label}"` : ""}`, `    ${args.placeholder ? `placeholder="${args.placeholder}"` : ""}`, `    ${args.limit !== undefined ? `:limit="${args.limit}"` : ""}`, `    :hint="hint"`, `    v-model="modelValue"`, "  ></Textarea>", "</template>"].filter(Boolean).join("\\n").trim();\n        }\n      }\n    }\n  }\n}',...(I=(w=h.parameters)==null?void 0:w.docs)==null?void 0:I.source}}};const Z=["TextareaDefault","TextareaLimit","TextareaStatus"];export{u as TextareaDefault,p as TextareaLimit,h as TextareaStatus,Z as __namedExportsOrder,Y as default};

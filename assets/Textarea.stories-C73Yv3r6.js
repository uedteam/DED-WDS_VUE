import{p as A,u as L,g as F,c as s,d as f,a as $,n as o,t as c,x as z,G as M,s as U,F as u,j as D,l as T,f as N,o as l,h as p}from"./vue.esm-bundler-CC1hEtM-.js";import{_ as v}from"./Icon-bEM3fLxI.js";import{_ as y}from"./StatusIndicator-DxwkyRzJ.js";const O=["maxlength","placeholder"],m=Object.assign({inheritAttrs:!1},{__name:"Textarea",props:A({label:{type:String},placeholder:{type:String,default:"Placeholder"},limit:{type:Number,default:30},hint:{type:Object,default:()=>({error:"",description:""})},isDisabled:{type:Boolean,default:!1},className:{type:String,default:""}},{modelValue:{},modelModifiers:{}}),emits:["update:modelValue"],setup(r){const a=r,n=`${crypto.randomUUID()}-textarea`,t=L(r,"modelValue"),i=F(()=>a.hint.error?"error":a.hint.description?"desc":"");return(k,x)=>(l(),s("div",{class:o(["ded-textarea-container",{[a.className]:!!a.className}])},[a.label?(l(),s("label",{key:0,class:o(["ded-textarea-label",[{"ded-textarea-disable":a.isDisabled}]]),for:n},c(a.label),3)):f("",!0),$("div",{class:o(["ded-textarea-group",[{"ded-textarea-disable":a.isDisabled},i.value?`ded-textarea-border-${i.value}`:""]])},[z($("textarea",U({id:n,"onUpdate:modelValue":x[0]||(x[0]=w=>t.value=w),class:["ded-textarea",[{"ded-textarea-disable":a.isDisabled}]],maxlength:a.limit>0?a.limit:void 0,placeholder:a.placeholder},k.$attrs),null,16,O),[[M,t.value]]),t.value.length>0&&a.limit!==0?(l(),s("small",{key:0,class:o(["ded-textarea-hint-count",[{"ded-textarea-disable":a.isDisabled}]])},c(t.value.length>0?`${t.value.length} / ${a.limit}`:""),3)):f("",!0)],2),$("small",{class:o(["ded-textarea-hint",[{"ded-textarea-disable":a.isDisabled},`ded-textarea-hint-${i.value}`]])},[a.hint.error?(l(),s(u,{key:0},[typeof a.hint.error=="function"?(l(),D(T(a.hint.error),{key:0})):(l(),s(u,{key:1},[N(c(a.hint.error),1)],64))],64)):a.hint.description?(l(),s(u,{key:1},[typeof a.hint.description=="function"?(l(),D(T(a.hint.description),{key:0})):(l(),s(u,{key:1},[N(c(a.hint.description),1)],64))],64)):f("",!0)],2)],2))}});m.__docgenInfo={exportName:"default",displayName:"Textarea",description:"",tags:{},props:[{name:"label",type:{name:"string"}},{name:"placeholder",type:{name:"string"},defaultValue:{func:!1,value:'"Placeholder"'}},{name:"limit",type:{name:"number"},defaultValue:{func:!1,value:"30"}},{name:"hint",type:{name:"object"},defaultValue:{func:!1,value:`{\r
  error: "",\r
  description: ""\r
}`}},{name:"isDisabled",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"className",type:{name:"string"},defaultValue:{func:!1,value:'""'}}],sourceFiles:["D:/98_測試/up/DED-WDS_VUE/libs/src/ui/element/Textarea/Textarea.vue"]};function d(r){return`{
      error: "${r.error||""}",
      description: "${r.description||""}"
}`}const H={title:"Component/Textarea",component:m,tags:["autodocs"],argTypes:{label:{description:"標題",control:{type:"text"}},placeholder:{description:"輸入提示",control:{type:"text"}},limit:{description:"字數限制",control:{type:"number"}},hint:{description:"提示訊息",control:{type:"object"},table:{type:{summary:"{ error: string | VNode; description: string | VNode; }"}}},isDisabled:{description:"是否禁用",control:{type:"boolean"}},className:{description:"客製化樣式",control:{type:"text"}},modelValue:{description:"輸入值",control:{type:"text"},table:{type:{summary:"string"},category:"v-model"}}},parameters:{docs:{title:"Textarea",description:{component:"Textarea 組件的呈現及說明。"}}}},g={name:"預設項目",args:{label:"Label",placeholder:"Placeholder",limit:0,hint:{error:"",description:""},isDisabled:!1,className:"",modelValue:"Type something"},render:r=>({components:{Textarea:m},setup(){return{args:r}},template:`
      <Textarea
        :label="args.label"
        :placeholder="args.placeholder"
        :limit="args.limit"
        :hint="args.hint"
        :isDisabled="args.isDisabled"
        :className="args.className"
        v-model="args.modelValue"
      ></Textarea>`}),parameters:{controls:{},docs:{source:{transform:(r,a)=>{const{args:e}=a;return["<script setup>",'import { ref, h } from "vue";','import { Textarea } from "@ded-wds-vue/ui";',`const hint = ${d(e.hint)};`,`const modelValue = ref("${e.modelValue}");`,"<\/script>","","<template>","  <Textarea",`    ${e.label?`label="${e.label}"`:""}`,`    ${e.placeholder?`placeholder="${e.placeholder}"`:""}`,`    ${e.limit!==void 0?`:limit="${e.limit}"`:""}`,'    :hint="hint"',`    ${e.isDisabled!==void 0?`:isDisabled="${e.isDisabled}"`:""}`,`    ${e.className?`className="${e.className}"`:""}`,'    v-model="modelValue"',"  ></Textarea>","</template>"].filter(Boolean).join(`
`).trim()}}}}},h={name:"字數限制",args:{label:"Label",placeholder:"Placeholder",limit:30,hint:{error:"",description:""},isDisabled:!1,className:"",modelValue:"Type something"},render:r=>({components:{Textarea:m},setup(){return{args:r}},template:`
      <Textarea
        :label="args.label"
        :placeholder="args.placeholder"
        :limit="args.limit"
        :hint="args.hint"
        :isDisabled="args.isDisabled"
        :className="args.className"
        v-model="args.modelValue"
      ></Textarea>`}),parameters:{controls:{},docs:{source:{transform:(r,a)=>{const{args:e}=a;return["<script setup>",'import { ref, h } from "vue";','import { Textarea } from "@ded-wds-vue/ui";',`const hint = ${d(e.hint)};`,`const modelValue = ref("${e.modelValue}");`,"<\/script>","","<template>","  <Textarea",`    ${e.label?`label="${e.label}"`:""}`,`    ${e.placeholder?`placeholder="${e.placeholder}"`:""}`,`    ${e.limit!==void 0?`:limit="${e.limit}"`:""}`,'    :hint="hint"',`    ${e.isDisabled!==void 0?`:isDisabled="${e.isDisabled}"`:""}`,`    ${e.className?`className="${e.className}"`:""}`,'    v-model="modelValue"',"  ></Textarea>","</template>"].filter(Boolean).join(`
`).trim()}}}}},b={name:"輸入框狀態",args:{label:"Label",placeholder:"Placeholder",limit:30,hintPrompt:{error:"",description:()=>p(y,{themeColor:"neutral",variant:"text",size:"medium",isShowDot:!1},"Prompt message")},hintError:{error:()=>p("div",{style:"display: flex; align-items: center; gap: 4px;"},[p(v,{name:"SvgErrorCircle",style:"color: red;",size:16}),p("span","Error message")]),description:""},hint:{error:"",description:""},isDisabled:!1,className:"",modelValue:"Type something"},render:r=>({components:{Textarea:m},setup(){return{args:r,StatusIndicator:y,Icon:v}},template:`
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
      </div>`}),parameters:{controls:{exclude:["hint","isDisabled"]},docs:{source:{transform:(r,a)=>{const{args:e}=a,n=d(e.hintPrompt),t=d(e.hintError),i=d(e.hint);return["<script setup>",'import { ref, h } from "vue";','import { Textarea, Icon, StatusIndicator } from "@ded-wds-vue/ui";',`const hintPrompt = ${n};`,`const hintError = ${t};`,`const hint = ${i};`,`const modelValue = ref("${e.modelValue}");`,"<\/script>","","<template>","  <Textarea",`    ${e.label?`label="${e.label}"`:""}`,`    ${e.placeholder?`placeholder="${e.placeholder}"`:""}`,`    ${e.limit!==void 0?`:limit="${e.limit}"`:""}`,'    :hint="hintPrompt"',`    ${e.isDisabled!==void 0?`:isDisabled="${e.isDisabled}"`:""}`,`    ${e.className?`className="${e.className}"`:""}`,'    v-model="modelValue"',"  ></Textarea>","  <Textarea",`    ${e.label?`label="${e.label}"`:""}`,`    ${e.placeholder?`placeholder="${e.placeholder}"`:""}`,`    ${e.limit!==void 0?`:limit="${e.limit}"`:""}`,'    :hint="hintError"',`    ${e.isDisabled!==void 0?`:isDisabled="${e.isDisabled}"`:""}`,`    ${e.className?`className="${e.className}"`:""}`,'    v-model="modelValue"',"  ></Textarea>","  <Textarea",`    ${e.label?`label="${e.label}"`:""}`,`    ${e.placeholder?`placeholder="${e.placeholder}"`:""}`,`    ${e.limit!==void 0?`:limit="${e.limit}"`:""}`,'    :hint="hint"',"  ></Textarea>","</template>"].filter(Boolean).join(`
`).trim()}}}}};var S,V,E;g.parameters={...g.parameters,docs:{...(S=g.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
          const dataSourceString = formatDataSource(args.hint);
          return [\`<script setup>\`, "import { ref, h } from \\"vue\\";", \`import { Textarea } from "@ded-wds-vue/ui";\`, \`const hint = \${dataSourceString};\`, \`const modelValue = ref("\${args.modelValue}");\`, \`<\/script>\`, "", "<template>", "  <Textarea", \`    \${args.label ? \`label="\${args.label}"\` : ""}\`, \`    \${args.placeholder ? \`placeholder="\${args.placeholder}"\` : ""}\`, \`    \${args.limit !== undefined ? \`:limit="\${args.limit}"\` : ""}\`, \`    :hint="hint"\`, \`    \${args.isDisabled !== undefined ? \`:isDisabled="\${args.isDisabled}"\` : ""}\`, \`    \${args.className ? \`className="\${args.className}"\` : ""}\`, \`    v-model="modelValue"\`, "  ></Textarea>", "</template>"].filter(Boolean).join("\\n").trim();
        }
      }
    }
  }
}`,...(E=(V=g.parameters)==null?void 0:V.docs)==null?void 0:E.source}}};var P,C,_;h.parameters={...h.parameters,docs:{...(P=h.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
          const dataSourceString = formatDataSource(args.hint);
          return [\`<script setup>\`, "import { ref, h } from \\"vue\\";", \`import { Textarea } from "@ded-wds-vue/ui";\`, \`const hint = \${dataSourceString};\`, \`const modelValue = ref("\${args.modelValue}");\`, \`<\/script>\`, "", "<template>", "  <Textarea", \`    \${args.label ? \`label="\${args.label}"\` : ""}\`, \`    \${args.placeholder ? \`placeholder="\${args.placeholder}"\` : ""}\`, \`    \${args.limit !== undefined ? \`:limit="\${args.limit}"\` : ""}\`, \`    :hint="hint"\`, \`    \${args.isDisabled !== undefined ? \`:isDisabled="\${args.isDisabled}"\` : ""}\`, \`    \${args.className ? \`className="\${args.className}"\` : ""}\`, \`    v-model="modelValue"\`, "  ></Textarea>", "</template>"].filter(Boolean).join("\\n").trim();
        }
      }
    }
  }
}`,...(_=(C=h.parameters)==null?void 0:C.docs)==null?void 0:_.source}}};var I,B,j;b.parameters={...b.parameters,docs:{...(I=b.parameters)==null?void 0:I.docs,source:{originalSource:'{\n  name: "輸入框狀態",\n  args: {\n    label: "Label",\n    placeholder: "Placeholder",\n    limit: 30,\n    hintPrompt: {\n      error: "",\n      description: () => h(StatusIndicator, {\n        themeColor: "neutral",\n        variant: "text",\n        size: "medium",\n        isShowDot: false\n      }, "Prompt message")\n    },\n    hintError: {\n      error: () => h("div", {\n        style: "display: flex; align-items: center; gap: 4px;"\n      }, [h(Icon, {\n        name: "SvgErrorCircle",\n        style: "color: red;",\n        size: 16\n      }), h("span", "Error message")]),\n      description: ""\n    },\n    hint: {\n      error: "",\n      description: ""\n    },\n    isDisabled: false,\n    className: "",\n    modelValue: "Type something"\n  },\n  render: args => ({\n    components: {\n      Textarea\n    },\n    setup() {\n      return {\n        args,\n        StatusIndicator,\n        Icon\n      };\n    },\n    template: `\n      <div style="display: flex; flex-direction: column; gap:16px">\n        \n        <Textarea\n            :label="args.label"\n            :placeholder="args.placeholder"\n            :limit="args.limit"\n            :hint="args.hintPrompt"\n            :isDisabled="args.isDisabled"\n            :className="args.className"\n            v-model="args.modelValue"\n        ></Textarea>\n        \n        <Textarea\n          :label="args.label"\n          :placeholder="args.placeholder"\n          :limit="args.limit"\n          :hint="args.hintError"\n          :isDisabled="args.isDisabled"\n          :className="args.className"\n          v-model="args.modelValue"\n        ></Textarea>\n\n        <Textarea\n          :label="args.label"\n          :placeholder="args.placeholder"\n          :limit="args.limit"\n          :hint="args.hint"\n          :isDisabled="true"\n          :className="args.className"\n          v-model="args.modelValue"\n        ></Textarea>\n      </div>`\n  }),\n  // 控制 controls 中能控制的參數\n  parameters: {\n    controls: {\n      exclude: ["hint", "isDisabled"]\n    },\n    docs: {\n      source: {\n        transform: (src, storyContext) => {\n          const {\n            args\n          } = storyContext;\n          const dataSourceStringPrompt = formatDataSource(args.hintPrompt);\n          const dataSourceStringError = formatDataSource(args.hintError);\n          const dataSourceString = formatDataSource(args.hint);\n          return [`<script setup>`, "import { ref, h } from \\"vue\\";", `import { Textarea, Icon, StatusIndicator } from "@ded-wds-vue/ui";`, `const hintPrompt = ${dataSourceStringPrompt};`, `const hintError = ${dataSourceStringError};`, `const hint = ${dataSourceString};`, `const modelValue = ref("${args.modelValue}");`, `<\/script>`, "", "<template>", "  <Textarea", `    ${args.label ? `label="${args.label}"` : ""}`, `    ${args.placeholder ? `placeholder="${args.placeholder}"` : ""}`, `    ${args.limit !== undefined ? `:limit="${args.limit}"` : ""}`, `    :hint="hintPrompt"`, `    ${args.isDisabled !== undefined ? `:isDisabled="${args.isDisabled}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, `    v-model="modelValue"`, "  ></Textarea>", "  <Textarea", `    ${args.label ? `label="${args.label}"` : ""}`, `    ${args.placeholder ? `placeholder="${args.placeholder}"` : ""}`, `    ${args.limit !== undefined ? `:limit="${args.limit}"` : ""}`, `    :hint="hintError"`, `    ${args.isDisabled !== undefined ? `:isDisabled="${args.isDisabled}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, `    v-model="modelValue"`, "  ></Textarea>", "  <Textarea", `    ${args.label ? `label="${args.label}"` : ""}`, `    ${args.placeholder ? `placeholder="${args.placeholder}"` : ""}`, `    ${args.limit !== undefined ? `:limit="${args.limit}"` : ""}`, `    :hint="hint"`, "  ></Textarea>", "</template>"].filter(Boolean).join("\\n").trim();\n        }\n      }\n    }\n  }\n}',...(j=(B=b.parameters)==null?void 0:B.docs)==null?void 0:j.source}}};const J=["TextareaDefault","TextareaLimit","TextareaStatus"];export{g as TextareaDefault,h as TextareaLimit,b as TextareaStatus,J as __namedExportsOrder,H as default};

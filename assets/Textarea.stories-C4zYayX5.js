import{p as E,u as B,g as j,c as n,d as u,a as h,n as t,t as p,x as _,G as A,s as L,o}from"./vue.esm-bundler-CbCZpGld.js";const w=["maxlength","placeholder"],i=Object.assign({inheritAttrs:!1},{__name:"Textarea",props:E({label:{type:String},placeholder:{type:String,default:"Placeholder"},limit:{type:Number,default:30},hint:{type:Object,default:()=>({error:"",description:""})},isDisabled:{type:Boolean,default:!1},className:{type:String,default:""}},{modelValue:{},modelModifiers:{}}),emits:["update:modelValue"],setup(l){const a=l,r=`${crypto.randomUUID()}-textarea`,s=B(l,"modelValue"),g=j(()=>a.hint.error.length>0?"error":a.hint.description.length>0?"desc":"");return(P,b)=>(o(),n("div",{class:t(["ded-textarea-container",{[a.className]:!!a.className}])},[a.label?(o(),n("label",{key:0,class:t(["ded-textarea-label",[{"ded-textarea-disable":a.isDisabled}]]),for:r},p(a.label),3)):u("",!0),h("div",{class:t(["ded-textarea-group",[{"ded-textarea-disable":a.isDisabled},a.hint.error.length>0&&`ded-textarea-border-${g.value}`]])},[_(h("textarea",L({id:r,"onUpdate:modelValue":b[0]||(b[0]=C=>s.value=C),class:["ded-textarea",[{"ded-textarea-disable":a.isDisabled}]],maxlength:a.limit>0?a.limit:void 0,placeholder:a.placeholder},P.$attrs),null,16,w),[[A,s.value]]),s.value.length>0&&a.limit!==0?(o(),n("small",{key:0,class:t(["ded-textarea-hint-count",[{"ded-textarea-disable":a.isDisabled}]])},p(s.value.length>0?`${s.value.length} / ${a.limit}`:""),3)):u("",!0)],2),a.hint.error.length>0||a.hint.description.length>0?(o(),n("small",{key:1,class:t(["ded-textarea-hint",[{"ded-textarea-disable":a.isDisabled},`ded-textarea-hint-${g.value}`]])},p(a.hint.error.length>0?a.hint.error:a.hint.description),3)):u("",!0)],2))}});i.__docgenInfo={exportName:"default",displayName:"Textarea",description:"",tags:{},props:[{name:"label",type:{name:"string"}},{name:"placeholder",type:{name:"string"},defaultValue:{func:!1,value:'"Placeholder"'}},{name:"limit",type:{name:"number"},defaultValue:{func:!1,value:"30"}},{name:"hint",type:{name:"object"},defaultValue:{func:!1,value:`{\r
  error: "",\r
  description: ""\r
}`}},{name:"isDisabled",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"className",type:{name:"string"},defaultValue:{func:!1,value:'""'}}],sourceFiles:["D:/98_測試/up/DED-WDS_VUE/libs/src/ui/element/Textarea/Textarea.vue"]};function S(l){return`{
        error: '${l.error||""}',
        description: '${l.description||""}'
    }`}const F={title:"Component/Textarea",component:i,tags:["autodocs"],argTypes:{label:{description:"標題",control:{type:"text"}},placeholder:{description:"輸入提示",control:{type:"text"}},limit:{description:"字數限制",control:{type:"number"}},hint:{description:"提示訊息",control:{type:"object"},table:{type:{summary:"{ error: string; description: string; }[]"}}},isDisabled:{description:"是否禁用",control:{type:"boolean"}},className:{description:"客製化樣式",control:{type:"text"}},modelValue:{description:"輸入值",control:{type:"text"},table:{type:{summary:"string"},category:"v-model"}}},parameters:{docs:{title:"Textarea",description:{component:"Textarea 組件的呈現及說明。"}}}},d={name:"預設項目",args:{label:"Label",placeholder:"Placeholder",limit:0,hint:{error:"",description:""},isDisabled:!1,className:"",modelValue:"Type something"},render:l=>({components:{Textarea:i},setup(){return{args:l}},template:`
      <Textarea
        :label="args.label"
        :placeholder="args.placeholder"
        :limit="args.limit"
        :hint="args.hint"
        :isDisabled="args.isDisabled"
        :className="args.className"
        v-model="args.modelValue"
      ></Textarea>`}),parameters:{controls:{},docs:{source:{transform:(l,a)=>{const{args:e}=a,r=S(e.hint);return["<script setup>",'import { ref } from "vue";','import { Textarea } from "@ded-wds-vue/ui";',`const modelValue = ref("${e.modelValue}");`,"<\/script>","","<template>","  <Textarea",`    ${e.label?`label="${e.label}"`:""}`,`    ${e.placeholder?`placeholder="${e.placeholder}"`:""}`,`    ${e.limit!==void 0?`:limit="${e.limit}"`:""}`,`    ${r?`:hint="${r}"`:""}`,`    ${e.isDisabled!==void 0?`:isDisabled="${e.isDisabled}"`:""}`,`    ${e.className?`className="${e.className}"`:""}`,'    v-model="modelValue"',"  ></Textarea>","</template>"].filter(Boolean).join(`
`).trim()}}}}},m={name:"字數限制",args:{label:"Label",placeholder:"Placeholder",limit:30,hint:{error:"",description:""},isDisabled:!1,className:"",modelValue:"Type something"},render:l=>({components:{Textarea:i},setup(){return{args:l}},template:`
      <Textarea
        :label="args.label"
        :placeholder="args.placeholder"
        :limit="args.limit"
        :hint="args.hint"
        :isDisabled="args.isDisabled"
        :className="args.className"
        v-model="args.modelValue"
      ></Textarea>`}),parameters:{controls:{},docs:{source:{transform:(l,a)=>{const{args:e}=a,r=S(e.hint);return["<script setup>",'import { ref } from "vue";','import { Textarea } from "@ded-wds-vue/ui";',`const modelValue = ref("${e.modelValue}");`,"<\/script>","","<template>","  <Textarea",`    ${e.label?`label="${e.label}"`:""}`,`    ${e.placeholder?`placeholder="${e.placeholder}"`:""}`,`    ${e.limit!==void 0?`:limit="${e.limit}"`:""}`,`    ${r?`:hint="${r}"`:""}`,`    ${e.isDisabled!==void 0?`:isDisabled="${e.isDisabled}"`:""}`,`    ${e.className?`className="${e.className}"`:""}`,'    v-model="modelValue"',"  ></Textarea>","</template>"].filter(Boolean).join(`
`).trim()}}}}},c={name:"輸入框狀態",args:{label:"Label",placeholder:"Placeholder",limit:30,isDisabled:!1,className:"",modelValue:"Type something"},render:l=>({components:{Textarea:i},setup(){return{args:l}},template:`
      <div style="display: flex; flex-direction: column; gap:16px">
                <Textarea
                  :label="args.label"
                  :placeholder="args.placeholder"
                  :limit="args.limit"
                  :hint="{ error: '', description: 'Prompt message' }"
                  :isDisabled="args.isDisabled"
                  :className="args.className"
                  v-model="args.modelValue"
                ></Textarea>

        <Textarea
          :label="args.label"
          :placeholder="args.placeholder"
          :limit="args.limit"
          :hint="{ error: 'Error', description: '' }"
          :isDisabled="args.isDisabled"
          :className="args.className"
          v-model="args.modelValue"
        ></Textarea>

        <Textarea
          :label="args.label"
          :placeholder="args.placeholder"
          :limit="args.limit"
          :hint="{ error: '', description: 'Prompt message' }"
          :isDisabled="true"
          :className="args.className"
          v-model="args.modelValue"
        ></Textarea>
      </div>`}),parameters:{controls:{exclude:["hint","isDisabled"]},docs:{source:{transform:(l,a)=>{const{args:e}=a;return["<script setup>",'import { ref } from "vue";','import { Textarea } from "@ded-wds-vue/ui";',`const modelValue = ref("${e.modelValue}");`,"<\/script>","","<template>","  <Textarea",`    ${e.label?`label="${e.label}"`:""}`,`    ${e.placeholder?`placeholder="${e.placeholder}"`:""}`,`    ${e.limit!==void 0?`:limit="${e.limit}"`:""}`,`    :hint="{ error: '', description: 'Prompt message' }"`,`    ${e.isDisabled!==void 0?`:isDisabled="${e.isDisabled}"`:""}`,`    ${e.className?`className="${e.className}"`:""}`,'    v-model="modelValue"',"  ></Textarea>","  <Textarea",`    ${e.label?`label="${e.label}"`:""}`,`    ${e.placeholder?`placeholder="${e.placeholder}"`:""}`,`    ${e.limit!==void 0?`:limit="${e.limit}"`:""}`,`    :hint="{ error: 'Error', description: '' }"`,`    ${e.isDisabled!==void 0?`:isDisabled="${e.isDisabled}"`:""}`,`    ${e.className?`className="${e.className}"`:""}`,'    v-model="modelValue"',"  ></Textarea>","  <Textarea",`    ${e.label?`label="${e.label}"`:""}`,`    ${e.placeholder?`placeholder="${e.placeholder}"`:""}`,`    ${e.limit!==void 0?`:limit="${e.limit}"`:""}`,`    :hint="{ error: '', description: 'Prompt message' }"`,'    :isDisabled="true"',`    ${e.className?`className="${e.className}"`:""}`,'    v-model="modelValue"',"  ></Textarea>","</template>"].filter(Boolean).join(`
`).trim()}}}}};var $,x,f;d.parameters={...d.parameters,docs:{...($=d.parameters)==null?void 0:$.docs,source:{originalSource:`{
  name: "預設項目",
  args: {
    label: "Label",
    placeholder: "Placeholder",
    limit: 0,
    // initValue: "Type something...",
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
          return [\`<script setup>\`, "import { ref } from \\"vue\\";", \`import { Textarea } from "@ded-wds-vue/ui";\`, \`const modelValue = ref("\${args.modelValue}");\`, \`<\/script>\`, "", "<template>", "  <Textarea", \`    \${args.label ? \`label="\${args.label}"\` : ""}\`, \`    \${args.placeholder ? \`placeholder="\${args.placeholder}"\` : ""}\`, \`    \${args.limit !== undefined ? \`:limit="\${args.limit}"\` : ""}\`, \`    \${dataSourceString ? \`:hint="\${dataSourceString}"\` : ""}\`, \`    \${args.isDisabled !== undefined ? \`:isDisabled="\${args.isDisabled}"\` : ""}\`, \`    \${args.className ? \`className="\${args.className}"\` : ""}\`, \`    v-model="modelValue"\`, "  ></Textarea>", "</template>"].filter(Boolean).join("\\n").trim();
        }
      }
    }
  }
}`,...(f=(x=d.parameters)==null?void 0:x.docs)==null?void 0:f.source}}};var D,T,N;m.parameters={...m.parameters,docs:{...(D=m.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
          return [\`<script setup>\`, "import { ref } from \\"vue\\";", \`import { Textarea } from "@ded-wds-vue/ui";\`, \`const modelValue = ref("\${args.modelValue}");\`, \`<\/script>\`, "", "<template>", "  <Textarea", \`    \${args.label ? \`label="\${args.label}"\` : ""}\`, \`    \${args.placeholder ? \`placeholder="\${args.placeholder}"\` : ""}\`, \`    \${args.limit !== undefined ? \`:limit="\${args.limit}"\` : ""}\`, \`    \${dataSourceString ? \`:hint="\${dataSourceString}"\` : ""}\`, \`    \${args.isDisabled !== undefined ? \`:isDisabled="\${args.isDisabled}"\` : ""}\`, \`    \${args.className ? \`className="\${args.className}"\` : ""}\`, \`    v-model="modelValue"\`, "  ></Textarea>", "</template>"].filter(Boolean).join("\\n").trim();
        }
      }
    }
  }
}`,...(N=(T=m.parameters)==null?void 0:T.docs)==null?void 0:N.source}}};var v,V,y;c.parameters={...c.parameters,docs:{...(v=c.parameters)==null?void 0:v.docs,source:{originalSource:'{\n  name: "輸入框狀態",\n  args: {\n    label: "Label",\n    placeholder: "Placeholder",\n    // initValue: "Type something...",\n    limit: 30,\n    isDisabled: false,\n    className: "",\n    modelValue: "Type something"\n  },\n  render: args => ({\n    components: {\n      Textarea\n    },\n    setup() {\n      return {\n        args\n      };\n    },\n    template: `\n      <div style="display: flex; flex-direction: column; gap:16px">\n                <Textarea\n                  :label="args.label"\n                  :placeholder="args.placeholder"\n                  :limit="args.limit"\n                  :hint="{ error: \'\', description: \'Prompt message\' }"\n                  :isDisabled="args.isDisabled"\n                  :className="args.className"\n                  v-model="args.modelValue"\n                ></Textarea>\n\n        <Textarea\n          :label="args.label"\n          :placeholder="args.placeholder"\n          :limit="args.limit"\n          :hint="{ error: \'Error\', description: \'\' }"\n          :isDisabled="args.isDisabled"\n          :className="args.className"\n          v-model="args.modelValue"\n        ></Textarea>\n\n        <Textarea\n          :label="args.label"\n          :placeholder="args.placeholder"\n          :limit="args.limit"\n          :hint="{ error: \'\', description: \'Prompt message\' }"\n          :isDisabled="true"\n          :className="args.className"\n          v-model="args.modelValue"\n        ></Textarea>\n      </div>`\n  }),\n  // 控制 controls 中能控制的參數\n  parameters: {\n    controls: {\n      exclude: ["hint", "isDisabled"]\n    },\n    docs: {\n      source: {\n        transform: (src, storyContext) => {\n          const {\n            args\n          } = storyContext;\n          return [`<script setup>`, "import { ref } from \\"vue\\";", `import { Textarea } from "@ded-wds-vue/ui";`, `const modelValue = ref("${args.modelValue}");`, `<\/script>`, "", "<template>", "  <Textarea", `    ${args.label ? `label="${args.label}"` : ""}`, `    ${args.placeholder ? `placeholder="${args.placeholder}"` : ""}`, `    ${args.limit !== undefined ? `:limit="${args.limit}"` : ""}`, `    :hint="{ error: \'\', description: \'Prompt message\' }"`, `    ${args.isDisabled !== undefined ? `:isDisabled="${args.isDisabled}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, `    v-model="modelValue"`, "  ></Textarea>", "  <Textarea", `    ${args.label ? `label="${args.label}"` : ""}`, `    ${args.placeholder ? `placeholder="${args.placeholder}"` : ""}`, `    ${args.limit !== undefined ? `:limit="${args.limit}"` : ""}`, `    :hint="{ error: \'Error\', description: \'\' }"`, `    ${args.isDisabled !== undefined ? `:isDisabled="${args.isDisabled}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, `    v-model="modelValue"`, "  ></Textarea>", "  <Textarea", `    ${args.label ? `label="${args.label}"` : ""}`, `    ${args.placeholder ? `placeholder="${args.placeholder}"` : ""}`, `    ${args.limit !== undefined ? `:limit="${args.limit}"` : ""}`, `    :hint="{ error: \'\', description: \'Prompt message\' }"`, `    :isDisabled="true"`, `    ${args.className ? `className="${args.className}"` : ""}`, `    v-model="modelValue"`, "  ></Textarea>", "</template>"].filter(Boolean).join("\\n").trim();\n        }\n      }\n    }\n  }\n}',...(y=(V=c.parameters)==null?void 0:V.docs)==null?void 0:y.source}}};const I=["TextareaDefault","TextareaLimit","TextareaStatus"];export{d as TextareaDefault,m as TextareaLimit,c as TextareaStatus,I as __namedExportsOrder,F as default};

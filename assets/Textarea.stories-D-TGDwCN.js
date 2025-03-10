import{m as S,u as C,g as P,c as i,d as c,a as g,n as s,t as u,q as E,D as B,o as n}from"./vue.esm-bundler-DhCPv9oX.js";const _=["maxlength","placeholder"],t={__name:"Textarea",props:S({label:{type:String},placeholder:{type:String,default:"Placeholder"},limit:{type:Number,default:30},hint:{type:Object,default:()=>({error:"",description:""})},isDisabled:{type:Boolean,default:!1},className:{type:String,default:""}},{modelValue:{},modelModifiers:{}}),emits:["update:modelValue"],setup(a){const l=C(a,"modelValue"),e=a,r=P(()=>e.hint.error.length>0?"error":e.hint.description.length>0?"desc":"");return(j,p)=>(n(),i("div",{class:s({"ded-textarea-container":!0,[e.className]:!!e.className})},[e.label?(n(),i("label",{key:0,class:s(["ded-textarea-label",{"ded-textarea-disable":e.isDisabled}]),for:"id"},u(e.label),3)):c("",!0),g("div",{class:s(["ded-textarea-group",{"ded-textarea-disable":e.isDisabled},e.hint.error.length>0&&`ded-textarea-border-${r.value}`])},[E(g("textarea",{id:"id",class:s(["ded-textarea",{"ded-textarea-disable":e.isDisabled}]),maxlength:e.limit>0?e.limit:void 0,placeholder:e.placeholder,"onUpdate:modelValue":p[0]||(p[0]=y=>l.value=y)},null,10,_),[[B,l.value]]),l.value.length>0&&e.limit!==0?(n(),i("small",{key:0,class:s(["ded-textarea-hint-count",{"ded-textarea-disable":e.isDisabled}])},u(l.value.length>0?`${l.value.length} / ${e.limit}`:""),3)):c("",!0)],2),e.hint.error.length>0||e.hint.description.length>0?(n(),i("small",{key:1,class:s(["ded-textarea-hint",{"ded-textarea-disable":e.isDisabled},`ded-textarea-hint-${r.value}`])},u(e.hint.error.length>0?e.hint.error:e.hint.description),3)):c("",!0)],2))}};t.__docgenInfo={exportName:"default",displayName:"Textarea",description:"",tags:{},props:[{name:"label",type:{name:"string"}},{name:"placeholder",type:{name:"string"},defaultValue:{func:!1,value:'"Placeholder"'}},{name:"limit",type:{name:"number"},defaultValue:{func:!1,value:"30"}},{name:"hint",type:{name:"object"},defaultValue:{func:!1,value:`{
    error: "",
    description: ""
}`}},{name:"isDisabled",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"className",type:{name:"string"},defaultValue:{func:!1,value:'""'}}],sourceFiles:["/Users/auouser/Desktop/Work_Space/DED-WDS_VUE/libs/src/ui/element/Textarea/Textarea.vue"]};function V(a){return`{
        error: '${a.error||""}',
        description: '${a.description||""}'
    }`}const k={title:"Component/Textarea",component:t,tags:["autodocs"],argTypes:{label:{description:"標題",control:{type:"text"}},placeholder:{description:"輸入提示",control:{type:"text"}},limit:{description:"字數限制",control:{type:"number"}},hint:{description:"提示訊息",control:{type:"object"},table:{type:{summary:"{ error: string; description: string; }[]"}}},isDisabled:{description:"是否禁用",control:{type:"boolean"}},className:{description:"客製化樣式",control:{type:"text"}},modelValue:{description:"輸入值",control:{type:"text"},table:{type:{summary:"string"},category:"v-model"}}},parameters:{docs:{title:"Textarea",description:{component:"Textarea 組件的呈現及說明。"}}}},o={name:"預設項目",args:{label:"Label",placeholder:"Placeholder",limit:0,hint:{error:"",description:""},isDisabled:!1,className:"",modelValue:"Type something"},render:a=>({components:{Textarea:t},setup(){return{args:a}},template:`
            <Textarea
                :label="args.label"
                :placeholder="args.placeholder"
                :limit="args.limit"
                :hint="args.hint"
                :isDisabled="args.isDisabled"
                :className="args.className"
                v-model="args.modelValue"
            ></Textarea>
        `}),parameters:{controls:{},docs:{source:{transform:(a,l)=>{const{args:e}=l,r=V(e.hint);return["<script setup>",'import { ref } from "vue";','import { Textarea } from "@ded-wds-vue/ui";',`const modelValue = ref("${e.modelValue}");`,"<\/script>","","<template>","  <Textarea",`    ${e.label?`label="${e.label}"`:""}`,`    ${e.placeholder?`placeholder="${e.placeholder}"`:""}`,`    ${e.limit!==void 0?`:limit="${e.limit}"`:""}`,`    ${r?`:hint="${r}"`:""}`,`    ${e.isDisabled!==void 0?`:isDisabled="${e.isDisabled}"`:""}`,`    ${e.className?`className="${e.className}"`:""}`,'    v-model="modelValue"',"  ></Textarea>","</template>"].filter(Boolean).join(`
`).trim()}}}}},d={name:"字數限制",args:{label:"Label",placeholder:"Placeholder",limit:30,hint:{error:"",description:""},isDisabled:!1,className:"",modelValue:"Type something"},render:a=>({components:{Textarea:t},setup(){return{args:a}},template:`
            <Textarea
                :label="args.label"
                :placeholder="args.placeholder"
                :limit="args.limit"
                :hint="args.hint"
                :isDisabled="args.isDisabled"
                :className="args.className"
                v-model="args.modelValue"
            ></Textarea>
        `}),parameters:{controls:{},docs:{source:{transform:(a,l)=>{const{args:e}=l,r=V(e.hint);return["<script setup>",'import { ref } from "vue";','import { Textarea } from "@ded-wds-vue/ui";',`const modelValue = ref("${e.modelValue}");`,"<\/script>","","<template>","  <Textarea",`    ${e.label?`label="${e.label}"`:""}`,`    ${e.placeholder?`placeholder="${e.placeholder}"`:""}`,`    ${e.limit!==void 0?`:limit="${e.limit}"`:""}`,`    ${r?`:hint="${r}"`:""}`,`    ${e.isDisabled!==void 0?`:isDisabled="${e.isDisabled}"`:""}`,`    ${e.className?`className="${e.className}"`:""}`,'    v-model="modelValue"',"  ></Textarea>","</template>"].filter(Boolean).join(`
`).trim()}}}}},m={name:"輸入框狀態",args:{label:"Label",placeholder:"Placeholder",limit:30,isDisabled:!1,className:"",modelValue:"Type something"},render:a=>({components:{Textarea:t},setup(){return{args:a}},template:`
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
            </div>
        `}),parameters:{controls:{exclude:["hint","isDisabled"]},docs:{source:{transform:(a,l)=>{const{args:e}=l;return["<script setup>",'import { ref } from "vue";','import { Textarea } from "@ded-wds-vue/ui";',`const modelValue = ref("${e.modelValue}");`,"<\/script>","","<template>","  <Textarea",`    ${e.label?`label="${e.label}"`:""}`,`    ${e.placeholder?`placeholder="${e.placeholder}"`:""}`,`    ${e.limit!==void 0?`:limit="${e.limit}"`:""}`,`    :hint="{ error: '', description: 'Prompt message' }"`,`    ${e.isDisabled!==void 0?`:isDisabled="${e.isDisabled}"`:""}`,`    ${e.className?`className="${e.className}"`:""}`,'    v-model="modelValue"',"  ></Textarea>","  <Textarea",`    ${e.label?`label="${e.label}"`:""}`,`    ${e.placeholder?`placeholder="${e.placeholder}"`:""}`,`    ${e.limit!==void 0?`:limit="${e.limit}"`:""}`,`    :hint="{ error: 'Error', description: '' }"`,`    ${e.isDisabled!==void 0?`:isDisabled="${e.isDisabled}"`:""}`,`    ${e.className?`className="${e.className}"`:""}`,'    v-model="modelValue"',"  ></Textarea>","  <Textarea",`    ${e.label?`label="${e.label}"`:""}`,`    ${e.placeholder?`placeholder="${e.placeholder}"`:""}`,`    ${e.limit!==void 0?`:limit="${e.limit}"`:""}`,`    :hint="{ error: '', description: 'Prompt message' }"`,'    :isDisabled="true"',`    ${e.className?`className="${e.className}"`:""}`,'    v-model="modelValue"',"  ></Textarea>","</template>"].filter(Boolean).join(`
`).trim()}}}}};var b,h,$;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
            ></Textarea>
        \`
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
          return [\`<script setup>\`, 'import { ref } from "vue";', \`import { Textarea } from "@ded-wds-vue/ui";\`, \`const modelValue = ref("\${args.modelValue}");\`, \`<\/script>\`, '', '<template>', '  <Textarea', \`    \${args.label ? \`label="\${args.label}"\` : ""}\`, \`    \${args.placeholder ? \`placeholder="\${args.placeholder}"\` : ""}\`, \`    \${args.limit !== undefined ? \`:limit="\${args.limit}"\` : ""}\`, \`    \${dataSourceString ? \`:hint="\${dataSourceString}"\` : ""}\`, \`    \${args.isDisabled !== undefined ? \`:isDisabled="\${args.isDisabled}"\` : ""}\`, \`    \${args.className ? \`className="\${args.className}"\` : ""}\`, \`    v-model="modelValue"\`, '  ></Textarea>', '</template>'].filter(Boolean).join('\\n').trim();
        }
      }
    }
  }
}`,...($=(h=o.parameters)==null?void 0:h.docs)==null?void 0:$.source}}};var x,f,D;d.parameters={...d.parameters,docs:{...(x=d.parameters)==null?void 0:x.docs,source:{originalSource:`{
  name: "字數限制",
  args: {
    label: "Label",
    placeholder: "Placeholder",
    limit: 30,
    hint: {
      error: '',
      description: ''
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
            ></Textarea>
        \`
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
          return [\`<script setup>\`, 'import { ref } from "vue";', \`import { Textarea } from "@ded-wds-vue/ui";\`, \`const modelValue = ref("\${args.modelValue}");\`, \`<\/script>\`, '', '<template>', '  <Textarea', \`    \${args.label ? \`label="\${args.label}"\` : ""}\`, \`    \${args.placeholder ? \`placeholder="\${args.placeholder}"\` : ""}\`, \`    \${args.limit !== undefined ? \`:limit="\${args.limit}"\` : ""}\`, \`    \${dataSourceString ? \`:hint="\${dataSourceString}"\` : ""}\`, \`    \${args.isDisabled !== undefined ? \`:isDisabled="\${args.isDisabled}"\` : ""}\`, \`    \${args.className ? \`className="\${args.className}"\` : ""}\`, \`    v-model="modelValue"\`, '  ></Textarea>', '</template>'].filter(Boolean).join('\\n').trim();
        }
      }
    }
  }
}`,...(D=(f=d.parameters)==null?void 0:f.docs)==null?void 0:D.source}}};var T,N,v;m.parameters={...m.parameters,docs:{...(T=m.parameters)==null?void 0:T.docs,source:{originalSource:`{
  name: "輸入框狀態",
  args: {
    label: "Label",
    placeholder: "Placeholder",
    // initValue: "Type something...",
    limit: 30,
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
            </div>
        \`
  }),
  // 控制 controls 中能控制的參數
  parameters: {
    controls: {
      exclude: ['hint', 'isDisabled']
    },
    docs: {
      source: {
        transform: (src, storyContext) => {
          const {
            args
          } = storyContext;
          return [\`<script setup>\`, 'import { ref } from "vue";', \`import { Textarea } from "@ded-wds-vue/ui";\`, \`const modelValue = ref("\${args.modelValue}");\`, \`<\/script>\`, '', '<template>', '  <Textarea', \`    \${args.label ? \`label="\${args.label}"\` : ""}\`, \`    \${args.placeholder ? \`placeholder="\${args.placeholder}"\` : ""}\`, \`    \${args.limit !== undefined ? \`:limit="\${args.limit}"\` : ""}\`, \`    :hint="{ error: '', description: 'Prompt message' }"\`, \`    \${args.isDisabled !== undefined ? \`:isDisabled="\${args.isDisabled}"\` : ""}\`, \`    \${args.className ? \`className="\${args.className}"\` : ""}\`, \`    v-model="modelValue"\`, '  ></Textarea>', '  <Textarea', \`    \${args.label ? \`label="\${args.label}"\` : ""}\`, \`    \${args.placeholder ? \`placeholder="\${args.placeholder}"\` : ""}\`, \`    \${args.limit !== undefined ? \`:limit="\${args.limit}"\` : ""}\`, \`    :hint="{ error: 'Error', description: '' }"\`, \`    \${args.isDisabled !== undefined ? \`:isDisabled="\${args.isDisabled}"\` : ""}\`, \`    \${args.className ? \`className="\${args.className}"\` : ""}\`, \`    v-model="modelValue"\`, '  ></Textarea>', '  <Textarea', \`    \${args.label ? \`label="\${args.label}"\` : ""}\`, \`    \${args.placeholder ? \`placeholder="\${args.placeholder}"\` : ""}\`, \`    \${args.limit !== undefined ? \`:limit="\${args.limit}"\` : ""}\`, \`    :hint="{ error: '', description: 'Prompt message' }"\`, \`    :isDisabled="true"\`, \`    \${args.className ? \`className="\${args.className}"\` : ""}\`, \`    v-model="modelValue"\`, '  ></Textarea>', '</template>'].filter(Boolean).join('\\n').trim();
        }
      }
    }
  }
}`,...(v=(N=m.parameters)==null?void 0:N.docs)==null?void 0:v.source}}};const w=["TextareaDefault","TextareaLimit","TextareaStatus"];export{o as TextareaDefault,d as TextareaLimit,m as TextareaStatus,w as __namedExportsOrder,k as default};

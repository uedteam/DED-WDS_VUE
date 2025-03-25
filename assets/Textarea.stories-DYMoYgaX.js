import{p as z,u as A,g as L,c as t,d as b,a as x,n as i,t as m,x as F,G as U,s as M,F as c,j as D,l as T,f as v,o as l,h as o}from"./vue.esm-bundler-CC1hEtM-.js";import{_ as N}from"./Icon-DU5IBFbg.js";import{_ as f}from"./StatusIndicator-Dcvr2h0Y.js";const O=["maxlength","placeholder"],d=Object.assign({inheritAttrs:!1},{__name:"Textarea",props:z({label:{type:String},placeholder:{type:String,default:"Placeholder"},limit:{type:Number,default:30},hint:{type:Object,default:()=>({error:"",description:""})},isDisabled:{type:Boolean,default:!1},className:{type:String,default:""}},{modelValue:{},modelModifiers:{}}),emits:["update:modelValue"],setup(r){const a=r,s=`${crypto.randomUUID()}-textarea`,n=A(r,"modelValue"),h=L(()=>a.hint.error?"error":a.hint.description?"desc":"");return(B,$)=>(l(),t("div",{class:i(["ded-textarea-container",{[a.className]:!!a.className}])},[a.label?(l(),t("label",{key:0,class:i(["ded-textarea-label",[{"ded-textarea-disable":a.isDisabled}]]),for:s},m(a.label),3)):b("",!0),x("div",{class:i(["ded-textarea-group",[{"ded-textarea-disable":a.isDisabled},h.value?`ded-textarea-border-${h.value}`:""]])},[F(x("textarea",M({id:s,"onUpdate:modelValue":$[0]||($[0]=j=>n.value=j),class:["ded-textarea",[{"ded-textarea-disable":a.isDisabled}]],maxlength:a.limit>0?a.limit:void 0,placeholder:a.placeholder},B.$attrs),null,16,O),[[U,n.value]]),n.value.length>0&&a.limit!==0?(l(),t("small",{key:0,class:i(["ded-textarea-hint-count",[{"ded-textarea-disable":a.isDisabled}]])},m(n.value.length>0?`${n.value.length} / ${a.limit}`:""),3)):b("",!0)],2),x("small",{class:i(["ded-textarea-hint",[{"ded-textarea-disable":a.isDisabled},`ded-textarea-hint-${h.value}`]])},[a.hint.error?(l(),t(c,{key:0},[typeof a.hint.error=="function"?(l(),D(T(a.hint.error),{key:0})):(l(),t(c,{key:1},[v(m(a.hint.error),1)],64))],64)):a.hint.description?(l(),t(c,{key:1},[typeof a.hint.description=="function"?(l(),D(T(a.hint.description),{key:0})):(l(),t(c,{key:1},[v(m(a.hint.description),1)],64))],64)):b("",!0)],2)],2))}});d.__docgenInfo={exportName:"default",displayName:"Textarea",description:"",tags:{},props:[{name:"label",type:{name:"string"}},{name:"placeholder",type:{name:"string"},defaultValue:{func:!1,value:'"Placeholder"'}},{name:"limit",type:{name:"number"},defaultValue:{func:!1,value:"30"}},{name:"hint",type:{name:"object"},defaultValue:{func:!1,value:`{
  error: "",
  description: ""
}`}},{name:"isDisabled",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"className",type:{name:"string"},defaultValue:{func:!1,value:'""'}}],sourceFiles:["/Users/auouser/Desktop/Work_Space/DED-WDS_VUE/libs/src/ui/element/Textarea/Textarea.vue"]};function w(r){return`{
        error: '${r.error||""}',
        description: '${r.description||""}'
    }`}const H={title:"Component/Textarea",component:d,tags:["autodocs"],argTypes:{label:{description:"標題",control:{type:"text"}},placeholder:{description:"輸入提示",control:{type:"text"}},limit:{description:"字數限制",control:{type:"number"}},hint:{description:"提示訊息",control:{type:"object"},table:{type:{summary:"{ error: string | VNode; description: string | VNode; }"}}},isDisabled:{description:"是否禁用",control:{type:"boolean"}},className:{description:"客製化樣式",control:{type:"text"}},modelValue:{description:"輸入值",control:{type:"text"},table:{type:{summary:"string"},category:"v-model"}}},parameters:{docs:{title:"Textarea",description:{component:"Textarea 組件的呈現及說明。"}}}},u={name:"預設項目",args:{label:"Label",placeholder:"Placeholder",limit:0,hint:{error:"",description:""},isDisabled:!1,className:"",modelValue:"Type something"},render:r=>({components:{Textarea:d},setup(){return{args:r}},template:`
      <Textarea
        :label="args.label"
        :placeholder="args.placeholder"
        :limit="args.limit"
        :hint="args.hint"
        :isDisabled="args.isDisabled"
        :className="args.className"
        v-model="args.modelValue"
      ></Textarea>`}),parameters:{controls:{},docs:{source:{transform:(r,a)=>{const{args:e}=a,s=w(e.hint);return["<script setup>",'import { ref, h } from "vue";','import { Textarea } from "@ded-wds-vue/ui";',`const modelValue = ref("${e.modelValue}");`,"<\/script>","","<template>","  <Textarea",`    ${e.label?`label="${e.label}"`:""}`,`    ${e.placeholder?`placeholder="${e.placeholder}"`:""}`,`    ${e.limit!==void 0?`:limit="${e.limit}"`:""}`,`    ${s?`:hint="${s}"`:""}`,`    ${e.isDisabled!==void 0?`:isDisabled="${e.isDisabled}"`:""}`,`    ${e.className?`className="${e.className}"`:""}`,'    v-model="modelValue"',"  ></Textarea>","</template>"].filter(Boolean).join(`
`).trim()}}}}},p={name:"字數限制",args:{label:"Label",placeholder:"Placeholder",limit:30,hint:{error:"",description:""},isDisabled:!1,className:"",modelValue:"Type something"},render:r=>({components:{Textarea:d},setup(){return{args:r}},template:`
      <Textarea
        :label="args.label"
        :placeholder="args.placeholder"
        :limit="args.limit"
        :hint="args.hint"
        :isDisabled="args.isDisabled"
        :className="args.className"
        v-model="args.modelValue"
      ></Textarea>`}),parameters:{controls:{},docs:{source:{transform:(r,a)=>{const{args:e}=a,s=w(e.hint);return["<script setup>",'import { ref, h } from "vue";','import { Textarea } from "@ded-wds-vue/ui";',`const modelValue = ref("${e.modelValue}");`,"<\/script>","","<template>","  <Textarea",`    ${e.label?`label="${e.label}"`:""}`,`    ${e.placeholder?`placeholder="${e.placeholder}"`:""}`,`    ${e.limit!==void 0?`:limit="${e.limit}"`:""}`,`    ${s?`:hint="${s}"`:""}`,`    ${e.isDisabled!==void 0?`:isDisabled="${e.isDisabled}"`:""}`,`    ${e.className?`className="${e.className}"`:""}`,'    v-model="modelValue"',"  ></Textarea>","</template>"].filter(Boolean).join(`
`).trim()}}}}},g={name:"輸入框狀態",args:{label:"Label",placeholder:"Placeholder",limit:30,hintError:{error:()=>o("div",{style:"display: flex; align-items: center; gap: 4px;"},[o(N,{name:"SvgErrorCircle",style:"color: red;",size:16}),o("span","Error message")]),description:()=>o(f,{themeColor:"neutral",variant:"text",size:"medium",isShowDot:!1},"Prompt message")},hintPrompt:{error:"",description:()=>o(f,{themeColor:"neutral",variant:"text",size:"medium",isShowDot:!1},"Prompt message")},hint:{error:"",description:""},isDisabled:!1,className:"",modelValue:"Type something"},render:r=>({components:{Textarea:d},setup(){return{args:r,StatusIndicator:f,Icon:N}},template:`
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
      </div>`}),parameters:{controls:{exclude:["hint","isDisabled"]},docs:{source:{transform:(r,a)=>{const{args:e}=a;return["<script setup>",'import { ref, h } from "vue";','import { Textarea, Icon, StatusIndicator } from "@ded-wds-vue/ui";',`const modelValue = ref("${e.modelValue}");`,"<\/script>","","<template>","  <Textarea",`    ${e.label?`label="${e.label}"`:""}`,`    ${e.placeholder?`placeholder="${e.placeholder}"`:""}`,`    ${e.limit!==void 0?`:limit="${e.limit}"`:""}`,`    :hint="{
        error: () => h('div', { style: 'display: flex; align-items: center; gap: 4px;' }, [
          h(Icon, { name: 'SvgErrorCircle', style: 'color: red;', size: 16 }),
          h('span', 'Error message')
        ]),
        description: ''
    }"`,`    ${e.isDisabled!==void 0?`:isDisabled="${e.isDisabled}"`:""}`,`    ${e.className?`className="${e.className}"`:""}`,'    v-model="modelValue"',"  ></Textarea>","  <Textarea",`    ${e.label?`label="${e.label}"`:""}`,`    ${e.placeholder?`placeholder="${e.placeholder}"`:""}`,`    ${e.limit!==void 0?`:limit="${e.limit}"`:""}`,`    :hint="{
        error: '',
        description: () => h( StatusIndicator, {
          themeColor: 'neutral',
          variant: 'text',
          size: 'medium',
          isShowDot: false
        }, 'Prompt message')
    }"`,`    ${e.isDisabled!==void 0?`:isDisabled="${e.isDisabled}"`:""}`,`    ${e.className?`className="${e.className}"`:""}`,'    v-model="modelValue"',"  ></Textarea>","  <Textarea",`    ${e.label?`label="${e.label}"`:""}`,`    ${e.placeholder?`placeholder="${e.placeholder}"`:""}`,`    ${e.limit!==void 0?`:limit="${e.limit}"`:""}`,`    :hint="{ error: '', description: '' }"`,'    :isDisabled="true"',`    ${e.className?`className="${e.className}"`:""}`,'    v-model="modelValue"',"  ></Textarea>","</template>"].filter(Boolean).join(`
`).trim()}}}}};var y,V,S;u.parameters={...u.parameters,docs:{...(y=u.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
          return [\`<script setup>\`, "import { ref, h } from \\"vue\\";", \`import { Textarea } from "@ded-wds-vue/ui";\`, \`const modelValue = ref("\${args.modelValue}");\`, \`<\/script>\`, "", "<template>", "  <Textarea", \`    \${args.label ? \`label="\${args.label}"\` : ""}\`, \`    \${args.placeholder ? \`placeholder="\${args.placeholder}"\` : ""}\`, \`    \${args.limit !== undefined ? \`:limit="\${args.limit}"\` : ""}\`, \`    \${dataSourceString ? \`:hint="\${dataSourceString}"\` : ""}\`, \`    \${args.isDisabled !== undefined ? \`:isDisabled="\${args.isDisabled}"\` : ""}\`, \`    \${args.className ? \`className="\${args.className}"\` : ""}\`, \`    v-model="modelValue"\`, "  ></Textarea>", "</template>"].filter(Boolean).join("\\n").trim();
        }
      }
    }
  }
}`,...(S=(V=u.parameters)==null?void 0:V.docs)==null?void 0:S.source}}};var C,E,I;p.parameters={...p.parameters,docs:{...(C=p.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
          return [\`<script setup>\`, "import { ref, h } from \\"vue\\";", \`import { Textarea } from "@ded-wds-vue/ui";\`, \`const modelValue = ref("\${args.modelValue}");\`, \`<\/script>\`, "", "<template>", "  <Textarea", \`    \${args.label ? \`label="\${args.label}"\` : ""}\`, \`    \${args.placeholder ? \`placeholder="\${args.placeholder}"\` : ""}\`, \`    \${args.limit !== undefined ? \`:limit="\${args.limit}"\` : ""}\`, \`    \${dataSourceString ? \`:hint="\${dataSourceString}"\` : ""}\`, \`    \${args.isDisabled !== undefined ? \`:isDisabled="\${args.isDisabled}"\` : ""}\`, \`    \${args.className ? \`className="\${args.className}"\` : ""}\`, \`    v-model="modelValue"\`, "  ></Textarea>", "</template>"].filter(Boolean).join("\\n").trim();
        }
      }
    }
  }
}`,...(I=(E=p.parameters)==null?void 0:E.docs)==null?void 0:I.source}}};var P,_,k;g.parameters={...g.parameters,docs:{...(P=g.parameters)==null?void 0:P.docs,source:{originalSource:`{
  name: "輸入框狀態",
  args: {
    label: "Label",
    placeholder: "Placeholder",
    limit: 30,
    hintError: {
      error: () => h("div", {
        style: "display: flex; align-items: center; gap: 4px;"
      }, [h(Icon, {
        name: "SvgErrorCircle",
        style: "color: red;",
        size: 16
      }), h("span", "Error message")]),
      description: () => h(StatusIndicator, {
        themeColor: "neutral",
        variant: "text",
        size: "medium",
        isShowDot: false
      }, "Prompt message")
    },
    hintPrompt: {
      error: "",
      description: () => h(StatusIndicator, {
        themeColor: "neutral",
        variant: "text",
        size: "medium",
        isShowDot: false
      }, "Prompt message")
    },
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
        args,
        StatusIndicator,
        Icon
      };
    },
    template: \`
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
      </div>\`
  }),
  // 控制 controls 中能控制的參數
  parameters: {
    controls: {
      exclude: ["hint", "isDisabled"]
    },
    docs: {
      source: {
        transform: (src, storyContext) => {
          const {
            args
          } = storyContext;
          return [\`<script setup>\`, "import { ref, h } from \\"vue\\";", \`import { Textarea, Icon, StatusIndicator } from "@ded-wds-vue/ui";\`, \`const modelValue = ref("\${args.modelValue}");\`, \`<\/script>\`, "", "<template>", "  <Textarea", \`    \${args.label ? \`label="\${args.label}"\` : ""}\`, \`    \${args.placeholder ? \`placeholder="\${args.placeholder}"\` : ""}\`, \`    \${args.limit !== undefined ? \`:limit="\${args.limit}"\` : ""}\`, \`    :hint="{
        error: () => h('div', { style: 'display: flex; align-items: center; gap: 4px;' }, [
          h(Icon, { name: 'SvgErrorCircle', style: 'color: red;', size: 16 }),
          h('span', 'Error message')
        ]),
        description: ''
    }"\`, \`    \${args.isDisabled !== undefined ? \`:isDisabled="\${args.isDisabled}"\` : ""}\`, \`    \${args.className ? \`className="\${args.className}"\` : ""}\`, \`    v-model="modelValue"\`, "  ></Textarea>", "  <Textarea", \`    \${args.label ? \`label="\${args.label}"\` : ""}\`, \`    \${args.placeholder ? \`placeholder="\${args.placeholder}"\` : ""}\`, \`    \${args.limit !== undefined ? \`:limit="\${args.limit}"\` : ""}\`, \`    :hint="{
        error: '',
        description: () => h( StatusIndicator, {
          themeColor: 'neutral',
          variant: 'text',
          size: 'medium',
          isShowDot: false
        }, 'Prompt message')
    }"\`, \`    \${args.isDisabled !== undefined ? \`:isDisabled="\${args.isDisabled}"\` : ""}\`, \`    \${args.className ? \`className="\${args.className}"\` : ""}\`, \`    v-model="modelValue"\`, "  ></Textarea>", "  <Textarea", \`    \${args.label ? \`label="\${args.label}"\` : ""}\`, \`    \${args.placeholder ? \`placeholder="\${args.placeholder}"\` : ""}\`, \`    \${args.limit !== undefined ? \`:limit="\${args.limit}"\` : ""}\`, \`    :hint="{ error: '', description: '' }"\`, \`    :isDisabled="true"\`, \`    \${args.className ? \`className="\${args.className}"\` : ""}\`, \`    v-model="modelValue"\`, "  ></Textarea>", "</template>"].filter(Boolean).join("\\n").trim();
        }
      }
    }
  }
}`,...(k=(_=g.parameters)==null?void 0:_.docs)==null?void 0:k.source}}};const J=["TextareaDefault","TextareaLimit","TextareaStatus"];export{u as TextareaDefault,p as TextareaLimit,g as TextareaStatus,J as __namedExportsOrder,H as default};

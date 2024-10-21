import{e as V,c,t as m,f as s,a as o,g as d,n,o as r}from"./vue.esm-bundler-BOVVjKKy.js";import{_ as g}from"./Icon-_wk4SeoM.js";import"./iframe-CTsvu7iB.js";import"../sb-preview/runtime.js";const C={class:"input-container"},z={key:0,class:"input-label"},N=["type","placeholder"],l={__name:"Input",props:{type:{type:String,default:"text"},modelValue:{type:[String,Number]},placeholder:{type:String},label:{type:String},size:{type:String,validator:e=>["small","medium","large"].includes(e)},prefix:{type:String},suffix:{type:String},customClass:{type:String,default:""},hint:{type:Object,default:()=>({error:"",description:""})},isDisable:{type:Boolean}},emits:["update:modelValue"],setup(e,{emit:D}){const t=e,I=D,S=p=>{I("update:modelValue",p.target.value)},u=V(()=>t.hint.error.length>0?"error":t.hint.description.length>0?"desc":"");return(p,k)=>(r(),c("div",C,[t.label?(r(),c("label",z,m(t.label),1)):s("",!0),o("div",{class:n(["input-group",`component-${e.size}`,`input-border-${u.value}`,{"input-disable":e.isDisable}])},[e.prefix?(r(),d(g,{key:0,class:n(`icon-${e.size}`),name:t.prefix},null,8,["class","name"])):s("",!0),o("input",{type:t.type,class:n(["input",`text-${e.size}`]),placeholder:t.placeholder,onInput:S},null,42,N),e.suffix?(r(),d(g,{key:1,class:n(`icon-${e.size}`),name:t.suffix},null,8,["class","name"])):s("",!0)],2),o("small",{class:n(["input-hint",`input-hint-${u.value}`,{"input-disable":t.isDisable}])},m(e.hint.error.length>0?e.hint.error:e.hint.description),3)]))}};l.__docgenInfo={exportName:"default",displayName:"Input",description:"",tags:{},props:[{name:"type",type:{name:"string"},defaultValue:{func:!1,value:"'text'"}},{name:"modelValue",type:{name:"string|number"}},{name:"placeholder",type:{name:"string"}},{name:"label",type:{name:"string"}},{name:"size",type:{name:"string"},values:["small","medium","large"]},{name:"prefix",type:{name:"string"}},{name:"suffix",type:{name:"string"}},{name:"customClass",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"hint",type:{name:"object"},defaultValue:{func:!1,value:`{
  error: '',
  description: ''
}`}},{name:"isDisable",type:{name:"boolean"}}],events:[{name:"update:modelValue"}],sourceFiles:["/Users/auouser/Desktop/Work_Space/DED-WDS_VUE/libs/src/ui/element/Input/Input.vue"]};const A={title:"Design System/Input",component:l,tags:["autodocs"],argTypes:{type:{description:"設定 input 類型",control:{type:"select"},options:["text","number","password","email"]},placeholder:{description:"設定 input 輸入提示",control:{type:"text"}},label:{description:"設定 input 標題",control:{type:"text"}},size:{description:"設定 input 標題",control:{type:"select"},options:["small","medium","large"]},prefix:{description:"設定位於 input 前方的 icon",control:{type:"select"},options:["None","home","folder","academi","arrow-forward","finger-print","account_circle"],mapping:{None:null}},suffix:{description:"設定位於 input 後方的 icon",control:{type:"select"},options:["None","home","folder","academi","arrow-forward","finger-print","account_circle"],mapping:{None:null}},customClass:{description:"客製化樣式",control:{type:"text"}},hint:{description:"提示訊息",control:{type:"object"}},isDisable:{description:"是否禁用",control:{type:"boolean"}}},parameters:{docs:{title:"輸入框",description:{component:"輸入框組件的呈現及說明。。"}}}},a={name:"輸入框 jony",args:{type:"text",placeholder:"example@mail.com",label:"輸入框標題",size:"medium",prefix:"account_circle",hint:{error:"",description:"Please enter a Guide description"}},parameters:{controls:{exclude:["modelValue"]}}},i={name:"輸入框狀態",args:{type:"text",placeholder:"example@mail.com",label:"輸入框標題",size:"medium",prefix:"account_circle"},render:e=>({components:{Input:l},setup(){return{args:e}},template:`<div style="display:flex; gap: 16px">
                <Input v-bind="args" />
                <Input v-bind="args" :hint="{ error: 'Error Message', description: '' }" />
                <Input v-bind="args" :hint="{ error: '', description: 'Something Description' }"/>
            </div>
            `}),parameters:{controls:{exclude:["modelValue"]}}};var f,y,h;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`{
  name: '輸入框 jony',
  args: {
    type: 'text',
    placeholder: 'example@mail.com',
    label: '輸入框標題',
    size: 'medium',
    prefix: 'account_circle',
    hint: {
      error: '',
      description: 'Please enter a Guide description'
    }
  },
  // 控制 controls 中能控制的參數
  parameters: {
    controls: {
      // include: ['variant', 'content', 'themeColor', 'isDisable', 'prefix'],
      exclude: ['modelValue']
    }
  }
}`,...(h=(y=a.parameters)==null?void 0:y.docs)==null?void 0:h.source}}};var x,b,v;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`{
  name: '輸入框狀態',
  args: {
    type: 'text',
    placeholder: 'example@mail.com',
    label: '輸入框標題',
    size: 'medium',
    prefix: 'account_circle'
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
    template: \`<div style="display:flex; gap: 16px">
                <Input v-bind="args" />
                <Input v-bind="args" :hint="{ error: 'Error Message', description: '' }" />
                <Input v-bind="args" :hint="{ error: '', description: 'Something Description' }"/>
            </div>
            \`
  }),
  // 控制 controls 中能控制的參數
  parameters: {
    controls: {
      // include: ['variant', 'content', 'themeColor', 'isDisable', 'prefix'],
      exclude: ['modelValue']
    }
  }
}`,...(v=(b=i.parameters)==null?void 0:b.docs)==null?void 0:v.source}}};const B=["InputDefault","InputWithStatus"];export{a as InputDefault,i as InputWithStatus,B as __namedExportsOrder,A as default};

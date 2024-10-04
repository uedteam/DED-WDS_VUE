import{I as p}from"./Input-CEIQaJNA.js";import"./vue.esm-bundler-CsTC-5Ev.js";import"./Icon-Pq8-XFtv.js";import"./iframe-D3-rZU4J.js";import"../sb-preview/runtime.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const y={title:"Design System/Input",component:p,tags:["autodocs"],argTypes:{type:{description:"設定 input 類型",control:{type:"select"},options:["text","number","password","email"]},placeholder:{description:"設定 input 輸入提示",control:{type:"text"}},label:{description:"設定 input 標題",control:{type:"text"}},size:{description:"設定 input 標題",control:{type:"select"},options:["small","medium","large"]},prefix:{description:"設定位於 input 前方的 icon",control:{type:"select"},options:["None","home","folder","academi","arrow-forward","finger-print","account_circle"],mapping:{None:null}},suffix:{description:"設定位於 input 後方的 icon",control:{type:"select"},options:["None","home","folder","academi","arrow-forward","finger-print","account_circle"],mapping:{None:null}},customClass:{description:"客製化樣式",control:{type:"text"}},hint:{description:"提示訊息",control:{type:"object"}},isDisable:{description:"是否禁用",control:{type:"boolean"}}},parameters:{docs:{title:"輸入框",description:{component:"輸入框組件的呈現及說明。。"}}}},e={name:"輸入框 jony",args:{type:"text",placeholder:"example@mail.com",label:"輸入框標題",size:"medium",prefix:"account_circle",hint:{error:"",description:"Please enter a Guide description"}},parameters:{controls:{exclude:["modelValue"]}}},n={name:"輸入框狀態",args:{type:"text",placeholder:"example@mail.com",label:"輸入框標題",size:"medium",prefix:"account_circle"},render:c=>({components:{Input:p},setup(){return{args:c}},template:`<div style="display:flex; gap: 16px">
                <Input v-bind="args" />
                <Input v-bind="args" :hint="{ error: 'Error Message', description: '' }" />
                <Input v-bind="args" :hint="{ error: '', description: 'Something Description' }"/>
            </div>
            `}),parameters:{controls:{exclude:["modelValue"]}}};var t,r,o;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
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
}`,...(o=(r=e.parameters)==null?void 0:r.docs)==null?void 0:o.source}}};var i,a,s;n.parameters={...n.parameters,docs:{...(i=n.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(s=(a=n.parameters)==null?void 0:a.docs)==null?void 0:s.source}}};const f=["InputDefault","InputWithStatus"];export{e as InputDefault,n as InputWithStatus,f as __namedExportsOrder,y as default};

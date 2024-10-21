import{I as r}from"./Input-2a9CWpeU.js";import"./vue.esm-bundler-Bm7qTojY.js";import"./Icon-0yHNpaiS.js";import"./iframe-DS6YppJf.js";import"../sb-preview/runtime.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const x={title:"Design System/Input",component:r,tags:["autodocs"],argTypes:{type:{description:"設定 Input 的類型，如文字、數字、密碼或電子郵件",control:{type:"select"},options:["text","number","password","email"]},placeholder:{description:"設定 Input 的提示文字，幫助用戶了解預期輸入內容",control:{type:"text"}},label:{description:"設定 Input 標題文字",control:{type:"text"}},size:{description:"設定 Input 的大小",control:{type:"select"},options:["small","medium","large"]},prefix:{description:"設置在 Input 前方的圖示，用於輔助輸入信息",control:{type:"select"},options:["None","home","folder","lock","arrow-forward","finger-print","account_circle"],mapping:{None:null}},suffix:{description:"設置在 Input 後方的圖示，用於輔助輸入信息",control:{type:"select"},options:["None","home","folder","lock","arrow-forward","finger-print","account_circle"],mapping:{None:null}},customClass:{description:"客製化樣式",control:{type:"text"}},hint:{description:"顯示在輸入框下方的提示訊息，提供額外的指導信息",control:{type:"object"}},isDisabled:{description:"設定 Input 是否禁用，禁用後無法進行輸入",control:{type:"boolean"}}},parameters:{docs:{title:"Input",description:{component:"Input 組件的呈現及說明。。"}}}},e={name:"Input 基礎樣式",args:{type:"text",placeholder:"example@mail.com",label:"輸入框標題",size:"medium",prefix:"account_circle",suffix:"None",hint:{error:"",description:"輸入框提示訊息"},isDisabled:!1},render:n=>({components:{Input:r},setup(){return{args:n}},template:`<div style="display:flex; gap: 16px">
                <Input 
                    :type="args.type"
                    :placeholder="args.placeholder"
                    :label="args.label"
                    :size="args.size"
                    :prefix="args.prefix"
                    :suffix="args.suffix"
                    :hint="args.hint"
                    :isDisabled="args.isDisabled"
                />
            </div>
            `}),parameters:{controls:{exclude:["modelValue"]}}},s={name:"Input 驗證樣式",args:{type:"text",placeholder:"example@mail.com",label:"輸入框標題",size:"medium",prefix:"account_circle",suffix:"None",isDisabled:!1},render:n=>({components:{Input:r},setup(){return{args:n}},template:`
            <div style="display: flex; gap:16px">
                <Input
                    :type="args.type"
                    :placeholder="args.placeholder"
                    :label="args.label"
                    :size="args.size"
                    :prefix="args.prefix"
                    :suffix="args.suffix"
                    :hint="args.hint"
                    :isDisabled="args.isDisabled"
                />
                <Input
                    :type="args.type"
                    :placeholder="args.placeholder"
                    :label="args.label"
                    :size="args.size"
                    :prefix="args.prefix"
                    :suffix="args.suffix"
                    :hint="{ error: '輸入框錯誤提示訊息', description: '' }"
                    :isDisabled="args.isDisabled"
                />
                <Input
                    :type="args.type"
                    :placeholder="args.placeholder"
                    :label="args.label"
                    :size="args.size"
                    :prefix="args.prefix"
                    :suffix="args.suffix"
                    :hint="{ error: '', description: '輸入框提示訊息' }"
                    :isDisabled="args.isDisabled"
                />
            </div>
        `}),parameters:{controls:{exclude:["modelValue","hint","customClass"]}}};var a,t,i;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
  name: 'Input 基礎樣式',
  args: {
    type: 'text',
    placeholder: 'example@mail.com',
    label: '輸入框標題',
    size: 'medium',
    prefix: 'account_circle',
    suffix: 'None',
    hint: {
      error: '',
      description: '輸入框提示訊息'
    },
    isDisabled: false
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
                <Input 
                    :type="args.type"
                    :placeholder="args.placeholder"
                    :label="args.label"
                    :size="args.size"
                    :prefix="args.prefix"
                    :suffix="args.suffix"
                    :hint="args.hint"
                    :isDisabled="args.isDisabled"
                />
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
}`,...(i=(t=e.parameters)==null?void 0:t.docs)==null?void 0:i.source}}};var l,p,o;s.parameters={...s.parameters,docs:{...(l=s.parameters)==null?void 0:l.docs,source:{originalSource:`{
  name: "Input 驗證樣式",
  args: {
    type: 'text',
    placeholder: 'example@mail.com',
    label: '輸入框標題',
    size: 'medium',
    prefix: 'account_circle',
    suffix: 'None',
    isDisabled: false
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
    template: \`
            <div style="display: flex; gap:16px">
                <Input
                    :type="args.type"
                    :placeholder="args.placeholder"
                    :label="args.label"
                    :size="args.size"
                    :prefix="args.prefix"
                    :suffix="args.suffix"
                    :hint="args.hint"
                    :isDisabled="args.isDisabled"
                />
                <Input
                    :type="args.type"
                    :placeholder="args.placeholder"
                    :label="args.label"
                    :size="args.size"
                    :prefix="args.prefix"
                    :suffix="args.suffix"
                    :hint="{ error: '輸入框錯誤提示訊息', description: '' }"
                    :isDisabled="args.isDisabled"
                />
                <Input
                    :type="args.type"
                    :placeholder="args.placeholder"
                    :label="args.label"
                    :size="args.size"
                    :prefix="args.prefix"
                    :suffix="args.suffix"
                    :hint="{ error: '', description: '輸入框提示訊息' }"
                    :isDisabled="args.isDisabled"
                />
            </div>
        \`
  }),
  // 控制 controls 中能控制的參數
  parameters: {
    controls: {
      // include: ['themeColor', 'label', 'value', 'name' ],
      exclude: ['modelValue', 'hint', 'customClass']
    }
  }
}`,...(o=(p=s.parameters)==null?void 0:p.docs)==null?void 0:o.source}}};const b=["InputDefault","InputStatus"];export{e as InputDefault,s as InputStatus,b as __namedExportsOrder,x as default};

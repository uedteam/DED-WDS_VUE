import{_ as r}from"./Input-DRReAffT.js";import"./vue.esm-bundler-B_DV3Cj1.js";import"./Icon-DrfMcT-E.js";import"./iframe-Pk4NDnej.js";import"../sb-preview/runtime.js";const f={title:"Design System/Input",component:r,tags:["autodocs"],argTypes:{type:{description:"輸入類型",control:{type:"select"},options:["text","number","password","email"]},placeholder:{description:"輸入提示",control:{type:"text"}},label:{description:"標題",control:{type:"text"}},size:{description:"輸入框尺寸",control:{type:"select"},options:["small","medium","large"]},prefix:{description:"前置元素",control:{type:"select"},options:["None","home","folder","lock","arrow-forward","finger-print","account_circle"],mapping:{None:null}},suffix:{description:"後置元素",control:{type:"select"},options:["None","home","folder","lock","arrow-forward","finger-print","account_circle"],mapping:{None:null}},className:{description:"客製化樣式",control:{type:"text"}},hint:{description:"提示訊息",control:{type:"object"}},isDisabled:{description:"是否禁用",control:{type:"boolean"}}},parameters:{docs:{title:"Input",description:{component:"Input 組件的呈現及說明。。"}}}},e={name:"主要項目",args:{type:"text",placeholder:"example@mail.com",label:"輸入框標題",size:"medium",prefix:"account_circle",suffix:"None",hint:{error:"",description:"輸入框提示訊息"},isDisabled:!1,className:""},render:a=>({components:{Input:r},setup(){return{args:a}},template:`<div style="display:flex; gap: 16px">
                <Input 
                    :type="args.type"
                    :placeholder="args.placeholder"
                    :label="args.label"
                    :size="args.size"
                    :prefix="args.prefix"
                    :suffix="args.suffix"
                    :hint="args.hint"
                    :isDisabled="args.isDisabled"
                    :className="args.className"
                />
            </div>
            `}),parameters:{controls:{exclude:["modelValue"]}}},s={name:"輸入框狀態",args:{type:"text",placeholder:"example@mail.com",label:"輸入框標題",size:"medium",prefix:"account_circle",suffix:"None",isDisabled:!1,className:""},render:a=>({components:{Input:r},setup(){return{args:a}},template:`
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
                    :className="args.className"
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
                    :className="args.className"
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
                    :className="args.className"
                />
            </div>
        `}),parameters:{controls:{exclude:["modelValue","hint"]}}};var n,l,i;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  name: '主要項目',
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
    isDisabled: false,
    className: ''
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
                    :className="args.className"
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
}`,...(i=(l=e.parameters)==null?void 0:l.docs)==null?void 0:i.source}}};var t,p,o;s.parameters={...s.parameters,docs:{...(t=s.parameters)==null?void 0:t.docs,source:{originalSource:`{
  name: "輸入框狀態",
  args: {
    type: 'text',
    placeholder: 'example@mail.com',
    label: '輸入框標題',
    size: 'medium',
    prefix: 'account_circle',
    suffix: 'None',
    isDisabled: false,
    className: ''
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
                    :className="args.className"
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
                    :className="args.className"
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
                    :className="args.className"
                />
            </div>
        \`
  }),
  // 控制 controls 中能控制的參數
  parameters: {
    controls: {
      // include: ['themeColor', 'label', 'value', 'name' ],
      exclude: ['modelValue', 'hint']
    }
  }
}`,...(o=(p=s.parameters)==null?void 0:p.docs)==null?void 0:o.source}}};const x=["InputDefault","InputStatus"];export{e as InputDefault,s as InputStatus,x as __namedExportsOrder,f as default};

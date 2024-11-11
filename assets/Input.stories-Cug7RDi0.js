import{_ as l}from"./Input-C36kH_go.js";import"./vue.esm-bundler-jfoHxfC9.js";import"./Icon-DakahK8X.js";import"./iframe-CGSdzTJx.js";import"../sb-preview/runtime.js";function f(s){return`{
        error: '${s.error||""}',
        description: '${s.description||""}'
    }`}const $={title:"Design System/Input",component:l,tags:["autodocs"],argTypes:{type:{description:"輸入類型",control:{type:"select"},options:["text","number","password","email"]},placeholder:{description:"輸入提示",control:{type:"text"}},label:{description:"標題",control:{type:"text"}},size:{description:"輸入框尺寸",control:{type:"select"},options:["small","medium","large"]},prefix:{description:"前置元素",control:{type:"select",labels:{"":"None",home:"home",folder:"folder",lock:"lock","arrow-forward":"arrow-forward","finger-print":"finger-print",account_circle:"account_circle"}},options:["","home","folder","lock","arrow-forward","finger-print","account_circle"]},suffix:{description:"後置元素",control:{type:"select",labels:{"":"None",home:"home",folder:"folder",lock:"lock","arrow-forward":"arrow-forward","finger-print":"finger-print",account_circle:"account_circle"}},options:["","home","folder","lock","arrow-forward","finger-print","account_circle"]},className:{description:"客製化樣式",control:{type:"text"}},hint:{description:"提示訊息",control:{type:"object"},table:{type:{summary:"{ error: string; description: string; }[]"}}},isDisabled:{description:"是否禁用",control:{type:"boolean"}}},parameters:{docs:{title:"Input",description:{component:"Input 組件的呈現及說明。。"}}}},r={name:"預設項目",args:{type:"text",placeholder:"example@mail.com",label:"輸入框標題",size:"medium",prefix:"account_circle",suffix:"",hint:{error:"",description:"輸入框提示訊息"},isDisabled:!1,className:""},render:s=>({components:{Input:l},setup(){return{args:s}},template:`
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
            `}),parameters:{controls:{exclude:["modelValue"]},docs:{source:{transform:(s,i)=>{const{args:e}=i,d=f(e.hint);return["<Input",`  type="${e.type}"`,`  placeholder="${e.placeholder}"`,`  label="${e.label}"`,`  size="${e.size}"`,`  prefix="${e.prefix}"`,`  suffix="${e.suffix}"`,`  :hint="${d}"`,`  :isDisabled="${e.isDisabled}"`,`  className="${e.className}"`,"/>"].join(`
`).trim()}}}}},a={name:"輸入框狀態",args:{type:"text",placeholder:"請輸入帳號",label:"帳號",size:"medium",prefix:"account_circle",suffix:"",isDisabled:!1,className:""},render:s=>({components:{Input:l},setup(){return{args:s}},template:`
            <div style="display: flex; flex-direction: column; gap:16px">
                <Input
                    :type="args.type"
                    :placeholder="args.placeholder"
                    :label="args.label"
                    :size="args.size"
                    :prefix="args.prefix"
                    :suffix="args.suffix"
                    :hint="{ error: '', description: '描述提示訊息' }"
                    :isDisabled="args.isDisabled"
                    :className="args.className"
                />
                <Input
                    type="password"
                    placeholder="請輸入密碼"
                    label="密碼"
                    :size="args.size"
                    prefix="lock"
                    :suffix="args.suffix"
                    :hint="{ error: '', description: '描述提示訊息' }"
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
                    :hint="{ error: '輸入框錯誤訊息', description: '' }"
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
        `}),parameters:{controls:{exclude:["modelValue","hint"]},docs:{source:{transform:(s,i)=>{const{args:e}=i;return["<Input",`  type="${e.type}"`,`  placeholder="${e.placeholder}"`,`  label="${e.label}"`,`  size="${e.size}"`,`  prefix="${e.prefix}"`,`  suffix="${e.suffix}"`,`  :hint="{ error: '', description: '描述提示訊息' }"`,`  :isDisabled="${e.isDisabled}"`,`  className="${e.className}"`,"/>","<Input",'  type="password"','  placeholder="請輸入密碼"','  label="密碼"',`  size="${e.size}"`,'  prefix="lock"',`  suffix="${e.suffix}"`,`  :hint="{ error: '', description: '描述提示訊息' }"`,`  :isDisabled="${e.isDisabled}"`,`  className="${e.className}"`,"/>","<Input",`  type="${e.type}"`,`  placeholder="${e.placeholder}"`,`  label="${e.label}"`,`  size="${e.size}"`,`  prefix="${e.prefix}"`,`  suffix="${e.suffix}"`,`  :hint="{ error: '輸入框錯誤訊息', description: '' }"`,`  :isDisabled="${e.isDisabled}"`,`  className="${e.className}"`,"/>","<Input",`  type="${e.type}"`,`  placeholder="${e.placeholder}"`,`  label="${e.label}"`,`  size="${e.size}"`,`  prefix="${e.prefix}"`,`  suffix="${e.suffix}"`,`  :hint="{ error: '', description: '輸入框提示訊息' }"`,`  :isDisabled="${e.isDisabled}"`,`  className="${e.className}"`,"/>"].join(`
`).trim()}}}}};var n,t,o;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
  name: '預設項目',
  args: {
    type: 'text',
    placeholder: 'example@mail.com',
    label: '輸入框標題',
    size: 'medium',
    prefix: 'account_circle',
    suffix: '',
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
    template: \`
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
            \`
  }),
  // 控制 controls 中能控制的參數
  parameters: {
    controls: {
      // include: ['variant', 'content', 'themeColor', 'isDisable', 'prefix'],
      exclude: ['modelValue']
    },
    docs: {
      source: {
        transform: (src, storyContext) => {
          const {
            args
          } = storyContext;
          const dataSourceString = formatDataSource(args.hint);
          return ['<Input', \`  type="\${args.type}"\`, \`  placeholder="\${args.placeholder}"\`, \`  label="\${args.label}"\`, \`  size="\${args.size}"\`, \`  prefix="\${args.prefix}"\`, \`  suffix="\${args.suffix}"\`, \`  :hint="\${dataSourceString}"\`, \`  :isDisabled="\${args.isDisabled}"\`, \`  className="\${args.className}"\`, '/>'].join('\\n').trim();
        }
      }
    }
  }
}`,...(o=(t=r.parameters)==null?void 0:t.docs)==null?void 0:o.source}}};var p,u,c;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: "輸入框狀態",
  args: {
    type: 'text',
    placeholder: '請輸入帳號',
    label: '帳號',
    size: 'medium',
    prefix: 'account_circle',
    suffix: '',
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
            <div style="display: flex; flex-direction: column; gap:16px">
                <Input
                    :type="args.type"
                    :placeholder="args.placeholder"
                    :label="args.label"
                    :size="args.size"
                    :prefix="args.prefix"
                    :suffix="args.suffix"
                    :hint="{ error: '', description: '描述提示訊息' }"
                    :isDisabled="args.isDisabled"
                    :className="args.className"
                />
                <Input
                    type="password"
                    placeholder="請輸入密碼"
                    label="密碼"
                    :size="args.size"
                    prefix="lock"
                    :suffix="args.suffix"
                    :hint="{ error: '', description: '描述提示訊息' }"
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
                    :hint="{ error: '輸入框錯誤訊息', description: '' }"
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
    },
    docs: {
      source: {
        transform: (src, storyContext) => {
          const {
            args
          } = storyContext;
          return ['<Input', \`  type="\${args.type}"\`, \`  placeholder="\${args.placeholder}"\`, \`  label="\${args.label}"\`, \`  size="\${args.size}"\`, \`  prefix="\${args.prefix}"\`, \`  suffix="\${args.suffix}"\`, \`  :hint="{ error: '', description: '描述提示訊息' }"\`, \`  :isDisabled="\${args.isDisabled}"\`, \`  className="\${args.className}"\`, '/>', '<Input', \`  type="password"\`, \`  placeholder="請輸入密碼"\`, \`  label="密碼"\`, \`  size="\${args.size}"\`, \`  prefix="lock"\`, \`  suffix="\${args.suffix}"\`, \`  :hint="{ error: '', description: '描述提示訊息' }"\`, \`  :isDisabled="\${args.isDisabled}"\`, \`  className="\${args.className}"\`, '/>', '<Input', \`  type="\${args.type}"\`, \`  placeholder="\${args.placeholder}"\`, \`  label="\${args.label}"\`, \`  size="\${args.size}"\`, \`  prefix="\${args.prefix}"\`, \`  suffix="\${args.suffix}"\`, \`  :hint="{ error: '輸入框錯誤訊息', description: '' }"\`, \`  :isDisabled="\${args.isDisabled}"\`, \`  className="\${args.className}"\`, '/>', '<Input', \`  type="\${args.type}"\`, \`  placeholder="\${args.placeholder}"\`, \`  label="\${args.label}"\`, \`  size="\${args.size}"\`, \`  prefix="\${args.prefix}"\`, \`  suffix="\${args.suffix}"\`, \`  :hint="{ error: '', description: '輸入框提示訊息' }"\`, \`  :isDisabled="\${args.isDisabled}"\`, \`  className="\${args.className}"\`, '/>'].join('\\n').trim();
        }
      }
    }
  }
}`,...(c=(u=a.parameters)==null?void 0:u.docs)==null?void 0:c.source}}};const D=["InputDefault","InputStatus"];export{r as InputDefault,a as InputStatus,D as __namedExportsOrder,$ as default};

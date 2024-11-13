import{I as l}from"./Input-B7Kj7u96.js";import"./vue.esm-bundler-DHeteTnx.js";import"./Icon-CXB6Oc-o.js";import"./iframe-BT1d8BmJ.js";import"../sb-preview/runtime.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";function g(a){return`{
        error: '${a.error||""}',
        description: '${a.description||""}'
    }`}const y={title:"Design System/Input",component:l,tags:["autodocs"],argTypes:{label:{description:"標題",control:{type:"text"}},type:{description:"輸入類型",control:{type:"select"},options:["number","text","password","email"],table:{type:{summary:"number | text | password | email "}}},placeholder:{description:"輸入提示",control:{type:"text"}},prefix:{description:"前置元素",control:{type:"select",labels:{"":"None",home:"home",folder:"folder",lock:"lock","arrow-forward":"arrow-forward","finger-print":"finger-print",account_circle:"account_circle"}},options:["","home","folder","lock","arrow-forward","finger-print","account_circle"]},size:{description:"輸入框尺寸",control:{type:"select"},options:["small","medium","large"],table:{type:{summary:"small | medium | large "}}},initValue:{description:"",control:{type:"text"}},hint:{description:"提示訊息",control:{type:"object"},table:{type:{summary:"{ error: string; description: string; }[]"}}},isDisabled:{description:"是否禁用",control:{type:"boolean"}},className:{description:"客製化樣式",control:{type:"text"}}},parameters:{docs:{title:"Input",description:{component:"Input 組件的呈現及說明。。"}}}},s={name:"預設項目",args:{label:"輸入框標題",type:"text",placeholder:"example@mail.com",prefix:"account_circle",size:"medium",initValue:"",hint:{error:"",description:"輸入框提示訊息"},isDisabled:!1,className:""},render:a=>({components:{Input:l},setup(){return{args:a}},template:`
            <Input
                :label="args.label"
                :type="args.type"
                :placeholder="args.placeholder"
                :prefix="args.prefix"
                :size="args.size"
                :initValue="args.initValue"
                :hint="args.hint"
                :isDisabled="args.isDisabled"
                :className="args.className"
            />
            `}),parameters:{controls:{exclude:["modelValue"]},docs:{source:{transform:(a,i)=>{const{args:e}=i,d=g(e.hint);return["<Input",`  label="${e.label}"`,`  type="${e.type}"`,`  placeholder="${e.placeholder}"`,`  prefix="${e.prefix}"`,`  size="${e.size}"`,`  initValue="${e.initValue}"`,`  :hint="${d}"`,`  :isDisabled="${e.isDisabled}"`,`  className="${e.className}"`,"/>"].join(`
`).trim()}}}}},r={name:"輸入框狀態",args:{label:"帳號",type:"text",placeholder:"請輸入帳號",prefix:"account_circle",size:"medium",initValue:"",isDisabled:!1,className:""},render:a=>({components:{Input:l},setup(){return{args:a}},template:`
            <div style="display: flex; flex-direction: column; gap:16px">
                <Input
                    :label="args.label"
                    :type="args.type"
                    :placeholder="args.placeholder"
                    :prefix="args.prefix"
                    :size="args.size"
                    :initValue="args.initValue"
                    :hint="{ error: '', description: '描述提示訊息' }"
                    :isDisabled="args.isDisabled"
                    :className="args.className"
                />
                <Input
                    label="密碼"
                    type="password"
                    placeholder="請輸入密碼"
                    prefix="lock"
                    :size="args.size"
                    :initValue="args.initValue"
                    :hint="{ error: '', description: '描述提示訊息' }"
                    :isDisabled="args.isDisabled"
                    :className="args.className"
                />
                <Input
                    :label="args.label"
                    :type="args.type"
                    :placeholder="args.placeholder"
                    :prefix="args.prefix"
                    :size="args.size"
                    :initValue="args.initValue"
                    :hint="{ error: '輸入框錯誤訊息', description: '' }"
                    :isDisabled="args.isDisabled"
                    :className="args.className"
                />
                <Input
                    :label="args.label"
                    :type="args.type"
                    :placeholder="args.placeholder"
                    :prefix="args.prefix"
                    :size="args.size"
                    :initValue="args.initValue"
                    :hint="{ error: '', description: '輸入框提示訊息' }"
                    :isDisabled="args.isDisabled"
                    :className="args.className"
                />
            </div>
        `}),parameters:{controls:{},docs:{source:{transform:(a,i)=>{const{args:e}=i;return["<Input",`  label="${e.label}"`,`  type="${e.type}"`,`  placeholder="${e.placeholder}"`,`  prefix="${e.prefix}"`,`  size="${e.size}"`,`  initValue="${e.initValue}"`,`  :hint="{ error: '', description: '描述提示訊息' }"`,`  :isDisabled="${e.isDisabled}"`,`  className="${e.className}"`,"/>","<Input",'  label="密碼"','  type="password"','  placeholder="請輸入密碼"','  prefix="lock"',`  size="${e.size}"`,`  initValue="${e.initValue}"`,`  :hint="{ error: '', description: '描述提示訊息' }"`,`  :isDisabled="${e.isDisabled}"`,`  className="${e.className}"`,"/>","<Input",`  label="${e.label}"`,`  type="${e.type}"`,`  placeholder="${e.placeholder}"`,`  prefix="${e.prefix}"`,`  size="${e.size}"`,`  initValue="${e.initValue}"`,`  :hint="{ error: '輸入框錯誤訊息', description: '' }"`,`  :isDisabled="${e.isDisabled}"`,`  className="${e.className}"`,"/>","<Input",`  label="${e.label}"`,`  type="${e.type}"`,`  placeholder="${e.placeholder}"`,`  prefix="${e.prefix}"`,`  size="${e.size}"`,`  initValue="${e.initValue}"`,`  :hint="{ error: '', description: '輸入框提示訊息' }"`,`  :isDisabled="${e.isDisabled}"`,`  className="${e.className}"`,"/>"].join(`
`).trim()}}}}};var n,t,o;s.parameters={...s.parameters,docs:{...(n=s.parameters)==null?void 0:n.docs,source:{originalSource:`{
  name: '預設項目',
  args: {
    label: '輸入框標題',
    type: 'text',
    placeholder: 'example@mail.com',
    prefix: 'account_circle',
    size: 'medium',
    initValue: '',
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
                :label="args.label"
                :type="args.type"
                :placeholder="args.placeholder"
                :prefix="args.prefix"
                :size="args.size"
                :initValue="args.initValue"
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
          return ['<Input', \`  label="\${args.label}"\`, \`  type="\${args.type}"\`, \`  placeholder="\${args.placeholder}"\`, \`  prefix="\${args.prefix}"\`, \`  size="\${args.size}"\`, \`  initValue="\${args.initValue}"\`, \`  :hint="\${dataSourceString}"\`, \`  :isDisabled="\${args.isDisabled}"\`, \`  className="\${args.className}"\`, '/>'].join('\\n').trim();
        }
      }
    }
  }
}`,...(o=(t=s.parameters)==null?void 0:t.docs)==null?void 0:o.source}}};var p,u,c;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: "輸入框狀態",
  args: {
    label: '帳號',
    type: 'text',
    placeholder: '請輸入帳號',
    prefix: 'account_circle',
    size: 'medium',
    initValue: '',
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
                    :label="args.label"
                    :type="args.type"
                    :placeholder="args.placeholder"
                    :prefix="args.prefix"
                    :size="args.size"
                    :initValue="args.initValue"
                    :hint="{ error: '', description: '描述提示訊息' }"
                    :isDisabled="args.isDisabled"
                    :className="args.className"
                />
                <Input
                    label="密碼"
                    type="password"
                    placeholder="請輸入密碼"
                    prefix="lock"
                    :size="args.size"
                    :initValue="args.initValue"
                    :hint="{ error: '', description: '描述提示訊息' }"
                    :isDisabled="args.isDisabled"
                    :className="args.className"
                />
                <Input
                    :label="args.label"
                    :type="args.type"
                    :placeholder="args.placeholder"
                    :prefix="args.prefix"
                    :size="args.size"
                    :initValue="args.initValue"
                    :hint="{ error: '輸入框錯誤訊息', description: '' }"
                    :isDisabled="args.isDisabled"
                    :className="args.className"
                />
                <Input
                    :label="args.label"
                    :type="args.type"
                    :placeholder="args.placeholder"
                    :prefix="args.prefix"
                    :size="args.size"
                    :initValue="args.initValue"
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
      // exclude: ['modelValue', 'hint'],
    },
    docs: {
      source: {
        transform: (src, storyContext) => {
          const {
            args
          } = storyContext;
          return ['<Input', \`  label="\${args.label}"\`, \`  type="\${args.type}"\`, \`  placeholder="\${args.placeholder}"\`, \`  prefix="\${args.prefix}"\`, \`  size="\${args.size}"\`, \`  initValue="\${args.initValue}"\`, \`  :hint="{ error: '', description: '描述提示訊息' }"\`, \`  :isDisabled="\${args.isDisabled}"\`, \`  className="\${args.className}"\`, '/>', '<Input', \`  label="密碼"\`, \`  type="password"\`, \`  placeholder="請輸入密碼"\`, \`  prefix="lock"\`, \`  size="\${args.size}"\`, \`  initValue="\${args.initValue}"\`, \`  :hint="{ error: '', description: '描述提示訊息' }"\`, \`  :isDisabled="\${args.isDisabled}"\`, \`  className="\${args.className}"\`, '/>', '<Input', \`  label="\${args.label}"\`, \`  type="\${args.type}"\`, \`  placeholder="\${args.placeholder}"\`, \`  prefix="\${args.prefix}"\`, \`  size="\${args.size}"\`, \`  initValue="\${args.initValue}"\`, \`  :hint="{ error: '輸入框錯誤訊息', description: '' }"\`, \`  :isDisabled="\${args.isDisabled}"\`, \`  className="\${args.className}"\`, '/>', '<Input', \`  label="\${args.label}"\`, \`  type="\${args.type}"\`, \`  placeholder="\${args.placeholder}"\`, \`  prefix="\${args.prefix}"\`, \`  size="\${args.size}"\`, \`  initValue="\${args.initValue}"\`, \`  :hint="{ error: '', description: '輸入框提示訊息' }"\`, \`  :isDisabled="\${args.isDisabled}"\`, \`  className="\${args.className}"\`, '/>'].join('\\n').trim();
        }
      }
    }
  }
}`,...(c=(u=r.parameters)==null?void 0:u.docs)==null?void 0:c.source}}};const D=["InputDefault","InputStatus"];export{s as InputDefault,r as InputStatus,D as __namedExportsOrder,y as default};

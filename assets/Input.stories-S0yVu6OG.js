import{_ as l}from"./Input-Bh7mD7f5.js";import"./vue.esm-bundler-Db4pcR2I.js";import"./Icon-DbRQxRx8.js";import"./iframe-G7TsRw4U.js";import"../sb-preview/runtime.js";function u(a){return`{
        error: '${a.error||""}',
        description: '${a.description||""}'
    }`}const f={title:"Component/Input",component:l,tags:["autodocs"],argTypes:{label:{description:"標題",control:{type:"text"}},type:{description:"輸入類型",control:{type:"select"},options:["number","text","password","email"],table:{type:{summary:"number | text | password | email "}}},hasClear:{description:"是否顯示清除按鈕",control:{type:"boolean"}},placeholder:{description:"輸入提示",control:{type:"text"}},prefix:{description:"前置元素",control:{type:"select",labels:{"":"none",SvgAccount:"SvgAccount",SvgSearch:"SvgSearch",SvgVisibility:"SvgVisibility",SvgVisibilityOff:"SvgVisibilityOff"}},options:["","SvgAccount","SvgSearch","SvgVisibility","SvgVisibilityOff"]},size:{description:"輸入框尺寸",control:{type:"select"},options:["small","medium","large"],table:{type:{summary:"small | medium | large "}}},initValue:{description:"初始值",control:{type:"text"}},maxLimit:{description:"最長輸入限制",control:{type:"number"}},hint:{description:"提示訊息",control:{type:"object"},table:{type:{summary:"{ error: string; description: string; }"}}},isDisabled:{description:"是否禁用",control:{type:"boolean"}},isOpen:{description:"下拉控制",control:{type:"boolean"},table:{disable:!0}},className:{description:"客製化樣式",control:{type:"text"}}},parameters:{docs:{title:"Input",description:{component:"輸入框組件的呈現及說明。。"}}}},s={name:"預設項目",args:{label:"Label",type:"text",hasClear:!0,placeholder:"Placeholder...",prefix:"SvgAccount",size:"medium",initValue:"",maxLimit:1/0,hint:{error:"",description:"Prompt message"},isDisabled:!1,className:""},render:a=>({components:{Input:l},setup(){return{args:a}},template:`
            <Input
                :label="args.label"
                :type="args.type"
                :hasClear="args.hasClear"
                :placeholder="args.placeholder"
                :prefix="args.prefix"
                :size="args.size"
                :initValue="args.initValue"
                :maxLimit="args.maxLimit"
                :hint="args.hint"
                :isDisabled="args.isDisabled"
                :className="args.className"
            />
            `}),parameters:{controls:{include:["label","type","hasClear","placeholder","prefix","size","initValue","maxLimit","hint","isDisabled","className"]},docs:{source:{transform:(a,i)=>{const{args:e}=i,g=u(e.hint);return["<Input",`  label="${e.label}"`,`  type="${e.type}"`,`  hasClear="${e.hasClear}"`,`  placeholder="${e.placeholder}"`,`  prefix="${e.prefix}"`,`  size="${e.size}"`,`  initValue="${e.initValue}"`,`  maxLimit="${e.maxLimit}"`,`  :hint="${g}"`,`  :isDisabled="${e.isDisabled}"`,`  className="${e.className}"`,"/>"].join(`
`).trim()}}}}},r={name:"輸入框狀態",args:{label:"Account",type:"text",hasClear:!0,placeholder:"Placeholder...",prefix:"SvgAccount",size:"medium",initValue:"",maxLimit:1/0,className:""},render:a=>({components:{Input:l},setup(){return{args:a}},template:`
            <div style="display: flex; flex-direction: column; gap:8px">
                <Input
                    :label="args.label"
                    :type="args.type"
                    :hasClear="args.hasClear"
                    :placeholder="args.placeholder"
                    :prefix="args.prefix"
                    :size="args.size"
                    :initValue="args.initValue"
                    :maxLimit="args.maxLimit"
                    :hint="{ error: '', description: 'Prompt message' }"
                    :isDisabled="false"
                    :className="args.className"
                />
                <Input
                    label="Password"
                    type="password"
                    :hasClear="args.hasClear"
                    :placeholder="args.placeholder"
                    prefix="SvgLock"
                    :size="args.size"
                    :initValue="args.initValue"
                    :maxLimit="args.maxLimit"
                    :hint="{ error: '', description: 'Prompt message' }"
                    :isDisabled="false"
                    :className="args.className"
                />
                <Input
                    :label="args.label"
                    :type="args.type"
                    :hasClear="args.hasClear"
                    :placeholder="args.placeholder"
                    :prefix="args.prefix"
                    :size="args.size"
                    :initValue="args.initValue"
                    :maxLimit="args.maxLimit"
                    :hint="{ error: 'Error message', description: '' }"
                    :isDisabled="false"
                    :className="args.className"
                />
                <Input
                    :label="args.label"
                    :type="args.type"
                    :hasClear="args.hasClear"
                    :placeholder="args.placeholder"
                    :prefix="args.prefix"
                    :size="args.size"
                    :initValue="args.initValue"
                    :maxLimit="args.maxLimit"
                    :hint="{ error: '', description: 'Prompt message' }"
                    :isDisabled="false"
                    :className="args.className"
                />
                <Input
                    :label="args.label"
                    :type="args.type"
                    :hasClear="args.hasClear"
                    :placeholder="args.placeholder"
                    :prefix="args.prefix"
                    :size="args.size"
                    :initValue="args.initValue"
                    :maxLimit="args.maxLimit"
                    :hint="{ error: '', description: 'Prompt message' }"
                    :isDisabled="true"
                    :className="args.className"
                />
            </div>
        `}),parameters:{controls:{include:["label","type","hasClear","placeholder","prefix","size","initValue","maxLimit","className"]},docs:{source:{transform:(a,i)=>{const{args:e}=i;return["<Input",`  label="${e.label}"`,`  type="${e.type}"`,`  hasClear="${e.hasClear}"`,`  placeholder="${e.placeholder}"`,`  prefix="${e.prefix}"`,`  size="${e.size}"`,`  initValue="${e.initValue}"`,`  maxLimit="${e.maxLimit}"`,`  :hint="{ error: '', description: 'Prompt message' }"`,'  :isDisabled="false"',`  className="${e.className}"`,"/>","<Input",'  label="密碼"','  type="password"',`  hasClear="${e.hasClear}"`,'  placeholder="請輸入密碼"','  prefix="lock"',`  size="${e.size}"`,`  initValue="${e.initValue}"`,`  maxLimit="${e.maxLimit}"`,`  :hint="{ error: '', description: 'Prompt message' }"`,'  :isDisabled="false"',`  className="${e.className}"`,"/>","<Input",`  label="${e.label}"`,`  type="${e.type}"`,`  hasClear="${e.hasClear}"`,`  placeholder="${e.placeholder}"`,`  prefix="${e.prefix}"`,`  size="${e.size}"`,`  initValue="${e.initValue}"`,`  maxLimit="${e.maxLimit}"`,`  :hint="{ error: 'Error message', description: '' }"`,'  :isDisabled="false"',`  className="${e.className}"`,"/>","<Input",`  label="${e.label}"`,`  type="${e.type}"`,`  hasClear="${e.hasClear}"`,`  placeholder="${e.placeholder}"`,`  prefix="${e.prefix}"`,`  size="${e.size}"`,`  initValue="${e.initValue}"`,`  maxLimit="${e.maxLimit}"`,`  :hint="{ error: '', description: 'Prompt message' }"`,'  :isDisabled="false"',`  className="${e.className}"`,"/>","<Input",`  label="${e.label}"`,`  type="${e.type}"`,`  hasClear="${e.hasClear}"`,`  placeholder="${e.placeholder}"`,`  prefix="${e.prefix}"`,`  size="${e.size}"`,`  initValue="${e.initValue}"`,`  maxLimit="${e.maxLimit}"`,`  :hint="{ error: '', description: 'Prompt message' }"`,'  :isDisabled="true"',`  className="${e.className}"`,"/>"].join(`
`).trim()}}}}};var t,n,p;s.parameters={...s.parameters,docs:{...(t=s.parameters)==null?void 0:t.docs,source:{originalSource:`{
  name: '預設項目',
  args: {
    label: 'Label',
    type: 'text',
    hasClear: true,
    placeholder: 'Placeholder...',
    prefix: 'SvgAccount',
    size: 'medium',
    initValue: '',
    maxLimit: Infinity,
    hint: {
      error: '',
      description: 'Prompt message'
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
                :hasClear="args.hasClear"
                :placeholder="args.placeholder"
                :prefix="args.prefix"
                :size="args.size"
                :initValue="args.initValue"
                :maxLimit="args.maxLimit"
                :hint="args.hint"
                :isDisabled="args.isDisabled"
                :className="args.className"
            />
            \`
  }),
  // 控制 controls 中能控制的參數
  parameters: {
    controls: {
      include: ['label', 'type', 'hasClear', 'placeholder', 'prefix', 'size', 'initValue', 'maxLimit', 'hint', 'isDisabled', 'className']
    },
    docs: {
      source: {
        transform: (src, storyContext) => {
          const {
            args
          } = storyContext;
          const dataSourceString = formatDataSource(args.hint);
          return ['<Input', \`  label="\${args.label}"\`, \`  type="\${args.type}"\`, \`  hasClear="\${args.hasClear}"\`, \`  placeholder="\${args.placeholder}"\`, \`  prefix="\${args.prefix}"\`, \`  size="\${args.size}"\`, \`  initValue="\${args.initValue}"\`, \`  maxLimit="\${args.maxLimit}"\`, \`  :hint="\${dataSourceString}"\`, \`  :isDisabled="\${args.isDisabled}"\`, \`  className="\${args.className}"\`, '/>'].join('\\n').trim();
        }
      }
    }
  }
}`,...(p=(n=s.parameters)==null?void 0:n.docs)==null?void 0:p.source}}};var o,m,c;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
  name: "輸入框狀態",
  args: {
    label: 'Account',
    type: 'text',
    hasClear: true,
    placeholder: 'Placeholder...',
    prefix: 'SvgAccount',
    size: 'medium',
    initValue: '',
    maxLimit: Infinity,
    // isDisabled: false,
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
            <div style="display: flex; flex-direction: column; gap:8px">
                <Input
                    :label="args.label"
                    :type="args.type"
                    :hasClear="args.hasClear"
                    :placeholder="args.placeholder"
                    :prefix="args.prefix"
                    :size="args.size"
                    :initValue="args.initValue"
                    :maxLimit="args.maxLimit"
                    :hint="{ error: '', description: 'Prompt message' }"
                    :isDisabled="false"
                    :className="args.className"
                />
                <Input
                    label="Password"
                    type="password"
                    :hasClear="args.hasClear"
                    :placeholder="args.placeholder"
                    prefix="SvgLock"
                    :size="args.size"
                    :initValue="args.initValue"
                    :maxLimit="args.maxLimit"
                    :hint="{ error: '', description: 'Prompt message' }"
                    :isDisabled="false"
                    :className="args.className"
                />
                <Input
                    :label="args.label"
                    :type="args.type"
                    :hasClear="args.hasClear"
                    :placeholder="args.placeholder"
                    :prefix="args.prefix"
                    :size="args.size"
                    :initValue="args.initValue"
                    :maxLimit="args.maxLimit"
                    :hint="{ error: 'Error message', description: '' }"
                    :isDisabled="false"
                    :className="args.className"
                />
                <Input
                    :label="args.label"
                    :type="args.type"
                    :hasClear="args.hasClear"
                    :placeholder="args.placeholder"
                    :prefix="args.prefix"
                    :size="args.size"
                    :initValue="args.initValue"
                    :maxLimit="args.maxLimit"
                    :hint="{ error: '', description: 'Prompt message' }"
                    :isDisabled="false"
                    :className="args.className"
                />
                <Input
                    :label="args.label"
                    :type="args.type"
                    :hasClear="args.hasClear"
                    :placeholder="args.placeholder"
                    :prefix="args.prefix"
                    :size="args.size"
                    :initValue="args.initValue"
                    :maxLimit="args.maxLimit"
                    :hint="{ error: '', description: 'Prompt message' }"
                    :isDisabled="true"
                    :className="args.className"
                />
            </div>
        \`
  }),
  // 控制 controls 中能控制的參數
  parameters: {
    controls: {
      include: ['label', 'type', 'hasClear', 'placeholder', 'prefix', 'size', 'initValue', 'maxLimit', 'className']
    },
    docs: {
      source: {
        transform: (src, storyContext) => {
          const {
            args
          } = storyContext;
          return ['<Input', \`  label="\${args.label}"\`, \`  type="\${args.type}"\`, \`  hasClear="\${args.hasClear}"\`, \`  placeholder="\${args.placeholder}"\`, \`  prefix="\${args.prefix}"\`, \`  size="\${args.size}"\`, \`  initValue="\${args.initValue}"\`, \`  maxLimit="\${args.maxLimit}"\`, \`  :hint="{ error: '', description: 'Prompt message' }"\`, \`  :isDisabled="false"\`, \`  className="\${args.className}"\`, '/>', '<Input', \`  label="密碼"\`, \`  type="password"\`, \`  hasClear="\${args.hasClear}"\`, \`  placeholder="請輸入密碼"\`, \`  prefix="lock"\`, \`  size="\${args.size}"\`, \`  initValue="\${args.initValue}"\`, \`  maxLimit="\${args.maxLimit}"\`, \`  :hint="{ error: '', description: 'Prompt message' }"\`, \`  :isDisabled="false"\`, \`  className="\${args.className}"\`, '/>', '<Input', \`  label="\${args.label}"\`, \`  type="\${args.type}"\`, \`  hasClear="\${args.hasClear}"\`, \`  placeholder="\${args.placeholder}"\`, \`  prefix="\${args.prefix}"\`, \`  size="\${args.size}"\`, \`  initValue="\${args.initValue}"\`, \`  maxLimit="\${args.maxLimit}"\`, \`  :hint="{ error: 'Error message', description: '' }"\`, \`  :isDisabled="false"\`, \`  className="\${args.className}"\`, '/>', '<Input', \`  label="\${args.label}"\`, \`  type="\${args.type}"\`, \`  hasClear="\${args.hasClear}"\`, \`  placeholder="\${args.placeholder}"\`, \`  prefix="\${args.prefix}"\`, \`  size="\${args.size}"\`, \`  initValue="\${args.initValue}"\`, \`  maxLimit="\${args.maxLimit}"\`, \`  :hint="{ error: '', description: 'Prompt message' }"\`, \`  :isDisabled="false"\`, \`  className="\${args.className}"\`, '/>', '<Input', \`  label="\${args.label}"\`, \`  type="\${args.type}"\`, \`  hasClear="\${args.hasClear}"\`, \`  placeholder="\${args.placeholder}"\`, \`  prefix="\${args.prefix}"\`, \`  size="\${args.size}"\`, \`  initValue="\${args.initValue}"\`, \`  maxLimit="\${args.maxLimit}"\`, \`  :hint="{ error: '', description: 'Prompt message' }"\`, \`  :isDisabled="true"\`, \`  className="\${args.className}"\`, '/>'].join('\\n').trim();
        }
      }
    }
  }
}`,...(c=(m=r.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};const y=["InputDefault","InputStatus"];export{s as InputDefault,r as InputStatus,y as __namedExportsOrder,f as default};

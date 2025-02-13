import{_ as i}from"./Input-B5oZbn0w.js";import"./vue.esm-bundler-qCK_iSPY.js";import"./Icon-DNPtS85k.js";import"./iframe-B08jCWer.js";import"../sb-preview/runtime.js";function g(a){return`{
        error: '${a.error||""}',
        description: '${a.description||""}'
    }`}const $={title:"Component/Input",component:i,tags:["autodocs"],argTypes:{label:{description:"標題",control:{type:"text"}},type:{description:"輸入類型",control:{type:"select"},options:["number","text","password","email"],table:{type:{summary:"number | text | password | email "}}},hasClear:{description:"是否顯示清除按鈕",control:{type:"boolean"}},placeholder:{description:"輸入提示",control:{type:"text"}},prefix:{description:"前置元素",control:{type:"select",labels:{"":"none",SvgAccount:"SvgAccount",SvgSearch:"SvgSearch",SvgVisibility:"SvgVisibility",SvgVisibilityOff:"SvgVisibilityOff"}},options:["","SvgAccount","SvgSearch","SvgVisibility","SvgVisibilityOff"]},size:{description:"輸入框尺寸",control:{type:"select"},options:["small","medium","large"],table:{type:{summary:"small | medium | large "}}},maxLimit:{description:"最長輸入限制",control:{type:"number"}},hint:{description:"提示訊息",control:{type:"object"},table:{type:{summary:"{ error: string; description: string; }"}}},isDisabled:{description:"是否禁用",control:{type:"boolean"}},isOpen:{description:"下拉控制",control:{type:"boolean"},table:{disable:!0}},className:{description:"客製化樣式",control:{type:"text"}},modelValue:{description:"輸入值",control:{type:"text"},table:{type:{summary:"string"},category:"v-model"}}},parameters:{docs:{title:"Input",description:{component:"輸入框組件的呈現及說明。。"}}}},s={name:"預設項目",args:{label:"Label",type:"text",hasClear:!0,placeholder:"Placeholder",prefix:"SvgAccount",size:"medium",maxLimit:1/0,hint:{error:"",description:"Prompt message"},isDisabled:!1,className:"",modelValue:""},render:a=>({components:{Input:i},setup(){return{args:a}},template:`
            <Input
                :label="args.label"
                :type="args.type"
                :hasClear="args.hasClear"
                :placeholder="args.placeholder"
                :prefix="args.prefix"
                :size="args.size"
                :maxLimit="args.maxLimit"
                :hint="args.hint"
                :isDisabled="args.isDisabled"
                :className="args.className"
                v-model="args.modelValue"
            />
            `}),parameters:{controls:{include:["label","type","hasClear","placeholder","prefix","size","maxLimit","hint","isDisabled","className","modelValue"]},docs:{source:{transform:(a,l)=>{const{args:e}=l,d=g(e.hint);return["<Input",`  label="${e.label}"`,`  type="${e.type}"`,`  hasClear="${e.hasClear}"`,`  placeholder="${e.placeholder}"`,`  prefix="${e.prefix}"`,`  size="${e.size}"`,`  maxLimit="${e.maxLimit}"`,`  :hint="${d}"`,`  :isDisabled="${e.isDisabled}"`,`  className="${e.className}"`,'  v-model="modelValue"',"/>"].join(`
`).trim()}}}}},r={name:"輸入框狀態",args:{label:"Account",type:"text",hasClear:!0,placeholder:"Placeholder",prefix:"SvgAccount",size:"medium",maxLimit:1/0,className:"",modelValue:""},render:a=>({components:{Input:i},setup(){return{args:a}},template:`
            <div style="display: flex; flex-direction: column; gap:8px">
                <Input
                    :label="args.label"
                    :type="args.type"
                    :hasClear="args.hasClear"
                    :placeholder="args.placeholder"
                    :prefix="args.prefix"
                    :size="args.size"
                    :maxLimit="args.maxLimit"
                    :hint="{ error: '', description: 'Prompt message' }"
                    :isDisabled="false"
                    :className="args.className"
                    v-model="args.modelValue"
                />
                <Input
                    label="Password"
                    type="password"
                    :hasClear="args.hasClear"
                    :placeholder="args.placeholder"
                    prefix="SvgLock"
                    :size="args.size"
                    :maxLimit="args.maxLimit"
                    :hint="{ error: '', description: 'Prompt message' }"
                    :isDisabled="false"
                    :className="args.className"
                    v-model="args.modelValue"
                />
                <Input
                    :label="args.label"
                    :type="args.type"
                    :hasClear="args.hasClear"
                    :placeholder="args.placeholder"
                    :prefix="args.prefix"
                    :size="args.size"
                    :maxLimit="args.maxLimit"
                    :hint="{ error: 'Error message', description: '' }"
                    :isDisabled="false"
                    :className="args.className"
                    v-model="args.modelValue"
                />
                <Input
                    :label="args.label"
                    :type="args.type"
                    :hasClear="args.hasClear"
                    :placeholder="args.placeholder"
                    :prefix="args.prefix"
                    :size="args.size"
                    :maxLimit="args.maxLimit"
                    :hint="{ error: '', description: 'Prompt message' }"
                    :isDisabled="false"
                    :className="args.className"
                    v-model="args.modelValue"
                />
                <Input
                    :label="args.label"
                    :type="args.type"
                    :hasClear="args.hasClear"
                    :placeholder="args.placeholder"
                    :prefix="args.prefix"
                    :size="args.size"
                    :maxLimit="args.maxLimit"
                    :hint="{ error: '', description: 'Prompt message' }"
                    :isDisabled="true"
                    :className="args.className"
                    v-model="args.modelValue"
                />
            </div>
        `}),parameters:{controls:{include:["label","type","hasClear","placeholder","prefix","size","modelValue","maxLimit","className"]},docs:{source:{transform:(a,l)=>{const{args:e}=l;return["<Input",`  label="${e.label}"`,`  type="${e.type}"`,`  hasClear="${e.hasClear}"`,`  placeholder="${e.placeholder}"`,`  prefix="${e.prefix}"`,`  size="${e.size}"`,`  maxLimit="${e.maxLimit}"`,`  :hint="{ error: '', description: 'Prompt message' }"`,'  :isDisabled="false"',`  className="${e.className}"`,'  v-model="modelValue"',"/>","<Input",'  label="密碼"','  type="password"',`  hasClear="${e.hasClear}"`,'  placeholder="請輸入密碼"','  prefix="lock"',`  size="${e.size}"`,`  maxLimit="${e.maxLimit}"`,`  :hint="{ error: '', description: 'Prompt message' }"`,'  :isDisabled="false"',`  className="${e.className}"`,'  v-model="modelValue"',"/>","<Input",`  label="${e.label}"`,`  type="${e.type}"`,`  hasClear="${e.hasClear}"`,`  placeholder="${e.placeholder}"`,`  prefix="${e.prefix}"`,`  size="${e.size}"`,`  maxLimit="${e.maxLimit}"`,`  :hint="{ error: 'Error message', description: '' }"`,'  :isDisabled="false"',`  className="${e.className}"`,'  v-model="modelValue"',"/>","<Input",`  label="${e.label}"`,`  type="${e.type}"`,`  hasClear="${e.hasClear}"`,`  placeholder="${e.placeholder}"`,`  prefix="${e.prefix}"`,`  size="${e.size}"`,`  maxLimit="${e.maxLimit}"`,`  :hint="{ error: '', description: 'Prompt message' }"`,'  :isDisabled="false"',`  className="${e.className}"`,'  v-model="modelValue"',"/>","<Input",`  label="${e.label}"`,`  type="${e.type}"`,`  hasClear="${e.hasClear}"`,`  placeholder="${e.placeholder}"`,`  prefix="${e.prefix}"`,`  size="${e.size}"`,`  maxLimit="${e.maxLimit}"`,`  :hint="{ error: '', description: 'Prompt message' }"`,'  :isDisabled="true"',`  className="${e.className}"`,'  v-model="modelValue"',"/>"].join(`
`).trim()}}}}};var t,n,o;s.parameters={...s.parameters,docs:{...(t=s.parameters)==null?void 0:t.docs,source:{originalSource:`{
  name: '預設項目',
  args: {
    label: 'Label',
    type: 'text',
    hasClear: true,
    placeholder: 'Placeholder',
    prefix: 'SvgAccount',
    size: 'medium',
    maxLimit: Infinity,
    hint: {
      error: '',
      description: 'Prompt message'
    },
    isDisabled: false,
    className: '',
    modelValue: ''
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
                :maxLimit="args.maxLimit"
                :hint="args.hint"
                :isDisabled="args.isDisabled"
                :className="args.className"
                v-model="args.modelValue"
            />
            \`
  }),
  // 控制 controls 中能控制的參數
  parameters: {
    controls: {
      include: ['label', 'type', 'hasClear', 'placeholder', 'prefix', 'size', 'maxLimit', 'hint', 'isDisabled', 'className', 'modelValue']
    },
    docs: {
      source: {
        transform: (src, storyContext) => {
          const {
            args
          } = storyContext;
          const dataSourceString = formatDataSource(args.hint);
          return ['<Input', \`  label="\${args.label}"\`, \`  type="\${args.type}"\`, \`  hasClear="\${args.hasClear}"\`, \`  placeholder="\${args.placeholder}"\`, \`  prefix="\${args.prefix}"\`, \`  size="\${args.size}"\`, \`  maxLimit="\${args.maxLimit}"\`, \`  :hint="\${dataSourceString}"\`, \`  :isDisabled="\${args.isDisabled}"\`, \`  className="\${args.className}"\`, \`  v-model="modelValue"\`, '/>'].join('\\n').trim();
        }
      }
    }
  }
}`,...(o=(n=s.parameters)==null?void 0:n.docs)==null?void 0:o.source}}};var m,p,c;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: "輸入框狀態",
  args: {
    label: 'Account',
    type: 'text',
    hasClear: true,
    placeholder: 'Placeholder',
    prefix: 'SvgAccount',
    size: 'medium',
    maxLimit: Infinity,
    // isDisabled: false,
    className: '',
    modelValue: ''
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
                    :maxLimit="args.maxLimit"
                    :hint="{ error: '', description: 'Prompt message' }"
                    :isDisabled="false"
                    :className="args.className"
                    v-model="args.modelValue"
                />
                <Input
                    label="Password"
                    type="password"
                    :hasClear="args.hasClear"
                    :placeholder="args.placeholder"
                    prefix="SvgLock"
                    :size="args.size"
                    :maxLimit="args.maxLimit"
                    :hint="{ error: '', description: 'Prompt message' }"
                    :isDisabled="false"
                    :className="args.className"
                    v-model="args.modelValue"
                />
                <Input
                    :label="args.label"
                    :type="args.type"
                    :hasClear="args.hasClear"
                    :placeholder="args.placeholder"
                    :prefix="args.prefix"
                    :size="args.size"
                    :maxLimit="args.maxLimit"
                    :hint="{ error: 'Error message', description: '' }"
                    :isDisabled="false"
                    :className="args.className"
                    v-model="args.modelValue"
                />
                <Input
                    :label="args.label"
                    :type="args.type"
                    :hasClear="args.hasClear"
                    :placeholder="args.placeholder"
                    :prefix="args.prefix"
                    :size="args.size"
                    :maxLimit="args.maxLimit"
                    :hint="{ error: '', description: 'Prompt message' }"
                    :isDisabled="false"
                    :className="args.className"
                    v-model="args.modelValue"
                />
                <Input
                    :label="args.label"
                    :type="args.type"
                    :hasClear="args.hasClear"
                    :placeholder="args.placeholder"
                    :prefix="args.prefix"
                    :size="args.size"
                    :maxLimit="args.maxLimit"
                    :hint="{ error: '', description: 'Prompt message' }"
                    :isDisabled="true"
                    :className="args.className"
                    v-model="args.modelValue"
                />
            </div>
        \`
  }),
  // 控制 controls 中能控制的參數
  parameters: {
    controls: {
      include: ['label', 'type', 'hasClear', 'placeholder', 'prefix', 'size', 'modelValue', 'maxLimit', 'className']
    },
    docs: {
      source: {
        transform: (src, storyContext) => {
          const {
            args
          } = storyContext;
          return ['<Input', \`  label="\${args.label}"\`, \`  type="\${args.type}"\`, \`  hasClear="\${args.hasClear}"\`, \`  placeholder="\${args.placeholder}"\`, \`  prefix="\${args.prefix}"\`, \`  size="\${args.size}"\`, \`  maxLimit="\${args.maxLimit}"\`, \`  :hint="{ error: '', description: 'Prompt message' }"\`, \`  :isDisabled="false"\`, \`  className="\${args.className}"\`, \`  v-model="modelValue"\`, '/>', '<Input', \`  label="密碼"\`, \`  type="password"\`, \`  hasClear="\${args.hasClear}"\`, \`  placeholder="請輸入密碼"\`, \`  prefix="lock"\`, \`  size="\${args.size}"\`, \`  maxLimit="\${args.maxLimit}"\`, \`  :hint="{ error: '', description: 'Prompt message' }"\`, \`  :isDisabled="false"\`, \`  className="\${args.className}"\`, \`  v-model="modelValue"\`, '/>', '<Input', \`  label="\${args.label}"\`, \`  type="\${args.type}"\`, \`  hasClear="\${args.hasClear}"\`, \`  placeholder="\${args.placeholder}"\`, \`  prefix="\${args.prefix}"\`, \`  size="\${args.size}"\`, \`  maxLimit="\${args.maxLimit}"\`, \`  :hint="{ error: 'Error message', description: '' }"\`, \`  :isDisabled="false"\`, \`  className="\${args.className}"\`, \`  v-model="modelValue"\`, '/>', '<Input', \`  label="\${args.label}"\`, \`  type="\${args.type}"\`, \`  hasClear="\${args.hasClear}"\`, \`  placeholder="\${args.placeholder}"\`, \`  prefix="\${args.prefix}"\`, \`  size="\${args.size}"\`, \`  maxLimit="\${args.maxLimit}"\`, \`  :hint="{ error: '', description: 'Prompt message' }"\`, \`  :isDisabled="false"\`, \`  className="\${args.className}"\`, \`  v-model="modelValue"\`, '/>', '<Input', \`  label="\${args.label}"\`, \`  type="\${args.type}"\`, \`  hasClear="\${args.hasClear}"\`, \`  placeholder="\${args.placeholder}"\`, \`  prefix="\${args.prefix}"\`, \`  size="\${args.size}"\`, \`  maxLimit="\${args.maxLimit}"\`, \`  :hint="{ error: '', description: 'Prompt message' }"\`, \`  :isDisabled="true"\`, \`  className="\${args.className}"\`, \`  v-model="modelValue"\`, '/>'].join('\\n').trim();
        }
      }
    }
  }
}`,...(c=(p=r.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};const y=["InputDefault","InputStatus"];export{s as InputDefault,r as InputStatus,y as __namedExportsOrder,$ as default};

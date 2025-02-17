import{_ as n}from"./Input-E2XOsohw.js";import"./vue.esm-bundler-qCK_iSPY.js";import"./Icon-Dr0uxKWp.js";import"./iframe-Dp5wB7_x.js";import"../sb-preview/runtime.js";function b(a){return`{
        error: '${a.error||""}',
        description: '${a.description||""}'
    }`}const v={title:"Component/Input",component:n,tags:["autodocs"],argTypes:{label:{description:"標題",control:{type:"text"}},type:{description:"輸入類型",control:{type:"select"},options:["number","text","password","email"],table:{type:{summary:"number | text | password | email "}}},hasClear:{description:"是否顯示清除按鈕",control:{type:"boolean"}},placeholder:{description:"輸入提示",control:{type:"text"}},prefix:{description:"前置元素",control:{type:"select",labels:{"":"none",SvgAccount:"SvgAccount",SvgSearch:"SvgSearch",SvgVisibility:"SvgVisibility",SvgVisibilityOff:"SvgVisibilityOff",SvgMail:"SvgMail"}},options:["","SvgAccount","SvgSearch","SvgVisibility","SvgVisibilityOff","SvgMail"]},size:{description:"輸入框尺寸",control:{type:"select"},options:["small","medium","large"],table:{type:{summary:"small | medium | large "}}},maxLimit:{description:"最長輸入限制",control:{type:"number"}},hint:{description:"提示訊息",control:{type:"object"},table:{type:{summary:"{ error: string; description: string; }"}}},isDisabled:{description:"是否禁用",control:{type:"boolean"}},isOpen:{description:"下拉控制",control:{type:"boolean"},table:{disable:!0}},className:{description:"客製化樣式",control:{type:"text"}},modelValue:{description:"輸入值",control:{type:"text"},table:{type:{summary:"string"},category:"v-model"}}},parameters:{docs:{title:"Input",description:{component:"輸入框組件的呈現及說明。。"}}}},r={name:"預設項目",args:{label:"Label",type:"text",hasClear:!0,placeholder:"Placeholder",prefix:"SvgAccount",size:"medium",maxLimit:0,hint:{error:"",description:"Prompt message"},isDisabled:!1,className:"",modelValue:""},render:a=>({components:{Input:n},setup(){return{args:a}},template:`
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
            `}),parameters:{controls:{exclude:["input"]},docs:{source:{transform:(a,s)=>{const{args:e}=s,x=b(e.hint);return["<Input",`  label="${e.label}"`,`  type="${e.type}"`,`  hasClear="${e.hasClear}"`,`  placeholder="${e.placeholder}"`,`  prefix="${e.prefix}"`,`  size="${e.size}"`,`  maxLimit="${e.maxLimit}"`,`  :hint="${x}"`,`  :isDisabled="${e.isDisabled}"`,`  className="${e.className}"`,'  v-model="modelValue"',"/>"].join(`
`).trim()}}}}},l={name:"輸入框類型",args:{hasClear:!0,placeholder:"Placeholder",size:"medium",maxLimit:0,hint:{error:"",description:"Prompt message"},isDisabled:!1,className:"",modelValue:""},render:a=>({components:{Input:n},setup(){return{args:a}},template:`
            <div style="display: flex; flex-direction: column; gap:8px">
                <Input
                    label="Number"
                    type="number"
                    :hasClear="args.hasClear"
                    :placeholder="args.placeholder"
                    prefix="SvgSearch"
                    :size="args.size"
                    :maxLimit="args.maxLimit"
                    :hint="args.hint"
                    :isDisabled="args.isDisabled"
                    :className="args.className"
                    v-model="args.modelValue"
                />
                <Input
                    label="Text"
                    type="text"
                    :hasClear="args.hasClear"
                    :placeholder="args.placeholder"
                    prefix="SvgAccount"
                    :size="args.size"
                    :maxLimit="args.maxLimit"
                    :hint="args.hint"
                    :isDisabled="args.isDisabled"
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
                    :hint="args.hint"
                    :isDisabled="args.isDisabled"
                    :className="args.className"
                    v-model="args.modelValue"
                />
                <Input
                    label="Email"
                    type="email"
                    :hasClear="args.hasClear"
                    :placeholder="args.placeholder"
                    prefix="SvgMail"
                    :size="args.size"
                    :maxLimit="args.maxLimit"
                    :hint="args.hint"
                    :isDisabled="args.isDisabled"
                    :className="args.className"
                    v-model="args.modelValue"
                />
            </div>
        `}),parameters:{controls:{exclude:["label","type","prefix","input"]},docs:{source:{transform:(a,s)=>{const{args:e}=s;return["<Input",'  label="Number"','  type="number"',`  :hasClear="${e.hasClear}"`,`  :placeholder="${e.placeholder}"`,'  prefix="SvgSearch"',`  :size="${e.size}"`,`  :maxLimit="${e.maxLimit}"`,`  :hint="${e.hint}"`,`  :isDisabled="${e.isDisabled}"`,`  :className="${e.className}"`,`  v-model="${e.modelValue}"`,"/>","<Input",'  label="Text"','  type="text"',`  :hasClear="${e.hasClear}"`,`  :placeholder="${e.placeholder}"`,'  prefix="SvgAccount"',`  :size="${e.size}"`,`  :maxLimit="${e.maxLimit}"`,`  :hint="${e.hint}"`,`  :isDisabled="${e.isDisabled}"`,`  :className="${e.className}"`,`  v-model="${e.modelValue}"`,"/>","<Input",'  label="Password"','  type="password"',`  :hasClear="${e.hasClear}"`,`  :placeholder="${e.placeholder}"`,'  prefix="SvgLock"',`  :size="${e.size}"`,`  :maxLimit="${e.maxLimit}"`,`  :hint="${e.hint}"`,`  :isDisabled="${e.isDisabled}"`,`  :className="${e.className}"`,`  v-model="${e.modelValue}"`,"/>","<Input",'  label="Email"','  type="email"',`  :hasClear="${e.hasClear}"`,`  :placeholder="${e.placeholder}"`,'  prefix="SvgMail"',`  :size="${e.size}"`,`  :maxLimit="${e.maxLimit}"`,`  :hint="${e.hint}"`,`  :isDisabled="${e.isDisabled}"`,`  :className="${e.className}"`,`  v-model="${e.modelValue}"`,"/>"].join(`
`).trim()}}}}},i={name:"提示訊息",args:{label:"Account",type:"text",hasClear:!0,placeholder:"Placeholder",prefix:"SvgAccount",size:"medium",maxLimit:0,isDisabled:!1,className:"",modelValue:""},render:a=>({components:{Input:n},setup(){return{args:a}},template:`
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
                    :isDisabled="args.isDisabled"
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
                    :isDisabled="args.isDisabled"
                    :className="args.className"
                    v-model="args.modelValue"
                />
            </div>
        `}),parameters:{controls:{exclude:["hint","input"]},docs:{source:{transform:(a,s)=>{const{args:e}=s;return["<Input",`  label="${e.label}"`,`  type="${e.type}"`,`  hasClear="${e.hasClear}"`,`  placeholder="${e.placeholder}"`,`  prefix="${e.prefix}"`,`  size="${e.size}"`,`  maxLimit="${e.maxLimit}"`,`  :hint="{ error: '', description: 'Prompt message' }"`,`  :isDisabled="${e.isDisabled}"`,`  className="${e.className}"`,'  v-model="modelValue"',"/>","<Input",`  label="${e.label}"`,`  type="${e.type}"`,`  hasClear="${e.hasClear}"`,`  placeholder="${e.placeholder}"`,`  prefix="${e.prefix}"`,`  size="${e.size}"`,`  maxLimit="${e.maxLimit}"`,`  :hint="{ error: 'Error message', description: '' }"`,`  :isDisabled="${e.isDisabled}"`,`  className="${e.className}"`,'  v-model="modelValue"',"/>"].join(`
`).trim()}}}}};var t,o,m;r.parameters={...r.parameters,docs:{...(t=r.parameters)==null?void 0:t.docs,source:{originalSource:`{
  name: '預設項目',
  args: {
    label: 'Label',
    type: 'text',
    hasClear: true,
    placeholder: 'Placeholder',
    prefix: 'SvgAccount',
    size: 'medium',
    maxLimit: 0,
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
      // include: ['label', 'type', 'hasClear', 'placeholder', 'prefix', 'size', 'maxLimit', 'hint', 'isDisabled','className','modelValue'],
      exclude: ['input']
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
}`,...(m=(o=r.parameters)==null?void 0:o.docs)==null?void 0:m.source}}};var p,c,d;l.parameters={...l.parameters,docs:{...(p=l.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: "輸入框類型",
  args: {
    // label: 'Account',
    // type: 'text',
    hasClear: true,
    placeholder: 'Placeholder',
    // prefix: 'SvgAccount',
    size: 'medium',
    maxLimit: 0,
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
            <div style="display: flex; flex-direction: column; gap:8px">
                <Input
                    label="Number"
                    type="number"
                    :hasClear="args.hasClear"
                    :placeholder="args.placeholder"
                    prefix="SvgSearch"
                    :size="args.size"
                    :maxLimit="args.maxLimit"
                    :hint="args.hint"
                    :isDisabled="args.isDisabled"
                    :className="args.className"
                    v-model="args.modelValue"
                />
                <Input
                    label="Text"
                    type="text"
                    :hasClear="args.hasClear"
                    :placeholder="args.placeholder"
                    prefix="SvgAccount"
                    :size="args.size"
                    :maxLimit="args.maxLimit"
                    :hint="args.hint"
                    :isDisabled="args.isDisabled"
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
                    :hint="args.hint"
                    :isDisabled="args.isDisabled"
                    :className="args.className"
                    v-model="args.modelValue"
                />
                <Input
                    label="Email"
                    type="email"
                    :hasClear="args.hasClear"
                    :placeholder="args.placeholder"
                    prefix="SvgMail"
                    :size="args.size"
                    :maxLimit="args.maxLimit"
                    :hint="args.hint"
                    :isDisabled="args.isDisabled"
                    :className="args.className"
                    v-model="args.modelValue"
                />
            </div>
        \`
  }),
  // 控制 controls 中能控制的參數
  parameters: {
    controls: {
      // include: ['label', 'type', 'hasClear', 'placeholder', 'prefix', 'size', 'modelValue', 'maxLimit', 'className'],
      exclude: ['label', 'type', 'prefix', 'input']
    },
    docs: {
      source: {
        transform: (src, storyContext) => {
          const {
            args
          } = storyContext;
          return [\`<Input\`, \`  label="Number"\`, \`  type="number"\`, \`  :hasClear="\${args.hasClear}"\`, \`  :placeholder="\${args.placeholder}"\`, \`  prefix="SvgSearch"\`, \`  :size="\${args.size}"\`, \`  :maxLimit="\${args.maxLimit}"\`, \`  :hint="\${args.hint}"\`, \`  :isDisabled="\${args.isDisabled}"\`, \`  :className="\${args.className}"\`, \`  v-model="\${args.modelValue}"\`, \`/>\`, \`<Input\`, \`  label="Text"\`, \`  type="text"\`, \`  :hasClear="\${args.hasClear}"\`, \`  :placeholder="\${args.placeholder}"\`, \`  prefix="SvgAccount"\`, \`  :size="\${args.size}"\`, \`  :maxLimit="\${args.maxLimit}"\`, \`  :hint="\${args.hint}"\`, \`  :isDisabled="\${args.isDisabled}"\`, \`  :className="\${args.className}"\`, \`  v-model="\${args.modelValue}"\`, \`/>\`, \`<Input\`, \`  label="Password"\`, \`  type="password"\`, \`  :hasClear="\${args.hasClear}"\`, \`  :placeholder="\${args.placeholder}"\`, \`  prefix="SvgLock"\`, \`  :size="\${args.size}"\`, \`  :maxLimit="\${args.maxLimit}"\`, \`  :hint="\${args.hint}"\`, \`  :isDisabled="\${args.isDisabled}"\`, \`  :className="\${args.className}"\`, \`  v-model="\${args.modelValue}"\`, \`/>\`, \`<Input\`, \`  label="Email"\`, \`  type="email"\`, \`  :hasClear="\${args.hasClear}"\`, \`  :placeholder="\${args.placeholder}"\`, \`  prefix="SvgMail"\`, \`  :size="\${args.size}"\`, \`  :maxLimit="\${args.maxLimit}"\`, \`  :hint="\${args.hint}"\`, \`  :isDisabled="\${args.isDisabled}"\`, \`  :className="\${args.className}"\`, \`  v-model="\${args.modelValue}"\`, \`/>\`].join("\\n").trim();
        }
      }
    }
  }
}`,...(d=(c=l.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var g,u,h;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`{
  name: "提示訊息",
  args: {
    label: 'Account',
    type: 'text',
    hasClear: true,
    placeholder: 'Placeholder',
    prefix: 'SvgAccount',
    size: 'medium',
    maxLimit: 0,
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
                    :isDisabled="args.isDisabled"
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
                    :isDisabled="args.isDisabled"
                    :className="args.className"
                    v-model="args.modelValue"
                />
            </div>
        \`
  }),
  // 控制 controls 中能控制的參數
  parameters: {
    controls: {
      // include: ['label', 'type', 'hasClear', 'placeholder', 'prefix', 'size', 'modelValue', 'maxLimit', 'className'],
      exclude: ['hint', 'input']
    },
    docs: {
      source: {
        transform: (src, storyContext) => {
          const {
            args
          } = storyContext;
          return ['<Input', \`  label="\${args.label}"\`, \`  type="\${args.type}"\`, \`  hasClear="\${args.hasClear}"\`, \`  placeholder="\${args.placeholder}"\`, \`  prefix="\${args.prefix}"\`, \`  size="\${args.size}"\`, \`  maxLimit="\${args.maxLimit}"\`, \`  :hint="{ error: '', description: 'Prompt message' }"\`, \`  :isDisabled="\${args.isDisabled}"\`, \`  className="\${args.className}"\`, \`  v-model="modelValue"\`, '/>', '<Input', \`  label="\${args.label}"\`, \`  type="\${args.type}"\`, \`  hasClear="\${args.hasClear}"\`, \`  placeholder="\${args.placeholder}"\`, \`  prefix="\${args.prefix}"\`, \`  size="\${args.size}"\`, \`  maxLimit="\${args.maxLimit}"\`, \`  :hint="{ error: 'Error message', description: '' }"\`, \`  :isDisabled="\${args.isDisabled}"\`, \`  className="\${args.className}"\`, \`  v-model="modelValue"\`, '/>'].join('\\n').trim();
        }
      }
    }
  }
}`,...(h=(u=i.parameters)==null?void 0:u.docs)==null?void 0:h.source}}};const L=["InputDefault","InputTypesStory","InputHintTypeStory"];export{r as InputDefault,i as InputHintTypeStory,l as InputTypesStory,L as __namedExportsOrder,v as default};

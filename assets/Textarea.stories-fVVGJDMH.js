import{m as E,u as _,f as s,w as b,c as j,a as n,n as r,t as d,d as h,e as V,g as k,p as L,o as i}from"./vue.esm-bundler-BQySH7jJ.js";const A=["maxlength","placeholder"],o={__name:"Textarea",props:E({label:{type:String},placeholder:{type:String,default:"Placeholder..."},limit:{type:Number,default:0},initValue:{type:String,required:!0},hint:{type:Object,default:()=>({error:"",description:""})},isDisabled:{type:Boolean,default:!1},className:{type:String,default:""}},{modelValue:{},modelModifiers:{}}),emits:["update:modelValue"],setup(l){const a=_(l,"modelValue"),e=l;a.value||(a.value=e.initValue);const t=s(!0);b(()=>e.initValue,g=>{t.value&&(a.value=g)}),b(()=>a.value,()=>{t.value=!1});const p=j(()=>e.hint.error.length>0?"error":e.hint.description.length>0?"desc":"");return(g,x)=>(i(),n("div",{class:r({"ded-textarea-container":!0,[e.className]:!!e.className})},[e.label?(i(),n("label",{key:0,class:r(["ded-textarea-label",{"ded-textarea-disable":e.isDisabled}]),for:"id"},d(e.label),3)):h("",!0),V("div",{class:r(["ded-textarea-group",{"ded-textarea-disable":e.isDisabled},e.hint.error.length>0&&`ded-textarea-border-${p.value}`])},[k(V("textarea",{id:"id",class:r(["ded-textarea",{"ded-textarea-disable":e.isDisabled}]),maxlength:e.limit>0?e.limit:void 0,placeholder:e.placeholder,"onUpdate:modelValue":x[0]||(x[0]=P=>a.value=P)},null,10,A),[[L,a.value]]),a.value.length>0&&e.limit===0?(i(),n("small",{key:0,class:r(["ded-textarea-hint-count",{"ded-textarea-disable":e.isDisabled}])},d(a.value.length),3)):(i(),n("small",{key:1,class:r(["ded-textarea-hint-count",{"ded-textarea-disable":e.isDisabled}])},d(a.value.length>0?`${a.value.length} / ${e.limit}`:""),3))],2),e.hint.error.length>0||e.hint.description.length>0?(i(),n("small",{key:1,class:r(["ded-textarea-hint",{"ded-textarea-disable":e.isDisabled},`ded-textarea-hint-${p.value}`])},d(e.hint.error.length>0?e.hint.error:e.hint.description),3)):h("",!0)],2))}};o.__docgenInfo={exportName:"default",displayName:"Textarea",description:"",tags:{},props:[{name:"label",type:{name:"string"}},{name:"placeholder",type:{name:"string"},defaultValue:{func:!1,value:'"Placeholder..."'}},{name:"limit",type:{name:"number"},defaultValue:{func:!1,value:"0"}},{name:"initValue",type:{name:"string"},required:!0},{name:"hint",type:{name:"object"},defaultValue:{func:!1,value:`{
    error: "",
    description: ""
}`}},{name:"isDisabled",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"className",type:{name:"string"},defaultValue:{func:!1,value:'""'}}],sourceFiles:["/Users/auouser/Desktop/Work_Space/DED-WDS_VUE/libs/src/ui/element/Textarea/Textarea.vue"]};function C(l){return`{
        error: '${l.error||""}',
        description: '${l.description||""}'
    }`}const F={title:"Component/Textarea",component:o,tags:["autodocs"],argTypes:{label:{description:"標題",control:{type:"text"}},placeholder:{description:"輸入提示",control:{type:"text"}},limit:{description:"字數限制",control:{type:"number"}},initValue:{description:"輸入值",control:{type:"text"}},hint:{description:"提示訊息",control:{type:"object"},table:{type:{summary:"{ error: string; description: string; }[]"}}},isDisabled:{description:"是否禁用",control:{type:"boolean"}},className:{description:"客製化樣式",control:{type:"text"}}},parameters:{docs:{title:"Textarea",description:{component:"Textarea 組件的呈現及說明。"}}}},u={name:"預設項目",args:{label:"Label",placeholder:"Placeholder...",limit:500,initValue:"Type something...",hint:{error:"",description:"Prompt message"},isDisabled:!1,className:""},render:l=>({components:{Textarea:o},setup(){const a=s("");return{args:l,textareaModelValue:a}},template:`
            <Textarea
                :label="args.label"
                :placeholder="args.placeholder"
                :limit="args.limit"
                :initValue="args.initValue"
                :hint="args.hint"
                :isDisabled="args.isDisabled"
                :className="args.className"
                v-model="textareaModelValue"
            ></Textarea>
        `}),parameters:{controls:{exclude:["modelValue","customClass"]},docs:{source:{transform:(l,a)=>{const{args:e}=a,t=C(e.hint);return["<Textarea",`  label="${e.label}"`,`  placeholder="${e.placeholder}"`,`  :limit="${e.limit}"`,`  :initValue="${e.initValue}"`,`  :hint="${t}"`,`  :isDisabled="${e.isDisabled}"`,`  className="${e.className}"`,'  v-model="textareaModelValue"',"></Textarea>"].join(`
`).trim()}}}}},c={name:"字數限制",args:{label:"Label",placeholder:"Type something...",limit:50,initValue:"",hint:{error:"",description:""},isDisabled:!1,className:""},render:l=>({components:{Textarea:o},setup(){const a=s("Hello World");return{args:l,textareaModelValue:a}},template:`
            <Textarea
                :label="args.label"
                :placeholder="args.placeholder"
                :limit="args.limit"
                :initValue="args.initValue"
                :hint="args.hint"
                :isDisabled="args.isDisabled"
                :className="args.className"
                v-model="textareaModelValue"
            ></Textarea>
        `}),parameters:{controls:{exclude:["modelValue","customClass"]},docs:{source:{transform:(l,a)=>{const{args:e}=a,t=C(e.hint);return["<Textarea",`  label="${e.label}"`,`  placeholder="${e.placeholder}"`,`  :limit="${e.limit}"`,`  :initValue="${e.initValue}"`,`  :hint="${t}"`,`  :isDisabled="${e.isDisabled}"`,`  className="${e.className}"`,'  v-model="textareaModelValue"',"></Textarea>"].join(`
`).trim()}}}}},m={name:"輸入框狀態",args:{label:"Label",placeholder:"Type something...",initValue:"Type something...",limit:50,isDisabled:!1},render:l=>({components:{Textarea:o},setup(){const a=s(""),e=s(""),t=s("");return{args:l,textareaModelValue01:a,textareaModelValue02:e,textareaModelValue03:t}},template:`
            <div style="display: flex; flex-direction: column; gap:16px">
                <Textarea
                    :label="args.label"
                    :placeholder="args.placeholder"
                    :limit="args.limit"
                    :initValue="args.initValue"
                    :hint="{ error: '', description: 'Prompt message' }"
                    :isDisabled="args.isDisabled"
                    v-model="textareaModelValue01"
                ></Textarea>
                
                <Textarea
                    :label="args.label"
                    :placeholder="args.placeholder"
                    :limit="args.limit"
                    :initValue="args.initValue"
                    :hint="{ error: 'Error message', description: '' }"
                    :isDisabled="args.isDisabled"
                    v-model="textareaModelValue02"
                ></Textarea>
                
                <Textarea
                    :label="args.label"
                    :placeholder="args.placeholder"
                    :limit="args.limit"
                    :initValue="args.initValue"
                    :hint="{ error: '', description: 'Prompt message' }"
                    :isDisabled="args.isDisabled"
                    v-model="textareaModelValue03"
                ></Textarea>
            </div>
        `}),parameters:{controls:{exclude:["modelValue","hint","customClass"]},docs:{source:{transform:(l,a)=>{const{args:e}=a;return["<Textarea",`  label="${e.label}"`,`  placeholder="${e.placeholder}"`,`  :limit="${e.limit}"`,`  :initValue="${e.initValue}"`,`  :hint="{ error: '', description: 'Prompt message' }"`,`  :isDisabled="${e.isDisabled}"`,'  v-model="textareaModelValue01"',"></Textarea>","<Textarea",`  label="${e.label}"`,`  placeholder="${e.placeholder}"`,`  :limit="${e.limit}"`,`  :initValue="${e.initValue}"`,`  :hint="{ error: 'Error message', description: '' }"`,`  :isDisabled="${e.isDisabled}"`,'  v-model="textareaModelValue02"',"></Textarea>","<Textarea",`  label="${e.label}"`,`  placeholder="${e.placeholder}"`,`  :limit="${e.limit}"`,`  :initValue="${e.initValue}"`,`  :hint="{ error: '', description: 'Prompt message' }"`,`  :isDisabled="${e.isDisabled}"`,'  v-model="textareaModelValue03"',"></Textarea>"].join(`
`).trim()}}}}};var D,T,f;u.parameters={...u.parameters,docs:{...(D=u.parameters)==null?void 0:D.docs,source:{originalSource:`{
  name: "預設項目",
  args: {
    label: "Label",
    placeholder: "Placeholder...",
    limit: 500,
    initValue: "Type something...",
    hint: {
      error: "",
      description: "Prompt message"
    },
    isDisabled: false,
    className: ""
  },
  render: args => ({
    components: {
      Textarea
    },
    setup() {
      const textareaModelValue = ref("");
      return {
        args,
        textareaModelValue
      };
    },
    template: \`
            <Textarea
                :label="args.label"
                :placeholder="args.placeholder"
                :limit="args.limit"
                :initValue="args.initValue"
                :hint="args.hint"
                :isDisabled="args.isDisabled"
                :className="args.className"
                v-model="textareaModelValue"
            ></Textarea>
        \`
  }),
  // 控制 controls 中能控制的參數
  parameters: {
    controls: {
      // include: ['themeColor', 'label', 'value', 'name' ],
      exclude: ['modelValue', 'customClass']
    },
    docs: {
      source: {
        transform: (src, storyContext) => {
          const {
            args
          } = storyContext;
          const dataSourceString = formatDataSource(args.hint);
          return ['<Textarea', \`  label="\${args.label}"\`, \`  placeholder="\${args.placeholder}"\`, \`  :limit="\${args.limit}"\`, \`  :initValue="\${args.initValue}"\`, \`  :hint="\${dataSourceString}"\`, \`  :isDisabled="\${args.isDisabled}"\`, \`  className="\${args.className}"\`, \`  v-model="textareaModelValue"\`, '></Textarea>'].join('\\n').trim();
        }
      }
    }
  }
}`,...(f=(T=u.parameters)==null?void 0:T.docs)==null?void 0:f.source}}};var $,v,y;c.parameters={...c.parameters,docs:{...($=c.parameters)==null?void 0:$.docs,source:{originalSource:`{
  name: "字數限制",
  args: {
    label: "Label",
    placeholder: "Type something...",
    limit: 50,
    initValue: "",
    hint: {
      error: '',
      description: ''
    },
    isDisabled: false,
    className: ''
  },
  render: args => ({
    components: {
      Textarea
    },
    setup() {
      const textareaModelValue = ref("Hello World");
      return {
        args,
        textareaModelValue
      };
    },
    template: \`
            <Textarea
                :label="args.label"
                :placeholder="args.placeholder"
                :limit="args.limit"
                :initValue="args.initValue"
                :hint="args.hint"
                :isDisabled="args.isDisabled"
                :className="args.className"
                v-model="textareaModelValue"
            ></Textarea>
        \`
  }),
  // 控制 controls 中能控制的參數
  parameters: {
    controls: {
      // include: ['themeColor', 'label', 'value', 'name' ],
      exclude: ['modelValue', 'customClass']
    },
    docs: {
      source: {
        transform: (src, storyContext) => {
          const {
            args
          } = storyContext;
          const dataSourceString = formatDataSource(args.hint);
          return ['<Textarea', \`  label="\${args.label}"\`, \`  placeholder="\${args.placeholder}"\`, \`  :limit="\${args.limit}"\`, \`  :initValue="\${args.initValue}"\`, \`  :hint="\${dataSourceString}"\`, \`  :isDisabled="\${args.isDisabled}"\`, \`  className="\${args.className}"\`, \`  v-model="textareaModelValue"\`, '></Textarea>'].join('\\n').trim();
        }
      }
    }
  }
}`,...(y=(v=c.parameters)==null?void 0:v.docs)==null?void 0:y.source}}};var M,N,S;m.parameters={...m.parameters,docs:{...(M=m.parameters)==null?void 0:M.docs,source:{originalSource:`{
  name: "輸入框狀態",
  args: {
    label: "Label",
    placeholder: "Type something...",
    initValue: "Type something...",
    limit: 50,
    isDisabled: false
  },
  render: args => ({
    components: {
      Textarea
    },
    setup() {
      // Create a ref for modelValue to be used with v-model
      const textareaModelValue01 = ref("");
      const textareaModelValue02 = ref("");
      const textareaModelValue03 = ref("");
      return {
        args,
        textareaModelValue01,
        textareaModelValue02,
        textareaModelValue03
      };
    },
    template: \`
            <div style="display: flex; flex-direction: column; gap:16px">
                <Textarea
                    :label="args.label"
                    :placeholder="args.placeholder"
                    :limit="args.limit"
                    :initValue="args.initValue"
                    :hint="{ error: '', description: 'Prompt message' }"
                    :isDisabled="args.isDisabled"
                    v-model="textareaModelValue01"
                ></Textarea>
                
                <Textarea
                    :label="args.label"
                    :placeholder="args.placeholder"
                    :limit="args.limit"
                    :initValue="args.initValue"
                    :hint="{ error: 'Error message', description: '' }"
                    :isDisabled="args.isDisabled"
                    v-model="textareaModelValue02"
                ></Textarea>
                
                <Textarea
                    :label="args.label"
                    :placeholder="args.placeholder"
                    :limit="args.limit"
                    :initValue="args.initValue"
                    :hint="{ error: '', description: 'Prompt message' }"
                    :isDisabled="args.isDisabled"
                    v-model="textareaModelValue03"
                ></Textarea>
            </div>
        \`
  }),
  // 控制 controls 中能控制的參數
  parameters: {
    controls: {
      // include: ['themeColor', 'label', 'value', 'name' ],
      exclude: ['modelValue', 'hint', 'customClass']
    },
    docs: {
      source: {
        transform: (src, storyContext) => {
          const {
            args
          } = storyContext;
          return ['<Textarea', \`  label="\${args.label}"\`, \`  placeholder="\${args.placeholder}"\`, \`  :limit="\${args.limit}"\`, \`  :initValue="\${args.initValue}"\`, \`  :hint="{ error: '', description: 'Prompt message' }"\`, \`  :isDisabled="\${args.isDisabled}"\`, \`  v-model="textareaModelValue01"\`, '></Textarea>', '<Textarea', \`  label="\${args.label}"\`, \`  placeholder="\${args.placeholder}"\`, \`  :limit="\${args.limit}"\`, \`  :initValue="\${args.initValue}"\`, \`  :hint="{ error: 'Error message', description: '' }"\`, \`  :isDisabled="\${args.isDisabled}"\`, \`  v-model="textareaModelValue02"\`, '></Textarea>', '<Textarea', \`  label="\${args.label}"\`, \`  placeholder="\${args.placeholder}"\`, \`  :limit="\${args.limit}"\`, \`  :initValue="\${args.initValue}"\`, \`  :hint="{ error: '', description: 'Prompt message' }"\`, \`  :isDisabled="\${args.isDisabled}"\`, \`  v-model="textareaModelValue03"\`, '></Textarea>'].join('\\n').trim();
        }
      }
    }
  }
}`,...(S=(N=m.parameters)==null?void 0:N.docs)==null?void 0:S.source}}};const w=["TextareaDefault","TextareaLimit","TextareaStatus"];export{u as TextareaDefault,c as TextareaLimit,m as TextareaStatus,w as __namedExportsOrder,F as default};

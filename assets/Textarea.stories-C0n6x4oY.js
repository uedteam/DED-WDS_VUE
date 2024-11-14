import{m as _,u as W,e as n,w as V,c as k,a as i,n as r,t as u,f as D,b as f,h as H,y as w,o}from"./vue.esm-bundler-Dy0-1sXb.js";const L=["maxlength","placeholder"],s={__name:"Textarea",props:_({label:{type:String},placeholder:{type:String,default:"請輸入..."},limit:{type:Number,default:100},initValue:{type:String,default:""},hint:{type:Object,default:()=>({error:"",description:""})},isDisabled:{type:Boolean,default:!1},className:{type:String,default:""}},{modelValue:{},modelModifiers:{}}),emits:["update:modelValue"],setup(l){const a=W(l,"modelValue"),e=l;a.value||(a.value=e.initValue);const t=n(!0);V(()=>e.initValue,b=>{t.value&&(a.value=b)}),V(()=>a.value,()=>{t.value=!1});const x=k(()=>e.hint.error.length>0?"error":e.hint.description.length>0?"desc":"");return(b,h)=>(o(),i("div",{class:r({"textarea-container":!0,[e.className]:!!e.className})},[e.label?(o(),i("label",{key:0,class:r(["textarea-label",{"textarea-disable":e.isDisabled}]),for:"id"},u(e.label),3)):D("",!0),f("div",{class:r(["textarea-group",{"textarea-disable":e.isDisabled},e.hint.error.length>0&&`textarea-border-${x.value}`])},[H(f("textarea",{id:"id",class:r(["textarea",{"textarea-disable":e.isDisabled}]),maxlength:e.limit>0?e.limit:void 0,placeholder:e.placeholder,"onUpdate:modelValue":h[0]||(h[0]=j=>a.value=j)},null,10,L),[[w,a.value]]),a.value.length>0&&e.limit===0?(o(),i("small",{key:0,class:r(["textarea-hint-count",{"textarea-disable":e.isDisabled}])},u(a.value.length),3)):(o(),i("small",{key:1,class:r(["textarea-hint-count",{"textarea-disable":e.isDisabled}])},u(a.value.length>0?`${a.value.length} / ${e.limit}`:""),3))],2),e.hint.error.length>0||e.hint.description.length>0?(o(),i("small",{key:1,class:r(["textarea-hint",{"textarea-disable":e.isDisabled},`textarea-hint-${x.value}`])},u(e.hint.error.length>0?e.hint.error:e.hint.description),3)):D("",!0)],2))}};s.__docgenInfo={exportName:"default",displayName:"Textarea",description:"",tags:{},props:[{name:"label",type:{name:"string"}},{name:"placeholder",type:{name:"string"},defaultValue:{func:!1,value:'"請輸入..."'}},{name:"limit",type:{name:"number"},defaultValue:{func:!1,value:"100"}},{name:"initValue",type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"hint",type:{name:"object"},defaultValue:{func:!1,value:`{\r
    error: "",\r
    description: ""\r
}`}},{name:"isDisabled",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"className",type:{name:"string"},defaultValue:{func:!1,value:'""'}}],sourceFiles:["D:/98_測試/up/DED-WDS_VUE/libs/src/ui/element/Textarea/Textarea.vue"]};function g(l){return`{
        error: '${l.error||""}',
        description: '${l.description||""}'
    }`}const U={title:"Design System/Textarea",component:s,tags:["autodocs"],argTypes:{label:{description:"標題",control:{type:"text"}},placeholder:{description:"輸入提示",control:{type:"text"}},limit:{description:"字數限制",control:{type:"number"}},initValue:{description:"輸入值",control:{type:"text"}},hint:{description:"提示訊息",control:{type:"object"},table:{type:{summary:"{ error: string; description: string; }[]"}}},isDisabled:{description:"是否禁用",control:{type:"boolean"}},className:{description:"客製化樣式",control:{type:"text"}}},parameters:{docs:{title:"Textarea",description:{component:"Textarea 組件的呈現及說明。"}}}},d={name:"預設項目",args:{label:"訂單備註",placeholder:"請輸入此筆訂單備註",limit:50,initValue:"Hello World",hint:{error:"",description:"多行文字輸入框提示訊息"},isDisabled:!1,className:""},render:l=>({components:{Textarea:s},setup(){const a=n("");return{args:l,textareaModelValue:a}},template:`
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
        `}),parameters:{controls:{exclude:["modelValue","customClass"]},docs:{source:{transform:(l,a)=>{const{args:e}=a,t=g(e.hint);return["<Textarea",`  label="${e.label}"`,`  placeholder="${e.placeholder}"`,`  :limit="${e.limit}"`,`  :initValue="${e.initValue}"`,`  :hint="${t}"`,`  :isDisabled="${e.isDisabled}"`,`  className="${e.className}"`,'  v-model="textareaModelValue"',"></Textarea>"].join(`
`).trim()}}}}},c={name:"顯示標籤",args:{label:"訂單備註",placeholder:"請輸入此筆訂單備註",limit:50,initValue:"",hint:{error:"",description:""},isDisabled:!1,className:""},render:l=>({components:{Textarea:s},setup(){const a=n("");return{args:l,textareaModelValue:a}},template:`
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
        `}),parameters:{controls:{exclude:["modelValue","customClass"]},docs:{source:{transform:(l,a)=>{const{args:e}=a,t=g(e.hint);return["<Textarea",`  label="${e.label}"`,`  placeholder="${e.placeholder}"`,`  :limit="${e.limit}"`,`  :initValue="${e.initValue}"`,`  :hint="${t}"`,`  :isDisabled="${e.isDisabled}"`,`  className="${e.className}"`,'  v-model="textareaModelValue"',"></Textarea>"].join(`
`).trim()}}}}},m={name:"字數限制",args:{label:"訂單備註",placeholder:"請輸入此筆訂單備註",limit:50,initValue:"Hello World",hint:{error:"",description:""},isDisabled:!1,className:""},render:l=>({components:{Textarea:s},setup(){const a=n("Hello World");return{args:l,textareaModelValue:a}},template:`
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
        `}),parameters:{controls:{exclude:["modelValue","customClass"]},docs:{source:{transform:(l,a)=>{const{args:e}=a,t=g(e.hint);return["<Textarea",`  label="${e.label}"`,`  placeholder="${e.placeholder}"`,`  :limit="${e.limit}"`,`  :initValue="${e.initValue}"`,`  :hint="${t}"`,`  :isDisabled="${e.isDisabled}"`,`  className="${e.className}"`,'  v-model="textareaModelValue"',"></Textarea>"].join(`
`).trim()}}}}},p={name:"輸入框狀態",args:{label:"訂單備註",placeholder:"請輸入此筆訂單備註",initValue:"",limit:50,isDisabled:!1},render:l=>({components:{Textarea:s},setup(){const a=n(""),e=n(""),t=n("");return{args:l,textareaModelValue01:a,textareaModelValue02:e,textareaModelValue03:t}},template:`
            <div style="display: flex; flex-direction: column; gap:16px">
                <Textarea
                    :label="args.label"
                    :placeholder="args.placeholder"
                    :limit="args.limit"
                    :initValue="args.initValue"
                    :hint="{ error: '', description: '' }"
                    :isDisabled="args.isDisabled"
                    v-model="textareaModelValue01"
                ></Textarea>
                
                <Textarea
                    :label="args.label"
                    :placeholder="args.placeholder"
                    :limit="args.limit"
                    :initValue="args.initValue"
                    :hint="{ error: '請勿使用特殊符號', description: '' }"
                    :isDisabled="args.isDisabled"
                    v-model="textareaModelValue02"
                ></Textarea>
                
                <Textarea
                    :label="args.label"
                    :placeholder="args.placeholder"
                    :limit="args.limit"
                    :initValue="args.initValue"
                    :hint="{ error: '', description: '請簡述本筆訂單的使用回饋' }"
                    :isDisabled="args.isDisabled"
                    v-model="textareaModelValue03"
                ></Textarea>
            </div>
        `}),parameters:{controls:{exclude:["modelValue","hint","customClass"]},docs:{source:{transform:(l,a)=>{const{args:e}=a;return["<Textarea",`  label="${e.label}"`,`  placeholder="${e.placeholder}"`,`  :limit="${e.limit}"`,`  :initValue="${e.initValue}"`,`  :hint="{ error: '', description: '' }"`,`  :isDisabled="${e.isDisabled}"`,'  v-model="textareaModelValue01"',"></Textarea>","<Textarea",`  label="${e.label}"`,`  placeholder="${e.placeholder}"`,`  :limit="${e.limit}"`,`  :initValue="${e.initValue}"`,`  :hint="{ error: '請勿使用特殊符號', description: '' }"`,`  :isDisabled="${e.isDisabled}"`,'  v-model="textareaModelValue02"',"></Textarea>","<Textarea",`  label="${e.label}"`,`  placeholder="${e.placeholder}"`,`  :limit="${e.limit}"`,`  :initValue="${e.initValue}"`,`  :hint="{ error: '', description: '請簡述本筆訂單的使用回饋' }"`,`  :isDisabled="${e.isDisabled}"`,'  v-model="textareaModelValue03"',"></Textarea>"].join(`
`).trim()}}}}};var $,T,v;d.parameters={...d.parameters,docs:{...($=d.parameters)==null?void 0:$.docs,source:{originalSource:`{
  name: "預設項目",
  args: {
    label: "訂單備註",
    placeholder: "請輸入此筆訂單備註",
    limit: 50,
    initValue: "Hello World",
    hint: {
      error: "",
      description: "多行文字輸入框提示訊息"
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
}`,...(v=(T=d.parameters)==null?void 0:T.docs)==null?void 0:v.source}}};var A,M,y;c.parameters={...c.parameters,docs:{...(A=c.parameters)==null?void 0:A.docs,source:{originalSource:`{
  name: "顯示標籤",
  args: {
    label: "訂單備註",
    placeholder: "請輸入此筆訂單備註",
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
}`,...(y=(M=c.parameters)==null?void 0:M.docs)==null?void 0:y.source}}};var C,N,B;m.parameters={...m.parameters,docs:{...(C=m.parameters)==null?void 0:C.docs,source:{originalSource:`{
  name: "字數限制",
  args: {
    label: "訂單備註",
    placeholder: "請輸入此筆訂單備註",
    limit: 50,
    initValue: "Hello World",
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
}`,...(B=(N=m.parameters)==null?void 0:N.docs)==null?void 0:B.source}}};var S,F,E;p.parameters={...p.parameters,docs:{...(S=p.parameters)==null?void 0:S.docs,source:{originalSource:`{
  name: "輸入框狀態",
  args: {
    label: "訂單備註",
    placeholder: "請輸入此筆訂單備註",
    initValue: "",
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
                    :hint="{ error: '', description: '' }"
                    :isDisabled="args.isDisabled"
                    v-model="textareaModelValue01"
                ></Textarea>
                
                <Textarea
                    :label="args.label"
                    :placeholder="args.placeholder"
                    :limit="args.limit"
                    :initValue="args.initValue"
                    :hint="{ error: '請勿使用特殊符號', description: '' }"
                    :isDisabled="args.isDisabled"
                    v-model="textareaModelValue02"
                ></Textarea>
                
                <Textarea
                    :label="args.label"
                    :placeholder="args.placeholder"
                    :limit="args.limit"
                    :initValue="args.initValue"
                    :hint="{ error: '', description: '請簡述本筆訂單的使用回饋' }"
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
          return ['<Textarea', \`  label="\${args.label}"\`, \`  placeholder="\${args.placeholder}"\`, \`  :limit="\${args.limit}"\`, \`  :initValue="\${args.initValue}"\`, \`  :hint="{ error: '', description: '' }"\`, \`  :isDisabled="\${args.isDisabled}"\`, \`  v-model="textareaModelValue01"\`, '></Textarea>', '<Textarea', \`  label="\${args.label}"\`, \`  placeholder="\${args.placeholder}"\`, \`  :limit="\${args.limit}"\`, \`  :initValue="\${args.initValue}"\`, \`  :hint="{ error: '請勿使用特殊符號', description: '' }"\`, \`  :isDisabled="\${args.isDisabled}"\`, \`  v-model="textareaModelValue02"\`, '></Textarea>', '<Textarea', \`  label="\${args.label}"\`, \`  placeholder="\${args.placeholder}"\`, \`  :limit="\${args.limit}"\`, \`  :initValue="\${args.initValue}"\`, \`  :hint="{ error: '', description: '請簡述本筆訂單的使用回饋' }"\`, \`  :isDisabled="\${args.isDisabled}"\`, \`  v-model="textareaModelValue03"\`, '></Textarea>'].join('\\n').trim();
        }
      }
    }
  }
}`,...(E=(F=p.parameters)==null?void 0:F.docs)==null?void 0:E.source}}};const z=["TextareaDefault","TextareaLabelDefault","TextareaLimit","TextareaStatus"];export{d as TextareaDefault,c as TextareaLabelDefault,m as TextareaLimit,p as TextareaStatus,z as __namedExportsOrder,U as default};

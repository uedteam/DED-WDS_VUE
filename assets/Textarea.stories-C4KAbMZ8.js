import{m as E,u as j,c as _,a as i,n as t,t as d,f as D,b as T,h as k,y as I,o,e as s}from"./vue.esm-bundler-jfoHxfC9.js";const L=["maxlength","placeholder"],n={__name:"Textarea",props:E({label:{type:String},placeholder:{type:String,default:"placeholder text"},limit:{type:Number,default:100},isDisabled:{type:Boolean,default:!1},hint:{type:Object,default:()=>({error:"",description:""})},className:{type:String,default:""}},{modelValue:{},modelModifiers:{}}),emits:["update:modelValue"],setup(l){const a=j(l,"modelValue"),e=l,r=_(()=>e.hint.error.length>0?"error":e.hint.description.length>0?"desc":"");return(h,u)=>(o(),i("div",{class:t({"textarea-container":!0,[e.className]:!!e.className})},[e.label?(o(),i("label",{key:0,class:t(["textarea-label",{"textarea-disable":e.isDisabled}]),for:"id"},d(e.label),3)):D("",!0),T("div",{class:t(["textarea-group",{"textarea-disable":e.isDisabled},e.hint.error.length>0&&`textarea-border-${r.value}`])},[k(T("textarea",{id:"id",class:t(["textarea",{"textarea-disable":e.isDisabled}]),maxlength:e.limit>0?e.limit:void 0,placeholder:e.placeholder,"onUpdate:modelValue":u[0]||(u[0]=g=>a.value=g),onInput:u[1]||(u[1]=(...g)=>h.handleInput&&h.handleInput(...g))},null,42,L),[[I,a.value]]),a.value.length>0&&e.limit===0?(o(),i("small",{key:0,class:t(["textarea-hint-count",{"textarea-disable":e.isDisabled}])},d(a.value.length>0?`${a.value.length}`:""),3)):(o(),i("small",{key:1,class:t(["textarea-hint-count",{"textarea-disable":e.isDisabled}])},d(a.value.length>0?`${a.value.length} / ${e.limit}`:""),3))],2),e.hint.error.length>0||e.hint.description.length>0?(o(),i("small",{key:1,class:t(["textarea-hint",{"textarea-disable":e.isDisabled},`textarea-hint-${r.value}`])},d(e.hint.error.length>0?e.hint.error:e.hint.description),3)):D("",!0)],2))}};n.__docgenInfo={exportName:"default",displayName:"Textarea",description:"",tags:{},props:[{name:"label",type:{name:"string"}},{name:"placeholder",type:{name:"string"},defaultValue:{func:!1,value:'"placeholder text"'}},{name:"limit",type:{name:"number"},defaultValue:{func:!1,value:"100"}},{name:"isDisabled",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"hint",type:{name:"object"},defaultValue:{func:!1,value:`{\r
    error: '',\r
    description: ''\r
}`}},{name:"className",type:{name:"string"},defaultValue:{func:!1,value:"''"}}],sourceFiles:["D:/98_測試/up/DED-WDS_VUE/libs/src/ui/element/Textarea/Textarea.vue"]};function b(l){return`{
        error: '${l.error||""}',
        description: '${l.description||""}'
    }`}const w={title:"Design System/Textarea",component:n,tags:["autodocs"],argTypes:{label:{description:"標題",control:{type:"text"}},placeholder:{description:"輸入提示",control:{type:"text"}},isDisabled:{description:"是否禁用",control:{type:"boolean"}},limit:{description:"字數限制",control:{type:"number"}},hint:{description:"提示訊息",control:{type:"object"},table:{type:{summary:"{ error: string; description: string; }[]"}}},className:{description:"客製化樣式",control:{type:"text"}}},parameters:{docs:{title:"Textarea",description:{component:"Textarea 組件的呈現及說明。"}}}},c={name:"預設項目",args:{label:"訂單備註",placeholder:"請輸入此筆訂單備註",isDisabled:!1,limit:50,hint:{error:"",description:"多行文字輸入框提示訊息"},className:""},render:l=>({components:{Textarea:n},setup(){const a=s("");return{args:l,textareaModelValue:a}},template:`
            <Textarea
                :label="args.label"
                :placeholder="args.placeholder"
                :limit="args.limit"
                :isDisabled="args.isDisabled"
                :hint="args.hint"
                v-model="textareaModelValue"
                :className="args.className"
            ></Textarea>
        `}),parameters:{controls:{exclude:["modelValue","customClass"]},docs:{source:{transform:(l,a)=>{const{args:e}=a,r=b(e.hint);return["<Textarea",`  label="${e.label}"`,`  placeholder="${e.placeholder}"`,`  :limit="${e.limit}"`,`  :isDisabled="${e.isDisabled}"`,`  :hint="${r}"`,'  v-model="textareaModelValue"',`  className="${e.className}"`,"></Textarea>"].join(`
`).trim()}}}}},m={name:"顯示標籤",args:{label:"訂單備註",placeholder:"請輸入此筆訂單備註",isDisabled:!1,limit:50,hint:{error:"",description:""},className:""},render:l=>({components:{Textarea:n},setup(){const a=s("");return{args:l,textareaModelValue:a}},template:`
            <Textarea
                :label="args.label"
                :placeholder="args.placeholder"
                :limit="args.limit"
                :isDisabled="args.isDisabled"
                :hint="args.hint"
                v-model="textareaModelValue"
                :className="args.className"
            ></Textarea>
        `}),parameters:{controls:{exclude:["modelValue","customClass"]},docs:{source:{transform:(l,a)=>{const{args:e}=a,r=b(e.hint);return["<Textarea",`  label="${e.label}"`,`  placeholder="${e.placeholder}"`,`  :limit="${e.limit}"`,`  :isDisabled="${e.isDisabled}"`,`  :hint="${r}"`,'  v-model="textareaModelValue"',`  className="${e.className}"`,"></Textarea>"].join(`
`).trim()}}}}},p={name:"字數限制",args:{label:"訂單備註",placeholder:"請輸入此筆訂單備註",isDisabled:!1,limit:50,hint:{error:"",description:""},className:""},render:l=>({components:{Textarea:n},setup(){const a=s("Hello World");return{args:l,textareaModelValue:a}},template:`
            <Textarea
                :label="args.label"
                :placeholder="args.placeholder"
                :limit="args.limit"
                :isDisabled="args.isDisabled"
                :hint="args.hint"
                v-model="textareaModelValue"
                :className="args.className"
            ></Textarea>
        `}),parameters:{controls:{exclude:["modelValue","customClass"]},docs:{source:{transform:(l,a)=>{const{args:e}=a,r=b(e.hint);return["<Textarea",`  label="${e.label}"`,`  placeholder="${e.placeholder}"`,`  :limit="${e.limit}"`,`  :isDisabled="${e.isDisabled}"`,`  :hint="${r}"`,'  v-model="textareaModelValue"',`  className="${e.className}"`,"></Textarea>"].join(`
`).trim()}}}}},x={name:"輸入框狀態",args:{label:"訂單備註",placeholder:"請輸入此筆訂單備註",isDisabled:!1,limit:50},render:l=>({components:{Textarea:n},setup(){const a=s(""),e=s(""),r=s("");return{args:l,textareaModelValue01:a,textareaModelValue02:e,textareaModelValue03:r}},template:`
            <div style="display: flex; flex-direction: column; gap:16px">
                <Textarea
                    :label="args.label"
                    :placeholder="args.placeholder"
                    :limit="args.limit"
                    :isDisabled="args.isDisabled"
                    :hint="{ error: '', description: '' }"
                    v-model="textareaModelValue01"
                ></Textarea>
                
                <Textarea
                    :label="args.label"
                    :placeholder="args.placeholder"
                    :limit="args.limit"
                    :isDisabled="args.isDisabled"
                    :hint="{ error: '請勿使用特殊符號', description: '' }"
                    v-model="textareaModelValue02"
                ></Textarea>
                
                <Textarea
                    :label="args.label"
                    :placeholder="args.placeholder"
                    :limit="args.limit"
                    :isDisabled="args.isDisabled"
                    :hint="{ error: '', description: '請簡述本筆訂單的使用回饋' }"
                    v-model="textareaModelValue03"
                ></Textarea>
            </div>
        `}),parameters:{controls:{exclude:["modelValue","hint","customClass"]},docs:{source:{transform:(l,a)=>{const{args:e}=a;return["<Textarea",`  label="${e.label}"`,`  placeholder="${e.placeholder}"`,`  :limit="${e.limit}"`,`  :isDisabled="${e.isDisabled}"`,`  :hint="{ error: '', description: '' }"`,'  v-model="textareaModelValue01"',"></Textarea>","<Textarea",`  label="${e.label}"`,`  placeholder="${e.placeholder}"`,`  :limit="${e.limit}"`,`  :isDisabled="${e.isDisabled}"`,`  :hint="{ error: '請勿使用特殊符號', description: '' }"`,'  v-model="textareaModelValue02"',"></Textarea>","<Textarea",`  label="${e.label}"`,`  placeholder="${e.placeholder}"`,`  :limit="${e.limit}"`,`  :isDisabled="${e.isDisabled}"`,`  :hint="{ error: '', description: '請簡述本筆訂單的使用回饋' }"`,'  v-model="textareaModelValue03"',"></Textarea>"].join(`
`).trim()}}}}};var f,$,V;c.parameters={...c.parameters,docs:{...(f=c.parameters)==null?void 0:f.docs,source:{originalSource:`{
  name: "預設項目",
  args: {
    label: "訂單備註",
    placeholder: "請輸入此筆訂單備註",
    isDisabled: false,
    limit: 50,
    hint: {
      error: '',
      description: '多行文字輸入框提示訊息'
    },
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
                :isDisabled="args.isDisabled"
                :hint="args.hint"
                v-model="textareaModelValue"
                :className="args.className"
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
          return ['<Textarea', \`  label="\${args.label}"\`, \`  placeholder="\${args.placeholder}"\`, \`  :limit="\${args.limit}"\`, \`  :isDisabled="\${args.isDisabled}"\`, \`  :hint="\${dataSourceString}"\`, \`  v-model="textareaModelValue"\`, \`  className="\${args.className}"\`, '></Textarea>'].join('\\n').trim();
        }
      }
    }
  }
}`,...(V=($=c.parameters)==null?void 0:$.docs)==null?void 0:V.source}}};var A,v,M;m.parameters={...m.parameters,docs:{...(A=m.parameters)==null?void 0:A.docs,source:{originalSource:`{
  name: "顯示標籤",
  args: {
    label: "訂單備註",
    placeholder: "請輸入此筆訂單備註",
    isDisabled: false,
    limit: 50,
    hint: {
      error: '',
      description: ''
    },
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
                :isDisabled="args.isDisabled"
                :hint="args.hint"
                v-model="textareaModelValue"
                :className="args.className"
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
          return ['<Textarea', \`  label="\${args.label}"\`, \`  placeholder="\${args.placeholder}"\`, \`  :limit="\${args.limit}"\`, \`  :isDisabled="\${args.isDisabled}"\`, \`  :hint="\${dataSourceString}"\`, \`  v-model="textareaModelValue"\`, \`  className="\${args.className}"\`, '></Textarea>'].join('\\n').trim();
        }
      }
    }
  }
}`,...(M=(v=m.parameters)==null?void 0:v.docs)==null?void 0:M.source}}};var C,y,N;p.parameters={...p.parameters,docs:{...(C=p.parameters)==null?void 0:C.docs,source:{originalSource:`{
  name: "字數限制",
  args: {
    label: "訂單備註",
    placeholder: "請輸入此筆訂單備註",
    isDisabled: false,
    limit: 50,
    hint: {
      error: '',
      description: ''
    },
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
                :isDisabled="args.isDisabled"
                :hint="args.hint"
                v-model="textareaModelValue"
                :className="args.className"
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
          return ['<Textarea', \`  label="\${args.label}"\`, \`  placeholder="\${args.placeholder}"\`, \`  :limit="\${args.limit}"\`, \`  :isDisabled="\${args.isDisabled}"\`, \`  :hint="\${dataSourceString}"\`, \`  v-model="textareaModelValue"\`, \`  className="\${args.className}"\`, '></Textarea>'].join('\\n').trim();
        }
      }
    }
  }
}`,...(N=(y=p.parameters)==null?void 0:y.docs)==null?void 0:N.source}}};var B,S,F;x.parameters={...x.parameters,docs:{...(B=x.parameters)==null?void 0:B.docs,source:{originalSource:`{
  name: "輸入框狀態",
  args: {
    label: "訂單備註",
    placeholder: "請輸入此筆訂單備註",
    isDisabled: false,
    limit: 50
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
                    :isDisabled="args.isDisabled"
                    :hint="{ error: '', description: '' }"
                    v-model="textareaModelValue01"
                ></Textarea>
                
                <Textarea
                    :label="args.label"
                    :placeholder="args.placeholder"
                    :limit="args.limit"
                    :isDisabled="args.isDisabled"
                    :hint="{ error: '請勿使用特殊符號', description: '' }"
                    v-model="textareaModelValue02"
                ></Textarea>
                
                <Textarea
                    :label="args.label"
                    :placeholder="args.placeholder"
                    :limit="args.limit"
                    :isDisabled="args.isDisabled"
                    :hint="{ error: '', description: '請簡述本筆訂單的使用回饋' }"
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
          return ['<Textarea', \`  label="\${args.label}"\`, \`  placeholder="\${args.placeholder}"\`, \`  :limit="\${args.limit}"\`, \`  :isDisabled="\${args.isDisabled}"\`, \`  :hint="{ error: '', description: '' }"\`, \`  v-model="textareaModelValue01"\`, '></Textarea>', '<Textarea', \`  label="\${args.label}"\`, \`  placeholder="\${args.placeholder}"\`, \`  :limit="\${args.limit}"\`, \`  :isDisabled="\${args.isDisabled}"\`, \`  :hint="{ error: '請勿使用特殊符號', description: '' }"\`, \`  v-model="textareaModelValue02"\`, '></Textarea>', '<Textarea', \`  label="\${args.label}"\`, \`  placeholder="\${args.placeholder}"\`, \`  :limit="\${args.limit}"\`, \`  :isDisabled="\${args.isDisabled}"\`, \`  :hint="{ error: '', description: '請簡述本筆訂單的使用回饋' }"\`, \`  v-model="textareaModelValue03"\`, '></Textarea>'].join('\\n').trim();
        }
      }
    }
  }
}`,...(F=(S=x.parameters)==null?void 0:S.docs)==null?void 0:F.source}}};const H=["TextareaDefault","TextareaLabelDefault","TextareaLimit","TextareaStatus"];export{c as TextareaDefault,m as TextareaLabelDefault,p as TextareaLimit,x as TextareaStatus,H as __namedExportsOrder,w as default};

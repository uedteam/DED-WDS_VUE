import{m as S,u as P,g as C,c as n,n as s,t as c,e as u,a as g,l as E,B as _,o as i}from"./vue.esm-bundler-qCK_iSPY.js";const j=["maxlength","placeholder"],t={__name:"Textarea",props:S({label:{type:String},placeholder:{type:String,default:"Placeholder"},limit:{type:Number,default:30},hint:{type:Object,default:()=>({error:"",description:""})},isDisabled:{type:Boolean,default:!1},className:{type:String,default:""}},{modelValue:{},modelModifiers:{}}),emits:["update:modelValue"],setup(a){const l=P(a,"modelValue"),e=a,r=C(()=>e.hint.error.length>0?"error":e.hint.description.length>0?"desc":"");return(L,p)=>(i(),n("div",{class:s({"ded-textarea-container":!0,[e.className]:!!e.className})},[e.label?(i(),n("label",{key:0,class:s(["ded-textarea-label",{"ded-textarea-disable":e.isDisabled}]),for:"id"},c(e.label),3)):u("",!0),g("div",{class:s(["ded-textarea-group",{"ded-textarea-disable":e.isDisabled},e.hint.error.length>0&&`ded-textarea-border-${r.value}`])},[E(g("textarea",{id:"id",class:s(["ded-textarea",{"ded-textarea-disable":e.isDisabled}]),maxlength:e.limit>0?e.limit:void 0,placeholder:e.placeholder,"onUpdate:modelValue":p[0]||(p[0]=V=>l.value=V)},null,10,j),[[_,l.value]]),l.value.length>0&&e.limit!==0?(i(),n("small",{key:0,class:s(["ded-textarea-hint-count",{"ded-textarea-disable":e.isDisabled}])},c(l.value.length>0?`${l.value.length} / ${e.limit}`:""),3)):u("",!0)],2),e.hint.error.length>0||e.hint.description.length>0?(i(),n("small",{key:1,class:s(["ded-textarea-hint",{"ded-textarea-disable":e.isDisabled},`ded-textarea-hint-${r.value}`])},c(e.hint.error.length>0?e.hint.error:e.hint.description),3)):u("",!0)],2))}};t.__docgenInfo={exportName:"default",displayName:"Textarea",description:"",tags:{},props:[{name:"label",type:{name:"string"}},{name:"placeholder",type:{name:"string"},defaultValue:{func:!1,value:'"Placeholder"'}},{name:"limit",type:{name:"number"},defaultValue:{func:!1,value:"30"}},{name:"hint",type:{name:"object"},defaultValue:{func:!1,value:`{
    error: "",
    description: ""
}`}},{name:"isDisabled",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"className",type:{name:"string"},defaultValue:{func:!1,value:'""'}}],sourceFiles:["/Users/auouser/Desktop/Work_Space/DED-WDS_VUE/libs/src/ui/element/Textarea/Textarea.vue"]};function v(a){return`{
        error: '${a.error||""}',
        description: '${a.description||""}'
    }`}const A={title:"Component/Textarea",component:t,tags:["autodocs"],argTypes:{label:{description:"標題",control:{type:"text"}},placeholder:{description:"輸入提示",control:{type:"text"}},limit:{description:"字數限制",control:{type:"number"}},hint:{description:"提示訊息",control:{type:"object"},table:{type:{summary:"{ error: string; description: string; }[]"}}},isDisabled:{description:"是否禁用",control:{type:"boolean"}},className:{description:"客製化樣式",control:{type:"text"}},modelValue:{description:"輸入值",control:{type:"text"},table:{type:{summary:"string"},category:"v-model"}}},parameters:{docs:{title:"Textarea",description:{component:"Textarea 組件的呈現及說明。"}}}},o={name:"預設項目",args:{label:"Label",placeholder:"Placeholder",limit:0,hint:{error:"",description:"Prompt message"},isDisabled:!1,className:"",modelValue:"Type something"},render:a=>({components:{Textarea:t},setup(){return{args:a}},template:`
            <Textarea
                :label="args.label"
                :placeholder="args.placeholder"
                :limit="args.limit"
                :hint="args.hint"
                :isDisabled="args.isDisabled"
                :className="args.className"
                v-model="args.modelValue"
            ></Textarea>
        `}),parameters:{controls:{},docs:{source:{transform:(a,l)=>{const{args:e}=l,r=v(e.hint);return["<Textarea",`  label="${e.label}"`,`  placeholder="${e.placeholder}"`,`  :limit="${e.limit}"`,`  :hint="${r}"`,`  :isDisabled="${e.isDisabled}"`,`  className="${e.className}"`,'  v-model="modelValue"',"></Textarea>"].join(`
`).trim()}}}}},d={name:"字數限制",args:{label:"Label",placeholder:"Placeholder",limit:30,hint:{error:"",description:""},isDisabled:!1,className:"",modelValue:"Type something"},render:a=>({components:{Textarea:t},setup(){return{args:a}},template:`
            <Textarea
                :label="args.label"
                :placeholder="args.placeholder"
                :limit="args.limit"
                :hint="args.hint"
                :isDisabled="args.isDisabled"
                :className="args.className"
                v-model="args.modelValue"
            ></Textarea>
        `}),parameters:{controls:{},docs:{source:{transform:(a,l)=>{const{args:e}=l,r=v(e.hint);return["<Textarea",`  label="${e.label}"`,`  placeholder="${e.placeholder}"`,`  :limit="${e.limit}"`,`  :hint="${r}"`,`  :isDisabled="${e.isDisabled}"`,`  className="${e.className}"`,'  v-model="modelValue"',"></Textarea>"].join(`
`).trim()}}}}},m={name:"輸入框狀態",args:{label:"Label",placeholder:"Placeholder",limit:30,isDisabled:!1,className:"",modelValue:"Type something"},render:a=>({components:{Textarea:t},setup(){return{args:a}},template:`
            <div style="display: flex; flex-direction: column; gap:16px">
                <Textarea
                    :label="args.label"
                    :placeholder="args.placeholder"
                    :limit="args.limit"
                    :hint="{ error: '', description: 'Prompt message' }"
                    :isDisabled="args.isDisabled"
                    :className="args.className"
                    v-model="args.modelValue"
                ></Textarea>
                
                <Textarea
                    :label="args.label"
                    :placeholder="args.placeholder"
                    :limit="args.limit"
                    :hint="{ error: 'Error', description: '' }"
                    :isDisabled="args.isDisabled"
                    :className="args.className"
                    v-model="args.modelValue"
                ></Textarea>
                
                <Textarea
                    :label="args.label"
                    :placeholder="args.placeholder"
                    :limit="args.limit"
                    :hint="{ error: '', description: 'Prompt message' }"
                    :isDisabled="true"
                    :className="args.className"
                    v-model="args.modelValue"
                ></Textarea>
            </div>
        `}),parameters:{controls:{exclude:["hint","isDisabled"]},docs:{source:{transform:(a,l)=>{const{args:e}=l;return["<Textarea",`  label="${e.label}"`,`  placeholder="${e.placeholder}"`,`  :limit="${e.limit}"`,`  :hint="{ error: '', description: 'Prompt message' }"`,`  :isDisabled="${e.isDisabled}"`,`  className="${e.className}"`,'  v-model="modelValue"',"></Textarea>","<Textarea",`  label="${e.label}"`,`  placeholder="${e.placeholder}"`,`  :limit="${e.limit}"`,`  :hint="{ error: 'Error', description: '' }"`,`  :isDisabled="${e.isDisabled}"`,`  className="${e.className}"`,'  v-model="modelValue"',"></Textarea>","<Textarea",`  label="${e.label}"`,`  placeholder="${e.placeholder}"`,`  :limit="${e.limit}"`,`  :hint="{ error: '', description: 'Prompt message' }"`,'  :isDisabled="true"',`  className="${e.className}"`,'  v-model="modelValue"',"></Textarea>"].join(`
`).trim()}}}}};var b,h,x;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`{
  name: "預設項目",
  args: {
    label: "Label",
    placeholder: "Placeholder",
    limit: 0,
    // initValue: "Type something...",
    hint: {
      error: "",
      description: "Prompt message"
    },
    isDisabled: false,
    className: "",
    modelValue: "Type something"
  },
  render: args => ({
    components: {
      Textarea
    },
    setup() {
      return {
        args
      };
    },
    template: \`
            <Textarea
                :label="args.label"
                :placeholder="args.placeholder"
                :limit="args.limit"
                :hint="args.hint"
                :isDisabled="args.isDisabled"
                :className="args.className"
                v-model="args.modelValue"
            ></Textarea>
        \`
  }),
  // 控制 controls 中能控制的參數
  parameters: {
    controls: {
      // include: ['themeColor', 'label', 'value', 'name' ],
      // exclude: [],
    },
    docs: {
      source: {
        transform: (src, storyContext) => {
          const {
            args
          } = storyContext;
          const dataSourceString = formatDataSource(args.hint);
          return ['<Textarea', \`  label="\${args.label}"\`, \`  placeholder="\${args.placeholder}"\`, \`  :limit="\${args.limit}"\`, \`  :hint="\${dataSourceString}"\`, \`  :isDisabled="\${args.isDisabled}"\`, \`  className="\${args.className}"\`, \`  v-model="modelValue"\`, '></Textarea>'].join('\\n').trim();
        }
      }
    }
  }
}`,...(x=(h=o.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};var D,T,$;d.parameters={...d.parameters,docs:{...(D=d.parameters)==null?void 0:D.docs,source:{originalSource:`{
  name: "字數限制",
  args: {
    label: "Label",
    placeholder: "Placeholder",
    limit: 30,
    // initValue: "",
    hint: {
      error: '',
      description: ''
    },
    isDisabled: false,
    className: "",
    modelValue: "Type something"
  },
  render: args => ({
    components: {
      Textarea
    },
    setup() {
      return {
        args
      };
    },
    template: \`
            <Textarea
                :label="args.label"
                :placeholder="args.placeholder"
                :limit="args.limit"
                :hint="args.hint"
                :isDisabled="args.isDisabled"
                :className="args.className"
                v-model="args.modelValue"
            ></Textarea>
        \`
  }),
  // 控制 controls 中能控制的參數
  parameters: {
    controls: {
      // include: ['themeColor', 'label', 'value', 'name' ],
      // exclude: ['limit' ],
    },
    docs: {
      source: {
        transform: (src, storyContext) => {
          const {
            args
          } = storyContext;
          const dataSourceString = formatDataSource(args.hint);
          return ['<Textarea', \`  label="\${args.label}"\`, \`  placeholder="\${args.placeholder}"\`, \`  :limit="\${args.limit}"\`, \`  :hint="\${dataSourceString}"\`, \`  :isDisabled="\${args.isDisabled}"\`, \`  className="\${args.className}"\`, \`  v-model="modelValue"\`, '></Textarea>'].join('\\n').trim();
        }
      }
    }
  }
}`,...($=(T=d.parameters)==null?void 0:T.docs)==null?void 0:$.source}}};var N,f,y;m.parameters={...m.parameters,docs:{...(N=m.parameters)==null?void 0:N.docs,source:{originalSource:`{
  name: "輸入框狀態",
  args: {
    label: "Label",
    placeholder: "Placeholder",
    // initValue: "Type something...",
    limit: 30,
    isDisabled: false,
    className: "",
    modelValue: "Type something"
  },
  render: args => ({
    components: {
      Textarea
    },
    setup() {
      return {
        args
      };
    },
    template: \`
            <div style="display: flex; flex-direction: column; gap:16px">
                <Textarea
                    :label="args.label"
                    :placeholder="args.placeholder"
                    :limit="args.limit"
                    :hint="{ error: '', description: 'Prompt message' }"
                    :isDisabled="args.isDisabled"
                    :className="args.className"
                    v-model="args.modelValue"
                ></Textarea>
                
                <Textarea
                    :label="args.label"
                    :placeholder="args.placeholder"
                    :limit="args.limit"
                    :hint="{ error: 'Error', description: '' }"
                    :isDisabled="args.isDisabled"
                    :className="args.className"
                    v-model="args.modelValue"
                ></Textarea>
                
                <Textarea
                    :label="args.label"
                    :placeholder="args.placeholder"
                    :limit="args.limit"
                    :hint="{ error: '', description: 'Prompt message' }"
                    :isDisabled="true"
                    :className="args.className"
                    v-model="args.modelValue"
                ></Textarea>
            </div>
        \`
  }),
  // 控制 controls 中能控制的參數
  parameters: {
    controls: {
      // include: ['themeColor', 'label', 'value', 'name' ],
      exclude: ['hint', 'isDisabled']
    },
    docs: {
      source: {
        transform: (src, storyContext) => {
          const {
            args
          } = storyContext;
          return ['<Textarea', \`  label="\${args.label}"\`, \`  placeholder="\${args.placeholder}"\`, \`  :limit="\${args.limit}"\`, \`  :hint="{ error: '', description: 'Prompt message' }"\`, \`  :isDisabled="\${args.isDisabled}"\`, \`  className="\${args.className}"\`, \`  v-model="modelValue"\`, '></Textarea>', '<Textarea', \`  label="\${args.label}"\`, \`  placeholder="\${args.placeholder}"\`, \`  :limit="\${args.limit}"\`, \`  :hint="{ error: 'Error', description: '' }"\`, \`  :isDisabled="\${args.isDisabled}"\`, \`  className="\${args.className}"\`, \`  v-model="modelValue"\`, '></Textarea>', '<Textarea', \`  label="\${args.label}"\`, \`  placeholder="\${args.placeholder}"\`, \`  :limit="\${args.limit}"\`, \`  :hint="{ error: '', description: 'Prompt message' }"\`, \`  :isDisabled="true"\`, \`  className="\${args.className}"\`, \`  v-model="modelValue"\`, '></Textarea>'].join('\\n').trim();
        }
      }
    }
  }
}`,...(y=(f=m.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};const B=["TextareaDefault","TextareaLimit","TextareaStatus"];export{o as TextareaDefault,d as TextareaLimit,m as TextareaStatus,B as __namedExportsOrder,A as default};

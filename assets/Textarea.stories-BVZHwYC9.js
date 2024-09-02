import{g as v,c as r,n as l,t as d,f as c,a as b,o as n,k as u}from"./vue.esm-bundler-5cDHsWFH.js";const B={class:"textarea-container"},C=["maxlength","placeholder"],y={__name:"Textarea",props:{label:{type:String},placeholder:{type:String,default:"placeholder text"},modelValue:{type:[String]},customClass:{type:String,default:""},total:{type:Number,default:100},hint:{type:Object,default:()=>({error:"",description:""})},isDisabled:{type:Boolean,default:!1}},emits:["update:modelValue"],setup(a,{emit:t}){const e=a,i=t,A=x=>{i("update:modelValue",x.target.value)},m=v(()=>e.hint.error.length>0?"error":e.hint.description.length>0?"desc":"");return(x,F)=>(n(),r("div",B,[e.label?(n(),r("label",{key:0,class:l(["textarea-label",{"textarea-disable":e.isDisabled}]),for:"id"},d(e.label),3)):c("",!0),b("div",{class:l(["textarea-group",{"textarea-disable":e.isDisabled},e.hint.error.length>0&&`textarea-border-${m.value}`])},[b("textarea",{id:"id",class:l(["textarea",{"textarea-disable":e.isDisabled}]),maxlength:e.total,placeholder:e.placeholder,onInput:A},null,42,C),a.modelValue.length>0?(n(),r("small",{key:0,class:l(["textarea-hint-count",{"textarea-disable":e.isDisabled}])},d(a.modelValue.length>0?`${a.modelValue.length} / ${e.total}`:""),3)):c("",!0)],2),e.hint.error.length>0||e.hint.description.length>0?(n(),r("small",{key:1,class:l(["textarea-hint",{"textarea-disable":e.isDisabled},`textarea-hint-${m.value}`])},d(e.hint.error.length>0?e.hint.error:e.hint.description),3)):c("",!0)]))}},p=y;y.__docgenInfo={exportName:"default",displayName:"Textarea",description:"",tags:{},props:[{name:"label",type:{name:"string"}},{name:"placeholder",type:{name:"string"},defaultValue:{func:!1,value:'"placeholder text"'}},{name:"modelValue",type:{name:"string"}},{name:"customClass",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"total",type:{name:"number"},defaultValue:{func:!1,value:"100"}},{name:"hint",type:{name:"object"},defaultValue:{func:!1,value:`{
  error: '',
  description: ''
}`}},{name:"isDisabled",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"}],sourceFiles:["/Users/auouser/Desktop/Work_Space/DED-WDS_VUE/libs/src/ui/element/Textarea/Textarea.vue"]};const E={title:"Design System/Textarea",component:p,tags:["autodocs"],argTypes:{label:{description:"設定 Textarea 標題",control:{type:"text"}},placeholder:{description:"設定 Textarea 輸入提示",control:{type:"text"}},total:{description:"設定 Textarea 標題",control:{type:"number"},default:10},hint:{description:"Textarea 提示訊息",control:{type:"object"}},isDisable:{description:"是否禁用",control:{type:"boolean"}}},parameters:{docs:{title:"多行文字輸入框",description:{component:"多行文字輸入框組件的呈現及說明。"}}}},s={name:"基礎多行文字輸入框",args:{label:"訂單備註",placeholder:"請輸入此筆訂單備註",total:50,hint:{error:"",description:""},isDisabled:!1},render:a=>({components:{Textarea:p},setup(){const t=u("");return{args:a,textareaModelValue:t}},template:`
            <Textarea
              :label="args.label"
              :placeholder="args.placeholder"
              :total="args.total"
              :hint="args.hint"
              v-model="textareaModelValue"
              :isDisabled="args.isDisabled"
            ></Textarea>
        `}),parameters:{controls:{}}},o={name:"多行文字輸入框驗證狀態",args:{label:"訂單備註",placeholder:"請輸入此筆訂單備註",total:50,isDisabled:!1},render:a=>({components:{Textarea:p},setup(){const t=u(""),e=u(""),i=u("");return{args:a,textareaModelValue01:t,textareaModelValue02:e,textareaModelValue03:i}},template:`
          <div style="display: flex; gap:16px">
            <Textarea
                :label="args.label"
                :placeholder="args.placeholder"
                :total="args.total"
                :hint="{ error: '', description: '' }"
                v-model="textareaModelValue01"
                :isDisabled="args.isDisabled"
            ></Textarea>
            <Textarea
                :label="args.label"
                :placeholder="args.placeholder"
                :total="args.total"
                :hint="{ error: '請勿使用特殊符號', description: '請簡述本筆訂單的使用回饋' }"
                v-model="textareaModelValue02"
                :isDisabled="args.isDisabled"
            ></Textarea>
            <Textarea
                :label="args.label"
                :placeholder="args.placeholder"
                :total="args.total"
                :hint="{ error: '', description: '請簡述本筆訂單的使用回饋' }"
                v-model="textareaModelValue03"
                :isDisabled="args.isDisabled"
            ></Textarea>
          </div>
        `}),parameters:{controls:{}}};var g,h,f;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  name: "基礎多行文字輸入框",
  args: {
    label: "訂單備註",
    placeholder: "請輸入此筆訂單備註",
    total: 50,
    hint: {
      error: '',
      description: ''
    },
    isDisabled: false
  },
  render: args => ({
    components: {
      Textarea
    },
    setup() {
      // Create a ref for modelValue to be used with v-model
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
              :total="args.total"
              :hint="args.hint"
              v-model="textareaModelValue"
              :isDisabled="args.isDisabled"
            ></Textarea>
        \`
  }),
  // 控制 controls 中能控制的參數
  parameters: {
    controls: {
      // include: ['themeColor', 'label', 'value', 'name' ],
    }
  }
}`,...(f=(h=s.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};var D,V,T;o.parameters={...o.parameters,docs:{...(D=o.parameters)==null?void 0:D.docs,source:{originalSource:`{
  name: "多行文字輸入框驗證狀態",
  args: {
    label: "訂單備註",
    placeholder: "請輸入此筆訂單備註",
    total: 50,
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
          <div style="display: flex; gap:16px">
            <Textarea
                :label="args.label"
                :placeholder="args.placeholder"
                :total="args.total"
                :hint="{ error: '', description: '' }"
                v-model="textareaModelValue01"
                :isDisabled="args.isDisabled"
            ></Textarea>
            <Textarea
                :label="args.label"
                :placeholder="args.placeholder"
                :total="args.total"
                :hint="{ error: '請勿使用特殊符號', description: '請簡述本筆訂單的使用回饋' }"
                v-model="textareaModelValue02"
                :isDisabled="args.isDisabled"
            ></Textarea>
            <Textarea
                :label="args.label"
                :placeholder="args.placeholder"
                :total="args.total"
                :hint="{ error: '', description: '請簡述本筆訂單的使用回饋' }"
                v-model="textareaModelValue03"
                :isDisabled="args.isDisabled"
            ></Textarea>
          </div>
        \`
  }),
  // 控制 controls 中能控制的參數
  parameters: {
    controls: {
      // include: ['themeColor', 'label', 'value', 'name' ],
    }
  }
}`,...(T=(V=o.parameters)==null?void 0:V.docs)==null?void 0:T.source}}};const S=["DefaultTextarea","TextareaStatus"];export{s as DefaultTextarea,o as TextareaStatus,S as __namedExportsOrder,E as default};

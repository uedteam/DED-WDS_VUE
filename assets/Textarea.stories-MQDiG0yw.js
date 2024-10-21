import{m as C,u as N,f as E,c as r,n as t,t as d,e as b,b as h,a as F,q as S,o as s,r as n}from"./vue.esm-bundler-qOdkfnRX.js";const _=["maxlength","placeholder"],i={__name:"Textarea",props:C({label:{type:String},placeholder:{type:String,default:"placeholder text"},limit:{type:Number,default:100},isDisabled:{type:Boolean,default:!1},hint:{type:Object,default:()=>({error:"",description:""})},className:{type:String,default:""}},{modelValue:{},modelModifiers:{}}),emits:["update:modelValue"],setup(l){const a=N(l,"modelValue"),e=l,o=E(()=>e.hint.error.length>0?"error":e.hint.description.length>0?"desc":"");return(g,u)=>(s(),r("div",{class:t({"textarea-container":!0,[e.className]:!!e.className})},[e.label?(s(),r("label",{key:0,class:t(["textarea-label",{"textarea-disable":e.isDisabled}]),for:"id"},d(e.label),3)):b("",!0),h("div",{class:t(["textarea-group",{"textarea-disable":e.isDisabled},e.hint.error.length>0&&`textarea-border-${o.value}`])},[F(h("textarea",{id:"id",class:t(["textarea",{"textarea-disable":e.isDisabled}]),maxlength:e.limit>0?e.limit:void 0,placeholder:e.placeholder,"onUpdate:modelValue":u[0]||(u[0]=x=>a.value=x),onInput:u[1]||(u[1]=(...x)=>g.handleInput&&g.handleInput(...x))},null,42,_),[[S,a.value]]),a.value.length>0&&e.limit===0?(s(),r("small",{key:0,class:t(["textarea-hint-count",{"textarea-disable":e.isDisabled}])},d(a.value.length>0?`${a.value.length}`:""),3)):(s(),r("small",{key:1,class:t(["textarea-hint-count",{"textarea-disable":e.isDisabled}])},d(a.value.length>0?`${a.value.length} / ${e.limit}`:""),3))],2),e.hint.error.length>0||e.hint.description.length>0?(s(),r("small",{key:1,class:t(["textarea-hint",{"textarea-disable":e.isDisabled},`textarea-hint-${o.value}`])},d(e.hint.error.length>0?e.hint.error:e.hint.description),3)):b("",!0)],2))}};i.__docgenInfo={exportName:"default",displayName:"Textarea",description:"",tags:{},props:[{name:"label",type:{name:"string"}},{name:"placeholder",type:{name:"string"},defaultValue:{func:!1,value:'"placeholder text"'}},{name:"limit",type:{name:"number"},defaultValue:{func:!1,value:"100"}},{name:"isDisabled",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"hint",type:{name:"object"},defaultValue:{func:!1,value:`{
    error: '',
    description: ''
}`}},{name:"className",type:{name:"string"},defaultValue:{func:!1,value:"''"}}],sourceFiles:["/Users/jony_worker/Documents/90_外部檔案/upstream/DED-WDS_VUE/libs/src/ui/element/Textarea/Textarea.vue"]};const $={title:"Design System/Textarea",component:i,tags:["autodocs"],argTypes:{label:{description:"標題",control:{type:"text"}},placeholder:{description:"輸入提示",control:{type:"text"}},limit:{description:"字數限制",control:{type:"number"}},isDisabled:{description:"是否禁用",control:{type:"boolean"}},hint:{description:"提示訊息",control:{type:"object"}},className:{description:"客製化樣式",control:{type:"text"}}},parameters:{docs:{title:"Textarea",description:{component:"Textarea 組件的呈現及說明。"}}}},c={name:"主要項目",args:{label:"訂單備註",placeholder:"請輸入此筆訂單備註",limit:50,isDisabled:!1,hint:{error:"",description:""},className:""},render:l=>({components:{Textarea:i},setup(){const a=n("");return{args:l,textareaModelValue:a}},template:`
            <Textarea
                :label="args.label"
                :placeholder="args.placeholder"
                :limit="args.limit"
                :isDisabled="args.isDisabled"
                :hint="args.hint"
                v-model="textareaModelValue"
                :className="args.className"
            ></Textarea>
        `}),parameters:{controls:{exclude:["modelValue","customClass"]}}},m={name:"字數限制",args:{label:"訂單備註",placeholder:"請輸入此筆訂單備註",limit:50,isDisabled:!1,hint:{error:"",description:""},className:""},render:l=>({components:{Textarea:i},setup(){const a=n("Hello World");return{args:l,textareaModelValue:a}},template:`
            <Textarea
                :label="args.label"
                :placeholder="args.placeholder"
                :limit="args.limit"
                :isDisabled="args.isDisabled"
                :hint="args.hint"
                v-model="textareaModelValue"
                :className="args.className"
            ></Textarea>
        `}),parameters:{controls:{exclude:["modelValue","customClass"]}}},p={name:"輸入框狀態",args:{label:"訂單備註",placeholder:"請輸入此筆訂單備註",limit:50,isDisabled:!1},render:l=>({components:{Textarea:i},setup(){const a=n(""),e=n(""),o=n("");return{args:l,textareaModelValue01:a,textareaModelValue02:e,textareaModelValue03:o}},template:`
            <div style="display: flex; gap:16px">
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
        `}),parameters:{controls:{exclude:["modelValue","hint","customClass"]}}};var f,D,V;c.parameters={...c.parameters,docs:{...(f=c.parameters)==null?void 0:f.docs,source:{originalSource:`{
  name: "主要項目",
  args: {
    label: "訂單備註",
    placeholder: "請輸入此筆訂單備註",
    limit: 50,
    isDisabled: false,
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
    }
  }
}`,...(V=(D=c.parameters)==null?void 0:D.docs)==null?void 0:V.source}}};var T,v,A;m.parameters={...m.parameters,docs:{...(T=m.parameters)==null?void 0:T.docs,source:{originalSource:`{
  name: "字數限制",
  args: {
    label: "訂單備註",
    placeholder: "請輸入此筆訂單備註",
    limit: 50,
    isDisabled: false,
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
    }
  }
}`,...(A=(v=m.parameters)==null?void 0:v.docs)==null?void 0:A.source}}};var y,M,B;p.parameters={...p.parameters,docs:{...(y=p.parameters)==null?void 0:y.docs,source:{originalSource:`{
  name: "輸入框狀態",
  args: {
    label: "訂單備註",
    placeholder: "請輸入此筆訂單備註",
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
            <div style="display: flex; gap:16px">
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
    }
  }
}`,...(B=(M=p.parameters)==null?void 0:M.docs)==null?void 0:B.source}}};const j=["TextareaDefault","TextareaLimit","TextareaStatus"];export{c as TextareaDefault,m as TextareaLimit,p as TextareaStatus,j as __namedExportsOrder,$ as default};

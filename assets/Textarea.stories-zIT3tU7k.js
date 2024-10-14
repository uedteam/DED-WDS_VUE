import{m as y,u as A,f as M,c as r,n as t,t as o,e as b,b as h,a as B,D as C,o as n,r as c}from"./vue.esm-bundler-Bm7qTojY.js";const F={class:"textarea-container"},E=["maxlength","placeholder"],m={__name:"Textarea",props:y({label:{type:String},placeholder:{type:String,default:"placeholder text"},limit:{type:Number,default:100},isDisabled:{type:Boolean,default:!1},hint:{type:Object,default:()=>({error:"",description:""})},customClass:{type:String,default:""}},{modelValue:{},modelModifiers:{}}),emits:["update:modelValue"],setup(l){const a=A(l,"modelValue"),e=l,s=M(()=>e.hint.error.length>0?"error":e.hint.description.length>0?"desc":"");return(x,i)=>(n(),r("div",F,[e.label?(n(),r("label",{key:0,class:t(["textarea-label",{"textarea-disable":e.isDisabled}]),for:"id"},o(e.label),3)):b("",!0),h("div",{class:t(["textarea-group",{"textarea-disable":e.isDisabled},e.hint.error.length>0&&`textarea-border-${s.value}`])},[B(h("textarea",{id:"id",class:t(["textarea",{"textarea-disable":e.isDisabled}]),maxlength:e.limit>0?e.limit:void 0,placeholder:e.placeholder,"onUpdate:modelValue":i[0]||(i[0]=p=>a.value=p),onInput:i[1]||(i[1]=(...p)=>x.handleInput&&x.handleInput(...p))},null,42,E),[[C,a.value]]),a.value.length>0&&e.limit===0?(n(),r("small",{key:0,class:t(["textarea-hint-count",{"textarea-disable":e.isDisabled}])},o(a.value.length>0?`${a.value.length}`:""),3)):(n(),r("small",{key:1,class:t(["textarea-hint-count",{"textarea-disable":e.isDisabled}])},o(a.value.length>0?`${a.value.length} / ${e.limit}`:""),3))],2),e.hint.error.length>0||e.hint.description.length>0?(n(),r("small",{key:1,class:t(["textarea-hint",{"textarea-disable":e.isDisabled},`textarea-hint-${s.value}`])},o(e.hint.error.length>0?e.hint.error:e.hint.description),3)):b("",!0)]))}};m.__docgenInfo={exportName:"default",displayName:"Textarea",description:"",tags:{},props:[{name:"label",type:{name:"string"}},{name:"placeholder",type:{name:"string"},defaultValue:{func:!1,value:'"placeholder text"'}},{name:"limit",type:{name:"number"},defaultValue:{func:!1,value:"100"}},{name:"isDisabled",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"hint",type:{name:"object"},defaultValue:{func:!1,value:`{
    error: '',
    description: ''
}`}},{name:"customClass",type:{name:"string"},defaultValue:{func:!1,value:"''"}}],sourceFiles:["/Users/auouser/Desktop/Work_Space/DED-WDS_VUE/libs/src/ui/element/Textarea/Textarea.vue"]};const _={title:"Design System/Textarea",component:m,tags:["autodocs"],argTypes:{label:{description:"設定 Textarea 的標題文字",control:{type:"text"}},placeholder:{description:"設定 Textarea 的輸入提示文字，指引用戶輸入內容",control:{type:"text"}},limit:{description:"設定 Textarea 的最大字符數限制；設為 0 表示不限制字符數",control:{type:"number"}},isDisabled:{description:"設定 Textarea 是否禁用，禁用後無法進行任何輸入",control:{type:"boolean"}},hint:{description:"顯示在 Textarea 下方的提示訊息，提供額外指引",control:{type:"object"}}},parameters:{docs:{title:"Textarea",description:{component:"Textarea 組件的呈現及說明。"}}}},u={name:"Textarea 基礎樣式",args:{label:"訂單備註",placeholder:"請輸入此筆訂單備註",limit:50,isDisabled:!1,hint:{error:"",description:""}},render:l=>({components:{Textarea:m},setup(){const a=c("");return{args:l,textareaModelValue:a}},template:`
            <Textarea
                :label="args.label"
                :placeholder="args.placeholder"
                :limit="args.limit"
                :isDisabled="args.isDisabled"
                :hint="args.hint"
                v-model="textareaModelValue"
            ></Textarea>
        `}),parameters:{controls:{exclude:["modelValue","customClass"]}}},d={name:"Textarea 驗證樣式",args:{label:"訂單備註",placeholder:"請輸入此筆訂單備註",limit:50,isDisabled:!1},render:l=>({components:{Textarea:m},setup(){const a=c(""),e=c(""),s=c("");return{args:l,textareaModelValue01:a,textareaModelValue02:e,textareaModelValue03:s}},template:`
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
        `}),parameters:{controls:{exclude:["modelValue","hint","customClass"]}}};var g,f,D;u.parameters={...u.parameters,docs:{...(g=u.parameters)==null?void 0:g.docs,source:{originalSource:`{
  name: "Textarea 基礎樣式",
  args: {
    label: "訂單備註",
    placeholder: "請輸入此筆訂單備註",
    limit: 50,
    isDisabled: false,
    hint: {
      error: '',
      description: ''
    }
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
}`,...(D=(f=u.parameters)==null?void 0:f.docs)==null?void 0:D.source}}};var T,V,v;d.parameters={...d.parameters,docs:{...(T=d.parameters)==null?void 0:T.docs,source:{originalSource:`{
  name: "Textarea 驗證樣式",
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
}`,...(v=(V=d.parameters)==null?void 0:V.docs)==null?void 0:v.source}}};const k=["TextareaDefault","TextareaStatus"];export{u as TextareaDefault,d as TextareaStatus,k as __namedExportsOrder,_ as default};

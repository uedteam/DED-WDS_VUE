import{v as p,x as d,p as m,o as c,j as f}from"./vue.esm-bundler-CsTC-5Ev.js";import{I as g}from"./Input-CEIQaJNA.js";import"./Icon-Pq8-XFtv.js";import"./iframe-D3-rZU4J.js";import"../sb-preview/runtime.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const r={__name:"Password",props:p({placeholder:{type:String,default:"Enter Password"},label:{type:String},size:{type:String,default:"medium",validator:e=>["small","medium","large"].includes(e)},customClass:{type:String,default:""},hint:{type:Object,default:()=>({error:"",description:""})},isDisable:{type:Boolean,default:!1}},{modelValue:{},modelModifiers:{}}),emits:["update:modelValue"],setup(e){const a=d(e,"modelValue"),s=e;return(D,o)=>(c(),m(g,{prefix:"lock",type:"password",label:s.label,placeholder:s.placeholder,size:s.size,modelValue:a.value,"onUpdate:modelValue":o[0]||(o[0]=i=>a.value=i),hint:s.hint},null,8,["label","placeholder","size","modelValue","hint"]))}};r.__docgenInfo={exportName:"default",displayName:"Password",description:"",tags:{},props:[{name:"placeholder",type:{name:"string"},defaultValue:{func:!1,value:"'Enter Password'"}},{name:"label",type:{name:"string"}},{name:"size",type:{name:"string"},defaultValue:{func:!1,value:"'medium'"},values:["small","medium","large"]},{name:"customClass",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"hint",type:{name:"object"},defaultValue:{func:!1,value:`{
    error: '',
    description: ''
}`}},{name:"isDisable",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],sourceFiles:["/Users/auouser/Desktop/Work_Space/DED-WDS_VUE/libs/src/ui/module/Password/Password.vue"]};const P={title:"Design System/Password",component:r,tags:["autodocs"],argTypes:{size:{description:"Password 尺寸",control:{type:"select"},options:["small","medium","large"]},label:{description:"設定 Password 標題",control:{type:"text"}},placeholder:{description:"設定 Password 輸入提示",control:{type:"text"}},hint:{description:"提示訊息",control:{type:"object"}},isDisable:{description:"是否禁用",control:{type:"boolean"}},customClass:{description:"客製化樣式",control:{type:"text"}}},parameters:{docs:{title:"Password",description:{component:"Password組件的呈現及說明。"}}}},t={name:"基礎樣式",args:{label:"登入密碼",placeholder:"請輸入密碼",size:"medium",hint:{error:"",description:"請設定長度 8 碼，混合大小寫英文字母、數字及特殊符號"},isDisable:!1},render:e=>({components:{Password:r},setup(){const a=f("");return{args:e,passwordInputData:a}},template:`
            <Password
                :label="args.label"
                :placeholder="args.placeholder"
                :size="args.size"
                v-model="passwordInputData"
                :hint="args.hint"
                :isDisable="args.isDisable"
            ></Password>
            <p v-if="passwordInputData"> 點擊搜尋後傳送給後端的資料: {{passwordInputData}}</p>
        `}),parameters:{controls:{}}};var l,n,u;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  name: "基礎樣式",
  args: {
    label: '登入密碼',
    placeholder: '請輸入密碼',
    size: "medium",
    hint: {
      error: '',
      description: '請設定長度 8 碼，混合大小寫英文字母、數字及特殊符號'
    },
    isDisable: false
  },
  render: args => ({
    components: {
      Password
    },
    setup() {
      const passwordInputData = ref("");
      return {
        args,
        passwordInputData
      };
    },
    template: \`
            <Password
                :label="args.label"
                :placeholder="args.placeholder"
                :size="args.size"
                v-model="passwordInputData"
                :hint="args.hint"
                :isDisable="args.isDisable"
            ></Password>
            <p v-if="passwordInputData"> 點擊搜尋後傳送給後端的資料: {{passwordInputData}}</p>
        \`
  }),
  // 控制 controls 中能控制的參數
  parameters: {
    controls: {
      // include: ['themeColor', 'label', 'value', 'name' ],
    }
  }
}`,...(u=(n=t.parameters)==null?void 0:n.docs)==null?void 0:u.source}}};const v=["DefaultPassword"];export{t as DefaultPassword,v as __namedExportsOrder,P as default};

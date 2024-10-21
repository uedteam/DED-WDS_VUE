import{m as i,q as p,l as m,o as c,r as f}from"./vendor-CDUjWAn_.js";import{I as w}from"./Input-BWCpCnuY.js";import"./Icon-CYV0WNBt.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const l={__name:"Password",props:i({placeholder:{type:String,default:"Enter Password"},label:{type:String},size:{type:String,default:"medium",validator:e=>["small","medium","large"].includes(e)},hint:{type:Object,default:()=>({error:"",description:""})},isDisabled:{type:Boolean,default:!1},customClass:{type:String,default:""}},{modelValue:{},modelModifiers:{}}),emits:["update:modelValue"],setup(e){const a=p(e,"modelValue"),s=e;return(D,t)=>(c(),m(w,{type:"password",prefix:"lock",placeholder:s.placeholder,label:s.label,size:s.size,hint:s.hint,isDisabled:s.isDisabled,modelValue:a.value,"onUpdate:modelValue":t[0]||(t[0]=d=>a.value=d)},null,8,["placeholder","label","size","hint","isDisabled","modelValue"]))}};l.__docgenInfo={exportName:"default",displayName:"Password",description:"",tags:{},props:[{name:"placeholder",type:{name:"string"},defaultValue:{func:!1,value:"'Enter Password'"}},{name:"label",type:{name:"string"}},{name:"size",type:{name:"string"},defaultValue:{func:!1,value:"'medium'"},values:["small","medium","large"]},{name:"hint",type:{name:"object"},defaultValue:{func:!1,value:`{\r
    error: '',\r
    description: ''\r
}`}},{name:"isDisabled",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"customClass",type:{name:"string"},defaultValue:{func:!1,value:"''"}}],sourceFiles:["D:/98_測試/up/DED-WDS_VUE/libs/src/ui/module/Password/Password.vue"]};const y={title:"Design System/Password",component:l,tags:["autodocs"],argTypes:{placeholder:{description:"設定 Password 的提示文字，幫助用戶了解預期輸入內容",control:{type:"text"}},label:{description:"設定 Password 標題文字",control:{type:"text"}},size:{description:"設定 Password 的大小",control:{type:"select"},options:["small","medium","large"]},hint:{description:"顯示在 Password 下方的提示訊息，提供額外的指導信息",control:{type:"object"}},isDisabled:{description:"設定 Password 是否禁用，禁用後無法進行輸入",control:{type:"boolean"}},customClass:{description:"客製化樣式",control:{type:"text"}}},parameters:{docs:{title:"Password",description:{component:"Password 組件的呈現及說明。"}}}},r={name:"Password 基礎樣式",args:{placeholder:"請輸入密碼",label:"登入密碼",size:"medium",hint:{error:"",description:"請設定長度 8 碼，混合大小寫英文字母、數字及特殊符號"},isDisabled:!1},render:e=>({components:{Password:l},setup(){const a=f("");return{args:e,passwordInputData:a}},template:`
            <Password
                :placeholder="args.placeholder"
                :label="args.label"
                :size="args.size"
                :hint="args.hint"
                :isDisabled="args.isDisabled"
                v-model="passwordInputData"
            ></Password>
            <p v-if="passwordInputData"> 傳送給後端的資料: {{passwordInputData}}</p>
        `}),parameters:{controls:{}}};var o,n,u;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
  name: "Password 基礎樣式",
  args: {
    placeholder: '請輸入密碼',
    label: '登入密碼',
    size: "medium",
    hint: {
      error: '',
      description: '請設定長度 8 碼，混合大小寫英文字母、數字及特殊符號'
    },
    isDisabled: false
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
                :placeholder="args.placeholder"
                :label="args.label"
                :size="args.size"
                :hint="args.hint"
                :isDisabled="args.isDisabled"
                v-model="passwordInputData"
            ></Password>
            <p v-if="passwordInputData"> 傳送給後端的資料: {{passwordInputData}}</p>
        \`
  }),
  // 控制 controls 中能控制的參數
  parameters: {
    controls: {
      // include: ['themeColor', 'label', 'value', 'name' ],
    }
  }
}`,...(u=(n=r.parameters)==null?void 0:n.docs)==null?void 0:u.source}}};const B=["PasswordDefault"];export{r as PasswordDefault,B as __namedExportsOrder,y as default};

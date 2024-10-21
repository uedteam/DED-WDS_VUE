import{m,u as h,c as o,t as f,e as b,b as g,C as i,I as y,F as D,o as l,J as S,r as C}from"./vue.esm-bundler-qOdkfnRX.js";import{I as V}from"./Input-p0IKWJdn.js";import{_ as v}from"./Button-Bd-tcIh9.js";import"./Icon-Dd3pkEjK.js";import"./iframe-Dllg10h5.js";import"../sb-preview/runtime.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./index-Bb4qSo10.js";const _={key:0,class:"input-label"},z={class:"search"},s={__name:"Search",props:m({btnVariant:{type:String,default:"contained",validator:e=>["contained","outlined","text"].includes(e)},btnColor:{type:String,default:"primary",validator:e=>["primary","secondary","tertiary","success","warning","error","info"].includes(e)},placeholder:{type:String},size:{type:String,default:"medium",validator:e=>["small","medium","large"].includes(e)},hint:{type:Object,default:()=>({error:"",description:""})},isDisable:{type:Boolean,default:!1},customClass:{type:String,default:""}},{modelValue:{},modelModifiers:{}}),emits:["update:modelValue"],setup(e){const t=h(e,"modelValue"),a=e;return(I,r)=>(l(),o(D,null,[a.inputLabel?(l(),o("label",_,f(a.inputLabel),1)):b("",!0),g("div",z,[i(V,{prefix:"search",placeholder:a.placeholder,size:a.size,hint:a.hint,isDisable:a.isDisable,modelValue:t.value,"onUpdate:modelValue":r[0]||(r[0]=d=>t.value=d)},null,8,["placeholder","size","hint","isDisable","modelValue"]),i(v,{themeColor:a.btnColor,size:a.size,variant:a.btnVariant,isDisable:a.isDisable},{default:y(()=>r[1]||(r[1]=[S("搜尋")])),_:1},8,["themeColor","size","variant","isDisable"])])],64))}};s.__docgenInfo={exportName:"default",displayName:"Search",description:"",tags:{},props:[{name:"btnVariant",type:{name:"string"},defaultValue:{func:!1,value:"'contained'"},values:["contained","outlined","text"]},{name:"btnColor",type:{name:"string"},defaultValue:{func:!1,value:"'primary'"},values:["primary","secondary","tertiary","success","warning","error","info"]},{name:"placeholder",type:{name:"string"}},{name:"size",type:{name:"string"},defaultValue:{func:!1,value:"'medium'"},values:["small","medium","large"]},{name:"hint",type:{name:"object"},defaultValue:{func:!1,value:`{
    error: '',
    description: ''
}`}},{name:"isDisable",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"customClass",type:{name:"string"},defaultValue:{func:!1,value:"''"}}],sourceFiles:["/Users/jony_worker/Documents/90_外部檔案/upstream/DED-WDS_VUE/libs/src/ui/module/Search/Search.vue"]};const k={title:"Design System/Search",component:s,tags:["autodocs"],argTypes:{btnVariant:{description:"按鈕按鈕樣式",control:{type:"select"},options:["contained","outlined","text"]},btnColor:{description:"按鈕按鈕顏色",control:{type:"select"},options:["primary","secondary","tertiary","success","warning","error","info"]},placeholder:{description:"設定 Search 的提示文字，幫助用戶了解預期輸入內容",control:{type:"text"}},size:{description:"設定 Search 的大小",control:{type:"select"},options:["small","medium","large"]},hint:{description:"顯示在 Search 下方的提示訊息，提供額外的指導信息",control:{type:"object"}},isDisable:{description:"設定 Search 是否禁用，禁用後無法進行輸入",control:{type:"boolean"}},customClass:{description:"客製化樣式",control:{type:"text"}}},parameters:{docs:{title:"Search",description:{component:"Search 組件的呈現及說明。"}}}},n={name:"Search 基礎樣式",args:{btnVariant:"contained",btnColor:"primary",placeholder:"請輸入關鍵字",size:"medium",hint:{error:"",description:"請輸入關鍵字搜尋"},isDisable:!1},render:e=>({components:{Search:s},setup(){const t=C("");return{args:e,searchInputData:t}},template:`
            <Search
                :btnVariant="args.btnVariant"
                :btnColor="args.btnColor"
                :placeholder="args.placeholder"
                :size="args.size"
                :hint="args.hint"
                :isDisable="args.isDisable"
                v-model="searchInputData"
            ></Search>
            <p v-if="searchInputData"> 傳送給後端的資料: {{searchInputData}}</p>
        `}),parameters:{controls:{}}};var u,c,p;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
  name: "Search 基礎樣式",
  args: {
    btnVariant: 'contained',
    btnColor: 'primary',
    placeholder: '請輸入關鍵字',
    size: "medium",
    hint: {
      error: '',
      description: '請輸入關鍵字搜尋'
    },
    isDisable: false
  },
  render: args => ({
    components: {
      Search
    },
    setup() {
      const searchInputData = ref("");
      return {
        args,
        searchInputData
      };
    },
    template: \`
            <Search
                :btnVariant="args.btnVariant"
                :btnColor="args.btnColor"
                :placeholder="args.placeholder"
                :size="args.size"
                :hint="args.hint"
                :isDisable="args.isDisable"
                v-model="searchInputData"
            ></Search>
            <p v-if="searchInputData"> 傳送給後端的資料: {{searchInputData}}</p>
        \`
  }),
  // 控制 controls 中能控制的參數
  parameters: {
    controls: {
      // include: ['themeColor', 'label', 'value', 'name' ],
    }
  }
}`,...(p=(c=n.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};const M=["DefaultSearch"];export{n as DefaultSearch,M as __namedExportsOrder,k as default};

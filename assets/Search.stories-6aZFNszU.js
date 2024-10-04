import{v as m,x as b,a as i,t as h,d as f,b as g,A as o,B as y,F as D,o as l,C,j as V}from"./vue.esm-bundler-CsTC-5Ev.js";import{I as S}from"./Input-CEIQaJNA.js";import{B as v}from"./Button-DKyHAzLO.js";import"./Icon-Pq8-XFtv.js";import"./iframe-D3-rZU4J.js";import"../sb-preview/runtime.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./index-Bb4qSo10.js";const B={key:0,class:"input-label"},z={class:"search"},s={__name:"Search",props:m({btnVariant:{type:String,default:"contained",validator:e=>["contained","outlined","text"].includes(e)},btnColor:{type:String,default:"primary",validator:e=>["primary","secondary","tertiary","success","warning","error","info"].includes(e)},size:{type:String,default:"medium",validator:e=>["small","medium","large"].includes(e)},inputLabel:{type:String},placeholder:{type:String},hint:{type:Object,default:()=>({error:"",description:""})},isDisable:{type:Boolean,default:!1},customClass:{type:String,default:""}},{modelValue:{},modelModifiers:{}}),emits:["update:modelValue"],setup(e){const t=b(e,"modelValue"),a=e;return(x,n)=>(l(),i(D,null,[a.inputLabel?(l(),i("label",B,h(a.inputLabel),1)):f("",!0),g("div",z,[o(S,{placeholder:a.placeholder,size:a.size,prefix:"search",modelValue:t.value,"onUpdate:modelValue":n[0]||(n[0]=d=>t.value=d),hint:a.hint,isDisable:a.isDisable},null,8,["placeholder","size","modelValue","hint","isDisable"]),o(v,{themeColor:a.btnColor,size:a.size,variant:a.btnVariant,isDisable:a.isDisable},{default:y(()=>n[1]||(n[1]=[C("搜尋")])),_:1},8,["themeColor","size","variant","isDisable"])])],64))}};s.__docgenInfo={exportName:"default",displayName:"Search",description:"",tags:{},props:[{name:"btnVariant",type:{name:"string"},defaultValue:{func:!1,value:"'contained'"},values:["contained","outlined","text"]},{name:"btnColor",type:{name:"string"},defaultValue:{func:!1,value:"'primary'"},values:["primary","secondary","tertiary","success","warning","error","info"]},{name:"size",type:{name:"string"},defaultValue:{func:!1,value:"'medium'"},values:["small","medium","large"]},{name:"inputLabel",type:{name:"string"}},{name:"placeholder",type:{name:"string"}},{name:"hint",type:{name:"object"},defaultValue:{func:!1,value:`{
    error: '',
    description: ''
}`}},{name:"isDisable",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"customClass",type:{name:"string"},defaultValue:{func:!1,value:"''"}}],sourceFiles:["/Users/auouser/Desktop/Work_Space/DED-WDS_VUE/libs/src/ui/module/Search/Search.vue"]};const j={title:"Design System/Search",component:s,tags:["autodocs"],argTypes:{btnVariant:{description:"按鈕按鈕樣式",control:{type:"select"},options:["contained","outlined","text"]},btnColor:{description:"按鈕按鈕顏色",control:{type:"select"},options:["primary","secondary","tertiary","success","warning","error","info"]},size:{description:"搜尋框尺寸",control:{type:"select"},options:["small","medium","large"]},inputLabel:{description:"設定搜尋框標題",control:{type:"text"}},placeholder:{description:"設定搜尋框輸入提示",control:{type:"text"}},hint:{description:"提示訊息",control:{type:"object"}},isDisable:{description:"是否禁用",control:{type:"boolean"}},customClass:{description:"客製化樣式",control:{type:"text"}}},parameters:{docs:{title:"Search",description:{component:"搜尋框組件的呈現及說明。"}}}},r={name:"基礎樣式",args:{placeholder:"請輸入關鍵字",size:"medium",inputLabel:"搜尋關鍵字",btnVariant:"contained",btnColor:"primary",hint:{error:"",description:"Please enter a Guide description"},isDisable:!1},render:e=>({components:{Search:s},setup(){const t=V("");return{args:e,searchInputData:t}},template:`
            <Search
                :placeholder="args.placeholder"
                :size="args.size"
                :inputLabel="args.inputLabel"
                :btnVariant="args.btnVariant"
                :btnColor="args.btnColor"
                v-model="searchInputData"
                :hint="{ error: '', description: '請輸入關鍵字搜尋' }"
                :isDisable="args.isDisable"
            ></Search>
            <p v-if="searchInputData"> 點擊搜尋後傳送給後端的資料: {{searchInputData}}</p>
        `}),parameters:{controls:{}}};var u,c,p;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  name: "基礎樣式",
  args: {
    placeholder: '請輸入關鍵字',
    size: "medium",
    inputLabel: '搜尋關鍵字',
    btnVariant: 'contained',
    btnColor: 'primary',
    hint: {
      error: '',
      description: 'Please enter a Guide description'
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
                :placeholder="args.placeholder"
                :size="args.size"
                :inputLabel="args.inputLabel"
                :btnVariant="args.btnVariant"
                :btnColor="args.btnColor"
                v-model="searchInputData"
                :hint="{ error: '', description: '請輸入關鍵字搜尋' }"
                :isDisable="args.isDisable"
            ></Search>
            <p v-if="searchInputData"> 點擊搜尋後傳送給後端的資料: {{searchInputData}}</p>
        \`
  }),
  // 控制 controls 中能控制的參數
  parameters: {
    controls: {
      // include: ['themeColor', 'label', 'value', 'name' ],
    }
  }
}`,...(p=(c=r.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};const w=["DefaultSearch"];export{r as DefaultSearch,w as __namedExportsOrder,j as default};

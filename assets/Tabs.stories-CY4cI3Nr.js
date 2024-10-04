import{o,a as l,b as c,t as y,n as f,j as v,w as C,F as _,k as h,p as x}from"./vue.esm-bundler-CsTC-5Ev.js";const T=["disabled","data-index"],I={class:"text-medium"},D={__name:"TabItem",props:{themeColor:{type:String,validator:t=>["primary","secondary","tertiary","success","warning","error","info"].includes(t)},type:{type:String,validator:t=>["card","default"].includes(t)},customClass:{type:String,default:""},title:{type:String,default:"頁籤 1"},index:{type:Number},isActive:{type:Boolean},isDisabled:{type:Boolean,default:!1},onClick:{type:Function}},setup(t){const e=t,a=n=>{!e.isDisabled&&e.onClick&&e.onClick(n)};return(n,s)=>(o(),l("button",{class:f(["tab","button","component-medium","tab",e.type==="default"?e.isActive?`tab-${e.themeColor}-active`:`tab-${e.themeColor}`:e.isActive?`tab-card-${e.themeColor}-active`:`tab-card-${e.themeColor}`,e.isDisabled&&"tab-disable"]),disabled:e.isDisabled,onClick:a,"data-index":e.index},[c("div",I,y(e.title),1)],10,T))}};D.__docgenInfo={exportName:"default",displayName:"TabItem",description:"",tags:{},props:[{name:"themeColor",type:{name:"string"},values:["primary","secondary","tertiary","success","warning","error","info"]},{name:"type",type:{name:"string"},values:["card","default"]},{name:"customClass",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"title",type:{name:"string"},defaultValue:{func:!1,value:'"頁籤 1"'}},{name:"index",type:{name:"number"}},{name:"isActive",type:{name:"boolean"}},{name:"isDisabled",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"onClick",type:{name:"func"}}],sourceFiles:["/Users/auouser/Desktop/Work_Space/DED-WDS_VUE/libs/src/ui/module/Tabs/TabItem.vue"]};const k={class:"tabs-container"},B={class:"tabs"},u={__name:"Tabs",props:{themeColor:{type:String,default:"primary",validator:t=>["primary","secondary","tertiary","success","warning","error","info"].includes(t)},type:{type:String,default:"default",validator:t=>["card","default"].includes(t)},customClass:{type:String,default:""},activeIndex:{type:Number,default:2},isDisabled:{type:Boolean},tabsData:{type:Array,required:!0}},setup(t){const e=t,a=v(e.activeIndex||0),n=s=>{a.value=parseInt(s.currentTarget.dataset.index,10)};return C(()=>e.activeIndex,s=>{a.value=s||0}),(s,S)=>{var d;return o(),l("div",k,[c("div",B,[(o(!0),l(_,null,h(e.tabsData,(g,i)=>(o(),x(D,{key:i,title:g.title,themeColor:e.themeColor,type:e.type,isDisabled:e.isDisabled,index:i,isActive:i===a.value,onClick:n},null,8,["title","themeColor","type","isDisabled","index","isActive"]))),128))]),c("div",{class:f(["tab-content",{"tab-disable":e.isDisabled}])},y((d=e.tabsData[a.value])==null?void 0:d.content),3)])}}};u.__docgenInfo={exportName:"default",displayName:"Tabs",description:"",tags:{},props:[{name:"themeColor",type:{name:"string"},defaultValue:{func:!1,value:'"primary"'},values:["primary","secondary","tertiary","success","warning","error","info"]},{name:"type",type:{name:"string"},defaultValue:{func:!1,value:'"default"'},values:["card","default"]},{name:"customClass",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"activeIndex",type:{name:"number"},defaultValue:{func:!1,value:"2"}},{name:"isDisabled",type:{name:"boolean"}},{name:"tabsData",type:{name:"array"},required:!0}],sourceFiles:["/Users/auouser/Desktop/Work_Space/DED-WDS_VUE/libs/src/ui/module/Tabs/Tabs.vue"]};const V={title:"Design System/Tabs",component:u,tags:["Tabs"],argTypes:{themeColor:{description:"頁籤主題顏色",control:{type:"select"},options:["primary","secondary","tertiary","success","warning","error","info"]},type:{description:"頁籤樣式",control:{type:"radio"},options:["default","card"]},customClass:{description:"客製化頁籤樣式",control:{type:"text"}},activeIndex:{description:"活動頁籤索引",control:{type:"number"}},isDisabled:{description:"頁籤是否禁用",control:{type:"Boolean"}},tabsData:{description:"頁籤對應資料",control:{type:"Object"}}},parameters:{docs:{title:"頁籤",description:{component:"頁籤組件的呈現及說明。"}}}},r={name:"基礎頁籤",args:{themeColor:"primary",type:"default",isDisabled:!1,activeIndex:0},render:t=>({components:{Tabs:u},setup(){const e=v([{title:"頁籤 1",content:"內容一"},{title:"頁籤 2",content:"內容二"},{title:"頁籤 3",content:"內容三"}]);return{args:t,tabsData:e}},template:`
            <Tabs
                :themeColor="args.themeColor"
                :type="args.type"
                :activeIndex="args.activeIndex"
                :isDisabled="args.isDisabled"
                :tabsData="tabsData"
            ></Tabs>
        `}),parameters:{controls:{}}};var p,m,b;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: "基礎頁籤",
  args: {
    themeColor: "primary",
    type: "default",
    isDisabled: false,
    activeIndex: 0
  },
  render: args => ({
    components: {
      Tabs
    },
    setup() {
      // Create a ref for modelValue to be used with v-model
      const tabsData = ref([{
        "title": "頁籤 1",
        "content": "內容一"
      }, {
        "title": "頁籤 2",
        "content": "內容二"
      }, {
        "title": "頁籤 3",
        "content": "內容三"
      }]);
      return {
        args,
        tabsData
      };
    },
    template: \`
            <Tabs
                :themeColor="args.themeColor"
                :type="args.type"
                :activeIndex="args.activeIndex"
                :isDisabled="args.isDisabled"
                :tabsData="tabsData"
            ></Tabs>
        \`
  }),
  // 控制 controls 中能控制的參數
  parameters: {
    controls: {
      // include: ['themeColor', 'label', 'value', 'name' ],
    }
  }
}`,...(b=(m=r.parameters)==null?void 0:m.docs)==null?void 0:b.source}}};const A=["DefaultTabs"];export{r as DefaultTabs,A as __namedExportsOrder,V as default};

import{o,c as l,a as c,t as b,n as y,k as f,w as _,F as h,y as x,j as T}from"./vue.esm-bundler-5cDHsWFH.js";const I=["disabled","data-index"],k={class:"text-medium"},v={__name:"TabItem",props:{themeColor:{type:String,validator:t=>["primary","secondary","tertiary","success","warning","error","info"].includes(t)},type:{type:String,validator:t=>["card","default"].includes(t)},customClass:{type:String,default:""},title:{type:String,default:"頁籤 1"},index:{type:Number},isActive:{type:Boolean},isDisabled:{type:Boolean,default:!1},onClick:{type:Function}},setup(t){const e=t,a=n=>{!e.isDisabled&&e.onClick&&e.onClick(n)};return(n,s)=>(o(),l("button",{class:y(["tab","button","component-medium","tab",e.type==="default"?e.isActive?`tab-${e.themeColor}-active`:`tab-${e.themeColor}`:e.isActive?`tab-card-${e.themeColor}-active`:`tab-card-${e.themeColor}`,e.isDisabled&&"tab-disable"]),disabled:e.isDisabled,onClick:a,"data-index":e.index},[c("div",k,b(e.title),1)],10,I))}};v.__docgenInfo={exportName:"default",displayName:"TabItem",description:"",tags:{},props:[{name:"themeColor",type:{name:"string"},values:["primary","secondary","tertiary","success","warning","error","info"]},{name:"type",type:{name:"string"},values:["card","default"]},{name:"customClass",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"title",type:{name:"string"},defaultValue:{func:!1,value:'"頁籤 1"'}},{name:"index",type:{name:"number"}},{name:"isActive",type:{name:"boolean"}},{name:"isDisabled",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"onClick",type:{name:"func"}}],sourceFiles:["/Users/auouser/Desktop/Work_Space/DED-WDS_VUE/libs/src/ui/module/Tabs/TabItem.vue"]};const B={class:"tabs-container"},S={class:"tabs"},D={__name:"Tabs",props:{themeColor:{type:String,default:"primary",validator:t=>["primary","secondary","tertiary","success","warning","error","info"].includes(t)},type:{type:String,default:"default",validator:t=>["card","default"].includes(t)},customClass:{type:String,default:""},activeIndex:{type:Number,default:2},isDisabled:{type:Boolean},tabsData:{type:Array,required:!0}},setup(t){const e=t,a=f(e.activeIndex||0),n=s=>{a.value=parseInt(s.currentTarget.dataset.index,10)};return _(()=>e.activeIndex,s=>{a.value=s||0}),(s,E)=>{var u;return o(),l("div",B,[c("div",S,[(o(!0),l(h,null,x(e.tabsData,(C,i)=>(o(),T(v,{key:i,title:C.title,themeColor:e.themeColor,type:e.type,isDisabled:e.isDisabled,index:i,isActive:i===a.value,onClick:n},null,8,["title","themeColor","type","isDisabled","index","isActive"]))),128))]),c("div",{class:y(["tab-content",{"tab-disable":e.isDisabled}])},b((u=e.tabsData[a.value])==null?void 0:u.content),3)])}}},g=D;D.__docgenInfo={exportName:"default",displayName:"Tabs",description:"",tags:{},props:[{name:"themeColor",type:{name:"string"},defaultValue:{func:!1,value:'"primary"'},values:["primary","secondary","tertiary","success","warning","error","info"]},{name:"type",type:{name:"string"},defaultValue:{func:!1,value:'"default"'},values:["card","default"]},{name:"customClass",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"activeIndex",type:{name:"number"},defaultValue:{func:!1,value:"2"}},{name:"isDisabled",type:{name:"boolean"}},{name:"tabsData",type:{name:"array"},required:!0}],sourceFiles:["/Users/auouser/Desktop/Work_Space/DED-WDS_VUE/libs/src/ui/module/Tabs/Tabs.vue"]};const A={title:"Design System/Tabs",component:g,tags:["Tabs"],argTypes:{themeColor:{description:"頁籤主題顏色",control:{type:"select"},options:["primary","secondary","tertiary","success","warning","error","info"]},type:{description:"頁籤樣式",control:{type:"radio"},options:["default","card"]},customClass:{description:"客製化頁籤樣式",control:{type:"text"}},activeIndex:{description:"活動頁籤索引",control:{type:"number"}},isDisabled:{description:"頁籤是否禁用",control:{type:"Boolean"}},tabsData:{description:"頁籤對應資料",control:{type:"Object"}}},parameters:{docs:{title:"頁籤",description:{component:"頁籤組件的呈現及說明。"}}}},r={name:"基礎頁籤",args:{themeColor:"primary",type:"default",isDisabled:!1,activeIndex:0},render:t=>({components:{Tabs:g},setup(){const e=f([{title:"頁籤 1",content:"內容一"},{title:"頁籤 2",content:"內容二"},{title:"頁籤 3",content:"內容三"}]);return{args:t,tabsData:e}},template:`
            <Tabs
                :themeColor="args.themeColor"
                :type="args.type"
                :activeIndex="args.activeIndex"
                :isDisabled="args.isDisabled"
                :tabsData="tabsData"
            ></Tabs>
        `}),parameters:{controls:{}}};var d,p,m;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(m=(p=r.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};const w=["DefaultTabs"];export{r as DefaultTabs,w as __namedExportsOrder,A as default};

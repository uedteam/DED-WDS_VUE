import{o as i,c,b as d,t as C,n as T,r as x,w as _,F as I,p as B,d as S}from"./vue.esm-bundler-Bm7qTojY.js";const k=["disabled","data-index"],E={class:"text-medium"},h={__name:"TabItem",props:{themeColor:{type:String,validator:a=>["primary","secondary","tertiary","success","warning","error","info"].includes(a)},type:{type:String,validator:a=>["card","default"].includes(a)},customClass:{type:String,default:""},title:{type:String,default:"頁籤 1"},index:{type:Number},isActive:{type:Boolean},isDisabled:{type:Boolean,default:!1},onClick:{type:Function}},setup(a){const e=a,t=n=>{!e.isDisabled&&e.onClick&&e.onClick(n)};return(n,s)=>(i(),c("button",{class:T(["tab","button","component-medium","tab",e.type==="default"?e.isActive?`tab-${e.themeColor}-active`:`tab-${e.themeColor}`:e.isActive?`tab-card-${e.themeColor}-active`:`tab-card-${e.themeColor}`,e.isDisabled&&"tab-disable"]),disabled:e.isDisabled,onClick:t,"data-index":e.index},[d("div",E,C(e.title),1)],10,k))}};h.__docgenInfo={exportName:"default",displayName:"TabItem",description:"",tags:{},props:[{name:"themeColor",type:{name:"string"},values:["primary","secondary","tertiary","success","warning","error","info"]},{name:"type",type:{name:"string"},values:["card","default"]},{name:"customClass",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"title",type:{name:"string"},defaultValue:{func:!1,value:'"頁籤 1"'}},{name:"index",type:{name:"number"}},{name:"isActive",type:{name:"boolean"}},{name:"isDisabled",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"onClick",type:{name:"func"}}],sourceFiles:["/Users/auouser/Desktop/Work_Space/DED-WDS_VUE/libs/src/ui/module/Tabs/TabItem.vue"]};const A={class:"tabs-container"},F={class:"tabs"},l={__name:"Tabs",props:{themeColor:{type:String,default:"primary",validator:a=>["primary","secondary","tertiary","success","warning","error","info"].includes(a)},type:{type:String,default:"default",validator:a=>["card","default"].includes(a)},activeIndex:{type:Number,default:2},isDisabled:{type:Boolean},tabsData:{type:Array},customClass:{type:String,default:""}},setup(a){const e=a,t=x(e.activeIndex||0),n=s=>{t.value=parseInt(s.currentTarget.dataset.index,10)};return _(()=>e.activeIndex,s=>{t.value=s||0}),(s,V)=>{var p;return i(),c("div",A,[d("div",F,[(i(!0),c(I,null,B(e.tabsData,(m,u)=>(i(),S(h,{key:u,themeColor:e.themeColor,title:m.title,type:e.type,index:u,isActive:u===t.value,isDisabled:e.isDisabled||m.isDisabled,onClick:n},null,8,["themeColor","title","type","index","isActive","isDisabled"]))),128))]),d("div",{class:T(["tab-content",{"tab-disable":e.isDisabled}])},C((p=e.tabsData[t.value])==null?void 0:p.content),3)])}}};l.__docgenInfo={exportName:"default",displayName:"Tabs",description:"",tags:{},props:[{name:"themeColor",type:{name:"string"},defaultValue:{func:!1,value:'"primary"'},values:["primary","secondary","tertiary","success","warning","error","info"]},{name:"type",type:{name:"string"},defaultValue:{func:!1,value:'"default"'},values:["card","default"]},{name:"activeIndex",type:{name:"number"},defaultValue:{func:!1,value:"2"}},{name:"isDisabled",type:{name:"boolean"}},{name:"tabsData",type:{name:"array"}},{name:"customClass",type:{name:"string"},defaultValue:{func:!1,value:"''"}}],sourceFiles:["/Users/auouser/Desktop/Work_Space/DED-WDS_VUE/libs/src/ui/module/Tabs/Tabs.vue"]};const N={title:"Design System/Tabs",component:l,tags:["Tabs"],argTypes:{themeColor:{description:"選擇 Tabs 的主題顏色",control:{type:"select"},options:["primary","secondary","tertiary","success","warning","error","info"]},type:{description:"選擇 Tabs 的樣式類型",control:{type:"radio"},options:["default","card"]},activeIndex:{description:"指定當前活動的 Tabs 索引",control:{type:"number"}},isDisabled:{description:"設定 Tabs 是否禁用，禁用後無法互動",control:{type:"boolean"}},tabsData:{description:"Tabs 對應的資料陣列，每個項目表示一個頁籤",control:{type:"array"}},customClass:{description:"提供自訂的 CSS 類名以覆蓋預設樣式",control:{type:"text"}}},parameters:{docs:{title:"Tabs",description:{component:"Tabs 組件的呈現及說明。"}}}},r={name:"Tabs 基礎樣式",args:{themeColor:"primary",type:"default",isDisabled:!1,activeIndex:0,tabsData:[{title:"頁籤 1",content:"內容一"},{title:"頁籤 2",content:"內容二"},{title:"頁籤 3",content:"內容三"}]},render:a=>({components:{Tabs:l},setup(){return{args:a}},template:`
            <Tabs
                :themeColor="args.themeColor"
                :type="args.type"
                :activeIndex="args.activeIndex"
                :isDisabled="args.isDisabled"
                :tabsData="args.tabsData"
            ></Tabs>
        `}),parameters:{controls:{}}},o={name:"Tabs 單獨禁用樣式",args:{themeColor:"primary",type:"default",isDisabled:!1,activeIndex:0,tabsData:[{title:"頁籤 1",content:"內容一"},{title:"頁籤 2",content:"內容二",isDisabled:!0},{title:"頁籤 3",content:"內容三"}]},render:a=>({components:{Tabs:l},setup(){return{args:a}},template:`
            <Tabs
                :themeColor="args.themeColor"
                :type="args.type"
                :activeIndex="args.activeIndex"
                :isDisabled="args.isDisabled"
                :tabsData="args.tabsData"
            ></Tabs>
        `}),parameters:{controls:{}}};var b,y,f;r.parameters={...r.parameters,docs:{...(b=r.parameters)==null?void 0:b.docs,source:{originalSource:`{
  name: "Tabs 基礎樣式",
  args: {
    themeColor: "primary",
    type: "default",
    isDisabled: false,
    activeIndex: 0,
    tabsData: [{
      "title": "頁籤 1",
      "content": "內容一"
    }, {
      "title": "頁籤 2",
      "content": "內容二"
    }, {
      "title": "頁籤 3",
      "content": "內容三"
    }]
  },
  render: args => ({
    components: {
      Tabs
    },
    setup() {
      return {
        args
      };
    },
    template: \`
            <Tabs
                :themeColor="args.themeColor"
                :type="args.type"
                :activeIndex="args.activeIndex"
                :isDisabled="args.isDisabled"
                :tabsData="args.tabsData"
            ></Tabs>
        \`
  }),
  // 控制 controls 中能控制的參數
  parameters: {
    controls: {
      // include: ['themeColor', 'label', 'value', 'name' ],
    }
  }
}`,...(f=(y=r.parameters)==null?void 0:y.docs)==null?void 0:f.source}}};var D,g,v;o.parameters={...o.parameters,docs:{...(D=o.parameters)==null?void 0:D.docs,source:{originalSource:`{
  name: "Tabs 單獨禁用樣式",
  args: {
    themeColor: "primary",
    type: "default",
    isDisabled: false,
    activeIndex: 0,
    tabsData: [{
      "title": "頁籤 1",
      "content": "內容一"
    }, {
      "title": "頁籤 2",
      "content": "內容二",
      "isDisabled": true
    }, {
      "title": "頁籤 3",
      "content": "內容三"
    }]
  },
  render: args => ({
    components: {
      Tabs
    },
    setup() {
      return {
        args
      };
    },
    template: \`
            <Tabs
                :themeColor="args.themeColor"
                :type="args.type"
                :activeIndex="args.activeIndex"
                :isDisabled="args.isDisabled"
                :tabsData="args.tabsData"
            ></Tabs>
        \`
  }),
  // 控制 controls 中能控制的參數
  parameters: {
    controls: {
      // include: ['themeColor', 'label', 'value', 'name' ],
    }
  }
}`,...(v=(g=o.parameters)==null?void 0:g.docs)==null?void 0:v.source}}};const $=["DefaultTabs","TabsSingleDisabled"];export{r as DefaultTabs,o as TabsSingleDisabled,$ as __namedExportsOrder,N as default};

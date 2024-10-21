import{o,c as u,b as d,t as h,n as m,r as T,w as _,F as N,B as I,d as B}from"./vue.esm-bundler-qOdkfnRX.js";const E=["disabled","data-index"],k={class:"text-medium"},x={__name:"TabItem",props:{themeColor:{type:String,validator:a=>["primary","secondary","tertiary","success","warning","error","info"].includes(a)},type:{type:String,validator:a=>["card","default"].includes(a)},title:{type:String,default:"頁籤 1"},index:{type:Number},isActive:{type:Boolean},isDisabled:{type:Boolean,default:!1},onClick:{type:Function},className:{type:String,default:""}},setup(a){const e=a,t=n=>{!e.isDisabled&&e.onClick&&e.onClick(n)};return(n,s)=>(o(),u("button",{class:m(["tab","button","component-medium","tab",e.type==="default"?e.isActive?`tab-${e.themeColor}-active`:`tab-${e.themeColor}`:e.isActive?`tab-card-${e.themeColor}-active`:`tab-card-${e.themeColor}`,e.isDisabled&&"tab-disable",e.className||""]),disabled:e.isDisabled,onClick:t,"data-index":e.index},[d("div",k,h(e.title),1)],10,E))}};x.__docgenInfo={exportName:"default",displayName:"TabItem",description:"",tags:{},props:[{name:"themeColor",type:{name:"string"},values:["primary","secondary","tertiary","success","warning","error","info"]},{name:"type",type:{name:"string"},values:["card","default"]},{name:"title",type:{name:"string"},defaultValue:{func:!1,value:'"頁籤 1"'}},{name:"index",type:{name:"number"}},{name:"isActive",type:{name:"boolean"}},{name:"isDisabled",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"onClick",type:{name:"func"}},{name:"className",type:{name:"string"},defaultValue:{func:!1,value:"''"}}],sourceFiles:["/Users/jony_worker/Documents/90_外部檔案/upstream/DED-WDS_VUE/libs/src/ui/element/Tabs/TabItem.vue"]};const S={class:"tabs"},i={__name:"Tabs",props:{themeColor:{type:String,default:"primary",validator:a=>["primary","secondary","tertiary","success","warning","error","info"].includes(a)},type:{type:String,default:"default",validator:a=>["card","default"].includes(a)},activeIndex:{type:Number,default:2},isDisabled:{type:Boolean},tabsData:{type:Array},className:{type:String,default:""}},setup(a){const e=a,t=T(e.activeIndex||0),n=s=>{t.value=parseInt(s.currentTarget.dataset.index,10)};return _(()=>e.activeIndex,s=>{t.value=s||0}),(s,A)=>{var p;return o(),u("div",{class:m({"tabs-container":!0,[e.className]:!!e.className})},[d("div",S,[(o(!0),u(N,null,I(e.tabsData,(b,c)=>(o(),B(x,{key:c,themeColor:e.themeColor,title:b.title,type:e.type,index:c,isActive:c===t.value,isDisabled:e.isDisabled||b.isDisabled,onClick:n},null,8,["themeColor","title","type","index","isActive","isDisabled"]))),128))]),d("div",{class:m(["tab-content",{"tab-disable":e.isDisabled}])},h((p=e.tabsData[t.value])==null?void 0:p.content),3)],2)}}};i.__docgenInfo={exportName:"default",displayName:"Tabs",description:"",tags:{},props:[{name:"themeColor",type:{name:"string"},defaultValue:{func:!1,value:'"primary"'},values:["primary","secondary","tertiary","success","warning","error","info"]},{name:"type",type:{name:"string"},defaultValue:{func:!1,value:'"default"'},values:["card","default"]},{name:"activeIndex",type:{name:"number"},defaultValue:{func:!1,value:"2"}},{name:"isDisabled",type:{name:"boolean"}},{name:"tabsData",type:{name:"array"}},{name:"className",type:{name:"string"},defaultValue:{func:!1,value:"''"}}],sourceFiles:["/Users/jony_worker/Documents/90_外部檔案/upstream/DED-WDS_VUE/libs/src/ui/element/Tabs/Tabs.vue"]};const w={title:"Design System/Tabs",component:i,tags:["Tabs"],argTypes:{themeColor:{description:"主題顏色",control:{type:"select"},options:["primary","secondary","tertiary","success","warning","error","info"]},type:{description:"頁籤樣式",control:{type:"radio"},options:["default","card"]},activeIndex:{description:"活動頁籤索引",control:{type:"number"}},isDisabled:{description:"是否禁用",control:{type:"boolean"}},tabsData:{description:"頁籤列表",control:{type:"array"}},className:{description:"客製化樣式",control:{type:"text"}}},parameters:{docs:{title:"Tabs",description:{component:"Tabs 組件的呈現及說明。"}}}},r={name:"主要項目",args:{themeColor:"primary",type:"default",isDisabled:!1,activeIndex:0,tabsData:[{title:"頁籤 1",content:"內容一"},{title:"頁籤 2",content:"內容二"},{title:"頁籤 3",content:"內容三"}],className:""},render:a=>({components:{Tabs:i},setup(){return{args:a}},template:`
            <Tabs
                :themeColor="args.themeColor"
                :type="args.type"
                :activeIndex="args.activeIndex"
                :isDisabled="args.isDisabled"
                :tabsData="args.tabsData"
                :className="args.className"
            ></Tabs>
        `}),parameters:{controls:{}}},l={name:"卡片式頁籤",args:{themeColor:"primary",type:"card",isDisabled:!1,activeIndex:0,tabsData:[{title:"頁籤 1",content:"內容一"},{title:"頁籤 2",content:"內容二"},{title:"頁籤 3",content:"內容三"}],className:""},render:a=>({components:{Tabs:i},setup(){return{args:a}},template:`
            <Tabs
                :themeColor="args.themeColor"
                :type="args.type"
                :activeIndex="args.activeIndex"
                :isDisabled="args.isDisabled"
                :tabsData="args.tabsData"
                :className="args.className"
            ></Tabs>
        `}),parameters:{controls:{}}};var y,g,f;r.parameters={...r.parameters,docs:{...(y=r.parameters)==null?void 0:y.docs,source:{originalSource:`{
  name: "主要項目",
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
    }],
    className: ''
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
                :className="args.className"
            ></Tabs>
        \`
  }),
  // 控制 controls 中能控制的參數
  parameters: {
    controls: {
      // include: ['themeColor', 'label', 'value', 'name' ],
    }
  }
}`,...(f=(g=r.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};var D,v,C;l.parameters={...l.parameters,docs:{...(D=l.parameters)==null?void 0:D.docs,source:{originalSource:`{
  name: "卡片式頁籤",
  args: {
    themeColor: "primary",
    type: "card",
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
    }],
    className: ''
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
                :className="args.className"
            ></Tabs>
        \`
  }),
  // 控制 controls 中能控制的參數
  parameters: {
    controls: {
      // include: ['themeColor', 'label', 'value', 'name' ],
    }
  }
}`,...(C=(v=l.parameters)==null?void 0:v.docs)==null?void 0:C.source}}};const F=["DefaultTabs","CardTabs"];export{l as CardTabs,r as DefaultTabs,F as __namedExportsOrder,w as default};

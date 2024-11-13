import{o as l,a as u,b as d,t as S,n as m,e as T,w as N,F as $,f as I,h as _}from"./vue.esm-bundler-C7FxdvdM.js";const B=["disabled","data-index"],E={class:"text-medium"},x={__name:"TabItem",props:{themeColor:{type:String,validator:t=>["primary","secondary","tertiary","success","warning","error","info"].includes(t)},type:{type:String,validator:t=>["card","default"].includes(t)},title:{type:String,default:"頁籤 1"},index:{type:Number},isActive:{type:Boolean},isDisabled:{type:Boolean,default:!1},onClick:{type:Function},className:{type:String,default:""}},setup(t){const e=t,a=s=>{!e.isDisabled&&e.onClick&&e.onClick(s)};return(s,n)=>(l(),u("button",{class:m(["tab","button","component-medium","tab",e.type==="default"?e.isActive?`tab-${e.themeColor}-active`:`tab-${e.themeColor}`:e.isActive?`tab-card-${e.themeColor}-active`:`tab-card-${e.themeColor}`,e.isDisabled&&"tab-disable",e.className||""]),disabled:e.isDisabled,onClick:a,"data-index":e.index},[d("div",E,S(e.title),1)],10,B))}};x.__docgenInfo={exportName:"default",displayName:"TabItem",description:"",tags:{},props:[{name:"themeColor",type:{name:"string"},values:["primary","secondary","tertiary","success","warning","error","info"]},{name:"type",type:{name:"string"},values:["card","default"]},{name:"title",type:{name:"string"},defaultValue:{func:!1,value:'"頁籤 1"'}},{name:"index",type:{name:"number"}},{name:"isActive",type:{name:"boolean"}},{name:"isDisabled",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"onClick",type:{name:"func"}},{name:"className",type:{name:"string"},defaultValue:{func:!1,value:"''"}}],sourceFiles:["D:/98_測試/up/DED-WDS_VUE/libs/src/ui/element/Tabs/TabItem.vue"]};const k={class:"tabs"},i={__name:"Tabs",props:{themeColor:{type:String,default:"primary",validator:t=>["primary","secondary","tertiary","success","warning","error","info"].includes(t)},type:{type:String,default:"default",validator:t=>["card","default"].includes(t)},isDisabled:{type:Boolean},dataSource:{type:Array,required:!0,default:()=>[]},activeIndex:{type:Number,default:2},className:{type:String,default:""}},setup(t){const e=t,a=T(e.activeIndex||0),s=n=>{a.value=parseInt(n.currentTarget.dataset.index,10)};return N(()=>e.activeIndex,n=>{a.value=n||0}),(n,A)=>{var p;return l(),u("div",{class:m({"tabs-container":!0,[e.className]:!!e.className})},[d("div",k,[(l(!0),u($,null,I(e.dataSource,(b,c)=>(l(),_(x,{key:c,themeColor:e.themeColor,title:b.title,type:e.type,index:c,isActive:c===a.value,isDisabled:e.isDisabled||b.isDisabled,onClick:s},null,8,["themeColor","title","type","index","isActive","isDisabled"]))),128))]),d("div",{class:m(["tab-content",{"tab-disable":e.isDisabled}])},S((p=e.dataSource[a.value])==null?void 0:p.content),3)],2)}}};i.__docgenInfo={exportName:"default",displayName:"Tabs",description:"",tags:{},props:[{name:"themeColor",type:{name:"string"},defaultValue:{func:!1,value:"'primary'"},values:["primary","secondary","tertiary","success","warning","error","info"]},{name:"type",type:{name:"string"},defaultValue:{func:!1,value:"'default'"},values:["card","default"]},{name:"isDisabled",type:{name:"boolean"}},{name:"dataSource",type:{name:"array"},required:!0,defaultValue:{func:!1,value:"[]"}},{name:"activeIndex",type:{name:"number"},defaultValue:{func:!1,value:"2"}},{name:"className",type:{name:"string"},defaultValue:{func:!1,value:"''"}}],sourceFiles:["D:/98_測試/up/DED-WDS_VUE/libs/src/ui/element/Tabs/Tabs.vue"]};function h(t){return`[
    ${t.map(e=>`{
        title: '${e.label}',
        content: '${e.id}',
    }`).join(`,
    `)}
  ]`}const F={title:"Design System/Tabs",component:i,tags:["Tabs"],argTypes:{themeColor:{description:"主題顏色",control:{type:"select"},options:["primary","secondary","tertiary","success","warning","error","info"]},type:{description:"頁籤樣式",control:{type:"select"},options:["default","card"]},activeIndex:{description:"活動頁籤索引",control:{type:"number"}},isDisabled:{description:"是否禁用",control:{type:"boolean"}},dataSource:{description:"頁籤列表",control:{type:"object"},table:{type:{summary:"{ title: string; content: string; }[]"}}},className:{description:"客製化樣式",control:{type:"text"}}},parameters:{docs:{title:"Tabs",description:{component:"Tabs 組件的呈現及說明。"}}}},r={name:"預設項目",args:{themeColor:"primary",type:"default",isDisabled:!1,activeIndex:0,dataSource:[{title:"頁籤 1",content:"內容一"},{title:"頁籤 2",content:"內容二"},{title:"頁籤 3",content:"內容三"}],className:""},render:t=>({components:{Tabs:i},setup(){return{args:t}},template:`
            <Tabs
                :themeColor="args.themeColor"
                :type="args.type"
                :activeIndex="args.activeIndex"
                :isDisabled="args.isDisabled"
                :dataSource="args.dataSource"
                :className="args.className"
            ></Tabs>
        `}),parameters:{controls:{},docs:{source:{transform:(t,e)=>{const{args:a}=e,s=h(a.dataSource);return["<Tabs",`  themeColor="${a.themeColor}"`,`  type="${a.type}"`,`  :activeIndex="${a.activeIndex}"`,`  :isDisabled="${a.isDisabled}"`,`  :dataSource="${s}"`,`  className="${a.className}"`,"></Tabs>"].join(`
`).trim()}}}}},o={name:"卡片式頁籤",args:{themeColor:"primary",type:"card",isDisabled:!1,activeIndex:0,dataSource:[{title:"頁籤 1",content:"內容一"},{title:"頁籤 2",content:"內容二"},{title:"頁籤 3",content:"內容三"}],className:""},render:t=>({components:{Tabs:i},setup(){return{args:t}},template:`
            <Tabs
                :themeColor="args.themeColor"
                :type="args.type"
                :activeIndex="args.activeIndex"
                :isDisabled="args.isDisabled"
                :dataSource="args.dataSource"
                :className="args.className"
            ></Tabs>
        `}),parameters:{controls:{},docs:{source:{transform:(t,e)=>{const{args:a}=e,s=h(a.dataSource);return["<Tabs",`  themeColor="${a.themeColor}"`,`  type="${a.type}"`,`  :activeIndex="${a.activeIndex}"`,`  :isDisabled="${a.isDisabled}"`,`  :dataSource="${s}"`,`  className="${a.className}"`,"></Tabs>"].join(`
`).trim()}}}}};var y,g,f;r.parameters={...r.parameters,docs:{...(y=r.parameters)==null?void 0:y.docs,source:{originalSource:`{
  name: '預設項目',
  args: {
    themeColor: 'primary',
    type: 'default',
    isDisabled: false,
    activeIndex: 0,
    dataSource: [{
      title: '頁籤 1',
      content: '內容一'
    }, {
      title: '頁籤 2',
      content: '內容二'
    }, {
      title: '頁籤 3',
      content: '內容三'
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
                :dataSource="args.dataSource"
                :className="args.className"
            ></Tabs>
        \`
  }),
  // 控制 controls 中能控制的參數
  parameters: {
    controls: {
      // include: ['themeColor', 'label', 'value', 'name' ],
    },
    docs: {
      source: {
        transform: (src, storyContext) => {
          const {
            args
          } = storyContext;
          const dataSourceString = formatDataSource(args.dataSource);
          return ['<Tabs', \`  themeColor="\${args.themeColor}"\`, \`  type="\${args.type}"\`, \`  :activeIndex="\${args.activeIndex}"\`, \`  :isDisabled="\${args.isDisabled}"\`, \`  :dataSource="\${dataSourceString}"\`, \`  className="\${args.className}"\`, '></Tabs>'].join('\\n').trim();
        }
      }
    }
  }
}`,...(f=(g=r.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};var v,C,D;o.parameters={...o.parameters,docs:{...(v=o.parameters)==null?void 0:v.docs,source:{originalSource:`{
  name: '卡片式頁籤',
  args: {
    themeColor: 'primary',
    type: 'card',
    isDisabled: false,
    activeIndex: 0,
    dataSource: [{
      title: '頁籤 1',
      content: '內容一'
    }, {
      title: '頁籤 2',
      content: '內容二'
    }, {
      title: '頁籤 3',
      content: '內容三'
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
                :dataSource="args.dataSource"
                :className="args.className"
            ></Tabs>
        \`
  }),
  // 控制 controls 中能控制的參數
  parameters: {
    controls: {
      // include: ['themeColor', 'label', 'value', 'name' ],
    },
    docs: {
      source: {
        transform: (src, storyContext) => {
          const {
            args
          } = storyContext;
          const dataSourceString = formatDataSource(args.dataSource);
          return ['<Tabs', \`  themeColor="\${args.themeColor}"\`, \`  type="\${args.type}"\`, \`  :activeIndex="\${args.activeIndex}"\`, \`  :isDisabled="\${args.isDisabled}"\`, \`  :dataSource="\${dataSourceString}"\`, \`  className="\${args.className}"\`, '></Tabs>'].join('\\n').trim();
        }
      }
    }
  }
}`,...(D=(C=o.parameters)==null?void 0:C.docs)==null?void 0:D.source}}};const w=["DefaultTabs","CardTabs"];export{o as CardTabs,r as DefaultTabs,w as __namedExportsOrder,F as default};

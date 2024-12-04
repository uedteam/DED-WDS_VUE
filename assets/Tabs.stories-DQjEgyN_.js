import{o as l,a as d,b as u,t as D,n as m,r as h,w as N,F as $,A as I,B as _}from"./vue.esm-bundler-7m8tONXv.js";const k=["disabled","data-index"],A={class:"ded-text-medium"},T={__name:"TabItem",props:{themeColor:{type:String,validator:a=>["primary","secondary","tertiary","success","warning","error","info"].includes(a)},type:{type:String,validator:a=>["card","default"].includes(a)},title:{type:String,default:"頁籤 1"},index:{type:Number},isActive:{type:Boolean},isDisabled:{type:Boolean,default:!1},onClick:{type:Function},className:{type:String,default:""}},setup(a){const e=a,t=n=>{!e.isDisabled&&e.onClick&&e.onClick(n)};return(n,s)=>(l(),d("button",{class:m(["ded-tab","ded-button","ded-component-medium",e.type==="default"?e.isActive?`ded-tab-${e.themeColor}-active`:`ded-tab-${e.themeColor}`:e.isActive?`ded-tab-card-${e.themeColor}-active`:`ded-tab-card-${e.themeColor}`,e.isDisabled&&"ded-tab-disable",e.className||""]),disabled:e.isDisabled,onClick:t,"data-index":e.index},[u("div",A,D(e.title),1)],10,k))}};T.__docgenInfo={exportName:"default",displayName:"TabItem",description:"",tags:{},props:[{name:"themeColor",type:{name:"string"},values:["primary","secondary","tertiary","success","warning","error","info"]},{name:"type",type:{name:"string"},values:["card","default"]},{name:"title",type:{name:"string"},defaultValue:{func:!1,value:'"頁籤 1"'}},{name:"index",type:{name:"number"}},{name:"isActive",type:{name:"boolean"}},{name:"isDisabled",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"onClick",type:{name:"func"}},{name:"className",type:{name:"string"},defaultValue:{func:!1,value:'""'}}],sourceFiles:["/Users/auouser/Desktop/Work_Space/DED-WDS_VUE/libs/src/ui/element/Tabs/TabItem.vue"]};const V={class:"ded-tabs"},c={__name:"Tabs",props:{themeColor:{type:String,default:"primary",validator:a=>["primary","secondary","tertiary","success","warning","error","info"].includes(a)},dataSource:{type:Array,required:!0,validator:a=>a.every(e=>typeof e.title=="string"&&typeof e.content=="string")},activeIndex:{type:Number,default:0},type:{type:String,default:"default",validator:a=>["card","default"].includes(a)},isDisabled:{type:Boolean,default:!1},className:{type:String,default:""}},setup(a){const e=a,t=h(e.activeIndex||0),n=s=>{t.value=parseInt(s.currentTarget.dataset.index,10)};return N(()=>e.activeIndex,s=>{t.value=s||0}),(s,E)=>{var p;return l(),d("div",{class:m({"ded-tabs-container":!0,[e.className]:!!e.className})},[u("div",V,[(l(!0),d($,null,I(e.dataSource,(b,i)=>(l(),_(T,{key:i,themeColor:e.themeColor,title:b.title,type:e.type,index:i,isActive:i===t.value,isDisabled:e.isDisabled||b.isDisabled,onClick:n},null,8,["themeColor","title","type","index","isActive","isDisabled"]))),128))]),u("div",{class:m(["ded-tab-content",{"ded-tab-disable":e.isDisabled}])},D((p=e.dataSource[t.value])==null?void 0:p.content),3)],2)}}};c.__docgenInfo={exportName:"default",displayName:"Tabs",description:"",tags:{},props:[{name:"themeColor",type:{name:"string"},defaultValue:{func:!1,value:'"primary"'},values:["primary","secondary","tertiary","success","warning","error","info"]},{name:"dataSource",type:{name:"array"},required:!0},{name:"activeIndex",type:{name:"number"},defaultValue:{func:!1,value:"0"}},{name:"type",type:{name:"string"},defaultValue:{func:!1,value:'"default"'},values:["card","default"]},{name:"isDisabled",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"className",type:{name:"string"},defaultValue:{func:!1,value:'""'}}],sourceFiles:["/Users/auouser/Desktop/Work_Space/DED-WDS_VUE/libs/src/ui/element/Tabs/Tabs.vue"]};function x(a){return`[
    ${a.map(e=>`{
        title: '${e.title}',
        content: '${e.content}',
    }`).join(`,
    `)}
  ]`}const w={title:"Component/Tabs",component:c,tags:["Tabs"],argTypes:{themeColor:{description:"主題顏色",control:{type:"select"},options:["primary","secondary","tertiary","success","warning","error","info"],table:{type:{summary:"primary | secondary | tertiary | success | warning | error | info"}}},dataSource:{description:"資料來源",control:{type:"object"},table:{type:{summary:"{ title: string; content: string; }[]"}}},activeIndex:{description:"活動頁籤索引",control:{type:"number"}},type:{description:"頁籤樣式",control:{type:"select"},options:["default","card"],table:{type:{summary:"default | card "}}},isDisabled:{description:"是否禁用",control:{type:"boolean"}},className:{description:"客製化樣式",control:{type:"text"}}},parameters:{docs:{title:"Tabs",description:{component:"Tabs 組件的呈現及說明。"}}}},r={name:"預設項目",args:{themeColor:"primary",dataSource:[{title:"Tab 1",content:"Content 1"},{title:"Tab 2",content:"Content 2"},{title:"Tab 3",content:"Content 3"}],activeIndex:0,type:"default",isDisabled:!1,className:""},render:a=>({components:{Tabs:c},setup(){return{args:a}},template:`
            <Tabs
                :themeColor="args.themeColor"
                :dataSource="args.dataSource"
                :activeIndex="args.activeIndex"
                :type="args.type"
                :isDisabled="args.isDisabled"
                :className="args.className"
            ></Tabs>
        `}),parameters:{controls:{},docs:{source:{transform:(a,e)=>{const{args:t}=e,n=x(t.dataSource);return["<Tabs",`  themeColor="${t.themeColor}"`,`  :dataSource="${n}"`,`  :activeIndex="${t.activeIndex}"`,`  type="${t.type}"`,`  :isDisabled="${t.isDisabled}"`,`  className="${t.className}"`,"></Tabs>"].join(`
`).trim()}}}}},o={name:"卡片式頁籤",args:{themeColor:"primary",dataSource:[{title:"Tab 1",content:"Content 1"},{title:"Tab 2",content:"Content 2"},{title:"Tab 3",content:"Content 3"}],activeIndex:0,type:"card",isDisabled:!1,className:""},render:a=>({components:{Tabs:c},setup(){return{args:a}},template:`
            <Tabs
                :themeColor="args.themeColor"
                :dataSource="args.dataSource"
                :activeIndex="args.activeIndex"
                :type="args.type"
                :isDisabled="args.isDisabled"
                :className="args.className"
            ></Tabs>
        `}),parameters:{controls:{},docs:{source:{transform:(a,e)=>{const{args:t}=e,n=x(t.dataSource);return["<Tabs",`  themeColor="${t.themeColor}"`,`  :dataSource="${n}"`,`  :activeIndex="${t.activeIndex}"`,`  type="${t.type}"`,`  :isDisabled="${t.isDisabled}"`,`  className="${t.className}"`,"></Tabs>"].join(`
`).trim()}}}}};var y,g,f;r.parameters={...r.parameters,docs:{...(y=r.parameters)==null?void 0:y.docs,source:{originalSource:`{
  name: "預設項目",
  args: {
    themeColor: "primary",
    dataSource: [{
      "title": "Tab 1",
      "content": "Content 1"
    }, {
      "title": "Tab 2",
      "content": "Content 2"
    }, {
      "title": "Tab 3",
      "content": "Content 3"
    }],
    activeIndex: 0,
    type: "default",
    isDisabled: false,
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
                :dataSource="args.dataSource"
                :activeIndex="args.activeIndex"
                :type="args.type"
                :isDisabled="args.isDisabled"
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
          return ['<Tabs', \`  themeColor="\${args.themeColor}"\`, \`  :dataSource="\${dataSourceString}"\`, \`  :activeIndex="\${args.activeIndex}"\`, \`  type="\${args.type}"\`, \`  :isDisabled="\${args.isDisabled}"\`, \`  className="\${args.className}"\`, '></Tabs>'].join('\\n').trim();
        }
      }
    }
  }
}`,...(f=(g=r.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};var C,v,S;o.parameters={...o.parameters,docs:{...(C=o.parameters)==null?void 0:C.docs,source:{originalSource:`{
  name: "卡片式頁籤",
  args: {
    themeColor: "primary",
    dataSource: [{
      "title": "Tab 1",
      "content": "Content 1"
    }, {
      "title": "Tab 2",
      "content": "Content 2"
    }, {
      "title": "Tab 3",
      "content": "Content 3"
    }],
    activeIndex: 0,
    type: "card",
    isDisabled: false,
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
                :dataSource="args.dataSource"
                :activeIndex="args.activeIndex"
                :type="args.type"
                :isDisabled="args.isDisabled"
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
          return ['<Tabs', \`  themeColor="\${args.themeColor}"\`, \`  :dataSource="\${dataSourceString}"\`, \`  :activeIndex="\${args.activeIndex}"\`, \`  type="\${args.type}"\`, \`  :isDisabled="\${args.isDisabled}"\`, \`  className="\${args.className}"\`, '></Tabs>'].join('\\n').trim();
        }
      }
    }
  }
}`,...(S=(v=o.parameters)==null?void 0:v.docs)==null?void 0:S.source}}};const B=["DefaultTabs","CardTabs"];export{o as CardTabs,r as DefaultTabs,B as __namedExportsOrder,w as default};

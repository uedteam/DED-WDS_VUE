import{o as i,C as S,D as _,e as l,b as N,t as T,n as u,f as $,w as I,a as b,F as k,B as A}from"./vue.esm-bundler-BQySH7jJ.js";import{_ as V}from"./Button-CQMIYjcW.js";import{_ as w}from"./Icon-f9eBqVFj.js";import"./iframe-C0k4Wqte.js";import"../sb-preview/runtime.js";const E={class:"ded-icon"},F={class:"ded-text-medium"},h={__name:"TabItem",props:{themeColor:{type:String,validator:a=>["primary","secondary","neutral","info","success","warning","error"].includes(a)},type:{type:String,validator:a=>["basic","outline"].includes(a)},title:{type:String,default:"頁籤 1"},index:{type:Number},isActive:{type:Boolean},isDisabled:{type:Boolean,default:!1},onClick:{type:Function},className:{type:String,default:""}},setup(a){const e=a,t=n=>{!e.isDisabled&&e.onClick&&e.onClick(n)};return(n,s)=>(i(),S(V,{themeColor:e.themeColor,variant:"text",isDisabled:e.isDisabled,class:u({"ded-tab ":!0,[`ded-tab-${e.themeColor}`]:e.themeColor&&e.type==="basic",[`ded-tab-${e.themeColor}-active`]:e.isActive&&e.type==="basic",[`ded-tab-card-${e.themeColor}`]:e.themeColor&&e.type==="outline",[`ded-tab-card-${e.themeColor}-active`]:e.isActive&&e.type==="outline"}),onClick:t,"data-index":e.index},{default:_(()=>[l("div",E,[N(w,{name:"arrow_down"})]),l("div",F,T(e.title),1)]),_:1},8,["themeColor","isDisabled","class","data-index"]))}};h.__docgenInfo={exportName:"default",displayName:"TabItem",description:"",tags:{},props:[{name:"themeColor",type:{name:"string"},values:["primary","secondary","neutral","info","success","warning","error"]},{name:"type",type:{name:"string"},values:["basic","outline"]},{name:"title",type:{name:"string"},defaultValue:{func:!1,value:'"頁籤 1"'}},{name:"index",type:{name:"number"}},{name:"isActive",type:{name:"boolean"}},{name:"isDisabled",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"onClick",type:{name:"func"}},{name:"className",type:{name:"string"},defaultValue:{func:!1,value:'""'}}],sourceFiles:["/Users/auouser/Desktop/Work_Space/DED-WDS_VUE/libs/src/ui/element/Tabs/TabItem.vue"]};const B={class:"ded-tabs"},c={__name:"Tabs",props:{themeColor:{type:String,default:"primary",validator:a=>["primary","secondary","neutral","info","success","warning","error"].includes(a)},dataSource:{type:Array,required:!0,validator:a=>a.every(e=>typeof e.title=="string"&&typeof e.content=="string")},activeIndex:{type:Number,default:0},type:{type:String,default:"basic",validator:a=>["basic","outline"].includes(a)},isDisabled:{type:Boolean,default:!1},className:{type:String,default:""}},setup(a){const e=a,t=$(e.activeIndex||0),n=s=>{t.value=parseInt(s.currentTarget.dataset.index,10)};return I(()=>e.activeIndex,s=>{t.value=s||0}),(s,j)=>{var m;return i(),b("div",{class:u({"ded-tabs-container":!0,[e.className]:!!e.className})},[l("div",B,[(i(!0),b(k,null,A(e.dataSource,(p,d)=>(i(),S(h,{key:d,themeColor:e.themeColor,title:p.title,type:e.type,index:d,isActive:d===t.value,isDisabled:e.isDisabled||p.isDisabled,onClick:n},null,8,["themeColor","title","type","index","isActive","isDisabled"]))),128))]),l("div",{class:u(["ded-tab-content",{"ded-tab-disable":e.isDisabled}])},T((m=e.dataSource[t.value])==null?void 0:m.content),3)],2)}}};c.__docgenInfo={exportName:"default",displayName:"Tabs",description:"",tags:{},props:[{name:"themeColor",type:{name:"string"},defaultValue:{func:!1,value:'"primary"'},values:["primary","secondary","neutral","info","success","warning","error"]},{name:"dataSource",type:{name:"array"},required:!0},{name:"activeIndex",type:{name:"number"},defaultValue:{func:!1,value:"0"}},{name:"type",type:{name:"string"},defaultValue:{func:!1,value:'"basic"'},values:["basic","outline"]},{name:"isDisabled",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"className",type:{name:"string"},defaultValue:{func:!1,value:'""'}}],sourceFiles:["/Users/auouser/Desktop/Work_Space/DED-WDS_VUE/libs/src/ui/element/Tabs/Tabs.vue"]};function x(a){return`[
    ${a.map(e=>`{
        title: '${e.title}',
        content: '${e.content}',
    }`).join(`,
    `)}
  ]`}const O={title:"Component/Tabs",component:c,tags:["Tabs"],argTypes:{themeColor:{description:"主題顏色",control:{type:"select"},options:["primary","secondary","neutral","info","success","warning","error"],table:{type:{summary:"primary | secondary | neutral | info | success | warning | error"}}},dataSource:{description:"資料來源",control:{type:"object"},table:{type:{summary:"{ title: string; content: string; }[]"}}},activeIndex:{description:"活動頁籤索引",control:{type:"number",min:0,max:2,step:1}},type:{description:"頁籤樣式",control:{type:"select"},options:["basic","outline","button"],table:{type:{summary:"basic | outline "}}},isDisabled:{description:"是否禁用",control:{type:"boolean"}},className:{description:"客製化樣式",control:{type:"text"}}},parameters:{docs:{title:"Tabs",description:{component:"Tabs 組件的呈現及說明。"}}}},r={name:"預設項目",args:{themeColor:"primary",dataSource:[{title:"Tab 1",content:"Content 1"},{title:"Tab 2",content:"Content 2"},{title:"Tab 3",content:"Content 3"}],activeIndex:0,type:"basic",isDisabled:!1,className:""},render:a=>({components:{Tabs:c},setup(){return{args:a}},template:`
            <Tabs
                :themeColor="args.themeColor"
                :dataSource="args.dataSource"
                :activeIndex="args.activeIndex"
                :type="args.type"
                :isDisabled="args.isDisabled"
                :className="args.className"
            ></Tabs>
        `}),parameters:{controls:{},docs:{source:{transform:(a,e)=>{const{args:t}=e,n=x(t.dataSource);return["<Tabs",`  themeColor="${t.themeColor}"`,`  :dataSource="${n}"`,`  :activeIndex="${t.activeIndex}"`,`  type="${t.type}"`,`  :isDisabled="${t.isDisabled}"`,`  className="${t.className}"`,"></Tabs>"].join(`
`).trim()}}}}},o={name:"卡片式頁籤",args:{themeColor:"primary",dataSource:[{title:"Tab 1",content:"Content 1"},{title:"Tab 2",content:"Content 2"},{title:"Tab 3",content:"Content 3"}],activeIndex:0,type:"outline",isDisabled:!1,className:""},render:a=>({components:{Tabs:c},setup(){return{args:a}},template:`
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
    type: "basic",
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
}`,...(f=(g=r.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};var C,v,D;o.parameters={...o.parameters,docs:{...(C=o.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
    type: "outline",
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
}`,...(D=(v=o.parameters)==null?void 0:v.docs)==null?void 0:D.source}}};const G=["DefaultTabs","CardTabs"];export{o as CardTabs,r as DefaultTabs,G as __namedExportsOrder,O as default};

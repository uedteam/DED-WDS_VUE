import{o as s,E as D,d as $,c as d,b as N,e as _,a as u,t as S,n as m,h as I,w,F as A,D as k}from"./vue.esm-bundler-D0YZwI1O.js";import{_ as V}from"./Button-DNzccG-4.js";import{_ as E}from"./Icon-BEQChxlu.js";import"./iframe-BAU84F5S.js";import"../sb-preview/runtime.js";const F={key:0,class:"ded-icon"},B={class:"ded-text-medium"},T={__name:"TabItem",props:{themeColor:{type:String,validator:t=>["primary","secondary","neutral","info","success","warning","error"].includes(t)},type:{type:String,validator:t=>["default","card"].includes(t)},prefix:{type:String},title:{type:String,default:"頁籤 1"},index:{type:Number},isActive:{type:Boolean},isDisabled:{type:Boolean,default:!1},onClick:{type:Function},className:{type:String,default:""}},setup(t){const e=t,a=n=>{!e.isDisabled&&e.onClick&&e.onClick(n)};return(n,r)=>(s(),D(V,{themeColor:e.themeColor,variant:"text",isDisabled:e.isDisabled,class:m({"ded-tab ":!0,[`ded-tab-${e.themeColor}`]:e.themeColor&&e.type==="default",[`ded-tab-${e.themeColor}-active`]:e.isActive&&e.type==="default",[`ded-tab-card-${e.themeColor}`]:e.themeColor&&e.type==="card",[`ded-tab-card-${e.themeColor}-active`]:e.isActive&&e.type==="card"}),onClick:a,"data-index":e.index},{default:$(()=>[e.prefix?(s(),d("div",F,[N(E,{name:"SvgArrowDown"})])):_("",!0),u("div",B,S(e.title),1)]),_:1},8,["themeColor","isDisabled","class","data-index"]))}};T.__docgenInfo={exportName:"default",displayName:"TabItem",description:"",tags:{},props:[{name:"themeColor",type:{name:"string"},values:["primary","secondary","neutral","info","success","warning","error"]},{name:"type",type:{name:"string"},values:["default","card"]},{name:"prefix",type:{name:"string"}},{name:"title",type:{name:"string"},defaultValue:{func:!1,value:'"頁籤 1"'}},{name:"index",type:{name:"number"}},{name:"isActive",type:{name:"boolean"}},{name:"isDisabled",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"onClick",type:{name:"func"}},{name:"className",type:{name:"string"},defaultValue:{func:!1,value:'""'}}],sourceFiles:["D:/98_測試/up/DED-WDS_VUE/libs/src/ui/element/Tabs/TabItem.vue"]};const j={class:"ded-tabs"},l={__name:"Tabs",props:{themeColor:{type:String,default:"primary",validator:t=>["primary","secondary","neutral","info","success","warning","error"].includes(t)},dataSource:{type:Array,required:!0,validator:t=>t.every(e=>typeof e.title=="string"&&typeof e.content=="string")},activeIndex:{type:Number,default:0},type:{type:String,default:"default",validator:t=>["default","card"].includes(t)},prefix:{type:String},isDisabled:{type:Boolean,default:!1},className:{type:String,default:""}},setup(t){const e=t,a=I(e.activeIndex||0),n=r=>{a.value=parseInt(r.currentTarget.dataset.index,10)};return w(()=>e.activeIndex,r=>{a.value=r||0}),(r,q)=>{var p;return s(),d("div",{class:m({"ded-tabs-container":!0,[e.className]:!!e.className})},[u("div",j,[(s(!0),d(A,null,k(e.dataSource,(f,c)=>(s(),D(T,{key:c,themeColor:e.themeColor,title:f.title,type:e.type,prefix:e.prefix,index:c,isActive:c===a.value,isDisabled:e.isDisabled||f.isDisabled,onClick:n},null,8,["themeColor","title","type","prefix","index","isActive","isDisabled"]))),128))]),u("div",{class:m(["ded-tab-content",{"ded-tab-disable":e.isDisabled}])},S((p=e.dataSource[a.value])==null?void 0:p.content),3)],2)}}};l.__docgenInfo={exportName:"default",displayName:"Tabs",description:"",tags:{},props:[{name:"themeColor",type:{name:"string"},defaultValue:{func:!1,value:'"primary"'},values:["primary","secondary","neutral","info","success","warning","error"]},{name:"dataSource",type:{name:"array"},required:!0},{name:"activeIndex",type:{name:"number"},defaultValue:{func:!1,value:"0"}},{name:"type",type:{name:"string"},defaultValue:{func:!1,value:'"default"'},values:["default","card"]},{name:"prefix",type:{name:"string"}},{name:"isDisabled",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"className",type:{name:"string"},defaultValue:{func:!1,value:'""'}}],sourceFiles:["D:/98_測試/up/DED-WDS_VUE/libs/src/ui/element/Tabs/Tabs.vue"]};function h(t){return`[
    ${t.map(e=>`{
        title: '${e.title}',
        content: '${e.content}',
    }`).join(`,
    `)}
  ]`}const G={title:"Component/Tabs",component:l,tags:["Tabs"],argTypes:{themeColor:{description:"主題顏色",control:{type:"select"},options:["primary","secondary","neutral","info","success","warning","error"],table:{type:{summary:"primary | secondary | neutral | info | success | warning | error"}}},dataSource:{description:"資料來源",control:{type:"object"},table:{type:{summary:"{ title: string; content: string; }[]"}}},activeIndex:{description:"活動頁籤索引",control:{type:"number",min:0,max:2,step:1}},type:{description:"頁籤樣式",control:{type:"select"},options:["default","card"],table:{type:{summary:"default | card "}}},prefix:{description:"前綴元素",control:{type:"select",labels:{"":"none",SvgArrowDown:"SvgArrowDown"}},options:["","SvgArrowDown"]},isDisabled:{description:"是否禁用",control:{type:"boolean"}},className:{description:"客製化樣式",control:{type:"text"}}},parameters:{docs:{title:"Tabs",description:{component:"頁籤組件的呈現及說明。"}}}},o={name:"預設項目",args:{themeColor:"primary",dataSource:[{title:"Tab 1",content:"Content 1"},{title:"Tab 2",content:"Content 2"},{title:"Tab 3",content:"Content 3"}],activeIndex:0,type:"default",prefix:"SvgArrowDown",isDisabled:!1,className:""},render:t=>({components:{Tabs:l},setup(){return{args:t}},template:`
            <Tabs
                :themeColor="args.themeColor"
                :dataSource="args.dataSource"
                :activeIndex="args.activeIndex"
                :type="args.type"
                :prefix="args.prefix"
                :isDisabled="args.isDisabled"
                :className="args.className"
            ></Tabs>
        `}),parameters:{controls:{},docs:{source:{transform:(t,e)=>{const{args:a}=e,n=h(a.dataSource);return["<Tabs",`  themeColor="${a.themeColor}"`,`  :dataSource="${n}"`,`  :activeIndex="${a.activeIndex}"`,`  type="${a.type}"`,`  prefix="${a.prefix}"`,`  :isDisabled="${a.isDisabled}"`,`  className="${a.className}"`,"></Tabs>"].join(`
`).trim()}}}}},i={name:"卡片式頁籤",args:{themeColor:"primary",dataSource:[{title:"Tab 1",content:"Content 1"},{title:"Tab 2",content:"Content 2"},{title:"Tab 3",content:"Content 3"}],activeIndex:0,type:"card",prefix:"SvgArrowDown",isDisabled:!1,className:""},render:t=>({components:{Tabs:l},setup(){return{args:t}},template:`
            <Tabs
                :themeColor="args.themeColor"
                :dataSource="args.dataSource"
                :activeIndex="args.activeIndex"
                :type="args.type"
                :prefix="args.prefix"
                :isDisabled="args.isDisabled"
                :className="args.className"
            ></Tabs>
        `}),parameters:{controls:{},docs:{source:{transform:(t,e)=>{const{args:a}=e,n=h(a.dataSource);return["<Tabs",`  themeColor="${a.themeColor}"`,`  :dataSource="${n}"`,`  :activeIndex="${a.activeIndex}"`,`  type="${a.type}"`,`  prefix="${a.prefix}"`,`  :isDisabled="${a.isDisabled}"`,`  className="${a.className}"`,"></Tabs>"].join(`
`).trim()}}}}};var b,y,g;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
    prefix: 'SvgArrowDown',
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
                :prefix="args.prefix"
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
          return ['<Tabs', \`  themeColor="\${args.themeColor}"\`, \`  :dataSource="\${dataSourceString}"\`, \`  :activeIndex="\${args.activeIndex}"\`, \`  type="\${args.type}"\`, \`  prefix="\${args.prefix}"\`, \`  :isDisabled="\${args.isDisabled}"\`, \`  className="\${args.className}"\`, '></Tabs>'].join('\\n').trim();
        }
      }
    }
  }
}`,...(g=(y=o.parameters)==null?void 0:y.docs)==null?void 0:g.source}}};var x,v,C;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
    prefix: 'SvgArrowDown',
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
                :prefix="args.prefix"
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
          return ['<Tabs', \`  themeColor="\${args.themeColor}"\`, \`  :dataSource="\${dataSourceString}"\`, \`  :activeIndex="\${args.activeIndex}"\`, \`  type="\${args.type}"\`, \`  prefix="\${args.prefix}"\`, \`  :isDisabled="\${args.isDisabled}"\`, \`  className="\${args.className}"\`, '></Tabs>'].join('\\n').trim();
        }
      }
    }
  }
}`,...(C=(v=i.parameters)==null?void 0:v.docs)==null?void 0:C.source}}};const H=["DefaultTabs","CardTabs"];export{i as CardTabs,o as DefaultTabs,H as __namedExportsOrder,G as default};

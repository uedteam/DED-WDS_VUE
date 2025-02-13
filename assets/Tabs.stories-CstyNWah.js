import{o as n,j as I,d as w,c as p,b as A,e as k,a as m,t as h,n as u,k as V,w as E,F as j,h as B}from"./vue.esm-bundler-qCK_iSPY.js";import{_ as F}from"./Button-DOqzoiF2.js";import{_ as U}from"./Icon-DNPtS85k.js";import"./iframe-B08jCWer.js";import"../sb-preview/runtime.js";const W={key:0,class:"ded-icon"},q={class:"ded-text-medium"},_={__name:"TabItem",props:{themeColor:{type:String,validator:s=>["primary","secondary","neutral","info","success","warning","error"].includes(s)},type:{type:String,validator:s=>["default","card"].includes(s)},prefix:{type:String},title:{type:String,default:"頁籤 1"},index:{type:Number},isActive:{type:Boolean},isDisabled:{type:Boolean,default:!1},onClick:{type:Function},className:{type:String,default:""}},setup(s){const a=s,e=t=>{!a.isDisabled&&a.onClick&&a.onClick(t)};return(t,r)=>(n(),I(F,{themeColor:a.themeColor,variant:"text",isDisabled:a.isDisabled,class:u({"ded-tab ":!0,[`ded-tab-${a.themeColor}`]:a.themeColor&&a.type==="default",[`ded-tab-${a.themeColor}-active`]:a.isActive&&a.type==="default",[`ded-tab-card-${a.themeColor}`]:a.themeColor&&a.type==="card",[`ded-tab-card-${a.themeColor}-active`]:a.isActive&&a.type==="card"}),onClick:e,"data-index":a.index},{default:w(()=>[a.prefix?(n(),p("div",W,[A(U,{name:"SvgArrowDown"})])):k("",!0),m("div",q,h(a.title),1)]),_:1},8,["themeColor","isDisabled","class","data-index"]))}};_.__docgenInfo={exportName:"default",displayName:"TabItem",description:"",tags:{},props:[{name:"themeColor",type:{name:"string"},values:["primary","secondary","neutral","info","success","warning","error"]},{name:"type",type:{name:"string"},values:["default","card"]},{name:"prefix",type:{name:"string"}},{name:"title",type:{name:"string"},defaultValue:{func:!1,value:'"頁籤 1"'}},{name:"index",type:{name:"number"}},{name:"isActive",type:{name:"boolean"}},{name:"isDisabled",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"onClick",type:{name:"func"}},{name:"className",type:{name:"string"},defaultValue:{func:!1,value:'""'}}],sourceFiles:["/Users/auouser/Desktop/Work_Space/DED-WDS_VUE/libs/src/ui/element/Tabs/TabItem.vue"]};const z={class:"ded-tabs"},i={__name:"Tabs",props:{themeColor:{type:String,default:"primary",validator:s=>["primary","secondary","neutral","info","success","warning","error"].includes(s)},dataSource:{type:Array,required:!0,validator:s=>s.every(a=>typeof a.title=="string"&&typeof a.content=="string")},activeIndex:{type:Number,default:0},type:{type:String,default:"default",validator:s=>["default","card"].includes(s)},prefix:{type:String,default:""},isDisabled:{type:Boolean,default:!1},className:{type:String,default:""}},setup(s){const a=s,e=V(a.activeIndex||0),t=r=>{e.value=parseInt(r.currentTarget.dataset.index,10)};return E(()=>a.activeIndex,r=>{e.value=r||0}),(r,L)=>{var b;return n(),p("div",{class:u({"ded-tabs-container":!0,[a.className]:!!a.className})},[m("div",z,[(n(!0),p(j,null,B(a.dataSource,(x,d)=>(n(),I(_,{key:d,themeColor:a.themeColor,title:x.title,type:a.type,prefix:a.prefix,index:d,isActive:d===e.value,isDisabled:a.isDisabled||x.isDisabled,onClick:t},null,8,["themeColor","title","type","prefix","index","isActive","isDisabled"]))),128))]),m("div",{class:u(["ded-tab-content",{"ded-tab-disable":a.isDisabled}])},h((b=a.dataSource[e.value])==null?void 0:b.content),3)],2)}}};i.__docgenInfo={exportName:"default",displayName:"Tabs",description:"",tags:{},props:[{name:"themeColor",type:{name:"string"},defaultValue:{func:!1,value:'"primary"'},values:["primary","secondary","neutral","info","success","warning","error"]},{name:"dataSource",type:{name:"array"},required:!0},{name:"activeIndex",type:{name:"number"},defaultValue:{func:!1,value:"0"}},{name:"type",type:{name:"string"},defaultValue:{func:!1,value:'"default"'},values:["default","card"]},{name:"prefix",type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"isDisabled",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"className",type:{name:"string"},defaultValue:{func:!1,value:'""'}}],sourceFiles:["/Users/auouser/Desktop/Work_Space/DED-WDS_VUE/libs/src/ui/element/Tabs/Tabs.vue"]};function g(s){return`[
    ${s.map(a=>`{
        title: '${a.title}',
        content: '${a.content}',
    }`).join(`,
    `)}
  ]`}const M={title:"Component/Tabs",component:i,tags:["Tabs"],argTypes:{themeColor:{description:"主題顏色",control:{type:"select"},options:["primary","secondary","neutral","info","success","warning","error"],table:{type:{summary:"primary | secondary | neutral | info | success | warning | error"}}},dataSource:{description:"資料來源",control:{type:"object"},table:{type:{summary:"{ title: string; content: string; }[]"}}},activeIndex:{description:"活動頁籤索引",control:{type:"number",min:0,max:2,step:1}},type:{description:"頁籤樣式",control:{type:"select"},options:["default","card"],table:{type:{summary:"default | card "}}},prefix:{description:"前綴元素",control:{type:"select",labels:{"":"none",SvgArrowDown:"SvgArrowDown"}},options:["","SvgArrowDown"]},isDisabled:{description:"是否禁用",control:{type:"boolean"}},className:{description:"客製化樣式",control:{type:"text"}}},parameters:{docs:{title:"Tabs",description:{component:"頁籤組件的呈現及說明。"}}}},o={name:"預設項目",args:{themeColor:"primary",dataSource:[{title:"Tab 1",content:"Content 1"},{title:"Tab 2",content:"Content 2"},{title:"Tab 3",content:"Content 3"}],activeIndex:0,type:"default",prefix:"SvgArrowDown",isDisabled:!1,className:""},render:s=>({components:{Tabs:i},setup(){return{args:s}},template:`
            <Tabs
                :themeColor="args.themeColor"
                :dataSource="args.dataSource"
                :activeIndex="args.activeIndex"
                :type="args.type"
                :prefix="args.prefix"
                :isDisabled="args.isDisabled"
                :className="args.className"
            ></Tabs>
        `}),parameters:{controls:{},docs:{source:{transform:(s,a)=>{const{args:e}=a,t=g(e.dataSource);return["<Tabs",`  themeColor="${e.themeColor}"`,`  :dataSource="${t}"`,`  :activeIndex="${e.activeIndex}"`,`  type="${e.type}"`,`  prefix="${e.prefix}"`,`  :isDisabled="${e.isDisabled}"`,`  className="${e.className}"`,"></Tabs>"].join(`
`).trim()}}}}},c={name:"頁籤類型",args:{themeColor:"primary",dataSource:[{title:"Tab 1",content:"Content 1"},{title:"Tab 2",content:"Content 2"},{title:"Tab 3",content:"Content 3"}],activeIndex:0,prefix:"SvgArrowDown",isDisabled:!1,className:""},render:s=>({components:{Tabs:i},setup(){return{args:s}},template:`
            <div style="display:flex; flex-direction: column; gap:24px">
                <Tabs
                    :themeColor="args.themeColor"
                    :dataSource="args.dataSource"
                    :activeIndex="args.activeIndex"
                    type="default"
                    :prefix="args.prefix"
                    :isDisabled="args.isDisabled"
                    :className="args.className"
                ></Tabs>
                <Tabs
                    :themeColor="args.themeColor"
                    :dataSource="args.dataSource"
                    :activeIndex="args.activeIndex"
                    type="card"
                    :prefix="args.prefix"
                    :isDisabled="args.isDisabled"
                    :className="args.className"
                ></Tabs>
            </div>
        `}),parameters:{controls:{exclude:["type"]},docs:{source:{transform:(s,a)=>{const{args:e}=a,t=g(e.dataSource);return["<Tabs",`  themeColor="${e.themeColor}"`,`  :dataSource="${t}"`,`  :activeIndex="${e.activeIndex}"`,'  type="default"',`  prefix="${e.prefix}"`,`  :isDisabled="${e.isDisabled}"`,`  className="${e.className}"`,"></Tabs>","<Tabs",`  themeColor="${e.themeColor}"`,`  :dataSource="${t}"`,`  :activeIndex="${e.activeIndex}"`,'  type="card"',`  prefix="${e.prefix}"`,`  :isDisabled="${e.isDisabled}"`,`  className="${e.className}"`,"></Tabs>"].join(`
`).trim()}}}}},l={name:"主題色彩",args:{dataSource:[{title:"Tab 1",content:"Content 1"},{title:"Tab 2",content:"Content 2"},{title:"Tab 3",content:"Content 3"}],activeIndex:0,type:"default",prefix:"SvgArrowDown",isDisabled:!1,className:""},render:s=>({components:{Tabs:i},setup(){return{args:s}},template:`
            <div style="display:flex; flex-direction: column; gap:16px">
                <Tabs
                    themeColor="primary"
                    :dataSource="args.dataSource"
                    :activeIndex="args.activeIndex"
                    :type="args.type"
                    :prefix="args.prefix"
                    :isDisabled="args.isDisabled"
                    :className="args.className"
                ></Tabs>
                <Tabs
                    themeColor="secondary"
                    :dataSource="args.dataSource"
                    :activeIndex="args.activeIndex"
                    :type="args.type"
                    :prefix="args.prefix"
                    :isDisabled="args.isDisabled"
                    :className="args.className"
                ></Tabs>
                <Tabs
                    themeColor="neutral"
                    :dataSource="args.dataSource"
                    :activeIndex="args.activeIndex"
                    :type="args.type"
                    :prefix="args.prefix"
                    :isDisabled="args.isDisabled"
                    :className="args.className"
                ></Tabs>
                <Tabs
                    themeColor="info"
                    :dataSource="args.dataSource"
                    :activeIndex="args.activeIndex"
                    :type="args.type"
                    :prefix="args.prefix"
                    :isDisabled="args.isDisabled"
                    :className="args.className"
                ></Tabs>
                <Tabs
                    themeColor="success"
                    :dataSource="args.dataSource"
                    :activeIndex="args.activeIndex"
                    :type="args.type"
                    :prefix="args.prefix"
                    :isDisabled="args.isDisabled"
                    :className="args.className"
                ></Tabs>
                <Tabs
                    themeColor="warning"
                    :dataSource="args.dataSource"
                    :activeIndex="args.activeIndex"
                    :type="args.type"
                    :prefix="args.prefix"
                    :isDisabled="args.isDisabled"
                    :className="args.className"
                ></Tabs>
                <Tabs
                    themeColor="error"
                    :dataSource="args.dataSource"
                    :activeIndex="args.activeIndex"
                    :type="args.type"
                    :prefix="args.prefix"
                    :isDisabled="args.isDisabled"
                    :className="args.className"
                ></Tabs>
            </div>
        `}),parameters:{controls:{exclude:["themeColor"]},docs:{source:{transform:(s,a)=>{const{args:e}=a,t=g(e.dataSource);return["<Tabs",'  themeColor="primary"',`  :dataSource="${t}"`,`  :activeIndex="${e.activeIndex}"`,`  type="${e.type}"`,`  prefix="${e.prefix}"`,`  :isDisabled="${e.isDisabled}"`,`  className="${e.className}"`,"></Tabs>","<Tabs",'  themeColor="secondary"',`  :dataSource="${t}"`,`  :activeIndex="${e.activeIndex}"`,`  type="${e.type}"`,`  prefix="${e.prefix}"`,`  :isDisabled="${e.isDisabled}"`,`  className="${e.className}"`,"></Tabs>","<Tabs",'  themeColor="neutral"',`  :dataSource="${t}"`,`  :activeIndex="${e.activeIndex}"`,`  type="${e.type}"`,`  prefix="${e.prefix}"`,`  :isDisabled="${e.isDisabled}"`,`  className="${e.className}"`,"></Tabs>","<Tabs",'  themeColor="info"',`  :dataSource="${t}"`,`  :activeIndex="${e.activeIndex}"`,`  type="${e.type}"`,`  prefix="${e.prefix}"`,`  :isDisabled="${e.isDisabled}"`,`  className="${e.className}"`,"></Tabs>","<Tabs",'  themeColor="success"',`  :dataSource="${t}"`,`  :activeIndex="${e.activeIndex}"`,`  type="${e.type}"`,`  prefix="${e.prefix}"`,`  :isDisabled="${e.isDisabled}"`,`  className="${e.className}"`,"></Tabs>","<Tabs",'  themeColor="warning"',`  :dataSource="${t}"`,`  :activeIndex="${e.activeIndex}"`,`  type="${e.type}"`,`  prefix="${e.prefix}"`,`  :isDisabled="${e.isDisabled}"`,`  className="${e.className}"`,"></Tabs>","<Tabs",'  themeColor="error"',`  :dataSource="${t}"`,`  :activeIndex="${e.activeIndex}"`,`  type="${e.type}"`,`  prefix="${e.prefix}"`,`  :isDisabled="${e.isDisabled}"`,`  className="${e.className}"`,"></Tabs>"].join(`
`).trim()}}}}};var f,y,v;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(v=(y=o.parameters)==null?void 0:y.docs)==null?void 0:v.source}}};var S,$,D;c.parameters={...c.parameters,docs:{...(S=c.parameters)==null?void 0:S.docs,source:{originalSource:`{
  name: "頁籤類型",
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
    // type: "default",
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
            <div style="display:flex; flex-direction: column; gap:24px">
                <Tabs
                    :themeColor="args.themeColor"
                    :dataSource="args.dataSource"
                    :activeIndex="args.activeIndex"
                    type="default"
                    :prefix="args.prefix"
                    :isDisabled="args.isDisabled"
                    :className="args.className"
                ></Tabs>
                <Tabs
                    :themeColor="args.themeColor"
                    :dataSource="args.dataSource"
                    :activeIndex="args.activeIndex"
                    type="card"
                    :prefix="args.prefix"
                    :isDisabled="args.isDisabled"
                    :className="args.className"
                ></Tabs>
            </div>
        \`
  }),
  // 控制 controls 中能控制的參數
  parameters: {
    controls: {
      // include: ['themeColor', 'label', 'value', 'name' ],
      exclude: ['type']
    },
    docs: {
      source: {
        transform: (src, storyContext) => {
          const {
            args
          } = storyContext;
          const dataSourceString = formatDataSource(args.dataSource);
          return ['<Tabs', \`  themeColor="\${args.themeColor}"\`, \`  :dataSource="\${dataSourceString}"\`, \`  :activeIndex="\${args.activeIndex}"\`, \`  type="default"\`, \`  prefix="\${args.prefix}"\`, \`  :isDisabled="\${args.isDisabled}"\`, \`  className="\${args.className}"\`, '></Tabs>', '<Tabs', \`  themeColor="\${args.themeColor}"\`, \`  :dataSource="\${dataSourceString}"\`, \`  :activeIndex="\${args.activeIndex}"\`, \`  type="card"\`, \`  prefix="\${args.prefix}"\`, \`  :isDisabled="\${args.isDisabled}"\`, \`  className="\${args.className}"\`, '></Tabs>'].join('\\n').trim();
        }
      }
    }
  }
}`,...(D=($=c.parameters)==null?void 0:$.docs)==null?void 0:D.source}}};var T,C,N;l.parameters={...l.parameters,docs:{...(T=l.parameters)==null?void 0:T.docs,source:{originalSource:`{
  name: "主題色彩",
  args: {
    // themeColor: "primary",
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
            <div style="display:flex; flex-direction: column; gap:16px">
                <Tabs
                    themeColor="primary"
                    :dataSource="args.dataSource"
                    :activeIndex="args.activeIndex"
                    :type="args.type"
                    :prefix="args.prefix"
                    :isDisabled="args.isDisabled"
                    :className="args.className"
                ></Tabs>
                <Tabs
                    themeColor="secondary"
                    :dataSource="args.dataSource"
                    :activeIndex="args.activeIndex"
                    :type="args.type"
                    :prefix="args.prefix"
                    :isDisabled="args.isDisabled"
                    :className="args.className"
                ></Tabs>
                <Tabs
                    themeColor="neutral"
                    :dataSource="args.dataSource"
                    :activeIndex="args.activeIndex"
                    :type="args.type"
                    :prefix="args.prefix"
                    :isDisabled="args.isDisabled"
                    :className="args.className"
                ></Tabs>
                <Tabs
                    themeColor="info"
                    :dataSource="args.dataSource"
                    :activeIndex="args.activeIndex"
                    :type="args.type"
                    :prefix="args.prefix"
                    :isDisabled="args.isDisabled"
                    :className="args.className"
                ></Tabs>
                <Tabs
                    themeColor="success"
                    :dataSource="args.dataSource"
                    :activeIndex="args.activeIndex"
                    :type="args.type"
                    :prefix="args.prefix"
                    :isDisabled="args.isDisabled"
                    :className="args.className"
                ></Tabs>
                <Tabs
                    themeColor="warning"
                    :dataSource="args.dataSource"
                    :activeIndex="args.activeIndex"
                    :type="args.type"
                    :prefix="args.prefix"
                    :isDisabled="args.isDisabled"
                    :className="args.className"
                ></Tabs>
                <Tabs
                    themeColor="error"
                    :dataSource="args.dataSource"
                    :activeIndex="args.activeIndex"
                    :type="args.type"
                    :prefix="args.prefix"
                    :isDisabled="args.isDisabled"
                    :className="args.className"
                ></Tabs>
            </div>
        \`
  }),
  // 控制 controls 中能控制的參數
  parameters: {
    controls: {
      // include: ['themeColor', 'label', 'value', 'name' ],
      exclude: ['themeColor']
    },
    docs: {
      source: {
        transform: (src, storyContext) => {
          const {
            args
          } = storyContext;
          const dataSourceString = formatDataSource(args.dataSource);
          return ['<Tabs', \`  themeColor="primary"\`, \`  :dataSource="\${dataSourceString}"\`, \`  :activeIndex="\${args.activeIndex}"\`, \`  type="\${args.type}"\`, \`  prefix="\${args.prefix}"\`, \`  :isDisabled="\${args.isDisabled}"\`, \`  className="\${args.className}"\`, '></Tabs>', '<Tabs', \`  themeColor="secondary"\`, \`  :dataSource="\${dataSourceString}"\`, \`  :activeIndex="\${args.activeIndex}"\`, \`  type="\${args.type}"\`, \`  prefix="\${args.prefix}"\`, \`  :isDisabled="\${args.isDisabled}"\`, \`  className="\${args.className}"\`, '></Tabs>', '<Tabs', \`  themeColor="neutral"\`, \`  :dataSource="\${dataSourceString}"\`, \`  :activeIndex="\${args.activeIndex}"\`, \`  type="\${args.type}"\`, \`  prefix="\${args.prefix}"\`, \`  :isDisabled="\${args.isDisabled}"\`, \`  className="\${args.className}"\`, '></Tabs>', '<Tabs', \`  themeColor="info"\`, \`  :dataSource="\${dataSourceString}"\`, \`  :activeIndex="\${args.activeIndex}"\`, \`  type="\${args.type}"\`, \`  prefix="\${args.prefix}"\`, \`  :isDisabled="\${args.isDisabled}"\`, \`  className="\${args.className}"\`, '></Tabs>', '<Tabs', \`  themeColor="success"\`, \`  :dataSource="\${dataSourceString}"\`, \`  :activeIndex="\${args.activeIndex}"\`, \`  type="\${args.type}"\`, \`  prefix="\${args.prefix}"\`, \`  :isDisabled="\${args.isDisabled}"\`, \`  className="\${args.className}"\`, '></Tabs>', '<Tabs', \`  themeColor="warning"\`, \`  :dataSource="\${dataSourceString}"\`, \`  :activeIndex="\${args.activeIndex}"\`, \`  type="\${args.type}"\`, \`  prefix="\${args.prefix}"\`, \`  :isDisabled="\${args.isDisabled}"\`, \`  className="\${args.className}"\`, '></Tabs>', '<Tabs', \`  themeColor="error"\`, \`  :dataSource="\${dataSourceString}"\`, \`  :activeIndex="\${args.activeIndex}"\`, \`  type="\${args.type}"\`, \`  prefix="\${args.prefix}"\`, \`  :isDisabled="\${args.isDisabled}"\`, \`  className="\${args.className}"\`, '></Tabs>'].join('\\n').trim();
        }
      }
    }
  }
}`,...(N=(C=l.parameters)==null?void 0:C.docs)==null?void 0:N.source}}};const P=["DefaultTabs","TabsTypesStory","TabsColorStory"];export{o as DefaultTabs,l as TabsColorStory,c as TabsTypesStory,P as __namedExportsOrder,M as default};

import{o as n,j as I,d as _,c as u,b as A,e as k,a as m,t as h,n as d,k as V,w as E,F as j,h as B}from"./vue.esm-bundler-qCK_iSPY.js";import{_ as F}from"./Button-BBJUKVar.js";import{_ as U}from"./Icon-Dr0uxKWp.js";import"./iframe-Dp5wB7_x.js";import"../sb-preview/runtime.js";const W={key:0,class:"ded-icon"},w={__name:"TabItem",props:{themeColor:{type:String,validator:s=>["primary","secondary","neutral","info","success","warning","error"].includes(s)},type:{type:String,default:"basic",validator:s=>["basic","outline","button"].includes(s)},prefix:{type:String},title:{type:String,default:"頁籤 1"},index:{type:Number},isActive:{type:Boolean},isDisabled:{type:Boolean,default:!1},onClick:{type:Function},className:{type:String,default:""}},setup(s){const a=s,e=t=>{!a.isDisabled&&a.onClick&&a.onClick(t)};return(t,r)=>(n(),I(F,{themeColor:a.themeColor,variant:a.type==="button"?"filled":"text",isDisabled:a.isDisabled,"data-index":a.index,onClick:e,class:d({"ded-tab ":a.type!=="button",[`ded-tab-${a.themeColor}`]:a.isActive&&a.type==="basic",[`ded-tab-${a.themeColor}-active`]:a.isActive&&a.type==="basic","ded-tab-disable":a.isDisabled&&a.type==="basic"||a.isDisabled&&a.type==="outline",[`ded-tab-outline-${a.themeColor}`]:a.themeColor&&a.type==="outline",[`ded-tab-outline-${a.themeColor}-active`]:a.isActive&&a.type==="outline","ded-tab-button ":!a.isActive&&a.type==="button",[`ded-tab-button-${a.themeColor}`]:a.themeColor&&a.type==="button",[`ded-tab-button-${a.themeColor}-active`]:a.isActive&&a.type==="button","ded-tab-button-disable":a.isDisabled&&a.type==="button"})},{default:_(()=>[a.prefix?(n(),u("span",W,[A(U,{name:"SvgArrowDown"})])):k("",!0),m("span",null,h(a.title),1)]),_:1},8,["themeColor","variant","isDisabled","data-index","class"]))}};w.__docgenInfo={exportName:"default",displayName:"TabItem",description:"",tags:{},props:[{name:"themeColor",type:{name:"string"},values:["primary","secondary","neutral","info","success","warning","error"]},{name:"type",type:{name:"string"},defaultValue:{func:!1,value:'"basic"'},values:["basic","outline","button"]},{name:"prefix",type:{name:"string"}},{name:"title",type:{name:"string"},defaultValue:{func:!1,value:'"頁籤 1"'}},{name:"index",type:{name:"number"}},{name:"isActive",type:{name:"boolean"}},{name:"isDisabled",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"onClick",type:{name:"func"}},{name:"className",type:{name:"string"},defaultValue:{func:!1,value:'""'}}],sourceFiles:["/Users/auouser/Desktop/Work_Space/DED-WDS_VUE/libs/src/ui/element/Tabs/TabItem.vue"]};const i={__name:"Tabs",props:{themeColor:{type:String,default:"primary",validator:s=>["primary","secondary","neutral","info","success","warning","error"].includes(s)},dataSource:{type:Array,required:!0,validator:s=>s.every(a=>typeof a.title=="string"&&typeof a.content=="string")},activeIndex:{type:Number,default:0},type:{type:String,default:"basic",validator:s=>["basic","outline","button"].includes(s)},prefix:{type:String,default:""},isDisabled:{type:Boolean,default:!1},className:{type:String,default:""}},setup(s){const a=s,e=V(a.activeIndex||0),t=r=>{e.value=parseInt(r.currentTarget.dataset.index,10)};return E(()=>a.activeIndex,r=>{e.value=r||0}),(r,q)=>{var g;return n(),u("div",{class:d({"ded-tabs-container":!0,[a.className]:!!a.className})},[m("div",{class:d(["ded-tabs",{"ded-tabs-button":a.type==="button"}])},[(n(!0),u(j,null,B(a.dataSource,(x,p)=>(n(),I(w,{key:p,themeColor:a.themeColor,title:x.title,type:a.type,prefix:a.prefix,index:p,isActive:p===e.value,isDisabled:a.isDisabled||x.isDisabled,onClick:t},null,8,["themeColor","title","type","prefix","index","isActive","isDisabled"]))),128))],2),m("div",{class:d(["ded-tab-content",{"ded-tab-disable":a.isDisabled}])},h((g=a.dataSource[e.value])==null?void 0:g.content),3)],2)}}};i.__docgenInfo={exportName:"default",displayName:"Tabs",description:"",tags:{},props:[{name:"themeColor",type:{name:"string"},defaultValue:{func:!1,value:'"primary"'},values:["primary","secondary","neutral","info","success","warning","error"]},{name:"dataSource",type:{name:"array"},required:!0},{name:"activeIndex",type:{name:"number"},defaultValue:{func:!1,value:"0"}},{name:"type",type:{name:"string"},defaultValue:{func:!1,value:'"basic"'},values:["basic","outline","button"]},{name:"prefix",type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"isDisabled",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"className",type:{name:"string"},defaultValue:{func:!1,value:'""'}}],sourceFiles:["/Users/auouser/Desktop/Work_Space/DED-WDS_VUE/libs/src/ui/element/Tabs/Tabs.vue"]};function b(s){return`[
    ${s.map(a=>`{
        title: '${a.title}',
        content: '${a.content}',
    }`).join(`,
    `)}
  ]`}const J={title:"Component/Tabs",component:i,tags:["Tabs"],argTypes:{themeColor:{description:"主題顏色",control:{type:"select"},options:["primary","secondary","neutral","info","success","warning","error"],table:{type:{summary:"primary | secondary | neutral | info | success | warning | error"}}},dataSource:{description:"資料來源",control:{type:"object"},table:{type:{summary:"{ title: string; content: string; }[]"}}},activeIndex:{description:"活動頁籤索引",control:{type:"number",min:0,max:2,step:1}},type:{description:"頁籤樣式",control:{type:"select"},options:["basic","outline","button"],table:{type:{summary:"basic | outline | button "}}},prefix:{description:"前綴元素",control:{type:"select",labels:{"":"none",SvgArrowDown:"SvgArrowDown"}},options:["","SvgArrowDown"]},isDisabled:{description:"是否禁用",control:{type:"boolean"}},className:{description:"客製化樣式",control:{type:"text"}}},parameters:{docs:{title:"Tabs",description:{component:"頁籤組件的呈現及說明。"}}}},o={name:"預設項目",args:{themeColor:"primary",dataSource:[{title:"Tab 1",content:"Content 1"},{title:"Tab 2",content:"Content 2"},{title:"Tab 3",content:"Content 3"}],activeIndex:0,type:"basic",prefix:"SvgArrowDown",isDisabled:!1,className:""},render:s=>({components:{Tabs:i},setup(){return{args:s}},template:`
            <Tabs
                :themeColor="args.themeColor"
                :dataSource="args.dataSource"
                :activeIndex="args.activeIndex"
                :type="args.type"
                :prefix="args.prefix"
                :isDisabled="args.isDisabled"
                :className="args.className"
            ></Tabs>
        `}),parameters:{controls:{},docs:{source:{transform:(s,a)=>{const{args:e}=a,t=b(e.dataSource);return["<Tabs",`  themeColor="${e.themeColor}"`,`  :dataSource="${t}"`,`  :activeIndex="${e.activeIndex}"`,`  type="${e.type}"`,`  prefix="${e.prefix}"`,`  :isDisabled="${e.isDisabled}"`,`  className="${e.className}"`,"></Tabs>"].join(`
`).trim()}}}}},c={name:"頁籤類型",args:{themeColor:"primary",dataSource:[{title:"Tab 1",content:"Content 1"},{title:"Tab 2",content:"Content 2"},{title:"Tab 3",content:"Content 3"}],activeIndex:0,prefix:"SvgArrowDown",isDisabled:!1,className:""},render:s=>({components:{Tabs:i},setup(){return{args:s}},template:`
            <div style="display:flex; flex-direction: column; gap:24px">
                <Tabs
                    :themeColor="args.themeColor"
                    :dataSource="args.dataSource"
                    :activeIndex="args.activeIndex"
                    type="basic"
                    :prefix="args.prefix"
                    :isDisabled="args.isDisabled"
                    :className="args.className"
                ></Tabs>
                <Tabs
                    :themeColor="args.themeColor"
                    :dataSource="args.dataSource"
                    :activeIndex="args.activeIndex"
                    type="outline"
                    :prefix="args.prefix"
                    :isDisabled="args.isDisabled"
                    :className="args.className"
                ></Tabs>
                <Tabs
                    :themeColor="args.themeColor"
                    :dataSource="args.dataSource"
                    :activeIndex="args.activeIndex"
                    type="button"
                    :prefix="args.prefix"
                    :isDisabled="args.isDisabled"
                    :className="args.className"
                ></Tabs>
            </div>
        `}),parameters:{controls:{exclude:["type"]},docs:{source:{transform:(s,a)=>{const{args:e}=a,t=b(e.dataSource);return["<Tabs",`  themeColor="${e.themeColor}"`,`  :dataSource="${t}"`,`  :activeIndex="${e.activeIndex}"`,'  type="basic"',`  prefix="${e.prefix}"`,`  :isDisabled="${e.isDisabled}"`,`  className="${e.className}"`,"></Tabs>","<Tabs",`  themeColor="${e.themeColor}"`,`  :dataSource="${t}"`,`  :activeIndex="${e.activeIndex}"`,'  type="outline"',`  prefix="${e.prefix}"`,`  :isDisabled="${e.isDisabled}"`,`  className="${e.className}"`,"></Tabs>","<Tabs",`  themeColor="${e.themeColor}"`,`  :dataSource="${t}"`,`  :activeIndex="${e.activeIndex}"`,'  type="button"',`  prefix="${e.prefix}"`,`  :isDisabled="${e.isDisabled}"`,`  className="${e.className}"`,"></Tabs>"].join(`
`).trim()}}}}},l={name:"主題色彩",args:{dataSource:[{title:"Tab 1",content:"Content 1"},{title:"Tab 2",content:"Content 2"},{title:"Tab 3",content:"Content 3"}],activeIndex:0,type:"basic",prefix:"SvgArrowDown",isDisabled:!1,className:""},render:s=>({components:{Tabs:i},setup(){return{args:s}},template:`
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
        `}),parameters:{controls:{exclude:["themeColor"]},docs:{source:{transform:(s,a)=>{const{args:e}=a,t=b(e.dataSource);return["<Tabs",'  themeColor="primary"',`  :dataSource="${t}"`,`  :activeIndex="${e.activeIndex}"`,`  type="${e.type}"`,`  prefix="${e.prefix}"`,`  :isDisabled="${e.isDisabled}"`,`  className="${e.className}"`,"></Tabs>","<Tabs",'  themeColor="secondary"',`  :dataSource="${t}"`,`  :activeIndex="${e.activeIndex}"`,`  type="${e.type}"`,`  prefix="${e.prefix}"`,`  :isDisabled="${e.isDisabled}"`,`  className="${e.className}"`,"></Tabs>","<Tabs",'  themeColor="neutral"',`  :dataSource="${t}"`,`  :activeIndex="${e.activeIndex}"`,`  type="${e.type}"`,`  prefix="${e.prefix}"`,`  :isDisabled="${e.isDisabled}"`,`  className="${e.className}"`,"></Tabs>","<Tabs",'  themeColor="info"',`  :dataSource="${t}"`,`  :activeIndex="${e.activeIndex}"`,`  type="${e.type}"`,`  prefix="${e.prefix}"`,`  :isDisabled="${e.isDisabled}"`,`  className="${e.className}"`,"></Tabs>","<Tabs",'  themeColor="success"',`  :dataSource="${t}"`,`  :activeIndex="${e.activeIndex}"`,`  type="${e.type}"`,`  prefix="${e.prefix}"`,`  :isDisabled="${e.isDisabled}"`,`  className="${e.className}"`,"></Tabs>","<Tabs",'  themeColor="warning"',`  :dataSource="${t}"`,`  :activeIndex="${e.activeIndex}"`,`  type="${e.type}"`,`  prefix="${e.prefix}"`,`  :isDisabled="${e.isDisabled}"`,`  className="${e.className}"`,"></Tabs>","<Tabs",'  themeColor="error"',`  :dataSource="${t}"`,`  :activeIndex="${e.activeIndex}"`,`  type="${e.type}"`,`  prefix="${e.prefix}"`,`  :isDisabled="${e.isDisabled}"`,`  className="${e.className}"`,"></Tabs>"].join(`
`).trim()}}}}};var y,f,v;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(v=(f=o.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};var S,$,D;c.parameters={...c.parameters,docs:{...(S=c.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
                    type="basic"
                    :prefix="args.prefix"
                    :isDisabled="args.isDisabled"
                    :className="args.className"
                ></Tabs>
                <Tabs
                    :themeColor="args.themeColor"
                    :dataSource="args.dataSource"
                    :activeIndex="args.activeIndex"
                    type="outline"
                    :prefix="args.prefix"
                    :isDisabled="args.isDisabled"
                    :className="args.className"
                ></Tabs>
                <Tabs
                    :themeColor="args.themeColor"
                    :dataSource="args.dataSource"
                    :activeIndex="args.activeIndex"
                    type="button"
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
          return ['<Tabs', \`  themeColor="\${args.themeColor}"\`, \`  :dataSource="\${dataSourceString}"\`, \`  :activeIndex="\${args.activeIndex}"\`, \`  type="basic"\`, \`  prefix="\${args.prefix}"\`, \`  :isDisabled="\${args.isDisabled}"\`, \`  className="\${args.className}"\`, '></Tabs>', '<Tabs', \`  themeColor="\${args.themeColor}"\`, \`  :dataSource="\${dataSourceString}"\`, \`  :activeIndex="\${args.activeIndex}"\`, \`  type="outline"\`, \`  prefix="\${args.prefix}"\`, \`  :isDisabled="\${args.isDisabled}"\`, \`  className="\${args.className}"\`, '></Tabs>', '<Tabs', \`  themeColor="\${args.themeColor}"\`, \`  :dataSource="\${dataSourceString}"\`, \`  :activeIndex="\${args.activeIndex}"\`, \`  type="button"\`, \`  prefix="\${args.prefix}"\`, \`  :isDisabled="\${args.isDisabled}"\`, \`  className="\${args.className}"\`, '></Tabs>'].join('\\n').trim();
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
    type: "basic",
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
}`,...(N=(C=l.parameters)==null?void 0:C.docs)==null?void 0:N.source}}};const K=["DefaultTabs","TabsTypesStory","TabsColorStory"];export{o as DefaultTabs,l as TabsColorStory,c as TabsTypesStory,K as __namedExportsOrder,J as default};

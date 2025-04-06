import{j as I,o as n,e as _,c as p,d as A,a as m,b as V,t as h,n as l,v as E,w as k,F as B,q as j}from"./vue.esm-bundler-CC1hEtM-.js";import{_ as F}from"./Button-CjD1vpee.js";import{_ as U}from"./Icon-C3V5hff5.js";const W={key:0,class:"ded-icon"},w={__name:"TabItem",props:{themeColor:{type:String,validator:s=>["primary","secondary","neutral","info","success","warning","error"].includes(s)},type:{type:String,default:"basic",validator:s=>["basic","outline","button"].includes(s)},prefix:{type:String},title:{type:String,default:"頁籤 1"},index:{type:Number},isActive:{type:Boolean},isDisabled:{type:Boolean,default:!1},onClick:{type:Function},className:{type:String,default:""}},setup(s){const a=s;function e(t){!a.isDisabled&&a.onClick&&a.onClick(t)}return(t,r)=>(n(),I(F,{"theme-color":a.themeColor,variant:a.type==="button"?"filled":"text","is-disabled":a.isDisabled,"data-index":a.index,class:l({"ded-tab ":a.type!=="button",[`ded-tab-${a.themeColor}`]:a.type==="basic",[`ded-tab-${a.themeColor}-active`]:a.isActive&&a.type==="basic","ded-tab-disable":a.isDisabled&&a.type==="basic"||a.isDisabled&&a.type==="outline",[`ded-tab-outline-${a.themeColor}`]:a.themeColor&&a.type==="outline",[`ded-tab-outline-${a.themeColor}-active`]:a.isActive&&a.type==="outline","ded-tab-button ":!a.isActive&&a.type==="button",[`ded-tab-button-${a.themeColor}`]:a.themeColor&&a.type==="button",[`ded-tab-button-${a.themeColor}-active`]:a.isActive&&a.type==="button","ded-tab-button-disable":a.isDisabled&&a.type==="button"}),onClick:e},{default:_(()=>[a.prefix?(n(),p("span",W,[V(U,{name:"SvgArrowDown"})])):A("",!0),m("span",null,h(a.title),1)]),_:1},8,["theme-color","variant","is-disabled","data-index","class"]))}};w.__docgenInfo={exportName:"default",displayName:"TabItem",description:"",tags:{},props:[{name:"themeColor",type:{name:"string"},values:["primary","secondary","neutral","info","success","warning","error"]},{name:"type",type:{name:"string"},defaultValue:{func:!1,value:'"basic"'},values:["basic","outline","button"]},{name:"prefix",type:{name:"string"}},{name:"title",type:{name:"string"},defaultValue:{func:!1,value:'"頁籤 1"'}},{name:"index",type:{name:"number"}},{name:"isActive",type:{name:"boolean"}},{name:"isDisabled",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"onClick",type:{name:"func"}},{name:"className",type:{name:"string"},defaultValue:{func:!1,value:'""'}}],sourceFiles:["/home/runner/work/DED-WDS_VUE/DED-WDS_VUE/libs/src/ui/element/Tabs/TabItem.vue"]};const i={__name:"Tabs",props:{themeColor:{type:String,default:"primary",validator:s=>["primary","secondary","neutral","info","success","warning","error"].includes(s)},dataSource:{type:Array,required:!0,validator:s=>s.every(a=>typeof a.title=="string"&&typeof a.content=="string")},activeIndex:{type:Number,default:0},type:{type:String,default:"basic",validator:s=>["basic","outline","button"].includes(s)},prefix:{type:String,default:""},isDisabled:{type:Boolean,default:!1},className:{type:String,default:""}},setup(s){const a=s,e=E(a.activeIndex||0);function t(r){e.value=Number.parseInt(r.currentTarget.dataset.index,10)}return k(()=>a.activeIndex,r=>{e.value=r||0}),(r,q)=>{var g;return n(),p("div",{class:l(["ded-tabs-container",{[a.className]:!!a.className}])},[m("div",{class:l(["ded-tabs",{"ded-tabs-button":a.type==="button"}])},[(n(!0),p(B,null,j(a.dataSource,(x,u)=>(n(),I(w,{key:u,"theme-color":a.themeColor,title:x.title,type:a.type,prefix:a.prefix,index:u,"is-active":u===e.value,"is-disabled":a.isDisabled||x.isDisabled,onClick:t},null,8,["theme-color","title","type","prefix","index","is-active","is-disabled"]))),128))],2),m("div",{class:l(["ded-tab-content",[{"ded-tab-disable":a.isDisabled}]])},h((g=a.dataSource[e.value])==null?void 0:g.content),3)],2)}}};i.__docgenInfo={exportName:"default",displayName:"Tabs",description:"",tags:{},props:[{name:"themeColor",type:{name:"string"},defaultValue:{func:!1,value:'"primary"'},values:["primary","secondary","neutral","info","success","warning","error"]},{name:"dataSource",type:{name:"array"},required:!0},{name:"activeIndex",type:{name:"number"},defaultValue:{func:!1,value:"0"}},{name:"type",type:{name:"string"},defaultValue:{func:!1,value:'"basic"'},values:["basic","outline","button"]},{name:"prefix",type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"isDisabled",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"className",type:{name:"string"},defaultValue:{func:!1,value:'""'}}],sourceFiles:["/home/runner/work/DED-WDS_VUE/DED-WDS_VUE/libs/src/ui/element/Tabs/Tabs.vue"]};function b(s){return`    ${s.map(a=>`{
        title: "${a.title}",
        content: "${a.content}",
    }`).join(`,
    `)}`}const G={title:"Component/Tabs",component:i,tags:["Tabs"],argTypes:{themeColor:{description:"主題顏色",control:{type:"select"},options:["primary","secondary","neutral","info","success","warning","error"],table:{type:{summary:"primary | secondary | neutral | info | success | warning | error"}}},dataSource:{description:"資料來源",control:{type:"object"},table:{type:{summary:"{ title: string; content: VNode; }[]"}}},activeIndex:{description:"活動頁籤索引",control:{type:"number",min:0,max:2,step:1}},type:{description:"頁籤樣式",control:{type:"select"},options:["basic","outline","button"],table:{type:{summary:"basic | outline | button "}}},prefix:{description:"前綴元素",control:{type:"select",labels:{"":"none",SvgArrowDown:"SvgArrowDown"}},options:["","SvgArrowDown"]},isDisabled:{description:"是否禁用",control:{type:"boolean"}},className:{description:"客製化樣式",control:{type:"text"}}},parameters:{docs:{title:"Tabs",description:{component:"頁籤組件的呈現及說明。"}}}},o={name:"預設項目",args:{themeColor:"primary",dataSource:[{title:"Tab 1",content:"Content 1"},{title:"Tab 2",content:"Content 2"},{title:"Tab 3",content:"Content 3"}],activeIndex:0,type:"basic",prefix:"SvgArrowDown",isDisabled:!1,className:""},render:s=>({components:{Tabs:i},setup(){return{args:s}},template:`
      <Tabs
        :themeColor="args.themeColor"
        :dataSource="args.dataSource"
        :activeIndex="args.activeIndex"
        :type="args.type"
        :prefix="args.prefix"
        :isDisabled="args.isDisabled"
        :className="args.className"
      ></Tabs>`}),parameters:{controls:{},docs:{source:{transform:(s,a)=>{const{args:e}=a;return["<script setup>",'import { Tabs } from "@ded-wds-vue/ui";',"const dataSource = [",`${b(e.dataSource)}`,"];","<\/script>","","<template>","  <Tabs",`    ${e.themeColor?`themeColor="${e.themeColor}"`:""}`,'    :dataSource="dataSource"',`    ${e.activeIndex!==void 0?`:activeIndex="${e.activeIndex}"`:""}`,`    ${e.type?`type="${e.type}"`:""}`,`    ${e.prefix?`prefix="${e.prefix}"`:""}`,`    ${e.isDisabled!==void 0?`:isDisabled="${e.isDisabled}"`:""}`,`    ${e.className?`className="${e.className}"`:""}`,"  ></Tabs>","</template>"].filter(Boolean).join(`
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
      </div>`}),parameters:{controls:{exclude:["type"]},docs:{source:{transform:(s,a)=>{const{args:e}=a;return["<script setup>",'import { Tabs } from "@ded-wds-vue/ui";',"const dataSource = [",`${b(e.dataSource)}`,"];","<\/script>","","<template>","  <Tabs",`    ${e.themeColor?`themeColor="${e.themeColor}"`:""}`,'    :dataSource="dataSource"',`    ${e.activeIndex!==void 0?`:activeIndex="${e.activeIndex}"`:""}`,'    type="basic"',`    ${e.prefix?`prefix="${e.prefix}"`:""}`,`    ${e.isDisabled!==void 0?`:isDisabled="${e.isDisabled}"`:""}`,`    ${e.className?`className="${e.className}"`:""}`,"  ></Tabs>","  <Tabs",`    ${e.themeColor?`themeColor="${e.themeColor}"`:""}`,'    :dataSource="dataSource"',`    ${e.activeIndex!==void 0?`:activeIndex="${e.activeIndex}"`:""}`,'    type="outline"',`    ${e.prefix?`prefix="${e.prefix}"`:""}`,`    ${e.isDisabled!==void 0?`:isDisabled="${e.isDisabled}"`:""}`,`    ${e.className?`className="${e.className}"`:""}`,"  ></Tabs>","  <Tabs",`    ${e.themeColor?`themeColor="${e.themeColor}"`:""}`,'    :dataSource="dataSource"',`    ${e.activeIndex!==void 0?`:activeIndex="${e.activeIndex}"`:""}`,'    type="button"',`    ${e.prefix?`prefix="${e.prefix}"`:""}`,`    ${e.isDisabled!==void 0?`:isDisabled="${e.isDisabled}"`:""}`,`    ${e.className?`className="${e.className}"`:""}`,"  ></Tabs>","</template>"].filter(Boolean).join(`
`).trim()}}}}},d={name:"主題色彩",args:{dataSource:[{title:"Tab 1",content:"Content 1"},{title:"Tab 2",content:"Content 2"},{title:"Tab 3",content:"Content 3"}],activeIndex:0,type:"button",prefix:"SvgArrowDown",isDisabled:!1,className:""},render:s=>({components:{Tabs:i},setup(){return{args:s}},template:`
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
      </div>`}),parameters:{controls:{exclude:["themeColor"]},docs:{source:{transform:(s,a)=>{const{args:e}=a;return["<script setup>",'import { Tabs } from "@ded-wds-vue/ui";',"const dataSource = [",`${b(e.dataSource)}`,"];","<\/script>","","<template>","  <Tabs",'    themeColor="primary"','    :dataSource="dataSource"',`    ${e.activeIndex!==void 0?`:activeIndex="${e.activeIndex}"`:""}`,`    ${e.type?`type="${e.type}"`:""}`,`    ${e.prefix?`prefix="${e.prefix}"`:""}`,`    ${e.isDisabled!==void 0?`:isDisabled="${e.isDisabled}"`:""}`,`    ${e.className?`className="${e.className}"`:""}`,"  ></Tabs>","  <Tabs",'    themeColor="secondary"','    :dataSource="dataSource"',`    ${e.activeIndex!==void 0?`:activeIndex="${e.activeIndex}"`:""}`,`    ${e.type?`type="${e.type}"`:""}`,`    ${e.prefix?`prefix="${e.prefix}"`:""}`,`    ${e.isDisabled!==void 0?`:isDisabled="${e.isDisabled}"`:""}`,`    ${e.className?`className="${e.className}"`:""}`,"  ></Tabs>","  <Tabs",'    themeColor="neutral"','    :dataSource="dataSource"',`    ${e.activeIndex!==void 0?`:activeIndex="${e.activeIndex}"`:""}`,`    ${e.type?`type="${e.type}"`:""}`,`    ${e.prefix?`prefix="${e.prefix}"`:""}`,`    ${e.isDisabled!==void 0?`:isDisabled="${e.isDisabled}"`:""}`,`    ${e.className?`className="${e.className}"`:""}`,"  ></Tabs>","  <Tabs",'    themeColor="info"','    :dataSource="dataSource"',`    ${e.activeIndex!==void 0?`:activeIndex="${e.activeIndex}"`:""}`,`    ${e.type?`type="${e.type}"`:""}`,`    ${e.prefix?`prefix="${e.prefix}"`:""}`,`    ${e.isDisabled!==void 0?`:isDisabled="${e.isDisabled}"`:""}`,`    ${e.className?`className="${e.className}"`:""}`,"  ></Tabs>","  <Tabs",'    themeColor="success"','    :dataSource="dataSource"',`    ${e.activeIndex!==void 0?`:activeIndex="${e.activeIndex}"`:""}`,`    ${e.type?`type="${e.type}"`:""}`,`    ${e.prefix?`prefix="${e.prefix}"`:""}`,`    ${e.isDisabled!==void 0?`:isDisabled="${e.isDisabled}"`:""}`,`    ${e.className?`className="${e.className}"`:""}`,"  ></Tabs>","  <Tabs",'    themeColor="warning"','    :dataSource="dataSource"',`    ${e.activeIndex!==void 0?`:activeIndex="${e.activeIndex}"`:""}`,`    ${e.type?`type="${e.type}"`:""}`,`    ${e.prefix?`prefix="${e.prefix}"`:""}`,`    ${e.isDisabled!==void 0?`:isDisabled="${e.isDisabled}"`:""}`,`    ${e.className?`className="${e.className}"`:""}`,"  ></Tabs>","  <Tabs",'    themeColor="error"','    :dataSource="dataSource"',`    ${e.activeIndex!==void 0?`:activeIndex="${e.activeIndex}"`:""}`,`    ${e.type?`type="${e.type}"`:""}`,`    ${e.prefix?`prefix="${e.prefix}"`:""}`,`    ${e.isDisabled!==void 0?`:isDisabled="${e.isDisabled}"`:""}`,`    ${e.className?`className="${e.className}"`:""}`,"  ></Tabs>","</template>"].filter(Boolean).join(`
`).trim()}}}}};var f,$,y;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
  name: "預設項目",
  args: {
    themeColor: "primary",
    dataSource: [{
      title: "Tab 1",
      content: "Content 1"
    }, {
      title: "Tab 2",
      content: "Content 2"
    }, {
      title: "Tab 3",
      content: "Content 3"
    }],
    activeIndex: 0,
    type: "basic",
    prefix: "SvgArrowDown",
    isDisabled: false,
    className: ""
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
      ></Tabs>\`
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
          return [\`<script setup>\`, \`import { Tabs } from "@ded-wds-vue/ui";\`, \`const dataSource = [\`, \`\${dataSourceString}\`, \`];\`, \`<\/script>\`, "", "<template>", "  <Tabs", \`    \${args.themeColor ? \`themeColor="\${args.themeColor}"\` : ""}\`, \`    :dataSource="dataSource"\`, \`    \${args.activeIndex !== undefined ? \`:activeIndex="\${args.activeIndex}"\` : ""}\`, \`    \${args.type ? \`type="\${args.type}"\` : ""}\`, \`    \${args.prefix ? \`prefix="\${args.prefix}"\` : ""}\`, \`    \${args.isDisabled !== undefined ? \`:isDisabled="\${args.isDisabled}"\` : ""}\`, \`    \${args.className ? \`className="\${args.className}"\` : ""}\`, "  ></Tabs>", "</template>"].filter(Boolean).join("\\n").trim();
        }
      }
    }
  }
}`,...(y=($=o.parameters)==null?void 0:$.docs)==null?void 0:y.source}}};var v,S,D;c.parameters={...c.parameters,docs:{...(v=c.parameters)==null?void 0:v.docs,source:{originalSource:'{\n  name: "頁籤類型",\n  args: {\n    themeColor: "primary",\n    dataSource: [{\n      title: "Tab 1",\n      content: "Content 1"\n    }, {\n      title: "Tab 2",\n      content: "Content 2"\n    }, {\n      title: "Tab 3",\n      content: "Content 3"\n    }],\n    activeIndex: 0,\n    // type: "default",\n    prefix: "SvgArrowDown",\n    isDisabled: false,\n    className: ""\n  },\n  render: args => ({\n    components: {\n      Tabs\n    },\n    setup() {\n      return {\n        args\n      };\n    },\n    template: `\n      <div style="display:flex; flex-direction: column; gap:24px">\n        <Tabs\n          :themeColor="args.themeColor"\n          :dataSource="args.dataSource"\n          :activeIndex="args.activeIndex"\n          type="basic"\n          :prefix="args.prefix"\n          :isDisabled="args.isDisabled"\n          :className="args.className"\n        ></Tabs>\n        <Tabs\n          :themeColor="args.themeColor"\n          :dataSource="args.dataSource"\n          :activeIndex="args.activeIndex"\n          type="outline"\n          :prefix="args.prefix"\n          :isDisabled="args.isDisabled"\n          :className="args.className"\n        ></Tabs>\n        <Tabs\n          :themeColor="args.themeColor"\n          :dataSource="args.dataSource"\n          :activeIndex="args.activeIndex"\n          type="button"\n          :prefix="args.prefix"\n          :isDisabled="args.isDisabled"\n          :className="args.className"\n        ></Tabs>\n      </div>`\n  }),\n  // 控制 controls 中能控制的參數\n  parameters: {\n    controls: {\n      // include: [\'themeColor\', \'label\', \'value\', \'name\' ],\n      exclude: ["type"]\n    },\n    docs: {\n      source: {\n        transform: (src, storyContext) => {\n          const {\n            args\n          } = storyContext;\n          const dataSourceString = formatDataSource(args.dataSource);\n          return [`<script setup>`, `import { Tabs } from "@ded-wds-vue/ui";`, `const dataSource = [`, `${dataSourceString}`, `];`, `<\/script>`, "", "<template>", "  <Tabs", `    ${args.themeColor ? `themeColor="${args.themeColor}"` : ""}`, `    :dataSource="dataSource"`, `    ${args.activeIndex !== undefined ? `:activeIndex="${args.activeIndex}"` : ""}`, `    type="basic"`, `    ${args.prefix ? `prefix="${args.prefix}"` : ""}`, `    ${args.isDisabled !== undefined ? `:isDisabled="${args.isDisabled}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, "  ></Tabs>", "  <Tabs", `    ${args.themeColor ? `themeColor="${args.themeColor}"` : ""}`, `    :dataSource="dataSource"`, `    ${args.activeIndex !== undefined ? `:activeIndex="${args.activeIndex}"` : ""}`, `    type="outline"`, `    ${args.prefix ? `prefix="${args.prefix}"` : ""}`, `    ${args.isDisabled !== undefined ? `:isDisabled="${args.isDisabled}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, "  ></Tabs>", "  <Tabs", `    ${args.themeColor ? `themeColor="${args.themeColor}"` : ""}`, `    :dataSource="dataSource"`, `    ${args.activeIndex !== undefined ? `:activeIndex="${args.activeIndex}"` : ""}`, `    type="button"`, `    ${args.prefix ? `prefix="${args.prefix}"` : ""}`, `    ${args.isDisabled !== undefined ? `:isDisabled="${args.isDisabled}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, "  ></Tabs>", "</template>"].filter(Boolean).join("\\n").trim();\n        }\n      }\n    }\n  }\n}',...(D=(S=c.parameters)==null?void 0:S.docs)==null?void 0:D.source}}};var T,C,N;d.parameters={...d.parameters,docs:{...(T=d.parameters)==null?void 0:T.docs,source:{originalSource:'{\n  name: "主題色彩",\n  args: {\n    // themeColor: "primary",\n    dataSource: [{\n      title: "Tab 1",\n      content: "Content 1"\n    }, {\n      title: "Tab 2",\n      content: "Content 2"\n    }, {\n      title: "Tab 3",\n      content: "Content 3"\n    }],\n    activeIndex: 0,\n    type: "button",\n    prefix: "SvgArrowDown",\n    isDisabled: false,\n    className: ""\n  },\n  render: args => ({\n    components: {\n      Tabs\n    },\n    setup() {\n      return {\n        args\n      };\n    },\n    template: `\n      <div style="display:flex; flex-direction: column; gap:16px">\n        <Tabs\n          themeColor="primary"\n          :dataSource="args.dataSource"\n          :activeIndex="args.activeIndex"\n          :type="args.type"\n          :prefix="args.prefix"\n          :isDisabled="args.isDisabled"\n          :className="args.className"\n        ></Tabs>\n        <Tabs\n          themeColor="secondary"\n          :dataSource="args.dataSource"\n          :activeIndex="args.activeIndex"\n          :type="args.type"\n          :prefix="args.prefix"\n          :isDisabled="args.isDisabled"\n          :className="args.className"\n        ></Tabs>\n        <Tabs\n          themeColor="neutral"\n          :dataSource="args.dataSource"\n          :activeIndex="args.activeIndex"\n          :type="args.type"\n          :prefix="args.prefix"\n          :isDisabled="args.isDisabled"\n          :className="args.className"\n        ></Tabs>\n        <Tabs\n          themeColor="info"\n          :dataSource="args.dataSource"\n          :activeIndex="args.activeIndex"\n          :type="args.type"\n          :prefix="args.prefix"\n          :isDisabled="args.isDisabled"\n          :className="args.className"\n        ></Tabs>\n        <Tabs\n          themeColor="success"\n          :dataSource="args.dataSource"\n          :activeIndex="args.activeIndex"\n          :type="args.type"\n          :prefix="args.prefix"\n          :isDisabled="args.isDisabled"\n          :className="args.className"\n        ></Tabs>\n        <Tabs\n          themeColor="warning"\n          :dataSource="args.dataSource"\n          :activeIndex="args.activeIndex"\n          :type="args.type"\n          :prefix="args.prefix"\n          :isDisabled="args.isDisabled"\n          :className="args.className"\n        ></Tabs>\n        <Tabs\n          themeColor="error"\n          :dataSource="args.dataSource"\n          :activeIndex="args.activeIndex"\n          :type="args.type"\n          :prefix="args.prefix"\n          :isDisabled="args.isDisabled"\n          :className="args.className"\n        ></Tabs>\n      </div>`\n  }),\n  // 控制 controls 中能控制的參數\n  parameters: {\n    controls: {\n      // include: [\'themeColor\', \'label\', \'value\', \'name\' ],\n      exclude: ["themeColor"]\n    },\n    docs: {\n      source: {\n        transform: (src, storyContext) => {\n          const {\n            args\n          } = storyContext;\n          const dataSourceString = formatDataSource(args.dataSource);\n          return [`<script setup>`, `import { Tabs } from "@ded-wds-vue/ui";`, `const dataSource = [`, `${dataSourceString}`, `];`, `<\/script>`, "", "<template>", "  <Tabs", `    themeColor="primary"`, `    :dataSource="dataSource"`, `    ${args.activeIndex !== undefined ? `:activeIndex="${args.activeIndex}"` : ""}`, `    ${args.type ? `type="${args.type}"` : ""}`, `    ${args.prefix ? `prefix="${args.prefix}"` : ""}`, `    ${args.isDisabled !== undefined ? `:isDisabled="${args.isDisabled}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, "  ></Tabs>", "  <Tabs", `    themeColor="secondary"`, `    :dataSource="dataSource"`, `    ${args.activeIndex !== undefined ? `:activeIndex="${args.activeIndex}"` : ""}`, `    ${args.type ? `type="${args.type}"` : ""}`, `    ${args.prefix ? `prefix="${args.prefix}"` : ""}`, `    ${args.isDisabled !== undefined ? `:isDisabled="${args.isDisabled}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, "  ></Tabs>", "  <Tabs", `    themeColor="neutral"`, `    :dataSource="dataSource"`, `    ${args.activeIndex !== undefined ? `:activeIndex="${args.activeIndex}"` : ""}`, `    ${args.type ? `type="${args.type}"` : ""}`, `    ${args.prefix ? `prefix="${args.prefix}"` : ""}`, `    ${args.isDisabled !== undefined ? `:isDisabled="${args.isDisabled}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, "  ></Tabs>", "  <Tabs", `    themeColor="info"`, `    :dataSource="dataSource"`, `    ${args.activeIndex !== undefined ? `:activeIndex="${args.activeIndex}"` : ""}`, `    ${args.type ? `type="${args.type}"` : ""}`, `    ${args.prefix ? `prefix="${args.prefix}"` : ""}`, `    ${args.isDisabled !== undefined ? `:isDisabled="${args.isDisabled}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, "  ></Tabs>", "  <Tabs", `    themeColor="success"`, `    :dataSource="dataSource"`, `    ${args.activeIndex !== undefined ? `:activeIndex="${args.activeIndex}"` : ""}`, `    ${args.type ? `type="${args.type}"` : ""}`, `    ${args.prefix ? `prefix="${args.prefix}"` : ""}`, `    ${args.isDisabled !== undefined ? `:isDisabled="${args.isDisabled}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, "  ></Tabs>", "  <Tabs", `    themeColor="warning"`, `    :dataSource="dataSource"`, `    ${args.activeIndex !== undefined ? `:activeIndex="${args.activeIndex}"` : ""}`, `    ${args.type ? `type="${args.type}"` : ""}`, `    ${args.prefix ? `prefix="${args.prefix}"` : ""}`, `    ${args.isDisabled !== undefined ? `:isDisabled="${args.isDisabled}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, "  ></Tabs>", "  <Tabs", `    themeColor="error"`, `    :dataSource="dataSource"`, `    ${args.activeIndex !== undefined ? `:activeIndex="${args.activeIndex}"` : ""}`, `    ${args.type ? `type="${args.type}"` : ""}`, `    ${args.prefix ? `prefix="${args.prefix}"` : ""}`, `    ${args.isDisabled !== undefined ? `:isDisabled="${args.isDisabled}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, "  ></Tabs>", "</template>"].filter(Boolean).join("\\n").trim();\n        }\n      }\n    }\n  }\n}',...(N=(C=d.parameters)==null?void 0:C.docs)==null?void 0:N.source}}};const H=["DefaultTabs","TabsTypesStory","TabsColorStory"];export{o as DefaultTabs,d as TabsColorStory,c as TabsTypesStory,H as __namedExportsOrder,G as default};

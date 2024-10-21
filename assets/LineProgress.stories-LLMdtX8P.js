import{g as u,c as d,b as s,t as o,C as l,n as i,F as g,o as y}from"./vendor-DM7lYiMX.js";const f={class:"progress-line-label"},h={class:"progress-line-percent"},t={__name:"LineProgress",props:{label:{type:String,default:"label"},percent:{type:Number,default:66},strokeWidth:{type:Number,default:10},themeColor:{type:String,default:"primary",validator:r=>["primary","secondary","tertiary","success","warning","error","info"].includes(r)},className:{type:String,default:""}},setup(r){const e=r,n=u(()=>Math.min(Math.max(e.percent,0),100));return(b,P)=>(y(),d(g,null,[s("div",f,o(e.label),1),s("div",{class:i({"progress-line":!0,[e.className]:!!e.className})},[s("div",{class:"progress-line-track",style:l({height:`${e.strokeWidth}px`})},[s("div",{class:i(`progress-line-percent-${e.themeColor}`),style:l({width:`${n.value}%`})},null,6)],4),s("div",h,o(`${n.value}%`),1)],2)],64))}};t.__docgenInfo={exportName:"default",displayName:"LineProgress",description:"",tags:{},props:[{name:"label",type:{name:"string"},defaultValue:{func:!1,value:'"label"'}},{name:"percent",type:{name:"number"},defaultValue:{func:!1,value:"66"}},{name:"strokeWidth",type:{name:"number"},defaultValue:{func:!1,value:"10"}},{name:"themeColor",type:{name:"string"},defaultValue:{func:!1,value:'"primary"'},values:["primary","secondary","tertiary","success","warning","error","info"]},{name:"className",type:{name:"string"},defaultValue:{func:!1,value:"''"}}],sourceFiles:["D:/98_測試/up/DED-WDS_VUE/libs/src/ui/element/Progress/LineProgress/LineProgress.vue"]};const C={title:"Design System/Progress-Line",component:t,tags:["autodocs"],argTypes:{label:{description:"進度指示標籤",control:{type:"text"}},percent:{description:"進度",control:{type:"range",min:0,max:100,step:1},defaultValue:66},strokeWidth:{description:"線條寬度",control:{type:"range",min:1,max:20,step:1}},themeColor:{description:"主題顏色",control:{type:"select"},options:["primary","secondary","tertiary","success","warning","error","info"]},className:{description:"客製化樣式",control:{type:"text"}}},parameters:{docs:{title:"LineProgress",description:{component:"LineProgress 組件的呈現及說明。"}}}},a={name:"主要項目",args:{label:"Complete",percent:66,strokeWidth:10,themeColor:"primary",className:""},render:r=>({components:{LineProgress:t},setup(){return{args:r}},template:`
            <LineProgress 
                :label="args.label"
                :percent="args.percent"
                :strokeWidth="args.strokeWidth"
                :themeColor="args.themeColor"
                :className="args.className"
            ></LineProgress>
        `}),parameters:{controls:{}}};var c,m,p;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  name: "主要項目",
  args: {
    label: "Complete",
    percent: 66,
    strokeWidth: 10,
    themeColor: "primary",
    className: ''
  },
  render: args => ({
    components: {
      LineProgress
    },
    setup() {
      // Create a ref for modelValue to be used with v-model
      return {
        args
      };
    },
    template: \`
            <LineProgress 
                :label="args.label"
                :percent="args.percent"
                :strokeWidth="args.strokeWidth"
                :themeColor="args.themeColor"
                :className="args.className"
            ></LineProgress>
        \`
  }),
  // 控制 controls 中能控制的參數
  parameters: {
    controls: {
      // include: ['themeColor', 'label', 'value', 'name' ],
    }
  }
}`,...(p=(m=a.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const _=["DefaultLineProgress"];export{a as DefaultLineProgress,_ as __namedExportsOrder,C as default};
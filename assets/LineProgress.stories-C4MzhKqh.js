import{g as m,c as d,a as r,t as a,l as o,F as g,o as y}from"./vue.esm-bundler-5cDHsWFH.js";const h={class:"progress-line-label"},f={class:"progress-line"},b={class:"progress-line-percent"},p={__name:"LineProgress",props:{themeColor:{type:String,default:"primary",validator:e=>["primary","secondary","tertiary","success","warning","error","info"].includes(e)},label:{type:String,default:"label"},percent:{type:Number,default:66},strokeWidth:{type:Number,default:10}},setup(e){const t=e,n=m(()=>Math.min(Math.max(t.percent,0),100));return(_,P)=>(y(),d(g,null,[r("div",h,a(t.label),1),r("div",f,[r("div",{class:"progress-line-track",style:o({height:`${t.strokeWidth}px`})},[r("div",{class:"progress-line-percent-primary",style:o({width:`${n.value}%`})},null,4)],4),r("div",b,a(`${n.value}%`),1)])],64))}},u=p;p.__docgenInfo={exportName:"default",displayName:"LineProgress",description:"",tags:{},props:[{name:"themeColor",type:{name:"string"},defaultValue:{func:!1,value:'"primary"'},values:["primary","secondary","tertiary","success","warning","error","info"]},{name:"label",type:{name:"string"},defaultValue:{func:!1,value:'"label"'}},{name:"percent",type:{name:"number"},defaultValue:{func:!1,value:"66"}},{name:"strokeWidth",type:{name:"number"},defaultValue:{func:!1,value:"10"}}],sourceFiles:["/Users/auouser/Desktop/Work_Space/DED-WDS_VUE/libs/src/ui/element/Progress/LineProgress/LineProgress.vue"]};const k={title:"Design System/Progress/LineProgress",component:u,tags:["autodocs"],argTypes:{themeColor:{description:"主題顏色",control:{type:"select"},options:["primary","secondary","tertiary","success","warning","error","info"]},label:{description:"線形進度條標題",control:{type:"text"}},percent:{description:"線形進度條進度",control:{type:"range",min:0,max:100,step:1},defaultValue:66},strokeWidth:{description:"線形進度條寬度",control:{type:"range",min:1,max:20,step:1}}},parameters:{docs:{title:"線形進度條",description:{component:"線形進度條組件的呈現及說明。"}}}},s={name:"線形進度條",args:{label:"Complete",percent:66,strokeWidth:10,themeColor:"primary"},render:e=>({components:{LineProgress:u},setup(){return{args:e}},template:`
            <LineProgress 
                :label="args.label"
                :percent="args.percent"
                :strokeWidth="args.strokeWidth"
                :themeColor="args.themeColor"
            ></LineProgress>
        `}),parameters:{controls:{}}};var l,i,c;s.parameters={...s.parameters,docs:{...(l=s.parameters)==null?void 0:l.docs,source:{originalSource:`{
  name: "線形進度條",
  args: {
    label: "Complete",
    percent: 66,
    strokeWidth: 10,
    themeColor: "primary"
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
            ></LineProgress>
        \`
  }),
  // 控制 controls 中能控制的參數
  parameters: {
    controls: {
      // include: ['themeColor', 'label', 'value', 'name' ],
    }
  }
}`,...(c=(i=s.parameters)==null?void 0:i.docs)==null?void 0:c.source}}};const C=["DefaultLineProgress"];export{s as DefaultLineProgress,C as __namedExportsOrder,k as default};

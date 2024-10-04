import{c as u,a as m,b as r,t as o,m as l,F as d,o as g}from"./vue.esm-bundler-CsTC-5Ev.js";const y={class:"progress-line-label"},h={class:"progress-line"},f={class:"progress-line-percent"},n={__name:"LineProgress",props:{themeColor:{type:String,default:"primary",validator:e=>["primary","secondary","tertiary","success","warning","error","info"].includes(e)},label:{type:String,default:"label"},percent:{type:Number,default:66},strokeWidth:{type:Number,default:10}},setup(e){const t=e,a=u(()=>Math.min(Math.max(t.percent,0),100));return(b,_)=>(g(),m(d,null,[r("div",y,o(t.label),1),r("div",h,[r("div",{class:"progress-line-track",style:l({height:`${t.strokeWidth}px`})},[r("div",{class:"progress-line-percent-primary",style:l({width:`${a.value}%`})},null,4)],4),r("div",f,o(`${a.value}%`),1)])],64))}};n.__docgenInfo={exportName:"default",displayName:"LineProgress",description:"",tags:{},props:[{name:"themeColor",type:{name:"string"},defaultValue:{func:!1,value:'"primary"'},values:["primary","secondary","tertiary","success","warning","error","info"]},{name:"label",type:{name:"string"},defaultValue:{func:!1,value:'"label"'}},{name:"percent",type:{name:"number"},defaultValue:{func:!1,value:"66"}},{name:"strokeWidth",type:{name:"number"},defaultValue:{func:!1,value:"10"}}],sourceFiles:["/Users/auouser/Desktop/Work_Space/DED-WDS_VUE/libs/src/ui/element/Progress/LineProgress/LineProgress.vue"]};const v={title:"Design System/Progress/LineProgress",component:n,tags:["autodocs"],argTypes:{themeColor:{description:"主題顏色",control:{type:"select"},options:["primary","secondary","tertiary","success","warning","error","info"]},label:{description:"線形進度條標題",control:{type:"text"}},percent:{description:"線形進度條進度",control:{type:"range",min:0,max:100,step:1},defaultValue:66},strokeWidth:{description:"線形進度條寬度",control:{type:"range",min:1,max:20,step:1}}},parameters:{docs:{title:"線形進度條",description:{component:"線形進度條組件的呈現及說明。"}}}},s={name:"線形進度條",args:{label:"Complete",percent:66,strokeWidth:10,themeColor:"primary"},render:e=>({components:{LineProgress:n},setup(){return{args:e}},template:`
            <LineProgress 
                :label="args.label"
                :percent="args.percent"
                :strokeWidth="args.strokeWidth"
                :themeColor="args.themeColor"
            ></LineProgress>
        `}),parameters:{controls:{}}};var i,c,p;s.parameters={...s.parameters,docs:{...(i=s.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(p=(c=s.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};const k=["DefaultLineProgress"];export{s as DefaultLineProgress,k as __namedExportsOrder,v as default};

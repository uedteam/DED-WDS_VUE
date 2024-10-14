import{f as u,c as m,b as r,t as a,x as l,F as g,o as d}from"./vue.esm-bundler-Bm7qTojY.js";const y={class:"progress-line-label"},f={class:"progress-line"},h={class:"progress-line-percent"},n={__name:"LineProgress",props:{label:{type:String,default:"label"},percent:{type:Number,default:66},strokeWidth:{type:Number,default:10},themeColor:{type:String,default:"primary",validator:e=>["primary","secondary","tertiary","success","warning","error","info"].includes(e)}},setup(e){const t=e,o=u(()=>Math.min(Math.max(t.percent,0),100));return(P,L)=>(d(),m(g,null,[r("div",y,a(t.label),1),r("div",f,[r("div",{class:"progress-line-track",style:l({height:`${t.strokeWidth}px`})},[r("div",{class:"progress-line-percent-primary",style:l({width:`${o.value}%`})},null,4)],4),r("div",h,a(`${o.value}%`),1)])],64))}};n.__docgenInfo={exportName:"default",displayName:"LineProgress",description:"",tags:{},props:[{name:"label",type:{name:"string"},defaultValue:{func:!1,value:'"label"'}},{name:"percent",type:{name:"number"},defaultValue:{func:!1,value:"66"}},{name:"strokeWidth",type:{name:"number"},defaultValue:{func:!1,value:"10"}},{name:"themeColor",type:{name:"string"},defaultValue:{func:!1,value:'"primary"'},values:["primary","secondary","tertiary","success","warning","error","info"]}],sourceFiles:["/Users/auouser/Desktop/Work_Space/DED-WDS_VUE/libs/src/ui/element/Progress/LineProgress/LineProgress.vue"]};const _={title:"Design System/Progress/LineProgress",component:n,tags:["autodocs"],argTypes:{label:{description:"顯示在 LineProgress 上的標題文字",control:{type:"text"}},percent:{description:"設置 LineProgress 的進度百分比（0-100）",control:{type:"range",min:0,max:100,step:1},defaultValue:66},strokeWidth:{description:"LineProgress 的直徑大小（單位：像素）",control:{type:"range",min:1,max:20,step:1}},themeColor:{description:"LineProgress 的主題顏色",control:{type:"select"},options:["primary","secondary","tertiary","success","warning","error","info"]}},parameters:{docs:{title:"LineProgress",description:{component:"LineProgress 組件的呈現及說明。"}}}},s={name:"LineProgress 基礎樣式",args:{label:"Complete",percent:66,strokeWidth:10,themeColor:"primary"},render:e=>({components:{LineProgress:n},setup(){return{args:e}},template:`
            <LineProgress 
                :label="args.label"
                :percent="args.percent"
                :strokeWidth="args.strokeWidth"
                :themeColor="args.themeColor"
            ></LineProgress>
        `}),parameters:{controls:{}}};var i,c,p;s.parameters={...s.parameters,docs:{...(i=s.parameters)==null?void 0:i.docs,source:{originalSource:`{
  name: "LineProgress 基礎樣式",
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
}`,...(p=(c=s.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};const v=["DefaultLineProgress"];export{s as DefaultLineProgress,v as __namedExportsOrder,_ as default};

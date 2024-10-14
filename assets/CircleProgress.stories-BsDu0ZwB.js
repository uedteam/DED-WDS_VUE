import{r as h,s as b,w as P,f as t,c as a,b as l,n as z,t as i,e as p,o}from"./vue.esm-bundler-Bm7qTojY.js";const x={class:"progress-circle-container"},_=["width","height"],W=["stroke-width","r","cx","cy"],w=["stroke-width","stroke-dasharray","stroke-dashoffset","r","cx","cy","transform"],V=["y"],D={key:0,class:"progress-circle-label"},g={__name:"CircleProgress",props:{label:{type:String,default:"label"},percent:{type:Number,default:66},size:{type:Number,default:120},strokeWidth:{type:Number,default:10},themeColor:{type:String,default:"primary",validator:r=>["primary","secondary","tertiary","success","warning","error","info"].includes(r)}},setup(r){const e=r,s=h(null),n=h(0);b(()=>{s.value&&(n.value=s.value.getComputedTextLength())}),P(()=>e.label,()=>{s.value&&(n.value=s.value.getComputedTextLength())});const u=t(()=>(e.size-e.strokeWidth)/2),d=t(()=>2*Math.PI*u.value),k=t(()=>d.value-e.percent/100*d.value),f=t(()=>Math.min(Math.max(e.percent,0),100)),m=t(()=>n.value?n.value+e.strokeWidth+30:64);return(S,N)=>(o(),a("div",x,[(o(),a("svg",{class:"progress",width:e.size,height:e.size},[l("circle",{class:"progress-circle-track",fill:"transparent","stroke-width":e.strokeWidth,r:u.value,cx:e.size/2,cy:e.size/2},null,8,W),l("circle",{class:z(`progress-circle-percent-${e.themeColor}`),fill:"transparent","stroke-width":e.strokeWidth,"stroke-dasharray":d.value,"stroke-dashoffset":k.value,"stroke-linecap":"round",r:u.value,cx:e.size/2,cy:e.size/2,transform:`rotate(-90 ${e.size/2} ${e.size/2})`,style:{transition:"stroke-dashoffset 0.35s"}},null,10,w),e.size>=m.value?(o(),a("text",{key:0,ref_key:"textRef",ref:s,x:"50%",y:"45%","text-anchor":"middle","font-size":"1em",fill:"black"},i(e.label),513)):p("",!0),e.size>=m.value?(o(),a("text",{key:1,x:"50%",y:r.label?"60%":"50%","text-anchor":"middle",dy:".3em","font-size":"1.5em",fill:"black"},i(`${f.value}%`),9,V)):p("",!0)],8,_)),r.size<m.value?(o(),a("div",D,[l("span",null,i(e.label),1),l("span",null,i(`${f.value}%`),1)])):p("",!0)]))}};g.__docgenInfo={exportName:"default",displayName:"CircleProgress",description:"",tags:{},props:[{name:"label",type:{name:"string"},defaultValue:{func:!1,value:'"label"'}},{name:"percent",type:{name:"number"},defaultValue:{func:!1,value:"66"}},{name:"size",type:{name:"number"},defaultValue:{func:!1,value:"120"}},{name:"strokeWidth",type:{name:"number"},defaultValue:{func:!1,value:"10"}},{name:"themeColor",type:{name:"string"},defaultValue:{func:!1,value:'"primary"'},values:["primary","secondary","tertiary","success","warning","error","info"]}],sourceFiles:["/Users/auouser/Desktop/Work_Space/DED-WDS_VUE/libs/src/ui/element/Progress/CircleProgress/CircleProgress.vue"]};const F={title:"Design System/Progress/CircleProgress",component:g,tags:["autodocs"],argTypes:{label:{description:"顯示在 CircleProgress 上的標題文字",control:{type:"text"}},percent:{description:"設置 CircleProgress 的進度百分比（0-100）",control:{type:"range",min:0,max:100,step:1},defaultValue:66},size:{description:"CircleProgress 的直徑大小（單位：像素）",control:{type:"range",min:24,max:200,step:1},defaultValue:50},strokeWidth:{description:"CircleProgress 的線條寬度（單位：像素）",control:{type:"range",min:1,max:20,step:1}},themeColor:{description:"CircleProgress 主題顏色",control:{type:"select"},options:["primary","secondary","tertiary","success","warning","error","info"]}},parameters:{docs:{title:"CircleProgress",description:{component:"CircleProgress 組件的呈現及說明。"}}}},c={name:"CircleProgress 基礎樣式",args:{label:"Saving",percent:66,size:120,strokeWidth:10,themeColor:"primary"},render:r=>({components:{CircleProgress:g},setup(){return{args:r}},template:`
            <CircleProgress 
                :label="args.label"
                :percent="args.percent"
                :size="args.size"
                :strokeWidth="args.strokeWidth"
                :themeColor="args.themeColor"
            ></CircleProgress>
        `}),parameters:{controls:{}}};var y,C,v;c.parameters={...c.parameters,docs:{...(y=c.parameters)==null?void 0:y.docs,source:{originalSource:`{
  name: "CircleProgress 基礎樣式",
  args: {
    label: "Saving",
    percent: 66,
    size: 120,
    strokeWidth: 10,
    themeColor: "primary"
  },
  render: args => ({
    components: {
      CircleProgress
    },
    setup() {
      // Create a ref for modelValue to be used with v-model
      return {
        args
      };
    },
    template: \`
            <CircleProgress 
                :label="args.label"
                :percent="args.percent"
                :size="args.size"
                :strokeWidth="args.strokeWidth"
                :themeColor="args.themeColor"
            ></CircleProgress>
        \`
  }),
  // 控制 controls 中能控制的參數
  parameters: {
    controls: {
      // include: ['themeColor', 'label', 'value', 'name' ],
    }
  }
}`,...(v=(C=c.parameters)==null?void 0:C.docs)==null?void 0:v.source}}};const $=["DefaultCircleProgress"];export{c as DefaultCircleProgress,$ as __namedExportsOrder,F as default};

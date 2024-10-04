import{j as h,l as b,w as z,c as s,a,b as l,n as x,t as i,d as p,o}from"./vue.esm-bundler-CsTC-5Ev.js";const _={class:"progress-circle-container"},P=["width","height"],W=["stroke-width","r","cx","cy"],w=["stroke-width","stroke-dasharray","stroke-dashoffset","r","cx","cy","transform"],D=["y"],V={key:0,class:"progress-circle-label"},g={__name:"CircleProgress",props:{themeColor:{type:String,default:"primary",validator:r=>["primary","secondary","tertiary","success","warning","error","info"].includes(r)},label:{type:String,default:"label"},percent:{type:Number,default:66},size:{type:Number,default:120},strokeWidth:{type:Number,default:10}},setup(r){const e=r,t=h(null),n=h(0);b(()=>{t.value&&(n.value=t.value.getComputedTextLength())}),z(()=>e.label,()=>{t.value&&(n.value=t.value.getComputedTextLength())});const u=s(()=>(e.size-e.strokeWidth)/2),d=s(()=>2*Math.PI*u.value),C=s(()=>d.value-e.percent/100*d.value),f=s(()=>Math.min(Math.max(e.percent,0),100)),m=s(()=>n.value?n.value+e.strokeWidth+30:64);return(S,N)=>(o(),a("div",_,[(o(),a("svg",{class:"progress",width:e.size,height:e.size},[l("circle",{class:"progress-circle-track",fill:"transparent","stroke-width":e.strokeWidth,r:u.value,cx:e.size/2,cy:e.size/2},null,8,W),l("circle",{class:x(`progress-circle-percent-${e.themeColor}`),fill:"transparent","stroke-width":e.strokeWidth,"stroke-dasharray":d.value,"stroke-dashoffset":C.value,"stroke-linecap":"round",r:u.value,cx:e.size/2,cy:e.size/2,transform:`rotate(-90 ${e.size/2} ${e.size/2})`,style:{transition:"stroke-dashoffset 0.35s"}},null,10,w),e.size>=m.value?(o(),a("text",{key:0,ref_key:"textRef",ref:t,x:"50%",y:"45%","text-anchor":"middle","font-size":"1em",fill:"black"},i(e.label),513)):p("",!0),e.size>=m.value?(o(),a("text",{key:1,x:"50%",y:r.label?"60%":"50%","text-anchor":"middle",dy:".3em","font-size":"1.5em",fill:"black"},i(`${f.value}%`),9,D)):p("",!0)],8,P)),r.size<m.value?(o(),a("div",V,[l("span",null,i(e.label),1),l("span",null,i(`${f.value}%`),1)])):p("",!0)]))}};g.__docgenInfo={exportName:"default",displayName:"CircleProgress",description:"",tags:{},props:[{name:"themeColor",type:{name:"string"},defaultValue:{func:!1,value:'"primary"'},values:["primary","secondary","tertiary","success","warning","error","info"]},{name:"label",type:{name:"string"},defaultValue:{func:!1,value:'"label"'}},{name:"percent",type:{name:"number"},defaultValue:{func:!1,value:"66"}},{name:"size",type:{name:"number"},defaultValue:{func:!1,value:"120"}},{name:"strokeWidth",type:{name:"number"},defaultValue:{func:!1,value:"10"}}],sourceFiles:["/Users/auouser/Desktop/Work_Space/DED-WDS_VUE/libs/src/ui/element/Progress/CircleProgress/CircleProgress.vue"]};const $={title:"Design System/Progress/CircleProgress",component:g,tags:["autodocs"],argTypes:{themeColor:{description:"主題顏色",control:{type:"select"},options:["primary","secondary","tertiary","success","warning","error","info"]},label:{description:"圓形進度條標題",control:{type:"text"}},percent:{description:"圓形進度條進度",control:{type:"range",min:0,max:100,step:1},defaultValue:66},size:{description:"圓形進度條直徑大小",control:{type:"range",min:24,max:200,step:1},defaultValue:50},strokeWidth:{description:"圓形進度條寬度",control:{type:"range",min:1,max:20,step:1}}},parameters:{docs:{title:"圓形進度條",description:{component:"圓形進度條組件的呈現及說明。"}}}},c={name:"圓形進度條",args:{label:"Saving",percent:66,size:120,strokeWidth:10,themeColor:"primary"},render:r=>({components:{CircleProgress:g},setup(){return{args:r}},template:`
            <CircleProgress 
                :label="args.label"
                :percent="args.percent"
                :size="args.size"
                :strokeWidth="args.strokeWidth"
                :themeColor="args.themeColor"
            ></CircleProgress>
        `}),parameters:{controls:{}}};var y,v,k;c.parameters={...c.parameters,docs:{...(y=c.parameters)==null?void 0:y.docs,source:{originalSource:`{
  name: "圓形進度條",
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
}`,...(k=(v=c.parameters)==null?void 0:v.docs)==null?void 0:k.source}}};const B=["DefaultCircleProgress"];export{c as DefaultCircleProgress,B as __namedExportsOrder,$ as default};

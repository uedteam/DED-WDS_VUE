import{k as f,s as z,w as x,g as s,c as a,a as l,n as _,t as i,f as p,o}from"./vue.esm-bundler-5cDHsWFH.js";const P={class:"progress-circle-container"},W=["width","height"],w=["stroke-width","r","cx","cy"],D=["stroke-width","stroke-dasharray","stroke-dashoffset","r","cx","cy","transform"],V=["y"],S={key:0,class:"progress-circle-label"},v={__name:"CircleProgress",props:{themeColor:{type:String,default:"primary",validator:r=>["primary","secondary","tertiary","success","warning","error","info"].includes(r)},label:{type:String,default:"label"},percent:{type:Number,default:66},size:{type:Number,default:120},strokeWidth:{type:Number,default:10}},setup(r){const e=r,t=f(null),n=f(0);z(()=>{t.value&&(n.value=t.value.getComputedTextLength())}),x(()=>e.label,()=>{t.value&&(n.value=t.value.getComputedTextLength())});const u=s(()=>(e.size-e.strokeWidth)/2),d=s(()=>2*Math.PI*u.value),b=s(()=>d.value-e.percent/100*d.value),g=s(()=>Math.min(Math.max(e.percent,0),100)),m=s(()=>n.value?n.value+e.strokeWidth+30:64);return(N,E)=>(o(),a("div",P,[(o(),a("svg",{class:"progress",width:e.size,height:e.size},[l("circle",{class:"progress-circle-track",fill:"transparent","stroke-width":e.strokeWidth,r:u.value,cx:e.size/2,cy:e.size/2},null,8,w),l("circle",{class:_(`progress-circle-percent-${e.themeColor}`),fill:"transparent","stroke-width":e.strokeWidth,"stroke-dasharray":d.value,"stroke-dashoffset":b.value,"stroke-linecap":"round",r:u.value,cx:e.size/2,cy:e.size/2,transform:`rotate(-90 ${e.size/2} ${e.size/2})`,style:{transition:"stroke-dashoffset 0.35s"}},null,10,D),e.size>=m.value?(o(),a("text",{key:0,ref_key:"textRef",ref:t,x:"50%",y:"45%","text-anchor":"middle","font-size":"1em",fill:"black"},i(e.label),513)):p("",!0),e.size>=m.value?(o(),a("text",{key:1,x:"50%",y:r.label?"60%":"50%","text-anchor":"middle",dy:".3em","font-size":"1.5em",fill:"black"},i(`${g.value}%`),9,V)):p("",!0)],8,W)),r.size<m.value?(o(),a("div",S,[l("span",null,i(e.label),1),l("span",null,i(`${g.value}%`),1)])):p("",!0)]))}},C=v;v.__docgenInfo={exportName:"default",displayName:"CircleProgress",description:"",tags:{},props:[{name:"themeColor",type:{name:"string"},defaultValue:{func:!1,value:'"primary"'},values:["primary","secondary","tertiary","success","warning","error","info"]},{name:"label",type:{name:"string"},defaultValue:{func:!1,value:'"label"'}},{name:"percent",type:{name:"number"},defaultValue:{func:!1,value:"66"}},{name:"size",type:{name:"number"},defaultValue:{func:!1,value:"120"}},{name:"strokeWidth",type:{name:"number"},defaultValue:{func:!1,value:"10"}}],sourceFiles:["/Users/auouser/Desktop/Work_Space/DED-WDS_VUE/libs/src/ui/element/Progress/CircleProgress/CircleProgress.vue"]};const B={title:"Design System/Progress/CircleProgress",component:C,tags:["autodocs"],argTypes:{themeColor:{description:"主題顏色",control:{type:"select"},options:["primary","secondary","tertiary","success","warning","error","info"]},label:{description:"圓形進度條標題",control:{type:"text"}},percent:{description:"圓形進度條進度",control:{type:"range",min:0,max:100,step:1},defaultValue:66},size:{description:"圓形進度條直徑大小",control:{type:"range",min:24,max:200,step:1},defaultValue:50},strokeWidth:{description:"圓形進度條寬度",control:{type:"range",min:1,max:20,step:1}}},parameters:{docs:{title:"圓形進度條",description:{component:"圓形進度條組件的呈現及說明。"}}}},c={name:"圓形進度條",args:{label:"Saving",percent:66,size:120,strokeWidth:10,themeColor:"primary"},render:r=>({components:{CircleProgress:C},setup(){return{args:r}},template:`
            <CircleProgress 
                :label="args.label"
                :percent="args.percent"
                :size="args.size"
                :strokeWidth="args.strokeWidth"
                :themeColor="args.themeColor"
            ></CircleProgress>
        `}),parameters:{controls:{}}};var h,y,k;c.parameters={...c.parameters,docs:{...(h=c.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(k=(y=c.parameters)==null?void 0:y.docs)==null?void 0:k.source}}};const L=["DefaultCircleProgress"];export{c as DefaultCircleProgress,L as __namedExportsOrder,B as default};

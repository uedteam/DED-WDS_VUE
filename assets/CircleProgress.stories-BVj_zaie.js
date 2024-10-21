import{r as h,k as z,w as x,f as t,c as a,b as o,n as y,t as c,e as p,o as l}from"./vue.esm-bundler-qOdkfnRX.js";const _=["width","height"],P=["stroke-width","r","cx","cy"],N=["stroke-width","stroke-dasharray","stroke-dashoffset","r","cx","cy","transform"],W=["y"],w={key:0,class:"progress-circle-label"},g={__name:"CircleProgress",props:{label:{type:String,default:"label"},percent:{type:Number,default:66},size:{type:Number,default:120},strokeWidth:{type:Number,default:10},themeColor:{type:String,default:"primary",validator:r=>["primary","secondary","tertiary","success","warning","error","info"].includes(r)},className:{type:String,default:""}},setup(r){const e=r,s=h(null),n=h(0);z(()=>{s.value&&(n.value=s.value.getComputedTextLength())}),x(()=>e.label,()=>{s.value&&(n.value=s.value.getComputedTextLength())});const u=t(()=>(e.size-e.strokeWidth)/2),m=t(()=>2*Math.PI*u.value),b=t(()=>m.value-e.percent/100*m.value),f=t(()=>Math.min(Math.max(e.percent,0),100)),d=t(()=>n.value?n.value+e.strokeWidth+30:64);return(V,D)=>(l(),a("div",{class:y({"progress-circle-container":!0,[e.className]:!!e.className})},[(l(),a("svg",{class:"progress",width:e.size,height:e.size},[o("circle",{class:"progress-circle-track",fill:"transparent","stroke-width":e.strokeWidth,r:u.value,cx:e.size/2,cy:e.size/2},null,8,P),o("circle",{class:y(`progress-circle-percent-${e.themeColor}`),fill:"transparent","stroke-width":e.strokeWidth,"stroke-dasharray":m.value,"stroke-dashoffset":b.value,"stroke-linecap":"round",r:u.value,cx:e.size/2,cy:e.size/2,transform:`rotate(-90 ${e.size/2} ${e.size/2})`,style:{transition:"stroke-dashoffset 0.35s"}},null,10,N),e.size>=d.value?(l(),a("text",{key:0,ref_key:"textRef",ref:s,x:"50%",y:"45%","text-anchor":"middle","font-size":"1em",fill:"black"},c(e.label),513)):p("",!0),e.size>=d.value?(l(),a("text",{key:1,x:"50%",y:r.label?"60%":"50%","text-anchor":"middle",dy:".3em","font-size":"1.5em",fill:"black"},c(`${f.value}%`),9,W)):p("",!0)],8,_)),r.size<d.value?(l(),a("div",w,[o("span",null,c(e.label),1),o("span",null,c(`${f.value}%`),1)])):p("",!0)],2))}};g.__docgenInfo={exportName:"default",displayName:"CircleProgress",description:"",tags:{},props:[{name:"label",type:{name:"string"},defaultValue:{func:!1,value:'"label"'}},{name:"percent",type:{name:"number"},defaultValue:{func:!1,value:"66"}},{name:"size",type:{name:"number"},defaultValue:{func:!1,value:"120"}},{name:"strokeWidth",type:{name:"number"},defaultValue:{func:!1,value:"10"}},{name:"themeColor",type:{name:"string"},defaultValue:{func:!1,value:'"primary"'},values:["primary","secondary","tertiary","success","warning","error","info"]},{name:"className",type:{name:"string"},defaultValue:{func:!1,value:"''"}}],sourceFiles:["/Users/auouser/Desktop/Work_Space/DED-WDS_VUE/libs/src/ui/element/Progress/CircleProgress/CircleProgress.vue"]};const E={title:"Design System/Progress-Circle",component:g,tags:["autodocs"],argTypes:{label:{description:"進度指示標籤",control:{type:"text"}},percent:{description:"進度",control:{type:"range",min:0,max:100,step:1},defaultValue:66},size:{description:"直徑",control:{type:"range",min:24,max:200,step:1},defaultValue:50},strokeWidth:{description:"線條寬度",control:{type:"range",min:1,max:20,step:1}},themeColor:{description:"主題顏色",control:{type:"select"},options:["primary","secondary","tertiary","success","warning","error","info"]},className:{description:"客製化樣式",control:{type:"text"}}},parameters:{docs:{title:"CircleProgress",description:{component:"CircleProgress 組件的呈現及說明。"}}}},i={name:"主要項目",args:{label:"Saving",percent:66,size:120,strokeWidth:10,themeColor:"primary",className:""},render:r=>({components:{CircleProgress:g},setup(){return{args:r}},template:`
            <CircleProgress 
                :label="args.label"
                :percent="args.percent"
                :size="args.size"
                :strokeWidth="args.strokeWidth"
                :themeColor="args.themeColor"
                :className="args.className"
            ></CircleProgress>
        `}),parameters:{controls:{}}};var v,k,C;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:`{
  name: "主要項目",
  args: {
    label: "Saving",
    percent: 66,
    size: 120,
    strokeWidth: 10,
    themeColor: "primary",
    className: ''
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
                :className="args.className"
            ></CircleProgress>
        \`
  }),
  // 控制 controls 中能控制的參數
  parameters: {
    controls: {
      // include: ['themeColor', 'label', 'value', 'name' ],
    }
  }
}`,...(C=(k=i.parameters)==null?void 0:k.docs)==null?void 0:C.source}}};const B=["DefaultCircleProgress"];export{i as DefaultCircleProgress,B as __namedExportsOrder,E as default};

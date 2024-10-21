import{m as W,u as R,j as g,r as f,f as w,w as v,k as C,l as B,p as $,c as h,b as o,a as M,q as P,n as y,t as x,e as z,s as T,o as V}from"./vue.esm-bundler-qOdkfnRX.js";const U={style:{display:"flex","justify-content":"space-between","align-items":"center",gap:"8px"}},E=["min","max","step","disabled"],I={key:0},b=20,j=40,O={__name:"Slider",props:W({themeColor:{type:String,default:"primary",validator:u=>["primary","secondary","tertiary","success","warning","error","info"].includes(u)},min:{type:Number,default:0},max:{type:Number,default:100},step:{type:[Number,String],default:1},initValue:{type:Number,default:50},unit:{type:String,default:"%"},isDisabled:{type:Boolean,default:!1},className:{type:String,default:""}},{modelValue:{},modelModifiers:{}}),emits:["update:modelValue"],setup(u,{expose:_}){const r=R(u,"modelValue"),e=u,s=g("rangeRef"),m=g("containerRef"),n=f(0),l=f(r.value||e.initValue||e.min),N=f(0),d=a=>{if(n.value===0)return;const t=n.value-b;N.value=(a-e.min)/(e.max-e.min)*t},c=a=>{const t=(a-e.min)/(e.max-e.min)*100;m.value&&m.value.style.setProperty("--progress",`${t}%`)},S=w(()=>{if(n.value===0)return"0px";const a=n.value-b;return`calc(${(l.value-e.min)/(e.max-e.min)*a}px + ${b/2}px - ${j/2}px)`}),D=a=>{const t=parseInt(a.target.value,10);l.value=t,c(t),d(t),r.value=t};v(()=>r.value,a=>{l.value=a}),v(()=>e.initValue,a=>{l.value=a}),v(l,a=>{c(a),d(a)});const p=()=>{s.value&&(n.value=s.value.offsetWidth,d(l.value),c(l.value))};let i=null;return C(()=>{B(()=>{p(),i=new ResizeObserver(()=>{p()}),s.value&&i.observe(s.value)})}),$(()=>{i&&(i.disconnect(),i=null)}),_({updateWidth:p}),(a,t)=>(V(),h("div",{class:y({"slider-container":!0,[e.className]:!!e.className}),ref_key:"containerRef",ref:m},[o("div",U,[M(o("input",{ref_key:"rangeRef",ref:s,type:"range",min:e.min,max:e.max,step:e.step,disabled:e.isDisabled,onInput:D,"onUpdate:modelValue":t[0]||(t[0]=k=>l.value=k),class:y(["slider",e.isDisabled?"slider-disable":`slider-${e.themeColor}`])},null,42,E),[[P,l.value]])]),o("div",{class:y(["tooltip",e.isDisabled?"tooltip-disable":`tooltip-${e.themeColor}`]),style:T({left:S.value})},[o("span",null,x(l.value),1),e.unit?(V(),h("span",I,x(e.unit),1)):z("",!0)],6)],2))}};O.__docgenInfo={exportName:"default",displayName:"Slider",description:"",tags:{},expose:[{name:"updateWidth"}],props:[{name:"themeColor",type:{name:"string"},defaultValue:{func:!1,value:"'primary'"},values:["primary","secondary","tertiary","success","warning","error","info"]},{name:"min",type:{name:"number"},defaultValue:{func:!1,value:"0"}},{name:"max",type:{name:"number"},defaultValue:{func:!1,value:"100"}},{name:"step",type:{name:"number|string"},defaultValue:{func:!1,value:"1"}},{name:"initValue",type:{name:"number"},defaultValue:{func:!1,value:"50"}},{name:"unit",type:{name:"string"},defaultValue:{func:!1,value:"'%'"}},{name:"isDisabled",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"className",type:{name:"string"},defaultValue:{func:!1,value:"''"}}],sourceFiles:["/Users/auouser/Desktop/Work_Space/DED-WDS_VUE/libs/src/ui/element/Slider/Slider.vue"]};export{O as _};

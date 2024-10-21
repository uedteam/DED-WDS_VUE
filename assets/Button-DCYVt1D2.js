import{f as o,c as d,d as i,n as a,e as s,g as f,o as n}from"./vue.esm-bundler-qOdkfnRX.js";import{c as v}from"./index-Bb4qSo10.js";import{_ as l}from"./Icon-BMJK1EcF.js";function y(t){return o(()=>v("button",{variants:{variant:{contained:"button-contained",outlined:"button-outlined",text:"button-text"},size:{small:"component-small",medium:"component-medium",large:"component-large"},width:{fit:"button-fit",full:"button-full"}},compoundVariants:[{variant:"contained",themeColor:"primary",class:"button-contained-primary"},{variant:"outlined",themeColor:"primary",class:"button-outlined-primary"},{variant:"text",themeColor:"primary",class:"button-text-primary"},{variant:"contained",themeColor:"secondary",class:"button-contained-secondary"},{variant:"outlined",themeColor:"secondary",class:"button-outlined-secondary"},{variant:"text",themeColor:"secondary",class:"button-text-secondary"},{variant:"contained",themeColor:"tertiary",class:"button-contained-tertiary"},{variant:"outlined",themeColor:"tertiary",class:"button-outlined-tertiary"},{variant:"text",themeColor:"tertiary",class:"button-text-tertiary"},{variant:"contained",themeColor:"success",class:"button-contained-success"},{variant:"outlined",themeColor:"success",class:"button-outlined-success"},{variant:"text",themeColor:"success",class:"button-text-success"},{variant:"contained",themeColor:"warning",class:"button-contained-warning"},{variant:"outlined",themeColor:"warning",class:"button-outlined-warning"},{variant:"text",themeColor:"warning",class:"button-text-warning"},{variant:"contained",themeColor:"error",class:"button-contained-error"},{variant:"outlined",themeColor:"error",class:"button-outlined-error"},{variant:"text",themeColor:"error",class:"button-text-error"},{variant:"contained",themeColor:"info",class:"button-contained-info"},{variant:"outlined",themeColor:"info",class:"button-outlined-info"},{variant:"text",themeColor:"info",class:"button-text-info"},{variant:"contained",isDisable:!0,class:"button-container-disable"},{variant:"outlined",isDisable:!0,class:"button-outline-disable"},{variant:"text",isDisable:!0,class:"button-text-disable"}]})({variant:t.variant,size:t.size,isDisable:t.isDisable,themeColor:t.themeColor,width:t.width}))}const b={__name:"Button",props:{variant:{type:String,default:"contained",validator:t=>["contained","outlined","text"].includes(t),required:!0},themeColor:{type:String,default:"primary",validator:t=>["primary","secondary","tertiary","success","warning","error","info"].includes(t)},size:{type:String,validator:t=>["small","medium","large"].includes(t)},width:{type:String,default:"fit",validator:t=>["full","fit"].includes(t)},isDisable:{type:Boolean,default:!1},prefix:{type:String},suffix:{type:String},className:{type:String,default:""}},setup(t){const e=t,u=y(e),r=o(()=>`icon-${e.size}`),c=o(()=>[u.value,e.className].filter(Boolean).join(" "));return(m,p)=>(n(),d("button",{class:a(c.value)},[t.prefix?(n(),i(l,{key:0,class:a(r.value),name:e.prefix},null,8,["class","name"])):s("",!0),f(m.$slots,"default"),t.suffix?(n(),i(l,{key:1,class:a(r.value),name:e.suffix},null,8,["class","name"])):s("",!0)],2))}};b.__docgenInfo={exportName:"default",displayName:"Button",description:"",tags:{},props:[{name:"variant",type:{name:"string"},required:!0,defaultValue:{func:!1,value:"'contained'"},values:["contained","outlined","text"]},{name:"themeColor",type:{name:"string"},defaultValue:{func:!1,value:"'primary'"},values:["primary","secondary","tertiary","success","warning","error","info"]},{name:"size",type:{name:"string"},values:["small","medium","large"]},{name:"width",type:{name:"string"},defaultValue:{func:!1,value:"'fit'"},values:["full","fit"]},{name:"isDisable",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"prefix",type:{name:"string"}},{name:"suffix",type:{name:"string"}},{name:"className",type:{name:"string"},defaultValue:{func:!1,value:"''"}}],slots:[{name:"default"}],sourceFiles:["/Users/auouser/Desktop/Work_Space/DED-WDS_VUE/libs/src/ui/element/Button/Button.vue"]};export{b as _};

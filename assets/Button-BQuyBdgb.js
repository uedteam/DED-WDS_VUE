import{f as o,c as f,d as r,n as a,e as i,q as v,o as n}from"./vue.esm-bundler-Bm7qTojY.js";import{c as y}from"./index-Bb4qSo10.js";import{_ as l}from"./Icon-0yHNpaiS.js";import{_ as b}from"./_plugin-vue_export-helper-DlAUqK2U.js";function p(t){return o(()=>y("button",{variants:{variant:{contained:"button-contained",outlined:"button-outlined",text:"button-text"},size:{small:"component-small",medium:"component-medium",large:"component-large"},width:{fit:"button-fit",full:"button-full"}},compoundVariants:[{variant:"contained",themeColor:"primary",class:"button-contained-primary"},{variant:"outlined",themeColor:"primary",class:"button-outlined-primary"},{variant:"text",themeColor:"primary",class:"button-text-primary"},{variant:"contained",themeColor:"secondary",class:"button-contained-secondary"},{variant:"outlined",themeColor:"secondary",class:"button-outlined-secondary"},{variant:"text",themeColor:"secondary",class:"button-text-secondary"},{variant:"contained",themeColor:"tertiary",class:"button-contained-tertiary"},{variant:"outlined",themeColor:"tertiary",class:"button-outlined-tertiary"},{variant:"text",themeColor:"tertiary",class:"button-text-tertiary"},{variant:"contained",themeColor:"success",class:"button-contained-success"},{variant:"outlined",themeColor:"success",class:"button-outlined-success"},{variant:"text",themeColor:"success",class:"button-text-success"},{variant:"contained",themeColor:"warning",class:"button-contained-warning"},{variant:"outlined",themeColor:"warning",class:"button-outlined-warning"},{variant:"text",themeColor:"warning",class:"button-text-warning"},{variant:"contained",themeColor:"error",class:"button-contained-error"},{variant:"outlined",themeColor:"error",class:"button-outlined-error"},{variant:"text",themeColor:"error",class:"button-text-error"},{variant:"contained",themeColor:"info",class:"button-contained-info"},{variant:"outlined",themeColor:"info",class:"button-outlined-info"},{variant:"text",themeColor:"info",class:"button-text-info"},{variant:"contained",isDisable:!0,class:"button-container-disable"},{variant:"outlined",isDisable:!0,class:"button-outline-disable"},{variant:"text",isDisable:!0,class:"button-text-disable"}]})({variant:t.variant,size:t.size,isDisable:t.isDisable,themeColor:t.themeColor,width:t.width}))}function C(t,e){return`${t}-${e}`}const u={__name:"Button",props:{variant:{type:String,default:"contained",validator:t=>["contained","outlined","text"].includes(t)},themeColor:{type:String,default:"primary",validator:t=>["primary","secondary","tertiary","success","warning","error","info"].includes(t)},size:{type:String,validator:t=>["small","medium","large"].includes(t)},width:{type:String,default:"fit",validator:t=>["full","fit"].includes(t)},isDisable:{type:Boolean,default:!1},prefix:{type:String},suffix:{type:String},customClass:{type:String,default:""}},setup(t){const e=t,c=p(e),s=o(()=>C("icon",e.size)),d=o(()=>[c.value,e.customClass].filter(Boolean).join(" "));return(m,h)=>(n(),f("button",{class:a(d.value)},[t.prefix?(n(),r(l,{key:0,class:a(s.value),name:e.prefix},null,8,["class","name"])):i("",!0),v(m.$slots,"default",{},void 0,!0),t.suffix?(n(),r(l,{key:1,class:a(s.value),name:e.suffix},null,8,["class","name"])):i("",!0)],2))}},_=b(u,[["__scopeId","data-v-d4de3c0d"]]);u.__docgenInfo={exportName:"default",displayName:"Button",description:"",tags:{},props:[{name:"variant",type:{name:"string"},defaultValue:{func:!1,value:"'contained'"},values:["contained","outlined","text"]},{name:"themeColor",type:{name:"string"},defaultValue:{func:!1,value:"'primary'"},values:["primary","secondary","tertiary","success","warning","error","info"]},{name:"size",type:{name:"string"},values:["small","medium","large"]},{name:"width",type:{name:"string"},defaultValue:{func:!1,value:"'fit'"},values:["full","fit"]},{name:"isDisable",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"prefix",type:{name:"string"}},{name:"suffix",type:{name:"string"}},{name:"customClass",type:{name:"string"},defaultValue:{func:!1,value:"''"}}],slots:[{name:"default"}],sourceFiles:["/Users/auouser/Desktop/Work_Space/DED-WDS_VUE/libs/src/ui/element/Button/Button.vue"]};export{_ as B};

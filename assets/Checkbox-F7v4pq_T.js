import{m as i,u as m,r as u,c as d,a as p,v as h,b as s,d as f,e as y,n as k,t as v,o as l}from"./vue.esm-bundler-Bm7qTojY.js";import{_ as b}from"./Icon-Bd9voGO6.js";const g=["for"],x=["id","name","value"],C={class:"checkbox-text"},_={__name:"Checkbox",props:i({label:{type:String},value:{type:[String,Boolean]},name:{type:String},id:{type:String},themeColor:{type:String,default:"primary",validator:a=>["primary","secondary","tertiary","success","warning","error","info"].includes(a)},customClass:{type:String,default:""}},{modelValue:{},modelModifiers:{}}),emits:["update:modelValue"],setup(a){const t=m(a,"modelValue"),e=a,o=u(!1),r=()=>{o.value=!o.value};return(V,n)=>(l(),d("label",{for:e.id,class:"checkbox"},[p(s("input",{class:"checkbox-input",type:"checkbox",id:e.id,name:e.name,value:e.value,"onUpdate:modelValue":n[0]||(n[0]=c=>t.value=c),onChange:r},null,40,x),[[h,t.value]]),s("div",{class:k(["checkbox-icon",o.value?`checkbox-checked-${e.themeColor}`:`checkbox-unchecked-${e.themeColor}`])},[o.value?(l(),f(b,{key:0,name:"check",color:"#fff"})):y("",!0)],2),s("span",C,v(e.label),1)],8,g))}};_.__docgenInfo={exportName:"default",displayName:"Checkbox",description:"",tags:{},props:[{name:"label",type:{name:"string"}},{name:"value",type:{name:"string|boolean"}},{name:"name",type:{name:"string"}},{name:"id",type:{name:"string"}},{name:"themeColor",type:{name:"string"},defaultValue:{func:!1,value:'"primary"'},values:["primary","secondary","tertiary","success","warning","error","info"]},{name:"customClass",type:{name:"string"},defaultValue:{func:!1,value:'""'}}],sourceFiles:["/Users/auouser/Desktop/Work_Space/DED-WDS_VUE/libs/src/ui/element/Checkbox/Checkbox.vue"]};export{_};

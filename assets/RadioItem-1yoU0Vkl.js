import{m as i,u as m,f as u,c as d,a as c,k as p,b as s,n as r,t as y,o as v}from"./vue.esm-bundler-B_DV3Cj1.js";const f=["value","name","checked"],g={class:"radio-text"},_={__name:"RadioItem",props:i({label:{type:String},value:{type:String},name:{type:String},themeColor:{type:String,default:"primary",validator:a=>["primary","secondary","tertiary","success","warning","error","info"].includes(a)},className:{type:String,default:""}},{modelValue:{},modelModifiers:{}}),emits:["update:modelValue"],setup(a){const t=m(a,"modelValue"),e=a,l=u(()=>e.modelValue===e.value);return(h,o)=>(v(),d("label",{class:r({radio:!0,[e.className]:!!e.className})},[c(s("input",{class:"radio-input",type:"radio",value:e.value,name:e.name,checked:l.value,"onUpdate:modelValue":o[0]||(o[0]=n=>t.value=n)},null,8,f),[[p,t.value]]),s("div",{class:r(["radio-icon",l.value?`radio-checked-${e.themeColor}`:`radio-unchecked-${e.themeColor}`])},null,2),s("span",g,y(e.label),1)],2))}};_.__docgenInfo={exportName:"default",displayName:"RadioItem",description:"",tags:{},props:[{name:"label",type:{name:"string"}},{name:"value",type:{name:"string"}},{name:"name",type:{name:"string"}},{name:"themeColor",type:{name:"string"},defaultValue:{func:!1,value:'"primary"'},values:["primary","secondary","tertiary","success","warning","error","info"]},{name:"className",type:{name:"string"},defaultValue:{func:!1,value:"''"}}],sourceFiles:["/Users/jony_worker/Documents/90_外部檔案/upstream/DED-WDS_VUE/libs/src/ui/element/Radio/RadioItem.vue"]};export{_};
import{c as n,e as s,b as i,t as r,n as o,o as m}from"./vendor-DM7lYiMX.js";const u={class:"item-label"},c={__name:"ListItem",props:{label:{type:String,default:"標題一"},value:{type:String,default:"value1"},href:{type:String},className:{type:String}},setup(t){const e=t,l=()=>{if(e.href)window.open(e.href,"_blank");else return;e.onClick&&e.onClick(e.value)};return(a,f)=>(m(),n("div",{class:o({item:!0,"menu-link":e.href,[e.className]:!!e.className}),onClick:l},[s(a.$slots,"listPrefix"),i("div",u,r(e.label),1),s(a.$slots,"listSuffix")],2))}};c.__docgenInfo={exportName:"default",displayName:"ListItem",description:"",tags:{},props:[{name:"label",type:{name:"string"},defaultValue:{func:!1,value:'"標題一"'}},{name:"value",type:{name:"string"},defaultValue:{func:!1,value:'"value1"'}},{name:"href",type:{name:"string"}},{name:"className",type:{name:"string"}}],slots:[{name:"listPrefix"},{name:"listSuffix"}],sourceFiles:["D:/98_測試/up/DED-WDS_VUE/libs/src/ui/element/ListItem/ListItem.vue"]};export{c as _};

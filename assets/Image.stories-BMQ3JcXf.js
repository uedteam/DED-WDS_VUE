import{g as o,c as p,a as d,n,o as g}from"./vue.esm-bundler-5cDHsWFH.js";import{c as r}from"./index-Bb4qSo10.js";const f=""+new URL("avatar_01-D3OGdb2m.jpg",import.meta.url).href,l={__name:"Image",props:{ratio:{type:String,default:"contained",validator:e=>["11","43","54","169"].includes(e)},objectFit:{type:String,default:"contained",validator:e=>["cover","contain","fill","none"].includes(e)}},setup(e){const a=e,u=o(()=>r("image-container",{variants:{ratio:{11:"ratio-1x1",43:"ratio-4x3",54:"ratio-5x4",169:"ratio-16x9"}}})({ratio:a.ratio})),m=o(()=>r("image",{variants:{objectFit:{cover:"cover",contain:"contain",fill:"fill",none:"none"}}})({objectFit:a.objectFit}));return(_,b)=>(g(),p("div",{class:n(u.value)},[d("img",{class:n(m.value),src:f,alt:""},null,2)],2))}},v=l;l.__docgenInfo={exportName:"default",displayName:"Image",description:"",tags:{},props:[{name:"ratio",type:{name:"string"},defaultValue:{func:!1,value:"'contained'"},values:["11","43","54","169"]},{name:"objectFit",type:{name:"string"},defaultValue:{func:!1,value:"'contained'"},values:["cover","contain","fill","none"]}],sourceFiles:["/Users/auouser/Desktop/Work_Space/DED-WDS_VUE/libs/src/ui/element/Image/Image.vue"]};const j={title:"Design System/Image",component:v,tags:["autodocs"],argTypes:{objectFit:{description:"調整圖片適合其容器",control:{type:"select"},options:["cover","contain","fill","none"]},ratio:{description:"調整圖片比例",control:{type:"select"},options:["1/1","4/3","5/4","16/9"],mapping:{"1/1":"11","4/3":"43","5/4":"54","16/9":"169"}}},parameters:{docs:{title:"圖片",description:{component:"圖片組件的呈現及說明。"}}}},t={name:"圖片",args:{ratio:"43",objectFit:"cover"},parameters:{controls:{}}};var s,i,c;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
  name: '圖片',
  args: {
    ratio: '43',
    objectFit: 'cover'
  },
  // 控制 controls 中能控制的參數
  parameters: {
    controls: {
      // include: ['variant', 'content', 'themeColor', 'isDisable', 'prefix'],
    }
  }
}`,...(c=(i=t.parameters)==null?void 0:i.docs)==null?void 0:c.source}}};const x=["ButtonDefault"];export{t as ButtonDefault,x as __namedExportsOrder,j as default};

import{c as o,o as a,t as k,n as C,r as b,w as P,g as S,q as V,A as q,a as i,F as y,j as B,k as _,d as j,x as z,T as A}from"./vue.esm-bundler-DYHjuIM_.js";const F=["href"],D={__name:"BreadcrumbItem",props:{label:{type:String},href:{type:String},isCurrentPage:{type:Boolean}},setup(n){const r=n;return(s,u)=>(a(),o("a",{class:C(r.isCurrentPage?"ded-breadcrumb-item-label":"ded-breadcrumb-item-link"),href:r.href},k(r.label),11,F))}};D.__docgenInfo={exportName:"default",displayName:"BreadcrumbItem",description:"",tags:{},props:[{name:"label",type:{name:"string"}},{name:"href",type:{name:"string"}},{name:"isCurrentPage",type:{name:"boolean"}}],sourceFiles:["/home/runner/work/DED-WDS_VUE/DED-WDS_VUE/libs/src/ui/element/Breadcrumb/BreadcrumbItem.vue"]};const I={class:"ded-breadcrumb"},U={key:0,class:"ded-rest"},O={class:"ded-rest-dropdown-menu"},W=["href"],f={__name:"Breadcrumb",props:{dataSource:{type:Array,required:!0},className:{type:String,default:""}},setup(n){const r=n,s=b([...r.dataSource]);P(()=>r.dataSource,e=>{s.value=[...e]});const u=S(()=>{const e=s.value;return e.length>3?[e[0],{label:"...",href:"#"},...e.slice(-2)]:e}),L=S(()=>{const e=s.value;return e.length>3?e.slice(1,-2):[]}),c=b(!1),d=b({top:0,left:0}),$=e=>{if(c.value=!c.value,c.value){const t=e.target.getBoundingClientRect();d.value={top:t.bottom+window.scrollY+8,left:t.left+window.scrollX},document.addEventListener("click",m)}else document.removeEventListener("click",m)},m=e=>{const t=document.querySelector(".ded-rest"),l=document.querySelector(".ded-rest-label");t&&l&&!t.contains(e.target)&&!l.contains(e.target)&&(c.value=!1,document.removeEventListener("click",m))},g=()=>{if(c.value){const e=document.querySelector(".ded-rest-label");if(e){const t=e.getBoundingClientRect();d.value={top:t.bottom+window.scrollY+8,left:t.left+window.scrollX}}}};return V(()=>{window.addEventListener("resize",g)}),q(()=>{window.removeEventListener("resize",g),document.removeEventListener("click",m)}),(e,t)=>(a(),o("nav",{class:C({"ded-breadcrumb-container":!0,[r.className]:!!r.className})},[i("ol",I,[(a(!0),o(y,null,B(u.value,(l,h)=>(a(),o("li",{class:"ded-breadcrumb-item",key:h},[l.label==="..."?(a(),o("div",U,[i("div",{class:"ded-rest-label",onClick:$},"..."),(a(),_(A,{to:"body"},[c.value?(a(),o("div",{key:0,class:"ded-dropdown-menu",style:z({top:`${d.value.top}px`,left:`${d.value.left}px`,position:"absolute"})},[i("ul",O,[(a(!0),o(y,null,B(L.value,(v,x)=>(a(),o("li",{class:"ded-drop-item",key:x},[i("a",{class:"ded-drop-item-link",href:v.href},k(v.label),9,W)]))),128))])],4)):j("",!0)]))])):(a(),_(D,{key:1,label:l.label,href:l.href,isCurrentPage:h===u.value.length-1},null,8,["label","href","isCurrentPage"]))]))),128))])],2))}};f.__docgenInfo={exportName:"default",displayName:"Breadcrumb",description:"",tags:{},props:[{name:"dataSource",type:{name:"array"},required:!0},{name:"className",type:{name:"string"},defaultValue:{func:!1,value:'""'}}],sourceFiles:["/home/runner/work/DED-WDS_VUE/DED-WDS_VUE/libs/src/ui/element/Breadcrumb/Breadcrumb.vue"]};function M(n){return`[
        ${n.map(r=>`{
            label: "${r.label}",
            href: "${r.href}",
        }`).join(`,
    `)}
    ]`}const T={title:"Component/Breadcrumb",component:f,tags:["autodocs"],argTypes:{dataSource:{description:"資料來源",control:{type:"object"},table:{type:{summary:"{ label: string; href?: string | undefined; }[]"}}},className:{description:"客製化樣式",control:{type:"text"}}},parameters:{deepControls:{enabled:!0},docs:{title:"Breadcrumb",description:{component:"Breadcrumb 組件的呈現及說明。"}}}},p={name:"預設項目",args:{dataSource:[{label:"Home",href:"/"},{label:"Level1",href:"/first"},{label:"Level2",href:"https://tw.yahoo.com"},{label:"Level3",href:"/first/second/third/n"},{label:"Current"}],className:""},render:n=>({components:{Breadcrumb:f},setup(){return{args:n}},template:`
            <Breadcrumb
                :dataSource="args.dataSource"
                :className="args.className"
            ></Breadcrumb>
        `}),parameters:{controls:{include:["dataSource","className"]},docs:{source:{transform:(n,r)=>{const{args:s}=r;return["<script setup>",'import { Breadcrumb } from "@ded-wds-vue/ui";',"<\/script>","","<template>","  <Breadcrumb",`    :dataSource='${M(s.dataSource)}'`,`    ${s.className?`className="${s.className}"`:""}`,"  >","  </Breadcrumb>","</template>"].join(`
`).trim()}}}}};var N,w,E;p.parameters={...p.parameters,docs:{...(N=p.parameters)==null?void 0:N.docs,source:{originalSource:`{
  name: "預設項目",
  args: {
    dataSource: [{
      "label": "Home",
      "href": "/"
    }, {
      "label": "Level1",
      "href": "/first"
    }, {
      "label": "Level2",
      "href": "https://tw.yahoo.com"
    }, {
      "label": "Level3",
      "href": "/first/second/third/n"
    }, {
      "label": "Current"
    }],
    className: ""
  },
  render: args => ({
    components: {
      Breadcrumb
    },
    setup() {
      return {
        args
      };
    },
    template: \`
            <Breadcrumb
                :dataSource="args.dataSource"
                :className="args.className"
            ></Breadcrumb>
        \`
  }),
  // 控制 controls 中能控制的參數
  parameters: {
    controls: {
      include: ['dataSource', 'className']
    },
    docs: {
      source: {
        transform: (src, storyContext) => {
          const {
            args
          } = storyContext;
          const dataSourceString = formatDataSource(args.dataSource);
          return [\`<script setup>\`, \`import { Breadcrumb } from "@ded-wds-vue/ui";\`, \`<\/script>\`, '', '<template>', '  <Breadcrumb', \`    :dataSource='\${dataSourceString}'\`, \`    \${args.className ? \`className="\${args.className}"\` : ""}\`, '  >', '  </Breadcrumb>', '</template>'].join('\\n').trim();
        }
      }
    }
  }
}`,...(E=(w=p.parameters)==null?void 0:w.docs)==null?void 0:E.source}}};const H=["BreadcrumbMany"];export{p as BreadcrumbMany,H as __namedExportsOrder,T as default};

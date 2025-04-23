import{c as o,o as a,t as E,n as C,s as b,w as j,g as y,A as q,E as z,a as i,F as B,p as h,h as _,d as A,j as F,T as I}from"./vue.esm-bundler-C-J3VMH8.js";const P=["href"],D={__name:"BreadcrumbItem",props:{label:{type:String},href:{type:String},isCurrentPage:{type:Boolean}},setup(s){const r=s;return(n,u)=>(a(),o("a",{class:C(r.isCurrentPage?"ded-breadcrumb-item-label":"ded-breadcrumb-item-link"),href:r.href},E(r.label),11,P))}};D.__docgenInfo={exportName:"default",displayName:"BreadcrumbItem",description:"",tags:{},props:[{name:"label",type:{name:"string"}},{name:"href",type:{name:"string"}},{name:"isCurrentPage",type:{name:"boolean"}}],sourceFiles:["/Users/auouser/Desktop/Work_Space/DED-WDS_VUE/libs/src/ui/element/Breadcrumb/BreadcrumbItem.vue"]};const U={class:"ded-breadcrumb"},V={key:0,class:"ded-rest"},O={class:"ded-rest-dropdown-menu"},W=["href"],f={__name:"Breadcrumb",props:{dataSource:{type:Array,required:!0},className:{type:String,default:""}},setup(s){const r=s,n=b([...r.dataSource]);j(()=>r.dataSource,e=>{n.value=[...e]});const u=y(()=>{const e=n.value;return e.length>3?[e[0],{label:"...",href:"#"},...e.slice(-2)]:e}),$=y(()=>{const e=n.value;return e.length>3?e.slice(1,-2):[]}),c=b(!1),d=b({top:0,left:0});function L(e){if(c.value=!c.value,c.value){const t=e.target.getBoundingClientRect();d.value={top:t.bottom+window.scrollY+8,left:t.left+window.scrollX},document.addEventListener("click",m)}else document.removeEventListener("click",m)}function m(e){const t=document.querySelector(".ded-rest"),l=document.querySelector(".ded-rest-label");t&&l&&!t.contains(e.target)&&!l.contains(e.target)&&(c.value=!1,document.removeEventListener("click",m))}function g(){if(c.value){const e=document.querySelector(".ded-rest-label");if(e){const t=e.getBoundingClientRect();d.value={top:t.bottom+window.scrollY+8,left:t.left+window.scrollX}}}}return q(()=>{window.addEventListener("resize",g)}),z(()=>{window.removeEventListener("resize",g),document.removeEventListener("click",m)}),(e,t)=>(a(),o("nav",{class:C(["ded-breadcrumb-container",{[r.className]:!!r.className}])},[i("ol",U,[(a(!0),o(B,null,h(u.value,(l,S)=>(a(),o("li",{key:S,class:"ded-breadcrumb-item"},[l.label==="..."?(a(),o("div",V,[i("div",{class:"ded-rest-label",onClick:L}," ... "),(a(),_(I,{to:"body"},[c.value?(a(),o("div",{key:0,class:"ded-dropdown-menu",style:F({top:`${d.value.top}px`,left:`${d.value.left}px`,position:"absolute"})},[i("ul",O,[(a(!0),o(B,null,h($.value,(v,x)=>(a(),o("li",{key:x,class:"ded-drop-item"},[i("a",{class:"ded-drop-item-link",href:v.href},E(v.label),9,W)]))),128))])],4)):A("",!0)]))])):(a(),_(D,{key:1,label:l.label,href:l.href,"is-current-page":S===u.value.length-1},null,8,["label","href","is-current-page"]))]))),128))])],2))}};f.__docgenInfo={exportName:"default",displayName:"Breadcrumb",description:"",tags:{},props:[{name:"dataSource",type:{name:"array"},required:!0},{name:"className",type:{name:"string"},defaultValue:{func:!1,value:'""'}}],sourceFiles:["/Users/auouser/Desktop/Work_Space/DED-WDS_VUE/libs/src/ui/element/Breadcrumb/Breadcrumb.vue"]};function M(s){return`    ${s.map(r=>`{
        label: "${r.label}",
        href: "${r.href}",
    }`).join(`,
    `)}`}const R=[{label:"Home",href:"/"},{label:"Level1",href:"/first"},{label:"Level2",href:"https://tw.yahoo.com"},{label:"Level3",href:"/first/second/third/n"},{label:"Current"}],X={title:"Component/Breadcrumb",component:f,tags:["autodocs"],argTypes:{dataSource:{description:"資料來源",control:{type:"object"},table:{type:{summary:"{ label: string; href?: string | undefined; }[]"}}},className:{description:"客製化樣式",control:{type:"text"}}},parameters:{deepControls:{enabled:!0},docs:{title:"Breadcrumb",description:{component:"Breadcrumb 組件的呈現及說明。"}}}},p={name:"預設項目",args:{dataSource:R,className:""},render:s=>({components:{Breadcrumb:f},setup(){return{args:s}},template:`
      <Breadcrumb
        :dataSource="args.dataSource"
        :className="args.className"
      ></Breadcrumb>
    `}),parameters:{controls:{include:["dataSource","className"]},docs:{source:{transform:(s,r)=>{const{args:n}=r;return["<script setup>",'import { Breadcrumb } from "@ded-wds-vue/ui";',"const dataSource = [",`${M(n.dataSource)}`,"];","<\/script>","","<template>","  <Breadcrumb",'    :dataSource="dataSource"',`    ${n.className?`className="${n.className}"`:""}`,"  >","  </Breadcrumb>","</template>"].join(`
`).trim()}}}}};var N,k,w;p.parameters={...p.parameters,docs:{...(N=p.parameters)==null?void 0:N.docs,source:{originalSource:`{
  name: "預設項目",
  args: {
    dataSource,
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
      include: ["dataSource", "className"]
    },
    docs: {
      source: {
        transform: (src, storyContext) => {
          const {
            args
          } = storyContext;
          const dataSourceString = formatDataSource(args.dataSource);
          return [\`<script setup>\`, \`import { Breadcrumb } from "@ded-wds-vue/ui";\`, \`const dataSource = [\`, \`\${dataSourceString}\`, \`];\`, \`<\/script>\`, "", "<template>", "  <Breadcrumb", \`    :dataSource="dataSource"\`, \`    \${args.className ? \`className="\${args.className}"\` : ""}\`, "  >", "  </Breadcrumb>", "</template>"].join("\\n").trim();
        }
      }
    }
  }
}`,...(w=(k=p.parameters)==null?void 0:k.docs)==null?void 0:w.source}}};const Y=["BreadcrumbMany"];export{p as BreadcrumbMany,Y as __namedExportsOrder,X as default};

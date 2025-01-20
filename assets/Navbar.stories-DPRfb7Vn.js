import{m as S,u as N,c as m,a as s,b as t,d as c,F as h,D as _,y,n as D,o as i,E as V,f as $,t as x}from"./vue.esm-bundler-D0YZwI1O.js";import{_ as p}from"./Button-DNzccG-4.js";import{_ as b}from"./Icon-BEQChxlu.js";import{_ as w}from"./Input-CcDThj1G.js";import{_ as C}from"./Badge-BLM54YEQ.js";import{_ as k}from"./Avatar-GfF4H_Oq.js";import"./iframe-BAU84F5S.js";import"../sb-preview/runtime.js";import"./Image-DHXTRmVG.js";const A={class:"navbar-menu"},E={class:"navbar-links"},O={class:"navbar-feature"},z={class:"navbar-form-search",action:""},j={class:"navbar-icons"},F={class:"navbar-icons-icon"},L={class:"navbar-icons-icon"},u={__name:"Navbar",props:S({dataSource:{type:Array,required:!0,default:()=>[]},logoSrc:{type:String,required:!0,default:""},className:{type:String,default:""}},{modelValue:{},modelModifiers:{}}),emits:["update:modelValue"],setup(r){const e=N(r,"modelValue"),a=r;return(d,n)=>(i(),m("nav",{class:D({navbar:!0,[a.className]:!!a.className})},[s("div",A,[t(p,{themeColor:"primary",variant:"text"},{default:c(()=>[t(b,{src:a.logoSrc,alt:"Logo",class:"navbar-logo"},null,8,["src"])]),_:1}),s("ul",E,[(i(!0),m(h,null,_(a.dataSource,o=>(i(),V(p,{key:o.href,themeColor:"primary",variant:"text",onClick:()=>o.href&&d.window.open(o.href,"_blank")},{default:c(()=>[$(x(o.label),1)]),_:2},1032,["onClick"]))),128))])]),s("div",O,[s("form",z,[t(w,{type:"text",placeholder:a.placeholder,prefix:"SvgSearch",size:a.size,initValue:"",isDisable:a.isDisable,modelValue:e.value,"onUpdate:modelValue":n[0]||(n[0]=o=>e.value=o),className:"ded-search-input"},null,8,["placeholder","size","isDisable","modelValue"])]),s("div",j,[s("div",F,[t(C,{themeColor:"error",isShowDot:!0,value:100,limit:99,className:""},{default:c(()=>[t(b,{name:"SvgNotification",size:"26"})]),_:1})]),s("div",L,[t(k,{shape:"circle",size:"small",status:"online",src:"https://storage.googleapis.com/ded-wds-bucket/lion.png",userName:"Name",caption:"Caption"})])]),n[1]||(n[1]=y('<button class="navbar-switch"><div class="navbar-switch-bar"></div><div class="navbar-switch-bar"></div><div class="navbar-switch-bar"></div><span class="navbar-switch-sr-only">切換選單</span></button>',1))])],2))}};u.__docgenInfo={exportName:"default",displayName:"Navbar",description:"",tags:{},props:[{name:"dataSource",type:{name:"array"},required:!0,defaultValue:{func:!1,value:"[]"}},{name:"logoSrc",type:{name:"string"},required:!0,defaultValue:{func:!1,value:'""'}},{name:"className",type:{name:"string"},defaultValue:{func:!1,value:'""'}}],sourceFiles:["D:/98_測試/up/DED-WDS_VUE/libs/src/ui/element/Navbar/Navbar.vue"]};function q(r){return`[
    ${r.map(e=>`{
        label: '${e.label}',
        href: '${e.href}',
        value: '${e.value}',
    }`).join(`,
    `)}
  ]`}const J={title:"Component/Navbar",component:u,tags:["autodocs"],argTypes:{dataSource:{description:"連結清單",control:{type:"object"},table:{type:{summary:"{ label: string; href: string; order: number; }[]"}}},logoSrc:{description:"Logo 圖片連結",control:{type:"text"}},className:{description:"客製化樣式",control:{type:"text"}}},parameters:{docs:{title:"Navbar",description:{component:"Navbar 組件的呈現及說明。"}}}},l={name:"預設項目",args:{dataSource:[{label:"Products",href:"#products",order:1},{label:"Solutions",href:"#solutions",order:2},{label:"About",href:"#about",order:3},{label:"Technologies",href:"#technologies",order:4}],logoSrc:"https://storage.googleapis.com/ded-wds-bucket/AUO_LOGO.svg",className:""},render:r=>({components:{Navbar:u},setup(){return{args:r}},template:`
            <Navbar
                :dataSource="args.dataSource"
                :logoSrc="args.logoSrc"
                :className="args.className"
            ></Navbar>
            `}),parameters:{controls:{},docs:{source:{transform:(r,e)=>{const{args:a}=e;return["<Navbar",`  :datasource="${q(a.dataSource)}"`,`  :logoSrc="${a.logoSrc}"`,`  className="${a.className}"`,">","</Navbar>"].join(`
`).trim()}}}}};var g,v,f;l.parameters={...l.parameters,docs:{...(g=l.parameters)==null?void 0:g.docs,source:{originalSource:`{
  name: '預設項目',
  args: {
    dataSource: [{
      "label": "Products",
      "href": "#products",
      "order": 1
    }, {
      "label": "Solutions",
      "href": "#solutions",
      "order": 2
    }, {
      "label": "About",
      "href": "#about",
      "order": 3
    }, {
      "label": "Technologies",
      "href": "#technologies",
      "order": 4
    }],
    logoSrc: "https://storage.googleapis.com/ded-wds-bucket/AUO_LOGO.svg",
    className: ""
  },
  render: args => ({
    components: {
      Navbar
    },
    setup() {
      return {
        args
      };
    },
    template: \`
            <Navbar
                :dataSource="args.dataSource"
                :logoSrc="args.logoSrc"
                :className="args.className"
            ></Navbar>
            \`
  }),
  // 控制 controls 中能控制的參數
  parameters: {
    controls: {
      // include: ['objectFit', 'src', 'value', 'name' ],
    },
    docs: {
      source: {
        transform: (src, storyContext) => {
          const {
            args
          } = storyContext;
          const dataSourceString = formatDataSource(args.dataSource);
          return ['<Navbar', \`  :datasource="\${dataSourceString}"\`, \`  :logoSrc="\${args.logoSrc}"\`, \`  className="\${args.className}"\`, '>', '</Navbar>'].join('\\n').trim();
        }
      }
    }
  }
}`,...(f=(v=l.parameters)==null?void 0:v.docs)==null?void 0:f.source}}};const K=["NavbarDefault"];export{l as NavbarDefault,K as __namedExportsOrder,J as default};

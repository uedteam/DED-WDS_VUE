import{m as h,u as _,c as d,a,b as r,d as l,F as N,C as S,M as y,n as k,o as c,D,f as V,t as x}from"./vue.esm-bundler-C8tbd0VY.js";import{_ as m}from"./Button-Ck9oqLH6.js";import{_ as p}from"./Icon-D-NDJAD3.js";import{_ as w}from"./Input-DEZMGS70.js";import{_ as C}from"./Badge-BW2kV792.js";import{_ as $}from"./Avatar-DAGzgaay.js";import"./iframe-CrLK0dA1.js";import"../sb-preview/runtime.js";import"./Image-DOhpCG_t.js";const z={class:"navbar-menu"},A={class:"navbar-links"},E={class:"navbar-feature"},O={class:"navbar-form-search",action:""},F={class:"navbar-icons"},B={class:"navbar-icons-icon"},M={class:"navbar-icons-icon"},i={__name:"Navbar",props:h({links:{type:Array,required:!0,default:()=>[]},logoSrc:{type:String,default:""},className:{type:String,default:""}},{modelValue:{},modelModifiers:{}}),emits:["update:modelValue"],setup(o){const u=_(o,"modelValue"),e=o;return(f,n)=>(c(),d("nav",{class:k({navbar:!0,[e.className]:!!e.className})},[a("div",z,[r(m,{themeColor:"primary",variant:"text"},{default:l(()=>[r(p,{src:e.logoSrc},null,8,["src"])]),_:1}),a("ul",A,[(c(!0),d(N,null,S(e.links,s=>(c(),D(m,{key:s.href,themeColor:"primary",variant:"text",onClick:()=>s.href&&f.window.open(s.href,"_blank")},{default:l(()=>[V(x(s.label),1)]),_:2},1032,["onClick"]))),128))])]),a("div",E,[a("form",O,[r(w,{type:"text",placeholder:e.placeholder,prefix:"search",size:e.size,initValue:"",isDisable:e.isDisable,modelValue:u.value,"onUpdate:modelValue":n[0]||(n[0]=s=>u.value=s),className:"ded-search-input"},null,8,["placeholder","size","isDisable","modelValue"])]),a("div",F,[a("div",B,[r(C,{themeColor:"error",isShowDot:!0,value:100,limit:99,className:""},{default:l(()=>[r(p,{name:"notification",size:"26"})]),_:1})]),a("div",M,[r($,{shape:"circle",size:"small",status:"online",src:"https://storage.googleapis.com/ded-wds-bucket/lion.png",userName:"Name",caption:"Caption"})])]),n[1]||(n[1]=y('<button class="navbar-switch"><div class="navbar-switch-bar"></div><div class="navbar-switch-bar"></div><div class="navbar-switch-bar"></div><span class="navbar-switch-sr-only">切換選單</span></button>',1))])],2))}};i.__docgenInfo={exportName:"default",displayName:"Navbar",description:"",tags:{},props:[{name:"links",type:{name:"array"},required:!0,defaultValue:{func:!1,value:"[]"}},{name:"logoSrc",type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"className",type:{name:"string"},defaultValue:{func:!1,value:'""'}}],sourceFiles:["D:/98_測試/up/DED-WDS_VUE/libs/src/ui/element/Navbar/Navbar.vue"]};const W={title:"Component/Navbar",component:i,tags:["autodocs"],argTypes:{links:{description:"選項",control:{type:"object"},table:{type:{summary:"{ label: string; value: string | number; }[]"}}},logoSrc:{description:"logo",control:{type:"text"}},className:{description:"客製化樣式",control:{type:"text"}}},parameters:{docs:{title:"Navbar",description:{component:"Navbar 組件的呈現及說明。"}}}},t={name:"預設項目",args:{links:[{label:"Products",href:"#products",order:1},{label:"Solutions",href:"#solutions",order:2},{label:"About",href:"#about",order:3},{label:"Technologies",href:"#technologies",order:4}],logoSrc:"https://storage.googleapis.com/ded-wds-bucket/AUO_LOGO.svg",className:""},render:o=>({components:{Navbar:i},setup(){return{args:o}},template:`
            <Navbar
                :links="args.links"
                :logoSrc="args.logoSrc"
            ></Navbar>
            `}),parameters:{controls:{}}};var b,g,v;t.parameters={...t.parameters,docs:{...(b=t.parameters)==null?void 0:b.docs,source:{originalSource:`{
  name: '預設項目',
  args: {
    links: [{
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
                :links="args.links"
                :logoSrc="args.logoSrc"
            ></Navbar>
            \`
  }),
  // 控制 controls 中能控制的參數
  parameters: {
    controls: {
      // include: ['objectFit', 'src', 'value', 'name' ],
    }
    // docs: {
    //     source: {
    //         transform: (src, storyContext) => {
    //             const { args } = storyContext;
    //             const dataSourceString = formatDataSource(args.dataSource);
    //             return [
    //                 '<Dropdown',
    //                 \`  :datasource="\${dataSourceString}"\`,
    //                 \`  :label="\${args.label}"\`,
    //                 \`  :placeholder="\${args.placeholder}"\`,
    //                 \`  :size="\${args.size}"\`,
    //                 \`  :maxHeight="\${args.maxHeight}"\`,
    //                 \`  :className="\${args.className}"\`,
    //                 '>',
    //                 '</Dropdown>',
    //             ].join('\\n').trim();
    //         }
    //     }
    // }
  }
}`,...(v=(g=t.parameters)==null?void 0:g.docs)==null?void 0:v.source}}};const J=["NavbarDefault"];export{t as NavbarDefault,J as __namedExportsOrder,W as default};

import{_ as l}from"./Navbar-nV2vDb4h.js";import"./vue.esm-bundler-CeRU4-k3.js";import"./Button-Dc-tZ9k0.js";import"./Icon-rDwD1VSn.js";import"./Input-DyCjVgf5.js";import"./Badge-DHrOjejC.js";import"./Avatar-C3TvEyBK.js";import"./Image-DES-qLGe.js";function u(r){return`[
    ${r.map(o=>`{
        label: '${o.label}',
        path: '${o.path}',
        order: '${o.order}',
    }`).join(`,
    `)}
  ]`}const h={title:"Component/Navbar",component:l,tags:["autodocs"],argTypes:{dataSource:{description:"連結清單",control:{type:"object"},table:{type:{summary:"{ label: string; path: string; order: number; }[]"}}},hasLogo:{description:"是否有 Logo",control:{type:"boolean"}},logoSrc:{description:"Logo 圖片連結",control:{type:"text"}},className:{description:"客製化樣式",control:{type:"text"}}},parameters:{docs:{title:"Navbar",description:{component:"Navbar 組件的呈現及說明。"}}}},e={name:"預設項目",args:{dataSource:[{label:"Products",path:"#products",order:1},{label:"Solutions",path:"#solutions",order:2},{label:"About",path:"#about",order:3},{label:"Technologies",path:"#technologies",order:4}],hasLogo:!0,logoSrc:"https://storage.googleapis.com/ded-wds-bucket/AUO_LOGO.svg",className:""},render:r=>({components:{Navbar:l},setup(){return{args:r}},template:`
            <Navbar
                :dataSource="args.dataSource"
                :hasLogo="args.hasLogo"
                :logoSrc="args.logoSrc"
                :className="args.className"
            ></Navbar>
            `}),parameters:{controls:{},docs:{source:{transform:(r,o)=>{const{args:a}=o,t=u(a.dataSource);return["<script setup>",'import { Navbar } from "@ded-wds-vue/ui";',"<\/script>","","<template>","  <Navbar",`    :dataSource="${t||""}"`,`    ${a.hasLogo!==void 0?`:hasLogo="${a.hasLogo}"`:""}`,`    ${a.logoSrc?`logoSrc="${a.logoSrc}"`:""}`,`    ${a.className?`className="${a.className}"`:""}`,"  >","  </Navbar>","</template>"].filter(Boolean).join(`
`).trim()}}}}};var s,n,c;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
  name: '預設項目',
  args: {
    dataSource: [{
      "label": "Products",
      "path": "#products",
      "order": 1
    }, {
      "label": "Solutions",
      "path": "#solutions",
      "order": 2
    }, {
      "label": "About",
      "path": "#about",
      "order": 3
    }, {
      "label": "Technologies",
      "path": "#technologies",
      "order": 4
    }],
    hasLogo: true,
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
                :hasLogo="args.hasLogo"
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
          return [\`<script setup>\`, \`import { Navbar } from "@ded-wds-vue/ui";\`, \`<\/script>\`, '', '<template>', '  <Navbar', \`    :dataSource="\${dataSourceString ? dataSourceString : ''}"\`, \`    \${args.hasLogo !== undefined ? \`:hasLogo="\${args.hasLogo}"\` : ""}\`, \`    \${args.logoSrc ? \`logoSrc="\${args.logoSrc}"\` : ""}\`, \`    \${args.className ? \`className="\${args.className}"\` : ""}\`, '  >', '  </Navbar>', '</template>'].filter(Boolean).join('\\n').trim();
        }
      }
    }
  }
}`,...(c=(n=e.parameters)==null?void 0:n.docs)==null?void 0:c.source}}};const v=["NavbarDefault"];export{e as NavbarDefault,v as __namedExportsOrder,h as default};

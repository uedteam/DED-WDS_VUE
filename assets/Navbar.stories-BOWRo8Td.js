import{_ as l}from"./Navbar-DuubL_Yk.js";import"./vue.esm-bundler-DbMeO4i9.js";import"./Button-CcR0g5mh.js";import"./Icon-Dql-1jGW.js";import"./Input-BqawD3Ic.js";import"./Badge-CQoNH7yf.js";import"./Avatar-CWR6HcQ-.js";import"./Image-DOyAfoEa.js";function u(a){return`[
    ${a.map(r=>`{
        label: '${r.label}',
        href: '${r.href}',
        order: '${r.order}',
    }`).join(`,
    `)}
  ]`}const h={title:"Component/Navbar",component:l,tags:["autodocs"],argTypes:{dataSource:{description:"連結清單",control:{type:"object"},table:{type:{summary:"{ label: string; href: string; order: number; }[]"}}},hasLogo:{description:"是否有 Logo",control:{type:"boolean"}},logoSrc:{description:"Logo 圖片連結",control:{type:"text"}},className:{description:"客製化樣式",control:{type:"text"}}},parameters:{docs:{title:"Navbar",description:{component:"Navbar 組件的呈現及說明。"}}}},e={name:"預設項目",args:{dataSource:[{label:"Products",href:"#products",order:1},{label:"Solutions",href:"#solutions",order:2},{label:"About",href:"#about",order:3},{label:"Technologies",href:"#technologies",order:4}],hasLogo:!0,logoSrc:"https://storage.googleapis.com/ded-wds-bucket/AUO_LOGO.svg",className:""},render:a=>({components:{Navbar:l},setup(){return{args:a}},template:`
            <Navbar
                :dataSource="args.dataSource"
                :hasLogo="args.hasLogo"
                :logoSrc="args.logoSrc"
                :className="args.className"
            ></Navbar>
            `}),parameters:{controls:{},docs:{source:{transform:(a,r)=>{const{args:o}=r,t=u(o.dataSource);return["<script setup>",'import { Navbar } from "@ded-wds-vue/ui";',"<\/script>","","<template>","  <Navbar",`    :dataSource="${t||""}"`,`    ${o.hasLogo!==void 0?`:hasLogo="${o.hasLogo}"`:""}`,`    ${o.logoSrc?`logoSrc="${o.logoSrc}"`:""}`,`    ${o.className?`className="${o.className}"`:""}`,"  >","  </Navbar>","</template>"].filter(Boolean).join(`
`).trim()}}}}};var s,n,c;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(c=(n=e.parameters)==null?void 0:n.docs)==null?void 0:c.source}}};const f=["NavbarDefault"];export{e as NavbarDefault,f as __namedExportsOrder,h as default};

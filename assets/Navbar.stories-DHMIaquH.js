import{_ as c}from"./Navbar-DQem0cAf.js";import"./vue.esm-bundler-CIcyrfsw.js";import"./Avatar-CZtXXO6w.js";import"./Icon-B26R6TGi.js";import"./Image-QbO6D5D8.js";import"./Badge-DhtKMRaq.js";import"./Button-D82r7eij.js";import"./Input-CkI_a5wM.js";import"./v4-CtRu48qb.js";function l(r){return`    ${r.map(o=>`{
        label: "${o.label}",
        path: "${o.path}",
        order: "${o.order}",
    }`).join(`,
    `)}`}const L={title:"Component/Navbar",component:c,tags:["autodocs"],argTypes:{dataSource:{description:"連結清單",control:{type:"object"},table:{type:{summary:"{ label: string; path: string; order: number; }[]"}}},hasLogo:{description:"是否有 Logo",control:{type:"boolean"}},logoSrc:{description:"Logo 圖片連結",control:{type:"text"}},logoLink:{description:"Logo 連結",control:{type:"text"}},avatarSrc:{description:"圖片連結",control:{type:"text"}},className:{description:"客製化樣式",control:{type:"text"}}},parameters:{docs:{title:"Navbar",description:{component:"Navbar 組件的呈現及說明。"}}}},t={name:"預設項目",args:{dataSource:[{label:"Products",path:"#products",order:1},{label:"Solutions",path:"#solutions",order:2},{label:"About",path:"#about",order:3},{label:"Technologies",path:"#technologies",order:4}],hasLogo:!0,logoSrc:"https://storage.googleapis.com/ded-wds-bucket/AUO_LOGO.svg",logoLink:"https://www.auo.com",avatarSrc:"https://storage.googleapis.com/ded-wds-bucket/lion.png",className:""},render:r=>({components:{Navbar:c},setup(){return{args:r}},template:`
      <Navbar
        :dataSource="args.dataSource"
        :hasLogo="args.hasLogo"
        :logoSrc="args.logoSrc"
        :logoLink="args.logoLink"
        :avatarSrc="args.avatarSrc"
        :className="args.className"
      ></Navbar>`}),parameters:{controls:{},docs:{source:{transform:(r,o)=>{const{args:a}=o;return["<script setup>",'import { Navbar } from "@ded-wds-vue/ui";',"const dataSource = [",`${l(a.dataSource)}`,"];","<\/script>","","<template>","  <Navbar",'    :dataSource="dataSource"',`    ${a.hasLogo!==void 0?`:hasLogo="${a.hasLogo}"`:""}`,`    ${a.logoSrc?`logoSrc="${a.logoSrc}"`:""}`,`    ${a.logoLink?`logoLink="${a.logoLink}"`:""}`,`    ${a.avatarSrc?`avatarSrc="${a.avatarSrc}"`:""}`,`    ${a.className?`className="${a.className}"`:""}`,"  >","  </Navbar>","</template>"].filter(Boolean).join(`
`).trim()}}}}};var e,s,n;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`{
  name: "預設項目",
  args: {
    dataSource: [{
      label: "Products",
      path: "#products",
      order: 1
    }, {
      label: "Solutions",
      path: "#solutions",
      order: 2
    }, {
      label: "About",
      path: "#about",
      order: 3
    }, {
      label: "Technologies",
      path: "#technologies",
      order: 4
    }],
    hasLogo: true,
    logoSrc: "https://storage.googleapis.com/ded-wds-bucket/AUO_LOGO.svg",
    logoLink: "https://www.auo.com",
    avatarSrc: "https://storage.googleapis.com/ded-wds-bucket/lion.png",
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
        :logoLink="args.logoLink"
        :avatarSrc="args.avatarSrc"
        :className="args.className"
      ></Navbar>\`
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
          return [\`<script setup>\`, \`import { Navbar } from "@ded-wds-vue/ui";\`, \`const dataSource = [\`, \`\${dataSourceString}\`, \`];\`, \`<\/script>\`, "", "<template>", "  <Navbar", \`    :dataSource="dataSource"\`, \`    \${args.hasLogo !== undefined ? \`:hasLogo="\${args.hasLogo}"\` : ""}\`, \`    \${args.logoSrc ? \`logoSrc="\${args.logoSrc}"\` : ""}\`, \`    \${args.logoLink ? \`logoLink="\${args.logoLink}"\` : ""}\`, \`    \${args.avatarSrc ? \`avatarSrc="\${args.avatarSrc}"\` : ""}\`, \`    \${args.className ? \`className="\${args.className}"\` : ""}\`, "  >", "  </Navbar>", "</template>"].filter(Boolean).join("\\n").trim();
        }
      }
    }
  }
}`,...(n=(s=t.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};const N=["NavbarDefault"];export{t as NavbarDefault,N as __namedExportsOrder,L as default};

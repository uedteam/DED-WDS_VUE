import{_ as c}from"./Navbar-jep84Dmr.js";import"./vue.esm-bundler-CC1hEtM-.js";import"./Avatar-DU0UtSu7.js";import"./Icon-bEM3fLxI.js";import"./Image-59kk61uH.js";import"./Badge-Bj8-wkHd.js";import"./Button-kBbFOux4.js";import"./Input-CQrYGxBp.js";function l(r){return`    ${r.map(a=>`{
        label: "${a.label}",
        href: "${a.href}",
        order: "${a.order}",
    }`).join(`,
    `)}`}const h={title:"Component/Navbar",component:c,tags:["autodocs"],argTypes:{dataSource:{description:"連結清單",control:{type:"object"},table:{type:{summary:"{ label: string; href: string; order: number; }[]"}}},hasLogo:{description:"是否有 Logo",control:{type:"boolean"}},logoSrc:{description:"Logo 圖片連結",control:{type:"text"}},logoLink:{description:"Logo 連結",control:{type:"text"}},avatarSrc:{description:"圖片連結",control:{type:"text"}},className:{description:"客製化樣式",control:{type:"text"}}},parameters:{docs:{title:"Navbar",description:{component:"Navbar 組件的呈現及說明。"}}}},e={name:"預設項目",args:{dataSource:[{label:"Products",href:"#products",order:1},{label:"Solutions",href:"#solutions",order:2},{label:"About",href:"#about",order:3},{label:"Technologies",href:"#technologies",order:4}],hasLogo:!0,logoSrc:"https://storage.googleapis.com/ded-wds-bucket/AUO_LOGO.svg",logoLink:"https://www.auo.com",avatarSrc:"https://storage.googleapis.com/ded-wds-bucket/lion.png",className:""},render:r=>({components:{Navbar:c},setup(){return{args:r}},template:`
      <Navbar
        :dataSource="args.dataSource"
        :hasLogo="args.hasLogo"
        :logoSrc="args.logoSrc"
        :logoLink="args.logoLink"
        :avatarSrc="args.avatarSrc"
        :className="args.className"
      ></Navbar>`}),parameters:{controls:{},docs:{source:{transform:(r,a)=>{const{args:o}=a;return["<script setup>",'import { Navbar } from "@ded-wds-vue/ui";',"const dataSource = [",`${l(o.dataSource)}`,"];","<\/script>","","<template>","  <Navbar",'    :dataSource="dataSource"',`    ${o.hasLogo!==void 0?`:hasLogo="${o.hasLogo}"`:""}`,`    ${o.logoSrc?`logoSrc="${o.logoSrc}"`:""}`,`    ${o.logoLink?`logoLink="${o.logoLink}"`:""}`,`    ${o.avatarSrc?`avatarSrc="${o.avatarSrc}"`:""}`,`    ${o.className?`className="${o.className}"`:""}`,"  >","  </Navbar>","</template>"].filter(Boolean).join(`
`).trim()}}}}};var t,s,n;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  name: "預設項目",
  args: {
    dataSource: [{
      label: "Products",
      href: "#products",
      order: 1
    }, {
      label: "Solutions",
      href: "#solutions",
      order: 2
    }, {
      label: "About",
      href: "#about",
      order: 3
    }, {
      label: "Technologies",
      href: "#technologies",
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
}`,...(n=(s=e.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};const L=["NavbarDefault"];export{e as NavbarDefault,L as __namedExportsOrder,h as default};

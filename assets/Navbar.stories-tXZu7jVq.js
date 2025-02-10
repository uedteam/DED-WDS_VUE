import{_ as c}from"./Navbar-Cda2PsRP.js";import"./vue.esm-bundler-Db4pcR2I.js";import"./Button-roo16qVU.js";import"./Icon-DbRQxRx8.js";import"./iframe-G7TsRw4U.js";import"../sb-preview/runtime.js";import"./Input-Bh7mD7f5.js";import"./Badge-By3c0sdL.js";import"./Avatar-Dz5bXBvp.js";import"./Image-DiNgiIDS.js";function l(a){return`[
    ${a.map(o=>`{
        label: '${o.label}',
        path: '${o.path}',
        order: '${o.order}',
    }`).join(`,
    `)}
  ]`}const L={title:"Component/Navbar",component:c,tags:["autodocs"],argTypes:{dataSource:{description:"連結清單",control:{type:"object"},table:{type:{summary:"{ label: string; path: string; order: number; }[]"}}},hasLogo:{description:"是否有 Logo",control:{type:"boolean"}},logoSrc:{description:"Logo 圖片連結",control:{type:"text"}},className:{description:"客製化樣式",control:{type:"text"}}},parameters:{docs:{title:"Navbar",description:{component:"Navbar 組件的呈現及說明。"}}}},t={name:"預設項目",args:{dataSource:[{label:"Products",path:"#products",order:1},{label:"Solutions",path:"#solutions",order:2},{label:"About",path:"#about",order:3},{label:"Technologies",path:"#technologies",order:4}],hasLogo:!0,logoSrc:"https://storage.googleapis.com/ded-wds-bucket/AUO_LOGO.svg",className:""},render:a=>({components:{Navbar:c},setup(){return{args:a}},template:`
            <Navbar
                :dataSource="args.dataSource"
                :hasLogo="args.hasLogo"
                :logoSrc="args.logoSrc"
                :className="args.className"
            ></Navbar>
            `}),parameters:{controls:{},docs:{source:{transform:(a,o)=>{const{args:r}=o;return["<Navbar",`  :datasource="${l(r.dataSource)}"`,`  :hasLogo="${r.hasLogo}"`,`  :logoSrc="${r.logoSrc}"`,`  className="${r.className}"`,">","</Navbar>"].join(`
`).trim()}}}}};var e,s,n;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
          return ['<Navbar', \`  :datasource="\${dataSourceString}"\`, \`  :hasLogo="\${args.hasLogo}"\`, \`  :logoSrc="\${args.logoSrc}"\`, \`  className="\${args.className}"\`, '>', '</Navbar>'].join('\\n').trim();
        }
      }
    }
  }
}`,...(n=(s=t.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};const $=["NavbarDefault"];export{t as NavbarDefault,$ as __namedExportsOrder,L as default};

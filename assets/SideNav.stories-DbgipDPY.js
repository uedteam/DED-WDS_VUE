import{_ as l}from"./SideNav-CCLTRvhO.js";import{a as c,_ as i,b as g}from"./Column-CX3EjWqA.js";import"./vue.esm-bundler-CwphvVzG.js";import"./Input-C519Mesf.js";import"./Icon-BhrMxj58.js";import"./iframe-BqOtaKsG.js";import"../sb-preview/runtime.js";import"./Menu-B11W2E4N.js";import"./Avatar-BgHcsTCa.js";import"./Image-Cp6WSmmR.js";import"./Button-vzvXHSrX.js";import"./Navbar-B-PqitF2.js";import"./Badge-pZQ5llgs.js";function d(r){return`[
        ${r.map(a=>`{
            label: '${a.label}',
            path: '${a.path}',
            prefix: '${a.prefix}',
            order: '${a.order}',
            ${a.children?`children: [
                ${a.children.map(o=>`{
                    label: '${o.title}',
                    path: '${o.path}',
                    prefix: '${o.prefix}',
                    order: '${o.order}',
                }`).join(`,
            `)}
            ]`:""}
        }`).join(`,
    `)}
    ]`}const h=[{label:"Home",path:"/Home",prefix:"SvgHome",order:"1"},{label:"User",path:"/users",prefix:"SvgUser",order:"2",children:[{label:"Profile",path:"/user/profile",order:"1"},{label:"Account",path:"/user/account",order:"2"}]},{label:"Chart",path:"/chart",prefix:"SvgBarChart",order:"3",children:[{label:"Profile",path:"/chart/profile",order:"1"},{label:"Account",path:"/chart/account",order:"2"},{label:"Account",path:"/chart/account",order:"3"},{label:"Account",path:"/chart/account",order:"4"}]},{label:"Database",path:"/database",prefix:"SvgDatabase",order:"4"},{label:"Favorite",path:"/favorite",prefix:"SvgFavorite",order:"5"},{label:"Calendar",path:"/calendar",prefix:"SvgCalendar",order:"6"},{label:"Notification",path:"/notification",prefix:"SvgNotification",order:"7"},{label:"Language",path:"/language",prefix:"SvgLanguage",order:"8"}],R={components:{Grid:c,Column:i,Row:g},title:"Component/SideNav",component:l,tags:["autodocs"],argTypes:{themeColor:{description:"背景顏色",control:{type:"select"},options:["blue","yellow","grape","black"],table:{type:{summary:"blue | yellow | grape | black"}}},logoSrc:{description:"Logo 圖片",control:{type:"text"}},logo:{description:"Logo 圖示",control:{type:"text"}},logoLink:{description:"Logo 連結",control:{type:"text"}},hasRWD:{description:"是否有側邊導覽",control:{type:"boolean"}},hasLogo:{description:"是否有 Logo",control:{type:"boolean"}},hasSearch:{description:"是否有搜尋欄",control:{type:"boolean"}},dataSource:{description:"資料來源",control:{type:"object"},table:{type:{summary:"{ label: string; path: string; prefix: string; order: string; children?: [ title:string; path:string; prefix:string; order: string;] }[]"}}},className:{description:"客製化樣式",control:{type:"text"}}},parameters:{docs:{title:"SideNav",description:{component:"側邊導覽組件的呈現及說明。"}}}},e={name:"預設項目",args:{themeColor:"blue",logoSrc:"https://storage.googleapis.com/ded-wds-bucket/AUO_LOGO.svg",logo:"SvgAuo",logoLink:"https://www.auo.com",hasRWD:!1,hasLogo:!0,hasSearch:!0,dataSource:h,className:""},render:r=>({components:{SideNav:l,Grid:c,Column:i,Row:g},setup(){return{args:r}},template:`
            <Grid fluid>
                <Row hasGap>
                    <Column xs="12" sm="4" md="4" style="text-align: start;">
                        <SideNav
                            :themeColor="args.themeColor"
                            :logoSrc="args.logoSrc"
                            :logo="args.logo"
                            :logoLink="args.logoLink"
                            :hasRWD="args.hasRWD"
                            :hasLogo="args.hasLogo"
                            :hasSearch="args.hasSearch"
                            :dataSource="args.dataSource"
                            :className="args.className"
                        ></SideNav>
                    </Column>
                </Row>
            </Grid>
        `}),parameters:{controls:{},docs:{source:{transform:(r,a)=>{const{args:o}=a,p=d(o.dataSource);return["  <SideNav",`    themeColor="${o.themeColor}"`,`    logoSrc="${o.logoSrc}"`,`    logo="${o.logo}"`,`    logoLink="${o.logoLink}"`,`    :hasRWD="${o.hasRWD}"`,`    :hasLogo="${o.hasLogo}"`,`    :hasSearch="${o.hasSearch}"`,`    :dataSource="${p}"`,`    className="${o.className}"`,"  ></SideNav>"].join(`
`).trim()}}}}};var t,s,n;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  name: "預設項目",
  args: {
    themeColor: "blue",
    logoSrc: "https://storage.googleapis.com/ded-wds-bucket/AUO_LOGO.svg",
    logo: "SvgAuo",
    logoLink: "https://www.auo.com",
    hasRWD: false,
    hasLogo: true,
    hasSearch: true,
    dataSource: dataSource,
    className: ""
  },
  render: args => ({
    components: {
      SideNav,
      Grid,
      Column,
      Row
    },
    setup() {
      return {
        args
      };
    },
    template: \`
            <Grid fluid>
                <Row hasGap>
                    <Column xs="12" sm="4" md="4" style="text-align: start;">
                        <SideNav
                            :themeColor="args.themeColor"
                            :logoSrc="args.logoSrc"
                            :logo="args.logo"
                            :logoLink="args.logoLink"
                            :hasRWD="args.hasRWD"
                            :hasLogo="args.hasLogo"
                            :hasSearch="args.hasSearch"
                            :dataSource="args.dataSource"
                            :className="args.className"
                        ></SideNav>
                    </Column>
                </Row>
            </Grid>
        \`
  }),
  // 控制 controls 中能控制的參數
  parameters: {
    controls: {
      // include: ['themeColor', 'label', 'value', 'name' ],
    },
    docs: {
      source: {
        transform: (src, storyContext) => {
          const {
            args
          } = storyContext;
          const dataSourceString = formatDataSource(args.dataSource);
          return ['  <SideNav', \`    themeColor="\${args.themeColor}"\`, \`    logoSrc="\${args.logoSrc}"\`, \`    logo="\${args.logo}"\`, \`    logoLink="\${args.logoLink}"\`, \`    :hasRWD="\${args.hasRWD}"\`, \`    :hasLogo="\${args.hasLogo}"\`, \`    :hasSearch="\${args.hasSearch}"\`, \`    :dataSource="\${dataSourceString}"\`, \`    className="\${args.className}"\`, '  ></SideNav>'].join('\\n').trim();
        }
      }
    }
  }
}`,...(n=(s=e.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};const w=["SideNavDefault"];export{e as SideNavDefault,w as __namedExportsOrder,R as default};

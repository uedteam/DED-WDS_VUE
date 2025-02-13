import{_ as l}from"./SideNav-DTCfY56t.js";import{a as c,_ as i,b as g}from"./Column-BeQtJE1y.js";import"./vue.esm-bundler-qCK_iSPY.js";import"./Input-B5oZbn0w.js";import"./Icon-DNPtS85k.js";import"./iframe-B08jCWer.js";import"../sb-preview/runtime.js";import"./Menu-CSCeACfC.js";import"./Avatar-DE2ngrzr.js";import"./Image-C96WqIEk.js";import"./Button-DOqzoiF2.js";import"./Navbar-BXBRKbcZ.js";import"./Badge-C2eC-dNk.js";function d(r){return`[
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
    ]`}const u=[{label:"Home",path:"/Home",prefix:"SvgHome",order:"1"},{label:"User",path:"/users",prefix:"SvgUser",order:"2",children:[{label:"Profile",path:"/user/profile",order:"1"},{label:"Account",path:"/user/account",order:"2"}]},{label:"Chart",path:"/chart",prefix:"SvgBarChart",order:"3",children:[{label:"Profile",path:"/chart/profile",order:"1"},{label:"Account",path:"/chart/account",order:"2"},{label:"Account",path:"/chart/account",order:"3"},{label:"Account",path:"/chart/account",order:"4"}]},{label:"Database",path:"/database",prefix:"SvgDatabase",order:"4"},{label:"Favorite",path:"/favorite",prefix:"SvgFavorite",order:"5"},{label:"Calendar",path:"/calendar",prefix:"SvgCalendar",order:"6"},{label:"Notification",path:"/notification",prefix:"SvgNotification",order:"7"},{label:"Language",path:"/language",prefix:"SvgLanguage",order:"8"}],R={components:{Grid:c,Column:i,Row:g},title:"Component/SideNav",component:l,tags:["autodocs"],argTypes:{themeColor:{description:"背景顏色",control:{type:"select"},options:["blue","yellow","grape","black"],table:{type:{summary:"blue | yellow | grape | black"}}},logoSrc:{description:"Logo 圖片",control:{type:"text"}},logo:{description:"Logo 圖示",control:{type:"select",labels:{"":"none",SvgAuo:"SvgAuo"}},options:["","SvgAuo"],table:{type:{summary:"none | SvgAuo "}}},logoLink:{description:"Logo 連結",control:{type:"text"}},hasLogo:{description:"是否有 Logo",control:{type:"boolean"}},hasRWD:{description:"是否有側邊導覽",control:{type:"boolean"}},hasSearch:{description:"是否有搜尋欄",control:{type:"boolean"}},dataSource:{description:"資料來源",control:{type:"object"},table:{type:{summary:"{ label: string; path: string; prefix: string; order: string; children?: [ title:string; path:string; prefix:string; order: string;] }[]"}}},className:{description:"客製化樣式",control:{type:"text"}}},parameters:{docs:{title:"SideNav",description:{component:"側邊導覽組件的呈現及說明。"}}}},e={name:"預設項目",args:{themeColor:"blue",logoSrc:"https://storage.googleapis.com/ded-wds-bucket/AUO_LOGO.svg",logo:"SvgAuo",logoLink:"https://www.auo.com",hasLogo:!0,hasRWD:!0,hasSearch:!0,dataSource:u,className:""},render:r=>({components:{SideNav:l,Grid:c,Column:i,Row:g},setup(){return{args:r}},template:`
            <Grid fluid>
                <Row hasGap>
                    <Column xs="12" sm="4" md="4" style="text-align: start;">
                        <SideNav
                            :themeColor="args.themeColor"
                            :logoSrc="args.logoSrc"
                            :logo="args.logo"
                            :logoLink="args.logoLink"
                            :hasLogo="args.hasLogo"
                            :hasRWD="args.hasRWD"
                            :hasSearch="args.hasSearch"
                            :dataSource="args.dataSource"
                            :className="args.className"
                        ></SideNav>
                    </Column>
                </Row>
            </Grid>
        `}),parameters:{controls:{},docs:{source:{transform:(r,a)=>{const{args:o}=a,p=d(o.dataSource);return["  <SideNav",`    themeColor="${o.themeColor}"`,`    logoSrc="${o.logoSrc}"`,`    logo="${o.logo}"`,`    logoLink="${o.logoLink}"`,`    :hasLogo="${o.hasLogo}"`,`    :hasRWD="${o.hasRWD}"`,`    :hasSearch="${o.hasSearch}"`,`    :dataSource="${p}"`,`    className="${o.className}"`,"  ></SideNav>"].join(`
`).trim()}}}}};var t,n,s;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  name: "預設項目",
  args: {
    themeColor: "blue",
    logoSrc: "https://storage.googleapis.com/ded-wds-bucket/AUO_LOGO.svg",
    logo: "SvgAuo",
    logoLink: "https://www.auo.com",
    hasLogo: true,
    hasRWD: true,
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
                            :hasLogo="args.hasLogo"
                            :hasRWD="args.hasRWD"
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
          return ['  <SideNav', \`    themeColor="\${args.themeColor}"\`, \`    logoSrc="\${args.logoSrc}"\`, \`    logo="\${args.logo}"\`, \`    logoLink="\${args.logoLink}"\`, \`    :hasLogo="\${args.hasLogo}"\`, \`    :hasRWD="\${args.hasRWD}"\`, \`    :hasSearch="\${args.hasSearch}"\`, \`    :dataSource="\${dataSourceString}"\`, \`    className="\${args.className}"\`, '  ></SideNav>'].join('\\n').trim();
        }
      }
    }
  }
}`,...(s=(n=e.parameters)==null?void 0:n.docs)==null?void 0:s.source}}};const w=["SideNavDefault"];export{e as SideNavDefault,w as __namedExportsOrder,R as default};

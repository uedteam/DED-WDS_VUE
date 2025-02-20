import{_ as c}from"./SideNav-DO_coeXA.js";import{a as l,_ as i,b as g}from"./Column-BeQtJE1y.js";import"./vue.esm-bundler-qCK_iSPY.js";import"./Input-BuioBZ9f.js";import"./Icon-DK8hP1Y7.js";import"./iframe-BZcle8FH.js";import"../sb-preview/runtime.js";import"./Menu-D900-xzT.js";import"./Avatar-DezU23lS.js";import"./Image-C_88X1Bk.js";import"./Button-B0XnDZTy.js";import"./Navbar-B2Mwk5mz.js";import"./Badge-CzlomoDR.js";function d(r){return`[
        ${r.map(e=>`{
            label: '${e.label}',
            path: '${e.path}',
            prefix: '${e.prefix}',
            order: '${e.order}',
            ${e.children?`children: [
                ${e.children.map(o=>`{
                    label: '${o.title}',
                    path: '${o.path}',
                    prefix: '${o.prefix}',
                    order: '${o.order}',
                }`).join(`,
            `)}
            ]`:""}
        }`).join(`,
    `)}
    ]`}const m=[{label:"Home",path:"/Home",prefix:"SvgHome",order:"1"},{label:"User",path:"/users",prefix:"SvgUser",order:"2",children:[{label:"Profile",path:"/user/profile",order:"1"},{label:"Account",path:"/user/account",order:"2"}]},{label:"Chart",path:"/chart",prefix:"SvgBarChart",order:"3",children:[{label:"Profile",path:"/chart/profile",order:"1"},{label:"Account",path:"/chart/account",order:"2"},{label:"Account",path:"/chart/account",order:"3"},{label:"Account",path:"/chart/account",order:"4"}]},{label:"Database",path:"/database",prefix:"SvgDatabase",order:"4"},{label:"Favorite",path:"/favorite",prefix:"SvgFavorite",order:"5"},{label:"Calendar",path:"/calendar",prefix:"SvgCalendar",order:"6"},{label:"Notification",path:"/notification",prefix:"SvgNotification",order:"7"},{label:"Language",path:"/language",prefix:"SvgLanguage",order:"8"}],D={components:{Grid:l,Column:i,Row:g},title:"Component/SideNav",component:c,tags:["autodocs"],argTypes:{themeColor:{description:"背景顏色",control:{type:"select"},options:["blue","yellow","grape","black"],table:{type:{summary:"blue | yellow | grape | black"}}},mobileLogoSrc:{description:"手機 Logo 圖片",control:{type:"text"}},desktopLogoSrc:{description:"桌機 Logo 圖片",control:{type:"text"}},logoLink:{description:"Logo 連結",control:{type:"text"}},hasLogo:{description:"是否有 Logo",control:{type:"boolean"}},hasRWD:{description:"是否有側邊導覽",control:{type:"boolean"}},hasSearch:{description:"是否有搜尋欄",control:{type:"boolean"}},dataSource:{description:"資料來源",control:{type:"object"},table:{type:{summary:"{ label: string; path: string; prefix: string; order: string; children?: [ title:string; path:string; prefix:string; order: string;] }[]"}}},className:{description:"客製化樣式",control:{type:"text"}}},parameters:{docs:{title:"SideNav",description:{component:"側邊導覽組件的呈現及說明。"}}}},a={name:"預設項目",args:{themeColor:"blue",mobileLogoSrc:"https://storage.googleapis.com/ded-wds-bucket/AUO_LOGO.svg",desktopLogoSrc:"https://storage.googleapis.com/ded-wds-bucket/AUO_LOGO_W.svg",logoLink:"https://www.auo.com",hasLogo:!0,hasRWD:!0,hasSearch:!0,dataSource:m,className:""},render:r=>({components:{SideNav:c,Grid:l,Column:i,Row:g},setup(){return{args:r}},template:`
            <Grid fluid>
                <Row hasGap>
                    <Column xs="12" sm="4" md="4" style="text-align: start;">
                        <SideNav
                            :themeColor="args.themeColor"
                            :mobileLogoSrc="args.mobileLogoSrc"
                            :desktopLogoSrc="args.desktopLogoSrc"
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
        `}),parameters:{controls:{},docs:{source:{transform:(r,e)=>{const{args:o}=e,p=d(o.dataSource);return["  <SideNav",`    themeColor="${o.themeColor}"`,`    mobileLogoSrc="${o.mobileLogoSrc}"`,`    desktopLogoSrc="${o.desktopLogoSrc}"`,`    logoLink="${o.logoLink}"`,`    :hasLogo="${o.hasLogo}"`,`    :hasRWD="${o.hasRWD}"`,`    :hasSearch="${o.hasSearch}"`,`    :dataSource="${p}"`,`    className="${o.className}"`,"  ></SideNav>"].join(`
`).trim()}}}}};var t,s,n;a.parameters={...a.parameters,docs:{...(t=a.parameters)==null?void 0:t.docs,source:{originalSource:`{
  name: "預設項目",
  args: {
    themeColor: "blue",
    mobileLogoSrc: "https://storage.googleapis.com/ded-wds-bucket/AUO_LOGO.svg",
    desktopLogoSrc: "https://storage.googleapis.com/ded-wds-bucket/AUO_LOGO_W.svg",
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
                            :mobileLogoSrc="args.mobileLogoSrc"
                            :desktopLogoSrc="args.desktopLogoSrc"
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
          return ['  <SideNav', \`    themeColor="\${args.themeColor}"\`, \`    mobileLogoSrc="\${args.mobileLogoSrc}"\`, \`    desktopLogoSrc="\${args.desktopLogoSrc}"\`, \`    logoLink="\${args.logoLink}"\`, \`    :hasLogo="\${args.hasLogo}"\`, \`    :hasRWD="\${args.hasRWD}"\`, \`    :hasSearch="\${args.hasSearch}"\`, \`    :dataSource="\${dataSourceString}"\`, \`    className="\${args.className}"\`, '  ></SideNav>'].join('\\n').trim();
        }
      }
    }
  }
}`,...(n=(s=a.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};const w=["SideNavDefault"];export{a as SideNavDefault,w as __namedExportsOrder,D as default};

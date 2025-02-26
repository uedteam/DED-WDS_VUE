import{k as f,n as p,L as s,e,o as g,b as a,a as h}from"./vue.esm-bundler-CScppja8.js";import{c as _,d as l,a as b,b as y}from"./Side-D69AL95_.js";import{b as d,a as u,_ as c}from"./Column-CpWrOL1D.js";import{_ as S}from"./Navbar-BsxoIsXi.js";import{_ as x}from"./SideNav-D8L75QOn.js";import{_ as N}from"./Button-CM8vu3vj.js";import{_ as C}from"./Checkbox-BLJUxpbC.js";import{_ as G}from"./Input-BZG3XuL8.js";import"./Icon-Dil69s3n.js";import"./Badge-W5gYfqU3.js";import"./Avatar-TJj_ATkK.js";import"./Image-D6U5lRY8.js";import"./Menu-xZg57PhS.js";const m={__name:"Dashboard",props:{isGridSystem:{type:Boolean,default:!1},className:{type:String,default:""}},setup(o){const n=[{path:"/Home",prefix:"SvgHome",title:"Home"},{children:[{path:"/settings/profile",title:"Profile"},{path:"/settings/account",title:"Account"}],path:"/User",prefix:"SvgUser",title:"User"},{children:[{path:"/settings/profile",title:"Profile"},{path:"/settings/account",title:"Account"},{path:"/settings/account",title:"Account"},{path:"/settings/account",title:"Account"}],path:"/Chart",prefix:"SvgBarChart",title:"Chart"},{path:"/dashboard",prefix:"SvgDatabase",title:"Database"},{path:"/Favorite",prefix:"SvgFavorite",title:"Favorite"},{path:"/Calendar",prefix:"SvgCalendar",title:"Calendar"},{path:"/Notification",prefix:"SvgNotification",title:"Notification"},{path:"/Language",prefix:"SvgLanguage",title:"Language"}],t=o;return(k,r)=>t.isGridSystem?(g(),f(s(l),{key:0,class:p({[t.className]:!!t.className})},{default:e(()=>[a(d,{fluid:""},{default:e(()=>[a(u,{hasGap:!1},{default:e(()=>[a(c,{sm:"12"},{default:e(()=>[a(s(_),null,{default:e(()=>[a(S,{dataSource:[{href:"#solutions",label:"Solutions",order:2},{href:"#products",label:"Products",order:1},{href:"#technologies",label:"Technologies",order:4},{href:"#about",label:"About",order:3}],logoSrc:"https://storage.googleapis.com/ded-wds-bucket/AUO_LOGO.svg"})]),_:1})]),_:1})]),_:1})]),_:1}),a(s(l),null,{default:e(()=>[a(d,{fluid:""},{default:e(()=>[a(u,{hasGap:!1},{default:e(()=>[a(c,{sm:"3"},{default:e(()=>[a(s(b),null,{default:e(()=>[a(x,{dataSource:n,hasLogo:!1,hasRWD:!1,hasSearch:"",logo:"SvgAuo",logoLink:"https://www.auo.com",themeColor:"blue",style:{height:"100vh"}})]),_:1})]),_:1}),a(c,{sm:"9"},{default:e(()=>[a(s(y),null,{default:e(()=>r[0]||(r[0]=[h("div",{style:{"align-items":"center","background-color":"#0958d9",color:"#fff",display:"flex",height:"100vh","justify-content":"center",width:"100%"}}," content ",-1)])),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["class"])):(g(),f(s(l),{key:1,class:p({[t.className]:!!t.className})},{default:e(()=>[a(s(_),null,{default:e(()=>[a(S,{dataSource:[{href:"#solutions",label:"Solutions",order:2},{href:"#products",label:"Products",order:1},{href:"#technologies",label:"Technologies",order:4},{href:"#about",label:"About",order:3}],logoSrc:"https://storage.googleapis.com/ded-wds-bucket/AUO_LOGO.svg"})]),_:1}),a(s(l),null,{default:e(()=>[a(s(b),null,{default:e(()=>[a(x,{dataSource:n,hasLogo:!1,hasRWD:!1,hasSearch:"",logo:"SvgAuo",logoLink:"https://www.auo.com",themeColor:"blue",style:{height:"100vh"}})]),_:1}),a(s(y),null,{default:e(()=>r[1]||(r[1]=[h("div",{style:{"align-items":"center","background-color":"#0958d9",color:"#fff",display:"flex",height:"100vh","justify-content":"center",width:"100%"}}," content ",-1)])),_:1})]),_:1})]),_:1},8,["class"]))}};m.__docgenInfo={exportName:"default",displayName:"Dashboard",description:"",tags:{},props:[{name:"isGridSystem",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"className",type:{name:"string"},defaultValue:{func:!1,value:'""'}}],sourceFiles:["D:/98_測試/up/DED-WDS_VUE/libs/src/ui/template/Dashboard/Dashboard.vue"]};const T={title:"Template/Dashboard",component:m,tags:["autodocs"],argTypes:{isGridSystem:{description:"開啟格線系統",control:{type:"boolean"}},className:{description:"客製化樣式",control:{type:"text"}}},parameters:{docs:{title:"Dashboard",description:{component:"Dashboard 組件的呈現及說明。"}}}},i={name:"預設項目",args:{isGridSystem:!1,className:""},render:o=>({components:{Dashboard:m,Grid:d,Row:u,Column:c,Checkbox:C,Button:N,Input:G},setup(){return{args:o}},template:`
            <Dashboard
                :isGridSystem="args.isGridSystem"
                :className="args.className"
            >
            </Dashboard>
        `}),parameters:{controls:{},docs:{source:{transform:(o,n)=>{const{args:t}=n;return[].join(`
`).trim()}}}}};var v,D,$;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:`{
  name: '預設項目',
  args: {
    //props
    isGridSystem: false,
    className: ""
  },
  render: args => ({
    components: {
      Dashboard,
      Grid,
      Row,
      Column,
      Checkbox,
      Button,
      Input
    },
    setup() {
      return {
        args
      };
    },
    template: \`
            <Dashboard
                :isGridSystem="args.isGridSystem"
                :className="args.className"
            >
            </Dashboard>
        \`
  }),
  // 控制 controls 中能控制的參數
  parameters: {
    controls: {
      // include: ['fluid', 'className', 'justify', 'align', 'g', 'gx', 'gy', 'col', 'sm', 'md', 'lg', 'xl', 'xxl'],
    },
    docs: {
      source: {
        transform: (src, storyContext) => {
          const {
            args
          } = storyContext;
          return [
            // \`<Grid\`,
            // \`  :fluid="\${args.fluid}"\`,
            // \`  :gap="\${args.gap}"\`,
            // \`  :className="\${args.className}"\`,
            // \`>\`,
            // \`  <Row\`,
            // \`    :justify="\${args.justify}"\`,
            // \`    :alignItem="\${args.alignItem}"\`,
            // \`    :hasGap="\${args.hasGap}"\`,
            // \`  >\`,
            // \`    <Column\`,
            // \`      v-for="(index) in 12"\`,
            // \`      :key="index"\`,
            // \`      :align="\${args.align}"\`,
            // \`      :xs="\${args.xs}"\`,
            // \`      :sm="\${args.sm}"\`,
            // \`      :md="\${args.md}"\`,
            // \`      :lg="\${args.lg}"\`,
            // \`      :xl="\${args.xl}"\`,
            // \`    >\`,
            // \`      <div\`,
            // \`        class="diagonal-background"\`,
            // \`        style="border:1px solid #ccc; padding:8px 16px;"\`,
            // \`      >\`,
            // \`        Column {{index}}\`,
            // \`      </div>\`,
            // \`    </Column>\`,
            // \`  </Row>\`,
            // \`</Grid>\`,
          ].join("\\n").trim();
        }
      }
    }
  }
}`,...($=(D=i.parameters)==null?void 0:D.docs)==null?void 0:$.source}}};const H=["defaultDashboardStory"];export{H as __namedExportsOrder,T as default,i as defaultDashboardStory};

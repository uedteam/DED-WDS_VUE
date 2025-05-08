import{_ as N}from"./Button-oTbtdPII.js";import{_ as k}from"./Checkbox-DmV86FMJ.js";import{_ as O}from"./Input-C3KTpT6X.js";import{b as d,a as i,_ as n}from"./Row-BQQLdAFN.js";import{j as p,n as f,M as s,e as a,o as h,b as e,a as g}from"./vue.esm-bundler-CRlgvgXF.js";import{_ as b}from"./Navbar-A-oQziVP.js";import{_}from"./SideNav-D76IEyLd.js";import{c as y,d as t,a as D,b as S}from"./Side-BkaqwXDe.js";import"./Icon-CUK9ssyM.js";import"./v4-CtRu48qb.js";import"./Avatar-DEAbmdOp.js";import"./Image-DOaV9TQg.js";import"./Badge-B0HrWBD3.js";import"./Menu-BQqlg1kN.js";const u={__name:"Dashboard",props:{isGridSystem:{type:Boolean,default:!1},className:{type:String,default:""}},setup(c){const o=c,m=[{label:"Home",prefix:"SvgHome",path:"/Home",order:1},{label:"User",prefix:"SvgUser",path:"/users",order:2,children:[{label:"Profile",path:"/user/profile",order:1},{label:"Account",path:"/user/account",order:2}]},{label:"Chart",prefix:"SvgBarChart",path:"/chart",order:3,children:[{label:"Profile",path:"/chart/profile",order:1},{label:"Account",path:"/chart/account",order:2},{label:"Account",path:"/chart/account",order:3},{label:"Account",path:"/chart/account",order:4}]},{label:"Database",prefix:"SvgDatabase",path:"/database",order:4},{label:"Favorite",prefix:"SvgFavorite",path:"/favorite",order:5},{label:"Calendar",prefix:"SvgCalendar",path:"/calendar",order:6},{label:"Notification",prefix:"SvgNotification",path:"/notification",order:7},{label:"Language",prefix:"SvgLanguage",path:"/language",order:8}];return(G,r)=>o.isGridSystem?(h(),p(s(t),{key:0,class:f({[o.className]:!!o.className})},{default:a(()=>[e(d,{fluid:""},{default:a(()=>[e(i,{"has-gap":!1},{default:a(()=>[e(n,{sm:"12"},{default:a(()=>[e(s(y),null,{default:a(()=>[e(b,{"data-source":[{href:"#solutions",label:"Solutions",order:2},{href:"#products",label:"Products",order:1},{href:"#technologies",label:"Technologies",order:4},{href:"#about",label:"About",order:3}],"logo-src":"https://storage.googleapis.com/ded-wds-bucket/AUO_LOGO.svg"})]),_:1})]),_:1})]),_:1})]),_:1}),e(s(t),null,{default:a(()=>[e(d,{fluid:""},{default:a(()=>[e(i,{"has-gap":!1},{default:a(()=>[e(n,{sm:"3"},{default:a(()=>[e(s(D),null,{default:a(()=>[e(_,{"theme-color":"blue","mobile-logo-src":"https://storage.googleapis.com/ded-wds-bucket/AUO_LOGO.svg","desktop-logo-src":"https://storage.googleapis.com/ded-wds-bucket/AUO_LOGO_W.svg","logo-link":"https://www.auo.com","has-logo":!1,"has-r-w-d":!1,"user-name":"John Doe",caption:"Software Engineer","user-status":"online","has-search":!0,"data-source":m,style:{height:"100vh"}})]),_:1})]),_:1}),e(n,{sm:"9"},{default:a(()=>[e(s(S),null,{default:a(()=>r[0]||(r[0]=[g("div",{style:{"align-items":"center","background-color":"#0958d9",color:"#fff",display:"flex",height:"100vh","justify-content":"center",width:"100%"}}," content ",-1)])),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["class"])):(h(),p(s(t),{key:1,class:f({[o.className]:!!o.className})},{default:a(()=>[e(s(y),null,{default:a(()=>[e(b,{"data-source":[{href:"#solutions",label:"Solutions",order:2},{href:"#products",label:"Products",order:1},{href:"#technologies",label:"Technologies",order:4},{href:"#about",label:"About",order:3}],"logo-src":"https://storage.googleapis.com/ded-wds-bucket/AUO_LOGO.svg"})]),_:1}),e(s(t),null,{default:a(()=>[e(s(D),null,{default:a(()=>[e(_,{"theme-color":"blue","mobile-logo-src":"https://storage.googleapis.com/ded-wds-bucket/AUO_LOGO.svg","desktop-logo-src":"https://storage.googleapis.com/ded-wds-bucket/AUO_LOGO_W.svg","logo-link":"https://www.auo.com","has-logo":!1,"has-r-w-d":!1,"user-name":"John Doe",caption:"Software Engineer","user-status":"online","has-search":!0,"data-source":m,style:{height:"100vh"}})]),_:1}),e(s(S),null,{default:a(()=>r[1]||(r[1]=[g("div",{style:{"align-items":"center","background-color":"#0958d9",color:"#fff",display:"flex",height:"100vh","justify-content":"center",width:"100%"}}," content ",-1)])),_:1})]),_:1})]),_:1},8,["class"]))}};u.__docgenInfo={exportName:"default",displayName:"Dashboard",description:"",tags:{},props:[{name:"isGridSystem",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"className",type:{name:"string"},defaultValue:{func:!1,value:'""'}}],sourceFiles:["/home/runner/work/DED-WDS_VUE/DED-WDS_VUE/libs/src/ui/template/Dashboard/Dashboard.vue"]};const I={title:"Template/Dashboard",component:u,tags:["autodocs"],argTypes:{isGridSystem:{description:"開啟格線系統",control:{type:"boolean"}},className:{description:"客製化樣式",control:{type:"text"}}},parameters:{docs:{title:"Dashboard",description:{component:"Dashboard 組件的呈現及說明。"}}}},l={name:"預設項目",args:{isGridSystem:!1,className:""},render:c=>({components:{Dashboard:u,Grid:d,Row:i,Column:n,Checkbox:k,Button:N,Input:O},setup(){return{args:c}},template:`
      <Dashboard
        :isGridSystem="args.isGridSystem"
        :className="args.className"
      >
      </Dashboard>`}),parameters:{controls:{}}};var v,w,x;l.parameters={...l.parameters,docs:{...(v=l.parameters)==null?void 0:v.docs,source:{originalSource:`{
  name: "預設項目",
  args: {
    // props
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
      </Dashboard>\`
  }),
  // 控制 controls 中能控制的參數
  parameters: {
    controls: {
      // include: ['fluid', 'className', 'justify', 'align', 'g', 'gx', 'gy', 'col', 'sm', 'md', 'lg', 'xl', 'xxl'],
    }
  }
}`,...(x=(w=l.parameters)==null?void 0:w.docs)==null?void 0:x.source}}};const J=["defaultDashboardStory"];export{J as __namedExportsOrder,I as default,l as defaultDashboardStory};

import{h as C,g as p,E as c,d as i,o,b as t,a as b,c as r,e as u,x as N}from"./vue.esm-bundler-D0YZwI1O.js";import{a as k,_ as L,b as x}from"./Column-ITLnk9E2.js";import{_ as w}from"./Input-CcDThj1G.js";import{_ as D}from"./Menu-B1bp5A_H.js";import{_ as g}from"./Avatar-GfF4H_Oq.js";import{_ as m}from"./Button-DNzccG-4.js";import{_ as h}from"./Icon-BEQChxlu.js";import"./Image-DHXTRmVG.js";import"./iframe-BAU84F5S.js";import"../sb-preview/runtime.js";const A={key:0,class:"ded-side-nav-header"},V={key:0,class:"ded-side-nav-header-logo"},E=["href"],W={key:1,class:"ded-side-nav-desktop"},B={key:2,class:"ded-side-nav-mobile"},d={__name:"SideNav",props:{themeColor:{type:String,default:"blue"},logoSrc:{type:String,default:""},logo:{type:String,default:""},logoLink:{type:String,default:""},hasRWD:{type:Boolean,default:!1},hasLogo:{type:Boolean,default:!1},hasSearch:{type:Boolean,default:!1},dataSource:{type:Array,required:!0},className:{type:String,default:""}},setup(l){const e=l,a=C(!1),y=()=>{a.value=!a.value,console.log("Collapsed status:",a.value)},_=p(()=>{switch(e.themeColor){case"blue":return{backgroundColor:"#00467C"};case"yellow":return{backgroundColor:"#F4E069"};case"grape":return{backgroundColor:"#AB86D1"};case"black":return{backgroundColor:"#000000"};default:return{backgroundColor:"#ffffff"}}}),n=p(()=>{switch(e.themeColor){case"blue":return"#ffffff";case"yellow":return"#004E81";case"grape":return"#004E81";case"black":return"#cccccc";default:return"#000000"}});return($,O)=>(o(),c(k,{fluid:""},{default:i(()=>[t(x,{hasGap:""},{default:i(()=>[t(L,{xs:"12",sm:"4",md:"4",style:{"text-align":"start"}},{default:i(()=>[b("div",{class:"ded-side-nav",style:N({width:a.value?"auto":"100%",..._.value})},[e.hasLogo?(o(),r("div",A,[a.value?u("",!0):(o(),r("div",V,[e.logoLink?(o(),r("a",{key:0,href:e.logoLink},[t(h,{name:e.logo,width:"90",height:"30",color:n.value},null,8,["name","color"])],8,E)):(o(),c(h,{key:1,name:e.logo,width:"90",height:"30",color:n.value},null,8,["name","color"]))])),t(m,{class:"side-nav-toggle",themeColor:"primary",variant:"text",size:"large",prefix:"SvgArrowLeft",onClick:y})])):u("",!0),a.value?(o(),r("div",B,[t(g,{shape:"circle",size:"small",status:"online",isShowInfo:!1,src:"https://storage.googleapis.com/ded-wds-bucket/fox.png",alt:"無圖顯示",userName:"Name",caption:"Caption",className:""})])):(o(),r("div",W,[t(g,{shape:"circle",size:"large",status:"online",isShowInfo:!0,src:"https://storage.googleapis.com/ded-wds-bucket/fox.png",alt:"無圖顯示",userName:"Name",caption:"Caption",className:""}),t(m,{themeColor:"primary",variant:"text",size:"large",prefix:"SvgLogout"})])),!a.value&&e.hasSearch?(o(),c(w,{key:3,type:"text",placeholder:"Jony Search...",prefix:"SvgSearch",size:"medium",initValue:"",onChange:()=>{}})):u("",!0),t(D,{dataSource:e.dataSource,isCollapsed:a.value,color:n.value,hasDivider:!1,className:""},null,8,["dataSource","isCollapsed","color"])],4)]),_:1})]),_:1})]),_:1}))}};d.__docgenInfo={exportName:"default",displayName:"SideNav",description:"",tags:{},props:[{name:"themeColor",type:{name:"string"},defaultValue:{func:!1,value:'"blue"'}},{name:"logoSrc",type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"logo",type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"logoLink",type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"hasRWD",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"hasLogo",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"hasSearch",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"dataSource",type:{name:"array"},required:!0},{name:"className",type:{name:"string"},defaultValue:{func:!1,value:'""'}}],sourceFiles:["D:/98_測試/up/DED-WDS_VUE/libs/src/ui/element/SideNav/SideNav.vue"]};const R=[{title:"Home",prefix:"SvgHome",path:"/Home"},{title:"User",prefix:"SvgUser",path:"/users",children:[{title:"Profile",path:"/user/profile"},{title:"Account",path:"/user/account"}]},{title:"Chart",prefix:"SvgBarChart",path:"/chart",children:[{title:"Profile",path:"/chart/profile"},{title:"Account",path:"/chart/account"},{title:"Account",path:"/chart/account"},{title:"Account",path:"/chart/account"}]},{title:"Database",prefix:"SvgDatabase",path:"/database"},{title:"Favorite",prefix:"SvgFavorite",path:"/favorite"},{title:"Calendar",prefix:"SvgCalendar",path:"/calendar"},{title:"Notification",prefix:"SvgNotification",path:"/notification"},{title:"Language",prefix:"SvgLanguage",path:"/language"}],J={title:"Component/SideNav",component:d,tags:["autodocs"],argTypes:{themeColor:{description:"背景顏色",control:{type:"select"},options:["blue","yellow","grape","black"],table:{type:{summary:"blue | yellow | grape | black"}}},logoSrc:{description:"Logo 圖片",control:{type:"text"}},logo:{description:"Logo 圖示",control:{type:"text"}},logoLink:{description:"Logo 連結",control:{type:"text"}},hasRWD:{description:"是否有側邊導覽",control:{type:"boolean"}},hasLogo:{description:"是否有 Logo",control:{type:"boolean"}},hasSearch:{description:"是否有搜尋欄",control:{type:"boolean"}},dataSource:{description:"資料來源",control:{type:"object"},table:{type:{summary:"{ title: string; prefix: string; path: string; children?: [ title: string; prefix: string; path:string;] }[]"}}},className:{description:"客製化樣式",control:{type:"text"}}},parameters:{docs:{title:"SideNav",description:{component:"側邊導覽組件的呈現及說明。"}}}},s={name:"預設項目",args:{themeColor:"blue",logoSrc:"https://storage.googleapis.com/ded-wds-bucket/AUO_LOGO.svg",logo:"SvgAuo",logoLink:"https://www.auo.com",hasRWD:!1,hasLogo:!0,hasSearch:!0,dataSource:R,className:""},render:l=>({components:{SideNav:d},setup(){return{args:l}},template:`
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
        `}),parameters:{controls:{}}};var f,S,v;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  name: '預設項目',
  args: {
    themeColor: 'blue',
    logoSrc: 'https://storage.googleapis.com/ded-wds-bucket/AUO_LOGO.svg',
    logo: 'SvgAuo',
    logoLink: 'https://www.auo.com',
    hasRWD: false,
    hasLogo: true,
    hasSearch: true,
    dataSource: dataSource,
    className: ''
  },
  render: args => ({
    components: {
      SideNav
    },
    setup() {
      return {
        args
      };
    },
    template: \`
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
        \`
  }),
  // 控制 controls 中能控制的參數
  parameters: {
    controls: {
      // include: ['themeColor', 'label', 'value', 'name' ],
    }
  }
}`,...(v=(S=s.parameters)==null?void 0:S.docs)==null?void 0:v.source}}};const K=["SideNavDefault"];export{s as SideNavDefault,K as __namedExportsOrder,J as default};

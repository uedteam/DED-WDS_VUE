import{o as e,a,t as S,n as P,j as B,c as g,b as p,F as h,k as _,d as N,p as V}from"./vue.esm-bundler-CsTC-5Ev.js";const I=["href"],A={__name:"BreadcrumbItem",props:{label:{type:String},href:{type:String},isCurrentPage:{type:Boolean}},setup(n){const t=n;return(s,u)=>(e(),a("a",{class:P(t.isCurrentPage?"breadcrumb-item-label":"breadcrumb-item-link"),href:t.href},S(t.label),11,I))}};A.__docgenInfo={exportName:"default",displayName:"BreadcrumbItem",description:"",tags:{},props:[{name:"label",type:{name:"string"}},{name:"href",type:{name:"string"}},{name:"isCurrentPage",type:{name:"boolean"}}],sourceFiles:["/Users/auouser/Desktop/Work_Space/DED-WDS_VUE/libs/src/ui/element/Breadcrumb/BreadcrumbItem.vue"]};const U={class:"breadcrumb-container undefined"},W={class:"breadcrumb"},$={class:"breadcrumb-item"},q={key:0,class:"rest"},M={key:0,class:"rest-dropdown-menu"},O={class:"drop-item"},j=["href"],o={__name:"Breadcrumb",props:{breadcrumbData:{type:Array,required:!0,default:()=>[]},title:{type:String},href:{type:String}},setup(n){const s=B([...n.breadcrumbData]);console.log(s.value.length);const u=g(()=>{const r=s.value;return r.length>3?[r[0],{label:"...",href:"#"},...r.slice(-2)]:r}),i=g(()=>{const r=s.value;return r.length>3?r.slice(1,-2):[]});console.log("1st",u.value),console.log("2nd",i.value);const m=B(!1),F=()=>{m.value=!m.value};return(r,f)=>(e(),a("nav",U,[p("ul",W,[(e(!0),a(h,null,_(u.value,(d,x)=>(e(),a("li",$,[d.label==="..."?(e(),a("div",q,[p("span",{class:"rest-label",onClick:f[0]||(f[0]=b=>F())},"..."),m.value?(e(),a("ul",M,[(e(!0),a(h,null,_(i.value,b=>(e(),a("li",O,[p("a",{class:"drop-item-link",href:b.href},S(b.label),9,j)]))),256))])):N("",!0)])):(e(),V(A,{key:1,label:d.label,href:d.href,isCurrentPage:x===u.value.length-1},null,8,["label","href","isCurrentPage"]))]))),256))])]))}};o.__docgenInfo={exportName:"default",displayName:"Breadcrumb",description:"",tags:{},props:[{name:"breadcrumbData",type:{name:"array"},required:!0,defaultValue:{func:!1,value:"[]"}},{name:"title",type:{name:"string"}},{name:"href",type:{name:"string"}}],sourceFiles:["/Users/auouser/Desktop/Work_Space/DED-WDS_VUE/libs/src/ui/element/Breadcrumb/Breadcrumb.vue"]};const z={title:"Design System/Breadcrumb",component:o,tags:["autodocs"],argTypes:{breadcrumbData:{description:"Breadcrumb資料接口",control:{type:"text"}}},parameters:{docs:{title:"Breadcrumb",description:{component:"Breadcrumb組件的呈現及說明。"}}}},l={name:"Breadcrumb基礎樣式",args:{breadcrumbData:[{label:"首頁",href:"/"},{label:"第一層",href:"/1st"},{label:"當前頁"}]},render:n=>({components:{Breadcrumb:o},setup(){return{args:n}},template:`
            <Breadcrumb
                            :breadcrumbData="args.breadcrumbData"
                        ></Breadcrumb>
        `}),parameters:{controls:{}}},c={name:"Breadcrumb多資料層表示",args:{breadcrumbData:[{label:"首頁",href:"/"},{label:"第一層",href:"/1st"},{label:"第二層",href:"/2nd"},{label:"第三層",href:"/3rd"},{label:"第n層",href:"/nPages"},{label:"當前頁"}]},render:n=>({components:{Breadcrumb:o},setup(){return{args:n}},template:`
            <Breadcrumb
                            :breadcrumbData="args.breadcrumbData"
                        ></Breadcrumb>
        `}),parameters:{controls:{}}};var D,C,y;l.parameters={...l.parameters,docs:{...(D=l.parameters)==null?void 0:D.docs,source:{originalSource:`{
  name: "Breadcrumb基礎樣式",
  args: {
    breadcrumbData: [{
      label: "首頁",
      href: "/"
    }, {
      label: "第一層",
      href: "/1st"
    }, {
      label: "當前頁"
    }]
  },
  render: args => ({
    components: {
      Breadcrumb
    },
    setup() {
      return {
        args
      };
    },
    template: \`
            <Breadcrumb
                            :breadcrumbData="args.breadcrumbData"
                        ></Breadcrumb>
        \`
  }),
  // 控制 controls 中能控制的參數
  parameters: {
    controls: {
      // include: ['themeColor', 'label', 'value', 'name' ],
    }
  }
}`,...(y=(C=l.parameters)==null?void 0:C.docs)==null?void 0:y.source}}};var v,k,E;c.parameters={...c.parameters,docs:{...(v=c.parameters)==null?void 0:v.docs,source:{originalSource:`{
  name: "Breadcrumb多資料層表示",
  args: {
    breadcrumbData: [{
      label: "首頁",
      href: "/"
    }, {
      label: "第一層",
      href: "/1st"
    }, {
      label: "第二層",
      href: "/2nd"
    }, {
      label: "第三層",
      href: "/3rd"
    }, {
      label: "第n層",
      href: "/nPages"
    }, {
      label: "當前頁"
    }]
  },
  render: args => ({
    components: {
      Breadcrumb
    },
    setup() {
      return {
        args
      };
    },
    template: \`
            <Breadcrumb
                            :breadcrumbData="args.breadcrumbData"
                        ></Breadcrumb>
        \`
  }),
  // 控制 controls 中能控制的參數
  parameters: {
    controls: {
      // include: ['themeColor', 'label', 'value', 'name' ],
    }
  }
}`,...(E=(k=c.parameters)==null?void 0:k.docs)==null?void 0:E.source}}};const L=["BreadcrumbDefault","BreadcrumbMany"];export{l as BreadcrumbDefault,c as BreadcrumbMany,L as __namedExportsOrder,z as default};

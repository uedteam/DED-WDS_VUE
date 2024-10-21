import{c as s,t as v,n as D,o as a,r as f,w as S,g as B,b as d,F as g,d as _,k as x,l as V}from"./vendor-M1HcLtCc.js";const F=["href"],i={__name:"BreadcrumbItem",props:{label:{type:String},href:{type:String},isCurrentPage:{type:Boolean}},setup(n){const r=n;return(t,l)=>(a(),s("a",{class:D(r.isCurrentPage?"breadcrumb-item-label":"breadcrumb-item-link"),href:r.href},v(r.label),11,F))}};i.__docgenInfo={exportName:"default",displayName:"BreadcrumbItem",description:"",tags:{},props:[{name:"label",type:{name:"string"}},{name:"href",type:{name:"string"}},{name:"isCurrentPage",type:{name:"boolean"}}],sourceFiles:["D:/98_測試/up/DED-WDS_VUE/libs/src/ui/element/Breadcrumb/BreadcrumbItem.vue"]};const I={class:"breadcrumb"},P={class:"breadcrumb-item"},w={key:0,class:"rest"},A={key:0,class:"rest-dropdown-menu"},$={class:"drop-item"},M=["href"],b={__name:"Breadcrumb",props:{items:{type:Array,default:()=>[]},label:{type:String},href:{type:String},className:{type:String,default:""}},setup(n){const r=n,t=f([...r.items]);S(()=>r.items,e=>{t.value=[...e]});const l=B(()=>{const e=t.value;return e.length>3?[e[0],{label:"...",href:"#"},...e.slice(-2)]:e}),p=B(()=>{const e=t.value;return e.length>3?e.slice(1,-2):[]});console.log("1st",l.value),console.log("2nd",p.value);const c=f(!1),E=()=>{c.value=!c.value};return(e,h)=>(a(),s("nav",{class:D({"breadcrumb-container":!0,[r.className]:!!r.className})},[d("ul",I,[(a(!0),s(g,null,_(l.value,(o,k)=>(a(),s("li",P,[o.label==="..."?(a(),s("div",w,[d("span",{class:"rest-label",onClick:h[0]||(h[0]=m=>E())},"..."),c.value?(a(),s("ul",A,[(a(!0),s(g,null,_(p.value,m=>(a(),s("li",$,[d("a",{class:"drop-item-link",href:m.href},v(m.label),9,M)]))),256))])):x("",!0)])):(a(),V(i,{key:1,label:o.label,href:o.href,isCurrentPage:k===l.value.length-1},null,8,["label","href","isCurrentPage"]))]))),256))])],2))}};b.__docgenInfo={exportName:"default",displayName:"Breadcrumb",description:"",tags:{},props:[{name:"items",type:{name:"array"},defaultValue:{func:!1,value:"[]"}},{name:"label",type:{name:"string"}},{name:"href",type:{name:"string"}},{name:"className",type:{name:"string"},defaultValue:{func:!1,value:"''"}}],sourceFiles:["D:/98_測試/up/DED-WDS_VUE/libs/src/ui/element/Breadcrumb/Breadcrumb.vue"]};const U={title:"Design System/Breadcrumb",component:b,subcomponents:{BreadcrumbItem:i},tags:["autodocs"],argTypes:{items:{description:"資料來源",control:{type:"object"}},className:{description:"客製化樣式",control:{type:"text"}}},parameters:{deepControls:{enabled:!0},docs:{title:"Breadcrumb",description:{component:"Breadcrumb 組件的呈現及說明。"}}}},u={name:"主要項目",args:{items:[{label:"首頁",href:"/"},{label:"第一層",href:"/1st"},{label:"第二層",href:"/2nd"},{label:"第三層",href:"/3rd"},{label:"第四層",href:"/4th"},{label:"第五層",href:"/5th"},{label:"第六層",href:"/6th"},{label:"第七層",href:"/7th"},{label:"第八層",href:"/8th"},{label:"當前頁"}],className:""},render:n=>({components:{Breadcrumb:b},setup(){return{args:n}},template:`
            <Breadcrumb
                :items="args.items"
                :className="args.className"
            ></Breadcrumb>
        `}),parameters:{controls:{include:["items","className"]}}};var y,C,N;u.parameters={...u.parameters,docs:{...(y=u.parameters)==null?void 0:y.docs,source:{originalSource:`{
  name: "主要項目",
  args: {
    items: [{
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
      label: "第四層",
      href: "/4th"
    }, {
      label: "第五層",
      href: "/5th"
    }, {
      label: "第六層",
      href: "/6th"
    }, {
      label: "第七層",
      href: "/7th"
    }, {
      label: "第八層",
      href: "/8th"
    }, {
      label: "當前頁"
    }],
    className: ""
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
                :items="args.items"
                :className="args.className"
            ></Breadcrumb>
        \`
  }),
  // 控制 controls 中能控制的參數
  parameters: {
    controls: {
      include: ['items', 'className']
    }
  }
}`,...(N=(C=u.parameters)==null?void 0:C.docs)==null?void 0:N.source}}};const W=["BreadcrumbMany"];export{u as BreadcrumbMany,W as __namedExportsOrder,U as default};

import{o as a,a as o,t as $,n as w,e as p,w as P,c as y,p as V,s as z,b as _,F as C,f as v,h as m,d as F,C as I,j,K as A}from"./vue.esm-bundler-C7FxdvdM.js";import{_ as O}from"./List-B1_AppfZ.js";import{_ as q}from"./ListItem-Bjcgrov6.js";const M=["href"],D={__name:"BreadcrumbItem",props:{label:{type:String},href:{type:String},isCurrentPage:{type:Boolean}},setup(n){const r=n;return(s,b)=>(a(),o("a",{class:w(r.isCurrentPage?"breadcrumb-item-label":"breadcrumb-item-link"),href:r.href},$(r.label),11,M))}};D.__docgenInfo={exportName:"default",displayName:"BreadcrumbItem",description:"",tags:{},props:[{name:"label",type:{name:"string"}},{name:"href",type:{name:"string"}},{name:"isCurrentPage",type:{name:"boolean"}}],sourceFiles:["D:/98_測試/up/DED-WDS_VUE/libs/src/ui/element/Breadcrumb/BreadcrumbItem.vue"]};const R={class:"breadcrumb"},T={key:0,class:"rest"},f={__name:"Breadcrumb",props:{dataSource:{type:Array,default:()=>[]},className:{type:String,default:""}},setup(n){const r=n,s=p([...r.dataSource]);P(()=>r.dataSource,e=>{s.value=[...e]});const b=y(()=>{const e=s.value;return e.length>3?[e[0],{label:"...",href:"#"},...e.slice(-2)]:e}),k=y(()=>{const e=s.value;return e.length>3?e.slice(1,-2):[]}),l=p(!1),u=p({top:0,left:0}),x=e=>{if(l.value=!l.value,l.value){const t=e.target.getBoundingClientRect();u.value={top:t.bottom+window.scrollY+8,left:t.left+window.scrollX},document.addEventListener("click",d)}else document.removeEventListener("click",d)},d=e=>{const t=document.querySelector(".rest"),c=document.querySelector(".rest-label");t&&c&&!t.contains(e.target)&&!c.contains(e.target)&&(l.value=!1,document.removeEventListener("click",d))},h=()=>{if(l.value){const e=document.querySelector(".rest-label");if(e){const t=e.getBoundingClientRect();u.value={top:t.bottom+window.scrollY+8,left:t.left+window.scrollX}}}};return V(()=>{window.addEventListener("resize",h)}),z(()=>{window.removeEventListener("resize",h),document.removeEventListener("click",d)}),(e,t)=>(a(),o("nav",{class:w(["breadcrumb-container",r.className])},[_("ul",R,[(a(!0),o(C,null,v(b.value,(c,g)=>(a(),o("li",{class:"breadcrumb-item",key:g},[c.label==="..."?(a(),o("div",T,[_("span",{class:"rest-label",onClick:x},"..."),(a(),m(A,{to:"body"},[l.value?(a(),m(O,{key:0,class:"col-3 rest",style:F({top:`${u.value.top}px`,left:`${u.value.left}px`,position:"absolute"})},{default:I(()=>[(a(!0),o(C,null,v(k.value,(B,L)=>(a(),m(q,{key:L,label:B.label,href:B.href,openInNewTab:!1},null,8,["label","href"]))),128))]),_:2},1032,["style"])):j("",!0)]))])):(a(),m(D,{key:1,label:c.label,href:c.href,isCurrentPage:g===b.value.length-1},null,8,["label","href","isCurrentPage"]))]))),128))])],2))}};f.__docgenInfo={exportName:"default",displayName:"Breadcrumb",description:"",tags:{},props:[{name:"dataSource",type:{name:"array"},defaultValue:{func:!1,value:"[]"}},{name:"className",type:{name:"string"},defaultValue:{func:!1,value:"''"}}],sourceFiles:["D:/98_測試/up/DED-WDS_VUE/libs/src/ui/element/Breadcrumb/Breadcrumb.vue"]};const Y={title:"Design System/Breadcrumb",component:f,tags:["autodocs"],argTypes:{dataSource:{description:"資料來源",control:{type:"object"},table:{type:{summary:"{ label: string; href?: string | undefined; }[]"}}},className:{description:"客製化樣式",control:{type:"text"}}},parameters:{deepControls:{enabled:!0},docs:{title:"Breadcrumb",description:{component:"Breadcrumb 組件的呈現及說明。"}}}},i={name:"預設項目",args:{dataSource:[{label:"首頁",href:"/"},{label:"第一層",href:"/1st"},{label:"第二層",href:"/2nd"},{label:"第三層",href:"/3rd"},{label:"第四層",href:"/4th"},{label:"第五層",href:"/5th"},{label:"第六層",href:"/6th"},{label:"第七層",href:"/7th"},{label:"第八層",href:"/8th"},{label:"當前頁"}],className:""},render:n=>({components:{Breadcrumb:f},setup(){return{args:n}},template:`
            <Breadcrumb
                :dataSource="args.dataSource"
                :className="args.className"
            ></Breadcrumb>
        `}),parameters:{controls:{include:["dataSource","className"]},docs:{source:{transform:(n,r)=>{const{args:s}=r;return["<Breadcrumb",'  :dataSource="dataSource"',`  className="${s.className}"`,">","</Breadcrumb>"].join(`
`).trim()}}}}};var S,E,N;i.parameters={...i.parameters,docs:{...(S=i.parameters)==null?void 0:S.docs,source:{originalSource:`{
  name: "預設項目",
  args: {
    dataSource: [{
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
                :dataSource="args.dataSource"
                :className="args.className"
            ></Breadcrumb>
        \`
  }),
  // 控制 controls 中能控制的參數
  parameters: {
    controls: {
      include: ['dataSource', 'className']
    },
    docs: {
      source: {
        transform: (src, storyContext) => {
          const {
            args
          } = storyContext;
          return ['<Breadcrumb', \`  :dataSource="dataSource"\`, \`  className="\${args.className}"\`, '>', '</Breadcrumb>'].join('\\n').trim();
        }
      }
    }
  }
}`,...(N=(E=i.parameters)==null?void 0:E.docs)==null?void 0:N.source}}};const K=["BreadcrumbMany"];export{i as BreadcrumbMany,K as __namedExportsOrder,Y as default};

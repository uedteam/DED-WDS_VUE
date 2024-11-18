import{o as a,a as l,t as L,n as w,e as b,w as P,c as B,q,x as z,b as _,F as h,k as v,g as i,d as F,D as I,f as V,T as j}from"./vue.esm-bundler-ChZ6yN_a.js";import{_ as A}from"./List-CMwUfLHC.js";import{_ as O}from"./ListItem-DxDh3a8h.js";const T=["href"],D={__name:"BreadcrumbItem",props:{label:{type:String},href:{type:String},isCurrentPage:{type:Boolean}},setup(n){const r=n;return(s,u)=>(a(),l("a",{class:w(r.isCurrentPage?"breadcrumb-item-label":"breadcrumb-item-link"),href:r.href},L(r.label),11,T))}};D.__docgenInfo={exportName:"default",displayName:"BreadcrumbItem",description:"",tags:{},props:[{name:"label",type:{name:"string"}},{name:"href",type:{name:"string"}},{name:"isCurrentPage",type:{name:"boolean"}}],sourceFiles:["D:/98_測試/up/DED-WDS_VUE/libs/src/ui/element/Breadcrumb/BreadcrumbItem.vue"]};const M={class:"breadcrumb"},R={key:0,class:"rest"},f={__name:"Breadcrumb",props:{dataSource:{type:Array,required:!0},className:{type:String,default:""}},setup(n){const r=n,s=b([...r.dataSource]);P(()=>r.dataSource,e=>{s.value=[...e]});const u=B(()=>{const e=s.value;return e.length>3?[e[0],{label:"...",href:"#"},...e.slice(-2)]:e}),k=B(()=>{const e=s.value;return e.length>3?e.slice(1,-2):[]}),o=b(!1),d=b({top:0,left:0}),$=e=>{if(o.value=!o.value,o.value){const t=e.target.getBoundingClientRect();d.value={top:t.bottom+window.scrollY+8,left:t.left+window.scrollX},document.addEventListener("click",m)}else document.removeEventListener("click",m)},m=e=>{const t=document.querySelector(".rest"),c=document.querySelector(".rest-label");t&&c&&!t.contains(e.target)&&!c.contains(e.target)&&(o.value=!1,document.removeEventListener("click",m))},g=()=>{if(o.value){const e=document.querySelector(".rest-label");if(e){const t=e.getBoundingClientRect();d.value={top:t.bottom+window.scrollY+8,left:t.left+window.scrollX}}}};return q(()=>{window.addEventListener("resize",g)}),z(()=>{window.removeEventListener("resize",g),document.removeEventListener("click",m)}),(e,t)=>(a(),l("nav",{class:w(["breadcrumb-container",r.className])},[_("ul",M,[(a(!0),l(h,null,v(u.value,(c,S)=>(a(),l("li",{class:"breadcrumb-item",key:S},[c.label==="..."?(a(),l("div",R,[_("span",{class:"rest-label",onClick:$},"..."),(a(),i(j,{to:"body"},[o.value?(a(),i(A,{key:0,class:"col-3 rest",style:F({top:`${d.value.top}px`,left:`${d.value.left}px`,position:"absolute"})},{default:I(()=>[(a(!0),l(h,null,v(k.value,(y,x)=>(a(),i(O,{key:x,label:y.label,href:y.href,openInNewTab:!1},null,8,["label","href"]))),128))]),_:2},1032,["style"])):V("",!0)]))])):(a(),i(D,{key:1,label:c.label,href:c.href,isCurrentPage:S===u.value.length-1},null,8,["label","href","isCurrentPage"]))]))),128))])],2))}};f.__docgenInfo={exportName:"default",displayName:"Breadcrumb",description:"",tags:{},props:[{name:"dataSource",type:{name:"array"},required:!0},{name:"className",type:{name:"string"},defaultValue:{func:!1,value:'""'}}],sourceFiles:["D:/98_測試/up/DED-WDS_VUE/libs/src/ui/element/Breadcrumb/Breadcrumb.vue"]};function U(n){return`[
        ${n.map(r=>`{
            label: "${r.label}",
            href: "${r.href}",
        }`).join(`,
    `)}
    ]`}const G={title:"Design System/Breadcrumb",component:f,tags:["autodocs"],argTypes:{dataSource:{description:"資料來源",control:{type:"object"},table:{type:{summary:"{ label: string; href?: string | undefined; }[]"}}},className:{description:"客製化樣式",control:{type:"text"}}},parameters:{deepControls:{enabled:!0},docs:{title:"Breadcrumb",description:{component:"Breadcrumb 組件的呈現及說明。"}}}},p={name:"預設項目",args:{dataSource:[{label:"首頁",href:"/"},{label:"第一層",href:"/1st"},{label:"第二層",href:"/2nd"},{label:"第三層",href:"/3rd"},{label:"當前頁"}],className:""},render:n=>({components:{Breadcrumb:f},setup(){return{args:n}},template:`
            <Breadcrumb
                :dataSource="args.dataSource"
                :className="args.className"
            ></Breadcrumb>
        `}),parameters:{controls:{include:["dataSource","className"]},docs:{source:{transform:(n,r)=>{const{args:s}=r;return["<Breadcrumb",`  :dataSource='${U(s.dataSource)}'`,`  className="${s.className}"`,">","</Breadcrumb>"].join(`
`).trim()}}}}};var C,N,E;p.parameters={...p.parameters,docs:{...(C=p.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
          const dataSourceString = formatDataSource(args.dataSource);
          return ['<Breadcrumb', \`  :dataSource='\${dataSourceString}'\`, \`  className="\${args.className}"\`, '>', '</Breadcrumb>'].join('\\n').trim();
        }
      }
    }
  }
}`,...(E=(N=p.parameters)==null?void 0:N.docs)==null?void 0:E.source}}};const H=["BreadcrumbMany"];export{p as BreadcrumbMany,H as __namedExportsOrder,G as default};

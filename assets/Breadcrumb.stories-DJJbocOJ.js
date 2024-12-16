import{o as a,c as s,t as E,n as k,f as b,w as P,e as S,j as q,l as j,d as i,F as v,B,C as _,q as z,b as F,T as I}from"./vue.esm-bundler-6KMnbbOi.js";const V=["href"],D={__name:"BreadcrumbItem",props:{label:{type:String},href:{type:String},isCurrentPage:{type:Boolean}},setup(n){const r=n;return(o,u)=>(a(),s("a",{class:k(r.isCurrentPage?"ded-breadcrumb-item-label":"ded-breadcrumb-item-link"),href:r.href},E(r.label),11,V))}};D.__docgenInfo={exportName:"default",displayName:"BreadcrumbItem",description:"",tags:{},props:[{name:"label",type:{name:"string"}},{name:"href",type:{name:"string"}},{name:"isCurrentPage",type:{name:"boolean"}}],sourceFiles:["D:/98_測試/up/DED-WDS_VUE/libs/src/ui/element/Breadcrumb/BreadcrumbItem.vue"]};const A={class:"ded-breadcrumb"},O={key:0,class:"ded-rest"},M={class:"ded-rest-dropdown-menu"},R=["href"],f={__name:"Breadcrumb",props:{dataSource:{type:Array,required:!0},className:{type:String,default:""}},setup(n){const r=n,o=b([...r.dataSource]);P(()=>r.dataSource,e=>{o.value=[...e]});const u=S(()=>{const e=o.value;return e.length>3?[e[0],{label:"...",href:"#"},...e.slice(-2)]:e}),L=S(()=>{const e=o.value;return e.length>3?e.slice(1,-2):[]}),c=b(!1),d=b({top:0,left:0}),$=e=>{if(c.value=!c.value,c.value){const t=e.target.getBoundingClientRect();d.value={top:t.bottom+window.scrollY+8,left:t.left+window.scrollX},document.addEventListener("click",m)}else document.removeEventListener("click",m)},m=e=>{const t=document.querySelector(".ded-rest"),l=document.querySelector(".ded-rest-label");t&&l&&!t.contains(e.target)&&!l.contains(e.target)&&(c.value=!1,document.removeEventListener("click",m))},g=()=>{if(c.value){const e=document.querySelector(".ded-rest-label");if(e){const t=e.getBoundingClientRect();d.value={top:t.bottom+window.scrollY+8,left:t.left+window.scrollX}}}};return q(()=>{window.addEventListener("resize",g)}),j(()=>{window.removeEventListener("resize",g),document.removeEventListener("click",m)}),(e,t)=>(a(),s("nav",{class:k({"ded-breadcrumb-container":!0,[r.className]:!!r.className})},[i("ol",A,[(a(!0),s(v,null,B(u.value,(l,h)=>(a(),s("li",{class:"ded-breadcrumb-item",key:h},[l.label==="..."?(a(),s("div",O,[i("span",{class:"ded-rest-label",onClick:$},"..."),(a(),_(I,{to:"body"},[c.value?(a(),s("div",{key:0,class:"ded-dropdown-menu",style:z({top:`${d.value.top}px`,left:`${d.value.left}px`,position:"absolute"})},[i("ul",M,[(a(!0),s(v,null,B(L.value,(y,x)=>(a(),s("li",{class:"ded-drop-item",key:x},[i("a",{class:"ded-drop-item-link",href:y.href},E(y.label),9,R)]))),128))])],4)):F("",!0)]))])):(a(),_(D,{key:1,label:l.label,href:l.href,isCurrentPage:h===u.value.length-1},null,8,["label","href","isCurrentPage"]))]))),128))])],2))}};f.__docgenInfo={exportName:"default",displayName:"Breadcrumb",description:"",tags:{},props:[{name:"dataSource",type:{name:"array"},required:!0},{name:"className",type:{name:"string"},defaultValue:{func:!1,value:'""'}}],sourceFiles:["D:/98_測試/up/DED-WDS_VUE/libs/src/ui/element/Breadcrumb/Breadcrumb.vue"]};function T(n){return`[
        ${n.map(r=>`{
            label: "${r.label}",
            href: "${r.href}",
        }`).join(`,
    `)}
    ]`}const H={title:"Component/Breadcrumb",component:f,tags:["autodocs"],argTypes:{dataSource:{description:"資料來源",control:{type:"object"},table:{type:{summary:"{ label: string; href?: string | undefined; }[]"}}},className:{description:"客製化樣式",control:{type:"text"}}},parameters:{deepControls:{enabled:!0},docs:{title:"Breadcrumb",description:{component:"Breadcrumb 組件的呈現及說明。"}}}},p={name:"預設項目",args:{dataSource:[{label:"Home",href:"/"},{label:"Level1",href:"/first"},{label:"Level2",href:"https://tw.yahoo.com"},{label:"Level3",href:"/first/second/third/n"},{label:"Current"}],className:""},render:n=>({components:{Breadcrumb:f},setup(){return{args:n}},template:`
            <Breadcrumb
                :dataSource="args.dataSource"
                :className="args.className"
            ></Breadcrumb>
        `}),parameters:{controls:{include:["dataSource","className"]},docs:{source:{transform:(n,r)=>{const{args:o}=r;return["<Breadcrumb",`  :dataSource='${T(o.dataSource)}'`,`  className="${o.className}"`,">","</Breadcrumb>"].join(`
`).trim()}}}}};var N,w,C;p.parameters={...p.parameters,docs:{...(N=p.parameters)==null?void 0:N.docs,source:{originalSource:`{
  name: "預設項目",
  args: {
    dataSource: [{
      "label": "Home",
      "href": "/"
    }, {
      "label": "Level1",
      "href": "/first"
    }, {
      "label": "Level2",
      "href": "https://tw.yahoo.com"
    }, {
      "label": "Level3",
      "href": "/first/second/third/n"
    }, {
      "label": "Current"
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
}`,...(C=(w=p.parameters)==null?void 0:w.docs)==null?void 0:C.source}}};const W=["BreadcrumbMany"];export{p as BreadcrumbMany,W as __namedExportsOrder,H as default};

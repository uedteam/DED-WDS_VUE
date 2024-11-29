import{o as a,a as l,t as x,n as E,e as b,w as P,c as v,q,x as j,b as _,F as h,j as B,l as i,d as z,E as F,f as I,T as U}from"./vue.esm-bundler-BHaSr8M7.js";import{_ as V}from"./List-CApCRBCE.js";import{_ as A}from"./ListItem-BeEj1NBi.js";const O=["href"],w={__name:"BreadcrumbItem",props:{label:{type:String},href:{type:String},isCurrentPage:{type:Boolean}},setup(n){const r=n;return(s,u)=>(a(),l("a",{class:E(r.isCurrentPage?"ded-breadcrumb-item-label":"ded-breadcrumb-item-link"),href:r.href},x(r.label),11,O))}};w.__docgenInfo={exportName:"default",displayName:"BreadcrumbItem",description:"",tags:{},props:[{name:"label",type:{name:"string"}},{name:"href",type:{name:"string"}},{name:"isCurrentPage",type:{name:"boolean"}}],sourceFiles:["/Users/auouser/Desktop/Work_Space/DED-WDS_VUE/libs/src/ui/element/Breadcrumb/BreadcrumbItem.vue"]};const T={class:"ded-breadcrumb"},W={key:0,class:"ded-rest"},f={__name:"Breadcrumb",props:{dataSource:{type:Array,required:!0},className:{type:String,default:""}},setup(n){const r=n,s=b([...r.dataSource]);P(()=>r.dataSource,e=>{s.value=[...e]});const u=v(()=>{const e=s.value;return e.length>3?[e[0],{label:"...",href:"#"},...e.slice(-2)]:e}),D=v(()=>{const e=s.value;return e.length>3?e.slice(1,-2):[]}),o=b(!1),d=b({top:0,left:0}),L=e=>{if(o.value=!o.value,o.value){const t=e.target.getBoundingClientRect();d.value={top:t.bottom+window.scrollY+8,left:t.left+window.scrollX},document.addEventListener("click",m)}else document.removeEventListener("click",m)},m=e=>{const t=document.querySelector(".rest"),c=document.querySelector(".rest-label");t&&c&&!t.contains(e.target)&&!c.contains(e.target)&&(o.value=!1,document.removeEventListener("click",m))},g=()=>{if(o.value){const e=document.querySelector(".rest-label");if(e){const t=e.getBoundingClientRect();d.value={top:t.bottom+window.scrollY+8,left:t.left+window.scrollX}}}};return q(()=>{window.addEventListener("resize",g)}),j(()=>{window.removeEventListener("resize",g),document.removeEventListener("click",m)}),(e,t)=>(a(),l("nav",{class:E(["ded-breadcrumb-container",r.className])},[_("ol",T,[(a(!0),l(h,null,B(u.value,(c,S)=>(a(),l("li",{class:"ded-breadcrumb-item",key:S},[c.label==="..."?(a(),l("div",W,[_("span",{class:"ded-rest-label",onClick:L},"..."),(a(),i(U,{to:"body"},[o.value?(a(),i(V,{key:0,class:"ded-col-3 ded-rest",style:z({top:`${d.value.top}px`,left:`${d.value.left}px`,position:"absolute"})},{default:F(()=>[(a(!0),l(h,null,B(D.value,(y,$)=>(a(),i(A,{key:$,label:y.label,href:y.href,openInNewTab:!1},null,8,["label","href"]))),128))]),_:2},1032,["style"])):I("",!0)]))])):(a(),i(w,{key:1,label:c.label,href:c.href,isCurrentPage:S===u.value.length-1},null,8,["label","href","isCurrentPage"]))]))),128))])],2))}};f.__docgenInfo={exportName:"default",displayName:"Breadcrumb",description:"",tags:{},props:[{name:"dataSource",type:{name:"array"},required:!0},{name:"className",type:{name:"string"},defaultValue:{func:!1,value:'""'}}],sourceFiles:["/Users/auouser/Desktop/Work_Space/DED-WDS_VUE/libs/src/ui/element/Breadcrumb/Breadcrumb.vue"]};function M(n){return`[
        ${n.map(r=>`{
            label: "${r.label}",
            href: "${r.href}",
        }`).join(`,
    `)}
    ]`}const Y={title:"Component/Breadcrumb",component:f,tags:["autodocs"],argTypes:{dataSource:{description:"資料來源",control:{type:"object"},table:{type:{summary:"{ label: string; href?: string | undefined; }[]"}}},className:{description:"客製化樣式",control:{type:"text"}}},parameters:{deepControls:{enabled:!0},docs:{title:"Breadcrumb",description:{component:"Breadcrumb 組件的呈現及說明。"}}}},p={name:"預設項目",args:{dataSource:[{label:"Home",href:"/"},{label:"Level1",href:"/1st"},{label:"Level2",href:"/2nd"},{label:"Level3",href:"/3rd"},{label:"Current"}],className:""},render:n=>({components:{Breadcrumb:f},setup(){return{args:n}},template:`
            <Breadcrumb
                :dataSource="args.dataSource"
                :className="args.className"
            ></Breadcrumb>
        `}),parameters:{controls:{include:["dataSource","className"]},docs:{source:{transform:(n,r)=>{const{args:s}=r;return["<Breadcrumb",`  :dataSource='${M(s.dataSource)}'`,`  className="${s.className}"`,">","</Breadcrumb>"].join(`
`).trim()}}}}};var N,k,C;p.parameters={...p.parameters,docs:{...(N=p.parameters)==null?void 0:N.docs,source:{originalSource:`{
  name: "預設項目",
  args: {
    dataSource: [{
      label: "Home",
      href: "/"
    }, {
      label: "Level1",
      href: "/1st"
    }, {
      label: "Level2",
      href: "/2nd"
    }, {
      label: "Level3",
      href: "/3rd"
    }, {
      label: "Current"
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
}`,...(C=(k=p.parameters)==null?void 0:k.docs)==null?void 0:C.source}}};const G=["BreadcrumbMany"];export{p as BreadcrumbMany,G as __namedExportsOrder,Y as default};

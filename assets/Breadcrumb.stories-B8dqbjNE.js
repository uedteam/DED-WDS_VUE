import{a as s,t as v,n as D,o as r,r as f,w as S,c as B,b as d,F as g,d as _,h as x,g as V}from"./vue.esm-bundler-wiEVvyCh.js";const F=["href"],b={__name:"BreadcrumbItem",props:{label:{type:String},href:{type:String},isCurrentPage:{type:Boolean}},setup(n){const e=n;return(t,l)=>(r(),s("a",{class:D(e.isCurrentPage?"breadcrumb-item-label":"breadcrumb-item-link"),href:e.href},v(e.label),11,F))}};b.__docgenInfo={exportName:"default",displayName:"BreadcrumbItem",description:"",tags:{},props:[{name:"label",type:{name:"string"}},{name:"href",type:{name:"string"}},{name:"isCurrentPage",type:{name:"boolean"}}],sourceFiles:["D:/98_測試/up/DED-WDS_VUE/libs/src/ui/element/Breadcrumb/BreadcrumbItem.vue"]};const I={class:"breadcrumb"},P={class:"breadcrumb-item"},$={key:0,class:"rest"},A={key:0,class:"rest-dropdown-menu"},j={class:"drop-item"},w=["href"],i={__name:"Breadcrumb",props:{datasource:{type:Array,default:()=>[]},label:{type:String},href:{type:String},className:{type:String,default:""}},setup(n){const e=n,t=f([...e.datasource]);S(()=>e.datasource,a=>{t.value=[...a]});const l=B(()=>{const a=t.value;return a.length>3?[a[0],{label:"...",href:"#"},...a.slice(-2)]:a}),p=B(()=>{const a=t.value;return a.length>3?a.slice(1,-2):[]});console.log("1st",l.value),console.log("2nd",p.value);const c=f(!1),E=()=>{c.value=!c.value};return(a,h)=>(r(),s("nav",{class:D({"breadcrumb-container":!0,[e.className]:!!e.className})},[d("ul",I,[(r(!0),s(g,null,_(l.value,(o,k)=>(r(),s("li",P,[o.label==="..."?(r(),s("div",$,[d("span",{class:"rest-label",onClick:h[0]||(h[0]=m=>E())},"..."),c.value?(r(),s("ul",A,[(r(!0),s(g,null,_(p.value,m=>(r(),s("li",j,[d("a",{class:"drop-item-link",href:m.href},v(m.label),9,w)]))),256))])):x("",!0)])):(r(),V(b,{key:1,label:o.label,href:o.href,isCurrentPage:k===l.value.length-1},null,8,["label","href","isCurrentPage"]))]))),256))])],2))}};i.__docgenInfo={exportName:"default",displayName:"Breadcrumb",description:"",tags:{},props:[{name:"datasource",type:{name:"array"},defaultValue:{func:!1,value:"[]"}},{name:"label",type:{name:"string"}},{name:"href",type:{name:"string"}},{name:"className",type:{name:"string"},defaultValue:{func:!1,value:"''"}}],sourceFiles:["D:/98_測試/up/DED-WDS_VUE/libs/src/ui/element/Breadcrumb/Breadcrumb.vue"]};const O={title:"Design System/Breadcrumb",component:i,subcomponents:{BreadcrumbItem:b},tags:["autodocs"],argTypes:{datasource:{description:"資料來源",control:{type:"object"}},className:{description:"客製化樣式",control:{type:"text"}}},parameters:{deepControls:{enabled:!0},docs:{title:"Breadcrumb",description:{component:"Breadcrumb 組件的呈現及說明。"}}}},u={name:"預設項目",args:{datasource:[{label:"首頁",href:"/"},{label:"第一層",href:"/1st"},{label:"第二層",href:"/2nd"},{label:"第三層",href:"/3rd"},{label:"第四層",href:"/4th"},{label:"第五層",href:"/5th"},{label:"第六層",href:"/6th"},{label:"第七層",href:"/7th"},{label:"第八層",href:"/8th"},{label:"當前頁"}],className:""},render:n=>({components:{Breadcrumb:i},setup(){return{args:n}},template:`
            <Breadcrumb
                :datasource="args.datasource"
                :className="args.className"
            ></Breadcrumb>
        `}),parameters:{controls:{include:["datasource","className"]},docs:{source:{transform:(n,e)=>{const{args:t}=e;return["<Breadcrumb",'  datasource="datasource"',`  className="${t.className}"`,">","</Breadcrumb>"].join(`
`).trim()}}}}};var y,C,N;u.parameters={...u.parameters,docs:{...(y=u.parameters)==null?void 0:y.docs,source:{originalSource:`{
  name: "預設項目",
  args: {
    datasource: [{
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
                :datasource="args.datasource"
                :className="args.className"
            ></Breadcrumb>
        \`
  }),
  // 控制 controls 中能控制的參數
  parameters: {
    controls: {
      include: ['datasource', 'className']
    },
    docs: {
      source: {
        transform: (src, storyContext) => {
          const {
            args
          } = storyContext;
          return ['<Breadcrumb', \`  datasource="datasource"\`, \`  className="\${args.className}"\`, '>', '</Breadcrumb>'].join('\\n').trim();
        }
      }
    }
  }
}`,...(N=(C=u.parameters)==null?void 0:C.docs)==null?void 0:N.source}}};const U=["BreadcrumbMany"];export{u as BreadcrumbMany,U as __namedExportsOrder,O as default};

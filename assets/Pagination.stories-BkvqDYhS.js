import{r as $,g as v,w as h,c as d,a as o,f as N,t as p,p as q,N as L,F as C,k as _,e as T,b as l,d as f,n as x,o as m,l as U}from"./vue.esm-bundler-CwphvVzG.js";import{_ as I}from"./Button-vzvXHSrX.js";import{_ as S}from"./Icon-BhrMxj58.js";import"./iframe-BqOtaKsG.js";import"../sb-preview/runtime.js";const W={key:0,class:"ded-pagination-info"},G={class:"ded-pagination-info-text"},H={class:"ded-pagination-info-highline"},J={class:"ded-pagination-info-highline"},K={class:"ded-pagination-info-highline"},Q=["value"],R={class:"ded-pagination"},X={class:"ded-button-content"},Y={class:"ded-pagination-number"},D=10,w={__name:"Pagination",props:{totalItems:{type:Number,required:!0},currentPage:{type:Number,default:1},itemsPerPageOptions:{type:Array,required:!0},defaultItemsPerPage:{type:Number,default:10},isShowPageInfo:{type:Boolean,default:!1},className:{type:String,default:""}},emits:["pageChange"],setup(i,{emit:P}){const t=P,n=i,s=$(n.currentPage),g=$(n.isShowPageInfo?n.itemsPerPageOptions[0]:n.defaultItemsPerPage),u=v(()=>Math.ceil(n.totalItems/g.value)),O=v(()=>Math.max(1,s.value-Math.floor(D/2))),j=v(()=>Math.min(u.value,O.value+D-1)),z=v(()=>Array.from({length:j.value-O.value+1},(a,e)=>O.value+e)),c=a=>{a<1||a>u.value||(s.value=a,t("pageChange",a,g.value))},M=a=>{const e=parseInt(a.target.value,10);g.value=e,s.value=1,t("pageChange",1,e)};return h(()=>n.currentPage,a=>{a>0&&a<=u.value&&(s.value=a)}),h(()=>n.defaultItemsPerPage,a=>{a>0&&(g.value=a)}),h(()=>n.isShowPageInfo,a=>{a&&n.itemsPerPageOptions.length>0&&(g.value=n.itemsPerPageOptions[0])}),h(()=>n.itemsPerPageOptions,a=>{n.isShowPageInfo&&a.length>0&&(g.value=a[0])}),(a,e)=>(m(),d("div",{class:x(`ded-pagination-container ${i.className}`)},[n.isShowPageInfo?(m(),d("div",W,[o("div",G,[e[5]||(e[5]=N(" 共 ")),o("span",H,p(n.totalItems),1),e[6]||(e[6]=N(" 筆資料，第 ")),o("span",J,p(s.value),1),e[7]||(e[7]=N(" / ")),o("span",K,p(u.value),1),e[8]||(e[8]=N(" 頁 每頁顯示 "))]),q(o("select",{"onUpdate:modelValue":e[0]||(e[0]=r=>g.value=r),onChange:M,class:"ded-pagination-select"},[(m(!0),d(C,null,_(n.itemsPerPageOptions,r=>(m(),d("option",{key:r,value:r},p(r),9,Q))),128))],544),[[L,g.value]]),e[9]||(e[9]=o("span",null,"筆",-1))])):T("",!0),o("div",R,[l(I,{variant:"ghost","theme-color":"neutral","is-disabled":s.value===1,class:"ded-pagination-button",onClick:e[1]||(e[1]=()=>c(1))},{default:f(()=>[l(S,{name:"SvgFirstLastPage",size:"18",class:"ded-pagination-button-first"})]),_:1},8,["is-disabled"]),l(I,{variant:"ghost","theme-color":"neutral","is-disabled":s.value===1,class:"ded-pagination-button",onClick:e[2]||(e[2]=()=>c(s.value-1))},{default:f(()=>[l(S,{name:"SvgNavigateArrow",size:"18",class:"ded-pagination-button-first"})]),_:1},8,["is-disabled"]),(m(!0),d(C,null,_(z.value,r=>(m(),U(I,{key:r,variant:"ghost","theme-color":"neutral",class:x(["ded-pagination-button",{"ded-pagination-active":s.value===r}]),onClick:()=>c(r)},{default:f(()=>[o("div",X,[o("div",Y,p(r),1)])]),_:2},1032,["class","onClick"]))),128)),l(I,{variant:"ghost","theme-color":"neutral","is-disabled":s.value===u.value,class:"ded-pagination-button",onClick:e[3]||(e[3]=()=>c(s.value+1))},{default:f(()=>[l(S,{name:"SvgNavigateArrow",size:"18"})]),_:1},8,["is-disabled"]),l(I,{variant:"ghost","theme-color":"neutral","is-disabled":s.value===u.value,class:"ded-pagination-button",onClick:e[4]||(e[4]=()=>c(u.value))},{default:f(()=>[l(S,{name:"SvgFirstLastPage",size:"18"})]),_:1},8,["is-disabled"])])],2))}};w.__docgenInfo={exportName:"default",displayName:"Pagination",description:"",tags:{},props:[{name:"totalItems",type:{name:"number"},required:!0},{name:"currentPage",type:{name:"number"},defaultValue:{func:!1,value:"1"}},{name:"itemsPerPageOptions",type:{name:"array"},required:!0},{name:"defaultItemsPerPage",type:{name:"number"},defaultValue:{func:!1,value:"10"}},{name:"isShowPageInfo",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"className",type:{name:"string"},defaultValue:{func:!1,value:'""'}}],events:[{name:"pageChange"}],sourceFiles:["D:/98_測試/up/DED-WDS_VUE/libs/src/ui/element/Pagination/Pagination.vue"]};const se={title:"Component/Pagination",component:w,tags:["autodocs"],argTypes:{totalItems:{description:"總筆數",control:{type:"number"}},currentPage:{description:"目前頁數",control:{type:"number"}},itemsPerPageOptions:{description:"總筆數",control:{type:"object"},table:{type:{summary:"number[]"}}},defaultItemsPerPage:{description:"預設每頁顯示筆數",control:{type:"number"}},isShowPageInfo:{description:"是否顯示頁數資訊",control:{type:"boolean"}},className:{description:"客製化樣式",control:{type:"text"}}},parameters:{docs:{title:"Pagination",description:{component:"頁碼組件的呈現及說明。"}}}},y={name:"預設項目",args:{totalItems:100,currentPage:1,itemsPerPageOptions:[10,20,50],defaultItemsPerPage:5,isShowPageInfo:!1,className:""},render:i=>({components:{Pagination:w},setup(){return{args:i}},template:`
            <Pagination
                :totalItems="args.totalItems"
                :currentPage="args.currentPage"
                :itemsPerPageOptions="args.itemsPerPageOptions"
                :defaultItemsPerPage="args.defaultItemsPerPage"
                :isShowPageInfo="args.isShowPageInfo"
                :className="args.className"
            >
            </Pagination>
        `}),parameters:{controls:{},docs:{source:{transform:(i,P)=>{const{args:t}=P;return["<Pagination",`  :totalItems="${t.totalItems}"`,`  :currentPage="${t.currentPage}"`,`  :itemsPerPageOptions="${t.itemsPerPageOptions}"`,`  :defaultItemsPerPage="${t.defaultItemsPerPage}"`,`  :isShowPageInfo="${t.isShowPageInfo}"`,`  className="${t.className}"`,">","</Pagination>"].join(`
`).trim()}}}}},b={name:"顯示資訊",args:{totalItems:100,currentPage:1,itemsPerPageOptions:[10,20,50],defaultItemsPerPage:10,isShowPageInfo:!0,className:""},render:i=>({components:{Pagination:w},setup(){return{args:i}},template:`
            <Pagination
                :totalItems="args.totalItems"
                :currentPage="args.currentPage"
                :itemsPerPageOptions="args.itemsPerPageOptions"
                :defaultItemsPerPage="args.defaultItemsPerPage"
                :isShowPageInfo="args.isShowPageInfo"
                :className="args.className"
            >
            </Pagination>
        `}),parameters:{controls:{},docs:{source:{transform:(i,P)=>{const{args:t}=P;return["<Pagination",`  :totalItems="${t.totalItems}"`,`  :currentPage="${t.currentPage}"`,`  :itemsPerPageOptions="${t.itemsPerPageOptions}"`,`  :defaultItemsPerPage="${t.defaultItemsPerPage}"`,`  :isShowPageInfo="${t.isShowPageInfo}"`,`  className="${t.className}"`,">","</Pagination>"].join(`
`).trim()}}}}};var k,A,E;y.parameters={...y.parameters,docs:{...(k=y.parameters)==null?void 0:k.docs,source:{originalSource:`{
  name: "預設項目",
  args: {
    totalItems: 100,
    currentPage: 1,
    itemsPerPageOptions: [10, 20, 50],
    defaultItemsPerPage: 5,
    isShowPageInfo: false,
    className: ""
  },
  render: args => ({
    components: {
      Pagination
    },
    setup() {
      return {
        args
      };
    },
    template: \`
            <Pagination
                :totalItems="args.totalItems"
                :currentPage="args.currentPage"
                :itemsPerPageOptions="args.itemsPerPageOptions"
                :defaultItemsPerPage="args.defaultItemsPerPage"
                :isShowPageInfo="args.isShowPageInfo"
                :className="args.className"
            >
            </Pagination>
        \`
  }),
  // 控制 controls 中能控制的參數
  parameters: {
    controls: {
      // exclude: ['default' ],
    },
    docs: {
      source: {
        transform: (src, storyContext) => {
          const {
            args
          } = storyContext;
          return [\`<Pagination\`, \`  :totalItems="\${args.totalItems}"\`, \`  :currentPage="\${args.currentPage}"\`, \`  :itemsPerPageOptions="\${args.itemsPerPageOptions}"\`, \`  :defaultItemsPerPage="\${args.defaultItemsPerPage}"\`, \`  :isShowPageInfo="\${args.isShowPageInfo}"\`, \`  className="\${args.className}"\`, \`>\`, \`</Pagination>\`].join("\\n").trim();
        }
      }
    }
  }
}`,...(E=(A=y.parameters)==null?void 0:A.docs)==null?void 0:E.source}}};var F,B,V;b.parameters={...b.parameters,docs:{...(F=b.parameters)==null?void 0:F.docs,source:{originalSource:`{
  name: "顯示資訊",
  args: {
    totalItems: 100,
    currentPage: 1,
    itemsPerPageOptions: [10, 20, 50],
    defaultItemsPerPage: 10,
    isShowPageInfo: true,
    className: ""
  },
  render: args => ({
    components: {
      Pagination
    },
    setup() {
      return {
        args
      };
    },
    template: \`
            <Pagination
                :totalItems="args.totalItems"
                :currentPage="args.currentPage"
                :itemsPerPageOptions="args.itemsPerPageOptions"
                :defaultItemsPerPage="args.defaultItemsPerPage"
                :isShowPageInfo="args.isShowPageInfo"
                :className="args.className"
            >
            </Pagination>
        \`
  }),
  // 控制 controls 中能控制的參數
  parameters: {
    controls: {
      // exclude: ['default' ],
    },
    docs: {
      source: {
        transform: (src, storyContext) => {
          const {
            args
          } = storyContext;
          return [\`<Pagination\`, \`  :totalItems="\${args.totalItems}"\`, \`  :currentPage="\${args.currentPage}"\`, \`  :itemsPerPageOptions="\${args.itemsPerPageOptions}"\`, \`  :defaultItemsPerPage="\${args.defaultItemsPerPage}"\`, \`  :isShowPageInfo="\${args.isShowPageInfo}"\`, \`  className="\${args.className}"\`, \`>\`, \`</Pagination>\`].join("\\n").trim();
        }
      }
    }
  }
}`,...(V=(B=b.parameters)==null?void 0:B.docs)==null?void 0:V.source}}};const re=["PaginationDefault","PaginationDetail"];export{y as PaginationDefault,b as PaginationDetail,re as __namedExportsOrder,se as default};

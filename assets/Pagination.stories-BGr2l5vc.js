import{f as $,c as v,w as h,a as d,e as g,s as N,t as p,g as q,G as U,F as C,B as _,d as T,b as l,D as f,n as x,o as m,C as W}from"./vue.esm-bundler-BQySH7jJ.js";import{_ as I}from"./Button-CQMIYjcW.js";import{_ as S}from"./Icon-f9eBqVFj.js";import"./iframe-C0k4Wqte.js";import"../sb-preview/runtime.js";const G={key:0,class:"ded-pagination-info"},L={class:"ded-pagination-info-text"},H={class:"ded-pagination-info-highline"},J={class:"ded-pagination-info-highline"},K={class:"ded-pagination-info-highline"},Q=["value"],R={class:"ded-pagination"},X={class:"ded-pagination-number"},D=10,w={__name:"Pagination",props:{totalItems:{type:Number,required:!0},currentPage:{type:Number,default:1},itemsPerPageOptions:{type:Array,required:!0},defaultItemsPerPage:{type:Number,default:10},isShowPageInfo:{type:Boolean,default:!1},className:{type:String,default:""}},emits:["pageChange"],setup(o,{emit:P}){const t=P,n=o,s=$(n.currentPage),i=$(n.isShowPageInfo?n.itemsPerPageOptions[0]:n.defaultItemsPerPage),u=v(()=>Math.ceil(n.totalItems/i.value)),O=v(()=>Math.max(1,s.value-Math.floor(D/2))),j=v(()=>Math.min(u.value,O.value+D-1)),z=v(()=>Array.from({length:j.value-O.value+1},(a,e)=>O.value+e)),c=a=>{a<1||a>u.value||(s.value=a,t("pageChange",a,i.value))},M=a=>{const e=parseInt(a.target.value,10);i.value=e,s.value=1,t("pageChange",1,e)};return h(()=>n.currentPage,a=>{a>0&&a<=u.value&&(s.value=a)}),h(()=>n.defaultItemsPerPage,a=>{a>0&&(i.value=a)}),h(()=>n.isShowPageInfo,a=>{a&&n.itemsPerPageOptions.length>0&&(i.value=n.itemsPerPageOptions[0])}),h(()=>n.itemsPerPageOptions,a=>{n.isShowPageInfo&&a.length>0&&(i.value=a[0])}),(a,e)=>(m(),d("div",{class:x(`ded-pagination-container ${o.className}`)},[n.isShowPageInfo?(m(),d("div",G,[g("div",L,[e[5]||(e[5]=N(" 共 ")),g("span",H,p(n.totalItems),1),e[6]||(e[6]=N(" 筆資料，第 ")),g("span",J,p(s.value),1),e[7]||(e[7]=N(" / ")),g("span",K,p(u.value),1),e[8]||(e[8]=N(" 頁 每頁顯示 "))]),q(g("select",{"onUpdate:modelValue":e[0]||(e[0]=r=>i.value=r),onChange:M,class:"ded-pagination-select"},[(m(!0),d(C,null,_(n.itemsPerPageOptions,r=>(m(),d("option",{key:r,value:r},p(r),9,Q))),128))],544),[[U,i.value]]),e[9]||(e[9]=g("span",null,"筆",-1))])):T("",!0),g("div",R,[l(I,{variant:"ghost","theme-color":"neutral","is-disabled":s.value===1,class:"ded-pagination-button",onClick:e[1]||(e[1]=()=>c(1))},{default:f(()=>[l(S,{name:"first-last-page",size:"18",class:"ded-pagination-button-first"})]),_:1},8,["is-disabled"]),l(I,{variant:"ghost","theme-color":"neutral","is-disabled":s.value===1,class:"ded-pagination-button",onClick:e[2]||(e[2]=()=>c(s.value-1))},{default:f(()=>[l(S,{name:"navigate-arrow",size:"18",class:"ded-pagination-button-first"})]),_:1},8,["is-disabled"]),(m(!0),d(C,null,_(z.value,r=>(m(),W(I,{key:r,variant:"ghost","theme-color":"neutral",class:x(["ded-pagination-button",{"ded-pagination-active":s.value===r}]),onClick:()=>c(r)},{default:f(()=>[g("div",X,p(r),1)]),_:2},1032,["class","onClick"]))),128)),l(I,{variant:"ghost","theme-color":"neutral","is-disabled":s.value===u.value,class:"ded-pagination-button",onClick:e[3]||(e[3]=()=>c(s.value+1))},{default:f(()=>[l(S,{name:"navigate-arrow",size:"18"})]),_:1},8,["is-disabled"]),l(I,{variant:"ghost","theme-color":"neutral","is-disabled":s.value===u.value,class:"ded-pagination-button",onClick:e[4]||(e[4]=()=>c(u.value))},{default:f(()=>[l(S,{name:"first-last-page",size:"18"})]),_:1},8,["is-disabled"])])],2))}};w.__docgenInfo={exportName:"default",displayName:"Pagination",description:"",tags:{},props:[{name:"totalItems",type:{name:"number"},required:!0},{name:"currentPage",type:{name:"number"},defaultValue:{func:!1,value:"1"}},{name:"itemsPerPageOptions",type:{name:"array"},required:!0},{name:"defaultItemsPerPage",type:{name:"number"},defaultValue:{func:!1,value:"10"}},{name:"isShowPageInfo",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"className",type:{name:"string"},defaultValue:{func:!1,value:'""'}}],events:[{name:"pageChange"}],sourceFiles:["/Users/auouser/Desktop/Work_Space/DED-WDS_VUE/libs/src/ui/element/Pagination/Pagination.vue"]};const ne={title:"Component/Pagination",component:w,tags:["autodocs"],argTypes:{totalItems:{description:"總筆數",control:{type:"number"}},currentPage:{description:"目前頁數",control:{type:"number"}},itemsPerPageOptions:{description:"總筆數",control:{type:"object"},table:{type:{summary:"number[]"}}},defaultItemsPerPage:{description:"預設每頁顯示筆數",control:{type:"number"}},isShowPageInfo:{description:"是否顯示頁數資訊",control:{type:"boolean"}},className:{description:"客製化樣式",control:{type:"text"}}},parameters:{docs:{title:"Pagination",description:{component:"Pagination 組件的呈現及說明。"}}}},y={name:"預設項目",args:{totalItems:100,currentPage:1,itemsPerPageOptions:[10,20,50],defaultItemsPerPage:5,isShowPageInfo:!1,className:""},render:o=>({components:{Pagination:w},setup(){return{args:o}},template:`
            <Pagination
                :totalItems="args.totalItems"
                :currentPage="args.currentPage"
                :itemsPerPageOptions="args.itemsPerPageOptions"
                :defaultItemsPerPage="args.defaultItemsPerPage"
                :isShowPageInfo="args.isShowPageInfo"
                :className="args.className"
            >
            </Pagination>
        `}),parameters:{controls:{},docs:{source:{transform:(o,P)=>{const{args:t}=P;return["<Pagination",`  :totalItems="${t.totalItems}"`,`  :currentPage="${t.currentPage}"`,`  :itemsPerPageOptions="${t.itemsPerPageOptions}"`,`  :defaultItemsPerPage="${t.defaultItemsPerPage}"`,`  :isShowPageInfo="${t.isShowPageInfo}"`,`  className="${t.className}"`,">","</Pagination>"].join(`
`).trim()}}}}},b={name:"顯示資訊",args:{totalItems:100,currentPage:1,itemsPerPageOptions:[10,20,50],defaultItemsPerPage:10,isShowPageInfo:!0,className:""},render:o=>({components:{Pagination:w},setup(){return{args:o}},template:`
            <Pagination
                :totalItems="args.totalItems"
                :currentPage="args.currentPage"
                :itemsPerPageOptions="args.itemsPerPageOptions"
                :defaultItemsPerPage="args.defaultItemsPerPage"
                :isShowPageInfo="args.isShowPageInfo"
                :className="args.className"
            >
            </Pagination>
        `}),parameters:{controls:{},docs:{source:{transform:(o,P)=>{const{args:t}=P;return["<Pagination",`  :totalItems="${t.totalItems}"`,`  :currentPage="${t.currentPage}"`,`  :itemsPerPageOptions="${t.itemsPerPageOptions}"`,`  :defaultItemsPerPage="${t.defaultItemsPerPage}"`,`  :isShowPageInfo="${t.isShowPageInfo}"`,`  className="${t.className}"`,">","</Pagination>"].join(`
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
}`,...(E=(A=y.parameters)==null?void 0:A.docs)==null?void 0:E.source}}};var B,F,V;b.parameters={...b.parameters,docs:{...(B=b.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(V=(F=b.parameters)==null?void 0:F.docs)==null?void 0:V.source}}};const se=["PaginationDefault","PaginationDetail"];export{y as PaginationDefault,b as PaginationDetail,se as __namedExportsOrder,ne as default};

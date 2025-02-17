import{a as B}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{k as O,g as I,w as v,c,a as r,f as C,t as p,l as L,M as T,F as $,h as _,e as U,b as l,d as f,n as x,o as u,j as W}from"./vue.esm-bundler-qCK_iSPY.js";import{_ as h}from"./Button-BBJUKVar.js";import{_ as S}from"./Icon-Dr0uxKWp.js";import"./v4-CQkTLCs1.js";import"./iframe-Dp5wB7_x.js";import"../sb-preview/runtime.js";const G={key:0,class:"ded-pagination-info"},H={class:"ded-pagination-info-text"},J={class:"ded-pagination-info-highline"},K={class:"ded-pagination-info-highline"},Q={class:"ded-pagination-info-highline"},R=["value"],X={class:"ded-pagination"},Y={class:"ded-button-content"},Z={class:"ded-pagination-number"},k=10,b={__name:"Pagination",props:{totalItems:{type:Number,required:!0},currentPage:{type:Number,default:1},itemsPerPageOptions:{type:Array,required:!0},defaultItemsPerPage:{type:Number,default:10},isShowPageInfo:{type:Boolean,default:!1},className:{type:String,default:""}},emits:["onPageChange"],setup(i,{emit:m}){const t=m,n=i,s=O(n.currentPage),g=O(n.isShowPageInfo?n.itemsPerPageOptions[0]:n.defaultItemsPerPage),P=I(()=>Math.ceil(n.totalItems/g.value)),w=I(()=>Math.max(1,s.value-Math.floor(k/2))),M=I(()=>Math.min(P.value,w.value+k-1)),z=I(()=>Array.from({length:M.value-w.value+1},(a,e)=>w.value+e)),d=a=>{a<1||a>P.value||(s.value=a,t("onPageChange",a,g.value))},q=a=>{const e=parseInt(a.target.value,10);g.value=e,s.value=1,t("onPageChange",1,e)};return v(()=>n.currentPage,a=>{a>0&&a<=P.value&&(s.value=a)}),v(()=>n.defaultItemsPerPage,a=>{a>0&&(g.value=a)}),v(()=>n.isShowPageInfo,a=>{a&&n.itemsPerPageOptions.length>0&&(g.value=n.itemsPerPageOptions[0])}),v(()=>n.itemsPerPageOptions,a=>{n.isShowPageInfo&&a.length>0&&(g.value=a[0])}),(a,e)=>(u(),c("div",{class:x(`ded-pagination-container ${i.className}`)},[n.isShowPageInfo?(u(),c("div",G,[r("div",H,[e[5]||(e[5]=C(" 共 ")),r("span",J,p(n.totalItems),1),e[6]||(e[6]=C(" 筆資料，第 ")),r("span",K,p(s.value),1),e[7]||(e[7]=C(" / ")),r("span",Q,p(P.value),1),e[8]||(e[8]=C(" 頁 每頁顯示 "))]),L(r("select",{"onUpdate:modelValue":e[0]||(e[0]=o=>g.value=o),onChange:q,class:"ded-pagination-select"},[(u(!0),c($,null,_(n.itemsPerPageOptions,o=>(u(),c("option",{key:o,value:o},p(o),9,R))),128))],544),[[T,g.value]]),e[9]||(e[9]=r("span",null,"筆",-1))])):U("",!0),r("div",X,[l(h,{variant:"ghost","theme-color":"neutral","is-disabled":s.value===1,class:"ded-pagination-button",onClick:e[1]||(e[1]=()=>d(1))},{default:f(()=>[l(S,{name:"SvgFirstLastPage",size:"18",class:"ded-pagination-button-first"})]),_:1},8,["is-disabled"]),l(h,{variant:"ghost","theme-color":"neutral","is-disabled":s.value===1,class:"ded-pagination-button",onClick:e[2]||(e[2]=()=>d(s.value-1))},{default:f(()=>[l(S,{name:"SvgNavigateArrow",size:"18",class:"ded-pagination-button-first"})]),_:1},8,["is-disabled"]),(u(!0),c($,null,_(z.value,o=>(u(),W(h,{key:o,variant:"ghost","theme-color":"neutral",class:x(["ded-pagination-button",{"ded-pagination-active":s.value===o}]),onClick:()=>d(o)},{default:f(()=>[r("div",Y,[r("div",Z,p(o),1)])]),_:2},1032,["class","onClick"]))),128)),l(h,{variant:"ghost","theme-color":"neutral","is-disabled":s.value===P.value,class:"ded-pagination-button",onClick:e[3]||(e[3]=()=>d(s.value+1))},{default:f(()=>[l(S,{name:"SvgNavigateArrow",size:"18"})]),_:1},8,["is-disabled"]),l(h,{variant:"ghost","theme-color":"neutral","is-disabled":s.value===P.value,class:"ded-pagination-button",onClick:e[4]||(e[4]=()=>d(P.value))},{default:f(()=>[l(S,{name:"SvgFirstLastPage",size:"18"})]),_:1},8,["is-disabled"])])],2))}};b.__docgenInfo={exportName:"default",displayName:"Pagination",description:"",tags:{},props:[{name:"totalItems",type:{name:"number"},required:!0},{name:"currentPage",type:{name:"number"},defaultValue:{func:!1,value:"1"}},{name:"itemsPerPageOptions",type:{name:"array"},required:!0},{name:"defaultItemsPerPage",type:{name:"number"},defaultValue:{func:!1,value:"10"}},{name:"isShowPageInfo",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"className",type:{name:"string"},defaultValue:{func:!1,value:'""'}}],events:[{name:"onPageChange"}],sourceFiles:["/Users/auouser/Desktop/Work_Space/DED-WDS_VUE/libs/src/ui/element/Pagination/Pagination.vue"]};const ie={title:"Component/Pagination",component:b,tags:["autodocs"],argTypes:{totalItems:{description:"總筆數",control:{type:"number"}},currentPage:{description:"目前頁數",control:{type:"number"}},itemsPerPageOptions:{description:"每頁顯示筆數選項",control:{type:"object"},table:{type:{summary:"number[]"}}},defaultItemsPerPage:{description:"預設每頁顯示筆數",control:{type:"number"}},isShowPageInfo:{description:"是否顯示頁數資訊",control:{type:"boolean"}},className:{description:"客製化樣式",control:{type:"text"}},onPageChange:{description:"頁碼變更事件",control:!1,table:{category:"EVENTS",type:{summary:"emits"}}}},parameters:{docs:{title:"Pagination",description:{component:"頁碼組件的呈現及說明。"}}}},N={name:"預設項目",args:{totalItems:100,currentPage:1,itemsPerPageOptions:[10,20,50],defaultItemsPerPage:5,isShowPageInfo:!1,className:""},render:i=>({components:{Pagination:b},setup(){return{args:i,handlePageChange:B("onPageChange")}},template:`
            <Pagination
                :totalItems="args.totalItems"
                :currentPage="args.currentPage"
                :itemsPerPageOptions="args.itemsPerPageOptions"
                :defaultItemsPerPage="args.defaultItemsPerPage"
                :isShowPageInfo="args.isShowPageInfo"
                :className="args.className"
                @onPageChange="handlePageChange"
            >
            </Pagination>
        `}),parameters:{controls:{},docs:{source:{transform:(i,m)=>{const{args:t}=m;return["<Pagination",`  :totalItems="${t.totalItems}"`,`  :currentPage="${t.currentPage}"`,`  :itemsPerPageOptions="${t.itemsPerPageOptions}"`,`  :defaultItemsPerPage="${t.defaultItemsPerPage}"`,`  :isShowPageInfo="${t.isShowPageInfo}"`,`  className="${t.className}"`,'  @onPageChange="handlePageChange"',">","</Pagination>"].join(`
`).trim()}}}}},y={name:"顯示資訊",args:{totalItems:100,currentPage:1,itemsPerPageOptions:[10,20,50],defaultItemsPerPage:10,isShowPageInfo:!0,className:""},render:i=>({components:{Pagination:b},setup(){return{args:i,handlePageChange:B("onPageChange")}},template:`
            <Pagination
                :totalItems="args.totalItems"
                :currentPage="args.currentPage"
                :itemsPerPageOptions="args.itemsPerPageOptions"
                :defaultItemsPerPage="args.defaultItemsPerPage"
                :isShowPageInfo="args.isShowPageInfo"
                :className="args.className"
                @onPageChange="handlePageChange"
            >
            </Pagination>
        `}),parameters:{controls:{exclude:["isShowPageInfo"]},docs:{source:{transform:(i,m)=>{const{args:t}=m;return["<Pagination",`  :totalItems="${t.totalItems}"`,`  :currentPage="${t.currentPage}"`,`  :itemsPerPageOptions="${t.itemsPerPageOptions}"`,`  :defaultItemsPerPage="${t.defaultItemsPerPage}"`,`  :isShowPageInfo="${t.isShowPageInfo}"`,`  className="${t.className}"`,'  @onPageChange="handlePageChange"',">","</Pagination>"].join(`
`).trim()}}}}};var D,A,E;N.parameters={...N.parameters,docs:{...(D=N.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
        args,
        handlePageChange: action('onPageChange')
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
                @onPageChange="handlePageChange"
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
          return [\`<Pagination\`, \`  :totalItems="\${args.totalItems}"\`, \`  :currentPage="\${args.currentPage}"\`, \`  :itemsPerPageOptions="\${args.itemsPerPageOptions}"\`, \`  :defaultItemsPerPage="\${args.defaultItemsPerPage}"\`, \`  :isShowPageInfo="\${args.isShowPageInfo}"\`, \`  className="\${args.className}"\`, \`  @onPageChange="handlePageChange"\`, \`>\`, \`</Pagination>\`].join("\\n").trim();
        }
      }
    }
  }
}`,...(E=(A=N.parameters)==null?void 0:A.docs)==null?void 0:E.source}}};var F,V,j;y.parameters={...y.parameters,docs:{...(F=y.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
        args,
        handlePageChange: action('onPageChange')
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
                @onPageChange="handlePageChange"
            >
            </Pagination>
        \`
  }),
  // 控制 controls 中能控制的參數
  parameters: {
    controls: {
      exclude: ['isShowPageInfo']
    },
    docs: {
      source: {
        transform: (src, storyContext) => {
          const {
            args
          } = storyContext;
          return [\`<Pagination\`, \`  :totalItems="\${args.totalItems}"\`, \`  :currentPage="\${args.currentPage}"\`, \`  :itemsPerPageOptions="\${args.itemsPerPageOptions}"\`, \`  :defaultItemsPerPage="\${args.defaultItemsPerPage}"\`, \`  :isShowPageInfo="\${args.isShowPageInfo}"\`, \`  className="\${args.className}"\`, \`  @onPageChange="handlePageChange"\`, \`>\`, \`</Pagination>\`].join("\\n").trim();
        }
      }
    }
  }
}`,...(j=(V=y.parameters)==null?void 0:V.docs)==null?void 0:j.source}}};const ge=["PaginationDefault","PaginationDetail"];export{N as PaginationDefault,y as PaginationDetail,ge as __namedExportsOrder,ie as default};

import{a as j}from"./index-B-lxVbXh.js";import{p as O,g as I,w as v,c,d as L,a as r,q as T,f as C,t as p,H as U,F as b,l as _,b as l,e as f,n as x,o as u,h as W}from"./vue.esm-bundler-DhCPv9oX.js";import{_ as h}from"./Button-BLEQ_Auu.js";import{_ as $}from"./Icon-XhCzJ60l.js";import"./v4-CtRu48qb.js";const H={key:0,class:"ded-pagination-info"},G={class:"ded-pagination-info-text"},J={class:"ded-pagination-info-highline"},K={class:"ded-pagination-info-highline"},Q={class:"ded-pagination-info-highline"},R=["value"],X={class:"ded-pagination"},Y={class:"ded-button-content"},Z={class:"ded-pagination-number"},D=10,w={__name:"Pagination",props:{totalItems:{type:Number,required:!0},currentPage:{type:Number,default:1},itemsPerPageOptions:{type:Array,required:!0},defaultItemsPerPage:{type:Number,default:10},isShowPageInfo:{type:Boolean,default:!1},className:{type:String,default:""}},emits:["onPageChange"],setup(i,{emit:m}){const e=m,n=i,s=O(n.currentPage),g=O(n.isShowPageInfo?n.itemsPerPageOptions[0]:n.defaultItemsPerPage),P=I(()=>Math.ceil(n.totalItems/g.value)),y=I(()=>Math.max(1,s.value-Math.floor(D/2))),q=I(()=>Math.min(P.value,y.value+D-1)),z=I(()=>Array.from({length:q.value-y.value+1},(t,a)=>y.value+a)),d=t=>{t<1||t>P.value||(s.value=t,e("onPageChange",t,g.value))},M=t=>{const a=parseInt(t.target.value,10);g.value=a,s.value=1,e("onPageChange",1,a)};return v(()=>n.currentPage,t=>{t>0&&t<=P.value&&(s.value=t)}),v(()=>n.defaultItemsPerPage,t=>{t>0&&(g.value=t)}),v(()=>n.isShowPageInfo,t=>{t&&n.itemsPerPageOptions.length>0&&(g.value=n.itemsPerPageOptions[0])}),v(()=>n.itemsPerPageOptions,t=>{n.isShowPageInfo&&t.length>0&&(g.value=t[0])}),(t,a)=>(u(),c("div",{class:x(`ded-pagination-container ${i.className}`)},[n.isShowPageInfo?(u(),c("div",H,[r("div",G,[a[5]||(a[5]=C(" 共 ")),r("span",J,p(n.totalItems),1),a[6]||(a[6]=C(" 筆資料，第 ")),r("span",K,p(s.value),1),a[7]||(a[7]=C(" / ")),r("span",Q,p(P.value),1),a[8]||(a[8]=C(" 頁 每頁顯示 "))]),T(r("select",{"onUpdate:modelValue":a[0]||(a[0]=o=>g.value=o),onChange:M,class:"ded-pagination-select"},[(u(!0),c(b,null,_(n.itemsPerPageOptions,o=>(u(),c("option",{key:o,value:o},p(o),9,R))),128))],544),[[U,g.value]]),a[9]||(a[9]=r("span",null,"筆",-1))])):L("",!0),r("div",X,[l(h,{variant:"ghost","theme-color":"neutral","is-disabled":s.value===1,class:"ded-pagination-button",onClick:a[1]||(a[1]=()=>d(1))},{default:f(()=>[l($,{name:"SvgFirstLastPage",size:"18",class:"ded-pagination-button-first"})]),_:1},8,["is-disabled"]),l(h,{variant:"ghost","theme-color":"neutral","is-disabled":s.value===1,class:"ded-pagination-button",onClick:a[2]||(a[2]=()=>d(s.value-1))},{default:f(()=>[l($,{name:"SvgNavigateArrow",size:"18",class:"ded-pagination-button-first"})]),_:1},8,["is-disabled"]),(u(!0),c(b,null,_(z.value,o=>(u(),W(h,{key:o,variant:"ghost","theme-color":"neutral",class:x(["ded-pagination-button",{"ded-pagination-active":s.value===o}]),onClick:()=>d(o)},{default:f(()=>[r("div",Y,[r("div",Z,p(o),1)])]),_:2},1032,["class","onClick"]))),128)),l(h,{variant:"ghost","theme-color":"neutral","is-disabled":s.value===P.value,class:"ded-pagination-button",onClick:a[3]||(a[3]=()=>d(s.value+1))},{default:f(()=>[l($,{name:"SvgNavigateArrow",size:"18"})]),_:1},8,["is-disabled"]),l(h,{variant:"ghost","theme-color":"neutral","is-disabled":s.value===P.value,class:"ded-pagination-button",onClick:a[4]||(a[4]=()=>d(P.value))},{default:f(()=>[l($,{name:"SvgFirstLastPage",size:"18"})]),_:1},8,["is-disabled"])])],2))}};w.__docgenInfo={exportName:"default",displayName:"Pagination",description:"",tags:{},props:[{name:"totalItems",type:{name:"number"},required:!0},{name:"currentPage",type:{name:"number"},defaultValue:{func:!1,value:"1"}},{name:"itemsPerPageOptions",type:{name:"array"},required:!0},{name:"defaultItemsPerPage",type:{name:"number"},defaultValue:{func:!1,value:"10"}},{name:"isShowPageInfo",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"className",type:{name:"string"},defaultValue:{func:!1,value:'""'}}],events:[{name:"onPageChange"}],sourceFiles:["/Users/auouser/Desktop/Work_Space/DED-WDS_VUE/libs/src/ui/element/Pagination/Pagination.vue"]};const oe={title:"Component/Pagination",component:w,tags:["autodocs"],argTypes:{totalItems:{description:"總筆數",control:{type:"number"}},currentPage:{description:"目前頁數",control:{type:"number"}},itemsPerPageOptions:{description:"每頁顯示筆數選項",control:{type:"object"},table:{type:{summary:"number[]"}}},defaultItemsPerPage:{description:"預設每頁顯示筆數",control:{type:"number"}},isShowPageInfo:{description:"是否顯示頁數資訊",control:{type:"boolean"}},className:{description:"客製化樣式",control:{type:"text"}},onPageChange:{description:"頁碼變更事件",control:!1,table:{category:"EVENTS",type:{summary:"emits"}}}},parameters:{docs:{title:"Pagination",description:{component:"頁碼組件的呈現及說明。"}}}},N={name:"預設項目",args:{totalItems:100,currentPage:1,itemsPerPageOptions:[10,20,50],defaultItemsPerPage:5,isShowPageInfo:!1,className:""},render:i=>({components:{Pagination:w},setup(){return{args:i,handlePageChange:j("onPageChange")}},template:`
            
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
        `}),parameters:{controls:{},docs:{source:{transform:(i,m)=>{const{args:e}=m;return["<script setup>",'import { Pagination } from "@ded-wds-vue/ui";',"const handlePageChange = () => {};","<\/script>","","<template>","  <Pagination",`    ${e.totalItems!==void 0?`:totalItems="${e.totalItems}"`:""}`,`    ${e.currentPage!==void 0?`:currentPage="${e.currentPage}"`:""}`,`    ${e.itemsPerPageOptions?`:itemsPerPageOptions="[${e.itemsPerPageOptions}]"`:""}`,`    ${e.defaultItemsPerPage!==void 0?`:defaultItemsPerPage="${e.defaultItemsPerPage}"`:""}`,`    ${e.isShowPageInfo!==void 0?`:isShowPageInfo="${e.isShowPageInfo}"`:""}`,`    ${e.className?`className="${e.className}"`:""}`,'    @onPageChange="handlePageChange()"',"  ></Pagination>","</template>"].filter(Boolean).join(`
`).trim()}}}}},S={name:"顯示資訊",args:{totalItems:100,currentPage:1,itemsPerPageOptions:[10,20,50],defaultItemsPerPage:10,isShowPageInfo:!0,className:""},render:i=>({components:{Pagination:w},setup(){return{args:i,handlePageChange:j("onPageChange")}},template:`
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
        `}),parameters:{controls:{exclude:["isShowPageInfo"]},docs:{source:{transform:(i,m)=>{const{args:e}=m;return["<script setup>",'import { Pagination } from "@ded-wds-vue/ui";',"const handlePageChange = () => {};","<\/script>","","<template>","  <Pagination",`    ${e.totalItems!==void 0?`:totalItems="${e.totalItems}"`:""}`,`    ${e.currentPage!==void 0?`:currentPage="${e.currentPage}"`:""}`,`    ${e.itemsPerPageOptions?`:itemsPerPageOptions="[${e.itemsPerPageOptions}]"`:""}`,`    ${e.defaultItemsPerPage!==void 0?`:defaultItemsPerPage="${e.defaultItemsPerPage}"`:""}`,'    :isShowPageInfo="true"',`    ${e.className?`className="${e.className}"`:""}`,'    @onPageChange="handlePageChange()"',"  ></Pagination>","</template>"].filter(Boolean).join(`
`).trim()}}}}};var k,A,B;N.parameters={...N.parameters,docs:{...(k=N.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
          return [\`<script setup>\`, \`import { Pagination } from "@ded-wds-vue/ui";\`, \`const handlePageChange = () => {};\`, \`<\/script>\`, '', '<template>', \`  <Pagination\`, \`    \${args.totalItems !== undefined ? \`:totalItems="\${args.totalItems}"\` : ""}\`, \`    \${args.currentPage !== undefined ? \`:currentPage="\${args.currentPage}"\` : ""}\`, \`    \${args.itemsPerPageOptions ? \`:itemsPerPageOptions="[\${args.itemsPerPageOptions}]"\` : ""}\`, \`    \${args.defaultItemsPerPage !== undefined ? \`:defaultItemsPerPage="\${args.defaultItemsPerPage}"\` : ""}\`, \`    \${args.isShowPageInfo !== undefined ? \`:isShowPageInfo="\${args.isShowPageInfo}"\` : ""}\`, \`    \${args.className ? \`className="\${args.className}"\` : ""}\`, \`    @onPageChange="handlePageChange()"\`, \`  ></Pagination>\`, '</template>'].filter(Boolean).join("\\n").trim();
        }
      }
    }
  }
}`,...(B=(A=N.parameters)==null?void 0:A.docs)==null?void 0:B.source}}};var E,F,V;S.parameters={...S.parameters,docs:{...(E=S.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
          return [\`<script setup>\`, \`import { Pagination } from "@ded-wds-vue/ui";\`, \`const handlePageChange = () => {};\`, \`<\/script>\`, '', '<template>', \`  <Pagination\`, \`    \${args.totalItems !== undefined ? \`:totalItems="\${args.totalItems}"\` : ""}\`, \`    \${args.currentPage !== undefined ? \`:currentPage="\${args.currentPage}"\` : ""}\`, \`    \${args.itemsPerPageOptions ? \`:itemsPerPageOptions="[\${args.itemsPerPageOptions}]"\` : ""}\`, \`    \${args.defaultItemsPerPage !== undefined ? \`:defaultItemsPerPage="\${args.defaultItemsPerPage}"\` : ""}\`, \`    :isShowPageInfo="true"\`, \`    \${args.className ? \`className="\${args.className}"\` : ""}\`, \`    @onPageChange="handlePageChange()"\`, \`  ></Pagination>\`, '</template>'].filter(Boolean).join("\\n").trim();
        }
      }
    }
  }
}`,...(V=(F=S.parameters)==null?void 0:F.docs)==null?void 0:V.source}}};const re=["PaginationDefault","PaginationDetail"];export{N as PaginationDefault,S as PaginationDetail,re as __namedExportsOrder,oe as default};

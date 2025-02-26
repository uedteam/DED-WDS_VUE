import{m as h,u as V,r as u,q as $,z,s as N,c,d as f,a as _,k as x,t as E,b as v,x as k,T as O,F as C,o as d}from"./vue.esm-bundler-CScppja8.js";import{_ as L}from"./List-Dq5PqQGA.js";import{_ as B}from"./Input-BZG3XuL8.js";import{g as P}from"./positionUtils-CIbX64TV.js";import"./Icon-Dil69s3n.js";const j={key:0,class:"ded-input-label"},F=8,T="bottom",p={__name:"Dropdown",props:h({dataSource:{type:Array,required:!0,default:()=>[]},label:{type:String,default:""},placeholder:{type:String,default:"Placeholder"},size:{type:String,validator:a=>["small","medium","large"].includes(a),default:"medium"},className:{type:String,default:""}},{modelValue:{},modelModifiers:{}}),emits:["update:modelValue"],setup(a){const l=V(a,"modelValue"),e=a,t=u(!1),r=u(null),m=u({}),D=o=>{l.value=o,t.value=!1},g=o=>{r.value&&!r.value.contains(o.target)&&(t.value=!1)},n=()=>{if(r.value){const o=r.value.getBoundingClientRect();m.value=P({top:o.top+window.scrollY,left:o.left+window.scrollX},{width:o.width,height:o.height},T,`${F}px`,!0)}};return $(()=>{document.addEventListener("click",g),window.addEventListener("resize",n),window.addEventListener("scroll",n),z(()=>n())}),N(()=>{document.removeEventListener("click",g),window.removeEventListener("resize",n),window.removeEventListener("scroll",n)}),(o,s)=>(d(),c(C,null,[e.label?(d(),c("label",j,E(e.label),1)):f("",!0),_("div",{ref_key:"dropdown",ref:r,class:"ded-dropdown",role:"listbox",tabindex:"0",onClick:s[1]||(s[1]=()=>{t.value=!t.value,n()})},[v(B,{type:"text",size:e.size,placeholder:e.placeholder,isOpen:t.value,className:"ded-dropdown-input",modelValue:l.value,"onUpdate:modelValue":s[0]||(s[0]=S=>l.value=S)},null,8,["size","placeholder","isOpen","modelValue"])],512),(d(),x(O,{to:"body"},[t.value?(d(),c("div",{key:0,class:"ded-tooltip",style:k(m.value)},[v(L,{dataSource:e.dataSource,hasOutline:!0,onOnSelect:D},null,8,["dataSource"])],4)):f("",!0)]))],64))}};p.__docgenInfo={exportName:"default",displayName:"Dropdown",description:"",tags:{},props:[{name:"dataSource",type:{name:"array"},required:!0,defaultValue:{func:!1,value:"[]"}},{name:"label",type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"placeholder",type:{name:"string"},defaultValue:{func:!1,value:'"Placeholder"'}},{name:"size",type:{name:"string"},defaultValue:{func:!1,value:'"medium"'},values:["small","medium","large"]},{name:"className",type:{name:"string"},defaultValue:{func:!1,value:'""'}}],sourceFiles:["D:/98_測試/up/DED-WDS_VUE/libs/src/ui/element/Dropdown/Dropdown.vue"]};function A(a){return`[
    ${a.map(l=>`{
        label: '${l.label}',
        value: '${l.value}',
    }`).join(`,
    `)}
  ]`}const W={title:"Component/Dropdown",component:p,tags:["autodocs"],argTypes:{dataSource:{description:"資料來源",control:{type:"object"},table:{type:{summary:"{ label: string; value: string; }[]"}}},label:{description:"標題",control:{type:"text"}},placeholder:{description:"輸入提示",control:{type:"text"}},size:{description:"輸入框尺寸",control:{type:"select"},options:["small","medium","large"],table:{type:{summary:"small | medium | large"}}},className:{description:"客製化樣式",control:{type:"text"}},modelValue:{description:"輸入值",control:{type:"select",labels:{"":"none",option1:"option1",option2:"option2",option3:"option3"}},options:["","option1","option2","option3"],table:{type:{summary:"string"},category:"v-model"}}},parameters:{docs:{title:"Dropdown",description:{component:"Dropdown 組件的呈現及說明。"}}}},i={name:"預設項目",args:{dataSource:[{label:"Option1",value:"option1"},{label:"Option2",value:"option2"},{label:"Option3",value:"option3"}],label:"Label",placeholder:"Placeholder",size:"medium",className:"",modelValue:""},render:a=>({components:{Dropdown:p},setup(){return{args:a}},template:`
            <Dropdown 
                :dataSource="args.dataSource"
                :label="args.label"
                :placeholder="args.placeholder"
                :size="args.size"
                :className="args.className"
                v-model="args.modelValue"
            >
            </Dropdown>
            `}),parameters:{controls:{},docs:{source:{transform:(a,l)=>{const{args:e}=l;return["<script setup>",'import { ref } from "vue";','import { Dropdown } from "@ded-wds-vue/ui";','const modelValue = ref("");',"<\/script>","","<template>","  <Dropdown",`    :dataSource="${A(e.dataSource)}"`,`    ${e.label?`label="${e.label}"`:""}`,`    ${e.placeholder?`placeholder="${e.placeholder}"`:""}`,`    ${e.size?`size="${e.size}"`:""}`,`    ${e.className?`className="${e.className}"`:""}`,'    v-model="modelValue"',"  ></Dropdown>","</template>"].filter(Boolean).join(`
`).trim()}}}}};var w,b,y;i.parameters={...i.parameters,docs:{...(w=i.parameters)==null?void 0:w.docs,source:{originalSource:`{
  name: '預設項目',
  args: {
    dataSource: [{
      "label": "Option1",
      "value": "option1"
    }, {
      "label": "Option2",
      "value": "option2"
    }, {
      "label": "Option3",
      "value": "option3"
    }],
    label: "Label",
    placeholder: "Placeholder",
    size: "medium",
    className: "",
    modelValue: ""
  },
  render: args => ({
    components: {
      Dropdown
    },
    setup() {
      return {
        args
      };
    },
    template: \`
            <Dropdown 
                :dataSource="args.dataSource"
                :label="args.label"
                :placeholder="args.placeholder"
                :size="args.size"
                :className="args.className"
                v-model="args.modelValue"
            >
            </Dropdown>
            \`
  }),
  // 控制 controls 中能控制的參數
  parameters: {
    controls: {
      // include: ['objectFit', 'src', 'value', 'name' ],
    },
    docs: {
      source: {
        transform: (src, storyContext) => {
          const {
            args
          } = storyContext;
          const dataSourceString = formatDataSource(args.dataSource);
          return [\`<script setup>\`, 'import { ref } from "vue";', \`import { Dropdown } from "@ded-wds-vue/ui";\`, 'const modelValue = ref("");', \`<\/script>\`, '', '<template>', '  <Dropdown', \`    :dataSource="\${dataSourceString}"\`, \`    \${args.label ? \`label="\${args.label}"\` : ""}\`, \`    \${args.placeholder ? \`placeholder="\${args.placeholder}"\` : ""}\`, \`    \${args.size ? \`size="\${args.size}"\` : ""}\`, \`    \${args.className ? \`className="\${args.className}"\` : ""}\`, \`    v-model="modelValue"\`, '  ></Dropdown>', '</template>'].filter(Boolean).join('\\n').trim();
        }
      }
    }
  }
}`,...(y=(b=i.parameters)==null?void 0:b.docs)==null?void 0:y.source}}};const X=["DropdownDefault"];export{i as DropdownDefault,X as __namedExportsOrder,W as default};

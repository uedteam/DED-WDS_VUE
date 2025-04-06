import{p as h,u as V,v as u,A as $,D as z,B as N,c,d as f,a as _,j as E,t as x,b as v,k,T as O,F as B,o as d}from"./vue.esm-bundler-CC1hEtM-.js";import{_ as C}from"./Input-CoDoM4yY.js";import{_ as L}from"./List-C1GUXAb9.js";import{g as P}from"./positionUtils-CIbX64TV.js";import"./Icon-C3V5hff5.js";import"./v4-CtRu48qb.js";const j={key:0,class:"ded-input-label"},A=8,F="bottom",p={__name:"Dropdown",props:h({dataSource:{type:Array,required:!0},label:{type:String,default:""},placeholder:{type:String,default:"Placeholder"},size:{type:String,validator:o=>["small","medium","large"].includes(o),default:"medium"},className:{type:String,default:""}},{modelValue:{},modelModifiers:{}}),emits:["update:modelValue"],setup(o){const a=o,e=V(o,"modelValue"),l=u(!1),r=u(null),m=u({});function S(t){e.value=t,l.value=!1}function g(t){r.value&&!r.value.contains(t.target)&&(l.value=!1)}function n(){if(r.value){const t=r.value.getBoundingClientRect();m.value=P({top:t.top+window.scrollY,left:t.left+window.scrollX},{width:t.width,height:t.height},F,`${A}px`,!0)}}return $(()=>{document.addEventListener("click",g),window.addEventListener("resize",n),window.addEventListener("scroll",n),z(()=>n())}),N(()=>{document.removeEventListener("click",g),window.removeEventListener("resize",n),window.removeEventListener("scroll",n)}),(t,s)=>(d(),c(B,null,[a.label?(d(),c("label",j,x(a.label),1)):f("",!0),_("div",{ref_key:"dropdown",ref:r,class:"ded-dropdown",role:"listbox",tabindex:"0",onClick:s[1]||(s[1]=()=>{l.value=!l.value,n()})},[v(C,{modelValue:e.value,"onUpdate:modelValue":s[0]||(s[0]=y=>e.value=y),type:"text",size:a.size,placeholder:a.placeholder,"is-open":l.value,"class-name":"ded-dropdown-input"},null,8,["modelValue","size","placeholder","is-open"])],512),(d(),E(O,{to:"body"},[l.value?(d(),c("div",{key:0,class:"ded-tooltip",style:k(m.value)},[v(L,{"data-source":a.dataSource,"has-outline":!0,onOnSelect:S},null,8,["data-source"])],4)):f("",!0)]))],64))}};p.__docgenInfo={exportName:"default",displayName:"Dropdown",description:"",tags:{},props:[{name:"dataSource",type:{name:"array"},required:!0},{name:"label",type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"placeholder",type:{name:"string"},defaultValue:{func:!1,value:'"Placeholder"'}},{name:"size",type:{name:"string"},defaultValue:{func:!1,value:'"medium"'},values:["small","medium","large"]},{name:"className",type:{name:"string"},defaultValue:{func:!1,value:'""'}}],sourceFiles:["/home/runner/work/DED-WDS_VUE/DED-WDS_VUE/libs/src/ui/element/Dropdown/Dropdown.vue"]};function T(o){return`    ${o.map(a=>`{
        label: "${a.label}",
        value: "${a.value}",
    }`).join(`,
    `)}`}const X={title:"Component/Dropdown",component:p,tags:["autodocs"],argTypes:{dataSource:{description:"資料來源",control:{type:"object"},table:{type:{summary:"{ label: string; value: string; }[]"}}},label:{description:"標題",control:{type:"text"}},placeholder:{description:"輸入提示",control:{type:"text"}},size:{description:"輸入框尺寸",control:{type:"select"},options:["small","medium","large"],table:{type:{summary:"small | medium | large"}}},className:{description:"客製化樣式",control:{type:"text"}},modelValue:{description:"輸入值",control:{type:"select",labels:{"":"none",option1:"option1",option2:"option2",option3:"option3"}},options:["","option1","option2","option3"],table:{type:{summary:"string"},category:"v-model"}}},parameters:{docs:{title:"Dropdown",description:{component:"Dropdown 組件的呈現及說明。"}}}},i={name:"預設項目",args:{dataSource:[{label:"Option1",value:"option1"},{label:"Option2",value:"option2"},{label:"Option3",value:"option3"}],label:"Label",placeholder:"Placeholder",size:"medium",className:"",modelValue:""},render:o=>({components:{Dropdown:p},setup(){return{args:o}},template:`
      <Dropdown 
        :dataSource="args.dataSource"
        :label="args.label"
        :placeholder="args.placeholder"
        :size="args.size"
        :className="args.className"
        v-model="args.modelValue"
      >
      </Dropdown>
      `}),parameters:{controls:{},docs:{source:{transform:(o,a)=>{const{args:e}=a;return["<script setup>",'import { ref } from "vue";','import { Dropdown } from "@ded-wds-vue/ui";',"const dataSource = [",`${T(e.dataSource)}`,"];",'const modelValue = ref("");',"<\/script>","","<template>","  <Dropdown",'    :dataSource="dataSource"',`    ${e.label?`label="${e.label}"`:""}`,`    ${e.placeholder?`placeholder="${e.placeholder}"`:""}`,`    ${e.size?`size="${e.size}"`:""}`,`    ${e.className?`className="${e.className}"`:""}`,'    v-model="modelValue"',"  ></Dropdown>","</template>"].filter(Boolean).join(`
`).trim()}}}}};var w,b,D;i.parameters={...i.parameters,docs:{...(w=i.parameters)==null?void 0:w.docs,source:{originalSource:`{
  name: "預設項目",
  args: {
    dataSource: [{
      label: "Option1",
      value: "option1"
    }, {
      label: "Option2",
      value: "option2"
    }, {
      label: "Option3",
      value: "option3"
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
          return [\`<script setup>\`, "import { ref } from \\"vue\\";", \`import { Dropdown } from "@ded-wds-vue/ui";\`, \`const dataSource = [\`, \`\${dataSourceString}\`, \`];\`, "const modelValue = ref(\\"\\");", \`<\/script>\`, "", "<template>", "  <Dropdown", \`    :dataSource="dataSource"\`, \`    \${args.label ? \`label="\${args.label}"\` : ""}\`, \`    \${args.placeholder ? \`placeholder="\${args.placeholder}"\` : ""}\`, \`    \${args.size ? \`size="\${args.size}"\` : ""}\`, \`    \${args.className ? \`className="\${args.className}"\` : ""}\`, \`    v-model="modelValue"\`, "  ></Dropdown>", "</template>"].filter(Boolean).join("\\n").trim();
        }
      }
    }
  }
}`,...(D=(b=i.parameters)==null?void 0:b.docs)==null?void 0:D.source}}};const Y=["DropdownDefault"];export{i as DropdownDefault,Y as __namedExportsOrder,X as default};

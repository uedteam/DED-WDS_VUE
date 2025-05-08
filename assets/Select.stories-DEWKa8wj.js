import{p as g,u as b,r as v,c as o,v as D,a as n,J as y,t as m,F as V,q as x,n as c,b as h,o as i}from"./vue.esm-bundler-CIcyrfsw.js";import{_ as $}from"./Icon-DjPu9lgd.js";const N=["disabled"],_={value:"",disabled:"",selected:""},O=["value"],d={__name:"Select",props:g({dataSource:{type:Array,required:!0},placeholder:{type:String,default:"Select"},suffix:{type:String},isDisabled:{type:Boolean,default:!1},className:{type:String,default:""}},{modelValue:{},modelModifiers:{}}),emits:["update:modelValue"],setup(s){const e=s,a=b(s,"modelValue"),r=v(a);return(E,u)=>(i(),o("div",{class:c(["ded-select-container",{[e.className]:!!e.className}])},[D(n("select",{"onUpdate:modelValue":u[0]||(u[0]=l=>r.value=l),class:c(["ded-select",{"ded-select-disabled":e.isDisabled}]),disabled:e.isDisabled},[n("option",_,m(e.placeholder),1),(i(!0),o(V,null,x(e.dataSource,l=>(i(),o("option",{key:l.value,value:l.value},m(l.label),9,O))),128))],10,N),[[y,r.value]]),n("div",{class:c(["ded-select-icon",{"ded-select-icon-disabled":e.isDisabled}])},[h($,{name:e.suffix,size:"18"},null,8,["name"])],2)],2))}};d.__docgenInfo={exportName:"default",displayName:"Select",description:"",tags:{},props:[{name:"dataSource",type:{name:"array"},required:!0},{name:"placeholder",type:{name:"string"},defaultValue:{func:!1,value:'"Select"'}},{name:"suffix",type:{name:"string"}},{name:"isDisabled",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"className",type:{name:"string"},defaultValue:{func:!1,value:'""'}}],sourceFiles:["/home/runner/work/DED-WDS_VUE/DED-WDS_VUE/libs/src/ui/element/Select/Select.vue"]};function A(s){return`    ${s.map(e=>`{
        label: "${e.label}",
        value: "${e.value}",
    }`).join(`,
    `)}`}const j={title:"Component/Select",component:d,tags:["autodocs"],argTypes:{dataSource:{description:"選項",control:{type:"object"},table:{type:{summary:"{ label: string; value: string | number; }[]"}}},placeholder:{description:"輸入提示",control:{type:"text"}},suffix:{description:"後綴圖示",control:{type:"select",labels:{"":"none",SvgAccount:"SvgAccount",SvgSearch:"SvgSearch",SvgVisibility:"SvgVisibility",SvgVisibilityOff:"SvgVisibilityOff"}},options:["","SvgAccount","SvgSearch","SvgVisibility","SvgVisibilityOff"]},isDisabled:{description:"是否禁用",control:{type:"boolean"}},className:{description:"客製化樣式",control:{type:"text"}},modelValue:{description:"值",control:{type:"select",labels:{"":"none",1:"1",2:"2",3:"3"}},options:["","1","2","3"],table:{type:{summary:"string | number"},category:"v-model"}}},parameters:{docs:{title:"Select",description:{component:"選擇組件的呈現及說明。"}}}},t={name:"預設項目",args:{dataSource:[{label:"Option 1",value:"1"},{label:"Option 2",value:"2"},{label:"Option 3",value:"3"}],placeholder:"Select",suffix:"SvgArrowDropDown",isDisabled:!1,className:"",modelValue:""},render:s=>({components:{Select:d},setup(){return{args:s}},template:`
      <Select
        :dataSource="args.dataSource"
        :placeholder="args.placeholder"
        :suffix="args.suffix"
        :isDisabled="args.isDisabled"
        :className="args.className"
        v-model="args.modelValue"
      ></Select>`}),parameters:{controls:{},docs:{source:{transform:(s,e)=>{const{args:a}=e;return["<script setup>",'import { ref } from "vue";','import { Select } from "@ded-wds-vue/ui";',"const dataSource = [",`${A(a.dataSource)}`,"];",'const modelValue = ref("");',"<\/script>","","<template>","  <Select",'    :dataSource="dataSource"',`    ${a.placeholder?`placeholder="${a.placeholder}"`:""}`,`    ${a.suffix?`suffix="${a.suffix}"`:""}`,`    ${a.isDisabled!==void 0?`:isDisabled="${a.isDisabled}"`:""}`,`    ${a.className?`className="${a.className}"`:""}`,'    v-model="modelValue"',"  ></Select>","</template>"].filter(Boolean).join(`
`).trim()}}}}};var p,f,S;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: "預設項目",
  args: {
    dataSource: [{
      label: "Option 1",
      value: "1"
    }, {
      label: "Option 2",
      value: "2"
    }, {
      label: "Option 3",
      value: "3"
    }],
    placeholder: "Select",
    suffix: "SvgArrowDropDown",
    isDisabled: false,
    className: "",
    modelValue: ""
  },
  render: args => ({
    components: {
      Select
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <Select
        :dataSource="args.dataSource"
        :placeholder="args.placeholder"
        :suffix="args.suffix"
        :isDisabled="args.isDisabled"
        :className="args.className"
        v-model="args.modelValue"
      ></Select>\`
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
          return [\`<script setup>\`, \`import { ref } from "vue";\`, \`import { Select } from "@ded-wds-vue/ui";\`, \`const dataSource = [\`, \`\${dataSourceString}\`, \`];\`, "const modelValue = ref(\\"\\");", \`<\/script>\`, "", "<template>", \`  <Select\`, \`    :dataSource="dataSource"\`, \`    \${args.placeholder ? \`placeholder="\${args.placeholder}"\` : ""}\`, \`    \${args.suffix ? \`suffix="\${args.suffix}"\` : ""}\`, \`    \${args.isDisabled !== undefined ? \`:isDisabled="\${args.isDisabled}"\` : ""}\`, \`    \${args.className ? \`className="\${args.className}"\` : ""}\`, \`    v-model="modelValue"\`, \`  ></Select>\`, "</template>"].filter(Boolean).join("\\n").trim();
        }
      }
    }
  }
}`,...(S=(f=t.parameters)==null?void 0:f.docs)==null?void 0:S.source}}};const C=["SelectDefault"];export{t as SelectDefault,C as __namedExportsOrder,j as default};

import{m as g,u as b,r as v,c as o,l as y,a as n,J as D,t as m,F as V,j as x,n as c,b as $,o as i}from"./vue.esm-bundler-CScppja8.js";import{_ as h}from"./Icon-Dil69s3n.js";const N=["disabled"],_={value:"",disabled:"",selected:""},O=["value"],d={__name:"Select",props:g({dataSource:{type:Array,required:!0},placeholder:{type:String,default:"Select"},suffix:{type:String},isDisabled:{type:Boolean,default:!1},className:{type:String,default:""}},{modelValue:{},modelModifiers:{}}),emits:["update:modelValue"],setup(a){const s=b(a,"modelValue"),e=a,l=v(s);return(w,u)=>(i(),o("div",{class:c({"ded-select-container":!0,[e.className]:!!e.className})},[y(n("select",{class:c(["ded-select",{"ded-select-disabled":e.isDisabled}]),"onUpdate:modelValue":u[0]||(u[0]=t=>l.value=t),disabled:e.isDisabled},[n("option",_,m(e.placeholder),1),(i(!0),o(V,null,x(e.dataSource,t=>(i(),o("option",{key:t.value,value:t.value},m(t.label),9,O))),128))],10,N),[[D,l.value]]),n("div",{class:c(["ded-select-icon",{"ded-select-icon-disabled":e.isDisabled}])},[$(h,{name:e.suffix,size:"18"},null,8,["name"])],2)],2))}};d.__docgenInfo={exportName:"default",displayName:"Select",description:"",tags:{},props:[{name:"dataSource",type:{name:"array"},required:!0},{name:"placeholder",type:{name:"string"},defaultValue:{func:!1,value:'"Select"'}},{name:"suffix",type:{name:"string"}},{name:"isDisabled",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"className",type:{name:"string"},defaultValue:{func:!1,value:'""'}}],sourceFiles:["D:/98_測試/up/DED-WDS_VUE/libs/src/ui/element/Select/Select.vue"]};function A(a){return`[
    ${a.map(s=>`{
        label: '${s.label}',
        value: '${s.value}',
    }`).join(`,
    `)}
  ]`}const B={title:"Component/Select",component:d,tags:["autodocs"],argTypes:{dataSource:{description:"選項",control:{type:"object"},table:{type:{summary:"{ label: string; value: string | number; }[]"}}},placeholder:{description:"輸入提示",control:{type:"text"}},suffix:{description:"後綴圖示",control:{type:"select",labels:{"":"none",SvgAccount:"SvgAccount",SvgSearch:"SvgSearch",SvgVisibility:"SvgVisibility",SvgVisibilityOff:"SvgVisibilityOff"}},options:["","SvgAccount","SvgSearch","SvgVisibility","SvgVisibilityOff"]},isDisabled:{description:"是否禁用",control:{type:"boolean"}},className:{description:"客製化樣式",control:{type:"text"}},modelValue:{description:"值",control:{type:"select",labels:{"":"none",1:"1",2:"2",3:"3"}},options:["","1","2","3"],table:{type:{summary:"string | number"},category:"v-model"}}},parameters:{docs:{title:"Select",description:{component:"選擇組件的呈現及說明。"}}}},r={name:"預設項目",args:{dataSource:[{label:"Option 1",value:"1"},{label:"Option 2",value:"2"},{label:"Option 3",value:"3"}],placeholder:"Select",suffix:"SvgArrowDropDown",isDisabled:!1,className:"",modelValue:""},render:a=>({components:{Select:d},setup(){return{args:a}},template:`
            <Select
                :dataSource="args.dataSource"
                :placeholder="args.placeholder"
                :suffix="args.suffix"
                :isDisabled="args.isDisabled"
                :className="args.className"
                v-model="args.modelValue"
            >
            </Select>
        `}),parameters:{controls:{},docs:{source:{transform:(a,s)=>{const{args:e}=s,l=A(e.dataSource);return["<script setup>",'import { ref } from "vue";','import { Select } from "@ded-wds-vue/ui";','const modelValue = ref("");',"<\/script>","","<template>","  <Select",`    ${l!==void 0?`:dataSource="${l}"`:""}`,`    ${e.placeholder?`placeholder="${e.placeholder}"`:""}`,`    ${e.suffix?`suffix="${e.suffix}"`:""}`,`    ${e.isDisabled!==void 0?`:isDisabled="${e.isDisabled}"`:""}`,`    ${e.className?`className="${e.className}"`:""}`,'    v-model="modelValue"',"  ></Select>","</template>"].filter(Boolean).join(`
`).trim()}}}}};var p,f,S;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: '預設項目',
  args: {
    dataSource: [{
      "label": "Option 1",
      "value": "1"
    }, {
      "label": "Option 2",
      "value": "2"
    }, {
      "label": "Option 3",
      "value": "3"
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
            >
            </Select>
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
          return [\`<script setup>\`, 'import { ref } from "vue";', \`import { Select } from "@ded-wds-vue/ui";\`, 'const modelValue = ref("");', \`<\/script>\`, '', '<template>', \`  <Select\`, \`    \${dataSourceString !== undefined ? \`:dataSource="\${dataSourceString}"\` : ""}\`, \`    \${args.placeholder ? \`placeholder="\${args.placeholder}"\` : ""}\`, \`    \${args.suffix ? \`suffix="\${args.suffix}"\` : ""}\`, \`    \${args.isDisabled !== undefined ? \`:isDisabled="\${args.isDisabled}"\` : ""}\`, \`    \${args.className ? \`className="\${args.className}"\` : ""}\`, \`    v-model="modelValue"\`, \`  ></Select>\`, '</template>'].filter(Boolean).join('\\n').trim();
        }
      }
    }
  }
}`,...(S=(f=r.parameters)==null?void 0:f.docs)==null?void 0:S.source}}};const C=["SelectDefault"];export{r as SelectDefault,C as __namedExportsOrder,B as default};

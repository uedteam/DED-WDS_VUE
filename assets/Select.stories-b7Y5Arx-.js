import{_ as n}from"./Select-Bgu4YMcI.js";import"./vue.esm-bundler-DkGXwu1Q.js";import"./Icon-YhCiAXtM.js";function c(a){return`    ${a.map(t=>`{
        label: "${t.label}",
        value: "${t.value}",
    }`).join(`,
    `)}`}const m={title:"Component/Select",component:n,tags:["autodocs"],argTypes:{dataSource:{description:"選項",control:{type:"object"},table:{type:{summary:"{ label: string; value: string | number; }[]"}}},placeholder:{description:"輸入提示",control:{type:"text"}},suffix:{description:"後綴圖示",control:{type:"select",labels:{"":"none",SvgAccount:"SvgAccount",SvgSearch:"SvgSearch",SvgVisibility:"SvgVisibility",SvgVisibilityOff:"SvgVisibilityOff"}},options:["","SvgAccount","SvgSearch","SvgVisibility","SvgVisibilityOff"]},isDisabled:{description:"是否禁用",control:{type:"boolean"}},className:{description:"客製化樣式",control:{type:"text"}},modelValue:{description:"值",control:{type:"select",labels:{"":"none",1:"1",2:"2",3:"3"}},options:["","1","2","3"],table:{type:{summary:"string | number"},category:"v-model"}}},parameters:{docs:{title:"Select",description:{component:"選擇組件的呈現及說明。"}}}},s={name:"預設項目",args:{dataSource:[{label:"Option 1",value:"1"},{label:"Option 2",value:"2"},{label:"Option 3",value:"3"}],placeholder:"Select",suffix:"SvgArrowDropDown",isDisabled:!1,className:"",modelValue:""},render:a=>({components:{Select:n},setup(){return{args:a}},template:`
      <Select
        :dataSource="args.dataSource"
        :placeholder="args.placeholder"
        :suffix="args.suffix"
        :isDisabled="args.isDisabled"
        :className="args.className"
        v-model="args.modelValue"
      ></Select>`}),parameters:{controls:{},docs:{source:{transform:(a,t)=>{const{args:e}=t;return["<script setup>",'import { ref } from "vue";','import { Select } from "@ded-wds-vue/ui";',"const dataSource = [",`${c(e.dataSource)}`,"];",'const modelValue = ref("");',"<\/script>","","<template>","  <Select",'    :dataSource="dataSource"',`    ${e.placeholder?`placeholder="${e.placeholder}"`:""}`,`    ${e.suffix?`suffix="${e.suffix}"`:""}`,`    ${e.isDisabled!==void 0?`:isDisabled="${e.isDisabled}"`:""}`,`    ${e.className?`className="${e.className}"`:""}`,'    v-model="modelValue"',"  ></Select>","</template>"].filter(Boolean).join(`
`).trim()}}}}};var r,l,o;s.parameters={...s.parameters,docs:{...(r=s.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(o=(l=s.parameters)==null?void 0:l.docs)==null?void 0:o.source}}};const S=["SelectDefault"];export{s as SelectDefault,S as __namedExportsOrder,m as default};

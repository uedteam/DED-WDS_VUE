import{p as k,u as L,c as C,a as n,n as c,t as $,L as p,o as f}from"./vue.esm-bundler-DDwqdenp.js";import{_ as D}from"./_plugin-vue_export-helper-DlAUqK2U.js";const b={__name:"Toggle",props:k({themeColor:{type:String,default:"primary",validator:l=>["primary","secondary","neutral","info","success","warning","error"].includes(l)},checkLabel:{type:String,default:"on"},unCheckLabel:{type:String,default:"off"},isDisabled:{type:Boolean,default:!1},className:{type:String,default:""}},{modelValue:{type:Boolean,default:!1},modelModifiers:{}}),emits:["update:modelValue"],setup(l){const a=l,e=L(l,"modelValue");function h(){e.value=!e.value}return(N,T)=>(f(),C("div",{class:c(["ded-toggle",{[`ded-toggle-${a.themeColor}`]:a.themeColor,"ded-toggle-on":e.value,"ded-toggle-off":!e.value,"ded-toggle-disabled":a.isDisabled,[a.className]:!!a.className}]),onClick:p(h,["prevent"])},[n("div",{class:c(["ded-toggle-thumb",{"ded-toggle-thumb-on":e.value,"ded-toggle-thumb-off":!e.value,"ded-toggle-thumb-disabled":a.isDisabled}])},null,2),n("label",{class:c(["ded-toggle-label",{"ded-toggle-label-on":e.value,"ded-toggle-label-off":!e.value,"ded-toggle-label-disabled":a.isDisabled}])},$(e.value===!0?a.checkLabel:a.unCheckLabel),3)],2))}},r=D(b,[["__scopeId","data-v-ea7d8f21"]]);b.__docgenInfo={exportName:"default",displayName:"Toggle",description:"",tags:{},props:[{name:"themeColor",type:{name:"string"},defaultValue:{func:!1,value:"'primary'"},values:["primary","secondary","neutral","info","success","warning","error"]},{name:"checkLabel",type:{name:"string"},defaultValue:{func:!1,value:"'on'"}},{name:"unCheckLabel",type:{name:"string"},defaultValue:{func:!1,value:"'off'"}},{name:"isDisabled",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"className",type:{name:"string"},defaultValue:{func:!1,value:"''"}}],sourceFiles:["/home/runner/work/DED-WDS_VUE/DED-WDS_VUE/libs/src/ui/element/Toggle/Toggle.vue"]};const y={title:"Component/Toggle",component:r,tags:["autodocs"],argTypes:{themeColor:{description:"主題顏色",control:{type:"select"},options:["primary","secondary","neutral","info","success","warning","error"],table:{type:{summary:"primary | secondary | neutral | info | success | warning | error"}}},checkLabel:{description:"開啟文字",control:{type:"text"}},unCheckLabel:{description:"關閉文字",control:{type:"text"}},isDisabled:{description:"是否禁用",control:{type:"boolean"}},className:{description:"客製化樣式",control:{type:"text"}},modelValue:{description:"是否開啟",control:{type:"boolean"},table:{type:{summary:"boolean"},category:"v-model"}}},parameters:{docs:{title:"Toggle",description:{component:"Toggle 組件的呈現及說明。"}}}},s={name:"預設項目",args:{themeColor:"success",checkLabel:"on",unCheckLabel:"off",isDisabled:!1,className:"",modelValue:!0},render:l=>({components:{Toggle:r},setup(){return{args:l}},template:`
      <div style="display:flex; gap: 16px">
        <Toggle
          :themeColor="args.themeColor"
          :checkLabel="args.checkLabel"
          :unCheckLabel="args.unCheckLabel"
          :isDisabled="args.isDisabled"
          :className="args.className" 
          v-model="args.modelValue">
        </Toggle>
      </div>`}),parameters:{controls:{exclude:["toggleIsChecked"]},docs:{source:{transform:(l,a)=>{const{args:e}=a;return["<script setup>",'import { ref } from "vue";','import { Toggle } from "@ded-wds-vue/ui";',`const modelValue = ref(${e.modelValue});`,"<\/script>","","<template>","  <Toggle",`    ${e.themeColor?`themeColor="${e.themeColor}"`:""}`,`    ${e.checkLabel?`checkLabel="${e.checkLabel}"`:""}`,`    ${e.unCheckLabel?`unCheckLabel="${e.unCheckLabel}"`:""}`,`    ${e.isDisabled!==void 0?`:isDisabled="${e.isDisabled}"`:""}`,`    ${e.className?`className="${e.className}"`:""}`,'    v-model="modelValue"',"  ></Toggle>","</template>"].filter(Boolean).join(`
`).trim()}}}}},o={name:"主題色彩",args:{checkLabel:"on",unCheckLabel:"off",isDisabled:!1,className:"",modelValue:!0},render:l=>({components:{Toggle:r},setup(){return{args:l}},template:`
      <div style="display: flex; gap: 16px">
        <Toggle
          themeColor="primary"
          :checkLabel="args.checkLabel"
          :unCheckLabel="args.unCheckLabel"
          :isDisabled="args.isDisabled"
          :className="args.className"
          v-model="args.modelValue"
        ></Toggle>

        <Toggle
          themeColor="secondary"
          :checkLabel="args.checkLabel"
          :unCheckLabel="args.unCheckLabel"
          :isDisabled="args.isDisabled"
          :className="args.className"
          v-model="args.modelValue"
        ></Toggle>

        <Toggle
          themeColor="neutral"
          :checkLabel="args.checkLabel"
          :unCheckLabel="args.unCheckLabel"
          :isDisabled="args.isDisabled"
          :className="args.className"
          v-model="args.modelValue"
        ></Toggle>

        <Toggle
          themeColor="info"
          :checkLabel="args.checkLabel"
          :unCheckLabel="args.unCheckLabel"
          :isDisabled="args.isDisabled"
          :className="args.className"
          v-model="args.modelValue"
        ></Toggle>

        <Toggle
          themeColor="success"
          :checkLabel="args.checkLabel"
          :unCheckLabel="args.unCheckLabel"
          :isDisabled="args.isDisabled"
          :className="args.className"
          v-model="args.modelValue"
        ></Toggle>

        <Toggle
          themeColor="warning"
          :checkLabel="args.checkLabel"
          :unCheckLabel="args.unCheckLabel"
          :isDisabled="args.isDisabled"
          :className="args.className"
          v-model="args.modelValue"
        ></Toggle>

        <Toggle
          themeColor="error"
          :checkLabel="args.checkLabel"
          :unCheckLabel="args.unCheckLabel"
          :isDisabled="args.isDisabled"
          :className="args.className"
          v-model="args.modelValue"
        ></Toggle>
      </div>`}),parameters:{controls:{exclude:["themeColor"]},docs:{source:{transform:(l,a)=>{const{args:e}=a;return["<script setup>",'import { ref } from "vue";','import { Toggle } from "@ded-wds-vue/ui";',`const modelValue = ref(${e.modelValue});`,"<\/script>","","<template>","  <Toggle",'    themeColor="primary"',`    ${e.checkLabel?`checkLabel="${e.checkLabel}"`:""}`,`    ${e.unCheckLabel?`unCheckLabel="${e.unCheckLabel}"`:""}`,`    ${e.isDisabled!==void 0?`:isDisabled="${e.isDisabled}"`:""}`,`    ${e.className?`className="${e.className}"`:""}`,'    v-model="modelValue"',"  ></Toggle>","  <Toggle",'    themeColor="secondary"',`    ${e.checkLabel?`checkLabel="${e.checkLabel}"`:""}`,`    ${e.unCheckLabel?`unCheckLabel="${e.unCheckLabel}"`:""}`,`    ${e.isDisabled!==void 0?`:isDisabled="${e.isDisabled}"`:""}`,`    ${e.className?`className="${e.className}"`:""}`,'    v-model="modelValue"',"  ></Toggle>","  <Toggle",'    themeColor="neutral"',`    ${e.checkLabel?`checkLabel="${e.checkLabel}"`:""}`,`    ${e.unCheckLabel?`unCheckLabel="${e.unCheckLabel}"`:""}`,`    ${e.isDisabled!==void 0?`:isDisabled="${e.isDisabled}"`:""}`,`    ${e.className?`className="${e.className}"`:""}`,'    v-model="modelValue"',"  ></Toggle>","  <Toggle",'    themeColor="info"',`    ${e.checkLabel?`checkLabel="${e.checkLabel}"`:""}`,`    ${e.unCheckLabel?`unCheckLabel="${e.unCheckLabel}"`:""}`,`    ${e.isDisabled!==void 0?`:isDisabled="${e.isDisabled}"`:""}`,`    ${e.className?`className="${e.className}"`:""}`,'    v-model="modelValue"',"  ></Toggle>","  <Toggle",'    themeColor="success"',`    ${e.checkLabel?`checkLabel="${e.checkLabel}"`:""}`,`    ${e.unCheckLabel?`unCheckLabel="${e.unCheckLabel}"`:""}`,`    ${e.isDisabled!==void 0?`:isDisabled="${e.isDisabled}"`:""}`,`    ${e.className?`className="${e.className}"`:""}`,'    v-model="modelValue"',"  ></Toggle>","  <Toggle",'    themeColor="warning"',`    ${e.checkLabel?`checkLabel="${e.checkLabel}"`:""}`,`    ${e.unCheckLabel?`unCheckLabel="${e.unCheckLabel}"`:""}`,`    ${e.isDisabled!==void 0?`:isDisabled="${e.isDisabled}"`:""}`,`    ${e.className?`className="${e.className}"`:""}`,'    v-model="modelValue"',"  ></Toggle>","  <Toggle",'    themeColor="error"',`    ${e.checkLabel?`checkLabel="${e.checkLabel}"`:""}`,`    ${e.unCheckLabel?`unCheckLabel="${e.unCheckLabel}"`:""}`,`    ${e.isDisabled!==void 0?`:isDisabled="${e.isDisabled}"`:""}`,`    ${e.className?`className="${e.className}"`:""}`,'    v-model="modelValue"',"  ></Toggle>","</template>"].filter(Boolean).join(`
`).trim()}}}}};var g,d,i;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  name: "預設項目",
  args: {
    themeColor: "success",
    checkLabel: "on",
    unCheckLabel: "off",
    isDisabled: false,
    className: "",
    modelValue: true
  },
  render: args => ({
    components: {
      Toggle
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <div style="display:flex; gap: 16px">
        <Toggle
          :themeColor="args.themeColor"
          :checkLabel="args.checkLabel"
          :unCheckLabel="args.unCheckLabel"
          :isDisabled="args.isDisabled"
          :className="args.className" 
          v-model="args.modelValue">
        </Toggle>
      </div>\`
  }),
  // 控制 controls 中能控制的參數
  parameters: {
    controls: {
      exclude: ["toggleIsChecked"]
    },
    docs: {
      source: {
        transform: (src, storyContext) => {
          const {
            args
          } = storyContext;
          return [\`<script setup>\`, "import { ref } from \\"vue\\";", \`import { Toggle } from "@ded-wds-vue/ui";\`, \`const modelValue = ref(\${args.modelValue});\`, \`<\/script>\`, "", "<template>", "  <Toggle", \`    \${args.themeColor ? \`themeColor="\${args.themeColor}"\` : ""}\`, \`    \${args.checkLabel ? \`checkLabel="\${args.checkLabel}"\` : ""}\`, \`    \${args.unCheckLabel ? \`unCheckLabel="\${args.unCheckLabel}"\` : ""}\`, \`    \${args.isDisabled !== undefined ? \`:isDisabled="\${args.isDisabled}"\` : ""}\`, \`    \${args.className ? \`className="\${args.className}"\` : ""}\`, \`    v-model="modelValue"\`, "  ></Toggle>", "</template>"].filter(Boolean).join("\\n").trim();
        }
      }
    }
  }
}`,...(i=(d=s.parameters)==null?void 0:d.docs)==null?void 0:i.source}}};var m,t,u;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:'{\n  name: "主題色彩",\n  args: {\n    // themeColor: \'success\',\n    checkLabel: "on",\n    unCheckLabel: "off",\n    isDisabled: false,\n    className: "",\n    modelValue: true\n  },\n  render: args => ({\n    components: {\n      Toggle\n    },\n    setup() {\n      return {\n        args\n      };\n    },\n    template: `\n      <div style="display: flex; gap: 16px">\n        <Toggle\n          themeColor="primary"\n          :checkLabel="args.checkLabel"\n          :unCheckLabel="args.unCheckLabel"\n          :isDisabled="args.isDisabled"\n          :className="args.className"\n          v-model="args.modelValue"\n        ></Toggle>\n\n        <Toggle\n          themeColor="secondary"\n          :checkLabel="args.checkLabel"\n          :unCheckLabel="args.unCheckLabel"\n          :isDisabled="args.isDisabled"\n          :className="args.className"\n          v-model="args.modelValue"\n        ></Toggle>\n\n        <Toggle\n          themeColor="neutral"\n          :checkLabel="args.checkLabel"\n          :unCheckLabel="args.unCheckLabel"\n          :isDisabled="args.isDisabled"\n          :className="args.className"\n          v-model="args.modelValue"\n        ></Toggle>\n\n        <Toggle\n          themeColor="info"\n          :checkLabel="args.checkLabel"\n          :unCheckLabel="args.unCheckLabel"\n          :isDisabled="args.isDisabled"\n          :className="args.className"\n          v-model="args.modelValue"\n        ></Toggle>\n\n        <Toggle\n          themeColor="success"\n          :checkLabel="args.checkLabel"\n          :unCheckLabel="args.unCheckLabel"\n          :isDisabled="args.isDisabled"\n          :className="args.className"\n          v-model="args.modelValue"\n        ></Toggle>\n\n        <Toggle\n          themeColor="warning"\n          :checkLabel="args.checkLabel"\n          :unCheckLabel="args.unCheckLabel"\n          :isDisabled="args.isDisabled"\n          :className="args.className"\n          v-model="args.modelValue"\n        ></Toggle>\n\n        <Toggle\n          themeColor="error"\n          :checkLabel="args.checkLabel"\n          :unCheckLabel="args.unCheckLabel"\n          :isDisabled="args.isDisabled"\n          :className="args.className"\n          v-model="args.modelValue"\n        ></Toggle>\n      </div>`\n  }),\n  // 控制 controls 中能控制的參數\n  parameters: {\n    controls: {\n      exclude: ["themeColor"]\n    },\n    docs: {\n      source: {\n        transform: (src, storyContext) => {\n          const {\n            args\n          } = storyContext;\n          return [`<script setup>`, "import { ref } from \\"vue\\";", `import { Toggle } from "@ded-wds-vue/ui";`, `const modelValue = ref(${args.modelValue});`, `<\/script>`, "", "<template>", "  <Toggle", `    themeColor="primary"`, `    ${args.checkLabel ? `checkLabel="${args.checkLabel}"` : ""}`, `    ${args.unCheckLabel ? `unCheckLabel="${args.unCheckLabel}"` : ""}`, `    ${args.isDisabled !== undefined ? `:isDisabled="${args.isDisabled}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, `    v-model="modelValue"`, "  ></Toggle>", "  <Toggle", `    themeColor="secondary"`, `    ${args.checkLabel ? `checkLabel="${args.checkLabel}"` : ""}`, `    ${args.unCheckLabel ? `unCheckLabel="${args.unCheckLabel}"` : ""}`, `    ${args.isDisabled !== undefined ? `:isDisabled="${args.isDisabled}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, `    v-model="modelValue"`, "  ></Toggle>", "  <Toggle", `    themeColor="neutral"`, `    ${args.checkLabel ? `checkLabel="${args.checkLabel}"` : ""}`, `    ${args.unCheckLabel ? `unCheckLabel="${args.unCheckLabel}"` : ""}`, `    ${args.isDisabled !== undefined ? `:isDisabled="${args.isDisabled}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, `    v-model="modelValue"`, "  ></Toggle>", "  <Toggle", `    themeColor="info"`, `    ${args.checkLabel ? `checkLabel="${args.checkLabel}"` : ""}`, `    ${args.unCheckLabel ? `unCheckLabel="${args.unCheckLabel}"` : ""}`, `    ${args.isDisabled !== undefined ? `:isDisabled="${args.isDisabled}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, `    v-model="modelValue"`, "  ></Toggle>", "  <Toggle", `    themeColor="success"`, `    ${args.checkLabel ? `checkLabel="${args.checkLabel}"` : ""}`, `    ${args.unCheckLabel ? `unCheckLabel="${args.unCheckLabel}"` : ""}`, `    ${args.isDisabled !== undefined ? `:isDisabled="${args.isDisabled}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, `    v-model="modelValue"`, "  ></Toggle>", "  <Toggle", `    themeColor="warning"`, `    ${args.checkLabel ? `checkLabel="${args.checkLabel}"` : ""}`, `    ${args.unCheckLabel ? `unCheckLabel="${args.unCheckLabel}"` : ""}`, `    ${args.isDisabled !== undefined ? `:isDisabled="${args.isDisabled}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, `    v-model="modelValue"`, "  ></Toggle>", "  <Toggle", `    themeColor="error"`, `    ${args.checkLabel ? `checkLabel="${args.checkLabel}"` : ""}`, `    ${args.unCheckLabel ? `unCheckLabel="${args.unCheckLabel}"` : ""}`, `    ${args.isDisabled !== undefined ? `:isDisabled="${args.isDisabled}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, `    v-model="modelValue"`, "  ></Toggle>", "</template>"].filter(Boolean).join("\\n").trim();\n        }\n      }\n    }\n  }\n}',...(u=(t=o.parameters)==null?void 0:t.docs)==null?void 0:u.source}}};const x=["ToggleDefault","ToggleColor"];export{o as ToggleColor,s as ToggleDefault,x as __namedExportsOrder,y as default};

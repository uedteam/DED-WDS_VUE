import{m as h,u as k,c as C,a as r,n,t as L,I as $,o as f}from"./vue.esm-bundler-Suj5BAdg.js";const o={__name:"Toggle",props:h({themeColor:{type:String,default:"primary",validator:s=>["primary","secondary","neutral","info","success","warning","error"].includes(s)},checkLabel:{type:String,default:"on"},unCheckLabel:{type:String,default:"off"},isDisabled:{type:Boolean,default:!1},className:{type:String,default:""}},{modelValue:{type:Boolean,default:!1},modelModifiers:{}}),emits:["update:modelValue"],setup(s){const a=k(s,"modelValue"),e=s,b=()=>{a.value=!a.value};return(p,D)=>(f(),C("div",{class:n({"ded-toggle":!0,[`ded-toggle-${e.themeColor}`]:e.themeColor,"ded-toggle-on":a.value,"ded-toggle-off":!a.value,"ded-toggle-disabled":e.isDisabled,[e.className]:!!e.className}),onClick:$(b,["prevent"])},[r("div",{class:n(["ded-toggle-thumb",{"ded-toggle-thumb-on":a.value,"ded-toggle-thumb-off":!a.value,"ded-toggle-thumb-disabled":e.isDisabled}])},null,2),r("label",{class:n(["ded-toggle-label",{"ded-toggle-label-on":a.value,"ded-toggle-label-off":!a.value,"ded-toggle-label-disabled":e.isDisabled}])},L(a.value===!0?e.checkLabel:e.unCheckLabel),3)],2))}};o.__docgenInfo={exportName:"default",displayName:"Toggle",description:"",tags:{},props:[{name:"themeColor",type:{name:"string"},defaultValue:{func:!1,value:'"primary"'},values:["primary","secondary","neutral","info","success","warning","error"]},{name:"checkLabel",type:{name:"string"},defaultValue:{func:!1,value:'"on"'}},{name:"unCheckLabel",type:{name:"string"},defaultValue:{func:!1,value:'"off"'}},{name:"isDisabled",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"className",type:{name:"string"},defaultValue:{func:!1,value:'""'}}],sourceFiles:["/Users/auouser/Desktop/Work_Space/DED-WDS_VUE/libs/src/ui/element/Toggle/Toggle.vue"]};const N={title:"Component/Toggle",component:o,tags:["autodocs"],argTypes:{themeColor:{description:"主題顏色",control:{type:"select"},options:["primary","secondary","neutral","info","success","warning","error"],table:{type:{summary:"primary | secondary | neutral | info | success | warning | error"}}},checkLabel:{description:"開啟文字",control:{type:"text"}},unCheckLabel:{description:"關閉文字",control:{type:"text"}},isDisabled:{description:"是否禁用",control:{type:"boolean"}},className:{description:"客製化樣式",control:{type:"text"}},modelValue:{description:"是否開啟",control:{type:"boolean"},table:{type:{summary:"boolean"},category:"v-model"}}},parameters:{docs:{title:"Toggle",description:{component:"Toggle 組件的呈現及說明。"}}}},l={name:"預設項目",args:{themeColor:"success",checkLabel:"on",unCheckLabel:"off",isDisabled:!1,className:"",modelValue:!0},render:s=>({components:{Toggle:o},setup(){return{args:s}},template:`<div style="display:flex; gap: 16px">
                <Toggle
                    :themeColor="args.themeColor"
                    :checkLabel="args.checkLabel"
                    :unCheckLabel="args.unCheckLabel"
                    :isDisabled="args.isDisabled"
                    :className="args.className" 
                    v-model="args.modelValue">
                </Toggle>
            </div>
            `}),parameters:{controls:{exclude:["toggleIsChecked"]},docs:{source:{transform:(s,a)=>{const{args:e}=a;return["<script setup>",'import { ref } from "vue";','import Toggle from "@/ui/element/Toggle/Toggle.vue";',`const modelValue = ref(${e.modelValue});`,"<\/script>","","<template>","  <Toggle",`    ${e.themeColor?`themeColor="${e.themeColor}"`:""}`,`    ${e.checkLabel?`checkLabel="${e.checkLabel}"`:""}`,`    ${e.unCheckLabel?`unCheckLabel="${e.unCheckLabel}"`:""}`,`    ${e.isChecked!==void 0?`:isChecked="${e.isChecked}"`:""}`,`    ${e.isDisabled!==void 0?`:isDisabled="${e.isDisabled}"`:""}`,`    ${e.className?`className="${e.className}"`:""}`,'    v-model="modelValue"',"  ></Toggle>","</template>"].filter(Boolean).join(`
`).trim()}}}}},c={name:"主題色彩",args:{checkLabel:"on",unCheckLabel:"off",isDisabled:!1,className:"",modelValue:!0},render:s=>({components:{Toggle:o},setup(){return{args:s}},template:`<div style="display:flex; gap: 16px">
                <Toggle
                    themeColor="primary"
                    :checkLabel="args.checkLabel"
                    :unCheckLabel="args.unCheckLabel"
                    :isDisabled="args.isDisabled"
                    :className="args.className"
                    v-model="args.modelValue">
                </Toggle>
                <Toggle
                    themeColor="secondary"
                    :checkLabel="args.checkLabel"
                    :unCheckLabel="args.unCheckLabel"
                    :isDisabled="args.isDisabled"
                    :className="args.className"
                    v-model="args.modelValue">
                </Toggle>
                <Toggle
                    themeColor="neutral"
                    :checkLabel="args.checkLabel"
                    :unCheckLabel="args.unCheckLabel"
                    :isDisabled="args.isDisabled"
                    :className="args.className"
                    v-model="args.modelValue">
                </Toggle>
                <Toggle
                    themeColor="info"
                    :checkLabel="args.checkLabel"
                    :unCheckLabel="args.unCheckLabel"
                    :isDisabled="args.isDisabled"
                    :className="args.className"
                    v-model="args.modelValue">
                </Toggle>
                <Toggle
                    themeColor="success"
                    :checkLabel="args.checkLabel"
                    :unCheckLabel="args.unCheckLabel"
                    :isDisabled="args.isDisabled"
                    :className="args.className"
                    v-model="args.modelValue">
                </Toggle>
                <Toggle
                    themeColor="warning"
                    :checkLabel="args.checkLabel"
                    :unCheckLabel="args.unCheckLabel"
                    :isDisabled="args.isDisabled"
                    :className="args.className"
                    v-model="args.modelValue">
                </Toggle>
                <Toggle
                    themeColor="error"
                    :checkLabel="args.checkLabel"
                    :unCheckLabel="args.unCheckLabel"
                    :isDisabled="args.isDisabled"
                    :className="args.className"
                    v-model="args.modelValue">
                </Toggle>
            </div>
            `}),parameters:{controls:{exclude:["themeColor"]},docs:{source:{transform:(s,a)=>{const{args:e}=a;return["<script setup>",'import { ref } from "vue";','import Toggle from "@/ui/element/Toggle/Toggle.vue";',`const modelValue = ref(${e.modelValue});`,"<\/script>","","<template>","  <Toggle",'    themeColor="primary"',`    ${e.checkLabel?`checkLabel="${e.checkLabel}"`:""}`,`    ${e.unCheckLabel?`unCheckLabel="${e.unCheckLabel}"`:""}`,`    ${e.isChecked!==void 0?`:isChecked="${e.isChecked}"`:""}`,`    ${e.isDisabled!==void 0?`:isDisabled="${e.isDisabled}"`:""}`,`    ${e.className?`className="${e.className}"`:""}`,'    v-model="modelValue"',"  ></Toggle>","  <Toggle",'    themeColor="secondary"',`    ${e.checkLabel?`checkLabel="${e.checkLabel}"`:""}`,`    ${e.unCheckLabel?`unCheckLabel="${e.unCheckLabel}"`:""}`,`    ${e.isChecked!==void 0?`:isChecked="${e.isChecked}"`:""}`,`    ${e.isDisabled!==void 0?`:isDisabled="${e.isDisabled}"`:""}`,`    ${e.className?`className="${e.className}"`:""}`,'    v-model="modelValue"',"  ></Toggle>","  <Toggle",'    themeColor="neutral"',`    ${e.checkLabel?`checkLabel="${e.checkLabel}"`:""}`,`    ${e.unCheckLabel?`unCheckLabel="${e.unCheckLabel}"`:""}`,`    ${e.isChecked!==void 0?`:isChecked="${e.isChecked}"`:""}`,`    ${e.isDisabled!==void 0?`:isDisabled="${e.isDisabled}"`:""}`,`    ${e.className?`className="${e.className}"`:""}`,'    v-model="modelValue"',"  ></Toggle>","  <Toggle",'    themeColor="info"',`    ${e.checkLabel?`checkLabel="${e.checkLabel}"`:""}`,`    ${e.unCheckLabel?`unCheckLabel="${e.unCheckLabel}"`:""}`,`    ${e.isChecked!==void 0?`:isChecked="${e.isChecked}"`:""}`,`    ${e.isDisabled!==void 0?`:isDisabled="${e.isDisabled}"`:""}`,`    ${e.className?`className="${e.className}"`:""}`,'    v-model="modelValue"',"  ></Toggle>","  <Toggle",'    themeColor="success"',`    ${e.checkLabel?`checkLabel="${e.checkLabel}"`:""}`,`    ${e.unCheckLabel?`unCheckLabel="${e.unCheckLabel}"`:""}`,`    ${e.isChecked!==void 0?`:isChecked="${e.isChecked}"`:""}`,`    ${e.isDisabled!==void 0?`:isDisabled="${e.isDisabled}"`:""}`,`    ${e.className?`className="${e.className}"`:""}`,'    v-model="modelValue"',"  ></Toggle>","  <Toggle",'    themeColor="warning"',`    ${e.checkLabel?`checkLabel="${e.checkLabel}"`:""}`,`    ${e.unCheckLabel?`unCheckLabel="${e.unCheckLabel}"`:""}`,`    ${e.isChecked!==void 0?`:isChecked="${e.isChecked}"`:""}`,`    ${e.isDisabled!==void 0?`:isDisabled="${e.isDisabled}"`:""}`,`    ${e.className?`className="${e.className}"`:""}`,'    v-model="modelValue"',"  ></Toggle>","  <Toggle",'    themeColor="error"',`    ${e.checkLabel?`checkLabel="${e.checkLabel}"`:""}`,`    ${e.unCheckLabel?`unCheckLabel="${e.unCheckLabel}"`:""}`,`    ${e.isChecked!==void 0?`:isChecked="${e.isChecked}"`:""}`,`    ${e.isDisabled!==void 0?`:isDisabled="${e.isDisabled}"`:""}`,`    ${e.className?`className="${e.className}"`:""}`,'    v-model="modelValue"',"  ></Toggle>","</template>"].filter(Boolean).join(`
`).trim()}}}}};var g,d,i;l.parameters={...l.parameters,docs:{...(g=l.parameters)==null?void 0:g.docs,source:{originalSource:`{
  name: '預設項目',
  args: {
    themeColor: 'success',
    checkLabel: 'on',
    unCheckLabel: 'off',
    isDisabled: false,
    className: '',
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
    template: \`<div style="display:flex; gap: 16px">
                <Toggle
                    :themeColor="args.themeColor"
                    :checkLabel="args.checkLabel"
                    :unCheckLabel="args.unCheckLabel"
                    :isDisabled="args.isDisabled"
                    :className="args.className" 
                    v-model="args.modelValue">
                </Toggle>
            </div>
            \`
  }),
  // 控制 controls 中能控制的參數
  parameters: {
    controls: {
      exclude: ['toggleIsChecked']
    },
    docs: {
      source: {
        transform: (src, storyContext) => {
          const {
            args
          } = storyContext;
          return [\`<script setup>\`, 'import { ref } from "vue";', \`import Toggle from "@/ui/element/Toggle/Toggle.vue";\`, \`const modelValue = ref(\${args.modelValue});\`, \`<\/script>\`, '', '<template>', '  <Toggle', \`    \${args.themeColor ? \`themeColor="\${args.themeColor}"\` : ""}\`, \`    \${args.checkLabel ? \`checkLabel="\${args.checkLabel}"\` : ""}\`, \`    \${args.unCheckLabel ? \`unCheckLabel="\${args.unCheckLabel}"\` : ""}\`, \`    \${args.isChecked !== undefined ? \`:isChecked="\${args.isChecked}"\` : ""}\`, \`    \${args.isDisabled !== undefined ? \`:isDisabled="\${args.isDisabled}"\` : ""}\`, \`    \${args.className ? \`className="\${args.className}"\` : ""}\`, \`    v-model="modelValue"\`, '  ></Toggle>', '</template>'].filter(Boolean).join('\\n').trim();
        }
      }
    }
  }
}`,...(i=(d=l.parameters)==null?void 0:d.docs)==null?void 0:i.source}}};var m,u,t;c.parameters={...c.parameters,docs:{...(m=c.parameters)==null?void 0:m.docs,source:{originalSource:'{\n  name: \'主題色彩\',\n  args: {\n    // themeColor: \'success\',\n    checkLabel: \'on\',\n    unCheckLabel: \'off\',\n    isDisabled: false,\n    className: \'\',\n    modelValue: true\n  },\n  render: args => ({\n    components: {\n      Toggle\n    },\n    setup() {\n      return {\n        args\n      };\n    },\n    template: `<div style="display:flex; gap: 16px">\n                <Toggle\n                    themeColor="primary"\n                    :checkLabel="args.checkLabel"\n                    :unCheckLabel="args.unCheckLabel"\n                    :isDisabled="args.isDisabled"\n                    :className="args.className"\n                    v-model="args.modelValue">\n                </Toggle>\n                <Toggle\n                    themeColor="secondary"\n                    :checkLabel="args.checkLabel"\n                    :unCheckLabel="args.unCheckLabel"\n                    :isDisabled="args.isDisabled"\n                    :className="args.className"\n                    v-model="args.modelValue">\n                </Toggle>\n                <Toggle\n                    themeColor="neutral"\n                    :checkLabel="args.checkLabel"\n                    :unCheckLabel="args.unCheckLabel"\n                    :isDisabled="args.isDisabled"\n                    :className="args.className"\n                    v-model="args.modelValue">\n                </Toggle>\n                <Toggle\n                    themeColor="info"\n                    :checkLabel="args.checkLabel"\n                    :unCheckLabel="args.unCheckLabel"\n                    :isDisabled="args.isDisabled"\n                    :className="args.className"\n                    v-model="args.modelValue">\n                </Toggle>\n                <Toggle\n                    themeColor="success"\n                    :checkLabel="args.checkLabel"\n                    :unCheckLabel="args.unCheckLabel"\n                    :isDisabled="args.isDisabled"\n                    :className="args.className"\n                    v-model="args.modelValue">\n                </Toggle>\n                <Toggle\n                    themeColor="warning"\n                    :checkLabel="args.checkLabel"\n                    :unCheckLabel="args.unCheckLabel"\n                    :isDisabled="args.isDisabled"\n                    :className="args.className"\n                    v-model="args.modelValue">\n                </Toggle>\n                <Toggle\n                    themeColor="error"\n                    :checkLabel="args.checkLabel"\n                    :unCheckLabel="args.unCheckLabel"\n                    :isDisabled="args.isDisabled"\n                    :className="args.className"\n                    v-model="args.modelValue">\n                </Toggle>\n            </div>\n            `\n  }),\n  // 控制 controls 中能控制的參數\n  parameters: {\n    controls: {\n      exclude: [\'themeColor\']\n    },\n    docs: {\n      source: {\n        transform: (src, storyContext) => {\n          const {\n            args\n          } = storyContext;\n          return [`<script setup>`, \'import { ref } from "vue";\', `import Toggle from "@/ui/element/Toggle/Toggle.vue";`, `const modelValue = ref(${args.modelValue});`, `<\/script>`, \'\', \'<template>\', \'  <Toggle\', `    themeColor="primary"`, `    ${args.checkLabel ? `checkLabel="${args.checkLabel}"` : ""}`, `    ${args.unCheckLabel ? `unCheckLabel="${args.unCheckLabel}"` : ""}`, `    ${args.isChecked !== undefined ? `:isChecked="${args.isChecked}"` : ""}`, `    ${args.isDisabled !== undefined ? `:isDisabled="${args.isDisabled}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, `    v-model="modelValue"`, \'  ></Toggle>\', \'  <Toggle\', `    themeColor="secondary"`, `    ${args.checkLabel ? `checkLabel="${args.checkLabel}"` : ""}`, `    ${args.unCheckLabel ? `unCheckLabel="${args.unCheckLabel}"` : ""}`, `    ${args.isChecked !== undefined ? `:isChecked="${args.isChecked}"` : ""}`, `    ${args.isDisabled !== undefined ? `:isDisabled="${args.isDisabled}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, `    v-model="modelValue"`, \'  ></Toggle>\', \'  <Toggle\', `    themeColor="neutral"`, `    ${args.checkLabel ? `checkLabel="${args.checkLabel}"` : ""}`, `    ${args.unCheckLabel ? `unCheckLabel="${args.unCheckLabel}"` : ""}`, `    ${args.isChecked !== undefined ? `:isChecked="${args.isChecked}"` : ""}`, `    ${args.isDisabled !== undefined ? `:isDisabled="${args.isDisabled}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, `    v-model="modelValue"`, \'  ></Toggle>\', \'  <Toggle\', `    themeColor="info"`, `    ${args.checkLabel ? `checkLabel="${args.checkLabel}"` : ""}`, `    ${args.unCheckLabel ? `unCheckLabel="${args.unCheckLabel}"` : ""}`, `    ${args.isChecked !== undefined ? `:isChecked="${args.isChecked}"` : ""}`, `    ${args.isDisabled !== undefined ? `:isDisabled="${args.isDisabled}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, `    v-model="modelValue"`, \'  ></Toggle>\', \'  <Toggle\', `    themeColor="success"`, `    ${args.checkLabel ? `checkLabel="${args.checkLabel}"` : ""}`, `    ${args.unCheckLabel ? `unCheckLabel="${args.unCheckLabel}"` : ""}`, `    ${args.isChecked !== undefined ? `:isChecked="${args.isChecked}"` : ""}`, `    ${args.isDisabled !== undefined ? `:isDisabled="${args.isDisabled}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, `    v-model="modelValue"`, \'  ></Toggle>\', \'  <Toggle\', `    themeColor="warning"`, `    ${args.checkLabel ? `checkLabel="${args.checkLabel}"` : ""}`, `    ${args.unCheckLabel ? `unCheckLabel="${args.unCheckLabel}"` : ""}`, `    ${args.isChecked !== undefined ? `:isChecked="${args.isChecked}"` : ""}`, `    ${args.isDisabled !== undefined ? `:isDisabled="${args.isDisabled}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, `    v-model="modelValue"`, \'  ></Toggle>\', \'  <Toggle\', `    themeColor="error"`, `    ${args.checkLabel ? `checkLabel="${args.checkLabel}"` : ""}`, `    ${args.unCheckLabel ? `unCheckLabel="${args.unCheckLabel}"` : ""}`, `    ${args.isChecked !== undefined ? `:isChecked="${args.isChecked}"` : ""}`, `    ${args.isDisabled !== undefined ? `:isDisabled="${args.isDisabled}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, `    v-model="modelValue"`, \'  ></Toggle>\', \'</template>\'].filter(Boolean).join(\'\\n\').trim();\n        }\n      }\n    }\n  }\n}',...(t=(u=c.parameters)==null?void 0:u.docs)==null?void 0:t.source}}};const v=["ToggleDefault","ToggleColor"];export{c as ToggleColor,l as ToggleDefault,v as __namedExportsOrder,N as default};

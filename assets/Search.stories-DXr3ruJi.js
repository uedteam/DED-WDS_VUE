import{p as g,u as f,c as S,b as d,e as D,o as b,f as $}from"./vue.esm-bundler-DDwqdenp.js";import{_ as N}from"./Button-d_mq_x9n.js";import{_ as v}from"./Input-CacIrQEz.js";import"./Icon-BF6y4SVm.js";import"./v4-CtRu48qb.js";const V={class:"ded-search"},i={__name:"Search",props:g({size:{type:String,default:"medium",validator:a=>["small","medium","large"].includes(a)},placeholder:{type:String,default:"Type something"},isDisabled:{type:Boolean,default:!1},className:{type:String,default:""}},{modelValue:{},modelModifiers:{}}),emits:["update:modelValue"],setup(a){const s=a,e=f(a,"modelValue");return(z,l)=>(b(),S("div",V,[d(v,{modelValue:e.value,"onUpdate:modelValue":l[0]||(l[0]=h=>e.value=h),type:"text",placeholder:s.placeholder,prefix:"SvgSearch",size:s.size,"is-disabled":s.isDisabled,"class-name":"ded-search-input"},null,8,["modelValue","placeholder","size","is-disabled"]),d(N,{variant:"filled",size:s.size,width:"fit","border-width":"1px",radius:"4px","is-disabled":s.isDisabled},{default:D(()=>l[1]||(l[1]=[$(" Search ")])),_:1},8,["size","is-disabled"])]))}};i.__docgenInfo={exportName:"default",displayName:"Search",description:"",tags:{},props:[{name:"size",type:{name:"string"},defaultValue:{func:!1,value:'"medium"'},values:["small","medium","large"]},{name:"placeholder",type:{name:"string"},defaultValue:{func:!1,value:'"Type something"'}},{name:"isDisabled",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"className",type:{name:"string"},defaultValue:{func:!1,value:'""'}}],sourceFiles:["/home/runner/work/DED-WDS_VUE/DED-WDS_VUE/libs/src/ui/element/Search/Search.vue"]};const w={title:"Component/Search",component:i,tags:["autodocs"],argTypes:{size:{description:"尺寸",control:{type:"select"},options:["small","medium","large"],table:{type:{summary:"small | medium | large "}}},placeholder:{description:"輸入提示",control:{type:"text"}},isDisabled:{description:"是否禁用",control:{type:"boolean"}},className:{description:"客製化樣式",control:{type:"text"}},modelValue:{description:"輸入值",control:{type:"text"},table:{type:{summary:"string"},category:"v-model"}}},parameters:{docs:{title:"Search",description:{component:"Search 組件的呈現及說明。"}}}},r={name:"預設項目",args:{size:"medium",placeholder:"Type something",isDisabled:!1,className:"",modelValue:""},render:a=>({components:{Search:i},setup(){return{args:a}},template:`
      <Search
        :size="args.size"
        :placeholder="args.placeholder"
        :isDisabled="args.isDisabled"
        :className="args.className"
        v-model="args.modelValue"
      ></Search>
        `}),parameters:{controls:{},docs:{source:{transform:(a,s)=>{const{args:e}=s;return["<script setup>",'import { ref } from "vue";','import { Search } from "@ded-wds-vue/ui";','const modelValue = ref("");',"<\/script>","","<template>","  <Search",`    ${e.size?`size="${e.size}"`:""}`,`    ${e.placeholder?`placeholder="${e.placeholder}"`:""}`,`    ${e.isDisabled!==void 0?`:isDisabled="${e.isDisabled}"`:""}`,`    ${e.className?`className="${e.className}"`:""}`,'    v-model="modelValue"',"  ></Search>","</template>"].filter(Boolean).join(`
`).trim()}}}}},o={name:"元件尺寸",args:{size:"",placeholder:"Type something",isDisabled:!1,className:"",modelValue:""},render:a=>({components:{Search:i},setup(){return{args:a}},template:`
      <div style="display: flex; flex-direction: column; gap: 10px">
        <Search
          :placeholder="args.placeholder"
          size="large"
          :isDisabled="args.isDisabled"
          :className="args.className"
          v-model="args.modelValue"
        ></Search>

        <Search
          :placeholder="args.placeholder"
          size="medium"
          :isDisabled="args.isDisabled"
          :className="args.className"
          v-model="args.modelValue"
        ></Search>

        <Search
          :placeholder="args.placeholder"
          size="small"
          :isDisabled="args.isDisabled"
          :className="args.className"
          v-model="args.modelValue"
        ></Search>
      </div>`}),parameters:{controls:{exclude:["size"]},docs:{source:{transform:(a,s)=>{const{args:e}=s;return["<script setup>",'import { ref } from "vue";','import { Search } from "@ded-wds-vue/ui";','const modelValue = ref("");',"<\/script>","","<template>","  <Search",'    size="large"',`    ${e.placeholder?`placeholder="${e.placeholder}"`:""}`,`    ${e.isDisabled!==void 0?`:isDisabled="${e.isDisabled}"`:""}`,`    ${e.className?`className="${e.className}"`:""}`,'    v-model="modelValue"',"  ></Search>","  <Search",'    size="medium"',`    ${e.placeholder?`placeholder="${e.placeholder}"`:""}`,`    ${e.isDisabled!==void 0?`:isDisabled="${e.isDisabled}"`:""}`,`    ${e.className?`className="${e.className}"`:""}`,'    v-model="modelValue"',"  ></Search>","  <Search",'    size="small"',`    ${e.placeholder?`placeholder="${e.placeholder}"`:""}`,`    ${e.isDisabled!==void 0?`:isDisabled="${e.isDisabled}"`:""}`,`    ${e.className?`className="${e.className}"`:""}`,'    v-model="modelValue"',"  ></Search>","</template>"].filter(Boolean).join(`
`).trim()}}}}};var n,c,t;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
  name: "預設項目",
  args: {
    // themeColor: 'primary',
    size: "medium",
    placeholder: "Type something",
    isDisabled: false,
    className: "",
    modelValue: ""
  },
  render: args => ({
    components: {
      Search
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <Search
        :size="args.size"
        :placeholder="args.placeholder"
        :isDisabled="args.isDisabled"
        :className="args.className"
        v-model="args.modelValue"
      ></Search>
        \`
  }),
  // 控制 controls 中能控制的參數
  parameters: {
    controls: {
      // include: ['variant', 'content', 'themeColor', 'isDisabled', 'prefix'],
    },
    docs: {
      source: {
        transform: (src, storyContext) => {
          const {
            args
          } = storyContext;
          return [\`<script setup>\`, "import { ref } from \\"vue\\";", \`import { Search } from "@ded-wds-vue/ui";\`, "const modelValue = ref(\\"\\");", \`<\/script>\`, "", "<template>", \`  <Search\`, \`    \${args.size ? \`size="\${args.size}"\` : ""}\`, \`    \${args.placeholder ? \`placeholder="\${args.placeholder}"\` : ""}\`, \`    \${args.isDisabled !== undefined ? \`:isDisabled="\${args.isDisabled}"\` : ""}\`, \`    \${args.className ? \`className="\${args.className}"\` : ""}\`, \`    v-model="modelValue"\`, \`  ></Search>\`, "</template>"].filter(Boolean).join("\\n").trim();
        }
      }
    }
  }
}`,...(t=(c=r.parameters)==null?void 0:c.docs)==null?void 0:t.source}}};var m,p,u;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:'{\n  name: "元件尺寸",\n  args: {\n    // themeColor: \'primary\',\n    size: "",\n    placeholder: "Type something",\n    isDisabled: false,\n    className: "",\n    modelValue: ""\n  },\n  render: args => ({\n    components: {\n      Search\n    },\n    setup() {\n      return {\n        args\n      };\n    },\n    template: `\n      <div style="display: flex; flex-direction: column; gap: 10px">\n        <Search\n          :placeholder="args.placeholder"\n          size="large"\n          :isDisabled="args.isDisabled"\n          :className="args.className"\n          v-model="args.modelValue"\n        ></Search>\n\n        <Search\n          :placeholder="args.placeholder"\n          size="medium"\n          :isDisabled="args.isDisabled"\n          :className="args.className"\n          v-model="args.modelValue"\n        ></Search>\n\n        <Search\n          :placeholder="args.placeholder"\n          size="small"\n          :isDisabled="args.isDisabled"\n          :className="args.className"\n          v-model="args.modelValue"\n        ></Search>\n      </div>`\n  }),\n  // 控制 controls 中能控制的參數\n  parameters: {\n    controls: {\n      exclude: ["size"]\n    },\n    docs: {\n      source: {\n        transform: (src, storyContext) => {\n          const {\n            args\n          } = storyContext;\n          return [`<script setup>`, "import { ref } from \\"vue\\";", `import { Search } from "@ded-wds-vue/ui";`, "const modelValue = ref(\\"\\");", `<\/script>`, "", "<template>", `  <Search`, `    size="large"`, `    ${args.placeholder ? `placeholder="${args.placeholder}"` : ""}`, `    ${args.isDisabled !== undefined ? `:isDisabled="${args.isDisabled}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, `    v-model="modelValue"`, `  ></Search>`, `  <Search`, `    size="medium"`, `    ${args.placeholder ? `placeholder="${args.placeholder}"` : ""}`, `    ${args.isDisabled !== undefined ? `:isDisabled="${args.isDisabled}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, `    v-model="modelValue"`, `  ></Search>`, `  <Search`, `    size="small"`, `    ${args.placeholder ? `placeholder="${args.placeholder}"` : ""}`, `    ${args.isDisabled !== undefined ? `:isDisabled="${args.isDisabled}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, `    v-model="modelValue"`, `  ></Search>`, "</template>"].filter(Boolean).join("\\n").trim();\n        }\n      }\n    }\n  }\n}',...(u=(p=o.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};const B=["SearchDefault","SearchSize"];export{r as SearchDefault,o as SearchSize,B as __namedExportsOrder,w as default};

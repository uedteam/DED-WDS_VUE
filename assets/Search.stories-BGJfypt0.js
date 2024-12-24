import{m as g,u as D,a as S,b as n,D as b,o as f,q as y,f as d}from"./vue.esm-bundler-D-gFHCZh.js";import{_ as $}from"./Input-JVEboDox.js";import{_ as z}from"./Button-00exNB20.js";import"./Icon-BhqjPbyE.js";import"./iframe-Bd5YQskO.js";import"../sb-preview/runtime.js";const v={class:"ded-search"},t={__name:"Search",props:g({themeColor:{type:String,validator:s=>["primary","secondary","neutral","info","success","warning","error"].includes(s)},placeholder:{type:String},size:{type:String,default:"medium",validator:s=>["small","medium","large"].includes(s)},isDisable:{type:Boolean,default:!1},customClass:{type:String,default:""}},{modelValue:{},modelModifiers:{}}),emits:["update:modelValue"],setup(s){const a=D(s,"modelValue"),e=s;return(x,r)=>(f(),S("div",v,[n($,{type:"text",placeholder:e.placeholder,prefix:"search",size:e.size,initValue:"",isDisable:e.isDisable,modelValue:a.value,"onUpdate:modelValue":r[0]||(r[0]=C=>a.value=C),className:"ded-search-input"},null,8,["placeholder","size","isDisable","modelValue"]),n(z,{themeColor:e.themeColor,variant:"filled",size:e.size,width:"fit",borderWidth:"1px",radius:"4px",isDisabled:e.isDisable},{default:b(()=>r[1]||(r[1]=[y(" Search ")])),_:1},8,["themeColor","size","isDisabled"])]))}};t.__docgenInfo={exportName:"default",displayName:"Search",description:"",tags:{},props:[{name:"themeColor",type:{name:"string"},values:["primary","secondary","neutral","info","success","warning","error"]},{name:"placeholder",type:{name:"string"}},{name:"size",type:{name:"string"},defaultValue:{func:!1,value:'"medium"'},values:["small","medium","large"]},{name:"isDisable",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"customClass",type:{name:"string"},defaultValue:{func:!1,value:'""'}}],sourceFiles:["/Users/auouser/Desktop/Work_Space/DED-WDS_VUE/libs/src/ui/element/Search/Search.vue"]};const B={title:"Component/Search",component:t,tags:["autodocs"],argTypes:{themeColor:{description:"主題顏色",control:{type:"select"},options:["primary","secondary","neutral","info","success","warning","error"],table:{type:{summary:"primary | secondary | neutral | info | success | warning | error"}}},placeholder:{description:"輸入提示",control:{type:"text"}},size:{description:"尺寸",control:{type:"select"},options:["small","medium","large"],table:{type:{summary:"small | medium | large "}}},isDisable:{description:"是否禁用",control:{type:"boolean"}},customClass:{description:"客製化樣式",control:{type:"text"}}},parameters:{docs:{title:"Search",description:{component:"Search 組件的呈現及說明。"}}}},l={name:"預設項目",args:{themeColor:"primary",placeholder:"Placeholder...",size:"medium",isDisable:!1,customClass:""},render:s=>({components:{Search:t},setup(){const a=d("");return{args:s,searchInputData:a}},template:`
            <Search
                :themeColor="args.themeColor"
                :placeholder="args.placeholder"
                :size="args.size"
                :isDisable="args.isDisable"
                :customClass="args.customClass"
                v-model="searchInputData"
            ></Search>
        `}),parameters:{controls:{},docs:{source:{transform:(s,a)=>{const{args:e}=a;return["<Search",`  themeColor="${e.themeColor}"`,`  placeholder="${e.placeholder}"`,`  size="${e.size}"`,`  :isDisable="${e.isDisable}"`,`  customClass="${e.customClass}"`,'  v-model="searchInputData"',"></Search>"].join(`
`).trim()}}}}},o={name:"搜尋尺寸",args:{themeColor:"primary",placeholder:"Placeholder...",size:"",isDisable:!1,customClass:""},render:s=>({components:{Search:t},setup(){const a=d("");return{args:s,searchInputData:a}},template:`
            <div style="display:flex; flex-direction: column; gap: 10px">
                <Search
                    :themeColor="args.themeColor"
                    :placeholder="args.placeholder"
                    size="small"
                    :isDisable="args.isDisable"
                    :customClass="args.customClass"
                    v-model="searchInputData"
                ></Search>
                <Search
                    :themeColor="args.themeColor"
                    :placeholder="args.placeholder"
                    size="medium"
                    :isDisable="args.isDisable"
                    :customClass="args.customClass"
                    v-model="searchInputData"
                ></Search>
                <Search
                    :themeColor="args.themeColor"
                    :placeholder="args.placeholder"
                    size="large"
                    :isDisable="args.isDisable"
                    :customClass="args.customClass"
                    v-model="searchInputData"
                ></Search>
            </div>
        `}),parameters:{controls:{},docs:{source:{transform:(s,a)=>{const{args:e}=a;return["<Search",`  :themeColor="${e.themeColor}"`,`  :placeholder="${e.placeholder}"`,'  size="small"',`  :isDisable="${e.isDisable}"`,`  :customClass="${e.customClass}"`,'  v-model="searchInputData"',"></Search>","<Search",`  :themeColor="${e.themeColor}"`,`  :placeholder="${e.placeholder}"`,'  size="medium"',`  :isDisable="${e.isDisable}"`,`  :customClass="${e.customClass}"`,'  v-model="searchInputData"',"></Search>","<Search",`  :themeColor="${e.themeColor}"`,`  :placeholder="${e.placeholder}"`,'  size="large"',`  :isDisable="${e.isDisable}"`,`  :customClass="${e.customClass}"`,'  v-model="searchInputData"',"></Search>"].join(`
`).trim()}}}}};var c,i,m;l.parameters={...l.parameters,docs:{...(c=l.parameters)==null?void 0:c.docs,source:{originalSource:`{
  name: "預設項目",
  args: {
    themeColor: 'primary',
    placeholder: 'Placeholder...',
    size: "medium",
    isDisable: false,
    customClass: ""
  },
  render: args => ({
    components: {
      Search
    },
    setup() {
      const searchInputData = ref("");
      return {
        args,
        searchInputData
      };
    },
    template: \`
            <Search
                :themeColor="args.themeColor"
                :placeholder="args.placeholder"
                :size="args.size"
                :isDisable="args.isDisable"
                :customClass="args.customClass"
                v-model="searchInputData"
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
          return [\`<Search\`, \`  themeColor="\${args.themeColor}"\`, \`  placeholder="\${args.placeholder}"\`, \`  size="\${args.size}"\`, \`  :isDisable="\${args.isDisable}"\`, \`  customClass="\${args.customClass}"\`, \`  v-model="searchInputData"\`, \`></Search>\`].join("\\n").trim();
        }
      }
    }
  }
}`,...(m=(i=l.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};var u,h,p;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
  name: "搜尋尺寸",
  args: {
    themeColor: 'primary',
    placeholder: 'Placeholder...',
    size: "",
    isDisable: false,
    customClass: ""
  },
  render: args => ({
    components: {
      Search
    },
    setup() {
      const searchInputData = ref("");
      return {
        args,
        searchInputData
      };
    },
    template: \`
            <div style="display:flex; flex-direction: column; gap: 10px">
                <Search
                    :themeColor="args.themeColor"
                    :placeholder="args.placeholder"
                    size="small"
                    :isDisable="args.isDisable"
                    :customClass="args.customClass"
                    v-model="searchInputData"
                ></Search>
                <Search
                    :themeColor="args.themeColor"
                    :placeholder="args.placeholder"
                    size="medium"
                    :isDisable="args.isDisable"
                    :customClass="args.customClass"
                    v-model="searchInputData"
                ></Search>
                <Search
                    :themeColor="args.themeColor"
                    :placeholder="args.placeholder"
                    size="large"
                    :isDisable="args.isDisable"
                    :customClass="args.customClass"
                    v-model="searchInputData"
                ></Search>
            </div>
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
          return [\`<Search\`, \`  :themeColor="\${args.themeColor}"\`, \`  :placeholder="\${args.placeholder}"\`, \`  size="small"\`, \`  :isDisable="\${args.isDisable}"\`, \`  :customClass="\${args.customClass}"\`, \`  v-model="searchInputData"\`, \`></Search>\`, \`<Search\`, \`  :themeColor="\${args.themeColor}"\`, \`  :placeholder="\${args.placeholder}"\`, \`  size="medium"\`, \`  :isDisable="\${args.isDisable}"\`, \`  :customClass="\${args.customClass}"\`, \`  v-model="searchInputData"\`, \`></Search>\`, \`<Search\`, \`  :themeColor="\${args.themeColor}"\`, \`  :placeholder="\${args.placeholder}"\`, \`  size="large"\`, \`  :isDisable="\${args.isDisable}"\`, \`  :customClass="\${args.customClass}"\`, \`  v-model="searchInputData"\`, \`></Search>\`].join("\\n").trim();
        }
      }
    }
  }
}`,...(p=(h=o.parameters)==null?void 0:h.docs)==null?void 0:p.source}}};const N=["SearchDefault","SearchSize"];export{l as SearchDefault,o as SearchSize,N as __namedExportsOrder,B as default};

import{m as g,u as S,c as D,b as i,d as b,o as f,f as N}from"./vue.esm-bundler-qCK_iSPY.js";import{_ as y}from"./Input-E2XOsohw.js";import{_ as z}from"./Button-BBJUKVar.js";import"./Icon-Dr0uxKWp.js";import"./iframe-Dp5wB7_x.js";import"../sb-preview/runtime.js";const v={class:"ded-search"},n={__name:"Search",props:g({size:{type:String,default:"medium",validator:a=>["small","medium","large"].includes(a)},placeholder:{type:String,default:"Type something"},isDisabled:{type:Boolean,default:!1},className:{type:String,default:""}},{modelValue:{},modelModifiers:{}}),emits:["update:modelValue"],setup(a){const s=S(a,"modelValue"),e=a;return(V,l)=>(f(),D("div",v,[i(y,{type:"text",placeholder:e.placeholder,prefix:"SvgSearch",size:e.size,isDisabled:e.isDisabled,modelValue:s.value,"onUpdate:modelValue":l[0]||(l[0]=h=>s.value=h),className:"ded-search-input"},null,8,["placeholder","size","isDisabled","modelValue"]),i(z,{variant:"filled",size:e.size,width:"fit",borderWidth:"1px",radius:"4px",isDisabled:e.isDisabled},{default:b(()=>l[1]||(l[1]=[N(" Search ")])),_:1},8,["size","isDisabled"])]))}};n.__docgenInfo={exportName:"default",displayName:"Search",description:"",tags:{},props:[{name:"size",type:{name:"string"},defaultValue:{func:!1,value:'"medium"'},values:["small","medium","large"]},{name:"placeholder",type:{name:"string"},defaultValue:{func:!1,value:'"Type something"'}},{name:"isDisabled",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"className",type:{name:"string"},defaultValue:{func:!1,value:'""'}}],sourceFiles:["/Users/auouser/Desktop/Work_Space/DED-WDS_VUE/libs/src/ui/element/Search/Search.vue"]};const A={title:"Component/Search",component:n,tags:["autodocs"],argTypes:{size:{description:"尺寸",control:{type:"select"},options:["small","medium","large"],table:{type:{summary:"small | medium | large "}}},placeholder:{description:"輸入提示",control:{type:"text"}},isDisabled:{description:"是否禁用",control:{type:"boolean"}},className:{description:"客製化樣式",control:{type:"text"}},modelValue:{description:"輸入值",control:{type:"text"},table:{type:{summary:"string"},category:"v-model"}}},parameters:{docs:{title:"Search",description:{component:"Search 組件的呈現及說明。"}}}},r={name:"預設項目",args:{size:"medium",placeholder:"Type something",isDisabled:!1,className:"",modelValue:""},render:a=>({components:{Search:n},setup(){return{args:a}},template:`
            <Search
                :size="args.size"
                :placeholder="args.placeholder"
                :isDisabled="args.isDisabled"
                :className="args.className"
                v-model="args.modelValue"
            ></Search>
        `}),parameters:{controls:{},docs:{source:{transform:(a,s)=>{const{args:e}=s;return["<Search",`  size="${e.size}"`,`  placeholder="${e.placeholder}"`,`  :isDisabled="${e.isDisabled}"`,`  className="${e.className}"`,'  v-model="modelValue"',"></Search>"].join(`
`).trim()}}}}},o={name:"元件尺寸",args:{size:"",placeholder:"Type something",isDisabled:!1,className:"",modelValue:""},render:a=>({components:{Search:n},setup(){return{args:a}},template:`
            <div style="display:flex; flex-direction: column; gap: 10px">
                <Search
                    :placeholder="args.placeholder"
                    size="large"
                    :isDisabled="args.isDisabled"
                    :className="args.className"
                    v-model="modelValue"
                ></Search>
                <Search
                    :placeholder="args.placeholder"
                    size="medium"
                    :isDisabled="args.isDisabled"
                    :className="args.className"
                    v-model="modelValue"
                ></Search>
                <Search
                    :placeholder="args.placeholder"
                    size="small"
                    :isDisabled="args.isDisabled"
                    :className="args.className"
                    v-model="modelValue"
                ></Search>
            </div>
        `}),parameters:{controls:{exclude:["size"]},docs:{source:{transform:(a,s)=>{const{args:e}=s;return["<Search",`  :placeholder="${e.placeholder}"`,'  size="large"',`  :isDisabled="${e.isDisabled}"`,`  :className="${e.className}"`,'  v-model="modelValue"',"></Search>","<Search",`  :placeholder="${e.placeholder}"`,'  size="medium"',`  :isDisabled="${e.isDisabled}"`,`  :className="${e.className}"`,'  v-model="modelValue"',"></Search>","<Search",`  :placeholder="${e.placeholder}"`,'  size="small"',`  :isDisabled="${e.isDisabled}"`,`  :className="${e.className}"`,'  v-model="modelValue"',"></Search>"].join(`
`).trim()}}}}};var c,d,m;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  name: "預設項目",
  args: {
    // themeColor: 'primary',
    size: "medium",
    placeholder: 'Type something',
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
          return [\`<Search\`,
          // \`  themeColor="\${args.themeColor}"\`,
          \`  size="\${args.size}"\`, \`  placeholder="\${args.placeholder}"\`, \`  :isDisabled="\${args.isDisabled}"\`, \`  className="\${args.className}"\`, \`  v-model="modelValue"\`, \`></Search>\`].join("\\n").trim();
        }
      }
    }
  }
}`,...(m=(d=r.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};var t,u,p;o.parameters={...o.parameters,docs:{...(t=o.parameters)==null?void 0:t.docs,source:{originalSource:`{
  name: "元件尺寸",
  args: {
    // themeColor: 'primary',
    size: "",
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
            <div style="display:flex; flex-direction: column; gap: 10px">
                <Search
                    :placeholder="args.placeholder"
                    size="large"
                    :isDisabled="args.isDisabled"
                    :className="args.className"
                    v-model="modelValue"
                ></Search>
                <Search
                    :placeholder="args.placeholder"
                    size="medium"
                    :isDisabled="args.isDisabled"
                    :className="args.className"
                    v-model="modelValue"
                ></Search>
                <Search
                    :placeholder="args.placeholder"
                    size="small"
                    :isDisabled="args.isDisabled"
                    :className="args.className"
                    v-model="modelValue"
                ></Search>
            </div>
        \`
  }),
  // 控制 controls 中能控制的參數
  parameters: {
    controls: {
      // include: ['variant', 'content', 'themeColor', 'isDisabled', 'prefix'],
      exclude: ['size']
    },
    docs: {
      source: {
        transform: (src, storyContext) => {
          const {
            args
          } = storyContext;
          return [\`<Search\`, \`  :placeholder="\${args.placeholder}"\`, \`  size="large"\`, \`  :isDisabled="\${args.isDisabled}"\`, \`  :className="\${args.className}"\`, \`  v-model="modelValue"\`, \`></Search>\`, \`<Search\`, \`  :placeholder="\${args.placeholder}"\`, \`  size="medium"\`, \`  :isDisabled="\${args.isDisabled}"\`, \`  :className="\${args.className}"\`, \`  v-model="modelValue"\`, \`></Search>\`, \`<Search\`, \`  :placeholder="\${args.placeholder}"\`, \`  size="small"\`, \`  :isDisabled="\${args.isDisabled}"\`, \`  :className="\${args.className}"\`, \`  v-model="modelValue"\`, \`></Search>\`].join("\\n").trim();
        }
      }
    }
  }
}`,...(p=(u=o.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};const F=["SearchDefault","SearchSize"];export{r as SearchDefault,o as SearchSize,F as __namedExportsOrder,A as default};

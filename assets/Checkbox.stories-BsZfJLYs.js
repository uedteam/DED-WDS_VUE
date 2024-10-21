import{_ as t}from"./Checkbox-CNBVIS_1.js";import{r as a}from"./vue.esm-bundler-Bm7qTojY.js";import"./Icon-0yHNpaiS.js";import"./iframe-DS6YppJf.js";import"../sb-preview/runtime.js";const C={title:"Design System/Checkbox",component:t,excludeStories:/.*Data$/,tags:["autodocs"],argTypes:{label:{description:"Checkbox 旁邊顯示的文字標籤",control:{type:"text"}},id:{description:"Checkbox 的唯一識別碼，並且與 label 的 for 屬性相連接",control:{type:"text"}},value:{description:"Checkbox 複選樣式選項的值",control:{type:"text"}},name:{description:"Checkbox 複選樣式選項的名稱",control:{type:"text"}},themeColor:{description:"Checkbox 主題顏色選擇",control:{type:"select"},options:["primary","secondary","tertiary","success","warning","error","info"]},customClass:{description:"客製化樣式",control:{type:"text"}}},parameters:{docs:{title:"複選框",description:{component:"複選框組件的呈現及說明。"}}}},e={name:"checkbox 單選樣式",args:{label:"我已閱讀並同意相關服務條款",id:"acceptTerms",name:"terms",themeColor:"primary"},render:c=>({components:{Checkbox:t},setup(){const s=a(!1);return{args:c,isCheckboxChecked:s}},template:`
            <Checkbox
                :label="args.label"
                :id="args.id"
                :name="args.name"
                :themeColor="args.themeColor"
                v-model="isCheckboxChecked"
            ></Checkbox>
            <br/>
            v-model value: {{isCheckboxChecked}}
        `}),parameters:{controls:{include:["label","id","name","themeColor"]}}};var o,r,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  name: "checkbox 單選樣式",
  args: {
    label: "我已閱讀並同意相關服務條款",
    id: "acceptTerms",
    name: "terms",
    themeColor: "primary"
  },
  render: args => ({
    components: {
      Checkbox
    },
    setup() {
      const isCheckboxChecked = ref(false);
      return {
        args,
        isCheckboxChecked
      };
    },
    template: \`
            <Checkbox
                :label="args.label"
                :id="args.id"
                :name="args.name"
                :themeColor="args.themeColor"
                v-model="isCheckboxChecked"
            ></Checkbox>
            <br/>
            v-model value: {{isCheckboxChecked}}
        \`
  }),
  // 控制 controls 中能控制的參數
  parameters: {
    controls: {
      include: ['label', 'id', 'name', 'themeColor']
    }
  }
}`,...(n=(r=e.parameters)==null?void 0:r.docs)==null?void 0:n.source}}};const d=["SingleCheckbox"];export{e as SingleCheckbox,d as __namedExportsOrder,C as default};

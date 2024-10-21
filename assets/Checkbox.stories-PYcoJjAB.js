import{_ as s}from"./Checkbox-C2Wthoxn.js";import{r as c}from"./vendor-M1HcLtCc.js";import"./Icon-Ch-G9Uph.js";const u={title:"Design System/Checkbox",component:s,excludeStories:/.*Data$/,tags:["autodocs"],argTypes:{label:{description:"文字標籤",control:{type:"text"}},id:{description:"對應 label 的 for",control:{type:"text"}},value:{description:"",control:{type:"text"}},name:{description:"",control:{type:"text"}},themeColor:{description:"主題顏色",control:{type:"select"},options:["primary","secondary","tertiary","success","warning","error","info"]},className:{description:"客製化樣式",control:{type:"text"}}},parameters:{docs:{title:"Checkbox",description:{component:"Checkbox 組件的呈現及說明。"}}}},e={name:"checkbox 單選樣式",args:{label:"我已閱讀並同意相關服務條款",id:"acceptTerms",name:"terms",themeColor:"primary",className:""},render:a=>({components:{Checkbox:s},setup(){const t=c(!1);return{args:a,isCheckboxChecked:t}},template:`
            <Checkbox
                :label="args.label"
                :id="args.id"
                :name="args.name"
                :themeColor="args.themeColor"
                v-model="isCheckboxChecked"
                :className="args.className"
            ></Checkbox>
            <br/>
            v-model value: {{isCheckboxChecked}}
        `}),parameters:{controls:{include:["label","id","name","themeColor","className"]}}};var o,r,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  name: "checkbox 單選樣式",
  args: {
    label: "我已閱讀並同意相關服務條款",
    id: "acceptTerms",
    name: "terms",
    themeColor: "primary",
    className: ""
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
                :className="args.className"
            ></Checkbox>
            <br/>
            v-model value: {{isCheckboxChecked}}
        \`
  }),
  // 控制 controls 中能控制的參數
  parameters: {
    controls: {
      include: ['label', 'id', 'name', 'themeColor', 'className']
    }
  }
}`,...(n=(r=e.parameters)==null?void 0:r.docs)==null?void 0:n.source}}};const d=["SingleCheckbox"];export{e as SingleCheckbox,d as __namedExportsOrder,u as default};

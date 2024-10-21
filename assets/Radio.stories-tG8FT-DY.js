import{_ as r}from"./Radio-BD1x-sR1.js";import{r as i}from"./vue.esm-bundler-Bm7qTojY.js";const m={title:"Design System/Radio",component:r,tags:["autodocs"],argTypes:{label:{description:"Radio 選項文字",control:{type:"text"}},value:{description:"Radio 的選項值 (表單)",control:{type:"text"}},name:{description:"用於分組的名稱 (表單)",control:{type:"text"}},themeColor:{description:"Radio 主題顏色",control:{type:"select"},options:["primary","secondary","tertiary","success","warning","error","info"]},modelValue:{description:"與 Radio 綁定的值，表示當前選中的選項",control:{type:"Object"}}},parameters:{docs:{title:"Radio",description:{component:"Radio 組件的呈現及說明。"}}}},e={name:"Radio 基礎樣式",args:{label:"Season 1",value:"s1",name:"seasons",themeColor:"primary"},render:t=>({components:{Radio:r},setup(){const s=i("");return{args:t,isRadioPicked:s}},template:`
            <Radio
                :value="args.value"
                :name="args.name"
                :label="args.label"
                :themeColor="args.themeColor"
                v-model="isRadioPicked"
            ></Radio>
            <p> modelValue: {{ isRadioPicked }} </p>
        `}),parameters:{controls:{exclude:["modelValue"]}}};var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  name: "Radio 基礎樣式",
  args: {
    label: "Season 1",
    value: "s1",
    name: "seasons",
    themeColor: "primary"
  },
  render: args => ({
    components: {
      Radio
    },
    setup() {
      // Create a ref for modelValue to be used with v-model
      const isRadioPicked = ref("");
      return {
        args,
        isRadioPicked
      };
    },
    template: \`
            <Radio
                :value="args.value"
                :name="args.name"
                :label="args.label"
                :themeColor="args.themeColor"
                v-model="isRadioPicked"
            ></Radio>
            <p> modelValue: {{ isRadioPicked }} </p>
        \`
  }),
  // 控制 controls 中能控制的參數
  parameters: {
    controls: {
      // include: ['themeColor', 'label', 'value', 'name' ],
      exclude: ['modelValue']
    }
  }
}`,...(n=(a=e.parameters)==null?void 0:a.docs)==null?void 0:n.source}}};const c=["RadioDefault"];export{e as RadioDefault,c as __namedExportsOrder,m as default};

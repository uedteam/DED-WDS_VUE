import{_ as t}from"./RadioItem-DPDG95i2.js";import{r as l}from"./vendor-CDUjWAn_.js";const d={title:"Design System/RadioItem",component:t,tags:["autodocs"],argTypes:{label:{description:"選項文字",control:{type:"text"}},value:{description:"選項值",control:{type:"text"}},name:{description:"用於分組的名稱",control:{type:"text"}},themeColor:{description:"主題顏色",control:{type:"select"},options:["primary","secondary","tertiary","success","warning","error","info"]},className:{description:"客製化樣式",control:{type:"text"}},modelValue:{description:"與 Radio 綁定的值，表示當前選中的選項",control:{type:"Object"}}},parameters:{docs:{title:"Radio",description:{component:"Radio 組件的呈現及說明。"}}}},e={name:"主要項目",args:{label:"Season 1",value:"s1",name:"seasons",themeColor:"primary"},render:r=>({components:{RadioItem:t},setup(){const s=l("");return{args:r,isRadioPicked:s}},template:`
            <RadioItem
                :value="args.value"
                :name="args.name"
                :label="args.label"
                :themeColor="args.themeColor"
                v-model="isRadioPicked"
            ></RadioItem>
            <p> modelValue: {{ isRadioPicked }} </p>
        `}),parameters:{controls:{exclude:["modelValue"]}}};var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  name: "主要項目",
  args: {
    label: "Season 1",
    value: "s1",
    name: "seasons",
    themeColor: "primary"
  },
  render: args => ({
    components: {
      RadioItem
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
            <RadioItem
                :value="args.value"
                :name="args.name"
                :label="args.label"
                :themeColor="args.themeColor"
                v-model="isRadioPicked"
            ></RadioItem>
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
}`,...(n=(a=e.parameters)==null?void 0:a.docs)==null?void 0:n.source}}};const c=["RadioDefault"];export{e as RadioDefault,c as __namedExportsOrder,d as default};

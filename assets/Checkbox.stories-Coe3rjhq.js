import{_ as s}from"./Checkbox-BwRC8HZS.js";import{r as p}from"./vue.esm-bundler-CwphvVzG.js";import"./Icon-BhrMxj58.js";import"./iframe-BqOtaKsG.js";import"../sb-preview/runtime.js";function b(a){return`[
    ${a.map(o=>`{
        label: '${o.label}',
        value: '${o.value}',
        isDisabled: '${o.isDisabled}'
    }`).join(`,
    `)}
  ]`}const k={title:"Component/Checkbox",component:s,tags:["autodocs"],argTypes:{dataSource:{description:"資料來源",control:{type:"object"},table:{type:{summary:"{ label: string; value: string; isDisabled: boolean; }[]"}}},initValue:{description:"選中的項目",control:{type:"object"},table:{type:{summary:"string[]"}}},direction:{description:"排列方向",control:{type:"select"},options:["row","column"],table:{type:{summary:"row | column"}}},size:{description:"尺寸",control:{type:"select"},options:["small","medium","large"],table:{type:{summary:"small | medium | large"}}},className:{description:"客製化樣式",control:{type:"text"}}},parameters:{docs:{title:"Checkbox",description:{component:"複選框組件的呈現及說明。"}}}},n={name:"預設項目",args:{dataSource:[{label:"Option1",value:"option1",isDisabled:!1},{label:"Option2",value:"option2",isDisabled:!1},{label:"Option3",value:"option3",isDisabled:!0}],initValue:["option1","option3"],direction:"row",size:"medium",className:""},render:a=>({components:{Checkbox:s},setup(){const o=p([]);return{args:a,checkedCheckboxOptions:o}},template:`
            <Checkbox
                :themeColor="args.themeColor"
                :dataSource="args.dataSource"
                :initValue="args.initValue"
                :direction="args.direction"
                :size="args.size"
                :className="args.className"
            ></Checkbox>
        `}),parameters:{controls:{},docs:{source:{transform:(a,o)=>{const{args:e}=o,r=b(e.dataSource);return["<Checkbox",`  themeColor="${e.themeColor}"`,`  :dataSource="${r}"`,`  :initValue="[${e.initValue}]"`,`  direction="${e.direction}"`,`  size="${e.size}"`,`  className="${e.className}"`,'  v-model="vModelData">',"</Checkbox>"].join(`
`).trim()}}}}},t={name:"排列方向",args:{dataSource:[{label:"Option1",value:"option4",isDisabled:!1},{label:"Option2",value:"option5",isDisabled:!1},{label:"Option3",value:"option6",isDisabled:!1}],initValue:["option4","option6"],direction:"row",size:"medium",className:""},render:a=>({components:{Checkbox:s},setup(){const o=p([]);return{args:a,checkedCheckboxOptions:o}},template:`
            <Checkbox
                :themeColor="args.themeColor"
                :dataSource="args.dataSource"
                :initValue="args.initValue"
                :direction="args.direction"
                :size="args.size"
                :className="args.className"
            ></Checkbox>
        `}),parameters:{controls:{},docs:{source:{transform:(a,o)=>{const{args:e}=o,r=b(e.dataSource);return["<Checkbox",`  themeColor="${e.themeColor}"`,`  :dataSource="${r}"`,`  :initValue="[${e.initValue}]"`,`  :direction="${e.direction}"`,`  size="${e.size}"`,`  className="${e.className}"`,'  v-model="vModelData">',"</Checkbox>"].join(`
`).trim()}}}}};var i,c,l;n.parameters={...n.parameters,docs:{...(i=n.parameters)==null?void 0:i.docs,source:{originalSource:`{
  name: "預設項目",
  args: {
    dataSource: [{
      "label": "Option1",
      "value": "option1",
      "isDisabled": false
    }, {
      "label": "Option2",
      "value": "option2",
      "isDisabled": false
    }, {
      "label": "Option3",
      "value": "option3",
      "isDisabled": true
    }],
    initValue: ["option1", "option3"],
    direction: "row",
    size: "medium",
    className: ""
  },
  render: args => ({
    components: {
      Checkbox
    },
    setup() {
      const checkedCheckboxOptions = ref([]);
      return {
        args,
        checkedCheckboxOptions
      };
    },
    template: \`
            <Checkbox
                :themeColor="args.themeColor"
                :dataSource="args.dataSource"
                :initValue="args.initValue"
                :direction="args.direction"
                :size="args.size"
                :className="args.className"
            ></Checkbox>
        \`
  }),
  // 控制 controls 中能控制的參數
  parameters: {
    controls: {
      // include: [ 'label', 'id', 'name', 'themeColor', 'className','datasource'],
    },
    docs: {
      source: {
        transform: (src, storyContext) => {
          const {
            args
          } = storyContext;
          const dataSourceString = formatDataSource(args.dataSource);
          return ['<Checkbox', \`  themeColor="\${args.themeColor}"\`, \`  :dataSource="\${dataSourceString}"\`, \`  :initValue="[\${args.initValue}]"\`, \`  direction="\${args.direction}"\`, \`  size="\${args.size}"\`, \`  className="\${args.className}"\`, '  v-model="vModelData">', '</Checkbox>'].join('\\n').trim();
        }
      }
    }
  }
}`,...(l=(c=n.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};var u,m,d;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  name: "排列方向",
  args: {
    dataSource: [{
      "label": "Option1",
      "value": "option4",
      "isDisabled": false
    }, {
      "label": "Option2",
      "value": "option5",
      "isDisabled": false
    }, {
      "label": "Option3",
      "value": "option6",
      "isDisabled": false
    }],
    initValue: ["option4", "option6"],
    direction: "row",
    size: "medium",
    className: ""
  },
  render: args => ({
    components: {
      Checkbox
    },
    setup() {
      const checkedCheckboxOptions = ref([]);
      return {
        args,
        checkedCheckboxOptions
      };
    },
    template: \`
            <Checkbox
                :themeColor="args.themeColor"
                :dataSource="args.dataSource"
                :initValue="args.initValue"
                :direction="args.direction"
                :size="args.size"
                :className="args.className"
            ></Checkbox>
        \`
  }),
  // 控制 controls 中能控制的參數
  parameters: {
    controls: {
      // include: [ 'label', 'id', 'name', 'themeColor', 'className','datasource'],
    },
    docs: {
      source: {
        transform: (src, storyContext) => {
          const {
            args
          } = storyContext;
          const dataSourceString = formatDataSource(args.dataSource);
          return ['<Checkbox', \`  themeColor="\${args.themeColor}"\`, \`  :dataSource="\${dataSourceString}"\`, \`  :initValue="[\${args.initValue}]"\`, \`  :direction="\${args.direction}"\`, \`  size="\${args.size}"\`, \`  className="\${args.className}"\`, '  v-model="vModelData">', '</Checkbox>'].join('\\n').trim();
        }
      }
    }
  }
}`,...(d=(m=t.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};const D=["CheckboxMultiStory","CheckboxDirection"];export{t as CheckboxDirection,n as CheckboxMultiStory,D as __namedExportsOrder,k as default};

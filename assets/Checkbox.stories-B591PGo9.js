import{_ as t}from"./Checkbox-CSLoqCFs.js";import{r as l}from"./vue.esm-bundler-CwphvVzG.js";import"./Icon-_T5UpMLV.js";import"./iframe-DHKiUVlE.js";import"../sb-preview/runtime.js";function u(o){return`[
    ${o.map(a=>`{
        label: '${a.label}',
        value: '${a.value}',
        isDisabled: '${a.isDisabled}'
    }`).join(`,
    `)}
  ]`}const O={title:"Component/Checkbox",component:t,tags:["autodocs"],argTypes:{dataSource:{description:"資料來源",control:{type:"object"},table:{type:{summary:"{ label: string; value: string; isDisabled: boolean; }[]"}}},initValue:{description:"選中的項目",control:{type:"object"},table:{type:{summary:"string[]"}}},direction:{description:"排列方向",control:{type:"select"},options:["row","column"],table:{type:{summary:"row | column"}}},size:{description:"尺寸",control:{type:"select"},options:["small","medium","large"],table:{type:{summary:"small | medium | large"}}},className:{description:"客製化樣式",control:{type:"text"}}},parameters:{docs:{title:"Checkbox",description:{component:"複選框組件的呈現及說明。"}}}},s={name:"預設項目",args:{dataSource:[{label:"Option1",value:"option1",isDisabled:!1},{label:"Option2",value:"option2",isDisabled:!1},{label:"Option3",value:"option3",isDisabled:!0}],initValue:["option1","option3"],direction:"row",size:"medium",className:""},render:o=>({components:{Checkbox:t},setup(){const a=l([]);return{args:o,checkedCheckboxOptions:a}},template:`
            <Checkbox
                :themeColor="args.themeColor"
                :dataSource="args.dataSource"
                :initValue="args.initValue"
                :direction="args.direction"
                :size="args.size"
                :className="args.className"
            ></Checkbox>
        `}),parameters:{controls:{},docs:{source:{transform:(o,a)=>{const{args:e}=a,n=u(e.dataSource);return["<Checkbox",`  themeColor="${e.themeColor}"`,`  :dataSource="${n}"`,`  :initValue="[${e.initValue}]"`,`  direction="${e.direction}"`,`  size="${e.size}"`,`  className="${e.className}"`,'  v-model="vModelData">',"</Checkbox>"].join(`
`).trim()}}}}},r={name:"垂直排列",args:{dataSource:[{label:"Option1",value:"option4",isDisabled:!1},{label:"Option2",value:"option5",isDisabled:!1},{label:"Option3",value:"option6",isDisabled:!1}],initValue:["option4","option6"],size:"medium",className:""},render:o=>({components:{Checkbox:t},setup(){const a=l([]);return{args:o,checkedCheckboxOptions:a}},template:`
            <Checkbox
                :dataSource="args.dataSource"
                :initValue="args.initValue"
                direction="column"
                :size="args.size"
                :className="args.className"
            ></Checkbox>
        `}),parameters:{controls:{exclude:["direction"]},docs:{source:{transform:(o,a)=>{const{args:e}=a;return["<Checkbox",`  :dataSource="${u(e.dataSource)}"`,`  :initValue="[${e.initValue}]"`,'  direction="column"',`  size="${e.size}"`,`  className="${e.className}"`,'  v-model="vModelData">',"</Checkbox>"].join(`
`).trim()}}}}},i={name:"水平排列",args:{dataSource:[{label:"Option1",value:"option7",isDisabled:!1},{label:"Option2",value:"option8",isDisabled:!1},{label:"Option3",value:"option9",isDisabled:!1}],initValue:["option7","option9"],size:"medium",className:""},render:o=>({components:{Checkbox:t},setup(){const a=l([]);return{args:o,checkedCheckboxOptions:a}},template:`
            <Checkbox
                :dataSource="args.dataSource"
                :initValue="args.initValue"
                direction="row"
                :size="args.size"
                :className="args.className"
            ></Checkbox>
        `}),parameters:{controls:{exclude:["direction"]},docs:{source:{transform:(o,a)=>{const{args:e}=a;return["<Checkbox",`  :dataSource="${u(e.dataSource)}"`,`  :initValue="[${e.initValue}]"`,'  direction="column"',`  size="${e.size}"`,`  className="${e.className}"`,'  v-model="vModelData">',"</Checkbox>"].join(`
`).trim()}}}}},c={name:"元件尺寸",args:{dataSource:[{label:"Option1",value:"option10",isDisabled:!1},{label:"Option2",value:"option11",isDisabled:!1},{label:"Option3",value:"option12",isDisabled:!0}],initValue:["option10","option12"],direction:"row",size:"medium",className:""},render:o=>({components:{Checkbox:t},setup(){const a=l([]);return{args:o,checkedCheckboxOptions:a}},template:`
            <div style="display:flex; flex-direction: column; gap: 24px">
                <Checkbox
                    :themeColor="args.themeColor"
                    :dataSource="args.dataSource"
                    :initValue="args.initValue"
                    :direction="args.direction"
                    size="large"
                    :className="args.className"
                ></Checkbox>
                <Checkbox
                    :themeColor="args.themeColor"
                    :dataSource="args.dataSource"
                    :initValue="args.initValue"
                    :direction="args.direction"
                    size="medium"
                    :className="args.className"
                ></Checkbox>
                <Checkbox
                    :themeColor="args.themeColor"
                    :dataSource="args.dataSource"
                    :initValue="args.initValue"
                    :direction="args.direction"
                    size="small"
                    :className="args.className"
                ></Checkbox>
            </div>
            
        `}),parameters:{controls:{exclude:["size"]},docs:{source:{transform:(o,a)=>{const{args:e}=a,n=u(e.dataSource);return["<Checkbox",`  themeColor="${e.themeColor}"`,`  :dataSource="${n}"`,`  :initValue="[${e.initValue}]"`,`  direction="${e.direction}"`,'  size="large"',`  className="${e.className}"`,'  v-model="vModelData">',"</Checkbox>","<Checkbox",`  themeColor="${e.themeColor}"`,`  :dataSource="${n}"`,`  :initValue="[${e.initValue}]"`,`  direction="${e.direction}"`,'  size="medium"',`  className="${e.className}"`,'  v-model="vModelData">',"</Checkbox>","<Checkbox",`  themeColor="${e.themeColor}"`,`  :dataSource="${n}"`,`  :initValue="[${e.initValue}]"`,`  direction="${e.direction}"`,'  size="small"',`  className="${e.className}"`,'  v-model="vModelData">',"</Checkbox>"].join(`
`).trim()}}}}};var d,m,p;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(p=(m=s.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var b,g,C;r.parameters={...r.parameters,docs:{...(b=r.parameters)==null?void 0:b.docs,source:{originalSource:`{
  name: "垂直排列",
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
    // direction: "column",
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
                :dataSource="args.dataSource"
                :initValue="args.initValue"
                direction="column"
                :size="args.size"
                :className="args.className"
            ></Checkbox>
        \`
  }),
  // 控制 controls 中能控制的參數
  parameters: {
    controls: {
      // include: [ 'label', 'id', 'name', 'themeColor', 'className','datasource'],
      exclude: ["direction"]
    },
    docs: {
      source: {
        transform: (src, storyContext) => {
          const {
            args
          } = storyContext;
          const dataSourceString = formatDataSource(args.dataSource);
          return ['<Checkbox', \`  :dataSource="\${dataSourceString}"\`, \`  :initValue="[\${args.initValue}]"\`, \`  direction="column"\`, \`  size="\${args.size}"\`, \`  className="\${args.className}"\`, '  v-model="vModelData">', '</Checkbox>'].join('\\n').trim();
        }
      }
    }
  }
}`,...(C=(g=r.parameters)==null?void 0:g.docs)==null?void 0:C.source}}};var h,x,S;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`{
  name: "水平排列",
  args: {
    dataSource: [{
      "label": "Option1",
      "value": "option7",
      "isDisabled": false
    }, {
      "label": "Option2",
      "value": "option8",
      "isDisabled": false
    }, {
      "label": "Option3",
      "value": "option9",
      "isDisabled": false
    }],
    initValue: ["option7", "option9"],
    // direction: "column",
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
                :dataSource="args.dataSource"
                :initValue="args.initValue"
                direction="row"
                :size="args.size"
                :className="args.className"
            ></Checkbox>
        \`
  }),
  // 控制 controls 中能控制的參數
  parameters: {
    controls: {
      // include: [ 'label', 'id', 'name', 'themeColor', 'className','datasource'],
      exclude: ["direction"]
    },
    docs: {
      source: {
        transform: (src, storyContext) => {
          const {
            args
          } = storyContext;
          const dataSourceString = formatDataSource(args.dataSource);
          return ['<Checkbox', \`  :dataSource="\${dataSourceString}"\`, \`  :initValue="[\${args.initValue}]"\`, \`  direction="column"\`, \`  size="\${args.size}"\`, \`  className="\${args.className}"\`, '  v-model="vModelData">', '</Checkbox>'].join('\\n').trim();
        }
      }
    }
  }
}`,...(S=(x=i.parameters)==null?void 0:x.docs)==null?void 0:S.source}}};var k,$,N;c.parameters={...c.parameters,docs:{...(k=c.parameters)==null?void 0:k.docs,source:{originalSource:`{
  name: "元件尺寸",
  args: {
    dataSource: [{
      "label": "Option1",
      "value": "option10",
      "isDisabled": false
    }, {
      "label": "Option2",
      "value": "option11",
      "isDisabled": false
    }, {
      "label": "Option3",
      "value": "option12",
      "isDisabled": true
    }],
    initValue: ["option10", "option12"],
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
            <div style="display:flex; flex-direction: column; gap: 24px">
                <Checkbox
                    :themeColor="args.themeColor"
                    :dataSource="args.dataSource"
                    :initValue="args.initValue"
                    :direction="args.direction"
                    size="large"
                    :className="args.className"
                ></Checkbox>
                <Checkbox
                    :themeColor="args.themeColor"
                    :dataSource="args.dataSource"
                    :initValue="args.initValue"
                    :direction="args.direction"
                    size="medium"
                    :className="args.className"
                ></Checkbox>
                <Checkbox
                    :themeColor="args.themeColor"
                    :dataSource="args.dataSource"
                    :initValue="args.initValue"
                    :direction="args.direction"
                    size="small"
                    :className="args.className"
                ></Checkbox>
            </div>
            
        \`
  }),
  // 控制 controls 中能控制的參數
  parameters: {
    controls: {
      // include: [ 'label', 'id', 'name', 'themeColor', 'className','datasource'],
      exclude: ["size"]
    },
    docs: {
      source: {
        transform: (src, storyContext) => {
          const {
            args
          } = storyContext;
          const dataSourceString = formatDataSource(args.dataSource);
          return ['<Checkbox', \`  themeColor="\${args.themeColor}"\`, \`  :dataSource="\${dataSourceString}"\`, \`  :initValue="[\${args.initValue}]"\`, \`  direction="\${args.direction}"\`, \`  size="large"\`, \`  className="\${args.className}"\`, '  v-model="vModelData">', '</Checkbox>', '<Checkbox', \`  themeColor="\${args.themeColor}"\`, \`  :dataSource="\${dataSourceString}"\`, \`  :initValue="[\${args.initValue}]"\`, \`  direction="\${args.direction}"\`, \`  size="medium"\`, \`  className="\${args.className}"\`, '  v-model="vModelData">', '</Checkbox>', '<Checkbox', \`  themeColor="\${args.themeColor}"\`, \`  :dataSource="\${dataSourceString}"\`, \`  :initValue="[\${args.initValue}]"\`, \`  direction="\${args.direction}"\`, \`  size="small"\`, \`  className="\${args.className}"\`, '  v-model="vModelData">', '</Checkbox>'].join('\\n').trim();
        }
      }
    }
  }
}`,...(N=($=c.parameters)==null?void 0:$.docs)==null?void 0:N.source}}};const y=["CheckboxMultiStory","CheckboxColumnDirection","CheckboxRowDirection","CheckboxSizeStory"];export{r as CheckboxColumnDirection,s as CheckboxMultiStory,i as CheckboxRowDirection,c as CheckboxSizeStory,y as __namedExportsOrder,O as default};

import{_ as s}from"./Checkbox-C8l1Hllx.js";import"./vue.esm-bundler-qCK_iSPY.js";import"./Icon-DK8hP1Y7.js";import"./iframe-BZcle8FH.js";import"../sb-preview/runtime.js";function i(a){return`[
    ${a.map(o=>`{
        label: '${o.label}',
        value: '${o.value}',
        isDisabled: '${o.isDisabled}'
    }`).join(`,
    `)}
  ]`}const V={title:"Component/Checkbox",component:s,tags:["autodocs"],argTypes:{dataSource:{description:"資料來源",control:{type:"object"},table:{type:{summary:"{ label: string; value: string; isDisabled: boolean; }[]"}}},direction:{description:"排列方向",control:{type:"select"},options:["row","column"],table:{type:{summary:"row | column"}}},size:{description:"尺寸",control:{type:"select"},options:["small","medium","large"],table:{type:{summary:"small | medium | large"}}},className:{description:"客製化樣式",control:{type:"text"}},modelValue:{description:"選中的項目",control:{type:"object"},table:{type:{summary:"string[]"},category:"v-model"}}},parameters:{docs:{title:"Checkbox",description:{component:"複選框組件的呈現及說明。"}}}},r={name:"預設項目",args:{dataSource:[{label:"Option1",value:"option1",isDisabled:!1},{label:"Option2",value:"option2",isDisabled:!1},{label:"Option3",value:"option3",isDisabled:!0}],direction:"row",size:"medium",className:"",modelValue:["option1","option3"]},render:a=>({components:{Checkbox:s},setup(){return{args:a}},template:`
            <Checkbox
                :dataSource="args.dataSource"
                :direction="args.direction"
                :size="args.size"
                :className="args.className"
                v-model="args.modelValue"
            ></Checkbox>
        `}),parameters:{controls:{},docs:{source:{transform:(a,o)=>{const{args:e}=o;return["<Checkbox",`  :dataSource="${i(e.dataSource)}"`,`  direction="${e.direction}"`,`  size="${e.size}"`,`  className="${e.className}"`,'  v-model="modelValue">',"</Checkbox>"].join(`
`).trim()}}}}},t={name:"垂直排列",args:{dataSource:[{label:"Option1",value:"option4",isDisabled:!1},{label:"Option2",value:"option5",isDisabled:!1},{label:"Option3",value:"option6",isDisabled:!1}],size:"medium",className:"",modelValue:["option4","option6"]},render:a=>({components:{Checkbox:s},setup(){return{args:a}},template:`
            <Checkbox
                :dataSource="args.dataSource"
                direction="column"
                :size="args.size"
                :className="args.className"
                v-model="args.modelValue"
            ></Checkbox>
        `}),parameters:{controls:{exclude:["direction"]},docs:{source:{transform:(a,o)=>{const{args:e}=o;return["<Checkbox",`  :dataSource="${i(e.dataSource)}"`,'  direction="column"',`  size="${e.size}"`,`  className="${e.className}"`,'  v-model="modelValue">',"</Checkbox>"].join(`
`).trim()}}}}},l={name:"水平排列",args:{dataSource:[{label:"Option1",value:"option7",isDisabled:!1},{label:"Option2",value:"option8",isDisabled:!1},{label:"Option3",value:"option9",isDisabled:!1}],size:"medium",className:"",modelValue:["option7","option9"]},render:a=>({components:{Checkbox:s},setup(){return{args:a}},template:`
            <Checkbox
                :dataSource="args.dataSource"
                direction="row"
                :size="args.size"
                :className="args.className"
                v-model="args.modelValue"
            ></Checkbox>
        `}),parameters:{controls:{exclude:["direction"]},docs:{source:{transform:(a,o)=>{const{args:e}=o;return["<Checkbox",`  :dataSource="${i(e.dataSource)}"`,'  direction="column"',`  size="${e.size}"`,`  className="${e.className}"`,'  v-model="modelValue">',"</Checkbox>"].join(`
`).trim()}}}}},c={name:"元件尺寸",args:{dataSource:[{label:"Option1",value:"option10",isDisabled:!1},{label:"Option2",value:"option11",isDisabled:!1},{label:"Option3",value:"option12",isDisabled:!1}],direction:"row",size:"medium",className:"",modelValue:["option10","option12"]},render:a=>({components:{Checkbox:s},setup(){return{args:a}},template:`
            <div style="display:flex; flex-direction: column; gap: 24px">
                <Checkbox
                    :themeColor="args.themeColor"
                    :dataSource="args.dataSource"
                    :direction="args.direction"
                    size="large"
                    :className="args.className"
                    v-model="args.modelValue"
                ></Checkbox>
                <Checkbox
                    :themeColor="args.themeColor"
                    :dataSource="args.dataSource"
                    :direction="args.direction"
                    size="medium"
                    :className="args.className"
                    v-model="args.modelValue"
                ></Checkbox>
                <Checkbox
                    :themeColor="args.themeColor"
                    :dataSource="args.dataSource"
                    :direction="args.direction"
                    size="small"
                    :className="args.className"
                    v-model="args.modelValue"
                ></Checkbox>
            </div>
            
        `}),parameters:{controls:{exclude:["size"]},docs:{source:{transform:(a,o)=>{const{args:e}=o,n=i(e.dataSource);return["<Checkbox",`  themeColor="${e.themeColor}"`,`  :dataSource="${n}"`,`  direction="${e.direction}"`,'  size="large"',`  className="${e.className}"`,'  v-model="modelValue">',"</Checkbox>","<Checkbox",`  themeColor="${e.themeColor}"`,`  :dataSource="${n}"`,`  direction="${e.direction}"`,'  size="medium"',`  className="${e.className}"`,'  v-model="modelValue">',"</Checkbox>","<Checkbox",`  themeColor="${e.themeColor}"`,`  :dataSource="${n}"`,`  direction="${e.direction}"`,'  size="small"',`  className="${e.className}"`,'  v-model="modelValue">',"</Checkbox>"].join(`
`).trim()}}}}};var m,d,u;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
    direction: "row",
    size: "medium",
    className: "",
    modelValue: ["option1", "option3"]
  },
  render: args => ({
    components: {
      Checkbox
    },
    setup() {
      return {
        args
      };
    },
    template: \`
            <Checkbox
                :dataSource="args.dataSource"
                :direction="args.direction"
                :size="args.size"
                :className="args.className"
                v-model="args.modelValue"
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
          return ['<Checkbox', \`  :dataSource="\${dataSourceString}"\`, \`  direction="\${args.direction}"\`, \`  size="\${args.size}"\`, \`  className="\${args.className}"\`, '  v-model="modelValue">', '</Checkbox>'].join('\\n').trim();
        }
      }
    }
  }
}`,...(u=(d=r.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};var p,g,b;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
    // direction: "column",
    size: "medium",
    className: "",
    modelValue: ["option4", "option6"]
  },
  render: args => ({
    components: {
      Checkbox
    },
    setup() {
      return {
        args
      };
    },
    template: \`
            <Checkbox
                :dataSource="args.dataSource"
                direction="column"
                :size="args.size"
                :className="args.className"
                v-model="args.modelValue"
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
          return ['<Checkbox', \`  :dataSource="\${dataSourceString}"\`, \`  direction="column"\`, \`  size="\${args.size}"\`, \`  className="\${args.className}"\`, '  v-model="modelValue">', '</Checkbox>'].join('\\n').trim();
        }
      }
    }
  }
}`,...(b=(g=t.parameters)==null?void 0:g.docs)==null?void 0:b.source}}};var C,S,h;l.parameters={...l.parameters,docs:{...(C=l.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
    // direction: "column",
    size: "medium",
    className: "",
    modelValue: ["option7", "option9"]
  },
  render: args => ({
    components: {
      Checkbox
    },
    setup() {
      return {
        args
      };
    },
    template: \`
            <Checkbox
                :dataSource="args.dataSource"
                direction="row"
                :size="args.size"
                :className="args.className"
                v-model="args.modelValue"
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
          return ['<Checkbox', \`  :dataSource="\${dataSourceString}"\`, \`  direction="column"\`, \`  size="\${args.size}"\`, \`  className="\${args.className}"\`, '  v-model="modelValue">', '</Checkbox>'].join('\\n').trim();
        }
      }
    }
  }
}`,...(h=(S=l.parameters)==null?void 0:S.docs)==null?void 0:h.source}}};var x,k,N;c.parameters={...c.parameters,docs:{...(x=c.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
      "isDisabled": false
    }],
    direction: "row",
    size: "medium",
    className: "",
    modelValue: ["option10", "option12"]
  },
  render: args => ({
    components: {
      Checkbox
    },
    setup() {
      return {
        args
      };
    },
    template: \`
            <div style="display:flex; flex-direction: column; gap: 24px">
                <Checkbox
                    :themeColor="args.themeColor"
                    :dataSource="args.dataSource"
                    :direction="args.direction"
                    size="large"
                    :className="args.className"
                    v-model="args.modelValue"
                ></Checkbox>
                <Checkbox
                    :themeColor="args.themeColor"
                    :dataSource="args.dataSource"
                    :direction="args.direction"
                    size="medium"
                    :className="args.className"
                    v-model="args.modelValue"
                ></Checkbox>
                <Checkbox
                    :themeColor="args.themeColor"
                    :dataSource="args.dataSource"
                    :direction="args.direction"
                    size="small"
                    :className="args.className"
                    v-model="args.modelValue"
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
          return ['<Checkbox', \`  themeColor="\${args.themeColor}"\`, \`  :dataSource="\${dataSourceString}"\`, \`  direction="\${args.direction}"\`, \`  size="large"\`, \`  className="\${args.className}"\`, '  v-model="modelValue">', '</Checkbox>', '<Checkbox', \`  themeColor="\${args.themeColor}"\`, \`  :dataSource="\${dataSourceString}"\`, \`  direction="\${args.direction}"\`, \`  size="medium"\`, \`  className="\${args.className}"\`, '  v-model="modelValue">', '</Checkbox>', '<Checkbox', \`  themeColor="\${args.themeColor}"\`, \`  :dataSource="\${dataSourceString}"\`, \`  direction="\${args.direction}"\`, \`  size="small"\`, \`  className="\${args.className}"\`, '  v-model="modelValue">', '</Checkbox>'].join('\\n').trim();
        }
      }
    }
  }
}`,...(N=(k=c.parameters)==null?void 0:k.docs)==null?void 0:N.source}}};const y=["CheckboxMultiStory","CheckboxColumnDirection","CheckboxRowDirection","CheckboxSizeStory"];export{t as CheckboxColumnDirection,r as CheckboxMultiStory,l as CheckboxRowDirection,c as CheckboxSizeStory,y as __namedExportsOrder,V as default};

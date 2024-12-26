import{m as V,u as $,f as g,w as N,j as z,a as b,F as O,B as w,n as l,o as u,e as h,C as M,d as j,t as E}from"./vue.esm-bundler-D-gFHCZh.js";import{_}from"./Icon-Djohfq75.js";import"./iframe-CsAQBZYV.js";import"../sb-preview/runtime.js";const A=["for"],B=["id","name","value","checked","onChange"],p={__name:"Checkbox",props:V({dataSource:{type:Array,required:!0},initValue:{type:Array,required:!0},direction:{type:String,default:"row",validator:a=>["row","column"].includes(a)},size:{type:String,default:"medium",validator:a=>["small","medium","large"].includes(a)},className:{type:String,default:""}},{modelValue:{default:[]},modelModifiers:{}}),emits:["update:modelValue"],setup(a){const o=$(a,"modelValue"),e=a,r=t=>`checkbox-${t}`,s=g(e.dataSource.map(t=>e.initValue.includes(t.value)));N(o,t=>{s.value=e.dataSource.map(i=>t.includes(i.value))},{immediate:!0}),z(()=>{o.value=e.initValue});const D=(t,i)=>{s.value[i]=!s.value[i],s.value[i]?o.value=[...o.value,t.value]:o.value=o.value.filter(n=>n!==t.value)};return(t,i)=>(u(),b("div",{class:l({"ded-checkbox-container":!0,[`ded-checkbox-container-${a.direction}`]:a.direction,[a.className]:!!a.className})},[(u(!0),b(O,null,w(a.dataSource,(n,c)=>(u(),b("label",{key:n.value,for:r(n.value),class:l(["ded-checkbox",{"ded-checkbox-input-disabled":n.isDisabled,[`ded-text-${e.size}`]:e.size}])},[h("input",{class:"ded-checkbox-input",type:"checkbox",id:r(n.value),name:n.name,value:n.value,checked:s.value[c],onChange:F=>D(n,c)},null,40,B),h("div",{class:l(["ded-checkbox-icon",`ded-icon-${e.size}`,n.isDisabled?"ded-checkbox-icon-disabled":"",s.value[c]?"ded-checkbox-checked":"ded-checkbox-unchecked"])},[s.value[c]?(u(),M(_,{key:0,name:"check"})):j("",!0)],2),h("span",{class:l(["ded-checkbox-text",n.isDisabled?"ded-checkbox-text-disabled":""])},E(n.label),3)],10,A))),128))],2))}};p.__docgenInfo={exportName:"default",displayName:"Checkbox",description:"",tags:{},props:[{name:"dataSource",type:{name:"array"},required:!0},{name:"initValue",type:{name:"array"},required:!0},{name:"direction",type:{name:"string"},defaultValue:{func:!1,value:'"row"'},values:["row","column"]},{name:"size",type:{name:"string"},defaultValue:{func:!1,value:'"medium"'},values:["small","medium","large"]},{name:"className",type:{name:"string"},defaultValue:{func:!1,value:'""'}}],sourceFiles:["/Users/auouser/Desktop/Work_Space/DED-WDS_VUE/libs/src/ui/element/Checkbox/Checkbox.vue"]};function y(a){return`[
    ${a.map(o=>`{
        label: '${o.label}',
        value: '${o.value}',
        isDisabled: '${o.isDisabled}'
    }`).join(`,
    `)}
  ]`}const L={title:"Component/Checkbox",component:p,tags:["autodocs"],argTypes:{dataSource:{description:"資料來源",control:{type:"object"},table:{type:{summary:"{ label: string; value: string; isDisabled: boolean; }[]"}}},initValue:{description:"選中的項目",control:{type:"object"},table:{type:{summary:"string[]"}}},direction:{description:"排列方向",control:{type:"select"},options:["row","column"],table:{type:{summary:"row | column"}}},size:{description:"尺寸",control:{type:"select"},options:["small","medium","large"],table:{type:{summary:"small | medium | large"}}},className:{description:"客製化樣式",control:{type:"text"}}},parameters:{docs:{title:"Checkbox",description:{component:"Checkbox 組件的呈現及說明。"}}}},d={name:"預設項目",args:{dataSource:[{label:"Option1",value:"option1",isDisabled:!1},{label:"Option2",value:"option2",isDisabled:!1},{label:"Option3",value:"option3",isDisabled:!0}],initValue:["option1","option3"],direction:"row",size:"medium",className:""},render:a=>({components:{Checkbox:p},setup(){const o=g([]);return{args:a,checkedCheckboxOptions:o}},template:`
            <Checkbox
                :themeColor="args.themeColor"
                :dataSource="args.dataSource"
                :initValue="args.initValue"
                :direction="args.direction"
                :size="args.size"
                :className="args.className"
            ></Checkbox>
        `}),parameters:{controls:{},docs:{source:{transform:(a,o)=>{const{args:e}=o,r=y(e.dataSource);return["<Checkbox",`  themeColor="${e.themeColor}"`,`  :dataSource="${r}"`,`  :initValue="[${e.initValue}]"`,`  direction="${e.direction}"`,`  size="${e.size}"`,`  className="${e.className}"`,'  v-model="vModelData">',"</Checkbox>"].join(`
`).trim()}}}}},m={name:"排列方向",args:{dataSource:[{label:"Option1",value:"option4",isDisabled:!1},{label:"Option2",value:"option5",isDisabled:!1},{label:"Option3",value:"option6",isDisabled:!1}],initValue:["option4","option6"],direction:"row",size:"medium",className:""},render:a=>({components:{Checkbox:p},setup(){const o=g([]);return{args:a,checkedCheckboxOptions:o}},template:`
            <Checkbox
                :themeColor="args.themeColor"
                :dataSource="args.dataSource"
                :initValue="args.initValue"
                :direction="args.direction"
                :size="args.size"
                :className="args.className"
            ></Checkbox>
        `}),parameters:{controls:{},docs:{source:{transform:(a,o)=>{const{args:e}=o,r=y(e.dataSource);return["<Checkbox",`  themeColor="${e.themeColor}"`,`  :dataSource="${r}"`,`  :initValue="[${e.initValue}]"`,`  :direction="${e.direction}"`,`  size="${e.size}"`,`  className="${e.className}"`,'  v-model="vModelData">',"</Checkbox>"].join(`
`).trim()}}}}};var k,C,x;d.parameters={...d.parameters,docs:{...(k=d.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...(x=(C=d.parameters)==null?void 0:C.docs)==null?void 0:x.source}}};var v,S,f;m.parameters={...m.parameters,docs:{...(v=m.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(f=(S=m.parameters)==null?void 0:S.docs)==null?void 0:f.source}}};const T=["CheckboxMultiStory","CheckboxDirection"];export{m as CheckboxDirection,d as CheckboxMultiStory,T as __namedExportsOrder,L as default};

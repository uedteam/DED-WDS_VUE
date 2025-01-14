import{m as N,u as $,w as x,c as u,F as C,C as O,n as s,o as c,j as h,O as w,a as m,t as _,h as y}from"./vue.esm-bundler-C8tbd0VY.js";const k=["value","name","checked"],d={__name:"Radio",props:N({dataSource:{type:Array,required:!0},direction:{type:String,default:"row",validator:n=>["row","column"].includes(n)},initValue:{type:String,required:!0},size:{type:String,default:"medium",validator:n=>["small","medium","large"].includes(n)},className:{type:String,default:""}},{modelValue:{},modelModifiers:{}}),emits:["update:modelValue"],setup(n){const a=$(n,"modelValue"),e=n;x(()=>e.initValue,i=>{a.value=i},{immediate:!0});const t=i=>a.value===i;return(i,p)=>(c(),u("div",{class:s({"ded-radio-container":!0,[`ded-radio-container-${e.direction}`]:e.direction,[e.className]:!!e.className})},[(c(!0),u(C,null,O(e.dataSource,(o,R)=>(c(),u("label",{key:R,class:s(["ded-radio",{"ded-radio-input-disabled":o.isDisabled,[`ded-text-${e.size}`]:e.size}])},[h(m("input",{class:"ded-radio-input",type:"radio",value:o.value,name:o.name,checked:t(o.value),"onUpdate:modelValue":p[0]||(p[0]=z=>a.value=z)},null,8,k),[[w,a.value]]),m("div",{class:s({"ded-radio-icon":!0,[`ded-icon-${e.size}`]:e.size,"ded-radio-icon-disabled":o.isDisabled,"ded-radio-checked":t(o.value),"ded-radio-unchecked":!t(o.value)})},null,2),m("span",{class:s(["ded-radio-text",o.isDisabled?"ded-radio-text-disabled":""])},_(o.label),3)],2))),128))],2))}};d.__docgenInfo={exportName:"default",displayName:"Radio",description:"",tags:{},props:[{name:"dataSource",type:{name:"array"},required:!0},{name:"direction",type:{name:"string"},defaultValue:{func:!1,value:'"row"'},values:["row","column"]},{name:"initValue",type:{name:"string"},required:!0},{name:"size",type:{name:"string"},defaultValue:{func:!1,value:'"medium"'},values:["small","medium","large"]},{name:"className",type:{name:"string"},defaultValue:{func:!1,value:'""'}}],sourceFiles:["D:/98_測試/up/DED-WDS_VUE/libs/src/ui/element/Radio/Radio.vue"]};function D(n){return`[
    ${n.map(a=>`{
        label: '${a.label}',
        value: '${a.value}'
        isDisabled: '${a.isDisabled}'
    }`).join(`,
    `)}
  ]`}const j={title:"Component/Radio",component:d,tags:["autodocs"],argTypes:{dataSource:{description:"資料來源",control:{type:"object"},table:{type:{summary:"{ label: string; value: string; isDisabled: boolean; }[]"}}},direction:{description:"排列方向",control:{type:"select"},options:["row","column"],table:{type:{summary:"row | column"}}},initValue:{description:"預設值",control:{type:"text"}},size:{description:"尺寸",control:{type:"select"},options:["small","medium","large"],table:{type:{summary:"small | medium | large "}}},className:{description:"客製化樣式",control:{type:"text"}}},parameters:{docs:{title:"Radio",description:{component:"Radio 組件的呈現及說明。"}}}},r={name:"預設項目",args:{dataSource:[{label:"Option1",value:"option1",isDisabled:!1},{label:"Option2",value:"option2",isDisabled:!1},{label:"Option3",value:"option3",isDisabled:!0}],direction:"row",initValue:"option1",size:"medium",className:""},render:n=>({components:{Radio:d},setup(){const a=y("");return{args:n,modelValue:a}},template:`
            <Radio
                :dataSource="args.dataSource"
                :direction="args.direction"
                :initValue="args.initValue"
                :size="args.size"
                :className="args.className"
                v-model="modelValue">
            </Radio>
        `}),parameters:{controls:{expanded:!0},docs:{source:{transform:(n,a)=>{const{args:e}=a;return["<Radio",`  :dataSource="${D(e.dataSource)}"`,`  direction="${e.direction}"`,`  initValue="${e.initValue}"`,`  size="${e.size}"`,`  className="${e.className}"`,'  v-model="modelValue"',"></Radio>"].join(`
`).trim()}}}}},l={name:"直向排列",args:{dataSource:[{label:"Option1",value:"option1",isDisabled:!1},{label:"Option2",value:"option2",isDisabled:!1},{label:"Option3",value:"option3",isDisabled:!0}],direction:"column",initValue:"option1",size:"medium",className:""},render:n=>({components:{Radio:d},setup(){const a=y("");return{args:n,modelValue:a}},template:`
            <Radio
                :dataSource="args.dataSource"
                :direction="args.direction"
                :initValue="args.initValue"
                :size="args.size"
                :className="args.className"
                v-model="modelValue">
            </Radio>
        `}),parameters:{controls:{expanded:!0},docs:{source:{transform:(n,a)=>{const{args:e}=a;return["<Radio",`  :dataSource="${D(e.dataSource)}"`,`  direction="${e.direction}"`,`  initValue="${e.initValue}"`,`  size="${e.size}"`,`  className="${e.className}"`,'  v-model="modelValue"',"></Radio>"].join(`
`).trim()}}}}};var g,S,V;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`{
  name: "預設項目",
  args: {
    // themeColor: 'primary',
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
    initValue: "option1",
    size: "medium",
    className: ""
  },
  render: args => ({
    components: {
      Radio
    },
    setup() {
      const modelValue = ref("");
      return {
        args,
        modelValue
      };
    },
    template: \`
            <Radio
                :dataSource="args.dataSource"
                :direction="args.direction"
                :initValue="args.initValue"
                :size="args.size"
                :className="args.className"
                v-model="modelValue">
            </Radio>
        \`
  }),
  // 控制 controls 中能控制的參數
  parameters: {
    controls: {
      expanded: true
      // include: ['themeColor', 'label', 'value', 'name' ],
    },
    docs: {
      source: {
        transform: (src, storyContext) => {
          const {
            args
          } = storyContext;
          const dataSourceString = formatDataSource(args.dataSource);
          return ['<Radio', \`  :dataSource="\${dataSourceString}"\`, \`  direction="\${args.direction}"\`, \`  initValue="\${args.initValue}"\`, \`  size="\${args.size}"\`, \`  className="\${args.className}"\`, \`  v-model="modelValue"\`, '></Radio>'].join('\\n').trim();
        }
      }
    }
  }
}`,...(V=(S=r.parameters)==null?void 0:S.docs)==null?void 0:V.source}}};var v,b,f;l.parameters={...l.parameters,docs:{...(v=l.parameters)==null?void 0:v.docs,source:{originalSource:`{
  name: "直向排列",
  args: {
    // themeColor: 'primary',
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
    direction: "column",
    initValue: "option1",
    size: "medium",
    className: ""
  },
  render: args => ({
    components: {
      Radio
    },
    setup() {
      const modelValue = ref("");
      return {
        args,
        modelValue
      };
    },
    template: \`
            <Radio
                :dataSource="args.dataSource"
                :direction="args.direction"
                :initValue="args.initValue"
                :size="args.size"
                :className="args.className"
                v-model="modelValue">
            </Radio>
        \`
  }),
  // 控制 controls 中能控制的參數
  parameters: {
    controls: {
      expanded: true
      // include: ['themeColor', 'label', 'value', 'name' ],
    },
    docs: {
      source: {
        transform: (src, storyContext) => {
          const {
            args
          } = storyContext;
          const dataSourceString = formatDataSource(args.dataSource);
          return ['<Radio', \`  :dataSource="\${dataSourceString}"\`, \`  direction="\${args.direction}"\`, \`  initValue="\${args.initValue}"\`, \`  size="\${args.size}"\`, \`  className="\${args.className}"\`, \`  v-model="modelValue"\`, '></Radio>'].join('\\n').trim();
        }
      }
    }
  }
}`,...(f=(b=l.parameters)==null?void 0:b.docs)==null?void 0:f.source}}};const A=["RadioDefaultStory","RadioVertical"];export{r as RadioDefaultStory,l as RadioVertical,A as __namedExportsOrder,j as default};

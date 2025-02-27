import{m as E,u as h,c as m,F as j,j as A,n as i,o as p,l as _,K as F,a as g,t as k}from"./vue.esm-bundler-Suj5BAdg.js";const B=["value","name"],r={__name:"Radio",props:E({dataSource:{type:Array,required:!0},direction:{type:String,default:"row",validator:a=>["row","column"].includes(a)},size:{type:String,default:"medium",validator:a=>["small","medium","large"].includes(a)},className:{type:String,default:""}},{modelValue:{},modelModifiers:{}}),emits:["update:modelValue"],setup(a){const o=h(a,"modelValue"),e=a;return(n,S)=>(p(),m("div",{class:i({"ded-radio-container":!0,[`ded-radio-container-${e.direction}`]:e.direction,[e.className]:!!e.className})},[(p(!0),m(j,null,A(e.dataSource,(s,C)=>(p(),m("label",{key:C,class:i(["ded-radio",{"ded-radio-input-disabled":s.isDisabled,[`ded-text-${e.size}`]:e.size}])},[_(g("input",{class:"ded-radio-input",type:"radio",value:s.value,name:s.name,"onUpdate:modelValue":S[0]||(S[0]=w=>o.value=w)},null,8,B),[[F,o.value]]),g("div",{class:i({"ded-radio-icon":!0,[`ded-icon-${e.size}`]:e.size,"ded-radio-icon-disabled":s.isDisabled,"ded-radio-checked":o.value===s.value,"ded-radio-unchecked":o.value!==s.value})},null,2),g("span",{class:i(["ded-radio-text",s.isDisabled?"ded-radio-text-disabled":""])},k(s.label),3)],2))),128))],2))}};r.__docgenInfo={exportName:"default",displayName:"Radio",description:"",tags:{},props:[{name:"dataSource",type:{name:"array"},required:!0},{name:"direction",type:{name:"string"},defaultValue:{func:!1,value:'"row"'},values:["row","column"]},{name:"size",type:{name:"string"},defaultValue:{func:!1,value:'"medium"'},values:["small","medium","large"]},{name:"className",type:{name:"string"},defaultValue:{func:!1,value:'""'}}],sourceFiles:["/Users/auouser/Desktop/Work_Space/DED-WDS_VUE/libs/src/ui/element/Radio/Radio.vue"]};function u(a){return`[
    ${a.map(o=>`{
        label: '${o.label}',
        value: '${o.value}',
        isDisabled: ${o.isDisabled}
    }`).join(`,
    `)}
  ]`}const U={title:"Component/Radio",component:r,tags:["autodocs"],argTypes:{dataSource:{description:"資料來源",control:{type:"object"},table:{type:{summary:"{ label: string; value: string; isDisabled: boolean; }[]"}}},direction:{description:"排列方向",control:{type:"select"},options:["row","column"],table:{type:{summary:"row | column"}}},size:{description:"尺寸",control:{type:"select"},options:["small","medium","large"],table:{type:{summary:"small | medium | large "}}},className:{description:"客製化樣式",control:{type:"text"}},modelValue:{description:"選中的項目",control:{type:"text"},table:{type:{summary:"string"},category:"v-model"}}},parameters:{docs:{title:"Radio",description:{component:"Radio 組件的呈現及說明。"}}}},t={name:"預設項目",args:{dataSource:[{label:"Option1",value:"option1",isDisabled:!1},{label:"Option2",value:"option2",isDisabled:!1},{label:"Option3",value:"option3",isDisabled:!0}],direction:"row",size:"medium",className:"",modelValue:"option1"},render:a=>({components:{Radio:r},setup(){return{args:a}},template:`
            <Radio
                :dataSource="args.dataSource"
                :direction="args.direction"
                :size="args.size"
                :className="args.className"
                v-model="args.modelValue">
            </Radio>
        `}),parameters:{controls:{},docs:{source:{transform:(a,o)=>{const{args:e}=o,n=u(e.dataSource);return["<script setup>",'import { ref } from "vue";','import Radio from "@/ui/element/Radio/Radio.vue";',`const modelValue = ref("${e.modelValue}");`,"<\/script>","","<template>","<Radio",`  ${n?`:dataSource="${n}"`:""}`,`  ${e.direction?`direction="${e.direction}"`:""}`,`  ${e.size?`size="${e.size}"`:""}`,`  ${e.className?`className="${e.className}"`:""}`,'  v-model="modelValue"',"></Radio>","</template>"].filter(Boolean).join(`
`).trim()}}}}},l={name:"垂直排列",args:{dataSource:[{label:"Option1",value:"option1",isDisabled:!1},{label:"Option2",value:"option2",isDisabled:!1},{label:"Option3",value:"option3",isDisabled:!1}],direction:"column",size:"medium",className:"",modelValue:"option1"},render:a=>({components:{Radio:r},setup(){return{args:a}},template:`
            <Radio
                :dataSource="args.dataSource"
                :direction="args.direction"
                :size="args.size"
                :className="args.className"
                v-model="args.modelValue">
            </Radio>
        `}),parameters:{controls:{expanded:!0,exclude:["direction"]},docs:{source:{transform:(a,o)=>{const{args:e}=o;return["<Radio",`  :dataSource="${u(e.dataSource)}"`,`  direction="${e.direction}"`,`  size="${e.size}"`,`  className="${e.className}"`,'  v-model="modelValue"',"></Radio>"].join(`
`).trim()}}}}},d={name:"水平排列",args:{dataSource:[{label:"Option1",value:"option1",isDisabled:!1},{label:"Option2",value:"option2",isDisabled:!1},{label:"Option3",value:"option3",isDisabled:!1}],direction:"row",size:"medium",className:"",modelValue:"option1"},render:a=>({components:{Radio:r},setup(){return{args:a}},template:`
            <Radio
                :dataSource="args.dataSource"
                :direction="args.direction"
                :size="args.size"
                :className="args.className"
                v-model="args.modelValue">
            </Radio>
        `}),parameters:{controls:{expanded:!0,exclude:["direction"]},docs:{source:{transform:(a,o)=>{const{args:e}=o;return["<Radio",`  :dataSource="${u(e.dataSource)}"`,`  direction="${e.direction}"`,`  size="${e.size}"`,`  className="${e.className}"`,'  v-model="modelValue"',"></Radio>"].join(`
`).trim()}}}}},c={name:"元件尺寸",args:{dataSource:[{label:"Option1",value:"option1",isDisabled:!1},{label:"Option2",value:"option2",isDisabled:!1},{label:"Option3",value:"option3",isDisabled:!1}],direction:"row",className:"",modelValue:"option1"},render:a=>({components:{Radio:r},setup(){return{args:a}},template:`
            <div style="display:flex; flex-direction: column; gap: 24px">
                <Radio
                    :dataSource="args.dataSource"
                    :direction="args.direction"
                    size="large"
                    :className="args.className"
                    v-model="args.modelValue">
                </Radio>
                <Radio
                    :dataSource="args.dataSource"
                    :direction="args.direction"
                    size="medium"
                    :className="args.className"
                    v-model="args.modelValue">
                </Radio>
                <Radio
                    :dataSource="args.dataSource"
                    :direction="args.direction"
                    size="small"
                    :className="args.className"
                    v-model="args.modelValue">
                </Radio>
            </div>
        `}),parameters:{controls:{expanded:!0,exclude:["size"]},docs:{source:{transform:(a,o)=>{const{args:e}=o,n=u(e.dataSource);return["<Radio",`  :dataSource="${n}"`,`  direction="${e.direction}"`,'  size="large"',`  className="${e.className}"`,'  v-model="modelValue"',"></Radio>","<Radio",`  :dataSource="${n}"`,`  direction="${e.direction}"`,'  size="medium"',`  className="${e.className}"`,'  v-model="modelValue"',"></Radio>","<Radio",`  :dataSource="${n}"`,`  direction="${e.direction}"`,'  size="small"',`  className="${e.className}"`,'  v-model="modelValue"',"></Radio>"].join(`
`).trim()}}}}};var v,R,b;t.parameters={...t.parameters,docs:{...(v=t.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
    size: "medium",
    className: "",
    modelValue: "option1"
  },
  render: args => ({
    components: {
      Radio
    },
    setup() {
      return {
        args
      };
    },
    template: \`
            <Radio
                :dataSource="args.dataSource"
                :direction="args.direction"
                :size="args.size"
                :className="args.className"
                v-model="args.modelValue">
            </Radio>
        \`
  }),
  // 控制 controls 中能控制的參數
  parameters: {
    controls: {
      // expanded: true,
      // include: ['themeColor', 'label', 'value', 'name' ],
    },
    docs: {
      source: {
        transform: (src, storyContext) => {
          const {
            args
          } = storyContext;
          const dataSourceString = formatDataSource(args.dataSource);
          return [\`<script setup>\`, \`import { ref } from "vue";\`, \`import Radio from "@/ui/element/Radio/Radio.vue";\`, \`const modelValue = ref("\${args.modelValue}");\`, \`<\/script>\`, '', '<template>', '<Radio', \`  \${dataSourceString ? \`:dataSource="\${dataSourceString}"\` : ""}\`, \`  \${args.direction ? \`direction="\${args.direction}"\` : ""}\`, \`  \${args.size ? \`size="\${args.size}"\` : ""}\`, \`  \${args.className ? \`className="\${args.className}"\` : ""}\`, \`  v-model="modelValue"\`, '></Radio>', '</template>'].filter(Boolean).join('\\n').trim();
        }
      }
    }
  }
}`,...(b=(R=t.parameters)==null?void 0:R.docs)==null?void 0:b.source}}};var f,N,$;l.parameters={...l.parameters,docs:{...(f=l.parameters)==null?void 0:f.docs,source:{originalSource:`{
  name: "垂直排列",
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
      "isDisabled": false
    }],
    direction: "column",
    size: "medium",
    className: "",
    modelValue: "option1"
  },
  render: args => ({
    components: {
      Radio
    },
    setup() {
      return {
        args
      };
    },
    template: \`
            <Radio
                :dataSource="args.dataSource"
                :direction="args.direction"
                :size="args.size"
                :className="args.className"
                v-model="args.modelValue">
            </Radio>
        \`
  }),
  // 控制 controls 中能控制的參數
  parameters: {
    controls: {
      expanded: true,
      // include: ['themeColor', 'label', 'value', 'name' ],
      exclude: ['direction']
    },
    docs: {
      source: {
        transform: (src, storyContext) => {
          const {
            args
          } = storyContext;
          const dataSourceString = formatDataSource(args.dataSource);
          return ['<Radio', \`  :dataSource="\${dataSourceString}"\`, \`  direction="\${args.direction}"\`, \`  size="\${args.size}"\`, \`  className="\${args.className}"\`, \`  v-model="modelValue"\`, '></Radio>'].join('\\n').trim();
        }
      }
    }
  }
}`,...($=(N=l.parameters)==null?void 0:N.docs)==null?void 0:$.source}}};var z,y,D;d.parameters={...d.parameters,docs:{...(z=d.parameters)==null?void 0:z.docs,source:{originalSource:`{
  name: "水平排列",
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
      "isDisabled": false
    }],
    direction: "row",
    size: "medium",
    className: "",
    modelValue: "option1"
  },
  render: args => ({
    components: {
      Radio
    },
    setup() {
      return {
        args
      };
    },
    template: \`
            <Radio
                :dataSource="args.dataSource"
                :direction="args.direction"
                :size="args.size"
                :className="args.className"
                v-model="args.modelValue">
            </Radio>
        \`
  }),
  // 控制 controls 中能控制的參數
  parameters: {
    controls: {
      expanded: true,
      // include: ['themeColor', 'label', 'value', 'name' ],
      exclude: ['direction']
    },
    docs: {
      source: {
        transform: (src, storyContext) => {
          const {
            args
          } = storyContext;
          const dataSourceString = formatDataSource(args.dataSource);
          return ['<Radio', \`  :dataSource="\${dataSourceString}"\`, \`  direction="\${args.direction}"\`, \`  size="\${args.size}"\`, \`  className="\${args.className}"\`, \`  v-model="modelValue"\`, '></Radio>'].join('\\n').trim();
        }
      }
    }
  }
}`,...(D=(y=d.parameters)==null?void 0:y.docs)==null?void 0:D.source}}};var V,x,O;c.parameters={...c.parameters,docs:{...(V=c.parameters)==null?void 0:V.docs,source:{originalSource:`{
  name: "元件尺寸",
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
      "isDisabled": false
    }],
    direction: "row",
    // size: "medium",
    className: "",
    modelValue: "option1"
  },
  render: args => ({
    components: {
      Radio
    },
    setup() {
      return {
        args
      };
    },
    template: \`
            <div style="display:flex; flex-direction: column; gap: 24px">
                <Radio
                    :dataSource="args.dataSource"
                    :direction="args.direction"
                    size="large"
                    :className="args.className"
                    v-model="args.modelValue">
                </Radio>
                <Radio
                    :dataSource="args.dataSource"
                    :direction="args.direction"
                    size="medium"
                    :className="args.className"
                    v-model="args.modelValue">
                </Radio>
                <Radio
                    :dataSource="args.dataSource"
                    :direction="args.direction"
                    size="small"
                    :className="args.className"
                    v-model="args.modelValue">
                </Radio>
            </div>
        \`
  }),
  // 控制 controls 中能控制的參數
  parameters: {
    controls: {
      expanded: true,
      // include: ['themeColor', 'label', 'value', 'name' ],
      exclude: ['size']
    },
    docs: {
      source: {
        transform: (src, storyContext) => {
          const {
            args
          } = storyContext;
          const dataSourceString = formatDataSource(args.dataSource);
          return ['<Radio', \`  :dataSource="\${dataSourceString}"\`, \`  direction="\${args.direction}"\`, \`  size="large"\`, \`  className="\${args.className}"\`, \`  v-model="modelValue"\`, '></Radio>', '<Radio', \`  :dataSource="\${dataSourceString}"\`, \`  direction="\${args.direction}"\`, \`  size="medium"\`, \`  className="\${args.className}"\`, \`  v-model="modelValue"\`, '></Radio>', '<Radio', \`  :dataSource="\${dataSourceString}"\`, \`  direction="\${args.direction}"\`, \`  size="small"\`, \`  className="\${args.className}"\`, \`  v-model="modelValue"\`, '></Radio>'].join('\\n').trim();
        }
      }
    }
  }
}`,...(O=(x=c.parameters)==null?void 0:x.docs)==null?void 0:O.source}}};const q=["RadioDefaultStory","RadioVerticalStory","RadioRowStory","RadioSizeStory"];export{t as RadioDefaultStory,d as RadioRowStory,c as RadioSizeStory,l as RadioVerticalStory,q as __namedExportsOrder,U as default};

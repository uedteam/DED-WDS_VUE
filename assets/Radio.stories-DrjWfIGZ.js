import{m as B,u as E,c as S,F as h,p as j,n as i,o as f,v as F,a as v,J as k,q as U,t as I}from"./vue.esm-bundler-DbMeO4i9.js";const M=["for"],q=["value","name","id"],t=Object.assign({inheritAttrs:!1},{__name:"Radio",props:B({dataSource:{type:Array,required:!0},direction:{type:String,default:"row",validator:a=>["row","column"].includes(a)},size:{type:String,default:"medium",validator:a=>["small","medium","large"].includes(a)},className:{type:String,default:""}},{modelValue:{},modelModifiers:{}}),emits:["update:modelValue"],setup(a){const r=crypto.randomUUID(),e=p=>`${r}-radio-${p}`,o=E(a,"modelValue"),s=a;return(p,R)=>(f(),S("div",{class:i({"ded-radio-container":!0,[`ded-radio-container-${s.direction}`]:s.direction,[s.className]:!!s.className})},[(f(!0),S(h,null,j(s.dataSource,(n,g)=>(f(),S("label",{key:g,class:i(["ded-radio",{"ded-radio-input-disabled":n.isDisabled,[`ded-text-${s.size}`]:s.size}]),for:e(g)},[F(v("input",U({class:"ded-radio-input",type:"radio",value:n.value,name:n.name,"onUpdate:modelValue":R[0]||(R[0]=A=>o.value=A),ref_for:!0},p.$attrs,{id:e(g)}),null,16,q),[[k,o.value]]),v("div",{class:i({"ded-radio-icon":!0,[`ded-icon-${s.size}`]:s.size,"ded-radio-icon-disabled":n.isDisabled,"ded-radio-checked":o.value===n.value,"ded-radio-unchecked":o.value!==n.value})},null,2),v("span",{class:i(["ded-radio-text",n.isDisabled?"ded-radio-text-disabled":""])},I(n.label),3)],10,M))),128))],2))}});t.__docgenInfo={exportName:"default",displayName:"Radio",description:"",tags:{},props:[{name:"dataSource",type:{name:"array"},required:!0},{name:"direction",type:{name:"string"},defaultValue:{func:!1,value:'"row"'},values:["row","column"]},{name:"size",type:{name:"string"},defaultValue:{func:!1,value:'"medium"'},values:["small","medium","large"]},{name:"className",type:{name:"string"},defaultValue:{func:!1,value:'""'}}],sourceFiles:["/Users/auouser/Desktop/Work_Space/DED-WDS_VUE/libs/src/ui/element/Radio/Radio.vue"]};function m(a){return`[
    ${a.map(r=>`{
        label: '${r.label}',
        value: '${r.value}',
        isDisabled: ${r.isDisabled}
    }`).join(`,
    `)}
  ]`}const J={title:"Component/Radio",component:t,tags:["autodocs"],argTypes:{dataSource:{description:"資料來源",control:{type:"object"},table:{type:{summary:"{ label: string; value: string; isDisabled: boolean; }[]"}}},direction:{description:"排列方向",control:{type:"select"},options:["row","column"],table:{type:{summary:"row | column"}}},size:{description:"尺寸",control:{type:"select"},options:["small","medium","large"],table:{type:{summary:"small | medium | large "}}},className:{description:"客製化樣式",control:{type:"text"}},modelValue:{description:"選中的項目",control:{type:"text"},table:{type:{summary:"string"},category:"v-model"}}},parameters:{docs:{title:"Radio",description:{component:"Radio 組件的呈現及說明。"}}}},l={name:"預設項目",args:{dataSource:[{label:"Option1",value:"option1",isDisabled:!1},{label:"Option2",value:"option2",isDisabled:!1},{label:"Option3",value:"option3",isDisabled:!0}],direction:"row",size:"medium",className:"",modelValue:"option1"},render:a=>({components:{Radio:t},setup(){return{args:a}},template:`
            <Radio
                :dataSource="args.dataSource"
                :direction="args.direction"
                :size="args.size"
                :className="args.className"
                v-model="args.modelValue">
            </Radio>
        `}),parameters:{controls:{},docs:{source:{transform:(a,r)=>{const{args:e}=r,o=m(e.dataSource);return["<script setup>",'import { ref } from "vue";','import { Radio } from "@ded-wds-vue/ui";',`const modelValue = ref("${e.modelValue}");`,"<\/script>","","<template>","<Radio",`  ${o?`:dataSource="${o}"`:""}`,`  ${e.direction?`direction="${e.direction}"`:""}`,`  ${e.size?`size="${e.size}"`:""}`,`  ${e.className?`className="${e.className}"`:""}`,'  v-model="modelValue"',"></Radio>","</template>"].filter(Boolean).join(`
`).trim()}}}}},d={name:"垂直排列",args:{dataSource:[{label:"Option1",value:"option1",isDisabled:!1},{label:"Option2",value:"option2",isDisabled:!1},{label:"Option3",value:"option3",isDisabled:!1}],direction:"column",size:"medium",className:"",modelValue:"option1"},render:a=>({components:{Radio:t},setup(){return{args:a}},template:`
            <Radio
                :dataSource="args.dataSource"
                :direction="args.direction"
                :size="args.size"
                :className="args.className"
                v-model="args.modelValue">
            </Radio>
        `}),parameters:{controls:{expanded:!0,exclude:["direction"]},docs:{source:{transform:(a,r)=>{const{args:e}=r,o=m(e.dataSource);return["<script setup>",'import { ref } from "vue";','import { Radio } from "@ded-wds-vue/ui";',`const modelValue = ref("${e.modelValue}");`,"<\/script>","","<template>","  <Radio",`    :dataSource="${o}"`,`    direction="${e.direction}"`,`    size="${e.size}"`,`    className="${e.className}"`,'    v-model="modelValue"',"  ></Radio>","</template>"].filter(Boolean).join(`
`).trim()}}}}},c={name:"水平排列",args:{dataSource:[{label:"Option1",value:"option1",isDisabled:!1},{label:"Option2",value:"option2",isDisabled:!1},{label:"Option3",value:"option3",isDisabled:!1}],direction:"row",size:"medium",className:"",modelValue:"option1"},render:a=>({components:{Radio:t},setup(){return{args:a}},template:`
            <Radio
                :dataSource="args.dataSource"
                :direction="args.direction"
                :size="args.size"
                :className="args.className"
                v-model="args.modelValue">
            </Radio>
        `}),parameters:{controls:{expanded:!0,exclude:["direction"]},docs:{source:{transform:(a,r)=>{const{args:e}=r,o=m(e.dataSource);return["<script setup>",'import { ref } from "vue";','import { Radio } from "@ded-wds-vue/ui";',`const modelValue = ref("${e.modelValue}");`,"<\/script>","","<template>","  <Radio",`    :dataSource="${o}"`,`    direction="${e.direction}"`,`    size="${e.size}"`,`    className="${e.className}"`,'    v-model="modelValue"',"  ></Radio>","</template>"].filter(Boolean).join(`
`).trim()}}}}},u={name:"元件尺寸",args:{dataSource:[{label:"Option1",value:"option1",isDisabled:!1},{label:"Option2",value:"option2",isDisabled:!1},{label:"Option3",value:"option3",isDisabled:!1}],direction:"row",className:"",modelValue:"option1"},render:a=>({components:{Radio:t},setup(){return{args:a}},template:`
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
        `}),parameters:{controls:{expanded:!0,exclude:["size"]},docs:{source:{transform:(a,r)=>{const{args:e}=r,o=m(e.dataSource);return["<script setup>",'import { ref } from "vue";','import { Radio } from "@ded-wds-vue/ui";',`const modelValue = ref("${e.modelValue}");`,"<\/script>","","<template>","  <Radio",`    :dataSource="${o}"`,`    direction="${e.direction}"`,'    size="large"',`    className="${e.className}"`,'    v-model="modelValue"',"  ></Radio>","  <Radio",`    :dataSource="${o}"`,`    direction="${e.direction}"`,'    size="medium"',`    className="${e.className}"`,'    v-model="modelValue"',"  ></Radio>","  <Radio",`    :dataSource="${o}"`,`    direction="${e.direction}"`,'    size="small"',`    className="${e.className}"`,'    v-model="modelValue"',"  ></Radio>","</template>"].filter(Boolean).join(`
`).trim()}}}}};var b,$,N;l.parameters={...l.parameters,docs:{...(b=l.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
          return [\`<script setup>\`, \`import { ref } from "vue";\`, \`import { Radio } from "@ded-wds-vue/ui";\`, \`const modelValue = ref("\${args.modelValue}");\`, \`<\/script>\`, '', '<template>', '<Radio', \`  \${dataSourceString ? \`:dataSource="\${dataSourceString}"\` : ""}\`, \`  \${args.direction ? \`direction="\${args.direction}"\` : ""}\`, \`  \${args.size ? \`size="\${args.size}"\` : ""}\`, \`  \${args.className ? \`className="\${args.className}"\` : ""}\`, \`  v-model="modelValue"\`, '></Radio>', '</template>'].filter(Boolean).join('\\n').trim();
        }
      }
    }
  }
}`,...(N=($=l.parameters)==null?void 0:$.docs)==null?void 0:N.source}}};var V,z,y;d.parameters={...d.parameters,docs:{...(V=d.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
          return [\`<script setup>\`, \`import { ref } from "vue";\`, \`import { Radio } from "@ded-wds-vue/ui";\`, \`const modelValue = ref("\${args.modelValue}");\`, \`<\/script>\`, '', '<template>', '  <Radio', \`    :dataSource="\${dataSourceString}"\`, \`    direction="\${args.direction}"\`, \`    size="\${args.size}"\`, \`    className="\${args.className}"\`, \`    v-model="modelValue"\`, '  ></Radio>', '</template>'].filter(Boolean).join('\\n').trim();
        }
      }
    }
  }
}`,...(y=(z=d.parameters)==null?void 0:z.docs)==null?void 0:y.source}}};var D,x,O;c.parameters={...c.parameters,docs:{...(D=c.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
      exclude: ['direction']
    },
    docs: {
      source: {
        transform: (src, storyContext) => {
          const {
            args
          } = storyContext;
          const dataSourceString = formatDataSource(args.dataSource);
          return [\`<script setup>\`, \`import { ref } from "vue";\`, \`import { Radio } from "@ded-wds-vue/ui";\`, \`const modelValue = ref("\${args.modelValue}");\`, \`<\/script>\`, '', '<template>', '  <Radio', \`    :dataSource="\${dataSourceString}"\`, \`    direction="\${args.direction}"\`, \`    size="\${args.size}"\`, \`    className="\${args.className}"\`, \`    v-model="modelValue"\`, '  ></Radio>', '</template>'].filter(Boolean).join('\\n').trim();
        }
      }
    }
  }
}`,...(O=(x=c.parameters)==null?void 0:x.docs)==null?void 0:O.source}}};var w,C,_;u.parameters={...u.parameters,docs:{...(w=u.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
      exclude: ['size']
    },
    docs: {
      source: {
        transform: (src, storyContext) => {
          const {
            args
          } = storyContext;
          const dataSourceString = formatDataSource(args.dataSource);
          return [\`<script setup>\`, \`import { ref } from "vue";\`, \`import { Radio } from "@ded-wds-vue/ui";\`, \`const modelValue = ref("\${args.modelValue}");\`, \`<\/script>\`, '', '<template>', '  <Radio', \`    :dataSource="\${dataSourceString}"\`, \`    direction="\${args.direction}"\`, \`    size="large"\`, \`    className="\${args.className}"\`, \`    v-model="modelValue"\`, '  ></Radio>', '  <Radio', \`    :dataSource="\${dataSourceString}"\`, \`    direction="\${args.direction}"\`, \`    size="medium"\`, \`    className="\${args.className}"\`, \`    v-model="modelValue"\`, '  ></Radio>', '  <Radio', \`    :dataSource="\${dataSourceString}"\`, \`    direction="\${args.direction}"\`, \`    size="small"\`, \`    className="\${args.className}"\`, \`    v-model="modelValue"\`, '  ></Radio>', '</template>'].filter(Boolean).join('\\n').trim();
        }
      }
    }
  }
}`,...(_=(C=u.parameters)==null?void 0:C.docs)==null?void 0:_.source}}};const L=["RadioDefaultStory","RadioVerticalStory","RadioRowStory","RadioSizeStory"];export{l as RadioDefaultStory,c as RadioRowStory,u as RadioSizeStory,d as RadioVerticalStory,L as __namedExportsOrder,J as default};

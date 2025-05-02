import{p as h,u as A,c as S,F as B,q as j,n as i,o as f,v as F,a as v,K as k,s as M,t as q}from"./vue.esm-bundler-CIcyrfsw.js";import{v as I}from"./v4-CtRu48qb.js";const U=["for"],W=["id","value","name"],n=Object.assign({inheritAttrs:!1},{__name:"Radio",props:h({dataSource:{type:Array,required:!0},direction:{type:String,default:"row",validator:o=>["row","column"].includes(o)},size:{type:String,default:"medium",validator:o=>["small","medium","large"].includes(o)},className:{type:String,default:""}},{modelValue:{},modelModifiers:{}}),emits:["update:modelValue"],setup(o){const a=o,e=I(),s=p=>`${e}-radio-${p}`,t=A(o,"modelValue");return(p,R)=>(f(),S("div",{class:i(["ded-radio-container",{[`ded-radio-container-${a.direction}`]:a.direction,[a.className]:!!a.className}])},[(f(!0),S(B,null,j(a.dataSource,(r,g)=>(f(),S("label",{key:g,class:i(["ded-radio",{"ded-radio-input-disabled":r.isDisabled,[`ded-text-${a.size}`]:a.size}]),for:s(g)},[F(v("input",M({ref_for:!0},p.$attrs,{id:s(g),"onUpdate:modelValue":R[0]||(R[0]=_=>t.value=_),class:"ded-radio-input",type:"radio",value:r.value,name:r.name}),null,16,W),[[k,t.value]]),v("div",{class:i(["ded-radio-icon",{[`ded-icon-${a.size}`]:a.size,"ded-radio-icon-disabled":r.isDisabled,"ded-radio-checked":t.value===r.value,"ded-radio-unchecked":t.value!==r.value}])},null,2),v("span",{class:i(["ded-radio-text",r.isDisabled?"ded-radio-text-disabled":""])},q(r.label),3)],10,U))),128))],2))}});n.__docgenInfo={exportName:"default",displayName:"Radio",description:"",tags:{},props:[{name:"dataSource",type:{name:"array"},required:!0},{name:"direction",type:{name:"string"},defaultValue:{func:!1,value:'"row"'},values:["row","column"]},{name:"size",type:{name:"string"},defaultValue:{func:!1,value:'"medium"'},values:["small","medium","large"]},{name:"className",type:{name:"string"},defaultValue:{func:!1,value:'""'}}],sourceFiles:["/home/runner/work/DED-WDS_VUE/DED-WDS_VUE/libs/src/ui/element/Radio/Radio.vue"]};function m(o){return`    ${o.map(a=>`{
        label: "${a.label}",
        value: "${a.value}",
        isDisabled: ${a.isDisabled}
    }`).join(`,
    `)}`}const P={title:"Component/Radio",component:n,tags:["autodocs"],argTypes:{dataSource:{description:"資料來源",control:{type:"object"},table:{type:{summary:"{ label: string; value: string; isDisabled: boolean; }[]"}}},direction:{description:"排列方向",control:{type:"select"},options:["row","column"],table:{type:{summary:"row | column"}}},size:{description:"尺寸",control:{type:"select"},options:["small","medium","large"],table:{type:{summary:"small | medium | large "}}},className:{description:"客製化樣式",control:{type:"text"}},modelValue:{description:"選中的項目",control:{type:"text"},table:{type:{summary:"string"},category:"v-model"}}},parameters:{docs:{title:"Radio",description:{component:"Radio 組件的呈現及說明。"}}}},d={name:"預設項目",args:{dataSource:[{label:"Option1",value:"option1",isDisabled:!1},{label:"Option2",value:"option2",isDisabled:!1},{label:"Option3",value:"option3",isDisabled:!0}],direction:"row",size:"medium",className:"",modelValue:"option1"},render:o=>({components:{Radio:n},setup(){return{args:o}},template:`
            <Radio
                :dataSource="args.dataSource"
                :direction="args.direction"
                :size="args.size"
                :className="args.className"
                v-model="args.modelValue">
            </Radio>
        `}),parameters:{controls:{},docs:{source:{transform:(o,a)=>{const{args:e}=a;return["<script setup>",'import { ref } from "vue";','import { Radio } from "@ded-wds-vue/ui";',"const dataSource = [",`${m(e.dataSource)}`,"];",`const modelValue = ref("${e.modelValue}");`,"<\/script>","","<template>","<Radio",'  :dataSource="dataSource"',`  ${e.direction?`direction="${e.direction}"`:""}`,`  ${e.size?`size="${e.size}"`:""}`,`  ${e.className?`className="${e.className}"`:""}`,'  v-model="modelValue"',"></Radio>","</template>"].filter(Boolean).join(`
`).trim()}}}}},l={name:"垂直排列",args:{dataSource:[{label:"Option1",value:"option1",isDisabled:!1},{label:"Option2",value:"option2",isDisabled:!1},{label:"Option3",value:"option3",isDisabled:!1}],direction:"column",size:"medium",className:"",modelValue:"option1"},render:o=>({components:{Radio:n},setup(){return{args:o}},template:`
            <Radio
                :dataSource="args.dataSource"
                :direction="args.direction"
                :size="args.size"
                :className="args.className"
                v-model="args.modelValue">
            </Radio>
        `}),parameters:{controls:{expanded:!0,exclude:["direction"]},docs:{source:{transform:(o,a)=>{const{args:e}=a;return["<script setup>",'import { ref } from "vue";','import { Radio } from "@ded-wds-vue/ui";',"const dataSource = [",`${m(e.dataSource)}`,"];",`const modelValue = ref("${e.modelValue}");`,"<\/script>","","<template>","  <Radio",'    :dataSource="dataSource"',`    direction="${e.direction}"`,`    size="${e.size}"`,`    className="${e.className}"`,'    v-model="modelValue"',"  ></Radio>","</template>"].filter(Boolean).join(`
`).trim()}}}}},c={name:"水平排列",args:{dataSource:[{label:"Option1",value:"option1",isDisabled:!1},{label:"Option2",value:"option2",isDisabled:!1},{label:"Option3",value:"option3",isDisabled:!1}],direction:"row",size:"medium",className:"",modelValue:"option1"},render:o=>({components:{Radio:n},setup(){return{args:o}},template:`
      <Radio
        :dataSource="args.dataSource"
        :direction="args.direction"
        :size="args.size"
        :className="args.className"
        v-model="args.modelValue">
      </Radio>`}),parameters:{controls:{expanded:!0,exclude:["direction"]},docs:{source:{transform:(o,a)=>{const{args:e}=a;return["<script setup>",'import { ref } from "vue";','import { Radio } from "@ded-wds-vue/ui";',"const dataSource = [",`${m(e.dataSource)}`,"];",`const modelValue = ref("${e.modelValue}");`,"<\/script>","","<template>","  <Radio",'    :dataSource="dataSource"',`    direction="${e.direction}"`,`    size="${e.size}"`,`    className="${e.className}"`,'    v-model="modelValue"',"  ></Radio>","</template>"].filter(Boolean).join(`
`).trim()}}}}},u={name:"元件尺寸",args:{dataSource:[{label:"Option1",value:"option1",isDisabled:!1},{label:"Option2",value:"option2",isDisabled:!1},{label:"Option3",value:"option3",isDisabled:!1}],direction:"row",className:"",modelValue:"option1"},render:o=>({components:{Radio:n},setup(){return{args:o}},template:`
      <div style="display: flex; flex-direction: column; gap: 24px">
        <Radio
          :dataSource="args.dataSource"
          :direction="args.direction"
          size="large"
          :className="args.className"
          v-model="args.modelValue"
        >
        </Radio>

        <Radio
          :dataSource="args.dataSource"
          :direction="args.direction"
          size="medium"
          :className="args.className"
          v-model="args.modelValue"
        >
        </Radio>

        <Radio
          :dataSource="args.dataSource"
          :direction="args.direction"
          size="small"
          :className="args.className"
          v-model="args.modelValue"
        >
        </Radio>
      </div>`}),parameters:{controls:{expanded:!0,exclude:["size"]},docs:{source:{transform:(o,a)=>{const{args:e}=a;return["<script setup>",'import { ref } from "vue";','import { Radio } from "@ded-wds-vue/ui";',"const dataSource = [",`${m(e.dataSource)}`,"];",`const modelValue = ref("${e.modelValue}");`,"<\/script>","","<template>","  <Radio",'    :dataSource="dataSource"',`    direction="${e.direction}"`,'    size="large"',`    className="${e.className}"`,'    v-model="modelValue"',"  ></Radio>","  <Radio",'    :dataSource="dataSource"',`    direction="${e.direction}"`,'    size="medium"',`    className="${e.className}"`,'    v-model="modelValue"',"  ></Radio>","  <Radio",'    :dataSource="dataSource"',`    direction="${e.direction}"`,'    size="small"',`    className="${e.className}"`,'    v-model="modelValue"',"  ></Radio>","</template>"].filter(Boolean).join(`
`).trim()}}}}};var b,N,V;d.parameters={...d.parameters,docs:{...(b=d.parameters)==null?void 0:b.docs,source:{originalSource:`{
  name: "預設項目",
  args: {
    // themeColor: 'primary',
    dataSource: [{
      label: "Option1",
      value: "option1",
      isDisabled: false
    }, {
      label: "Option2",
      value: "option2",
      isDisabled: false
    }, {
      label: "Option3",
      value: "option3",
      isDisabled: true
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
          return [\`<script setup>\`, \`import { ref } from "vue";\`, \`import { Radio } from "@ded-wds-vue/ui";\`, \`const dataSource = [\`, \`\${dataSourceString}\`, \`];\`, \`const modelValue = ref("\${args.modelValue}");\`, \`<\/script>\`, "", "<template>", "<Radio", \`  :dataSource="dataSource"\`, \`  \${args.direction ? \`direction="\${args.direction}"\` : ""}\`, \`  \${args.size ? \`size="\${args.size}"\` : ""}\`, \`  \${args.className ? \`className="\${args.className}"\` : ""}\`, \`  v-model="modelValue"\`, "></Radio>", "</template>"].filter(Boolean).join("\\n").trim();
        }
      }
    }
  }
}`,...(V=(N=d.parameters)==null?void 0:N.docs)==null?void 0:V.source}}};var $,z,D;l.parameters={...l.parameters,docs:{...($=l.parameters)==null?void 0:$.docs,source:{originalSource:`{
  name: "垂直排列",
  args: {
    // themeColor: 'primary',
    dataSource: [{
      label: "Option1",
      value: "option1",
      isDisabled: false
    }, {
      label: "Option2",
      value: "option2",
      isDisabled: false
    }, {
      label: "Option3",
      value: "option3",
      isDisabled: false
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
      exclude: ["direction"]
    },
    docs: {
      source: {
        transform: (src, storyContext) => {
          const {
            args
          } = storyContext;
          const dataSourceString = formatDataSource(args.dataSource);
          return [\`<script setup>\`, \`import { ref } from "vue";\`, \`import { Radio } from "@ded-wds-vue/ui";\`, \`const dataSource = [\`, \`\${dataSourceString}\`, \`];\`, \`const modelValue = ref("\${args.modelValue}");\`, \`<\/script>\`, "", "<template>", "  <Radio", \`    :dataSource="dataSource"\`, \`    direction="\${args.direction}"\`, \`    size="\${args.size}"\`, \`    className="\${args.className}"\`, \`    v-model="modelValue"\`, "  ></Radio>", "</template>"].filter(Boolean).join("\\n").trim();
        }
      }
    }
  }
}`,...(D=(z=l.parameters)==null?void 0:z.docs)==null?void 0:D.source}}};var y,x,O;c.parameters={...c.parameters,docs:{...(y=c.parameters)==null?void 0:y.docs,source:{originalSource:`{
  name: "水平排列",
  args: {
    // themeColor: 'primary',
    dataSource: [{
      label: "Option1",
      value: "option1",
      isDisabled: false
    }, {
      label: "Option2",
      value: "option2",
      isDisabled: false
    }, {
      label: "Option3",
      value: "option3",
      isDisabled: false
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
      </Radio>\`
  }),
  // 控制 controls 中能控制的參數
  parameters: {
    controls: {
      expanded: true,
      exclude: ["direction"]
    },
    docs: {
      source: {
        transform: (src, storyContext) => {
          const {
            args
          } = storyContext;
          const dataSourceString = formatDataSource(args.dataSource);
          return [\`<script setup>\`, \`import { ref } from "vue";\`, \`import { Radio } from "@ded-wds-vue/ui";\`, \`const dataSource = [\`, \`\${dataSourceString}\`, \`];\`, \`const modelValue = ref("\${args.modelValue}");\`, \`<\/script>\`, "", "<template>", "  <Radio", \`    :dataSource="dataSource"\`, \`    direction="\${args.direction}"\`, \`    size="\${args.size}"\`, \`    className="\${args.className}"\`, \`    v-model="modelValue"\`, "  ></Radio>", "</template>"].filter(Boolean).join("\\n").trim();
        }
      }
    }
  }
}`,...(O=(x=c.parameters)==null?void 0:x.docs)==null?void 0:O.source}}};var w,C,E;u.parameters={...u.parameters,docs:{...(w=u.parameters)==null?void 0:w.docs,source:{originalSource:`{
  name: "元件尺寸",
  args: {
    // themeColor: 'primary',
    dataSource: [{
      label: "Option1",
      value: "option1",
      isDisabled: false
    }, {
      label: "Option2",
      value: "option2",
      isDisabled: false
    }, {
      label: "Option3",
      value: "option3",
      isDisabled: false
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
      <div style="display: flex; flex-direction: column; gap: 24px">
        <Radio
          :dataSource="args.dataSource"
          :direction="args.direction"
          size="large"
          :className="args.className"
          v-model="args.modelValue"
        >
        </Radio>

        <Radio
          :dataSource="args.dataSource"
          :direction="args.direction"
          size="medium"
          :className="args.className"
          v-model="args.modelValue"
        >
        </Radio>

        <Radio
          :dataSource="args.dataSource"
          :direction="args.direction"
          size="small"
          :className="args.className"
          v-model="args.modelValue"
        >
        </Radio>
      </div>\`
  }),
  // 控制 controls 中能控制的參數
  parameters: {
    controls: {
      expanded: true,
      exclude: ["size"]
    },
    docs: {
      source: {
        transform: (src, storyContext) => {
          const {
            args
          } = storyContext;
          const dataSourceString = formatDataSource(args.dataSource);
          return [\`<script setup>\`, \`import { ref } from "vue";\`, \`import { Radio } from "@ded-wds-vue/ui";\`, \`const dataSource = [\`, \`\${dataSourceString}\`, \`];\`, \`const modelValue = ref("\${args.modelValue}");\`, \`<\/script>\`, "", "<template>", "  <Radio", \`    :dataSource="dataSource"\`, \`    direction="\${args.direction}"\`, \`    size="large"\`, \`    className="\${args.className}"\`, \`    v-model="modelValue"\`, "  ></Radio>", "  <Radio", \`    :dataSource="dataSource"\`, \`    direction="\${args.direction}"\`, \`    size="medium"\`, \`    className="\${args.className}"\`, \`    v-model="modelValue"\`, "  ></Radio>", "  <Radio", \`    :dataSource="dataSource"\`, \`    direction="\${args.direction}"\`, \`    size="small"\`, \`    className="\${args.className}"\`, \`    v-model="modelValue"\`, "  ></Radio>", "</template>"].filter(Boolean).join("\\n").trim();
        }
      }
    }
  }
}`,...(E=(C=u.parameters)==null?void 0:C.docs)==null?void 0:E.source}}};const T=["RadioDefaultStory","RadioVerticalStory","RadioRowStory","RadioSizeStory"];export{d as RadioDefaultStory,c as RadioRowStory,u as RadioSizeStory,l as RadioVerticalStory,T as __namedExportsOrder,P as default};

import{_ as n}from"./Checkbox-DqyRX4bc.js";import"./vue.esm-bundler-DYHjuIM_.js";import"./Icon-DeqquNhw.js";function c(o){return`[
    ${o.map(a=>`{
        label: '${a.label}',
        value: '${a.value}',
        isDisabled: ${a.isDisabled}
    }`).join(`,
    `)}
  ]`}const z={title:"Component/Checkbox",component:n,tags:["autodocs"],argTypes:{dataSource:{description:"資料來源",control:{type:"object"},table:{type:{summary:"{ label: string; value: string; isDisabled: boolean; }[]"}}},direction:{description:"排列方向",control:{type:"select"},options:["row","column"],table:{type:{summary:"row | column"}}},size:{description:"尺寸",control:{type:"select"},options:["small","medium","large"],table:{type:{summary:"small | medium | large"}}},className:{description:"客製化樣式",control:{type:"text"}},modelValue:{description:"選中的項目",control:{type:"object"},table:{type:{summary:"string[]"},category:"v-model"}}},parameters:{docs:{title:"Checkbox",description:{component:"複選框組件的呈現及說明。"}}}},r={name:"預設項目",args:{dataSource:[{label:"Option1",value:"option1",isDisabled:!1},{label:"Option2",value:"option2",isDisabled:!1},{label:"Option3",value:"option3",isDisabled:!0}],direction:"row",size:"medium",className:"",modelValue:["option1","option3"]},render:o=>({components:{Checkbox:n},setup(){return{args:o}},template:`
            <Checkbox
                :dataSource="args.dataSource"
                :direction="args.direction"
                :size="args.size"
                :className="args.className"
                v-model="args.modelValue"
            ></Checkbox>
        `}),parameters:{controls:{},docs:{source:{transform:(o,a)=>{const{args:e}=a;return["<script setup>",'import { ref } from "vue";','import { Checkbox } from "@ded-wds-vue/ui";','const modelValue = ref(["option1", "option3"]);',"<\/script>","","<template>","  <Checkbox",`    :dataSource="${c(e.dataSource)}"`,`    ${e.direction?`direction="${e.direction}"`:""}`,`    ${e.size?`size="${e.size}"`:""}`,`    ${e.className?`className="${e.className}"`:""}`,'    v-model="modelValue"',"  ></Checkbox>","</template>"].filter(Boolean).join(`
`).trim()}}}}},t={name:"垂直排列",args:{dataSource:[{label:"Option1",value:"option4",isDisabled:!1},{label:"Option2",value:"option5",isDisabled:!1},{label:"Option3",value:"option6",isDisabled:!1}],size:"medium",className:"",modelValue:["option4","option6"]},render:o=>({components:{Checkbox:n},setup(){return{args:o}},template:`
            <Checkbox
                :dataSource="args.dataSource"
                direction="column"
                :size="args.size"
                :className="args.className"
                v-model="args.modelValue"
            ></Checkbox>
        `}),parameters:{controls:{exclude:["direction"]},docs:{source:{transform:(o,a)=>{const{args:e}=a;return["<script setup>",'import { ref } from "vue";','import { Checkbox } from "@ded-wds-vue/ui";','const modelValue = ref(["option4", "option6"]);',"<\/script>","","<template>","  <Checkbox",`    :dataSource="${c(e.dataSource)}"`,'    direction="column"',`    ${e.size?`size="${e.size}"`:""}`,`    ${e.className?`className="${e.className}"`:""}`,'    v-model="modelValue"',"  ></Checkbox>","</template>"].filter(Boolean).join(`
`).trim()}}}}},i={name:"水平排列",args:{dataSource:[{label:"Option1",value:"option7",isDisabled:!1},{label:"Option2",value:"option8",isDisabled:!1},{label:"Option3",value:"option9",isDisabled:!1}],size:"medium",className:"",modelValue:["option7","option9"]},render:o=>({components:{Checkbox:n},setup(){return{args:o}},template:`
            <Checkbox
                :dataSource="args.dataSource"
                direction="row"
                :size="args.size"
                :className="args.className"
                v-model="args.modelValue"
            ></Checkbox>
        `}),parameters:{controls:{exclude:["direction"]},docs:{source:{transform:(o,a)=>{const{args:e}=a;return["<script setup>",'import { ref } from "vue";','import { Checkbox } from "@ded-wds-vue/ui";','const modelValue = ref(["option7", "option9"]);',"<\/script>","","<template>","  <Checkbox",`    :dataSource="${c(e.dataSource)}"`,'    direction="row"',`    ${e.size?`size="${e.size}"`:""}`,`    ${e.className?`className="${e.className}"`:""}`,'    v-model="modelValue"',"  ></Checkbox>","</template>"].filter(Boolean).join(`
`).trim()}}}}},l={name:"元件尺寸",args:{dataSource:[{label:"Option1",value:"option10",isDisabled:!1},{label:"Option2",value:"option11",isDisabled:!1},{label:"Option3",value:"option12",isDisabled:!1}],direction:"row",size:"medium",className:"",modelValue:["option10","option12"]},render:o=>({components:{Checkbox:n},setup(){return{args:o}},template:`
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
            
        `}),parameters:{controls:{exclude:["size"]},docs:{source:{transform:(o,a)=>{const{args:e}=a,s=c(e.dataSource);return["<script setup>",'import { ref } from "vue";','import { Checkbox } from "@ded-wds-vue/ui";','const modelValue = ref(["option10", "option12"]);',"<\/script>","","<template>","  <Checkbox",`    :dataSource="${s}"`,`    ${e.direction?`direction="${e.direction}"`:""}`,'    size="large"',`    ${e.className?`className="${e.className}"`:""}`,'    v-model="modelValue"',"  ></Checkbox>","  <Checkbox",`    :dataSource="${s}"`,`    ${e.direction?`direction="${e.direction}"`:""}`,'    size="medium"',`    ${e.className?`className="${e.className}"`:""}`,'    v-model="modelValue"',"  ></Checkbox>","  <Checkbox",`    :dataSource="${s}"`,`    ${e.direction?`direction="${e.direction}"`:""}`,'    size="small"',`    ${e.className?`className="${e.className}"`:""}`,'    v-model="modelValue"',"  ></Checkbox>","</template>"].filter(Boolean).join(`
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
          return [\`<script setup>\`, \`import { ref } from "vue";\`, \`import { Checkbox } from "@ded-wds-vue/ui";\`, \`const modelValue = ref(["option1", "option3"]);\`, \`<\/script>\`, '', '<template>', '  <Checkbox', \`    :dataSource="\${dataSourceString}"\`, \`    \${args.direction ? \`direction="\${args.direction}"\` : ""}\`, \`    \${args.size ? \`size="\${args.size}"\` : ""}\`, \`    \${args.className ? \`className="\${args.className}"\` : ""}\`, \`    v-model="modelValue"\`, '  ></Checkbox>', '</template>'].filter(Boolean).join('\\n').trim();
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
          return [\`<script setup>\`, \`import { ref } from "vue";\`, \`import { Checkbox } from "@ded-wds-vue/ui";\`, \`const modelValue = ref(["option4", "option6"]);\`, \`<\/script>\`, '', '<template>', '  <Checkbox', \`    :dataSource="\${dataSourceString}"\`, \`    direction="column"\`, \`    \${args.size ? \`size="\${args.size}"\` : ""}\`, \`    \${args.className ? \`className="\${args.className}"\` : ""}\`, \`    v-model="modelValue"\`, '  ></Checkbox>', '</template>'].filter(Boolean).join('\\n').trim();
        }
      }
    }
  }
}`,...(b=(g=t.parameters)==null?void 0:g.docs)==null?void 0:b.source}}};var C,S,x;i.parameters={...i.parameters,docs:{...(C=i.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
          return [\`<script setup>\`, \`import { ref } from "vue";\`, \`import { Checkbox } from "@ded-wds-vue/ui";\`, \`const modelValue = ref(["option7", "option9"]);\`, \`<\/script>\`, '', '<template>', '  <Checkbox', \`    :dataSource="\${dataSourceString}"\`, \`    direction="row"\`, \`    \${args.size ? \`size="\${args.size}"\` : ""}\`, \`    \${args.className ? \`className="\${args.className}"\` : ""}\`, \`    v-model="modelValue"\`, '  ></Checkbox>', '</template>'].filter(Boolean).join('\\n').trim();
        }
      }
    }
  }
}`,...(x=(S=i.parameters)==null?void 0:S.docs)==null?void 0:x.source}}};var h,f,k;l.parameters={...l.parameters,docs:{...(h=l.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
          return [\`<script setup>\`, \`import { ref } from "vue";\`, \`import { Checkbox } from "@ded-wds-vue/ui";\`, \`const modelValue = ref(["option10", "option12"]);\`, \`<\/script>\`, '', '<template>', '  <Checkbox', \`    :dataSource="\${dataSourceString}"\`, \`    \${args.direction ? \`direction="\${args.direction}"\` : ""}\`, \`    size="large"\`, \`    \${args.className ? \`className="\${args.className}"\` : ""}\`, \`    v-model="modelValue"\`, '  ></Checkbox>', '  <Checkbox', \`    :dataSource="\${dataSourceString}"\`, \`    \${args.direction ? \`direction="\${args.direction}"\` : ""}\`, \`    size="medium"\`, \`    \${args.className ? \`className="\${args.className}"\` : ""}\`, \`    v-model="modelValue"\`, '  ></Checkbox>', '  <Checkbox', \`    :dataSource="\${dataSourceString}"\`, \`    \${args.direction ? \`direction="\${args.direction}"\` : ""}\`, \`    size="small"\`, \`    \${args.className ? \`className="\${args.className}"\` : ""}\`, \`    v-model="modelValue"\`, '  ></Checkbox>', '</template>'].filter(Boolean).join('\\n').trim();
        }
      }
    }
  }
}`,...(k=(f=l.parameters)==null?void 0:f.docs)==null?void 0:k.source}}};const D=["CheckboxMultiStory","CheckboxColumnDirection","CheckboxRowDirection","CheckboxSizeStory"];export{t as CheckboxColumnDirection,r as CheckboxMultiStory,i as CheckboxRowDirection,l as CheckboxSizeStory,D as __namedExportsOrder,z as default};

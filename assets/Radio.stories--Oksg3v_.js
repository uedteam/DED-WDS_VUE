import{_ as r}from"./Radio-CY7UfkvI.js";import"./vue.esm-bundler-DDwqdenp.js";import"./v4-CtRu48qb.js";function l(a){return`    ${a.map(o=>`{
        label: "${o.label}",
        value: "${o.value}",
        isDisabled: ${o.isDisabled}
    }`).join(`,
    `)}`}const y={title:"Component/Radio",component:r,tags:["autodocs"],argTypes:{dataSource:{description:"資料來源",control:{type:"object"},table:{type:{summary:"{ label: string; value: string; isDisabled: boolean; }[]"}}},direction:{description:"排列方向",control:{type:"select"},options:["row","column"],table:{type:{summary:"row | column"}}},size:{description:"尺寸",control:{type:"select"},options:["small","medium","large"],table:{type:{summary:"small | medium | large "}}},className:{description:"客製化樣式",control:{type:"text"}},modelValue:{description:"選中的項目",control:{type:"text"},table:{type:{summary:"string"},category:"v-model"}}},parameters:{docs:{title:"Radio",description:{component:"Radio 組件的呈現及說明。"}}}},n={name:"預設項目",args:{dataSource:[{label:"Option1",value:"option1",isDisabled:!1},{label:"Option2",value:"option2",isDisabled:!1},{label:"Option3",value:"option3",isDisabled:!0}],direction:"row",size:"medium",className:"",modelValue:"option1"},render:a=>({components:{Radio:r},setup(){return{args:a}},template:`
            <Radio
                :dataSource="args.dataSource"
                :direction="args.direction"
                :size="args.size"
                :className="args.className"
                v-model="args.modelValue">
            </Radio>
        `}),parameters:{controls:{},docs:{source:{transform:(a,o)=>{const{args:e}=o;return["<script setup>",'import { ref } from "vue";','import { Radio } from "@ded-wds-vue/ui";',"const dataSource = [",`${l(e.dataSource)}`,"];",`const modelValue = ref("${e.modelValue}");`,"<\/script>","","<template>","<Radio",'  :dataSource="dataSource"',`  ${e.direction?`direction="${e.direction}"`:""}`,`  ${e.size?`size="${e.size}"`:""}`,`  ${e.className?`className="${e.className}"`:""}`,'  v-model="modelValue"',"></Radio>","</template>"].filter(Boolean).join(`
`).trim()}}}}},s={name:"垂直排列",args:{dataSource:[{label:"Option1",value:"option1",isDisabled:!1},{label:"Option2",value:"option2",isDisabled:!1},{label:"Option3",value:"option3",isDisabled:!1}],direction:"column",size:"medium",className:"",modelValue:"option1"},render:a=>({components:{Radio:r},setup(){return{args:a}},template:`
            <Radio
                :dataSource="args.dataSource"
                :direction="args.direction"
                :size="args.size"
                :className="args.className"
                v-model="args.modelValue">
            </Radio>
        `}),parameters:{controls:{expanded:!0,exclude:["direction"]},docs:{source:{transform:(a,o)=>{const{args:e}=o;return["<script setup>",'import { ref } from "vue";','import { Radio } from "@ded-wds-vue/ui";',"const dataSource = [",`${l(e.dataSource)}`,"];",`const modelValue = ref("${e.modelValue}");`,"<\/script>","","<template>","  <Radio",'    :dataSource="dataSource"',`    direction="${e.direction}"`,`    size="${e.size}"`,`    className="${e.className}"`,'    v-model="modelValue"',"  ></Radio>","</template>"].filter(Boolean).join(`
`).trim()}}}}},t={name:"水平排列",args:{dataSource:[{label:"Option1",value:"option1",isDisabled:!1},{label:"Option2",value:"option2",isDisabled:!1},{label:"Option3",value:"option3",isDisabled:!1}],direction:"row",size:"medium",className:"",modelValue:"option1"},render:a=>({components:{Radio:r},setup(){return{args:a}},template:`
      <Radio
        :dataSource="args.dataSource"
        :direction="args.direction"
        :size="args.size"
        :className="args.className"
        v-model="args.modelValue">
      </Radio>`}),parameters:{controls:{expanded:!0,exclude:["direction"]},docs:{source:{transform:(a,o)=>{const{args:e}=o;return["<script setup>",'import { ref } from "vue";','import { Radio } from "@ded-wds-vue/ui";',"const dataSource = [",`${l(e.dataSource)}`,"];",`const modelValue = ref("${e.modelValue}");`,"<\/script>","","<template>","  <Radio",'    :dataSource="dataSource"',`    direction="${e.direction}"`,`    size="${e.size}"`,`    className="${e.className}"`,'    v-model="modelValue"',"  ></Radio>","</template>"].filter(Boolean).join(`
`).trim()}}}}},i={name:"元件尺寸",args:{dataSource:[{label:"Option1",value:"option1",isDisabled:!1},{label:"Option2",value:"option2",isDisabled:!1},{label:"Option3",value:"option3",isDisabled:!1}],direction:"row",className:"",modelValue:"option1"},render:a=>({components:{Radio:r},setup(){return{args:a}},template:`
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
      </div>`}),parameters:{controls:{expanded:!0,exclude:["size"]},docs:{source:{transform:(a,o)=>{const{args:e}=o;return["<script setup>",'import { ref } from "vue";','import { Radio } from "@ded-wds-vue/ui";',"const dataSource = [",`${l(e.dataSource)}`,"];",`const modelValue = ref("${e.modelValue}");`,"<\/script>","","<template>","  <Radio",'    :dataSource="dataSource"',`    direction="${e.direction}"`,'    size="large"',`    className="${e.className}"`,'    v-model="modelValue"',"  ></Radio>","  <Radio",'    :dataSource="dataSource"',`    direction="${e.direction}"`,'    size="medium"',`    className="${e.className}"`,'    v-model="modelValue"',"  ></Radio>","  <Radio",'    :dataSource="dataSource"',`    direction="${e.direction}"`,'    size="small"',`    className="${e.className}"`,'    v-model="modelValue"',"  ></Radio>","</template>"].filter(Boolean).join(`
`).trim()}}}}};var c,u,m;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(m=(u=n.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};var p,g,S;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(S=(g=s.parameters)==null?void 0:g.docs)==null?void 0:S.source}}};var f,R,v;t.parameters={...t.parameters,docs:{...(f=t.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(v=(R=t.parameters)==null?void 0:R.docs)==null?void 0:v.source}}};var b,N,$;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...($=(N=i.parameters)==null?void 0:N.docs)==null?void 0:$.source}}};const x=["RadioDefaultStory","RadioVerticalStory","RadioRowStory","RadioSizeStory"];export{n as RadioDefaultStory,t as RadioRowStory,i as RadioSizeStory,s as RadioVerticalStory,x as __namedExportsOrder,y as default};

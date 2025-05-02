import{_ as a}from"./Divider-Bt7-Tkm9.js";import"./vue.esm-bundler-CIcyrfsw.js";const B={title:"Component/Divider",component:a,tags:["autodocs"],argTypes:{width:{description:"線條寬度",control:{type:"select"},options:["1px","2px","3px","4px","5px"],table:{type:{summary:"1px | 2px | 3px | 4px | 5px"}}},type:{description:"線條樣式",control:{type:"select"},defaultValue:"solid",options:["solid","dashed","dotted"],table:{type:{summary:"solid | dashed | dotted"}}},direction:{description:"線條方向",control:{type:"select"},defaultValue:"horizontal",options:["horizontal","vertical"],table:{type:{summary:"horizontal | vertical"}}},align:{description:"文字位置",control:{type:"select"},options:["start","center","end"],table:{type:{summary:"start | center | end"}}},className:{description:"客製化樣式",control:{type:"text"}},default:{description:"分隔線內容",control:{type:"text"}}},parameters:{docs:{title:"Divider",description:{component:"Divider 組件的呈現及說明。"}}}},t={name:"預設項目",args:{width:"1px",type:"solid",direction:"horizontal",align:"center",default:"Divider",className:""},render:i=>({components:{Divider:a},setup(){return{args:i}},template:`
      <div
        style="height: 100px;"
        :style="args.direction === 'vertical' ? 'display: flex;' : ''"
      >
        <Divider
          :width="args.width"
          :type="args.type"
          :direction="args.direction"
          :align="args.align"
          :className="args.className"
        >
          {{ args.default }}
        </Divider>
      </div>
    `}),parameters:{controls:{},docs:{source:{transform:(i,r)=>{const{args:e}=r;return["<script setup>",'import { Divider } from "@ded-wds-vue/ui";',"<\/script>","","<template>","  <div",'    style="height: 100px;"',`    ${e.direction==="vertical"?`:style="'display: flex;'"`:""}`,"  >","    <Divider",`      ${e.width?`width="${e.width}"`:""}`,`      ${e.type?`type="${e.type}"`:""}`,`      ${e.direction?`direction="${e.direction}"`:""}`,`      ${e.align?`align="${e.align}"`:""}`,`      ${e.className?`className="${e.className}"`:""}`,"    >",`      ${e.default||""}`,"    </Divider>","  </div>","</template>"].filter(Boolean).join(`
`).trim()}}}}},n={name:"文字對齊",args:{width:"1px",type:"solid",direction:"horizontal",className:""},render:i=>({components:{Divider:a},setup(){return{args:i}},template:`
      <div
        style="display: flex; gap: 16px;"
        :style="{ 
          flexDirection: args.direction === 'horizontal' ? 'column' : 'row',
          height: '100px'
        }"
      >
        <Divider
          :width="args.width"
          :type="args.type"
          :direction="args.direction"
          align="start"
          :className="args.className"
        >
          Start
        </Divider>

        <Divider
          :width="args.width"
          :type="args.type"
          :direction="args.direction"
          align="center"
          :className="args.className"
        >
          Center
        </Divider>

        <Divider
          :width="args.width"
          :type="args.type"
          :direction="args.direction"
          align="end"
          :className="args.className"
        >
          End
        </Divider>
      </div>
    `}),parameters:{controls:{exclude:["align"]},docs:{source:{transform:(i,r)=>{const{args:e}=r;return["<script setup>",'import { Divider } from "@ded-wds-vue/ui";',"<\/script>","","<template>","  <Divider",`    ${e.width?`width="${e.width}"`:""}`,`    ${e.type?`type="${e.type}"`:""}`,`    ${e.direction?`direction="${e.direction}"`:""}`,'    align="start"',`    ${e.className?`className="${e.className}"`:""}`,"  >","    Start","  </Divider>","  <Divider",`    ${e.width?`width="${e.width}"`:""}`,`    ${e.type?`type="${e.type}"`:""}`,`    ${e.direction?`direction="${e.direction}"`:""}`,'    align="center"',`    ${e.className?`className="${e.className}"`:""}`,"  >","    Center","  </Divider>","  <Divider",`    ${e.width?`width="${e.width}"`:""}`,`    ${e.type?`type="${e.type}"`:""}`,`    ${e.direction?`direction="${e.direction}"`:""}`,'    align="end"',`    ${e.className?`className="${e.className}"`:""}`,"  >","    End","  </Divider>","</template>"].filter(Boolean).join(`
`).trim()}}}}},s={name:"線條粗細",args:{type:"solid",direction:"horizontal",align:"center",className:""},render:i=>({components:{Divider:a},setup(){return{args:i}},template:`
      <div
        :style="{ flexDirection: args.direction === 'horizontal' ? 'column' : 'row' }"
        style="display: flex; gap: 16px; height: 400px"
      >
        <Divider
          width="1px"
          :type="args.type"
          :direction="args.direction"
          :align="args.align"
          :className="args.className"
        >
          1px
        </Divider>

        <Divider
          width="2px"
          :type="args.type"
          :direction="args.direction"
          :align="args.align"
          :className="args.className"
        >
          2px
        </Divider>

        <Divider
          width="3px"
          :type="args.type"
          :direction="args.direction"
          :align="args.align"
          :className="args.className"
        >
          3px
        </Divider>

        <Divider
          width="4px"
          :type="args.type"
          :direction="args.direction"
          :align="args.align"
        >
          4px
        </Divider>

        <Divider
          width="5px"
          :type="args.type"
          :direction="args.direction"
          :align="args.align"
          :className="args.className"
        >
          5px
        </Divider>
      </div>
    `}),parameters:{controls:{exclude:["width"]},docs:{source:{transform:(i,r)=>{const{args:e}=r;return["<script setup>",'import { Divider } from "@ded-wds-vue/ui";',"<\/script>","","<template>","  <Divider",'    width="1px"',`    ${e.type?`type="${e.type}"`:""}`,`    ${e.direction?`direction="${e.direction}"`:""}`,`    ${e.align?`align="${e.align}"`:""}`,`    ${e.className?`className="${e.className}"`:""}`,"  >","    1px","  </Divider>","  <Divider",'    width="2px"',`    ${e.type?`type="${e.type}"`:""}`,`    ${e.direction?`direction="${e.direction}"`:""}`,`    ${e.align?`align="${e.align}"`:""}`,`    ${e.className?`className="${e.className}"`:""}`,"  >","    2px","  </Divider>","  <Divider",'    width="3px"',`    ${e.type?`type="${e.type}"`:""}`,`    ${e.direction?`direction="${e.direction}"`:""}`,`    ${e.align?`align="${e.align}"`:""}`,`    ${e.className?`className="${e.className}"`:""}`,"  >","    3px","  </Divider>","  <Divider",'    width="4px"',`    ${e.type?`type="${e.type}"`:""}`,`    ${e.direction?`direction="${e.direction}"`:""}`,`    ${e.align?`align="${e.align}"`:""}`,`    ${e.className?`className="${e.className}"`:""}`,"  >","    4px","  </Divider>","  <Divider",'    width="5px"',`    ${e.type?`type="${e.type}"`:""}`,`    ${e.direction?`direction="${e.direction}"`:""}`,`    ${e.align?`align="${e.align}"`:""}`,`    ${e.className?`className="${e.className}"`:""}`,"  >","    5px","  </Divider>","</template>"].filter(Boolean).join(`
`).trim()}}}}},d={name:"線條類型",args:{width:"1px",direction:"horizontal",align:"center",className:""},render:i=>({components:{Divider:a},setup(){return{args:i}},template:`
      <div
        :style="{ flexDirection: args.direction === 'horizontal' ? 'column' : 'row' }"
        style="display: flex; gap: 16px; height: 200px"
      >
        <Divider
          :width="args.width"
          type="solid"
          :direction="args.direction"
          :align="args.align"
          :className="args.className"
        >
          Solid
        </Divider>

        <Divider
          :width="args.width"
          type="dashed"
          :direction="args.direction"
          :align="args.align"
          :className="args.className"
        >
          Dashed
        </Divider>

        <Divider
          :width="args.width"
          type="dotted"
          :direction="args.direction"
          :align="args.align"
          :className="args.className"
        >
          Dotted
        </Divider>
      </div>
    `}),parameters:{controls:{exclude:["type"]},docs:{source:{transform:(i,r)=>{const{args:e}=r;return["<script setup>",'import { Divider } from "@ded-wds-vue/ui";',"<\/script>","","<template>","  <Divider",`    ${e.width?`width="${e.width}"`:""}`,'    type="solid"',`    ${e.direction?`direction="${e.direction}"`:""}`,`    ${e.align?`align="${e.align}"`:""}`,`    ${e.className?`className="${e.className}"`:""}`,"  >","    Solid","  </Divider>","  <Divider",`    ${e.width?`width="${e.width}"`:""}`,'    type="dashed"',`    ${e.direction?`direction="${e.direction}"`:""}`,`    ${e.align?`align="${e.align}"`:""}`,`    ${e.className?`className="${e.className}"`:""}`,"  >","    Dashed","  </Divider>","  <Divider",`    ${e.width?`width="${e.width}"`:""}`,'    type="dotted"',`    ${e.direction?`direction="${e.direction}"`:""}`,`    ${e.align?`align="${e.align}"`:""}`,`    ${e.className?`className="${e.className}"`:""}`,"  >","    Dotted","  </Divider>","</template>"].filter(Boolean).join(`
`).trim()}}}}},l={name:"線條方向-垂直",args:{width:"1px",type:"solid",className:""},render:i=>({components:{Divider:a},setup(){return{args:i}},template:`
      <div style="display: flex; height: 100px">
        <Divider
          :themeColor="args.themeColor"
          :width="args.width"
          :type="args.type"
          direction="vertical"
          align="start"
          :className="args.className"
        >
          Start
        </Divider>

        <Divider
          :themeColor="args.themeColor"
          :width="args.width"
          :type="args.type"
          direction="vertical"
          align="center"
          :className="args.className"
        >
          Center
        </Divider>

        <Divider
          :themeColor="args.themeColor"
          :width="args.width"
          :type="args.type"
          direction="vertical"
          align="end"
          :className="args.className"
        >
          End
        </Divider>
      </div>
    `}),parameters:{controls:{exclude:["direction","align","default"]},docs:{source:{transform:(i,r)=>{const{args:e}=r;return["<script setup>",'import { Divider } from "@ded-wds-vue/ui";',"<\/script>","","<template>",'<div style="display:flex; height: 100px">',"  <Divider",`    ${e.width?`width="${e.width}"`:""}`,`    ${e.type?`type="${e.type}"`:""}`,'    direction="vertical"','    align="start"',`    ${e.className?`className="${e.className}"`:""}`,"  >","    Start","  </Divider>","  <Divider",`    ${e.width?`width="${e.width}"`:""}`,`    ${e.type?`type="${e.type}"`:""}`,'    direction="vertical"','    align="center"',`    ${e.className?`className="${e.className}"`:""}`,"  >","    Center","  </Divider>","  <Divider",`    ${e.width?`width="${e.width}"`:""}`,`    ${e.type?`type="${e.type}"`:""}`,'    direction="vertical"','    align="end"',`    ${e.className?`className="${e.className}"`:""}`,"  >","    End","  </Divider>","</div>","</template>"].filter(Boolean).join(`
`).trim()}}}}},o={name:"線條方向-水平",args:{width:"1px",type:"solid",className:""},render:i=>({components:{Divider:a},setup(){return{args:i}},template:`
      <div style="display: flex; flex-direction: column; height: 100px;">
        <Divider
          :width="args.width"
          :type="args.type"
          direction="horizontal"
          align="start"
          :className="args.className"
        >
          Start
        </Divider>

        <Divider
          :width="args.width"
          :type="args.type"
          direction="horizontal"
          align="center"
          :className="args.className"
        >
          Center
        </Divider>

        <Divider
          :width="args.width"
          :type="args.type"
          direction="horizontal"
          align="end"
          :className="args.className"
        >
          End
        </Divider>
      </div>
    `}),parameters:{controls:{exclude:["direction","align","default"]},docs:{source:{transform:(i,r)=>{const{args:e}=r;return["<script setup>",'import { Divider } from "@ded-wds-vue/ui";',"<\/script>","","<template>","  <Divider",`    ${e.width?`width="${e.width}"`:""}`,`    ${e.type?`type="${e.type}"`:""}`,'    direction="horizontal"','    align="start"',`    ${e.className?`className="${e.className}"`:""}`,"  >","    Start","  </Divider>","  <Divider",`    ${e.width?`width="${e.width}"`:""}`,`    ${e.type?`type="${e.type}"`:""}`,'    direction="horizontal"','    align="center"',`    ${e.className?`className="${e.className}"`:""}`,"  >","    Center","  </Divider>","  <Divider",`    ${e.width?`width="${e.width}"`:""}`,`    ${e.type?`type="${e.type}"`:""}`,'    direction="horizontal"','    align="end"',`    ${e.className?`className="${e.className}"`:""}`,"  >","    End","  </Divider>","</template>"].filter(Boolean).join(`
`).trim()}}}}};var c,g,p;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  name: "預設項目",
  args: {
    width: "1px",
    type: "solid",
    direction: "horizontal",
    align: "center",
    default: "Divider",
    className: ""
  },
  render: args => ({
    components: {
      Divider
    },
    setup() {
      // Create a ref for modelValue to be used with v-model
      return {
        args
      };
    },
    template: \`
      <div
        style="height: 100px;"
        :style="args.direction === 'vertical' ? 'display: flex;' : ''"
      >
        <Divider
          :width="args.width"
          :type="args.type"
          :direction="args.direction"
          :align="args.align"
          :className="args.className"
        >
          {{ args.default }}
        </Divider>
      </div>
    \`
  }),
  // 控制 controls 中能控制的參數
  parameters: {
    controls: {
      // include: ['themeColor', 'label', 'value', 'name' ],
    },
    docs: {
      source: {
        transform: (src, storyContext) => {
          const {
            args
          } = storyContext;
          return [\`<script setup>\`, \`import { Divider } from "@ded-wds-vue/ui";\`, \`<\/script>\`, "", "<template>", \`  <div\`, \`    style="height: 100px;"\`, \`    \${args.direction === "vertical" ? \`:style="'display: flex;'"\` : ""}\`, \`  >\`, "    <Divider", \`      \${args.width ? \`width="\${args.width}"\` : ""}\`, \`      \${args.type ? \`type="\${args.type}"\` : ""}\`, \`      \${args.direction ? \`direction="\${args.direction}"\` : ""}\`, \`      \${args.align ? \`align="\${args.align}"\` : ""}\`, \`      \${args.className ? \`className="\${args.className}"\` : ""}\`, "    >", \`      \${args.default || ""}\`, "    </Divider>", \`  </div>\`, "</template>"].filter(Boolean).join("\\n").trim();
        }
      }
    }
  }
}`,...(p=(g=t.parameters)==null?void 0:g.docs)==null?void 0:p.source}}};var m,$,h;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: "文字對齊",
  args: {
    width: "1px",
    type: "solid",
    direction: "horizontal",
    // align: "center",
    // default: "Divider",
    className: ""
  },
  render: args => ({
    components: {
      Divider
    },
    setup() {
      // Create a ref for modelValue to be used with v-model
      return {
        args
      };
    },
    template: \`
      <div
        style="display: flex; gap: 16px;"
        :style="{ 
          flexDirection: args.direction === 'horizontal' ? 'column' : 'row',
          height: '100px'
        }"
      >
        <Divider
          :width="args.width"
          :type="args.type"
          :direction="args.direction"
          align="start"
          :className="args.className"
        >
          Start
        </Divider>

        <Divider
          :width="args.width"
          :type="args.type"
          :direction="args.direction"
          align="center"
          :className="args.className"
        >
          Center
        </Divider>

        <Divider
          :width="args.width"
          :type="args.type"
          :direction="args.direction"
          align="end"
          :className="args.className"
        >
          End
        </Divider>
      </div>
    \`
  }),
  // 控制 controls 中能控制的參數
  parameters: {
    controls: {
      // include: ['themeColor', 'label', 'value', 'name' ],
      exclude: ["align"]
    },
    docs: {
      source: {
        transform: (src, storyContext) => {
          const {
            args
          } = storyContext;
          return [\`<script setup>\`, \`import { Divider } from "@ded-wds-vue/ui";\`, \`<\/script>\`, "", "<template>", "  <Divider", \`    \${args.width ? \`width="\${args.width}"\` : ""}\`, \`    \${args.type ? \`type="\${args.type}"\` : ""}\`, \`    \${args.direction ? \`direction="\${args.direction}"\` : ""}\`, \`    align="start"\`, \`    \${args.className ? \`className="\${args.className}"\` : ""}\`, "  >", \`    Start\`, "  </Divider>", "  <Divider", \`    \${args.width ? \`width="\${args.width}"\` : ""}\`, \`    \${args.type ? \`type="\${args.type}"\` : ""}\`, \`    \${args.direction ? \`direction="\${args.direction}"\` : ""}\`, \`    align="center"\`, \`    \${args.className ? \`className="\${args.className}"\` : ""}\`, "  >", \`    Center\`, "  </Divider>", "  <Divider", \`    \${args.width ? \`width="\${args.width}"\` : ""}\`, \`    \${args.type ? \`type="\${args.type}"\` : ""}\`, \`    \${args.direction ? \`direction="\${args.direction}"\` : ""}\`, \`    align="end"\`, \`    \${args.className ? \`className="\${args.className}"\` : ""}\`, "  >", \`    End\`, "  </Divider>", "</template>"].filter(Boolean).join("\\n").trim();
        }
      }
    }
  }
}`,...(h=($=n.parameters)==null?void 0:$.docs)==null?void 0:h.source}}};var v,u,y;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:'{\n  name: "線條粗細",\n  args: {\n    // width:"1px",\n    type: "solid",\n    direction: "horizontal",\n    align: "center",\n    className: ""\n  },\n  render: args => ({\n    components: {\n      Divider\n    },\n    setup() {\n      // Create a ref for modelValue to be used with v-model\n      return {\n        args\n      };\n    },\n    template: `\n      <div\n        :style="{ flexDirection: args.direction === \'horizontal\' ? \'column\' : \'row\' }"\n        style="display: flex; gap: 16px; height: 400px"\n      >\n        <Divider\n          width="1px"\n          :type="args.type"\n          :direction="args.direction"\n          :align="args.align"\n          :className="args.className"\n        >\n          1px\n        </Divider>\n\n        <Divider\n          width="2px"\n          :type="args.type"\n          :direction="args.direction"\n          :align="args.align"\n          :className="args.className"\n        >\n          2px\n        </Divider>\n\n        <Divider\n          width="3px"\n          :type="args.type"\n          :direction="args.direction"\n          :align="args.align"\n          :className="args.className"\n        >\n          3px\n        </Divider>\n\n        <Divider\n          width="4px"\n          :type="args.type"\n          :direction="args.direction"\n          :align="args.align"\n        >\n          4px\n        </Divider>\n\n        <Divider\n          width="5px"\n          :type="args.type"\n          :direction="args.direction"\n          :align="args.align"\n          :className="args.className"\n        >\n          5px\n        </Divider>\n      </div>\n    `\n  }),\n  // 控制 controls 中能控制的參數\n  parameters: {\n    controls: {\n      // include: [\'themeColor\', \'label\', \'value\', \'name\' ],\n      exclude: ["width"]\n    },\n    docs: {\n      source: {\n        transform: (src, storyContext) => {\n          const {\n            args\n          } = storyContext;\n          return [`<script setup>`, `import { Divider } from "@ded-wds-vue/ui";`, `<\/script>`, "", "<template>", "  <Divider", `    width="1px"`, `    ${args.type ? `type="${args.type}"` : ""}`, `    ${args.direction ? `direction="${args.direction}"` : ""}`, `    ${args.align ? `align="${args.align}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, "  >", `    1px`, "  </Divider>", "  <Divider", `    width="2px"`, `    ${args.type ? `type="${args.type}"` : ""}`, `    ${args.direction ? `direction="${args.direction}"` : ""}`, `    ${args.align ? `align="${args.align}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, "  >", `    2px`, "  </Divider>", "  <Divider", `    width="3px"`, `    ${args.type ? `type="${args.type}"` : ""}`, `    ${args.direction ? `direction="${args.direction}"` : ""}`, `    ${args.align ? `align="${args.align}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, "  >", `    3px`, "  </Divider>", "  <Divider", `    width="4px"`, `    ${args.type ? `type="${args.type}"` : ""}`, `    ${args.direction ? `direction="${args.direction}"` : ""}`, `    ${args.align ? `align="${args.align}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, "  >", `    4px`, "  </Divider>", "  <Divider", `    width="5px"`, `    ${args.type ? `type="${args.type}"` : ""}`, `    ${args.direction ? `direction="${args.direction}"` : ""}`, `    ${args.align ? `align="${args.align}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, "  >", `    5px`, "  </Divider>", "</template>"].filter(Boolean).join("\\n").trim();\n        }\n      }\n    }\n  }\n}',...(y=(u=s.parameters)==null?void 0:u.docs)==null?void 0:y.source}}};var D,w,N;d.parameters={...d.parameters,docs:{...(D=d.parameters)==null?void 0:D.docs,source:{originalSource:'{\n  name: "線條類型",\n  args: {\n    width: "1px",\n    direction: "horizontal",\n    align: "center",\n    className: ""\n  },\n  render: args => ({\n    components: {\n      Divider\n    },\n    setup() {\n      // Create a ref for modelValue to be used with v-model\n      return {\n        args\n      };\n    },\n    template: `\n      <div\n        :style="{ flexDirection: args.direction === \'horizontal\' ? \'column\' : \'row\' }"\n        style="display: flex; gap: 16px; height: 200px"\n      >\n        <Divider\n          :width="args.width"\n          type="solid"\n          :direction="args.direction"\n          :align="args.align"\n          :className="args.className"\n        >\n          Solid\n        </Divider>\n\n        <Divider\n          :width="args.width"\n          type="dashed"\n          :direction="args.direction"\n          :align="args.align"\n          :className="args.className"\n        >\n          Dashed\n        </Divider>\n\n        <Divider\n          :width="args.width"\n          type="dotted"\n          :direction="args.direction"\n          :align="args.align"\n          :className="args.className"\n        >\n          Dotted\n        </Divider>\n      </div>\n    `\n  }),\n  // 控制 controls 中能控制的參數\n  parameters: {\n    controls: {\n      // include: [\'themeColor\', \'label\', \'value\', \'name\' ],\n      exclude: ["type"]\n    },\n    docs: {\n      source: {\n        transform: (src, storyContext) => {\n          const {\n            args\n          } = storyContext;\n          return [`<script setup>`, `import { Divider } from "@ded-wds-vue/ui";`, `<\/script>`, "", "<template>", "  <Divider", `    ${args.width ? `width="${args.width}"` : ""}`, `    type="solid"`, `    ${args.direction ? `direction="${args.direction}"` : ""}`, `    ${args.align ? `align="${args.align}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, "  >", `    Solid`, "  </Divider>", "  <Divider", `    ${args.width ? `width="${args.width}"` : ""}`, `    type="dashed"`, `    ${args.direction ? `direction="${args.direction}"` : ""}`, `    ${args.align ? `align="${args.align}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, "  >", `    Dashed`, "  </Divider>", "  <Divider", `    ${args.width ? `width="${args.width}"` : ""}`, `    type="dotted"`, `    ${args.direction ? `direction="${args.direction}"` : ""}`, `    ${args.align ? `align="${args.align}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, "  >", `    Dotted`, "  </Divider>", "</template>"].filter(Boolean).join("\\n").trim();\n        }\n      }\n    }\n  }\n}',...(N=(w=d.parameters)==null?void 0:w.docs)==null?void 0:N.source}}};var x,f,C;l.parameters={...l.parameters,docs:{...(x=l.parameters)==null?void 0:x.docs,source:{originalSource:'{\n  name: "線條方向-垂直",\n  args: {\n    width: "1px",\n    type: "solid",\n    // direction: "horizontal",\n    // align: "center",\n    // default: "vertical",\n    className: ""\n  },\n  render: args => ({\n    components: {\n      Divider\n    },\n    setup() {\n      // Create a ref for modelValue to be used with v-model\n      return {\n        args\n      };\n    },\n    template: `\n      <div style="display: flex; height: 100px">\n        <Divider\n          :themeColor="args.themeColor"\n          :width="args.width"\n          :type="args.type"\n          direction="vertical"\n          align="start"\n          :className="args.className"\n        >\n          Start\n        </Divider>\n\n        <Divider\n          :themeColor="args.themeColor"\n          :width="args.width"\n          :type="args.type"\n          direction="vertical"\n          align="center"\n          :className="args.className"\n        >\n          Center\n        </Divider>\n\n        <Divider\n          :themeColor="args.themeColor"\n          :width="args.width"\n          :type="args.type"\n          direction="vertical"\n          align="end"\n          :className="args.className"\n        >\n          End\n        </Divider>\n      </div>\n    `\n  }),\n  // 控制 controls 中能控制的參數\n  parameters: {\n    controls: {\n      // include: [\'themeColor\', \'label\', \'value\', \'name\' ],\n      exclude: ["direction", "align", "default"]\n    },\n    docs: {\n      source: {\n        transform: (src, storyContext) => {\n          const {\n            args\n          } = storyContext;\n          return [`<script setup>`, `import { Divider } from "@ded-wds-vue/ui";`, `<\/script>`, "", "<template>", `<div style="display:flex; height: 100px">`, "  <Divider", `    ${args.width ? `width="${args.width}"` : ""}`, `    ${args.type ? `type="${args.type}"` : ""}`, `    direction="vertical"`, `    align="start"`, `    ${args.className ? `className="${args.className}"` : ""}`, "  >", `    Start`, "  </Divider>", "  <Divider", `    ${args.width ? `width="${args.width}"` : ""}`, `    ${args.type ? `type="${args.type}"` : ""}`, `    direction="vertical"`, `    align="center"`, `    ${args.className ? `className="${args.className}"` : ""}`, "  >", `    Center`, "  </Divider>", "  <Divider", `    ${args.width ? `width="${args.width}"` : ""}`, `    ${args.type ? `type="${args.type}"` : ""}`, `    direction="vertical"`, `    align="end"`, `    ${args.className ? `className="${args.className}"` : ""}`, "  >", `    End`, "  </Divider>", `</div>`, "</template>"].filter(Boolean).join("\\n").trim();\n        }\n      }\n    }\n  }\n}',...(C=(f=l.parameters)==null?void 0:f.docs)==null?void 0:C.source}}};var z,E,S;o.parameters={...o.parameters,docs:{...(z=o.parameters)==null?void 0:z.docs,source:{originalSource:'{\n  name: "線條方向-水平",\n  args: {\n    width: "1px",\n    type: "solid",\n    // direction: "horizontal",\n    // align: "center",\n    // default: "horizontal",\n    className: ""\n  },\n  render: args => ({\n    components: {\n      Divider\n    },\n    setup() {\n      // Create a ref for modelValue to be used with v-model\n      return {\n        args\n      };\n    },\n    template: `\n      <div style="display: flex; flex-direction: column; height: 100px;">\n        <Divider\n          :width="args.width"\n          :type="args.type"\n          direction="horizontal"\n          align="start"\n          :className="args.className"\n        >\n          Start\n        </Divider>\n\n        <Divider\n          :width="args.width"\n          :type="args.type"\n          direction="horizontal"\n          align="center"\n          :className="args.className"\n        >\n          Center\n        </Divider>\n\n        <Divider\n          :width="args.width"\n          :type="args.type"\n          direction="horizontal"\n          align="end"\n          :className="args.className"\n        >\n          End\n        </Divider>\n      </div>\n    `\n  }),\n  // 控制 controls 中能控制的參數\n  parameters: {\n    controls: {\n      // include: [\'themeColor\', \'label\', \'value\', \'name\' ],\n      exclude: ["direction", "align", "default"]\n    },\n    docs: {\n      source: {\n        transform: (src, storyContext) => {\n          const {\n            args\n          } = storyContext;\n          return [`<script setup>`, `import { Divider } from "@ded-wds-vue/ui";`, `<\/script>`, "", "<template>", "  <Divider", `    ${args.width ? `width="${args.width}"` : ""}`, `    ${args.type ? `type="${args.type}"` : ""}`, `    direction="horizontal"`, `    align="start"`, `    ${args.className ? `className="${args.className}"` : ""}`, "  >", `    Start`, "  </Divider>", "  <Divider", `    ${args.width ? `width="${args.width}"` : ""}`, `    ${args.type ? `type="${args.type}"` : ""}`, `    direction="horizontal"`, `    align="center"`, `    ${args.className ? `className="${args.className}"` : ""}`, "  >", `    Center`, "  </Divider>", "  <Divider", `    ${args.width ? `width="${args.width}"` : ""}`, `    ${args.type ? `type="${args.type}"` : ""}`, `    direction="horizontal"`, `    align="end"`, `    ${args.className ? `className="${args.className}"` : ""}`, "  >", `    End`, "  </Divider>", "</template>"].filter(Boolean).join("\\n").trim();\n        }\n      }\n    }\n  }\n}',...(S=(E=o.parameters)==null?void 0:E.docs)==null?void 0:S.source}}};const j=["DividerDefault","DividerContent","DividerWidth","DividerTypes","DividerColumnDirection","DividerRowDirection"];export{l as DividerColumnDirection,n as DividerContent,t as DividerDefault,o as DividerRowDirection,d as DividerTypes,s as DividerWidth,j as __namedExportsOrder,B as default};

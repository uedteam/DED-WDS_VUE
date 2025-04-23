import{_ as n}from"./Title-B7vKVqRo.js";import"./vue.esm-bundler-C-J3VMH8.js";const p={title:"Component/Typography/Title",component:n,tags:["autodocs"],argTypes:{themeColor:{description:"主題顏色",control:{type:"select",labels:{"":"none",primary:"primary",secondary:"secondary",neutral:"neutral",info:"info",success:"success",warning:"warning",error:"error"}},options:["","primary","secondary","neutral","info","success","warning","error"],table:{type:{summary:"none | primary | secondary | neutral | info | success | warning | error"},defaultValue:{summary:"none"}}},level:{description:"標題等級",control:{type:"select"},options:[0,1,2,3,4,5,6],table:{type:{summary:"0 | 1 | 2 | 3 | 4 | 5 | 6"}}},className:{description:"客製化樣式",control:{type:"text"}},default:{description:"標題內容",control:{type:"text"}}},parameters:{docs:{title:"Title",description:{component:"標題組件的呈現及說明。"}}}},s={name:"預設項目",args:{themeColor:"",level:1,className:"",default:"Title"},render:l=>({components:{Title:n},setup(){return{args:l}},template:`
      <Title
        :themeColor="args.themeColor"
        :level="args.level"
        :className="args.className"
      >{{ args.default }}</Title>
        `}),parameters:{controls:{},docs:{source:{transform:(l,a)=>{const{args:e}=a;return["<script setup>",'import { Title } from "@ded-wds-vue/ui";',"<\/script>","","<template>","  <Title",`    ${e.themeColor?`themeColor="${e.themeColor}"`:""}`,`    ${e.level!==void 0?`:level="${e.level}"`:""}`,`    ${e.className?`className="${e.className}"`:""}`,"  >",`    ${e.default||""}`,"  </Title>","</template>"].filter(Boolean).join(`
`).trim()}}}}},t={name:"標題大小",args:{themeColor:"",className:"",default:"Title"},render:l=>({components:{Title:n},setup(){return{args:l}},template:`
      <div style="display: flex; flex-direction: column; gap: 8px">
        <Title
          :level="1"
          :className="args.className"
        >
          Level: 1 {{ args.default }}
        </Title>
      
        <Title
          :level="2"
          :className="args.className"
        >
          Level: 2 {{ args.default }}
        </Title>
      
        <Title
          :level="3"
          :className="args.className"
        >
          Level: 3 {{ args.default }}
        </Title>
      
        <Title
          :level="4"
          :className="args.className"
        >
          Level: 4 {{ args.default }}
        </Title>
      
        <Title
          :level="5"
          :className="args.className"
        >
          Level: 5 {{ args.default }}
        </Title>
      
        <Title
          :level="6"
          :className="args.className"
        >
          Level: 6 {{ args.default }}
        </Title>
      
        <Title
          :level="0"
          :className="args.className"
        >
          Level: 0 {{ args.default }}
        </Title>
      </div>
      `}),parameters:{controls:{exclude:["level"]},docs:{source:{transform:(l,a)=>{const{args:e}=a;return["<script setup>",'import { Title } from "@ded-wds-vue/ui";',"<\/script>","","<template>","  <Title",`    ${e.themeColor?`themeColor="${e.themeColor}"`:""}`,'    :level="1"',`    ${e.className?`className="${e.className}"`:""}`,"  >","    Level:1 Title","  </Title>","  <Title",`    ${e.themeColor?`themeColor="${e.themeColor}"`:""}`,'    :level="2"',`    ${e.className?`className="${e.className}"`:""}`,"  >","    Level:2 Title","  </Title>","  <Title",`    ${e.themeColor?`themeColor="${e.themeColor}"`:""}`,'    :level="3"',`    ${e.className?`className="${e.className}"`:""}`,"  >","    Level:3 Title","  </Title>","  <Title",`    ${e.themeColor?`themeColor="${e.themeColor}"`:""}`,'    :level="4"',`    ${e.className?`className="${e.className}"`:""}`,"  >","    Level:4 Title","  </Title>","  <Title",`    ${e.themeColor?`themeColor="${e.themeColor}"`:""}`,'    :level="5"',`    ${e.className?`className="${e.className}"`:""}`,"  >","    Level:5 Title","  </Title>","  <Title",`    ${e.themeColor?`themeColor="${e.themeColor}"`:""}`,'    :level="6"',`    ${e.className?`className="${e.className}"`:""}`,"  >","    Level:6 Title","  </Title>","  <Title",`    ${e.themeColor?`themeColor="${e.themeColor}"`:""}`,'    :level="0"',`    ${e.className?`className="${e.className}"`:""}`,"  >","    Level:0 Title","  </Title>","</template>"].filter(Boolean).join(`
`).trim()}}}}},r={name:"主題色彩",args:{level:3,className:"",default:"Title"},render:l=>({components:{Title:n},setup(){return{args:l}},template:`
      <div style="display: flex; gap: 8px">
        <Title
          themeColor="primary"
          :level="args.level"
          :className="args.className"
        >
          {{ args.default }}
        </Title>

        <Title
          themeColor="secondary"
          :level="args.level"
          :className="args.className"
        >
          {{ args.default }}
        </Title>

        <Title
          themeColor="neutral"
          :level="args.level"
          :className="args.className"
        >
          {{ args.default }}
        </Title>

        <Title
          themeColor="info"
          :level="args.level"
          :className="args.className"
        >
          {{ args.default }}
        </Title>

        <Title
          themeColor="success"
          :level="args.level"
          :className="args.className"
        >
          {{ args.default }}
        </Title>

        <Title
          themeColor="warning"
          :level="args.level"
          :className="args.className"
        >
          {{ args.default }}
        </Title>

        <Title
          themeColor="error"
          :level="args.level"
          :className="args.className"
        >
          {{ args.default }}
        </Title>
      </div>`}),parameters:{controls:{exclude:["themeColor"]},docs:{source:{transform:(l,a)=>{const{args:e}=a;return["<script setup>",'import { Title } from "@ded-wds-vue/ui";',"<\/script>","","<template>","  <Title",'    themeColor="primary"',`    ${e.level!==void 0?`:level="${e.level}"`:""}`,`    ${e.className?`className="${e.className}"`:""}`,"  >",`    ${e.default||""}`,"  </Title>","  <Title",'    themeColor="secondary"',`    ${e.level!==void 0?`:level="${e.level}"`:""}`,`    ${e.className?`className="${e.className}"`:""}`,"  >",`    ${e.default||""}`,"  </Title>","  <Title",'    themeColor="neutral"',`    ${e.level!==void 0?`:level="${e.level}"`:""}`,`    ${e.className?`className="${e.className}"`:""}`,"  >",`    ${e.default||""}`,"  </Title>","  <Title",'    themeColor="info"',`    ${e.level!==void 0?`:level="${e.level}"`:""}`,`    ${e.className?`className="${e.className}"`:""}`,"  >",`    ${e.default||""}`,"  </Title>","  <Title",'    themeColor="success"',`    ${e.level!==void 0?`:level="${e.level}"`:""}`,`    ${e.className?`className="${e.className}"`:""}`,"  >",`    ${e.default||""}`,"  </Title>","  <Title",'    themeColor="warning"',`    ${e.level!==void 0?`:level="${e.level}"`:""}`,`    ${e.className?`className="${e.className}"`:""}`,"  >",`    ${e.default||""}`,"  </Title>","  <Title",'    themeColor="error"',`    ${e.level!==void 0?`:level="${e.level}"`:""}`,`    ${e.className?`className="${e.className}"`:""}`,"  >",`    ${e.default||""}`,"  </Title>","</template>"].filter(Boolean).join(`
`).trim()}}}}};var o,m,i;s.parameters={...s.parameters,docs:{...(o=s.parameters)==null?void 0:o.docs,source:{originalSource:`{
  name: "預設項目",
  args: {
    themeColor: "",
    level: 1,
    className: "",
    default: "Title"
  },
  render: args => ({
    components: {
      Title
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <Title
        :themeColor="args.themeColor"
        :level="args.level"
        :className="args.className"
      >{{ args.default }}</Title>
        \`
  }),
  // 控制 controls 中能控制的參數
  parameters: {
    controls: {
      // include: ['themeColor', 'label', 'value', 'name' ],
      // exclude:['default']
    },
    docs: {
      source: {
        transform: (src, storyContext) => {
          const {
            args
          } = storyContext;
          return [\`<script setup>\`, \`import { Title } from "@ded-wds-vue/ui";\`, \`<\/script>\`, "", "<template>", \`  <Title\`, \`    \${args.themeColor ? \`themeColor="\${args.themeColor}"\` : ""}\`, \`    \${args.level !== undefined ? \`:level="\${args.level}"\` : ""}\`, \`    \${args.className ? \`className="\${args.className}"\` : ""}\`, \`  >\`, \`    \${args.default || ""}\`, \`  </Title>\`, "</template>"].filter(Boolean).join("\\n").trim();
        }
      }
    }
  }
}`,...(i=(m=s.parameters)==null?void 0:m.docs)==null?void 0:i.source}}};var c,u,g;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:'{\n  name: "標題大小",\n  args: {\n    themeColor: "",\n    // level: 1,\n    className: "",\n    default: "Title"\n  },\n  render: args => ({\n    components: {\n      Title\n    },\n    setup() {\n      return {\n        args\n      };\n    },\n    template: `\n      <div style="display: flex; flex-direction: column; gap: 8px">\n        <Title\n          :level="1"\n          :className="args.className"\n        >\n          Level: 1 {{ args.default }}\n        </Title>\n      \n        <Title\n          :level="2"\n          :className="args.className"\n        >\n          Level: 2 {{ args.default }}\n        </Title>\n      \n        <Title\n          :level="3"\n          :className="args.className"\n        >\n          Level: 3 {{ args.default }}\n        </Title>\n      \n        <Title\n          :level="4"\n          :className="args.className"\n        >\n          Level: 4 {{ args.default }}\n        </Title>\n      \n        <Title\n          :level="5"\n          :className="args.className"\n        >\n          Level: 5 {{ args.default }}\n        </Title>\n      \n        <Title\n          :level="6"\n          :className="args.className"\n        >\n          Level: 6 {{ args.default }}\n        </Title>\n      \n        <Title\n          :level="0"\n          :className="args.className"\n        >\n          Level: 0 {{ args.default }}\n        </Title>\n      </div>\n      `\n  }),\n  // 控制 controls 中能控制的參數\n  parameters: {\n    controls: {\n      // include: [\'themeColor\', \'label\', \'value\', \'name\' ],\n      exclude: ["level"]\n    },\n    docs: {\n      source: {\n        transform: (src, storyContext) => {\n          const {\n            args\n          } = storyContext;\n          return [`<script setup>`, `import { Title } from "@ded-wds-vue/ui";`, `<\/script>`, "", "<template>", `  <Title`, `    ${args.themeColor ? `themeColor="${args.themeColor}"` : ""}`, `    :level="1"`, `    ${args.className ? `className="${args.className}"` : ""}`, `  >`, `    Level:1 Title`, `  </Title>`, `  <Title`, `    ${args.themeColor ? `themeColor="${args.themeColor}"` : ""}`, `    :level="2"`, `    ${args.className ? `className="${args.className}"` : ""}`, `  >`, `    Level:2 Title`, `  </Title>`, `  <Title`, `    ${args.themeColor ? `themeColor="${args.themeColor}"` : ""}`, `    :level="3"`, `    ${args.className ? `className="${args.className}"` : ""}`, `  >`, `    Level:3 Title`, `  </Title>`, `  <Title`, `    ${args.themeColor ? `themeColor="${args.themeColor}"` : ""}`, `    :level="4"`, `    ${args.className ? `className="${args.className}"` : ""}`, `  >`, `    Level:4 Title`, `  </Title>`, `  <Title`, `    ${args.themeColor ? `themeColor="${args.themeColor}"` : ""}`, `    :level="5"`, `    ${args.className ? `className="${args.className}"` : ""}`, `  >`, `    Level:5 Title`, `  </Title>`, `  <Title`, `    ${args.themeColor ? `themeColor="${args.themeColor}"` : ""}`, `    :level="6"`, `    ${args.className ? `className="${args.className}"` : ""}`, `  >`, `    Level:6 Title`, `  </Title>`, `  <Title`, `    ${args.themeColor ? `themeColor="${args.themeColor}"` : ""}`, `    :level="0"`, `    ${args.className ? `className="${args.className}"` : ""}`, `  >`, `    Level:0 Title`, `  </Title>`, "</template>"].filter(Boolean).join("\\n").trim();\n        }\n      }\n    }\n  }\n}',...(g=(u=t.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var d,v,N;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:'{\n  name: "主題色彩",\n  args: {\n    // themeColor: "",\n    level: 3,\n    className: "",\n    default: "Title"\n  },\n  render: args => ({\n    components: {\n      Title\n    },\n    setup() {\n      return {\n        args\n      };\n    },\n    template: `\n      <div style="display: flex; gap: 8px">\n        <Title\n          themeColor="primary"\n          :level="args.level"\n          :className="args.className"\n        >\n          {{ args.default }}\n        </Title>\n\n        <Title\n          themeColor="secondary"\n          :level="args.level"\n          :className="args.className"\n        >\n          {{ args.default }}\n        </Title>\n\n        <Title\n          themeColor="neutral"\n          :level="args.level"\n          :className="args.className"\n        >\n          {{ args.default }}\n        </Title>\n\n        <Title\n          themeColor="info"\n          :level="args.level"\n          :className="args.className"\n        >\n          {{ args.default }}\n        </Title>\n\n        <Title\n          themeColor="success"\n          :level="args.level"\n          :className="args.className"\n        >\n          {{ args.default }}\n        </Title>\n\n        <Title\n          themeColor="warning"\n          :level="args.level"\n          :className="args.className"\n        >\n          {{ args.default }}\n        </Title>\n\n        <Title\n          themeColor="error"\n          :level="args.level"\n          :className="args.className"\n        >\n          {{ args.default }}\n        </Title>\n      </div>`\n  }),\n  // 控制 controls 中能控制的參數\n  parameters: {\n    controls: {\n      // include: [\'themeColor\', \'label\', \'value\', \'name\' ],\n      exclude: ["themeColor"]\n    },\n    docs: {\n      source: {\n        transform: (src, storyContext) => {\n          const {\n            args\n          } = storyContext;\n          return [`<script setup>`, `import { Title } from "@ded-wds-vue/ui";`, `<\/script>`, "", "<template>", `  <Title`, `    themeColor="primary"`, `    ${args.level !== undefined ? `:level="${args.level}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, `  >`, `    ${args.default || ""}`, `  </Title>`, `  <Title`, `    themeColor="secondary"`, `    ${args.level !== undefined ? `:level="${args.level}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, `  >`, `    ${args.default || ""}`, `  </Title>`, `  <Title`, `    themeColor="neutral"`, `    ${args.level !== undefined ? `:level="${args.level}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, `  >`, `    ${args.default || ""}`, `  </Title>`, `  <Title`, `    themeColor="info"`, `    ${args.level !== undefined ? `:level="${args.level}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, `  >`, `    ${args.default || ""}`, `  </Title>`, `  <Title`, `    themeColor="success"`, `    ${args.level !== undefined ? `:level="${args.level}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, `  >`, `    ${args.default || ""}`, `  </Title>`, `  <Title`, `    themeColor="warning"`, `    ${args.level !== undefined ? `:level="${args.level}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, `  >`, `    ${args.default || ""}`, `  </Title>`, `  <Title`, `    themeColor="error"`, `    ${args.level !== undefined ? `:level="${args.level}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, `  >`, `    ${args.default || ""}`, `  </Title>`, "</template>"].filter(Boolean).join("\\n").trim();\n        }\n      }\n    }\n  }\n}',...(N=(v=r.parameters)==null?void 0:v.docs)==null?void 0:N.source}}};const f=["HeadingDefault","HeadingSizeDefault","HeadingColorDefault"];export{r as HeadingColorDefault,s as HeadingDefault,t as HeadingSizeDefault,f as __namedExportsOrder,p as default};

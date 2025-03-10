import{_ as n}from"./Badge-DHrOjejC.js";import{_ as o}from"./Icon-rDwD1VSn.js";import"./vue.esm-bundler-CeRU4-k3.js";const w={title:"Component/Badge",component:n,components:{Icon:o},tags:["autodocs"],argTypes:{themeColor:{description:"主題顏色",control:{type:"select"},options:["primary","secondary","neutral","info","success","warning","error"],table:{type:{summary:"primary | secondary | neutral | info | success | warning | error"}}},isShowDot:{description:"是否顯示圓點",control:{type:"boolean"}},value:{description:"數值",control:{type:"number"}},limit:{description:"數值顯示上限",control:{type:"number"}},className:{description:"客製化樣式",control:{type:"text"}},default:{description:"圖標插槽",control:{type:"text"},table:{type:{summary:"Vue Component | HTML"}}}},parameters:{docs:{title:"Badge",description:{component:"徽章組件的呈現及說明。"}}}},i={name:"預設項目",args:{themeColor:"error",isShowDot:!1,value:100,limit:99,className:"",default:'<Icon name="SvgNotification" size="26"></Icon>'},render:a=>({components:{Badge:n,Icon:o},setup(){return{args:a}},template:`
            <Badge 
                :themeColor="args.themeColor"
                :isShowDot="args.isShowDot"
                :value="args.value"
                :limit="args.limit"
                :className="args.className"
            >   
                <Icon name="SvgNotification" size="26"></Icon>
            </Badge>
        `}),parameters:{controls:{},docs:{source:{transform:(a,s)=>{const{args:e}=s;return["<script setup>",'import { Badge, Icon } from "@ded-wds-vue/ui";',"<\/script>","","<template>","  <Badge",`    ${e.themeColor?`themeColor="${e.themeColor}"`:""}`,`    ${e.isShowDot!==void 0?`:isShowDot="${e.isShowDot}"`:""}`,`    ${e.value!==void 0?`:value="${e.value}"`:""}`,`    ${e.limit!==void 0?`:limit="${e.limit}"`:""}`,`    ${e.className?`className="${e.className}"`:""}`,"  >",'    <Icon name="SvgNotification" size="26"></Icon>',"  </Badge>","</template>"].join(`
`).trim()}}}}},t={name:"外觀類型",args:{themeColor:"error",value:999,limit:99,className:"",default:'<Icon name="SvgNotification" size="26"></Icon>'},render:a=>({components:{Badge:n,Icon:o},setup(){return{args:a}},template:`
            <div style="display:flex; gap:24px;">
                <Badge
                    :themeColor="args.themeColor"
                    :isShowDot= true
                    :value="args.value"
                    :limit="args.limit"
                    :className="args.className"
                >
                    <Icon name="SvgNotification" size="26"></Icon>
                </Badge>
                <Badge
                    :themeColor="args.themeColor"
                    :isShowDot= false
                    :value="args.value"
                    :limit="args.limit"
                    :className="args.className"
                >
                    <Icon name="SvgNotification" size="26"></Icon>
                </Badge>
            </div>
        `}),parameters:{controls:{exclude:["isShowDot"]},docs:{source:{transform:(a,s)=>{const{args:e}=s;return["<script setup>",'import { Badge, Icon } from "@ded-wds-vue/ui";',"<\/script>","","<template>","  <Badge",`    ${e.themeColor?`themeColor="${e.themeColor}"`:""}`,'    :isShowDot="true"',`    ${e.value!==void 0?`:value="${e.value}"`:""}`,`    ${e.limit!==void 0?`:limit="${e.limit}"`:""}`,`    ${e.className?`className="${e.className}"`:""}`,"  >",'    <Icon name="SvgNotification" size="26"></Icon>',"  </Badge>","  <Badge",`    ${e.themeColor?`themeColor="${e.themeColor}"`:""}`,'    :isShowDot="false"',`    ${e.value!==void 0?`:value="${e.value}"`:""}`,`    ${e.limit!==void 0?`:limit="${e.limit}"`:""}`,`    ${e.className?`className="${e.className}"`:""}`,"  >",'    <Icon name="SvgNotification" size="26"></Icon>',"  </Badge>","</template>"].join(`
`).trim()}}}}},l={name:"數值顯示上限",args:{themeColor:"error",isShowDot:!1,value:999,limit:99,className:"",default:'<Icon name="SvgNotification" size="26"></Icon>'},render:a=>({components:{Badge:n,Icon:o},setup(){return{args:a}},template:`
            <div style="display:flex; gap:60px; margin-bottom: 24px;">
                <Badge
                    :themeColor="args.themeColor"
                    :isShowDot="args.isShowDot"
                    :value="98"
                    :limit="99"
                    :className="args.className"
                >
                    <Icon name="SvgNotification" size="26"></Icon>
                </Badge>
                <Badge
                    :themeColor="args.themeColor"
                    :isShowDot="args.isShowDot"
                    :value="100"
                    :limit="99"
                    :className="args.className"
                >
                    <Icon name="SvgNotification" size="26"></Icon>
                </Badge>
            </div>
        `}),parameters:{controls:{},docs:{source:{transform:(a,s)=>{const{args:e}=s;return["<script setup>",'import { Badge, Icon } from "@ded-wds-vue/ui";',"<\/script>","","<template>","  <Badge",`    ${e.themeColor?`themeColor="${e.themeColor}"`:""}`,"    :isShowDot= false",'    :value="98"','    :limit="99"',`    ${e.className?`className="${e.className}"`:""}`,"  >",'    <Icon name="SvgNotification" size="26"></Icon>',"  </Badge>","  <Badge",`    ${e.themeColor?`themeColor="${e.themeColor}"`:""}`,"    :isShowDot= false",'    :value="100"','    :limit="99"',`    ${e.className?`className="${e.className}"`:""}`,"  >",'    <Icon name="SvgNotification" size="26"></Icon>',"  </Badge>","</template>"].join(`
`).trim()}}}}},r={name:"主題色彩",args:{themeColor:"error",isShowDot:!1,value:999,limit:99,className:"",default:'<Icon name="SvgNotification" size="26"></Icon>'},render:a=>({components:{Badge:n,Icon:o},setup(){return{args:a}},template:`
            <div style="display:flex; gap:56px; margin-bottom: 24px;">
                <Badge
                    themeColor="primary"
                    :isShowDot= true
                    :value="args.value"
                    :limit="args.limit"
                    :className="args.className"
                >
                    <Icon name="SvgNotification" size="26"></Icon>
                </Badge>
                <Badge
                    themeColor="secondary"
                    :isShowDot= true
                    :value="args.value"
                    :limit="args.limit"
                    :className="args.className"
                >
                    <Icon name="SvgNotification" size="26"></Icon>
                </Badge>
                <Badge
                    themeColor="neutral"
                    :isShowDot= true
                    :value="args.value"
                    :limit="args.limit"
                    :className="args.className"
                >
                    <Icon name="SvgNotification" size="26"></Icon>
                </Badge>
                <Badge
                    themeColor="info"
                    :isShowDot= true
                    :value="args.value"
                    :limit="args.limit"
                    :className="args.className"
                >
                    <Icon name="SvgNotification" size="26"></Icon>
                </Badge>
                <Badge
                    themeColor="success"
                    :isShowDot= true
                    :value="args.value"
                    :limit="args.limit"
                    :className="args.className"
                >
                    <Icon name="SvgNotification" size="26"></Icon>
                </Badge>
                <Badge
                    themeColor="warning"
                    :isShowDot= true
                    :value="args.value"
                    :limit="args.limit"
                    :className="args.className"
                >
                    <Icon name="SvgNotification" size="26"></Icon>
                </Badge>
                <Badge
                    themeColor="error"
                    :isShowDot= true
                    :value="args.value"
                    :limit="args.limit"
                    :className="args.className"
                >
                    <Icon name="SvgNotification" size="26"></Icon>
                </Badge>
            </div>
            <div style="display:flex; gap:56px">
                <Badge
                    themeColor="primary"
                    :isShowDot= false
                    :value="args.value"
                    :limit="args.limit"
                    :className="args.className"
                >
                    <Icon name="SvgNotification" size="26"></Icon>
                </Badge>
                <Badge
                    themeColor="secondary"
                    :isShowDot= false
                    :value="args.value"
                    :limit="args.limit"
                    :className="args.className"
                >
                    <Icon name="SvgNotification" size="26"></Icon>
                </Badge>
                <Badge
                    themeColor="neutral"
                    :isShowDot= false
                    :value="args.value"
                    :limit="args.limit"
                    :className="args.className"
                >
                    <Icon name="SvgNotification" size="26"></Icon>
                </Badge>
                <Badge
                    themeColor="info"
                    :isShowDot= false
                    :value="args.value"
                    :limit="args.limit"
                    :className="args.className"
                >
                    <Icon name="SvgNotification" size="26"></Icon>
                </Badge>
                <Badge
                    themeColor="success"
                    :isShowDot= false
                    :value="args.value"
                    :limit="args.limit"
                    :className="args.className"
                >
                    <Icon name="SvgNotification" size="26"></Icon>
                </Badge>
                <Badge
                    themeColor="warning"
                    :isShowDot= false
                    :value="args.value"
                    :limit="args.limit"
                    :className="args.className"
                >
                    <Icon name="SvgNotification" size="26"></Icon>
                </Badge>
                <Badge
                    themeColor="error"
                    :isShowDot= false
                    :value="args.value"
                    :limit="args.limit"
                    :className="args.className"
                >
                    <Icon name="SvgNotification" size="26"></Icon>
                </Badge>
            </div>
        `}),parameters:{controls:{exclude:["themeColor","isShowDot"]},docs:{source:{transform:(a,s)=>{const{args:e}=s;return["<script setup>",'import { Badge, Icon } from "@ded-wds-vue/ui";',"<\/script>","","<template>","  <Badge",'    themeColor="primary"',"    :isShowDot= true",`    ${e.value!==void 0?`:value="${e.value}"`:""}`,`    ${e.limit!==void 0?`:limit="${e.limit}"`:""}`,`    ${e.className?`className="${e.className}"`:""}`,"  >",'    <Icon name="SvgNotification" size="26"></Icon>',"  </Badge>","  <Badge",'    themeColor="secondary"',"    :isShowDot= true",`    ${e.value!==void 0?`:value="${e.value}"`:""}`,`    ${e.limit!==void 0?`:limit="${e.limit}"`:""}`,`    ${e.className?`className="${e.className}"`:""}`,"  >",'    <Icon name="SvgNotification" size="26"></Icon>',"  </Badge>","  <Badge",'    themeColor="neutral"',"    :isShowDot= true",`    ${e.value!==void 0?`:value="${e.value}"`:""}`,`    ${e.limit!==void 0?`:limit="${e.limit}"`:""}`,`    ${e.className?`className="${e.className}"`:""}`,"  >",'    <Icon name="SvgNotification" size="26"></Icon>',"  </Badge>","  <Badge",'    themeColor="info"',"    :isShowDot= true",`    ${e.value!==void 0?`:value="${e.value}"`:""}`,`    ${e.limit!==void 0?`:limit="${e.limit}"`:""}`,`    ${e.className?`className="${e.className}"`:""}`,"  >",'    <Icon name="SvgNotification" size="26"></Icon>',"  </Badge>","  <Badge",'    themeColor="success"',"    :isShowDot= true",`    ${e.value!==void 0?`:value="${e.value}"`:""}`,`    ${e.limit!==void 0?`:limit="${e.limit}"`:""}`,`    ${e.className?`className="${e.className}"`:""}`,"  >",'    <Icon name="SvgNotification" size="26"></Icon>',"  </Badge>","  <Badge",'    themeColor="warning"',"    :isShowDot= true",`    ${e.value!==void 0?`:value="${e.value}"`:""}`,`    ${e.limit!==void 0?`:limit="${e.limit}"`:""}`,`    ${e.className?`className="${e.className}"`:""}`,"  >",'    <Icon name="SvgNotification" size="26"></Icon>',"  </Badge>","  <Badge",'    themeColor="error"',"    :isShowDot= true",`    ${e.value!==void 0?`:value="${e.value}"`:""}`,`    ${e.limit!==void 0?`:limit="${e.limit}"`:""}`,`    ${e.className?`className="${e.className}"`:""}`,"  >",'    <Icon name="SvgNotification" size="26"></Icon>',"  </Badge>","  <Badge",'    themeColor="primary"',"    :isShowDot= false",`    ${e.value!==void 0?`:value="${e.value}"`:""}`,`    ${e.limit!==void 0?`:limit="${e.limit}"`:""}`,`    ${e.className?`className="${e.className}"`:""}`,"  >",'    <Icon name="SvgNotification" size="26"></Icon>',"  </Badge>","  <Badge",'    themeColor="secondary"',"    :isShowDot= false",`    ${e.value!==void 0?`:value="${e.value}"`:""}`,`    ${e.limit!==void 0?`:limit="${e.limit}"`:""}`,`    ${e.className?`className="${e.className}"`:""}`,"  >",'    <Icon name="SvgNotification" size="26"></Icon>',"  </Badge>","  <Badge",'    themeColor="neutral"',"    :isShowDot= false",`    ${e.value!==void 0?`:value="${e.value}"`:""}`,`    ${e.limit!==void 0?`:limit="${e.limit}"`:""}`,`    ${e.className?`className="${e.className}"`:""}`,"  >",'    <Icon name="SvgNotification" size="26"></Icon>',"  </Badge>","  <Badge",'    themeColor="info"',"    :isShowDot= false",`    ${e.value!==void 0?`:value="${e.value}"`:""}`,`    ${e.limit!==void 0?`:limit="${e.limit}"`:""}`,`    ${e.className?`className="${e.className}"`:""}`,"  >",'    <Icon name="SvgNotification" size="26"></Icon>',"  </Badge>","  <Badge",'    themeColor="success"',"    :isShowDot= false",`    ${e.value!==void 0?`:value="${e.value}"`:""}`,`    ${e.limit!==void 0?`:limit="${e.limit}"`:""}`,`    ${e.className?`className="${e.className}"`:""}`,"  >",'    <Icon name="SvgNotification" size="26"></Icon>',"  </Badge>","  <Badge",'    themeColor="warning"',"    :isShowDot= false",`    ${e.value!==void 0?`:value="${e.value}"`:""}`,`    ${e.limit!==void 0?`:limit="${e.limit}"`:""}`,`    ${e.className?`className="${e.className}"`:""}`,"  >",'    <Icon name="SvgNotification" size="26"></Icon>',"  </Badge>","  <Badge",'    themeColor="error"',"    :isShowDot= false",`    ${e.value!==void 0?`:value="${e.value}"`:""}`,`    ${e.limit!==void 0?`:limit="${e.limit}"`:""}`,`    ${e.className?`className="${e.className}"`:""}`,"  >",'    <Icon name="SvgNotification" size="26"></Icon>',"  </Badge>","</template>"].join(`
`).trim()}}}}};var m,c,g;i.parameters={...i.parameters,docs:{...(m=i.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: "預設項目",
  args: {
    themeColor: "error",
    isShowDot: false,
    value: 100,
    limit: 99,
    className: "",
    default: \`<Icon name="SvgNotification" size="26"></Icon>\`
  },
  render: args => ({
    components: {
      Badge,
      Icon
    },
    setup() {
      return {
        args
      };
    },
    template: \`
            <Badge 
                :themeColor="args.themeColor"
                :isShowDot="args.isShowDot"
                :value="args.value"
                :limit="args.limit"
                :className="args.className"
            >   
                <Icon name="SvgNotification" size="26"></Icon>
            </Badge>
        \`
  }),
  // 控制 controls 中能控制的參數
  parameters: {
    controls: {
      // include: ['themeColor', 'value', 'value', 'name' ],
    },
    docs: {
      source: {
        transform: (src, storyContext) => {
          const {
            args
          } = storyContext;
          return [\`<script setup>\`, \`import { Badge, Icon } from "@ded-wds-vue/ui";\`, \`<\/script>\`, '', '<template>', '  <Badge', \`    \${args.themeColor ? \`themeColor="\${args.themeColor}"\` : ""}\`, \`    \${args.isShowDot !== undefined ? \`:isShowDot="\${args.isShowDot}"\` : ""}\`, \`    \${args.value !== undefined ? \`:value="\${args.value}"\` : ""}\`, \`    \${args.limit !== undefined ? \`:limit="\${args.limit}"\` : ""}\`, \`    \${args.className ? \`className="\${args.className}"\` : ""}\`, '  >', '    <Icon name="SvgNotification" size="26"></Icon>', '  </Badge>', '</template>'].join('\\n').trim();
        }
      }
    }
  }
}`,...(g=(c=i.parameters)==null?void 0:c.docs)==null?void 0:g.source}}};var u,d,v;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  name: "外觀類型",
  args: {
    themeColor: "error",
    // isShowDot: false,
    value: 999,
    limit: 99,
    className: "",
    default: \`<Icon name="SvgNotification" size="26"></Icon>\`
  },
  render: args => ({
    components: {
      Badge,
      Icon
    },
    setup() {
      return {
        args
      };
    },
    template: \`
            <div style="display:flex; gap:24px;">
                <Badge
                    :themeColor="args.themeColor"
                    :isShowDot= true
                    :value="args.value"
                    :limit="args.limit"
                    :className="args.className"
                >
                    <Icon name="SvgNotification" size="26"></Icon>
                </Badge>
                <Badge
                    :themeColor="args.themeColor"
                    :isShowDot= false
                    :value="args.value"
                    :limit="args.limit"
                    :className="args.className"
                >
                    <Icon name="SvgNotification" size="26"></Icon>
                </Badge>
            </div>
        \`
  }),
  // 控制 controls 中能控制的參數
  parameters: {
    controls: {
      exclude: ['isShowDot']
    },
    docs: {
      source: {
        transform: (src, storyContext) => {
          const {
            args
          } = storyContext;
          return [\`<script setup>\`, \`import { Badge, Icon } from "@ded-wds-vue/ui";\`, \`<\/script>\`, '', '<template>', '  <Badge', \`    \${args.themeColor ? \`themeColor="\${args.themeColor}"\` : ""}\`, \`    :isShowDot="true"\`, \`    \${args.value !== undefined ? \`:value="\${args.value}"\` : ""}\`, \`    \${args.limit !== undefined ? \`:limit="\${args.limit}"\` : ""}\`, \`    \${args.className ? \`className="\${args.className}"\` : ""}\`, '  >', '    <Icon name="SvgNotification" size="26"></Icon>', '  </Badge>', '  <Badge', \`    \${args.themeColor ? \`themeColor="\${args.themeColor}"\` : ""}\`, \`    :isShowDot="false"\`, \`    \${args.value !== undefined ? \`:value="\${args.value}"\` : ""}\`, \`    \${args.limit !== undefined ? \`:limit="\${args.limit}"\` : ""}\`, \`    \${args.className ? \`className="\${args.className}"\` : ""}\`, '  >', '    <Icon name="SvgNotification" size="26"></Icon>', '  </Badge>', '</template>'].join('\\n').trim();
        }
      }
    }
  }
}`,...(v=(d=t.parameters)==null?void 0:d.docs)==null?void 0:v.source}}};var N,f,$;l.parameters={...l.parameters,docs:{...(N=l.parameters)==null?void 0:N.docs,source:{originalSource:`{
  name: "數值顯示上限",
  args: {
    themeColor: "error",
    isShowDot: false,
    value: 999,
    limit: 99,
    className: "",
    default: \`<Icon name="SvgNotification" size="26"></Icon>\`
  },
  render: args => ({
    components: {
      Badge,
      Icon
    },
    setup() {
      return {
        args
      };
    },
    template: \`
            <div style="display:flex; gap:60px; margin-bottom: 24px;">
                <Badge
                    :themeColor="args.themeColor"
                    :isShowDot="args.isShowDot"
                    :value="98"
                    :limit="99"
                    :className="args.className"
                >
                    <Icon name="SvgNotification" size="26"></Icon>
                </Badge>
                <Badge
                    :themeColor="args.themeColor"
                    :isShowDot="args.isShowDot"
                    :value="100"
                    :limit="99"
                    :className="args.className"
                >
                    <Icon name="SvgNotification" size="26"></Icon>
                </Badge>
            </div>
        \`
  }),
  // 控制 controls 中能控制的參數
  parameters: {
    controls: {
      // include: ['themeColor', 'value', 'value', 'name' ],
      // exclude: [ 'default' ],
    },
    docs: {
      source: {
        transform: (src, storyContext) => {
          const {
            args
          } = storyContext;
          return [\`<script setup>\`, \`import { Badge, Icon } from "@ded-wds-vue/ui";\`, \`<\/script>\`, '', '<template>', '  <Badge', \`    \${args.themeColor ? \`themeColor="\${args.themeColor}"\` : ""}\`, \`    :isShowDot= false\`, \`    :value="98"\`, \`    :limit="99"\`, \`    \${args.className ? \`className="\${args.className}"\` : ""}\`, '  >', '    <Icon name="SvgNotification" size="26"></Icon>', '  </Badge>', '  <Badge', \`    \${args.themeColor ? \`themeColor="\${args.themeColor}"\` : ""}\`, \`    :isShowDot= false\`, \`    :value="100"\`, \`    :limit="99"\`, \`    \${args.className ? \`className="\${args.className}"\` : ""}\`, '  >', '    <Icon name="SvgNotification" size="26"></Icon>', '  </Badge>', '</template>'].join('\\n').trim();
        }
      }
    }
  }
}`,...($=(f=l.parameters)==null?void 0:f.docs)==null?void 0:$.source}}};var h,S,I;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:'{\n  name: "主題色彩",\n  args: {\n    themeColor: "error",\n    isShowDot: false,\n    value: 999,\n    limit: 99,\n    className: "",\n    default: `<Icon name="SvgNotification" size="26"></Icon>`\n  },\n  render: args => ({\n    components: {\n      Badge,\n      Icon\n    },\n    setup() {\n      return {\n        args\n      };\n    },\n    template: `\n            <div style="display:flex; gap:56px; margin-bottom: 24px;">\n                <Badge\n                    themeColor="primary"\n                    :isShowDot= true\n                    :value="args.value"\n                    :limit="args.limit"\n                    :className="args.className"\n                >\n                    <Icon name="SvgNotification" size="26"></Icon>\n                </Badge>\n                <Badge\n                    themeColor="secondary"\n                    :isShowDot= true\n                    :value="args.value"\n                    :limit="args.limit"\n                    :className="args.className"\n                >\n                    <Icon name="SvgNotification" size="26"></Icon>\n                </Badge>\n                <Badge\n                    themeColor="neutral"\n                    :isShowDot= true\n                    :value="args.value"\n                    :limit="args.limit"\n                    :className="args.className"\n                >\n                    <Icon name="SvgNotification" size="26"></Icon>\n                </Badge>\n                <Badge\n                    themeColor="info"\n                    :isShowDot= true\n                    :value="args.value"\n                    :limit="args.limit"\n                    :className="args.className"\n                >\n                    <Icon name="SvgNotification" size="26"></Icon>\n                </Badge>\n                <Badge\n                    themeColor="success"\n                    :isShowDot= true\n                    :value="args.value"\n                    :limit="args.limit"\n                    :className="args.className"\n                >\n                    <Icon name="SvgNotification" size="26"></Icon>\n                </Badge>\n                <Badge\n                    themeColor="warning"\n                    :isShowDot= true\n                    :value="args.value"\n                    :limit="args.limit"\n                    :className="args.className"\n                >\n                    <Icon name="SvgNotification" size="26"></Icon>\n                </Badge>\n                <Badge\n                    themeColor="error"\n                    :isShowDot= true\n                    :value="args.value"\n                    :limit="args.limit"\n                    :className="args.className"\n                >\n                    <Icon name="SvgNotification" size="26"></Icon>\n                </Badge>\n            </div>\n            <div style="display:flex; gap:56px">\n                <Badge\n                    themeColor="primary"\n                    :isShowDot= false\n                    :value="args.value"\n                    :limit="args.limit"\n                    :className="args.className"\n                >\n                    <Icon name="SvgNotification" size="26"></Icon>\n                </Badge>\n                <Badge\n                    themeColor="secondary"\n                    :isShowDot= false\n                    :value="args.value"\n                    :limit="args.limit"\n                    :className="args.className"\n                >\n                    <Icon name="SvgNotification" size="26"></Icon>\n                </Badge>\n                <Badge\n                    themeColor="neutral"\n                    :isShowDot= false\n                    :value="args.value"\n                    :limit="args.limit"\n                    :className="args.className"\n                >\n                    <Icon name="SvgNotification" size="26"></Icon>\n                </Badge>\n                <Badge\n                    themeColor="info"\n                    :isShowDot= false\n                    :value="args.value"\n                    :limit="args.limit"\n                    :className="args.className"\n                >\n                    <Icon name="SvgNotification" size="26"></Icon>\n                </Badge>\n                <Badge\n                    themeColor="success"\n                    :isShowDot= false\n                    :value="args.value"\n                    :limit="args.limit"\n                    :className="args.className"\n                >\n                    <Icon name="SvgNotification" size="26"></Icon>\n                </Badge>\n                <Badge\n                    themeColor="warning"\n                    :isShowDot= false\n                    :value="args.value"\n                    :limit="args.limit"\n                    :className="args.className"\n                >\n                    <Icon name="SvgNotification" size="26"></Icon>\n                </Badge>\n                <Badge\n                    themeColor="error"\n                    :isShowDot= false\n                    :value="args.value"\n                    :limit="args.limit"\n                    :className="args.className"\n                >\n                    <Icon name="SvgNotification" size="26"></Icon>\n                </Badge>\n            </div>\n        `\n  }),\n  // 控制 controls 中能控制的參數\n  parameters: {\n    controls: {\n      // include: [\'themeColor\', \'value\', \'value\', \'name\' ],\n      exclude: [\'themeColor\', \'isShowDot\']\n    },\n    docs: {\n      source: {\n        transform: (src, storyContext) => {\n          const {\n            args\n          } = storyContext;\n          return [`<script setup>`, `import { Badge, Icon } from "@ded-wds-vue/ui";`, `<\/script>`, \'\', \'<template>\', \'  <Badge\', `    themeColor="primary"`, `    :isShowDot= true`, `    ${args.value !== undefined ? `:value="${args.value}"` : ""}`, `    ${args.limit !== undefined ? `:limit="${args.limit}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, \'  >\', \'    <Icon name="SvgNotification" size="26"></Icon>\', \'  </Badge>\', \'  <Badge\', `    themeColor="secondary"`, `    :isShowDot= true`, `    ${args.value !== undefined ? `:value="${args.value}"` : ""}`, `    ${args.limit !== undefined ? `:limit="${args.limit}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, \'  >\', \'    <Icon name="SvgNotification" size="26"></Icon>\', \'  </Badge>\', \'  <Badge\', `    themeColor="neutral"`, `    :isShowDot= true`, `    ${args.value !== undefined ? `:value="${args.value}"` : ""}`, `    ${args.limit !== undefined ? `:limit="${args.limit}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, \'  >\', \'    <Icon name="SvgNotification" size="26"></Icon>\', \'  </Badge>\', \'  <Badge\', `    themeColor="info"`, `    :isShowDot= true`, `    ${args.value !== undefined ? `:value="${args.value}"` : ""}`, `    ${args.limit !== undefined ? `:limit="${args.limit}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, \'  >\', \'    <Icon name="SvgNotification" size="26"></Icon>\', \'  </Badge>\', \'  <Badge\', `    themeColor="success"`, `    :isShowDot= true`, `    ${args.value !== undefined ? `:value="${args.value}"` : ""}`, `    ${args.limit !== undefined ? `:limit="${args.limit}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, \'  >\', \'    <Icon name="SvgNotification" size="26"></Icon>\', \'  </Badge>\', \'  <Badge\', `    themeColor="warning"`, `    :isShowDot= true`, `    ${args.value !== undefined ? `:value="${args.value}"` : ""}`, `    ${args.limit !== undefined ? `:limit="${args.limit}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, \'  >\', \'    <Icon name="SvgNotification" size="26"></Icon>\', \'  </Badge>\', \'  <Badge\', `    themeColor="error"`, `    :isShowDot= true`, `    ${args.value !== undefined ? `:value="${args.value}"` : ""}`, `    ${args.limit !== undefined ? `:limit="${args.limit}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, \'  >\', \'    <Icon name="SvgNotification" size="26"></Icon>\', \'  </Badge>\', \'  <Badge\', `    themeColor="primary"`, `    :isShowDot= false`, `    ${args.value !== undefined ? `:value="${args.value}"` : ""}`, `    ${args.limit !== undefined ? `:limit="${args.limit}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, \'  >\', \'    <Icon name="SvgNotification" size="26"></Icon>\', \'  </Badge>\', \'  <Badge\', `    themeColor="secondary"`, `    :isShowDot= false`, `    ${args.value !== undefined ? `:value="${args.value}"` : ""}`, `    ${args.limit !== undefined ? `:limit="${args.limit}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, \'  >\', \'    <Icon name="SvgNotification" size="26"></Icon>\', \'  </Badge>\', \'  <Badge\', `    themeColor="neutral"`, `    :isShowDot= false`, `    ${args.value !== undefined ? `:value="${args.value}"` : ""}`, `    ${args.limit !== undefined ? `:limit="${args.limit}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, \'  >\', \'    <Icon name="SvgNotification" size="26"></Icon>\', \'  </Badge>\', \'  <Badge\', `    themeColor="info"`, `    :isShowDot= false`, `    ${args.value !== undefined ? `:value="${args.value}"` : ""}`, `    ${args.limit !== undefined ? `:limit="${args.limit}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, \'  >\', \'    <Icon name="SvgNotification" size="26"></Icon>\', \'  </Badge>\', \'  <Badge\', `    themeColor="success"`, `    :isShowDot= false`, `    ${args.value !== undefined ? `:value="${args.value}"` : ""}`, `    ${args.limit !== undefined ? `:limit="${args.limit}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, \'  >\', \'    <Icon name="SvgNotification" size="26"></Icon>\', \'  </Badge>\', \'  <Badge\', `    themeColor="warning"`, `    :isShowDot= false`, `    ${args.value !== undefined ? `:value="${args.value}"` : ""}`, `    ${args.limit !== undefined ? `:limit="${args.limit}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, \'  >\', \'    <Icon name="SvgNotification" size="26"></Icon>\', \'  </Badge>\', \'  <Badge\', `    themeColor="error"`, `    :isShowDot= false`, `    ${args.value !== undefined ? `:value="${args.value}"` : ""}`, `    ${args.limit !== undefined ? `:limit="${args.limit}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, \'  >\', \'    <Icon name="SvgNotification" size="26"></Icon>\', \'  </Badge>\', \'</template>\'].join(\'\\n\').trim();\n        }\n      }\n    }\n  }\n}',...(I=(S=r.parameters)==null?void 0:S.docs)==null?void 0:I.source}}};const D=["BadgeDefault","BadgeStyle","BadgeLimit","BadgeThemeColor"];export{i as BadgeDefault,l as BadgeLimit,t as BadgeStyle,r as BadgeThemeColor,D as __namedExportsOrder,w as default};

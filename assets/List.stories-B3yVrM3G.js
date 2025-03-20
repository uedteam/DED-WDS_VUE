import{_ as o}from"./List-C1GUXAb9.js";import{a as c}from"./index-B-lxVbXh.js";import"./vue.esm-bundler-CC1hEtM-.js";import"./Icon-C3V5hff5.js";import"./v4-CtRu48qb.js";function l(t){return`[
        ${t.map(a=>`{
            ${[a.label?`label: '${a.label}'`:"",a.value?`value: '${a.value}'`:"",a.href?`href: '${a.href}'`:"",a.prefix?`prefix: '${a.prefix}'`:"",a.isDisabled!==void 0?`isDisabled: ${a.isDisabled}`:""].filter(Boolean).join(`,
            `)}
        }`).join(`,
        `)}
    ]`}const u=[{label:"Option1",value:"option1",prefix:"SvgAccount",isDisabled:!0},{label:"Option2",value:"option2",href:"#",prefix:"SvgAccount"},{label:"Option3",value:"option3",href:"#",prefix:"SvgAccount"}],k={title:"Component/List",component:o,tags:["autodocs"],argTypes:{dataSource:{description:"資料來源",control:{type:"object"},table:{type:{summary:"{ label: string, value: string, href: string, prefix: string, isDisabled: boolean }[]"}}},hasOutline:{description:"是否為選單",control:{type:"boolean"}},hasDivider:{description:"是否有分隔線",control:{type:"boolean"}},className:{description:"客製化樣式",control:{type:"text"}},onSelect:{description:"選擇項目時觸發的事件",control:!1,table:{category:"EVENTS",type:{summary:"emit"},defaultValue:{summary:()=>({})}}}},parameters:{docs:{title:"List",description:{component:"清單組件的呈現及說明。"}}}},n={name:"預設項目",args:{dataSource:u,hasOutline:!1,hasDivider:!1,className:""},render:t=>({components:{List:o},setup(){return{args:t,handleItemClick:c("onSelect")}},template:`
      <List
        :dataSource="args.dataSource"
        :hasOutline="args.hasOutline"
        :hasDivider="args.hasDivider"
        :className="args.className"
        @onSelect="handleItemClick"
      >
      </List>
    `}),parameters:{controls:{exclude:["default"]},docs:{source:{transform:(t,a)=>{const{args:e}=a,s=l(e.dataSource);return["<script setup>",'import { List } from "@ded-wds-vue/ui";',"const handleItemClick = () => {};","<\/script>","","<template>","  <List",`    ${s?`:dataSource="${s}"`:""}`,`    ${e.hasOutline!==void 0?`:hasOutline="${e.hasOutline}"`:""}`,`    ${e.hasDivider!==void 0?`:hasDivider="${e.hasDivider}"`:""}`,`    ${e.className?`className="${e.className}"`:""}`,'    @onSelect="handleItemClick()"',"  ></List>","</template>"].filter(Boolean).join(`
`).trim()}}}}},r={name:"清單樣式-外框",args:{dataSource:u,hasDivider:!1,className:""},render:t=>({components:{List:o},setup(){return{args:t,handleItemClick:c("onSelect")}},template:`
      <List
        :dataSource="args.dataSource"
        :hasOutline="true"
        :hasDivider="args.hasDivider"
        :className="args.className"
        @onSelect="handleItemClick"
      >
      </List>
    `}),parameters:{controls:{exclude:["hasOutline","default"]},docs:{source:{transform:(t,a)=>{const{args:e}=a,s=l(e.dataSource);return["<script setup>",'import { List } from "@ded-wds-vue/ui";',"const handleItemClick = () => {};","<\/script>","","<template>","  <List",`    ${s?`:dataSource="${s}"`:""}`,'    :hasOutline="true"',`    ${e.hasDivider!==void 0?`:hasDivider="${e.hasDivider}"`:""}`,`    ${e.className?`className="${e.className}"`:""}`,'    @onSelect="handleItemClick()"',"  ></List>","</template>"].filter(Boolean).join(`
`).trim()}}}}},i={name:"清單樣式-分隔線",args:{dataSource:u,hasOutline:!1,className:""},render:t=>({components:{List:o},setup(){return{args:t,handleItemClick:c("onSelect")}},template:`
      <List
        :dataSource="args.dataSource"
        :hasOutline="args.hasOutline"
        :hasDivider="true"
        :className="args.className"
        @onSelect="handleItemClick"
      >
      </List>
    `}),parameters:{controls:{exclude:["hasDivider","default"]},docs:{source:{transform:(t,a)=>{const{args:e}=a,s=l(e.dataSource);return["<script setup>",'import { List } from "@ded-wds-vue/ui";',"const handleItemClick = () => {};","<\/script>","","<template>","  <List",`    ${s?`:dataSource="${s}"`:""}`,`    ${e.hasOutline!==void 0?`:hasOutline="${e.hasOutline}"`:""}`,'    :hasDivider="true"',`    ${e.className?`className="${e.className}"`:""}`,'    @onSelect="handleItemClick()"',"  ></List>","</template>"].filter(Boolean).join(`
`).trim()}}}}};var d,m,p;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
  name: "預設項目",
  args: {
    dataSource,
    hasOutline: false,
    hasDivider: false,
    className: ""
  },
  render: args => ({
    components: {
      List
    },
    setup() {
      return {
        args,
        handleItemClick: action("onSelect")
      };
    },
    template: \`
      <List
        :dataSource="args.dataSource"
        :hasOutline="args.hasOutline"
        :hasDivider="args.hasDivider"
        :className="args.className"
        @onSelect="handleItemClick"
      >
      </List>
    \`
  }),
  // 控制 controls 中能控制的參數
  parameters: {
    controls: {
      exclude: ["default"]
    },
    docs: {
      source: {
        transform: (src, storyContext) => {
          const {
            args
          } = storyContext;
          const dataSourceString = formatDataSource(args.dataSource);
          return [\`<script setup>\`, \`import { List } from "@ded-wds-vue/ui";\`, \`const handleItemClick = () => {};\`, \`<\/script>\`, "", "<template>", \`  <List\`, \`    \${dataSourceString ? \`:dataSource="\${dataSourceString}"\` : ""}\`, \`    \${args.hasOutline !== undefined ? \`:hasOutline="\${args.hasOutline}"\` : ""}\`, \`    \${args.hasDivider !== undefined ? \`:hasDivider="\${args.hasDivider}"\` : ""}\`, \`    \${args.className ? \`className="\${args.className}"\` : ""}\`, \`    @onSelect="handleItemClick()"\`, \`  ></List>\`, "</template>"].filter(Boolean).join("\\n").trim();
        }
      }
    }
  }
}`,...(p=(m=n.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var h,S,g;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:`{
  name: "清單樣式-外框",
  args: {
    dataSource,
    hasDivider: false,
    className: ""
  },
  render: args => ({
    components: {
      List
    },
    setup() {
      return {
        args,
        handleItemClick: action("onSelect")
      };
    },
    template: \`
      <List
        :dataSource="args.dataSource"
        :hasOutline="true"
        :hasDivider="args.hasDivider"
        :className="args.className"
        @onSelect="handleItemClick"
      >
      </List>
    \`
  }),
  // 控制 controls 中能控制的參數
  parameters: {
    controls: {
      exclude: ["hasOutline", "default"]
    },
    docs: {
      source: {
        transform: (src, storyContext) => {
          const {
            args
          } = storyContext;
          const dataSourceString = formatDataSource(args.dataSource);
          return [\`<script setup>\`, \`import { List } from "@ded-wds-vue/ui";\`, \`const handleItemClick = () => {};\`, \`<\/script>\`, "", "<template>", \`  <List\`, \`    \${dataSourceString ? \`:dataSource="\${dataSourceString}"\` : ""}\`, \`    :hasOutline="true"\`, \`    \${args.hasDivider !== undefined ? \`:hasDivider="\${args.hasDivider}"\` : ""}\`, \`    \${args.className ? \`className="\${args.className}"\` : ""}\`, \`    @onSelect="handleItemClick()"\`, \`  ></List>\`, "</template>"].filter(Boolean).join("\\n").trim();
        }
      }
    }
  }
}`,...(g=(S=r.parameters)==null?void 0:S.docs)==null?void 0:g.source}}};var f,D,v;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`{
  name: "清單樣式-分隔線",
  args: {
    dataSource,
    hasOutline: false,
    // hasDivider: false,
    className: ""
  },
  render: args => ({
    components: {
      List
    },
    setup() {
      return {
        args,
        handleItemClick: action("onSelect")
      };
    },
    template: \`
      <List
        :dataSource="args.dataSource"
        :hasOutline="args.hasOutline"
        :hasDivider="true"
        :className="args.className"
        @onSelect="handleItemClick"
      >
      </List>
    \`
  }),
  // 控制 controls 中能控制的參數
  parameters: {
    controls: {
      exclude: ["hasDivider", "default"]
    },
    docs: {
      source: {
        transform: (src, storyContext) => {
          const {
            args
          } = storyContext;
          const dataSourceString = formatDataSource(args.dataSource);
          return [\`<script setup>\`, \`import { List } from "@ded-wds-vue/ui";\`, \`const handleItemClick = () => {};\`, \`<\/script>\`, "", "<template>", \`  <List\`, \`    \${dataSourceString ? \`:dataSource="\${dataSourceString}"\` : ""}\`, \`    \${args.hasOutline !== undefined ? \`:hasOutline="\${args.hasOutline}"\` : ""}\`, \`    :hasDivider="true"\`, \`    \${args.className ? \`className="\${args.className}"\` : ""}\`, \`    @onSelect="handleItemClick()"\`, \`  ></List>\`, "</template>"].filter(Boolean).join("\\n").trim();
        }
      }
    }
  }
}`,...(v=(D=i.parameters)==null?void 0:D.docs)==null?void 0:v.source}}};const I=["ListDefaultStory","ListOutLineStory","ListDividerStory"];export{n as ListDefaultStory,i as ListDividerStory,r as ListOutLineStory,I as __namedExportsOrder,k as default};

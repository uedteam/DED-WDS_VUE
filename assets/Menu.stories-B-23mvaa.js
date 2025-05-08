import{_ as l}from"./Menu-DL0u5eJQ.js";import"./vue.esm-bundler-CeV5Z5_m.js";import"./Icon-CW5hHWCf.js";function i(a){return`        ${a.map(r=>`{
            label: "${r.label}",
            path: "${r.path}",
            prefix: "${r.prefix}",
            ${r.order!==void 0&&r.order!==null?`order: "${r.order}",`:""}
            ${r.isDisabled!==void 0?`isDisabled: ${r.isDisabled},`:""}
            ${r.children&&r.children.length?`children: [
                ${r.children.map(e=>`{
                    label: "${e.label}",
                    path: "${e.path}",
                    prefix: "${e.prefix}",
                    ${e.order!==void 0&&e.order!==null?`order: "${e.order}"`:""},
                    ${e.isDisabled!==void 0?`isDisabled: ${e.isDisabled},`:""}
                }`).join(`,
                `)}
            ]`:""}
        }`).join(`,
        `)}`}const g={title:"Component/Menu",component:l,tags:["autodocs"],argTypes:{dataSource:{description:"資料來源",control:{type:"object"},table:{type:{summary:"{ label: string; path: string; prefix: string; order: number; isDisabled: boolean; children?: [title:string; path:string; prefix:string; order: number;] }[]"}}},isCollapsed:{description:"是否收合",control:{type:"boolean"}},color:{description:"顏色",control:{type:"color"}},hasDivider:{description:"是否有分隔線",control:{type:"boolean"}},className:{description:"客製化樣式",control:{type:"text"}},useRouter:{description:"使用 VueRouter",control:{type:"boolean"},table:{disable:!0}}},parameters:{docs:{title:"Menu",description:{component:"選單組件的呈現及說明。"}}}},s={name:"預設項目",args:{dataSource:[{label:"Dashboard",path:"/",prefix:"SvgHome",order:1,isDisabled:!0},{label:"Profile",path:"/users",prefix:"SvgUser",order:2,children:[{label:"Contact",path:"/users/Contact",prefix:"SvgMail",order:1},{label:"Password",path:"/users/Password",prefix:"SvgLock",order:2}]},{label:"Setting",path:"/settings",prefix:"SvgSettings",order:3}],isCollapsed:!1,color:"#000000",hasDivider:!1,className:""},render:a=>({components:{Menu:l},setup(){return{args:a}},template:`
      <Menu
        :dataSource="args.dataSource"
        :isCollapsed="args.isCollapsed"
        :color="args.color"
        :hasDivider="args.hasDivider"
        :className="args.className"
      ></Menu>`}),parameters:{controls:{exclude:["navItemClick","expandedNav"]},docs:{source:{transform:(a,r)=>{const{args:e}=r;return["<script setup>",'import { Menu } from "@ded-wds-vue/ui";',"const dataSource = [",`${i(e.dataSource)}`,"];","<\/script>","","<template>","  <Menu",'    :dataSource="dataSource"',`    ${e.isCollapsed!==void 0?`:isCollapsed="${e.isCollapsed}"`:""}`,`    ${e.color?`color="${e.color}"`:""}`,`    ${e.hasDivider!==void 0?`:hasDivider="${e.hasDivider}"`:""}`,`    ${e.className?`className="${e.className}"`:""}`,"  ></Menu>","</template>"].filter(Boolean).join(`
`).trim()}}}}};var n,o,t;s.parameters={...s.parameters,docs:{...(n=s.parameters)==null?void 0:n.docs,source:{originalSource:`{
  name: "預設項目",
  args: {
    dataSource: [{
      label: "Dashboard",
      path: "/",
      prefix: "SvgHome",
      order: 1,
      isDisabled: true
    }, {
      label: "Profile",
      path: "/users",
      prefix: "SvgUser",
      order: 2,
      children: [{
        label: "Contact",
        path: "/users/Contact",
        prefix: "SvgMail",
        order: 1
      }, {
        label: "Password",
        path: "/users/Password",
        prefix: "SvgLock",
        order: 2
      }]
    }, {
      label: "Setting",
      path: "/settings",
      prefix: "SvgSettings",
      order: 3
    }],
    isCollapsed: false,
    color: "#000000",
    hasDivider: false,
    className: ""
  },
  render: args => ({
    components: {
      Menu
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <Menu
        :dataSource="args.dataSource"
        :isCollapsed="args.isCollapsed"
        :color="args.color"
        :hasDivider="args.hasDivider"
        :className="args.className"
      ></Menu>\`
  }),
  // 控制 controls 中能控制的參數
  parameters: {
    controls: {
      // include: ["dataSource", "isExpanded"],
      exclude: ["navItemClick", "expandedNav"]
    },
    docs: {
      source: {
        transform: (src, storyContext) => {
          const {
            args
          } = storyContext;
          const dataSourceString = formatDataSource(args.dataSource);
          return [\`<script setup>\`, \`import { Menu } from "@ded-wds-vue/ui";\`, \`const dataSource = [\`, \`\${dataSourceString}\`, \`];\`, \`<\/script>\`, "", "<template>", "  <Menu", \`    :dataSource="dataSource"\`, \`    \${args.isCollapsed !== undefined ? \`:isCollapsed="\${args.isCollapsed}"\` : ""}\`, \`    \${args.color ? \`color="\${args.color}"\` : ""}\`, \`    \${args.hasDivider !== undefined ? \`:hasDivider="\${args.hasDivider}"\` : ""}\`, \`    \${args.className ? \`className="\${args.className}"\` : ""}\`, "  ></Menu>", "</template>"].filter(Boolean).join("\\n").trim();
        }
      }
    }
  }
}`,...(t=(o=s.parameters)==null?void 0:o.docs)==null?void 0:t.source}}};const m=["MenuDefault"];export{s as MenuDefault,m as __namedExportsOrder,g as default};

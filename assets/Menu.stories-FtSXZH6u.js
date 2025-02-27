import{_ as i}from"./Menu-BDixstMM.js";import"./vue.esm-bundler-CeRU4-k3.js";import"./Icon-BO2J-day.js";function d(a){return`[
        ${a.map(r=>`{
            label: '${r.label}',
            path: '${r.path}',
            prefix: '${r.prefix}',
            ${r.order!==void 0&&r.order!==null?`order: '${r.order}',`:""}
            ${r.isDisabled!==void 0?`isDisabled: ${r.isDisabled},`:""}
            ${r.children&&r.children.length?`children: [
                ${r.children.map(e=>`{
                    label: '${e.label}',
                    path: '${e.path}',
                    prefix: '${e.prefix}',
                    ${e.order!==void 0&&e.order!==null?`order: '${e.order}',`:""}
                }`).join(`,
                `)}
            ]`:""}
        }`).join(`,
        `)}
    ]`}const g={title:"Component/Menu",component:i,tags:["autodocs"],argTypes:{dataSource:{description:"資料來源",control:{type:"object"},table:{type:{summary:"{ label: string; path: string; prefix: string; order: string; isDisabled: boolean; children?: [title:string; path:string; prefix:string; order: string;] }[]"}}},isCollapsed:{description:"是否收合",control:{type:"boolean"}},color:{description:"顏色",control:{type:"color"}},hasDivider:{description:"是否有分隔線",control:{type:"boolean"}},className:{description:"客製化樣式",control:{type:"text"}},useRouter:{description:"使用 VueRouter",control:{type:"boolean"},table:{disable:!0}}},parameters:{docs:{title:"Menu",description:{component:"選單組件的呈現及說明。"}}}},s={name:"預設項目",args:{dataSource:[{label:"Dashboard",path:"/",prefix:"SvgHome",order:"1",isDisabled:!0},{label:"Profile",path:"/users",prefix:"SvgUser",order:"2",children:[{label:"Contact",path:"/users/Contact",prefix:"SvgMail",order:"1"},{label:"Password",path:"/users/Password",prefix:"SvgLock",order:"2"}]},{label:"Setting",path:"/settings",prefix:"SvgSettings",order:"3"}],isCollapsed:!1,color:"#000000",hasDivider:!1,className:""},render:a=>({components:{Menu:i},setup(){return{args:a}},template:`
                <Menu
                    :dataSource="args.dataSource"
                    :isCollapsed="args.isCollapsed"
                    :color="args.color"
                    :hasDivider="args.hasDivider"
                    :className="args.className"
                ></Menu>
        `}),parameters:{controls:{exclude:["navItemClick","expandedNav"]},docs:{source:{transform:(a,r)=>{const{args:e}=r,n=d(e.dataSource);return["<script setup>",'import { Menu } from "@ded-wds-vue/ui";',"<\/script>","","<template>","  <Menu",`    ${n?`:dataSource="${n}"`:""}`,`    ${e.isCollapsed!==void 0?`:isCollapsed="${e.isCollapsed}"`:""}`,`    ${e.color?`color="${e.color}"`:""}`,`    ${e.hasDivider!==void 0?`:hasDivider="${e.hasDivider}"`:""}`,`    ${e.className?`className="${e.className}"`:""}`,"  ></Menu>","</template>"].filter(Boolean).join(`
`).trim()}}}}};var o,t,l;s.parameters={...s.parameters,docs:{...(o=s.parameters)==null?void 0:o.docs,source:{originalSource:`{
  name: "預設項目",
  args: {
    dataSource: [{
      label: "Dashboard",
      path: "/",
      prefix: "SvgHome",
      order: "1",
      isDisabled: true
    }, {
      label: "Profile",
      path: "/users",
      prefix: "SvgUser",
      order: "2",
      children: [{
        label: "Contact",
        path: "/users/Contact",
        prefix: "SvgMail",
        order: "1"
      }, {
        label: "Password",
        path: "/users/Password",
        prefix: "SvgLock",
        order: "2"
      }]
    }, {
      label: "Setting",
      path: "/settings",
      prefix: "SvgSettings",
      order: "3"
    }],
    isCollapsed: false,
    color: '#000000',
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
                ></Menu>
        \`
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
          return [\`<script setup>\`, \`import { Menu } from "@ded-wds-vue/ui";\`, \`<\/script>\`, '', '<template>', '  <Menu', \`    \${dataSourceString ? \`:dataSource="\${dataSourceString}"\` : ""}\`, \`    \${args.isCollapsed !== undefined ? \`:isCollapsed="\${args.isCollapsed}"\` : ""}\`, \`    \${args.color ? \`color="\${args.color}"\` : ""}\`, \`    \${args.hasDivider !== undefined ? \`:hasDivider="\${args.hasDivider}"\` : ""}\`, \`    \${args.className ? \`className="\${args.className}"\` : ""}\`, '  ></Menu>', '</template>'].filter(Boolean).join('\\n').trim();
        }
      }
    }
  }
}`,...(l=(t=s.parameters)==null?void 0:t.docs)==null?void 0:l.source}}};const m=["MenuDefault"];export{s as MenuDefault,m as __namedExportsOrder,g as default};

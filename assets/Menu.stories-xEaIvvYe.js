import{_ as l}from"./Menu-yDQ2cxdR.js";import"./vue.esm-bundler-Db4pcR2I.js";import"./Icon-DbRQxRx8.js";import"./iframe-G7TsRw4U.js";import"../sb-preview/runtime.js";function i(a){return`[
        ${a.map(r=>`{
            label: '${r.label}',
            path: '${r.path}',
            prefix: '${r.prefix}',
            order: '${r.order}',
            ${r.children?`children: [
                ${r.children.map(e=>`{
                    label: '${e.title}',
                    path: '${e.path}',
                    prefix: '${e.prefix}',
                    order: '${e.order}',
                }`).join(`,
            `)}
            ]`:""}
        }`).join(`,
    `)}
    ]`}const S={title:"Component/Menu",component:l,tags:["autodocs"],argTypes:{dataSource:{description:"資料來源",control:{type:"object"},table:{type:{summary:"{ label: string; path: string; prefix: string; order: string; children?: [ title:string; path:string; prefix:string; order: string;] }[]"}}},isCollapsed:{description:"是否收合",control:{type:"boolean"}},color:{description:"顏色",control:{type:"color"}},hasDivider:{description:"是否有分隔線",control:{type:"boolean"}},className:{description:"客製化樣式",control:{type:"text"}},useRouter:{description:"使用 VueRouter",control:{type:"boolean"},table:{disable:!0}}},parameters:{docs:{title:"Menu",description:{component:"選單組件的呈現及說明。"}}}},n={name:"預設項目",args:{dataSource:[{label:"Dashboard",path:"/",prefix:"SvgHome",order:"1"},{label:"Profile",path:"/users",prefix:"SvgUser",order:"2",children:[{label:"Contact",path:"/users/Contact",prefix:"SvgMail",order:"1"},{label:"Password",path:"/users/Password",prefix:"SvgLock",order:"2"}]},{label:"Setting",path:"/settings",prefix:"SvgSettings",order:"3"}],isCollapsed:!1,color:"#000000",hasDivider:!1,className:""},render:a=>({components:{Menu:l},setup(){return{args:a}},template:`
                <Menu
                    :dataSource="args.dataSource"
                    :isCollapsed="args.isCollapsed"
                    :color="args.color"
                    :hasDivider="args.hasDivider"
                    :className="args.className"
                ></Menu>
        `}),parameters:{controls:{exclude:["navItemClick","expandedNav"]},docs:{source:{transform:(a,r)=>{const{args:e}=r;return["  <Menu",`    :dataSource="${i(e.dataSource)}"`,`    :isCollapsed="${e.isCollapsed}"`,`    color="${e.color}"`,`    :hasDivider="${e.hasDivider}"`,`    className="${e.className}"`,"  ></Menu>"].join(`
`).trim()}}}}};var s,o,t;n.parameters={...n.parameters,docs:{...(s=n.parameters)==null?void 0:s.docs,source:{originalSource:`{
  name: "預設項目",
  args: {
    dataSource: [{
      label: "Dashboard",
      path: "/",
      prefix: "SvgHome",
      order: "1"
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
          return ['  <Menu', \`    :dataSource="\${dataSourceString}"\`, \`    :isCollapsed="\${args.isCollapsed}"\`, \`    color="\${args.color}"\`, \`    :hasDivider="\${args.hasDivider}"\`, \`    className="\${args.className}"\`, '  ></Menu>'].join('\\n').trim();
        }
      }
    }
  }
}`,...(t=(o=n.parameters)==null?void 0:o.docs)==null?void 0:t.source}}};const f=["MenuDefault"];export{n as MenuDefault,f as __namedExportsOrder,S as default};

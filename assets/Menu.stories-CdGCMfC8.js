import{_ as i}from"./Menu-B1bp5A_H.js";import"./vue.esm-bundler-D0YZwI1O.js";import"./Icon-BEQChxlu.js";import"./iframe-BAU84F5S.js";import"../sb-preview/runtime.js";function l(t){return`[
        ${t.map(r=>`{
            title: '${r.title}',
            prefix: '${r.prefix}',
            path: '${r.path}',
            ${r.children?`children: [
                ${r.children.map(e=>`{
                    title: '${e.title}',
                    prefix: '${e.prefix}',
                    path: '${e.path}'
                }`).join(`,
            `)}
            ]`:""}
        }`).join(`,
    `)}
    ]`}const S={title:"Component/Menu",component:i,tags:["autodocs"],argTypes:{dataSource:{description:"資料來源",control:{type:"object"},table:{type:{summary:"{ title: string; prefix: string; path: string; children?: [ title: string; prefix: string; path:string;] }[]"}}},isCollapsed:{description:"是否收合",control:{type:"boolean"}},color:{description:"顏色",control:{type:"color"}},hasDivider:{description:"是否有分隔線",control:{type:"boolean"}},className:{description:"客製化樣式",control:{type:"text"}},useRouter:{description:"使用 VueRouter",control:{type:"boolean"},table:{disable:!0}}},parameters:{docs:{title:"Menu",description:{component:"選單組件的呈現及說明。"}}}},a={name:"預設項目",args:{dataSource:[{title:"Dashboard",prefix:"SvgHome",path:"/"},{title:"Profile",prefix:"SvgUser",path:"/users",children:[{title:"Contact",prefix:"SvgMail",path:"/users/Contact"},{title:"Password",prefix:"SvgLock",path:"/users/Password"}]},{title:"Setting",prefix:"SvgSettings",path:"/settings"}],isCollapsed:!1,color:"#000000",hasDivider:!1,className:""},render:t=>({components:{Menu:i},setup(){return{args:t}},template:`
                <Menu
                    :dataSource="args.dataSource"
                    :isCollapsed="args.isCollapsed"
                    :color="args.color"
                    :hasDivider="args.hasDivider"
                    :className="args.className"
                ></Menu>
        `}),parameters:{controls:{exclude:["navItemClick","expandedNav"]},docs:{source:{transform:(t,r)=>{const{args:e}=r;return["  <Menu",`    :dataSource="${l(e.dataSource)}"`,`    :isCollapsed="${e.isCollapsed}"`,`    color="${e.color}"`,`    :hasDivider="${e.hasDivider}"`,`    className="${e.className}"`,"  ></Menu>"].join(`
`).trim()}}}}};var n,s,o;a.parameters={...a.parameters,docs:{...(n=a.parameters)==null?void 0:n.docs,source:{originalSource:`{
  name: "預設項目",
  args: {
    dataSource: [{
      title: "Dashboard",
      prefix: "SvgHome",
      path: "/"
    }, {
      title: "Profile",
      prefix: "SvgUser",
      path: "/users",
      children: [{
        title: "Contact",
        prefix: "SvgMail",
        path: "/users/Contact"
      }, {
        title: "Password",
        prefix: "SvgLock",
        path: "/users/Password"
      }]
    }, {
      title: "Setting",
      prefix: "SvgSettings",
      path: "/settings"
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
}`,...(o=(s=a.parameters)==null?void 0:s.docs)==null?void 0:o.source}}};const h=["MenuDefault"];export{a as MenuDefault,h as __namedExportsOrder,S as default};

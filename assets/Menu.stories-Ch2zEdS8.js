import{_ as i}from"./Menu-DcCzbuTz.js";import"./vue.esm-bundler-CTfO_w4g.js";import"./Icon-B1v4yc6p.js";import"./iframe-eB0XTDOC.js";import"../sb-preview/runtime.js";function c(a){return`[
        ${a.map(t=>`{
            title: '${t.title}',
            prefix: '${t.prefix}',
            path: '${t.path}',
            ${t.children?`children: [
                ${t.children.map(e=>`{
                    title: '${e.title}',
                    prefix: '${e.prefix}',
                    path: '${e.path}'
                }`).join(`,
            `)}
            ]`:""}
        }`).join(`,
    `)}
    ]`}const h={title:"Component/Menu",component:i,tags:["autodocs"],argTypes:{dataSource:{description:"資料來源",control:{type:"object"},table:{type:{summary:"{ title: string; prefix: string; path: string; children?: [ title: string; prefix: string; path:string;] }[]"}}},isCollapsed:{description:"是否收合",control:{type:"boolean"}},color:{description:"顏色",control:{type:"color"}},className:{description:"客製化樣式",control:{type:"text"}}},parameters:{docs:{title:"Menu",description:{component:"Menu 組件的呈現及說明。"}}}},n={name:"預設項目",args:{dataSource:[{title:"Dashboard",prefix:"home",path:"/"},{title:"Profile",prefix:"users",path:"/users",children:[{title:"Contact",prefix:"mail",path:"/users/Contact"},{title:"Password",prefix:"lock",path:"/users/Password"}]},{title:"Setting",prefix:"setting",path:"/settings"}],isCollapsed:!1,color:"#000000",className:""},render:a=>({components:{Menu:i},setup(){return{args:a}},template:`
            <div :style="args.isCollapsed ? 'width:40px' : 'width:auto'">
                <Menu
                    :dataSource="args.dataSource"
                    :isCollapsed="args.isCollapsed"
                    :color="args.color"
                    :className="args.className"
                ></Menu>
            </div>
        `}),parameters:{controls:{exclude:["navItemClick","expandedNav"]},docs:{source:{transform:(a,t)=>{const{args:e}=t,l=c(e.dataSource);return["<div",`  :style="${e.isCollapsed?"width:40px":"width:auto"}"`,">","  <Menu",`    :dataSource="${l}"`,`    :isCollapsed="${e.isCollapsed}"`,`    color="${e.color}"`,`    className="${e.className}"`,"  ></Menu>","</div>"].join(`
`).trim()}}}}};var s,r,o;n.parameters={...n.parameters,docs:{...(s=n.parameters)==null?void 0:s.docs,source:{originalSource:`{
  name: "預設項目",
  args: {
    dataSource: [{
      title: "Dashboard",
      prefix: "home",
      path: "/"
    }, {
      title: "Profile",
      prefix: "users",
      path: "/users",
      children: [{
        title: "Contact",
        prefix: "mail",
        path: "/users/Contact"
      }, {
        title: "Password",
        prefix: "lock",
        path: "/users/Password"
      }]
    }, {
      title: "Setting",
      prefix: "setting",
      path: "/settings"
    }],
    isCollapsed: false,
    color: '#000000',
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
            <div :style="args.isCollapsed ? 'width:40px' : 'width:auto'">
                <Menu
                    :dataSource="args.dataSource"
                    :isCollapsed="args.isCollapsed"
                    :color="args.color"
                    :className="args.className"
                ></Menu>
            </div>
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
          return ['<div', \`  :style="\${args.isCollapsed ? 'width:40px' : 'width:auto'}"\`, '>', '  <Menu', \`    :dataSource="\${dataSourceString}"\`, \`    :isCollapsed="\${args.isCollapsed}"\`, \`    color="\${args.color}"\`, \`    className="\${args.className}"\`, '  ></Menu>', '</div>'].join('\\n').trim();
        }
      }
    }
  }
}`,...(o=(r=n.parameters)==null?void 0:r.docs)==null?void 0:o.source}}};const f=["MenuDefault"];export{n as MenuDefault,f as __namedExportsOrder,h as default};

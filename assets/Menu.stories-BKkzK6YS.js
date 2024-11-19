import{_ as l}from"./Menu-KlVain-r.js";import"./vue.esm-bundler-ChZ6yN_a.js";import"./Icon-CGw-UuIM.js";import"./iframe-Ba_qZpvn.js";import"../sb-preview/runtime.js";function c(a){return`[
    ${a.map(n=>`{
        icon: '${n.icon}',
        label: '${n.label}',
        path: '${n.path}',
        ${n.children?`children: [
            ${n.children.map(e=>`{
                label: '${e.label}',
                path: '${e.path}'
            }`).join(`,
            `)}
        ]`:""}
    }`).join(`,
    `)}
]`}const h={title:"Design System/Menu",component:l,tags:["autodocs"],argTypes:{dataSource:{description:"資料來源",control:{type:"object"},table:{type:{summary:"{ icon: string; label: string; path: string; children?: [ label: string; path: string;] }[]"}}},isCollapsed:{description:"是否收合",control:{type:"boolean"}},color:{description:"顏色",control:{type:"color"}},className:{description:"客製化樣式",control:{type:"text"}}},parameters:{docs:{title:"Menu",description:{component:"Menu 組件的呈現及說明。"}}}},s={name:"預設項目",args:{dataSource:[{icon:"home",label:"首頁",path:"/"},{icon:"users",label:"用戶管理",path:"/users",children:[{label:"用戶列表",path:"/users/list"},{label:"用戶設置",path:"/users/settings"}]},{icon:"setting",label:"系統設置",path:"/settings"}],isCollapsed:!1,color:"#000000",className:""},render:a=>({components:{Menu:l},setup(){return{args:a}},template:`
            <div :style="args.isCollapsed ? 'width:40px' : 'width:auto'">
                <Menu
                    :dataSource="args.dataSource"
                    :isCollapsed="args.isCollapsed"
                    :color="args.color"
                    :className="args.className"
                ></Menu>
            </div>
        `}),parameters:{controls:{exclude:["navItemClick","expandedNav"]},docs:{source:{transform:(a,n)=>{const{args:e}=n,u=c(e.dataSource);return["<div",`  :style="${e.isCollapsed?"width:40px":"width:auto"}"`,">","  <Menu",`    :dataSource="${u}"`,`    :isCollapsed="${e.isCollapsed}"`,`    color="${e.color}"`,`    className="${e.className}"`,"  ></Menu>","</div>"].join(`
`).trim()}}}}};var t,o,r;s.parameters={...s.parameters,docs:{...(t=s.parameters)==null?void 0:t.docs,source:{originalSource:`{
  name: "預設項目",
  args: {
    dataSource: [{
      icon: "home",
      label: "首頁",
      path: "/"
    }, {
      icon: "users",
      label: "用戶管理",
      path: "/users",
      children: [{
        label: "用戶列表",
        path: "/users/list"
      }, {
        label: "用戶設置",
        path: "/users/settings"
      }]
    },
    // {
    // 	icon: "file",
    // 	label: "文件管理",
    // 	path: "/files",
    // 	children: [
    // 		{ label: "所有文件", path: "/files/all" },
    // 		{ label: "已分享", path: "/files/shared" },
    // 	],
    // },
    // {
    // 	icon: "mail",
    // 	label: "訊息中心",
    // 	path: "/messages",
    // },
    {
      icon: "setting",
      label: "系統設置",
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
}`,...(r=(o=s.parameters)==null?void 0:o.docs)==null?void 0:r.source}}};const b=["MenuDefault"];export{s as MenuDefault,b as __namedExportsOrder,h as default};

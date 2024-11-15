import{_ as r}from"./Menu-CYCSVBIT.js";import"./vue.esm-bundler-Dy0-1sXb.js";import"./Icon-fJmL2Qrc.js";import"./iframe-a5uTrigX.js";import"../sb-preview/runtime.js";function i(n){return`[
    ${n.map(a=>`{
        icon: '${a.icon}',
        label: '${a.label}',
        path: '${a.path}',
        ${a.children?`children: [
            ${a.children.map(e=>`{
                label: '${e.label}',
                path: '${e.path}'
            }`).join(`,
            `)}
        ]`:""}
    }`).join(`,
    `)}
]`}const g={title:"Design System/Menu",component:r,tags:["autodocs"],argTypes:{dataSource:{description:"資料來源",control:{type:"object"},table:{type:{summary:"{ icon: string; label: string; path: string; children?: [ label: string; path: string;] }[]"}}},isCollapsed:{description:"是否收合",control:{type:"boolean"}},color:{description:"顏色",control:{type:"color"}},className:{description:"客製化樣式",control:{type:"text"}}},parameters:{docs:{title:"Menu",description:{component:"Menu 組件的呈現及說明。"}}}},s={name:"預設項目",args:{dataSource:[{icon:"home",label:"首頁",path:"/"},{icon:"users",label:"用戶管理",path:"/users",children:[{label:"用戶列表",path:"/users/list"},{label:"用戶設置",path:"/users/settings"}]},{icon:"file",label:"文件管理",path:"/files",children:[{label:"所有文件",path:"/files/all"},{label:"已分享",path:"/files/shared"}]},{icon:"mail",label:"訊息中心",path:"/messages"},{icon:"setting",label:"系統設置",path:"/settings"}],isCollapsed:!1,color:"#000",className:""},render:n=>({components:{Menu:r},setup(){return{args:n}},template:`
            <div :style="args.isCollapsed ? 'width:40px' : 'width:auto'">
                <Menu
                    :dataSource="args.dataSource"
                    :isCollapsed="args.isCollapsed"
                    :color="args.color"
                    :className="args.className"
                ></Menu>
            </div>
        `}),parameters:{controls:{exclude:["navItemClick","expandedNav"]},docs:{source:{transform:(n,a)=>{const{args:e}=a,u=i(e.dataSource);return["<div",`  :style="${e.isCollapsed?"width:40px":"width:auto"}"`,">","  <Menu",`    :dataSource="${u}"`,`    :isCollapsed="${e.isCollapsed}"`,`    color="${e.color}"`,`    className="${e.className}"`,"  ></Menu>","</div>"].join(`
`).trim()}}}}};var t,l,o;s.parameters={...s.parameters,docs:{...(t=s.parameters)==null?void 0:t.docs,source:{originalSource:`{
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
    }, {
      icon: "file",
      label: "文件管理",
      path: "/files",
      children: [{
        label: "所有文件",
        path: "/files/all"
      }, {
        label: "已分享",
        path: "/files/shared"
      }]
    }, {
      icon: "mail",
      label: "訊息中心",
      path: "/messages"
    }, {
      icon: "setting",
      label: "系統設置",
      path: "/settings"
    }],
    isCollapsed: false,
    color: '#000',
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
}`,...(o=(l=s.parameters)==null?void 0:l.docs)==null?void 0:o.source}}};const b=["MenuDefault"];export{s as MenuDefault,b as __namedExportsOrder,g as default};

import{_ as t}from"./Menu-B8w_5dOD.js";import"./vue.esm-bundler-XWim8Fx5.js";import"./Icon-DD-8nGjT.js";import"./iframe-BZBeCght.js";import"../sb-preview/runtime.js";const c={title:"Design System/Menu",component:t,tags:["autodocs"],argTypes:{menuData:{description:"Menu 對應的資料陣列",control:{type:"object"}}},isExpanded:{description:"Menu 展開收合",control:{type:"boolean"}},parameters:{docs:{title:"Menu",description:{component:"Menu 組件的呈現及說明。"}}}},n={name:"主要項目",args:{menuData:[{icon:"home",label:"首頁",path:"/"},{icon:"users",label:"用戶管理",path:"/users",children:[{label:"用戶列表 (模擬帶 icon 效果)",path:"/users/list"},{label:"用戶設置",path:"/users/settings"}]},{icon:"file",label:"文件管理",path:"/files",children:[{label:"所有文件",path:"/files/all"},{label:"已分享",path:"/files/shared"}]},{icon:"mail",label:"訊息中心",path:"/messages"},{icon:"setting",label:"系統設置",path:"/settings"}]},render:s=>({components:{Menu:t},setup(){return{args:s}},template:`
            <div>
                <Menu
                    :menuData="args.menuData"
                    :isExpanded="true"
                ></Menu>
            </div>
            
        `}),parameters:{controls:{include:["menuData"]}}};var e,a,u;n.parameters={...n.parameters,docs:{...(e=n.parameters)==null?void 0:e.docs,source:{originalSource:`{
  name: '主要項目',
  args: {
    menuData: [{
      icon: 'home',
      label: '首頁',
      path: '/'
    }, {
      icon: 'users',
      label: '用戶管理',
      path: '/users',
      children: [{
        label: '用戶列表 (模擬帶 icon 效果)',
        path: '/users/list'
      }, {
        label: '用戶設置',
        path: '/users/settings'
      }]
    }, {
      icon: 'file',
      label: '文件管理',
      path: '/files',
      children: [{
        label: '所有文件',
        path: '/files/all'
      }, {
        label: '已分享',
        path: '/files/shared'
      }]
    }, {
      icon: 'mail',
      label: '訊息中心',
      path: '/messages'
    }, {
      icon: 'setting',
      label: '系統設置',
      path: '/settings'
    }]
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
            <div>
                <Menu
                    :menuData="args.menuData"
                    :isExpanded="true"
                ></Menu>
            </div>
            
        \`
  }),
  // 控制 controls 中能控制的參數
  parameters: {
    controls: {
      include: ['menuData']
    }
  }
}`,...(u=(a=n.parameters)==null?void 0:a.docs)==null?void 0:u.source}}};const m=["MenuDefault"];export{n as MenuDefault,m as __namedExportsOrder,c as default};

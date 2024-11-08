import{_ as u}from"./Menu-CWvsIQEQ.js";import"./vue.esm-bundler-wiEVvyCh.js";import"./Icon-CSRllRg0.js";import"./iframe-BNXXAjtc.js";import"../sb-preview/runtime.js";const p={title:"Design System/Menu",component:u,tags:["autodocs"],argTypes:{datasource:{description:"Menu 對應的資料陣列",control:{type:"object"}},isExpanded:{description:"Menu 展開收合",control:{type:"boolean"}}},parameters:{docs:{title:"Menu",description:{component:"Menu 組件的呈現及說明。"}}}},e={name:"預設項目",args:{datasource:[{icon:"home",label:"首頁",path:"/"},{icon:"users",label:"用戶管理",path:"/users",children:[{label:"用戶列表",path:"/users/list"},{label:"用戶設置",path:"/users/settings"}]},{icon:"file",label:"文件管理",path:"/files",children:[{label:"所有文件",path:"/files/all"},{label:"已分享",path:"/files/shared"}]},{icon:"mail",label:"訊息中心",path:"/messages"},{icon:"setting",label:"系統設置",path:"/settings"}],isExpanded:!0},render:t=>({components:{Menu:u},setup(){return{args:t}},template:`
            <div :style="args.isExpanded ? 'width:auto' : 'width:47px'">
                <Menu
                    :datasource="args.datasource"
                    :isExpanded="args.isExpanded"
                ></Menu>
            </div>
        `}),parameters:{controls:{include:["datasource","isExpanded"]}}};var n,a,s;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  name: "預設項目",
  args: {
    datasource: [{
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
    isExpanded: true
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
            <div :style="args.isExpanded ? 'width:auto' : 'width:47px'">
                <Menu
                    :datasource="args.datasource"
                    :isExpanded="args.isExpanded"
                ></Menu>
            </div>
        \`
  }),
  // 控制 controls 中能控制的參數
  parameters: {
    controls: {
      include: ["datasource", "isExpanded"] // 確保包含有效的參數名稱
    }
  }
}`,...(s=(a=e.parameters)==null?void 0:a.docs)==null?void 0:s.source}}};const c=["MenuDefault"];export{e as MenuDefault,c as __namedExportsOrder,p as default};

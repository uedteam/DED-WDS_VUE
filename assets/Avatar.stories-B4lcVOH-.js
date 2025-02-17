import{_ as o}from"./Avatar-CnVwvGzG.js";import"./vue.esm-bundler-qCK_iSPY.js";import"./Image-C96WqIEk.js";import"./Icon-Dr0uxKWp.js";import"./iframe-Dp5wB7_x.js";import"../sb-preview/runtime.js";const w={title:"Component/Avatar",component:o,tags:["autodocs"],argTypes:{shape:{description:"形狀",control:{type:"select"},options:["circle","square"],table:{type:{summary:"circle | square"}}},size:{description:"尺寸",control:{type:"select"},options:["small","medium","large"],table:{type:{summary:"small | medium | large"}}},status:{description:"狀態",control:{type:"select"},options:["none","online","idle","busy","offline"],table:{type:{summary:"none | online | idle | busy | offline"}}},isShowInfo:{description:"是否顯示資訊",control:{type:"boolean"}},src:{description:"圖片連結",control:{type:"text"}},alt:{description:"圖片描述",control:{type:"text"}},userName:{description:"使用者名稱",control:{type:"text"}},caption:{description:"使用者描述",control:{type:"text"}},className:{description:"客製化樣式",control:{type:"text"}}},parameters:{docs:{title:"Avatar頭像",description:{component:"Avatar 組件的呈現及說明。"}}}},r={name:"預設項目",args:{shape:"circle",size:"large",status:"none",isShowInfo:!0,src:"https://storage.googleapis.com/ded-wds-bucket/monkey.png",alt:"無圖顯示",userName:"Name",caption:"Caption",className:""},render:a=>({components:{Avatar:o},setup(){return{args:a}},template:`
            <Avatar
                :shape="args.shape"
                :size="args.size"
                :status="args.status"
                :isShowInfo="args.isShowInfo"
                :src="args.src"
                :alt="args.alt"
                :userName="args.userName"
                :caption="args.caption"
                :className="args.className"
            ></Avatar>
        `}),parameters:{controls:{},docs:{source:{transform:(a,e)=>{const{args:s}=e;return["<Avatar",`  shape="${s.shape}"`,`  size="${s.size}"`,`  status="${s.status}"`,`  isShowInfo="${s.isShowInfo}"`,`  src="${s.src}"`,`  alt="${s.alt}"`,`  userName="${s.userName}"`,`  caption="${s.caption}"`,`  className="${s.className}"`,"></Avatar>"].join(`
`).trim()}}}}},t={name:"頭像形狀",args:{size:"large",status:"online",isShowInfo:!0,src:"https://storage.googleapis.com/ded-wds-bucket/fox.png",alt:"無圖顯示",userName:"Name",caption:"Caption",className:""},render:a=>({components:{Avatar:o},setup(){return{args:a}},template:`
            <div style="display: flex; gap: 32px; align-items: flex-end">
                <Avatar
                    shape="circle"
                    :size="args.size"
                    :status="args.status"
                    :isShowInfo="args.isShowInfo"
                    :src="args.src"
                    :alt="args.alt"
                    :userName="args.userName"
                    :caption="args.caption"
                    :className="args.className"
                ></Avatar>
                <Avatar
                    shape="square"
                    :size="args.size"
                    :status="args.status"
                    :isShowInfo="args.isShowInfo"
                    :src="args.src"
                    :alt="args.alt"
                    :userName="args.userName"
                    :caption="args.caption"
                    :className="args.className"
                ></Avatar>
            </div>
        `}),parameters:{controls:{exclude:["shape"]},docs:{source:{transform:(a,e)=>{const{args:s}=e;return["<Avatar",'  shape="circle"',`  size="${s.size}"`,`  status="${s.status}"`,`  isShowInfo="${s.isShowInfo}"`,`  src="${s.src}"`,`  alt="${s.alt}"`,`  userName="${s.userName}"`,`  caption="${s.caption}"`,`  className="${s.className}"`,"></Avatar>","<Avatar",'  shape="square"',`  size="${s.size}"`,`  status="${s.status}"`,`  isShowInfo="${s.isShowInfo}"`,`  src="${s.src}"`,`  alt="${s.alt}"`,`  userName="${s.userName}"`,`  caption="${s.caption}"`,`  className="${s.className}"`,"></Avatar>"].join(`
`).trim()}}}}},n={name:"頭像狀態",args:{shape:"circle",size:"large",isShowInfo:!0,src:"https://storage.googleapis.com/ded-wds-bucket/lion.png",alt:"無圖顯示",userName:"Name",caption:"Caption",className:""},render:a=>({components:{Avatar:o},setup(){return{args:a}},template:`
            <div style="display: flex; gap: 32px; align-items: flex-end">
                <Avatar
                    :shape="args.shape"
                    :size="args.size"
                    status="none"
                    :isShowInfo="args.isShowInfo"
                    :src="args.src"
                    :alt="args.alt"
                    :userName="args.userName"
                    :caption="args.caption"
                    :className="args.className"
                ></Avatar>
                <Avatar
                    :shape="args.shape"
                    :size="args.size"
                    status="online"
                    :isShowInfo="args.isShowInfo"
                    :src="args.src"
                    :alt="args.alt"
                    :userName="args.userName"
                    :caption="args.caption"
                    :className="args.className"
                ></Avatar>
                <Avatar
                    :shape="args.shape"
                    :size="args.size"
                    status="idle"
                    :isShowInfo="args.isShowInfo"
                    :src="args.src"
                    :alt="args.alt"
                    :userName="args.userName"
                    :caption="args.caption"
                    :className="args.className"
                ></Avatar>
                <Avatar
                    :shape="args.shape"
                    :size="args.size"
                    status="busy"
                    :isShowInfo="args.isShowInfo"
                    :src="args.src"
                    :alt="args.alt"
                    :userName="args.userName"
                    :caption="args.caption"
                    :className="args.className"
                ></Avatar>
                <Avatar
                    :shape="args.shape"
                    :size="args.size"
                    status="offline"
                    :isShowInfo="args.isShowInfo"
                    :src="args.src"
                    :alt="args.alt"
                    :userName="args.userName"
                    :caption="args.caption"
                    :className="args.className"
                ></Avatar>
            </div>
        `}),parameters:{controls:{exclude:["status"]},docs:{source:{transform:(a,e)=>{const{args:s}=e;return["<Avatar",`  shape="${s.shape}"`,`  size="${s.size}"`,'  status="none"',`  :isShowInfo="${s.isShowInfo}"`,`  src="${s.src}"`,`  alt="${s.alt}"`,`  userName="${s.userName}"`,`  caption="${s.caption}"`,`  className="${s.className}"`,"></Avatar>","<Avatar",'  shape="square"',`  size="${s.size}"`,'  status="online"',`  :isShowInfo="${s.isShowInfo}"`,`  src="${s.src}"`,`  alt="${s.alt}"`,`  userName="${s.userName}"`,`  caption="${s.caption}"`,`  className="${s.className}"`,"></Avatar>","<Avatar",'  shape="square"',`  size="${s.size}"`,'  status="idle"',`  :isShowInfo="${s.isShowInfo}"`,`  src="${s.src}"`,`  alt="${s.alt}"`,`  userName="${s.userName}"`,`  caption="${s.caption}"`,`  className="${s.className}"`,"></Avatar>","<Avatar",'  shape="square"',`  size="${s.size}"`,'  status="busy"',`  :isShowInfo="${s.isShowInfo}"`,`  src="${s.src}"`,`  alt="${s.alt}"`,`  userName="${s.userName}"`,`  caption="${s.caption}"`,`  className="${s.className}"`,"></Avatar>","<Avatar",'  shape="square"',`  size="${s.size}"`,'  status="offline"',`  :isShowInfo="${s.isShowInfo}"`,`  src="${s.src}"`,`  alt="${s.alt}"`,`  userName="${s.userName}"`,`  caption="${s.caption}"`,`  className="${s.className}"`,"></Avatar>"].join(`
`).trim()}}}}};var c,i,l;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  name: "預設項目",
  args: {
    shape: "circle",
    size: "large",
    status: "none",
    isShowInfo: true,
    src: "https://storage.googleapis.com/ded-wds-bucket/monkey.png",
    alt: "無圖顯示",
    userName: "Name",
    caption: 'Caption',
    className: ""
  },
  render: args => ({
    components: {
      Avatar
    },
    setup() {
      return {
        args
      };
    },
    template: \`
            <Avatar
                :shape="args.shape"
                :size="args.size"
                :status="args.status"
                :isShowInfo="args.isShowInfo"
                :src="args.src"
                :alt="args.alt"
                :userName="args.userName"
                :caption="args.caption"
                :className="args.className"
            ></Avatar>
        \`
  }),
  parameters: {
    controls: {
      // include: ['themeColor', 'label', 'value', 'name' ],
    },
    docs: {
      source: {
        transform: (src, storyContext) => {
          const {
            args
          } = storyContext;
          return ['<Avatar', \`  shape="\${args.shape}"\`, \`  size="\${args.size}"\`, \`  status="\${args.status}"\`, \`  isShowInfo="\${args.isShowInfo}"\`, \`  src="\${args.src}"\`, \`  alt="\${args.alt}"\`, \`  userName="\${args.userName}"\`, \`  caption="\${args.caption}"\`, \`  className="\${args.className}"\`, '></Avatar>'].join('\\n').trim();
        }
      }
    }
  }
}`,...(l=(i=r.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};var g,u,p;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
  name: "頭像形狀",
  args: {
    size: "large",
    status: "online",
    isShowInfo: true,
    src: "https://storage.googleapis.com/ded-wds-bucket/fox.png",
    alt: "無圖顯示",
    userName: "Name",
    caption: 'Caption',
    className: ""
  },
  render: args => ({
    components: {
      Avatar
    },
    setup() {
      return {
        args
      };
    },
    template: \`
            <div style="display: flex; gap: 32px; align-items: flex-end">
                <Avatar
                    shape="circle"
                    :size="args.size"
                    :status="args.status"
                    :isShowInfo="args.isShowInfo"
                    :src="args.src"
                    :alt="args.alt"
                    :userName="args.userName"
                    :caption="args.caption"
                    :className="args.className"
                ></Avatar>
                <Avatar
                    shape="square"
                    :size="args.size"
                    :status="args.status"
                    :isShowInfo="args.isShowInfo"
                    :src="args.src"
                    :alt="args.alt"
                    :userName="args.userName"
                    :caption="args.caption"
                    :className="args.className"
                ></Avatar>
            </div>
        \`
  }),
  // 控制 controls 中能控制的參數
  parameters: {
    controls: {
      // include: ['themeColor', 'label', 'value', 'name' ],
      exclude: ['shape']
    },
    docs: {
      source: {
        transform: (src, storyContext) => {
          const {
            args
          } = storyContext;
          return ['<Avatar', \`  shape="circle"\`, \`  size="\${args.size}"\`, \`  status="\${args.status}"\`, \`  isShowInfo="\${args.isShowInfo}"\`, \`  src="\${args.src}"\`, \`  alt="\${args.alt}"\`, \`  userName="\${args.userName}"\`, \`  caption="\${args.caption}"\`, \`  className="\${args.className}"\`, '></Avatar>', '<Avatar', \`  shape="square"\`, \`  size="\${args.size}"\`, \`  status="\${args.status}"\`, \`  isShowInfo="\${args.isShowInfo}"\`, \`  src="\${args.src}"\`, \`  alt="\${args.alt}"\`, \`  userName="\${args.userName}"\`, \`  caption="\${args.caption}"\`, \`  className="\${args.className}"\`, '></Avatar>'].join('\\n').trim();
        }
      }
    }
  }
}`,...(p=(u=t.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};var m,N,h;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:'{\n  name: "頭像狀態",\n  args: {\n    shape: "circle",\n    size: "large",\n    // status: "none",\n    isShowInfo: true,\n    src: "https://storage.googleapis.com/ded-wds-bucket/lion.png",\n    alt: "無圖顯示",\n    userName: "Name",\n    caption: \'Caption\',\n    className: ""\n  },\n  render: args => ({\n    components: {\n      Avatar\n    },\n    setup() {\n      return {\n        args\n      };\n    },\n    template: `\n            <div style="display: flex; gap: 32px; align-items: flex-end">\n                <Avatar\n                    :shape="args.shape"\n                    :size="args.size"\n                    status="none"\n                    :isShowInfo="args.isShowInfo"\n                    :src="args.src"\n                    :alt="args.alt"\n                    :userName="args.userName"\n                    :caption="args.caption"\n                    :className="args.className"\n                ></Avatar>\n                <Avatar\n                    :shape="args.shape"\n                    :size="args.size"\n                    status="online"\n                    :isShowInfo="args.isShowInfo"\n                    :src="args.src"\n                    :alt="args.alt"\n                    :userName="args.userName"\n                    :caption="args.caption"\n                    :className="args.className"\n                ></Avatar>\n                <Avatar\n                    :shape="args.shape"\n                    :size="args.size"\n                    status="idle"\n                    :isShowInfo="args.isShowInfo"\n                    :src="args.src"\n                    :alt="args.alt"\n                    :userName="args.userName"\n                    :caption="args.caption"\n                    :className="args.className"\n                ></Avatar>\n                <Avatar\n                    :shape="args.shape"\n                    :size="args.size"\n                    status="busy"\n                    :isShowInfo="args.isShowInfo"\n                    :src="args.src"\n                    :alt="args.alt"\n                    :userName="args.userName"\n                    :caption="args.caption"\n                    :className="args.className"\n                ></Avatar>\n                <Avatar\n                    :shape="args.shape"\n                    :size="args.size"\n                    status="offline"\n                    :isShowInfo="args.isShowInfo"\n                    :src="args.src"\n                    :alt="args.alt"\n                    :userName="args.userName"\n                    :caption="args.caption"\n                    :className="args.className"\n                ></Avatar>\n            </div>\n        `\n  }),\n  // 控制 controls 中能控制的參數\n  parameters: {\n    controls: {\n      exclude: [\'status\']\n    },\n    docs: {\n      source: {\n        transform: (src, storyContext) => {\n          const {\n            args\n          } = storyContext;\n          return [\'<Avatar\', `  shape="${args.shape}"`, `  size="${args.size}"`, `  status="none"`, `  :isShowInfo="${args.isShowInfo}"`, `  src="${args.src}"`, `  alt="${args.alt}"`, `  userName="${args.userName}"`, `  caption="${args.caption}"`, `  className="${args.className}"`, \'></Avatar>\', \'<Avatar\', `  shape="square"`, `  size="${args.size}"`, `  status="online"`, `  :isShowInfo="${args.isShowInfo}"`, `  src="${args.src}"`, `  alt="${args.alt}"`, `  userName="${args.userName}"`, `  caption="${args.caption}"`, `  className="${args.className}"`, \'></Avatar>\', \'<Avatar\', `  shape="square"`, `  size="${args.size}"`, `  status="idle"`, `  :isShowInfo="${args.isShowInfo}"`, `  src="${args.src}"`, `  alt="${args.alt}"`, `  userName="${args.userName}"`, `  caption="${args.caption}"`, `  className="${args.className}"`, \'></Avatar>\', \'<Avatar\', `  shape="square"`, `  size="${args.size}"`, `  status="busy"`, `  :isShowInfo="${args.isShowInfo}"`, `  src="${args.src}"`, `  alt="${args.alt}"`, `  userName="${args.userName}"`, `  caption="${args.caption}"`, `  className="${args.className}"`, \'></Avatar>\', \'<Avatar\', `  shape="square"`, `  size="${args.size}"`, `  status="offline"`, `  :isShowInfo="${args.isShowInfo}"`, `  src="${args.src}"`, `  alt="${args.alt}"`, `  userName="${args.userName}"`, `  caption="${args.caption}"`, `  className="${args.className}"`, \'></Avatar>\'].join(\'\\n\').trim();\n        }\n      }\n    }\n  }\n}',...(h=(N=n.parameters)==null?void 0:N.docs)==null?void 0:h.source}}};const z=["DefaultAvatar","AvatarShape","AvatarStatus"];export{t as AvatarShape,n as AvatarStatus,r as DefaultAvatar,z as __namedExportsOrder,w as default};

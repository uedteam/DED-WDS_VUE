import{_ as l}from"./Avatar-BYfcXdy_.js";import"./vue.esm-bundler-_3atnb9w.js";import"./Image-CFP8XOjt.js";import"./index-Bb4qSo10.js";import"./Icon-Bfh9I3oh.js";import"./iframe-CYxoECph.js";import"../sb-preview/runtime.js";const f={title:"Design System/Avatar",component:l,tags:["autodocs"],argTypes:{shape:{description:"形狀",control:{type:"select"},options:["circle","square"],table:{type:{summary:"circle | square"}}},size:{description:"尺寸",control:{type:"select"},options:["xsmall","small","medium","large"],table:{type:{summary:"xsmall | small | medium | large"}}},status:{description:"狀態",control:{type:"select"},options:["none","online","idle","busy","offline"],table:{type:{summary:"none | online | idle | busy | offline"}}},userName:{description:"使用者名稱",control:{type:"text"}},src:{description:"圖片連結",control:{type:"text"}},alt:{description:"圖片描述",control:{type:"text"}},limit:{description:"在 AvatarGroup 中控制顯示的 Avatar 數量上限",control:{type:"number",min:0,max:5,step:1}},className:{description:"客製化樣式",control:{type:"text"}}},parameters:{docs:{title:"Avatar頭像",description:{component:"Avatar 組件的呈現及說明。"}}}},r={name:"預設項目",args:{shape:"circle",size:"large",status:"none",src:"https://picsum.photos/320/240",alt:"alt text",userName:"JonyWu",className:""},render:a=>({components:{Avatar:l},setup(){return{args:a}},template:`
            <Avatar
                :shape="args.shape"
                :size="args.size"
                :userName="args.userName"
                :status="args.status"
                :src="args.src"
                :alt="args.alt"
                :className="args.className"
            ></Avatar>
        `}),parameters:{controls:{exclude:["limit"]},docs:{source:{transform:(a,e)=>{const{args:s}=e;return["<Avatar",`  shape="${s.shape}"`,`  size="${s.size}"`,`  status="${s.status}"`,`  src="${s.src}"`,`  alt="${s.alt}"`,`  userName="${s.userName}"`,`  className="${s.className}"`,"></Avatar>"].join(`
`).trim()}}}}},t={name:"頭像形狀",args:{size:"large",status:"none",src:"https://picsum.photos/320/240",alt:"alt text",userName:"JonyWu",className:""},render:a=>({components:{Avatar:l},setup(){return{args:a}},template:`
            <div style="display: flex; gap: 32px; align-items: flex-end">
                <Avatar
                    shape="circle"
                    :size="args.size"
                    :status="args.status"
                    :src="args.src"
                    :alt="args.alt"
                    :userName="args.userName"
                    :className="args.className"
                ></Avatar>
                <Avatar
                    shape="square"
                    :size="args.size"
                    :status="args.status"
                    :src="args.src"
                    :alt="args.alt"
                    :userName="args.userName"
                    :className="args.className"
                ></Avatar>
            </div>
        `}),parameters:{controls:{exclude:["shape","limit"]},docs:{source:{transform:(a,e)=>{const{args:s}=e;return["<Avatar",'  shape="circle"',`  size="${s.size}"`,`  status="${s.status}"`,`  src="${s.src}"`,`  alt="${s.alt}"`,`  userName="${s.userName}"`,`  className="${s.className}"`,"></Avatar>","<Avatar",'  shape="square"',`  size="${s.size}"`,`  status="${s.status}"`,`  src="${s.src}"`,`  alt="${s.alt}"`,`  userName="${s.userName}"`,`  className="${s.className}"`,"></Avatar>"].join(`
`).trim()}}}}},n={name:"頭像狀態",args:{shape:"circle",size:"large",src:"https://picsum.photos/320/240",alt:"alt text",userName:"JonyWu",className:""},render:a=>({components:{Avatar:l},setup(){return{args:a}},template:`
            <div style="display: flex; gap: 32px; align-items: flex-end">
                <Avatar
                    :shape="args.shape"
                    :size="args.size"
                    status="none"
                    :src="args.src"
                    :alt="args.alt"
                    :userName="args.userName"
                ></Avatar>
                <Avatar
                    :shape="args.shape"
                    :size="args.size"
                    status="online"
                    :src="args.src"
                    :alt="args.alt"
                    :userName="args.userName"
                ></Avatar>
                <Avatar
                    :shape="args.shape"
                    :size="args.size"
                    status="idle"
                    :src="args.src"
                    :alt="args.alt"
                    :userName="args.userName"
                ></Avatar>
                <Avatar
                    :shape="args.shape"
                    :size="args.size"
                    status="busy"
                    :src="args.src"
                    :alt="args.alt"
                    :userName="args.userName"
                ></Avatar>
                <Avatar
                    :shape="args.shape"
                    :size="args.size"
                    status="offline"
                    :src="args.src"
                    :alt="args.alt"
                    :userName="args.userName"
                ></Avatar>
            </div>
            
        `}),parameters:{controls:{exclude:["status","limit"]},docs:{source:{transform:(a,e)=>{const{args:s}=e;return["<Avatar",`  shape="${s.shape}"`,`  size="${s.size}"`,'  status="none"',`  src="${s.src}"`,`  alt="${s.alt}"`,`  userName="${s.userName}"`,`  className="${s.className}"`,"></Avatar>","<Avatar",'  shape="square"',`  size="${s.size}"`,'  status="online"',`  src="${s.src}"`,`  alt="${s.alt}"`,`  userName="${s.userName}"`,`  className="${s.className}"`,"></Avatar>","<Avatar",'  shape="square"',`  size="${s.size}"`,'  status="idle"',`  src="${s.src}"`,`  alt="${s.alt}"`,`  userName="${s.userName}"`,`  className="${s.className}"`,"></Avatar>","<Avatar",'  shape="square"',`  size="${s.size}"`,'  status="busy"',`  src="${s.src}"`,`  alt="${s.alt}"`,`  userName="${s.userName}"`,`  className="${s.className}"`,"></Avatar>","<Avatar",'  shape="square"',`  size="${s.size}"`,'  status="offline"',`  src="${s.src}"`,`  alt="${s.alt}"`,`  userName="${s.userName}"`,`  className="${s.className}"`,"></Avatar>"].join(`
`).trim()}}}}};var u,c,m;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  name: "預設項目",
  args: {
    shape: "circle",
    size: "large",
    status: "none",
    src: "https://picsum.photos/320/240",
    alt: "alt text",
    userName: "JonyWu",
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
                :userName="args.userName"
                :status="args.status"
                :src="args.src"
                :alt="args.alt"
                :className="args.className"
            ></Avatar>
        \`
  }),
  // 控制 controls 中能控制的參數
  parameters: {
    controls: {
      // include: ['themeColor', 'label', 'value', 'name' ],
      exclude: ['limit']
    },
    docs: {
      source: {
        transform: (src, storyContext) => {
          const {
            args
          } = storyContext;
          return ['<Avatar', \`  shape="\${args.shape}"\`, \`  size="\${args.size}"\`, \`  status="\${args.status}"\`, \`  src="\${args.src}"\`, \`  alt="\${args.alt}"\`, \`  userName="\${args.userName}"\`, \`  className="\${args.className}"\`, '></Avatar>'].join('\\n').trim();
        }
      }
    }
  }
}`,...(m=(c=r.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var i,o,g;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
  name: "頭像形狀",
  args: {
    size: "large",
    status: "none",
    src: "https://picsum.photos/320/240",
    alt: "alt text",
    userName: "JonyWu",
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
                    :src="args.src"
                    :alt="args.alt"
                    :userName="args.userName"
                    :className="args.className"
                ></Avatar>
                <Avatar
                    shape="square"
                    :size="args.size"
                    :status="args.status"
                    :src="args.src"
                    :alt="args.alt"
                    :userName="args.userName"
                    :className="args.className"
                ></Avatar>
            </div>
        \`
  }),
  // 控制 controls 中能控制的參數
  parameters: {
    controls: {
      // include: ['themeColor', 'label', 'value', 'name' ],
      exclude: ['shape', 'limit']
    },
    docs: {
      source: {
        transform: (src, storyContext) => {
          const {
            args
          } = storyContext;
          return ['<Avatar', \`  shape="circle"\`, \`  size="\${args.size}"\`, \`  status="\${args.status}"\`, \`  src="\${args.src}"\`, \`  alt="\${args.alt}"\`, \`  userName="\${args.userName}"\`, \`  className="\${args.className}"\`, '></Avatar>', '<Avatar', \`  shape="square"\`, \`  size="\${args.size}"\`, \`  status="\${args.status}"\`, \`  src="\${args.src}"\`, \`  alt="\${args.alt}"\`, \`  userName="\${args.userName}"\`, \`  className="\${args.className}"\`, '></Avatar>'].join('\\n').trim();
        }
      }
    }
  }
}`,...(g=(o=t.parameters)==null?void 0:o.docs)==null?void 0:g.source}}};var p,N,v;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: "頭像狀態",
  args: {
    shape: "circle",
    size: "large",
    src: "https://picsum.photos/320/240",
    alt: "alt text",
    userName: "JonyWu",
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
                    :shape="args.shape"
                    :size="args.size"
                    status="none"
                    :src="args.src"
                    :alt="args.alt"
                    :userName="args.userName"
                ></Avatar>
                <Avatar
                    :shape="args.shape"
                    :size="args.size"
                    status="online"
                    :src="args.src"
                    :alt="args.alt"
                    :userName="args.userName"
                ></Avatar>
                <Avatar
                    :shape="args.shape"
                    :size="args.size"
                    status="idle"
                    :src="args.src"
                    :alt="args.alt"
                    :userName="args.userName"
                ></Avatar>
                <Avatar
                    :shape="args.shape"
                    :size="args.size"
                    status="busy"
                    :src="args.src"
                    :alt="args.alt"
                    :userName="args.userName"
                ></Avatar>
                <Avatar
                    :shape="args.shape"
                    :size="args.size"
                    status="offline"
                    :src="args.src"
                    :alt="args.alt"
                    :userName="args.userName"
                ></Avatar>
            </div>
            
        \`
  }),
  // 控制 controls 中能控制的參數
  parameters: {
    controls: {
      // include: ['themeColor', 'label', 'value', 'name' ],
      exclude: ['status', 'limit']
    },
    docs: {
      source: {
        transform: (src, storyContext) => {
          const {
            args
          } = storyContext;
          return ['<Avatar', \`  shape="\${args.shape}"\`, \`  size="\${args.size}"\`, \`  status="none"\`, \`  src="\${args.src}"\`, \`  alt="\${args.alt}"\`, \`  userName="\${args.userName}"\`, \`  className="\${args.className}"\`, '></Avatar>', '<Avatar', \`  shape="square"\`, \`  size="\${args.size}"\`, \`  status="online"\`, \`  src="\${args.src}"\`, \`  alt="\${args.alt}"\`, \`  userName="\${args.userName}"\`, \`  className="\${args.className}"\`, '></Avatar>', '<Avatar', \`  shape="square"\`, \`  size="\${args.size}"\`, \`  status="idle"\`, \`  src="\${args.src}"\`, \`  alt="\${args.alt}"\`, \`  userName="\${args.userName}"\`, \`  className="\${args.className}"\`, '></Avatar>', '<Avatar', \`  shape="square"\`, \`  size="\${args.size}"\`, \`  status="busy"\`, \`  src="\${args.src}"\`, \`  alt="\${args.alt}"\`, \`  userName="\${args.userName}"\`, \`  className="\${args.className}"\`, '></Avatar>', '<Avatar', \`  shape="square"\`, \`  size="\${args.size}"\`, \`  status="offline"\`, \`  src="\${args.src}"\`, \`  alt="\${args.alt}"\`, \`  userName="\${args.userName}"\`, \`  className="\${args.className}"\`, '></Avatar>'].join('\\n').trim();
        }
      }
    }
  }
}`,...(v=(N=n.parameters)==null?void 0:N.docs)==null?void 0:v.source}}};const C=["DefaultAvatar","AvatarShape","AvatarStatus"];export{t as AvatarShape,n as AvatarStatus,r as DefaultAvatar,C as __namedExportsOrder,f as default};

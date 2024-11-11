import{_ as m}from"./Avatar-Dp4FFlga.js";import"./vue.esm-bundler-jfoHxfC9.js";import"./Image-DrQp4sVr.js";import"./index-Bb4qSo10.js";import"./Icon-DakahK8X.js";import"./iframe-CGSdzTJx.js";import"../sb-preview/runtime.js";const x={title:"Design System/Avatar",component:m,tags:["autodocs"],argTypes:{shape:{description:"形狀",control:{type:"select"},options:["circle","square"]},size:{description:"Avatar 尺寸",control:{type:"select"},options:["xsmall","small","medium","large"]},username:{description:"使用者名稱",control:{type:"text"}},status:{description:"狀態",control:{type:"select"},options:["default","online","idle","busy","offline"]},imageSrc:{description:"圖片連結",control:{type:"text"}},imageAlt:{description:"圖片描述",control:{type:"text"}},limit:{description:"在 AvatarGroup 中控制顯示的 Avatar 數量上限",control:{type:"number",min:0,max:5,step:1}},className:{description:"客製化樣式",control:{type:"text"}}},parameters:{docs:{title:"Avatar頭像",description:{component:"Avatar 組件的呈現及說明。"}}}},r={name:"預設項目",args:{shape:"circle",size:"large",username:"JonyWu",status:"online",imageSrc:"https://picsum.photos/320/240",imageAlt:"alt text",className:""},render:e=>({components:{Avatar:m},setup(){return{args:e}},template:`
            <Avatar
                :shape="args.shape"
                :size="args.size"
                :username="args.username"
                :status="args.status"
                :imageSrc="args.imageSrc"
                :imageAlt="args.imageAlt"
                :className="args.className"
            ></Avatar>
        `}),parameters:{controls:{exclude:["limit"]},docs:{source:{transform:(e,s)=>{const{args:a}=s;return["<Avatar",`  shape="${a.shape}"`,`  size="${a.size}"`,`  username="${a.username}"`,`  status="${a.status}"`,`  imageSrc="${a.imageSrc}"`,`  imageAlt="${a.imageAlt}"`,`  className="${a.className}"`,"></Avatar>"].join(`
`).trim()}}}}},t={name:"頭像形狀",args:{size:"large",status:"default",imageSrc:"https://picsum.photos/320/240",imageAlt:"alt text",username:"JonyWu",className:""},render:e=>({components:{Avatar:m},setup(){return{args:e}},template:`
            <div style="display:flex; gap: 16px">
                <Avatar
                    shape="circle"
                    :size="args.size"
                    :status="args.status"
                    :imageSrc="args.imageSrc"
                    :imageAlt="args.imageAlt"
                    :username="args.username"
                ></Avatar>
                <Avatar
                    shape="square"
                    :size="args.size"
                    :status="args.status"
                    :imageSrc="args.imageSrc"
                    :imageAlt="args.imageAlt"
                    :username="args.username"
                ></Avatar>
            </div>
        `}),parameters:{controls:{exclude:["shape","limit"]},docs:{source:{transform:(e,s)=>{const{args:a}=s;return["<Avatar",'  shape="circle"',`  size="${a.size}"`,`  username="${a.username}"`,`  status="${a.status}"`,`  imageSrc="${a.imageSrc}"`,`  imageAlt="${a.imageAlt}"`,`  className="${a.className}"`,"></Avatar>","<Avatar",'  shape="square"',`  size="${a.size}"`,`  username="${a.username}"`,`  status="${a.status}"`,`  imageSrc="${a.imageSrc}"`,`  imageAlt="${a.imageAlt}"`,`  className="${a.className}"`,"></Avatar>"].join(`
`).trim()}}}}},n={name:"頭像狀態",args:{shape:"circle",size:"large",imageSrc:"https://picsum.photos/320/240",imageAlt:"alt text",username:"JonyWu",className:""},render:e=>({components:{Avatar:m},setup(){return{args:e}},template:`
            <div style="display:flex; gap: 16px">
                <Avatar
                    :shape="args.shape"
                    :size="args.size"
                    status="default"
                    :imageSrc="args.imageSrc"
                    :imageAlt="args.imageAlt"
                    :username="args.username"
                ></Avatar>
                <Avatar
                    :shape="args.shape"
                    :size="args.size"
                    status="online"
                    :imageSrc="args.imageSrc"
                    :imageAlt="args.imageAlt"
                    :username="args.username"
                ></Avatar>
                <Avatar
                    :shape="args.shape"
                    :size="args.size"
                    status="idle"
                    :imageSrc="args.imageSrc"
                    :imageAlt="args.imageAlt"
                    :username="args.username"
                ></Avatar>
                <Avatar
                    :shape="args.shape"
                    :size="args.size"
                    status="busy"
                    :imageSrc="args.imageSrc"
                    :imageAlt="args.imageAlt"
                    :username="args.username"
                ></Avatar>
                <Avatar
                    :shape="args.shape"
                    :size="args.size"
                    status="offline"
                    :imageSrc="args.imageSrc"
                    :imageAlt="args.imageAlt"
                    :username="args.username"
                ></Avatar>
            </div>
            
        `}),parameters:{controls:{exclude:["status","limit"]},docs:{source:{transform:(e,s)=>{const{args:a}=s;return["<Avatar",`  shape="${a.shape}"`,`  size="${a.size}"`,`  username="${a.username}"`,'  status="default"',`  imageSrc="${a.imageSrc}"`,`  imageAlt="${a.imageAlt}"`,`  className="${a.className}"`,"></Avatar>","<Avatar",'  shape="square"',`  size="${a.size}"`,`  username="${a.username}"`,'  status="online"',`  imageSrc="${a.imageSrc}"`,`  imageAlt="${a.imageAlt}"`,`  className="${a.className}"`,"></Avatar>","<Avatar",'  shape="square"',`  size="${a.size}"`,`  username="${a.username}"`,'  status="idle"',`  imageSrc="${a.imageSrc}"`,`  imageAlt="${a.imageAlt}"`,`  className="${a.className}"`,"></Avatar>","<Avatar",'  shape="square"',`  size="${a.size}"`,`  username="${a.username}"`,'  status="busy"',`  imageSrc="${a.imageSrc}"`,`  imageAlt="${a.imageAlt}"`,`  className="${a.className}"`,"></Avatar>","<Avatar",'  shape="square"',`  size="${a.size}"`,`  username="${a.username}"`,'  status="offline"',`  imageSrc="${a.imageSrc}"`,`  imageAlt="${a.imageAlt}"`,`  className="${a.className}"`,"></Avatar>"].join(`
`).trim()}}}}};var i,g,u;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  name: "預設項目",
  args: {
    shape: "circle",
    size: "large",
    username: "JonyWu",
    status: "online",
    imageSrc: "https://picsum.photos/320/240",
    imageAlt: "alt text",
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
                :username="args.username"
                :status="args.status"
                :imageSrc="args.imageSrc"
                :imageAlt="args.imageAlt"
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
          return ['<Avatar', \`  shape="\${args.shape}"\`, \`  size="\${args.size}"\`, \`  username="\${args.username}"\`, \`  status="\${args.status}"\`, \`  imageSrc="\${args.imageSrc}"\`, \`  imageAlt="\${args.imageAlt}"\`, \`  className="\${args.className}"\`, '></Avatar>'].join('\\n').trim();
        }
      }
    }
  }
}`,...(u=(g=r.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};var l,c,o;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  name: "頭像形狀",
  args: {
    size: "large",
    status: "default",
    imageSrc: "https://picsum.photos/320/240",
    imageAlt: "alt text",
    username: "JonyWu",
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
            <div style="display:flex; gap: 16px">
                <Avatar
                    shape="circle"
                    :size="args.size"
                    :status="args.status"
                    :imageSrc="args.imageSrc"
                    :imageAlt="args.imageAlt"
                    :username="args.username"
                ></Avatar>
                <Avatar
                    shape="square"
                    :size="args.size"
                    :status="args.status"
                    :imageSrc="args.imageSrc"
                    :imageAlt="args.imageAlt"
                    :username="args.username"
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
          return ['<Avatar', \`  shape="circle"\`, \`  size="\${args.size}"\`, \`  username="\${args.username}"\`, \`  status="\${args.status}"\`, \`  imageSrc="\${args.imageSrc}"\`, \`  imageAlt="\${args.imageAlt}"\`, \`  className="\${args.className}"\`, '></Avatar>', '<Avatar', \`  shape="square"\`, \`  size="\${args.size}"\`, \`  username="\${args.username}"\`, \`  status="\${args.status}"\`, \`  imageSrc="\${args.imageSrc}"\`, \`  imageAlt="\${args.imageAlt}"\`, \`  className="\${args.className}"\`, '></Avatar>'].join('\\n').trim();
        }
      }
    }
  }
}`,...(o=(c=t.parameters)==null?void 0:c.docs)==null?void 0:o.source}}};var A,p,v;n.parameters={...n.parameters,docs:{...(A=n.parameters)==null?void 0:A.docs,source:{originalSource:`{
  name: "頭像狀態",
  args: {
    shape: "circle",
    size: "large",
    imageSrc: "https://picsum.photos/320/240",
    imageAlt: "alt text",
    username: "JonyWu",
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
            <div style="display:flex; gap: 16px">
                <Avatar
                    :shape="args.shape"
                    :size="args.size"
                    status="default"
                    :imageSrc="args.imageSrc"
                    :imageAlt="args.imageAlt"
                    :username="args.username"
                ></Avatar>
                <Avatar
                    :shape="args.shape"
                    :size="args.size"
                    status="online"
                    :imageSrc="args.imageSrc"
                    :imageAlt="args.imageAlt"
                    :username="args.username"
                ></Avatar>
                <Avatar
                    :shape="args.shape"
                    :size="args.size"
                    status="idle"
                    :imageSrc="args.imageSrc"
                    :imageAlt="args.imageAlt"
                    :username="args.username"
                ></Avatar>
                <Avatar
                    :shape="args.shape"
                    :size="args.size"
                    status="busy"
                    :imageSrc="args.imageSrc"
                    :imageAlt="args.imageAlt"
                    :username="args.username"
                ></Avatar>
                <Avatar
                    :shape="args.shape"
                    :size="args.size"
                    status="offline"
                    :imageSrc="args.imageSrc"
                    :imageAlt="args.imageAlt"
                    :username="args.username"
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
          return ['<Avatar', \`  shape="\${args.shape}"\`, \`  size="\${args.size}"\`, \`  username="\${args.username}"\`, \`  status="default"\`, \`  imageSrc="\${args.imageSrc}"\`, \`  imageAlt="\${args.imageAlt}"\`, \`  className="\${args.className}"\`, '></Avatar>', '<Avatar', \`  shape="square"\`, \`  size="\${args.size}"\`, \`  username="\${args.username}"\`, \`  status="online"\`, \`  imageSrc="\${args.imageSrc}"\`, \`  imageAlt="\${args.imageAlt}"\`, \`  className="\${args.className}"\`, '></Avatar>', '<Avatar', \`  shape="square"\`, \`  size="\${args.size}"\`, \`  username="\${args.username}"\`, \`  status="idle"\`, \`  imageSrc="\${args.imageSrc}"\`, \`  imageAlt="\${args.imageAlt}"\`, \`  className="\${args.className}"\`, '></Avatar>', '<Avatar', \`  shape="square"\`, \`  size="\${args.size}"\`, \`  username="\${args.username}"\`, \`  status="busy"\`, \`  imageSrc="\${args.imageSrc}"\`, \`  imageAlt="\${args.imageAlt}"\`, \`  className="\${args.className}"\`, '></Avatar>', '<Avatar', \`  shape="square"\`, \`  size="\${args.size}"\`, \`  username="\${args.username}"\`, \`  status="offline"\`, \`  imageSrc="\${args.imageSrc}"\`, \`  imageAlt="\${args.imageAlt}"\`, \`  className="\${args.className}"\`, '></Avatar>'].join('\\n').trim();
        }
      }
    }
  }
}`,...(v=(p=n.parameters)==null?void 0:p.docs)==null?void 0:v.source}}};const f=["DefaultAvatar","AvatarShape","AvatarStatus"];export{t as AvatarShape,n as AvatarStatus,r as DefaultAvatar,f as __namedExportsOrder,x as default};

import{_ as t}from"./Avatar-DPewAm7F.js";import"./vue.esm-bundler-qOdkfnRX.js";import"./Image-DOyi4KS4.js";import"./index-Bb4qSo10.js";import"./Icon-NU05TGua.js";import"./iframe-BdY8iLAL.js";import"../sb-preview/runtime.js";const y={title:"Design System/Avatar",component:t,tags:["autodocs"],argTypes:{shape:{description:"形狀",control:{type:"select"},options:["circle","square"]},size:{description:"Avatar 尺寸",control:{type:"select"},options:["xsmall","small","medium","large"]},username:{description:"使用者名稱",control:{type:"text"}},status:{description:"狀態",control:{type:"select"},options:["default","online","idle","busy","offline"]},imageSrc:{description:"圖片連結",control:{type:"text"}},imageAlt:{description:"圖片描述",control:{type:"text"}},limit:{description:"在 AvatarGroup 中控制顯示的 Avatar 數量上限",control:{type:"number",min:0,max:5,step:1}},className:{description:"客製化樣式",control:{type:"text"}}},parameters:{docs:{title:"Avatar頭像",description:{component:"Avatar 組件的呈現及說明。"}}}},e={name:"主要項目",args:{shape:"circle",size:"large",username:"JonyWu",status:"online",imageSrc:"https://picsum.photos/320/240",imageAlt:"alt text",className:""},render:a=>({components:{Avatar:t},setup(){return{args:a}},template:`
            <Avatar
                :shape="args.shape"
                :size="args.size"
                :username="args.username"
                :status="args.status"
                :imageSrc="args.imageSrc"
                :imageAlt="args.imageAlt"
                :className="args.className"
            ></Avatar>
        `}),parameters:{controls:{exclude:["limit"]}}},s={name:"頭像形狀",args:{size:"large",status:"default",imageSrc:"https://picsum.photos/320/240",imageAlt:"alt text",username:"JonyWu"},render:a=>({components:{Avatar:t},setup(){return{args:a}},template:`
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
        `}),parameters:{controls:{exclude:["shape","limit"]}}},r={name:"頭像狀態",args:{shape:"circle",size:"large",imageSrc:"https://picsum.photos/320/240",imageAlt:"alt text",username:"JonyWu"},render:a=>({components:{Avatar:t},setup(){return{args:a}},template:`
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
            
        `}),parameters:{controls:{exclude:["status","limit"]}}};var n,i,m;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  name: "主要項目",
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
    }
  }
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};var g,u,l;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  name: "頭像形狀",
  args: {
    size: "large",
    status: "default",
    imageSrc: "https://picsum.photos/320/240",
    imageAlt: "alt text",
    username: "JonyWu"
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
    }
  }
}`,...(l=(u=s.parameters)==null?void 0:u.docs)==null?void 0:l.source}}};var c,o,p;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  name: "頭像狀態",
  args: {
    shape: "circle",
    size: "large",
    imageSrc: "https://picsum.photos/320/240",
    imageAlt: "alt text",
    username: "JonyWu"
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
    }
  }
}`,...(p=(o=r.parameters)==null?void 0:o.docs)==null?void 0:p.source}}};const f=["DefaultAvatar","AvatarShape","AvatarStatus"];export{s as AvatarShape,r as AvatarStatus,e as DefaultAvatar,f as __namedExportsOrder,y as default};

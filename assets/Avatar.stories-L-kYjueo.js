import{_ as o}from"./Avatar-GfF4H_Oq.js";import"./vue.esm-bundler-D0YZwI1O.js";import"./Image-DHXTRmVG.js";import"./Icon-BEQChxlu.js";import"./iframe-BAU84F5S.js";import"../sb-preview/runtime.js";const S={title:"Component/Avatar",component:o,tags:["autodocs"],argTypes:{shape:{description:"形狀",control:{type:"select"},options:["circle","square"],table:{type:{summary:"circle | square"}}},size:{description:"尺寸",control:{type:"select"},options:["small","medium","large"],table:{type:{summary:"small | medium | large"}}},status:{description:"狀態",control:{type:"select"},options:["none","online","idle","busy","offline"],table:{type:{summary:"none | online | idle | busy | offline"}}},isShowInfo:{description:"是否顯示資訊",control:{type:"boolean"}},src:{description:"圖片連結",control:{type:"text"}},alt:{description:"圖片描述",control:{type:"text"}},userName:{description:"使用者名稱",control:{type:"text"}},caption:{description:"使用者描述",control:{type:"text"}},className:{description:"客製化樣式",control:{type:"text"}}},parameters:{docs:{title:"Avatar頭像",description:{component:"Avatar 組件的呈現及說明。"}}}},t={name:"預設項目",args:{shape:"circle",size:"large",status:"none",isShowInfo:!0,src:"https://storage.googleapis.com/ded-wds-bucket/monkey.png",alt:"無圖顯示",userName:"Name",caption:"Caption",className:""},render:a=>({components:{Avatar:o},setup(){return{args:a}},template:`
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
`).trim()}}}}},r={name:"頭像形狀",args:{size:"large",isShowInfo:!0,alt:"無圖顯示",userName:"Name",caption:"Caption",className:""},render:a=>({components:{Avatar:o},setup(){return{args:a}},template:`
            <div style="display: flex; gap: 32px; align-items: flex-end">
                <Avatar
                    shape="circle"
                    :size="args.size"
                    status="online"
                    :isShowInfo="args.isShowInfo"
                    src="https://storage.googleapis.com/ded-wds-bucket/fox.png"
                    :alt="args.alt"
                    :userName="args.userName"
                    :caption="args.caption"
                    :className="args.className"
                ></Avatar>
                <Avatar
                    shape="square"
                    :size="args.size"
                    status="idle"
                    :isShowInfo="args.isShowInfo"
                    src="https://storage.googleapis.com/ded-wds-bucket/tigger.png"
                    :alt="args.alt"
                    :userName="args.userName"
                    :caption="args.caption"
                    :className="args.className"
                ></Avatar>
            </div>
        `}),parameters:{controls:{exclude:["shape","status","src"]},docs:{source:{transform:(a,e)=>{const{args:s}=e;return["<Avatar",'  shape="circle"',`  size="${s.size}"`,'  status="online"',`  isShowInfo="${s.isShowInfo}"`,'  src="https://storage.googleapis.com/ded-wds-bucket/fox.png"',`  alt="${s.alt}"`,`  userName="${s.userName}"`,`  caption="${s.caption}"`,`  className="${s.className}"`,"></Avatar>","<Avatar",'  shape="square"',`  size="${s.size}"`,'  status="idle"',`  isShowInfo="${s.isShowInfo}"`,'  src="https://storage.googleapis.com/ded-wds-bucket/tigger.png"',`  alt="${s.alt}"`,`  userName="${s.userName}"`,`  caption="${s.caption}"`,`  className="${s.className}"`,"></Avatar>"].join(`
`).trim()}}}}},n={name:"頭像狀態",args:{shape:"circle",size:"large",isShowInfo:!0,alt:"無圖顯示",userName:"Name",caption:"Caption",className:""},render:a=>({components:{Avatar:o},setup(){return{args:a}},template:`
            <div style="display: flex; gap: 32px; align-items: flex-end">
                <Avatar
                    :shape="args.shape"
                    :size="args.size"
                    status="none"
                    :isShowInfo="args.isShowInfo"
                    src="https://storage.googleapis.com/ded-wds-bucket/fox.png"
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
                    src="https://storage.googleapis.com/ded-wds-bucket/lion.png"
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
                    src="https://storage.googleapis.com/ded-wds-bucket/koala.png"
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
                    src="https://storage.googleapis.com/ded-wds-bucket/dog.png"
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
                    src="https://storage.googleapis.com/ded-wds-bucket/pig.png"
                    :alt="args.alt"
                    :userName="args.userName"
                    :caption="args.caption"
                    :className="args.className"
                ></Avatar>
            </div>
        `}),parameters:{controls:{exclude:["status","limit"]},docs:{source:{transform:(a,e)=>{const{args:s}=e;return["<Avatar",`  shape="${s.shape}"`,`  size="${s.size}"`,'  status="none"',`  :isShowInfo="${s.isShowInfo}"`,'  src="https://storage.googleapis.com/ded-wds-bucket/fox.png"',`  alt="${s.alt}"`,`  userName="${s.userName}"`,`  caption="${s.caption}"`,`  className="${s.className}"`,"></Avatar>","<Avatar",'  shape="square"',`  size="${s.size}"`,'  status="online"',`  :isShowInfo="${s.isShowInfo}"`,'  src="https://storage.googleapis.com/ded-wds-bucket/lion.png"',`  alt="${s.alt}"`,`  userName="${s.userName}"`,`  caption="${s.caption}"`,`  className="${s.className}"`,"></Avatar>","<Avatar",'  shape="square"',`  size="${s.size}"`,'  status="idle"',`  :isShowInfo="${s.isShowInfo}"`,'  src="https://storage.googleapis.com/ded-wds-bucket/koala.png"',`  alt="${s.alt}"`,`  userName="${s.userName}"`,`  caption="${s.caption}"`,`  className="${s.className}"`,"></Avatar>","<Avatar",'  shape="square"',`  size="${s.size}"`,'  status="busy"',`  :isShowInfo="${s.isShowInfo}"`,'  src="https://storage.googleapis.com/ded-wds-bucket/dog.png"',`  alt="${s.alt}"`,`  userName="${s.userName}"`,`  caption="${s.caption}"`,`  className="${s.className}"`,"></Avatar>","<Avatar",'  shape="square"',`  size="${s.size}"`,'  status="offline"',`  :isShowInfo="${s.isShowInfo}"`,'  src="https://storage.googleapis.com/ded-wds-bucket/pig.png"',`  alt="${s.alt}"`,`  userName="${s.userName}"`,`  caption="${s.caption}"`,`  className="${s.className}"`,"></Avatar>"].join(`
`).trim()}}}}};var i,c,g;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(g=(c=t.parameters)==null?void 0:c.docs)==null?void 0:g.source}}};var p,l,u;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: "頭像形狀",
  args: {
    size: "large",
    isShowInfo: true,
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
                    status="online"
                    :isShowInfo="args.isShowInfo"
                    src="https://storage.googleapis.com/ded-wds-bucket/fox.png"
                    :alt="args.alt"
                    :userName="args.userName"
                    :caption="args.caption"
                    :className="args.className"
                ></Avatar>
                <Avatar
                    shape="square"
                    :size="args.size"
                    status="idle"
                    :isShowInfo="args.isShowInfo"
                    src="https://storage.googleapis.com/ded-wds-bucket/tigger.png"
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
      exclude: ['shape', 'status', 'src']
    },
    docs: {
      source: {
        transform: (src, storyContext) => {
          const {
            args
          } = storyContext;
          return ['<Avatar', \`  shape="circle"\`, \`  size="\${args.size}"\`, \`  status="online"\`, \`  isShowInfo="\${args.isShowInfo}"\`, \`  src="https://storage.googleapis.com/ded-wds-bucket/fox.png"\`, \`  alt="\${args.alt}"\`, \`  userName="\${args.userName}"\`, \`  caption="\${args.caption}"\`, \`  className="\${args.className}"\`, '></Avatar>', '<Avatar', \`  shape="square"\`, \`  size="\${args.size}"\`, \`  status="idle"\`, \`  isShowInfo="\${args.isShowInfo}"\`, \`  src="https://storage.googleapis.com/ded-wds-bucket/tigger.png"\`, \`  alt="\${args.alt}"\`, \`  userName="\${args.userName}"\`, \`  caption="\${args.caption}"\`, \`  className="\${args.className}"\`, '></Avatar>'].join('\\n').trim();
        }
      }
    }
  }
}`,...(u=(l=r.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};var m,d,h;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: "頭像狀態",
  args: {
    shape: "circle",
    size: "large",
    // status: "none",
    isShowInfo: true,
    // src: "https://storage.googleapis.com/ded-wds-bucket/monkey.png",
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
                    :shape="args.shape"
                    :size="args.size"
                    status="none"
                    :isShowInfo="args.isShowInfo"
                    src="https://storage.googleapis.com/ded-wds-bucket/fox.png"
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
                    src="https://storage.googleapis.com/ded-wds-bucket/lion.png"
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
                    src="https://storage.googleapis.com/ded-wds-bucket/koala.png"
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
                    src="https://storage.googleapis.com/ded-wds-bucket/dog.png"
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
                    src="https://storage.googleapis.com/ded-wds-bucket/pig.png"
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
      exclude: ['status', 'limit']
    },
    docs: {
      source: {
        transform: (src, storyContext) => {
          const {
            args
          } = storyContext;
          return ['<Avatar', \`  shape="\${args.shape}"\`, \`  size="\${args.size}"\`, \`  status="none"\`, \`  :isShowInfo="\${args.isShowInfo}"\`, \`  src="https://storage.googleapis.com/ded-wds-bucket/fox.png"\`, \`  alt="\${args.alt}"\`, \`  userName="\${args.userName}"\`, \`  caption="\${args.caption}"\`, \`  className="\${args.className}"\`, '></Avatar>', '<Avatar', \`  shape="square"\`, \`  size="\${args.size}"\`, \`  status="online"\`, \`  :isShowInfo="\${args.isShowInfo}"\`, \`  src="https://storage.googleapis.com/ded-wds-bucket/lion.png"\`, \`  alt="\${args.alt}"\`, \`  userName="\${args.userName}"\`, \`  caption="\${args.caption}"\`, \`  className="\${args.className}"\`, '></Avatar>', '<Avatar', \`  shape="square"\`, \`  size="\${args.size}"\`, \`  status="idle"\`, \`  :isShowInfo="\${args.isShowInfo}"\`, \`  src="https://storage.googleapis.com/ded-wds-bucket/koala.png"\`, \`  alt="\${args.alt}"\`, \`  userName="\${args.userName}"\`, \`  caption="\${args.caption}"\`, \`  className="\${args.className}"\`, '></Avatar>', '<Avatar', \`  shape="square"\`, \`  size="\${args.size}"\`, \`  status="busy"\`, \`  :isShowInfo="\${args.isShowInfo}"\`, \`  src="https://storage.googleapis.com/ded-wds-bucket/dog.png"\`, \`  alt="\${args.alt}"\`, \`  userName="\${args.userName}"\`, \`  caption="\${args.caption}"\`, \`  className="\${args.className}"\`, '></Avatar>', '<Avatar', \`  shape="square"\`, \`  size="\${args.size}"\`, \`  status="offline"\`, \`  :isShowInfo="\${args.isShowInfo}"\`, \`  src="https://storage.googleapis.com/ded-wds-bucket/pig.png"\`, \`  alt="\${args.alt}"\`, \`  userName="\${args.userName}"\`, \`  caption="\${args.caption}"\`, \`  className="\${args.className}"\`, '></Avatar>'].join('\\n').trim();
        }
      }
    }
  }
}`,...(h=(d=n.parameters)==null?void 0:d.docs)==null?void 0:h.source}}};const z=["DefaultAvatar","AvatarShape","AvatarStatus"];export{r as AvatarShape,n as AvatarStatus,t as DefaultAvatar,z as __namedExportsOrder,S as default};

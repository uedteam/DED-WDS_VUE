import{o as s,c as r,C as c,n as u,e as x,b as m,d as K,t as f,M as P,q as Q,F as _,p as D,f as z,r as X,I as aa,E as ea}from"./vue.esm-bundler-Bm7qTojY.js";import{_ as sa}from"./Image-BErXuixe.js";import{_ as Y}from"./Icon-0yHNpaiS.js";import"./index-Bb4qSo10.js";import"./iframe-DS6YppJf.js";import"../sb-preview/runtime.js";const R={__name:"AvatarStatus",props:{avatarSize:{type:String,validator:a=>["xsmall","small","medium","large"].includes(a)},avatarStatus:{type:String,default:"default",validator:a=>["default","online","idle","busy","offline"].includes(a)}},setup(a){const e=a;return(n,t)=>e.avatarStatus!=="default"?(s(),r("div",{key:0,class:u(["avatar-icon",`avatar-icon-${e.avatarSize}`,`avatar-icon-${e.avatarStatus}`])},[c(Y,{name:e.avatarStatus},null,8,["name"])],2)):x("",!0)}};R.__docgenInfo={exportName:"default",displayName:"AvatarStatus",description:"",tags:{},props:[{name:"avatarSize",type:{name:"string"},values:["xsmall","small","medium","large"]},{name:"avatarStatus",type:{name:"string"},defaultValue:{func:!1,value:'"default"'},values:["default","online","idle","busy","offline"]}],sourceFiles:["/Users/auouser/Desktop/Work_Space/DED-WDS_VUE/libs/src/ui/element/Avatar/AvatarStatus.vue"]};const ra=(a,e)=>{let n=0,t="";return a.split("").forEach(g=>{/^[A-Z]+$/.test(g)&&n<2&&(n++,t=t+g)}),n<2?a.slice(0,e).toUpperCase():t},i={__name:"Avatar",props:{shape:{type:String,default:"circle",validator:a=>["circle","square"].includes(a)},size:{type:String,default:"large",validator:a=>["xsmall","small","medium","large"].includes(a)},status:{type:String,validator:a=>["default","online","idle","busy","offline"].includes(a)},imageSrc:{type:String},imageAlt:{type:String,default:"avatar image"},username:{type:String},customClass:{type:String,default:""}},setup(a){const e=a;return(n,t)=>(s(),r("div",{class:u(["avatar-container",`avatar-container-${e.size}`])},[m("div",{class:u(["avatar",`avatar-${e.shape}`])},[e.imageSrc?(s(),K(sa,{key:0,src:e.imageSrc,alt:e.imageAlt,ratio:"11",objectFit:"cover"},null,8,["src","alt"])):(s(),r("span",{key:1,class:u(["avatar-text",`text-${e.size}`])},f(P(ra)(e.username,2)),3))],2),c(R,{avatarStatus:e.status,avatarSize:e.size},null,8,["avatarStatus","avatarSize"])],2))}};i.__docgenInfo={exportName:"default",displayName:"Avatar",description:"",tags:{},props:[{name:"shape",type:{name:"string"},defaultValue:{func:!1,value:'"circle"'},values:["circle","square"]},{name:"size",type:{name:"string"},defaultValue:{func:!1,value:'"large"'},values:["xsmall","small","medium","large"]},{name:"status",type:{name:"string"},values:["default","online","idle","busy","offline"]},{name:"imageSrc",type:{name:"string"}},{name:"imageAlt",type:{name:"string"},defaultValue:{func:!1,value:"'avatar image'"}},{name:"username",type:{name:"string"}},{name:"customClass",type:{name:"string"},defaultValue:{func:!1,value:"''"}}],sourceFiles:["/Users/auouser/Desktop/Work_Space/DED-WDS_VUE/libs/src/ui/element/Avatar/Avatar.vue"]};const ta={class:"menu-item"},na={style:{"margin-right":"auto"}},T={__name:"Menu",props:{menuData:{type:Array},limit:{type:Number,default:1},customClass:{type:String,default:""}},setup(a){return(e,n)=>(s(),r("ul",{class:u(["menu",a.customClass])},[e.$slots.default?Q(e.$slots,"default",{key:0}):(s(!0),r(_,{key:1},D(a.menuData,t=>(s(),r("li",ta,[m("div",na,f(t.userName),1),c(Y,{name:"arrow_down",size:"24"})]))),256))],2))}};T.__docgenInfo={exportName:"default",displayName:"Menu",description:"",tags:{},props:[{name:"menuData",type:{name:"array"}},{name:"limit",type:{name:"number"},defaultValue:{func:!1,value:"1"}},{name:"customClass",type:{name:"string"},defaultValue:{func:!1,value:"''"}}],slots:[{name:"default"}],sourceFiles:["/Users/auouser/Desktop/Work_Space/DED-WDS_VUE/libs/src/ui/element/Menu/Menu.vue"]};const k=(a,e)=>{const n=a.slice(0,e),t=a.slice(e);return{currList:n,restList:t}},ia={class:"avatar-group"},la={key:0,class:"rest-container"},ua={class:"text-large"},ma={key:0,class:"rest-container-menu"},ga={style:{"margin-right":"auto"}},Z={__name:"AvatarGroup",props:{items:{type:Array,required:!0},size:{type:String,default:"large",validator:a=>["xsmall","small","medium","large"].includes(a)},shape:{type:String,default:"circle",validator:a=>["circle","square"].includes(a)},customClass:{type:String,default:""},limit:{type:Number}},setup(a){const e=a,n=z(()=>{const y=e.items.length-e.limit;return y>=99?99:y}),t=z(()=>k(e.items,e.limit).currList),g=z(()=>k(e.items,e.limit).restList),h=X(!1),H=()=>{h.value=!h.value};return(y,b)=>(s(),r("div",ia,[(s(!0),r(_,null,D(t.value,l=>(s(),K(i,{imageSrc:l.imageSrc,size:e.size,shape:e.shape,imageAlt:"alt text",username:l.userName},null,8,["imageSrc","size","shape","username"]))),256)),g.value.length>0?(s(),r("div",la,[m("div",ua,[m("button",{class:u(["avatar-container",`avatar-container-${e.size}`]),onClick:b[0]||(b[0]=aa(l=>H(),["prevent"])),style:{cursor:"pointer"}},[m("div",{class:u(["avatar",`avatar-${e.shape}`])},[m("span",{class:u(["avatar-text",`text-${e.size}`])},f(`+${n.value}`),3)],2)],2)]),h.value?(s(),r("div",ma,[c(T,null,{default:ea(()=>[(s(!0),r(_,null,D(g.value,l=>(s(),r("li",{class:"menu-item",key:l.userName},[c(i,{size:"xsmall",shape:"circle",imageSrc:l.imageSrc,username:l.userName,imageAlt:"alt text"},null,8,["imageSrc","username"]),m("div",ga,f(l.userName),1)]))),128))]),_:1})])):x("",!0)])):x("",!0)]))}};Z.__docgenInfo={exportName:"default",displayName:"AvatarGroup",description:"",tags:{},props:[{name:"items",type:{name:"array"},required:!0},{name:"size",type:{name:"string"},defaultValue:{func:!1,value:'"large"'},values:["xsmall","small","medium","large"]},{name:"shape",type:{name:"string"},defaultValue:{func:!1,value:'"circle"'},values:["circle","square"]},{name:"customClass",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"limit",type:{name:"number"}}],sourceFiles:["/Users/auouser/Desktop/Work_Space/DED-WDS_VUE/libs/src/ui/element/Avatar/AvatarGroup.vue"]};const Sa={title:"Design System/Avatar",component:i,tags:["autodocs"],argTypes:{shape:{description:"選擇 Avatar 的外型樣式（圓形或方形）",control:{type:"select"},options:["circle","square"]},size:{description:"設定 Avatar 的尺寸大小",control:{type:"select"},options:["xsmall","small","medium","large"]},status:{description:"選擇 Avatar 的顯示狀態",control:{type:"select"},options:["default","online","idle","busy","offline"]},imageSrc:{description:"輸入 Avatar 圖片的 URL 連結",control:{type:"select"},options:["None","01","02","03","04"],mapping:{None:"","01":"libs/src/assets/fakeImg/avatar_01.jpg","02":"libs/src/assets/fakeImg/avatar_02.jpg","03":"libs/src/assets/fakeImg/avatar_03.jpg","04":"libs/src/assets/fakeImg/avatar_04.jpg"}},imageAlt:{description:"為 Avatar 圖片提供替代文字",control:{type:"text"}},username:{description:"顯示使用者名稱，當沒有圖片時作取頭文字顯示",control:{type:"text"}},limit:{description:"在 AvatarGroup 中控制顯示的 Avatar 數量上限",control:{type:"number",min:0,max:5,step:1}},customClass:{description:"客製化樣式",control:{type:"text"}}},parameters:{docs:{title:"Avatar頭像",description:{component:"Avatar 組件的呈現及說明。"}}}},o={name:"Avatar 基礎樣式",args:{shape:"circle",size:"large",status:"online",imageSrc:"01",imageAlt:"alt text",username:"JonyWu"},render:a=>({components:{Avatar:i},setup(){return{args:a}},template:`
            <Avatar
                :shape="args.shape"
                :size="args.size"
                :status="args.status"
                :imageSrc="args.imageSrc"
                :imageAlt="args.imageAlt"
                :username="args.username"
            ></Avatar>
        `}),parameters:{controls:{exclude:["limit"]}}},p={name:"Avatar 外型設置",args:{size:"large",status:"default",imageSrc:"01",imageAlt:"alt text",username:"JonyWu"},render:a=>({components:{Avatar:i},setup(){return{args:a}},template:`
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
        `}),parameters:{controls:{exclude:["shape","limit"]}}},v={name:"Avatar 狀態顯示",args:{shape:"circle",size:"large",imageSrc:"01",imageAlt:"alt text",username:"JonyWu"},render:a=>({components:{Avatar:i},setup(){return{args:a}},template:`
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
            
        `}),parameters:{controls:{exclude:["status","limit"]}}},A={name:"Avatar 尺寸設定",args:{shape:"circle",status:"online",imageSrc:"01",imageAlt:"alt text",username:"JonyWu"},render:a=>({components:{Avatar:i},setup(){return{args:a}},template:`
            <div style="display:flex; gap: 16px">
                <Avatar
                    :shape="args.shape"
                    size="xsmall"
                    :status="args.status"
                    :imageSrc="args.imageSrc"
                    :imageAlt="args.imageAlt"
                    :username="args.username"
                ></Avatar>
                <Avatar
                    :shape="args.shape"
                    size="small"
                    :status="args.status"
                    :imageSrc="args.imageSrc"
                    :imageAlt="args.imageAlt"
                    :username="args.username"
                ></Avatar>
                <Avatar
                    :shape="args.shape"
                    size="medium"
                    :status="args.status"
                    :imageSrc="args.imageSrc"
                    :imageAlt="args.imageAlt"
                    :username="args.username"
                ></Avatar>
                <Avatar
                    :shape="args.shape"
                    size="large"
                    :status="args.status"
                    :imageSrc="args.imageSrc"
                    :imageAlt="args.imageAlt"
                    :username="args.username"
                ></Avatar>
            </div>
        `}),parameters:{controls:{exclude:["size","limit"]}}},d={name:"Avatar 內容顯示",args:{shape:"circle",size:"large",status:"online",imageSrc:"01",imageAlt:"alt text",username:"JonyWu"},render:a=>({components:{Avatar:i},setup(){return{args:a}},template:`
            <div style="display:flex; gap: 16px">
                <Avatar
                    :shape="args.shape"
                    :size="args.size"
                    :status="args.status"
                    :imageSrc="args.imageSrc"
                    :imageAlt="args.imageAlt"
                    :username="args.username"
                ></Avatar>
                <Avatar
                    :shape="args.shape"
                    :size="args.size"
                    :status="args.status"
                    :imageSrc="null"
                    :imageAlt="args.imageAlt"
                    :username="args.username"
                ></Avatar>
            </div>
        `}),parameters:{controls:{exclude:["","limit"]}}},S={name:"Avatar 群組樣式",args:{avatarsData:[{userName:"Eason",imageSrc:"libs/src/assets/fakeImg/avatar_01.jpg"},{userName:"KevinYang",imageSrc:"libs/src/assets/fakeImg/avatar_02.jpg"},{userName:"AmosLee",imageSrc:"libs/src/assets/fakeImg/avatar_03.jpg"},{userName:"JohnWu",imageSrc:"libs/src/assets/fakeImg/avatar_04.jpg"}],shape:"circle",size:"large",limit:3},render:a=>({components:{AvatarGroup:Z},setup(){return{args:a}},template:`
            <div style="display:flex; gap: 16px">
                <AvatarGroup 
                    :items="args.avatarsData" 
                    :size="args.size" 
                    :shape="args.shape" 
                    :limit="args.limit"
                ></AvatarGroup>
            </div>
        `}),parameters:{controls:{exclude:["status","imageSrc","imageAlt","username"]}}};var C,N,F;o.parameters={...o.parameters,docs:{...(C=o.parameters)==null?void 0:C.docs,source:{originalSource:`{
  name: 'Avatar 基礎樣式',
  args: {
    shape: 'circle',
    size: 'large',
    status: 'online',
    imageSrc: '01',
    imageAlt: 'alt text',
    username: 'JonyWu'
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
                :imageSrc="args.imageSrc"
                :imageAlt="args.imageAlt"
                :username="args.username"
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
}`,...(F=(N=o.parameters)==null?void 0:N.docs)==null?void 0:F.source}}};var E,W,$;p.parameters={...p.parameters,docs:{...(E=p.parameters)==null?void 0:E.docs,source:{originalSource:`{
  name: 'Avatar 外型設置',
  args: {
    size: 'large',
    status: 'default',
    imageSrc: '01',
    imageAlt: 'alt text',
    username: 'JonyWu'
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
}`,...($=(W=p.parameters)==null?void 0:W.docs)==null?void 0:$.source}}};var I,V,j;v.parameters={...v.parameters,docs:{...(I=v.parameters)==null?void 0:I.docs,source:{originalSource:`{
  name: 'Avatar 狀態顯示',
  args: {
    shape: 'circle',
    size: 'large',
    imageSrc: '01',
    imageAlt: 'alt text',
    username: 'JonyWu'
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
}`,...(j=(V=v.parameters)==null?void 0:V.docs)==null?void 0:j.source}}};var J,q,B;A.parameters={...A.parameters,docs:{...(J=A.parameters)==null?void 0:J.docs,source:{originalSource:`{
  name: 'Avatar 尺寸設定',
  args: {
    shape: 'circle',
    status: 'online',
    imageSrc: '01',
    imageAlt: 'alt text',
    username: 'JonyWu'
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
                    size="xsmall"
                    :status="args.status"
                    :imageSrc="args.imageSrc"
                    :imageAlt="args.imageAlt"
                    :username="args.username"
                ></Avatar>
                <Avatar
                    :shape="args.shape"
                    size="small"
                    :status="args.status"
                    :imageSrc="args.imageSrc"
                    :imageAlt="args.imageAlt"
                    :username="args.username"
                ></Avatar>
                <Avatar
                    :shape="args.shape"
                    size="medium"
                    :status="args.status"
                    :imageSrc="args.imageSrc"
                    :imageAlt="args.imageAlt"
                    :username="args.username"
                ></Avatar>
                <Avatar
                    :shape="args.shape"
                    size="large"
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
      exclude: ['size', 'limit']
    }
  }
}`,...(B=(q=A.parameters)==null?void 0:q.docs)==null?void 0:B.source}}};var G,L,U;d.parameters={...d.parameters,docs:{...(G=d.parameters)==null?void 0:G.docs,source:{originalSource:`{
  name: 'Avatar 內容顯示',
  args: {
    shape: 'circle',
    size: 'large',
    status: 'online',
    imageSrc: '01',
    imageAlt: 'alt text',
    username: 'JonyWu'
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
                    :status="args.status"
                    :imageSrc="args.imageSrc"
                    :imageAlt="args.imageAlt"
                    :username="args.username"
                ></Avatar>
                <Avatar
                    :shape="args.shape"
                    :size="args.size"
                    :status="args.status"
                    :imageSrc="null"
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
      exclude: ['', 'limit']
    }
  }
}`,...(U=(L=d.parameters)==null?void 0:L.docs)==null?void 0:U.source}}};var M,w,O;S.parameters={...S.parameters,docs:{...(M=S.parameters)==null?void 0:M.docs,source:{originalSource:`{
  name: 'Avatar 群組樣式',
  args: {
    avatarsData: [{
      userName: 'Eason',
      imageSrc: 'libs/src/assets/fakeImg/avatar_01.jpg'
    }, {
      userName: 'KevinYang',
      imageSrc: 'libs/src/assets/fakeImg/avatar_02.jpg'
    }, {
      userName: 'AmosLee',
      imageSrc: 'libs/src/assets/fakeImg/avatar_03.jpg'
    }, {
      userName: 'JohnWu',
      imageSrc: 'libs/src/assets/fakeImg/avatar_04.jpg'
    }],
    shape: 'circle',
    size: 'large',
    limit: 3
  },
  render: args => ({
    components: {
      AvatarGroup
    },
    setup() {
      return {
        args
      };
    },
    template: \`
            <div style="display:flex; gap: 16px">
                <AvatarGroup 
                    :items="args.avatarsData" 
                    :size="args.size" 
                    :shape="args.shape" 
                    :limit="args.limit"
                ></AvatarGroup>
            </div>
        \`
  }),
  // 控制 controls 中能控制的參數
  parameters: {
    controls: {
      // include: ['themeColor', 'label', 'value', 'name' ],
      exclude: ['status', 'imageSrc', 'imageAlt', 'username']
    }
  }
}`,...(O=(w=S.parameters)==null?void 0:w.docs)==null?void 0:O.source}}};const fa=["DefaultAvatar","AvatarShape","AvatarStatus","AvatarSizes","AvatarContent","MultiAvatar"];export{d as AvatarContent,p as AvatarShape,A as AvatarSizes,v as AvatarStatus,o as DefaultAvatar,S as MultiAvatar,fa as __namedExportsOrder,Sa as default};

import{c as g,e as k,a as o,F as h,k as N,b as c,n as u,l as C,t as A,j as f,D as E,f as y,o as s,g as L}from"./vue.esm-bundler-jfoHxfC9.js";import{_}from"./Avatar-Dp4FFlga.js";import{_ as b}from"./List-D2-e-t-b.js";import"./Image-DrQp4sVr.js";import"./index-Bb4qSo10.js";import"./Icon-DakahK8X.js";import"./iframe-CGSdzTJx.js";import"../sb-preview/runtime.js";const q={key:0,class:"rest-container"},V={class:"text-large"},j={key:0,class:"rest-container-menu"},B={style:{"margin-right":"auto"}},v={__name:"AvatarGroup",props:{dataSource:{type:Array,required:!0},limit:{type:Number,required:!0},size:{type:String,default:"large",validator:a=>["xsmall","small","medium","large"].includes(a)},shape:{type:String,default:"circle",validator:a=>["circle","square"].includes(a)},className:{type:String,default:""}},setup(a){const e=a,t=g(()=>{const n=e.dataSource.length-e.limit;return n>=99?99:n}),l=(n,i)=>{const r=n.slice(0,i),d=n.slice(i);return{currList:r,restList:d}},G=g(()=>l(e.dataSource,e.limit).currList),S=g(()=>l(e.dataSource,e.limit).restList),p=k(!1),D=()=>{p.value=!p.value};return(n,i)=>(s(),o("div",{class:u({"avatar-group":!0,[e.className]:!!e.className})},[(s(!0),o(h,null,N(G.value,(r,d)=>(s(),L(_,{key:d,imageSrc:r.imageSrc,size:e.size,shape:e.shape,imageAlt:"alt text",username:r.userName},null,8,["imageSrc","size","shape","username"]))),128)),S.value.length>0?(s(),o("div",q,[c("div",V,[c("button",{class:u(["avatar-container",`avatar-container-${e.size}`]),onClick:i[0]||(i[0]=C(r=>D(),["prevent"])),style:{cursor:"pointer"}},[c("span",{class:u(["avatar",`avatar-${e.shape}`])},[c("span",{class:u(["avatar-text",`text-${e.size}`])},A(`+${t.value}`),3)],2)],2)]),p.value?(s(),o("div",j,[f(b,null,{default:E(()=>[(s(!0),o(h,null,N(S.value,r=>(s(),o("li",{class:"menu-item",key:r.userName},[f(_,{size:"xsmall",shape:"circle",imageSrc:r.imageSrc,username:r.userName,imageAlt:"alt text"},null,8,["imageSrc","username"]),c("div",B,A(r.userName),1)]))),128))]),_:1})])):y("",!0)])):y("",!0)],2))}};v.__docgenInfo={exportName:"default",displayName:"AvatarGroup",description:"",tags:{},props:[{name:"dataSource",type:{name:"array"},required:!0},{name:"limit",type:{name:"number"},required:!0},{name:"size",type:{name:"string"},defaultValue:{func:!1,value:'"large"'},values:["xsmall","small","medium","large"]},{name:"shape",type:{name:"string"},defaultValue:{func:!1,value:'"circle"'},values:["circle","square"]},{name:"className",type:{name:"string"},defaultValue:{func:!1,value:"''"}}],sourceFiles:["D:/98_測試/up/DED-WDS_VUE/libs/src/ui/element/AvatarGroup/AvatarGroup.vue"]};function F(a){return`[
    ${a.map(e=>`{
        userName: '${e.userName}',
        imageSrc: '${e.imageSrc}',
    }`).join(`,
    `)}
  ]`}const T={title:"Design System/AvatarGroup",component:v,tags:["autodocs"],argTypes:{dataSource:{description:"資料來源",control:{type:"object"}},size:{description:"Avatar 尺寸",control:{type:"select"},options:["xsmall","small","medium","large"]},shape:{description:"形狀",control:{type:"select"},options:["circle","square"]},limit:{description:"顯示數量上限",control:{type:"number",min:0,max:5,step:1}},className:{description:"客製化樣式",control:{type:"text"}}},parameters:{docs:{title:"AvatarGroup",description:{component:"AvatarGroup 組件的呈現及說明。"}}}},m={name:"預設項目",args:{dataSource:[{userName:"Eason",imageSrc:"https://picsum.photos/320/240/?random=1"},{userName:"KevinYang",imageSrc:"https://picsum.photos/320/240/?random=10"},{userName:"AmosLee",imageSrc:"https://picsum.photos/320/240/?random=100"},{userName:"JohnWu",imageSrc:"https://picsum.photos/320/240/?random=1000"}],limit:3,size:"large",shape:"circle",className:""},render:a=>({components:{AvatarGroup:v},setup(){return{args:a}},template:`
            <AvatarGroup 
                :dataSource="args.dataSource" 
                :size="args.size" 
                :shape="args.shape" 
                :limit="args.limit"
                :className="args.className"
            ></AvatarGroup>
        `}),parameters:{controls:{},docs:{source:{transform:(a,e)=>{const{args:t}=e;return["<AvatarGroup",`  :dataSource="${F(t.dataSource)}"`,`  :limit="${t.limit}"`,`  size="${t.size}"`,`  shape="${t.shape}"`,`  className="${t.className}"`,"></AvatarGroup>"].join(`
`).trim()}}}}};var z,$,x;m.parameters={...m.parameters,docs:{...(z=m.parameters)==null?void 0:z.docs,source:{originalSource:`{
  name: "預設項目",
  args: {
    dataSource: [{
      "userName": "Eason",
      "imageSrc": "https://picsum.photos/320/240/?random=1"
    }, {
      "userName": "KevinYang",
      "imageSrc": "https://picsum.photos/320/240/?random=10"
    }, {
      "userName": "AmosLee",
      "imageSrc": "https://picsum.photos/320/240/?random=100"
    }, {
      "userName": "JohnWu",
      "imageSrc": "https://picsum.photos/320/240/?random=1000"
    }],
    limit: 3,
    size: "large",
    shape: "circle",
    className: ""
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
            <AvatarGroup 
                :dataSource="args.dataSource" 
                :size="args.size" 
                :shape="args.shape" 
                :limit="args.limit"
                :className="args.className"
            ></AvatarGroup>
        \`
  }),
  // 控制 controls 中能控制的參數
  parameters: {
    controls: {
      // include: ['themeColor', 'label', 'value', 'name' ],
      // exclude: ['status', 'imageSrc', 'imageAlt', 'username' ],
    },
    docs: {
      source: {
        transform: (src, storyContext) => {
          const {
            args
          } = storyContext;
          const dataSourceString = formatDataSource(args.dataSource);
          return ['<AvatarGroup', \`  :dataSource="\${dataSourceString}"\`, \`  :limit="\${args.limit}"\`, \`  size="\${args.size}"\`, \`  shape="\${args.shape}"\`, \`  className="\${args.className}"\`, '></AvatarGroup>'].join('\\n').trim();
        }
      }
    }
  }
}`,...(x=($=m.parameters)==null?void 0:$.docs)==null?void 0:x.source}}};const U=["MultiAvatar"];export{m as MultiAvatar,U as __namedExportsOrder,T as default};

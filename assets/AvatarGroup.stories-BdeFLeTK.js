import{c as f,e as N,q as D,x as V,a as o,F as x,j as _,n as c,b as y,t as w,k as B,f as S,l as L,d as j,g as $,E as M,T as F,o as s}from"./vue.esm-bundler-BHaSr8M7.js";import{_ as E}from"./Avatar-CHwvR9j5.js";import{_ as W}from"./List-CApCRBCE.js";import"./Image-DQb6v3bJ.js";import"./index-Bb4qSo10.js";import"./Icon-JeNFLYyn.js";import"./iframe-DRgkzw6m.js";import"../sb-preview/runtime.js";const q={style:{"margin-right":"auto"}},A={__name:"AvatarGroup",props:{dataSource:{type:Array,required:!0},size:{type:String,default:"medium",validator:n=>["xsmall","small","medium","large"].includes(n)},limit:{type:Number,default:1},className:{type:String,default:""}},setup(n){const e=n,i=f(()=>{const a=e.dataSource.length-e.limit;return a>=99?99:a}),d=(a,u)=>{const t=a.slice(0,u),g=a.slice(u);return{currList:t,restList:g}},k=f(()=>d(e.dataSource,e.limit).currList),p=f(()=>d(e.dataSource,e.limit).restList),l=N(!1),z=N(null),v=N({top:"0px",left:"0px"}),r=()=>{var u;const a=(u=z.value)==null?void 0:u.getBoundingClientRect();a&&(v.value={top:`${a.bottom+window.scrollY+8}px`,left:`${a.left+window.scrollX}px`})},C=()=>{l.value=!l.value,l.value?(r(),window.addEventListener("resize",r),window.addEventListener("scroll",r,!0)):(window.removeEventListener("resize",r),window.removeEventListener("scroll",r,!0))};return D(()=>{l.value&&(window.addEventListener("resize",r),window.addEventListener("scroll",r,!0))}),V(()=>{window.removeEventListener("resize",r),window.removeEventListener("scroll",r,!0)}),(a,u)=>(s(),o("div",{class:c({"ded-avatar-group":!0,[e.className]:!!e.className})},[(s(!0),o(x,null,_(k.value,(t,g)=>(s(),L(E,{key:g,size:e.size,src:t.src,alt:"alt text",userName:t.userName},null,8,["size","src","userName"]))),128)),p.value.length>0?(s(),o("div",{key:0,class:"rest-container",ref_key:"restContainerRef",ref:z},[p.value.length>0?(s(),o("div",{key:0,class:c(["ded-avatar-container",e.size?`ded-avatar-container-${e.size}`:"ded-avatar-container-medium"])},[y("button",{class:c(["ded-avatar",e.shape?`ded-avatar-${e.shape}`:"ded-avatar-circle"]),onClick:B(C,["prevent"]),style:{cursor:"pointer"}},[y("span",{class:c(["ded-avatar-text",e.size?`text-${e.size}`:"text-medium"])},w(`+${i.value}`),3)],2)],2)):S("",!0),(s(),L(F,{to:"body"},[l.value?(s(),o("div",{key:0,class:"rest-container-menu",style:j({position:"absolute",top:v.value.top,left:v.value.left,zIndex:9999})},[$(W,null,{default:M(()=>[(s(!0),o(x,null,_(p.value,t=>(s(),o("li",{class:"ded-menu-item",key:t.userName,style:{"border-bottom":"none"}},[$(E,{size:"xsmall",src:t.src,alt:"alt text",userName:t.userName},null,8,["src","userName"]),y("div",q,w(t.userName),1)]))),128))]),_:1})],4)):S("",!0)]))],512)):S("",!0)],2))}};A.__docgenInfo={exportName:"default",displayName:"AvatarGroup",description:"",tags:{},props:[{name:"dataSource",type:{name:"array"},required:!0},{name:"size",type:{name:"string"},defaultValue:{func:!1,value:'"medium"'},values:["xsmall","small","medium","large"]},{name:"limit",type:{name:"number"},defaultValue:{func:!1,value:"1"}},{name:"className",type:{name:"string"},defaultValue:{func:!1,value:'""'}}],sourceFiles:["/Users/auouser/Desktop/Work_Space/DED-WDS_VUE/libs/src/ui/element/AvatarGroup/AvatarGroup.vue"]};function P(n){return`[
        ${n.map(e=>`{
            userName: "${e.userName}",
            src: "${e.src}",
        }`).join(`,
    `)}
    ]`}const X={title:"Design System/Avatar-Group",component:A,tags:["autodocs"],argTypes:{dataSource:{description:"資料來源",control:{type:"object"},table:{type:{summary:"{ userName: string; src: string; }[]"}}},size:{description:"Avatar 尺寸",control:{type:"select"},options:["xsmall","small","medium","large"]},limit:{description:"展開數量上限",control:{type:"number",min:0,max:5,step:1}},className:{description:"客製化樣式",control:{type:"text"}}},parameters:{docs:{title:"AvatarGroup",description:{component:"AvatarGroup 組件的呈現及說明。"}}}},m={name:"預設項目",args:{dataSource:[{userName:"Eason",src:""},{userName:"KevinYang",src:""},{userName:"AmosLee",src:""},{userName:"JohnWu",src:""},{userName:"PeterLiao",src:""}],size:"large",limit:2,className:""},render:n=>({components:{AvatarGroup:A},setup(){return{args:n}},template:`
            <AvatarGroup 
                :dataSource="args.dataSource"
                :size="args.size"
                :limit="args.limit"
                :className="args.className"
            ></AvatarGroup>
        `}),parameters:{controls:{},docs:{source:{transform:(n,e)=>{const{args:i}=e;return["<AvatarGroup",`  :dataSource='${P(i.dataSource)}'`,`  size="${i.size}"`,`  :limit="${i.limit}"`,`  class="${i.className}"`,"></AvatarGroup>"].join(`
`).trim()}}}}};var G,b,h;m.parameters={...m.parameters,docs:{...(G=m.parameters)==null?void 0:G.docs,source:{originalSource:`{
  name: "預設項目",
  args: {
    dataSource: [{
      userName: "Eason",
      src: ""
    }, {
      userName: "KevinYang",
      src: ""
    }, {
      userName: "AmosLee",
      src: ""
    }, {
      userName: "JohnWu",
      src: ""
    }, {
      userName: "PeterLiao",
      src: ""
    }],
    size: "large",
    limit: 2,
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
                :limit="args.limit"
                :className="args.className"
            ></AvatarGroup>
        \`
  }),
  // 控制 controls 中能控制的參數
  parameters: {
    controls: {
      // include: ['themeColor', 'label', 'value', 'name' ],
      // exclude: ['status', 'src', 'imageAlt', 'username' ],
    },
    docs: {
      source: {
        transform: (src, storyContext) => {
          const {
            args
          } = storyContext;
          const dataSourceString = formatDataSource(args.dataSource);
          return ['<AvatarGroup', \`  :dataSource='\${dataSourceString}'\`, \`  size="\${args.size}"\`, \`  :limit="\${args.limit}"\`, \`  class="\${args.className}"\`, '></AvatarGroup>'].join('\\n').trim();
        }
      }
    }
  }
}`,...(h=(b=m.parameters)==null?void 0:b.docs)==null?void 0:h.source}}};const H=["MultiAvatar"];export{m as MultiAvatar,H as __namedExportsOrder,X as default};

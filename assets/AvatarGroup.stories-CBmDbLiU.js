import{c as f,e as N,q as k,x as V,a as u,F as z,k as x,b as c,n as m,l as B,t as _,g as w,d as j,j as L,D as M,f as $,T as F,o as n}from"./vue.esm-bundler-BaxPAcbg.js";import{_ as G}from"./Avatar-DEPCVGqZ.js";import{_ as q}from"./List-1Ypl2YTI.js";import"./Image-v-dZlYpA.js";import"./index-Bb4qSo10.js";import"./Icon-LHtUq3zY.js";import"./iframe-BV47joKz.js";import"../sb-preview/runtime.js";const P={class:""},R={style:{"margin-right":"auto"}},y={__name:"AvatarGroup",props:{dataSource:{type:Array,required:!0},size:{type:String,default:"medium",validator:s=>["xsmall","small","medium","large"].includes(s)},limit:{type:Number,default:1},className:{type:String,default:""}},setup(s){const e=s,o=f(()=>{const a=e.dataSource.length-e.limit;return a>=99?99:a}),p=(a,i)=>{const t=a.slice(0,i),g=a.slice(i);return{currList:t,restList:g}},C=f(()=>p(e.dataSource,e.limit).currList),S=f(()=>p(e.dataSource,e.limit).restList),l=N(!1),A=N(null),v=N({top:"0px",left:"0px"}),r=()=>{var i;const a=(i=A.value)==null?void 0:i.getBoundingClientRect();a&&(v.value={top:`${a.bottom+window.scrollY+8}px`,left:`${a.left+window.scrollX}px`})},D=()=>{l.value=!l.value,l.value?(r(),window.addEventListener("resize",r),window.addEventListener("scroll",r,!0)):(window.removeEventListener("resize",r),window.removeEventListener("scroll",r,!0))};return k(()=>{l.value&&(window.addEventListener("resize",r),window.addEventListener("scroll",r,!0))}),V(()=>{window.removeEventListener("resize",r),window.removeEventListener("scroll",r,!0)}),(a,i)=>(n(),u("div",{class:m({"ded-avatar-group":!0,[e.className]:!!e.className})},[(n(!0),u(z,null,x(C.value,(t,g)=>(n(),w(G,{key:g,size:e.size,src:t.src,alt:"alt text",userName:t.userName},null,8,["size","src","userName"]))),128)),S.value.length>0?(n(),u("div",{key:0,class:"rest-container",ref_key:"restContainerRef",ref:A},[c("div",P,[c("button",{class:m(["ded-avatar-container",e.size?`ded-avatar-container-${e.size}`:"ded-avatar-container-medium"]),onClick:B(D,["prevent"]),style:{cursor:"pointer"}},[c("span",{class:m(["ded-avatar",e.shape?`ded-avatar-${e.shape}`:"ded-avatar-circle"])},[c("span",{class:m(["ded-avatar-text",e.size?`text-${e.size}`:"text-medium"])},_(`+${o.value}`),3)],2)],2)]),(n(),w(F,{to:"body"},[l.value?(n(),u("div",{key:0,class:"rest-container-menu",style:j({position:"absolute",top:v.value.top,left:v.value.left,zIndex:9999})},[L(q,null,{default:M(()=>[(n(!0),u(z,null,x(S.value,t=>(n(),u("li",{class:"ded-menu-item",key:t.userName,style:{"border-bottom":"none"}},[L(G,{size:"xsmall",src:t.src,alt:"alt text",userName:t.userName},null,8,["src","userName"]),c("div",R,_(t.userName),1)]))),128))]),_:1})],4)):$("",!0)]))],512)):$("",!0)],2))}};y.__docgenInfo={exportName:"default",displayName:"AvatarGroup",description:"",tags:{},props:[{name:"dataSource",type:{name:"array"},required:!0},{name:"size",type:{name:"string"},defaultValue:{func:!1,value:'"medium"'},values:["xsmall","small","medium","large"]},{name:"limit",type:{name:"number"},defaultValue:{func:!1,value:"1"}},{name:"className",type:{name:"string"},defaultValue:{func:!1,value:'""'}}],sourceFiles:["D:/98_測試/up/DED-WDS_VUE/libs/src/ui/element/AvatarGroup/AvatarGroup.vue"]};function T(s){return`[
        ${s.map(e=>`{
            userName: "${e.userName}",
            src: "${e.src}",
        }`).join(`,
    `)}
    ]`}const H={title:"Design System/Avatar-Group",component:y,tags:["autodocs"],argTypes:{dataSource:{description:"資料來源",control:{type:"object"},table:{type:{summary:"{ userName: string; src: string; }[]"}}},size:{description:"Avatar 尺寸",control:{type:"select"},options:["xsmall","small","medium","large"]},limit:{description:"展開數量上限",control:{type:"number",min:0,max:5,step:1}},className:{description:"客製化樣式",control:{type:"text"}}},parameters:{docs:{title:"AvatarGroup",description:{component:"AvatarGroup 組件的呈現及說明。"}}}},d={name:"預設項目",args:{dataSource:[{userName:"Eason",src:""},{userName:"KevinYang",src:""},{userName:"AmosLee",src:""},{userName:"JohnWu",src:""},{userName:"PeterLiao",src:""}],size:"large",limit:2,className:""},render:s=>({components:{AvatarGroup:y},setup(){return{args:s}},template:`
            <AvatarGroup 
                :dataSource="args.dataSource"
                :size="args.size"
                :limit="args.limit"
                :className="args.className"
            ></AvatarGroup>
        `}),parameters:{controls:{},docs:{source:{transform:(s,e)=>{const{args:o}=e;return["<AvatarGroup",`  :dataSource='${T(o.dataSource)}'`,`  size="${o.size}"`,`  :limit="${o.limit}"`,`  class="${o.className}"`,"></AvatarGroup>"].join(`
`).trim()}}}}};var E,b,h;d.parameters={...d.parameters,docs:{...(E=d.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(h=(b=d.parameters)==null?void 0:b.docs)==null?void 0:h.source}}};const Q=["MultiAvatar"];export{d as MultiAvatar,Q as __namedExportsOrder,H as default};

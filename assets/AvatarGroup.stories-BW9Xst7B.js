import{c as S,d as y,j as B,l as V,a as i,F as A,B as E,n as _,b as m,t as L,C as j,e as z,D as x,q as M,f as k,E as q,T as F,o as n}from"./vue.esm-bundler-C-bz8AVj.js";import{_ as h}from"./Avatar-CgWp0RPC.js";import{_ as O}from"./List-CquKdNAA.js";import"./Image-DAyggLCd.js";import"./index-Bb4qSo10.js";import"./Icon-B8_v5yMR.js";import"./iframe-abojlcp7.js";import"../sb-preview/runtime.js";const W={class:"ded-avatar-text"},P={class:"ded-list-item-text"},R={class:"ded-list-icon"},T={"data-v-2ddf7f21":"",class:"ded-list-item-label"},w={__name:"AvatarGroup",props:{dataSource:{type:Array,required:!0},size:{type:String,default:"medium",validator:o=>["xsmall","small","medium","large"].includes(o)},limit:{type:Number,default:1},className:{type:String,default:""}},setup(o){const e=o,l=S(()=>{const t=e.dataSource.length-e.limit;return t>=99?99:t}),v=(t,r)=>{const s=t.slice(0,r),N=t.slice(r);return{currList:s,restList:N}},b=S(()=>v(e.dataSource,e.limit).currList),g=S(()=>v(e.dataSource,e.limit).restList),u=y(!1),d=y(null),f=y({top:"0px",left:"0px"}),a=()=>{var r;const t=(r=d.value)==null?void 0:r.getBoundingClientRect();t&&(f.value={top:`${t.bottom+window.scrollY+8}px`,left:`${t.left+window.scrollX}px`})},D=()=>{u.value=!u.value,u.value?(a(),window.addEventListener("resize",a),window.addEventListener("scroll",a,!0),document.addEventListener("click",c)):(window.removeEventListener("resize",a),window.removeEventListener("scroll",a,!0),document.removeEventListener("click",c))},c=t=>{const r=document.querySelector(".ded-dropdown-menu");d.value&&!d.value.contains(t.target)&&(!r||!r.contains(t.target))&&(u.value=!1,document.removeEventListener("click",c))};return B(()=>{u.value&&(window.addEventListener("resize",a),window.addEventListener("scroll",a,!0),document.addEventListener("click",c))}),V(()=>{window.removeEventListener("resize",a),window.removeEventListener("scroll",a,!0),document.removeEventListener("click",c)}),(t,r)=>(n(),i("div",{class:_({"ded-avatar-group":!0,[e.className]:!!e.className})},[(n(!0),i(A,null,E(b.value,(s,N)=>(n(),x(h,{key:N,size:e.size,src:s.src,alt:"alt text",userName:s.userName},null,8,["size","src","userName"]))),128)),g.value.length>0?(n(),i(A,{key:0},[g.value.length>0?(n(),i("div",{key:0,ref_key:"restContainerRef",ref:d,class:_(["ded-avatar-container",e.size?`ded-avatar-container-${e.size}`:"ded-avatar-container-medium"])},[m("button",{class:_(["ded-avatar",e.shape?`ded-avatar-${e.shape}`:"ded-avatar-circle"]),onClick:j(D,["prevent"])},[m("span",W,L(`+${l.value}`),1)],2)],2)):z("",!0),(n(),x(F,{to:"body"},[u.value?(n(),i("div",{key:0,class:"ded-dropdown-menu",style:M({position:"absolute",top:f.value.top,left:f.value.left,"z-index":9999})},[k(O,{hasOutline:!0},{default:q(()=>[(n(!0),i(A,null,E(g.value,s=>(n(),i("li",{class:"ded-list-item",key:s.userName},[m("div",P,[m("div",R,[k(h,{size:"xsmall",src:s.src,alt:"alt text",userName:s.userName},null,8,["src","userName"])]),m("div",T,L(s.userName),1)])]))),128))]),_:1})],4)):z("",!0)]))],64)):z("",!0)],2))}};w.__docgenInfo={exportName:"default",displayName:"AvatarGroup",description:"",tags:{},props:[{name:"dataSource",type:{name:"array"},required:!0},{name:"size",type:{name:"string"},defaultValue:{func:!1,value:'"medium"'},values:["xsmall","small","medium","large"]},{name:"limit",type:{name:"number"},defaultValue:{func:!1,value:"1"}},{name:"className",type:{name:"string"},defaultValue:{func:!1,value:'""'}}],sourceFiles:["/Users/auouser/Desktop/Work_Space/DED-WDS_VUE/libs/src/ui/element/AvatarGroup/AvatarGroup.vue"]};function U(o){return`[
        ${o.map(e=>`{
            userName: "${e.userName}",
            src: "${e.src}",
        }`).join(`,
    `)}
    ]`}const ee={title:"Component/Avatar-Group",component:w,tags:["autodocs"],argTypes:{dataSource:{description:"資料來源",control:{type:"object"},table:{type:{summary:"{ userName: string; src: string; }[]"}}},size:{description:"Avatar 尺寸",control:{type:"select"},options:["xsmall","small","medium","large"]},limit:{description:"展開數量上限",control:{type:"number",min:0,max:5,step:1}},className:{description:"客製化樣式",control:{type:"text"}}},parameters:{docs:{title:"AvatarGroup",description:{component:"AvatarGroup 組件的呈現及說明。"}}}},p={name:"預設項目",args:{dataSource:[{userName:"Eason",src:""},{userName:"KevinYang",src:""},{userName:"AmosLee",src:""},{userName:"JohnWu",src:""},{userName:"PeterLiao",src:""}],size:"large",limit:2,className:""},render:o=>({components:{AvatarGroup:w},setup(){return{args:o}},template:`
            <AvatarGroup 
                :dataSource="args.dataSource"
                :size="args.size"
                :limit="args.limit"
                :className="args.className"
            ></AvatarGroup>
        `}),parameters:{controls:{},docs:{source:{transform:(o,e)=>{const{args:l}=e;return["<AvatarGroup",`  :dataSource='${U(l.dataSource)}'`,`  size="${l.size}"`,`  :limit="${l.limit}"`,`  class="${l.className}"`,"></AvatarGroup>"].join(`
`).trim()}}}}};var G,$,C;p.parameters={...p.parameters,docs:{...(G=p.parameters)==null?void 0:G.docs,source:{originalSource:`{
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
}`,...(C=($=p.parameters)==null?void 0:$.docs)==null?void 0:C.source}}};const te=["MultiAvatar"];export{p as MultiAvatar,te as __namedExportsOrder,ee as default};

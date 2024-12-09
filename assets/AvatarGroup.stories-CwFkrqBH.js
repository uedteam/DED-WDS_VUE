import{c as N,d as y,j as D,l as B,a as o,F as x,B as _,n as c,b as m,t as w,C as V,e as S,D as L,q as j,f as $,E as M,T as F,o as s}from"./vue.esm-bundler-C-bz8AVj.js";import{_ as E}from"./Avatar-Di4DKAF3.js";import{_ as W}from"./List-DVi9B_3K.js";import"./Image-DAyggLCd.js";import"./index-Bb4qSo10.js";import"./Icon-Z8NrOAXH.js";import"./iframe-DaIFIyPY.js";import"../sb-preview/runtime.js";const q={class:"ded-list-item-text"},O={"data-v-2ddf7f21":"",class:"ded-list-item-label"},A={__name:"AvatarGroup",props:{dataSource:{type:Array,required:!0},size:{type:String,default:"medium",validator:n=>["xsmall","small","medium","large"].includes(n)},limit:{type:Number,default:1},className:{type:String,default:""}},setup(n){const e=n,i=N(()=>{const a=e.dataSource.length-e.limit;return a>=99?99:a}),p=(a,l)=>{const r=a.slice(0,l),f=a.slice(l);return{currList:r,restList:f}},C=N(()=>p(e.dataSource,e.limit).currList),v=N(()=>p(e.dataSource,e.limit).restList),u=y(!1),z=y(null),g=y({top:"0px",left:"0px"}),t=()=>{var l;const a=(l=z.value)==null?void 0:l.getBoundingClientRect();a&&(g.value={top:`${a.bottom+window.scrollY+8}px`,left:`${a.left+window.scrollX}px`})},k=()=>{u.value=!u.value,u.value?(t(),window.addEventListener("resize",t),window.addEventListener("scroll",t,!0)):(window.removeEventListener("resize",t),window.removeEventListener("scroll",t,!0))};return D(()=>{u.value&&(window.addEventListener("resize",t),window.addEventListener("scroll",t,!0))}),B(()=>{window.removeEventListener("resize",t),window.removeEventListener("scroll",t,!0)}),(a,l)=>(s(),o("div",{class:c({"ded-avatar-group":!0,[e.className]:!!e.className})},[(s(!0),o(x,null,_(C.value,(r,f)=>(s(),L(E,{key:f,size:e.size,src:r.src,alt:"alt text",userName:r.userName},null,8,["size","src","userName"]))),128)),v.value.length>0?(s(),o("div",{key:0,class:"rest-container",ref_key:"restContainerRef",ref:z},[v.value.length>0?(s(),o("div",{key:0,class:c(["ded-avatar-container",e.size?`ded-avatar-container-${e.size}`:"ded-avatar-container-medium"])},[m("button",{class:c(["ded-avatar",e.shape?`ded-avatar-${e.shape}`:"ded-avatar-circle"]),onClick:V(k,["prevent"]),style:{cursor:"pointer"}},[m("span",{class:c(["ded-avatar-text",e.size?`text-${e.size}`:"text-medium"])},w(`+${i.value}`),3)],2)],2)):S("",!0),(s(),L(F,{to:"body"},[u.value?(s(),o("div",{key:0,class:"ded-dropdown-menu",style:j({position:"absolute",top:g.value.top,left:g.value.left,zIndex:9999})},[$(W,{hasOutline:!0},{default:M(()=>[(s(!0),o(x,null,_(v.value,r=>(s(),o("li",{class:"ded-list-item",key:r.userName,style:{"border-bottom":"none"}},[m("div",q,[$(E,{size:"xsmall",src:r.src,alt:"alt text",userName:r.userName},null,8,["src","userName"]),m("div",O,w(r.userName),1)])]))),128))]),_:1})],4)):S("",!0)]))],512)):S("",!0)],2))}};A.__docgenInfo={exportName:"default",displayName:"AvatarGroup",description:"",tags:{},props:[{name:"dataSource",type:{name:"array"},required:!0},{name:"size",type:{name:"string"},defaultValue:{func:!1,value:'"medium"'},values:["xsmall","small","medium","large"]},{name:"limit",type:{name:"number"},defaultValue:{func:!1,value:"1"}},{name:"className",type:{name:"string"},defaultValue:{func:!1,value:'""'}}],sourceFiles:["/Users/auouser/Desktop/Work_Space/DED-WDS_VUE/libs/src/ui/element/AvatarGroup/AvatarGroup.vue"]};function P(n){return`[
        ${n.map(e=>`{
            userName: "${e.userName}",
            src: "${e.src}",
        }`).join(`,
    `)}
    ]`}const H={title:"Component/Avatar-Group",component:A,tags:["autodocs"],argTypes:{dataSource:{description:"資料來源",control:{type:"object"},table:{type:{summary:"{ userName: string; src: string; }[]"}}},size:{description:"Avatar 尺寸",control:{type:"select"},options:["xsmall","small","medium","large"]},limit:{description:"展開數量上限",control:{type:"number",min:0,max:5,step:1}},className:{description:"客製化樣式",control:{type:"text"}}},parameters:{docs:{title:"AvatarGroup",description:{component:"AvatarGroup 組件的呈現及說明。"}}}},d={name:"預設項目",args:{dataSource:[{userName:"Eason",src:""},{userName:"KevinYang",src:""},{userName:"AmosLee",src:""},{userName:"JohnWu",src:""},{userName:"PeterLiao",src:""}],size:"large",limit:2,className:""},render:n=>({components:{AvatarGroup:A},setup(){return{args:n}},template:`
            <AvatarGroup 
                :dataSource="args.dataSource"
                :size="args.size"
                :limit="args.limit"
                :className="args.className"
            ></AvatarGroup>
        `}),parameters:{controls:{},docs:{source:{transform:(n,e)=>{const{args:i}=e;return["<AvatarGroup",`  :dataSource='${P(i.dataSource)}'`,`  size="${i.size}"`,`  :limit="${i.limit}"`,`  class="${i.className}"`,"></AvatarGroup>"].join(`
`).trim()}}}}};var G,b,h;d.parameters={...d.parameters,docs:{...(G=d.parameters)==null?void 0:G.docs,source:{originalSource:`{
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

import{c as S,d as y,j as D,l as B,a as i,F as A,B as w,n as _,b as c,t as x,e as z,C as E,q as V,T as j,o as n,f as q}from"./vue.esm-bundler-CTfO_w4g.js";import{_ as k}from"./Avatar-B3F-ORob.js";import"./Image-CTSQJbND.js";import"./index-Bb4qSo10.js";import"./Icon-B1v4yc6p.js";import"./iframe-eB0XTDOC.js";import"../sb-preview/runtime.js";const F={class:"ded-avatar-text"},M={class:"ded-list ded-outline"},W={class:"ded-list-item-text"},O={class:"ded-list-icon"},P={"data-v-2ddf7f21":"",class:"ded-list-item-label"},L={__name:"AvatarGroup",props:{dataSource:{type:Array,required:!0},size:{type:String,default:"medium",validator:o=>["xsmall","small","medium","large"].includes(o)},limit:{type:Number,default:1},className:{type:String,default:""}},setup(o){const e=o,l=S(()=>{const a=e.dataSource.length-e.limit;return a>=99?99:a}),v=(a,r)=>{const s=a.slice(0,r),N=a.slice(r);return{currList:s,restList:N}},C=S(()=>v(e.dataSource,e.limit).currList),g=S(()=>v(e.dataSource,e.limit).restList),u=y(!1),d=y(null),f=y({top:"0px",left:"0px"}),t=()=>{var r;const a=(r=d.value)==null?void 0:r.getBoundingClientRect();a&&(f.value={top:`${a.bottom+window.scrollY+8}px`,left:`${a.left+window.scrollX}px`})},b=()=>{u.value=!u.value,u.value?(t(),window.addEventListener("resize",t),window.addEventListener("scroll",t,!0),document.addEventListener("click",m)):(window.removeEventListener("resize",t),window.removeEventListener("scroll",t,!0),document.removeEventListener("click",m))},m=a=>{var r;d.value&&!d.value.contains(a.target)&&!((r=document.querySelector(".ded-dropdown-menu"))!=null&&r.contains(a.target))&&(u.value=!1,document.removeEventListener("click",m))};return D(()=>{u.value&&(window.addEventListener("resize",t),window.addEventListener("scroll",t,!0),document.addEventListener("click",m))}),B(()=>{window.removeEventListener("resize",t),window.removeEventListener("scroll",t,!0),document.removeEventListener("click",m)}),(a,r)=>(n(),i("div",{class:_({"ded-avatar-group":!0,[e.className]:!!e.className})},[(n(!0),i(A,null,w(C.value,(s,N)=>(n(),E(k,{key:N,size:e.size,src:s.src,alt:"alt text",userName:s.userName},null,8,["size","src","userName"]))),128)),g.value.length>0?(n(),i(A,{key:0},[g.value.length>0?(n(),i("div",{key:0,ref_key:"restContainerRef",ref:d,class:_(["ded-avatar-container",e.size?`ded-avatar-container-${e.size}`:"ded-avatar-container-medium"])},[c("button",{class:_(["ded-avatar",e.shape?`ded-avatar-${e.shape}`:"ded-avatar-circle"]),onClick:b},[c("span",F,x(`+${l.value}`),1)],2)],2)):z("",!0),(n(),E(j,{to:"body"},[u.value?(n(),i("div",{key:0,class:"ded-dropdown-menu",style:V({position:"absolute",top:f.value.top,left:f.value.left,"z-index":9999})},[c("ul",M,[(n(!0),i(A,null,w(g.value,s=>(n(),i("li",{class:"ded-list-item",key:s.userName},[c("div",W,[c("div",O,[q(k,{size:"xsmall",src:s.src,alt:"alt text",userName:s.userName},null,8,["src","userName"])]),c("div",P,x(s.userName),1)])]))),128))])],4)):z("",!0)]))],64)):z("",!0)],2))}};L.__docgenInfo={exportName:"default",displayName:"AvatarGroup",description:"",tags:{},props:[{name:"dataSource",type:{name:"array"},required:!0},{name:"size",type:{name:"string"},defaultValue:{func:!1,value:'"medium"'},values:["xsmall","small","medium","large"]},{name:"limit",type:{name:"number"},defaultValue:{func:!1,value:"1"}},{name:"className",type:{name:"string"},defaultValue:{func:!1,value:'""'}}],sourceFiles:["/Users/auouser/Desktop/Work_Space/DED-WDS_VUE/libs/src/ui/element/AvatarGroup/AvatarGroup.vue"]};function R(o){return`[
        ${o.map(e=>`{
            userName: "${e.userName}",
            src: "${e.src}",
        }`).join(`,
    `)}
    ]`}const H={title:"Component/Avatar-Group",component:L,tags:["autodocs"],argTypes:{dataSource:{description:"資料來源",control:{type:"object"},table:{type:{summary:"{ userName: string; src: string; }[]"}}},size:{description:"Avatar 尺寸",control:{type:"select"},options:["xsmall","small","medium","large"]},limit:{description:"展開數量上限",control:{type:"number",min:0,max:5,step:1}},className:{description:"客製化樣式",control:{type:"text"}}},parameters:{docs:{title:"AvatarGroup",description:{component:"AvatarGroup 組件的呈現及說明。"}}}},p={name:"預設項目",args:{dataSource:[{userName:"Eason",src:""},{userName:"KevinYang",src:""},{userName:"AmosLee",src:""},{userName:"JohnWu",src:""},{userName:"PeterLiao",src:""}],size:"large",limit:2,className:""},render:o=>({components:{AvatarGroup:L},setup(){return{args:o}},template:`
            <AvatarGroup 
                :dataSource="args.dataSource"
                :size="args.size"
                :limit="args.limit"
                :className="args.className"
            ></AvatarGroup>
        `}),parameters:{controls:{},docs:{source:{transform:(o,e)=>{const{args:l}=e;return["<AvatarGroup",`  :dataSource='${R(l.dataSource)}'`,`  size="${l.size}"`,`  :limit="${l.limit}"`,`  class="${l.className}"`,"></AvatarGroup>"].join(`
`).trim()}}}}};var G,$,h;p.parameters={...p.parameters,docs:{...(G=p.parameters)==null?void 0:G.docs,source:{originalSource:`{
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
}`,...(h=($=p.parameters)==null?void 0:$.docs)==null?void 0:h.source}}};const Q=["MultiAvatar"];export{p as MultiAvatar,Q as __namedExportsOrder,H as default};

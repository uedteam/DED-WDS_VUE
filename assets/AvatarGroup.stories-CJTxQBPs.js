import{e as N,f as S,j as B,l as V,c as i,F as y,B as L,n as A,d as _,t as j,b as h,C as x,q,a as w,D as E,T as F,o as n}from"./vue.esm-bundler-g0-RGFhA.js";import{_ as k}from"./Avatar-D2CkazB6.js";import{_ as M,L as O}from"./List-BGgNiZ4v.js";import"./Image-ClUrw8Er.js";import"./Icon-DeWBP8aK.js";import"./iframe-B--EIfDL.js";import"../sb-preview/runtime.js";const W={class:"ded-avatar-text"},z={__name:"AvatarGroup",props:{dataSource:{type:Array,required:!0},size:{type:String,default:"large",validator:o=>["xsmall","small","medium","large"].includes(o)},limit:{type:Number,default:1},className:{type:String,default:""}},setup(o){const e=o,u=N(()=>{const a=e.dataSource.length-e.limit;return a>=99?99:a}),v=(a,s)=>{const t=a.slice(0,s),f=a.slice(s);return{currList:t,restList:f}},C=N(()=>v(e.dataSource,e.limit).currList),m=N(()=>v(e.dataSource,e.limit).restList),l=S(!1),d=S(null),g=S({top:"0px",left:"0px"}),r=()=>{var s;const a=(s=d.value)==null?void 0:s.getBoundingClientRect();a&&(g.value={top:`${a.bottom+window.scrollY+8}px`,left:`${a.left+window.scrollX}px`})},D=()=>{l.value=!l.value,l.value?(r(),window.addEventListener("resize",r),window.addEventListener("scroll",r,!0),document.addEventListener("click",c)):(window.removeEventListener("resize",r),window.removeEventListener("scroll",r,!0),document.removeEventListener("click",c))},c=a=>{var s;d.value&&!d.value.contains(a.target)&&!((s=document.querySelector(".ded-dropdown-menu"))!=null&&s.contains(a.target))&&(l.value=!1,document.removeEventListener("click",c))};return B(()=>{l.value&&(window.addEventListener("resize",r),window.addEventListener("scroll",r,!0),document.addEventListener("click",c))}),V(()=>{window.removeEventListener("resize",r),window.removeEventListener("scroll",r,!0),document.removeEventListener("click",c)}),(a,s)=>(n(),i("div",{class:A({"ded-avatar-group":!0,[e.className]:!!e.className})},[(n(!0),i(y,null,L(C.value,(t,f)=>(n(),x(k,{key:f,size:e.size,src:t.src,alt:"alt text",userName:t.userName},null,8,["size","src","userName"]))),128)),m.value.length>0?(n(),i(y,{key:0},[m.value.length>0?(n(),i("div",{key:0,ref_key:"restContainerRef",ref:d,class:A(["ded-avatar-container",e.size?`ded-avatar-container-${e.size}`:"ded-avatar-container-medium"])},[_("button",{class:A(["ded-avatar",e.shape?`ded-avatar-${e.shape}`:"ded-avatar-circle"]),onClick:D,style:{cursor:"pointer"}},[_("span",W,j(`+${u.value}`),1)],2)],2)):h("",!0),(n(),x(F,{to:"body"},[l.value?(n(),i("div",{key:0,class:"ded-dropdown-menu",style:q({position:"absolute",top:g.value.top,left:g.value.left,"z-index":9999})},[w(M,{dataSource:m.value,hasOutline:!0},{default:E(()=>[(n(!0),i(y,null,L(m.value,t=>(n(),x(O,{key:t.userName,label:t.userName,value:t.userName,href:t.src,prefix:t.prefix},{default:E(()=>[w(k,{size:"xsmall",src:t.src,alt:"alt text",userName:t.userName},null,8,["src","userName"])]),_:2},1032,["label","value","href","prefix"]))),128))]),_:1},8,["dataSource"])],4)):h("",!0)]))],64)):h("",!0)],2))}};z.__docgenInfo={exportName:"default",displayName:"AvatarGroup",description:"",tags:{},props:[{name:"dataSource",type:{name:"array"},required:!0},{name:"size",type:{name:"string"},defaultValue:{func:!1,value:'"large"'},values:["xsmall","small","medium","large"]},{name:"limit",type:{name:"number"},defaultValue:{func:!1,value:"1"}},{name:"className",type:{name:"string"},defaultValue:{func:!1,value:'""'}}],sourceFiles:["/Users/auouser/Desktop/Work_Space/DED-WDS_VUE/libs/src/ui/element/AvatarGroup/AvatarGroup.vue"]};function P(o){return`[
        ${o.map(e=>`{
            userName: "${e.userName}",
            src: "${e.src}",
        }`).join(`,
    `)}
    ]`}const X={title:"Component/Avatar-Group",component:z,tags:["autodocs"],argTypes:{dataSource:{description:"資料來源",control:{type:"object"},table:{type:{summary:"{ userName: string; src: string; }[]"}}},size:{description:"尺寸",control:{type:"select"},options:["xsmall","small","medium","large"],table:{type:{summary:"xsmall | small | medium | large"}}},limit:{description:"展開數量上限",control:{type:"number",min:0,max:5,step:1}},className:{description:"客製化樣式",control:{type:"text"}}},parameters:{docs:{title:"AvatarGroup",description:{component:"AvatarGroup 組件的呈現及說明。"}}}},p={name:"預設項目",args:{dataSource:[{userName:"eason"},{userName:"KevinYang"},{userName:"AmosLee",src:"https://picsum.photos/200/300"},{userName:"JohnWu",src:"https://picsum.photos/200/300"},{userName:"Peter",src:"https://picsum.photos/200/300"}],size:"large",limit:2,className:""},render:o=>({components:{AvatarGroup:z},setup(){return{args:o}},template:`
            <AvatarGroup 
                :dataSource="args.dataSource"
                :size="args.size"
                :limit="args.limit"
                :className="args.className"
            ></AvatarGroup>
        `}),parameters:{controls:{},docs:{source:{transform:(o,e)=>{const{args:u}=e;return["<AvatarGroup",`  :dataSource='${P(u.dataSource)}'`,`  size="${u.size}"`,`  :limit="${u.limit}"`,`  class="${u.className}"`,"></AvatarGroup>"].join(`
`).trim()}}}}};var G,$,b;p.parameters={...p.parameters,docs:{...(G=p.parameters)==null?void 0:G.docs,source:{originalSource:`{
  name: "預設項目",
  args: {
    dataSource: [{
      "userName": "eason"
    }, {
      "userName": "KevinYang"
    }, {
      "userName": "AmosLee",
      "src": "https://picsum.photos/200/300"
    }, {
      "userName": "JohnWu",
      "src": "https://picsum.photos/200/300"
    }, {
      "userName": "Peter",
      "src": "https://picsum.photos/200/300"
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
}`,...(b=($=p.parameters)==null?void 0:$.docs)==null?void 0:b.source}}};const H=["MultiAvatar"];export{p as MultiAvatar,H as __namedExportsOrder,X as default};

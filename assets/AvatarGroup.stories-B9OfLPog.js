import{g as y,v as S,A as B,E as V,c,d as N,F as A,q as h,a as _,j as w,n as E,t as j,k as q,b as z,e as L,T as F,o}from"./vue.esm-bundler-CC1hEtM-.js";import{_ as G}from"./Avatar-DU0UtSu7.js";import{_ as M,a as O}from"./List-OpHJOgVv.js";import"./Icon-bEM3fLxI.js";import"./Image-59kk61uH.js";const P={class:"ded-avatar-overlay"},R={class:"ded-avatar-text"},$={__name:"AvatarGroup",props:{dataSource:{type:Array,required:!0},size:{type:String,default:"large",validator:i=>["small","medium","large"].includes(i)},limit:{type:Number,default:1},className:{type:String,default:""}},setup(i){const e=i,r=y(()=>{const a=e.dataSource.length-e.limit;return a>=99?99:a});function v(a,n){const t=a.slice(0,n),g=a.slice(n);return{currList:t,restList:g}}const C=y(()=>v(e.dataSource,e.limit).currList),m=y(()=>v(e.dataSource,e.limit).restList),u=S(!1),d=S(null),f=S({top:"0px",left:"0px"});function s(){var n;const a=(n=d.value)==null?void 0:n.getBoundingClientRect();a&&(f.value={top:`${a.bottom+window.scrollY+8}px`,left:`${a.left+window.scrollX}px`})}function D(){u.value=!u.value,u.value?(s(),window.addEventListener("resize",s),window.addEventListener("scroll",s,!0),document.addEventListener("click",l)):(window.removeEventListener("resize",s),window.removeEventListener("scroll",s,!0),document.removeEventListener("click",l))}function l(a){var n;d.value&&!d.value.contains(a.target)&&!((n=document.querySelector(".ded-dropdown-menu"))!=null&&n.contains(a.target))&&(u.value=!1,document.removeEventListener("click",l))}return B(()=>{u.value&&(window.addEventListener("resize",s),window.addEventListener("scroll",s,!0),document.addEventListener("click",l))}),V(()=>{window.removeEventListener("resize",s),window.removeEventListener("scroll",s,!0),document.removeEventListener("click",l)}),(a,n)=>(o(),c("div",{class:E(["ded-avatar-group",{[e.className]:!!e.className}])},[(o(!0),c(A,null,h(C.value,(t,g)=>(o(),c("div",{key:g,class:"ded-avatar-overlay"},[z(G,{shape:e.shape,size:e.size,src:t.src,"user-name":t.userName,caption:t.caption},null,8,["shape","size","src","user-name","caption"])]))),128)),m.value.length>0?(o(),c(A,{key:0},[_("div",P,[m.value.length>0?(o(),c("div",{key:0,ref_key:"restContainerRef",ref:d,class:E(["ded-avatar-container",[`ded-avatar-container-${e.size}`]])},[_("button",{class:"ded-avatar ded-avatar-circle",style:{cursor:"pointer"},onClick:D},[_("span",R,j(`+${r.value}`),1)])],2)):N("",!0)]),(o(),w(F,{to:"body"},[u.value?(o(),c("div",{key:0,class:"ded-dropdown-menu",style:q({position:"absolute",top:f.value.top,left:f.value.left,"z-index":9999})},[z(M,{"data-source":m.value,"has-outline":!0},{default:L(()=>[(o(!0),c(A,null,h(m.value,t=>(o(),w(O,{key:t.userName,label:t.userName,value:t.userName,href:t.src,prefix:t.prefix},{default:L(()=>[z(G,{shape:"circle",size:"medium","user-name":t.userName,caption:t.caption},null,8,["user-name","caption"])]),_:2},1032,["label","value","href","prefix"]))),128))]),_:1},8,["data-source"])],4)):N("",!0)]))],64)):N("",!0)],2))}};$.__docgenInfo={exportName:"default",displayName:"AvatarGroup",description:"",tags:{},props:[{name:"dataSource",type:{name:"array"},required:!0},{name:"size",type:{name:"string"},defaultValue:{func:!1,value:'"large"'},values:["small","medium","large"]},{name:"limit",type:{name:"number"},defaultValue:{func:!1,value:"1"}},{name:"className",type:{name:"string"},defaultValue:{func:!1,value:'""'}}],sourceFiles:["D:/98_測試/up/DED-WDS_VUE/libs/src/ui/element/AvatarGroup/AvatarGroup.vue"]};function T(i){return`${i.map(e=>`  {
      userName: "${e.userName}"${e.caption?`,
      caption: "${e.caption}"`:""}${e.src?`,
      src: "${e.src}"`:""}
  }`).join(`,
`)}`}const J=[{userName:"eason",caption:"Eason"},{userName:"KevinYang",caption:"Kevin"},{userName:"AmosLee",caption:"Amos",src:"https://picsum.photos/320/240"},{userName:"JohnWu",caption:"John",src:"https://picsum.photos/320/340"},{userName:"Peter",caption:"Peter",src:"https://picsum.photos/320/340"}],X={title:"Component/Avatar-Group",component:$,tags:["autodocs"],argTypes:{dataSource:{description:"資料來源",control:{type:"object"},table:{type:{summary:"{ userName: string; caption: string; src: string; }[]"}}},size:{description:"尺寸",control:{type:"select"},options:["small","medium","large"],table:{type:{summary:" small | medium | large"}}},limit:{description:"展開數量上限",control:{type:"number",min:0,max:5,step:1}},className:{description:"客製化樣式",control:{type:"text"}}},parameters:{docs:{title:"AvatarGroup",description:{component:"AvatarGroup 組件的呈現及說明。"}}}},p={name:"預設項目",args:{dataSource:J,size:"large",limit:2,className:""},render:i=>({components:{AvatarGroup:$},setup(){return{args:i}},template:`
      <AvatarGroup 
        :dataSource="args.dataSource"
        :size="args.size"
        :limit="args.limit"
        :className="args.className"
      ></AvatarGroup>
    `}),parameters:{controls:{},docs:{source:{transform:(i,e)=>{const{args:r}=e;return["<script setup>",'import { AvatarGroup } from "@ded-wds-vue/ui";',"const dataSource = [",`${T(r.dataSource)}`,"];","<\/script>","","<template>","  <AvatarGroup",'    :dataSource="dataSource"',`    ${r.size?`size="${r.size}"`:""}`,`    ${r.limit?`:limit="${r.limit}"`:""}`,`    ${r.className?`className="${r.className}"`:""}`,"  ></AvatarGroup>","</template>"].filter(Boolean).join(`
`).trim()}}}}};var x,k,b;p.parameters={...p.parameters,docs:{...(x=p.parameters)==null?void 0:x.docs,source:{originalSource:`{
  name: "預設項目",
  args: {
    dataSource,
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
          return [\`<script setup>\`, \`import { AvatarGroup } from "@ded-wds-vue/ui";\`, \`const dataSource = [\`, \`\${dataSourceString}\`, \`];\`, \`<\/script>\`, "", "<template>", "  <AvatarGroup", \`    :dataSource="dataSource"\`, \`    \${args.size ? \`size="\${args.size}"\` : ""}\`, \`    \${args.limit ? \`:limit="\${args.limit}"\` : ""}\`, \`    \${args.className ? \`className="\${args.className}"\` : ""}\`, "  ></AvatarGroup>", "</template>"].filter(Boolean).join("\\n").trim();
        }
      }
    }
  }
}`,...(b=(k=p.parameters)==null?void 0:k.docs)==null?void 0:b.source}}};const H=["MultiAvatarStory"];export{p as MultiAvatarStory,H as __namedExportsOrder,X as default};

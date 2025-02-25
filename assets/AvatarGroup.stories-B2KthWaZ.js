import{g as N,r as y,q as B,A as V,c,F as S,j as $,a as A,n as G,t as j,e as h,k as w,x as P,b as _,d as E,T as q,o}from"./vue.esm-bundler-Suj5BAdg.js";import{_ as L}from"./Avatar-IHItZqSQ.js";import{_ as F,a as J}from"./List-D9AQFWoV.js";import"./Image-BXsiEVDd.js";import"./Icon-BUi6kykL.js";const K={class:"ded-avatar-overlay"},M={class:"ded-avatar-text"},z={__name:"AvatarGroup",props:{dataSource:{type:Array,required:!0},size:{type:String,default:"large",validator:i=>["small","medium","large"].includes(i)},limit:{type:Number,default:1},className:{type:String,default:""}},setup(i){const e=i,r=N(()=>{const a=e.dataSource.length-e.limit;return a>=99?99:a}),v=(a,n)=>{const t=a.slice(0,n),f=a.slice(n);return{currList:t,restList:f}},C=N(()=>v(e.dataSource,e.limit).currList),m=N(()=>v(e.dataSource,e.limit).restList),u=y(!1),p=y(null),g=y({top:"0px",left:"0px"}),s=()=>{var n;const a=(n=p.value)==null?void 0:n.getBoundingClientRect();a&&(g.value={top:`${a.bottom+window.scrollY+8}px`,left:`${a.left+window.scrollX}px`})},D=()=>{u.value=!u.value,u.value?(s(),window.addEventListener("resize",s),window.addEventListener("scroll",s,!0),document.addEventListener("click",l)):(window.removeEventListener("resize",s),window.removeEventListener("scroll",s,!0),document.removeEventListener("click",l))},l=a=>{var n;p.value&&!p.value.contains(a.target)&&!((n=document.querySelector(".ded-dropdown-menu"))!=null&&n.contains(a.target))&&(u.value=!1,document.removeEventListener("click",l))};return B(()=>{u.value&&(window.addEventListener("resize",s),window.addEventListener("scroll",s,!0),document.addEventListener("click",l))}),V(()=>{window.removeEventListener("resize",s),window.removeEventListener("scroll",s,!0),document.removeEventListener("click",l)}),(a,n)=>(o(),c("div",{class:G({"ded-avatar-group":!0,[e.className]:!!e.className})},[(o(!0),c(S,null,$(C.value,(t,f)=>(o(),c("div",{class:"ded-avatar-overlay",key:f},[_(L,{shape:e.shape,size:e.size,src:t.src,userName:t.userName,caption:t.caption},null,8,["shape","size","src","userName","caption"])]))),128)),m.value.length>0?(o(),c(S,{key:0},[A("div",K,[m.value.length>0?(o(),c("div",{key:0,ref_key:"restContainerRef",ref:p,class:G(["ded-avatar-container",`ded-avatar-container-${e.size}`])},[A("button",{class:"ded-avatar ded-avatar-circle",onClick:D,style:{cursor:"pointer"}},[A("span",M,j(`+${r.value}`),1)])],2)):h("",!0)]),(o(),w(q,{to:"body"},[u.value?(o(),c("div",{key:0,class:"ded-dropdown-menu",style:P({position:"absolute",top:g.value.top,left:g.value.left,"z-index":9999})},[_(F,{dataSource:m.value,hasOutline:!0},{default:E(()=>[(o(!0),c(S,null,$(m.value,t=>(o(),w(J,{key:t.userName,label:t.userName,value:t.userName,href:t.src,prefix:t.prefix},{default:E(()=>[_(L,{shape:"circle",size:"medium",userName:t.userName,caption:t.caption},null,8,["userName","caption"])]),_:2},1032,["label","value","href","prefix"]))),128))]),_:1},8,["dataSource"])],4)):h("",!0)]))],64)):h("",!0)],2))}};z.__docgenInfo={exportName:"default",displayName:"AvatarGroup",description:"",tags:{},props:[{name:"dataSource",type:{name:"array"},required:!0},{name:"size",type:{name:"string"},defaultValue:{func:!1,value:'"large"'},values:["small","medium","large"]},{name:"limit",type:{name:"number"},defaultValue:{func:!1,value:"1"}},{name:"className",type:{name:"string"},defaultValue:{func:!1,value:'""'}}],sourceFiles:["/Users/auouser/Desktop/Work_Space/DED-WDS_VUE/libs/src/ui/element/AvatarGroup/AvatarGroup.vue"]};function O(i){return`[
        ${i.map(e=>`{
            userName: "${e.userName}"${e.caption?`,
            caption: "${e.caption}"`:""}${e.src?`,
            src: "${e.src}"`:""}
        }`).join(`,
        `)}
    ]`}const I={title:"Component/Avatar-Group",component:z,tags:["autodocs"],argTypes:{dataSource:{description:"資料來源",control:{type:"object"},table:{type:{summary:"{ userName: string; caption: string; src: string; }[]"}}},size:{description:"尺寸",control:{type:"select"},options:["small","medium","large"],table:{type:{summary:" small | medium | large"}}},limit:{description:"展開數量上限",control:{type:"number",min:0,max:5,step:1}},className:{description:"客製化樣式",control:{type:"text"}}},parameters:{docs:{title:"AvatarGroup",description:{component:"AvatarGroup 組件的呈現及說明。"}}}},d={name:"預設項目",args:{dataSource:[{userName:"eason",caption:"Eason"},{userName:"KevinYang",caption:"Kevin"},{userName:"AmosLee",caption:"Amos",src:"https://picsum.photos/320/240"},{userName:"JohnWu",caption:"John",src:"https://picsum.photos/320/340"},{userName:"Peter",caption:"Peter",src:"https://picsum.photos/320/340"}],size:"large",limit:2,className:""},render:i=>({components:{AvatarGroup:z},setup(){return{args:i}},template:`
            <AvatarGroup 
                :dataSource="args.dataSource"
                :size="args.size"
                :limit="args.limit"
                :className="args.className"
            ></AvatarGroup>
        `}),parameters:{controls:{},docs:{source:{transform:(i,e)=>{const{args:r}=e;return["<script setup>",'import AvatarGroup from "@/ui/element/AvatarGroup/AvatarGroup.vue";',"<\/script>","","<template>","  <AvatarGroup",`    :dataSource='${O(r.dataSource)}'`,`    ${r.size?`size="${r.size}"`:""}`,`    ${r.limit?`:limit="${r.limit}"`:""}`,`    ${r.className?`className="${r.className}"`:""}`,"  ></AvatarGroup>","</template>"].filter(Boolean).join(`
`).trim()}}}}};var k,x,b;d.parameters={...d.parameters,docs:{...(k=d.parameters)==null?void 0:k.docs,source:{originalSource:`{
  name: "預設項目",
  args: {
    dataSource: [{
      userName: 'eason',
      caption: 'Eason'
    }, {
      userName: 'KevinYang',
      caption: 'Kevin'
    }, {
      userName: 'AmosLee',
      caption: 'Amos',
      src: 'https://picsum.photos/320/240'
    }, {
      userName: 'JohnWu',
      caption: 'John',
      src: 'https://picsum.photos/320/340'
    }, {
      userName: 'Peter',
      caption: 'Peter',
      src: 'https://picsum.photos/320/340'
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
          return [\`<script setup>\`, \`import AvatarGroup from "@/ui/element/AvatarGroup/AvatarGroup.vue";\`, \`<\/script>\`, '', '<template>', '  <AvatarGroup', \`    :dataSource='\${dataSourceString}'\`, \`    \${args.size ? \`size="\${args.size}"\` : ""}\`, \`    \${args.limit ? \`:limit="\${args.limit}"\` : ""}\`, \`    \${args.className ? \`className="\${args.className}"\` : ""}\`, '  ></AvatarGroup>', '</template>'].filter(Boolean).join('\\n').trim();
        }
      }
    }
  }
}`,...(b=(x=d.parameters)==null?void 0:x.docs)==null?void 0:b.source}}};const X=["MultiAvatarStory"];export{d as MultiAvatarStory,X as __namedExportsOrder,I as default};

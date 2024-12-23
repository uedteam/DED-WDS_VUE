import{c as N,f as y,j as B,l as V,a as i,F as S,B as w,e as h,n as E,t as j,d as A,C as L,q as P,b as _,D as k,T as q,o as n}from"./vue.esm-bundler-BQySH7jJ.js";import{_ as x}from"./Avatar-sflxdeRc.js";import{_ as F,a as J}from"./List-BA3LIwmn.js";import"./Image-BZZECbY2.js";import"./Icon-f9eBqVFj.js";import"./iframe-C0k4Wqte.js";import"../sb-preview/runtime.js";const K={class:"ded-avatar-overlay"},M={class:"ded-avatar-text"},z={__name:"AvatarGroup",props:{dataSource:{type:Array,required:!0},size:{type:String,default:"large",validator:o=>["small","medium","large"].includes(o)},limit:{type:Number,default:1},className:{type:String,default:""}},setup(o){const e=o,c=N(()=>{const a=e.dataSource.length-e.limit;return a>=99?99:a}),v=(a,s)=>{const t=a.slice(0,s),f=a.slice(s);return{currList:t,restList:f}},C=N(()=>v(e.dataSource,e.limit).currList),m=N(()=>v(e.dataSource,e.limit).restList),u=y(!1),p=y(null),g=y({top:"0px",left:"0px"}),r=()=>{var s;const a=(s=p.value)==null?void 0:s.getBoundingClientRect();a&&(g.value={top:`${a.bottom+window.scrollY+8}px`,left:`${a.left+window.scrollX}px`})},D=()=>{u.value=!u.value,u.value?(r(),window.addEventListener("resize",r),window.addEventListener("scroll",r,!0),document.addEventListener("click",l)):(window.removeEventListener("resize",r),window.removeEventListener("scroll",r,!0),document.removeEventListener("click",l))},l=a=>{var s;p.value&&!p.value.contains(a.target)&&!((s=document.querySelector(".ded-dropdown-menu"))!=null&&s.contains(a.target))&&(u.value=!1,document.removeEventListener("click",l))};return B(()=>{u.value&&(window.addEventListener("resize",r),window.addEventListener("scroll",r,!0),document.addEventListener("click",l))}),V(()=>{window.removeEventListener("resize",r),window.removeEventListener("scroll",r,!0),document.removeEventListener("click",l)}),(a,s)=>(n(),i("div",{class:E({"ded-avatar-group":!0,[e.className]:!!e.className})},[(n(!0),i(S,null,w(C.value,(t,f)=>(n(),i("div",{class:"ded-avatar-overlay",key:f},[_(x,{shape:e.shape,size:e.size,src:t.src,userName:t.userName,caption:t.caption},null,8,["shape","size","src","userName","caption"])]))),128)),m.value.length>0?(n(),i(S,{key:0},[h("div",K,[m.value.length>0?(n(),i("div",{key:0,ref_key:"restContainerRef",ref:p,class:E(["ded-avatar-container",`ded-avatar-container-${e.size}`])},[h("button",{class:"ded-avatar ded-avatar-circle",onClick:D,style:{cursor:"pointer"}},[h("span",M,j(`+${c.value}`),1)])],2)):A("",!0)]),(n(),L(q,{to:"body"},[u.value?(n(),i("div",{key:0,class:"ded-dropdown-menu",style:P({position:"absolute",top:g.value.top,left:g.value.left,"z-index":9999})},[_(F,{dataSource:m.value,hasOutline:!0},{default:k(()=>[(n(!0),i(S,null,w(m.value,t=>(n(),L(J,{key:t.userName,label:t.userName,value:t.userName,href:t.src,prefix:t.prefix},{default:k(()=>[_(x,{shape:"circle",size:"medium",userName:t.userName,caption:t.caption},null,8,["userName","caption"])]),_:2},1032,["label","value","href","prefix"]))),128))]),_:1},8,["dataSource"])],4)):A("",!0)]))],64)):A("",!0)],2))}};z.__docgenInfo={exportName:"default",displayName:"AvatarGroup",description:"",tags:{},props:[{name:"dataSource",type:{name:"array"},required:!0},{name:"size",type:{name:"string"},defaultValue:{func:!1,value:'"large"'},values:["small","medium","large"]},{name:"limit",type:{name:"number"},defaultValue:{func:!1,value:"1"}},{name:"className",type:{name:"string"},defaultValue:{func:!1,value:'""'}}],sourceFiles:["/Users/auouser/Desktop/Work_Space/DED-WDS_VUE/libs/src/ui/element/AvatarGroup/AvatarGroup.vue"]};function O(o){return`[
        ${o.map(e=>`{
            userName: "${e.userName}",
            src: "${e.src}",
        }`).join(`,
    `)}
    ]`}const H={title:"Component/Avatar-Group",component:z,tags:["autodocs"],argTypes:{dataSource:{description:"資料來源",control:{type:"object"},table:{type:{summary:"{ userName: string; caption: string; src: string; }[]"}}},size:{description:"尺寸",control:{type:"select"},options:["small","medium","large"],table:{type:{summary:" small | medium | large"}}},limit:{description:"展開數量上限",control:{type:"number",min:0,max:5,step:1}},className:{description:"客製化樣式",control:{type:"text"}}},parameters:{docs:{title:"AvatarGroup",description:{component:"AvatarGroup 組件的呈現及說明。"}}}},d={name:"預設項目",args:{dataSource:[{userName:"eason",caption:"Eason"},{userName:"KevinYang",caption:"Kevin"},{userName:"AmosLee",caption:"Amos",src:"https://picsum.photos/320/240"},{userName:"JohnWu",caption:"John",src:"https://picsum.photos/320/340"},{userName:"Peter",caption:"Peter",src:"https://picsum.photos/320/340"}],size:"large",limit:2,className:""},render:o=>({components:{AvatarGroup:z},setup(){return{args:o}},template:`
            <AvatarGroup 
                :dataSource="args.dataSource"
                :size="args.size"
                :limit="args.limit"
                :className="args.className"
            ></AvatarGroup>
        `}),parameters:{controls:{},docs:{source:{transform:(o,e)=>{const{args:c}=e;return["<AvatarGroup",`  :dataSource='${O(c.dataSource)}'`,`  size="${c.size}"`,`  :limit="${c.limit}"`,`  class="${c.className}"`,"></AvatarGroup>"].join(`
`).trim()}}}}};var G,$,b;d.parameters={...d.parameters,docs:{...(G=d.parameters)==null?void 0:G.docs,source:{originalSource:`{
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
          return ['<AvatarGroup', \`  :dataSource='\${dataSourceString}'\`, \`  size="\${args.size}"\`, \`  :limit="\${args.limit}"\`, \`  class="\${args.className}"\`, '></AvatarGroup>'].join('\\n').trim();
        }
      }
    }
  }
}`,...(b=($=d.parameters)==null?void 0:$.docs)==null?void 0:b.source}}};const Q=["MultiAvatar"];export{d as MultiAvatar,Q as __namedExportsOrder,H as default};

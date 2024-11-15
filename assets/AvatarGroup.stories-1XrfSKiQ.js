import{c as v,e as b,a as n,F as f,k as S,b as c,n as i,l as C,t as h,j as A,D as E,f as y,o as e,g as L}from"./vue.esm-bundler-Dy0-1sXb.js";import{_}from"./Avatar-CpHxBqri.js";import{_ as V}from"./List-BCG8_eB9.js";import"./Image-KmhcDqSN.js";import"./index-Bb4qSo10.js";import"./Icon-DAePm6-A.js";import"./iframe-BSJ-Gx0l.js";import"../sb-preview/runtime.js";const z={key:0,class:"rest-container"},j={class:"text-medium"},B={key:0,class:"rest-container-menu"},F={style:{"margin-right":"auto"}},g={__name:"AvatarGroup",props:{dataSource:{type:Array,default:()=>[]},limit:{type:Number,default:1},className:{type:String,default:""}},setup(r){const a=r,o=v(()=>{const s=a.dataSource.length-a.limit;return s>=99?99:s}),l=(s,u)=>{const t=s.slice(0,u),d=s.slice(u);return{currList:t,restList:d}},D=v(()=>l(a.dataSource,a.limit).currList),N=v(()=>l(a.dataSource,a.limit).restList),p=b(!1),k=()=>{p.value=!p.value};return(s,u)=>(e(),n("div",{class:i({"avatar-group":!0,[a.className]:!!a.className})},[(e(!0),n(f,null,S(D.value,(t,d)=>(e(),L(_,{key:d,src:t.src,alt:"alt text",username:t.userName},null,8,["src","username"]))),128)),N.value.length>0?(e(),n("div",z,[c("div",j,[c("button",{class:i(["avatar-container",a.size?`avatar-container-${a.size}`:"avatar-container-medium"]),onClick:u[0]||(u[0]=C(t=>k(),["prevent"])),style:{cursor:"pointer"}},[c("span",{class:i(["avatar",a.shape?`avatar-${a.shape}`:"avatar-circle"])},[c("span",{class:i(["avatar-text",a.size?`text-${a.size}`:"text-medium"])},h(`+${o.value}`),3)],2)],2)]),p.value?(e(),n("div",B,[A(V,null,{default:E(()=>[(e(!0),n(f,null,S(N.value,t=>(e(),n("li",{class:"menu-item",key:t.userName},[A(_,{size:"xsmall",src:t.src,alt:"alt text",username:t.userName},null,8,["src","username"]),c("div",F,h(t.userName),1)]))),128))]),_:1})])):y("",!0)])):y("",!0)],2))}};g.__docgenInfo={exportName:"default",displayName:"AvatarGroup",description:"",tags:{},props:[{name:"dataSource",type:{name:"array"},defaultValue:{func:!1,value:"[]"}},{name:"limit",type:{name:"number"},defaultValue:{func:!1,value:"1"}},{name:"className",type:{name:"string"},defaultValue:{func:!1,value:'""'}}],sourceFiles:["D:/98_測試/up/DED-WDS_VUE/libs/src/ui/element/AvatarGroup/AvatarGroup.vue"]};function M(r){return`[
        ${r.map(a=>`{
            userName: "${a.userName}",
            src: "${a.src}",
        }`).join(`,
    `)}
    ]`}const U={title:"Design System/Avatar-Group",component:g,tags:["autodocs"],argTypes:{dataSource:{description:"資料來源",control:{type:"object"},table:{type:{summary:"{ userName: string; src: string; }[]"}}},limit:{description:"顯示數量上限",control:{type:"number",min:0,max:5,step:1}},className:{description:"客製化樣式",control:{type:"text"}}},parameters:{docs:{title:"AvatarGroup",description:{component:"AvatarGroup 組件的呈現及說明。"}}}},m={name:"預設項目",args:{dataSource:[{userName:"Eason",src:"https://picsum.photos/320/240/?random=1"},{userName:"KevinYang",src:"https://picsum.photos/320/240/?random=10"},{userName:"AmosLee",src:"https://picsum.photos/320/240/?random=100"},{userName:"JohnWu",src:"https://picsum.photos/320/240/?random=1000"}],limit:3,className:""},render:r=>({components:{AvatarGroup:g},setup(){return{args:r}},template:`
            <AvatarGroup 
                :dataSource="args.dataSource"
                :limit="args.limit"
                :className="args.className"
            ></AvatarGroup>
        `}),parameters:{controls:{},docs:{source:{transform:(r,a)=>{const{args:o}=a;return["<AvatarGroup",`  :dataSource='${M(o.dataSource)}'`,`  :limit="${o.limit}"`,`  class="${o.className}"`,"></AvatarGroup>"].join(`
`).trim()}}}}};var G,x,$;m.parameters={...m.parameters,docs:{...(G=m.parameters)==null?void 0:G.docs,source:{originalSource:`{
  name: "預設項目",
  args: {
    dataSource: [{
      userName: "Eason",
      src: "https://picsum.photos/320/240/?random=1"
    }, {
      userName: "KevinYang",
      src: "https://picsum.photos/320/240/?random=10"
    }, {
      userName: "AmosLee",
      src: "https://picsum.photos/320/240/?random=100"
    }, {
      userName: "JohnWu",
      src: "https://picsum.photos/320/240/?random=1000"
    }],
    limit: 3,
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
          return ['<AvatarGroup', \`  :dataSource='\${dataSourceString}'\`, \`  :limit="\${args.limit}"\`, \`  class="\${args.className}"\`, '></AvatarGroup>'].join('\\n').trim();
        }
      }
    }
  }
}`,...($=(x=m.parameters)==null?void 0:x.docs)==null?void 0:$.source}}};const q=["MultiAvatar"];export{m as MultiAvatar,q as __namedExportsOrder,U as default};

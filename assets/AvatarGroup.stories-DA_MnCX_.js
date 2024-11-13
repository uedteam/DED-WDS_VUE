import{c as v,e as C,a as n,F as S,f,b as c,n as m,g as b,t as h,k as A,C as E,j as y,o as t,h as L}from"./vue.esm-bundler-C7FxdvdM.js";import{_}from"./Avatar-DvFB8d2Z.js";import{_ as V}from"./List-B1_AppfZ.js";import"./Image-Dodg18Lo.js";import"./index-Bb4qSo10.js";import"./Icon-B_G9slvJ.js";import"./iframe-Bn-91BlT.js";import"../sb-preview/runtime.js";const z={key:0,class:"rest-container"},j={class:"text-medium"},B={key:0,class:"rest-container-menu"},F={style:{"margin-right":"auto"}},g={__name:"AvatarGroup",props:{dataSource:{type:Array,default:()=>[]},limit:{type:Number,default:1},className:{type:String,default:""}},setup(r){const a=r,o=v(()=>{const s=a.dataSource.length-a.limit;return s>=99?99:s}),l=(s,u)=>{const e=s.slice(0,u),d=s.slice(u);return{currList:e,restList:d}},D=v(()=>l(a.dataSource,a.limit).currList),N=v(()=>l(a.dataSource,a.limit).restList),p=C(!1),k=()=>{p.value=!p.value};return(s,u)=>(t(),n("div",{class:m({"avatar-group":!0,[a.className]:!!a.className})},[(t(!0),n(S,null,f(D.value,(e,d)=>(t(),L(_,{key:d,src:e.src,alt:"alt text",username:e.userName},null,8,["src","username"]))),128)),N.value.length>0?(t(),n("div",z,[c("div",j,[c("button",{class:m(["avatar-container",a.size?`avatar-container-${a.size}`:"avatar-container-medium"]),onClick:u[0]||(u[0]=b(e=>k(),["prevent"])),style:{cursor:"pointer"}},[c("span",{class:m(["avatar",a.shape?`avatar-${a.shape}`:"avatar-circle"])},[c("span",{class:m(["avatar-text",a.size?`text-${a.size}`:"text-medium"])},h(`+${o.value}`),3)],2)],2)]),p.value?(t(),n("div",B,[A(V,null,{default:E(()=>[(t(!0),n(S,null,f(N.value,e=>(t(),n("li",{class:"menu-item",key:e.userName},[A(_,{size:"xsmall",src:e.src,alt:"alt text",username:e.userName},null,8,["src","username"]),c("div",F,h(e.userName),1)]))),128))]),_:1})])):y("",!0)])):y("",!0)],2))}};g.__docgenInfo={exportName:"default",displayName:"AvatarGroup",description:"",tags:{},props:[{name:"dataSource",type:{name:"array"},defaultValue:{func:!1,value:"[]"}},{name:"limit",type:{name:"number"},defaultValue:{func:!1,value:"1"}},{name:"className",type:{name:"string"},defaultValue:{func:!1,value:"''"}}],sourceFiles:["D:/98_測試/up/DED-WDS_VUE/libs/src/ui/element/AvatarGroup/AvatarGroup.vue"]};function M(r){return`[
    ${r.map(a=>`{
        userName: '${a.userName}',
        src: '${a.imageSrc}',
    }`).join(`,
    `)}
  ]`}const U={title:"Design System/Avatar-Group",component:g,tags:["autodocs"],argTypes:{dataSource:{description:"資料來源",control:{type:"object"},table:{type:{summary:"{ userName: string; src: string; }[]"}}},limit:{description:"顯示數量上限",control:{type:"number",min:0,max:5,step:1}},className:{description:"客製化樣式",control:{type:"text"}}},parameters:{docs:{title:"AvatarGroup",description:{component:"AvatarGroup 組件的呈現及說明。"}}}},i={name:"預設項目",args:{dataSource:[{userName:"Eason",src:"https://picsum.photos/320/240/?random=1"},{userName:"KevinYang",src:"https://picsum.photos/320/240/?random=10"},{userName:"AmosLee",src:"https://picsum.photos/320/240/?random=100"},{userName:"JohnWu",src:"https://picsum.photos/320/240/?random=1000"}],limit:3,className:""},render:r=>({components:{AvatarGroup:g},setup(){return{args:r}},template:`
            <AvatarGroup 
                :dataSource="args.dataSource"
                :limit="args.limit"
                :className="args.className"
            ></AvatarGroup>
        `}),parameters:{controls:{},docs:{source:{transform:(r,a)=>{const{args:o}=a;return["<AvatarGroup",`  :dataSource="${M(o.dataSource)}"`,`  :limit="${o.limit}"`,`  className="${o.className}"`,"></AvatarGroup>"].join(`
`).trim()}}}}};var G,x,$;i.parameters={...i.parameters,docs:{...(G=i.parameters)==null?void 0:G.docs,source:{originalSource:`{
  name: "預設項目",
  args: {
    dataSource: [{
      "userName": "Eason",
      "src": "https://picsum.photos/320/240/?random=1"
    }, {
      "userName": "KevinYang",
      "src": "https://picsum.photos/320/240/?random=10"
    }, {
      "userName": "AmosLee",
      "src": "https://picsum.photos/320/240/?random=100"
    }, {
      "userName": "JohnWu",
      "src": "https://picsum.photos/320/240/?random=1000"
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
      // exclude: ['status', 'imageSrc', 'imageAlt', 'username' ],
    },
    docs: {
      source: {
        transform: (src, storyContext) => {
          const {
            args
          } = storyContext;
          const dataSourceString = formatDataSource(args.dataSource);
          return ['<AvatarGroup', \`  :dataSource="\${dataSourceString}"\`, \`  :limit="\${args.limit}"\`, \`  className="\${args.className}"\`, '></AvatarGroup>'].join('\\n').trim();
        }
      }
    }
  }
}`,...($=(x=i.parameters)==null?void 0:x.docs)==null?void 0:$.source}}};const q=["MultiAvatar"];export{i as MultiAvatar,q as __namedExportsOrder,U as default};

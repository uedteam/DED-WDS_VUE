import{o as t,c as r,g as b,F as g,D as v,b as i,t as h,j as y,n as l,f as d,r as C,L,I as V,e as A,d as E}from"./vue.esm-bundler-B_DV3Cj1.js";import{_ as S}from"./Avatar-By4izwDp.js";import{_ as M}from"./Icon-Beb_Hq0_.js";import"./Image-CGIdOtk6.js";import"./index-Bb4qSo10.js";import"./iframe-BcRfFM8S.js";import"../sb-preview/runtime.js";const w={class:"menu-item"},F={style:{"margin-right":"auto"}},G={__name:"Menu",props:{menuData:{type:Array},limit:{type:Number,default:1},customClass:{type:String,default:""}},setup(a){return(e,_)=>(t(),r("ul",{class:l(["menu",a.customClass])},[e.$slots.default?b(e.$slots,"default",{key:0}):(t(!0),r(g,{key:1},v(a.menuData,o=>(t(),r("li",w,[i("div",F,h(o.userName),1),y(M,{name:"arrow_down",size:"24"})]))),256))],2))}};G.__docgenInfo={exportName:"default",displayName:"Menu",description:"",tags:{},props:[{name:"menuData",type:{name:"array"}},{name:"limit",type:{name:"number"},defaultValue:{func:!1,value:"1"}},{name:"customClass",type:{name:"string"},defaultValue:{func:!1,value:"''"}}],slots:[{name:"default"}],sourceFiles:["/Users/jony_worker/Documents/90_外部檔案/upstream/DED-WDS_VUE/libs/src/ui/element/Menu/Menu.vue"]};const q={key:0,class:"rest-container"},B={class:"text-large"},j={key:0,class:"rest-container-menu"},U={style:{"margin-right":"auto"}},f={__name:"AvatarGroup",props:{items:{type:Array,required:!0},size:{type:String,default:"large",validator:a=>["xsmall","small","medium","large"].includes(a)},shape:{type:String,default:"circle",validator:a=>["circle","square"].includes(a)},className:{type:String,default:""},limit:{type:Number}},setup(a){const e=a,_=d(()=>{const n=e.items.length-e.limit;return n>=99?99:n}),o=(n,m)=>{const s=n.slice(0,m),p=n.slice(m);return{currList:s,restList:p}},k=d(()=>o(e.items,e.limit).currList),N=d(()=>o(e.items,e.limit).restList),c=C(!1),$=()=>{c.value=!c.value};return(n,m)=>(t(),r("div",{class:l({"avatar-group":!0,[e.className]:!!e.className})},[(t(!0),r(g,null,v(k.value,(s,p)=>(t(),E(S,{key:p,imageSrc:s.imageSrc,size:e.size,shape:e.shape,imageAlt:"alt text",username:s.userName},null,8,["imageSrc","size","shape","username"]))),128)),N.value.length>0?(t(),r("div",q,[i("div",B,[i("button",{class:l(["avatar-container",`avatar-container-${e.size}`]),onClick:m[0]||(m[0]=L(s=>$(),["prevent"])),style:{cursor:"pointer"}},[i("span",{class:l(["avatar",`avatar-${e.shape}`])},[i("span",{class:l(["avatar-text",`text-${e.size}`])},h(`+${_.value}`),3)],2)],2)]),c.value?(t(),r("div",j,[y(G,null,{default:V(()=>[(t(!0),r(g,null,v(N.value,s=>(t(),r("li",{class:"menu-item",key:s.userName},[y(S,{size:"xsmall",shape:"circle",imageSrc:s.imageSrc,username:s.userName,imageAlt:"alt text"},null,8,["imageSrc","username"]),i("div",U,h(s.userName),1)]))),128))]),_:1})])):A("",!0)])):A("",!0)],2))}};f.__docgenInfo={exportName:"default",displayName:"AvatarGroup",description:"",tags:{},props:[{name:"items",type:{name:"array"},required:!0},{name:"size",type:{name:"string"},defaultValue:{func:!1,value:'"large"'},values:["xsmall","small","medium","large"]},{name:"shape",type:{name:"string"},defaultValue:{func:!1,value:'"circle"'},values:["circle","square"]},{name:"className",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"limit",type:{name:"number"}}],sourceFiles:["/Users/jony_worker/Documents/90_外部檔案/upstream/DED-WDS_VUE/libs/src/ui/element/AvatarGroup/AvatarGroup.vue"]};const H={title:"Design System/AvatarGroup",component:f,tags:["autodocs"],argTypes:{items:{description:"資料來源",control:{type:"object"}},size:{description:"Avatar 尺寸",control:{type:"select"},options:["xsmall","small","medium","large"]},shape:{description:"形狀",control:{type:"select"},options:["circle","square"]},limit:{description:"顯示數量上限",control:{type:"number",min:0,max:5,step:1}},className:{description:"客製化樣式",control:{type:"text"}}},parameters:{docs:{title:"AvatarGroup",description:{component:"AvatarGroup 組件的呈現及說明。"}}}},u={name:"群組狀態",args:{items:[{userName:"Eason",imageSrc:"https://picsum.photos/320/240/?random=1"},{userName:"KevinYang",imageSrc:"https://picsum.photos/320/240/?random=10"},{userName:"AmosLee",imageSrc:"https://picsum.photos/320/240/?random=100"},{userName:"JohnWu",imageSrc:"https://picsum.photos/320/240/?random=1000"}],size:"large",shape:"circle",limit:3,className:""},render:a=>({components:{AvatarGroup:f},setup(){return{args:a}},template:`
            <div style="display:flex; gap: 16px">
                <AvatarGroup 
                    :items="args.items" 
                    :size="args.size" 
                    :shape="args.shape" 
                    :limit="args.limit"
                    :className="args.className"
                ></AvatarGroup>
            </div>
        `}),parameters:{controls:{exclude:["status","imageSrc","imageAlt","username"]}}};var x,z,D;u.parameters={...u.parameters,docs:{...(x=u.parameters)==null?void 0:x.docs,source:{originalSource:`{
  name: "群組狀態",
  args: {
    items: [{
      "userName": "Eason",
      "imageSrc": "https://picsum.photos/320/240/?random=1"
    }, {
      "userName": "KevinYang",
      "imageSrc": "https://picsum.photos/320/240/?random=10"
    }, {
      "userName": "AmosLee",
      "imageSrc": "https://picsum.photos/320/240/?random=100"
    }, {
      "userName": "JohnWu",
      "imageSrc": "https://picsum.photos/320/240/?random=1000"
    }],
    size: "large",
    shape: "circle",
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
            <div style="display:flex; gap: 16px">
                <AvatarGroup 
                    :items="args.items" 
                    :size="args.size" 
                    :shape="args.shape" 
                    :limit="args.limit"
                    :className="args.className"
                ></AvatarGroup>
            </div>
        \`
  }),
  // 控制 controls 中能控制的參數
  parameters: {
    controls: {
      // include: ['themeColor', 'label', 'value', 'name' ],
      exclude: ['status', 'imageSrc', 'imageAlt', 'username']
    }
  }
}`,...(D=(z=u.parameters)==null?void 0:z.docs)==null?void 0:D.source}}};const P=["MultiAvatar"];export{u as MultiAvatar,P as __namedExportsOrder,H as default};

import{f as p,r as E,c as n,F as h,j as y,b as m,n as o,k as L,t as A,l as N,G as b,e as f,o as t,d as C}from"./vue.esm-bundler-XWim8Fx5.js";import{_}from"./Avatar-Cd-Q6wXL.js";import{_ as V}from"./Menu-B8w_5dOD.js";import"./Image-CgDpFoqW.js";import"./index-Bb4qSo10.js";import"./Icon-DD-8nGjT.js";import"./iframe-BZBeCght.js";import"../sb-preview/runtime.js";const $={key:0,class:"rest-container"},q={class:"text-large"},B={key:0,class:"rest-container-menu"},F={style:{"margin-right":"auto"}},d={__name:"AvatarGroup",props:{items:{type:Array,required:!0},size:{type:String,default:"large",validator:s=>["xsmall","small","medium","large"].includes(s)},shape:{type:String,default:"circle",validator:s=>["circle","square"].includes(s)},className:{type:String,default:""},limit:{type:Number}},setup(s){const e=s,G=p(()=>{const r=e.items.length-e.limit;return r>=99?99:r}),g=(r,i)=>{const a=r.slice(0,i),u=r.slice(i);return{currList:a,restList:u}},k=p(()=>g(e.items,e.limit).currList),v=p(()=>g(e.items,e.limit).restList),c=E(!1),D=()=>{c.value=!c.value};return(r,i)=>(t(),n("div",{class:o({"avatar-group":!0,[e.className]:!!e.className})},[(t(!0),n(h,null,y(k.value,(a,u)=>(t(),C(_,{key:u,imageSrc:a.imageSrc,size:e.size,shape:e.shape,imageAlt:"alt text",username:a.userName},null,8,["imageSrc","size","shape","username"]))),128)),v.value.length>0?(t(),n("div",$,[m("div",q,[m("button",{class:o(["avatar-container",`avatar-container-${e.size}`]),onClick:i[0]||(i[0]=L(a=>D(),["prevent"])),style:{cursor:"pointer"}},[m("span",{class:o(["avatar",`avatar-${e.shape}`])},[m("span",{class:o(["avatar-text",`text-${e.size}`])},A(`+${G.value}`),3)],2)],2)]),c.value?(t(),n("div",B,[N(V,null,{default:b(()=>[(t(!0),n(h,null,y(v.value,a=>(t(),n("li",{class:"menu-item",key:a.userName},[N(_,{size:"xsmall",shape:"circle",imageSrc:a.imageSrc,username:a.userName,imageAlt:"alt text"},null,8,["imageSrc","username"]),m("div",F,A(a.userName),1)]))),128))]),_:1})])):f("",!0)])):f("",!0)],2))}};d.__docgenInfo={exportName:"default",displayName:"AvatarGroup",description:"",tags:{},props:[{name:"items",type:{name:"array"},required:!0},{name:"size",type:{name:"string"},defaultValue:{func:!1,value:'"large"'},values:["xsmall","small","medium","large"]},{name:"shape",type:{name:"string"},defaultValue:{func:!1,value:'"circle"'},values:["circle","square"]},{name:"className",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"limit",type:{name:"number"}}],sourceFiles:["/Users/auouser/Desktop/Work_Space/DED-WDS_VUE/libs/src/ui/element/AvatarGroup/AvatarGroup.vue"]};const Y={title:"Design System/AvatarGroup",component:d,tags:["autodocs"],argTypes:{items:{description:"資料來源",control:{type:"object"}},size:{description:"Avatar 尺寸",control:{type:"select"},options:["xsmall","small","medium","large"]},shape:{description:"形狀",control:{type:"select"},options:["circle","square"]},limit:{description:"顯示數量上限",control:{type:"number",min:0,max:5,step:1}},className:{description:"客製化樣式",control:{type:"text"}}},parameters:{docs:{title:"AvatarGroup",description:{component:"AvatarGroup 組件的呈現及說明。"}}}},l={name:"預設項目",args:{items:[{userName:"Eason",imageSrc:"https://picsum.photos/320/240/?random=1"},{userName:"KevinYang",imageSrc:"https://picsum.photos/320/240/?random=10"},{userName:"AmosLee",imageSrc:"https://picsum.photos/320/240/?random=100"},{userName:"JohnWu",imageSrc:"https://picsum.photos/320/240/?random=1000"}],size:"large",shape:"circle",limit:3,className:""},render:s=>({components:{AvatarGroup:d},setup(){return{args:s}},template:`
            <div style="display:flex; gap: 16px">
                <AvatarGroup 
                    :items="args.items" 
                    :size="args.size" 
                    :shape="args.shape" 
                    :limit="args.limit"
                    :className="args.className"
                ></AvatarGroup>
            </div>
        `}),parameters:{controls:{exclude:["status","imageSrc","imageAlt","username"]}}};var S,x,z;l.parameters={...l.parameters,docs:{...(S=l.parameters)==null?void 0:S.docs,source:{originalSource:`{
  name: "預設項目",
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
}`,...(z=(x=l.parameters)==null?void 0:x.docs)==null?void 0:z.source}}};const I=["MultiAvatar"];export{l as MultiAvatar,I as __namedExportsOrder,Y as default};

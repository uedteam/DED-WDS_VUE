import{a as d,g as i,f as c,b,t as y,n as T,o as l,e as h}from"./vue.esm-bundler-Dy0-1sXb.js";import{_ as m}from"./Icon-DAePm6-A.js";import"./iframe-BSJ-Gx0l.js";import"../sb-preview/runtime.js";const x={class:"tag__label"},n={__name:"Tag",props:{themeColor:{type:String,validator:s=>["primary","secondary","tertiary","success","warning","error","info"].includes(s)},label:{type:String},prefix:{type:[String,null]},closeable:{type:Boolean,default:!1},isDisabled:{type:Boolean,default:!1},className:{type:String,default:""}},emits:["remove"],setup(s,{emit:r}){const e=r,a=s,f=()=>{e("remove")};return(v,t)=>(l(),d("span",{class:T({"tag-disable":a.isDisabled,tag__container:!0,[`tag-${a.themeColor}`]:!0,[a.className]:!!a.className})},[a.prefix?(l(),i(m,{key:0,size:"14",name:a.prefix},null,8,["name"])):c("",!0),b("span",x,y(a.label),1),a.closeable?(l(),i(m,{key:1,name:"close",size:"14",onClick:t[0]||(t[0]=D=>f())})):c("",!0)],2))}};n.__docgenInfo={exportName:"default",displayName:"Tag",description:"",tags:{},props:[{name:"themeColor",type:{name:"string"},values:["primary","secondary","tertiary","success","warning","error","info"]},{name:"label",type:{name:"string"}},{name:"prefix",type:{name:"string|null"}},{name:"closeable",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"isDisabled",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"className",type:{name:"string"},defaultValue:{func:!1,value:'""'}}],events:[{name:"remove"}],sourceFiles:["D:/98_測試/up/DED-WDS_VUE/libs/src/ui/element/Tag/Tag.vue"]};const $={title:"Design System/Tag",component:n,tags:["autodocs"],argTypes:{themeColor:{description:"分隔線主題顏色",control:{type:"select",labels:{"":"None",primary:"primary",secondary:"secondary",tertiary:"tertiary",success:"success",warning:"warning",error:"error",info:"info"}},options:["","primary","secondary","tertiary","success","warning","error","info"],table:{type:{summary:"primary | secondary | tertiary | success | warning | error | info"}}},label:{description:"文字內容",control:{type:"text"}},prefix:{description:"圖示",control:{type:"select",labels:{"":"None",busy:"busy","finger-print":"finger-print",home:"home",folder:"folder"}},options:["None","busy","finger-print","home","folder"]},closeable:{description:"是否可關閉",control:{type:"boolean"}},isDisabled:{description:"是否禁用",control:{type:"boolean"}},className:{description:"客製化樣式",control:{type:"text"}},remove:{description:"刪除 emit"}},parameters:{docs:{title:"Tag",description:{component:"Tag 組件的呈現及說明。"}}}},o={name:"預設項目",args:{themeColor:"primary",label:"Social Work",prefix:"folder",closeable:!1,isDisabled:!1,className:""},render:s=>({components:{Tag:n},setup(){const r=h(!0);return{args:s,showTag:r}},template:`
            <div style="display:flex; gap: 8px; flex-wrap: wrap">
                <Tag 
                    v-if="showTag"
                     :themeColor="args.themeColor"
                     :label="args.label"
                     :prefix="args.prefix"
                     :closeable="args.closeable"
                     :isDisabled="args.isDisabled"
                     :className="args.className"
                     @remove="() => showTag = false">
                </Tag>
            </div>
        `}),parameters:{controls:{},docs:{source:{transform:(s,r)=>{const{args:e}=r;return["<Tag",'  v-if="showTag"',`  themeColor="${e.themeColor}"`,`  label="${e.label}"`,`  prefix="${e.prefix}"`,`  :closeable="${e.closeable}"`,`  :isDisabled="${e.isDisabled}"`,`  className="${e.className}"`,'  @remove="() => showTag = false">',"</Tag>"].join(`
`).trim()}}}}};var p,g,u;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: "預設項目",
  args: {
    themeColor: 'primary',
    label: 'Social Work',
    prefix: 'folder',
    closeable: false,
    isDisabled: false,
    className: ''
  },
  render: args => ({
    components: {
      Tag
    },
    setup() {
      const showTag = ref(true); // 控制單一 Tag 是否顯示
      return {
        args,
        showTag
      };
    },
    template: \`
            <div style="display:flex; gap: 8px; flex-wrap: wrap">
                <Tag 
                    v-if="showTag"
                     :themeColor="args.themeColor"
                     :label="args.label"
                     :prefix="args.prefix"
                     :closeable="args.closeable"
                     :isDisabled="args.isDisabled"
                     :className="args.className"
                     @remove="() => showTag = false">
                </Tag>
            </div>
        \`
  }),
  // 控制 controls 中能控制的參數
  parameters: {
    controls: {
      // include: ['themeColor', 'removable' ],
    },
    docs: {
      source: {
        transform: (src, storyContext) => {
          const {
            args
          } = storyContext;
          return ['<Tag', \`  v-if="showTag"\`, \`  themeColor="\${args.themeColor}"\`, \`  label="\${args.label}"\`, \`  prefix="\${args.prefix}"\`, \`  :closeable="\${args.closeable}"\`, \`  :isDisabled="\${args.isDisabled}"\`, \`  className="\${args.className}"\`, \`  @remove="() => showTag = false">\`, '</Tag>'].join('\\n').trim();
        }
      }
    }
  }
}`,...(u=(g=o.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};const S=["TagDefaultStory"];export{o as TagDefaultStory,S as __namedExportsOrder,$ as default};

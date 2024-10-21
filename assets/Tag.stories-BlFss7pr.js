import{c as y,d as m,e as c,b as v,t as b,n as f,o as t,r as N}from"./vue.esm-bundler-BiS57llT.js";import{_ as g}from"./Icon-C0v7E9fm.js";import"./iframe-Bn5geBTM.js";import"../sb-preview/runtime.js";const T={class:"tag__label"},s={__name:"Tag",props:{label:{type:String},icon:{type:[String,null]},themeColor:{type:String,validator:a=>["primary","secondary","tertiary","success","warning","error","info"].includes(a)},removable:{type:Boolean,default:!1},className:{type:String,default:""}},emits:["remove"],setup(a,{emit:n}){const l=n,e=a,r=()=>{l("remove")};return(_,i)=>(t(),y("span",{class:f({tag__container:!0,[`tag-${e.themeColor}`]:!0,[e.className]:!!e.className})},[e.icon?(t(),m(g,{key:0,size:"14",name:e.icon},null,8,["name"])):c("",!0),v("span",T,b(e.label),1),e.removable?(t(),m(g,{key:1,name:"close",size:"14",onClick:i[0]||(i[0]=h=>r())})):c("",!0)],2))}};s.__docgenInfo={exportName:"default",displayName:"Tag",description:"",tags:{},props:[{name:"label",type:{name:"string"}},{name:"icon",type:{name:"string|null"}},{name:"themeColor",type:{name:"string"},values:["primary","secondary","tertiary","success","warning","error","info"]},{name:"removable",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"className",type:{name:"string"},defaultValue:{func:!1,value:"''"}}],events:[{name:"remove"}],sourceFiles:["/Users/jony_worker/Documents/90_外部檔案/upstream/DED-WDS_VUE/libs/src/ui/element/Tag/Tag.vue"]};const w={title:"Design System/Tag",component:s,tags:["autodocs"],argTypes:{label:{description:"文字內容",control:{type:"text"}},icon:{description:"圖示",control:{type:"select"},options:["None","busy","finger-print","home","folder"],mapping:{None:null}},themeColor:{description:"主題顏色",table:{defaultValue:{summary:"primary"}},control:{type:"select"},options:["None","primary","secondary","tertiary","success","warning","error","info"],mapping:{None:null}},removable:{description:"是否可關閉",control:{type:"boolean"}},className:{description:"客製化樣式",control:{type:"text"}}},parameters:{docs:{title:"Tag",description:{component:"Tag 組件的呈現及說明。"}}}},o={name:"主要項目",args:{themeColor:"primary",removable:!0,className:""},render:a=>({components:{Tag:s},setup(){const n=N([{id:1,label:"Photography",iconName:""},{id:2,label:"Cooking",iconName:"home"},{id:3,label:"Reading",iconName:""},{id:4,label:"Social work",iconName:"folder"},{id:5,label:"Arts and crafts",iconName:""},{id:6,label:"Dancing",iconName:""}]);return{args:a,tagsData:n,removeTag:e=>{n.value=n.value.filter(r=>r.id!==e)}}},template:`
            <div style="display:flex; gap: 8px; flex-wrap: wrap">
                <Tag v-for="tag in tagsData"
                     :key="tag.id"
                     :label="tag.label"
                     :icon="tag.iconName"
                     :removable="args.removable"
                     :themeColor="args.themeColor"
                     @remove="removeTag(tag.id)"
                     :className="args.className">
                </Tag>
            </div>
        `}),parameters:{controls:{}}};var p,d,u;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: "主要項目",
  args: {
    themeColor: 'primary',
    removable: true,
    className: ''
  },
  render: args => ({
    components: {
      Tag
    },
    setup() {
      const tagsData = ref([{
        id: 1,
        label: 'Photography',
        iconName: ''
      }, {
        id: 2,
        label: 'Cooking',
        iconName: 'home'
      }, {
        id: 3,
        label: 'Reading',
        iconName: ''
      }, {
        id: 4,
        label: 'Social work',
        iconName: 'folder'
      }, {
        id: 5,
        label: 'Arts and crafts',
        iconName: ''
      }, {
        id: 6,
        label: 'Dancing',
        iconName: ''
      }]);
      const removeTag = id => {
        tagsData.value = tagsData.value.filter(tag => tag.id !== id);
      };
      return {
        args,
        tagsData,
        removeTag
      };
    },
    template: \`
            <div style="display:flex; gap: 8px; flex-wrap: wrap">
                <Tag v-for="tag in tagsData"
                     :key="tag.id"
                     :label="tag.label"
                     :icon="tag.iconName"
                     :removable="args.removable"
                     :themeColor="args.themeColor"
                     @remove="removeTag(tag.id)"
                     :className="args.className">
                </Tag>
            </div>
        \`
  }),
  // 控制 controls 中能控制的參數
  parameters: {
    controls: {
      // include: ['themeColor', 'removable' ],
    }
  }
}`,...(u=(d=o.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};const S=["TagRemove"];export{o as TagRemove,S as __namedExportsOrder,w as default};

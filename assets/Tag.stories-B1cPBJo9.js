import{c as k,d as p,e as u,b as A,t as S,n as F,o as g,r as E}from"./vue.esm-bundler-Bm7qTojY.js";import{_ as d}from"./Icon-0yHNpaiS.js";import"./iframe-DS6YppJf.js";import"../sb-preview/runtime.js";const L={class:"tag__label"},n={__name:"Tag",props:{label:{type:String},icon:{type:[String,null]},themeColor:{type:String,validator:e=>["primary","secondary","tertiary","success","warning","error","info"].includes(e)},removable:{type:Boolean,default:!1}},emits:["remove"],setup(e,{emit:r}){const i=r,a=e,m=()=>{i("remove")};return(B,c)=>(g(),k("span",{class:F(["tag__container",`tag-${a.themeColor}`])},[a.icon?(g(),p(d,{key:0,size:"14",name:a.icon},null,8,["name"])):u("",!0),A("span",L,S(a.label),1),a.removable?(g(),p(d,{key:1,name:"close",size:"14",onClick:c[0]||(c[0]=V=>m())})):u("",!0)],2))}};n.__docgenInfo={exportName:"default",displayName:"Tag",description:"",tags:{},props:[{name:"label",type:{name:"string"}},{name:"icon",type:{name:"string|null"}},{name:"themeColor",type:{name:"string"},values:["primary","secondary","tertiary","success","warning","error","info"]},{name:"removable",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],events:[{name:"remove"}],sourceFiles:["/Users/auouser/Desktop/Work_Space/DED-WDS_VUE/libs/src/ui/element/Tag/Tag.vue"]};const P={title:"Design System/Tag",component:n,tags:["autodocs"],argTypes:{label:{description:"顯示在 Tag 上的文字內容",control:{type:"text"}},icon:{description:"顯示在 Tag 前方的 icon",control:{type:"select"},options:["None","busy","finger-print","home","folder"],mapping:{None:null}},themeColor:{description:"主題顏色",table:{defaultValue:{summary:"primary"}},control:{type:"select"},options:["None","primary","secondary","tertiary","success","warning","error","info"],mapping:{None:null}},removable:{description:"當顯示多個 Tag 時，可解鎖 Tag 的關閉功能",control:{type:"boolean"}}},parameters:{docs:{title:"Tag",description:{component:"Tag組件的呈現及說明。"}}}},o={name:"Tag 基礎樣式",args:{label:"Label Title",icon:"None",themeColor:"primary",removable:!1},render:e=>({components:{Tag:n},setup(){return{args:e}},template:`
            <Tag
                :label="args.label"
                :icon="args.icon"
                :themeColor="args.themeColor"
                :removable="args.removable"></Tag>
        `}),parameters:{controls:{}}},l={name:"Tag 帶圖標",args:{label:"Label Title",icon:"face",themeColor:"primary",removable:!1},render:e=>({components:{Tag:n},setup(){return{args:e}},template:`
            <Tag 
                :label="args.label" 
                :icon="args.icon" 
                :themeColor="args.themeColor"
                :removable="args.removable"></Tag>
        `}),parameters:{controls:{exclude:["removable"]}}},t={name:"Tag 顏色",args:{label:"Label Title",icon:"face",removable:!1},render:e=>({components:{Tag:n},setup(){return{args:e}},template:`
            <div style="display:flex; gap: 16px; flex-wrap: wrap">
                <Tag v-bind="args" themeColor=""></Tag>
                <Tag v-bind="args" themeColor="primary"></Tag>
                <Tag v-bind="args" themeColor="secondary"></Tag>
                <Tag v-bind="args" themeColor="tertiary"></Tag>
                <Tag v-bind="args" themeColor="success"></Tag>
                <Tag v-bind="args" themeColor="warning"></Tag>
                <Tag v-bind="args" themeColor="error"></Tag>
                <Tag v-bind="args" themeColor="info"></Tag>
            </div>
        `}),parameters:{controls:{exclude:["themeColor"]}}},s={name:"Tag 刪除功能",args:{themeColor:"primary",removable:!0},render:e=>({components:{Tag:n},setup(){const r=E([{id:1,label:"Photography",iconName:""},{id:2,label:"Cooking",iconName:"home"},{id:3,label:"Reading",iconName:""},{id:4,label:"Social work",iconName:"folder"},{id:5,label:"Arts and crafts",iconName:""},{id:6,label:"Dancing",iconName:""}]);return{args:e,tagsData:r,removeTag:a=>{r.value=r.value.filter(m=>m.id!==a)}}},template:`
            <div style="display:flex; gap: 8px; flex-wrap: wrap">
                <Tag v-for="tag in tagsData"
                     :key="tag.id"
                     :label="tag.label"
                     :icon="tag.iconName"
                     :removable="args.removable"
                     :themeColor="args.themeColor"
                     @remove="removeTag(tag.id)"></Tag>
            </div>
        `}),parameters:{controls:{include:["themeColor","removable"]}}};var b,T,v;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`{
  name: "Tag 基礎樣式",
  args: {
    label: 'Label Title',
    icon: 'None',
    themeColor: 'primary',
    removable: false
  },
  render: args => ({
    components: {
      Tag
    },
    setup() {
      return {
        args
      };
    },
    template: \`
            <Tag
                :label="args.label"
                :icon="args.icon"
                :themeColor="args.themeColor"
                :removable="args.removable"></Tag>
        \`
  }),
  // 控制 controls 中能控制的參數
  parameters: {
    controls: {
      // include: ['themeColor', 'label', 'value', 'name' ],
    }
  }
}`,...(v=(T=o.parameters)==null?void 0:T.docs)==null?void 0:v.source}}};var C,y,h;l.parameters={...l.parameters,docs:{...(C=l.parameters)==null?void 0:C.docs,source:{originalSource:`{
  name: "Tag 帶圖標",
  args: {
    label: 'Label Title',
    icon: 'face',
    themeColor: 'primary',
    removable: false
  },
  render: args => ({
    components: {
      Tag
    },
    setup() {
      return {
        args
      };
    },
    template: \`
            <Tag 
                :label="args.label" 
                :icon="args.icon" 
                :themeColor="args.themeColor"
                :removable="args.removable"></Tag>
        \`
  }),
  // 控制 controls 中能控制的參數
  parameters: {
    controls: {
      // include: ['themeColor', 'label', 'value', 'name' ],
      exclude: ['removable']
    }
  }
}`,...(h=(y=l.parameters)==null?void 0:y.docs)==null?void 0:h.source}}};var f,D,N;t.parameters={...t.parameters,docs:{...(f=t.parameters)==null?void 0:f.docs,source:{originalSource:`{
  name: "Tag 顏色",
  args: {
    label: 'Label Title',
    icon: 'face',
    removable: false
  },
  render: args => ({
    components: {
      Tag
    },
    setup() {
      return {
        args
      };
    },
    template: \`
            <div style="display:flex; gap: 16px; flex-wrap: wrap">
                <Tag v-bind="args" themeColor=""></Tag>
                <Tag v-bind="args" themeColor="primary"></Tag>
                <Tag v-bind="args" themeColor="secondary"></Tag>
                <Tag v-bind="args" themeColor="tertiary"></Tag>
                <Tag v-bind="args" themeColor="success"></Tag>
                <Tag v-bind="args" themeColor="warning"></Tag>
                <Tag v-bind="args" themeColor="error"></Tag>
                <Tag v-bind="args" themeColor="info"></Tag>
            </div>
        \`
  }),
  // 控制 controls 中能控制的參數
  parameters: {
    controls: {
      // include: ['themeColor', 'label', 'value', 'name' ],
      exclude: ['themeColor']
    }
  }
}`,...(N=(D=t.parameters)==null?void 0:D.docs)==null?void 0:N.source}}};var x,_,w;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  name: "Tag 刪除功能",
  args: {
    themeColor: 'primary',
    removable: true
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
                     @remove="removeTag(tag.id)"></Tag>
            </div>
        \`
  }),
  // 控制 controls 中能控制的參數
  parameters: {
    controls: {
      include: ['themeColor', 'removable']
    }
  }
}`,...(w=(_=s.parameters)==null?void 0:_.docs)==null?void 0:w.source}}};const U=["TagDefault","TagIcon","TagColor","TagRemove"];export{t as TagColor,o as TagDefault,l as TagIcon,s as TagRemove,U as __namedExportsOrder,P as default};

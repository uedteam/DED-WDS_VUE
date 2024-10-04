import{a as k,p,d as u,b as A,t as S,n as E,o as g,j as F}from"./vue.esm-bundler-CsTC-5Ev.js";import{_ as d}from"./Icon-Pq8-XFtv.js";import"./iframe-D3-rZU4J.js";import"../sb-preview/runtime.js";const L={class:"tag__label"},n={__name:"Tag",props:{themeColor:{type:String,validator:e=>["primary","secondary","tertiary","success","warning","error","info"].includes(e)},label:{type:String},icon:{type:[String,null]},removable:{type:Boolean,default:!1}},emits:["remove"],setup(e,{emit:r}){const m=r,a=e,i=()=>{m("remove")};return(B,c)=>(g(),k("span",{class:E(["tag__container",`tag-${a.themeColor}`])},[a.icon?(g(),p(d,{key:0,size:"14",name:a.icon},null,8,["name"])):u("",!0),A("span",L,S(a.label),1),a.removable?(g(),p(d,{key:1,name:"close",size:"14",onClick:c[0]||(c[0]=R=>i())})):u("",!0)],2))}};n.__docgenInfo={exportName:"default",displayName:"Tag",description:"",tags:{},props:[{name:"themeColor",type:{name:"string"},values:["primary","secondary","tertiary","success","warning","error","info"]},{name:"label",type:{name:"string"}},{name:"icon",type:{name:"string|null"}},{name:"removable",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],events:[{name:"remove"}],sourceFiles:["/Users/auouser/Desktop/Work_Space/DED-WDS_VUE/libs/src/ui/element/Tag/Tag.vue"]};const P={title:"Design System/Tag",component:n,tags:["autodocs"],argTypes:{themeColor:{description:"主題顏色",control:{type:"select"},options:["primary","secondary","tertiary","success","warning","error","info"]},label:{description:"顯示在 Tag 上的文字內容",control:{type:"text"}},icon:{description:"顯示在 Tag 前方的 icon",control:{type:"select"},options:["None","face","finger-print","home","folder"],mapping:{None:null}},removable:{description:"啟用Tag關閉功能",control:{type:"boolean"}}},parameters:{docs:{title:"Tag",description:{component:"Tag組件的呈現及說明。"}}}},o={name:"基礎 Tag",args:{label:"Label Title",iconName:"",removable:!1},render:e=>({components:{Tag:n},setup(){return{args:e}},template:`
            <Tag v-bind="args"></Tag>
        `}),parameters:{controls:{}}},t={name:"Tag 加圖示",args:{label:"Label Title",icon:"face",removable:!1,themeColor:""},render:e=>({components:{Tag:n},setup(){return{args:e}},template:`
            <Tag 
                :label="args.label" 
                :icon="args.icon" 
                :themeColor="args.themeColor"
                :removable="args.removable"></Tag>
        `}),parameters:{controls:{}}},l={name:"Tag 顏色",args:{label:"Label Title",icon:"face",removable:!1},render:e=>({components:{Tag:n},setup(){return{args:e}},template:`
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
        `}),parameters:{controls:{}}},s={name:"Tag 刪除功能",args:{label:"Label Title",iconName:"face",removable:!0},render:e=>({components:{Tag:n},setup(){const r=F([{id:1,label:"Photography",iconName:""},{id:2,label:"Cooking",iconName:"home"},{id:3,label:"Reading",iconName:""},{id:4,label:"Social work",iconName:"folder"},{id:5,label:"Arts and crafts",iconName:""},{id:6,label:"Dancing",iconName:""}]);return{args:e,tagsData:r,removeTag:a=>{r.value=r.value.filter(i=>i.id!==a)}}},template:`
            <div style="display:flex; gap: 8px; flex-wrap: wrap">
                <Tag v-for="tag in tagsData"
                     :key="tag.id"
                     :label="tag.label"
                     :icon="tag.iconName"
                     :removable="true"
                     themeColor="primary"
                     @remove="removeTag(tag.id)"></Tag>
            </div>
        `}),parameters:{controls:{}}};var T,b,v;o.parameters={...o.parameters,docs:{...(T=o.parameters)==null?void 0:T.docs,source:{originalSource:`{
  name: "基礎 Tag",
  args: {
    label: 'Label Title',
    iconName: '',
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
            <Tag v-bind="args"></Tag>
        \`
  }),
  // 控制 controls 中能控制的參數
  parameters: {
    controls: {
      // include: ['themeColor', 'label', 'value', 'name' ],
    }
  }
}`,...(v=(b=o.parameters)==null?void 0:b.docs)==null?void 0:v.source}}};var f,y,C;t.parameters={...t.parameters,docs:{...(f=t.parameters)==null?void 0:f.docs,source:{originalSource:`{
  name: "Tag 加圖示",
  args: {
    label: 'Label Title',
    icon: 'face',
    removable: false,
    themeColor: ''
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
}`,...(C=(y=t.parameters)==null?void 0:y.docs)==null?void 0:C.source}}};var h,D,N;l.parameters={...l.parameters,docs:{...(h=l.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
    }
  }
}`,...(N=(D=l.parameters)==null?void 0:D.docs)==null?void 0:N.source}}};var _,x,w;s.parameters={...s.parameters,docs:{...(_=s.parameters)==null?void 0:_.docs,source:{originalSource:`{
  name: "Tag 刪除功能",
  args: {
    label: 'Label Title',
    iconName: 'face',
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
                     :removable="true"
                     themeColor="primary"
                     @remove="removeTag(tag.id)"></Tag>
            </div>
        \`
  }),
  // 控制 controls 中能控制的參數
  parameters: {
    controls: {
      // include: ['themeColor', 'label', 'value', 'name' ],
    }
  }
}`,...(w=(x=s.parameters)==null?void 0:x.docs)==null?void 0:w.source}}};const U=["TagDefault","TagIcon","TagColor","TagRemove"];export{l as TagColor,o as TagDefault,t as TagIcon,s as TagRemove,U as __namedExportsOrder,P as default};

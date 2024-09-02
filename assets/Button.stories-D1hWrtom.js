import{g as l,c as C,j as m,n as s,f as d,e as z,o as u}from"./vue.esm-bundler-5cDHsWFH.js";import{c as D}from"./index-Bb4qSo10.js";import{_ as p}from"./Icon-DGx3RuII.js";import"./iframe-s8k_fwZV.js";import"../sb-preview/runtime.js";function _(t){return l(()=>D("button",{variants:{variant:{contained:"button-contained",outlined:"button-outlined",text:"button-text"},size:{small:"component-small",medium:"component-medium",large:"component-large"}},compoundVariants:[{variant:"contained",themeColor:"primary",class:"button-contained-primary"},{variant:"outlined",themeColor:"primary",class:"button-outlined-primary"},{variant:"text",themeColor:"primary",class:"button-text-primary"},{variant:"contained",themeColor:"secondary",class:"button-contained-secondary"},{variant:"outlined",themeColor:"secondary",class:"button-outlined-secondary"},{variant:"text",themeColor:"secondary",class:"button-text-secondary"},{variant:"contained",themeColor:"tertiary",class:"button-contained-tertiary"},{variant:"outlined",themeColor:"tertiary",class:"button-outlined-tertiary"},{variant:"text",themeColor:"tertiary",class:"button-text-tertiary"},{variant:"contained",themeColor:"success",class:"button-contained-success"},{variant:"outlined",themeColor:"success",class:"button-outlined-success"},{variant:"text",themeColor:"success",class:"button-text-success"},{variant:"contained",themeColor:"warning",class:"button-contained-warning"},{variant:"outlined",themeColor:"warning",class:"button-outlined-warning"},{variant:"text",themeColor:"warning",class:"button-text-warning"},{variant:"contained",themeColor:"error",class:"button-contained-error"},{variant:"outlined",themeColor:"error",class:"button-outlined-error"},{variant:"text",themeColor:"error",class:"button-text-error"},{variant:"contained",themeColor:"info",class:"button-contained-info"},{variant:"outlined",themeColor:"info",class:"button-outlined-info"},{variant:"text",themeColor:"info",class:"button-text-info"},{variant:"contained",isDisable:!0,class:"button-container-disable"},{variant:"outlined",isDisable:!0,class:"button-outline-disable"},{variant:"text",isDisable:!0,class:"button-text-disable"}]})({variant:t.variant,size:t.size,isDisable:t.isDisable,themeColor:t.themeColor}))}function w(t,e){return`${t}-${e}`}const S=(t,e)=>{const n=t.__vccOpts||t;for(const[o,i]of e)n[o]=i;return n},h={__name:"Button",props:{variant:{type:String,default:"contained",validator:t=>["contained","outlined","text"].includes(t)},themeColor:{type:String,default:"primary",validator:t=>["primary","secondary","tertiary","success","warning","error","info"].includes(t)},isDisable:{type:Boolean},size:{type:String,default:"",validator:t=>["small","medium","large"].includes(t)},prefix:{type:String},suffix:{type:String},customClass:{type:String,default:""}},setup(t){const e=t,n=_(e),o=l(()=>w("icon",e.size)),i=l(()=>[n.value,e.customClass].filter(Boolean).join(" "));return(B,V)=>(u(),C("button",{class:s(i.value)},[t.prefix?(u(),m(p,{key:0,class:s(o.value),name:e.prefix},null,8,["class","name"])):d("",!0),z(B.$slots,"default",{},void 0,!0),t.suffix?(u(),m(p,{key:1,class:s(o.value),name:e.suffix},null,8,["class","name"])):d("",!0)],2))}},c=S(h,[["__scopeId","data-v-86bbdb59"]]);h.__docgenInfo={exportName:"default",displayName:"Button",description:"",tags:{},props:[{name:"variant",type:{name:"string"},defaultValue:{func:!1,value:"'contained'"},values:["contained","outlined","text"]},{name:"themeColor",type:{name:"string"},defaultValue:{func:!1,value:"'primary'"},values:["primary","secondary","tertiary","success","warning","error","info"]},{name:"isDisable",type:{name:"boolean"}},{name:"size",type:{name:"string"},defaultValue:{func:!1,value:"''"},values:["small","medium","large"]},{name:"prefix",type:{name:"string"}},{name:"suffix",type:{name:"string"}},{name:"customClass",type:{name:"string"},defaultValue:{func:!1,value:"''"}}],slots:[{name:"default"}],sourceFiles:["/Users/auouser/Desktop/Work_Space/DED-WDS_VUE/libs/src/ui/element/Button/Button.vue"]};const $={title:"Design System/Button",component:c,tags:["autodocs"],argTypes:{content:{description:"為按鈕添加文字",control:{type:"text"}},variant:{description:"按鈕樣式",control:{type:"select"},options:["contained","outlined","text"]},themeColor:{description:"主題顏色",control:{type:"select"},options:["primary","secondary","tertiary","success","warning","error","info"]},isDisable:{description:"是否禁用",control:{type:"boolean"}},size:{description:"按鈕尺寸",control:{type:"select"},options:["small","medium","large"]},prefix:{description:"設定位於按鈕前方的 icon",control:{type:"select"},options:["None","home","folder","academi","arrow-forward","finger-print"],mapping:{None:null}},suffix:{description:"設定位於按鈕後方的 icon",control:{type:"select"},options:["None","home","folder","academi","arrow-forward","finger-print"],mapping:{None:null}},customClass:{description:"客製化樣式",control:{type:"text"}}},parameters:{docs:{title:"按鈕",description:{component:"按鈕組件的呈現及說明。"}}}},a={name:"標準按鈕",args:{content:"Button Text",variant:"contained",prefix:"folder",size:"medium",isDisable:!1},render:t=>({components:{Button:c},setup(){return{args:t}},template:`<Button v-bind="args">
            {{args.content}}
        </Button>
        `}),parameters:{controls:{}}},r={name:"多個按鈕",args:{content:"Button Text",isDisable:!1},render:t=>({components:{Button:c},setup(){return{args:t}},template:`<div style="display:flex; gap: 16px">
                  <Button v-bind="args" variant="contained" themeColor="primary" size="medium" prefix="home">
                   {{args.content}}
                  </Button>
                  <Button v-bind="args" variant="contained" themeColor="secondary" size="medium" prefix="home">
                    {{args.content}}
                  </Button>
                  <Button v-bind="args" variant="contained" themeColor="tertiary" size="medium" prefix="home">
                    {{args.content}}
                  </Button>
                  <Button v-bind="args" variant="contained" themeColor="success" size="medium" prefix="home">
                    {{args.content}}
                  </Button>
                  <Button v-bind="args" variant="contained" themeColor="warning" size="medium" prefix="home">
                    {{args.content}}
                  </Button>
                  <Button v-bind="args" variant="contained" themeColor="error" size="medium" prefix="home">
                    {{args.content}}
                  </Button>
                  <Button v-bind="args" variant="contained" themeColor="info" size="medium" prefix="home">
                    {{args.content}}
                  </Button>
               </div>
                `})};var f,v,g;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`{
  name: '標準按鈕',
  args: {
    content: 'Button Text',
    variant: 'contained',
    prefix: 'folder',
    size: 'medium',
    isDisable: false
  },
  render: args => ({
    components: {
      Button
    },
    setup() {
      return {
        args
      };
    },
    template: \`<Button v-bind="args">
            {{args.content}}
        </Button>
        \`
  }),
  // 控制 controls 中能控制的參數
  parameters: {
    controls: {
      // include: ['variant', 'content', 'themeColor', 'isDisable', 'prefix'],
    }
  }
}`,...(g=(v=a.parameters)==null?void 0:v.docs)==null?void 0:g.source}}};var b,y,x;r.parameters={...r.parameters,docs:{...(b=r.parameters)==null?void 0:b.docs,source:{originalSource:`{
  name: '多個按鈕',
  args: {
    content: 'Button Text',
    isDisable: false
  },
  render: args => ({
    components: {
      Button
    },
    setup() {
      return {
        args
      };
    },
    template: \`<div style="display:flex; gap: 16px">
                  <Button v-bind="args" variant="contained" themeColor="primary" size="medium" prefix="home">
                   {{args.content}}
                  </Button>
                  <Button v-bind="args" variant="contained" themeColor="secondary" size="medium" prefix="home">
                    {{args.content}}
                  </Button>
                  <Button v-bind="args" variant="contained" themeColor="tertiary" size="medium" prefix="home">
                    {{args.content}}
                  </Button>
                  <Button v-bind="args" variant="contained" themeColor="success" size="medium" prefix="home">
                    {{args.content}}
                  </Button>
                  <Button v-bind="args" variant="contained" themeColor="warning" size="medium" prefix="home">
                    {{args.content}}
                  </Button>
                  <Button v-bind="args" variant="contained" themeColor="error" size="medium" prefix="home">
                    {{args.content}}
                  </Button>
                  <Button v-bind="args" variant="contained" themeColor="info" size="medium" prefix="home">
                    {{args.content}}
                  </Button>
               </div>
                \`
  })
}`,...(x=(y=r.parameters)==null?void 0:y.docs)==null?void 0:x.source}}};const j=["ButtonDefault","MultipleButton"];export{a as ButtonDefault,r as MultipleButton,j as __namedExportsOrder,$ as default};

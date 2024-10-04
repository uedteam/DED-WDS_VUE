import{B as o}from"./Button-DKyHAzLO.js";import"./vue.esm-bundler-CsTC-5Ev.js";import"./index-Bb4qSo10.js";import"./Icon-Pq8-XFtv.js";import"./iframe-D3-rZU4J.js";import"../sb-preview/runtime.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const v={title:"Design System/Button",component:o,tags:["autodocs"],argTypes:{content:{description:"為按鈕添加文字",control:{type:"text"}},variant:{description:"按鈕樣式",control:{type:"select"},options:["contained","outlined","text"]},themeColor:{description:"主題顏色",control:{type:"select"},options:["primary","secondary","tertiary","success","warning","error","info"]},isDisable:{description:"是否禁用",control:{type:"boolean"}},size:{description:"按鈕尺寸",control:{type:"select"},options:["small","medium","large"]},prefix:{description:"設定位於按鈕前方的 icon",control:{type:"select"},options:["None","home","folder","academi","arrow-forward","finger-print"],mapping:{None:null}},suffix:{description:"設定位於按鈕後方的 icon",control:{type:"select"},options:["None","home","folder","academi","arrow-forward","finger-print"],mapping:{None:null}},customClass:{description:"客製化樣式",control:{type:"text"}}},parameters:{docs:{title:"按鈕",description:{component:"按鈕組件的呈現及說明。"}}}},n={name:"標準按鈕",args:{content:"Button Text",variant:"contained",prefix:"folder",size:"medium",isDisable:!1},render:e=>({components:{Button:o},setup(){return{args:e}},template:`<Button v-bind="args">
            {{args.content}}
        </Button>
        `}),parameters:{controls:{}}},t={name:"多個按鈕",args:{content:"Button Text",isDisable:!1},render:e=>({components:{Button:o},setup(){return{args:e}},template:`<div style="display:flex; gap: 16px">
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
                `})};var r,i,a;n.parameters={...n.parameters,docs:{...(r=n.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(a=(i=n.parameters)==null?void 0:i.docs)==null?void 0:a.source}}};var s,m,u;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(u=(m=t.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};const h=["ButtonDefault","MultipleButton"];export{n as ButtonDefault,t as MultipleButton,h as __namedExportsOrder,v as default};

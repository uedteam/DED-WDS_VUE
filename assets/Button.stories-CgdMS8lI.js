import{_ as r}from"./Button-Bc-C4yM4.js";import"./vue.esm-bundler-B_DV3Cj1.js";import"./index-Bb4qSo10.js";import"./Icon-Beb_Hq0_.js";import"./iframe-BcRfFM8S.js";import"../sb-preview/runtime.js";const x={title:"Design System/Button",component:r,tags:["autodocs"],argTypes:{variant:{description:"按鈕樣式",control:{type:"select"},options:["contained","outlined","text"]},themeColor:{description:"主題顏色",control:{type:"select"},options:["primary","secondary","tertiary","success","warning","error","info"]},size:{description:"按鈕尺寸",control:{type:"select"},options:["small","medium","large"]},width:{description:"按鈕寬度",control:{type:"select"},options:["fit","full"]},isDisable:{description:"是否禁用",control:{type:"boolean"}},prefix:{description:"前置元素",control:{type:"select"},options:["home","folder","academi","arrow-forward","finger-print","None"],mapping:{None:null}},suffix:{description:"後置元素",control:{type:"select"},options:["home","folder","academi","arrow-forward","finger-print","None"],mapping:{None:null}},className:{description:"客製化樣式",control:{type:"text"}}},parameters:{docs:{title:"按鈕",description:{component:"按鈕組件的呈現及說明。"}},slots:{default:{description:"Default slot 接收按鈕文字",template:"{{ args.default }}"}}}},s={name:"主要項目",args:{default:"Button Text",variant:"contained",themeColor:"primary",size:"medium",width:"fit",prefix:"folder",suffix:"None",isDisable:!1,className:""},render:e=>({components:{Button:r},setup(){return{args:e}},template:`<Button
                :variant="args.variant"
                :themeColor="args.themeColor"
                :size="args.size"
                :width="args.width"
                :prefix="args.prefix"
                :suffix="args.suffix"
                :isDisable="args.isDisable"
                :className="args.className"
            >
                {{ args.default }}
            </Button>
            `}),parameters:{controls:{}}},a={name:"多個按鈕",args:{default:"Button Text",variant:"contained",themeColor:"primary",size:"medium",width:"fit",prefix:"folder",suffix:"None",isDisable:!1,className:""},render:e=>({components:{Button:r},setup(){return{args:e}},template:`<div style="display:flex; flex-wrap: wrap; gap: 16px">
            <Button
                :variant="args.variant"
                themeColor="primary"
                :size="args.size"
                :width="args.width"
                :prefix="args.prefix"
                :suffix="args.suffix"
                :isDisable="args.isDisable"
                :className="args.className"
            >
                {{ args.default }}
            </Button>
            <Button
                :variant="args.variant"
                themeColor="secondary"
                :size="args.size"
                :width="args.width"
                :prefix="args.prefix"
                :suffix="args.suffix"
                :isDisable="args.isDisable"
                :className="args.className"
            >
                {{ args.default }}
            </Button>
            <Button
                :variant="args.variant"
                themeColor="tertiary"
                :size="args.size"
                :width="args.width"
                :prefix="args.prefix"
                :suffix="args.suffix"
                :isDisable="args.isDisable"
                :className="args.className"
            >
                {{ args.default }}
            </Button>
            <Button
                :variant="args.variant"
                themeColor="success"
                :size="args.size"
                :width="args.width"
                :prefix="args.prefix"
                :suffix="args.suffix"
                :isDisable="args.isDisable"
                :className="args.className"
            >
                {{ args.default }}
            </Button>
            <Button
                :variant="args.variant"
                themeColor="warning"
                :size="args.size"
                :width="args.width"
                :prefix="args.prefix"
                :suffix="args.suffix"
                :isDisable="args.isDisable"
                :className="args.className"
            >
                {{ args.default }}
            </Button>
            <Button
                :variant="args.variant"
                themeColor="error"
                :size="args.size"
                :width="args.width"
                :prefix="args.prefix"
                :suffix="args.suffix"
                :isDisable="args.isDisable"
                :className="args.className"
            >
                {{ args.default }}
            </Button>
            <Button
                :variant="args.variant"
                themeColor="info"
                :size="args.size"
                :width="args.width"
                :prefix="args.prefix"
                :suffix="args.suffix"
                :isDisable="args.isDisable"
                :className="args.className"
            >
                {{ args.default }}
            </Button>
        </div>
        `}),parameters:{controls:{exclude:["themeColor"]}}};var t,i,n;s.parameters={...s.parameters,docs:{...(t=s.parameters)==null?void 0:t.docs,source:{originalSource:`{
  name: '主要項目',
  args: {
    default: 'Button Text',
    variant: 'contained',
    themeColor: 'primary',
    size: 'medium',
    width: 'fit',
    prefix: 'folder',
    suffix: 'None',
    isDisable: false,
    className: ""
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
    template: \`<Button
                :variant="args.variant"
                :themeColor="args.themeColor"
                :size="args.size"
                :width="args.width"
                :prefix="args.prefix"
                :suffix="args.suffix"
                :isDisable="args.isDisable"
                :className="args.className"
            >
                {{ args.default }}
            </Button>
            \`
  }),
  // 控制 controls 中能控制的參數
  parameters: {
    controls: {
      // include: ['variant', 'content', 'themeColor', 'isDisable', 'prefix'],
    }
  }
}`,...(n=(i=s.parameters)==null?void 0:i.docs)==null?void 0:n.source}}};var o,l,f;a.parameters={...a.parameters,docs:{...(o=a.parameters)==null?void 0:o.docs,source:{originalSource:`{
  name: '多個按鈕',
  args: {
    default: 'Button Text',
    variant: 'contained',
    themeColor: 'primary',
    size: 'medium',
    width: 'fit',
    prefix: 'folder',
    suffix: 'None',
    isDisable: false,
    className: ""
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
    template: \`<div style="display:flex; flex-wrap: wrap; gap: 16px">
            <Button
                :variant="args.variant"
                themeColor="primary"
                :size="args.size"
                :width="args.width"
                :prefix="args.prefix"
                :suffix="args.suffix"
                :isDisable="args.isDisable"
                :className="args.className"
            >
                {{ args.default }}
            </Button>
            <Button
                :variant="args.variant"
                themeColor="secondary"
                :size="args.size"
                :width="args.width"
                :prefix="args.prefix"
                :suffix="args.suffix"
                :isDisable="args.isDisable"
                :className="args.className"
            >
                {{ args.default }}
            </Button>
            <Button
                :variant="args.variant"
                themeColor="tertiary"
                :size="args.size"
                :width="args.width"
                :prefix="args.prefix"
                :suffix="args.suffix"
                :isDisable="args.isDisable"
                :className="args.className"
            >
                {{ args.default }}
            </Button>
            <Button
                :variant="args.variant"
                themeColor="success"
                :size="args.size"
                :width="args.width"
                :prefix="args.prefix"
                :suffix="args.suffix"
                :isDisable="args.isDisable"
                :className="args.className"
            >
                {{ args.default }}
            </Button>
            <Button
                :variant="args.variant"
                themeColor="warning"
                :size="args.size"
                :width="args.width"
                :prefix="args.prefix"
                :suffix="args.suffix"
                :isDisable="args.isDisable"
                :className="args.className"
            >
                {{ args.default }}
            </Button>
            <Button
                :variant="args.variant"
                themeColor="error"
                :size="args.size"
                :width="args.width"
                :prefix="args.prefix"
                :suffix="args.suffix"
                :isDisable="args.isDisable"
                :className="args.className"
            >
                {{ args.default }}
            </Button>
            <Button
                :variant="args.variant"
                themeColor="info"
                :size="args.size"
                :width="args.width"
                :prefix="args.prefix"
                :suffix="args.suffix"
                :isDisable="args.isDisable"
                :className="args.className"
            >
                {{ args.default }}
            </Button>
        </div>
        \`
  }),
  // 控制 controls 中能控制的參數
  parameters: {
    controls: {
      exclude: ['themeColor']
    }
  }
}`,...(f=(l=a.parameters)==null?void 0:l.docs)==null?void 0:f.source}}};const h=["ButtonDefault","MultipleButton"];export{s as ButtonDefault,a as MultipleButton,h as __namedExportsOrder,x as default};

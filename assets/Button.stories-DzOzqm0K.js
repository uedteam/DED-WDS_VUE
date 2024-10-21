import{B as s}from"./Button-BQuyBdgb.js";import"./vue.esm-bundler-Bm7qTojY.js";import"./index-Bb4qSo10.js";import"./Icon-0yHNpaiS.js";import"./iframe-DS6YppJf.js";import"../sb-preview/runtime.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const y={title:"Design System/Button",component:s,tags:["autodocs"],argTypes:{variant:{description:"按鈕樣式",control:{type:"select"},options:["contained","outlined","text"]},themeColor:{description:"主題顏色",control:{type:"select"},options:["primary","secondary","tertiary","success","warning","error","info"]},size:{description:"按鈕尺寸",control:{type:"select"},options:["small","medium","large"]},width:{description:"按鈕寬度",control:{type:"select"},options:["fit","full"]},isDisable:{description:"是否禁用",control:{type:"boolean"}},prefix:{description:"設定位於按鈕前方的 icon",control:{type:"select"},options:["home","folder","academi","arrow-forward","finger-print","None"],mapping:{None:null}},suffix:{description:"設定位於按鈕後方的 icon",control:{type:"select"},options:["home","folder","academi","arrow-forward","finger-print","None"],mapping:{None:null}},customClass:{description:"客製化樣式",control:{type:"text"}}},parameters:{docs:{title:"按鈕",description:{component:"按鈕組件的呈現及說明。"}},slots:{default:{description:"Default slot 接收按鈕文字",template:"{{ args.default }}"}}}},r={name:"基礎按鈕",args:{default:"Button Text",variant:"contained",themeColor:"primary",size:"medium",width:"fit",prefix:"folder",suffix:"None",isDisable:!1},render:e=>({components:{Button:s},setup(){return{args:e}},template:`<Button
                :variant="args.variant"
                :themeColor="args.themeColor"
                :size="args.size"
                :width="args.width"
                :prefix="args.prefix"
                :suffix="args.suffix"
                :isDisable="args.isDisable"
            >
                {{ args.default }}
            </Button>
            `}),parameters:{controls:{}}},a={name:"按鈕樣式",args:{default:"Button Text",themeColor:"primary",size:"medium",width:"fit",prefix:"folder",suffix:"None",isDisable:!1},render:e=>({components:{Button:s},setup(){return{args:e}},template:`
                <div style="display:flex; flex-wrap: wrap; gap: 16px">
                    <Button
                        variant="contained"
                        :themeColor="args.themeColor"
                        :size="args.size"
                        :width="args.width"
                        :prefix="args.prefix"
                        :suffix="args.suffix"
                        :isDisable="args.isDisable"
                    >
                        {{ args.default }}
                    </Button>
                    <Button
                        variant="outlined"
                        :themeColor="args.themeColor"
                        :size="args.size"
                        :width="args.width"
                        :prefix="args.prefix"
                        :suffix="args.suffix"
                        :isDisable="args.isDisable"
                    >
                        {{ args.default }}
                    </Button>
                    <Button
                        variant="text"
                        :themeColor="args.themeColor"
                        :size="args.size"
                        :width="args.width"
                        :prefix="args.prefix"
                        :suffix="args.suffix"
                        :isDisable="args.isDisable"
                    >
                        {{ args.default }}
                    </Button>
                </div>
            
            `}),parameters:{controls:{exclude:["variant"]}}},t={name:"按鈕顏色",args:{default:"Button Text",variant:"contained",themeColor:"primary",size:"medium",width:"fit",prefix:"folder",suffix:"None",isDisable:!1},render:e=>({components:{Button:s},setup(){return{args:e}},template:`<div style="display:flex; flex-wrap: wrap; gap: 16px">
            <Button
                :variant="args.variant"
                themeColor="primary"
                :size="args.size"
                :width="args.width"
                :prefix="args.prefix"
                :suffix="args.suffix"
                :isDisable="args.isDisable"
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
            >
                {{ args.default }}
            </Button>
        </div>
        `}),parameters:{controls:{exclude:["themeColor"]}}},n={name:"按鈕寬度",args:{default:"Button Text",variant:"contained",themeColor:"primary",size:"medium",prefix:"folder",suffix:"None",isDisable:!1},render:e=>({components:{Button:s},setup(){return{args:e}},template:`
                <div style="display:flex; flex-wrap: wrap; gap: 16px">
                    
                    <Button
                        :variant="args.variant"
                        :themeColor="args.themeColor"
                        :size="args.size"
                        width="full"
                        :prefix="args.prefix"
                        :suffix="args.suffix"
                        :isDisable="args.isDisable"
                    >
                        {{ args.default }}
                    </Button>
                    <Button
                        :variant="args.variant"
                        :themeColor="args.themeColor"
                        :size="args.size"
                        width="fit"
                        :prefix="args.prefix"
                        :suffix="args.suffix"
                        :isDisable="args.isDisable"
                    >
                        {{ args.default }}
                    </Button>
                </div>
            
            `}),parameters:{controls:{exclude:["width"]}}};var i,o,u;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  name: '基礎按鈕',
  args: {
    default: 'Button Text',
    variant: 'contained',
    themeColor: 'primary',
    size: 'medium',
    width: 'fit',
    prefix: 'folder',
    suffix: 'None',
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
    template: \`<Button
                :variant="args.variant"
                :themeColor="args.themeColor"
                :size="args.size"
                :width="args.width"
                :prefix="args.prefix"
                :suffix="args.suffix"
                :isDisable="args.isDisable"
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
}`,...(u=(o=r.parameters)==null?void 0:o.docs)==null?void 0:u.source}}};var f,l,g;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`{
  name: '按鈕樣式',
  args: {
    default: 'Button Text',
    themeColor: 'primary',
    size: 'medium',
    width: 'fit',
    prefix: 'folder',
    suffix: 'None',
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
    template: \`
                <div style="display:flex; flex-wrap: wrap; gap: 16px">
                    <Button
                        variant="contained"
                        :themeColor="args.themeColor"
                        :size="args.size"
                        :width="args.width"
                        :prefix="args.prefix"
                        :suffix="args.suffix"
                        :isDisable="args.isDisable"
                    >
                        {{ args.default }}
                    </Button>
                    <Button
                        variant="outlined"
                        :themeColor="args.themeColor"
                        :size="args.size"
                        :width="args.width"
                        :prefix="args.prefix"
                        :suffix="args.suffix"
                        :isDisable="args.isDisable"
                    >
                        {{ args.default }}
                    </Button>
                    <Button
                        variant="text"
                        :themeColor="args.themeColor"
                        :size="args.size"
                        :width="args.width"
                        :prefix="args.prefix"
                        :suffix="args.suffix"
                        :isDisable="args.isDisable"
                    >
                        {{ args.default }}
                    </Button>
                </div>
            
            \`
  }),
  // 控制 controls 中能控制的參數
  parameters: {
    controls: {
      exclude: ['variant']
    }
  }
}`,...(g=(l=a.parameters)==null?void 0:l.docs)==null?void 0:g.source}}};var p,d,x;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: '按鈕顏色',
  args: {
    default: 'Button Text',
    variant: 'contained',
    themeColor: 'primary',
    size: 'medium',
    width: 'fit',
    prefix: 'folder',
    suffix: 'None',
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
    template: \`<div style="display:flex; flex-wrap: wrap; gap: 16px">
            <Button
                :variant="args.variant"
                themeColor="primary"
                :size="args.size"
                :width="args.width"
                :prefix="args.prefix"
                :suffix="args.suffix"
                :isDisable="args.isDisable"
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
}`,...(x=(d=t.parameters)==null?void 0:d.docs)==null?void 0:x.source}}};var m,h,c;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: '按鈕寬度',
  args: {
    default: 'Button Text',
    variant: 'contained',
    themeColor: 'primary',
    size: 'medium',
    prefix: 'folder',
    suffix: 'None',
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
    template: \`
                <div style="display:flex; flex-wrap: wrap; gap: 16px">
                    
                    <Button
                        :variant="args.variant"
                        :themeColor="args.themeColor"
                        :size="args.size"
                        width="full"
                        :prefix="args.prefix"
                        :suffix="args.suffix"
                        :isDisable="args.isDisable"
                    >
                        {{ args.default }}
                    </Button>
                    <Button
                        :variant="args.variant"
                        :themeColor="args.themeColor"
                        :size="args.size"
                        width="fit"
                        :prefix="args.prefix"
                        :suffix="args.suffix"
                        :isDisable="args.isDisable"
                    >
                        {{ args.default }}
                    </Button>
                </div>
            
            \`
  }),
  // 控制 controls 中能控制的參數
  parameters: {
    controls: {
      exclude: ['width']
    }
  }
}`,...(c=(h=n.parameters)==null?void 0:h.docs)==null?void 0:c.source}}};const N=["ButtonDefault","ButtonVariant","MultipleButton","ButtonWidth"];export{r as ButtonDefault,a as ButtonVariant,n as ButtonWidth,t as MultipleButton,N as __namedExportsOrder,y as default};

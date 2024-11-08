import{_ as e}from"./Button-C5i7d6Nm.js";import"./vue.esm-bundler-wiEVvyCh.js";import"./index-Bb4qSo10.js";import"./Icon-CSRllRg0.js";import"./iframe-BNXXAjtc.js";import"../sb-preview/runtime.js";const y={title:"Design System/Button",component:e,tags:["autodocs"],argTypes:{variant:{description:"按鈕樣式",control:{type:"select"},options:["contained","outlined","text"]},themeColor:{description:"主題顏色",control:{type:"select"},options:["primary","secondary","tertiary","success","warning","error","info"]},size:{description:"按鈕尺寸",control:{type:"select"},options:["small","medium","large"]},width:{description:"按鈕寬度",control:{type:"select"},options:["fit","full"]},isDisable:{description:"是否禁用",control:{type:"boolean"}},prefix:{description:"前置元素",control:{type:"select"},options:["home","folder","academi","arrow-forward","finger-print","None"],mapping:{None:null}},suffix:{description:"後置元素",control:{type:"select"},options:["home","folder","academi","arrow-forward","finger-print","None"],mapping:{None:null}},className:{description:"客製化樣式",control:{type:"text"}}},parameters:{docs:{title:"按鈕",description:{component:"按鈕組件的呈現及說明。"}},slots:{default:{description:"Default slot 接收按鈕文字",template:"{{ args.default }}"}}}},r={name:"主要項目",args:{default:"按鈕",variant:"contained",themeColor:"primary",size:"medium",width:"fit",prefix:"folder",suffix:"None",isDisable:!1,className:""},render:a=>({components:{Button:e},setup(){return{args:a}},template:`
            <Button
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
            `}),parameters:{controls:{},docs:{source:{transform:(a,B)=>{const{args:s}=B;return["<Button",`  variant="${s.variant}"`,`  themeColor="${s.themeColor}"`,`  size="${s.size}"`,`  width="${s.width}"`,`  prefix="${s.prefix}"`,`  suffix="${s.suffix}"`,`  isDisable="${s.isDisable}"`,`  className="${s.className}"`,">",`  ${s.default}`,"</Button>"].join(`
`).trim()}}}}},t={name:"附加元素",args:{default:"Button Text",variant:"contained",themeColor:"primary",size:"medium",width:"fit",isDisable:!1,className:""},render:a=>({components:{Button:e},setup(){return{args:a}},template:`<div style="display:flex; flex-wrap: wrap; gap: 16px">
            <Button
                :variant="args.variant"
                :themeColor="args.themeColor"
                :size="args.size"
                :width="args.width"
                prefix="folder"
                suffix=""
                :isDisable="args.isDisable"
                :className="args.className"
            >
                {{ args.default }}
            </Button>
            <Button
                :variant="args.variant"
                :themeColor="args.themeColor"
                :size="args.size"
                :width="args.width"
                prefix=""
                suffix="folder"
                :isDisable="args.isDisable"
                :className="args.className"
            >
                {{ args.default }}
            </Button>
            
        </div>
        `}),parameters:{controls:{exclude:["prefix","suffix"]}}},n={name:"按鈕樣式",args:{default:"Button Text",variant:"contained",themeColor:"primary",size:"medium",width:"fit",prefix:"folder",suffix:"None",isDisable:!1,className:""},render:a=>({components:{Button:e},setup(){return{args:a}},template:`<div style="display:flex; flex-wrap: wrap; gap: 16px">
            <Button
                variant="contained"
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
            <Button
                variant="outlined"
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
            <Button
                variant="text"
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
            
        </div>
        `}),parameters:{controls:{exclude:["variant"]}}},i={name:"多個按鈕",args:{default:"Button Text",variant:"contained",themeColor:"primary",size:"medium",width:"fit",prefix:"folder",suffix:"None",isDisable:!1,className:""},render:a=>({components:{Button:e},setup(){return{args:a}},template:`<div style="display:flex; flex-wrap: wrap; gap: 16px">
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
        `}),parameters:{controls:{exclude:["themeColor"]}}};var o,l,u;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
  name: '主要項目',
  args: {
    default: '按鈕',
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
    template: \`
            <Button
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
    },
    docs: {
      source: {
        transform: (src, storyContext) => {
          const {
            args
          } = storyContext;
          return ['<Button', \`  variant="\${args.variant}"\`, \`  themeColor="\${args.themeColor}"\`, \`  size="\${args.size}"\`, \`  width="\${args.width}"\`, \`  prefix="\${args.prefix}"\`, \`  suffix="\${args.suffix}"\`, \`  isDisable="\${args.isDisable}"\`, \`  className="\${args.className}"\`, '>', \`  \${args.default}\`, '</Button>'].join('\\n').trim();
        }
      }
    }
  }
}`,...(u=(l=r.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};var f,g,m;t.parameters={...t.parameters,docs:{...(f=t.parameters)==null?void 0:f.docs,source:{originalSource:`{
  name: '附加元素',
  args: {
    default: 'Button Text',
    variant: 'contained',
    themeColor: 'primary',
    size: 'medium',
    width: 'fit',
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
                :themeColor="args.themeColor"
                :size="args.size"
                :width="args.width"
                prefix="folder"
                suffix=""
                :isDisable="args.isDisable"
                :className="args.className"
            >
                {{ args.default }}
            </Button>
            <Button
                :variant="args.variant"
                :themeColor="args.themeColor"
                :size="args.size"
                :width="args.width"
                prefix=""
                suffix="folder"
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
      exclude: ['prefix', 'suffix']
    }
  }
}`,...(m=(g=t.parameters)==null?void 0:g.docs)==null?void 0:m.source}}};var d,p,c;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
  name: '按鈕樣式',
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
                variant="contained"
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
            <Button
                variant="outlined"
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
            <Button
                variant="text"
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
            
        </div>
        \`
  }),
  // 控制 controls 中能控制的參數
  parameters: {
    controls: {
      exclude: ['variant']
    }
  }
}`,...(c=(p=n.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};var x,h,w;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(w=(h=i.parameters)==null?void 0:h.docs)==null?void 0:w.source}}};const $=["DefaultButtonStory","ButtonPrefixSuffixStory","ButtonTypeStory","ButtonColorStory"];export{i as ButtonColorStory,t as ButtonPrefixSuffixStory,n as ButtonTypeStory,r as DefaultButtonStory,$ as __namedExportsOrder,y as default};

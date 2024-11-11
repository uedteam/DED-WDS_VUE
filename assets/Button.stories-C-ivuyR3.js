import{_ as r}from"./Button-BdhkCme2.js";import"./vue.esm-bundler-jfoHxfC9.js";import"./index-Bb4qSo10.js";import"./Icon-DakahK8X.js";import"./iframe-CGSdzTJx.js";import"../sb-preview/runtime.js";const C={title:"Design System/Button",component:r,tags:["autodocs"],argTypes:{themeColor:{description:"主題顏色",control:{type:"select"},options:["primary","secondary","tertiary","success","warning","error","info"]},variant:{description:"按鈕樣式",required:!0,control:{type:"select"},options:["contained","outlined","text"]},size:{description:"按鈕尺寸",control:{type:"select"},options:["small","medium","large"]},width:{description:"按鈕寬度",control:{type:"select"},options:["fit","full"]},isDisable:{description:"是否禁用",control:{type:"boolean"}},prefix:{description:"前置元素",control:{type:"select"},options:["home","folder","academi","arrow-forward","finger-print","None"],mapping:{None:null}},suffix:{description:"後置元素",control:{type:"select"},options:["home","folder","academi","arrow-forward","finger-print","None"],mapping:{None:null}},className:{description:"客製化樣式",control:{type:"text"}}},parameters:{docs:{title:"按鈕",description:{component:"按鈕組件的呈現及說明。"}},slots:{default:{description:"Default slot 接收按鈕文字",template:"{{ args.default }}"}}}},i={name:"主要項目",args:{default:"按鈕",themeColor:"primary",variant:"contained",size:"medium",width:"fit",prefix:"folder",suffix:"None",isDisable:!1,className:""},render:a=>({components:{Button:r},setup(){return{args:a}},template:`
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
            `}),parameters:{controls:{},docs:{source:{transform:(a,e)=>{const{args:s}=e;return["<Button",`  variant="${s.variant}"`,`  themeColor="${s.themeColor}"`,`  size="${s.size}"`,`  width="${s.width}"`,`  prefix="${s.prefix}"`,`  suffix="${s.suffix}"`,`  isDisable="${s.isDisable}"`,`  className="${s.className}"`,">",`  ${s.default}`,"</Button>"].join(`
`).trim()}}}}},t={name:"附加元素",args:{default:"按鈕",variant:"contained",themeColor:"primary",size:"medium",width:"fit",isDisable:!1,className:""},render:a=>({components:{Button:r},setup(){return{args:a}},template:`<div style="display:flex; flex-wrap: wrap; gap: 16px">
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
        `}),parameters:{controls:{exclude:["prefix","suffix"]},docs:{source:{transform:(a,e)=>{const{args:s}=e;return["<Button",`  variant="${s.variant}"`,`  themeColor="${s.themeColor}"`,`  size="${s.size}"`,`  width="${s.width}"`,'  prefix="folder"','  suffix=""',`  :isDisable="${s.isDisable}"`,`  className="${s.className}"`,">",`  ${s.default}`,"</Button>","<Button",`  variant="${s.variant}"`,`  themeColor="${s.themeColor}"`,`  size="${s.size}"`,`  width="${s.width}"`,'  prefix=""','  suffix="folder"',`  :isDisable="${s.isDisable}"`,`  className="${s.className}"`,">",`  ${s.default}`,"</Button>"].join(`
`).trim()}}}}},n={name:"按鈕樣式",args:{default:"按鈕",variant:"contained",themeColor:"primary",size:"medium",width:"fit",prefix:"folder",suffix:"None",isDisable:!1,className:""},render:a=>({components:{Button:r},setup(){return{args:a}},template:`<div style="display:flex; flex-wrap: wrap; gap: 16px">
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
        `}),parameters:{controls:{exclude:["variant"]},docs:{source:{transform:(a,e)=>{const{args:s}=e;return["<Button",'  variant="contained"',`  themeColor="${s.themeColor}"`,`  size="${s.size}"`,`  width="${s.width}"`,`  prefix="${s.prefix}"`,`  suffix="${s.suffix}"`,`  :isDisable="${s.isDisable}"`,`  className="${s.className}"`,">",`  ${s.default}`,"</Button>","<Button",'  variant="outlined"',`  themeColor="${s.themeColor}"`,`  size="${s.size}"`,`  width="${s.width}"`,`  prefix="${s.prefix}"`,`  suffix="${s.suffix}"`,`  :isDisable="${s.isDisable}"`,` className="${s.className}"`,">",`  ${s.default}`,"</Button>","<Button",'  variant="text"',`  themeColor="${s.themeColor}"`,`  size="${s.size}"`,`  width="${s.width}"`,`  prefix="${s.prefix}"`,`  suffix="${s.suffix}"`,`  :isDisable="${s.isDisable}"`,`  className="${s.className}"`,">",`  ${s.default}`,"</Button>"].join(`
`).trim()}}}}},o={name:"多個按鈕",args:{default:"按鈕",variant:"contained",themeColor:"primary",size:"medium",width:"fit",prefix:"folder",suffix:"None",isDisable:!1,className:""},render:a=>({components:{Button:r},setup(){return{args:a}},template:`<div style="display:flex; flex-wrap: wrap; gap: 16px">
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
        `}),parameters:{controls:{exclude:["themeColor"]},docs:{source:{transform:(a,e)=>{const{args:s}=e;return["<Button",`  variant="${s.variant}"`,'  themeColor="primary"',`  size="${s.size}"`,`  width="${s.width}"`,`  prefix="${s.prefix}"`,`  suffix="${s.suffix}"`,`  :isDisable="${s.isDisable}"`,`  className="${s.className}"`,">",`  ${s.default}`,"</Button>","<Button",`  variant="${s.variant}"`,'  themeColor="secondary"',`  size="${s.size}"`,`  width="${s.width}"`,`  prefix="${s.prefix}"`,`  suffix="${s.suffix}"`,`  :isDisable="${s.isDisable}"`,`  className="${s.className}"`,">",`  ${s.default}`,"</Button>","<Button",`  variant="${s.variant}"`,'  themeColor="tertiary"',`  size="${s.size}"`,`  width="${s.width}"`,`  prefix="${s.prefix}"`,`  suffix="${s.suffix}"`,`  :isDisable="${s.isDisable}"`,`  className="${s.className}"`,">",`  ${s.default}`,"</Button>","<Button",`  variant="${s.variant}"`,'  themeColor="success"',`  size="${s.size}"`,`  width="${s.width}"`,`  prefix="${s.prefix}"`,`  suffix="${s.suffix}"`,`  :isDisable="${s.isDisable}"`,`  className="${s.className}"`,">",`  ${s.default}`,"</Button>","<Button",`  variant="${s.variant}"`,'  themeColor="warning"',`  size="${s.size}"`,`  width="${s.width}"`,`  prefix="${s.prefix}"`,`  suffix="${s.suffix}"`,`  :isDisable="${s.isDisable}"`,`  className="${s.className}"`,">",`  ${s.default}`,"</Button>","<Button",`  variant="${s.variant}"`,'  themeColor="error"',`  size="${s.size}"`,`  width="${s.width}"`,`  prefix="${s.prefix}"`,`  suffix="${s.suffix}"`,`  :isDisable="${s.isDisable}"`,`  className="${s.className}"`,">",`  ${s.default}`,"</Button>","<Button",`  variant="${s.variant}"`,'  themeColor="info"',`  size="${s.size}"`,`  width="${s.width}"`,`  prefix="${s.prefix}"`,`  suffix="${s.suffix}"`,`  :isDisable="${s.isDisable}"`,`  className="${s.className}"`,">",`  ${s.default}`,"</Button>"].join(`
`).trim()}}}}};var l,f,u;i.parameters={...i.parameters,docs:{...(l=i.parameters)==null?void 0:l.docs,source:{originalSource:`{
  name: '主要項目',
  args: {
    default: '按鈕',
    themeColor: 'primary',
    variant: 'contained',
    size: 'medium',
    width: 'fit',
    prefix: 'folder',
    suffix: 'None',
    isDisable: false,
    className: ''
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
}`,...(u=(f=i.parameters)==null?void 0:f.docs)==null?void 0:u.source}}};var g,m,d;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
  name: '附加元素',
  args: {
    default: '按鈕',
    variant: 'contained',
    themeColor: 'primary',
    size: 'medium',
    width: 'fit',
    isDisable: false,
    className: ''
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
    },
    docs: {
      source: {
        transform: (src, storyContext) => {
          const {
            args
          } = storyContext;
          return ['<Button', \`  variant="\${args.variant}"\`, \`  themeColor="\${args.themeColor}"\`, \`  size="\${args.size}"\`, \`  width="\${args.width}"\`, \`  prefix="folder"\`, \`  suffix=""\`, \`  :isDisable="\${args.isDisable}"\`, \`  className="\${args.className}"\`, '>', \`  \${args.default}\`, '</Button>', '<Button', \`  variant="\${args.variant}"\`, \`  themeColor="\${args.themeColor}"\`, \`  size="\${args.size}"\`, \`  width="\${args.width}"\`, \`  prefix=""\`, \`  suffix="folder"\`, \`  :isDisable="\${args.isDisable}"\`, \`  className="\${args.className}"\`, '>', \`  \${args.default}\`, '</Button>'].join('\\n').trim();
        }
      }
    }
  }
}`,...(d=(m=t.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};var c,x,p;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
  name: '按鈕樣式',
  args: {
    default: '按鈕',
    variant: 'contained',
    themeColor: 'primary',
    size: 'medium',
    width: 'fit',
    prefix: 'folder',
    suffix: 'None',
    isDisable: false,
    className: ''
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
    },
    docs: {
      source: {
        transform: (src, storyContext) => {
          const {
            args
          } = storyContext;
          return ['<Button', \`  variant="contained"\`, \`  themeColor="\${args.themeColor}"\`, \`  size="\${args.size}"\`, \`  width="\${args.width}"\`, \`  prefix="\${args.prefix}"\`, \`  suffix="\${args.suffix}"\`, \`  :isDisable="\${args.isDisable}"\`, \`  className="\${args.className}"\`, '>', \`  \${args.default}\`, '</Button>', '<Button', \`  variant="outlined"\`, \`  themeColor="\${args.themeColor}"\`, \`  size="\${args.size}"\`, \`  width="\${args.width}"\`, \`  prefix="\${args.prefix}"\`, \`  suffix="\${args.suffix}"\`, \`  :isDisable="\${args.isDisable}"\`, \` className="\${args.className}"\`, '>', \`  \${args.default}\`, '</Button>', '<Button', \`  variant="text"\`, \`  themeColor="\${args.themeColor}"\`, \`  size="\${args.size}"\`, \`  width="\${args.width}"\`, \`  prefix="\${args.prefix}"\`, \`  suffix="\${args.suffix}"\`, \`  :isDisable="\${args.isDisable}"\`, \`  className="\${args.className}"\`, '>', \`  \${args.default}\`, '</Button>'].join('\\n').trim();
        }
      }
    }
  }
}`,...(p=(x=n.parameters)==null?void 0:x.docs)==null?void 0:p.source}}};var $,h,w;o.parameters={...o.parameters,docs:{...($=o.parameters)==null?void 0:$.docs,source:{originalSource:`{
  name: '多個按鈕',
  args: {
    default: '按鈕',
    variant: 'contained',
    themeColor: 'primary',
    size: 'medium',
    width: 'fit',
    prefix: 'folder',
    suffix: 'None',
    isDisable: false,
    className: ''
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
    },
    docs: {
      source: {
        transform: (src, storyContext) => {
          const {
            args
          } = storyContext;
          return ['<Button', \`  variant="\${args.variant}"\`, \`  themeColor="primary"\`, \`  size="\${args.size}"\`, \`  width="\${args.width}"\`, \`  prefix="\${args.prefix}"\`, \`  suffix="\${args.suffix}"\`, \`  :isDisable="\${args.isDisable}"\`, \`  className="\${args.className}"\`, '>', \`  \${args.default}\`, '</Button>', '<Button', \`  variant="\${args.variant}"\`, \`  themeColor="secondary"\`, \`  size="\${args.size}"\`, \`  width="\${args.width}"\`, \`  prefix="\${args.prefix}"\`, \`  suffix="\${args.suffix}"\`, \`  :isDisable="\${args.isDisable}"\`, \`  className="\${args.className}"\`, '>', \`  \${args.default}\`, '</Button>', '<Button', \`  variant="\${args.variant}"\`, \`  themeColor="tertiary"\`, \`  size="\${args.size}"\`, \`  width="\${args.width}"\`, \`  prefix="\${args.prefix}"\`, \`  suffix="\${args.suffix}"\`, \`  :isDisable="\${args.isDisable}"\`, \`  className="\${args.className}"\`, '>', \`  \${args.default}\`, '</Button>', '<Button', \`  variant="\${args.variant}"\`, \`  themeColor="success"\`, \`  size="\${args.size}"\`, \`  width="\${args.width}"\`, \`  prefix="\${args.prefix}"\`, \`  suffix="\${args.suffix}"\`, \`  :isDisable="\${args.isDisable}"\`, \`  className="\${args.className}"\`, '>', \`  \${args.default}\`, '</Button>', '<Button', \`  variant="\${args.variant}"\`, \`  themeColor="warning"\`, \`  size="\${args.size}"\`, \`  width="\${args.width}"\`, \`  prefix="\${args.prefix}"\`, \`  suffix="\${args.suffix}"\`, \`  :isDisable="\${args.isDisable}"\`, \`  className="\${args.className}"\`, '>', \`  \${args.default}\`, '</Button>', '<Button', \`  variant="\${args.variant}"\`, \`  themeColor="error"\`, \`  size="\${args.size}"\`, \`  width="\${args.width}"\`, \`  prefix="\${args.prefix}"\`, \`  suffix="\${args.suffix}"\`, \`  :isDisable="\${args.isDisable}"\`, \`  className="\${args.className}"\`, '>', \`  \${args.default}\`, '</Button>', '<Button', \`  variant="\${args.variant}"\`, \`  themeColor="info"\`, \`  size="\${args.size}"\`, \`  width="\${args.width}"\`, \`  prefix="\${args.prefix}"\`, \`  suffix="\${args.suffix}"\`, \`  :isDisable="\${args.isDisable}"\`, \`  className="\${args.className}"\`, '>', \`  \${args.default}\`, '</Button>'].join('\\n').trim();
        }
      }
    }
  }
}`,...(w=(h=o.parameters)==null?void 0:h.docs)==null?void 0:w.source}}};const y=["DefaultButtonStory","ButtonPrefixSuffixStory","ButtonTypeStory","ButtonColorStory"];export{o as ButtonColorStory,t as ButtonPrefixSuffixStory,n as ButtonTypeStory,i as DefaultButtonStory,y as __namedExportsOrder,C as default};

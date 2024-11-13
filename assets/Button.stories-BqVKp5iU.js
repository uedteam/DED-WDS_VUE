import{_ as r}from"./Button-DSMmQuyu.js";import"./vue.esm-bundler-C7FxdvdM.js";import"./index-Bb4qSo10.js";import"./Icon-B_G9slvJ.js";import"./iframe-Bn-91BlT.js";import"../sb-preview/runtime.js";const C={title:"Design System/Button",component:r,tags:["autodocs"],argTypes:{themeColor:{description:"主題顏色",control:{type:"select"},options:["primary","secondary","tertiary","success","warning","error","info"],table:{type:{summary:"primary | secondary | tertiary | success | warning | error | info"}}},variant:{description:"按鈕樣式",required:!0,control:{type:"select"},options:["contained","outlined","text"]},prefix:{description:"前置元素",control:{type:"select",labels:{"":"None",home:"home",folder:"folder",academy:"academy","arrow-forward":"arrow-forward","finger-print":"finger-print"}},options:["","home","folder","academy","arrow-forward","finger-print"]},suffix:{description:"後置元素",control:{type:"select",labels:{"":"None",home:"home",folder:"folder",academy:"academy","arrow-forward":"arrow-forward","finger-print":"finger-print"}},options:["","home","folder","academy","arrow-forward","finger-print"]},size:{description:"按鈕尺寸",control:{type:"select"},options:["small","medium","large"]},width:{description:"按鈕寬度",control:{type:"select"},options:["fit","full"]},isDisable:{description:"是否禁用",control:{type:"boolean"}},className:{description:"客製化樣式",control:{type:"text"}},default:{description:"按鈕內容",control:{type:"text"}}},parameters:{docs:{title:"按鈕",description:{component:"按鈕組件的呈現及說明。"}}}},i={name:"主要項目",args:{themeColor:"primary",variant:"contained",prefix:"folder",suffix:"",size:"medium",width:"fit",isDisable:!1,className:"",default:"按鈕"},render:a=>({components:{Button:r},setup(){return{args:a}},template:`
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
            `}),parameters:{controls:{},docs:{source:{transform:(a,e)=>{const{args:s}=e;return["<Button",`  themeColor="${s.themeColor}"`,`  variant="${s.variant}"`,`  prefix="${s.prefix}"`,`  suffix="${s.suffix}"`,`  size="${s.size}"`,`  width="${s.width}"`,`  isDisable="${s.isDisable}"`,`  className="${s.className}"`,">",`  ${s.default}`,"</Button>"].join(`
`).trim()}}}}},t={name:"附加元素",args:{themeColor:"primary",variant:"contained",size:"medium",width:"fit",isDisable:!1,className:"",default:"按鈕"},render:a=>({components:{Button:r},setup(){return{args:a}},template:`<div style="display:flex; flex-wrap: wrap; gap: 16px">
            <Button
                :themeColor="args.themeColor"
                :variant="args.variant"
                prefix="folder"
                suffix=""
                :size="args.size"
                :width="args.width"
                :isDisable="args.isDisable"
                :className="args.className"
            >
                {{ args.default }}
            </Button>
            <Button
                :themeColor="args.themeColor"
                :variant="args.variant"
                prefix=""
                suffix="folder"
                :size="args.size"
                :width="args.width"
                :isDisable="args.isDisable"
                :className="args.className"
            >
                {{ args.default }}
            </Button>
        </div>
        `}),parameters:{controls:{exclude:["prefix","suffix"]},docs:{source:{transform:(a,e)=>{const{args:s}=e;return["<Button",`  themeColor="${s.themeColor}"`,`  variant="${s.variant}"`,'  prefix="folder"','  suffix=""',`  size="${s.size}"`,`  width="${s.width}"`,`  :isDisable="${s.isDisable}"`,`  className="${s.className}"`,">",`  ${s.default}`,"</Button>","<Button",`  themeColor="${s.themeColor}"`,`  variant="${s.variant}"`,'  prefix=""','  suffix="folder"',`  size="${s.size}"`,`  width="${s.width}"`,`  :isDisable="${s.isDisable}"`,`  className="${s.className}"`,">",`  ${s.default}`,"</Button>"].join(`
`).trim()}}}}},n={name:"按鈕樣式",args:{themeColor:"primary",variant:"contained",prefix:"folder",suffix:"",size:"medium",width:"fit",isDisable:!1,className:"",default:"按鈕"},render:a=>({components:{Button:r},setup(){return{args:a}},template:`<div style="display:flex; flex-wrap: wrap; gap: 16px">
            <Button
                :themeColor="args.themeColor"
                variant="contained"
                :prefix="args.prefix"
                :suffix="args.suffix"
                :size="args.size"
                :width="args.width"
                :isDisable="args.isDisable"
                :className="args.className"
            >
                {{ args.default }}
            </Button>
            <Button
                :themeColor="args.themeColor"
                variant="outlined"
                :prefix="args.prefix"
                :suffix="args.suffix"
                :size="args.size"
                :width="args.width"
                :isDisable="args.isDisable"
                :className="args.className"
            >
                {{ args.default }}
            </Button>
            <Button
                :themeColor="args.themeColor"
                variant="text"
                :prefix="args.prefix"
                :suffix="args.suffix"
                :size="args.size"
                :width="args.width"
                :isDisable="args.isDisable"
                :className="args.className"
            >
                {{ args.default }}
            </Button>
        </div>
        `}),parameters:{controls:{exclude:["variant"]},docs:{source:{transform:(a,e)=>{const{args:s}=e;return["<Button",`  themeColor="${s.themeColor}"`,'  variant="contained"',`  prefix="${s.prefix}"`,`  suffix="${s.suffix}"`,`  size="${s.size}"`,`  width="${s.width}"`,`  :isDisable="${s.isDisable}"`,`  className="${s.className}"`,">",`  ${s.default}`,"</Button>","<Button",`  themeColor="${s.themeColor}"`,'  variant="outlined"',`  prefix="${s.prefix}"`,`  suffix="${s.suffix}"`,`  size="${s.size}"`,`  width="${s.width}"`,`  :isDisable="${s.isDisable}"`,` className="${s.className}"`,">",`  ${s.default}`,"</Button>","<Button",`  themeColor="${s.themeColor}"`,'  variant="text"',`  prefix="${s.prefix}"`,`  suffix="${s.suffix}"`,`  size="${s.size}"`,`  width="${s.width}"`,`  :isDisable="${s.isDisable}"`,`  className="${s.className}"`,">",`  ${s.default}`,"</Button>"].join(`
`).trim()}}}}},o={name:"多個按鈕",args:{themeColor:"primary",variant:"contained",prefix:"folder",suffix:"",size:"medium",width:"fit",isDisable:!1,className:"",default:"按鈕"},render:a=>({components:{Button:r},setup(){return{args:a}},template:`<div style="display:flex; flex-wrap: wrap; gap: 16px">
            <Button
                themeColor="primary"
                :variant="args.variant"
                :prefix="args.prefix"
                :suffix="args.suffix"
                :size="args.size"
                :width="args.width"
                :isDisable="args.isDisable"
                :className="args.className"
            >
                {{ args.default }}
            </Button>
            <Button
                themeColor="secondary"
                :variant="args.variant"
                :prefix="args.prefix"
                :suffix="args.suffix"
                :size="args.size"
                :width="args.width"
                :isDisable="args.isDisable"
                :className="args.className"
            >
                {{ args.default }}
            </Button>
            <Button
                themeColor="tertiary"
                :variant="args.variant"
                :prefix="args.prefix"
                :suffix="args.suffix"
                :size="args.size"
                :width="args.width"
                :isDisable="args.isDisable"
                :className="args.className"
            >
                {{ args.default }}
            </Button>
            <Button
                themeColor="success"
                :variant="args.variant"
                :prefix="args.prefix"
                :suffix="args.suffix"
                :size="args.size"
                :width="args.width"
                :isDisable="args.isDisable"
                :className="args.className"
            >
                {{ args.default }}
            </Button>
            <Button
                themeColor="warning"
                :variant="args.variant"
                :prefix="args.prefix"
                :suffix="args.suffix"
                :size="args.size"
                :width="args.width"
                :isDisable="args.isDisable"
                :className="args.className"
            >
                {{ args.default }}
            </Button>
            <Button
                themeColor="error"
                :variant="args.variant"
                :prefix="args.prefix"
                :suffix="args.suffix"
                :size="args.size"
                :width="args.width"
                :isDisable="args.isDisable"
                :className="args.className"
            >
                {{ args.default }}
            </Button>
            <Button
                themeColor="info"
                :variant="args.variant"
                :prefix="args.prefix"
                :suffix="args.suffix"
                :size="args.size"
                :width="args.width"
                :isDisable="args.isDisable"
                :className="args.className"
            >
                {{ args.default }}
            </Button>
        </div>
        `}),parameters:{controls:{exclude:["themeColor"]},docs:{source:{transform:(a,e)=>{const{args:s}=e;return["<Button",'  themeColor="primary"',`  variant="${s.variant}"`,`  prefix="${s.prefix}"`,`  suffix="${s.suffix}"`,`  size="${s.size}"`,`  width="${s.width}"`,`  :isDisable="${s.isDisable}"`,`  className="${s.className}"`,">",`  ${s.default}`,"</Button>","<Button",'  themeColor="secondary"',`  variant="${s.variant}"`,`  prefix="${s.prefix}"`,`  suffix="${s.suffix}"`,`  size="${s.size}"`,`  width="${s.width}"`,`  :isDisable="${s.isDisable}"`,`  className="${s.className}"`,">",`  ${s.default}`,"</Button>","<Button",'  themeColor="tertiary"',`  variant="${s.variant}"`,`  prefix="${s.prefix}"`,`  suffix="${s.suffix}"`,`  size="${s.size}"`,`  width="${s.width}"`,`  :isDisable="${s.isDisable}"`,`  className="${s.className}"`,">",`  ${s.default}`,"</Button>","<Button",'  themeColor="success"',`  variant="${s.variant}"`,`  prefix="${s.prefix}"`,`  suffix="${s.suffix}"`,`  size="${s.size}"`,`  width="${s.width}"`,`  :isDisable="${s.isDisable}"`,`  className="${s.className}"`,">",`  ${s.default}`,"</Button>","<Button",'  themeColor="warning"',`  variant="${s.variant}"`,`  prefix="${s.prefix}"`,`  suffix="${s.suffix}"`,`  size="${s.size}"`,`  width="${s.width}"`,`  :isDisable="${s.isDisable}"`,`  className="${s.className}"`,">",`  ${s.default}`,"</Button>","<Button",'  themeColor="error"',`  variant="${s.variant}"`,`  prefix="${s.prefix}"`,`  suffix="${s.suffix}"`,`  size="${s.size}"`,`  width="${s.width}"`,`  :isDisable="${s.isDisable}"`,`  className="${s.className}"`,">",`  ${s.default}`,"</Button>","<Button",'  themeColor="info"',`  variant="${s.variant}"`,`  prefix="${s.prefix}"`,`  suffix="${s.suffix}"`,`  size="${s.size}"`,`  width="${s.width}"`,`  :isDisable="${s.isDisable}"`,`  className="${s.className}"`,">",`  ${s.default}`,"</Button>"].join(`
`).trim()}}}}};var l,f,u;i.parameters={...i.parameters,docs:{...(l=i.parameters)==null?void 0:l.docs,source:{originalSource:`{
  name: '主要項目',
  args: {
    themeColor: 'primary',
    variant: 'contained',
    prefix: 'folder',
    suffix: '',
    size: 'medium',
    width: 'fit',
    isDisable: false,
    className: "",
    default: '按鈕'
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
          return ['<Button', \`  themeColor="\${args.themeColor}"\`, \`  variant="\${args.variant}"\`, \`  prefix="\${args.prefix}"\`, \`  suffix="\${args.suffix}"\`, \`  size="\${args.size}"\`, \`  width="\${args.width}"\`, \`  isDisable="\${args.isDisable}"\`, \`  className="\${args.className}"\`, '>', \`  \${args.default}\`, '</Button>'].join('\\n').trim();
        }
      }
    }
  }
}`,...(u=(f=i.parameters)==null?void 0:f.docs)==null?void 0:u.source}}};var g,m,d;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
  name: '附加元素',
  args: {
    themeColor: 'primary',
    variant: 'contained',
    size: 'medium',
    width: 'fit',
    isDisable: false,
    className: "",
    default: '按鈕'
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
                :themeColor="args.themeColor"
                :variant="args.variant"
                prefix="folder"
                suffix=""
                :size="args.size"
                :width="args.width"
                :isDisable="args.isDisable"
                :className="args.className"
            >
                {{ args.default }}
            </Button>
            <Button
                :themeColor="args.themeColor"
                :variant="args.variant"
                prefix=""
                suffix="folder"
                :size="args.size"
                :width="args.width"
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
          return ['<Button', \`  themeColor="\${args.themeColor}"\`, \`  variant="\${args.variant}"\`, \`  prefix="folder"\`, \`  suffix=""\`, \`  size="\${args.size}"\`, \`  width="\${args.width}"\`, \`  :isDisable="\${args.isDisable}"\`, \`  className="\${args.className}"\`, '>', \`  \${args.default}\`, '</Button>', '<Button', \`  themeColor="\${args.themeColor}"\`, \`  variant="\${args.variant}"\`, \`  prefix=""\`, \`  suffix="folder"\`, \`  size="\${args.size}"\`, \`  width="\${args.width}"\`, \`  :isDisable="\${args.isDisable}"\`, \`  className="\${args.className}"\`, '>', \`  \${args.default}\`, '</Button>'].join('\\n').trim();
        }
      }
    }
  }
}`,...(d=(m=t.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};var c,x,p;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
  name: '按鈕樣式',
  args: {
    themeColor: 'primary',
    variant: 'contained',
    prefix: 'folder',
    suffix: '',
    size: 'medium',
    width: 'fit',
    isDisable: false,
    className: "",
    default: '按鈕'
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
                :themeColor="args.themeColor"
                variant="contained"
                :prefix="args.prefix"
                :suffix="args.suffix"
                :size="args.size"
                :width="args.width"
                :isDisable="args.isDisable"
                :className="args.className"
            >
                {{ args.default }}
            </Button>
            <Button
                :themeColor="args.themeColor"
                variant="outlined"
                :prefix="args.prefix"
                :suffix="args.suffix"
                :size="args.size"
                :width="args.width"
                :isDisable="args.isDisable"
                :className="args.className"
            >
                {{ args.default }}
            </Button>
            <Button
                :themeColor="args.themeColor"
                variant="text"
                :prefix="args.prefix"
                :suffix="args.suffix"
                :size="args.size"
                :width="args.width"
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
          return ['<Button', \`  themeColor="\${args.themeColor}"\`, \`  variant="contained"\`, \`  prefix="\${args.prefix}"\`, \`  suffix="\${args.suffix}"\`, \`  size="\${args.size}"\`, \`  width="\${args.width}"\`, \`  :isDisable="\${args.isDisable}"\`, \`  className="\${args.className}"\`, '>', \`  \${args.default}\`, '</Button>', '<Button', \`  themeColor="\${args.themeColor}"\`, \`  variant="outlined"\`, \`  prefix="\${args.prefix}"\`, \`  suffix="\${args.suffix}"\`, \`  size="\${args.size}"\`, \`  width="\${args.width}"\`, \`  :isDisable="\${args.isDisable}"\`, \` className="\${args.className}"\`, '>', \`  \${args.default}\`, '</Button>', '<Button', \`  themeColor="\${args.themeColor}"\`, \`  variant="text"\`, \`  prefix="\${args.prefix}"\`, \`  suffix="\${args.suffix}"\`, \`  size="\${args.size}"\`, \`  width="\${args.width}"\`, \`  :isDisable="\${args.isDisable}"\`, \`  className="\${args.className}"\`, '>', \`  \${args.default}\`, '</Button>'].join('\\n').trim();
        }
      }
    }
  }
}`,...(p=(x=n.parameters)==null?void 0:x.docs)==null?void 0:p.source}}};var h,$,w;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
  name: '多個按鈕',
  args: {
    themeColor: 'primary',
    variant: 'contained',
    prefix: 'folder',
    suffix: '',
    size: 'medium',
    width: 'fit',
    isDisable: false,
    className: "",
    default: '按鈕'
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
                themeColor="primary"
                :variant="args.variant"
                :prefix="args.prefix"
                :suffix="args.suffix"
                :size="args.size"
                :width="args.width"
                :isDisable="args.isDisable"
                :className="args.className"
            >
                {{ args.default }}
            </Button>
            <Button
                themeColor="secondary"
                :variant="args.variant"
                :prefix="args.prefix"
                :suffix="args.suffix"
                :size="args.size"
                :width="args.width"
                :isDisable="args.isDisable"
                :className="args.className"
            >
                {{ args.default }}
            </Button>
            <Button
                themeColor="tertiary"
                :variant="args.variant"
                :prefix="args.prefix"
                :suffix="args.suffix"
                :size="args.size"
                :width="args.width"
                :isDisable="args.isDisable"
                :className="args.className"
            >
                {{ args.default }}
            </Button>
            <Button
                themeColor="success"
                :variant="args.variant"
                :prefix="args.prefix"
                :suffix="args.suffix"
                :size="args.size"
                :width="args.width"
                :isDisable="args.isDisable"
                :className="args.className"
            >
                {{ args.default }}
            </Button>
            <Button
                themeColor="warning"
                :variant="args.variant"
                :prefix="args.prefix"
                :suffix="args.suffix"
                :size="args.size"
                :width="args.width"
                :isDisable="args.isDisable"
                :className="args.className"
            >
                {{ args.default }}
            </Button>
            <Button
                themeColor="error"
                :variant="args.variant"
                :prefix="args.prefix"
                :suffix="args.suffix"
                :size="args.size"
                :width="args.width"
                :isDisable="args.isDisable"
                :className="args.className"
            >
                {{ args.default }}
            </Button>
            <Button
                themeColor="info"
                :variant="args.variant"
                :prefix="args.prefix"
                :suffix="args.suffix"
                :size="args.size"
                :width="args.width"
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
          return ['<Button', \`  themeColor="primary"\`, \`  variant="\${args.variant}"\`, \`  prefix="\${args.prefix}"\`, \`  suffix="\${args.suffix}"\`, \`  size="\${args.size}"\`, \`  width="\${args.width}"\`, \`  :isDisable="\${args.isDisable}"\`, \`  className="\${args.className}"\`, '>', \`  \${args.default}\`, '</Button>', '<Button', \`  themeColor="secondary"\`, \`  variant="\${args.variant}"\`, \`  prefix="\${args.prefix}"\`, \`  suffix="\${args.suffix}"\`, \`  size="\${args.size}"\`, \`  width="\${args.width}"\`, \`  :isDisable="\${args.isDisable}"\`, \`  className="\${args.className}"\`, '>', \`  \${args.default}\`, '</Button>', '<Button', \`  themeColor="tertiary"\`, \`  variant="\${args.variant}"\`, \`  prefix="\${args.prefix}"\`, \`  suffix="\${args.suffix}"\`, \`  size="\${args.size}"\`, \`  width="\${args.width}"\`, \`  :isDisable="\${args.isDisable}"\`, \`  className="\${args.className}"\`, '>', \`  \${args.default}\`, '</Button>', '<Button', \`  themeColor="success"\`, \`  variant="\${args.variant}"\`, \`  prefix="\${args.prefix}"\`, \`  suffix="\${args.suffix}"\`, \`  size="\${args.size}"\`, \`  width="\${args.width}"\`, \`  :isDisable="\${args.isDisable}"\`, \`  className="\${args.className}"\`, '>', \`  \${args.default}\`, '</Button>', '<Button', \`  themeColor="warning"\`, \`  variant="\${args.variant}"\`, \`  prefix="\${args.prefix}"\`, \`  suffix="\${args.suffix}"\`, \`  size="\${args.size}"\`, \`  width="\${args.width}"\`, \`  :isDisable="\${args.isDisable}"\`, \`  className="\${args.className}"\`, '>', \`  \${args.default}\`, '</Button>', '<Button', \`  themeColor="error"\`, \`  variant="\${args.variant}"\`, \`  prefix="\${args.prefix}"\`, \`  suffix="\${args.suffix}"\`, \`  size="\${args.size}"\`, \`  width="\${args.width}"\`, \`  :isDisable="\${args.isDisable}"\`, \`  className="\${args.className}"\`, '>', \`  \${args.default}\`, '</Button>', '<Button', \`  themeColor="info"\`, \`  variant="\${args.variant}"\`, \`  prefix="\${args.prefix}"\`, \`  suffix="\${args.suffix}"\`, \`  size="\${args.size}"\`, \`  width="\${args.width}"\`, \`  :isDisable="\${args.isDisable}"\`, \`  className="\${args.className}"\`, '>', \`  \${args.default}\`, '</Button>'].join('\\n').trim();
        }
      }
    }
  }
}`,...(w=($=o.parameters)==null?void 0:$.docs)==null?void 0:w.source}}};const y=["DefaultButtonStory","ButtonPrefixSuffixStory","ButtonTypeStory","ButtonColorStory"];export{o as ButtonColorStory,t as ButtonPrefixSuffixStory,n as ButtonTypeStory,i as DefaultButtonStory,y as __namedExportsOrder,C as default};

import{_ as e}from"./Button-Ck9oqLH6.js";import"./vue.esm-bundler-C8tbd0VY.js";import"./Icon-D-NDJAD3.js";import"./iframe-CrLK0dA1.js";import"../sb-preview/runtime.js";const S={title:"Component/Button",component:e,tags:["autodocs"],argTypes:{themeColor:{description:"主題顏色",control:{type:"select"},options:["primary","secondary","neutral","info","success","warning","error"],table:{type:{summary:"primary | secondary | neutral | info | success | warning | error"}}},variant:{description:"按鈕樣式",required:!0,control:{type:"select"},options:["text","filled","ghost","soft"],table:{type:{summary:"text | filled | ghost | soft"}}},prefix:{description:"前置元素",control:{type:"select",labels:{"":"none",home:"home",folder:"folder",academy:"academy","arrow-forward":"arrow-forward","finger-print":"finger-print"}},options:["","home","folder","academy","arrow-forward","finger-print"]},suffix:{description:"後置元素",control:{type:"select",labels:{"":"none",home:"home",folder:"folder",academy:"academy","arrow-forward":"arrow-forward","finger-print":"finger-print"}},options:["","home","folder","academy","arrow-forward","finger-print"]},size:{description:"按鈕尺寸",control:{type:"select"},options:["small","medium","large"],table:{type:{summary:"small | medium | large"}}},width:{description:"按鈕寬度",control:{type:"select"},options:["fluid","fit"],table:{type:{summary:"fluid | fit"}}},borderWidth:{description:"按鈕邊框寬度",control:{type:"select"},options:["none","1px","2px","3px","4px","5px"],table:{type:{summary:"none | 1px | 2px | 3px | 4px | 5px"}}},radius:{description:"按鈕圓角大小",control:{type:"select"},options:["none","2px","4px","8px","12px","16px","32px","full"],table:{type:{summary:"none | 2px | 4px | 8px | 12px | 16px | 32px |full"}}},isDisabled:{description:"是否禁用",control:{type:"boolean"}},className:{description:"客製化樣式",control:{type:"text"}},default:{description:"按鈕內容",control:{type:"text"},table:{type:{summary:"Vue Component | HTML"}}}},parameters:{docs:{title:"按鈕",description:{component:"按鈕組件的呈現及說明。"}}}},i={name:"預設項目",args:{themeColor:"primary",variant:"filled",prefix:"",suffix:"",size:"medium",width:"fit",borderWidth:"1px",radius:"4px",isDisabled:!1,className:"",default:"Button"},render:r=>({components:{Button:e},setup(){return{args:r}},template:`
            <Button
                :themeColor="args.themeColor"
                :variant="args.variant"
                :prefix="args.prefix"
                :suffix="args.suffix"
                :size="args.size"
                :width="args.width"
                :borderWidth="args.borderWidth"
                :radius="args.radius"
                :isDisabled="args.isDisabled"
                :className="args.className"
            >
                {{ args.default }}
            </Button>
            `}),parameters:{controls:{},docs:{source:{transform:(r,a)=>{const{args:s}=a;return["<Button",`  themeColor="${s.themeColor}"`,`  variant="${s.variant}"`,`  prefix="${s.prefix}"`,`  suffix="${s.suffix}"`,`  size="${s.size}"`,`  width="${s.width}"`,`  borderWidth="${s.borderWidth}"`,`  radius="${s.radius}"`,`  :isDisabled="${s.isDisabled}"`,`  className="${s.className}"`,">",`  ${s.default}`,"</Button>"].join(`
`).trim()}}}}},t={name:"附加元素",args:{themeColor:"primary",variant:"ghost",prefix:"",suffix:"",size:"medium",width:"fit",borderWidth:"1px",radius:"4px",isDisabled:!1,className:"",default:"Button"},render:r=>({components:{Button:e},setup(){return{args:r}},template:`<div style="display:flex; flex-wrap: wrap; gap: 16px">
            <Button
                :themeColor="args.themeColor"
                :variant="args.variant"
                prefix="folder"
                suffix=""
                :size="args.size"
                :width="args.width"
                :borderWidth="args.borderWidth"
                :radius="args.radius"
                :isDisabled="args.isDisabled"
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
                :borderWidth="args.borderWidth"
                :radius="args.radius"
                :isDisabled="args.isDisabled"
                :className="args.className"
            >
                {{ args.default }}
            </Button>
        </div>
        `}),parameters:{controls:{exclude:["prefix","suffix"]},docs:{source:{transform:(r,a)=>{const{args:s}=a;return["<Button",`  :themeColor="${s.themeColor}"`,`  :variant="${s.variant}"`,'  prefix="folder"','  suffix=""',`  :size="${s.size}"`,`  :width="${s.width}"`,`  :borderWidth="${s.borderWidth}"`,`  :radius="${s.radius}"`,`  :isDisabled="${s.isDisabled}"`,`  :className="${s.className}"`,">",`  ${s.default}`,"</Button>","<Button",`  :themeColor="${s.themeColor}"`,`  :variant="${s.variant}"`,'  prefix=""','  suffix="folder"',`  :size="${s.size}"`,`  :width="${s.width}"`,`  :borderWidth="${s.borderWidth}"`,`  :radius="${s.radius}"`,`  :isDisabled="${s.isDisabled}"`,`  :className="${s.className}"`,">",`  ${s.default}`,"</Button>"].join(`
`).trim()}}}}},n={name:"外觀樣式",args:{themeColor:"primary",variant:"filled",prefix:"",suffix:"",size:"medium",width:"fit",borderWidth:"1px",radius:"4px",isDisabled:!1,className:"",default:"Button"},render:r=>({components:{Button:e},setup(){return{args:r}},template:`<div style="display:flex; flex-wrap: wrap; gap: 16px">
            <Button
                :themeColor="args.themeColor"
                variant="filled"
                :prefix="args.prefix"
                :suffix="args.suffix"
                :size="args.size"
                :width="args.width"
                :borderWidth="args.borderWidth"
                :radius="args.radius"
                :isDisabled="args.isDisabled"
                :className="args.className"
            >
                {{ args.default }}
            </Button>
            <Button
                :themeColor="args.themeColor"
                variant="ghost"
                :prefix="args.prefix"
                :suffix="args.suffix"
                :size="args.size"
                :width="args.width"
                :borderWidth="args.borderWidth"
                :radius="args.radius"
                :isDisabled="args.isDisabled"
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
                :borderWidth="args.borderWidth"
                :radius="args.radius"
                :isDisabled="args.isDisabled"
                :className="args.className"
            >
                {{ args.default }}
            </Button>
            <Button
                :themeColor="args.themeColor"
                variant="soft"
                :prefix="args.prefix"
                :suffix="args.suffix"
                :size="args.size"
                :width="args.width"
                :borderWidth="args.borderWidth"
                :radius="args.radius"
                :isDisabled="args.isDisabled"
                :className="args.className"
            >
                {{ args.default }}
            </Button>
        </div>
        `}),parameters:{controls:{exclude:["variant"]},docs:{source:{transform:(r,a)=>{const{args:s}=a;return["<Button",`  :themeColor="${s.themeColor}"`,'  variant="filled"',`  :prefix="${s.prefix}"`,`  :suffix="${s.suffix}"`,`  :size="${s.size}"`,`  :width="${s.width}"`,`  :borderWidth="${s.borderWidth}"`,`  :radius="${s.radius}"`,`  :isDisabled="${s.isDisabled}"`,`  :className="${s.className}"`,">",`  ${s.default}`,"</Button>","<Button",`  :themeColor="${s.themeColor}"`,'  variant="ghost"',`  :prefix="${s.prefix}"`,`  :suffix="${s.suffix}"`,`  :size="${s.size}"`,`  :width="${s.width}"`,`  :borderWidth="${s.borderWidth}"`,`  :radius="${s.radius}"`,`  :isDisabled="${s.isDisabled}"`,`  :className="${s.className}"`,">",`  ${s.default}`,"</Button>","<Button",`  :themeColor="${s.themeColor}"`,'  variant="text"',`  :prefix="${s.prefix}"`,`  :suffix="${s.suffix}"`,`  :size="${s.size}"`,`  :width="${s.width}"`,`  :borderWidth="${s.borderWidth}"`,`  :radius="${s.radius}"`,`  :isDisabled="${s.isDisabled}"`,`  :className="${s.className}"`,">",`  ${s.default}`,"</Button>","<Button",`  :themeColor="${s.themeColor}"`,'  variant="soft"',`  :prefix="${s.prefix}"`,`  :suffix="${s.suffix}"`,`  :size="${s.size}"`,`  :width="${s.width}"`,`  :borderWidth="${s.borderWidth}"`,`  :radius="${s.radius}"`,`  :isDisabled="${s.isDisabled}"`,`  :className="${s.className}"`,">",`  ${s.default}`,"</Button>"].join(`
`).trim()}}}}},d={name:"主題色彩",args:{variant:"filled",prefix:"folder",suffix:"",size:"medium",width:"fit",borderWidth:"1px",radius:"4px",isDisabled:!1,className:"",default:"Button"},render:r=>({components:{Button:e},setup(){return{args:r}},template:`<div style="display:flex; flex-wrap: wrap; gap: 16px">
            <Button
                themeColor="primary"
                :variant="args.variant"
                :prefix="args.prefix"
                :suffix="args.suffix"
                :size="args.size"
                :width="args.width"
                :borderWidth="args.borderWidth"
                :radius="args.radius"
                :isDisabled="args.isDisabled"
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
                :borderWidth="args.borderWidth"
                :radius="args.radius"
                :isDisabled="args.isDisabled"
                :className="args.className"
            >
                {{ args.default }}
            </Button>
            <Button
                themeColor="neutral"
                :variant="args.variant"
                :prefix="args.prefix"
                :suffix="args.suffix"
                :size="args.size"
                :width="args.width"
                :borderWidth="args.borderWidth"
                :radius="args.radius"
                :isDisabled="args.isDisabled"
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
                :borderWidth="args.borderWidth"
                :radius="args.radius"
                :isDisabled="args.isDisabled"
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
                :borderWidth="args.borderWidth"
                :radius="args.radius"
                :isDisabled="args.isDisabled"
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
                :borderWidth="args.borderWidth"
                :radius="args.radius"
                :isDisabled="args.isDisabled"
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
                :borderWidth="args.borderWidth"
                :radius="args.radius"
                :isDisabled="args.isDisabled"
                :className="args.className"
            >
                {{ args.default }}
            </Button>
        </div>
        `}),parameters:{controls:{exclude:["themeColor"]},docs:{source:{transform:(r,a)=>{const{args:s}=a;return["<Button",'  themeColor="primary"',`  :variant="${s.variant}"`,`  :prefix="${s.prefix}"`,`  :suffix="${s.suffix}"`,`  :size="${s.size}"`,`  :width="${s.width}"`,`  :borderWidth="${s.borderWidth}"`,`  :radius="${s.radius}"`,`  :isDisabled="${s.isDisabled}"`,`  :className="${s.className}"`,">",`  ${s.default}`,"</Button>","<Button",'  themeColor="secondary"',`  :variant="${s.variant}"`,`  :prefix="${s.prefix}"`,`  :suffix="${s.suffix}"`,`  :size="${s.size}"`,`  :width="${s.width}"`,`  :borderWidth="${s.borderWidth}"`,`  :radius="${s.radius}"`,`  :isDisabled="${s.isDisabled}"`,`  :className="${s.className}"`,">",`  ${s.default}`,"</Button>","<Button",'  themeColor="neutral"',`  :variant="${s.variant}"`,`  :prefix="${s.prefix}"`,`  :suffix="${s.suffix}"`,`  :size="${s.size}"`,`  :width="${s.width}"`,`  :borderWidth="${s.borderWidth}"`,`  :radius="${s.radius}"`,`  :isDisabled="${s.isDisabled}"`,`  :className="${s.className}"`,">",`  ${s.default}`,"</Button>","<Button",'  themeColor="info"',`  :variant="${s.variant}"`,`  :prefix="${s.prefix}"`,`  :suffix="${s.suffix}"`,`  :size="${s.size}"`,`  :width="${s.width}"`,`  :borderWidth="${s.borderWidth}"`,`  :radius="${s.radius}"`,`  :isDisabled="${s.isDisabled}"`,`  :className="${s.className}"`,">",`  ${s.default}`,"</Button>","<Button",'  themeColor="success"',`  :variant="${s.variant}"`,`  :prefix="${s.prefix}"`,`  :suffix="${s.suffix}"`,`  :size="${s.size}"`,`  :width="${s.width}"`,`  :borderWidth="${s.borderWidth}"`,`  :radius="${s.radius}"`,`  :isDisabled="${s.isDisabled}"`,`  :className="${s.className}"`,">",`  ${s.default}`,"</Button>","<Button",'  themeColor="warning"',`  :variant="${s.variant}"`,`  :prefix="${s.prefix}"`,`  :suffix="${s.suffix}"`,`  :size="${s.size}"`,`  :width="${s.width}"`,`  :borderWidth="${s.borderWidth}"`,`  :radius="${s.radius}"`,`  :isDisabled="${s.isDisabled}"`,`  :className="${s.className}"`,">",`  ${s.default}`,"</Button>","<Button",'  themeColor="error"',`  :variant="${s.variant}"`,`  :prefix="${s.prefix}"`,`  :suffix="${s.suffix}"`,`  :size="${s.size}"`,`  :width="${s.width}"`,`  :borderWidth="${s.borderWidth}"`,`  :radius="${s.radius}"`,`  :isDisabled="${s.isDisabled}"`,`  :className="${s.className}"`,">",`  ${s.default}`,"</Button>"].join(`
`).trim()}}}}},o={name:"尺寸",args:{themeColor:"primary",variant:"ghost",prefix:"",suffix:"",size:"",width:"fit",borderWidth:"1px",radius:"4px",isDisabled:!1,className:"",default:"Button"},render:r=>({components:{Button:e},setup(){return{args:r}},template:`
        <div style="display:flex; align-items: baseline; flex-wrap: wrap; gap: 16px">
            <Button
                :themeColor="args.themeColor"
                :variant="args.variant"
                prefix="folder"
                suffix=""
                size="large"
                :width="args.width"
                :borderWidth="args.borderWidth"
                :radius="args.radius"
                :isDisabled="args.isDisabled"
                :className="args.className"
            >
                {{ args.default }}
            </Button>
            <Button
                :themeColor="args.themeColor"
                :variant="args.variant"
                prefix="folder"
                suffix=""
                size="medium"
                :width="args.width"
                :borderWidth="args.borderWidth"
                :radius="args.radius"
                :isDisabled="args.isDisabled"
                :className="args.className"
            >
                {{ args.default }}
            </Button>
            <Button
                :themeColor="args.themeColor"
                :variant="args.variant"
                prefix="folder"
                suffix=""
                size="small"
                :width="args.width"
                :borderWidth="args.borderWidth"
                :radius="args.radius"
                :isDisabled="args.isDisabled"
                :className="args.className"
            >
                {{ args.default }}
            </Button>
        </div>
        `}),parameters:{controls:{exclude:["prefix","suffix"]},docs:{source:{transform:(r,a)=>{const{args:s}=a;return["<Button",`  :themeColor="${s.themeColor}"`,`  :variant="${s.variant}"`,'  prefix="folder"','  suffix=""','  size="large"',`  :width="${s.width}"`,`  :borderWidth="${s.borderWidth}"`,`  :radius="${s.radius}"`,`  :isDisabled="${s.isDisabled}"`,`  :className="${s.className}"`,">",`  ${s.default}`,"</Button>","<Button",`  :themeColor="${s.themeColor}"`,`  :variant="${s.variant}"`,'  prefix="folder"','  suffix=""','  size="medium"',`  :width="${s.width}"`,`  :borderWidth="${s.borderWidth}"`,`  :radius="${s.radius}"`,`  :isDisabled="${s.isDisabled}"`,`  :className="${s.className}"`,">",`  ${s.default}`,"</Button>","<Button",`  :themeColor="${s.themeColor}"`,`  :variant="${s.variant}"`,'  prefix="folder"','  suffix=""','  size="small"',`  :width="${s.width}"`,`  :borderWidth="${s.borderWidth}"`,`  :radius="${s.radius}"`,`  :isDisabled="${s.isDisabled}"`,`  :className="${s.className}"`,">",`  ${s.default}`,"</Button>"].join(`
`).trim()}}}}};var l,u,f;i.parameters={...i.parameters,docs:{...(l=i.parameters)==null?void 0:l.docs,source:{originalSource:`{
  name: '預設項目',
  args: {
    themeColor: 'primary',
    variant: 'filled',
    prefix: '',
    suffix: '',
    size: 'medium',
    width: 'fit',
    borderWidth: '1px',
    radius: '4px',
    isDisabled: false,
    className: "",
    default: 'Button'
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
                :themeColor="args.themeColor"
                :variant="args.variant"
                :prefix="args.prefix"
                :suffix="args.suffix"
                :size="args.size"
                :width="args.width"
                :borderWidth="args.borderWidth"
                :radius="args.radius"
                :isDisabled="args.isDisabled"
                :className="args.className"
            >
                {{ args.default }}
            </Button>
            \`
  }),
  // 控制 controls 中能控制的參數
  parameters: {
    controls: {
      // include: ['variant', 'content', 'themeColor', 'isDisabled', 'prefix'],
    },
    docs: {
      source: {
        transform: (src, storyContext) => {
          const {
            args
          } = storyContext;
          return [\`<Button\`, \`  themeColor="\${args.themeColor}"\`, \`  variant="\${args.variant}"\`, \`  prefix="\${args.prefix}"\`, \`  suffix="\${args.suffix}"\`, \`  size="\${args.size}"\`, \`  width="\${args.width}"\`, \`  borderWidth="\${args.borderWidth}"\`, \`  radius="\${args.radius}"\`, \`  :isDisabled="\${args.isDisabled}"\`, \`  className="\${args.className}"\`, \`>\`, \`  \${args.default}\`, \`</Button>\`].join("\\n").trim();
        }
      }
    }
  }
}`,...(f=(u=i.parameters)==null?void 0:u.docs)==null?void 0:f.source}}};var g,m,h;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
  name: '附加元素',
  args: {
    themeColor: 'primary',
    variant: 'ghost',
    prefix: '',
    suffix: '',
    size: 'medium',
    width: 'fit',
    borderWidth: '1px',
    radius: '4px',
    isDisabled: false,
    className: "",
    default: 'Button'
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
                :borderWidth="args.borderWidth"
                :radius="args.radius"
                :isDisabled="args.isDisabled"
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
                :borderWidth="args.borderWidth"
                :radius="args.radius"
                :isDisabled="args.isDisabled"
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
          return [\`<Button\`, \`  :themeColor="\${args.themeColor}"\`, \`  :variant="\${args.variant}"\`, \`  prefix="folder"\`, \`  suffix=""\`, \`  :size="\${args.size}"\`, \`  :width="\${args.width}"\`, \`  :borderWidth="\${args.borderWidth}"\`, \`  :radius="\${args.radius}"\`, \`  :isDisabled="\${args.isDisabled}"\`, \`  :className="\${args.className}"\`, \`>\`, \`  \${args.default}\`, \`</Button>\`, \`<Button\`, \`  :themeColor="\${args.themeColor}"\`, \`  :variant="\${args.variant}"\`, \`  prefix=""\`, \`  suffix="folder"\`, \`  :size="\${args.size}"\`, \`  :width="\${args.width}"\`, \`  :borderWidth="\${args.borderWidth}"\`, \`  :radius="\${args.radius}"\`, \`  :isDisabled="\${args.isDisabled}"\`, \`  :className="\${args.className}"\`, \`>\`, \`  \${args.default}\`, \`</Button>\`].join("\\n").trim();
        }
      }
    }
  }
}`,...(h=(m=t.parameters)==null?void 0:m.docs)==null?void 0:h.source}}};var x,p,$;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:'{\n  name: \'外觀樣式\',\n  args: {\n    themeColor: \'primary\',\n    variant: \'filled\',\n    prefix: \'\',\n    suffix: \'\',\n    size: \'medium\',\n    width: \'fit\',\n    borderWidth: \'1px\',\n    radius: \'4px\',\n    isDisabled: false,\n    className: "",\n    default: \'Button\'\n  },\n  render: args => ({\n    components: {\n      Button\n    },\n    setup() {\n      return {\n        args\n      };\n    },\n    template: `<div style="display:flex; flex-wrap: wrap; gap: 16px">\n            <Button\n                :themeColor="args.themeColor"\n                variant="filled"\n                :prefix="args.prefix"\n                :suffix="args.suffix"\n                :size="args.size"\n                :width="args.width"\n                :borderWidth="args.borderWidth"\n                :radius="args.radius"\n                :isDisabled="args.isDisabled"\n                :className="args.className"\n            >\n                {{ args.default }}\n            </Button>\n            <Button\n                :themeColor="args.themeColor"\n                variant="ghost"\n                :prefix="args.prefix"\n                :suffix="args.suffix"\n                :size="args.size"\n                :width="args.width"\n                :borderWidth="args.borderWidth"\n                :radius="args.radius"\n                :isDisabled="args.isDisabled"\n                :className="args.className"\n            >\n                {{ args.default }}\n            </Button>\n            <Button\n                :themeColor="args.themeColor"\n                variant="text"\n                :prefix="args.prefix"\n                :suffix="args.suffix"\n                :size="args.size"\n                :width="args.width"\n                :borderWidth="args.borderWidth"\n                :radius="args.radius"\n                :isDisabled="args.isDisabled"\n                :className="args.className"\n            >\n                {{ args.default }}\n            </Button>\n            <Button\n                :themeColor="args.themeColor"\n                variant="soft"\n                :prefix="args.prefix"\n                :suffix="args.suffix"\n                :size="args.size"\n                :width="args.width"\n                :borderWidth="args.borderWidth"\n                :radius="args.radius"\n                :isDisabled="args.isDisabled"\n                :className="args.className"\n            >\n                {{ args.default }}\n            </Button>\n        </div>\n        `\n  }),\n  // 控制 controls 中能控制的參數\n  parameters: {\n    controls: {\n      exclude: [\'variant\']\n    },\n    docs: {\n      source: {\n        transform: (src, storyContext) => {\n          const {\n            args\n          } = storyContext;\n          return [`<Button`, `  :themeColor="${args.themeColor}"`, `  variant="filled"`, `  :prefix="${args.prefix}"`, `  :suffix="${args.suffix}"`, `  :size="${args.size}"`, `  :width="${args.width}"`, `  :borderWidth="${args.borderWidth}"`, `  :radius="${args.radius}"`, `  :isDisabled="${args.isDisabled}"`, `  :className="${args.className}"`, `>`, `  ${args.default}`, `</Button>`, `<Button`, `  :themeColor="${args.themeColor}"`, `  variant="ghost"`, `  :prefix="${args.prefix}"`, `  :suffix="${args.suffix}"`, `  :size="${args.size}"`, `  :width="${args.width}"`, `  :borderWidth="${args.borderWidth}"`, `  :radius="${args.radius}"`, `  :isDisabled="${args.isDisabled}"`, `  :className="${args.className}"`, `>`, `  ${args.default}`, `</Button>`, `<Button`, `  :themeColor="${args.themeColor}"`, `  variant="text"`, `  :prefix="${args.prefix}"`, `  :suffix="${args.suffix}"`, `  :size="${args.size}"`, `  :width="${args.width}"`, `  :borderWidth="${args.borderWidth}"`, `  :radius="${args.radius}"`, `  :isDisabled="${args.isDisabled}"`, `  :className="${args.className}"`, `>`, `  ${args.default}`, `</Button>`, `<Button`, `  :themeColor="${args.themeColor}"`, `  variant="soft"`, `  :prefix="${args.prefix}"`, `  :suffix="${args.suffix}"`, `  :size="${args.size}"`, `  :width="${args.width}"`, `  :borderWidth="${args.borderWidth}"`, `  :radius="${args.radius}"`, `  :isDisabled="${args.isDisabled}"`, `  :className="${args.className}"`, `>`, `  ${args.default}`, `</Button>`].join("\\n").trim();\n        }\n      }\n    }\n  }\n}',...($=(p=n.parameters)==null?void 0:p.docs)==null?void 0:$.source}}};var c,b,w;d.parameters={...d.parameters,docs:{...(c=d.parameters)==null?void 0:c.docs,source:{originalSource:'{\n  name: \'主題色彩\',\n  args: {\n    variant: \'filled\',\n    prefix: \'folder\',\n    suffix: \'\',\n    size: \'medium\',\n    width: \'fit\',\n    borderWidth: \'1px\',\n    radius: \'4px\',\n    isDisabled: false,\n    className: "",\n    default: \'Button\'\n  },\n  render: args => ({\n    components: {\n      Button\n    },\n    setup() {\n      return {\n        args\n      };\n    },\n    template: `<div style="display:flex; flex-wrap: wrap; gap: 16px">\n            <Button\n                themeColor="primary"\n                :variant="args.variant"\n                :prefix="args.prefix"\n                :suffix="args.suffix"\n                :size="args.size"\n                :width="args.width"\n                :borderWidth="args.borderWidth"\n                :radius="args.radius"\n                :isDisabled="args.isDisabled"\n                :className="args.className"\n            >\n                {{ args.default }}\n            </Button>\n            <Button\n                themeColor="secondary"\n                :variant="args.variant"\n                :prefix="args.prefix"\n                :suffix="args.suffix"\n                :size="args.size"\n                :width="args.width"\n                :borderWidth="args.borderWidth"\n                :radius="args.radius"\n                :isDisabled="args.isDisabled"\n                :className="args.className"\n            >\n                {{ args.default }}\n            </Button>\n            <Button\n                themeColor="neutral"\n                :variant="args.variant"\n                :prefix="args.prefix"\n                :suffix="args.suffix"\n                :size="args.size"\n                :width="args.width"\n                :borderWidth="args.borderWidth"\n                :radius="args.radius"\n                :isDisabled="args.isDisabled"\n                :className="args.className"\n            >\n                {{ args.default }}\n            </Button>\n            <Button\n                themeColor="info"\n                :variant="args.variant"\n                :prefix="args.prefix"\n                :suffix="args.suffix"\n                :size="args.size"\n                :width="args.width"\n                :borderWidth="args.borderWidth"\n                :radius="args.radius"\n                :isDisabled="args.isDisabled"\n                :className="args.className"\n            >\n                {{ args.default }}\n            </Button>\n            <Button\n                themeColor="success"\n                :variant="args.variant"\n                :prefix="args.prefix"\n                :suffix="args.suffix"\n                :size="args.size"\n                :width="args.width"\n                :borderWidth="args.borderWidth"\n                :radius="args.radius"\n                :isDisabled="args.isDisabled"\n                :className="args.className"\n            >\n                {{ args.default }}\n            </Button>\n            <Button\n                themeColor="warning"\n                :variant="args.variant"\n                :prefix="args.prefix"\n                :suffix="args.suffix"\n                :size="args.size"\n                :width="args.width"\n                :borderWidth="args.borderWidth"\n                :radius="args.radius"\n                :isDisabled="args.isDisabled"\n                :className="args.className"\n            >\n                {{ args.default }}\n            </Button>\n            <Button\n                themeColor="error"\n                :variant="args.variant"\n                :prefix="args.prefix"\n                :suffix="args.suffix"\n                :size="args.size"\n                :width="args.width"\n                :borderWidth="args.borderWidth"\n                :radius="args.radius"\n                :isDisabled="args.isDisabled"\n                :className="args.className"\n            >\n                {{ args.default }}\n            </Button>\n        </div>\n        `\n  }),\n  // 控制 controls 中能控制的參數\n  parameters: {\n    controls: {\n      exclude: [\'themeColor\']\n    },\n    docs: {\n      source: {\n        transform: (src, storyContext) => {\n          const {\n            args\n          } = storyContext;\n          return [`<Button`, `  themeColor="primary"`, `  :variant="${args.variant}"`, `  :prefix="${args.prefix}"`, `  :suffix="${args.suffix}"`, `  :size="${args.size}"`, `  :width="${args.width}"`, `  :borderWidth="${args.borderWidth}"`, `  :radius="${args.radius}"`, `  :isDisabled="${args.isDisabled}"`, `  :className="${args.className}"`, `>`, `  ${args.default}`, `</Button>`, `<Button`, `  themeColor="secondary"`, `  :variant="${args.variant}"`, `  :prefix="${args.prefix}"`, `  :suffix="${args.suffix}"`, `  :size="${args.size}"`, `  :width="${args.width}"`, `  :borderWidth="${args.borderWidth}"`, `  :radius="${args.radius}"`, `  :isDisabled="${args.isDisabled}"`, `  :className="${args.className}"`, `>`, `  ${args.default}`, `</Button>`, `<Button`, `  themeColor="neutral"`, `  :variant="${args.variant}"`, `  :prefix="${args.prefix}"`, `  :suffix="${args.suffix}"`, `  :size="${args.size}"`, `  :width="${args.width}"`, `  :borderWidth="${args.borderWidth}"`, `  :radius="${args.radius}"`, `  :isDisabled="${args.isDisabled}"`, `  :className="${args.className}"`, `>`, `  ${args.default}`, `</Button>`, `<Button`, `  themeColor="info"`, `  :variant="${args.variant}"`, `  :prefix="${args.prefix}"`, `  :suffix="${args.suffix}"`, `  :size="${args.size}"`, `  :width="${args.width}"`, `  :borderWidth="${args.borderWidth}"`, `  :radius="${args.radius}"`, `  :isDisabled="${args.isDisabled}"`, `  :className="${args.className}"`, `>`, `  ${args.default}`, `</Button>`, `<Button`, `  themeColor="success"`, `  :variant="${args.variant}"`, `  :prefix="${args.prefix}"`, `  :suffix="${args.suffix}"`, `  :size="${args.size}"`, `  :width="${args.width}"`, `  :borderWidth="${args.borderWidth}"`, `  :radius="${args.radius}"`, `  :isDisabled="${args.isDisabled}"`, `  :className="${args.className}"`, `>`, `  ${args.default}`, `</Button>`, `<Button`, `  themeColor="warning"`, `  :variant="${args.variant}"`, `  :prefix="${args.prefix}"`, `  :suffix="${args.suffix}"`, `  :size="${args.size}"`, `  :width="${args.width}"`, `  :borderWidth="${args.borderWidth}"`, `  :radius="${args.radius}"`, `  :isDisabled="${args.isDisabled}"`, `  :className="${args.className}"`, `>`, `  ${args.default}`, `</Button>`, `<Button`, `  themeColor="error"`, `  :variant="${args.variant}"`, `  :prefix="${args.prefix}"`, `  :suffix="${args.suffix}"`, `  :size="${args.size}"`, `  :width="${args.width}"`, `  :borderWidth="${args.borderWidth}"`, `  :radius="${args.radius}"`, `  :isDisabled="${args.isDisabled}"`, `  :className="${args.className}"`, `>`, `  ${args.default}`, `</Button>`].join("\\n").trim();\n        }\n      }\n    }\n  }\n}',...(w=(b=d.parameters)==null?void 0:b.docs)==null?void 0:w.source}}};var B,D,v;o.parameters={...o.parameters,docs:{...(B=o.parameters)==null?void 0:B.docs,source:{originalSource:`{
  name: '尺寸',
  args: {
    themeColor: 'primary',
    variant: 'ghost',
    prefix: '',
    suffix: '',
    size: '',
    width: 'fit',
    borderWidth: '1px',
    radius: '4px',
    isDisabled: false,
    className: "",
    default: 'Button'
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
        <div style="display:flex; align-items: baseline; flex-wrap: wrap; gap: 16px">
            <Button
                :themeColor="args.themeColor"
                :variant="args.variant"
                prefix="folder"
                suffix=""
                size="large"
                :width="args.width"
                :borderWidth="args.borderWidth"
                :radius="args.radius"
                :isDisabled="args.isDisabled"
                :className="args.className"
            >
                {{ args.default }}
            </Button>
            <Button
                :themeColor="args.themeColor"
                :variant="args.variant"
                prefix="folder"
                suffix=""
                size="medium"
                :width="args.width"
                :borderWidth="args.borderWidth"
                :radius="args.radius"
                :isDisabled="args.isDisabled"
                :className="args.className"
            >
                {{ args.default }}
            </Button>
            <Button
                :themeColor="args.themeColor"
                :variant="args.variant"
                prefix="folder"
                suffix=""
                size="small"
                :width="args.width"
                :borderWidth="args.borderWidth"
                :radius="args.radius"
                :isDisabled="args.isDisabled"
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
          return [\`<Button\`, \`  :themeColor="\${args.themeColor}"\`, \`  :variant="\${args.variant}"\`, \`  prefix="folder"\`, \`  suffix=""\`, \`  size="large"\`, \`  :width="\${args.width}"\`, \`  :borderWidth="\${args.borderWidth}"\`, \`  :radius="\${args.radius}"\`, \`  :isDisabled="\${args.isDisabled}"\`, \`  :className="\${args.className}"\`, \`>\`, \`  \${args.default}\`, \`</Button>\`, \`<Button\`, \`  :themeColor="\${args.themeColor}"\`, \`  :variant="\${args.variant}"\`, \`  prefix="folder"\`, \`  suffix=""\`, \`  size="medium"\`, \`  :width="\${args.width}"\`, \`  :borderWidth="\${args.borderWidth}"\`, \`  :radius="\${args.radius}"\`, \`  :isDisabled="\${args.isDisabled}"\`, \`  :className="\${args.className}"\`, \`>\`, \`  \${args.default}\`, \`</Button>\`, \`<Button\`, \`  :themeColor="\${args.themeColor}"\`, \`  :variant="\${args.variant}"\`, \`  prefix="folder"\`, \`  suffix=""\`, \`  size="small"\`, \`  :width="\${args.width}"\`, \`  :borderWidth="\${args.borderWidth}"\`, \`  :radius="\${args.radius}"\`, \`  :isDisabled="\${args.isDisabled}"\`, \`  :className="\${args.className}"\`, \`>\`, \`  \${args.default}\`, \`</Button>\`].join("\\n").trim();
        }
      }
    }
  }
}`,...(v=(D=o.parameters)==null?void 0:D.docs)==null?void 0:v.source}}};const A=["DefaultButtonStory","ButtonPrefixSuffixStory","ButtonTypeStory","ButtonColorStory","ButtonSizeStory"];export{d as ButtonColorStory,t as ButtonPrefixSuffixStory,o as ButtonSizeStory,n as ButtonTypeStory,i as DefaultButtonStory,A as __namedExportsOrder,S as default};

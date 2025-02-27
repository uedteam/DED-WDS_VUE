import{_ as i}from"./Button-DdqUyGHd.js";import"./vue.esm-bundler-CeRU4-k3.js";import"./Icon-BO2J-day.js";const B={title:"Component/Button",component:i,tags:["autodocs"],argTypes:{themeColor:{description:"主題顏色",control:{type:"select"},options:["primary","secondary","neutral","info","success","warning","error"],table:{type:{summary:"primary | secondary | neutral | info | success | warning | error"}}},variant:{description:"按鈕樣式",required:!0,control:{type:"select"},options:["filled","ghost","text","soft"],table:{type:{summary:"filled | ghost | text | soft"}}},prefix:{description:"前置元素",control:{type:"select",labels:{"":"none",SvgAccount:"SvgAccount",SvgSearch:"SvgSearch",SvgVisibility:"SvgVisibility",SvgVisibilityOff:"SvgVisibilityOff"}},options:["","SvgAccount","SvgSearch","SvgVisibility","SvgVisibilityOff"]},suffix:{description:"後置元素",control:{type:"select",labels:{"":"none",SvgAccount:"SvgAccount",SvgSearch:"SvgSearch",SvgVisibility:"SvgVisibility",SvgVisibilityOff:"SvgVisibilityOff"}},options:["","SvgAccount","SvgSearch","SvgVisibility","SvgVisibilityOff"]},size:{description:"按鈕尺寸",control:{type:"select"},options:["small","medium","large"],table:{type:{summary:"small | medium | large"}}},width:{description:"按鈕寬度",control:{type:"select"},options:["fluid","fit"],table:{type:{summary:"fluid | fit"}}},borderWidth:{description:"按鈕邊框寬度",control:{type:"select"},options:["none","1px","2px","3px","4px","5px"],table:{type:{summary:"none | 1px | 2px | 3px | 4px | 5px"}}},radius:{description:"按鈕圓角大小",control:{type:"select"},options:["none","2px","4px","8px","12px","16px","32px","full"],table:{type:{summary:"none | 2px | 4px | 8px | 12px | 16px | 32px |full"}}},isDisabled:{description:"是否禁用",control:{type:"boolean"}},className:{description:"客製化樣式",control:{type:"text"}},default:{description:"按鈕內容",control:{type:"text"},table:{type:{summary:"Vue Component | HTML"}}}},parameters:{docs:{title:"按鈕",description:{component:"按鈕組件的呈現及說明。"}}}},e={name:"預設項目",args:{themeColor:"primary",variant:"filled",prefix:"",suffix:"",size:"medium",width:"fit",borderWidth:"1px",radius:"4px",isDisabled:!1,className:"",default:"Button"},render:r=>({components:{Button:i},setup(){return{args:r}},template:`
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
            `}),parameters:{controls:{},docs:{source:{transform:(r,a)=>{const{args:s}=a;return["<script setup>",'import { Button } from "@ded-wds-vue/ui";',"<\/script>","","<template>","  <Button",`    ${s.themeColor?`themeColor="${s.themeColor}"`:""}`,`    ${s.variant?`variant="${s.variant}"`:""}`,`    ${s.prefix?`prefix="${s.prefix}"`:""}`,`    ${s.suffix?`suffix="${s.suffix}"`:""}`,`    ${s.size?`size="${s.size}"`:""}`,`    ${s.width?`width="${s.width}"`:""}`,`    ${s.borderWidth?`borderWidth="${s.borderWidth}"`:""}`,`    ${s.radius?`radius="${s.radius}"`:""}`,`    ${s.isDisabled!==void 0?`:isDisabled="${s.isDisabled}"`:""}`,`    ${s.className?`className="${s.className}"`:""}`,"  >",`    ${s.default||""}`,"  </Button>","</template>"].filter(Boolean).join(`
`).trim()}}}}},t={name:"附加元素",args:{themeColor:"primary",variant:"ghost",prefix:"",suffix:"",size:"medium",width:"fit",borderWidth:"1px",radius:"4px",isDisabled:!1,className:"",default:"Button"},render:r=>({components:{Button:i},setup(){return{args:r}},template:`<div style="display:flex; flex-wrap: wrap; gap: 16px">
            <Button
                :themeColor="args.themeColor"
                :variant="args.variant"
                prefix="SvgAccount"
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
                suffix="SvgSearch"
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
        `}),parameters:{controls:{exclude:["prefix","suffix"]},docs:{source:{transform:(r,a)=>{const{args:s}=a;return["<script setup>",'import { Button } from "@ded-wds-vue/ui";',"<\/script>","","<template>","  <Button",`    ${s.themeColor?`themeColor="${s.themeColor}"`:""}`,`    ${s.variant?`variant="${s.variant}"`:""}`,'    prefix="SvgAccount"',`    ${s.suffix?`suffix="${s.suffix}"`:""}`,`    ${s.size?`size="${s.size}"`:""}`,`    ${s.width?`width="${s.width}"`:""}`,`    ${s.borderWidth?`borderWidth="${s.borderWidth}"`:""}`,`    ${s.radius?`radius="${s.radius}"`:""}`,`    ${s.isDisabled!==void 0?`:isDisabled="${s.isDisabled}"`:""}`,`    ${s.className?`className="${s.className}"`:""}`,"  >",`    ${s.default||""}`,"  </Button>","  <Button",`    ${s.themeColor?`themeColor="${s.themeColor}"`:""}`,`    ${s.variant?`variant="${s.variant}"`:""}`,`    ${s.prefix?`prefix="${s.prefix}"`:""}`,'    suffix="SvgSearch"',`    ${s.size?`size="${s.size}"`:""}`,`    ${s.width?`width="${s.width}"`:""}`,`    ${s.borderWidth?`borderWidth="${s.borderWidth}"`:""}`,`    ${s.radius?`radius="${s.radius}"`:""}`,`    ${s.isDisabled!==void 0?`:isDisabled="${s.isDisabled}"`:""}`,`    ${s.className?`className="${s.className}"`:""}`,"  >",`    ${s.default||""}`,"  </Button>","</template>"].filter(Boolean).join(`
`).trim()}}}}},d={name:"外觀樣式",args:{themeColor:"primary",variant:"filled",prefix:"",suffix:"",size:"medium",width:"fit",borderWidth:"1px",radius:"4px",isDisabled:!1,className:"",default:"Button"},render:r=>({components:{Button:i},setup(){return{args:r}},template:`<div style="display:flex; flex-wrap: wrap; gap: 16px">
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
        `}),parameters:{controls:{exclude:["variant"]},docs:{source:{transform:(r,a)=>{const{args:s}=a;return["<script setup>",'import { Button } from "@ded-wds-vue/ui";',"<\/script>","","<template>","  <Button",`    ${s.themeColor?`themeColor="${s.themeColor}"`:""}`,'    variant="filled"',`    ${s.prefix?`prefix="${s.prefix}"`:""}`,`    ${s.suffix?`suffix="${s.suffix}"`:""}`,`    ${s.size?`size="${s.size}"`:""}`,`    ${s.width?`width="${s.width}"`:""}`,`    ${s.borderWidth?`borderWidth="${s.borderWidth}"`:""}`,`    ${s.radius?`radius="${s.radius}"`:""}`,`    ${s.isDisabled!==void 0?`:isDisabled="${s.isDisabled}"`:""}`,`    ${s.className?`className="${s.className}"`:""}`,"  >",`    ${s.default||""}`,"  </Button>","  <Button",`    ${s.themeColor?`themeColor="${s.themeColor}"`:""}`,'    variant="ghost"',`    ${s.prefix?`prefix="${s.prefix}"`:""}`,`    ${s.suffix?`suffix="${s.suffix}"`:""}`,`    ${s.size?`size="${s.size}"`:""}`,`    ${s.width?`width="${s.width}"`:""}`,`    ${s.borderWidth?`borderWidth="${s.borderWidth}"`:""}`,`    ${s.radius?`radius="${s.radius}"`:""}`,`    ${s.isDisabled!==void 0?`:isDisabled="${s.isDisabled}"`:""}`,`    ${s.className?`className="${s.className}"`:""}`,"  >",`    ${s.default||""}`,"  </Button>","  <Button",`    ${s.themeColor?`themeColor="${s.themeColor}"`:""}`,'    variant="text"',`    ${s.prefix?`prefix="${s.prefix}"`:""}`,`    ${s.suffix?`suffix="${s.suffix}"`:""}`,`    ${s.size?`size="${s.size}"`:""}`,`    ${s.width?`width="${s.width}"`:""}`,`    ${s.borderWidth?`borderWidth="${s.borderWidth}"`:""}`,`    ${s.radius?`radius="${s.radius}"`:""}`,`    ${s.isDisabled!==void 0?`:isDisabled="${s.isDisabled}"`:""}`,`    ${s.className?`className="${s.className}"`:""}`,"  >",`    ${s.default||""}`,"  </Button>","  <Button",`    ${s.themeColor?`themeColor="${s.themeColor}"`:""}`,'    variant="soft"',`    ${s.prefix?`prefix="${s.prefix}"`:""}`,`    ${s.suffix?`suffix="${s.suffix}"`:""}`,`    ${s.size?`size="${s.size}"`:""}`,`    ${s.width?`width="${s.width}"`:""}`,`    ${s.borderWidth?`borderWidth="${s.borderWidth}"`:""}`,`    ${s.radius?`radius="${s.radius}"`:""}`,`    ${s.isDisabled!==void 0?`:isDisabled="${s.isDisabled}"`:""}`,`    ${s.className?`className="${s.className}"`:""}`,"  >",`    ${s.default||""}`,"  </Button>","</template>"].filter(Boolean).join(`
`).trim()}}}}},n={name:"主題色彩",args:{variant:"filled",prefix:"SvgAccount",suffix:"",size:"medium",width:"fit",borderWidth:"1px",radius:"4px",isDisabled:!1,className:"",default:"Button"},render:r=>({components:{Button:i},setup(){return{args:r}},template:`<div style="display:flex; flex-wrap: wrap; gap: 16px">
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
        `}),parameters:{controls:{exclude:["themeColor"]},docs:{source:{transform:(r,a)=>{const{args:s}=a;return["<script setup>",'import { Button } from "@ded-wds-vue/ui";',"<\/script>","","<template>","  <Button",'    themeColor="primary"',`    ${s.variant?`variant="${s.variant}"`:""}`,`    ${s.prefix?`prefix="${s.prefix}"`:""}`,`    ${s.suffix?`suffix="${s.suffix}"`:""}`,`    ${s.size?`size="${s.size}"`:""}`,`    ${s.width?`width="${s.width}"`:""}`,`    ${s.borderWidth?`borderWidth="${s.borderWidth}"`:""}`,`    ${s.radius?`radius="${s.radius}"`:""}`,`    ${s.isDisabled!==void 0?`:isDisabled="${s.isDisabled}"`:""}`,`    ${s.className?`className="${s.className}"`:""}`,"  >",`    ${s.default||""}`,"  </Button>","  <Button",'    themeColor="secondary"',`    ${s.variant?`variant="${s.variant}"`:""}`,`    ${s.prefix?`prefix="${s.prefix}"`:""}`,`    ${s.suffix?`suffix="${s.suffix}"`:""}`,`    ${s.size?`size="${s.size}"`:""}`,`    ${s.width?`width="${s.width}"`:""}`,`    ${s.borderWidth?`borderWidth="${s.borderWidth}"`:""}`,`    ${s.radius?`radius="${s.radius}"`:""}`,`    ${s.isDisabled!==void 0?`:isDisabled="${s.isDisabled}"`:""}`,`    ${s.className?`className="${s.className}"`:""}`,"  >",`    ${s.default||""}`,"  </Button>","  <Button",'    themeColor="neutral"',`    ${s.variant?`variant="${s.variant}"`:""}`,`    ${s.prefix?`prefix="${s.prefix}"`:""}`,`    ${s.suffix?`suffix="${s.suffix}"`:""}`,`    ${s.size?`size="${s.size}"`:""}`,`    ${s.width?`width="${s.width}"`:""}`,`    ${s.borderWidth?`borderWidth="${s.borderWidth}"`:""}`,`    ${s.radius?`radius="${s.radius}"`:""}`,`    ${s.isDisabled!==void 0?`:isDisabled="${s.isDisabled}"`:""}`,`    ${s.className?`className="${s.className}"`:""}`,"  >",`    ${s.default||""}`,"  </Button>","  <Button",'    themeColor="info"',`    ${s.variant?`variant="${s.variant}"`:""}`,`    ${s.prefix?`prefix="${s.prefix}"`:""}`,`    ${s.suffix?`suffix="${s.suffix}"`:""}`,`    ${s.size?`size="${s.size}"`:""}`,`    ${s.width?`width="${s.width}"`:""}`,`    ${s.borderWidth?`borderWidth="${s.borderWidth}"`:""}`,`    ${s.radius?`radius="${s.radius}"`:""}`,`    ${s.isDisabled!==void 0?`:isDisabled="${s.isDisabled}"`:""}`,`    ${s.className?`className="${s.className}"`:""}`,"  >",`    ${s.default||""}`,"  </Button>","  <Button",'    themeColor="success"',`    ${s.variant?`variant="${s.variant}"`:""}`,`    ${s.prefix?`prefix="${s.prefix}"`:""}`,`    ${s.suffix?`suffix="${s.suffix}"`:""}`,`    ${s.size?`size="${s.size}"`:""}`,`    ${s.width?`width="${s.width}"`:""}`,`    ${s.borderWidth?`borderWidth="${s.borderWidth}"`:""}`,`    ${s.radius?`radius="${s.radius}"`:""}`,`    ${s.isDisabled!==void 0?`:isDisabled="${s.isDisabled}"`:""}`,`    ${s.className?`className="${s.className}"`:""}`,"  >",`    ${s.default||""}`,"  </Button>","  <Button",'    themeColor="warning"',`    ${s.variant?`variant="${s.variant}"`:""}`,`    ${s.prefix?`prefix="${s.prefix}"`:""}`,`    ${s.suffix?`suffix="${s.suffix}"`:""}`,`    ${s.size?`size="${s.size}"`:""}`,`    ${s.width?`width="${s.width}"`:""}`,`    ${s.borderWidth?`borderWidth="${s.borderWidth}"`:""}`,`    ${s.radius?`radius="${s.radius}"`:""}`,`    ${s.isDisabled!==void 0?`:isDisabled="${s.isDisabled}"`:""}`,`    ${s.className?`className="${s.className}"`:""}`,"  >",`    ${s.default||""}`,"  </Button>","  <Button",'    themeColor="error"',`    ${s.variant?`variant="${s.variant}"`:""}`,`    ${s.prefix?`prefix="${s.prefix}"`:""}`,`    ${s.suffix?`suffix="${s.suffix}"`:""}`,`    ${s.size?`size="${s.size}"`:""}`,`    ${s.width?`width="${s.width}"`:""}`,`    ${s.borderWidth?`borderWidth="${s.borderWidth}"`:""}`,`    ${s.radius?`radius="${s.radius}"`:""}`,`    ${s.isDisabled!==void 0?`:isDisabled="${s.isDisabled}"`:""}`,`    ${s.className?`className="${s.className}"`:""}`,"  >",`    ${s.default||""}`,"  </Button>","</template>"].filter(Boolean).join(`
`).trim()}}}}};var o,u,l;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
          return [\`<script setup>\`, \`import { Button } from "@ded-wds-vue/ui";\`, \`<\/script>\`, '', '<template>', \`  <Button\`, \`    \${args.themeColor ? \`themeColor="\${args.themeColor}"\` : ""}\`, \`    \${args.variant ? \`variant="\${args.variant}"\` : ""}\`, \`    \${args.prefix ? \`prefix="\${args.prefix}"\` : ""}\`, \`    \${args.suffix ? \`suffix="\${args.suffix}"\` : ""}\`, \`    \${args.size ? \`size="\${args.size}"\` : ""}\`, \`    \${args.width ? \`width="\${args.width}"\` : ""}\`, \`    \${args.borderWidth ? \`borderWidth="\${args.borderWidth}"\` : ""}\`, \`    \${args.radius ? \`radius="\${args.radius}"\` : ""}\`, \`    \${args.isDisabled !== undefined ? \`:isDisabled="\${args.isDisabled}"\` : ""}\`, \`    \${args.className ? \`className="\${args.className}"\` : ""}\`, \`  >\`, \`    \${args.default || ""}\`, \`  </Button>\`, '</template>'].filter(Boolean).join("\\n").trim();
        }
      }
    }
  }
}`,...(l=(u=e.parameters)==null?void 0:u.docs)==null?void 0:l.source}}};var g,f,$;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:'{\n  name: \'附加元素\',\n  args: {\n    themeColor: \'primary\',\n    variant: \'ghost\',\n    prefix: \'\',\n    suffix: \'\',\n    size: \'medium\',\n    width: \'fit\',\n    borderWidth: \'1px\',\n    radius: \'4px\',\n    isDisabled: false,\n    className: "",\n    default: \'Button\'\n  },\n  render: args => ({\n    components: {\n      Button\n    },\n    setup() {\n      return {\n        args\n      };\n    },\n    template: `<div style="display:flex; flex-wrap: wrap; gap: 16px">\n            <Button\n                :themeColor="args.themeColor"\n                :variant="args.variant"\n                prefix="SvgAccount"\n                suffix=""\n                :size="args.size"\n                :width="args.width"\n                :borderWidth="args.borderWidth"\n                :radius="args.radius"\n                :isDisabled="args.isDisabled"\n                :className="args.className"\n            >\n                {{ args.default }}\n            </Button>\n            <Button\n                :themeColor="args.themeColor"\n                :variant="args.variant"\n                prefix=""\n                suffix="SvgSearch"\n                :size="args.size"\n                :width="args.width"\n                :borderWidth="args.borderWidth"\n                :radius="args.radius"\n                :isDisabled="args.isDisabled"\n                :className="args.className"\n            >\n                {{ args.default }}\n            </Button>\n        </div>\n        `\n  }),\n  // 控制 controls 中能控制的參數\n  parameters: {\n    controls: {\n      exclude: [\'prefix\', \'suffix\']\n    },\n    docs: {\n      source: {\n        transform: (src, storyContext) => {\n          const {\n            args\n          } = storyContext;\n          return [`<script setup>`, `import { Button } from "@ded-wds-vue/ui";`, `<\/script>`, \'\', \'<template>\', `  <Button`, `    ${args.themeColor ? `themeColor="${args.themeColor}"` : ""}`, `    ${args.variant ? `variant="${args.variant}"` : ""}`, `    prefix="SvgAccount"`, `    ${args.suffix ? `suffix="${args.suffix}"` : ""}`, `    ${args.size ? `size="${args.size}"` : ""}`, `    ${args.width ? `width="${args.width}"` : ""}`, `    ${args.borderWidth ? `borderWidth="${args.borderWidth}"` : ""}`, `    ${args.radius ? `radius="${args.radius}"` : ""}`, `    ${args.isDisabled !== undefined ? `:isDisabled="${args.isDisabled}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, `  >`, `    ${args.default || ""}`, `  </Button>`, `  <Button`, `    ${args.themeColor ? `themeColor="${args.themeColor}"` : ""}`, `    ${args.variant ? `variant="${args.variant}"` : ""}`, `    ${args.prefix ? `prefix="${args.prefix}"` : ""}`, `    suffix="SvgSearch"`, `    ${args.size ? `size="${args.size}"` : ""}`, `    ${args.width ? `width="${args.width}"` : ""}`, `    ${args.borderWidth ? `borderWidth="${args.borderWidth}"` : ""}`, `    ${args.radius ? `radius="${args.radius}"` : ""}`, `    ${args.isDisabled !== undefined ? `:isDisabled="${args.isDisabled}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, `  >`, `    ${args.default || ""}`, `  </Button>`, \'</template>\'].filter(Boolean).join("\\n").trim();\n        }\n      }\n    }\n  }\n}',...($=(f=t.parameters)==null?void 0:f.docs)==null?void 0:$.source}}};var h,m,p;d.parameters={...d.parameters,docs:{...(h=d.parameters)==null?void 0:h.docs,source:{originalSource:'{\n  name: \'外觀樣式\',\n  args: {\n    themeColor: \'primary\',\n    variant: \'filled\',\n    prefix: \'\',\n    suffix: \'\',\n    size: \'medium\',\n    width: \'fit\',\n    borderWidth: \'1px\',\n    radius: \'4px\',\n    isDisabled: false,\n    className: "",\n    default: \'Button\'\n  },\n  render: args => ({\n    components: {\n      Button\n    },\n    setup() {\n      return {\n        args\n      };\n    },\n    template: `<div style="display:flex; flex-wrap: wrap; gap: 16px">\n            <Button\n                :themeColor="args.themeColor"\n                variant="filled"\n                :prefix="args.prefix"\n                :suffix="args.suffix"\n                :size="args.size"\n                :width="args.width"\n                :borderWidth="args.borderWidth"\n                :radius="args.radius"\n                :isDisabled="args.isDisabled"\n                :className="args.className"\n            >\n                {{ args.default }}\n            </Button>\n            <Button\n                :themeColor="args.themeColor"\n                variant="ghost"\n                :prefix="args.prefix"\n                :suffix="args.suffix"\n                :size="args.size"\n                :width="args.width"\n                :borderWidth="args.borderWidth"\n                :radius="args.radius"\n                :isDisabled="args.isDisabled"\n                :className="args.className"\n            >\n                {{ args.default }}\n            </Button>\n            <Button\n                :themeColor="args.themeColor"\n                variant="text"\n                :prefix="args.prefix"\n                :suffix="args.suffix"\n                :size="args.size"\n                :width="args.width"\n                :borderWidth="args.borderWidth"\n                :radius="args.radius"\n                :isDisabled="args.isDisabled"\n                :className="args.className"\n            >\n                {{ args.default }}\n            </Button>\n            <Button\n                :themeColor="args.themeColor"\n                variant="soft"\n                :prefix="args.prefix"\n                :suffix="args.suffix"\n                :size="args.size"\n                :width="args.width"\n                :borderWidth="args.borderWidth"\n                :radius="args.radius"\n                :isDisabled="args.isDisabled"\n                :className="args.className"\n            >\n                {{ args.default }}\n            </Button>\n        </div>\n        `\n  }),\n  // 控制 controls 中能控制的參數\n  parameters: {\n    controls: {\n      exclude: [\'variant\']\n    },\n    docs: {\n      source: {\n        transform: (src, storyContext) => {\n          const {\n            args\n          } = storyContext;\n          return [`<script setup>`, `import { Button } from "@ded-wds-vue/ui";`, `<\/script>`, \'\', \'<template>\', `  <Button`, `    ${args.themeColor ? `themeColor="${args.themeColor}"` : ""}`, `    variant="filled"`, `    ${args.prefix ? `prefix="${args.prefix}"` : ""}`, `    ${args.suffix ? `suffix="${args.suffix}"` : ""}`, `    ${args.size ? `size="${args.size}"` : ""}`, `    ${args.width ? `width="${args.width}"` : ""}`, `    ${args.borderWidth ? `borderWidth="${args.borderWidth}"` : ""}`, `    ${args.radius ? `radius="${args.radius}"` : ""}`, `    ${args.isDisabled !== undefined ? `:isDisabled="${args.isDisabled}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, `  >`, `    ${args.default || ""}`, `  </Button>`, `  <Button`, `    ${args.themeColor ? `themeColor="${args.themeColor}"` : ""}`, `    variant="ghost"`, `    ${args.prefix ? `prefix="${args.prefix}"` : ""}`, `    ${args.suffix ? `suffix="${args.suffix}"` : ""}`, `    ${args.size ? `size="${args.size}"` : ""}`, `    ${args.width ? `width="${args.width}"` : ""}`, `    ${args.borderWidth ? `borderWidth="${args.borderWidth}"` : ""}`, `    ${args.radius ? `radius="${args.radius}"` : ""}`, `    ${args.isDisabled !== undefined ? `:isDisabled="${args.isDisabled}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, `  >`, `    ${args.default || ""}`, `  </Button>`, `  <Button`, `    ${args.themeColor ? `themeColor="${args.themeColor}"` : ""}`, `    variant="text"`, `    ${args.prefix ? `prefix="${args.prefix}"` : ""}`, `    ${args.suffix ? `suffix="${args.suffix}"` : ""}`, `    ${args.size ? `size="${args.size}"` : ""}`, `    ${args.width ? `width="${args.width}"` : ""}`, `    ${args.borderWidth ? `borderWidth="${args.borderWidth}"` : ""}`, `    ${args.radius ? `radius="${args.radius}"` : ""}`, `    ${args.isDisabled !== undefined ? `:isDisabled="${args.isDisabled}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, `  >`, `    ${args.default || ""}`, `  </Button>`, `  <Button`, `    ${args.themeColor ? `themeColor="${args.themeColor}"` : ""}`, `    variant="soft"`, `    ${args.prefix ? `prefix="${args.prefix}"` : ""}`, `    ${args.suffix ? `suffix="${args.suffix}"` : ""}`, `    ${args.size ? `size="${args.size}"` : ""}`, `    ${args.width ? `width="${args.width}"` : ""}`, `    ${args.borderWidth ? `borderWidth="${args.borderWidth}"` : ""}`, `    ${args.radius ? `radius="${args.radius}"` : ""}`, `    ${args.isDisabled !== undefined ? `:isDisabled="${args.isDisabled}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, `  >`, `    ${args.default || ""}`, `  </Button>`, \'</template>\'].filter(Boolean).join("\\n").trim();\n        }\n      }\n    }\n  }\n}',...(p=(m=d.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var x,c,b;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:'{\n  name: \'主題色彩\',\n  args: {\n    variant: \'filled\',\n    prefix: \'SvgAccount\',\n    suffix: \'\',\n    size: \'medium\',\n    width: \'fit\',\n    borderWidth: \'1px\',\n    radius: \'4px\',\n    isDisabled: false,\n    className: "",\n    default: \'Button\'\n  },\n  render: args => ({\n    components: {\n      Button\n    },\n    setup() {\n      return {\n        args\n      };\n    },\n    template: `<div style="display:flex; flex-wrap: wrap; gap: 16px">\n            <Button\n                themeColor="primary"\n                :variant="args.variant"\n                :prefix="args.prefix"\n                :suffix="args.suffix"\n                :size="args.size"\n                :width="args.width"\n                :borderWidth="args.borderWidth"\n                :radius="args.radius"\n                :isDisabled="args.isDisabled"\n                :className="args.className"\n            >\n                {{ args.default }}\n            </Button>\n            <Button\n                themeColor="secondary"\n                :variant="args.variant"\n                :prefix="args.prefix"\n                :suffix="args.suffix"\n                :size="args.size"\n                :width="args.width"\n                :borderWidth="args.borderWidth"\n                :radius="args.radius"\n                :isDisabled="args.isDisabled"\n                :className="args.className"\n            >\n                {{ args.default }}\n            </Button>\n            <Button\n                themeColor="neutral"\n                :variant="args.variant"\n                :prefix="args.prefix"\n                :suffix="args.suffix"\n                :size="args.size"\n                :width="args.width"\n                :borderWidth="args.borderWidth"\n                :radius="args.radius"\n                :isDisabled="args.isDisabled"\n                :className="args.className"\n            >\n                {{ args.default }}\n            </Button>\n            <Button\n                themeColor="info"\n                :variant="args.variant"\n                :prefix="args.prefix"\n                :suffix="args.suffix"\n                :size="args.size"\n                :width="args.width"\n                :borderWidth="args.borderWidth"\n                :radius="args.radius"\n                :isDisabled="args.isDisabled"\n                :className="args.className"\n            >\n                {{ args.default }}\n            </Button>\n            <Button\n                themeColor="success"\n                :variant="args.variant"\n                :prefix="args.prefix"\n                :suffix="args.suffix"\n                :size="args.size"\n                :width="args.width"\n                :borderWidth="args.borderWidth"\n                :radius="args.radius"\n                :isDisabled="args.isDisabled"\n                :className="args.className"\n            >\n                {{ args.default }}\n            </Button>\n            <Button\n                themeColor="warning"\n                :variant="args.variant"\n                :prefix="args.prefix"\n                :suffix="args.suffix"\n                :size="args.size"\n                :width="args.width"\n                :borderWidth="args.borderWidth"\n                :radius="args.radius"\n                :isDisabled="args.isDisabled"\n                :className="args.className"\n            >\n                {{ args.default }}\n            </Button>\n            <Button\n                themeColor="error"\n                :variant="args.variant"\n                :prefix="args.prefix"\n                :suffix="args.suffix"\n                :size="args.size"\n                :width="args.width"\n                :borderWidth="args.borderWidth"\n                :radius="args.radius"\n                :isDisabled="args.isDisabled"\n                :className="args.className"\n            >\n                {{ args.default }}\n            </Button>\n        </div>\n        `\n  }),\n  // 控制 controls 中能控制的參數\n  parameters: {\n    controls: {\n      exclude: [\'themeColor\']\n    },\n    docs: {\n      source: {\n        transform: (src, storyContext) => {\n          const {\n            args\n          } = storyContext;\n          return [`<script setup>`, `import { Button } from "@ded-wds-vue/ui";`, `<\/script>`, \'\', \'<template>\', `  <Button`, `    themeColor="primary"`, `    ${args.variant ? `variant="${args.variant}"` : ""}`, `    ${args.prefix ? `prefix="${args.prefix}"` : ""}`, `    ${args.suffix ? `suffix="${args.suffix}"` : ""}`, `    ${args.size ? `size="${args.size}"` : ""}`, `    ${args.width ? `width="${args.width}"` : ""}`, `    ${args.borderWidth ? `borderWidth="${args.borderWidth}"` : ""}`, `    ${args.radius ? `radius="${args.radius}"` : ""}`, `    ${args.isDisabled !== undefined ? `:isDisabled="${args.isDisabled}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, `  >`, `    ${args.default || ""}`, `  </Button>`, `  <Button`, `    themeColor="secondary"`, `    ${args.variant ? `variant="${args.variant}"` : ""}`, `    ${args.prefix ? `prefix="${args.prefix}"` : ""}`, `    ${args.suffix ? `suffix="${args.suffix}"` : ""}`, `    ${args.size ? `size="${args.size}"` : ""}`, `    ${args.width ? `width="${args.width}"` : ""}`, `    ${args.borderWidth ? `borderWidth="${args.borderWidth}"` : ""}`, `    ${args.radius ? `radius="${args.radius}"` : ""}`, `    ${args.isDisabled !== undefined ? `:isDisabled="${args.isDisabled}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, `  >`, `    ${args.default || ""}`, `  </Button>`, `  <Button`, `    themeColor="neutral"`, `    ${args.variant ? `variant="${args.variant}"` : ""}`, `    ${args.prefix ? `prefix="${args.prefix}"` : ""}`, `    ${args.suffix ? `suffix="${args.suffix}"` : ""}`, `    ${args.size ? `size="${args.size}"` : ""}`, `    ${args.width ? `width="${args.width}"` : ""}`, `    ${args.borderWidth ? `borderWidth="${args.borderWidth}"` : ""}`, `    ${args.radius ? `radius="${args.radius}"` : ""}`, `    ${args.isDisabled !== undefined ? `:isDisabled="${args.isDisabled}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, `  >`, `    ${args.default || ""}`, `  </Button>`, `  <Button`, `    themeColor="info"`, `    ${args.variant ? `variant="${args.variant}"` : ""}`, `    ${args.prefix ? `prefix="${args.prefix}"` : ""}`, `    ${args.suffix ? `suffix="${args.suffix}"` : ""}`, `    ${args.size ? `size="${args.size}"` : ""}`, `    ${args.width ? `width="${args.width}"` : ""}`, `    ${args.borderWidth ? `borderWidth="${args.borderWidth}"` : ""}`, `    ${args.radius ? `radius="${args.radius}"` : ""}`, `    ${args.isDisabled !== undefined ? `:isDisabled="${args.isDisabled}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, `  >`, `    ${args.default || ""}`, `  </Button>`, `  <Button`, `    themeColor="success"`, `    ${args.variant ? `variant="${args.variant}"` : ""}`, `    ${args.prefix ? `prefix="${args.prefix}"` : ""}`, `    ${args.suffix ? `suffix="${args.suffix}"` : ""}`, `    ${args.size ? `size="${args.size}"` : ""}`, `    ${args.width ? `width="${args.width}"` : ""}`, `    ${args.borderWidth ? `borderWidth="${args.borderWidth}"` : ""}`, `    ${args.radius ? `radius="${args.radius}"` : ""}`, `    ${args.isDisabled !== undefined ? `:isDisabled="${args.isDisabled}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, `  >`, `    ${args.default || ""}`, `  </Button>`, `  <Button`, `    themeColor="warning"`, `    ${args.variant ? `variant="${args.variant}"` : ""}`, `    ${args.prefix ? `prefix="${args.prefix}"` : ""}`, `    ${args.suffix ? `suffix="${args.suffix}"` : ""}`, `    ${args.size ? `size="${args.size}"` : ""}`, `    ${args.width ? `width="${args.width}"` : ""}`, `    ${args.borderWidth ? `borderWidth="${args.borderWidth}"` : ""}`, `    ${args.radius ? `radius="${args.radius}"` : ""}`, `    ${args.isDisabled !== undefined ? `:isDisabled="${args.isDisabled}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, `  >`, `    ${args.default || ""}`, `  </Button>`, `  <Button`, `    themeColor="error"`, `    ${args.variant ? `variant="${args.variant}"` : ""}`, `    ${args.prefix ? `prefix="${args.prefix}"` : ""}`, `    ${args.suffix ? `suffix="${args.suffix}"` : ""}`, `    ${args.size ? `size="${args.size}"` : ""}`, `    ${args.width ? `width="${args.width}"` : ""}`, `    ${args.borderWidth ? `borderWidth="${args.borderWidth}"` : ""}`, `    ${args.radius ? `radius="${args.radius}"` : ""}`, `    ${args.isDisabled !== undefined ? `:isDisabled="${args.isDisabled}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, `  >`, `    ${args.default || ""}`, `  </Button>`, \'</template>\'].filter(Boolean).join("\\n").trim();\n        }\n      }\n    }\n  }\n}',...(b=(c=n.parameters)==null?void 0:c.docs)==null?void 0:b.source}}};const z=["DefaultButtonStory","ButtonPrefixSuffixStory","ButtonTypeStory","ButtonColorStory"];export{n as ButtonColorStory,t as ButtonPrefixSuffixStory,d as ButtonTypeStory,e as DefaultButtonStory,z as __namedExportsOrder,B as default};

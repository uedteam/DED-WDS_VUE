import{_ as i}from"./StatusIndicator-9CdJJ4eK.js";import"./vue.esm-bundler-DYHjuIM_.js";import"./Icon-DeqquNhw.js";const p={title:"Component/Status-Indicator",component:i,tags:["autodocs"],argTypes:{themeColor:{description:"主題顏色",control:{type:"select"},options:["primary","secondary","neutral","info","success","warning","error"],table:{type:{summary:"primary | secondary | neutral | info | success | warning | error"}}},variant:{description:"按鈕樣式",required:!0,control:{type:"select"},options:["text","filled"],table:{type:{summary:"text | filled "}}},prefix:{description:"前綴元素",control:{type:"select",labels:{"":"none",SvgInfoCircle:"SvgInfoCircle",SvgSuccessCircle:"SvgSuccessCircle",SvgWarningTri:"SvgWarningTri",SvgErrorCircle:"SvgErrorCircle",SvgQuestionCircle:"SvgQuestionCircle",SvgDisableCircle:"SvgDisableCircle"}},options:["","SvgInfoCircle","SvgSuccessCircle","SvgWarningTri","SvgErrorCircle","SvgQuestionCircle","SvgDisableCircle"]},size:{description:"尺寸",control:{type:"select"},options:["small","medium","large"],table:{type:{summary:"small | medium | large "}}},className:{description:"客製化樣式",control:{type:"text"}},default:{description:"內容",control:{type:"text"},table:{type:{summary:"Vue Component | HTML"}}}},parameters:{docs:{title:"StatusIndicator",description:{component:"狀態指示組件的呈現及說明。"}}}},e={name:"預設項目",args:{themeColor:"success",variant:"filled",prefix:"",size:"medium",className:"",default:"Success"},render:s=>({components:{StatusIndicator:i},setup(){return{args:s}},template:`
            <StatusIndicator
                :themeColor="args.themeColor"
                :variant="args.variant"
                :prefix="args.prefix"
                :size="args.size"
                :className="args.className"
            >
                {{args.default}}
            </StatusIndicator>
        `}),parameters:{controls:{},docs:{source:{transform:(s,t)=>{const{args:a}=t;return["<script setup>",'import { StatusIndicator } from "@ded-wds-vue/ui";',"<\/script>","","<template>","  <StatusIndicator",`    ${a.themeColor?`themeColor="${a.themeColor}"`:""}`,`    ${a.variant?`variant="${a.variant}"`:""}`,`    ${a.prefix?`prefix="${a.prefix}"`:""}`,`    ${a.size?`size="${a.size}"`:""}`,`    ${a.className?`className="${a.className}"`:""}`,"  >",`    ${a.default||""}`,"  </StatusIndicator>","</template>"].filter(Boolean).join(`
`).trim()}}}}},r={name:"主題色彩",args:{themeColor:"",variant:"",prefix:"",size:"medium",className:""},render:s=>({components:{StatusIndicator:i},setup(){return{args:s}},template:`
            <div style="width: 600px; display: flex; gap: 10px; flex-wrap: wrap;">
                <div style="display:flex; gap: 8px">
                    <StatusIndicator
                        themeColor="info"
                        variant="filled"
                        :prefix="args.prefix"
                        :size="args.size"
                        :className="args.className"
                    >
                        Information
                    </StatusIndicator>
                    <StatusIndicator
                        themeColor="success"
                        variant="filled"
                        :prefix="args.prefix"
                        :size="args.size"
                        :className="args.className"
                    >
                        Success
                    </StatusIndicator>
                    <StatusIndicator
                        themeColor="warning"
                        variant="filled"
                        :prefix="args.prefix"
                        :size="args.size"
                        :className="args.className"
                    >
                        Warning
                    </StatusIndicator>
                    <StatusIndicator
                        themeColor="error"
                        variant="filled"
                        :prefix="args.prefix"
                        :size="args.size"
                        :className="args.className"
                    >
                        Error
                    </StatusIndicator>
                    <StatusIndicator
                        themeColor="neutral"
                        variant="filled"
                        :prefix="args.prefix"
                        :size="args.size"
                        :className="args.className"
                    >
                        Disable
                    </StatusIndicator>
                </div>
                
                <div style="display:flex; gap: 8px">
                    <StatusIndicator
                        themeColor="info"
                        variant="text"
                        :prefix="args.prefix"
                        :size="args.size"
                        :className="args.className"
                    >
                        Information
                    </StatusIndicator>
                    <StatusIndicator
                        themeColor="success"
                        variant="text"
                        :prefix="args.prefix"
                        :size="args.size"
                        :className="args.className"
                    >
                        Success
                    </StatusIndicator>
                    <StatusIndicator
                        themeColor="warning"
                        variant="text"
                        :prefix="args.prefix"
                        :size="args.size"
                        :className="args.className"
                    >
                        Warning
                    </StatusIndicator>
                    <StatusIndicator
                        themeColor="error"
                        variant="text"
                        :prefix="args.prefix"
                        :size="args.size"
                        :className="args.className"
                    >
                        Error
                    </StatusIndicator>
                    <StatusIndicator
                        themeColor="neutral"
                        variant="text"
                        :prefix="args.prefix"
                        :size="args.size"
                        :className="args.className"
                    >
                        Disable
                    </StatusIndicator>
                </div>
                
                <div style="display:flex; gap: 8px">
                    <StatusIndicator
                        themeColor="info"
                        variant="filled"
                        prefix="SvgInfoCircle"
                        :size="args.size"
                        :className="args.className"
                    >
                        Information
                    </StatusIndicator>
                    <StatusIndicator
                        themeColor="success"
                        variant="filled"
                        prefix="SvgSuccessCircle"
                        :size="args.size"
                        :className="args.className"
                    >
                        Success
                    </StatusIndicator>
                    <StatusIndicator
                        themeColor="warning"
                        variant="filled"
                        prefix="SvgWarningTri"
                        :size="args.size"
                        :className="args.className"
                    >
                        Warning
                    </StatusIndicator>
                    <StatusIndicator
                        themeColor="error"
                        variant="filled"
                        prefix="SvgErrorCircle"
                        :size="args.size"
                        :className="args.className"
                    >
                        Error
                    </StatusIndicator>
                    <StatusIndicator
                        themeColor="neutral"
                        variant="filled"
                        prefix="SvgDisableCircle"
                        :size="args.size"
                        :className="args.className"
                    >
                        Disable
                    </StatusIndicator>
                </div>
                
                <div style="display:flex; gap: 8px">
                    <StatusIndicator
                        themeColor="info"
                        variant="text"
                        prefix="SvgInfoCircle"
                        :size="args.size"
                        :className="args.className"
                    >
                        Information
                    </StatusIndicator>
                    <StatusIndicator
                        themeColor="success"
                        variant="text"
                        prefix="SvgSuccessCircle"
                        :size="args.size"
                        :className="args.className"
                    >
                        Success
                    </StatusIndicator>
                    <StatusIndicator
                        themeColor="warning"
                        variant="text"
                        prefix="SvgWarningTri"
                        :size="args.size"
                        :className="args.className"
                    >
                        Warning
                    </StatusIndicator>
                    <StatusIndicator
                        themeColor="error"
                        variant="text"
                        prefix="SvgErrorCircle"
                        :size="args.size"
                        :className="args.className"
                    >
                        Error
                    </StatusIndicator>
                    <StatusIndicator
                        themeColor="neutral"
                        variant="text"
                        prefix="SvgDisableCircle"
                        :size="args.size"
                        :className="args.className"
                    >
                        Disable
                    </StatusIndicator>
                </div>
            </div>
        `}),parameters:{controls:{exclude:["themeColor","default","variant","prefix"]},docs:{source:{transform:(s,t)=>{const{args:a}=t;return["<script setup>",'import { StatusIndicator } from "@ded-wds-vue/ui";',"<\/script>","","<template>","  <StatusIndicator",'    themeColor="info"','    variant="filled"',`    ${a.prefix?`prefix="${a.prefix}"`:""}`,`    ${a.size?`size="${a.size}"`:""}`,`    ${a.className?`className="${a.className}"`:""}`,"  >","    Information","  </StatusIndicator>","  <StatusIndicator",'    themeColor="success"','    variant="filled"',`    ${a.prefix?`prefix="${a.prefix}"`:""}`,`    ${a.size?`size="${a.size}"`:""}`,`    ${a.className?`className="${a.className}"`:""}`,"  >","    Success","  </StatusIndicator>","  <StatusIndicator",'    themeColor="warning"','    variant="filled"',`    ${a.prefix?`prefix="${a.prefix}"`:""}`,`    ${a.size?`size="${a.size}"`:""}`,`    ${a.className?`className="${a.className}"`:""}`,"  >","    Warning","  </StatusIndicator>","  <StatusIndicator",'    themeColor="error"','    variant="filled"',`    ${a.prefix?`prefix="${a.prefix}"`:""}`,`    ${a.size?`size="${a.size}"`:""}`,`    ${a.className?`className="${a.className}"`:""}`,"  >","    Error","  </StatusIndicator>","  <StatusIndicator",'    themeColor="neutral"','    variant="filled"',`    ${a.prefix?`prefix="${a.prefix}"`:""}`,`    ${a.size?`size="${a.size}"`:""}`,`    ${a.className?`className="${a.className}"`:""}`,"  >","    Disable","  </StatusIndicator>","","  <StatusIndicator",'    themeColor="info"','    variant="text"',`    ${a.prefix?`prefix="${a.prefix}"`:""}`,`    ${a.size?`size="${a.size}"`:""}`,`    ${a.className?`className="${a.className}"`:""}`,"  >","    Information","  </StatusIndicator>","  <StatusIndicator",'    themeColor="success"','    variant="text"',`    ${a.prefix?`prefix="${a.prefix}"`:""}`,`    ${a.size?`size="${a.size}"`:""}`,`    ${a.className?`className="${a.className}"`:""}`,"  >","    Success","  </StatusIndicator>","  <StatusIndicator",'    themeColor="warning"','    variant="text"',`    ${a.prefix?`prefix="${a.prefix}"`:""}`,`    ${a.size?`size="${a.size}"`:""}`,`    ${a.className?`className="${a.className}"`:""}`,"  >","    Warning","  </StatusIndicator>","  <StatusIndicator",'    themeColor="error"','    variant="text"',`    ${a.prefix?`prefix="${a.prefix}"`:""}`,`    ${a.size?`size="${a.size}"`:""}`,`    ${a.className?`className="${a.className}"`:""}`,"  >","    Error","  </StatusIndicator>","  <StatusIndicator",'    themeColor="neutral"','    variant="text"',`    ${a.prefix?`prefix="${a.prefix}"`:""}`,`    ${a.size?`size="${a.size}"`:""}`,`    ${a.className?`className="${a.className}"`:""}`,"  >","    Disable","  </StatusIndicator>","  <StatusIndicator",'    themeColor="info"','    variant="filled"','    prefix="SvgInfoCircle"',`    ${a.size?`size="${a.size}"`:""}`,`    ${a.className?`className="${a.className}"`:""}`,"  >","    Information","  </StatusIndicator>","  <StatusIndicator",'    themeColor="success"','    variant="filled"','    prefix="SvgSuccessCircle"',`    ${a.size?`size="${a.size}"`:""}`,`    ${a.className?`className="${a.className}"`:""}`,"  >","    Success","  </StatusIndicator>","  <StatusIndicator",'    themeColor="warning"','    variant="filled"','    prefix="SvgWarningTri"',`    ${a.size?`size="${a.size}"`:""}`,`    ${a.className?`className="${a.className}"`:""}`,"  >","    Warning","  </StatusIndicator>","  <StatusIndicator",'    themeColor="error"','    variant="filled"','    prefix="SvgErrorCircle"',`    ${a.size?`size="${a.size}"`:""}`,`    ${a.className?`className="${a.className}"`:""}`,"  >","    Error","  </StatusIndicator>","  <StatusIndicator",'    themeColor="neutral"','    variant="filled"','    prefix="SvgDisableCircle"',`    ${a.size?`size="${a.size}"`:""}`,`    ${a.className?`className="${a.className}"`:""}`,"  >","    Disable","  </StatusIndicator>","","  <StatusIndicator",'    themeColor="info"','    variant="text"','    prefix="SvgInfoCircle"',`    ${a.size?`size="${a.size}"`:""}`,`    ${a.className?`className="${a.className}"`:""}`,"  >","    Information","  </StatusIndicator>","  <StatusIndicator",'    themeColor="success"','    variant="text"','    prefix="SvgSuccessCircle"',`    ${a.size?`size="${a.size}"`:""}`,`    ${a.className?`className="${a.className}"`:""}`,"  >","    Success","  </StatusIndicator>","  <StatusIndicator",'    themeColor="warning"','    variant="text"','    prefix="SvgWarningTri"',`    ${a.size?`size="${a.size}"`:""}`,`    ${a.className?`className="${a.className}"`:""}`,"  >","    Warning","  </StatusIndicator>","  <StatusIndicator",'    themeColor="error"','    variant="text"','    prefix="SvgErrorCircle"',`    ${a.size?`size="${a.size}"`:""}`,`    ${a.className?`className="${a.className}"`:""}`,"  >","    Error","  </StatusIndicator>","  <StatusIndicator",'    themeColor="neutral"','    variant="text"','    prefix="SvgDisableCircle"',`    ${a.size?`size="${a.size}"`:""}`,`    ${a.className?`className="${a.className}"`:""}`,"  >","    Disable","  </StatusIndicator>","</template>"].filter(Boolean).join(`
`).trim()}}}}};var n,c,o;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  name: "預設項目",
  args: {
    themeColor: "success",
    variant: "filled",
    prefix: "",
    size: "medium",
    className: '',
    default: "Success"
  },
  render: args => ({
    components: {
      StatusIndicator
    },
    setup() {
      return {
        args
      };
    },
    template: \`
            <StatusIndicator
                :themeColor="args.themeColor"
                :variant="args.variant"
                :prefix="args.prefix"
                :size="args.size"
                :className="args.className"
            >
                {{args.default}}
            </StatusIndicator>
        \`
  }),
  parameters: {
    controls: {
      // include or exclude keys as needed
    },
    docs: {
      source: {
        transform: (src, storyContext) => {
          const {
            args
          } = storyContext;
          return [\`<script setup>\`, \`import { StatusIndicator } from "@ded-wds-vue/ui";\`, \`<\/script>\`, '', '<template>', \`  <StatusIndicator\`, \`    \${args.themeColor ? \`themeColor="\${args.themeColor}"\` : ""}\`, \`    \${args.variant ? \`variant="\${args.variant}"\` : ""}\`, \`    \${args.prefix ? \`prefix="\${args.prefix}"\` : ""}\`, \`    \${args.size ? \`size="\${args.size}"\` : ""}\`, \`    \${args.className ? \`className="\${args.className}"\` : ""}\`, \`  >\`, \`    \${args.default || ""}\`, \`  </StatusIndicator>\`, '</template>'].filter(Boolean).join("\\n").trim();
        }
      }
    }
  }
}`,...(o=(c=e.parameters)==null?void 0:c.docs)==null?void 0:o.source}}};var l,m,g;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:'{\n  name: "主題色彩",\n  args: {\n    themeColor: "",\n    variant: "",\n    prefix: "",\n    size: "medium",\n    className: ""\n  },\n  render: args => ({\n    components: {\n      StatusIndicator\n    },\n    setup() {\n      return {\n        args\n      };\n    },\n    template: `\n            <div style="width: 600px; display: flex; gap: 10px; flex-wrap: wrap;">\n                <div style="display:flex; gap: 8px">\n                    <StatusIndicator\n                        themeColor="info"\n                        variant="filled"\n                        :prefix="args.prefix"\n                        :size="args.size"\n                        :className="args.className"\n                    >\n                        Information\n                    </StatusIndicator>\n                    <StatusIndicator\n                        themeColor="success"\n                        variant="filled"\n                        :prefix="args.prefix"\n                        :size="args.size"\n                        :className="args.className"\n                    >\n                        Success\n                    </StatusIndicator>\n                    <StatusIndicator\n                        themeColor="warning"\n                        variant="filled"\n                        :prefix="args.prefix"\n                        :size="args.size"\n                        :className="args.className"\n                    >\n                        Warning\n                    </StatusIndicator>\n                    <StatusIndicator\n                        themeColor="error"\n                        variant="filled"\n                        :prefix="args.prefix"\n                        :size="args.size"\n                        :className="args.className"\n                    >\n                        Error\n                    </StatusIndicator>\n                    <StatusIndicator\n                        themeColor="neutral"\n                        variant="filled"\n                        :prefix="args.prefix"\n                        :size="args.size"\n                        :className="args.className"\n                    >\n                        Disable\n                    </StatusIndicator>\n                </div>\n                \n                <div style="display:flex; gap: 8px">\n                    <StatusIndicator\n                        themeColor="info"\n                        variant="text"\n                        :prefix="args.prefix"\n                        :size="args.size"\n                        :className="args.className"\n                    >\n                        Information\n                    </StatusIndicator>\n                    <StatusIndicator\n                        themeColor="success"\n                        variant="text"\n                        :prefix="args.prefix"\n                        :size="args.size"\n                        :className="args.className"\n                    >\n                        Success\n                    </StatusIndicator>\n                    <StatusIndicator\n                        themeColor="warning"\n                        variant="text"\n                        :prefix="args.prefix"\n                        :size="args.size"\n                        :className="args.className"\n                    >\n                        Warning\n                    </StatusIndicator>\n                    <StatusIndicator\n                        themeColor="error"\n                        variant="text"\n                        :prefix="args.prefix"\n                        :size="args.size"\n                        :className="args.className"\n                    >\n                        Error\n                    </StatusIndicator>\n                    <StatusIndicator\n                        themeColor="neutral"\n                        variant="text"\n                        :prefix="args.prefix"\n                        :size="args.size"\n                        :className="args.className"\n                    >\n                        Disable\n                    </StatusIndicator>\n                </div>\n                \n                <div style="display:flex; gap: 8px">\n                    <StatusIndicator\n                        themeColor="info"\n                        variant="filled"\n                        prefix="SvgInfoCircle"\n                        :size="args.size"\n                        :className="args.className"\n                    >\n                        Information\n                    </StatusIndicator>\n                    <StatusIndicator\n                        themeColor="success"\n                        variant="filled"\n                        prefix="SvgSuccessCircle"\n                        :size="args.size"\n                        :className="args.className"\n                    >\n                        Success\n                    </StatusIndicator>\n                    <StatusIndicator\n                        themeColor="warning"\n                        variant="filled"\n                        prefix="SvgWarningTri"\n                        :size="args.size"\n                        :className="args.className"\n                    >\n                        Warning\n                    </StatusIndicator>\n                    <StatusIndicator\n                        themeColor="error"\n                        variant="filled"\n                        prefix="SvgErrorCircle"\n                        :size="args.size"\n                        :className="args.className"\n                    >\n                        Error\n                    </StatusIndicator>\n                    <StatusIndicator\n                        themeColor="neutral"\n                        variant="filled"\n                        prefix="SvgDisableCircle"\n                        :size="args.size"\n                        :className="args.className"\n                    >\n                        Disable\n                    </StatusIndicator>\n                </div>\n                \n                <div style="display:flex; gap: 8px">\n                    <StatusIndicator\n                        themeColor="info"\n                        variant="text"\n                        prefix="SvgInfoCircle"\n                        :size="args.size"\n                        :className="args.className"\n                    >\n                        Information\n                    </StatusIndicator>\n                    <StatusIndicator\n                        themeColor="success"\n                        variant="text"\n                        prefix="SvgSuccessCircle"\n                        :size="args.size"\n                        :className="args.className"\n                    >\n                        Success\n                    </StatusIndicator>\n                    <StatusIndicator\n                        themeColor="warning"\n                        variant="text"\n                        prefix="SvgWarningTri"\n                        :size="args.size"\n                        :className="args.className"\n                    >\n                        Warning\n                    </StatusIndicator>\n                    <StatusIndicator\n                        themeColor="error"\n                        variant="text"\n                        prefix="SvgErrorCircle"\n                        :size="args.size"\n                        :className="args.className"\n                    >\n                        Error\n                    </StatusIndicator>\n                    <StatusIndicator\n                        themeColor="neutral"\n                        variant="text"\n                        prefix="SvgDisableCircle"\n                        :size="args.size"\n                        :className="args.className"\n                    >\n                        Disable\n                    </StatusIndicator>\n                </div>\n            </div>\n        `\n  }),\n  parameters: {\n    controls: {\n      // include or exclude keys as needed\n      exclude: ["themeColor", "default", "variant", "prefix"]\n    },\n    docs: {\n      source: {\n        transform: (src, storyContext) => {\n          const {\n            args\n          } = storyContext;\n          return [`<script setup>`, `import { StatusIndicator } from "@ded-wds-vue/ui";`, `<\/script>`, \'\', \'<template>\', `  <StatusIndicator`, `    themeColor="info"`, `    variant="filled"`, `    ${args.prefix ? `prefix="${args.prefix}"` : ""}`, `    ${args.size ? `size="${args.size}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, `  >`, `    Information`, `  </StatusIndicator>`, `  <StatusIndicator`, `    themeColor="success"`, `    variant="filled"`, `    ${args.prefix ? `prefix="${args.prefix}"` : ""}`, `    ${args.size ? `size="${args.size}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, `  >`, `    Success`, `  </StatusIndicator>`, `  <StatusIndicator`, `    themeColor="warning"`, `    variant="filled"`, `    ${args.prefix ? `prefix="${args.prefix}"` : ""}`, `    ${args.size ? `size="${args.size}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, `  >`, `    Warning`, `  </StatusIndicator>`, `  <StatusIndicator`, `    themeColor="error"`, `    variant="filled"`, `    ${args.prefix ? `prefix="${args.prefix}"` : ""}`, `    ${args.size ? `size="${args.size}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, `  >`, `    Error`, `  </StatusIndicator>`, `  <StatusIndicator`, `    themeColor="neutral"`, `    variant="filled"`, `    ${args.prefix ? `prefix="${args.prefix}"` : ""}`, `    ${args.size ? `size="${args.size}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, `  >`, `    Disable`, `  </StatusIndicator>`, \'\', `  <StatusIndicator`, `    themeColor="info"`, `    variant="text"`, `    ${args.prefix ? `prefix="${args.prefix}"` : ""}`, `    ${args.size ? `size="${args.size}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, `  >`, `    Information`, `  </StatusIndicator>`, `  <StatusIndicator`, `    themeColor="success"`, `    variant="text"`, `    ${args.prefix ? `prefix="${args.prefix}"` : ""}`, `    ${args.size ? `size="${args.size}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, `  >`, `    Success`, `  </StatusIndicator>`, `  <StatusIndicator`, `    themeColor="warning"`, `    variant="text"`, `    ${args.prefix ? `prefix="${args.prefix}"` : ""}`, `    ${args.size ? `size="${args.size}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, `  >`, `    Warning`, `  </StatusIndicator>`, `  <StatusIndicator`, `    themeColor="error"`, `    variant="text"`, `    ${args.prefix ? `prefix="${args.prefix}"` : ""}`, `    ${args.size ? `size="${args.size}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, `  >`, `    Error`, `  </StatusIndicator>`, `  <StatusIndicator`, `    themeColor="neutral"`, `    variant="text"`, `    ${args.prefix ? `prefix="${args.prefix}"` : ""}`, `    ${args.size ? `size="${args.size}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, `  >`, `    Disable`, `  </StatusIndicator>`, `  <StatusIndicator`, `    themeColor="info"`, `    variant="filled"`, `    prefix="SvgInfoCircle"`, `    ${args.size ? `size="${args.size}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, `  >`, `    Information`, `  </StatusIndicator>`, `  <StatusIndicator`, `    themeColor="success"`, `    variant="filled"`, `    prefix="SvgSuccessCircle"`, `    ${args.size ? `size="${args.size}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, `  >`, `    Success`, `  </StatusIndicator>`, `  <StatusIndicator`, `    themeColor="warning"`, `    variant="filled"`, `    prefix="SvgWarningTri"`, `    ${args.size ? `size="${args.size}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, `  >`, `    Warning`, `  </StatusIndicator>`, `  <StatusIndicator`, `    themeColor="error"`, `    variant="filled"`, `    prefix="SvgErrorCircle"`, `    ${args.size ? `size="${args.size}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, `  >`, `    Error`, `  </StatusIndicator>`, `  <StatusIndicator`, `    themeColor="neutral"`, `    variant="filled"`, `    prefix="SvgDisableCircle"`, `    ${args.size ? `size="${args.size}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, `  >`, `    Disable`, `  </StatusIndicator>`, \'\', `  <StatusIndicator`, `    themeColor="info"`, `    variant="text"`, `    prefix="SvgInfoCircle"`, `    ${args.size ? `size="${args.size}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, `  >`, `    Information`, `  </StatusIndicator>`, `  <StatusIndicator`, `    themeColor="success"`, `    variant="text"`, `    prefix="SvgSuccessCircle"`, `    ${args.size ? `size="${args.size}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, `  >`, `    Success`, `  </StatusIndicator>`, `  <StatusIndicator`, `    themeColor="warning"`, `    variant="text"`, `    prefix="SvgWarningTri"`, `    ${args.size ? `size="${args.size}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, `  >`, `    Warning`, `  </StatusIndicator>`, `  <StatusIndicator`, `    themeColor="error"`, `    variant="text"`, `    prefix="SvgErrorCircle"`, `    ${args.size ? `size="${args.size}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, `  >`, `    Error`, `  </StatusIndicator>`, `  <StatusIndicator`, `    themeColor="neutral"`, `    variant="text"`, `    prefix="SvgDisableCircle"`, `    ${args.size ? `size="${args.size}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, `  >`, `    Disable`, `  </StatusIndicator>`, \'</template>\'].filter(Boolean).join("\\n").trim();\n        }\n      }\n    }\n  }\n}',...(g=(m=r.parameters)==null?void 0:m.docs)==null?void 0:g.source}}};const S=["StatusIndicatorDefault","StatusIndicatorColors"];export{r as StatusIndicatorColors,e as StatusIndicatorDefault,S as __namedExportsOrder,p as default};

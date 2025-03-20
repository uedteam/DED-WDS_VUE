import{_ as i}from"./StatusIndicator-DCuv6WFp.js";import"./vue.esm-bundler-CC1hEtM-.js";import"./Icon-C3V5hff5.js";const d={title:"Component/Status-Indicator",component:i,tags:["autodocs"],argTypes:{themeColor:{description:"主題顏色",control:{type:"select"},options:["primary","secondary","neutral","info","success","warning","error"],table:{type:{summary:"primary | secondary | neutral | info | success | warning | error"}}},variant:{description:"按鈕樣式",required:!0,control:{type:"select"},options:["text","soft","filled"],table:{type:{summary:"text | soft | filled "}}},isShowDot:{description:"是否顯示圓點",control:{type:"boolean"}},prefix:{description:"前綴元素",control:{type:"select",labels:{"":"none",SvgInfoCircle:"SvgInfoCircle",SvgSuccessCircle:"SvgSuccessCircle",SvgWarningTri:"SvgWarningTri",SvgErrorCircle:"SvgErrorCircle",SvgQuestionCircle:"SvgQuestionCircle",SvgDisableCircle:"SvgDisableCircle"}},options:["","SvgInfoCircle","SvgSuccessCircle","SvgWarningTri","SvgErrorCircle","SvgQuestionCircle","SvgDisableCircle"]},size:{description:"尺寸",control:{type:"select"},options:["small","medium","large"],table:{type:{summary:"small | medium | large "}}},className:{description:"客製化樣式",control:{type:"text"}},default:{description:"內容",control:{type:"text"},table:{type:{summary:"Vue Component | HTML"}}}},parameters:{docs:{title:"StatusIndicator",description:{component:"狀態指示組件的呈現及說明。"}}}},e={name:"預設項目",args:{themeColor:"success",variant:"filled",isShowDot:!1,prefix:"",size:"medium",className:"",default:"Success"},render:a=>({components:{StatusIndicator:i},setup(){return{args:a}},template:`
      <StatusIndicator
        :themeColor="args.themeColor"
        :variant="args.variant"
        :isShowDot="args.isShowDot"
        :prefix="args.prefix"
        :size="args.size"
        :className="args.className"
      >
        {{args.default}}
      </StatusIndicator>`}),parameters:{controls:{},docs:{source:{transform:(a,t)=>{const{args:s}=t;return["<script setup>",'import { StatusIndicator } from "@ded-wds-vue/ui";',"<\/script>","","<template>","  <StatusIndicator",`    ${s.themeColor?`themeColor="${s.themeColor}"`:""}`,`    ${s.variant?`variant="${s.variant}"`:""}`,`    ${s.isShowDot?`:isShowDot="${s.isShowDot}"`:""}`,`    ${s.prefix?`prefix="${s.prefix}"`:""}`,`    ${s.size?`size="${s.size}"`:""}`,`    ${s.className?`className="${s.className}"`:""}`,"  >",`    ${s.default||""}`,"  </StatusIndicator>","</template>"].filter(Boolean).join(`
`).trim()}}}}},r={name:"主題色彩",args:{themeColor:"",variant:"",isShowDot:!0,prefix:"",size:"medium",className:""},render:a=>({components:{StatusIndicator:i},setup(){return{args:a}},template:`
      <div style="width: 600px; display: flex; gap: 10px; flex-wrap: wrap;">
        <div style="display: flex; gap: 8px">
          <StatusIndicator
            themeColor="info"
            variant="filled"
            :isShowDot="args.isShowDot"
            :prefix="args.prefix"
            :size="args.size"
            :className="args.className"
          >
            Information
          </StatusIndicator>
      
          <StatusIndicator
            themeColor="success"
            variant="filled"
            :isShowDot="args.isShowDot"
            :prefix="args.prefix"
            :size="args.size"
            :className="args.className"
          >
            Success
          </StatusIndicator>
      
          <StatusIndicator
            themeColor="warning"
            variant="filled"
            :isShowDot="args.isShowDot"
            :prefix="args.prefix"
            :size="args.size"
            :className="args.className"
          >
            Warning
          </StatusIndicator>
      
          <StatusIndicator
            themeColor="error"
            variant="filled"
            :isShowDot="args.isShowDot"
            :prefix="args.prefix"
            :size="args.size"
            :className="args.className"
          >
            Error
          </StatusIndicator>
      
          <StatusIndicator
            themeColor="neutral"
            variant="filled"
            :isShowDot="args.isShowDot"
            :prefix="args.prefix"
            :size="args.size"
            :className="args.className"
          >
            Disable
          </StatusIndicator>
        </div>
      
        <div style="display: flex; gap: 8px">
          <StatusIndicator
            themeColor="info"
            variant="text"
            :isShowDot="args.isShowDot"
            :prefix="args.prefix"
            :size="args.size"
            :className="args.className"
          >
            Information
          </StatusIndicator>
      
          <StatusIndicator
            themeColor="success"
            variant="text"
            :isShowDot="args.isShowDot"
            :prefix="args.prefix"
            :size="args.size"
            :className="args.className"
          >
            Success
          </StatusIndicator>
      
          <StatusIndicator
            themeColor="warning"
            variant="text"
            :isShowDot="args.isShowDot"
            :prefix="args.prefix"
            :size="args.size"
            :className="args.className"
          >
            Warning
          </StatusIndicator>
      
          <StatusIndicator
            themeColor="error"
            variant="text"
            :isShowDot="args.isShowDot"
            :prefix="args.prefix"
            :size="args.size"
            :className="args.className"
          >
            Error
          </StatusIndicator>
      
          <StatusIndicator
            themeColor="neutral"
            variant="text"
            :isShowDot="args.isShowDot"
            :prefix="args.prefix"
            :size="args.size"
            :className="args.className"
          >
            Disable
          </StatusIndicator>
        </div>
      </div>
      `}),parameters:{controls:{exclude:["themeColor","default","variant","prefix"]},docs:{source:{transform:(a,t)=>{const{args:s}=t;return["<script setup>",'import { StatusIndicator } from "@ded-wds-vue/ui";',"<\/script>","","<template>","  <StatusIndicator",'    themeColor="info"','    variant="filled"',`    ${s.isShowDot?`:isShowDot="${s.isShowDot}"`:""}`,`    ${s.prefix?`prefix="${s.prefix}"`:""}`,`    ${s.size?`size="${s.size}"`:""}`,`    ${s.className?`className="${s.className}"`:""}`,"  >","    Information","  </StatusIndicator>","  <StatusIndicator",'    themeColor="success"','    variant="filled"',`    ${s.isShowDot?`:isShowDot="${s.isShowDot}"`:""}`,`    ${s.prefix?`prefix="${s.prefix}"`:""}`,`    ${s.size?`size="${s.size}"`:""}`,`    ${s.className?`className="${s.className}"`:""}`,"  >","    Success","  </StatusIndicator>","  <StatusIndicator",'    themeColor="warning"','    variant="filled"',`    ${s.isShowDot?`:isShowDot="${s.isShowDot}"`:""}`,`    ${s.prefix?`prefix="${s.prefix}"`:""}`,`    ${s.size?`size="${s.size}"`:""}`,`    ${s.className?`className="${s.className}"`:""}`,"  >","    Warning","  </StatusIndicator>","  <StatusIndicator",'    themeColor="error"','    variant="filled"',`    ${s.isShowDot?`:isShowDot="${s.isShowDot}"`:""}`,`    ${s.prefix?`prefix="${s.prefix}"`:""}`,`    ${s.size?`size="${s.size}"`:""}`,`    ${s.className?`className="${s.className}"`:""}`,"  >","    Error","  </StatusIndicator>","  <StatusIndicator",'    themeColor="neutral"','    variant="filled"',`    ${s.isShowDot?`:isShowDot="${s.isShowDot}"`:""}`,`    ${s.prefix?`prefix="${s.prefix}"`:""}`,`    ${s.size?`size="${s.size}"`:""}`,`    ${s.className?`className="${s.className}"`:""}`,"  >","    Disable","  </StatusIndicator>","","  <StatusIndicator",'    themeColor="info"','    variant="text"',`    ${s.isShowDot?`:isShowDot="${s.isShowDot}"`:""}`,`    ${s.prefix?`prefix="${s.prefix}"`:""}`,`    ${s.size?`size="${s.size}"`:""}`,`    ${s.className?`className="${s.className}"`:""}`,"  >","    Information","  </StatusIndicator>","  <StatusIndicator",'    themeColor="success"','    variant="text"',`    ${s.isShowDot?`:isShowDot="${s.isShowDot}"`:""}`,`    ${s.prefix?`prefix="${s.prefix}"`:""}`,`    ${s.size?`size="${s.size}"`:""}`,`    ${s.className?`className="${s.className}"`:""}`,"  >","    Success","  </StatusIndicator>","  <StatusIndicator",'    themeColor="warning"','    variant="text"',`    ${s.isShowDot?`:isShowDot="${s.isShowDot}"`:""}`,`    ${s.prefix?`prefix="${s.prefix}"`:""}`,`    ${s.size?`size="${s.size}"`:""}`,`    ${s.className?`className="${s.className}"`:""}`,"  >","    Warning","  </StatusIndicator>","  <StatusIndicator",'    themeColor="error"','    variant="text"',`    ${s.isShowDot?`:isShowDot="${s.isShowDot}"`:""}`,`    ${s.prefix?`prefix="${s.prefix}"`:""}`,`    ${s.size?`size="${s.size}"`:""}`,`    ${s.className?`className="${s.className}"`:""}`,"  >","    Error","  </StatusIndicator>","  <StatusIndicator",'    themeColor="neutral"','    variant="text"',`    ${s.isShowDot?`:isShowDot="${s.isShowDot}"`:""}`,`    ${s.prefix?`prefix="${s.prefix}"`:""}`,`    ${s.size?`size="${s.size}"`:""}`,`    ${s.className?`className="${s.className}"`:""}`,"  >","    Disable","  </StatusIndicator>","  <StatusIndicator",'    themeColor="info"','    variant="filled"','    :isShowDot="false"','    prefix="SvgInfoCircle"',`    ${s.size?`size="${s.size}"`:""}`,`    ${s.className?`className="${s.className}"`:""}`,"  >","    Information","  </StatusIndicator>","  <StatusIndicator",'    themeColor="success"','    variant="filled"','    :isShowDot="false"','    prefix="SvgSuccessCircle"',`    ${s.size?`size="${s.size}"`:""}`,`    ${s.className?`className="${s.className}"`:""}`,"  >","    Success","  </StatusIndicator>","  <StatusIndicator",'    themeColor="warning"','    variant="filled"','    :isShowDot="false"','    prefix="SvgWarningTri"',`    ${s.size?`size="${s.size}"`:""}`,`    ${s.className?`className="${s.className}"`:""}`,"  >","    Warning","  </StatusIndicator>","  <StatusIndicator",'    themeColor="error"','    variant="filled"','    :isShowDot="false"','    prefix="SvgErrorCircle"',`    ${s.size?`size="${s.size}"`:""}`,`    ${s.className?`className="${s.className}"`:""}`,"  >","    Error","  </StatusIndicator>","  <StatusIndicator",'    themeColor="neutral"','    variant="filled"','    :isShowDot="false"','    prefix="SvgDisableCircle"',`    ${s.size?`size="${s.size}"`:""}`,`    ${s.className?`className="${s.className}"`:""}`,"  >","    Disable","  </StatusIndicator>","","  <StatusIndicator",'    themeColor="info"','    variant="text"','    :isShowDot="false"','    prefix="SvgInfoCircle"',`    ${s.size?`size="${s.size}"`:""}`,`    ${s.className?`className="${s.className}"`:""}`,"  >","    Information","  </StatusIndicator>","  <StatusIndicator",'    themeColor="success"','    variant="text"','    :isShowDot="false"','    prefix="SvgSuccessCircle"',`    ${s.size?`size="${s.size}"`:""}`,`    ${s.className?`className="${s.className}"`:""}`,"  >","    Success","  </StatusIndicator>","  <StatusIndicator",'    themeColor="warning"','    variant="text"','    :isShowDot="false"','    prefix="SvgWarningTri"',`    ${s.size?`size="${s.size}"`:""}`,`    ${s.className?`className="${s.className}"`:""}`,"  >","    Warning","  </StatusIndicator>","  <StatusIndicator",'    themeColor="error"','    variant="text"','    :isShowDot="false"','    prefix="SvgErrorCircle"',`    ${s.size?`size="${s.size}"`:""}`,`    ${s.className?`className="${s.className}"`:""}`,"  >","    Error","  </StatusIndicator>","  <StatusIndicator",'    themeColor="neutral"','    variant="text"','    :isShowDot="false"','    prefix="SvgDisableCircle"',`    ${s.size?`size="${s.size}"`:""}`,`    ${s.className?`className="${s.className}"`:""}`,"  >","    Disable","  </StatusIndicator>","</template>"].filter(Boolean).join(`
`).trim()}}}}};var o,n,c;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:'{\n  name: "預設項目",\n  args: {\n    themeColor: "success",\n    variant: "filled",\n    isShowDot: false,\n    prefix: "",\n    size: "medium",\n    className: "",\n    default: "Success"\n  },\n  render: args => ({\n    components: {\n      StatusIndicator\n    },\n    setup() {\n      return {\n        args\n      };\n    },\n    template: `\n      <StatusIndicator\n        :themeColor="args.themeColor"\n        :variant="args.variant"\n        :isShowDot="args.isShowDot"\n        :prefix="args.prefix"\n        :size="args.size"\n        :className="args.className"\n      >\n        {{args.default}}\n      </StatusIndicator>`\n  }),\n  parameters: {\n    controls: {\n      // include or exclude keys as needed\n    },\n    docs: {\n      source: {\n        transform: (src, storyContext) => {\n          const {\n            args\n          } = storyContext;\n          return [`<script setup>`, `import { StatusIndicator } from "@ded-wds-vue/ui";`, `<\/script>`, "", "<template>", `  <StatusIndicator`, `    ${args.themeColor ? `themeColor="${args.themeColor}"` : ""}`, `    ${args.variant ? `variant="${args.variant}"` : ""}`, `    ${args.isShowDot ? `:isShowDot="${args.isShowDot}"` : ""}`, `    ${args.prefix ? `prefix="${args.prefix}"` : ""}`, `    ${args.size ? `size="${args.size}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, `  >`, `    ${args.default || ""}`, `  </StatusIndicator>`, "</template>"].filter(Boolean).join("\\n").trim();\n        }\n      }\n    }\n  }\n}',...(c=(n=e.parameters)==null?void 0:n.docs)==null?void 0:c.source}}};var l,m,S;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:'{\n  name: "主題色彩",\n  args: {\n    themeColor: "",\n    variant: "",\n    isShowDot: true,\n    prefix: "",\n    size: "medium",\n    className: ""\n  },\n  render: args => ({\n    components: {\n      StatusIndicator\n    },\n    setup() {\n      return {\n        args\n      };\n    },\n    template: `\n      <div style="width: 600px; display: flex; gap: 10px; flex-wrap: wrap;">\n        <div style="display: flex; gap: 8px">\n          <StatusIndicator\n            themeColor="info"\n            variant="filled"\n            :isShowDot="args.isShowDot"\n            :prefix="args.prefix"\n            :size="args.size"\n            :className="args.className"\n          >\n            Information\n          </StatusIndicator>\n      \n          <StatusIndicator\n            themeColor="success"\n            variant="filled"\n            :isShowDot="args.isShowDot"\n            :prefix="args.prefix"\n            :size="args.size"\n            :className="args.className"\n          >\n            Success\n          </StatusIndicator>\n      \n          <StatusIndicator\n            themeColor="warning"\n            variant="filled"\n            :isShowDot="args.isShowDot"\n            :prefix="args.prefix"\n            :size="args.size"\n            :className="args.className"\n          >\n            Warning\n          </StatusIndicator>\n      \n          <StatusIndicator\n            themeColor="error"\n            variant="filled"\n            :isShowDot="args.isShowDot"\n            :prefix="args.prefix"\n            :size="args.size"\n            :className="args.className"\n          >\n            Error\n          </StatusIndicator>\n      \n          <StatusIndicator\n            themeColor="neutral"\n            variant="filled"\n            :isShowDot="args.isShowDot"\n            :prefix="args.prefix"\n            :size="args.size"\n            :className="args.className"\n          >\n            Disable\n          </StatusIndicator>\n        </div>\n      \n        <div style="display: flex; gap: 8px">\n          <StatusIndicator\n            themeColor="info"\n            variant="text"\n            :isShowDot="args.isShowDot"\n            :prefix="args.prefix"\n            :size="args.size"\n            :className="args.className"\n          >\n            Information\n          </StatusIndicator>\n      \n          <StatusIndicator\n            themeColor="success"\n            variant="text"\n            :isShowDot="args.isShowDot"\n            :prefix="args.prefix"\n            :size="args.size"\n            :className="args.className"\n          >\n            Success\n          </StatusIndicator>\n      \n          <StatusIndicator\n            themeColor="warning"\n            variant="text"\n            :isShowDot="args.isShowDot"\n            :prefix="args.prefix"\n            :size="args.size"\n            :className="args.className"\n          >\n            Warning\n          </StatusIndicator>\n      \n          <StatusIndicator\n            themeColor="error"\n            variant="text"\n            :isShowDot="args.isShowDot"\n            :prefix="args.prefix"\n            :size="args.size"\n            :className="args.className"\n          >\n            Error\n          </StatusIndicator>\n      \n          <StatusIndicator\n            themeColor="neutral"\n            variant="text"\n            :isShowDot="args.isShowDot"\n            :prefix="args.prefix"\n            :size="args.size"\n            :className="args.className"\n          >\n            Disable\n          </StatusIndicator>\n        </div>\n      </div>\n      `\n  }),\n  parameters: {\n    controls: {\n      // include or exclude keys as needed\n      exclude: ["themeColor", "default", "variant", "prefix"]\n    },\n    docs: {\n      source: {\n        transform: (src, storyContext) => {\n          const {\n            args\n          } = storyContext;\n          return [`<script setup>`, `import { StatusIndicator } from "@ded-wds-vue/ui";`, `<\/script>`, "", "<template>", `  <StatusIndicator`, `    themeColor="info"`, `    variant="filled"`, `    ${args.isShowDot ? `:isShowDot="${args.isShowDot}"` : ""}`, `    ${args.prefix ? `prefix="${args.prefix}"` : ""}`, `    ${args.size ? `size="${args.size}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, `  >`, `    Information`, `  </StatusIndicator>`, `  <StatusIndicator`, `    themeColor="success"`, `    variant="filled"`, `    ${args.isShowDot ? `:isShowDot="${args.isShowDot}"` : ""}`, `    ${args.prefix ? `prefix="${args.prefix}"` : ""}`, `    ${args.size ? `size="${args.size}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, `  >`, `    Success`, `  </StatusIndicator>`, `  <StatusIndicator`, `    themeColor="warning"`, `    variant="filled"`, `    ${args.isShowDot ? `:isShowDot="${args.isShowDot}"` : ""}`, `    ${args.prefix ? `prefix="${args.prefix}"` : ""}`, `    ${args.size ? `size="${args.size}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, `  >`, `    Warning`, `  </StatusIndicator>`, `  <StatusIndicator`, `    themeColor="error"`, `    variant="filled"`, `    ${args.isShowDot ? `:isShowDot="${args.isShowDot}"` : ""}`, `    ${args.prefix ? `prefix="${args.prefix}"` : ""}`, `    ${args.size ? `size="${args.size}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, `  >`, `    Error`, `  </StatusIndicator>`, `  <StatusIndicator`, `    themeColor="neutral"`, `    variant="filled"`, `    ${args.isShowDot ? `:isShowDot="${args.isShowDot}"` : ""}`, `    ${args.prefix ? `prefix="${args.prefix}"` : ""}`, `    ${args.size ? `size="${args.size}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, `  >`, `    Disable`, `  </StatusIndicator>`, "", `  <StatusIndicator`, `    themeColor="info"`, `    variant="text"`, `    ${args.isShowDot ? `:isShowDot="${args.isShowDot}"` : ""}`, `    ${args.prefix ? `prefix="${args.prefix}"` : ""}`, `    ${args.size ? `size="${args.size}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, `  >`, `    Information`, `  </StatusIndicator>`, `  <StatusIndicator`, `    themeColor="success"`, `    variant="text"`, `    ${args.isShowDot ? `:isShowDot="${args.isShowDot}"` : ""}`, `    ${args.prefix ? `prefix="${args.prefix}"` : ""}`, `    ${args.size ? `size="${args.size}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, `  >`, `    Success`, `  </StatusIndicator>`, `  <StatusIndicator`, `    themeColor="warning"`, `    variant="text"`, `    ${args.isShowDot ? `:isShowDot="${args.isShowDot}"` : ""}`, `    ${args.prefix ? `prefix="${args.prefix}"` : ""}`, `    ${args.size ? `size="${args.size}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, `  >`, `    Warning`, `  </StatusIndicator>`, `  <StatusIndicator`, `    themeColor="error"`, `    variant="text"`, `    ${args.isShowDot ? `:isShowDot="${args.isShowDot}"` : ""}`, `    ${args.prefix ? `prefix="${args.prefix}"` : ""}`, `    ${args.size ? `size="${args.size}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, `  >`, `    Error`, `  </StatusIndicator>`, `  <StatusIndicator`, `    themeColor="neutral"`, `    variant="text"`, `    ${args.isShowDot ? `:isShowDot="${args.isShowDot}"` : ""}`, `    ${args.prefix ? `prefix="${args.prefix}"` : ""}`, `    ${args.size ? `size="${args.size}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, `  >`, `    Disable`, `  </StatusIndicator>`, `  <StatusIndicator`, `    themeColor="info"`, `    variant="filled"`, `    :isShowDot="false"`, `    prefix="SvgInfoCircle"`, `    ${args.size ? `size="${args.size}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, `  >`, `    Information`, `  </StatusIndicator>`, `  <StatusIndicator`, `    themeColor="success"`, `    variant="filled"`, `    :isShowDot="false"`, `    prefix="SvgSuccessCircle"`, `    ${args.size ? `size="${args.size}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, `  >`, `    Success`, `  </StatusIndicator>`, `  <StatusIndicator`, `    themeColor="warning"`, `    variant="filled"`, `    :isShowDot="false"`, `    prefix="SvgWarningTri"`, `    ${args.size ? `size="${args.size}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, `  >`, `    Warning`, `  </StatusIndicator>`, `  <StatusIndicator`, `    themeColor="error"`, `    variant="filled"`, `    :isShowDot="false"`, `    prefix="SvgErrorCircle"`, `    ${args.size ? `size="${args.size}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, `  >`, `    Error`, `  </StatusIndicator>`, `  <StatusIndicator`, `    themeColor="neutral"`, `    variant="filled"`, `    :isShowDot="false"`, `    prefix="SvgDisableCircle"`, `    ${args.size ? `size="${args.size}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, `  >`, `    Disable`, `  </StatusIndicator>`, "", `  <StatusIndicator`, `    themeColor="info"`, `    variant="text"`, `    :isShowDot="false"`, `    prefix="SvgInfoCircle"`, `    ${args.size ? `size="${args.size}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, `  >`, `    Information`, `  </StatusIndicator>`, `  <StatusIndicator`, `    themeColor="success"`, `    variant="text"`, `    :isShowDot="false"`, `    prefix="SvgSuccessCircle"`, `    ${args.size ? `size="${args.size}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, `  >`, `    Success`, `  </StatusIndicator>`, `  <StatusIndicator`, `    themeColor="warning"`, `    variant="text"`, `    :isShowDot="false"`, `    prefix="SvgWarningTri"`, `    ${args.size ? `size="${args.size}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, `  >`, `    Warning`, `  </StatusIndicator>`, `  <StatusIndicator`, `    themeColor="error"`, `    variant="text"`, `    :isShowDot="false"`, `    prefix="SvgErrorCircle"`, `    ${args.size ? `size="${args.size}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, `  >`, `    Error`, `  </StatusIndicator>`, `  <StatusIndicator`, `    themeColor="neutral"`, `    variant="text"`, `    :isShowDot="false"`, `    prefix="SvgDisableCircle"`, `    ${args.size ? `size="${args.size}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, `  >`, `    Disable`, `  </StatusIndicator>`, "</template>"].filter(Boolean).join("\\n").trim();\n        }\n      }\n    }\n  }\n}',...(S=(m=r.parameters)==null?void 0:m.docs)==null?void 0:S.source}}};const f=["StatusIndicatorDefault","StatusIndicatorColors"];export{r as StatusIndicatorColors,e as StatusIndicatorDefault,f as __namedExportsOrder,d as default};

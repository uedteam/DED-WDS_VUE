import{_ as i}from"./StatusIndicator-58SsyeOa.js";import"./vue.esm-bundler-BQySH7jJ.js";import"./Icon-f9eBqVFj.js";import"./iframe-C0k4Wqte.js";import"../sb-preview/runtime.js";const S={title:"Component/Status-Indicator",component:i,tags:["autodocs"],argTypes:{themeColor:{description:"主題顏色",control:{type:"select"},options:["primary","secondary","neutral","info","success","warning","error"],table:{type:{summary:"primary | secondary | neutral | info | success | warning | error"}}},variant:{description:"按鈕樣式",required:!0,control:{type:"select"},options:["text","filled"],table:{type:{summary:"text | filled "}}},prefix:{description:"前綴元素",control:{type:"select",labels:{"":"none",InfoCircleIcon:"InfoCircleIcon",SuccessCircleIcon:"SuccessCircleIcon",WarningCircleIcon:"WarningCircleIcon",ErrorCircleIcon:"ErrorCircleIcon",QuestionCircleIcon:"QuestionCircleIcon",DisableCircleIcon:"DisableCircleIcon"}},options:["","InfoCircleIcon","SuccessCircleIcon","WarningCircleIcon","ErrorCircleIcon","QuestionCircleIcon","DisableCircleIcon"]},size:{description:"尺寸",control:{type:"select"},options:["small","medium","large"],table:{type:{summary:"small | medium | large "}}},className:{description:"客製化樣式",control:{type:"text"}},default:{description:"內容",control:{type:"text"},table:{type:{summary:"Vue Component | HTML"}}}},parameters:{docs:{title:"StatusIndicator",description:{component:"StatusIndicator 組件的呈現及說明。"}}}},e={name:"預設項目",args:{themeColor:"success",variant:"filled",prefix:"",size:"medium",className:"",default:"Success"},render:s=>({components:{StatusIndicator:i},setup(){return{args:s}},template:`
            <StatusIndicator
                :themeColor="args.themeColor"
                :variant="args.variant"
                :prefix="args.prefix"
                :size="args.size"
                :className="args.className"
            >
                {{args.default}}
            </StatusIndicator>
        `}),parameters:{controls:{},docs:{source:{transform:(s,t)=>{const{args:a}=t;return["<StatusIndicator",`  themeColor="${a.themeColor}"`,`  variant="${a.variant}"`,`  prefix="${a.prefix}"`,`  size="${a.size}"`,`  className="${a.className}"`,">",`  ${a.default}`,"</StatusIndicator>"].join(`
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
                        prefix="InfoCircleIcon"
                        :size="args.size"
                        :className="args.className"
                    >
                        Information
                    </StatusIndicator>
                    <StatusIndicator
                        themeColor="success"
                        variant="filled"
                        prefix="SuccessCircleIcon"
                        :size="args.size"
                        :className="args.className"
                    >
                        Success
                    </StatusIndicator>
                    <StatusIndicator
                        themeColor="warning"
                        variant="filled"
                        prefix="WarningCircleIcon"
                        :size="args.size"
                        :className="args.className"
                    >
                        Warning
                    </StatusIndicator>
                    <StatusIndicator
                        themeColor="error"
                        variant="filled"
                        prefix="ErrorCircleIcon"
                        :size="args.size"
                        :className="args.className"
                    >
                        Error
                    </StatusIndicator>
                    <StatusIndicator
                        themeColor="neutral"
                        variant="filled"
                        prefix="DisableCircleIcon"
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
                        prefix="InfoCircleIcon"
                        :size="args.size"
                        :className="args.className"
                    >
                        Information
                    </StatusIndicator>
                    <StatusIndicator
                        themeColor="success"
                        variant="text"
                        prefix="SuccessCircleIcon"
                        :size="args.size"
                        :className="args.className"
                    >
                        Success
                    </StatusIndicator>
                    <StatusIndicator
                        themeColor="warning"
                        variant="text"
                        prefix="WarningCircleIcon"
                        :size="args.size"
                        :className="args.className"
                    >
                        Warning
                    </StatusIndicator>
                    <StatusIndicator
                        themeColor="error"
                        variant="text"
                        prefix="ErrorCircleIcon"
                        :size="args.size"
                        :className="args.className"
                    >
                        Error
                    </StatusIndicator>
                    <StatusIndicator
                        themeColor="neutral"
                        variant="text"
                        prefix="DisableCircleIcon"
                        :size="args.size"
                        :className="args.className"
                    >
                        Disable
                    </StatusIndicator>
                </div>
            </div>
        `}),parameters:{controls:{},docs:{source:{transform:(s,t)=>{const{args:a}=t;return["<StatusIndicator",'  themeColor="info"','  variant="filled"',`  :prefix="${a.prefix}"`,`  :size="${a.size}"`,`  :className="${a.className}"`,">","  Information","</StatusIndicator>","<StatusIndicator",'  themeColor="success"','  variant="filled"',`  :prefix="${a.prefix}"`,`  :size="${a.size}"`,`  :className="${a.className}"`,">","  Success","</StatusIndicator>","<StatusIndicator",'  themeColor="warning"','  variant="filled"',`  :prefix="${a.prefix}"`,`  :size="${a.size}"`,`  :className="${a.className}"`,">","  Warning","</StatusIndicator>","<StatusIndicator",'  themeColor="error"','  variant="filled"',`  :prefix="${a.prefix}"`,`  :size="${a.size}"`,`  :className="${a.className}"`,">","  Error","</StatusIndicator>","<StatusIndicator",'  themeColor="neutral"','  variant="filled"',`  :prefix="${a.prefix}"`,`  :size="${a.size}"`,`  :className="${a.className}"`,">","  Disable","</StatusIndicator>","<StatusIndicator",'  themeColor="info"','  variant="text"',`  :prefix="${a.prefix}"`,`  :size="${a.size}"`,`  :className="${a.className}"`,">","  Information","</StatusIndicator>","<StatusIndicator",'  themeColor="success"','  variant="text"',`  :prefix="${a.prefix}"`,`  :size="${a.size}"`,`  :className="${a.className}"`,">","  Success","</StatusIndicator>","<StatusIndicator",'  themeColor="warning"','  variant="text"',`  :prefix="${a.prefix}"`,`  :size="${a.size}"`,`  :className="${a.className}"`,">","  Warning","</StatusIndicator>","<StatusIndicator",'  themeColor="error"','  variant="text"',`  :prefix="${a.prefix}"`,`  :size="${a.size}"`,`  :className="${a.className}"`,">","  Error","</StatusIndicator>","<StatusIndicator",'  themeColor="neutral"','  variant="text"',`  :prefix="${a.prefix}"`,`  :size="${a.size}"`,`  :className="${a.className}"`,">","  Disable","</StatusIndicator>","<StatusIndicator",'  themeColor="info"','  variant="filled"','  prefix="InfoCircleIcon"',`  :size="${a.size}"`,`  :className="${a.className}"`,">","  Information","</StatusIndicator>","<StatusIndicator",'  themeColor="success"','  variant="filled"','  prefix="SuccessCircleIcon"',`  :size="${a.size}"`,`  :className="${a.className}"`,">","  Success","</StatusIndicator>","<StatusIndicator",'  themeColor="warning"','  variant="filled"','  prefix="WarningCircleIcon"',`  :size="${a.size}"`,`  :className="${a.className}"`,">","  Warning","</StatusIndicator>","<StatusIndicator",'  themeColor="error"','  variant="filled"','  prefix="ErrorCircleIcon"',`  :size="${a.size}"`,`  :className="${a.className}"`,">","  Error","</StatusIndicator>","<StatusIndicator",'  themeColor="neutral"','  variant="filled"','  prefix="DisableCircleIcon"',`  :size="${a.size}"`,`  :className="${a.className}"`,">","  Disable","</StatusIndicator>","<StatusIndicator",'  themeColor="info"','  variant="text"','  prefix="InfoCircleIcon"',`  :size="${a.size}"`,`  :className="${a.className}"`,">","  Information","</StatusIndicator>","<StatusIndicator",'  themeColor="success"','  variant="text"','  prefix="SuccessCircleIcon"',`  :size="${a.size}"`,`  :className="${a.className}"`,">","  Success","</StatusIndicator>","<StatusIndicator",'  themeColor="warning"','  variant="text"','  prefix="WarningCircleIcon"',`  :size="${a.size}"`,`  :className="${a.className}"`,">","  Warning","</StatusIndicator>","<StatusIndicator",'  themeColor="error"','  variant="text"','  prefix="ErrorCircleIcon"',`  :size="${a.size}"`,`  :className="${a.className}"`,">","  Error","</StatusIndicator>","<StatusIndicator",'  themeColor="neutral"','  variant="text"','  prefix="DisableCircleIcon"',`  :size="${a.size}"`,`  :className="${a.className}"`,">","  Disable","</StatusIndicator>"].join(`
`).trim()}}}}};var n,o,c;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
          return [\`<StatusIndicator\`, \`  themeColor="\${args.themeColor}"\`, \`  variant="\${args.variant}"\`, \`  prefix="\${args.prefix}"\`, \`  size="\${args.size}"\`, \`  className="\${args.className}"\`, \`>\`, \`  \${args.default}\`, \`</StatusIndicator>\`].join("\\n").trim();
        }
      }
    }
  }
}`,...(c=(o=e.parameters)==null?void 0:o.docs)==null?void 0:c.source}}};var l,m,u;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:'{\n  name: "主題色彩",\n  args: {\n    themeColor: "",\n    variant: "",\n    prefix: "",\n    size: "medium",\n    className: ""\n  },\n  render: args => ({\n    components: {\n      StatusIndicator\n    },\n    setup() {\n      return {\n        args\n      };\n    },\n    template: `\n            <div style="width: 600px; display: flex; gap: 10px; flex-wrap: wrap;">\n                <div style="display:flex; gap: 8px">\n                    <StatusIndicator\n                        themeColor="info"\n                        variant="filled"\n                        :prefix="args.prefix"\n                        :size="args.size"\n                        :className="args.className"\n                    >\n                        Information\n                    </StatusIndicator>\n                    <StatusIndicator\n                        themeColor="success"\n                        variant="filled"\n                        :prefix="args.prefix"\n                        :size="args.size"\n                        :className="args.className"\n                    >\n                        Success\n                    </StatusIndicator>\n                    <StatusIndicator\n                        themeColor="warning"\n                        variant="filled"\n                        :prefix="args.prefix"\n                        :size="args.size"\n                        :className="args.className"\n                    >\n                        Warning\n                    </StatusIndicator>\n                    <StatusIndicator\n                        themeColor="error"\n                        variant="filled"\n                        :prefix="args.prefix"\n                        :size="args.size"\n                        :className="args.className"\n                    >\n                        Error\n                    </StatusIndicator>\n                    <StatusIndicator\n                        themeColor="neutral"\n                        variant="filled"\n                        :prefix="args.prefix"\n                        :size="args.size"\n                        :className="args.className"\n                    >\n                        Disable\n                    </StatusIndicator>\n                </div>\n                <div style="display:flex; gap: 8px">\n                    <StatusIndicator\n                        themeColor="info"\n                        variant="text"\n                        :prefix="args.prefix"\n                        :size="args.size"\n                        :className="args.className"\n                    >\n                        Information\n                    </StatusIndicator>\n                    <StatusIndicator\n                        themeColor="success"\n                        variant="text"\n                        :prefix="args.prefix"\n                        :size="args.size"\n                        :className="args.className"\n                    >\n                        Success\n                    </StatusIndicator>\n                    <StatusIndicator\n                        themeColor="warning"\n                        variant="text"\n                        :prefix="args.prefix"\n                        :size="args.size"\n                        :className="args.className"\n                    >\n                        Warning\n                    </StatusIndicator>\n                    <StatusIndicator\n                        themeColor="error"\n                        variant="text"\n                        :prefix="args.prefix"\n                        :size="args.size"\n                        :className="args.className"\n                    >\n                        Error\n                    </StatusIndicator>\n                    <StatusIndicator\n                        themeColor="neutral"\n                        variant="text"\n                        :prefix="args.prefix"\n                        :size="args.size"\n                        :className="args.className"\n                    >\n                        Disable\n                    </StatusIndicator>\n                </div>\n                <div style="display:flex; gap: 8px">\n                    <StatusIndicator\n                        themeColor="info"\n                        variant="filled"\n                        prefix="InfoCircleIcon"\n                        :size="args.size"\n                        :className="args.className"\n                    >\n                        Information\n                    </StatusIndicator>\n                    <StatusIndicator\n                        themeColor="success"\n                        variant="filled"\n                        prefix="SuccessCircleIcon"\n                        :size="args.size"\n                        :className="args.className"\n                    >\n                        Success\n                    </StatusIndicator>\n                    <StatusIndicator\n                        themeColor="warning"\n                        variant="filled"\n                        prefix="WarningCircleIcon"\n                        :size="args.size"\n                        :className="args.className"\n                    >\n                        Warning\n                    </StatusIndicator>\n                    <StatusIndicator\n                        themeColor="error"\n                        variant="filled"\n                        prefix="ErrorCircleIcon"\n                        :size="args.size"\n                        :className="args.className"\n                    >\n                        Error\n                    </StatusIndicator>\n                    <StatusIndicator\n                        themeColor="neutral"\n                        variant="filled"\n                        prefix="DisableCircleIcon"\n                        :size="args.size"\n                        :className="args.className"\n                    >\n                        Disable\n                    </StatusIndicator>\n                </div>\n                <div style="display:flex; gap: 8px">\n                    <StatusIndicator\n                        themeColor="info"\n                        variant="text"\n                        prefix="InfoCircleIcon"\n                        :size="args.size"\n                        :className="args.className"\n                    >\n                        Information\n                    </StatusIndicator>\n                    <StatusIndicator\n                        themeColor="success"\n                        variant="text"\n                        prefix="SuccessCircleIcon"\n                        :size="args.size"\n                        :className="args.className"\n                    >\n                        Success\n                    </StatusIndicator>\n                    <StatusIndicator\n                        themeColor="warning"\n                        variant="text"\n                        prefix="WarningCircleIcon"\n                        :size="args.size"\n                        :className="args.className"\n                    >\n                        Warning\n                    </StatusIndicator>\n                    <StatusIndicator\n                        themeColor="error"\n                        variant="text"\n                        prefix="ErrorCircleIcon"\n                        :size="args.size"\n                        :className="args.className"\n                    >\n                        Error\n                    </StatusIndicator>\n                    <StatusIndicator\n                        themeColor="neutral"\n                        variant="text"\n                        prefix="DisableCircleIcon"\n                        :size="args.size"\n                        :className="args.className"\n                    >\n                        Disable\n                    </StatusIndicator>\n                </div>\n            </div>\n        `\n  }),\n  parameters: {\n    controls: {\n      // include or exclude keys as needed\n    },\n    docs: {\n      source: {\n        transform: (src, storyContext) => {\n          const {\n            args\n          } = storyContext;\n          return [`<StatusIndicator`, `  themeColor="info"`, `  variant="filled"`, `  :prefix="${args.prefix}"`, `  :size="${args.size}"`, `  :className="${args.className}"`, `>`, `  Information`, `</StatusIndicator>`, `<StatusIndicator`, `  themeColor="success"`, `  variant="filled"`, `  :prefix="${args.prefix}"`, `  :size="${args.size}"`, `  :className="${args.className}"`, `>`, `  Success`, `</StatusIndicator>`, `<StatusIndicator`, `  themeColor="warning"`, `  variant="filled"`, `  :prefix="${args.prefix}"`, `  :size="${args.size}"`, `  :className="${args.className}"`, `>`, `  Warning`, `</StatusIndicator>`, `<StatusIndicator`, `  themeColor="error"`, `  variant="filled"`, `  :prefix="${args.prefix}"`, `  :size="${args.size}"`, `  :className="${args.className}"`, `>`, `  Error`, `</StatusIndicator>`, `<StatusIndicator`, `  themeColor="neutral"`, `  variant="filled"`, `  :prefix="${args.prefix}"`, `  :size="${args.size}"`, `  :className="${args.className}"`, `>`, `  Disable`, `</StatusIndicator>`, `<StatusIndicator`, `  themeColor="info"`, `  variant="text"`, `  :prefix="${args.prefix}"`, `  :size="${args.size}"`, `  :className="${args.className}"`, `>`, `  Information`, `</StatusIndicator>`, `<StatusIndicator`, `  themeColor="success"`, `  variant="text"`, `  :prefix="${args.prefix}"`, `  :size="${args.size}"`, `  :className="${args.className}"`, `>`, `  Success`, `</StatusIndicator>`, `<StatusIndicator`, `  themeColor="warning"`, `  variant="text"`, `  :prefix="${args.prefix}"`, `  :size="${args.size}"`, `  :className="${args.className}"`, `>`, `  Warning`, `</StatusIndicator>`, `<StatusIndicator`, `  themeColor="error"`, `  variant="text"`, `  :prefix="${args.prefix}"`, `  :size="${args.size}"`, `  :className="${args.className}"`, `>`, `  Error`, `</StatusIndicator>`, `<StatusIndicator`, `  themeColor="neutral"`, `  variant="text"`, `  :prefix="${args.prefix}"`, `  :size="${args.size}"`, `  :className="${args.className}"`, `>`, `  Disable`, `</StatusIndicator>`, `<StatusIndicator`, `  themeColor="info"`, `  variant="filled"`, `  prefix="InfoCircleIcon"`, `  :size="${args.size}"`, `  :className="${args.className}"`, `>`, `  Information`, `</StatusIndicator>`, `<StatusIndicator`, `  themeColor="success"`, `  variant="filled"`, `  prefix="SuccessCircleIcon"`, `  :size="${args.size}"`, `  :className="${args.className}"`, `>`, `  Success`, `</StatusIndicator>`, `<StatusIndicator`, `  themeColor="warning"`, `  variant="filled"`, `  prefix="WarningCircleIcon"`, `  :size="${args.size}"`, `  :className="${args.className}"`, `>`, `  Warning`, `</StatusIndicator>`, `<StatusIndicator`, `  themeColor="error"`, `  variant="filled"`, `  prefix="ErrorCircleIcon"`, `  :size="${args.size}"`, `  :className="${args.className}"`, `>`, `  Error`, `</StatusIndicator>`, `<StatusIndicator`, `  themeColor="neutral"`, `  variant="filled"`, `  prefix="DisableCircleIcon"`, `  :size="${args.size}"`, `  :className="${args.className}"`, `>`, `  Disable`, `</StatusIndicator>`, `<StatusIndicator`, `  themeColor="info"`, `  variant="text"`, `  prefix="InfoCircleIcon"`, `  :size="${args.size}"`, `  :className="${args.className}"`, `>`, `  Information`, `</StatusIndicator>`, `<StatusIndicator`, `  themeColor="success"`, `  variant="text"`, `  prefix="SuccessCircleIcon"`, `  :size="${args.size}"`, `  :className="${args.className}"`, `>`, `  Success`, `</StatusIndicator>`, `<StatusIndicator`, `  themeColor="warning"`, `  variant="text"`, `  prefix="WarningCircleIcon"`, `  :size="${args.size}"`, `  :className="${args.className}"`, `>`, `  Warning`, `</StatusIndicator>`, `<StatusIndicator`, `  themeColor="error"`, `  variant="text"`, `  prefix="ErrorCircleIcon"`, `  :size="${args.size}"`, `  :className="${args.className}"`, `>`, `  Error`, `</StatusIndicator>`, `<StatusIndicator`, `  themeColor="neutral"`, `  variant="text"`, `  prefix="DisableCircleIcon"`, `  :size="${args.size}"`, `  :className="${args.className}"`, `>`, `  Disable`, `</StatusIndicator>`].join("\\n").trim();\n        }\n      }\n    }\n  }\n}',...(u=(m=r.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};const x=["StatusIndicatorDefault","StatusIndicatorColors"];export{r as StatusIndicatorColors,e as StatusIndicatorDefault,x as __namedExportsOrder,S as default};

import{_ as n}from"./StatusIndicator-C4To6D4H.js";import"./vue.esm-bundler-qCK_iSPY.js";import"./Icon-CVEqTX2T.js";import"./iframe-ChCRMyiJ.js";import"../sb-preview/runtime.js";const x={title:"Component/Status-Indicator",component:n,tags:["autodocs"],argTypes:{themeColor:{description:"主題顏色",control:{type:"select"},options:["primary","secondary","neutral","info","success","warning","error"],table:{type:{summary:"primary | secondary | neutral | info | success | warning | error"}}},variant:{description:"按鈕樣式",required:!0,control:{type:"select"},options:["text","filled"],table:{type:{summary:"text | filled "}}},prefix:{description:"前綴元素",control:{type:"select",labels:{"":"none",SvgInfoCircle:"SvgInfoCircle",SvgSuccessCircle:"SvgSuccessCircle",SvgWarningTri:"SvgWarningTri",SvgErrorCircle:"SvgErrorCircle",SvgQuestionCircle:"SvgQuestionCircle",SvgDisableCircle:"SvgDisableCircle"}},options:["","SvgInfoCircle","SvgSuccessCircle","SvgWarningTri","SvgErrorCircle","SvgQuestionCircle","SvgDisableCircle"]},size:{description:"尺寸",control:{type:"select"},options:["small","medium","large"],table:{type:{summary:"small | medium | large "}}},className:{description:"客製化樣式",control:{type:"text"}},default:{description:"內容",control:{type:"text"},table:{type:{summary:"Vue Component | HTML"}}}},parameters:{docs:{title:"StatusIndicator",description:{component:"狀態指示組件的呈現及說明。"}}}},e={name:"預設項目",args:{themeColor:"success",variant:"filled",prefix:"",size:"medium",className:"",default:"Success"},render:s=>({components:{StatusIndicator:n},setup(){return{args:s}},template:`
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
`).trim()}}}}},r={name:"主題色彩",args:{themeColor:"",variant:"",prefix:"",size:"medium",className:""},render:s=>({components:{StatusIndicator:n},setup(){return{args:s}},template:`
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
        `}),parameters:{controls:{exclude:["themeColor","default","variant","prefix"]},docs:{source:{transform:(s,t)=>{const{args:a}=t;return["<StatusIndicator",'  themeColor="info"','  variant="text"',`  :prefix="${a.prefix}"`,`  :size="${a.size}"`,`  :className="${a.className}"`,">","  Information","</StatusIndicator>","<StatusIndicator",'  themeColor="success"','  variant="text"',`  :prefix="${a.prefix}"`,`  :size="${a.size}"`,`  :className="${a.className}"`,">","  Success","</StatusIndicator>","<StatusIndicator",'  themeColor="warning"','  variant="text"',`  :prefix="${a.prefix}"`,`  :size="${a.size}"`,`  :className="${a.className}"`,">","  Warning","</StatusIndicator>","<StatusIndicator",'  themeColor="error"','  variant="text"',`  :prefix="${a.prefix}"`,`  :size="${a.size}"`,`  :className="${a.className}"`,">","  Error","</StatusIndicator>","<StatusIndicator",'  themeColor="neutral"','  variant="text"',`  :prefix="${a.prefix}"`,`  :size="${a.size}"`,`  :className="${a.className}"`,">","  Disable","</StatusIndicator>","<StatusIndicator",'  themeColor="info"','  variant="text"','  prefix="SvgInfoCircle"',`  :size="${a.size}"`,`  :className="${a.className}"`,">","  Information","</StatusIndicator>","<StatusIndicator",'  themeColor="success"','  variant="text"','  prefix="SvgSuccessCircle"',`  :size="${a.size}"`,`  :className="${a.className}"`,">","  Success","</StatusIndicator>","<StatusIndicator",'  themeColor="warning"','  variant="text"','  prefix="SvgWarningTri"',`  :size="${a.size}"`,`  :className="${a.className}"`,">","  Warning","</StatusIndicator>","<StatusIndicator",'  themeColor="error"','  variant="text"','  prefix="SvgErrorCircle"',`  :size="${a.size}"`,`  :className="${a.className}"`,">","  Error","</StatusIndicator>","<StatusIndicator",'  themeColor="neutral"','  variant="text"','  prefix="SvgDisableCircle"',`  :size="${a.size}"`,`  :className="${a.className}"`,">","  Disable","</StatusIndicator>"].join(`
`).trim()}}}}};var i,o,c;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(c=(o=e.parameters)==null?void 0:o.docs)==null?void 0:c.source}}};var l,m,u;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  name: "主題色彩",
  args: {
    themeColor: "",
    variant: "",
    prefix: "",
    size: "medium",
    className: ""
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
        \`
  }),
  parameters: {
    controls: {
      // include or exclude keys as needed
      exclude: ["themeColor", "default", "variant", "prefix"]
    },
    docs: {
      source: {
        transform: (src, storyContext) => {
          const {
            args
          } = storyContext;
          return [\`<StatusIndicator\`, \`  themeColor="info"\`, \`  variant="text"\`, \`  :prefix="\${args.prefix}"\`, \`  :size="\${args.size}"\`, \`  :className="\${args.className}"\`, \`>\`, \`  Information\`, \`</StatusIndicator>\`, \`<StatusIndicator\`, \`  themeColor="success"\`, \`  variant="text"\`, \`  :prefix="\${args.prefix}"\`, \`  :size="\${args.size}"\`, \`  :className="\${args.className}"\`, \`>\`, \`  Success\`, \`</StatusIndicator>\`, \`<StatusIndicator\`, \`  themeColor="warning"\`, \`  variant="text"\`, \`  :prefix="\${args.prefix}"\`, \`  :size="\${args.size}"\`, \`  :className="\${args.className}"\`, \`>\`, \`  Warning\`, \`</StatusIndicator>\`, \`<StatusIndicator\`, \`  themeColor="error"\`, \`  variant="text"\`, \`  :prefix="\${args.prefix}"\`, \`  :size="\${args.size}"\`, \`  :className="\${args.className}"\`, \`>\`, \`  Error\`, \`</StatusIndicator>\`, \`<StatusIndicator\`, \`  themeColor="neutral"\`, \`  variant="text"\`, \`  :prefix="\${args.prefix}"\`, \`  :size="\${args.size}"\`, \`  :className="\${args.className}"\`, \`>\`, \`  Disable\`, \`</StatusIndicator>\`, \`<StatusIndicator\`, \`  themeColor="info"\`, \`  variant="text"\`, \`  prefix="SvgInfoCircle"\`, \`  :size="\${args.size}"\`, \`  :className="\${args.className}"\`, \`>\`, \`  Information\`, \`</StatusIndicator>\`, \`<StatusIndicator\`, \`  themeColor="success"\`, \`  variant="text"\`, \`  prefix="SvgSuccessCircle"\`, \`  :size="\${args.size}"\`, \`  :className="\${args.className}"\`, \`>\`, \`  Success\`, \`</StatusIndicator>\`, \`<StatusIndicator\`, \`  themeColor="warning"\`, \`  variant="text"\`, \`  prefix="SvgWarningTri"\`, \`  :size="\${args.size}"\`, \`  :className="\${args.className}"\`, \`>\`, \`  Warning\`, \`</StatusIndicator>\`, \`<StatusIndicator\`, \`  themeColor="error"\`, \`  variant="text"\`, \`  prefix="SvgErrorCircle"\`, \`  :size="\${args.size}"\`, \`  :className="\${args.className}"\`, \`>\`, \`  Error\`, \`</StatusIndicator>\`, \`<StatusIndicator\`, \`  themeColor="neutral"\`, \`  variant="text"\`, \`  prefix="SvgDisableCircle"\`, \`  :size="\${args.size}"\`, \`  :className="\${args.className}"\`, \`>\`, \`  Disable\`, \`</StatusIndicator>\`].join("\\n").trim();
        }
      }
    }
  }
}`,...(u=(m=r.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};const I=["StatusIndicatorDefault","StatusIndicatorColors"];export{r as StatusIndicatorColors,e as StatusIndicatorDefault,I as __namedExportsOrder,x as default};

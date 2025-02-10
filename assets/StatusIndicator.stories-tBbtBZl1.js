import{_ as n}from"./StatusIndicator-Do0-ovWs.js";import"./vue.esm-bundler-Db4pcR2I.js";import"./Icon-DbRQxRx8.js";import"./iframe-G7TsRw4U.js";import"../sb-preview/runtime.js";const x={title:"Component/Status-Indicator",component:n,tags:["autodocs"],argTypes:{themeColor:{description:"主題顏色",control:{type:"select"},options:["primary","secondary","neutral","info","success","warning","error"],table:{type:{summary:"primary | secondary | neutral | info | success | warning | error"}}},variant:{description:"按鈕樣式",required:!0,control:{type:"select"},options:["text","filled"],table:{type:{summary:"text | filled "}}},prefix:{description:"前綴元素",control:{type:"select",labels:{"":"none",SvgInfoCircle:"SvgInfoCircle",SvgSuccessCircle:"SvgSuccessCircle",SvgWarningTri:"SvgWarningTri",SvgErrorCircle:"SvgErrorCircle",SvgQuestionCircle:"SvgQuestionCircle",SvgDisableCircle:"SvgDisableCircle"}},options:["","SvgInfoCircle","SvgSuccessCircle","SvgWarningTri","SvgErrorCircle","SvgQuestionCircle","SvgDisableCircle"]},size:{description:"尺寸",control:{type:"select"},options:["small","medium","large"],table:{type:{summary:"small | medium | large "}}},className:{description:"客製化樣式",control:{type:"text"}},default:{description:"內容",control:{type:"text"},table:{type:{summary:"Vue Component | HTML"}}}},parameters:{docs:{title:"StatusIndicator",description:{component:"狀態指示組件的呈現及說明。"}}}},s={name:"預設項目",args:{themeColor:"success",variant:"text",prefix:"",size:"medium",className:"",default:"Success"},render:a=>({components:{StatusIndicator:n},setup(){return{args:a}},template:`
            <StatusIndicator
                :themeColor="args.themeColor"
                :variant="args.variant"
                :prefix="args.prefix"
                :size="args.size"
                :className="args.className"
            >
                {{args.default}}
            </StatusIndicator>
        `}),parameters:{controls:{},docs:{source:{transform:(a,r)=>{const{args:t}=r;return["<StatusIndicator",`  themeColor="${t.themeColor}"`,`  variant="${t.variant}"`,`  prefix="${t.prefix}"`,`  size="${t.size}"`,`  className="${t.className}"`,">",`  ${t.default}`,"</StatusIndicator>"].join(`
`).trim()}}}}},e={name:"主題色彩",args:{themeColor:"",variant:"",prefix:"",size:"medium",className:""},render:a=>({components:{StatusIndicator:n},setup(){return{args:a}},template:`
            <div style="width: 600px; display: flex; gap: 10px; flex-wrap: wrap;">
<!--				<div style="display:flex; gap: 8px">-->
<!--					<StatusIndicator-->
<!--						themeColor="info"-->
<!--						variant="filled"-->
<!--						:prefix="args.prefix"-->
<!--						:size="args.size"-->
<!--						:className="args.className"-->
<!--					>-->
<!--						Information-->
<!--					</StatusIndicator>-->
<!--					<StatusIndicator-->
<!--						themeColor="success"-->
<!--						variant="filled"-->
<!--						:prefix="args.prefix"-->
<!--						:size="args.size"-->
<!--						:className="args.className"-->
<!--					>-->
<!--						Success-->
<!--					</StatusIndicator>-->
<!--					<StatusIndicator-->
<!--						themeColor="warning"-->
<!--						variant="filled"-->
<!--						:prefix="args.prefix"-->
<!--						:size="args.size"-->
<!--						:className="args.className"-->
<!--					>-->
<!--						Warning-->
<!--					</StatusIndicator>-->
<!--					<StatusIndicator-->
<!--						themeColor="error"-->
<!--						variant="filled"-->
<!--						:prefix="args.prefix"-->
<!--						:size="args.size"-->
<!--						:className="args.className"-->
<!--					>-->
<!--						Error-->
<!--					</StatusIndicator>-->
<!--					<StatusIndicator-->
<!--						themeColor="neutral"-->
<!--						variant="filled"-->
<!--						:prefix="args.prefix"-->
<!--						:size="args.size"-->
<!--						:className="args.className"-->
<!--					>-->
<!--						Disable-->
<!--					</StatusIndicator>-->
<!--				</div>-->
                
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
                
<!--				<div style="display:flex; gap: 8px">-->
<!--					<StatusIndicator-->
<!--						themeColor="info"-->
<!--						variant="filled"-->
<!--						prefix="InfoCircleIcon"-->
<!--						:size="args.size"-->
<!--						:className="args.className"-->
<!--					>-->
<!--						Information-->
<!--					</StatusIndicator>-->
<!--					<StatusIndicator-->
<!--						themeColor="success"-->
<!--						variant="filled"-->
<!--						prefix="SuccessCircleIcon"-->
<!--						:size="args.size"-->
<!--						:className="args.className"-->
<!--					>-->
<!--						Success-->
<!--					</StatusIndicator>-->
<!--					<StatusIndicator-->
<!--						themeColor="warning"-->
<!--						variant="filled"-->
<!--						prefix="WarningCircleIcon"-->
<!--						:size="args.size"-->
<!--						:className="args.className"-->
<!--					>-->
<!--						Warning-->
<!--					</StatusIndicator>-->
<!--					<StatusIndicator-->
<!--						themeColor="error"-->
<!--						variant="filled"-->
<!--						prefix="ErrorCircleIcon"-->
<!--						:size="args.size"-->
<!--						:className="args.className"-->
<!--					>-->
<!--						Error-->
<!--					</StatusIndicator>-->
<!--					<StatusIndicator-->
<!--						themeColor="neutral"-->
<!--						variant="filled"-->
<!--						prefix="DisableCircleIcon"-->
<!--						:size="args.size"-->
<!--						:className="args.className"-->
<!--					>-->
<!--						Disable-->
<!--					</StatusIndicator>-->
<!--				</div>-->
                
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
        `}),parameters:{controls:{},docs:{source:{transform:(a,r)=>{const{args:t}=r;return["<StatusIndicator",'  themeColor="info"','  variant="text"',`  :prefix="${t.prefix}"`,`  :size="${t.size}"`,`  :className="${t.className}"`,">","  Information","</StatusIndicator>","<StatusIndicator",'  themeColor="success"','  variant="text"',`  :prefix="${t.prefix}"`,`  :size="${t.size}"`,`  :className="${t.className}"`,">","  Success","</StatusIndicator>","<StatusIndicator",'  themeColor="warning"','  variant="text"',`  :prefix="${t.prefix}"`,`  :size="${t.size}"`,`  :className="${t.className}"`,">","  Warning","</StatusIndicator>","<StatusIndicator",'  themeColor="error"','  variant="text"',`  :prefix="${t.prefix}"`,`  :size="${t.size}"`,`  :className="${t.className}"`,">","  Error","</StatusIndicator>","<StatusIndicator",'  themeColor="neutral"','  variant="text"',`  :prefix="${t.prefix}"`,`  :size="${t.size}"`,`  :className="${t.className}"`,">","  Disable","</StatusIndicator>","<StatusIndicator",'  themeColor="info"','  variant="text"','  prefix="SvgInfoCircle"',`  :size="${t.size}"`,`  :className="${t.className}"`,">","  Information","</StatusIndicator>","<StatusIndicator",'  themeColor="success"','  variant="text"','  prefix="SvgSuccessCircle"',`  :size="${t.size}"`,`  :className="${t.className}"`,">","  Success","</StatusIndicator>","<StatusIndicator",'  themeColor="warning"','  variant="text"','  prefix="SvgWarningTri"',`  :size="${t.size}"`,`  :className="${t.className}"`,">","  Warning","</StatusIndicator>","<StatusIndicator",'  themeColor="error"','  variant="text"','  prefix="SvgErrorCircle"',`  :size="${t.size}"`,`  :className="${t.className}"`,">","  Error","</StatusIndicator>","<StatusIndicator",'  themeColor="neutral"','  variant="text"','  prefix="SvgDisableCircle"',`  :size="${t.size}"`,`  :className="${t.className}"`,">","  Disable","</StatusIndicator>"].join(`
`).trim()}}}}};var i,o,c;s.parameters={...s.parameters,docs:{...(i=s.parameters)==null?void 0:i.docs,source:{originalSource:`{
  name: "預設項目",
  args: {
    themeColor: "success",
    variant: "text",
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
}`,...(c=(o=s.parameters)==null?void 0:o.docs)==null?void 0:c.source}}};var l,m,u;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
<!--				<div style="display:flex; gap: 8px">-->
<!--					<StatusIndicator-->
<!--						themeColor="info"-->
<!--						variant="filled"-->
<!--						:prefix="args.prefix"-->
<!--						:size="args.size"-->
<!--						:className="args.className"-->
<!--					>-->
<!--						Information-->
<!--					</StatusIndicator>-->
<!--					<StatusIndicator-->
<!--						themeColor="success"-->
<!--						variant="filled"-->
<!--						:prefix="args.prefix"-->
<!--						:size="args.size"-->
<!--						:className="args.className"-->
<!--					>-->
<!--						Success-->
<!--					</StatusIndicator>-->
<!--					<StatusIndicator-->
<!--						themeColor="warning"-->
<!--						variant="filled"-->
<!--						:prefix="args.prefix"-->
<!--						:size="args.size"-->
<!--						:className="args.className"-->
<!--					>-->
<!--						Warning-->
<!--					</StatusIndicator>-->
<!--					<StatusIndicator-->
<!--						themeColor="error"-->
<!--						variant="filled"-->
<!--						:prefix="args.prefix"-->
<!--						:size="args.size"-->
<!--						:className="args.className"-->
<!--					>-->
<!--						Error-->
<!--					</StatusIndicator>-->
<!--					<StatusIndicator-->
<!--						themeColor="neutral"-->
<!--						variant="filled"-->
<!--						:prefix="args.prefix"-->
<!--						:size="args.size"-->
<!--						:className="args.className"-->
<!--					>-->
<!--						Disable-->
<!--					</StatusIndicator>-->
<!--				</div>-->
                
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
                
<!--				<div style="display:flex; gap: 8px">-->
<!--					<StatusIndicator-->
<!--						themeColor="info"-->
<!--						variant="filled"-->
<!--						prefix="InfoCircleIcon"-->
<!--						:size="args.size"-->
<!--						:className="args.className"-->
<!--					>-->
<!--						Information-->
<!--					</StatusIndicator>-->
<!--					<StatusIndicator-->
<!--						themeColor="success"-->
<!--						variant="filled"-->
<!--						prefix="SuccessCircleIcon"-->
<!--						:size="args.size"-->
<!--						:className="args.className"-->
<!--					>-->
<!--						Success-->
<!--					</StatusIndicator>-->
<!--					<StatusIndicator-->
<!--						themeColor="warning"-->
<!--						variant="filled"-->
<!--						prefix="WarningCircleIcon"-->
<!--						:size="args.size"-->
<!--						:className="args.className"-->
<!--					>-->
<!--						Warning-->
<!--					</StatusIndicator>-->
<!--					<StatusIndicator-->
<!--						themeColor="error"-->
<!--						variant="filled"-->
<!--						prefix="ErrorCircleIcon"-->
<!--						:size="args.size"-->
<!--						:className="args.className"-->
<!--					>-->
<!--						Error-->
<!--					</StatusIndicator>-->
<!--					<StatusIndicator-->
<!--						themeColor="neutral"-->
<!--						variant="filled"-->
<!--						prefix="DisableCircleIcon"-->
<!--						:size="args.size"-->
<!--						:className="args.className"-->
<!--					>-->
<!--						Disable-->
<!--					</StatusIndicator>-->
<!--				</div>-->
                
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
}`,...(u=(m=e.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};const I=["StatusIndicatorDefault","StatusIndicatorColors"];export{e as StatusIndicatorColors,s as StatusIndicatorDefault,I as __namedExportsOrder,x as default};

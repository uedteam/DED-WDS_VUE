import{c as o,d as c,a as S,b as h,n,r as $,o as l}from"./vue.esm-bundler-DbMeO4i9.js";import{_ as x}from"./Icon-Dql-1jGW.js";const N={key:0,style:{"line-height":"1"}},z={key:1,class:"status-indicator-content"},i={__name:"StatusIndicator",props:{themeColor:{type:String,default:"primary",validator:e=>["primary","secondary","neutral","info","success","warning","error"].includes(e)},variant:{type:String,default:"text",validator:e=>["text","soft","filled"].includes(e)},isShowDot:{type:Boolean,default:!0},prefix:{type:String},size:{type:String,validator:e=>["small","medium","large"].includes(e)},className:{type:String,default:""}},setup(e){const a=e;return(s,I)=>(l(),o("div",{class:n(["status-indicator",{[`status-indicator-${a.variant}-${a.themeColor}`]:a.variant&&a.themeColor,[a.className]:!!a.className}]),role:"status"},[a.prefix?(l(),o("div",N,[h(x,{name:a.prefix,size:"20"},null,8,["name"])])):c("",!0),a.isShowDot&&!a.prefix?(l(),o("div",z,[S("span",{class:n({"status-indicator-dot":!0,"status-indicator-dot-white":a.variant==="filled",[`status-indicator-dot-${a.themeColor}`]:a.variant==="text"&&a.themeColor||a.variant==="soft"&&a.themeColor})},null,2)])):c("",!0),S("div",{class:n(`ded-text-${a.size}`)},[$(s.$slots,"default")],2)],2))}};i.__docgenInfo={exportName:"default",displayName:"StatusIndicator",description:"",tags:{},props:[{name:"themeColor",type:{name:"string"},defaultValue:{func:!1,value:'"primary"'},values:["primary","secondary","neutral","info","success","warning","error"]},{name:"variant",type:{name:"string"},defaultValue:{func:!1,value:'"text"'},values:["text","soft","filled"]},{name:"isShowDot",type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"prefix",type:{name:"string"}},{name:"size",type:{name:"string"},values:["small","medium","large"]},{name:"className",type:{name:"string"},defaultValue:{func:!1,value:'""'}}],slots:[{name:"default"}],sourceFiles:["/Users/auouser/Desktop/Work_Space/DED-WDS_VUE/libs/src/ui/element/StatusIndicator/StatusIndicator.vue"]};const v={title:"Component/Status-Indicator",component:i,tags:["autodocs"],argTypes:{themeColor:{description:"主題顏色",control:{type:"select"},options:["primary","secondary","neutral","info","success","warning","error"],table:{type:{summary:"primary | secondary | neutral | info | success | warning | error"}}},variant:{description:"按鈕樣式",required:!0,control:{type:"select"},options:["text","soft","filled"],table:{type:{summary:"text | soft | filled "}}},isShowDot:{description:"是否顯示圓點",control:{type:"boolean"}},prefix:{description:"前綴元素",control:{type:"select",labels:{"":"none",SvgInfoCircle:"SvgInfoCircle",SvgSuccessCircle:"SvgSuccessCircle",SvgWarningTri:"SvgWarningTri",SvgErrorCircle:"SvgErrorCircle",SvgQuestionCircle:"SvgQuestionCircle",SvgDisableCircle:"SvgDisableCircle"}},options:["","SvgInfoCircle","SvgSuccessCircle","SvgWarningTri","SvgErrorCircle","SvgQuestionCircle","SvgDisableCircle"]},size:{description:"尺寸",control:{type:"select"},options:["small","medium","large"],table:{type:{summary:"small | medium | large "}}},className:{description:"客製化樣式",control:{type:"text"}},default:{description:"內容",control:{type:"text"},table:{type:{summary:"Vue Component | HTML"}}}},parameters:{docs:{title:"StatusIndicator",description:{component:"狀態指示組件的呈現及說明。"}}}},t={name:"預設項目",args:{themeColor:"success",variant:"filled",isShowDot:!1,prefix:"",size:"medium",className:"",default:"Success"},render:e=>({components:{StatusIndicator:i},setup(){return{args:e}},template:`
            <StatusIndicator
                :themeColor="args.themeColor"
                :variant="args.variant"
                :isShowDot="args.isShowDot"
                :prefix="args.prefix"
                :size="args.size"
                :className="args.className"
            >
                {{args.default}}
            </StatusIndicator>
        `}),parameters:{controls:{},docs:{source:{transform:(e,a)=>{const{args:s}=a;return["<script setup>",'import { StatusIndicator } from "@ded-wds-vue/ui";',"<\/script>","","<template>","  <StatusIndicator",`    ${s.themeColor?`themeColor="${s.themeColor}"`:""}`,`    ${s.variant?`variant="${s.variant}"`:""}`,`    ${s.isShowDot?`:isShowDot="${s.isShowDot}"`:""}`,`    ${s.prefix?`prefix="${s.prefix}"`:""}`,`    ${s.size?`size="${s.size}"`:""}`,`    ${s.className?`className="${s.className}"`:""}`,"  >",`    ${s.default||""}`,"  </StatusIndicator>","</template>"].filter(Boolean).join(`
`).trim()}}}}},r={name:"主題色彩",args:{themeColor:"",variant:"",isShowDot:!0,prefix:"",size:"medium",className:""},render:e=>({components:{StatusIndicator:i},setup(){return{args:e}},template:`
            <div style="width: 600px; display: flex; gap: 10px; flex-wrap: wrap;">
                <div style="display:flex; gap: 8px">
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
                
                <div style="display:flex; gap: 8px">
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
                
                <div style="display:flex; gap: 8px">
                    <StatusIndicator
                        themeColor="info"
                        variant="filled"
                        :isShowDot="args.isShowDot"
                        prefix="SvgInfoCircle"
                        :size="args.size"
                        :className="args.className"
                    >
                        Information
                    </StatusIndicator>
                    <StatusIndicator
                        themeColor="success"
                        variant="filled"
                        :isShowDot="args.isShowDot"
                        prefix="SvgSuccessCircle"
                        :size="args.size"
                        :className="args.className"
                    >
                        Success
                    </StatusIndicator>
                    <StatusIndicator
                        themeColor="warning"
                        variant="filled"
                        :isShowDot="args.isShowDot"
                        prefix="SvgWarningTri"
                        :size="args.size"
                        :className="args.className"
                    >
                        Warning
                    </StatusIndicator>
                    <StatusIndicator
                        themeColor="error"
                        variant="filled"
                        :isShowDot="args.isShowDot"
                        prefix="SvgErrorCircle"
                        :size="args.size"
                        :className="args.className"
                    >
                        Error
                    </StatusIndicator>
                    <StatusIndicator
                        themeColor="neutral"
                        variant="filled"
                        :isShowDot="args.isShowDot"
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
                        :isShowDot="args.isShowDot"
                        prefix="SvgInfoCircle"
                        :size="args.size"
                        :className="args.className"
                    >
                        Information
                    </StatusIndicator>
                    <StatusIndicator
                        themeColor="success"
                        variant="text"
                        :isShowDot="args.isShowDot"
                        prefix="SvgSuccessCircle"
                        :size="args.size"
                        :className="args.className"
                    >
                        Success
                    </StatusIndicator>
                    <StatusIndicator
                        themeColor="warning"
                        variant="text"
                        :isShowDot="args.isShowDot"
                        prefix="SvgWarningTri"
                        :size="args.size"
                        :className="args.className"
                    >
                        Warning
                    </StatusIndicator>
                    <StatusIndicator
                        themeColor="error"
                        variant="text"
                        :isShowDot="args.isShowDot"
                        prefix="SvgErrorCircle"
                        :size="args.size"
                        :className="args.className"
                    >
                        Error
                    </StatusIndicator>
                    <StatusIndicator
                        themeColor="neutral"
                        variant="text"
                        :isShowDot="args.isShowDot"
                        prefix="SvgDisableCircle"
                        :size="args.size"
                        :className="args.className"
                    >
                        Disable
                    </StatusIndicator>
                </div>
            </div>
        `}),parameters:{controls:{exclude:["themeColor","default","variant","prefix"]},docs:{source:{transform:(e,a)=>{const{args:s}=a;return["<script setup>",'import { StatusIndicator } from "@ded-wds-vue/ui";',"<\/script>","","<template>","  <StatusIndicator",'    themeColor="info"','    variant="filled"',`    ${s.isShowDot?`:isShowDot="${s.isShowDot}"`:""}`,`    ${s.prefix?`prefix="${s.prefix}"`:""}`,`    ${s.size?`size="${s.size}"`:""}`,`    ${s.className?`className="${s.className}"`:""}`,"  >","    Information","  </StatusIndicator>","  <StatusIndicator",'    themeColor="success"','    variant="filled"',`    ${s.isShowDot?`:isShowDot="${s.isShowDot}"`:""}`,`    ${s.prefix?`prefix="${s.prefix}"`:""}`,`    ${s.size?`size="${s.size}"`:""}`,`    ${s.className?`className="${s.className}"`:""}`,"  >","    Success","  </StatusIndicator>","  <StatusIndicator",'    themeColor="warning"','    variant="filled"',`    ${s.isShowDot?`:isShowDot="${s.isShowDot}"`:""}`,`    ${s.prefix?`prefix="${s.prefix}"`:""}`,`    ${s.size?`size="${s.size}"`:""}`,`    ${s.className?`className="${s.className}"`:""}`,"  >","    Warning","  </StatusIndicator>","  <StatusIndicator",'    themeColor="error"','    variant="filled"',`    ${s.isShowDot?`:isShowDot="${s.isShowDot}"`:""}`,`    ${s.prefix?`prefix="${s.prefix}"`:""}`,`    ${s.size?`size="${s.size}"`:""}`,`    ${s.className?`className="${s.className}"`:""}`,"  >","    Error","  </StatusIndicator>","  <StatusIndicator",'    themeColor="neutral"','    variant="filled"',`    ${s.isShowDot?`:isShowDot="${s.isShowDot}"`:""}`,`    ${s.prefix?`prefix="${s.prefix}"`:""}`,`    ${s.size?`size="${s.size}"`:""}`,`    ${s.className?`className="${s.className}"`:""}`,"  >","    Disable","  </StatusIndicator>","","  <StatusIndicator",'    themeColor="info"','    variant="text"',`    ${s.isShowDot?`:isShowDot="${s.isShowDot}"`:""}`,`    ${s.prefix?`prefix="${s.prefix}"`:""}`,`    ${s.size?`size="${s.size}"`:""}`,`    ${s.className?`className="${s.className}"`:""}`,"  >","    Information","  </StatusIndicator>","  <StatusIndicator",'    themeColor="success"','    variant="text"',`    ${s.isShowDot?`:isShowDot="${s.isShowDot}"`:""}`,`    ${s.prefix?`prefix="${s.prefix}"`:""}`,`    ${s.size?`size="${s.size}"`:""}`,`    ${s.className?`className="${s.className}"`:""}`,"  >","    Success","  </StatusIndicator>","  <StatusIndicator",'    themeColor="warning"','    variant="text"',`    ${s.isShowDot?`:isShowDot="${s.isShowDot}"`:""}`,`    ${s.prefix?`prefix="${s.prefix}"`:""}`,`    ${s.size?`size="${s.size}"`:""}`,`    ${s.className?`className="${s.className}"`:""}`,"  >","    Warning","  </StatusIndicator>","  <StatusIndicator",'    themeColor="error"','    variant="text"',`    ${s.isShowDot?`:isShowDot="${s.isShowDot}"`:""}`,`    ${s.prefix?`prefix="${s.prefix}"`:""}`,`    ${s.size?`size="${s.size}"`:""}`,`    ${s.className?`className="${s.className}"`:""}`,"  >","    Error","  </StatusIndicator>","  <StatusIndicator",'    themeColor="neutral"','    variant="text"',`    ${s.isShowDot?`:isShowDot="${s.isShowDot}"`:""}`,`    ${s.prefix?`prefix="${s.prefix}"`:""}`,`    ${s.size?`size="${s.size}"`:""}`,`    ${s.className?`className="${s.className}"`:""}`,"  >","    Disable","  </StatusIndicator>","  <StatusIndicator",'    themeColor="info"','    variant="filled"','    :isShowDot="false"','    prefix="SvgInfoCircle"',`    ${s.size?`size="${s.size}"`:""}`,`    ${s.className?`className="${s.className}"`:""}`,"  >","    Information","  </StatusIndicator>","  <StatusIndicator",'    themeColor="success"','    variant="filled"','    :isShowDot="false"','    prefix="SvgSuccessCircle"',`    ${s.size?`size="${s.size}"`:""}`,`    ${s.className?`className="${s.className}"`:""}`,"  >","    Success","  </StatusIndicator>","  <StatusIndicator",'    themeColor="warning"','    variant="filled"','    :isShowDot="false"','    prefix="SvgWarningTri"',`    ${s.size?`size="${s.size}"`:""}`,`    ${s.className?`className="${s.className}"`:""}`,"  >","    Warning","  </StatusIndicator>","  <StatusIndicator",'    themeColor="error"','    variant="filled"','    :isShowDot="false"','    prefix="SvgErrorCircle"',`    ${s.size?`size="${s.size}"`:""}`,`    ${s.className?`className="${s.className}"`:""}`,"  >","    Error","  </StatusIndicator>","  <StatusIndicator",'    themeColor="neutral"','    variant="filled"','    :isShowDot="false"','    prefix="SvgDisableCircle"',`    ${s.size?`size="${s.size}"`:""}`,`    ${s.className?`className="${s.className}"`:""}`,"  >","    Disable","  </StatusIndicator>","","  <StatusIndicator",'    themeColor="info"','    variant="text"','    :isShowDot="false"','    prefix="SvgInfoCircle"',`    ${s.size?`size="${s.size}"`:""}`,`    ${s.className?`className="${s.className}"`:""}`,"  >","    Information","  </StatusIndicator>","  <StatusIndicator",'    themeColor="success"','    variant="text"','    :isShowDot="false"','    prefix="SvgSuccessCircle"',`    ${s.size?`size="${s.size}"`:""}`,`    ${s.className?`className="${s.className}"`:""}`,"  >","    Success","  </StatusIndicator>","  <StatusIndicator",'    themeColor="warning"','    variant="text"','    :isShowDot="false"','    prefix="SvgWarningTri"',`    ${s.size?`size="${s.size}"`:""}`,`    ${s.className?`className="${s.className}"`:""}`,"  >","    Warning","  </StatusIndicator>","  <StatusIndicator",'    themeColor="error"','    variant="text"','    :isShowDot="false"','    prefix="SvgErrorCircle"',`    ${s.size?`size="${s.size}"`:""}`,`    ${s.className?`className="${s.className}"`:""}`,"  >","    Error","  </StatusIndicator>","  <StatusIndicator",'    themeColor="neutral"','    variant="text"','    :isShowDot="false"','    prefix="SvgDisableCircle"',`    ${s.size?`size="${s.size}"`:""}`,`    ${s.className?`className="${s.className}"`:""}`,"  >","    Disable","  </StatusIndicator>","</template>"].filter(Boolean).join(`
`).trim()}}}}};var m,g,u;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: "預設項目",
  args: {
    themeColor: "success",
    variant: "filled",
    isShowDot: false,
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
                :isShowDot="args.isShowDot"
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
          return [\`<script setup>\`, \`import { StatusIndicator } from "@ded-wds-vue/ui";\`, \`<\/script>\`, '', '<template>', \`  <StatusIndicator\`, \`    \${args.themeColor ? \`themeColor="\${args.themeColor}"\` : ""}\`, \`    \${args.variant ? \`variant="\${args.variant}"\` : ""}\`, \`    \${args.isShowDot ? \`:isShowDot="\${args.isShowDot}"\` : ""}\`, \`    \${args.prefix ? \`prefix="\${args.prefix}"\` : ""}\`, \`    \${args.size ? \`size="\${args.size}"\` : ""}\`, \`    \${args.className ? \`className="\${args.className}"\` : ""}\`, \`  >\`, \`    \${args.default || ""}\`, \`  </StatusIndicator>\`, '</template>'].filter(Boolean).join("\\n").trim();
        }
      }
    }
  }
}`,...(u=(g=t.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};var d,f,p;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:'{\n  name: "主題色彩",\n  args: {\n    themeColor: "",\n    variant: "",\n    isShowDot: true,\n    prefix: "",\n    size: "medium",\n    className: ""\n  },\n  render: args => ({\n    components: {\n      StatusIndicator\n    },\n    setup() {\n      return {\n        args\n      };\n    },\n    template: `\n            <div style="width: 600px; display: flex; gap: 10px; flex-wrap: wrap;">\n                <div style="display:flex; gap: 8px">\n                    <StatusIndicator\n                        themeColor="info"\n                        variant="filled"\n                        :isShowDot="args.isShowDot"\n                        :prefix="args.prefix"\n                        :size="args.size"\n                        :className="args.className"\n                    >\n                        Information\n                    </StatusIndicator>\n                    <StatusIndicator\n                        themeColor="success"\n                        variant="filled"\n                        :isShowDot="args.isShowDot"\n                        :prefix="args.prefix"\n                        :size="args.size"\n                        :className="args.className"\n                    >\n                        Success\n                    </StatusIndicator>\n                    <StatusIndicator\n                        themeColor="warning"\n                        variant="filled"\n                        :isShowDot="args.isShowDot"\n                        :prefix="args.prefix"\n                        :size="args.size"\n                        :className="args.className"\n                    >\n                        Warning\n                    </StatusIndicator>\n                    <StatusIndicator\n                        themeColor="error"\n                        variant="filled"\n                        :isShowDot="args.isShowDot"\n                        :prefix="args.prefix"\n                        :size="args.size"\n                        :className="args.className"\n                    >\n                        Error\n                    </StatusIndicator>\n                    <StatusIndicator\n                        themeColor="neutral"\n                        variant="filled"\n                        :isShowDot="args.isShowDot"\n                        :prefix="args.prefix"\n                        :size="args.size"\n                        :className="args.className"\n                    >\n                        Disable\n                    </StatusIndicator>\n                </div>\n                \n                <div style="display:flex; gap: 8px">\n                    <StatusIndicator\n                        themeColor="info"\n                        variant="text"\n                        :isShowDot="args.isShowDot"\n                        :prefix="args.prefix"\n                        :size="args.size"\n                        :className="args.className"\n                    >\n                        Information\n                    </StatusIndicator>\n                    <StatusIndicator\n                        themeColor="success"\n                        variant="text"\n                        :isShowDot="args.isShowDot"\n                        :prefix="args.prefix"\n                        :size="args.size"\n                        :className="args.className"\n                    >\n                        Success\n                    </StatusIndicator>\n                    <StatusIndicator\n                        themeColor="warning"\n                        variant="text"\n                        :isShowDot="args.isShowDot"\n                        :prefix="args.prefix"\n                        :size="args.size"\n                        :className="args.className"\n                    >\n                        Warning\n                    </StatusIndicator>\n                    <StatusIndicator\n                        themeColor="error"\n                        variant="text"\n                        :isShowDot="args.isShowDot"\n                        :prefix="args.prefix"\n                        :size="args.size"\n                        :className="args.className"\n                    >\n                        Error\n                    </StatusIndicator>\n                    <StatusIndicator\n                        themeColor="neutral"\n                        variant="text"\n                        :isShowDot="args.isShowDot"\n                        :prefix="args.prefix"\n                        :size="args.size"\n                        :className="args.className"\n                    >\n                        Disable\n                    </StatusIndicator>\n                </div>\n                \n                <div style="display:flex; gap: 8px">\n                    <StatusIndicator\n                        themeColor="info"\n                        variant="filled"\n                        :isShowDot="args.isShowDot"\n                        prefix="SvgInfoCircle"\n                        :size="args.size"\n                        :className="args.className"\n                    >\n                        Information\n                    </StatusIndicator>\n                    <StatusIndicator\n                        themeColor="success"\n                        variant="filled"\n                        :isShowDot="args.isShowDot"\n                        prefix="SvgSuccessCircle"\n                        :size="args.size"\n                        :className="args.className"\n                    >\n                        Success\n                    </StatusIndicator>\n                    <StatusIndicator\n                        themeColor="warning"\n                        variant="filled"\n                        :isShowDot="args.isShowDot"\n                        prefix="SvgWarningTri"\n                        :size="args.size"\n                        :className="args.className"\n                    >\n                        Warning\n                    </StatusIndicator>\n                    <StatusIndicator\n                        themeColor="error"\n                        variant="filled"\n                        :isShowDot="args.isShowDot"\n                        prefix="SvgErrorCircle"\n                        :size="args.size"\n                        :className="args.className"\n                    >\n                        Error\n                    </StatusIndicator>\n                    <StatusIndicator\n                        themeColor="neutral"\n                        variant="filled"\n                        :isShowDot="args.isShowDot"\n                        prefix="SvgDisableCircle"\n                        :size="args.size"\n                        :className="args.className"\n                    >\n                        Disable\n                    </StatusIndicator>\n                </div>\n                \n                <div style="display:flex; gap: 8px">\n                    <StatusIndicator\n                        themeColor="info"\n                        variant="text"\n                        :isShowDot="args.isShowDot"\n                        prefix="SvgInfoCircle"\n                        :size="args.size"\n                        :className="args.className"\n                    >\n                        Information\n                    </StatusIndicator>\n                    <StatusIndicator\n                        themeColor="success"\n                        variant="text"\n                        :isShowDot="args.isShowDot"\n                        prefix="SvgSuccessCircle"\n                        :size="args.size"\n                        :className="args.className"\n                    >\n                        Success\n                    </StatusIndicator>\n                    <StatusIndicator\n                        themeColor="warning"\n                        variant="text"\n                        :isShowDot="args.isShowDot"\n                        prefix="SvgWarningTri"\n                        :size="args.size"\n                        :className="args.className"\n                    >\n                        Warning\n                    </StatusIndicator>\n                    <StatusIndicator\n                        themeColor="error"\n                        variant="text"\n                        :isShowDot="args.isShowDot"\n                        prefix="SvgErrorCircle"\n                        :size="args.size"\n                        :className="args.className"\n                    >\n                        Error\n                    </StatusIndicator>\n                    <StatusIndicator\n                        themeColor="neutral"\n                        variant="text"\n                        :isShowDot="args.isShowDot"\n                        prefix="SvgDisableCircle"\n                        :size="args.size"\n                        :className="args.className"\n                    >\n                        Disable\n                    </StatusIndicator>\n                </div>\n            </div>\n        `\n  }),\n  parameters: {\n    controls: {\n      // include or exclude keys as needed\n      exclude: ["themeColor", "default", "variant", "prefix"]\n    },\n    docs: {\n      source: {\n        transform: (src, storyContext) => {\n          const {\n            args\n          } = storyContext;\n          return [`<script setup>`, `import { StatusIndicator } from "@ded-wds-vue/ui";`, `<\/script>`, \'\', \'<template>\', `  <StatusIndicator`, `    themeColor="info"`, `    variant="filled"`, `    ${args.isShowDot ? `:isShowDot="${args.isShowDot}"` : ""}`, `    ${args.prefix ? `prefix="${args.prefix}"` : ""}`, `    ${args.size ? `size="${args.size}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, `  >`, `    Information`, `  </StatusIndicator>`, `  <StatusIndicator`, `    themeColor="success"`, `    variant="filled"`, `    ${args.isShowDot ? `:isShowDot="${args.isShowDot}"` : ""}`, `    ${args.prefix ? `prefix="${args.prefix}"` : ""}`, `    ${args.size ? `size="${args.size}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, `  >`, `    Success`, `  </StatusIndicator>`, `  <StatusIndicator`, `    themeColor="warning"`, `    variant="filled"`, `    ${args.isShowDot ? `:isShowDot="${args.isShowDot}"` : ""}`, `    ${args.prefix ? `prefix="${args.prefix}"` : ""}`, `    ${args.size ? `size="${args.size}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, `  >`, `    Warning`, `  </StatusIndicator>`, `  <StatusIndicator`, `    themeColor="error"`, `    variant="filled"`, `    ${args.isShowDot ? `:isShowDot="${args.isShowDot}"` : ""}`, `    ${args.prefix ? `prefix="${args.prefix}"` : ""}`, `    ${args.size ? `size="${args.size}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, `  >`, `    Error`, `  </StatusIndicator>`, `  <StatusIndicator`, `    themeColor="neutral"`, `    variant="filled"`, `    ${args.isShowDot ? `:isShowDot="${args.isShowDot}"` : ""}`, `    ${args.prefix ? `prefix="${args.prefix}"` : ""}`, `    ${args.size ? `size="${args.size}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, `  >`, `    Disable`, `  </StatusIndicator>`, \'\', `  <StatusIndicator`, `    themeColor="info"`, `    variant="text"`, `    ${args.isShowDot ? `:isShowDot="${args.isShowDot}"` : ""}`, `    ${args.prefix ? `prefix="${args.prefix}"` : ""}`, `    ${args.size ? `size="${args.size}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, `  >`, `    Information`, `  </StatusIndicator>`, `  <StatusIndicator`, `    themeColor="success"`, `    variant="text"`, `    ${args.isShowDot ? `:isShowDot="${args.isShowDot}"` : ""}`, `    ${args.prefix ? `prefix="${args.prefix}"` : ""}`, `    ${args.size ? `size="${args.size}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, `  >`, `    Success`, `  </StatusIndicator>`, `  <StatusIndicator`, `    themeColor="warning"`, `    variant="text"`, `    ${args.isShowDot ? `:isShowDot="${args.isShowDot}"` : ""}`, `    ${args.prefix ? `prefix="${args.prefix}"` : ""}`, `    ${args.size ? `size="${args.size}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, `  >`, `    Warning`, `  </StatusIndicator>`, `  <StatusIndicator`, `    themeColor="error"`, `    variant="text"`, `    ${args.isShowDot ? `:isShowDot="${args.isShowDot}"` : ""}`, `    ${args.prefix ? `prefix="${args.prefix}"` : ""}`, `    ${args.size ? `size="${args.size}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, `  >`, `    Error`, `  </StatusIndicator>`, `  <StatusIndicator`, `    themeColor="neutral"`, `    variant="text"`, `    ${args.isShowDot ? `:isShowDot="${args.isShowDot}"` : ""}`, `    ${args.prefix ? `prefix="${args.prefix}"` : ""}`, `    ${args.size ? `size="${args.size}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, `  >`, `    Disable`, `  </StatusIndicator>`, `  <StatusIndicator`, `    themeColor="info"`, `    variant="filled"`, `    :isShowDot="false"`, `    prefix="SvgInfoCircle"`, `    ${args.size ? `size="${args.size}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, `  >`, `    Information`, `  </StatusIndicator>`, `  <StatusIndicator`, `    themeColor="success"`, `    variant="filled"`, `    :isShowDot="false"`, `    prefix="SvgSuccessCircle"`, `    ${args.size ? `size="${args.size}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, `  >`, `    Success`, `  </StatusIndicator>`, `  <StatusIndicator`, `    themeColor="warning"`, `    variant="filled"`, `    :isShowDot="false"`, `    prefix="SvgWarningTri"`, `    ${args.size ? `size="${args.size}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, `  >`, `    Warning`, `  </StatusIndicator>`, `  <StatusIndicator`, `    themeColor="error"`, `    variant="filled"`, `    :isShowDot="false"`, `    prefix="SvgErrorCircle"`, `    ${args.size ? `size="${args.size}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, `  >`, `    Error`, `  </StatusIndicator>`, `  <StatusIndicator`, `    themeColor="neutral"`, `    variant="filled"`, `    :isShowDot="false"`, `    prefix="SvgDisableCircle"`, `    ${args.size ? `size="${args.size}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, `  >`, `    Disable`, `  </StatusIndicator>`, \'\', `  <StatusIndicator`, `    themeColor="info"`, `    variant="text"`, `    :isShowDot="false"`, `    prefix="SvgInfoCircle"`, `    ${args.size ? `size="${args.size}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, `  >`, `    Information`, `  </StatusIndicator>`, `  <StatusIndicator`, `    themeColor="success"`, `    variant="text"`, `    :isShowDot="false"`, `    prefix="SvgSuccessCircle"`, `    ${args.size ? `size="${args.size}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, `  >`, `    Success`, `  </StatusIndicator>`, `  <StatusIndicator`, `    themeColor="warning"`, `    variant="text"`, `    :isShowDot="false"`, `    prefix="SvgWarningTri"`, `    ${args.size ? `size="${args.size}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, `  >`, `    Warning`, `  </StatusIndicator>`, `  <StatusIndicator`, `    themeColor="error"`, `    variant="text"`, `    :isShowDot="false"`, `    prefix="SvgErrorCircle"`, `    ${args.size ? `size="${args.size}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, `  >`, `    Error`, `  </StatusIndicator>`, `  <StatusIndicator`, `    themeColor="neutral"`, `    variant="text"`, `    :isShowDot="false"`, `    prefix="SvgDisableCircle"`, `    ${args.size ? `size="${args.size}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, `  >`, `    Disable`, `  </StatusIndicator>`, \'</template>\'].filter(Boolean).join("\\n").trim();\n        }\n      }\n    }\n  }\n}',...(p=(f=r.parameters)==null?void 0:f.docs)==null?void 0:p.source}}};const C=["StatusIndicatorDefault","StatusIndicatorColors"];export{r as StatusIndicatorColors,t as StatusIndicatorDefault,C as __namedExportsOrder,v as default};

import{c as s,a as m,n,d,r as p,o,f}from"./vue.esm-bundler-g0-RGFhA.js";import{_ as g}from"./Icon-BaegpxtT.js";import"./iframe-BIElAUrP.js";import"../sb-preview/runtime.js";const y={key:0,style:{"line-height":"1"}},i={__name:"StatusIndicator",props:{themeColor:{type:String,default:"primary",validator:t=>["primary","secondary","neutral","info","success","warning","error"].includes(t)},variant:{type:String,default:"text",validator:t=>["text","filled"].includes(t)},prefix:{type:String,required:!0},size:{type:String,validator:t=>["small","medium","large"].includes(t)},className:{type:String,default:""}},setup(t){const e=t;return(a,x)=>(o(),s("div",{class:n(["status-indicator",{[`status-indicator-${e.variant}-${e.themeColor}`]:e.variant&&e.themeColor,[e.className]:!!e.className}]),role:"status"},[e.variant==="text"?(o(),s("div",y,[m(g,{name:e.prefix,size:"20"},null,8,["name"])])):(o(),s("span",{key:1,class:n(["status-indicator-dot",`status-indicator-${e.themeColor}`])},null,2)),d("div",{class:n(["status-indicator-text",`status-indicator-text-${e.variant}`])},[p(a.$slots,"default")],2)],2))}};i.__docgenInfo={exportName:"default",displayName:"StatusIndicator",description:"",tags:{},props:[{name:"themeColor",type:{name:"string"},defaultValue:{func:!1,value:'"primary"'},values:["primary","secondary","neutral","info","success","warning","error"]},{name:"variant",type:{name:"string"},defaultValue:{func:!1,value:'"text"'},values:["text","filled"]},{name:"prefix",type:{name:"string"},required:!0},{name:"size",type:{name:"string"},values:["small","medium","large"]},{name:"className",type:{name:"string"},defaultValue:{func:!1,value:'""'}}],slots:[{name:"default"}],sourceFiles:["/Users/auouser/Desktop/Work_Space/DED-WDS_VUE/libs/src/ui/element/Status-Indicator/StatusIndicator.vue"]};const h={title:"Component/Status-Indicator",component:i,tags:["autodocs"],argTypes:{themeColor:{description:"主題顏色",control:{type:"select"},options:["primary","secondary","neutral","info","success","warning","error"],table:{type:{summary:"primary | secondary | neutral | info | success | warning | error"}}},variant:{description:"按鈕樣式",required:!0,control:{type:"select"},options:["text","filled"],table:{type:{summary:"text | filled "}}},prefix:{description:"前綴元素",control:{type:"select"},options:["InfoCircleIcon","SuccessCircleIcon","WarningCircleIcon","ErrorCircleIcon","QuestionCircleIcon","DisableCircleIcon"]},size:{description:"尺寸",control:{type:"select"},options:["small","medium","large"],table:{type:{summary:"small | medium | large "}}},className:{description:"客製化樣式",control:{type:"text"}},default:{description:"內容",control:{type:"text"},table:{type:{summary:"Vue Component | HTML"}}}},parameters:{docs:{title:"StatusIndicator",description:{component:"StatusIndicator 組件的呈現及說明。"}}}},r={name:"預設項目",args:{themeColor:"primary",variant:"text",prefix:"InfoCircleIcon",size:"medium",className:"",default:"123"},render:t=>({components:{StatusIndicator:i},setup(){const e=f(t.initValue||0);return{args:t,sliderValue:e}},template:`
            <StatusIndicator
                :themeColor="args.themeColor"
                :variant="args.variant"
                :prefix="args.prefix"
                :size="args.size"
                :className="args.className"
            >
                {{args.default}}
            </StatusIndicator>
        `}),parameters:{controls:{},docs:{source:{transform:(t,e)=>{const{args:a}=e;return["<StatusIndicator",`  themeColor="${a.themeColor}"`,`  variant="${a.variant}"`,`  prefix="${a.prefix}"`,`  size="${a.size}"`,`  className="${a.className}"`,">",`  ${a.default}`,"</StatusIndicator>"].join(`
`).trim()}}}}};var l,c,u;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  name: '預設項目',
  args: {
    themeColor: 'primary',
    variant: 'text',
    prefix: 'InfoCircleIcon',
    size: 'medium',
    className: '',
    default: '123'
  },
  render: args => ({
    components: {
      StatusIndicator
    },
    setup() {
      const sliderValue = ref(args.initValue || 0);
      return {
        args,
        sliderValue
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
          return [\`<StatusIndicator\`, \`  themeColor="\${args.themeColor}"\`, \`  variant="\${args.variant}"\`, \`  prefix="\${args.prefix}"\`, \`  size="\${args.size}"\`, \`  className="\${args.className}"\`, \`>\`, \`  \${args.default}\`, \`</StatusIndicator>\`].join('\\n').trim();
        }
      }
    }
  }
}`,...(u=(c=r.parameters)==null?void 0:c.docs)==null?void 0:u.source}}};const N=["StatusIndicatorDefault"];export{r as StatusIndicatorDefault,N as __namedExportsOrder,h as default};

import{g as u,c as o,d as g,a as t,t as l,k as i,n as f,o as c}from"./vue.esm-bundler-CeV5Z5_m.js";const h={class:"ded-progress-line-container"},b={key:0,class:"ded-progress-label"},L={class:"ded-progress-line-label ded-progress-percent-text"},a={__name:"LineProgress",props:{label:{type:String,default:""},percent:{type:Number,default:0},strokeWidth:{type:Number,default:10},className:{type:String,default:""}},setup(r){const s=r,e=u(()=>Math.min(Math.max(s.percent,0),100));return(N,P)=>(c(),o("div",h,[s.label?(c(),o("div",b,l(s.label),1)):g("",!0),t("div",{class:f(["ded-progress-line",{[s.className]:!!s.className}])},[t("div",{class:"ded-progress-line-track",style:i({height:`${s.strokeWidth}px`})},[t("div",{class:"ded-progress-line-percent-form",style:i({width:`${e.value}%`})},null,4)],4),t("div",L,l(`${e.value}%`),1)],2)]))}};a.__docgenInfo={exportName:"default",displayName:"LineProgress",description:"",tags:{},props:[{name:"label",type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"percent",type:{name:"number"},defaultValue:{func:!1,value:"0"}},{name:"strokeWidth",type:{name:"number"},defaultValue:{func:!1,value:"10"}},{name:"className",type:{name:"string"},defaultValue:{func:!1,value:'""'}}],sourceFiles:["/home/runner/work/DED-WDS_VUE/DED-WDS_VUE/libs/src/ui/element/Progress/LineProgress/LineProgress.vue"]};const y={title:"Component/Progress-Line",component:a,tags:["autodocs"],argTypes:{label:{description:"進度指示標籤",control:{type:"text"}},percent:{description:"進度",control:{type:"range",min:0,max:100,step:1}},strokeWidth:{description:"線條寬度",control:{type:"range",min:1,max:20,step:1}},className:{description:"客製化樣式",control:{type:"text"}}},parameters:{docs:{title:"LineProgress",description:{component:"長條進度指示組件的呈現及說明。"}}}},n={name:"預設項目",args:{label:"Label",percent:65,strokeWidth:10,className:""},render:r=>({components:{LineProgress:a},setup(){return{args:r}},template:`
      <LineProgress
        :label="args.label"
        :percent="args.percent"
        :strokeWidth="args.strokeWidth"
        :className="args.className"
      ></LineProgress>`}),parameters:{controls:{},docs:{source:{transform:(r,s)=>{const{args:e}=s;return["<script setup>",'import { LineProgress } from "@ded-wds-vue/ui";',"<\/script>","","<template>","  <LineProgress",`    ${e.label?`label="${e.label}"`:""}`,`    ${e.percent!==void 0?`:percent="${e.percent}"`:""}`,`    ${e.strokeWidth!==void 0?`:strokeWidth="${e.strokeWidth}"`:""}`,`    ${e.className?`className="${e.className}"`:""}`,"  ></LineProgress>","</template>"].filter(Boolean).join(`
`).trim()}}}}};var d,p,m;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
  name: "預設項目",
  args: {
    // themeColor: "primary",
    label: "Label",
    percent: 65,
    strokeWidth: 10,
    className: ""
  },
  render: args => ({
    components: {
      LineProgress
    },
    setup() {
      // Create a ref for modelValue to be used with v-model
      return {
        args
      };
    },
    template: \`
      <LineProgress
        :label="args.label"
        :percent="args.percent"
        :strokeWidth="args.strokeWidth"
        :className="args.className"
      ></LineProgress>\`
  }),
  // 控制 controls 中能控制的參數
  parameters: {
    controls: {
      // include: ['themeColor', 'label', 'value', 'name' ],
    },
    docs: {
      source: {
        transform: (src, storyContext) => {
          const {
            args
          } = storyContext;
          return [\`<script setup>\`, \`import { LineProgress } from "@ded-wds-vue/ui";\`, \`<\/script>\`, "", "<template>", \`  <LineProgress\`, \`    \${args.label ? \`label="\${args.label}"\` : ""}\`, \`    \${args.percent !== undefined ? \`:percent="\${args.percent}"\` : ""}\`, \`    \${args.strokeWidth !== undefined ? \`:strokeWidth="\${args.strokeWidth}"\` : ""}\`, \`    \${args.className ? \`className="\${args.className}"\` : ""}\`, \`  ></LineProgress>\`, "</template>"].filter(Boolean).join("\\n").trim();
        }
      }
    }
  }
}`,...(m=(p=n.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};const _=["DefaultLineProgress"];export{n as DefaultLineProgress,_ as __namedExportsOrder,y as default};

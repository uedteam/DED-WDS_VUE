import{g as u,c as o,t as l,e as g,a as n,x as c,n as f,o as i}from"./vue.esm-bundler-qCK_iSPY.js";const h={class:"ded-progress-line-container"},b={key:0,class:"ded-progress-label"},y={class:"ded-progress-line-label ded-progress-percent-text"},a={__name:"LineProgress",props:{label:{type:String,default:""},percent:{type:Number,default:0},strokeWidth:{type:Number,default:10},className:{type:String,default:""}},setup(r){const e=r,s=u(()=>Math.min(Math.max(e.percent,0),100));return(L,N)=>(i(),o("div",h,[e.label?(i(),o("div",b,l(e.label),1)):g("",!0),n("div",{class:f({"ded-progress-line":!0,[e.className]:!!e.className})},[n("div",{class:"ded-progress-line-track",style:c({height:`${e.strokeWidth}px`})},[n("div",{class:"ded-progress-line-percent-form",style:c({width:`${s.value}%`})},null,4)],4),n("div",y,l(`${s.value}%`),1)],2)]))}};a.__docgenInfo={exportName:"default",displayName:"LineProgress",description:"",tags:{},props:[{name:"label",type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"percent",type:{name:"number"},defaultValue:{func:!1,value:"0"}},{name:"strokeWidth",type:{name:"number"},defaultValue:{func:!1,value:"10"}},{name:"className",type:{name:"string"},defaultValue:{func:!1,value:'""'}}],sourceFiles:["/home/runner/work/DED-WDS_VUE/DED-WDS_VUE/libs/src/ui/element/Progress/LineProgress/LineProgress.vue"]};const k={title:"Component/Progress-Line",component:a,tags:["autodocs"],argTypes:{label:{description:"進度指示標籤",control:{type:"text"}},percent:{description:"進度",control:{type:"range",min:0,max:100,step:1}},strokeWidth:{description:"線條寬度",control:{type:"range",min:1,max:20,step:1}},className:{description:"客製化樣式",control:{type:"text"}}},parameters:{docs:{title:"LineProgress",description:{component:"長條進度指示組件的呈現及說明。"}}}},t={name:"預設項目",args:{label:"Label",percent:65,strokeWidth:10,className:""},render:r=>({components:{LineProgress:a},setup(){return{args:r}},template:`
            <LineProgress
                :label="args.label"
                :percent="args.percent"
                :strokeWidth="args.strokeWidth"
                :className="args.className"
            ></LineProgress>
        `}),parameters:{controls:{},docs:{source:{transform:(r,e)=>{const{args:s}=e;return["<LineProgress",`  :label="${s.label}"`,`  :percent="${s.percent}"`,`  :strokeWidth="${s.strokeWidth}"`,`  :className="${s.className}"`,"></LineProgress>"].join(`
`).trim()}}}}};var p,m,d;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: "預設項目",
  args: {
    // themeColor: "primary",
    label: "Label",
    percent: 65,
    strokeWidth: 10,
    className: ''
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
            ></LineProgress>
        \`
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
          return ['<LineProgress', \`  :label="\${args.label}"\`, \`  :percent="\${args.percent}"\`, \`  :strokeWidth="\${args.strokeWidth}"\`, \`  :className="\${args.className}"\`, '></LineProgress>'].join('\\n').trim();
        }
      }
    }
  }
}`,...(d=(m=t.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};const _=["DefaultLineProgress"];export{t as DefaultLineProgress,_ as __namedExportsOrder,k as default};

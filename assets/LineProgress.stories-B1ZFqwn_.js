import{g as h,c as l,t as c,e as P,a as n,x as i,n as f,o as m}from"./vue.esm-bundler-C8tbd0VY.js";const N={class:"ded-progress-line-container"},k={key:0,class:"ded-progress-label"},y={class:"ded-progress-line-label ded-progress-percent-text"},o={__name:"LineProgress",props:{label:{type:String,default:""},percent:{type:Number,default:0},strokeWidth:{type:Number,default:10},className:{type:String,default:""}},setup(r){const s=r,e=h(()=>Math.min(Math.max(s.percent,0),100));return(W,_)=>(m(),l("div",N,[s.label?(m(),l("div",k,c(s.label),1)):P("",!0),n("div",{class:f({"ded-progress-line":!0,[s.className]:!!s.className})},[n("div",{class:"ded-progress-line-track",style:i({height:`${s.strokeWidth}px`})},[n("div",{class:"ded-progress-line-percent-form",style:i({width:`${e.value}%`})},null,4)],4),n("div",y,c(`${e.value}%`),1)],2)]))}};o.__docgenInfo={exportName:"default",displayName:"LineProgress",description:"",tags:{},props:[{name:"label",type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"percent",type:{name:"number"},defaultValue:{func:!1,value:"0"}},{name:"strokeWidth",type:{name:"number"},defaultValue:{func:!1,value:"10"}},{name:"className",type:{name:"string"},defaultValue:{func:!1,value:'""'}}],sourceFiles:["D:/98_測試/up/DED-WDS_VUE/libs/src/ui/element/Progress/LineProgress/LineProgress.vue"]};const v={title:"Component/Progress-Line",component:o,tags:["autodocs"],argTypes:{label:{description:"進度指示標籤",control:{type:"text"}},percent:{description:"進度",control:{type:"range",min:0,max:100,step:1}},strokeWidth:{description:"線條寬度",control:{type:"range",min:1,max:20,step:1}},className:{description:"客製化樣式",control:{type:"text"}}},parameters:{docs:{title:"LineProgress",description:{component:"LineProgress 組件的呈現及說明。"}}}},a={name:"預設項目",args:{label:"Label",percent:65,strokeWidth:10,className:""},render:r=>({components:{LineProgress:o},setup(){return{args:r}},template:`
            <LineProgress
                :label="args.label"
                :percent="args.percent"
                :strokeWidth="args.strokeWidth"
                :className="args.className"
            ></LineProgress>
        `}),parameters:{controls:{},docs:{source:{transform:(r,s)=>{const{args:e}=s;return["<LineProgress",`  :label="${e.label}"`,`  :percent="${e.percent}"`,`  :strokeWidth="${e.strokeWidth}"`,`  :className="${e.className}"`,"></LineProgress>"].join(`
`).trim()}}}}},t={name:"顯示標籤",args:{label:"Label",percent:65,strokeWidth:10,className:""},render:r=>({components:{LineProgress:o},setup(){return{args:r}},template:`
            <LineProgress
                :label="args.label"
                :percent="args.percent"
                :strokeWidth="args.strokeWidth"
                :className="args.className"
            ></LineProgress>
        `}),parameters:{controls:{},docs:{source:{transform:(r,s)=>{const{args:e}=s;return["<LineProgress",`  :label="${e.label}"`,`  :percent="${e.percent}"`,`  :strokeWidth="${e.strokeWidth}"`,`  :className="${e.className}"`,"></LineProgress>"].join(`
`).trim()}}}}};var p,u,d;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: "預設項目",
  args: {
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
}`,...(d=(u=a.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};var g,b,L;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
  name: "顯示標籤",
  args: {
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
}`,...(L=(b=t.parameters)==null?void 0:b.docs)==null?void 0:L.source}}};const x=["DefaultLineProgress","LineProgressLabelStory"];export{a as DefaultLineProgress,t as LineProgressLabelStory,x as __namedExportsOrder,v as default};

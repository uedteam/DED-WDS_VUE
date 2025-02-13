import{g as P,c,t as i,e as N,a,x as g,n as l,o as m}from"./vue.esm-bundler-qCK_iSPY.js";const k={class:"ded-progress-line-container"},W={key:0,class:"ded-progress-label"},o={__name:"LineProgress",props:{themeColor:{type:String,default:"primary",validator:s=>["primary","secondary","neutral","info","success","warning","error"].includes(s)},label:{type:String,default:""},percent:{type:Number,default:0},strokeWidth:{type:Number,default:10},className:{type:String,default:""}},setup(s){const r=s,e=P(()=>Math.min(Math.max(r.percent,0),100));return($,C)=>(m(),c("div",k,[r.label?(m(),c("div",W,i(r.label),1)):N("",!0),a("div",{class:l({"ded-progress-line":!0,[r.className]:!!r.className})},[a("div",{class:"ded-progress-line-track",style:g({height:`${r.strokeWidth}px`})},[a("div",{class:l(["ded-progress-line-percent-form",`ded-progress-line-percent-form-${r.themeColor}`]),style:g({width:`${e.value}%`})},null,6)],4),a("div",{class:l(["ded-progress-line-label ded-progress-percent-text",`ded-progress-percent-text-${r.themeColor}`])},i(`${e.value}%`),3)],2)]))}};o.__docgenInfo={exportName:"default",displayName:"LineProgress",description:"",tags:{},props:[{name:"themeColor",type:{name:"string"},defaultValue:{func:!1,value:'"primary"'},values:["primary","secondary","neutral","info","success","warning","error"]},{name:"label",type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"percent",type:{name:"number"},defaultValue:{func:!1,value:"0"}},{name:"strokeWidth",type:{name:"number"},defaultValue:{func:!1,value:"10"}},{name:"className",type:{name:"string"},defaultValue:{func:!1,value:'""'}}],sourceFiles:["/Users/auouser/Desktop/Work_Space/DED-WDS_VUE/libs/src/ui/element/Progress/LineProgress/LineProgress.vue"]};const f={title:"Component/Progress-Line",component:o,tags:["autodocs"],argTypes:{themeColor:{description:"主題顏色",control:{type:"select"},options:["primary","secondary","neutral","info","success","warning","error"],table:{type:{summary:"primary | secondary | neutral | info | success | warning | error"}}},label:{description:"進度指示標籤",control:{type:"text"}},percent:{description:"進度",control:{type:"range",min:0,max:100,step:1}},strokeWidth:{description:"線條寬度",control:{type:"range",min:1,max:20,step:1}},className:{description:"客製化樣式",control:{type:"text"}}},parameters:{docs:{title:"LineProgress",description:{component:"長條進度指示組件的呈現及說明。"}}}},t={name:"預設項目",args:{themeColor:"primary",label:"Label",percent:65,strokeWidth:10,className:""},render:s=>({components:{LineProgress:o},setup(){return{args:s}},template:`
            <LineProgress
                :themeColor="args.themeColor"
                :label="args.label"
                :percent="args.percent"
                :strokeWidth="args.strokeWidth"
                :className="args.className"
            ></LineProgress>
        `}),parameters:{controls:{},docs:{source:{transform:(s,r)=>{const{args:e}=r;return["<LineProgress",`  :themeColor="${e.themeColor}"`,`  :label="${e.label}"`,`  :percent="${e.percent}"`,`  :strokeWidth="${e.strokeWidth}"`,`  :className="${e.className}"`,"></LineProgress>"].join(`
`).trim()}}}}},n={name:"主題色彩",args:{label:"Label",percent:65,strokeWidth:10,className:""},render:s=>({components:{LineProgress:o},setup(){return{args:s}},template:`
            <div style="display:flex; flex-direction: column; gap:8px">
                <LineProgress
                    themeColor="primary"
                    :label="args.label"
                    :percent="args.percent"
                    :strokeWidth="args.strokeWidth"
                    :className="args.className"
                ></LineProgress>
                <LineProgress
                    themeColor="secondary"
                    :label="args.label"
                    :percent="args.percent"
                    :strokeWidth="args.strokeWidth"
                    :className="args.className"
                ></LineProgress>
                <LineProgress
                    themeColor="neutral"
                    :label="args.label"
                    :percent="args.percent"
                    :strokeWidth="args.strokeWidth"
                    :className="args.className"
                ></LineProgress>
                <LineProgress
                    themeColor="info"
                    :label="args.label"
                    :percent="args.percent"
                    :strokeWidth="args.strokeWidth"
                    :className="args.className"
                ></LineProgress>
                <LineProgress
                    themeColor="success"
                    :label="args.label"
                    :percent="args.percent"
                    :strokeWidth="args.strokeWidth"
                    :className="args.className"
                ></LineProgress>
                <LineProgress
                    themeColor="warning"
                    :label="args.label"
                    :percent="args.percent"
                    :strokeWidth="args.strokeWidth"
                    :className="args.className"
                ></LineProgress>
                <LineProgress
                    themeColor="error"
                    :label="args.label"
                    :percent="args.percent"
                    :strokeWidth="args.strokeWidth"
                    :className="args.className"
                ></LineProgress>
            </div>
        `}),parameters:{controls:{exclude:["themeColor"]},docs:{source:{transform:(s,r)=>{const{args:e}=r;return["<LineProgress",'  themeColor="primary"',`  label="${e.label}"`,`  :percent="${e.percent}"`,`  :strokeWidth="${e.strokeWidth}"`,`  className="${e.className}"`,"></LineProgress>","<LineProgress",'  themeColor="secondary"',`  label="${e.label}"`,`  :percent="${e.percent}"`,`  :strokeWidth="${e.strokeWidth}"`,`  className="${e.className}"`,"></LineProgress>","<LineProgress",'  themeColor="tertiary"',`  label="${e.label}"`,`  :percent="${e.percent}"`,`  :strokeWidth="${e.strokeWidth}"`,`  className="${e.className}"`,"></LineProgress>","<LineProgress",'  themeColor="success"',`  label="${e.label}"`,`  :percent="${e.percent}"`,`  :strokeWidth="${e.strokeWidth}"`,`  className="${e.className}"`,"></LineProgress>","<LineProgress",'  themeColor="warning"',`  :percent="${e.percent}"`,`  :strokeWidth="${e.strokeWidth}"`,`  label="${e.label}"`,`  className="${e.className}"`,"></LineProgress>","<LineProgress",'  themeColor="error"',`  label="${e.label}"`,`  :percent="${e.percent}"`,`  :strokeWidth="${e.strokeWidth}"`,`  className="${e.className}"`,"></LineProgress>","<LineProgress",'  themeColor="info"',`  label="${e.label}"`,`  :percent="${e.percent}"`,`  :strokeWidth="${e.strokeWidth}"`,`  className="${e.className}"`,"></LineProgress>"].join(`
`).trim()}}}}};var p,d,h;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: "預設項目",
  args: {
    themeColor: "primary",
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
                :themeColor="args.themeColor"
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
          return ['<LineProgress', \`  :themeColor="\${args.themeColor}"\`, \`  :label="\${args.label}"\`, \`  :percent="\${args.percent}"\`, \`  :strokeWidth="\${args.strokeWidth}"\`, \`  :className="\${args.className}"\`, '></LineProgress>'].join('\\n').trim();
        }
      }
    }
  }
}`,...(h=(d=t.parameters)==null?void 0:d.docs)==null?void 0:h.source}}};var u,b,L;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
  name: "主題色彩",
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
            <div style="display:flex; flex-direction: column; gap:8px">
                <LineProgress
                    themeColor="primary"
                    :label="args.label"
                    :percent="args.percent"
                    :strokeWidth="args.strokeWidth"
                    :className="args.className"
                ></LineProgress>
                <LineProgress
                    themeColor="secondary"
                    :label="args.label"
                    :percent="args.percent"
                    :strokeWidth="args.strokeWidth"
                    :className="args.className"
                ></LineProgress>
                <LineProgress
                    themeColor="neutral"
                    :label="args.label"
                    :percent="args.percent"
                    :strokeWidth="args.strokeWidth"
                    :className="args.className"
                ></LineProgress>
                <LineProgress
                    themeColor="info"
                    :label="args.label"
                    :percent="args.percent"
                    :strokeWidth="args.strokeWidth"
                    :className="args.className"
                ></LineProgress>
                <LineProgress
                    themeColor="success"
                    :label="args.label"
                    :percent="args.percent"
                    :strokeWidth="args.strokeWidth"
                    :className="args.className"
                ></LineProgress>
                <LineProgress
                    themeColor="warning"
                    :label="args.label"
                    :percent="args.percent"
                    :strokeWidth="args.strokeWidth"
                    :className="args.className"
                ></LineProgress>
                <LineProgress
                    themeColor="error"
                    :label="args.label"
                    :percent="args.percent"
                    :strokeWidth="args.strokeWidth"
                    :className="args.className"
                ></LineProgress>
            </div>
        \`
  }),
  // 控制 controls 中能控制的參數
  parameters: {
    controls: {
      exclude: ['themeColor']
    },
    docs: {
      source: {
        transform: (src, storyContext) => {
          const {
            args
          } = storyContext;
          return ['<LineProgress', \`  themeColor="primary"\`, \`  label="\${args.label}"\`, \`  :percent="\${args.percent}"\`, \`  :strokeWidth="\${args.strokeWidth}"\`, \`  className="\${args.className}"\`, '></LineProgress>', '<LineProgress', \`  themeColor="secondary"\`, \`  label="\${args.label}"\`, \`  :percent="\${args.percent}"\`, \`  :strokeWidth="\${args.strokeWidth}"\`, \`  className="\${args.className}"\`, '></LineProgress>', '<LineProgress', \`  themeColor="tertiary"\`, \`  label="\${args.label}"\`, \`  :percent="\${args.percent}"\`, \`  :strokeWidth="\${args.strokeWidth}"\`, \`  className="\${args.className}"\`, '></LineProgress>', '<LineProgress', \`  themeColor="success"\`, \`  label="\${args.label}"\`, \`  :percent="\${args.percent}"\`, \`  :strokeWidth="\${args.strokeWidth}"\`, \`  className="\${args.className}"\`, '></LineProgress>', '<LineProgress', \`  themeColor="warning"\`, \`  :percent="\${args.percent}"\`, \`  :strokeWidth="\${args.strokeWidth}"\`, \`  label="\${args.label}"\`, \`  className="\${args.className}"\`, '></LineProgress>', '<LineProgress', \`  themeColor="error"\`, \`  label="\${args.label}"\`, \`  :percent="\${args.percent}"\`, \`  :strokeWidth="\${args.strokeWidth}"\`, \`  className="\${args.className}"\`, '></LineProgress>', '<LineProgress', \`  themeColor="info"\`, \`  label="\${args.label}"\`, \`  :percent="\${args.percent}"\`, \`  :strokeWidth="\${args.strokeWidth}"\`, \`  className="\${args.className}"\`, '></LineProgress>'].join('\\n').trim();
        }
      }
    }
  }
}`,...(L=(b=n.parameters)==null?void 0:b.docs)==null?void 0:L.source}}};const x=["DefaultLineProgress","LineProgressColorStory"];export{t as DefaultLineProgress,n as LineProgressColorStory,x as __namedExportsOrder,f as default};

import{c as k,a as W,b as a,t as i,p as c,n as m,o as C}from"./vue.esm-bundler-7m8tONXv.js";const y={class:"ded-progress-line-container"},$={class:"ded-progress-line-label"},f={class:"ded-progress-line-percent"},n={__name:"LineProgress",props:{themeColor:{type:String,default:"primary",validator:r=>["primary","secondary","tertiary","success","warning","error","info"].includes(r)},label:{type:String,default:""},percent:{type:Number,default:0},strokeWidth:{type:Number,default:10},className:{type:String,default:""}},setup(r){const s=r,e=k(()=>Math.min(Math.max(s.percent,0),100));return(v,x)=>(C(),W("div",y,[a("div",$,i(s.label),1),a("div",{class:m({"ded-progress-line":!0,[s.className]:!!s.className})},[a("div",{class:"ded-progress-line-track",style:c({height:`${s.strokeWidth}px`})},[a("div",{class:m(`ded-progress-line-percent-${s.themeColor}`),style:c({width:`${e.value}%`})},null,6)],4),a("div",f,i(`${e.value}%`),1)],2)]))}};n.__docgenInfo={exportName:"default",displayName:"LineProgress",description:"",tags:{},props:[{name:"themeColor",type:{name:"string"},defaultValue:{func:!1,value:'"primary"'},values:["primary","secondary","tertiary","success","warning","error","info"]},{name:"label",type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"percent",type:{name:"number"},defaultValue:{func:!1,value:"0"}},{name:"strokeWidth",type:{name:"number"},defaultValue:{func:!1,value:"10"}},{name:"className",type:{name:"string"},defaultValue:{func:!1,value:'""'}}],sourceFiles:["/Users/auouser/Desktop/Work_Space/DED-WDS_VUE/libs/src/ui/element/Progress/LineProgress/LineProgress.vue"]};const D={title:"Component/Progress-Line",component:n,tags:["autodocs"],argTypes:{themeColor:{description:"主題顏色",control:{type:"select"},options:["primary","secondary","tertiary","success","warning","error","info"],table:{type:{summary:"primary | secondary | tertiary | success | warning | error | info"}}},label:{description:"進度指示標籤",control:{type:"text"}},percent:{description:"進度",control:{type:"range",min:0,max:100,step:1}},strokeWidth:{description:"線條寬度",control:{type:"range",min:1,max:20,step:1}},className:{description:"客製化樣式",control:{type:"text"}}},parameters:{docs:{title:"LineProgress",description:{component:"LineProgress 組件的呈現及說明。"}}}},t={name:"預設項目",args:{themeColor:"primary",label:"Label",percent:65,strokeWidth:10,className:""},render:r=>({components:{LineProgress:n},setup(){return{args:r}},template:`
            <LineProgress 
                :themeColor="args.themeColor"
                :label="args.label"
                :percent="args.percent"
                :strokeWidth="args.strokeWidth"
                :className="args.className"
            ></LineProgress>
        `}),parameters:{controls:{},docs:{source:{transform:(r,s)=>{const{args:e}=s;return["<LineProgress",`  :themeColor="${e.themeColor}"`,`  :label="${e.label}"`,`  :percent="${e.percent}"`,`  :strokeWidth="${e.strokeWidth}"`,`  :className="${e.className}"`,"></LineProgress>"].join(`
`).trim()}}}}},o={name:"顯示標籤",args:{themeColor:"primary",label:"Label",percent:65,strokeWidth:10,className:""},render:r=>({components:{LineProgress:n},setup(){return{args:r}},template:`
            <LineProgress 
                :themeColor="args.themeColor"
                :label="args.label"
                :percent="args.percent"
                :strokeWidth="args.strokeWidth"
                :className="args.className"
            ></LineProgress>
        `}),parameters:{controls:{},docs:{source:{transform:(r,s)=>{const{args:e}=s;return["<LineProgress",`  :themeColor="${e.themeColor}"`,`  :label="${e.label}"`,`  :percent="${e.percent}"`,`  :strokeWidth="${e.strokeWidth}"`,`  :className="${e.className}"`,"></LineProgress>"].join(`
`).trim()}}}}},l={name:"主題色彩",args:{label:"",strokeWidth:10,className:""},render:r=>({components:{LineProgress:n},setup(){return{args:r}},template:`
            <div style="display:flex; flex-direction: column; gap:8px">
                <LineProgress
                    themeColor="primary"
                    :label="args.label"
                    :percent=40
                    :strokeWidth="args.strokeWidth"
                    :className="args.className"
                ></LineProgress>
                <LineProgress
                    themeColor="secondary"
                    :label="args.label"
                    :percent=50
                    :strokeWidth="args.strokeWidth"
                    :className="args.className"
                ></LineProgress>
                <LineProgress
                    themeColor="tertiary"
                    :label="args.label"
                    :percent=60
                    :strokeWidth="args.strokeWidth"
                    :className="args.className"
                ></LineProgress>
                <LineProgress
                    themeColor="success"
                    :label="args.label"
                    :percent=70
                    :strokeWidth="args.strokeWidth"
                    :className="args.className"
                ></LineProgress>
                <LineProgress
                    themeColor="warning"
                    :label="args.label"
                    :percent=80
                    :strokeWidth="args.strokeWidth"
                    :className="args.className"
                ></LineProgress>
                <LineProgress
                    themeColor="error"
                    :label="args.label"
                    :percent=90
                    :strokeWidth="args.strokeWidth"
                    :className="args.className"
                ></LineProgress>
                <LineProgress
                    themeColor="info"
                    :label="args.label"
                    :percent=100
                    :strokeWidth="args.strokeWidth"
                    :className="args.className"
                ></LineProgress>
            </div>
        `}),parameters:{controls:{exclude:["themeColor","percent"]},docs:{source:{transform:(r,s)=>{const{args:e}=s;return["<LineProgress",'  themeColor="primary"',`  label="${e.label}"`,'  :percent="40"',`  :strokeWidth="${e.strokeWidth}"`,`  className="${e.className}"`,"></LineProgress>","<LineProgress",'  themeColor="secondary"',`  label="${e.label}"`,'  :percent="50"',`  :strokeWidth="${e.strokeWidth}"`,`  className="${e.className}"`,"></LineProgress>","<LineProgress",'  themeColor="tertiary"',`  label="${e.label}"`,'  :percent="60"',`  :strokeWidth="${e.strokeWidth}"`,`  className="${e.className}"`,"></LineProgress>","<LineProgress",'  themeColor="success"',`  label="${e.label}"`,'  :percent="70"',`  :strokeWidth="${e.strokeWidth}"`,`  className="${e.className}"`,"></LineProgress>","<LineProgress",'  themeColor="warning"','  :percent="80"',`  :strokeWidth="${e.strokeWidth}"`,`  label="${e.label}"`,`  className="${e.className}"`,"></LineProgress>","<LineProgress",'  themeColor="error"',`  label="${e.label}"`,'  :percent="90"',`  :strokeWidth="${e.strokeWidth}"`,`  className="${e.className}"`,"></LineProgress>","<LineProgress",'  themeColor="info"',`  label="${e.label}"`,'  :percent="100"',`  :strokeWidth="${e.strokeWidth}"`,`  className="${e.className}"`,"></LineProgress>"].join(`
`).trim()}}}}};var g,d,p;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(p=(d=t.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};var h,u,b;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
  name: "顯示標籤",
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
}`,...(b=(u=o.parameters)==null?void 0:u.docs)==null?void 0:b.source}}};var L,P,N;l.parameters={...l.parameters,docs:{...(L=l.parameters)==null?void 0:L.docs,source:{originalSource:`{
  name: "主題色彩",
  args: {
    label: "",
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
                    :percent=40
                    :strokeWidth="args.strokeWidth"
                    :className="args.className"
                ></LineProgress>
                <LineProgress
                    themeColor="secondary"
                    :label="args.label"
                    :percent=50
                    :strokeWidth="args.strokeWidth"
                    :className="args.className"
                ></LineProgress>
                <LineProgress
                    themeColor="tertiary"
                    :label="args.label"
                    :percent=60
                    :strokeWidth="args.strokeWidth"
                    :className="args.className"
                ></LineProgress>
                <LineProgress
                    themeColor="success"
                    :label="args.label"
                    :percent=70
                    :strokeWidth="args.strokeWidth"
                    :className="args.className"
                ></LineProgress>
                <LineProgress
                    themeColor="warning"
                    :label="args.label"
                    :percent=80
                    :strokeWidth="args.strokeWidth"
                    :className="args.className"
                ></LineProgress>
                <LineProgress
                    themeColor="error"
                    :label="args.label"
                    :percent=90
                    :strokeWidth="args.strokeWidth"
                    :className="args.className"
                ></LineProgress>
                <LineProgress
                    themeColor="info"
                    :label="args.label"
                    :percent=100
                    :strokeWidth="args.strokeWidth"
                    :className="args.className"
                ></LineProgress>
            </div>
        \`
  }),
  // 控制 controls 中能控制的參數
  parameters: {
    controls: {
      exclude: ['themeColor', 'percent']
    },
    docs: {
      source: {
        transform: (src, storyContext) => {
          const {
            args
          } = storyContext;
          return ['<LineProgress', \`  themeColor="primary"\`, \`  label="\${args.label}"\`, \`  :percent="40"\`, \`  :strokeWidth="\${args.strokeWidth}"\`, \`  className="\${args.className}"\`, '></LineProgress>', '<LineProgress', \`  themeColor="secondary"\`, \`  label="\${args.label}"\`, \`  :percent="50"\`, \`  :strokeWidth="\${args.strokeWidth}"\`, \`  className="\${args.className}"\`, '></LineProgress>', '<LineProgress', \`  themeColor="tertiary"\`, \`  label="\${args.label}"\`, \`  :percent="60"\`, \`  :strokeWidth="\${args.strokeWidth}"\`, \`  className="\${args.className}"\`, '></LineProgress>', '<LineProgress', \`  themeColor="success"\`, \`  label="\${args.label}"\`, \`  :percent="70"\`, \`  :strokeWidth="\${args.strokeWidth}"\`, \`  className="\${args.className}"\`, '></LineProgress>', '<LineProgress', \`  themeColor="warning"\`, \`  :percent="80"\`, \`  :strokeWidth="\${args.strokeWidth}"\`, \`  label="\${args.label}"\`, \`  className="\${args.className}"\`, '></LineProgress>', '<LineProgress', \`  themeColor="error"\`, \`  label="\${args.label}"\`, \`  :percent="90"\`, \`  :strokeWidth="\${args.strokeWidth}"\`, \`  className="\${args.className}"\`, '></LineProgress>', '<LineProgress', \`  themeColor="info"\`, \`  label="\${args.label}"\`, \`  :percent="100"\`, \`  :strokeWidth="\${args.strokeWidth}"\`, \`  className="\${args.className}"\`, '></LineProgress>'].join('\\n').trim();
        }
      }
    }
  }
}`,...(N=(P=l.parameters)==null?void 0:P.docs)==null?void 0:N.source}}};const S=["DefaultLineProgress","LineProgressLabelStory","LineProgressColorStory"];export{t as DefaultLineProgress,l as LineProgressColorStory,o as LineProgressLabelStory,S as __namedExportsOrder,D as default};

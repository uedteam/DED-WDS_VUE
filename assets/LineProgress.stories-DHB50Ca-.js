import{c as k,a as W,b as a,t as i,d as c,n as m,F as C,o as y}from"./vue.esm-bundler-Dy0-1sXb.js";const $={class:"progress-line-label"},f={class:"progress-line-percent"},n={__name:"LineProgress",props:{themeColor:{type:String,default:"primary",validator:r=>["primary","secondary","tertiary","success","warning","error","info"].includes(r)},percent:{type:Number,default:0},strokeWidth:{type:Number,default:10},label:{type:String,default:"label"},className:{type:String,default:""}},setup(r){const s=r,e=k(()=>Math.min(Math.max(s.percent,0),100));return(v,x)=>(y(),W(C,null,[a("div",$,i(s.label),1),a("div",{class:m({"progress-line":!0,[s.className]:!!s.className})},[a("div",{class:"progress-line-track",style:c({height:`${s.strokeWidth}px`})},[a("div",{class:m(`progress-line-percent-${s.themeColor}`),style:c({width:`${e.value}%`})},null,6)],4),a("div",f,i(`${e.value}%`),1)],2)],64))}};n.__docgenInfo={exportName:"default",displayName:"LineProgress",description:"",tags:{},props:[{name:"themeColor",type:{name:"string"},defaultValue:{func:!1,value:'"primary"'},values:["primary","secondary","tertiary","success","warning","error","info"]},{name:"percent",type:{name:"number"},defaultValue:{func:!1,value:"0"}},{name:"strokeWidth",type:{name:"number"},defaultValue:{func:!1,value:"10"}},{name:"label",type:{name:"string"},defaultValue:{func:!1,value:'"label"'}},{name:"className",type:{name:"string"},defaultValue:{func:!1,value:"''"}}],sourceFiles:["D:/98_測試/up/DED-WDS_VUE/libs/src/ui/element/Progress/LineProgress/LineProgress.vue"]};const D={title:"Design System/Progress-Line",component:n,tags:["autodocs"],argTypes:{themeColor:{description:"主題顏色",control:{type:"select"},options:["primary","secondary","tertiary","success","warning","error","info"],table:{type:{summary:"primary | secondary | tertiary | success | warning | error | info"}}},percent:{description:"進度",control:{type:"range",min:0,max:100,step:1}},strokeWidth:{description:"線條寬度",control:{type:"range",min:1,max:20,step:1}},label:{description:"進度指示標籤",control:{type:"text"}},className:{description:"客製化樣式",control:{type:"text"}}},parameters:{docs:{title:"LineProgress",description:{component:"LineProgress 組件的呈現及說明。"}}}},t={name:"預設項目",args:{themeColor:"primary",percent:50,strokeWidth:10,label:"",className:""},render:r=>({components:{LineProgress:n},setup(){return{args:r}},template:`
            <LineProgress 
                :themeColor="args.themeColor"
                :percent="args.percent"
                :strokeWidth="args.strokeWidth"
                :label="args.label"
                :className="args.className"
            ></LineProgress>
        `}),parameters:{controls:{},docs:{source:{transform:(r,s)=>{const{args:e}=s;return["<LineProgress",`  :themeColor="${e.themeColor}"`,`  :percent="${e.percent}"`,`  :strokeWidth="${e.strokeWidth}"`,`  :label="${e.label}"`,`  :className="${e.className}"`,"></LineProgress>"].join(`
`).trim()}}}}},o={name:"顯示標籤",args:{themeColor:"primary",percent:66,strokeWidth:10,label:"Complete",className:""},render:r=>({components:{LineProgress:n},setup(){return{args:r}},template:`
            <LineProgress 
                :themeColor="args.themeColor"
                :percent="args.percent"
                :strokeWidth="args.strokeWidth"
                :label="args.label"
                :className="args.className"
            ></LineProgress>
        `}),parameters:{controls:{},docs:{source:{transform:(r,s)=>{const{args:e}=s;return["<LineProgress",`  :themeColor="${e.themeColor}"`,`  :percent="${e.percent}"`,`  :strokeWidth="${e.strokeWidth}"`,`  :label="${e.label}"`,`  :className="${e.className}"`,"></LineProgress>"].join(`
`).trim()}}}}},l={name:"主題色彩",args:{strokeWidth:10,label:"",className:""},render:r=>({components:{LineProgress:n},setup(){return{args:r}},template:`
            <div style="display:flex; flex-direction: column; gap:8px">
                <LineProgress
                    themeColor="primary"
                    :percent=40
                    :strokeWidth="args.strokeWidth"
                    :label="args.label"
                    :className="args.className"
                ></LineProgress>
                <LineProgress
                    themeColor="secondary"
                    :percent=50
                    :strokeWidth="args.strokeWidth"
                    :label="args.label"
                    :className="args.className"
                ></LineProgress>
                <LineProgress
                    themeColor="tertiary"
                    :percent=60
                    :strokeWidth="args.strokeWidth"
                    :label="args.label"
                    :className="args.className"
                ></LineProgress>
                <LineProgress
                    themeColor="success"
                    :percent=70
                    :strokeWidth="args.strokeWidth"
                    :label="args.label"
                    :className="args.className"
                ></LineProgress>
                <LineProgress
                    themeColor="warning"
                    :percent=80
                    :strokeWidth="args.strokeWidth"
                    :label="args.label"
                    :className="args.className"
                ></LineProgress>
                <LineProgress
                    themeColor="error"
                    :percent=90
                    :strokeWidth="args.strokeWidth"
                    :label="args.label"
                    :className="args.className"
                ></LineProgress>
                <LineProgress
                    themeColor="info"
                    :percent=100
                    :strokeWidth="args.strokeWidth"
                    :label="args.label"
                    :className="args.className"
                ></LineProgress>
            </div>
        `}),parameters:{controls:{exclude:["themeColor","percent"]},docs:{source:{transform:(r,s)=>{const{args:e}=s;return["<LineProgress",'  themeColor="primary"','  :percent="40"',`  :strokeWidth="${e.strokeWidth}"`,`  label="${e.label}"`,`  className="${e.className}"`,"></LineProgress>","<LineProgress",'  themeColor="secondary"','  :percent="50"',`  :strokeWidth="${e.strokeWidth}"`,`  label="${e.label}"`,`  className="${e.className}"`,"></LineProgress>","<LineProgress",'  themeColor="tertiary"','  :percent="60"',`  :strokeWidth="${e.strokeWidth}"`,`  label="${e.label}"`,`  className="${e.className}"`,"></LineProgress>","<LineProgress",'  themeColor="success"','  :percent="70"',`  :strokeWidth="${e.strokeWidth}"`,`  label="${e.label}"`,`  className="${e.className}"`,"></LineProgress>","<LineProgress",'  themeColor="warning"','  :percent="80"',`  :strokeWidth="${e.strokeWidth}"`,`  label="${e.label}"`,`  className="${e.className}"`,"></LineProgress>","<LineProgress",'  themeColor="error"','  :percent="90"',`  :strokeWidth="${e.strokeWidth}"`,`  label="${e.label}"`,`  className="${e.className}"`,"></LineProgress>","<LineProgress",'  themeColor="info"','  :percent="100"',`  :strokeWidth="${e.strokeWidth}"`,`  label="${e.label}"`,`  className="${e.className}"`,"></LineProgress>"].join(`
`).trim()}}}}};var g,d,p;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
  name: "預設項目",
  args: {
    themeColor: "primary",
    percent: 50,
    strokeWidth: 10,
    label: "",
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
                :percent="args.percent"
                :strokeWidth="args.strokeWidth"
                :label="args.label"
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
          return ['<LineProgress', \`  :themeColor="\${args.themeColor}"\`, \`  :percent="\${args.percent}"\`, \`  :strokeWidth="\${args.strokeWidth}"\`, \`  :label="\${args.label}"\`, \`  :className="\${args.className}"\`, '></LineProgress>'].join('\\n').trim();
        }
      }
    }
  }
}`,...(p=(d=t.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};var h,u,b;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
  name: "顯示標籤",
  args: {
    themeColor: "primary",
    percent: 66,
    strokeWidth: 10,
    label: "Complete",
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
                :percent="args.percent"
                :strokeWidth="args.strokeWidth"
                :label="args.label"
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
          return ['<LineProgress', \`  :themeColor="\${args.themeColor}"\`, \`  :percent="\${args.percent}"\`, \`  :strokeWidth="\${args.strokeWidth}"\`, \`  :label="\${args.label}"\`, \`  :className="\${args.className}"\`, '></LineProgress>'].join('\\n').trim();
        }
      }
    }
  }
}`,...(b=(u=o.parameters)==null?void 0:u.docs)==null?void 0:b.source}}};var L,P,N;l.parameters={...l.parameters,docs:{...(L=l.parameters)==null?void 0:L.docs,source:{originalSource:`{
  name: "主題色彩",
  args: {
    strokeWidth: 10,
    label: "",
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
                    :percent=40
                    :strokeWidth="args.strokeWidth"
                    :label="args.label"
                    :className="args.className"
                ></LineProgress>
                <LineProgress
                    themeColor="secondary"
                    :percent=50
                    :strokeWidth="args.strokeWidth"
                    :label="args.label"
                    :className="args.className"
                ></LineProgress>
                <LineProgress
                    themeColor="tertiary"
                    :percent=60
                    :strokeWidth="args.strokeWidth"
                    :label="args.label"
                    :className="args.className"
                ></LineProgress>
                <LineProgress
                    themeColor="success"
                    :percent=70
                    :strokeWidth="args.strokeWidth"
                    :label="args.label"
                    :className="args.className"
                ></LineProgress>
                <LineProgress
                    themeColor="warning"
                    :percent=80
                    :strokeWidth="args.strokeWidth"
                    :label="args.label"
                    :className="args.className"
                ></LineProgress>
                <LineProgress
                    themeColor="error"
                    :percent=90
                    :strokeWidth="args.strokeWidth"
                    :label="args.label"
                    :className="args.className"
                ></LineProgress>
                <LineProgress
                    themeColor="info"
                    :percent=100
                    :strokeWidth="args.strokeWidth"
                    :label="args.label"
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
          return ['<LineProgress', \`  themeColor="primary"\`, \`  :percent="40"\`, \`  :strokeWidth="\${args.strokeWidth}"\`, \`  label="\${args.label}"\`, \`  className="\${args.className}"\`, '></LineProgress>', '<LineProgress', \`  themeColor="secondary"\`, \`  :percent="50"\`, \`  :strokeWidth="\${args.strokeWidth}"\`, \`  label="\${args.label}"\`, \`  className="\${args.className}"\`, '></LineProgress>', '<LineProgress', \`  themeColor="tertiary"\`, \`  :percent="60"\`, \`  :strokeWidth="\${args.strokeWidth}"\`, \`  label="\${args.label}"\`, \`  className="\${args.className}"\`, '></LineProgress>', '<LineProgress', \`  themeColor="success"\`, \`  :percent="70"\`, \`  :strokeWidth="\${args.strokeWidth}"\`, \`  label="\${args.label}"\`, \`  className="\${args.className}"\`, '></LineProgress>', '<LineProgress', \`  themeColor="warning"\`, \`  :percent="80"\`, \`  :strokeWidth="\${args.strokeWidth}"\`, \`  label="\${args.label}"\`, \`  className="\${args.className}"\`, '></LineProgress>', '<LineProgress', \`  themeColor="error"\`, \`  :percent="90"\`, \`  :strokeWidth="\${args.strokeWidth}"\`, \`  label="\${args.label}"\`, \`  className="\${args.className}"\`, '></LineProgress>', '<LineProgress', \`  themeColor="info"\`, \`  :percent="100"\`, \`  :strokeWidth="\${args.strokeWidth}"\`, \`  label="\${args.label}"\`, \`  className="\${args.className}"\`, '></LineProgress>'].join('\\n').trim();
        }
      }
    }
  }
}`,...(N=(P=l.parameters)==null?void 0:P.docs)==null?void 0:N.source}}};const S=["DefaultLineProgress","LineProgressLabelStory","LineProgressColorStory"];export{t as DefaultLineProgress,l as LineProgressColorStory,o as LineProgressLabelStory,S as __namedExportsOrder,D as default};

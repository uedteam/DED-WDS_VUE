import{c as N,a as k,b as s,t as i,f as c,n as m,F as C,o as W}from"./vue.esm-bundler-wiEVvyCh.js";const f={class:"progress-line-label"},v={class:"progress-line-percent"},a={__name:"LineProgress",props:{label:{type:String,default:"label"},percent:{type:Number,default:66},strokeWidth:{type:Number,default:10},themeColor:{type:String,default:"primary",validator:e=>["primary","secondary","tertiary","success","warning","error","info"].includes(e)},className:{type:String,default:""}},setup(e){const r=e,l=N(()=>Math.min(Math.max(r.percent,0),100));return(x,_)=>(W(),k(C,null,[s("div",f,i(r.label),1),s("div",{class:m({"progress-line":!0,[r.className]:!!r.className})},[s("div",{class:"progress-line-track",style:c({height:`${r.strokeWidth}px`})},[s("div",{class:m(`progress-line-percent-${r.themeColor}`),style:c({width:`${l.value}%`})},null,6)],4),s("div",v,i(`${l.value}%`),1)],2)],64))}};a.__docgenInfo={exportName:"default",displayName:"LineProgress",description:"",tags:{},props:[{name:"label",type:{name:"string"},defaultValue:{func:!1,value:'"label"'}},{name:"percent",type:{name:"number"},defaultValue:{func:!1,value:"66"}},{name:"strokeWidth",type:{name:"number"},defaultValue:{func:!1,value:"10"}},{name:"themeColor",type:{name:"string"},defaultValue:{func:!1,value:'"primary"'},values:["primary","secondary","tertiary","success","warning","error","info"]},{name:"className",type:{name:"string"},defaultValue:{func:!1,value:"''"}}],sourceFiles:["D:/98_測試/up/DED-WDS_VUE/libs/src/ui/element/Progress/LineProgress/LineProgress.vue"]};const S={title:"Design System/Progress-Line",component:a,tags:["autodocs"],argTypes:{label:{description:"進度指示標籤",control:{type:"text"}},percent:{description:"進度",control:{type:"range",min:0,max:100,step:1},defaultValue:66},strokeWidth:{description:"線條寬度",control:{type:"range",min:1,max:20,step:1}},themeColor:{description:"主題顏色",control:{type:"select"},options:["primary","secondary","tertiary","success","warning","error","info"]},className:{description:"客製化樣式",control:{type:"text"}}},parameters:{docs:{title:"LineProgress",description:{component:"LineProgress 組件的呈現及說明。"}}}},n={name:"預設項目",args:{label:"",percent:66,strokeWidth:10,themeColor:"primary",className:""},render:e=>({components:{LineProgress:a},setup(){return{args:e}},template:`
            <LineProgress 
                :label="args.label"
                :percent="args.percent"
                :strokeWidth="args.strokeWidth"
                :themeColor="args.themeColor"
                :className="args.className"
            ></LineProgress>
        `}),parameters:{controls:{}}},t={name:"顯示標籤",args:{label:"Complete",percent:66,strokeWidth:10,themeColor:"primary",className:""},render:e=>({components:{LineProgress:a},setup(){return{args:e}},template:`
            <LineProgress 
                :label="args.label"
                :percent="args.percent"
                :strokeWidth="args.strokeWidth"
                :themeColor="args.themeColor"
                :className="args.className"
            ></LineProgress>
        `}),parameters:{controls:{}}},o={name:"主題色彩",args:{label:"",strokeWidth:10,className:""},render:e=>({components:{LineProgress:a},setup(){return{args:e}},template:`
            <div style="display:flex; flex-direction: column; gap:8px">
                <LineProgress
                    :label="args.label"
                    :percent=40
                    :strokeWidth="args.strokeWidth"
                    themeColor="primary"
                    :className="args.className"
                ></LineProgress>
                <LineProgress
                    :label="args.label"
                    :percent=50
                    :strokeWidth="args.strokeWidth"
                    themeColor="secondary"
                    :className="args.className"
                ></LineProgress>
                <LineProgress
                    :label="args.label"
                    :percent=60
                    :strokeWidth="args.strokeWidth"
                    themeColor="tertiary"
                    :className="args.className"
                ></LineProgress>
                <LineProgress
                    :label="args.label"
                    :percent=70
                    :strokeWidth="args.strokeWidth"
                    themeColor="success"
                    :className="args.className"
                ></LineProgress>
                <LineProgress
                    :label="args.label"
                    :percent=80
                    :strokeWidth="args.strokeWidth"
                    themeColor="warning"
                    :className="args.className"
                ></LineProgress>
                <LineProgress
                    :label="args.label"
                    :percent=90
                    :strokeWidth="args.strokeWidth"
                    themeColor="error"
                    :className="args.className"
                ></LineProgress>
                <LineProgress
                    :label="args.label"
                    :percent=100
                    :strokeWidth="args.strokeWidth"
                    themeColor="info"
                    :className="args.className"
                ></LineProgress>
            </div>
            
        `}),parameters:{controls:{exclude:["themeColor","percent"]}}};var g,p,u;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  name: "預設項目",
  args: {
    label: "",
    percent: 66,
    strokeWidth: 10,
    themeColor: "primary",
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
                :themeColor="args.themeColor"
                :className="args.className"
            ></LineProgress>
        \`
  }),
  // 控制 controls 中能控制的參數
  parameters: {
    controls: {
      // include: ['themeColor', 'label', 'value', 'name' ],
    }
  }
}`,...(u=(p=n.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var d,h,b;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
  name: "顯示標籤",
  args: {
    label: "Complete",
    percent: 66,
    strokeWidth: 10,
    themeColor: "primary",
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
                :themeColor="args.themeColor"
                :className="args.className"
            ></LineProgress>
        \`
  }),
  // 控制 controls 中能控制的參數
  parameters: {
    controls: {
      // include: ['themeColor', 'label', 'value', 'name' ],
    }
  }
}`,...(b=(h=t.parameters)==null?void 0:h.docs)==null?void 0:b.source}}};var L,P,y;o.parameters={...o.parameters,docs:{...(L=o.parameters)==null?void 0:L.docs,source:{originalSource:`{
  name: "主題色彩",
  args: {
    label: "",
    // percent: 66,
    strokeWidth: 10,
    // themeColor: "primary",
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
                    :label="args.label"
                    :percent=40
                    :strokeWidth="args.strokeWidth"
                    themeColor="primary"
                    :className="args.className"
                ></LineProgress>
                <LineProgress
                    :label="args.label"
                    :percent=50
                    :strokeWidth="args.strokeWidth"
                    themeColor="secondary"
                    :className="args.className"
                ></LineProgress>
                <LineProgress
                    :label="args.label"
                    :percent=60
                    :strokeWidth="args.strokeWidth"
                    themeColor="tertiary"
                    :className="args.className"
                ></LineProgress>
                <LineProgress
                    :label="args.label"
                    :percent=70
                    :strokeWidth="args.strokeWidth"
                    themeColor="success"
                    :className="args.className"
                ></LineProgress>
                <LineProgress
                    :label="args.label"
                    :percent=80
                    :strokeWidth="args.strokeWidth"
                    themeColor="warning"
                    :className="args.className"
                ></LineProgress>
                <LineProgress
                    :label="args.label"
                    :percent=90
                    :strokeWidth="args.strokeWidth"
                    themeColor="error"
                    :className="args.className"
                ></LineProgress>
                <LineProgress
                    :label="args.label"
                    :percent=100
                    :strokeWidth="args.strokeWidth"
                    themeColor="info"
                    :className="args.className"
                ></LineProgress>
            </div>
            
        \`
  }),
  // 控制 controls 中能控制的參數
  parameters: {
    controls: {
      exclude: ['themeColor', 'percent']
    }
  }
}`,...(y=(P=o.parameters)==null?void 0:P.docs)==null?void 0:y.source}}};const V=["DefaultLineProgress","LineProgressLabelStory","LineProgressColorStory"];export{n as DefaultLineProgress,o as LineProgressColorStory,t as LineProgressLabelStory,V as __namedExportsOrder,S as default};

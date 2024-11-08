import{r as b,p as S,w as V,c as a,a as t,b as i,n as k,t as c,h as C,o as l}from"./vue.esm-bundler-wiEVvyCh.js";const E=["width","height"],A=["stroke-width","r","cx","cy"],F=["stroke-width","stroke-dasharray","stroke-dashoffset","r","cx","cy","transform"],L=["y"],B={key:0,class:"progress-circle-label"},n={__name:"CircleProgress",props:{label:{type:String,default:"label"},percent:{type:Number,default:66},size:{type:Number,default:120},strokeWidth:{type:Number,default:10},themeColor:{type:String,default:"primary",validator:r=>["primary","secondary","tertiary","success","warning","error","info"].includes(r)},className:{type:String,default:""}},setup(r){const e=r,s=b(null),o=b(0);S(()=>{s.value&&(o.value=s.value.getComputedTextLength())}),V(()=>e.label,()=>{s.value&&(o.value=s.value.getComputedTextLength())});const d=a(()=>(e.size-e.strokeWidth)/2),p=a(()=>2*Math.PI*d.value),D=a(()=>p.value-e.percent/100*p.value),f=a(()=>Math.min(Math.max(e.percent,0),100)),h=a(()=>o.value?o.value+e.strokeWidth+30:64);return($,M)=>(l(),t("div",{class:k({"progress-circle-container":!0,[e.className]:!!e.className})},[(l(),t("svg",{class:"progress",width:e.size,height:e.size},[i("circle",{class:"progress-circle-track",fill:"transparent","stroke-width":e.strokeWidth,r:d.value,cx:e.size/2,cy:e.size/2},null,8,A),i("circle",{class:k(`progress-circle-percent-${e.themeColor}`),fill:"transparent","stroke-width":e.strokeWidth,"stroke-dasharray":p.value,"stroke-dashoffset":D.value,"stroke-linecap":"round",r:d.value,cx:e.size/2,cy:e.size/2,transform:`rotate(-90 ${e.size/2} ${e.size/2})`,style:{transition:"stroke-dashoffset 0.35s"}},null,10,F),e.size>=h.value?(l(),t("text",{key:0,ref_key:"textRef",ref:s,x:"50%",y:"45%","text-anchor":"middle","font-size":"1em",fill:"black"},c(e.label),513)):C("",!0),e.size>=h.value?(l(),t("text",{key:1,x:"50%",y:r.label?"60%":"50%","text-anchor":"middle",dy:".3em","font-size":"1.5em",fill:"black"},c(`${f.value}%`),9,L)):C("",!0)],8,E)),r.size<h.value?(l(),t("div",B,[i("span",null,c(e.label),1),i("span",null,c(`${f.value}%`),1)])):C("",!0)],2))}};n.__docgenInfo={exportName:"default",displayName:"CircleProgress",description:"",tags:{},props:[{name:"label",type:{name:"string"},defaultValue:{func:!1,value:'"label"'}},{name:"percent",type:{name:"number"},defaultValue:{func:!1,value:"66"}},{name:"size",type:{name:"number"},defaultValue:{func:!1,value:"120"}},{name:"strokeWidth",type:{name:"number"},defaultValue:{func:!1,value:"10"}},{name:"themeColor",type:{name:"string"},defaultValue:{func:!1,value:'"primary"'},values:["primary","secondary","tertiary","success","warning","error","info"]},{name:"className",type:{name:"string"},defaultValue:{func:!1,value:"''"}}],sourceFiles:["D:/98_測試/up/DED-WDS_VUE/libs/src/ui/element/Progress/CircleProgress/CircleProgress.vue"]};const I={title:"Design System/Progress-Circle",component:n,tags:["autodocs"],argTypes:{label:{description:"進度指示標籤",control:{type:"text"}},percent:{description:"進度",control:{type:"range",min:0,max:100,step:1},defaultValue:66},size:{description:"直徑",control:{type:"range",min:24,max:200,step:1},defaultValue:50},strokeWidth:{description:"線條寬度",control:{type:"range",min:1,max:20,step:1}},themeColor:{description:"主題顏色",control:{type:"select"},options:["primary","secondary","tertiary","success","warning","error","info"]},className:{description:"客製化樣式",control:{type:"text"}}},parameters:{docs:{title:"CircleProgress",description:{component:"CircleProgress 組件的呈現及說明。"}}}},g={name:"預設項目",args:{label:"Saving",percent:66,size:120,strokeWidth:10,themeColor:"primary",className:""},render:r=>({components:{CircleProgress:n},setup(){return{args:r}},template:`
            <CircleProgress 
                :label="args.label"
                :percent="args.percent"
                :size="args.size"
                :strokeWidth="args.strokeWidth"
                :themeColor="args.themeColor"
                :className="args.className"
            ></CircleProgress>
        `}),parameters:{controls:{}}},m={name:"顯示標籤",args:{label:"測試",percent:66,size:120,strokeWidth:10,themeColor:"primary",className:""},render:r=>({components:{CircleProgress:n},setup(){return{args:r}},template:`
            <div style="display:flex; align-items: center; gap: 24px">
                <CircleProgress
                    :label="args.label"
                    :percent="args.percent"
                    size="70"
                    :strokeWidth="args.strokeWidth"
                    :themeColor="args.themeColor"
                    :className="args.className"
                ></CircleProgress>
                <CircleProgress
                    :label="args.label"
                    :percent="args.percent"
                    size="120"
                    :strokeWidth="args.strokeWidth"
                    :themeColor="args.themeColor"
                    :className="args.className"
                ></CircleProgress>
            </div>
            
        `}),parameters:{controls:{}}},u={name:"主題色彩",args:{label:"測試",size:120,strokeWidth:10,className:""},render:r=>({components:{CircleProgress:n},setup(){return{args:r}},template:`
            <div style="display:flex; align-items: center; flex-wrap: wrap; gap: 16px">
                <CircleProgress
                    :label="args.label"
                    :percent=40
                    :size="args.size"
                    :strokeWidth="args.strokeWidth"
                    themeColor="primary"
                    :className="args.className"
                ></CircleProgress>
                <CircleProgress
                    :label="args.label"
                    :percent=50
                    :size="args.size"
                    :strokeWidth="args.strokeWidth"
                    themeColor="secondary"
                    :className="args.className"
                ></CircleProgress>
                <CircleProgress
                    :label="args.label"
                    :percent=60
                    :size="args.size"
                    :strokeWidth="args.strokeWidth"
                    themeColor="tertiary"
                    :className="args.className"
                ></CircleProgress>
                <CircleProgress
                    :label="args.label"
                    :percent=70
                    :size="args.size"
                    :strokeWidth="args.strokeWidth"
                    themeColor="success"
                    :className="args.className"
                ></CircleProgress>
                <CircleProgress
                    :label="args.label"
                    :percent=80
                    :size="args.size"
                    :strokeWidth="args.strokeWidth"
                    themeColor="warning"
                    :className="args.className"
                ></CircleProgress>
                <CircleProgress
                    :label="args.label"
                    :percent=90
                    :size="args.size"
                    :strokeWidth="args.strokeWidth"
                    themeColor="error"
                    :className="args.className"
                ></CircleProgress>
                <CircleProgress
                    :label="args.label"
                    :percent=100
                    :size="args.size"
                    :strokeWidth="args.strokeWidth"
                    themeColor="info"
                    :className="args.className"
                ></CircleProgress>
            </div>
            
        `}),parameters:{controls:{}}};var y,P,z;g.parameters={...g.parameters,docs:{...(y=g.parameters)==null?void 0:y.docs,source:{originalSource:`{
  name: "預設項目",
  args: {
    label: "Saving",
    percent: 66,
    size: 120,
    strokeWidth: 10,
    themeColor: "primary",
    className: ''
  },
  render: args => ({
    components: {
      CircleProgress
    },
    setup() {
      // Create a ref for modelValue to be used with v-model
      return {
        args
      };
    },
    template: \`
            <CircleProgress 
                :label="args.label"
                :percent="args.percent"
                :size="args.size"
                :strokeWidth="args.strokeWidth"
                :themeColor="args.themeColor"
                :className="args.className"
            ></CircleProgress>
        \`
  }),
  // 控制 controls 中能控制的參數
  parameters: {
    controls: {
      // include: ['themeColor', 'label', 'value', 'name' ],
    }
  }
}`,...(z=(P=g.parameters)==null?void 0:P.docs)==null?void 0:z.source}}};var N,W,v;m.parameters={...m.parameters,docs:{...(N=m.parameters)==null?void 0:N.docs,source:{originalSource:`{
  name: "顯示標籤",
  args: {
    label: "測試",
    percent: 66,
    size: 120,
    strokeWidth: 10,
    themeColor: "primary",
    className: ''
  },
  render: args => ({
    components: {
      CircleProgress
    },
    setup() {
      // Create a ref for modelValue to be used with v-model
      return {
        args
      };
    },
    template: \`
            <div style="display:flex; align-items: center; gap: 24px">
                <CircleProgress
                    :label="args.label"
                    :percent="args.percent"
                    size="70"
                    :strokeWidth="args.strokeWidth"
                    :themeColor="args.themeColor"
                    :className="args.className"
                ></CircleProgress>
                <CircleProgress
                    :label="args.label"
                    :percent="args.percent"
                    size="120"
                    :strokeWidth="args.strokeWidth"
                    :themeColor="args.themeColor"
                    :className="args.className"
                ></CircleProgress>
            </div>
            
        \`
  }),
  // 控制 controls 中能控制的參數
  parameters: {
    controls: {
      // include: ['themeColor', 'label', 'value', 'name' ],
    }
  }
}`,...(v=(W=m.parameters)==null?void 0:W.docs)==null?void 0:v.source}}};var x,w,_;u.parameters={...u.parameters,docs:{...(x=u.parameters)==null?void 0:x.docs,source:{originalSource:`{
  name: "主題色彩",
  args: {
    label: "測試",
    // percent: 66,
    size: 120,
    strokeWidth: 10,
    // themeColor: "primary",
    className: ''
  },
  render: args => ({
    components: {
      CircleProgress
    },
    setup() {
      // Create a ref for modelValue to be used with v-model
      return {
        args
      };
    },
    template: \`
            <div style="display:flex; align-items: center; flex-wrap: wrap; gap: 16px">
                <CircleProgress
                    :label="args.label"
                    :percent=40
                    :size="args.size"
                    :strokeWidth="args.strokeWidth"
                    themeColor="primary"
                    :className="args.className"
                ></CircleProgress>
                <CircleProgress
                    :label="args.label"
                    :percent=50
                    :size="args.size"
                    :strokeWidth="args.strokeWidth"
                    themeColor="secondary"
                    :className="args.className"
                ></CircleProgress>
                <CircleProgress
                    :label="args.label"
                    :percent=60
                    :size="args.size"
                    :strokeWidth="args.strokeWidth"
                    themeColor="tertiary"
                    :className="args.className"
                ></CircleProgress>
                <CircleProgress
                    :label="args.label"
                    :percent=70
                    :size="args.size"
                    :strokeWidth="args.strokeWidth"
                    themeColor="success"
                    :className="args.className"
                ></CircleProgress>
                <CircleProgress
                    :label="args.label"
                    :percent=80
                    :size="args.size"
                    :strokeWidth="args.strokeWidth"
                    themeColor="warning"
                    :className="args.className"
                ></CircleProgress>
                <CircleProgress
                    :label="args.label"
                    :percent=90
                    :size="args.size"
                    :strokeWidth="args.strokeWidth"
                    themeColor="error"
                    :className="args.className"
                ></CircleProgress>
                <CircleProgress
                    :label="args.label"
                    :percent=100
                    :size="args.size"
                    :strokeWidth="args.strokeWidth"
                    themeColor="info"
                    :className="args.className"
                ></CircleProgress>
            </div>
            
        \`
  }),
  // 控制 controls 中能控制的參數
  parameters: {
    controls: {
      // include: ['themeColor', 'label', 'value', 'name' ],
    }
  }
}`,...(_=(w=u.parameters)==null?void 0:w.docs)==null?void 0:_.source}}};const R=["DefaultCircleProgress","CircleProgressLabelStory","CircleProgressColorStory"];export{u as CircleProgressColorStory,m as CircleProgressLabelStory,g as DefaultCircleProgress,R as __namedExportsOrder,I as default};

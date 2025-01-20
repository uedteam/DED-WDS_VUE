import{h as P,l as D,w as V,g as a,c as t,a as c,n as i,t as g,e as b,o as l}from"./vue.esm-bundler-D0YZwI1O.js";const L=["width","height"],S=["stroke-width","r","cx","cy"],E=["stroke-width","stroke-dasharray","stroke-dashoffset","r","cx","cy","transform"],A=["y"],j={key:0,class:"ded-progress-circle-label"},F={class:"ded-progress-label"},o={__name:"CircleProgress",props:{themeColor:{type:String,default:"primary",validator:s=>["primary","secondary","neutral","info","success","warning","error"].includes(s)},label:{type:String,default:""},percent:{type:Number,default:0},size:{type:Number,default:100},strokeWidth:{type:Number,default:10},className:{type:String,default:""}},setup(s){const r=s,e=P(null),n=P(0);D(()=>{e.value&&(n.value=e.value.getComputedTextLength())}),V(()=>r.label,()=>{e.value&&(n.value=e.value.getComputedTextLength())});const h=a(()=>(r.size-r.strokeWidth)/2),u=a(()=>2*Math.PI*h.value),_=a(()=>u.value-r.percent/100*u.value),k=a(()=>Math.min(Math.max(r.percent,0),100)),C=a(()=>n.value?n.value+r.strokeWidth+30:64);return(B,M)=>(l(),t("div",{class:i({"ded-progress-circle-container":!0,[r.className]:!!r.className})},[(l(),t("svg",{class:"ded-progress",width:r.size,height:r.size},[c("circle",{class:"ded-progress-circle-track",fill:"transparent","stroke-width":r.strokeWidth,r:h.value,cx:r.size/2,cy:r.size/2},null,8,S),c("circle",{class:i(["ded-progress-circle-percent-form",`ded-progress-circle-percent-form-${r.themeColor}`]),fill:"transparent","stroke-width":r.strokeWidth,"stroke-dasharray":u.value,"stroke-dashoffset":_.value,"stroke-linecap":"round",r:h.value,cx:r.size/2,cy:r.size/2,transform:`rotate(-90 ${r.size/2} ${r.size/2})`,style:{transition:"stroke-dashoffset 0.35s"}},null,10,E),r.size>=C.value?(l(),t("text",{key:0,class:"ded-progress-label",ref_key:"textRef",ref:e,x:"50%",y:"45%","text-anchor":"middle","font-size":"1em"},g(r.label),513)):b("",!0),r.size>=C.value?(l(),t("text",{key:1,class:i(["ded-progress-percent-text",`ded-progress-percent-text-${r.themeColor}`]),x:"50%",y:s.label?"60%":"50%","text-anchor":"middle",dy:".3em","font-size":"1.5em"},g(`${k.value}%`),11,A)):b("",!0)],8,L)),s.size<C.value?(l(),t("div",j,[c("span",F,g(r.label),1),c("span",{class:i(["ded-progress-percent",`ded-progress-percent-${r.themeColor}`])},g(`${k.value}%`),3)])):b("",!0)],2))}};o.__docgenInfo={exportName:"default",displayName:"CircleProgress",description:"",tags:{},props:[{name:"themeColor",type:{name:"string"},defaultValue:{func:!1,value:'"primary"'},values:["primary","secondary","neutral","info","success","warning","error"]},{name:"label",type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"percent",type:{name:"number"},defaultValue:{func:!1,value:"0"}},{name:"size",type:{name:"number"},defaultValue:{func:!1,value:"100"}},{name:"strokeWidth",type:{name:"number"},defaultValue:{func:!1,value:"10"}},{name:"className",type:{name:"string"},defaultValue:{func:!1,value:'""'}}],sourceFiles:["D:/98_測試/up/DED-WDS_VUE/libs/src/ui/element/Progress/CircleProgress/CircleProgress.vue"]};const I={title:"Component/Progress-Circle",component:o,tags:["autodocs"],argTypes:{themeColor:{description:"主題顏色",control:{type:"select"},options:["primary","secondary","neutral","info","success","warning","error"],table:{type:{summary:"primary | secondary | neutral | info | success | warning | error"}}},label:{description:"進度指示標籤",control:{type:"text"}},percent:{description:"進度",required:!0,control:{type:"range",min:0,max:100,step:1},defaultValue:66},size:{description:"直徑",control:{type:"range",min:24,max:200,step:1},defaultValue:50},strokeWidth:{description:"線條寬度",control:{type:"range",min:1,max:20,step:1}},className:{description:"客製化樣式",control:{type:"text"}}},parameters:{docs:{title:"CircleProgress",description:{component:"圓形進度指示組件的呈現及說明。"}}}},m={name:"預設項目",args:{themeColor:"primary",label:"Label",percent:65,size:100,strokeWidth:10,className:""},render:s=>({components:{CircleProgress:o},setup(){return{args:s}},template:`
            <CircleProgress
                :themeColor="args.themeColor"
                :label="args.label"
                :percent="args.percent"
                :size="args.size"
                :strokeWidth="args.strokeWidth"
                :className="args.className"
            ></CircleProgress>
        `}),parameters:{controls:{},docs:{source:{transform:(s,r)=>{const{args:e}=r;return["<CircleProgress",`  themeColor="${e.themeColor}"`,`  label="${e.label}"`,`  :percent="${e.percent}"`,`  :size="${e.size}"`,`  :strokeWidth="${e.strokeWidth}"`,`  className="${e.className}"`,"></CircleProgress>"].join(`
`).trim()}}}}},d={name:"顯示標籤",args:{themeColor:"primary",label:"Label",percent:65,size:120,strokeWidth:10,className:""},render:s=>({components:{CircleProgress:o},setup(){return{args:s}},template:`
            <div style="display:flex; align-items: center; gap: 24px">
                <CircleProgress
                    :themeColor="args.themeColor"
                    :label="args.label"
                    :percent="args.percent"
                    size="70"
                    :strokeWidth="args.strokeWidth"
                    :className="args.className"
                ></CircleProgress>
                <CircleProgress
                    :themeColor="args.themeColor"
                    :label="args.label"
                    :percent="args.percent"
                    size="120"
                    :strokeWidth="args.strokeWidth"
                    :className="args.className"
                ></CircleProgress>
            </div>
            
        `}),parameters:{controls:{},docs:{source:{transform:(s,r)=>{const{args:e}=r;return["<CircleProgress",`  themeColor="${e.themeColor}"`,`  label="${e.label}"`,`  :percent="${e.percent}"`,'  :size="70"',`  :strokeWidth="${e.strokeWidth}"`,`  className="${e.className}"`,"></CircleProgress>","<CircleProgress",`  themeColor="${e.themeColor}"`,`  label="${e.label}"`,`  :percent="${e.percent}"`,'  :size="120"',`  :strokeWidth="${e.strokeWidth}"`,`  className="${e.className}"`,"></CircleProgress>"].join(`
`).trim()}}}}},p={name:"主題色彩",args:{label:"Label",size:100,strokeWidth:10,className:""},render:s=>({components:{CircleProgress:o},setup(){return{args:s}},template:`
            <div style="display:flex; align-items: center; flex-wrap: wrap; gap: 16px">
                <CircleProgress
                    themeColor="primary"
                    :label="args.label"
                    :percent=40
                    :size="args.size"
                    :strokeWidth="args.strokeWidth"
                    :className="args.className"
                ></CircleProgress>
                <CircleProgress
                    themeColor="secondary"
                    :label="args.label"
                    :percent=50
                    :size="args.size"
                    :strokeWidth="args.strokeWidth"
                    :className="args.className"
                ></CircleProgress>
                <CircleProgress
                    themeColor="neutral"
                    :label="args.label"
                    :percent=60
                    :size="args.size"
                    :strokeWidth="args.strokeWidth"
                    :className="args.className"
                ></CircleProgress>
                <CircleProgress
                    themeColor="info"
                    :label="args.label"
                    :percent=70
                    :size="args.size"
                    :strokeWidth="args.strokeWidth"
                    :className="args.className"
                ></CircleProgress>
                <CircleProgress
                    themeColor="success"
                    :label="args.label"
                    :percent=80
                    :size="args.size"
                    :strokeWidth="args.strokeWidth"
                    :className="args.className"
                ></CircleProgress>
                <CircleProgress
                    themeColor="warning"
                    :label="args.label"
                    :percent=90
                    :size="args.size"
                    :strokeWidth="args.strokeWidth"
                    :className="args.className"
                ></CircleProgress>
                <CircleProgress
                    themeColor="error"
                    :label="args.label"
                    :percent=100
                    :size="args.size"
                    :strokeWidth="args.strokeWidth"
                    :className="args.className"
                ></CircleProgress>
            </div>

        `}),parameters:{controls:{},docs:{source:{transform:(s,r)=>{const{args:e}=r;return["<CircleProgress",'  themeColor="primary"',`  label="${e.label}"`,'  :percent="40"',`  :size="${e.size}"`,`  :strokeWidth="${e.strokeWidth}"`,`  className="${e.className}"`,"></CircleProgress>","<CircleProgress",'  themeColor="secondary"',`  label="${e.label}"`,'  :percent="50"',`  :size="${e.size}"`,`  :strokeWidth="${e.strokeWidth}"`,`  className="${e.className}"`,"></CircleProgress>","<CircleProgress",'  themeColor="tertiary"',`  label="${e.label}"`,'  :percent="60"',`  :size="${e.size}"`,`  :strokeWidth="${e.strokeWidth}"`,`  className="${e.className}"`,"></CircleProgress>","<CircleProgress",'  themeColor="success"',`  label="${e.label}"`,'  :percent="70"',`  :size="${e.size}"`,`  :strokeWidth="${e.strokeWidth}"`,`  className="${e.className}"`,"></CircleProgress>","<CircleProgress",'  themeColor="warning"',`  label="${e.label}"`,'  :percent="80"',`  :size="${e.size}"`,`  :strokeWidth="${e.strokeWidth}"`,`  className="${e.className}"`,"></CircleProgress>","<CircleProgress",'  themeColor="error"',`  label="${e.label}"`,'  :percent="90"',`  :size="${e.size}"`,`  :strokeWidth="${e.strokeWidth}"`,`  className="${e.className}"`,"></CircleProgress>","<CircleProgress",'  themeColor="info"',`  label="${e.label}"`,'  :percent="100"',`  :size="${e.size}"`,`  :strokeWidth="${e.strokeWidth}"`,`  className="${e.className}"`,"></CircleProgress>"].join(`
`).trim()}}}}};var N,z,$;m.parameters={...m.parameters,docs:{...(N=m.parameters)==null?void 0:N.docs,source:{originalSource:`{
  name: "預設項目",
  args: {
    themeColor: "primary",
    label: "Label",
    percent: 65,
    size: 100,
    strokeWidth: 10,
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
                :themeColor="args.themeColor"
                :label="args.label"
                :percent="args.percent"
                :size="args.size"
                :strokeWidth="args.strokeWidth"
                :className="args.className"
            ></CircleProgress>
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
          return ['<CircleProgress', \`  themeColor="\${args.themeColor}"\`, \`  label="\${args.label}"\`, \`  :percent="\${args.percent}"\`, \`  :size="\${args.size}"\`, \`  :strokeWidth="\${args.strokeWidth}"\`, \`  className="\${args.className}"\`, '></CircleProgress>'].join('\\n').trim();
        }
      }
    }
  }
}`,...($=(z=m.parameters)==null?void 0:z.docs)==null?void 0:$.source}}};var W,f,y;d.parameters={...d.parameters,docs:{...(W=d.parameters)==null?void 0:W.docs,source:{originalSource:`{
  name: "顯示標籤",
  args: {
    themeColor: "primary",
    label: "Label",
    percent: 65,
    size: 120,
    strokeWidth: 10,
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
                    :themeColor="args.themeColor"
                    :label="args.label"
                    :percent="args.percent"
                    size="70"
                    :strokeWidth="args.strokeWidth"
                    :className="args.className"
                ></CircleProgress>
                <CircleProgress
                    :themeColor="args.themeColor"
                    :label="args.label"
                    :percent="args.percent"
                    size="120"
                    :strokeWidth="args.strokeWidth"
                    :className="args.className"
                ></CircleProgress>
            </div>
            
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
          return ['<CircleProgress', \`  themeColor="\${args.themeColor}"\`, \`  label="\${args.label}"\`, \`  :percent="\${args.percent}"\`, \`  :size="70"\`, \`  :strokeWidth="\${args.strokeWidth}"\`, \`  className="\${args.className}"\`, '></CircleProgress>', '<CircleProgress', \`  themeColor="\${args.themeColor}"\`, \`  label="\${args.label}"\`, \`  :percent="\${args.percent}"\`, \`  :size="120"\`, \`  :strokeWidth="\${args.strokeWidth}"\`, \`  className="\${args.className}"\`, '></CircleProgress>'].join('\\n').trim();
        }
      }
    }
  }
}`,...(y=(f=d.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};var v,x,w;p.parameters={...p.parameters,docs:{...(v=p.parameters)==null?void 0:v.docs,source:{originalSource:`{
  name: "主題色彩",
  args: {
    label: "Label",
    size: 100,
    strokeWidth: 10,
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
                    themeColor="primary"
                    :label="args.label"
                    :percent=40
                    :size="args.size"
                    :strokeWidth="args.strokeWidth"
                    :className="args.className"
                ></CircleProgress>
                <CircleProgress
                    themeColor="secondary"
                    :label="args.label"
                    :percent=50
                    :size="args.size"
                    :strokeWidth="args.strokeWidth"
                    :className="args.className"
                ></CircleProgress>
                <CircleProgress
                    themeColor="neutral"
                    :label="args.label"
                    :percent=60
                    :size="args.size"
                    :strokeWidth="args.strokeWidth"
                    :className="args.className"
                ></CircleProgress>
                <CircleProgress
                    themeColor="info"
                    :label="args.label"
                    :percent=70
                    :size="args.size"
                    :strokeWidth="args.strokeWidth"
                    :className="args.className"
                ></CircleProgress>
                <CircleProgress
                    themeColor="success"
                    :label="args.label"
                    :percent=80
                    :size="args.size"
                    :strokeWidth="args.strokeWidth"
                    :className="args.className"
                ></CircleProgress>
                <CircleProgress
                    themeColor="warning"
                    :label="args.label"
                    :percent=90
                    :size="args.size"
                    :strokeWidth="args.strokeWidth"
                    :className="args.className"
                ></CircleProgress>
                <CircleProgress
                    themeColor="error"
                    :label="args.label"
                    :percent=100
                    :size="args.size"
                    :strokeWidth="args.strokeWidth"
                    :className="args.className"
                ></CircleProgress>
            </div>

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
          return ['<CircleProgress', \`  themeColor="primary"\`, \`  label="\${args.label}"\`, \`  :percent="40"\`, \`  :size="\${args.size}"\`, \`  :strokeWidth="\${args.strokeWidth}"\`, \`  className="\${args.className}"\`, '></CircleProgress>', '<CircleProgress', \`  themeColor="secondary"\`, \`  label="\${args.label}"\`, \`  :percent="50"\`, \`  :size="\${args.size}"\`, \`  :strokeWidth="\${args.strokeWidth}"\`, \`  className="\${args.className}"\`, '></CircleProgress>', '<CircleProgress', \`  themeColor="tertiary"\`, \`  label="\${args.label}"\`, \`  :percent="60"\`, \`  :size="\${args.size}"\`, \`  :strokeWidth="\${args.strokeWidth}"\`, \`  className="\${args.className}"\`, '></CircleProgress>', '<CircleProgress', \`  themeColor="success"\`, \`  label="\${args.label}"\`, \`  :percent="70"\`, \`  :size="\${args.size}"\`, \`  :strokeWidth="\${args.strokeWidth}"\`, \`  className="\${args.className}"\`, '></CircleProgress>', '<CircleProgress', \`  themeColor="warning"\`, \`  label="\${args.label}"\`, \`  :percent="80"\`, \`  :size="\${args.size}"\`, \`  :strokeWidth="\${args.strokeWidth}"\`, \`  className="\${args.className}"\`, '></CircleProgress>', '<CircleProgress', \`  themeColor="error"\`, \`  label="\${args.label}"\`, \`  :percent="90"\`, \`  :size="\${args.size}"\`, \`  :strokeWidth="\${args.strokeWidth}"\`, \`  className="\${args.className}"\`, '></CircleProgress>', '<CircleProgress', \`  themeColor="info"\`, \`  label="\${args.label}"\`, \`  :percent="100"\`, \`  :size="\${args.size}"\`, \`  :strokeWidth="\${args.strokeWidth}"\`, \`  className="\${args.className}"\`, '></CircleProgress>'].join('\\n').trim();
        }
      }
    }
  }
}`,...(w=(x=p.parameters)==null?void 0:x.docs)==null?void 0:w.source}}};const R=["DefaultCircleProgress","CircleProgressLabelStory","CircleProgressColorStory"];export{p as CircleProgressColorStory,d as CircleProgressLabelStory,m as DefaultCircleProgress,R as __namedExportsOrder,I as default};

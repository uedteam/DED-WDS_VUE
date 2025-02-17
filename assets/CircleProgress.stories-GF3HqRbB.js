import{k as b,q as v,w as x,g as t,c as a,a as l,t as o,e as p,n as $,o as n}from"./vue.esm-bundler-qCK_iSPY.js";const _=["width","height"],D=["stroke-width","r","cx","cy"],V=["stroke-width","stroke-dasharray","stroke-dashoffset","r","cx","cy","transform"],w=["y"],L={key:0,class:"ded-progress-circle-label"},S={class:"ded-progress-label"},E={class:"ded-progress-percent"},d={__name:"CircleProgress",props:{label:{type:String,default:""},percent:{type:Number,default:0},size:{type:Number,default:100},strokeWidth:{type:Number,default:10},className:{type:String,default:""}},setup(r){const e=r,s=b(null),h=b(0);v(()=>{s.value&&(h.value=s.value.getComputedTextLength())}),x(()=>e.label,()=>{s.value&&(h.value=s.value.getComputedTextLength())});const u=t(()=>(e.size-e.strokeWidth)/2),m=t(()=>2*Math.PI*u.value),W=t(()=>m.value-e.percent/100*m.value),f=t(()=>Math.min(Math.max(e.percent,0),100)),g=t(()=>e.label?e.label.length*10+e.strokeWidth+30:64);return(A,j)=>(n(),a("div",{class:$({"ded-progress-circle-container":!0,[e.className]:!!e.className})},[(n(),a("svg",{class:"ded-progress",width:e.size,height:e.size},[l("circle",{class:"ded-progress-circle-track",fill:"transparent","stroke-width":e.strokeWidth,r:u.value,cx:e.size/2,cy:e.size/2},null,8,D),l("circle",{class:"ded-progress-circle-percent-form",fill:"transparent","stroke-width":e.strokeWidth,"stroke-dasharray":m.value,"stroke-dashoffset":W.value,"stroke-linecap":"round",r:u.value,cx:e.size/2,cy:e.size/2,transform:`rotate(-90 ${e.size/2} ${e.size/2})`,style:{transition:"stroke-dashoffset 0.35s"}},null,8,V),e.size>=g.value?(n(),a("text",{key:0,class:"ded-progress-label",ref_key:"textRef",ref:s,x:"50%",y:"45%","text-anchor":"middle","font-size":"1em"},o(e.label),513)):p("",!0),e.size>=g.value?(n(),a("text",{key:1,class:"ded-progress-percent-text",x:"50%",y:r.label?"60%":"50%","text-anchor":"middle",dy:".3em","font-size":"1.5em"},o(`${f.value}%`),9,w)):p("",!0)],8,_)),r.size<g.value?(n(),a("div",L,[l("span",S,o(e.label),1),l("span",E,o(`${f.value}%`),1)])):p("",!0)],2))}};d.__docgenInfo={exportName:"default",displayName:"CircleProgress",description:"",tags:{},props:[{name:"label",type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"percent",type:{name:"number"},defaultValue:{func:!1,value:"0"}},{name:"size",type:{name:"number"},defaultValue:{func:!1,value:"100"}},{name:"strokeWidth",type:{name:"number"},defaultValue:{func:!1,value:"10"}},{name:"className",type:{name:"string"},defaultValue:{func:!1,value:'""'}}],sourceFiles:["/Users/auouser/Desktop/Work_Space/DED-WDS_VUE/libs/src/ui/element/Progress/CircleProgress/CircleProgress.vue"]};const F={title:"Component/Progress-Circle",component:d,tags:["autodocs"],argTypes:{label:{description:"進度指示標籤",control:{type:"text"}},percent:{description:"進度",required:!0,control:{type:"range",min:0,max:100,step:1},defaultValue:66},size:{description:"直徑",control:{type:"range",min:24,max:200,step:1},defaultValue:50},strokeWidth:{description:"線條寬度",control:{type:"range",min:1,max:20,step:1}},className:{description:"客製化樣式",control:{type:"text"}}},parameters:{docs:{title:"CircleProgress",description:{component:"圓形進度指示組件的呈現及說明。"}}}},c={name:"預設項目",args:{label:"Label",percent:65,size:100,strokeWidth:10,className:""},render:r=>({components:{CircleProgress:d},setup(){return{args:r}},template:`
            <CircleProgress
                :label="args.label"
                :percent="args.percent"
                :size="args.size"
                :strokeWidth="args.strokeWidth"
                :className="args.className"
            ></CircleProgress>
        `}),parameters:{controls:{},docs:{source:{transform:(r,e)=>{const{args:s}=e;return["<CircleProgress",`  label="${s.label}"`,`  :percent="${s.percent}"`,`  :size="${s.size}"`,`  :strokeWidth="${s.strokeWidth}"`,`  className="${s.className}"`,"></CircleProgress>"].join(`
`).trim()}}}}},i={name:"顯示標籤",args:{label:"Label",percent:65,strokeWidth:10,className:""},render:r=>({components:{CircleProgress:d},setup(){return{args:r}},template:`
            <div style="display:flex; align-items: center; gap: 24px">
                <CircleProgress
                    :label="args.label"
                    :percent="args.percent"
                    size="70"
                    :strokeWidth="args.strokeWidth"
                    :className="args.className"
                ></CircleProgress>
                <CircleProgress
                    :label="args.label"
                    :percent="args.percent"
                    size="100"
                    :strokeWidth="args.strokeWidth"
                    :className="args.className"
                ></CircleProgress>
            </div>
            
        `}),parameters:{controls:{exclude:["size","label"]},docs:{source:{transform:(r,e)=>{const{args:s}=e;return["<CircleProgress",`  label="${s.label}"`,`  :percent="${s.percent}"`,'  :size="70"',`  :strokeWidth="${s.strokeWidth}"`,`  className="${s.className}"`,"></CircleProgress>","<CircleProgress",`  label="${s.label}"`,`  :percent="${s.percent}"`,'  :size="100"',`  :strokeWidth="${s.strokeWidth}"`,`  className="${s.className}"`,"></CircleProgress>"].join(`
`).trim()}}}}};var C,k,y;c.parameters={...c.parameters,docs:{...(C=c.parameters)==null?void 0:C.docs,source:{originalSource:`{
  name: "預設項目",
  args: {
    // themeColor: "primary",
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
          return ['<CircleProgress', \`  label="\${args.label}"\`, \`  :percent="\${args.percent}"\`, \`  :size="\${args.size}"\`, \`  :strokeWidth="\${args.strokeWidth}"\`, \`  className="\${args.className}"\`, '></CircleProgress>'].join('\\n').trim();
        }
      }
    }
  }
}`,...(y=(k=c.parameters)==null?void 0:k.docs)==null?void 0:y.source}}};var P,z,N;i.parameters={...i.parameters,docs:{...(P=i.parameters)==null?void 0:P.docs,source:{originalSource:`{
  name: "顯示標籤",
  args: {
    label: "Label",
    percent: 65,
    // size: 100,
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
                    :label="args.label"
                    :percent="args.percent"
                    size="70"
                    :strokeWidth="args.strokeWidth"
                    :className="args.className"
                ></CircleProgress>
                <CircleProgress
                    :label="args.label"
                    :percent="args.percent"
                    size="100"
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
      exclude: ['size', 'label']
    },
    docs: {
      source: {
        transform: (src, storyContext) => {
          const {
            args
          } = storyContext;
          return ['<CircleProgress', \`  label="\${args.label}"\`, \`  :percent="\${args.percent}"\`, \`  :size="70"\`, \`  :strokeWidth="\${args.strokeWidth}"\`, \`  className="\${args.className}"\`, '></CircleProgress>', '<CircleProgress', \`  label="\${args.label}"\`, \`  :percent="\${args.percent}"\`, \`  :size="100"\`, \`  :strokeWidth="\${args.strokeWidth}"\`, \`  className="\${args.className}"\`, '></CircleProgress>'].join('\\n').trim();
        }
      }
    }
  }
}`,...(N=(z=i.parameters)==null?void 0:z.docs)==null?void 0:N.source}}};const M=["DefaultCircleProgress","CircleProgressLabelStory"];export{i as CircleProgressLabelStory,c as DefaultCircleProgress,M as __namedExportsOrder,F as default};

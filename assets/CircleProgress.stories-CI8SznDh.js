import{r as C,q as z,w as v,g as t,c as a,a as l,t as o,e as p,n as x,o as n}from"./vue.esm-bundler-Suj5BAdg.js";const _=["width","height"],D=["stroke-width","r","cx","cy"],V=["stroke-width","stroke-dasharray","stroke-dashoffset","r","cx","cy","transform"],w=["y"],L={key:0,class:"ded-progress-circle-label"},S={class:"ded-progress-label"},B={class:"ded-progress-percent"},d={__name:"CircleProgress",props:{label:{type:String,default:""},percent:{type:Number,default:0},size:{type:Number,default:100},strokeWidth:{type:Number,default:10},className:{type:String,default:""}},setup(s){const r=s,e=C(null),f=C(0);z(()=>{e.value&&(f.value=e.value.getComputedTextLength())}),v(()=>r.label,()=>{e.value&&(f.value=e.value.getComputedTextLength())});const u=t(()=>(r.size-r.strokeWidth)/2),g=t(()=>2*Math.PI*u.value),W=t(()=>g.value-r.percent/100*g.value),h=t(()=>Math.min(Math.max(r.percent,0),100)),m=t(()=>r.label?r.label.length*10+r.strokeWidth+30:64);return(E,A)=>(n(),a("div",{class:x({"ded-progress-circle-container":!0,[r.className]:!!r.className})},[(n(),a("svg",{class:"ded-progress",width:r.size,height:r.size},[l("circle",{class:"ded-progress-circle-track",fill:"transparent","stroke-width":r.strokeWidth,r:u.value,cx:r.size/2,cy:r.size/2},null,8,D),l("circle",{class:"ded-progress-circle-percent-form",fill:"transparent","stroke-width":r.strokeWidth,"stroke-dasharray":g.value,"stroke-dashoffset":W.value,"stroke-linecap":"round",r:u.value,cx:r.size/2,cy:r.size/2,transform:`rotate(-90 ${r.size/2} ${r.size/2})`,style:{transition:"stroke-dashoffset 0.35s"}},null,8,V),r.size>=m.value?(n(),a("text",{key:0,class:"ded-progress-label",ref_key:"textRef",ref:e,x:"50%",y:"45%","text-anchor":"middle","font-size":"1em"},o(r.label),513)):p("",!0),r.size>=m.value?(n(),a("text",{key:1,class:"ded-progress-percent-text",x:"50%",y:s.label?"60%":"50%","text-anchor":"middle",dy:".3em","font-size":"1.5em"},o(`${h.value}%`),9,w)):p("",!0)],8,_)),s.size<m.value?(n(),a("div",L,[l("span",S,o(r.label),1),l("span",B,o(`${h.value}%`),1)])):p("",!0)],2))}};d.__docgenInfo={exportName:"default",displayName:"CircleProgress",description:"",tags:{},props:[{name:"label",type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"percent",type:{name:"number"},defaultValue:{func:!1,value:"0"}},{name:"size",type:{name:"number"},defaultValue:{func:!1,value:"100"}},{name:"strokeWidth",type:{name:"number"},defaultValue:{func:!1,value:"10"}},{name:"className",type:{name:"string"},defaultValue:{func:!1,value:'""'}}],sourceFiles:["/Users/auouser/Desktop/Work_Space/DED-WDS_VUE/libs/src/ui/element/Progress/CircleProgress/CircleProgress.vue"]};const F={title:"Component/Progress-Circle",component:d,tags:["autodocs"],argTypes:{label:{description:"進度指示標籤",control:{type:"text"}},percent:{description:"進度",required:!0,control:{type:"range",min:0,max:100,step:1},defaultValue:66},size:{description:"直徑",control:{type:"range",min:24,max:200,step:1},defaultValue:50},strokeWidth:{description:"線條寬度",control:{type:"range",min:1,max:20,step:1}},className:{description:"客製化樣式",control:{type:"text"}}},parameters:{docs:{title:"CircleProgress",description:{component:"圓形進度指示組件的呈現及說明。"}}}},c={name:"預設項目",args:{label:"Label",percent:65,size:100,strokeWidth:10,className:""},render:s=>({components:{CircleProgress:d},setup(){return{args:s}},template:`
            <CircleProgress
                :label="args.label"
                :percent="args.percent"
                :size="args.size"
                :strokeWidth="args.strokeWidth"
                :className="args.className"
            ></CircleProgress>
        `}),parameters:{controls:{},docs:{source:{transform:(s,r)=>{const{args:e}=r;return["<script setup>",'import CircleProgress from "@/ui/element/Progress/CircleProgress/CircleProgress.vue";',"<\/script>","","<template>","  <CircleProgress",`    ${e.label?`label="${e.label}"`:""}`,`    ${e.percent!==void 0?`:percent="${e.percent}"`:""}`,`    ${e.size!==void 0?`:size="${e.size}"`:""}`,`    ${e.strokeWidth!==void 0?`:strokeWidth="${e.strokeWidth}"`:""}`,`    ${e.className?`className="${e.className}"`:""}`,"  ></CircleProgress>","</template>"].filter(Boolean).join(`
`).trim()}}}}},i={name:"顯示標籤",args:{label:"Label",percent:65,strokeWidth:10,className:""},render:s=>({components:{CircleProgress:d},setup(){return{args:s}},template:`
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
            
        `}),parameters:{controls:{exclude:["size","label"]},docs:{source:{transform:(s,r)=>{const{args:e}=r;return["<script setup>",'import CircleProgress from "@/ui/element/Progress/CircleProgress/CircleProgress.vue";',"<\/script>","","<template>","  <CircleProgress",`    ${e.label?`label="${e.label}"`:""}`,`    ${e.percent!==void 0?`:percent="${e.percent}"`:""}`,'    :size="70"',`    ${e.strokeWidth!==void 0?`:strokeWidth="${e.strokeWidth}"`:""}`,`    ${e.className?`className="${e.className}"`:""}`,"  ></CircleProgress>","  <CircleProgress",`    ${e.label?`label="${e.label}"`:""}`,`    ${e.percent!==void 0?`:percent="${e.percent}"`:""}`,'    :size="100"',`    ${e.strokeWidth!==void 0?`:strokeWidth="${e.strokeWidth}"`:""}`,`    ${e.className?`className="${e.className}"`:""}`,"  ></CircleProgress>","</template>"].filter(Boolean).join(`
`).trim()}}}}};var b,k,P;c.parameters={...c.parameters,docs:{...(b=c.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
          return [\`<script setup>\`, \`import CircleProgress from "@/ui/element/Progress/CircleProgress/CircleProgress.vue";\`, \`<\/script>\`, '', '<template>', \`  <CircleProgress\`, \`    \${args.label ? \`label="\${args.label}"\` : ""}\`, \`    \${args.percent !== undefined ? \`:percent="\${args.percent}"\` : ""}\`, \`    \${args.size !== undefined ? \`:size="\${args.size}"\` : ""}\`, \`    \${args.strokeWidth !== undefined ? \`:strokeWidth="\${args.strokeWidth}"\` : ""}\`, \`    \${args.className ? \`className="\${args.className}"\` : ""}\`, \`  ></CircleProgress>\`, '</template>'].filter(Boolean).join("\\n").trim();
        }
      }
    }
  }
}`,...(P=(k=c.parameters)==null?void 0:k.docs)==null?void 0:P.source}}};var $,N,y;i.parameters={...i.parameters,docs:{...($=i.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
          return [\`<script setup>\`, \`import CircleProgress from "@/ui/element/Progress/CircleProgress/CircleProgress.vue";\`, \`<\/script>\`, '', '<template>', \`  <CircleProgress\`, \`    \${args.label ? \`label="\${args.label}"\` : ""}\`, \`    \${args.percent !== undefined ? \`:percent="\${args.percent}"\` : ""}\`, \`    :size="70"\`, \`    \${args.strokeWidth !== undefined ? \`:strokeWidth="\${args.strokeWidth}"\` : ""}\`, \`    \${args.className ? \`className="\${args.className}"\` : ""}\`, \`  ></CircleProgress>\`, \`  <CircleProgress\`, \`    \${args.label ? \`label="\${args.label}"\` : ""}\`, \`    \${args.percent !== undefined ? \`:percent="\${args.percent}"\` : ""}\`, \`    :size="100"\`, \`    \${args.strokeWidth !== undefined ? \`:strokeWidth="\${args.strokeWidth}"\` : ""}\`, \`    \${args.className ? \`className="\${args.className}"\` : ""}\`, \`  ></CircleProgress>\`, '</template>'].filter(Boolean).join("\\n").trim();
        }
      }
    }
  }
}`,...(y=(N=i.parameters)==null?void 0:N.docs)==null?void 0:y.source}}};const M=["DefaultCircleProgress","CircleProgressLabelStory"];export{i as CircleProgressLabelStory,c as DefaultCircleProgress,M as __namedExportsOrder,F as default};

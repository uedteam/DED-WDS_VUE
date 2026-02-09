import{r as $,E as w,w as D,g as a,c as n,d as h,a as o,f as V,t as c,n as E,o as l}from"./vue.esm-bundler-DDwqdenp.js";const L=["width","height"],S=["stroke-width","r","cx","cy"],M=["stroke-width","stroke-dasharray","stroke-dashoffset","stroke","r","cx","cy","transform"],B=["y"],A={key:0,class:"ded-progress-circle-label"},j={class:"ded-progress-label"},F={class:"ded-progress-percent"},u={__name:"CircleProgress",props:{label:{type:String,default:""},percent:{type:Number,default:0},size:{type:Number,default:100},strokeWidth:{type:Number,default:10},className:{type:String,default:""},color:{type:String,default:"primary"}},setup(s){const r=s,e=$(null),b=$(0);w(()=>{e.value&&(b.value=e.value.getComputedTextLength())}),D(()=>r.label,()=>{e.value&&(b.value=e.value.getComputedTextLength())});const p=a(()=>(r.size-r.strokeWidth)/2),m=a(()=>2*Math.PI*p.value),x=a(()=>m.value-r.percent/100*m.value),k=a(()=>Math.min(Math.max(r.percent,0),100)),g=a(()=>r.label?r.label.length*10+r.strokeWidth+30:64),f={primary:"#2563eb",success:"#22c55e",warning:"#f59e42",error:"#ef4444",info:"#0ea5e9"};function _(t){return t?t.startsWith("#")||t.startsWith("rgb")?t:f[t]||f.primary:f.primary}return(t,C)=>(l(),n("div",{class:E(["ded-progress-circle-container",{[r.className]:!!r.className}])},[(l(),n("svg",{class:"ded-progress",width:r.size,height:r.size},[o("circle",{class:"ded-progress-circle-track",fill:"transparent","stroke-width":r.strokeWidth,r:p.value,cx:r.size/2,cy:r.size/2},null,8,S),o("circle",{class:"ded-progress-circle-percent-form",fill:"transparent","stroke-width":r.strokeWidth,"stroke-dasharray":m.value,"stroke-dashoffset":x.value,"stroke-linecap":"round",stroke:_(r.color),r:p.value,cx:r.size/2,cy:r.size/2,transform:`rotate(-90 ${r.size/2} ${r.size/2})`,style:{transition:"stroke-dashoffset 0.35s"}},null,8,M),C[0]||(C[0]=V(" // 主題色對應表，可依實際設計系統調整 const colorMap = { primary: '#2563eb', success: '#22c55e', warning: '#f59e42', error: '#ef4444', info: '#0ea5e9', }; function resolveColor(val) { // 若為 hex 或 rgb 直接回傳，否則查表 if (!val) return colorMap.primary; if (val.startsWith('#') || val.startsWith('rgb')) return val; return colorMap[val] || colorMap.primary; } ")),r.size>=g.value?(l(),n("text",{key:0,ref_key:"textRef",ref:e,class:"ded-progress-label",x:"50%",y:"45%","text-anchor":"middle","font-size":"1em"},c(r.label),513)):h("",!0),r.size>=g.value?(l(),n("text",{key:1,class:"ded-progress-percent-text",x:"50%",y:s.label?"60%":"50%","text-anchor":"middle",dy:".3em","font-size":"1.5em"},c(`${k.value}%`),9,B)):h("",!0)],8,L)),s.size<g.value?(l(),n("div",A,[o("span",j,c(r.label),1),o("span",F,c(`${k.value}%`),1)])):h("",!0)],2))}};u.__docgenInfo={exportName:"default",displayName:"CircleProgress",description:"",tags:{},props:[{name:"label",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"percent",type:{name:"number"},defaultValue:{func:!1,value:"0"}},{name:"size",type:{name:"number"},defaultValue:{func:!1,value:"100"}},{name:"strokeWidth",type:{name:"number"},defaultValue:{func:!1,value:"10"}},{name:"className",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"color",type:{name:"string"},defaultValue:{func:!1,value:"'primary'"}}],sourceFiles:["/home/runner/work/DED-WDS_VUE/DED-WDS_VUE/libs/src/ui/element/Progress/CircleProgress/CircleProgress.vue"]};const I={title:"Component/Progress-Circle",component:u,tags:["autodocs"],argTypes:{label:{description:"進度指示標籤",control:{type:"text"}},percent:{description:"進度",required:!0,control:{type:"range",min:0,max:100,step:1},defaultValue:66},size:{description:"直徑",control:{type:"range",min:24,max:200,step:1},defaultValue:50},strokeWidth:{description:"線條寬度",control:{type:"range",min:1,max:20,step:1}},className:{description:"客製化樣式",control:{type:"text"}}},parameters:{docs:{title:"CircleProgress",description:{component:"圓形進度指示組件的呈現及說明。"}}}},i={name:"預設項目",args:{label:"Label",percent:65,size:100,strokeWidth:10,className:""},render:s=>({components:{CircleProgress:u},setup(){return{args:s}},template:`
      <CircleProgress
        :label="args.label"
        :percent="args.percent"
        :size="args.size"
        :strokeWidth="args.strokeWidth"
        :className="args.className"
      ></CircleProgress>`}),parameters:{controls:{},docs:{source:{transform:(s,r)=>{const{args:e}=r;return["<script setup>",'import { CircleProgress } from "@ded-wds-vue/ui";',"<\/script>","","<template>","  <CircleProgress",`    ${e.label?`label="${e.label}"`:""}`,`    ${e.percent!==void 0?`:percent="${e.percent}"`:""}`,`    ${e.size!==void 0?`:size="${e.size}"`:""}`,`    ${e.strokeWidth!==void 0?`:strokeWidth="${e.strokeWidth}"`:""}`,`    ${e.className?`className="${e.className}"`:""}`,"  ></CircleProgress>","</template>"].filter(Boolean).join(`
`).trim()}}}}},d={name:"顯示標籤",args:{label:"Label",percent:65,strokeWidth:10,className:""},render:s=>({components:{CircleProgress:u},setup(){return{args:s}},template:`
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
      </div>`}),parameters:{controls:{exclude:["size","label"]},docs:{source:{transform:(s,r)=>{const{args:e}=r;return["<script setup>",'import { CircleProgress } from "@ded-wds-vue/ui";',"<\/script>","","<template>","  <CircleProgress",`    ${e.label?`label="${e.label}"`:""}`,`    ${e.percent!==void 0?`:percent="${e.percent}"`:""}`,'    :size="70"',`    ${e.strokeWidth!==void 0?`:strokeWidth="${e.strokeWidth}"`:""}`,`    ${e.className?`className="${e.className}"`:""}`,"  ></CircleProgress>","  <CircleProgress",`    ${e.label?`label="${e.label}"`:""}`,`    ${e.percent!==void 0?`:percent="${e.percent}"`:""}`,'    :size="100"',`    ${e.strokeWidth!==void 0?`:strokeWidth="${e.strokeWidth}"`:""}`,`    ${e.className?`className="${e.className}"`:""}`,"  ></CircleProgress>","</template>"].filter(Boolean).join(`
`).trim()}}}}};var y,N,W;i.parameters={...i.parameters,docs:{...(y=i.parameters)==null?void 0:y.docs,source:{originalSource:`{
  name: "預設項目",
  args: {
    // themeColor: "primary",
    label: "Label",
    percent: 65,
    size: 100,
    strokeWidth: 10,
    className: ""
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
      ></CircleProgress>\`
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
          return [\`<script setup>\`, \`import { CircleProgress } from "@ded-wds-vue/ui";\`, \`<\/script>\`, "", "<template>", \`  <CircleProgress\`, \`    \${args.label ? \`label="\${args.label}"\` : ""}\`, \`    \${args.percent !== undefined ? \`:percent="\${args.percent}"\` : ""}\`, \`    \${args.size !== undefined ? \`:size="\${args.size}"\` : ""}\`, \`    \${args.strokeWidth !== undefined ? \`:strokeWidth="\${args.strokeWidth}"\` : ""}\`, \`    \${args.className ? \`className="\${args.className}"\` : ""}\`, \`  ></CircleProgress>\`, "</template>"].filter(Boolean).join("\\n").trim();
        }
      }
    }
  }
}`,...(W=(N=i.parameters)==null?void 0:N.docs)==null?void 0:W.source}}};var P,v,z;d.parameters={...d.parameters,docs:{...(P=d.parameters)==null?void 0:P.docs,source:{originalSource:'{\n  name: "顯示標籤",\n  args: {\n    label: "Label",\n    percent: 65,\n    // size: 100,\n    strokeWidth: 10,\n    className: ""\n  },\n  render: args => ({\n    components: {\n      CircleProgress\n    },\n    setup() {\n      return {\n        args\n      };\n    },\n    template: `\n      <div style="display:flex; align-items: center; gap: 24px">\n        <CircleProgress\n          :label="args.label"\n          :percent="args.percent"\n          size="70"\n          :strokeWidth="args.strokeWidth"\n          :className="args.className"\n        ></CircleProgress>\n        <CircleProgress\n          :label="args.label"\n          :percent="args.percent"\n          size="100"\n          :strokeWidth="args.strokeWidth"\n          :className="args.className"\n        ></CircleProgress>\n      </div>`\n  }),\n  // 控制 controls 中能控制的參數\n  parameters: {\n    controls: {\n      exclude: ["size", "label"]\n    },\n    docs: {\n      source: {\n        transform: (src, storyContext) => {\n          const {\n            args\n          } = storyContext;\n          return [`<script setup>`, `import { CircleProgress } from "@ded-wds-vue/ui";`, `<\/script>`, "", "<template>", `  <CircleProgress`, `    ${args.label ? `label="${args.label}"` : ""}`, `    ${args.percent !== undefined ? `:percent="${args.percent}"` : ""}`, `    :size="70"`, `    ${args.strokeWidth !== undefined ? `:strokeWidth="${args.strokeWidth}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, `  ></CircleProgress>`, `  <CircleProgress`, `    ${args.label ? `label="${args.label}"` : ""}`, `    ${args.percent !== undefined ? `:percent="${args.percent}"` : ""}`, `    :size="100"`, `    ${args.strokeWidth !== undefined ? `:strokeWidth="${args.strokeWidth}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, `  ></CircleProgress>`, "</template>"].filter(Boolean).join("\\n").trim();\n        }\n      }\n    }\n  }\n}',...(z=(v=d.parameters)==null?void 0:v.docs)==null?void 0:z.source}}};const R=["DefaultCircleProgress","CircleProgressLabelStory"];export{d as CircleProgressLabelStory,i as DefaultCircleProgress,R as __namedExportsOrder,I as default};

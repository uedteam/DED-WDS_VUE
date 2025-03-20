import{v as b,A as z,w as v,g as t,c as a,d as g,a as l,t as o,n as x,o as n}from"./vue.esm-bundler-CbCZpGld.js";const _=["width","height"],w=["stroke-width","r","cx","cy"],D=["stroke-width","stroke-dasharray","stroke-dashoffset","r","cx","cy","transform"],V=["y"],E={key:0,class:"ded-progress-circle-label"},L={class:"ded-progress-label"},S={class:"ded-progress-percent"},d={__name:"CircleProgress",props:{label:{type:String,default:""},percent:{type:Number,default:0},size:{type:Number,default:100},strokeWidth:{type:Number,default:10},className:{type:String,default:""}},setup(r){const s=r,e=b(null),f=b(0);z(()=>{e.value&&(f.value=e.value.getComputedTextLength())}),v(()=>s.label,()=>{e.value&&(f.value=e.value.getComputedTextLength())});const u=t(()=>(s.size-s.strokeWidth)/2),p=t(()=>2*Math.PI*u.value),W=t(()=>p.value-s.percent/100*p.value),h=t(()=>Math.min(Math.max(s.percent,0),100)),m=t(()=>s.label?s.label.length*10+s.strokeWidth+30:64);return(A,B)=>(n(),a("div",{class:x(["ded-progress-circle-container",{[s.className]:!!s.className}])},[(n(),a("svg",{class:"ded-progress",width:s.size,height:s.size},[l("circle",{class:"ded-progress-circle-track",fill:"transparent","stroke-width":s.strokeWidth,r:u.value,cx:s.size/2,cy:s.size/2},null,8,w),l("circle",{class:"ded-progress-circle-percent-form",fill:"transparent","stroke-width":s.strokeWidth,"stroke-dasharray":p.value,"stroke-dashoffset":W.value,"stroke-linecap":"round",r:u.value,cx:s.size/2,cy:s.size/2,transform:`rotate(-90 ${s.size/2} ${s.size/2})`,style:{transition:"stroke-dashoffset 0.35s"}},null,8,D),s.size>=m.value?(n(),a("text",{key:0,ref_key:"textRef",ref:e,class:"ded-progress-label",x:"50%",y:"45%","text-anchor":"middle","font-size":"1em"},o(s.label),513)):g("",!0),s.size>=m.value?(n(),a("text",{key:1,class:"ded-progress-percent-text",x:"50%",y:r.label?"60%":"50%","text-anchor":"middle",dy:".3em","font-size":"1.5em"},o(`${h.value}%`),9,V)):g("",!0)],8,_)),r.size<m.value?(n(),a("div",E,[l("span",L,o(s.label),1),l("span",S,o(`${h.value}%`),1)])):g("",!0)],2))}};d.__docgenInfo={exportName:"default",displayName:"CircleProgress",description:"",tags:{},props:[{name:"label",type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"percent",type:{name:"number"},defaultValue:{func:!1,value:"0"}},{name:"size",type:{name:"number"},defaultValue:{func:!1,value:"100"}},{name:"strokeWidth",type:{name:"number"},defaultValue:{func:!1,value:"10"}},{name:"className",type:{name:"string"},defaultValue:{func:!1,value:'""'}}],sourceFiles:["/home/runner/work/DED-WDS_VUE/DED-WDS_VUE/libs/src/ui/element/Progress/CircleProgress/CircleProgress.vue"]};const F={title:"Component/Progress-Circle",component:d,tags:["autodocs"],argTypes:{label:{description:"進度指示標籤",control:{type:"text"}},percent:{description:"進度",required:!0,control:{type:"range",min:0,max:100,step:1},defaultValue:66},size:{description:"直徑",control:{type:"range",min:24,max:200,step:1},defaultValue:50},strokeWidth:{description:"線條寬度",control:{type:"range",min:1,max:20,step:1}},className:{description:"客製化樣式",control:{type:"text"}}},parameters:{docs:{title:"CircleProgress",description:{component:"圓形進度指示組件的呈現及說明。"}}}},c={name:"預設項目",args:{label:"Label",percent:65,size:100,strokeWidth:10,className:""},render:r=>({components:{CircleProgress:d},setup(){return{args:r}},template:`
      <CircleProgress
        :label="args.label"
        :percent="args.percent"
        :size="args.size"
        :strokeWidth="args.strokeWidth"
        :className="args.className"
      ></CircleProgress>`}),parameters:{controls:{},docs:{source:{transform:(r,s)=>{const{args:e}=s;return["<script setup>",'import { CircleProgress } from "@ded-wds-vue/ui";',"<\/script>","","<template>","  <CircleProgress",`    ${e.label?`label="${e.label}"`:""}`,`    ${e.percent!==void 0?`:percent="${e.percent}"`:""}`,`    ${e.size!==void 0?`:size="${e.size}"`:""}`,`    ${e.strokeWidth!==void 0?`:strokeWidth="${e.strokeWidth}"`:""}`,`    ${e.className?`className="${e.className}"`:""}`,"  ></CircleProgress>","</template>"].filter(Boolean).join(`
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
      </div>`}),parameters:{controls:{exclude:["size","label"]},docs:{source:{transform:(r,s)=>{const{args:e}=s;return["<script setup>",'import { CircleProgress } from "@ded-wds-vue/ui";',"<\/script>","","<template>","  <CircleProgress",`    ${e.label?`label="${e.label}"`:""}`,`    ${e.percent!==void 0?`:percent="${e.percent}"`:""}`,'    :size="70"',`    ${e.strokeWidth!==void 0?`:strokeWidth="${e.strokeWidth}"`:""}`,`    ${e.className?`className="${e.className}"`:""}`,"  ></CircleProgress>","  <CircleProgress",`    ${e.label?`label="${e.label}"`:""}`,`    ${e.percent!==void 0?`:percent="${e.percent}"`:""}`,'    :size="100"',`    ${e.strokeWidth!==void 0?`:strokeWidth="${e.strokeWidth}"`:""}`,`    ${e.className?`className="${e.className}"`:""}`,"  ></CircleProgress>","</template>"].filter(Boolean).join(`
`).trim()}}}}};var k,C,$;c.parameters={...c.parameters,docs:{...(k=c.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...($=(C=c.parameters)==null?void 0:C.docs)==null?void 0:$.source}}};var N,P,y;i.parameters={...i.parameters,docs:{...(N=i.parameters)==null?void 0:N.docs,source:{originalSource:'{\n  name: "顯示標籤",\n  args: {\n    label: "Label",\n    percent: 65,\n    // size: 100,\n    strokeWidth: 10,\n    className: ""\n  },\n  render: args => ({\n    components: {\n      CircleProgress\n    },\n    setup() {\n      return {\n        args\n      };\n    },\n    template: `\n      <div style="display:flex; align-items: center; gap: 24px">\n        <CircleProgress\n          :label="args.label"\n          :percent="args.percent"\n          size="70"\n          :strokeWidth="args.strokeWidth"\n          :className="args.className"\n        ></CircleProgress>\n        <CircleProgress\n          :label="args.label"\n          :percent="args.percent"\n          size="100"\n          :strokeWidth="args.strokeWidth"\n          :className="args.className"\n        ></CircleProgress>\n      </div>`\n  }),\n  // 控制 controls 中能控制的參數\n  parameters: {\n    controls: {\n      exclude: ["size", "label"]\n    },\n    docs: {\n      source: {\n        transform: (src, storyContext) => {\n          const {\n            args\n          } = storyContext;\n          return [`<script setup>`, `import { CircleProgress } from "@ded-wds-vue/ui";`, `<\/script>`, "", "<template>", `  <CircleProgress`, `    ${args.label ? `label="${args.label}"` : ""}`, `    ${args.percent !== undefined ? `:percent="${args.percent}"` : ""}`, `    :size="70"`, `    ${args.strokeWidth !== undefined ? `:strokeWidth="${args.strokeWidth}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, `  ></CircleProgress>`, `  <CircleProgress`, `    ${args.label ? `label="${args.label}"` : ""}`, `    ${args.percent !== undefined ? `:percent="${args.percent}"` : ""}`, `    :size="100"`, `    ${args.strokeWidth !== undefined ? `:strokeWidth="${args.strokeWidth}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, `  ></CircleProgress>`, "</template>"].filter(Boolean).join("\\n").trim();\n        }\n      }\n    }\n  }\n}',...(y=(P=i.parameters)==null?void 0:P.docs)==null?void 0:y.source}}};const M=["DefaultCircleProgress","CircleProgressLabelStory"];export{i as CircleProgressLabelStory,c as DefaultCircleProgress,M as __namedExportsOrder,F as default};

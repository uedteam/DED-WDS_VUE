import{m as h,u as _,c as k,w,a as B,f as o,J as u,n as E,o as m,r as f,C as p,e as x,d as M}from"./vue.esm-bundler-CTfO_w4g.js";import{_ as j}from"./Slider-CtbBQ4Vt.js";import{_ as c}from"./Button-Bwxpskyf.js";import{_ as g}from"./Icon-B1v4yc6p.js";import"./index-Bb4qSo10.js";import"./iframe-eB0XTDOC.js";import"../sb-preview/runtime.js";const t={__name:"SliderControl",props:h({themeColor:{type:String,default:"primary",validator:a=>["primary","secondary","tertiary","success","warning","error","info"].includes(a)},min:{type:Number,default:0},max:{type:Number,default:100},step:{type:Number,default:1},initValue:{type:Number,required:!0,default:0},label:{type:String,default:""},prefix:{type:String,default:""},suffix:{type:String,default:""},isDisabled:{type:Boolean,default:!1},className:{type:String,default:""}},{modelValue:{},modelModifiers:{}}),emits:["update:modelValue"],setup(a){const s=_(a,"modelValue"),e=a,l=k({get:()=>s.value!==void 0?s.value:e.initValue!==void 0?e.initValue:e.min,set:r=>{s.value=r}}),N=()=>{l.value=Math.min(l.value+Number(e.step),e.max)},y=()=>{l.value=Math.max(l.value-Number(e.step),e.min)};return w(()=>e.initValue,r=>{(s.value===void 0||s.value===null)&&(l.value=r)}),(r,d)=>(m(),B("div",{class:E({"ded-button-slider":!0,[e.className]:!!e.className})},[o(c,{variant:"text",themeColor:e.themeColor,isDisabled:e.isDisabled,onClick:y},{default:u(()=>[f(r.$slots,"prefix",{},()=>[e.prefix?(m(),p(g,{key:0,name:e.prefix,size:"32"},null,8,["name"])):x("",!0)])]),_:3},8,["themeColor","isDisabled"]),o(j,{themeColor:e.themeColor,min:e.min,max:e.max,step:e.step,label:e.label,initValue:e.initValue,isDisabled:e.isDisabled,modelValue:l.value,"onUpdate:modelValue":d[0]||(d[0]=v=>l.value=v)},null,8,["themeColor","min","max","step","label","initValue","isDisabled","modelValue"]),o(c,{variant:"text",themeColor:e.themeColor,isDisabled:e.isDisabled,onClick:N},{default:u(()=>[f(r.$slots,"suffix",{},()=>[e.suffix?(m(),p(g,{key:0,name:e.suffix,size:"32"},null,8,["name"])):x("",!0)])]),_:3},8,["themeColor","isDisabled"])],2))}};t.__docgenInfo={exportName:"default",displayName:"SliderControl",description:"",tags:{},props:[{name:"themeColor",type:{name:"string"},defaultValue:{func:!1,value:'"primary"'},values:["primary","secondary","tertiary","success","warning","error","info"]},{name:"min",type:{name:"number"},defaultValue:{func:!1,value:"0"}},{name:"max",type:{name:"number"},defaultValue:{func:!1,value:"100"}},{name:"step",type:{name:"number"},defaultValue:{func:!1,value:"1"}},{name:"initValue",type:{name:"number"},required:!0,defaultValue:{func:!1,value:"0"}},{name:"label",type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"prefix",type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"suffix",type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"isDisabled",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"className",type:{name:"string"},defaultValue:{func:!1,value:'""'}}],slots:[{name:"prefix"},{name:"suffix"}],sourceFiles:["/Users/auouser/Desktop/Work_Space/DED-WDS_VUE/libs/src/ui/element/SliderControl/SliderControl.vue"]};const J={title:"Component/Slider-Control",component:t,tags:["autodocs"],argTypes:{themeColor:{description:"主題顏色",control:{type:"select"},options:["primary","secondary","tertiary","success","warning","error","info"],table:{type:{summary:"primary | secondary | tertiary | success | warning | error | info"}}},min:{description:"最小值",control:{type:"number"}},max:{description:"最大值",control:{type:"number"}},step:{description:"步進值",control:{type:"number"}},initValue:{description:"初始值",control:{type:"number"}},label:{description:"單位",control:{type:"text"}},prefix:{description:"前置元素",control:{type:"select",labels:{"":"None",increase:"increase",decrease:"decrease"}},options:["","increase","decrease"]},suffix:{description:"後置元素",control:{type:"select",labels:{"":"None",increase:"increase",decrease:"decrease"}},options:["","increase","decrease"]},isDisabled:{description:"是否禁用",control:{type:"boolean"}},className:{description:"客製化樣式",control:{type:"text"}}},parameters:{docs:{title:"SliderControl",description:{component:"Slider組件的呈現及說明。"}}}},i={name:"預設項目",args:{themeColor:"primary",min:-100,max:100,step:1,initValue:0,label:"℃",prefix:"decrease",suffix:"increase",isDisabled:!1,className:""},render:a=>({components:{SliderControl:t},setup(){const s=M(a.initValue||0);return{args:a,sliderValue:s}},template:`
            <SliderControl
                :themeColor="args.themeColor"
                :min="args.min"
                :max="args.max"
                :step="args.step"
                :initValue="args.initValue"
                :label="args.label"
                :prefix="args.prefix"
                :suffix="args.suffix"
                :isDisabled="args.isDisabled"
                :className="args.className"
                v-model="sliderValue"
            ></SliderControl>
        `}),parameters:{controls:{},docs:{source:{transform:(a,s)=>{const{args:e}=s;return["<SliderControl",`  themeColor="${e.themeColor}"`,`  :min="${e.min}"`,`  :max="${e.max}"`,`  :step="${e.step}"`,`  :initValue="${e.initValue}"`,`  label="${e.label}"`,`  prefix="${e.prefix}"`,`  suffix="${e.suffix}"`,`  :isDisabled="${e.isDisabled}"`,`  className="${e.className}"`,'  v-model="sliderValue"',"></SliderControl>"].join(`
`).trim()}}}}},n={name:"主題色彩",args:{themeColor:"primary",min:-100,max:100,step:1,label:"℃",prefix:"decrease",suffix:"increase",isDisabled:!1,className:""},render:a=>({components:{SliderControl:t},setup(){return{args:a}},template:`
            <div style="display:flex; flex-direction: column;">
                <SliderControl
                    themeColor="primary"
                    :prefix="args.prefix"
                    :suffix="args.suffix"
                    :isDisabled="args.isDisabled"
                    :min="args.min"
                    :max="args.max"
                    :step="args.step"
                    :initValue="40"
                    :label="args.label"
                    :className="args.className"
                    v-model="sliderValue"
                ></SliderControl>
                <SliderControl
                    themeColor="secondary"
                    :prefix="args.prefix"
                    :suffix="args.suffix"
                    :isDisabled="args.isDisabled"
                    :min="args.min"
                    :max="args.max"
                    :step="args.step"
                    :initValue="50"
                    :label="args.label"
                    :className="args.className"
                    v-model="sliderValue"
                ></SliderControl>
                <SliderControl
                    themeColor="tertiary"
                    :prefix="args.prefix"
                    :suffix="args.suffix"
                    :isDisabled="args.isDisabled"
                    :min="args.min"
                    :max="args.max"
                    :step="args.step"
                    :initValue="60"
                    :label="args.label"
                    :className="args.className"
                    v-model="sliderValue"
                ></SliderControl>
                <SliderControl
                    themeColor="success"
                    :prefix="args.prefix"
                    :suffix="args.suffix"
                    :isDisabled="args.isDisabled"
                    :min="args.min"
                    :max="args.max"
                    :step="args.step"
                    :initValue="70"
                    :label="args.label"
                    :className="args.className"
                    v-model="sliderValue"
                ></SliderControl>
                <SliderControl
                    themeColor="warning"
                    :prefix="args.prefix"
                    :suffix="args.suffix"
                    :isDisabled="args.isDisabled"
                    :min="args.min"
                    :max="args.max"
                    :step="args.step"
                    :initValue="80"
                    :label="args.label"
                    :className="args.className"
                    v-model="sliderValue"
                ></SliderControl>
                <SliderControl
                    themeColor="error"
                    :prefix="args.prefix"
                    :suffix="args.suffix"
                    :isDisabled="args.isDisabled"
                    :min="args.min"
                    :max="args.max"
                    :step="args.step"
                    :initValue="90"
                    :label="args.label"
                    :className="args.className"
                    v-model="sliderValue"
                ></SliderControl>
                <SliderControl
                    themeColor="info"
                    :prefix="args.prefix"
                    :suffix="args.suffix"
                    :isDisabled="args.isDisabled"
                    :min="args.min"
                    :max="args.max"
                    :step="args.step"
                    :initValue="100"
                    :label="args.label"
                    :className="args.className"
                    v-model="sliderValue"
                ></SliderControl>
            </div>
        `}),parameters:{controls:{},docs:{source:{transform:(a,s)=>{const{args:e}=s;return["<SliderControl",'  themeColor="primary"',`  :min="${e.min}"`,`  :max="${e.max}"`,`  :step="${e.step}"`,'  :initValue="40"',`  label="${e.label}"`,`  prefix="${e.prefix}"`,`  suffix="${e.suffix}"`,`  :isDisabled="${e.isDisabled}"`,`  className="${e.className}"`,'  v-model="sliderValue"',"></SliderControl>","<SliderControl",'  themeColor="secondary"',`  :min="${e.min}"`,`  :max="${e.max}"`,`  :step="${e.step}"`,'  :initValue="50"',`  label="${e.label}"`,`  prefix="${e.prefix}"`,`  suffix="${e.suffix}"`,`  :isDisabled="${e.isDisabled}"`,`  className="${e.className}"`,'  v-model="sliderValue"',"></SliderControl>","<SliderControl",'  themeColor="tertiary"',`  :min="${e.min}"`,`  :max="${e.max}"`,`  :step="${e.step}"`,'  :initValue="60"',`  label="${e.label}"`,`  prefix="${e.prefix}"`,`  suffix="${e.suffix}"`,`  :isDisabled="${e.isDisabled}"`,`  className="${e.className}"`,'  v-model="sliderValue"',"></SliderControl>","<SliderControl",'  themeColor="success"',`  :min="${e.min}"`,`  :max="${e.max}"`,`  :step="${e.step}"`,'  :initValue="70"',`  label="${e.label}"`,`  prefix="${e.prefix}"`,`  suffix="${e.suffix}"`,`  :isDisabled="${e.isDisabled}"`,`  className="${e.className}"`,'  v-model="sliderValue"',"></SliderControl>","<SliderControl",'  themeColor="warning"',`  :min="${e.min}"`,`  :max="${e.max}"`,`  :step="${e.step}"`,'  :initValue="80"',`  label="${e.label}"`,`  prefix="${e.prefix}"`,`  suffix="${e.suffix}"`,`  :isDisabled="${e.isDisabled}"`,`  className="${e.className}"`,'  v-model="sliderValue"',"></SliderControl>","<SliderControl",'  themeColor="error"',`  :min="${e.min}"`,`  :max="${e.max}"`,`  :step="${e.step}"`,'  :initValue="90"',`  label="${e.label}"`,`  prefix="${e.prefix}"`,`  suffix="${e.suffix}"`,`  :isDisabled="${e.isDisabled}"`,`  className="${e.className}"`,'  v-model="sliderValue"',"></SliderControl>","<SliderControl",'  themeColor="info"',`  :min="${e.min}"`,`  :max="${e.max}"`,`  :step="${e.step}"`,'  :initValue="100"',`  label="${e.label}"`,`  prefix="${e.prefix}"`,`  suffix="${e.suffix}"`,`  :isDisabled="${e.isDisabled}"`,`  className="${e.className}"`,'  v-model="sliderValue"',"></SliderControl>"].join(`
`).trim()}}}}};var b,C,$;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:`{
  name: "預設項目",
  args: {
    themeColor: "primary",
    min: -100,
    max: 100,
    step: 1,
    initValue: 0,
    label: "℃",
    prefix: "decrease",
    suffix: "increase",
    isDisabled: false,
    className: ''
  },
  render: args => ({
    components: {
      SliderControl
    },
    setup() {
      const sliderValue = ref(args.initValue || 0);
      return {
        args,
        sliderValue
      };
    },
    template: \`
            <SliderControl
                :themeColor="args.themeColor"
                :min="args.min"
                :max="args.max"
                :step="args.step"
                :initValue="args.initValue"
                :label="args.label"
                :prefix="args.prefix"
                :suffix="args.suffix"
                :isDisabled="args.isDisabled"
                :className="args.className"
                v-model="sliderValue"
            ></SliderControl>
        \`
  }),
  parameters: {
    controls: {
      // include or exclude keys as needed
    },
    docs: {
      source: {
        transform: (src, storyContext) => {
          const {
            args
          } = storyContext;
          return ['<SliderControl', \`  themeColor="\${args.themeColor}"\`, \`  :min="\${args.min}"\`, \`  :max="\${args.max}"\`, \`  :step="\${args.step}"\`, \`  :initValue="\${args.initValue}"\`, \`  label="\${args.label}"\`, \`  prefix="\${args.prefix}"\`, \`  suffix="\${args.suffix}"\`, \`  :isDisabled="\${args.isDisabled}"\`, \`  className="\${args.className}"\`, \`  v-model="sliderValue"\`, '></SliderControl>'].join('\\n').trim();
        }
      }
    }
  }
}`,...($=(C=i.parameters)==null?void 0:C.docs)==null?void 0:$.source}}};var V,S,D;n.parameters={...n.parameters,docs:{...(V=n.parameters)==null?void 0:V.docs,source:{originalSource:'{\n  name: "主題色彩",\n  args: {\n    themeColor: "primary",\n    min: -100,\n    max: 100,\n    step: 1,\n    label: "℃",\n    prefix: "decrease",\n    suffix: "increase",\n    isDisabled: false,\n    className: \'\'\n  },\n  render: args => ({\n    components: {\n      SliderControl\n    },\n    setup() {\n      return {\n        args\n      };\n    },\n    template: `\n            <div style="display:flex; flex-direction: column;">\n                <SliderControl\n                    themeColor="primary"\n                    :prefix="args.prefix"\n                    :suffix="args.suffix"\n                    :isDisabled="args.isDisabled"\n                    :min="args.min"\n                    :max="args.max"\n                    :step="args.step"\n                    :initValue="40"\n                    :label="args.label"\n                    :className="args.className"\n                    v-model="sliderValue"\n                ></SliderControl>\n                <SliderControl\n                    themeColor="secondary"\n                    :prefix="args.prefix"\n                    :suffix="args.suffix"\n                    :isDisabled="args.isDisabled"\n                    :min="args.min"\n                    :max="args.max"\n                    :step="args.step"\n                    :initValue="50"\n                    :label="args.label"\n                    :className="args.className"\n                    v-model="sliderValue"\n                ></SliderControl>\n                <SliderControl\n                    themeColor="tertiary"\n                    :prefix="args.prefix"\n                    :suffix="args.suffix"\n                    :isDisabled="args.isDisabled"\n                    :min="args.min"\n                    :max="args.max"\n                    :step="args.step"\n                    :initValue="60"\n                    :label="args.label"\n                    :className="args.className"\n                    v-model="sliderValue"\n                ></SliderControl>\n                <SliderControl\n                    themeColor="success"\n                    :prefix="args.prefix"\n                    :suffix="args.suffix"\n                    :isDisabled="args.isDisabled"\n                    :min="args.min"\n                    :max="args.max"\n                    :step="args.step"\n                    :initValue="70"\n                    :label="args.label"\n                    :className="args.className"\n                    v-model="sliderValue"\n                ></SliderControl>\n                <SliderControl\n                    themeColor="warning"\n                    :prefix="args.prefix"\n                    :suffix="args.suffix"\n                    :isDisabled="args.isDisabled"\n                    :min="args.min"\n                    :max="args.max"\n                    :step="args.step"\n                    :initValue="80"\n                    :label="args.label"\n                    :className="args.className"\n                    v-model="sliderValue"\n                ></SliderControl>\n                <SliderControl\n                    themeColor="error"\n                    :prefix="args.prefix"\n                    :suffix="args.suffix"\n                    :isDisabled="args.isDisabled"\n                    :min="args.min"\n                    :max="args.max"\n                    :step="args.step"\n                    :initValue="90"\n                    :label="args.label"\n                    :className="args.className"\n                    v-model="sliderValue"\n                ></SliderControl>\n                <SliderControl\n                    themeColor="info"\n                    :prefix="args.prefix"\n                    :suffix="args.suffix"\n                    :isDisabled="args.isDisabled"\n                    :min="args.min"\n                    :max="args.max"\n                    :step="args.step"\n                    :initValue="100"\n                    :label="args.label"\n                    :className="args.className"\n                    v-model="sliderValue"\n                ></SliderControl>\n            </div>\n        `\n  }),\n  // 控制 controls 中能控制的參數\n  parameters: {\n    controls: {\n      // include: [\'themeColor\', \'label\', \'value\', \'name\' ],\n      // exclude:[\'range\']\n    },\n    docs: {\n      source: {\n        transform: (src, storyContext) => {\n          const {\n            args\n          } = storyContext;\n          return [\'<SliderControl\', `  themeColor="primary"`, `  :min="${args.min}"`, `  :max="${args.max}"`, `  :step="${args.step}"`, `  :initValue="40"`, `  label="${args.label}"`, `  prefix="${args.prefix}"`, `  suffix="${args.suffix}"`, `  :isDisabled="${args.isDisabled}"`, `  className="${args.className}"`, `  v-model="sliderValue"`, \'></SliderControl>\', \'<SliderControl\', `  themeColor="secondary"`, `  :min="${args.min}"`, `  :max="${args.max}"`, `  :step="${args.step}"`, `  :initValue="50"`, `  label="${args.label}"`, `  prefix="${args.prefix}"`, `  suffix="${args.suffix}"`, `  :isDisabled="${args.isDisabled}"`, `  className="${args.className}"`, `  v-model="sliderValue"`, \'></SliderControl>\', \'<SliderControl\', `  themeColor="tertiary"`, `  :min="${args.min}"`, `  :max="${args.max}"`, `  :step="${args.step}"`, `  :initValue="60"`, `  label="${args.label}"`, `  prefix="${args.prefix}"`, `  suffix="${args.suffix}"`, `  :isDisabled="${args.isDisabled}"`, `  className="${args.className}"`, `  v-model="sliderValue"`, \'></SliderControl>\', \'<SliderControl\', `  themeColor="success"`, `  :min="${args.min}"`, `  :max="${args.max}"`, `  :step="${args.step}"`, `  :initValue="70"`, `  label="${args.label}"`, `  prefix="${args.prefix}"`, `  suffix="${args.suffix}"`, `  :isDisabled="${args.isDisabled}"`, `  className="${args.className}"`, `  v-model="sliderValue"`, \'></SliderControl>\', \'<SliderControl\', `  themeColor="warning"`, `  :min="${args.min}"`, `  :max="${args.max}"`, `  :step="${args.step}"`, `  :initValue="80"`, `  label="${args.label}"`, `  prefix="${args.prefix}"`, `  suffix="${args.suffix}"`, `  :isDisabled="${args.isDisabled}"`, `  className="${args.className}"`, `  v-model="sliderValue"`, \'></SliderControl>\', \'<SliderControl\', `  themeColor="error"`, `  :min="${args.min}"`, `  :max="${args.max}"`, `  :step="${args.step}"`, `  :initValue="90"`, `  label="${args.label}"`, `  prefix="${args.prefix}"`, `  suffix="${args.suffix}"`, `  :isDisabled="${args.isDisabled}"`, `  className="${args.className}"`, `  v-model="sliderValue"`, \'></SliderControl>\', \'<SliderControl\', `  themeColor="info"`, `  :min="${args.min}"`, `  :max="${args.max}"`, `  :step="${args.step}"`, `  :initValue="100"`, `  label="${args.label}"`, `  prefix="${args.prefix}"`, `  suffix="${args.suffix}"`, `  :isDisabled="${args.isDisabled}"`, `  className="${args.className}"`, `  v-model="sliderValue"`, \'></SliderControl>\'].join(\'\\n\').trim();\n        }\n      }\n    }\n  }\n}',...(D=(S=n.parameters)==null?void 0:S.docs)==null?void 0:D.source}}};const O=["SliderButton","SliderButtonColors"];export{i as SliderButton,n as SliderButtonColors,O as __namedExportsOrder,J as default};

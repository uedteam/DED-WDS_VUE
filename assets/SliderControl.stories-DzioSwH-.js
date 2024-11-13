import{m as v,u as _,c as k,w,a as B,k as o,C as d,n as E,o as m,r as f,h as p,j as x}from"./vue.esm-bundler-C7FxdvdM.js";import{_ as j}from"./Slider-vDrxDSE7.js";import{_ as g}from"./Button-DSMmQuyu.js";import{_ as c}from"./Icon-B_G9slvJ.js";import"./index-Bb4qSo10.js";import"./iframe-Bn-91BlT.js";import"../sb-preview/runtime.js";const t={__name:"SliderControl",props:v({themeColor:{type:String,default:"primary",validator:s=>["primary","secondary","tertiary","success","warning","error","info"].includes(s)},prefix:{type:String,default:""},suffix:{type:String,default:""},isDisabled:{type:Boolean,default:!1},min:{type:Number,default:-100},max:{type:Number,default:100},step:{type:[Number,String],default:1},unit:{type:String,default:"%"},initValue:{type:Number,required:!0},className:{type:String,default:""}},{modelValue:{},modelModifiers:{}}),emits:["update:modelValue"],setup(s){const a=_(s,"modelValue"),e=s,r=k({get:()=>a.value??e.initValue??e.min,set:i=>{a.value=i}}),N=()=>{r.value=Math.min(r.value+Number(e.step),e.max)},y=()=>{r.value=Math.max(r.value-Number(e.step),e.min)};return w(()=>e.initValue,i=>{a.value===void 0&&(r.value=i)}),(i,u)=>(m(),B("div",{class:E({"button-slider":!0,[e.className]:!!e.className})},[o(g,{variant:"text",themeColor:e.themeColor,isDisabled:e.isDisabled,onClick:y},{default:d(()=>[f(i.$slots,"prefix",{},()=>[e.prefix?(m(),p(c,{key:0,name:e.prefix,size:"32"},null,8,["name"])):x("",!0)])]),_:3},8,["themeColor","isDisabled"]),o(j,{themeColor:e.themeColor,min:e.min,max:e.max,unit:e.unit,step:e.step,isDisabled:e.isDisabled,initValue:e.initValue,modelValue:r.value,"onUpdate:modelValue":u[0]||(u[0]=h=>r.value=h)},null,8,["themeColor","min","max","unit","step","isDisabled","initValue","modelValue"]),o(g,{variant:"text",themeColor:e.themeColor,isDisabled:e.isDisabled,onClick:N},{default:d(()=>[f(i.$slots,"suffix",{},()=>[e.suffix?(m(),p(c,{key:0,name:e.suffix,size:"32"},null,8,["name"])):x("",!0)])]),_:3},8,["themeColor","isDisabled"])],2))}};t.__docgenInfo={exportName:"default",displayName:"SliderControl",description:"",tags:{},props:[{name:"themeColor",type:{name:"string"},defaultValue:{func:!1,value:"'primary'"},values:["primary","secondary","tertiary","success","warning","error","info"]},{name:"prefix",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"suffix",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"isDisabled",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"min",type:{name:"number"},defaultValue:{func:!1,value:"-100"}},{name:"max",type:{name:"number"},defaultValue:{func:!1,value:"100"}},{name:"step",type:{name:"number|string"},defaultValue:{func:!1,value:"1"}},{name:"unit",type:{name:"string"},defaultValue:{func:!1,value:"'%'"}},{name:"initValue",type:{name:"number"},required:!0},{name:"className",type:{name:"string"},defaultValue:{func:!1,value:"''"}}],slots:[{name:"prefix"},{name:"suffix"}],sourceFiles:["D:/98_測試/up/DED-WDS_VUE/libs/src/ui/element/SliderControl/SliderControl.vue"]};const O={title:"Design System/Slider-Control",component:t,tags:["autodocs"],argTypes:{themeColor:{description:"主題顏色",control:{type:"select"},options:["primary","secondary","tertiary","success","warning","error","info"],table:{type:{summary:"primary | secondary | tertiary | success | warning | error | info"}}},prefix:{description:"前置元素",control:{type:"select",labels:{"":"None",increase:"increase",decrease:"decrease"}},options:["","increase","decrease"]},suffix:{description:"後置元素",control:{type:"select",labels:{"":"None",increase:"increase",decrease:"decrease"}},options:["","increase","decrease"]},isDisabled:{description:"是否禁用",control:{type:"boolean"}},min:{description:"最小值",control:{type:"number"}},max:{description:"最大值",control:{type:"number"}},step:{description:"步進值",control:{type:"number"}},unit:{description:"單位",control:{type:"text"}},initValue:{description:"初始值",control:{type:"number"}},className:{description:"客製化樣式",control:{type:"text"}}},parameters:{docs:{title:"SliderControl",description:{component:"Slider組件的呈現及說明。"}}}},n={name:"預設項目",args:{themeColor:"primary",prefix:"decrease",suffix:"increase",isDisabled:!1,min:-100,max:100,step:1,unit:"℃",initValue:50,className:""},render:s=>({components:{SliderControl:t},setup(){return{args:s}},template:`
            <SliderControl
                :themeColor="args.themeColor"
                :prefix="args.prefix"
                :suffix="args.suffix"
                :isDisabled="args.isDisabled"
                :min="args.min"
                :max="args.max"
                :step="args.step"
                :unit="args.unit"
                :initValue="args.initValue"
                :className="args.className"
            ></SliderControl>
        `}),parameters:{controls:{},docs:{source:{transform:(s,a)=>{const{args:e}=a;return["<SliderControl",`  themeColor="${e.themeColor}"`,`  prefix="${e.prefix}"`,`  suffix="${e.suffix}"`,`  :isDisabled="${e.isDisabled}"`,`  :min="${e.min}"`,`  :max="${e.max}"`,`  :step="${e.step}"`,`  unit="${e.unit}"`,`  :initValue="${e.initValue}"`,`  className="${e.className}"`,"></SliderControl>"].join(`
`).trim()}}}}},l={name:"主題色彩",args:{themeColor:"primary",prefix:"decrease",suffix:"increase",isDisabled:!1,min:-100,max:100,step:1,unit:"℃",className:""},render:s=>({components:{SliderControl:t},setup(){return{args:s}},template:`
            <div style="display:flex; flex-direction: column;">
                <SliderControl
                    themeColor="primary"
                    :prefix="args.prefix"
                    :suffix="args.suffix"
                    :isDisabled="args.isDisabled"
                    :min="args.min"
                    :max="args.max"
                    :step="args.step"
                    :unit="args.unit"
                    :initValue="40"
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
                    :unit="args.unit"
                    :initValue="50"
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
                    :unit="args.unit"
                    :initValue="60"
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
                    :unit="args.unit"
                    :initValue="70"
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
                    :unit="args.unit"
                    :initValue="80"
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
                    :unit="args.unit"
                    :initValue="90"
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
                    :unit="args.unit"
                    :initValue="100"
                    :className="args.className"
                    v-model="sliderValue"
                ></SliderControl>
            </div>
        `}),parameters:{controls:{},docs:{source:{transform:(s,a)=>{const{args:e}=a;return["<SliderControl",'  themeColor="primary"',`  prefix="${e.prefix}"`,`  suffix="${e.suffix}"`,`  :isDisabled="${e.isDisabled}"`,`  :min="${e.min}"`,`  :max="${e.max}"`,`  :step="${e.step}"`,`  unit="${e.unit}"`,'  :initValue="40"',`  className="${e.className}"`,'  v-model="sliderValue"',"></SliderControl>","<SliderControl",'  themeColor="secondary"',`  prefix="${e.prefix}"`,`  suffix="${e.suffix}"`,`  :isDisabled="${e.isDisabled}"`,`  :min="${e.min}"`,`  :max="${e.max}"`,`  :step="${e.step}"`,`  unit="${e.unit}"`,'  :initValue="50"',`  className="${e.className}"`,'  v-model="sliderValue"',"></SliderControl>","<SliderControl",'  themeColor="tertiary"',`  prefix="${e.prefix}"`,`  suffix="${e.suffix}"`,`  :isDisabled="${e.isDisabled}"`,`  :min="${e.min}"`,`  :max="${e.max}"`,`  :step="${e.step}"`,`  unit="${e.unit}"`,'  :initValue="60"',`  className="${e.className}"`,'  v-model="sliderValue"',"></SliderControl>","<SliderControl",'  themeColor="success"',`  prefix="${e.prefix}"`,`  suffix="${e.suffix}"`,`  :isDisabled="${e.isDisabled}"`,`  :min="${e.min}"`,`  :max="${e.max}"`,`  :step="${e.step}"`,`  unit="${e.unit}"`,'  :initValue="70"',`  className="${e.className}"`,'  v-model="sliderValue"',"></SliderControl>","<SliderControl",'  themeColor="warning"',`  prefix="${e.prefix}"`,`  suffix="${e.suffix}"`,`  :isDisabled="${e.isDisabled}"`,`  :min="${e.min}"`,`  :max="${e.max}"`,`  :step="${e.step}"`,`  unit="${e.unit}"`,'  :initValue="80"',`  className="${e.className}"`,'  v-model="sliderValue"',"></SliderControl>","<SliderControl",'  themeColor="error"',`  prefix="${e.prefix}"`,`  suffix="${e.suffix}"`,`  :isDisabled="${e.isDisabled}"`,`  :min="${e.min}"`,`  :max="${e.max}"`,`  :step="${e.step}"`,`  unit="${e.unit}"`,'  :initValue="90"',`  className="${e.className}"`,'  v-model="sliderValue"',"></SliderControl>","<SliderControl",'  themeColor="info"',`  prefix="${e.prefix}"`,`  suffix="${e.suffix}"`,`  :isDisabled="${e.isDisabled}"`,`  :min="${e.min}"`,`  :max="${e.max}"`,`  :step="${e.step}"`,`  unit="${e.unit}"`,'  :initValue="100"',`  className="${e.className}"`,'  v-model="sliderValue"',"></SliderControl>"].join(`
`).trim()}}}}};var C,$,b;n.parameters={...n.parameters,docs:{...(C=n.parameters)==null?void 0:C.docs,source:{originalSource:`{
  name: "預設項目",
  args: {
    themeColor: "primary",
    prefix: "decrease",
    suffix: "increase",
    isDisabled: false,
    min: -100,
    max: 100,
    step: 1,
    unit: "℃",
    initValue: 50,
    className: ''
  },
  render: args => ({
    components: {
      SliderControl
    },
    setup() {
      return {
        args
      };
    },
    template: \`
            <SliderControl
                :themeColor="args.themeColor"
                :prefix="args.prefix"
                :suffix="args.suffix"
                :isDisabled="args.isDisabled"
                :min="args.min"
                :max="args.max"
                :step="args.step"
                :unit="args.unit"
                :initValue="args.initValue"
                :className="args.className"
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
          return ['<SliderControl', \`  themeColor="\${args.themeColor}"\`, \`  prefix="\${args.prefix}"\`, \`  suffix="\${args.suffix}"\`, \`  :isDisabled="\${args.isDisabled}"\`, \`  :min="\${args.min}"\`, \`  :max="\${args.max}"\`, \`  :step="\${args.step}"\`, \`  unit="\${args.unit}"\`, \`  :initValue="\${args.initValue}"\`, \`  className="\${args.className}"\`, '></SliderControl>'].join('\\n').trim();
        }
      }
    }
  }
}`,...(b=($=n.parameters)==null?void 0:$.docs)==null?void 0:b.source}}};var V,S,D;l.parameters={...l.parameters,docs:{...(V=l.parameters)==null?void 0:V.docs,source:{originalSource:'{\n  name: "主題色彩",\n  args: {\n    themeColor: "primary",\n    prefix: "decrease",\n    suffix: "increase",\n    isDisabled: false,\n    min: -100,\n    max: 100,\n    step: 1,\n    unit: "℃",\n    className: \'\'\n  },\n  render: args => ({\n    components: {\n      SliderControl\n    },\n    setup() {\n      return {\n        args\n      };\n    },\n    template: `\n            <div style="display:flex; flex-direction: column;">\n                <SliderControl\n                    themeColor="primary"\n                    :prefix="args.prefix"\n                    :suffix="args.suffix"\n                    :isDisabled="args.isDisabled"\n                    :min="args.min"\n                    :max="args.max"\n                    :step="args.step"\n                    :unit="args.unit"\n                    :initValue="40"\n                    :className="args.className"\n                    v-model="sliderValue"\n                ></SliderControl>\n                <SliderControl\n                    themeColor="secondary"\n                    :prefix="args.prefix"\n                    :suffix="args.suffix"\n                    :isDisabled="args.isDisabled"\n                    :min="args.min"\n                    :max="args.max"\n                    :step="args.step"\n                    :unit="args.unit"\n                    :initValue="50"\n                    :className="args.className"\n                    v-model="sliderValue"\n                ></SliderControl>\n                <SliderControl\n                    themeColor="tertiary"\n                    :prefix="args.prefix"\n                    :suffix="args.suffix"\n                    :isDisabled="args.isDisabled"\n                    :min="args.min"\n                    :max="args.max"\n                    :step="args.step"\n                    :unit="args.unit"\n                    :initValue="60"\n                    :className="args.className"\n                    v-model="sliderValue"\n                ></SliderControl>\n                <SliderControl\n                    themeColor="success"\n                    :prefix="args.prefix"\n                    :suffix="args.suffix"\n                    :isDisabled="args.isDisabled"\n                    :min="args.min"\n                    :max="args.max"\n                    :step="args.step"\n                    :unit="args.unit"\n                    :initValue="70"\n                    :className="args.className"\n                    v-model="sliderValue"\n                ></SliderControl>\n                <SliderControl\n                    themeColor="warning"\n                    :prefix="args.prefix"\n                    :suffix="args.suffix"\n                    :isDisabled="args.isDisabled"\n                    :min="args.min"\n                    :max="args.max"\n                    :step="args.step"\n                    :unit="args.unit"\n                    :initValue="80"\n                    :className="args.className"\n                    v-model="sliderValue"\n                ></SliderControl>\n                <SliderControl\n                    themeColor="error"\n                    :prefix="args.prefix"\n                    :suffix="args.suffix"\n                    :isDisabled="args.isDisabled"\n                    :min="args.min"\n                    :max="args.max"\n                    :step="args.step"\n                    :unit="args.unit"\n                    :initValue="90"\n                    :className="args.className"\n                    v-model="sliderValue"\n                ></SliderControl>\n                <SliderControl\n                    themeColor="info"\n                    :prefix="args.prefix"\n                    :suffix="args.suffix"\n                    :isDisabled="args.isDisabled"\n                    :min="args.min"\n                    :max="args.max"\n                    :step="args.step"\n                    :unit="args.unit"\n                    :initValue="100"\n                    :className="args.className"\n                    v-model="sliderValue"\n                ></SliderControl>\n            </div>\n        `\n  }),\n  // 控制 controls 中能控制的參數\n  parameters: {\n    controls: {\n      // include: [\'themeColor\', \'label\', \'value\', \'name\' ],\n      // exclude:[\'range\']\n    },\n    docs: {\n      source: {\n        transform: (src, storyContext) => {\n          const {\n            args\n          } = storyContext;\n          return [\'<SliderControl\', `  themeColor="primary"`, `  prefix="${args.prefix}"`, `  suffix="${args.suffix}"`, `  :isDisabled="${args.isDisabled}"`, `  :min="${args.min}"`, `  :max="${args.max}"`, `  :step="${args.step}"`, `  unit="${args.unit}"`, `  :initValue="40"`, `  className="${args.className}"`, `  v-model="sliderValue"`, \'></SliderControl>\', \'<SliderControl\', `  themeColor="secondary"`, `  prefix="${args.prefix}"`, `  suffix="${args.suffix}"`, `  :isDisabled="${args.isDisabled}"`, `  :min="${args.min}"`, `  :max="${args.max}"`, `  :step="${args.step}"`, `  unit="${args.unit}"`, `  :initValue="50"`, `  className="${args.className}"`, `  v-model="sliderValue"`, \'></SliderControl>\', \'<SliderControl\', `  themeColor="tertiary"`, `  prefix="${args.prefix}"`, `  suffix="${args.suffix}"`, `  :isDisabled="${args.isDisabled}"`, `  :min="${args.min}"`, `  :max="${args.max}"`, `  :step="${args.step}"`, `  unit="${args.unit}"`, `  :initValue="60"`, `  className="${args.className}"`, `  v-model="sliderValue"`, \'></SliderControl>\', \'<SliderControl\', `  themeColor="success"`, `  prefix="${args.prefix}"`, `  suffix="${args.suffix}"`, `  :isDisabled="${args.isDisabled}"`, `  :min="${args.min}"`, `  :max="${args.max}"`, `  :step="${args.step}"`, `  unit="${args.unit}"`, `  :initValue="70"`, `  className="${args.className}"`, `  v-model="sliderValue"`, \'></SliderControl>\', \'<SliderControl\', `  themeColor="warning"`, `  prefix="${args.prefix}"`, `  suffix="${args.suffix}"`, `  :isDisabled="${args.isDisabled}"`, `  :min="${args.min}"`, `  :max="${args.max}"`, `  :step="${args.step}"`, `  unit="${args.unit}"`, `  :initValue="80"`, `  className="${args.className}"`, `  v-model="sliderValue"`, \'></SliderControl>\', \'<SliderControl\', `  themeColor="error"`, `  prefix="${args.prefix}"`, `  suffix="${args.suffix}"`, `  :isDisabled="${args.isDisabled}"`, `  :min="${args.min}"`, `  :max="${args.max}"`, `  :step="${args.step}"`, `  unit="${args.unit}"`, `  :initValue="90"`, `  className="${args.className}"`, `  v-model="sliderValue"`, \'></SliderControl>\', \'<SliderControl\', `  themeColor="info"`, `  prefix="${args.prefix}"`, `  suffix="${args.suffix}"`, `  :isDisabled="${args.isDisabled}"`, `  :min="${args.min}"`, `  :max="${args.max}"`, `  :step="${args.step}"`, `  unit="${args.unit}"`, `  :initValue="100"`, `  className="${args.className}"`, `  v-model="sliderValue"`, \'></SliderControl>\'].join(\'\\n\').trim();\n        }\n      }\n    }\n  }\n}',...(D=(S=l.parameters)==null?void 0:S.docs)==null?void 0:D.source}}};const T=["SliderButton","SliderButtonColors"];export{n as SliderButton,l as SliderButtonColors,T as __namedExportsOrder,O as default};

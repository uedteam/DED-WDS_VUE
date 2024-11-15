import{m as h,u as _,c as w,w as k,a as B,j as o,D as d,n as E,o as m,r as f,g as p,f as x,e as M}from"./vue.esm-bundler-Dy0-1sXb.js";import{_ as j}from"./Slider-CEXAHqLN.js";import{_ as g}from"./Button-DwLOBiy-.js";import{_ as c}from"./Icon-DAePm6-A.js";import"./index-Bb4qSo10.js";import"./iframe-BSJ-Gx0l.js";import"../sb-preview/runtime.js";const t={__name:"SliderControl",props:h({themeColor:{type:String,default:"primary",validator:s=>["primary","secondary","tertiary","success","warning","error","info"].includes(s)},min:{type:Number,default:-100},max:{type:Number,default:100},step:{type:[Number,String],default:1},initValue:{type:Number,default:0},unit:{type:String,default:"%"},prefix:{type:String,default:""},suffix:{type:String,default:""},isDisabled:{type:Boolean,default:!1},className:{type:String,default:""}},{modelValue:{},modelModifiers:{}}),emits:["update:modelValue"],setup(s){const a=_(s,"modelValue"),e=s,i=w({get:()=>a.value!==void 0?a.value:e.initValue!==void 0?e.initValue:e.min,set:r=>{a.value=r}}),N=()=>{i.value=Math.min(i.value+Number(e.step),e.max)},y=()=>{i.value=Math.max(i.value-Number(e.step),e.min)};return k(()=>e.initValue,r=>{(a.value===void 0||a.value===null)&&(i.value=r)}),(r,u)=>(m(),B("div",{class:E({"button-slider":!0,[e.className]:!!e.className})},[o(g,{variant:"text",themeColor:e.themeColor,isDisabled:e.isDisabled,onClick:y},{default:d(()=>[f(r.$slots,"prefix",{},()=>[e.prefix?(m(),p(c,{key:0,name:e.prefix,size:"32"},null,8,["name"])):x("",!0)])]),_:3},8,["themeColor","isDisabled"]),o(j,{themeColor:e.themeColor,min:e.min,max:e.max,step:e.step,unit:e.unit,initValue:e.initValue,isDisabled:e.isDisabled,modelValue:i.value,"onUpdate:modelValue":u[0]||(u[0]=v=>i.value=v)},null,8,["themeColor","min","max","step","unit","initValue","isDisabled","modelValue"]),o(g,{variant:"text",themeColor:e.themeColor,isDisabled:e.isDisabled,onClick:N},{default:d(()=>[f(r.$slots,"suffix",{},()=>[e.suffix?(m(),p(c,{key:0,name:e.suffix,size:"32"},null,8,["name"])):x("",!0)])]),_:3},8,["themeColor","isDisabled"])],2))}};t.__docgenInfo={exportName:"default",displayName:"SliderControl",description:"",tags:{},props:[{name:"themeColor",type:{name:"string"},defaultValue:{func:!1,value:'"primary"'},values:["primary","secondary","tertiary","success","warning","error","info"]},{name:"min",type:{name:"number"},defaultValue:{func:!1,value:"-100"}},{name:"max",type:{name:"number"},defaultValue:{func:!1,value:"100"}},{name:"step",type:{name:"number|string"},defaultValue:{func:!1,value:"1"}},{name:"initValue",type:{name:"number"},defaultValue:{func:!1,value:"0"}},{name:"unit",type:{name:"string"},defaultValue:{func:!1,value:'"%"'}},{name:"prefix",type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"suffix",type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"isDisabled",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"className",type:{name:"string"},defaultValue:{func:!1,value:'""'}}],slots:[{name:"prefix"},{name:"suffix"}],sourceFiles:["D:/98_測試/up/DED-WDS_VUE/libs/src/ui/element/SliderControl/SliderControl.vue"]};const W={title:"Design System/Slider-Control",component:t,tags:["autodocs"],argTypes:{themeColor:{description:"主題顏色",control:{type:"select"},options:["primary","secondary","tertiary","success","warning","error","info"],table:{type:{summary:"primary | secondary | tertiary | success | warning | error | info"}}},min:{description:"最小值",control:{type:"number"}},max:{description:"最大值",control:{type:"number"}},step:{description:"步進值",control:{type:"number"}},initValue:{description:"初始值",control:{type:"number"}},unit:{description:"單位",control:{type:"text"}},prefix:{description:"前置元素",control:{type:"select",labels:{"":"None",increase:"increase",decrease:"decrease"}},options:["","increase","decrease"]},suffix:{description:"後置元素",control:{type:"select",labels:{"":"None",increase:"increase",decrease:"decrease"}},options:["","increase","decrease"]},isDisabled:{description:"是否禁用",control:{type:"boolean"}},className:{description:"客製化樣式",control:{type:"text"}}},parameters:{docs:{title:"SliderControl",description:{component:"Slider組件的呈現及說明。"}}}},n={name:"預設項目",args:{themeColor:"primary",min:-100,max:100,step:1,initValue:0,unit:"℃",prefix:"decrease",suffix:"increase",isDisabled:!1,className:""},render:s=>({components:{SliderControl:t},setup(){const a=M(s.initValue||0);return{args:s,sliderValue:a}},template:`
            <SliderControl
                :themeColor="args.themeColor"
                :min="args.min"
                :max="args.max"
                :step="args.step"
                :initValue="args.initValue"
                :unit="args.unit"
                :prefix="args.prefix"
                :suffix="args.suffix"
                :isDisabled="args.isDisabled"
                :className="args.className"
                v-model="sliderValue"
            ></SliderControl>

            ModelValue: {{sliderValue}}
        `}),parameters:{controls:{},docs:{source:{transform:(s,a)=>{const{args:e}=a;return["<SliderControl",`  themeColor="${e.themeColor}"`,`  :min="${e.min}"`,`  :max="${e.max}"`,`  :step="${e.step}"`,`  :initValue="${e.initValue}"`,`  unit="${e.unit}"`,`  prefix="${e.prefix}"`,`  suffix="${e.suffix}"`,`  :isDisabled="${e.isDisabled}"`,`  className="${e.className}"`,'  v-model="sliderValue"',"></SliderControl>"].join(`
`).trim()}}}}},l={name:"主題色彩",args:{themeColor:"primary",min:-100,max:100,step:1,unit:"℃",prefix:"decrease",suffix:"increase",isDisabled:!1,className:""},render:s=>({components:{SliderControl:t},setup(){return{args:s}},template:`
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
                    :unit="args.unit"
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
                    :unit="args.unit"
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
                    :unit="args.unit"
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
                    :unit="args.unit"
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
                    :unit="args.unit"
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
                    :unit="args.unit"
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
                    :unit="args.unit"
                    :className="args.className"
                    v-model="sliderValue"
                ></SliderControl>
            </div>
        `}),parameters:{controls:{},docs:{source:{transform:(s,a)=>{const{args:e}=a;return["<SliderControl",'  themeColor="primary"',`  :min="${e.min}"`,`  :max="${e.max}"`,`  :step="${e.step}"`,'  :initValue="40"',`  unit="${e.unit}"`,`  prefix="${e.prefix}"`,`  suffix="${e.suffix}"`,`  :isDisabled="${e.isDisabled}"`,`  className="${e.className}"`,'  v-model="sliderValue"',"></SliderControl>","<SliderControl",'  themeColor="secondary"',`  :min="${e.min}"`,`  :max="${e.max}"`,`  :step="${e.step}"`,'  :initValue="50"',`  unit="${e.unit}"`,`  prefix="${e.prefix}"`,`  suffix="${e.suffix}"`,`  :isDisabled="${e.isDisabled}"`,`  className="${e.className}"`,'  v-model="sliderValue"',"></SliderControl>","<SliderControl",'  themeColor="tertiary"',`  :min="${e.min}"`,`  :max="${e.max}"`,`  :step="${e.step}"`,'  :initValue="60"',`  unit="${e.unit}"`,`  prefix="${e.prefix}"`,`  suffix="${e.suffix}"`,`  :isDisabled="${e.isDisabled}"`,`  className="${e.className}"`,'  v-model="sliderValue"',"></SliderControl>","<SliderControl",'  themeColor="success"',`  :min="${e.min}"`,`  :max="${e.max}"`,`  :step="${e.step}"`,'  :initValue="70"',`  unit="${e.unit}"`,`  prefix="${e.prefix}"`,`  suffix="${e.suffix}"`,`  :isDisabled="${e.isDisabled}"`,`  className="${e.className}"`,'  v-model="sliderValue"',"></SliderControl>","<SliderControl",'  themeColor="warning"',`  :min="${e.min}"`,`  :max="${e.max}"`,`  :step="${e.step}"`,'  :initValue="80"',`  unit="${e.unit}"`,`  prefix="${e.prefix}"`,`  suffix="${e.suffix}"`,`  :isDisabled="${e.isDisabled}"`,`  className="${e.className}"`,'  v-model="sliderValue"',"></SliderControl>","<SliderControl",'  themeColor="error"',`  :min="${e.min}"`,`  :max="${e.max}"`,`  :step="${e.step}"`,'  :initValue="90"',`  unit="${e.unit}"`,`  prefix="${e.prefix}"`,`  suffix="${e.suffix}"`,`  :isDisabled="${e.isDisabled}"`,`  className="${e.className}"`,'  v-model="sliderValue"',"></SliderControl>","<SliderControl",'  themeColor="info"',`  :min="${e.min}"`,`  :max="${e.max}"`,`  :step="${e.step}"`,'  :initValue="100"',`  unit="${e.unit}"`,`  prefix="${e.prefix}"`,`  suffix="${e.suffix}"`,`  :isDisabled="${e.isDisabled}"`,`  className="${e.className}"`,'  v-model="sliderValue"',"></SliderControl>"].join(`
`).trim()}}}}};var C,$,V;n.parameters={...n.parameters,docs:{...(C=n.parameters)==null?void 0:C.docs,source:{originalSource:`{
  name: "預設項目",
  args: {
    themeColor: "primary",
    min: -100,
    max: 100,
    step: 1,
    initValue: 0,
    unit: "℃",
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
                :unit="args.unit"
                :prefix="args.prefix"
                :suffix="args.suffix"
                :isDisabled="args.isDisabled"
                :className="args.className"
                v-model="sliderValue"
            ></SliderControl>

            ModelValue: {{sliderValue}}
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
          return ['<SliderControl', \`  themeColor="\${args.themeColor}"\`, \`  :min="\${args.min}"\`, \`  :max="\${args.max}"\`, \`  :step="\${args.step}"\`, \`  :initValue="\${args.initValue}"\`, \`  unit="\${args.unit}"\`, \`  prefix="\${args.prefix}"\`, \`  suffix="\${args.suffix}"\`, \`  :isDisabled="\${args.isDisabled}"\`, \`  className="\${args.className}"\`, \`  v-model="sliderValue"\`, '></SliderControl>'].join('\\n').trim();
        }
      }
    }
  }
}`,...(V=($=n.parameters)==null?void 0:$.docs)==null?void 0:V.source}}};var b,S,D;l.parameters={...l.parameters,docs:{...(b=l.parameters)==null?void 0:b.docs,source:{originalSource:'{\n  name: "主題色彩",\n  args: {\n    themeColor: "primary",\n    min: -100,\n    max: 100,\n    step: 1,\n    unit: "℃",\n    prefix: "decrease",\n    suffix: "increase",\n    isDisabled: false,\n    className: \'\'\n  },\n  render: args => ({\n    components: {\n      SliderControl\n    },\n    setup() {\n      return {\n        args\n      };\n    },\n    template: `\n            <div style="display:flex; flex-direction: column;">\n                <SliderControl\n                    themeColor="primary"\n                    :prefix="args.prefix"\n                    :suffix="args.suffix"\n                    :isDisabled="args.isDisabled"\n                    :min="args.min"\n                    :max="args.max"\n                    :step="args.step"\n                    :initValue="40"\n                    :unit="args.unit"\n                    :className="args.className"\n                    v-model="sliderValue"\n                ></SliderControl>\n                <SliderControl\n                    themeColor="secondary"\n                    :prefix="args.prefix"\n                    :suffix="args.suffix"\n                    :isDisabled="args.isDisabled"\n                    :min="args.min"\n                    :max="args.max"\n                    :step="args.step"\n                    :initValue="50"\n                    :unit="args.unit"\n                    :className="args.className"\n                    v-model="sliderValue"\n                ></SliderControl>\n                <SliderControl\n                    themeColor="tertiary"\n                    :prefix="args.prefix"\n                    :suffix="args.suffix"\n                    :isDisabled="args.isDisabled"\n                    :min="args.min"\n                    :max="args.max"\n                    :step="args.step"\n                    :initValue="60"\n                    :unit="args.unit"\n                    :className="args.className"\n                    v-model="sliderValue"\n                ></SliderControl>\n                <SliderControl\n                    themeColor="success"\n                    :prefix="args.prefix"\n                    :suffix="args.suffix"\n                    :isDisabled="args.isDisabled"\n                    :min="args.min"\n                    :max="args.max"\n                    :step="args.step"\n                    :initValue="70"\n                    :unit="args.unit"\n                    :className="args.className"\n                    v-model="sliderValue"\n                ></SliderControl>\n                <SliderControl\n                    themeColor="warning"\n                    :prefix="args.prefix"\n                    :suffix="args.suffix"\n                    :isDisabled="args.isDisabled"\n                    :min="args.min"\n                    :max="args.max"\n                    :step="args.step"\n                    :initValue="80"\n                    :unit="args.unit"\n                    :className="args.className"\n                    v-model="sliderValue"\n                ></SliderControl>\n                <SliderControl\n                    themeColor="error"\n                    :prefix="args.prefix"\n                    :suffix="args.suffix"\n                    :isDisabled="args.isDisabled"\n                    :min="args.min"\n                    :max="args.max"\n                    :step="args.step"\n                    :initValue="90"\n                    :unit="args.unit"\n                    :className="args.className"\n                    v-model="sliderValue"\n                ></SliderControl>\n                <SliderControl\n                    themeColor="info"\n                    :prefix="args.prefix"\n                    :suffix="args.suffix"\n                    :isDisabled="args.isDisabled"\n                    :min="args.min"\n                    :max="args.max"\n                    :step="args.step"\n                    :initValue="100"\n                    :unit="args.unit"\n                    :className="args.className"\n                    v-model="sliderValue"\n                ></SliderControl>\n            </div>\n        `\n  }),\n  // 控制 controls 中能控制的參數\n  parameters: {\n    controls: {\n      // include: [\'themeColor\', \'label\', \'value\', \'name\' ],\n      // exclude:[\'range\']\n    },\n    docs: {\n      source: {\n        transform: (src, storyContext) => {\n          const {\n            args\n          } = storyContext;\n          return [\'<SliderControl\', `  themeColor="primary"`, `  :min="${args.min}"`, `  :max="${args.max}"`, `  :step="${args.step}"`, `  :initValue="40"`, `  unit="${args.unit}"`, `  prefix="${args.prefix}"`, `  suffix="${args.suffix}"`, `  :isDisabled="${args.isDisabled}"`, `  className="${args.className}"`, `  v-model="sliderValue"`, \'></SliderControl>\', \'<SliderControl\', `  themeColor="secondary"`, `  :min="${args.min}"`, `  :max="${args.max}"`, `  :step="${args.step}"`, `  :initValue="50"`, `  unit="${args.unit}"`, `  prefix="${args.prefix}"`, `  suffix="${args.suffix}"`, `  :isDisabled="${args.isDisabled}"`, `  className="${args.className}"`, `  v-model="sliderValue"`, \'></SliderControl>\', \'<SliderControl\', `  themeColor="tertiary"`, `  :min="${args.min}"`, `  :max="${args.max}"`, `  :step="${args.step}"`, `  :initValue="60"`, `  unit="${args.unit}"`, `  prefix="${args.prefix}"`, `  suffix="${args.suffix}"`, `  :isDisabled="${args.isDisabled}"`, `  className="${args.className}"`, `  v-model="sliderValue"`, \'></SliderControl>\', \'<SliderControl\', `  themeColor="success"`, `  :min="${args.min}"`, `  :max="${args.max}"`, `  :step="${args.step}"`, `  :initValue="70"`, `  unit="${args.unit}"`, `  prefix="${args.prefix}"`, `  suffix="${args.suffix}"`, `  :isDisabled="${args.isDisabled}"`, `  className="${args.className}"`, `  v-model="sliderValue"`, \'></SliderControl>\', \'<SliderControl\', `  themeColor="warning"`, `  :min="${args.min}"`, `  :max="${args.max}"`, `  :step="${args.step}"`, `  :initValue="80"`, `  unit="${args.unit}"`, `  prefix="${args.prefix}"`, `  suffix="${args.suffix}"`, `  :isDisabled="${args.isDisabled}"`, `  className="${args.className}"`, `  v-model="sliderValue"`, \'></SliderControl>\', \'<SliderControl\', `  themeColor="error"`, `  :min="${args.min}"`, `  :max="${args.max}"`, `  :step="${args.step}"`, `  :initValue="90"`, `  unit="${args.unit}"`, `  prefix="${args.prefix}"`, `  suffix="${args.suffix}"`, `  :isDisabled="${args.isDisabled}"`, `  className="${args.className}"`, `  v-model="sliderValue"`, \'></SliderControl>\', \'<SliderControl\', `  themeColor="info"`, `  :min="${args.min}"`, `  :max="${args.max}"`, `  :step="${args.step}"`, `  :initValue="100"`, `  unit="${args.unit}"`, `  prefix="${args.prefix}"`, `  suffix="${args.suffix}"`, `  :isDisabled="${args.isDisabled}"`, `  className="${args.className}"`, `  v-model="sliderValue"`, \'></SliderControl>\'].join(\'\\n\').trim();\n        }\n      }\n    }\n  }\n}',...(D=(S=l.parameters)==null?void 0:S.docs)==null?void 0:D.source}}};const q=["SliderButton","SliderButtonColors"];export{n as SliderButton,l as SliderButtonColors,q as __namedExportsOrder,W as default};

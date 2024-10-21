import{m as N,u as _,f as k,w as E,c as M,C as u,I as d,n as w,o,g as f,d as p,e as g,r as v}from"./vue.esm-bundler-qOdkfnRX.js";import{_ as $}from"./Slider-V1H0dsBL.js";import{_ as x}from"./Button-DCYVt1D2.js";import{_ as c}from"./Icon-BMJK1EcF.js";import"./index-Bb4qSo10.js";import"./iframe-BLuqiaLB.js";import"../sb-preview/runtime.js";const l={__name:"SliderWithButton",props:N({themeColor:{type:String,default:"primary",validator:i=>["primary","secondary","tertiary","success","warning","error","info"].includes(i)},prefix:{type:String,default:""},suffix:{type:String,default:""},min:{type:Number,default:-100},max:{type:Number,default:100},step:{type:[Number,String],default:1},initValue:{type:Number,default:27},unit:{type:String,default:"%"},isDisabled:{type:Boolean,default:!1},className:{type:String,default:""}},{modelValue:{},modelModifiers:{}}),emits:["update:modelValue"],setup(i){const s=_(i,"modelValue"),e=i,a=k({get:()=>s.value??e.initValue??e.min,set:n=>{s.value=n}}),C=()=>{a.value=Math.min(a.value+Number(e.step),e.max)},W=()=>{a.value=Math.max(a.value-Number(e.step),e.min)};return E(()=>e.initValue,n=>{s.value===void 0&&(a.value=n)}),(n,m)=>(o(),M("div",{class:w({"button-slider":!0,[e.className]:!!s.value.value})},[u(x,{variant:"text",themeColor:e.themeColor,isDisabled:e.isDisabled,onClick:W},{default:d(()=>[f(n.$slots,"prefix",{},()=>[e.prefix?(o(),p(c,{key:0,name:e.prefix,size:"32"},null,8,["name"])):g("",!0)])]),_:3},8,["themeColor","isDisabled"]),u($,{themeColor:e.themeColor,min:e.min,max:e.max,unit:e.unit,step:e.step,isDisabled:e.isDisabled,initValue:e.initValue,modelValue:a.value,"onUpdate:modelValue":m[0]||(m[0]=S=>a.value=S)},null,8,["themeColor","min","max","unit","step","isDisabled","initValue","modelValue"]),u(x,{variant:"text",themeColor:e.themeColor,isDisabled:e.isDisabled,onClick:C},{default:d(()=>[f(n.$slots,"suffix",{},()=>[e.suffix?(o(),p(c,{key:0,name:e.suffix,size:"32"},null,8,["name"])):g("",!0)])]),_:3},8,["themeColor","isDisabled"])],2))}};l.__docgenInfo={exportName:"default",displayName:"SliderWithButton",description:"",tags:{},props:[{name:"themeColor",type:{name:"string"},defaultValue:{func:!1,value:"'primary'"},values:["primary","secondary","tertiary","success","warning","error","info"]},{name:"prefix",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"suffix",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"min",type:{name:"number"},defaultValue:{func:!1,value:"-100"}},{name:"max",type:{name:"number"},defaultValue:{func:!1,value:"100"}},{name:"step",type:{name:"number|string"},defaultValue:{func:!1,value:"1"}},{name:"initValue",type:{name:"number"},defaultValue:{func:!1,value:"27"}},{name:"unit",type:{name:"string"},defaultValue:{func:!1,value:"'%'"}},{name:"isDisabled",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"className",type:{name:"string"},defaultValue:{func:!1,value:"''"}}],slots:[{name:"prefix"},{name:"suffix"}],sourceFiles:["/Users/auouser/Desktop/Work_Space/DED-WDS_VUE/libs/src/ui/element/SliderWithButton/SliderWithButton.vue"]};const j={title:"Design System/SliderWithButton",component:l,tags:["autodocs"],argTypes:{themeColor:{description:"主題顏色",control:{type:"select"},options:["primary","secondary","tertiary","success","warning","error","info"]},prefix:{description:"前置元素",control:{type:"select"},options:["None","increase","decrease"],mapping:{None:""}},suffix:{description:"後置元素",control:{type:"select"},options:["None","increase","decrease"],mapping:{None:""}},min:{description:"最小值",control:{type:"number"}},max:{description:"最大值",control:{type:"number"}},step:{description:"步進值",control:{type:"number"}},initValue:{description:"初始值",control:{type:"number"}},unit:{description:"單位",control:{type:"text"}},isDisabled:{description:"是否禁用",control:{type:"boolean"}},className:{description:"客製化樣式",control:{type:"text"}}},parameters:{docs:{title:"Slider",description:{component:"Slider組件的呈現及說明。"}}}},r={name:"主要項目",args:{themeColor:"primary",min:-100,max:100,step:1,initValue:19,unit:"℃",isDisabled:!1,prefix:"decrease",suffix:"increase",className:""},render:i=>({components:{SliderWithButton:l},setup(){const s=v(-10);return{args:i,sliderValue:s}},template:`
            <sliderWithButton
                :themeColor="args.themeColor"
                :min="args.min"
                :max="args.max"
                :step="args.step"
                :initValue="args.initValue"
                :unit="args.unit"
                :isDisabled="args.isDisabled"
                :prefix="args.prefix"
                :suffix="args.suffix"
                v-model="sliderValue"
                :className="sliderValue"
            ></sliderWithButton>

            ModelValue: {{sliderValue}}
        `}),parameters:{controls:{}}},t={name:"主題色按鈕滑桿",args:{themeColor:"primary",min:-100,max:100,step:1,initValue:19,unit:"℃",isDisabled:!1,prefix:"decrease",suffix:"increase"},render:i=>({components:{SliderWithButton:l},setup(){const s=v(-10);return{args:i,sliderValue:s}},template:`

            <div style="display:flex; flex-direction: column;">
                <sliderWithButton
                    themeColor="primary"
                    :min="args.min"
                    :max="args.max"
                    :step="args.step"
                    :initValue="args.initValue"
                    :unit="args.unit"
                    :isDisabled="args.isDisabled"
                    :prefix="args.prefix"
                    :suffix="args.suffix"
                    v-model="sliderValue"
                ></sliderWithButton>
                <sliderWithButton
                    themeColor="secondary"
                    :min="args.min"
                    :max="args.max"
                    :step="args.step"
                    :initValue="args.initValue"
                    :unit="args.unit"
                    :isDisabled="args.isDisabled"
                    :prefix="args.prefix"
                    :suffix="args.suffix"
                    v-model="sliderValue"
                ></sliderWithButton>
                <sliderWithButton
                    themeColor="tertiary"
                    :min="args.min"
                    :max="args.max"
                    :step="args.step"
                    :initValue="args.initValue"
                    :unit="args.unit"
                    :isDisabled="args.isDisabled"
                    :prefix="args.prefix"
                    :suffix="args.suffix"
                    v-model="sliderValue"
                ></sliderWithButton>
                <sliderWithButton
                    themeColor="success"
                    :min="args.min"
                    :max="args.max"
                    :step="args.step"
                    :initValue="args.initValue"
                    :unit="args.unit"
                    :isDisabled="args.isDisabled"
                    :prefix="args.prefix"
                    :suffix="args.suffix"
                    v-model="sliderValue"
                ></sliderWithButton>
                <sliderWithButton
                    themeColor="warning"
                    :min="args.min"
                    :max="args.max"
                    :step="args.step"
                    :initValue="args.initValue"
                    :unit="args.unit"
                    :isDisabled="args.isDisabled"
                    :prefix="args.prefix"
                    :suffix="args.suffix"
                    v-model="sliderValue"
                ></sliderWithButton>
                <sliderWithButton
                    themeColor="error"
                    :min="args.min"
                    :max="args.max"
                    :step="args.step"
                    :initValue="args.initValue"
                    :unit="args.unit"
                    :isDisabled="args.isDisabled"
                    :prefix="args.prefix"
                    :suffix="args.suffix"
                    v-model="sliderValue"
                ></sliderWithButton>
                <sliderWithButton
                    themeColor="info"
                    :min="args.min"
                    :max="args.max"
                    :step="args.step"
                    :initValue="args.initValue"
                    :unit="args.unit"
                    :isDisabled="args.isDisabled"
                    :prefix="args.prefix"
                    :suffix="args.suffix"
                    v-model="sliderValue"
                ></sliderWithButton>
            </div>
            

            ModelValue: {{sliderValue}}
        `}),parameters:{controls:{}}};var V,h,b;r.parameters={...r.parameters,docs:{...(V=r.parameters)==null?void 0:V.docs,source:{originalSource:`{
  name: "主要項目",
  args: {
    themeColor: "primary",
    min: -100,
    max: 100,
    step: 1,
    initValue: 19,
    unit: "℃",
    isDisabled: false,
    prefix: "decrease",
    suffix: "increase",
    className: ''
  },
  render: args => ({
    components: {
      SliderWithButton
    },
    setup() {
      const sliderValue = ref(-10);
      return {
        args,
        sliderValue
      };
    },
    template: \`
            <sliderWithButton
                :themeColor="args.themeColor"
                :min="args.min"
                :max="args.max"
                :step="args.step"
                :initValue="args.initValue"
                :unit="args.unit"
                :isDisabled="args.isDisabled"
                :prefix="args.prefix"
                :suffix="args.suffix"
                v-model="sliderValue"
                :className="sliderValue"
            ></sliderWithButton>

            ModelValue: {{sliderValue}}
        \`
  }),
  // 控制 controls 中能控制的參數
  parameters: {
    controls: {
      // include: ['themeColor', 'label', 'value', 'name' ],
      // exclude:['range']
    }
  }
}`,...(b=(h=r.parameters)==null?void 0:h.docs)==null?void 0:b.source}}};var y,D,B;t.parameters={...t.parameters,docs:{...(y=t.parameters)==null?void 0:y.docs,source:{originalSource:`{
  name: "主題色按鈕滑桿",
  args: {
    themeColor: "primary",
    min: -100,
    max: 100,
    step: 1,
    initValue: 19,
    unit: "℃",
    isDisabled: false,
    prefix: "decrease",
    suffix: "increase"
  },
  render: args => ({
    components: {
      SliderWithButton
    },
    setup() {
      const sliderValue = ref(-10);
      return {
        args,
        sliderValue
      };
    },
    template: \`

            <div style="display:flex; flex-direction: column;">
                <sliderWithButton
                    themeColor="primary"
                    :min="args.min"
                    :max="args.max"
                    :step="args.step"
                    :initValue="args.initValue"
                    :unit="args.unit"
                    :isDisabled="args.isDisabled"
                    :prefix="args.prefix"
                    :suffix="args.suffix"
                    v-model="sliderValue"
                ></sliderWithButton>
                <sliderWithButton
                    themeColor="secondary"
                    :min="args.min"
                    :max="args.max"
                    :step="args.step"
                    :initValue="args.initValue"
                    :unit="args.unit"
                    :isDisabled="args.isDisabled"
                    :prefix="args.prefix"
                    :suffix="args.suffix"
                    v-model="sliderValue"
                ></sliderWithButton>
                <sliderWithButton
                    themeColor="tertiary"
                    :min="args.min"
                    :max="args.max"
                    :step="args.step"
                    :initValue="args.initValue"
                    :unit="args.unit"
                    :isDisabled="args.isDisabled"
                    :prefix="args.prefix"
                    :suffix="args.suffix"
                    v-model="sliderValue"
                ></sliderWithButton>
                <sliderWithButton
                    themeColor="success"
                    :min="args.min"
                    :max="args.max"
                    :step="args.step"
                    :initValue="args.initValue"
                    :unit="args.unit"
                    :isDisabled="args.isDisabled"
                    :prefix="args.prefix"
                    :suffix="args.suffix"
                    v-model="sliderValue"
                ></sliderWithButton>
                <sliderWithButton
                    themeColor="warning"
                    :min="args.min"
                    :max="args.max"
                    :step="args.step"
                    :initValue="args.initValue"
                    :unit="args.unit"
                    :isDisabled="args.isDisabled"
                    :prefix="args.prefix"
                    :suffix="args.suffix"
                    v-model="sliderValue"
                ></sliderWithButton>
                <sliderWithButton
                    themeColor="error"
                    :min="args.min"
                    :max="args.max"
                    :step="args.step"
                    :initValue="args.initValue"
                    :unit="args.unit"
                    :isDisabled="args.isDisabled"
                    :prefix="args.prefix"
                    :suffix="args.suffix"
                    v-model="sliderValue"
                ></sliderWithButton>
                <sliderWithButton
                    themeColor="info"
                    :min="args.min"
                    :max="args.max"
                    :step="args.step"
                    :initValue="args.initValue"
                    :unit="args.unit"
                    :isDisabled="args.isDisabled"
                    :prefix="args.prefix"
                    :suffix="args.suffix"
                    v-model="sliderValue"
                ></sliderWithButton>
            </div>
            

            ModelValue: {{sliderValue}}
        \`
  }),
  // 控制 controls 中能控制的參數
  parameters: {
    controls: {
      // include: ['themeColor', 'label', 'value', 'name' ],
      // exclude:['range']
    }
  }
}`,...(B=(D=t.parameters)==null?void 0:D.docs)==null?void 0:B.source}}};const q=["SliderButton","SliderButtonColors"];export{r as SliderButton,t as SliderButtonColors,q as __namedExportsOrder,j as default};

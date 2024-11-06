import{m as k,u as B,f as E,w as M,c as w,l as o,G as d,n as A,o as u,g as f,d as p,e as g,r as v}from"./vue.esm-bundler-XWim8Fx5.js";import{_ as $}from"./Slider-3zPbm_FB.js";import{_ as x}from"./Button-Dw97jLeg.js";import{_ as c}from"./Icon-DD-8nGjT.js";import"./index-Bb4qSo10.js";import"./iframe-BZBeCght.js";import"../sb-preview/runtime.js";const t={__name:"SliderControl",props:k({themeColor:{type:String,default:"primary",validator:a=>["primary","secondary","tertiary","success","warning","error","info"].includes(a)},prefix:{type:String,default:""},suffix:{type:String,default:""},min:{type:Number,default:-100},max:{type:Number,default:100},step:{type:[Number,String],default:1},initValue:{type:Number,default:27},unit:{type:String,default:"%"},isDisabled:{type:Boolean,default:!1},className:{type:String,default:""}},{modelValue:{},modelModifiers:{}}),emits:["update:modelValue"],setup(a){const r=B(a,"modelValue"),e=a,i=E({get:()=>r.value??e.initValue??e.min,set:s=>{r.value=s}}),h=()=>{i.value=Math.min(i.value+Number(e.step),e.max)},N=()=>{i.value=Math.max(i.value-Number(e.step),e.min)};return M(()=>e.initValue,s=>{r.value===void 0&&(i.value=s)}),(s,m)=>(u(),w("div",{class:A({"button-slider":!0,[e.className]:!!r.value.value})},[o(x,{variant:"text",themeColor:e.themeColor,isDisabled:e.isDisabled,onClick:N},{default:d(()=>[f(s.$slots,"prefix",{},()=>[e.prefix?(u(),p(c,{key:0,name:e.prefix,size:"32"},null,8,["name"])):g("",!0)])]),_:3},8,["themeColor","isDisabled"]),o($,{themeColor:e.themeColor,min:e.min,max:e.max,unit:e.unit,step:e.step,isDisabled:e.isDisabled,initValue:e.initValue,modelValue:i.value,"onUpdate:modelValue":m[0]||(m[0]=_=>i.value=_)},null,8,["themeColor","min","max","unit","step","isDisabled","initValue","modelValue"]),o(x,{variant:"text",themeColor:e.themeColor,isDisabled:e.isDisabled,onClick:h},{default:d(()=>[f(s.$slots,"suffix",{},()=>[e.suffix?(u(),p(c,{key:0,name:e.suffix,size:"32"},null,8,["name"])):g("",!0)])]),_:3},8,["themeColor","isDisabled"])],2))}};t.__docgenInfo={exportName:"default",displayName:"SliderControl",description:"",tags:{},props:[{name:"themeColor",type:{name:"string"},defaultValue:{func:!1,value:"'primary'"},values:["primary","secondary","tertiary","success","warning","error","info"]},{name:"prefix",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"suffix",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"min",type:{name:"number"},defaultValue:{func:!1,value:"-100"}},{name:"max",type:{name:"number"},defaultValue:{func:!1,value:"100"}},{name:"step",type:{name:"number|string"},defaultValue:{func:!1,value:"1"}},{name:"initValue",type:{name:"number"},defaultValue:{func:!1,value:"27"}},{name:"unit",type:{name:"string"},defaultValue:{func:!1,value:"'%'"}},{name:"isDisabled",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"className",type:{name:"string"},defaultValue:{func:!1,value:"''"}}],slots:[{name:"prefix"},{name:"suffix"}],sourceFiles:["/Users/auouser/Desktop/Work_Space/DED-WDS_VUE/libs/src/ui/element/SliderWithButton/SliderControl.vue"]};const T={title:"Design System/Slider-Control",component:t,tags:["autodocs"],argTypes:{themeColor:{description:"主題顏色",control:{type:"select"},options:["primary","secondary","tertiary","success","warning","error","info"]},prefix:{description:"前置元素",control:{type:"select"},options:["None","increase","decrease"],mapping:{None:""}},suffix:{description:"後置元素",control:{type:"select"},options:["None","increase","decrease"],mapping:{None:""}},min:{description:"最小值",control:{type:"number"}},max:{description:"最大值",control:{type:"number"}},step:{description:"步進值",control:{type:"number"}},initValue:{description:"初始值",control:{type:"number"}},unit:{description:"單位",control:{type:"text"}},isDisabled:{description:"是否禁用",control:{type:"boolean"}},className:{description:"客製化樣式",control:{type:"text"}}},parameters:{docs:{title:"SliderControl",description:{component:"Slider組件的呈現及說明。"}}}},n={name:"預設項目",args:{themeColor:"primary",min:-100,max:100,step:1,initValue:19,unit:"℃",isDisabled:!1,prefix:"decrease",suffix:"increase",className:""},render:a=>({components:{SliderControl:t},setup(){const r=v(-10);return{args:a,sliderValue:r}},template:`
            <SliderControl
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
            ></SliderControl>

            ModelValue: {{sliderValue}}
        `}),parameters:{controls:{}}},l={name:"主題色彩",args:{themeColor:"primary",min:-100,max:100,step:1,initValue:19,unit:"℃",isDisabled:!1,prefix:"decrease",suffix:"increase"},render:a=>({components:{SliderControl:t},setup(){const r=v(-10);return{args:a,sliderValue:r}},template:`

            <div style="display:flex; flex-direction: column;">
                <SliderControl
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
                ></SliderControl>
                <SliderControl
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
                ></SliderControl>
                <SliderControl
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
                ></SliderControl>
                <SliderControl
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
                ></SliderControl>
                <SliderControl
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
                ></SliderControl>
                <SliderControl
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
                ></SliderControl>
                <SliderControl
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
                ></SliderControl>
            </div>
            

            ModelValue: {{sliderValue}}
        `}),parameters:{controls:{}}};var V,C,b;n.parameters={...n.parameters,docs:{...(V=n.parameters)==null?void 0:V.docs,source:{originalSource:`{
  name: "預設項目",
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
      SliderControl
    },
    setup() {
      const sliderValue = ref(-10);
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
                :isDisabled="args.isDisabled"
                :prefix="args.prefix"
                :suffix="args.suffix"
                v-model="sliderValue"
                :className="sliderValue"
            ></SliderControl>

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
}`,...(b=(C=n.parameters)==null?void 0:C.docs)==null?void 0:b.source}}};var y,S,D;l.parameters={...l.parameters,docs:{...(y=l.parameters)==null?void 0:y.docs,source:{originalSource:`{
  name: "主題色彩",
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
      SliderControl
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
                <SliderControl
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
                ></SliderControl>
                <SliderControl
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
                ></SliderControl>
                <SliderControl
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
                ></SliderControl>
                <SliderControl
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
                ></SliderControl>
                <SliderControl
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
                ></SliderControl>
                <SliderControl
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
                ></SliderControl>
                <SliderControl
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
                ></SliderControl>
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
}`,...(D=(S=l.parameters)==null?void 0:S.docs)==null?void 0:D.source}}};const j=["SliderButton","SliderButtonColors"];export{n as SliderButton,l as SliderButtonColors,j as __namedExportsOrder,T as default};

import{m as v,u as D,c as N,w as $,a as _,b as i,D as m,n as h,o as t,r as d,C as c,d as f,f as k}from"./vue.esm-bundler-D-gFHCZh.js";import{_ as B}from"./Slider-Bzt4uA0L.js";import{_ as p}from"./Button-00exNB20.js";import{_ as x}from"./Icon-BhqjPbyE.js";import"./iframe-Bd5YQskO.js";import"../sb-preview/runtime.js";const o={__name:"SliderControl",props:v({min:{type:Number,default:0},max:{type:Number,default:100},step:{type:Number,default:1},initValue:{type:Number,required:!0,default:0},label:{type:String,default:""},prefix:{type:String,default:""},suffix:{type:String,default:""},isDisabled:{type:Boolean,default:!1},className:{type:String,default:""}},{modelValue:{},modelModifiers:{}}),emits:["update:modelValue"],setup(l){const a=D(l,"modelValue"),e=l,s=N({get:()=>a.value!==void 0?a.value:e.initValue!==void 0?e.initValue:e.min,set:n=>{a.value=n}}),y=()=>{s.value=Math.min(s.value+Number(e.step),e.max)},C=()=>{s.value=Math.max(s.value-Number(e.step),e.min)};return $(()=>e.initValue,n=>{(a.value===void 0||a.value===null)&&(s.value=n)}),(n,u)=>(t(),_("div",{class:h({"ded-slider-control":!0,[e.className]:!!e.className})},[i(p,{variant:"text",themeColor:"primary",isDisabled:e.isDisabled,onClick:C},{default:m(()=>[d(n.$slots,"prefix",{},()=>[e.prefix?(t(),c(x,{key:0,name:e.prefix,size:"32"},null,8,["name"])):f("",!0)])]),_:3},8,["isDisabled"]),i(B,{themeColor:e.themeColor,min:e.min,max:e.max,step:e.step,label:e.label,isShowRange:!1,isShowCurrValue:!0,initValue:e.initValue,isDisabled:e.isDisabled,modelValue:s.value,"onUpdate:modelValue":u[0]||(u[0]=S=>s.value=S)},null,8,["themeColor","min","max","step","label","initValue","isDisabled","modelValue"]),i(p,{variant:"text",themeColor:"primary",isDisabled:e.isDisabled,onClick:y},{default:m(()=>[d(n.$slots,"suffix",{},()=>[e.suffix?(t(),c(x,{key:0,name:e.suffix,size:"32"},null,8,["name"])):f("",!0)])]),_:3},8,["isDisabled"])],2))}};o.__docgenInfo={exportName:"default",displayName:"SliderControl",description:"",tags:{},props:[{name:"min",type:{name:"number"},defaultValue:{func:!1,value:"0"}},{name:"max",type:{name:"number"},defaultValue:{func:!1,value:"100"}},{name:"step",type:{name:"number"},defaultValue:{func:!1,value:"1"}},{name:"initValue",type:{name:"number"},required:!0,defaultValue:{func:!1,value:"0"}},{name:"label",type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"prefix",type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"suffix",type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"isDisabled",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"className",type:{name:"string"},defaultValue:{func:!1,value:'""'}}],slots:[{name:"prefix"},{name:"suffix"}],sourceFiles:["/Users/auouser/Desktop/Work_Space/DED-WDS_VUE/libs/src/ui/element/SliderControl/SliderControl.vue"]};const q={title:"Component/Slider-Control",component:o,tags:["autodocs"],argTypes:{min:{description:"最小值",control:{type:"number"}},max:{description:"最大值",control:{type:"number"}},step:{description:"步進值",control:{type:"number"}},initValue:{description:"初始值",control:{type:"number"}},label:{description:"單位",control:{type:"text"}},prefix:{description:"前置元素",control:{type:"select",labels:{"":"None",increase:"increase",decrease:"decrease"}},options:["","increase","decrease"]},suffix:{description:"後置元素",control:{type:"select",labels:{"":"None",increase:"increase",decrease:"decrease"}},options:["","increase","decrease"]},isDisabled:{description:"是否禁用",control:{type:"boolean"}},className:{description:"客製化樣式",control:{type:"text"}}},parameters:{docs:{title:"SliderControl",description:{component:"Slider組件的呈現及說明。"}}}},r={name:"預設項目",args:{min:-100,max:100,step:1,initValue:0,label:"℃",prefix:"decrease",suffix:"increase",isDisabled:!1,className:""},render:l=>({components:{SliderControl:o},setup(){const a=k(l.initValue||0);return{args:l,sliderValue:a}},template:`
            <SliderControl
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
        `}),parameters:{controls:{},docs:{source:{transform:(l,a)=>{const{args:e}=a;return["<SliderControl",`  :min="${e.min}"`,`  :max="${e.max}"`,`  :step="${e.step}"`,`  :initValue="${e.initValue}"`,`  label="${e.label}"`,`  prefix="${e.prefix}"`,`  suffix="${e.suffix}"`,`  :isDisabled="${e.isDisabled}"`,`  className="${e.className}"`,'  v-model="sliderValue"',"></SliderControl>"].join(`
`).trim()}}}}};var b,g,V;r.parameters={...r.parameters,docs:{...(b=r.parameters)==null?void 0:b.docs,source:{originalSource:`{
  name: "預設項目",
  args: {
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
          return ['<SliderControl', \`  :min="\${args.min}"\`, \`  :max="\${args.max}"\`, \`  :step="\${args.step}"\`, \`  :initValue="\${args.initValue}"\`, \`  label="\${args.label}"\`, \`  prefix="\${args.prefix}"\`, \`  suffix="\${args.suffix}"\`, \`  :isDisabled="\${args.isDisabled}"\`, \`  className="\${args.className}"\`, \`  v-model="sliderValue"\`, '></SliderControl>'].join('\\n').trim();
        }
      }
    }
  }
}`,...(V=(g=r.parameters)==null?void 0:g.docs)==null?void 0:V.source}}};const I=["SliderButton"];export{r as SliderButton,I as __namedExportsOrder,q as default};

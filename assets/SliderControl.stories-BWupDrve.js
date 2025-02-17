import{m as h,u as $,g as t,c as _,b as o,d,n as k,o as i,r as c,j as p,e as f}from"./vue.esm-bundler-qCK_iSPY.js";import{_ as w}from"./Slider-D7UN6fzl.js";import{_ as x}from"./Button-BBJUKVar.js";import{_ as g}from"./Icon-Dr0uxKWp.js";import"./iframe-Dp5wB7_x.js";import"../sb-preview/runtime.js";const m={__name:"SliderControl",props:h({themeColor:{type:String,default:"primary",validator:a=>["primary","secondary","neutral","info","success","warning","error"].includes(a)},min:{type:Number,default:0},max:{type:Number,default:100},step:{type:Number,default:1},label:{type:String,default:""},prefix:{type:String,default:""},suffix:{type:String,default:""},isDisabled:{type:Boolean,default:!1},className:{type:String,default:""}},{modelValue:{},modelModifiers:{}}),emits:["update:modelValue"],setup(a){const r=$(a,"modelValue"),e=a,s=t({get:()=>r.value??e.min,set:l=>{r.value=l}}),v=()=>{s.value=Math.min(s.value+Number(e.step),e.max)},S=()=>{s.value=Math.max(s.value-Number(e.step),e.min)},D=t(()=>e.prefix==="increase"?"SvgPlus":e.prefix==="decrease"?"SvgMinus":""),V=t(()=>e.suffix==="increase"?"SvgPlus":e.suffix==="decrease"?"SvgMinus":"");return(l,u)=>(i(),_("div",{class:k({"ded-slider-control":!0,[e.className]:!!e.className})},[o(x,{variant:"text",themeColor:e.themeColor,isDisabled:e.isDisabled,onClick:S},{default:d(()=>[c(l.$slots,"prefix",{},()=>[e.prefix?(i(),p(g,{key:0,name:D.value,size:"32"},null,8,["name"])):f("",!0)])]),_:3},8,["themeColor","isDisabled"]),o(w,{themeColor:e.themeColor,min:e.min,max:e.max,step:e.step,label:e.label,isShowRange:!1,isShowCurrValue:!0,isDisabled:e.isDisabled,modelValue:s.value,"onUpdate:modelValue":u[0]||(u[0]=N=>s.value=N)},null,8,["themeColor","min","max","step","label","isDisabled","modelValue"]),o(x,{variant:"text",themeColor:e.themeColor,isDisabled:e.isDisabled,onClick:v},{default:d(()=>[c(l.$slots,"suffix",{},()=>[e.suffix?(i(),p(g,{key:0,name:V.value,size:"32"},null,8,["name"])):f("",!0)])]),_:3},8,["themeColor","isDisabled"])],2))}};m.__docgenInfo={exportName:"default",displayName:"SliderControl",description:"",tags:{},props:[{name:"themeColor",type:{name:"string"},defaultValue:{func:!1,value:'"primary"'},values:["primary","secondary","neutral","info","success","warning","error"]},{name:"min",type:{name:"number"},defaultValue:{func:!1,value:"0"}},{name:"max",type:{name:"number"},defaultValue:{func:!1,value:"100"}},{name:"step",type:{name:"number"},defaultValue:{func:!1,value:"1"}},{name:"label",type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"prefix",type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"suffix",type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"isDisabled",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"className",type:{name:"string"},defaultValue:{func:!1,value:'""'}}],slots:[{name:"prefix"},{name:"suffix"}],sourceFiles:["/Users/auouser/Desktop/Work_Space/DED-WDS_VUE/libs/src/ui/element/SliderControl/SliderControl.vue"]};const U={title:"Component/Slider-Control",component:m,tags:["autodocs"],argTypes:{themeColor:{description:"主題顏色",control:{type:"select"},options:["primary","secondary","neutral","info","success","warning","error"],table:{type:{summary:"primary | secondary | neutral | info | success | warning | error"}}},min:{description:"最小值",control:{type:"number"}},max:{description:"最大值",control:{type:"number"}},step:{description:"步進值",control:{type:"number"}},label:{description:"單位",control:{type:"text"}},prefix:{description:"前置元素",control:{type:"select",labels:{"":"None",increase:"increase",decrease:"decrease"}},options:["","increase","decrease"]},suffix:{description:"後置元素",control:{type:"select",labels:{"":"None",increase:"increase",decrease:"decrease"}},options:["","increase","decrease"]},isDisabled:{description:"是否禁用",control:{type:"boolean"}},className:{description:"客製化樣式",control:{type:"text"}},modelValue:{description:"輸入值",control:{type:"number"},table:{type:{summary:"number"},category:"v-model"}}},parameters:{docs:{title:"SliderControl",description:{component:"按鈕滑桿輸入組件的呈現及說明。"}}}},n={name:"預設項目",args:{themeColor:"primary",min:-100,max:100,step:1,label:"℃",prefix:"decrease",suffix:"increase",isDisabled:!1,className:"",modelValue:8},render:a=>({components:{SliderControl:m},setup(){return{args:a}},template:`
            <SliderControl
                :themeColor="args.themeColor"
                :min="args.min"
                :max="args.max"
                :step="args.step"
                :label="args.label"
                :prefix="args.prefix"
                :suffix="args.suffix"
                :isDisabled="args.isDisabled"
                :className="args.className"
                v-model="args.modelValue"
            ></SliderControl>
        `}),parameters:{controls:{},docs:{source:{transform:(a,r)=>{const{args:e}=r;return["<SliderControl",`  :min="${e.min}"`,`  :max="${e.max}"`,`  :step="${e.step}"`,`  label="${e.label}"`,`  prefix="${e.prefix}"`,`  suffix="${e.suffix}"`,`  :isDisabled="${e.isDisabled}"`,`  className="${e.className}"`,'  v-model="modelValue"',"></SliderControl>"].join(`
`).trim()}}}}};var b,y,C;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:`{
  name: "預設項目",
  args: {
    themeColor: "primary",
    min: -100,
    max: 100,
    step: 1,
    label: "℃",
    prefix: "decrease",
    suffix: "increase",
    isDisabled: false,
    className: '',
    modelValue: 8
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
                :min="args.min"
                :max="args.max"
                :step="args.step"
                :label="args.label"
                :prefix="args.prefix"
                :suffix="args.suffix"
                :isDisabled="args.isDisabled"
                :className="args.className"
                v-model="args.modelValue"
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
          return ['<SliderControl', \`  :min="\${args.min}"\`, \`  :max="\${args.max}"\`, \`  :step="\${args.step}"\`, \`  label="\${args.label}"\`, \`  prefix="\${args.prefix}"\`, \`  suffix="\${args.suffix}"\`, \`  :isDisabled="\${args.isDisabled}"\`, \`  className="\${args.className}"\`, \`  v-model="modelValue"\`, '></SliderControl>'].join('\\n').trim();
        }
      }
    }
  }
}`,...(C=(y=n.parameters)==null?void 0:y.docs)==null?void 0:C.source}}};const P=["SliderButton"];export{n as SliderButton,P as __namedExportsOrder,U as default};

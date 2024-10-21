import{m as f,u as o,f as c,w as O,o as h,c as j,b as u,x as q,a as y,D as v,n as G,d as D,r as s}from"./vue.esm-bundler-Bm7qTojY.js";import{I as C}from"./Input-WK28BYNX.js";import"./Icon-Bd9voGO6.js";import"./iframe-BMHgzWyy.js";import"../sb-preview/runtime.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const K={class:"slide-track-container"},L=["min","max"],H={__name:"SliderSingle",props:f({themeColor:{type:String,default:"primary",validator:e=>["primary","secondary","tertiary","success","warning","error","info"].includes(e)},sliderMinVal:{type:Number},sliderMaxVal:{type:Number},thumbSize:{type:[Number,String],default:"20"}},{modelValue:{},modelModifiers:{}}),emits:["update:modelValue"],setup(e){const r=o(e,"modelValue"),l=e,n=c(()=>100-r.value/l.sliderMaxVal*100+"%");return O(()=>l.thumbSize,a=>{document.documentElement.style.setProperty("--thumbDiameter",`${a}px`)},{immediate:!0}),(a,m)=>(h(),j("div",{class:G(["single-slider",`slider-${l.themeColor}`])},[u("div",K,[u("div",{class:"slide-track",style:q({left:0,right:n.value})},null,4)]),y(u("input",{type:"range",min:l.sliderMinVal,max:l.sliderMaxVal,"onUpdate:modelValue":m[0]||(m[0]=i=>r.value=i)},null,8,L),[[v,r.value]])],2))}};H.__docgenInfo={exportName:"default",displayName:"SliderSingle",description:"",tags:{},props:[{name:"themeColor",type:{name:"string"},defaultValue:{func:!1,value:"'primary'"},values:["primary","secondary","tertiary","success","warning","error","info"]},{name:"sliderMinVal",type:{name:"number"}},{name:"sliderMaxVal",type:{name:"number"}},{name:"thumbSize",type:{name:"number|string"},defaultValue:{func:!1,value:"'20'"}}],sourceFiles:["/Users/auouser/Desktop/Work_Space/DED-WDS_VUE/libs/src/ui/element/Slider/SliderSingle.vue"]};const Q={class:"slide-track-container"},X=["min","max"],Y=["min","max"],J={__name:"SliderDouble",props:f({themeColor:{type:String,default:"primary",validator:e=>["primary","secondary","tertiary","success","warning","error","info"].includes(e)},sliderMinVal:{type:Number},sliderMaxVal:{type:Number},thumbSize:{type:[Number,String],default:"20"}},{currentSliderMinValue:{},currentSliderMinValueModifiers:{},currentSliderMaxValue:{},currentSliderMaxValueModifiers:{}}),emits:["update:currentSliderMinValue","update:currentSliderMaxValue"],setup(e){const r=o(e,"currentSliderMinValue"),l=o(e,"currentSliderMaxValue"),n=e,a=c(()=>Math.min(r.value,l.value)),m=c(()=>Math.max(r.value,l.value)),i=c(()=>a.value/n.sliderMaxVal*100+"%"),t=c(()=>100-m.value/n.sliderMaxVal*100+"%");return O(()=>n.thumbSize,z=>{document.documentElement.style.setProperty("--thumbDiameter",`${z}px`)},{immediate:!0}),(z,S)=>(h(),j("div",{class:G(["double-slider",`slider-${n.themeColor}`])},[u("div",Q,[u("div",{class:"slide-track",style:q({left:i.value,right:t.value})},null,4)]),y(u("input",{type:"range",min:n.sliderMinVal,max:n.sliderMaxVal,"onUpdate:modelValue":S[0]||(S[0]=b=>r.value=b)},null,8,X),[[v,r.value]]),y(u("input",{type:"range",min:n.sliderMinVal,max:n.sliderMaxVal,"onUpdate:modelValue":S[1]||(S[1]=b=>l.value=b)},null,8,Y),[[v,l.value]])],2))}};J.__docgenInfo={exportName:"default",displayName:"SliderDouble",description:"",tags:{},props:[{name:"themeColor",type:{name:"string"},defaultValue:{func:!1,value:"'primary'"},values:["primary","secondary","tertiary","success","warning","error","info"]},{name:"sliderMinVal",type:{name:"number"}},{name:"sliderMaxVal",type:{name:"number"}},{name:"thumbSize",type:{name:"number|string"},defaultValue:{func:!1,value:"'20'"}}],sourceFiles:["/Users/auouser/Desktop/Work_Space/DED-WDS_VUE/libs/src/ui/element/Slider/SliderDouble.vue"]};const d={__name:"Slider",props:f({sliderMinVal:{type:Number,default:0},sliderMaxVal:{type:Number,default:5e3},thumbSize:{type:[Number,String],default:"20"},themeColor:{type:String,default:"primary",validator:e=>["primary","secondary","tertiary","success","warning","error","info"].includes(e)},range:{type:Boolean,default:!1}},{modelValue:{},modelModifiers:{},currentSliderMinValue:{},currentSliderMinValueModifiers:{},currentSliderMaxValue:{},currentSliderMaxValueModifiers:{}}),emits:["update:modelValue","update:currentSliderMinValue","update:currentSliderMaxValue"],setup(e){const r=o(e,"modelValue"),l=o(e,"currentSliderMinValue"),n=o(e,"currentSliderMaxValue"),a=e;return(m,i)=>a.range?(h(),D(J,{key:1,sliderMinVal:a.sliderMinVal,sliderMaxVal:a.sliderMaxVal,themeColor:a.themeColor,thumbSize:a.thumbSize,currentSliderMinValue:l.value,"onUpdate:currentSliderMinValue":i[1]||(i[1]=t=>l.value=t),currentSliderMaxValue:n.value,"onUpdate:currentSliderMaxValue":i[2]||(i[2]=t=>n.value=t)},null,8,["sliderMinVal","sliderMaxVal","themeColor","thumbSize","currentSliderMinValue","currentSliderMaxValue"])):(h(),D(H,{key:0,sliderMinVal:a.sliderMinVal,sliderMaxVal:a.sliderMaxVal,themeColor:a.themeColor,thumbSize:a.thumbSize,modelValue:r.value,"onUpdate:modelValue":i[0]||(i[0]=t=>r.value=t)},null,8,["sliderMinVal","sliderMaxVal","themeColor","thumbSize","modelValue"]))}};d.__docgenInfo={exportName:"default",displayName:"Slider",description:"",tags:{},props:[{name:"sliderMinVal",type:{name:"number"},defaultValue:{func:!1,value:"0"}},{name:"sliderMaxVal",type:{name:"number"},defaultValue:{func:!1,value:"5000"}},{name:"thumbSize",type:{name:"number|string"},defaultValue:{func:!1,value:"'20'"}},{name:"themeColor",type:{name:"string"},defaultValue:{func:!1,value:"'primary'"},values:["primary","secondary","tertiary","success","warning","error","info"]},{name:"range",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],sourceFiles:["/Users/auouser/Desktop/Work_Space/DED-WDS_VUE/libs/src/ui/element/Slider/Slider.vue"]};const ie={components:{Input:C},title:"Design System/Slider",component:d,tags:["autodocs"],argTypes:{sliderMinVal:{description:"設定 Slider 的最小值，控制可滑動的起始範圍",control:{type:"number"}},sliderMaxVal:{description:"設定 Slider 的最大值，控制可滑動的結束範圍",control:{type:"number"}},thumbSize:{description:"設定 Slider 滑塊的大小，以像素為單位",control:{type:"range",min:20,max:30,step:1}},themeColor:{description:"選擇 Slider 的主題顏色",control:{type:"select"},options:["default","primary","secondary","tertiary","success","warning","error","info"]},range:{description:"勾選以啟動 Range Slider，允許選擇一個範圍的值",control:{type:"boolean"}}},parameters:{docs:{title:"Slider",description:{component:"Slider組件的呈現及說明。"}}}},V={name:"Slider 基礎樣式",args:{sliderMinVal:0,sliderMaxVal:5e3,thumbSize:20,themeColor:"primary"},render:e=>({components:{Slider:d},setup(){const r=s(250);return{args:e,currentSliderValue:r}},template:`
            <Slider
                :sliderMinVal="args.sliderMinVal"
                :sliderMaxVal="args.sliderMaxVal"
                :thumbSize="args.thumbSize"
                :themeColor="args.themeColor"
                v-model="currentSliderValue"
            ></Slider>
            {{currentSliderValue}}
        `}),parameters:{controls:{exclude:["range"]}}},p={name:"Slider 範圍樣式",args:{sliderMinVal:0,sliderMaxVal:5e3,thumbSize:20,themeColor:"primary"},render:e=>({components:{Slider:d},setup(){const r=s(114),l=s(514);return{args:e,currentSliderMinValue:r,currentSliderMaxValue:l}},template:`
            <Slider
                :sliderMinVal="args.sliderMinVal"
                :sliderMaxVal="args.sliderMaxVal"
                :thumbSize="args.thumbSize"
                :themeColor="args.themeColor"
                v-model:currentSliderMinValue="currentSliderMinValue"
                v-model:currentSliderMaxValue="currentSliderMaxValue"
                range
            ></Slider>
        `}),parameters:{controls:{}}},M={name:"Slider 基礎結合輸入框",args:{sliderMinVal:0,sliderMaxVal:5e3,thumbSize:20,themeColor:"primary"},render:e=>({components:{Slider:d,Input:C},setup(){const r=s(250);return{args:e,currentSliderValue:r}},template:`
            <Slider
                :sliderMinVal="args.sliderMinVal"
                :sliderMaxVal="args.sliderMaxVal"
                :thumbSize="args.thumbSize"
                :themeColor="args.themeColor"
                v-model="currentSliderValue"
            ></Slider>
            <Input type="number" v-model="currentSliderValue"/>
        `}),parameters:{controls:{exclude:["range"]}}},g={name:"Slider 範圍樣式結合輸入框",args:{sliderMinVal:0,sliderMaxVal:5e3,thumbSize:20,themeColor:"primary"},render:e=>({components:{Slider:d,Input:C},setup(){const r=s(114),l=s(514);return{args:e,currentSliderMinValue:r,currentSliderMaxValue:l}},template:`
            <Slider
                :sliderMinVal="args.sliderMinVal"
                :sliderMaxVal="args.sliderMaxVal"
                :thumbSize="args.thumbSize"
                :themeColor="args.themeColor"
                v-model:currentSliderMinValue="currentSliderMinValue"
                v-model:currentSliderMaxValue="currentSliderMaxValue"
                range
            ></Slider>
            <div style="display:flex; gap: 16px;">
                <Input label="起始數值" type="number" v-model="currentSliderMinValue" style="flex-grow: 1"/>
                <Input label="結束數值" type="number" v-model="currentSliderMaxValue" style="flex-grow: 1"/>
            </div>
        `}),parameters:{controls:{}}},x={name:"Slider 顏色",args:{sliderMinVal:0,sliderMaxVal:5e3,thumbSize:20,themeColor:"primary"},render:e=>({components:{Slider:d},setup(){const r=s(250);return{args:e,currentSliderValue:r}},template:`
            <div style="display:flex; flex-direction: column;">
                <Slider
                    :sliderMinVal="args.sliderMinVal"
                    :sliderMaxVal="args.sliderMaxVal"
                    themeColor="primary"
                    :thumbSize="args.thumbSize"
                    v-model="currentSliderValue"
                ></Slider>
                <Slider
                    :sliderMinVal="args.sliderMinVal"
                    :sliderMaxVal="args.sliderMaxVal"
                    themeColor="secondary"
                    :thumbSize="args.thumbSize"
                    v-model="currentSliderValue"
                ></Slider>
                <Slider
                    :sliderMinVal="args.sliderMinVal"
                    :sliderMaxVal="args.sliderMaxVal"
                    themeColor="tertiary"
                    :thumbSize="args.thumbSize"
                    v-model="currentSliderValue"
                ></Slider>
                <Slider
                    :sliderMinVal="args.sliderMinVal"
                    :sliderMaxVal="args.sliderMaxVal"
                    themeColor="success"
                    :thumbSize="args.thumbSize"
                    v-model="currentSliderValue"
                ></Slider>
                <Slider
                    :sliderMinVal="args.sliderMinVal"
                    :sliderMaxVal="args.sliderMaxVal"
                    themeColor="warning"
                    :thumbSize="args.thumbSize"
                    v-model="currentSliderValue"
                ></Slider>
                <Slider
                    :sliderMinVal="args.sliderMinVal"
                    :sliderMaxVal="args.sliderMaxVal"
                    themeColor="error"
                    :thumbSize="args.thumbSize"
                    v-model="currentSliderValue"
                ></Slider>
                <Slider
                    :sliderMinVal="args.sliderMinVal"
                    :sliderMaxVal="args.sliderMaxVal"
                    themeColor="info"
                    :thumbSize="args.thumbSize"
                    v-model="currentSliderValue"
                ></Slider>
            </div>
        `}),parameters:{controls:{exclude:["themeColor"]}}};var F,_,E;V.parameters={...V.parameters,docs:{...(F=V.parameters)==null?void 0:F.docs,source:{originalSource:`{
  name: "Slider 基礎樣式",
  args: {
    sliderMinVal: 0,
    sliderMaxVal: 5000,
    thumbSize: 20,
    themeColor: "primary"
  },
  render: args => ({
    components: {
      Slider
    },
    setup() {
      const currentSliderValue = ref(250);
      return {
        args,
        currentSliderValue
      };
    },
    template: \`
            <Slider
                :sliderMinVal="args.sliderMinVal"
                :sliderMaxVal="args.sliderMaxVal"
                :thumbSize="args.thumbSize"
                :themeColor="args.themeColor"
                v-model="currentSliderValue"
            ></Slider>
            {{currentSliderValue}}
        \`
  }),
  // 控制 controls 中能控制的參數
  parameters: {
    controls: {
      // include: ['themeColor', 'label', 'value', 'name' ],
      exclude: ['range']
    }
  }
}`,...(E=(_=V.parameters)==null?void 0:_.docs)==null?void 0:E.source}}};var I,w,N;p.parameters={...p.parameters,docs:{...(I=p.parameters)==null?void 0:I.docs,source:{originalSource:`{
  name: "Slider 範圍樣式",
  args: {
    sliderMinVal: 0,
    sliderMaxVal: 5000,
    thumbSize: 20,
    themeColor: "primary"
  },
  render: args => ({
    components: {
      Slider
    },
    setup() {
      const currentSliderMinValue = ref(114);
      const currentSliderMaxValue = ref(514);
      return {
        args,
        currentSliderMinValue,
        currentSliderMaxValue
      };
    },
    template: \`
            <Slider
                :sliderMinVal="args.sliderMinVal"
                :sliderMaxVal="args.sliderMaxVal"
                :thumbSize="args.thumbSize"
                :themeColor="args.themeColor"
                v-model:currentSliderMinValue="currentSliderMinValue"
                v-model:currentSliderMaxValue="currentSliderMaxValue"
                range
            ></Slider>
        \`
  }),
  // 控制 controls 中能控制的參數
  parameters: {
    controls: {
      // include: ['themeColor', 'label', 'value', 'name' ],
    }
  }
}`,...(N=(w=p.parameters)==null?void 0:w.docs)==null?void 0:N.source}}};var k,A,U;M.parameters={...M.parameters,docs:{...(k=M.parameters)==null?void 0:k.docs,source:{originalSource:`{
  name: "Slider 基礎結合輸入框",
  args: {
    sliderMinVal: 0,
    sliderMaxVal: 5000,
    thumbSize: 20,
    themeColor: "primary"
  },
  render: args => ({
    components: {
      Slider,
      Input
    },
    setup() {
      const currentSliderValue = ref(250);
      return {
        args,
        currentSliderValue
      };
    },
    template: \`
            <Slider
                :sliderMinVal="args.sliderMinVal"
                :sliderMaxVal="args.sliderMaxVal"
                :thumbSize="args.thumbSize"
                :themeColor="args.themeColor"
                v-model="currentSliderValue"
            ></Slider>
            <Input type="number" v-model="currentSliderValue"/>
        \`
  }),
  // 控制 controls 中能控制的參數
  parameters: {
    controls: {
      // include: ['themeColor', 'label', 'value', 'name' ],
      exclude: ['range']
    }
  }
}`,...(U=(A=M.parameters)==null?void 0:A.docs)==null?void 0:U.source}}};var W,B,R;g.parameters={...g.parameters,docs:{...(W=g.parameters)==null?void 0:W.docs,source:{originalSource:`{
  name: "Slider 範圍樣式結合輸入框",
  args: {
    sliderMinVal: 0,
    sliderMaxVal: 5000,
    thumbSize: 20,
    themeColor: "primary"
  },
  render: args => ({
    components: {
      Slider,
      Input
    },
    setup() {
      const currentSliderMinValue = ref(114);
      const currentSliderMaxValue = ref(514);
      return {
        args,
        currentSliderMinValue,
        currentSliderMaxValue
      };
    },
    template: \`
            <Slider
                :sliderMinVal="args.sliderMinVal"
                :sliderMaxVal="args.sliderMaxVal"
                :thumbSize="args.thumbSize"
                :themeColor="args.themeColor"
                v-model:currentSliderMinValue="currentSliderMinValue"
                v-model:currentSliderMaxValue="currentSliderMaxValue"
                range
            ></Slider>
            <div style="display:flex; gap: 16px;">
                <Input label="起始數值" type="number" v-model="currentSliderMinValue" style="flex-grow: 1"/>
                <Input label="結束數值" type="number" v-model="currentSliderMaxValue" style="flex-grow: 1"/>
            </div>
        \`
  }),
  // 控制 controls 中能控制的參數
  parameters: {
    controls: {
      // include: ['themeColor', 'label', 'value', 'name' ],
    }
  }
}`,...(R=(B=g.parameters)==null?void 0:B.docs)==null?void 0:R.source}}};var $,P,T;x.parameters={...x.parameters,docs:{...($=x.parameters)==null?void 0:$.docs,source:{originalSource:`{
  name: "Slider 顏色",
  args: {
    sliderMinVal: 0,
    sliderMaxVal: 5000,
    thumbSize: 20,
    themeColor: "primary"
  },
  render: args => ({
    components: {
      Slider
    },
    setup() {
      const currentSliderValue = ref(250);
      return {
        args,
        currentSliderValue
      };
    },
    template: \`
            <div style="display:flex; flex-direction: column;">
                <Slider
                    :sliderMinVal="args.sliderMinVal"
                    :sliderMaxVal="args.sliderMaxVal"
                    themeColor="primary"
                    :thumbSize="args.thumbSize"
                    v-model="currentSliderValue"
                ></Slider>
                <Slider
                    :sliderMinVal="args.sliderMinVal"
                    :sliderMaxVal="args.sliderMaxVal"
                    themeColor="secondary"
                    :thumbSize="args.thumbSize"
                    v-model="currentSliderValue"
                ></Slider>
                <Slider
                    :sliderMinVal="args.sliderMinVal"
                    :sliderMaxVal="args.sliderMaxVal"
                    themeColor="tertiary"
                    :thumbSize="args.thumbSize"
                    v-model="currentSliderValue"
                ></Slider>
                <Slider
                    :sliderMinVal="args.sliderMinVal"
                    :sliderMaxVal="args.sliderMaxVal"
                    themeColor="success"
                    :thumbSize="args.thumbSize"
                    v-model="currentSliderValue"
                ></Slider>
                <Slider
                    :sliderMinVal="args.sliderMinVal"
                    :sliderMaxVal="args.sliderMaxVal"
                    themeColor="warning"
                    :thumbSize="args.thumbSize"
                    v-model="currentSliderValue"
                ></Slider>
                <Slider
                    :sliderMinVal="args.sliderMinVal"
                    :sliderMaxVal="args.sliderMaxVal"
                    themeColor="error"
                    :thumbSize="args.thumbSize"
                    v-model="currentSliderValue"
                ></Slider>
                <Slider
                    :sliderMinVal="args.sliderMinVal"
                    :sliderMaxVal="args.sliderMaxVal"
                    themeColor="info"
                    :thumbSize="args.thumbSize"
                    v-model="currentSliderValue"
                ></Slider>
            </div>
        \`
  }),
  // 控制 controls 中能控制的參數
  parameters: {
    controls: {
      // include: ['themeColor', 'label', 'value', 'name' ],
      exclude: ['themeColor']
    }
  }
}`,...(T=(P=x.parameters)==null?void 0:P.docs)==null?void 0:T.source}}};const te=["SliderDefault","RangeSlider","DefaultSliderWithInput","RangeSliderWithInput","SliderColors"];export{M as DefaultSliderWithInput,p as RangeSlider,g as RangeSliderWithInput,x as SliderColors,V as SliderDefault,te as __namedExportsOrder,ie as default};

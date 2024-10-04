import{v as f,x as o,c,w as j,o as x,a as L,b as u,m as O,y,L as v,n as q,p as D,j as s}from"./vue.esm-bundler-CsTC-5Ev.js";import{I as C}from"./Input-CEIQaJNA.js";import"./Divider.stories-Cjb4xGOX.js";import"./Icon-Pq8-XFtv.js";import"./iframe-D3-rZU4J.js";import"../sb-preview/runtime.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./Divider-PlWTLLgO.js";const J={class:"slide-track-container"},K=["min","max"],G={__name:"SliderSingle",props:f({themeColor:{type:String,default:"primary",validator:e=>["primary","secondary","tertiary","success","warning","error","info"].includes(e)},sliderMinVal:{type:Number},sliderMaxVal:{type:Number},thumbSize:{type:[Number,String],default:"20"}},{modelValue:{},modelModifiers:{}}),emits:["update:modelValue"],setup(e){const r=o(e,"modelValue"),l=e,n=c(()=>100-r.value/l.sliderMaxVal*100+"%");return j(()=>l.thumbSize,a=>{document.documentElement.style.setProperty("--thumbDiameter",`${a}px`)},{immediate:!0}),(a,m)=>(x(),L("div",{class:q(["single-slider",`slider-${l.themeColor}`])},[u("div",J,[u("div",{class:"slide-track",style:O({left:0,right:n.value})},null,4)]),y(u("input",{type:"range",min:l.sliderMinVal,max:l.sliderMaxVal,"onUpdate:modelValue":m[0]||(m[0]=i=>r.value=i)},null,8,K),[[v,r.value]])],2))}};G.__docgenInfo={exportName:"default",displayName:"SliderSingle",description:"",tags:{},props:[{name:"themeColor",type:{name:"string"},defaultValue:{func:!1,value:"'primary'"},values:["primary","secondary","tertiary","success","warning","error","info"]},{name:"sliderMinVal",type:{name:"number"}},{name:"sliderMaxVal",type:{name:"number"}},{name:"thumbSize",type:{name:"number|string"},defaultValue:{func:!1,value:"'20'"}}],sourceFiles:["/Users/auouser/Desktop/Work_Space/DED-WDS_VUE/libs/src/ui/element/Slider/SliderSingle.vue"]};const Q={class:"slide-track-container"},X=["min","max"],Y=["min","max"],H={__name:"SliderDouble",props:f({themeColor:{type:String,default:"primary",validator:e=>["primary","secondary","tertiary","success","warning","error","info"].includes(e)},sliderMinVal:{type:Number},sliderMaxVal:{type:Number},thumbSize:{type:[Number,String],default:"20"}},{currentSliderMinValue:{},currentSliderMinValueModifiers:{},currentSliderMaxValue:{},currentSliderMaxValueModifiers:{}}),emits:["update:currentSliderMinValue","update:currentSliderMaxValue"],setup(e){const r=o(e,"currentSliderMinValue"),l=o(e,"currentSliderMaxValue"),n=e,a=c(()=>Math.min(r.value,l.value)),m=c(()=>Math.max(r.value,l.value)),i=c(()=>a.value/n.sliderMaxVal*100+"%"),t=c(()=>100-m.value/n.sliderMaxVal*100+"%");return j(()=>n.thumbSize,z=>{document.documentElement.style.setProperty("--thumbDiameter",`${z}px`)},{immediate:!0}),(z,S)=>(x(),L("div",{class:q(["double-slider",`slider-${n.themeColor}`])},[u("div",Q,[u("div",{class:"slide-track",style:O({left:i.value,right:t.value})},null,4)]),y(u("input",{type:"range",min:n.sliderMinVal,max:n.sliderMaxVal,"onUpdate:modelValue":S[0]||(S[0]=b=>r.value=b)},null,8,X),[[v,r.value]]),y(u("input",{type:"range",min:n.sliderMinVal,max:n.sliderMaxVal,"onUpdate:modelValue":S[1]||(S[1]=b=>l.value=b)},null,8,Y),[[v,l.value]])],2))}};H.__docgenInfo={exportName:"default",displayName:"SliderDouble",description:"",tags:{},props:[{name:"themeColor",type:{name:"string"},defaultValue:{func:!1,value:"'primary'"},values:["primary","secondary","tertiary","success","warning","error","info"]},{name:"sliderMinVal",type:{name:"number"}},{name:"sliderMaxVal",type:{name:"number"}},{name:"thumbSize",type:{name:"number|string"},defaultValue:{func:!1,value:"'20'"}}],sourceFiles:["/Users/auouser/Desktop/Work_Space/DED-WDS_VUE/libs/src/ui/element/Slider/SliderDouble.vue"]};const d={__name:"Slider",props:f({themeColor:{type:String,default:"primary",validator:e=>["primary","secondary","tertiary","success","warning","error","info"].includes(e)},sliderMinVal:{type:Number,default:0},sliderMaxVal:{type:Number,default:5e3},thumbSize:{type:[Number,String],default:"20"},range:{type:Boolean,default:!1}},{modelValue:{},modelModifiers:{},currentSliderMinValue:{},currentSliderMinValueModifiers:{},currentSliderMaxValue:{},currentSliderMaxValueModifiers:{}}),emits:["update:modelValue","update:currentSliderMinValue","update:currentSliderMaxValue"],setup(e){const r=o(e,"modelValue"),l=o(e,"currentSliderMinValue"),n=o(e,"currentSliderMaxValue"),a=e;return(m,i)=>a.range?(x(),D(H,{key:1,sliderMinVal:a.sliderMinVal,sliderMaxVal:a.sliderMaxVal,themeColor:a.themeColor,thumbSize:a.thumbSize,currentSliderMinValue:l.value,"onUpdate:currentSliderMinValue":i[1]||(i[1]=t=>l.value=t),currentSliderMaxValue:n.value,"onUpdate:currentSliderMaxValue":i[2]||(i[2]=t=>n.value=t)},null,8,["sliderMinVal","sliderMaxVal","themeColor","thumbSize","currentSliderMinValue","currentSliderMaxValue"])):(x(),D(G,{key:0,sliderMinVal:a.sliderMinVal,sliderMaxVal:a.sliderMaxVal,themeColor:a.themeColor,thumbSize:a.thumbSize,modelValue:r.value,"onUpdate:modelValue":i[0]||(i[0]=t=>r.value=t)},null,8,["sliderMinVal","sliderMaxVal","themeColor","thumbSize","modelValue"]))}};d.__docgenInfo={exportName:"default",displayName:"Slider",description:"",tags:{},props:[{name:"themeColor",type:{name:"string"},defaultValue:{func:!1,value:"'primary'"},values:["primary","secondary","tertiary","success","warning","error","info"]},{name:"sliderMinVal",type:{name:"number"},defaultValue:{func:!1,value:"0"}},{name:"sliderMaxVal",type:{name:"number"},defaultValue:{func:!1,value:"5000"}},{name:"thumbSize",type:{name:"number|string"},defaultValue:{func:!1,value:"'20'"}},{name:"range",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],sourceFiles:["/Users/auouser/Desktop/Work_Space/DED-WDS_VUE/libs/src/ui/element/Slider/Slider.vue"]};const ue={components:{Input:C},title:"Design System/Slider",component:d,tags:["autodocs"],argTypes:{themeColor:{description:"主題顏色",control:{type:"select"},options:["default","primary","secondary","tertiary","success","warning","error","info"]},sliderMinVal:{description:"Slider起始值",control:{type:"number"}},sliderMaxVal:{description:"Slider結束值",control:{type:"number"}},thumbSize:{description:"Slider滑塊大小",control:{type:"number"}},range:{description:"勾選啟動 Range Slider",control:{type:"boolean"}}},parameters:{docs:{title:"Slider",description:{component:"Slider組件的呈現及說明。"}}}},V={name:"基礎樣式",args:{sliderMinVal:"0",sliderMaxVal:"5000",themeColor:"primary",thumbSize:"20"},render:e=>({components:{Slider:d},setup(){const r=s(250);return{args:e,currentSliderValue:r}},template:`
            <Slider
                :sliderMinVal="args.sliderMinVal"
                :sliderMaxVal="args.sliderMaxVal"
                :themeColor="args.themeColor"
                :thumbSize="args.thumbSize"
                v-model="currentSliderValue"
            ></Slider>
        `}),parameters:{controls:{}}},M={name:"範圍樣式",args:{sliderMinVal:"0",sliderMaxVal:"5000",themeColor:"primary",thumbSize:"20"},render:e=>({components:{Slider:d},setup(){const r=s(114),l=s(514);return{args:e,currentSliderMinValue:r,currentSliderMaxValue:l}},template:`
            <Slider
                :sliderMinVal="args.sliderMinVal"
                :sliderMaxVal="args.sliderMaxVal"
                :themeColor="args.themeColor"
                :thumbSize="args.thumbSize"
                v-model:currentSliderMinValue="currentSliderMinValue"
                v-model:currentSliderMaxValue="currentSliderMaxValue"
                range
            ></Slider>
        `}),parameters:{controls:{}}},p={name:"基礎樣式雙向綁定",args:{sliderMinVal:"0",sliderMaxVal:"5000",themeColor:"primary",thumbSize:"20"},render:e=>({components:{Slider:d,Input:C},setup(){const r=s(250);return{args:e,currentSliderValue:r}},template:`
            <Slider
                :sliderMinVal="args.sliderMinVal"
                :sliderMaxVal="args.sliderMaxVal"
                :themeColor="args.themeColor"
                :thumbSize="args.thumbSize"
                v-model="currentSliderValue"
            ></Slider>
            <Input type="number" v-model="currentSliderValue"/>
        `}),parameters:{controls:{}}},g={name:"範圍樣式雙向綁定",args:{sliderMinVal:"0",sliderMaxVal:"5000",themeColor:"primary",thumbSize:"20"},render:e=>({components:{Slider:d,Input:C},setup(){const r=s(114),l=s(514);return{args:e,currentSliderMinValue:r,currentSliderMaxValue:l}},template:`
            <Slider
                :sliderMinVal="args.sliderMinVal"
                :sliderMaxVal="args.sliderMaxVal"
                :themeColor="args.themeColor"
                :thumbSize="args.thumbSize"
                v-model:currentSliderMinValue="currentSliderMinValue"
                v-model:currentSliderMaxValue="currentSliderMaxValue"
                range
            ></Slider>
            <div style="display:flex; gap: 16px;">
                <Input label="起始數值" type="number" v-model="currentSliderMinValue" style="flex-grow: 1"/>
                <Input label="結束數值" type="number" v-model="currentSliderMaxValue" style="flex-grow: 1"/>
            </div>
        `}),parameters:{controls:{}}},h={name:"Slider顏色",args:{sliderMinVal:"0",sliderMaxVal:"5000",thumbSize:"20"},render:e=>({components:{Slider:d},setup(){const r=s(250);return{args:e,currentSliderValue:r}},template:`
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
        `}),parameters:{controls:{}}};var F,_,A;V.parameters={...V.parameters,docs:{...(F=V.parameters)==null?void 0:F.docs,source:{originalSource:`{
  name: "基礎樣式",
  args: {
    sliderMinVal: "0",
    sliderMaxVal: "5000",
    themeColor: "primary",
    thumbSize: "20"
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
                :themeColor="args.themeColor"
                :thumbSize="args.thumbSize"
                v-model="currentSliderValue"
            ></Slider>
        \`
  }),
  // 控制 controls 中能控制的參數
  parameters: {
    controls: {
      // include: ['themeColor', 'label', 'value', 'name' ],
    }
  }
}`,...(A=(_=V.parameters)==null?void 0:_.docs)==null?void 0:A.source}}};var E,w,N;M.parameters={...M.parameters,docs:{...(E=M.parameters)==null?void 0:E.docs,source:{originalSource:`{
  name: "範圍樣式",
  args: {
    sliderMinVal: "0",
    sliderMaxVal: "5000",
    themeColor: "primary",
    thumbSize: "20"
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
                :themeColor="args.themeColor"
                :thumbSize="args.thumbSize"
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
}`,...(N=(w=M.parameters)==null?void 0:w.docs)==null?void 0:N.source}}};var k,I,U;p.parameters={...p.parameters,docs:{...(k=p.parameters)==null?void 0:k.docs,source:{originalSource:`{
  name: "基礎樣式雙向綁定",
  args: {
    sliderMinVal: "0",
    sliderMaxVal: "5000",
    themeColor: "primary",
    thumbSize: "20"
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
                :themeColor="args.themeColor"
                :thumbSize="args.thumbSize"
                v-model="currentSliderValue"
            ></Slider>
            <Input type="number" v-model="currentSliderValue"/>
        \`
  }),
  // 控制 controls 中能控制的參數
  parameters: {
    controls: {
      // include: ['themeColor', 'label', 'value', 'name' ],
    }
  }
}`,...(U=(I=p.parameters)==null?void 0:I.docs)==null?void 0:U.source}}};var B,W,R;g.parameters={...g.parameters,docs:{...(B=g.parameters)==null?void 0:B.docs,source:{originalSource:`{
  name: "範圍樣式雙向綁定",
  args: {
    sliderMinVal: "0",
    sliderMaxVal: "5000",
    themeColor: "primary",
    thumbSize: "20"
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
                :themeColor="args.themeColor"
                :thumbSize="args.thumbSize"
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
}`,...(R=(W=g.parameters)==null?void 0:W.docs)==null?void 0:R.source}}};var $,P,T;h.parameters={...h.parameters,docs:{...($=h.parameters)==null?void 0:$.docs,source:{originalSource:`{
  name: "Slider顏色",
  args: {
    sliderMinVal: "0",
    sliderMaxVal: "5000",
    thumbSize: "20"
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
    }
  }
}`,...(T=(P=h.parameters)==null?void 0:P.docs)==null?void 0:T.source}}};const se=["DefaultSlider","RangeSlider","DefaultSliderWithVModel","RangeSliderWithVModel","SliderColors"];export{V as DefaultSlider,p as DefaultSliderWithVModel,M as RangeSlider,g as RangeSliderWithVModel,h as SliderColors,se as __namedExportsOrder,ue as default};

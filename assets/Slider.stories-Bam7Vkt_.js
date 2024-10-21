import{_ as a}from"./Slider-DplwCtxv.js";import{r as m}from"./vendor-CDUjWAn_.js";const c={title:"Design System/Slider",component:a,tags:["autodocs"],argTypes:{themeColor:{description:"主題顏色",control:{type:"select"},options:["primary","secondary","tertiary","success","warning","error","info"]},min:{description:"最小值",control:{type:"number"}},max:{description:"最大值",control:{type:"number"}},step:{description:"步進值",control:{type:"number"}},initValue:{description:"初始值",control:{type:"number"}},unit:{description:"單位",control:{type:"text"}},isDisabled:{description:"是否禁用",control:{type:"boolean"}},className:{description:"客製化樣式",control:{type:"text"}}},parameters:{docs:{title:"Slider",description:{component:"Slider組件的呈現及說明。"}}}},e={name:"主要項目",args:{themeColor:"primary",min:0,max:100,step:1,initValue:"50",unit:"℃",isDisabled:!1,className:""},render:n=>({components:{Slider:a},setup(){const i=m(20);return{args:n,sliderValue:i}},template:`
            <slider
                :themeColor="args.themeColor"
                :min="args.min"
                :max="args.max"
                :step="args.step"
                :initValue="args.initValue"
                :unit="args.unit"
                :isDisabled="args.isDisabled"
                v-model="sliderValue"
                :className="sliderValue"
            ></slider>
            
            ModelValue: {{sliderValue}}
        `}),parameters:{controls:{}}},s={name:"主題色滑桿",args:{min:0,max:100,step:1,initValue:"50",unit:"℃",isDisabled:!1},render:n=>({components:{Slider:a},setup(){const i=m(20);return{args:n,sliderValue:i}},template:`
            <div style="display:flex; flex-direction: column;">
                <slider
                    themeColor="primary"
                    :min="args.min"
                    :max="args.max"
                    :step="args.step"
                    :initValue="args.initValue"
                    :unit="args.unit"
                    :isDisabled="args.isDisabled"
                    v-model="sliderValue"
                ></slider>
                <slider
                    themeColor="secondary"
                    :min="args.min"
                    :max="args.max"
                    :step="args.step"
                    :initValue="args.initValue"
                    :unit="args.unit"
                    :isDisabled="args.isDisabled"
                    v-model="sliderValue"
                ></slider>
                <slider
                    themeColor="tertiary"
                    :min="args.min"
                    :max="args.max"
                    :step="args.step"
                    :initValue="args.initValue"
                    :unit="args.unit"
                    :isDisabled="args.isDisabled"
                    v-model="sliderValue"
                ></slider>
                <slider
                    themeColor="success"
                    :min="args.min"
                    :max="args.max"
                    :step="args.step"
                    :initValue="args.initValue"
                    :unit="args.unit"
                    :isDisabled="args.isDisabled"
                    v-model="sliderValue"
                ></slider>
                <slider
                    themeColor="warning"
                    :min="args.min"
                    :max="args.max"
                    :step="args.step"
                    :initValue="args.initValue"
                    :unit="args.unit"
                    :isDisabled="args.isDisabled"
                    v-model="sliderValue"
                ></slider>
                <slider
                    themeColor="error"
                    :min="args.min"
                    :max="args.max"
                    :step="args.step"
                    :initValue="args.initValue"
                    :unit="args.unit"
                    :isDisabled="args.isDisabled"
                    v-model="sliderValue"
                ></slider>
                <slider
                    themeColor="info"
                    :min="args.min"
                    :max="args.max"
                    :step="args.step"
                    :initValue="args.initValue"
                    :unit="args.unit"
                    :isDisabled="args.isDisabled"
                    v-model="sliderValue"
                ></slider>
            </div>
            
            
            ModelValue: {{sliderValue}}
        `}),parameters:{controls:{}}};var r,l,t;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
  name: "主要項目",
  args: {
    themeColor: "primary",
    min: 0,
    max: 100,
    step: 1,
    initValue: "50",
    unit: "℃",
    isDisabled: false,
    className: ''
  },
  render: args => ({
    components: {
      Slider
    },
    setup() {
      const sliderValue = ref(20);
      return {
        args,
        sliderValue
      };
    },
    template: \`
            <slider
                :themeColor="args.themeColor"
                :min="args.min"
                :max="args.max"
                :step="args.step"
                :initValue="args.initValue"
                :unit="args.unit"
                :isDisabled="args.isDisabled"
                v-model="sliderValue"
                :className="sliderValue"
            ></slider>
            
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
}`,...(t=(l=e.parameters)==null?void 0:l.docs)==null?void 0:t.source}}};var d,o,u;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
  name: "主題色滑桿",
  args: {
    min: 0,
    max: 100,
    step: 1,
    initValue: "50",
    unit: "℃",
    isDisabled: false
  },
  render: args => ({
    components: {
      Slider
    },
    setup() {
      const sliderValue = ref(20);
      return {
        args,
        sliderValue
      };
    },
    template: \`
            <div style="display:flex; flex-direction: column;">
                <slider
                    themeColor="primary"
                    :min="args.min"
                    :max="args.max"
                    :step="args.step"
                    :initValue="args.initValue"
                    :unit="args.unit"
                    :isDisabled="args.isDisabled"
                    v-model="sliderValue"
                ></slider>
                <slider
                    themeColor="secondary"
                    :min="args.min"
                    :max="args.max"
                    :step="args.step"
                    :initValue="args.initValue"
                    :unit="args.unit"
                    :isDisabled="args.isDisabled"
                    v-model="sliderValue"
                ></slider>
                <slider
                    themeColor="tertiary"
                    :min="args.min"
                    :max="args.max"
                    :step="args.step"
                    :initValue="args.initValue"
                    :unit="args.unit"
                    :isDisabled="args.isDisabled"
                    v-model="sliderValue"
                ></slider>
                <slider
                    themeColor="success"
                    :min="args.min"
                    :max="args.max"
                    :step="args.step"
                    :initValue="args.initValue"
                    :unit="args.unit"
                    :isDisabled="args.isDisabled"
                    v-model="sliderValue"
                ></slider>
                <slider
                    themeColor="warning"
                    :min="args.min"
                    :max="args.max"
                    :step="args.step"
                    :initValue="args.initValue"
                    :unit="args.unit"
                    :isDisabled="args.isDisabled"
                    v-model="sliderValue"
                ></slider>
                <slider
                    themeColor="error"
                    :min="args.min"
                    :max="args.max"
                    :step="args.step"
                    :initValue="args.initValue"
                    :unit="args.unit"
                    :isDisabled="args.isDisabled"
                    v-model="sliderValue"
                ></slider>
                <slider
                    themeColor="info"
                    :min="args.min"
                    :max="args.max"
                    :step="args.step"
                    :initValue="args.initValue"
                    :unit="args.unit"
                    :isDisabled="args.isDisabled"
                    v-model="sliderValue"
                ></slider>
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
}`,...(u=(o=s.parameters)==null?void 0:o.docs)==null?void 0:u.source}}};const V=["SliderDefault","SliderColors"];export{s as SliderColors,e as SliderDefault,V as __namedExportsOrder,c as default};

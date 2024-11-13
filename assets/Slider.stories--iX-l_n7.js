import{_ as n}from"./Slider-DcUG72tu.js";import{e as g}from"./vue.esm-bundler-DHeteTnx.js";const V={title:"Design System/Slider",component:n,tags:["autodocs"],argTypes:{themeColor:{description:"主題顏色",control:{type:"select"},options:["primary","secondary","tertiary","success","warning","error","info"],table:{type:{summary:"primary | secondary | tertiary | success | warning | error | info"}}},isDisabled:{description:"是否禁用",control:{type:"boolean"}},min:{description:"最小值",control:{type:"number"}},max:{description:"最大值",control:{type:"number"}},step:{description:"步進值",control:{type:"number"}},initValue:{description:"初始值",control:{type:"number"}},unit:{description:"單位",control:{type:"text"}},className:{description:"客製化樣式",control:{type:"text"}}},parameters:{docs:{title:"Slider",description:{component:"Slider組件的呈現及說明。"}}}},r={name:"預設項目",args:{themeColor:"primary",isDisabled:!1,min:-100,max:100,step:1,initValue:"0",unit:"℃",className:""},render:i=>({components:{Slider:n},setup(){const s=g();return s.value=i.initValue,{args:i,sliderValue:s}},template:`
            <slider
                :themeColor="args.themeColor"
                :isDisabled="args.isDisabled"
                :min="args.min"
                :max="args.max"
                :step="args.step"
                :initValue="args.initValue"
                :unit="args.unit"
                v-model="sliderValue"
                :className="sliderValue"
            ></slider>
            
            ModelValue: {{sliderValue}}
        `}),parameters:{controls:{},docs:{source:{transform:(i,s)=>{const{args:e}=s;return["<slider",`  themeColor="${e.themeColor}"`,`  :isDisabled="${e.isDisabled}"`,`  :min="${e.min}"`,`  :max="${e.max}"`,`  :step="${e.step}"`,`  :initValue="${e.initValue}"`,`  unit="${e.unit}"`,'  v-model="sliderValue"',`  className="${e.className}"`,"></slider>"].join(`
`).trim()}}}}},a={name:"主題色彩",args:{min:0,max:100,step:1,unit:"℃",isDisabled:!1},render:i=>({components:{Slider:n},setup(){const s=g();return{args:i,sliderValue:s}},template:`
            <div style="display:flex; flex-direction: column;">
                <slider
                    themeColor="primary"
                    :isDisabled="args.isDisabled"
                    :min="args.min"
                    :max="args.max"
                    :step="args.step"
                    initValue="40"
                    :unit="args.unit"
                    v-model="sliderValue"
                ></slider>
                <slider
                    themeColor="secondary"
                    :isDisabled="args.isDisabled"
                    :min="args.min"
                    :max="args.max"
                    :step="args.step"
                    initValue="50"
                    :unit="args.unit"
                    v-model="sliderValue"
                ></slider>
                <slider
                    themeColor="tertiary"
                    :isDisabled="args.isDisabled"
                    :min="args.min"
                    :max="args.max"
                    :step="args.step"
                    initValue="60"
                    :unit="args.unit"
                    v-model="sliderValue"
                ></slider>
                <slider
                    themeColor="success"
                    :isDisabled="args.isDisabled"
                    :min="args.min"
                    :max="args.max"
                    :step="args.step"
                    initValue="70"
                    :unit="args.unit"
                    v-model="sliderValue"
                ></slider>
                <slider
                    themeColor="warning"
                    :isDisabled="args.isDisabled"
                    :min="args.min"
                    :max="args.max"
                    :step="args.step"
                    initValue="80"
                    :unit="args.unit"
                    v-model="sliderValue"
                ></slider>
                <slider
                    themeColor="error"
                    :isDisabled="args.isDisabled"
                    :min="args.min"
                    :max="args.max"
                    :step="args.step"
                    initValue="90"
                    :unit="args.unit"
                    v-model="sliderValue"
                ></slider>
                <slider
                    themeColor="info"
                    :isDisabled="args.isDisabled"
                    :min="args.min"
                    :max="args.max"
                    :step="args.step"
                    initValue="100"
                    :unit="args.unit"
                    v-model="sliderValue"
                ></slider>
            </div>
        `}),parameters:{controls:{},docs:{source:{transform:(i,s)=>{const{args:e}=s;return["<slider",'  themeColor="primary"',`  :isDisabled="${e.isDisabled}"`,`  :min="${e.min}"`,`  :max="${e.max}"`,`  :step="${e.step}"`,'  :initValue="40"',`  unit="${e.unit}"`,'  v-model="sliderValue"',"></slider>","<slider",'  themeColor="secondary"',`  :isDisabled="${e.isDisabled}"`,`  :min="${e.min}"`,`  :max="${e.max}"`,`  :step="${e.step}"`,'  :initValue="50"',`  unit="${e.unit}"`,'  v-model="sliderValue"',"></slider>","<slider",'  themeColor="tertiary"',`  :isDisabled="${e.isDisabled}"`,`  :min="${e.min}"`,`  :max="${e.max}"`,`  :step="${e.step}"`,'  :initValue="60"',`  unit="${e.unit}"`,'  v-model="sliderValue"',"></slider>","<slider",'  themeColor="success"',`  :isDisabled="${e.isDisabled}"`,`  :min="${e.min}"`,`  :max="${e.max}"`,`  :step="${e.step}"`,'  :initValue="70"',`  unit="${e.unit}"`,'  v-model="sliderValue"',"></slider>","<slider",'  themeColor="warning"',`  :isDisabled="${e.isDisabled}"`,`  :min="${e.min}"`,`  :max="${e.max}"`,`  :step="${e.step}"`,'  :initValue="80"',`  unit="${e.unit}"`,'  v-model="sliderValue"',"></slider>","<slider",'  themeColor="error"',`  :isDisabled="${e.isDisabled}"`,`  :min="${e.min}"`,`  :max="${e.max}"`,`  :step="${e.step}"`,'  :initValue="90"',`  unit="${e.unit}"`,'  v-model="sliderValue"',"></slider>","<slider",'  themeColor="info"',`  :isDisabled="${e.isDisabled}"`,`  :min="${e.min}"`,`  :max="${e.max}"`,`  :step="${e.step}"`,'  :initValue="100"',`  unit="${e.unit}"`,'  v-model="sliderValue"',"></slider>"].join(`
`).trim()}}}}};var l,t,m;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  name: "預設項目",
  args: {
    themeColor: "primary",
    isDisabled: false,
    min: -100,
    max: 100,
    step: 1,
    initValue: "0",
    unit: "℃",
    className: ''
  },
  render: args => ({
    components: {
      Slider
    },
    setup() {
      const sliderValue = ref();
      sliderValue.value = args.initValue;
      return {
        args,
        sliderValue
      };
    },
    template: \`
            <slider
                :themeColor="args.themeColor"
                :isDisabled="args.isDisabled"
                :min="args.min"
                :max="args.max"
                :step="args.step"
                :initValue="args.initValue"
                :unit="args.unit"
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
    },
    docs: {
      source: {
        transform: (src, storyContext) => {
          const {
            args
          } = storyContext;
          return ['<slider', \`  themeColor="\${args.themeColor}"\`, \`  :isDisabled="\${args.isDisabled}"\`, \`  :min="\${args.min}"\`, \`  :max="\${args.max}"\`, \`  :step="\${args.step}"\`, \`  :initValue="\${args.initValue}"\`, \`  unit="\${args.unit}"\`, \`  v-model="sliderValue"\`, \`  className="\${args.className}"\`, '></slider>'].join('\\n').trim();
        }
      }
    }
  }
}`,...(m=(t=r.parameters)==null?void 0:t.docs)==null?void 0:m.source}}};var d,o,u;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  name: "主題色彩",
  args: {
    min: 0,
    max: 100,
    step: 1,
    unit: "℃",
    isDisabled: false
  },
  render: args => ({
    components: {
      Slider
    },
    setup() {
      const sliderValue = ref();
      return {
        args,
        sliderValue
      };
    },
    template: \`
            <div style="display:flex; flex-direction: column;">
                <slider
                    themeColor="primary"
                    :isDisabled="args.isDisabled"
                    :min="args.min"
                    :max="args.max"
                    :step="args.step"
                    initValue="40"
                    :unit="args.unit"
                    v-model="sliderValue"
                ></slider>
                <slider
                    themeColor="secondary"
                    :isDisabled="args.isDisabled"
                    :min="args.min"
                    :max="args.max"
                    :step="args.step"
                    initValue="50"
                    :unit="args.unit"
                    v-model="sliderValue"
                ></slider>
                <slider
                    themeColor="tertiary"
                    :isDisabled="args.isDisabled"
                    :min="args.min"
                    :max="args.max"
                    :step="args.step"
                    initValue="60"
                    :unit="args.unit"
                    v-model="sliderValue"
                ></slider>
                <slider
                    themeColor="success"
                    :isDisabled="args.isDisabled"
                    :min="args.min"
                    :max="args.max"
                    :step="args.step"
                    initValue="70"
                    :unit="args.unit"
                    v-model="sliderValue"
                ></slider>
                <slider
                    themeColor="warning"
                    :isDisabled="args.isDisabled"
                    :min="args.min"
                    :max="args.max"
                    :step="args.step"
                    initValue="80"
                    :unit="args.unit"
                    v-model="sliderValue"
                ></slider>
                <slider
                    themeColor="error"
                    :isDisabled="args.isDisabled"
                    :min="args.min"
                    :max="args.max"
                    :step="args.step"
                    initValue="90"
                    :unit="args.unit"
                    v-model="sliderValue"
                ></slider>
                <slider
                    themeColor="info"
                    :isDisabled="args.isDisabled"
                    :min="args.min"
                    :max="args.max"
                    :step="args.step"
                    initValue="100"
                    :unit="args.unit"
                    v-model="sliderValue"
                ></slider>
            </div>
        \`
  }),
  // 控制 controls 中能控制的參數
  parameters: {
    controls: {
      // include: ['themeColor', 'label', 'value', 'name' ],
      // exclude:['range']
    },
    docs: {
      source: {
        transform: (src, storyContext) => {
          const {
            args
          } = storyContext;
          return ['<slider', \`  themeColor="primary"\`, \`  :isDisabled="\${args.isDisabled}"\`, \`  :min="\${args.min}"\`, \`  :max="\${args.max}"\`, \`  :step="\${args.step}"\`, \`  :initValue="40"\`, \`  unit="\${args.unit}"\`, \`  v-model="sliderValue"\`, '></slider>', '<slider', \`  themeColor="secondary"\`, \`  :isDisabled="\${args.isDisabled}"\`, \`  :min="\${args.min}"\`, \`  :max="\${args.max}"\`, \`  :step="\${args.step}"\`, \`  :initValue="50"\`, \`  unit="\${args.unit}"\`, \`  v-model="sliderValue"\`, '></slider>', '<slider', \`  themeColor="tertiary"\`, \`  :isDisabled="\${args.isDisabled}"\`, \`  :min="\${args.min}"\`, \`  :max="\${args.max}"\`, \`  :step="\${args.step}"\`, \`  :initValue="60"\`, \`  unit="\${args.unit}"\`, \`  v-model="sliderValue"\`, '></slider>', '<slider', \`  themeColor="success"\`, \`  :isDisabled="\${args.isDisabled}"\`, \`  :min="\${args.min}"\`, \`  :max="\${args.max}"\`, \`  :step="\${args.step}"\`, \`  :initValue="70"\`, \`  unit="\${args.unit}"\`, \`  v-model="sliderValue"\`, '></slider>', '<slider', \`  themeColor="warning"\`, \`  :isDisabled="\${args.isDisabled}"\`, \`  :min="\${args.min}"\`, \`  :max="\${args.max}"\`, \`  :step="\${args.step}"\`, \`  :initValue="80"\`, \`  unit="\${args.unit}"\`, \`  v-model="sliderValue"\`, '></slider>', '<slider', \`  themeColor="error"\`, \`  :isDisabled="\${args.isDisabled}"\`, \`  :min="\${args.min}"\`, \`  :max="\${args.max}"\`, \`  :step="\${args.step}"\`, \`  :initValue="90"\`, \`  unit="\${args.unit}"\`, \`  v-model="sliderValue"\`, '></slider>', '<slider', \`  themeColor="info"\`, \`  :isDisabled="\${args.isDisabled}"\`, \`  :min="\${args.min}"\`, \`  :max="\${args.max}"\`, \`  :step="\${args.step}"\`, \`  :initValue="100"\`, \`  unit="\${args.unit}"\`, \`  v-model="sliderValue"\`, '></slider>'].join('\\n').trim();
        }
      }
    }
  }
}`,...(u=(o=a.parameters)==null?void 0:o.docs)==null?void 0:u.source}}};const $=["SliderDefault","SliderColors"];export{a as SliderColors,r as SliderDefault,$ as __namedExportsOrder,V as default};

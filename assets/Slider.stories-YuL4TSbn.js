import{_ as n}from"./Slider-CEXAHqLN.js";import{e as g}from"./vue.esm-bundler-Dy0-1sXb.js";const $={title:"Design System/Slider",component:n,tags:["autodocs"],argTypes:{themeColor:{description:"主題顏色",control:{type:"select"},options:["primary","secondary","tertiary","success","warning","error","info"],table:{type:{summary:"primary | secondary | tertiary | success | warning | error | info"}}},min:{description:"最小值",control:{type:"number"}},max:{description:"最大值",control:{type:"number"}},step:{description:"步進值",control:{type:"number"}},initValue:{description:"初始值",control:{type:"number"}},unit:{description:"單位",control:{type:"text"}},isDisabled:{description:"是否禁用",control:{type:"boolean"}},className:{description:"客製化樣式",control:{type:"text"}},updateWidth:{table:{disable:!0}}},parameters:{docs:{title:"Slider",description:{component:"Slider組件的呈現及說明。"}}}},i={name:"預設項目",args:{themeColor:"primary",min:-100,max:100,step:1,initValue:0,unit:"℃",isDisabled:!1,className:""},render:e=>({components:{Slider:n},setup(){const a=g(e.initValue||0);return{args:e,sliderValue:a}},template:`
            <slider
                :themeColor="args.themeColor"
                :min="args.min"
                :max="args.max"
                :step="args.step"
                :initValue="args.initValue"
                :unit="args.unit"
                :isDisabled="args.isDisabled"
                :className="sliderValue"
                v-model="sliderValue"
            ></slider>
            
            ModelValue: {{sliderValue}}
        `}),parameters:{controls:{},docs:{source:{transform:(e,a)=>{const{args:s}=a;return["<slider",`  themeColor="${s.themeColor}"`,`  :isDisabled="${s.isDisabled}"`,`  :min="${s.min}"`,`  :max="${s.max}"`,`  :step="${s.step}"`,`  :initValue="${s.initValue}"`,`  unit="${s.unit}"`,`  className="${s.className}"`,'  v-model="sliderValue"',"></slider>"].join(`
`).trim()}}}}},r={name:"主題色彩",args:{min:0,max:100,step:1,initValue:50,unit:"℃",isDisabled:!1,className:""},render:e=>({components:{Slider:n},setup(){const a=g(e.initValue||0);return{args:e,sliderValue:a}},template:`
            <div style="display:flex; flex-direction: column;">
                <slider
                    themeColor="primary"
                    :min="args.min"
                    :max="args.max"
                    :step="args.step"
                    :initValue="40"
                    :unit="args.unit"
                    :isDisabled="args.isDisabled"
                    :className="sliderValue"
                ></slider>
                <slider
                    themeColor="secondary"
                    :min="args.min"
                    :max="args.max"
                    :step="args.step"
                    :initValue="50"
                    :unit="args.unit"
                    :isDisabled="args.isDisabled"
                    :className="sliderValue"
                ></slider>
                <slider
                    themeColor="tertiary"
                    :min="args.min"
                    :max="args.max"
                    :step="args.step"
                    :initValue="60"
                    :unit="args.unit"
                    :isDisabled="args.isDisabled"
                ></slider>
                <slider
                    themeColor="success"
                    :min="args.min"
                    :max="args.max"
                    :step="args.step"
                    :initValue="70"
                    :unit="args.unit"
                    :isDisabled="args.isDisabled"
                    :className="sliderValue"
                ></slider>
                <slider
                    themeColor="warning"
                    :min="args.min"
                    :max="args.max"
                    :step="args.step"
                    :initValue="80"
                    :unit="args.unit"
                    :isDisabled="args.isDisabled"
                    :className="sliderValue"
                ></slider>
                <slider
                    themeColor="error"
                    :min="args.min"
                    :max="args.max"
                    :step="args.step"
                    :initValue="90"
                    :unit="args.unit"
                    :isDisabled="args.isDisabled"
                    :className="sliderValue"
                ></slider>
                <slider
                    themeColor="info"
                    :min="args.min"
                    :max="args.max"
                    :step="args.step"
                    :initValue="100"
                    :unit="args.unit"
                    :isDisabled="args.isDisabled"
                    :className="sliderValue"
                ></slider>
            </div>
        `}),parameters:{controls:{},docs:{source:{transform:(e,a)=>{const{args:s}=a;return["<slider",'  themeColor="primary"',`  :min="${s.min}"`,`  :max="${s.max}"`,`  :step="${s.step}"`,'  :initValue="40"',`  unit="${s.unit}"`,`  :isDisabled="${s.isDisabled}"`,`  className="${s.className}"`,'  v-model="sliderValue"',"></slider>","<slider",'  themeColor="secondary"',`  :min="${s.min}"`,`  :max="${s.max}"`,`  :step="${s.step}"`,'  :initValue="50"',`  unit="${s.unit}"`,`  :isDisabled="${s.isDisabled}"`,`  className="${s.className}"`,'  v-model="sliderValue"',"></slider>","<slider",'  themeColor="tertiary"',`  :min="${s.min}"`,`  :max="${s.max}"`,`  :step="${s.step}"`,'  :initValue="60"',`  unit="${s.unit}"`,`  :isDisabled="${s.isDisabled}"`,`  className="${s.className}"`,'  v-model="sliderValue"',"></slider>","<slider",'  themeColor="success"',`  :min="${s.min}"`,`  :max="${s.max}"`,`  :step="${s.step}"`,'  :initValue="70"',`  unit="${s.unit}"`,`  :isDisabled="${s.isDisabled}"`,`  className="${s.className}"`,'  v-model="sliderValue"',"></slider>","<slider",'  themeColor="warning"',`  :min="${s.min}"`,`  :max="${s.max}"`,`  :step="${s.step}"`,'  :initValue="80"',`  unit="${s.unit}"`,`  :isDisabled="${s.isDisabled}"`,`  className="${s.className}"`,'  v-model="sliderValue"',"></slider>","<slider",'  themeColor="error"',`  :min="${s.min}"`,`  :max="${s.max}"`,`  :step="${s.step}"`,'  :initValue="90"',`  unit="${s.unit}"`,`  :isDisabled="${s.isDisabled}"`,`  className="${s.className}"`,'  v-model="sliderValue"',"></slider>","<slider",'  themeColor="info"',`  :min="${s.min}"`,`  :max="${s.max}"`,`  :step="${s.step}"`,'  :initValue="100"',`  unit="${s.unit}"`,`  :isDisabled="${s.isDisabled}"`,`  className="${s.className}"`,'  v-model="sliderValue"',"></slider>"].join(`
`).trim()}}}}};var l,t,m;i.parameters={...i.parameters,docs:{...(l=i.parameters)==null?void 0:l.docs,source:{originalSource:`{
  name: "預設項目",
  args: {
    themeColor: "primary",
    min: -100,
    max: 100,
    step: 1,
    initValue: 0,
    unit: "℃",
    isDisabled: false,
    className: ''
  },
  render: args => ({
    components: {
      Slider
    },
    setup() {
      const sliderValue = ref(args.initValue || 0);
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
                :className="sliderValue"
                v-model="sliderValue"
            ></slider>
            
            ModelValue: {{sliderValue}}
        \`
  }),
  // 控制 controls 中能控制的參數
  parameters: {
    controls: {
      // include: ['themeColor', 'label', 'value', 'name' ],
      // exclude:['updateWidth']
    },
    docs: {
      source: {
        transform: (src, storyContext) => {
          const {
            args
          } = storyContext;
          return ['<slider', \`  themeColor="\${args.themeColor}"\`, \`  :isDisabled="\${args.isDisabled}"\`, \`  :min="\${args.min}"\`, \`  :max="\${args.max}"\`, \`  :step="\${args.step}"\`, \`  :initValue="\${args.initValue}"\`, \`  unit="\${args.unit}"\`, \`  className="\${args.className}"\`, \`  v-model="sliderValue"\`, '></slider>'].join('\\n').trim();
        }
      }
    }
  }
}`,...(m=(t=i.parameters)==null?void 0:t.docs)==null?void 0:m.source}}};var d,o,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:'{\n  name: "主題色彩",\n  args: {\n    min: 0,\n    max: 100,\n    step: 1,\n    initValue: 50,\n    unit: "℃",\n    isDisabled: false,\n    className: \'\'\n  },\n  render: args => ({\n    components: {\n      Slider\n    },\n    setup() {\n      const sliderValue = ref(args.initValue || 0);\n      return {\n        args,\n        sliderValue\n      };\n    },\n    template: `\n            <div style="display:flex; flex-direction: column;">\n                <slider\n                    themeColor="primary"\n                    :min="args.min"\n                    :max="args.max"\n                    :step="args.step"\n                    :initValue="40"\n                    :unit="args.unit"\n                    :isDisabled="args.isDisabled"\n                    :className="sliderValue"\n                ></slider>\n                <slider\n                    themeColor="secondary"\n                    :min="args.min"\n                    :max="args.max"\n                    :step="args.step"\n                    :initValue="50"\n                    :unit="args.unit"\n                    :isDisabled="args.isDisabled"\n                    :className="sliderValue"\n                ></slider>\n                <slider\n                    themeColor="tertiary"\n                    :min="args.min"\n                    :max="args.max"\n                    :step="args.step"\n                    :initValue="60"\n                    :unit="args.unit"\n                    :isDisabled="args.isDisabled"\n                ></slider>\n                <slider\n                    themeColor="success"\n                    :min="args.min"\n                    :max="args.max"\n                    :step="args.step"\n                    :initValue="70"\n                    :unit="args.unit"\n                    :isDisabled="args.isDisabled"\n                    :className="sliderValue"\n                ></slider>\n                <slider\n                    themeColor="warning"\n                    :min="args.min"\n                    :max="args.max"\n                    :step="args.step"\n                    :initValue="80"\n                    :unit="args.unit"\n                    :isDisabled="args.isDisabled"\n                    :className="sliderValue"\n                ></slider>\n                <slider\n                    themeColor="error"\n                    :min="args.min"\n                    :max="args.max"\n                    :step="args.step"\n                    :initValue="90"\n                    :unit="args.unit"\n                    :isDisabled="args.isDisabled"\n                    :className="sliderValue"\n                ></slider>\n                <slider\n                    themeColor="info"\n                    :min="args.min"\n                    :max="args.max"\n                    :step="args.step"\n                    :initValue="100"\n                    :unit="args.unit"\n                    :isDisabled="args.isDisabled"\n                    :className="sliderValue"\n                ></slider>\n            </div>\n        `\n  }),\n  // 控制 controls 中能控制的參數\n  parameters: {\n    controls: {\n      // include: [\'themeColor\', \'label\', \'value\', \'name\' ],\n      // exclude:[\'range\']\n    },\n    docs: {\n      source: {\n        transform: (src, storyContext) => {\n          const {\n            args\n          } = storyContext;\n          return [\'<slider\', `  themeColor="primary"`, `  :min="${args.min}"`, `  :max="${args.max}"`, `  :step="${args.step}"`, `  :initValue="40"`, `  unit="${args.unit}"`, `  :isDisabled="${args.isDisabled}"`, `  className="${args.className}"`, `  v-model="sliderValue"`, \'></slider>\', \'<slider\', `  themeColor="secondary"`, `  :min="${args.min}"`, `  :max="${args.max}"`, `  :step="${args.step}"`, `  :initValue="50"`, `  unit="${args.unit}"`, `  :isDisabled="${args.isDisabled}"`, `  className="${args.className}"`, `  v-model="sliderValue"`, \'></slider>\', \'<slider\', `  themeColor="tertiary"`, `  :min="${args.min}"`, `  :max="${args.max}"`, `  :step="${args.step}"`, `  :initValue="60"`, `  unit="${args.unit}"`, `  :isDisabled="${args.isDisabled}"`, `  className="${args.className}"`, `  v-model="sliderValue"`, \'></slider>\', \'<slider\', `  themeColor="success"`, `  :min="${args.min}"`, `  :max="${args.max}"`, `  :step="${args.step}"`, `  :initValue="70"`, `  unit="${args.unit}"`, `  :isDisabled="${args.isDisabled}"`, `  className="${args.className}"`, `  v-model="sliderValue"`, \'></slider>\', \'<slider\', `  themeColor="warning"`, `  :min="${args.min}"`, `  :max="${args.max}"`, `  :step="${args.step}"`, `  :initValue="80"`, `  unit="${args.unit}"`, `  :isDisabled="${args.isDisabled}"`, `  className="${args.className}"`, `  v-model="sliderValue"`, \'></slider>\', \'<slider\', `  themeColor="error"`, `  :min="${args.min}"`, `  :max="${args.max}"`, `  :step="${args.step}"`, `  :initValue="90"`, `  unit="${args.unit}"`, `  :isDisabled="${args.isDisabled}"`, `  className="${args.className}"`, `  v-model="sliderValue"`, \'></slider>\', \'<slider\', `  themeColor="info"`, `  :min="${args.min}"`, `  :max="${args.max}"`, `  :step="${args.step}"`, `  :initValue="100"`, `  unit="${args.unit}"`, `  :isDisabled="${args.isDisabled}"`, `  className="${args.className}"`, `  v-model="sliderValue"`, \'></slider>\'].join(\'\\n\').trim();\n        }\n      }\n    }\n  }\n}',...(u=(o=r.parameters)==null?void 0:o.docs)==null?void 0:u.source}}};const V=["SliderDefault","SliderColors"];export{r as SliderColors,i as SliderDefault,V as __namedExportsOrder,$ as default};

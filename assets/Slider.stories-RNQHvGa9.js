import{_ as i}from"./Slider-D2IzzANb.js";import{h as t}from"./vue.esm-bundler-D0YZwI1O.js";const C={title:"Component/Slider",component:i,tags:["autodocs"],argTypes:{themeColor:{description:"主題顏色",control:{type:"select"},options:["primary","secondary","neutral","info","success","warning","error"],table:{type:{summary:"primary | secondary | neutral | info | success | warning | error"}}},min:{description:"最小值",control:{type:"number"}},max:{description:"最大值",control:{type:"number"}},step:{description:"步進值",control:{type:"number"}},initValue:{description:"初始值",control:{type:"number"}},label:{description:"單位",control:{type:"text"}},isShowRange:{description:"是否顯示範圍",control:{type:"boolean"}},isShowCurrValue:{description:"是否顯示目前值",control:{type:"boolean"}},isDisabled:{description:"是否禁用",control:{type:"boolean"}},className:{description:"客製化樣式",control:{type:"text"}},updateWidth:{table:{disable:!0}}},parameters:{docs:{title:"Slider",description:{component:"Slider組件的呈現及說明。"}}}},r={name:"預設項目",args:{themeColor:"primary",min:-100,max:100,step:1,initValue:0,label:"℃",isShowRange:!0,isShowCurrValue:!0,isDisabled:!1,className:""},render:s=>({components:{Slider:i},setup(){const a=t(s.initValue||0);return{args:s,sliderValue:a}},template:`
            <slider
                :themeColor="args.themeColor"
                :min="args.min"
                :max="args.max"
                :step="args.step"
                :initValue="args.initValue"
                :label="args.label"
                :isShowRange="args.isShowRange"
                :isShowCurrValue="args.isShowCurrValue"
                :isDisabled="args.isDisabled"
                :className="sliderValue"
                v-model="sliderValue"
            ></slider>
        `}),parameters:{controls:{},docs:{source:{transform:(s,a)=>{const{args:e}=a;return["<slider",`  :min="${e.min}"`,`  :max="${e.max}"`,`  :step="${e.step}"`,`  :initValue="${e.initValue}"`,`  label="${e.label}"`,`  :isShowRange="${e.isShowRange}"`,`  :isShowCurrValue="${e.isShowCurrValue}"`,`  :isDisabled="${e.isDisabled}"`,`  className="${e.className}"`,'  v-model="sliderValue"',"></slider>"].join(`
`).trim()}}}}},n={name:"顯示目前值",args:{themeColor:"primary",min:-100,max:100,step:1,initValue:0,label:"℃",isShowRange:!1,isDisabled:!1,className:""},render:s=>({components:{Slider:i},setup(){const a=t(s.initValue||0);return{args:s,sliderValue:a}},template:`
            <slider
                :themeColor="args.themeColor"
                :min="args.min"
                :max="args.max"
                :step="args.step"
                :initValue="args.initValue"
                :label="args.label"
                :isShowRange="args.isShowRange"
                :isShowCurrValue="true"
                :isDisabled="args.isDisabled"
                :className="sliderValue"
                v-model="sliderValue"
            ></slider>
        `}),parameters:{controls:{},docs:{source:{transform:(s,a)=>{const{args:e}=a;return["<slider",`  :min="${e.min}"`,`  :max="${e.max}"`,`  :step="${e.step}"`,`  :initValue="${e.initValue}"`,`  label="${e.label}"`,`  :isShowRange="${e.isShowRange}"`,'  :isShowCurrValue="true"',`  :isDisabled="${e.isDisabled}"`,`  className="${e.className}"`,'  v-model="sliderValue"',"></slider>"].join(`
`).trim()}}}}},l={name:"顯示範圍",args:{themeColor:"primary",min:-100,max:100,step:1,initValue:0,label:"℃",isShowCurrValue:!1,isDisabled:!1,className:""},render:s=>({components:{Slider:i},setup(){const a=t(s.initValue||0);return{args:s,sliderValue:a}},template:`
            <slider
                :themeColor="args.themeColor"
                :min="args.min"
                :max="args.max"
                :step="args.step"
                :initValue="args.initValue"
                :label="args.label"
                :isShowRange="true"
                :isShowCurrValue="args.isShowCurrValue"
                :isDisabled="args.isDisabled"
                :className="sliderValue"
                v-model="sliderValue"
            ></slider>
        `}),parameters:{controls:{},docs:{source:{transform:(s,a)=>{const{args:e}=a;return["<slider",`  :min="${e.min}"`,`  :max="${e.max}"`,`  :step="${e.step}"`,`  :initValue="${e.initValue}"`,`  label="${e.label}"`,'  :isShowRange="true"',`  :isShowCurrValue="${e.isShowCurrValue}"`,`  :isDisabled="${e.isDisabled}"`,`  className="${e.className}"`,'  v-model="sliderValue"',"></slider>"].join(`
`).trim()}}}}};var o,u,m;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
  name: "預設項目",
  args: {
    themeColor: 'primary',
    min: -100,
    max: 100,
    step: 1,
    initValue: 0,
    label: "℃",
    isShowRange: true,
    isShowCurrValue: true,
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
                :label="args.label"
                :isShowRange="args.isShowRange"
                :isShowCurrValue="args.isShowCurrValue"
                :isDisabled="args.isDisabled"
                :className="sliderValue"
                v-model="sliderValue"
            ></slider>
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
          return ['<slider', \`  :min="\${args.min}"\`, \`  :max="\${args.max}"\`, \`  :step="\${args.step}"\`, \`  :initValue="\${args.initValue}"\`, \`  label="\${args.label}"\`, \`  :isShowRange="\${args.isShowRange}"\`, \`  :isShowCurrValue="\${args.isShowCurrValue}"\`, \`  :isDisabled="\${args.isDisabled}"\`, \`  className="\${args.className}"\`, \`  v-model="sliderValue"\`, '></slider>'].join('\\n').trim();
        }
      }
    }
  }
}`,...(m=(u=r.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};var d,c,g;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
  name: "顯示目前值",
  args: {
    themeColor: 'primary',
    min: -100,
    max: 100,
    step: 1,
    initValue: 0,
    label: "℃",
    isShowRange: false,
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
                :label="args.label"
                :isShowRange="args.isShowRange"
                :isShowCurrValue="true"
                :isDisabled="args.isDisabled"
                :className="sliderValue"
                v-model="sliderValue"
            ></slider>
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
          return ['<slider', \`  :min="\${args.min}"\`, \`  :max="\${args.max}"\`, \`  :step="\${args.step}"\`, \`  :initValue="\${args.initValue}"\`, \`  label="\${args.label}"\`, \`  :isShowRange="\${args.isShowRange}"\`, \`  :isShowCurrValue="true"\`, \`  :isDisabled="\${args.isDisabled}"\`, \`  className="\${args.className}"\`, \`  v-model="sliderValue"\`, '></slider>'].join('\\n').trim();
        }
      }
    }
  }
}`,...(g=(c=n.parameters)==null?void 0:c.docs)==null?void 0:g.source}}};var p,V,h;l.parameters={...l.parameters,docs:{...(p=l.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: "顯示範圍",
  args: {
    themeColor: 'primary',
    min: -100,
    max: 100,
    step: 1,
    initValue: 0,
    label: "℃",
    isShowCurrValue: false,
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
                :label="args.label"
                :isShowRange="true"
                :isShowCurrValue="args.isShowCurrValue"
                :isDisabled="args.isDisabled"
                :className="sliderValue"
                v-model="sliderValue"
            ></slider>
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
          return ['<slider', \`  :min="\${args.min}"\`, \`  :max="\${args.max}"\`, \`  :step="\${args.step}"\`, \`  :initValue="\${args.initValue}"\`, \`  label="\${args.label}"\`, \`  :isShowRange="true"\`, \`  :isShowCurrValue="\${args.isShowCurrValue}"\`, \`  :isDisabled="\${args.isDisabled}"\`, \`  className="\${args.className}"\`, \`  v-model="sliderValue"\`, '></slider>'].join('\\n').trim();
        }
      }
    }
  }
}`,...(h=(V=l.parameters)==null?void 0:V.docs)==null?void 0:h.source}}};const w=["SliderDefault","SliderCurrent","SliderAround"];export{l as SliderAround,n as SliderCurrent,r as SliderDefault,w as __namedExportsOrder,C as default};

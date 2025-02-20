import{_ as o}from"./Slider-D7UN6fzl.js";import"./vue.esm-bundler-qCK_iSPY.js";const C={title:"Component/Slider",component:o,tags:["autodocs"],argTypes:{themeColor:{description:"主題顏色",control:{type:"select"},options:["primary","secondary","neutral","info","success","warning","error"],table:{type:{summary:"primary | secondary | neutral | info | success | warning | error"}}},min:{description:"最小值",control:{type:"number"}},max:{description:"最大值",control:{type:"number"}},step:{description:"步進值",control:{type:"number"}},label:{description:"單位",control:{type:"text"}},isShowRange:{description:"是否顯示範圍",control:{type:"boolean"}},isShowCurrValue:{description:"是否顯示目前值",control:{type:"boolean"}},isDisabled:{description:"是否禁用",control:{type:"boolean"}},className:{description:"客製化樣式",control:{type:"text"}},updateWidth:{table:{disable:!0}},modelValue:{description:"輸入值",control:{type:"number"},table:{type:{summary:"number"},category:"v-model"}}},parameters:{docs:{title:"Slider",description:{component:"Slider組件的呈現及說明。"}}}},r={name:"預設項目",args:{themeColor:"primary",min:-100,max:100,step:1,label:"℃",isShowRange:!0,isShowCurrValue:!0,isDisabled:!1,className:"",modelValue:8},render:s=>({components:{Slider:o},setup(){return{args:s}},template:`
            <slider
                :themeColor="args.themeColor"
                :min="args.min"
                :max="args.max"
                :step="args.step"
                :label="args.label"
                :isShowRange="args.isShowRange"
                :isShowCurrValue="args.isShowCurrValue"
                :isDisabled="args.isDisabled"
                :className="args.className"
                v-model="args.modelValue"
            ></slider>
        `}),parameters:{controls:{},docs:{source:{transform:(s,a)=>{const{args:e}=a;return["<slider",`  :min="${e.min}"`,`  :max="${e.max}"`,`  :step="${e.step}"`,`  label="${e.label}"`,`  :isShowRange="${e.isShowRange}"`,`  :isShowCurrValue="${e.isShowCurrValue}"`,`  :isDisabled="${e.isDisabled}"`,`  className="${e.className}"`,'  v-model="modelValue"',"></slider>"].join(`
`).trim()}}}}},n={name:"顯示目前值",args:{themeColor:"primary",min:-100,max:100,step:1,label:"℃",isShowRange:!1,isDisabled:!1,className:"",modelValue:8},render:s=>({components:{Slider:o},setup(){return{args:s}},template:`
            <slider
                :themeColor="args.themeColor"
                :min="args.min"
                :max="args.max"
                :step="args.step"
                :label="args.label"
                :isShowRange="args.isShowRange"
                :isShowCurrValue="true"
                :isDisabled="args.isDisabled"
                :className="args.className"
                v-model="args.modelValue"
            ></slider>
        `}),parameters:{controls:{},docs:{source:{transform:(s,a)=>{const{args:e}=a;return["<slider",`  :min="${e.min}"`,`  :max="${e.max}"`,`  :step="${e.step}"`,`  label="${e.label}"`,`  :isShowRange="${e.isShowRange}"`,'  :isShowCurrValue="true"',`  :isDisabled="${e.isDisabled}"`,`  className="${e.className}"`,'  v-model="modelValue"',"></slider>"].join(`
`).trim()}}}}},l={name:"顯示範圍",args:{themeColor:"primary",min:-100,max:100,step:1,label:"℃",isShowCurrValue:!1,isDisabled:!1,className:"",modelValue:8},render:s=>({components:{Slider:o},setup(){return{args:s}},template:`
            <slider
                :themeColor="args.themeColor"
                :min="args.min"
                :max="args.max"
                :step="args.step"
                :label="args.label"
                :isShowRange="true"
                :isShowCurrValue="args.isShowCurrValue"
                :isDisabled="args.isDisabled"
                :className="args.className"
                v-model="args.modelValue"
            ></slider>
        `}),parameters:{controls:{},docs:{source:{transform:(s,a)=>{const{args:e}=a;return["<slider",`  :min="${e.min}"`,`  :max="${e.max}"`,`  :step="${e.step}"`,`  label="${e.label}"`,'  :isShowRange="true"',`  :isShowCurrValue="${e.isShowCurrValue}"`,`  :isDisabled="${e.isDisabled}"`,`  className="${e.className}"`,'  v-model="modelValue"',"></slider>"].join(`
`).trim()}}}}};var i,t,m;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  name: "預設項目",
  args: {
    themeColor: 'primary',
    min: -100,
    max: 100,
    step: 1,
    // initValue: 8,
    label: "℃",
    isShowRange: true,
    isShowCurrValue: true,
    isDisabled: false,
    className: '',
    modelValue: 8
  },
  render: args => ({
    components: {
      Slider
    },
    setup() {
      return {
        args
      };
    },
    template: \`
            <slider
                :themeColor="args.themeColor"
                :min="args.min"
                :max="args.max"
                :step="args.step"
                :label="args.label"
                :isShowRange="args.isShowRange"
                :isShowCurrValue="args.isShowCurrValue"
                :isDisabled="args.isDisabled"
                :className="args.className"
                v-model="args.modelValue"
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
          return ['<slider', \`  :min="\${args.min}"\`, \`  :max="\${args.max}"\`, \`  :step="\${args.step}"\`, \`  label="\${args.label}"\`, \`  :isShowRange="\${args.isShowRange}"\`, \`  :isShowCurrValue="\${args.isShowCurrValue}"\`, \`  :isDisabled="\${args.isDisabled}"\`, \`  className="\${args.className}"\`, \`  v-model="modelValue"\`, '></slider>'].join('\\n').trim();
        }
      }
    }
  }
}`,...(m=(t=r.parameters)==null?void 0:t.docs)==null?void 0:m.source}}};var u,d,c;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
  name: "顯示目前值",
  args: {
    themeColor: 'primary',
    min: -100,
    max: 100,
    step: 1,
    label: "℃",
    isShowRange: false,
    isDisabled: false,
    className: '',
    modelValue: 8
  },
  render: args => ({
    components: {
      Slider
    },
    setup() {
      return {
        args
      };
    },
    template: \`
            <slider
                :themeColor="args.themeColor"
                :min="args.min"
                :max="args.max"
                :step="args.step"
                :label="args.label"
                :isShowRange="args.isShowRange"
                :isShowCurrValue="true"
                :isDisabled="args.isDisabled"
                :className="args.className"
                v-model="args.modelValue"
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
          return ['<slider', \`  :min="\${args.min}"\`, \`  :max="\${args.max}"\`, \`  :step="\${args.step}"\`, \`  label="\${args.label}"\`, \`  :isShowRange="\${args.isShowRange}"\`, \`  :isShowCurrValue="true"\`, \`  :isDisabled="\${args.isDisabled}"\`, \`  className="\${args.className}"\`, \`  v-model="modelValue"\`, '></slider>'].join('\\n').trim();
        }
      }
    }
  }
}`,...(c=(d=n.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};var g,p,b;l.parameters={...l.parameters,docs:{...(g=l.parameters)==null?void 0:g.docs,source:{originalSource:`{
  name: "顯示範圍",
  args: {
    themeColor: 'primary',
    min: -100,
    max: 100,
    step: 1,
    label: "℃",
    isShowCurrValue: false,
    isDisabled: false,
    className: '',
    modelValue: 8
  },
  render: args => ({
    components: {
      Slider
    },
    setup() {
      return {
        args
      };
    },
    template: \`
            <slider
                :themeColor="args.themeColor"
                :min="args.min"
                :max="args.max"
                :step="args.step"
                :label="args.label"
                :isShowRange="true"
                :isShowCurrValue="args.isShowCurrValue"
                :isDisabled="args.isDisabled"
                :className="args.className"
                v-model="args.modelValue"
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
          return ['<slider', \`  :min="\${args.min}"\`, \`  :max="\${args.max}"\`, \`  :step="\${args.step}"\`, \`  label="\${args.label}"\`, \`  :isShowRange="true"\`, \`  :isShowCurrValue="\${args.isShowCurrValue}"\`, \`  :isDisabled="\${args.isDisabled}"\`, \`  className="\${args.className}"\`, \`  v-model="modelValue"\`, '></slider>'].join('\\n').trim();
        }
      }
    }
  }
}`,...(b=(p=l.parameters)==null?void 0:p.docs)==null?void 0:b.source}}};const w=["SliderDefault","SliderCurrent","SliderAround"];export{l as SliderAround,n as SliderCurrent,r as SliderDefault,w as __namedExportsOrder,C as default};

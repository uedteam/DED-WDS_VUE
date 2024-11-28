import{_ as r}from"./Slider-wacjFG91.js";import{e as g}from"./vue.esm-bundler-BHaSr8M7.js";const p={title:"Design System/Slider",component:r,tags:["autodocs"],argTypes:{themeColor:{description:"主題顏色",control:{type:"select"},options:["primary","secondary","tertiary","success","warning","error","info"],table:{type:{summary:"primary | secondary | tertiary | success | warning | error | info"}}},min:{description:"最小值",control:{type:"number"}},max:{description:"最大值",control:{type:"number"}},step:{description:"步進值",control:{type:"number"}},initValue:{description:"初始值",control:{type:"number"}},label:{description:"單位",control:{type:"text"}},isDisabled:{description:"是否禁用",control:{type:"boolean"}},className:{description:"客製化樣式",control:{type:"text"}},updateWidth:{table:{disable:!0}}},parameters:{docs:{title:"Slider",description:{component:"Slider組件的呈現及說明。"}}}},l={name:"預設項目",args:{themeColor:"primary",min:-100,max:100,step:1,initValue:0,label:"℃",isDisabled:!1,className:""},render:s=>({components:{Slider:r},setup(){const a=g(s.initValue||0);return{args:s,sliderValue:a}},template:`
            <slider
                :themeColor="args.themeColor"
                :min="args.min"
                :max="args.max"
                :step="args.step"
                :initValue="args.initValue"
                :label="args.label"
                :isDisabled="args.isDisabled"
                :className="sliderValue"
                v-model="sliderValue"
            ></slider>
        `}),parameters:{controls:{},docs:{source:{transform:(s,a)=>{const{args:e}=a;return["<slider",`  themeColor="${e.themeColor}"`,`  :isDisabled="${e.isDisabled}"`,`  :min="${e.min}"`,`  :max="${e.max}"`,`  :step="${e.step}"`,`  :initValue="${e.initValue}"`,`  label="${e.label}"`,`  className="${e.className}"`,'  v-model="sliderValue"',"></slider>"].join(`
`).trim()}}}}},i={name:"主題色彩",args:{min:0,max:100,step:1,initValue:50,label:"℃",isDisabled:!1,className:""},render:s=>({components:{Slider:r},setup(){const a=g(s.initValue||0);return{args:s,sliderValue:a}},template:`
            <div style="display:flex; flex-direction: column;">
                <slider
                    themeColor="primary"
                    :min="args.min"
                    :max="args.max"
                    :step="args.step"
                    :initValue="40"
                    :label="args.label"
                    :isDisabled="args.isDisabled"
                    :className="sliderValue"
                ></slider>
                <slider
                    themeColor="secondary"
                    :min="args.min"
                    :max="args.max"
                    :step="args.step"
                    :initValue="50"
                    :label="args.label"
                    :isDisabled="args.isDisabled"
                    :className="sliderValue"
                ></slider>
                <slider
                    themeColor="tertiary"
                    :min="args.min"
                    :max="args.max"
                    :step="args.step"
                    :initValue="60"
                    :label="args.label"
                    :isDisabled="args.isDisabled"
                ></slider>
                <slider
                    themeColor="success"
                    :min="args.min"
                    :max="args.max"
                    :step="args.step"
                    :initValue="70"
                    :label="args.label"
                    :isDisabled="args.isDisabled"
                    :className="sliderValue"
                ></slider>
                <slider
                    themeColor="warning"
                    :min="args.min"
                    :max="args.max"
                    :step="args.step"
                    :initValue="80"
                    :label="args.label"
                    :isDisabled="args.isDisabled"
                    :className="sliderValue"
                ></slider>
                <slider
                    themeColor="error"
                    :min="args.min"
                    :max="args.max"
                    :step="args.step"
                    :initValue="90"
                    :label="args.label"
                    :isDisabled="args.isDisabled"
                    :className="sliderValue"
                ></slider>
                <slider
                    themeColor="info"
                    :min="args.min"
                    :max="args.max"
                    :step="args.step"
                    :initValue="100"
                    :label="args.label"
                    :isDisabled="args.isDisabled"
                    :className="sliderValue"
                ></slider>
            </div>
        `}),parameters:{controls:{},docs:{source:{transform:(s,a)=>{const{args:e}=a;return["<slider",'  themeColor="primary"',`  :min="${e.min}"`,`  :max="${e.max}"`,`  :step="${e.step}"`,'  :initValue="40"',`  label="${e.label}"`,`  :isDisabled="${e.isDisabled}"`,`  className="${e.className}"`,'  v-model="sliderValue"',"></slider>","<slider",'  themeColor="secondary"',`  :min="${e.min}"`,`  :max="${e.max}"`,`  :step="${e.step}"`,'  :initValue="50"',`  label="${e.label}"`,`  :isDisabled="${e.isDisabled}"`,`  className="${e.className}"`,'  v-model="sliderValue"',"></slider>","<slider",'  themeColor="tertiary"',`  :min="${e.min}"`,`  :max="${e.max}"`,`  :step="${e.step}"`,'  :initValue="60"',`  label="${e.label}"`,`  :isDisabled="${e.isDisabled}"`,`  className="${e.className}"`,'  v-model="sliderValue"',"></slider>","<slider",'  themeColor="success"',`  :min="${e.min}"`,`  :max="${e.max}"`,`  :step="${e.step}"`,'  :initValue="70"',`  label="${e.label}"`,`  :isDisabled="${e.isDisabled}"`,`  className="${e.className}"`,'  v-model="sliderValue"',"></slider>","<slider",'  themeColor="warning"',`  :min="${e.min}"`,`  :max="${e.max}"`,`  :step="${e.step}"`,'  :initValue="80"',`  label="${e.label}"`,`  :isDisabled="${e.isDisabled}"`,`  className="${e.className}"`,'  v-model="sliderValue"',"></slider>","<slider",'  themeColor="error"',`  :min="${e.min}"`,`  :max="${e.max}"`,`  :step="${e.step}"`,'  :initValue="90"',`  label="${e.label}"`,`  :isDisabled="${e.isDisabled}"`,`  className="${e.className}"`,'  v-model="sliderValue"',"></slider>","<slider",'  themeColor="info"',`  :min="${e.min}"`,`  :max="${e.max}"`,`  :step="${e.step}"`,'  :initValue="100"',`  label="${e.label}"`,`  :isDisabled="${e.isDisabled}"`,`  className="${e.className}"`,'  v-model="sliderValue"',"></slider>"].join(`
`).trim()}}}}};var n,m,t;l.parameters={...l.parameters,docs:{...(n=l.parameters)==null?void 0:n.docs,source:{originalSource:`{
  name: "預設項目",
  args: {
    themeColor: "primary",
    min: -100,
    max: 100,
    step: 1,
    initValue: 0,
    label: "℃",
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
          return ['<slider', \`  themeColor="\${args.themeColor}"\`, \`  :isDisabled="\${args.isDisabled}"\`, \`  :min="\${args.min}"\`, \`  :max="\${args.max}"\`, \`  :step="\${args.step}"\`, \`  :initValue="\${args.initValue}"\`, \`  label="\${args.label}"\`, \`  className="\${args.className}"\`, \`  v-model="sliderValue"\`, '></slider>'].join('\\n').trim();
        }
      }
    }
  }
}`,...(t=(m=l.parameters)==null?void 0:m.docs)==null?void 0:t.source}}};var d,o,u;i.parameters={...i.parameters,docs:{...(d=i.parameters)==null?void 0:d.docs,source:{originalSource:'{\n  name: "主題色彩",\n  args: {\n    min: 0,\n    max: 100,\n    step: 1,\n    initValue: 50,\n    label: "℃",\n    isDisabled: false,\n    className: \'\'\n  },\n  render: args => ({\n    components: {\n      Slider\n    },\n    setup() {\n      const sliderValue = ref(args.initValue || 0);\n      return {\n        args,\n        sliderValue\n      };\n    },\n    template: `\n            <div style="display:flex; flex-direction: column;">\n                <slider\n                    themeColor="primary"\n                    :min="args.min"\n                    :max="args.max"\n                    :step="args.step"\n                    :initValue="40"\n                    :label="args.label"\n                    :isDisabled="args.isDisabled"\n                    :className="sliderValue"\n                ></slider>\n                <slider\n                    themeColor="secondary"\n                    :min="args.min"\n                    :max="args.max"\n                    :step="args.step"\n                    :initValue="50"\n                    :label="args.label"\n                    :isDisabled="args.isDisabled"\n                    :className="sliderValue"\n                ></slider>\n                <slider\n                    themeColor="tertiary"\n                    :min="args.min"\n                    :max="args.max"\n                    :step="args.step"\n                    :initValue="60"\n                    :label="args.label"\n                    :isDisabled="args.isDisabled"\n                ></slider>\n                <slider\n                    themeColor="success"\n                    :min="args.min"\n                    :max="args.max"\n                    :step="args.step"\n                    :initValue="70"\n                    :label="args.label"\n                    :isDisabled="args.isDisabled"\n                    :className="sliderValue"\n                ></slider>\n                <slider\n                    themeColor="warning"\n                    :min="args.min"\n                    :max="args.max"\n                    :step="args.step"\n                    :initValue="80"\n                    :label="args.label"\n                    :isDisabled="args.isDisabled"\n                    :className="sliderValue"\n                ></slider>\n                <slider\n                    themeColor="error"\n                    :min="args.min"\n                    :max="args.max"\n                    :step="args.step"\n                    :initValue="90"\n                    :label="args.label"\n                    :isDisabled="args.isDisabled"\n                    :className="sliderValue"\n                ></slider>\n                <slider\n                    themeColor="info"\n                    :min="args.min"\n                    :max="args.max"\n                    :step="args.step"\n                    :initValue="100"\n                    :label="args.label"\n                    :isDisabled="args.isDisabled"\n                    :className="sliderValue"\n                ></slider>\n            </div>\n        `\n  }),\n  // 控制 controls 中能控制的參數\n  parameters: {\n    controls: {\n      // include: [\'themeColor\', \'label\', \'value\', \'name\' ],\n      // exclude:[\'range\']\n    },\n    docs: {\n      source: {\n        transform: (src, storyContext) => {\n          const {\n            args\n          } = storyContext;\n          return [\'<slider\', `  themeColor="primary"`, `  :min="${args.min}"`, `  :max="${args.max}"`, `  :step="${args.step}"`, `  :initValue="40"`, `  label="${args.label}"`, `  :isDisabled="${args.isDisabled}"`, `  className="${args.className}"`, `  v-model="sliderValue"`, \'></slider>\', \'<slider\', `  themeColor="secondary"`, `  :min="${args.min}"`, `  :max="${args.max}"`, `  :step="${args.step}"`, `  :initValue="50"`, `  label="${args.label}"`, `  :isDisabled="${args.isDisabled}"`, `  className="${args.className}"`, `  v-model="sliderValue"`, \'></slider>\', \'<slider\', `  themeColor="tertiary"`, `  :min="${args.min}"`, `  :max="${args.max}"`, `  :step="${args.step}"`, `  :initValue="60"`, `  label="${args.label}"`, `  :isDisabled="${args.isDisabled}"`, `  className="${args.className}"`, `  v-model="sliderValue"`, \'></slider>\', \'<slider\', `  themeColor="success"`, `  :min="${args.min}"`, `  :max="${args.max}"`, `  :step="${args.step}"`, `  :initValue="70"`, `  label="${args.label}"`, `  :isDisabled="${args.isDisabled}"`, `  className="${args.className}"`, `  v-model="sliderValue"`, \'></slider>\', \'<slider\', `  themeColor="warning"`, `  :min="${args.min}"`, `  :max="${args.max}"`, `  :step="${args.step}"`, `  :initValue="80"`, `  label="${args.label}"`, `  :isDisabled="${args.isDisabled}"`, `  className="${args.className}"`, `  v-model="sliderValue"`, \'></slider>\', \'<slider\', `  themeColor="error"`, `  :min="${args.min}"`, `  :max="${args.max}"`, `  :step="${args.step}"`, `  :initValue="90"`, `  label="${args.label}"`, `  :isDisabled="${args.isDisabled}"`, `  className="${args.className}"`, `  v-model="sliderValue"`, \'></slider>\', \'<slider\', `  themeColor="info"`, `  :min="${args.min}"`, `  :max="${args.max}"`, `  :step="${args.step}"`, `  :initValue="100"`, `  label="${args.label}"`, `  :isDisabled="${args.isDisabled}"`, `  className="${args.className}"`, `  v-model="sliderValue"`, \'></slider>\'].join(\'\\n\').trim();\n        }\n      }\n    }\n  }\n}',...(u=(o=i.parameters)==null?void 0:o.docs)==null?void 0:u.source}}};const $=["SliderDefault","SliderColors"];export{i as SliderColors,l as SliderDefault,$ as __namedExportsOrder,p as default};

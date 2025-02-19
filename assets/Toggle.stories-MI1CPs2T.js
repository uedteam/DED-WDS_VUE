import{m as u,u as k,c as C,a as n,n as r,t as L,J as p,o as D}from"./vue.esm-bundler-qCK_iSPY.js";const o={__name:"Toggle",props:u({themeColor:{type:String,default:"primary",validator:s=>["primary","secondary","neutral","info","success","warning","error"].includes(s)},checkLabel:{type:String,default:"on"},unCheckLabel:{type:String,default:"off"},isDisabled:{type:Boolean,default:!1},className:{type:String,default:""}},{modelValue:{type:Boolean,default:!1},modelModifiers:{}}),emits:["update:modelValue"],setup(s){const a=k(s,"modelValue"),e=s,h=()=>{a.value=!a.value};return($,T)=>(D(),C("div",{class:r({"ded-toggle":!0,[`ded-toggle-${e.themeColor}`]:e.themeColor,"ded-toggle-on":a.value,"ded-toggle-off":!a.value,"ded-toggle-disabled":e.isDisabled,[e.className]:!!e.className}),onClick:p(h,["prevent"])},[n("div",{class:r(["ded-toggle-thumb",{"ded-toggle-thumb-on":a.value,"ded-toggle-thumb-off":!a.value,"ded-toggle-thumb-disabled":e.isDisabled}])},null,2),n("label",{class:r(["ded-toggle-label",{"ded-toggle-label-on":a.value,"ded-toggle-label-off":!a.value,"ded-toggle-label-disabled":e.isDisabled}])},L(a.value===!0?e.checkLabel:e.unCheckLabel),3)],2))}};o.__docgenInfo={exportName:"default",displayName:"Toggle",description:"",tags:{},props:[{name:"themeColor",type:{name:"string"},defaultValue:{func:!1,value:'"primary"'},values:["primary","secondary","neutral","info","success","warning","error"]},{name:"checkLabel",type:{name:"string"},defaultValue:{func:!1,value:'"on"'}},{name:"unCheckLabel",type:{name:"string"},defaultValue:{func:!1,value:'"off"'}},{name:"isDisabled",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"className",type:{name:"string"},defaultValue:{func:!1,value:'""'}}],sourceFiles:["/home/runner/work/DED-WDS_VUE/DED-WDS_VUE/libs/src/ui/element/Toggle/Toggle.vue"]};const f={title:"Component/Toggle",component:o,tags:["autodocs"],argTypes:{themeColor:{description:"主題顏色",control:{type:"select"},options:["primary","secondary","neutral","info","success","warning","error"],table:{type:{summary:"primary | secondary | neutral | info | success | warning | error"}}},checkLabel:{description:"開啟文字",control:{type:"text"}},unCheckLabel:{description:"關閉文字",control:{type:"text"}},isDisabled:{description:"是否禁用",control:{type:"boolean"}},className:{description:"客製化樣式",control:{type:"text"}},modelValue:{description:"是否開啟",control:{type:"boolean"},table:{type:{summary:"boolean"},category:"v-model"}}},parameters:{docs:{title:"Toggle",description:{component:"Toggle 組件的呈現及說明。"}}}},l={name:"預設項目",args:{themeColor:"success",checkLabel:"on",unCheckLabel:"off",isDisabled:!1,className:"",modelValue:!0},render:s=>({components:{Toggle:o},setup(){return{args:s}},template:`<div style="display:flex; gap: 16px">
                <Toggle
                    :themeColor="args.themeColor"
                    :checkLabel="args.checkLabel"
                    :unCheckLabel="args.unCheckLabel"
                    :isDisabled="args.isDisabled"
                    :className="args.className" 
                    v-model="args.modelValue">
                </Toggle>
            </div>
            `}),parameters:{controls:{exclude:["toggleIsChecked"]},docs:{source:{transform:(s,a)=>{const{args:e}=a;return["<Toggle",`  themeColor="${e.themeColor}"`,`  checkLabel="${e.checkLabel}"`,`  unCheckLabel="${e.unCheckLabel}"`,`  :isChecked="${e.isChecked}"`,`  :isDisabled="${e.isDisabled}"`,`  className="${e.className}"`,"></Toggle>"].join(`
`).trim()}}}}},c={name:"主題色彩",args:{checkLabel:"on",unCheckLabel:"off",isDisabled:!1,className:"",modelValue:!0},render:s=>({components:{Toggle:o},setup(){return{args:s}},template:`<div style="display:flex; gap: 16px">
                <Toggle
                    themeColor="primary"
                    :checkLabel="args.checkLabel"
                    :unCheckLabel="args.unCheckLabel"
                    :isDisabled="args.isDisabled"
                    :className="args.className"
                    v-model="args.modelValue">
                </Toggle>
                <Toggle
                    themeColor="secondary"
                    :checkLabel="args.checkLabel"
                    :unCheckLabel="args.unCheckLabel"
                    :isDisabled="args.isDisabled"
                    :className="args.className"
                    v-model="args.modelValue">
                </Toggle>
                <Toggle
                    themeColor="neutral"
                    :checkLabel="args.checkLabel"
                    :unCheckLabel="args.unCheckLabel"
                    :isDisabled="args.isDisabled"
                    :className="args.className"
                    v-model="args.modelValue">
                </Toggle>
                <Toggle
                    themeColor="info"
                    :checkLabel="args.checkLabel"
                    :unCheckLabel="args.unCheckLabel"
                    :isDisabled="args.isDisabled"
                    :className="args.className"
                    v-model="args.modelValue">
                </Toggle>
                <Toggle
                    themeColor="success"
                    :checkLabel="args.checkLabel"
                    :unCheckLabel="args.unCheckLabel"
                    :isDisabled="args.isDisabled"
                    :className="args.className"
                    v-model="args.modelValue">
                </Toggle>
                <Toggle
                    themeColor="warning"
                    :checkLabel="args.checkLabel"
                    :unCheckLabel="args.unCheckLabel"
                    :isDisabled="args.isDisabled"
                    :className="args.className"
                    v-model="args.modelValue">
                </Toggle>
                <Toggle
                    themeColor="error"
                    :checkLabel="args.checkLabel"
                    :unCheckLabel="args.unCheckLabel"
                    :isDisabled="args.isDisabled"
                    :className="args.className"
                    v-model="args.modelValue">
                </Toggle>
            </div>
            `}),parameters:{controls:{exclude:["themeColor"]},docs:{source:{transform:(s,a)=>{const{args:e}=a;return["<Toggle",'  themeColor="primary"',`  checkLabel="${e.checkLabel}"`,`  unCheckLabel="${e.unCheckLabel}"`,`  :isChecked="${e.isChecked}"`,`  :isDisabled="${e.isDisabled}"`,`  className="${e.className}"`,"></Toggle>","<Toggle",'  themeColor="secondary"',`  checkLabel="${e.checkLabel}"`,`  unCheckLabel="${e.unCheckLabel}"`,`  :isChecked="${e.isChecked}"`,`  :isDisabled="${e.isDisabled}"`,`  className="${e.className}"`,"></Toggle>","<Toggle",'  themeColor="tertiary"',`  checkLabel="${e.checkLabel}"`,`  unCheckLabel="${e.unCheckLabel}"`,`  :isChecked="${e.isChecked}"`,`  :isDisabled="${e.isDisabled}"`,`  className="${e.className}"`,"></Toggle>","<Toggle",'  themeColor="success"',`  checkLabel="${e.checkLabel}"`,`  unCheckLabel="${e.unCheckLabel}"`,`  :isChecked="${e.isChecked}"`,`  :isDisabled="${e.isDisabled}"`,`  className="${e.className}"`,"></Toggle>","<Toggle",'  themeColor="warning"',`  checkLabel="${e.checkLabel}"`,`  unCheckLabel="${e.unCheckLabel}"`,`  :isChecked="${e.isChecked}"`,`  :isDisabled="${e.isDisabled}"`,`  className="${e.className}"`,"></Toggle>","<Toggle",'  themeColor="error"',`  checkLabel="${e.checkLabel}"`,`  unCheckLabel="${e.unCheckLabel}"`,`  :isChecked="${e.isChecked}"`,`  :isDisabled="${e.isDisabled}"`,`  className="${e.className}"`,"></Toggle>","<Toggle",'  themeColor="info"',`  checkLabel="${e.checkLabel}"`,`  unCheckLabel="${e.unCheckLabel}"`,`  :isChecked="${e.isChecked}"`,`  :isDisabled="${e.isDisabled}"`,`  className="${e.className}"`,"></Toggle>"].join(`
`).trim()}}}}};var g,i,d;l.parameters={...l.parameters,docs:{...(g=l.parameters)==null?void 0:g.docs,source:{originalSource:`{
  name: '預設項目',
  args: {
    themeColor: 'success',
    checkLabel: 'on',
    unCheckLabel: 'off',
    isDisabled: false,
    className: '',
    modelValue: true
  },
  render: args => ({
    components: {
      Toggle
    },
    setup() {
      return {
        args
      };
    },
    template: \`<div style="display:flex; gap: 16px">
                <Toggle
                    :themeColor="args.themeColor"
                    :checkLabel="args.checkLabel"
                    :unCheckLabel="args.unCheckLabel"
                    :isDisabled="args.isDisabled"
                    :className="args.className" 
                    v-model="args.modelValue">
                </Toggle>
            </div>
            \`
  }),
  // 控制 controls 中能控制的參數
  parameters: {
    controls: {
      exclude: ['toggleIsChecked']
    },
    docs: {
      source: {
        transform: (src, storyContext) => {
          const {
            args
          } = storyContext;
          return ['<Toggle', \`  themeColor="\${args.themeColor}"\`, \`  checkLabel="\${args.checkLabel}"\`, \`  unCheckLabel="\${args.unCheckLabel}"\`, \`  :isChecked="\${args.isChecked}"\`, \`  :isDisabled="\${args.isDisabled}"\`, \`  className="\${args.className}"\`, '></Toggle>'].join('\\n').trim();
        }
      }
    }
  }
}`,...(d=(i=l.parameters)==null?void 0:i.docs)==null?void 0:d.source}}};var t,m,b;c.parameters={...c.parameters,docs:{...(t=c.parameters)==null?void 0:t.docs,source:{originalSource:`{
  name: '主題色彩',
  args: {
    // themeColor: 'success',
    checkLabel: 'on',
    unCheckLabel: 'off',
    isDisabled: false,
    className: '',
    modelValue: true
  },
  render: args => ({
    components: {
      Toggle
    },
    setup() {
      return {
        args
      };
    },
    template: \`<div style="display:flex; gap: 16px">
                <Toggle
                    themeColor="primary"
                    :checkLabel="args.checkLabel"
                    :unCheckLabel="args.unCheckLabel"
                    :isDisabled="args.isDisabled"
                    :className="args.className"
                    v-model="args.modelValue">
                </Toggle>
                <Toggle
                    themeColor="secondary"
                    :checkLabel="args.checkLabel"
                    :unCheckLabel="args.unCheckLabel"
                    :isDisabled="args.isDisabled"
                    :className="args.className"
                    v-model="args.modelValue">
                </Toggle>
                <Toggle
                    themeColor="neutral"
                    :checkLabel="args.checkLabel"
                    :unCheckLabel="args.unCheckLabel"
                    :isDisabled="args.isDisabled"
                    :className="args.className"
                    v-model="args.modelValue">
                </Toggle>
                <Toggle
                    themeColor="info"
                    :checkLabel="args.checkLabel"
                    :unCheckLabel="args.unCheckLabel"
                    :isDisabled="args.isDisabled"
                    :className="args.className"
                    v-model="args.modelValue">
                </Toggle>
                <Toggle
                    themeColor="success"
                    :checkLabel="args.checkLabel"
                    :unCheckLabel="args.unCheckLabel"
                    :isDisabled="args.isDisabled"
                    :className="args.className"
                    v-model="args.modelValue">
                </Toggle>
                <Toggle
                    themeColor="warning"
                    :checkLabel="args.checkLabel"
                    :unCheckLabel="args.unCheckLabel"
                    :isDisabled="args.isDisabled"
                    :className="args.className"
                    v-model="args.modelValue">
                </Toggle>
                <Toggle
                    themeColor="error"
                    :checkLabel="args.checkLabel"
                    :unCheckLabel="args.unCheckLabel"
                    :isDisabled="args.isDisabled"
                    :className="args.className"
                    v-model="args.modelValue">
                </Toggle>
            </div>
            \`
  }),
  // 控制 controls 中能控制的參數
  parameters: {
    controls: {
      exclude: ['themeColor']
    },
    docs: {
      source: {
        transform: (src, storyContext) => {
          const {
            args
          } = storyContext;
          return ['<Toggle', \`  themeColor="primary"\`, \`  checkLabel="\${args.checkLabel}"\`, \`  unCheckLabel="\${args.unCheckLabel}"\`, \`  :isChecked="\${args.isChecked}"\`, \`  :isDisabled="\${args.isDisabled}"\`, \`  className="\${args.className}"\`, '></Toggle>', '<Toggle', \`  themeColor="secondary"\`, \`  checkLabel="\${args.checkLabel}"\`, \`  unCheckLabel="\${args.unCheckLabel}"\`, \`  :isChecked="\${args.isChecked}"\`, \`  :isDisabled="\${args.isDisabled}"\`, \`  className="\${args.className}"\`, '></Toggle>', '<Toggle', \`  themeColor="tertiary"\`, \`  checkLabel="\${args.checkLabel}"\`, \`  unCheckLabel="\${args.unCheckLabel}"\`, \`  :isChecked="\${args.isChecked}"\`, \`  :isDisabled="\${args.isDisabled}"\`, \`  className="\${args.className}"\`, '></Toggle>', '<Toggle', \`  themeColor="success"\`, \`  checkLabel="\${args.checkLabel}"\`, \`  unCheckLabel="\${args.unCheckLabel}"\`, \`  :isChecked="\${args.isChecked}"\`, \`  :isDisabled="\${args.isDisabled}"\`, \`  className="\${args.className}"\`, '></Toggle>', '<Toggle', \`  themeColor="warning"\`, \`  checkLabel="\${args.checkLabel}"\`, \`  unCheckLabel="\${args.unCheckLabel}"\`, \`  :isChecked="\${args.isChecked}"\`, \`  :isDisabled="\${args.isDisabled}"\`, \`  className="\${args.className}"\`, '></Toggle>', '<Toggle', \`  themeColor="error"\`, \`  checkLabel="\${args.checkLabel}"\`, \`  unCheckLabel="\${args.unCheckLabel}"\`, \`  :isChecked="\${args.isChecked}"\`, \`  :isDisabled="\${args.isDisabled}"\`, \`  className="\${args.className}"\`, '></Toggle>', '<Toggle', \`  themeColor="info"\`, \`  checkLabel="\${args.checkLabel}"\`, \`  unCheckLabel="\${args.unCheckLabel}"\`, \`  :isChecked="\${args.isChecked}"\`, \`  :isDisabled="\${args.isDisabled}"\`, \`  className="\${args.className}"\`, '></Toggle>'].join('\\n').trim();
        }
      }
    }
  }
}`,...(b=(m=c.parameters)==null?void 0:m.docs)==null?void 0:b.source}}};const y=["ToggleDefault","ToggleColor"];export{c as ToggleColor,l as ToggleDefault,y as __namedExportsOrder,f as default};

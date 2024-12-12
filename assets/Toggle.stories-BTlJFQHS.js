import{c as m,d as T,w as $,a as f,b as t,n as g,t as N,K as y,o as v}from"./vue.esm-bundler-CTfO_w4g.js";import{c as x}from"./index-Bb4qSo10.js";function w(a){return m(()=>x("ded-toggle",{variants:{themeColor:{primary:"ded-toggle-primary",secondary:"ded-toggle-secondary",tertiary:"ded-toggle-tertiary",success:"ded-toggle-success",warning:"ded-toggle-warning",error:"ded-toggle-error",info:"ded-toggle-info"},isDisabled:{true:"ded-button-container-disable"}}})({themeColor:a.themeColor,isDisabled:a.isDisabled}))}const o={__name:"Toggle",props:{themeColor:{type:String,default:"primary",validator:a=>["primary","secondary","tertiary","success","warning","error","info"].includes(a)},checkLabel:{type:String,default:"on"},unCheckLabel:{type:String,default:"off"},isChecked:{type:Boolean,default:!1},isDisabled:{type:Boolean,default:!1},className:{type:String,default:""}},emits:["toggleIsChecked"],setup(a,{emit:c}){const e=c,l=a,L=w(l),p=m(()=>[L.value,l.className].filter(Boolean).join(" ")),s=T(l.isChecked);$(()=>l.isChecked,i=>{s.value=i});const D=()=>{s.value=!s.value,e("toggleIsChecked")};return(i,_)=>(v(),f("div",{class:g([p.value,{"ded-toggle-on":s.value,"ded-toggle-off":!s.value}]),onClick:y(D,["prevent"])},[t("div",{class:g(["ded-toggle-thumb",{"ded-toggle-thumb-on":s.value,"ded-toggle-thumb-off":!s.value}])},null,2),t("label",{class:g(["ded-toggle-label",{"ded-toggle-label-on":s.value,"ded-toggle-label-off":!s.value}])},N(s.value===!0?l.checkLabel:l.unCheckLabel),3)],2))}};o.__docgenInfo={exportName:"default",displayName:"Toggle",description:"",tags:{},props:[{name:"themeColor",type:{name:"string"},defaultValue:{func:!1,value:'"primary"'},values:["primary","secondary","tertiary","success","warning","error","info"]},{name:"checkLabel",type:{name:"string"},defaultValue:{func:!1,value:'"on"'}},{name:"unCheckLabel",type:{name:"string"},defaultValue:{func:!1,value:'"off"'}},{name:"isChecked",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"isDisabled",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"className",type:{name:"string"},defaultValue:{func:!1,value:'""'}}],events:[{name:"toggleIsChecked"}],sourceFiles:["/Users/auouser/Desktop/Work_Space/DED-WDS_VUE/libs/src/ui/element/Toggle/Toggle.vue"]};const S={title:"Component/Toggle",component:o,tags:["autodocs"],argTypes:{themeColor:{description:"主題顏色",control:{type:"select"},options:["primary","secondary","tertiary","success","warning","error","info"],table:{type:{summary:"primary | secondary | tertiary | success | warning | error | info"}}},checkLabel:{description:"開啟文字",control:{type:"text"}},unCheckLabel:{description:"關閉文字",control:{type:"text"}},isChecked:{description:"是否開啟",control:{type:"boolean"}},isDisabled:{description:"是否禁用",control:{type:"boolean"}},className:{description:"客製化樣式",control:{type:"text"}}},parameters:{docs:{title:"Toggle",description:{component:"Toggle 組件的呈現及說明。"}}}},r={name:"預設項目",args:{themeColor:"primary",checkLabel:"on",unCheckLabel:"off",isChecked:!0,isDisabled:!1,className:""},render:a=>({components:{Toggle:o},setup(){return{args:a}},template:`<div style="display:flex; gap: 16px">
                <Toggle
                    :themeColor="args.themeColor"
                    :checkLabel="args.checkLabel"
                    :unCheckLabel="args.unCheckLabel"
                    :isChecked="args.isChecked"
                    :isDisabled="args.isDisabled"
                    :className="args.className" >
                </Toggle>
            </div>
            `}),parameters:{controls:{exclude:["toggleIsChecked"]},docs:{source:{transform:(a,c)=>{const{args:e}=c;return["<Toggle",`  themeColor="${e.themeColor}"`,`  checkLabel="${e.checkLabel}"`,`  unCheckLabel="${e.unCheckLabel}"`,`  :isChecked="${e.isChecked}"`,`  :isDisabled="${e.isDisabled}"`,`  className="${e.className}"`,"></Toggle>"].join(`
`).trim()}}}}},n={name:"主題色彩",args:{checkLabel:"on",unCheckLabel:"off",isChecked:!0,isDisabled:!1,className:""},render:a=>({components:{Toggle:o},setup(){return{args:a}},template:`<div style="display:flex; gap: 16px">
                <Toggle
                    themeColor="primary"
                    :checkLabel="args.checkLabel"
                    :unCheckLabel="args.unCheckLabel"
                    :isChecked="args.isChecked"
                    :isDisabled="args.isDisabled"
                    :className="args.className">
                </Toggle>
                <Toggle
                    themeColor="secondary"
                    :checkLabel="args.checkLabel"
                    :unCheckLabel="args.unCheckLabel"
                    :isChecked="args.isChecked"
                    :isDisabled="args.isDisabled"
                    :className="args.className">
                </Toggle>
                <Toggle
                    themeColor="tertiary"
                    :checkLabel="args.checkLabel"
                    :unCheckLabel="args.unCheckLabel"
                    :isChecked="args.isChecked"
                    :isDisabled="args.isDisabled"
                    :className="args.className">
                </Toggle>
                <Toggle
                    themeColor="success"
                    :checkLabel="args.checkLabel"
                    :unCheckLabel="args.unCheckLabel"
                    :isChecked="args.isChecked"
                    :isDisabled="args.isDisabled"
                    :className="args.className">
                </Toggle>
                <Toggle
                    themeColor="warning"
                    :checkLabel="args.checkLabel"
                    :unCheckLabel="args.unCheckLabel"
                    :isChecked="args.isChecked"
                    :isDisabled="args.isDisabled"
                    :className="args.className">
                </Toggle>
                <Toggle
                    themeColor="error"
                    :checkLabel="args.checkLabel"
                    :unCheckLabel="args.unCheckLabel"
                    :isChecked="args.isChecked"
                    :isDisabled="args.isDisabled"
                    :className="args.className">
                </Toggle>
                <Toggle
                    themeColor="info"
                    :checkLabel="args.checkLabel"
                    :unCheckLabel="args.unCheckLabel"
                    :isChecked="args.isChecked"
                    :isDisabled="args.isDisabled"
                    :className="args.className">
                </Toggle>
            </div>
            `}),parameters:{controls:{exclude:["themeColor"]},docs:{source:{transform:(a,c)=>{const{args:e}=c;return["<Toggle",'  themeColor="primary"',`  checkLabel="${e.checkLabel}"`,`  unCheckLabel="${e.unCheckLabel}"`,`  :isChecked="${e.isChecked}"`,`  :isDisabled="${e.isDisabled}"`,`  className="${e.className}"`,"></Toggle>","<Toggle",'  themeColor="secondary"',`  checkLabel="${e.checkLabel}"`,`  unCheckLabel="${e.unCheckLabel}"`,`  :isChecked="${e.isChecked}"`,`  :isDisabled="${e.isDisabled}"`,`  className="${e.className}"`,"></Toggle>","<Toggle",'  themeColor="tertiary"',`  checkLabel="${e.checkLabel}"`,`  unCheckLabel="${e.unCheckLabel}"`,`  :isChecked="${e.isChecked}"`,`  :isDisabled="${e.isDisabled}"`,`  className="${e.className}"`,"></Toggle>","<Toggle",'  themeColor="success"',`  checkLabel="${e.checkLabel}"`,`  unCheckLabel="${e.unCheckLabel}"`,`  :isChecked="${e.isChecked}"`,`  :isDisabled="${e.isDisabled}"`,`  className="${e.className}"`,"></Toggle>","<Toggle",'  themeColor="warning"',`  checkLabel="${e.checkLabel}"`,`  unCheckLabel="${e.unCheckLabel}"`,`  :isChecked="${e.isChecked}"`,`  :isDisabled="${e.isDisabled}"`,`  className="${e.className}"`,"></Toggle>","<Toggle",'  themeColor="error"',`  checkLabel="${e.checkLabel}"`,`  unCheckLabel="${e.unCheckLabel}"`,`  :isChecked="${e.isChecked}"`,`  :isDisabled="${e.isDisabled}"`,`  className="${e.className}"`,"></Toggle>","<Toggle",'  themeColor="info"',`  checkLabel="${e.checkLabel}"`,`  unCheckLabel="${e.unCheckLabel}"`,`  :isChecked="${e.isChecked}"`,`  :isDisabled="${e.isDisabled}"`,`  className="${e.className}"`,"></Toggle>"].join(`
`).trim()}}}}};var h,d,b;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:`{
  name: '預設項目',
  args: {
    themeColor: 'primary',
    checkLabel: 'on',
    unCheckLabel: 'off',
    isChecked: true,
    isDisabled: false,
    className: ''
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
                    :isChecked="args.isChecked"
                    :isDisabled="args.isDisabled"
                    :className="args.className" >
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
}`,...(b=(d=r.parameters)==null?void 0:d.docs)==null?void 0:b.source}}};var k,C,u;n.parameters={...n.parameters,docs:{...(k=n.parameters)==null?void 0:k.docs,source:{originalSource:`{
  name: '主題色彩',
  args: {
    checkLabel: 'on',
    unCheckLabel: 'off',
    isChecked: true,
    isDisabled: false,
    className: ''
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
                    :isChecked="args.isChecked"
                    :isDisabled="args.isDisabled"
                    :className="args.className">
                </Toggle>
                <Toggle
                    themeColor="secondary"
                    :checkLabel="args.checkLabel"
                    :unCheckLabel="args.unCheckLabel"
                    :isChecked="args.isChecked"
                    :isDisabled="args.isDisabled"
                    :className="args.className">
                </Toggle>
                <Toggle
                    themeColor="tertiary"
                    :checkLabel="args.checkLabel"
                    :unCheckLabel="args.unCheckLabel"
                    :isChecked="args.isChecked"
                    :isDisabled="args.isDisabled"
                    :className="args.className">
                </Toggle>
                <Toggle
                    themeColor="success"
                    :checkLabel="args.checkLabel"
                    :unCheckLabel="args.unCheckLabel"
                    :isChecked="args.isChecked"
                    :isDisabled="args.isDisabled"
                    :className="args.className">
                </Toggle>
                <Toggle
                    themeColor="warning"
                    :checkLabel="args.checkLabel"
                    :unCheckLabel="args.unCheckLabel"
                    :isChecked="args.isChecked"
                    :isDisabled="args.isDisabled"
                    :className="args.className">
                </Toggle>
                <Toggle
                    themeColor="error"
                    :checkLabel="args.checkLabel"
                    :unCheckLabel="args.unCheckLabel"
                    :isChecked="args.isChecked"
                    :isDisabled="args.isDisabled"
                    :className="args.className">
                </Toggle>
                <Toggle
                    themeColor="info"
                    :checkLabel="args.checkLabel"
                    :unCheckLabel="args.unCheckLabel"
                    :isChecked="args.isChecked"
                    :isDisabled="args.isDisabled"
                    :className="args.className">
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
}`,...(u=(C=n.parameters)==null?void 0:C.docs)==null?void 0:u.source}}};const A=["ToggleDefault","ToggleColor"];export{n as ToggleColor,r as ToggleDefault,A as __namedExportsOrder,S as default};

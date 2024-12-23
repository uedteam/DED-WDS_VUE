import{f as L,w as p,a as D,e as h,n as g,t as T,L as $,o as f}from"./vue.esm-bundler-BQySH7jJ.js";const o={__name:"Toggle",props:{themeColor:{type:String,default:"primary",validator:a=>["primary","secondary","neutral","info","success","warning","error"].includes(a)},checkLabel:{type:String,default:"on"},unCheckLabel:{type:String,default:"off"},isChecked:{type:Boolean,default:!1},isDisabled:{type:Boolean,default:!1},className:{type:String,default:""}},emits:["toggleIsChecked"],setup(a,{emit:c}){const e=c,l=a,s=L(l.isChecked);p(()=>l.isChecked,i=>{s.value=i});const m=()=>{s.value=!s.value,e("toggleIsChecked")};return(i,N)=>(f(),D("div",{class:g({"ded-toggle":!0,[`ded-toggle-${l.themeColor}`]:l.themeColor,"ded-toggle-on":s.value,"ded-toggle-off":!s.value,[l.className]:!!l.className}),onClick:$(m,["prevent"])},[h("div",{class:g(["ded-toggle-thumb",{"ded-toggle-thumb-on":s.value,"ded-toggle-thumb-off":!s.value}])},null,2),h("label",{class:g(["ded-toggle-label",{"ded-toggle-label-on":s.value,"ded-toggle-label-off":!s.value}])},T(s.value===!0?l.checkLabel:l.unCheckLabel),3)],2))}};o.__docgenInfo={exportName:"default",displayName:"Toggle",description:"",tags:{},props:[{name:"themeColor",type:{name:"string"},defaultValue:{func:!1,value:'"primary"'},values:["primary","secondary","neutral","info","success","warning","error"]},{name:"checkLabel",type:{name:"string"},defaultValue:{func:!1,value:'"on"'}},{name:"unCheckLabel",type:{name:"string"},defaultValue:{func:!1,value:'"off"'}},{name:"isChecked",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"isDisabled",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"className",type:{name:"string"},defaultValue:{func:!1,value:'""'}}],events:[{name:"toggleIsChecked"}],sourceFiles:["/Users/auouser/Desktop/Work_Space/DED-WDS_VUE/libs/src/ui/element/Toggle/Toggle.vue"]};const v={title:"Component/Toggle",component:o,tags:["autodocs"],argTypes:{themeColor:{description:"主題顏色",control:{type:"select"},options:["primary","secondary","neutral","info","success","warning","error"],table:{type:{summary:"primary | secondary | neutral | info | success | warning | error"}}},checkLabel:{description:"開啟文字",control:{type:"text"}},unCheckLabel:{description:"關閉文字",control:{type:"text"}},isChecked:{description:"是否開啟",control:{type:"boolean"}},isDisabled:{description:"是否禁用",control:{type:"boolean"}},className:{description:"客製化樣式",control:{type:"text"}}},parameters:{docs:{title:"Toggle",description:{component:"Toggle 組件的呈現及說明。"}}}},r={name:"預設項目",args:{themeColor:"success",checkLabel:"on",unCheckLabel:"off",isChecked:!0,isDisabled:!1,className:""},render:a=>({components:{Toggle:o},setup(){return{args:a}},template:`<div style="display:flex; gap: 16px">
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
                    themeColor="neutral"
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
                
            </div>
            `}),parameters:{controls:{exclude:["themeColor"]},docs:{source:{transform:(a,c)=>{const{args:e}=c;return["<Toggle",'  themeColor="primary"',`  checkLabel="${e.checkLabel}"`,`  unCheckLabel="${e.unCheckLabel}"`,`  :isChecked="${e.isChecked}"`,`  :isDisabled="${e.isDisabled}"`,`  className="${e.className}"`,"></Toggle>","<Toggle",'  themeColor="secondary"',`  checkLabel="${e.checkLabel}"`,`  unCheckLabel="${e.unCheckLabel}"`,`  :isChecked="${e.isChecked}"`,`  :isDisabled="${e.isDisabled}"`,`  className="${e.className}"`,"></Toggle>","<Toggle",'  themeColor="tertiary"',`  checkLabel="${e.checkLabel}"`,`  unCheckLabel="${e.unCheckLabel}"`,`  :isChecked="${e.isChecked}"`,`  :isDisabled="${e.isDisabled}"`,`  className="${e.className}"`,"></Toggle>","<Toggle",'  themeColor="success"',`  checkLabel="${e.checkLabel}"`,`  unCheckLabel="${e.unCheckLabel}"`,`  :isChecked="${e.isChecked}"`,`  :isDisabled="${e.isDisabled}"`,`  className="${e.className}"`,"></Toggle>","<Toggle",'  themeColor="warning"',`  checkLabel="${e.checkLabel}"`,`  unCheckLabel="${e.unCheckLabel}"`,`  :isChecked="${e.isChecked}"`,`  :isDisabled="${e.isDisabled}"`,`  className="${e.className}"`,"></Toggle>","<Toggle",'  themeColor="error"',`  checkLabel="${e.checkLabel}"`,`  unCheckLabel="${e.unCheckLabel}"`,`  :isChecked="${e.isChecked}"`,`  :isDisabled="${e.isDisabled}"`,`  className="${e.className}"`,"></Toggle>","<Toggle",'  themeColor="info"',`  checkLabel="${e.checkLabel}"`,`  unCheckLabel="${e.unCheckLabel}"`,`  :isChecked="${e.isChecked}"`,`  :isDisabled="${e.isDisabled}"`,`  className="${e.className}"`,"></Toggle>"].join(`
`).trim()}}}}};var t,d,b;r.parameters={...r.parameters,docs:{...(t=r.parameters)==null?void 0:t.docs,source:{originalSource:`{
  name: '預設項目',
  args: {
    themeColor: 'success',
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
                    themeColor="neutral"
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
}`,...(u=(C=n.parameters)==null?void 0:C.docs)==null?void 0:u.source}}};const x=["ToggleDefault","ToggleColor"];export{n as ToggleColor,r as ToggleDefault,x as __namedExportsOrder,v as default};

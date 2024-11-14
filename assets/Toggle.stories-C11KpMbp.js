import{c as m,e as T,w as $,a as f,b as i,n as g,t as N,l as y,o as v}from"./vue.esm-bundler-Dy0-1sXb.js";import{c as x}from"./index-Bb4qSo10.js";function w(a){return m(()=>x("toggle",{variants:{themeColor:{primary:"toggle-primary",secondary:"toggle-secondary",tertiary:"toggle-tertiary",success:"toggle-success",warning:"toggle-warning",error:"toggle-error",info:"toggle-info"},isDisabled:{true:"button-container-disable"}}})({themeColor:a.themeColor,isDisabled:a.isDisabled}))}const o={__name:"Toggle",props:{themeColor:{type:String,default:"primary",validator:a=>["primary","secondary","tertiary","success","warning","error","info"].includes(a)},checkedLabel:{type:String,default:"on"},unCheckedLabel:{type:String,default:"off"},isChecked:{type:Boolean,default:!1},isDisabled:{type:Boolean,default:!1},className:{type:String,default:""}},emits:["toggleIsChecked"],setup(a,{emit:c}){const e=c,l=a,L=w(l),p=m(()=>[L.value,l.className].filter(Boolean).join(" ")),s=T(l.isChecked);$(()=>l.isChecked,d=>{s.value=d});const D=()=>{s.value=!s.value,e("toggleIsChecked")};return(d,_)=>(v(),f("div",{class:g([p.value,{"toggle-on":s.value,"toggle-off":!s.value}]),onClick:y(D,["prevent"]),style:{cursor:"pointer"}},[i("div",{class:g(["toggle-thumb",{"toggle-thumb-on":s.value,"toggle-thumb-off":!s.value}])},null,2),i("label",{class:g(["toggle-label",{"toggle-label-on":s.value,"toggle-label-off":!s.value}])},N(s.value===!0?l.checkedLabel:l.unCheckedLabel),3)],2))}};o.__docgenInfo={exportName:"default",displayName:"Toggle",description:"",tags:{},props:[{name:"themeColor",type:{name:"string"},defaultValue:{func:!1,value:'"primary"'},values:["primary","secondary","tertiary","success","warning","error","info"]},{name:"checkedLabel",type:{name:"string"},defaultValue:{func:!1,value:'"on"'}},{name:"unCheckedLabel",type:{name:"string"},defaultValue:{func:!1,value:'"off"'}},{name:"isChecked",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"isDisabled",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"className",type:{name:"string"},defaultValue:{func:!1,value:'""'}}],events:[{name:"toggleIsChecked"}],sourceFiles:["D:/98_測試/up/DED-WDS_VUE/libs/src/ui/element/Toggle/Toggle.vue"]};const S={title:"Design System/Toggle",component:o,tags:["autodocs"],argTypes:{themeColor:{description:"主題顏色",control:{type:"select"},options:["primary","secondary","tertiary","success","warning","error","info"],table:{type:{summary:"primary | secondary | tertiary | success | warning | error | info"}}},isChecked:{description:"是否開啟",control:{type:"boolean"}},isDisabled:{description:"是否禁用",control:{type:"boolean"}},checkedLabel:{description:"開啟文字",control:{type:"text"}},unCheckedLabel:{description:"關閉文字",control:{type:"text"}},className:{description:"客製化樣式",control:{type:"text"}}},parameters:{docs:{title:"Toggle",description:{component:"Toggle 組件的呈現及說明。"}}}},r={name:"預設項目",args:{themeColor:"primary",checkedLabel:"on",unCheckedLabel:"off",isChecked:!0,isDisabled:!1,className:""},render:a=>({components:{Toggle:o},setup(){return{args:a}},template:`<div style="display:flex; gap: 16px">
                <Toggle
                    :themeColor="args.themeColor"
                    :checkedLabel="args.checkedLabel"
                    :unCheckedLabel="args.unCheckedLabel"
                    :isChecked="args.isChecked"
                    :isDisabled="args.isDisabled"
                    :className="args.className" >
                </Toggle>
            </div>
            `}),parameters:{controls:{exclude:["toggleIsChecked"]},docs:{source:{transform:(a,c)=>{const{args:e}=c;return["<Toggle",`  themeColor="${e.themeColor}"`,`  checkedLabel="${e.checkedLabel}"`,`  unCheckedLabel="${e.unCheckedLabel}"`,`  :isChecked="${e.isChecked}"`,`  :isDisabled="${e.isDisabled}"`,`  className="${e.className}"`,"></Toggle>"].join(`
`).trim()}}}}},n={name:"主題色彩",args:{checkedLabel:"on",unCheckedLabel:"off",isChecked:!0,isDisabled:!1,className:""},render:a=>({components:{Toggle:o},setup(){return{args:a}},template:`<div style="display:flex; gap: 16px">
                <Toggle
                    themeColor="primary"
                    :checkedLabel="args.checkedLabel"
                    :unCheckedLabel="args.unCheckedLabel"
                    :isChecked="args.isChecked"
                    :isDisabled="args.isDisabled"
                    :className="args.className">
                </Toggle>
                <Toggle
                    themeColor="secondary"
                    :checkedLabel="args.checkedLabel"
                    :unCheckedLabel="args.unCheckedLabel"
                    :isChecked="args.isChecked"
                    :isDisabled="args.isDisabled"
                    :className="args.className">
                </Toggle>
                <Toggle
                    themeColor="tertiary"
                    :checkedLabel="args.checkedLabel"
                    :unCheckedLabel="args.unCheckedLabel"
                    :isChecked="args.isChecked"
                    :isDisabled="args.isDisabled"
                    :className="args.className">
                </Toggle>
                <Toggle
                    themeColor="success"
                    :checkedLabel="args.checkedLabel"
                    :unCheckedLabel="args.unCheckedLabel"
                    :isChecked="args.isChecked"
                    :isDisabled="args.isDisabled"
                    :className="args.className">
                </Toggle>
                <Toggle
                    themeColor="warning"
                    :checkedLabel="args.checkedLabel"
                    :unCheckedLabel="args.unCheckedLabel"
                    :isChecked="args.isChecked"
                    :isDisabled="args.isDisabled"
                    :className="args.className">
                </Toggle>
                <Toggle
                    themeColor="error"
                    :checkedLabel="args.checkedLabel"
                    :unCheckedLabel="args.unCheckedLabel"
                    :isChecked="args.isChecked"
                    :isDisabled="args.isDisabled"
                    :className="args.className">
                </Toggle>
                <Toggle
                    themeColor="info"
                    :checkedLabel="args.checkedLabel"
                    :unCheckedLabel="args.unCheckedLabel"
                    :isChecked="args.isChecked"
                    :isDisabled="args.isDisabled"
                    :className="args.className">
                </Toggle>
            </div>
            `}),parameters:{controls:{exclude:["themeColor"]},docs:{source:{transform:(a,c)=>{const{args:e}=c;return["<Toggle",'  themeColor="primary"',`  checkedLabel="${e.checkedLabel}"`,`  unCheckedLabel="${e.unCheckedLabel}"`,`  :isChecked="${e.isChecked}"`,`  :isDisabled="${e.isDisabled}"`,`  className="${e.className}"`,"></Toggle>","<Toggle",'  themeColor="secondary"',`  checkedLabel="${e.checkedLabel}"`,`  unCheckedLabel="${e.unCheckedLabel}"`,`  :isChecked="${e.isChecked}"`,`  :isDisabled="${e.isDisabled}"`,`  className="${e.className}"`,"></Toggle>","<Toggle",'  themeColor="tertiary"',`  checkedLabel="${e.checkedLabel}"`,`  unCheckedLabel="${e.unCheckedLabel}"`,`  :isChecked="${e.isChecked}"`,`  :isDisabled="${e.isDisabled}"`,`  className="${e.className}"`,"></Toggle>","<Toggle",'  themeColor="success"',`  checkedLabel="${e.checkedLabel}"`,`  unCheckedLabel="${e.unCheckedLabel}"`,`  :isChecked="${e.isChecked}"`,`  :isDisabled="${e.isDisabled}"`,`  className="${e.className}"`,"></Toggle>","<Toggle",'  themeColor="warning"',`  checkedLabel="${e.checkedLabel}"`,`  unCheckedLabel="${e.unCheckedLabel}"`,`  :isChecked="${e.isChecked}"`,`  :isDisabled="${e.isDisabled}"`,`  className="${e.className}"`,"></Toggle>","<Toggle",'  themeColor="error"',`  checkedLabel="${e.checkedLabel}"`,`  unCheckedLabel="${e.unCheckedLabel}"`,`  :isChecked="${e.isChecked}"`,`  :isDisabled="${e.isDisabled}"`,`  className="${e.className}"`,"></Toggle>","<Toggle",'  themeColor="info"',`  checkedLabel="${e.checkedLabel}"`,`  unCheckedLabel="${e.unCheckedLabel}"`,`  :isChecked="${e.isChecked}"`,`  :isDisabled="${e.isDisabled}"`,`  className="${e.className}"`,"></Toggle>"].join(`
`).trim()}}}}};var t,h,b;r.parameters={...r.parameters,docs:{...(t=r.parameters)==null?void 0:t.docs,source:{originalSource:`{
  name: '預設項目',
  args: {
    themeColor: 'primary',
    checkedLabel: 'on',
    unCheckedLabel: 'off',
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
                    :checkedLabel="args.checkedLabel"
                    :unCheckedLabel="args.unCheckedLabel"
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
          return ['<Toggle', \`  themeColor="\${args.themeColor}"\`, \`  checkedLabel="\${args.checkedLabel}"\`, \`  unCheckedLabel="\${args.unCheckedLabel}"\`, \`  :isChecked="\${args.isChecked}"\`, \`  :isDisabled="\${args.isDisabled}"\`, \`  className="\${args.className}"\`, '></Toggle>'].join('\\n').trim();
        }
      }
    }
  }
}`,...(b=(h=r.parameters)==null?void 0:h.docs)==null?void 0:b.source}}};var k,C,u;n.parameters={...n.parameters,docs:{...(k=n.parameters)==null?void 0:k.docs,source:{originalSource:`{
  name: '主題色彩',
  args: {
    checkedLabel: 'on',
    unCheckedLabel: 'off',
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
                    :checkedLabel="args.checkedLabel"
                    :unCheckedLabel="args.unCheckedLabel"
                    :isChecked="args.isChecked"
                    :isDisabled="args.isDisabled"
                    :className="args.className">
                </Toggle>
                <Toggle
                    themeColor="secondary"
                    :checkedLabel="args.checkedLabel"
                    :unCheckedLabel="args.unCheckedLabel"
                    :isChecked="args.isChecked"
                    :isDisabled="args.isDisabled"
                    :className="args.className">
                </Toggle>
                <Toggle
                    themeColor="tertiary"
                    :checkedLabel="args.checkedLabel"
                    :unCheckedLabel="args.unCheckedLabel"
                    :isChecked="args.isChecked"
                    :isDisabled="args.isDisabled"
                    :className="args.className">
                </Toggle>
                <Toggle
                    themeColor="success"
                    :checkedLabel="args.checkedLabel"
                    :unCheckedLabel="args.unCheckedLabel"
                    :isChecked="args.isChecked"
                    :isDisabled="args.isDisabled"
                    :className="args.className">
                </Toggle>
                <Toggle
                    themeColor="warning"
                    :checkedLabel="args.checkedLabel"
                    :unCheckedLabel="args.unCheckedLabel"
                    :isChecked="args.isChecked"
                    :isDisabled="args.isDisabled"
                    :className="args.className">
                </Toggle>
                <Toggle
                    themeColor="error"
                    :checkedLabel="args.checkedLabel"
                    :unCheckedLabel="args.unCheckedLabel"
                    :isChecked="args.isChecked"
                    :isDisabled="args.isDisabled"
                    :className="args.className">
                </Toggle>
                <Toggle
                    themeColor="info"
                    :checkedLabel="args.checkedLabel"
                    :unCheckedLabel="args.unCheckedLabel"
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
          return ['<Toggle', \`  themeColor="primary"\`, \`  checkedLabel="\${args.checkedLabel}"\`, \`  unCheckedLabel="\${args.unCheckedLabel}"\`, \`  :isChecked="\${args.isChecked}"\`, \`  :isDisabled="\${args.isDisabled}"\`, \`  className="\${args.className}"\`, '></Toggle>', '<Toggle', \`  themeColor="secondary"\`, \`  checkedLabel="\${args.checkedLabel}"\`, \`  unCheckedLabel="\${args.unCheckedLabel}"\`, \`  :isChecked="\${args.isChecked}"\`, \`  :isDisabled="\${args.isDisabled}"\`, \`  className="\${args.className}"\`, '></Toggle>', '<Toggle', \`  themeColor="tertiary"\`, \`  checkedLabel="\${args.checkedLabel}"\`, \`  unCheckedLabel="\${args.unCheckedLabel}"\`, \`  :isChecked="\${args.isChecked}"\`, \`  :isDisabled="\${args.isDisabled}"\`, \`  className="\${args.className}"\`, '></Toggle>', '<Toggle', \`  themeColor="success"\`, \`  checkedLabel="\${args.checkedLabel}"\`, \`  unCheckedLabel="\${args.unCheckedLabel}"\`, \`  :isChecked="\${args.isChecked}"\`, \`  :isDisabled="\${args.isDisabled}"\`, \`  className="\${args.className}"\`, '></Toggle>', '<Toggle', \`  themeColor="warning"\`, \`  checkedLabel="\${args.checkedLabel}"\`, \`  unCheckedLabel="\${args.unCheckedLabel}"\`, \`  :isChecked="\${args.isChecked}"\`, \`  :isDisabled="\${args.isDisabled}"\`, \`  className="\${args.className}"\`, '></Toggle>', '<Toggle', \`  themeColor="error"\`, \`  checkedLabel="\${args.checkedLabel}"\`, \`  unCheckedLabel="\${args.unCheckedLabel}"\`, \`  :isChecked="\${args.isChecked}"\`, \`  :isDisabled="\${args.isDisabled}"\`, \`  className="\${args.className}"\`, '></Toggle>', '<Toggle', \`  themeColor="info"\`, \`  checkedLabel="\${args.checkedLabel}"\`, \`  unCheckedLabel="\${args.unCheckedLabel}"\`, \`  :isChecked="\${args.isChecked}"\`, \`  :isDisabled="\${args.isDisabled}"\`, \`  className="\${args.className}"\`, '></Toggle>'].join('\\n').trim();
        }
      }
    }
  }
}`,...(u=(C=n.parameters)==null?void 0:C.docs)==null?void 0:u.source}}};const A=["ToggleDefault","ToggleColor"];export{n as ToggleColor,r as ToggleDefault,A as __namedExportsOrder,S as default};

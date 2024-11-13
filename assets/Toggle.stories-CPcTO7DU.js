import{c as m,e as T,w as f,a as y,b as d,n as g,t as $,l as v,o as x}from"./vue.esm-bundler-Dy0-1sXb.js";import{c as N}from"./index-Bb4qSo10.js";function w(a){return m(()=>N("toggle",{variants:{themeColor:{primary:"toggle-primary",secondary:"toggle-secondary",tertiary:"toggle-tertiary",success:"toggle-success",warning:"toggle-warning",error:"toggle-error",info:"toggle-info"},isDisable:{true:"button-container-disable"}}})({themeColor:a.themeColor,isDisable:a.isDisable}))}const o={__name:"Toggle",props:{themeColor:{type:String,default:"primary",validator:a=>["primary","secondary","tertiary","success","warning","error","info"].includes(a)},isChecked:{type:Boolean,required:!0,default:!1},isDisable:{type:Boolean,default:!1},checkedLabel:{type:String,default:"on"},unCheckedLabel:{type:String,default:"off"},className:{type:String,default:""}},emits:["toggleIsChecked"],setup(a,{emit:c}){const e=c,l=a,L=w(l),p=m(()=>[L.value,l.className].filter(Boolean).join(" ")),s=T(l.isChecked);f(()=>l.isChecked,i=>{s.value=i});const D=()=>{s.value=!s.value,e("toggleIsChecked")};return(i,_)=>(x(),y("div",{class:g([p.value,{"toggle-on":s.value,"toggle-off":!s.value}]),onClick:v(D,["prevent"]),style:{cursor:"pointer"}},[d("div",{class:g(["toggle-thumb",{"toggle-thumb-on":s.value,"toggle-thumb-off":!s.value}])},null,2),d("label",{class:g(["toggle-label",{"toggle-label-on":s.value,"toggle-label-off":!s.value}])},$(s.value===!0?l.checkedLabel:l.unCheckedLabel),3)],2))}};o.__docgenInfo={exportName:"default",displayName:"Toggle",description:"",tags:{},props:[{name:"themeColor",type:{name:"string"},defaultValue:{func:!1,value:"'primary'"},values:["primary","secondary","tertiary","success","warning","error","info"]},{name:"isChecked",type:{name:"boolean"},required:!0,defaultValue:{func:!1,value:"false"}},{name:"isDisable",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"checkedLabel",type:{name:"string"},defaultValue:{func:!1,value:"'on'"}},{name:"unCheckedLabel",type:{name:"string"},defaultValue:{func:!1,value:"'off'"}},{name:"className",type:{name:"string"},defaultValue:{func:!1,value:"''"}}],events:[{name:"toggleIsChecked"}],sourceFiles:["D:/98_測試/up/DED-WDS_VUE/libs/src/ui/element/Toggle/Toggle.vue"]};const S={title:"Design System/Toggle",component:o,tags:["autodocs"],argTypes:{themeColor:{description:"主題顏色",control:{type:"select"},options:["primary","secondary","tertiary","success","warning","error","info"],table:{type:{summary:"primary | secondary | tertiary | success | warning | error | info"}}},isChecked:{description:"是否開啟",control:{type:"boolean"}},isDisable:{description:"是否禁用",control:{type:"boolean"}},checkedLabel:{description:"開啟文字",control:{type:"text"}},unCheckedLabel:{description:"關閉文字",control:{type:"text"}},className:{description:"客製化樣式",control:{type:"text"}}},parameters:{docs:{title:"Toggle",description:{component:"Toggle 組件的呈現及說明。"}}}},r={name:"預設項目",args:{themeColor:"primary",isChecked:!0,isDisable:!1,checkedLabel:"on",unCheckedLabel:"off",className:""},render:a=>({components:{Toggle:o},setup(){return{args:a}},template:`<div style="display:flex; gap: 16px">
                <Toggle
                    :themeColor="args.themeColor"
                    :isChecked="args.isChecked"
                    :isDisable="args.isDisable"
                    :checkedLabel="args.checkedLabel"
                    :unCheckedLabel="args.unCheckedLabel"
                    :className="args.className" >
                </Toggle>
            </div>
            `}),parameters:{controls:{exclude:["toggleIsChecked"]},docs:{source:{transform:(a,c)=>{const{args:e}=c;return["<Toggle",`  checkedLabel="${e.checkedLabel}"`,`  unCheckedLabel="${e.unCheckedLabel}"`,`  themeColor="${e.themeColor}"`,`  :isDisable="${e.isDisable}"`,`  :isChecked="${e.isChecked}"`,`  className="${e.className}"`,"></Toggle>"].join(`
`).trim()}}}}},n={name:"主題色彩",args:{isChecked:!0,isDisable:!1,checkedLabel:"on",unCheckedLabel:"off"},render:a=>({components:{Toggle:o},setup(){return{args:a}},template:`<div style="display:flex; gap: 16px">
                <Toggle
                    themeColor="primary"
                    :isChecked="args.isChecked"
                    :isDisable="args.isDisable"
                    :checkedLabel="args.checkedLabel"
                    :unCheckedLabel="args.unCheckedLabel">
                </Toggle>
                <Toggle
                    themeColor="secondary"
                    :isChecked="args.isChecked"
                    :isDisable="args.isDisable"
                    :checkedLabel="args.checkedLabel"
                    :unCheckedLabel="args.unCheckedLabel">
                </Toggle>
                <Toggle
                    themeColor="tertiary"
                    :isChecked="args.isChecked"
                    :isDisable="args.isDisable"
                    :checkedLabel="args.checkedLabel"
                    :unCheckedLabel="args.unCheckedLabel">
                </Toggle>
                <Toggle
                    themeColor="success"
                    :isChecked="args.isChecked"
                    :isDisable="args.isDisable"
                    :checkedLabel="args.checkedLabel"
                    :unCheckedLabel="args.unCheckedLabel">
                </Toggle>
                <Toggle
                    themeColor="warning"
                    :isChecked="args.isChecked"
                    :isDisable="args.isDisable"
                    :checkedLabel="args.checkedLabel"
                    :unCheckedLabel="args.unCheckedLabel">
                </Toggle>
                <Toggle
                    themeColor="error"
                    :isChecked="args.isChecked"
                    :isDisable="args.isDisable"
                    :checkedLabel="args.checkedLabel"
                    :unCheckedLabel="args.unCheckedLabel">
                </Toggle>
                <Toggle
                    themeColor="info"
                    :isChecked="args.isChecked"
                    :isDisable="args.isDisable"
                    :checkedLabel="args.checkedLabel"
                    :unCheckedLabel="args.unCheckedLabel">
                </Toggle>
            </div>
            `}),parameters:{controls:{exclude:["themeColor"]},docs:{source:{transform:(a,c)=>{const{args:e}=c;return["<Toggle",'  themeColor="primary"',`  :isChecked="${e.isChecked}"`,`  :isDisable="${e.isDisable}"`,`  checkedLabel="${e.checkedLabel}"`,`  unCheckedLabel="${e.unCheckedLabel}"`,"></Toggle>","<Toggle",'  themeColor="secondary"',`  :isChecked="${e.isChecked}"`,`  :isDisable="${e.isDisable}"`,`  checkedLabel="${e.checkedLabel}"`,`  unCheckedLabel="${e.unCheckedLabel}"`,"></Toggle>","<Toggle",'  themeColor="tertiary"',`  :isChecked="${e.isChecked}"`,`  :isDisable="${e.isDisable}"`,`  checkedLabel="${e.checkedLabel}"`,`  unCheckedLabel="${e.unCheckedLabel}"`,"></Toggle>","<Toggle",'  themeColor="success"',`  :isChecked="${e.isChecked}"`,`  :isDisable="${e.isDisable}"`,`  checkedLabel="${e.checkedLabel}"`,`  unCheckedLabel="${e.unCheckedLabel}"`,"></Toggle>","<Toggle",'  themeColor="warning"',`  :isChecked="${e.isChecked}"`,`  :isDisable="${e.isDisable}"`,`  checkedLabel="${e.checkedLabel}"`,`  unCheckedLabel="${e.unCheckedLabel}"`,"></Toggle>","<Toggle",'  themeColor="error"',`  :isChecked="${e.isChecked}"`,`  :isDisable="${e.isDisable}"`,`  checkedLabel="${e.checkedLabel}"`,`  unCheckedLabel="${e.unCheckedLabel}"`,"></Toggle>","<Toggle",'  themeColor="info"',`  :isChecked="${e.isChecked}"`,`  :isDisable="${e.isDisable}"`,`  checkedLabel="${e.checkedLabel}"`,`  unCheckedLabel="${e.unCheckedLabel}"`,"></Toggle>"].join(`
`).trim()}}}}};var t,h,b;r.parameters={...r.parameters,docs:{...(t=r.parameters)==null?void 0:t.docs,source:{originalSource:`{
  name: '預設項目',
  args: {
    themeColor: 'primary',
    isChecked: true,
    isDisable: false,
    checkedLabel: 'on',
    unCheckedLabel: 'off',
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
                    :isChecked="args.isChecked"
                    :isDisable="args.isDisable"
                    :checkedLabel="args.checkedLabel"
                    :unCheckedLabel="args.unCheckedLabel"
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
          return ['<Toggle', \`  checkedLabel="\${args.checkedLabel}"\`, \`  unCheckedLabel="\${args.unCheckedLabel}"\`, \`  themeColor="\${args.themeColor}"\`, \`  :isDisable="\${args.isDisable}"\`, \`  :isChecked="\${args.isChecked}"\`, \`  className="\${args.className}"\`, '></Toggle>'].join('\\n').trim();
        }
      }
    }
  }
}`,...(b=(h=r.parameters)==null?void 0:h.docs)==null?void 0:b.source}}};var k,u,C;n.parameters={...n.parameters,docs:{...(k=n.parameters)==null?void 0:k.docs,source:{originalSource:`{
  name: '主題色彩',
  args: {
    isChecked: true,
    isDisable: false,
    checkedLabel: 'on',
    unCheckedLabel: 'off'
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
                    :isChecked="args.isChecked"
                    :isDisable="args.isDisable"
                    :checkedLabel="args.checkedLabel"
                    :unCheckedLabel="args.unCheckedLabel">
                </Toggle>
                <Toggle
                    themeColor="secondary"
                    :isChecked="args.isChecked"
                    :isDisable="args.isDisable"
                    :checkedLabel="args.checkedLabel"
                    :unCheckedLabel="args.unCheckedLabel">
                </Toggle>
                <Toggle
                    themeColor="tertiary"
                    :isChecked="args.isChecked"
                    :isDisable="args.isDisable"
                    :checkedLabel="args.checkedLabel"
                    :unCheckedLabel="args.unCheckedLabel">
                </Toggle>
                <Toggle
                    themeColor="success"
                    :isChecked="args.isChecked"
                    :isDisable="args.isDisable"
                    :checkedLabel="args.checkedLabel"
                    :unCheckedLabel="args.unCheckedLabel">
                </Toggle>
                <Toggle
                    themeColor="warning"
                    :isChecked="args.isChecked"
                    :isDisable="args.isDisable"
                    :checkedLabel="args.checkedLabel"
                    :unCheckedLabel="args.unCheckedLabel">
                </Toggle>
                <Toggle
                    themeColor="error"
                    :isChecked="args.isChecked"
                    :isDisable="args.isDisable"
                    :checkedLabel="args.checkedLabel"
                    :unCheckedLabel="args.unCheckedLabel">
                </Toggle>
                <Toggle
                    themeColor="info"
                    :isChecked="args.isChecked"
                    :isDisable="args.isDisable"
                    :checkedLabel="args.checkedLabel"
                    :unCheckedLabel="args.unCheckedLabel">
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
          return ['<Toggle', \`  themeColor="primary"\`, \`  :isChecked="\${args.isChecked}"\`, \`  :isDisable="\${args.isDisable}"\`, \`  checkedLabel="\${args.checkedLabel}"\`, \`  unCheckedLabel="\${args.unCheckedLabel}"\`, '></Toggle>', '<Toggle', \`  themeColor="secondary"\`, \`  :isChecked="\${args.isChecked}"\`, \`  :isDisable="\${args.isDisable}"\`, \`  checkedLabel="\${args.checkedLabel}"\`, \`  unCheckedLabel="\${args.unCheckedLabel}"\`, '></Toggle>', '<Toggle', \`  themeColor="tertiary"\`, \`  :isChecked="\${args.isChecked}"\`, \`  :isDisable="\${args.isDisable}"\`, \`  checkedLabel="\${args.checkedLabel}"\`, \`  unCheckedLabel="\${args.unCheckedLabel}"\`, '></Toggle>', '<Toggle', \`  themeColor="success"\`, \`  :isChecked="\${args.isChecked}"\`, \`  :isDisable="\${args.isDisable}"\`, \`  checkedLabel="\${args.checkedLabel}"\`, \`  unCheckedLabel="\${args.unCheckedLabel}"\`, '></Toggle>', '<Toggle', \`  themeColor="warning"\`, \`  :isChecked="\${args.isChecked}"\`, \`  :isDisable="\${args.isDisable}"\`, \`  checkedLabel="\${args.checkedLabel}"\`, \`  unCheckedLabel="\${args.unCheckedLabel}"\`, '></Toggle>', '<Toggle', \`  themeColor="error"\`, \`  :isChecked="\${args.isChecked}"\`, \`  :isDisable="\${args.isDisable}"\`, \`  checkedLabel="\${args.checkedLabel}"\`, \`  unCheckedLabel="\${args.unCheckedLabel}"\`, '></Toggle>', '<Toggle', \`  themeColor="info"\`, \`  :isChecked="\${args.isChecked}"\`, \`  :isDisable="\${args.isDisable}"\`, \`  checkedLabel="\${args.checkedLabel}"\`, \`  unCheckedLabel="\${args.unCheckedLabel}"\`, '></Toggle>'].join('\\n').trim();
        }
      }
    }
  }
}`,...(C=(u=n.parameters)==null?void 0:u.docs)==null?void 0:C.source}}};const A=["ToggleDefault","ToggleColor"];export{n as ToggleColor,r as ToggleDefault,A as __namedExportsOrder,S as default};

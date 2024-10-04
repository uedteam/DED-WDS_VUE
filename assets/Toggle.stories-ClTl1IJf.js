import{c as k,j as f,w as T,a as v,b as c,n as i,t as x,I as _,o as w}from"./vue.esm-bundler-CsTC-5Ev.js";import{c as S}from"./index-Bb4qSo10.js";function B(r){return k(()=>S("toggle",{variants:{themeColor:{primary:"toggle-primary",secondary:"toggle-secondary",tertiary:"toggle-tertiary",success:"toggle-success",warning:"toggle-warning",error:"toggle-error",info:"toggle-info"},isDisable:{true:"button-container-disable"}},compoundVariants:[]})({themeColor:r.themeColor,isDisable:r.isDisable}))}const a={__name:"Toggle",props:{themeColor:{type:String,default:"primary",validator:r=>["primary","secondary","tertiary","success","warning","error","info"].includes(r)},checkChildren:{type:String},unCheckChildren:{type:String},isChecked:{type:Boolean},isDisable:{type:Boolean},customClass:{type:String,default:""}},emits:["toggleIsChecked"],setup(r,{emit:m}){const p=m,s=r,y=B(s),b=k(()=>[y.value,s.customClass].filter(Boolean).join(" ")),e=f(s.isChecked);T(()=>s.isChecked,o=>{e.value=o});const D=()=>{e.value=!e.value,p("toggleIsChecked")};return(o,I)=>(w(),v("div",{class:i([b.value,{"toggle-on":e.value,"toggle-off":!e.value}]),onClick:_(D,["prevent"]),style:{cursor:"pointer"}},[c("div",{class:i(["toggle-thumb",{"toggle-thumb-on":e.value,"toggle-thumb-off":!e.value}])},null,2),c("label",{class:i(["toggle-label",{"toggle-label-on":e.value,"toggle-label-off":!e.value}])},x(e.value===!0?s.checkChildren:s.unCheckChildren),3)],2))}};a.__docgenInfo={exportName:"default",displayName:"Toggle",description:"",tags:{},props:[{name:"themeColor",type:{name:"string"},defaultValue:{func:!1,value:"'primary'"},values:["primary","secondary","tertiary","success","warning","error","info"]},{name:"checkChildren",type:{name:"string"}},{name:"unCheckChildren",type:{name:"string"}},{name:"isChecked",type:{name:"boolean"}},{name:"isDisable",type:{name:"boolean"}},{name:"customClass",type:{name:"string"},defaultValue:{func:!1,value:"''"}}],events:[{name:"toggleIsChecked"}],sourceFiles:["/Users/auouser/Desktop/Work_Space/DED-WDS_VUE/libs/src/ui/element/Toggle/Toggle.vue"]};const E={title:"Design System/Toggle",component:a,tags:["autodocs"],argTypes:{themeColor:{description:"主題顏色",control:{type:"select"},options:["primary","secondary","tertiary","success","warning","error","info"]},checkChildren:{description:"開啟文字",control:{type:"text"}},unCheckChildren:{description:"關閉文字",control:{type:"text"}},isChecked:{description:"帶入外部參數，控制開關是否開啟",control:{type:"boolean"}},isDisable:{description:"是否禁用",control:{type:"boolean"}},customClass:{description:"客製化樣式",control:{type:"text"}}},parameters:{docs:{title:"開關按鈕",description:{component:"開關按鈕組件的呈現及說明。"}}}},n={name:"開關按鈕",args:{checkChildren:"on",unCheckChildren:"off",themeColor:"primary",isDisable:!1,isChecked:!0},parameters:{controls:{exclude:["toggleIsChecked"]}}},l={name:"多個開關按鈕",args:{checkChildren:"on",unCheckChildren:"off",themeColor:"primary",isDisable:!1,isChecked:!0},render:r=>({components:{Toggle:a},setup(){return{args:r}},template:`<div style="display:flex; gap: 16px">
                  <Toggle
                      :checkChildren="args.checkChildren"
                      :unCheckChildren="args.unCheckChildren"
                      themeColor="primary"
                      :isDisable="args.isDisable"
                      :isChecked="args.isChecked">
                  </Toggle>
                  <Toggle
                      :checkChildren="args.checkChildren"
                      :unCheckChildren="args.unCheckChildren"
                      themeColor="secondary"
                      :isDisable="args.isDisable"
                      :isChecked="args.isChecked">
                  </Toggle>
                  <Toggle
                      :checkChildren="args.checkChildren"
                      :unCheckChildren="args.unCheckChildren"
                      themeColor="tertiary"
                      :isDisable="args.isDisable"
                      :isChecked="args.isChecked">
                  </Toggle>
                  <Toggle
                      :checkChildren="args.checkChildren"
                      :unCheckChildren="args.unCheckChildren"
                      themeColor="success"
                      :isDisable="args.isDisable"
                      :isChecked="args.isChecked">
                  </Toggle>
                  <Toggle
                      :checkChildren="args.checkChildren"
                      :unCheckChildren="args.unCheckChildren"
                      themeColor="warning"
                      :isDisable="args.isDisable"
                      :isChecked="args.isChecked">
                  </Toggle>
                  <Toggle
                      :checkChildren="args.checkChildren"
                      :unCheckChildren="args.unCheckChildren"
                      themeColor="error"
                      :isDisable="args.isDisable"
                      :isChecked="args.isChecked">
                  </Toggle>
                  <Toggle
                      :checkChildren="args.checkChildren"
                      :unCheckChildren="args.unCheckChildren"
                      themeColor="info"
                      :isDisable="args.isDisable"
                      :isChecked="args.isChecked">
                  </Toggle>
           </div>
            `})};var g,h,t;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  name: '開關按鈕',
  args: {
    checkChildren: 'on',
    unCheckChildren: 'off',
    themeColor: 'primary',
    isDisable: false,
    isChecked: true
  },
  // 控制 controls 中能控制的參數
  parameters: {
    controls: {
      exclude: ['toggleIsChecked']
    }
  }
}`,...(t=(h=n.parameters)==null?void 0:h.docs)==null?void 0:t.source}}};var C,d,u;l.parameters={...l.parameters,docs:{...(C=l.parameters)==null?void 0:C.docs,source:{originalSource:`{
  name: '多個開關按鈕',
  args: {
    checkChildren: 'on',
    unCheckChildren: 'off',
    themeColor: 'primary',
    isDisable: false,
    isChecked: true
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
                      :checkChildren="args.checkChildren"
                      :unCheckChildren="args.unCheckChildren"
                      themeColor="primary"
                      :isDisable="args.isDisable"
                      :isChecked="args.isChecked">
                  </Toggle>
                  <Toggle
                      :checkChildren="args.checkChildren"
                      :unCheckChildren="args.unCheckChildren"
                      themeColor="secondary"
                      :isDisable="args.isDisable"
                      :isChecked="args.isChecked">
                  </Toggle>
                  <Toggle
                      :checkChildren="args.checkChildren"
                      :unCheckChildren="args.unCheckChildren"
                      themeColor="tertiary"
                      :isDisable="args.isDisable"
                      :isChecked="args.isChecked">
                  </Toggle>
                  <Toggle
                      :checkChildren="args.checkChildren"
                      :unCheckChildren="args.unCheckChildren"
                      themeColor="success"
                      :isDisable="args.isDisable"
                      :isChecked="args.isChecked">
                  </Toggle>
                  <Toggle
                      :checkChildren="args.checkChildren"
                      :unCheckChildren="args.unCheckChildren"
                      themeColor="warning"
                      :isDisable="args.isDisable"
                      :isChecked="args.isChecked">
                  </Toggle>
                  <Toggle
                      :checkChildren="args.checkChildren"
                      :unCheckChildren="args.unCheckChildren"
                      themeColor="error"
                      :isDisable="args.isDisable"
                      :isChecked="args.isChecked">
                  </Toggle>
                  <Toggle
                      :checkChildren="args.checkChildren"
                      :unCheckChildren="args.unCheckChildren"
                      themeColor="info"
                      :isDisable="args.isDisable"
                      :isChecked="args.isChecked">
                  </Toggle>
           </div>
            \`
  })
}`,...(u=(d=l.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};const M=["ToggleDefault","MultipleToggle"];export{l as MultipleToggle,n as ToggleDefault,M as __namedExportsOrder,E as default};

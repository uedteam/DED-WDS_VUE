import{e as u,j as T,w as v,c as x,a as o,n as i,t as _,p as B,o as w}from"./vue.esm-bundler-BK7TsBsS.js";import{c as S}from"./index-Bb4qSo10.js";function V(s){return u(()=>S("toggle",{variants:{themeColor:{primary:"toggle-primary",secondary:"toggle-secondary",tertiary:"toggle-tertiary",success:"toggle-success",warning:"toggle-warning",error:"toggle-error",info:"toggle-info"},isDisable:{true:"button-container-disable"}},compoundVariants:[]})({themeColor:s.themeColor,isDisable:s.isDisable}))}const k={__name:"Toggle",props:{themeColor:{type:String,default:"primary",validator:s=>["primary","secondary","tertiary","success","warning","error","info"].includes(s)},checkChildren:{type:String},unCheckChildren:{type:String},isChecked:{type:Boolean},isDisable:{type:Boolean},customClass:{type:String,default:""}},emits:["toggleIsChecked"],setup(s,{emit:p}){const y=p,r=s,b=V(r),D=u(()=>[b.value,r.customClass].filter(Boolean).join(" ")),e=T(r.isChecked);v(()=>r.isChecked,a=>{e.value=a});const f=()=>{e.value=!e.value,y("toggleIsChecked")};return(a,I)=>(w(),x("div",{class:i([D.value,{"toggle-on":e.value,"toggle-off":!e.value}]),onClick:B(f,["prevent"]),style:{cursor:"pointer"}},[o("div",{class:i(["toggle-thumb",{"toggle-thumb-on":e.value,"toggle-thumb-off":!e.value}])},null,2),o("label",{class:i(["toggle-label",{"toggle-label-on":e.value,"toggle-label-off":!e.value}])},_(e.value===!0?r.checkChildren:r.unCheckChildren),3)],2))}},m=k;k.__docgenInfo={exportName:"default",displayName:"Toggle",description:"",tags:{},props:[{name:"themeColor",type:{name:"string"},defaultValue:{func:!1,value:"'primary'"},values:["primary","secondary","tertiary","success","warning","error","info"]},{name:"checkChildren",type:{name:"string"}},{name:"unCheckChildren",type:{name:"string"}},{name:"isChecked",type:{name:"boolean"}},{name:"isDisable",type:{name:"boolean"}},{name:"customClass",type:{name:"string"},defaultValue:{func:!1,value:"''"}}],events:[{name:"toggleIsChecked"}],sourceFiles:["/Users/auouser/Desktop/Work_Space/DED-WDS_VUE/libs/src/ui/element/Toggle/Toggle.vue"]};const M={title:"Design System/Toggle",component:m,tags:["autodocs"],argTypes:{themeColor:{description:"主題顏色",control:{type:"select"},options:["primary","secondary","tertiary","success","warning","error","info"]},checkChildren:{description:"開啟文字",control:{type:"text"}},unCheckChildren:{description:"關閉文字",control:{type:"text"}},isChecked:{description:"帶入外部參數，控制開關是否開啟",control:{type:"boolean"}},isDisable:{description:"是否禁用",control:{type:"boolean"}},customClass:{description:"客製化樣式",control:{type:"text"}}},parameters:{docs:{title:"開關按鈕",description:{component:"開關按鈕組件的呈現及說明。"}}}},n={name:"開關按鈕",args:{checkChildren:"on",unCheckChildren:"off",themeColor:"primary",isDisable:!1,isChecked:!0},parameters:{controls:{exclude:["toggleIsChecked"]}}},l={name:"多個開關按鈕",args:{checkChildren:"on",unCheckChildren:"off",themeColor:"primary",isDisable:!1,isChecked:!0},render:s=>({components:{Toggle:m},setup(){return{args:s}},template:`<div style="display:flex; gap: 16px">
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
            `})};var c,t,h;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(h=(t=n.parameters)==null?void 0:t.docs)==null?void 0:h.source}}};var g,C,d;l.parameters={...l.parameters,docs:{...(g=l.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(d=(C=l.parameters)==null?void 0:C.docs)==null?void 0:d.source}}};const N=["ToggleDefault","MultipleButton"];export{l as MultipleButton,n as ToggleDefault,N as __namedExportsOrder,M as default};

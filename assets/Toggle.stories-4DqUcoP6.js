import{f as k,r as T,w as y,c as D,b as g,n as r,t as v,I as x,o as _}from"./vue.esm-bundler-Bm7qTojY.js";import{c as w}from"./index-Bb4qSo10.js";function S(e){return k(()=>w("toggle",{variants:{themeColor:{primary:"toggle-primary",secondary:"toggle-secondary",tertiary:"toggle-tertiary",success:"toggle-success",warning:"toggle-warning",error:"toggle-error",info:"toggle-info"},isDisable:{true:"button-container-disable"}}})({themeColor:e.themeColor,isDisable:e.isDisable}))}const o={__name:"Toggle",props:{themeColor:{type:String,default:"primary",validator:e=>["primary","secondary","tertiary","success","warning","error","info"].includes(e)},checkedLabel:{type:String,default:"on"},unCheckedLabel:{type:String,default:"off"},isChecked:{type:Boolean,default:!1},isDisable:{type:Boolean,default:!1},customClass:{type:String,default:""}},emits:["toggleIsChecked"],setup(e,{emit:C}){const m=C,s=e,p=S(s),L=k(()=>[p.value,s.customClass].filter(Boolean).join(" ")),a=T(s.isChecked);y(()=>s.isChecked,c=>{a.value=c});const f=()=>{a.value=!a.value,m("toggleIsChecked")};return(c,V)=>(_(),D("div",{class:r([L.value,{"toggle-on":a.value,"toggle-off":!a.value}]),onClick:x(f,["prevent"]),style:{cursor:"pointer"}},[g("div",{class:r(["toggle-thumb",{"toggle-thumb-on":a.value,"toggle-thumb-off":!a.value}])},null,2),g("label",{class:r(["toggle-label",{"toggle-label-on":a.value,"toggle-label-off":!a.value}])},v(a.value===!0?s.checkedLabel:s.unCheckedLabel),3)],2))}};o.__docgenInfo={exportName:"default",displayName:"Toggle",description:"",tags:{},props:[{name:"themeColor",type:{name:"string"},defaultValue:{func:!1,value:"'primary'"},values:["primary","secondary","tertiary","success","warning","error","info"]},{name:"checkedLabel",type:{name:"string"},defaultValue:{func:!1,value:"'on'"}},{name:"unCheckedLabel",type:{name:"string"},defaultValue:{func:!1,value:"'off'"}},{name:"isChecked",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"isDisable",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"customClass",type:{name:"string"},defaultValue:{func:!1,value:"''"}}],events:[{name:"toggleIsChecked"}],sourceFiles:["/Users/auouser/Desktop/Work_Space/DED-WDS_VUE/libs/src/ui/element/Toggle/Toggle.vue"]};const F={title:"Design System/Toggle",component:o,tags:["autodocs"],argTypes:{checkedLabel:{description:"開啟文字",control:{type:"text"}},unCheckedLabel:{description:"關閉文字",control:{type:"text"}},themeColor:{description:"主題顏色",control:{type:"select"},options:["primary","secondary","tertiary","success","warning","error","info"]},isChecked:{description:"帶入外部參數，控制開關是否開啟",control:{type:"boolean"}},isDisable:{description:"是否禁用",control:{type:"boolean"}},customClass:{description:"客製化樣式",control:{type:"text"}}},parameters:{docs:{title:"Toggle",description:{component:"Toggle 組件的呈現及說明。"}}}},l={name:"Toggle 基礎樣式",args:{checkedLabel:"on",unCheckedLabel:"off",themeColor:"primary",isDisable:!1,isChecked:!0},render:e=>({components:{Toggle:o},setup(){return{args:e}},template:`<div style="display:flex; gap: 16px">
                <Toggle
                    :checkedLabel="args.checkedLabel"
                    :unCheckedLabel="args.unCheckedLabel"
                    :themeColor="args.themeColor"
                    :isDisable="args.isDisable"
                    :isChecked="args.isChecked">
                </Toggle>
            </div>
            `}),parameters:{controls:{exclude:["toggleIsChecked"]}}},n={name:"Toggle 顏色",args:{checkedLabel:"on",unCheckedLabel:"off",isDisable:!1,isChecked:!0},render:e=>({components:{Toggle:o},setup(){return{args:e}},template:`<div style="display:flex; gap: 16px">
                <Toggle
                    :checkedLabel="args.checkedLabel"
                    :unCheckedLabel="args.unCheckedLabel"
                    themeColor="primary"
                    :isDisable="args.isDisable"
                    :isChecked="args.isChecked">
                </Toggle>
                <Toggle
                    :checkedLabel="args.checkedLabel"
                    :unCheckedLabel="args.unCheckedLabel"
                    themeColor="secondary"
                    :isDisable="args.isDisable"
                    :isChecked="args.isChecked">
                </Toggle>
                <Toggle
                    :checkedLabel="args.checkedLabel"
                    :unCheckedLabel="args.unCheckedLabel"
                    themeColor="tertiary"
                    :isDisable="args.isDisable"
                    :isChecked="args.isChecked">
                </Toggle>
                <Toggle
                    :checkedLabel="args.checkedLabel"
                    :unCheckedLabel="args.unCheckedLabel"
                    themeColor="success"
                    :isDisable="args.isDisable"
                    :isChecked="args.isChecked">
                </Toggle>
                <Toggle
                    :checkedLabel="args.checkedLabel"
                    :unCheckedLabel="args.unCheckedLabel"
                    themeColor="warning"
                    :isDisable="args.isDisable"
                    :isChecked="args.isChecked">
                </Toggle>
                <Toggle
                    :checkedLabel="args.checkedLabel"
                    :unCheckedLabel="args.unCheckedLabel"
                    themeColor="error"
                    :isDisable="args.isDisable"
                    :isChecked="args.isChecked">
                </Toggle>
                <Toggle
                    :checkedLabel="args.checkedLabel"
                    :unCheckedLabel="args.unCheckedLabel"
                    themeColor="info"
                    :isDisable="args.isDisable"
                    :isChecked="args.isChecked">
                </Toggle>
            </div>
            `}),parameters:{controls:{exclude:["themeColor"]}}};var t,i,d;l.parameters={...l.parameters,docs:{...(t=l.parameters)==null?void 0:t.docs,source:{originalSource:`{
  name: 'Toggle 基礎樣式',
  args: {
    checkedLabel: 'on',
    unCheckedLabel: 'off',
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
                    :checkedLabel="args.checkedLabel"
                    :unCheckedLabel="args.unCheckedLabel"
                    :themeColor="args.themeColor"
                    :isDisable="args.isDisable"
                    :isChecked="args.isChecked">
                </Toggle>
            </div>
            \`
  }),
  // 控制 controls 中能控制的參數
  parameters: {
    controls: {
      exclude: ['toggleIsChecked']
    }
  }
}`,...(d=(i=l.parameters)==null?void 0:i.docs)==null?void 0:d.source}}};var u,h,b;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
  name: 'Toggle 顏色',
  args: {
    checkedLabel: 'on',
    unCheckedLabel: 'off',
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
                    :checkedLabel="args.checkedLabel"
                    :unCheckedLabel="args.unCheckedLabel"
                    themeColor="primary"
                    :isDisable="args.isDisable"
                    :isChecked="args.isChecked">
                </Toggle>
                <Toggle
                    :checkedLabel="args.checkedLabel"
                    :unCheckedLabel="args.unCheckedLabel"
                    themeColor="secondary"
                    :isDisable="args.isDisable"
                    :isChecked="args.isChecked">
                </Toggle>
                <Toggle
                    :checkedLabel="args.checkedLabel"
                    :unCheckedLabel="args.unCheckedLabel"
                    themeColor="tertiary"
                    :isDisable="args.isDisable"
                    :isChecked="args.isChecked">
                </Toggle>
                <Toggle
                    :checkedLabel="args.checkedLabel"
                    :unCheckedLabel="args.unCheckedLabel"
                    themeColor="success"
                    :isDisable="args.isDisable"
                    :isChecked="args.isChecked">
                </Toggle>
                <Toggle
                    :checkedLabel="args.checkedLabel"
                    :unCheckedLabel="args.unCheckedLabel"
                    themeColor="warning"
                    :isDisable="args.isDisable"
                    :isChecked="args.isChecked">
                </Toggle>
                <Toggle
                    :checkedLabel="args.checkedLabel"
                    :unCheckedLabel="args.unCheckedLabel"
                    themeColor="error"
                    :isDisable="args.isDisable"
                    :isChecked="args.isChecked">
                </Toggle>
                <Toggle
                    :checkedLabel="args.checkedLabel"
                    :unCheckedLabel="args.unCheckedLabel"
                    themeColor="info"
                    :isDisable="args.isDisable"
                    :isChecked="args.isChecked">
                </Toggle>
            </div>
            \`
  }),
  // 控制 controls 中能控制的參數
  parameters: {
    controls: {
      exclude: ['themeColor']
    }
  }
}`,...(b=(h=n.parameters)==null?void 0:h.docs)==null?void 0:b.source}}};const I=["ToggleDefault","ToggleColor"];export{n as ToggleColor,l as ToggleDefault,I as __namedExportsOrder,F as default};

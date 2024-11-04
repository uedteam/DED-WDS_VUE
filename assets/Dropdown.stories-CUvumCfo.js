import{m as _,u as E,r as m,c as i,t as c,e as g,b as f,n as u,l as N,d as b,G as V,o as n,F as z,j as H}from"./vue.esm-bundler-BE8rPDeG.js";import{_ as C}from"./Icon-CMwfZrSH.js";import{_ as S}from"./ListItem-DJObAz6k.js";import{_ as k}from"./List-BfL7r-Ed.js";import"./iframe-Bo1y-7U0.js";import"../sb-preview/runtime.js";const B={class:"dropdown-container"},A={key:0,class:"input-label"},p={__name:"Dropdown",props:_({label:{type:String},placeholder:{type:String},size:{type:String,validator:e=>["small","medium","large"].includes(e),default:"medium"},maxHeight:{type:String},className:{type:String,default:""},options:{type:Array,default:()=>[]}},{modelValue:{},modelModifiers:{}}),emits:["update:modelValue"],setup(e){E(e,"modelValue");const a=e,r=m(null),l=m(!1),v=d=>{r.value=d,l.value=!l};return(d,o)=>(n(),i("div",B,[a.label?(n(),i("label",A,c(a.label),1)):g("",!0),f("div",{ref:"dropdown",class:u(["dropdown",`dropdown-${a.size}`]),role:"listbox",tabindex:"0",onClick:o[0]||(o[0]=s=>l.value=!l.value)},[f("span",{class:u(r.value?"dropdown-selectValue-select":"dropdown-selectValue-unselect")},c(r.value||a.placeholder),3),N(C,{class:u(`icon-${e.size}`),style:{"margin-left":"auto"},name:"arrow_down"},null,8,["class"])],2),l.value?(n(),b(k,{key:1,className:"",isMenu:!0,maxHeight:a.maxHeight},{default:V(()=>[(n(!0),i(z,null,H(a.options,(s,w)=>(n(),b(S,{key:w,label:s.label,value:s.value,href:s.href,onSelectedItem:o[1]||(o[1]=x=>v(x))},null,8,["label","value","href"]))),128))]),_:1},8,["maxHeight"])):g("",!0)]))}};p.__docgenInfo={exportName:"default",displayName:"Dropdown",description:"",tags:{},props:[{name:"label",type:{name:"string"}},{name:"placeholder",type:{name:"string"}},{name:"size",type:{name:"string"},defaultValue:{func:!1,value:"'medium'"},values:["small","medium","large"]},{name:"maxHeight",type:{name:"string"}},{name:"className",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"options",type:{name:"array"},defaultValue:{func:!1,value:"[]"}}],sourceFiles:["D:/98_測試/up/DED-WDS_VUE/libs/src/ui/element/Dropdown/Dropdown.vue"]};const L={title:"Design System/Dropdown",component:p,tags:["autodocs"],argTypes:{options:{description:"資料陣列",control:{type:"object"}},label:{description:"標題",control:{type:"text"}},placeholder:{description:"輸入提示",control:{type:"text"}},size:{description:"輸入框尺寸",control:{type:"select"},options:["small","medium","large"]},maxHeight:{description:"最大高度，自動顯示卷軸 (px)",control:{type:"text"}},className:{description:"客製化樣式",control:{type:"text"}}},parameters:{docs:{title:"Dropdown",description:{component:"Dropdown 組件的呈現及說明。"}}}},t={name:"主要項目",args:{options:[{label:"選項一",value:"option1"},{label:"選項二",value:"option2"},{label:"選項三",value:"option3"}],label:"下拉選單標題",placeholder:"請選擇項目",size:"medium",maxHeight:"",className:""},render:e=>({components:{Dropdown:p},setup(){return{args:e}},template:`
            <Dropdown 
                :options="args.options"
                :label="args.label"
                :placeholder="args.placeholder"
                :size="args.size"
                :maxHeight="args.maxHeight"
                :isDisabled="args.isDisabled"
                :className="args.className"
            >
                
            </Dropdown>
            `}),parameters:{controls:{}}};var D,y,h;t.parameters={...t.parameters,docs:{...(D=t.parameters)==null?void 0:D.docs,source:{originalSource:`{
  name: '主要項目',
  args: {
    options: [{
      "label": "選項一",
      "value": "option1"
    }, {
      "label": "選項二",
      "value": "option2"
    }, {
      "label": "選項三",
      "value": "option3"
    }],
    label: '下拉選單標題',
    placeholder: '請選擇項目',
    size: 'medium',
    maxHeight: '',
    className: ''
  },
  render: args => ({
    components: {
      Dropdown
    },
    setup() {
      // Create a ref for modelValue to be used with v-model
      return {
        args
      };
    },
    template: \`
            <Dropdown 
                :options="args.options"
                :label="args.label"
                :placeholder="args.placeholder"
                :size="args.size"
                :maxHeight="args.maxHeight"
                :isDisabled="args.isDisabled"
                :className="args.className"
            >
                
            </Dropdown>
            \`
  }),
  // 控制 controls 中能控制的參數
  parameters: {
    controls: {
      // include: ['objectFit', 'src', 'value', 'name' ],
    }
  }
}`,...(h=(y=t.parameters)==null?void 0:y.docs)==null?void 0:h.source}}};const O=["DropdownDefault"];export{t as DropdownDefault,O as __namedExportsOrder,L as default};

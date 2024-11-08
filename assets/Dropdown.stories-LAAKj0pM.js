import{m as _,u as N,r as p,a as u,t as m,h as g,b as f,n as i,j as V,g as b,C as E,o as s,F as z,d as C}from"./vue.esm-bundler-wiEVvyCh.js";import{_ as H}from"./Icon-HcFZ1N8v.js";import{_ as S,a as k}from"./List-BQbjFB92.js";import"./iframe-DA8wbGxa.js";import"../sb-preview/runtime.js";const A={class:"dropdown-container"},B={key:0,class:"input-label"},d={__name:"Dropdown",props:_({datasource:{type:Array,default:()=>[]},label:{type:String},placeholder:{type:String},size:{type:String,validator:e=>["small","medium","large"].includes(e),default:"medium"},maxHeight:{type:String},className:{type:String,default:""}},{modelValue:{},modelModifiers:{}}),emits:["update:modelValue"],setup(e){N(e,"modelValue");const a=e,r=p(null),l=p(!1),v=c=>{r.value=c,l.value=!l};return(c,n)=>(s(),u("div",A,[a.label?(s(),u("label",B,m(a.label),1)):g("",!0),f("div",{ref:"dropdown",class:i(["dropdown",`dropdown-${a.size}`]),role:"listbox",tabindex:"0",onClick:n[0]||(n[0]=t=>l.value=!l.value)},[f("span",{class:i(r.value?"dropdown-selectValue-select":"dropdown-selectValue-unselect")},m(r.value||a.placeholder),3),V(H,{class:i(`icon-${e.size}`),style:{"margin-left":"auto"},name:"arrow_down"},null,8,["class"])],2),l.value?(s(),b(S,{key:1,className:"",isMenu:!0,maxHeight:a.maxHeight},{default:E(()=>[(s(!0),u(z,null,C(a.datasource,(t,w)=>(s(),b(k,{key:w,label:t.label,value:t.value,href:t.href,onSelectedItem:n[1]||(n[1]=x=>v(x))},null,8,["label","value","href"]))),128))]),_:1},8,["maxHeight"])):g("",!0)]))}};d.__docgenInfo={exportName:"default",displayName:"Dropdown",description:"",tags:{},props:[{name:"datasource",type:{name:"array"},defaultValue:{func:!1,value:"[]"}},{name:"label",type:{name:"string"}},{name:"placeholder",type:{name:"string"}},{name:"size",type:{name:"string"},defaultValue:{func:!1,value:"'medium'"},values:["small","medium","large"]},{name:"maxHeight",type:{name:"string"}},{name:"className",type:{name:"string"},defaultValue:{func:!1,value:"''"}}],sourceFiles:["D:/98_測試/up/DED-WDS_VUE/libs/src/ui/element/Dropdown/Dropdown.vue"]};const L={title:"Design System/Dropdown",component:d,tags:["autodocs"],argTypes:{datasource:{description:"資料陣列",control:{type:"object"}},label:{description:"標題",control:{type:"text"}},placeholder:{description:"輸入提示",control:{type:"text"}},size:{description:"輸入框尺寸",control:{type:"select"},options:["small","medium","large"]},maxHeight:{description:"最大高度，自動顯示卷軸 (px)",control:{type:"text"}},className:{description:"客製化樣式",control:{type:"text"}}},parameters:{docs:{title:"Dropdown",description:{component:"Dropdown 組件的呈現及說明。"}}}},o={name:"預設項目",args:{datasource:[{label:"選項一",value:"option1"},{label:"選項二",value:"option2"},{label:"選項三",value:"option3"}],label:"下拉選單標題",placeholder:"請選擇項目",size:"medium",maxHeight:"",className:""},render:e=>({components:{Dropdown:d},setup(){return{args:e}},template:`
            <Dropdown 
                :datasource="args.datasource"
                :label="args.label"
                :placeholder="args.placeholder"
                :size="args.size"
                :maxHeight="args.maxHeight"
                :isDisabled="args.isDisabled"
                :className="args.className"
            >
                
            </Dropdown>
            `}),parameters:{controls:{}}};var D,h,y;o.parameters={...o.parameters,docs:{...(D=o.parameters)==null?void 0:D.docs,source:{originalSource:`{
  name: '預設項目',
  args: {
    datasource: [{
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
                :datasource="args.datasource"
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
}`,...(y=(h=o.parameters)==null?void 0:h.docs)==null?void 0:y.source}}};const O=["DropdownDefault"];export{o as DropdownDefault,O as __namedExportsOrder,L as default};

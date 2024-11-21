import{m as x,u as $,e as m,a as d,t as p,f as g,b as f,n as c,j as _,g as b,D as N,o as n,F as z,k as H}from"./vue.esm-bundler-BaxPAcbg.js";import{_ as V}from"./Icon-rUAUAOXH.js";import{_ as k}from"./ListItem-txpafJQ3.js";import{_ as C}from"./List-1Ypl2YTI.js";import"./iframe-DDUDfrN7.js";import"../sb-preview/runtime.js";const E={class:"ded-dropdown-container"},O={key:0,class:"ded-input-label"},i={__name:"Dropdown",props:x({dataSource:{type:Array,default:()=>[]},label:{type:String},placeholder:{type:String},size:{type:String,validator:a=>["small","medium","large"].includes(a),default:"medium"},maxHeight:{type:String},className:{type:String,default:""}},{modelValue:{},modelModifiers:{}}),emits:["update:modelValue"],setup(a){$(a,"modelValue");const e=a,t=m(null),o=m(!1),y=u=>{t.value=u,o.value=!o};return(u,r)=>(n(),d("div",E,[e.label?(n(),d("label",O,p(e.label),1)):g("",!0),f("div",{ref:"dropdown",class:c(["ded-dropdown",`ded-dropdown-${e.size}`]),role:"listbox",tabindex:"0",onClick:r[0]||(r[0]=l=>o.value=!o.value)},[f("span",{class:c(t.value?"ded-dropdown-selectValue-select":"ded-dropdown-selectValue-unselect")},p(t.value||e.placeholder),3),_(V,{class:c(`ded-icon-${a.size}`),style:{"margin-left":"auto"},name:"arrow_down"},null,8,["class"])],2),o.value?(n(),b(C,{key:1,className:"",isMenu:!0,maxHeight:e.maxHeight},{default:N(()=>[(n(!0),d(z,null,H(e.dataSource,(l,w)=>(n(),b(k,{key:w,label:l.label,value:l.value,href:l.href,onSelectedItem:r[1]||(r[1]=v=>y(v))},null,8,["label","value","href"]))),128))]),_:1},8,["maxHeight"])):g("",!0)]))}};i.__docgenInfo={exportName:"default",displayName:"Dropdown",description:"",tags:{},props:[{name:"dataSource",type:{name:"array"},defaultValue:{func:!1,value:"[]"}},{name:"label",type:{name:"string"}},{name:"placeholder",type:{name:"string"}},{name:"size",type:{name:"string"},defaultValue:{func:!1,value:'"medium"'},values:["small","medium","large"]},{name:"maxHeight",type:{name:"string"}},{name:"className",type:{name:"string"},defaultValue:{func:!1,value:'""'}}],sourceFiles:["D:/98_測試/up/DED-WDS_VUE/libs/src/ui/element/Dropdown/Dropdown.vue"]};function j(a){return`[
    ${a.map(e=>`{
        label: '${e.label}',
        value: '${e.value}',
    }`).join(`,
    `)}
  ]`}const P={title:"Design System/Dropdown",component:i,tags:["autodocs"],argTypes:{dataSource:{description:"資料來源",control:{type:"object"},table:{type:{summary:"{ label: string; value: string; }[]"}}},label:{description:"標題",control:{type:"text"}},placeholder:{description:"輸入提示",control:{type:"text"}},size:{description:"輸入框尺寸",control:{type:"select"},options:["small","medium","large"]},maxHeight:{description:"最大高度，自動顯示卷軸 (px)",control:{type:"text"}},className:{description:"客製化樣式",control:{type:"text"}}},parameters:{docs:{title:"Dropdown",description:{component:"Dropdown 組件的呈現及說明。"}}}},s={name:"預設項目",args:{dataSource:[{label:"Option1",value:"option1"},{label:"Option2",value:"option2"},{label:"Option3",value:"option3"}],label:"Label",placeholder:"PLease Select",size:"medium",maxHeight:"",className:""},render:a=>({components:{Dropdown:i},setup(){return{args:a}},template:`
            <Dropdown 
                :dataSource="args.dataSource"
                :label="args.label"
                :placeholder="args.placeholder"
                :size="args.size"
                :maxHeight="args.maxHeight"
                :className="args.className"
            >
            </Dropdown>
            `}),parameters:{controls:{},docs:{source:{transform:(a,e)=>{const{args:t}=e;return["<Dropdown",`  :datasource="${j(t.dataSource)}"`,`  :label="${t.label}"`,`  :placeholder="${t.placeholder}"`,`  :size="${t.size}"`,`  :maxHeight="${t.maxHeight}"`,`  :className="${t.className}"`,">","</Dropdown>"].join(`
`).trim()}}}}};var h,D,S;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
  name: '預設項目',
  args: {
    dataSource: [{
      "label": "Option1",
      "value": "option1"
    }, {
      "label": "Option2",
      "value": "option2"
    }, {
      "label": "Option3",
      "value": "option3"
    }],
    label: "Label",
    placeholder: "PLease Select",
    size: "medium",
    maxHeight: "",
    className: ""
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
                :dataSource="args.dataSource"
                :label="args.label"
                :placeholder="args.placeholder"
                :size="args.size"
                :maxHeight="args.maxHeight"
                :className="args.className"
            >
            </Dropdown>
            \`
  }),
  // 控制 controls 中能控制的參數
  parameters: {
    controls: {
      // include: ['objectFit', 'src', 'value', 'name' ],
    },
    docs: {
      source: {
        transform: (src, storyContext) => {
          const {
            args
          } = storyContext;
          const dataSourceString = formatDataSource(args.dataSource);
          return ['<Dropdown', \`  :datasource="\${dataSourceString}"\`, \`  :label="\${args.label}"\`, \`  :placeholder="\${args.placeholder}"\`, \`  :size="\${args.size}"\`, \`  :maxHeight="\${args.maxHeight}"\`, \`  :className="\${args.className}"\`, '>', '</Dropdown>'].join('\\n').trim();
        }
      }
    }
  }
}`,...(S=(D=s.parameters)==null?void 0:D.docs)==null?void 0:S.source}}};const T=["DropdownDefault"];export{s as DropdownDefault,T as __namedExportsOrder,P as default};

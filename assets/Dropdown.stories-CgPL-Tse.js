import{m as x,u as $,e as m,a as d,t as p,f as g,b as f,n as u,j as _,g as b,E as N,o,F as V,k as z}from"./vue.esm-bundler-_3atnb9w.js";import{_ as H}from"./Icon-Bfh9I3oh.js";import{_ as k}from"./ListItem-DHFNysaj.js";import{_ as C}from"./List-B2BdhkeZ.js";import"./iframe-CYxoECph.js";import"../sb-preview/runtime.js";const E={class:"ded-dropdown-container"},O={key:0,class:"ded-input-label"},c={__name:"Dropdown",props:x({dataSource:{type:Array,default:()=>[]},label:{type:String,default:""},placeholder:{type:String,default:"Placeholder..."},size:{type:String,validator:a=>["small","medium","large"].includes(a),default:"medium"},maxHeight:{type:String},className:{type:String,default:""}},{modelValue:{},modelModifiers:{}}),emits:["update:modelValue"],setup(a){$(a,"modelValue");const e=a,l=m(null),t=m(!1),S=i=>{l.value=i,t.value=!t};return(i,r)=>(o(),d("div",E,[e.label?(o(),d("label",O,p(e.label),1)):g("",!0),f("div",{ref:"dropdown",class:u(["ded-dropdown",`ded-dropdown-${e.size}`]),role:"listbox",tabindex:"0",onClick:r[0]||(r[0]=n=>t.value=!t.value)},[f("span",{class:u(l.value?"ded-dropdown-selectValue-select":"ded-dropdown-selectValue-unselect")},p(l.value||e.placeholder),3),_(H,{class:u(`ded-icon-${a.size}`),style:{"margin-left":"auto"},name:"arrow_down"},null,8,["class"])],2),t.value?(o(),b(C,{key:1,className:"",isMenu:!0,maxHeight:e.maxHeight},{default:N(()=>[(o(!0),d(V,null,z(e.dataSource,(n,v)=>(o(),b(k,{key:v,label:n.label,value:n.value,href:n.href,onSelectedItem:r[1]||(r[1]=w=>S(w))},null,8,["label","value","href"]))),128))]),_:1},8,["maxHeight"])):g("",!0)]))}};c.__docgenInfo={exportName:"default",displayName:"Dropdown",description:"",tags:{},props:[{name:"dataSource",type:{name:"array"},defaultValue:{func:!1,value:"[]"}},{name:"label",type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"placeholder",type:{name:"string"},defaultValue:{func:!1,value:'"Placeholder..."'}},{name:"size",type:{name:"string"},defaultValue:{func:!1,value:'"medium"'},values:["small","medium","large"]},{name:"maxHeight",type:{name:"string"}},{name:"className",type:{name:"string"},defaultValue:{func:!1,value:'""'}}],sourceFiles:["/Users/auouser/Desktop/Work_Space/DED-WDS_VUE/libs/src/ui/element/Dropdown/Dropdown.vue"]};function j(a){return`[
    ${a.map(e=>`{
        label: '${e.label}',
        value: '${e.value}',
    }`).join(`,
    `)}
  ]`}const I={title:"Design System/Dropdown",component:c,tags:["autodocs"],argTypes:{dataSource:{description:"資料來源",control:{type:"object"},table:{type:{summary:"{ label: string; value: string; }[]"}}},label:{description:"標題",control:{type:"text"}},placeholder:{description:"輸入提示",control:{type:"text"}},size:{description:"輸入框尺寸",control:{type:"select"},options:["small","medium","large"],table:{type:{summary:"small | medium | large"}}},maxHeight:{description:"最大高度，自動顯示卷軸 (px)",control:{type:"text"}},className:{description:"客製化樣式",control:{type:"text"}}},parameters:{docs:{title:"Dropdown",description:{component:"Dropdown 組件的呈現及說明。"}}}},s={name:"預設項目",args:{dataSource:[{label:"Option1",value:"option1"},{label:"Option2",value:"option2"},{label:"Option3",value:"option3"}],label:"Label",placeholder:"Placeholder...",size:"medium",maxHeight:"",className:""},render:a=>({components:{Dropdown:c},setup(){return{args:a}},template:`
            <Dropdown 
                :dataSource="args.dataSource"
                :label="args.label"
                :placeholder="args.placeholder"
                :size="args.size"
                :maxHeight="args.maxHeight"
                :className="args.className"
            >
            </Dropdown>
            `}),parameters:{controls:{},docs:{source:{transform:(a,e)=>{const{args:l}=e;return["<Dropdown",`  :datasource="${j(l.dataSource)}"`,`  :label="${l.label}"`,`  :placeholder="${l.placeholder}"`,`  :size="${l.size}"`,`  :maxHeight="${l.maxHeight}"`,`  :className="${l.className}"`,">","</Dropdown>"].join(`
`).trim()}}}}};var h,y,D;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
    placeholder: "Placeholder...",
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
}`,...(D=(y=s.parameters)==null?void 0:y.docs)==null?void 0:D.source}}};const U=["DropdownDefault"];export{s as DropdownDefault,U as __namedExportsOrder,I as default};

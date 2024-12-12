import{m as w,u as y,d as s,j as x,k as z,D as N,a as u,t as _,e as f,b as $,f as v,C as V,q as k,T as E,F as O,o as d}from"./vue.esm-bundler-CTfO_w4g.js";import{_ as C}from"./List-Ce_fDz6t.js";import{_ as H}from"./Input-6KNA26SK.js";import{g as P}from"./positionUtils-CIbX64TV.js";import"./Icon-B1v4yc6p.js";import"./iframe-eB0XTDOC.js";import"../sb-preview/runtime.js";const j={key:0,class:"ded-input-label"},L=8,B="bottom",c={__name:"Dropdown",props:w({dataSource:{type:Array,required:!0,default:()=>[]},label:{type:String,default:""},placeholder:{type:String,default:"Placeholder..."},size:{type:String,validator:a=>["small","medium","large"].includes(a),default:"medium"},className:{type:String,default:""}},{modelValue:{},modelModifiers:{}}),emits:["update:modelValue"],setup(a){y(a,"modelValue");const e=a,t=s(""),n=s(!1),l=s(null),p=s({}),S=o=>{t.value=o,n.value=!1},m=o=>{l.value&&!l.value.contains(o.target)&&(n.value=!1)},r=()=>{if(l.value){const o=l.value.getBoundingClientRect();p.value=P({top:o.top,left:o.left},{width:o.width,height:o.height},B,`${L}px`,!0)}};return x(()=>{document.addEventListener("click",m),window.addEventListener("resize",r),z(()=>r())}),N(()=>{document.removeEventListener("click",m),window.removeEventListener("resize",r)}),(o,g)=>(d(),u(O,null,[e.label?(d(),u("label",j,_(e.label),1)):f("",!0),$("div",{ref_key:"dropdown",ref:l,class:"ded-dropdown",role:"listbox",tabindex:"0",onClick:g[0]||(g[0]=()=>{n.value=!n.value,r()})},[v(H,{type:"text",size:e.size,placeholder:e.placeholder,initValue:t.value,isOpen:n.value,className:"ded-dropdown-input"},null,8,["size","placeholder","initValue","isOpen"])],512),(d(),V(E,{to:"body"},[n.value?(d(),u("div",{key:0,class:"ded-tooltip",style:k(p.value)},[v(C,{dataSource:e.dataSource,hasOutline:!0,onSelectedItem:S},null,8,["dataSource"])],4)):f("",!0)]))],64))}};c.__docgenInfo={exportName:"default",displayName:"Dropdown",description:"",tags:{},props:[{name:"dataSource",type:{name:"array"},required:!0,defaultValue:{func:!1,value:"[]"}},{name:"label",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"placeholder",type:{name:"string"},defaultValue:{func:!1,value:"'Placeholder...'"}},{name:"size",type:{name:"string"},defaultValue:{func:!1,value:"'medium'"},values:["small","medium","large"]},{name:"className",type:{name:"string"},defaultValue:{func:!1,value:"''"}}],sourceFiles:["/Users/auouser/Desktop/Work_Space/DED-WDS_VUE/libs/src/ui/element/Dropdown/Dropdown.vue"]};function F(a){return`[
    ${a.map(e=>`{
        label: '${e.label}',
        value: '${e.value}',
    }`).join(`,
    `)}
  ]`}const W={title:"Component/Dropdown",component:c,tags:["autodocs"],argTypes:{dataSource:{description:"資料來源",control:{type:"object"},table:{type:{summary:"{ label: string; value: string; }[]"}}},label:{description:"標題",control:{type:"text"}},placeholder:{description:"輸入提示",control:{type:"text"}},size:{description:"輸入框尺寸",control:{type:"select"},options:["small","medium","large"],table:{type:{summary:"small | medium | large"}}},className:{description:"客製化樣式",control:{type:"text"}}},parameters:{docs:{title:"Dropdown",description:{component:"Dropdown 組件的呈現及說明。"}}}},i={name:"預設項目",args:{dataSource:[{label:"Option1",value:"option1"},{label:"Option2",value:"option2"},{label:"Option3",value:"option3"}],label:"Label",placeholder:"Placeholder...",size:"medium",className:""},render:a=>({components:{Dropdown:c},setup(){return{args:a}},template:`
            <Dropdown 
                :dataSource="args.dataSource"
                :label="args.label"
                :placeholder="args.placeholder"
                :size="args.size"
                :maxHeight="args.maxHeight"
                :className="args.className"
            >
            </Dropdown>
            `}),parameters:{controls:{},docs:{source:{transform:(a,e)=>{const{args:t}=e;return["<Dropdown",`  :datasource="${F(t.dataSource)}"`,`  :label="${t.label}"`,`  :placeholder="${t.placeholder}"`,`  :size="${t.size}"`,`  :maxHeight="${t.maxHeight}"`,`  :className="${t.className}"`,">","</Dropdown>"].join(`
`).trim()}}}}};var b,h,D;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(D=(h=i.parameters)==null?void 0:h.docs)==null?void 0:D.source}}};const G=["DropdownDefault"];export{i as DropdownDefault,G as __namedExportsOrder,W as default};

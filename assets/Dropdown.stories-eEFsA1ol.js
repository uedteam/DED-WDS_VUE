import{m as D,u as y,f as s,j as x,k as z,E as N,a as c,t as _,d as f,e as $,b as v,C as V,s as k,T as E,F as O,o as d}from"./vue.esm-bundler-D-gFHCZh.js";import{_ as C}from"./List-_YKTnFsp.js";import{_ as H}from"./Input-DbxzdlSy.js";import{g as L}from"./positionUtils-CIbX64TV.js";import"./Icon-Djohfq75.js";import"./iframe-CsAQBZYV.js";import"../sb-preview/runtime.js";const P={key:0,class:"ded-input-label"},j=8,B="bottom",u={__name:"Dropdown",props:D({dataSource:{type:Array,required:!0,default:()=>[]},label:{type:String,default:""},placeholder:{type:String,default:"Placeholder..."},size:{type:String,validator:a=>["small","medium","large"].includes(a),default:"medium"},className:{type:String,default:""}},{modelValue:{},modelModifiers:{}}),emits:["update:modelValue"],setup(a){y(a,"modelValue");const e=a,o=s(""),n=s(!1),r=s(null),p=s({}),S=t=>{o.value=t,n.value=!1},m=t=>{r.value&&!r.value.contains(t.target)&&(n.value=!1)},l=()=>{if(r.value){const t=r.value.getBoundingClientRect();p.value=L({top:t.top+window.scrollY,left:t.left+window.scrollX},{width:t.width,height:t.height},B,`${j}px`,!0)}};return x(()=>{document.addEventListener("click",m),window.addEventListener("resize",l),window.addEventListener("scroll",l),z(()=>l())}),N(()=>{document.removeEventListener("click",m),window.removeEventListener("resize",l),window.removeEventListener("scroll",l)}),(t,g)=>(d(),c(O,null,[e.label?(d(),c("label",P,_(e.label),1)):f("",!0),$("div",{ref_key:"dropdown",ref:r,class:"ded-dropdown",role:"listbox",tabindex:"0",onClick:g[0]||(g[0]=()=>{n.value=!n.value,l()})},[v(H,{type:"text",size:e.size,placeholder:e.placeholder,initValue:o.value,isOpen:n.value,className:"ded-dropdown-input"},null,8,["size","placeholder","initValue","isOpen"])],512),(d(),V(E,{to:"body"},[n.value?(d(),c("div",{key:0,class:"ded-tooltip",style:k(p.value)},[v(C,{dataSource:e.dataSource,hasOutline:!0,onSelectedItem:S},null,8,["dataSource"])],4)):f("",!0)]))],64))}};u.__docgenInfo={exportName:"default",displayName:"Dropdown",description:"",tags:{},props:[{name:"dataSource",type:{name:"array"},required:!0,defaultValue:{func:!1,value:"[]"}},{name:"label",type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"placeholder",type:{name:"string"},defaultValue:{func:!1,value:'"Placeholder..."'}},{name:"size",type:{name:"string"},defaultValue:{func:!1,value:'"medium"'},values:["small","medium","large"]},{name:"className",type:{name:"string"},defaultValue:{func:!1,value:'""'}}],sourceFiles:["/Users/auouser/Desktop/Work_Space/DED-WDS_VUE/libs/src/ui/element/Dropdown/Dropdown.vue"]};function F(a){return`[
    ${a.map(e=>`{
        label: '${e.label}',
        value: '${e.value}',
    }`).join(`,
    `)}
  ]`}const W={title:"Component/Dropdown",component:u,tags:["autodocs"],argTypes:{dataSource:{description:"資料來源",control:{type:"object"},table:{type:{summary:"{ label: string; value: string; }[]"}}},label:{description:"標題",control:{type:"text"}},placeholder:{description:"輸入提示",control:{type:"text"}},size:{description:"輸入框尺寸",control:{type:"select"},options:["small","medium","large"],table:{type:{summary:"small | medium | large"}}},className:{description:"客製化樣式",control:{type:"text"}}},parameters:{docs:{title:"Dropdown",description:{component:"Dropdown 組件的呈現及說明。"}}}},i={name:"預設項目",args:{dataSource:[{label:"Option1",value:"option1"},{label:"Option2",value:"option2"},{label:"Option3",value:"option3"}],label:"Label",placeholder:"Placeholder...",size:"medium",className:""},render:a=>({components:{Dropdown:u},setup(){return{args:a}},template:`
            <Dropdown 
                :dataSource="args.dataSource"
                :label="args.label"
                :placeholder="args.placeholder"
                :size="args.size"
                :maxHeight="args.maxHeight"
                :className="args.className"
            >
            </Dropdown>
            `}),parameters:{controls:{},docs:{source:{transform:(a,e)=>{const{args:o}=e;return["<Dropdown",`  :datasource="${F(o.dataSource)}"`,`  :label="${o.label}"`,`  :placeholder="${o.placeholder}"`,`  :size="${o.size}"`,`  :maxHeight="${o.maxHeight}"`,`  :className="${o.className}"`,">","</Dropdown>"].join(`
`).trim()}}}}};var w,b,h;i.parameters={...i.parameters,docs:{...(w=i.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(h=(b=i.parameters)==null?void 0:b.docs)==null?void 0:h.source}}};const X=["DropdownDefault"];export{i as DropdownDefault,X as __namedExportsOrder,W as default};

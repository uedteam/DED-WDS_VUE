import{m as h,u as V,k as u,q as z,z as N,s as _,c,t as $,e as v,a as x,b as f,j as k,x as E,T as O,F as C,o as d}from"./vue.esm-bundler-qCK_iSPY.js";import{_ as L}from"./List-DULqu3h0.js";import{_ as P}from"./Input-B5oZbn0w.js";import{g as j}from"./positionUtils-CIbX64TV.js";import"./Icon-DNPtS85k.js";import"./iframe-B08jCWer.js";import"../sb-preview/runtime.js";const B={key:0,class:"ded-input-label"},F=8,T="bottom",p={__name:"Dropdown",props:h({dataSource:{type:Array,required:!0,default:()=>[]},label:{type:String,default:""},placeholder:{type:String,default:"Placeholder"},size:{type:String,validator:a=>["small","medium","large"].includes(a),default:"medium"},className:{type:String,default:""}},{modelValue:{},modelModifiers:{}}),emits:["update:modelValue"],setup(a){const l=V(a,"modelValue"),e=a,t=u(!1),r=u(null),m=u({}),S=o=>{l.value=o,t.value=!1},g=o=>{r.value&&!r.value.contains(o.target)&&(t.value=!1)},n=()=>{if(r.value){const o=r.value.getBoundingClientRect();m.value=j({top:o.top+window.scrollY,left:o.left+window.scrollX},{width:o.width,height:o.height},T,`${F}px`,!0)}};return z(()=>{document.addEventListener("click",g),window.addEventListener("resize",n),window.addEventListener("scroll",n),N(()=>n())}),_(()=>{document.removeEventListener("click",g),window.removeEventListener("resize",n),window.removeEventListener("scroll",n)}),(o,s)=>(d(),c(C,null,[e.label?(d(),c("label",B,$(e.label),1)):v("",!0),x("div",{ref_key:"dropdown",ref:r,class:"ded-dropdown",role:"listbox",tabindex:"0",onClick:s[1]||(s[1]=()=>{t.value=!t.value,n()})},[f(P,{type:"text",size:e.size,placeholder:e.placeholder,isOpen:t.value,className:"ded-dropdown-input",modelValue:l.value,"onUpdate:modelValue":s[0]||(s[0]=D=>l.value=D)},null,8,["size","placeholder","isOpen","modelValue"])],512),(d(),k(O,{to:"body"},[t.value?(d(),c("div",{key:0,class:"ded-tooltip",style:E(m.value)},[f(L,{dataSource:e.dataSource,hasOutline:!0,onOnSelect:S},null,8,["dataSource"])],4)):v("",!0)]))],64))}};p.__docgenInfo={exportName:"default",displayName:"Dropdown",description:"",tags:{},props:[{name:"dataSource",type:{name:"array"},required:!0,defaultValue:{func:!1,value:"[]"}},{name:"label",type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"placeholder",type:{name:"string"},defaultValue:{func:!1,value:'"Placeholder"'}},{name:"size",type:{name:"string"},defaultValue:{func:!1,value:'"medium"'},values:["small","medium","large"]},{name:"className",type:{name:"string"},defaultValue:{func:!1,value:'""'}}],sourceFiles:["/Users/auouser/Desktop/Work_Space/DED-WDS_VUE/libs/src/ui/element/Dropdown/Dropdown.vue"]};function A(a){return`[
    ${a.map(l=>`{
        label: '${l.label}',
        value: '${l.value}',
    }`).join(`,
    `)}
  ]`}const Y={title:"Component/Dropdown",component:p,tags:["autodocs"],argTypes:{dataSource:{description:"資料來源",control:{type:"object"},table:{type:{summary:"{ label: string; value: string; }[]"}}},label:{description:"標題",control:{type:"text"}},placeholder:{description:"輸入提示",control:{type:"text"}},size:{description:"輸入框尺寸",control:{type:"select"},options:["small","medium","large"],table:{type:{summary:"small | medium | large"}}},className:{description:"客製化樣式",control:{type:"text"}},modelValue:{description:"輸入值",control:{type:"select",labels:{"":"none",option1:"option1",option2:"option2",option3:"option3"}},options:["","option1","option2","option3"],table:{type:{summary:"string"},category:"v-model"}}},parameters:{docs:{title:"Dropdown",description:{component:"Dropdown 組件的呈現及說明。"}}}},i={name:"預設項目",args:{dataSource:[{label:"Option1",value:"option1"},{label:"Option2",value:"option2"},{label:"Option3",value:"option3"}],label:"Label",placeholder:"Placeholder",size:"medium",className:"",modelValue:""},render:a=>({components:{Dropdown:p},setup(){return{args:a}},template:`
            <Dropdown 
                :dataSource="args.dataSource"
                :label="args.label"
                :placeholder="args.placeholder"
                :size="args.size"
                :className="args.className"
                v-model="args.modelValue"
            >
            </Dropdown>
            `}),parameters:{controls:{},docs:{source:{transform:(a,l)=>{const{args:e}=l;return["<Dropdown",`  :datasource="${A(e.dataSource)}"`,`  :label="${e.label}"`,`  :placeholder="${e.placeholder}"`,`  :size="${e.size}"`,`  :className="${e.className}"`,'  v-model="modelValue"',">","</Dropdown>"].join(`
`).trim()}}}}};var b,w,y;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
    placeholder: "Placeholder",
    size: "medium",
    className: "",
    modelValue: ""
  },
  render: args => ({
    components: {
      Dropdown
    },
    setup() {
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
                :className="args.className"
                v-model="args.modelValue"
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
          return ['<Dropdown', \`  :datasource="\${dataSourceString}"\`, \`  :label="\${args.label}"\`, \`  :placeholder="\${args.placeholder}"\`, \`  :size="\${args.size}"\`, \`  :className="\${args.className}"\`, \`  v-model="modelValue"\`, '>', '</Dropdown>'].join('\\n').trim();
        }
      }
    }
  }
}`,...(y=(w=i.parameters)==null?void 0:w.docs)==null?void 0:y.source}}};const G=["DropdownDefault"];export{i as DropdownDefault,G as __namedExportsOrder,Y as default};

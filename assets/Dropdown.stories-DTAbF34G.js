import{m as $,u as N,e as i,q as V,s as k,G as E,a as c,t as C,f as h,b,g as m,n as H,l as w,d as O,E as L,T as P,o as r,F as j,j as F}from"./vue.esm-bundler-BHaSr8M7.js";import{_ as B}from"./Icon-JeNFLYyn.js";import{_ as T}from"./ListItem-BeEj1NBi.js";import{_ as A}from"./List-CApCRBCE.js";import{g as M}from"./positionUtils-CIbX64TV.js";import{_ as U}from"./Input-C-RYGBjx.js";import"./iframe-DRgkzw6m.js";import"../sb-preview/runtime.js";const q={class:"ded-dropdown-container"},I={key:0,class:"ded-input-label"},R={class:"ded-dropdown-input"},W=8,G="bottom",J=!0,g={__name:"Dropdown",props:$({dataSource:{type:Array,required:!0,default:()=>[]},label:{type:String,default:""},placeholder:{type:String,default:"Placeholder..."},size:{type:String,validator:a=>["small","medium","large"].includes(a),default:"medium"},className:{type:String,default:""}},{modelValue:{},modelModifiers:{}}),emits:["update:modelValue"],setup(a){N(a,"modelValue");const e=a,o=i(""),n=i(!1),s=i(null),f=i({}),_=t=>{o.value=t,n.value=!1},v=t=>{s.value&&!s.value.contains(t.target)&&(n.value=!1)},p=()=>{if(s.value){const t=s.value.getBoundingClientRect(),l={width:t.width,height:t.height};f.value=M({top:t.top,left:t.left},l,G,`${W}px`,J)}};return V(()=>{document.addEventListener("click",v),window.addEventListener("resize",p),k(()=>p())}),E(()=>{document.removeEventListener("click",v),window.removeEventListener("resize",p)}),(t,l)=>(r(),c("div",q,[e.label?(r(),c("label",I,C(e.label),1)):h("",!0),b("div",{ref_key:"dropdown",ref:s,class:"ded-dropdown",role:"listbox",tabindex:"0",onClick:l[0]||(l[0]=d=>n.value=!n.value)},[b("div",R,[m(U,{type:"text",size:e.size,placeholder:e.placeholder,initValue:o.value},null,8,["size","placeholder","initValue"])]),m(B,{class:H(["ded-icon-small","ded-dropdown-close"]),name:n.value?"chevronUp":"chevronDown"},null,8,["name"])],512),(r(),w(P,{to:"body"},[n.value?(r(),c("div",{key:0,class:"ded-tooltip",style:O(f.value)},[m(A,null,{default:L(()=>[(r(!0),c(j,null,F(e.dataSource,(d,x)=>(r(),w(T,{key:x,label:d.label,value:d.value,href:d.href,onSelectedItem:l[1]||(l[1]=z=>_(z))},null,8,["label","value","href"]))),128))]),_:1})],4)):h("",!0)]))]))}};g.__docgenInfo={exportName:"default",displayName:"Dropdown",description:"",tags:{},props:[{name:"dataSource",type:{name:"array"},required:!0,defaultValue:{func:!1,value:"[]"}},{name:"label",type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"placeholder",type:{name:"string"},defaultValue:{func:!1,value:'"Placeholder..."'}},{name:"size",type:{name:"string"},defaultValue:{func:!1,value:'"medium"'},values:["small","medium","large"]},{name:"className",type:{name:"string"},defaultValue:{func:!1,value:'""'}}],sourceFiles:["/Users/auouser/Desktop/Work_Space/DED-WDS_VUE/libs/src/ui/element/Dropdown/Dropdown.vue"]};function K(a){return`[
    ${a.map(e=>`{
        label: '${e.label}',
        value: '${e.value}',
    }`).join(`,
    `)}
  ]`}const ne={title:"Design System/Dropdown",component:g,tags:["autodocs"],argTypes:{dataSource:{description:"資料來源",control:{type:"object"},table:{type:{summary:"{ label: string; value: string; }[]"}}},label:{description:"標題",control:{type:"text"}},placeholder:{description:"輸入提示",control:{type:"text"}},size:{description:"輸入框尺寸",control:{type:"select"},options:["small","medium","large"],table:{type:{summary:"small | medium | large"}}},className:{description:"客製化樣式",control:{type:"text"}}},parameters:{docs:{title:"Dropdown",description:{component:"Dropdown 組件的呈現及說明。"}}}},u={name:"預設項目",args:{dataSource:[{label:"Option1",value:"option1"},{label:"Option2",value:"option2"},{label:"Option3",value:"option3"}],label:"Label",placeholder:"Placeholder...",size:"medium",className:""},render:a=>({components:{Dropdown:g},setup(){return{args:a}},template:`
            <Dropdown 
                :dataSource="args.dataSource"
                :label="args.label"
                :placeholder="args.placeholder"
                :size="args.size"
                :maxHeight="args.maxHeight"
                :className="args.className"
            >
            </Dropdown>
            `}),parameters:{controls:{},docs:{source:{transform:(a,e)=>{const{args:o}=e;return["<Dropdown",`  :datasource="${K(o.dataSource)}"`,`  :label="${o.label}"`,`  :placeholder="${o.placeholder}"`,`  :size="${o.size}"`,`  :maxHeight="${o.maxHeight}"`,`  :className="${o.className}"`,">","</Dropdown>"].join(`
`).trim()}}}}};var D,y,S;u.parameters={...u.parameters,docs:{...(D=u.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(S=(y=u.parameters)==null?void 0:y.docs)==null?void 0:S.source}}};const le=["DropdownDefault"];export{u as DropdownDefault,le as __namedExportsOrder,ne as default};

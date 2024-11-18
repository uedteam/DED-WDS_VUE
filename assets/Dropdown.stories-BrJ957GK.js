import{m as x,u as $,e as m,a as u,t as p,f as g,b as f,n as c,j as _,g as b,D as N,o as t,F as z,k as H}from"./vue.esm-bundler-ChZ6yN_a.js";import{_ as V}from"./Icon-DaRty0JN.js";import{_ as E}from"./ListItem-BonqpEsP.js";import{_ as C}from"./List-BOOzcMct.js";import"./iframe-ARkq-hpE.js";import"../sb-preview/runtime.js";const k={class:"dropdown-container"},A={key:0,class:"input-label"},d={__name:"Dropdown",props:x({dataSource:{type:Array,default:()=>[]},label:{type:String},placeholder:{type:String},size:{type:String,validator:a=>["small","medium","large"].includes(a),default:"medium"},maxHeight:{type:String},className:{type:String,default:""}},{modelValue:{},modelModifiers:{}}),emits:["update:modelValue"],setup(a){$(a,"modelValue");const e=a,o=m(null),r=m(!1),y=i=>{o.value=i,r.value=!r};return(i,n)=>(t(),u("div",k,[e.label?(t(),u("label",A,p(e.label),1)):g("",!0),f("div",{ref:"dropdown",class:c(["dropdown",`dropdown-${e.size}`]),role:"listbox",tabindex:"0",onClick:n[0]||(n[0]=l=>r.value=!r.value)},[f("span",{class:c(o.value?"dropdown-selectValue-select":"dropdown-selectValue-unselect")},p(o.value||e.placeholder),3),_(V,{class:c(`icon-${a.size}`),style:{"margin-left":"auto"},name:"arrow_down"},null,8,["class"])],2),r.value?(t(),b(C,{key:1,className:"",isMenu:!0,maxHeight:e.maxHeight},{default:N(()=>[(t(!0),u(z,null,H(e.dataSource,(l,w)=>(t(),b(E,{key:w,label:l.label,value:l.value,href:l.href,onSelectedItem:n[1]||(n[1]=v=>y(v))},null,8,["label","value","href"]))),128))]),_:1},8,["maxHeight"])):g("",!0)]))}};d.__docgenInfo={exportName:"default",displayName:"Dropdown",description:"",tags:{},props:[{name:"dataSource",type:{name:"array"},defaultValue:{func:!1,value:"[]"}},{name:"label",type:{name:"string"}},{name:"placeholder",type:{name:"string"}},{name:"size",type:{name:"string"},defaultValue:{func:!1,value:'"medium"'},values:["small","medium","large"]},{name:"maxHeight",type:{name:"string"}},{name:"className",type:{name:"string"},defaultValue:{func:!1,value:'""'}}],sourceFiles:["/Users/auouser/Desktop/Work_Space/DED-WDS_VUE/libs/src/ui/element/Dropdown/Dropdown.vue"]};function j(a){return`[
    ${a.map(e=>`{
        label: '${e.label}',
        value: '${e.value}',
    }`).join(`,
    `)}
  ]`}const L={title:"Design System/Dropdown",component:d,tags:["autodocs"],argTypes:{dataSource:{description:"資料來源",control:{type:"object"},table:{type:{summary:"{ label: string; value: string; }[]"}}},label:{description:"標題",control:{type:"text"}},placeholder:{description:"輸入提示",control:{type:"text"}},size:{description:"輸入框尺寸",control:{type:"select"},options:["small","medium","large"]},maxHeight:{description:"最大高度，自動顯示卷軸 (px)",control:{type:"text"}},className:{description:"客製化樣式",control:{type:"text"}}},parameters:{docs:{title:"Dropdown",description:{component:"Dropdown 組件的呈現及說明。"}}}},s={name:"預設項目",args:{dataSource:[{label:"選項一",value:"option1"},{label:"選項二",value:"option2"},{label:"選項三",value:"option3"}],label:"下拉選單標題",placeholder:"請選擇項目",size:"medium",maxHeight:"",className:""},render:a=>({components:{Dropdown:d},setup(){return{args:a}},template:`
            <Dropdown 
                :dataSource="args.dataSource"
                :label="args.label"
                :placeholder="args.placeholder"
                :size="args.size"
                :maxHeight="args.maxHeight"
                :className="args.className"
            >
            </Dropdown>
            `}),parameters:{controls:{},docs:{source:{transform:(a,e)=>{const{args:o}=e;return["<Dropdown",`  :datasource="${j(o.dataSource)}"`,`  :label="${o.label}"`,`  :placeholder="${o.placeholder}"`,`  :size="${o.size}"`,`  :maxHeight="${o.maxHeight}"`,`  :className="${o.className}"`,">","</Dropdown>"].join(`
`).trim()}}}}};var h,D,S;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
  name: '預設項目',
  args: {
    dataSource: [{
      "label": "選項一",
      "value": "option1"
    }, {
      "label": "選項二",
      "value": "option2"
    }, {
      "label": "選項三",
      "value": "option3"
    }],
    label: "下拉選單標題",
    placeholder: "請選擇項目",
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
}`,...(S=(D=s.parameters)==null?void 0:D.docs)==null?void 0:S.source}}};const O=["DropdownDefault"];export{s as DropdownDefault,O as __namedExportsOrder,L as default};

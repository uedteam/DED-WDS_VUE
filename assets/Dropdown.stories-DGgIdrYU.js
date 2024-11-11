import{m as x,u as $,e as m,a as u,t as p,f as g,b as f,n as c,j as _,g as b,D as N,o as r,F as z,k as H}from"./vue.esm-bundler-jfoHxfC9.js";import{_ as V}from"./Icon-DakahK8X.js";import{_ as E}from"./ListItem-vGugEN7a.js";import{_ as C}from"./List-D2-e-t-b.js";import"./iframe-CGSdzTJx.js";import"../sb-preview/runtime.js";const k={class:"dropdown-container"},A={key:0,class:"input-label"},d={__name:"Dropdown",props:x({dataSource:{type:Array,default:()=>[]},label:{type:String},placeholder:{type:String},size:{type:String,validator:a=>["small","medium","large"].includes(a),default:"medium"},maxHeight:{type:String},className:{type:String,default:""}},{modelValue:{},modelModifiers:{}}),emits:["update:modelValue"],setup(a){$(a,"modelValue");const e=a,t=m(null),o=m(!1),y=i=>{t.value=i,o.value=!o};return(i,n)=>(r(),u("div",k,[e.label?(r(),u("label",A,p(e.label),1)):g("",!0),f("div",{ref:"dropdown",class:c(["dropdown",`dropdown-${e.size}`]),role:"listbox",tabindex:"0",onClick:n[0]||(n[0]=l=>o.value=!o.value)},[f("span",{class:c(t.value?"dropdown-selectValue-select":"dropdown-selectValue-unselect")},p(t.value||e.placeholder),3),_(V,{class:c(`icon-${a.size}`),style:{"margin-left":"auto"},name:"arrow_down"},null,8,["class"])],2),o.value?(r(),b(C,{key:1,className:"",isMenu:!0,maxHeight:e.maxHeight},{default:N(()=>[(r(!0),u(z,null,H(e.dataSource,(l,w)=>(r(),b(E,{key:w,label:l.label,value:l.value,href:l.href,onSelectedItem:n[1]||(n[1]=v=>y(v))},null,8,["label","value","href"]))),128))]),_:1},8,["maxHeight"])):g("",!0)]))}};d.__docgenInfo={exportName:"default",displayName:"Dropdown",description:"",tags:{},props:[{name:"dataSource",type:{name:"array"},defaultValue:{func:!1,value:"[]"}},{name:"label",type:{name:"string"}},{name:"placeholder",type:{name:"string"}},{name:"size",type:{name:"string"},defaultValue:{func:!1,value:"'medium'"},values:["small","medium","large"]},{name:"maxHeight",type:{name:"string"}},{name:"className",type:{name:"string"},defaultValue:{func:!1,value:"''"}}],sourceFiles:["D:/98_測試/up/DED-WDS_VUE/libs/src/ui/element/Dropdown/Dropdown.vue"]};function j(a){return`[
    ${a.map(e=>`{
        label: '${e.label}',
        value: '${e.value}',
    }`).join(`,
    `)}
  ]`}const T={title:"Design System/Dropdown",component:d,tags:["autodocs"],argTypes:{dataSource:{description:"資料來源",control:{type:"object"},table:{type:{summary:"{ label: string; value: string; }[]"}}},label:{description:"標題",control:{type:"text"}},placeholder:{description:"輸入提示",control:{type:"text"}},size:{description:"輸入框尺寸",control:{type:"select"},options:["small","medium","large"]},maxHeight:{description:"最大高度，自動顯示卷軸 (px)",control:{type:"text"}},className:{description:"客製化樣式",control:{type:"text"}}},parameters:{docs:{title:"Dropdown",description:{component:"Dropdown 組件的呈現及說明。"}}}},s={name:"預設項目",args:{dataSource:[{label:"選項一",value:"option1"},{label:"選項二",value:"option2"},{label:"選項三",value:"option3"}],label:"下拉選單標題",placeholder:"請選擇項目",size:"medium",maxHeight:"",className:""},render:a=>({components:{Dropdown:d},setup(){return{args:a}},template:`
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
      label: '選項一',
      value: 'option1'
    }, {
      label: '選項二',
      value: 'option2'
    }, {
      label: '選項三',
      value: 'option3'
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
}`,...(S=(D=s.parameters)==null?void 0:D.docs)==null?void 0:S.source}}};const U=["DropdownDefault"];export{s as DropdownDefault,U as __namedExportsOrder,T as default};

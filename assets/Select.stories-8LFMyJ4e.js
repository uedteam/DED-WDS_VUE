import{m as g,u as b,k as v,c as n,l as y,M as D,a as r,t as m,F as V,h as x,n as c,b as h,o as i}from"./vue.esm-bundler-qCK_iSPY.js";import{_ as N}from"./Icon-BjVA2wzQ.js";import"./iframe-BVAqVFki.js";import"../sb-preview/runtime.js";const _=["disabled"],$={value:"",disabled:"",selected:""},O=["value"],u={__name:"Select",props:g({dataSource:{type:Array,required:!0},placeholder:{type:String,default:"Select an option"},suffix:{type:String},isDisabled:{type:Boolean,default:!1},className:{type:String,default:""}},{modelValue:{},modelModifiers:{}}),emits:["update:modelValue"],setup(a){const s=b(a,"modelValue"),e=a,o=v(s);return(E,d)=>(i(),n("div",{class:c({"ded-select-container":!0,[e.className]:!!e.className})},[y(r("select",{class:c(["ded-select",{"ded-select-disabled":e.isDisabled}]),"onUpdate:modelValue":d[0]||(d[0]=l=>o.value=l),disabled:e.isDisabled},[r("option",$,m(e.placeholder),1),(i(!0),n(V,null,x(e.dataSource,l=>(i(),n("option",{key:l.value,value:l.value},m(l.label),9,O))),128))],10,_),[[D,o.value]]),r("div",{class:c(["ded-select-icon",{"ded-select-icon-disabled":e.isDisabled}])},[h(N,{name:e.suffix,size:"18"},null,8,["name"])],2)],2))}};u.__docgenInfo={exportName:"default",displayName:"Select",description:"",tags:{},props:[{name:"dataSource",type:{name:"array"},required:!0},{name:"placeholder",type:{name:"string"},defaultValue:{func:!1,value:'"Select an option"'}},{name:"suffix",type:{name:"string"}},{name:"isDisabled",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"className",type:{name:"string"},defaultValue:{func:!1,value:'""'}}],sourceFiles:["/Users/auouser/Desktop/Work_Space/DED-WDS_VUE/libs/src/ui/element/Select/Select.vue"]};function A(a){return`[
    ${a.map(s=>`{
        label: '${s.label}',
        value: '${s.value}',
    }`).join(`,
    `)}
  ]`}const F={title:"Component/Select",component:u,tags:["autodocs"],argTypes:{dataSource:{description:"選項",control:{type:"object"},table:{type:{summary:"{ label: string; value: string | number; }[]"}}},placeholder:{description:"輸入提示",control:{type:"text"}},suffix:{description:"後綴圖示",control:{type:"select",labels:{"":"none",SvgAccount:"SvgAccount",SvgSearch:"SvgSearch",SvgVisibility:"SvgVisibility",SvgVisibilityOff:"SvgVisibilityOff"}},options:["","SvgAccount","SvgSearch","SvgVisibility","SvgVisibilityOff"]},isDisabled:{description:"是否禁用",control:{type:"boolean"}},className:{description:"客製化樣式",control:{type:"text"}},modelValue:{description:"值",control:{type:"select",labels:{"":"none",1:"1",2:"2",3:"3"}},options:["","1","2","3"],table:{type:{summary:"string | number"},category:"v-model"}}},parameters:{docs:{title:"Select",description:{component:"選擇組件的呈現及說明。"}}}},t={name:"預設項目",args:{dataSource:[{label:"Option 1",value:"1"},{label:"Option 2",value:"2"},{label:"Option 3",value:"3"}],placeholder:"Select",suffix:"SvgArrowDropDown",isDisabled:!1,className:"",modelValue:""},render:a=>({components:{Select:u},setup(){return{args:a}},template:`
            <Select
                :dataSource="args.dataSource"
                :placeholder="args.placeholder"
                :suffix="args.suffix"
                :isDisabled="args.isDisabled"
                :className="args.className"
                v-model="args.modelValue"
            >
            </Select>
        `}),parameters:{controls:{},docs:{source:{transform:(a,s)=>{const{args:e}=s;return["<Select",`  :dataSource="${A(e.dataSource)}"`,`  placeholder="${e.placeholder}"`,`  suffix="${e.suffix}"`,`  :isDisabled="${e.isDisabled}"`,`  className="${e.className}"`,'  v-model="modelValue"',"></Select>"].join(`
`).trim()}}}}};var p,S,f;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: '預設項目',
  args: {
    dataSource: [{
      "label": "Option 1",
      "value": "1"
    }, {
      "label": "Option 2",
      "value": "2"
    }, {
      "label": "Option 3",
      "value": "3"
    }],
    placeholder: "Select",
    suffix: "SvgArrowDropDown",
    isDisabled: false,
    className: "",
    modelValue: ""
  },
  render: args => ({
    components: {
      Select
    },
    setup() {
      return {
        args
      };
    },
    template: \`
            <Select
                :dataSource="args.dataSource"
                :placeholder="args.placeholder"
                :suffix="args.suffix"
                :isDisabled="args.isDisabled"
                :className="args.className"
                v-model="args.modelValue"
            >
            </Select>
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
          return [\`<Select\`, \`  :dataSource="\${dataSourceString}"\`, \`  placeholder="\${args.placeholder}"\`, \`  suffix="\${args.suffix}"\`, \`  :isDisabled="\${args.isDisabled}"\`, \`  className="\${args.className}"\`, \`  v-model="modelValue"\`, \`></Select>\`].join("\\n").trim();
        }
      }
    }
  }
}`,...(f=(S=t.parameters)==null?void 0:S.docs)==null?void 0:f.source}}};const M=["SelectDefault"];export{t as SelectDefault,M as __namedExportsOrder,F as default};

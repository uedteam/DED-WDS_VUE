import{m as b,u as v,r as g,c as n,p as y,N as D,a as o,t as p,F as h,k as x,n as r,b as N,o as c}from"./vue.esm-bundler-CwphvVzG.js";import{_ as V}from"./Icon-_T5UpMLV.js";import"./iframe-DHKiUVlE.js";import"../sb-preview/runtime.js";const _=["disabled"],O={value:"",disabled:"",selected:""},A=["value"],i={__name:"Select",props:b({dataSource:{type:Array,required:!0},placeholder:{type:String,default:"Select an option"},suffix:{type:String},isDisabled:{type:Boolean,default:!1},className:{type:String,default:""}},{modelValue:{},modelModifiers:{}}),emits:["update:modelValue"],setup(t){const l=v(t,"modelValue"),e=t,d=g(l);return(w,u)=>(c(),n("div",{class:r({"ded-select-container":!0,[e.className]:!!e.className})},[y(o("select",{class:r(["ded-select",{"ded-select-disabled":e.isDisabled}]),"onUpdate:modelValue":u[0]||(u[0]=a=>d.value=a),disabled:e.isDisabled},[o("option",O,p(e.placeholder),1),(c(!0),n(h,null,x(e.dataSource,a=>(c(),n("option",{key:a.value,value:a.value},p(a.label),9,A))),128))],10,_),[[D,d.value]]),o("div",{class:r(["ded-select-icon",{"ded-select-icon-disabled":e.isDisabled}])},[N(V,{name:e.suffix,size:"18"},null,8,["name"])],2)],2))}};i.__docgenInfo={exportName:"default",displayName:"Select",description:"",tags:{},props:[{name:"dataSource",type:{name:"array"},required:!0},{name:"placeholder",type:{name:"string"},defaultValue:{func:!1,value:'"Select an option"'}},{name:"suffix",type:{name:"string"}},{name:"isDisabled",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"className",type:{name:"string"},defaultValue:{func:!1,value:'""'}}],sourceFiles:["D:/98_測試/up/DED-WDS_VUE/libs/src/ui/element/Select/Select.vue"]};const k={title:"Component/Select",component:i,tags:["autodocs"],argTypes:{dataSource:{description:"選項",control:{type:"object"},table:{type:{summary:"{ label: string; value: string | number; }[]"}}},placeholder:{description:"輸入提示",control:{type:"text"}},suffix:{description:"後綴圖示",control:{type:"select",labels:{"":"none",SvgAccount:"SvgAccount",SvgSearch:"SvgSearch",SvgVisibility:"SvgVisibility",SvgVisibilityOff:"SvgVisibilityOff"}},options:["","SvgAccount","SvgSearch","SvgVisibility","SvgVisibilityOff"]},isDisabled:{description:"是否禁用",control:{type:"boolean"}},className:{description:"客製化樣式",control:{type:"text"}}},parameters:{docs:{title:"Select",description:{component:"Select 組件的呈現及說明。"}}}},s={name:"預設項目",args:{dataSource:[{label:"Option 1",value:"1"},{label:"Option 2",value:"2"},{label:"Option 3",value:"3"}],placeholder:"Select an option",suffix:"SvgArrowDropDown",isDisabled:!1,className:""},render:t=>({components:{Select:i},setup(){const l=g("");return{args:t,selectedOption:l}},template:`
            <Select 
                :dataSource="args.dataSource"
                :placeholder="args.placeholder"
                :suffix="args.suffix"
                :isDisabled="args.isDisabled"
                :className="args.className"
                v-model="selectedOption"
            >
            </Select>
            
            選到的值: {{selectedOption}}
            `}),parameters:{controls:{}}};var m,S,f;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
    placeholder: "Select an option",
    suffix: "SvgArrowDropDown",
    isDisabled: false,
    className: ""
  },
  render: args => ({
    components: {
      Select
    },
    setup() {
      const selectedOption = ref("");
      return {
        args,
        selectedOption
      };
    },
    template: \`
            <Select 
                :dataSource="args.dataSource"
                :placeholder="args.placeholder"
                :suffix="args.suffix"
                :isDisabled="args.isDisabled"
                :className="args.className"
                v-model="selectedOption"
            >
            </Select>
            
            選到的值: {{selectedOption}}
            \`
  }),
  // 控制 controls 中能控制的參數
  parameters: {
    controls: {
      // include: ['objectFit', 'src', 'value', 'name' ],
    }
    // docs: {
    //     source: {
    //         transform: (src, storyContext) => {
    //             const { args } = storyContext;
    //             const dataSourceString = formatDataSource(args.dataSource);
    //             return [
    //                 '<Dropdown',
    //                 \`  :datasource="\${dataSourceString}"\`,
    //                 \`  :label="\${args.label}"\`,
    //                 \`  :placeholder="\${args.placeholder}"\`,
    //                 \`  :size="\${args.size}"\`,
    //                 \`  :maxHeight="\${args.maxHeight}"\`,
    //                 \`  :className="\${args.className}"\`,
    //                 '>',
    //                 '</Dropdown>',
    //             ].join('\\n').trim();
    //         }
    //     }
    // }
  }
}`,...(f=(S=s.parameters)==null?void 0:S.docs)==null?void 0:f.source}}};const z=["SelectDefault"];export{s as SelectDefault,z as __namedExportsOrder,k as default};

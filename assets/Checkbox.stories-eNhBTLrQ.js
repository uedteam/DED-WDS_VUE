import{g as w,k as i,c as g,u as D,v as O,a as c,j as T,f as A,n as y,t as E,o as u,e as F}from"./vue.esm-bundler-5cDHsWFH.js";import{_ as G}from"./Icon-DGx3RuII.js";import"./iframe-s8k_fwZV.js";import"../sb-preview/runtime.js";const B=["for"],M=["id","name","value"],N={class:"checkbox-text"},f={__name:"Checkbox",props:{themeColor:{type:String,default:"primary",validator:e=>["primary","secondary","tertiary","success","warning","error","info"].includes(e)},customClass:{type:String,default:""},label:{type:String},value:{type:[Boolean,Object]},name:{type:String},modelValue:{type:[Array,Boolean]}},emits:["update:modelValue"],setup(e,{emit:n}){const a=e,p=n,d=w({get(){return a.modelValue},set(r){p("update:modelValue",r)}}),o=i(!1),V=(r,s)=>{o.value=!o.value};return(r,s)=>(u(),g("label",{for:a.value,class:"checkbox"},[D(c("input",{class:"checkbox-input",type:"checkbox",id:a.value,name:a.name,value:a.value,"onUpdate:modelValue":s[0]||(s[0]=_=>d.value=_),onChange:V},null,40,M),[[O,d.value]]),c("div",{class:y(["checkbox-icon",o.value?`checkbox-checked-${a.themeColor}`:`checkbox-unchecked-${a.themeColor}`])},[o.value?(u(),T(G,{key:0,name:"check",color:"#fff"})):A("",!0)],2),c("span",N,E(a.label),1)],8,B))}},m=f;f.__docgenInfo={exportName:"default",displayName:"Checkbox",description:"",tags:{},props:[{name:"themeColor",type:{name:"string"},defaultValue:{func:!1,value:'"primary"'},values:["primary","secondary","tertiary","success","warning","error","info"]},{name:"customClass",type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"label",type:{name:"string"}},{name:"value",type:{name:"boolean|object"}},{name:"name",type:{name:"string"}},{name:"modelValue",type:{name:"array|boolean"}}],events:[{name:"update:modelValue"}],sourceFiles:["/Users/auouser/Desktop/Work_Space/DED-WDS_VUE/libs/src/ui/element/Checkbox/Checkbox.vue"]};const S={__name:"CheckboxGroup",props:{customClass:{type:String,default:""},direction:{type:String,validator:e=>["row","column"].includes(e),default:"row"}},setup(e){const n=e;return(a,p)=>(u(),g("div",{class:y(["checkbox-container",`checkbox-container-${n.direction}`])},[F(a.$slots,"default")],2))}};S.__docgenInfo={exportName:"default",displayName:"CheckboxGroup",description:"",tags:{},props:[{name:"customClass",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"direction",type:{name:"string"},defaultValue:{func:!1,value:"'row'"},values:["row","column"]}],slots:[{name:"default"}],sourceFiles:["/Users/auouser/Desktop/Work_Space/DED-WDS_VUE/libs/src/ui/element/Checkbox/CheckboxGroup.vue"]};const J={title:"Design System/Checkbox",component:m,tags:["autodocs"],argTypes:{themeColor:{description:"主題顏色",control:{type:"select"},options:["primary","secondary","tertiary","success","warning","error","info"]},customClass:{description:"客製化樣式",control:{type:"text"}},label:{description:"Checkbox選項文字",control:{type:"text"}},value:{description:"Checkbox選項值",control:{type:"Object"}},name:{description:"Checkbox表單用name",control:{type:"text"}},modelValue:{description:"Checkbox的綁定值",control:{type:"Object"}},direction:{description:"Checkbox群組方向",control:{type:"select"},options:["row","column"]}},parameters:{docs:{title:"複選框",description:{component:"複選框組件的呈現及說明。"}}}},l={name:"單選樣式",args:{label:"我已閱讀並同意",name:"agreeStatement",value:!1,themeColor:"primary"},render:e=>({components:{Checkbox:m},setup(){const n=i(e.modelValue);return{args:e,modelValue:n}},template:`
            <Checkbox
                :themeColor="args.themeColor"
                :label="args.label"
                :value="args.value"
                :name="args.name"
                v-model="modelValue"
            ></Checkbox>
        `}),parameters:{controls:{}}},t={name:"複選樣式",args:{themeColor:"primary",checkboxOptions:[{label:"HTML",value:"HTML",name:"skills"},{label:"Sass",value:"Sass",name:"skills"},{label:"Tailwind CSS",value:"Tailwind CSS",name:"skills"},{label:"JavaScript",value:"JavaScript",name:"skills"},{label:"TypeScript",value:"TypeScript",name:"skills"},{label:"Vue",value:"Vue",name:"skills"},{label:"React",value:"React",name:"skills"},{label:"Angular",value:"Angular",name:"skills"}],direction:"row"},render:e=>({components:{Checkbox:m,CheckboxGroup:S},setup(){const n=i([]);return{args:e,checkedCheckboxOptions:n}},template:`
        <CheckboxGroup :direction="args.direction">
            <Checkbox   v-for="(item, index) in args.checkboxOptions"
                        :key="index"
                        :themeColor="args.themeColor"
                        :label="item.label"
                        :value="item.value"
                        :name="item.name"
                        v-model="checkedCheckboxOptions">{{item.value}}</Checkbox>
        </CheckboxGroup>
        <p>Tell me what skills you have:{{checkedCheckboxOptions}}</p>
        `}),parameters:{controls:{}}};var b,h,k;l.parameters={...l.parameters,docs:{...(b=l.parameters)==null?void 0:b.docs,source:{originalSource:`{
  name: "單選樣式",
  args: {
    label: "我已閱讀並同意",
    name: "agreeStatement",
    value: false,
    themeColor: "primary"
  },
  render: args => ({
    components: {
      Checkbox
    },
    setup() {
      // Create a ref for modelValue to be used with v-model
      const modelValue = ref(args.modelValue);
      return {
        args,
        modelValue
      };
    },
    template: \`
            <Checkbox
                :themeColor="args.themeColor"
                :label="args.label"
                :value="args.value"
                :name="args.name"
                v-model="modelValue"
            ></Checkbox>
        \`
  }),
  // 控制 controls 中能控制的參數
  parameters: {
    controls: {
      // include: ['themeColor', 'label', 'value', 'name' ],
    }
  }
}`,...(k=(h=l.parameters)==null?void 0:h.docs)==null?void 0:k.source}}};var C,v,x;t.parameters={...t.parameters,docs:{...(C=t.parameters)==null?void 0:C.docs,source:{originalSource:`{
  name: "複選樣式",
  args: {
    themeColor: "primary",
    checkboxOptions: [{
      label: "HTML",
      value: "HTML",
      name: "skills"
    }, {
      label: "Sass",
      value: "Sass",
      name: "skills"
    }, {
      label: "Tailwind CSS",
      value: "Tailwind CSS",
      name: "skills"
    }, {
      label: "JavaScript",
      value: "JavaScript",
      name: "skills"
    }, {
      label: "TypeScript",
      value: "TypeScript",
      name: "skills"
    }, {
      label: "Vue",
      value: "Vue",
      name: "skills"
    }, {
      label: "React",
      value: "React",
      name: "skills"
    }, {
      label: "Angular",
      value: "Angular",
      name: "skills"
    }],
    direction: "row"
  },
  render: args => ({
    components: {
      Checkbox,
      CheckboxGroup
    },
    setup() {
      // Create a ref for modelValue to be used with v-model
      const checkedCheckboxOptions = ref([]);
      return {
        args,
        checkedCheckboxOptions
      };
    },
    template: \`
        <CheckboxGroup :direction="args.direction">
            <Checkbox   v-for="(item, index) in args.checkboxOptions"
                        :key="index"
                        :themeColor="args.themeColor"
                        :label="item.label"
                        :value="item.value"
                        :name="item.name"
                        v-model="checkedCheckboxOptions">{{item.value}}</Checkbox>
        </CheckboxGroup>
        <p>Tell me what skills you have:{{checkedCheckboxOptions}}</p>
        \`
  }),
  // 控制 controls 中能控制的參數
  parameters: {
    controls: {
      // include: ['themeColor', 'label', 'value', 'name' ],
    }
  }
}`,...(x=(v=t.parameters)==null?void 0:v.docs)==null?void 0:x.source}}};const L=["SingleCheckbox","MultipleCheckbox"];export{t as MultipleCheckbox,l as SingleCheckbox,L as __namedExportsOrder,J as default};

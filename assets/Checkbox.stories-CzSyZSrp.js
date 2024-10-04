import{c as _,j as m,a as g,y as w,D,b as u,p as T,d as O,n as y,t as A,o as i,r as E}from"./vue.esm-bundler-CsTC-5Ev.js";import{_ as F}from"./Icon-Pq8-XFtv.js";import"./iframe-D3-rZU4J.js";import"../sb-preview/runtime.js";const G=["for"],B=["id","name","value"],M={class:"checkbox-text"},r={__name:"Checkbox",props:{themeColor:{type:String,default:"primary",validator:e=>["primary","secondary","tertiary","success","warning","error","info"].includes(e)},customClass:{type:String,default:""},label:{type:String},value:{type:[String,Boolean]},name:{type:String},modelValue:{type:[Array,Boolean]}},emits:["update:modelValue"],setup(e,{emit:n}){const a=e,p=n,d=_({get(){return a.modelValue},set(s){p("update:modelValue",s)}}),o=m(!1),S=(s,c)=>{o.value=!o.value};return(s,c)=>(i(),g("label",{for:a.value,class:"checkbox"},[w(u("input",{class:"checkbox-input",type:"checkbox",id:a.value,name:a.name,value:a.value,"onUpdate:modelValue":c[0]||(c[0]=V=>d.value=V),onChange:S},null,40,B),[[D,d.value]]),u("div",{class:y(["checkbox-icon",o.value?`checkbox-checked-${a.themeColor}`:`checkbox-unchecked-${a.themeColor}`])},[o.value?(i(),T(F,{key:0,name:"check",color:"#fff"})):O("",!0)],2),u("span",M,A(a.label),1)],8,G))}};r.__docgenInfo={exportName:"default",displayName:"Checkbox",description:"",tags:{},props:[{name:"themeColor",type:{name:"string"},defaultValue:{func:!1,value:'"primary"'},values:["primary","secondary","tertiary","success","warning","error","info"]},{name:"customClass",type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"label",type:{name:"string"}},{name:"value",type:{name:"string|boolean"}},{name:"name",type:{name:"string"}},{name:"modelValue",type:{name:"array|boolean"}}],events:[{name:"update:modelValue"}],sourceFiles:["/Users/auouser/Desktop/Work_Space/DED-WDS_VUE/libs/src/ui/element/Checkbox/Checkbox.vue"]};const f={__name:"CheckboxGroup",props:{customClass:{type:String,default:""},direction:{type:String,validator:e=>["row","column"].includes(e),default:"row"}},setup(e){const n=e;return(a,p)=>(i(),g("div",{class:y(["checkbox-container",`checkbox-container-${n.direction}`])},[E(a.$slots,"default")],2))}};f.__docgenInfo={exportName:"default",displayName:"CheckboxGroup",description:"",tags:{},props:[{name:"customClass",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"direction",type:{name:"string"},defaultValue:{func:!1,value:"'row'"},values:["row","column"]}],slots:[{name:"default"}],sourceFiles:["/Users/auouser/Desktop/Work_Space/DED-WDS_VUE/libs/src/ui/element/Checkbox/CheckboxGroup.vue"]};const J={title:"Design System/Checkbox",component:r,tags:["autodocs"],argTypes:{themeColor:{description:"主題顏色",control:{type:"select"},options:["primary","secondary","tertiary","success","warning","error","info"]},customClass:{description:"客製化樣式",control:{type:"text"}},label:{description:"Checkbox選項文字",control:{type:"text"}},value:{description:"Checkbox選項值",control:{type:"Object"}},name:{description:"Checkbox表單用name",control:{type:"text"}},modelValue:{description:"Checkbox的綁定值",control:{type:"Object"}},direction:{description:"Checkbox群組方向",control:{type:"select"},options:["row","column"]}},parameters:{docs:{title:"複選框",description:{component:"複選框組件的呈現及說明。"}}}},l={name:"單選樣式",args:{label:"我已閱讀並同意",name:"agreeStatement",value:!1,themeColor:"primary"},render:e=>({components:{Checkbox:r},setup(){const n=m(e.modelValue);return{args:e,modelValue:n}},template:`
            <Checkbox
                :themeColor="args.themeColor"
                :label="args.label"
                :value="args.value"
                :name="args.name"
                v-model="modelValue"
            ></Checkbox>
        `}),parameters:{controls:{}}},t={name:"複選樣式",args:{themeColor:"primary",checkboxOptions:[{label:"HTML",value:"HTML",name:"skills"},{label:"Sass",value:"Sass",name:"skills"},{label:"Tailwind CSS",value:"Tailwind CSS",name:"skills"},{label:"JavaScript",value:"JavaScript",name:"skills"},{label:"TypeScript",value:"TypeScript",name:"skills"},{label:"Vue",value:"Vue",name:"skills"},{label:"React",value:"React",name:"skills"},{label:"Angular",value:"Angular",name:"skills"}],direction:"row"},render:e=>({components:{Checkbox:r,CheckboxGroup:f},setup(){const n=m([]);return{args:e,checkedCheckboxOptions:n}},template:`
        <CheckboxGroup :direction="args.direction">
            <Checkbox v-for="(item, index) in args.checkboxOptions"
                :key="index"
                :themeColor="args.themeColor"
                :label="item.label"
                :value="item.value"
                :name="item.name"
                v-model="checkedCheckboxOptions"
            >{{item.value}}</Checkbox>
        </CheckboxGroup>
        <p>Tell me what skills you have:{{checkedCheckboxOptions}}</p>
        `}),parameters:{controls:{}}};var h,b,k;l.parameters={...l.parameters,docs:{...(h=l.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(k=(b=l.parameters)==null?void 0:b.docs)==null?void 0:k.source}}};var C,v,x;t.parameters={...t.parameters,docs:{...(C=t.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
            <Checkbox v-for="(item, index) in args.checkboxOptions"
                :key="index"
                :themeColor="args.themeColor"
                :label="item.label"
                :value="item.value"
                :name="item.name"
                v-model="checkedCheckboxOptions"
            >{{item.value}}</Checkbox>
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

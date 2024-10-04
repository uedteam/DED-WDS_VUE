import{c as D,a as v,b as i,n as y,t as k,o as f,r as _,j as h}from"./vue.esm-bundler-CsTC-5Ev.js";const S=["for"],V=["id","name","value","checked"],E={class:"radio-text"},r={__name:"Radio",props:{themeColor:{type:String,default:"primary",validator:e=>["primary","secondary","tertiary","success","warning","error","info"].includes(e)},inputId:{type:String},name:{type:String},value:{type:String},label:{type:String},modelValue:{type:[Array,String]}},emits:["update:modelValue"],setup(e,{emit:n}){const a=e,s=n,C=u=>{s("update:modelValue",u.target.value)},l=D(()=>a.modelValue===a.value);return(u,I)=>(f(),v("label",{for:a.inputId,class:"radio"},[i("input",{class:"radio-input",type:"radio",id:a.inputId,name:a.name,value:a.value,checked:l.value,onChange:C},null,40,V),i("div",{class:y(["radio-icon",l.value?`radio-checked-${a.themeColor}`:`radio-unchecked-${a.themeColor}`])},null,2),i("span",E,k(a.label),1)],8,S))}};r.__docgenInfo={exportName:"default",displayName:"Radio",description:"",tags:{},props:[{name:"themeColor",type:{name:"string"},defaultValue:{func:!1,value:'"primary"'},values:["primary","secondary","tertiary","success","warning","error","info"]},{name:"inputId",type:{name:"string"}},{name:"name",type:{name:"string"}},{name:"value",type:{name:"string"}},{name:"label",type:{name:"string"}},{name:"modelValue",type:{name:"array|string"}}],events:[{name:"update:modelValue"}],sourceFiles:["/Users/auouser/Desktop/Work_Space/DED-WDS_VUE/libs/src/ui/element/Radio/Radio.vue"]};const b={__name:"RadioGroup",props:{customClass:{type:String,default:""},direction:{type:String,validator:e=>["row","column"].includes(e),default:"row"}},setup(e){const n=e;return(a,s)=>(f(),v("div",{class:y(["radio-container",`radio-container-${n.direction}`])},[_(a.$slots,"default")],2))}};b.__docgenInfo={exportName:"default",displayName:"RadioGroup",description:"",tags:{},props:[{name:"customClass",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"direction",type:{name:"string"},defaultValue:{func:!1,value:"'row'"},values:["row","column"]}],slots:[{name:"default"}],sourceFiles:["/Users/auouser/Desktop/Work_Space/DED-WDS_VUE/libs/src/ui/element/Radio/RadioGroup.vue"]};const F={title:"Design System/Radio",component:r,tags:["autodocs"],argTypes:{themeColor:{description:"主題顏色",control:{type:"select"},options:["primary","secondary","tertiary","success","warning","error","info"]},label:{description:"Radio選項文字",control:{type:"text"}},value:{description:"Radio選項值",control:{type:"text"}},name:{description:"Radio表單用name",control:{type:"text"}},modelValue:{description:"Radio的綁定值",control:{type:"Object"}},direction:{description:"Radio群組方向",control:{type:"select"},options:["row","column"]}},parameters:{docs:{title:"單選框",description:{component:"單選框組件的呈現及說明。"}}}},o={name:"標準 Radio Button",args:{label:"DefaultRadio",name:"DefaultRadio",value:"DefaultRadio",themeColor:"primary"},render:e=>({components:{Radio:r},setup(){const n=h("");return{args:e,isRadioPicked:n}},template:`
            <Radio
                :label="args.label"
                :value="args.value"
                :name="args.name"
                :themeColor="args.themeColor"
                v-model="isRadioPicked"
            ></Radio>
        `}),parameters:{controls:{}}},t={name:"Radio Button Group",args:{themeColor:"primary",radioList:[{inputId:"meals01",name:"Meals",value:"Pak Nasser's Nasi Lemak",label:"帕南薩馬來椰漿飯"},{inputId:"meals02",name:"Meals",value:"Hyderabadi Vegetable Biryani",label:"海德拉巴素食印度香飯"},{inputId:"meals03",name:"Meals",value:"Uncle Chin's Chicken Rice",label:"秦叔叔海南雞飯"}],direction:"row"},render:e=>({components:{Radio:r,RadioGroup:b},setup(){const n=h("");return{args:e,isRadioPicked:n}},template:`
        <RadioGroup :direction="args.direction">
            <Radio   v-for="(item) in args.radioList"
                        :inputId="item.inputId"
                        :name="item.name"
                        :value="item.value"
                        :label="item.label"
                        v-model="isRadioPicked">
            </Radio>
        </RadioGroup>
        <p> Meal You Have Reserved: {{ isRadioPicked }} </p>
        `}),parameters:{controls:{}}};var d,m,c;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
  name: "標準 Radio Button",
  args: {
    label: "DefaultRadio",
    name: "DefaultRadio",
    value: "DefaultRadio",
    themeColor: "primary"
  },
  render: args => ({
    components: {
      Radio
    },
    setup() {
      // Create a ref for modelValue to be used with v-model
      const isRadioPicked = ref("");
      return {
        args,
        isRadioPicked
      };
    },
    template: \`
            <Radio
                :label="args.label"
                :value="args.value"
                :name="args.name"
                :themeColor="args.themeColor"
                v-model="isRadioPicked"
            ></Radio>
        \`
  }),
  // 控制 controls 中能控制的參數
  parameters: {
    controls: {
      // include: ['themeColor', 'label', 'value', 'name' ],
    }
  }
}`,...(c=(m=o.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};var p,R,g;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: "Radio Button Group",
  args: {
    themeColor: "primary",
    radioList: [{
      inputId: "meals01",
      name: "Meals",
      value: "Pak Nasser's Nasi Lemak",
      label: "帕南薩馬來椰漿飯"
    }, {
      inputId: "meals02",
      name: "Meals",
      value: "Hyderabadi Vegetable Biryani",
      label: "海德拉巴素食印度香飯"
    }, {
      inputId: "meals03",
      name: "Meals",
      value: "Uncle Chin's Chicken Rice",
      label: "秦叔叔海南雞飯"
    }],
    direction: "row"
  },
  render: args => ({
    components: {
      Radio,
      RadioGroup
    },
    setup() {
      // Create a ref for modelValue to be used with v-model
      const isRadioPicked = ref("");
      return {
        args,
        isRadioPicked
      };
    },
    template: \`
        <RadioGroup :direction="args.direction">
            <Radio   v-for="(item) in args.radioList"
                        :inputId="item.inputId"
                        :name="item.name"
                        :value="item.value"
                        :label="item.label"
                        v-model="isRadioPicked">
            </Radio>
        </RadioGroup>
        <p> Meal You Have Reserved: {{ isRadioPicked }} </p>
        \`
  }),
  // 控制 controls 中能控制的參數
  parameters: {
    controls: {
      // include: ['themeColor', 'label', 'value', 'name' ],
    }
  }
}`,...(g=(R=t.parameters)==null?void 0:R.docs)==null?void 0:g.source}}};const w=["DefaultRadio","MultipleRadio"];export{o as DefaultRadio,t as MultipleRadio,w as __namedExportsOrder,F as default};

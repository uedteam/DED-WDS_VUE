import{c as r,q as d,n as m,o as c,r as p}from"./vue.esm-bundler-Bm7qTojY.js";import{_ as t}from"./Radio-BD1x-sR1.js";const i={__name:"RadioGroup",props:{direction:{type:String,validator:e=>["row","column"].includes(e),default:"row"},customClass:{type:String,default:""}},setup(e){const n=e;return(o,R)=>(c(),r("div",{class:m(["radio-container",`radio-container-${n.direction}`])},[d(o.$slots,"default")],2))}};i.__docgenInfo={exportName:"default",displayName:"RadioGroup",description:"",tags:{},props:[{name:"direction",type:{name:"string"},defaultValue:{func:!1,value:"'row'"},values:["row","column"]},{name:"customClass",type:{name:"string"},defaultValue:{func:!1,value:"''"}}],slots:[{name:"default"}],sourceFiles:["/Users/auouser/Desktop/Work_Space/DED-WDS_VUE/libs/src/ui/element/Radio/RadioGroup.vue"]};const b={title:"Design System/RadioGroup",component:i,subcomponents:{Radio:t},tags:["autodocs"],argTypes:{direction:{description:"RadioGroup 方向",control:{type:"select"},options:["row","column"]},default:{description:"RadioGroup 的 default 插槽，作為包覆 RadioItems 的包裝層。",control:{type:"object"}}},parameters:{docs:{title:"RadioGroup",description:{component:"RadioGroup 組件的呈現及說明。"}}}},a={name:"RadioGroup 基礎樣式",args:{direction:"row",default:[{inputId:"meals01",name:"Meals",value:"Pak Nasser's Nasi Lemak",label:"帕南薩馬來椰漿飯"},{inputId:"meals02",name:"Meals",value:"Hyderabadi Vegetable Biryani",label:"海德拉巴素食印度香飯"},{inputId:"meals03",name:"Meals",value:"Uncle Chin's Chicken Rice",label:"秦叔叔海南雞飯"}]},render:e=>({components:{RadioGroup:i,Radio:t},setup(){const n=[{inputId:"meals01",name:"Meals",value:"Pak Nasser's Nasi Lemak",label:"帕南薩馬來椰漿飯"},{inputId:"meals02",name:"Meals",value:"Hyderabadi Vegetable Biryani",label:"海德拉巴素食印度香飯"},{inputId:"meals03",name:"Meals",value:"Uncle Chin's Chicken Rice",label:"秦叔叔海南雞飯"}],o=p("");return{args:e,isRadioPicked:o,radioList:n}},template:`
            <RadioGroup :direction="args.direction">
                <Radio   v-for="(item) in args.default"
                        :inputId="item.inputId"
                        :label="item.label"
                        :value="item.value"
                        :name="item.name"
                        :themeColor="args.themeColor"
                        v-model="isRadioPicked">
                </Radio>
            </RadioGroup>
            <p> Meal You Have Reserved: {{ isRadioPicked }} </p>
        `}),parameters:{controls:{expanded:!0}}};var u,s,l;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  name: "RadioGroup 基礎樣式",
  args: {
    direction: "row",
    default: [{
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
    }]
  },
  render: args => ({
    components: {
      RadioGroup,
      Radio
    },
    setup() {
      const radioList = [{
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
      }];
      const isRadioPicked = ref("");
      return {
        args,
        isRadioPicked,
        radioList
      };
    },
    template: \`
            <RadioGroup :direction="args.direction">
                <Radio   v-for="(item) in args.default"
                        :inputId="item.inputId"
                        :label="item.label"
                        :value="item.value"
                        :name="item.name"
                        :themeColor="args.themeColor"
                        v-model="isRadioPicked">
                </Radio>
            </RadioGroup>
            <p> Meal You Have Reserved: {{ isRadioPicked }} </p>
        \`
  }),
  // 控制 controls 中能控制的參數
  parameters: {
    controls: {
      expanded: true
      // include: ['themeColor', 'label', 'value', 'name' ],
    }
  }
}`,...(l=(s=a.parameters)==null?void 0:s.docs)==null?void 0:l.source}}};const D=["RadioGroupDefault"];export{a as RadioGroupDefault,D as __namedExportsOrder,b as default};

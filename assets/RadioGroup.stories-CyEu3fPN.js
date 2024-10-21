import{c as l,e as d,n as m,o as c,r as p}from"./vendor-CDUjWAn_.js";import{_ as r}from"./RadioItem-DPDG95i2.js";const i={__name:"RadioGroup",props:{direction:{type:String,validator:e=>["row","column"].includes(e),default:"row"},className:{type:String,default:""}},setup(e){const a=e;return(o,R)=>(c(),l("div",{class:m({"radio-container":!0,[`checkbox-container-${a.direction}`]:!0,[a.className]:!!a.className})},[d(o.$slots,"default")],2))}};i.__docgenInfo={exportName:"default",displayName:"RadioGroup",description:"",tags:{},props:[{name:"direction",type:{name:"string"},defaultValue:{func:!1,value:"'row'"},values:["row","column"]},{name:"className",type:{name:"string"},defaultValue:{func:!1,value:"''"}}],slots:[{name:"default"}],sourceFiles:["D:/98_測試/up/DED-WDS_VUE/libs/src/ui/element/Radio/RadioGroup.vue"]};const b={title:"Design System/RadioGroup",component:i,subcomponents:{RadioItem:r},tags:["autodocs"],argTypes:{direction:{description:"方向",control:{type:"select"},options:["row","column"]},themeColor:{description:"主題顏色",control:{type:"select"},options:["primary","secondary","tertiary","success","warning","error","info"]},default:{description:"default slot 插槽。",control:{type:"object"}},className:{description:"客製化樣式",control:{type:"text"}}},parameters:{docs:{title:"RadioGroup",description:{component:"RadioGroup 組件的呈現及說明。"}}}},n={name:"主要項目",args:{direction:"row",default:[{inputId:"meals01",name:"Meals",value:"Pak Nasser's Nasi Lemak",label:"帕南薩馬來椰漿飯"},{inputId:"meals02",name:"Meals",value:"Hyderabadi Vegetable Biryani",label:"海德拉巴素食印度香飯"},{inputId:"meals03",name:"Meals",value:"Uncle Chin's Chicken Rice",label:"秦叔叔海南雞飯"}],themeColor:"primary"},render:e=>({components:{RadioGroup:i,RadioItem:r},setup(){const a=[{inputId:"meals01",name:"Meals",value:"Pak Nasser's Nasi Lemak",label:"帕南薩馬來椰漿飯"},{inputId:"meals02",name:"Meals",value:"Hyderabadi Vegetable Biryani",label:"海德拉巴素食印度香飯"},{inputId:"meals03",name:"Meals",value:"Uncle Chin's Chicken Rice",label:"秦叔叔海南雞飯"}],o=p("");return{args:e,isRadioPicked:o,radioList:a}},template:`
            <RadioGroup :direction="args.direction">
                <RadioItem   v-for="(item) in args.default"
                        :inputId="item.inputId"
                        :label="item.label"
                        :value="item.value"
                        :name="item.name"
                        :themeColor="args.themeColor"
                        v-model="isRadioPicked">
                </RadioItem>
            </RadioGroup>
            <p> Meal You Have Reserved: {{ isRadioPicked }} </p>
        `}),parameters:{controls:{expanded:!0}}};var t,s,u;n.parameters={...n.parameters,docs:{...(t=n.parameters)==null?void 0:t.docs,source:{originalSource:`{
  name: "主要項目",
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
    }],
    themeColor: 'primary'
  },
  render: args => ({
    components: {
      RadioGroup,
      RadioItem
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
                <RadioItem   v-for="(item) in args.default"
                        :inputId="item.inputId"
                        :label="item.label"
                        :value="item.value"
                        :name="item.name"
                        :themeColor="args.themeColor"
                        v-model="isRadioPicked">
                </RadioItem>
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
}`,...(u=(s=n.parameters)==null?void 0:s.docs)==null?void 0:u.source}}};const g=["RadioGroupDefault"];export{n as RadioGroupDefault,g as __namedExportsOrder,b as default};

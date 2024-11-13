import{m as f,u as b,c as x,a as C,v as k,I as h,b as o,n as r,t as I,o as P,e as R}from"./vue.esm-bundler-C7FxdvdM.js";const D=["value","name","checked"],N={class:"radio-text"},t={__name:"Radio",props:f({label:{type:String},value:{type:String},name:{type:String},themeColor:{type:String,default:"primary",validator:a=>["primary","secondary","tertiary","success","warning","error","info"].includes(a)},className:{type:String,default:""}},{modelValue:{},modelModifiers:{}}),emits:["update:modelValue"],setup(a){const i=b(a,"modelValue"),e=a,d=x(()=>e.modelValue===e.value);return(E,s)=>(P(),C("label",{class:r({radio:!0,[e.className]:!!e.className})},[k(o("input",{class:"radio-input",type:"radio",value:e.value,name:e.name,checked:d.value,"onUpdate:modelValue":s[0]||(s[0]=g=>i.value=g)},null,8,D),[[h,i.value]]),o("div",{class:r(["radio-icon",d.value?`radio-checked-${e.themeColor}`:`radio-unchecked-${e.themeColor}`])},null,2),o("span",N,I(e.label),1)],2))}};t.__docgenInfo={exportName:"default",displayName:"Radio",description:"",tags:{},props:[{name:"label",type:{name:"string"}},{name:"value",type:{name:"string"}},{name:"name",type:{name:"string"}},{name:"themeColor",type:{name:"string"},defaultValue:{func:!1,value:'"primary"'},values:["primary","secondary","tertiary","success","warning","error","info"]},{name:"className",type:{name:"string"},defaultValue:{func:!1,value:"''"}}],sourceFiles:["D:/98_測試/up/DED-WDS_VUE/libs/src/ui/element/Radio/Radio.vue"]};const M={title:"Design System/Radio",component:t,tags:["autodocs"],argTypes:{label:{description:"選項文字",control:{type:"text"}},value:{description:"選項值",control:{type:"text"}},name:{description:"用於分組的名稱",control:{type:"text"}},themeColor:{description:"主題顏色",control:{type:"select"},options:["primary","secondary","tertiary","success","warning","error","info"]},className:{description:"客製化樣式",control:{type:"text"}},modelValue:{description:"與 Radio 綁定的值，表示當前選中的選項",control:{type:"Object"}}},parameters:{docs:{title:"Radio",description:{component:"Radio 組件的呈現及說明。"}}}},n={name:"預設項目",args:{inputId:"meals01",label:"帕南薩馬來椰漿飯",value:"Pak Nasser's Nasi Lemak",name:"Meals",themeColor:"primary"},render:a=>({components:{Radio:t},setup(){const i=R("");return{args:a,isRadioPicked:i}},template:`
            <div style="display:flex; gap: 8px">
                <Radio  
                    :inputId="args.inputId"
                    :label="args.label"
                    :value="args.value"
                    :name="args.name"
                    :themeColor="args.themeColor"
                    v-model="isRadioPicked">
                </Radio>
            </div>
            <p> Meal You Have Reserved: {{ isRadioPicked }} </p>
        `}),parameters:{controls:{expanded:!0,docs:{source:{transform:(a,i)=>{const{args:e}=i;return["<Radio",`  inputId="${e.inputId}"`,`  label="${e.label}"`,`  value="${e.value}"`,`  name="${e.name}"`,`  themeColor="${e.themeColor}"`,'  v-model="isRadioPicked"',"/>"].join(`
`).trim()}}}}}},l={name:"主題色彩",args:{data:[{inputId:"meals01",name:"Meals",value:"Pak Nasser's Nasi Lemak",label:"帕南薩馬來椰漿飯"},{inputId:"meals02",name:"Meals",value:"Hyderabadi Vegetable Biryani",label:"海德拉巴素食印度香飯"},{inputId:"meals03",name:"Meals",value:"Uncle Chin's Chicken Rice",label:"秦叔叔海南雞飯"}],themeColor:"primary"},render:a=>({components:{Radio:t},setup(){const i=R("Pak Nasser's Nasi Lemak");return{args:a,isRadioPicked:i}},template:`
            <div style="display:flex; flex-direction:column; gap: 12px">
                <div style="display:flex; gap: 8px">
                    <Radio  v-for="(item) in args.data"
                            :inputId="item.inputId"
                            :label="item.label"
                            :value="item.value"
                            :name="item.name"
                            themeColor="primary"
                            :isChecked="isRadioPicked"
                            v-model="isRadioPicked">
                    </Radio>
                </div>
                <div style="display:flex; gap: 8px">
                    <Radio  v-for="(item) in args.data"
                            :inputId="item.inputId"
                            :label="item.label"
                            :value="item.value"
                            :name="item.name"
                            themeColor="secondary"
                            v-model="isRadioPicked">
                    </Radio>
                </div>
                <div style="display:flex; gap: 8px">
                    <Radio  v-for="(item) in args.data"
                            :inputId="item.inputId"
                            :label="item.label"
                            :value="item.value"
                            :name="item.name"
                            themeColor="tertiary"
                            v-model="isRadioPicked">
                    </Radio>
                </div>
                <div style="display:flex; gap: 8px">
                    <Radio  v-for="(item) in args.data"
                            :inputId="item.inputId"
                            :label="item.label"
                            :value="item.value"
                            :name="item.name"
                            themeColor="success"
                            v-model="isRadioPicked">
                    </Radio>
                </div>
                <div style="display:flex; gap: 8px">
                    <Radio  v-for="(item) in args.data"
                            :inputId="item.inputId"
                            :label="item.label"
                            :value="item.value"
                            :name="item.name"
                            themeColor="warning"
                            v-model="isRadioPicked">
                    </Radio>
                </div>
                <div style="display:flex; gap: 8px">
                    <Radio  v-for="(item) in args.data"
                            :inputId="item.inputId"
                            :label="item.label"
                            :value="item.value"
                            :name="item.name"
                            themeColor="error"
                            v-model="isRadioPicked">
                    </Radio>
                </div>
                <div style="display:flex; gap: 8px">
                    <Radio  v-for="(item) in args.data"
                            :inputId="item.inputId"
                            :label="item.label"
                            :value="item.value"
                            :name="item.name"
                            themeColor="info"
                            v-model="isRadioPicked">
                    </Radio>
                </div>
            </div>
        `}),parameters:{controls:{expanded:!0,exclude:["themeColor"]}}};var m,u,p;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: "預設項目",
  args: {
    inputId: "meals01",
    label: "帕南薩馬來椰漿飯",
    value: "Pak Nasser's Nasi Lemak",
    name: "Meals",
    themeColor: 'primary'
  },
  render: args => ({
    components: {
      Radio
    },
    setup() {
      const isRadioPicked = ref("");
      return {
        args,
        isRadioPicked
      };
    },
    template: \`
            <div style="display:flex; gap: 8px">
                <Radio  
                    :inputId="args.inputId"
                    :label="args.label"
                    :value="args.value"
                    :name="args.name"
                    :themeColor="args.themeColor"
                    v-model="isRadioPicked">
                </Radio>
            </div>
            <p> Meal You Have Reserved: {{ isRadioPicked }} </p>
        \`
  }),
  // 控制 controls 中能控制的參數
  parameters: {
    controls: {
      expanded: true,
      // include: ['themeColor', 'label', 'value', 'name' ],
      docs: {
        source: {
          transform: (src, storyContext) => {
            const {
              args
            } = storyContext;
            return ['<Radio', \`  inputId="\${args.inputId}"\`, \`  label="\${args.label}"\`, \`  value="\${args.value}"\`, \`  name="\${args.name}"\`, \`  themeColor="\${args.themeColor}"\`, '  v-model="isRadioPicked"', '/>'].join('\\n').trim();
          }
        }
      }
    }
  }
}`,...(p=(u=n.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};var c,v,y;l.parameters={...l.parameters,docs:{...(c=l.parameters)==null?void 0:c.docs,source:{originalSource:`{
  name: "主題色彩",
  args: {
    data: [{
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
      Radio
    },
    setup() {
      const isRadioPicked = ref("Pak Nasser's Nasi Lemak");
      return {
        args,
        isRadioPicked
      };
    },
    template: \`
            <div style="display:flex; flex-direction:column; gap: 12px">
                <div style="display:flex; gap: 8px">
                    <Radio  v-for="(item) in args.data"
                            :inputId="item.inputId"
                            :label="item.label"
                            :value="item.value"
                            :name="item.name"
                            themeColor="primary"
                            :isChecked="isRadioPicked"
                            v-model="isRadioPicked">
                    </Radio>
                </div>
                <div style="display:flex; gap: 8px">
                    <Radio  v-for="(item) in args.data"
                            :inputId="item.inputId"
                            :label="item.label"
                            :value="item.value"
                            :name="item.name"
                            themeColor="secondary"
                            v-model="isRadioPicked">
                    </Radio>
                </div>
                <div style="display:flex; gap: 8px">
                    <Radio  v-for="(item) in args.data"
                            :inputId="item.inputId"
                            :label="item.label"
                            :value="item.value"
                            :name="item.name"
                            themeColor="tertiary"
                            v-model="isRadioPicked">
                    </Radio>
                </div>
                <div style="display:flex; gap: 8px">
                    <Radio  v-for="(item) in args.data"
                            :inputId="item.inputId"
                            :label="item.label"
                            :value="item.value"
                            :name="item.name"
                            themeColor="success"
                            v-model="isRadioPicked">
                    </Radio>
                </div>
                <div style="display:flex; gap: 8px">
                    <Radio  v-for="(item) in args.data"
                            :inputId="item.inputId"
                            :label="item.label"
                            :value="item.value"
                            :name="item.name"
                            themeColor="warning"
                            v-model="isRadioPicked">
                    </Radio>
                </div>
                <div style="display:flex; gap: 8px">
                    <Radio  v-for="(item) in args.data"
                            :inputId="item.inputId"
                            :label="item.label"
                            :value="item.value"
                            :name="item.name"
                            themeColor="error"
                            v-model="isRadioPicked">
                    </Radio>
                </div>
                <div style="display:flex; gap: 8px">
                    <Radio  v-for="(item) in args.data"
                            :inputId="item.inputId"
                            :label="item.label"
                            :value="item.value"
                            :name="item.name"
                            themeColor="info"
                            v-model="isRadioPicked">
                    </Radio>
                </div>
            </div>
        \`
  }),
  // 控制 controls 中能控制的參數
  parameters: {
    controls: {
      expanded: true,
      exclude: ['themeColor']
    }
  }
}`,...(y=(v=l.parameters)==null?void 0:v.docs)==null?void 0:y.source}}};const V=["RadioDefaultStory","RadioColorDefault"];export{l as RadioColorDefault,n as RadioDefaultStory,V as __namedExportsOrder,M as default};

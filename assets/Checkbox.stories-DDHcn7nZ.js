import{m as E,u as N,r as c,w as $,a as S,b as u,g as M,h as D,n as d,t as _,o as p}from"./vue.esm-bundler-wiEVvyCh.js";import{_ as A}from"./Icon-HcFZ1N8v.js";import"./iframe-DA8wbGxa.js";import"../sb-preview/runtime.js";const B=["for"],F=["id","name","value","checked"],O={class:"checkbox-text"},t={__name:"Checkbox",props:E({label:{type:String},value:{type:[String,Boolean]},name:{type:String},id:{type:String},themeColor:{type:String,default:"primary",validator:a=>["primary","secondary","tertiary","success","warning","error","info"].includes(a)},className:{type:String,default:""},isChecked:{type:Boolean,default:!1},isMultiple:{type:Boolean,default:!1}},{modelValue:{},modelModifiers:{}}),emits:["update:modelValue"],setup(a){const n=N(a,"modelValue"),e=a,o=c(!1);$(()=>e.isChecked,i=>{e.isMultiple?i&&Array.isArray(n.value)&&!n.value.includes(e.value)?n.value.push(e.value):!i&&Array.isArray(n.value)&&n.value.includes(e.value)&&(n.value=n.value.filter(m=>m!==e.value)):n.value=i,o.value=i},{immediate:!0});const w=()=>{e.isMultiple?Array.isArray(n.value)&&(o.value?n.value=n.value.filter(i=>i!==e.value):n.value.push(e.value)):n.value=!o.value,o.value=!o.value};return(i,m)=>(p(),S("label",{for:e.id,class:d({checkbox:!0,[e.className]:!!e.className})},[u("input",{class:"checkbox-input",type:"checkbox",id:e.id,name:e.name,value:e.value,checked:o.value,onChange:w},null,40,F),u("div",{class:d(["checkbox-icon",o.value?`checkbox-checked-${e.themeColor}`:`checkbox-unchecked-${e.themeColor}`])},[o.value?(p(),M(A,{key:0,name:"check",color:"#fff"})):D("",!0)],2),u("span",O,_(e.label),1)],10,B))}};t.__docgenInfo={exportName:"default",displayName:"Checkbox",description:"",tags:{},props:[{name:"label",type:{name:"string"}},{name:"value",type:{name:"string|boolean"}},{name:"name",type:{name:"string"}},{name:"id",type:{name:"string"}},{name:"themeColor",type:{name:"string"},defaultValue:{func:!1,value:'"primary"'},values:["primary","secondary","tertiary","success","warning","error","info"]},{name:"className",type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"isChecked",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"isMultiple",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],sourceFiles:["D:/98_測試/up/DED-WDS_VUE/libs/src/ui/element/Checkbox/Checkbox.vue"]};const j={title:"Design System/Checkbox*",component:t,excludeStories:/.*Data$/,tags:["autodocs"],argTypes:{label:{description:"文字標籤",control:{type:"text"}},id:{description:"對應 label 的 for",control:{type:"text"}},value:{description:"",control:{type:"text"}},name:{description:"",control:{type:"text"}},themeColor:{description:"主題顏色",control:{type:"select"},options:["primary","secondary","tertiary","success","warning","error","info"]},className:{description:"客製化樣式",control:{type:"text"}},isChecked:{description:"是否選擇",control:{type:"boolean"}},isMultiple:{description:"是否複選框",control:{type:"boolean"}}},parameters:{docs:{title:"Checkbox",description:{component:"Checkbox 組件的呈現及說明。"}}}},l={name:"預設項目(內容待確認)1",args:{label:"我已閱讀並同意相關服務條款",id:"acceptTerms",name:"terms",themeColor:"primary",className:"",isChecked:!0},render:a=>({components:{Checkbox:t},setup(){const n=c(!1);return{args:a,isCheckboxChecked:n}},template:`
            <Checkbox
                :label="args.label"
                :id="args.id"
                :name="args.name"
                :themeColor="args.themeColor"
                :className="args.className"
                v-model="isCheckboxChecked"
                :isChecked="args.isChecked"
            ></Checkbox>
            <br/>
            v-model value: {{isCheckboxChecked}}
        `}),parameters:{controls:{include:["label","id","value","name","themeColor","className","isChecked"]},docs:{source:{transform:(a,n)=>{const{args:e}=n;return["<Checkbox",`  label="${e.label}"`,`  id="${e.id}"`,`  value="${e.value}"`,`  name="${e.name}"`,`  themeColor="${e.themeColor}"`,`  className="${e.className}"`,'  v-model="isCheckboxChecked"',">",`  ${e.label}`,"</Checkbox>"].join(`
`).trim()}}}}},r={name:"預設項目(內容待確認)2",args:{themeColor:"primary",className:"",datasource:[{label:"選項ㄧ",id:"option1",value:"option1",name:"options",checked:!0},{label:"選項二",id:"option2",value:"option2",name:"options"},{label:"選項三",id:"option3",value:"option3",name:"options"}]},render:a=>({components:{Checkbox:t},setup(){const n=c([]);return{args:a,checkedCheckboxOptions:n}},template:`
            <div style="display: inline-flex; flex-wrap: wrap; gap: 8px; margin-bottom: 24px;">
                <Checkbox
                    v-for="(item, index) in args.datasource"
                    :key="index"
                    :label="item.label"
                    :value="item.value"
                    :name="item.name"
                    :id="item.id"
                    :themeColor="args.themeColor"
                    :isChecked="item.checked"
                    v-model="checkedCheckboxOptions"
                    isMultiple
                >{{item.value}}</Checkbox>
            </div>
            <p>已選項目: {{checkedCheckboxOptions}}</p>
        `}),parameters:{controls:{include:["label","id","name","themeColor","className","datasource"]}}},s={name:"主題色彩",args:{themeColor:"primary",className:"",datasourcePrimary:[{label:"選項ㄧ",id:"option1",value:"option1",name:"primary",checked:!0},{label:"選項二",id:"option2",value:"option2",name:"primary"},{label:"選項三",id:"option3",value:"option3",name:"primary"}],datasourceSecondary:[{label:"選項ㄧ",id:"option4",value:"option4",name:"secondary",checked:!0},{label:"選項二",id:"option5",value:"option5",name:"secondary"},{label:"選項三",id:"option6",value:"option6",name:"secondary"}],datasourceTertiary:[{label:"選項ㄧ",id:"option7",value:"option7",name:"tertiary",checked:!0},{label:"選項二",id:"option8",value:"option8",name:"tertiary"},{label:"選項三",id:"option9",value:"option9",name:"tertiary"}],datasourceSuccess:[{label:"選項ㄧ",id:"option10",value:"option10",name:"success",checked:!0},{label:"選項二",id:"option11",value:"option11",name:"success"},{label:"選項三",id:"option12",value:"option12",name:"success"}],datasourceWarning:[{label:"選項ㄧ",id:"option13",value:"option13",name:"warning",checked:!0},{label:"選項二",id:"option14",value:"option14",name:"warning"},{label:"選項三",id:"option15",value:"option15",name:"warning"}],datasourceError:[{label:"選項ㄧ",id:"option16",value:"option16",name:"error",checked:!0},{label:"選項二",id:"option17",value:"option17",name:"error"},{label:"選項三",id:"option18",value:"option18",name:"error"}],datasourceInfo:[{label:"選項ㄧ",id:"option19",value:"option19",name:"info",checked:!0},{label:"選項二",id:"option20",value:"option20",name:"info"},{label:"選項三",id:"option21",value:"option21",name:"info"}]},render:a=>({components:{Checkbox:t},setup(){const n=c([]);return{args:a,checkedCheckboxOptions:n}},template:`
            <div style="display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 24px;">
                <Checkbox
                    v-for="(item, index) in args.datasourcePrimary"
                    :key="index"
                    :label="item.label"
                    :value="item.value"
                    :name="item.name"
                    :id="item.id"
                    themeColor="primary"
                    :isChecked="item.checked"
                    isMultiple
                >{{item.value}}</Checkbox>
            </div>
            <div style="display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 24px;">
                <Checkbox
                    v-for="(item, index) in args.datasourceSecondary"
                    :key="index"
                    :label="item.label"
                    :value="item.value"
                    :name="item.name"
                    :id="item.id"
                    themeColor="secondary"
                    :isChecked="item.checked"
                    isMultiple
                >{{item.value}}</Checkbox>
            </div>
            <div style="display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 24px;">
                <Checkbox
                    v-for="(item, index) in args.datasourceTertiary"
                    :key="index"
                    :label="item.label"
                    :value="item.value"
                    :name="item.name"
                    :id="item.id"
                    themeColor="tertiary"
                    :isChecked="item.checked"
                    isMultiple
                >{{item.value}}</Checkbox>
            </div>
            <div style="display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 24px;">
                <Checkbox
                    v-for="(item, index) in args.datasourceSuccess"
                    :key="index"
                    :label="item.label"
                    :value="item.value"
                    :name="item.name"
                    :id="item.id"
                    themeColor="success"
                    :isChecked="item.checked"
                    isMultiple
                >{{item.value}}</Checkbox>
            </div>
            <div style="display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 24px;">
                <Checkbox
                    v-for="(item, index) in args.datasourceWarning"
                    :key="index"
                    :label="item.label"
                    :value="item.value"
                    :name="item.name"
                    :id="item.id"
                    themeColor="warning"
                    :isChecked="item.checked"
                    isMultiple
                >{{item.value}}</Checkbox>
            </div>
            <div style="display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 24px;">
                <Checkbox
                    v-for="(item, index) in args.datasourceError"
                    :key="index"
                    :label="item.label"
                    :value="item.value"
                    :name="item.name"
                    :id="item.id"
                    themeColor="error"
                    :isChecked="item.checked"
                    isMultiple
                >{{item.value}}</Checkbox>
            </div>
            <div style="display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 24px;">
                <Checkbox
                    v-for="(item, index) in args.datasourceInfo"
                    :key="index"
                    :label="item.label"
                    :value="item.value"
                    :name="item.name"
                    :id="item.id"
                    themeColor="info"
                    :isChecked="item.checked"
                    isMultiple
                >{{item.value}}</Checkbox>
            </div>
        `}),parameters:{controls:{include:["label","id","name","themeColor","className","datasource"]}}};var h,b,v;l.parameters={...l.parameters,docs:{...(h=l.parameters)==null?void 0:h.docs,source:{originalSource:`{
  name: "預設項目(內容待確認)1",
  args: {
    label: "我已閱讀並同意相關服務條款",
    id: "acceptTerms",
    name: "terms",
    themeColor: "primary",
    className: "",
    isChecked: true
  },
  render: args => ({
    components: {
      Checkbox
    },
    setup() {
      const isCheckboxChecked = ref(false);
      return {
        args,
        isCheckboxChecked
      };
    },
    template: \`
            <Checkbox
                :label="args.label"
                :id="args.id"
                :name="args.name"
                :themeColor="args.themeColor"
                :className="args.className"
                v-model="isCheckboxChecked"
                :isChecked="args.isChecked"
            ></Checkbox>
            <br/>
            v-model value: {{isCheckboxChecked}}
        \`
  }),
  // 控制 controls 中能控制的參數
  parameters: {
    controls: {
      include: ['label', 'id', 'value', 'name', 'themeColor', 'className', 'isChecked']
    },
    docs: {
      source: {
        transform: (src, storyContext) => {
          const {
            args
          } = storyContext;
          return ['<Checkbox', \`  label="\${args.label}"\`, \`  id="\${args.id}"\`, \`  value="\${args.value}"\`, \`  name="\${args.name}"\`, \`  themeColor="\${args.themeColor}"\`, \`  className="\${args.className}"\`, '  v-model="isCheckboxChecked"', '>', \`  \${args.label}\`, '</Checkbox>'].join('\\n').trim();
        }
      }
    }
  }
}`,...(v=(b=l.parameters)==null?void 0:b.docs)==null?void 0:v.source}}};var x,k,C;r.parameters={...r.parameters,docs:{...(x=r.parameters)==null?void 0:x.docs,source:{originalSource:`{
  name: "預設項目(內容待確認)2",
  args: {
    themeColor: "primary",
    className: "",
    datasource: [{
      label: "選項ㄧ",
      id: "option1",
      value: "option1",
      name: "options",
      checked: true
    }, {
      label: "選項二",
      id: "option2",
      value: "option2",
      name: "options"
    }, {
      label: "選項三",
      id: "option3",
      value: "option3",
      name: "options"
    }]
  },
  render: args => ({
    components: {
      Checkbox
    },
    setup() {
      const checkedCheckboxOptions = ref([]);
      return {
        args,
        checkedCheckboxOptions
      };
    },
    template: \`
            <div style="display: inline-flex; flex-wrap: wrap; gap: 8px; margin-bottom: 24px;">
                <Checkbox
                    v-for="(item, index) in args.datasource"
                    :key="index"
                    :label="item.label"
                    :value="item.value"
                    :name="item.name"
                    :id="item.id"
                    :themeColor="args.themeColor"
                    :isChecked="item.checked"
                    v-model="checkedCheckboxOptions"
                    isMultiple
                >{{item.value}}</Checkbox>
            </div>
            <p>已選項目: {{checkedCheckboxOptions}}</p>
        \`
  }),
  // 控制 controls 中能控制的參數
  parameters: {
    controls: {
      include: ['label', 'id', 'name', 'themeColor', 'className', 'datasource']
    }
    // docs: {
    //     source: {
    //         transform: (src, storyContext) => {
    //             const { args } = storyContext;
    //             return [
    //                 '<Checkbox',
    //                 \`  label="\${args.datasource[0].label}"\`,
    //                 \`  value="\${args.datasource[0].value}"\`,
    //                 \`  name="\${args.datasource[0].name}"\`,
    //                 \`  id="\${args.datasource[0].id}"\`,
    //                 \`  themeColor="\${args.themeColor}"\`,
    //                 \`  className="\${args.className}"\`,
    //                 '>',
    //                 \`  \${args.datasource[0].label}\`,
    //                 '</Checkbox>'
    //             ].join('\\n').trim();
    //         }
    //     }
    // }
  }
}`,...(C=(k=r.parameters)==null?void 0:k.docs)==null?void 0:C.source}}};var y,g,f;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
  name: "主題色彩",
  args: {
    themeColor: "primary",
    className: "",
    datasourcePrimary: [{
      label: "選項ㄧ",
      id: "option1",
      value: "option1",
      name: "primary",
      checked: true
    }, {
      label: "選項二",
      id: "option2",
      value: "option2",
      name: "primary"
    }, {
      label: "選項三",
      id: "option3",
      value: "option3",
      name: "primary"
    }],
    datasourceSecondary: [{
      label: "選項ㄧ",
      id: "option4",
      value: "option4",
      name: "secondary",
      checked: true
    }, {
      label: "選項二",
      id: "option5",
      value: "option5",
      name: "secondary"
    }, {
      label: "選項三",
      id: "option6",
      value: "option6",
      name: "secondary"
    }],
    datasourceTertiary: [{
      label: "選項ㄧ",
      id: "option7",
      value: "option7",
      name: "tertiary",
      checked: true
    }, {
      label: "選項二",
      id: "option8",
      value: "option8",
      name: "tertiary"
    }, {
      label: "選項三",
      id: "option9",
      value: "option9",
      name: "tertiary"
    }],
    datasourceSuccess: [{
      label: "選項ㄧ",
      id: "option10",
      value: "option10",
      name: "success",
      checked: true
    }, {
      label: "選項二",
      id: "option11",
      value: "option11",
      name: "success"
    }, {
      label: "選項三",
      id: "option12",
      value: "option12",
      name: "success"
    }],
    datasourceWarning: [{
      label: "選項ㄧ",
      id: "option13",
      value: "option13",
      name: "warning",
      checked: true
    }, {
      label: "選項二",
      id: "option14",
      value: "option14",
      name: "warning"
    }, {
      label: "選項三",
      id: "option15",
      value: "option15",
      name: "warning"
    }],
    datasourceError: [{
      label: "選項ㄧ",
      id: "option16",
      value: "option16",
      name: "error",
      checked: true
    }, {
      label: "選項二",
      id: "option17",
      value: "option17",
      name: "error"
    }, {
      label: "選項三",
      id: "option18",
      value: "option18",
      name: "error"
    }],
    datasourceInfo: [{
      label: "選項ㄧ",
      id: "option19",
      value: "option19",
      name: "info",
      checked: true
    }, {
      label: "選項二",
      id: "option20",
      value: "option20",
      name: "info"
    }, {
      label: "選項三",
      id: "option21",
      value: "option21",
      name: "info"
    }]
  },
  render: args => ({
    components: {
      Checkbox
    },
    setup() {
      const checkedCheckboxOptions = ref([]);
      return {
        args,
        checkedCheckboxOptions
      };
    },
    template: \`
            <div style="display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 24px;">
                <Checkbox
                    v-for="(item, index) in args.datasourcePrimary"
                    :key="index"
                    :label="item.label"
                    :value="item.value"
                    :name="item.name"
                    :id="item.id"
                    themeColor="primary"
                    :isChecked="item.checked"
                    isMultiple
                >{{item.value}}</Checkbox>
            </div>
            <div style="display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 24px;">
                <Checkbox
                    v-for="(item, index) in args.datasourceSecondary"
                    :key="index"
                    :label="item.label"
                    :value="item.value"
                    :name="item.name"
                    :id="item.id"
                    themeColor="secondary"
                    :isChecked="item.checked"
                    isMultiple
                >{{item.value}}</Checkbox>
            </div>
            <div style="display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 24px;">
                <Checkbox
                    v-for="(item, index) in args.datasourceTertiary"
                    :key="index"
                    :label="item.label"
                    :value="item.value"
                    :name="item.name"
                    :id="item.id"
                    themeColor="tertiary"
                    :isChecked="item.checked"
                    isMultiple
                >{{item.value}}</Checkbox>
            </div>
            <div style="display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 24px;">
                <Checkbox
                    v-for="(item, index) in args.datasourceSuccess"
                    :key="index"
                    :label="item.label"
                    :value="item.value"
                    :name="item.name"
                    :id="item.id"
                    themeColor="success"
                    :isChecked="item.checked"
                    isMultiple
                >{{item.value}}</Checkbox>
            </div>
            <div style="display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 24px;">
                <Checkbox
                    v-for="(item, index) in args.datasourceWarning"
                    :key="index"
                    :label="item.label"
                    :value="item.value"
                    :name="item.name"
                    :id="item.id"
                    themeColor="warning"
                    :isChecked="item.checked"
                    isMultiple
                >{{item.value}}</Checkbox>
            </div>
            <div style="display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 24px;">
                <Checkbox
                    v-for="(item, index) in args.datasourceError"
                    :key="index"
                    :label="item.label"
                    :value="item.value"
                    :name="item.name"
                    :id="item.id"
                    themeColor="error"
                    :isChecked="item.checked"
                    isMultiple
                >{{item.value}}</Checkbox>
            </div>
            <div style="display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 24px;">
                <Checkbox
                    v-for="(item, index) in args.datasourceInfo"
                    :key="index"
                    :label="item.label"
                    :value="item.value"
                    :name="item.name"
                    :id="item.id"
                    themeColor="info"
                    :isChecked="item.checked"
                    isMultiple
                >{{item.value}}</Checkbox>
            </div>
        \`
  }),
  // 控制 controls 中能控制的參數
  parameters: {
    controls: {
      include: ['label', 'id', 'name', 'themeColor', 'className', 'datasource']
    }
    // docs: {
    //     source: {
    //         transform: (src, storyContext) => {
    //             const { args } = storyContext;
    //             return [
    //                 '<Checkbox',
    //                 \`  label="\${args.datasource[0].label}"\`,
    //                 \`  value="\${args.datasource[0].value}"\`,
    //                 \`  name="\${args.datasource[0].name}"\`,
    //                 \`  id="\${args.datasource[0].id}"\`,
    //                 \`  themeColor="\${args.themeColor}"\`,
    //                 \`  className="\${args.className}"\`,
    //                 '>',
    //                 \`  \${args.datasource[0].label}\`,
    //                 '</Checkbox>'
    //             ].join('\\n').trim();
    //         }
    //     }
    // }
  }
}`,...(f=(g=s.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};const P=["CheckboxDefaultStory","CheckboxMultiStory","CheckboxColorStory"];export{s as CheckboxColorStory,l as CheckboxDefaultStory,r as CheckboxMultiStory,P as __namedExportsOrder,j as default};

import{m as $,u as O,r as g,w as f,a as h,F as D,A as M,n as b,o as l,b as C,B as w,d as _,t as E}from"./vue.esm-bundler-7m8tONXv.js";import{_ as j}from"./Icon-Brgto6mM.js";import"./iframe-VDKxfFGG.js";import"../sb-preview/runtime.js";const W=["for"],I=["id","name","value","checked","onChange"],T={class:"ded-checkbox-text"},m={__name:"Checkbox",props:$({themeColor:{type:String,default:"primary",validator:o=>["primary","secondary","tertiary","success","warning","error","info"].includes(o)},dataSource:{type:Object,required:!0},initValue:{type:Object,required:!0},direction:{type:String,default:"row",validator:o=>["row","column"].includes(o)},className:{type:String,default:""}},{modelValue:{},modelModifiers:{}}),emits:["update:modelValue"],setup(o){const a=O(o,"modelValue"),e=o,n=g([]);f(()=>e.initValue,i=>{const r=i;n.value=e.dataSource.map(t=>r.includes(t.value)),a.value=[...r]},{immediate:!0});const p=(i,r)=>{Array.isArray(a.value)?n.value[r]?a.value=a.value.filter(c=>c!==i.value):a.value.push(i.value):a.value=!n.value[r],n.value[r]=!n.value[r]};return(i,r)=>(l(),h("div",{class:b({"ded-checkbox-container":!0,[`ded-checkbox-container-${e.direction}`]:e.direction,[e.className]:!!e.className})},[(l(!0),h(D,null,M(e.dataSource,(t,c)=>(l(),h("label",{key:t.id,for:t.id,class:b({"ded-checkbox":!0})},[C("input",{class:"ded-checkbox-input",type:"checkbox",id:t.id,name:t.name,value:t.value,checked:n.value[c],onChange:k=>p(t,c)},null,40,I),C("div",{class:b(["ded-checkbox-icon",n.value[c]?`ded-checkbox-checked-${e.themeColor}`:`ded-checkbox-unchecked-${e.themeColor}`])},[n.value[c]?(l(),w(j,{key:0,name:"check"})):_("",!0)],2),C("span",T,E(t.label),1)],8,W))),128))],2))}};m.__docgenInfo={exportName:"default",displayName:"Checkbox",description:"",tags:{},props:[{name:"themeColor",type:{name:"string"},defaultValue:{func:!1,value:'"primary"'},values:["primary","secondary","tertiary","success","warning","error","info"]},{name:"dataSource",type:{name:"object"},required:!0},{name:"initValue",type:{name:"object"},required:!0},{name:"direction",type:{name:"string"},defaultValue:{func:!1,value:'"row"'},values:["row","column"]},{name:"className",type:{name:"string"},defaultValue:{func:!1,value:'""'}}],sourceFiles:["/Users/auouser/Desktop/Work_Space/DED-WDS_VUE/libs/src/ui/element/Checkbox/Checkbox.vue"]};function s(o){return`[
    ${o.map(a=>`{
        label: '${a.label}',
        value: '${a.value}',
    }`).join(`,
    `)}
  ]`}const q={title:"Component/Checkbox",component:m,tags:["autodocs"],argTypes:{themeColor:{description:"主題顏色",control:{type:"select"},options:["primary","secondary","tertiary","success","warning","error","info"],table:{type:{summary:"primary | secondary | tertiary | success | warning | error | info"}}},dataSource:{description:"資料來源",control:{type:"object"},table:{type:{summary:"{ label: string; value: string; }[]"}}},initValue:{description:"選中的項目",control:{type:"object"},table:{type:{summary:"string[]"}}},direction:{description:"排列方向",control:{type:"select"},options:["row","column"],table:{type:{summary:"row | column"}}},className:{description:"客製化樣式",control:{type:"text"}}},parameters:{docs:{title:"Checkbox",description:{component:"Checkbox 組件的呈現及說明。"}}}},u={name:"預設項目",args:{themeColor:"primary",dataSource:[{label:"Option1",value:"option1"},{label:"Option2",value:"option2"},{label:"Option3",value:"option3"}],initValue:["option1","option3"],direction:"row",className:""},render:o=>({components:{Checkbox:m},setup(){const a=g([]);return{args:o,checkedCheckboxOptions:a}},template:`
            <Checkbox
                :themeColor="args.themeColor"
                :dataSource="args.dataSource"
                :initValue="args.initValue"
                :direction="args.direction"
                :className="args.className"
                v-model="checkedCheckboxOptions"></Checkbox>
        `}),parameters:{controls:{},docs:{source:{transform:(o,a)=>{const{args:e}=a,n=s(e.dataSource);return["<Checkbox",`  themeColor="${e.themeColor}"`,`  :dataSource="${n}"`,`  :initValue="[${e.initValue}]"`,`  direction="${e.direction}"`,`  className="${e.className}"`,'  v-model="vModelData">',"</Checkbox>"].join(`
`).trim()}}}}},d={name:"主題色彩",args:{datasourcePrimary:[{label:"Option1",value:"option01"},{label:"Option2",value:"option02"},{label:"Option3",value:"option03"}],datasourceSecondary:[{label:"Option1",value:"option4"},{label:"Option2",value:"option5"},{label:"Option3",value:"option6"}],datasourceTertiary:[{label:"Option1",value:"option7"},{label:"Option2",value:"option8"},{label:"Option3",value:"option9"}],datasourceSuccess:[{label:"Option1",value:"option10"},{label:"Option2",value:"option11"},{label:"Option3",value:"option12"}],datasourceWarning:[{label:"Option1",value:"option13"},{label:"Option2",value:"option14"},{label:"Option3",value:"option15"}],datasourceError:[{label:"Option1",value:"option16"},{label:"Option2",value:"option17"},{label:"Option3",value:"option18"}],datasourceInfo:[{label:"Option1",value:"option19"},{label:"Option2",value:"option20"},{label:"Option3",value:"option21"}],initValue:["option01","option4","option7","option10","option13","option16","option19"],direction:"row",className:""},render:o=>({components:{Checkbox:m},setup(){const a=g([]);return{args:o,checkedCheckboxOptions:a}},template:`
            <div style="display: flex; flex-direction:column; gap: 16px;">
                <Checkbox
                    themeColor="primary"
                    :dataSource="args.datasourcePrimary"
                    :initValue="args.initValue"
                    :direction="args.direction"
                    :className="args.className"
                    v-model="checkedCheckboxOptions"></Checkbox>
                <Checkbox
                    themeColor="secondary"
                    :dataSource="args.datasourceSecondary"
                    :initValue="args.initValue"
                    :direction="args.direction"
                    :className="args.className"
                    v-model="checkedCheckboxOptions"></Checkbox>
                <Checkbox
                    themeColor="tertiary"
                    :dataSource="args.datasourceTertiary"
                    :initValue="args.initValue"
                    :direction="args.direction"
                    :className="args.className"
                    v-model="checkedCheckboxOptions"></Checkbox>

                <Checkbox
                    themeColor="success"
                    :dataSource="args.datasourceSuccess"
                    :initValue="args.initValue"
                    :direction="args.direction"
                    :className="args.className"
                    v-model="checkedCheckboxOptions"></Checkbox>

                <Checkbox
                    themeColor="warning"
                    :dataSource="args.datasourceWarning"
                    :initValue="args.initValue"
                    :direction="args.direction"
                    :className="args.className"
                    v-model="checkedCheckboxOptions"></Checkbox>

                <Checkbox
                    themeColor="error"
                    :dataSource="args.datasourceError"
                    :initValue="args.initValue"
                    :direction="args.direction"
                    :className="args.className"
                    v-model="checkedCheckboxOptions"></Checkbox>
                
                <Checkbox
                    themeColor="info"
                    :dataSource="args.datasourceInfo"
                    :initValue="args.initValue"
                    :direction="args.direction"
                    :className="args.className"
                    v-model="checkedCheckboxOptions"></Checkbox>
            </div>
        `}),parameters:{controls:{include:["label","id","name","themeColor","className","datasource"]},docs:{source:{transform:(o,a)=>{const{args:e}=a,n=s(e.datasourcePrimary),p=s(e.datasourceSecondary),i=s(e.datasourceTertiary),r=s(e.datasourceSuccess),t=s(e.datasourceWarning),c=s(e.datasourceError),k=s(e.datasourceInfo);return["<Checkbox",'  themeColor="primary"',`  :dataSource="${n}"`,`  :initValue="[${e.initValue[0]}]"`,`  direction="${e.direction}"`,`  className="${e.className}"`,'  v-model="vModelData">',"</Checkbox>","<Checkbox",'  themeColor="secondary"',`  :dataSource="${p}"`,`  :initValue="[${e.initValue[1]}]"`,`  direction="${e.direction}"`,`  className="${e.className}"`,'  v-model="vModelData">',"</Checkbox>","<Checkbox",'  themeColor="tertiary"',`  :dataSource="${i}"`,`  :initValue="[${e.initValue[2]}]"`,`  direction="${e.direction}"`,`  className="${e.className}"`,'  v-model="vModelData">',"</Checkbox>","<Checkbox",'  themeColor="success"',`  :dataSource="${r}"`,`  :initValue="[${e.initValue[3]}]"`,`  direction="${e.direction}"`,`  className="${e.className}"`,'  v-model="vModelData">',"<Checkbox",'  themeColor="warning"',`  :dataSource="${t}"`,`  :initValue="[${e.initValue[4]}]"`,`  direction="${e.direction}"`,`  className="${e.className}"`,'  v-model="vModelData">',"</Checkbox>","<Checkbox",'  themeColor="error"',`  :dataSource="${c}"`,`  :initValue="[${e.initValue[5]}]"`,`  direction="${e.direction}"`,`  className="${e.className}"`,'  v-model="vModelData">',"</Checkbox>","<Checkbox",'  themeColor="info"',`  :dataSource="${k}"`,`  :initValue="[${e.initValue[6]}]"`,`  direction="${e.direction}"`,`  className="${e.className}"`,'  v-model="vModelData">',"</Checkbox>"].join(`
`).trim()}}}}};var v,x,y;u.parameters={...u.parameters,docs:{...(v=u.parameters)==null?void 0:v.docs,source:{originalSource:`{
  name: "預設項目",
  args: {
    themeColor: "primary",
    dataSource: [{
      label: "Option1",
      value: "option1"
    }, {
      label: "Option2",
      value: "option2"
    }, {
      label: "Option3",
      value: "option3"
    }],
    initValue: ["option1", "option3"],
    direction: "row",
    className: ""
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
            <Checkbox
                :themeColor="args.themeColor"
                :dataSource="args.dataSource"
                :initValue="args.initValue"
                :direction="args.direction"
                :className="args.className"
                v-model="checkedCheckboxOptions"></Checkbox>
        \`
  }),
  // 控制 controls 中能控制的參數
  parameters: {
    controls: {
      // include: [ 'label', 'id', 'name', 'themeColor', 'className','datasource'],
    },
    docs: {
      source: {
        transform: (src, storyContext) => {
          const {
            args
          } = storyContext;
          const dataSourceString = formatDataSource(args.dataSource);
          return ['<Checkbox', \`  themeColor="\${args.themeColor}"\`, \`  :dataSource="\${dataSourceString}"\`, \`  :initValue="[\${args.initValue}]"\`, \`  direction="\${args.direction}"\`, \`  className="\${args.className}"\`, '  v-model="vModelData">', '</Checkbox>'].join('\\n').trim();
        }
      }
    }
  }
}`,...(y=(x=u.parameters)==null?void 0:x.docs)==null?void 0:y.source}}};var S,V,N;d.parameters={...d.parameters,docs:{...(S=d.parameters)==null?void 0:S.docs,source:{originalSource:`{
  name: "主題色彩",
  args: {
    datasourcePrimary: [{
      label: "Option1",
      value: "option01"
    }, {
      label: "Option2",
      value: "option02"
    }, {
      label: "Option3",
      value: "option03"
    }],
    datasourceSecondary: [{
      label: "Option1",
      value: "option4"
    }, {
      label: "Option2",
      value: "option5"
    }, {
      label: "Option3",
      value: "option6"
    }],
    datasourceTertiary: [{
      label: "Option1",
      value: "option7"
    }, {
      label: "Option2",
      value: "option8"
    }, {
      label: "Option3",
      value: "option9"
    }],
    datasourceSuccess: [{
      label: "Option1",
      value: "option10"
    }, {
      label: "Option2",
      value: "option11"
    }, {
      label: "Option3",
      value: "option12"
    }],
    datasourceWarning: [{
      label: "Option1",
      value: "option13"
    }, {
      label: "Option2",
      value: "option14"
    }, {
      label: "Option3",
      value: "option15"
    }],
    datasourceError: [{
      label: "Option1",
      value: "option16"
    }, {
      label: "Option2",
      value: "option17"
    }, {
      label: "Option3",
      value: "option18"
    }],
    datasourceInfo: [{
      label: "Option1",
      value: "option19"
    }, {
      label: "Option2",
      value: "option20"
    }, {
      label: "Option3",
      value: "option21"
    }],
    initValue: ["option01", "option4", "option7", "option10", "option13", "option16", "option19"],
    direction: "row",
    className: ""
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
            <div style="display: flex; flex-direction:column; gap: 16px;">
                <Checkbox
                    themeColor="primary"
                    :dataSource="args.datasourcePrimary"
                    :initValue="args.initValue"
                    :direction="args.direction"
                    :className="args.className"
                    v-model="checkedCheckboxOptions"></Checkbox>
                <Checkbox
                    themeColor="secondary"
                    :dataSource="args.datasourceSecondary"
                    :initValue="args.initValue"
                    :direction="args.direction"
                    :className="args.className"
                    v-model="checkedCheckboxOptions"></Checkbox>
                <Checkbox
                    themeColor="tertiary"
                    :dataSource="args.datasourceTertiary"
                    :initValue="args.initValue"
                    :direction="args.direction"
                    :className="args.className"
                    v-model="checkedCheckboxOptions"></Checkbox>

                <Checkbox
                    themeColor="success"
                    :dataSource="args.datasourceSuccess"
                    :initValue="args.initValue"
                    :direction="args.direction"
                    :className="args.className"
                    v-model="checkedCheckboxOptions"></Checkbox>

                <Checkbox
                    themeColor="warning"
                    :dataSource="args.datasourceWarning"
                    :initValue="args.initValue"
                    :direction="args.direction"
                    :className="args.className"
                    v-model="checkedCheckboxOptions"></Checkbox>

                <Checkbox
                    themeColor="error"
                    :dataSource="args.datasourceError"
                    :initValue="args.initValue"
                    :direction="args.direction"
                    :className="args.className"
                    v-model="checkedCheckboxOptions"></Checkbox>
                
                <Checkbox
                    themeColor="info"
                    :dataSource="args.datasourceInfo"
                    :initValue="args.initValue"
                    :direction="args.direction"
                    :className="args.className"
                    v-model="checkedCheckboxOptions"></Checkbox>
            </div>
        \`
  }),
  // 控制 controls 中能控制的參數
  parameters: {
    controls: {
      include: ['label', 'id', 'name', 'themeColor', 'className', 'datasource']
    },
    docs: {
      source: {
        transform: (src, storyContext) => {
          const {
            args
          } = storyContext;
          const datasourcePrimary = formatDataSource(args.datasourcePrimary);
          const datasourceSecondary = formatDataSource(args.datasourceSecondary);
          const datasourceTertiary = formatDataSource(args.datasourceTertiary);
          const datasourceSuccess = formatDataSource(args.datasourceSuccess);
          const datasourceWarning = formatDataSource(args.datasourceWarning);
          const datasourceError = formatDataSource(args.datasourceError);
          const datasourceInfo = formatDataSource(args.datasourceInfo);
          return ['<Checkbox', \`  themeColor="primary"\`, \`  :dataSource="\${datasourcePrimary}"\`, \`  :initValue="[\${args.initValue[0]}]"\`, \`  direction="\${args.direction}"\`, \`  className="\${args.className}"\`, '  v-model="vModelData">', '</Checkbox>', '<Checkbox', \`  themeColor="secondary"\`, \`  :dataSource="\${datasourceSecondary}"\`, \`  :initValue="[\${args.initValue[1]}]"\`, \`  direction="\${args.direction}"\`, \`  className="\${args.className}"\`, '  v-model="vModelData">', '</Checkbox>', '<Checkbox', \`  themeColor="tertiary"\`, \`  :dataSource="\${datasourceTertiary}"\`, \`  :initValue="[\${args.initValue[2]}]"\`, \`  direction="\${args.direction}"\`, \`  className="\${args.className}"\`, '  v-model="vModelData">', '</Checkbox>', '<Checkbox', \`  themeColor="success"\`, \`  :dataSource="\${datasourceSuccess}"\`, \`  :initValue="[\${args.initValue[3]}]"\`, \`  direction="\${args.direction}"\`, \`  className="\${args.className}"\`, '  v-model="vModelData">', '<Checkbox', \`  themeColor="warning"\`, \`  :dataSource="\${datasourceWarning}"\`, \`  :initValue="[\${args.initValue[4]}]"\`, \`  direction="\${args.direction}"\`, \`  className="\${args.className}"\`, '  v-model="vModelData">', '</Checkbox>', '<Checkbox', \`  themeColor="error"\`, \`  :dataSource="\${datasourceError}"\`, \`  :initValue="[\${args.initValue[5]}]"\`, \`  direction="\${args.direction}"\`, \`  className="\${args.className}"\`, '  v-model="vModelData">', '</Checkbox>', '<Checkbox', \`  themeColor="info"\`, \`  :dataSource="\${datasourceInfo}"\`, \`  :initValue="[\${args.initValue[6]}]"\`, \`  direction="\${args.direction}"\`, \`  className="\${args.className}"\`, '  v-model="vModelData">', '</Checkbox>'].join('\\n').trim();
        }
      }
    }
  }
}`,...(N=(V=d.parameters)==null?void 0:V.docs)==null?void 0:N.source}}};const U=["CheckboxMultiStory","CheckboxColorStory"];export{d as CheckboxColorStory,u as CheckboxMultiStory,U as __namedExportsOrder,q as default};

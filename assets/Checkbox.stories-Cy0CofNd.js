import{m as $,u as D,e as g,w as E,a as h,F as w,k as O,n as b,o as l,b as C,g as M,f as _,t as N}from"./vue.esm-bundler-Dy0-1sXb.js";import{_ as j}from"./Icon-fJmL2Qrc.js";import"./iframe-a5uTrigX.js";import"../sb-preview/runtime.js";const I=["for"],T=["id","name","value","checked","onChange"],W={class:"checkbox-text"},m={__name:"Checkbox",props:$({themeColor:{type:String,default:"primary",validator:a=>["primary","secondary","tertiary","success","warning","error","info"].includes(a)},dataSource:{type:Object,default:()=>[]},initValue:{type:Object,default:()=>[]},direction:{type:String,default:"row",validator:a=>["row","column"].includes(a)},className:{type:String,default:""}},{modelValue:{},modelModifiers:{}}),emits:["update:modelValue"],setup(a){const o=D(a,"modelValue"),e=a,n=g([]);E(()=>e.initValue,u=>{const t=u;n.value=e.dataSource.map(r=>t.includes(r.value)),o.value=[...t]},{immediate:!0});const p=(u,t)=>{Array.isArray(o.value)?n.value[t]?o.value=o.value.filter(i=>i!==u.value):o.value.push(u.value):o.value=!n.value[t],n.value[t]=!n.value[t]};return(u,t)=>(l(),h("div",{class:b({"checkbox-container":!0,[`checkbox-container-${e.direction}`]:e.direction,[e.className]:!!e.className})},[(l(!0),h(w,null,O(e.dataSource,(r,i)=>(l(),h("label",{key:r.id,for:r.id,class:b({checkbox:!0})},[C("input",{class:"checkbox-input",type:"checkbox",id:r.id,name:r.name,value:r.value,checked:n.value[i],onChange:k=>p(r,i)},null,40,T),C("div",{class:b(["checkbox-icon",n.value[i]?`checkbox-checked-${e.themeColor}`:`checkbox-unchecked-${e.themeColor}`])},[n.value[i]?(l(),M(j,{key:0,name:"check",color:"#fff"})):_("",!0)],2),C("span",W,N(r.label),1)],8,I))),128))],2))}};m.__docgenInfo={exportName:"default",displayName:"Checkbox",description:"",tags:{},props:[{name:"themeColor",type:{name:"string"},defaultValue:{func:!1,value:'"primary"'},values:["primary","secondary","tertiary","success","warning","error","info"]},{name:"dataSource",type:{name:"object"},defaultValue:{func:!1,value:"[]"}},{name:"initValue",type:{name:"object"},defaultValue:{func:!1,value:"[]"}},{name:"direction",type:{name:"string"},defaultValue:{func:!1,value:'"row"'},values:["row","column"]},{name:"className",type:{name:"string"},defaultValue:{func:!1,value:'""'}}],sourceFiles:["D:/98_測試/up/DED-WDS_VUE/libs/src/ui/element/Checkbox/Checkbox.vue"]};function c(a){return`[
    ${a.map(o=>`{
        label: '${o.label}',
           id: '${o.id}',
        value: '${o.value}',
        name: '${o.name}'
    }`).join(`,
    `)}
  ]`}const z={title:"Design System/Checkbox",component:m,tags:["autodocs"],argTypes:{themeColor:{description:"主題顏色",control:{type:"select"},options:["primary","secondary","tertiary","success","warning","error","info"],table:{type:{summary:"primary | secondary | tertiary | success | warning | error | info"}}},dataSource:{description:"資料來源",control:{type:"object"},table:{type:{summary:"{ label: string; id: string; value: string; name: string; }[]"}}},initValue:{description:"選中的項目",control:{type:"object"},table:{type:{summary:"string[]"}}},direction:{description:"排列方向",control:{type:"select"},options:["row","column"],table:{type:{summary:"row | column"}}},className:{description:"客製化樣式",control:{type:"text"}}},parameters:{docs:{title:"Checkbox",description:{component:"Checkbox 組件的呈現及說明。"}}}},s={name:"預設項目",args:{themeColor:"primary",dataSource:[{label:"選項ㄧ",id:"option1",value:"option1",name:"group1"},{label:"選項二",id:"option2",value:"option2",name:"group1"},{label:"選項三",id:"option3",value:"option3",name:"group1"}],initValue:["option1","option3"],direction:"row",className:""},render:a=>({components:{Checkbox:m},setup(){const o=g([]);return{args:a,checkedCheckboxOptions:o}},template:`
            <Checkbox
                :themeColor="args.themeColor"
                :dataSource="args.dataSource"
                :initValue="args.initValue"
                :direction="args.direction"
                v-model="checkedCheckboxOptions"></Checkbox>
        `}),parameters:{controls:{},docs:{source:{transform:(a,o)=>{const{args:e}=o,n=c(e.dataSource);return["<Checkbox",`  themeColor="'${e.themeColor}'"`,`  :dataSource="${n}"`,`  :initValue="[${e.initValue}]"`,`  direction="'${e.direction}'"`,'  v-model="vModelData">',"</Checkbox>"].join(`
`).trim()}}}}},d={name:"主題色彩",args:{datasourcePrimary:[{label:"選項ㄧ",id:"option01",value:"option01",name:"primary"},{label:"選項二",id:"option02",value:"option02",name:"primary"},{label:"選項三",id:"option03",value:"option03",name:"primary"}],datasourceSecondary:[{label:"選項ㄧ",id:"option4",value:"option4",name:"secondary"},{label:"選項二",id:"option5",value:"option5",name:"secondary"},{label:"選項三",id:"option6",value:"option6",name:"secondary"}],datasourceTertiary:[{label:"選項ㄧ",id:"option7",value:"option7",name:"tertiary"},{label:"選項二",id:"option8",value:"option8",name:"tertiary"},{label:"選項三",id:"option9",value:"option9",name:"tertiary"}],datasourceSuccess:[{label:"選項ㄧ",id:"option10",value:"option10",name:"success"},{label:"選項二",id:"option11",value:"option11",name:"success"},{label:"選項三",id:"option12",value:"option12",name:"success"}],datasourceWarning:[{label:"選項ㄧ",id:"option13",value:"option13",name:"warning"},{label:"選項二",id:"option14",value:"option14",name:"warning"},{label:"選項三",id:"option15",value:"option15",name:"warning"}],datasourceError:[{label:"選項ㄧ",id:"option16",value:"option16",name:"error"},{label:"選項二",id:"option17",value:"option17",name:"error"},{label:"選項三",id:"option18",value:"option18",name:"error"}],datasourceInfo:[{label:"選項ㄧ",id:"option19",value:"option19",name:"info"},{label:"選項二",id:"option20",value:"option20",name:"info"},{label:"選項三",id:"option21",value:"option21",name:"info"}],initValue:["option01","option4","option7","option10","option13","option16","option19"],direction:"row",className:""},render:a=>({components:{Checkbox:m},setup(){const o=g([]);return{args:a,checkedCheckboxOptions:o}},template:`
            <div style="display: flex; flex-direction:column; gap: 16px;">
                <Checkbox
                    themeColor="primary"
                    :dataSource="args.datasourcePrimary"
                    :initValue="args.initValue"
                    :direction="args.direction"
                    v-model="checkedCheckboxOptions"></Checkbox>
                <Checkbox
                    themeColor="secondary"
                    :dataSource="args.datasourceSecondary"
                    :initValue="args.initValue"
                    :direction="args.direction"
                    v-model="checkedCheckboxOptions"></Checkbox>
                <Checkbox
                    themeColor="tertiary"
                    :dataSource="args.datasourceTertiary"
                    :initValue="args.initValue"
                    :direction="args.direction"
                    v-model="checkedCheckboxOptions"></Checkbox>

                <Checkbox
                    themeColor="success"
                    :dataSource="args.datasourceSuccess"
                    :initValue="args.initValue"
                    :direction="args.direction"
                    v-model="checkedCheckboxOptions"></Checkbox>

                <Checkbox
                    themeColor="warning"
                    :dataSource="args.datasourceWarning"
                    :initValue="args.initValue"
                    :direction="args.direction"
                    v-model="checkedCheckboxOptions"></Checkbox>

                <Checkbox
                    themeColor="error"
                    :dataSource="args.datasourceError"
                    :initValue="args.initValue"
                    :direction="args.direction"
                    v-model="checkedCheckboxOptions"></Checkbox>
                
                <Checkbox
                    themeColor="info"
                    :dataSource="args.datasourceInfo"
                    :initValue="args.initValue"
                    :direction="args.direction"
                    v-model="checkedCheckboxOptions"></Checkbox>
            </div>
        `}),parameters:{controls:{include:["label","id","name","themeColor","className","datasource"]},docs:{source:{transform:(a,o)=>{const{args:e}=o,n=c(e.datasourcePrimary),p=c(e.datasourceSecondary),u=c(e.datasourceTertiary),t=c(e.datasourceSuccess),r=c(e.datasourceWarning),i=c(e.datasourceError),k=c(e.datasourceInfo);return["<Checkbox",'  themeColor="primary"',`  :dataSource="${n}"`,`  :initValue="[${e.initValue[0]}]"`,`  direction="'${e.direction}'"`,'  v-model="vModelData">',"</Checkbox>","<Checkbox",'  themeColor="secondary"',`  :dataSource="${p}"`,`  :initValue="[${e.initValue[1]}]"`,`  direction="'${e.direction}'"`,'  v-model="vModelData">',"</Checkbox>","<Checkbox",'  themeColor="tertiary"',`  :dataSource="${u}"`,`  :initValue="[${e.initValue[2]}]"`,`  direction="'${e.direction}'"`,'  v-model="vModelData">',"</Checkbox>","<Checkbox",'  themeColor="success"',`  :dataSource="${t}"`,`  :initValue="[${e.initValue[3]}]"`,`  direction="'${e.direction}'"`,'  v-model="vModelData">',"<Checkbox",'  themeColor="warning"',`  :dataSource="${r}"`,`  :initValue="[${e.initValue[4]}]"`,`  direction="'${e.direction}'"`,'  v-model="vModelData">',"</Checkbox>","<Checkbox",'  themeColor="error"',`  :dataSource="${i}"`,`  :initValue="[${e.initValue[5]}]"`,`  direction="'${e.direction}'"`,'  v-model="vModelData">',"</Checkbox>","<Checkbox",'  themeColor="info"',`  :dataSource="${k}"`,`  :initValue="[${e.initValue[6]}]"`,`  direction="'${e.direction}'"`,'  v-model="vModelData">',"</Checkbox>"].join(`
`).trim()}}}}};var v,x,y;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`{
  name: "預設項目",
  args: {
    themeColor: "primary",
    dataSource: [{
      label: "選項ㄧ",
      id: "option1",
      value: "option1",
      name: "group1"
    }, {
      label: "選項二",
      id: "option2",
      value: "option2",
      name: "group1"
    }, {
      label: "選項三",
      id: "option3",
      value: "option3",
      name: "group1"
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
          return ['<Checkbox', \`  themeColor="'\${args.themeColor}'"\`, \`  :dataSource="\${dataSourceString}"\`, \`  :initValue="[\${args.initValue}]"\`, \`  direction="'\${args.direction}'"\`, '  v-model="vModelData">', '</Checkbox>'].join('\\n').trim();
        }
      }
    }
  }
}`,...(y=(x=s.parameters)==null?void 0:x.docs)==null?void 0:y.source}}};var S,V,f;d.parameters={...d.parameters,docs:{...(S=d.parameters)==null?void 0:S.docs,source:{originalSource:`{
  name: "主題色彩",
  args: {
    datasourcePrimary: [{
      label: "選項ㄧ",
      id: "option01",
      value: "option01",
      name: "primary"
    }, {
      label: "選項二",
      id: "option02",
      value: "option02",
      name: "primary"
    }, {
      label: "選項三",
      id: "option03",
      value: "option03",
      name: "primary"
    }],
    datasourceSecondary: [{
      label: "選項ㄧ",
      id: "option4",
      value: "option4",
      name: "secondary"
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
      name: "tertiary"
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
      name: "success"
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
      name: "warning"
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
      name: "error"
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
      name: "info"
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
                    v-model="checkedCheckboxOptions"></Checkbox>
                <Checkbox
                    themeColor="secondary"
                    :dataSource="args.datasourceSecondary"
                    :initValue="args.initValue"
                    :direction="args.direction"
                    v-model="checkedCheckboxOptions"></Checkbox>
                <Checkbox
                    themeColor="tertiary"
                    :dataSource="args.datasourceTertiary"
                    :initValue="args.initValue"
                    :direction="args.direction"
                    v-model="checkedCheckboxOptions"></Checkbox>

                <Checkbox
                    themeColor="success"
                    :dataSource="args.datasourceSuccess"
                    :initValue="args.initValue"
                    :direction="args.direction"
                    v-model="checkedCheckboxOptions"></Checkbox>

                <Checkbox
                    themeColor="warning"
                    :dataSource="args.datasourceWarning"
                    :initValue="args.initValue"
                    :direction="args.direction"
                    v-model="checkedCheckboxOptions"></Checkbox>

                <Checkbox
                    themeColor="error"
                    :dataSource="args.datasourceError"
                    :initValue="args.initValue"
                    :direction="args.direction"
                    v-model="checkedCheckboxOptions"></Checkbox>
                
                <Checkbox
                    themeColor="info"
                    :dataSource="args.datasourceInfo"
                    :initValue="args.initValue"
                    :direction="args.direction"
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
          return ['<Checkbox', \`  themeColor="primary"\`, \`  :dataSource="\${datasourcePrimary}"\`, \`  :initValue="[\${args.initValue[0]}]"\`, \`  direction="'\${args.direction}'"\`, '  v-model="vModelData">', '</Checkbox>', '<Checkbox', \`  themeColor="secondary"\`, \`  :dataSource="\${datasourceSecondary}"\`, \`  :initValue="[\${args.initValue[1]}]"\`, \`  direction="'\${args.direction}'"\`, '  v-model="vModelData">', '</Checkbox>', '<Checkbox', \`  themeColor="tertiary"\`, \`  :dataSource="\${datasourceTertiary}"\`, \`  :initValue="[\${args.initValue[2]}]"\`, \`  direction="'\${args.direction}'"\`, '  v-model="vModelData">', '</Checkbox>', '<Checkbox', \`  themeColor="success"\`, \`  :dataSource="\${datasourceSuccess}"\`, \`  :initValue="[\${args.initValue[3]}]"\`, \`  direction="'\${args.direction}'"\`, '  v-model="vModelData">', '<Checkbox', \`  themeColor="warning"\`, \`  :dataSource="\${datasourceWarning}"\`, \`  :initValue="[\${args.initValue[4]}]"\`, \`  direction="'\${args.direction}'"\`, '  v-model="vModelData">', '</Checkbox>', '<Checkbox', \`  themeColor="error"\`, \`  :dataSource="\${datasourceError}"\`, \`  :initValue="[\${args.initValue[5]}]"\`, \`  direction="'\${args.direction}'"\`, '  v-model="vModelData">', '</Checkbox>', '<Checkbox', \`  themeColor="info"\`, \`  :dataSource="\${datasourceInfo}"\`, \`  :initValue="[\${args.initValue[6]}]"\`, \`  direction="'\${args.direction}'"\`, '  v-model="vModelData">', '</Checkbox>'].join('\\n').trim();
        }
      }
    }
  }
}`,...(f=(V=d.parameters)==null?void 0:V.docs)==null?void 0:f.source}}};const L=["CheckboxMultiStory","CheckboxColorStory"];export{d as CheckboxColorStory,s as CheckboxMultiStory,L as __namedExportsOrder,z as default};

import{m as D,u as E,e as C,w,a as p,F as _,f as M,n as h,o as l,b,h as O,j as N,t as I}from"./vue.esm-bundler-C7FxdvdM.js";import{_ as T}from"./Icon-B_G9slvJ.js";import{_ as W}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./iframe-Bn-91BlT.js";import"../sb-preview/runtime.js";const A=["for"],P=["id","name","value","checked","onChange"],j={class:"checkbox-text"},$={__name:"Checkbox",props:D({themeColor:{type:String,default:"primary",validator:a=>["primary","secondary","tertiary","success","warning","error","info"].includes(a)},dataSource:{type:Array,default:()=>[]},direction:{type:String,default:"row",validator:a=>["row","column"].includes(a)},initValue:{type:Array,default:()=>[]},className:{type:String,default:""}},{modelValue:{},modelModifiers:{}}),emits:["update:modelValue"],setup(a){const o=E(a,"modelValue"),e=a,n=C([]);w(()=>e.initValue,u=>{const t=u;n.value=e.dataSource.map(r=>t.includes(r.value)),o.value=[...t]},{immediate:!0});const m=(u,t)=>{Array.isArray(o.value)?n.value[t]?o.value=o.value.filter(i=>i!==u.value):o.value.push(u.value):o.value=!n.value[t],n.value[t]=!n.value[t]};return(u,t)=>(l(),p("div",{class:h({"checkbox-container":!0,[`checkbox-container-${e.direction}`]:e.direction,[e.className]:!!e.className})},[(l(!0),p(_,null,M(e.dataSource,(r,i)=>(l(),p("label",{key:r.id,for:r.id,class:h({checkbox:!0})},[b("input",{class:"checkbox-input",type:"checkbox",id:r.id,name:r.name,value:r.value,checked:n.value[i],onChange:k=>m(r,i)},null,40,P),b("div",{class:h(["checkbox-icon",n.value[i]?`checkbox-checked-${e.themeColor}`:`checkbox-unchecked-${e.themeColor}`])},[n.value[i]?(l(),O(T,{key:0,name:"check",color:"#fff"})):N("",!0)],2),b("span",j,I(r.label),1)],8,A))),128))],2))}},g=W($,[["__scopeId","data-v-af280e23"]]);$.__docgenInfo={exportName:"default",displayName:"Checkbox",description:"",tags:{},props:[{name:"themeColor",type:{name:"string"},defaultValue:{func:!1,value:'"primary"'},values:["primary","secondary","tertiary","success","warning","error","info"]},{name:"dataSource",type:{name:"array"},defaultValue:{func:!1,value:"[]"}},{name:"direction",type:{name:"string"},defaultValue:{func:!1,value:'"row"'},values:["row","column"]},{name:"initValue",type:{name:"array"},defaultValue:{func:!1,value:"[]"}},{name:"className",type:{name:"string"},defaultValue:{func:!1,value:'""'}}],sourceFiles:["D:/98_測試/up/DED-WDS_VUE/libs/src/ui/element/Checkbox/Checkbox.vue"]};function c(a){return`[
    ${a.map(o=>`{
        label: '${o.label}',
           id: '${o.id}',
        value: '${o.value}',
        name: '${o.name}'
    }`).join(`,
    `)}
  ]`}const q={title:"Design System/Checkbox",component:g,tags:["autodocs"],argTypes:{themeColor:{description:"主題顏色",control:{type:"select"},options:["primary","secondary","tertiary","success","warning","error","info"],table:{type:{summary:"primary | secondary | tertiary | success | warning | error | info"}}},dataSource:{description:"資料來源",control:{type:"object"},table:{type:{summary:"{ label: string; id: string; value: string; name: string; }[]"}}},initValue:{description:"選中的項目",control:{type:"object"},table:{type:{summary:"string[]"}}},direction:{description:"排列方向",control:{type:"select"},options:["row","column"],table:{type:{summary:"row | column"}}},className:{description:"客製化樣式",control:{type:"text"}}},parameters:{docs:{title:"Checkbox",description:{component:"Checkbox 組件的呈現及說明。"}}}},s={name:"預設項目",args:{themeColor:"primary",dataSource:[{label:"選項ㄧ",id:"option1",value:"option1",name:"group1"},{label:"選項二",id:"option2",value:"option2",name:"group1"},{label:"選項三",id:"option3",value:"option3",name:"group1"}],direction:"row",initValue:["option1","option3"],className:""},render:a=>({components:{Checkbox:g},setup(){const o=C([]);return{args:a,checkedCheckboxOptions:o}},template:`
            <Checkbox
                :themeColor="args.themeColor"
                :dataSource="args.dataSource"
                :initValue="args.initValue"
                :direction="args.direction"
                v-model="checkedCheckboxOptions"></Checkbox>
        `}),parameters:{controls:{},docs:{source:{transform:(a,o)=>{const{args:e}=o,n=c(e.dataSource);return["<Checkbox",`  themeColor="'${e.themeColor}'"`,`  :dataSource="${n}"`,`  :initValue="[${e.initValue}]"`,`  direction="'${e.direction}'"`,'  v-model="vModelData">',"</Checkbox>"].join(`
`).trim()}}}}},d={name:"主題色彩",args:{datasourcePrimary:[{label:"選項ㄧ",id:"option01",value:"option01",name:"primary"},{label:"選項二",id:"option02",value:"option02",name:"primary"},{label:"選項三",id:"option03",value:"option03",name:"primary"}],datasourceSecondary:[{label:"選項ㄧ",id:"option4",value:"option4",name:"secondary"},{label:"選項二",id:"option5",value:"option5",name:"secondary"},{label:"選項三",id:"option6",value:"option6",name:"secondary"}],datasourceTertiary:[{label:"選項ㄧ",id:"option7",value:"option7",name:"tertiary"},{label:"選項二",id:"option8",value:"option8",name:"tertiary"},{label:"選項三",id:"option9",value:"option9",name:"tertiary"}],datasourceSuccess:[{label:"選項ㄧ",id:"option10",value:"option10",name:"success"},{label:"選項二",id:"option11",value:"option11",name:"success"},{label:"選項三",id:"option12",value:"option12",name:"success"}],datasourceWarning:[{label:"選項ㄧ",id:"option13",value:"option13",name:"warning"},{label:"選項二",id:"option14",value:"option14",name:"warning"},{label:"選項三",id:"option15",value:"option15",name:"warning"}],datasourceError:[{label:"選項ㄧ",id:"option16",value:"option16",name:"error"},{label:"選項二",id:"option17",value:"option17",name:"error"},{label:"選項三",id:"option18",value:"option18",name:"error"}],datasourceInfo:[{label:"選項ㄧ",id:"option19",value:"option19",name:"info"},{label:"選項二",id:"option20",value:"option20",name:"info"},{label:"選項三",id:"option21",value:"option21",name:"info"}],direction:"row",initValue:["option01","option4","option7","option10","option13","option16","option19"],className:""},render:a=>({components:{Checkbox:g},setup(){const o=C([]);return{args:a,checkedCheckboxOptions:o}},template:`
            <div style="display: flex; flex-direction:column; gap: 16px;">
                <Checkbox
                    themeColor="primary"
                    :dataSource="args.datasourcePrimary"
                    :direction="args.direction"
                    :initValue="args.initValue"
                    v-model="checkedCheckboxOptions"></Checkbox>
                <Checkbox
                    themeColor="secondary"
                    :dataSource="args.datasourceSecondary"
                    :direction="args.direction"
                    :initValue="args.initValue"
                    v-model="checkedCheckboxOptions"></Checkbox>
                <Checkbox
                    themeColor="tertiary"
                    :dataSource="args.datasourceTertiary"
                    :direction="args.direction"
                    :initValue="args.initValue"
                    v-model="checkedCheckboxOptions"></Checkbox>

                <Checkbox
                    themeColor="success"
                    :dataSource="args.datasourceSuccess"
                    :direction="args.direction"
                    :initValue="args.initValue"
                    v-model="checkedCheckboxOptions"></Checkbox>

                <Checkbox
                    themeColor="warning"
                    :dataSource="args.datasourceWarning"
                    :direction="args.direction"
                    :initValue="args.initValue"
                    v-model="checkedCheckboxOptions"></Checkbox>

                <Checkbox
                    themeColor="error"
                    :dataSource="args.datasourceError"
                    :direction="args.direction"
                    :initValue="args.initValue"
                    v-model="checkedCheckboxOptions"></Checkbox>
                <Checkbox
                    themeColor="info"
                    :dataSource="args.datasourceInfo"
                    :direction="args.direction"
                    :initValue="args.initValue"
                    v-model="checkedCheckboxOptions"></Checkbox>
            </div>
        `}),parameters:{controls:{include:["label","id","name","themeColor","className","datasource"]},docs:{source:{transform:(a,o)=>{const{args:e}=o,n=c(e.datasourcePrimary),m=c(e.datasourceSecondary),u=c(e.datasourceTertiary),t=c(e.datasourceSuccess),r=c(e.datasourceWarning),i=c(e.datasourceError),k=c(e.datasourceInfo);return["<Checkbox",'  themeColor="primary"',`  :dataSource="${n}"`,`  direction="'${e.direction}'"`,`  :initValue="[${e.initValue[0]}]"`,'  v-model="vModelData">',"</Checkbox>","<Checkbox",'  themeColor="secondary"',`  :dataSource="${m}"`,`  direction="'${e.direction}'"`,`  :initValue="[${e.initValue[1]}]"`,'  v-model="vModelData">',"</Checkbox>","<Checkbox",'  themeColor="tertiary"',`  :dataSource="${u}"`,`  direction="'${e.direction}'"`,`  :initValue="[${e.initValue[2]}]"`,'  v-model="vModelData">',"</Checkbox>","<Checkbox",'  themeColor="success"',`  :dataSource="${t}"`,`  direction="'${e.direction}'"`,`  :initValue="[${e.initValue[3]}]"`,'  v-model="vModelData">',"<Checkbox",'  themeColor="warning"',`  direction="'${e.direction}'"`,`  :initValue="[${e.initValue[4]}]"`,`  :dataSource="${r}"`,'  v-model="vModelData">',"</Checkbox>","<Checkbox",'  themeColor="error"',`  :dataSource="${i}"`,`  direction="'${e.direction}'"`,`  :initValue="[${e.initValue[5]}]"`,'  v-model="vModelData">',"</Checkbox>","<Checkbox",'  themeColor="info"',`  :dataSource="${k}"`,`  direction="'${e.direction}'"`,`  :initValue="[${e.initValue[6]}]"`,'  v-model="vModelData">',"</Checkbox>"].join(`
`).trim()}}}}};var v,y,x;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
    direction: "row",
    initValue: ["option1", "option3"],
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
}`,...(x=(y=s.parameters)==null?void 0:y.docs)==null?void 0:x.source}}};var S,V,f;d.parameters={...d.parameters,docs:{...(S=d.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
    direction: "row",
    initValue: ["option01", "option4", "option7", "option10", "option13", "option16", "option19"],
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
                    :direction="args.direction"
                    :initValue="args.initValue"
                    v-model="checkedCheckboxOptions"></Checkbox>
                <Checkbox
                    themeColor="secondary"
                    :dataSource="args.datasourceSecondary"
                    :direction="args.direction"
                    :initValue="args.initValue"
                    v-model="checkedCheckboxOptions"></Checkbox>
                <Checkbox
                    themeColor="tertiary"
                    :dataSource="args.datasourceTertiary"
                    :direction="args.direction"
                    :initValue="args.initValue"
                    v-model="checkedCheckboxOptions"></Checkbox>

                <Checkbox
                    themeColor="success"
                    :dataSource="args.datasourceSuccess"
                    :direction="args.direction"
                    :initValue="args.initValue"
                    v-model="checkedCheckboxOptions"></Checkbox>

                <Checkbox
                    themeColor="warning"
                    :dataSource="args.datasourceWarning"
                    :direction="args.direction"
                    :initValue="args.initValue"
                    v-model="checkedCheckboxOptions"></Checkbox>

                <Checkbox
                    themeColor="error"
                    :dataSource="args.datasourceError"
                    :direction="args.direction"
                    :initValue="args.initValue"
                    v-model="checkedCheckboxOptions"></Checkbox>
                <Checkbox
                    themeColor="info"
                    :dataSource="args.datasourceInfo"
                    :direction="args.direction"
                    :initValue="args.initValue"
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
          return ['<Checkbox', \`  themeColor="primary"\`, \`  :dataSource="\${datasourcePrimary}"\`, \`  direction="'\${args.direction}'"\`, \`  :initValue="[\${args.initValue[0]}]"\`, '  v-model="vModelData">', '</Checkbox>', '<Checkbox', \`  themeColor="secondary"\`, \`  :dataSource="\${datasourceSecondary}"\`, \`  direction="'\${args.direction}'"\`, \`  :initValue="[\${args.initValue[1]}]"\`, '  v-model="vModelData">', '</Checkbox>', '<Checkbox', \`  themeColor="tertiary"\`, \`  :dataSource="\${datasourceTertiary}"\`, \`  direction="'\${args.direction}'"\`, \`  :initValue="[\${args.initValue[2]}]"\`, '  v-model="vModelData">', '</Checkbox>', '<Checkbox', \`  themeColor="success"\`, \`  :dataSource="\${datasourceSuccess}"\`, \`  direction="'\${args.direction}'"\`, \`  :initValue="[\${args.initValue[3]}]"\`, '  v-model="vModelData">', '<Checkbox', \`  themeColor="warning"\`, \`  direction="'\${args.direction}'"\`, \`  :initValue="[\${args.initValue[4]}]"\`, \`  :dataSource="\${datasourceWarning}"\`, '  v-model="vModelData">', '</Checkbox>', '<Checkbox', \`  themeColor="error"\`, \`  :dataSource="\${datasourceError}"\`, \`  direction="'\${args.direction}'"\`, \`  :initValue="[\${args.initValue[5]}]"\`, '  v-model="vModelData">', '</Checkbox>', '<Checkbox', \`  themeColor="info"\`, \`  :dataSource="\${datasourceInfo}"\`, \`  direction="'\${args.direction}'"\`, \`  :initValue="[\${args.initValue[6]}]"\`, '  v-model="vModelData">', '</Checkbox>'].join('\\n').trim();
        }
      }
    }
  }
}`,...(f=(V=d.parameters)==null?void 0:V.docs)==null?void 0:f.source}}};const G=["CheckboxMultiStory","CheckboxColorStory"];export{d as CheckboxColorStory,s as CheckboxMultiStory,G as __namedExportsOrder,q as default};

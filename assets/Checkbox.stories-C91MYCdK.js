import{m as $,u as D,e as k,w as E,a as h,F as w,k as M,n as b,o as l,b as C,g as O,f as _,t as N}from"./vue.esm-bundler-jfoHxfC9.js";import{_ as I}from"./Icon-DakahK8X.js";import"./iframe-CGSdzTJx.js";import"../sb-preview/runtime.js";const T=["for"],W=["id","name","value","checked","onChange"],A={class:"checkbox-text"},m={__name:"Checkbox",props:$({themeColor:{type:String,default:"primary",validator:a=>["primary","secondary","tertiary","success","warning","error","info"].includes(a)},dataSource:{type:Array,default:()=>[]},initValue:{type:Array,default:()=>[]},direction:{type:String,default:"row",validator:a=>["row","column"].includes(a)},className:{type:String,default:""}},{modelValue:{},modelModifiers:{}}),emits:["update:modelValue"],setup(a){const o=D(a,"modelValue"),e=a,n=k([]);E(()=>e.initValue,u=>{const t=u;n.value=e.dataSource.map(r=>t.includes(r.value)),o.value=[...t]},{immediate:!0});const p=(u,t)=>{Array.isArray(o.value)?n.value[t]?o.value=o.value.filter(i=>i!==u.value):o.value.push(u.value):o.value=!n.value[t],n.value[t]=!n.value[t]};return(u,t)=>(l(),h("div",{class:b({"checkbox-container":!0,[`checkbox-container-${e.direction}`]:e.direction,[e.className]:!!e.className})},[(l(!0),h(w,null,M(e.dataSource,(r,i)=>(l(),h("label",{key:r.id,for:r.id,class:b({checkbox:!0})},[C("input",{class:"checkbox-input",type:"checkbox",id:r.id,name:r.name,value:r.value,checked:n.value[i],onChange:g=>p(r,i)},null,40,W),C("div",{class:b(["checkbox-icon",n.value[i]?`checkbox-checked-${e.themeColor}`:`checkbox-unchecked-${e.themeColor}`])},[n.value[i]?(l(),O(I,{key:0,name:"check",color:"#fff"})):_("",!0)],2),C("span",A,N(r.label),1)],8,T))),128))],2))}};m.__docgenInfo={exportName:"default",displayName:"Checkbox",description:"",tags:{},props:[{name:"themeColor",type:{name:"string"},defaultValue:{func:!1,value:"'primary'"},values:["primary","secondary","tertiary","success","warning","error","info"]},{name:"dataSource",type:{name:"array"},defaultValue:{func:!1,value:"[]"}},{name:"initValue",type:{name:"array"},defaultValue:{func:!1,value:"[]"}},{name:"direction",type:{name:"string"},defaultValue:{func:!1,value:"'row'"},values:["row","column"]},{name:"className",type:{name:"string"},defaultValue:{func:!1,value:"''"}}],sourceFiles:["D:/98_測試/up/DED-WDS_VUE/libs/src/ui/element/Checkbox/Checkbox.vue"]};function c(a){return`[
    ${a.map(o=>`{
        label: '${o.label}',
           id: '${o.id}',
        value: '${o.value}',
        name: '${o.name}'
    }`).join(`,
    `)}
  ]`}const z={title:"Design System/Checkbox*",component:m,tags:["autodocs"],argTypes:{themeColor:{description:"主題顏色",control:{type:"select"},options:["primary","secondary","tertiary","success","warning","error","info"],table:{type:{summary:"primary | secondary | tertiary | success | warning | error | info"}}},dataSource:{description:"資料來源",control:{type:"object"},table:{type:{summary:"{ label: string; id: string; value: string; name: string; }[]"}}},direction:{description:"排列方向",control:{type:"select"},options:["row","column"],table:{type:{summary:"row | column"}}},initValue:{description:"選中的項目",control:{type:"object"},table:{type:{summary:"string[]"}}},className:{description:"客製化樣式",control:{type:"text"}},isChecked:{description:"是否選擇",control:{type:"boolean"}},isMultiple:{description:"是否複選框",control:{type:"boolean"}}},parameters:{docs:{title:"Checkbox",description:{component:"Checkbox 組件的呈現及說明。"}}}},s={name:"預設項目",args:{themeColor:"primary",dataSource:[{label:"選項ㄧ",id:"option1",value:"option1",name:"group1"},{label:"選項二",id:"option2",value:"option2",name:"group1"},{label:"選項三",id:"option3",value:"option3",name:"group1"}],initValue:["option1","option3"],direction:"row",className:""},render:a=>({components:{Checkbox:m},setup(){const o=k([]);return{args:a,checkedCheckboxOptions:o}},template:`
            <Checkbox
                :themeColor="args.themeColor"
                :dataSource="args.dataSource"
                :direction="args.direction"
                :initValue="args.initValue"
                v-model="checkedCheckboxOptions"></Checkbox>
        `}),parameters:{controls:{},docs:{source:{transform:(a,o)=>{const{args:e}=o,n=c(e.dataSource);return["<Checkbox",`  themeColor="'${e.themeColor}'"`,`  direction="'${e.direction}'"`,`  :initValue="[${e.initValue}]"`,`  :dataSource="${n}"`,'  v-model="vModelData">',"</Checkbox>"].join(`
`).trim()}}}}},d={name:"主題色彩",args:{datasourcePrimary:[{label:"選項ㄧ",id:"option01",value:"option01",name:"primary"},{label:"選項二",id:"option02",value:"option02",name:"primary"},{label:"選項三",id:"option03",value:"option03",name:"primary"}],datasourceSecondary:[{label:"選項ㄧ",id:"option4",value:"option4",name:"secondary"},{label:"選項二",id:"option5",value:"option5",name:"secondary"},{label:"選項三",id:"option6",value:"option6",name:"secondary"}],datasourceTertiary:[{label:"選項ㄧ",id:"option7",value:"option7",name:"tertiary"},{label:"選項二",id:"option8",value:"option8",name:"tertiary"},{label:"選項三",id:"option9",value:"option9",name:"tertiary"}],datasourceSuccess:[{label:"選項ㄧ",id:"option10",value:"option10",name:"success"},{label:"選項二",id:"option11",value:"option11",name:"success"},{label:"選項三",id:"option12",value:"option12",name:"success"}],datasourceWarning:[{label:"選項ㄧ",id:"option13",value:"option13",name:"warning"},{label:"選項二",id:"option14",value:"option14",name:"warning"},{label:"選項三",id:"option15",value:"option15",name:"warning"}],datasourceError:[{label:"選項ㄧ",id:"option16",value:"option16",name:"error"},{label:"選項二",id:"option17",value:"option17",name:"error"},{label:"選項三",id:"option18",value:"option18",name:"error"}],datasourceInfo:[{label:"選項ㄧ",id:"option19",value:"option19",name:"info"},{label:"選項二",id:"option20",value:"option20",name:"info"},{label:"選項三",id:"option21",value:"option21",name:"info"}],initValue:["option01","option4","option7","option10","option13","option16","option19"],direction:"row",className:""},render:a=>({components:{Checkbox:m},setup(){const o=k([]);return{args:a,checkedCheckboxOptions:o}},template:`
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
        `}),parameters:{controls:{include:["label","id","name","themeColor","className","datasource"]},docs:{source:{transform:(a,o)=>{const{args:e}=o,n=c(e.datasourcePrimary),p=c(e.datasourceSecondary),u=c(e.datasourceTertiary),t=c(e.datasourceSuccess),r=c(e.datasourceWarning),i=c(e.datasourceError),g=c(e.datasourceInfo);return["<Checkbox",'  themeColor="primary"',`  direction="'${e.direction}'"`,`  :initValue="[${e.initValue[0]}]"`,`  :dataSource="${n}"`,'  v-model="vModelData">',"</Checkbox>","<Checkbox",'  themeColor="secondary"',`  direction="'${e.direction}'"`,`  :initValue="[${e.initValue[1]}]"`,`  :dataSource="${p}"`,'  v-model="vModelData">',"</Checkbox>","<Checkbox",'  themeColor="tertiary"',`  direction="'${e.direction}'"`,`  :initValue="[${e.initValue[2]}]"`,`  :dataSource="${u}"`,'  v-model="vModelData">',"</Checkbox>","<Checkbox",'  themeColor="success"',`  direction="'${e.direction}'"`,`  :initValue="[${e.initValue[3]}]"`,`  :dataSource="${t}"`,'  v-model="vModelData">',"<Checkbox",'  themeColor="warning"',`  direction="'${e.direction}'"`,`  :initValue="[${e.initValue[4]}]"`,`  :dataSource="${r}"`,'  v-model="vModelData">',"</Checkbox>","<Checkbox",'  themeColor="error"',`  direction="'${e.direction}'"`,`  :initValue="[${e.initValue[5]}]"`,`  :dataSource="${i}"`,'  v-model="vModelData">',"</Checkbox>","<Checkbox",'  themeColor="info"',`  direction="'${e.direction}'"`,`  :initValue="[${e.initValue[6]}]"`,`  :dataSource="${g}"`,'  v-model="vModelData">',"</Checkbox>"].join(`
`).trim()}}}}};var v,y,x;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`{
  name: '預設項目',
  args: {
    themeColor: 'primary',
    dataSource: [{
      label: '選項ㄧ',
      id: 'option1',
      value: 'option1',
      name: 'group1'
    }, {
      label: '選項二',
      id: 'option2',
      value: 'option2',
      name: 'group1'
    }, {
      label: '選項三',
      id: 'option3',
      value: 'option3',
      name: 'group1'
    }],
    initValue: ['option1', 'option3'],
    direction: 'row',
    className: ''
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
                :direction="args.direction"
                :initValue="args.initValue"
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
          return ['<Checkbox', \`  themeColor="'\${args.themeColor}'"\`, \`  direction="'\${args.direction}'"\`, \`  :initValue="[\${args.initValue}]"\`, \`  :dataSource="\${dataSourceString}"\`, '  v-model="vModelData">', '</Checkbox>'].join('\\n').trim();
        }
      }
    }
  }
}`,...(x=(y=s.parameters)==null?void 0:y.docs)==null?void 0:x.source}}};var S,V,f;d.parameters={...d.parameters,docs:{...(S=d.parameters)==null?void 0:S.docs,source:{originalSource:`{
  name: '主題色彩',
  args: {
    datasourcePrimary: [{
      label: '選項ㄧ',
      id: 'option01',
      value: 'option01',
      name: 'primary'
    }, {
      label: '選項二',
      id: 'option02',
      value: 'option02',
      name: 'primary'
    }, {
      label: '選項三',
      id: 'option03',
      value: 'option03',
      name: 'primary'
    }],
    datasourceSecondary: [{
      label: '選項ㄧ',
      id: 'option4',
      value: 'option4',
      name: 'secondary'
    }, {
      label: '選項二',
      id: 'option5',
      value: 'option5',
      name: 'secondary'
    }, {
      label: '選項三',
      id: 'option6',
      value: 'option6',
      name: 'secondary'
    }],
    datasourceTertiary: [{
      label: '選項ㄧ',
      id: 'option7',
      value: 'option7',
      name: 'tertiary'
    }, {
      label: '選項二',
      id: 'option8',
      value: 'option8',
      name: 'tertiary'
    }, {
      label: '選項三',
      id: 'option9',
      value: 'option9',
      name: 'tertiary'
    }],
    datasourceSuccess: [{
      label: '選項ㄧ',
      id: 'option10',
      value: 'option10',
      name: 'success'
    }, {
      label: '選項二',
      id: 'option11',
      value: 'option11',
      name: 'success'
    }, {
      label: '選項三',
      id: 'option12',
      value: 'option12',
      name: 'success'
    }],
    datasourceWarning: [{
      label: '選項ㄧ',
      id: 'option13',
      value: 'option13',
      name: 'warning'
    }, {
      label: '選項二',
      id: 'option14',
      value: 'option14',
      name: 'warning'
    }, {
      label: '選項三',
      id: 'option15',
      value: 'option15',
      name: 'warning'
    }],
    datasourceError: [{
      label: '選項ㄧ',
      id: 'option16',
      value: 'option16',
      name: 'error'
    }, {
      label: '選項二',
      id: 'option17',
      value: 'option17',
      name: 'error'
    }, {
      label: '選項三',
      id: 'option18',
      value: 'option18',
      name: 'error'
    }],
    datasourceInfo: [{
      label: '選項ㄧ',
      id: 'option19',
      value: 'option19',
      name: 'info'
    }, {
      label: '選項二',
      id: 'option20',
      value: 'option20',
      name: 'info'
    }, {
      label: '選項三',
      id: 'option21',
      value: 'option21',
      name: 'info'
    }],
    initValue: ['option01', 'option4', 'option7', 'option10', 'option13', 'option16', 'option19'],
    direction: 'row',
    className: ''
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
          return ['<Checkbox', \`  themeColor="primary"\`, \`  direction="'\${args.direction}'"\`, \`  :initValue="[\${args.initValue[0]}]"\`, \`  :dataSource="\${datasourcePrimary}"\`, '  v-model="vModelData">', '</Checkbox>', '<Checkbox', \`  themeColor="secondary"\`, \`  direction="'\${args.direction}'"\`, \`  :initValue="[\${args.initValue[1]}]"\`, \`  :dataSource="\${datasourceSecondary}"\`, '  v-model="vModelData">', '</Checkbox>', '<Checkbox', \`  themeColor="tertiary"\`, \`  direction="'\${args.direction}'"\`, \`  :initValue="[\${args.initValue[2]}]"\`, \`  :dataSource="\${datasourceTertiary}"\`, '  v-model="vModelData">', '</Checkbox>', '<Checkbox', \`  themeColor="success"\`, \`  direction="'\${args.direction}'"\`, \`  :initValue="[\${args.initValue[3]}]"\`, \`  :dataSource="\${datasourceSuccess}"\`, '  v-model="vModelData">', '<Checkbox', \`  themeColor="warning"\`, \`  direction="'\${args.direction}'"\`, \`  :initValue="[\${args.initValue[4]}]"\`, \`  :dataSource="\${datasourceWarning}"\`, '  v-model="vModelData">', '</Checkbox>', '<Checkbox', \`  themeColor="error"\`, \`  direction="'\${args.direction}'"\`, \`  :initValue="[\${args.initValue[5]}]"\`, \`  :dataSource="\${datasourceError}"\`, '  v-model="vModelData">', '</Checkbox>', '<Checkbox', \`  themeColor="info"\`, \`  direction="'\${args.direction}'"\`, \`  :initValue="[\${args.initValue[6]}]"\`, \`  :dataSource="\${datasourceInfo}"\`, '  v-model="vModelData">', '</Checkbox>'].join('\\n').trim();
        }
      }
    }
  }
}`,...(f=(V=d.parameters)==null?void 0:V.docs)==null?void 0:f.source}}};const L=["CheckboxMultiStory","CheckboxColorStory"];export{d as CheckboxColorStory,s as CheckboxMultiStory,L as __namedExportsOrder,z as default};

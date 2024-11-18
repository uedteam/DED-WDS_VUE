import{m as f,u as $,e as k,w as D,a as h,F as M,k as w,n as b,o as s,b as C,g as _,f as E,t as N}from"./vue.esm-bundler-ChZ6yN_a.js";import{_ as j}from"./Icon-DaRty0JN.js";import"./iframe-ARkq-hpE.js";import"../sb-preview/runtime.js";const W=["for"],I=["id","name","value","checked","onChange"],T={class:"checkbox-text"},p={__name:"Checkbox",props:f({themeColor:{type:String,default:"primary",validator:a=>["primary","secondary","tertiary","success","warning","error","info"].includes(a)},dataSource:{type:Object,required:!0},initValue:{type:Object,required:!0},direction:{type:String,default:"row",validator:a=>["row","column"].includes(a)},className:{type:String,default:""}},{modelValue:{},modelModifiers:{}}),emits:["update:modelValue"],setup(a){const o=$(a,"modelValue"),e=a,n=k([]);D(()=>e.initValue,l=>{const r=l;n.value=e.dataSource.map(t=>r.includes(t.value)),o.value=[...r]},{immediate:!0});const m=(l,r)=>{Array.isArray(o.value)?n.value[r]?o.value=o.value.filter(i=>i!==l.value):o.value.push(l.value):o.value=!n.value[r],n.value[r]=!n.value[r]};return(l,r)=>(s(),h("div",{class:b({"checkbox-container":!0,[`checkbox-container-${e.direction}`]:e.direction,[e.className]:!!e.className})},[(s(!0),h(M,null,w(e.dataSource,(t,i)=>(s(),h("label",{key:t.id,for:t.id,class:b({checkbox:!0})},[C("input",{class:"checkbox-input",type:"checkbox",id:t.id,name:t.name,value:t.value,checked:n.value[i],onChange:v=>m(t,i)},null,40,I),C("div",{class:b(["checkbox-icon",n.value[i]?`checkbox-checked-${e.themeColor}`:`checkbox-unchecked-${e.themeColor}`])},[n.value[i]?(s(),_(j,{key:0,name:"check",color:"#fff"})):E("",!0)],2),C("span",T,N(t.label),1)],8,W))),128))],2))}};p.__docgenInfo={exportName:"default",displayName:"Checkbox",description:"",tags:{},props:[{name:"themeColor",type:{name:"string"},defaultValue:{func:!1,value:'"primary"'},values:["primary","secondary","tertiary","success","warning","error","info"]},{name:"dataSource",type:{name:"object"},required:!0},{name:"initValue",type:{name:"object"},required:!0},{name:"direction",type:{name:"string"},defaultValue:{func:!1,value:'"row"'},values:["row","column"]},{name:"className",type:{name:"string"},defaultValue:{func:!1,value:'""'}}],sourceFiles:["/Users/auouser/Desktop/Work_Space/DED-WDS_VUE/libs/src/ui/element/Checkbox/Checkbox.vue"]};function c(a){return`[
    ${a.map(o=>`{
        label: '${o.label}',
        value: '${o.value}',
    }`).join(`,
    `)}
  ]`}const q={title:"Design System/Checkbox",component:p,tags:["autodocs"],argTypes:{themeColor:{description:"主題顏色",control:{type:"select"},options:["primary","secondary","tertiary","success","warning","error","info"],table:{type:{summary:"primary | secondary | tertiary | success | warning | error | info"}}},dataSource:{description:"資料來源",control:{type:"object"},table:{type:{summary:"{ label: string; value: string; }[]"}}},initValue:{description:"選中的項目",control:{type:"object"},table:{type:{summary:"string[]"}}},direction:{description:"排列方向",control:{type:"select"},options:["row","column"],table:{type:{summary:"row | column"}}},className:{description:"客製化樣式",control:{type:"text"}}},parameters:{docs:{title:"Checkbox",description:{component:"Checkbox 組件的呈現及說明。"}}}},u={name:"預設項目",args:{themeColor:"primary",dataSource:[{label:"Option1",value:"option1"},{label:"Option2",value:"option2"},{label:"Option3",value:"option3"}],initValue:["option1","option3"],direction:"row",className:""},render:a=>({components:{Checkbox:p},setup(){const o=k([]);return{args:a,checkedCheckboxOptions:o}},template:`
            <Checkbox
                :themeColor="args.themeColor"
                :dataSource="args.dataSource"
                :initValue="args.initValue"
                :direction="args.direction"
                v-model="checkedCheckboxOptions"></Checkbox>
        `}),parameters:{controls:{},docs:{source:{transform:(a,o)=>{const{args:e}=o,n=c(e.dataSource);return["<Checkbox",`  themeColor="${e.themeColor}"`,`  :dataSource="${n}"`,`  :initValue="[${e.initValue}]"`,`  direction="${e.direction}"`,'  v-model="vModelData">',"</Checkbox>"].join(`
`).trim()}}}}},d={name:"主題色彩",args:{datasourcePrimary:[{label:"Option1",value:"option01"},{label:"Option2",value:"option02"},{label:"Option3",value:"option03"}],datasourceSecondary:[{label:"Option1",value:"option4"},{label:"Option2",value:"option5"},{label:"Option3",value:"option6"}],datasourceTertiary:[{label:"Option1",value:"option7"},{label:"Option2",value:"option8"},{label:"Option3",value:"option9"}],datasourceSuccess:[{label:"Option1",value:"option10"},{label:"Option2",value:"option11"},{label:"Option3",value:"option12"}],datasourceWarning:[{label:"Option1",value:"option13"},{label:"Option2",value:"option14"},{label:"Option3",value:"option15"}],datasourceError:[{label:"Option1",value:"option16"},{label:"Option2",value:"option17"},{label:"Option3",value:"option18"}],datasourceInfo:[{label:"Option1",value:"option19"},{label:"Option2",value:"option20"},{label:"Option3",value:"option21"}],initValue:["option01","option4","option7","option10","option13","option16","option19"],direction:"row",className:""},render:a=>({components:{Checkbox:p},setup(){const o=k([]);return{args:a,checkedCheckboxOptions:o}},template:`
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
        `}),parameters:{controls:{include:["label","id","name","themeColor","className","datasource"]},docs:{source:{transform:(a,o)=>{const{args:e}=o,n=c(e.datasourcePrimary),m=c(e.datasourceSecondary),l=c(e.datasourceTertiary),r=c(e.datasourceSuccess),t=c(e.datasourceWarning),i=c(e.datasourceError),v=c(e.datasourceInfo);return["<Checkbox",'  themeColor="primary"',`  :dataSource="${n}"`,`  :initValue="[${e.initValue[0]}]"`,`  direction="${e.direction}"`,'  v-model="vModelData">',"</Checkbox>","<Checkbox",'  themeColor="secondary"',`  :dataSource="${m}"`,`  :initValue="[${e.initValue[1]}]"`,`  direction="${e.direction}"`,'  v-model="vModelData">',"</Checkbox>","<Checkbox",'  themeColor="tertiary"',`  :dataSource="${l}"`,`  :initValue="[${e.initValue[2]}]"`,`  direction="${e.direction}"`,'  v-model="vModelData">',"</Checkbox>","<Checkbox",'  themeColor="success"',`  :dataSource="${r}"`,`  :initValue="[${e.initValue[3]}]"`,`  direction="${e.direction}"`,'  v-model="vModelData">',"<Checkbox",'  themeColor="warning"',`  :dataSource="${t}"`,`  :initValue="[${e.initValue[4]}]"`,`  direction="${e.direction}"`,'  v-model="vModelData">',"</Checkbox>","<Checkbox",'  themeColor="error"',`  :dataSource="${i}"`,`  :initValue="[${e.initValue[5]}]"`,`  direction="${e.direction}"`,'  v-model="vModelData">',"</Checkbox>","<Checkbox",'  themeColor="info"',`  :dataSource="${v}"`,`  :initValue="[${e.initValue[6]}]"`,`  direction="${e.direction}"`,'  v-model="vModelData">',"</Checkbox>"].join(`
`).trim()}}}}};var g,x,y;u.parameters={...u.parameters,docs:{...(g=u.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
          return ['<Checkbox', \`  themeColor="\${args.themeColor}"\`, \`  :dataSource="\${dataSourceString}"\`, \`  :initValue="[\${args.initValue}]"\`, \`  direction="\${args.direction}"\`, '  v-model="vModelData">', '</Checkbox>'].join('\\n').trim();
        }
      }
    }
  }
}`,...(y=(x=u.parameters)==null?void 0:x.docs)==null?void 0:y.source}}};var S,V,O;d.parameters={...d.parameters,docs:{...(S=d.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
          return ['<Checkbox', \`  themeColor="primary"\`, \`  :dataSource="\${datasourcePrimary}"\`, \`  :initValue="[\${args.initValue[0]}]"\`, \`  direction="\${args.direction}"\`, '  v-model="vModelData">', '</Checkbox>', '<Checkbox', \`  themeColor="secondary"\`, \`  :dataSource="\${datasourceSecondary}"\`, \`  :initValue="[\${args.initValue[1]}]"\`, \`  direction="\${args.direction}"\`, '  v-model="vModelData">', '</Checkbox>', '<Checkbox', \`  themeColor="tertiary"\`, \`  :dataSource="\${datasourceTertiary}"\`, \`  :initValue="[\${args.initValue[2]}]"\`, \`  direction="\${args.direction}"\`, '  v-model="vModelData">', '</Checkbox>', '<Checkbox', \`  themeColor="success"\`, \`  :dataSource="\${datasourceSuccess}"\`, \`  :initValue="[\${args.initValue[3]}]"\`, \`  direction="\${args.direction}"\`, '  v-model="vModelData">', '<Checkbox', \`  themeColor="warning"\`, \`  :dataSource="\${datasourceWarning}"\`, \`  :initValue="[\${args.initValue[4]}]"\`, \`  direction="\${args.direction}"\`, '  v-model="vModelData">', '</Checkbox>', '<Checkbox', \`  themeColor="error"\`, \`  :dataSource="\${datasourceError}"\`, \`  :initValue="[\${args.initValue[5]}]"\`, \`  direction="\${args.direction}"\`, '  v-model="vModelData">', '</Checkbox>', '<Checkbox', \`  themeColor="info"\`, \`  :dataSource="\${datasourceInfo}"\`, \`  :initValue="[\${args.initValue[6]}]"\`, \`  direction="\${args.direction}"\`, '  v-model="vModelData">', '</Checkbox>'].join('\\n').trim();
        }
      }
    }
  }
}`,...(O=(V=d.parameters)==null?void 0:V.docs)==null?void 0:O.source}}};const U=["CheckboxMultiStory","CheckboxColorStory"];export{d as CheckboxColorStory,u as CheckboxMultiStory,U as __namedExportsOrder,q as default};

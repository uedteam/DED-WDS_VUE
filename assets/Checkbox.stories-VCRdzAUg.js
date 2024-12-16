import{m as M,u as w,f as C,w as E,j as I,c as k,F as j,B as T,n as d,o as m,d as v,C as W,b as A,t as P}from"./vue.esm-bundler-g0-RGFhA.js";import{_ as B}from"./Icon-CSsJY_hV.js";import"./iframe-BTfSE7oU.js";import"../sb-preview/runtime.js";const F=["for"],q=["id","name","value","checked","onChange"],u={__name:"Checkbox",props:M({themeColor:{type:String,default:"primary",validator:a=>["primary","secondary","neutral","info","success","warning","error"].includes(a)},dataSource:{type:Array,required:!0},initValue:{type:Array,required:!0},direction:{type:String,default:"row",validator:a=>["row","column"].includes(a)},className:{type:String,default:""}},{modelValue:{default:[]},modelModifiers:{}}),emits:["update:modelValue"],setup(a){const o=w(a,"modelValue"),e=a,i=s=>`checkbox-${s}`,t=C(e.dataSource.map(s=>e.initValue.includes(s.value)));E(o,s=>{t.value=e.dataSource.map(l=>s.includes(l.value))},{immediate:!0}),I(()=>{o.value=e.initValue});const g=(s,l)=>{t.value[l]=!t.value[l],t.value[l]?o.value=[...o.value,s.value]:o.value=o.value.filter(n=>n!==s.value)};return(s,l)=>(m(),k("div",{class:d({"ded-checkbox-container":!0,[`ded-checkbox-container-${a.direction}`]:a.direction,[a.className]:!!a.className})},[(m(!0),k(j,null,T(a.dataSource,(n,c)=>(m(),k("label",{key:n.value,for:i(n.value),class:d(["ded-checkbox",n.isDisabled?"ded-checkbox-input-disabled":""])},[v("input",{class:"ded-checkbox-input",type:"checkbox",id:i(n.value),name:n.name,value:n.value,checked:t.value[c],onChange:_=>g(n,c)},null,40,q),v("div",{class:d(["ded-checkbox-icon",n.isDisabled?"ded-checkbox-icon-disabled":"",t.value[c]?`ded-checkbox-checked-${a.themeColor}`:`ded-checkbox-unchecked-${a.themeColor}`])},[t.value[c]?(m(),W(B,{key:0,name:"check"})):A("",!0)],2),v("span",{class:d(["ded-checkbox-text",n.isDisabled?"ded-checkbox-text-disabled":""])},P(n.label),3)],10,F))),128))],2))}};u.__docgenInfo={exportName:"default",displayName:"Checkbox",description:"",tags:{},props:[{name:"themeColor",type:{name:"string"},defaultValue:{func:!1,value:'"primary"'},values:["primary","secondary","neutral","info","success","warning","error"]},{name:"dataSource",type:{name:"array"},required:!0},{name:"initValue",type:{name:"array"},required:!0},{name:"direction",type:{name:"string"},defaultValue:{func:!1,value:'"row"'},values:["row","column"]},{name:"className",type:{name:"string"},defaultValue:{func:!1,value:'""'}}],sourceFiles:["D:/98_測試/up/DED-WDS_VUE/libs/src/ui/element/Checkbox/Checkbox.vue"]};function r(a){return`[
    ${a.map(o=>`{
        label: '${o.label}',
        value: '${o.value}',
        isDisabled: '${o.isDisabled}'
    }`).join(`,
    `)}
  ]`}const H={title:"Component/Checkbox",component:u,tags:["autodocs"],argTypes:{themeColor:{description:"主題顏色",control:{type:"select"},options:["primary","secondary","neutral","info","success","warning","error"],table:{type:{summary:"primary | secondary | tertiary | success | warning | error | info"}}},dataSource:{description:"資料來源",control:{type:"object"},table:{type:{summary:"{ label: string; value: string; }[]"}}},initValue:{description:"選中的項目",control:{type:"object"},table:{type:{summary:"string[]"}}},direction:{description:"排列方向",control:{type:"select"},options:["row","column"],table:{type:{summary:"row | column"}}},className:{description:"客製化樣式",control:{type:"text"}}},parameters:{docs:{title:"Checkbox",description:{component:"Checkbox 組件的呈現及說明。"}}}},b={name:"預設項目",args:{themeColor:"primary",dataSource:[{label:"Option1",value:"option1",isDisabled:!1},{label:"Option2",value:"option2",isDisabled:!1},{label:"Option3",value:"option3",isDisabled:!0}],initValue:["option1","option3"],direction:"row",className:""},render:a=>({components:{Checkbox:u},setup(){const o=C([]);return{args:a,checkedCheckboxOptions:o}},template:`
            <Checkbox
                :themeColor="args.themeColor"
                :dataSource="args.dataSource"
                :initValue="args.initValue"
                :direction="args.direction"
                :className="args.className"
            ></Checkbox>
        `}),parameters:{controls:{},docs:{source:{transform:(a,o)=>{const{args:e}=o,i=r(e.dataSource);return["<Checkbox",`  themeColor="${e.themeColor}"`,`  :dataSource="${i}"`,`  :initValue="[${e.initValue}]"`,`  direction="${e.direction}"`,`  className="${e.className}"`,'  v-model="vModelData">',"</Checkbox>"].join(`
`).trim()}}}}},p={name:"排列方向",args:{themeColor:"primary",dataSource:[{label:"Option1",value:"option1",isDisabled:!1},{label:"Option2",value:"option2",isDisabled:!1},{label:"Option3",value:"option3",isDisabled:!1}],initValue:["option1","option3"],direction:"row",className:""},render:a=>({components:{Checkbox:u},setup(){const o=C([]);return{args:a,checkedCheckboxOptions:o}},template:`
            <Checkbox
                :themeColor="args.themeColor"
                :dataSource="args.dataSource"
                :initValue="args.initValue"
                direction="column"
                :className="args.className"
            ></Checkbox>
        `}),parameters:{controls:{},docs:{source:{transform:(a,o)=>{const{args:e}=o,i=r(e.dataSource);return["<Checkbox",`  themeColor="${e.themeColor}"`,`  :dataSource="${i}"`,`  :initValue="[${e.initValue}]"`,'  direction="column"',`  className="${e.className}"`,'  v-model="vModelData">',"</Checkbox>"].join(`
`).trim()}}}}},h={name:"主題色彩",args:{datasourcePrimary:[{label:"Option1",value:"option01",isDisabled:!1},{label:"Option2",value:"option02",isDisabled:!1},{label:"Option3",value:"option03",isDisabled:!1}],datasourceSecondary:[{label:"Option1",value:"option4",isDisabled:!1},{label:"Option2",value:"option5",isDisabled:!1},{label:"Option3",value:"option6",isDisabled:!1}],datasourceTertiary:[{label:"Option1",value:"option7",isDisabled:!1},{label:"Option2",value:"option8",isDisabled:!1},{label:"Option3",value:"option9",isDisabled:!1}],datasourceSuccess:[{label:"Option1",value:"option10",isDisabled:!1},{label:"Option2",value:"option11",isDisabled:!1},{label:"Option3",value:"option12",isDisabled:!1}],datasourceWarning:[{label:"Option1",value:"option13",isDisabled:!1},{label:"Option2",value:"option14",isDisabled:!1},{label:"Option3",value:"option15",isDisabled:!1}],datasourceError:[{label:"Option1",value:"option16",isDisabled:!1},{label:"Option2",value:"option17",isDisabled:!1},{label:"Option3",value:"option18",isDisabled:!1}],datasourceInfo:[{label:"Option1",value:"option19",isDisabled:!1},{label:"Option2",value:"option20",isDisabled:!1},{label:"Option3",value:"option21",isDisabled:!1}],initValue:["option01","option4","option7","option10","option13","option16","option19"],direction:"row",className:""},render:a=>({components:{Checkbox:u},setup(){const o=C([]);return{args:a,checkedCheckboxOptions:o}},template:`
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
                    themeColor="neutral"
                    :dataSource="args.datasourceTertiary"
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
            </div>
        `}),parameters:{controls:{include:["label","id","name","themeColor","className","datasource"]},docs:{source:{transform:(a,o)=>{const{args:e}=o,i=r(e.datasourcePrimary),t=r(e.datasourceSecondary),g=r(e.datasourceTertiary),s=r(e.datasourceSuccess),l=r(e.datasourceWarning),n=r(e.datasourceError),c=r(e.datasourceInfo);return["<Checkbox",'  themeColor="primary"',`  :dataSource="${i}"`,`  :initValue="[${e.initValue[0]}]"`,`  direction="${e.direction}"`,`  className="${e.className}"`,'  v-model="vModelData">',"</Checkbox>","<Checkbox",'  themeColor="secondary"',`  :dataSource="${t}"`,`  :initValue="[${e.initValue[1]}]"`,`  direction="${e.direction}"`,`  className="${e.className}"`,'  v-model="vModelData">',"</Checkbox>","<Checkbox",'  themeColor="neutral"',`  :dataSource="${g}"`,`  :initValue="[${e.initValue[2]}]"`,`  direction="${e.direction}"`,`  className="${e.className}"`,'  v-model="vModelData">',"</Checkbox>","<Checkbox",'  themeColor="info"',`  :dataSource="${c}"`,`  :initValue="[${e.initValue[6]}]"`,`  direction="${e.direction}"`,`  className="${e.className}"`,'  v-model="vModelData">',"</Checkbox>","<Checkbox",'  themeColor="success"',`  :dataSource="${s}"`,`  :initValue="[${e.initValue[3]}]"`,`  direction="${e.direction}"`,`  className="${e.className}"`,'  v-model="vModelData">',"<Checkbox",'  themeColor="warning"',`  :dataSource="${l}"`,`  :initValue="[${e.initValue[4]}]"`,`  direction="${e.direction}"`,`  className="${e.className}"`,'  v-model="vModelData">',"</Checkbox>","<Checkbox",'  themeColor="error"',`  :dataSource="${n}"`,`  :initValue="[${e.initValue[5]}]"`,`  direction="${e.direction}"`,`  className="${e.className}"`,'  v-model="vModelData">',"</Checkbox>"].join(`
`).trim()}}}}};var x,f,S;b.parameters={...b.parameters,docs:{...(x=b.parameters)==null?void 0:x.docs,source:{originalSource:`{
  name: "預設項目",
  args: {
    themeColor: "primary",
    dataSource: [{
      "label": "Option1",
      "value": "option1",
      "isDisabled": false
    }, {
      "label": "Option2",
      "value": "option2",
      "isDisabled": false
    }, {
      "label": "Option3",
      "value": "option3",
      "isDisabled": true
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
            ></Checkbox>
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
}`,...(S=(f=b.parameters)==null?void 0:f.docs)==null?void 0:S.source}}};var D,y,V;p.parameters={...p.parameters,docs:{...(D=p.parameters)==null?void 0:D.docs,source:{originalSource:`{
  name: "排列方向",
  args: {
    themeColor: "primary",
    dataSource: [{
      "label": "Option1",
      "value": "option1",
      "isDisabled": false
    }, {
      "label": "Option2",
      "value": "option2",
      "isDisabled": false
    }, {
      "label": "Option3",
      "value": "option3",
      "isDisabled": false
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
                direction="column"
                :className="args.className"
            ></Checkbox>
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
          return ['<Checkbox', \`  themeColor="\${args.themeColor}"\`, \`  :dataSource="\${dataSourceString}"\`, \`  :initValue="[\${args.initValue}]"\`, \`  direction="column"\`, \`  className="\${args.className}"\`, '  v-model="vModelData">', '</Checkbox>'].join('\\n').trim();
        }
      }
    }
  }
}`,...(V=(y=p.parameters)==null?void 0:y.docs)==null?void 0:V.source}}};var N,$,O;h.parameters={...h.parameters,docs:{...(N=h.parameters)==null?void 0:N.docs,source:{originalSource:`{
  name: "主題色彩",
  args: {
    datasourcePrimary: [{
      label: "Option1",
      value: "option01",
      "isDisabled": false
    }, {
      label: "Option2",
      value: "option02",
      "isDisabled": false
    }, {
      label: "Option3",
      value: "option03",
      "isDisabled": false
    }],
    datasourceSecondary: [{
      label: "Option1",
      value: "option4",
      "isDisabled": false
    }, {
      label: "Option2",
      value: "option5",
      "isDisabled": false
    }, {
      label: "Option3",
      value: "option6",
      "isDisabled": false
    }],
    datasourceTertiary: [{
      label: "Option1",
      value: "option7",
      "isDisabled": false
    }, {
      label: "Option2",
      value: "option8",
      "isDisabled": false
    }, {
      label: "Option3",
      value: "option9",
      "isDisabled": false
    }],
    datasourceSuccess: [{
      label: "Option1",
      value: "option10",
      "isDisabled": false
    }, {
      label: "Option2",
      value: "option11",
      "isDisabled": false
    }, {
      label: "Option3",
      value: "option12",
      "isDisabled": false
    }],
    datasourceWarning: [{
      label: "Option1",
      value: "option13",
      "isDisabled": false
    }, {
      label: "Option2",
      value: "option14",
      "isDisabled": false
    }, {
      label: "Option3",
      value: "option15",
      "isDisabled": false
    }],
    datasourceError: [{
      label: "Option1",
      value: "option16",
      "isDisabled": false
    }, {
      label: "Option2",
      value: "option17",
      "isDisabled": false
    }, {
      label: "Option3",
      value: "option18",
      "isDisabled": false
    }],
    datasourceInfo: [{
      label: "Option1",
      value: "option19",
      "isDisabled": false
    }, {
      label: "Option2",
      value: "option20",
      "isDisabled": false
    }, {
      label: "Option3",
      value: "option21",
      "isDisabled": false
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
                    themeColor="neutral"
                    :dataSource="args.datasourceTertiary"
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
          return ['<Checkbox', \`  themeColor="primary"\`, \`  :dataSource="\${datasourcePrimary}"\`, \`  :initValue="[\${args.initValue[0]}]"\`, \`  direction="\${args.direction}"\`, \`  className="\${args.className}"\`, '  v-model="vModelData">', '</Checkbox>', '<Checkbox', \`  themeColor="secondary"\`, \`  :dataSource="\${datasourceSecondary}"\`, \`  :initValue="[\${args.initValue[1]}]"\`, \`  direction="\${args.direction}"\`, \`  className="\${args.className}"\`, '  v-model="vModelData">', '</Checkbox>', '<Checkbox', \`  themeColor="neutral"\`, \`  :dataSource="\${datasourceTertiary}"\`, \`  :initValue="[\${args.initValue[2]}]"\`, \`  direction="\${args.direction}"\`, \`  className="\${args.className}"\`, '  v-model="vModelData">', '</Checkbox>', '<Checkbox', \`  themeColor="info"\`, \`  :dataSource="\${datasourceInfo}"\`, \`  :initValue="[\${args.initValue[6]}]"\`, \`  direction="\${args.direction}"\`, \`  className="\${args.className}"\`, '  v-model="vModelData">', '</Checkbox>', '<Checkbox', \`  themeColor="success"\`, \`  :dataSource="\${datasourceSuccess}"\`, \`  :initValue="[\${args.initValue[3]}]"\`, \`  direction="\${args.direction}"\`, \`  className="\${args.className}"\`, '  v-model="vModelData">', '<Checkbox', \`  themeColor="warning"\`, \`  :dataSource="\${datasourceWarning}"\`, \`  :initValue="[\${args.initValue[4]}]"\`, \`  direction="\${args.direction}"\`, \`  className="\${args.className}"\`, '  v-model="vModelData">', '</Checkbox>', '<Checkbox', \`  themeColor="error"\`, \`  :dataSource="\${datasourceError}"\`, \`  :initValue="[\${args.initValue[5]}]"\`, \`  direction="\${args.direction}"\`, \`  className="\${args.className}"\`, '  v-model="vModelData">', '</Checkbox>'].join('\\n').trim();
        }
      }
    }
  }
}`,...(O=($=h.parameters)==null?void 0:$.docs)==null?void 0:O.source}}};const J=["CheckboxMultiStory","CheckboxDirection","CheckboxColorStory"];export{h as CheckboxColorStory,p as CheckboxDirection,b as CheckboxMultiStory,J as __namedExportsOrder,H as default};

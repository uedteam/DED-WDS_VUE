import{m as h,u as b,w as D,a as c,F as x,B as w,n as t,o as u,g as O,M as _,e as m,t as k,f as $}from"./vue.esm-bundler-sK8WeL-9.js";const E=["value","name","checked"],d={__name:"Radio",props:h({themeColor:{type:String,default:"primary",validator:o=>["primary","secondary","neutral","info","success","warning","error"].includes(o)},dataSource:{type:Array,required:!0},initValue:{type:String,required:!0},direction:{type:String,default:"row",validator:o=>["row","column"].includes(o)},className:{type:String,default:""}},{modelValue:{},modelModifiers:{}}),emits:["update:modelValue"],setup(o){const a=b(o,"modelValue"),e=o;D(()=>e.initValue,n=>{a.value||(a.value=n)},{immediate:!0});const r=n=>a.value===n;return(n,g)=>(u(),c("div",{class:t({"ded-radio-container":!0,[`ded-radio-container-${e.direction}`]:e.direction,[e.className]:!!e.className})},[(u(!0),c(x,null,w(e.dataSource,(i,y)=>(u(),c("label",{key:y,class:t(["ded-radio",i.isDisabled?"ded-radio-input-disabled":""])},[O(m("input",{class:"ded-radio-input",type:"radio",value:i.value,name:i.name,checked:r(i.value),"onUpdate:modelValue":g[0]||(g[0]=f=>a.value=f)},null,8,E),[[_,a.value]]),m("div",{class:t(["ded-radio-icon",r(i.value)?`ded-radio-checked-${e.themeColor}`:`ded-radio-unchecked-${e.themeColor}`])},null,2),m("span",{class:t(["ded-radio-text",i.isDisabled?"ded-radio-text-disabled":""])},k(i.label),3)],2))),128))],2))}};d.__docgenInfo={exportName:"default",displayName:"Radio",description:"",tags:{},props:[{name:"themeColor",type:{name:"string"},defaultValue:{func:!1,value:'"primary"'},values:["primary","secondary","neutral","info","success","warning","error"]},{name:"dataSource",type:{name:"array"},required:!0},{name:"initValue",type:{name:"string"},required:!0},{name:"direction",type:{name:"string"},defaultValue:{func:!1,value:'"row"'},values:["row","column"]},{name:"className",type:{name:"string"},defaultValue:{func:!1,value:'""'}}],sourceFiles:["/Users/auouser/Desktop/Work_Space/DED-WDS_VUE/libs/src/ui/element/Radio/Radio.vue"]};function C(o){return`[
    ${o.map(a=>`{
        label: '${a.label}',
        value: '${a.value}'
        isDisabled: '${a.isDisabled}'
    }`).join(`,
    `)}
  ]`}const A={title:"Component/Radio",component:d,tags:["autodocs"],argTypes:{themeColor:{description:"主題顏色",control:{type:"select"},options:["primary","secondary","neutral","info","success","warning","error"],table:{type:{summary:"primary | secondary | neutral | info | success | warning | error"}}},dataSource:{description:"資料來源",control:{type:"object"},table:{type:{summary:"{ label: string; value: string; }[]"}}},initValue:{description:"預設值",control:{type:"text"}},direction:{description:"排列方向",control:{type:"select"},options:["row","column"],table:{type:{summary:"row | column"}}},className:{description:"客製化樣式",control:{type:"text"}}},parameters:{docs:{title:"Radio",description:{component:"Radio 組件的呈現及說明。"}}}},l={name:"預設項目",args:{themeColor:"primary",dataSource:[{label:"Option1",value:"option1",isDisabled:!1},{label:"Option2",value:"option2",isDisabled:!1},{label:"Option3",value:"option3",isDisabled:!0}],initValue:"option1",direction:"row",className:""},render:o=>({components:{Radio:d},setup(){const a=$("");return{args:o,modelValue:a}},template:`
            <Radio  
                :themeColor="args.themeColor"
                :dataSource="args.dataSource"
                :initValue="args.initValue"
                :direction="args.direction"
                :className="args.className"
                v-model="modelValue">
            </Radio>
        `}),parameters:{controls:{expanded:!0},docs:{source:{transform:(o,a)=>{const{args:e}=a,r=C(e.dataSource);return["<Radio",`  themeColor="${e.themeColor}"`,`  :dataSource="${r}"`,`  initValue="${e.initValue}"`,`  direction="${e.direction}"`,`  className="${e.className}"`,'  v-model="modelValue"',"></Radio>"].join(`
`).trim()}}}}},s={name:"主題色彩",args:{dataSource:[{label:"Option1",value:"option1",isDisabled:!1},{label:"Option2",value:"option2",isDisabled:!1},{label:"Option3",value:"option3",isDisabled:!1}],initValue:"option1",direction:"row",className:""},render:o=>({components:{Radio:d},setup(){const a=$("");return{args:o,modelValue:a}},template:`
            <div style="display:flex; flex-direction:column; gap: 16px">
                <Radio
                    themeColor="primary"
                    :dataSource="args.dataSource"
                    :initValue="args.initValue"
                    :direction="args.direction"
                    :className="args.className"
                    v-model="modelValue">
                </Radio>
                <Radio
                    themeColor="secondary"
                    :dataSource="args.dataSource"
                    :initValue="args.initValue"
                    :direction="args.direction"
                    :className="args.className"
                    v-model="modelValue">
                </Radio>
                <Radio
                    themeColor="neutral"
                    :dataSource="args.dataSource"
                    :initValue="args.initValue"
                    :direction="args.direction"
                    :className="args.className"
                    v-model="modelValue">
                </Radio>
                <Radio
                    themeColor="info"
                    :dataSource="args.dataSource"
                    :initValue="args.initValue"
                    :direction="args.direction"
                    :className="args.className"
                    v-model="modelValue">
                </Radio>
                <Radio
                    themeColor="success"
                    :dataSource="args.dataSource"
                    :initValue="args.initValue"
                    :direction="args.direction"
                    :className="args.className"
                    v-model="modelValue">
                </Radio>
                <Radio
                    themeColor="warning"
                    :dataSource="args.dataSource"
                    :initValue="args.initValue"
                    :direction="args.direction"
                    :className="args.className"
                    v-model="modelValue">
                </Radio>
                <Radio
                    themeColor="error"
                    :dataSource="args.dataSource"
                    :initValue="args.initValue"
                    :direction="args.direction"
                    :className="args.className"
                    v-model="modelValue">
                </Radio>
                
            </div>
        `}),parameters:{controls:{expanded:!0,exclude:["themeColor"]},docs:{source:{transform:(o,a)=>{const{args:e}=a,r=C(e.dataSource);return["<Radio",'  themeColor="primary"',`  :dataSource="${r}"`,`  :initValue="${e.initValue}"`,`  direction="${e.direction}"`,`  className="${e.className}"`,'  v-model="modelValue"',"></Radio>","<Radio",'  themeColor="secondary"',`  :dataSource="${r}"`,`  :initValue="${e.initValue}"`,`  direction="${e.direction}"`,`  className="${e.className}"`,'  v-model="modelValue"',"></Radio>","<Radio",'  themeColor="neutral"',`  :dataSource="${r}"`,`  :initValue="${e.initValue}"`,`  direction="${e.direction}"`,`  className="${e.className}"`,'  v-model="modelValue"',"></Radio>","<Radio",'  themeColor="info"',`  :dataSource="${r}"`,`  :initValue="${e.initValue}"`,`  direction="${e.direction}"`,`  className="${e.className}"`,'  v-model="modelValue"',"></Radio>","<Radio",'  themeColor="success"',`  :dataSource="${r}"`,`  :initValue="${e.initValue}"`,`  direction="${e.direction}"`,`  className="${e.className}"`,'  v-model="modelValue"',"></Radio>","<Radio",'  themeColor="warning"',`  :dataSource="${r}"`,`  :initValue="${e.initValue}"`,`  direction="${e.direction}"`,`  className="${e.className}"`,'  v-model="modelValue"',"></Radio>","<Radio",'  themeColor="error"',`  :dataSource="${r}"`,`  :initValue="${e.initValue}"`,`  direction="${e.direction}"`,`  className="${e.className}"`,'  v-model="modelValue"',"></Radio>"].join(`
`).trim()}}}}};var p,V,S;l.parameters={...l.parameters,docs:{...(p=l.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: "預設項目",
  args: {
    themeColor: 'primary',
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
    initValue: "option1",
    direction: "row",
    className: ""
  },
  render: args => ({
    components: {
      Radio
    },
    setup() {
      const modelValue = ref("");
      return {
        args,
        modelValue
      };
    },
    template: \`
            <Radio  
                :themeColor="args.themeColor"
                :dataSource="args.dataSource"
                :initValue="args.initValue"
                :direction="args.direction"
                :className="args.className"
                v-model="modelValue">
            </Radio>
        \`
  }),
  // 控制 controls 中能控制的參數
  parameters: {
    controls: {
      expanded: true
      // include: ['themeColor', 'label', 'value', 'name' ],
    },
    docs: {
      source: {
        transform: (src, storyContext) => {
          const {
            args
          } = storyContext;
          const dataSourceString = formatDataSource(args.dataSource);
          return ['<Radio', \`  themeColor="\${args.themeColor}"\`, \`  :dataSource="\${dataSourceString}"\`, \`  initValue="\${args.initValue}"\`, \`  direction="\${args.direction}"\`, \`  className="\${args.className}"\`, \`  v-model="modelValue"\`, '></Radio>'].join('\\n').trim();
        }
      }
    }
  }
}`,...(S=(V=l.parameters)==null?void 0:V.docs)==null?void 0:S.source}}};var R,N,v;s.parameters={...s.parameters,docs:{...(R=s.parameters)==null?void 0:R.docs,source:{originalSource:`{
  name: "主題色彩",
  args: {
    // themeColor: '',
    dataSource: [{
      label: "Option1",
      value: "option1",
      isDisabled: false
    }, {
      label: "Option2",
      value: "option2",
      isDisabled: false
    }, {
      label: "Option3",
      value: "option3",
      isDisabled: false
    }],
    initValue: "option1",
    direction: "row",
    className: ""
  },
  render: args => ({
    components: {
      Radio
    },
    setup() {
      const modelValue = ref("");
      return {
        args,
        modelValue
      };
    },
    template: \`
            <div style="display:flex; flex-direction:column; gap: 16px">
                <Radio
                    themeColor="primary"
                    :dataSource="args.dataSource"
                    :initValue="args.initValue"
                    :direction="args.direction"
                    :className="args.className"
                    v-model="modelValue">
                </Radio>
                <Radio
                    themeColor="secondary"
                    :dataSource="args.dataSource"
                    :initValue="args.initValue"
                    :direction="args.direction"
                    :className="args.className"
                    v-model="modelValue">
                </Radio>
                <Radio
                    themeColor="neutral"
                    :dataSource="args.dataSource"
                    :initValue="args.initValue"
                    :direction="args.direction"
                    :className="args.className"
                    v-model="modelValue">
                </Radio>
                <Radio
                    themeColor="info"
                    :dataSource="args.dataSource"
                    :initValue="args.initValue"
                    :direction="args.direction"
                    :className="args.className"
                    v-model="modelValue">
                </Radio>
                <Radio
                    themeColor="success"
                    :dataSource="args.dataSource"
                    :initValue="args.initValue"
                    :direction="args.direction"
                    :className="args.className"
                    v-model="modelValue">
                </Radio>
                <Radio
                    themeColor="warning"
                    :dataSource="args.dataSource"
                    :initValue="args.initValue"
                    :direction="args.direction"
                    :className="args.className"
                    v-model="modelValue">
                </Radio>
                <Radio
                    themeColor="error"
                    :dataSource="args.dataSource"
                    :initValue="args.initValue"
                    :direction="args.direction"
                    :className="args.className"
                    v-model="modelValue">
                </Radio>
                
            </div>
        \`
  }),
  // 控制 controls 中能控制的參數
  parameters: {
    controls: {
      expanded: true,
      exclude: ['themeColor']
    },
    docs: {
      source: {
        transform: (src, storyContext) => {
          const {
            args
          } = storyContext;
          const dataSourceString = formatDataSource(args.dataSource);
          return ['<Radio', \`  themeColor="primary"\`, \`  :dataSource="\${dataSourceString}"\`, \`  :initValue="\${args.initValue}"\`, \`  direction="\${args.direction}"\`, \`  className="\${args.className}"\`, \`  v-model="modelValue"\`, '></Radio>', '<Radio', \`  themeColor="secondary"\`, \`  :dataSource="\${dataSourceString}"\`, \`  :initValue="\${args.initValue}"\`, \`  direction="\${args.direction}"\`, \`  className="\${args.className}"\`, \`  v-model="modelValue"\`, '></Radio>', '<Radio', \`  themeColor="neutral"\`, \`  :dataSource="\${dataSourceString}"\`, \`  :initValue="\${args.initValue}"\`, \`  direction="\${args.direction}"\`, \`  className="\${args.className}"\`, \`  v-model="modelValue"\`, '></Radio>', '<Radio', \`  themeColor="info"\`, \`  :dataSource="\${dataSourceString}"\`, \`  :initValue="\${args.initValue}"\`, \`  direction="\${args.direction}"\`, \`  className="\${args.className}"\`, \`  v-model="modelValue"\`, '></Radio>', '<Radio', \`  themeColor="success"\`, \`  :dataSource="\${dataSourceString}"\`, \`  :initValue="\${args.initValue}"\`, \`  direction="\${args.direction}"\`, \`  className="\${args.className}"\`, \`  v-model="modelValue"\`, '></Radio>', '<Radio', \`  themeColor="warning"\`, \`  :dataSource="\${dataSourceString}"\`, \`  :initValue="\${args.initValue}"\`, \`  direction="\${args.direction}"\`, \`  className="\${args.className}"\`, \`  v-model="modelValue"\`, '></Radio>', '<Radio', \`  themeColor="error"\`, \`  :dataSource="\${dataSourceString}"\`, \`  :initValue="\${args.initValue}"\`, \`  direction="\${args.direction}"\`, \`  className="\${args.className}"\`, \`  v-model="modelValue"\`, '></Radio>'].join('\\n').trim();
        }
      }
    }
  }
}`,...(v=(N=s.parameters)==null?void 0:N.docs)==null?void 0:v.source}}};const F=["RadioDefaultStory","RadioColorDefault"];export{s as RadioColorDefault,l as RadioDefaultStory,F as __namedExportsOrder,A as default};

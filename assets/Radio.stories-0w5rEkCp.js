import{m as f,u as b,w as x,a as d,F as w,k as D,n as c,o as u,h as O,I as _,b as m,t as k,e as $}from"./vue.esm-bundler-ChZ6yN_a.js";const E=["value","name","checked"],j={class:"radio-text"},s={__name:"Radio",props:f({themeColor:{type:String,default:"primary",validator:o=>["primary","secondary","tertiary","success","warning","error","info"].includes(o)},dataSource:{type:Array,required:!0},initValue:{type:String,required:!0},direction:{type:String,default:"row",validator:o=>["row","column"].includes(o)},className:{type:String,default:""}},{modelValue:{},modelModifiers:{}}),emits:["update:modelValue"],setup(o){const a=b(o,"modelValue"),e=o;x(()=>e.initValue,i=>{a.value||(a.value=i)},{immediate:!0});const r=i=>a.value===i;return(i,g)=>(u(),d("div",{class:c({"radio-container":!0,[`radio-container-${e.direction}`]:e.direction,[e.className]:!!e.className})},[(u(!0),d(w,null,D(e.dataSource,(n,C)=>(u(),d("label",{key:C,class:c(["radio",e.className||""])},[O(m("input",{class:"radio-input",type:"radio",value:n.value,name:n.name,checked:r(n.value),"onUpdate:modelValue":g[0]||(g[0]=h=>a.value=h)},null,8,E),[[_,a.value]]),m("div",{class:c(["radio-icon",r(n.value)?`radio-checked-${e.themeColor}`:`radio-unchecked-${e.themeColor}`])},null,2),m("span",j,k(n.label),1)],2))),128))],2))}};s.__docgenInfo={exportName:"default",displayName:"Radio",description:"",tags:{},props:[{name:"themeColor",type:{name:"string"},defaultValue:{func:!1,value:'"primary"'},values:["primary","secondary","tertiary","success","warning","error","info"]},{name:"dataSource",type:{name:"array"},required:!0},{name:"initValue",type:{name:"string"},required:!0},{name:"direction",type:{name:"string"},defaultValue:{func:!1,value:'"row"'},values:["row","column"]},{name:"className",type:{name:"string"},defaultValue:{func:!1,value:'""'}}],sourceFiles:["D:/98_測試/up/DED-WDS_VUE/libs/src/ui/element/Radio/Radio.vue"]};function y(o){return`[
    ${o.map(a=>`{
        label: '${a.label}',
        value: '${a.value}'
    }`).join(`,
    `)}
  ]`}const F={title:"Design System/Radio",component:s,tags:["autodocs"],argTypes:{themeColor:{description:"主題顏色",control:{type:"select"},options:["primary","secondary","tertiary","success","warning","error","info"],table:{type:{summary:"primary | secondary | tertiary | success | warning | error | info"}}},dataSource:{description:"資料來源",control:{type:"object"},table:{type:{summary:"{ label: string; value: string; }[]"}}},initValue:{description:"預設值",control:{type:"text"}},direction:{description:"排列方向",control:{type:"select"},options:["row","column"],table:{type:{summary:"row | column"}}},className:{description:"客製化樣式",control:{type:"text"}}},parameters:{docs:{title:"Radio",description:{component:"Radio 組件的呈現及說明。"}}}},t={name:"預設項目",args:{themeColor:"primary",dataSource:[{label:"Option1",value:"option1"},{label:"Option2",value:"option2"},{label:"Option3",value:"option3"}],initValue:"option1",direction:"row",className:""},render:o=>({components:{Radio:s},setup(){const a=$("");return{args:o,modelValue:a}},template:`
            <Radio  
                :themeColor="args.themeColor"
                :dataSource="args.dataSource"
                :initValue="args.initValue"
                :direction="args.direction"
                :className="args.className"
                v-model="modelValue">
            </Radio>
        `}),parameters:{controls:{expanded:!0},docs:{source:{transform:(o,a)=>{const{args:e}=a,r=y(e.dataSource);return["<Radio",`  themeColor="${e.themeColor}"`,`  :dataSource="${r}"`,`  initValue="${e.initValue}"`,`  direction="${e.direction}"`,`  className="${e.className}"`,'  v-model="modelValue"',"></Radio>"].join(`
`).trim()}}}}},l={name:"主題色彩",args:{dataSource:[{label:"Option1",value:"option1"},{label:"Option2",value:"option2"},{label:"Option3",value:"option3"}],initValue:"option1",direction:"row",className:""},render:o=>({components:{Radio:s},setup(){const a=$("");return{args:o,modelValue:a}},template:`
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
                    themeColor="tertiary"
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
                <Radio
                    themeColor="info"
                    :dataSource="args.dataSource"
                    :initValue="args.initValue"
                    :direction="args.direction"
                    :className="args.className"
                    v-model="modelValue">
                </Radio>
            </div>
        `}),parameters:{controls:{expanded:!0,exclude:["themeColor"]},docs:{source:{transform:(o,a)=>{const{args:e}=a,r=y(e.dataSource);return["<Radio",'  themeColor="primary"',`  :dataSource="${r}"`,`  :initValue="${e.initValue}"`,`  direction="${e.direction}"`,`  className="${e.className}"`,'  v-model="modelValue"',"></Radio>","<Radio",'  themeColor="secondary"',`  :dataSource="${r}"`,`  :initValue="${e.initValue}"`,`  direction="${e.direction}"`,`  className="${e.className}"`,'  v-model="modelValue"',"></Radio>","<Radio",'  themeColor="tertiary"',`  :dataSource="${r}"`,`  :initValue="${e.initValue}"`,`  direction="${e.direction}"`,`  className="${e.className}"`,'  v-model="modelValue"',"></Radio>","<Radio",'  themeColor="success"',`  :dataSource="${r}"`,`  :initValue="${e.initValue}"`,`  direction="${e.direction}"`,`  className="${e.className}"`,'  v-model="modelValue"',"></Radio>","<Radio",'  themeColor="warning"',`  :dataSource="${r}"`,`  :initValue="${e.initValue}"`,`  direction="${e.direction}"`,`  className="${e.className}"`,'  v-model="modelValue"',"></Radio>","<Radio",'  themeColor="error"',`  :dataSource="${r}"`,`  :initValue="${e.initValue}"`,`  direction="${e.direction}"`,`  className="${e.className}"`,'  v-model="modelValue"',"></Radio>","<Radio",'  themeColor="info"',`  :dataSource="${r}"`,`  :initValue="${e.initValue}"`,`  direction="${e.direction}"`,`  className="${e.className}"`,'  v-model="modelValue"',"></Radio>"].join(`
`).trim()}}}}};var p,V,S;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: "預設項目",
  args: {
    themeColor: 'primary',
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
}`,...(S=(V=t.parameters)==null?void 0:V.docs)==null?void 0:S.source}}};var R,N,v;l.parameters={...l.parameters,docs:{...(R=l.parameters)==null?void 0:R.docs,source:{originalSource:`{
  name: "主題色彩",
  args: {
    // themeColor: '',
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
                    themeColor="tertiary"
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
                <Radio
                    themeColor="info"
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
          return ['<Radio', \`  themeColor="primary"\`, \`  :dataSource="\${dataSourceString}"\`, \`  :initValue="\${args.initValue}"\`, \`  direction="\${args.direction}"\`, \`  className="\${args.className}"\`, \`  v-model="modelValue"\`, '></Radio>', '<Radio', \`  themeColor="secondary"\`, \`  :dataSource="\${dataSourceString}"\`, \`  :initValue="\${args.initValue}"\`, \`  direction="\${args.direction}"\`, \`  className="\${args.className}"\`, \`  v-model="modelValue"\`, '></Radio>', '<Radio', \`  themeColor="tertiary"\`, \`  :dataSource="\${dataSourceString}"\`, \`  :initValue="\${args.initValue}"\`, \`  direction="\${args.direction}"\`, \`  className="\${args.className}"\`, \`  v-model="modelValue"\`, '></Radio>', '<Radio', \`  themeColor="success"\`, \`  :dataSource="\${dataSourceString}"\`, \`  :initValue="\${args.initValue}"\`, \`  direction="\${args.direction}"\`, \`  className="\${args.className}"\`, \`  v-model="modelValue"\`, '></Radio>', '<Radio', \`  themeColor="warning"\`, \`  :dataSource="\${dataSourceString}"\`, \`  :initValue="\${args.initValue}"\`, \`  direction="\${args.direction}"\`, \`  className="\${args.className}"\`, \`  v-model="modelValue"\`, '></Radio>', '<Radio', \`  themeColor="error"\`, \`  :dataSource="\${dataSourceString}"\`, \`  :initValue="\${args.initValue}"\`, \`  direction="\${args.direction}"\`, \`  className="\${args.className}"\`, \`  v-model="modelValue"\`, '></Radio>', '<Radio', \`  themeColor="info"\`, \`  :dataSource="\${dataSourceString}"\`, \`  :initValue="\${args.initValue}"\`, \`  direction="\${args.direction}"\`, \`  className="\${args.className}"\`, \`  v-model="modelValue"\`, '></Radio>'].join('\\n').trim();
        }
      }
    }
  }
}`,...(v=(N=l.parameters)==null?void 0:N.docs)==null?void 0:v.source}}};const q=["RadioDefaultStory","RadioColorDefault"];export{l as RadioColorDefault,t as RadioDefaultStory,q as __namedExportsOrder,F as default};

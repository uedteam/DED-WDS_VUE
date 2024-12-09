import{a as g,r as _,e as F,n as k,o as m}from"./vue.esm-bundler-C-bz8AVj.js";const B={key:0,class:"ded-divider-content"},a={__name:"Divider",props:{themeColor:{type:String,validator:r=>["primary","secondary","tertiary","success","warning","error","info"].includes(r)},width:{type:String,default:"xsmall",validator:r=>["xsmall","small","medium","large","xlarge"].includes(r)},type:{type:String,default:"solid",validator:r=>["solid","dashed","dotted"].includes(r)},direction:{type:String,default:"horizontal",validator:r=>["horizontal","vertical"].includes(r)},align:{type:String,default:"center",validator:r=>["start","center","end"].includes(r)},className:{type:String,default:""}},setup(r){const i=r;return(e,W)=>(m(),g("div",{class:k(["ded-divider",`ded-divider-${i.direction}`,`ded-divider-width-${i.width}`,`ded-divider-${i.type}`,i.themeColor?`ded-divider-${i.themeColor}`:"",e.$slots.default?`ded-divider-${i.align}`:"",...i.className.split(" ")])},[e.$slots.default&&e.$slots.default().some(E=>{var c;return(c=E.children)==null?void 0:c.trim()})?(m(),g("div",B,[_(e.$slots,"default")])):F("",!0)],2))}};a.__docgenInfo={exportName:"default",displayName:"Divider",description:"",tags:{},props:[{name:"themeColor",type:{name:"string"},values:["primary","secondary","tertiary","success","warning","error","info"]},{name:"width",type:{name:"string"},defaultValue:{func:!1,value:'"xsmall"'},values:["xsmall","small","medium","large","xlarge"]},{name:"type",type:{name:"string"},defaultValue:{func:!1,value:'"solid"'},values:["solid","dashed","dotted"]},{name:"direction",type:{name:"string"},defaultValue:{func:!1,value:'"horizontal"'},values:["horizontal","vertical"]},{name:"align",type:{name:"string"},defaultValue:{func:!1,value:'"center"'},values:["start","center","end"]},{name:"className",type:{name:"string"},defaultValue:{func:!1,value:'""'}}],slots:[{name:"default"}],sourceFiles:["/Users/auouser/Desktop/Work_Space/DED-WDS_VUE/libs/src/ui/element/Divider/Divider.vue"]};const U={title:"Component/Divider",component:a,tags:["autodocs"],argTypes:{themeColor:{description:"主題顏色",control:{type:"select",labels:{"":"None",primary:"primary",secondary:"secondary",tertiary:"tertiary",success:"success",warning:"warning",error:"error",info:"info"}},options:["","primary","secondary","tertiary","success","warning","error","info"],table:{type:{summary:"primary | secondary | tertiary | success | warning | error | info"}}},width:{description:"線條寬度",control:{type:"select"},options:["xsmall","small","medium","large","xlarge"],table:{type:{summary:"xsmall | small | medium | large | xlarge"}}},type:{description:"線條樣式",control:{type:"select"},defaultValue:"solid",options:["solid","dashed","dotted"],table:{type:{summary:"solid | dashed | dotted"}}},direction:{description:"線條方向",control:{type:"select"},defaultValue:"horizontal",options:["horizontal","vertical"],table:{type:{summary:"horizontal | vertical"}}},align:{description:"文字位置",control:{type:"select"},options:["start","center","end"],table:{type:{summary:"start | center | end"}}},className:{description:"客製化樣式",control:{type:"text"}},default:{description:"分隔線內容",control:{type:"text"}}},parameters:{docs:{title:"Divider",description:{component:"Divider 組件的呈現及說明。"}}}},t={name:"預設項目",args:{themeColor:"",width:"small",type:"solid",direction:"horizontal",align:"center",default:"Divider",className:""},render:r=>({components:{Divider:a},setup(){return{args:r}},template:`
            <div style="display:flex;  justify-content:center; gap: 16px; height: 200px"
                :style="args.direction === 'horizontal'? 'flex-direction: column;': ''">
                <Divider
                    :themeColor="args.themeColor"
                    :width="args.width"
                    :type="args.type"
                    :direction="args.direction"
                    :align="args.align"
                    :className="args.className"
                >{{args.default}}</Divider>
            </div>
        `}),parameters:{controls:{},docs:{source:{transform:(r,i)=>{const{args:e}=i;return["<Divider",`  themeColor="${e.themeColor}"`,`  width="${e.width}"`,`  type="${e.type}"`,`  direction="${e.direction}"`,`  align="${e.align}"`,`  className="${e.className}"`,">",`  ${e.default}`,"</Divider>"].join(`
`).trim()}}}}},s={name:"文字對齊",args:{themeColor:"",width:"small",type:"solid",className:""},render:r=>({components:{Divider:a},setup(){return{args:r}},template:`
            <div style="display:flex; flex-direction: column; gap: 16px">
                <Divider
                    :themeColor="args.themeColor"
                    :width="args.width"
                    :type="args.type"
                    direction="horizontal"
                    align="start"
                    :className="args.className"
                >start</Divider>
                <Divider
                    :themeColor="args.themeColor"
                    :width="args.width"
                    :type="args.type"
                    direction="horizontal"
                    align="center"
                    :className="args.className"
                >center</Divider>
                <Divider
                    :themeColor="args.themeColor"
                    :width="args.width"
                    :type="args.type"
                    direction="horizontal"
                    align="end"
                    :className="args.className"
                >end</Divider>
            </div>
        `}),parameters:{controls:{exclude:["direction","align"]},docs:{source:{transform:(r,i)=>{const{args:e}=i;return["<Divider",'  direction="horizontal"',`  width="${e.width}"`,`  type="${e.type}"`,`  themeColor="${e.themeColor}"`,'  align="start"',`  className="${e.className}"`,">start</Divider>","<Divider",'  direction="horizontal"',`  width="${e.width}"`,`  type="${e.type}"`,`  themeColor="${e.themeColor}"`,'  align="center"',`  className="${e.className}"`,">center</Divider>","<Divider",'  direction="horizontal"',`  width="${e.width}"`,`  type="${e.type}"`,`  themeColor="${e.themeColor}"`,'  align="end"',`  className="${e.className}"`,">end</Divider>"].join(`
`).trim()}}}}},n={name:"線條粗細",args:{themeColor:"",width:"small",type:"solid",direction:"horizontal",align:"center",className:""},render:r=>({components:{Divider:a},setup(){return{args:r}},template:`
            <div :style="{ flexDirection: args.direction === 'horizontal' ? 'column' : 'row' }"
                    style="display:flex; gap: 16px; height: 400px">
                <Divider
                    :themeColor="args.themeColor"
                    width="xsmall"
                    :type="args.type"
                    :direction="args.direction"
                    :align="args.align"
                    :className="args.className"
                >xsmall / 1px</Divider>
                <Divider
                    :themeColor="args.themeColor"
                    width="small"
                    :type="args.type"
                    :direction="args.direction"
                    :align="args.align"
                    :className="args.className"
                >small / 2px</Divider>
                <Divider
                    :themeColor="args.themeColor"
                    width="medium"
                    :type="args.type"
                    :direction="args.direction"
                    :align="args.align"
                    :className="args.className"
                >medium / 4px</Divider>
                <Divider
                    :themeColor="args.themeColor"
                    width="large"
                    :type="args.type"
                    :direction="args.direction"
                    :align="args.align"
                >large / 6px</Divider>
                <Divider
                    :themeColor="args.themeColor"
                    width="xlarge"
                    :type="args.type"
                    :direction="args.direction"
                    :align="args.align"
                    :className="args.className"
                >xlarge / 8px</Divider>
            </div>
        `}),parameters:{controls:{exclude:["width"]},docs:{source:{transform:(r,i)=>{const{args:e}=i;return["<Divider",`  themeColor="${e.themeColor}"`,'  width="xsmall"',`  type="${e.type}"`,`  direction="${e.direction}"`,`  align="${e.align}"`,`  className="${e.className}"`,">xsmall / 1px</Divider>","<Divider",`  themeColor="${e.themeColor}"`,'  width="small"',`  type="${e.type}"`,`  direction="${e.direction}"`,`  align="${e.align}"`,`  className="${e.className}"`,">small / 2px</Divider>","<Divider",`  themeColor="${e.themeColor}"`,'  width="medium"',`  type="${e.type}"`,`  direction="${e.direction}"`,`  align="${e.align}"`,`  className="${e.className}"`,">medium / 4px</Divider>","<Divider",`  themeColor="${e.themeColor}"`,'  width="large"',`  type="${e.type}"`,`  direction="${e.direction}"`,`  align="${e.align}"`,`  className="${e.className}"`,">large / 6px</Divider>","<Divider",`  themeColor="${e.themeColor}"`,'  width="xlarge"',`  type="${e.type}"`,`  direction="${e.direction}"`,`  align="${e.align}"`,`  className="${e.className}"`,">xlarge / 8px</Divider>"].join(`
`).trim()}}}}},o={name:"線條類型",args:{themeColor:"",width:"small",direction:"horizontal",align:"center",className:""},render:r=>({components:{Divider:a},setup(){return{args:r}},template:`
            <div :style="{ flexDirection: args.direction === 'horizontal' ? 'column' : 'row' }"
                 style="display:flex; gap: 16px; height: 200px">
                <Divider
                    :themeColor="args.themeColor"
                    :width="args.width"
                    type="solid"
                    :direction="args.direction"
                    :align="args.align"
                    :className="args.className"
                >solid</Divider>
                <Divider
                    :themeColor="args.themeColor"
                    :width="args.width"
                    type="dashed"
                    :direction="args.direction"
                    :align="args.align"
                    :className="args.className"
                >dashed</Divider>
                <Divider
                    :themeColor="args.themeColor"
                    :width="args.width"
                    type="dotted"
                    :direction="args.direction"
                    :align="args.align"
                    :className="args.className"
                >dotted</Divider>
            </div>
        `}),parameters:{controls:{exclude:["type"]},docs:{source:{transform:(r,i)=>{const{args:e}=i;return["<Divider",`  themeColor="${e.themeColor}"`,`  width="${e.width}"`,'  type="solid"',`  direction="${e.direction}"`,`  align="${e.align}"`,`  className="${e.className}"`,">solid</Divider>","<Divider",`  themeColor="${e.themeColor}"`,`  width="${e.width}"`,'  type="dashed"',`  direction="${e.direction}"`,`  align="${e.align}"`,`  className="${e.className}"`,">dashed</Divider>","<Divider",`  themeColor="${e.themeColor}"`,`  width="${e.width}"`,'  type="dotted"',`  direction="${e.direction}"`,`  align="${e.align}"`,`  className="${e.className}"`,">dotted</Divider>"].join(`
`).trim()}}}}},l={name:"線條方向",args:{themeColor:"",width:"small",type:"solid",className:""},render:r=>({components:{Divider:a},setup(){return{args:r}},template:`
            <div style="display:flex; justify-content: center; gap: 16px; height: 200px">
                <Divider
                    :themeColor="args.themeColor"
                    :width="args.width"
                    :type="args.type"
                    direction="vertical"
                    align="start"
                    :className="args.className"
                >start</Divider>
                <Divider
                    :themeColor="args.themeColor"
                    :width="args.width"
                    :type="args.type"
                    direction="vertical"
                    align="center"
                    :className="args.className"
                >center</Divider>
                <Divider
                    :themeColor="args.themeColor"
                    :width="args.width"
                    :type="args.type"
                    direction="vertical"
                    align="end"
                    :className="args.className"
                >end</Divider>
            </div>
        `}),parameters:{controls:{exclude:["direction","align"]},docs:{source:{transform:(r,i)=>{const{args:e}=i;return["<Divider",`  themeColor="${e.themeColor}"`,`  width="${e.width}"`,`  type="${e.type}"`,'  direction="vertical"','  align="start"',`  className="${e.className}"`,">start</Divider>","<Divider",`  themeColor="${e.themeColor}"`,`  width="${e.width}"`,`  type="${e.type}"`,'  direction="vertical"','  align="center"',`  className="${e.className}"`,">center</Divider>","<Divider",`  themeColor="${e.themeColor}"`,`  width="${e.width}"`,`  type="${e.type}"`,'  direction="vertical"','  align="end"',`  className="${e.className}"`,">end</Divider>"].join(`
`).trim()}}}}},d={name:"線條顏色",args:{width:"small",type:"solid",direction:"horizontal",align:"center",className:""},render:r=>({components:{Divider:a},setup(){return{args:r}},template:`
            <div :style="{ flexDirection: args.direction === 'horizontal' ? 'column' : 'row' }"
                 style="display:flex; gap: 16px; height: 400px">
                <Divider
                    themeColor=""
                    :width="args.width"
                    :type="args.type"
                    :direction="args.direction"
                    :align="args.align"
                    :className=args.className
                >None</Divider>
                <Divider
                    themeColor="primary"
                    :width="args.width"
                    :type="args.type"
                    :direction="args.direction"
                    :align="args.align"
                    :className="args.className"
                >primary</Divider>
                <Divider
                    themeColor="secondary"
                    :width="args.width"
                    :type="args.type"
                    :direction="args.direction"
                    :align="args.align"
                    :className="args.className"
                >secondary</Divider>
                <Divider
                    themeColor="tertiary"
                    :width="args.width"
                    :type="args.type"
                    :direction="args.direction"
                    :align="args.align"
                    :className="args.className"
                >tertiary</Divider>
                <Divider
                    themeColor="success"
                    :width="args.width"
                    :type="args.type"
                    :direction="args.direction"
                    :align="args.align"
                    :className="args.className"
                >success</Divider>
                <Divider
                    themeColor="warning"
                    :width="args.width"
                    :type="args.type"
                    :direction="args.direction"
                    :align="args.align"
                    :className="args.className"
                >warning</Divider>
                <Divider
                    themeColor="error"
                    :width="args.width"
                    :type="args.type"
                    :direction="args.direction"
                    :align="args.align"
                    :className="args.className"
                >error</Divider>
                <Divider
                    themeColor="info"
                    :width="args.width"
                    :type="args.type"
                    :direction="args.direction"
                    :align="args.align"
                    :className="args.className"
                >info</Divider>
            </div>
        `}),parameters:{controls:{exclude:["themeColor"]},docs:{source:{transform:(r,i)=>{const{args:e}=i;return["<Divider",'  themeColor=""',`  width="${e.width}"`,`  type="${e.type}"`,`  direction="${e.direction}"`,`  align="${e.align}"`,`  className="${e.className}"`,">None</Divider>","<Divider",'  themeColor="primary"',`  width="${e.width}"`,`  type="${e.type}"`,`  direction="${e.direction}"`,`  align="${e.align}"`,`  className="${e.className}"`,">primary</Divider>","<Divider",'  themeColor="secondary"',`  width="${e.width}"`,`  type="${e.type}"`,`  direction="${e.direction}"`,`  align="${e.align}"`,`  className="${e.className}"`,">secondary</Divider>","<Divider",'  themeColor="tertiary"',`  width="${e.width}"`,`  type="${e.type}"`,`  direction="${e.direction}"`,`  align="${e.align}"`,`  className="${e.className}"`,">tertiary</Divider>","<Divider",'  themeColor="success"',`  width="${e.width}"`,`  type="${e.type}"`,`  direction="${e.direction}"`,`  align="${e.align}"`,`  className="${e.className}"`,">success</Divider>","<Divider",'  themeColor="warning"',`  width="${e.width}"`,`  type="${e.type}"`,`  direction="${e.direction}"`,`  align="${e.align}"`,`  className="${e.className}"`,">warning</Divider>","<Divider",'  themeColor="error"',`  width="${e.width}"`,`  type="${e.type}"`,`  direction="${e.direction}"`,`  align="${e.align}"`,`  className="${e.className}"`,">error</Divider>","<Divider",'  themeColor="info"',`  width="${e.width}"`,`  type="${e.type}"`,`  direction="${e.direction}"`,`  align="${e.align}"`,`  className="${e.className}"`,">info</Divider>"].join(`
`).trim()}}}}};var h,p,y;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`{
  name: "預設項目",
  args: {
    themeColor: "",
    width: "small",
    type: "solid",
    direction: "horizontal",
    align: "center",
    default: "Divider",
    className: ""
  },
  render: args => ({
    components: {
      Divider
    },
    setup() {
      // Create a ref for modelValue to be used with v-model
      return {
        args
      };
    },
    template: \`
            <div style="display:flex;  justify-content:center; gap: 16px; height: 200px"
                :style="args.direction === 'horizontal'? 'flex-direction: column;': ''">
                <Divider
                    :themeColor="args.themeColor"
                    :width="args.width"
                    :type="args.type"
                    :direction="args.direction"
                    :align="args.align"
                    :className="args.className"
                >{{args.default}}</Divider>
            </div>
        \`
  }),
  // 控制 controls 中能控制的參數
  parameters: {
    controls: {
      // include: ['themeColor', 'label', 'value', 'name' ],
    },
    docs: {
      source: {
        transform: (src, storyContext) => {
          const {
            args
          } = storyContext;
          return ['<Divider', \`  themeColor="\${args.themeColor}"\`, \`  width="\${args.width}"\`, \`  type="\${args.type}"\`, \`  direction="\${args.direction}"\`, \`  align="\${args.align}"\`, \`  className="\${args.className}"\`, '>', \`  \${args.default}\`, '</Divider>'].join('\\n').trim();
        }
      }
    }
  }
}`,...(y=(p=t.parameters)==null?void 0:p.docs)==null?void 0:y.source}}};var v,u,D;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`{
  name: "文字對齊",
  args: {
    themeColor: "",
    width: "small",
    type: "solid",
    className: ""
  },
  render: args => ({
    components: {
      Divider
    },
    setup() {
      // Create a ref for modelValue to be used with v-model
      return {
        args
      };
    },
    template: \`
            <div style="display:flex; flex-direction: column; gap: 16px">
                <Divider
                    :themeColor="args.themeColor"
                    :width="args.width"
                    :type="args.type"
                    direction="horizontal"
                    align="start"
                    :className="args.className"
                >start</Divider>
                <Divider
                    :themeColor="args.themeColor"
                    :width="args.width"
                    :type="args.type"
                    direction="horizontal"
                    align="center"
                    :className="args.className"
                >center</Divider>
                <Divider
                    :themeColor="args.themeColor"
                    :width="args.width"
                    :type="args.type"
                    direction="horizontal"
                    align="end"
                    :className="args.className"
                >end</Divider>
            </div>
        \`
  }),
  // 控制 controls 中能控制的參數
  parameters: {
    controls: {
      // include: ['themeColor', 'label', 'value', 'name' ],
      exclude: ["direction", "align"]
    },
    docs: {
      source: {
        transform: (src, storyContext) => {
          const {
            args
          } = storyContext;
          return ['<Divider', \`  direction="horizontal"\`, \`  width="\${args.width}"\`, \`  type="\${args.type}"\`, \`  themeColor="\${args.themeColor}"\`, \`  align="start"\`, \`  className="\${args.className}"\`, '>start</Divider>', '<Divider', \`  direction="horizontal"\`, \`  width="\${args.width}"\`, \`  type="\${args.type}"\`, \`  themeColor="\${args.themeColor}"\`, \`  align="center"\`, \`  className="\${args.className}"\`, '>center</Divider>', '<Divider', \`  direction="horizontal"\`, \`  width="\${args.width}"\`, \`  type="\${args.type}"\`, \`  themeColor="\${args.themeColor}"\`, \`  align="end"\`, \`  className="\${args.className}"\`, '>end</Divider>'].join('\\n').trim();
        }
      }
    }
  }
}`,...(D=(u=s.parameters)==null?void 0:u.docs)==null?void 0:D.source}}};var $,w,C;n.parameters={...n.parameters,docs:{...($=n.parameters)==null?void 0:$.docs,source:{originalSource:`{
  name: "線條粗細",
  args: {
    themeColor: "",
    width: "small",
    type: "solid",
    direction: "horizontal",
    align: "center",
    className: ""
  },
  render: args => ({
    components: {
      Divider
    },
    setup() {
      // Create a ref for modelValue to be used with v-model
      return {
        args
      };
    },
    template: \`
            <div :style="{ flexDirection: args.direction === 'horizontal' ? 'column' : 'row' }"
                    style="display:flex; gap: 16px; height: 400px">
                <Divider
                    :themeColor="args.themeColor"
                    width="xsmall"
                    :type="args.type"
                    :direction="args.direction"
                    :align="args.align"
                    :className="args.className"
                >xsmall / 1px</Divider>
                <Divider
                    :themeColor="args.themeColor"
                    width="small"
                    :type="args.type"
                    :direction="args.direction"
                    :align="args.align"
                    :className="args.className"
                >small / 2px</Divider>
                <Divider
                    :themeColor="args.themeColor"
                    width="medium"
                    :type="args.type"
                    :direction="args.direction"
                    :align="args.align"
                    :className="args.className"
                >medium / 4px</Divider>
                <Divider
                    :themeColor="args.themeColor"
                    width="large"
                    :type="args.type"
                    :direction="args.direction"
                    :align="args.align"
                >large / 6px</Divider>
                <Divider
                    :themeColor="args.themeColor"
                    width="xlarge"
                    :type="args.type"
                    :direction="args.direction"
                    :align="args.align"
                    :className="args.className"
                >xlarge / 8px</Divider>
            </div>
        \`
  }),
  // 控制 controls 中能控制的參數
  parameters: {
    controls: {
      // include: ['themeColor', 'label', 'value', 'name' ],
      exclude: ["width"]
    },
    docs: {
      source: {
        transform: (src, storyContext) => {
          const {
            args
          } = storyContext;
          return ['<Divider', \`  themeColor="\${args.themeColor}"\`, \`  width="xsmall"\`, \`  type="\${args.type}"\`, \`  direction="\${args.direction}"\`, \`  align="\${args.align}"\`, \`  className="\${args.className}"\`, '>xsmall / 1px</Divider>', '<Divider', \`  themeColor="\${args.themeColor}"\`, \`  width="small"\`, \`  type="\${args.type}"\`, \`  direction="\${args.direction}"\`, \`  align="\${args.align}"\`, \`  className="\${args.className}"\`, '>small / 2px</Divider>', '<Divider', \`  themeColor="\${args.themeColor}"\`, \`  width="medium"\`, \`  type="\${args.type}"\`, \`  direction="\${args.direction}"\`, \`  align="\${args.align}"\`, \`  className="\${args.className}"\`, '>medium / 4px</Divider>', '<Divider', \`  themeColor="\${args.themeColor}"\`, \`  width="large"\`, \`  type="\${args.type}"\`, \`  direction="\${args.direction}"\`, \`  align="\${args.align}"\`, \`  className="\${args.className}"\`, '>large / 6px</Divider>', '<Divider', \`  themeColor="\${args.themeColor}"\`, \`  width="xlarge"\`, \`  type="\${args.type}"\`, \`  direction="\${args.direction}"\`, \`  align="\${args.align}"\`, \`  className="\${args.className}"\`, '>xlarge / 8px</Divider>'].join('\\n').trim();
        }
      }
    }
  }
}`,...(C=(w=n.parameters)==null?void 0:w.docs)==null?void 0:C.source}}};var N,x,f;o.parameters={...o.parameters,docs:{...(N=o.parameters)==null?void 0:N.docs,source:{originalSource:`{
  name: "線條類型",
  args: {
    themeColor: "",
    width: "small",
    direction: "horizontal",
    align: "center",
    className: ""
  },
  render: args => ({
    components: {
      Divider
    },
    setup() {
      // Create a ref for modelValue to be used with v-model
      return {
        args
      };
    },
    template: \`
            <div :style="{ flexDirection: args.direction === 'horizontal' ? 'column' : 'row' }"
                 style="display:flex; gap: 16px; height: 200px">
                <Divider
                    :themeColor="args.themeColor"
                    :width="args.width"
                    type="solid"
                    :direction="args.direction"
                    :align="args.align"
                    :className="args.className"
                >solid</Divider>
                <Divider
                    :themeColor="args.themeColor"
                    :width="args.width"
                    type="dashed"
                    :direction="args.direction"
                    :align="args.align"
                    :className="args.className"
                >dashed</Divider>
                <Divider
                    :themeColor="args.themeColor"
                    :width="args.width"
                    type="dotted"
                    :direction="args.direction"
                    :align="args.align"
                    :className="args.className"
                >dotted</Divider>
            </div>
        \`
  }),
  // 控制 controls 中能控制的參數
  parameters: {
    controls: {
      // include: ['themeColor', 'label', 'value', 'name' ],
      exclude: ["type"]
    },
    docs: {
      source: {
        transform: (src, storyContext) => {
          const {
            args
          } = storyContext;
          return ['<Divider', \`  themeColor="\${args.themeColor}"\`, \`  width="\${args.width}"\`, \`  type="solid"\`, \`  direction="\${args.direction}"\`, \`  align="\${args.align}"\`, \`  className="\${args.className}"\`, '>solid</Divider>', '<Divider', \`  themeColor="\${args.themeColor}"\`, \`  width="\${args.width}"\`, \`  type="dashed"\`, \`  direction="\${args.direction}"\`, \`  align="\${args.align}"\`, \`  className="\${args.className}"\`, '>dashed</Divider>', '<Divider', \`  themeColor="\${args.themeColor}"\`, \`  width="\${args.width}"\`, \`  type="dotted"\`, \`  direction="\${args.direction}"\`, \`  align="\${args.align}"\`, \`  className="\${args.className}"\`, '>dotted</Divider>'].join('\\n').trim();
        }
      }
    }
  }
}`,...(f=(x=o.parameters)==null?void 0:x.docs)==null?void 0:f.source}}};var z,b,A;l.parameters={...l.parameters,docs:{...(z=l.parameters)==null?void 0:z.docs,source:{originalSource:`{
  name: "線條方向",
  args: {
    themeColor: "",
    width: "small",
    type: "solid",
    className: ""
  },
  render: args => ({
    components: {
      Divider
    },
    setup() {
      // Create a ref for modelValue to be used with v-model
      return {
        args
      };
    },
    template: \`
            <div style="display:flex; justify-content: center; gap: 16px; height: 200px">
                <Divider
                    :themeColor="args.themeColor"
                    :width="args.width"
                    :type="args.type"
                    direction="vertical"
                    align="start"
                    :className="args.className"
                >start</Divider>
                <Divider
                    :themeColor="args.themeColor"
                    :width="args.width"
                    :type="args.type"
                    direction="vertical"
                    align="center"
                    :className="args.className"
                >center</Divider>
                <Divider
                    :themeColor="args.themeColor"
                    :width="args.width"
                    :type="args.type"
                    direction="vertical"
                    align="end"
                    :className="args.className"
                >end</Divider>
            </div>
        \`
  }),
  // 控制 controls 中能控制的參數
  parameters: {
    controls: {
      // include: ['themeColor', 'label', 'value', 'name' ],
      exclude: ["direction", "align"]
    },
    docs: {
      source: {
        transform: (src, storyContext) => {
          const {
            args
          } = storyContext;
          return ['<Divider', \`  themeColor="\${args.themeColor}"\`, \`  width="\${args.width}"\`, \`  type="\${args.type}"\`, \`  direction="vertical"\`, \`  align="start"\`, \`  className="\${args.className}"\`, '>start</Divider>', '<Divider', \`  themeColor="\${args.themeColor}"\`, \`  width="\${args.width}"\`, \`  type="\${args.type}"\`, \`  direction="vertical"\`, \`  align="center"\`, \`  className="\${args.className}"\`, '>center</Divider>', '<Divider', \`  themeColor="\${args.themeColor}"\`, \`  width="\${args.width}"\`, \`  type="\${args.type}"\`, \`  direction="vertical"\`, \`  align="end"\`, \`  className="\${args.className}"\`, '>end</Divider>'].join('\\n').trim();
        }
      }
    }
  }
}`,...(A=(b=l.parameters)==null?void 0:b.docs)==null?void 0:A.source}}};var j,S,V;d.parameters={...d.parameters,docs:{...(j=d.parameters)==null?void 0:j.docs,source:{originalSource:`{
  name: "線條顏色",
  args: {
    width: "small",
    type: "solid",
    direction: "horizontal",
    align: "center",
    className: ""
  },
  render: args => ({
    components: {
      Divider
    },
    setup() {
      // Create a ref for modelValue to be used with v-model
      return {
        args
      };
    },
    template: \`
            <div :style="{ flexDirection: args.direction === 'horizontal' ? 'column' : 'row' }"
                 style="display:flex; gap: 16px; height: 400px">
                <Divider
                    themeColor=""
                    :width="args.width"
                    :type="args.type"
                    :direction="args.direction"
                    :align="args.align"
                    :className=args.className
                >None</Divider>
                <Divider
                    themeColor="primary"
                    :width="args.width"
                    :type="args.type"
                    :direction="args.direction"
                    :align="args.align"
                    :className="args.className"
                >primary</Divider>
                <Divider
                    themeColor="secondary"
                    :width="args.width"
                    :type="args.type"
                    :direction="args.direction"
                    :align="args.align"
                    :className="args.className"
                >secondary</Divider>
                <Divider
                    themeColor="tertiary"
                    :width="args.width"
                    :type="args.type"
                    :direction="args.direction"
                    :align="args.align"
                    :className="args.className"
                >tertiary</Divider>
                <Divider
                    themeColor="success"
                    :width="args.width"
                    :type="args.type"
                    :direction="args.direction"
                    :align="args.align"
                    :className="args.className"
                >success</Divider>
                <Divider
                    themeColor="warning"
                    :width="args.width"
                    :type="args.type"
                    :direction="args.direction"
                    :align="args.align"
                    :className="args.className"
                >warning</Divider>
                <Divider
                    themeColor="error"
                    :width="args.width"
                    :type="args.type"
                    :direction="args.direction"
                    :align="args.align"
                    :className="args.className"
                >error</Divider>
                <Divider
                    themeColor="info"
                    :width="args.width"
                    :type="args.type"
                    :direction="args.direction"
                    :align="args.align"
                    :className="args.className"
                >info</Divider>
            </div>
        \`
  }),
  // 控制 controls 中能控制的參數
  parameters: {
    controls: {
      // include: ['themeColor', 'label', 'value', 'name' ],
      exclude: ["themeColor"]
    },
    docs: {
      source: {
        transform: (src, storyContext) => {
          const {
            args
          } = storyContext;
          return ['<Divider', \`  themeColor=""\`, \`  width="\${args.width}"\`, \`  type="\${args.type}"\`, \`  direction="\${args.direction}"\`, \`  align="\${args.align}"\`, \`  className="\${args.className}"\`, '>None</Divider>', '<Divider', \`  themeColor="primary"\`, \`  width="\${args.width}"\`, \`  type="\${args.type}"\`, \`  direction="\${args.direction}"\`, \`  align="\${args.align}"\`, \`  className="\${args.className}"\`, '>primary</Divider>', '<Divider', \`  themeColor="secondary"\`, \`  width="\${args.width}"\`, \`  type="\${args.type}"\`, \`  direction="\${args.direction}"\`, \`  align="\${args.align}"\`, \`  className="\${args.className}"\`, '>secondary</Divider>', '<Divider', \`  themeColor="tertiary"\`, \`  width="\${args.width}"\`, \`  type="\${args.type}"\`, \`  direction="\${args.direction}"\`, \`  align="\${args.align}"\`, \`  className="\${args.className}"\`, '>tertiary</Divider>', '<Divider', \`  themeColor="success"\`, \`  width="\${args.width}"\`, \`  type="\${args.type}"\`, \`  direction="\${args.direction}"\`, \`  align="\${args.align}"\`, \`  className="\${args.className}"\`, '>success</Divider>', '<Divider', \`  themeColor="warning"\`, \`  width="\${args.width}"\`, \`  type="\${args.type}"\`, \`  direction="\${args.direction}"\`, \`  align="\${args.align}"\`, \`  className="\${args.className}"\`, '>warning</Divider>', '<Divider', \`  themeColor="error"\`, \`  width="\${args.width}"\`, \`  type="\${args.type}"\`, \`  direction="\${args.direction}"\`, \`  align="\${args.align}"\`, \`  className="\${args.className}"\`, '>error</Divider>', '<Divider', \`  themeColor="info"\`, \`  width="\${args.width}"\`, \`  type="\${args.type}"\`, \`  direction="\${args.direction}"\`, \`  align="\${args.align}"\`, \`  className="\${args.className}"\`, '>info</Divider>'].join('\\n').trim();
        }
      }
    }
  }
}`,...(V=(S=d.parameters)==null?void 0:S.docs)==null?void 0:V.source}}};const I=["DividerDefault","DividerContent","DividerWidth","DividerTypes","DividerDirection","DividerColors"];export{d as DividerColors,s as DividerContent,t as DividerDefault,l as DividerDirection,o as DividerTypes,n as DividerWidth,I as __namedExportsOrder,U as default};

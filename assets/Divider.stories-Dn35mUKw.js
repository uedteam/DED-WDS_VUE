import{c as p,g as $,e as k,n as B,o as m}from"./vue.esm-bundler-XWim8Fx5.js";const T={key:0,class:"divider-content"},r={__name:"Divider",props:{layout:{type:String,default:"horizontal",validator:e=>["horizontal","vertical"].includes(e)},width:{type:String,default:"xsmall",validator:e=>["xsmall","small","medium","large","xlarge"].includes(e)},type:{type:String,default:"solid",validator:e=>["solid","dashed","dotted"].includes(e)},themeColor:{type:String,validator:e=>["primary","secondary","tertiary","success","warning","error","info"].includes(e)},align:{type:String,validator:e=>["start","center","end"].includes(e)}},setup(e){const t=e;return(d,j)=>{var g,u;return m(),p("div",{class:B(["divider",`divider-${t.layout}`,`divider-width-${t.width}`,`divider-${t.type}`,t.themeColor?`divider-${t.themeColor}`:"",d.$slots.default?`divider-${t.align}`:""])},[(u=(g=d.$slots).default)!=null&&u.call(g)?(m(),p("div",T,[$(d.$slots,"default")])):k("",!0)],2)}}};r.__docgenInfo={exportName:"default",displayName:"Divider",description:"",tags:{},props:[{name:"layout",type:{name:"string"},defaultValue:{func:!1,value:'"horizontal"'},values:["horizontal","vertical"]},{name:"width",type:{name:"string"},defaultValue:{func:!1,value:'"xsmall"'},values:["xsmall","small","medium","large","xlarge"]},{name:"type",type:{name:"string"},defaultValue:{func:!1,value:'"solid"'},values:["solid","dashed","dotted"]},{name:"themeColor",type:{name:"string"},values:["primary","secondary","tertiary","success","warning","error","info"]},{name:"align",type:{name:"string"},values:["start","center","end"]}],slots:[{name:"default"}],sourceFiles:["/Users/auouser/Desktop/Work_Space/DED-WDS_VUE/libs/src/ui/element/Divider/Divider.vue"]};const U={title:"Design System/Divider",component:r,tags:["autodocs"],argTypes:{layout:{description:"分隔線方向",control:{type:"select"},defaultValue:"horizontal",options:["horizontal","vertical"]},width:{description:"分隔線寬度",control:{type:"select"},options:["xsmall (1px)","small (2px)","medium (4px)","large (6px)","xlarge (8px)"],mapping:{"xsmall (1px)":"xsmall","small (2px)":"xsmall","medium (4px)":"medium","large (6px)":"large","xlarge (8px)":"xlarge"}},type:{description:"分隔線樣式",control:{type:"select"},defaultValue:"solid",options:["solid","dashed","dotted"]},themeColor:{description:"分隔線主題顏色",control:{type:"select"},options:["None","primary","secondary","tertiary","success","warning","error","info"],mapping:{None:null}},align:{description:"文字對齊方式",control:{type:"select"},options:["start","center","end"]}},parameters:{docs:{title:"Divider",description:{component:"Divider 組件的呈現及說明。"}},slots:{default:{description:"分隔線內容",template:"{{ args.default }}"}}}},a={name:"預設項目",args:{default:"Divider Text",layout:"horizontal",width:"small",type:"solid",themeColor:"None",align:"start"},render:e=>({components:{Divider:r},setup(){return{args:e}},template:`
            <div style="display:flex; flex-direction: column; justify-content:center; gap: 16px; height: 200px">
                <Divider
                    :layout="args.layout"
                    :width="args.width"
                    :type="args.type"
                    :themeColor="args.themeColor"
                    :align="args.align"
                >{{args.default}}</Divider>
            </div>
        `}),parameters:{controls:{}}},n={name:"線條類型",args:{layout:"horizontal",width:"small",themeColor:"None",align:"start"},render:e=>({components:{Divider:r},setup(){return{args:e}},template:`
            <div :style="{ flexDirection: args.layout === 'horizontal' ? 'column' : 'row' }"
                 style="display:flex; gap: 16px; height: 200px">
                <Divider
                    :layout="args.layout"
                    :width="args.width"
                    type="solid"
                    :themeColor="args.themeColor"
                    :align="args.align"
                >solid</Divider>
                <Divider
                    :layout="args.layout"
                    :width="args.width"
                    type="dashed"
                    :themeColor="args.themeColor"
                    :align="args.align"
                >dashed</Divider>
                <Divider
                    :layout="args.layout"
                    :width="args.width"
                    type="dotted"
                    :themeColor="args.themeColor"
                    :align="args.align"
                >dotted</Divider>
            </div>
        `}),parameters:{controls:{exclude:["type"]}}},i={name:"線條粗細",args:{layout:"horizontal",width:"small",type:"solid",themeColor:"None",align:"start"},render:e=>({components:{Divider:r},setup(){return{args:e}},template:`
            <div :style="{ flexDirection: args.layout === 'horizontal' ? 'column' : 'row' }"
                    style="display:flex; gap: 16px; height: 400px">
                <Divider
                    :layout="args.layout"
                    width="xsmall"
                    :type="args.type"
                    :themeColor="args.themeColor"
                    :align="args.align"
                >xsmall / 1px</Divider>
                <Divider
                    :layout="args.layout"
                    width="small"
                    :type="args.type"
                    :themeColor="args.themeColor"
                    :align="args.align"
                >small / 2px</Divider>
                <Divider
                    :layout="args.layout"
                    width="medium"
                    :type="args.type"
                    :themeColor="args.themeColor"
                    :align="args.align"
                >medium / 4px</Divider>
                <Divider
                    :layout="args.layout"
                    width="large"
                    :type="args.type"
                    :themeColor="args.themeColor"
                    :align="args.align"
                >large / 6px</Divider>
                <Divider
                    :layout="args.layout"
                    width="xlarge"
                    :type="args.type"
                    :themeColor="args.themeColor"
                    :align="args.align"
                >xlarge / 8px</Divider>
            </div>
        `}),parameters:{controls:{exclude:["width"]}}},l={name:"文字對齊",args:{width:"small",type:"solid",themeColor:"None"},render:e=>({components:{Divider:r},setup(){return{args:e}},template:`
            <div style="display:flex; flex-direction: column; gap: 16px">
                <Divider
                    layout="horizontal"
                    :width="args.width"
                    :type="args.type"
                    :themeColor="args.themeColor"
                    align="start"
                >start</Divider>
                <Divider
                    layout="horizontal"
                    :width="args.width"
                    :type="args.type"
                    :themeColor="args.themeColor"
                    align="center"
                >center</Divider>
                <Divider
                    layout="horizontal"
                    :width="args.width"
                    :type="args.type"
                    :themeColor="args.themeColor"
                    align="end"
                >end</Divider>
            </div>
        `}),parameters:{controls:{exclude:["layout","align"]}}},o={name:"線條方向",args:{width:"small",type:"solid",themeColor:"None"},render:e=>({components:{Divider:r},setup(){return{args:e}},template:`
            <div style="display:flex; justify-content: center; gap: 16px; height: 200px">
                <Divider
                    layout="vertical"
                    :width="args.width"
                    :type="args.type"
                    :themeColor="args.themeColor"
                    align="start"
                >start</Divider>
                <Divider
                    layout="vertical"
                    :width="args.width"
                    :type="args.type"
                    :themeColor="args.themeColor"
                    align="center"
                >center</Divider>
                <Divider
                    layout="vertical"
                    :width="args.width"
                    :type="args.type"
                    :themeColor="args.themeColor"
                    align="end"
                >end</Divider>
            </div>
        `}),parameters:{controls:{exclude:["layout","align"]}}},s={name:"線條顏色",args:{layout:"horizontal",width:"small",type:"solid",themeColor:"None",align:"start"},render:e=>({components:{Divider:r},setup(){return{args:e}},template:`
            <div :style="{ flexDirection: args.layout === 'horizontal' ? 'column' : 'row' }"
                 style="display:flex; gap: 16px; height: 400px">
                <Divider
                    :layout="args.layout"
                    :width="args.width"
                    :type="args.type"
                    :align="args.align"
                >None</Divider>
                <Divider
                    :layout="args.layout"
                    :width="args.width"
                    :type="args.type"
                    themeColor="primary"
                    :align="args.align"
                >primary</Divider>
                <Divider
                    :layout="args.layout"
                    :width="args.width"
                    :type="args.type"
                    themeColor="secondary"
                    :align="args.align"
                >secondary</Divider>
                <Divider
                    :layout="args.layout"
                    :width="args.width"
                    :type="args.type"
                    themeColor="tertiary"
                    :align="args.align"
                >tertiary</Divider>
                <Divider
                    :layout="args.layout"
                    :width="args.width"
                    :type="args.type"
                    themeColor="success"
                    :align="args.align"
                >success</Divider>
                <Divider
                    :layout="args.layout"
                    :width="args.width"
                    :type="args.type"
                    themeColor="warning"
                    :align="args.align"
                >warning</Divider>
                <Divider
                    :layout="args.layout"
                    :width="args.width"
                    :type="args.type"
                    themeColor="error"
                    :align="args.align"
                >error</Divider>
                <Divider
                    :layout="args.layout"
                    :width="args.width"
                    :type="args.type"
                    themeColor="info"
                    :align="args.align"
                >info</Divider>
            </div>
        `}),parameters:{controls:{exclude:["themeColor"]}}};var y,h,c;a.parameters={...a.parameters,docs:{...(y=a.parameters)==null?void 0:y.docs,source:{originalSource:`{
  name: "預設項目",
  args: {
    default: "Divider Text",
    layout: "horizontal",
    width: "small",
    type: "solid",
    themeColor: "None",
    align: "start"
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
            <div style="display:flex; flex-direction: column; justify-content:center; gap: 16px; height: 200px">
                <Divider
                    :layout="args.layout"
                    :width="args.width"
                    :type="args.type"
                    :themeColor="args.themeColor"
                    :align="args.align"
                >{{args.default}}</Divider>
            </div>
        \`
  }),
  // 控制 controls 中能控制的參數
  parameters: {
    controls: {
      // include: ['themeColor', 'label', 'value', 'name' ],
    }
  }
}`,...(c=(h=a.parameters)==null?void 0:h.docs)==null?void 0:c.source}}};var v,D,w;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`{
  name: "線條類型",
  args: {
    layout: "horizontal",
    width: "small",
    themeColor: "None",
    align: "start"
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
            <div :style="{ flexDirection: args.layout === 'horizontal' ? 'column' : 'row' }"
                 style="display:flex; gap: 16px; height: 200px">
                <Divider
                    :layout="args.layout"
                    :width="args.width"
                    type="solid"
                    :themeColor="args.themeColor"
                    :align="args.align"
                >solid</Divider>
                <Divider
                    :layout="args.layout"
                    :width="args.width"
                    type="dashed"
                    :themeColor="args.themeColor"
                    :align="args.align"
                >dashed</Divider>
                <Divider
                    :layout="args.layout"
                    :width="args.width"
                    type="dotted"
                    :themeColor="args.themeColor"
                    :align="args.align"
                >dotted</Divider>
            </div>
        \`
  }),
  // 控制 controls 中能控制的參數
  parameters: {
    controls: {
      // include: ['themeColor', 'label', 'value', 'name' ],
      exclude: ["type"]
    }
  }
}`,...(w=(D=n.parameters)==null?void 0:D.docs)==null?void 0:w.source}}};var C,x,f;i.parameters={...i.parameters,docs:{...(C=i.parameters)==null?void 0:C.docs,source:{originalSource:`{
  name: "線條粗細",
  args: {
    layout: "horizontal",
    width: "small",
    type: "solid",
    themeColor: "None",
    align: "start"
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
            <div :style="{ flexDirection: args.layout === 'horizontal' ? 'column' : 'row' }"
                    style="display:flex; gap: 16px; height: 400px">
                <Divider
                    :layout="args.layout"
                    width="xsmall"
                    :type="args.type"
                    :themeColor="args.themeColor"
                    :align="args.align"
                >xsmall / 1px</Divider>
                <Divider
                    :layout="args.layout"
                    width="small"
                    :type="args.type"
                    :themeColor="args.themeColor"
                    :align="args.align"
                >small / 2px</Divider>
                <Divider
                    :layout="args.layout"
                    width="medium"
                    :type="args.type"
                    :themeColor="args.themeColor"
                    :align="args.align"
                >medium / 4px</Divider>
                <Divider
                    :layout="args.layout"
                    width="large"
                    :type="args.type"
                    :themeColor="args.themeColor"
                    :align="args.align"
                >large / 6px</Divider>
                <Divider
                    :layout="args.layout"
                    width="xlarge"
                    :type="args.type"
                    :themeColor="args.themeColor"
                    :align="args.align"
                >xlarge / 8px</Divider>
            </div>
        \`
  }),
  // 控制 controls 中能控制的參數
  parameters: {
    controls: {
      // include: ['themeColor', 'label', 'value', 'name' ],
      exclude: ["width"]
    }
  }
}`,...(f=(x=i.parameters)==null?void 0:x.docs)==null?void 0:f.source}}};var z,N,A;l.parameters={...l.parameters,docs:{...(z=l.parameters)==null?void 0:z.docs,source:{originalSource:`{
  name: "文字對齊",
  args: {
    width: "small",
    type: "solid",
    themeColor: "None"
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
                    layout="horizontal"
                    :width="args.width"
                    :type="args.type"
                    :themeColor="args.themeColor"
                    align="start"
                >start</Divider>
                <Divider
                    layout="horizontal"
                    :width="args.width"
                    :type="args.type"
                    :themeColor="args.themeColor"
                    align="center"
                >center</Divider>
                <Divider
                    layout="horizontal"
                    :width="args.width"
                    :type="args.type"
                    :themeColor="args.themeColor"
                    align="end"
                >end</Divider>
            </div>
        \`
  }),
  // 控制 controls 中能控制的參數
  parameters: {
    controls: {
      // include: ['themeColor', 'label', 'value', 'name' ],
      exclude: ["layout", "align"]
    }
  }
}`,...(A=(N=l.parameters)==null?void 0:N.docs)==null?void 0:A.source}}};var S,b,E;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`{
  name: "線條方向",
  args: {
    width: "small",
    type: "solid",
    themeColor: "None"
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
                    layout="vertical"
                    :width="args.width"
                    :type="args.type"
                    :themeColor="args.themeColor"
                    align="start"
                >start</Divider>
                <Divider
                    layout="vertical"
                    :width="args.width"
                    :type="args.type"
                    :themeColor="args.themeColor"
                    align="center"
                >center</Divider>
                <Divider
                    layout="vertical"
                    :width="args.width"
                    :type="args.type"
                    :themeColor="args.themeColor"
                    align="end"
                >end</Divider>
            </div>
        \`
  }),
  // 控制 controls 中能控制的參數
  parameters: {
    controls: {
      // include: ['themeColor', 'label', 'value', 'name' ],
      exclude: ["layout", "align"]
    }
  }
}`,...(E=(b=o.parameters)==null?void 0:b.docs)==null?void 0:E.source}}};var V,_,F;s.parameters={...s.parameters,docs:{...(V=s.parameters)==null?void 0:V.docs,source:{originalSource:`{
  name: "線條顏色",
  args: {
    layout: "horizontal",
    width: "small",
    type: "solid",
    themeColor: "None",
    align: "start"
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
            <div :style="{ flexDirection: args.layout === 'horizontal' ? 'column' : 'row' }"
                 style="display:flex; gap: 16px; height: 400px">
                <Divider
                    :layout="args.layout"
                    :width="args.width"
                    :type="args.type"
                    :align="args.align"
                >None</Divider>
                <Divider
                    :layout="args.layout"
                    :width="args.width"
                    :type="args.type"
                    themeColor="primary"
                    :align="args.align"
                >primary</Divider>
                <Divider
                    :layout="args.layout"
                    :width="args.width"
                    :type="args.type"
                    themeColor="secondary"
                    :align="args.align"
                >secondary</Divider>
                <Divider
                    :layout="args.layout"
                    :width="args.width"
                    :type="args.type"
                    themeColor="tertiary"
                    :align="args.align"
                >tertiary</Divider>
                <Divider
                    :layout="args.layout"
                    :width="args.width"
                    :type="args.type"
                    themeColor="success"
                    :align="args.align"
                >success</Divider>
                <Divider
                    :layout="args.layout"
                    :width="args.width"
                    :type="args.type"
                    themeColor="warning"
                    :align="args.align"
                >warning</Divider>
                <Divider
                    :layout="args.layout"
                    :width="args.width"
                    :type="args.type"
                    themeColor="error"
                    :align="args.align"
                >error</Divider>
                <Divider
                    :layout="args.layout"
                    :width="args.width"
                    :type="args.type"
                    themeColor="info"
                    :align="args.align"
                >info</Divider>
            </div>
        \`
  }),
  // 控制 controls 中能控制的參數
  parameters: {
    controls: {
      // include: ['themeColor', 'label', 'value', 'name' ],
      exclude: ["themeColor"]
    }
  }
}`,...(F=(_=s.parameters)==null?void 0:_.docs)==null?void 0:F.source}}};const I=["DividerDefault","DividerTypes","DividerWidth","DividerContent","DividerDirection","DividerColors"];export{s as DividerColors,l as DividerContent,a as DividerDefault,o as DividerDirection,n as DividerTypes,i as DividerWidth,I as __namedExportsOrder,U as default};

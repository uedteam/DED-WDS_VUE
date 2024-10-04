import{_ as r}from"./Divider-PlWTLLgO.js";import"./vue.esm-bundler-CsTC-5Ev.js";const C={title:"Design System/Divider",component:r,tags:["autodocs"],argTypes:{layout:{description:"Divider分隔線方向",control:{type:"radio"},defaultValue:"horizontal",options:["horizontal","vertical"]},type:{description:"Divider分隔線種類",control:{type:"select"},defaultValue:"solid",options:["solid","dashed","dotted"]},themeColor:{description:"主題顏色",control:{type:"select"},options:["default","primary","secondary","tertiary","success","warning","error","info"]},width:{description:"Divider分隔線寬度",control:{type:"select"},options:["xsmall / 1px","small / 2px","medium / 4px","large / 6px","xlarge / 8px"]},align:{description:"Divider分隔線上文字位置",control:{type:"radio"},options:["start","center","end"]}},parameters:{docs:{title:"分隔線",description:{component:"分隔線組件的呈現及說明。"}}}},t={name:"分隔線種類",args:{layout:"horizontal",themeColor:"Default",width:"small"},render:e=>({components:{Divider:r},setup(){return{args:e}},template:`
              <div :style="{ flexDirection: args.layout === 'horizontal' ? 'column' : 'row' }" 
                   style="display:flex; align-items:center; justify-content: center; gap: 16px; height: 200px">
                    <Divider
                        :layout="args.layout"
                        type="solid"
                        :themeColor="args.themeColor"
                        :width="args.width"
                    ></Divider>
                    <Divider
                        :layout="args.layout"
                        type="dashed"
                        :themeColor="args.themeColor"
                        :width="args.width"
                    ></Divider>
                    <Divider
                        :layout="args.layout"
                        type="dotted"
                        :themeColor="args.themeColor"
                        :width="args.width"
                    ></Divider>
              </div>
        `}),parameters:{controls:{}}},a={name:"分隔線粗細",args:{layout:"horizontal",themeColor:"Default",type:"solid"},render:e=>({components:{Divider:r},setup(){return{args:e}},template:`
              <div style="display:flex; flex-direction: column; gap: 16px">
                    <Divider
                        :layout="args.layout"
                        :type="args.type"
                        :themeColor="args.themeColor"
                        width="xsmall"
                        align="start"
                    >xsmall / 1px</Divider>
                    <Divider
                        :layout="args.layout"
                        :type="args.type"
                        :themeColor="args.themeColor"
                        width="small"
                        align="start"
                    >small / 2px</Divider>
                    <Divider
                        :layout="args.layout"
                        :type="args.type"
                        :themeColor="args.themeColor"
                        width="medium"
                        align="start"
                    >medium / 4px</Divider>
                    <Divider
                        :layout="args.layout"
                        :type="args.type"
                        :themeColor="args.themeColor"
                        width="large"
                        align="start"
                    >large / 6px</Divider>
                    <Divider
                        :layout="args.layout"
                        :type="args.type"
                        :themeColor="args.themeColor"
                        width="xlarge"
                        align="start"
                    >xlarge / 8px</Divider>
              </div>
        `}),parameters:{controls:{}}},i={name:"分隔線文字位置",args:{width:"small",type:"solid",themeColor:"Default"},render:e=>({components:{Divider:r},setup(){return{args:e}},template:`
              <div style="display:flex; flex-direction: column; gap: 16px">
                    <Divider
                        layout="horizontal"
                        :type="args.type"
                        :themeColor="args.themeColor"
                        :width="args.width"
                        align="start"
                    >start</Divider>
                    <Divider
                        layout="horizontal"
                        :type="args.type"
                        :themeColor="args.themeColor"
                        :width="args.width"
                        align="center"
                    >center</Divider>
                    <Divider
                        layout="horizontal"
                        :type="args.type"
                        :themeColor="args.themeColor"
                        :width="args.width"
                        align="end"
                    >end</Divider>
              </div>

              <div style="display:flex; justify-content: center; gap: 16px; height: 200px">
                    <Divider
                        layout="vertical"
                        :type="args.type"
                        :themeColor="args.themeColor"
                        :width="args.width"
                        align="start"
                    >start</Divider>
                    <Divider
                        layout="vertical"
                        :type="args.type"
                        :themeColor="args.themeColor"
                        :width="args.width"
                        align="center"
                    >center</Divider>
                    <Divider
                        layout="vertical"
                        :type="args.type"
                        :themeColor="args.themeColor"
                        :width="args.width"
                        align="end"
                    >end</Divider>
                  </div>
        `}),parameters:{controls:{}}},n={name:"分隔線顏色",args:{layout:"horizontal",width:"small",type:"solid",align:"start"},render:e=>({components:{Divider:r},setup(){return{args:e}},template:`
              <div style="display:flex; flex-direction: column; gap: 16px">
                    <Divider
                        :layout="args.layout"
                        :type="args.type"
                        :width="args.width"
                        :align="args.align"
                    >default</Divider>
                    <Divider
                        :layout="args.layout"
                        :type="args.type"
                        themeColor="primary"
                        :width="args.width"
                        :align="args.align"
                    >primary</Divider>
                    <Divider
                        :layout="args.layout"
                        :type="args.type"
                        themeColor="secondary"
                        :width="args.width"
                        :align="args.align"
                    >secondary</Divider>
                    <Divider
                        :layout="args.layout"
                        :type="args.type"
                        themeColor="tertiary"
                        :width="args.width"
                        :align="args.align"
                    >tertiary</Divider>
                    <Divider
                        :layout="args.layout"
                        :type="args.type"
                        themeColor="success"
                        :width="args.width"
                        :align="args.align"
                    >success</Divider>
                    <Divider
                        :layout="args.layout"
                        :type="args.type"
                        themeColor="warning"
                        :width="args.width"
                        :align="args.align"
                    >warning</Divider>
                    <Divider
                        :layout="args.layout"
                        :type="args.type"
                        themeColor="error"
                        :width="args.width"
                        :align="args.align"
                    >error</Divider>
                    <Divider
                        :layout="args.layout"
                        :type="args.type"
                        themeColor="info"
                        :width="args.width"
                        :align="args.align"
                    >info</Divider>
              </div>
        `}),parameters:{controls:{}}};var o,l,s;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
  name: "分隔線種類",
  args: {
    layout: "horizontal",
    themeColor: "Default",
    width: "small"
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
                   style="display:flex; align-items:center; justify-content: center; gap: 16px; height: 200px">
                    <Divider
                        :layout="args.layout"
                        type="solid"
                        :themeColor="args.themeColor"
                        :width="args.width"
                    ></Divider>
                    <Divider
                        :layout="args.layout"
                        type="dashed"
                        :themeColor="args.themeColor"
                        :width="args.width"
                    ></Divider>
                    <Divider
                        :layout="args.layout"
                        type="dotted"
                        :themeColor="args.themeColor"
                        :width="args.width"
                    ></Divider>
              </div>
        \`
  }),
  // 控制 controls 中能控制的參數
  parameters: {
    controls: {
      // include: ['themeColor', 'label', 'value', 'name' ],
    }
  }
}`,...(s=(l=t.parameters)==null?void 0:l.docs)==null?void 0:s.source}}};var d,g,u;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  name: "分隔線粗細",
  args: {
    layout: "horizontal",
    themeColor: "Default",
    type: "solid"
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
                        :layout="args.layout"
                        :type="args.type"
                        :themeColor="args.themeColor"
                        width="xsmall"
                        align="start"
                    >xsmall / 1px</Divider>
                    <Divider
                        :layout="args.layout"
                        :type="args.type"
                        :themeColor="args.themeColor"
                        width="small"
                        align="start"
                    >small / 2px</Divider>
                    <Divider
                        :layout="args.layout"
                        :type="args.type"
                        :themeColor="args.themeColor"
                        width="medium"
                        align="start"
                    >medium / 4px</Divider>
                    <Divider
                        :layout="args.layout"
                        :type="args.type"
                        :themeColor="args.themeColor"
                        width="large"
                        align="start"
                    >large / 6px</Divider>
                    <Divider
                        :layout="args.layout"
                        :type="args.type"
                        :themeColor="args.themeColor"
                        width="xlarge"
                        align="start"
                    >xlarge / 8px</Divider>
              </div>
        \`
  }),
  // 控制 controls 中能控制的參數
  parameters: {
    controls: {
      // include: ['themeColor', 'label', 'value', 'name' ],
    }
  }
}`,...(u=(g=a.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};var y,p,h;i.parameters={...i.parameters,docs:{...(y=i.parameters)==null?void 0:y.docs,source:{originalSource:`{
  name: "分隔線文字位置",
  args: {
    width: "small",
    type: "solid",
    themeColor: "Default"
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
                        :type="args.type"
                        :themeColor="args.themeColor"
                        :width="args.width"
                        align="start"
                    >start</Divider>
                    <Divider
                        layout="horizontal"
                        :type="args.type"
                        :themeColor="args.themeColor"
                        :width="args.width"
                        align="center"
                    >center</Divider>
                    <Divider
                        layout="horizontal"
                        :type="args.type"
                        :themeColor="args.themeColor"
                        :width="args.width"
                        align="end"
                    >end</Divider>
              </div>

              <div style="display:flex; justify-content: center; gap: 16px; height: 200px">
                    <Divider
                        layout="vertical"
                        :type="args.type"
                        :themeColor="args.themeColor"
                        :width="args.width"
                        align="start"
                    >start</Divider>
                    <Divider
                        layout="vertical"
                        :type="args.type"
                        :themeColor="args.themeColor"
                        :width="args.width"
                        align="center"
                    >center</Divider>
                    <Divider
                        layout="vertical"
                        :type="args.type"
                        :themeColor="args.themeColor"
                        :width="args.width"
                        align="end"
                    >end</Divider>
                  </div>
        \`
  }),
  // 控制 controls 中能控制的參數
  parameters: {
    controls: {
      // include: ['themeColor', 'label', 'value', 'name' ],
    }
  }
}`,...(h=(p=i.parameters)==null?void 0:p.docs)==null?void 0:h.source}}};var m,v,D;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: "分隔線顏色",
  args: {
    layout: "horizontal",
    width: "small",
    type: "solid",
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
              <div style="display:flex; flex-direction: column; gap: 16px">
                    <Divider
                        :layout="args.layout"
                        :type="args.type"
                        :width="args.width"
                        :align="args.align"
                    >default</Divider>
                    <Divider
                        :layout="args.layout"
                        :type="args.type"
                        themeColor="primary"
                        :width="args.width"
                        :align="args.align"
                    >primary</Divider>
                    <Divider
                        :layout="args.layout"
                        :type="args.type"
                        themeColor="secondary"
                        :width="args.width"
                        :align="args.align"
                    >secondary</Divider>
                    <Divider
                        :layout="args.layout"
                        :type="args.type"
                        themeColor="tertiary"
                        :width="args.width"
                        :align="args.align"
                    >tertiary</Divider>
                    <Divider
                        :layout="args.layout"
                        :type="args.type"
                        themeColor="success"
                        :width="args.width"
                        :align="args.align"
                    >success</Divider>
                    <Divider
                        :layout="args.layout"
                        :type="args.type"
                        themeColor="warning"
                        :width="args.width"
                        :align="args.align"
                    >warning</Divider>
                    <Divider
                        :layout="args.layout"
                        :type="args.type"
                        themeColor="error"
                        :width="args.width"
                        :align="args.align"
                    >error</Divider>
                    <Divider
                        :layout="args.layout"
                        :type="args.type"
                        themeColor="info"
                        :width="args.width"
                        :align="args.align"
                    >info</Divider>
              </div>
        \`
  }),
  // 控制 controls 中能控制的參數
  parameters: {
    controls: {
      // include: ['themeColor', 'label', 'value', 'name' ],
    }
  }
}`,...(D=(v=n.parameters)==null?void 0:v.docs)==null?void 0:D.source}}};const x=["DividerTypes","DividerWidth","DividerContent","DividerColors"];export{n as DividerColors,i as DividerContent,t as DividerTypes,a as DividerWidth,x as __namedExportsOrder,C as default};

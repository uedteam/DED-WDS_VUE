import{c as s,a as z,e as A,f as S,n as V,o as d}from"./vue.esm-bundler-5cDHsWFH.js";const _={key:0,class:"divider-content"},x={__name:"Divider",props:{layout:{type:String,default:"horizontal",validator:e=>["horizontal","vertical"].includes(e)},type:{type:String,default:"solid",validator:e=>["solid","dashed","dotted"].includes(e)},themeColor:{type:String,validator:e=>["primary","secondary","tertiary","success","warning","error","info"].includes(e)},width:{type:String,default:"xsmall",validator:e=>["xsmall","small","medium","large","xlarge"].includes(e)},align:{type:String,validator:e=>["start","center","end"].includes(e)}},setup(e){const t=e;return(l,E)=>(d(),s("div",{class:V(["divider",`divider-${t.layout}`,`divider-width-${t.width}`,`divider-${t.type}`,t.themeColor?`divider-${t.themeColor}`:"",l.$slots.default?`divider-${t.align}`:""])},[l.$slots.default?(d(),s("div",_,[z("b",null,[A(l.$slots,"default")])])):S("",!0)],2))}},r=x;x.__docgenInfo={exportName:"default",displayName:"Divider",description:"",tags:{},props:[{name:"layout",type:{name:"string"},defaultValue:{func:!1,value:'"horizontal"'},values:["horizontal","vertical"]},{name:"type",type:{name:"string"},defaultValue:{func:!1,value:'"solid"'},values:["solid","dashed","dotted"]},{name:"themeColor",type:{name:"string"},values:["primary","secondary","tertiary","success","warning","error","info"]},{name:"width",type:{name:"string"},defaultValue:{func:!1,value:'"xsmall"'},values:["xsmall","small","medium","large","xlarge"]},{name:"align",type:{name:"string"},values:["start","center","end"]}],slots:[{name:"default"}],sourceFiles:["/Users/auouser/Desktop/Work_Space/DED-WDS_VUE/libs/src/ui/element/Divider/Divider.vue"]};const F={title:"Design System/Divider",component:r,tags:["autodocs"],argTypes:{layout:{description:"Divider分隔線方向",control:{type:"radio"},defaultValue:"horizontal",options:["horizontal","vertical"]},type:{description:"Divider分隔線種類",control:{type:"select"},defaultValue:"solid",options:["solid","dashed","dotted"]},themeColor:{description:"主題顏色",control:{type:"select"},options:["default","primary","secondary","tertiary","success","warning","error","info"]},width:{description:"Divider分隔線寬度",control:{type:"select"},options:["xsmall / 1px","small / 2px","medium / 4px","large / 6px","xlarge / 8px"]},align:{description:"Divider分隔線上文字位置",control:{type:"radio"},options:["start","center","end"]}},parameters:{docs:{title:"分隔線",description:{component:"分隔線組件的呈現及說明。"}}}},a={name:"分隔線種類",args:{layout:"horizontal",themeColor:"Default",width:"small"},render:e=>({components:{Divider:r},setup(){return{args:e}},template:`
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
        `}),parameters:{controls:{}}},i={name:"分隔線粗細",args:{layout:"horizontal",themeColor:"Default",type:"solid"},render:e=>({components:{Divider:r},setup(){return{args:e}},template:`
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
        `}),parameters:{controls:{}}},n={name:"分隔線文字位置",args:{width:"small",type:"solid",themeColor:"Default"},render:e=>({components:{Divider:r},setup(){return{args:e}},template:`
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
        `}),parameters:{controls:{}}},o={name:"分隔線顏色",args:{layout:"horizontal",width:"small",type:"solid",align:"start"},render:e=>({components:{Divider:r},setup(){return{args:e}},template:`
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
        `}),parameters:{controls:{}}};var g,u,y;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(y=(u=a.parameters)==null?void 0:u.docs)==null?void 0:y.source}}};var p,m,h;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(h=(m=i.parameters)==null?void 0:m.docs)==null?void 0:h.source}}};var v,c,D;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(D=(c=n.parameters)==null?void 0:c.docs)==null?void 0:D.source}}};var w,C,f;o.parameters={...o.parameters,docs:{...(w=o.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(f=(C=o.parameters)==null?void 0:C.docs)==null?void 0:f.source}}};const $=["DividerTypes","DividerWidth","DividerContent","DividerColors"];export{o as DividerColors,n as DividerContent,a as DividerTypes,i as DividerWidth,$ as __namedExportsOrder,F as default};

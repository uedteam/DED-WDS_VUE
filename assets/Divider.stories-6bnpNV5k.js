import{c as d,b,q as A,e as E,n as V,o as g}from"./vue.esm-bundler-Bm7qTojY.js";const F={key:0,class:"divider-content"},t={__name:"Divider",props:{layout:{type:String,default:"horizontal",validator:e=>["horizontal","vertical"].includes(e)},width:{type:String,default:"xsmall",validator:e=>["xsmall","small","medium","large","xlarge"].includes(e)},type:{type:String,default:"solid",validator:e=>["solid","dashed","dotted"].includes(e)},themeColor:{type:String,validator:e=>["primary","secondary","tertiary","success","warning","error","info"].includes(e)},align:{type:String,validator:e=>["start","center","end"].includes(e)}},setup(e){const r=e;return(s,_)=>(g(),d("div",{class:V(["divider",`divider-${r.layout}`,`divider-width-${r.width}`,`divider-${r.type}`,r.themeColor?`divider-${r.themeColor}`:"",s.$slots.default?`divider-${r.align}`:""])},[s.$slots.default?(g(),d("div",F,[b("b",null,[A(s.$slots,"default")])])):E("",!0)],2))}};t.__docgenInfo={exportName:"default",displayName:"Divider",description:"",tags:{},props:[{name:"layout",type:{name:"string"},defaultValue:{func:!1,value:'"horizontal"'},values:["horizontal","vertical"]},{name:"width",type:{name:"string"},defaultValue:{func:!1,value:'"xsmall"'},values:["xsmall","small","medium","large","xlarge"]},{name:"type",type:{name:"string"},defaultValue:{func:!1,value:'"solid"'},values:["solid","dashed","dotted"]},{name:"themeColor",type:{name:"string"},values:["primary","secondary","tertiary","success","warning","error","info"]},{name:"align",type:{name:"string"},values:["start","center","end"]}],slots:[{name:"default"}],sourceFiles:["/Users/auouser/Desktop/Work_Space/DED-WDS_VUE/libs/src/ui/element/Divider/Divider.vue"]};const $={title:"Design System/Divider",component:t,tags:["autodocs"],argTypes:{layout:{description:"設定 Divider  方向",control:{type:"radio"},defaultValue:"horizontal",options:["horizontal","vertical"]},width:{description:"設定 Divider  寬度",control:{type:"select"},options:["xsmall (1px)","small (2px)","medium (4px)","large (6px)","xlarge (8px)"],mapping:{"xsmall (1px)":"xsmall","small (2px)":"xsmall","medium (4px)":"medium","large (6px)":"large","xlarge (8px)":"xlarge"}},type:{description:"設定 Divider  種類",control:{type:"select"},defaultValue:"solid",options:["solid","dashed","dotted"]},themeColor:{description:"設定 Divider 主題顏色",control:{type:"select"},options:["None","primary","secondary","tertiary","success","warning","error","info"],mapping:{None:null}},align:{description:"設定 Divider 上文字位置",control:{type:"radio"},options:["start","center","end"]}},parameters:{docs:{title:"Divider",description:{component:"Divider 組件的呈現及說明。"}},slots:{default:{description:"接收 Divider 文字",template:"{{ args.default }}"}}}},a={name:"Divider 基礎樣式",args:{default:"Divider Text",layout:"horizontal",width:"small",type:"solid",themeColor:"None",align:"start"},render:e=>({components:{Divider:t},setup(){return{args:e}},template:`
            <div style="display:flex; align-items:center; justify-content: center; gap: 16px; height: 200px">
                <Divider
                    :layout="args.layout"
                    :width="args.width"
                    :type="args.type"
                    :themeColor="args.themeColor"
                    :align="args.align"
                >{{args.default}}</Divider>
            </div>
        `}),parameters:{controls:{}}},i={name:"Divider 種類",args:{layout:"horizontal",width:"small",themeColor:"None",align:"start"},render:e=>({components:{Divider:t},setup(){return{args:e}},template:`
            <div :style="{ flexDirection: args.layout === 'horizontal' ? 'column' : 'row' }"
                 style="display:flex; align-items:center; justify-content: center; gap: 16px; height: 200px">
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
        `}),parameters:{controls:{exclude:["type"]}}},n={name:"Divider 粗細",args:{layout:"horizontal",width:"small",type:"solid",themeColor:"None",align:"start"},render:e=>({components:{Divider:t},setup(){return{args:e}},template:`
            <div :style="{ flexDirection: args.layout === 'horizontal' ? 'column' : 'row' }"
                 style="display:flex; align-items:center; justify-content: center; gap: 16px; height: 400px">
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
        `}),parameters:{controls:{exclude:["width"]}}},l={name:"Divider 文字位置",args:{width:"small",type:"solid",themeColor:"None"},render:e=>({components:{Divider:t},setup(){return{args:e}},template:`
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
        `}),parameters:{controls:{exclude:["layout","align"]}}},o={name:"Divider 顏色",args:{layout:"horizontal",width:"small",type:"solid",themeColor:"None",align:"start"},render:e=>({components:{Divider:t},setup(){return{args:e}},template:`
            <div :style="{ flexDirection: args.layout === 'horizontal' ? 'column' : 'row' }"
                 style="display:flex; align-items:center; justify-content: center; gap: 16px; height: 600px">
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
        `}),parameters:{controls:{exclude:["themeColor"]}}};var u,p,y;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  name: "Divider 基礎樣式",
  args: {
    default: 'Divider Text',
    layout: "horizontal",
    width: 'small',
    type: 'solid',
    themeColor: "None",
    align: 'start'
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
            <div style="display:flex; align-items:center; justify-content: center; gap: 16px; height: 200px">
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
}`,...(y=(p=a.parameters)==null?void 0:p.docs)==null?void 0:y.source}}};var m,h,c;i.parameters={...i.parameters,docs:{...(m=i.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: "Divider 種類",
  args: {
    layout: "horizontal",
    width: 'small',
    themeColor: "None",
    align: 'start'
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
}`,...(c=(h=i.parameters)==null?void 0:h.docs)==null?void 0:c.source}}};var v,D,w;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`{
  name: "Divider 粗細",
  args: {
    layout: "horizontal",
    width: 'small',
    type: 'solid',
    themeColor: "None",
    align: 'start'
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
                 style="display:flex; align-items:center; justify-content: center; gap: 16px; height: 400px">
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
}`,...(w=(D=n.parameters)==null?void 0:D.docs)==null?void 0:w.source}}};var C,x,f;l.parameters={...l.parameters,docs:{...(C=l.parameters)==null?void 0:C.docs,source:{originalSource:`{
  name: "Divider 文字位置",
  args: {
    width: 'small',
    type: 'solid',
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
}`,...(f=(x=l.parameters)==null?void 0:x.docs)==null?void 0:f.source}}};var z,N,S;o.parameters={...o.parameters,docs:{...(z=o.parameters)==null?void 0:z.docs,source:{originalSource:`{
  name: "Divider 顏色",
  args: {
    layout: "horizontal",
    width: 'small',
    type: 'solid',
    themeColor: "None",
    align: 'start'
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
                 style="display:flex; align-items:center; justify-content: center; gap: 16px; height: 600px">
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
}`,...(S=(N=o.parameters)==null?void 0:N.docs)==null?void 0:S.source}}};const k=["DividerDefault","DividerTypes","DividerWidth","DividerContent","DividerColors"];export{o as DividerColors,l as DividerContent,a as DividerDefault,i as DividerTypes,n as DividerWidth,k as __namedExportsOrder,$ as default};

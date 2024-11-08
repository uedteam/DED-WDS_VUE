import{a as p,D as F,h as j,n as B,o as m}from"./vue.esm-bundler-wiEVvyCh.js";const k={key:0,class:"divider-content"},a={__name:"Divider",props:{layout:{type:String,default:"horizontal",validator:e=>["horizontal","vertical"].includes(e)},width:{type:String,default:"xsmall",validator:e=>["xsmall","small","medium","large","xlarge"].includes(e)},type:{type:String,default:"solid",validator:e=>["solid","dashed","dotted"].includes(e)},themeColor:{type:String,validator:e=>["primary","secondary","tertiary","success","warning","error","info"].includes(e)},align:{type:String,validator:e=>["start","center","end"].includes(e)}},setup(e){const t=e;return(r,T)=>{var g,u;return m(),p("div",{class:B(["divider",`divider-${t.layout}`,`divider-width-${t.width}`,`divider-${t.type}`,t.themeColor?`divider-${t.themeColor}`:"",r.$slots.default?`divider-${t.align}`:""])},[(u=(g=r.$slots).default)!=null&&u.call(g)?(m(),p("div",k,[F(r.$slots,"default")])):j("",!0)],2)}}};a.__docgenInfo={exportName:"default",displayName:"Divider",description:"",tags:{},props:[{name:"layout",type:{name:"string"},defaultValue:{func:!1,value:'"horizontal"'},values:["horizontal","vertical"]},{name:"width",type:{name:"string"},defaultValue:{func:!1,value:'"xsmall"'},values:["xsmall","small","medium","large","xlarge"]},{name:"type",type:{name:"string"},defaultValue:{func:!1,value:'"solid"'},values:["solid","dashed","dotted"]},{name:"themeColor",type:{name:"string"},values:["primary","secondary","tertiary","success","warning","error","info"]},{name:"align",type:{name:"string"},values:["start","center","end"]}],slots:[{name:"default"}],sourceFiles:["D:/98_測試/up/DED-WDS_VUE/libs/src/ui/element/Divider/Divider.vue"]};const I={title:"Design System/Divider",component:a,tags:["autodocs"],argTypes:{layout:{description:"分隔線方向",control:{type:"select"},defaultValue:"horizontal",options:["horizontal","vertical"]},width:{description:"分隔線寬度",control:{type:"select",labels:{xsmall:"xsmall (1px)",small:"small (2px)",medium:"medium (4px)",large:"large (6px)",xlarge:"xlarge (8px)"}},options:["xsmall","small","medium","large","xlarge"]},type:{description:"分隔線樣式",control:{type:"select"},defaultValue:"solid",options:["solid","dashed","dotted"]},themeColor:{description:"分隔線主題顏色",control:{type:"select"},options:["None","primary","secondary","tertiary","success","warning","error","info"],mapping:{None:null}},align:{description:"文字對齊方式",control:{type:"select"},options:["start","center","end"]}},parameters:{docs:{title:"Divider",description:{component:"Divider 組件的呈現及說明。"}},slots:{default:{description:"分隔線內容",template:"{{ args.default }}"}}}},n={name:"預設項目",args:{default:"分隔線",layout:"horizontal",width:"small",type:"solid",themeColor:"None",align:"center"},render:e=>({components:{Divider:a},setup(){return{args:e}},template:`
            <div style="display:flex; flex-direction: column; justify-content:center; gap: 16px; height: 200px">
                <Divider
                    :layout="args.layout"
                    :width="args.width"
                    :type="args.type"
                    :themeColor="args.themeColor"
                    :align="args.align"
                >{{args.default}}</Divider>
            </div>
        `}),parameters:{controls:{},docs:{source:{transform:(e,t)=>{const{args:r}=t;return["<Divider",`  layout="${r.layout}"`,`  width="${r.width}"`,`  type="${r.type}"`,`  themeColor="${r.themeColor}"`,`  align="${r.align}"`,">",`  ${r.default}`,"</Divider>"].join(`
`).trim()}}}}},i={name:"文字對齊",args:{width:"small",type:"solid",themeColor:"None"},render:e=>({components:{Divider:a},setup(){return{args:e}},template:`
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
        `}),parameters:{controls:{exclude:["layout","align"]}}},o={name:"線條粗細",args:{layout:"horizontal",width:"small",type:"solid",themeColor:"None",align:"center"},render:e=>({components:{Divider:a},setup(){return{args:e}},template:`
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
        `}),parameters:{controls:{exclude:["width"]}}},l={name:"線條類型",args:{layout:"horizontal",width:"small",themeColor:"None",align:"center"},render:e=>({components:{Divider:a},setup(){return{args:e}},template:`
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
        `}),parameters:{controls:{exclude:["type"]}}},s={name:"線條方向",args:{width:"small",type:"solid",themeColor:"None"},render:e=>({components:{Divider:a},setup(){return{args:e}},template:`
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
        `}),parameters:{controls:{exclude:["layout","align"]}}},d={name:"線條顏色",args:{layout:"horizontal",width:"small",type:"solid",themeColor:"None",align:"center"},render:e=>({components:{Divider:a},setup(){return{args:e}},template:`
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
        `}),parameters:{controls:{exclude:["themeColor"]}}};var y,h,c;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:`{
  name: "預設項目",
  args: {
    default: "分隔線",
    layout: "horizontal",
    width: "small",
    type: "solid",
    themeColor: "None",
    align: "center"
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
    },
    docs: {
      source: {
        transform: (src, storyContext) => {
          const {
            args
          } = storyContext;
          return ['<Divider', \`  layout="\${args.layout}"\`, \`  width="\${args.width}"\`, \`  type="\${args.type}"\`, \`  themeColor="\${args.themeColor}"\`, \`  align="\${args.align}"\`, '>', \`  \${args.default}\`, '</Divider>'].join('\\n').trim();
        }
      }
    }
  }
}`,...(c=(h=n.parameters)==null?void 0:h.docs)==null?void 0:c.source}}};var v,D,C;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(C=(D=i.parameters)==null?void 0:D.docs)==null?void 0:C.source}}};var w,x,f;o.parameters={...o.parameters,docs:{...(w=o.parameters)==null?void 0:w.docs,source:{originalSource:`{
  name: "線條粗細",
  args: {
    layout: "horizontal",
    width: "small",
    type: "solid",
    themeColor: "None",
    align: "center"
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
}`,...(f=(x=o.parameters)==null?void 0:x.docs)==null?void 0:f.source}}};var z,$,A;l.parameters={...l.parameters,docs:{...(z=l.parameters)==null?void 0:z.docs,source:{originalSource:`{
  name: "線條類型",
  args: {
    layout: "horizontal",
    width: "small",
    themeColor: "None",
    align: "center"
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
}`,...(A=($=l.parameters)==null?void 0:$.docs)==null?void 0:A.source}}};var N,b,S;s.parameters={...s.parameters,docs:{...(N=s.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
}`,...(S=(b=s.parameters)==null?void 0:b.docs)==null?void 0:S.source}}};var E,V,_;d.parameters={...d.parameters,docs:{...(E=d.parameters)==null?void 0:E.docs,source:{originalSource:`{
  name: "線條顏色",
  args: {
    layout: "horizontal",
    width: "small",
    type: "solid",
    themeColor: "None",
    align: "center"
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
}`,...(_=(V=d.parameters)==null?void 0:V.docs)==null?void 0:_.source}}};const O=["DividerDefault","DividerContent","DividerWidth","DividerTypes","DividerDirection","DividerColors"];export{d as DividerColors,i as DividerContent,n as DividerDefault,s as DividerDirection,l as DividerTypes,o as DividerWidth,O as __namedExportsOrder,I as default};

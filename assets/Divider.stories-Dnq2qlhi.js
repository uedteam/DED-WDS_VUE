import{a as u,r as F,f as N,n as B,o as h}from"./vue.esm-bundler-jfoHxfC9.js";const k={key:0,class:"divider-content"},a={__name:"Divider",props:{layout:{type:String,default:"horizontal",validator:r=>["horizontal","vertical"].includes(r)},width:{type:String,default:"xsmall",validator:r=>["xsmall","small","medium","large","xlarge"].includes(r)},type:{type:String,default:"solid",validator:r=>["solid","dashed","dotted"].includes(r)},themeColor:{type:String,validator:r=>["primary","secondary","tertiary","success","warning","error","info"].includes(r)},align:{type:String,validator:r=>["start","center","end"].includes(r)}},setup(r){const t=r;return(e,T)=>{var g,y;return h(),u("div",{class:B(["divider",`divider-${t.layout}`,`divider-width-${t.width}`,`divider-${t.type}`,t.themeColor?`divider-${t.themeColor}`:"",e.$slots.default?`divider-${t.align}`:""])},[(y=(g=e.$slots).default)!=null&&y.call(g)?(h(),u("div",k,[F(e.$slots,"default")])):N("",!0)],2)}}};a.__docgenInfo={exportName:"default",displayName:"Divider",description:"",tags:{},props:[{name:"layout",type:{name:"string"},defaultValue:{func:!1,value:'"horizontal"'},values:["horizontal","vertical"]},{name:"width",type:{name:"string"},defaultValue:{func:!1,value:'"xsmall"'},values:["xsmall","small","medium","large","xlarge"]},{name:"type",type:{name:"string"},defaultValue:{func:!1,value:'"solid"'},values:["solid","dashed","dotted"]},{name:"themeColor",type:{name:"string"},values:["primary","secondary","tertiary","success","warning","error","info"]},{name:"align",type:{name:"string"},values:["start","center","end"]}],slots:[{name:"default"}],sourceFiles:["D:/98_測試/up/DED-WDS_VUE/libs/src/ui/element/Divider/Divider.vue"]};const I={title:"Design System/Divider",component:a,tags:["autodocs"],argTypes:{layout:{description:"分隔線方向",control:{type:"select"},defaultValue:"horizontal",options:["horizontal","vertical"]},width:{description:"分隔線寬度",control:{type:"select",labels:{xsmall:"xsmall (1px)",small:"small (2px)",medium:"medium (4px)",large:"large (6px)",xlarge:"xlarge (8px)"}},options:["xsmall","small","medium","large","xlarge"]},type:{description:"分隔線樣式",control:{type:"select"},defaultValue:"solid",options:["solid","dashed","dotted"]},themeColor:{description:"分隔線主題顏色",control:{type:"select",labels:{"":"None",primary:"primary",secondary:"secondary",tertiary:"tertiary",success:"success",warning:"warning",error:"error",info:"info"}},options:["","primary","secondary","tertiary","success","warning","error","info"]},align:{description:"文字對齊方式",control:{type:"select"},options:["start","center","end"]}},parameters:{docs:{title:"Divider",description:{component:"Divider 組件的呈現及說明。"}},slots:{default:{description:"分隔線內容",template:"{{ args.default }}"}}}},i={name:"預設項目",args:{default:"分隔線",layout:"horizontal",width:"small",type:"solid",themeColor:"",align:"center"},render:r=>({components:{Divider:a},setup(){return{args:r}},template:`
            <div style="display:flex; flex-direction: column; justify-content:center; gap: 16px; height: 200px">
                <Divider
                    :layout="args.layout"
                    :width="args.width"
                    :type="args.type"
                    :themeColor="args.themeColor"
                    :align="args.align"
                >{{args.default}}</Divider>
            </div>
        `}),parameters:{controls:{},docs:{source:{transform:(r,t)=>{const{args:e}=t;return["<Divider",`  layout="${e.layout}"`,`  width="${e.width}"`,`  type="${e.type}"`,`  themeColor="${e.themeColor}"`,`  align="${e.align}"`,">",`  ${e.default}`,"</Divider>"].join(`
`).trim()}}}}},n={name:"文字對齊",args:{width:"small",type:"solid",themeColor:""},render:r=>({components:{Divider:a},setup(){return{args:r}},template:`
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
        `}),parameters:{controls:{exclude:["layout","align"]},docs:{source:{transform:(r,t)=>{const{args:e}=t;return["<Divider",'  layout="horizontal"',`  width="${e.width}"`,`  type="${e.type}"`,`  themeColor="${e.themeColor}"`,'  align="start"',">start</Divider>","<Divider",'  layout="horizontal"',`  width="${e.width}"`,`  type="${e.type}"`,`  themeColor="${e.themeColor}"`,'  align="center"',">center</Divider>","<Divider",'  layout="horizontal"',`  width="${e.width}"`,`  type="${e.type}"`,`  themeColor="${e.themeColor}"`,'  align="end"',">end</Divider>"].join(`
`).trim()}}}}},o={name:"線條粗細",args:{layout:"horizontal",width:"small",type:"solid",themeColor:"",align:"center"},render:r=>({components:{Divider:a},setup(){return{args:r}},template:`
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
        `}),parameters:{controls:{exclude:["width"]},docs:{source:{transform:(r,t)=>{const{args:e}=t;return["<Divider",`  layout="${e.layout}"`,'  width="xsmall"',`  type="${e.type}"`,`  themeColor="${e.themeColor}"`,`  align="${e.align}"`,">xsmall / 1px</Divider>","<Divider",`  layout="${e.layout}"`,'  width="small"',`  type="${e.type}"`,`  themeColor="${e.themeColor}"`,`  align="${e.align}"`,">small / 2px</Divider>","<Divider",`  layout="${e.layout}"`,'  width="medium"',`  type="${e.type}"`,`  themeColor="${e.themeColor}"`,`  align="${e.align}"`,">medium / 4px</Divider>","<Divider",`  layout="${e.layout}"`,'  width="large"',`  type="${e.type}"`,`  themeColor="${e.themeColor}"`,`  align="${e.align}"`,">large / 6px</Divider>","<Divider",`  layout="${e.layout}"`,'  width="xlarge"',`  type="${e.type}"`,`  themeColor="${e.themeColor}"`,`  align="${e.align}"`,">xlarge / 8px</Divider>"].join(`
`).trim()}}}}},l={name:"線條類型",args:{layout:"horizontal",width:"small",themeColor:"",align:"center"},render:r=>({components:{Divider:a},setup(){return{args:r}},template:`
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
        `}),parameters:{controls:{exclude:["type"]},docs:{source:{transform:(r,t)=>{const{args:e}=t;return["<Divider",`  layout="${e.layout}"`,`  width="${e.width}"`,'  type="solid"',`  themeColor="${e.themeColor}"`,`  align="${e.align}"`,">solid</Divider>","<Divider",`  layout="${e.layout}"`,`  width="${e.width}"`,'  type="dashed"',`  themeColor="${e.themeColor}"`,`  align="${e.align}"`,">dashed</Divider>","<Divider",`  layout="${e.layout}"`,`  width="${e.width}"`,'  type="dotted"',`  themeColor="${e.themeColor}"`,`  align="${e.align}"`,">dotted</Divider>"].join(`
`).trim()}}}}},s={name:"線條方向",args:{width:"small",type:"solid",themeColor:""},render:r=>({components:{Divider:a},setup(){return{args:r}},template:`
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
        `}),parameters:{controls:{exclude:["layout","align"]},docs:{source:{transform:(r,t)=>{const{args:e}=t;return["<Divider",'  layout="vertical"',`  width="${e.width}"`,`  type="${e.type}"`,`  themeColor="${e.themeColor}"`,'  align="start"',">start</Divider>","<Divider",'  layout="vertical"',`  width="${e.width}"`,`  type="${e.type}"`,`  themeColor="${e.themeColor}"`,'  align="center"',">center</Divider>","<Divider",'  layout="vertical"',`  width="${e.width}"`,`  type="${e.type}"`,`  themeColor="${e.themeColor}"`,'  align="end"',">end</Divider>"].join(`
`).trim()}}}}},d={name:"線條顏色",args:{layout:"horizontal",width:"small",type:"solid",align:"center"},render:r=>({components:{Divider:a},setup(){return{args:r}},template:`
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
        `}),parameters:{controls:{exclude:["themeColor"]},docs:{source:{transform:(r,t)=>{const{args:e}=t;return["<Divider",`  layout="${e.layout}"`,`  width="${e.width}"`,`  type="${e.type}"`,'  themeColor=""',`  align="${e.align}"`,">None</Divider>","<Divider",`  layout="${e.layout}"`,`  width="${e.width}"`,`  type="${e.type}"`,'  themeColor="primary"',`  align="${e.align}"`,">primary</Divider>","<Divider",`  layout="${e.layout}"`,`  width="${e.width}"`,`  type="${e.type}"`,'  themeColor="secondary"',`  align="${e.align}"`,">secondary</Divider>","<Divider",`  layout="${e.layout}"`,`  width="${e.width}"`,`  type="${e.type}"`,'  themeColor="tertiary"',`  align="${e.align}"`,">tertiary</Divider>","<Divider",`  layout="${e.layout}"`,`  width="${e.width}"`,`  type="${e.type}"`,'  themeColor="success"',`  align="${e.align}"`,">success</Divider>","<Divider",`  layout="${e.layout}"`,`  width="${e.width}"`,`  type="${e.type}"`,'  themeColor="warning"',`  align="${e.align}"`,">warning</Divider>","<Divider",`  layout="${e.layout}"`,`  width="${e.width}"`,`  type="${e.type}"`,'  themeColor="error"',`  align="${e.align}"`,">error</Divider>","<Divider",`  layout="${e.layout}"`,`  width="${e.width}"`,`  type="${e.type}"`,'  themeColor="info"',`  align="${e.align}"`,">info</Divider>"].join(`
`).trim()}}}}};var m,p,c;i.parameters={...i.parameters,docs:{...(m=i.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: '預設項目',
  args: {
    default: '分隔線',
    layout: 'horizontal',
    width: 'small',
    type: 'solid',
    themeColor: '',
    align: 'center'
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
}`,...(c=(p=i.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};var v,D,w;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`{
  name: '文字對齊',
  args: {
    width: 'small',
    type: 'solid',
    themeColor: ''
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
      exclude: ['layout', 'align']
    },
    docs: {
      source: {
        transform: (src, storyContext) => {
          const {
            args
          } = storyContext;
          return ['<Divider', \`  layout="horizontal"\`, \`  width="\${args.width}"\`, \`  type="\${args.type}"\`, \`  themeColor="\${args.themeColor}"\`, \`  align="start"\`, '>start</Divider>', '<Divider', \`  layout="horizontal"\`, \`  width="\${args.width}"\`, \`  type="\${args.type}"\`, \`  themeColor="\${args.themeColor}"\`, \`  align="center"\`, '>center</Divider>', '<Divider', \`  layout="horizontal"\`, \`  width="\${args.width}"\`, \`  type="\${args.type}"\`, \`  themeColor="\${args.themeColor}"\`, \`  align="end"\`, '>end</Divider>'].join('\\n').trim();
        }
      }
    }
  }
}`,...(w=(D=n.parameters)==null?void 0:D.docs)==null?void 0:w.source}}};var C,$,x;o.parameters={...o.parameters,docs:{...(C=o.parameters)==null?void 0:C.docs,source:{originalSource:`{
  name: '線條粗細',
  args: {
    layout: 'horizontal',
    width: 'small',
    type: 'solid',
    themeColor: '',
    align: 'center'
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
      exclude: ['width']
    },
    docs: {
      source: {
        transform: (src, storyContext) => {
          const {
            args
          } = storyContext;
          return ['<Divider', \`  layout="\${args.layout}"\`, \`  width="xsmall"\`, \`  type="\${args.type}"\`, \`  themeColor="\${args.themeColor}"\`, \`  align="\${args.align}"\`, '>xsmall / 1px</Divider>', '<Divider', \`  layout="\${args.layout}"\`, \`  width="small"\`, \`  type="\${args.type}"\`, \`  themeColor="\${args.themeColor}"\`, \`  align="\${args.align}"\`, '>small / 2px</Divider>', '<Divider', \`  layout="\${args.layout}"\`, \`  width="medium"\`, \`  type="\${args.type}"\`, \`  themeColor="\${args.themeColor}"\`, \`  align="\${args.align}"\`, '>medium / 4px</Divider>', '<Divider', \`  layout="\${args.layout}"\`, \`  width="large"\`, \`  type="\${args.type}"\`, \`  themeColor="\${args.themeColor}"\`, \`  align="\${args.align}"\`, '>large / 6px</Divider>', '<Divider', \`  layout="\${args.layout}"\`, \`  width="xlarge"\`, \`  type="\${args.type}"\`, \`  themeColor="\${args.themeColor}"\`, \`  align="\${args.align}"\`, '>xlarge / 8px</Divider>'].join('\\n').trim();
        }
      }
    }
  }
}`,...(x=($=o.parameters)==null?void 0:$.docs)==null?void 0:x.source}}};var f,z,A;l.parameters={...l.parameters,docs:{...(f=l.parameters)==null?void 0:f.docs,source:{originalSource:`{
  name: '線條類型',
  args: {
    layout: 'horizontal',
    width: 'small',
    themeColor: '',
    align: 'center'
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
      exclude: ['type']
    },
    docs: {
      source: {
        transform: (src, storyContext) => {
          const {
            args
          } = storyContext;
          return ['<Divider', \`  layout="\${args.layout}"\`, \`  width="\${args.width}"\`, \`  type="solid"\`, \`  themeColor="\${args.themeColor}"\`, \`  align="\${args.align}"\`, '>solid</Divider>', '<Divider', \`  layout="\${args.layout}"\`, \`  width="\${args.width}"\`, \`  type="dashed"\`, \`  themeColor="\${args.themeColor}"\`, \`  align="\${args.align}"\`, '>dashed</Divider>', '<Divider', \`  layout="\${args.layout}"\`, \`  width="\${args.width}"\`, \`  type="dotted"\`, \`  themeColor="\${args.themeColor}"\`, \`  align="\${args.align}"\`, '>dotted</Divider>'].join('\\n').trim();
        }
      }
    }
  }
}`,...(A=(z=l.parameters)==null?void 0:z.docs)==null?void 0:A.source}}};var j,b,S;s.parameters={...s.parameters,docs:{...(j=s.parameters)==null?void 0:j.docs,source:{originalSource:`{
  name: '線條方向',
  args: {
    width: 'small',
    type: 'solid',
    themeColor: ''
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
      exclude: ['layout', 'align']
    },
    docs: {
      source: {
        transform: (src, storyContext) => {
          const {
            args
          } = storyContext;
          return ['<Divider', \`  layout="vertical"\`, \`  width="\${args.width}"\`, \`  type="\${args.type}"\`, \`  themeColor="\${args.themeColor}"\`, \`  align="start"\`, '>start</Divider>', '<Divider', \`  layout="vertical"\`, \`  width="\${args.width}"\`, \`  type="\${args.type}"\`, \`  themeColor="\${args.themeColor}"\`, \`  align="center"\`, '>center</Divider>', '<Divider', \`  layout="vertical"\`, \`  width="\${args.width}"\`, \`  type="\${args.type}"\`, \`  themeColor="\${args.themeColor}"\`, \`  align="end"\`, '>end</Divider>'].join('\\n').trim();
        }
      }
    }
  }
}`,...(S=(b=s.parameters)==null?void 0:b.docs)==null?void 0:S.source}}};var E,V,_;d.parameters={...d.parameters,docs:{...(E=d.parameters)==null?void 0:E.docs,source:{originalSource:`{
  name: '線條顏色',
  args: {
    layout: 'horizontal',
    width: 'small',
    type: 'solid',
    align: 'center'
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
      exclude: ['themeColor']
    },
    docs: {
      source: {
        transform: (src, storyContext) => {
          const {
            args
          } = storyContext;
          return ['<Divider', \`  layout="\${args.layout}"\`, \`  width="\${args.width}"\`, \`  type="\${args.type}"\`, \`  themeColor=""\`, \`  align="\${args.align}"\`, '>None</Divider>', '<Divider', \`  layout="\${args.layout}"\`, \`  width="\${args.width}"\`, \`  type="\${args.type}"\`, \`  themeColor="primary"\`, \`  align="\${args.align}"\`, '>primary</Divider>', '<Divider', \`  layout="\${args.layout}"\`, \`  width="\${args.width}"\`, \`  type="\${args.type}"\`, \`  themeColor="secondary"\`, \`  align="\${args.align}"\`, '>secondary</Divider>', '<Divider', \`  layout="\${args.layout}"\`, \`  width="\${args.width}"\`, \`  type="\${args.type}"\`, \`  themeColor="tertiary"\`, \`  align="\${args.align}"\`, '>tertiary</Divider>', '<Divider', \`  layout="\${args.layout}"\`, \`  width="\${args.width}"\`, \`  type="\${args.type}"\`, \`  themeColor="success"\`, \`  align="\${args.align}"\`, '>success</Divider>', '<Divider', \`  layout="\${args.layout}"\`, \`  width="\${args.width}"\`, \`  type="\${args.type}"\`, \`  themeColor="warning"\`, \`  align="\${args.align}"\`, '>warning</Divider>', '<Divider', \`  layout="\${args.layout}"\`, \`  width="\${args.width}"\`, \`  type="\${args.type}"\`, \`  themeColor="error"\`, \`  align="\${args.align}"\`, '>error</Divider>', '<Divider', \`  layout="\${args.layout}"\`, \`  width="\${args.width}"\`, \`  type="\${args.type}"\`, \`  themeColor="info"\`, \`  align="\${args.align}"\`, '>info</Divider>'].join('\\n').trim();
        }
      }
    }
  }
}`,...(_=(V=d.parameters)==null?void 0:V.docs)==null?void 0:_.source}}};const O=["DividerDefault","DividerContent","DividerWidth","DividerTypes","DividerDirection","DividerColors"];export{d as DividerColors,n as DividerContent,i as DividerDefault,s as DividerDirection,l as DividerTypes,o as DividerWidth,O as __namedExportsOrder,I as default};

import{c,r as V,b as j,n as E,o as g}from"./vue.esm-bundler-g0-RGFhA.js";const S={key:0,class:"ded-divider-content"},r={__name:"Divider",props:{width:{type:String,default:"xsmall",validator:i=>["xsmall","small","medium","large","xlarge"].includes(i)},type:{type:String,default:"solid",validator:i=>["solid","dashed","dotted"].includes(i)},direction:{type:String,default:"horizontal",validator:i=>["horizontal","vertical"].includes(i)},align:{type:String,default:"center",validator:i=>["start","center","end"].includes(i)},className:{type:String,default:""}},setup(i){const a=i;return(e,_)=>(g(),c("div",{class:E(["ded-divider",`ded-divider-${a.direction}`,`ded-divider-width-${a.width}`,`ded-divider-${a.type}`,e.$slots.default?`ded-divider-${a.align}`:"",...a.className.split(" ")])},[e.$slots.default&&e.$slots.default().some(A=>{var o;return(o=A.children)==null?void 0:o.trim()})?(g(),c("div",S,[V(e.$slots,"default")])):j("",!0)],2))}};r.__docgenInfo={exportName:"default",displayName:"Divider",description:"",tags:{},props:[{name:"width",type:{name:"string"},defaultValue:{func:!1,value:'"xsmall"'},values:["xsmall","small","medium","large","xlarge"]},{name:"type",type:{name:"string"},defaultValue:{func:!1,value:'"solid"'},values:["solid","dashed","dotted"]},{name:"direction",type:{name:"string"},defaultValue:{func:!1,value:'"horizontal"'},values:["horizontal","vertical"]},{name:"align",type:{name:"string"},defaultValue:{func:!1,value:'"center"'},values:["start","center","end"]},{name:"className",type:{name:"string"},defaultValue:{func:!1,value:'""'}}],slots:[{name:"default"}],sourceFiles:["D:/98_測試/up/DED-WDS_VUE/libs/src/ui/element/Divider/Divider.vue"]};const B={title:"Component/Divider",component:r,tags:["autodocs"],argTypes:{width:{description:"線條寬度",control:{type:"select"},options:["xsmall","small","medium","large","xlarge"],table:{type:{summary:"xsmall | small | medium | large | xlarge"}}},type:{description:"線條樣式",control:{type:"select"},defaultValue:"solid",options:["solid","dashed","dotted"],table:{type:{summary:"solid | dashed | dotted"}}},direction:{description:"線條方向",control:{type:"select"},defaultValue:"horizontal",options:["horizontal","vertical"],table:{type:{summary:"horizontal | vertical"}}},align:{description:"文字位置",control:{type:"select"},options:["start","center","end"],table:{type:{summary:"start | center | end"}}},className:{description:"客製化樣式",control:{type:"text"}},default:{description:"分隔線內容",control:{type:"text"}}},parameters:{docs:{title:"Divider",description:{component:"Divider 組件的呈現及說明。"}}}},t={name:"預設項目",args:{width:"small",type:"solid",direction:"horizontal",align:"center",default:"Divider",className:""},render:i=>({components:{Divider:r},setup(){return{args:i}},template:`
                <Divider
                    :width="args.width"
                    :type="args.type"
                    :direction="args.direction"
                    :align="args.align"
                    :className="args.className"
                >{{args.default}}</Divider>
        `}),parameters:{controls:{},docs:{source:{transform:(i,a)=>{const{args:e}=a;return["<Divider",`  width="${e.width}"`,`  type="${e.type}"`,`  direction="${e.direction}"`,`  align="${e.align}"`,`  className="${e.className}"`,">",`  ${e.default}`,"</Divider>"].join(`
`).trim()}}}}},n={name:"文字對齊",args:{width:"small",type:"solid",className:""},render:i=>({components:{Divider:r},setup(){return{args:i}},template:`
            <div style="display:flex; flex-direction: column; gap: 16px">
                <Divider
                    :width="args.width"
                    :type="args.type"
                    direction="horizontal"
                    align="start"
                    :className="args.className"
                >start</Divider>
                <Divider
                    :width="args.width"
                    :type="args.type"
                    direction="horizontal"
                    align="center"
                    :className="args.className"
                >center</Divider>
                <Divider
                    :width="args.width"
                    :type="args.type"
                    direction="horizontal"
                    align="end"
                    :className="args.className"
                >end</Divider>
            </div>
        `}),parameters:{controls:{exclude:["direction","align"]},docs:{source:{transform:(i,a)=>{const{args:e}=a;return["<Divider",`  width="${e.width}"`,`  type="${e.type}"`,`  themeColor="${e.themeColor}"`,'  align="start"',`  className="${e.className}"`,">start</Divider>","<Divider",`  width="${e.width}"`,`  type="${e.type}"`,`  themeColor="${e.themeColor}"`,'  align="center"',`  className="${e.className}"`,">center</Divider>","<Divider",`  width="${e.width}"`,`  type="${e.type}"`,`  themeColor="${e.themeColor}"`,'  align="end"',`  className="${e.className}"`,">end</Divider>"].join(`
`).trim()}}}}},s={name:"線條粗細",args:{width:"small",type:"solid",direction:"horizontal",align:"center",className:""},render:i=>({components:{Divider:r},setup(){return{args:i}},template:`
            <div :style="{ flexDirection: args.direction === 'horizontal' ? 'column' : 'row' }"
                    style="display:flex; gap: 16px; height: 400px">
                <Divider
                    width="xsmall"
                    :type="args.type"
                    :direction="args.direction"
                    :align="args.align"
                    :className="args.className"
                >xsmall / 1px</Divider>
                <Divider
                    width="small"
                    :type="args.type"
                    :direction="args.direction"
                    :align="args.align"
                    :className="args.className"
                >small / 2px</Divider>
                <Divider
                    width="medium"
                    :type="args.type"
                    :direction="args.direction"
                    :align="args.align"
                    :className="args.className"
                >medium / 4px</Divider>
                <Divider
                    width="large"
                    :type="args.type"
                    :direction="args.direction"
                    :align="args.align"
                >large / 6px</Divider>
                <Divider
                    width="xlarge"
                    :type="args.type"
                    :direction="args.direction"
                    :align="args.align"
                    :className="args.className"
                >xlarge / 8px</Divider>
            </div>
        `}),parameters:{controls:{exclude:["width"]},docs:{source:{transform:(i,a)=>{const{args:e}=a;return["<Divider",'  width="xsmall"',`  type="${e.type}"`,`  direction="${e.direction}"`,`  align="${e.align}"`,`  className="${e.className}"`,">xsmall / 1px</Divider>","<Divider",'  width="small"',`  type="${e.type}"`,`  direction="${e.direction}"`,`  align="${e.align}"`,`  className="${e.className}"`,">small / 2px</Divider>","<Divider",'  width="medium"',`  type="${e.type}"`,`  direction="${e.direction}"`,`  align="${e.align}"`,`  className="${e.className}"`,">medium / 4px</Divider>","<Divider",'  width="large"',`  type="${e.type}"`,`  direction="${e.direction}"`,`  align="${e.align}"`,`  className="${e.className}"`,">large / 6px</Divider>","<Divider",'  width="xlarge"',`  type="${e.type}"`,`  direction="${e.direction}"`,`  align="${e.align}"`,`  className="${e.className}"`,">xlarge / 8px</Divider>"].join(`
`).trim()}}}}},d={name:"線條類型",args:{width:"small",direction:"horizontal",align:"center",className:""},render:i=>({components:{Divider:r},setup(){return{args:i}},template:`
            <div :style="{ flexDirection: args.direction === 'horizontal' ? 'column' : 'row' }"
                 style="display:flex; gap: 16px; height: 200px">
                <Divider
                    :width="args.width"
                    type="solid"
                    :direction="args.direction"
                    :align="args.align"
                    :className="args.className"
                >solid</Divider>
                <Divider
                    :width="args.width"
                    type="dashed"
                    :direction="args.direction"
                    :align="args.align"
                    :className="args.className"
                >dashed</Divider>
                <Divider
                    :width="args.width"
                    type="dotted"
                    :direction="args.direction"
                    :align="args.align"
                    :className="args.className"
                >dotted</Divider>
            </div>
        `}),parameters:{controls:{exclude:["type"]},docs:{source:{transform:(i,a)=>{const{args:e}=a;return["<Divider",`  width="${e.width}"`,'  type="solid"',`  direction="${e.direction}"`,`  align="${e.align}"`,`  className="${e.className}"`,">solid</Divider>","<Divider",`  width="${e.width}"`,'  type="dashed"',`  direction="${e.direction}"`,`  align="${e.align}"`,`  className="${e.className}"`,">dashed</Divider>","<Divider",`  width="${e.width}"`,'  type="dotted"',`  direction="${e.direction}"`,`  align="${e.align}"`,`  className="${e.className}"`,">dotted</Divider>"].join(`
`).trim()}}}}},l={name:"線條方向",args:{themeColor:"",width:"small",type:"solid",className:""},render:i=>({components:{Divider:r},setup(){return{args:i}},template:`
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
        `}),parameters:{controls:{exclude:["direction","align"]},docs:{source:{transform:(i,a)=>{const{args:e}=a;return["<Divider",`  themeColor="${e.themeColor}"`,`  width="${e.width}"`,`  type="${e.type}"`,'  direction="vertical"','  align="start"',`  className="${e.className}"`,">start</Divider>","<Divider",`  themeColor="${e.themeColor}"`,`  width="${e.width}"`,`  type="${e.type}"`,'  direction="vertical"','  align="center"',`  className="${e.className}"`,">center</Divider>","<Divider",`  themeColor="${e.themeColor}"`,`  width="${e.width}"`,`  type="${e.type}"`,'  direction="vertical"','  align="end"',`  className="${e.className}"`,">end</Divider>"].join(`
`).trim()}}}}};var m,p,u;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: "預設項目",
  args: {
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
                <Divider
                    :width="args.width"
                    :type="args.type"
                    :direction="args.direction"
                    :align="args.align"
                    :className="args.className"
                >{{args.default}}</Divider>
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
          return ['<Divider', \`  width="\${args.width}"\`, \`  type="\${args.type}"\`, \`  direction="\${args.direction}"\`, \`  align="\${args.align}"\`, \`  className="\${args.className}"\`, '>', \`  \${args.default}\`, '</Divider>'].join('\\n').trim();
        }
      }
    }
  }
}`,...(u=(p=t.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var h,v,D;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
  name: "文字對齊",
  args: {
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
                    :width="args.width"
                    :type="args.type"
                    direction="horizontal"
                    align="start"
                    :className="args.className"
                >start</Divider>
                <Divider
                    :width="args.width"
                    :type="args.type"
                    direction="horizontal"
                    align="center"
                    :className="args.className"
                >center</Divider>
                <Divider
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
          return ['<Divider', \`  width="\${args.width}"\`, \`  type="\${args.type}"\`, \`  themeColor="\${args.themeColor}"\`, \`  align="start"\`, \`  className="\${args.className}"\`, '>start</Divider>', '<Divider', \`  width="\${args.width}"\`, \`  type="\${args.type}"\`, \`  themeColor="\${args.themeColor}"\`, \`  align="center"\`, \`  className="\${args.className}"\`, '>center</Divider>', '<Divider', \`  width="\${args.width}"\`, \`  type="\${args.type}"\`, \`  themeColor="\${args.themeColor}"\`, \`  align="end"\`, \`  className="\${args.className}"\`, '>end</Divider>'].join('\\n').trim();
        }
      }
    }
  }
}`,...(D=(v=n.parameters)==null?void 0:v.docs)==null?void 0:D.source}}};var y,N,$;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
  name: "線條粗細",
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
                    width="xsmall"
                    :type="args.type"
                    :direction="args.direction"
                    :align="args.align"
                    :className="args.className"
                >xsmall / 1px</Divider>
                <Divider
                    width="small"
                    :type="args.type"
                    :direction="args.direction"
                    :align="args.align"
                    :className="args.className"
                >small / 2px</Divider>
                <Divider
                    width="medium"
                    :type="args.type"
                    :direction="args.direction"
                    :align="args.align"
                    :className="args.className"
                >medium / 4px</Divider>
                <Divider
                    width="large"
                    :type="args.type"
                    :direction="args.direction"
                    :align="args.align"
                >large / 6px</Divider>
                <Divider
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
          return ['<Divider', \`  width="xsmall"\`, \`  type="\${args.type}"\`, \`  direction="\${args.direction}"\`, \`  align="\${args.align}"\`, \`  className="\${args.className}"\`, '>xsmall / 1px</Divider>', '<Divider', \`  width="small"\`, \`  type="\${args.type}"\`, \`  direction="\${args.direction}"\`, \`  align="\${args.align}"\`, \`  className="\${args.className}"\`, '>small / 2px</Divider>', '<Divider', \`  width="medium"\`, \`  type="\${args.type}"\`, \`  direction="\${args.direction}"\`, \`  align="\${args.align}"\`, \`  className="\${args.className}"\`, '>medium / 4px</Divider>', '<Divider', \`  width="large"\`, \`  type="\${args.type}"\`, \`  direction="\${args.direction}"\`, \`  align="\${args.align}"\`, \`  className="\${args.className}"\`, '>large / 6px</Divider>', '<Divider', \`  width="xlarge"\`, \`  type="\${args.type}"\`, \`  direction="\${args.direction}"\`, \`  align="\${args.align}"\`, \`  className="\${args.className}"\`, '>xlarge / 8px</Divider>'].join('\\n').trim();
        }
      }
    }
  }
}`,...($=(N=s.parameters)==null?void 0:N.docs)==null?void 0:$.source}}};var w,x,f;d.parameters={...d.parameters,docs:{...(w=d.parameters)==null?void 0:w.docs,source:{originalSource:`{
  name: "線條類型",
  args: {
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
                    :width="args.width"
                    type="solid"
                    :direction="args.direction"
                    :align="args.align"
                    :className="args.className"
                >solid</Divider>
                <Divider
                    :width="args.width"
                    type="dashed"
                    :direction="args.direction"
                    :align="args.align"
                    :className="args.className"
                >dashed</Divider>
                <Divider
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
          return ['<Divider', \`  width="\${args.width}"\`, \`  type="solid"\`, \`  direction="\${args.direction}"\`, \`  align="\${args.align}"\`, \`  className="\${args.className}"\`, '>solid</Divider>', '<Divider', \`  width="\${args.width}"\`, \`  type="dashed"\`, \`  direction="\${args.direction}"\`, \`  align="\${args.align}"\`, \`  className="\${args.className}"\`, '>dashed</Divider>', '<Divider', \`  width="\${args.width}"\`, \`  type="dotted"\`, \`  direction="\${args.direction}"\`, \`  align="\${args.align}"\`, \`  className="\${args.className}"\`, '>dotted</Divider>'].join('\\n').trim();
        }
      }
    }
  }
}`,...(f=(x=d.parameters)==null?void 0:x.docs)==null?void 0:f.source}}};var C,z,b;l.parameters={...l.parameters,docs:{...(C=l.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(b=(z=l.parameters)==null?void 0:z.docs)==null?void 0:b.source}}};const k=["DividerDefault","DividerContent","DividerWidth","DividerTypes","DividerDirection"];export{n as DividerContent,t as DividerDefault,l as DividerDirection,d as DividerTypes,s as DividerWidth,k as __namedExportsOrder,B as default};

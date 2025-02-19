import{_ as a}from"./Divider-BsWTpGGS.js";import"./vue.esm-bundler-qCK_iSPY.js";const j={title:"Component/Divider",component:a,tags:["autodocs"],argTypes:{width:{description:"線條寬度",control:{type:"select"},options:["1px","2px","3px","4px","5px"],table:{type:{summary:"1px | 2px | 3px | 4px | 5px"}}},type:{description:"線條樣式",control:{type:"select"},defaultValue:"solid",options:["solid","dashed","dotted"],table:{type:{summary:"solid | dashed | dotted"}}},direction:{description:"線條方向",control:{type:"select"},defaultValue:"horizontal",options:["horizontal","vertical"],table:{type:{summary:"horizontal | vertical"}}},align:{description:"文字位置",control:{type:"select"},options:["start","center","end"],table:{type:{summary:"start | center | end"}}},className:{description:"客製化樣式",control:{type:"text"}},default:{description:"分隔線內容",control:{type:"text"}}},parameters:{docs:{title:"Divider",description:{component:"Divider 組件的呈現及說明。"}}}},n={name:"預設項目",args:{width:"1px",type:"solid",direction:"horizontal",align:"center",default:"Divider",className:""},render:i=>({components:{Divider:a},setup(){return{args:i}},template:`
            <Divider
                :width="args.width"
                :type="args.type"
                :direction="args.direction"
                :align="args.align"
                :className="args.className"
            >{{args.default}}</Divider>
        `}),parameters:{controls:{},docs:{source:{transform:(i,r)=>{const{args:e}=r;return["<Divider",`  width="${e.width}"`,`  type="${e.type}"`,`  direction="${e.direction}"`,`  align="${e.align}"`,`  className="${e.className}"`,">",`  ${e.default}`,"</Divider>"].join(`
`).trim()}}}}},t={name:"文字對齊",args:{width:"1px",type:"solid",direction:"horizontal",className:""},render:i=>({components:{Divider:a},setup(){return{args:i}},template:`
            <div style="display: flex; gap: 16px;"
                 :style="{ 
                    flexDirection: args.direction === 'horizontal' ? 'column' : 'row',
                    height: '100px'
                    }">
                <Divider
                    :width="args.width"
                    :type="args.type"
                    :direction="args.direction"
                    align="start"
                    :className="args.className"
                >Start</Divider>
                <Divider
                    :width="args.width"
                    :type="args.type"
                    :direction="args.direction"
                    align="center"
                    :className="args.className"
                >Center</Divider>
                <Divider
                    :width="args.width"
                    :type="args.type"
                    :direction="args.direction"
                    align="end"
                    :className="args.className"
                >End</Divider>
            </div>
        `}),parameters:{controls:{exclude:["align"]},docs:{source:{transform:(i,r)=>{const{args:e}=r;return["<Divider",`  width="${e.width}"`,`  type="${e.type}"`,`  direction="${e.direction}"`,'  align="start"',`  className="${e.className}"`,">Start</Divider>","<Divider",`  width="${e.width}"`,`  type="${e.type}"`,`  direction="${e.direction}"`,'  align="center"',`  className="${e.className}"`,">Center</Divider>","<Divider",`  width="${e.width}"`,`  type="${e.type}"`,`  direction="${e.direction}"`,'  align="end"',`  className="${e.className}"`,">End</Divider>"].join(`
`).trim()}}}}},s={name:"線條粗細",args:{type:"solid",direction:"horizontal",align:"center",className:""},render:i=>({components:{Divider:a},setup(){return{args:i}},template:`
            <div :style="{ flexDirection: args.direction === 'horizontal' ? 'column' : 'row' }"
                 style="display:flex; gap: 16px; height: 400px">
                <Divider
                    width="1px"
                    :type="args.type"
                    :direction="args.direction"
                    :align="args.align"
                    :className="args.className"
                >1px</Divider>
                <Divider
                    width="2px"
                    :type="args.type"
                    :direction="args.direction"
                    :align="args.align"
                    :className="args.className"
                >2px</Divider>
                <Divider
                    width="3px"
                    :type="args.type"
                    :direction="args.direction"
                    :align="args.align"
                    :className="args.className"
                >3px</Divider>
                <Divider
                    width="4px"
                    :type="args.type"
                    :direction="args.direction"
                    :align="args.align"
                >4px</Divider>
                <Divider
                    width="5px"
                    :type="args.type"
                    :direction="args.direction"
                    :align="args.align"
                    :className="args.className"
                >5px</Divider>
            </div>
        `}),parameters:{controls:{exclude:["width"]},docs:{source:{transform:(i,r)=>{const{args:e}=r;return["<Divider",'  width="xsmall"',`  type="${e.type}"`,`  direction="${e.direction}"`,`  align="${e.align}"`,`  className="${e.className}"`,">xsmall / 1px</Divider>","<Divider",'  width="small"',`  type="${e.type}"`,`  direction="${e.direction}"`,`  align="${e.align}"`,`  className="${e.className}"`,">small / 2px</Divider>","<Divider",'  width="medium"',`  type="${e.type}"`,`  direction="${e.direction}"`,`  align="${e.align}"`,`  className="${e.className}"`,">medium / 4px</Divider>","<Divider",'  width="large"',`  type="${e.type}"`,`  direction="${e.direction}"`,`  align="${e.align}"`,`  className="${e.className}"`,">large / 6px</Divider>","<Divider",'  width="xlarge"',`  type="${e.type}"`,`  direction="${e.direction}"`,`  align="${e.align}"`,`  className="${e.className}"`,">xlarge / 8px</Divider>"].join(`
`).trim()}}}}},d={name:"線條類型",args:{width:"1px",direction:"horizontal",align:"center",className:""},render:i=>({components:{Divider:a},setup(){return{args:i}},template:`
            <div :style="{ flexDirection: args.direction === 'horizontal' ? 'column' : 'row' }"
                 style="display:flex; gap: 16px; height: 200px">
                <Divider
                    :width="args.width"
                    type="solid"
                    :direction="args.direction"
                    :align="args.align"
                    :className="args.className"
                >Solid</Divider>
                <Divider
                    :width="args.width"
                    type="dashed"
                    :direction="args.direction"
                    :align="args.align"
                    :className="args.className"
                >Dashed</Divider>
                <Divider
                    :width="args.width"
                    type="dotted"
                    :direction="args.direction"
                    :align="args.align"
                    :className="args.className"
                >Dotted</Divider>
            </div>
        `}),parameters:{controls:{exclude:["type"]},docs:{source:{transform:(i,r)=>{const{args:e}=r;return["<Divider",`  width="${e.width}"`,'  type="solid"',`  direction="${e.direction}"`,`  align="${e.align}"`,`  className="${e.className}"`,">Solid</Divider>","<Divider",`  width="${e.width}"`,'  type="dashed"',`  direction="${e.direction}"`,`  align="${e.align}"`,`  className="${e.className}"`,">Dashed</Divider>","<Divider",`  width="${e.width}"`,'  type="dotted"',`  direction="${e.direction}"`,`  align="${e.align}"`,`  className="${e.className}"`,">Dotted</Divider>"].join(`
`).trim()}}}}},o={name:"線條方向-垂直",args:{width:"1px",type:"solid",className:""},render:i=>({components:{Divider:a},setup(){return{args:i}},template:`
            <div style="display:flex; height: 100px">
                <Divider
                    :themeColor="args.themeColor"
                    :width="args.width"
                    :type="args.type"
                    direction="vertical"
                    align="start"
                    :className="args.className"
                >Start</Divider>
                <Divider
                    :themeColor="args.themeColor"
                    :width="args.width"
                    :type="args.type"
                    direction="vertical"
                    align="center"
                    :className="args.className"
                >Center</Divider>
                <Divider
                    :themeColor="args.themeColor"
                    :width="args.width"
                    :type="args.type"
                    direction="vertical"
                    align="end"
                    :className="args.className"
                >End</Divider>
            </div>
        `}),parameters:{controls:{exclude:["direction","align","default"]},docs:{source:{transform:(i,r)=>{const{args:e}=r;return["<Divider",`  themeColor="${e.themeColor}"`,`  width="${e.width}"`,`  type="${e.type}"`,'  direction="vertical"','  align="start"',`  className="${e.className}"`,">Start</Divider>","<Divider",`  themeColor="${e.themeColor}"`,`  width="${e.width}"`,`  type="${e.type}"`,'  direction="vertical"','  align="center"',`  className="${e.className}"`,">Center</Divider>","<Divider",`  themeColor="${e.themeColor}"`,`  width="${e.width}"`,`  type="${e.type}"`,'  direction="vertical"','  align="end"',`  className="${e.className}"`,">End</Divider>"].join(`
`).trim()}}}}},l={name:"線條方向-水平",args:{width:"1px",type:"solid",className:""},render:i=>({components:{Divider:a},setup(){return{args:i}},template:`
            <div style="display: flex; flex-direction: column; height: 100px;">
                <Divider
                    :width="args.width"
                    :type="args.type"
                    direction="horizontal"
                    align="start"
                    :className="args.className"
                >Start</Divider>
                <Divider
                    :width="args.width"
                    :type="args.type"
                    direction="horizontal"
                    align="center"
                    :className="args.className"
                >Center</Divider>
                <Divider
                    :width="args.width"
                    :type="args.type"
                    direction="horizontal"
                    align="end"
                    :className="args.className"
                >End</Divider>
            </div>
        `}),parameters:{controls:{exclude:["direction","align","default"]},docs:{source:{transform:(i,r)=>{const{args:e}=r;return["<Divider",`  width="${e.width}"`,`  type="${e.type}"`,'  direction="horizontal"','  align="start"',`  className="${e.className}"`,">Start</Divider>","<Divider",`  width="${e.width}"`,`  type="${e.type}"`,'  direction="horizontal"','  align="center"',`  className="${e.className}"`,">Center</Divider>","<Divider",`  width="${e.width}"`,`  type="${e.type}"`,'  direction="horizontal"','  align="end"',`  className="${e.className}"`,">End</Divider>"].join(`
`).trim()}}}}};var c,g,m;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
  name: "預設項目",
  args: {
    width: "1px",
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
}`,...(m=(g=n.parameters)==null?void 0:g.docs)==null?void 0:m.source}}};var p,h,u;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: "文字對齊",
  args: {
    width: "1px",
    type: "solid",
    direction: "horizontal",
    // align: "center",
    // default: "Divider",
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
            <div style="display: flex; gap: 16px;"
                 :style="{ 
                    flexDirection: args.direction === 'horizontal' ? 'column' : 'row',
                    height: '100px'
                    }">
                <Divider
                    :width="args.width"
                    :type="args.type"
                    :direction="args.direction"
                    align="start"
                    :className="args.className"
                >Start</Divider>
                <Divider
                    :width="args.width"
                    :type="args.type"
                    :direction="args.direction"
                    align="center"
                    :className="args.className"
                >Center</Divider>
                <Divider
                    :width="args.width"
                    :type="args.type"
                    :direction="args.direction"
                    align="end"
                    :className="args.className"
                >End</Divider>
            </div>
        \`
  }),
  // 控制 controls 中能控制的參數
  parameters: {
    controls: {
      // include: ['themeColor', 'label', 'value', 'name' ],
      exclude: ["align"]
    },
    docs: {
      source: {
        transform: (src, storyContext) => {
          const {
            args
          } = storyContext;
          return ['<Divider', \`  width="\${args.width}"\`, \`  type="\${args.type}"\`, \`  direction="\${args.direction}"\`, \`  align="start"\`, \`  className="\${args.className}"\`, '>Start</Divider>', '<Divider', \`  width="\${args.width}"\`, \`  type="\${args.type}"\`, \`  direction="\${args.direction}"\`, \`  align="center"\`, \`  className="\${args.className}"\`, '>Center</Divider>', '<Divider', \`  width="\${args.width}"\`, \`  type="\${args.type}"\`, \`  direction="\${args.direction}"\`, \`  align="end"\`, \`  className="\${args.className}"\`, '>End</Divider>'].join('\\n').trim();
        }
      }
    }
  }
}`,...(u=(h=t.parameters)==null?void 0:h.docs)==null?void 0:u.source}}};var v,D,y;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`{
  name: "線條粗細",
  args: {
    // width:"1px",
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
                    width="1px"
                    :type="args.type"
                    :direction="args.direction"
                    :align="args.align"
                    :className="args.className"
                >1px</Divider>
                <Divider
                    width="2px"
                    :type="args.type"
                    :direction="args.direction"
                    :align="args.align"
                    :className="args.className"
                >2px</Divider>
                <Divider
                    width="3px"
                    :type="args.type"
                    :direction="args.direction"
                    :align="args.align"
                    :className="args.className"
                >3px</Divider>
                <Divider
                    width="4px"
                    :type="args.type"
                    :direction="args.direction"
                    :align="args.align"
                >4px</Divider>
                <Divider
                    width="5px"
                    :type="args.type"
                    :direction="args.direction"
                    :align="args.align"
                    :className="args.className"
                >5px</Divider>
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
}`,...(y=(D=s.parameters)==null?void 0:D.docs)==null?void 0:y.source}}};var N,w,$;d.parameters={...d.parameters,docs:{...(N=d.parameters)==null?void 0:N.docs,source:{originalSource:`{
  name: "線條類型",
  args: {
    width: "1px",
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
                >Solid</Divider>
                <Divider
                    :width="args.width"
                    type="dashed"
                    :direction="args.direction"
                    :align="args.align"
                    :className="args.className"
                >Dashed</Divider>
                <Divider
                    :width="args.width"
                    type="dotted"
                    :direction="args.direction"
                    :align="args.align"
                    :className="args.className"
                >Dotted</Divider>
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
          return ['<Divider', \`  width="\${args.width}"\`, \`  type="solid"\`, \`  direction="\${args.direction}"\`, \`  align="\${args.align}"\`, \`  className="\${args.className}"\`, '>Solid</Divider>', '<Divider', \`  width="\${args.width}"\`, \`  type="dashed"\`, \`  direction="\${args.direction}"\`, \`  align="\${args.align}"\`, \`  className="\${args.className}"\`, '>Dashed</Divider>', '<Divider', \`  width="\${args.width}"\`, \`  type="dotted"\`, \`  direction="\${args.direction}"\`, \`  align="\${args.align}"\`, \`  className="\${args.className}"\`, '>Dotted</Divider>'].join('\\n').trim();
        }
      }
    }
  }
}`,...($=(w=d.parameters)==null?void 0:w.docs)==null?void 0:$.source}}};var x,C,f;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
  name: "線條方向-垂直",
  args: {
    width: "1px",
    type: "solid",
    // direction: "horizontal",
    // align: "center",
    // default: "vertical",
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
            <div style="display:flex; height: 100px">
                <Divider
                    :themeColor="args.themeColor"
                    :width="args.width"
                    :type="args.type"
                    direction="vertical"
                    align="start"
                    :className="args.className"
                >Start</Divider>
                <Divider
                    :themeColor="args.themeColor"
                    :width="args.width"
                    :type="args.type"
                    direction="vertical"
                    align="center"
                    :className="args.className"
                >Center</Divider>
                <Divider
                    :themeColor="args.themeColor"
                    :width="args.width"
                    :type="args.type"
                    direction="vertical"
                    align="end"
                    :className="args.className"
                >End</Divider>
            </div>
        \`
  }),
  // 控制 controls 中能控制的參數
  parameters: {
    controls: {
      // include: ['themeColor', 'label', 'value', 'name' ],
      exclude: ["direction", "align", "default"]
    },
    docs: {
      source: {
        transform: (src, storyContext) => {
          const {
            args
          } = storyContext;
          return ['<Divider', \`  themeColor="\${args.themeColor}"\`, \`  width="\${args.width}"\`, \`  type="\${args.type}"\`, \`  direction="vertical"\`, \`  align="start"\`, \`  className="\${args.className}"\`, '>Start</Divider>', '<Divider', \`  themeColor="\${args.themeColor}"\`, \`  width="\${args.width}"\`, \`  type="\${args.type}"\`, \`  direction="vertical"\`, \`  align="center"\`, \`  className="\${args.className}"\`, '>Center</Divider>', '<Divider', \`  themeColor="\${args.themeColor}"\`, \`  width="\${args.width}"\`, \`  type="\${args.type}"\`, \`  direction="vertical"\`, \`  align="end"\`, \`  className="\${args.className}"\`, '>End</Divider>'].join('\\n').trim();
        }
      }
    }
  }
}`,...(f=(C=o.parameters)==null?void 0:C.docs)==null?void 0:f.source}}};var z,E,S;l.parameters={...l.parameters,docs:{...(z=l.parameters)==null?void 0:z.docs,source:{originalSource:`{
  name: "線條方向-水平",
  args: {
    width: "1px",
    type: "solid",
    // direction: "horizontal",
    // align: "center",
    // default: "horizontal",
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
            <div style="display: flex; flex-direction: column; height: 100px;">
                <Divider
                    :width="args.width"
                    :type="args.type"
                    direction="horizontal"
                    align="start"
                    :className="args.className"
                >Start</Divider>
                <Divider
                    :width="args.width"
                    :type="args.type"
                    direction="horizontal"
                    align="center"
                    :className="args.className"
                >Center</Divider>
                <Divider
                    :width="args.width"
                    :type="args.type"
                    direction="horizontal"
                    align="end"
                    :className="args.className"
                >End</Divider>
            </div>
        \`
  }),
  // 控制 controls 中能控制的參數
  parameters: {
    controls: {
      // include: ['themeColor', 'label', 'value', 'name' ],
      exclude: ["direction", "align", "default"]
    },
    docs: {
      source: {
        transform: (src, storyContext) => {
          const {
            args
          } = storyContext;
          return ['<Divider', \`  width="\${args.width}"\`, \`  type="\${args.type}"\`, \`  direction="horizontal"\`, \`  align="start"\`, \`  className="\${args.className}"\`, '>Start</Divider>', '<Divider', \`  width="\${args.width}"\`, \`  type="\${args.type}"\`, \`  direction="horizontal"\`, \`  align="center"\`, \`  className="\${args.className}"\`, '>Center</Divider>', '<Divider', \`  width="\${args.width}"\`, \`  type="\${args.type}"\`, \`  direction="horizontal"\`, \`  align="end"\`, \`  className="\${args.className}"\`, '>End</Divider>'].join('\\n').trim();
        }
      }
    }
  }
}`,...(S=(E=l.parameters)==null?void 0:E.docs)==null?void 0:S.source}}};const F=["DividerDefault","DividerContent","DividerWidth","DividerTypes","DividerColumnDirection","DividerRowDirection"];export{o as DividerColumnDirection,t as DividerContent,n as DividerDefault,l as DividerRowDirection,d as DividerTypes,s as DividerWidth,F as __namedExportsOrder,j as default};

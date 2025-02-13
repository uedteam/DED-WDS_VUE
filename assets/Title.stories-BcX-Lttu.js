import{_ as n}from"./Title-Bap0zsXG.js";import"./vue.esm-bundler-qCK_iSPY.js";const p={title:"Component/Typography/Title",component:n,tags:["autodocs"],argTypes:{themeColor:{description:"主題顏色",control:{type:"select",labels:{"":"none",primary:"primary",secondary:"secondary",neutral:"neutral",info:"info",success:"success",warning:"warning",error:"error"}},options:["","primary","secondary","neutral","info","success","warning","error"],table:{type:{summary:"primary | secondary | neutral | info | success | warning | error"},defaultValue:{summary:"none"}}},level:{description:"標題等級",control:{type:"select"},options:[0,1,2,3,4,5,6],table:{type:{summary:"0 | 1 | 2 | 3 | 4 | 5 | 6"}}},className:{description:"客製化樣式",control:{type:"text"}},default:{description:"標題內容",control:{type:"text"}}},parameters:{docs:{title:"Title",description:{component:"標題組件的呈現及說明。"}}}},s={name:"預設項目",args:{themeColor:"",level:1,className:"",default:"Title"},render:l=>({components:{Title:n},setup(){return{args:l}},template:`
            <Title
                :themeColor="args.themeColor"
                :level="args.level"
                :className="args.className"
            >{{ args.default }}</Title>
        `}),parameters:{controls:{},docs:{source:{transform:(l,a)=>{const{args:e}=a;return["<Title",`  :themeColor="${e.themeColor}"`,`  :level="${e.level}"`,`  className="${e.className}"`,">",`  ${e.default}`,"</Title>"].join(`
`).trim()}}}}},t={name:"標題大小",args:{themeColor:"",className:"",default:"Title"},render:l=>({components:{Title:n},setup(){return{args:l}},template:`
            <div style="display:flex; flex-direction: column; gap:8px">
                <Title
                    :level=1
                    :className="args.className"
                >Level:1 {{ args.default }}</Title>
                <Title
                    :level=2
                    :className="args.className"
                >Level:2 {{ args.default }}</Title>
                <Title
                    :level=3
                    :className="args.className"
                >Level:3 {{ args.default }}</Title>
                <Title
                    :level=4
                    :className="args.className"
                >Level:4 {{ args.default }}</Title>
                <Title
                    :level=5
                    :className="args.className"
                >Level:5 {{ args.default }}</Title>
                <Title
                    :level=6
                    :className="args.className"
                >Level:6 {{ args.default }}</Title>
                <Title
                    :level=0
                    :className="args.className"
                >Level:0 {{ args.default }}</Title>
            </div>
        `}),parameters:{controls:{exclude:["level"]},docs:{source:{transform:(l,a)=>{const{args:e}=a;return["<Title",'  :level="1"',`  className="${e.className}"`,`>Level:1 ${e.default}</Title>`,"<Title",'  :level="2"',`  className="${e.className}"`,`>Level:2 ${e.default}</Title>`,"<Title",'  :level="3"',`  className="${e.className}"`,`>Level:3 ${e.default}</Title>`,"<Title",'  :level="4"',`  className="${e.className}"`,`>Level:4 ${e.default}</Title>`,"<Title",'  :level="5"',`  :className="${e.className}"`,`>Level:5 ${e.default}</Title>`,"<Title",'  :level="6"',`  className="${e.className}"`,`>Level:6 ${e.default}</Title>`,"<Title",'  :level="0"',`  className="${e.className}"`,`>Level:0 ${e.default}</Title>`].join(`
`).trim()}}}}},r={name:"主題色彩",args:{level:3,className:"",default:"Title"},render:l=>({components:{Title:n},setup(){return{args:l}},template:`
            <div style="display:flex; gap:8px">
                <Title
                    themeColor="primary"
                    :level="args.level"
                    :className="args.className"
                >{{ args.default }}</Title>
                <Title
                    themeColor="secondary"
                    :level="args.level"
                    :className="args.className"
                >{{ args.default }}</Title>
                <Title
                    themeColor="neutral"
                    :level="args.level"
                    :className="args.className"
                >{{ args.default }}</Title>
                <Title
                    themeColor="info"
                    :level="args.level"
                    :className="args.className"
                >{{ args.default }}</Title>
                <Title
                    themeColor="success"
                    :level="args.level"
                    :className="args.className"
                >{{ args.default }}</Title>
                <Title
                    themeColor="warning"
                    :level="args.level"
                    :className="args.className"
                >{{ args.default }}</Title>
                <Title
                    themeColor="error"
                    :level="args.level"
                    :className="args.className"
                >{{ args.default }}</Title>
            </div>
        `}),parameters:{controls:{exclude:["themeColor"]},docs:{source:{transform:(l,a)=>{const{args:e}=a;return["<Title",'  themeColor="primary"',`  :level="${e.level}"`,`  className="${e.className}"`,`>${e.default}</Title>`,"<Title",'  themeColor="secondary"',`  :level="${e.level}"`,`  className="${e.className}"`,`>${e.default}</Title>`,"<Title",'  themeColor="neutral"',`  :level="${e.level}"`,`  className="${e.className}"`,`>${e.default}</Title>`,"<Title",'  themeColor="info"',`  :level="${e.level}"`,`  className="${e.className}"`,`>${e.default}</Title>`,"<Title",'  themeColor="success"',`  :level="${e.level}"`,`  className="${e.className}"`,`>${e.default}</Title>`,"<Title",'  themeColor="warning"',`  :level="${e.level}"`,`  className="${e.className}"`,`>${e.default}</Title>`,"<Title",'  themeColor="error"',`  :level="${e.level}"`,`  className="${e.className}"`,`>${e.default}</Title>`].join(`
`).trim()}}}}};var o,m,c;s.parameters={...s.parameters,docs:{...(o=s.parameters)==null?void 0:o.docs,source:{originalSource:`{
  name: "預設項目",
  args: {
    themeColor: "",
    level: 1,
    className: "",
    default: "Title"
  },
  render: args => ({
    components: {
      Title
    },
    setup() {
      return {
        args
      };
    },
    template: \`
            <Title
                :themeColor="args.themeColor"
                :level="args.level"
                :className="args.className"
            >{{ args.default }}</Title>
        \`
  }),
  // 控制 controls 中能控制的參數
  parameters: {
    controls: {
      // include: ['themeColor', 'label', 'value', 'name' ],
      // exclude:['default']
    },
    docs: {
      source: {
        transform: (src, storyContext) => {
          const {
            args
          } = storyContext;
          return ['<Title', \`  :themeColor="\${args.themeColor}"\`, \`  :level="\${args.level}"\`, \`  className="\${args.className}"\`, \`>\`, \`  \${args.default}\`, '</Title>'].join('\\n').trim();
        }
      }
    }
  }
}`,...(c=(m=s.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};var i,u,g;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
  name: "標題大小",
  args: {
    themeColor: "",
    // level: 1,
    className: "",
    default: "Title"
  },
  render: args => ({
    components: {
      Title
    },
    setup() {
      return {
        args
      };
    },
    template: \`
            <div style="display:flex; flex-direction: column; gap:8px">
                <Title
                    :level=1
                    :className="args.className"
                >Level:1 {{ args.default }}</Title>
                <Title
                    :level=2
                    :className="args.className"
                >Level:2 {{ args.default }}</Title>
                <Title
                    :level=3
                    :className="args.className"
                >Level:3 {{ args.default }}</Title>
                <Title
                    :level=4
                    :className="args.className"
                >Level:4 {{ args.default }}</Title>
                <Title
                    :level=5
                    :className="args.className"
                >Level:5 {{ args.default }}</Title>
                <Title
                    :level=6
                    :className="args.className"
                >Level:6 {{ args.default }}</Title>
                <Title
                    :level=0
                    :className="args.className"
                >Level:0 {{ args.default }}</Title>
            </div>
        \`
  }),
  // 控制 controls 中能控制的參數
  parameters: {
    controls: {
      // include: ['themeColor', 'label', 'value', 'name' ],
      exclude: ['level']
    },
    docs: {
      source: {
        transform: (src, storyContext) => {
          const {
            args
          } = storyContext;
          return ['<Title', \`  :level="1"\`, \`  className="\${args.className}"\`, \`>Level:1 \${args.default}</Title>\`, '<Title', \`  :level="2"\`, \`  className="\${args.className}"\`, \`>Level:2 \${args.default}</Title>\`, '<Title', \`  :level="3"\`, \`  className="\${args.className}"\`, \`>Level:3 \${args.default}</Title>\`, '<Title', \`  :level="4"\`, \`  className="\${args.className}"\`, \`>Level:4 \${args.default}</Title>\`, '<Title', \`  :level="5"\`, \`  :className="\${args.className}"\`, \`>Level:5 \${args.default}</Title>\`, '<Title', \`  :level="6"\`, \`  className="\${args.className}"\`, \`>Level:6 \${args.default}</Title>\`, '<Title', \`  :level="0"\`, \`  className="\${args.className}"\`, \`>Level:0 \${args.default}</Title>\`].join('\\n').trim();
        }
      }
    }
  }
}`,...(g=(u=t.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var v,T,d;r.parameters={...r.parameters,docs:{...(v=r.parameters)==null?void 0:v.docs,source:{originalSource:`{
  name: "主題色彩",
  args: {
    // themeColor: "",
    level: 3,
    className: "",
    default: "Title"
  },
  render: args => ({
    components: {
      Title
    },
    setup() {
      return {
        args
      };
    },
    template: \`
            <div style="display:flex; gap:8px">
                <Title
                    themeColor="primary"
                    :level="args.level"
                    :className="args.className"
                >{{ args.default }}</Title>
                <Title
                    themeColor="secondary"
                    :level="args.level"
                    :className="args.className"
                >{{ args.default }}</Title>
                <Title
                    themeColor="neutral"
                    :level="args.level"
                    :className="args.className"
                >{{ args.default }}</Title>
                <Title
                    themeColor="info"
                    :level="args.level"
                    :className="args.className"
                >{{ args.default }}</Title>
                <Title
                    themeColor="success"
                    :level="args.level"
                    :className="args.className"
                >{{ args.default }}</Title>
                <Title
                    themeColor="warning"
                    :level="args.level"
                    :className="args.className"
                >{{ args.default }}</Title>
                <Title
                    themeColor="error"
                    :level="args.level"
                    :className="args.className"
                >{{ args.default }}</Title>
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
          return ['<Title', \`  themeColor="primary"\`, \`  :level="\${args.level}"\`, \`  className="\${args.className}"\`, \`>\${args.default}</Title>\`, '<Title', \`  themeColor="secondary"\`, \`  :level="\${args.level}"\`, \`  className="\${args.className}"\`, \`>\${args.default}</Title>\`, '<Title', \`  themeColor="neutral"\`, \`  :level="\${args.level}"\`, \`  className="\${args.className}"\`, \`>\${args.default}</Title>\`, '<Title', \`  themeColor="info"\`, \`  :level="\${args.level}"\`, \`  className="\${args.className}"\`, \`>\${args.default}</Title>\`, '<Title', \`  themeColor="success"\`, \`  :level="\${args.level}"\`, \`  className="\${args.className}"\`, \`>\${args.default}</Title>\`, '<Title', \`  themeColor="warning"\`, \`  :level="\${args.level}"\`, \`  className="\${args.className}"\`, \`>\${args.default}</Title>\`, '<Title', \`  themeColor="error"\`, \`  :level="\${args.level}"\`, \`  className="\${args.className}"\`, \`>\${args.default}</Title>\`].join('\\n').trim();
        }
      }
    }
  }
}`,...(d=(T=r.parameters)==null?void 0:T.docs)==null?void 0:d.source}}};const $=["HeadingDefault","HeadingSizeDefault","HeadingColorDefault"];export{r as HeadingColorDefault,s as HeadingDefault,t as HeadingSizeDefault,$ as __namedExportsOrder,p as default};

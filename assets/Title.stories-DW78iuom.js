import{_ as o}from"./Title-Dx6JTtIH.js";import"./vue.esm-bundler-g0-RGFhA.js";const h={title:"Component/Title",component:o,tags:["autodocs"],argTypes:{themeColor:{description:"主題顏色",control:{type:"select",labels:{"":"none",primary:"primary",secondary:"secondary",neutral:"neutral",info:"info",success:"success",warning:"warning",error:"error"}},options:["","primary","secondary","neutral","info","success","warning","error"],table:{type:{summary:"primary | secondary | neutral | info | success | warning | error"},defaultValue:{summary:"none"}}},level:{description:"標題等級",control:{type:"select"},options:["0","1","2","3","4","5","6"],table:{type:{summary:"0 | 1 | 2 | 3 | 4 | 5 | 6"}}},className:{description:"客製化樣式",control:{type:"text"}},default:{description:"標題內容",control:{type:"text"}}},parameters:{docs:{title:"Title",description:{component:"Title 組件的呈現及說明。"}}}},s={name:"預設項目",args:{themeColor:"neutral",level:1,className:"",default:"Title"},render:l=>({components:{Title:o},setup(){return{args:l}},template:`
            <Title
                :themeColor="args.themeColor"
                :level="args.level"
                :className="args.className"
            >{{ args.default }}</Title>
        `}),parameters:{controls:{},docs:{source:{transform:(l,a)=>{const{args:e}=a;return["<Title",`  themeColor="${e.themeColor}"`,`  :level="${e.level}"`,`  className="${e.className}"`,">",`  ${e.default}`,"</Title>"].join(`
`).trim()}}}}},r={name:"標題大小",args:{themeColor:"",className:"",default:"Title"},render:l=>({components:{Title:o},setup(){return{args:l}},template:`
            <Title 
                :themeColor="args.themeColor"
                level="1"
                :className="args.className"
            >Level:1 {{ args.default }}</Title>
            <Title
                :themeColor="args.themeColor"
                level="2"
                :className="args.className"
            >Level:2 {{ args.default }}</Title>
            <Title
                :themeColor="args.themeColor"
                level="3"
                :className="args.className"
            >Level:3 {{ args.default }}</Title>
            <Title
                :themeColor="args.themeColor"
                level="4"
                :className="args.className"
            >Level:4 {{ args.default }}</Title>
            <Title
                :themeColor="args.themeColor"
                level="5"
                :className="args.className"
            >Level:5 {{ args.default }}</Title>
            <Title
                :themeColor="args.themeColor"
                level="6"
                :className="args.className"
            >Level:6 {{ args.default }}</Title>
            <Title
                :themeColor="args.themeColor"
                level="0"
                :className="args.className"
            >Level:0 {{ args.default }}</Title>
        `}),parameters:{controls:{exclude:["default","level"]},docs:{source:{transform:(l,a)=>{const{args:e}=a;return["<Title",`  themeColor="${e.themeColor}"`,'  :level="1"',`  className="${e.className}"`,`>Level:1 ${e.default}</Title>`,"<Title",`  themeColor="${e.themeColor}"`,'  :level="2"',`  className="${e.className}"`,`>Level:2 ${e.default}</Title>`,"<Title",`  themeColor="${e.themeColor}"`,'  :level="3"',`  className="${e.className}"`,`>Level:3 ${e.default}</Title>`,"<Title",`  themeColor="${e.themeColor}"`,'  :level="4"',`  className="${e.className}"`,`>Level:4 ${e.default}</Title>`,"<Title",`  themeColor="${e.themeColor}"`,'  :level="5"',`  :className="${e.className}"`,`>Level:5 ${e.default}</Title>`,"<Title",`  themeColor="${e.themeColor}"`,'  :level="6"',`  className="${e.className}"`,`>Level:6 ${e.default}</Title>`,"<Title",`  themeColor="${e.themeColor}"`,'  :level="0"',`  className="${e.className}"`,`>Level:0 ${e.default}</Title>`].join(`
`).trim()}}}}},t={name:"主題色彩",args:{level:3,className:"",default:"Title"},render:l=>({components:{Title:o},setup(){return{args:l}},template:`
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
            
        `}),parameters:{controls:{exclude:["default","themeColor"]},docs:{source:{transform:(l,a)=>{const{args:e}=a;return["<Title",'  themeColor="primary"',`  :level="${e.level}"`,`  className="${e.className}"`,`>${e.default}</Title>`,"<Title",'  themeColor="secondary"',`  :level="${e.level}"`,`  className="${e.className}"`,`>${e.default}</Title>`,"<Title",'  themeColor="neutral"',`  :level="${e.level}"`,`  className="${e.className}"`,`>${e.default}</Title>`,"<Title",'  themeColor="info"',`  :level="${e.level}"`,`  className="${e.className}"`,`>${e.default}</Title>`,"<Title",'  themeColor="success"',`  :level="${e.level}"`,`  className="${e.className}"`,`>${e.default}</Title>`,"<Title",'  themeColor="warning"',`  :level="${e.level}"`,`  className="${e.className}"`,`>${e.default}</Title>`,"<Title",'  themeColor="error"',`  :level="${e.level}"`,`  className="${e.className}"`,`>${e.default}</Title>`].join(`
`).trim()}}}}};var n,m,c;s.parameters={...s.parameters,docs:{...(n=s.parameters)==null?void 0:n.docs,source:{originalSource:`{
  name: "預設項目",
  args: {
    themeColor: "neutral",
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
          return ['<Title', \`  themeColor="\${args.themeColor}"\`, \`  :level="\${args.level}"\`, \`  className="\${args.className}"\`, \`>\`, \`  \${args.default}\`, '</Title>'].join('\\n').trim();
        }
      }
    }
  }
}`,...(c=(m=s.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};var i,u,g;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  name: "標題大小",
  args: {
    themeColor: "",
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
                level="1"
                :className="args.className"
            >Level:1 {{ args.default }}</Title>
            <Title
                :themeColor="args.themeColor"
                level="2"
                :className="args.className"
            >Level:2 {{ args.default }}</Title>
            <Title
                :themeColor="args.themeColor"
                level="3"
                :className="args.className"
            >Level:3 {{ args.default }}</Title>
            <Title
                :themeColor="args.themeColor"
                level="4"
                :className="args.className"
            >Level:4 {{ args.default }}</Title>
            <Title
                :themeColor="args.themeColor"
                level="5"
                :className="args.className"
            >Level:5 {{ args.default }}</Title>
            <Title
                :themeColor="args.themeColor"
                level="6"
                :className="args.className"
            >Level:6 {{ args.default }}</Title>
            <Title
                :themeColor="args.themeColor"
                level="0"
                :className="args.className"
            >Level:0 {{ args.default }}</Title>
        \`
  }),
  // 控制 controls 中能控制的參數
  parameters: {
    controls: {
      // include: ['themeColor', 'label', 'value', 'name' ],
      exclude: ['default', 'level']
    },
    docs: {
      source: {
        transform: (src, storyContext) => {
          const {
            args
          } = storyContext;
          return ['<Title', \`  themeColor="\${args.themeColor}"\`, \`  :level="1"\`, \`  className="\${args.className}"\`, \`>Level:1 \${args.default}</Title>\`, '<Title', \`  themeColor="\${args.themeColor}"\`, \`  :level="2"\`, \`  className="\${args.className}"\`, \`>Level:2 \${args.default}</Title>\`, '<Title', \`  themeColor="\${args.themeColor}"\`, \`  :level="3"\`, \`  className="\${args.className}"\`, \`>Level:3 \${args.default}</Title>\`, '<Title', \`  themeColor="\${args.themeColor}"\`, \`  :level="4"\`, \`  className="\${args.className}"\`, \`>Level:4 \${args.default}</Title>\`, '<Title', \`  themeColor="\${args.themeColor}"\`, \`  :level="5"\`, \`  :className="\${args.className}"\`, \`>Level:5 \${args.default}</Title>\`, '<Title', \`  themeColor="\${args.themeColor}"\`, \`  :level="6"\`, \`  className="\${args.className}"\`, \`>Level:6 \${args.default}</Title>\`, '<Title', \`  themeColor="\${args.themeColor}"\`, \`  :level="0"\`, \`  className="\${args.className}"\`, \`>Level:0 \${args.default}</Title>\`].join('\\n').trim();
        }
      }
    }
  }
}`,...(g=(u=r.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var T,v,N;t.parameters={...t.parameters,docs:{...(T=t.parameters)==null?void 0:T.docs,source:{originalSource:`{
  name: "主題色彩",
  args: {
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
            
        \`
  }),
  // 控制 controls 中能控制的參數
  parameters: {
    controls: {
      // include: ['themeColor', 'label', 'value', 'name' ],
      exclude: ['default', 'themeColor']
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
}`,...(N=(v=t.parameters)==null?void 0:v.docs)==null?void 0:N.source}}};const f=["HeadingDefault","HeadingSizeDefault","HeadingColorDefault"];export{t as HeadingColorDefault,s as HeadingDefault,r as HeadingSizeDefault,f as __namedExportsOrder,h as default};

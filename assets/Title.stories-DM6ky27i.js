import{_ as n}from"./Title-D3Q4XMVN.js";import"./vue.esm-bundler-C8tbd0VY.js";const v={title:"Component/Title",component:n,tags:["autodocs"],argTypes:{level:{description:"標題等級",control:{type:"select"},options:[0,1,2,3,4,5,6],table:{type:{summary:"0 | 1 | 2 | 3 | 4 | 5 | 6"}}},className:{description:"客製化樣式",control:{type:"text"}},default:{description:"標題內容",control:{type:"text"}}},parameters:{docs:{title:"Title",description:{component:"Title 組件的呈現及說明。"}}}},a={name:"預設項目",args:{level:1,className:"",default:"Title"},render:l=>({components:{Title:n},setup(){return{args:l}},template:`
            <Title
                :level="args.level"
                :className="args.className"
            >{{ args.default }}</Title>
        `}),parameters:{controls:{},docs:{source:{transform:(l,t)=>{const{args:e}=t;return["<Title",`  :level="${e.level}"`,`  className="${e.className}"`,">",`  ${e.default}`,"</Title>"].join(`
`).trim()}}}}},s={name:"標題大小",args:{className:"",default:"Title"},render:l=>({components:{Title:n},setup(){return{args:l}},template:`
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
        `}),parameters:{controls:{exclude:["default","level"]},docs:{source:{transform:(l,t)=>{const{args:e}=t;return["<Title",'  :level="1"',`  className="${e.className}"`,`>Level:1 ${e.default}</Title>`,"<Title",'  :level="2"',`  className="${e.className}"`,`>Level:2 ${e.default}</Title>`,"<Title",'  :level="3"',`  className="${e.className}"`,`>Level:3 ${e.default}</Title>`,"<Title",'  :level="4"',`  className="${e.className}"`,`>Level:4 ${e.default}</Title>`,"<Title",'  :level="5"',`  :className="${e.className}"`,`>Level:5 ${e.default}</Title>`,"<Title",'  :level="6"',`  className="${e.className}"`,`>Level:6 ${e.default}</Title>`,"<Title",'  :level="0"',`  className="${e.className}"`,`>Level:0 ${e.default}</Title>`].join(`
`).trim()}}}}};var r,c,i;a.parameters={...a.parameters,docs:{...(r=a.parameters)==null?void 0:r.docs,source:{originalSource:`{
  name: "預設項目",
  args: {
    // themeColor: "primary",
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
          return ['<Title', \`  :level="\${args.level}"\`, \`  className="\${args.className}"\`, \`>\`, \`  \${args.default}\`, '</Title>'].join('\\n').trim();
        }
      }
    }
  }
}`,...(i=(c=a.parameters)==null?void 0:c.docs)==null?void 0:i.source}}};var m,u,o;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: "標題大小",
  args: {
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
      exclude: ['default', 'level']
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
}`,...(o=(u=s.parameters)==null?void 0:u.docs)==null?void 0:o.source}}};const g=["HeadingDefault","HeadingSizeDefault"];export{a as HeadingDefault,s as HeadingSizeDefault,g as __namedExportsOrder,v as default};

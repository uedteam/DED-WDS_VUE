import{c as n,a as h,r as $,n as p,o as y}from"./vue.esm-bundler-BaxPAcbg.js";const s={__name:"Title",props:{themeColor:{type:String,default:"primary",validator:l=>["primary","secondary","tertiary","success","warning","error","info"].includes(l)},level:{type:Number,default:0,validator:l=>[0,1,2,3,4,5,6].includes(l)},className:{type:String,default:""}},setup(l){const a=l,e=n(()=>[`ded-title ded-title-level-${a.level} ded-title-${a.themeColor}`]),C=n(()=>[e.value,a.className].filter(Boolean).join(" "));return(f,L)=>(y(),h("div",{class:p(C.value)},[$(f.$slots,"default")],2))}};s.__docgenInfo={exportName:"default",displayName:"Title",description:"",tags:{},props:[{name:"themeColor",type:{name:"string"},defaultValue:{func:!1,value:'"primary"'},values:["primary","secondary","tertiary","success","warning","error","info"]},{name:"level",type:{name:"number"},defaultValue:{func:!1,value:"0"},values:[1,2,3,4,5,6]},{name:"className",type:{name:"string"},defaultValue:{func:!1,value:'""'}}],slots:[{name:"default"}],sourceFiles:["D:/98_測試/up/DED-WDS_VUE/libs/src/ui/element/Title/Title.vue"]};const x={title:"Design System/Title",component:s,tags:["autodocs"],argTypes:{themeColor:{description:"主題顏色",control:{type:"select",labels:{"":"None",primary:"primary",secondary:"secondary",tertiary:"tertiary",success:"success",warning:"warning",error:"error",info:"info"}},options:["","primary","secondary","tertiary","success","warning","error","info"],table:{type:{summary:"primary | secondary | tertiary | success | warning | error | info"}}},level:{description:"標題等級",control:{type:"select"},options:["0","1","2","3","4","5","6"],table:{type:{summary:"0 | 1 | 2 | 3 | 4 | 5 | 6"}}},className:{description:"客製化樣式",control:{type:"text"}},default:{description:"標題內容",control:{type:"text"}}},parameters:{docs:{title:"Title",description:{component:"Title 組件的呈現及說明。"}}}},r={name:"預設項目",args:{themeColor:"primary",level:1,className:"",default:"Title"},render:l=>({components:{Title:s},setup(){return{args:l}},template:`
            <Title
                :themeColor="args.themeColor"
                :level="args.level"
                :className="args.className"
            >{{ args.default }}</Title>
        `}),parameters:{controls:{},docs:{source:{transform:(l,a)=>{const{args:e}=a;return["<Title",`  themeColor="${e.themeColor}"`,`  :level="${e.level}"`,`  className="${e.className}"`,">",`  ${e.default}`,"</Title>"].join(`
`).trim()}}}}},t={name:"標題大小",args:{themeColor:"",className:"",default:"Title"},render:l=>({components:{Title:s},setup(){return{args:l}},template:`
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
`).trim()}}}}},o={name:"主題色彩",args:{level:1,className:"",default:"Title"},render:l=>({components:{Title:s},setup(){return{args:l}},template:`
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
                themeColor="tertiary"
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
            <Title
                themeColor="info"
                :level="args.level"
                :className="args.className"
            >{{ args.default }}</Title>
        `}),parameters:{controls:{exclude:["default","themeColor"]},docs:{source:{transform:(l,a)=>{const{args:e}=a;return["<Title",'  themeColor="primary"',`  :level="${e.level}"`,`  className="${e.className}"`,`>${e.default}</Title>`,"<Title",'  themeColor="secondary"',`  :level="${e.level}"`,`  className="${e.className}"`,`>${e.default}</Title>`,"<Title",'  themeColor="tertiary"',`  :level="${e.level}"`,`  className="${e.className}"`,`>${e.default}</Title>`,"<Title",'  themeColor="success"',`  :level="${e.level}"`,`  className="${e.className}"`,`>${e.default}</Title>`,"<Title",'  themeColor="warning"',`  :level="${e.level}"`,`  className="${e.className}"`,`>${e.default}</Title>`,"<Title",'  themeColor="error"',`  :level="${e.level}"`,`  className="${e.className}"`,`>${e.default}</Title>`,"<Title",'  themeColor="info"',`  :level="${e.level}"`,`  className="${e.className}"`,`>${e.default}</Title>`].join(`
`).trim()}}}}};var m,c,i;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: "預設項目",
  args: {
    themeColor: "primary",
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
}`,...(i=(c=r.parameters)==null?void 0:c.docs)==null?void 0:i.source}}};var u,g,d;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(d=(g=t.parameters)==null?void 0:g.docs)==null?void 0:d.source}}};var v,T,N;o.parameters={...o.parameters,docs:{...(v=o.parameters)==null?void 0:v.docs,source:{originalSource:`{
  name: "主題色彩",
  args: {
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
                themeColor="tertiary"
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
            <Title
                themeColor="info"
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
          return ['<Title', \`  themeColor="primary"\`, \`  :level="\${args.level}"\`, \`  className="\${args.className}"\`, \`>\${args.default}</Title>\`, '<Title', \`  themeColor="secondary"\`, \`  :level="\${args.level}"\`, \`  className="\${args.className}"\`, \`>\${args.default}</Title>\`, '<Title', \`  themeColor="tertiary"\`, \`  :level="\${args.level}"\`, \`  className="\${args.className}"\`, \`>\${args.default}</Title>\`, '<Title', \`  themeColor="success"\`, \`  :level="\${args.level}"\`, \`  className="\${args.className}"\`, \`>\${args.default}</Title>\`, '<Title', \`  themeColor="warning"\`, \`  :level="\${args.level}"\`, \`  className="\${args.className}"\`, \`>\${args.default}</Title>\`, '<Title', \`  themeColor="error"\`, \`  :level="\${args.level}"\`, \`  className="\${args.className}"\`, \`>\${args.default}</Title>\`, '<Title', \`  themeColor="info"\`, \`  :level="\${args.level}"\`, \`  className="\${args.className}"\`, \`>\${args.default}</Title>\`].join('\\n').trim();
        }
      }
    }
  }
}`,...(N=(T=o.parameters)==null?void 0:T.docs)==null?void 0:N.source}}};const _=["HeadingDefault","HeadingSizeDefault","HeadingColorDefault"];export{o as HeadingColorDefault,r as HeadingDefault,t as HeadingSizeDefault,_ as __namedExportsOrder,x as default};

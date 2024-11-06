import{f as r,c as h,g as f,n as y,o as D}from"./vue.esm-bundler-XWim8Fx5.js";const l={__name:"Title",props:{themeColor:{type:String,validator:e=>["primary","secondary","tertiary","success","warning","error","info"].includes(e)},level:{type:String,default:"0",validator:e=>["0","1","2","3","4","5","6"].includes(e)},className:{type:String,default:""}},setup(e){const n=e,C=r(()=>[`title title-level-${n.level} title-${n.themeColor}`]),N=r(()=>[C.value,n.className].filter(Boolean).join(" "));return(d,L)=>(D(),h("div",{class:y(N.value)},[f(d.$slots,"default")],2))}};l.__docgenInfo={exportName:"default",displayName:"Title",description:"",tags:{},props:[{name:"themeColor",type:{name:"string"},values:["primary","secondary","tertiary","success","warning","error","info"]},{name:"level",type:{name:"string"},defaultValue:{func:!1,value:"'0'"},values:["0","1","2","3","4","5","6"]},{name:"className",type:{name:"string"},defaultValue:{func:!1,value:"''"}}],slots:[{name:"default"}],sourceFiles:["/Users/auouser/Desktop/Work_Space/DED-WDS_VUE/libs/src/ui/element/Title/Title.vue"]};const S={title:"Design System/Title",component:l,tags:["autodocs"],argTypes:{themeColor:{description:"主題顏色",control:{type:"select"},options:["none","primary","secondary","tertiary","success","warning","error","info"],mapping:{none:""}},content:{description:"標題內容",control:{type:"text"}},level:{description:"標題等級",control:{type:"select"},options:["0","1","2","3","4","5","6"]},className:{description:"客製化樣式",control:{type:"text"}}},parameters:{docs:{title:"Title",description:{component:"Title 組件的呈現及說明。"}}}},a={name:"預設項目",args:{content:"標題",themeColor:"",level:1,className:""},render:e=>({components:{Title:l},setup(){return{args:e}},template:`
            <Title
                :themeColor="args.themeColor"
                :level="args.level"
                :className="args.className"
            >{{ args.content }}</Title>
        `}),parameters:{controls:{exclude:["default"]}}},s={name:"標題大小",args:{content:"標題文字",themeColor:"",className:""},render:e=>({components:{Title:l},setup(){return{args:e}},template:`
            <Title 
                :themeColor="args.themeColor"
                level="1"
                :className="args.className"
            >Level:1 {{ args.content }}</Title>
            <Title
                :themeColor="args.themeColor"
                level="2"
                :className="args.className"
            >Level:2 {{ args.content }}</Title>
            <Title
                :themeColor="args.themeColor"
                level="3"
                :className="args.className"
            >Level:3 {{ args.content }}</Title>
            <Title
                :themeColor="args.themeColor"
                level="4"
                :className="args.className"
            >Level:4 {{ args.content }}</Title>
            <Title
                :themeColor="args.themeColor"
                level="5"
                :className="args.className"
            >Level:5 {{ args.content }}</Title>
            <Title
                :themeColor="args.themeColor"
                level="6"
                :className="args.className"
            >Level:6 {{ args.content }}</Title>
            <Title
                :themeColor="args.themeColor"
                level="0"
                :className="args.className"
            >Level:0 {{ args.content }}</Title>
        `}),parameters:{controls:{exclude:["default","level"]}}},t={name:"主題色彩",args:{content:"標題文字",level:1,className:""},render:e=>({components:{Title:l},setup(){return{args:e}},template:`
            <Title
                themeColor="primary"
                :level="args.level"
                :className="args.className"
            >{{ args.content }}</Title>
            <Title
                themeColor="secondary"
                :level="args.level"
                :className="args.className"
            >{{ args.content }}</Title>
            <Title
                themeColor="tertiary"
                :level="args.level"
                :className="args.className"
            >{{ args.content }}</Title>
            <Title
                themeColor="success"
                :level="args.level"
                :className="args.className"
            >{{ args.content }}</Title>
            <Title
                themeColor="warning"
                :level="args.level"
                :className="args.className"
            >{{ args.content }}</Title>
            <Title
                themeColor="error"
                :level="args.level"
                :className="args.className"
            >{{ args.content }}</Title>
            <Title
                themeColor="info"
                :level="args.level"
                :className="args.className"
            >{{ args.content }}</Title>
        `}),parameters:{controls:{exclude:["default","themeColor"]}}};var o,c,m;a.parameters={...a.parameters,docs:{...(o=a.parameters)==null?void 0:o.docs,source:{originalSource:`{
  name: "預設項目",
  args: {
    content: "標題",
    themeColor: "",
    level: 1,
    className: ""
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
            >{{ args.content }}</Title>
        \`
  }),
  // 控制 controls 中能控制的參數
  parameters: {
    controls: {
      // include: ['themeColor', 'label', 'value', 'name' ],
      exclude: ['default']
    }
  }
}`,...(m=(c=a.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var i,g,u;s.parameters={...s.parameters,docs:{...(i=s.parameters)==null?void 0:i.docs,source:{originalSource:`{
  name: "標題大小",
  args: {
    content: "標題文字",
    themeColor: "",
    className: ""
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
            >Level:1 {{ args.content }}</Title>
            <Title
                :themeColor="args.themeColor"
                level="2"
                :className="args.className"
            >Level:2 {{ args.content }}</Title>
            <Title
                :themeColor="args.themeColor"
                level="3"
                :className="args.className"
            >Level:3 {{ args.content }}</Title>
            <Title
                :themeColor="args.themeColor"
                level="4"
                :className="args.className"
            >Level:4 {{ args.content }}</Title>
            <Title
                :themeColor="args.themeColor"
                level="5"
                :className="args.className"
            >Level:5 {{ args.content }}</Title>
            <Title
                :themeColor="args.themeColor"
                level="6"
                :className="args.className"
            >Level:6 {{ args.content }}</Title>
            <Title
                :themeColor="args.themeColor"
                level="0"
                :className="args.className"
            >Level:0 {{ args.content }}</Title>
        \`
  }),
  // 控制 controls 中能控制的參數
  parameters: {
    controls: {
      // include: ['themeColor', 'label', 'value', 'name' ],
      exclude: ['default', 'level']
    }
  }
}`,...(u=(g=s.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};var v,p,T;t.parameters={...t.parameters,docs:{...(v=t.parameters)==null?void 0:v.docs,source:{originalSource:`{
  name: "主題色彩",
  args: {
    content: "標題文字",
    level: 1,
    className: ""
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
            >{{ args.content }}</Title>
            <Title
                themeColor="secondary"
                :level="args.level"
                :className="args.className"
            >{{ args.content }}</Title>
            <Title
                themeColor="tertiary"
                :level="args.level"
                :className="args.className"
            >{{ args.content }}</Title>
            <Title
                themeColor="success"
                :level="args.level"
                :className="args.className"
            >{{ args.content }}</Title>
            <Title
                themeColor="warning"
                :level="args.level"
                :className="args.className"
            >{{ args.content }}</Title>
            <Title
                themeColor="error"
                :level="args.level"
                :className="args.className"
            >{{ args.content }}</Title>
            <Title
                themeColor="info"
                :level="args.level"
                :className="args.className"
            >{{ args.content }}</Title>
        \`
  }),
  // 控制 controls 中能控制的參數
  parameters: {
    controls: {
      // include: ['themeColor', 'label', 'value', 'name' ],
      exclude: ['default', 'themeColor']
    }
  }
}`,...(T=(p=t.parameters)==null?void 0:p.docs)==null?void 0:T.source}}};const _=["HeadingDefault","HeadingSizeDefault","HeadingColorDefault"];export{t as HeadingColorDefault,a as HeadingDefault,s as HeadingSizeDefault,_ as __namedExportsOrder,S as default};

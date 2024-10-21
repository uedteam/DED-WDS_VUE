import{f as s,c as p,q as m,n as d,o as g}from"./vue.esm-bundler-Bm7qTojY.js";const r={__name:"Title",props:{themeColor:{type:String,validator:e=>["primary","secondary","tertiary","success","warning","error","info"].includes(e)},level:{type:String,default:"0",validator:e=>["0","1","2","3","4","5","6"].includes(e)},customClass:{type:String,default:""}},setup(e){const n=e,i=s(()=>[`title title-level-${n.level} title-${n.themeColor}`]),c=s(()=>[i.value,n.customClass].filter(Boolean).join(" "));return(u,f)=>(g(),p("div",{class:d(c.value)},[m(u.$slots,"default")],2))}};r.__docgenInfo={exportName:"default",displayName:"Title",description:"",tags:{},props:[{name:"themeColor",type:{name:"string"},values:["primary","secondary","tertiary","success","warning","error","info"]},{name:"level",type:{name:"string"},defaultValue:{func:!1,value:"'0'"},values:["0","1","2","3","4","5","6"]},{name:"customClass",type:{name:"string"},defaultValue:{func:!1,value:"''"}}],slots:[{name:"default"}],sourceFiles:["/Users/auouser/Desktop/Work_Space/DED-WDS_VUE/libs/src/ui/element/Title/Title.vue"]};const y={title:"Design System/Title",component:r,tags:["autodocs"],argTypes:{themeColor:{description:"主題顏色",control:{type:"select"},options:["none","primary","secondary","tertiary","success","warning","error","info"],mapping:{none:""}},content:{description:"標題文字",control:{type:"text"}},level:{description:"標題文字大小",control:{type:"select"},options:["0","1","2","3","4","5","6"]},customClass:{description:"客製化樣式",control:{type:"text"}}},parameters:{docs:{title:"Title",description:{component:"Title組件的呈現及說明。"}}}},t={name:"標題樣式",args:{content:"標題",themeColor:"",level:1},render:e=>({components:{Title:r},setup(){return{args:e}},template:`
            <Title
                :themeColor="args.themeColor"
                :level="args.level"
            >{{ args.content }}</Title>
        `}),parameters:{controls:{exclude:["default"]}}};var o,l,a;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
  name: "標題樣式",
  args: {
    content: "標題",
    themeColor: "",
    level: 1
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
}`,...(a=(l=t.parameters)==null?void 0:l.docs)==null?void 0:a.source}}};const C=["HeadingDefault"];export{t as HeadingDefault,C as __namedExportsOrder,y as default};

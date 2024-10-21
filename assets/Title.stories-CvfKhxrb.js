import{f as a,c as m,g as p,n as d,o as g}from"./vue.esm-bundler-qOdkfnRX.js";const s={__name:"Title",props:{themeColor:{type:String,validator:e=>["primary","secondary","tertiary","success","warning","error","info"].includes(e)},level:{type:String,default:"0",validator:e=>["0","1","2","3","4","5","6"].includes(e)},className:{type:String,default:""}},setup(e){const n=e,c=a(()=>[`title title-level-${n.level} title-${n.themeColor}`]),i=a(()=>[c.value,n.className].filter(Boolean).join(" "));return(u,f)=>(g(),m("div",{class:d(i.value)},[p(u.$slots,"default")],2))}};s.__docgenInfo={exportName:"default",displayName:"Title",description:"",tags:{},props:[{name:"themeColor",type:{name:"string"},values:["primary","secondary","tertiary","success","warning","error","info"]},{name:"level",type:{name:"string"},defaultValue:{func:!1,value:"'0'"},values:["0","1","2","3","4","5","6"]},{name:"className",type:{name:"string"},defaultValue:{func:!1,value:"''"}}],slots:[{name:"default"}],sourceFiles:["/Users/jony_worker/Documents/90_外部檔案/upstream/DED-WDS_VUE/libs/src/ui/element/Title/Title.vue"]};const v={title:"Design System/Title",component:s,tags:["autodocs"],argTypes:{themeColor:{description:"主題顏色",control:{type:"select"},options:["none","primary","secondary","tertiary","success","warning","error","info"],mapping:{none:""}},content:{description:"標題內容",control:{type:"text"}},level:{description:"標題等級",control:{type:"select"},options:["0","1","2","3","4","5","6"]},className:{description:"客製化樣式",control:{type:"text"}}},parameters:{docs:{title:"Title",description:{component:"Title 組件的呈現及說明。"}}}},t={name:"主要項目",args:{content:"標題",themeColor:"",level:1,className:""},render:e=>({components:{Title:s},setup(){return{args:e}},template:`
            <Title
                :themeColor="args.themeColor"
                :level="args.level"
                :className="args.className"
            >{{ args.content }}</Title>
        `}),parameters:{controls:{exclude:["default"]}}};var r,l,o;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
  name: "主要項目",
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
}`,...(o=(l=t.parameters)==null?void 0:l.docs)==null?void 0:o.source}}};const C=["HeadingDefault"];export{t as HeadingDefault,C as __namedExportsOrder,v as default};

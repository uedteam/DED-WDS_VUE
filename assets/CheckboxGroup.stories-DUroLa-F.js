import{_ as s}from"./Checkbox-raX8lJuF.js";import{o as c,c as u,g as p,n as m,r as d}from"./vue.esm-bundler-XWim8Fx5.js";import"./Icon-DD-8nGjT.js";import"./iframe-BZBeCght.js";import"../sb-preview/runtime.js";const i={__name:"CheckboxGroup",props:{direction:{type:String,validator:e=>["row","column"].includes(e),default:"row"},className:{type:String,default:""}},setup(e){const n=e;return(r,k)=>(c(),u("div",{class:m({"checkbox-container":!0,[`checkbox-container-${n.direction}`]:!0,[n.className]:!!n.className})},[p(r.$slots,"default")],2))}};i.__docgenInfo={exportName:"default",displayName:"CheckboxGroup",description:"",tags:{},props:[{name:"direction",type:{name:"string"},defaultValue:{func:!1,value:"'row'"},values:["row","column"]},{name:"className",type:{name:"string"},defaultValue:{func:!1,value:"''"}}],slots:[{name:"default"}],sourceFiles:["/Users/auouser/Desktop/Work_Space/DED-WDS_VUE/libs/src/ui/element/Checkbox/CheckboxGroup.vue"]};const y={title:"Design System/CheckboxGroup",component:s,excludeStories:/.*Data$/,tags:["autodocs"],argTypes:{direction:{description:"方向",control:{type:"select"},options:["row","column"]},themeColor:{description:"主題顏色",control:{type:"select"},options:["primary","secondary","tertiary","success","warning","error","info"]},className:{description:"客製化樣式",control:{type:"text"}},options:{description:"選項",control:{type:"array"}}},parameters:{docs:{title:"複選框",description:{component:"複選框組件的呈現及說明。"}}}},a={name:"checkbox 複選樣式",args:{direction:"row",themeColor:"primary",options:[{label:"HTML",id:"html",value:"HTML",name:"skills"},{label:"Sass",id:"sass",value:"Sass",name:"skills"},{label:"Tailwind CSS",id:"tailwind css",value:"Tailwind CSS",name:"skills"},{label:"JavaScript",id:"javascript",value:"JavaScript",name:"skills"},{label:"TypeScript",id:"typescript",value:"TypeScript",name:"skills"},{label:"Vue",id:"vue",value:"Vue",name:"skills"},{label:"React",id:"react",value:"React",name:"skills"},{label:"Angular",id:"angular",value:"Angular",name:"skills"}]},render:e=>({components:{Checkbox:s,CheckboxGroup:i},setup(){const n=d([]);return{args:e,checkedCheckboxOptions:n}},template:`
            <CheckboxGroup :direction="args.direction">
                <Checkbox v-for="(item, index) in args.options"
                    :key="index"
                    :label="item.label"
                    :value="item.value"
                    :name="item.name"
                    :id="item.id"
                    :themeColor="args.themeColor"
                    v-model="checkedCheckboxOptions"
                >{{item.value}}</Checkbox>
            </CheckboxGroup>
            <p style="font-weight: 700;">Tell me what skills you have (v-model):</p>
            <ul style="list-style: none">
                <li v-for="(item) in checkedCheckboxOptions">
                    <span>-</span>
                    {{item}}
                </li>
            </ul>
        `}),parameters:{controls:{include:["themeColor","direction","options"]}}};var l,o,t;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  name: "checkbox 複選樣式",
  args: {
    direction: "row",
    themeColor: "primary",
    options: [{
      label: "HTML",
      id: "html",
      value: "HTML",
      name: "skills"
    }, {
      label: "Sass",
      id: "sass",
      value: "Sass",
      name: "skills"
    }, {
      label: "Tailwind CSS",
      id: "tailwind css",
      value: "Tailwind CSS",
      name: "skills"
    }, {
      label: "JavaScript",
      id: "javascript",
      value: "JavaScript",
      name: "skills"
    }, {
      label: "TypeScript",
      id: "typescript",
      value: "TypeScript",
      name: "skills"
    }, {
      label: "Vue",
      id: "vue",
      value: "Vue",
      name: "skills"
    }, {
      label: "React",
      id: "react",
      value: "React",
      name: "skills"
    }, {
      label: "Angular",
      id: "angular",
      value: "Angular",
      name: "skills"
    }]
  },
  render: args => ({
    components: {
      Checkbox,
      CheckboxGroup
    },
    setup() {
      // Create a ref for modelValue to be used with v-model
      const checkedCheckboxOptions = ref([]);
      return {
        args,
        checkedCheckboxOptions
      };
    },
    template: \`
            <CheckboxGroup :direction="args.direction">
                <Checkbox v-for="(item, index) in args.options"
                    :key="index"
                    :label="item.label"
                    :value="item.value"
                    :name="item.name"
                    :id="item.id"
                    :themeColor="args.themeColor"
                    v-model="checkedCheckboxOptions"
                >{{item.value}}</Checkbox>
            </CheckboxGroup>
            <p style="font-weight: 700;">Tell me what skills you have (v-model):</p>
            <ul style="list-style: none">
                <li v-for="(item) in checkedCheckboxOptions">
                    <span>-</span>
                    {{item}}
                </li>
            </ul>
        \`
  }),
  // 控制 controls 中能控制的參數
  parameters: {
    controls: {
      include: ['themeColor', 'direction', 'options']
    }
  }
}`,...(t=(o=a.parameters)==null?void 0:o.docs)==null?void 0:t.source}}};const g=["MultiCheckbox"];export{a as MultiCheckbox,g as __namedExportsOrder,y as default};

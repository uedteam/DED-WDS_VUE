import{m as S,u as f,h as g,c as o,j as v,N as y,a as p,F as h,C as N,n as b,o as r,t as D}from"./vue.esm-bundler-C8tbd0VY.js";const O=["value"],c={__name:"Select",props:S({options:{type:Array,required:!0,default:()=>[]},placeholder:{type:String,default:"Placeholder..."},className:{type:String,default:""}},{modelValue:{},modelModifiers:{}}),emits:["update:modelValue"],setup(a){const l=f(a,"modelValue"),s=a,u=g(l);return(V,t)=>(r(),o("div",{class:b({"ded-select-container":!0,[s.className]:!!s.className})},[v(p("select",{class:"ded-select","onUpdate:modelValue":t[0]||(t[0]=e=>u.value=e)},[t[1]||(t[1]=p("option",{value:""},"Select",-1)),(r(!0),o(h,null,N(s.options,e=>(r(),o("option",{key:e.value,value:e.value},D(e.label),9,O))),128))],512),[[y,u.value]])],2))}};c.__docgenInfo={exportName:"default",displayName:"Select",description:"",tags:{},props:[{name:"options",type:{name:"array"},required:!0,defaultValue:{func:!1,value:"[]"}},{name:"placeholder",type:{name:"string"},defaultValue:{func:!1,value:'"Placeholder..."'}},{name:"className",type:{name:"string"},defaultValue:{func:!1,value:'""'}}],sourceFiles:["D:/98_測試/up/DED-WDS_VUE/libs/src/ui/element/Select/Select.vue"]};const _={title:"Component/Select",component:c,tags:["autodocs"],argTypes:{options:{description:"選項",control:{type:"object"},table:{type:{summary:"{ label: string; value: string | number; }[]"}}},placeholder:{description:"輸入提示",control:{type:"text"}},className:{description:"客製化樣式",control:{type:"text"}}},parameters:{docs:{title:"Select",description:{component:"Select 組件的呈現及說明。"}}}},n={name:"預設項目",args:{options:[{label:"Option 1",value:"1"},{label:"Option 2",value:"2"},{label:"Option 3",value:"3"}],placeholder:"Placeholder...",className:""},render:a=>({components:{Select:c},setup(){const l=g("");return{args:a,selectedOption:l}},template:`
            <Select 
                :options="args.options"
                :placeholder="args.placeholder"
                :className="args.className"
                v-model="selectedOption"
            >
            </Select>
            
            選到的值: {{selectedOption}}
            `}),parameters:{controls:{}}};var d,i,m;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
  name: '預設項目',
  args: {
    options: [{
      "label": "Option 1",
      "value": "1"
    }, {
      "label": "Option 2",
      "value": "2"
    }, {
      "label": "Option 3",
      "value": "3"
    }],
    placeholder: "Placeholder...",
    className: ""
  },
  render: args => ({
    components: {
      Select
    },
    setup() {
      const selectedOption = ref("");
      return {
        args,
        selectedOption
      };
    },
    template: \`
            <Select 
                :options="args.options"
                :placeholder="args.placeholder"
                :className="args.className"
                v-model="selectedOption"
            >
            </Select>
            
            選到的值: {{selectedOption}}
            \`
  }),
  // 控制 controls 中能控制的參數
  parameters: {
    controls: {
      // include: ['objectFit', 'src', 'value', 'name' ],
    }
    // docs: {
    //     source: {
    //         transform: (src, storyContext) => {
    //             const { args } = storyContext;
    //             const dataSourceString = formatDataSource(args.dataSource);
    //             return [
    //                 '<Dropdown',
    //                 \`  :datasource="\${dataSourceString}"\`,
    //                 \`  :label="\${args.label}"\`,
    //                 \`  :placeholder="\${args.placeholder}"\`,
    //                 \`  :size="\${args.size}"\`,
    //                 \`  :maxHeight="\${args.maxHeight}"\`,
    //                 \`  :className="\${args.className}"\`,
    //                 '>',
    //                 '</Dropdown>',
    //             ].join('\\n').trim();
    //         }
    //     }
    // }
  }
}`,...(m=(i=n.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const C=["SelectDefault"];export{n as SelectDefault,C as __namedExportsOrder,_ as default};

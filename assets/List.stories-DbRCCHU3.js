import{c,g as m,n as u,o as p}from"./vue.esm-bundler-qOdkfnRX.js";import{_ as i}from"./ListItem-CbL5SADi.js";import{_ as f}from"./Icon--ItJL-jQ.js";import"./iframe-_sffG8eQ.js";import"../sb-preview/runtime.js";const s={__name:"List",props:{isMenu:{type:Boolean,default:!0},className:{type:String}},setup(n){const t=n;return(r,g)=>(p(),c("ul",{class:u({list:!0,menu:t.isMenu,[t.className]:!!t.className})},[m(r.$slots,"default")],2))}};s.__docgenInfo={exportName:"default",displayName:"List",description:"",tags:{},props:[{name:"isMenu",type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"className",type:{name:"string"}}],slots:[{name:"default"}],sourceFiles:["/Users/auouser/Desktop/Work_Space/DED-WDS_VUE/libs/src/ui/element/List/List.vue"]};const I={title:"Design System/List",component:s,subcomponents:{ListItem:i},tags:["autodocs"],argTypes:{options:{description:"選項",control:"object"},isMenu:{description:"是否為選單",control:"boolean"},className:{description:"客製化樣式",control:"text"}},parameters:{docs:{title:"List",description:{component:"List 組件的呈現及說明。"}}}},e={name:"List 基礎樣式",args:{isMenu:!0,className:"col-5",options:[{content:{label:"選項一",value:"option1",href:"https://www.google.com"}},{content:{label:"選項二",value:"option2",href:"https://www.google.com"}},{content:{label:"選項三",value:"option3",href:"https://www.google.com"}}]},render:n=>({components:{List:s,ListItem:i,Icon:f},setup(){return{args:n}},template:`
            <List
                :isMenu="args.isMenu"
                :className="args.className"
            >
                <ListItem
                    v-for="(item, index) in args.options"
                    :key="index"
                    :label="item.content.label"
                    :value="item.content.value"
                    :href="item.content.href"
                >
                    <template #listPrefix>
                        <Icon name="account_circle" size="24"></Icon>
                    </template>
                    <template #listSuffix>
                        <Icon name="arrow_down" size="24"></Icon>
                    </template>
                </ListItem>
            </List>
        `}),parameters:{controls:{}}};var o,a,l;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  name: "List 基礎樣式",
  args: {
    isMenu: true,
    className: 'col-5',
    options: [{
      "content": {
        "label": "選項一",
        "value": "option1",
        "href": "https://www.google.com"
      }
    }, {
      "content": {
        "label": "選項二",
        "value": "option2",
        "href": "https://www.google.com"
      }
    }, {
      "content": {
        "label": "選項三",
        "value": "option3",
        "href": "https://www.google.com"
      }
    }]
  },
  render: args => ({
    components: {
      List,
      ListItem,
      Icon
    },
    setup() {
      return {
        args
      };
    },
    template: \`
            <List
                :isMenu="args.isMenu"
                :className="args.className"
            >
                <ListItem
                    v-for="(item, index) in args.options"
                    :key="index"
                    :label="item.content.label"
                    :value="item.content.value"
                    :href="item.content.href"
                >
                    <template #listPrefix>
                        <Icon name="account_circle" size="24"></Icon>
                    </template>
                    <template #listSuffix>
                        <Icon name="arrow_down" size="24"></Icon>
                    </template>
                </ListItem>
            </List>
        \`
  }),
  // 控制 controls 中能控制的參數
  parameters: {
    controls: {
      // include: ['themeColor', 'label', 'value', 'name' ],
    }
  }
}`,...(l=(a=e.parameters)==null?void 0:a.docs)==null?void 0:l.source}}};const b=["ListDefault"];export{e as ListDefault,b as __namedExportsOrder,I as default};

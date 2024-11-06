import{_ as s}from"./List-Cegqj3Bt.js";import{_ as a}from"./ListItem-Bjyz09cs.js";import{_ as r}from"./Icon-DD-8nGjT.js";import"./vue.esm-bundler-XWim8Fx5.js";import"./iframe-BZBeCght.js";import"../sb-preview/runtime.js";const f={title:"Design System/List",component:s,subcomponents:{ListItem:a},tags:["autodocs"],argTypes:{options:{description:"選項",control:{type:"object"}},isMenu:{description:"是否為選單",control:{type:"boolean"}},maxHeight:{description:"最大高度，自動顯示卷軸 (px)",control:{type:"text"}},className:{description:"客製化樣式",control:{type:"text"}}},parameters:{docs:{title:"List",description:{component:"List 組件的呈現及說明。"}}}},e={name:"List 基礎樣式",args:{maxHeight:"",isMenu:!0,className:"col-5",options:[{content:{label:"選項一",value:"option1",href:"https://www.google.com"}},{content:{label:"選項二",value:"option2",href:"https://www.google.com"}},{content:{label:"選項三",value:"option3",href:"https://www.google.com"}}]},render:i=>({components:{List:s,ListItem:a,Icon:r},setup(){return{args:i}},template:`
            <List
                :maxHeight="args.maxHeight"
                :className="args.className"
                :isMenu="args.isMenu"
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
        `}),parameters:{controls:{}}};var t,n,o;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  name: "List 基礎樣式",
  args: {
    maxHeight: '',
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
                :maxHeight="args.maxHeight"
                :className="args.className"
                :isMenu="args.isMenu"
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
}`,...(o=(n=e.parameters)==null?void 0:n.docs)==null?void 0:o.source}}};const h=["ListDefault1"];export{e as ListDefault1,h as __namedExportsOrder,f as default};

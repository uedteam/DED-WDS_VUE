import{_ as a}from"./List-BSGJT1qL.js";import{_ as f}from"./ListItem-BI-MxbsN.js";import{_ as p}from"./Icon-CAH_ZwBp.js";import"./vue.esm-bundler-_3atnb9w.js";import"./iframe-CeK3pwPU.js";import"../sb-preview/runtime.js";const S={title:"Design System/List",component:a,tags:["autodocs"],argTypes:{datasource:{description:"選項",control:{type:"object"}},maxHeight:{description:"最大高度，自動顯示卷軸 (px)",control:{type:"text"},table:{category:"List"}},isMenu:{description:"是否為選單",control:{type:"boolean"},table:{category:"List"}},className:{description:"客製化樣式",control:{type:"text"},table:{category:"List"}},label:{description:"標題。",control:"text",table:{category:"ListItem"}},value:{description:"值。",control:"text",table:{category:"ListItem"}},href:{description:"超連結。",control:{type:"select",labels:{null:"None","https://www.google.com":"google","https://developer.mozilla.org/en-US/#":"mdn"}},options:[null,"https://www.google.com","https://developer.mozilla.org/en-US/#"],table:{category:"ListItem"}},listPrefix:{description:"prefix 插槽。",control:"select",options:["account_circle","folder","finger-print","None"],mapping:{None:null},table:{category:"ListItem",defaultValue:{summary:"HTML element"}}},listSuffix:{description:"suffix 插槽。",control:"select",options:["account_circle","folder","finger-print","None"],mapping:{None:null},table:{category:"ListItem",defaultValue:{summary:"HTML element"}}}},parameters:{docs:{title:"List",description:{component:"List 組件的呈現及說明。"}}}},n={name:"預設項目",args:{datasource:[{content:{label:"選項一",value:"option1",href:""}},{content:{label:"選項二",value:"option2",href:""}},{content:{label:"選項三",value:"option3",href:""}}],maxHeight:"50px",isMenu:!1,className:"col-5",href:null,listPrefix:"folder",listSuffix:"None"},render:t=>({components:{List:a,ListItem:f,Icon:p},setup(){return{args:t}},template:`
            <List
                :maxHeight="args.maxHeight"
                :isMenu="args.isMenu"
                :className="args.className"
            >
                <ListItem
                    v-for="(item, index) in args.datasource"
                    :key="index"
                    :label="item.content.label"
                    :value="item.content.value"
                    :href="args.href"
                >
                    <template #listPrefix v-if="args.listPrefix">
                        <Icon :name="args.listPrefix" size="24"></Icon>
                    </template>
                    <template #listSuffix v-if="args.listSuffix">
                        <Icon :name="args.listSuffix" size="24"></Icon>
                    </template>
                    
                </ListItem>
            </List>
        `}),parameters:{controls:{exclude:["default"]},docs:{source:{transform:(t,g)=>{const{args:e}=g;return["<List",`  :maxHeight="${e.maxHeight}"`,`  :isMenu="${e.isMenu}"`,`  :className="${e.className}"`,">",e.datasource.map((i,x)=>["  <ListItem",`    :key="${x}"`,`    :label="${i.content.label}"`,`    :value="${i.content.value}"`,`    :href="${e.href}"`,"  >",e.listPrefix?["    <template #listPrefix>",`      <Icon name="${e.listPrefix}" size="24"></Icon>`,"    </template>"].join(`
`):"",e.listSuffix?["    <template #listSuffix>",`      <Icon name="${e.listSuffix}" size="24"></Icon>`,"    </template>"].join(`
`):"","  </ListItem>"].join(`
`)).join(`
`),"</List>"].join(`
`).trim()}}}}},s={name:"選單樣式",args:{datasource:[{content:{label:"選項一",value:"option1",href:""}},{content:{label:"選項二",value:"option2",href:""}},{content:{label:"選項三",value:"option3",href:""}}],maxHeight:"50px",className:"col-5",href:"None",listPrefix:"folder",listSuffix:"None"},render:t=>({components:{List:a,ListItem:f,Icon:p},setup(){return{args:t}},template:`
            <List
                :maxHeight="args.maxHeight"
                :isMenu=true
                :className="args.className"
            >
                <ListItem
                    v-for="(item, index) in args.datasource"
                    :key="index"
                    :label="item.content.label"
                    :value="item.content.value"
                    :href="args.href"
                >
                    <template #listPrefix v-if="args.listPrefix">
                        <Icon :name="args.listPrefix" size="24"></Icon>
                    </template>
                    <template #listSuffix v-if="args.listSuffix">
                        <Icon :name="args.listSuffix" size="24"></Icon>
                    </template>
                    
                </ListItem>
            </List>
        `}),parameters:{controls:{exclude:["default"]}}};var r,o,l;n.parameters={...n.parameters,docs:{...(r=n.parameters)==null?void 0:r.docs,source:{originalSource:`{
  name: '預設項目',
  args: {
    //listGroup
    datasource: [{
      content: {
        label: '選項一',
        value: 'option1',
        href: ''
      }
    }, {
      content: {
        label: '選項二',
        value: 'option2',
        href: ''
      }
    }, {
      content: {
        label: '選項三',
        value: 'option3',
        href: ''
      }
    }],
    maxHeight: '50px',
    isMenu: false,
    className: 'col-5',
    //listItem
    href: null,
    listPrefix: 'folder',
    listSuffix: 'None'
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
                :isMenu="args.isMenu"
                :className="args.className"
            >
                <ListItem
                    v-for="(item, index) in args.datasource"
                    :key="index"
                    :label="item.content.label"
                    :value="item.content.value"
                    :href="args.href"
                >
                    <template #listPrefix v-if="args.listPrefix">
                        <Icon :name="args.listPrefix" size="24"></Icon>
                    </template>
                    <template #listSuffix v-if="args.listSuffix">
                        <Icon :name="args.listSuffix" size="24"></Icon>
                    </template>
                    
                </ListItem>
            </List>
        \`
  }),
  // 控制 controls 中能控制的參數
  parameters: {
    controls: {
      exclude: ['default']
    },
    docs: {
      source: {
        transform: (src, storyContext) => {
          const {
            args
          } = storyContext;
          return ['<List', \`  :maxHeight="\${args.maxHeight}"\`, \`  :isMenu="\${args.isMenu}"\`, \`  :className="\${args.className}"\`, '>', args.datasource.map((item, index) => ['  <ListItem', \`    :key="\${index}"\`, \`    :label="\${item.content.label}"\`, \`    :value="\${item.content.value}"\`, \`    :href="\${args.href}"\`, '  >', args.listPrefix ? ['    <template #listPrefix>', \`      <Icon name="\${args.listPrefix}" size="24"></Icon>\`, '    </template>'].join('\\n') : '', args.listSuffix ? ['    <template #listSuffix>', \`      <Icon name="\${args.listSuffix}" size="24"></Icon>\`, '    </template>'].join('\\n') : '', '  </ListItem>'].join('\\n')).join('\\n'), '</List>'].join('\\n').trim();
        }
      }
    }
  }
}`,...(l=(o=n.parameters)==null?void 0:o.docs)==null?void 0:l.source}}};var c,m,u;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`{
  name: '選單樣式',
  args: {
    //listGroup
    datasource: [{
      content: {
        label: '選項一',
        value: 'option1',
        href: ''
      }
    }, {
      content: {
        label: '選項二',
        value: 'option2',
        href: ''
      }
    }, {
      content: {
        label: '選項三',
        value: 'option3',
        href: ''
      }
    }],
    maxHeight: '50px',
    className: 'col-5',
    //listItem
    href: 'None',
    listPrefix: 'folder',
    listSuffix: 'None'
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
                :isMenu=true
                :className="args.className"
            >
                <ListItem
                    v-for="(item, index) in args.datasource"
                    :key="index"
                    :label="item.content.label"
                    :value="item.content.value"
                    :href="args.href"
                >
                    <template #listPrefix v-if="args.listPrefix">
                        <Icon :name="args.listPrefix" size="24"></Icon>
                    </template>
                    <template #listSuffix v-if="args.listSuffix">
                        <Icon :name="args.listSuffix" size="24"></Icon>
                    </template>
                    
                </ListItem>
            </List>
        \`
  }),
  // 控制 controls 中能控制的參數
  parameters: {
    controls: {
      exclude: ['default']
    }
  }
}`,...(u=(m=s.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};const y=["ListDefaultStory","ListTypeStory"];export{n as ListDefaultStory,s as ListTypeStory,y as __namedExportsOrder,S as default};

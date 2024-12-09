import{_ as s,L as f}from"./List-DVi9B_3K.js";import"./vue.esm-bundler-C-bz8AVj.js";import"./Icon-Z8NrOAXH.js";import"./iframe-DaIFIyPY.js";import"../sb-preview/runtime.js";function p(n){return`[
        ${n.map(e=>`{
            label: '${e.label}',
            value: '${e.value}',
            href: '${e.href}',
            prefix: '${e.prefix}',
        }`).join(`,
    `)}
    ]`}const O={title:"Component/List",component:s,tags:["autodocs"],argTypes:{dataSource:{description:"資料來源",control:{type:"object"}},hasOutline:{description:"是否為選單",control:{type:"boolean"}},className:{description:"客製化樣式",control:{type:"text"}}},parameters:{docs:{title:"List",description:{component:"List 組件的呈現及說明。"}}}},a={name:"預設項目",args:{dataSource:[{label:"Option1",value:"option1",href:"",prefix:"home"},{label:"Option2",value:"option2",href:"#",prefix:"users"},{label:"Option3",value:"option3",href:"#",prefix:"folder"}],hasOutline:!1,className:""},render:n=>({components:{List:s,ListItem:f},setup(){return{args:n}},template:`
            <List
                :hasOutline="args.hasOutline"
                :className="args.className"
            >
                <ListItem
                    v-for="(item, index) in args.dataSource"
                    :key="index"
                    :label="item.label"
                    :value="item.value"
                    :href="item.href"
                    :prefix="item.prefix"
                ></ListItem>
            </List>
        `}),parameters:{controls:{exclude:["default"]},docs:{source:{transform:(n,e)=>{const{args:t}=e;return["<List",`    :dataSource="${p(t.dataSource)}"`,`    :hasOutline="${t.hasOutline}"`,`    className="${t.className}"`,">","</List>"].join(`
`).trim()}}}}},r={name:"選單樣式",args:{dataSource:[{content:{label:"選項一",value:"option1",href:"",prefix:"folder"}},{content:{label:"選項二",value:"option2",href:"",prefix:"home"}},{content:{label:"選項三",value:"option3",href:"www.google.com",prefix:"folder"}}],className:"col-5"},render:n=>({components:{List:s},setup(){return{args:n}},template:`
            <List
                :dataSource="args.dataSource"
                :hasOutline="true"
                :className="args.className"
            >
            </List>
        `}),parameters:{controls:{exclude:["default"]},docs:{source:{transform:(n,e)=>{const{args:t}=e;return["<List",`    :dataSource="${p(t.dataSource)}"`,'    :hasOutline="true"',`    className="${t.className}"`,">","</List>"].join(`
`).trim()}}}}};var o,u,i;a.parameters={...a.parameters,docs:{...(o=a.parameters)==null?void 0:o.docs,source:{originalSource:`{
  name: "預設項目",
  args: {
    dataSource: [{
      "label": "Option1",
      "value": "option1",
      "href": "",
      "prefix": "home"
    }, {
      "label": "Option2",
      "value": "option2",
      "href": "#",
      "prefix": "users"
    }, {
      "label": "Option3",
      "value": "option3",
      "href": "#",
      "prefix": "folder"
    }],
    hasOutline: false,
    className: ''
  },
  render: args => ({
    components: {
      List,
      ListItem
    },
    setup() {
      return {
        args
      };
    },
    template: \`
            <List
                :hasOutline="args.hasOutline"
                :className="args.className"
            >
                <ListItem
                    v-for="(item, index) in args.dataSource"
                    :key="index"
                    :label="item.label"
                    :value="item.value"
                    :href="item.href"
                    :prefix="item.prefix"
                ></ListItem>
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
          const dataSourceString = formatDataSource(args.dataSource);
          return ['<List', \`    :dataSource="\${dataSourceString}"\`, \`    :hasOutline="\${args.hasOutline}"\`, \`    className="\${args.className}"\`, '>', '</List>'].join('\\n').trim();
        }
      }
    }
  }
}`,...(i=(u=a.parameters)==null?void 0:u.docs)==null?void 0:i.source}}};var l,c,m;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  name: "選單樣式",
  args: {
    dataSource: [{
      "content": {
        "label": "選項一",
        "value": "option1",
        "href": "",
        "prefix": "folder"
      }
    }, {
      "content": {
        "label": "選項二",
        "value": "option2",
        "href": "",
        "prefix": "home"
      }
    }, {
      "content": {
        "label": "選項三",
        "value": "option3",
        "href": "www.google.com",
        "prefix": "folder"
      }
    }],
    className: 'col-5'
  },
  render: args => ({
    components: {
      List
    },
    setup() {
      return {
        args
      };
    },
    template: \`
            <List
                :dataSource="args.dataSource"
                :hasOutline="true"
                :className="args.className"
            >
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
          const dataSourceString = formatDataSource(args.dataSource);
          return ['<List', \`    :dataSource="\${dataSourceString}"\`, \`    :hasOutline="true"\`, \`    className="\${args.className}"\`, '>', '</List>'].join('\\n').trim();
        }
      }
    }
  }
}`,...(m=(c=r.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};const N=["ListDefaultStory","ListTypeStory"];export{a as ListDefaultStory,r as ListTypeStory,N as __namedExportsOrder,O as default};

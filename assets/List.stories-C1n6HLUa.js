import{_ as s}from"./List-J1h6Im5f.js";import"./vue.esm-bundler-XbWi-Ypr.js";import"./Icon-CF_kqmEQ.js";import"./iframe-BC-NZobn.js";import"../sb-preview/runtime.js";function m(n){return`[
        ${n.map(e=>`{
            label: '${e.label}',
            value: '${e.value}',
            href: '${e.href}',
            prefix: '${e.prefix}',
        }`).join(`,
    `)}
    ]`}const x={title:"Component/List",component:s,tags:["autodocs"],argTypes:{dataSource:{description:"資料來源",control:{type:"object"}},hasOutline:{description:"是否為選單",control:{type:"boolean"}},className:{description:"客製化樣式",control:{type:"text"}}},parameters:{docs:{title:"List",description:{component:"List 組件的呈現及說明。"}}}},t={name:"預設項目",args:{dataSource:[{label:"Option1",value:"option1",href:"",prefix:"home"},{label:"Option2",value:"option2",href:"",prefix:"users"},{label:"Option3",value:"option3",href:"",prefix:"folder"}],hasOutline:!1,className:""},render:n=>({components:{List:s},setup(){return{args:n}},template:`
            <List
                :dataSource="args.dataSource"
                :hasOutline="args.hasOutline"
                :className="args.className"
            >
            </List>
        `}),parameters:{controls:{exclude:["default"]},docs:{source:{transform:(n,e)=>{const{args:a}=e;return["<List",`    :dataSource="${m(a.dataSource)}"`,`    :hasOutline="${a.hasOutline}"`,`    className="${a.className}"`,">","</List>"].join(`
`).trim()}}}}},r={name:"選單樣式",args:{dataSource:[{content:{label:"選項一",value:"option1",href:"",prefix:"folder"}},{content:{label:"選項二",value:"option2",href:"",prefix:"home"}},{content:{label:"選項三",value:"option3",href:"www.google.com",prefix:"folder"}}],className:"col-5"},render:n=>({components:{List:s},setup(){return{args:n}},template:`
            <List
                :dataSource="args.dataSource"
                :hasOutline="true"
                :className="args.className"
            >
            </List>
        `}),parameters:{controls:{exclude:["default"]},docs:{source:{transform:(n,e)=>{const{args:a}=e;return["<List",`    :dataSource="${m(a.dataSource)}"`,'    :hasOutline="true"',`    className="${a.className}"`,">","</List>"].join(`
`).trim()}}}}};var o,u,c;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
      "href": "",
      "prefix": "users"
    }, {
      "label": "Option3",
      "value": "option3",
      "href": "",
      "prefix": "folder"
    }],
    hasOutline: false,
    className: ''
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
                :hasOutline="args.hasOutline"
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
          return ['<List', \`    :dataSource="\${dataSourceString}"\`, \`    :hasOutline="\${args.hasOutline}"\`, \`    className="\${args.className}"\`, '>', '</List>'].join('\\n').trim();
        }
      }
    }
  }
}`,...(c=(u=t.parameters)==null?void 0:u.docs)==null?void 0:c.source}}};var l,i,p;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
}`,...(p=(i=r.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};const O=["ListDefaultStory","ListTypeStory"];export{t as ListDefaultStory,r as ListTypeStory,O as __namedExportsOrder,x as default};

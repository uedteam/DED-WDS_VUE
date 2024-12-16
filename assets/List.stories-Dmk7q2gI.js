import{_ as r,a as d}from"./List-DrpdLjgG.js";import"./vue.esm-bundler-g0-RGFhA.js";import"./Icon-CwAcAjZ9.js";import"./iframe-DRHao1R7.js";import"../sb-preview/runtime.js";function p(n){return`[
        ${n.map(e=>`{
            label: '${e.label}',
            value: '${e.value}',
            href: '${e.href}',
            prefix: '${e.prefix}',
        }`).join(`,
    `)}
    ]`}const O={title:"Component/List",component:r,tags:["autodocs"],argTypes:{dataSource:{description:"資料來源",control:{type:"object"},table:{type:{summary:"{ label: string; value: string; href: string; prefix: string;}[]"}}},hasOutline:{description:"是否為選單",control:{type:"boolean"}},className:{description:"客製化樣式",control:{type:"text"}}},parameters:{docs:{title:"List",description:{component:"List 組件的呈現及說明。"}}}},a={name:"預設項目",args:{dataSource:[{label:"Option1",value:"option1",href:"",prefix:"home"},{label:"Option2",value:"option2",href:"#",prefix:"users"},{label:"Option3",value:"option3",href:"#",prefix:"folder"}],hasOutline:!1,className:""},render:n=>({components:{List:r,ListItem:d},setup(){return{args:n}},template:`
            <List
                :dataSource="args.dataSource"
                :hasOutline="args.hasOutline"
                :className="args.className"
            >
                
            </List>
        `}),parameters:{controls:{exclude:["default"]},docs:{source:{transform:n=>{const{args:e}=n;return["<List",`    :dataSource="${p(e.dataSource)}"`,`    :hasOutline="${e.hasOutline}"`,`    className="${e.className}"`,">","</List>"].join(`
`).trim()}}}}},t={name:"選單樣式",args:{dataSource:[{label:"Option1",value:"option1",href:"",prefix:"home"},{label:"Option2",value:"option2",href:"#",prefix:"users"},{label:"Option3",value:"option3",href:"#",prefix:"folder"}],className:"col-5"},render:n=>({components:{List:r},setup(){return{args:n}},template:`
            <List
                :dataSource="args.dataSource"
                :hasOutline=true
                :className="args.className"
            >
            </List>
        `}),parameters:{controls:{exclude:["default"]},docs:{source:{transform:n=>{const{args:e}=n;return["<List",`    :dataSource="${p(e.dataSource)}"`,'    :hasOutline="true"',`    className="${e.className}"`,">","</List>"].join(`
`).trim()}}}}};var s,o,u;a.parameters={...a.parameters,docs:{...(s=a.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
        transform: storyContext => {
          const {
            args
          } = storyContext;
          const dataSourceString = formatDataSource(args.dataSource);
          return ['<List', \`    :dataSource="\${dataSourceString}"\`, \`    :hasOutline="\${args.hasOutline}"\`, \`    className="\${args.className}"\`, '>', '</List>'].join('\\n').trim();
        }
      }
    }
  }
}`,...(u=(o=a.parameters)==null?void 0:o.docs)==null?void 0:u.source}}};var i,l,c;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
  name: "選單樣式",
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
                :hasOutline=true
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
        transform: storyContext => {
          const {
            args
          } = storyContext;
          const dataSourceString = formatDataSource(args.dataSource);
          return ['<List', \`    :dataSource="\${dataSourceString}"\`, \`    :hasOutline="true"\`, \`    className="\${args.className}"\`, '>', '</List>'].join('\\n').trim();
        }
      }
    }
  }
}`,...(c=(l=t.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};const x=["ListDefaultStory","ListTypeStory"];export{a as ListDefaultStory,t as ListTypeStory,x as __namedExportsOrder,O as default};

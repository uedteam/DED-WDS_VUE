import{_ as s,L as f}from"./List-BGgNiZ4v.js";import"./vue.esm-bundler-g0-RGFhA.js";import"./Icon-DeWBP8aK.js";import"./iframe-B--EIfDL.js";import"../sb-preview/runtime.js";function m(n){return`[
        ${n.map(e=>`{
            label: '${e.label}',
            value: '${e.value}',
            href: '${e.href}',
            prefix: '${e.prefix}',
        }`).join(`,
    `)}
    ]`}const x={title:"Component/List",component:s,tags:["autodocs"],argTypes:{dataSource:{description:"資料來源",control:{type:"object"},table:{type:{summary:"{ label: string; value: string; href: string; prefix: string;}[]"}}},hasOutline:{description:"是否為選單",control:{type:"boolean"}},className:{description:"客製化樣式",control:{type:"text"}}},parameters:{docs:{title:"List",description:{component:"List 組件的呈現及說明。"}}}},t={name:"預設項目",args:{dataSource:[{label:"Option1",value:"option1",href:"",prefix:"home"},{label:"Option2",value:"option2",href:"#",prefix:"users"},{label:"Option3",value:"option3",href:"#",prefix:"folder"}],hasOutline:!1,className:""},render:n=>({components:{List:s,ListItem:f},setup(){return{args:n}},template:`
            <List
                :dataSource="args.dataSource"
                :hasOutline="args.hasOutline"
                :className="args.className"
            >
                
            </List>
        `}),parameters:{controls:{exclude:["default"]},docs:{source:{transform:(n,e)=>{const{args:a}=e;return["<List",`    :dataSource="${m(a.dataSource)}"`,`    :hasOutline="${a.hasOutline}"`,`    className="${a.className}"`,">","</List>"].join(`
`).trim()}}}}},r={name:"選單樣式",args:{dataSource:[{label:"Option1",value:"option1",href:"",prefix:"home"},{label:"Option2",value:"option2",href:"#",prefix:"users"},{label:"Option3",value:"option3",href:"#",prefix:"folder"}],className:"col-5"},render:n=>({components:{List:s},setup(){return{args:n}},template:`
            <List
                :dataSource="args.dataSource"
                :hasOutline=true
                :className="args.className"
            >
            </List>
        `}),parameters:{controls:{exclude:["default"]},docs:{source:{transform:(n,e)=>{const{args:a}=e;return["<List",`    :dataSource="${m(a.dataSource)}"`,'    :hasOutline="true"',`    className="${a.className}"`,">","</List>"].join(`
`).trim()}}}}};var o,u,i;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(i=(u=t.parameters)==null?void 0:u.docs)==null?void 0:i.source}}};var c,l,p;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(p=(l=r.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};const N=["ListDefaultStory","ListTypeStory"];export{t as ListDefaultStory,r as ListTypeStory,N as __namedExportsOrder,x as default};

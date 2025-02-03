import{_ as n,a as S}from"./List-BHLnsobf.js";import"./vue.esm-bundler-CwphvVzG.js";import"./Icon-BhrMxj58.js";import"./iframe-BqOtaKsG.js";import"../sb-preview/runtime.js";function m(s){return`[
        ${s.map(a=>`{
            label: '${a.label}',
            value: '${a.value}',
            href: '${a.href}',
            prefix: '${a.prefix}',
        }`).join(`,
    `)}
    ]`}const p=[{label:"Option1",value:"option1",href:"",prefix:"SvgHome"},{label:"Option2",value:"option2",href:"#",prefix:"SvgAccount"},{label:"Option3",value:"option3",href:"#",prefix:"SvgCalendar"}],N={title:"Component/List",component:n,tags:["autodocs"],argTypes:{dataSource:{description:"資料來源",control:{type:"object"},table:{type:{summary:"{ label: string; value: string; href: string; prefix: string;}[]"}}},hasOutline:{description:"是否為選單",control:{type:"boolean"}},hasDivider:{description:"是否有分隔線",control:{type:"boolean"}},className:{description:"客製化樣式",control:{type:"text"}}},parameters:{docs:{title:"List",description:{component:"清單組件的呈現及說明。"}}}},r={name:"預設項目",args:{dataSource:p,hasOutline:!1,hasDivider:!1,className:""},render:s=>({components:{List:n,ListItem:S},setup(){return{args:s}},template:`
            <List
                :dataSource="args.dataSource"
                :hasOutline="args.hasOutline"
                :hasDivider="args.hasDivider"
                :className="args.className"
            >
                
            </List>
        `}),parameters:{controls:{exclude:["default"]},docs:{source:{transform:(s,a)=>{const{args:e}=a;return["<List",`    :dataSource="${m(e.dataSource)}"`,`    :hasOutline="${e.hasOutline}"`,`    :hasDivider="${e.hasDivider}"`,`    className="${e.className}"`,">","</List>"].join(`
`).trim()}}}}},t={name:"選單樣式",args:{dataSource:p,hasDivider:!1,className:"col-5"},render:s=>({components:{List:n},setup(){return{args:s}},template:`
            <List
                :dataSource="args.dataSource"
                :hasOutline=true
                :hasDivider="args.hasDivider"
                :className="args.className"
            >
            </List>
        `}),parameters:{controls:{exclude:["default"]},docs:{source:{transform:(s,a)=>{const{args:e}=a;return["<List",`    :dataSource="${m(e.dataSource)}"`,'    :hasOutline="true"',`    :hasDivider="${e.hasDivider}"`,`    className="${e.className}"`,">","</List>"].join(`
`).trim()}}}}};var o,i,c;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
  name: "預設項目",
  args: {
    dataSource: dataSource,
    hasOutline: false,
    hasDivider: false,
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
                :hasDivider="args.hasDivider"
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
          return ['<List', \`    :dataSource="\${dataSourceString}"\`, \`    :hasOutline="\${args.hasOutline}"\`, \`    :hasDivider="\${args.hasDivider}"\`, \`    className="\${args.className}"\`, '>', '</List>'].join('\\n').trim();
        }
      }
    }
  }
}`,...(c=(i=r.parameters)==null?void 0:i.docs)==null?void 0:c.source}}};var u,l,d;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  name: "選單樣式",
  args: {
    dataSource: dataSource,
    hasDivider: false,
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
                :hasDivider="args.hasDivider"
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
          return ['<List', \`    :dataSource="\${dataSourceString}"\`, \`    :hasOutline="true"\`, \`    :hasDivider="\${args.hasDivider}"\`, \`    className="\${args.className}"\`, '>', '</List>'].join('\\n').trim();
        }
      }
    }
  }
}`,...(d=(l=t.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};const $=["ListDefaultStory","ListTypeStory"];export{r as ListDefaultStory,t as ListTypeStory,$ as __namedExportsOrder,N as default};

import{a as c}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{_ as o,a as v}from"./List-BiekIoE5.js";import"./v4-CQkTLCs1.js";import"./vue.esm-bundler-Db4pcR2I.js";import"./Icon-DbRQxRx8.js";import"./iframe-G7TsRw4U.js";import"../sb-preview/runtime.js";function i(a){return`[
        ${a.map(t=>`{
            label: '${t.label}',
            value: '${t.value}',
            href: '${t.href}',
            prefix: '${t.prefix}',
        }`).join(`,
    `)}
    ]`}const u=[{label:"Option1",value:"option1",href:"",prefix:"SvgAccount"},{label:"Option2",value:"option2",href:"#",prefix:"SvgAccount"},{label:"Option3",value:"option3",href:"#",prefix:"SvgAccount"}],k={title:"Component/List",component:o,tags:["autodocs"],argTypes:{dataSource:{description:"資料來源",control:{type:"object"},table:{type:{summary:"{ label: string; value: string; href: string; prefix: string;}[]"}}},hasOutline:{description:"是否為選單",control:{type:"boolean"}},hasDivider:{description:"是否有分隔線",control:{type:"boolean"}},className:{description:"客製化樣式",control:{type:"text"}},onSelect:{description:"選擇項目時觸發的事件",control:!1,table:{category:"emits"}}},parameters:{docs:{title:"List",description:{component:"清單組件的呈現及說明。"}}}},n={name:"預設項目",args:{dataSource:u,hasOutline:!1,hasDivider:!1,className:""},render:a=>({components:{List:o,ListItem:v},setup(){return{args:a,handleItemClick:c("onSelect")}},template:`
            <List
                :dataSource="args.dataSource"
                :hasOutline="args.hasOutline"
                :hasDivider="args.hasDivider"
                :className="args.className"
                @onSelect="handleItemClick"
            >
                
            </List>
        `}),parameters:{controls:{exclude:["default"]},docs:{source:{transform:(a,t)=>{const{args:e}=t;return["<List",`    :dataSource="${i(e.dataSource)}"`,`    :hasOutline="${e.hasOutline}"`,`    :hasDivider="${e.hasDivider}"`,`    className="${e.className}"`,'    @onSelect="handleItemClick"',">","</List>"].join(`
`).trim()}}}}},s={name:"清單樣式-外框",args:{dataSource:u,hasDivider:!1,className:"col-5"},render:a=>({components:{List:o},setup(){return{args:a,handleItemClick:c("onSelect")}},template:`
            <List
                :dataSource="args.dataSource"
                :hasOutline=true
                :hasDivider="args.hasDivider"
                :className="args.className"
                @onSelect="handleItemClick"
            >
            </List>
        `}),parameters:{controls:{exclude:["hasOutline","default"]},docs:{source:{transform:(a,t)=>{const{args:e}=t;return["<List",`    :dataSource="${i(e.dataSource)}"`,'    :hasOutline="true"',`    :hasDivider="${e.hasDivider}"`,`    className="${e.className}"`,'    @onSelect="handleItemClick"',">","</List>"].join(`
`).trim()}}}}},r={name:"清單樣式-分隔線",args:{dataSource:u,hasOutline:!1,className:""},render:a=>({components:{List:o,ListItem:v},setup(){return{args:a,handleItemClick:c("onSelect")}},template:`
            <List
                :dataSource="args.dataSource"
                :hasOutline="args.hasOutline"
                :hasDivider="true"
                :className="args.className"
                @onSelect="handleItemClick"
            >
                
            </List>
        `}),parameters:{controls:{exclude:["hasDivider","default"]},docs:{source:{transform:(a,t)=>{const{args:e}=t;return["<List",`    :dataSource="${i(e.dataSource)}"`,`    :hasOutline="${e.hasOutline}"`,'    :hasDivider="true"',`    className="${e.className}"`,'    @onSelect="handleItemClick"',">","</List>"].join(`
`).trim()}}}}};var d,m,S;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
        args,
        handleItemClick: action("onSelect")
      };
    },
    template: \`
            <List
                :dataSource="args.dataSource"
                :hasOutline="args.hasOutline"
                :hasDivider="args.hasDivider"
                :className="args.className"
                @onSelect="handleItemClick"
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
          return ['<List', \`    :dataSource="\${dataSourceString}"\`, \`    :hasOutline="\${args.hasOutline}"\`, \`    :hasDivider="\${args.hasDivider}"\`, \`    className="\${args.className}"\`, \`    @onSelect="handleItemClick"\`, '>', '</List>'].join('\\n').trim();
        }
      }
    }
  }
}`,...(S=(m=n.parameters)==null?void 0:m.docs)==null?void 0:S.source}}};var h,p,g;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
  name: "清單樣式-外框",
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
        args,
        handleItemClick: action("onSelect")
      };
    },
    template: \`
            <List
                :dataSource="args.dataSource"
                :hasOutline=true
                :hasDivider="args.hasDivider"
                :className="args.className"
                @onSelect="handleItemClick"
            >
            </List>
        \`
  }),
  // 控制 controls 中能控制的參數
  parameters: {
    controls: {
      exclude: ['hasOutline', 'default']
    },
    docs: {
      source: {
        transform: (src, storyContext) => {
          const {
            args
          } = storyContext;
          const dataSourceString = formatDataSource(args.dataSource);
          return ['<List', \`    :dataSource="\${dataSourceString}"\`, \`    :hasOutline="true"\`, \`    :hasDivider="\${args.hasDivider}"\`, \`    className="\${args.className}"\`, \`    @onSelect="handleItemClick"\`, '>', '</List>'].join('\\n').trim();
        }
      }
    }
  }
}`,...(g=(p=s.parameters)==null?void 0:p.docs)==null?void 0:g.source}}};var f,D,L;r.parameters={...r.parameters,docs:{...(f=r.parameters)==null?void 0:f.docs,source:{originalSource:`{
  name: "清單樣式-分隔線",
  args: {
    dataSource: dataSource,
    hasOutline: false,
    // hasDivider: false,
    className: ''
  },
  render: args => ({
    components: {
      List,
      ListItem
    },
    setup() {
      return {
        args,
        handleItemClick: action("onSelect")
      };
    },
    template: \`
            <List
                :dataSource="args.dataSource"
                :hasOutline="args.hasOutline"
                :hasDivider="true"
                :className="args.className"
                @onSelect="handleItemClick"
            >
                
            </List>
        \`
  }),
  // 控制 controls 中能控制的參數
  parameters: {
    controls: {
      exclude: ['hasDivider', 'default']
    },
    docs: {
      source: {
        transform: (src, storyContext) => {
          const {
            args
          } = storyContext;
          const dataSourceString = formatDataSource(args.dataSource);
          return ['<List', \`    :dataSource="\${dataSourceString}"\`, \`    :hasOutline="\${args.hasOutline}"\`, \`    :hasDivider="true"\`, \`    className="\${args.className}"\`, \`    @onSelect="handleItemClick"\`, '>', '</List>'].join('\\n').trim();
        }
      }
    }
  }
}`,...(L=(D=r.parameters)==null?void 0:D.docs)==null?void 0:L.source}}};const A=["ListDefaultStory","ListOutLineStory","ListDividerStory"];export{n as ListDefaultStory,r as ListDividerStory,s as ListOutLineStory,A as __namedExportsOrder,k as default};

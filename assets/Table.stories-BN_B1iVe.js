import{f as L,c as T,a as l,e as d,n as i,d as C,F as y,B as S,o as c,s as f,t as H,r as U,q as I}from"./vue.esm-bundler-D-gFHCZh.js";import{_ as W}from"./Button-00exNB20.js";import"./Icon-BhqjPbyE.js";import"./iframe-Bd5YQskO.js";import"../sb-preview/runtime.js";const K={class:"ded-table"},M={class:"ded-table-thead"},X={class:"ded-table-thead-tr"},G=["checked","indeterminate"],P={class:"ded-table-tbody"},Q=["onClick"],Y=["checked","onChange"],u={__name:"Table",props:{columns:{type:Array,required:!0},dataSource:{type:Array,required:!0},showCheckbox:{type:Boolean,default:!1},showVerticalBorders:{type:Boolean,default:!1},className:{type:String,default:""}},setup(n){const t=n,e=L([]),a=T(()=>e.value.length===t.dataSource.length),s=T(()=>e.value.length>0&&e.value.length<t.dataSource.length),q=r=>{t.onRowClick&&t.onRowClick(r)},R=r=>{e.value.includes(r)?e.value=e.value.filter(h=>h!==r):e.value.push(r),t.onSelect&&t.onSelect([...e.value])},O=r=>{r.target.checked?e.value=t.dataSource.map(h=>h.head):e.value=[],t.onSelect&&t.onSelect([...e.value])};return(r,h)=>(c(),l("div",{class:i({"ded-table-container":!0,[t.className]:!!t.className}),style:{"overflow-x":"auto"}},[d("table",K,[d("thead",M,[d("tr",X,[n.showCheckbox?(c(),l("th",{key:0,style:{width:"30px","align-items":"center"},class:i(["ded-table-thead-tr-th",{"ded-table-thead-tr-th-border":n.showVerticalBorders}])},[d("input",{type:"checkbox",class:"ded-table-checkbox",onChange:O,checked:a.value,indeterminate:s.value},null,40,G)],2)):C("",!0),(c(!0),l(y,null,S(t.columns,o=>(c(),l("th",{key:o.key,style:f({width:o.width,textAlign:o.align||"left"}),class:i(["ded-table-thead-tr-th",{"ded-table-thead-tr-th-border":n.showVerticalBorders}])},H(o.title),7))),128))])]),d("tbody",P,[(c(!0),l(y,null,S(t.dataSource,(o,J)=>(c(),l("tr",{key:J,class:"ded-table-tbody-tr",onClick:()=>q(o)},[n.showCheckbox?(c(),l("td",{key:0,style:{width:"30px","align-items":"center"},class:i(["ded-table-tbody-tr-td",{"ded-table-tbody-tr-td-border":n.showVerticalBorders}])},[d("input",{type:"checkbox",class:"ded-table-checkbox",checked:e.value.includes(o.head),onChange:()=>R(o.head)},null,40,Y)],2)):C("",!0),(c(!0),l(y,null,S(t.columns,m=>(c(),l("td",{key:m.key,style:f({width:m.width,textAlign:m.align||"left"}),class:i(["ded-table-tbody-tr-td",{"ded-table-tbody-tr-td-border":n.showVerticalBorders}])},[U(r.$slots,m.key,{item:o},()=>[I(H(o[m.key]),1)])],6))),128))],8,Q))),128))])])],2))}};u.__docgenInfo={exportName:"default",displayName:"Table",description:"",tags:{},props:[{name:"columns",type:{name:"array"},required:!0},{name:"dataSource",type:{name:"array"},required:!0},{name:"showCheckbox",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"showVerticalBorders",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"className",type:{name:"string"},defaultValue:{func:!1,value:'""'}}],slots:[{name:"col.key",scoped:!0,bindings:[{name:"name",title:"binding"},{name:"item",title:"binding"}]}],sourceFiles:["/Users/auouser/Desktop/Work_Space/DED-WDS_VUE/libs/src/ui/element/Table/Table.vue"]};function k(n){return JSON.stringify(n,null,2)}function x(n){return JSON.stringify(n,null,2)}const ae={components:{Button:W},title:"Component/Table",component:u,tags:["autodocs"],argTypes:{columns:{description:"欄位",control:{type:"object"},table:{type:{summary:"{ key: string; title: string; width: string; align?: string }[]"}}},dataSource:{description:"資料來源",control:{type:"object"},table:{type:{summary:"{ head: string; key1: string; key2: string; ..., keyX: string }[]"}}},showCheckbox:{description:"是否顯示 checkbox",control:{type:"boolean"}},showVerticalBorders:{description:"是否顯示垂直線條",control:{type:"boolean"}},className:{description:"客製化樣式",control:{type:"text"}},"col.key":{description:"客製化內容",control:!1,table:{type:{summary:"Vue Component | HTML"}}}},parameters:{docs:{title:"Table",description:{component:"Table 組件的呈現及說明。"}},actions:{disabled:!0}}},p={name:"預設項目",args:{columns:[{key:"head",title:"TH",width:"50px"},{key:"column1",title:"TH",width:"100px"},{key:"column2",title:"TH",width:"100px"},{key:"column3",title:"TH",width:"100px"},{key:"column4",title:"TH",width:"50px"},{key:"column5",title:"TH",width:"50px",align:"center"}],dataSource:[{head:"Head-1",column1:"td1",column2:"td2",column3:"td3",column4:"td4",column5:"td5"},{head:"Head-2",column1:"td1",column2:"td2",column3:"td3",column4:"td4",column5:"td5"},{head:"Head-3",column1:"td1",column2:"td2",column3:"td3",column4:"td4",column5:"td5"}],showCheckbox:!1,showVerticalBorders:!1,className:""},render:n=>({components:{Table:u},setup(){return{args:n}},template:`
            <Table
            :columns="args.columns"
            :dataSource="args.dataSource"
            :showCheckbox="args.showCheckbox"
            :showVerticalBorders="args.showVerticalBorders"
            :className="args.className"
            />
    `}),parameters:{docs:{source:{transform:(n,t)=>{const{args:e}=t,a=k(e.columns),s=x(e.dataSource);return["<Table",`  :columns='${a}'`,`  :dataSource='${s}'`,`  :showCheckbox="${e.showCheckbox}"`,`  :showVerticalBorders="${e.showVerticalBorders}"`,`  :className="${e.className}"`,"/>"].join(`
`)}}}}},w={name:"框線表格",args:{columns:[{key:"head",title:"TH",width:"50px"},{key:"column1",title:"TH",width:"100px"},{key:"column2",title:"TH",width:"100px"},{key:"column3",title:"TH",width:"100px"},{key:"column4",title:"TH",width:"50px"},{key:"column5",title:"TH",width:"50px",align:"center"}],dataSource:[{head:"Head-1",column1:"td1",column2:"td2",column3:"td3",column4:"td4",column5:"td5"},{head:"Head-2",column1:"td1",column2:"td2",column3:"td3",column4:"td4",column5:"td5"},{head:"Head-3",column1:"td1",column2:"td2",column3:"td3",column4:"td4",column5:"td5"}],showCheckbox:!1,showVerticalBorders:!0,className:""},render:n=>({components:{Table:u},setup(){return{args:n}},template:`
            <Table
            :columns="args.columns"
            :dataSource="args.dataSource"
            :showCheckbox="args.showCheckbox"
            :showVerticalBorders="args.showVerticalBorders"
            :className="args.className"
            />
    `}),parameters:{docs:{source:{transform:(n,t)=>{const{args:e}=t,a=k(e.columns),s=x(e.dataSource);return["<Table",`  :columns='${a}'`,`  :dataSource='${s}'`,`  :showCheckbox="${e.showCheckbox}"`,`  :showVerticalBorders="${e.showVerticalBorders}"`,`  :className="${e.className}"`,"/>"].join(`
`)}}}}},g={name:"客製化欄位",args:{columns:[{key:"head",title:"TH",width:"50px"},{key:"column1",title:"TH",width:"100px"},{key:"column2",title:"TH",width:"100px"},{key:"column3",title:"TH",width:"100px"},{key:"column4",title:"TH",width:"50px"},{key:"column5",title:"TH",width:"50px",align:"center"}],dataSource:[{head:"Head-1",column1:"td1",column2:"td2",column3:"td3",column4:"td4",column5:"td5"},{head:"Head-2",column1:"td1",column2:"td2",column3:"td3",column4:"td4",column5:"td5"},{head:"Head-3",column1:"td1",column2:"td2",column3:"td3",column4:"td4",column5:"td5"}],showCheckbox:!1,showVerticalBorders:!1,className:""},render:n=>({components:{Table:u,Button:W},setup(){return{args:n,onClick:e=>{window.alert(e)}}},template:`
            <Table
            :columns="args.columns"
            :dataSource="args.dataSource"
            :showCheckbox="args.showCheckbox"
            :showVerticalBorders="args.showVerticalBorders"
            :className="args.className"
            >
                <template #column5="{item}">
                    <Button
                        themeColor="primary"
                        variant="filled"
                        size="small"
                        width="fit"
                        borderWidth="1px"
                        radius="4px"
                        @click="onClick(item.column5)"
                    >
                        View
                    </Button>
                </template>
            </Table>
    `}),parameters:{docs:{source:{transform:(n,t)=>{const{args:e}=t,a=k(e.columns),s=x(e.dataSource);return["<Table",`  :columns='${a}'`,`  :dataSource='${s}'`,`  :showCheckbox="${e.showCheckbox}"`,`  :showVerticalBorders="${e.showVerticalBorders}"`,`  :className="${e.className}"`,">",'  <template #column5="{item}">',"    <Button",'      themeColor="primary"','      variant="filled"','      size="small"','      width="fit"','      borderWidth="1px"','      radius="4px"','      @click="onClick(item.column5)"',"    >","      View","    </Button>","  </template>","</Table>"].join(`
`).trim()}}}}},b={name:"可勾選資料列",args:{columns:[{key:"head",title:"TH",width:"50px"},{key:"column1",title:"TH",width:"100px"},{key:"column2",title:"TH",width:"100px"},{key:"column3",title:"TH",width:"100px"},{key:"column4",title:"TH",width:"50px"},{key:"column5",title:"TH",width:"50px",align:"center"}],dataSource:[{head:"Head-1",column1:"td1",column2:"td2",column3:"td3",column4:"td4",column5:"td5"},{head:"Head-2",column1:"td1",column2:"td2",column3:"td3",column4:"td4",column5:"td5"},{head:"Head-3",column1:"td1",column2:"td2",column3:"td3",column4:"td4",column5:"td5"}],showCheckbox:!0,showVerticalBorders:!0,className:""},render:n=>({components:{Table:u},setup(){return{args:n}},template:`
            <Table
            :columns="args.columns"
            :dataSource="args.dataSource"
            :showCheckbox="args.showCheckbox"
            :showVerticalBorders="args.showVerticalBorders"
            :className="args.className"
            />
    `}),parameters:{docs:{source:{transform:(n,t)=>{const{args:e}=t,a=k(e.columns),s=x(e.dataSource);return["<Table",`  :columns='${a}'`,`  :dataSource='${s}'`,`  :showCheckbox="${e.showCheckbox}"`,`  :showVerticalBorders="${e.showVerticalBorders}"`,`  :className="${e.className}"`,"/>"].join(`
`)}}}}};var B,V,N;p.parameters={...p.parameters,docs:{...(B=p.parameters)==null?void 0:B.docs,source:{originalSource:`{
  name: "預設項目",
  args: {
    columns: [{
      key: "head",
      title: "TH",
      width: "50px"
    }, {
      key: "column1",
      title: "TH",
      width: "100px"
    }, {
      key: "column2",
      title: "TH",
      width: "100px"
    }, {
      key: "column3",
      title: "TH",
      width: "100px"
    }, {
      key: "column4",
      title: "TH",
      width: "50px"
    }, {
      key: "column5",
      title: "TH",
      width: "50px",
      align: "center"
    }],
    dataSource: [{
      head: "Head-1",
      column1: "td1",
      column2: "td2",
      column3: "td3",
      column4: "td4",
      column5: "td5"
    }, {
      head: "Head-2",
      column1: "td1",
      column2: "td2",
      column3: "td3",
      column4: "td4",
      column5: "td5"
    }, {
      head: "Head-3",
      column1: "td1",
      column2: "td2",
      column3: "td3",
      column4: "td4",
      column5: "td5"
    }],
    showCheckbox: false,
    showVerticalBorders: false,
    className: ""
  },
  render: args => ({
    components: {
      Table
    },
    setup() {
      return {
        args
      };
    },
    template: \`
            <Table
            :columns="args.columns"
            :dataSource="args.dataSource"
            :showCheckbox="args.showCheckbox"
            :showVerticalBorders="args.showVerticalBorders"
            :className="args.className"
            />
    \`
  }),
  parameters: {
    docs: {
      source: {
        transform: (src, storyContext) => {
          const {
            args
          } = storyContext;
          const columnsString = formatColumns(args.columns);
          const dataSourceString = formatDataSource(args.dataSource);
          return [\`<Table\`, \`  :columns='\${columnsString}'\`, \`  :dataSource='\${dataSourceString}'\`, \`  :showCheckbox="\${args.showCheckbox}"\`, \`  :showVerticalBorders="\${args.showVerticalBorders}"\`, \`  :className="\${args.className}"\`, \`/>\`].join("\\n");
        }
      }
    }
  }
}`,...(N=(V=p.parameters)==null?void 0:V.docs)==null?void 0:N.source}}};var $,v,D;w.parameters={...w.parameters,docs:{...($=w.parameters)==null?void 0:$.docs,source:{originalSource:`{
  name: "框線表格",
  args: {
    columns: [{
      key: "head",
      title: "TH",
      width: "50px"
    }, {
      key: "column1",
      title: "TH",
      width: "100px"
    }, {
      key: "column2",
      title: "TH",
      width: "100px"
    }, {
      key: "column3",
      title: "TH",
      width: "100px"
    }, {
      key: "column4",
      title: "TH",
      width: "50px"
    }, {
      key: "column5",
      title: "TH",
      width: "50px",
      align: "center"
    }],
    dataSource: [{
      head: "Head-1",
      column1: "td1",
      column2: "td2",
      column3: "td3",
      column4: "td4",
      column5: "td5"
    }, {
      head: "Head-2",
      column1: "td1",
      column2: "td2",
      column3: "td3",
      column4: "td4",
      column5: "td5"
    }, {
      head: "Head-3",
      column1: "td1",
      column2: "td2",
      column3: "td3",
      column4: "td4",
      column5: "td5"
    }],
    showCheckbox: false,
    showVerticalBorders: true,
    className: ""
  },
  render: args => ({
    components: {
      Table
    },
    setup() {
      return {
        args
      };
    },
    template: \`
            <Table
            :columns="args.columns"
            :dataSource="args.dataSource"
            :showCheckbox="args.showCheckbox"
            :showVerticalBorders="args.showVerticalBorders"
            :className="args.className"
            />
    \`
  }),
  parameters: {
    docs: {
      source: {
        transform: (src, storyContext) => {
          const {
            args
          } = storyContext;
          const columnsString = formatColumns(args.columns);
          const dataSourceString = formatDataSource(args.dataSource);
          return [\`<Table\`, \`  :columns='\${columnsString}'\`, \`  :dataSource='\${dataSourceString}'\`, \`  :showCheckbox="\${args.showCheckbox}"\`, \`  :showVerticalBorders="\${args.showVerticalBorders}"\`, \`  :className="\${args.className}"\`, \`/>\`].join("\\n");
        }
      }
    }
  }
}`,...(D=(v=w.parameters)==null?void 0:v.docs)==null?void 0:D.source}}};var _,j,A;g.parameters={...g.parameters,docs:{...(_=g.parameters)==null?void 0:_.docs,source:{originalSource:`{
  name: "客製化欄位",
  args: {
    columns: [{
      key: "head",
      title: "TH",
      width: "50px"
    }, {
      key: "column1",
      title: "TH",
      width: "100px"
    }, {
      key: "column2",
      title: "TH",
      width: "100px"
    }, {
      key: "column3",
      title: "TH",
      width: "100px"
    }, {
      key: "column4",
      title: "TH",
      width: "50px"
    }, {
      key: "column5",
      title: "TH",
      width: "50px",
      align: "center"
    }],
    dataSource: [{
      head: "Head-1",
      column1: "td1",
      column2: "td2",
      column3: "td3",
      column4: "td4",
      column5: "td5"
    }, {
      head: "Head-2",
      column1: "td1",
      column2: "td2",
      column3: "td3",
      column4: "td4",
      column5: "td5"
    }, {
      head: "Head-3",
      column1: "td1",
      column2: "td2",
      column3: "td3",
      column4: "td4",
      column5: "td5"
    }],
    showCheckbox: false,
    showVerticalBorders: false,
    className: ""
  },
  render: args => ({
    components: {
      Table,
      Button
    },
    setup() {
      const onClick = val => {
        window.alert(val);
      };
      return {
        args,
        onClick
      };
    },
    template: \`
            <Table
            :columns="args.columns"
            :dataSource="args.dataSource"
            :showCheckbox="args.showCheckbox"
            :showVerticalBorders="args.showVerticalBorders"
            :className="args.className"
            >
                <template #column5="{item}">
                    <Button
                        themeColor="primary"
                        variant="filled"
                        size="small"
                        width="fit"
                        borderWidth="1px"
                        radius="4px"
                        @click="onClick(item.column5)"
                    >
                        View
                    </Button>
                </template>
            </Table>
    \`
  }),
  parameters: {
    docs: {
      source: {
        transform: (src, storyContext) => {
          const {
            args
          } = storyContext;
          const columnsString = formatColumns(args.columns);
          const dataSourceString = formatDataSource(args.dataSource);
          return [\`<Table\`, \`  :columns='\${columnsString}'\`, \`  :dataSource='\${dataSourceString}'\`, \`  :showCheckbox="\${args.showCheckbox}"\`, \`  :showVerticalBorders="\${args.showVerticalBorders}"\`, \`  :className="\${args.className}"\`, \`>\`, \`  <template #column5="{item}">\`, \`    <Button\`, \`      themeColor="primary"\`, \`      variant="filled"\`, \`      size="small"\`, \`      width="fit"\`, \`      borderWidth="1px"\`, \`      radius="4px"\`, \`      @click="onClick(item.column5)"\`, \`    >\`, \`      View\`, \`    </Button>\`, \`  </template>\`, \`</Table>\`].join("\\n").trim();
        }
      }
    }
  }
}`,...(A=(j=g.parameters)==null?void 0:j.docs)==null?void 0:A.source}}};var E,F,z;b.parameters={...b.parameters,docs:{...(E=b.parameters)==null?void 0:E.docs,source:{originalSource:`{
  name: "可勾選資料列",
  args: {
    columns: [{
      key: "head",
      title: "TH",
      width: "50px"
    }, {
      key: "column1",
      title: "TH",
      width: "100px"
    }, {
      key: "column2",
      title: "TH",
      width: "100px"
    }, {
      key: "column3",
      title: "TH",
      width: "100px"
    }, {
      key: "column4",
      title: "TH",
      width: "50px"
    }, {
      key: "column5",
      title: "TH",
      width: "50px",
      align: "center"
    }],
    dataSource: [{
      head: "Head-1",
      column1: "td1",
      column2: "td2",
      column3: "td3",
      column4: "td4",
      column5: "td5"
    }, {
      head: "Head-2",
      column1: "td1",
      column2: "td2",
      column3: "td3",
      column4: "td4",
      column5: "td5"
    }, {
      head: "Head-3",
      column1: "td1",
      column2: "td2",
      column3: "td3",
      column4: "td4",
      column5: "td5"
    }],
    showCheckbox: true,
    showVerticalBorders: true,
    className: ""
  },
  render: args => ({
    components: {
      Table
    },
    setup() {
      return {
        args
      };
    },
    template: \`
            <Table
            :columns="args.columns"
            :dataSource="args.dataSource"
            :showCheckbox="args.showCheckbox"
            :showVerticalBorders="args.showVerticalBorders"
            :className="args.className"
            />
    \`
  }),
  parameters: {
    docs: {
      source: {
        transform: (src, storyContext) => {
          const {
            args
          } = storyContext;
          const columnsString = formatColumns(args.columns);
          const dataSourceString = formatDataSource(args.dataSource);
          return [\`<Table\`, \`  :columns='\${columnsString}'\`, \`  :dataSource='\${dataSourceString}'\`, \`  :showCheckbox="\${args.showCheckbox}"\`, \`  :showVerticalBorders="\${args.showVerticalBorders}"\`, \`  :className="\${args.className}"\`, \`/>\`].join("\\n");
        }
      }
    }
  }
}`,...(z=(F=b.parameters)==null?void 0:F.docs)==null?void 0:z.source}}};const se=["TableDefault","TableBorder","TableSlot","TableCheck"];export{w as TableBorder,b as TableCheck,p as TableDefault,g as TableSlot,se as __namedExportsOrder,ae as default};

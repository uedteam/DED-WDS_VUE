import{k as I,g as B,c,a as i,n as u,e as V,F as y,h as x,o as l,x as T,t as N,r as K,f as M}from"./vue.esm-bundler-qCK_iSPY.js";import{_ as O}from"./Button-B4oQyK8P.js";import"./Icon-BjVA2wzQ.js";import"./iframe-BVAqVFki.js";import"../sb-preview/runtime.js";const X={class:"ded-table"},G={class:"ded-table-thead"},P={class:"ded-table-thead-tr"},Q=["checked","indeterminate"],Y={class:"ded-table-tbody"},Z=["onClick"],ee=["checked","onChange"],d={__name:"Table",props:{columns:{type:Array,required:!0},dataSource:{type:Array,required:!0},showCheckbox:{type:Boolean,default:!1},showVerticalBorders:{type:Boolean,default:!1},isSprite:{type:Boolean,default:!1},className:{type:String,default:""}},setup(a){const s=a,e=I([]),t=B(()=>e.value.length===s.dataSource.length),o=B(()=>e.value.length>0&&e.value.length<s.dataSource.length),R=n=>{s.onRowClick&&s.onRowClick(n)},L=n=>{e.value.includes(n)?e.value=e.value.filter(h=>h!==n):e.value.push(n),s.onSelect&&s.onSelect([...e.value])},J=n=>{n.target.checked?e.value=s.dataSource.map(h=>h.head):e.value=[],s.onSelect&&s.onSelect([...e.value])};return(n,h)=>(l(),c("div",{class:u({"ded-table-container":!0,[s.className]:!!s.className}),style:{"overflow-x":"auto"}},[i("table",X,[i("thead",G,[i("tr",P,[s.showCheckbox?(l(),c("th",{key:0,style:{width:"30px","align-items":"center"},class:u(["ded-table-thead-tr-th",{"ded-table-thead-tr-th-border":s.showVerticalBorders}])},[i("input",{type:"checkbox",class:"ded-table-checkbox",onChange:J,checked:t.value,indeterminate:o.value},null,40,Q)],2)):V("",!0),(l(!0),c(y,null,x(s.columns,r=>(l(),c("th",{key:r.key,style:T({width:r.width,textAlign:r.align||"left"}),class:u(["ded-table-thead-tr-th",{"ded-table-thead-tr-th-border":s.showVerticalBorders}])},N(r.title),7))),128))])]),i("tbody",Y,[(l(!0),c(y,null,x(s.dataSource,(r,U)=>(l(),c("tr",{key:U,class:u(["ded-table-tbody-tr",{"ded-table-tbody-tr-sprite":s.isSprite}]),onClick:()=>R(r)},[s.showCheckbox?(l(),c("td",{key:0,style:{width:"30px","align-items":"center"},class:u(["ded-table-tbody-tr-td",{"ded-table-tbody-tr-td-border":s.showVerticalBorders}])},[i("input",{type:"checkbox",class:"ded-table-checkbox",checked:e.value.includes(r.head),onChange:()=>L(r.head)},null,40,ee)],2)):V("",!0),(l(!0),c(y,null,x(s.columns,m=>(l(),c("td",{key:m.key,style:T({width:m.width,textAlign:m.align||"left"}),class:u(["ded-table-tbody-tr-td",{"ded-table-tbody-tr-td-border":s.showVerticalBorders}])},[K(n.$slots,m.key,{item:r},()=>[M(N(r[m.key]),1)])],6))),128))],10,Z))),128))])])],2))}};d.__docgenInfo={exportName:"default",displayName:"Table",description:"",tags:{},props:[{name:"columns",type:{name:"array"},required:!0},{name:"dataSource",type:{name:"array"},required:!0},{name:"showCheckbox",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"showVerticalBorders",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"isSprite",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"className",type:{name:"string"},defaultValue:{func:!1,value:'""'}}],slots:[{name:"col.key",scoped:!0,bindings:[{name:"name",title:"binding"},{name:"item",title:"binding"}]}],sourceFiles:["/Users/auouser/Desktop/Work_Space/DED-WDS_VUE/libs/src/ui/element/Table/Table.vue"]};function w(a){return JSON.stringify(a,null,2)}function k(a){return JSON.stringify(a,null,2)}const C=[{head:"Head-1",column1:"td1",column2:"td2",column3:"td3",column4:"td4",column5:"td5"},{head:"Head-2",column1:"td1",column2:"td2",column3:"td3",column4:"td4",column5:"td5"},{head:"Head-3",column1:"td1",column2:"td2",column3:"td3",column4:"td4",column5:"td5"},{head:"Head-4",column1:"td1",column2:"td2",column3:"td3",column4:"td4",column5:"td5"}],f=[{key:"head",title:"TH",width:"50px"},{key:"column1",title:"TH",width:"100px"},{key:"column2",title:"TH",width:"100px"},{key:"column3",title:"TH",width:"100px"},{key:"column4",title:"TH",width:"50px"},{key:"column5",title:"TH",width:"50px",align:"center"}],ne={components:{Button:O},title:"Component/Table",component:d,tags:["autodocs"],argTypes:{columns:{description:"欄位",control:{type:"object"},table:{type:{summary:"{ key: string; title: string; width: string; align?: string }[]"}}},dataSource:{description:"資料來源",control:{type:"object"},table:{type:{summary:"{ head: string; key1: string; key2: string; ..., keyX: string }[]"}}},showCheckbox:{description:"是否顯示 checkbox",control:{type:"boolean"}},showVerticalBorders:{description:"是否顯示垂直邊框",control:{type:"boolean"}},isSprite:{description:"是否顯示條紋背景",control:{type:"boolean"}},className:{description:"客製化樣式",control:{type:"text"}},"columns.[key]":{description:"columns 中 `key` 的值可直接作為 slot 名稱，例如 `<template #[key]>`",control:!1,table:{type:{summary:"Vue Component | HTML"},category:"SLOTS"}}},parameters:{docs:{title:"Table",description:{component:"Table 組件的呈現及說明。"}},actions:{disabled:!0}}},p={name:"預設項目",args:{dataSource:C,columns:f,showCheckbox:!1,showVerticalBorders:!1,isSprite:!0,className:""},render:a=>({components:{Table:d},setup(){return{args:a}},template:`
            <Table
                :columns="args.columns"
                :dataSource="args.dataSource"
                :showCheckbox="args.showCheckbox"
                :showVerticalBorders="args.showVerticalBorders"
                :isSprite="args.isSprite"
                :className="args.className"
            />
    `}),parameters:{controls:{exclude:["col.key"]},docs:{source:{transform:(a,s)=>{const{args:e}=s,t=w(e.columns),o=k(e.dataSource);return["<Table",`  :columns='${t}'`,`  :dataSource='${o}'`,`  :showCheckbox="${e.showCheckbox}"`,`  :showVerticalBorders="${e.showVerticalBorders}"`,`  :isSprite="${e.isSprite}"`,`  :className="${e.className}"`,"/>"].join(`
`)}}}}},g={name:"框線表格",args:{dataSource:C,columns:f,showCheckbox:!1,showVerticalBorders:!0,isSprite:!1,className:""},render:a=>({components:{Table:d},setup(){return{args:a}},template:`
            <Table
            :columns="args.columns"
            :dataSource="args.dataSource"
            :showCheckbox="args.showCheckbox"
            :showVerticalBorders="args.showVerticalBorders"
            :isSprite="args.isSprite"
            :className="args.className"
            />
    `}),parameters:{docs:{source:{transform:(a,s)=>{const{args:e}=s,t=w(e.columns),o=k(e.dataSource);return["<Table",`  :columns='${t}'`,`  :dataSource='${o}'`,`  :showCheckbox="${e.showCheckbox}"`,`  :showVerticalBorders="${e.showVerticalBorders}"`,`  :isSprite="${e.isSprite}"`,`  :className="${e.className}"`,"/>"].join(`
`)}}}}},S={name:"客製化欄位",args:{dataSource:C,columns:f,showCheckbox:!1,showVerticalBorders:!1,isSprite:!1,className:""},render:a=>({components:{Table:d,Button:O},setup(){return{args:a,onClick:e=>{window.alert(e)}}},template:`
            <Table
            :columns="args.columns"
            :dataSource="args.dataSource"
            :showCheckbox="args.showCheckbox"
            :showVerticalBorders="args.showVerticalBorders"
            :isSprite="args.isSprite"
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
    `}),parameters:{docs:{source:{transform:(a,s)=>{const{args:e}=s,t=w(e.columns),o=k(e.dataSource);return["<Table",`  :columns='${t}'`,`  :dataSource='${o}'`,`  :showCheckbox="${e.showCheckbox}"`,`  :showVerticalBorders="${e.showVerticalBorders}"`,`  :isSprite="${e.isSprite}"`,`  :className="${e.className}"`,">",'  <template #column5="{item}">',"    <Button",'      themeColor="primary"','      variant="filled"','      size="small"','      width="fit"','      borderWidth="1px"','      radius="4px"','      @click="onClick(item.column5)"',"    >","      View","    </Button>","  </template>","</Table>"].join(`
`).trim()}}}}},b={name:"可勾選資料列",args:{dataSource:C,columns:f,showCheckbox:!0,showVerticalBorders:!0,isSprite:!1,className:""},render:a=>({components:{Table:d},setup(){return{args:a}},template:`
            <Table
            :columns="args.columns"
            :dataSource="args.dataSource"
            :showCheckbox="args.showCheckbox"
            :showVerticalBorders="args.showVerticalBorders"
            :isSprite="args.isSprite"
            :className="args.className"
            />
    `}),parameters:{docs:{source:{transform:(a,s)=>{const{args:e}=s,t=w(e.columns),o=k(e.dataSource);return["<Table",`  :columns='${t}'`,`  :dataSource='${o}'`,`  :showCheckbox="${e.showCheckbox}"`,`  :showVerticalBorders="${e.showVerticalBorders}"`,`  :isSprite="${e.isSprite}"`,`  :className="${e.className}"`,"/>"].join(`
`)}}}}};var $,_,v;p.parameters={...p.parameters,docs:{...($=p.parameters)==null?void 0:$.docs,source:{originalSource:`{
  name: "預設項目",
  args: {
    dataSource: dataSource,
    columns: columns,
    showCheckbox: false,
    showVerticalBorders: false,
    isSprite: true,
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
                :isSprite="args.isSprite"
                :className="args.className"
            />
    \`
  }),
  parameters: {
    controls: {
      exclude: ["col.key"]
    },
    docs: {
      source: {
        transform: (src, storyContext) => {
          const {
            args
          } = storyContext;
          const columnsString = formatColumns(args.columns);
          const dataSourceString = formatDataSource(args.dataSource);
          return [\`<Table\`, \`  :columns='\${columnsString}'\`, \`  :dataSource='\${dataSourceString}'\`, \`  :showCheckbox="\${args.showCheckbox}"\`, \`  :showVerticalBorders="\${args.showVerticalBorders}"\`, \`  :isSprite="\${args.isSprite}"\`, \`  :className="\${args.className}"\`, \`/>\`].join("\\n");
        }
      }
    }
  }
}`,...(v=(_=p.parameters)==null?void 0:_.docs)==null?void 0:v.source}}};var D,H,j;g.parameters={...g.parameters,docs:{...(D=g.parameters)==null?void 0:D.docs,source:{originalSource:`{
  name: "框線表格",
  args: {
    dataSource: dataSource,
    columns: columns,
    showCheckbox: false,
    showVerticalBorders: true,
    isSprite: false,
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
            :isSprite="args.isSprite"
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
          return [\`<Table\`, \`  :columns='\${columnsString}'\`, \`  :dataSource='\${dataSourceString}'\`, \`  :showCheckbox="\${args.showCheckbox}"\`, \`  :showVerticalBorders="\${args.showVerticalBorders}"\`, \`  :isSprite="\${args.isSprite}"\`, \`  :className="\${args.className}"\`, \`/>\`].join("\\n");
        }
      }
    }
  }
}`,...(j=(H=g.parameters)==null?void 0:H.docs)==null?void 0:j.source}}};var A,E,F;S.parameters={...S.parameters,docs:{...(A=S.parameters)==null?void 0:A.docs,source:{originalSource:`{
  name: "客製化欄位",
  args: {
    dataSource: dataSource,
    columns: columns,
    showCheckbox: false,
    showVerticalBorders: false,
    isSprite: false,
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
            :isSprite="args.isSprite"
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
          return [\`<Table\`, \`  :columns='\${columnsString}'\`, \`  :dataSource='\${dataSourceString}'\`, \`  :showCheckbox="\${args.showCheckbox}"\`, \`  :showVerticalBorders="\${args.showVerticalBorders}"\`, \`  :isSprite="\${args.isSprite}"\`, \`  :className="\${args.className}"\`, \`>\`, \`  <template #column5="{item}">\`, \`    <Button\`, \`      themeColor="primary"\`, \`      variant="filled"\`, \`      size="small"\`, \`      width="fit"\`, \`      borderWidth="1px"\`, \`      radius="4px"\`, \`      @click="onClick(item.column5)"\`, \`    >\`, \`      View\`, \`    </Button>\`, \`  </template>\`, \`</Table>\`].join("\\n").trim();
        }
      }
    }
  }
}`,...(F=(E=S.parameters)==null?void 0:E.docs)==null?void 0:F.source}}};var z,W,q;b.parameters={...b.parameters,docs:{...(z=b.parameters)==null?void 0:z.docs,source:{originalSource:`{
  name: "可勾選資料列",
  args: {
    dataSource: dataSource,
    columns: columns,
    showCheckbox: true,
    showVerticalBorders: true,
    isSprite: false,
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
            :isSprite="args.isSprite"
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
          return [\`<Table\`, \`  :columns='\${columnsString}'\`, \`  :dataSource='\${dataSourceString}'\`, \`  :showCheckbox="\${args.showCheckbox}"\`, \`  :showVerticalBorders="\${args.showVerticalBorders}"\`, \`  :isSprite="\${args.isSprite}"\`, \`  :className="\${args.className}"\`, \`/>\`].join("\\n");
        }
      }
    }
  }
}`,...(q=(W=b.parameters)==null?void 0:W.docs)==null?void 0:q.source}}};const ce=["TableDefault","TableBorder","TableSlot","TableCheck"];export{g as TableBorder,b as TableCheck,p as TableDefault,S as TableSlot,ce as __namedExportsOrder,ne as default};

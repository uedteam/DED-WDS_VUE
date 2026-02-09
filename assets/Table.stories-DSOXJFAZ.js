import{_ as U}from"./Button-d_mq_x9n.js";import{r as Q,w as Y,g as k,c,a as m,d as H,n as h,F as S,q as T,o as d,k as V,t as v,h as Z,f as ee}from"./vue.esm-bundler-DDwqdenp.js";import"./Icon-BF6y4SVm.js";const te={class:"ded-table"},oe={class:"ded-table-thead"},ae={class:"ded-table-thead-tr"},ne=["checked","indeterminate"],se={class:"ded-table-tbody"},le=["onClick"],re=["checked","onChange"],u={__name:"Table",props:{columns:{type:Array,required:!0},dataSource:{type:Array,required:!0},showCheckbox:{type:Boolean,default:!1},showVerticalBorders:{type:Boolean,default:!1},isSprite:{type:Boolean,default:!1},className:{type:String,default:""}},emits:["select","rowClick"],setup(n,{emit:r}){const e=n,w=r,a=Q([]);Y(()=>e.dataSource,t=>{const s=t.map(l=>l.head),o=a.value.filter(l=>s.includes(l));o.length!==a.value.length&&(a.value=o,w("select",[...a.value]))},{deep:!0});const I=k(()=>a.value.length===e.dataSource.length),M=k(()=>a.value.length>0&&a.value.length<e.dataSource.length),X=k(()=>{let t=0,s=0;return e.showCheckbox&&(t+=48),e.columns.forEach(o=>{if(o.width){const l=o.width.match(/(\d+(?:\.\d+)?)/);l&&(t+=parseFloat(l[1]))}else s+=o.flex||1}),{fixedWidthSum:t,flexSum:s}}),B=k(()=>t=>{const s={textAlign:t.align||"left"};if(t.width)s.width=t.width;else{const o=t.flex||1,{flexSum:l}=X.value;if(l>0){const i=o/l*100;s.width=`${i}%`}else s.width="auto"}return s});function G(t){w("rowClick",t)}function J(t){a.value.includes(t)?a.value=a.value.filter(s=>s!==t):a.value.push(t),w("select",[...a.value])}function P(t){t.target.checked?a.value=e.dataSource.map(s=>s.head):a.value=[],w("select",[...a.value])}return(t,s)=>(d(),c("div",{class:h(["ded-table-container",{[e.className]:!!e.className}]),style:{"overflow-x":"auto"}},[m("table",te,[m("thead",oe,[m("tr",ae,[e.showCheckbox?(d(),c("th",{key:0,class:h(["ded-table-thead-tr-th ded-table-checkbox-col",{"ded-table-thead-tr-th-border":e.showVerticalBorders}])},[m("input",{type:"checkbox",class:"ded-table-checkbox",checked:I.value,indeterminate:M.value,onChange:P},null,40,ne)],2)):H("",!0),(d(!0),c(S,null,T(e.columns,o=>(d(),c("th",{key:o.key,style:V(B.value(o)),class:h(["ded-table-thead-tr-th",{"ded-table-thead-tr-th-border":e.showVerticalBorders}])},v(o.title),7))),128))])]),m("tbody",se,[(d(!0),c(S,null,T(e.dataSource,(o,l)=>(d(),c("tr",{key:l,class:h(["ded-table-tbody-tr",{"ded-table-tbody-tr-sprite":e.isSprite}]),onClick:()=>G(o)},[e.showCheckbox?(d(),c("td",{key:0,class:h(["ded-table-tbody-tr-td ded-table-checkbox-col",{"ded-table-tbody-tr-td-border":e.showVerticalBorders}])},[m("input",{type:"checkbox",class:"ded-table-checkbox",checked:a.value.includes(o.head),onChange:()=>J(o.head)},null,40,re)],2)):H("",!0),(d(!0),c(S,null,T(e.columns,i=>(d(),c("td",{key:i.key,style:V(B.value(i)),class:h(["ded-table-tbody-tr-td",{"ded-table-tbody-tr-td-border":e.showVerticalBorders}])},[Z(t.$slots,i.key,{item:o},()=>[ee(v(o[i.key]),1)])],6))),128))],10,le))),128))])])],2))}};u.__docgenInfo={exportName:"default",displayName:"Table",description:"",tags:{},props:[{name:"columns",type:{name:"array"},required:!0},{name:"dataSource",type:{name:"array"},required:!0},{name:"showCheckbox",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"showVerticalBorders",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"isSprite",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"className",type:{name:"string"},defaultValue:{func:!1,value:"''"}}],events:[{name:"select"},{name:"rowClick"}],slots:[{name:"col.key",scoped:!0,bindings:[{name:"name",title:"binding"},{name:"item",title:"binding"}]}],sourceFiles:["/home/runner/work/DED-WDS_VUE/DED-WDS_VUE/libs/src/ui/element/Table/Table.vue"]};const p=[{head:"Head-1",column1:"td1",column2:"td2",column3:"td3",column4:"td4",column5:"td5"},{head:"Head-2",column1:"td1",column2:"td2",column3:"td3",column4:"td4",column5:"td5"},{head:"Head-3",column1:"td1",column2:"td2",column3:"td3",column4:"td4",column5:"td5"},{head:"Head-4",column1:"td1",column2:"td2",column3:"td3",column4:"td4",column5:"td5"}],C=[{key:"head",title:"TH",width:"100px"},{key:"column1",title:"TH",width:"180px"},{key:"column2",title:"TH",width:"180px"},{key:"column3",title:"TH",width:"180px"},{key:"column4",title:"TH",width:"120px"},{key:"column5",title:"TH",width:"120px",align:"center"}],ce=[{key:"head",title:"TH",width:"10vw"},{key:"column1",title:"TH",width:"20vw"},{key:"column2",title:"TH",width:"20vw"},{key:"column3",title:"TH",width:"20vw"},{key:"column4",title:"TH",width:"15vw"},{key:"column5",title:"TH",width:"15vw",align:"center"}],de=[{key:"head",title:"名稱",width:"120px"},{key:"column1",title:"描述",flex:2},{key:"column2",title:"狀態",width:"100px"},{key:"column3",title:"類型",flex:1},{key:"column4",title:"日期",width:"150px"},{key:"column5",title:"操作",flex:1,align:"center"}],he={components:{Button:U},title:"Component/Table",component:u,tags:["autodocs"],argTypes:{columns:{description:"欄位配置，支援固定寬度(width)和彈性寬度(flex)",control:{type:"object"},table:{type:{summary:"{ key: string; title: string; width?: string; flex?: number; align?: string }[]"},defaultValue:{detail:`width: 固定寬度（如 '120px', '10%'）
flex: 彈性寬度係數（如 1, 2, 3）
若都未設定則預設為 flex: 1`}}},dataSource:{description:"資料來源",control:{type:"object"},table:{type:{summary:"{ head: string; key1: string; key2: string; ..., keyX: string }[]"}}},showCheckbox:{description:"是否顯示 checkbox",control:{type:"boolean"}},showVerticalBorders:{description:"是否顯示垂直邊框",control:{type:"boolean"}},isSprite:{description:"是否顯示條紋背景",control:{type:"boolean"}},className:{description:"客製化樣式",control:{type:"text"}},"columns.[key]":{description:"columns 中 `key` 的值可直接作為 slot 名稱，例如 `<template #[key]>`",control:!1,table:{type:{summary:"Vue Component | HTML"},category:"SLOTS"}}},parameters:{docs:{title:"Table",description:{component:"Table 組件的呈現及說明。"}},actions:{disabled:!0}}},b={name:"預設項目",args:{dataSource:p,columns:C,showCheckbox:!1,showVerticalBorders:!1,isSprite:!0,className:""},render:n=>({components:{Table:u},setup(){return{args:n}},template:`
      <Table
        :dataSource="args.dataSource"
        :columns="args.columns"
        :showCheckbox="args.showCheckbox"
        :showVerticalBorders="args.showVerticalBorders"
        :isSprite="args.isSprite"
        :className="args.className"
      />
    `}),parameters:{controls:{exclude:["col.key"]},docs:{source:{transform:(n,r)=>{const{args:e}=r;return["<script setup>",'import { Table } from "@ded-wds-vue/ui";',"const dataSource = [",'  { head: "Head-1", column1: "td1", column2: "td2", column3: "td3", column4: "td4", column5: "td5" },','  { head: "Head-2", column1: "td1", column2: "td2", column3: "td3", column4: "td4", column5: "td5" },','  { head: "Head-3", column1: "td1", column2: "td2", column3: "td3", column4: "td4", column5: "td5" },','  { head: "Head-4", column1: "td1", column2: "td2", column3: "td3", column4: "td4", column5: "td5" },',"]","const columns = [",'  { key: "head", title: "TH", width: "100px" },','  { key: "column1", title: "TH", width: "180px" },','  { key: "column2", title: "TH", width: "180px" },','  { key: "column3", title: "TH", width: "180px" },','  { key: "column4", title: "TH", width: "120px" },','  { key: "column5", title: "TH", width: "120px", align: "center" },',"]","<\/script>","","<template>","  <Table","    :dataSource='dataSource'","    :columns='columns'",`    ${e.showCheckbox!==void 0?`:showCheckbox="${e.showCheckbox}"`:""}`,`    ${e.showVerticalBorders!==void 0?`:showVerticalBorders="${e.showVerticalBorders}"`:""}`,`    ${e.isSprite!==void 0?`:isSprite="${e.isSprite}"`:""}`,`    ${e.className?`className="${e.className}"`:""}`,"  />","</template>"].filter(Boolean).join(`
`).trim()}}}}},g={name:"框線表格",args:{dataSource:p,columns:C,showCheckbox:!1,showVerticalBorders:!0,isSprite:!1,className:""},render:n=>({components:{Table:u},setup(){return{args:n}},template:`
      <Table
        :dataSource="args.dataSource"
        :columns="args.columns"
        :showCheckbox="args.showCheckbox"
        :showVerticalBorders="args.showVerticalBorders"
        :isSprite="args.isSprite"
        :className="args.className"
      />`}),parameters:{docs:{source:{transform:(n,r)=>{const{args:e}=r;return["<script setup>",'import { Table } from "@ded-wds-vue/ui";',"const dataSource = [",'  { head: "Head-1", column1: "td1", column2: "td2", column3: "td3", column4: "td4", column5: "td5" },','  { head: "Head-2", column1: "td1", column2: "td2", column3: "td3", column4: "td4", column5: "td5" },','  { head: "Head-3", column1: "td1", column2: "td2", column3: "td3", column4: "td4", column5: "td5" },','  { head: "Head-4", column1: "td1", column2: "td2", column3: "td3", column4: "td4", column5: "td5" },',"]","const columns = [",'  { key: "head", title: "TH", width: "100px" },','  { key: "column1", title: "TH", width: "180px" },','  { key: "column2", title: "TH", width: "180px" },','  { key: "column3", title: "TH", width: "180px" },','  { key: "column4", title: "TH", width: "120px" },','  { key: "column5", title: "TH", width: "120px", align: "center" },',"]","<\/script>","","<template>","  <Table","    :dataSource='dataSource'","    :columns='columns'",`    ${e.showCheckbox!==void 0?`:showCheckbox="${e.showCheckbox}"`:""}`,`    ${e.showVerticalBorders!==void 0?`:showVerticalBorders="${e.showVerticalBorders}"`:""}`,`    ${e.isSprite!==void 0?`:isSprite="${e.isSprite}"`:""}`,`    ${e.className?`className="${e.className}"`:""}`,"  />","</template>"].filter(Boolean).join(`
`).trim()}}}}},x={name:"客製化欄位",args:{dataSource:p,columns:ce,showCheckbox:!1,showVerticalBorders:!1,isSprite:!1,className:""},render:n=>({components:{Table:u,Button:U},setup(){return{args:n,onClick:e=>{window.alert(e)}}},template:`
      <Table
        :columns="args.columns"
        :dataSource="args.dataSource"
        :showCheckbox="args.showCheckbox"
        :showVerticalBorders="args.showVerticalBorders"
        :isSprite="args.isSprite"
        :className="args.className"
      >
        <template #column5="{ item }">
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
      </Table>`}),parameters:{docs:{source:{transform:(n,r)=>{const{args:e}=r;return["<script setup>",'import { Table, Button } from "@ded-wds-vue/ui";',"const dataSource = [",'  { head: "Head-1", column1: "td1", column2: "td2", column3: "td3", column4: "td4", column5: "td5" },','  { head: "Head-2", column1: "td1", column2: "td2", column3: "td3", column4: "td4", column5: "td5" },','  { head: "Head-3", column1: "td1", column2: "td2", column3: "td3", column4: "td4", column5: "td5" },','  { head: "Head-4", column1: "td1", column2: "td2", column3: "td3", column4: "td4", column5: "td5" },',"]","const columns = [",'  { key: "head", title: "TH", width: "10vw" },','  { key: "column1", title: "TH", width: "20vw" },','  { key: "column2", title: "TH", width: "20vw" },','  { key: "column3", title: "TH", width: "20vw" },','  { key: "column4", title: "TH", width: "15vw" },','  { key: "column5", title: "TH", width: "15vw", align: "center" },',"]","const onClick = (val) => {",'  window.alert(val.head + " " + val.column5);',"};","<\/script>","","<template>","  <Table","    :dataSource='dataSource'","    :columns='columns'",`    ${e.showCheckbox!==void 0?`:showCheckbox="${e.showCheckbox}"`:""}`,`    ${e.showVerticalBorders!==void 0?`:showVerticalBorders="${e.showVerticalBorders}"`:""}`,`    ${e.isSprite!==void 0?`:isSprite="${e.isSprite}"`:""}`,`    ${e.className?`className="${e.className}"`:""}`,"  >",'    <template #column5="{item}">',"      <Button",'        themeColor="primary"','        variant="filled"','        size="small"','        width="fit"','        borderWidth="1px"','        radius="4px"','        @click="onClick(item)"',"      >","        View","      </Button>","    </template>","  </Table>","</template>"].filter(Boolean).join(`
`).trim()}}}}},y={name:"可勾選資料列",args:{dataSource:p,columns:C,showCheckbox:!0,showVerticalBorders:!0,isSprite:!1,className:""},render:n=>({components:{Table:u},setup(){return{args:n}},template:`
      <Table
        :columns="args.columns"
        :dataSource="args.dataSource"
        :showCheckbox="args.showCheckbox"
        :showVerticalBorders="args.showVerticalBorders"
        :isSprite="args.isSprite"
        :className="args.className"
      />`}),parameters:{docs:{source:{transform:(n,r)=>{const{args:e}=r;return["<script setup>",'import { Table } from "@ded-wds-vue/ui";',"const dataSource = [",'  { head: "Head-1", column1: "td1", column2: "td2", column3: "td3", column4: "td4", column5: "td5" },','  { head: "Head-2", column1: "td1", column2: "td2", column3: "td3", column4: "td4", column5: "td5" },','  { head: "Head-3", column1: "td1", column2: "td2", column3: "td3", column4: "td4", column5: "td5" },','  { head: "Head-4", column1: "td1", column2: "td2", column3: "td3", column4: "td4", column5: "td5" },',"]","const columns = [",'  { key: "head", title: "TH", width: "100px" },','  { key: "column1", title: "TH", width: "180px" },','  { key: "column2", title: "TH", width: "180px" },','  { key: "column3", title: "TH", width: "180px" },','  { key: "column4", title: "TH", width: "120px" },','  { key: "column5", title: "TH", width: "120px", align: "center" },',"]","<\/script>","","<template>","  <Table","    :dataSource='dataSource'","    :columns='columns'",`    ${e.showCheckbox!==void 0?`:showCheckbox="${e.showCheckbox}"`:""}`,`    ${e.showVerticalBorders!==void 0?`:showVerticalBorders="${e.showVerticalBorders}"`:""}`,`    ${e.isSprite!==void 0?`:isSprite="${e.isSprite}"`:""}`,`    ${e.className?`className="${e.className}"`:""}`,"  />","</template>"].filter(Boolean).join(`
`).trim()}}}}},f={name:"彈性寬度表格",args:{dataSource:p,columns:de,showCheckbox:!1,showVerticalBorders:!0,isSprite:!1,className:""},render:n=>({components:{Table:u},setup(){return{args:n}},template:`
      <Table
        :columns="args.columns"
        :dataSource="args.dataSource"
        :showCheckbox="args.showCheckbox"
        :showVerticalBorders="args.showVerticalBorders"
        :isSprite="args.isSprite"
        :className="args.className"
      />`}),parameters:{docs:{description:{story:"此範例展示了彈性寬度功能：固定寬度與彈性寬度的混合使用"}}}};var $,N,_;b.parameters={...b.parameters,docs:{...($=b.parameters)==null?void 0:$.docs,source:{originalSource:`{
  name: '預設項目',
  args: {
    dataSource,
    columns,
    showCheckbox: false,
    showVerticalBorders: false,
    isSprite: true,
    className: ''
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
        :dataSource="args.dataSource"
        :columns="args.columns"
        :showCheckbox="args.showCheckbox"
        :showVerticalBorders="args.showVerticalBorders"
        :isSprite="args.isSprite"
        :className="args.className"
      />
    \`
  }),
  parameters: {
    controls: {
      exclude: ['col.key']
    },
    docs: {
      source: {
        transform: (src, storyContext) => {
          const {
            args
          } = storyContext;
          return [\`<script setup>\`, \`import { Table } from "@ded-wds-vue/ui";\`, \`const dataSource = [\`, \`  { head: "Head-1", column1: "td1", column2: "td2", column3: "td3", column4: "td4", column5: "td5" },\`, \`  { head: "Head-2", column1: "td1", column2: "td2", column3: "td3", column4: "td4", column5: "td5" },\`, \`  { head: "Head-3", column1: "td1", column2: "td2", column3: "td3", column4: "td4", column5: "td5" },\`, \`  { head: "Head-4", column1: "td1", column2: "td2", column3: "td3", column4: "td4", column5: "td5" },\`, \`]\`, \`const columns = [\`, \`  { key: "head", title: "TH", width: "100px" },\`, \`  { key: "column1", title: "TH", width: "180px" },\`, \`  { key: "column2", title: "TH", width: "180px" },\`, \`  { key: "column3", title: "TH", width: "180px" },\`, \`  { key: "column4", title: "TH", width: "120px" },\`, \`  { key: "column5", title: "TH", width: "120px", align: "center" },\`, \`]\`, \`<\/script>\`, '', '<template>', \`  <Table\`, \`    :dataSource='dataSource'\`, \`    :columns='columns'\`, \`    \${args.showCheckbox !== undefined ? \`:showCheckbox="\${args.showCheckbox}"\` : ''}\`, \`    \${args.showVerticalBorders !== undefined ? \`:showVerticalBorders="\${args.showVerticalBorders}"\` : ''}\`, \`    \${args.isSprite !== undefined ? \`:isSprite="\${args.isSprite}"\` : ''}\`, \`    \${args.className ? \`className="\${args.className}"\` : ''}\`, \`  />\`, '</template>'].filter(Boolean).join('\\n').trim();
        }
      }
    }
  }
}`,...(_=(N=b.parameters)==null?void 0:N.docs)==null?void 0:_.source}}};var F,E,D;g.parameters={...g.parameters,docs:{...(F=g.parameters)==null?void 0:F.docs,source:{originalSource:'{\n  name: \'框線表格\',\n  args: {\n    dataSource,\n    columns,\n    showCheckbox: false,\n    showVerticalBorders: true,\n    isSprite: false,\n    className: \'\'\n  },\n  render: args => ({\n    components: {\n      Table\n    },\n    setup() {\n      return {\n        args\n      };\n    },\n    template: `\n      <Table\n        :dataSource="args.dataSource"\n        :columns="args.columns"\n        :showCheckbox="args.showCheckbox"\n        :showVerticalBorders="args.showVerticalBorders"\n        :isSprite="args.isSprite"\n        :className="args.className"\n      />`\n  }),\n  parameters: {\n    docs: {\n      source: {\n        transform: (src, storyContext) => {\n          const {\n            args\n          } = storyContext;\n          return [`<script setup>`, `import { Table } from "@ded-wds-vue/ui";`, `const dataSource = [`, `  { head: "Head-1", column1: "td1", column2: "td2", column3: "td3", column4: "td4", column5: "td5" },`, `  { head: "Head-2", column1: "td1", column2: "td2", column3: "td3", column4: "td4", column5: "td5" },`, `  { head: "Head-3", column1: "td1", column2: "td2", column3: "td3", column4: "td4", column5: "td5" },`, `  { head: "Head-4", column1: "td1", column2: "td2", column3: "td3", column4: "td4", column5: "td5" },`, `]`, `const columns = [`, `  { key: "head", title: "TH", width: "100px" },`, `  { key: "column1", title: "TH", width: "180px" },`, `  { key: "column2", title: "TH", width: "180px" },`, `  { key: "column3", title: "TH", width: "180px" },`, `  { key: "column4", title: "TH", width: "120px" },`, `  { key: "column5", title: "TH", width: "120px", align: "center" },`, `]`, `<\/script>`, \'\', \'<template>\', `  <Table`, `    :dataSource=\'dataSource\'`, `    :columns=\'columns\'`, `    ${args.showCheckbox !== undefined ? `:showCheckbox="${args.showCheckbox}"` : \'\'}`, `    ${args.showVerticalBorders !== undefined ? `:showVerticalBorders="${args.showVerticalBorders}"` : \'\'}`, `    ${args.isSprite !== undefined ? `:isSprite="${args.isSprite}"` : \'\'}`, `    ${args.className ? `className="${args.className}"` : \'\'}`, `  />`, \'</template>\'].filter(Boolean).join(\'\\n\').trim();\n        }\n      }\n    }\n  }\n}',...(D=(E=g.parameters)==null?void 0:E.docs)==null?void 0:D.source}}};var A,j,W;x.parameters={...x.parameters,docs:{...(A=x.parameters)==null?void 0:A.docs,source:{originalSource:'{\n  name: \'客製化欄位\',\n  args: {\n    dataSource,\n    columns: customColumns,\n    showCheckbox: false,\n    showVerticalBorders: false,\n    isSprite: false,\n    className: \'\'\n  },\n  render: args => ({\n    components: {\n      Table,\n      Button\n    },\n    setup() {\n      const onClick = val => {\n        window.alert(val);\n      };\n      return {\n        args,\n        onClick\n      };\n    },\n    template: `\n      <Table\n        :columns="args.columns"\n        :dataSource="args.dataSource"\n        :showCheckbox="args.showCheckbox"\n        :showVerticalBorders="args.showVerticalBorders"\n        :isSprite="args.isSprite"\n        :className="args.className"\n      >\n        <template #column5="{ item }">\n          <Button\n            themeColor="primary"\n            variant="filled"\n            size="small"\n            width="fit"\n            borderWidth="1px"\n            radius="4px"\n            @click="onClick(item.column5)"\n          >\n            View\n          </Button>\n        </template>\n      </Table>`\n  }),\n  parameters: {\n    docs: {\n      source: {\n        transform: (src, storyContext) => {\n          const {\n            args\n          } = storyContext;\n          return [`<script setup>`, `import { Table, Button } from "@ded-wds-vue/ui";`, `const dataSource = [`, `  { head: "Head-1", column1: "td1", column2: "td2", column3: "td3", column4: "td4", column5: "td5" },`, `  { head: "Head-2", column1: "td1", column2: "td2", column3: "td3", column4: "td4", column5: "td5" },`, `  { head: "Head-3", column1: "td1", column2: "td2", column3: "td3", column4: "td4", column5: "td5" },`, `  { head: "Head-4", column1: "td1", column2: "td2", column3: "td3", column4: "td4", column5: "td5" },`, `]`, `const columns = [`, `  { key: "head", title: "TH", width: "10vw" },`, `  { key: "column1", title: "TH", width: "20vw" },`, `  { key: "column2", title: "TH", width: "20vw" },`, `  { key: "column3", title: "TH", width: "20vw" },`, `  { key: "column4", title: "TH", width: "15vw" },`, `  { key: "column5", title: "TH", width: "15vw", align: "center" },`, `]`, `const onClick = (val) => {`, `  window.alert(val.head + " " + val.column5);`, `};`, `<\/script>`, \'\', \'<template>\', `  <Table`, `    :dataSource=\'dataSource\'`, `    :columns=\'columns\'`, `    ${args.showCheckbox !== undefined ? `:showCheckbox="${args.showCheckbox}"` : \'\'}`, `    ${args.showVerticalBorders !== undefined ? `:showVerticalBorders="${args.showVerticalBorders}"` : \'\'}`, `    ${args.isSprite !== undefined ? `:isSprite="${args.isSprite}"` : \'\'}`, `    ${args.className ? `className="${args.className}"` : \'\'}`, `  >`, `    <template #column5="{item}">`, `      <Button`, `        themeColor="primary"`, `        variant="filled"`, `        size="small"`, `        width="fit"`, `        borderWidth="1px"`, `        radius="4px"`, `        @click="onClick(item)"`, `      >`, `        View`, `      </Button>`, `    </template>`, `  </Table>`, \'</template>\'].filter(Boolean).join(\'\\n\').trim();\n        }\n      }\n    }\n  }\n}',...(W=(j=x.parameters)==null?void 0:j.docs)==null?void 0:W.source}}};var z,q,K;y.parameters={...y.parameters,docs:{...(z=y.parameters)==null?void 0:z.docs,source:{originalSource:'{\n  name: \'可勾選資料列\',\n  args: {\n    dataSource,\n    columns,\n    showCheckbox: true,\n    showVerticalBorders: true,\n    isSprite: false,\n    className: \'\'\n  },\n  render: args => ({\n    components: {\n      Table\n    },\n    setup() {\n      return {\n        args\n      };\n    },\n    template: `\n      <Table\n        :columns="args.columns"\n        :dataSource="args.dataSource"\n        :showCheckbox="args.showCheckbox"\n        :showVerticalBorders="args.showVerticalBorders"\n        :isSprite="args.isSprite"\n        :className="args.className"\n      />`\n  }),\n  parameters: {\n    docs: {\n      source: {\n        transform: (src, storyContext) => {\n          const {\n            args\n          } = storyContext;\n          return [`<script setup>`, `import { Table } from "@ded-wds-vue/ui";`, `const dataSource = [`, `  { head: "Head-1", column1: "td1", column2: "td2", column3: "td3", column4: "td4", column5: "td5" },`, `  { head: "Head-2", column1: "td1", column2: "td2", column3: "td3", column4: "td4", column5: "td5" },`, `  { head: "Head-3", column1: "td1", column2: "td2", column3: "td3", column4: "td4", column5: "td5" },`, `  { head: "Head-4", column1: "td1", column2: "td2", column3: "td3", column4: "td4", column5: "td5" },`, `]`, `const columns = [`, `  { key: "head", title: "TH", width: "100px" },`, `  { key: "column1", title: "TH", width: "180px" },`, `  { key: "column2", title: "TH", width: "180px" },`, `  { key: "column3", title: "TH", width: "180px" },`, `  { key: "column4", title: "TH", width: "120px" },`, `  { key: "column5", title: "TH", width: "120px", align: "center" },`, `]`, `<\/script>`, \'\', \'<template>\', `  <Table`, `    :dataSource=\'dataSource\'`, `    :columns=\'columns\'`, `    ${args.showCheckbox !== undefined ? `:showCheckbox="${args.showCheckbox}"` : \'\'}`, `    ${args.showVerticalBorders !== undefined ? `:showVerticalBorders="${args.showVerticalBorders}"` : \'\'}`, `    ${args.isSprite !== undefined ? `:isSprite="${args.isSprite}"` : \'\'}`, `    ${args.className ? `className="${args.className}"` : \'\'}`, `  />`, \'</template>\'].filter(Boolean).join(\'\\n\').trim();\n        }\n      }\n    }\n  }\n}',...(K=(q=y.parameters)==null?void 0:q.docs)==null?void 0:K.source}}};var L,O,R;f.parameters={...f.parameters,docs:{...(L=f.parameters)==null?void 0:L.docs,source:{originalSource:`{
  name: '彈性寬度表格',
  args: {
    dataSource,
    columns: flexColumns,
    showCheckbox: false,
    showVerticalBorders: true,
    isSprite: false,
    className: ''
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
      />\`
  }),
  parameters: {
    docs: {
      description: {
        story: '此範例展示了彈性寬度功能：固定寬度與彈性寬度的混合使用'
      }
    }
  }
}`,...(R=(O=f.parameters)==null?void 0:O.docs)==null?void 0:R.source}}};const pe=["TableDefault","TableBorder","TableSlot","TableCheck","TableFlexWidth"];export{g as TableBorder,y as TableCheck,b as TableDefault,f as TableFlexWidth,x as TableSlot,pe as __namedExportsOrder,he as default};

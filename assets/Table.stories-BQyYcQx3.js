import{_ as O}from"./Button-oTbtdPII.js";import{r as J,g as p,c as l,a as i,d as C,n as m,F as y,q as S,o as r,k as B,t as H,h as P,f as Q}from"./vue.esm-bundler-CRlgvgXF.js";import"./Icon-CUK9ssyM.js";const Y={class:"ded-table"},Z={class:"ded-table-thead"},ee={class:"ded-table-thead-tr"},te=["checked","indeterminate"],oe={class:"ded-table-tbody"},ne=["onClick"],ae=["checked","onChange"],d={__name:"Table",props:{columns:{type:Array,required:!0},dataSource:{type:Array,required:!0},showCheckbox:{type:Boolean,default:!1},showVerticalBorders:{type:Boolean,default:!1},isSprite:{type:Boolean,default:!1},className:{type:String,default:""}},setup(n){const t=n,e=J([]),U=p(()=>e.value.length===t.dataSource.length),I=p(()=>e.value.length>0&&e.value.length<t.dataSource.length),K=p(()=>{let o=0,s=0;return t.showCheckbox&&(o+=48),t.columns.forEach(a=>{if(a.width){const c=a.width.match(/(\d+(?:\.\d+)?)/);c&&(o+=parseFloat(c[1]))}else s+=a.flex||1}),{fixedWidthSum:o,flexSum:s}}),T=p(()=>o=>{const s={textAlign:o.align||"left"};if(o.width)s.width=o.width;else{const a=o.flex||1,{flexSum:c}=K.value;if(c>0){const u=a/c*100;s.width=`${u}%`}else s.width="auto"}return s});function M(o){t.onRowClick&&t.onRowClick(o)}function X(o){e.value.includes(o)?e.value=e.value.filter(s=>s!==o):e.value.push(o),t.onSelect&&t.onSelect([...e.value])}function G(o){o.target.checked?e.value=t.dataSource.map(s=>s.head):e.value=[],t.onSelect&&t.onSelect([...e.value])}return(o,s)=>(r(),l("div",{class:m(["ded-table-container",{[t.className]:!!t.className}]),style:{"overflow-x":"auto"}},[i("table",Y,[i("thead",Z,[i("tr",ee,[t.showCheckbox?(r(),l("th",{key:0,class:m(["ded-table-thead-tr-th ded-table-checkbox-col",{"ded-table-thead-tr-th-border":t.showVerticalBorders}])},[i("input",{type:"checkbox",class:"ded-table-checkbox",checked:U.value,indeterminate:I.value,onChange:G},null,40,te)],2)):C("",!0),(r(!0),l(y,null,S(t.columns,a=>(r(),l("th",{key:a.key,style:B(T.value(a)),class:m(["ded-table-thead-tr-th",{"ded-table-thead-tr-th-border":t.showVerticalBorders}])},H(a.title),7))),128))])]),i("tbody",oe,[(r(!0),l(y,null,S(t.dataSource,(a,c)=>(r(),l("tr",{key:c,class:m(["ded-table-tbody-tr",{"ded-table-tbody-tr-sprite":t.isSprite}]),onClick:()=>M(a)},[t.showCheckbox?(r(),l("td",{key:0,class:m(["ded-table-tbody-tr-td ded-table-checkbox-col",{"ded-table-tbody-tr-td-border":t.showVerticalBorders}])},[i("input",{type:"checkbox",class:"ded-table-checkbox",checked:e.value.includes(a.head),onChange:()=>X(a.head)},null,40,ae)],2)):C("",!0),(r(!0),l(y,null,S(t.columns,u=>(r(),l("td",{key:u.key,style:B(T.value(u)),class:m(["ded-table-tbody-tr-td",{"ded-table-tbody-tr-td-border":t.showVerticalBorders}])},[P(o.$slots,u.key,{item:a},()=>[Q(H(a[u.key]),1)])],6))),128))],10,ne))),128))])])],2))}};d.__docgenInfo={exportName:"default",displayName:"Table",description:"",tags:{},props:[{name:"columns",type:{name:"array"},required:!0},{name:"dataSource",type:{name:"array"},required:!0},{name:"showCheckbox",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"showVerticalBorders",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"isSprite",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"className",type:{name:"string"},defaultValue:{func:!1,value:"''"}}],slots:[{name:"col.key",scoped:!0,bindings:[{name:"name",title:"binding"},{name:"item",title:"binding"}]}],sourceFiles:["/home/runner/work/DED-WDS_VUE/DED-WDS_VUE/libs/src/ui/element/Table/Table.vue"]};const h=[{head:"Head-1",column1:"td1",column2:"td2",column3:"td3",column4:"td4",column5:"td5"},{head:"Head-2",column1:"td1",column2:"td2",column3:"td3",column4:"td4",column5:"td5"},{head:"Head-3",column1:"td1",column2:"td2",column3:"td3",column4:"td4",column5:"td5"},{head:"Head-4",column1:"td1",column2:"td2",column3:"td3",column4:"td4",column5:"td5"}],f=[{key:"head",title:"TH",width:"100px"},{key:"column1",title:"TH",width:"180px"},{key:"column2",title:"TH",width:"180px"},{key:"column3",title:"TH",width:"180px"},{key:"column4",title:"TH",width:"120px"},{key:"column5",title:"TH",width:"120px",align:"center"}],se=[{key:"head",title:"TH",width:"10vw"},{key:"column1",title:"TH",width:"20vw"},{key:"column2",title:"TH",width:"20vw"},{key:"column3",title:"TH",width:"20vw"},{key:"column4",title:"TH",width:"15vw"},{key:"column5",title:"TH",width:"15vw",align:"center"}],le=[{key:"head",title:"名稱",width:"120px"},{key:"column1",title:"描述",flex:2},{key:"column2",title:"狀態",width:"100px"},{key:"column3",title:"類型",flex:1},{key:"column4",title:"日期",width:"150px"},{key:"column5",title:"操作",flex:1,align:"center"}],ue={components:{Button:O},title:"Component/Table",component:d,tags:["autodocs"],argTypes:{columns:{description:"欄位配置，支援固定寬度(width)和彈性寬度(flex)",control:{type:"object"},table:{type:{summary:"{ key: string; title: string; width?: string; flex?: number; align?: string }[]"},defaultValue:{detail:`width: 固定寬度（如 '120px', '10%'）
flex: 彈性寬度係數（如 1, 2, 3）
若都未設定則預設為 flex: 1`}}},dataSource:{description:"資料來源",control:{type:"object"},table:{type:{summary:"{ head: string; key1: string; key2: string; ..., keyX: string }[]"}}},showCheckbox:{description:"是否顯示 checkbox",control:{type:"boolean"}},showVerticalBorders:{description:"是否顯示垂直邊框",control:{type:"boolean"}},isSprite:{description:"是否顯示條紋背景",control:{type:"boolean"}},className:{description:"客製化樣式",control:{type:"text"}},"columns.[key]":{description:"columns 中 `key` 的值可直接作為 slot 名稱，例如 `<template #[key]>`",control:!1,table:{type:{summary:"Vue Component | HTML"},category:"SLOTS"}}},parameters:{docs:{title:"Table",description:{component:"Table 組件的呈現及說明。"}},actions:{disabled:!0}}},w={name:"預設項目",args:{dataSource:h,columns:f,showCheckbox:!1,showVerticalBorders:!1,isSprite:!0,className:""},render:n=>({components:{Table:d},setup(){return{args:n}},template:`
      <Table
        :dataSource="args.dataSource"
        :columns="args.columns"
        :showCheckbox="args.showCheckbox"
        :showVerticalBorders="args.showVerticalBorders"
        :isSprite="args.isSprite"
        :className="args.className"
      />
    `}),parameters:{controls:{exclude:["col.key"]},docs:{source:{transform:(n,t)=>{const{args:e}=t;return["<script setup>",'import { Table } from "@ded-wds-vue/ui";',"const dataSource = [",'  { head: "Head-1", column1: "td1", column2: "td2", column3: "td3", column4: "td4", column5: "td5" },','  { head: "Head-2", column1: "td1", column2: "td2", column3: "td3", column4: "td4", column5: "td5" },','  { head: "Head-3", column1: "td1", column2: "td2", column3: "td3", column4: "td4", column5: "td5" },','  { head: "Head-4", column1: "td1", column2: "td2", column3: "td3", column4: "td4", column5: "td5" },',"]","const columns = [",'  { key: "head", title: "TH", width: "100px" },','  { key: "column1", title: "TH", width: "180px" },','  { key: "column2", title: "TH", width: "180px" },','  { key: "column3", title: "TH", width: "180px" },','  { key: "column4", title: "TH", width: "120px" },','  { key: "column5", title: "TH", width: "120px", align: "center" },',"]","<\/script>","","<template>","  <Table","    :dataSource='dataSource'","    :columns='columns'",`    ${e.showCheckbox!==void 0?`:showCheckbox="${e.showCheckbox}"`:""}`,`    ${e.showVerticalBorders!==void 0?`:showVerticalBorders="${e.showVerticalBorders}"`:""}`,`    ${e.isSprite!==void 0?`:isSprite="${e.isSprite}"`:""}`,`    ${e.className?`className="${e.className}"`:""}`,"  />","</template>"].filter(Boolean).join(`
`).trim()}}}}},k={name:"框線表格",args:{dataSource:h,columns:f,showCheckbox:!1,showVerticalBorders:!0,isSprite:!1,className:""},render:n=>({components:{Table:d},setup(){return{args:n}},template:`
      <Table
        :dataSource="args.dataSource"
        :columns="args.columns"
        :showCheckbox="args.showCheckbox"
        :showVerticalBorders="args.showVerticalBorders"
        :isSprite="args.isSprite"
        :className="args.className"
      />`}),parameters:{docs:{source:{transform:(n,t)=>{const{args:e}=t;return["<script setup>",'import { Table } from "@ded-wds-vue/ui";',"const dataSource = [",'  { head: "Head-1", column1: "td1", column2: "td2", column3: "td3", column4: "td4", column5: "td5" },','  { head: "Head-2", column1: "td1", column2: "td2", column3: "td3", column4: "td4", column5: "td5" },','  { head: "Head-3", column1: "td1", column2: "td2", column3: "td3", column4: "td4", column5: "td5" },','  { head: "Head-4", column1: "td1", column2: "td2", column3: "td3", column4: "td4", column5: "td5" },',"]","const columns = [",'  { key: "head", title: "TH", width: "100px" },','  { key: "column1", title: "TH", width: "180px" },','  { key: "column2", title: "TH", width: "180px" },','  { key: "column3", title: "TH", width: "180px" },','  { key: "column4", title: "TH", width: "120px" },','  { key: "column5", title: "TH", width: "120px", align: "center" },',"]","<\/script>","","<template>","  <Table","    :dataSource='dataSource'","    :columns='columns'",`    ${e.showCheckbox!==void 0?`:showCheckbox="${e.showCheckbox}"`:""}`,`    ${e.showVerticalBorders!==void 0?`:showVerticalBorders="${e.showVerticalBorders}"`:""}`,`    ${e.isSprite!==void 0?`:isSprite="${e.isSprite}"`:""}`,`    ${e.className?`className="${e.className}"`:""}`,"  />","</template>"].filter(Boolean).join(`
`).trim()}}}}},b={name:"客製化欄位",args:{dataSource:h,columns:se,showCheckbox:!1,showVerticalBorders:!1,isSprite:!1,className:""},render:n=>({components:{Table:d,Button:O},setup(){return{args:n,onClick:e=>{window.alert(e)}}},template:`
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
      </Table>`}),parameters:{docs:{source:{transform:(n,t)=>{const{args:e}=t;return["<script setup>",'import { Table, Button } from "@ded-wds-vue/ui";',"const dataSource = [",'  { head: "Head-1", column1: "td1", column2: "td2", column3: "td3", column4: "td4", column5: "td5" },','  { head: "Head-2", column1: "td1", column2: "td2", column3: "td3", column4: "td4", column5: "td5" },','  { head: "Head-3", column1: "td1", column2: "td2", column3: "td3", column4: "td4", column5: "td5" },','  { head: "Head-4", column1: "td1", column2: "td2", column3: "td3", column4: "td4", column5: "td5" },',"]","const columns = [",'  { key: "head", title: "TH", width: "10vw" },','  { key: "column1", title: "TH", width: "20vw" },','  { key: "column2", title: "TH", width: "20vw" },','  { key: "column3", title: "TH", width: "20vw" },','  { key: "column4", title: "TH", width: "15vw" },','  { key: "column5", title: "TH", width: "15vw", align: "center" },',"]","const onClick = (val) => {",'  window.alert(val.head + " " + val.column5);',"};","<\/script>","","<template>","  <Table","    :dataSource='dataSource'","    :columns='columns'",`    ${e.showCheckbox!==void 0?`:showCheckbox="${e.showCheckbox}"`:""}`,`    ${e.showVerticalBorders!==void 0?`:showVerticalBorders="${e.showVerticalBorders}"`:""}`,`    ${e.isSprite!==void 0?`:isSprite="${e.isSprite}"`:""}`,`    ${e.className?`className="${e.className}"`:""}`,"  >",'    <template #column5="{item}">',"      <Button",'        themeColor="primary"','        variant="filled"','        size="small"','        width="fit"','        borderWidth="1px"','        radius="4px"','        @click="onClick(item)"',"      >","        View","      </Button>","    </template>","  </Table>","</template>"].filter(Boolean).join(`
`).trim()}}}}},g={name:"可勾選資料列",args:{dataSource:h,columns:f,showCheckbox:!0,showVerticalBorders:!0,isSprite:!1,className:""},render:n=>({components:{Table:d},setup(){return{args:n}},template:`
      <Table
        :columns="args.columns"
        :dataSource="args.dataSource"
        :showCheckbox="args.showCheckbox"
        :showVerticalBorders="args.showVerticalBorders"
        :isSprite="args.isSprite"
        :className="args.className"
      />`}),parameters:{docs:{source:{transform:(n,t)=>{const{args:e}=t;return["<script setup>",'import { Table } from "@ded-wds-vue/ui";',"const dataSource = [",'  { head: "Head-1", column1: "td1", column2: "td2", column3: "td3", column4: "td4", column5: "td5" },','  { head: "Head-2", column1: "td1", column2: "td2", column3: "td3", column4: "td4", column5: "td5" },','  { head: "Head-3", column1: "td1", column2: "td2", column3: "td3", column4: "td4", column5: "td5" },','  { head: "Head-4", column1: "td1", column2: "td2", column3: "td3", column4: "td4", column5: "td5" },',"]","const columns = [",'  { key: "head", title: "TH", width: "100px" },','  { key: "column1", title: "TH", width: "180px" },','  { key: "column2", title: "TH", width: "180px" },','  { key: "column3", title: "TH", width: "180px" },','  { key: "column4", title: "TH", width: "120px" },','  { key: "column5", title: "TH", width: "120px", align: "center" },',"]","<\/script>","","<template>","  <Table","    :dataSource='dataSource'","    :columns='columns'",`    ${e.showCheckbox!==void 0?`:showCheckbox="${e.showCheckbox}"`:""}`,`    ${e.showVerticalBorders!==void 0?`:showVerticalBorders="${e.showVerticalBorders}"`:""}`,`    ${e.isSprite!==void 0?`:isSprite="${e.isSprite}"`:""}`,`    ${e.className?`className="${e.className}"`:""}`,"  />","</template>"].filter(Boolean).join(`
`).trim()}}}}},x={name:"彈性寬度表格",args:{dataSource:h,columns:le,showCheckbox:!1,showVerticalBorders:!0,isSprite:!1,className:""},render:n=>({components:{Table:d},setup(){return{args:n}},template:`
      <Table
        :columns="args.columns"
        :dataSource="args.dataSource"
        :showCheckbox="args.showCheckbox"
        :showVerticalBorders="args.showVerticalBorders"
        :isSprite="args.isSprite"
        :className="args.className"
      />`}),parameters:{docs:{description:{story:"此範例展示了彈性寬度功能：固定寬度與彈性寬度的混合使用"}}}};var V,$,N;w.parameters={...w.parameters,docs:{...(V=w.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
}`,...(N=($=w.parameters)==null?void 0:$.docs)==null?void 0:N.source}}};var v,_,F;k.parameters={...k.parameters,docs:{...(v=k.parameters)==null?void 0:v.docs,source:{originalSource:'{\n  name: \'框線表格\',\n  args: {\n    dataSource,\n    columns,\n    showCheckbox: false,\n    showVerticalBorders: true,\n    isSprite: false,\n    className: \'\'\n  },\n  render: args => ({\n    components: {\n      Table\n    },\n    setup() {\n      return {\n        args\n      };\n    },\n    template: `\n      <Table\n        :dataSource="args.dataSource"\n        :columns="args.columns"\n        :showCheckbox="args.showCheckbox"\n        :showVerticalBorders="args.showVerticalBorders"\n        :isSprite="args.isSprite"\n        :className="args.className"\n      />`\n  }),\n  parameters: {\n    docs: {\n      source: {\n        transform: (src, storyContext) => {\n          const {\n            args\n          } = storyContext;\n          return [`<script setup>`, `import { Table } from "@ded-wds-vue/ui";`, `const dataSource = [`, `  { head: "Head-1", column1: "td1", column2: "td2", column3: "td3", column4: "td4", column5: "td5" },`, `  { head: "Head-2", column1: "td1", column2: "td2", column3: "td3", column4: "td4", column5: "td5" },`, `  { head: "Head-3", column1: "td1", column2: "td2", column3: "td3", column4: "td4", column5: "td5" },`, `  { head: "Head-4", column1: "td1", column2: "td2", column3: "td3", column4: "td4", column5: "td5" },`, `]`, `const columns = [`, `  { key: "head", title: "TH", width: "100px" },`, `  { key: "column1", title: "TH", width: "180px" },`, `  { key: "column2", title: "TH", width: "180px" },`, `  { key: "column3", title: "TH", width: "180px" },`, `  { key: "column4", title: "TH", width: "120px" },`, `  { key: "column5", title: "TH", width: "120px", align: "center" },`, `]`, `<\/script>`, \'\', \'<template>\', `  <Table`, `    :dataSource=\'dataSource\'`, `    :columns=\'columns\'`, `    ${args.showCheckbox !== undefined ? `:showCheckbox="${args.showCheckbox}"` : \'\'}`, `    ${args.showVerticalBorders !== undefined ? `:showVerticalBorders="${args.showVerticalBorders}"` : \'\'}`, `    ${args.isSprite !== undefined ? `:isSprite="${args.isSprite}"` : \'\'}`, `    ${args.className ? `className="${args.className}"` : \'\'}`, `  />`, \'</template>\'].filter(Boolean).join(\'\\n\').trim();\n        }\n      }\n    }\n  }\n}',...(F=(_=k.parameters)==null?void 0:_.docs)==null?void 0:F.source}}};var E,D,A;b.parameters={...b.parameters,docs:{...(E=b.parameters)==null?void 0:E.docs,source:{originalSource:'{\n  name: \'客製化欄位\',\n  args: {\n    dataSource,\n    columns: customColumns,\n    showCheckbox: false,\n    showVerticalBorders: false,\n    isSprite: false,\n    className: \'\'\n  },\n  render: args => ({\n    components: {\n      Table,\n      Button\n    },\n    setup() {\n      const onClick = val => {\n        window.alert(val);\n      };\n      return {\n        args,\n        onClick\n      };\n    },\n    template: `\n      <Table\n        :columns="args.columns"\n        :dataSource="args.dataSource"\n        :showCheckbox="args.showCheckbox"\n        :showVerticalBorders="args.showVerticalBorders"\n        :isSprite="args.isSprite"\n        :className="args.className"\n      >\n        <template #column5="{ item }">\n          <Button\n            themeColor="primary"\n            variant="filled"\n            size="small"\n            width="fit"\n            borderWidth="1px"\n            radius="4px"\n            @click="onClick(item.column5)"\n          >\n            View\n          </Button>\n        </template>\n      </Table>`\n  }),\n  parameters: {\n    docs: {\n      source: {\n        transform: (src, storyContext) => {\n          const {\n            args\n          } = storyContext;\n          return [`<script setup>`, `import { Table, Button } from "@ded-wds-vue/ui";`, `const dataSource = [`, `  { head: "Head-1", column1: "td1", column2: "td2", column3: "td3", column4: "td4", column5: "td5" },`, `  { head: "Head-2", column1: "td1", column2: "td2", column3: "td3", column4: "td4", column5: "td5" },`, `  { head: "Head-3", column1: "td1", column2: "td2", column3: "td3", column4: "td4", column5: "td5" },`, `  { head: "Head-4", column1: "td1", column2: "td2", column3: "td3", column4: "td4", column5: "td5" },`, `]`, `const columns = [`, `  { key: "head", title: "TH", width: "10vw" },`, `  { key: "column1", title: "TH", width: "20vw" },`, `  { key: "column2", title: "TH", width: "20vw" },`, `  { key: "column3", title: "TH", width: "20vw" },`, `  { key: "column4", title: "TH", width: "15vw" },`, `  { key: "column5", title: "TH", width: "15vw", align: "center" },`, `]`, `const onClick = (val) => {`, `  window.alert(val.head + " " + val.column5);`, `};`, `<\/script>`, \'\', \'<template>\', `  <Table`, `    :dataSource=\'dataSource\'`, `    :columns=\'columns\'`, `    ${args.showCheckbox !== undefined ? `:showCheckbox="${args.showCheckbox}"` : \'\'}`, `    ${args.showVerticalBorders !== undefined ? `:showVerticalBorders="${args.showVerticalBorders}"` : \'\'}`, `    ${args.isSprite !== undefined ? `:isSprite="${args.isSprite}"` : \'\'}`, `    ${args.className ? `className="${args.className}"` : \'\'}`, `  >`, `    <template #column5="{item}">`, `      <Button`, `        themeColor="primary"`, `        variant="filled"`, `        size="small"`, `        width="fit"`, `        borderWidth="1px"`, `        radius="4px"`, `        @click="onClick(item)"`, `      >`, `        View`, `      </Button>`, `    </template>`, `  </Table>`, \'</template>\'].filter(Boolean).join(\'\\n\').trim();\n        }\n      }\n    }\n  }\n}',...(A=(D=b.parameters)==null?void 0:D.docs)==null?void 0:A.source}}};var j,W,z;g.parameters={...g.parameters,docs:{...(j=g.parameters)==null?void 0:j.docs,source:{originalSource:'{\n  name: \'可勾選資料列\',\n  args: {\n    dataSource,\n    columns,\n    showCheckbox: true,\n    showVerticalBorders: true,\n    isSprite: false,\n    className: \'\'\n  },\n  render: args => ({\n    components: {\n      Table\n    },\n    setup() {\n      return {\n        args\n      };\n    },\n    template: `\n      <Table\n        :columns="args.columns"\n        :dataSource="args.dataSource"\n        :showCheckbox="args.showCheckbox"\n        :showVerticalBorders="args.showVerticalBorders"\n        :isSprite="args.isSprite"\n        :className="args.className"\n      />`\n  }),\n  parameters: {\n    docs: {\n      source: {\n        transform: (src, storyContext) => {\n          const {\n            args\n          } = storyContext;\n          return [`<script setup>`, `import { Table } from "@ded-wds-vue/ui";`, `const dataSource = [`, `  { head: "Head-1", column1: "td1", column2: "td2", column3: "td3", column4: "td4", column5: "td5" },`, `  { head: "Head-2", column1: "td1", column2: "td2", column3: "td3", column4: "td4", column5: "td5" },`, `  { head: "Head-3", column1: "td1", column2: "td2", column3: "td3", column4: "td4", column5: "td5" },`, `  { head: "Head-4", column1: "td1", column2: "td2", column3: "td3", column4: "td4", column5: "td5" },`, `]`, `const columns = [`, `  { key: "head", title: "TH", width: "100px" },`, `  { key: "column1", title: "TH", width: "180px" },`, `  { key: "column2", title: "TH", width: "180px" },`, `  { key: "column3", title: "TH", width: "180px" },`, `  { key: "column4", title: "TH", width: "120px" },`, `  { key: "column5", title: "TH", width: "120px", align: "center" },`, `]`, `<\/script>`, \'\', \'<template>\', `  <Table`, `    :dataSource=\'dataSource\'`, `    :columns=\'columns\'`, `    ${args.showCheckbox !== undefined ? `:showCheckbox="${args.showCheckbox}"` : \'\'}`, `    ${args.showVerticalBorders !== undefined ? `:showVerticalBorders="${args.showVerticalBorders}"` : \'\'}`, `    ${args.isSprite !== undefined ? `:isSprite="${args.isSprite}"` : \'\'}`, `    ${args.className ? `className="${args.className}"` : \'\'}`, `  />`, \'</template>\'].filter(Boolean).join(\'\\n\').trim();\n        }\n      }\n    }\n  }\n}',...(z=(W=g.parameters)==null?void 0:W.docs)==null?void 0:z.source}}};var q,R,L;x.parameters={...x.parameters,docs:{...(q=x.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
}`,...(L=(R=x.parameters)==null?void 0:R.docs)==null?void 0:L.source}}};const ie=["TableDefault","TableBorder","TableSlot","TableCheck","TableFlexWidth"];export{k as TableBorder,g as TableCheck,w as TableDefault,x as TableFlexWidth,b as TableSlot,ie as __namedExportsOrder,ue as default};

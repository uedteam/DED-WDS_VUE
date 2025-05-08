import{j as y,o as i,e as R,c as g,d as X,a as v,b as Y,t as K,n as x,r as T,w as Z,F as N,q as ee,l as ae,f as te,y as B}from"./vue.esm-bundler-CeV5Z5_m.js";import{_ as $}from"./Button-yylmdm_k.js";import{_ as ne}from"./Icon-CW5hHWCf.js";const se={key:0,class:"ded-icon"},P={__name:"TabItem",props:{themeColor:{type:String,validator:t=>["primary","secondary","neutral","info","success","warning","error"].includes(t)},type:{type:String,default:"basic",validator:t=>["basic","outline","button"].includes(t)},prefix:{type:String},title:{type:String,default:"頁籤 1"},index:{type:Number},isActive:{type:Boolean},isDisabled:{type:Boolean,default:!1},onClick:{type:Function},className:{type:String,default:""}},setup(t){const a=t;function e(n){!a.isDisabled&&a.onClick&&a.onClick(n)}return(n,r)=>(i(),y($,{"theme-color":a.themeColor,variant:a.type==="button"?"filled":"text","is-disabled":a.isDisabled,"data-index":a.index,class:x({"ded-tab ":a.type!=="button",[`ded-tab-${a.themeColor}`]:a.type==="basic",[`ded-tab-${a.themeColor}-active`]:a.isActive&&a.type==="basic","ded-tab-disable":a.isDisabled&&a.type==="basic"||a.isDisabled&&a.type==="outline",[`ded-tab-outline-${a.themeColor}`]:a.themeColor&&a.type==="outline",[`ded-tab-outline-${a.themeColor}-active`]:a.isActive&&a.type==="outline","ded-tab-button ":!a.isActive&&a.type==="button",[`ded-tab-button-${a.themeColor}`]:a.themeColor&&a.type==="button",[`ded-tab-button-${a.themeColor}-active`]:a.isActive&&a.type==="button","ded-tab-button-disable":a.isDisabled&&a.type==="button"}),onClick:e},{default:R(()=>[a.prefix?(i(),g("span",se,[Y(ne,{name:"SvgArrowDown"})])):X("",!0),v("span",null,K(a.title),1)]),_:1},8,["theme-color","variant","is-disabled","data-index","class"]))}};P.__docgenInfo={exportName:"default",displayName:"TabItem",description:"",tags:{},props:[{name:"themeColor",type:{name:"string"},values:["primary","secondary","neutral","info","success","warning","error"]},{name:"type",type:{name:"string"},defaultValue:{func:!1,value:"'basic'"},values:["basic","outline","button"]},{name:"prefix",type:{name:"string"}},{name:"title",type:{name:"string"},defaultValue:{func:!1,value:"'頁籤 1'"}},{name:"index",type:{name:"number"}},{name:"isActive",type:{name:"boolean"}},{name:"isDisabled",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"onClick",type:{name:"func"}},{name:"className",type:{name:"string"},defaultValue:{func:!1,value:"''"}}],sourceFiles:["/home/runner/work/DED-WDS_VUE/DED-WDS_VUE/libs/src/ui/element/Tabs/TabItem.vue"]};const s={__name:"Tabs",props:{themeColor:{type:String,default:"primary",validator:t=>["primary","secondary","neutral","info","success","warning","error"].includes(t)},dataSource:{type:Array,required:!1,validator:t=>t.every(a=>typeof a.title=="string"&&a.content!==void 0)},activeIndex:{type:Number,default:0},type:{type:String,default:"basic",validator:t=>["basic","outline","button"].includes(t)},prefix:{type:String,default:""},isDisabled:{type:Boolean,default:!1},className:{type:String,default:""}},emits:["update:activeIndex","tabChange"],setup(t,{emit:a}){const e=t,n=a,r=T(e.activeIndex||0);function Q(o){const c=Number.parseInt(o.currentTarget.dataset.index,10);r.value=c,n("update:activeIndex",c),n("tabChange",c)}return Z(()=>e.activeIndex,o=>{r.value=o||0}),(o,c)=>{var S,D,I;return i(),g("div",{class:x(["ded-tabs-container",{[e.className]:!!e.className}])},[v("div",{class:x(["ded-tabs",{"ded-tabs-button":e.type==="button"}])},[(i(!0),g(N,null,ee(e.dataSource,(h,f)=>(i(),y(P,{key:f,"theme-color":e.themeColor,title:h.title,type:e.type,prefix:e.prefix,index:f,"is-active":f===r.value,"is-disabled":e.isDisabled||h.isDisabled,onClick:Q},null,8,["theme-color","title","type","prefix","index","is-active","is-disabled"]))),128))],2),v("div",{class:x(["ded-tab-content",[{"ded-tab-disable":e.isDisabled}]])},[typeof((S=e.dataSource[r.value])==null?void 0:S.content)=="object"?(i(),y(ae((D=e.dataSource[r.value])==null?void 0:D.content),{key:0})):(i(),g(N,{key:1},[te(K((I=e.dataSource[r.value])==null?void 0:I.content),1)],64))],2)],2)}}};s.__docgenInfo={exportName:"default",displayName:"Tabs",description:"",tags:{},props:[{name:"themeColor",type:{name:"string"},defaultValue:{func:!1,value:"'primary'"},values:["primary","secondary","neutral","info","success","warning","error"]},{name:"dataSource",type:{name:"array"},required:!1},{name:"activeIndex",type:{name:"number"},defaultValue:{func:!1,value:"0"}},{name:"type",type:{name:"string"},defaultValue:{func:!1,value:"'basic'"},values:["basic","outline","button"]},{name:"prefix",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"isDisabled",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"className",type:{name:"string"},defaultValue:{func:!1,value:"''"}}],events:[{name:"update:activeIndex"},{name:"tabChange"}],sourceFiles:["/home/runner/work/DED-WDS_VUE/DED-WDS_VUE/libs/src/ui/element/Tabs/Tabs.vue"]};function C(t){return`    ${t.map(a=>{let e="";return typeof a.content=="string"?e=`"${a.content}"`:a.content&&typeof a.content=="object"&&(e="/* 在此處放置您的組件或HTML內容 */"),`{
        title: "${a.title}",
        content: ${e},
    }`}).join(`,
    `)}`}const ce={title:"Component/Tabs",component:s,tags:["Tabs"],argTypes:{themeColor:{description:"主題顏色",control:{type:"select"},options:["primary","secondary","neutral","info","success","warning","error"],table:{type:{summary:"primary | secondary | neutral | info | success | warning | error"}}},dataSource:{description:"資料來源",control:{type:"object"},table:{type:{summary:"{ title: string; content: string | VNode | Component; }[]"}}},activeIndex:{description:"活動頁籤索引",control:{type:"number",min:0,max:2,step:1}},type:{description:"頁籤樣式",control:{type:"select"},options:["basic","outline","button"],table:{type:{summary:"basic | outline | button "}}},prefix:{description:"前綴元素",control:{type:"select",labels:{"":"none",SvgArrowDown:"SvgArrowDown"}},options:["","SvgArrowDown"]},isDisabled:{description:"是否禁用",control:{type:"boolean"}},className:{description:"客製化樣式",control:{type:"text"}}},parameters:{docs:{title:"Tabs",description:{component:"頁籤組件的呈現及說明。"}}}},d={name:"預設項目",args:{themeColor:"primary",dataSource:[{title:"Tab 1",content:"Content 1"},{title:"Tab 2",content:"Content 2"},{title:"Tab 3",content:"Content 3"}],activeIndex:0,type:"basic",prefix:"SvgArrowDown",isDisabled:!1,className:""},render:t=>({components:{Tabs:s},setup(){return{args:t}},template:`
      <Tabs
        :themeColor="args.themeColor"
        :dataSource="args.dataSource"
        :activeIndex="args.activeIndex"
        :type="args.type"
        :prefix="args.prefix"
        :isDisabled="args.isDisabled"
        :className="args.className"
      ></Tabs>`}),parameters:{controls:{},docs:{source:{transform:(t,a)=>{const{args:e}=a;return["<script setup>",'import { Tabs } from "@ded-wds-vue/ui";',"const dataSource = [",`${C(e.dataSource)}`,"];","<\/script>","","<template>","  <Tabs",`    ${e.themeColor?`themeColor="${e.themeColor}"`:""}`,'    :dataSource="dataSource"',`    ${e.activeIndex!==void 0?`:activeIndex="${e.activeIndex}"`:""}`,`    ${e.type?`type="${e.type}"`:""}`,`    ${e.prefix?`prefix="${e.prefix}"`:""}`,`    ${e.isDisabled!==void 0?`:isDisabled="${e.isDisabled}"`:""}`,`    ${e.className?`className="${e.className}"`:""}`,"  ></Tabs>","</template>"].filter(Boolean).join(`
`).trim()}}}}},l={name:"頁籤類型",args:{themeColor:"primary",dataSource:[{title:"Tab 1",content:"Content 1"},{title:"Tab 2",content:"Content 2"},{title:"Tab 3",content:"Content 3"}],activeIndex:0,prefix:"SvgArrowDown",isDisabled:!1,className:""},render:t=>({components:{Tabs:s},setup(){return{args:t}},template:`
      <div style="display:flex; flex-direction: column; gap:24px">
        <Tabs
          :themeColor="args.themeColor"
          :dataSource="args.dataSource"
          :activeIndex="args.activeIndex"
          type="basic"
          :prefix="args.prefix"
          :isDisabled="args.isDisabled"
          :className="args.className"
        ></Tabs>
        <Tabs
          :themeColor="args.themeColor"
          :dataSource="args.dataSource"
          :activeIndex="args.activeIndex"
          type="outline"
          :prefix="args.prefix"
          :isDisabled="args.isDisabled"
          :className="args.className"
        ></Tabs>
        <Tabs
          :themeColor="args.themeColor"
          :dataSource="args.dataSource"
          :activeIndex="args.activeIndex"
          type="button"
          :prefix="args.prefix"
          :isDisabled="args.isDisabled"
          :className="args.className"
        ></Tabs>
      </div>`}),parameters:{controls:{exclude:["type"]},docs:{source:{transform:(t,a)=>{const{args:e}=a;return["<script setup>",'import { Tabs } from "@ded-wds-vue/ui";',"const dataSource = [",`${C(e.dataSource)}`,"];","<\/script>","","<template>","  <Tabs",`    ${e.themeColor?`themeColor="${e.themeColor}"`:""}`,'    :dataSource="dataSource"',`    ${e.activeIndex!==void 0?`:activeIndex="${e.activeIndex}"`:""}`,'    type="basic"',`    ${e.prefix?`prefix="${e.prefix}"`:""}`,`    ${e.isDisabled!==void 0?`:isDisabled="${e.isDisabled}"`:""}`,`    ${e.className?`className="${e.className}"`:""}`,"  ></Tabs>","  <Tabs",`    ${e.themeColor?`themeColor="${e.themeColor}"`:""}`,'    :dataSource="dataSource"',`    ${e.activeIndex!==void 0?`:activeIndex="${e.activeIndex}"`:""}`,'    type="outline"',`    ${e.prefix?`prefix="${e.prefix}"`:""}`,`    ${e.isDisabled!==void 0?`:isDisabled="${e.isDisabled}"`:""}`,`    ${e.className?`className="${e.className}"`:""}`,"  ></Tabs>","  <Tabs",`    ${e.themeColor?`themeColor="${e.themeColor}"`:""}`,'    :dataSource="dataSource"',`    ${e.activeIndex!==void 0?`:activeIndex="${e.activeIndex}"`:""}`,'    type="button"',`    ${e.prefix?`prefix="${e.prefix}"`:""}`,`    ${e.isDisabled!==void 0?`:isDisabled="${e.isDisabled}"`:""}`,`    ${e.className?`className="${e.className}"`:""}`,"  ></Tabs>","</template>"].filter(Boolean).join(`
`).trim()}}}}},u={name:"主題色彩",args:{dataSource:[{title:"Tab 1",content:"Content 1"},{title:"Tab 2",content:"Content 2"},{title:"Tab 3",content:"Content 3"}],activeIndex:0,type:"button",prefix:"SvgArrowDown",isDisabled:!1,className:""},render:t=>({components:{Tabs:s},setup(){return{args:t}},template:`
      <div style="display:flex; flex-direction: column; gap:16px">
        <Tabs
          themeColor="primary"
          :dataSource="args.dataSource"
          :activeIndex="args.activeIndex"
          :type="args.type"
          :prefix="args.prefix"
          :isDisabled="args.isDisabled"
          :className="args.className"
        ></Tabs>
        <Tabs
          themeColor="secondary"
          :dataSource="args.dataSource"
          :activeIndex="args.activeIndex"
          :type="args.type"
          :prefix="args.prefix"
          :isDisabled="args.isDisabled"
          :className="args.className"
        ></Tabs>
        <Tabs
          themeColor="neutral"
          :dataSource="args.dataSource"
          :activeIndex="args.activeIndex"
          :type="args.type"
          :prefix="args.prefix"
          :isDisabled="args.isDisabled"
          :className="args.className"
        ></Tabs>
        <Tabs
          themeColor="info"
          :dataSource="args.dataSource"
          :activeIndex="args.activeIndex"
          :type="args.type"
          :prefix="args.prefix"
          :isDisabled="args.isDisabled"
          :className="args.className"
        ></Tabs>
        <Tabs
          themeColor="success"
          :dataSource="args.dataSource"
          :activeIndex="args.activeIndex"
          :type="args.type"
          :prefix="args.prefix"
          :isDisabled="args.isDisabled"
          :className="args.className"
        ></Tabs>
        <Tabs
          themeColor="warning"
          :dataSource="args.dataSource"
          :activeIndex="args.activeIndex"
          :type="args.type"
          :prefix="args.prefix"
          :isDisabled="args.isDisabled"
          :className="args.className"
        ></Tabs>
        <Tabs
          themeColor="error"
          :dataSource="args.dataSource"
          :activeIndex="args.activeIndex"
          :type="args.type"
          :prefix="args.prefix"
          :isDisabled="args.isDisabled"
          :className="args.className"
        ></Tabs>
      </div>`}),parameters:{controls:{exclude:["themeColor"]},docs:{source:{transform:(t,a)=>{const{args:e}=a;return["<script setup>",'import { Tabs } from "@ded-wds-vue/ui";',"const dataSource = [",`${C(e.dataSource)}`,"];","<\/script>","","<template>","  <Tabs",'    themeColor="primary"','    :dataSource="dataSource"',`    ${e.activeIndex!==void 0?`:activeIndex="${e.activeIndex}"`:""}`,`    ${e.type?`type="${e.type}"`:""}`,`    ${e.prefix?`prefix="${e.prefix}"`:""}`,`    ${e.isDisabled!==void 0?`:isDisabled="${e.isDisabled}"`:""}`,`    ${e.className?`className="${e.className}"`:""}`,"  ></Tabs>","  <Tabs",'    themeColor="secondary"','    :dataSource="dataSource"',`    ${e.activeIndex!==void 0?`:activeIndex="${e.activeIndex}"`:""}`,`    ${e.type?`type="${e.type}"`:""}`,`    ${e.prefix?`prefix="${e.prefix}"`:""}`,`    ${e.isDisabled!==void 0?`:isDisabled="${e.isDisabled}"`:""}`,`    ${e.className?`className="${e.className}"`:""}`,"  ></Tabs>","  <Tabs",'    themeColor="neutral"','    :dataSource="dataSource"',`    ${e.activeIndex!==void 0?`:activeIndex="${e.activeIndex}"`:""}`,`    ${e.type?`type="${e.type}"`:""}`,`    ${e.prefix?`prefix="${e.prefix}"`:""}`,`    ${e.isDisabled!==void 0?`:isDisabled="${e.isDisabled}"`:""}`,`    ${e.className?`className="${e.className}"`:""}`,"  ></Tabs>","  <Tabs",'    themeColor="info"','    :dataSource="dataSource"',`    ${e.activeIndex!==void 0?`:activeIndex="${e.activeIndex}"`:""}`,`    ${e.type?`type="${e.type}"`:""}`,`    ${e.prefix?`prefix="${e.prefix}"`:""}`,`    ${e.isDisabled!==void 0?`:isDisabled="${e.isDisabled}"`:""}`,`    ${e.className?`className="${e.className}"`:""}`,"  ></Tabs>","  <Tabs",'    themeColor="success"','    :dataSource="dataSource"',`    ${e.activeIndex!==void 0?`:activeIndex="${e.activeIndex}"`:""}`,`    ${e.type?`type="${e.type}"`:""}`,`    ${e.prefix?`prefix="${e.prefix}"`:""}`,`    ${e.isDisabled!==void 0?`:isDisabled="${e.isDisabled}"`:""}`,`    ${e.className?`className="${e.className}"`:""}`,"  ></Tabs>","  <Tabs",'    themeColor="warning"','    :dataSource="dataSource"',`    ${e.activeIndex!==void 0?`:activeIndex="${e.activeIndex}"`:""}`,`    ${e.type?`type="${e.type}"`:""}`,`    ${e.prefix?`prefix="${e.prefix}"`:""}`,`    ${e.isDisabled!==void 0?`:isDisabled="${e.isDisabled}"`:""}`,`    ${e.className?`className="${e.className}"`:""}`,"  ></Tabs>","  <Tabs",'    themeColor="error"','    :dataSource="dataSource"',`    ${e.activeIndex!==void 0?`:activeIndex="${e.activeIndex}"`:""}`,`    ${e.type?`type="${e.type}"`:""}`,`    ${e.prefix?`prefix="${e.prefix}"`:""}`,`    ${e.isDisabled!==void 0?`:isDisabled="${e.isDisabled}"`:""}`,`    ${e.className?`className="${e.className}"`:""}`,"  ></Tabs>","</template>"].filter(Boolean).join(`
`).trim()}}}}},p={name:"不同內容類型",args:{themeColor:"primary",dataSource:[{title:"無內容",content:""},{title:"純文字內容",content:"這是一個純文字內容的頁籤"},{title:"HTML內容",content:'<div class="ded-button-custom">帶有樣式的HTML內容</div>'},{title:"Button組件",content:"這裡會顯示Button組件"}],activeIndex:0,type:"basic",prefix:"",isDisabled:!1,className:""},render:t=>({components:{Tabs:s,Button:$},setup(){const a=[t.dataSource[0],t.dataSource[1],{title:t.dataSource[2].title,content:B("div",{innerHTML:t.dataSource[2].content})},{title:t.dataSource[3].title,content:B($,{themeColor:"primary",variant:"filled",size:"medium",onClick:()=>alert("Button clicked")},"Click me")}];return{args:t,enhancedDataSource:a}},template:`
      <Tabs
        :themeColor="args.themeColor"
        :dataSource="enhancedDataSource"
        :activeIndex="args.activeIndex"
        :type="args.type"
        :prefix="args.prefix"
        :isDisabled="args.isDisabled"
        :className="args.className"
      ></Tabs>`}),parameters:{docs:{description:{story:"示範如何在頁籤中使用不同類型的內容：純文字、HTML和Button組件。"},source:{code:`
<script setup>
import { Tabs, Button } from "@ded-wds-vue/ui";
import { h } from 'vue';

// 帶有不同類型內容的資料來源
const dataSource = [
  {
    title: '純文字內容',
    content: '這是一個純文字內容的頁籤',
  },
  {
    title: 'HTML內容',
    content: h('div', { innerHTML: '<div class="ded-button-custom">帶有樣式的HTML內容</div>' }),
  },
  {
    title: 'Button組件',
    content: h(Button, {
      themeColor: 'success',
      variant: 'filled',
      size: 'medium',
      onClick: () => alert('Button clicked')
    }, 'Click me'),
  },
];
<\/script>

<template>
  <Tabs
    themeColor="primary"
    :dataSource="dataSource"
    :activeIndex="0"
    type="basic"
  ></Tabs>
</template>
        `,language:"vue"}}}},m={name:"事件處理",args:{themeColor:"primary",dataSource:[{title:"Tab 1",content:"Content 1"},{title:"Tab 2",content:"Content 2"},{title:"Tab 3",content:"Content 3"}],activeIndex:0,type:"basic",prefix:"",isDisabled:!1,className:""},render:t=>({components:{Tabs:s},setup(){const a=T(t.activeIndex);function e(n){console.log("Tab changed to index:",n),a.value=n}return{args:t,currentIndex:a,handleTabChange:e}},template:`
      <div>
        <p style="font-size: 16px; margin-bottom: 10px;">當前選中的頁籤索引: <strong>{{ currentIndex }}</strong></p>
        <Tabs
          :themeColor="args.themeColor"
          :dataSource="args.dataSource"
          :activeIndex="currentIndex"
          @update:activeIndex="handleTabChange"
          :type="args.type"
          :prefix="args.prefix"
          :isDisabled="args.isDisabled"
          :className="args.className"
        ></Tabs>
      </div>`}),parameters:{docs:{description:{story:"示範如何處理頁籤切換事件並獲取當前索引。"},source:{code:`
<script setup>
import { ref } from 'vue';
import { Tabs } from "@ded-wds-vue/ui";

const dataSource = [
  {
    title: 'Tab 1',
    content: 'Content 1',
  },
  {
    title: 'Tab 2',
    content: 'Content 2',
  },
  {
    title: 'Tab 3',
    content: 'Content 3',
  },
];

const currentIndex = ref(0);

function handleTabChange(index) {
  console.log('Tab changed to index:', index);
  currentIndex.value = index;
}
<\/script>

<template>
  <p>當前選中的頁籤索引: {{ currentIndex }}</p>
  <Tabs
    themeColor="primary"
    :dataSource="dataSource"
    :activeIndex="currentIndex"
    @update:activeIndex="handleTabChange"
    type="basic"
  ></Tabs>
</template>
        `,language:"vue"}}}},b={name:"v-model 綁定",args:{themeColor:"primary",dataSource:[{title:"Tab 1",content:"Content 1"},{title:"Tab 2",content:"Content 2"},{title:"Tab 3",content:"Content 3"}],type:"basic",prefix:"",isDisabled:!1,className:""},render:t=>({components:{Tabs:s},setup(){const a=T(0);return{args:t,selectedIndex:a}},template:`
      <div>
        <div style="margin-bottom: 15px; display: flex; gap: 10px; align-items: center;">
          <p style="font-size: 16px;">當前選中的索引: <strong>{{ selectedIndex }}</strong></p>
          <button 
            v-for="i in 3" 
            :key="i" 
            @click="selectedIndex = i-1"
            style="padding: 5px 10px; margin-right: 5px; cursor: pointer;"
            :style="selectedIndex === i-1 ? 'background-color: #4CAF50; color: white;' : ''"
          >
            切換到 {{ i-1 }}
          </button>
        </div>
        
        <Tabs
          :themeColor="args.themeColor"
          :dataSource="args.dataSource"
          v-model:activeIndex="selectedIndex"
          :type="args.type"
          :prefix="args.prefix"
          :isDisabled="args.isDisabled"
          :className="args.className"
        ></Tabs>
      </div>`}),parameters:{docs:{description:{story:"示範如何使用 v-model 雙向綁定頁籤索引，並透過外部控制來切換頁籤。"},source:{code:`
<script setup>
import { ref } from 'vue';
import { Tabs } from "@ded-wds-vue/ui";

const dataSource = [
  {
    title: 'Tab 1',
    content: 'Content 1',
  },
  {
    title: 'Tab 2',
    content: 'Content 2',
  },
  {
    title: 'Tab 3',
    content: 'Content 3',
  },
];

const selectedIndex = ref(0);
<\/script>

<template>
  <div>
    <div style="margin-bottom: 15px;">
      <p>當前選中的索引: {{ selectedIndex }}</p>
      <button v-for="i in 3" :key="i" @click="selectedIndex = i-1">
        切換到 {{ i-1 }}
      </button>
    </div>
    
    <Tabs
      themeColor="primary"
      :dataSource="dataSource"
      v-model:activeIndex="selectedIndex"
      type="basic"
    ></Tabs>
  </div>
</template>
        `,language:"vue"}}}};var E,F,w;d.parameters={...d.parameters,docs:{...(E=d.parameters)==null?void 0:E.docs,source:{originalSource:`{
  name: '預設項目',
  args: {
    themeColor: 'primary',
    dataSource: [{
      title: 'Tab 1',
      content: 'Content 1'
    }, {
      title: 'Tab 2',
      content: 'Content 2'
    }, {
      title: 'Tab 3',
      content: 'Content 3'
    }],
    activeIndex: 0,
    type: 'basic',
    prefix: 'SvgArrowDown',
    isDisabled: false,
    className: ''
  },
  render: args => ({
    components: {
      Tabs
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <Tabs
        :themeColor="args.themeColor"
        :dataSource="args.dataSource"
        :activeIndex="args.activeIndex"
        :type="args.type"
        :prefix="args.prefix"
        :isDisabled="args.isDisabled"
        :className="args.className"
      ></Tabs>\`
  }),
  // 控制 controls 中能控制的參數
  parameters: {
    controls: {
      // include: ['themeColor', 'label', 'value', 'name' ],
    },
    docs: {
      source: {
        transform: (src, storyContext) => {
          const {
            args
          } = storyContext;
          const dataSourceString = formatDataSource(args.dataSource);
          return [\`<script setup>\`, \`import { Tabs } from "@ded-wds-vue/ui";\`, \`const dataSource = [\`, \`\${dataSourceString}\`, \`];\`, \`<\/script>\`, '', '<template>', '  <Tabs', \`    \${args.themeColor ? \`themeColor="\${args.themeColor}"\` : ''}\`, \`    :dataSource="dataSource"\`, \`    \${args.activeIndex !== undefined ? \`:activeIndex="\${args.activeIndex}"\` : ''}\`, \`    \${args.type ? \`type="\${args.type}"\` : ''}\`, \`    \${args.prefix ? \`prefix="\${args.prefix}"\` : ''}\`, \`    \${args.isDisabled !== undefined ? \`:isDisabled="\${args.isDisabled}"\` : ''}\`, \`    \${args.className ? \`className="\${args.className}"\` : ''}\`, '  ></Tabs>', '</template>'].filter(Boolean).join('\\n').trim();
        }
      }
    }
  }
}`,...(w=(F=d.parameters)==null?void 0:F.docs)==null?void 0:w.source}}};var k,A,_;l.parameters={...l.parameters,docs:{...(k=l.parameters)==null?void 0:k.docs,source:{originalSource:`{
  name: '頁籤類型',
  args: {
    themeColor: 'primary',
    dataSource: [{
      title: 'Tab 1',
      content: 'Content 1'
    }, {
      title: 'Tab 2',
      content: 'Content 2'
    }, {
      title: 'Tab 3',
      content: 'Content 3'
    }],
    activeIndex: 0,
    // type: "default",
    prefix: 'SvgArrowDown',
    isDisabled: false,
    className: ''
  },
  render: args => ({
    components: {
      Tabs
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <div style="display:flex; flex-direction: column; gap:24px">
        <Tabs
          :themeColor="args.themeColor"
          :dataSource="args.dataSource"
          :activeIndex="args.activeIndex"
          type="basic"
          :prefix="args.prefix"
          :isDisabled="args.isDisabled"
          :className="args.className"
        ></Tabs>
        <Tabs
          :themeColor="args.themeColor"
          :dataSource="args.dataSource"
          :activeIndex="args.activeIndex"
          type="outline"
          :prefix="args.prefix"
          :isDisabled="args.isDisabled"
          :className="args.className"
        ></Tabs>
        <Tabs
          :themeColor="args.themeColor"
          :dataSource="args.dataSource"
          :activeIndex="args.activeIndex"
          type="button"
          :prefix="args.prefix"
          :isDisabled="args.isDisabled"
          :className="args.className"
        ></Tabs>
      </div>\`
  }),
  // 控制 controls 中能控制的參數
  parameters: {
    controls: {
      // include: ['themeColor', 'label', 'value', 'name' ],
      exclude: ['type']
    },
    docs: {
      source: {
        transform: (src, storyContext) => {
          const {
            args
          } = storyContext;
          const dataSourceString = formatDataSource(args.dataSource);
          return [\`<script setup>\`, \`import { Tabs } from "@ded-wds-vue/ui";\`, \`const dataSource = [\`, \`\${dataSourceString}\`, \`];\`, \`<\/script>\`, '', '<template>', '  <Tabs', \`    \${args.themeColor ? \`themeColor="\${args.themeColor}"\` : ''}\`, \`    :dataSource="dataSource"\`, \`    \${args.activeIndex !== undefined ? \`:activeIndex="\${args.activeIndex}"\` : ''}\`, \`    type="basic"\`, \`    \${args.prefix ? \`prefix="\${args.prefix}"\` : ''}\`, \`    \${args.isDisabled !== undefined ? \`:isDisabled="\${args.isDisabled}"\` : ''}\`, \`    \${args.className ? \`className="\${args.className}"\` : ''}\`, '  ></Tabs>', '  <Tabs', \`    \${args.themeColor ? \`themeColor="\${args.themeColor}"\` : ''}\`, \`    :dataSource="dataSource"\`, \`    \${args.activeIndex !== undefined ? \`:activeIndex="\${args.activeIndex}"\` : ''}\`, \`    type="outline"\`, \`    \${args.prefix ? \`prefix="\${args.prefix}"\` : ''}\`, \`    \${args.isDisabled !== undefined ? \`:isDisabled="\${args.isDisabled}"\` : ''}\`, \`    \${args.className ? \`className="\${args.className}"\` : ''}\`, '  ></Tabs>', '  <Tabs', \`    \${args.themeColor ? \`themeColor="\${args.themeColor}"\` : ''}\`, \`    :dataSource="dataSource"\`, \`    \${args.activeIndex !== undefined ? \`:activeIndex="\${args.activeIndex}"\` : ''}\`, \`    type="button"\`, \`    \${args.prefix ? \`prefix="\${args.prefix}"\` : ''}\`, \`    \${args.isDisabled !== undefined ? \`:isDisabled="\${args.isDisabled}"\` : ''}\`, \`    \${args.className ? \`className="\${args.className}"\` : ''}\`, '  ></Tabs>', '</template>'].filter(Boolean).join('\\n').trim();
        }
      }
    }
  }
}`,...(_=(A=l.parameters)==null?void 0:A.docs)==null?void 0:_.source}}};var V,M,L;u.parameters={...u.parameters,docs:{...(V=u.parameters)==null?void 0:V.docs,source:{originalSource:'{\n  name: \'主題色彩\',\n  args: {\n    // themeColor: "primary",\n    dataSource: [{\n      title: \'Tab 1\',\n      content: \'Content 1\'\n    }, {\n      title: \'Tab 2\',\n      content: \'Content 2\'\n    }, {\n      title: \'Tab 3\',\n      content: \'Content 3\'\n    }],\n    activeIndex: 0,\n    type: \'button\',\n    prefix: \'SvgArrowDown\',\n    isDisabled: false,\n    className: \'\'\n  },\n  render: args => ({\n    components: {\n      Tabs\n    },\n    setup() {\n      return {\n        args\n      };\n    },\n    template: `\n      <div style="display:flex; flex-direction: column; gap:16px">\n        <Tabs\n          themeColor="primary"\n          :dataSource="args.dataSource"\n          :activeIndex="args.activeIndex"\n          :type="args.type"\n          :prefix="args.prefix"\n          :isDisabled="args.isDisabled"\n          :className="args.className"\n        ></Tabs>\n        <Tabs\n          themeColor="secondary"\n          :dataSource="args.dataSource"\n          :activeIndex="args.activeIndex"\n          :type="args.type"\n          :prefix="args.prefix"\n          :isDisabled="args.isDisabled"\n          :className="args.className"\n        ></Tabs>\n        <Tabs\n          themeColor="neutral"\n          :dataSource="args.dataSource"\n          :activeIndex="args.activeIndex"\n          :type="args.type"\n          :prefix="args.prefix"\n          :isDisabled="args.isDisabled"\n          :className="args.className"\n        ></Tabs>\n        <Tabs\n          themeColor="info"\n          :dataSource="args.dataSource"\n          :activeIndex="args.activeIndex"\n          :type="args.type"\n          :prefix="args.prefix"\n          :isDisabled="args.isDisabled"\n          :className="args.className"\n        ></Tabs>\n        <Tabs\n          themeColor="success"\n          :dataSource="args.dataSource"\n          :activeIndex="args.activeIndex"\n          :type="args.type"\n          :prefix="args.prefix"\n          :isDisabled="args.isDisabled"\n          :className="args.className"\n        ></Tabs>\n        <Tabs\n          themeColor="warning"\n          :dataSource="args.dataSource"\n          :activeIndex="args.activeIndex"\n          :type="args.type"\n          :prefix="args.prefix"\n          :isDisabled="args.isDisabled"\n          :className="args.className"\n        ></Tabs>\n        <Tabs\n          themeColor="error"\n          :dataSource="args.dataSource"\n          :activeIndex="args.activeIndex"\n          :type="args.type"\n          :prefix="args.prefix"\n          :isDisabled="args.isDisabled"\n          :className="args.className"\n        ></Tabs>\n      </div>`\n  }),\n  // 控制 controls 中能控制的參數\n  parameters: {\n    controls: {\n      // include: [\'themeColor\', \'label\', \'value\', \'name\' ],\n      exclude: [\'themeColor\']\n    },\n    docs: {\n      source: {\n        transform: (src, storyContext) => {\n          const {\n            args\n          } = storyContext;\n          const dataSourceString = formatDataSource(args.dataSource);\n          return [`<script setup>`, `import { Tabs } from "@ded-wds-vue/ui";`, `const dataSource = [`, `${dataSourceString}`, `];`, `<\/script>`, \'\', \'<template>\', \'  <Tabs\', `    themeColor="primary"`, `    :dataSource="dataSource"`, `    ${args.activeIndex !== undefined ? `:activeIndex="${args.activeIndex}"` : \'\'}`, `    ${args.type ? `type="${args.type}"` : \'\'}`, `    ${args.prefix ? `prefix="${args.prefix}"` : \'\'}`, `    ${args.isDisabled !== undefined ? `:isDisabled="${args.isDisabled}"` : \'\'}`, `    ${args.className ? `className="${args.className}"` : \'\'}`, \'  ></Tabs>\', \'  <Tabs\', `    themeColor="secondary"`, `    :dataSource="dataSource"`, `    ${args.activeIndex !== undefined ? `:activeIndex="${args.activeIndex}"` : \'\'}`, `    ${args.type ? `type="${args.type}"` : \'\'}`, `    ${args.prefix ? `prefix="${args.prefix}"` : \'\'}`, `    ${args.isDisabled !== undefined ? `:isDisabled="${args.isDisabled}"` : \'\'}`, `    ${args.className ? `className="${args.className}"` : \'\'}`, \'  ></Tabs>\', \'  <Tabs\', `    themeColor="neutral"`, `    :dataSource="dataSource"`, `    ${args.activeIndex !== undefined ? `:activeIndex="${args.activeIndex}"` : \'\'}`, `    ${args.type ? `type="${args.type}"` : \'\'}`, `    ${args.prefix ? `prefix="${args.prefix}"` : \'\'}`, `    ${args.isDisabled !== undefined ? `:isDisabled="${args.isDisabled}"` : \'\'}`, `    ${args.className ? `className="${args.className}"` : \'\'}`, \'  ></Tabs>\', \'  <Tabs\', `    themeColor="info"`, `    :dataSource="dataSource"`, `    ${args.activeIndex !== undefined ? `:activeIndex="${args.activeIndex}"` : \'\'}`, `    ${args.type ? `type="${args.type}"` : \'\'}`, `    ${args.prefix ? `prefix="${args.prefix}"` : \'\'}`, `    ${args.isDisabled !== undefined ? `:isDisabled="${args.isDisabled}"` : \'\'}`, `    ${args.className ? `className="${args.className}"` : \'\'}`, \'  ></Tabs>\', \'  <Tabs\', `    themeColor="success"`, `    :dataSource="dataSource"`, `    ${args.activeIndex !== undefined ? `:activeIndex="${args.activeIndex}"` : \'\'}`, `    ${args.type ? `type="${args.type}"` : \'\'}`, `    ${args.prefix ? `prefix="${args.prefix}"` : \'\'}`, `    ${args.isDisabled !== undefined ? `:isDisabled="${args.isDisabled}"` : \'\'}`, `    ${args.className ? `className="${args.className}"` : \'\'}`, \'  ></Tabs>\', \'  <Tabs\', `    themeColor="warning"`, `    :dataSource="dataSource"`, `    ${args.activeIndex !== undefined ? `:activeIndex="${args.activeIndex}"` : \'\'}`, `    ${args.type ? `type="${args.type}"` : \'\'}`, `    ${args.prefix ? `prefix="${args.prefix}"` : \'\'}`, `    ${args.isDisabled !== undefined ? `:isDisabled="${args.isDisabled}"` : \'\'}`, `    ${args.className ? `className="${args.className}"` : \'\'}`, \'  ></Tabs>\', \'  <Tabs\', `    themeColor="error"`, `    :dataSource="dataSource"`, `    ${args.activeIndex !== undefined ? `:activeIndex="${args.activeIndex}"` : \'\'}`, `    ${args.type ? `type="${args.type}"` : \'\'}`, `    ${args.prefix ? `prefix="${args.prefix}"` : \'\'}`, `    ${args.isDisabled !== undefined ? `:isDisabled="${args.isDisabled}"` : \'\'}`, `    ${args.className ? `className="${args.className}"` : \'\'}`, \'  ></Tabs>\', \'</template>\'].filter(Boolean).join(\'\\n\').trim();\n        }\n      }\n    }\n  }\n}',...(L=(M=u.parameters)==null?void 0:M.docs)==null?void 0:L.source}}};var H,j,z;p.parameters={...p.parameters,docs:{...(H=p.parameters)==null?void 0:H.docs,source:{originalSource:`{
  name: '不同內容類型',
  args: {
    themeColor: 'primary',
    dataSource: [{
      title: '無內容',
      content: ''
    }, {
      title: '純文字內容',
      content: '這是一個純文字內容的頁籤'
    }, {
      title: 'HTML內容',
      content: '<div class="ded-button-custom">帶有樣式的HTML內容</div>'
    }, {
      title: 'Button組件',
      content: '這裡會顯示Button組件'
    }],
    activeIndex: 0,
    type: 'basic',
    prefix: '',
    isDisabled: false,
    className: ''
  },
  render: args => ({
    components: {
      Tabs,
      Button
    },
    setup() {
      // 準備帶有動態組件的資料來源
      const enhancedDataSource = [args.dataSource[0], args.dataSource[1], {
        title: args.dataSource[2].title,
        // 使用 v-html 指令來渲染 HTML
        content: h('div', {
          innerHTML: args.dataSource[2].content
        })
      }, {
        title: args.dataSource[3].title,
        // 使用實際的 Button 組件
        content: h(Button, {
          themeColor: 'primary',
          variant: 'filled',
          size: 'medium',
          onClick: () => alert('Button clicked')
        }, 'Click me')
      }];
      return {
        args,
        enhancedDataSource
      };
    },
    template: \`
      <Tabs
        :themeColor="args.themeColor"
        :dataSource="enhancedDataSource"
        :activeIndex="args.activeIndex"
        :type="args.type"
        :prefix="args.prefix"
        :isDisabled="args.isDisabled"
        :className="args.className"
      ></Tabs>\`
  }),
  parameters: {
    docs: {
      description: {
        story: '示範如何在頁籤中使用不同類型的內容：純文字、HTML和Button組件。'
      },
      source: {
        code: \`
<script setup>
import { Tabs, Button } from "@ded-wds-vue/ui";
import { h } from 'vue';

// 帶有不同類型內容的資料來源
const dataSource = [
  {
    title: '純文字內容',
    content: '這是一個純文字內容的頁籤',
  },
  {
    title: 'HTML內容',
    content: h('div', { innerHTML: '<div class="ded-button-custom">帶有樣式的HTML內容</div>' }),
  },
  {
    title: 'Button組件',
    content: h(Button, {
      themeColor: 'success',
      variant: 'filled',
      size: 'medium',
      onClick: () => alert('Button clicked')
    }, 'Click me'),
  },
];
<\/script>

<template>
  <Tabs
    themeColor="primary"
    :dataSource="dataSource"
    :activeIndex="0"
    type="basic"
  ></Tabs>
</template>
        \`,
        language: 'vue'
      }
    }
  }
}`,...(z=(j=p.parameters)==null?void 0:j.docs)==null?void 0:z.source}}};var U,W,q;m.parameters={...m.parameters,docs:{...(U=m.parameters)==null?void 0:U.docs,source:{originalSource:`{
  name: '事件處理',
  args: {
    themeColor: 'primary',
    dataSource: [{
      title: 'Tab 1',
      content: 'Content 1'
    }, {
      title: 'Tab 2',
      content: 'Content 2'
    }, {
      title: 'Tab 3',
      content: 'Content 3'
    }],
    activeIndex: 0,
    type: 'basic',
    prefix: '',
    isDisabled: false,
    className: ''
  },
  render: args => ({
    components: {
      Tabs
    },
    setup() {
      const currentIndex = ref(args.activeIndex);
      function handleTabChange(index) {
        console.log('Tab changed to index:', index);
        currentIndex.value = index;
      }
      return {
        args,
        currentIndex,
        handleTabChange
      };
    },
    template: \`
      <div>
        <p style="font-size: 16px; margin-bottom: 10px;">當前選中的頁籤索引: <strong>{{ currentIndex }}</strong></p>
        <Tabs
          :themeColor="args.themeColor"
          :dataSource="args.dataSource"
          :activeIndex="currentIndex"
          @update:activeIndex="handleTabChange"
          :type="args.type"
          :prefix="args.prefix"
          :isDisabled="args.isDisabled"
          :className="args.className"
        ></Tabs>
      </div>\`
  }),
  parameters: {
    docs: {
      description: {
        story: '示範如何處理頁籤切換事件並獲取當前索引。'
      },
      source: {
        code: \`
<script setup>
import { ref } from 'vue';
import { Tabs } from "@ded-wds-vue/ui";

const dataSource = [
  {
    title: 'Tab 1',
    content: 'Content 1',
  },
  {
    title: 'Tab 2',
    content: 'Content 2',
  },
  {
    title: 'Tab 3',
    content: 'Content 3',
  },
];

const currentIndex = ref(0);

function handleTabChange(index) {
  console.log('Tab changed to index:', index);
  currentIndex.value = index;
}
<\/script>

<template>
  <p>當前選中的頁籤索引: {{ currentIndex }}</p>
  <Tabs
    themeColor="primary"
    :dataSource="dataSource"
    :activeIndex="currentIndex"
    @update:activeIndex="handleTabChange"
    type="basic"
  ></Tabs>
</template>
        \`,
        language: 'vue'
      }
    }
  }
}`,...(q=(W=m.parameters)==null?void 0:W.docs)==null?void 0:q.source}}};var O,G,J;b.parameters={...b.parameters,docs:{...(O=b.parameters)==null?void 0:O.docs,source:{originalSource:`{
  name: 'v-model 綁定',
  args: {
    themeColor: 'primary',
    dataSource: [{
      title: 'Tab 1',
      content: 'Content 1'
    }, {
      title: 'Tab 2',
      content: 'Content 2'
    }, {
      title: 'Tab 3',
      content: 'Content 3'
    }],
    type: 'basic',
    prefix: '',
    isDisabled: false,
    className: ''
  },
  render: args => ({
    components: {
      Tabs
    },
    setup() {
      const selectedIndex = ref(0);
      return {
        args,
        selectedIndex
      };
    },
    template: \`
      <div>
        <div style="margin-bottom: 15px; display: flex; gap: 10px; align-items: center;">
          <p style="font-size: 16px;">當前選中的索引: <strong>{{ selectedIndex }}</strong></p>
          <button 
            v-for="i in 3" 
            :key="i" 
            @click="selectedIndex = i-1"
            style="padding: 5px 10px; margin-right: 5px; cursor: pointer;"
            :style="selectedIndex === i-1 ? 'background-color: #4CAF50; color: white;' : ''"
          >
            切換到 {{ i-1 }}
          </button>
        </div>
        
        <Tabs
          :themeColor="args.themeColor"
          :dataSource="args.dataSource"
          v-model:activeIndex="selectedIndex"
          :type="args.type"
          :prefix="args.prefix"
          :isDisabled="args.isDisabled"
          :className="args.className"
        ></Tabs>
      </div>\`
  }),
  parameters: {
    docs: {
      description: {
        story: '示範如何使用 v-model 雙向綁定頁籤索引，並透過外部控制來切換頁籤。'
      },
      source: {
        code: \`
<script setup>
import { ref } from 'vue';
import { Tabs } from "@ded-wds-vue/ui";

const dataSource = [
  {
    title: 'Tab 1',
    content: 'Content 1',
  },
  {
    title: 'Tab 2',
    content: 'Content 2',
  },
  {
    title: 'Tab 3',
    content: 'Content 3',
  },
];

const selectedIndex = ref(0);
<\/script>

<template>
  <div>
    <div style="margin-bottom: 15px;">
      <p>當前選中的索引: {{ selectedIndex }}</p>
      <button v-for="i in 3" :key="i" @click="selectedIndex = i-1">
        切換到 {{ i-1 }}
      </button>
    </div>
    
    <Tabs
      themeColor="primary"
      :dataSource="dataSource"
      v-model:activeIndex="selectedIndex"
      type="basic"
    ></Tabs>
  </div>
</template>
        \`,
        language: 'vue'
      }
    }
  }
}`,...(J=(G=b.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};const de=["DefaultTabs","TabsTypesStory","TabsColorStory","ContentTypesStory","TabsEventStory","TabsVModelStory"];export{p as ContentTypesStory,d as DefaultTabs,u as TabsColorStory,m as TabsEventStory,l as TabsTypesStory,b as TabsVModelStory,de as __namedExportsOrder,ce as default};

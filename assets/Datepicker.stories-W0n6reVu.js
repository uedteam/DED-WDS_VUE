import{x as m,y as F,D as x,z as h,c as r,b as n,t as i,k as g,n as t,f as d,F as _,o as l}from"./vendor-M1HcLtCc.js";import{_ as p}from"./Icon-Ch-G9Uph.js";const A={class:"input-container"},C={key:0,ref:"dateRange"},T={style:{display:"flex",gap:"8px"}},V={style:{width:"100%"}},W={key:0,class:"input-label"},R=["placeholder"],B={style:{width:"100%"}},$={key:0,class:"input-label"},w=["placeholder"],N={key:0,class:"input-label"},M=["placeholder"],s={__name:"Datepicker",props:{label:{type:String,default:"請輸入日期"},placeholder:{type:String,default:"請輸入日期"},size:{type:String,default:"medium",validator:e=>["small","medium","large"].includes(e)},language:{type:String,default:"zh-TW",validator:e=>["en","zh-TW"].includes(e)},range:{type:Boolean,default:!1},rangeStartLabel:{type:String,default:"開始日期"},rangeStartPlaceholder:{type:String,default:"請輸入開始日期"},rangeEndLabel:{type:String,default:"結束日期"},rangeEndPlaceholder:{type:String,default:"請輸入結束日期"}},setup(e){const a=e,P=m("datepicker"),L=m("dateRange");return F(()=>{a.range?new x(L.value,{format:"yyyy/mm/dd",language:a.language}):new h(P.value,{format:"yyyy/mm/dd",language:a.language})}),function(){h.locales["zh-TW"]={days:["星期日","星期一","星期二","星期三","星期四","星期五","星期六"],daysShort:["日","一","二","三","四","五","六"],daysMin:["日","一","二","三","四","五","六"],months:["01","02","03","04","05","06","07","08","09","10","11","12"],monthsShort:["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月"],today:"Today",clear:"Clear",titleFormat:"y年MM月",format:"yyyy/mm/dd",weekStart:0}}(),(I,O)=>(l(),r("div",A,[e.range?(l(),r("div",C,[n("div",T,[n("div",V,[a.rangeStartLabel?(l(),r("label",W,i(a.rangeStartLabel),1)):g("",!0),n("div",{class:t(["input-group",`component-${e.size}`])},[d(p,{class:t(`icon-${e.size}`),name:"calendar"},null,8,["class"]),n("input",{type:"text",name:"start",placeholder:a.rangeStartPlaceholder},null,8,R)],2)]),n("div",B,[a.rangeEndLabel?(l(),r("label",$,i(a.rangeEndLabel),1)):g("",!0),n("div",{class:t(["input-group",`component-${e.size}`])},[d(p,{class:t(`icon-${e.size}`),name:"calendar"},null,8,["class"]),n("input",{type:"text",name:"end",placeholder:a.rangeEndPlaceholder},null,8,w)],2)])])],512)):(l(),r(_,{key:1},[a.label?(l(),r("label",N,i(a.label),1)):g("",!0),n("div",{class:t(["input-group",`component-${e.size}`])},[d(p,{class:t(`icon-${e.size}`),name:"calendar"},null,8,["class"]),n("input",{type:"text",ref:"datepicker",placeholder:a.placeholder},null,8,M)],2)],64))]))}};s.__docgenInfo={exportName:"default",displayName:"Datepicker",description:"",tags:{},props:[{name:"label",type:{name:"string"},defaultValue:{func:!1,value:'"請輸入日期"'}},{name:"placeholder",type:{name:"string"},defaultValue:{func:!1,value:'"請輸入日期"'}},{name:"size",type:{name:"string"},defaultValue:{func:!1,value:'"medium"'},values:["small","medium","large"]},{name:"language",type:{name:"string"},defaultValue:{func:!1,value:'"zh-TW"'},values:["en","zh-TW"]},{name:"range",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"rangeStartLabel",type:{name:"string"},defaultValue:{func:!1,value:'"開始日期"'}},{name:"rangeStartPlaceholder",type:{name:"string"},defaultValue:{func:!1,value:'"請輸入開始日期"'}},{name:"rangeEndLabel",type:{name:"string"},defaultValue:{func:!1,value:'"結束日期"'}},{name:"rangeEndPlaceholder",type:{name:"string"},defaultValue:{func:!1,value:'"請輸入結束日期"'}}],sourceFiles:["D:/98_測試/up/DED-WDS_VUE/libs/src/ui/element/Datepicker/Datepicker.vue"]};const q={title:"Design System/Datepicker",component:s,tags:["autodocs"],argTypes:{label:{description:"設定 Datepicker 的標題文字",control:{type:"text"}},placeholder:{description:"設定 Datepicker 的輸入提示文字，指引用戶輸入日期",control:{type:"text"}},size:{description:"選擇 Datepicker 的大小",control:{type:"select"},options:["small","medium","large"]},language:{description:"設定 Datepicker 月曆的語言 (需重整頁面)",control:{type:"select"},options:["en","zh-TW"]},range:{description:"啟用範圍選擇功能，允許選擇起始日期和結束日期",control:{type:"boolean"}},rangeStartLabel:{description:"範圍選擇的起始日期標題文字",control:{type:"text"}},rangeStartPlaceholder:{description:"範圍選擇的起始日期輸入提示文字",control:{type:"text"}},rangeEndLabel:{description:"範圍選擇的結束日期標題文字",control:{type:"text"}},rangeEndPlaceholder:{description:"範圍選擇的結束日期輸入提示文字",control:{type:"text"}}},parameters:{docs:{title:"Datepicker",description:{component:"Datepicker 組件的呈現及說明。"}}}},c={name:"Datepicker 單選樣式",args:{label:"預約剪髮日期",placeholder:"請輸入日期",size:"large",language:"zh-TW"},render:e=>({components:{Datepicker:s},setup(){return{args:e}},template:`
            <Datepicker
                :label="args.label"
                :placeholder="args.placeholder"
                :size="args.size"
                :language="args.language"
            ></Datepicker>
        `}),parameters:{controls:{exclude:["range","rangeStartLabel","rangeStartPlaceholder","rangeEndLabel","rangeEndPlaceholder"]}}},u={name:"Datepicker 範圍樣式",args:{rangeStartLabel:"入住日期",rangeStartPlaceholder:"請輸入入住時間",rangeEndLabel:"退房日期",rangeEndPlaceholder:"請輸入退房時間",size:"large",language:"zh-TW"},render:e=>({components:{Datepicker:s},setup(){return{args:e}},template:`
            <Datepicker
                :range="true"
                :rangeStartLabel="args.rangeStartLabel"
                :rangeStartPlaceholder="args.rangeStartPlaceholder"
                :rangeEndLabel="args.rangeEndLabel"
                :rangeEndPlaceholder="args.rangeEndPlaceholder"
                :size="args.size"
                :language="args.language"
            ></Datepicker>
        `}),parameters:{controls:{exclude:["label","placeholder"]}}},o={name:"Datepicker 日曆語言",args:{size:"large"},render:e=>({components:{Datepicker:s},setup(){return{args:e}},template:`
            <div style="display:flex; gap: 8px;">
                <Datepicker
                    label="Pickup Date(English)"
                    placeholder="Select Pickup Date"
                    :size="args.size"
                    language="en"
                ></Datepicker>

                <Datepicker
                    label="取貨時間(繁體中文)"
                    placeholder="選擇取貨日期"
                    :size="args.size"
                    language="zh-TW"
                ></Datepicker>
            </div>
        `}),parameters:{controls:{include:["size"]}}};var D,y,k;c.parameters={...c.parameters,docs:{...(D=c.parameters)==null?void 0:D.docs,source:{originalSource:`{
  name: "Datepicker 單選樣式",
  args: {
    label: "預約剪髮日期",
    placeholder: "請輸入日期",
    size: "large",
    language: "zh-TW"
  },
  render: args => ({
    components: {
      Datepicker
    },
    setup() {
      return {
        args
      };
    },
    template: \`
            <Datepicker
                :label="args.label"
                :placeholder="args.placeholder"
                :size="args.size"
                :language="args.language"
            ></Datepicker>
        \`
  }),
  // 控制 controls 中能控制的參數
  parameters: {
    controls: {
      exclude: ['range', 'rangeStartLabel', 'rangeStartPlaceholder', 'rangeEndLabel', 'rangeEndPlaceholder']
    }
  }
}`,...(k=(y=c.parameters)==null?void 0:y.docs)==null?void 0:k.source}}};var f,b,z;u.parameters={...u.parameters,docs:{...(f=u.parameters)==null?void 0:f.docs,source:{originalSource:`{
  name: "Datepicker 範圍樣式",
  args: {
    rangeStartLabel: '入住日期',
    rangeStartPlaceholder: '請輸入入住時間',
    rangeEndLabel: '退房日期',
    rangeEndPlaceholder: '請輸入退房時間',
    size: "large",
    language: "zh-TW"
  },
  render: args => ({
    components: {
      Datepicker
    },
    setup() {
      return {
        args
      };
    },
    template: \`
            <Datepicker
                :range="true"
                :rangeStartLabel="args.rangeStartLabel"
                :rangeStartPlaceholder="args.rangeStartPlaceholder"
                :rangeEndLabel="args.rangeEndLabel"
                :rangeEndPlaceholder="args.rangeEndPlaceholder"
                :size="args.size"
                :language="args.language"
            ></Datepicker>
        \`
  }),
  // 控制 controls 中能控制的參數
  parameters: {
    controls: {
      // include: ['themeColor', 'label', 'value', 'name' ],
      exclude: ['label', 'placeholder']
    }
  }
}`,...(z=(b=u.parameters)==null?void 0:b.docs)==null?void 0:z.source}}};var E,S,v;o.parameters={...o.parameters,docs:{...(E=o.parameters)==null?void 0:E.docs,source:{originalSource:`{
  name: "Datepicker 日曆語言",
  args: {
    size: "large"
  },
  render: args => ({
    components: {
      Datepicker
    },
    setup() {
      return {
        args
      };
    },
    template: \`
            <div style="display:flex; gap: 8px;">
                <Datepicker
                    label="Pickup Date(English)"
                    placeholder="Select Pickup Date"
                    :size="args.size"
                    language="en"
                ></Datepicker>

                <Datepicker
                    label="取貨時間(繁體中文)"
                    placeholder="選擇取貨日期"
                    :size="args.size"
                    language="zh-TW"
                ></Datepicker>
            </div>
        \`
  }),
  // 控制 controls 中能控制的參數
  parameters: {
    controls: {
      include: ['size']
    }
  }
}`,...(v=(S=o.parameters)==null?void 0:S.docs)==null?void 0:v.source}}};const G=["DatepickerSingle","DatepickerRange","DatepickerLanguage"];export{o as DatepickerLanguage,u as DatepickerRange,c as DatepickerSingle,G as __namedExportsOrder,q as default};

import{g as _,c as b,e as A,b as S,t as F,n as E,o as N}from"./vendor-M1HcLtCc.js";import{_ as a}from"./Icon-Ch-G9Uph.js";const $={class:"badge__container"},o={__name:"Badge",props:{isDot:{type:Boolean,default:!1},value:{type:[String,Number,null]},maxValue:{type:Number},withIcon:{type:Boolean,default:!1},position:{type:String,default:"default",validator:e=>["default","top-right"].includes(e)},themeColor:{type:String,default:"error",validator:e=>["primary","secondary","tertiary","success","warning","error","info"].includes(e)}},setup(e){const n=e,y=_(()=>{const t=typeof+n.value=="number"||!isNaN(+n.value);return console.log(t),t&&n.value>n.maxValue?`${n.maxValue}+`:n.value});return(t,z)=>(N(),b("span",$,[A(t.$slots,"default"),S("span",{class:E(["badge__content",{[`badge-color-${n.themeColor}`]:n.themeColor,"badge__content-isDot":n.isDot,[`badge__position-${n.position}`]:n.position,"badge__content-withIcon":n.withIcon}])},F(n.isDot?"":y.value),3)]))}};o.__docgenInfo={exportName:"default",displayName:"Badge",description:"",tags:{},props:[{name:"isDot",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"value",type:{name:"string|number|null"}},{name:"maxValue",type:{name:"number"}},{name:"withIcon",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"position",type:{name:"string"},defaultValue:{func:!1,value:"'default'"},values:["default","top-right"]},{name:"themeColor",type:{name:"string"},defaultValue:{func:!1,value:"'error'"},values:["primary","secondary","tertiary","success","warning","error","info"]}],slots:[{name:"default"}],sourceFiles:["D:/98_測試/up/DED-WDS_VUE/libs/src/ui/element/Badge/Badge.vue"]};const M={title:"Design System/Badge",component:o,components:{Icon:a},tags:["autodocs"],argTypes:{isDot:{description:"啟用點狀 Badge，無文字內容，僅顯示圓點",control:{type:"boolean"}},value:{description:"Badge 上顯示的文字內容，啟用點狀時無法作用",control:{type:"range",min:0,max:1e3,step:1}},maxValue:{description:"Badge 的最大顯示值，超過此值時，Badge 右側顯示加號（+），啟用點狀時無法作用",control:{type:"range",min:0,max:999,step:1}},withIcon:{description:"當啟用時，調整圖標接近 Badge 旁邊的顯示位置",control:{type:"boolean"}},position:{description:"選擇 Badge 的位置顯示方式",control:{type:"radio"},options:["default","top-right"]},themeColor:{description:"設定 Badge 主題顏色",control:{type:"select"},options:["primary","secondary","tertiary","success","warning","error","info"]}},parameters:{docs:{title:"Badge",description:{component:"Badge 組件的呈現及說明。"}},slots:{default:{description:"用於插入 Badge 內容，例如：圖標或文字",template:"{{ args.default }}"}}}},i={name:"Badge 基礎樣式",args:{isDot:!0,value:100,maxValue:99,withIcon:!0,position:"top-right",themeColor:"error"},render:e=>({components:{Badge:o,Icon:a},setup(){return{args:e}},template:`
            <div style="display:flex; gap:24px;">
                <Badge 
                    :isDot="args.isDot"
                    :value="args.value"
                    :maxValue="args.maxValue"
                    :withIcon="args.withIcon" 
                    :position="args.position" 
                    :themeColor="args.themeColor"
                >
                    <Icon name="notification" size="26"></Icon>
                </Badge>
            </div>
        `}),parameters:{controls:{}}},s={name:"Badge 類型選擇",args:{value:999,maxValue:99,withIcon:!0,position:"top-right",themeColor:"error"},render:e=>({components:{Badge:o,Icon:a},setup(){return{args:e}},template:`
            <div style="display:flex; gap:24px;">
                <Badge
                    :isDot="true"
                    :value="args.value"
                    :maxValue="args.maxValue"
                    :withIcon="args.withIcon"
                    :position="args.position"
                    :themeColor="args.themeColor"
                >
                    <Icon name="notification" size="26"></Icon>
                </Badge>
                <Badge
                    :isDot="false"
                    :value="args.value"
                    :maxValue="args.maxValue"
                    :withIcon="args.withIcon"
                    :position="args.position"
                    :themeColor="args.themeColor"
                >
                    <Icon name="notification" size="26"></Icon>
                </Badge>
            </div>
        `}),parameters:{controls:{exclude:["isDot"]}}},r={name:"Badge 顯示位置",args:{value:100,maxValue:99,withIcon:!0,themeColor:"error"},render:e=>({components:{Badge:o,Icon:a},setup(){return{args:e}},template:`
            <div style="display:flex; gap:60px; margin-bottom: 24px;">
                <Badge 
                    :isDot="true"
                    :withIcon="args.withIcon" 
                    position="top-right"
                    :themeColor="args.themeColor"
                >
                    <Icon name="notification" size="26"></Icon>
                </Badge>
                <Badge
                    :isDot="false"
                    :value="args.value"
                    :maxValue="args.maxValue"
                    :withIcon="args.withIcon"
                    position="top-right"
                    :themeColor="args.themeColor"
                >
                    <Icon name="notification" size="26"></Icon>
                </Badge>
            </div>
            <div style="display:flex; gap:24px">
                <Badge
                    :isDot="true"
                    :withIcon="args.withIcon"
                    position="default"
                    :themeColor="args.themeColor"
                >
                    <p>value</p>
                </Badge>
                <Badge
                    :isDot="false"
                    :value="args.value"
                    :maxValue="args.maxValue"
                    :withIcon="args.withIcon"
                    position="default"
                    :themeColor="args.themeColor"
                >
                    <p>value</p>
                </Badge>
                
            </div>
        `}),parameters:{controls:{include:["value","maxValue","withIcon","themeColor"]}}},l={name:"Badge 最大值設定",args:{isDot:!1,value:100,maxValue:99,withIcon:!0,position:"top-right",themeColor:"error"},render:e=>({components:{Badge:o,Icon:a},setup(){return{args:e}},template:`
            <div style="display:flex; gap:60px; margin-bottom: 24px;">
                <Badge
                    :isDot="args.isDot"
                    :value="args.value"
                    :withIcon="args.withIcon"
                    :position="args.position"
                    :themeColor="args.themeColor"
                >
                    <Icon name="notification" size="26"></Icon>
                </Badge>
                <Badge
                    :isDot="args.isDot"
                    :value="args.value"
                    :maxValue="args.maxValue"
                    :withIcon="args.withIcon"
                    :position="args.position"
                    :themeColor="args.themeColor"
                >
                    <Icon name="notification" size="26"></Icon>
                </Badge>
            </div>
        `}),parameters:{controls:{}}},c={name:"Badge 顏色設定",args:{isDot:!1,value:100,maxValue:99,withIcon:!0,position:"top-right"},render:e=>({components:{Badge:o,Icon:a},setup(){return{args:e}},template:`
            <div style="display:flex; gap:56px; margin-bottom: 24px;">
                <Badge
                    :isDot="true"
                    :withIcon="args.withIcon"
                    :position="args.position"
                    themeColor="primary"
                >
                    <Icon name="notification" size="26"></Icon>
                </Badge>
                <Badge
                    :isDot="true"
                    :withIcon="args.withIcon"
                    :position="args.position"
                    themeColor="secondary"
                >
                    <Icon name="notification" size="26"></Icon>
                </Badge>
                <Badge
                    :isDot="true"
                    :withIcon="args.withIcon"
                    :position="args.position"
                    themeColor="tertiary"
                >
                    <Icon name="notification" size="26"></Icon>
                </Badge>
                <Badge
                    :isDot="true"
                    :withIcon="args.withIcon"
                    :position="args.position"
                    themeColor="success"
                >
                    <Icon name="notification" size="26"></Icon>
                </Badge>
                <Badge
                    :isDot="true"
                    :withIcon="args.withIcon"
                    :position="args.position"
                    themeColor="warning"
                >
                    <Icon name="notification" size="26"></Icon>
                </Badge>
                <Badge
                    :isDot="true"
                    :withIcon="args.withIcon"
                    :position="args.position"
                    themeColor="error"
                >
                    <Icon name="notification" size="26"></Icon>
                </Badge>
                <Badge
                    :isDot="true"
                    :withIcon="args.withIcon"
                    :position="args.position"
                    themeColor="info"
                >
                    <Icon name="notification" size="26"></Icon>
                </Badge>
            </div>
            <div style="display:flex; gap:56px">
                <Badge
                    :isDot="false"
                    :value="args.value"
                    :maxValue="args.maxValue"
                    :withIcon="args.withIcon"
                    :position="args.position"
                    themeColor="primary"
                >
                    <Icon name="notification" size="26"></Icon>
                </Badge>
                <Badge
                    :isDot="false"
                    :value="args.value"
                    :maxValue="args.maxValue"
                    :withIcon="args.withIcon"
                    :position="args.position"
                    themeColor="secondary"
                >
                    <Icon name="notification" size="26"></Icon>
                </Badge>
                <Badge
                    :isDot="false"
                    :value="args.value"
                    :maxValue="args.maxValue"
                    :withIcon="args.withIcon"
                    :position="args.position"
                    themeColor="tertiary"
                >
                    <Icon name="notification" size="26"></Icon>
                </Badge>
                <Badge
                    :isDot="false"
                    :value="args.value"
                    :maxValue="args.maxValue"
                    :withIcon="args.withIcon"
                    :position="args.position"
                    themeColor="success"
                >
                    <Icon name="notification" size="26"></Icon>
                </Badge>
                <Badge
                    :isDot="false"
                    :value="args.value"
                    :maxValue="args.maxValue"
                    :withIcon="args.withIcon"
                    :position="args.position"
                    themeColor="warning"
                >
                    <Icon name="notification" size="26"></Icon>
                </Badge>
                <Badge
                    :isDot="false"
                    :value="args.value"
                    :maxValue="args.maxValue"
                    :withIcon="args.withIcon"
                    :position="args.position"
                    themeColor="error"
                >
                    <Icon name="notification" size="26"></Icon>
                </Badge>
                <Badge
                    :isDot="false"
                    :value="args.value"
                    :maxValue="args.maxValue"
                    :withIcon="args.withIcon"
                    :position="args.position"
                    themeColor="info"
                >
                    <Icon name="notification" size="26"></Icon>
                </Badge>
                
            </div>
        `}),parameters:{controls:{exclude:["isDot","themeColor"]}}};var g,u,m;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`{
  name: "Badge 基礎樣式",
  args: {
    isDot: true,
    value: 100,
    maxValue: 99,
    withIcon: true,
    position: "top-right",
    themeColor: "error"
  },
  render: args => ({
    components: {
      Badge,
      Icon
    },
    setup() {
      return {
        args
      };
    },
    template: \`
            <div style="display:flex; gap:24px;">
                <Badge 
                    :isDot="args.isDot"
                    :value="args.value"
                    :maxValue="args.maxValue"
                    :withIcon="args.withIcon" 
                    :position="args.position" 
                    :themeColor="args.themeColor"
                >
                    <Icon name="notification" size="26"></Icon>
                </Badge>
            </div>
        \`
  }),
  // 控制 controls 中能控制的參數
  parameters: {
    controls: {
      // include: ['themeColor', 'value', 'value', 'name' ],
    }
  }
}`,...(m=(u=i.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};var p,d,h;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: "Badge 類型選擇",
  args: {
    // isDot: true,
    value: 999,
    maxValue: 99,
    withIcon: true,
    position: "top-right",
    themeColor: "error"
  },
  render: args => ({
    components: {
      Badge,
      Icon
    },
    setup() {
      return {
        args
      };
    },
    template: \`
            <div style="display:flex; gap:24px;">
                <Badge
                    :isDot="true"
                    :value="args.value"
                    :maxValue="args.maxValue"
                    :withIcon="args.withIcon"
                    :position="args.position"
                    :themeColor="args.themeColor"
                >
                    <Icon name="notification" size="26"></Icon>
                </Badge>
                <Badge
                    :isDot="false"
                    :value="args.value"
                    :maxValue="args.maxValue"
                    :withIcon="args.withIcon"
                    :position="args.position"
                    :themeColor="args.themeColor"
                >
                    <Icon name="notification" size="26"></Icon>
                </Badge>
            </div>
        \`
  }),
  // 控制 controls 中能控制的參數
  parameters: {
    controls: {
      // include: ['themeColor', 'value', 'value', 'name' ],
      exclude: ['isDot']
    }
  }
}`,...(h=(d=s.parameters)==null?void 0:d.docs)==null?void 0:h.source}}};var I,B,f;r.parameters={...r.parameters,docs:{...(I=r.parameters)==null?void 0:I.docs,source:{originalSource:`{
  name: "Badge 顯示位置",
  args: {
    value: 100,
    maxValue: 99,
    withIcon: true,
    themeColor: "error"
  },
  render: args => ({
    components: {
      Badge,
      Icon
    },
    setup() {
      return {
        args
      };
    },
    template: \`
            <div style="display:flex; gap:60px; margin-bottom: 24px;">
                <Badge 
                    :isDot="true"
                    :withIcon="args.withIcon" 
                    position="top-right"
                    :themeColor="args.themeColor"
                >
                    <Icon name="notification" size="26"></Icon>
                </Badge>
                <Badge
                    :isDot="false"
                    :value="args.value"
                    :maxValue="args.maxValue"
                    :withIcon="args.withIcon"
                    position="top-right"
                    :themeColor="args.themeColor"
                >
                    <Icon name="notification" size="26"></Icon>
                </Badge>
            </div>
            <div style="display:flex; gap:24px">
                <Badge
                    :isDot="true"
                    :withIcon="args.withIcon"
                    position="default"
                    :themeColor="args.themeColor"
                >
                    <p>value</p>
                </Badge>
                <Badge
                    :isDot="false"
                    :value="args.value"
                    :maxValue="args.maxValue"
                    :withIcon="args.withIcon"
                    position="default"
                    :themeColor="args.themeColor"
                >
                    <p>value</p>
                </Badge>
                
            </div>
        \`
  }),
  // 控制 controls 中能控制的參數
  parameters: {
    controls: {
      include: ['value', 'maxValue', 'withIcon', 'themeColor']
    }
  }
}`,...(f=(B=r.parameters)==null?void 0:B.docs)==null?void 0:f.source}}};var v,w,x;l.parameters={...l.parameters,docs:{...(v=l.parameters)==null?void 0:v.docs,source:{originalSource:`{
  name: "Badge 最大值設定",
  args: {
    isDot: false,
    value: 100,
    maxValue: 99,
    withIcon: true,
    position: "top-right",
    themeColor: "error"
  },
  render: args => ({
    components: {
      Badge,
      Icon
    },
    setup() {
      return {
        args
      };
    },
    template: \`
            <div style="display:flex; gap:60px; margin-bottom: 24px;">
                <Badge
                    :isDot="args.isDot"
                    :value="args.value"
                    :withIcon="args.withIcon"
                    :position="args.position"
                    :themeColor="args.themeColor"
                >
                    <Icon name="notification" size="26"></Icon>
                </Badge>
                <Badge
                    :isDot="args.isDot"
                    :value="args.value"
                    :maxValue="args.maxValue"
                    :withIcon="args.withIcon"
                    :position="args.position"
                    :themeColor="args.themeColor"
                >
                    <Icon name="notification" size="26"></Icon>
                </Badge>
            </div>
        \`
  }),
  // 控制 controls 中能控制的參數
  parameters: {
    controls: {
      // include: ['themeColor', 'value', 'value', 'name' ],
    }
  }
}`,...(x=(w=l.parameters)==null?void 0:w.docs)==null?void 0:x.source}}};var C,D,V;c.parameters={...c.parameters,docs:{...(C=c.parameters)==null?void 0:C.docs,source:{originalSource:`{
  name: "Badge 顏色設定",
  args: {
    isDot: false,
    value: 100,
    maxValue: 99,
    withIcon: true,
    position: "top-right"
    // themeColor: "error",
  },
  render: args => ({
    components: {
      Badge,
      Icon
    },
    setup() {
      return {
        args
      };
    },
    template: \`
            <div style="display:flex; gap:56px; margin-bottom: 24px;">
                <Badge
                    :isDot="true"
                    :withIcon="args.withIcon"
                    :position="args.position"
                    themeColor="primary"
                >
                    <Icon name="notification" size="26"></Icon>
                </Badge>
                <Badge
                    :isDot="true"
                    :withIcon="args.withIcon"
                    :position="args.position"
                    themeColor="secondary"
                >
                    <Icon name="notification" size="26"></Icon>
                </Badge>
                <Badge
                    :isDot="true"
                    :withIcon="args.withIcon"
                    :position="args.position"
                    themeColor="tertiary"
                >
                    <Icon name="notification" size="26"></Icon>
                </Badge>
                <Badge
                    :isDot="true"
                    :withIcon="args.withIcon"
                    :position="args.position"
                    themeColor="success"
                >
                    <Icon name="notification" size="26"></Icon>
                </Badge>
                <Badge
                    :isDot="true"
                    :withIcon="args.withIcon"
                    :position="args.position"
                    themeColor="warning"
                >
                    <Icon name="notification" size="26"></Icon>
                </Badge>
                <Badge
                    :isDot="true"
                    :withIcon="args.withIcon"
                    :position="args.position"
                    themeColor="error"
                >
                    <Icon name="notification" size="26"></Icon>
                </Badge>
                <Badge
                    :isDot="true"
                    :withIcon="args.withIcon"
                    :position="args.position"
                    themeColor="info"
                >
                    <Icon name="notification" size="26"></Icon>
                </Badge>
            </div>
            <div style="display:flex; gap:56px">
                <Badge
                    :isDot="false"
                    :value="args.value"
                    :maxValue="args.maxValue"
                    :withIcon="args.withIcon"
                    :position="args.position"
                    themeColor="primary"
                >
                    <Icon name="notification" size="26"></Icon>
                </Badge>
                <Badge
                    :isDot="false"
                    :value="args.value"
                    :maxValue="args.maxValue"
                    :withIcon="args.withIcon"
                    :position="args.position"
                    themeColor="secondary"
                >
                    <Icon name="notification" size="26"></Icon>
                </Badge>
                <Badge
                    :isDot="false"
                    :value="args.value"
                    :maxValue="args.maxValue"
                    :withIcon="args.withIcon"
                    :position="args.position"
                    themeColor="tertiary"
                >
                    <Icon name="notification" size="26"></Icon>
                </Badge>
                <Badge
                    :isDot="false"
                    :value="args.value"
                    :maxValue="args.maxValue"
                    :withIcon="args.withIcon"
                    :position="args.position"
                    themeColor="success"
                >
                    <Icon name="notification" size="26"></Icon>
                </Badge>
                <Badge
                    :isDot="false"
                    :value="args.value"
                    :maxValue="args.maxValue"
                    :withIcon="args.withIcon"
                    :position="args.position"
                    themeColor="warning"
                >
                    <Icon name="notification" size="26"></Icon>
                </Badge>
                <Badge
                    :isDot="false"
                    :value="args.value"
                    :maxValue="args.maxValue"
                    :withIcon="args.withIcon"
                    :position="args.position"
                    themeColor="error"
                >
                    <Icon name="notification" size="26"></Icon>
                </Badge>
                <Badge
                    :isDot="false"
                    :value="args.value"
                    :maxValue="args.maxValue"
                    :withIcon="args.withIcon"
                    :position="args.position"
                    themeColor="info"
                >
                    <Icon name="notification" size="26"></Icon>
                </Badge>
                
            </div>
        \`
  }),
  // 控制 controls 中能控制的參數
  parameters: {
    controls: {
      // include: ['themeColor', 'value', 'value', 'name' ],
      exclude: ['isDot', 'themeColor']
    }
  }
}`,...(V=(D=c.parameters)==null?void 0:D.docs)==null?void 0:V.source}}};const P=["BadgeDefault","BadgeStyle","BadgePosition","BadgeMaxValue","BadgeThemeColor"];export{i as BadgeDefault,l as BadgeMaxValue,r as BadgePosition,s as BadgeStyle,c as BadgeThemeColor,P as __namedExportsOrder,M as default};

import{c as x,a as C,r as z,b as v,t as _,n as V,o as F}from"./vue.esm-bundler-CsTC-5Ev.js";import{_ as a}from"./Icon-Pq8-XFtv.js";import"./iframe-D3-rZU4J.js";import"../sb-preview/runtime.js";const S={class:"badge__container"},e={__name:"Badge",props:{themeColor:{type:String,default:"error",validator:n=>["primary","secondary","tertiary","success","warning","error","info"].includes(n)},badgeLabel:{type:[String,Number,null]},maxValue:{type:Number},isDot:{type:Boolean,default:!1},isIcon:{type:Boolean,default:!1},position:{type:String,default:"default",validator:n=>["default","top-right"].includes(n)}},setup(n){const o=n,L=x(()=>{const i=typeof+o.badgeLabel=="number"||!isNaN(+o.badgeLabel);return console.log(i),i&&o.badgeLabel>o.maxValue?`${o.maxValue}+`:o.badgeLabel});return(i,h)=>(F(),C("span",S,[z(i.$slots,"default"),v("span",{class:V(["badge__content",{[`badge-color-${o.themeColor}`]:o.themeColor,"badge__content-isDot":o.isDot,[`badge__position-${o.position}`]:o.position,"badge__content-isIcon":o.isIcon}])},_(o.isDot?"":L.value),3)]))}};e.__docgenInfo={exportName:"default",displayName:"Badge",description:"",tags:{},props:[{name:"themeColor",type:{name:"string"},defaultValue:{func:!1,value:"'error'"},values:["primary","secondary","tertiary","success","warning","error","info"]},{name:"badgeLabel",type:{name:"string|number|null"}},{name:"maxValue",type:{name:"number"}},{name:"isDot",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"isIcon",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"position",type:{name:"string"},defaultValue:{func:!1,value:"'default'"},values:["default","top-right"]}],slots:[{name:"default"}],sourceFiles:["/Users/auouser/Desktop/Work_Space/DED-WDS_VUE/libs/src/ui/element/Badge/Badge.vue"]};const $={title:"Design System/Badge",component:e,components:{Icon:a},tags:["autodocs"],argTypes:{themeColor:{description:"徽章主題顏色",control:{type:"select"},options:["primary","secondary","tertiary","success","warning","error","info"]},badgeLabel:{description:"顯示在徽章上的文字內容",control:{type:"text"}},maxValue:{description:"徽章的最大顯示值，超過該值時將顯示加號（+）",control:{type:"number"}},isDot:{description:"啟用點狀顯示，無文字內容的徽章",control:{type:"boolean"}},isIcon:{description:"設定徽章與Icon的顯示位置",control:{type:"boolean"}},position:{description:"指定徽章的位置",control:{type:"radio"},options:["default","top-right"]}},parameters:{docs:{title:"Badge",description:{component:"徽章組件的呈現及說明。"}}}},s={name:"徽章樣式",args:{position:"top-right",isIcon:!0,isDot:!0},render:n=>({components:{Badge:e,Icon:a},setup(){return{args:n}},template:`
            <div style="display:flex; gap:24px;">
                <Badge :position="args.position" :isIcon="args.isIcon" :isDot="args.isDot">
                    <Icon name="notification" size="26"></Icon>
                </Badge>
                <Badge badgeLabel="99" :position="args.position" :isIcon="args.isIcon">
                    <Icon name="notification" size="26"></Icon>
                </Badge>
            </div>
        `}),parameters:{controls:{}}},t={name:"徽章位置",args:{position:"top-right",isIcon:!0,isDot:!0},render:n=>({components:{Badge:e,Icon:a},setup(){return{args:n}},template:`
            <div style="display:flex; gap:60px; margin-bottom: 24px;">
                <Badge :position="args.position" :isIcon="args.isIcon" :isDot="args.isDot">
                    <Icon name="notification" size="26"></Icon>
                </Badge>
                <Badge badgeLabel="9" :position="args.position" :isIcon="args.isIcon">
                    <Icon name="notification" size="26"></Icon>
                </Badge>
                <Badge badgeLabel="99" :position="args.position" :isIcon="args.isIcon">
                    <Icon name="notification" size="26"></Icon>
                </Badge>
                <Badge badgeLabel="999" :position="args.position" :isIcon="args.isIcon">
                    <Icon name="notification" size="26"></Icon>
                </Badge>
            </div>

            <div style="display:flex; gap:24px">
                <Badge :isDot="args.isDot">
                    <p>Label</p>
                </Badge>
                <Badge badgeLabel="9">
                    <p>Label</p>
                </Badge>
                <Badge badgeLabel="99">
                    <p>Label</p>
                </Badge>
                <Badge badgeLabel="999">
                    <p>Label</p>
                </Badge>
            </div>
        `}),parameters:{controls:{}}},r={name:"徽章最大值",args:{position:"top-right",badgeLabel:1e3,maxValue:96,isIcon:!0,isDot:!0},render:n=>({components:{Badge:e,Icon:a},setup(){return{args:n}},template:`
            <div style="display:flex; gap:60px; margin-bottom: 24px;">
                <Badge :badgeLabel="args.badgeLabel"  :position="args.position" :isIcon="args.isIcon">
                    <Icon name="notification" size="26"></Icon>
                </Badge>
                <Badge :badgeLabel="args.badgeLabel" :maxValue="args.maxValue" :position="args.position" :isIcon="args.isIcon">
                    <Icon name="notification" size="26"></Icon>
                </Badge>
            </div>
        `}),parameters:{controls:{}}},c={name:"徽章顏色",args:{position:"top-right",badgeLabel:1e3,maxValue:99,isIcon:!0,isDot:!0,themeColor:"primary"},render:n=>({components:{Badge:e,Icon:a},setup(){return{args:n}},template:`
            <div style="display:flex; gap:56px; margin-bottom: 24px;">
                <Badge themeColor="primary" :position="args.position" :isIcon="args.isIcon" :isDot="args.isDot">
                    <Icon name="notification" size="26"></Icon>
                </Badge>
                <Badge themeColor="secondary" :position="args.position" :isIcon="args.isIcon" :isDot="args.isDot">
                    <Icon name="notification" size="26"></Icon>
                </Badge>
                <Badge themeColor="tertiary" :position="args.position" :isIcon="args.isIcon" :isDot="args.isDot">
                    <Icon name="notification" size="26"></Icon>
                </Badge>
                <Badge themeColor="success" :position="args.position" :isIcon="args.isIcon" :isDot="args.isDot">
                    <Icon name="notification" size="26"></Icon>
                </Badge>
                <Badge themeColor="warning" :position="args.position" :isIcon="args.isIcon" :isDot="args.isDot">
                    <Icon name="notification" size="26"></Icon>
                </Badge>
                <Badge themeColor="error" :position="args.position" :isIcon="args.isIcon" :isDot="args.isDot">
                    <Icon name="notification" size="26"></Icon>
                </Badge>
                <Badge themeColor="info" :position="args.position" :isIcon="args.isIcon" :isDot="args.isDot">
                    <Icon name="notification" size="26"></Icon>
                </Badge>
            </div>
            <div style="display:flex; gap:56px">
                <Badge themeColor="primary"  badgeLabel="999" :position="args.position" :isIcon="args.isIcon">
                    <Icon name="notification" size="26"></Icon>
                </Badge>
                <Badge themeColor="secondary"  badgeLabel="999" :position="args.position" :isIcon="args.isIcon">
                    <Icon name="notification" size="26"></Icon>
                </Badge>
                <Badge themeColor="tertiary"  badgeLabel="999" :position="args.position" :isIcon="args.isIcon">
                    <Icon name="notification" size="26"></Icon>
                </Badge>
                <Badge themeColor="success"  badgeLabel="999" :position="args.position" :isIcon="args.isIcon">
                    <Icon name="notification" size="26"></Icon>
                </Badge>
                <Badge themeColor="warning"  badgeLabel="999" :position="args.position" :isIcon="args.isIcon">
                    <Icon name="notification" size="26"></Icon>
                </Badge>
                <Badge themeColor="error"  badgeLabel="999" :position="args.position" :isIcon="args.isIcon">
                    <Icon name="notification" size="26"></Icon>
                </Badge>
                <Badge themeColor="info"  badgeLabel="999" :position="args.position" :isIcon="args.isIcon">
                    <Icon name="notification" size="26"></Icon>
                </Badge>
            </div>
        `}),parameters:{controls:{}}};var g,d,p;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  name: "徽章樣式",
  args: {
    position: "top-right",
    isIcon: true,
    isDot: true
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
                <Badge :position="args.position" :isIcon="args.isIcon" :isDot="args.isDot">
                    <Icon name="notification" size="26"></Icon>
                </Badge>
                <Badge badgeLabel="99" :position="args.position" :isIcon="args.isIcon">
                    <Icon name="notification" size="26"></Icon>
                </Badge>
            </div>
        \`
  }),
  // 控制 controls 中能控制的參數
  parameters: {
    controls: {
      // include: ['themeColor', 'label', 'value', 'name' ],
    }
  }
}`,...(p=(d=s.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};var l,m,I;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  name: "徽章位置",
  args: {
    position: "top-right",
    isIcon: true,
    isDot: true
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
                <Badge :position="args.position" :isIcon="args.isIcon" :isDot="args.isDot">
                    <Icon name="notification" size="26"></Icon>
                </Badge>
                <Badge badgeLabel="9" :position="args.position" :isIcon="args.isIcon">
                    <Icon name="notification" size="26"></Icon>
                </Badge>
                <Badge badgeLabel="99" :position="args.position" :isIcon="args.isIcon">
                    <Icon name="notification" size="26"></Icon>
                </Badge>
                <Badge badgeLabel="999" :position="args.position" :isIcon="args.isIcon">
                    <Icon name="notification" size="26"></Icon>
                </Badge>
            </div>

            <div style="display:flex; gap:24px">
                <Badge :isDot="args.isDot">
                    <p>Label</p>
                </Badge>
                <Badge badgeLabel="9">
                    <p>Label</p>
                </Badge>
                <Badge badgeLabel="99">
                    <p>Label</p>
                </Badge>
                <Badge badgeLabel="999">
                    <p>Label</p>
                </Badge>
            </div>
        \`
  }),
  // 控制 controls 中能控制的參數
  parameters: {
    controls: {
      // include: ['themeColor', 'label', 'value', 'name' ],
    }
  }
}`,...(I=(m=t.parameters)==null?void 0:m.docs)==null?void 0:I.source}}};var u,B,b;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  name: "徽章最大值",
  args: {
    position: "top-right",
    badgeLabel: 1000,
    maxValue: 96,
    isIcon: true,
    isDot: true
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
                <Badge :badgeLabel="args.badgeLabel"  :position="args.position" :isIcon="args.isIcon">
                    <Icon name="notification" size="26"></Icon>
                </Badge>
                <Badge :badgeLabel="args.badgeLabel" :maxValue="args.maxValue" :position="args.position" :isIcon="args.isIcon">
                    <Icon name="notification" size="26"></Icon>
                </Badge>
            </div>
        \`
  }),
  // 控制 controls 中能控制的參數
  parameters: {
    controls: {
      // include: ['themeColor', 'label', 'value', 'name' ],
    }
  }
}`,...(b=(B=r.parameters)==null?void 0:B.docs)==null?void 0:b.source}}};var f,D,y;c.parameters={...c.parameters,docs:{...(f=c.parameters)==null?void 0:f.docs,source:{originalSource:`{
  name: "徽章顏色",
  args: {
    position: "top-right",
    badgeLabel: 1000,
    maxValue: 99,
    isIcon: true,
    isDot: true,
    themeColor: "primary"
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
                <Badge themeColor="primary" :position="args.position" :isIcon="args.isIcon" :isDot="args.isDot">
                    <Icon name="notification" size="26"></Icon>
                </Badge>
                <Badge themeColor="secondary" :position="args.position" :isIcon="args.isIcon" :isDot="args.isDot">
                    <Icon name="notification" size="26"></Icon>
                </Badge>
                <Badge themeColor="tertiary" :position="args.position" :isIcon="args.isIcon" :isDot="args.isDot">
                    <Icon name="notification" size="26"></Icon>
                </Badge>
                <Badge themeColor="success" :position="args.position" :isIcon="args.isIcon" :isDot="args.isDot">
                    <Icon name="notification" size="26"></Icon>
                </Badge>
                <Badge themeColor="warning" :position="args.position" :isIcon="args.isIcon" :isDot="args.isDot">
                    <Icon name="notification" size="26"></Icon>
                </Badge>
                <Badge themeColor="error" :position="args.position" :isIcon="args.isIcon" :isDot="args.isDot">
                    <Icon name="notification" size="26"></Icon>
                </Badge>
                <Badge themeColor="info" :position="args.position" :isIcon="args.isIcon" :isDot="args.isDot">
                    <Icon name="notification" size="26"></Icon>
                </Badge>
            </div>
            <div style="display:flex; gap:56px">
                <Badge themeColor="primary"  badgeLabel="999" :position="args.position" :isIcon="args.isIcon">
                    <Icon name="notification" size="26"></Icon>
                </Badge>
                <Badge themeColor="secondary"  badgeLabel="999" :position="args.position" :isIcon="args.isIcon">
                    <Icon name="notification" size="26"></Icon>
                </Badge>
                <Badge themeColor="tertiary"  badgeLabel="999" :position="args.position" :isIcon="args.isIcon">
                    <Icon name="notification" size="26"></Icon>
                </Badge>
                <Badge themeColor="success"  badgeLabel="999" :position="args.position" :isIcon="args.isIcon">
                    <Icon name="notification" size="26"></Icon>
                </Badge>
                <Badge themeColor="warning"  badgeLabel="999" :position="args.position" :isIcon="args.isIcon">
                    <Icon name="notification" size="26"></Icon>
                </Badge>
                <Badge themeColor="error"  badgeLabel="999" :position="args.position" :isIcon="args.isIcon">
                    <Icon name="notification" size="26"></Icon>
                </Badge>
                <Badge themeColor="info"  badgeLabel="999" :position="args.position" :isIcon="args.isIcon">
                    <Icon name="notification" size="26"></Icon>
                </Badge>
            </div>
        \`
  }),
  // 控制 controls 中能控制的參數
  parameters: {
    controls: {
      // include: ['themeColor', 'label', 'value', 'name' ],
    }
  }
}`,...(y=(D=c.parameters)==null?void 0:D.docs)==null?void 0:y.source}}};const k=["BadgeStyle","BadgePosition","BadgeMaxValue","BadgeThemeColor"];export{r as BadgeMaxValue,t as BadgePosition,s as BadgeStyle,c as BadgeThemeColor,k as __namedExportsOrder,$ as default};

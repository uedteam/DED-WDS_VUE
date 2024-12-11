import{c as D,a as s,r as N,b as u,F as A,t as S,e as g,n as d,o as c}from"./vue.esm-bundler-C-bz8AVj.js";import{_ as o}from"./Icon-B8_v5yMR.js";import"./iframe-abojlcp7.js";import"../sb-preview/runtime.js";const w={class:"ded-badge-text"},E={key:0,class:"ded-badge-text"},t={__name:"Badge",props:{themeColor:{type:String,default:"error",validator:a=>["primary","secondary","tertiary","success","warning","error","info"].includes(a)},type:{type:String,default:"dot",validator:a=>["dot","number"].includes(a)},value:{type:Number},limit:{type:Number,default:1/0},className:{type:String,default:""}},setup(a){const n=a,e=D(()=>n.value>n.limit&&n.value>n.limit?n.limit:n.value);return(_,V)=>(c(),s("div",{class:d({"ded-badge__container":!0,[n.className]:!!n.className})},[N(_.$slots,"default"),u("div",{class:d(["ded-badge__content ded-badge__position-top-right",[`ded-badge-color-${n.themeColor}`,n.type==="dot"?"ded-badge__content-isDot":""]])},[n.type!=="dot"?(c(),s(A,{key:0},[u("span",w,S(e.value),1),n.value>n.limit?(c(),s("span",E,"+")):g("",!0)],64)):g("",!0)],2)],2))}};t.__docgenInfo={exportName:"default",displayName:"Badge",description:"",tags:{},props:[{name:"themeColor",type:{name:"string"},defaultValue:{func:!1,value:'"error"'},values:["primary","secondary","tertiary","success","warning","error","info"]},{name:"type",type:{name:"string"},defaultValue:{func:!1,value:'"dot"'},values:["dot","number"]},{name:"value",type:{name:"number"}},{name:"limit",type:{name:"number"},defaultValue:{func:!1,value:"Infinity"}},{name:"className",type:{name:"string"},defaultValue:{func:!1,value:'""'}}],slots:[{name:"default"}],sourceFiles:["/Users/auouser/Desktop/Work_Space/DED-WDS_VUE/libs/src/ui/element/Badge/Badge.vue"]};const L={title:"Component/Badge",component:t,components:{Icon:o},tags:["autodocs"],argTypes:{themeColor:{description:"主題顏色",control:{type:"select"},options:["primary","secondary","tertiary","success","warning","error","info"],table:{type:{summary:"primary | secondary | tertiary | success | warning | error | info"}}},type:{description:"顯示方式",control:{type:"select"},options:["dot","number"],table:{type:{summary:"dot | number "}}},value:{description:"數值",control:{type:"number"}},limit:{description:"數值上限",control:{type:"number"}},className:{description:"客製化樣式",control:{type:"text"}},default:{description:"圖標插槽",table:{type:{summary:"Vue Component | HTML"}},control:!1}},parameters:{docs:{title:"Badge",description:{component:"Badge 組件的呈現及說明。"}}}},i={name:"預設項目",args:{themeColor:"error",type:"number",value:100,limit:99,className:""},render:a=>({components:{Badge:t,Icon:o},setup(){return{args:a}},template:`
            <Badge 
                :themeColor="args.themeColor"
                :type="args.type"
                :value="args.value"
                :limit="args.limit"
                :className="args.className"
            >   
                <Icon name="notification" size="26"></Icon>
            </Badge>
        `}),parameters:{controls:{},docs:{source:{transform:(a,n)=>{const{args:e}=n;return["<Badge",`  themeColor="${e.themeColor}"`,`  type="${e.type}"`,`  :value="${e.value}"`,`  :limit="${e.limit}"`,`  className="${e.className}"`,">",'  <Icon name="notification" size="26"></Icon>',"</Badge>"].join(`
`).trim()}}}}},r={name:"類型選擇",args:{themeColor:"error",type:"number",value:999,limit:99},render:a=>({components:{Badge:t,Icon:o},setup(){return{args:a}},template:`
            <div style="display:flex; gap:24px;">
                <Badge
                    :themeColor="args.themeColor"
                    type="dot"
                    :value="args.value"
                    :limit="args.limit"
                >
                    <Icon name="notification" size="26"></Icon>
                </Badge>
                <Badge
                    :themeColor="args.themeColor"
                    type="number"
                    :value="args.value"
                    :limit="args.limit"
                >
                    <Icon name="notification" size="26"></Icon>
                </Badge>
            </div>
        `}),parameters:{controls:{exclude:["isDot"]},docs:{source:{transform:(a,n)=>{const{args:e}=n;return["<Badge",`  themeColor="${e.themeColor}"`,'  type="dot"',`  :value="${e.value}"`,`  :limit="${e.limit}"`,">",'  <Icon name="notification" size="26"></Icon>',"</Badge>","<Badge",`  themeColor="${e.themeColor}"`,'  type="number"',`  :value="${e.value}"`,`  :limit="${e.limit}"`,">",'  <Icon name="notification" size="26"></Icon>',"</Badge>"].join(`
`).trim()}}}}},l={name:"最大值設定",args:{themeColor:"error",type:"number",value:999,limit:99},render:a=>({components:{Badge:t,Icon:o},setup(){return{args:a}},template:`
            <div style="display:flex; gap:60px; margin-bottom: 24px;">
                <Badge
                    :themeColor="args.themeColor"
                    type="number"
                    :value="98"
                    :limit="99"
                >
                    <Icon name="notification" size="26"></Icon>
                </Badge>
                <Badge
                    :themeColor="args.themeColor"
                    type="number"
                    :value="100"
                    :limit="99"
                >
                    <Icon name="notification" size="26"></Icon>
                </Badge>
            </div>
        `}),parameters:{controls:{},docs:{source:{transform:(a,n)=>{const{args:e}=n;return["<Badge",`  :themeColor="${e.themeColor}"`,'  type="number"','  :value="98"','  :limit="99"',">",'  <Icon name="notification" size="26"></Icon>',"</Badge>","<Badge",`  :themeColor="${e.themeColor}"`,'  type="number"','  :value="100"','  :limit="99"',">",'  <Icon name="notification" size="26"></Icon>',"</Badge>"].join(`
`).trim()}}}}},m={name:"顏色設定",args:{themeColor:"error",type:"number",value:999,limit:99},render:a=>({components:{Badge:t,Icon:o},setup(){return{args:a}},template:`
            <div style="display:flex; gap:56px; margin-bottom: 24px;">
                <Badge
                    themeColor="primary"
                    type="dot"
                    :value="args.value"
                    :limit="args.limit"
                >
                    <Icon name="notification" size="26"></Icon>
                </Badge>
                <Badge
                    themeColor="secondary"
                    type="dot"
                    :value="args.value"
                    :limit="args.limit"
                >
                    <Icon name="notification" size="26"></Icon>
                </Badge>
                <Badge
                    themeColor="tertiary"
                    type="dot"
                    :value="args.value"
                    :limit="args.limit"
                >
                    <Icon name="notification" size="26"></Icon>
                </Badge>
                <Badge
                    themeColor="success"
                    type="dot"
                    :value="args.value"
                    :limit="args.limit"
                >
                    <Icon name="notification" size="26"></Icon>
                </Badge>
                <Badge
                    themeColor="warning"
                    type="dot"
                    :value="args.value"
                    :limit="args.limit"
                >
                    <Icon name="notification" size="26"></Icon>
                </Badge>
                <Badge
                    themeColor="error"
                    type="dot"
                    :value="args.value"
                    :limit="args.limit"
                >
                    <Icon name="notification" size="26"></Icon>
                </Badge>
                <Badge
                    themeColor="info"
                    type="dot"
                    :value="args.value"
                    :limit="args.limit"
                >
                    <Icon name="notification" size="26"></Icon>
                </Badge>
            </div>
            <div style="display:flex; gap:56px">
                <Badge
                    themeColor="primary"
                    type="number"
                    :value="args.value"
                    :limit="args.limit"
                >
                    <Icon name="notification" size="26"></Icon>
                </Badge>
                <Badge
                    themeColor="secondary"
                    type="number"
                    :value="args.value"
                    :limit="args.limit"
                >
                    <Icon name="notification" size="26"></Icon>
                </Badge>
                <Badge
                    themeColor="tertiary"
                    type="number"
                    :value="args.value"
                    :limit="args.limit"
                >
                    <Icon name="notification" size="26"></Icon>
                </Badge>
                <Badge
                    themeColor="success"
                    type="number"
                    :value="args.value"
                    :limit="args.limit"
                >
                    <Icon name="notification" size="26"></Icon>
                </Badge>
                <Badge
                    themeColor="warning"
                    type="number"
                    :value="args.value"
                    :limit="args.limit"
                >
                    <Icon name="notification" size="26"></Icon>
                </Badge>
                <Badge
                    themeColor="error"
                    type="number"
                    :value="args.value"
                    :limit="args.limit"
                >
                    <Icon name="notification" size="26"></Icon>
                </Badge>
                <Badge
                    themeColor="info"
                    type="number"
                    :value="args.value"
                    :limit="args.limit"
                >
                    <Icon name="notification" size="26"></Icon>
                </Badge>
            </div>
        `}),parameters:{controls:{exclude:["isDot","themeColor"]},docs:{source:{transform:(a,n)=>{const{args:e}=n;return["<Badge",'  themeColor="primary"','  type="dot"',`  :value="${e.value}"`,`  :limit="${e.limit}"`,">",'  <Icon name="notification" size="26"></Icon>',"</Badge>","<Badge",'  themeColor="secondary"','  type="dot"',`  :value="${e.value}"`,`  :limit="${e.limit}"`,">",'  <Icon name="notification" size="26"></Icon>',"</Badge>","<Badge",'  themeColor="tertiary"','  type="dot"',`  :value="${e.value}"`,`  :limit="${e.limit}"`,">",'  <Icon name="notification" size="26"></Icon>',"</Badge>","<Badge",'  themeColor="success"','  type="dot"',`  :value="${e.value}"`,`  :limit="${e.limit}"`,">",'  <Icon name="notification" size="26"></Icon>',"</Badge>","<Badge",'  themeColor="warning"','  type="dot"',`  :value="${e.value}"`,`  :limit="${e.limit}"`,">",'  <Icon name="notification" size="26"></Icon>',"</Badge>","<Badge",'  themeColor="error"','  type="dot"',`  :value="${e.value}"`,`  :limit="${e.limit}"`,">",'  <Icon name="notification" size="26"></Icon>',"</Badge>","<Badge",'  themeColor="info"','  type="dot"',`  :value="${e.value}"`,`  :limit="${e.limit}"`,">",'  <Icon name="notification" size="26"></Icon>',"</Badge>","<Badge",'  themeColor="primary"','  type="number"',`  :value="${e.value}"`,`  :limit="${e.limit}"`,">",'  <Icon name="notification" size="26"></Icon>',"</Badge>","<Badge",'  themeColor="secondary"','  type="number"',`  :value="${e.value}"`,`  :limit="${e.limit}"`,">",'  <Icon name="notification" size="26"></Icon>',"</Badge>","<Badge",'  themeColor="tertiary"','  type="number"',`  :value="${e.value}"`,`  :limit="${e.limit}"`,">",'  <Icon name="notification" size="26"></Icon>',"</Badge>","<Badge",'  themeColor="success"','  type="number"',`  :value="${e.value}"`,`  :limit="${e.limit}"`,">",'  <Icon name="notification" size="26"></Icon>',"</Badge>","<Badge",'  themeColor="warning"','  type="number"',`  :value="${e.value}"`,`  :limit="${e.limit}"`,">",'  <Icon name="notification" size="26"></Icon>',"</Badge>","<Badge",'  themeColor="error"','  type="number"',`  :value="${e.value}"`,`  :limit="${e.limit}"`,">",'  <Icon name="notification" size="26"></Icon>',"</Badge>","<Badge",'  themeColor="info"','  type="number"',`  :value="${e.value}"`,`  :limit="${e.limit}"`,">",'  <Icon name="notification" size="26"></Icon>',"</Badge>"].join(`
`).trim()}}}}};var p,v,y;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: "預設項目",
  args: {
    themeColor: "error",
    type: "number",
    value: 100,
    limit: 99,
    className: ""
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
            <Badge 
                :themeColor="args.themeColor"
                :type="args.type"
                :value="args.value"
                :limit="args.limit"
                :className="args.className"
            >   
                <Icon name="notification" size="26"></Icon>
            </Badge>
        \`
  }),
  // 控制 controls 中能控制的參數
  parameters: {
    controls: {
      // include: ['themeColor', 'value', 'value', 'name' ],
    },
    docs: {
      source: {
        transform: (src, storyContext) => {
          const {
            args
          } = storyContext;
          return ['<Badge', \`  themeColor="\${args.themeColor}"\`, \`  type="\${args.type}"\`, \`  :value="\${args.value}"\`, \`  :limit="\${args.limit}"\`, \`  className="\${args.className}"\`, '>', '  <Icon name="notification" size="26"></Icon>', '</Badge>'].join('\\n').trim();
        }
      }
    }
  }
}`,...(y=(v=i.parameters)==null?void 0:v.docs)==null?void 0:y.source}}};var B,I,f;r.parameters={...r.parameters,docs:{...(B=r.parameters)==null?void 0:B.docs,source:{originalSource:`{
  name: "類型選擇",
  args: {
    themeColor: "error",
    type: "number",
    value: 999,
    limit: 99
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
                    :themeColor="args.themeColor"
                    type="dot"
                    :value="args.value"
                    :limit="args.limit"
                >
                    <Icon name="notification" size="26"></Icon>
                </Badge>
                <Badge
                    :themeColor="args.themeColor"
                    type="number"
                    :value="args.value"
                    :limit="args.limit"
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
    },
    docs: {
      source: {
        transform: (src, storyContext) => {
          const {
            args
          } = storyContext;
          return ['<Badge', \`  themeColor="\${args.themeColor}"\`, \`  type="dot"\`, \`  :value="\${args.value}"\`, \`  :limit="\${args.limit}"\`, '>', '  <Icon name="notification" size="26"></Icon>', '</Badge>', '<Badge', \`  themeColor="\${args.themeColor}"\`, \`  type="number"\`, \`  :value="\${args.value}"\`, \`  :limit="\${args.limit}"\`, '>', '  <Icon name="notification" size="26"></Icon>', '</Badge>'].join('\\n').trim();
        }
      }
    }
  }
}`,...(f=(I=r.parameters)==null?void 0:I.docs)==null?void 0:f.source}}};var C,h,$;l.parameters={...l.parameters,docs:{...(C=l.parameters)==null?void 0:C.docs,source:{originalSource:`{
  name: "最大值設定",
  args: {
    themeColor: "error",
    type: "number",
    value: 999,
    limit: 99
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
                    :themeColor="args.themeColor"
                    type="number"
                    :value="98"
                    :limit="99"
                >
                    <Icon name="notification" size="26"></Icon>
                </Badge>
                <Badge
                    :themeColor="args.themeColor"
                    type="number"
                    :value="100"
                    :limit="99"
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
    },
    docs: {
      source: {
        transform: (src, storyContext) => {
          const {
            args
          } = storyContext;
          return ['<Badge', \`  :themeColor="\${args.themeColor}"\`, \`  type="number"\`, \`  :value="98"\`, \`  :limit="99"\`, '>', '  <Icon name="notification" size="26"></Icon>', '</Badge>', '<Badge', \`  :themeColor="\${args.themeColor}"\`, \`  type="number"\`, \`  :value="100"\`, \`  :limit="99"\`, '>', '  <Icon name="notification" size="26"></Icon>', '</Badge>'].join('\\n').trim();
        }
      }
    }
  }
}`,...($=(h=l.parameters)==null?void 0:h.docs)==null?void 0:$.source}}};var z,b,x;m.parameters={...m.parameters,docs:{...(z=m.parameters)==null?void 0:z.docs,source:{originalSource:`{
  name: "顏色設定",
  args: {
    themeColor: "error",
    type: "number",
    value: 999,
    limit: 99
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
                    themeColor="primary"
                    type="dot"
                    :value="args.value"
                    :limit="args.limit"
                >
                    <Icon name="notification" size="26"></Icon>
                </Badge>
                <Badge
                    themeColor="secondary"
                    type="dot"
                    :value="args.value"
                    :limit="args.limit"
                >
                    <Icon name="notification" size="26"></Icon>
                </Badge>
                <Badge
                    themeColor="tertiary"
                    type="dot"
                    :value="args.value"
                    :limit="args.limit"
                >
                    <Icon name="notification" size="26"></Icon>
                </Badge>
                <Badge
                    themeColor="success"
                    type="dot"
                    :value="args.value"
                    :limit="args.limit"
                >
                    <Icon name="notification" size="26"></Icon>
                </Badge>
                <Badge
                    themeColor="warning"
                    type="dot"
                    :value="args.value"
                    :limit="args.limit"
                >
                    <Icon name="notification" size="26"></Icon>
                </Badge>
                <Badge
                    themeColor="error"
                    type="dot"
                    :value="args.value"
                    :limit="args.limit"
                >
                    <Icon name="notification" size="26"></Icon>
                </Badge>
                <Badge
                    themeColor="info"
                    type="dot"
                    :value="args.value"
                    :limit="args.limit"
                >
                    <Icon name="notification" size="26"></Icon>
                </Badge>
            </div>
            <div style="display:flex; gap:56px">
                <Badge
                    themeColor="primary"
                    type="number"
                    :value="args.value"
                    :limit="args.limit"
                >
                    <Icon name="notification" size="26"></Icon>
                </Badge>
                <Badge
                    themeColor="secondary"
                    type="number"
                    :value="args.value"
                    :limit="args.limit"
                >
                    <Icon name="notification" size="26"></Icon>
                </Badge>
                <Badge
                    themeColor="tertiary"
                    type="number"
                    :value="args.value"
                    :limit="args.limit"
                >
                    <Icon name="notification" size="26"></Icon>
                </Badge>
                <Badge
                    themeColor="success"
                    type="number"
                    :value="args.value"
                    :limit="args.limit"
                >
                    <Icon name="notification" size="26"></Icon>
                </Badge>
                <Badge
                    themeColor="warning"
                    type="number"
                    :value="args.value"
                    :limit="args.limit"
                >
                    <Icon name="notification" size="26"></Icon>
                </Badge>
                <Badge
                    themeColor="error"
                    type="number"
                    :value="args.value"
                    :limit="args.limit"
                >
                    <Icon name="notification" size="26"></Icon>
                </Badge>
                <Badge
                    themeColor="info"
                    type="number"
                    :value="args.value"
                    :limit="args.limit"
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
    },
    docs: {
      source: {
        transform: (src, storyContext) => {
          const {
            args
          } = storyContext;
          return ['<Badge', \`  themeColor="primary"\`, \`  type="dot"\`, \`  :value="\${args.value}"\`, \`  :limit="\${args.limit}"\`, '>', '  <Icon name="notification" size="26"></Icon>', '</Badge>', '<Badge', \`  themeColor="secondary"\`, \`  type="dot"\`, \`  :value="\${args.value}"\`, \`  :limit="\${args.limit}"\`, '>', '  <Icon name="notification" size="26"></Icon>', '</Badge>', '<Badge', \`  themeColor="tertiary"\`, \`  type="dot"\`, \`  :value="\${args.value}"\`, \`  :limit="\${args.limit}"\`, '>', '  <Icon name="notification" size="26"></Icon>', '</Badge>', '<Badge', \`  themeColor="success"\`, \`  type="dot"\`, \`  :value="\${args.value}"\`, \`  :limit="\${args.limit}"\`, '>', '  <Icon name="notification" size="26"></Icon>', '</Badge>', '<Badge', \`  themeColor="warning"\`, \`  type="dot"\`, \`  :value="\${args.value}"\`, \`  :limit="\${args.limit}"\`, '>', '  <Icon name="notification" size="26"></Icon>', '</Badge>', '<Badge', \`  themeColor="error"\`, \`  type="dot"\`, \`  :value="\${args.value}"\`, \`  :limit="\${args.limit}"\`, '>', '  <Icon name="notification" size="26"></Icon>', '</Badge>', '<Badge', \`  themeColor="info"\`, \`  type="dot"\`, \`  :value="\${args.value}"\`, \`  :limit="\${args.limit}"\`, '>', '  <Icon name="notification" size="26"></Icon>', '</Badge>', '<Badge', \`  themeColor="primary"\`, \`  type="number"\`, \`  :value="\${args.value}"\`, \`  :limit="\${args.limit}"\`, '>', '  <Icon name="notification" size="26"></Icon>', '</Badge>', '<Badge', \`  themeColor="secondary"\`, \`  type="number"\`, \`  :value="\${args.value}"\`, \`  :limit="\${args.limit}"\`, '>', '  <Icon name="notification" size="26"></Icon>', '</Badge>', '<Badge', \`  themeColor="tertiary"\`, \`  type="number"\`, \`  :value="\${args.value}"\`, \`  :limit="\${args.limit}"\`, '>', '  <Icon name="notification" size="26"></Icon>', '</Badge>', '<Badge', \`  themeColor="success"\`, \`  type="number"\`, \`  :value="\${args.value}"\`, \`  :limit="\${args.limit}"\`, '>', '  <Icon name="notification" size="26"></Icon>', '</Badge>', '<Badge', \`  themeColor="warning"\`, \`  type="number"\`, \`  :value="\${args.value}"\`, \`  :limit="\${args.limit}"\`, '>', '  <Icon name="notification" size="26"></Icon>', '</Badge>', '<Badge', \`  themeColor="error"\`, \`  type="number"\`, \`  :value="\${args.value}"\`, \`  :limit="\${args.limit}"\`, '>', '  <Icon name="notification" size="26"></Icon>', '</Badge>', '<Badge', \`  themeColor="info"\`, \`  type="number"\`, \`  :value="\${args.value}"\`, \`  :limit="\${args.limit}"\`, '>', '  <Icon name="notification" size="26"></Icon>', '</Badge>'].join('\\n').trim();
        }
      }
    }
  }
}`,...(x=(b=m.parameters)==null?void 0:b.docs)==null?void 0:x.source}}};const U=["BadgeDefault","BadgeStyle","BadgeLimit","BadgeThemeColor"];export{i as BadgeDefault,l as BadgeLimit,r as BadgeStyle,m as BadgeThemeColor,U as __namedExportsOrder,L as default};

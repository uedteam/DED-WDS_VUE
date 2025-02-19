import{_ as s}from"./Badge-CqDptp9l.js";import{_ as n}from"./Icon-CVEqTX2T.js";import"./vue.esm-bundler-qCK_iSPY.js";import"./iframe-ChCRMyiJ.js";import"../sb-preview/runtime.js";const z={title:"Component/Badge",component:s,components:{Icon:n},tags:["autodocs"],argTypes:{themeColor:{description:"主題顏色",control:{type:"select"},options:["primary","secondary","neutral","info","success","warning","error"],table:{type:{summary:"primary | secondary | neutral | info | success | warning | error"}}},isShowDot:{description:"是否顯示圓點",control:{type:"boolean"}},value:{description:"數值",control:{type:"number"}},limit:{description:"數值顯示上限",control:{type:"number"}},className:{description:"客製化樣式",control:{type:"text"}},default:{description:"圖標插槽",control:{type:"text"},table:{type:{summary:"Vue Component | HTML"}}}},parameters:{docs:{title:"Badge",description:{component:"徽章組件的呈現及說明。"}}}},i={name:"預設項目",args:{themeColor:"error",isShowDot:!1,value:100,limit:99,className:"",default:'<Icon name="SvgNotification" size="26"></Icon>'},render:a=>({components:{Badge:s,Icon:n},setup(){return{args:a}},template:`
            <Badge 
                :themeColor="args.themeColor"
                :isShowDot="args.isShowDot"
                :value="args.value"
                :limit="args.limit"
                :className="args.className"
            >   
                <Icon name="SvgNotification" size="26"></Icon>
            </Badge>
        `}),parameters:{controls:{},docs:{source:{transform:(a,o)=>{const{args:e}=o;return["<Badge",`  themeColor="${e.themeColor}"`,`  isShowDot="${e.isShowDot}"`,`  :value="${e.value}"`,`  :limit="${e.limit}"`,`  className="${e.className}"`,">",'  <Icon name="SvgNotification" size="26"></Icon>',"</Badge>"].join(`
`).trim()}}}}},t={name:"外觀類型",args:{themeColor:"error",value:999,limit:99,className:"",default:'<Icon name="SvgNotification" size="26"></Icon>'},render:a=>({components:{Badge:s,Icon:n},setup(){return{args:a}},template:`
            <div style="display:flex; gap:24px;">
                <Badge
                    :themeColor="args.themeColor"
                    :isShowDot= true
                    :value="args.value"
                    :limit="args.limit"
                    :className="args.className"
                >
                    <Icon name="SvgNotification" size="26"></Icon>
                </Badge>
                <Badge
                    :themeColor="args.themeColor"
                    :isShowDot= false
                    :value="args.value"
                    :limit="args.limit"
                    :className="args.className"
                >
                    <Icon name="SvgNotification" size="26"></Icon>
                </Badge>
            </div>
        `}),parameters:{controls:{exclude:["isShowDot"]},docs:{source:{transform:(a,o)=>{const{args:e}=o;return["<Badge",`  themeColor="${e.themeColor}"`,"  :isShowDot= true",`  :value="${e.value}"`,`  :limit="${e.limit}"`,`  className="${e.className}"`,">",'  <Icon name="SvgNotification" size="26"></Icon>',"</Badge>","<Badge",`  themeColor="${e.themeColor}"`,"  :isShowDot= false",`  :value="${e.value}"`,`  :limit="${e.limit}"`,`  className="${e.className}"`,">",'  <Icon name="SvgNotification" size="26"></Icon>',"</Badge>"].join(`
`).trim()}}}}},l={name:"數值顯示上限",args:{themeColor:"error",isShowDot:!1,value:999,limit:99,className:"",default:'<Icon name="SvgNotification" size="26"></Icon>'},render:a=>({components:{Badge:s,Icon:n},setup(){return{args:a}},template:`
            <div style="display:flex; gap:60px; margin-bottom: 24px;">
                <Badge
                    :themeColor="args.themeColor"
                    :isShowDot="args.isShowDot"
                    :value="98"
                    :limit="99"
                    :className="args.className"
                >
                    <Icon name="SvgNotification" size="26"></Icon>
                </Badge>
                <Badge
                    :themeColor="args.themeColor"
                    :isShowDot="args.isShowDot"
                    :value="100"
                    :limit="99"
                    :className="args.className"
                >
                    <Icon name="SvgNotification" size="26"></Icon>
                </Badge>
            </div>
        `}),parameters:{controls:{},docs:{source:{transform:(a,o)=>{const{args:e}=o;return["<Badge",`  :themeColor="${e.themeColor}"`,"  :isShowDot= false",'  :value="98"','  :limit="99"',`  className="${e.className}"`,">",'  <Icon name="SvgNotification" size="26"></Icon>',"</Badge>","<Badge",`  :themeColor="${e.themeColor}"`,"  :isShowDot= false",'  :value="100"','  :limit="99"',`  className="${e.className}"`,">",'  <Icon name="SvgNotification" size="26"></Icon>',"</Badge>"].join(`
`).trim()}}}}},r={name:"主題色彩",args:{themeColor:"error",isShowDot:!1,value:999,limit:99,className:"",default:'<Icon name="SvgNotification" size="26"></Icon>'},render:a=>({components:{Badge:s,Icon:n},setup(){return{args:a}},template:`
            <div style="display:flex; gap:56px; margin-bottom: 24px;">
                <Badge
                    themeColor="primary"
                    :isShowDot= true
                    :value="args.value"
                    :limit="args.limit"
                    :className="args.className"
                >
                    <Icon name="SvgNotification" size="26"></Icon>
                </Badge>
                <Badge
                    themeColor="secondary"
                    :isShowDot= true
                    :value="args.value"
                    :limit="args.limit"
                    :className="args.className"
                >
                    <Icon name="SvgNotification" size="26"></Icon>
                </Badge>
                <Badge
                    themeColor="neutral"
                    :isShowDot= true
                    :value="args.value"
                    :limit="args.limit"
                    :className="args.className"
                >
                    <Icon name="SvgNotification" size="26"></Icon>
                </Badge>
                <Badge
                    themeColor="info"
                    :isShowDot= true
                    :value="args.value"
                    :limit="args.limit"
                    :className="args.className"
                >
                    <Icon name="SvgNotification" size="26"></Icon>
                </Badge>
                <Badge
                    themeColor="success"
                    :isShowDot= true
                    :value="args.value"
                    :limit="args.limit"
                    :className="args.className"
                >
                    <Icon name="SvgNotification" size="26"></Icon>
                </Badge>
                <Badge
                    themeColor="warning"
                    :isShowDot= true
                    :value="args.value"
                    :limit="args.limit"
                    :className="args.className"
                >
                    <Icon name="SvgNotification" size="26"></Icon>
                </Badge>
                <Badge
                    themeColor="error"
                    :isShowDot= true
                    :value="args.value"
                    :limit="args.limit"
                    :className="args.className"
                >
                    <Icon name="SvgNotification" size="26"></Icon>
                </Badge>
            </div>
            <div style="display:flex; gap:56px">
                <Badge
                    themeColor="primary"
                    :isShowDot= false
                    :value="args.value"
                    :limit="args.limit"
                    :className="args.className"
                >
                    <Icon name="SvgNotification" size="26"></Icon>
                </Badge>
                <Badge
                    themeColor="secondary"
                    :isShowDot= false
                    :value="args.value"
                    :limit="args.limit"
                    :className="args.className"
                >
                    <Icon name="SvgNotification" size="26"></Icon>
                </Badge>
                <Badge
                    themeColor="neutral"
                    :isShowDot= false
                    :value="args.value"
                    :limit="args.limit"
                    :className="args.className"
                >
                    <Icon name="SvgNotification" size="26"></Icon>
                </Badge>
                <Badge
                    themeColor="info"
                    :isShowDot= false
                    :value="args.value"
                    :limit="args.limit"
                    :className="args.className"
                >
                    <Icon name="SvgNotification" size="26"></Icon>
                </Badge>
                <Badge
                    themeColor="success"
                    :isShowDot= false
                    :value="args.value"
                    :limit="args.limit"
                    :className="args.className"
                >
                    <Icon name="SvgNotification" size="26"></Icon>
                </Badge>
                <Badge
                    themeColor="warning"
                    :isShowDot= false
                    :value="args.value"
                    :limit="args.limit"
                    :className="args.className"
                >
                    <Icon name="SvgNotification" size="26"></Icon>
                </Badge>
                <Badge
                    themeColor="error"
                    :isShowDot= false
                    :value="args.value"
                    :limit="args.limit"
                    :className="args.className"
                >
                    <Icon name="SvgNotification" size="26"></Icon>
                </Badge>
            </div>
        `}),parameters:{controls:{exclude:["themeColor","isShowDot"]},docs:{source:{transform:(a,o)=>{const{args:e}=o;return["<Badge",'  themeColor="primary"',"  :isShowDot= true",`  :value="${e.value}"`,`  :limit="${e.limit}"`,`  className="${e.className}"`,">",'  <Icon name="SvgNotification" size="26"></Icon>',"</Badge>","<Badge",'  themeColor="secondary"',"  :isShowDot= true",`  :value="${e.value}"`,`  :limit="${e.limit}"`,`  className="${e.className}"`,">",'  <Icon name="SvgNotification" size="26"></Icon>',"</Badge>","<Badge",'  themeColor="neutral"',"  :isShowDot= true",`  :value="${e.value}"`,`  :limit="${e.limit}"`,`  className="${e.className}"`,">",'  <Icon name="SvgNotification" size="26"></Icon>',"</Badge>","<Badge",'  themeColor="info"',"  :isShowDot= true",`  :value="${e.value}"`,`  :limit="${e.limit}"`,`  className="${e.className}"`,">",'  <Icon name="SvgNotification" size="26"></Icon>',"</Badge>","<Badge",'  themeColor="success"',"  :isShowDot= true",`  :value="${e.value}"`,`  :limit="${e.limit}"`,`  className="${e.className}"`,">",'  <Icon name="SvgNotification" size="26"></Icon>',"</Badge>","<Badge",'  themeColor="warning"',"  :isShowDot= true",`  :value="${e.value}"`,`  :limit="${e.limit}"`,`  className="${e.className}"`,">",'  <Icon name="SvgNotification" size="26"></Icon>',"</Badge>","<Badge",'  themeColor="error"',"  :isShowDot= true",`  :value="${e.value}"`,`  :limit="${e.limit}"`,`  className="${e.className}"`,">",'  <Icon name="SvgNotification" size="26"></Icon>',"</Badge>","<Badge",'  themeColor="primary"',"  :isShowDot= false",`  :value="${e.value}"`,`  :limit="${e.limit}"`,`  className="${e.className}"`,">",'  <Icon name="SvgNotification" size="26"></Icon>',"</Badge>","<Badge",'  themeColor="secondary"',"  :isShowDot= false",`  :value="${e.value}"`,`  :limit="${e.limit}"`,`  className="${e.className}"`,">",'  <Icon name="SvgNotification" size="26"></Icon>',"</Badge>","<Badge",'  themeColor="neutral"',"  :isShowDot= false",`  :value="${e.value}"`,`  :limit="${e.limit}"`,`  className="${e.className}"`,">",'  <Icon name="SvgNotification" size="26"></Icon>',"</Badge>","<Badge",'  themeColor="info"',"  :isShowDot= false",`  :value="${e.value}"`,`  :limit="${e.limit}"`,`  className="${e.className}"`,">",'  <Icon name="SvgNotification" size="26"></Icon>',"</Badge>","<Badge",'  themeColor="success"',"  :isShowDot= false",`  :value="${e.value}"`,`  :limit="${e.limit}"`,`  className="${e.className}"`,">",'  <Icon name="SvgNotification" size="26"></Icon>',"</Badge>","<Badge",'  themeColor="warning"',"  :isShowDot= false",`  :value="${e.value}"`,`  :limit="${e.limit}"`,`  className="${e.className}"`,">",'  <Icon name="SvgNotification" size="26"></Icon>',"</Badge>","<Badge",'  themeColor="error"',"  :isShowDot= false",`  :value="${e.value}"`,`  :limit="${e.limit}"`,`  className="${e.className}"`,">",'  <Icon name="SvgNotification" size="26"></Icon>',"</Badge>"].join(`
`).trim()}}}}};var m,c,g;i.parameters={...i.parameters,docs:{...(m=i.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: "預設項目",
  args: {
    themeColor: "error",
    isShowDot: false,
    value: 100,
    limit: 99,
    className: "",
    default: \`<Icon name="SvgNotification" size="26"></Icon>\`
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
                :isShowDot="args.isShowDot"
                :value="args.value"
                :limit="args.limit"
                :className="args.className"
            >   
                <Icon name="SvgNotification" size="26"></Icon>
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
          return ['<Badge', \`  themeColor="\${args.themeColor}"\`, \`  isShowDot="\${args.isShowDot}"\`, \`  :value="\${args.value}"\`, \`  :limit="\${args.limit}"\`, \`  className="\${args.className}"\`, '>', '  <Icon name="SvgNotification" size="26"></Icon>', '</Badge>'].join('\\n').trim();
        }
      }
    }
  }
}`,...(g=(c=i.parameters)==null?void 0:c.docs)==null?void 0:g.source}}};var u,d,v;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  name: "外觀類型",
  args: {
    themeColor: "error",
    // isShowDot: false,
    value: 999,
    limit: 99,
    className: "",
    default: \`<Icon name="SvgNotification" size="26"></Icon>\`
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
                    :isShowDot= true
                    :value="args.value"
                    :limit="args.limit"
                    :className="args.className"
                >
                    <Icon name="SvgNotification" size="26"></Icon>
                </Badge>
                <Badge
                    :themeColor="args.themeColor"
                    :isShowDot= false
                    :value="args.value"
                    :limit="args.limit"
                    :className="args.className"
                >
                    <Icon name="SvgNotification" size="26"></Icon>
                </Badge>
            </div>
        \`
  }),
  // 控制 controls 中能控制的參數
  parameters: {
    controls: {
      exclude: ['isShowDot']
    },
    docs: {
      source: {
        transform: (src, storyContext) => {
          const {
            args
          } = storyContext;
          return ['<Badge', \`  themeColor="\${args.themeColor}"\`, \`  :isShowDot= true\`, \`  :value="\${args.value}"\`, \`  :limit="\${args.limit}"\`, \`  className="\${args.className}"\`, '>', '  <Icon name="SvgNotification" size="26"></Icon>', '</Badge>', '<Badge', \`  themeColor="\${args.themeColor}"\`, \`  :isShowDot= false\`, \`  :value="\${args.value}"\`, \`  :limit="\${args.limit}"\`, \`  className="\${args.className}"\`, '>', '  <Icon name="SvgNotification" size="26"></Icon>', '</Badge>'].join('\\n').trim();
        }
      }
    }
  }
}`,...(v=(d=t.parameters)==null?void 0:d.docs)==null?void 0:v.source}}};var N,h,S;l.parameters={...l.parameters,docs:{...(N=l.parameters)==null?void 0:N.docs,source:{originalSource:`{
  name: "數值顯示上限",
  args: {
    themeColor: "error",
    isShowDot: false,
    value: 999,
    limit: 99,
    className: "",
    default: \`<Icon name="SvgNotification" size="26"></Icon>\`
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
                    :isShowDot="args.isShowDot"
                    :value="98"
                    :limit="99"
                    :className="args.className"
                >
                    <Icon name="SvgNotification" size="26"></Icon>
                </Badge>
                <Badge
                    :themeColor="args.themeColor"
                    :isShowDot="args.isShowDot"
                    :value="100"
                    :limit="99"
                    :className="args.className"
                >
                    <Icon name="SvgNotification" size="26"></Icon>
                </Badge>
            </div>
        \`
  }),
  // 控制 controls 中能控制的參數
  parameters: {
    controls: {
      // include: ['themeColor', 'value', 'value', 'name' ],
      // exclude: [ 'default' ],
    },
    docs: {
      source: {
        transform: (src, storyContext) => {
          const {
            args
          } = storyContext;
          return ['<Badge', \`  :themeColor="\${args.themeColor}"\`, \`  :isShowDot= false\`, \`  :value="98"\`, \`  :limit="99"\`, \`  className="\${args.className}"\`, '>', '  <Icon name="SvgNotification" size="26"></Icon>', '</Badge>', '<Badge', \`  :themeColor="\${args.themeColor}"\`, \`  :isShowDot= false\`, \`  :value="100"\`, \`  :limit="99"\`, \`  className="\${args.className}"\`, '>', '  <Icon name="SvgNotification" size="26"></Icon>', '</Badge>'].join('\\n').trim();
        }
      }
    }
  }
}`,...(S=(h=l.parameters)==null?void 0:h.docs)==null?void 0:S.source}}};var I,B,f;r.parameters={...r.parameters,docs:{...(I=r.parameters)==null?void 0:I.docs,source:{originalSource:`{
  name: "主題色彩",
  args: {
    themeColor: "error",
    isShowDot: false,
    value: 999,
    limit: 99,
    className: "",
    default: \`<Icon name="SvgNotification" size="26"></Icon>\`
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
                    :isShowDot= true
                    :value="args.value"
                    :limit="args.limit"
                    :className="args.className"
                >
                    <Icon name="SvgNotification" size="26"></Icon>
                </Badge>
                <Badge
                    themeColor="secondary"
                    :isShowDot= true
                    :value="args.value"
                    :limit="args.limit"
                    :className="args.className"
                >
                    <Icon name="SvgNotification" size="26"></Icon>
                </Badge>
                <Badge
                    themeColor="neutral"
                    :isShowDot= true
                    :value="args.value"
                    :limit="args.limit"
                    :className="args.className"
                >
                    <Icon name="SvgNotification" size="26"></Icon>
                </Badge>
                <Badge
                    themeColor="info"
                    :isShowDot= true
                    :value="args.value"
                    :limit="args.limit"
                    :className="args.className"
                >
                    <Icon name="SvgNotification" size="26"></Icon>
                </Badge>
                <Badge
                    themeColor="success"
                    :isShowDot= true
                    :value="args.value"
                    :limit="args.limit"
                    :className="args.className"
                >
                    <Icon name="SvgNotification" size="26"></Icon>
                </Badge>
                <Badge
                    themeColor="warning"
                    :isShowDot= true
                    :value="args.value"
                    :limit="args.limit"
                    :className="args.className"
                >
                    <Icon name="SvgNotification" size="26"></Icon>
                </Badge>
                <Badge
                    themeColor="error"
                    :isShowDot= true
                    :value="args.value"
                    :limit="args.limit"
                    :className="args.className"
                >
                    <Icon name="SvgNotification" size="26"></Icon>
                </Badge>
            </div>
            <div style="display:flex; gap:56px">
                <Badge
                    themeColor="primary"
                    :isShowDot= false
                    :value="args.value"
                    :limit="args.limit"
                    :className="args.className"
                >
                    <Icon name="SvgNotification" size="26"></Icon>
                </Badge>
                <Badge
                    themeColor="secondary"
                    :isShowDot= false
                    :value="args.value"
                    :limit="args.limit"
                    :className="args.className"
                >
                    <Icon name="SvgNotification" size="26"></Icon>
                </Badge>
                <Badge
                    themeColor="neutral"
                    :isShowDot= false
                    :value="args.value"
                    :limit="args.limit"
                    :className="args.className"
                >
                    <Icon name="SvgNotification" size="26"></Icon>
                </Badge>
                <Badge
                    themeColor="info"
                    :isShowDot= false
                    :value="args.value"
                    :limit="args.limit"
                    :className="args.className"
                >
                    <Icon name="SvgNotification" size="26"></Icon>
                </Badge>
                <Badge
                    themeColor="success"
                    :isShowDot= false
                    :value="args.value"
                    :limit="args.limit"
                    :className="args.className"
                >
                    <Icon name="SvgNotification" size="26"></Icon>
                </Badge>
                <Badge
                    themeColor="warning"
                    :isShowDot= false
                    :value="args.value"
                    :limit="args.limit"
                    :className="args.className"
                >
                    <Icon name="SvgNotification" size="26"></Icon>
                </Badge>
                <Badge
                    themeColor="error"
                    :isShowDot= false
                    :value="args.value"
                    :limit="args.limit"
                    :className="args.className"
                >
                    <Icon name="SvgNotification" size="26"></Icon>
                </Badge>
            </div>
        \`
  }),
  // 控制 controls 中能控制的參數
  parameters: {
    controls: {
      // include: ['themeColor', 'value', 'value', 'name' ],
      exclude: ['themeColor', 'isShowDot']
    },
    docs: {
      source: {
        transform: (src, storyContext) => {
          const {
            args
          } = storyContext;
          return ['<Badge', \`  themeColor="primary"\`, \`  :isShowDot= true\`, \`  :value="\${args.value}"\`, \`  :limit="\${args.limit}"\`, \`  className="\${args.className}"\`, '>', '  <Icon name="SvgNotification" size="26"></Icon>', '</Badge>', '<Badge', \`  themeColor="secondary"\`, \`  :isShowDot= true\`, \`  :value="\${args.value}"\`, \`  :limit="\${args.limit}"\`, \`  className="\${args.className}"\`, '>', '  <Icon name="SvgNotification" size="26"></Icon>', '</Badge>', '<Badge', \`  themeColor="neutral"\`, \`  :isShowDot= true\`, \`  :value="\${args.value}"\`, \`  :limit="\${args.limit}"\`, \`  className="\${args.className}"\`, '>', '  <Icon name="SvgNotification" size="26"></Icon>', '</Badge>', '<Badge', \`  themeColor="info"\`, \`  :isShowDot= true\`, \`  :value="\${args.value}"\`, \`  :limit="\${args.limit}"\`, \`  className="\${args.className}"\`, '>', '  <Icon name="SvgNotification" size="26"></Icon>', '</Badge>', '<Badge', \`  themeColor="success"\`, \`  :isShowDot= true\`, \`  :value="\${args.value}"\`, \`  :limit="\${args.limit}"\`, \`  className="\${args.className}"\`, '>', '  <Icon name="SvgNotification" size="26"></Icon>', '</Badge>', '<Badge', \`  themeColor="warning"\`, \`  :isShowDot= true\`, \`  :value="\${args.value}"\`, \`  :limit="\${args.limit}"\`, \`  className="\${args.className}"\`, '>', '  <Icon name="SvgNotification" size="26"></Icon>', '</Badge>', '<Badge', \`  themeColor="error"\`, \`  :isShowDot= true\`, \`  :value="\${args.value}"\`, \`  :limit="\${args.limit}"\`, \`  className="\${args.className}"\`, '>', '  <Icon name="SvgNotification" size="26"></Icon>', '</Badge>', '<Badge', \`  themeColor="primary"\`, \`  :isShowDot= false\`, \`  :value="\${args.value}"\`, \`  :limit="\${args.limit}"\`, \`  className="\${args.className}"\`, '>', '  <Icon name="SvgNotification" size="26"></Icon>', '</Badge>', '<Badge', \`  themeColor="secondary"\`, \`  :isShowDot= false\`, \`  :value="\${args.value}"\`, \`  :limit="\${args.limit}"\`, \`  className="\${args.className}"\`, '>', '  <Icon name="SvgNotification" size="26"></Icon>', '</Badge>', '<Badge', \`  themeColor="neutral"\`, \`  :isShowDot= false\`, \`  :value="\${args.value}"\`, \`  :limit="\${args.limit}"\`, \`  className="\${args.className}"\`, '>', '  <Icon name="SvgNotification" size="26"></Icon>', '</Badge>', '<Badge', \`  themeColor="info"\`, \`  :isShowDot= false\`, \`  :value="\${args.value}"\`, \`  :limit="\${args.limit}"\`, \`  className="\${args.className}"\`, '>', '  <Icon name="SvgNotification" size="26"></Icon>', '</Badge>', '<Badge', \`  themeColor="success"\`, \`  :isShowDot= false\`, \`  :value="\${args.value}"\`, \`  :limit="\${args.limit}"\`, \`  className="\${args.className}"\`, '>', '  <Icon name="SvgNotification" size="26"></Icon>', '</Badge>', '<Badge', \`  themeColor="warning"\`, \`  :isShowDot= false\`, \`  :value="\${args.value}"\`, \`  :limit="\${args.limit}"\`, \`  className="\${args.className}"\`, '>', '  <Icon name="SvgNotification" size="26"></Icon>', '</Badge>', '<Badge', \`  themeColor="error"\`, \`  :isShowDot= false\`, \`  :value="\${args.value}"\`, \`  :limit="\${args.limit}"\`, \`  className="\${args.className}"\`, '>', '  <Icon name="SvgNotification" size="26"></Icon>', '</Badge>'].join('\\n').trim();
        }
      }
    }
  }
}`,...(f=(B=r.parameters)==null?void 0:B.docs)==null?void 0:f.source}}};const y=["BadgeDefault","BadgeStyle","BadgeLimit","BadgeThemeColor"];export{i as BadgeDefault,l as BadgeLimit,t as BadgeStyle,r as BadgeThemeColor,y as __namedExportsOrder,z as default};

import{_ as a}from"./Badge-BW2kV792.js";import{_ as i}from"./Icon-D-NDJAD3.js";import"./vue.esm-bundler-C8tbd0VY.js";import"./iframe-CrLK0dA1.js";import"../sb-preview/runtime.js";const y={title:"Component/Badge",component:a,components:{Icon:i},tags:["autodocs"],argTypes:{themeColor:{description:"主題顏色",control:{type:"select"},options:["primary","secondary","neutral","info","success","warning","error"],table:{type:{summary:"primary | secondary | neutral | info | success | warning | error"}}},isShowDot:{description:"是否顯示圓點",control:{type:"boolean"}},value:{description:"數值",control:{type:"number"}},limit:{description:"數值上限",control:{type:"number"}},className:{description:"客製化樣式",control:{type:"text"}},default:{description:"圖標插槽",table:{type:{summary:"Vue Component | HTML"}},control:!1}},parameters:{docs:{title:"Badge",description:{component:"Badge 組件的呈現及說明。"}}}},t={name:"預設項目",args:{themeColor:"error",isShowDot:!1,value:100,limit:99,className:""},render:o=>({components:{Badge:a,Icon:i},setup(){return{args:o}},template:`
            <Badge 
                :themeColor="args.themeColor"
                :isShowDot="args.isShowDot"
                :value="args.value"
                :limit="args.limit"
                :className="args.className"
            >   
                <Icon name="notification" size="26"></Icon>
            </Badge>
        `}),parameters:{controls:{},docs:{source:{transform:(o,n)=>{const{args:e}=n;return["<Badge",`  themeColor="${e.themeColor}"`,`  isShowDot="${e.isShowDot}"`,`  :value="${e.value}"`,`  :limit="${e.limit}"`,`  className="${e.className}"`,">",'  <Icon name="notification" size="26"></Icon>',"</Badge>"].join(`
`).trim()}}}}},r={name:"類型選擇",args:{themeColor:"error",isShowDot:!1,value:999,limit:99},render:o=>({components:{Badge:a,Icon:i},setup(){return{args:o}},template:`
            <div style="display:flex; gap:24px;">
                <Badge
                    :themeColor="args.themeColor"
                    :isShowDot= true
                    :value="args.value"
                    :limit="args.limit"
                >
                    <Icon name="notification" size="26"></Icon>
                </Badge>
                <Badge
                    :themeColor="args.themeColor"
                    :isShowDot= false
                    :value="args.value"
                    :limit="args.limit"
                >
                    <Icon name="notification" size="26"></Icon>
                </Badge>
            </div>
        `}),parameters:{controls:{exclude:["isDot"]},docs:{source:{transform:(o,n)=>{const{args:e}=n;return["<Badge",`  themeColor="${e.themeColor}"`,"  :isShowDot= true",`  :value="${e.value}"`,`  :limit="${e.limit}"`,">",'  <Icon name="notification" size="26"></Icon>',"</Badge>","<Badge",`  themeColor="${e.themeColor}"`,"  :isShowDot= false",`  :value="${e.value}"`,`  :limit="${e.limit}"`,">",'  <Icon name="notification" size="26"></Icon>',"</Badge>"].join(`
`).trim()}}}}},s={name:"最大值設定",args:{themeColor:"error",isShowDot:!1,value:999,limit:99},render:o=>({components:{Badge:a,Icon:i},setup(){return{args:o}},template:`
            <div style="display:flex; gap:60px; margin-bottom: 24px;">
                <Badge
                    :themeColor="args.themeColor"
                    :isShowDot="args.isShowDot"
                    :value="98"
                    :limit="99"
                >
                    <Icon name="notification" size="26"></Icon>
                </Badge>
                <Badge
                    :themeColor="args.themeColor"
                    :isShowDot="args.isShowDot"
                    :value="100"
                    :limit="99"
                >
                    <Icon name="notification" size="26"></Icon>
                </Badge>
            </div>
        `}),parameters:{controls:{},docs:{source:{transform:(o,n)=>{const{args:e}=n;return["<Badge",`  :themeColor="${e.themeColor}"`,"  :isShowDot= false",'  :value="98"','  :limit="99"',">",'  <Icon name="notification" size="26"></Icon>',"</Badge>","<Badge",`  :themeColor="${e.themeColor}"`,"  :isShowDot= false",'  :value="100"','  :limit="99"',">",'  <Icon name="notification" size="26"></Icon>',"</Badge>"].join(`
`).trim()}}}}},l={name:"顏色設定",args:{themeColor:"error",isShowDot:!1,value:999,limit:99},render:o=>({components:{Badge:a,Icon:i},setup(){return{args:o}},template:`
            <div style="display:flex; gap:56px; margin-bottom: 24px;">
                <Badge
                    themeColor="primary"
                    :isShowDot= true
                    :value="args.value"
                    :limit="args.limit"
                >
                    <Icon name="notification" size="26"></Icon>
                </Badge>
                <Badge
                    themeColor="secondary"
                    :isShowDot= true
                    :value="args.value"
                    :limit="args.limit"
                >
                    <Icon name="notification" size="26"></Icon>
                </Badge>
                <Badge
                    themeColor="neutral"
                    :isShowDot= true
                    :value="args.value"
                    :limit="args.limit"
                >
                    <Icon name="notification" size="26"></Icon>
                </Badge>
                <Badge
                    themeColor="info"
                    :isShowDot= true
                    :value="args.value"
                    :limit="args.limit"
                >
                    <Icon name="notification" size="26"></Icon>
                </Badge>
                <Badge
                    themeColor="success"
                    :isShowDot= true
                    :value="args.value"
                    :limit="args.limit"
                >
                    <Icon name="notification" size="26"></Icon>
                </Badge>
                <Badge
                    themeColor="warning"
                    :isShowDot= true
                    :value="args.value"
                    :limit="args.limit"
                >
                    <Icon name="notification" size="26"></Icon>
                </Badge>
                <Badge
                    themeColor="error"
                    :isShowDot= true
                    :value="args.value"
                    :limit="args.limit"
                >
                    <Icon name="notification" size="26"></Icon>
                </Badge>
            </div>
            <div style="display:flex; gap:56px">
                <Badge
                    themeColor="primary"
                    :isShowDot= false
                    :value="args.value"
                    :limit="args.limit"
                >
                    <Icon name="notification" size="26"></Icon>
                </Badge>
                <Badge
                    themeColor="secondary"
                    :isShowDot= false
                    :value="args.value"
                    :limit="args.limit"
                >
                    <Icon name="notification" size="26"></Icon>
                </Badge>
                <Badge
                    themeColor="neutral"
                    :isShowDot= false
                    :value="args.value"
                    :limit="args.limit"
                >
                    <Icon name="notification" size="26"></Icon>
                </Badge>
                <Badge
                    themeColor="info"
                    :isShowDot= false
                    :value="args.value"
                    :limit="args.limit"
                >
                    <Icon name="notification" size="26"></Icon>
                </Badge>
                <Badge
                    themeColor="success"
                    :isShowDot= false
                    :value="args.value"
                    :limit="args.limit"
                >
                    <Icon name="notification" size="26"></Icon>
                </Badge>
                <Badge
                    themeColor="warning"
                    :isShowDot= false
                    :value="args.value"
                    :limit="args.limit"
                >
                    <Icon name="notification" size="26"></Icon>
                </Badge>
                <Badge
                    themeColor="error"
                    :isShowDot= false
                    :value="args.value"
                    :limit="args.limit"
                >
                    <Icon name="notification" size="26"></Icon>
                </Badge>
            </div>
        `}),parameters:{controls:{exclude:["isDot","themeColor"]},docs:{source:{transform:(o,n)=>{const{args:e}=n;return["<Badge",'  themeColor="primary"',"  :isShowDot= true",`  :value="${e.value}"`,`  :limit="${e.limit}"`,">",'  <Icon name="notification" size="26"></Icon>',"</Badge>","<Badge",'  themeColor="secondary"',"  :isShowDot= true",`  :value="${e.value}"`,`  :limit="${e.limit}"`,">",'  <Icon name="notification" size="26"></Icon>',"</Badge>","<Badge",'  themeColor="neutral"',"  :isShowDot= true",`  :value="${e.value}"`,`  :limit="${e.limit}"`,">",'  <Icon name="notification" size="26"></Icon>',"</Badge>","<Badge",'  themeColor="info"',"  :isShowDot= true",`  :value="${e.value}"`,`  :limit="${e.limit}"`,">",'  <Icon name="notification" size="26"></Icon>',"</Badge>","<Badge",'  themeColor="success"',"  :isShowDot= true",`  :value="${e.value}"`,`  :limit="${e.limit}"`,">",'  <Icon name="notification" size="26"></Icon>',"</Badge>","<Badge",'  themeColor="warning"',"  :isShowDot= true",`  :value="${e.value}"`,`  :limit="${e.limit}"`,">",'  <Icon name="notification" size="26"></Icon>',"</Badge>","<Badge",'  themeColor="error"',"  :isShowDot= true",`  :value="${e.value}"`,`  :limit="${e.limit}"`,">",'  <Icon name="notification" size="26"></Icon>',"</Badge>","<Badge",'  themeColor="primary"',"  :isShowDot= false",`  :value="${e.value}"`,`  :limit="${e.limit}"`,">",'  <Icon name="notification" size="26"></Icon>',"</Badge>","<Badge",'  themeColor="secondary"',"  :isShowDot= false",`  :value="${e.value}"`,`  :limit="${e.limit}"`,">",'  <Icon name="notification" size="26"></Icon>',"</Badge>","<Badge",'  themeColor="neutral"',"  :isShowDot= false",`  :value="${e.value}"`,`  :limit="${e.limit}"`,">",'  <Icon name="notification" size="26"></Icon>',"</Badge>","<Badge",'  themeColor="info"',"  :isShowDot= false",`  :value="${e.value}"`,`  :limit="${e.limit}"`,">",'  <Icon name="notification" size="26"></Icon>',"</Badge>","<Badge",'  themeColor="success"',"  :isShowDot= false",`  :value="${e.value}"`,`  :limit="${e.limit}"`,">",'  <Icon name="notification" size="26"></Icon>',"</Badge>","<Badge",'  themeColor="warning"',"  :isShowDot= false",`  :value="${e.value}"`,`  :limit="${e.limit}"`,">",'  <Icon name="notification" size="26"></Icon>',"</Badge>","<Badge",'  themeColor="error"',"  :isShowDot= false",`  :value="${e.value}"`,`  :limit="${e.limit}"`,">",'  <Icon name="notification" size="26"></Icon>',"</Badge>"].join(`
`).trim()}}}}};var m,c,g;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: "預設項目",
  args: {
    themeColor: "error",
    isShowDot: false,
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
                :isShowDot="args.isShowDot"
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
          return ['<Badge', \`  themeColor="\${args.themeColor}"\`, \`  isShowDot="\${args.isShowDot}"\`, \`  :value="\${args.value}"\`, \`  :limit="\${args.limit}"\`, \`  className="\${args.className}"\`, '>', '  <Icon name="notification" size="26"></Icon>', '</Badge>'].join('\\n').trim();
        }
      }
    }
  }
}`,...(g=(c=t.parameters)==null?void 0:c.docs)==null?void 0:g.source}}};var u,d,h;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  name: "類型選擇",
  args: {
    themeColor: "error",
    isShowDot: false,
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
                    :isShowDot= true
                    :value="args.value"
                    :limit="args.limit"
                >
                    <Icon name="notification" size="26"></Icon>
                </Badge>
                <Badge
                    :themeColor="args.themeColor"
                    :isShowDot= false
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
          return ['<Badge', \`  themeColor="\${args.themeColor}"\`, \`  :isShowDot= true\`, \`  :value="\${args.value}"\`, \`  :limit="\${args.limit}"\`, '>', '  <Icon name="notification" size="26"></Icon>', '</Badge>', '<Badge', \`  themeColor="\${args.themeColor}"\`, \`  :isShowDot= false\`, \`  :value="\${args.value}"\`, \`  :limit="\${args.limit}"\`, '>', '  <Icon name="notification" size="26"></Icon>', '</Badge>'].join('\\n').trim();
        }
      }
    }
  }
}`,...(h=(d=r.parameters)==null?void 0:d.docs)==null?void 0:h.source}}};var v,B,I;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`{
  name: "最大值設定",
  args: {
    themeColor: "error",
    isShowDot: false,
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
                    :isShowDot="args.isShowDot"
                    :value="98"
                    :limit="99"
                >
                    <Icon name="notification" size="26"></Icon>
                </Badge>
                <Badge
                    :themeColor="args.themeColor"
                    :isShowDot="args.isShowDot"
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
          return ['<Badge', \`  :themeColor="\${args.themeColor}"\`, \`  :isShowDot= false\`, \`  :value="98"\`, \`  :limit="99"\`, '>', '  <Icon name="notification" size="26"></Icon>', '</Badge>', '<Badge', \`  :themeColor="\${args.themeColor}"\`, \`  :isShowDot= false\`, \`  :value="100"\`, \`  :limit="99"\`, '>', '  <Icon name="notification" size="26"></Icon>', '</Badge>'].join('\\n').trim();
        }
      }
    }
  }
}`,...(I=(B=s.parameters)==null?void 0:B.docs)==null?void 0:I.source}}};var f,C,p;l.parameters={...l.parameters,docs:{...(f=l.parameters)==null?void 0:f.docs,source:{originalSource:`{
  name: "顏色設定",
  args: {
    themeColor: "error",
    isShowDot: false,
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
                    :isShowDot= true
                    :value="args.value"
                    :limit="args.limit"
                >
                    <Icon name="notification" size="26"></Icon>
                </Badge>
                <Badge
                    themeColor="secondary"
                    :isShowDot= true
                    :value="args.value"
                    :limit="args.limit"
                >
                    <Icon name="notification" size="26"></Icon>
                </Badge>
                <Badge
                    themeColor="neutral"
                    :isShowDot= true
                    :value="args.value"
                    :limit="args.limit"
                >
                    <Icon name="notification" size="26"></Icon>
                </Badge>
                <Badge
                    themeColor="info"
                    :isShowDot= true
                    :value="args.value"
                    :limit="args.limit"
                >
                    <Icon name="notification" size="26"></Icon>
                </Badge>
                <Badge
                    themeColor="success"
                    :isShowDot= true
                    :value="args.value"
                    :limit="args.limit"
                >
                    <Icon name="notification" size="26"></Icon>
                </Badge>
                <Badge
                    themeColor="warning"
                    :isShowDot= true
                    :value="args.value"
                    :limit="args.limit"
                >
                    <Icon name="notification" size="26"></Icon>
                </Badge>
                <Badge
                    themeColor="error"
                    :isShowDot= true
                    :value="args.value"
                    :limit="args.limit"
                >
                    <Icon name="notification" size="26"></Icon>
                </Badge>
            </div>
            <div style="display:flex; gap:56px">
                <Badge
                    themeColor="primary"
                    :isShowDot= false
                    :value="args.value"
                    :limit="args.limit"
                >
                    <Icon name="notification" size="26"></Icon>
                </Badge>
                <Badge
                    themeColor="secondary"
                    :isShowDot= false
                    :value="args.value"
                    :limit="args.limit"
                >
                    <Icon name="notification" size="26"></Icon>
                </Badge>
                <Badge
                    themeColor="neutral"
                    :isShowDot= false
                    :value="args.value"
                    :limit="args.limit"
                >
                    <Icon name="notification" size="26"></Icon>
                </Badge>
                <Badge
                    themeColor="info"
                    :isShowDot= false
                    :value="args.value"
                    :limit="args.limit"
                >
                    <Icon name="notification" size="26"></Icon>
                </Badge>
                <Badge
                    themeColor="success"
                    :isShowDot= false
                    :value="args.value"
                    :limit="args.limit"
                >
                    <Icon name="notification" size="26"></Icon>
                </Badge>
                <Badge
                    themeColor="warning"
                    :isShowDot= false
                    :value="args.value"
                    :limit="args.limit"
                >
                    <Icon name="notification" size="26"></Icon>
                </Badge>
                <Badge
                    themeColor="error"
                    :isShowDot= false
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
          return ['<Badge', \`  themeColor="primary"\`, \`  :isShowDot= true\`, \`  :value="\${args.value}"\`, \`  :limit="\${args.limit}"\`, '>', '  <Icon name="notification" size="26"></Icon>', '</Badge>', '<Badge', \`  themeColor="secondary"\`, \`  :isShowDot= true\`, \`  :value="\${args.value}"\`, \`  :limit="\${args.limit}"\`, '>', '  <Icon name="notification" size="26"></Icon>', '</Badge>', '<Badge', \`  themeColor="neutral"\`, \`  :isShowDot= true\`, \`  :value="\${args.value}"\`, \`  :limit="\${args.limit}"\`, '>', '  <Icon name="notification" size="26"></Icon>', '</Badge>', '<Badge', \`  themeColor="info"\`, \`  :isShowDot= true\`, \`  :value="\${args.value}"\`, \`  :limit="\${args.limit}"\`, '>', '  <Icon name="notification" size="26"></Icon>', '</Badge>', '<Badge', \`  themeColor="success"\`, \`  :isShowDot= true\`, \`  :value="\${args.value}"\`, \`  :limit="\${args.limit}"\`, '>', '  <Icon name="notification" size="26"></Icon>', '</Badge>', '<Badge', \`  themeColor="warning"\`, \`  :isShowDot= true\`, \`  :value="\${args.value}"\`, \`  :limit="\${args.limit}"\`, '>', '  <Icon name="notification" size="26"></Icon>', '</Badge>', '<Badge', \`  themeColor="error"\`, \`  :isShowDot= true\`, \`  :value="\${args.value}"\`, \`  :limit="\${args.limit}"\`, '>', '  <Icon name="notification" size="26"></Icon>', '</Badge>', '<Badge', \`  themeColor="primary"\`, \`  :isShowDot= false\`, \`  :value="\${args.value}"\`, \`  :limit="\${args.limit}"\`, '>', '  <Icon name="notification" size="26"></Icon>', '</Badge>', '<Badge', \`  themeColor="secondary"\`, \`  :isShowDot= false\`, \`  :value="\${args.value}"\`, \`  :limit="\${args.limit}"\`, '>', '  <Icon name="notification" size="26"></Icon>', '</Badge>', '<Badge', \`  themeColor="neutral"\`, \`  :isShowDot= false\`, \`  :value="\${args.value}"\`, \`  :limit="\${args.limit}"\`, '>', '  <Icon name="notification" size="26"></Icon>', '</Badge>', '<Badge', \`  themeColor="info"\`, \`  :isShowDot= false\`, \`  :value="\${args.value}"\`, \`  :limit="\${args.limit}"\`, '>', '  <Icon name="notification" size="26"></Icon>', '</Badge>', '<Badge', \`  themeColor="success"\`, \`  :isShowDot= false\`, \`  :value="\${args.value}"\`, \`  :limit="\${args.limit}"\`, '>', '  <Icon name="notification" size="26"></Icon>', '</Badge>', '<Badge', \`  themeColor="warning"\`, \`  :isShowDot= false\`, \`  :value="\${args.value}"\`, \`  :limit="\${args.limit}"\`, '>', '  <Icon name="notification" size="26"></Icon>', '</Badge>', '<Badge', \`  themeColor="error"\`, \`  :isShowDot= false\`, \`  :value="\${args.value}"\`, \`  :limit="\${args.limit}"\`, '>', '  <Icon name="notification" size="26"></Icon>', '</Badge>'].join('\\n').trim();
        }
      }
    }
  }
}`,...(p=(C=l.parameters)==null?void 0:C.docs)==null?void 0:p.source}}};const x=["BadgeDefault","BadgeStyle","BadgeLimit","BadgeThemeColor"];export{t as BadgeDefault,s as BadgeLimit,r as BadgeStyle,l as BadgeThemeColor,x as __namedExportsOrder,y as default};

import{e as x,c as m,r as b,d as u,t as N,b as g,n as d,o as c}from"./vue.esm-bundler-g0-RGFhA.js";import{_ as i}from"./Icon-oWgtPCWQ.js";import"./iframe-DQf1NVVc.js";import"../sb-preview/runtime.js";const _={key:0,class:"ded-badge-content"},A={class:"ded-badge-content-text"},E={key:0,class:"ded-badge-content-text"},n={__name:"Badge",props:{themeColor:{type:String,default:"error",validator:a=>["primary","secondary","neutral","info","success","warning","error"].includes(a)},isShowDot:{type:Boolean,default:"false"},value:{type:Number,default:0},limit:{type:Number,default:0},className:{type:String,default:""}},setup(a){const o=a,e=x(()=>o.value>o.limit&&o.value>o.limit?o.limit:o.value);return(y,V)=>(c(),m("div",{class:d({"ded-badge-container":!0,[o.className]:!!o.className})},[b(y.$slots,"default"),u("div",{class:d(["ded-badge",[`ded-badge-color-${o.themeColor}`,o.isShowDot?"ded-badge-dot":""]])},[o.isShowDot===!1&&o.value>0?(c(),m("div",_,[u("span",A,N(e.value),1),o.value>o.limit?(c(),m("span",E,"+")):g("",!0)])):g("",!0)],2)],2))}};n.__docgenInfo={exportName:"default",displayName:"Badge",description:"",tags:{},props:[{name:"themeColor",type:{name:"string"},defaultValue:{func:!1,value:'"error"'},values:["primary","secondary","neutral","info","success","warning","error"]},{name:"isShowDot",type:{name:"boolean"},defaultValue:{func:!1,value:'"false"'}},{name:"value",type:{name:"number"},defaultValue:{func:!1,value:"0"}},{name:"limit",type:{name:"number"},defaultValue:{func:!1,value:"0"}},{name:"className",type:{name:"string"},defaultValue:{func:!1,value:'""'}}],slots:[{name:"default"}],sourceFiles:["/Users/auouser/Desktop/Work_Space/DED-WDS_VUE/libs/src/ui/element/Badge/Badge.vue"]};const L={title:"Component/Badge",component:n,components:{Icon:i},tags:["autodocs"],argTypes:{themeColor:{description:"主題顏色",control:{type:"select"},options:["primary","secondary","neutral","info","success","warning","error"],table:{type:{summary:"primary | secondary | neutral | info | success | warning | error"}}},isShowDot:{description:"是否顯示圓點",control:{type:"boolean"}},value:{description:"數值",control:{type:"number"}},limit:{description:"數值上限",control:{type:"number"}},className:{description:"客製化樣式",control:{type:"text"}},default:{description:"圖標插槽",table:{type:{summary:"Vue Component | HTML"}},control:!1}},parameters:{docs:{title:"Badge",description:{component:"Badge 組件的呈現及說明。"}}}},t={name:"預設項目",args:{themeColor:"error",isShowDot:!1,value:100,limit:99,className:""},render:a=>({components:{Badge:n,Icon:i},setup(){return{args:a}},template:`
            <Badge 
                :themeColor="args.themeColor"
                :isShowDot="args.isShowDot"
                :value="args.value"
                :limit="args.limit"
                :className="args.className"
            >   
                <Icon name="notification" size="26"></Icon>
            </Badge>
        `}),parameters:{controls:{},docs:{source:{transform:(a,o)=>{const{args:e}=o;return["<Badge",`  themeColor="${e.themeColor}"`,`  isShowDot="${e.isShowDot}"`,`  :value="${e.value}"`,`  :limit="${e.limit}"`,`  className="${e.className}"`,">",'  <Icon name="notification" size="26"></Icon>',"</Badge>"].join(`
`).trim()}}}}},s={name:"類型選擇",args:{themeColor:"error",isShowDot:!1,value:999,limit:99},render:a=>({components:{Badge:n,Icon:i},setup(){return{args:a}},template:`
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
        `}),parameters:{controls:{exclude:["isDot"]},docs:{source:{transform:(a,o)=>{const{args:e}=o;return["<Badge",`  themeColor="${e.themeColor}"`,"  :isShowDot= true",`  :value="${e.value}"`,`  :limit="${e.limit}"`,">",'  <Icon name="notification" size="26"></Icon>',"</Badge>","<Badge",`  themeColor="${e.themeColor}"`,"  :isShowDot= false",`  :value="${e.value}"`,`  :limit="${e.limit}"`,">",'  <Icon name="notification" size="26"></Icon>',"</Badge>"].join(`
`).trim()}}}}},r={name:"最大值設定",args:{themeColor:"error",isShowDot:!1,value:999,limit:99},render:a=>({components:{Badge:n,Icon:i},setup(){return{args:a}},template:`
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
        `}),parameters:{controls:{},docs:{source:{transform:(a,o)=>{const{args:e}=o;return["<Badge",`  :themeColor="${e.themeColor}"`,"  :isShowDot= false",'  :value="98"','  :limit="99"',">",'  <Icon name="notification" size="26"></Icon>',"</Badge>","<Badge",`  :themeColor="${e.themeColor}"`,"  :isShowDot= false",'  :value="100"','  :limit="99"',">",'  <Icon name="notification" size="26"></Icon>',"</Badge>"].join(`
`).trim()}}}}},l={name:"顏色設定",args:{themeColor:"error",isShowDot:!1,value:999,limit:99},render:a=>({components:{Badge:n,Icon:i},setup(){return{args:a}},template:`
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
        `}),parameters:{controls:{exclude:["isDot","themeColor"]},docs:{source:{transform:(a,o)=>{const{args:e}=o;return["<Badge",'  themeColor="primary"',"  :isShowDot= true",`  :value="${e.value}"`,`  :limit="${e.limit}"`,">",'  <Icon name="notification" size="26"></Icon>',"</Badge>","<Badge",'  themeColor="secondary"',"  :isShowDot= true",`  :value="${e.value}"`,`  :limit="${e.limit}"`,">",'  <Icon name="notification" size="26"></Icon>',"</Badge>","<Badge",'  themeColor="neutral"',"  :isShowDot= true",`  :value="${e.value}"`,`  :limit="${e.limit}"`,">",'  <Icon name="notification" size="26"></Icon>',"</Badge>","<Badge",'  themeColor="info"',"  :isShowDot= true",`  :value="${e.value}"`,`  :limit="${e.limit}"`,">",'  <Icon name="notification" size="26"></Icon>',"</Badge>","<Badge",'  themeColor="success"',"  :isShowDot= true",`  :value="${e.value}"`,`  :limit="${e.limit}"`,">",'  <Icon name="notification" size="26"></Icon>',"</Badge>","<Badge",'  themeColor="warning"',"  :isShowDot= true",`  :value="${e.value}"`,`  :limit="${e.limit}"`,">",'  <Icon name="notification" size="26"></Icon>',"</Badge>","<Badge",'  themeColor="error"',"  :isShowDot= true",`  :value="${e.value}"`,`  :limit="${e.limit}"`,">",'  <Icon name="notification" size="26"></Icon>',"</Badge>","<Badge",'  themeColor="primary"',"  :isShowDot= false",`  :value="${e.value}"`,`  :limit="${e.limit}"`,">",'  <Icon name="notification" size="26"></Icon>',"</Badge>","<Badge",'  themeColor="secondary"',"  :isShowDot= false",`  :value="${e.value}"`,`  :limit="${e.limit}"`,">",'  <Icon name="notification" size="26"></Icon>',"</Badge>","<Badge",'  themeColor="neutral"',"  :isShowDot= false",`  :value="${e.value}"`,`  :limit="${e.limit}"`,">",'  <Icon name="notification" size="26"></Icon>',"</Badge>","<Badge",'  themeColor="info"',"  :isShowDot= false",`  :value="${e.value}"`,`  :limit="${e.limit}"`,">",'  <Icon name="notification" size="26"></Icon>',"</Badge>","<Badge",'  themeColor="success"',"  :isShowDot= false",`  :value="${e.value}"`,`  :limit="${e.limit}"`,">",'  <Icon name="notification" size="26"></Icon>',"</Badge>","<Badge",'  themeColor="warning"',"  :isShowDot= false",`  :value="${e.value}"`,`  :limit="${e.limit}"`,">",'  <Icon name="notification" size="26"></Icon>',"</Badge>","<Badge",'  themeColor="error"',"  :isShowDot= false",`  :value="${e.value}"`,`  :limit="${e.limit}"`,">",'  <Icon name="notification" size="26"></Icon>',"</Badge>"].join(`
`).trim()}}}}};var h,v,f;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(f=(v=t.parameters)==null?void 0:v.docs)==null?void 0:f.source}}};var B,I,p;s.parameters={...s.parameters,docs:{...(B=s.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(p=(I=s.parameters)==null?void 0:I.docs)==null?void 0:p.source}}};var C,D,w;r.parameters={...r.parameters,docs:{...(C=r.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(w=(D=r.parameters)==null?void 0:D.docs)==null?void 0:w.source}}};var S,$,z;l.parameters={...l.parameters,docs:{...(S=l.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(z=($=l.parameters)==null?void 0:$.docs)==null?void 0:z.source}}};const U=["BadgeDefault","BadgeStyle","BadgeLimit","BadgeThemeColor"];export{t as BadgeDefault,r as BadgeLimit,s as BadgeStyle,l as BadgeThemeColor,U as __namedExportsOrder,L as default};

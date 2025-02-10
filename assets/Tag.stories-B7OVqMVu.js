import{g as V,c as n,b as d,e as m,f as p,t as u,l as F,n as k,o as r,r as b}from"./vue.esm-bundler-Db4pcR2I.js";import{_ as h}from"./Icon-DbRQxRx8.js";import"./iframe-G7TsRw4U.js";import"../sb-preview/runtime.js";const j=["href"],B={key:0,class:"ded-tag-icon"},P={key:1,class:"ded-tag-text"},O={key:0,class:"ded-tag-icon"},o={__name:"Tag",props:{themeColor:{type:String,validator:l=>["primary","secondary","neutral","info","success","warning","error"].includes(l)},variable:{type:String,validator:l=>["filled","ghost"].includes(l)},label:{type:String,required:!0},href:{type:String,default:""},prefix:{type:String},closable:{type:Boolean,default:!0},isDisabled:{type:Boolean,default:!1},className:{type:String,default:""}},emits:["onClose"],setup(l,{emit:s}){const e=s,a=l,f=()=>{a.isDisabled||e("onClose")},E=V(()=>{try{return!!a.href&&new URL(a.href)}catch{return!1}});return(q,I)=>(r(),n("div",{class:k(["ded-tag",{[`ded-tag-${a.variable}`]:a.variable},{[`ded-tag-${a.variable}-${a.themeColor}`]:a.variable&&a.themeColor&&!a.isDisabled},{[`ded-tag-${a.variable}-disabled`]:a.isDisabled},a.className&&a.className.split(" ")])},[a.href&&E.value?(r(),n("a",{key:0,href:a.href,class:"ded-tag-text"},[a.prefix?(r(),n("span",B,[d(h,{name:a.prefix},null,8,["name"])])):m("",!0),p(" "+u(a.label),1)],8,j)):(r(),n("div",P,[a.prefix?(r(),n("span",O,[d(h,{name:a.prefix},null,8,["name"])])):m("",!0),p(" "+u(a.label),1)])),a.closable?(r(),F(h,{key:2,name:"SvgClose",class:"ded-tag-close",onClick:f})):m("",!0)],2))}};o.__docgenInfo={exportName:"default",displayName:"Tag",description:"",tags:{},props:[{name:"themeColor",type:{name:"string"},values:["primary","secondary","neutral","info","success","warning","error"]},{name:"variable",type:{name:"string"},values:["filled","ghost"]},{name:"label",type:{name:"string"},required:!0},{name:"href",type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"prefix",type:{name:"string"}},{name:"closable",type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"isDisabled",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"className",type:{name:"string"},defaultValue:{func:!1,value:'""'}}],events:[{name:"onClose"}],sourceFiles:["D:/98_測試/up/DED-WDS_VUE/libs/src/ui/element/Tag/Tag.vue"]};const H={title:"Component/Tag",component:o,tags:["autodocs"],argTypes:{themeColor:{description:"主題顏色",control:{type:"select"},options:["primary","secondary","neutral","info","success","warning","error"],table:{type:{summary:"primary | secondary | neutral | info | success | warning | error "}}},variable:{description:"變數",required:!0,control:{type:"select"},options:["filled","ghost"],table:{type:{summary:"filled | ghost "}}},label:{description:"標籤文字",control:{type:"text"}},href:{description:"超連結",control:{type:"text"}},prefix:{description:"圖示",control:{type:"select",labels:{"":"none",SvgAccount:"SvgAccount",SvgSearch:"SvgSearch",SvgVisibility:"SvgVisibility",SvgVisibilityOff:"SvgVisibilityOff"}},options:["","SvgAccount","SvgSearch","SvgVisibility","SvgVisibilityOff"]},closable:{description:"摸到時顯示關閉",control:{type:"boolean"}},isDisabled:{description:"是否禁用",control:{type:"boolean"}},className:{description:"客製化樣式",control:{type:"text"}},onClose:{description:"關閉事件"}},parameters:{docs:{title:"Tag",description:{component:"標籤組件的呈現及說明。"}}}},i={name:"預設項目",args:{themeColor:"primary",variable:"filled",label:"Tag",href:"",prefix:"",closable:!0,isDisabled:!1,className:""},render:l=>({components:{Tag:o},setup(){const s=b(!0);return{args:l,showTag:s}},template:`
            <Tag 
                v-if="showTag"
                 :themeColor="args.themeColor"
                 :variable="args.variable"
                 :label="args.label"
                 :href="args.href"
                 :prefix="args.prefix"
                 :closable="args.closable"
                 :isDisabled="args.isDisabled"
                 :className="args.className"
                 @onClose="() => showTag = false">
            </Tag>
        `}),parameters:{controls:{},docs:{source:{transform:(l,s)=>{const{args:e}=s;return["<Tag",'  v-if="showTag"',`  themeColor="${e.themeColor}"`,`  variable="${e.variable}"`,`  label="${e.label}"`,`  href="${e.href}"`,`  prefix="${e.prefix}"`,`  :closable="${e.closable}"`,`  :isDisabled="${e.isDisabled}"`,`  className="${e.className}"`,'  @onClose="() => showTag = false">',"</Tag>"].join(`
`).trim()}}}}},t={name:"附加元素",args:{themeColor:"primary",variable:"filled",label:"Tag",href:"",prefix:"SvgAccount",closable:!0,isDisabled:!1,className:""},render:l=>({components:{Tag:o},setup(){const s=b(!0);return{args:l,showTag:s}},template:`
            <Tag 
                v-if="showTag"
                 :themeColor="args.themeColor"
                 :variable="args.variable"
                 :label="args.label"
                 :href="args.href"
                 :prefix="args.prefix"
                 :closable="args.closable"
                 :isDisabled="args.isDisabled"
                 :className="args.className"
                 @onClose="() => showTag = false">
            </Tag>
        `}),parameters:{controls:{},docs:{source:{transform:(l,s)=>{const{args:e}=s;return["<Tag",'  v-if="showTag"',`  themeColor="${e.themeColor}"`,`  variable="${e.variable}"`,`  label="${e.label}"`,`  href="${e.href}"`,`  prefix="${e.prefix}"`,`  :closable="${e.closable}"`,`  :isDisabled="${e.isDisabled}"`,`  className="${e.className}"`,'  @onClose="() => showTag = false">',"</Tag>"].join(`
`).trim()}}}}},g={name:"外觀樣式",args:{themeColor:"primary",variable:"",label:"Primary",href:"",prefix:"",closable:!0,isDisabled:!1,className:""},render:l=>({components:{Tag:o},setup(){const s=b(!0);return{args:l,showTag:s}},template:`
            <div style="display:flex; gap: 8px; flex-wrap: wrap">
                <Tag
                    v-if="showTag"
                    :themeColor="args.themeColor"
                    variable="filled"
                    :label="args.label"
                    :href="args.href"
                    :prefix="args.prefix"
                    :closable="args.closable"
                    :isDisabled="args.isDisabled"
                    :className="args.className"
                    @onClose="() => showTag = false">
                </Tag>
                <Tag
                    v-if="showTag"
                    :themeColor="args.themeColor"
                    variable="ghost"
                    :label="args.label"
                    :href="args.href"
                    :prefix="args.prefix"
                    :closable="args.closable"
                    :isDisabled="args.isDisabled"
                    :className="args.className"
                    @onClose="() => showTag = false">
                </Tag>
            </div>
        `}),parameters:{controls:{},docs:{source:{transform:(l,s)=>{const{args:e}=s;return["<Tag",'  v-if="showTag"',`  themeColor="${e.themeColor}"`,'  variable="filled"',`  label="${e.label}"`,`  href="${e.href}"`,`  prefix="${e.prefix}"`,`  :closable="${e.closable}"`,`  :isDisabled="${e.isDisabled}"`,`  className="${e.className}"`,'  @onClose="() => showTag = false">',"</Tag>","<Tag",'  v-if="showTag"',`  themeColor="${e.themeColor}"`,'  variable="ghost"',`  label="${e.label}"`,`  href="${e.href}"`,`  prefix="${e.prefix}"`,`  :closable="${e.closable}"`,`  :isDisabled="${e.isDisabled}"`,`  className="${e.className}"`,'  @onClose="() => showTag = false">',"</Tag>"].join(`
`).trim()}}}}},c={name:"主題色彩",args:{variable:"filled",prefix:"",closable:!0,isDisabled:!1,className:""},render:l=>({components:{Tag:o},setup(){const s=b([{id:1,themeColor:"primary",label:"Primary"},{id:2,themeColor:"secondary",label:"Secondary"},{id:3,themeColor:"neutral",label:"Neutral"},{id:4,themeColor:"info",label:"Info"},{id:5,themeColor:"success",label:"Success"},{id:6,themeColor:"warning",label:"Warning"},{id:7,themeColor:"error",label:"Error"}]);return{args:l,tagsData:s,removeTag:a=>{s.value=s.value.filter(f=>f.id!==a)}}},template:`
            <div style="display:flex; gap: 8px; flex-wrap: wrap">
                <Tag v-for="tag in tagsData"
                     :key="tag.id"
                     :themeColor="tag.themeColor"
                     :variable="args.variable"
                     :label="tag.label"
                     :prefix="args.prefix"
                     :closable="args.closable"
                     :isDisabled="args.isDisabled"
                     :className="args.className"
                     @onClose="removeTag(tag.id)"
                >
                </Tag>
            </div>
        `}),parameters:{controls:{},docs:{source:{transform:(l,s)=>{const{args:e}=s;return["<Tag",'  v-if="showTag"','  themeColor="primary"',`  variable="${e.variable}"`,`  label="${e.label}"`,`  href="${e.href}"`,`  prefix="${e.prefix}"`,`  :closable="${e.closable}"`,`  :isDisabled="${e.isDisabled}"`,`  className="${e.className}"`,'  @onClose="() => showTag = false">',"</Tag>","<Tag",'  v-if="showTag"','  themeColor="secondary"',`  variable="${e.variable}"`,`  label="${e.label}"`,`  href="${e.href}"`,`  prefix="${e.prefix}"`,`  :closable="${e.closable}"`,`  :isDisabled="${e.isDisabled}"`,`  className="${e.className}"`,'  @onClose="() => showTag = false">',"</Tag>","<Tag",'  v-if="showTag"','  themeColor="neutral"',`  variable="${e.variable}"`,`  label="${e.label}"`,`  href="${e.href}"`,`  prefix="${e.prefix}"`,`  :closable="${e.closable}"`,`  :isDisabled="${e.isDisabled}"`,`  className="${e.className}"`,'  @onClose="() => showTag = false">',"</Tag>","<Tag",'  v-if="showTag"','  themeColor="info"',`  variable="${e.variable}"`,`  label="${e.label}"`,`  href="${e.href}"`,`  prefix="${e.prefix}"`,`  :closable="${e.closable}"`,`  :isDisabled="${e.isDisabled}"`,`  className="${e.className}"`,'  @onClose="() => showTag = false">',"</Tag>","<Tag",'  v-if="showTag"','  themeColor="success"',`  variable="${e.variable}"`,`  label="${e.label}"`,`  href="${e.href}"`,`  prefix="${e.prefix}"`,`  :closable="${e.closable}"`,`  :isDisabled="${e.isDisabled}"`,`  className="${e.className}"`,'  @onClose="() => showTag = false">',"</Tag>","<Tag",'  v-if="showTag"','  themeColor="warning"',`  variable="${e.variable}"`,`  label="${e.label}"`,`  href="${e.href}"`,`  prefix="${e.prefix}"`,`  :closable="${e.closable}"`,`  :isDisabled="${e.isDisabled}"`,`  className="${e.className}"`,'  @onClose="() => showTag = false">',"</Tag>","<Tag",'  v-if="showTag"','  themeColor="error"',`  variable="${e.variable}"`,`  label="${e.label}"`,`  href="${e.href}"`,`  prefix="${e.prefix}"`,`  :closable="${e.closable}"`,`  :isDisabled="${e.isDisabled}"`,`  className="${e.className}"`,'  @onClose="() => showTag = false">',"</Tag>"].join(`
`).trim()}}}}};var T,$,v;i.parameters={...i.parameters,docs:{...(T=i.parameters)==null?void 0:T.docs,source:{originalSource:`{
  name: "預設項目",
  args: {
    themeColor: 'primary',
    variable: "filled",
    label: 'Tag',
    href: '',
    prefix: '',
    closable: true,
    isDisabled: false,
    className: ''
  },
  render: args => ({
    components: {
      Tag
    },
    setup() {
      const showTag = ref(true); // 控制單一 Tag 是否顯示
      return {
        args,
        showTag
      };
    },
    template: \`
            <Tag 
                v-if="showTag"
                 :themeColor="args.themeColor"
                 :variable="args.variable"
                 :label="args.label"
                 :href="args.href"
                 :prefix="args.prefix"
                 :closable="args.closable"
                 :isDisabled="args.isDisabled"
                 :className="args.className"
                 @onClose="() => showTag = false">
            </Tag>
        \`
  }),
  // 控制 controls 中能控制的參數
  parameters: {
    controls: {
      // include: ['themeColor', 'removable' ],
    },
    docs: {
      source: {
        transform: (src, storyContext) => {
          const {
            args
          } = storyContext;
          return ['<Tag', \`  v-if="showTag"\`, \`  themeColor="\${args.themeColor}"\`, \`  variable="\${args.variable}"\`, \`  label="\${args.label}"\`, \`  href="\${args.href}"\`, \`  prefix="\${args.prefix}"\`, \`  :closable="\${args.closable}"\`, \`  :isDisabled="\${args.isDisabled}"\`, \`  className="\${args.className}"\`, \`  @onClose="() => showTag = false">\`, '</Tag>'].join('\\n').trim();
        }
      }
    }
  }
}`,...(v=($=i.parameters)==null?void 0:$.docs)==null?void 0:v.source}}};var C,x,D;t.parameters={...t.parameters,docs:{...(C=t.parameters)==null?void 0:C.docs,source:{originalSource:`{
  name: "附加元素",
  args: {
    themeColor: 'primary',
    variable: "filled",
    label: 'Tag',
    href: '',
    prefix: 'SvgAccount',
    closable: true,
    isDisabled: false,
    className: ''
  },
  render: args => ({
    components: {
      Tag
    },
    setup() {
      const showTag = ref(true); // 控制單一 Tag 是否顯示
      return {
        args,
        showTag
      };
    },
    template: \`
            <Tag 
                v-if="showTag"
                 :themeColor="args.themeColor"
                 :variable="args.variable"
                 :label="args.label"
                 :href="args.href"
                 :prefix="args.prefix"
                 :closable="args.closable"
                 :isDisabled="args.isDisabled"
                 :className="args.className"
                 @onClose="() => showTag = false">
            </Tag>
        \`
  }),
  // 控制 controls 中能控制的參數
  parameters: {
    controls: {
      // include: ['themeColor', 'removable' ],
    },
    docs: {
      source: {
        transform: (src, storyContext) => {
          const {
            args
          } = storyContext;
          return ['<Tag', \`  v-if="showTag"\`, \`  themeColor="\${args.themeColor}"\`, \`  variable="\${args.variable}"\`, \`  label="\${args.label}"\`, \`  href="\${args.href}"\`, \`  prefix="\${args.prefix}"\`, \`  :closable="\${args.closable}"\`, \`  :isDisabled="\${args.isDisabled}"\`, \`  className="\${args.className}"\`, \`  @onClose="() => showTag = false">\`, '</Tag>'].join('\\n').trim();
        }
      }
    }
  }
}`,...(D=(x=t.parameters)==null?void 0:x.docs)==null?void 0:D.source}}};var y,w,N;g.parameters={...g.parameters,docs:{...(y=g.parameters)==null?void 0:y.docs,source:{originalSource:`{
  name: "外觀樣式",
  args: {
    themeColor: 'primary',
    variable: "",
    label: 'Primary',
    href: '',
    prefix: '',
    closable: true,
    isDisabled: false,
    className: ''
  },
  render: args => ({
    components: {
      Tag
    },
    setup() {
      const showTag = ref(true); // 控制單一 Tag 是否顯示
      return {
        args,
        showTag
      };
    },
    template: \`
            <div style="display:flex; gap: 8px; flex-wrap: wrap">
                <Tag
                    v-if="showTag"
                    :themeColor="args.themeColor"
                    variable="filled"
                    :label="args.label"
                    :href="args.href"
                    :prefix="args.prefix"
                    :closable="args.closable"
                    :isDisabled="args.isDisabled"
                    :className="args.className"
                    @onClose="() => showTag = false">
                </Tag>
                <Tag
                    v-if="showTag"
                    :themeColor="args.themeColor"
                    variable="ghost"
                    :label="args.label"
                    :href="args.href"
                    :prefix="args.prefix"
                    :closable="args.closable"
                    :isDisabled="args.isDisabled"
                    :className="args.className"
                    @onClose="() => showTag = false">
                </Tag>
            </div>
        \`
  }),
  // 控制 controls 中能控制的參數
  parameters: {
    controls: {
      // include: ['themeColor', 'removable' ],
    },
    docs: {
      source: {
        transform: (src, storyContext) => {
          const {
            args
          } = storyContext;
          return ['<Tag', \`  v-if="showTag"\`, \`  themeColor="\${args.themeColor}"\`, \`  variable="filled"\`, \`  label="\${args.label}"\`, \`  href="\${args.href}"\`, \`  prefix="\${args.prefix}"\`, \`  :closable="\${args.closable}"\`, \`  :isDisabled="\${args.isDisabled}"\`, \`  className="\${args.className}"\`, \`  @onClose="() => showTag = false">\`, '</Tag>', '<Tag', \`  v-if="showTag"\`, \`  themeColor="\${args.themeColor}"\`, \`  variable="ghost"\`, \`  label="\${args.label}"\`, \`  href="\${args.href}"\`, \`  prefix="\${args.prefix}"\`, \`  :closable="\${args.closable}"\`, \`  :isDisabled="\${args.isDisabled}"\`, \`  className="\${args.className}"\`, \`  @onClose="() => showTag = false">\`, '</Tag>'].join('\\n').trim();
        }
      }
    }
  }
}`,...(N=(w=g.parameters)==null?void 0:w.docs)==null?void 0:N.source}}};var S,A,_;c.parameters={...c.parameters,docs:{...(S=c.parameters)==null?void 0:S.docs,source:{originalSource:'{\n  name: "主題色彩",\n  args: {\n    variable: "filled",\n    prefix: \'\',\n    closable: true,\n    isDisabled: false,\n    className: \'\'\n  },\n  render: args => ({\n    components: {\n      Tag\n    },\n    setup() {\n      const tagsData = ref([{\n        id: 1,\n        themeColor: \'primary\',\n        label: \'Primary\'\n      }, {\n        id: 2,\n        themeColor: \'secondary\',\n        label: \'Secondary\'\n      }, {\n        id: 3,\n        themeColor: \'neutral\',\n        label: \'Neutral\'\n      }, {\n        id: 4,\n        themeColor: \'info\',\n        label: \'Info\'\n      }, {\n        id: 5,\n        themeColor: \'success\',\n        label: \'Success\'\n      }, {\n        id: 6,\n        themeColor: \'warning\',\n        label: \'Warning\'\n      }, {\n        id: 7,\n        themeColor: \'error\',\n        label: \'Error\'\n      }]);\n      const removeTag = id => {\n        tagsData.value = tagsData.value.filter(tag => tag.id !== id);\n      };\n      return {\n        args,\n        tagsData,\n        removeTag\n      };\n    },\n    template: `\n            <div style="display:flex; gap: 8px; flex-wrap: wrap">\n                <Tag v-for="tag in tagsData"\n                     :key="tag.id"\n                     :themeColor="tag.themeColor"\n                     :variable="args.variable"\n                     :label="tag.label"\n                     :prefix="args.prefix"\n                     :closable="args.closable"\n                     :isDisabled="args.isDisabled"\n                     :className="args.className"\n                     @onClose="removeTag(tag.id)"\n                >\n                </Tag>\n            </div>\n        `\n  }),\n  // 控制 controls 中能控制的參數\n  parameters: {\n    controls: {\n      // include: [\'themeColor\', \'removable\' ],\n    },\n    docs: {\n      source: {\n        transform: (src, storyContext) => {\n          const {\n            args\n          } = storyContext;\n          return [\'<Tag\', `  v-if="showTag"`, `  themeColor="primary"`, `  variable="${args.variable}"`, `  label="${args.label}"`, `  href="${args.href}"`, `  prefix="${args.prefix}"`, `  :closable="${args.closable}"`, `  :isDisabled="${args.isDisabled}"`, `  className="${args.className}"`, `  @onClose="() => showTag = false">`, \'</Tag>\', \'<Tag\', `  v-if="showTag"`, `  themeColor="secondary"`, `  variable="${args.variable}"`, `  label="${args.label}"`, `  href="${args.href}"`, `  prefix="${args.prefix}"`, `  :closable="${args.closable}"`, `  :isDisabled="${args.isDisabled}"`, `  className="${args.className}"`, `  @onClose="() => showTag = false">`, \'</Tag>\', \'<Tag\', `  v-if="showTag"`, `  themeColor="neutral"`, `  variable="${args.variable}"`, `  label="${args.label}"`, `  href="${args.href}"`, `  prefix="${args.prefix}"`, `  :closable="${args.closable}"`, `  :isDisabled="${args.isDisabled}"`, `  className="${args.className}"`, `  @onClose="() => showTag = false">`, \'</Tag>\', \'<Tag\', `  v-if="showTag"`, `  themeColor="info"`, `  variable="${args.variable}"`, `  label="${args.label}"`, `  href="${args.href}"`, `  prefix="${args.prefix}"`, `  :closable="${args.closable}"`, `  :isDisabled="${args.isDisabled}"`, `  className="${args.className}"`, `  @onClose="() => showTag = false">`, \'</Tag>\', \'<Tag\', `  v-if="showTag"`, `  themeColor="success"`, `  variable="${args.variable}"`, `  label="${args.label}"`, `  href="${args.href}"`, `  prefix="${args.prefix}"`, `  :closable="${args.closable}"`, `  :isDisabled="${args.isDisabled}"`, `  className="${args.className}"`, `  @onClose="() => showTag = false">`, \'</Tag>\', \'<Tag\', `  v-if="showTag"`, `  themeColor="warning"`, `  variable="${args.variable}"`, `  label="${args.label}"`, `  href="${args.href}"`, `  prefix="${args.prefix}"`, `  :closable="${args.closable}"`, `  :isDisabled="${args.isDisabled}"`, `  className="${args.className}"`, `  @onClose="() => showTag = false">`, \'</Tag>\', \'<Tag\', `  v-if="showTag"`, `  themeColor="error"`, `  variable="${args.variable}"`, `  label="${args.label}"`, `  href="${args.href}"`, `  prefix="${args.prefix}"`, `  :closable="${args.closable}"`, `  :isDisabled="${args.isDisabled}"`, `  className="${args.className}"`, `  @onClose="() => showTag = false">`, \'</Tag>\'].join(\'\\n\').trim();\n        }\n      }\n    }\n  }\n}',...(_=(A=c.parameters)==null?void 0:A.docs)==null?void 0:_.source}}};const L=["TagDefaultStory","TagPrefixStory","TagVariableStory","TagMultiple"];export{i as TagDefaultStory,c as TagMultiple,t as TagPrefixStory,g as TagVariableStory,L as __namedExportsOrder,H as default};

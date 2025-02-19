import{g as V,c as n,b as d,e as b,f as u,t as p,j as F,n as k,o as l,k as f}from"./vue.esm-bundler-qCK_iSPY.js";import{_ as h}from"./Icon-CVEqTX2T.js";import"./iframe-ChCRMyiJ.js";import"../sb-preview/runtime.js";const j=["href"],B={key:0,class:"ded-tag-icon"},P={key:1,class:"ded-tag-text"},O={key:0,class:"ded-tag-icon"},o={__name:"Tag",props:{themeColor:{type:String,validator:r=>["primary","secondary","neutral","info","success","warning","error"].includes(r)},variant:{type:String,validator:r=>["filled","ghost"].includes(r),default:"filled"},label:{type:String,required:!0},href:{type:String,default:""},prefix:{type:String},closable:{type:Boolean,default:!0},isDisabled:{type:Boolean,default:!1},className:{type:String,default:""}},emits:["onClose"],setup(r,{emit:s}){const a=s,e=r,m=()=>{e.isDisabled||a("onClose")},E=V(()=>{try{return!!e.href&&new URL(e.href)}catch{return!1}});return(W,q)=>(l(),n("div",{class:k(["ded-tag",{[`ded-tag-${e.variant}`]:e.variant},{[`ded-tag-${e.variant}-${e.themeColor}`]:e.variant&&e.themeColor&&!e.isDisabled},{[`ded-tag-${e.variant}-disabled`]:e.isDisabled},e.className&&e.className.split(" ")])},[e.href&&E.value?(l(),n("a",{key:0,href:e.href,class:"ded-tag-text"},[e.prefix?(l(),n("span",B,[d(h,{name:e.prefix},null,8,["name"])])):b("",!0),u(" "+p(e.label),1)],8,j)):(l(),n("div",P,[e.prefix?(l(),n("span",O,[d(h,{name:e.prefix},null,8,["name"])])):b("",!0),u(" "+p(e.label),1)])),e.closable?(l(),F(h,{key:2,name:"SvgClose",class:"ded-tag-close",onClick:m})):b("",!0)],2))}};o.__docgenInfo={exportName:"default",displayName:"Tag",description:"",tags:{},props:[{name:"themeColor",type:{name:"string"},values:["primary","secondary","neutral","info","success","warning","error"]},{name:"variant",type:{name:"string"},defaultValue:{func:!1,value:'"filled"'},values:["filled","ghost"]},{name:"label",type:{name:"string"},required:!0},{name:"href",type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"prefix",type:{name:"string"}},{name:"closable",type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"isDisabled",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"className",type:{name:"string"},defaultValue:{func:!1,value:'""'}}],events:[{name:"onClose"}],sourceFiles:["/home/runner/work/DED-WDS_VUE/DED-WDS_VUE/libs/src/ui/element/Tag/Tag.vue"]};const H={title:"Component/Tag",component:o,tags:["autodocs"],argTypes:{themeColor:{description:"主題顏色",control:{type:"select"},options:["primary","secondary","neutral","info","success","warning","error"],table:{type:{summary:"primary | secondary | neutral | info | success | warning | error "}}},variant:{description:"外觀樣式",required:!0,control:{type:"select"},options:["filled","ghost"],table:{type:{summary:"filled | ghost "}}},label:{description:"標籤文字",control:{type:"text"}},href:{description:"超連結",control:{type:"text"}},prefix:{description:"圖示",control:{type:"select",labels:{"":"none",SvgAccount:"SvgAccount",SvgSearch:"SvgSearch",SvgVisibility:"SvgVisibility",SvgVisibilityOff:"SvgVisibilityOff"}},options:["","SvgAccount","SvgSearch","SvgVisibility","SvgVisibilityOff"]},closable:{description:"摸到時顯示關閉圖示",control:{type:"boolean"}},isDisabled:{description:"是否禁用",control:{type:"boolean"}},className:{description:"客製化樣式",control:{type:"text"}},onClose:{description:"關閉事件"}},parameters:{docs:{title:"Tag",description:{component:"標籤組件的呈現及說明。"}}}},i={name:"預設項目",args:{themeColor:"primary",variant:"filled",label:"Tag",href:"",prefix:"",closable:!0,isDisabled:!1,className:""},render:r=>({components:{Tag:o},setup(){const s=f(!0);return{args:r,showTag:s}},template:`
            <Tag 
                v-if="showTag"
                 :themeColor="args.themeColor"
                 :variant="args.variant"
                 :label="args.label"
                 :href="args.href"
                 :prefix="args.prefix"
                 :closable="args.closable"
                 :isDisabled="args.isDisabled"
                 :className="args.className"
                 @onClose="() => showTag = false">
            </Tag>
        `}),parameters:{controls:{},docs:{source:{transform:(r,s)=>{const{args:a}=s;return["<Tag",'  v-if="showTag"',`  themeColor="${a.themeColor}"`,`  variant="${a.variant}"`,`  label="${a.label}"`,`  href="${a.href}"`,`  prefix="${a.prefix}"`,`  :closable="${a.closable}"`,`  :isDisabled="${a.isDisabled}"`,`  className="${a.className}"`,'  @onClose="() => showTag = false">',"</Tag>"].join(`
`).trim()}}}}},t={name:"附加元素",args:{themeColor:"primary",variant:"filled",label:"Tag",href:"",prefix:"SvgAccount",closable:!0,isDisabled:!1,className:""},render:r=>({components:{Tag:o},setup(){const s=f(!0);return{args:r,showTag:s}},template:`
            <Tag 
                v-if="showTag"
                 :themeColor="args.themeColor"
                 :variant="args.variant"
                 :label="args.label"
                 :href="args.href"
                 prefix="SvgAccount"
                 :closable="args.closable"
                 :isDisabled="args.isDisabled"
                 :className="args.className"
                 @onClose="() => showTag = false">
            </Tag>
        `}),parameters:{controls:{exclude:["prefix"]},docs:{source:{transform:(r,s)=>{const{args:a}=s;return["<Tag",'  v-if="showTag"',`  themeColor="${a.themeColor}"`,`  variant="${a.variant}"`,`  label="${a.label}"`,`  href="${a.href}"`,'  prefix="SvgAccount"',`  :closable="${a.closable}"`,`  :isDisabled="${a.isDisabled}"`,`  className="${a.className}"`,'  @onClose="() => showTag = false">',"</Tag>"].join(`
`).trim()}}}}},g={name:"外觀樣式",args:{themeColor:"primary",variant:"",label:"Primary",href:"",prefix:"",closable:!0,isDisabled:!1,className:""},render:r=>({components:{Tag:o},setup(){const s=f(!0);return{args:r,showTag:s}},template:`
            <div style="display:flex; gap: 8px; flex-wrap: wrap">
                <Tag
                    v-if="showTag"
                    :themeColor="args.themeColor"
                    variant="filled"
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
                    variant="ghost"
                    :label="args.label"
                    :href="args.href"
                    :prefix="args.prefix"
                    :closable="args.closable"
                    :isDisabled="args.isDisabled"
                    :className="args.className"
                    @onClose="() => showTag = false">
                </Tag>
            </div>
        `}),parameters:{controls:{exclude:["variant"]},docs:{source:{transform:(r,s)=>{const{args:a}=s;return["<Tag",'  v-if="showTag"',`  themeColor="${a.themeColor}"`,'  variant="filled"',`  label="${a.label}"`,`  href="${a.href}"`,`  prefix="${a.prefix}"`,`  :closable="${a.closable}"`,`  :isDisabled="${a.isDisabled}"`,`  className="${a.className}"`,'  @onClose="() => showTag = false">',"</Tag>","<Tag",'  v-if="showTag"',`  themeColor="${a.themeColor}"`,'  variant="ghost"',`  label="${a.label}"`,`  href="${a.href}"`,`  prefix="${a.prefix}"`,`  :closable="${a.closable}"`,`  :isDisabled="${a.isDisabled}"`,`  className="${a.className}"`,'  @onClose="() => showTag = false">',"</Tag>"].join(`
`).trim()}}}}},c={name:"主題色彩",args:{variant:"filled",href:"",prefix:"",closable:!0,isDisabled:!1,className:""},render:r=>({components:{Tag:o},setup(){const s=f([{id:1,themeColor:"primary",label:"Primary"},{id:2,themeColor:"secondary",label:"Secondary"},{id:3,themeColor:"neutral",label:"Neutral"},{id:4,themeColor:"info",label:"Info"},{id:5,themeColor:"success",label:"Success"},{id:6,themeColor:"warning",label:"Warning"},{id:7,themeColor:"error",label:"Error"}]);return{args:r,tagsData:s,removeTag:e=>{s.value=s.value.filter(m=>m.id!==e)}}},template:`
            <div style="display:flex; gap: 8px; flex-wrap: wrap">
                <Tag v-for="tag in tagsData"
                     :key="tag.id"
                     :themeColor="tag.themeColor"
                     :variant="args.variant"
                     :label="tag.label"
                     :href="args.href"
                     :prefix="args.prefix"
                     :closable="args.closable"
                     :isDisabled="args.isDisabled"
                     :className="args.className"
                     @onClose="removeTag(tag.id)"
                >
                </Tag>
            </div>
        `}),parameters:{controls:{exclude:["themeColor","label"]},docs:{source:{transform:(r,s)=>{const{args:a}=s;return["<Tag",'  v-if="showTag"','  themeColor="primary"',`  variant="${a.variant}"`,`  label="${a.label}"`,`  href="${a.href}"`,`  prefix="${a.prefix}"`,`  :closable="${a.closable}"`,`  :isDisabled="${a.isDisabled}"`,`  className="${a.className}"`,'  @onClose="() => showTag = false">',"</Tag>","<Tag",'  v-if="showTag"','  themeColor="secondary"',`  variant="${a.variant}"`,`  label="${a.label}"`,`  href="${a.href}"`,`  prefix="${a.prefix}"`,`  :closable="${a.closable}"`,`  :isDisabled="${a.isDisabled}"`,`  className="${a.className}"`,'  @onClose="() => showTag = false">',"</Tag>","<Tag",'  v-if="showTag"','  themeColor="neutral"',`  variant="${a.variant}"`,`  label="${a.label}"`,`  href="${a.href}"`,`  prefix="${a.prefix}"`,`  :closable="${a.closable}"`,`  :isDisabled="${a.isDisabled}"`,`  className="${a.className}"`,'  @onClose="() => showTag = false">',"</Tag>","<Tag",'  v-if="showTag"','  themeColor="info"',`  variant="${a.variant}"`,`  label="${a.label}"`,`  href="${a.href}"`,`  prefix="${a.prefix}"`,`  :closable="${a.closable}"`,`  :isDisabled="${a.isDisabled}"`,`  className="${a.className}"`,'  @onClose="() => showTag = false">',"</Tag>","<Tag",'  v-if="showTag"','  themeColor="success"',`  variant="${a.variant}"`,`  label="${a.label}"`,`  href="${a.href}"`,`  prefix="${a.prefix}"`,`  :closable="${a.closable}"`,`  :isDisabled="${a.isDisabled}"`,`  className="${a.className}"`,'  @onClose="() => showTag = false">',"</Tag>","<Tag",'  v-if="showTag"','  themeColor="warning"',`  variant="${a.variant}"`,`  label="${a.label}"`,`  href="${a.href}"`,`  prefix="${a.prefix}"`,`  :closable="${a.closable}"`,`  :isDisabled="${a.isDisabled}"`,`  className="${a.className}"`,'  @onClose="() => showTag = false">',"</Tag>","<Tag",'  v-if="showTag"','  themeColor="error"',`  variant="${a.variant}"`,`  label="${a.label}"`,`  href="${a.href}"`,`  prefix="${a.prefix}"`,`  :closable="${a.closable}"`,`  :isDisabled="${a.isDisabled}"`,`  className="${a.className}"`,'  @onClose="() => showTag = false">',"</Tag>"].join(`
`).trim()}}}}};var T,v,$;i.parameters={...i.parameters,docs:{...(T=i.parameters)==null?void 0:T.docs,source:{originalSource:`{
  name: "預設項目",
  args: {
    themeColor: 'primary',
    variant: "filled",
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
                 :variant="args.variant"
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
          return ['<Tag', \`  v-if="showTag"\`, \`  themeColor="\${args.themeColor}"\`, \`  variant="\${args.variant}"\`, \`  label="\${args.label}"\`, \`  href="\${args.href}"\`, \`  prefix="\${args.prefix}"\`, \`  :closable="\${args.closable}"\`, \`  :isDisabled="\${args.isDisabled}"\`, \`  className="\${args.className}"\`, \`  @onClose="() => showTag = false">\`, '</Tag>'].join('\\n').trim();
        }
      }
    }
  }
}`,...($=(v=i.parameters)==null?void 0:v.docs)==null?void 0:$.source}}};var C,x,D;t.parameters={...t.parameters,docs:{...(C=t.parameters)==null?void 0:C.docs,source:{originalSource:`{
  name: "附加元素",
  args: {
    themeColor: 'primary',
    variant: "filled",
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
                 :variant="args.variant"
                 :label="args.label"
                 :href="args.href"
                 prefix="SvgAccount"
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
      exclude: ['prefix']
    },
    docs: {
      source: {
        transform: (src, storyContext) => {
          const {
            args
          } = storyContext;
          return ['<Tag', \`  v-if="showTag"\`, \`  themeColor="\${args.themeColor}"\`, \`  variant="\${args.variant}"\`, \`  label="\${args.label}"\`, \`  href="\${args.href}"\`, \`  prefix="SvgAccount"\`, \`  :closable="\${args.closable}"\`, \`  :isDisabled="\${args.isDisabled}"\`, \`  className="\${args.className}"\`, \`  @onClose="() => showTag = false">\`, '</Tag>'].join('\\n').trim();
        }
      }
    }
  }
}`,...(D=(x=t.parameters)==null?void 0:x.docs)==null?void 0:D.source}}};var y,w,N;g.parameters={...g.parameters,docs:{...(y=g.parameters)==null?void 0:y.docs,source:{originalSource:`{
  name: "外觀樣式",
  args: {
    themeColor: 'primary',
    variant: "",
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
                    variant="filled"
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
                    variant="ghost"
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
      exclude: ['variant']
    },
    docs: {
      source: {
        transform: (src, storyContext) => {
          const {
            args
          } = storyContext;
          return ['<Tag', \`  v-if="showTag"\`, \`  themeColor="\${args.themeColor}"\`, \`  variant="filled"\`, \`  label="\${args.label}"\`, \`  href="\${args.href}"\`, \`  prefix="\${args.prefix}"\`, \`  :closable="\${args.closable}"\`, \`  :isDisabled="\${args.isDisabled}"\`, \`  className="\${args.className}"\`, \`  @onClose="() => showTag = false">\`, '</Tag>', '<Tag', \`  v-if="showTag"\`, \`  themeColor="\${args.themeColor}"\`, \`  variant="ghost"\`, \`  label="\${args.label}"\`, \`  href="\${args.href}"\`, \`  prefix="\${args.prefix}"\`, \`  :closable="\${args.closable}"\`, \`  :isDisabled="\${args.isDisabled}"\`, \`  className="\${args.className}"\`, \`  @onClose="() => showTag = false">\`, '</Tag>'].join('\\n').trim();
        }
      }
    }
  }
}`,...(N=(w=g.parameters)==null?void 0:w.docs)==null?void 0:N.source}}};var S,A,_;c.parameters={...c.parameters,docs:{...(S=c.parameters)==null?void 0:S.docs,source:{originalSource:'{\n  name: "主題色彩",\n  args: {\n    // themeColor: \'primary\',\n    variant: "filled",\n    // label:\'\',\n    href: \'\',\n    prefix: \'\',\n    closable: true,\n    isDisabled: false,\n    className: \'\'\n  },\n  render: args => ({\n    components: {\n      Tag\n    },\n    setup() {\n      const tagsData = ref([{\n        id: 1,\n        themeColor: \'primary\',\n        label: \'Primary\'\n      }, {\n        id: 2,\n        themeColor: \'secondary\',\n        label: \'Secondary\'\n      }, {\n        id: 3,\n        themeColor: \'neutral\',\n        label: \'Neutral\'\n      }, {\n        id: 4,\n        themeColor: \'info\',\n        label: \'Info\'\n      }, {\n        id: 5,\n        themeColor: \'success\',\n        label: \'Success\'\n      }, {\n        id: 6,\n        themeColor: \'warning\',\n        label: \'Warning\'\n      }, {\n        id: 7,\n        themeColor: \'error\',\n        label: \'Error\'\n      }]);\n      const removeTag = id => {\n        tagsData.value = tagsData.value.filter(tag => tag.id !== id);\n      };\n      return {\n        args,\n        tagsData,\n        removeTag\n      };\n    },\n    template: `\n            <div style="display:flex; gap: 8px; flex-wrap: wrap">\n                <Tag v-for="tag in tagsData"\n                     :key="tag.id"\n                     :themeColor="tag.themeColor"\n                     :variant="args.variant"\n                     :label="tag.label"\n                     :href="args.href"\n                     :prefix="args.prefix"\n                     :closable="args.closable"\n                     :isDisabled="args.isDisabled"\n                     :className="args.className"\n                     @onClose="removeTag(tag.id)"\n                >\n                </Tag>\n            </div>\n        `\n  }),\n  // 控制 controls 中能控制的參數\n  parameters: {\n    controls: {\n      // include: [\'themeColor\', \'removable\' ],\n      exclude: [\'themeColor\', \'label\']\n    },\n    docs: {\n      source: {\n        transform: (src, storyContext) => {\n          const {\n            args\n          } = storyContext;\n          return [\'<Tag\', `  v-if="showTag"`, `  themeColor="primary"`, `  variant="${args.variant}"`, `  label="${args.label}"`, `  href="${args.href}"`, `  prefix="${args.prefix}"`, `  :closable="${args.closable}"`, `  :isDisabled="${args.isDisabled}"`, `  className="${args.className}"`, `  @onClose="() => showTag = false">`, \'</Tag>\', \'<Tag\', `  v-if="showTag"`, `  themeColor="secondary"`, `  variant="${args.variant}"`, `  label="${args.label}"`, `  href="${args.href}"`, `  prefix="${args.prefix}"`, `  :closable="${args.closable}"`, `  :isDisabled="${args.isDisabled}"`, `  className="${args.className}"`, `  @onClose="() => showTag = false">`, \'</Tag>\', \'<Tag\', `  v-if="showTag"`, `  themeColor="neutral"`, `  variant="${args.variant}"`, `  label="${args.label}"`, `  href="${args.href}"`, `  prefix="${args.prefix}"`, `  :closable="${args.closable}"`, `  :isDisabled="${args.isDisabled}"`, `  className="${args.className}"`, `  @onClose="() => showTag = false">`, \'</Tag>\', \'<Tag\', `  v-if="showTag"`, `  themeColor="info"`, `  variant="${args.variant}"`, `  label="${args.label}"`, `  href="${args.href}"`, `  prefix="${args.prefix}"`, `  :closable="${args.closable}"`, `  :isDisabled="${args.isDisabled}"`, `  className="${args.className}"`, `  @onClose="() => showTag = false">`, \'</Tag>\', \'<Tag\', `  v-if="showTag"`, `  themeColor="success"`, `  variant="${args.variant}"`, `  label="${args.label}"`, `  href="${args.href}"`, `  prefix="${args.prefix}"`, `  :closable="${args.closable}"`, `  :isDisabled="${args.isDisabled}"`, `  className="${args.className}"`, `  @onClose="() => showTag = false">`, \'</Tag>\', \'<Tag\', `  v-if="showTag"`, `  themeColor="warning"`, `  variant="${args.variant}"`, `  label="${args.label}"`, `  href="${args.href}"`, `  prefix="${args.prefix}"`, `  :closable="${args.closable}"`, `  :isDisabled="${args.isDisabled}"`, `  className="${args.className}"`, `  @onClose="() => showTag = false">`, \'</Tag>\', \'<Tag\', `  v-if="showTag"`, `  themeColor="error"`, `  variant="${args.variant}"`, `  label="${args.label}"`, `  href="${args.href}"`, `  prefix="${args.prefix}"`, `  :closable="${args.closable}"`, `  :isDisabled="${args.isDisabled}"`, `  className="${args.className}"`, `  @onClose="() => showTag = false">`, \'</Tag>\'].join(\'\\n\').trim();\n        }\n      }\n    }\n  }\n}',...(_=(A=c.parameters)==null?void 0:A.docs)==null?void 0:_.source}}};const L=["TagDefaultStory","TagPrefixStory","TagVariantStory","TagMultiple"];export{i as TagDefaultStory,c as TagMultiple,t as TagPrefixStory,g as TagVariantStory,L as __namedExportsOrder,H as default};

import{c as _,a as o,b,d as c,q as u,t as p,C as A,n as S,o as l,f}from"./vue.esm-bundler-D-gFHCZh.js";import{_ as m}from"./Icon-BhqjPbyE.js";import"./iframe-Bd5YQskO.js";import"../sb-preview/runtime.js";const E=["href"],F={key:0,class:"ded-tag-icon"},k={key:1,class:"ded-tag-text"},V={key:0,class:"ded-tag-icon"},n={__name:"Tag",props:{themeColor:{type:String,validator:s=>["primary","secondary","neutral","info","success","warning","error"].includes(s)},variable:{type:String,validator:s=>["filled","ghost"].includes(s)},label:{type:String,required:!0},href:{type:String,default:""},prefix:{type:String},closable:{type:Boolean,default:!0},isDisabled:{type:Boolean,default:!1},className:{type:String,default:""}},emits:["onClose"],setup(s,{emit:r}){const e=r,a=s,w=()=>{a.isDisabled||e("onClose")},N=_(()=>{try{return!!a.href&&new URL(a.href)}catch{return!1}});return(j,B)=>(l(),o("div",{class:S(["ded-tag",{[`ded-tag-${a.variable}`]:a.variable},{[`ded-tag-${a.variable}-${a.themeColor}`]:a.variable&&a.themeColor&&!a.isDisabled},{[`ded-tag-${a.variable}-disabled`]:a.isDisabled},a.className&&a.className.split(" ")])},[a.href&&N.value?(l(),o("a",{key:0,href:a.href,class:"ded-tag-text"},[a.prefix?(l(),o("span",F,[b(m,{name:a.prefix},null,8,["name"])])):c("",!0),u(" "+p(a.label),1)],8,E)):(l(),o("div",k,[a.prefix?(l(),o("span",V,[b(m,{name:a.prefix},null,8,["name"])])):c("",!0),u(" "+p(a.label),1)])),a.closable?(l(),A(m,{key:2,name:"close",class:"ded-tag-close",onClick:w})):c("",!0)],2))}};n.__docgenInfo={exportName:"default",displayName:"Tag",description:"",tags:{},props:[{name:"themeColor",type:{name:"string"},values:["primary","secondary","neutral","info","success","warning","error"]},{name:"variable",type:{name:"string"},values:["filled","ghost"]},{name:"label",type:{name:"string"},required:!0},{name:"href",type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"prefix",type:{name:"string"}},{name:"closable",type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"isDisabled",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"className",type:{name:"string"},defaultValue:{func:!1,value:'""'}}],events:[{name:"onClose"}],sourceFiles:["/Users/auouser/Desktop/Work_Space/DED-WDS_VUE/libs/src/ui/element/Tag/Tag.vue"]};const z={title:"Component/Tag",component:n,tags:["autodocs"],argTypes:{themeColor:{description:"主題顏色",control:{type:"select"},options:["primary","secondary","neutral","info","success","warning","error"],table:{type:{summary:"primary | secondary | neutral | info | success | warning | error "}}},variable:{description:"變數",required:!0,control:{type:"select"},options:["filled","ghost"],table:{type:{summary:"filled | ghost "}}},label:{description:"標籤文字",control:{type:"text"}},href:{description:"超連結",control:{type:"text"}},prefix:{description:"圖示",control:{type:"select",labels:{"":"None",home:"home",folder:"folder",academy:"academy","arrow-forward":"arrow-forward","finger-print":"finger-print"}},options:["","home","folder","academy","arrow-forward","finger-print"]},closable:{description:"摸到時顯示關閉",control:{type:"boolean"}},isDisabled:{description:"是否禁用",control:{type:"boolean"}},className:{description:"客製化樣式",control:{type:"text"}},onClose:{description:"關閉事件"}},parameters:{docs:{title:"Tag",description:{component:"Tag 組件的呈現及說明。"}}}},t={name:"預設項目",args:{themeColor:"primary",variable:"filled",label:"Tag",href:"",prefix:"",closable:!0,isDisabled:!1,className:""},render:s=>({components:{Tag:n},setup(){const r=f(!0);return{args:s,showTag:r}},template:`
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
        `}),parameters:{controls:{},docs:{source:{transform:(s,r)=>{const{args:e}=r;return["<Tag",'  v-if="showTag"',`  themeColor="${e.themeColor}"`,`  variable="${e.variable}"`,`  label="${e.label}"`,`  href="${e.href}"`,`  prefix="${e.prefix}"`,`  :closable="${e.closable}"`,`  :isDisabled="${e.isDisabled}"`,`  className="${e.className}"`,'  @onClose="() => showTag = false">',"</Tag>"].join(`
`).trim()}}}}},i={name:"附加元素",args:{themeColor:"primary",variable:"filled",label:"Tag",href:"",prefix:"academy",closable:!0,isDisabled:!1,className:""},render:s=>({components:{Tag:n},setup(){const r=f(!0);return{args:s,showTag:r}},template:`
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
        `}),parameters:{controls:{},docs:{source:{transform:(s,r)=>{const{args:e}=r;return["<Tag",'  v-if="showTag"',`  themeColor="${e.themeColor}"`,`  variable="${e.variable}"`,`  label="${e.label}"`,`  href="${e.href}"`,`  prefix="${e.prefix}"`,`  :closable="${e.closable}"`,`  :isDisabled="${e.isDisabled}"`,`  className="${e.className}"`,'  @onClose="() => showTag = false">',"</Tag>"].join(`
`).trim()}}}}},g={name:"外觀樣式",args:{themeColor:"primary",variable:"",label:"Tag",href:"",prefix:"",closable:!0,isDisabled:!1,className:""},render:s=>({components:{Tag:n},setup(){const r=f(!0);return{args:s,showTag:r}},template:`
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
        `}),parameters:{controls:{},docs:{source:{transform:(s,r)=>{const{args:e}=r;return["<Tag",'  v-if="showTag"',`  themeColor="${e.themeColor}"`,'  variable="filled"',`  label="${e.label}"`,`  href="${e.href}"`,`  prefix="${e.prefix}"`,`  :closable="${e.closable}"`,`  :isDisabled="${e.isDisabled}"`,`  className="${e.className}"`,'  @onClose="() => showTag = false">',"</Tag>","<Tag",'  v-if="showTag"',`  themeColor="${e.themeColor}"`,'  variable="ghost"',`  label="${e.label}"`,`  href="${e.href}"`,`  prefix="${e.prefix}"`,`  :closable="${e.closable}"`,`  :isDisabled="${e.isDisabled}"`,`  className="${e.className}"`,'  @onClose="() => showTag = false">',"</Tag>"].join(`
`).trim()}}}}};var d,h,T;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(T=(h=t.parameters)==null?void 0:h.docs)==null?void 0:T.source}}};var C,v,y;i.parameters={...i.parameters,docs:{...(C=i.parameters)==null?void 0:C.docs,source:{originalSource:`{
  name: "附加元素",
  args: {
    themeColor: 'primary',
    variable: "filled",
    label: 'Tag',
    href: '',
    prefix: 'academy',
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
}`,...(y=(v=i.parameters)==null?void 0:v.docs)==null?void 0:y.source}}};var x,$,D;g.parameters={...g.parameters,docs:{...(x=g.parameters)==null?void 0:x.docs,source:{originalSource:`{
  name: "外觀樣式",
  args: {
    themeColor: 'primary',
    variable: "",
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
}`,...(D=($=g.parameters)==null?void 0:$.docs)==null?void 0:D.source}}};const H=["TagDefaultStory","TagPrefixStory","TagVariableStory"];export{t as TagDefaultStory,i as TagPrefixStory,g as TagVariableStory,H as __namedExportsOrder,z as default};

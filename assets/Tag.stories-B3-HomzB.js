import{g as V,c as o,k as B,d,f as p,b,t as $,n as F,o as l,r as f}from"./vue.esm-bundler-DYHjuIM_.js";import{_ as u}from"./Icon-DeqquNhw.js";const k=["href"],j={key:0,class:"ded-tag-icon"},P={key:1,class:"ded-tag-text"},W={key:0,class:"ded-tag-icon"},n={__name:"Tag",props:{themeColor:{type:String,validator:r=>["primary","secondary","neutral","info","success","warning","error"].includes(r)},variant:{type:String,validator:r=>["filled","ghost"].includes(r),default:"filled"},label:{type:String,required:!0},href:{type:String,default:""},prefix:{type:String},closable:{type:Boolean,default:!0},isDisabled:{type:Boolean,default:!1},className:{type:String,default:""}},emits:["onClose"],setup(r,{emit:s}){const e=s,a=r,m=()=>{a.isDisabled||e("onClose")},E=V(()=>{try{return!!a.href&&new URL(a.href)}catch{return!1}});return(I,O)=>(l(),o("div",{class:F(["ded-tag",{[`ded-tag-${a.variant}`]:a.variant},{[`ded-tag-${a.variant}-${a.themeColor}`]:a.variant&&a.themeColor&&!a.isDisabled},{[`ded-tag-${a.variant}-disabled`]:a.isDisabled},a.className&&a.className.split(" ")])},[a.href&&E.value?(l(),o("a",{key:0,href:a.href,class:"ded-tag-text"},[a.prefix?(l(),o("span",j,[b(u,{name:a.prefix},null,8,["name"])])):d("",!0),p(" "+$(a.label),1)],8,k)):(l(),o("div",P,[a.prefix?(l(),o("span",W,[b(u,{name:a.prefix},null,8,["name"])])):d("",!0),p(" "+$(a.label),1)])),a.closable?(l(),B(u,{key:2,name:"SvgClose",class:"ded-tag-close",onClick:m})):d("",!0)],2))}};n.__docgenInfo={exportName:"default",displayName:"Tag",description:"",tags:{},props:[{name:"themeColor",type:{name:"string"},values:["primary","secondary","neutral","info","success","warning","error"]},{name:"variant",type:{name:"string"},defaultValue:{func:!1,value:'"filled"'},values:["filled","ghost"]},{name:"label",type:{name:"string"},required:!0},{name:"href",type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"prefix",type:{name:"string"}},{name:"closable",type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"isDisabled",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"className",type:{name:"string"},defaultValue:{func:!1,value:'""'}}],events:[{name:"onClose"}],sourceFiles:["/home/runner/work/DED-WDS_VUE/DED-WDS_VUE/libs/src/ui/element/Tag/Tag.vue"]};const M={title:"Component/Tag",component:n,tags:["autodocs"],argTypes:{themeColor:{description:"主題顏色",control:{type:"select"},options:["primary","secondary","neutral","info","success","warning","error"],table:{type:{summary:"primary | secondary | neutral | info | success | warning | error "}}},variant:{description:"外觀樣式",required:!0,control:{type:"select"},options:["filled","ghost"],table:{type:{summary:"filled | ghost "}}},label:{description:"標籤文字",control:{type:"text"}},href:{description:"超連結",control:{type:"text"}},prefix:{description:"圖示",control:{type:"select",labels:{"":"none",SvgAccount:"SvgAccount",SvgSearch:"SvgSearch",SvgVisibility:"SvgVisibility",SvgVisibilityOff:"SvgVisibilityOff"}},options:["","SvgAccount","SvgSearch","SvgVisibility","SvgVisibilityOff"]},closable:{description:"摸到時顯示關閉圖示",control:{type:"boolean"}},isDisabled:{description:"是否禁用",control:{type:"boolean"}},className:{description:"客製化樣式",control:{type:"text"}},onClose:{description:"關閉事件"}},parameters:{docs:{title:"Tag",description:{component:"標籤組件的呈現及說明。"}}}},i={name:"預設項目",args:{themeColor:"primary",variant:"filled",label:"Tag",href:"",prefix:"",closable:!0,isDisabled:!1,className:""},render:r=>({components:{Tag:n},setup(){const s=f(!0);return{args:r,showTag:s}},template:`
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
        `}),parameters:{controls:{},docs:{source:{transform:(r,s)=>{const{args:e}=s;return["<script setup>",'import { ref } from "vue";','import { Tag } from "@ded-wds-vue/ui";',"const showTag = ref(true);","<\/script>","","<template>","<Tag",'  v-if="showTag"',`  ${e.themeColor?`themeColor="${e.themeColor}"`:""}`,`  ${e.variant?`variant="${e.variant}"`:""}`,`  ${e.label?`label="${e.label}"`:""}`,`  ${e.href?`href="${e.href}"`:""}`,`  ${e.prefix?`prefix="${e.prefix}"`:""}`,`  ${e.closable!==void 0?`:closable="${e.closable}"`:""}`,`  ${e.isDisabled!==void 0?`:isDisabled="${e.isDisabled}"`:""}`,`  ${e.className?`className="${e.className}"`:""}`,'  @onClose="() => showTag = false">',"</Tag>","</template>"].filter(Boolean).join(`
`).trim()}}}}},t={name:"附加元素",args:{themeColor:"primary",variant:"filled",label:"Tag",href:"",prefix:"SvgAccount",closable:!0,isDisabled:!1,className:""},render:r=>({components:{Tag:n},setup(){const s=f(!0);return{args:r,showTag:s}},template:`
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
        `}),parameters:{controls:{exclude:["prefix"]},docs:{source:{transform:(r,s)=>{const{args:e}=s;return["<script setup>",'import { ref } from "vue";','import { Tag } from "@ded-wds-vue/ui";',"const showTag = ref(true);","<\/script>","","<template>","<Tag",'  v-if="showTag"',`  ${e.themeColor?`themeColor="${e.themeColor}"`:""}`,`  ${e.variant?`variant="${e.variant}"`:""}`,`  ${e.label?`label="${e.label}"`:""}`,`  ${e.href?`href="${e.href}"`:""}`,`  ${e.prefix?`prefix="${e.prefix}"`:""}`,`  ${e.closable!==void 0?`:closable="${e.closable}"`:""}`,`  ${e.isDisabled!==void 0?`:isDisabled="${e.isDisabled}"`:""}`,`  ${e.className?`className="${e.className}"`:""}`,'  @onClose="() => showTag = false">',"</Tag>","</template>"].filter(Boolean).join(`
`).trim()}}}}},g={name:"外觀樣式",args:{themeColor:"primary",variant:"",label:"Primary",href:"",prefix:"",closable:!0,isDisabled:!1,className:""},render:r=>({components:{Tag:n},setup(){const s=f(!0);return{args:r,showTag:s}},template:`
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
        `}),parameters:{controls:{exclude:["variant"]},docs:{source:{transform:(r,s)=>{const{args:e}=s;return["<script setup>",'import { ref } from "vue";','import { Tag } from "@ded-wds-vue/ui";',"const showTag = ref(true);","<\/script>","","<template>","  <Tag",'    v-if="showTag"',`    ${e.themeColor?`themeColor="${e.themeColor}"`:""}`,'    variant="filled"',`    ${e.label?`label="${e.label}"`:""}`,`    ${e.href?`href="${e.href}"`:""}`,`    ${e.prefix?`prefix="${e.prefix}"`:""}`,`    ${e.closable!==void 0?`:closable="${e.closable}"`:""}`,`    ${e.isDisabled!==void 0?`:isDisabled="${e.isDisabled}"`:""}`,`    ${e.className?`className="${e.className}"`:""}`,'    @onClose="() => showTag = false">',"  </Tag>","  <Tag",'    v-if="showTag"',`    ${e.themeColor?`themeColor="${e.themeColor}"`:""}`,'    variant="ghost"',`    ${e.label?`label="${e.label}"`:""}`,`    ${e.href?`href="${e.href}"`:""}`,`    ${e.prefix?`prefix="${e.prefix}"`:""}`,`    ${e.closable!==void 0?`:closable="${e.closable}"`:""}`,`    ${e.isDisabled!==void 0?`:isDisabled="${e.isDisabled}"`:""}`,`    ${e.className?`className="${e.className}"`:""}`,'    @onClose="() => showTag = false">',"  </Tag>","</template>"].filter(Boolean).join(`
`).trim()}}}}},c={name:"主題色彩",args:{variant:"filled",href:"",prefix:"",closable:!0,isDisabled:!1,className:""},render:r=>({components:{Tag:n},setup(){const s=f([{id:1,themeColor:"primary",label:"Primary"},{id:2,themeColor:"secondary",label:"Secondary"},{id:3,themeColor:"neutral",label:"Neutral"},{id:4,themeColor:"info",label:"Info"},{id:5,themeColor:"success",label:"Success"},{id:6,themeColor:"warning",label:"Warning"},{id:7,themeColor:"error",label:"Error"}]);return{args:r,tagsData:s,removeTag:a=>{s.value=s.value.filter(m=>m.id!==a)}}},template:`
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
        `}),parameters:{controls:{exclude:["themeColor","label"]},docs:{source:{transform:(r,s)=>{const{args:e}=s;return["<script setup>",'import { ref } from "vue";','import { Tag } from "@ded-wds-vue/ui";',"const showTag = ref(true);","<\/script>","","<template>","  <Tag",'    v-if="showTag"','    themeColor="primary"',`    ${e.variant?`variant="${e.variant}"`:""}`,'    label="Primary"',`    ${e.prefix?`prefix="${e.prefix}"`:""}`,`    ${e.closable!==void 0?`:closable="${e.closable}"`:""}`,`    ${e.isDisabled!==void 0?`:isDisabled="${e.isDisabled}"`:""}`,`    ${e.className?`className="${e.className}"`:""}`,'    @onClose="() => showTag = false">',"  </Tag>","  <Tag",'    v-if="showTag"','    themeColor="secondary"',`    ${e.variant?`variant="${e.variant}"`:""}`,'    label="Secondary"',`    ${e.href?`href="${e.href}"`:""}`,`    ${e.prefix?`prefix="${e.prefix}"`:""}`,`    ${e.closable!==void 0?`:closable="${e.closable}"`:""}`,`    ${e.isDisabled!==void 0?`:isDisabled="${e.isDisabled}"`:""}`,`    ${e.className?`className="${e.className}"`:""}`,'    @onClose="() => showTag = false">',"  </Tag>","  <Tag",'    v-if="showTag"','    themeColor="neutral"',`    ${e.variant?`variant="${e.variant}"`:""}`,'    label="Neutral"',`    ${e.href?`href="${e.href}"`:""}`,`    ${e.prefix?`prefix="${e.prefix}"`:""}`,`    ${e.closable!==void 0?`:closable="${e.closable}"`:""}`,`    ${e.isDisabled!==void 0?`:isDisabled="${e.isDisabled}"`:""}`,`    ${e.className?`className="${e.className}"`:""}`,'    @onClose="() => showTag = false">',"  </Tag>","  <Tag",'    v-if="showTag"','    themeColor="info"',`    ${e.variant?`variant="${e.variant}"`:""}`,'    label="Info"',`    ${e.href?`href="${e.href}"`:""}`,`    ${e.prefix?`prefix="${e.prefix}"`:""}`,`    ${e.closable!==void 0?`:closable="${e.closable}"`:""}`,`    ${e.isDisabled!==void 0?`:isDisabled="${e.isDisabled}"`:""}`,`    ${e.className?`className="${e.className}"`:""}`,'    @onClose="() => showTag = false">',"  </Tag>","  <Tag",'    v-if="showTag"','    themeColor="success"',`    ${e.variant?`variant="${e.variant}"`:""}`,'    label="Success"',`    ${e.href?`href="${e.href}"`:""}`,`    ${e.prefix?`prefix="${e.prefix}"`:""}`,`    ${e.closable!==void 0?`:closable="${e.closable}"`:""}`,`    ${e.isDisabled!==void 0?`:isDisabled="${e.isDisabled}"`:""}`,`    ${e.className?`className="${e.className}"`:""}`,'    @onClose="() => showTag = false">',"  </Tag>","  <Tag",'    v-if="showTag"','    themeColor="warning"',`    ${e.variant?`variant="${e.variant}"`:""}`,'    label="Warning"',`    ${e.href?`href="${e.href}"`:""}`,`    ${e.prefix?`prefix="${e.prefix}"`:""}`,`    ${e.closable!==void 0?`:closable="${e.closable}"`:""}`,`    ${e.isDisabled!==void 0?`:isDisabled="${e.isDisabled}"`:""}`,`    ${e.className?`className="${e.className}"`:""}`,'    @onClose="() => showTag = false">',"  </Tag>","  <Tag",'    v-if="showTag"','    themeColor="error"',`    ${e.variant?`variant="${e.variant}"`:""}`,'    label="Error"',`    ${e.href?`href="${e.href}"`:""}`,`    ${e.prefix?`prefix="${e.prefix}"`:""}`,`    ${e.closable!==void 0?`:closable="${e.closable}"`:""}`,`    ${e.isDisabled!==void 0?`:isDisabled="${e.isDisabled}"`:""}`,`    ${e.className?`className="${e.className}"`:""}`,'    @onClose="() => showTag = false">',"  </Tag>","</template>"].filter(Boolean).join(`
`).trim()}}}}};var h,v,T;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
          return [\`<script setup>\`, \`import { ref } from "vue";\`, \`import { Tag } from "@ded-wds-vue/ui";\`, \`const showTag = ref(true);\`, \`<\/script>\`, '', '<template>', '<Tag', \`  v-if="showTag"\`, \`  \${args.themeColor ? \`themeColor="\${args.themeColor}"\` : ""}\`, \`  \${args.variant ? \`variant="\${args.variant}"\` : ""}\`, \`  \${args.label ? \`label="\${args.label}"\` : ""}\`, \`  \${args.href ? \`href="\${args.href}"\` : ""}\`, \`  \${args.prefix ? \`prefix="\${args.prefix}"\` : ""}\`, \`  \${args.closable !== undefined ? \`:closable="\${args.closable}"\` : ""}\`, \`  \${args.isDisabled !== undefined ? \`:isDisabled="\${args.isDisabled}"\` : ""}\`, \`  \${args.className ? \`className="\${args.className}"\` : ""}\`, \`  @onClose="() => showTag = false">\`, '</Tag>', '</template>'].filter(Boolean).join('\\n').trim();
        }
      }
    }
  }
}`,...(T=(v=i.parameters)==null?void 0:v.docs)==null?void 0:T.source}}};var C,x,D;t.parameters={...t.parameters,docs:{...(C=t.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
          return [\`<script setup>\`, \`import { ref } from "vue";\`, \`import { Tag } from "@ded-wds-vue/ui";\`, \`const showTag = ref(true);\`, \`<\/script>\`, '', '<template>', '<Tag', \`  v-if="showTag"\`, \`  \${args.themeColor ? \`themeColor="\${args.themeColor}"\` : ""}\`, \`  \${args.variant ? \`variant="\${args.variant}"\` : ""}\`, \`  \${args.label ? \`label="\${args.label}"\` : ""}\`, \`  \${args.href ? \`href="\${args.href}"\` : ""}\`, \`  \${args.prefix ? \`prefix="\${args.prefix}"\` : ""}\`, \`  \${args.closable !== undefined ? \`:closable="\${args.closable}"\` : ""}\`, \`  \${args.isDisabled !== undefined ? \`:isDisabled="\${args.isDisabled}"\` : ""}\`, \`  \${args.className ? \`className="\${args.className}"\` : ""}\`, \`  @onClose="() => showTag = false">\`, '</Tag>', '</template>'].filter(Boolean).join('\\n').trim();
        }
      }
    }
  }
}`,...(D=(x=t.parameters)==null?void 0:x.docs)==null?void 0:D.source}}};var N,w,y;g.parameters={...g.parameters,docs:{...(N=g.parameters)==null?void 0:N.docs,source:{originalSource:'{\n  name: "外觀樣式",\n  args: {\n    themeColor: \'primary\',\n    variant: "",\n    label: \'Primary\',\n    href: \'\',\n    prefix: \'\',\n    closable: true,\n    isDisabled: false,\n    className: \'\'\n  },\n  render: args => ({\n    components: {\n      Tag\n    },\n    setup() {\n      const showTag = ref(true); // 控制單一 Tag 是否顯示\n      return {\n        args,\n        showTag\n      };\n    },\n    template: `\n            <div style="display:flex; gap: 8px; flex-wrap: wrap">\n                <Tag\n                    v-if="showTag"\n                    :themeColor="args.themeColor"\n                    variant="filled"\n                    :label="args.label"\n                    :href="args.href"\n                    :prefix="args.prefix"\n                    :closable="args.closable"\n                    :isDisabled="args.isDisabled"\n                    :className="args.className"\n                    @onClose="() => showTag = false">\n                </Tag>\n                <Tag\n                    v-if="showTag"\n                    :themeColor="args.themeColor"\n                    variant="ghost"\n                    :label="args.label"\n                    :href="args.href"\n                    :prefix="args.prefix"\n                    :closable="args.closable"\n                    :isDisabled="args.isDisabled"\n                    :className="args.className"\n                    @onClose="() => showTag = false">\n                </Tag>\n            </div>\n        `\n  }),\n  // 控制 controls 中能控制的參數\n  parameters: {\n    controls: {\n      // include: [\'themeColor\', \'removable\' ],\n      exclude: [\'variant\']\n    },\n    docs: {\n      source: {\n        transform: (src, storyContext) => {\n          const {\n            args\n          } = storyContext;\n          return [`<script setup>`, `import { ref } from "vue";`, `import { Tag } from "@ded-wds-vue/ui";`, `const showTag = ref(true);`, `<\/script>`, \'\', \'<template>\', \'  <Tag\', `    v-if="showTag"`, `    ${args.themeColor ? `themeColor="${args.themeColor}"` : ""}`, `    variant="filled"`, `    ${args.label ? `label="${args.label}"` : ""}`, `    ${args.href ? `href="${args.href}"` : ""}`, `    ${args.prefix ? `prefix="${args.prefix}"` : ""}`, `    ${args.closable !== undefined ? `:closable="${args.closable}"` : ""}`, `    ${args.isDisabled !== undefined ? `:isDisabled="${args.isDisabled}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, `    @onClose="() => showTag = false">`, \'  </Tag>\', \'  <Tag\', `    v-if="showTag"`, `    ${args.themeColor ? `themeColor="${args.themeColor}"` : ""}`, `    variant="ghost"`, `    ${args.label ? `label="${args.label}"` : ""}`, `    ${args.href ? `href="${args.href}"` : ""}`, `    ${args.prefix ? `prefix="${args.prefix}"` : ""}`, `    ${args.closable !== undefined ? `:closable="${args.closable}"` : ""}`, `    ${args.isDisabled !== undefined ? `:isDisabled="${args.isDisabled}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, `    @onClose="() => showTag = false">`, \'  </Tag>\', \'</template>\'].filter(Boolean).join(\'\\n\').trim();\n        }\n      }\n    }\n  }\n}',...(y=(w=g.parameters)==null?void 0:w.docs)==null?void 0:y.source}}};var S,A,_;c.parameters={...c.parameters,docs:{...(S=c.parameters)==null?void 0:S.docs,source:{originalSource:'{\n  name: "主題色彩",\n  args: {\n    // themeColor: \'primary\',\n    variant: "filled",\n    // label:\'\',\n    href: \'\',\n    prefix: \'\',\n    closable: true,\n    isDisabled: false,\n    className: \'\'\n  },\n  render: args => ({\n    components: {\n      Tag\n    },\n    setup() {\n      const tagsData = ref([{\n        id: 1,\n        themeColor: \'primary\',\n        label: \'Primary\'\n      }, {\n        id: 2,\n        themeColor: \'secondary\',\n        label: \'Secondary\'\n      }, {\n        id: 3,\n        themeColor: \'neutral\',\n        label: \'Neutral\'\n      }, {\n        id: 4,\n        themeColor: \'info\',\n        label: \'Info\'\n      }, {\n        id: 5,\n        themeColor: \'success\',\n        label: \'Success\'\n      }, {\n        id: 6,\n        themeColor: \'warning\',\n        label: \'Warning\'\n      }, {\n        id: 7,\n        themeColor: \'error\',\n        label: \'Error\'\n      }]);\n      const removeTag = id => {\n        tagsData.value = tagsData.value.filter(tag => tag.id !== id);\n      };\n      return {\n        args,\n        tagsData,\n        removeTag\n      };\n    },\n    template: `\n            <div style="display:flex; gap: 8px; flex-wrap: wrap">\n                <Tag v-for="tag in tagsData"\n                     :key="tag.id"\n                     :themeColor="tag.themeColor"\n                     :variant="args.variant"\n                     :label="tag.label"\n                     :href="args.href"\n                     :prefix="args.prefix"\n                     :closable="args.closable"\n                     :isDisabled="args.isDisabled"\n                     :className="args.className"\n                     @onClose="removeTag(tag.id)"\n                >\n                </Tag>\n            </div>\n        `\n  }),\n  // 控制 controls 中能控制的參數\n  parameters: {\n    controls: {\n      // include: [\'themeColor\', \'removable\' ],\n      exclude: [\'themeColor\', \'label\']\n    },\n    docs: {\n      source: {\n        transform: (src, storyContext) => {\n          const {\n            args\n          } = storyContext;\n          return [`<script setup>`, `import { ref } from "vue";`, `import { Tag } from "@ded-wds-vue/ui";`, `const showTag = ref(true);`, `<\/script>`, \'\', \'<template>\', \'  <Tag\', `    v-if="showTag"`, `    themeColor="primary"`, `    ${args.variant ? `variant="${args.variant}"` : ""}`, `    label="Primary"`, `    ${args.prefix ? `prefix="${args.prefix}"` : ""}`, `    ${args.closable !== undefined ? `:closable="${args.closable}"` : ""}`, `    ${args.isDisabled !== undefined ? `:isDisabled="${args.isDisabled}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, `    @onClose="() => showTag = false">`, \'  </Tag>\', \'  <Tag\', `    v-if="showTag"`, `    themeColor="secondary"`, `    ${args.variant ? `variant="${args.variant}"` : ""}`, `    label="Secondary"`, `    ${args.href ? `href="${args.href}"` : ""}`, `    ${args.prefix ? `prefix="${args.prefix}"` : ""}`, `    ${args.closable !== undefined ? `:closable="${args.closable}"` : ""}`, `    ${args.isDisabled !== undefined ? `:isDisabled="${args.isDisabled}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, `    @onClose="() => showTag = false">`, \'  </Tag>\', \'  <Tag\', `    v-if="showTag"`, `    themeColor="neutral"`, `    ${args.variant ? `variant="${args.variant}"` : ""}`, `    label="Neutral"`, `    ${args.href ? `href="${args.href}"` : ""}`, `    ${args.prefix ? `prefix="${args.prefix}"` : ""}`, `    ${args.closable !== undefined ? `:closable="${args.closable}"` : ""}`, `    ${args.isDisabled !== undefined ? `:isDisabled="${args.isDisabled}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, `    @onClose="() => showTag = false">`, \'  </Tag>\', \'  <Tag\', `    v-if="showTag"`, `    themeColor="info"`, `    ${args.variant ? `variant="${args.variant}"` : ""}`, `    label="Info"`, `    ${args.href ? `href="${args.href}"` : ""}`, `    ${args.prefix ? `prefix="${args.prefix}"` : ""}`, `    ${args.closable !== undefined ? `:closable="${args.closable}"` : ""}`, `    ${args.isDisabled !== undefined ? `:isDisabled="${args.isDisabled}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, `    @onClose="() => showTag = false">`, \'  </Tag>\', \'  <Tag\', `    v-if="showTag"`, `    themeColor="success"`, `    ${args.variant ? `variant="${args.variant}"` : ""}`, `    label="Success"`, `    ${args.href ? `href="${args.href}"` : ""}`, `    ${args.prefix ? `prefix="${args.prefix}"` : ""}`, `    ${args.closable !== undefined ? `:closable="${args.closable}"` : ""}`, `    ${args.isDisabled !== undefined ? `:isDisabled="${args.isDisabled}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, `    @onClose="() => showTag = false">`, \'  </Tag>\', \'  <Tag\', `    v-if="showTag"`, `    themeColor="warning"`, `    ${args.variant ? `variant="${args.variant}"` : ""}`, `    label="Warning"`, `    ${args.href ? `href="${args.href}"` : ""}`, `    ${args.prefix ? `prefix="${args.prefix}"` : ""}`, `    ${args.closable !== undefined ? `:closable="${args.closable}"` : ""}`, `    ${args.isDisabled !== undefined ? `:isDisabled="${args.isDisabled}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, `    @onClose="() => showTag = false">`, \'  </Tag>\', \'  <Tag\', `    v-if="showTag"`, `    themeColor="error"`, `    ${args.variant ? `variant="${args.variant}"` : ""}`, `    label="Error"`, `    ${args.href ? `href="${args.href}"` : ""}`, `    ${args.prefix ? `prefix="${args.prefix}"` : ""}`, `    ${args.closable !== undefined ? `:closable="${args.closable}"` : ""}`, `    ${args.isDisabled !== undefined ? `:isDisabled="${args.isDisabled}"` : ""}`, `    ${args.className ? `className="${args.className}"` : ""}`, `    @onClose="() => showTag = false">`, \'  </Tag>\', \'</template>\'].filter(Boolean).join(\'\\n\').trim();\n        }\n      }\n    }\n  }\n}',...(_=(A=c.parameters)==null?void 0:A.docs)==null?void 0:_.source}}};const z=["TagDefaultStory","TagPrefixStory","TagVariantStory","TagMultiple"];export{i as TagDefaultStory,c as TagMultiple,t as TagPrefixStory,g as TagVariantStory,z as __namedExportsOrder,M as default};

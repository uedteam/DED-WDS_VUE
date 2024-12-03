import{a as c,e as g,d as m,b as h,t as x,h as D,j as $,n as N,o as t,r as y}from"./vue.esm-bundler-XbWi-Ypr.js";import{_ as d}from"./Icon-CF_kqmEQ.js";import{_ as v}from"./Button-DuWxCgGp.js";import"./iframe-BC-NZobn.js";import"../sb-preview/runtime.js";import"./index-Bb4qSo10.js";const w={key:0,class:"ded-tag-icon"},_={class:"ded-tag-text"},n={__name:"Tag",props:{themeColor:{type:String,validator:r=>["primary","secondary","tertiary","success","warning","error","info"].includes(r)},label:{type:String,required:!0,default:""},prefix:{type:String},closable:{type:Boolean,default:!0},isDisabled:{type:Boolean,default:!1},className:{type:String,default:""}},emits:["onClose"],setup(r,{emit:s}){const e=s,a=r,i=()=>{a.isDisabled||e("onClose")};return(E,S)=>(t(),c("span",{class:N(["ded-tag",{"ded-tag-contained":a.themeColor&&!a.isDisabled},{"ded-tag-outlined":a.themeColor&&a.isDisabled},{[`ded-tag-contained-${a.themeColor}`]:a.themeColor&&!a.isDisabled},{[`ded-tag-outlined-${a.themeColor}`]:a.themeColor&&a.isDisabled},{"ded-tag-contained-disabled":a.isDisabled},{"ded-tag-outlined-disabled":a.isDisabled},a.className&&a.className.split(" ")])},[a.prefix?(t(),c("div",w,[g(d,{name:a.prefix,size:"18"},null,8,["name"])])):m("",!0),h("span",_,x(a.label),1),a.closable?(t(),D(v,{key:1,variant:"text",themeColor:"primary",onClick:i},{default:$(()=>[g(d,{name:"close",class:"ded-tag-close"})]),_:1})):m("",!0)],2))}};n.__docgenInfo={exportName:"default",displayName:"Tag",description:"",tags:{},props:[{name:"themeColor",type:{name:"string"},values:["primary","secondary","tertiary","success","warning","error","info"]},{name:"label",type:{name:"string"},required:!0,defaultValue:{func:!1,value:'""'}},{name:"prefix",type:{name:"string"}},{name:"closable",type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"isDisabled",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"className",type:{name:"string"},defaultValue:{func:!1,value:'""'}}],events:[{name:"onClose"}],sourceFiles:["/Users/auouser/Desktop/Work_Space/DED-WDS_VUE/libs/src/ui/element/Tag/Tag.vue"]};const q={title:"Component/Tag",component:n,tags:["autodocs"],argTypes:{themeColor:{description:"主題顏色",control:{type:"select",labels:{"":"None",primary:"primary",secondary:"secondary",tertiary:"tertiary",success:"success",warning:"warning",error:"error",info:"info"}},options:["","primary","secondary","tertiary","success","warning","error","info"],table:{type:{summary:"primary | secondary | tertiary | success | warning | error | info"}}},label:{description:"標籤文字",control:{type:"text"}},prefix:{description:"圖示",control:{type:"select",labels:{"":"None",busy:"busy","finger-print":"finger-print",home:"home",folder:"folder"}},options:["None","busy","finger-print","home","folder"]},closable:{description:"是否可關閉",control:{type:"boolean"}},isDisabled:{description:"是否禁用",control:{type:"boolean"}},className:{description:"客製化樣式",control:{type:"text"}},onClose:{description:"關閉事件"}},parameters:{docs:{title:"Tag",description:{component:"Tag 組件的呈現及說明。"}}}},l={name:"預設項目",args:{themeColor:"primary",label:"Tag",prefix:"",closable:!0,isDisabled:!1,className:""},render:r=>({components:{Tag:n},setup(){const s=y(!0);return{args:r,showTag:s}},template:`
            <div style="display:flex; gap: 8px; flex-wrap: wrap">
                <Tag 
                    v-if="showTag"
                     :themeColor="args.themeColor"
                     :label="args.label"
                     :prefix="args.prefix"
                     :closable="args.closable"
                     :isDisabled="args.isDisabled"
                     :className="args.className"
                     @onClose="() => showTag = false">
                </Tag>
            </div>
        `}),parameters:{controls:{},docs:{source:{transform:(r,s)=>{const{args:e}=s;return["<Tag",'  v-if="showTag"',`  themeColor="${e.themeColor}"`,`  label="${e.label}"`,`  prefix="${e.prefix}"`,`  :closable="${e.closable}"`,`  :isDisabled="${e.isDisabled}"`,`  className="${e.className}"`,'  @onClose="() => showTag = false">',"</Tag>"].join(`
`).trim()}}}}},o={name:"主題色彩",args:{prefix:"",closable:!0,isDisabled:!1,className:""},render:r=>({components:{Tag:n},setup(){const s=y([{id:1,themeColor:"primary",label:"primary"},{id:2,themeColor:"secondary",label:"secondary"},{id:3,themeColor:"tertiary",label:"tertiary"},{id:4,themeColor:"success",label:"success"},{id:5,themeColor:"warning",label:"warning"},{id:6,themeColor:"error",label:"error"},{id:7,themeColor:"info",label:"info"}]);return{args:r,tagsData:s,removeTag:a=>{s.value=s.value.filter(i=>i.id!==a)}}},template:`
            <div style="display:flex; gap: 8px; flex-wrap: wrap">
                <Tag v-for="tag in tagsData"
                     :key="tag.id"
                     :themeColor="tag.themeColor"
                     :label="tag.label"
                     :prefix="args.prefix"
                     :closable="args.closable"
                     :isDisabled="args.isDisabled"
                     :className="args.className"
                     @onClose="removeTag(tag.id)"
                >
                </Tag>
            </div>
        `}),parameters:{controls:{},docs:{source:{transform:(r,s)=>{const{args:e}=s;return["<Tag",'  themeColor="primary"','  label="primary"',`  prefix="${e.prefix}"`,`  :closable="${e.closable}"`,`  :isDisabled="${e.isDisabled}"`,`  className="${e.className}"`,'  @onClose="removeTag(tag.id)">',"</Tag>","<Tag",'  themeColor="secondary"','  label="secondary"',`  prefix="${e.prefix}"`,`  :closable="${e.closable}"`,`  :isDisabled="${e.isDisabled}"`,`  className="${e.className}"`,'  @onClose="removeTag(tag.id)">',"</Tag>","<Tag",'  themeColor="tertiary"','  label="tertiary"',`  prefix="${e.prefix}"`,`  :closable="${e.closable}"`,`  :isDisabled="${e.isDisabled}"`,`  className="${e.className}"`,'  @onClose="removeTag(tag.id)">',"</Tag>","<Tag",'  themeColor="success"','  label="success"',`  prefix="${e.prefix}"`,`  :closable="${e.closable}"`,`  :isDisabled="${e.isDisabled}"`,`  className="${e.className}"`,'  @onClose="removeTag(tag.id)">',"</Tag>","<Tag",'  themeColor="warning"','  label="warning"',`  prefix="${e.prefix}"`,`  :closable="${e.closable}"`,`  :isDisabled="${e.isDisabled}"`,`  className="${e.className}"`,'  @onClose="removeTag(tag.id)">',"</Tag>","<Tag",'  themeColor="error"','  label="error"',`  prefix="${e.prefix}"`,`  :closable="${e.closable}"`,`  :isDisabled="${e.isDisabled}"`,`  className="${e.className}"`,'  @onClose="removeTag(tag.id)">',"</Tag>","<Tag",'  themeColor="info"','  label="info"',`  prefix="${e.prefix}"`,`  :closable="${e.closable}"`,`  :isDisabled="${e.isDisabled}"`,`  className="${e.className}"`,'  @onClose="removeTag(tag.id)">',"</Tag>"].join(`
`).trim()}}}}};var p,b,u;l.parameters={...l.parameters,docs:{...(p=l.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: "預設項目",
  args: {
    themeColor: 'primary',
    label: 'Tag',
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
                     :label="args.label"
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
          return ['<Tag', \`  v-if="showTag"\`, \`  themeColor="\${args.themeColor}"\`, \`  label="\${args.label}"\`, \`  prefix="\${args.prefix}"\`, \`  :closable="\${args.closable}"\`, \`  :isDisabled="\${args.isDisabled}"\`, \`  className="\${args.className}"\`, \`  @onClose="() => showTag = false">\`, '</Tag>'].join('\\n').trim();
        }
      }
    }
  }
}`,...(u=(b=l.parameters)==null?void 0:b.docs)==null?void 0:u.source}}};var f,T,C;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
  name: "主題色彩",
  args: {
    // themeColor: '',
    // label:'',
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
      const tagsData = ref([{
        id: 1,
        themeColor: 'primary',
        label: 'primary'
      }, {
        id: 2,
        themeColor: 'secondary',
        label: 'secondary'
      }, {
        id: 3,
        themeColor: 'tertiary',
        label: 'tertiary'
      }, {
        id: 4,
        themeColor: 'success',
        label: 'success'
      }, {
        id: 5,
        themeColor: 'warning',
        label: 'warning'
      }, {
        id: 6,
        themeColor: 'error',
        label: 'error'
      }, {
        id: 7,
        themeColor: 'info',
        label: 'info'
      }]);
      const removeTag = id => {
        tagsData.value = tagsData.value.filter(tag => tag.id !== id);
      };
      return {
        args,
        tagsData,
        removeTag
      };
    },
    template: \`
            <div style="display:flex; gap: 8px; flex-wrap: wrap">
                <Tag v-for="tag in tagsData"
                     :key="tag.id"
                     :themeColor="tag.themeColor"
                     :label="tag.label"
                     :prefix="args.prefix"
                     :closable="args.closable"
                     :isDisabled="args.isDisabled"
                     :className="args.className"
                     @onClose="removeTag(tag.id)"
                >
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
          return ['<Tag', \`  themeColor="primary"\`, \`  label="primary"\`, \`  prefix="\${args.prefix}"\`, \`  :closable="\${args.closable}"\`, \`  :isDisabled="\${args.isDisabled}"\`, \`  className="\${args.className}"\`, \`  @onClose="removeTag(tag.id)">\`, '</Tag>', '<Tag', \`  themeColor="secondary"\`, \`  label="secondary"\`, \`  prefix="\${args.prefix}"\`, \`  :closable="\${args.closable}"\`, \`  :isDisabled="\${args.isDisabled}"\`, \`  className="\${args.className}"\`, \`  @onClose="removeTag(tag.id)">\`, '</Tag>', '<Tag', \`  themeColor="tertiary"\`, \`  label="tertiary"\`, \`  prefix="\${args.prefix}"\`, \`  :closable="\${args.closable}"\`, \`  :isDisabled="\${args.isDisabled}"\`, \`  className="\${args.className}"\`, \`  @onClose="removeTag(tag.id)">\`, '</Tag>', '<Tag', \`  themeColor="success"\`, \`  label="success"\`, \`  prefix="\${args.prefix}"\`, \`  :closable="\${args.closable}"\`, \`  :isDisabled="\${args.isDisabled}"\`, \`  className="\${args.className}"\`, \`  @onClose="removeTag(tag.id)">\`, '</Tag>', '<Tag', \`  themeColor="warning"\`, \`  label="warning"\`, \`  prefix="\${args.prefix}"\`, \`  :closable="\${args.closable}"\`, \`  :isDisabled="\${args.isDisabled}"\`, \`  className="\${args.className}"\`, \`  @onClose="removeTag(tag.id)">\`, '</Tag>', '<Tag', \`  themeColor="error"\`, \`  label="error"\`, \`  prefix="\${args.prefix}"\`, \`  :closable="\${args.closable}"\`, \`  :isDisabled="\${args.isDisabled}"\`, \`  className="\${args.className}"\`, \`  @onClose="removeTag(tag.id)">\`, '</Tag>', '<Tag', \`  themeColor="info"\`, \`  label="info"\`, \`  prefix="\${args.prefix}"\`, \`  :closable="\${args.closable}"\`, \`  :isDisabled="\${args.isDisabled}"\`, \`  className="\${args.className}"\`, \`  @onClose="removeTag(tag.id)">\`, '</Tag>'].join('\\n').trim();
        }
      }
    }
  }
}`,...(C=(T=o.parameters)==null?void 0:T.docs)==null?void 0:C.source}}};const z=["TagDefaultStory","TagMultiple"];export{l as TagDefaultStory,o as TagMultiple,z as __namedExportsOrder,q as default};

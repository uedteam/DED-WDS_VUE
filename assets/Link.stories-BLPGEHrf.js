import{g as L,c as l,d as N,h as S,n as o,b as z,o as m}from"./vue.esm-bundler-DDwqdenp.js";import{_ as y}from"./Icon-BF6y4SVm.js";import{_ as v}from"./_plugin-vue_export-helper-DlAUqK2U.js";const w=["href","target"],b={__name:"Link",props:{href:{type:String,required:!0},target:{type:String,default:"_self"},isDisabled:{type:Boolean,default:!1},size:{type:String,default:"medium",validator:s=>["small","medium","large"].includes(s)},className:{type:String,default:""},prefix:{type:String,default:""}},setup(s){const e=s,x=L(()=>({"ded-link":!0,"ded-link-disabled":e.isDisabled,[e.className]:!!e.className}));function _(i){e.isDisabled&&i.preventDefault()}return(i,C)=>(m(),l("a",{class:o(["ded-link",`${e.isDisabled?"ded-link-disabled":""} ${x.value}`]),href:e.isDisabled?void 0:e.href,target:e.target,onClick:_},[e.prefix?(m(),l("span",{key:0,class:o(["ded-link-icon",[`ded-icon-${e.size}`]])},[z(y,{name:e.prefix},null,8,["name"])],2)):N("",!0),S(i.$slots,"default",{},void 0,!0)],10,w))}},t=v(b,[["__scopeId","data-v-5589e58d"]]);b.__docgenInfo={exportName:"default",displayName:"Link",description:"",tags:{},props:[{name:"href",type:{name:"string"},required:!0},{name:"target",type:{name:"string"},defaultValue:{func:!1,value:"'_self'"}},{name:"isDisabled",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"size",type:{name:"string"},defaultValue:{func:!1,value:"'medium'"},values:["small","medium","large"]},{name:"className",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"prefix",type:{name:"string"},defaultValue:{func:!1,value:"''"}}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/DED-WDS_VUE/DED-WDS_VUE/libs/src/ui/element/Link/Link.vue"]};const B={title:"Component/Link",component:t,tags:["autodocs"],argTypes:{href:{description:"連結的 URL",control:{type:"text"}},target:{description:"連結的開啟方式",control:{type:"select"},options:["_self","_blank","_parent","_top"]},isDisabled:{description:"是否禁用",control:{type:"boolean"}},size:{description:"連結的大小",control:{type:"select"},options:["small","medium","large"]},className:{description:"客製化樣式",control:{type:"text"}},prefix:{description:"前置圖標",control:{type:"select"},options:["SvgHome","SvgSearch","SvgUser"]}},parameters:{docs:{title:"Link",description:{component:"Link 組件的呈現及說明。"}}}},a={name:"預設項目",args:{href:"https://www.example.com",target:"_blank",isDisabled:!1,size:"medium",className:"",prefix:"SvgHome"},render:s=>({components:{Link:t},setup(){return{args:s}},template:`
      <Link
        :href="args.href"
        :target="args.target"
        :isDisabled="args.isDisabled"
        :size="args.size"
        :className="args.className"
        :prefix="args.prefix"
      >
        <span>點擊這裡</span>
      </Link>
    `})},n={name:"小尺寸連結",args:{href:"https://www.example.com",target:"_self",isDisabled:!1,size:"small",className:"",prefix:"SvgSearch"},render:s=>({components:{Link:t},setup(){return{args:s}},template:`
      <Link
        :href="args.href"
        :target="args.target"
        :isDisabled="args.isDisabled"
        :size="args.size"
        :className="args.className"
        :prefix="args.prefix"
      >
        小尺寸連結
      </Link>
    `})},r={name:"禁用連結",args:{href:"https://www.example.com",target:"_self",isDisabled:!0,size:"large",className:"",prefix:"SvgUser"},render:s=>({components:{Link:t},setup(){return{args:s}},template:`
      <Link
        :href="args.href"
        :target="args.target"
        :isDisabled="args.isDisabled"
        :size="args.size"
        :className="args.className"
        :prefix="args.prefix"
      >
        禁用連結
      </Link>
    `})};var p,c,d;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: '預設項目',
  args: {
    href: 'https://www.example.com',
    target: '_blank',
    isDisabled: false,
    size: 'medium',
    className: '',
    prefix: 'SvgHome'
  },
  render: args => ({
    components: {
      Link
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <Link
        :href="args.href"
        :target="args.target"
        :isDisabled="args.isDisabled"
        :size="args.size"
        :className="args.className"
        :prefix="args.prefix"
      >
        <span>點擊這裡</span>
      </Link>
    \`
  })
}`,...(d=(c=a.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var u,g,f;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
  name: '小尺寸連結',
  args: {
    href: 'https://www.example.com',
    target: '_self',
    isDisabled: false,
    size: 'small',
    className: '',
    prefix: 'SvgSearch'
  },
  render: args => ({
    components: {
      Link
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <Link
        :href="args.href"
        :target="args.target"
        :isDisabled="args.isDisabled"
        :size="args.size"
        :className="args.className"
        :prefix="args.prefix"
      >
        小尺寸連結
      </Link>
    \`
  })
}`,...(f=(g=n.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};var k,D,h;r.parameters={...r.parameters,docs:{...(k=r.parameters)==null?void 0:k.docs,source:{originalSource:`{
  name: '禁用連結',
  args: {
    href: 'https://www.example.com',
    target: '_self',
    isDisabled: true,
    size: 'large',
    className: '',
    prefix: 'SvgUser'
  },
  render: args => ({
    components: {
      Link
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <Link
        :href="args.href"
        :target="args.target"
        :isDisabled="args.isDisabled"
        :size="args.size"
        :className="args.className"
        :prefix="args.prefix"
      >
        禁用連結
      </Link>
    \`
  })
}`,...(h=(D=r.parameters)==null?void 0:D.docs)==null?void 0:h.source}}};const F=["LinkDefault","LinkSmall","LinkDisabled"];export{a as LinkDefault,r as LinkDisabled,n as LinkSmall,F as __namedExportsOrder,B as default};

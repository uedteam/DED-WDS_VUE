import{g as L,c as m,d as N,h as S,n as p,b as z,o as c}from"./vue.esm-bundler-CRlgvgXF.js";import{_ as v}from"./Icon-CUK9ssyM.js";const y=(s,e)=>{const n=s.__vccOpts||s;for(const[o,a]of e)n[o]=a;return n},w=["href","target"],_={__name:"Link",props:{href:{type:String,required:!0},target:{type:String,default:"_self"},isDisabled:{type:Boolean,default:!1},size:{type:String,default:"medium",validator:s=>["small","medium","large"].includes(s)},className:{type:String,default:""},prefix:{type:String,default:""}},setup(s){const e=s,n=L(()=>({"ded-link":!0,"ded-link-disabled":e.isDisabled,[e.className]:!!e.className}));function o(a){e.isDisabled&&a.preventDefault()}return(a,C)=>(c(),m("a",{class:p(["ded-link",`${e.isDisabled?"ded-link-disabled":""} ${n.value}`]),href:e.isDisabled?void 0:e.href,target:e.target,onClick:o},[e.prefix?(c(),m("span",{key:0,class:p(["ded-link-icon",[`ded-icon-${e.size}`]])},[z(v,{name:e.prefix},null,8,["name"])],2)):N("",!0),S(a.$slots,"default",{},void 0,!0)],10,w))}},l=y(_,[["__scopeId","data-v-5589e58d"]]);_.__docgenInfo={exportName:"default",displayName:"Link",description:"",tags:{},props:[{name:"href",type:{name:"string"},required:!0},{name:"target",type:{name:"string"},defaultValue:{func:!1,value:"'_self'"}},{name:"isDisabled",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"size",type:{name:"string"},defaultValue:{func:!1,value:"'medium'"},values:["small","medium","large"]},{name:"className",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"prefix",type:{name:"string"},defaultValue:{func:!1,value:"''"}}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/DED-WDS_VUE/DED-WDS_VUE/libs/src/ui/element/Link/Link.vue"]};const U={title:"Component/Link",component:l,tags:["autodocs"],argTypes:{href:{description:"連結的 URL",control:{type:"text"}},target:{description:"連結的開啟方式",control:{type:"select"},options:["_self","_blank","_parent","_top"]},isDisabled:{description:"是否禁用",control:{type:"boolean"}},size:{description:"連結的大小",control:{type:"select"},options:["small","medium","large"]},className:{description:"客製化樣式",control:{type:"text"}},prefix:{description:"前置圖標",control:{type:"select"},options:["SvgHome","SvgSearch","SvgUser"]}},parameters:{docs:{title:"Link",description:{component:"Link 組件的呈現及說明。"}}}},r={name:"預設項目",args:{href:"https://www.example.com",target:"_blank",isDisabled:!1,size:"medium",className:"",prefix:"SvgHome"},render:s=>({components:{Link:l},setup(){return{args:s}},template:`
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
    `})},t={name:"小尺寸連結",args:{href:"https://www.example.com",target:"_self",isDisabled:!1,size:"small",className:"",prefix:"SvgSearch"},render:s=>({components:{Link:l},setup(){return{args:s}},template:`
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
    `})},i={name:"禁用連結",args:{href:"https://www.example.com",target:"_self",isDisabled:!0,size:"large",className:"",prefix:"SvgUser"},render:s=>({components:{Link:l},setup(){return{args:s}},template:`
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
    `})};var u,d,g;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(g=(d=r.parameters)==null?void 0:d.docs)==null?void 0:g.source}}};var f,k,D;t.parameters={...t.parameters,docs:{...(f=t.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(D=(k=t.parameters)==null?void 0:k.docs)==null?void 0:D.source}}};var h,b,x;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(x=(b=i.parameters)==null?void 0:b.docs)==null?void 0:x.source}}};const B=["LinkDefault","LinkSmall","LinkDisabled"];export{r as LinkDefault,i as LinkDisabled,t as LinkSmall,B as __namedExportsOrder,U as default};

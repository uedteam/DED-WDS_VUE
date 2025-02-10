import{r as H,w as M,j as q,A as U,o as l,c,a as d,n as S,b as N,h as O,g as _,F as m,k as v,l as h,d as z,C,e as P,f as R,t as G,D as s}from"./vue.esm-bundler-Db4pcR2I.js";import{s as V}from"./sanitizeHtml-AW0cDGJT.js";import{_ as D}from"./Icon-DbRQxRx8.js";import{_ as u}from"./Title-hAQ9A17G.js";import{_ as b}from"./Button-roo16qVU.js";import"./iframe-G7TsRw4U.js";import"../sb-preview/runtime.js";const K=["open"],Q={class:"ded-accordion-title-content"},X={class:"ded-accordion-title-icon"},Y={class:"ded-accordion-detail-content"},L={__name:"AccordionItem",props:{prefix:{type:String},borderStyle:{type:String,default:"",validator:o=>["solid","highlight"].includes(o)},isSmallSize:{type:Boolean,default:!0},isOpen:{type:Boolean,default:!1},className:{type:String,default:""}},setup(o){const e=o,a=H(e.isOpen);M(()=>e.isOpen,n=>{a.value=n});const i=n=>{a.value=n.target.open},t=n=>{const r=n.querySelector(".detail-content");n.open&&r&&r.animate([{opacity:0,height:"0px"},{opacity:1,height:`${r.scrollHeight}px`}],{duration:500,easing:"ease-in-out"})};return q(()=>{document.querySelectorAll("details").forEach(r=>{r.addEventListener("toggle",()=>t(r))})}),U(()=>{document.querySelectorAll("details").forEach(r=>{r.removeEventListener("toggle",()=>{})})}),(n,r)=>(l(),c("li",{class:S(["ded-accordion-item",`ded-accordion-item-${e.borderStyle}`])},[d("details",{open:a.value,class:S({"ded-accordion-detail ":!0,[e.className]:!!e.className}),onToggle:i},[d("summary",{class:S(["ded-accordion-title",e.isSmallSize?"ded-accordion-title-small":"ded-accordion-title-default"])},[d("span",Q,[d("span",X,[N(D,{name:e.prefix},null,8,["name"])]),O(n.$slots,"label")]),d("span",{class:S([a.value?"ded-accordion-item-open":"ded-accordion-item-close","ded-icon-medium"])},[N(D,{size:"24",name:"SvgArrowDown"})],2)],2),d("div",Y,[O(n.$slots,"detail")])],42,K)],2))}};L.__docgenInfo={exportName:"default",displayName:"AccordionItem",description:"",tags:{},props:[{name:"prefix",type:{name:"string"}},{name:"borderStyle",type:{name:"string"},defaultValue:{func:!1,value:'""'},values:["solid","highlight"]},{name:"isSmallSize",type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"isOpen",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"className",type:{name:"string"},defaultValue:{func:!1,value:'""'}}],slots:[{name:"label"},{name:"detail"}],sourceFiles:["D:/98_測試/up/DED-WDS_VUE/libs/src/ui/element/Accordion/AccordionItem.vue"]};const Z={class:"ded-accordion-container"},ee=["innerHTML"],ae=["innerHTML"],g={__name:"Accordion",props:{dataSource:{type:Array,required:!0},prefix:{type:String},borderStyle:{type:String,default:"highlight",validator:o=>["solid","highlight"].includes(o)},isSmallSize:{type:Boolean,default:!1},isOpenAll:{type:Boolean,default:!1},className:{type:String,default:""}},setup(o){const e=o,a=_(()=>e.isOpenAll),i=_(()=>e.dataSource.map(t=>({...t,label:typeof t.label=="function"?t.label(s):V(t.label),detail:typeof t.detail=="function"?t.detail(s):V(t.detail)})));return(t,n)=>(l(),c("div",Z,[d("ul",{class:S({"ded-accordion":!0,[e.className]:!!e.className,[`ded-accordion-${e.borderStyle}`]:e.borderStyle})},[(l(!0),c(m,null,v(i.value,r=>(l(),h(L,{key:r.id,prefix:e.prefix,borderStyle:e.borderStyle,isSmallSize:e.isSmallSize,isOpen:a.value},{label:z(()=>[r.label?(l(),c(m,{key:0},[typeof r.label=="object"?(l(),h(C(r.label),{key:0})):(l(),c("span",{key:1,innerHTML:r.label},null,8,ee))],64)):P("",!0)]),detail:z(()=>[(l(!0),c(m,null,v(r.detail,(p,W)=>(l(),c(m,{key:W},[typeof p=="object"&&p.type?(l(),h(C(p),{key:0})):typeof p=="string"?(l(),c("span",{key:1,innerHTML:p},null,8,ae)):(l(),c(m,{key:2},[R(G(p),1)],64))],64))),128))]),_:2},1032,["prefix","borderStyle","isSmallSize","isOpen"]))),128))],2)]))}};g.__docgenInfo={exportName:"default",displayName:"Accordion",description:"",tags:{},props:[{name:"dataSource",type:{name:"array"},required:!0},{name:"prefix",type:{name:"string"}},{name:"borderStyle",type:{name:"string"},defaultValue:{func:!1,value:'"highlight"'},values:["solid","highlight"]},{name:"isSmallSize",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"isOpenAll",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"className",type:{name:"string"},defaultValue:{func:!1,value:'""'}}],sourceFiles:["D:/98_測試/up/DED-WDS_VUE/libs/src/ui/element/Accordion/Accordion.vue"]};function $(o){return`[${o.map(e=>{var a,i,t;return`{
        id: "${e.id}",
        label: ${typeof e.label=="function"?`"()=>(h(${JSON.stringify((a=e.label())==null?void 0:a.type.__name)}, ${JSON.stringify(((i=e.label())==null?void 0:i.props)||{})}, ${JSON.stringify(((t=e.label())==null?void 0:t.children)||"")})"`:`"${e.label}"`},
        detail: ${typeof e.detail=="function"?`"() => [
${e.detail().map(n=>`  h(${typeof n.type=="string"?`"${n.type}"`:n.type.__name||'"AnonymousComponent"'}, ${JSON.stringify(n.props||{})}, ${Array.isArray(n.children)?`[
    ${n.children.map(r=>typeof r=="object"?`h("${r.type}", ${JSON.stringify(r.props||{})}, ${JSON.stringify(r.children||"")})`:JSON.stringify(r)).join(`,
        `)}
  ]`:JSON.stringify(n.children||"")})`).join(`,
`)}
]"`:`"${e.detail}"`}
    }`}).join(`,
`)}]`}const x=[{id:"1",label:()=>s(u,{level:4,themeColor:"primary"},"What is Vue?"),detail:()=>[s("p",{},"Vue is a progressive JavaScript framework for building user interfaces."),s(b,{themeColor:"primary",variant:"soft",suffix:"SvgArrowDown",size:"small",width:"fit",borderWidth:"sm",radius:"sm",onClick:()=>{alert("Button clicked!")}},"Button")]},{id:"2",label:()=>s(u,{level:4,themeColor:"primary"},"What are the features of Vue?"),detail:()=>[s("p",{},"The features of Vue include reactive data binding, component-based architecture, directives, and a virtual DOM.")]},{id:"3",label:()=>s(u,{level:4,themeColor:"primary"},"What is included in the Vue ecosystem?"),detail:()=>[s("p",{},"The Vue ecosystem includes tools like Vue Router (for routing), Pinia (for state management), and Vite (for fast and modern development).")]},{id:"4",label:()=>s(u,{level:4,themeColor:"primary"},"What are the advantages of using Vue?"),detail:()=>[s("p",{},"The advantages of using Vue include a gentle learning curve, high flexibility, small size, and comprehensive documentation, making it easy for developers to gradually adopt and integrate into existing projects.")]}],ce={title:"Component/Accordion",component:g,tags:["autodocs"],argTypes:{dataSource:{description:"資料來源",control:{type:"object"},table:{type:{summary:"{ id: string; label: string | Function; detail: string | Function; }[]"}}},prefix:{description:"前置元素",control:{type:"text"}},borderStyle:{description:"邊框樣式",control:{type:"select"},options:["solid","highlight"],table:{type:{summary:"solid | highlight "}}},isSmallSize:{description:"是否為小尺寸",control:{type:"boolean"}},isOpenAll:{description:"是否全部展開",control:{type:"boolean"}},className:{description:"客製化樣式",control:{type:"text"}}},parameters:{docs:{title:"Accordion",description:{component:"折疊選單組件的呈現及說明。"}}}},f={name:"預設項目",args:{dataSource:x,prefix:"SvgInfo",borderStyle:"highlight",isSmallSize:!1,isOpenAll:!1,className:""},render:o=>({components:{Accordion:g,Title:u,Button:b,h:s},setup(){return{args:o,h:s}},template:`
            <Accordion
                :dataSource="args.dataSource"
                :prefix="args.prefix"
                :borderStyle="args.borderStyle"
                :isSmallSize="args.isSmallSize"
                :isOpenAll="args.isOpenAll"
                :className="args.className"
            ></Accordion>
        `}),parameters:{controls:{},docs:{source:{transform:(o,e)=>{const{args:a,h:i}=e;return["<Accordion",`  :dataSource='${$(a.dataSource)}'`,`  prefix='${a.prefix}'`,`  borderStyle='${a.borderStyle}'`,`  :isSmallSize='${a.isSmallSize}'`,`  :isOpenAll='${a.isOpenAll}'`,`  className="${a.className}"`,"></Accordion>"].join(`
`).trim()}}}}},y={name:"邊框樣式",args:{dataSource:x,prefix:"SvgInfo",borderStyle:"solid",isSmallSize:!1,isOpenAll:!1,className:""},render:o=>({components:{Accordion:g,Title:u,Button:b},setup(){return{args:o}},template:`
            <Accordion
                :dataSource="args.dataSource"
                :prefix="args.prefix"
                :borderStyle="args.borderStyle"
                :isSmallSize="args.isSmallSize"
                :isOpenAll="args.isOpenAll"
                :className="args.className"
            ></Accordion>
        `}),parameters:{controls:{},docs:{source:{transform:(o,e)=>{const{args:a}=e;return["<Accordion",`  :dataSource='${$(a.dataSource)}'`,`  prefix='${a.prefix}'`,`  borderStyle='${a.borderStyle}'`,`  :isSmallSize='${a.isSmallSize}'`,`  :isOpenAll='${a.isOpenAll}'`,`  className="${a.className}"`,"></Accordion>"].join(`
`).trim()}}}}},A={name:"小尺寸",args:{dataSource:x,prefix:"SvgInfo",borderStyle:"solid",isSmallSize:!0,isOpenAll:!1,className:""},render:o=>({components:{Accordion:g,Title:u,Button:b},setup(){return{args:o}},template:`
            <Accordion
                :dataSource="args.dataSource"
                :prefix="args.prefix"
                :borderStyle="args.borderStyle"
                :isSmallSize="args.isSmallSize"
                :isOpenAll="args.isOpenAll"
                :className="args.className"
            ></Accordion>
        `}),parameters:{controls:{},docs:{source:{transform:(o,e)=>{const{args:a}=e;return["<Accordion",`  :dataSource='${$(a.dataSource)}'`,`  prefix='${a.prefix}'`,`  borderStyle='${a.borderStyle}'`,`  :isSmallSize='${a.isSmallSize}'`,`  :isOpenAll='${a.isOpenAll}'`,`  className="${a.className}"`,"></Accordion>"].join(`
`).trim()}}}}};var B,k,T;f.parameters={...f.parameters,docs:{...(B=f.parameters)==null?void 0:B.docs,source:{originalSource:`{
  name: "預設項目",
  args: {
    dataSource: dataSource,
    prefix: "SvgInfo",
    borderStyle: "highlight",
    isSmallSize: false,
    isOpenAll: false,
    className: ""
  },
  render: args => ({
    components: {
      Accordion,
      Title,
      Button,
      h
    },
    setup() {
      return {
        args,
        h
      };
    },
    template: \`
            <Accordion
                :dataSource="args.dataSource"
                :prefix="args.prefix"
                :borderStyle="args.borderStyle"
                :isSmallSize="args.isSmallSize"
                :isOpenAll="args.isOpenAll"
                :className="args.className"
            ></Accordion>
        \`
  }),
  parameters: {
    controls: {
      // include: ['themeColor', 'label', 'value', 'name' ],
    },
    docs: {
      source: {
        transform: (src, storyContext) => {
          const {
            args,
            h
          } = storyContext;
          const dataSourceString = formatDataSource(args.dataSource);
          return ['<Accordion', \`  :dataSource='\${dataSourceString}'\`, \`  prefix='\${args.prefix}'\`, \`  borderStyle='\${args.borderStyle}'\`, \`  :isSmallSize='\${args.isSmallSize}'\`, \`  :isOpenAll='\${args.isOpenAll}'\`, \`  className="\${args.className}"\`, '></Accordion>'].join('\\n').trim();
        }
      }
    }
  }
}`,...(T=(k=f.parameters)==null?void 0:k.docs)==null?void 0:T.source}}};var j,E,F;y.parameters={...y.parameters,docs:{...(j=y.parameters)==null?void 0:j.docs,source:{originalSource:`{
  name: "邊框樣式",
  args: {
    dataSource: dataSource,
    prefix: "SvgInfo",
    borderStyle: "solid",
    isSmallSize: false,
    isOpenAll: false,
    className: ""
  },
  render: args => ({
    components: {
      Accordion,
      Title,
      Button
    },
    setup() {
      return {
        args
      };
    },
    template: \`
            <Accordion
                :dataSource="args.dataSource"
                :prefix="args.prefix"
                :borderStyle="args.borderStyle"
                :isSmallSize="args.isSmallSize"
                :isOpenAll="args.isOpenAll"
                :className="args.className"
            ></Accordion>
        \`
  }),
  parameters: {
    controls: {
      // include: ['themeColor', 'label', 'value', 'name' ],
    },
    docs: {
      source: {
        transform: (src, storyContext) => {
          const {
            args
          } = storyContext;
          const dataSourceString = formatDataSource(args.dataSource);
          return ['<Accordion', \`  :dataSource='\${dataSourceString}'\`, \`  prefix='\${args.prefix}'\`, \`  borderStyle='\${args.borderStyle}'\`, \`  :isSmallSize='\${args.isSmallSize}'\`, \`  :isOpenAll='\${args.isOpenAll}'\`, \`  className="\${args.className}"\`, '></Accordion>'].join('\\n').trim();
        }
      }
    }
  }
}`,...(F=(E=y.parameters)==null?void 0:E.docs)==null?void 0:F.source}}};var w,J,I;A.parameters={...A.parameters,docs:{...(w=A.parameters)==null?void 0:w.docs,source:{originalSource:`{
  name: "小尺寸",
  args: {
    dataSource: dataSource,
    prefix: "SvgInfo",
    borderStyle: "solid",
    isSmallSize: true,
    isOpenAll: false,
    className: ""
  },
  render: args => ({
    components: {
      Accordion,
      Title,
      Button
    },
    setup() {
      return {
        args
      };
    },
    template: \`
            <Accordion
                :dataSource="args.dataSource"
                :prefix="args.prefix"
                :borderStyle="args.borderStyle"
                :isSmallSize="args.isSmallSize"
                :isOpenAll="args.isOpenAll"
                :className="args.className"
            ></Accordion>
        \`
  }),
  parameters: {
    controls: {
      // include: ['themeColor', 'label', 'value', 'name' ],
    },
    docs: {
      source: {
        transform: (src, storyContext) => {
          const {
            args
          } = storyContext;
          const dataSourceString = formatDataSource(args.dataSource);
          return ['<Accordion', \`  :dataSource='\${dataSourceString}'\`, \`  prefix='\${args.prefix}'\`, \`  borderStyle='\${args.borderStyle}'\`, \`  :isSmallSize='\${args.isSmallSize}'\`, \`  :isOpenAll='\${args.isOpenAll}'\`, \`  className="\${args.className}"\`, '></Accordion>'].join('\\n').trim();
        }
      }
    }
  }
}`,...(I=(J=A.parameters)==null?void 0:J.docs)==null?void 0:I.source}}};const de=["AccordionDefault","AccordionBorderStyle","AccordionSmall"];export{y as AccordionBorderStyle,f as AccordionDefault,A as AccordionSmall,de as __namedExportsOrder,ce as default};

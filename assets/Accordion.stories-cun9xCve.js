import{k as H,w as M,q as U,A as R,o as i,c,a as p,n as m,b as $,e as J,r as N,g as O,F as S,h as z,j as h,d as v,C as _,f as P,t as G,D as o}from"./vue.esm-bundler-qCK_iSPY.js";import{s as C}from"./sanitizeHtml-AW0cDGJT.js";import{_ as V}from"./Icon-Dr0uxKWp.js";import{_ as d}from"./Title-Bap0zsXG.js";import{_ as g}from"./Button-BBJUKVar.js";import"./iframe-Dp5wB7_x.js";import"../sb-preview/runtime.js";const K=["open"],Q={class:"ded-accordion-title-content"},X={key:0,class:"ded-accordion-title-icon"},Y={class:"ded-accordion-detail-content"},I={__name:"AccordionItem",props:{prefix:{type:String},borderStyle:{type:String,default:"",validator:s=>["solid","highlight"].includes(s)},isSmallSize:{type:Boolean,default:!0},isOpen:{type:Boolean,default:!1},className:{type:String,default:""}},setup(s){const a=s,e=H(a.isOpen);M(()=>a.isOpen,n=>{e.value=n});const l=n=>{e.value=n.target.open},t=n=>{const r=n.querySelector(".detail-content");n.open&&r&&r.animate([{opacity:0,height:"0px"},{opacity:1,height:`${r.scrollHeight}px`}],{duration:500,easing:"ease-in-out"})};return U(()=>{document.querySelectorAll("details").forEach(r=>{r.addEventListener("toggle",()=>t(r))})}),R(()=>{document.querySelectorAll("details").forEach(r=>{r.removeEventListener("toggle",()=>{})})}),(n,r)=>(i(),c("li",{class:m(["ded-accordion-item",`ded-accordion-item-${a.borderStyle}`])},[p("details",{open:e.value,class:m({"ded-accordion-detail ":!0,[a.className]:!!a.className}),onToggle:l},[p("summary",{class:m(["ded-accordion-title",a.isSmallSize?"ded-accordion-title-small":"ded-accordion-title-default"])},[p("span",Q,[a.prefix?(i(),c("span",X,[$(V,{name:a.prefix},null,8,["name"])])):J("",!0),p("span",{class:m(a.isSmallSize?"ded-accordion-title-content-small":"ded-accordion-title-content-default")},[N(n.$slots,"label")],2)]),p("span",{class:m([e.value?"ded-accordion-item-open":"ded-accordion-item-close","ded-icon-medium"])},[$(V,{size:"24",name:"SvgArrowDown"})],2)],2),p("div",Y,[N(n.$slots,"detail")])],42,K)],2))}};I.__docgenInfo={exportName:"default",displayName:"AccordionItem",description:"",tags:{},props:[{name:"prefix",type:{name:"string"}},{name:"borderStyle",type:{name:"string"},defaultValue:{func:!1,value:'""'},values:["solid","highlight"]},{name:"isSmallSize",type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"isOpen",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"className",type:{name:"string"},defaultValue:{func:!1,value:'""'}}],slots:[{name:"label"},{name:"detail"}],sourceFiles:["/Users/auouser/Desktop/Work_Space/DED-WDS_VUE/libs/src/ui/element/Accordion/AccordionItem.vue"]};const Z={class:"ded-accordion-container"},ee=["innerHTML"],ae=["innerHTML"],f={__name:"Accordion",props:{dataSource:{type:Array,required:!0},prefix:{type:String},borderStyle:{type:String,default:"highlight",validator:s=>["solid","highlight"].includes(s)},isSmallSize:{type:Boolean,default:!1},isOpenAll:{type:Boolean,default:!1},className:{type:String,default:""}},setup(s){const a=s,e=O(()=>a.isOpenAll),l=O(()=>a.dataSource.map(t=>({...t,label:typeof t.label=="function"?t.label(o):C(t.label),detail:typeof t.detail=="function"?t.detail(o):C(t.detail)})));return(t,n)=>(i(),c("div",Z,[p("ul",{class:m({"ded-accordion":!0,[a.className]:!!a.className,[`ded-accordion-${a.borderStyle}`]:a.borderStyle})},[(i(!0),c(S,null,z(l.value,r=>(i(),h(I,{key:r.id,prefix:a.prefix,borderStyle:a.borderStyle,isSmallSize:a.isSmallSize,isOpen:e.value},{label:v(()=>[r.label?(i(),c(S,{key:0},[typeof r.label=="object"?(i(),h(_(r.label),{key:0})):(i(),c("span",{key:1,innerHTML:r.label},null,8,ee))],64)):J("",!0)]),detail:v(()=>[(i(!0),c(S,null,z(r.detail,(u,q)=>(i(),c(S,{key:q},[typeof u=="object"&&u.type?(i(),h(_(u),{key:0})):typeof u=="string"?(i(),c("span",{key:1,innerHTML:u},null,8,ae)):(i(),c(S,{key:2},[P(G(u),1)],64))],64))),128))]),_:2},1032,["prefix","borderStyle","isSmallSize","isOpen"]))),128))],2)]))}};f.__docgenInfo={exportName:"default",displayName:"Accordion",description:"",tags:{},props:[{name:"dataSource",type:{name:"array"},required:!0},{name:"prefix",type:{name:"string"}},{name:"borderStyle",type:{name:"string"},defaultValue:{func:!1,value:'"highlight"'},values:["solid","highlight"]},{name:"isSmallSize",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"isOpenAll",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"className",type:{name:"string"},defaultValue:{func:!1,value:'""'}}],sourceFiles:["/Users/auouser/Desktop/Work_Space/DED-WDS_VUE/libs/src/ui/element/Accordion/Accordion.vue"]};function x(s){return`[${s.map(a=>{var e,l,t;return`{
        id: "${a.id}",
        label: ${typeof a.label=="function"?`"()=>(h(${JSON.stringify((e=a.label())==null?void 0:e.type.__name)}, ${JSON.stringify(((l=a.label())==null?void 0:l.props)||{})}, ${JSON.stringify(((t=a.label())==null?void 0:t.children)||"")})"`:`"${a.label}"`},
        detail: ${typeof a.detail=="function"?`"() => [
${a.detail().map(n=>`  h(${typeof n.type=="string"?`"${n.type}"`:n.type.__name||'"AnonymousComponent"'}, ${JSON.stringify(n.props||{})}, ${Array.isArray(n.children)?`[
    ${n.children.map(r=>typeof r=="object"?`h("${r.type}", ${JSON.stringify(r.props||{})}, ${JSON.stringify(r.children||"")})`:JSON.stringify(r)).join(`,
        `)}
  ]`:JSON.stringify(n.children||"")})`).join(`,
`)}
]"`:`"${a.detail}"`}
    }`}).join(`,
`)}]`}const re=[{id:"1",label:()=>o(d,{themeColor:"primary"},"What is Vue?"),detail:()=>[o("p",{},"Vue is a progressive JavaScript framework for building user interfaces."),o(g,{themeColor:"primary",variant:"soft",suffix:"SvgArrowDown",size:"small",width:"fit",borderWidth:"sm",radius:"sm",onClick:()=>{alert("Button clicked!")}},"Button")]},{id:"2",label:()=>o(d,{themeColor:"primary"},"What are the features of Vue?"),detail:()=>[o("p",{},"The features of Vue include reactive data binding, component-based architecture, directives, and a virtual DOM.")]},{id:"3",label:()=>o(d,{themeColor:"primary"},"What is included in the Vue ecosystem?"),detail:()=>[o("p",{},"The Vue ecosystem includes tools like Vue Router (for routing), Pinia (for state management), and Vite (for fast and modern development).")]},{id:"4",label:()=>o(d,{themeColor:"primary"},"What are the advantages of using Vue?"),detail:()=>[o("p",{},"The advantages of using Vue include a gentle learning curve, high flexibility, small size, and comprehensive documentation, making it easy for developers to gradually adopt and integrate into existing projects.")]}],L=[{id:"1",label:()=>o(d,{themeColor:"primary"},"What is Vue?"),detail:()=>[o("p",{},"Vue is a progressive JavaScript framework for building user interfaces."),o(g,{themeColor:"primary",variant:"soft",suffix:"SvgArrowDown",size:"small",width:"fit",borderWidth:"sm",radius:"sm",onClick:()=>{alert("Button clicked!")}},"Button")]}],de={title:"Component/Accordion",component:f,tags:["autodocs"],argTypes:{dataSource:{description:"資料來源",control:{type:"object"},table:{type:{summary:"{ id: string; label: string | Function; detail: string | Function; }[]"}}},prefix:{description:"前置元素",control:{type:"select",labels:{"":"none",primary:"SvgInfo"}},options:["","SvgInfo"],table:{type:{summary:"string"}}},borderStyle:{description:"邊框樣式",control:{type:"select"},options:["solid","highlight"],table:{type:{summary:"solid | highlight "}}},isSmallSize:{description:"是否為小尺寸",control:{type:"boolean"}},isOpenAll:{description:"是否全部展開",control:{type:"boolean"}},className:{description:"客製化樣式",control:{type:"text"}}},parameters:{docs:{title:"Accordion",description:{component:"折疊選單組件的呈現及說明。"}}}},y={name:"預設項目",args:{dataSource:re,prefix:"SvgInfo",borderStyle:"highlight",isSmallSize:!1,isOpenAll:!1,className:""},render:s=>({components:{Accordion:f,Title:d,Button:g,h:o},setup(){return{args:s,h:o}},template:`
            <Accordion
                :dataSource="args.dataSource"
                :prefix="args.prefix"
                :borderStyle="args.borderStyle"
                :isSmallSize="args.isSmallSize"
                :isOpenAll="args.isOpenAll"
                :className="args.className"
            ></Accordion>
        `}),parameters:{controls:{},docs:{source:{transform:(s,a)=>{const{args:e}=a;return["<Accordion",`  :dataSource='${x(e.dataSource)}'`,`  prefix='${e.prefix}'`,`  borderStyle='${e.borderStyle}'`,`  :isSmallSize='${e.isSmallSize}'`,`  :isOpenAll='${e.isOpenAll}'`,`  className="${e.className}"`,"></Accordion>"].join(`
`).trim()}}}}},A={name:"邊框樣式",args:{dataSource:L,prefix:"SvgInfo",borderStyle:"solid",isSmallSize:!1,isOpenAll:!1,className:""},render:s=>({components:{Accordion:f,Title:d,Button:g},setup(){return{args:s}},template:`
            <div style="display:flex; flex-direction: column; gap: 16px">
                <Accordion
                    :dataSource="args.dataSource"
                    :prefix="args.prefix"
                    borderStyle="highlight"
                    :isSmallSize="args.isSmallSize"
                    :isOpenAll="args.isOpenAll"
                    :className="args.className"
                ></Accordion>
                <Accordion
                    :dataSource="args.dataSource"
                    :prefix="args.prefix"
                    borderStyle="solid"
                    :isSmallSize="args.isSmallSize"
                    :isOpenAll="args.isOpenAll"
                    :className="args.className"
                ></Accordion>
            </div>
        `}),parameters:{controls:{exclude:["borderStyle"]},docs:{source:{transform:(s,a)=>{const{args:e}=a,l=x(e.dataSource);return["<Accordion",`  :dataSource='${l}'`,`  prefix='${e.prefix}'`,"  borderStyle='highlight'",`  :isSmallSize='${e.isSmallSize}'`,`  :isOpenAll='${e.isOpenAll}'`,`  className="${e.className}"`,"></Accordion>","<Accordion",`  :dataSource='${l}'`,`  prefix='${e.prefix}'`,"  borderStyle='solid'",`  :isSmallSize='${e.isSmallSize}'`,`  :isOpenAll='${e.isOpenAll}'`,`  className="${e.className}"`,"></Accordion>"].join(`
`).trim()}}}}},b={name:"元件尺寸",args:{dataSource:L,prefix:"SvgInfo",borderStyle:"solid",isSmallSize:!0,isOpenAll:!1,className:""},render:s=>({components:{Accordion:f,Title:d,Button:g},setup(){return{args:s}},template:`
            <div style="display:flex; flex-direction: column; gap: 16px">
                <Accordion
                    :dataSource="args.dataSource"
                    :prefix="args.prefix"
                    :borderStyle="args.borderStyle"
                    :isSmallSize="false"
                    :isOpenAll="args.isOpenAll"
                    :className="args.className"
                ></Accordion>
                <Accordion
                    :dataSource="args.dataSource"
                    :prefix="args.prefix"
                    :borderStyle="args.borderStyle"
                    :isSmallSize="true"
                    :isOpenAll="args.isOpenAll"
                    :className="args.className"
                ></Accordion>
            </div>
        `}),parameters:{controls:{exclude:["isSmallSize"]},docs:{source:{transform:(s,a)=>{const{args:e}=a,l=x(e.dataSource);return["<Accordion",`  :dataSource='${l}'`,`  prefix='${e.prefix}'`,`  borderStyle='${e.borderStyle}'`,"  :isSmallSize='false'",`  :isOpenAll='${e.isOpenAll}'`,`  className="${e.className}"`,"></Accordion>","<Accordion",`  :dataSource='${l}'`,`  prefix='${e.prefix}'`,`  borderStyle='${e.borderStyle}'`,"  :isSmallSize='true'",`  :isOpenAll='${e.isOpenAll}'`,`  className="${e.className}"`,"></Accordion>"].join(`
`).trim()}}}}};var k,D,B;y.parameters={...y.parameters,docs:{...(k=y.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
            args
          } = storyContext;
          const dataSourceString = formatDataSource(args.dataSource);
          return ['<Accordion', \`  :dataSource='\${dataSourceString}'\`, \`  prefix='\${args.prefix}'\`, \`  borderStyle='\${args.borderStyle}'\`, \`  :isSmallSize='\${args.isSmallSize}'\`, \`  :isOpenAll='\${args.isOpenAll}'\`, \`  className="\${args.className}"\`, '></Accordion>'].join('\\n').trim();
        }
      }
    }
  }
}`,...(B=(D=y.parameters)==null?void 0:D.docs)==null?void 0:B.source}}};var T,E,j;A.parameters={...A.parameters,docs:{...(T=A.parameters)==null?void 0:T.docs,source:{originalSource:`{
  name: "邊框樣式",
  args: {
    dataSource: oneRecord,
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
            <div style="display:flex; flex-direction: column; gap: 16px">
                <Accordion
                    :dataSource="args.dataSource"
                    :prefix="args.prefix"
                    borderStyle="highlight"
                    :isSmallSize="args.isSmallSize"
                    :isOpenAll="args.isOpenAll"
                    :className="args.className"
                ></Accordion>
                <Accordion
                    :dataSource="args.dataSource"
                    :prefix="args.prefix"
                    borderStyle="solid"
                    :isSmallSize="args.isSmallSize"
                    :isOpenAll="args.isOpenAll"
                    :className="args.className"
                ></Accordion>
            </div>
        \`
  }),
  parameters: {
    controls: {
      // include: ['themeColor', 'label', 'value', 'name' ],
      exclude: ['borderStyle']
    },
    docs: {
      source: {
        transform: (src, storyContext) => {
          const {
            args
          } = storyContext;
          const dataSourceString = formatDataSource(args.dataSource);
          return ['<Accordion', \`  :dataSource='\${dataSourceString}'\`, \`  prefix='\${args.prefix}'\`, \`  borderStyle='highlight'\`, \`  :isSmallSize='\${args.isSmallSize}'\`, \`  :isOpenAll='\${args.isOpenAll}'\`, \`  className="\${args.className}"\`, '></Accordion>', '<Accordion', \`  :dataSource='\${dataSourceString}'\`, \`  prefix='\${args.prefix}'\`, \`  borderStyle='solid'\`, \`  :isSmallSize='\${args.isSmallSize}'\`, \`  :isOpenAll='\${args.isOpenAll}'\`, \`  className="\${args.className}"\`, '></Accordion>'].join('\\n').trim();
        }
      }
    }
  }
}`,...(j=(E=A.parameters)==null?void 0:E.docs)==null?void 0:j.source}}};var w,W,F;b.parameters={...b.parameters,docs:{...(w=b.parameters)==null?void 0:w.docs,source:{originalSource:`{
  name: "元件尺寸",
  args: {
    dataSource: oneRecord,
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
            <div style="display:flex; flex-direction: column; gap: 16px">
                <Accordion
                    :dataSource="args.dataSource"
                    :prefix="args.prefix"
                    :borderStyle="args.borderStyle"
                    :isSmallSize="false"
                    :isOpenAll="args.isOpenAll"
                    :className="args.className"
                ></Accordion>
                <Accordion
                    :dataSource="args.dataSource"
                    :prefix="args.prefix"
                    :borderStyle="args.borderStyle"
                    :isSmallSize="true"
                    :isOpenAll="args.isOpenAll"
                    :className="args.className"
                ></Accordion>
            </div>
        \`
  }),
  parameters: {
    controls: {
      // include: ['themeColor', 'label', 'value', 'name' ],
      exclude: ['isSmallSize']
    },
    docs: {
      source: {
        transform: (src, storyContext) => {
          const {
            args
          } = storyContext;
          const dataSourceString = formatDataSource(args.dataSource);
          return ['<Accordion', \`  :dataSource='\${dataSourceString}'\`, \`  prefix='\${args.prefix}'\`, \`  borderStyle='\${args.borderStyle}'\`, \`  :isSmallSize='false'\`, \`  :isOpenAll='\${args.isOpenAll}'\`, \`  className="\${args.className}"\`, '></Accordion>', '<Accordion', \`  :dataSource='\${dataSourceString}'\`, \`  prefix='\${args.prefix}'\`, \`  borderStyle='\${args.borderStyle}'\`, \`  :isSmallSize='true'\`, \`  :isOpenAll='\${args.isOpenAll}'\`, \`  className="\${args.className}"\`, '></Accordion>'].join('\\n').trim();
        }
      }
    }
  }
}`,...(F=(W=b.parameters)==null?void 0:W.docs)==null?void 0:F.source}}};const pe=["AccordionDefault","AccordionBorderStyle","AccordionSizeStory"];export{A as AccordionBorderStyle,y as AccordionDefault,b as AccordionSizeStory,pe as __namedExportsOrder,de as default};

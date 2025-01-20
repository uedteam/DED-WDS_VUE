import{h as q,w as M,l as Q,q as U,o as t,c as i,a as c,n as S,b as v,r as N,g as z,F as p,D as _,E as h,d as O,H as V,e as J,f as P,t as R,z as s}from"./vue.esm-bundler-D0YZwI1O.js";import{s as C}from"./sanitizeHtml-AW0cDGJT.js";import{_ as D}from"./Icon-BEQChxlu.js";import{_ as d}from"./Title-Db1zcb8e.js";import{_ as b}from"./Button-DNzccG-4.js";import"./iframe-BAU84F5S.js";import"../sb-preview/runtime.js";const G=["open"],K={class:"ded-accordion-title-content"},X={class:"ded-accordion-title-icon"},Y={class:"ded-accordion-detail-content"},L={__name:"AccordionItem",props:{prefix:{type:String},borderStyle:{type:String,default:"",validator:r=>["solid","highlight"].includes(r)},isSmallSize:{type:Boolean,default:!0},isOpen:{type:Boolean,default:!1},className:{type:String,default:""}},setup(r){const e=r,a=q(e.isOpen);M(()=>e.isOpen,o=>{a.value=o});const u=o=>{a.value=o.target.open},l=o=>{const n=o.querySelector(".detail-content");o.open&&n&&n.animate([{opacity:0,height:"0px"},{opacity:1,height:`${n.scrollHeight}px`}],{duration:500,easing:"ease-in-out"})};return Q(()=>{document.querySelectorAll("details").forEach(n=>{n.addEventListener("toggle",()=>l(n))})}),U(()=>{document.querySelectorAll("details").forEach(n=>{n.removeEventListener("toggle",()=>{})})}),(o,n)=>(t(),i("li",{class:S(["ded-accordion-item",`ded-accordion-item-${e.borderStyle}`])},[c("details",{open:a.value,class:S({"ded-accordion-detail ":!0,[e.className]:!!e.className}),onToggle:u},[c("summary",{class:S(["ded-accordion-title",e.isSmallSize?"ded-accordion-title-small":"ded-accordion-title-default"])},[c("span",K,[c("span",X,[v(D,{name:e.prefix},null,8,["name"])]),N(o.$slots,"label")]),c("span",{class:S([a.value?"ded-accordion-item-open":"ded-accordion-item-close","ded-icon-medium"])},[v(D,{size:"24",name:"SvgArrowDown"})],2)],2),c("div",Y,[N(o.$slots,"detail")])],42,G)],2))}};L.__docgenInfo={exportName:"default",displayName:"AccordionItem",description:"",tags:{},props:[{name:"prefix",type:{name:"string"}},{name:"borderStyle",type:{name:"string"},defaultValue:{func:!1,value:'""'},values:["solid","highlight"]},{name:"isSmallSize",type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"isOpen",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"className",type:{name:"string"},defaultValue:{func:!1,value:'""'}}],slots:[{name:"label"},{name:"detail"}],sourceFiles:["D:/98_測試/up/DED-WDS_VUE/libs/src/ui/element/Accordion/AccordionItem.vue"]};const Z={class:"ded-accordion-container"},ee=["innerHTML"],ae=["innerHTML"],g={__name:"Accordion",props:{dataSource:{type:Array,required:!0},prefix:{type:String},borderStyle:{type:String,default:"highlight",validator:r=>["solid","highlight"].includes(r)},isSmallSize:{type:Boolean,default:!1},isOpenAll:{type:Boolean,default:!1},className:{type:String,default:""}},setup(r){const e=r,a=z(()=>e.isOpenAll),u=z(()=>e.dataSource.map(l=>({...l,label:typeof l.label=="function"?l.label(s):C(l.label),detail:typeof l.detail=="function"?l.detail(s):C(l.detail)})));return(l,o)=>(t(),i("div",Z,[c("ul",{class:S({"ded-accordion":!0,[e.className]:!!e.className,[`ded-accordion-${e.borderStyle}`]:e.borderStyle})},[(t(!0),i(p,null,_(u.value,n=>(t(),h(L,{key:n.id,prefix:e.prefix,borderStyle:e.borderStyle,isSmallSize:e.isSmallSize,isOpen:a.value},{label:O(()=>[n.label?(t(),i(p,{key:0},[typeof n.label=="object"?(t(),h(V(n.label),{key:0})):(t(),i("span",{key:1,innerHTML:n.label},null,8,ee))],64)):J("",!0)]),detail:O(()=>[(t(!0),i(p,null,_(n.detail,(m,W)=>(t(),i(p,{key:W},[typeof m=="object"&&m.type?(t(),h(V(m),{key:0})):typeof m=="string"?(t(),i("span",{key:1,innerHTML:m},null,8,ae)):(t(),i(p,{key:2},[P(R(m),1)],64))],64))),128))]),_:2},1032,["prefix","borderStyle","isSmallSize","isOpen"]))),128))],2)]))}};g.__docgenInfo={exportName:"default",displayName:"Accordion",description:"",tags:{},props:[{name:"dataSource",type:{name:"array"},required:!0},{name:"prefix",type:{name:"string"}},{name:"borderStyle",type:{name:"string"},defaultValue:{func:!1,value:'"highlight"'},values:["solid","highlight"]},{name:"isSmallSize",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"isOpenAll",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"className",type:{name:"string"},defaultValue:{func:!1,value:'""'}}],sourceFiles:["D:/98_測試/up/DED-WDS_VUE/libs/src/ui/element/Accordion/Accordion.vue"]};function x(r){return`[${r.map(e=>`{
        id: "${e.id}",
        label: ${typeof e.label=="function"?'"[h Function]"':`"${e.label}"`},
        detail: ${typeof e.detail=="function"?'"[h Function]"':`"${e.detail}"`}
    }`).join(`,
`)}]`}const $=[{id:"1",label:()=>s(d,{level:4,themeColor:"primary"},"What is Vue?"),detail:()=>[s("p",{},"Vue is a progressive JavaScript framework for building user interfaces."),s(b,{themeColor:"primary",variant:"soft",suffix:"SvgArrowDown",size:"small",width:"fit",borderWidth:"sm",radius:"sm",onClick:()=>{alert("Button clicked!")}},"Button")]},{id:"2",label:()=>s(d,{level:4,themeColor:"primary"},"Q2. What are the features of Vue?"),detail:()=>[s("p",{},"The features of Vue include reactive data binding, component-based architecture, directives, and a virtual DOM.")]},{id:"3",label:()=>s(d,{level:4,themeColor:"primary"},"Q3. What is included in the Vue ecosystem?"),detail:()=>[s("p",{},"The Vue ecosystem includes tools like Vue Router (for routing), Pinia (for state management), and Vite (for fast and modern development).")]},{id:"4",label:()=>s(d,{level:4,themeColor:"primary"},"Q4. What are the advantages of using Vue?"),detail:()=>[s("p",{},"The advantages of using Vue include a gentle learning curve, high flexibility, small size, and comprehensive documentation, making it easy for developers to gradually adopt and integrate into existing projects.")]}],ce={title:"Component/Accordion",component:g,tags:["autodocs"],argTypes:{dataSource:{description:"資料來源",control:{type:"object"},table:{type:{summary:"{ id: string; label: string | Function; detail: string | Function; }[]"}}},prefix:{description:"前置元素",control:{type:"text"}},borderStyle:{description:"邊框樣式",control:{type:"select"},options:["solid","highlight"],table:{type:{summary:"solid | highlight "}}},isSmallSize:{description:"是否為小尺寸",control:{type:"boolean"}},isOpenAll:{description:"是否全部展開",control:{type:"boolean"}},className:{description:"客製化樣式",control:{type:"text"}}},parameters:{docs:{title:"Accordion",description:{component:"折疊選單組件的呈現及說明。"}}}},f={name:"預設項目",args:{dataSource:$,prefix:"SvgInfo",borderStyle:"highlight",isSmallSize:!1,isOpenAll:!1,className:""},render:r=>({components:{Accordion:g,Title:d,Button:b},setup(){return{args:r}},template:`
            <Accordion
                :dataSource="args.dataSource"
                :prefix="args.prefix"
                :borderStyle="args.borderStyle"
                :isSmallSize="args.isSmallSize"
                :isOpenAll="args.isOpenAll"
                :className="args.className"
            ></Accordion>
        `}),parameters:{controls:{},docs:{source:{transform:(r,e)=>{const{args:a}=e;return["<Accordion",`  :dataSource='${x(a.dataSource)}'`,`  prefix='${a.prefix}'`,`  borderStyle='${a.borderStyle}'`,`  :isSmallSize='${a.isSmallSize}'`,`  :isOpenAll='${a.isOpenAll}'`,`  className="${a.className}"`,"></Accordion>"].join(`
`).trim()}}}}},y={name:"邊框樣式",args:{dataSource:$,prefix:"SvgInfo",borderStyle:"solid",isSmallSize:!1,isOpenAll:!1,className:""},render:r=>({components:{Accordion:g,Title:d,Button:b},setup(){return{args:r}},template:`
            <Accordion
                :dataSource="args.dataSource"
                :prefix="args.prefix"
                :borderStyle="args.borderStyle"
                :isSmallSize="args.isSmallSize"
                :isOpenAll="args.isOpenAll"
                :className="args.className"
            ></Accordion>
        `}),parameters:{controls:{},docs:{source:{transform:(r,e)=>{const{args:a}=e;return["<Accordion",`  :dataSource='${x(a.dataSource)}'`,`  prefix='${a.prefix}'`,`  borderStyle='${a.borderStyle}'`,`  :isSmallSize='${a.isSmallSize}'`,`  :isOpenAll='${a.isOpenAll}'`,`  className="${a.className}"`,"></Accordion>"].join(`
`).trim()}}}}},A={name:"小尺寸",args:{dataSource:$,prefix:"SvgInfo",borderStyle:"solid",isSmallSize:!0,isOpenAll:!1,className:""},render:r=>({components:{Accordion:g,Title:d,Button:b},setup(){return{args:r}},template:`
            <Accordion
                :dataSource="args.dataSource"
                :prefix="args.prefix"
                :borderStyle="args.borderStyle"
                :isSmallSize="args.isSmallSize"
                :isOpenAll="args.isOpenAll"
                :className="args.className"
            ></Accordion>
        `}),parameters:{controls:{},docs:{source:{transform:(r,e)=>{const{args:a}=e;return["<Accordion",`  :dataSource='${x(a.dataSource)}'`,`  prefix='${a.prefix}'`,`  borderStyle='${a.borderStyle}'`,`  :isSmallSize='${a.isSmallSize}'`,`  :isOpenAll='${a.isOpenAll}'`,`  className="${a.className}"`,"></Accordion>"].join(`
`).trim()}}}}};var B,T,k;f.parameters={...f.parameters,docs:{...(B=f.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(k=(T=f.parameters)==null?void 0:T.docs)==null?void 0:k.source}}};var E,F,j;y.parameters={...y.parameters,docs:{...(E=y.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(j=(F=y.parameters)==null?void 0:F.docs)==null?void 0:j.source}}};var w,H,I;A.parameters={...A.parameters,docs:{...(w=A.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(I=(H=A.parameters)==null?void 0:H.docs)==null?void 0:I.source}}};const de=["AccordionDefault","AccordionBorderStyle","AccordionSmall"];export{y as AccordionBorderStyle,f as AccordionDefault,A as AccordionSmall,de as __namedExportsOrder,ce as default};

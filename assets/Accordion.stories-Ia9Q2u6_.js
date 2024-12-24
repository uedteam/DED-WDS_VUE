import{f as H,w as L,j as q,l as J,o as l,a as d,e as u,n as g,b as x,r as V,c as z,F as f,B as $,C as v,D as _,H as O,d as P,q as R,t as U,x as a}from"./vue.esm-bundler-D-gFHCZh.js";import{s as C}from"./sanitizeHtml-AW0cDGJT.js";import{_ as N}from"./Icon-BhqjPbyE.js";import{_ as o}from"./Title-DhXiKbIf.js";import{_ as p}from"./Button-00exNB20.js";import"./iframe-Bd5YQskO.js";import"../sb-preview/runtime.js";const I=["open"],G={class:"ded-accordion-title-content"},K={class:"ded-accordion-title-icon"},X={class:"ded-accordion-detail-content"},F={__name:"AccordionItem",props:{prefix:{type:String},borderStyle:{type:String,default:"",validator:r=>["solid","highlight"].includes(r)},isSmallSize:{type:Boolean,default:!0},isOpen:{type:Boolean,default:!1},className:{type:String,default:""}},setup(r){const e=r,n=H(e.isOpen);L(()=>e.isOpen,i=>{n.value=i});const c=i=>{n.value=i.target.open},s=i=>{const t=i.querySelector(".detail-content");i.open&&t&&t.animate([{opacity:0,height:"0px"},{opacity:1,height:`${t.scrollHeight}px`}],{duration:500,easing:"ease-in-out"})};return q(()=>{document.querySelectorAll("details").forEach(t=>{t.addEventListener("toggle",()=>s(t))})}),J(()=>{document.querySelectorAll("details").forEach(t=>{t.removeEventListener("toggle",()=>{})})}),(i,t)=>(l(),d("li",{class:g(["ded-accordion-item",`ded-accordion-item-${e.borderStyle}`])},[u("details",{open:n.value,class:g({"ded-accordion-detail ":!0,[e.className]:!!e.className}),onToggle:c},[u("summary",{class:g(["ded-accordion-title",e.isSmallSize?"ded-accordion-title-small":"ded-accordion-title-default"])},[u("span",G,[u("span",K,[x(N,{name:e.prefix},null,8,["name"])]),V(i.$slots,"label")]),u("span",{class:g([n.value?"ded-accordion-item-open":"ded-accordion-item-close","ded-icon-medium"])},[x(N,{size:"24",name:"arrow_down"})],2)],2),u("div",X,[V(i.$slots,"detail")])],42,I)],2))}};F.__docgenInfo={exportName:"default",displayName:"AccordionItem",description:"",tags:{},props:[{name:"prefix",type:{name:"string"}},{name:"borderStyle",type:{name:"string"},defaultValue:{func:!1,value:'""'},values:["solid","highlight"]},{name:"isSmallSize",type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"isOpen",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"className",type:{name:"string"},defaultValue:{func:!1,value:'""'}}],slots:[{name:"label"},{name:"detail"}],sourceFiles:["/Users/auouser/Desktop/Work_Space/DED-WDS_VUE/libs/src/ui/element/Accordion/AccordionItem.vue"]};const Y={class:"ded-accordion-container"},Z=["innerHTML"],ee=["innerHTML"],h={__name:"Accordion",props:{dataSource:{type:Array,required:!0},prefix:{type:String},borderStyle:{type:String,default:"highlight",validator:r=>["solid","highlight"].includes(r)},isSmallSize:{type:Boolean,default:!1},isOpenAll:{type:Boolean,default:!1},className:{type:String,default:""}},setup(r){const e=r,n=z(()=>e.isOpenAll),c=z(()=>e.dataSource.map(s=>({...s,label:typeof s.label=="function"?s.label(a):C(s.label),detail:typeof s.detail=="function"?s.detail(a):C(s.detail)})));return(s,i)=>(l(),d("div",Y,[u("ul",{class:g({"ded-accordion":!0,[e.className]:!!e.className,[`ded-accordion-${e.borderStyle}`]:e.borderStyle})},[(l(!0),d(f,null,$(c.value,t=>(l(),v(F,{key:t.id,prefix:e.prefix,borderStyle:e.borderStyle,isSmallSize:e.isSmallSize,isOpen:n.value},{label:_(()=>[t.label?(l(),d(f,{key:0},[typeof t.label=="object"?(l(),v(O(t.label),{key:0})):(l(),d("span",{key:1,innerHTML:t.label},null,8,Z))],64)):P("",!0)]),detail:_(()=>[(l(!0),d(f,null,$(t.detail,(m,M)=>(l(),d(f,{key:M},[typeof m=="object"&&m.type?(l(),v(O(m),{key:0})):typeof m=="string"?(l(),d("span",{key:1,innerHTML:m},null,8,ee)):(l(),d(f,{key:2},[R(U(m),1)],64))],64))),128))]),_:2},1032,["prefix","borderStyle","isSmallSize","isOpen"]))),128))],2)]))}};h.__docgenInfo={exportName:"default",displayName:"Accordion",description:"",tags:{},props:[{name:"dataSource",type:{name:"array"},required:!0},{name:"prefix",type:{name:"string"}},{name:"borderStyle",type:{name:"string"},defaultValue:{func:!1,value:'"highlight"'},values:["solid","highlight"]},{name:"isSmallSize",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"isOpenAll",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"className",type:{name:"string"},defaultValue:{func:!1,value:'""'}}],sourceFiles:["/Users/auouser/Desktop/Work_Space/DED-WDS_VUE/libs/src/ui/element/Accordion/Accordion.vue"]};function A(r){return`[${r.map(e=>`{
        id: "${e.id}",
        label: ${typeof e.label=="function"?'"[h Function]"':`"${e.label}"`},
        detail: ${typeof e.detail=="function"?'"[h Function]"':`"${e.detail}"`}
    }`).join(`,
`)}]`}const se={title:"Component/Accordion",component:h,tags:["autodocs"],argTypes:{dataSource:{description:"資料來源",control:{type:"object"},table:{type:{summary:"{ id: string; label: string | Function; detail: string | Function; }[]"}}},prefix:{description:"前置元素",control:{type:"text"}},borderStyle:{description:"邊框樣式",control:{type:"select"},options:["solid","highlight"],table:{type:{summary:"solid | highlight "}}},isSmallSize:{description:"是否為小尺寸",control:{type:"boolean"}},isOpenAll:{description:"是否全部展開",control:{type:"boolean"}},className:{description:"客製化樣式",control:{type:"text"}}},parameters:{docs:{title:"Accordion",description:{component:"Accordion 組件的呈現及說明。"}}}},S={name:"預設項目",args:{dataSource:[{id:"1",label:()=>a(o,{level:3,themeColor:"primary"},"What is Vue?"),detail:()=>[a("p",{},"Vue is a progressive JavaScript framework for building user interfaces."),a(p,{themeColor:"primary",variant:"soft",suffix:"arrow_down",size:"small",width:"fit",borderWidth:"sm",radius:"sm"},"Button")]},{id:"2",label:()=>a(o,{level:3,themeColor:"primary"},"Q2. What are the features of Vue?"),detail:()=>[a("p",{},"The features of Vue include reactive data binding, component-based architecture, directives, and a virtual DOM.")]},{id:"3",label:()=>a(o,{level:3,themeColor:"primary"},"Q3. What is included in the Vue ecosystem?"),detail:()=>[a("p",{},"The Vue ecosystem includes tools like Vue Router (for routing), Pinia (for state management), and Vite (for fast and modern development).")]},{id:"4",label:()=>a(o,{level:3,themeColor:"primary"},"Q4. What are the advantages of using Vue?"),detail:()=>[a("p",{},"The advantages of using Vue include a gentle learning curve, high flexibility, small size, and comprehensive documentation, making it easy for developers to gradually adopt and integrate into existing projects.")]}],prefix:"info",borderStyle:"highlight",isSmallSize:!1,isOpenAll:!1,className:""},render:r=>({components:{Accordion:h,Title:o,Button:p},setup(){return{args:r}},template:`
            <Accordion
                :dataSource="args.dataSource"
                :prefix="args.prefix"
                :borderStyle="args.borderStyle"
                :isSmallSize="args.isSmallSize"
                :isOpenAll="args.isOpenAll"
                :className="args.className"
            ></Accordion>
        `}),parameters:{controls:{},docs:{source:{transform:(r,e)=>{const{args:n}=e,c=A(n.dataSource);return console.log(">>>",c),["<Accordion",`  :dataSource='${c}'`,`  prefix='${n.prefix}'`,`  borderStyle='${n.borderStyle}'`,`  :isSmallSize='${n.isSmallSize}'`,`  :isOpenAll='${n.isOpenAll}'`,`  className="${n.className}"`,"></Accordion>"].join(`
`).trim()}}}}},y={name:"邊框樣式",args:{dataSource:[{id:"1",label:()=>a(o,{level:3,themeColor:"primary"},"What is Vue?"),detail:()=>[a("p",{},"Vue is a progressive JavaScript framework for building user interfaces."),a(p,{themeColor:"primary",variant:"soft",suffix:"arrow_down",size:"small",width:"fit",borderWidth:"sm",radius:"sm"},"Button")]},{id:"2",label:()=>a(o,{level:3,themeColor:"primary"},"Q2. What are the features of Vue?"),detail:()=>[a("p",{},"The features of Vue include reactive data binding, component-based architecture, directives, and a virtual DOM.")]},{id:"3",label:()=>a(o,{level:3,themeColor:"primary"},"Q3. What is included in the Vue ecosystem?"),detail:()=>[a("p",{},"The Vue ecosystem includes tools like Vue Router (for routing), Pinia (for state management), and Vite (for fast and modern development).")]},{id:"4",label:()=>a(o,{level:3,themeColor:"primary"},"Q4. What are the advantages of using Vue?"),detail:()=>[a("p",{},"The advantages of using Vue include a gentle learning curve, high flexibility, small size, and comprehensive documentation, making it easy for developers to gradually adopt and integrate into existing projects.")]}],prefix:"info",borderStyle:"solid",isSmallSize:!1,isOpenAll:!1,className:""},render:r=>({components:{Accordion:h,Title:o,Button:p},setup(){return{args:r}},template:`
            <Accordion
                :dataSource="args.dataSource"
                :prefix="args.prefix"
                :borderStyle="args.borderStyle"
                :isSmallSize="args.isSmallSize"
                :isOpenAll="args.isOpenAll"
                :className="args.className"
            ></Accordion>
        `}),parameters:{controls:{},docs:{source:{transform:(r,e)=>{const{args:n}=e;return["<Accordion",`  :dataSource='${A(n.dataSource)}'`,`  prefix='${n.prefix}'`,`  borderStyle='${n.borderStyle}'`,`  :isSmallSize='${n.isSmallSize}'`,`  :isOpenAll='${n.isOpenAll}'`,`  className="${n.className}"`,"></Accordion>"].join(`
`).trim()}}}}},b={name:"小尺寸",args:{dataSource:[{id:"1",label:()=>a(o,{level:4,themeColor:"primary"},"What is Vue?"),detail:()=>[a("p",{},"Vue is a progressive JavaScript framework for building user interfaces."),a(p,{themeColor:"primary",variant:"soft",suffix:"arrow_down",size:"small",width:"fit",borderWidth:"sm",radius:"sm"},"Button")]},{id:"2",label:()=>a(o,{level:4,themeColor:"primary"},"Q2. What are the features of Vue?"),detail:()=>[a("p",{},"The features of Vue include reactive data binding, component-based architecture, directives, and a virtual DOM.")]},{id:"3",label:()=>a(o,{level:4,themeColor:"primary"},"Q3. What is included in the Vue ecosystem?"),detail:()=>[a("p",{},"The Vue ecosystem includes tools like Vue Router (for routing), Pinia (for state management), and Vite (for fast and modern development).")]},{id:"4",label:()=>a(o,{level:4,themeColor:"primary"},"Q4. What are the advantages of using Vue?"),detail:()=>[a("p",{},"The advantages of using Vue include a gentle learning curve, high flexibility, small size, and comprehensive documentation, making it easy for developers to gradually adopt and integrate into existing projects.")]}],prefix:"info",borderStyle:"highlight",isSmallSize:!0,isOpenAll:!1,className:""},render:r=>({components:{Accordion:h,Title:o,Button:p},setup(){return{args:r}},template:`
            <Accordion
                :dataSource="args.dataSource"
                :prefix="args.prefix"
                :borderStyle="args.borderStyle"
                :isSmallSize="args.isSmallSize"
                :isOpenAll="args.isOpenAll"
                :className="args.className"
            ></Accordion>
        `}),parameters:{controls:{},docs:{source:{transform:(r,e)=>{const{args:n}=e;return["<Accordion",`  :dataSource='${A(n.dataSource)}'`,`  prefix='${n.prefix}'`,`  borderStyle='${n.borderStyle}'`,`  :isSmallSize='${n.isSmallSize}'`,`  :isOpenAll='${n.isOpenAll}'`,`  className="${n.className}"`,"></Accordion>"].join(`
`).trim()}}}}};var T,W,k;S.parameters={...S.parameters,docs:{...(T=S.parameters)==null?void 0:T.docs,source:{originalSource:`{
  name: "預設項目",
  args: {
    dataSource: [{
      id: "1",
      label: () => h(Title, {
        level: 3,
        themeColor: 'primary'
      }, "What is Vue?"),
      detail: () => [h('p', {}, "Vue is a progressive JavaScript framework for building user interfaces."), h(Button, {
        themeColor: 'primary',
        variant: 'soft',
        suffix: 'arrow_down',
        size: 'small',
        width: 'fit',
        borderWidth: 'sm',
        radius: 'sm'
      }, 'Button')]
    }, {
      id: "2",
      label: () => h(Title, {
        level: 3,
        themeColor: 'primary'
      }, "Q2. What are the features of Vue?"),
      detail: () => [h('p', {}, "The features of Vue include reactive data binding, component-based architecture, directives, and a virtual DOM.")]
    }, {
      id: "3",
      label: () => h(Title, {
        level: 3,
        themeColor: 'primary'
      }, "Q3. What is included in the Vue ecosystem?"),
      detail: () => [h('p', {}, "The Vue ecosystem includes tools like Vue Router (for routing), Pinia (for state management), and Vite (for fast and modern development).")]
    }, {
      id: "4",
      label: () => h(Title, {
        level: 3,
        themeColor: 'primary'
      }, "Q4. What are the advantages of using Vue?"),
      detail: () => [h('p', {}, "The advantages of using Vue include a gentle learning curve, high flexibility, small size, and comprehensive documentation, making it easy for developers to gradually adopt and integrate into existing projects.")]
    }],
    prefix: "info",
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
          console.log(">>>", dataSourceString);
          return ['<Accordion', \`  :dataSource='\${dataSourceString}'\`, \`  prefix='\${args.prefix}'\`, \`  borderStyle='\${args.borderStyle}'\`, \`  :isSmallSize='\${args.isSmallSize}'\`, \`  :isOpenAll='\${args.isOpenAll}'\`, \`  className="\${args.className}"\`, '></Accordion>'].join('\\n').trim();
        }
      }
    }
  }
}`,...(k=(W=S.parameters)==null?void 0:W.docs)==null?void 0:k.source}}};var w,B,D;y.parameters={...y.parameters,docs:{...(w=y.parameters)==null?void 0:w.docs,source:{originalSource:`{
  name: "邊框樣式",
  args: {
    dataSource: [{
      id: "1",
      label: () => h(Title, {
        level: 3,
        themeColor: 'primary'
      }, "What is Vue?"),
      detail: () => [h('p', {}, "Vue is a progressive JavaScript framework for building user interfaces."), h(Button, {
        themeColor: 'primary',
        variant: 'soft',
        suffix: 'arrow_down',
        size: 'small',
        width: 'fit',
        borderWidth: 'sm',
        radius: 'sm'
      }, 'Button')]
    }, {
      id: "2",
      label: () => h(Title, {
        level: 3,
        themeColor: 'primary'
      }, "Q2. What are the features of Vue?"),
      detail: () => [h('p', {}, "The features of Vue include reactive data binding, component-based architecture, directives, and a virtual DOM.")]
    }, {
      id: "3",
      label: () => h(Title, {
        level: 3,
        themeColor: 'primary'
      }, "Q3. What is included in the Vue ecosystem?"),
      detail: () => [h('p', {}, "The Vue ecosystem includes tools like Vue Router (for routing), Pinia (for state management), and Vite (for fast and modern development).")]
    }, {
      id: "4",
      label: () => h(Title, {
        level: 3,
        themeColor: 'primary'
      }, "Q4. What are the advantages of using Vue?"),
      detail: () => [h('p', {}, "The advantages of using Vue include a gentle learning curve, high flexibility, small size, and comprehensive documentation, making it easy for developers to gradually adopt and integrate into existing projects.")]
    }],
    prefix: "info",
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
}`,...(D=(B=y.parameters)==null?void 0:B.docs)==null?void 0:D.source}}};var Q,j,E;b.parameters={...b.parameters,docs:{...(Q=b.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  name: "小尺寸",
  args: {
    dataSource: [{
      id: "1",
      label: () => h(Title, {
        level: 4,
        themeColor: 'primary'
      }, "What is Vue?"),
      detail: () => [h('p', {}, "Vue is a progressive JavaScript framework for building user interfaces."), h(Button, {
        themeColor: 'primary',
        variant: 'soft',
        suffix: 'arrow_down',
        size: 'small',
        width: 'fit',
        borderWidth: 'sm',
        radius: 'sm'
      }, 'Button')]
    }, {
      id: "2",
      label: () => h(Title, {
        level: 4,
        themeColor: 'primary'
      }, "Q2. What are the features of Vue?"),
      detail: () => [h('p', {}, "The features of Vue include reactive data binding, component-based architecture, directives, and a virtual DOM.")]
    }, {
      id: "3",
      label: () => h(Title, {
        level: 4,
        themeColor: 'primary'
      }, "Q3. What is included in the Vue ecosystem?"),
      detail: () => [h('p', {}, "The Vue ecosystem includes tools like Vue Router (for routing), Pinia (for state management), and Vite (for fast and modern development).")]
    }, {
      id: "4",
      label: () => h(Title, {
        level: 4,
        themeColor: 'primary'
      }, "Q4. What are the advantages of using Vue?"),
      detail: () => [h('p', {}, "The advantages of using Vue include a gentle learning curve, high flexibility, small size, and comprehensive documentation, making it easy for developers to gradually adopt and integrate into existing projects.")]
    }],
    prefix: "info",
    borderStyle: "highlight",
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
}`,...(E=(j=b.parameters)==null?void 0:j.docs)==null?void 0:E.source}}};const de=["AccordionDefault","AccordionBorderStyle","AccordionSmall"];export{y as AccordionBorderStyle,S as AccordionDefault,b as AccordionSmall,de as __namedExportsOrder,se as default};

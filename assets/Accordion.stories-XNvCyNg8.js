import{f as A,w as v,j as S,l as b,o as i,c,d as s,t as p,n as d,a as _,e as V,F as N,B as O,C as D}from"./vue.esm-bundler-g0-RGFhA.js";import{_ as x}from"./Icon-BaegpxtT.js";import"./iframe-BIElAUrP.js";import"../sb-preview/runtime.js";const E={class:"ded-accordion-item"},k=["open"],W={class:"ded-accordion-title"},$={class:"ded-detail-content"},h={__name:"AccordionItem",props:{label:{type:String},detail:{type:String},isOpen:{type:Boolean,default:!1},className:{type:String,default:""}},setup(t){const a=t,n=A(a.isOpen);v(()=>a.isOpen,e=>{n.value=e});const l=e=>{n.value=e.target.open},m=e=>{const o=e.querySelector(".detail-content");e.open&&o&&o.animate([{opacity:0,height:"0px"},{opacity:1,height:`${o.scrollHeight}px`}],{duration:500,easing:"ease-in-out"})};return S(()=>{document.querySelectorAll("details").forEach(o=>{o.addEventListener("toggle",()=>m(o))})}),b(()=>{document.querySelectorAll("details").forEach(o=>{o.removeEventListener("toggle",()=>{})})}),(e,o)=>(i(),c("li",E,[s("details",{open:n.value,class:d({"ded-accordion-detail ":!0,[a.className]:!!a.className}),onToggle:l},[s("summary",W,[s("span",null,p(t.label),1),s("div",{class:d([n.value?"ded-accordion-item-open":"ded-accordion-item-close","ded-icon-medium"])},[_(x,{size:"24",name:"arrow_down"})],2)]),s("div",$,[s("p",null,p(t.detail),1)])],42,k)]))}};h.__docgenInfo={exportName:"default",displayName:"AccordionItem",description:"",tags:{},props:[{name:"label",type:{name:"string"}},{name:"detail",type:{name:"string"}},{name:"isOpen",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"className",type:{name:"string"},defaultValue:{func:!1,value:'""'}}],sourceFiles:["/Users/auouser/Desktop/Work_Space/DED-WDS_VUE/libs/src/ui/element/Accordion/AccordionItem.vue"]};const T={class:"ded-accordion-container"},u={__name:"Accordion",props:{dataSource:{type:Array,required:!0},isOpenAll:{type:Boolean,default:!1},className:{type:String,default:""}},setup(t){const a=t,n=V(()=>a.isOpenAll);return(l,m)=>(i(),c("div",T,[s("ul",{class:d({"ded-accordion":!0,[a.className]:!!a.className})},[(i(!0),c(N,null,O(t.dataSource,e=>(i(),D(h,{key:e.id,label:e.label,detail:e.detail,isOpen:n.value},null,8,["label","detail","isOpen"]))),128))],2)]))}};u.__docgenInfo={exportName:"default",displayName:"Accordion",description:"",tags:{},props:[{name:"dataSource",type:{name:"array"},required:!0},{name:"isOpenAll",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"className",type:{name:"string"},defaultValue:{func:!1,value:'""'}}],sourceFiles:["/Users/auouser/Desktop/Work_Space/DED-WDS_VUE/libs/src/ui/element/Accordion/Accordion.vue"]};const C={title:"Component/Accordion",component:u,tags:["autodocs"],argTypes:{dataSource:{description:"資料來源",control:{type:"object"},table:{type:{summary:"{ id: string; label: string; detail: string; }[]"}}},isOpenAll:{description:"是否全部展開",control:{type:"boolean"}},className:{description:"客製化樣式",control:{type:"text"}}},parameters:{docs:{title:"Accordion",description:{component:"Accordion 組件的呈現及說明。"}}}},r={name:"預設項目",args:{dataSource:[{id:"1",label:"Q1. What is Vue?",detail:"Vue is a progressive JavaScript framework for building user interfaces."},{id:"2",label:"Q2. What are the features of Vue?",detail:"The features of Vue include reactive data binding, component-based architecture, directives, and a virtual DOM."},{id:"3",label:"Q3. What is included in the Vue ecosystem?",detail:"The Vue ecosystem includes tools like Vue Router (for routing), Pinia (for state management), and Vite (for fast and modern development)."},{id:"4",label:"Q4. What are the advantages of using Vue?",detail:"The advantages of using Vue include a gentle learning curve, high flexibility, small size, and comprehensive documentation, making it easy for developers to gradually adopt and integrate into existing projects."}],isOpenAll:!1,className:""},render:t=>({components:{Accordion:u},setup(){return{args:t}},template:`
            <Accordion
                :dataSource="args.dataSource"
                :isOpenAll="args.isOpenAll"
                :className="args.className"
            ></Accordion>
        `}),parameters:{controls:{},docs:{source:{transform:(t,a)=>{const{args:n}=a;return["<Accordion",`  :dataSource='${JSON.stringify(n.dataSource,null,2).replace(/'/g,"\\'")}'`,`  :isOpenAll='${n.isOpenAll}'`,`  className="${n.className}"`,"></Accordion>"].join(`
`).trim()}}}}};var g,f,y;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`{
  name: "預設項目",
  args: {
    dataSource: [{
      "id": "1",
      "label": "Q1. What is Vue?",
      "detail": "Vue is a progressive JavaScript framework for building user interfaces."
    }, {
      "id": "2",
      "label": "Q2. What are the features of Vue?",
      "detail": "The features of Vue include reactive data binding, component-based architecture, directives, and a virtual DOM."
    }, {
      "id": "3",
      "label": "Q3. What is included in the Vue ecosystem?",
      "detail": "The Vue ecosystem includes tools like Vue Router (for routing), Pinia (for state management), and Vite (for fast and modern development)."
    }, {
      "id": "4",
      "label": "Q4. What are the advantages of using Vue?",
      "detail": "The advantages of using Vue include a gentle learning curve, high flexibility, small size, and comprehensive documentation, making it easy for developers to gradually adopt and integrate into existing projects."
    }],
    isOpenAll: false,
    className: ""
  },
  render: args => ({
    components: {
      Accordion
    },
    setup() {
      return {
        args
      };
    },
    template: \`
            <Accordion
                :dataSource="args.dataSource"
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
          const formattedDataSource = JSON.stringify(args.dataSource, null, 2).replace(/'/g, "\\\\'");
          return ['<Accordion', \`  :dataSource='\${formattedDataSource}'\`, \`  :isOpenAll='\${args.isOpenAll}'\`, \`  className="\${args.className}"\`, '></Accordion>'].join('\\n').trim();
        }
      }
    }
  }
}`,...(y=(f=r.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};const I=["AccordionDefault"];export{r as AccordionDefault,I as __namedExportsOrder,C as default};

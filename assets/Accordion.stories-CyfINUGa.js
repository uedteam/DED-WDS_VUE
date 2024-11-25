import{e as b,w as E,a as t,b as s,F as g,k as S,n as f,o as a,t as N,g as _}from"./vue.esm-bundler-_3atnb9w.js";import{_ as y}from"./Icon-CAH_ZwBp.js";import"./iframe-CeK3pwPU.js";import"../sb-preview/runtime.js";const F={"aria-label":"Accordion",class:"ded-accordion__list"},j=["onClick"],O={class:"ded-accordion-header"},l={__name:"Accordion",props:{dataSource:{type:Array,default:()=>[]},className:{type:String,default:""}},setup(o){const e=o,n=b([...e.dataSource]);E(()=>e.dataSource,c=>{n.value=c.map(m=>({...m,expanded:!1}))});const u=c=>{n.value[c].expanded=!n.value[c].expanded};return(c,m)=>(a(),t("div",{class:f({"ded-accordion__container":!0,[e.className]:!!e.className})},[s("ul",F,[(a(!0),t(g,null,S(n.value,(r,p)=>(a(),t("li",{key:p,class:"ded-accordion__item",onClick:A=>u(p)},[s("button",O,[s("span",null,N(r.title),1),r.expanded?(a(),_(y,{key:0,name:"chevronDown",size:"24"})):(a(),_(y,{key:1,name:"chevronUp",size:"24"}))]),s("div",{class:f(["ded-accordion-content",{expanded:r.expanded}])},[(a(!0),t(g,null,S(r.contents,(A,$)=>(a(),t("p",{key:$},N(A),1))),128))],2)],8,j))),128))])],2))}};l.__docgenInfo={exportName:"default",displayName:"Accordion",description:"",tags:{},props:[{name:"dataSource",type:{name:"array"},defaultValue:{func:!1,value:"[]"}},{name:"className",type:{name:"string"},defaultValue:{func:!1,value:'""'}}],sourceFiles:["D:/98_測試/up/DED-WDS_VUE/libs/src/ui/element/Accordion/Accordion.vue"]};const z={title:"Design System/Accordion*",component:l,tags:["autodocs"],argTypes:{dataSource:{description:"資料來源",control:{type:"object"},table:{type:{summary:"{ title: string; content: string[]; }[]"}}},className:{description:"客製化樣式",control:{type:"text"}}},parameters:{docs:{title:"Accordion",description:{component:"Accordion 組件的呈現及說明。"}}}},d={name:"預設項目",args:{dataSource:[{title:"Accordion title",contents:["Accordion content"]}],className:""},render:o=>({components:{Accordion:l},setup(){return{args:o}},template:`
            <Accordion
                :dataSource="args.dataSource"
                :className="args.className"
            ></Accordion>
        `}),parameters:{controls:{},docs:{source:{transform:(o,e)=>{const{args:n}=e;return["<Accordion",`  :dataSource='${JSON.stringify(n.dataSource,null,2).replace(/'/g,"\\'")}'`,`  :className="${n.className}"`,"></Accordion>"].join(`
`).trim()}}}}},i={name:"群組樣式",args:{dataSource:[{title:"Accordion title 1",contents:["Accordion content 1"]},{title:"Accordion title 2",contents:["Accordion content 2"]},{title:"Accordion title 3",contents:["Accordion content 3"]}],className:""},render:o=>({components:{Accordion:l},setup(){return{args:o}},template:`
            <Accordion
                :dataSource="args.dataSource"
                :className="args.className"
            ></Accordion>
        `}),parameters:{controls:{},docs:{source:{transform:(o,e)=>{const{args:n}=e;return["<Accordion",`  :dataSource='${JSON.stringify(n.dataSource,null,2).replace(/'/g,"\\'")}'`,`  :className="${n.className}"`,"></Accordion>"].join(`
`).trim()}}}}};var D,v,x;d.parameters={...d.parameters,docs:{...(D=d.parameters)==null?void 0:D.docs,source:{originalSource:`{
  name: "預設項目",
  args: {
    dataSource: [{
      title: "Accordion title",
      contents: ["Accordion content"]
    }],
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
                :className="args.className"
            ></Accordion>
        \`
  }),
  // 控制 controls 中能控制的參數
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
          return ['<Accordion', \`  :dataSource='\${formattedDataSource}'\`, \`  :className="\${args.className}"\`, '></Accordion>'].join('\\n').trim();
        }
      }
    }
  }
}`,...(x=(v=d.parameters)==null?void 0:v.docs)==null?void 0:x.source}}};var C,h,k;i.parameters={...i.parameters,docs:{...(C=i.parameters)==null?void 0:C.docs,source:{originalSource:`{
  name: "群組樣式",
  args: {
    dataSource: [{
      title: "Accordion title 1",
      contents: ["Accordion content 1"]
    }, {
      title: "Accordion title 2",
      contents: ["Accordion content 2"]
    }, {
      title: "Accordion title 3",
      contents: ["Accordion content 3"]
    }],
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
                :className="args.className"
            ></Accordion>
        \`
  }),
  // 控制 controls 中能控制的參數
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
          return ['<Accordion', \`  :dataSource='\${formattedDataSource}'\`, \`  :className="\${args.className}"\`, '></Accordion>'].join('\\n').trim();
        }
      }
    }
  }
}`,...(k=(h=i.parameters)==null?void 0:h.docs)==null?void 0:k.source}}};const G=["AccordionDefault","AccordionGroup"];export{d as AccordionDefault,i as AccordionGroup,G as __namedExportsOrder,z as default};

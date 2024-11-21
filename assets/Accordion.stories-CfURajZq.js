import{e as h,w as k,a as r,b as c,F as D,k as p,n as C,o as a,t as E,g as B}from"./vue.esm-bundler-BaxPAcbg.js";import{_ as g}from"./Icon-LHtUq3zY.js";import"./iframe-BV47joKz.js";import"../sb-preview/runtime.js";const $={"aria-label":"Accordion",class:"ded-accordion__list"},b=["onClick"],j={class:"ded-accordion-header"},l={__name:"Accordion",props:{dataSource:{type:Array,default:()=>[]},className:{type:String,default:""}},setup(n){const e=n,u=h([...e.dataSource]);k(()=>e.dataSource,o=>{u.value=o.map(i=>({...i,expanded:!1}))});const F=o=>{u.value[o].expanded=!u.value[o].expanded};return(o,i)=>(a(),r("div",{class:C({"ded-accordion__container":!0,[e.className]:!!e.className})},[c("ul",$,[(a(!0),r(D,null,p(u.value,(t,m)=>(a(),r("li",{key:m,class:"ded-accordion__item",onClick:A=>F(m)},[c("button",j,[c("span",null,E(t.title),1),t.expanded?(a(),B(g,{key:0,name:"chevronDown",size:"24"})):(a(),B(g,{key:1,name:"chevronUp",size:"24"}))]),c("div",{class:C(["ded-accordion-content",{expanded:t.expanded}])},[(a(!0),r(D,null,p(t.contents,(A,x)=>(a(),r("p",{key:x},E(A),1))),128))],2)],8,b))),128))])],2))}};l.__docgenInfo={exportName:"default",displayName:"Accordion",description:"",tags:{},props:[{name:"dataSource",type:{name:"array"},defaultValue:{func:!1,value:"[]"}},{name:"className",type:{name:"string"},defaultValue:{func:!1,value:'""'}}],sourceFiles:["D:/98_測試/up/DED-WDS_VUE/libs/src/ui/element/Accordion/Accordion.vue"]};const z={title:"Design System/Accordion*",component:l,tags:["autodocs"],argTypes:{dataSource:{description:"資料來源",control:{type:"object"},table:{type:{summary:"{ title: string; content: string[]; }[]"}}},className:{description:"客製化樣式",control:{type:"text"}}},parameters:{docs:{title:"Accordion",description:{component:"Accordion 組件的呈現及說明。"}}}},s={name:"預設項目",args:{dataSource:[{title:"這個產品跟我的設備能兼容嗎？",contents:["使用前先確保這個產品和你的設備是能搭配的，特別是在連接和設置上。","例如，如果你是用舊款設備，建議查看一下產品手冊，確保一切正常！"]}],className:""},render:n=>({components:{Accordion:l},setup(){return{args:n}},template:`
            <Accordion
                :dataSource="args.dataSource"
                :className="args.className"
            ></Accordion>
        `}),parameters:{controls:{},docs:{source:{transform:(n,e)=>{const{args:u}=e;return["<Accordion",`  :dataSource='${JSON.stringify(u.dataSource,null,2).replace(/'/g,"\\'")}'`,`  :className="${u.className}"`,"></Accordion>"].join(`
`).trim()}}}}},d={name:"群組樣式",args:{dataSource:[{title:"怎麼保養我的產品？",contents:["要讓你的產品保持最佳狀態，建議定期清理，並避免放在太熱或太冷的地方。","比如說，用柔軟的布輕輕擦拭，不要用化學清潔劑哦！"]},{title:"保修政策是什麼？",contents:["我們的產品提供一年保修，涵蓋材料和製作上的問題。","記得保留購買憑證，如果需要維修，隨時聯繫我們的客服！"]},{title:"這個產品跟我的設備能兼容嗎？",contents:["使用前先確保這個產品和你的設備是能搭配的，特別是在連接和設置上。","例如，如果你是用舊款設備，建議查看一下產品手冊，確保一切正常！"]}],className:""},render:n=>({components:{Accordion:l},setup(){return{args:n}},template:`
            <Accordion
                :dataSource="args.dataSource"
                :className="args.className"
            ></Accordion>
        `}),parameters:{controls:{},docs:{source:{transform:(n,e)=>{const{args:u}=e;return["<Accordion",`  :dataSource='${JSON.stringify(u.dataSource,null,2).replace(/'/g,"\\'")}'`,`  :className="${u.className}"`,"></Accordion>"].join(`
`).trim()}}}}};var S,f,N;s.parameters={...s.parameters,docs:{...(S=s.parameters)==null?void 0:S.docs,source:{originalSource:`{
  name: "預設項目",
  args: {
    dataSource: [{
      title: "這個產品跟我的設備能兼容嗎？",
      contents: ["使用前先確保這個產品和你的設備是能搭配的，特別是在連接和設置上。", "例如，如果你是用舊款設備，建議查看一下產品手冊，確保一切正常！"]
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
}`,...(N=(f=s.parameters)==null?void 0:f.docs)==null?void 0:N.source}}};var _,y,v;d.parameters={...d.parameters,docs:{...(_=d.parameters)==null?void 0:_.docs,source:{originalSource:`{
  name: "群組樣式",
  args: {
    dataSource: [{
      title: "怎麼保養我的產品？",
      contents: ["要讓你的產品保持最佳狀態，建議定期清理，並避免放在太熱或太冷的地方。", "比如說，用柔軟的布輕輕擦拭，不要用化學清潔劑哦！"]
    }, {
      title: "保修政策是什麼？",
      contents: ["我們的產品提供一年保修，涵蓋材料和製作上的問題。", "記得保留購買憑證，如果需要維修，隨時聯繫我們的客服！"]
    }, {
      title: "這個產品跟我的設備能兼容嗎？",
      contents: ["使用前先確保這個產品和你的設備是能搭配的，特別是在連接和設置上。", "例如，如果你是用舊款設備，建議查看一下產品手冊，確保一切正常！"]
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
}`,...(v=(y=d.parameters)==null?void 0:y.docs)==null?void 0:v.source}}};const G=["AccordionDefault","AccordionGroup"];export{s as AccordionDefault,d as AccordionGroup,G as __namedExportsOrder,z as default};

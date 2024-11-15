import{e as h,w as x,a as t,b as n,F as A,k as D,n as C,o,t as g}from"./vue.esm-bundler-Dy0-1sXb.js";const v={"aria-label":"Accordion",class:"accordion__list"},w=["onClick"],k={class:"accordion-header"},$={key:0,style:{width:"24px",height:"24px"}},b={key:1,style:{width:"24px",height:"24px"}},i={__name:"Accordion",props:{dataSource:{type:Array,default:()=>[]},className:{type:String,default:""}},setup(a){const e=a,u=h([...e.dataSource]);x(()=>e.dataSource,c=>{u.value=c.map(r=>({...r,expanded:!1}))});const F=c=>{u.value[c].expanded=!u.value[c].expanded};return(c,r)=>(o(),t("div",{class:C({accordion__container:!0,[e.className]:!!e.className})},[n("ul",v,[(o(!0),t(A,null,D(u.value,(s,m)=>(o(),t("li",{key:m,class:"accordion__item",onClick:p=>F(m)},[n("button",k,[n("span",null,g(s.title),1),s.expanded?(o(),t("div",$,r[0]||(r[0]=[n("svg",{xmlns:"http://www.w3.org/2000/svg",height:"100%",viewBox:"0 -960 960 960",width:"100%",fill:"currentColor"},[n("path",{d:"M480-528 296-344l-56-56 240-240 240 240-56 56-184-184Z"})],-1)]))):(o(),t("div",b,r[1]||(r[1]=[n("svg",{xmlns:"http://www.w3.org/2000/svg",height:"100%",viewBox:"0 -960 960 960",width:"100%",fill:"currentColor"},[n("path",{d:"M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z"})],-1)])))]),n("div",{class:C(["accordion-content",{expanded:s.expanded}])},[(o(!0),t(A,null,D(s.contents,(p,_)=>(o(),t("p",{key:_},g(p),1))),128))],2)],8,w))),128))])],2))}};i.__docgenInfo={exportName:"default",displayName:"Accordion",description:"",tags:{},props:[{name:"dataSource",type:{name:"array"},defaultValue:{func:!1,value:"[]"}},{name:"className",type:{name:"string"},defaultValue:{func:!1,value:'""'}}],sourceFiles:["D:/98_測試/up/DED-WDS_VUE/libs/src/ui/element/Accordion/Accordion.vue"]};const O={title:"Design System/Accordion*",component:i,tags:["autodocs"],argTypes:{dataSource:{description:"資料來源",control:{type:"object"},table:{type:{summary:"{ title: string; content: string[]; }[]"}}},className:{description:"客製化樣式",control:{type:"text"}}},parameters:{docs:{title:"Accordion",description:{component:"Accordion 組件的呈現及說明。"}}}},l={name:"預設項目",args:{dataSource:[{title:"這個產品跟我的設備能兼容嗎？",contents:["使用前先確保這個產品和你的設備是能搭配的，特別是在連接和設置上。","例如，如果你是用舊款設備，建議查看一下產品手冊，確保一切正常！"]}],className:""},render:a=>({components:{Accordion:i},setup(){return{args:a}},template:`
            <Accordion
                :dataSource="args.dataSource"
                :className="args.className"
            ></Accordion>
        `}),parameters:{controls:{},docs:{source:{transform:(a,e)=>{const{args:u}=e;return["<Accordion",`  :dataSource='${JSON.stringify(u.dataSource,null,2).replace(/'/g,"\\'")}'`,`  :className="${u.className}"`,"></Accordion>"].join(`
`).trim()}}}}},d={name:"群組樣式",args:{dataSource:[{title:"怎麼保養我的產品？",contents:["要讓你的產品保持最佳狀態，建議定期清理，並避免放在太熱或太冷的地方。","比如說，用柔軟的布輕輕擦拭，不要用化學清潔劑哦！"]},{title:"保修政策是什麼？",contents:["我們的產品提供一年保修，涵蓋材料和製作上的問題。","記得保留購買憑證，如果需要維修，隨時聯繫我們的客服！"]},{title:"這個產品跟我的設備能兼容嗎？",contents:["使用前先確保這個產品和你的設備是能搭配的，特別是在連接和設置上。","例如，如果你是用舊款設備，建議查看一下產品手冊，確保一切正常！"]}],className:""},render:a=>({components:{Accordion:i},setup(){return{args:a}},template:`
            <Accordion
                :dataSource="args.dataSource"
                :className="args.className"
            ></Accordion>
        `}),parameters:{controls:{},docs:{source:{transform:(a,e)=>{const{args:u}=e;return["<Accordion",`  :dataSource='${JSON.stringify(u.dataSource,null,2).replace(/'/g,"\\'")}'`,`  :className="${u.className}"`,"></Accordion>"].join(`
`).trim()}}}}};var E,B,S;l.parameters={...l.parameters,docs:{...(E=l.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(S=(B=l.parameters)==null?void 0:B.docs)==null?void 0:S.source}}};var f,N,y;d.parameters={...d.parameters,docs:{...(f=d.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(y=(N=d.parameters)==null?void 0:N.docs)==null?void 0:y.source}}};const J=["AccordionDefault","AccordionGroup"];export{l as AccordionDefault,d as AccordionGroup,J as __namedExportsOrder,O as default};

import{r as x,w as f,c as n,b as u,F as D,d as p,o,t as m,n as y}from"./vendor-M1HcLtCc.js";const k={class:"accordion__container"},b={"aria-label":"Accordion",class:"accordion__list"},S=["onClick"],N={class:"accordion-header"},V={key:0,style:{width:"24px",height:"24px"}},G={key:1,style:{width:"24px",height:"24px"}},i={__name:"Accordion",props:{items:{type:Array,default:()=>[]}},setup(t){const d=t,c=x([...d.items]);f(()=>d.items,r=>{c.value=r.map(e=>({...e,expanded:!1}))});const v=r=>{c.value[r].expanded=!c.value[r].expanded};return(r,e)=>(o(),n("div",k,[u("ul",b,[(o(!0),n(D,null,p(c.value,(a,l)=>(o(),n("li",{key:l,class:"accordion__item",onClick:A=>v(l)},[u("button",N,[u("span",null,m(a.title),1),a.expanded?(o(),n("div",V,e[0]||(e[0]=[u("svg",{xmlns:"http://www.w3.org/2000/svg",height:"100%",viewBox:"0 -960 960 960",width:"100%",fill:"currentColor"},[u("path",{d:"M480-528 296-344l-56-56 240-240 240 240-56 56-184-184Z"})],-1)]))):(o(),n("div",G,e[1]||(e[1]=[u("svg",{xmlns:"http://www.w3.org/2000/svg",height:"100%",viewBox:"0 -960 960 960",width:"100%",fill:"currentColor"},[u("path",{d:"M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z"})],-1)])))]),u("div",{class:y(["accordion-content",{expanded:a.expanded}])},[(o(!0),n(D,null,p(a.contents,(A,w)=>(o(),n("p",{key:w},m(A),1))),128))],2)],8,S))),128))])]))}};i.__docgenInfo={exportName:"default",displayName:"Accordion",description:"",tags:{},props:[{name:"items",type:{name:"array"},defaultValue:{func:!1,value:"[]"}}],sourceFiles:["D:/98_測試/up/DED-WDS_VUE/libs/src/ui/element/Accordion/Accordion.vue"]};const M={title:"Design System/Accordion",component:i,tags:["autodocs"],argTypes:{items:{description:"Accordion 對應的資料陣列",control:{type:"object"}}},parameters:{docs:{title:"Accordion",description:{component:"Accordion 組件的呈現及說明。"}}}},s={name:"Accordion 基礎樣式",args:{accordionData:[{title:"這個產品跟我的設備能兼容嗎？",contents:["使用前先確保這個產品和你的設備是能搭配的，特別是在連接和設置上。","例如，如果你是用舊款設備，建議查看一下產品手冊，確保一切正常！"]}]},render:t=>({components:{Accordion:i},setup(){return{args:t}},template:`
            <Accordion
                :items="args.accordionData"
            ></Accordion>
        `}),parameters:{controls:{}}},F={name:"Accordion 群組樣式",args:{accordionData:[{title:"怎麼保養我的產品？",contents:["要讓你的產品保持最佳狀態，建議定期清理，並避免放在太熱或太冷的地方。","比如說，用柔軟的布輕輕擦拭，不要用化學清潔劑哦！"]},{title:"保修政策是什麼？",contents:["我們的產品提供一年保修，涵蓋材料和製作上的問題。","記得保留購買憑證，如果需要維修，隨時聯繫我們的客服！"]},{title:"這個產品跟我的設備能兼容嗎？",contents:["使用前先確保這個產品和你的設備是能搭配的，特別是在連接和設置上。","例如，如果你是用舊款設備，建議查看一下產品手冊，確保一切正常！"]}]},render:t=>({components:{Accordion:i},setup(){return{args:t}},template:`
            <Accordion
                :items="args.accordionData"
            ></Accordion>
        `}),parameters:{controls:{}}};var C,E,B;s.parameters={...s.parameters,docs:{...(C=s.parameters)==null?void 0:C.docs,source:{originalSource:`{
  name: "Accordion 基礎樣式",
  args: {
    accordionData: [{
      title: "這個產品跟我的設備能兼容嗎？",
      contents: ["使用前先確保這個產品和你的設備是能搭配的，特別是在連接和設置上。", "例如，如果你是用舊款設備，建議查看一下產品手冊，確保一切正常！"]
    }]
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
                :items="args.accordionData"
            ></Accordion>
        \`
  }),
  // 控制 controls 中能控制的參數
  parameters: {
    controls: {
      // include: ['themeColor', 'label', 'value', 'name' ],
    }
  }
}`,...(B=(E=s.parameters)==null?void 0:E.docs)==null?void 0:B.source}}};var g,_,h;F.parameters={...F.parameters,docs:{...(g=F.parameters)==null?void 0:g.docs,source:{originalSource:`{
  name: "Accordion 群組樣式",
  args: {
    accordionData: [{
      title: "怎麼保養我的產品？",
      contents: ["要讓你的產品保持最佳狀態，建議定期清理，並避免放在太熱或太冷的地方。", "比如說，用柔軟的布輕輕擦拭，不要用化學清潔劑哦！"]
    }, {
      title: "保修政策是什麼？",
      contents: ["我們的產品提供一年保修，涵蓋材料和製作上的問題。", "記得保留購買憑證，如果需要維修，隨時聯繫我們的客服！"]
    }, {
      title: "這個產品跟我的設備能兼容嗎？",
      contents: ["使用前先確保這個產品和你的設備是能搭配的，特別是在連接和設置上。", "例如，如果你是用舊款設備，建議查看一下產品手冊，確保一切正常！"]
    }]
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
                :items="args.accordionData"
            ></Accordion>
        \`
  }),
  // 控制 controls 中能控制的參數
  parameters: {
    controls: {
      // include: ['themeColor', 'label', 'value', 'name' ],
    }
  }
}`,...(h=(_=F.parameters)==null?void 0:_.docs)==null?void 0:h.source}}};const T=["AccordionDefault","AccordionGroup"];export{s as AccordionDefault,F as AccordionGroup,T as __namedExportsOrder,M as default};

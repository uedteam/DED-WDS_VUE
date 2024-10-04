import{j as p,a as n,b as e,F as m,k as g,o,t as f,n as E}from"./vue.esm-bundler-CsTC-5Ev.js";const C={class:"accordion__container"},D={"aria-label":"Accordion",class:"accordion__list"},L=["onClick"],T={class:"accordion-header"},F={key:0,style:{width:"24px",height:"24px"}},j={key:1,style:{width:"24px",height:"24px"}},d={__name:"Accordion",props:{data:{type:Array,default:()=>[]}},setup(a){const c=p([...a.data]),k=l=>{c.value[l].expanded=!c.value[l].expanded};return(l,t)=>(o(),n("div",C,[e("ul",D,[(o(!0),n(m,null,g(c.value,(r,h)=>(o(),n("li",{key:h,class:"accordion__item",onClick:u=>k(h)},[e("button",T,[e("span",null,f(r.title),1),r.expanded?(o(),n("div",F,t[0]||(t[0]=[e("svg",{xmlns:"http://www.w3.org/2000/svg",height:"100%",viewBox:"0 -960 960 960",width:"100%",fill:"currentColor"},[e("path",{d:"M480-528 296-344l-56-56 240-240 240 240-56 56-184-184Z"})],-1)]))):(o(),n("div",j,t[1]||(t[1]=[e("svg",{xmlns:"http://www.w3.org/2000/svg",height:"100%",viewBox:"0 -960 960 960",width:"100%",fill:"currentColor"},[e("path",{d:"M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z"})],-1)])))]),e("div",{class:E(["accordion-content",{expanded:r.expanded}])},[(o(!0),n(m,null,g(r.contents,(u,_)=>(o(),n("p",{key:_},f(u),1))),128))],2)],8,L))),128))])]))}};d.__docgenInfo={exportName:"default",displayName:"Accordion",description:"",tags:{},props:[{name:"data",type:{name:"array"},defaultValue:{func:!1,value:"[]"}}],sourceFiles:["/Users/auouser/Desktop/Work_Space/DED-WDS_VUE/libs/src/ui/element/Accordion/Accordion.vue"]};const K={title:"Design System/Accordion",component:d,tags:["autodocs"],argTypes:{themeColor:{description:"主題顏色",control:{type:"select"},options:["primary","secondary","tertiary","success","warning","error","info"]},customClass:{description:"客製化樣式",control:{type:"text"}},label:{description:"Checkbox選項文字",control:{type:"text"}},value:{description:"Checkbox選項值",control:{type:"Object"}},name:{description:"Checkbox表單用name",control:{type:"text"}},modelValue:{description:"Checkbox的綁定值",control:{type:"Object"}},direction:{description:"Checkbox群組方向",control:{type:"select"},options:["row","column"]}},parameters:{docs:{title:"收合式選單",description:{component:"收合式選單組件的呈現及說明。"}}}},s={name:"基礎樣式",args:{data:p([{title:"Apples",expanded:!1,contents:["Apples are a fine fruit often associated with good health, and fewer doctor's appointments.","Example: An apple a day keeps the doctor away."]}])},render:a=>({components:{Accordion:d},setup(){return{args:a}},template:`
            <Accordion
                :data="args.data"
                
            ></Accordion>
        `}),parameters:{controls:{}}},i={name:"多個 Accordion",args:{data:p([{title:"Apples",expanded:!1,contents:["Apples are a fine fruit often associated with good health, and fewer doctor's appointments.","Example: An apple a day keeps the doctor away."]},{title:"Lemons",expanded:!1,contents:["Lemons are good with almost anything, yet are often have a negative connotation when used in conversation.","Example: The bread from the french bakery is normally very good, but the one we lksdjfkjs s;ldfs; s;ldfsd;f; sdlfsdldo dodoep ep epope bought today was a lemon."]},{title:"Kiwis",expanded:!1,contents:["Kiwis are a fun, under-appreciated fruit.","Lemons are good with almost anything, yet are often have a negative conng, yet are often have a negativotation when used in conversation.","Example: The bread from the french bakeg, yet are often hg, yet are often have a negativave a negativ normally very good, but the one we bought today was a lemon.","Lemons are good with almost anything, yet are g, yet are often have a negativoften have a negative connotation when used in conversation.","Example: The bread from the french bakery is ng, yet are often have a negativormally very goog, yet are often have a negativd, but the one we bought today was a lemon.","Lemons are good with almost anything,g, yet are often have a negativ yet are often have a negative connotation when used in conversation.","Example: The bread from the french bakery is normally very good, but the one we bought today was a lemon."]}])},render:a=>({components:{Accordion:d},setup(){return{args:a}},template:`
            <Accordion
                :data="args.data"
                
            ></Accordion>
        `}),parameters:{controls:{}}};var y,v,w;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
  name: "基礎樣式",
  args: {
    data: ref([{
      title: "Apples",
      expanded: false,
      contents: ["Apples are a fine fruit often associated with good health, and fewer doctor's appointments.", "Example: An apple a day keeps the doctor away."]
    }])
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
                :data="args.data"
                
            ></Accordion>
        \`
  }),
  // 控制 controls 中能控制的參數
  parameters: {
    controls: {
      // include: ['themeColor', 'label', 'value', 'name' ],
    }
  }
}`,...(w=(v=s.parameters)==null?void 0:v.docs)==null?void 0:w.source}}};var b,A,x;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:`{
  name: "多個 Accordion",
  args: {
    data: ref([{
      title: "Apples",
      expanded: false,
      contents: ["Apples are a fine fruit often associated with good health, and fewer doctor's appointments.", "Example: An apple a day keeps the doctor away."]
    }, {
      title: "Lemons",
      expanded: false,
      contents: ["Lemons are good with almost anything, yet are often have a negative connotation when used in conversation.", "Example: The bread from the french bakery is normally very good, but the one we lksdjfkjs" + " s;ldfs; s;ldfsd;f; sdlfsdldo dodoep ep epope bought today was a lemon."]
    }, {
      title: "Kiwis",
      expanded: false,
      contents: ["Kiwis are a fun, under-appreciated fruit.", "Lemons are good with almost anything, yet are often have a negative conng, yet are often have a negativotation when used in conversation.", "Example: The bread from the french bakeg, yet are often hg, yet are often have a negativave a negativ normally very good, but the one we bought today was a lemon.", "Lemons are good with almost anything, yet are g, yet are often have a negativoften have a negative connotation when used in conversation.", "Example: The bread from the french bakery is ng, yet are often have a negativormally very goog, yet are often have a negativd, but the one we bought today was a lemon.", "Lemons are good with almost anything,g, yet are often have a negativ yet are often have a negative connotation when used in conversation.", "Example: The bread from the french bakery is normally very good, but the one we bought today was a lemon."]
    }])
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
                :data="args.data"
                
            ></Accordion>
        \`
  }),
  // 控制 controls 中能控制的參數
  parameters: {
    controls: {
      // include: ['themeColor', 'label', 'value', 'name' ],
    }
  }
}`,...(x=(A=i.parameters)==null?void 0:A.docs)==null?void 0:x.source}}};const V=["AccordionDefault","AccordionGroup"];export{s as AccordionDefault,i as AccordionGroup,V as __namedExportsOrder,K as default};

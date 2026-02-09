import{r as _,c as s,h as k,d as B,a as D,k as E,o as a}from"./vue.esm-bundler-DDwqdenp.js";import{_ as L}from"./_plugin-vue_export-helper-DlAUqK2U.js";const g={__name:"InfiniteScroll",props:{height:{type:Number,default:500},onScrollBottom:Function,isLoading:{type:Boolean,default:!1}},setup(n){const i=n,r=_(null),y=e=>({height:e+"px",overflow:"auto"}),b={display:"flex",alignItems:"center",justifyContent:"center",height:"80px"},v={width:"32px",height:"32px",border:"4px solid #1976d2",borderTop:"4px solid #fff",borderRadius:"50%",animation:"spin 1s linear infinite",margin:"40px 0"},x=()=>{const e=r.value;if(e){const l=e.scrollTop+e.clientHeight,I=e.scrollHeight;l>=I&&i.onScrollBottom&&i.onScrollBottom()}};return(e,l)=>(a(),s("div",{ref_key:"infiniteScrollRef",ref:r,style:E(y(n.height)),onScroll:x},[k(e.$slots,"default",{},void 0,!0),n.isLoading?(a(),s("div",{key:0,style:b},[D("span",{style:v})])):B("",!0)],36))}},S=L(g,[["__scopeId","data-v-7b56ff5e"]]);g.__docgenInfo={exportName:"default",displayName:"InfiniteScroll",description:"",tags:{},props:[{name:"height",type:{name:"number"},defaultValue:{func:!1,value:"500"}},{name:"onScrollBottom",type:{name:"func"}},{name:"isLoading",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/DED-WDS_VUE/DED-WDS_VUE/libs/src/ui/element/Scroll/InfiniteScroll.vue"]};const w={title:"Element/InfiniteScroll",component:S,argTypes:{height:{control:{type:"number",min:100,max:1e3,step:50}},isLoading:{control:"boolean"},onScrollBottom:{action:"scrolled to bottom"}}},h=n=>({components:{InfiniteScroll:S},setup(){return{args:n}},template:`
    <InfiniteScroll v-bind="args">
      <div v-for="i in 30" :key="i" style="padding: 16px; border-bottom: 1px solid #eee;">
        Item #{{ i }}
      </div>
    </InfiniteScroll>
  `}),o=h.bind({});o.args={height:400,isLoading:!1};const t=h.bind({});t.args={height:400,isLoading:!0};var c,d,p;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`args => ({
  components: {
    InfiniteScroll
  },
  setup() {
    return {
      args
    };
  },
  template: \`
    <InfiniteScroll v-bind="args">
      <div v-for="i in 30" :key="i" style="padding: 16px; border-bottom: 1px solid #eee;">
        Item #{{ i }}
      </div>
    </InfiniteScroll>
  \`
})`,...(p=(d=o.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};var m,f,u;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`args => ({
  components: {
    InfiniteScroll
  },
  setup() {
    return {
      args
    };
  },
  template: \`
    <InfiniteScroll v-bind="args">
      <div v-for="i in 30" :key="i" style="padding: 16px; border-bottom: 1px solid #eee;">
        Item #{{ i }}
      </div>
    </InfiniteScroll>
  \`
})`,...(u=(f=t.parameters)==null?void 0:f.docs)==null?void 0:u.source}}};const T=["Default","Loading"];export{o as Default,t as Loading,T as __namedExportsOrder,w as default};

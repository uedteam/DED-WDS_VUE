import{_ as S}from"./Button-CM8vu3vj.js";import{r as i,q as C,A as E,c as d,a as f,k as M,h as z,n as g,b as D,e as H,H as V,T as k,F as L,z as y,o as p,d as T,x as R,f as F,t as U}from"./vue.esm-bundler-CScppja8.js";import{g as j}from"./positionUtils-CIbX64TV.js";import{s as I}from"./sanitizeHtml-Bxrs2yAi.js";import"./Icon-Dil69s3n.js";const P={class:"ded-tooltip-content"},m={__name:"Tooltip",props:{content:{type:String,default:""},placement:{type:String,default:"top",validator:n=>["top-left","top","top-right","right-top","right","right-bottom","bottom-right","bottom","bottom-left","left-top","left","left-bottom"].includes(n)},showArrow:{type:Boolean,default:!0},className:{type:String,default:""}},setup(n){const o=n,t=i(null),h=i(null),v=i({}),w=`tooltip-${Math.random().toString(36).substring(2,9)}`,s=i(!1),N=()=>{s.value=!0,y(l)},x=()=>{s.value=!1},l=async()=>{if(!t.value||!h.value||!s.value)return;await y();const e=t.value.getBoundingClientRect(),r={top:e.top+window.scrollY,left:e.left+window.scrollX},a={width:e.width,height:e.height},u="6px";v.value=j(r,a,o.placement,u,!1)};function $(e,r){let a;return function(...u){const _=this;a||(e.apply(_,u),a=!0,setTimeout(()=>a=!1,r))}}return C(()=>{const e=$(l,100);window.addEventListener("scroll",e),window.addEventListener("resize",e)}),E(()=>{window.removeEventListener("scroll",l),window.removeEventListener("resize",l)}),(e,r)=>(p(),d(L,null,[f("div",{ref_key:"tooltipTriggerRef",ref:t,class:g({"ded-tooltip-container":!0,[o.className]:!!o.className}),onMouseenter:N,onMouseleave:x,"aria-describedby":w},[z(e.$slots,"default")],34),(p(),M(k,{to:"body"},[D(V,{name:"fade"},{default:H(()=>[s.value?(p(),d("div",{key:0,id:w,ref_key:"tooltipContentRef",ref:h,style:R(v.value),class:g(["ded-tooltip",`ded-tooltip-${o.placement}`])},[f("div",P,[F(U(o.content)+" ",1),o.showArrow?(p(),d("div",{key:0,class:g(["ded-tooltip-arrow",`ded-tooltip-arrow-${o.placement}`])},r[0]||(r[0]=[f("div",{class:"ded-tooltip-arrow-shape"},null,-1)]),2)):T("",!0)])],6)):T("",!0)]),_:1})]))],64))}};m.__docgenInfo={exportName:"default",displayName:"Tooltip",description:"",tags:{},props:[{name:"content",type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"placement",type:{name:"string"},defaultValue:{func:!1,value:'"top"'},values:["top-left","top","top-right","right-top","right","right-bottom","bottom-right","bottom","bottom-left","left-top","left","left-bottom"]},{name:"showArrow",type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"className",type:{name:"string"},defaultValue:{func:!1,value:'""'}}],slots:[{name:"default"}],sourceFiles:["D:/98_測試/up/DED-WDS_VUE/libs/src/ui/element/Tooltip/Tooltip.vue"]};const G={components:{Tooltip:m},title:"Component/Tooltip",component:m,tags:["autodocs"],argTypes:{content:{description:"提示內容",control:{type:"text"}},placement:{description:"提示框位置",control:{type:"select"},options:["top-left","top","top-right","right-top","right","right-bottom","bottom-right","bottom","bottom-left","left-bottom","left","left-top"],table:{type:{summary:"top-left | top | top-right | right-top | right | right-bottom | bottom-right | bottom | bottom-left | left-bottom | left | left-top "}}},showArrow:{description:"是否顯示箭頭",control:{type:"boolean"}},className:{description:"客製化樣式",control:{type:"text"}},default:{description:"觸發器插槽",control:{type:"text"},table:{type:{summary:"Vue Component | HTML"}}}},parameters:{docs:{title:"Tooltip",description:{component:"提示工具組件的呈現及說明。"}}}},c={name:"預設項目",args:{content:"good day",placement:"top",showArrow:!0,className:"",default:'<Button variant="contained" size="large" prefix="SvgAccount">Hover Me</Button>'},render:n=>({components:{Tooltip:m,Button:S},setup(){return{args:n,sanitizeHtml:I}},template:`
            <div style="text-align: center">
                <Tooltip
                    :content="args.content"
                    :showArrow="args.showArrow"
                    :placement="args.placement"
                    :className="args.className"
                >
                    <Button 
                        themeColor="primary"
                        variant="filled"
                        prefix="SvgAccount"
                    >
                        Hover Me
                    </Button>
                </Tooltip>
            </div>
        `}),parameters:{controls:{},docs:{source:{transform:(n,o)=>{const{args:t}=o;return["<script setup>",'import { Tooltip, Button } from "@ded-wds-vue/ui";',"<\/script>","","<template>","  <Tooltip",`    ${t.content?`content="${t.content}"`:""}`,`    ${t.placement?`placement="${t.placement}"`:""}`,`    ${t.showArrow!==void 0?`:showArrow="${t.showArrow}"`:""}`,`    ${t.className?`className="${t.className}"`:""}`,"  >",'    <Button themeColor="primary" variant="filled" prefix="SvgAccount">Hover Me</Button>',"  </Tooltip>","</template>"].filter(Boolean).join(`
`).trim()}}}}};var b,A,B;c.parameters={...c.parameters,docs:{...(b=c.parameters)==null?void 0:b.docs,source:{originalSource:`{
  name: "預設項目",
  args: {
    content: 'good day',
    placement: "top",
    showArrow: true,
    className: '',
    default: \`<Button variant="contained" size="large" prefix="SvgAccount">Hover Me</Button>\`
  },
  render: args => ({
    components: {
      Tooltip,
      Button
    },
    setup() {
      return {
        args,
        sanitizeHtml
      };
    },
    template: \`
            <div style="text-align: center">
                <Tooltip
                    :content="args.content"
                    :showArrow="args.showArrow"
                    :placement="args.placement"
                    :className="args.className"
                >
                    <Button 
                        themeColor="primary"
                        variant="filled"
                        prefix="SvgAccount"
                    >
                        Hover Me
                    </Button>
                </Tooltip>
            </div>
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
          return [\`<script setup>\`, \`import { Tooltip, Button } from "@ded-wds-vue/ui";\`, \`<\/script>\`, '', '<template>', '  <Tooltip', \`    \${args.content ? \`content="\${args.content}"\` : ""}\`, \`    \${args.placement ? \`placement="\${args.placement}"\` : ""}\`, \`    \${args.showArrow !== undefined ? \`:showArrow="\${args.showArrow}"\` : ""}\`, \`    \${args.className ? \`className="\${args.className}"\` : ""}\`, '  >', '    <Button themeColor="primary" variant="filled" prefix="SvgAccount">Hover Me</Button>', '  </Tooltip>', '</template>'].filter(Boolean).join('\\n').trim();
        }
      }
    }
  }
}`,...(B=(A=c.parameters)==null?void 0:A.docs)==null?void 0:B.source}}};const J=["DefaultTooltip"];export{c as DefaultTooltip,J as __namedExportsOrder,G as default};

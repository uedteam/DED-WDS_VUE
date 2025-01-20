import{_ as C}from"./Button-DNzccG-4.js";import{h as i,l as E,q as $,c as d,a as f,r as M,n as g,E as D,b as V,d as z,P as H,T as k,F as L,p as y,o as p,x as R,f as F,t as P,e as T}from"./vue.esm-bundler-D0YZwI1O.js";import{g as U}from"./positionUtils-CIbX64TV.js";import{s as j}from"./sanitizeHtml-AW0cDGJT.js";import"./Icon-BEQChxlu.js";import"./iframe-BAU84F5S.js";import"../sb-preview/runtime.js";const I={class:"ded-tooltip-content"},m={__name:"Tooltip",props:{content:{type:String,default:""},placement:{type:String,default:"top",validator:n=>["top-left","top","top-right","right-top","right","right-bottom","bottom-right","bottom","bottom-left","left-top","left","left-bottom"].includes(n)},showArrow:{type:Boolean,default:!0},className:{type:String,default:""}},setup(n){const e=n,o=i(null),h=i(null),v=i({}),w=`tooltip-${Math.random().toString(36).substring(2,9)}`,s=i(!1),B=()=>{s.value=!0,y(l)},N=()=>{s.value=!1},l=async()=>{if(!o.value||!h.value||!s.value)return;await y();const t=o.value.getBoundingClientRect(),r={top:t.top+window.scrollY,left:t.left+window.scrollX},a={width:t.width,height:t.height},u="6px";v.value=U(r,a,e.placement,u,!1)};function _(t,r){let a;return function(...u){const S=this;a||(t.apply(S,u),a=!0,setTimeout(()=>a=!1,r))}}return E(()=>{const t=_(l,100);window.addEventListener("scroll",t),window.addEventListener("resize",t)}),$(()=>{window.removeEventListener("scroll",l),window.removeEventListener("resize",l)}),(t,r)=>(p(),d(L,null,[f("div",{ref_key:"tooltipTriggerRef",ref:o,class:g({"ded-tooltip-container":!0,[e.className]:!!e.className}),onMouseenter:B,onMouseleave:N,"aria-describedby":w},[M(t.$slots,"default")],34),(p(),D(k,{to:"body"},[V(H,{name:"fade"},{default:z(()=>[s.value?(p(),d("div",{key:0,id:w,ref_key:"tooltipContentRef",ref:h,style:R(v.value),class:g(["ded-tooltip",`ded-tooltip-${e.placement}`])},[f("div",I,[F(P(e.content)+" ",1),e.showArrow?(p(),d("div",{key:0,class:g(["ded-tooltip-arrow",`ded-tooltip-arrow-${e.placement}`])},r[0]||(r[0]=[f("div",{class:"ded-tooltip-arrow-shape"},null,-1)]),2)):T("",!0)])],6)):T("",!0)]),_:1})]))],64))}};m.__docgenInfo={exportName:"default",displayName:"Tooltip",description:"",tags:{},props:[{name:"content",type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"placement",type:{name:"string"},defaultValue:{func:!1,value:'"top"'},values:["top-left","top","top-right","right-top","right","right-bottom","bottom-right","bottom","bottom-left","left-top","left","left-bottom"]},{name:"showArrow",type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"className",type:{name:"string"},defaultValue:{func:!1,value:'""'}}],slots:[{name:"default"}],sourceFiles:["D:/98_測試/up/DED-WDS_VUE/libs/src/ui/element/Tooltip/Tooltip.vue"]};const K={components:{Tooltip:m},title:"Component/Tooltip",component:m,tags:["autodocs"],argTypes:{content:{description:"提示內容",control:{type:"text"}},placement:{description:"提示框位置",control:{type:"select"},options:["top-left","top","top-right","right-top","right","right-bottom","bottom-right","bottom","bottom-left","left-bottom","left","left-top"],table:{type:{summary:"top-left | top | top-right | right-top | right | right-bottom | bottom-right | bottom | bottom-left | left-bottom | left | left-top "}}},showArrow:{description:"是否顯示箭頭",control:{type:"boolean"}},className:{description:"客製化樣式",control:{type:"text"}},default:{description:"觸發器插槽",control:{type:"text"},table:{type:{summary:"Vue Component | HTML"}}}},parameters:{docs:{title:"Tooltip",description:{component:"提示工具組件的呈現及說明。"}}}},c={name:"預設項目",args:{content:"good day",placement:"top",showArrow:!0,className:"",default:'<Button variant="contained" size="large" prefix="SvgAccount">Hover Me</Button>'},render:n=>({components:{Tooltip:m,Button:C},setup(){return{args:n,sanitizeHtml:j}},template:`
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
        `}),parameters:{controls:{},docs:{source:{transform:(n,e)=>{const{args:o}=e;return["  <Tooltip",`    content="${o.content}"`,`    placement="${o.placement}"`,`    :showArrow="${o.showArrow}"`,`    className="${o.className}"`,"  >",'    <Button themeColor="primary" variant="filled" prefix="SvgAccount">Hover Me</Button>',"  </Tooltip>"].join(`
`).trim()}}}}};var b,A,x;c.parameters={...c.parameters,docs:{...(b=c.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
          return ['  <Tooltip', \`    content="\${args.content}"\`, \`    placement="\${args.placement}"\`, \`    :showArrow="\${args.showArrow}"\`, \`    className="\${args.className}"\`, '  >', '    <Button themeColor="primary" variant="filled" prefix="SvgAccount">Hover Me</Button>', '  </Tooltip>'].join('\\n').trim();
        }
      }
    }
  }
}`,...(x=(A=c.parameters)==null?void 0:A.docs)==null?void 0:x.source}}};const Q=["DefaultTooltip"];export{c as DefaultTooltip,Q as __namedExportsOrder,K as default};

import{_ as $}from"./Button-CQMIYjcW.js";import{f as i,j as E,l as S,a as d,e as f,r as k,n as g,C as D,b as M,D as V,O as z,T as H,F as L,k as y,o as p,q as R,s as F,t as U,d as T}from"./vue.esm-bundler-BQySH7jJ.js";import{g as j}from"./positionUtils-CIbX64TV.js";import{s as I}from"./sanitizeHtml-AW0cDGJT.js";import"./Icon-f9eBqVFj.js";import"./iframe-C0k4Wqte.js";import"../sb-preview/runtime.js";const O={class:"ded-tooltip-content"},m={__name:"Tooltip",props:{content:{type:String,default:""},placement:{type:String,default:"top",validator:n=>["top-left","top","top-right","right-top","right","right-bottom","bottom-right","bottom","bottom-left","left-top","left","left-bottom"].includes(n)},showArrow:{type:Boolean,default:!0},className:{type:String,default:""}},setup(n){const e=n,o=i(null),h=i(null),w=i({}),v=`tooltip-${Math.random().toString(36).substring(2,9)}`,s=i(!1),N=()=>{s.value=!0,y(l)},_=()=>{s.value=!1},l=async()=>{if(!o.value||!h.value||!s.value)return;await y();const t=o.value.getBoundingClientRect(),r={top:t.top+window.scrollY,left:t.left+window.scrollX},a={width:t.width,height:t.height},u="6px";w.value=j(r,a,e.placement,u,!1)};function A(t,r){let a;return function(...u){const C=this;a||(t.apply(C,u),a=!0,setTimeout(()=>a=!1,r))}}return E(()=>{const t=A(l,100);window.addEventListener("scroll",t),window.addEventListener("resize",t)}),S(()=>{window.removeEventListener("scroll",l),window.removeEventListener("resize",l)}),(t,r)=>(p(),d(L,null,[f("div",{ref_key:"tooltipTriggerRef",ref:o,class:g({"ded-tooltip-container":!0,[e.className]:!!e.className}),onMouseenter:N,onMouseleave:_,"aria-describedby":v},[k(t.$slots,"default")],34),(p(),D(H,{to:"body"},[M(z,{name:"fade"},{default:V(()=>[s.value?(p(),d("div",{key:0,id:v,ref_key:"tooltipContentRef",ref:h,style:R(w.value),class:g(["ded-tooltip",`ded-tooltip-${e.placement}`])},[f("div",O,[F(U(e.content)+" ",1),e.showArrow?(p(),d("div",{key:0,class:g(["ded-tooltip-arrow",`ded-tooltip-arrow-${e.placement}`])},r[0]||(r[0]=[f("div",{class:"ded-tooltip-arrow-shape"},null,-1)]),2)):T("",!0)])],6)):T("",!0)]),_:1})]))],64))}};m.__docgenInfo={exportName:"default",displayName:"Tooltip",description:"",tags:{},props:[{name:"content",type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"placement",type:{name:"string"},defaultValue:{func:!1,value:'"top"'},values:["top-left","top","top-right","right-top","right","right-bottom","bottom-right","bottom","bottom-left","left-top","left","left-bottom"]},{name:"showArrow",type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"className",type:{name:"string"},defaultValue:{func:!1,value:'""'}}],slots:[{name:"default"}],sourceFiles:["/Users/auouser/Desktop/Work_Space/DED-WDS_VUE/libs/src/ui/element/Tooltip/Tooltip.vue"]};const K={components:{Tooltip:m},title:"Component/Tooltip",component:m,tags:["autodocs"],argTypes:{content:{description:"提示內容",control:{type:"text"}},placement:{description:"提示框位置",control:{type:"select"},options:["top-left","top","top-right","right-top","right","right-bottom","bottom-right","bottom","bottom-left","left-bottom","left","left-top"],table:{type:{summary:"top-left | top | top-right | right-top | right | right-bottom | bottom-right | bottom | bottom-left | left-bottom | left | left-top "}}},showArrow:{description:"是否顯示箭頭",control:{type:"boolean"}},className:{description:"客製化樣式",control:{type:"text"}},default:{description:"觸發器插槽",control:{type:"text"},table:{type:{summary:"Vue Component | HTML"}}}},parameters:{docs:{title:"Tooltip",description:{component:"Tooltip組件的呈現及說明。"}},slots:{default:{description:"任何被包裝的物件都會成為 tooltip 的觸發器",template:"{{ args.default }}"}}}},c={name:"預設項目",args:{content:"good day",placement:"top",showArrow:!0,className:"",default:'<Button variant="contained" size="large" prefix="face">Hover Me</Button>'},render:n=>({components:{Tooltip:m,Button:$},setup(){return{args:n,sanitizeHtml:I}},template:`
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
                        prefix="face"
                    >
                        Hover Me
                    </Button>
                </Tooltip>
            </div>
        `}),parameters:{controls:{},docs:{source:{transform:(n,e)=>{const{args:o}=e;return["  <Tooltip",`    content="${o.content}"`,`    placement="${o.placement}"`,`    :showArrow="${o.showArrow}"`,`    className="${o.className}"`,"  >",'    <Button themeColor="primary" variant="filled" prefix="face">Hover Me</Button>',"  </Tooltip>"].join(`
`).trim()}}}}};var b,x,B;c.parameters={...c.parameters,docs:{...(b=c.parameters)==null?void 0:b.docs,source:{originalSource:`{
  name: "預設項目",
  args: {
    content: 'good day',
    placement: "top",
    showArrow: true,
    className: '',
    default: \`<Button variant="contained" size="large" prefix="face">Hover Me</Button>\`
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
                        prefix="face"
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
          return ['  <Tooltip', \`    content="\${args.content}"\`, \`    placement="\${args.placement}"\`, \`    :showArrow="\${args.showArrow}"\`, \`    className="\${args.className}"\`, '  >', '    <Button themeColor="primary" variant="filled" prefix="face">Hover Me</Button>', '  </Tooltip>'].join('\\n').trim();
        }
      }
    }
  }
}`,...(B=(x=c.parameters)==null?void 0:x.docs)==null?void 0:B.source}}};const Q=["DefaultTooltip"];export{c as DefaultTooltip,Q as __namedExportsOrder,K as default};

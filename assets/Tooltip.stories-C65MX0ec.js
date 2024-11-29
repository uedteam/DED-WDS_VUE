import{_ as A}from"./Button-CTwQCHA1.js";import{e as l,q as B,x as M,a as m,b as d,r as C,n as u,l as E,g as $,E as z,L as S,T as k,F as D,s as v,o as i,d as V,z as H,t as L,f as h}from"./vue.esm-bundler-BHaSr8M7.js";import{g as R}from"./positionUtils-CIbX64TV.js";import{s as F}from"./sanitizeHtml-AW0cDGJT.js";import"./index-Bb4qSo10.js";import"./Icon-BoC-4iYi.js";import"./iframe-gnUhrdvU.js";import"../sb-preview/runtime.js";const U={class:"ded-tooltip-content"},c={__name:"Tooltip",props:{content:{type:String,default:""},placement:{type:String,default:"top",validator:o=>["top-left","top","top-right","right-top","right","right-bottom","bottom-right","bottom","bottom-left","left-top","left","left-bottom"].includes(o)},showArrow:{type:Boolean,default:!0},className:{type:String,default:""}},setup(o){const t=o,e=l(null),g=l(null),f=l({}),T=`tooltip-${Math.random().toString(36).substring(2,9)}`,r=l(!1),q=()=>{r.value=!0,v(a)},x=()=>{r.value=!1},a=async()=>{if(!e.value||!g.value||!r.value)return;await v();const n=e.value.getBoundingClientRect(),s={top:n.top,left:n.left},N={width:n.width,height:n.height},_="6px";f.value=R(s,N,t.placement,_,!1)};return B(()=>{window.addEventListener("scroll",a),window.addEventListener("resize",a)}),M(()=>{window.removeEventListener("scroll",a),window.removeEventListener("resize",a)}),(n,s)=>(i(),m(D,null,[d("div",{ref_key:"tooltipTriggerRef",ref:e,class:u({"ded-tooltip-container":!0,[t.className]:!!t.className}),onMouseenter:q,onMouseleave:x,"aria-describedby":T},[C(n.$slots,"default")],34),(i(),E(k,{to:"body"},[$(S,{name:"fade"},{default:z(()=>[r.value?(i(),m("div",{key:0,id:T,ref_key:"tooltipContentRef",ref:g,style:V(f.value),class:u(["ded-tooltip",`ded-tooltip-${t.placement}`])},[d("div",U,[H(L(t.content)+" ",1),t.showArrow?(i(),m("div",{key:0,class:u(["ded-tooltip-arrow",`ded-tooltip-arrow-${t.placement}`])},s[0]||(s[0]=[d("div",{class:"ded-tooltip-arrow-shape"},null,-1)]),2)):h("",!0)])],6)):h("",!0)]),_:1})]))],64))}};c.__docgenInfo={exportName:"default",displayName:"Tooltip",description:"",tags:{},props:[{name:"content",type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"placement",type:{name:"string"},defaultValue:{func:!1,value:'"top"'},values:["top-left","top","top-right","right-top","right","right-bottom","bottom-right","bottom","bottom-left","left-top","left","left-bottom"]},{name:"showArrow",type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"className",type:{name:"string"},defaultValue:{func:!1,value:'""'}}],slots:[{name:"default"}],sourceFiles:["/Users/auouser/Desktop/Work_Space/DED-WDS_VUE/libs/src/ui/element/Tooltip/Tooltip.vue"]};const Q={components:{Tooltip:c},title:"Component/Tooltip",component:c,tags:["autodocs"],argTypes:{content:{description:"提示內容",control:{type:"text"}},placement:{description:"提示框位置",control:{type:"select"},options:["top-left","top","top-right","right-top","right","right-bottom","bottom-right","bottom","bottom-left","left-bottom","left","left-top"],table:{type:{summary:"top-left | top | top-right | right-top | right | right-bottom | bottom-right | bottom | bottom-left | left-bottom | left | left-top "}}},showArrow:{description:"是否顯示箭頭",control:{type:"boolean"}},className:{description:"客製化樣式",control:{type:"text"}},default:{description:"觸發器插槽",control:{type:"text"},table:{type:{summary:"Vue Component | HTML"}}}},parameters:{docs:{title:"Tooltip",description:{component:"Tooltip組件的呈現及說明。"}},slots:{default:{description:"任何被包裝的物件都會成為 tooltip 的觸發器",template:"{{ args.default }}"}}}},p={name:"預設項目",args:{content:"good day",placement:"top",showArrow:!0,className:"",default:'<button class="ded-button ded-button-contained ded-component-large ded-button-fit ded-button-contained-primary"><svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 -960 960 960" class="ded-icon-large"><path d="M360-390q-21 0-35.5-14.5T310-440t14.5-35.5T360-490t35.5 14.5T410-440t-14.5 35.5T360-390m240 0q-21 0-35.5-14.5T550-440t14.5-35.5T600-490t35.5 14.5T650-440t-14.5 35.5T600-390M480-160q134 0 227-93t93-227q0-24-3-46.5T786-570q-21 5-42 7.5t-44 2.5q-91 0-172-39T390-708q-32 78-91.5 135.5T160-486v6q0 134 93 227t227 93m0 80q-83 0-156-31.5T197-197t-85.5-127T80-480t31.5-156T197-763t127-85.5T480-880t156 31.5T763-763t85.5 127T880-480t-31.5 156T763-197t-127 85.5T480-80m-54-715q42 70 114 112.5T700-640q14 0 27-1.5t27-3.5q-42-70-114-112.5T480-800q-14 0-27 1.5t-27 3.5M177-581q51-29 89-75t57-103q-51 29-89 75t-57 103m146-178"></path></svg>Hover Me</button>'},render:o=>({components:{Tooltip:c,Button:A},setup(){return{args:o,sanitizeHtml:F}},template:`
            <div style="text-align: center">
                <Tooltip
                    :content="args.content"
                    :showArrow="args.showArrow"
                    :placement="args.placement"
                    :className="args.className"
                >
                    <template #default>
                        <div v-html="sanitizeHtml(args.default)"></div>
                    </template>
                </Tooltip>
            </div>
        `}),parameters:{controls:{},docs:{source:{transform:(o,t)=>{const{args:e}=t;return["  <Tooltip",`    content="${e.content}"`,`    placement="${e.placement}"`,`    :showArrow="${e.showArrow}"`,`    className="${e.className}"`,"  >",'    <Button variant="contained" size="large" prefix="face">Hover Me</Button>',"  </Tooltip>"].join(`
`).trim()}}}}};var w,b,y;p.parameters={...p.parameters,docs:{...(w=p.parameters)==null?void 0:w.docs,source:{originalSource:`{
  name: "預設項目",
  args: {
    content: 'good day',
    placement: "top",
    showArrow: true,
    className: '',
    default: \`<button class="ded-button ded-button-contained ded-component-large ded-button-fit ded-button-contained-primary"><svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 -960 960 960" class="ded-icon-large"><path d="M360-390q-21 0-35.5-14.5T310-440t14.5-35.5T360-490t35.5 14.5T410-440t-14.5 35.5T360-390m240 0q-21 0-35.5-14.5T550-440t14.5-35.5T600-490t35.5 14.5T650-440t-14.5 35.5T600-390M480-160q134 0 227-93t93-227q0-24-3-46.5T786-570q-21 5-42 7.5t-44 2.5q-91 0-172-39T390-708q-32 78-91.5 135.5T160-486v6q0 134 93 227t227 93m0 80q-83 0-156-31.5T197-197t-85.5-127T80-480t31.5-156T197-763t127-85.5T480-880t156 31.5T763-763t85.5 127T880-480t-31.5 156T763-197t-127 85.5T480-80m-54-715q42 70 114 112.5T700-640q14 0 27-1.5t27-3.5q-42-70-114-112.5T480-800q-14 0-27 1.5t-27 3.5M177-581q51-29 89-75t57-103q-51 29-89 75t-57 103m146-178"></path></svg>Hover Me</button>\`
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
                    <template #default>
                        <div v-html="sanitizeHtml(args.default)"></div>
                    </template>
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
          return ['  <Tooltip', \`    content="\${args.content}"\`, \`    placement="\${args.placement}"\`, \`    :showArrow="\${args.showArrow}"\`, \`    className="\${args.className}"\`, '  >', '    <Button variant="contained" size="large" prefix="face">Hover Me</Button>', '  </Tooltip>'].join('\\n').trim();
        }
      }
    }
  }
}`,...(y=(b=p.parameters)==null?void 0:b.docs)==null?void 0:y.source}}};const X=["DefaultTooltip"];export{p as DefaultTooltip,X as __namedExportsOrder,Q as default};

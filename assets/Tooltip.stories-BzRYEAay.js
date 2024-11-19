import{_ as N}from"./Button-Drwd9J9p.js";import{e as p,q as k,x as _,a as g,b as A,r as B,n as f,g as M,j as $,D as C,K as E,T as D,F as S,s as V,o as c,d as z,J as R,t as F,f as b}from"./vue.esm-bundler-ChZ6yN_a.js";import"./index-Bb4qSo10.js";import"./Icon-Bq9qvX2Z.js";import"./iframe-BEa0nEL_.js";import"../sb-preview/runtime.js";const u={__name:"Tooltip",props:{content:{type:String,default:""},placement:{type:String,default:"top",validator:l=>["top-left","top","top-right","right-top","right","right-bottom","bottom-right","bottom","bottom-left","left-top","left","left-bottom"].includes(l)},showArrow:{type:Boolean,default:!0},className:{type:String,default:""}},setup(l){const a=l,r=p(null),d=p(null),h=p({}),T=`tooltip-${Math.random().toString(36).substring(2,9)}`,i=p(!1),q=()=>{i.value=!0,V(s)},x=()=>{i.value=!1},s=()=>{if(!r.value||!d.value||!i.value)return;const t=r.value.getBoundingClientRect(),e=d.value.getBoundingClientRect();let o,n;switch(a.placement){case"top-right":o=t.top-e.height-12,n=t.right-e.width;break;case"top":o=t.top-e.height-12,n=t.left+t.width/2-e.width/2;break;case"top-left":o=t.top-e.height-12,n=t.left;break;case"right-top":o=t.top,n=t.right+12;break;case"right":o=t.top+t.height/2-e.height/2,n=t.right+12;break;case"right-bottom":o=t.bottom-e.height,n=t.right+12;break;case"bottom-right":o=t.bottom+12,n=t.right-e.width;break;case"bottom":o=t.bottom+12,n=t.left+t.width/2-e.width/2;break;case"bottom-left":o=t.bottom+12,n=t.left;break;case"left-top":o=t.top,n=t.left-e.width-12;break;case"left":o=t.top+t.height/2-e.height/2,n=t.left-e.width-12;break;case"left-bottom":o=t.bottom-e.height,n=t.left-e.width-12;break}h.value={top:`${o}px`,left:`${n}px`,position:"fixed"}};return k(()=>{window.addEventListener("scroll",s),window.addEventListener("resize",s)}),_(()=>{window.removeEventListener("scroll",s),window.removeEventListener("resize",s)}),(t,e)=>(c(),g(S,null,[A("div",{ref_key:"tooltipTriggerRef",ref:r,class:f({"tooltip-trigger":!0,[a.className]:!!a.className}),onMouseenter:q,onMouseleave:x,"aria-describedby":T},[B(t.$slots,"default")],34),(c(),M(D,{to:"body"},[$(E,{name:"fade"},{default:C(()=>[i.value?(c(),g("div",{key:0,id:T,ref_key:"tooltipContentRef",ref:d,style:z(h.value),class:f(["tooltip-content",a.placement])},[R(F(a.content)+" ",1),a.showArrow?(c(),g("div",{key:0,class:f(`tooltip-arrow ${a.placement}`)},null,2)):b("",!0)],6)):b("",!0)]),_:1})]))],64))}};u.__docgenInfo={exportName:"default",displayName:"Tooltip",description:"",tags:{},props:[{name:"content",type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"placement",type:{name:"string"},defaultValue:{func:!1,value:'"top"'},values:["top-left","top","top-right","right-top","right","right-bottom","bottom-right","bottom","bottom-left","left-top","left","left-bottom"]},{name:"showArrow",type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"className",type:{name:"string"},defaultValue:{func:!1,value:'""'}}],slots:[{name:"default"}],sourceFiles:["D:/98_測試/up/DED-WDS_VUE/libs/src/ui/element/Tooltip/Tooltip.vue"]};const K={components:{Tooltip:u},title:"Design System/Tooltip",component:u,tags:["autodocs"],argTypes:{content:{description:"提示內容",control:{type:"text"}},placement:{description:"提示框位置",control:{type:"select"},options:["top-left","top","top-right","right-top","right","right-bottom","bottom-right","bottom","bottom-left","left-bottom","left","left-top"],table:{type:{summary:"top-left | top | top-right | right-top | right | right-bottom | bottom-right | bottom | bottom-left | left-bottom | left | left-top "}}},showArrow:{description:"是否顯示箭頭",control:{type:"boolean"}},className:{description:"客製化樣式",control:{type:"text"}},default:{description:"tooltip 觸發器",control:{type:"text"}}},parameters:{docs:{title:"Tooltip",description:{component:"Tooltip組件的呈現及說明。"}},slots:{default:{description:"任何被包裝的物件都會成為 tooltip 的觸發器",template:"{{ args.default }}"}}}},m={name:"預設項目",args:{content:"good day",placement:"top",showArrow:!0,className:"",default:'<button class="button button-contained component-large button-fit button-contained-primary"><svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 -960 960 960" class="icon-large"><path d="M360-390q-21 0-35.5-14.5T310-440t14.5-35.5T360-490t35.5 14.5T410-440t-14.5 35.5T360-390m240 0q-21 0-35.5-14.5T550-440t14.5-35.5T600-490t35.5 14.5T650-440t-14.5 35.5T600-390M480-160q134 0 227-93t93-227q0-24-3-46.5T786-570q-21 5-42 7.5t-44 2.5q-91 0-172-39T390-708q-32 78-91.5 135.5T160-486v6q0 134 93 227t227 93m0 80q-83 0-156-31.5T197-197t-85.5-127T80-480t31.5-156T197-763t127-85.5T480-880t156 31.5T763-763t85.5 127T880-480t-31.5 156T763-197t-127 85.5T480-80m-54-715q42 70 114 112.5T700-640q14 0 27-1.5t27-3.5q-42-70-114-112.5T480-800q-14 0-27 1.5t-27 3.5M177-581q51-29 89-75t57-103q-51 29-89 75t-57 103m146-178"></path></svg>Hover Me</button>'},render:l=>({components:{Tooltip:u,Button:N},setup(){return{args:l}},template:`
            <div style="text-align: center">
                <Tooltip
                    :content="args.content"
                    :showArrow="args.showArrow"
                    :placement="args.placement"
                    :className="args.className"
                >
                    <template #default>
                        <div v-html="args.default"></div>
                    </template>
                </Tooltip>
            </div>
        `}),parameters:{controls:{},docs:{source:{transform:(l,a)=>{const{args:r}=a;return['<div style="text-align: center">',"  <Tooltip",`    content="${r.content}"`,`    placement="${r.placement}"`,`    :showArrow="${r.showArrow}"`,`    className="${r.className}"`,"  >",'    <Button variant="contained" size="large" prefix="face">Hover Me</Button>',"  </Tooltip>","</div>"].join(`
`).trim()}}}}};var v,w,y;m.parameters={...m.parameters,docs:{...(v=m.parameters)==null?void 0:v.docs,source:{originalSource:`{
  name: "預設項目",
  args: {
    content: 'good day',
    placement: "top",
    showArrow: true,
    className: '',
    default: \`<button class="button button-contained component-large button-fit button-contained-primary"><svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 -960 960 960" class="icon-large"><path d="M360-390q-21 0-35.5-14.5T310-440t14.5-35.5T360-490t35.5 14.5T410-440t-14.5 35.5T360-390m240 0q-21 0-35.5-14.5T550-440t14.5-35.5T600-490t35.5 14.5T650-440t-14.5 35.5T600-390M480-160q134 0 227-93t93-227q0-24-3-46.5T786-570q-21 5-42 7.5t-44 2.5q-91 0-172-39T390-708q-32 78-91.5 135.5T160-486v6q0 134 93 227t227 93m0 80q-83 0-156-31.5T197-197t-85.5-127T80-480t31.5-156T197-763t127-85.5T480-880t156 31.5T763-763t85.5 127T880-480t-31.5 156T763-197t-127 85.5T480-80m-54-715q42 70 114 112.5T700-640q14 0 27-1.5t27-3.5q-42-70-114-112.5T480-800q-14 0-27 1.5t-27 3.5M177-581q51-29 89-75t57-103q-51 29-89 75t-57 103m146-178"></path></svg>Hover Me</button>\`
  },
  render: args => ({
    components: {
      Tooltip,
      Button
    },
    setup() {
      return {
        args
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
                        <div v-html="args.default"></div>
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
          return ['<div style="text-align: center">', '  <Tooltip', \`    content="\${args.content}"\`, \`    placement="\${args.placement}"\`, \`    :showArrow="\${args.showArrow}"\`, \`    className="\${args.className}"\`, '  >', '    <Button variant="contained" size="large" prefix="face">Hover Me</Button>', '  </Tooltip>', '</div>'].join('\\n').trim();
        }
      }
    }
  }
}`,...(y=(w=m.parameters)==null?void 0:w.docs)==null?void 0:y.source}}};const O=["DefaultTooltip"];export{m as DefaultTooltip,O as __namedExportsOrder,K as default};

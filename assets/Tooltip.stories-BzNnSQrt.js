import{_ as E}from"./Button-Bc-C4yM4.js";import{r as s,p as B,s as C,c as f,b as D,g as V,n as h,d as M,j as S,I as F,T as H,J as P,F as z,q as R,o as c,y as $,K as j,t as L,e as w}from"./vue.esm-bundler-B_DV3Cj1.js";import"./index-Bb4qSo10.js";import"./Icon-Beb_Hq0_.js";import"./iframe-BcRfFM8S.js";import"../sb-preview/runtime.js";const i={__name:"Tooltip",props:{content:{type:String},showArrow:{type:Boolean,default:!0},placement:{type:String,default:"top",validator:l=>["top-left","top","top-right","right-top","right","right-bottom","bottom-right","bottom","bottom-left","left-top","left","left-bottom"].includes(l)},className:{type:String,default:""}},setup(l){const r=l,d=s(null),g=s(null),T=s({}),b=`tooltip-${Math.random().toString(36).substring(2,9)}`,p=s(!1),N=()=>{p.value=!0,R(a)},_=()=>{p.value=!1},a=()=>{if(!d.value||!g.value||!p.value)return;const t=d.value.getBoundingClientRect(),e=g.value.getBoundingClientRect();let o,n;switch(r.placement){case"top-right":o=t.top-e.height-12,n=t.right-e.width;break;case"top":o=t.top-e.height-12,n=t.left+t.width/2-e.width/2;break;case"top-left":o=t.top-e.height-12,n=t.left;break;case"right-top":o=t.top,n=t.right+12;break;case"right":o=t.top+t.height/2-e.height/2,n=t.right+12;break;case"right-bottom":o=t.bottom-e.height,n=t.right+12;break;case"bottom-right":o=t.bottom+12,n=t.right-e.width;break;case"bottom":o=t.bottom+12,n=t.left+t.width/2-e.width/2;break;case"bottom-left":o=t.bottom+12,n=t.left;break;case"left-top":o=t.top,n=t.left-e.width-12;break;case"left":o=t.top+t.height/2-e.height/2,n=t.left-e.width-12;break;case"left-bottom":o=t.bottom-e.height,n=t.left-e.width-12;break}T.value={top:`${o}px`,left:`${n}px`,position:"fixed"}};return B(()=>{window.addEventListener("scroll",a),window.addEventListener("resize",a)}),C(()=>{window.removeEventListener("scroll",a),window.removeEventListener("resize",a)}),(t,e)=>(c(),f(z,null,[D("div",{ref_key:"tooltipTriggerRef",ref:d,class:h({"tooltip-trigger":!0,[r.className]:!!r.className}),onMouseenter:N,onMouseleave:_,"aria-describedby":b},[V(t.$slots,"default")],34),(c(),M(P,{to:"body"},[S(H,{name:"fade"},{default:F(()=>[p.value?(c(),f("div",{key:0,id:b,ref_key:"tooltipContentRef",ref:g,style:$(T.value),class:h(["tooltip-content",r.placement])},[j(L(r.content)+" ",1),r.showArrow?(c(),f("div",{key:0,class:h(`tooltip-arrow ${r.placement}`)},null,2)):w("",!0)],6)):w("",!0)]),_:1})]))],64))}};i.__docgenInfo={exportName:"default",displayName:"Tooltip",description:"",tags:{},props:[{name:"content",type:{name:"string"}},{name:"showArrow",type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"placement",type:{name:"string"},defaultValue:{func:!1,value:"'top'"},values:["top-left","top","top-right","right-top","right","right-bottom","bottom-right","bottom","bottom-left","left-top","left","left-bottom"]},{name:"className",type:{name:"string"},defaultValue:{func:!1,value:"''"}}],slots:[{name:"default"}],sourceFiles:["/Users/jony_worker/Documents/90_外部檔案/upstream/DED-WDS_VUE/libs/src/ui/element/Tooltip/Tooltip.vue"]};const G={components:{Tooltip:i},title:"Design System/Tooltip",component:i,tags:["autodocs"],argTypes:{content:{description:"提示內容",control:{type:"text"}},showArrow:{description:"是否顯示箭頭",control:{type:"boolean"}},placement:{description:"提示框位置",control:{type:"select"},options:["top-left","top","top-right","right-top","right","right-bottom","bottom-right","bottom","bottom-left","left-bottom","left","left-top"]},className:{description:"客製化樣式",control:{type:"text"}},default:{description:"tooltip 的觸發器",control:{type:"text"}}},parameters:{docs:{title:"Tooltip",description:{component:"Tooltip組件的呈現及說明。"}},slots:{default:{description:"任何被包裝的物件都會成為 tooltip 的觸發器",template:"{{ args.default }}"}}}},m={name:"主要項目",args:{content:"Hi, Hi~ Nice to meet you!",showArrow:!0,placement:"bottom-left",default:'<button class="button button-contained component-large button-fit button-contained-primary"><svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 -960 960 960" class="icon-large"><path d="M360-390q-21 0-35.5-14.5T310-440t14.5-35.5T360-490t35.5 14.5T410-440t-14.5 35.5T360-390m240 0q-21 0-35.5-14.5T550-440t14.5-35.5T600-490t35.5 14.5T650-440t-14.5 35.5T600-390M480-160q134 0 227-93t93-227q0-24-3-46.5T786-570q-21 5-42 7.5t-44 2.5q-91 0-172-39T390-708q-32 78-91.5 135.5T160-486v6q0 134 93 227t227 93m0 80q-83 0-156-31.5T197-197t-85.5-127T80-480t31.5-156T197-763t127-85.5T480-880t156 31.5T763-763t85.5 127T880-480t-31.5 156T763-197t-127 85.5T480-80m-54-715q42 70 114 112.5T700-640q14 0 27-1.5t27-3.5q-42-70-114-112.5T480-800q-14 0-27 1.5t-27 3.5M177-581q51-29 89-75t57-103q-51 29-89 75t-57 103m146-178"></path></svg>Hover Me</button>',className:""},render:l=>({components:{Tooltip:i,Button:E},setup(){return{args:l}},template:`
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
        `}),parameters:{controls:{}}},u={name:"Tooltip 顯示位置",args:{content:"",showArrow:!0},render:l=>({components:{Tooltip:i},setup(){const r=s(["top-left","top","top-right","right-top","right","right-bottom","bottom-right","bottom","bottom-left","left-bottom","left","left-top"]);return{args:l,tooltipPosValue:r}},template:`
            <div style="
                width: 500px;
                display: flex;
                align-items: center;
                flex-wrap: wrap;
                gap: 40px;
                margin: 56px">
                <Tooltip 
                    v-for="(item, index) in tooltipPosValue"
                    :key="index"
                    :content="args.content || 'Tooltip on ' + item"
                    :placement="item" 
                    :showArrow="args.showArrow">
                    <!-- 被 tooltip 包裹的資料 -->
                    <div
                        style="
                        width: 100px;
                        height: 100px;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        justify-content: center;
                        border-radius: 12px;
                        border: 2px solid #533bd4;
                        color: #533bd4;
                        padding: 8px;"
                    >
                        Hover<br>
                        <p style="font-size: 12px;">
                            - {{ item }} -
                        </p>
                    </div>
                </Tooltip>
            </div>
        `}),parameters:{controls:{exclude:["placement"]}}};var v,x,y;m.parameters={...m.parameters,docs:{...(v=m.parameters)==null?void 0:v.docs,source:{originalSource:`{
  name: "主要項目",
  args: {
    content: 'Hi, Hi~ Nice to meet you!',
    showArrow: true,
    placement: "bottom-left",
    default: \`<button class="button button-contained component-large button-fit button-contained-primary"><svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 -960 960 960" class="icon-large"><path d="M360-390q-21 0-35.5-14.5T310-440t14.5-35.5T360-490t35.5 14.5T410-440t-14.5 35.5T360-390m240 0q-21 0-35.5-14.5T550-440t14.5-35.5T600-490t35.5 14.5T650-440t-14.5 35.5T600-390M480-160q134 0 227-93t93-227q0-24-3-46.5T786-570q-21 5-42 7.5t-44 2.5q-91 0-172-39T390-708q-32 78-91.5 135.5T160-486v6q0 134 93 227t227 93m0 80q-83 0-156-31.5T197-197t-85.5-127T80-480t31.5-156T197-763t127-85.5T480-880t156 31.5T763-763t85.5 127T880-480t-31.5 156T763-197t-127 85.5T480-80m-54-715q42 70 114 112.5T700-640q14 0 27-1.5t27-3.5q-42-70-114-112.5T480-800q-14 0-27 1.5t-27 3.5M177-581q51-29 89-75t57-103q-51 29-89 75t-57 103m146-178"></path></svg>Hover Me</button>\`,
    className: ''
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
        \`
  }),
  // 控制 controls 中能控制的參數
  parameters: {
    controls: {
      // include: ['themeColor', 'label', 'value', 'name' ],
    }
  }
}`,...(y=(x=m.parameters)==null?void 0:x.docs)==null?void 0:y.source}}};var q,k,A;u.parameters={...u.parameters,docs:{...(q=u.parameters)==null?void 0:q.docs,source:{originalSource:`{
  name: "Tooltip 顯示位置",
  args: {
    content: '',
    showArrow: true
  },
  render: args => ({
    components: {
      Tooltip
    },
    setup() {
      const tooltipPosValue = ref(['top-left', 'top', 'top-right', 'right-top', 'right', 'right-bottom', 'bottom-right', 'bottom', 'bottom-left', 'left-bottom', 'left', 'left-top']);
      return {
        args,
        tooltipPosValue
      };
    },
    template: \`
            <div style="
                width: 500px;
                display: flex;
                align-items: center;
                flex-wrap: wrap;
                gap: 40px;
                margin: 56px">
                <Tooltip 
                    v-for="(item, index) in tooltipPosValue"
                    :key="index"
                    :content="args.content || 'Tooltip on ' + item"
                    :placement="item" 
                    :showArrow="args.showArrow">
                    <!-- 被 tooltip 包裹的資料 -->
                    <div
                        style="
                        width: 100px;
                        height: 100px;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        justify-content: center;
                        border-radius: 12px;
                        border: 2px solid #533bd4;
                        color: #533bd4;
                        padding: 8px;"
                    >
                        Hover<br>
                        <p style="font-size: 12px;">
                            - {{ item }} -
                        </p>
                    </div>
                </Tooltip>
            </div>
        \`
  }),
  // 控制 controls 中能控制的參數
  parameters: {
    controls: {
      exclude: ['placement']
    }
  }
}`,...(A=(k=u.parameters)==null?void 0:k.docs)==null?void 0:A.source}}};const Q=["DefaultTooltip","TooltipPlacement"];export{m as DefaultTooltip,u as TooltipPlacement,Q as __namedExportsOrder,G as default};

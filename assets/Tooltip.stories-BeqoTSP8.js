import{_ as B}from"./Button-Cb3001oE.js";import{r as s,p as C,s as D,c as f,b as M,g as V,n as h,d as S,j as F,I as H,M as P,T as z,F as R,q as $,o as p,y as j,J as I,t as L,e as w}from"./vue.esm-bundler-BiS57llT.js";import{_ as U}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./index-Bb4qSo10.js";import"./Icon-C0v7E9fm.js";import"./iframe-Bn5geBTM.js";import"../sb-preview/runtime.js";const A={__name:"Tooltip",props:{content:{type:String},showArrow:{type:Boolean,default:!0},placement:{type:String,default:"top",validator:a=>["top-left","top","top-right","right-top","right","right-bottom","bottom-right","bottom","bottom-left","left-top","left","left-bottom"].includes(a)},className:{type:String,default:""}},setup(a){const r=a,d=s(null),g=s(null),b=s({}),T=`tooltip-${Math.random().toString(36).substring(2,9)}`,i=s(!1),N=()=>{i.value=!0,$(l)},E=()=>{i.value=!1},l=()=>{if(!d.value||!g.value||!i.value)return;const t=d.value.getBoundingClientRect(),e=g.value.getBoundingClientRect();let o,n;switch(r.placement){case"top-right":o=t.top-e.height-12,n=t.right-e.width;break;case"top":o=t.top-e.height-12,n=t.left+t.width/2-e.width/2;break;case"top-left":o=t.top-e.height-12,n=t.left;break;case"right-top":o=t.top,n=t.right+12;break;case"right":o=t.top+t.height/2-e.height/2,n=t.right+12;break;case"right-bottom":o=t.bottom-e.height,n=t.right+12;break;case"bottom-right":o=t.bottom+12,n=t.right-e.width;break;case"bottom":o=t.bottom+12,n=t.left+t.width/2-e.width/2;break;case"bottom-left":o=t.bottom+12,n=t.left;break;case"left-top":o=t.top,n=t.left-e.width-12;break;case"left":o=t.top+t.height/2-e.height/2,n=t.left-e.width-12;break;case"left-bottom":o=t.bottom-e.height,n=t.left-e.width-12;break}b.value={top:`${o}px`,left:`${n}px`,position:"fixed"}};return C(()=>{window.addEventListener("scroll",l),window.addEventListener("resize",l)}),D(()=>{window.removeEventListener("scroll",l),window.removeEventListener("resize",l)}),(t,e)=>(p(),f(R,null,[M("div",{ref_key:"tooltipTriggerRef",ref:d,class:h({"tooltip-trigger":!0,[r.className]:!!r.className}),onMouseenter:N,onMouseleave:E,"aria-describedby":T},[V(t.$slots,"default",{},void 0,!0)],34),(p(),S(z,{to:"body"},[F(P,{name:"fade"},{default:H(()=>[i.value?(p(),f("div",{key:0,id:T,ref_key:"tooltipContentRef",ref:g,style:j(b.value),class:h(["tooltip-content",r.placement])},[I(L(r.content)+" ",1),r.showArrow?(p(),f("div",{key:0,class:h(`tooltip-arrow ${r.placement}`)},null,2)):w("",!0)],6)):w("",!0)]),_:1})]))],64))}},u=U(A,[["__scopeId","data-v-ec8fe250"]]);A.__docgenInfo={exportName:"default",displayName:"Tooltip",description:"",tags:{},props:[{name:"content",type:{name:"string"}},{name:"showArrow",type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"placement",type:{name:"string"},defaultValue:{func:!1,value:"'top'"},values:["top-left","top","top-right","right-top","right","right-bottom","bottom-right","bottom","bottom-left","left-top","left","left-bottom"]},{name:"className",type:{name:"string"},defaultValue:{func:!1,value:"''"}}],slots:[{name:"default"}],sourceFiles:["/Users/jony_worker/Documents/90_外部檔案/upstream/DED-WDS_VUE/libs/src/ui/element/Tooltip/Tooltip.vue"]};const Y={components:{Tooltip:u},title:"Design System/Tooltip",component:u,tags:["autodocs"],argTypes:{content:{description:"提示內容",control:{type:"text"}},showArrow:{description:"是否顯示箭頭",control:{type:"boolean"}},placement:{description:"提示框位置",control:{type:"select"},options:["top-left","top","top-right","right-top","right","right-bottom","bottom-right","bottom","bottom-left","left-bottom","left","left-top"]},className:{description:"客製化樣式",control:{type:"text"}},default:{description:"tooltip 的觸發器",control:{type:"text"}}},parameters:{docs:{title:"Tooltip",description:{component:"Tooltip組件的呈現及說明。"}},slots:{default:{description:"任何被包裝的物件都會成為 tooltip 的觸發器",template:"{{ args.default }}"}}}},c={name:"主要項目",args:{content:"Hi, Hi~ Nice to meet you!",showArrow:!0,placement:"bottom-left",default:'<button class="button button-contained component-large button-fit button-contained-primary"><svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 -960 960 960" class="icon-large"><path d="M360-390q-21 0-35.5-14.5T310-440t14.5-35.5T360-490t35.5 14.5T410-440t-14.5 35.5T360-390m240 0q-21 0-35.5-14.5T550-440t14.5-35.5T600-490t35.5 14.5T650-440t-14.5 35.5T600-390M480-160q134 0 227-93t93-227q0-24-3-46.5T786-570q-21 5-42 7.5t-44 2.5q-91 0-172-39T390-708q-32 78-91.5 135.5T160-486v6q0 134 93 227t227 93m0 80q-83 0-156-31.5T197-197t-85.5-127T80-480t31.5-156T197-763t127-85.5T480-880t156 31.5T763-763t85.5 127T880-480t-31.5 156T763-197t-127 85.5T480-80m-54-715q42 70 114 112.5T700-640q14 0 27-1.5t27-3.5q-42-70-114-112.5T480-800q-14 0-27 1.5t-27 3.5M177-581q51-29 89-75t57-103q-51 29-89 75t-57 103m146-178"></path></svg>Hover Me</button>',className:""},render:a=>({components:{Tooltip:u,Button:B},setup(){return{args:a}},template:`
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
        `}),parameters:{controls:{}}},m={name:"Tooltip 顯示位置",args:{content:"",showArrow:!0},render:a=>({components:{Tooltip:u},setup(){const r=s(["top-left","top","top-right","right-top","right","right-bottom","bottom-right","bottom","bottom-left","left-bottom","left","left-top"]);return{args:a,tooltipPosValue:r}},template:`
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
        `}),parameters:{controls:{exclude:["placement"]}}};var v,x,y;c.parameters={...c.parameters,docs:{...(v=c.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(y=(x=c.parameters)==null?void 0:x.docs)==null?void 0:y.source}}};var q,_,k;m.parameters={...m.parameters,docs:{...(q=m.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
}`,...(k=(_=m.parameters)==null?void 0:_.docs)==null?void 0:k.source}}};const Z=["DefaultTooltip","TooltipPlacement"];export{c as DefaultTooltip,m as TooltipPlacement,Z as __namedExportsOrder,Y as default};

import{B as F}from"./Button-DKyHAzLO.js";import{j as a,l as S,J as V,a as g,b as z,r as v,p as H,A as N,B as P,T as M,E as R,F as $,K as L,o as p,m as j,n as w,d as T}from"./vue.esm-bundler-CsTC-5Ev.js";import{_ as I}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./index-Bb4qSo10.js";import"./Icon-Pq8-XFtv.js";import"./iframe-D3-rZU4J.js";import"../sb-preview/runtime.js";const E={__name:"Tooltip",props:{placement:{type:String,default:"top",validator:r=>["top-left","top","top-right","right-top","right","right-bottom","bottom-right","bottom","bottom-left","left-top","left","left-bottom"].includes(r)},showArrow:{type:Boolean,default:!0}},setup(r){const u=r,d=a(null),f=a(null),h=a({}),b=`tooltip-${Math.random().toString(36).substring(2,9)}`,i=a(!1),C=()=>{i.value=!0,L(l)},D=()=>{i.value=!1},l=()=>{if(!d.value||!f.value||!i.value)return;const t=d.value.getBoundingClientRect(),e=f.value.getBoundingClientRect();let o,n;switch(u.placement){case"top-right":o=t.top-e.height-12,n=t.right-e.width;break;case"top":o=t.top-e.height-12,n=t.left+t.width/2-e.width/2;break;case"top-left":o=t.top-e.height-12,n=t.left;break;case"right-top":o=t.top,n=t.right+12;break;case"right":o=t.top+t.height/2-e.height/2,n=t.right+12;break;case"right-bottom":o=t.bottom-e.height,n=t.right+12;break;case"bottom-right":o=t.bottom+12,n=t.right-e.width;break;case"bottom":o=t.bottom+12,n=t.left+t.width/2-e.width/2;break;case"bottom-left":o=t.bottom+12,n=t.left;break;case"left-top":o=t.top,n=t.left-e.width-12;break;case"left":o=t.top+t.height/2-e.height/2,n=t.left-e.width-12;break;case"left-bottom":o=t.bottom-e.height,n=t.left-e.width-12;break}h.value={top:`${o}px`,left:`${n}px`,position:"fixed"}};return S(()=>{window.addEventListener("scroll",l),window.addEventListener("resize",l)}),V(()=>{window.removeEventListener("scroll",l),window.removeEventListener("resize",l)}),(t,e)=>(p(),g($,null,[z("div",{ref_key:"tooltipTriggerRef",ref:d,class:"tooltip-trigger",onMouseenter:C,onMouseleave:D,"aria-describedby":b},[v(t.$slots,"default",{},void 0,!0)],544),(p(),H(R,{to:"body"},[N(M,{name:"fade"},{default:P(()=>[i.value?(p(),g("div",{key:0,id:b,ref_key:"tooltipContentRef",ref:f,style:j(h.value),class:w(["tooltip-content",u.placement])},[v(t.$slots,"content",{},void 0,!0),r.showArrow?(p(),g("div",{key:0,class:w(`tooltip-arrow ${u.placement}`)},null,2)):T("",!0)],6)):T("",!0)]),_:3})]))],64))}},c=I(E,[["__scopeId","data-v-a247cb1c"]]);E.__docgenInfo={exportName:"default",displayName:"Tooltip",description:"",tags:{},props:[{name:"placement",type:{name:"string"},defaultValue:{func:!1,value:"'top'"},values:["top-left","top","top-right","right-top","right","right-bottom","bottom-right","bottom","bottom-left","left-top","left","left-bottom"]},{name:"showArrow",type:{name:"boolean"},defaultValue:{func:!1,value:"true"}}],slots:[{name:"default"},{name:"content"}],sourceFiles:["/Users/auouser/Desktop/Work_Space/DED-WDS_VUE/libs/src/ui/element/Tooltip/Tooltip.vue"]};const Q={components:{Tooltip:c},title:"Design System/Tooltip",component:c,tags:["autodocs"],argTypes:{placement:{description:"Tooltip位置",control:{type:"select"},options:["top-left","top","top-right","right-top","right","right-bottom","bottom-right","bottom","bottom-left","left-bottom","left","left-top"]},showArrow:{description:"控制顯示Tooltip箭頭",control:{type:"boolean"}}},parameters:{docs:{title:"Tooltip",description:{component:"Tooltip組件的呈現及說明。"}}}},s={name:"基礎樣式",args:{placement:"bottom-left",showArrow:!0},render:r=>({components:{Tooltip:c,Button:F},setup(){return{args:r}},template:`
            <Tooltip :placement="args.placement">
                <Button variant="contained" size="large" prefix="face">Hover Me</Button>
                <template #content>
                    Hi, Hi~ Nice to meet you!
                </template>
            </Tooltip>
        `}),parameters:{controls:{}}},m={name:"Tooltip顯示位置",args:{tooltipPosValue:["top-left","top","top-right","right-top","right","right-bottom","bottom-right","bottom","bottom-left","left-bottom","left","left-top"]},render:r=>({components:{Tooltip:c},setup(){return{args:r}},template:`
            <div style="
                width: 500px;
                display: flex;
                align-items: center;
                flex-wrap: wrap;
                gap: 40px;
                margin: 56px">
                <Tooltip 
                    v-for="(item) in args.tooltipPosValue"
                    :placement="item" 
                    :showArrow=true>
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
                    
                    <template #content>
                        {{ 'Tooltip on ' + item }}
                    </template>
                </Tooltip>
            </div>
        `}),parameters:{controls:{}}};var x,y,k;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  name: "基礎樣式",
  args: {
    placement: "bottom-left",
    showArrow: true
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
            <Tooltip :placement="args.placement">
                <Button variant="contained" size="large" prefix="face">Hover Me</Button>
                <template #content>
                    Hi, Hi~ Nice to meet you!
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
}`,...(k=(y=s.parameters)==null?void 0:y.docs)==null?void 0:k.source}}};var A,B,_;m.parameters={...m.parameters,docs:{...(A=m.parameters)==null?void 0:A.docs,source:{originalSource:`{
  name: "Tooltip顯示位置",
  args: {
    tooltipPosValue: ['top-left', 'top', 'top-right', 'right-top', 'right', 'right-bottom', 'bottom-right', 'bottom', 'bottom-left', 'left-bottom', 'left', 'left-top']
  },
  render: args => ({
    components: {
      Tooltip
    },
    setup() {
      return {
        args
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
                    v-for="(item) in args.tooltipPosValue"
                    :placement="item" 
                    :showArrow=true>
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
                    
                    <template #content>
                        {{ 'Tooltip on ' + item }}
                    </template>
                </Tooltip>
            </div>
        \`
  }),
  // 控制 controls 中能控制的參數
  parameters: {
    controls: {
      // include: ['themeColor', 'label', 'value', 'name' ],
    }
  }
}`,...(_=(B=m.parameters)==null?void 0:B.docs)==null?void 0:_.source}}};const X=["DefaultTooltip","TooltipPlacement"];export{s as DefaultTooltip,m as TooltipPlacement,X as __namedExportsOrder,Q as default};

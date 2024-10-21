import{B as D}from"./Button-BQuyBdgb.js";import{r as a,s as F,J as S,c as f,b as V,q as z,d as H,C as N,E as P,K as M,T as R,F as L,L as $,o as p,x as I,n as w,G as U,t as j,e as x}from"./vue.esm-bundler-Bm7qTojY.js";import{_ as W}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./index-Bb4qSo10.js";import"./Icon-0yHNpaiS.js";import"./iframe-DS6YppJf.js";import"../sb-preview/runtime.js";const B={__name:"Tooltip",props:{content:{type:String},showArrow:{type:Boolean,default:!0},placement:{type:String,default:"top",validator:r=>["top-left","top","top-right","right-top","right","right-bottom","bottom-right","bottom","bottom-left","left-top","left","left-bottom"].includes(r)}},setup(r){const i=r,d=a(null),g=a(null),h=a({}),b=`tooltip-${Math.random().toString(36).substring(2,9)}`,s=a(!1),E=()=>{s.value=!0,$(l)},C=()=>{s.value=!1},l=()=>{if(!d.value||!g.value||!s.value)return;const t=d.value.getBoundingClientRect(),e=g.value.getBoundingClientRect();let o,n;switch(i.placement){case"top-right":o=t.top-e.height-12,n=t.right-e.width;break;case"top":o=t.top-e.height-12,n=t.left+t.width/2-e.width/2;break;case"top-left":o=t.top-e.height-12,n=t.left;break;case"right-top":o=t.top,n=t.right+12;break;case"right":o=t.top+t.height/2-e.height/2,n=t.right+12;break;case"right-bottom":o=t.bottom-e.height,n=t.right+12;break;case"bottom-right":o=t.bottom+12,n=t.right-e.width;break;case"bottom":o=t.bottom+12,n=t.left+t.width/2-e.width/2;break;case"bottom-left":o=t.bottom+12,n=t.left;break;case"left-top":o=t.top,n=t.left-e.width-12;break;case"left":o=t.top+t.height/2-e.height/2,n=t.left-e.width-12;break;case"left-bottom":o=t.bottom-e.height,n=t.left-e.width-12;break}h.value={top:`${o}px`,left:`${n}px`,position:"fixed"}};return F(()=>{window.addEventListener("scroll",l),window.addEventListener("resize",l)}),S(()=>{window.removeEventListener("scroll",l),window.removeEventListener("resize",l)}),(t,e)=>(p(),f(L,null,[V("div",{ref_key:"tooltipTriggerRef",ref:d,class:"tooltip-trigger",onMouseenter:E,onMouseleave:C,"aria-describedby":b},[z(t.$slots,"default",{},void 0,!0)],544),(p(),H(R,{to:"body"},[N(M,{name:"fade"},{default:P(()=>[s.value?(p(),f("div",{key:0,id:b,ref_key:"tooltipContentRef",ref:g,style:I(h.value),class:w(["tooltip-content",i.placement])},[U(j(i.content)+" ",1),i.showArrow?(p(),f("div",{key:0,class:w(`tooltip-arrow ${i.placement}`)},null,2)):x("",!0)],6)):x("",!0)]),_:1})]))],64))}},u=W(B,[["__scopeId","data-v-f065a541"]]);B.__docgenInfo={exportName:"default",displayName:"Tooltip",description:"",tags:{},props:[{name:"content",type:{name:"string"}},{name:"showArrow",type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"placement",type:{name:"string"},defaultValue:{func:!1,value:"'top'"},values:["top-left","top","top-right","right-top","right","right-bottom","bottom-right","bottom","bottom-left","left-top","left","left-bottom"]}],slots:[{name:"default"}],sourceFiles:["/Users/auouser/Desktop/Work_Space/DED-WDS_VUE/libs/src/ui/element/Tooltip/Tooltip.vue"]};const Y={components:{Tooltip:u},title:"Design System/Tooltip",component:u,tags:["autodocs"],argTypes:{content:{description:"顯示 Tooltip 文字",control:{type:"text"}},showArrow:{description:"顯示 Tooltip 箭頭",control:{type:"boolean"}},placement:{description:"控制 Tooltip 位置",control:{type:"select"},options:["top-left","top","top-right","right-top","right","right-bottom","bottom-right","bottom","bottom-left","left-bottom","left","left-top"]}},parameters:{docs:{title:"Tooltip",description:{component:"Tooltip組件的呈現及說明。"}},slots:{default:{description:"任何被包裝的物件都會成為 tooltip 的觸發器",template:"{{ args.default }}"}}}},c={name:"Tooltip 基礎樣式",args:{content:"Hi, Hi~ Nice to meet you!",showArrow:!0,placement:"bottom-left"},render:r=>({components:{Tooltip:u,Button:D},setup(){return{args:r}},template:`
            <Tooltip 
                :content="args.content"
                :showArrow="args.showArrow" 
                :placement="args.placement" > 
                
                <Button variant="contained" size="large" prefix="face">Hover Me</Button>
            </Tooltip>
        `}),parameters:{controls:{}}},m={name:"Tooltip 顯示位置",args:{content:"",showArrow:!0},render:r=>({components:{Tooltip:u},setup(){const i=a(["top-left","top","top-right","right-top","right","right-bottom","bottom-right","bottom","bottom-left","left-bottom","left","left-top"]);return{args:r,tooltipPosValue:i}},template:`
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
        `}),parameters:{controls:{exclude:["placement"]}}};var v,T,y;c.parameters={...c.parameters,docs:{...(v=c.parameters)==null?void 0:v.docs,source:{originalSource:`{
  name: "Tooltip 基礎樣式",
  args: {
    content: 'Hi, Hi~ Nice to meet you!',
    showArrow: true,
    placement: "bottom-left"
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
                :placement="args.placement" > 
                
                <Button variant="contained" size="large" prefix="face">Hover Me</Button>
            </Tooltip>
        \`
  }),
  // 控制 controls 中能控制的參數
  parameters: {
    controls: {
      // include: ['themeColor', 'label', 'value', 'name' ],
    }
  }
}`,...(y=(T=c.parameters)==null?void 0:T.docs)==null?void 0:y.source}}};var k,A,_;m.parameters={...m.parameters,docs:{...(k=m.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...(_=(A=m.parameters)==null?void 0:A.docs)==null?void 0:_.source}}};const Z=["DefaultTooltip","TooltipPlacement"];export{c as DefaultTooltip,m as TooltipPlacement,Z as __namedExportsOrder,Y as default};

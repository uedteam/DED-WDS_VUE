import{_ as a,a as p,b as m,c as d,d as S,e as I,f,g as C,h,i as y,j as z,k as x,l as A,m as D,n as N,o as w,p as F,q as $,r as k,s as L,t as T,u as E,v as H,w as B,x as O,y as j,z as M,A as P,B as V,C as W,D as G,E as Q,F as U,G as q,H as J,I as K,J as R,K as X,L as Y,M as Z,N as ss,O as os,P as es,Q as ns,R as is,S as cs,T as as,U as ts,V as _s,W as rs,X as ls,Y as gs,Z as vs,$ as bs,a0 as us,a1 as ps}from"./Icon-BUi6kykL.js";import{r as u}from"./vue.esm-bundler-Suj5BAdg.js";const ms=Object.assign({"/libs/src/assets/icon/SvgAccount.svg":p,"/libs/src/assets/icon/SvgAdd.svg":m,"/libs/src/assets/icon/SvgAir.svg":d,"/libs/src/assets/icon/SvgArrowDown.svg":S,"/libs/src/assets/icon/SvgArrowDropDown.svg":I,"/libs/src/assets/icon/SvgArrowLeft.svg":f,"/libs/src/assets/icon/SvgAuo.svg":C,"/libs/src/assets/icon/SvgBarChart.svg":h,"/libs/src/assets/icon/SvgBusy.svg":y,"/libs/src/assets/icon/SvgCalendar.svg":z,"/libs/src/assets/icon/SvgCheck.svg":x,"/libs/src/assets/icon/SvgClock.svg":A,"/libs/src/assets/icon/SvgClose.svg":D,"/libs/src/assets/icon/SvgCurtain.svg":N,"/libs/src/assets/icon/SvgDatabase.svg":w,"/libs/src/assets/icon/SvgDisableCircle.svg":F,"/libs/src/assets/icon/SvgDoor.svg":$,"/libs/src/assets/icon/SvgErrorCircle.svg":k,"/libs/src/assets/icon/SvgFacebook.svg":L,"/libs/src/assets/icon/SvgFan.svg":T,"/libs/src/assets/icon/SvgFavorite.svg":E,"/libs/src/assets/icon/SvgFirstLastPage.svg":H,"/libs/src/assets/icon/SvgGoogle.svg":B,"/libs/src/assets/icon/SvgHome.svg":O,"/libs/src/assets/icon/SvgHumidity.svg":j,"/libs/src/assets/icon/SvgIdle.svg":M,"/libs/src/assets/icon/SvgInfo.svg":P,"/libs/src/assets/icon/SvgInfoCircle.svg":V,"/libs/src/assets/icon/SvgLanguage.svg":W,"/libs/src/assets/icon/SvgLight.svg":G,"/libs/src/assets/icon/SvgLine.svg":Q,"/libs/src/assets/icon/SvgLocation.svg":U,"/libs/src/assets/icon/SvgLock.svg":q,"/libs/src/assets/icon/SvgLogout.svg":J,"/libs/src/assets/icon/SvgMail.svg":K,"/libs/src/assets/icon/SvgMinus.svg":R,"/libs/src/assets/icon/SvgMore.svg":X,"/libs/src/assets/icon/SvgMoreVert.svg":Y,"/libs/src/assets/icon/SvgNavigateArrow.svg":Z,"/libs/src/assets/icon/SvgNotification.svg":ss,"/libs/src/assets/icon/SvgOffline.svg":os,"/libs/src/assets/icon/SvgOnline.svg":es,"/libs/src/assets/icon/SvgPlus.svg":ns,"/libs/src/assets/icon/SvgPower.svg":is,"/libs/src/assets/icon/SvgQuestionCircle.svg":cs,"/libs/src/assets/icon/SvgSearch.svg":as,"/libs/src/assets/icon/SvgSettings.svg":ts,"/libs/src/assets/icon/SvgSuccessCircle.svg":_s,"/libs/src/assets/icon/SvgTemperature.svg":rs,"/libs/src/assets/icon/SvgUser.svg":ls,"/libs/src/assets/icon/SvgVisibility.svg":gs,"/libs/src/assets/icon/SvgVisibilityOff.svg":vs,"/libs/src/assets/icon/SvgWarning.svg":bs,"/libs/src/assets/icon/SvgWarningTri.svg":us,"/libs/src/assets/icon/SvgWindow.svg":ps}),t=Object.keys(ms).map(s=>s.replace(/^.*[\\/]/,"").replace(/\.svg$/,"")).filter(s=>s!=="SvgAuo"),ds=u(null),c=u(null),Ss=s=>{navigator.clipboard.writeText(s).then(()=>{c.value=s,setTimeout(()=>c.value=null,1500)}).catch(i=>console.error("複製失敗:",i))},Cs={title:"Component/Icon",component:a,tags:["autodocs"],argTypes:{name:{description:"Svg名稱",control:{type:"select"},options:t},size:{description:"尺寸(px)",control:{type:"text"}},color:{description:"顏色",control:{type:"color"},table:{type:{summary:"#000000 | black"}}}},parameters:{docs:{title:"Icon",description:{component:"圖標組件的呈現及說明。"}}}},e={name:"預設項目",args:{name:"SvgHome",size:"48",color:"#0D64FB"},render:s=>({components:{Icon:a},setup(){return{args:s,icons:t}},template:`
            <Icon
                :name="args.name"
                :size="args.size"
                :color="args.color"
            ></Icon>
        `}),parameters:{controls:{exclude:["width","height","src"]},docs:{source:{transform:(s,i)=>{const{args:o}=i;return["<script setup>",'import Icon from "@/ui/element/Icon/Icon.vue";',"<\/script>","","<template>","  <Icon",`    ${o.name?`name="${o.name}"`:""}`,`    ${o.size?`size="${o.size}"`:""}`,`    ${o.color?`color="${o.color}"`:""}`,"  >","  </Icon>","</template>"].join(`
`).trim()}}}}},n={name:"圖標列表",args:{size:"48",color:"#0D64FB"},render:s=>({components:{Icon:a},setup(){return{args:s,icons:t,hoveredIcon:ds,copiedIcon:c,copyToClipboard:Ss}},template:`
            <div class="flex flex-wrap gap-4">
                <div v-for="iconName in icons"
                     @click="copyToClipboard(iconName)"
                     @mouseover="hoveredIcon = iconName"
                     @mouseleave="hoveredIcon = null"
                     class="icon-button relative cursor-pointer">
                    <Icon
                        :name="iconName"
                        :size="args.size"
                        :color="args.color"
                    ></Icon>
                    <span class="text-xs">{{iconName}}</span>
                    <!-- Hover 時顯示 Click -->
                    <span v-if="hoveredIcon === iconName && copiedIcon !== iconName"
                          class="icon-button__tooltip">
                        Click
                    </span>

                    <!-- 點擊後顯示 Copied! -->
                    <span v-if="copiedIcon === iconName"
                          class="icon-button__tooltip">
                        Copied!
                    </span>
                </div>
            </div>
            
        `}),parameters:{controls:{exclude:["width","height","src"]},docs:{source:{code:!1}}}};var _,r,l;e.parameters={...e.parameters,docs:{...(_=e.parameters)==null?void 0:_.docs,source:{originalSource:`{
  name: "預設項目",
  args: {
    name: "SvgHome",
    size: "48",
    color: "#0D64FB"
  },
  render: args => ({
    components: {
      Icon
    },
    setup() {
      return {
        args,
        icons
      };
    },
    template: \`
            <Icon
                :name="args.name"
                :size="args.size"
                :color="args.color"
            ></Icon>
        \`
  }),
  // 控制 controls 中能控制的參數
  parameters: {
    controls: {
      exclude: ['width', 'height', 'src']
    },
    docs: {
      source: {
        transform: (src, storyContext) => {
          const {
            args
          } = storyContext;
          return [\`<script setup>\`, \`import Icon from "@/ui/element/Icon/Icon.vue";\`, \`<\/script>\`, '', '<template>', '  <Icon', \`    \${args.name ? \`name="\${args.name}"\` : ""}\`, \`    \${args.size ? \`size="\${args.size}"\` : ""}\`, \`    \${args.color ? \`color="\${args.color}"\` : ""}\`, '  >', '  </Icon>', '</template>'].join('\\n').trim();
        }
      }
    }
  }
}`,...(l=(r=e.parameters)==null?void 0:r.docs)==null?void 0:l.source}}};var g,v,b;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  name: "圖標列表",
  args: {
    // name: "SvgHome",
    size: "48",
    color: "#0D64FB"
  },
  render: args => ({
    components: {
      Icon
    },
    setup() {
      return {
        args,
        icons,
        hoveredIcon,
        copiedIcon,
        copyToClipboard
      };
    },
    template: \`
            <div class="flex flex-wrap gap-4">
                <div v-for="iconName in icons"
                     @click="copyToClipboard(iconName)"
                     @mouseover="hoveredIcon = iconName"
                     @mouseleave="hoveredIcon = null"
                     class="icon-button relative cursor-pointer">
                    <Icon
                        :name="iconName"
                        :size="args.size"
                        :color="args.color"
                    ></Icon>
                    <span class="text-xs">{{iconName}}</span>
                    <!-- Hover 時顯示 Click -->
                    <span v-if="hoveredIcon === iconName && copiedIcon !== iconName"
                          class="icon-button__tooltip">
                        Click
                    </span>

                    <!-- 點擊後顯示 Copied! -->
                    <span v-if="copiedIcon === iconName"
                          class="icon-button__tooltip">
                        Copied!
                    </span>
                </div>
            </div>
            
        \`
  }),
  // 控制 controls 中能控制的參數
  parameters: {
    controls: {
      exclude: ['width', 'height', 'src']
    },
    docs: {
      source: {
        code: false
      }
    }
  }
}`,...(b=(v=n.parameters)==null?void 0:v.docs)==null?void 0:b.source}}};const hs=["IconDefaultStory","IconListStory"];export{e as IconDefaultStory,n as IconListStory,hs as __namedExportsOrder,Cs as default};

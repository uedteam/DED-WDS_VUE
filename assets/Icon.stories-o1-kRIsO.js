import{_ as a,a as p,b as m,c as d,d as S,e as I,f,g as C,h,i as y,j as z,k as x,l as A,m as D,n as N,o as w,p as F,q as $,r as k,s as L,t as T,u as E,v as H,w as B,x as O,y as j,z as M,A as P,B as V,C as W,D as G,E as Q,F as U,G as q,H as J,I as K,J as R,K as X,L as Y,M as Z,N as ss,O as os,P as es,Q as ns,R as is,S as cs,T as as,U as ts,V as _s,W as rs,X as ls,Y as gs,Z as vs,$ as bs,a0 as us,a1 as ps}from"./Icon-DeqquNhw.js";import{r as u}from"./vue.esm-bundler-DYHjuIM_.js";const ms=Object.assign({"/libs/src/assets/icons/SvgAccount.svg":ps,"/libs/src/assets/icons/SvgAdd.svg":us,"/libs/src/assets/icons/SvgAir.svg":bs,"/libs/src/assets/icons/SvgArrowDown.svg":vs,"/libs/src/assets/icons/SvgArrowDropDown.svg":gs,"/libs/src/assets/icons/SvgArrowLeft.svg":ls,"/libs/src/assets/icons/SvgAuo.svg":rs,"/libs/src/assets/icons/SvgBarChart.svg":_s,"/libs/src/assets/icons/SvgBusy.svg":ts,"/libs/src/assets/icons/SvgCalendar.svg":as,"/libs/src/assets/icons/SvgCheck.svg":cs,"/libs/src/assets/icons/SvgClock.svg":is,"/libs/src/assets/icons/SvgClose.svg":ns,"/libs/src/assets/icons/SvgCurtain.svg":es,"/libs/src/assets/icons/SvgDatabase.svg":os,"/libs/src/assets/icons/SvgDisableCircle.svg":ss,"/libs/src/assets/icons/SvgDoor.svg":Z,"/libs/src/assets/icons/SvgErrorCircle.svg":Y,"/libs/src/assets/icons/SvgFacebook.svg":X,"/libs/src/assets/icons/SvgFan.svg":R,"/libs/src/assets/icons/SvgFavorite.svg":K,"/libs/src/assets/icons/SvgFirstLastPage.svg":J,"/libs/src/assets/icons/SvgGoogle.svg":q,"/libs/src/assets/icons/SvgHome.svg":U,"/libs/src/assets/icons/SvgHumidity.svg":Q,"/libs/src/assets/icons/SvgIdle.svg":G,"/libs/src/assets/icons/SvgInfo.svg":W,"/libs/src/assets/icons/SvgInfoCircle.svg":V,"/libs/src/assets/icons/SvgLanguage.svg":P,"/libs/src/assets/icons/SvgLight.svg":M,"/libs/src/assets/icons/SvgLine.svg":j,"/libs/src/assets/icons/SvgLocation.svg":O,"/libs/src/assets/icons/SvgLock.svg":B,"/libs/src/assets/icons/SvgLogout.svg":H,"/libs/src/assets/icons/SvgMail.svg":E,"/libs/src/assets/icons/SvgMinus.svg":T,"/libs/src/assets/icons/SvgMore.svg":L,"/libs/src/assets/icons/SvgMoreVert.svg":k,"/libs/src/assets/icons/SvgNavigateArrow.svg":$,"/libs/src/assets/icons/SvgNotification.svg":F,"/libs/src/assets/icons/SvgOffline.svg":w,"/libs/src/assets/icons/SvgOnline.svg":N,"/libs/src/assets/icons/SvgPlus.svg":D,"/libs/src/assets/icons/SvgPower.svg":A,"/libs/src/assets/icons/SvgQuestionCircle.svg":x,"/libs/src/assets/icons/SvgSearch.svg":z,"/libs/src/assets/icons/SvgSettings.svg":y,"/libs/src/assets/icons/SvgSuccessCircle.svg":h,"/libs/src/assets/icons/SvgTemperature.svg":C,"/libs/src/assets/icons/SvgUser.svg":f,"/libs/src/assets/icons/SvgVisibility.svg":I,"/libs/src/assets/icons/SvgVisibilityOff.svg":S,"/libs/src/assets/icons/SvgWarning.svg":d,"/libs/src/assets/icons/SvgWarningTri.svg":m,"/libs/src/assets/icons/SvgWindow.svg":p}),t=Object.keys(ms).map(s=>s.replace(/^.*[\\/]/,"").replace(/\.svg$/,"")).filter(s=>s!=="SvgAuo"),ds=u(null),c=u(null),Ss=s=>{navigator.clipboard.writeText(s).then(()=>{c.value=s,setTimeout(()=>c.value=null,1500)}).catch(i=>console.error("複製失敗:",i))},Cs={title:"Component/Icon",component:a,tags:["autodocs"],argTypes:{name:{description:"Svg名稱",control:{type:"select"},options:t},size:{description:"尺寸(px)",control:{type:"text"}},color:{description:"顏色",control:{type:"color"},table:{type:{summary:"#000000 | black"}}}},parameters:{docs:{title:"Icon",description:{component:"圖標組件的呈現及說明。"}}}},e={name:"預設項目",args:{name:"SvgHome",size:"48",color:"#0D64FB"},render:s=>({components:{Icon:a},setup(){return{args:s,icons:t}},template:`
            <Icon
                :name="args.name"
                :size="args.size"
                :color="args.color"
            ></Icon>
        `}),parameters:{controls:{exclude:["width","height","src"]},docs:{source:{transform:(s,i)=>{const{args:o}=i;return["<script setup>",'import { Icon } from "@ded-wds-vue/ui";',"<\/script>","","<template>","  <Icon",`    ${o.name?`name="${o.name}"`:""}`,`    ${o.size?`size="${o.size}"`:""}`,`    ${o.color?`color="${o.color}"`:""}`,"  >","  </Icon>","</template>"].join(`
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
          return [\`<script setup>\`, \`import { Icon } from "@ded-wds-vue/ui";\`, \`<\/script>\`, '', '<template>', '  <Icon', \`    \${args.name ? \`name="\${args.name}"\` : ""}\`, \`    \${args.size ? \`size="\${args.size}"\` : ""}\`, \`    \${args.color ? \`color="\${args.color}"\` : ""}\`, '  >', '  </Icon>', '</template>'].join('\\n').trim();
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

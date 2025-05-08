import{_ as p,a as m,b as d,c as S,d as I,e as f,f as C,g as h,h as y,i as z,j as x,k as A,l as D,m as N,n as w,o as F,p as $,q as k,r as L,s as T,t as E,u as H,v as B,w as O,x as j,y as M,z as P,A as V,B as W,C as G,D as Q,E as U,F as q,G as J,H as K,I as R,J as X,K as Y,L as Z,M as ss,N as os,O as es,P as ns,Q as is,R as cs,S as as,T as ts,U as rs,V as _s,W as ls,X as gs,Y as vs,Z as bs,$ as us}from"./SvgWindow-DfgGSXEQ.js";import{_ as a}from"./Icon-DjPu9lgd.js";import{r as u}from"./vue.esm-bundler-CIcyrfsw.js";const ps=Object.assign({"/libs/src/assets/icons/SvgAccount.svg":us,"/libs/src/assets/icons/SvgAdd.svg":bs,"/libs/src/assets/icons/SvgAir.svg":vs,"/libs/src/assets/icons/SvgArrowDown.svg":gs,"/libs/src/assets/icons/SvgArrowDropDown.svg":ls,"/libs/src/assets/icons/SvgArrowLeft.svg":_s,"/libs/src/assets/icons/SvgAuo.svg":rs,"/libs/src/assets/icons/SvgBarChart.svg":ts,"/libs/src/assets/icons/SvgBusy.svg":as,"/libs/src/assets/icons/SvgCalendar.svg":cs,"/libs/src/assets/icons/SvgCheck.svg":is,"/libs/src/assets/icons/SvgClock.svg":ns,"/libs/src/assets/icons/SvgClose.svg":es,"/libs/src/assets/icons/SvgCurtain.svg":os,"/libs/src/assets/icons/SvgDatabase.svg":ss,"/libs/src/assets/icons/SvgDisableCircle.svg":Z,"/libs/src/assets/icons/SvgDoor.svg":Y,"/libs/src/assets/icons/SvgErrorCircle.svg":X,"/libs/src/assets/icons/SvgFacebook.svg":R,"/libs/src/assets/icons/SvgFan.svg":K,"/libs/src/assets/icons/SvgFavorite.svg":J,"/libs/src/assets/icons/SvgFirstLastPage.svg":q,"/libs/src/assets/icons/SvgGoogle.svg":U,"/libs/src/assets/icons/SvgHome.svg":Q,"/libs/src/assets/icons/SvgHumidity.svg":G,"/libs/src/assets/icons/SvgIdle.svg":W,"/libs/src/assets/icons/SvgInfo.svg":V,"/libs/src/assets/icons/SvgInfoCircle.svg":P,"/libs/src/assets/icons/SvgLanguage.svg":M,"/libs/src/assets/icons/SvgLight.svg":j,"/libs/src/assets/icons/SvgLine.svg":O,"/libs/src/assets/icons/SvgLocation.svg":B,"/libs/src/assets/icons/SvgLock.svg":H,"/libs/src/assets/icons/SvgLogout.svg":E,"/libs/src/assets/icons/SvgMail.svg":T,"/libs/src/assets/icons/SvgMinus.svg":L,"/libs/src/assets/icons/SvgMoreVert.svg":k,"/libs/src/assets/icons/SvgNavigateArrow.svg":$,"/libs/src/assets/icons/SvgNotification.svg":F,"/libs/src/assets/icons/SvgOffline.svg":w,"/libs/src/assets/icons/SvgOnline.svg":N,"/libs/src/assets/icons/SvgPlus.svg":D,"/libs/src/assets/icons/SvgPower.svg":A,"/libs/src/assets/icons/SvgQuestionCircle.svg":x,"/libs/src/assets/icons/SvgSearch.svg":z,"/libs/src/assets/icons/SvgSettings.svg":y,"/libs/src/assets/icons/SvgSuccessCircle.svg":h,"/libs/src/assets/icons/SvgTemperature.svg":C,"/libs/src/assets/icons/SvgUser.svg":f,"/libs/src/assets/icons/SvgVisibility.svg":I,"/libs/src/assets/icons/SvgVisibilityOff.svg":S,"/libs/src/assets/icons/SvgWarning.svg":d,"/libs/src/assets/icons/SvgWarningTri.svg":m,"/libs/src/assets/icons/SvgWindow.svg":p}),t=Object.keys(ps).map(s=>s.replace(/^.*[\\/]/,"").replace(/\.svg$/,"")).filter(s=>s!=="SvgAuo"),ms=u(null),c=u(null);function ds(s){navigator.clipboard.writeText(s).then(()=>{c.value=s,setTimeout(()=>c.value=null,1500)}).catch(i=>console.error("複製失敗:",i))}const Cs={title:"Component/Icon",component:a,tags:["autodocs"],argTypes:{name:{description:"Svg名稱",control:{type:"select"},options:t},size:{description:"尺寸(px)",control:{type:"text"}},color:{description:"顏色",control:{type:"color"},table:{type:{summary:"#000000 | black"}}}},parameters:{docs:{title:"Icon",description:{component:"圖標組件的呈現及說明。"}}}},e={name:"預設項目",args:{name:"SvgHome",size:"48",color:"#0D64FB"},render:s=>({components:{Icon:a},setup(){return{args:s,icons:t}},template:`
      <Icon
        :name="args.name"
        :size="args.size"
        :color="args.color"
      ></Icon>
        `}),parameters:{controls:{exclude:["width","height","src"]},docs:{source:{transform:(s,i)=>{const{args:o}=i;return["<script setup>",'import { Icon } from "@ded-wds-vue/ui";',"<\/script>","","<template>","  <Icon",`    ${o.name?`name="${o.name}"`:""}`,`    ${o.size?`size="${o.size}"`:""}`,`    ${o.color?`color="${o.color}"`:""}`,"  >","  </Icon>","</template>"].join(`
`).trim()}}}}},n={name:"圖標列表",args:{size:"48",color:"#0D64FB"},render:s=>({components:{Icon:a},setup(){return{args:s,icons:t,hoveredIcon:ms,copiedIcon:c,copyToClipboard:ds}},template:`
      <div class="flex flex-wrap gap-4">
        <div
          v-for="iconName in icons"
          @click="copyToClipboard(iconName)"
          @mouseover="hoveredIcon = iconName"
          @mouseleave="hoveredIcon = null"
          class="icon-button relative cursor-pointer"
        >
          <Icon
            :name="iconName"
            :size="args.size"
            :color="args.color"
          ></Icon>
          <span class="text-xs">{{ iconName }}</span>

          <!-- Hover 時顯示 Click -->
          <span
            v-if="hoveredIcon === iconName && copiedIcon !== iconName"
            class="icon-button__tooltip"
          >
      Click
    </span>

          <!-- 點擊後顯示 Copied! -->
          <span
            v-if="copiedIcon === iconName"
            class="icon-button__tooltip"
          >
      Copied!
    </span>
        </div>
      </div>
    `}),parameters:{controls:{exclude:["width","height","src"]},docs:{source:{code:!1}}}};var r,_,l;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
      exclude: ["width", "height", "src"]
    },
    docs: {
      source: {
        transform: (src, storyContext) => {
          const {
            args
          } = storyContext;
          return [\`<script setup>\`, \`import { Icon } from "@ded-wds-vue/ui";\`, \`<\/script>\`, "", "<template>", "  <Icon", \`    \${args.name ? \`name="\${args.name}"\` : ""}\`, \`    \${args.size ? \`size="\${args.size}"\` : ""}\`, \`    \${args.color ? \`color="\${args.color}"\` : ""}\`, "  >", "  </Icon>", "</template>"].join("\\n").trim();
        }
      }
    }
  }
}`,...(l=(_=e.parameters)==null?void 0:_.docs)==null?void 0:l.source}}};var g,v,b;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
        <div
          v-for="iconName in icons"
          @click="copyToClipboard(iconName)"
          @mouseover="hoveredIcon = iconName"
          @mouseleave="hoveredIcon = null"
          class="icon-button relative cursor-pointer"
        >
          <Icon
            :name="iconName"
            :size="args.size"
            :color="args.color"
          ></Icon>
          <span class="text-xs">{{ iconName }}</span>

          <!-- Hover 時顯示 Click -->
          <span
            v-if="hoveredIcon === iconName && copiedIcon !== iconName"
            class="icon-button__tooltip"
          >
      Click
    </span>

          <!-- 點擊後顯示 Copied! -->
          <span
            v-if="copiedIcon === iconName"
            class="icon-button__tooltip"
          >
      Copied!
    </span>
        </div>
      </div>
    \`
  }),
  // 控制 controls 中能控制的參數
  parameters: {
    controls: {
      exclude: ["width", "height", "src"]
    },
    docs: {
      source: {
        code: false
      }
    }
  }
}`,...(b=(v=n.parameters)==null?void 0:v.docs)==null?void 0:b.source}}};const hs=["IconDefaultStory","IconListStory"];export{e as IconDefaultStory,n as IconListStory,hs as __namedExportsOrder,Cs as default};

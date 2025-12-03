import{_ as p,a as m,b as S,c as d,d as I,e as f,f as C,g as h,h as y,i as x,j as z,k as D,l as A,m as N,n as w,o as k,p as F,q as L,r as $,s as E,t as T,u as H,v as B,w as O,x as j,y as M,z as P,A as V,B as W,C as G,D as Q,E as U,F as q,G as J,H as K,I as R,J as X,K as Y,L as Z,M as ss,N as os,O as es,P as ns,Q as is,R as cs,S as _s,T as as,U as ts,V as rs,W as ls,X as gs,Y as vs,Z as bs,$ as us,a0 as ps,a1 as ms,a2 as Ss,a3 as ds,a4 as Is,a5 as fs,a6 as Cs,a7 as hs,a8 as ys,a9 as xs,aa as zs}from"./SvgWindow-CVV31kwD.js";import{_}from"./Icon-BF6y4SVm.js";import{r as u}from"./vue.esm-bundler-DDwqdenp.js";const Ds=Object.assign({"/libs/src/assets/icons/SvgAccount.svg":zs,"/libs/src/assets/icons/SvgAdd.svg":xs,"/libs/src/assets/icons/SvgAir.svg":ys,"/libs/src/assets/icons/SvgArrowDown.svg":hs,"/libs/src/assets/icons/SvgArrowDropDown.svg":Cs,"/libs/src/assets/icons/SvgArrowLeft.svg":fs,"/libs/src/assets/icons/SvgAuo.svg":Is,"/libs/src/assets/icons/SvgBarChart.svg":ds,"/libs/src/assets/icons/SvgBottle.svg":Ss,"/libs/src/assets/icons/SvgBusy.svg":ms,"/libs/src/assets/icons/SvgCalendar.svg":ps,"/libs/src/assets/icons/SvgCheck.svg":us,"/libs/src/assets/icons/SvgCheckCircle.svg":bs,"/libs/src/assets/icons/SvgClock.svg":vs,"/libs/src/assets/icons/SvgClose.svg":gs,"/libs/src/assets/icons/SvgCurtain.svg":ls,"/libs/src/assets/icons/SvgDatabase.svg":rs,"/libs/src/assets/icons/SvgDisableCircle.svg":ts,"/libs/src/assets/icons/SvgDocument.svg":as,"/libs/src/assets/icons/SvgDoor.svg":_s,"/libs/src/assets/icons/SvgErrorCircle.svg":cs,"/libs/src/assets/icons/SvgExternalLink.svg":is,"/libs/src/assets/icons/SvgFacebook.svg":ns,"/libs/src/assets/icons/SvgFan.svg":es,"/libs/src/assets/icons/SvgFavorite.svg":os,"/libs/src/assets/icons/SvgFirstLastPage.svg":ss,"/libs/src/assets/icons/SvgGithub.svg":Z,"/libs/src/assets/icons/SvgGoogle.svg":Y,"/libs/src/assets/icons/SvgHeart.svg":X,"/libs/src/assets/icons/SvgHome.svg":R,"/libs/src/assets/icons/SvgHumidity.svg":K,"/libs/src/assets/icons/SvgIdle.svg":J,"/libs/src/assets/icons/SvgInfo.svg":q,"/libs/src/assets/icons/SvgInfoCircle.svg":U,"/libs/src/assets/icons/SvgLanguage.svg":Q,"/libs/src/assets/icons/SvgLight.svg":G,"/libs/src/assets/icons/SvgLightning.svg":W,"/libs/src/assets/icons/SvgLine.svg":V,"/libs/src/assets/icons/SvgLocation.svg":P,"/libs/src/assets/icons/SvgLock.svg":M,"/libs/src/assets/icons/SvgLogin.svg":j,"/libs/src/assets/icons/SvgLogo.svg":O,"/libs/src/assets/icons/SvgLogout.svg":B,"/libs/src/assets/icons/SvgMail.svg":H,"/libs/src/assets/icons/SvgMinus.svg":T,"/libs/src/assets/icons/SvgMobile.svg":E,"/libs/src/assets/icons/SvgMoreVert.svg":$,"/libs/src/assets/icons/SvgNavigateArrow.svg":L,"/libs/src/assets/icons/SvgNotification.svg":F,"/libs/src/assets/icons/SvgOffline.svg":k,"/libs/src/assets/icons/SvgOnline.svg":w,"/libs/src/assets/icons/SvgPalette.svg":N,"/libs/src/assets/icons/SvgPlus.svg":A,"/libs/src/assets/icons/SvgPower.svg":D,"/libs/src/assets/icons/SvgQuestionCircle.svg":z,"/libs/src/assets/icons/SvgSearch.svg":x,"/libs/src/assets/icons/SvgSettings.svg":y,"/libs/src/assets/icons/SvgSuccessCircle.svg":h,"/libs/src/assets/icons/SvgTemperature.svg":C,"/libs/src/assets/icons/SvgUser.svg":f,"/libs/src/assets/icons/SvgVisibility.svg":I,"/libs/src/assets/icons/SvgVisibilityOff.svg":d,"/libs/src/assets/icons/SvgWarning.svg":S,"/libs/src/assets/icons/SvgWarningTri.svg":m,"/libs/src/assets/icons/SvgWindow.svg":p}),a=Object.keys(Ds).map(s=>s.replace(/^.*[\\/]/,"").replace(/\.svg$/,"")).filter(s=>s!=="SvgAuo"),As=u(null),c=u(null);function Ns(s){navigator.clipboard.writeText(s).then(()=>{c.value=s,setTimeout(()=>c.value=null,1500)}).catch(i=>console.error("複製失敗:",i))}const Ls={title:"Component/Icon",component:_,tags:["autodocs"],argTypes:{name:{description:"Svg名稱",control:{type:"select"},options:a},size:{description:"尺寸(px)",control:{type:"text"}},color:{description:"顏色",control:{type:"color"},table:{type:{summary:"#000000 | black"}}}},parameters:{docs:{title:"Icon",description:{component:"圖標組件的呈現及說明。"}}}},e={name:"預設項目",args:{name:"SvgHome",size:"48",color:"#0D64FB"},render:s=>({components:{Icon:_},setup(){return{args:s,icons:a}},template:`
      <Icon
        :name="args.name"
        :size="args.size"
        :color="args.color"
      ></Icon>
        `}),parameters:{controls:{exclude:["width","height","src"]},docs:{source:{transform:(s,i)=>{const{args:o}=i;return["<script setup>",'import { Icon } from "@ded-wds-vue/ui";',"<\/script>","","<template>","  <Icon",`    ${o.name?`name="${o.name}"`:""}`,`    ${o.size?`size="${o.size}"`:""}`,`    ${o.color?`color="${o.color}"`:""}`,"  >","  </Icon>","</template>"].join(`
`).trim()}}}}},n={name:"圖標列表",args:{size:"48",color:"#0D64FB"},render:s=>({components:{Icon:_},setup(){return{args:s,icons:a,hoveredIcon:As,copiedIcon:c,copyToClipboard:Ns}},template:`
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
    `}),parameters:{controls:{exclude:["width","height","src"]},docs:{source:{code:!1}}}};var t,r,l;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
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
}`,...(b=(v=n.parameters)==null?void 0:v.docs)==null?void 0:b.source}}};const $s=["IconDefaultStory","IconListStory"];export{e as IconDefaultStory,n as IconListStory,$s as __namedExportsOrder,Ls as default};

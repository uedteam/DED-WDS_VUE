import{m as q,g as S,N as H,O as G,c as d,q as b,M as w,F as y,o as i,j as x,a as v,b as h,e as A,d as k,n as N,f as J,t as _,l as z,T as K,C as Q}from"./vue.esm-bundler-DDwqdenp.js";import{v as X}from"./v4-CtRu48qb.js";import{_ as T}from"./Button-d_mq_x9n.js";import{_ as g}from"./Icon-BF6y4SVm.js";import{_ as B}from"./Title-Buk-4-jd.js";const a=H({"top-right":[],"top-left":[],"top-center":[],"bottom-right":[],"bottom-left":[],"bottom-center":[]}),Y=S(()=>Object.keys(a)),l=new Map,r=new Map;function Z(e){if(r.has(e))return r.get(e);const o=document.createElement("div");return o.id=`toast-container-${e}`,o.classList.add("ded-toast-container",`ded-toast-${e}`),document.body.appendChild(o),r.set(e,o),o}function L(e,o){if(!a[o])return;l.has(e)&&(clearTimeout(l.get(e)),l.delete(e));const t=a[o].findIndex(s=>s.id===e);if(t!==-1&&(a[o].splice(t,1),a[o].length===0&&r.has(o))){const s=r.get(o);document.body.removeChild(s),r.delete(o)}}function D(e){const o=`toast-${X()}`,t=e.position||"top-right";Array.isArray(a[t])||(a[t]=H([])),Z(t);const s={...e,id:o,action:e.action||null};if(a[t].push(s),e.duration&&e.duration>0){const c=setTimeout(()=>{L(o,t)},e.duration);l.set(o,c)}}function tt(){l.forEach(e=>clearTimeout(e)),l.clear(),Object.keys(a).forEach(e=>{if(a[e].splice(0,a[e].length),r.has(e)){const o=r.get(e);document.body.removeChild(o),r.delete(e)}})}function U(){const e=q("useToast",null);if(e)return e;const t={add:D,remove:L,clear:tt,showToast:(s,c="info",p={})=>{const I={duration:3e3,position:"top-right",...p},m={message:s,type:c,...I};D(m)},toasts:a,positions:Y};return G("useToast",t),t}const et={class:"ded-toast-header"},ot={key:0,class:"ded-toast-header-action"},nt={key:1},st={class:"ded-description"},u={__name:"Toast",props:{className:{type:String,default:""}},setup(e){const o=e,{toasts:t,remove:s,positions:c}=U();return(p,I)=>(i(!0),d(y,null,b(w(c),m=>(i(),d("div",{key:m},[(i(!0),d(y,null,b(w(t)[m],n=>(i(),d("div",{key:n.id},[(i(),x(K,{to:`#toast-container-${n.position}`},[v("div",{class:N(["ded-toast",[`ded-toast-border-${n.themeColor}`,o.className]])},[h(T,{class:"ded-close-button",variant:"text","theme-color":"neutral",onClick:at=>w(s)(n.id,m)},{default:A(()=>[h(g,{name:"SvgClose",size:"20"})]),_:2},1032,["onClick"]),v("div",et,[v("div",{class:N(["ded-toast-header-message",[`ded-toast-header-message-${n.themeColor}`]])},[h(g,{name:n.prefix,size:"20"},null,8,["name"]),h(B,{"theme-color":n.themeColor,level:5},{default:A(()=>[J(_(n.title),1)]),_:2},1032,["theme-color"])],2),n.action?(i(),d("div",ot,[typeof n.action=="object"?(i(),x(z(n.action),{key:0})):typeof n.action=="function"?(i(),d("div",nt,[(i(),x(z(n.action())))])):k("",!0)])):k("",!0)]),v("p",st,_(n.content),1)],2)],8,["to"]))]))),128))]))),128))}};u.__docgenInfo={exportName:"default",displayName:"Toast",description:"",tags:{},props:[{name:"className",type:{name:"string"},defaultValue:{func:!1,value:'""'}}],sourceFiles:["/home/runner/work/DED-WDS_VUE/DED-WDS_VUE/libs/src/ui/element/Toast/Toast.vue"]};const ut={components:{Icon:g,Toast:u},title:"Component/Toast",component:u,tags:["autodocs"],argTypes:{themeColor:{description:"主題顏色",control:{type:"select"},options:["primary","secondary","neutral","info","success","warning","error"],table:{type:{summary:"primary | secondary | neutral | info | success | warning | error"},defaultValue:{summary:"primary"},category:"PROPS"}},position:{description:"位置",control:{type:"select"},options:["top-right","top-left","top-center","bottom-right","bottom-left","bottom-center"],table:{type:{summary:"top-right | top-left | top-center | bottom-right | bottom-left | bottom-center"},defaultValue:{summary:"top-right"},category:"PROPS"}},title:{description:"內容",control:{type:"text"},table:{category:"PROPS"}},content:{description:"說明文字",control:{type:"text"},table:{defaultValue:{summary:"Content"},category:"PROPS"}},prefix:{description:"前綴元素",control:{type:"select",labels:{"":"none",SvgInfoCircle:"SvgInfoCircle",SvgSuccessCircle:"SvgSuccessCircle",SvgWarningTri:"SvgWarningTri",SvgErrorCircle:"SvgErrorCircle",SvgDisableCircle:"SvgDisableCircle"}},options:["","SvgInfoCircle","SvgSuccessCircle","SvgWarningTri","SvgErrorCircle","SvgDisableCircle"],table:{defaultValue:{summary:""},category:"PROPS"}},duration:{description:"持續時間",control:{type:"range",min:500,max:5e3,step:100},table:{defaultValue:{summary:1e3},category:"PROPS"}},action:{description:"操作",control:{type:"text"},table:{type:{summary:"Vue Component"},category:"SLOTS"}},className:{description:"客製化樣式",control:{type:"text"},table:{category:"PROPS"}}},parameters:{docs:{title:"Toast",description:{component:"通知訊息組件的呈現及說明。"}}}},C={name:"預設項目",args:{themeColor:"success",position:"top-right",title:"Notification Title",content:"Content",prefix:"SvgSuccessCircle",duration:1e3,action:'() => h ("div", {onClick: () => window.alert("action")}, "Action")',className:""},render:e=>({components:{Toast:u,Button:T,Title:B,Icon:g},setup(){const o=()=>{window.alert("Close")},t=S(()=>`ded-toast-border-${e.themeColor}`),s=S(()=>`ded-toast-header-message-${e.themeColor}`);return{args:e,onClose:o,toastBorderClass:t,toastHeaderMsgThemeClass:s,onAction:()=>{window.alert("Action")}}},template:`
      <div class="ded-toast" :class="toastBorderClass">
        <!-- toast - 關閉按鈕 -->
        <Button 
          class="ded-close-button" 
          variant="text" 
          themeColor="neutral" 
          @click="onClose"
        >
          <Icon name="SvgClose" size="20"></Icon>
        </Button>
      
        <div class="ded-toast-header">
          <div class="ded-toast-header-message" :class="toastHeaderMsgThemeClass">
            <Icon :name="args.prefix" size="20"></Icon>
            <Title :themeColor="args.themeColor" :level="5">
              {{ args.title }}
            </Title>
          </div>
      
          <div class="ded-toast-header-action">
            <div @click="onAction">
              Action
            </div>
          </div>
        </div>
      
        <p class="ded-description">{{ args.content }}</p>
      </div>
      `}),parameters:{controls:{},docs:{source:{transform:(e,o)=>{const{args:t}=o;return["<script setup>",'  import { h } from "vue";','  import { Toast, Button, useToast } from "@ded-wds-vue/ui";',"  const { add } = useToast();","  const showToast = () => {","    add({",`      ${t.themeColor?`themeColor: "${t.themeColor}",`:""}`,`      ${t.position?`position: "${t.position}",`:""}`,`      ${t.title?`title: "${t.title}",`:""}`,`      ${t.content?`content: "${t.content}",`:""}`,`      ${t.prefix?`prefix: "${t.prefix}",`:""}`,`      ${t.duration!==void 0?`duration: ${t.duration},`:""}`,`      ${t.action!==void 0?`action: ${t.action},`:""}`,"    });","  };","<\/script>","","<template>",`  <Toast ${t.className?`className="${t.className}"`:""} />`,"  <Button",'    themeColor="primary"','    variant="filled"','    radius="4px"','    @click="showToast"',"  >","    Toast Trigger","  </Button>","</template>"].filter(Boolean).join(`
`).trim()}}}}},f={name:"訊息類型",args:{position:"top-right",title:"Notification Title",content:"Content",duration:5e3,action:'() => h ("div", {onClick: () => window.alert("action")}, "Action")',className:""},render:e=>({components:{Toast:u,Button:T,Title:B,Icon:g},setup(){return{args:e,onClose:()=>{window.alert("Close")},onAction:()=>{window.alert("Action")}}},template:`
      <div class="ded-toast ded-toast-border-success">
        <!-- toast - 關閉按鈕 -->
        <Button class="ded-close-button" variant="text" themeColor="neutral" @click="onClose">
          <Icon name="SvgClose" size="20"></Icon>
        </Button>
        
        <!-- toast - 標題及說明文字 -->
        <div class="ded-toast-header">
          <div class="ded-toast-header-message ded-toast-header-message-success">
            <Icon name="SvgSuccessCircle" size="20"></Icon>
            <Title themeColor="success" :level="5">
              {{ args.title }}
            </Title>
          </div>
          <div class="ded-toast-header-action">
            <div @click="onAction">
              Action
            </div>
          </div>
        </div>
      
        <p class="ded-description">{{ args.content }}</p>
      </div>
      
      <div class="ded-toast ded-toast-border-warning">
        <Button class="ded-close-button" variant="text" themeColor="neutral" @click="onClose">
          <Icon name="SvgClose" size="20"></Icon>
        </Button>
      
        <div class="ded-toast-header">
          <div class="ded-toast-header-message ded-toast-header-message-warning">
            <Icon name="SvgWarningTri" size="20"></Icon>
            <Title themeColor="warning" :level="5">
              {{ args.title }}
            </Title>
          </div>
          <div class="ded-toast-header-action">
            <div @click="onAction">
              Action
            </div>
          </div>
        </div>
      
        <p class="ded-description">{{ args.content }}</p>
      </div>
      
      <div class="ded-toast ded-toast-border-error">
        <Button class="ded-close-button" variant="text" themeColor="neutral" @click="onClose">
          <Icon name="SvgClose" size="20"></Icon>
        </Button>
      
        <div class="ded-toast-header">
          <div class="ded-toast-header-message ded-toast-header-message-error">
            <Icon name="SvgErrorCircle" size="20"></Icon>
            <Title themeColor="error" :level="5">
              {{ args.title }}
            </Title>
          </div>
          <div class="ded-toast-header-action">
            <div @click="onAction">
              Action
            </div>
          </div>
        </div>
      
        <p class="ded-description">{{ args.content }}</p>
      </div>
      
      <div class="ded-toast ded-toast-border-info">
        <Button class="ded-close-button" variant="text" themeColor="neutral" @click="onClose">
          <Icon name="SvgClose" size="20"></Icon>
        </Button>
      
        <div class="ded-toast-header">
          <div class="ded-toast-header-message ded-toast-header-message-info">
            <Icon name="SvgInfoCircle" size="20"></Icon>
            <Title themeColor="info" :level="5">
              {{ args.title }}
            </Title>
          </div>
          <div class="ded-toast-header-action">
            <div @click="onAction">
              Action
            </div>
          </div>
        </div>
      
        <p class="ded-description">{{ args.content }}</p>
      </div>
      
      <div class="ded-toast ded-toast-border-neutral">
        <Button class="ded-close-button" variant="text" themeColor="neutral" @click="onClose">
          <Icon name="SvgClose" size="20"></Icon>
        </Button>
      
        <div class="ded-toast-header">
          <div class="ded-toast-header-message ded-toast-header-message-neutral">
            <Icon name="SvgDisableCircle" size="20"></Icon>
            <Title themeColor="neutral" :level="5">
              {{ args.title }}
            </Title>
          </div>
          <div class="ded-toast-header-action">
            <div @click="onAction">
              Action
            </div>
          </div>
        </div>
      
        <p class="ded-description">{{ args.content }}</p>
      </div>`}),parameters:{controls:{exclude:["themeColor","prefix","action","onClose"]},docs:{source:{transform:(e,o)=>{const{args:t}=o;return["<script setup>",'  import { h } from "vue";','  import { Toast, Button, useToast } from "@ded-wds-vue/ui";',"  const { add } = useToast();","","  const showSuccessToast = () => {","    add({",'      themeColor: "success",',`      ${t.position?`position: "${t.position}",`:""}`,`      ${t.title?`title: "${t.title}",`:""}`,`      ${t.content?`content: "${t.content}",`:""}`,'      prefix: "SvgSuccessCircle",',`      ${t.duration!==void 0?`duration: ${t.duration},`:""}`,`      ${t.action!==void 0?`action: ${t.action},`:""}`,"    });","  };","","  const showWarningToast = () => {","    add({",'      themeColor: "warning",',`      ${t.position?`position: "${t.position}",`:""}`,`      ${t.title?`title: "${t.title}",`:""}`,`      ${t.content?`content: "${t.content}",`:""}`,'      prefix: "SvgWarningTri",',`      ${t.duration!==void 0?`duration: ${t.duration},`:""}`,`      ${t.action!==void 0?`action: ${t.action},`:""}`,"    });","  };","","  const showErrorToast = () => {","    add({",'      themeColor: "error",',`      ${t.position?`position: "${t.position}",`:""}`,`      ${t.title?`title: "${t.title}",`:""}`,`      ${t.content?`content: "${t.content}",`:""}`,'      prefix: "SvgErrorCircle",',`      ${t.duration!==void 0?`duration: ${t.duration},`:""}`,`      ${t.action!==void 0?`action: ${t.action},`:""}`,"    });","  };","","  const showInfoToast = () => {","    add({",'      themeColor: "info",',`      ${t.position?`position: "${t.position}",`:""}`,`      ${t.title?`title: "${t.title}",`:""}`,`      ${t.content?`content: "${t.content}",`:""}`,'      prefix: "SvgInfoCircle",',`      ${t.duration!==void 0?`duration: ${t.duration},`:""}`,`      ${t.action!==void 0?`action: ${t.action},`:""}`,"    });","  };","","  const showDisableToast = () => {","    add({",'      themeColor: "neutral",',`      ${t.position?`position: "${t.position}",`:""}`,`      ${t.title?`title: "${t.title}",`:""}`,`      ${t.content?`content: "${t.content}",`:""}`,'      prefix: "SvgDisableCircle",',`      ${t.duration!==void 0?`duration: ${t.duration},`:""}`,`      ${t.action!==void 0?`action: ${t.action},`:""}`,"    });","  };","<\/script>","","<template>",`  <Toast ${t.className?`className="${t.className}"`:""} />`,"  <Button",'    themeColor="success"','    variant="filled"','    radius="4px"','    @click="showSuccessToast"',"  >","    Success Trigger","  </Button>","  <Button",'    themeColor="warning"','    variant="filled"','    radius="4px"','    @click="showWarningToast"',"  >","    Warning Trigger","  </Button>","  <Button",'    themeColor="error"','    variant="filled"','    radius="4px"','    @click="showErrorToast"',"  >","    Error Trigger","  </Button>","  <Button",'    themeColor="info"','    variant="filled"','    radius="4px"','    @click="showInfoToast"',"  >","    Info Trigger","  </Button>","  <Button",'    themeColor="neutral"','    variant="filled"','    radius="4px"','    @click="showDisableToast"',"  >","    Disable Trigger","  </Button>","</template>"].filter(Boolean).join(`
`).trim()}}}}},$={name:"互動模式",args:{themeColor:"success",position:"top-right",title:"Notification Title",content:"Content",prefix:"SvgSuccessCircle",duration:5e3,action:'() => h ("div", {onClick: () => window.alert("action")}, "Action")',className:""},render:e=>({components:{Toast:u,Button:T},setup(){const{add:o}=U();return{args:e,add:o,showToast:()=>{o({themeColor:e.themeColor,position:e.position,title:e.title,content:e.content,prefix:e.prefix,duration:e.duration,action:()=>Q("div",{onClick:()=>window.alert("action")},"Action")})},onAction:()=>{window.alert("Action")}}},template:`
      <Toast :className="args.className"/>
      
      <Button themeColor="primary" variant="filled" radius="4px" @click="showToast">
        Toast Trigger
      </Button>`}),parameters:{controls:{exclude:["onClose"]},docs:{source:{transform:(e,o)=>{const{args:t}=o;return["<script setup>",'  import { h } from "vue";','  import { Toast, Button, useToast } from "@ded-wds-vue/ui";',"  const { add } = useToast();","  const showToast = () => {","    add({",`      ${t.themeColor?`themeColor: "${t.themeColor}",`:""}`,`      ${t.position?`position: "${t.position}",`:""}`,`      ${t.title?`title: "${t.title}",`:""}`,`      ${t.content?`content: "${t.content}",`:""}`,`      ${t.prefix?`prefix: "${t.prefix}",`:""}`,`      ${t.duration!==void 0?`duration: ${t.duration},`:""}`,`      ${t.action!==void 0?`action: ${t.action},`:""}`,"    });","  };","<\/script>","","<template>",`  <Toast ${t.className?`className="${t.className}"`:""} />`,"  <Button",'    themeColor="primary"','    variant="filled"','    radius="4px"','    @click="showToast"',"  >","    Toast Trigger","  </Button>","</template>"].filter(Boolean).join(`
`).trim()}}}}};var E,W,P;C.parameters={...C.parameters,docs:{...(E=C.parameters)==null?void 0:E.docs,source:{originalSource:`{
  name: "預設項目",
  args: {
    themeColor: "success",
    position: "top-right",
    title: "Notification Title",
    content: "Content",
    prefix: "SvgSuccessCircle",
    duration: 1000,
    action: \`() => h ("div", {onClick: () => window.alert("action")}, "Action")\`,
    className: ""
  },
  render: args => ({
    components: {
      Toast,
      Button,
      Title,
      Icon
    },
    setup() {
      const onClose = () => {
        window.alert("Close");
      };
      const toastBorderClass = computed(() => {
        const color = args.themeColor;
        return \`ded-toast-border-\${color}\`;
      });
      const toastHeaderMsgThemeClass = computed(() => {
        const color = args.themeColor;
        return \`ded-toast-header-message-\${color}\`;
      });
      const onAction = () => {
        window.alert("Action");
      };
      return {
        args,
        onClose,
        toastBorderClass,
        toastHeaderMsgThemeClass,
        onAction
        // computedTitle
      };
    },
    template: \`
      <div class="ded-toast" :class="toastBorderClass">
        <!-- toast - 關閉按鈕 -->
        <Button 
          class="ded-close-button" 
          variant="text" 
          themeColor="neutral" 
          @click="onClose"
        >
          <Icon name="SvgClose" size="20"></Icon>
        </Button>
      
        <div class="ded-toast-header">
          <div class="ded-toast-header-message" :class="toastHeaderMsgThemeClass">
            <Icon :name="args.prefix" size="20"></Icon>
            <Title :themeColor="args.themeColor" :level="5">
              {{ args.title }}
            </Title>
          </div>
      
          <div class="ded-toast-header-action">
            <div @click="onAction">
              Action
            </div>
          </div>
        </div>
      
        <p class="ded-description">{{ args.content }}</p>
      </div>
      \`
  }),
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
          return ["<script setup>", \`  import { h } from "vue";\`, \`  import { Toast, Button, useToast } from "@ded-wds-vue/ui";\`, "  const { add } = useToast();", \`  const showToast = () => {\`, \`    add({\`, \`      \${args.themeColor ? \`themeColor: "\${args.themeColor}",\` : ""}\`, \`      \${args.position ? \`position: "\${args.position}",\` : ""}\`, \`      \${args.title ? \`title: "\${args.title}",\` : ""}\`, \`      \${args.content ? \`content: "\${args.content}",\` : ""}\`, \`      \${args.prefix ? \`prefix: "\${args.prefix}",\` : ""}\`, \`      \${args.duration !== undefined ? \`duration: \${args.duration},\` : ""}\`, \`      \${args.action !== undefined ? \`action: \${args.action},\` : ""}\`, \`    });\`, \`  };\`, "<\/script>", "", "<template>", \`  <Toast \${args.className ? \`className="\${args.className}"\` : ""} />\`, \`  <Button\`, \`    themeColor="primary"\`, \`    variant="filled"\`, \`    radius="4px"\`, \`    @click="showToast"\`, \`  >\`, \`    Toast Trigger\`, \`  </Button>\`, "</template>"].filter(Boolean).join("\\n").trim();
        }
      }
    }
  }
}`,...(P=(W=C.parameters)==null?void 0:W.docs)==null?void 0:P.source}}};var O,V,j;f.parameters={...f.parameters,docs:{...(O=f.parameters)==null?void 0:O.docs,source:{originalSource:'{\n  name: "訊息類型",\n  args: {\n    // themeColor: "",\n    position: "top-right",\n    title: "Notification Title",\n    content: "Content",\n    // prefix:\'SvgSuccessCircle\',\n    duration: 5000,\n    action: `() => h ("div", {onClick: () => window.alert("action")}, "Action")`,\n    className: ""\n  },\n  render: args => ({\n    components: {\n      Toast,\n      Button,\n      Title,\n      Icon\n    },\n    setup() {\n      const onClose = () => {\n        window.alert("Close");\n      };\n      const onAction = () => {\n        window.alert("Action");\n      };\n      return {\n        args,\n        onClose,\n        onAction\n      };\n    },\n    template: `\n      <div class="ded-toast ded-toast-border-success">\n        <!-- toast - 關閉按鈕 -->\n        <Button class="ded-close-button" variant="text" themeColor="neutral" @click="onClose">\n          <Icon name="SvgClose" size="20"></Icon>\n        </Button>\n        \n        <!-- toast - 標題及說明文字 -->\n        <div class="ded-toast-header">\n          <div class="ded-toast-header-message ded-toast-header-message-success">\n            <Icon name="SvgSuccessCircle" size="20"></Icon>\n            <Title themeColor="success" :level="5">\n              {{ args.title }}\n            </Title>\n          </div>\n          <div class="ded-toast-header-action">\n            <div @click="onAction">\n              Action\n            </div>\n          </div>\n        </div>\n      \n        <p class="ded-description">{{ args.content }}</p>\n      </div>\n      \n      <div class="ded-toast ded-toast-border-warning">\n        <Button class="ded-close-button" variant="text" themeColor="neutral" @click="onClose">\n          <Icon name="SvgClose" size="20"></Icon>\n        </Button>\n      \n        <div class="ded-toast-header">\n          <div class="ded-toast-header-message ded-toast-header-message-warning">\n            <Icon name="SvgWarningTri" size="20"></Icon>\n            <Title themeColor="warning" :level="5">\n              {{ args.title }}\n            </Title>\n          </div>\n          <div class="ded-toast-header-action">\n            <div @click="onAction">\n              Action\n            </div>\n          </div>\n        </div>\n      \n        <p class="ded-description">{{ args.content }}</p>\n      </div>\n      \n      <div class="ded-toast ded-toast-border-error">\n        <Button class="ded-close-button" variant="text" themeColor="neutral" @click="onClose">\n          <Icon name="SvgClose" size="20"></Icon>\n        </Button>\n      \n        <div class="ded-toast-header">\n          <div class="ded-toast-header-message ded-toast-header-message-error">\n            <Icon name="SvgErrorCircle" size="20"></Icon>\n            <Title themeColor="error" :level="5">\n              {{ args.title }}\n            </Title>\n          </div>\n          <div class="ded-toast-header-action">\n            <div @click="onAction">\n              Action\n            </div>\n          </div>\n        </div>\n      \n        <p class="ded-description">{{ args.content }}</p>\n      </div>\n      \n      <div class="ded-toast ded-toast-border-info">\n        <Button class="ded-close-button" variant="text" themeColor="neutral" @click="onClose">\n          <Icon name="SvgClose" size="20"></Icon>\n        </Button>\n      \n        <div class="ded-toast-header">\n          <div class="ded-toast-header-message ded-toast-header-message-info">\n            <Icon name="SvgInfoCircle" size="20"></Icon>\n            <Title themeColor="info" :level="5">\n              {{ args.title }}\n            </Title>\n          </div>\n          <div class="ded-toast-header-action">\n            <div @click="onAction">\n              Action\n            </div>\n          </div>\n        </div>\n      \n        <p class="ded-description">{{ args.content }}</p>\n      </div>\n      \n      <div class="ded-toast ded-toast-border-neutral">\n        <Button class="ded-close-button" variant="text" themeColor="neutral" @click="onClose">\n          <Icon name="SvgClose" size="20"></Icon>\n        </Button>\n      \n        <div class="ded-toast-header">\n          <div class="ded-toast-header-message ded-toast-header-message-neutral">\n            <Icon name="SvgDisableCircle" size="20"></Icon>\n            <Title themeColor="neutral" :level="5">\n              {{ args.title }}\n            </Title>\n          </div>\n          <div class="ded-toast-header-action">\n            <div @click="onAction">\n              Action\n            </div>\n          </div>\n        </div>\n      \n        <p class="ded-description">{{ args.content }}</p>\n      </div>`\n  }),\n  parameters: {\n    controls: {\n      exclude: ["themeColor", "prefix", "action", "onClose"]\n    },\n    docs: {\n      source: {\n        transform: (src, storyContext) => {\n          const {\n            args\n          } = storyContext;\n          return ["<script setup>", `  import { h } from "vue";`, `  import { Toast, Button, useToast } from "@ded-wds-vue/ui";`, "  const { add } = useToast();", "", "  const showSuccessToast = () => {", "    add({", `      themeColor: "success",`, `      ${args.position ? `position: "${args.position}",` : ""}`, `      ${args.title ? `title: "${args.title}",` : ""}`, `      ${args.content ? `content: "${args.content}",` : ""}`, `      prefix: "SvgSuccessCircle",`, `      ${args.duration !== undefined ? `duration: ${args.duration},` : ""}`, `      ${args.action !== undefined ? `action: ${args.action},` : ""}`, "    });", "  };", "", "  const showWarningToast = () => {", "    add({", `      themeColor: "warning",`, `      ${args.position ? `position: "${args.position}",` : ""}`, `      ${args.title ? `title: "${args.title}",` : ""}`, `      ${args.content ? `content: "${args.content}",` : ""}`, `      prefix: "SvgWarningTri",`, `      ${args.duration !== undefined ? `duration: ${args.duration},` : ""}`, `      ${args.action !== undefined ? `action: ${args.action},` : ""}`, "    });", "  };", "", "  const showErrorToast = () => {", "    add({", `      themeColor: "error",`, `      ${args.position ? `position: "${args.position}",` : ""}`, `      ${args.title ? `title: "${args.title}",` : ""}`, `      ${args.content ? `content: "${args.content}",` : ""}`, `      prefix: "SvgErrorCircle",`, `      ${args.duration !== undefined ? `duration: ${args.duration},` : ""}`, `      ${args.action !== undefined ? `action: ${args.action},` : ""}`, "    });", "  };", "", "  const showInfoToast = () => {", "    add({", `      themeColor: "info",`, `      ${args.position ? `position: "${args.position}",` : ""}`, `      ${args.title ? `title: "${args.title}",` : ""}`, `      ${args.content ? `content: "${args.content}",` : ""}`, `      prefix: "SvgInfoCircle",`, `      ${args.duration !== undefined ? `duration: ${args.duration},` : ""}`, `      ${args.action !== undefined ? `action: ${args.action},` : ""}`, "    });", "  };", "", "  const showDisableToast = () => {", "    add({", `      themeColor: "neutral",`, `      ${args.position ? `position: "${args.position}",` : ""}`, `      ${args.title ? `title: "${args.title}",` : ""}`, `      ${args.content ? `content: "${args.content}",` : ""}`, `      prefix: "SvgDisableCircle",`, `      ${args.duration !== undefined ? `duration: ${args.duration},` : ""}`, `      ${args.action !== undefined ? `action: ${args.action},` : ""}`, "    });", "  };", "<\/script>", "", "<template>", `  <Toast ${args.className ? `className="${args.className}"` : ""} />`, `  <Button`, `    themeColor="success"`, `    variant="filled"`, `    radius="4px"`, `    @click="showSuccessToast"`, `  >`, `    Success Trigger`, `  </Button>`, `  <Button`, `    themeColor="warning"`, `    variant="filled"`, `    radius="4px"`, `    @click="showWarningToast"`, `  >`, `    Warning Trigger`, `  </Button>`, `  <Button`, `    themeColor="error"`, `    variant="filled"`, `    radius="4px"`, `    @click="showErrorToast"`, `  >`, `    Error Trigger`, `  </Button>`, `  <Button`, `    themeColor="info"`, `    variant="filled"`, `    radius="4px"`, `    @click="showInfoToast"`, `  >`, `    Info Trigger`, `  </Button>`, `  <Button`, `    themeColor="neutral"`, `    variant="filled"`, `    radius="4px"`, `    @click="showDisableToast"`, `  >`, `    Disable Trigger`, `  </Button>`, "</template>"].filter(Boolean).join("\\n").trim();\n        }\n      }\n    }\n  }\n}',...(j=(V=f.parameters)==null?void 0:V.docs)==null?void 0:j.source}}};var M,R,F;$.parameters={...$.parameters,docs:{...(M=$.parameters)==null?void 0:M.docs,source:{originalSource:'{\n  name: "互動模式",\n  args: {\n    themeColor: "success",\n    position: "top-right",\n    title: "Notification Title",\n    content: "Content",\n    prefix: "SvgSuccessCircle",\n    duration: 5000,\n    action: `() => h ("div", {onClick: () => window.alert("action")}, "Action")`,\n    className: ""\n  },\n  render: args => ({\n    components: {\n      Toast,\n      Button\n    },\n    setup() {\n      const {\n        add\n      } = useToast();\n      const showToast = () => {\n        add({\n          themeColor: args.themeColor,\n          position: args.position,\n          title: args.title,\n          content: args.content,\n          prefix: args.prefix,\n          duration: args.duration,\n          action: () => h("div", {\n            onClick: () => window.alert("action")\n          }, "Action")\n        });\n      };\n      const onAction = () => {\n        window.alert("Action");\n      };\n      return {\n        args,\n        add,\n        showToast,\n        onAction\n      };\n    },\n    template: `\n      <Toast :className="args.className"/>\n      \n      <Button themeColor="primary" variant="filled" radius="4px" @click="showToast">\n        Toast Trigger\n      </Button>`\n  }),\n  parameters: {\n    controls: {\n      // include: [\'themeColor\', \'label\', \'value\', \'name\' ],\n      exclude: ["onClose"]\n    },\n    docs: {\n      source: {\n        transform: (src, storyContext) => {\n          const {\n            args\n          } = storyContext;\n          return ["<script setup>", `  import { h } from "vue";`, `  import { Toast, Button, useToast } from "@ded-wds-vue/ui";`, "  const { add } = useToast();", `  const showToast = () => {`, `    add({`, `      ${args.themeColor ? `themeColor: "${args.themeColor}",` : ""}`, `      ${args.position ? `position: "${args.position}",` : ""}`, `      ${args.title ? `title: "${args.title}",` : ""}`, `      ${args.content ? `content: "${args.content}",` : ""}`, `      ${args.prefix ? `prefix: "${args.prefix}",` : ""}`, `      ${args.duration !== undefined ? `duration: ${args.duration},` : ""}`, `      ${args.action !== undefined ? `action: ${args.action},` : ""}`, `    });`, `  };`, "<\/script>", "", "<template>", `  <Toast ${args.className ? `className="${args.className}"` : ""} />`, `  <Button`, `    themeColor="primary"`, `    variant="filled"`, `    radius="4px"`, `    @click="showToast"`, `  >`, `    Toast Trigger`, `  </Button>`, "</template>"].filter(Boolean).join("\\n").trim();\n        }\n      }\n    }\n  }\n}',...(F=(R=$.parameters)==null?void 0:R.docs)==null?void 0:F.source}}};const mt=["ToastDefault","ToastTotal","ToastInterAction"];export{C as ToastDefault,$ as ToastInterAction,f as ToastTotal,mt as __namedExportsOrder,ut as default};

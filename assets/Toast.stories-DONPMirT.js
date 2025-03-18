import{g as x,O as R,c as r,q as I,L as $,F as b,o as a,j as T,a as m,b as p,e as y,d as A,n as k,f as L,t as N,l as _,T as U,h as q}from"./vue.esm-bundler-CbCZpGld.js";import{_ as C}from"./Button-C_MYBflO.js";import{_ as l}from"./Icon-kfZ5oYEb.js";import{_ as B}from"./Title-DomI3W-o.js";const s=R({"top-right":[],"top-left":[],"top-center":[],"bottom-right":[],"bottom-left":[],"bottom-center":[]}),G=x(()=>Object.keys(s)),c=new Map,w=new Map,J=e=>{if(w.has(e))return w.get(e);const o=document.createElement("div");return o.id=`toast-container-${e}`,o.classList.add("ded-toast-container",`ded-toast-${e}`),document.body.appendChild(o),w.set(e,o),o},F=(e,o)=>{if(!s[o])return;c.has(e)&&(clearTimeout(c.get(e)),c.delete(e));const t=s[o].findIndex(i=>i.id===e);t!==-1&&s[o].splice(t,1)},K=e=>{const o=`toast-${crypto.randomUUID()}`,t=e.position||"top-right";Array.isArray(s[t])||(s[t]=R([])),J(t);const i={...e,id:o,action:e.action||null};if(s[t].push(i),e.duration&&e.duration>0){const u=setTimeout(()=>{F(o,t)},e.duration);c.set(o,u)}},Q=()=>{c.forEach(e=>clearTimeout(e)),c.clear(),Object.keys(s).forEach(e=>{s[e].splice(0,s[e].length)})},H=()=>({add:K,remove:F,clear:Q,toasts:s,positions:G}),X={class:"ded-toast-header"},Y={key:0,class:"ded-toast-header-action"},Z={key:1},tt={class:"ded-description"},d={__name:"Toast",props:{className:{type:String,default:""}},setup(e){const o=e,{toasts:t,remove:i,positions:u}=H();return(S,et)=>(a(!0),r(b,null,I($(u),f=>(a(),r("div",{key:f},[(a(!0),r(b,null,I($(t)[f],n=>(a(),r("div",{key:n.id},[(a(),T(U,{to:`#toast-container-${n.position}`},[m("div",{class:k(["ded-toast",[`ded-toast-border-${n.themeColor}`,o.className]])},[p(C,{class:"ded-close-button",variant:"text","theme-color":"neutral",onClick:ot=>$(i)(n.id,f)},{default:y(()=>[p(l,{name:"SvgClose",size:"20"})]),_:2},1032,["onClick"]),m("div",X,[m("div",{class:k(["ded-toast-header-message",[`ded-toast-header-message-${n.themeColor}`]])},[p(l,{name:n.prefix,size:"20"},null,8,["name"]),p(B,{"theme-color":n.themeColor,level:5},{default:y(()=>[L(N(n.title),1)]),_:2},1032,["theme-color"])],2),n.action?(a(),r("div",Y,[typeof n.action=="object"?(a(),T(_(n.action),{key:0})):typeof n.action=="function"?(a(),r("div",Z,[(a(),T(_(n.action())))])):A("",!0)])):A("",!0)]),m("p",tt,N(n.content),1)],2)],8,["to"]))]))),128))]))),128))}};d.__docgenInfo={exportName:"default",displayName:"Toast",description:"",tags:{},props:[{name:"className",type:{name:"string"},defaultValue:{func:!1,value:'""'}}],sourceFiles:["D:/98_測試/up/DED-WDS_VUE/libs/src/ui/element/Toast/Toast.vue"]};const rt={components:{Icon:l,Toast:d},title:"Component/Toast",component:d,tags:["autodocs"],argTypes:{themeColor:{description:"主題顏色",control:{type:"select"},options:["primary","secondary","neutral","info","success","warning","error"],table:{type:{summary:"primary | secondary | neutral | info | success | warning | error"},defaultValue:{summary:"primary"},category:"PROPS"}},position:{description:"位置",control:{type:"select"},options:["top-right","top-left","top-center","bottom-right","bottom-left","bottom-center"],table:{type:{summary:"top-right | top-left | top-center | bottom-right | bottom-left | bottom-center"},defaultValue:{summary:"top-right"},category:"PROPS"}},title:{description:"內容",control:{type:"text"},table:{category:"PROPS"}},content:{description:"說明文字",control:{type:"text"},table:{defaultValue:{summary:"Content"},category:"PROPS"}},prefix:{description:"前綴元素",control:{type:"select",labels:{"":"none",SvgInfoCircle:"SvgInfoCircle",SvgSuccessCircle:"SvgSuccessCircle",SvgWarningTri:"SvgWarningTri",SvgErrorCircle:"SvgErrorCircle",SvgDisableCircle:"SvgDisableCircle"}},options:["","SvgInfoCircle","SvgSuccessCircle","SvgWarningTri","SvgErrorCircle","SvgDisableCircle"],table:{defaultValue:{summary:""},category:"PROPS"}},duration:{description:"持續時間",control:{type:"range",min:500,max:5e3,step:100},table:{defaultValue:{summary:1e3},category:"PROPS"}},action:{description:"操作",control:{type:"text"},table:{type:{summary:"Vue Component"},category:"SLOTS"}},className:{description:"客製化樣式",control:{type:"text"},table:{category:"PROPS"}}},parameters:{docs:{title:"Toast",description:{component:"通知訊息組件的呈現及說明。"}}}},g={name:"預設項目",args:{themeColor:"success",position:"top-right",title:"Notification Title",content:"Content",prefix:"SvgSuccessCircle",duration:1e3,action:'() => h ("div", {onClick: () => window.alert("action")}, "Action"),',className:""},render:e=>({components:{Toast:d,Button:C,Title:B,Icon:l},setup(){const o=()=>{window.alert("Close")},t=x(()=>`ded-toast-border-${e.themeColor}`),i=x(()=>`ded-toast-header-message-${e.themeColor}`);return{args:e,onClose:o,toastBorderClass:t,toastHeaderMsgThemeClass:i,onAction:()=>{window.alert("Action")}}},template:`
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
      `}),parameters:{controls:{},docs:{source:{transform:(e,o)=>{const{args:t}=o;return["<script setup>",'  import { h } from "vue";','  import { Toast, Button } from "@ded-wds-vue/ui";','  import { useToast } from "./composable/useToast.js";',"  const { add } = useToast();","  const showToast = () => {","    add({",`      ${t.themeColor?`themeColor: "${t.themeColor}",`:""}`,`      ${t.position?`position: "${t.position}",`:""}`,`      ${t.title?`title: "${t.title}",`:""}`,`      ${t.content?`content: "${t.content}",`:""}`,`      ${t.prefix?`prefix: "${t.prefix}",`:""}`,`      ${t.duration!==void 0?`duration: ${t.duration},`:""}`,`      ${t.action!==void 0?`action: ${t.action},`:""}`,"    });","  };","<\/script>","","<template>",`  <Toast ${t.className?`className="${t.className}"`:""} />`,"  <Button",'    themeColor="primary"','    variant="filled"','    radius="4px"','    @click="showToast"',"  >","    Toast Trigger","  </Button>","</template>"].filter(Boolean).join(`
`).trim()}}}}},v={name:"訊息類型",args:{position:"top-right",title:"Notification Title",content:"Content",duration:5e3,action:'() => h ("div", {onClick: () => window.alert("action")}, "Action"),',className:""},render:e=>({components:{Toast:d,Button:C,Title:B,Icon:l},setup(){return{args:e,onClose:()=>{window.alert("Close")},onAction:()=>{window.alert("Action")}}},template:`
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
      </div>`}),parameters:{controls:{exclude:["themeColor","prefix","action","onClose"]},docs:{source:{transform:(e,o)=>{const{args:t}=o;return["<script setup>",'  import { h } from "vue";','  import { Toast, Button } from "@ded-wds-vue/ui";','  import { useToast } from "./composable/useToast.js";',"  const { add } = useToast();","","  const showSuccessToast = () => {","    add({",'      themeColor: "success",',`      ${t.position?`position: "${t.position}",`:""}`,`      ${t.title?`title: "${t.title}",`:""}`,`      ${t.content?`content: "${t.content}",`:""}`,'      prefix: "SvgSuccessCircle",',`      ${t.duration!==void 0?`duration: ${t.duration},`:""}`,`      ${t.action!==void 0?`action: ${t.action},`:""}`,"    });","  };","","  const showWarningToast = () => {","    add({",'      themeColor: "warning",',`      ${t.position?`position: "${t.position}",`:""}`,`      ${t.title?`title: "${t.title}",`:""}`,`      ${t.content?`content: "${t.content}",`:""}`,'      prefix: "SvgWarningTri",',`      ${t.duration!==void 0?`duration: ${t.duration},`:""}`,`      ${t.action!==void 0?`action: ${t.action},`:""}`,"    });","  };","","  const showErrorToast = () => {","    add({",'      themeColor: "error",',`      ${t.position?`position: "${t.position}",`:""}`,`      ${t.title?`title: "${t.title}",`:""}`,`      ${t.content?`content: "${t.content}",`:""}`,'      prefix: "SvgErrorCircle",',`      ${t.duration!==void 0?`duration: ${t.duration},`:""}`,`      ${t.action!==void 0?`action: ${t.action},`:""}`,"    });","  };","","  const showInfoToast = () => {","    add({",'      themeColor: "info",',`      ${t.position?`position: "${t.position}",`:""}`,`      ${t.title?`title: "${t.title}",`:""}`,`      ${t.content?`content: "${t.content}",`:""}`,'      prefix: "SvgInfoCircle",',`      ${t.duration!==void 0?`duration: ${t.duration},`:""}`,`      ${t.action!==void 0?`action: ${t.action},`:""}`,"    });","  };","","  const showDisableToast = () => {","    add({",'      themeColor: "neutral",',`      ${t.position?`position: "${t.position}",`:""}`,`      ${t.title?`title: "${t.title}",`:""}`,`      ${t.content?`content: "${t.content}",`:""}`,'      prefix: "SvgDisableCircle",',`      ${t.duration!==void 0?`duration: ${t.duration},`:""}`,`      ${t.action!==void 0?`action: ${t.action},`:""}`,"    });","  };","<\/script>","","<template>",`  <Toast ${t.className?`className="${t.className}"`:""} />`,"  <Button",'    themeColor="success"','    variant="filled"','    radius="4px"','    @click="showSuccessToast"',"  >","    Success Trigger","  </Button>","  <Button",'    themeColor="warning"','    variant="filled"','    radius="4px"','    @click="showWarningToast"',"  >","    Warning Trigger","  </Button>","  <Button",'    themeColor="error"','    variant="filled"','    radius="4px"','    @click="showErrorToast"',"  >","    Error Trigger","  </Button>","  <Button",'    themeColor="info"','    variant="filled"','    radius="4px"','    @click="showInfoToast"',"  >","    Info Trigger","  </Button>","  <Button",'    themeColor="neutral"','    variant="filled"','    radius="4px"','    @click="showDisableToast"',"  >","    Disable Trigger","  </Button>","</template>"].filter(Boolean).join(`
`).trim()}}}}},h={name:"互動模式",args:{themeColor:"success",position:"top-right",title:"Notification Title",content:"Content",prefix:"SvgSuccessCircle",duration:5e3,action:'() => h ("div", {onClick: () => window.alert("action")}, "Action"),',className:""},render:e=>({components:{Toast:d,Button:C},setup(){const{add:o}=H();return{args:e,add:o,showToast:()=>{o({themeColor:e.themeColor,position:e.position,title:e.title,content:e.content,prefix:e.prefix,duration:e.duration,action:()=>q("div",{onClick:()=>window.alert("action")},"Action")})},onAction:()=>{window.alert("Action")}}},template:`
      <Toast :className="args.className"/>
      
      <Button themeColor="primary" variant="filled" radius="4px" @click="showToast">
        Toast Trigger
      </Button>`}),parameters:{controls:{exclude:["onClose"]},docs:{source:{transform:(e,o)=>{const{args:t}=o;return["<script setup>",'  import { h } from "vue";','  import { Toast, Button } from "@ded-wds-vue/ui";','  import { useToast } from "./composable/useToast.js";',"  const { add } = useToast();","  const showToast = () => {","    add({",`      ${t.themeColor?`themeColor: "${t.themeColor}",`:""}`,`      ${t.position?`position: "${t.position}",`:""}`,`      ${t.title?`title: "${t.title}",`:""}`,`      ${t.content?`content: "${t.content}",`:""}`,`      ${t.prefix?`prefix: "${t.prefix}",`:""}`,`      ${t.duration!==void 0?`duration: ${t.duration},`:""}`,`      ${t.action!==void 0?`action: ${t.action},`:""}`,"    });","  };","<\/script>","","<template>",`  <Toast ${t.className?`className="${t.className}"`:""} />`,"  <Button",'    themeColor="primary"','    variant="filled"','    radius="4px"','    @click="showToast"',"  >","    Toast Trigger","  </Button>","</template>"].filter(Boolean).join(`
`).trim()}}}}};var z,D,E;g.parameters={...g.parameters,docs:{...(z=g.parameters)==null?void 0:z.docs,source:{originalSource:`{
  name: "預設項目",
  args: {
    themeColor: "success",
    position: "top-right",
    title: "Notification Title",
    content: "Content",
    prefix: "SvgSuccessCircle",
    duration: 1000,
    action: \`() => h ("div", {onClick: () => window.alert("action")}, "Action"),\`,
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
          return ["<script setup>", \`  import { h } from "vue";\`, \`  import { Toast, Button } from "@ded-wds-vue/ui";\`, "  import { useToast } from \\"./composable/useToast.js\\";", "  const { add } = useToast();", \`  const showToast = () => {\`, \`    add({\`, \`      \${args.themeColor ? \`themeColor: "\${args.themeColor}",\` : ""}\`, \`      \${args.position ? \`position: "\${args.position}",\` : ""}\`, \`      \${args.title ? \`title: "\${args.title}",\` : ""}\`, \`      \${args.content ? \`content: "\${args.content}",\` : ""}\`, \`      \${args.prefix ? \`prefix: "\${args.prefix}",\` : ""}\`, \`      \${args.duration !== undefined ? \`duration: \${args.duration},\` : ""}\`, \`      \${args.action !== undefined ? \`action: \${args.action},\` : ""}\`, \`    });\`, \`  };\`, "<\/script>", "", "<template>", \`  <Toast \${args.className ? \`className="\${args.className}"\` : ""} />\`, \`  <Button\`, \`    themeColor="primary"\`, \`    variant="filled"\`, \`    radius="4px"\`, \`    @click="showToast"\`, \`  >\`, \`    Toast Trigger\`, \`  </Button>\`, "</template>"].filter(Boolean).join("\\n").trim();
        }
      }
    }
  }
}`,...(E=(D=g.parameters)==null?void 0:D.docs)==null?void 0:E.source}}};var j,P,W;v.parameters={...v.parameters,docs:{...(j=v.parameters)==null?void 0:j.docs,source:{originalSource:'{\n  name: "訊息類型",\n  args: {\n    // themeColor: "",\n    position: "top-right",\n    title: "Notification Title",\n    content: "Content",\n    // prefix:\'SvgSuccessCircle\',\n    duration: 5000,\n    action: `() => h ("div", {onClick: () => window.alert("action")}, "Action"),`,\n    className: ""\n  },\n  render: args => ({\n    components: {\n      Toast,\n      Button,\n      Title,\n      Icon\n    },\n    setup() {\n      const onClose = () => {\n        window.alert("Close");\n      };\n      const onAction = () => {\n        window.alert("Action");\n      };\n      return {\n        args,\n        onClose,\n        onAction\n      };\n    },\n    template: `\n      <div class="ded-toast ded-toast-border-success">\n        <!-- toast - 關閉按鈕 -->\n        <Button class="ded-close-button" variant="text" themeColor="neutral" @click="onClose">\n          <Icon name="SvgClose" size="20"></Icon>\n        </Button>\n        \n        <!-- toast - 標題及說明文字 -->\n        <div class="ded-toast-header">\n          <div class="ded-toast-header-message ded-toast-header-message-success">\n            <Icon name="SvgSuccessCircle" size="20"></Icon>\n            <Title themeColor="success" :level="5">\n              {{ args.title }}\n            </Title>\n          </div>\n          <div class="ded-toast-header-action">\n            <div @click="onAction">\n              Action\n            </div>\n          </div>\n        </div>\n      \n        <p class="ded-description">{{ args.content }}</p>\n      </div>\n      \n      <div class="ded-toast ded-toast-border-warning">\n        <Button class="ded-close-button" variant="text" themeColor="neutral" @click="onClose">\n          <Icon name="SvgClose" size="20"></Icon>\n        </Button>\n      \n        <div class="ded-toast-header">\n          <div class="ded-toast-header-message ded-toast-header-message-warning">\n            <Icon name="SvgWarningTri" size="20"></Icon>\n            <Title themeColor="warning" :level="5">\n              {{ args.title }}\n            </Title>\n          </div>\n          <div class="ded-toast-header-action">\n            <div @click="onAction">\n              Action\n            </div>\n          </div>\n        </div>\n      \n        <p class="ded-description">{{ args.content }}</p>\n      </div>\n      \n      <div class="ded-toast ded-toast-border-error">\n        <Button class="ded-close-button" variant="text" themeColor="neutral" @click="onClose">\n          <Icon name="SvgClose" size="20"></Icon>\n        </Button>\n      \n        <div class="ded-toast-header">\n          <div class="ded-toast-header-message ded-toast-header-message-error">\n            <Icon name="SvgErrorCircle" size="20"></Icon>\n            <Title themeColor="error" :level="5">\n              {{ args.title }}\n            </Title>\n          </div>\n          <div class="ded-toast-header-action">\n            <div @click="onAction">\n              Action\n            </div>\n          </div>\n        </div>\n      \n        <p class="ded-description">{{ args.content }}</p>\n      </div>\n      \n      <div class="ded-toast ded-toast-border-info">\n        <Button class="ded-close-button" variant="text" themeColor="neutral" @click="onClose">\n          <Icon name="SvgClose" size="20"></Icon>\n        </Button>\n      \n        <div class="ded-toast-header">\n          <div class="ded-toast-header-message ded-toast-header-message-info">\n            <Icon name="SvgInfoCircle" size="20"></Icon>\n            <Title themeColor="info" :level="5">\n              {{ args.title }}\n            </Title>\n          </div>\n          <div class="ded-toast-header-action">\n            <div @click="onAction">\n              Action\n            </div>\n          </div>\n        </div>\n      \n        <p class="ded-description">{{ args.content }}</p>\n      </div>\n      \n      <div class="ded-toast ded-toast-border-neutral">\n        <Button class="ded-close-button" variant="text" themeColor="neutral" @click="onClose">\n          <Icon name="SvgClose" size="20"></Icon>\n        </Button>\n      \n        <div class="ded-toast-header">\n          <div class="ded-toast-header-message ded-toast-header-message-neutral">\n            <Icon name="SvgDisableCircle" size="20"></Icon>\n            <Title themeColor="neutral" :level="5">\n              {{ args.title }}\n            </Title>\n          </div>\n          <div class="ded-toast-header-action">\n            <div @click="onAction">\n              Action\n            </div>\n          </div>\n        </div>\n      \n        <p class="ded-description">{{ args.content }}</p>\n      </div>`\n  }),\n  parameters: {\n    controls: {\n      exclude: ["themeColor", "prefix", "action", "onClose"]\n    },\n    docs: {\n      source: {\n        transform: (src, storyContext) => {\n          const {\n            args\n          } = storyContext;\n          return ["<script setup>", `  import { h } from "vue";`, `  import { Toast, Button } from "@ded-wds-vue/ui";`, "  import { useToast } from \\"./composable/useToast.js\\";", "  const { add } = useToast();", "", "  const showSuccessToast = () => {", "    add({", `      themeColor: "success",`, `      ${args.position ? `position: "${args.position}",` : ""}`, `      ${args.title ? `title: "${args.title}",` : ""}`, `      ${args.content ? `content: "${args.content}",` : ""}`, `      prefix: "SvgSuccessCircle",`, `      ${args.duration !== undefined ? `duration: ${args.duration},` : ""}`, `      ${args.action !== undefined ? `action: ${args.action},` : ""}`, "    });", "  };", "", "  const showWarningToast = () => {", "    add({", `      themeColor: "warning",`, `      ${args.position ? `position: "${args.position}",` : ""}`, `      ${args.title ? `title: "${args.title}",` : ""}`, `      ${args.content ? `content: "${args.content}",` : ""}`, `      prefix: "SvgWarningTri",`, `      ${args.duration !== undefined ? `duration: ${args.duration},` : ""}`, `      ${args.action !== undefined ? `action: ${args.action},` : ""}`, "    });", "  };", "", "  const showErrorToast = () => {", "    add({", `      themeColor: "error",`, `      ${args.position ? `position: "${args.position}",` : ""}`, `      ${args.title ? `title: "${args.title}",` : ""}`, `      ${args.content ? `content: "${args.content}",` : ""}`, `      prefix: "SvgErrorCircle",`, `      ${args.duration !== undefined ? `duration: ${args.duration},` : ""}`, `      ${args.action !== undefined ? `action: ${args.action},` : ""}`, "    });", "  };", "", "  const showInfoToast = () => {", "    add({", `      themeColor: "info",`, `      ${args.position ? `position: "${args.position}",` : ""}`, `      ${args.title ? `title: "${args.title}",` : ""}`, `      ${args.content ? `content: "${args.content}",` : ""}`, `      prefix: "SvgInfoCircle",`, `      ${args.duration !== undefined ? `duration: ${args.duration},` : ""}`, `      ${args.action !== undefined ? `action: ${args.action},` : ""}`, "    });", "  };", "", "  const showDisableToast = () => {", "    add({", `      themeColor: "neutral",`, `      ${args.position ? `position: "${args.position}",` : ""}`, `      ${args.title ? `title: "${args.title}",` : ""}`, `      ${args.content ? `content: "${args.content}",` : ""}`, `      prefix: "SvgDisableCircle",`, `      ${args.duration !== undefined ? `duration: ${args.duration},` : ""}`, `      ${args.action !== undefined ? `action: ${args.action},` : ""}`, "    });", "  };", "<\/script>", "", "<template>", `  <Toast ${args.className ? `className="${args.className}"` : ""} />`, `  <Button`, `    themeColor="success"`, `    variant="filled"`, `    radius="4px"`, `    @click="showSuccessToast"`, `  >`, `    Success Trigger`, `  </Button>`, `  <Button`, `    themeColor="warning"`, `    variant="filled"`, `    radius="4px"`, `    @click="showWarningToast"`, `  >`, `    Warning Trigger`, `  </Button>`, `  <Button`, `    themeColor="error"`, `    variant="filled"`, `    radius="4px"`, `    @click="showErrorToast"`, `  >`, `    Error Trigger`, `  </Button>`, `  <Button`, `    themeColor="info"`, `    variant="filled"`, `    radius="4px"`, `    @click="showInfoToast"`, `  >`, `    Info Trigger`, `  </Button>`, `  <Button`, `    themeColor="neutral"`, `    variant="filled"`, `    radius="4px"`, `    @click="showDisableToast"`, `  >`, `    Disable Trigger`, `  </Button>`, "</template>"].filter(Boolean).join("\\n").trim();\n        }\n      }\n    }\n  }\n}',...(W=(P=v.parameters)==null?void 0:P.docs)==null?void 0:W.source}}};var O,V,M;h.parameters={...h.parameters,docs:{...(O=h.parameters)==null?void 0:O.docs,source:{originalSource:'{\n  name: "互動模式",\n  args: {\n    themeColor: "success",\n    position: "top-right",\n    title: "Notification Title",\n    content: "Content",\n    prefix: "SvgSuccessCircle",\n    duration: 5000,\n    action: `() => h ("div", {onClick: () => window.alert("action")}, "Action"),`,\n    className: ""\n  },\n  render: args => ({\n    components: {\n      Toast,\n      Button\n    },\n    setup() {\n      const {\n        add\n      } = useToast();\n      const showToast = () => {\n        add({\n          themeColor: args.themeColor,\n          position: args.position,\n          title: args.title,\n          content: args.content,\n          prefix: args.prefix,\n          duration: args.duration,\n          action: () => h("div", {\n            onClick: () => window.alert("action")\n          }, "Action")\n        });\n      };\n      const onAction = () => {\n        window.alert("Action");\n      };\n      return {\n        args,\n        add,\n        showToast,\n        onAction\n      };\n    },\n    template: `\n      <Toast :className="args.className"/>\n      \n      <Button themeColor="primary" variant="filled" radius="4px" @click="showToast">\n        Toast Trigger\n      </Button>`\n  }),\n  parameters: {\n    controls: {\n      // include: [\'themeColor\', \'label\', \'value\', \'name\' ],\n      exclude: ["onClose"]\n    },\n    docs: {\n      source: {\n        transform: (src, storyContext) => {\n          const {\n            args\n          } = storyContext;\n          return ["<script setup>", `  import { h } from "vue";`, `  import { Toast, Button } from "@ded-wds-vue/ui";`, "  import { useToast } from \\"./composable/useToast.js\\";", "  const { add } = useToast();", `  const showToast = () => {`, `    add({`, `      ${args.themeColor ? `themeColor: "${args.themeColor}",` : ""}`, `      ${args.position ? `position: "${args.position}",` : ""}`, `      ${args.title ? `title: "${args.title}",` : ""}`, `      ${args.content ? `content: "${args.content}",` : ""}`, `      ${args.prefix ? `prefix: "${args.prefix}",` : ""}`, `      ${args.duration !== undefined ? `duration: ${args.duration},` : ""}`, `      ${args.action !== undefined ? `action: ${args.action},` : ""}`, `    });`, `  };`, "<\/script>", "", "<template>", `  <Toast ${args.className ? `className="${args.className}"` : ""} />`, `  <Button`, `    themeColor="primary"`, `    variant="filled"`, `    radius="4px"`, `    @click="showToast"`, `  >`, `    Toast Trigger`, `  </Button>`, "</template>"].filter(Boolean).join("\\n").trim();\n        }\n      }\n    }\n  }\n}',...(M=(V=h.parameters)==null?void 0:V.docs)==null?void 0:M.source}}};const ct=["ToastDefault","ToastTotal","ToastInterAction"];export{g as ToastDefault,h as ToastInterAction,v as ToastTotal,ct as __namedExportsOrder,rt as default};

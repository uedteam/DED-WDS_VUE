import{f as h,j as v,E as C,C as w,d as a,a as u,n as d,t as p,T as _,o as N}from"./vue.esm-bundler-6KMnbbOi.js";import{_ as m}from"./Icon-GiKUAua_.js";import{_ as $}from"./Button-B0PWxBW1.js";import"./iframe-C8B4ue5j.js";import"../sb-preview/runtime.js";const i=h([]),B=e=>{i.value=i.value.filter(o=>o.id!==e)},k=e=>{const o=Date.now(),t={...e,id:o};i.value.push(t)},x=()=>({add:k,remove:B,toasts:i}),D={class:"ded-message"},b={class:"ded-description"};function S(e){switch(e){case"success":return"check";case"error":return"close";case"warning":return"exclamation";case"info":return"info";default:return""}}const l={__name:"Toast",props:{themeColor:{type:String,default:"success",validator:e=>["info","success","warning","error"].includes(e)},title:{type:String},message:{type:String},duration:{type:Number,default:3e3},icon:{type:String,default:""},className:{type:String,default:""}},emits:["close"],setup(e,{emit:o}){const t=o,s=e,c=()=>{t("close")};let n=h(null);const y=()=>{n.value&&clearTimeout(n.value),n.value=setTimeout(()=>{c()},s.duration)};return v(()=>{y()}),C(()=>{n.value&&clearTimeout(n.value)}),(V,E)=>(N(),w(_,{to:"#toast"},[a("div",{class:d(["ded-toast",[`ded-toast-border-${s.themeColor}`,s.className]])},[a("button",{class:"ded-close-button",style:{cursor:"pointer"},onClick:c},[u(m,{name:"close",size:"20"})]),a("p",D,[a("span",{class:d(["ded-icon-wrapper",`ded-toast-${s.themeColor}`])},[u(m,{name:s.icon||S(s.themeColor),size:"14"},null,8,["name"])],2),a("span",null,p(s.title),1)]),a("p",b,p(s.message),1)],2)]))}};l.__docgenInfo={exportName:"default",displayName:"Toast",description:"",tags:{},props:[{name:"themeColor",type:{name:"string"},defaultValue:{func:!1,value:'"success"'},values:["info","success","warning","error"]},{name:"title",type:{name:"string"}},{name:"message",type:{name:"string"}},{name:"duration",type:{name:"number"},defaultValue:{func:!1,value:"3000"}},{name:"icon",type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"className",type:{name:"string"},defaultValue:{func:!1,value:'""'}}],events:[{name:"close"}],sourceFiles:["D:/98_測試/up/DED-WDS_VUE/libs/src/ui/element/Toast/Toast.vue"]};const A={components:{Icon:m,Toast:l},title:"Component/Toast",component:l,tags:["autodocs"],argTypes:{themeColor:{description:"主題顏色",control:{type:"select"},options:["info","success","warning","error"],table:{type:{summary:"primary | secondary | neutral | info | success | warning | error"}}},title:{description:"標題",control:{type:"text"}},message:{description:"說明文字",control:{type:"text"}},duration:{description:"顯示的持續時間（毫秒）",control:{type:"range",min:500,max:1e4,step:500}},icon:{description:"icon",control:{type:"select",labels:{"":"None",home:"home",folder:"folder",academy:"academy","arrow-forward":"arrow-forward","finger-print":"finger-print"}},options:["","home","folder","academy","arrow-forward","finger-print"]},className:{description:"客製化樣式",control:{type:"text"}}},parameters:{docs:{title:"Toast",description:{component:"Toast 組件的呈現及說明。"}}}},r={name:"預設項目",args:{themeColor:"success",title:"Toast Title",message:"Hello, world! This is a toast message.",duration:5e3,icon:"",className:""},render:e=>({components:{Toast:l,Button:$},setup(){const{add:o,toasts:t,remove:s}=x();return{args:e,toasts:t,remove:s,showToast:()=>{o({title:e.title,message:e.message,themeColor:e.themeColor})}}},template:`
            <Toast
                v-for="toast in toasts"
                :key="toast.id"
                :themeColor="toast.themeColor"
                :title="toast.title"
                :message="toast.message"
                :duration="args.duration"
                :icon="args.icon"
                :className="args.className"
                @close="remove(toast.id)"
            ></Toast>
            <Button themeColor="primary" variant="filled" radius="md" @click="showToast">
                Toast Trigger
            </Button>
        `}),parameters:{controls:{},docs:{source:{transform:(e,o)=>{const{args:t}=o;return["<template>","  <Toast",'    v-for="toast in toasts"','    :key="toast.id"',`    themeColor="${t.themeColor}"`,`    title="${t.title}"`,`    message="${t.message}"`,`    :duration="${t.duration}"`,`    icon="${t.icon}"`,`    className="${t.className}"`,'    @close="remove(toast.id)"',"  ></Toast>","  <Button",'    width="fit"','    themeColor="primary"','    variant="contained"','    @click="showToast"',"  >","    Toast Trigger","  </Button>","</template>","","<script setup>",'  import { useToast } from "@/path/to/useToast";',"","  const { add, toasts, remove } = useToast();","","  const showToast = () => {","    add({",`      title: "${t.title}",`,`      message: "${t.message}",`,`      themeColor: "${t.themeColor}",`,"    });","  };","<\/script>"].join(`
`).trim()}}}}};var g,f,T;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`{
  name: "預設項目",
  args: {
    themeColor: "success",
    title: "Toast Title",
    message: "Hello, world! This is a toast message.",
    duration: 5000,
    icon: "",
    className: ""
  },
  render: args => ({
    components: {
      Toast,
      Button
    },
    setup() {
      const {
        add,
        toasts,
        remove
      } = useToast();
      const showToast = () => {
        add({
          title: args.title,
          message: args.message,
          themeColor: args.themeColor
        });
      };
      return {
        args,
        toasts,
        remove,
        showToast
      };
    },
    template: \`
            <Toast
                v-for="toast in toasts"
                :key="toast.id"
                :themeColor="toast.themeColor"
                :title="toast.title"
                :message="toast.message"
                :duration="args.duration"
                :icon="args.icon"
                :className="args.className"
                @close="remove(toast.id)"
            ></Toast>
            <Button themeColor="primary" variant="filled" radius="md" @click="showToast">
                Toast Trigger
            </Button>
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
          return ['<template>', '  <Toast', '    v-for="toast in toasts"', '    :key="toast.id"', \`    themeColor="\${args.themeColor}"\`, \`    title="\${args.title}"\`, \`    message="\${args.message}"\`, \`    :duration="\${args.duration}"\`, \`    icon="\${args.icon}"\`, \`    className="\${args.className}"\`, '    @close="remove(toast.id)"', '  ></Toast>', '  <Button', '    width="fit"', '    themeColor="primary"', '    variant="contained"', '    @click="showToast"', '  >', '    Toast Trigger', '  </Button>', '</template>', '', '<script setup>', '  import { useToast } from "@/path/to/useToast";', '', '  const { add, toasts, remove } = useToast();', '', '  const showToast = () => {', '    add({', \`      title: "\${args.title}",\`, \`      message: "\${args.message}",\`, \`      themeColor: "\${args.themeColor}",\`, '    });', '  };', '<\/script>'].join('\\n').trim();
        }
      }
    }
  }
}`,...(T=(f=r.parameters)==null?void 0:f.docs)==null?void 0:T.source}}};const F=["ToastDefaultNew"];export{r as ToastDefaultNew,F as __namedExportsOrder,A as default};

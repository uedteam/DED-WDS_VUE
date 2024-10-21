import{r as A,k as _,L as z,d as c,b as a,C,n as v,e as u,t as T,T as x,o as i}from"./vue.esm-bundler-qOdkfnRX.js";import{_ as o}from"./Icon-NU05TGua.js";import{_ as D}from"./Button-CcjILkWD.js";import"./iframe-BdY8iLAL.js";import"../sb-preview/runtime.js";import"./index-Bb4qSo10.js";const d=A([]),B=s=>{d.value=d.value.filter(t=>t.id!==s)},E=s=>{const t=Date.now(),n={...s,id:t};d.value.push(n)},S=()=>({add:E,remove:B,toasts:d}),N={class:"message"},$={class:"description"},l={__name:"Toast",props:{title:{type:String},message:{type:String},severity:{type:String,default:"success",validator:s=>["success","warning","error","info"].includes(s)},duration:{type:Number,default:3e3}},emits:["close"],setup(s,{emit:t}){const n=t,e=s,g=()=>{n("close")};let r=A(null);const k=()=>{r.value&&clearTimeout(r.value),r.value=setTimeout(()=>{g()},e.duration)};return _(()=>{k()}),z(()=>{r&&clearTimeout(r)}),(F,V)=>(i(),c(x,{to:"#toast"},[a("div",{class:v(["toast",`toast-border-${e.severity}`])},[a("button",{class:"close-button",style:{cursor:"pointer"},onClick:g},[C(o,{name:"close",size:"20"})]),a("p",N,[a("span",{class:v(["icon-wrapper",`toast-${e.severity}`])},[e.severity==="success"?(i(),c(o,{key:0,name:"check",size:"14"})):u("",!0),e.severity==="error"?(i(),c(o,{key:1,name:"close",size:"14"})):u("",!0),e.severity==="warning"?(i(),c(o,{key:2,name:"exclamation",size:"14"})):u("",!0),e.severity==="info"?(i(),c(o,{key:3,name:"info",size:"16"})):u("",!0)],2),a("span",null,T(e.title),1)]),a("p",$,T(e.message),1)],2)]))}};l.__docgenInfo={exportName:"default",displayName:"Toast",description:"",tags:{},props:[{name:"title",type:{name:"string"}},{name:"message",type:{name:"string"}},{name:"severity",type:{name:"string"},defaultValue:{func:!1,value:"'success'"},values:["success","warning","error","info"]},{name:"duration",type:{name:"number"},defaultValue:{func:!1,value:"3000"}}],events:[{name:"close"}],sourceFiles:["/Users/auouser/Desktop/Work_Space/DED-WDS_VUE/libs/src/ui/element/Toast/Toast.vue"]};const j={components:{Icon:o,Toast:l},title:"Design System/Toast",component:l,tags:["autodocs"],argTypes:{title:{description:"Toast 標題",control:{type:"text"}},message:{description:"Toast 說明文字",control:{type:"text"}},severity:{description:"用於指示 Toast 信息的性質",control:{type:"select"},options:["success","warning","error","info"]},duration:{description:"Toast 顯示的持續時間（毫秒）",control:{type:"range",min:500,max:1e4,step:500}},show:{table:{disable:!0}}},parameters:{docs:{title:"Toast",description:{component:"Toast 組件的呈現及說明。"}}}},p={name:"Toast 種類樣式",args:{title:"Toast Message",message:"Hello, world! This is a toast message.",severity:"success",show:!0},render:s=>({components:{Toast:l,Icon:o},setup(){return{args:s,closeToast:()=>{s.show=!1}}},template:`
            <div style="width: 30rem; ">
                <div class="toast" :class="\`toast-border-${s.severity}\`"  v-if="args.show">
                    <!-- toast - 關閉按鈕 -->
                    <button class="close-button cursor-pointer" @click="closeToast">
                        <Icon name="close" size="20"></Icon>
                    </button>
                    <!-- toast - 標題及說明文字 -->
                    <p class="message">
                    <span class="icon-wrapper" :class="\`toast-${s.severity}\`">
                        <Icon name="check" size="14"></Icon>
                    </span>
                        <span>{{ args.title }}</span>
                    </p>
                    <p class="description">{{ args.message }}</p>
                </div>

                <div class="toast toast-border-error"  v-if="args.show">
                    <!-- toast - 關閉按鈕 -->
                    <button class="close-button cursor-pointer" @click="closeToast">
                        <Icon name="close" size="20"></Icon>
                    </button>
                    <!-- toast - 標題及說明文字 -->
                    <p class="message">
                    <span class="icon-wrapper toast-error">
                        <Icon name="close" size="14"></Icon>
                    </span>
                        <span>{{ args.title }}</span>
                    </p>
                    <p class="description">{{ args.message }}</p>
                </div>

                <div class="toast toast-border-warning"  v-if="args.show">
                    <!-- toast - 關閉按鈕 -->
                    <button class="close-button cursor-pointer" @click="closeToast">
                        <Icon name="close" size="20"></Icon>
                    </button>
                    <!-- toast - 標題及說明文字 -->
                    <p class="message">
                    <span class="icon-wrapper toast-warning">
                        <Icon name="exclamation" size="14"></Icon>
                    </span>
                        <span>{{ args.title }}</span>
                    </p>
                    <p class="description">{{ args.message }}</p>
                </div>

                <div class="toast toast-border-info"  v-if="args.show">
                    <!-- toast - 關閉按鈕 -->
                    <button class="close-button cursor-pointer" @click="closeToast">
                        <Icon name="close" size="20"></Icon>
                    </button>
                    <!-- toast - 標題及說明文字 -->
                    <p class="message">
                    <span class="icon-wrapper toast-info">
                        <Icon name="info" size="16"></Icon>
                    </span>
                        <span>{{ args.title }}</span>
                    </p>
                    <p class="description">{{ args.message }}</p>
                </div>
            </div>
        `}),parameters:{controls:{include:["title","message"]}}},m={name:"Toast 元件實驗室",args:{title:"Toast Title",message:"Hello, world! This is a toast message.",severity:"success",duration:1100},render:s=>({components:{Toast:l,Button:D},setup(){const{add:t,toasts:n,remove:e}=S();return{args:s,toasts:n,remove:e,showToast:()=>{t({title:s.title,message:s.message,severity:s.severity})}}},template:`
            <Toast
                v-for="toast in toasts"
                :key="toast.id"
                :title="toast.title"
                :message="toast.message"
                :severity="toast.severity"
                :duration="args.duration"
                @close="remove(toast.id)"
            ></Toast>

            <div style="display:flex; flex-direction: column; gap: 16px; width: 200px">
                <Button width="full" themeColor="primary" @click="showToast">Toast Trigger</Button>
            </div>
        `}),parameters:{controls:{exclude:["close"]}}};var y,f,w;p.parameters={...p.parameters,docs:{...(y=p.parameters)==null?void 0:y.docs,source:{originalSource:`{
  name: "Toast 種類樣式",
  args: {
    title: "Toast Message",
    message: "Hello, world! This is a toast message.",
    severity: "success",
    show: true
  },
  render: args => ({
    components: {
      Toast,
      Icon
    },
    setup() {
      const closeToast = () => {
        args.show = false; // 处理关闭逻辑
      };
      return {
        args,
        closeToast
      };
    },
    template: \`
            <div style="width: 30rem; ">
                <div class="toast" :class="\\\`toast-border-\${args.severity}\\\`"  v-if="args.show">
                    <!-- toast - 關閉按鈕 -->
                    <button class="close-button cursor-pointer" @click="closeToast">
                        <Icon name="close" size="20"></Icon>
                    </button>
                    <!-- toast - 標題及說明文字 -->
                    <p class="message">
                    <span class="icon-wrapper" :class="\\\`toast-\${args.severity}\\\`">
                        <Icon name="check" size="14"></Icon>
                    </span>
                        <span>{{ args.title }}</span>
                    </p>
                    <p class="description">{{ args.message }}</p>
                </div>

                <div class="toast toast-border-error"  v-if="args.show">
                    <!-- toast - 關閉按鈕 -->
                    <button class="close-button cursor-pointer" @click="closeToast">
                        <Icon name="close" size="20"></Icon>
                    </button>
                    <!-- toast - 標題及說明文字 -->
                    <p class="message">
                    <span class="icon-wrapper toast-error">
                        <Icon name="close" size="14"></Icon>
                    </span>
                        <span>{{ args.title }}</span>
                    </p>
                    <p class="description">{{ args.message }}</p>
                </div>

                <div class="toast toast-border-warning"  v-if="args.show">
                    <!-- toast - 關閉按鈕 -->
                    <button class="close-button cursor-pointer" @click="closeToast">
                        <Icon name="close" size="20"></Icon>
                    </button>
                    <!-- toast - 標題及說明文字 -->
                    <p class="message">
                    <span class="icon-wrapper toast-warning">
                        <Icon name="exclamation" size="14"></Icon>
                    </span>
                        <span>{{ args.title }}</span>
                    </p>
                    <p class="description">{{ args.message }}</p>
                </div>

                <div class="toast toast-border-info"  v-if="args.show">
                    <!-- toast - 關閉按鈕 -->
                    <button class="close-button cursor-pointer" @click="closeToast">
                        <Icon name="close" size="20"></Icon>
                    </button>
                    <!-- toast - 標題及說明文字 -->
                    <p class="message">
                    <span class="icon-wrapper toast-info">
                        <Icon name="info" size="16"></Icon>
                    </span>
                        <span>{{ args.title }}</span>
                    </p>
                    <p class="description">{{ args.message }}</p>
                </div>
            </div>
        \`
  }),
  // 控制 controls 中能控制的參數
  parameters: {
    controls: {
      include: ['title', 'message']
    }
  }
}`,...(w=(f=p.parameters)==null?void 0:f.docs)==null?void 0:w.source}}};var b,h,I;m.parameters={...m.parameters,docs:{...(b=m.parameters)==null?void 0:b.docs,source:{originalSource:`{
  name: "Toast 元件實驗室",
  args: {
    title: "Toast Title",
    message: "Hello, world! This is a toast message.",
    severity: "success",
    duration: 1100
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
          severity: args.severity
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
                :title="toast.title"
                :message="toast.message"
                :severity="toast.severity"
                :duration="args.duration"
                @close="remove(toast.id)"
            ></Toast>

            <div style="display:flex; flex-direction: column; gap: 16px; width: 200px">
                <Button width="full" themeColor="primary" @click="showToast">Toast Trigger</Button>
            </div>
        \`
  }),
  // 控制 controls 中能控制的參數
  parameters: {
    controls: {
      // include: ['themeColor', 'label', 'value', 'name' ],
      exclude: ['close']
    }
  }
}`,...(I=(h=m.parameters)==null?void 0:h.docs)==null?void 0:I.source}}};const q=["ToastType","ToastDefaultNew"];export{m as ToastDefaultNew,p as ToastType,q as __namedExportsOrder,j as default};

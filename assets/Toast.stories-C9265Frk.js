import{e as $,q as I,L as x,g as k,b as a,j as m,n as d,t as g,T as C,o as A}from"./vue.esm-bundler-ChZ6yN_a.js";import{_ as l}from"./Icon-CGw-UuIM.js";import{_ as B}from"./Button-D00Bk0Vz.js";import"./iframe-Ba_qZpvn.js";import"../sb-preview/runtime.js";import"./index-Bb4qSo10.js";const u=$([]),_=t=>{u.value=u.value.filter(e=>e.id!==t)},D=t=>{const e=Date.now(),s={...t,id:e};u.value.push(s)},z=()=>({add:D,remove:_,toasts:u}),E={class:"message"},S={class:"description"};function N(t){switch(t){case"success":return"check";case"error":return"close";case"warning":return"exclamation";case"info":return"info";default:return""}}const r={__name:"Toast",props:{title:{type:String},message:{type:String},severity:{type:String,default:"success",validator:t=>["success","warning","error","info"].includes(t)},duration:{type:Number,default:3e3},icon:{type:String,default:""}},emits:["close"],setup(t,{emit:e}){const s=e,o=t,p=()=>{s("close")};let n=$(null);const b=()=>{n.value&&clearTimeout(n.value),n.value=setTimeout(()=>{p()},o.duration)};return I(()=>{b()}),x(()=>{n.value&&clearTimeout(n.value)}),(F,V)=>(A(),k(C,{to:"#toast"},[a("div",{class:d(["toast",`toast-border-${o.severity}`])},[a("button",{class:"close-button",style:{cursor:"pointer"},onClick:p},[m(l,{name:"close",size:"20"})]),a("p",E,[a("span",{class:d(["icon-wrapper",`toast-${o.severity}`])},[m(l,{name:o.icon||N(o.severity),size:"14"},null,8,["name"])],2),a("span",null,g(o.title),1)]),a("p",S,g(o.message),1)],2)]))}};r.__docgenInfo={exportName:"default",displayName:"Toast",description:"",tags:{},props:[{name:"title",type:{name:"string"}},{name:"message",type:{name:"string"}},{name:"severity",type:{name:"string"},defaultValue:{func:!1,value:'"success"'},values:["success","warning","error","info"]},{name:"duration",type:{name:"number"},defaultValue:{func:!1,value:"3000"}},{name:"icon",type:{name:"string"},defaultValue:{func:!1,value:'""'}}],events:[{name:"close"}],sourceFiles:["D:/98_測試/up/DED-WDS_VUE/libs/src/ui/element/Toast/Toast.vue"]};const O={components:{Icon:l,Toast:r},title:"Design System/Toast*",component:r,tags:["autodocs"],argTypes:{title:{description:"Toast 標題",control:{type:"text"}},message:{description:"Toast 說明文字",control:{type:"text"}},severity:{description:"用於指示 Toast 信息的性質",control:{type:"select"},options:["success","warning","error","info"]},duration:{description:"Toast 顯示的持續時間（毫秒）",control:{type:"range",min:500,max:1e4,step:500}},show:{table:{disable:!0}},icon:{description:"icon",control:{type:"select",labels:{"":"None",home:"home",folder:"folder",academy:"academy","arrow-forward":"arrow-forward","finger-print":"finger-print"}},options:["","home","folder","academy","arrow-forward","finger-print"]}},parameters:{docs:{title:"Toast",description:{component:"Toast 組件的呈現及說明。"}}}},i={name:"預設項目",args:{title:"Toast Message",message:"Hello, world! This is a toast message.",severity:"success",show:!0,icon:""},render:t=>({components:{Toast:r,Icon:l},setup(){return{args:t,closeToast:()=>{t.show=!1}}},template:`
            <div style="width: 30rem; ">
                <div class="toast" :class="\`toast-border-${t.severity}\`"  v-if="args.show">
                    <!-- toast - 關閉按鈕 -->
                    <button class="close-button cursor-pointer" @click="closeToast">
                        <Icon name="close" size="20"></Icon>
                    </button>
                    <!-- toast - 標題及說明文字 -->
                    <p class="message">
                    <span class="icon-wrapper" :class="\`toast-${t.severity}\`">
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
        `}),parameters:{controls:{include:["title","message"]},docs:{source:{transform:(t,e)=>{const{args:s}=e;return["<Toast",'  v-for="toast in toasts"','  :key="toast.id"',`  title="${s.title}"`,`  message="${s.message}"`,'  severity="success"',`  :duration="${s.duration}"`,'  icon=""','  @close="remove(toast.id)"',"></Toast>","<Toast",'  v-for="toast in toasts"','  :key="toast.id"',`  title="${s.title}"`,`  message="${s.message}"`,'  severity="error"',`  :duration="${s.duration}"`,'  icon=""','  @close="remove(toast.id)"',"></Toast>","<Toast",'  v-for="toast in toasts"','  :key="toast.id"',`  title="${s.title}"`,`  message="${s.message}"`,'  severity="warning"',`  :duration="${s.duration}"`,'  icon=""','  @close="remove(toast.id)"',"></Toast>","<Toast",'  v-for="toast in toasts"','  :key="toast.id"',`  title="${s.title}"`,`  message="${s.message}"`,'  severity="info"',`  :duration="${s.duration}"`,'  icon=""','  @close="remove(toast.id)"',"></Toast>"].join(`
`).trim()}}}}},c={name:"觸發示意",args:{title:"Toast Title",message:"Hello, world! This is a toast message.",severity:"success",duration:1100,icon:""},render:t=>({components:{Toast:r,Button:B},setup(){const{add:e,toasts:s,remove:o}=z();return{args:t,toasts:s,remove:o,showToast:()=>{e({title:t.title,message:t.message,severity:t.severity})}}},template:`
            <Toast
                v-for="toast in toasts"
                :key="toast.id"
                :title="toast.title"
                :message="toast.message"
                :severity="toast.severity"
                :duration="args.duration"
                :icon="args.icon"
                @close="remove(toast.id)"
            ></Toast>

            <div style="display:flex; flex-direction: column; gap: 16px; width: 200px">
                <Button width="full" themeColor="primary" variant="contained" @click="showToast">
                    Toast Trigger
                </Button>
            </div>
        `}),parameters:{controls:{exclude:["close"]},docs:{source:{transform:(t,e)=>{const{args:s}=e;return`
                        <template>
                            <Toast
                                v-for="toast in toasts"
                                :key="toast.id"
                                :title="${s.title}"
                                :message="${s.message}"
                                :severity="${s.severity}"
                                :duration="${s.duration}"
                                :icon="${s.icon}"
                                @close="remove(toast.id)"
                            ></Toast>
                        
                            <div style="display: flex; flex-direction: column; gap: 16px; width: 200px">
                                <Button width="full" themeColor="primary" variant="contained" @click="showToast">
                                    Toast Trigger
                                </Button>
                            </div>
                        </template>
                        
                        <script setup>
                        import { useToast } from "@/path/to/useToast";
                        import Toast from "@/path/to/Toast";
                        import Button from "@/path/to/Button";
                        
                        const { add, toasts, remove } = useToast();
                        
                        const showToast = () => {
                            add({
                                title: "${s.title}",
                                message: "${s.message}",
                                severity: "${s.severity}",
                            });
                        };
                        <\/script>
                    `.trim()}}}}};var v,T,f;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:`{
  name: "預設項目",
  args: {
    title: "Toast Message",
    message: "Hello, world! This is a toast message.",
    severity: "success",
    show: true,
    icon: ""
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
    },
    docs: {
      source: {
        transform: (src, storyContext) => {
          const {
            args
          } = storyContext;
          return ['<Toast', \`  v-for="toast in toasts"\`, \`  :key="toast.id"\`, \`  title="\${args.title}"\`, \`  message="\${args.message}"\`, \`  severity="success"\`, \`  :duration="\${args.duration}"\`, \`  icon=""\`, \`  @close="remove(toast.id)"\`, '></Toast>', '<Toast', \`  v-for="toast in toasts"\`, \`  :key="toast.id"\`, \`  title="\${args.title}"\`, \`  message="\${args.message}"\`, \`  severity="error"\`, \`  :duration="\${args.duration}"\`, \`  icon=""\`, \`  @close="remove(toast.id)"\`, '></Toast>', '<Toast', \`  v-for="toast in toasts"\`, \`  :key="toast.id"\`, \`  title="\${args.title}"\`, \`  message="\${args.message}"\`, \`  severity="warning"\`, \`  :duration="\${args.duration}"\`, \`  icon=""\`, \`  @close="remove(toast.id)"\`, '></Toast>', '<Toast', \`  v-for="toast in toasts"\`, \`  :key="toast.id"\`, \`  title="\${args.title}"\`, \`  message="\${args.message}"\`, \`  severity="info"\`, \`  :duration="\${args.duration}"\`, \`  icon=""\`, \`  @close="remove(toast.id)"\`, '></Toast>'].join('\\n').trim();
        }
      }
    }
  }
}`,...(f=(T=i.parameters)==null?void 0:T.docs)==null?void 0:f.source}}};var y,w,h;c.parameters={...c.parameters,docs:{...(y=c.parameters)==null?void 0:y.docs,source:{originalSource:`{
  name: "觸發示意",
  args: {
    title: "Toast Title",
    message: "Hello, world! This is a toast message.",
    severity: "success",
    duration: 1100,
    icon: ""
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
                :icon="args.icon"
                @close="remove(toast.id)"
            ></Toast>

            <div style="display:flex; flex-direction: column; gap: 16px; width: 200px">
                <Button width="full" themeColor="primary" variant="contained" @click="showToast">
                    Toast Trigger
                </Button>
            </div>
        \`
  }),
  // 控制 controls 中能控制的參數
  parameters: {
    controls: {
      // include: ['themeColor', 'label', 'value', 'name' ],
      exclude: ['close']
    },
    docs: {
      source: {
        transform: (src, storyContext) => {
          const {
            args
          } = storyContext;
          return \`
                        <template>
                            <Toast
                                v-for="toast in toasts"
                                :key="toast.id"
                                :title="\${args.title}"
                                :message="\${args.message}"
                                :severity="\${args.severity}"
                                :duration="\${args.duration}"
                                :icon="\${args.icon}"
                                @close="remove(toast.id)"
                            ></Toast>
                        
                            <div style="display: flex; flex-direction: column; gap: 16px; width: 200px">
                                <Button width="full" themeColor="primary" variant="contained" @click="showToast">
                                    Toast Trigger
                                </Button>
                            </div>
                        </template>
                        
                        <script setup>
                        import { useToast } from "@/path/to/useToast";
                        import Toast from "@/path/to/Toast";
                        import Button from "@/path/to/Button";
                        
                        const { add, toasts, remove } = useToast();
                        
                        const showToast = () => {
                            add({
                                title: "\${args.title}",
                                message: "\${args.message}",
                                severity: "\${args.severity}",
                            });
                        };
                        <\/script>
                    \`.trim();
          // options: ['success', 'warning', 'error','info'],
        }
      }
    }
  }
}`,...(h=(w=c.parameters)==null?void 0:w.docs)==null?void 0:h.source}}};const W=["ToastType","ToastDefaultNew"];export{c as ToastDefaultNew,i as ToastType,W as __namedExportsOrder,O as default};

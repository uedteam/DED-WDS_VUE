import{r as N,q as E,s as z,k as W,a as i,b as d,d as h,n as T,h as j,t as f,T as V,o as M,f as H,g as $}from"./vue.esm-bundler-Suj5BAdg.js";import{_ as c}from"./Icon-BUi6kykL.js";import{_ as g}from"./Button-9e4cdx1m.js";import{_ as C}from"./Title-Ch0LdwRP.js";import{_}from"./StatusIndicator-CJHmcm1Z.js";const p=N([]),F=e=>{p.value=p.value.filter(o=>o.id!==e)},q=e=>{const o=Date.now(),t={...e,id:o};p.value.push(t)},U=()=>({add:q,remove:F,toasts:p}),L={class:"ded-toast-header"},O={class:"ded-toast-header-action"},G={class:"ded-description"},a={__name:"Toast",props:{themeColor:{type:String,validator:e=>["primary","secondary","neutral","info","success","warning","error"].includes(e),default:"primary"},title:{type:String,required:!0},content:{type:String,default:"Content"},prefix:{type:String,default:""},duration:{type:Number,default:1e3},className:{type:String,default:""}},emits:["onClose"],setup(e,{emit:o}){if(!document.getElementById("toast")){const r=document.createElement("div");r.id="toast",r.classList.add("ded-toast-container"),document.body.appendChild(r)}const t=o,n=e,l=()=>{t("onClose")};let s=N(null);const D=()=>{s.value&&clearTimeout(s.value),s.value=setTimeout(()=>{l()},n.duration)};return E(()=>{D()}),z(()=>{s.value&&clearTimeout(s.value)}),(r,J)=>(M(),W(V,{to:"#toast"},[i("div",{class:T(["ded-toast",[`ded-toast-border-${n.themeColor}`,n.className]])},[d(g,{class:"ded-close-button",variant:"text",themeColor:"neutral",onClick:l},{default:h(()=>[d(c,{name:"SvgClose",size:"20"})]),_:1}),i("div",L,[i("div",{class:T(["ded-toast-header-message",`ded-toast-header-message-${n.themeColor}`])},[d(c,{name:n.prefix,size:"20"},null,8,["name"]),d(C,{themeColor:n.themeColor,level:5},{default:h(()=>[H(f(n.title),1)]),_:1},8,["themeColor"])],2),i("div",O,[j(r.$slots,"action")])]),i("p",G,f(n.content),1)],2)]))}};a.__docgenInfo={exportName:"default",displayName:"Toast",description:"",tags:{},props:[{name:"themeColor",type:{name:"string"},defaultValue:{func:!1,value:'"primary"'},values:["primary","secondary","neutral","info","success","warning","error"]},{name:"title",type:{name:"string"},required:!0},{name:"content",type:{name:"string"},defaultValue:{func:!1,value:'"Content"'}},{name:"prefix",type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"duration",type:{name:"number"},defaultValue:{func:!1,value:"1000"}},{name:"className",type:{name:"string"},defaultValue:{func:!1,value:'""'}}],events:[{name:"onClose"}],slots:[{name:"action"}],sourceFiles:["/Users/auouser/Desktop/Work_Space/DED-WDS_VUE/libs/src/ui/element/Toast/Toast.vue"]};const Y={components:{Icon:c,Toast:a},title:"Component/Toast",component:a,tags:["autodocs"],argTypes:{themeColor:{description:"主題顏色",control:{type:"select"},options:["primary","secondary","neutral","info","success","warning","error"],table:{type:{summary:"primary | secondary | neutral | info | success | warning | error"}}},title:{description:"內容",control:{type:"text"}},content:{description:"說明文字",control:{type:"text"}},prefix:{description:"前綴元素",control:{type:"select",labels:{"":"none",SvgInfoCircle:"SvgInfoCircle",SvgSuccessCircle:"SvgSuccessCircle",SvgWarningTri:"SvgWarningTri",SvgErrorCircle:"SvgErrorCircle",SvgDisableCircle:"SvgDisableCircle"}},options:["","SvgInfoCircle","SvgSuccessCircle","SvgWarningTri","SvgErrorCircle","SvgDisableCircle"]},duration:{description:"持續時間",control:{type:"range",min:500,max:5e3,step:100}},className:{description:"客製化樣式",control:{type:"text"}},onClose:{description:"關閉事件",table:{category:"EVENTS",type:{summary:"emits"}}},action:{description:"操作",control:{type:"text"},table:{type:{summary:"Vue Component | HTML"}}}},parameters:{docs:{title:"Toast",description:{component:"通知訊息組件的呈現及說明。"}}}},u={name:"預設項目",args:{themeColor:"success",title:"Notification Title",content:"Content",prefix:"SvgSuccessCircle",duration:500,className:"",action:'<div @click="onAction">Action</div>'},render:e=>({components:{Toast:a,Button:g,Title:C,StatusIndicator:_,Icon:c},setup(){const o=()=>{window.alert("Close")},t=$(()=>`ded-toast-border-${e.themeColor}`),n=$(()=>`ded-toast-header-message-${e.themeColor}`);return{args:e,onClose:o,toastBorderClass:t,toastHeaderMsgThemeClass:n,onAction:()=>{window.alert("Action")}}},template:`
            <div class="ded-toast" :class="toastBorderClass">
                <!-- toast - 關閉按鈕 -->
                <Button class="ded-close-button" variant="text" themeColor="neutral" @click="onClose">
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
        `}),parameters:{controls:{},docs:{source:{transform:(e,o)=>{const{args:t}=o;return["<script setup>",'  import Toast from "@/ui/element/Toast/Toast.vue";','  import Button from "@/ui/element/Button/Button.vue";','  import { useToast } from "@/composables/useToast.js";',"  const { add, toasts, remove } = useToast();","  const showToast = () => {","    add({",`      themeColor: "${t.themeColor}",`,`      title: "${t.title}",`,`      content: "${t.content}",`,`      prefix: "${t.prefix}",`,`      duration: ${t.duration},`,"    });","  };","<\/script>","","<template>","  <Toast",'    v-for="toast in toasts"','    :key="toast.id"','    :themeColor="toast.themeColor"','    :title="toast.title"','    :content="toast.content"','    :prefix="toast.prefix"','    :duration="toast.duration"',`    ${t.className?`className="${t.className}"`:""}`,'    @onClose="remove(toast.id)"',"  >","    <template #action>","       <div>Action</div>","    </template>","  </Toast>","  <Button",'    themeColor="primary"','    variant="filled"','    radius="4px"','    @click="showToast"',"  >","    Toast Trigger","  </Button>","</template>"].filter(Boolean).join(`
`).trim()}}}}},m={name:"訊息類型",args:{title:"Notification Title ",content:"Content",duration:5e3,className:""},render:e=>({components:{Toast:a,Button:g,Title:C,StatusIndicator:_,Icon:c},setup(){return{args:e,onClose:()=>{window.alert("Close")},onAction:()=>{window.alert("Action")}}},template:`
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
                <!-- toast - 關閉按鈕 -->
                <Button class="ded-close-button" variant="text" themeColor="neutral" @click="onClose">
                    <Icon name="SvgClose" size="20"></Icon>
                </Button>
                <!-- toast - 標題及說明文字 -->
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
                <!-- toast - 關閉按鈕 -->
                <Button class="ded-close-button" variant="text" themeColor="neutral" @click="onClose">
                    <Icon name="SvgClose" size="20"></Icon>
                </Button>
                <!-- toast - 標題及說明文字 -->
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
                <!-- toast - 關閉按鈕 -->
                <Button class="ded-close-button" variant="text" themeColor="neutral" @click="onClose">
                    <Icon name="SvgClose" size="20"></Icon>
                </Button>
                <!-- toast - 標題及說明文字 -->
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
                <!-- toast - 關閉按鈕 -->
                <Button class="ded-close-button" variant="text" themeColor="neutral" @click="onClose">
                    <Icon name="SvgClose" size="20"></Icon>
                </Button>
                <!-- toast - 標題及說明文字 -->
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
            </div>
        `}),parameters:{controls:{exclude:["themeColor","prefix","action","onClose"]},docs:{source:{transform:(e,o)=>{const{args:t}=o;return["<script setup>",'  import Toast from "@/ui/element/Toast/Toast.vue";','  import Button from "@/ui/element/Button/Button.vue";','  import { useToast } from "@/composables/useToast.js";',"  const { add, toasts, remove } = useToast();","  const showSuccessToast = () => {","    add({",'      themeColor: "success",',`      ${t.title?`title: "${t.title}",`:""}`,`      ${t.content?`content: "${t.content}",`:""}`,'      prefix: "SvgSuccessCircle",',`      ${t.duration!==void 0?`duration: ${t.duration},`:""}`,"    });","  };","  const showWarningToast = () => {","    add({",'      themeColor: "warning",',`      ${t.title?`title: "${t.title}",`:""}`,`      ${t.content?`content: "${t.content}",`:""}`,'      prefix: "SvgWarningTri",',`      ${t.duration!==void 0?`duration: ${t.duration},`:""}`,"    });","  };","  const showErrorToast = () => {","    add({",'      themeColor: "error",',`      ${t.title?`title: "${t.title}",`:""}`,`      ${t.content?`content: "${t.content}",`:""}`,'      prefix: "SvgErrorCircle",',`      ${t.duration!==void 0?`duration: ${t.duration},`:""}`,"    });","  };","  const showInfoToast = () => {","    add({",'      themeColor: "info",',`      ${t.title?`title: "${t.title}",`:""}`,`      ${t.content?`content: "${t.content}",`:""}`,'      prefix: "SvgInfoCircle",',`      ${t.duration!==void 0?`duration: ${t.duration},`:""}`,"    });","  };","  const showDisableToast = () => {","    add({",'      themeColor: "neutral",',`      ${t.title?`title: "${t.title}",`:""}`,`      ${t.content?`content: "${t.content}",`:""}`,'      prefix: "SvgDisableCircle",',`      ${t.duration!==void 0?`duration: ${t.duration},`:""}`,"    });","  };","<\/script>","","<template>","  <Toast",'    v-for="toast in toasts"','    :key="toast.id"','    :themeColor="toast.themeColor"','    :title="toast.title"','    :content="toast.content"','    :prefix="toast.prefix"','    :duration="toast.duration"',`    ${t.className?`className="${t.className}"`:""}`,'    @onClose="remove(toast.id)"',"  >","    <template #action>","       <div>Action</div>","    </template>","  </Toast>","  <Button",'    themeColor="success"','    variant="filled"','    radius="4px"','    @click="showSuccessToast"',"  >","    Success Trigger","  </Button>","  <Button",'    themeColor="warning"','    variant="filled"','    radius="4px"','    @click="showWarningToast"',"  >","    Warning Trigger","  </Button>","  <Button",'    themeColor="error"','    variant="filled"','    radius="4px"','    @click="showErrorToast"',"  >","    Error Trigger","  </Button>","  <Button",'    themeColor="info"','    variant="filled"','    radius="4px"','    @click="showInfoToast"',"  >","    Info Trigger","  </Button>","  <Button",'    themeColor="neutral"','    variant="filled"','    radius="4px"','    @click="showDisableToast"',"  >","    Disable Trigger","  </Button>","</template>"].filter(Boolean).join(`
`).trim()}}}}},v={name:"互動模式",args:{themeColor:"success",title:"Notification Title ",content:"Content",prefix:"SvgSuccessCircle",duration:5e3,className:"",action:'<div @click="onAction">Action</div>'},render:e=>({components:{Toast:a,Button:g},setup(){const{add:o,toasts:t,remove:n}=U();return{args:e,toasts:t,remove:n,showToast:()=>{o({themeColor:e.themeColor,title:e.title,content:e.content})},onAction:()=>{window.alert("Action")}}},template:`
            <Toast
                v-for="toast in toasts"
                :key="toast.id"
                :themeColor="toast.themeColor"
                :title="toast.title"
                :content="toast.content"
                :prefix="args.prefix"
                :duration="args.duration"
                :className="args.className"
                @onClose="remove(toast.id)"
            >
                <template #action>
                    <div @click="onAction">Action</div>
                </template>
            </Toast>
            <Button themeColor="primary" variant="filled" radius="4px" @click="showToast">
                Toast Trigger
            </Button>
        `}),parameters:{controls:{exclude:["onClose"]},docs:{source:{transform:(e,o)=>{const{args:t}=o;return["<script setup>",'  import Toast from "@/ui/element/Toast/Toast.vue";','  import Button from "@/ui/element/Button/Button.vue";','  import { useToast } from "@/composables/useToast.js";',"  const { add, toasts, remove } = useToast();","  const showToast = () => {","    add({",`      themeColor: "${t.themeColor}",`,`      title: "${t.title}",`,`      content: "${t.content}",`,`      prefix: "${t.prefix}",`,`      duration: ${t.duration},`,"    });","  };","<\/script>","","<template>","  <Toast",'    v-for="toast in toasts"','    :key="toast.id"','    :themeColor="toast.themeColor"','    :title="toast.title"','    :content="toast.content"','    :prefix="toast.prefix"','    :duration="toast.duration"',`    ${t.className?`className="${t.className}"`:""}`,'    @onClose="remove(toast.id)"',"  >","    <template #action>","       <div>Action</div>","    </template>","  </Toast>","  <Button",'    themeColor="primary"','    variant="filled"','    radius="4px"','    @click="showToast"',"  >","    Toast Trigger","  </Button>","</template>"].filter(Boolean).join(`
`).trim()}}}}};var B,x,A;u.parameters={...u.parameters,docs:{...(B=u.parameters)==null?void 0:B.docs,source:{originalSource:`{
  name: "預設項目",
  args: {
    themeColor: "success",
    title: "Notification Title",
    content: "Content",
    prefix: 'SvgSuccessCircle',
    duration: 500,
    className: "",
    action: \`<div @click="onAction">Action</div>\`
  },
  render: args => ({
    components: {
      Toast,
      Button,
      Title,
      StatusIndicator,
      Icon
    },
    setup() {
      const onClose = () => {
        window.alert('Close');
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
        window.alert('Action');
      };
      // const computedTitle = computed(() => {
      // 	return args.title ? args.title : "Title";
      // })
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
                <Button class="ded-close-button" variant="text" themeColor="neutral" @click="onClose">
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
          return ['<script setup>', '  import Toast from "@/ui/element/Toast/Toast.vue";', \`  import Button from "@/ui/element/Button/Button.vue";\`, '  import { useToast } from "@/composables/useToast.js";', '  const { add, toasts, remove } = useToast();', '  const showToast = () => {', '    add({', \`      themeColor: "\${args.themeColor}",\`, \`      title: "\${args.title}",\`, \`      content: "\${args.content}",\`, \`      prefix: "\${args.prefix}",\`, \`      duration: \${args.duration},\`, '    });', '  };', '<\/script>', '', '<template>', \`  <Toast\`, \`    v-for="toast in toasts"\`, \`    :key="toast.id"\`, \`    :themeColor="toast.themeColor"\`, \`    :title="toast.title"\`, \`    :content="toast.content"\`, \`    :prefix="toast.prefix"\`, \`    :duration="toast.duration"\`, \`    \${args.className ? \`className="\${args.className}"\` : ""}\`, \`    @onClose="remove(toast.id)"\`, \`  >\`, \`    <template #action>\`, \`       <div>Action</div>\`, \`    </template>\`, \`  </Toast>\`, \`  <Button\`, \`    themeColor="primary"\`, \`    variant="filled"\`, \`    radius="4px"\`, \`    @click="showToast"\`, \`  >\`, \`    Toast Trigger\`, \`  </Button>\`, '</template>'].filter(Boolean).join('\\n').trim();
        }
      }
    }
  }
}`,...(A=(x=u.parameters)==null?void 0:x.docs)==null?void 0:A.source}}};var S,I,w;m.parameters={...m.parameters,docs:{...(S=m.parameters)==null?void 0:S.docs,source:{originalSource:`{
  name: "訊息類型",
  args: {
    title: "Notification Title ",
    content: "Content",
    duration: 5000,
    className: ""
  },
  render: args => ({
    components: {
      Toast,
      Button,
      Title,
      StatusIndicator,
      Icon
    },
    setup() {
      const onClose = () => {
        window.alert('Close');
      };
      const onAction = () => {
        window.alert('Action');
      };
      return {
        args,
        onClose,
        onAction
      };
    },
    template: \`
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
                <!-- toast - 關閉按鈕 -->
                <Button class="ded-close-button" variant="text" themeColor="neutral" @click="onClose">
                    <Icon name="SvgClose" size="20"></Icon>
                </Button>
                <!-- toast - 標題及說明文字 -->
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
                <!-- toast - 關閉按鈕 -->
                <Button class="ded-close-button" variant="text" themeColor="neutral" @click="onClose">
                    <Icon name="SvgClose" size="20"></Icon>
                </Button>
                <!-- toast - 標題及說明文字 -->
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
                <!-- toast - 關閉按鈕 -->
                <Button class="ded-close-button" variant="text" themeColor="neutral" @click="onClose">
                    <Icon name="SvgClose" size="20"></Icon>
                </Button>
                <!-- toast - 標題及說明文字 -->
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
                <!-- toast - 關閉按鈕 -->
                <Button class="ded-close-button" variant="text" themeColor="neutral" @click="onClose">
                    <Icon name="SvgClose" size="20"></Icon>
                </Button>
                <!-- toast - 標題及說明文字 -->
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
            </div>
        \`
  }),
  parameters: {
    controls: {
      // include: ['themeColor', 'label', 'value', 'name' ],
      exclude: ['themeColor', 'prefix', 'action', 'onClose']
    },
    docs: {
      source: {
        transform: (src, storyContext) => {
          const {
            args
          } = storyContext;
          return ['<script setup>', '  import Toast from "@/ui/element/Toast/Toast.vue";', \`  import Button from "@/ui/element/Button/Button.vue";\`, '  import { useToast } from "@/composables/useToast.js";', '  const { add, toasts, remove } = useToast();', '  const showSuccessToast = () => {', '    add({', \`      themeColor: "success",\`, \`      \${args.title ? \`title: "\${args.title}",\` : ""}\`, \`      \${args.content ? \`content: "\${args.content}",\` : ""}\`, \`      prefix: "SvgSuccessCircle",\`, \`      \${args.duration !== undefined ? \`duration: \${args.duration},\` : ""}\`, '    });', '  };', '  const showWarningToast = () => {', '    add({', \`      themeColor: "warning",\`, \`      \${args.title ? \`title: "\${args.title}",\` : ""}\`, \`      \${args.content ? \`content: "\${args.content}",\` : ""}\`, \`      prefix: "SvgWarningTri",\`, \`      \${args.duration !== undefined ? \`duration: \${args.duration},\` : ""}\`, '    });', '  };', '  const showErrorToast = () => {', '    add({', \`      themeColor: "error",\`, \`      \${args.title ? \`title: "\${args.title}",\` : ""}\`, \`      \${args.content ? \`content: "\${args.content}",\` : ""}\`, \`      prefix: "SvgErrorCircle",\`, \`      \${args.duration !== undefined ? \`duration: \${args.duration},\` : ""}\`, '    });', '  };', '  const showInfoToast = () => {', '    add({', \`      themeColor: "info",\`, \`      \${args.title ? \`title: "\${args.title}",\` : ""}\`, \`      \${args.content ? \`content: "\${args.content}",\` : ""}\`, \`      prefix: "SvgInfoCircle",\`, \`      \${args.duration !== undefined ? \`duration: \${args.duration},\` : ""}\`, '    });', '  };', '  const showDisableToast = () => {', '    add({', \`      themeColor: "neutral",\`, \`      \${args.title ? \`title: "\${args.title}",\` : ""}\`, \`      \${args.content ? \`content: "\${args.content}",\` : ""}\`, \`      prefix: "SvgDisableCircle",\`, \`      \${args.duration !== undefined ? \`duration: \${args.duration},\` : ""}\`, '    });', '  };', '<\/script>', '', '<template>', \`  <Toast\`, \`    v-for="toast in toasts"\`, \`    :key="toast.id"\`, \`    :themeColor="toast.themeColor"\`, \`    :title="toast.title"\`, \`    :content="toast.content"\`, \`    :prefix="toast.prefix"\`, \`    :duration="toast.duration"\`, \`    \${args.className ? \`className="\${args.className}"\` : ""}\`, \`    @onClose="remove(toast.id)"\`, \`  >\`, \`    <template #action>\`, \`       <div>Action</div>\`, \`    </template>\`, \`  </Toast>\`, \`  <Button\`, \`    themeColor="success"\`, \`    variant="filled"\`, \`    radius="4px"\`, \`    @click="showSuccessToast"\`, \`  >\`, \`    Success Trigger\`, \`  </Button>\`, \`  <Button\`, \`    themeColor="warning"\`, \`    variant="filled"\`, \`    radius="4px"\`, \`    @click="showWarningToast"\`, \`  >\`, \`    Warning Trigger\`, \`  </Button>\`, \`  <Button\`, \`    themeColor="error"\`, \`    variant="filled"\`, \`    radius="4px"\`, \`    @click="showErrorToast"\`, \`  >\`, \`    Error Trigger\`, \`  </Button>\`, \`  <Button\`, \`    themeColor="info"\`, \`    variant="filled"\`, \`    radius="4px"\`, \`    @click="showInfoToast"\`, \`  >\`, \`    Info Trigger\`, \`  </Button>\`, \`  <Button\`, \`    themeColor="neutral"\`, \`    variant="filled"\`, \`    radius="4px"\`, \`    @click="showDisableToast"\`, \`  >\`, \`    Disable Trigger\`, \`  </Button>\`, '</template>'].filter(Boolean).join('\\n').trim();
        }
      }
    }
  }
}`,...(w=(I=m.parameters)==null?void 0:I.docs)==null?void 0:w.source}}};var y,k,b;v.parameters={...v.parameters,docs:{...(y=v.parameters)==null?void 0:y.docs,source:{originalSource:`{
  name: "互動模式",
  args: {
    themeColor: "success",
    title: "Notification Title ",
    content: "Content",
    prefix: 'SvgSuccessCircle',
    duration: 5000,
    className: "",
    action: \`<div @click="onAction">Action</div>\`
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
          themeColor: args.themeColor,
          title: args.title,
          content: args.content
        });
      };
      const onAction = () => {
        window.alert('Action');
      };
      return {
        args,
        toasts,
        remove,
        showToast,
        onAction
      };
    },
    template: \`
            <Toast
                v-for="toast in toasts"
                :key="toast.id"
                :themeColor="toast.themeColor"
                :title="toast.title"
                :content="toast.content"
                :prefix="args.prefix"
                :duration="args.duration"
                :className="args.className"
                @onClose="remove(toast.id)"
            >
                <template #action>
                    <div @click="onAction">Action</div>
                </template>
            </Toast>
            <Button themeColor="primary" variant="filled" radius="4px" @click="showToast">
                Toast Trigger
            </Button>
        \`
  }),
  parameters: {
    controls: {
      // include: ['themeColor', 'label', 'value', 'name' ],
      exclude: ['onClose']
    },
    docs: {
      source: {
        transform: (src, storyContext) => {
          const {
            args
          } = storyContext;
          return ['<script setup>', '  import Toast from "@/ui/element/Toast/Toast.vue";', \`  import Button from "@/ui/element/Button/Button.vue";\`, '  import { useToast } from "@/composables/useToast.js";', '  const { add, toasts, remove } = useToast();', '  const showToast = () => {', '    add({', \`      themeColor: "\${args.themeColor}",\`, \`      title: "\${args.title}",\`, \`      content: "\${args.content}",\`, \`      prefix: "\${args.prefix}",\`, \`      duration: \${args.duration},\`, '    });', '  };', '<\/script>', '', '<template>', \`  <Toast\`, \`    v-for="toast in toasts"\`, \`    :key="toast.id"\`, \`    :themeColor="toast.themeColor"\`, \`    :title="toast.title"\`, \`    :content="toast.content"\`, \`    :prefix="toast.prefix"\`, \`    :duration="toast.duration"\`, \`    \${args.className ? \`className="\${args.className}"\` : ""}\`, \`    @onClose="remove(toast.id)"\`, \`  >\`, \`    <template #action>\`, \`       <div>Action</div>\`, \`    </template>\`, \`  </Toast>\`, \`  <Button\`, \`    themeColor="primary"\`, \`    variant="filled"\`, \`    radius="4px"\`, \`    @click="showToast"\`, \`  >\`, \`    Toast Trigger\`, \`  </Button>\`, '</template>'].filter(Boolean).join('\\n').trim();
        }
      }
    }
  }
}`,...(b=(k=v.parameters)==null?void 0:k.docs)==null?void 0:b.source}}};const Z=["ToastDefault","ToastTotal","ToastInterAction"];export{u as ToastDefault,v as ToastInterAction,m as ToastTotal,Z as __namedExportsOrder,Y as default};

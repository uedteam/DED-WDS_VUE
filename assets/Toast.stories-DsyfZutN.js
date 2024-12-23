import{f as k,j as _,E as A,C as E,e as C,b as r,D as T,t as f,n as D,T as z,o as W,s as j,c as V}from"./vue.esm-bundler-BQySH7jJ.js";import{_ as u}from"./Icon-f9eBqVFj.js";import{_ as m}from"./Button-CQMIYjcW.js";import{_ as g}from"./Title-Dg9m-quG.js";import{_ as v}from"./StatusIndicator-58SsyeOa.js";import"./iframe-C0k4Wqte.js";import"../sb-preview/runtime.js";const d=k([]),F=e=>{d.value=d.value.filter(o=>o.id!==e)},U=e=>{const o=Date.now(),t={...e,id:o};d.value.push(t)},M=()=>({add:U,remove:F,toasts:d}),O={class:"ded-message"},q={class:"ded-description"},n={__name:"Toast",props:{themeColor:{type:String,validator:e=>["primary","secondary","neutral","info","success","warning","error"].includes(e)},title:{type:String},content:{type:String},prefix:{type:String,default:""},duration:{type:Number,default:3e3},className:{type:String,default:""}},emits:["close"],setup(e,{emit:o}){const t=o,s=e,p=()=>{t("close")};let a=k(null);const b=()=>{a.value&&clearTimeout(a.value),a.value=setTimeout(()=>{p()},s.duration)};return _(()=>{b()}),A(()=>{a.value&&clearTimeout(a.value)}),(G,H)=>(W(),E(z,{to:"#toast"},[C("div",{class:D(["ded-toast",[`ded-toast-border-${s.themeColor}`,s.className]])},[r(m,{class:"ded-close-button",variant:"text",themeColor:"neutral",onClick:p},{default:T(()=>[r(u,{name:"close",size:"20"})]),_:1}),C("div",O,[r(v,{themeColor:s.themeColor,variant:"text",prefix:s.prefix},{default:T(()=>[r(g,null,{default:T(()=>[j(f(s.title),1)]),_:1})]),_:1},8,["themeColor","prefix"])]),C("p",q,f(s.content),1)],2)]))}};n.__docgenInfo={exportName:"default",displayName:"Toast",description:"",tags:{},props:[{name:"themeColor",type:{name:"string"},values:["primary","secondary","neutral","info","success","warning","error"]},{name:"title",type:{name:"string"}},{name:"content",type:{name:"string"}},{name:"prefix",type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"duration",type:{name:"number"},defaultValue:{func:!1,value:"3000"}},{name:"className",type:{name:"string"},defaultValue:{func:!1,value:'""'}}],events:[{name:"close"}],sourceFiles:["/Users/auouser/Desktop/Work_Space/DED-WDS_VUE/libs/src/ui/element/Toast/Toast.vue"]};const Y={components:{Icon:u,Toast:n},title:"Component/Toast",component:n,tags:["autodocs"],argTypes:{themeColor:{description:"主題顏色",control:{type:"select"},options:["primary","secondary","neutral","info","success","warning","error"],table:{type:{summary:"primary | secondary | neutral | info | success | warning | error"}}},title:{description:"內容",control:{type:"text"}},content:{description:"說明文字",control:{type:"text"}},prefix:{description:"前綴",control:{type:"select",labels:{"":"none",InfoCircleIcon:"InfoCircleIcon",SuccessCircleIcon:"SuccessCircleIcon",WarningCircleIcon:"WarningCircleIcon",ErrorCircleIcon:"ErrorCircleIcon"}},options:["","InfoCircleIcon","SuccessCircleIcon","WarningCircleIcon","ErrorCircleIcon"]},duration:{description:"持續時間",control:{type:"range",min:500,max:5e3,step:100}},className:{description:"客製化樣式",control:{type:"text"}},close:{description:"關閉事件",table:{category:"Events",type:{summary:"emits"}}}},parameters:{docs:{title:"Toast",description:{component:"Toast 組件的呈現及說明。"}}}},i={name:"預設項目",args:{themeColor:"success",title:"Title",content:"Content",prefix:"SuccessCircleIcon",duration:5e3,className:""},render:e=>({components:{Toast:n,Button:m,Title:g,StatusIndicator:v,Icon:u},setup(){const o=()=>{window.alert("Close")},t=V(()=>`ded-toast-border-${e.themeColor}`);return{args:e,onClose:o,toastBorderClass:t}},template:`
            <div class="ded-toast" :class="toastBorderClass">
                <!-- toast - 關閉按鈕 -->
                <Button class="ded-close-button" variant="text" themeColor="neutral" @click="onClose">
                    <Icon name="close" size="20"></Icon>
                </Button>
                <!-- toast - 標題及說明文字 -->
                <div class="ded-message">
                    <StatusIndicator
                        :themeColor="args.themeColor"
                        variant="text"
                        :prefix="args.prefix"
                    >
                        <Title>{{ args.title }}</Title>
                    </StatusIndicator>
                </div>
                <p class="ded-description">{{ args.content }}</p>
            </div>
        `}),parameters:{controls:{},docs:{source:{transform:(e,o)=>{const{args:t}=o;return["<template>","  <Toast",'    v-for="toast in toasts"','    :key="toast.id"','    :themeColor="toast.themeColor"',`    :title="${t.title}"`,`    :content="${t.content}"`,`    :prefix="${t.prefix}"`,`    :duration="${t.duration}"`,`    :className="${t.className}"`,'    @close="remove(toast.id)"',"  ></Toast>","  <Button",'    themeColor="primary"','    variant="filled"','    radius="md"','    @click="showToast"',"  >","    Toast Trigger","  </Button>","</template>","","<script setup>",'  import { useToast } from "@/path/to/useToast";',"","  const { add, toasts, remove } = useToast();","","  const showToast = () => {","    add({",`      themeColor: "${t.themeColor}",`,`      title: "${t.title}",`,`      content: "${t.content}",`,"    });","  };","<\/script>"].join(`
`).trim()}}}}},c={name:"預設項目",args:{title:"Title",content:"Content",duration:5e3,className:""},render:e=>({components:{Toast:n,Button:m,Title:g,StatusIndicator:v,Icon:u},setup(){return{args:e,onClose:()=>{window.alert("Close")}}},template:`
            <div class="ded-toast ded-toast-border-success">
                <!-- toast - 關閉按鈕 -->
                <Button class="ded-close-button" variant="text" themeColor="neutral" @click="onClose">
                    <Icon name="close" size="20"></Icon>
                </Button>
                <!-- toast - 標題及說明文字 -->
                <div class="ded-message">
                    <StatusIndicator
                        themeColor="success"
                        variant="text"
                        prefix="SuccessCircleIcon"
                    >
                        <Title>{{ args.title }}</Title>
                    </StatusIndicator>
                </div>
                <p class="ded-description">{{ args.content }}</p>
            </div>

            <div class="ded-toast ded-toast-border-warning">
                <!-- toast - 關閉按鈕 -->
                <Button class="ded-close-button" variant="text" themeColor="neutral" @click="onClose">
                    <Icon name="close" size="20"></Icon>
                </Button>
                <!-- toast - 標題及說明文字 -->
                <div class="ded-message">
                    <StatusIndicator
                        themeColor="warning"
                        variant="text"
                        prefix="WarningCircleIcon"
                    >
                        <Title>{{ args.title }}</Title>
                    </StatusIndicator>
                </div>
                <p class="ded-description">{{ args.content }}</p>
            </div>

            <div class="ded-toast ded-toast-border-error">
                <!-- toast - 關閉按鈕 -->
                <Button class="ded-close-button" variant="text" themeColor="neutral" @click="onClose">
                    <Icon name="close" size="20"></Icon>
                </Button>
                <!-- toast - 標題及說明文字 -->
                <div class="ded-message">
                    <StatusIndicator
                        themeColor="error"
                        variant="text"
                        prefix="ErrorCircleIcon"
                    >
                        <Title>{{ args.title }}</Title>
                    </StatusIndicator>
                </div>
                <p class="ded-description">{{ args.content }}</p>
            </div>

            <div class="ded-toast ded-toast-border-info">
                <!-- toast - 關閉按鈕 -->
                <Button class="ded-close-button" variant="text" themeColor="neutral" @click="onClose">
                    <Icon name="close" size="20"></Icon>
                </Button>
                <!-- toast - 標題及說明文字 -->
                <div class="ded-message">
                    <StatusIndicator
                        themeColor="info"
                        variant="text"
                        prefix="InfoCircleIcon"
                    >
                        <Title>{{ args.title }}</Title>
                    </StatusIndicator>
                </div>
                <p class="ded-description">{{ args.content }}</p>
            </div>
        `}),parameters:{controls:{},docs:{source:{transform:(e,o)=>{const{args:t}=o;return["<Toast",'    v-for="toast in toasts"','    :key="toast.id"','    themeColor="success"',`    :title="${t.title}"`,`    :content="${t.content}"`,'    prefix="SuccessCircleIcon"',`    :duration="${t.duration}"`,`    className="${t.className}"`,'    @close="remove(toast.id)"',"></Toast>","<Button",'    themeColor="primary"','    variant="filled"','    radius="4px"','    @click="showToast"',">","    Toast Trigger","</Button>","<Toast",'    v-for="toast in toasts"','    :key="toast.id"','    themeColor="warning"',`    :title="${t.title}"`,`    :content="${t.content}"`,'    prefix="WarningCircleIcon"',`    :duration="${t.duration}"`,`    className="${t.className}"`,'    @close="remove(toast.id)"',"></Toast>","<Button",'    themeColor="primary"','    variant="filled"','    radius="4px"','    @click="showToast"',">","    Toast Trigger","</Button>","<Toast",'    v-for="toast in toasts"','    :key="toast.id"','    themeColor="error"',`    :title="${t.title}"`,`    :content="${t.content}"`,'    prefix="ErrorCircleIcon"',`    :duration="${t.duration}"`,`    className="${t.className}"`,'    @close="remove(toast.id)"',"></Toast>","<Button",'    themeColor="primary"','    variant="filled"','    radius="4px"','    @click="showToast"',">","    Toast Trigger","</Button>","<Toast",'    v-for="toast in toasts"','    :key="toast.id"','    themeColor="info"',`    :title="${t.title}"`,`    :content="${t.content}"`,'    prefix="InfoCircleIcon"',`    :duration="${t.duration}"`,`    className="${t.className}"`,'    @close="remove(toast.id)"',"></Toast>","<Button",'    themeColor="primary"','    variant="filled"','    radius="4px"','    @click="showToast"',">","    Toast Trigger","</Button>","","<script setup>",'  import { useToast } from "@/path/to/useToast";',"","  const { add, toasts, remove } = useToast();","","  const showToast = () => {","    add({",`      themeColor: "${t.themeColor}",`,`      title: "${t.title}",`,`      content: "${t.content}",`,"    });","  };","<\/script>"].join(`
`).trim()}}}}},l={name:"互動模式",args:{themeColor:"success",title:"Title",content:"Content",prefix:"SuccessCircleIcon",duration:5e3,className:""},render:e=>({components:{Toast:n,Button:m},setup(){const{add:o,toasts:t,remove:s}=M();return{args:e,toasts:t,remove:s,showToast:()=>{o({themeColor:e.themeColor,title:e.title,content:e.content})}}},template:`
            <Toast
                v-for="toast in toasts"
                :key="toast.id"
                :themeColor="toast.themeColor"
                :title="toast.title"
                :content="toast.content"
                :prefix="args.prefix"
                :duration="args.duration"
                :className="args.className"
                @close="remove(toast.id)"
            ></Toast>
            <Button themeColor="primary" variant="filled" radius="4px" @click="showToast">
                Toast Trigger
            </Button>
        `}),parameters:{controls:{},docs:{source:{transform:(e,o)=>{const{args:t}=o;return["<template>","  <Toast",'    v-for="toast in toasts"','    :key="toast.id"','    :themeColor="toast.themeColor"','    :title="toast.title"','    :content="toast.content"',`    :prefix="${t.prefix}"`,`    :duration="${t.duration}"`,`    :className="${t.className}"`,'    @close="remove(toast.id)"',"  ></Toast>","  <Button",'    themeColor="primary"','    variant="filled"','    radius="4px"','    @click="showToast"',"  >","    Toast Trigger","  </Button>","</template>","","<script setup>",'  import { useToast } from "@/path/to/useToast";',"","  const { add, toasts, remove } = useToast();","","  const showToast = () => {","    add({",`      themeColor: "${t.themeColor}",`,`      title: "${t.title}",`,`      content: "${t.content}",`,"    });","  };","<\/script>"].join(`
`).trim()}}}}};var h,x,I;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`{
  name: "預設項目",
  args: {
    themeColor: "success",
    title: "Title",
    content: "Content",
    prefix: 'SuccessCircleIcon',
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
      const toastBorderClass = computed(() => {
        const color = args.themeColor;
        return \`ded-toast-border-\${color}\`;
      });
      return {
        args,
        onClose,
        toastBorderClass
      };
    },
    template: \`
            <div class="ded-toast" :class="toastBorderClass">
                <!-- toast - 關閉按鈕 -->
                <Button class="ded-close-button" variant="text" themeColor="neutral" @click="onClose">
                    <Icon name="close" size="20"></Icon>
                </Button>
                <!-- toast - 標題及說明文字 -->
                <div class="ded-message">
                    <StatusIndicator
                        :themeColor="args.themeColor"
                        variant="text"
                        :prefix="args.prefix"
                    >
                        <Title>{{ args.title }}</Title>
                    </StatusIndicator>
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
          return ['<template>', \`  <Toast\`, \`    v-for="toast in toasts"\`, \`    :key="toast.id"\`, \`    :themeColor="toast.themeColor"\`, \`    :title="\${args.title}"\`, \`    :content="\${args.content}"\`, \`    :prefix="\${args.prefix}"\`, \`    :duration="\${args.duration}"\`, \`    :className="\${args.className}"\`, \`    @close="remove(toast.id)"\`, \`  ></Toast>\`, \`  <Button\`, \`    themeColor="primary"\`, \`    variant="filled"\`, \`    radius="md"\`, \`    @click="showToast"\`, \`  >\`, \`    Toast Trigger\`, \`  </Button>\`, '</template>', '', '<script setup>', '  import { useToast } from "@/path/to/useToast";', '', '  const { add, toasts, remove } = useToast();', '', '  const showToast = () => {', '    add({', \`      themeColor: "\${args.themeColor}",\`, \`      title: "\${args.title}",\`, \`      content: "\${args.content}",\`, '    });', '  };', '<\/script>'].join('\\n').trim();
        }
      }
    }
  }
}`,...(I=(x=i.parameters)==null?void 0:x.docs)==null?void 0:I.source}}};var $,y,B;c.parameters={...c.parameters,docs:{...($=c.parameters)==null?void 0:$.docs,source:{originalSource:'{\n  name: "預設項目",\n  args: {\n    title: "Title",\n    content: "Content",\n    duration: 5000,\n    className: ""\n  },\n  render: args => ({\n    components: {\n      Toast,\n      Button,\n      Title,\n      StatusIndicator,\n      Icon\n    },\n    setup() {\n      const onClose = () => {\n        window.alert(\'Close\');\n      };\n      return {\n        args,\n        onClose\n      };\n    },\n    template: `\n            <div class="ded-toast ded-toast-border-success">\n                <!-- toast - 關閉按鈕 -->\n                <Button class="ded-close-button" variant="text" themeColor="neutral" @click="onClose">\n                    <Icon name="close" size="20"></Icon>\n                </Button>\n                <!-- toast - 標題及說明文字 -->\n                <div class="ded-message">\n                    <StatusIndicator\n                        themeColor="success"\n                        variant="text"\n                        prefix="SuccessCircleIcon"\n                    >\n                        <Title>{{ args.title }}</Title>\n                    </StatusIndicator>\n                </div>\n                <p class="ded-description">{{ args.content }}</p>\n            </div>\n\n            <div class="ded-toast ded-toast-border-warning">\n                <!-- toast - 關閉按鈕 -->\n                <Button class="ded-close-button" variant="text" themeColor="neutral" @click="onClose">\n                    <Icon name="close" size="20"></Icon>\n                </Button>\n                <!-- toast - 標題及說明文字 -->\n                <div class="ded-message">\n                    <StatusIndicator\n                        themeColor="warning"\n                        variant="text"\n                        prefix="WarningCircleIcon"\n                    >\n                        <Title>{{ args.title }}</Title>\n                    </StatusIndicator>\n                </div>\n                <p class="ded-description">{{ args.content }}</p>\n            </div>\n\n            <div class="ded-toast ded-toast-border-error">\n                <!-- toast - 關閉按鈕 -->\n                <Button class="ded-close-button" variant="text" themeColor="neutral" @click="onClose">\n                    <Icon name="close" size="20"></Icon>\n                </Button>\n                <!-- toast - 標題及說明文字 -->\n                <div class="ded-message">\n                    <StatusIndicator\n                        themeColor="error"\n                        variant="text"\n                        prefix="ErrorCircleIcon"\n                    >\n                        <Title>{{ args.title }}</Title>\n                    </StatusIndicator>\n                </div>\n                <p class="ded-description">{{ args.content }}</p>\n            </div>\n\n            <div class="ded-toast ded-toast-border-info">\n                <!-- toast - 關閉按鈕 -->\n                <Button class="ded-close-button" variant="text" themeColor="neutral" @click="onClose">\n                    <Icon name="close" size="20"></Icon>\n                </Button>\n                <!-- toast - 標題及說明文字 -->\n                <div class="ded-message">\n                    <StatusIndicator\n                        themeColor="info"\n                        variant="text"\n                        prefix="InfoCircleIcon"\n                    >\n                        <Title>{{ args.title }}</Title>\n                    </StatusIndicator>\n                </div>\n                <p class="ded-description">{{ args.content }}</p>\n            </div>\n        `\n  }),\n  parameters: {\n    controls: {\n      // include: [\'themeColor\', \'label\', \'value\', \'name\' ],\n    },\n    docs: {\n      source: {\n        transform: (src, storyContext) => {\n          const {\n            args\n          } = storyContext;\n          return [`<Toast`, `    v-for="toast in toasts"`, `    :key="toast.id"`, `    themeColor="success"`, `    :title="${args.title}"`, `    :content="${args.content}"`, `    prefix="SuccessCircleIcon"`, `    :duration="${args.duration}"`, `    className="${args.className}"`, `    @close="remove(toast.id)"`, `></Toast>`, `<Button`, `    themeColor="primary"`, `    variant="filled"`, `    radius="4px"`, `    @click="showToast"`, `>`, `    Toast Trigger`, `</Button>`, `<Toast`, `    v-for="toast in toasts"`, `    :key="toast.id"`, `    themeColor="warning"`, `    :title="${args.title}"`, `    :content="${args.content}"`, `    prefix="WarningCircleIcon"`, `    :duration="${args.duration}"`, `    className="${args.className}"`, `    @close="remove(toast.id)"`, `></Toast>`, `<Button`, `    themeColor="primary"`, `    variant="filled"`, `    radius="4px"`, `    @click="showToast"`, `>`, `    Toast Trigger`, `</Button>`, `<Toast`, `    v-for="toast in toasts"`, `    :key="toast.id"`, `    themeColor="error"`, `    :title="${args.title}"`, `    :content="${args.content}"`, `    prefix="ErrorCircleIcon"`, `    :duration="${args.duration}"`, `    className="${args.className}"`, `    @close="remove(toast.id)"`, `></Toast>`, `<Button`, `    themeColor="primary"`, `    variant="filled"`, `    radius="4px"`, `    @click="showToast"`, `>`, `    Toast Trigger`, `</Button>`, `<Toast`, `    v-for="toast in toasts"`, `    :key="toast.id"`, `    themeColor="info"`, `    :title="${args.title}"`, `    :content="${args.content}"`, `    prefix="InfoCircleIcon"`, `    :duration="${args.duration}"`, `    className="${args.className}"`, `    @close="remove(toast.id)"`, `></Toast>`, `<Button`, `    themeColor="primary"`, `    variant="filled"`, `    radius="4px"`, `    @click="showToast"`, `>`, `    Toast Trigger`, `</Button>`, \'\', \'<script setup>\', \'  import { useToast } from "@/path/to/useToast";\', \'\', \'  const { add, toasts, remove } = useToast();\', \'\', \'  const showToast = () => {\', \'    add({\', `      themeColor: "${args.themeColor}",`, `      title: "${args.title}",`, `      content: "${args.content}",`, \'    });\', \'  };\', \'<\/script>\'].join(\'\\n\').trim();\n        }\n      }\n    }\n  }\n}',...(B=(y=c.parameters)==null?void 0:y.docs)==null?void 0:B.source}}};var w,S,N;l.parameters={...l.parameters,docs:{...(w=l.parameters)==null?void 0:w.docs,source:{originalSource:`{
  name: "互動模式",
  args: {
    themeColor: "success",
    title: "Title",
    content: "Content",
    prefix: 'SuccessCircleIcon',
    duration: 5000,
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
          themeColor: args.themeColor,
          title: args.title,
          content: args.content
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
                :content="toast.content"
                :prefix="args.prefix"
                :duration="args.duration"
                :className="args.className"
                @close="remove(toast.id)"
            ></Toast>
            <Button themeColor="primary" variant="filled" radius="4px" @click="showToast">
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
          return ['<template>', \`  <Toast\`, \`    v-for="toast in toasts"\`, \`    :key="toast.id"\`, \`    :themeColor="toast.themeColor"\`, \`    :title="toast.title"\`, \`    :content="toast.content"\`, \`    :prefix="\${args.prefix}"\`, \`    :duration="\${args.duration}"\`, \`    :className="\${args.className}"\`, \`    @close="remove(toast.id)"\`, \`  ></Toast>\`, \`  <Button\`, \`    themeColor="primary"\`, \`    variant="filled"\`, \`    radius="4px"\`, \`    @click="showToast"\`, \`  >\`, \`    Toast Trigger\`, \`  </Button>\`, '</template>', '', '<script setup>', '  import { useToast } from "@/path/to/useToast";', '', '  const { add, toasts, remove } = useToast();', '', '  const showToast = () => {', '    add({', \`      themeColor: "\${args.themeColor}",\`, \`      title: "\${args.title}",\`, \`      content: "\${args.content}",\`, '    });', '  };', '<\/script>'].join('\\n').trim();
        }
      }
    }
  }
}`,...(N=(S=l.parameters)==null?void 0:S.docs)==null?void 0:N.source}}};const Z=["ToastDefault","ToastTotal","ToastInterAction"];export{i as ToastDefault,l as ToastInterAction,c as ToastTotal,Z as __namedExportsOrder,Y as default};

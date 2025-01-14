import{h as b,l as S,E as D,D as V,a as r,b as l,d as h,n as g,r as W,t as T,T as M,o as j,f as H,g as f}from"./vue.esm-bundler-C8tbd0VY.js";import{_ as i}from"./Icon-D-NDJAD3.js";import{_ as v}from"./Button-Ck9oqLH6.js";import{_ as C}from"./Title-D3Q4XMVN.js";import{_}from"./StatusIndicator-C86_KJVa.js";import"./iframe-CrLK0dA1.js";import"../sb-preview/runtime.js";const p=b([]),F=e=>{p.value=p.value.filter(o=>o.id!==e)},U=e=>{const o=Date.now(),t={...e,id:o};p.value.push(t)},L=()=>({add:U,remove:F,toasts:p}),O={class:"ded-toast-header"},q={class:"ded-toast-header-action"},G={class:"ded-description"},a={__name:"Toast",props:{themeColor:{type:String,validator:e=>["primary","secondary","neutral","info","success","warning","error"].includes(e)},title:{type:String},content:{type:String},prefix:{type:String,default:""},duration:{type:Number,default:3e3},className:{type:String,default:""}},emits:["close"],setup(e,{emit:o}){const t=o,s=e,c=()=>{t("close")};let n=b(null);const z=()=>{n.value&&clearTimeout(n.value),n.value=setTimeout(()=>{c()},s.duration)};return S(()=>{z()}),D(()=>{n.value&&clearTimeout(n.value)}),(E,J)=>(j(),V(M,{to:"#toast"},[r("div",{class:g(["ded-toast",[`ded-toast-border-${s.themeColor}`,s.className]])},[l(v,{class:"ded-close-button",variant:"text",themeColor:"neutral",onClick:c},{default:h(()=>[l(i,{name:"close",size:"20"})]),_:1}),r("div",O,[r("div",{class:g(["ded-toast-header-message",`ded-toast-header-message-${s.themeColor}`])},[l(i,{name:s.prefix,size:"20"},null,8,["name"]),l(C,{themeColor:s.themeColor,level:"5"},{default:h(()=>[H(T(s.title),1)]),_:1},8,["themeColor"])],2),r("div",q,[W(E.$slots,"action")])]),r("p",G,T(s.content),1)],2)]))}};a.__docgenInfo={exportName:"default",displayName:"Toast",description:"",tags:{},props:[{name:"themeColor",type:{name:"string"},values:["primary","secondary","neutral","info","success","warning","error"]},{name:"title",type:{name:"string"}},{name:"content",type:{name:"string"}},{name:"prefix",type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"duration",type:{name:"number"},defaultValue:{func:!1,value:"3000"}},{name:"className",type:{name:"string"},defaultValue:{func:!1,value:'""'}}],events:[{name:"close"}],slots:[{name:"action"}],sourceFiles:["D:/98_測試/up/DED-WDS_VUE/libs/src/ui/element/Toast/Toast.vue"]};const tt={components:{Icon:i,Toast:a},title:"Component/Toast",component:a,tags:["autodocs"],argTypes:{themeColor:{description:"主題顏色",control:{type:"select"},options:["primary","secondary","neutral","info","success","warning","error"],table:{type:{summary:"primary | secondary | neutral | info | success | warning | error"}}},title:{description:"內容",control:{type:"text"}},content:{description:"說明文字",control:{type:"text"}},prefix:{description:"前綴",control:{type:"select",labels:{"":"none",InfoCircleIcon:"InfoCircleIcon",SuccessCircleIcon:"SuccessCircleIcon",WarningCircleIcon:"WarningCircleIcon",ErrorCircleIcon:"ErrorCircleIcon"}},options:["","InfoCircleIcon","SuccessCircleIcon","WarningCircleIcon","ErrorCircleIcon"]},duration:{description:"持續時間",control:{type:"range",min:500,max:5e3,step:100}},className:{description:"客製化樣式",control:{type:"text"}},close:{description:"關閉事件",table:{category:"Events",type:{summary:"emits"}}},action:{description:"Action slot",control:{type:"text"},table:{type:{summary:"Vue Component | HTML"}}}},parameters:{docs:{title:"Toast",description:{component:"Toast 組件的呈現及說明。"}}}},d={name:"預設項目",args:{themeColor:"success",title:"Notification Title ",content:"Content",prefix:"ErrorCircleIcon",duration:5e3,className:"",action:'<div @click="onAction">Action</div>'},render:e=>({components:{Toast:a,Button:v,Title:C,StatusIndicator:_,Icon:i},setup(){const o=()=>{window.alert("Close")},t=f(()=>`ded-toast-border-${e.themeColor}`),s=f(()=>`ded-toast-header-message-${e.themeColor}`);return{args:e,onClose:o,toastBorderClass:t,toastHeaderMsgThemeClass:s,onAction:()=>{window.alert("Action")}}},template:`
            <div class="ded-toast" :class="toastBorderClass">
                <!-- toast - 關閉按鈕 -->
                <Button class="ded-close-button" variant="text" themeColor="neutral" @click="onClose">
                    <Icon name="close" size="20"></Icon>
                </Button>
                <div class="ded-toast-header">
                    <div class="ded-toast-header-message" :class="toastHeaderMsgThemeClass">
                        <Icon :name="args.prefix" size="20"></Icon>
                        <Title :themeColor="args.themeColor" level="5">
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
        `}),parameters:{controls:{},docs:{source:{transform:(e,o)=>{const{args:t}=o;return["<template>","  <Toast",'    v-for="toast in toasts"','    :key="toast.id"','    :themeColor="toast.themeColor"',`    :title="${t.title}"`,`    :content="${t.content}"`,`    :prefix="${t.prefix}"`,`    :duration="${t.duration}"`,`    :className="${t.className}"`,'    @close="remove(toast.id)"',"  >","    <template #action>","       <div>Action</div>","    </template>","  </Toast>","  <Button",'    themeColor="primary"','    variant="filled"','    radius="md"','    @click="showToast"',"  >","    Toast Trigger","  </Button>","</template>","","<script setup>",'  import { useToast } from "@/path/to/useToast";',"","  const { add, toasts, remove } = useToast();","","  const showToast = () => {","    add({",`      themeColor: "${t.themeColor}",`,`      title: "${t.title}",`,`      content: "${t.content}",`,"    });","  };","<\/script>"].join(`
`).trim()}}}}},m={name:"預設項目",args:{title:"Notification Title ",content:"Content",duration:5e3,className:""},render:e=>({components:{Toast:a,Button:v,Title:C,StatusIndicator:_,Icon:i},setup(){return{args:e,onClose:()=>{window.alert("Close")},onAction:()=>{window.alert("Action")}}},template:`
            <div class="ded-toast ded-toast-border-success">
                <!-- toast - 關閉按鈕 -->
                <Button class="ded-close-button" variant="text" themeColor="neutral" @click="onClose">
                    <Icon name="close" size="20"></Icon>
                </Button>
                <!-- toast - 標題及說明文字 -->
                <div class="ded-toast-header">
                    <div class="ded-toast-header-message ded-toast-header-message-success">
                        <Icon name="SuccessCircleIcon" size="20"></Icon>
                        <Title themeColor="success" level="5">
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
                    <Icon name="close" size="20"></Icon>
                </Button>
                <!-- toast - 標題及說明文字 -->
                <div class="ded-toast-header">
                    <div class="ded-toast-header-message ded-toast-header-message-warning">
                        <Icon name="WarningCircleIcon" size="20"></Icon>
                        <Title themeColor="warning" level="5">
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
                    <Icon name="close" size="20"></Icon>
                </Button>
                <!-- toast - 標題及說明文字 -->
                <div class="ded-toast-header">
                    <div class="ded-toast-header-message ded-toast-header-message-error">
                        <Icon name="ErrorCircleIcon" size="20"></Icon>
                        <Title themeColor="error" level="5">
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
                    <Icon name="close" size="20"></Icon>
                </Button>
                <!-- toast - 標題及說明文字 -->
                <div class="ded-toast-header">
                    <div class="ded-toast-header-message ded-toast-header-message-info">
                        <Icon name="InfoCircleIcon" size="20"></Icon>
                        <Title themeColor="info" level="5">
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
                    <Icon name="close" size="20"></Icon>
                </Button>
                <!-- toast - 標題及說明文字 -->
                <div class="ded-toast-header">
                    <div class="ded-toast-header-message ded-toast-header-message-neutral">
                        <Icon name="DisableCircleIcon" size="20"></Icon>
                        <Title themeColor="neutral" level="5">
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
        `}),parameters:{controls:{},docs:{source:{transform:(e,o)=>{const{args:t}=o;return["<Toast",'    v-for="toast in toasts"','    :key="toast.id"','    themeColor="success"',`    :title="${t.title}"`,`    :content="${t.content}"`,'    prefix="SuccessCircleIcon"',`    :duration="${t.duration}"`,`    className="${t.className}"`,'    @close="remove(toast.id)"',"  >","    <template #action>","       <div>Action</div>","    </template>","</Toast>","<Button",'    themeColor="primary"','    variant="filled"','    radius="4px"','    @click="showToast"',">","    Toast Trigger","</Button>","<Toast",'    v-for="toast in toasts"','    :key="toast.id"','    themeColor="warning"',`    :title="${t.title}"`,`    :content="${t.content}"`,'    prefix="WarningCircleIcon"',`    :duration="${t.duration}"`,`    className="${t.className}"`,'    @close="remove(toast.id)"',"  >","    <template #action>","       <div>Action</div>","    </template>","</Toast>","<Button",'    themeColor="primary"','    variant="filled"','    radius="4px"','    @click="showToast"',">","    Toast Trigger","</Button>","<Toast",'    v-for="toast in toasts"','    :key="toast.id"','    themeColor="error"',`    :title="${t.title}"`,`    :content="${t.content}"`,'    prefix="ErrorCircleIcon"',`    :duration="${t.duration}"`,`    className="${t.className}"`,'    @close="remove(toast.id)"',"  >","    <template #action>","       <div>Action</div>","    </template>","</Toast>","<Button",'    themeColor="primary"','    variant="filled"','    radius="4px"','    @click="showToast"',">","    Toast Trigger","</Button>","<Toast",'    v-for="toast in toasts"','    :key="toast.id"','    themeColor="info"',`    :title="${t.title}"`,`    :content="${t.content}"`,'    prefix="InfoCircleIcon"',`    :duration="${t.duration}"`,`    className="${t.className}"`,'    @close="remove(toast.id)"',"  >","    <template #action>","       <div>Action</div>","    </template>","</Toast>","<Button",'    themeColor="primary"','    variant="filled"','    radius="4px"','    @click="showToast"',">","    Toast Trigger","</Button>","<Toast",'    v-for="toast in toasts"','    :key="toast.id"','    themeColor="neutral"',`    :title="${t.title}"`,`    :content="${t.content}"`,'    prefix="DisableCircleIcon"',`    :duration="${t.duration}"`,`    className="${t.className}"`,'    @close="remove(toast.id)"',"  >","    <template #action>","       <div>Action</div>","    </template>","</Toast>","<Button",'    themeColor="primary"','    variant="filled"','    radius="4px"','    @click="showToast"',">","    Toast Trigger","</Button>","","<script setup>",'  import { useToast } from "@/path/to/useToast";',"","  const { add, toasts, remove } = useToast();","","  const showToast = () => {","    add({",`      themeColor: "${t.themeColor}",`,`      title: "${t.title}",`,`      content: "${t.content}",`,"    });","  };","<\/script>"].join(`
`).trim()}}}}},u={name:"互動模式",args:{themeColor:"success",title:"Notification Title ",content:"Content",prefix:"SuccessCircleIcon",duration:5e3,className:""},render:e=>({components:{Toast:a,Button:v},setup(){const{add:o,toasts:t,remove:s}=L();return{args:e,toasts:t,remove:s,showToast:()=>{o({themeColor:e.themeColor,title:e.title,content:e.content})},onAction:()=>{window.alert("Action")}}},template:`
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
            >
                <template #action>
                    <div @click="onAction">Action</div>
                </template>
            </Toast>
            <Button themeColor="primary" variant="filled" radius="4px" @click="showToast">
                Toast Trigger
            </Button>
        `}),parameters:{controls:{},docs:{source:{transform:(e,o)=>{const{args:t}=o;return["<template>","  <Toast",'    v-for="toast in toasts"','    :key="toast.id"','    :themeColor="toast.themeColor"','    :title="toast.title"','    :content="toast.content"',`    :prefix="${t.prefix}"`,`    :duration="${t.duration}"`,`    :className="${t.className}"`,'    @close="remove(toast.id)"',"  >","    <template #action>","       <div>Action</div>","    </template>","  </Toast>","  <Button",'    themeColor="primary"','    variant="filled"','    radius="4px"','    @click="showToast"',"  >","    Toast Trigger","  </Button>","</template>","","<script setup>",'  import { useToast } from "@/path/to/useToast";',"","  const { add, toasts, remove } = useToast();","","  const showToast = () => {","    add({",`      themeColor: "${t.themeColor}",`,`      title: "${t.title}",`,`      content: "${t.content}",`,"    });","  };","<\/script>"].join(`
`).trim()}}}}};var I,A,$;d.parameters={...d.parameters,docs:{...(I=d.parameters)==null?void 0:I.docs,source:{originalSource:`{
  name: "預設項目",
  args: {
    themeColor: "success",
    title: "Notification Title ",
    content: "Content",
    prefix: 'ErrorCircleIcon',
    duration: 5000,
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
      return {
        args,
        onClose,
        toastBorderClass,
        toastHeaderMsgThemeClass,
        onAction
      };
    },
    template: \`
            <div class="ded-toast" :class="toastBorderClass">
                <!-- toast - 關閉按鈕 -->
                <Button class="ded-close-button" variant="text" themeColor="neutral" @click="onClose">
                    <Icon name="close" size="20"></Icon>
                </Button>
                <div class="ded-toast-header">
                    <div class="ded-toast-header-message" :class="toastHeaderMsgThemeClass">
                        <Icon :name="args.prefix" size="20"></Icon>
                        <Title :themeColor="args.themeColor" level="5">
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
          return ['<template>', \`  <Toast\`, \`    v-for="toast in toasts"\`, \`    :key="toast.id"\`, \`    :themeColor="toast.themeColor"\`, \`    :title="\${args.title}"\`, \`    :content="\${args.content}"\`, \`    :prefix="\${args.prefix}"\`, \`    :duration="\${args.duration}"\`, \`    :className="\${args.className}"\`, \`    @close="remove(toast.id)"\`, \`  >\`, \`    <template #action>\`, \`       <div>Action</div>\`, \`    </template>\`, \`  </Toast>\`, \`  <Button\`, \`    themeColor="primary"\`, \`    variant="filled"\`, \`    radius="md"\`, \`    @click="showToast"\`, \`  >\`, \`    Toast Trigger\`, \`  </Button>\`, '</template>', '', '<script setup>', '  import { useToast } from "@/path/to/useToast";', '', '  const { add, toasts, remove } = useToast();', '', '  const showToast = () => {', '    add({', \`      themeColor: "\${args.themeColor}",\`, \`      title: "\${args.title}",\`, \`      content: "\${args.content}",\`, '    });', '  };', '<\/script>'].join('\\n').trim();
        }
      }
    }
  }
}`,...($=(A=d.parameters)==null?void 0:A.docs)==null?void 0:$.source}}};var y,B,x;m.parameters={...m.parameters,docs:{...(y=m.parameters)==null?void 0:y.docs,source:{originalSource:'{\n  name: "預設項目",\n  args: {\n    title: "Notification Title ",\n    content: "Content",\n    duration: 5000,\n    className: ""\n  },\n  render: args => ({\n    components: {\n      Toast,\n      Button,\n      Title,\n      StatusIndicator,\n      Icon\n    },\n    setup() {\n      const onClose = () => {\n        window.alert(\'Close\');\n      };\n      const onAction = () => {\n        window.alert(\'Action\');\n      };\n      return {\n        args,\n        onClose,\n        onAction\n      };\n    },\n    template: `\n            <div class="ded-toast ded-toast-border-success">\n                <!-- toast - 關閉按鈕 -->\n                <Button class="ded-close-button" variant="text" themeColor="neutral" @click="onClose">\n                    <Icon name="close" size="20"></Icon>\n                </Button>\n                <!-- toast - 標題及說明文字 -->\n                <div class="ded-toast-header">\n                    <div class="ded-toast-header-message ded-toast-header-message-success">\n                        <Icon name="SuccessCircleIcon" size="20"></Icon>\n                        <Title themeColor="success" level="5">\n                            {{ args.title }}\n                        </Title>\n                    </div>\n                    <div class="ded-toast-header-action">\n                        <div @click="onAction">\n                            Action\n                        </div>\n                    </div>\n                </div>\n                <p class="ded-description">{{ args.content }}</p>\n            </div>\n\n            <div class="ded-toast ded-toast-border-warning">\n                <!-- toast - 關閉按鈕 -->\n                <Button class="ded-close-button" variant="text" themeColor="neutral" @click="onClose">\n                    <Icon name="close" size="20"></Icon>\n                </Button>\n                <!-- toast - 標題及說明文字 -->\n                <div class="ded-toast-header">\n                    <div class="ded-toast-header-message ded-toast-header-message-warning">\n                        <Icon name="WarningCircleIcon" size="20"></Icon>\n                        <Title themeColor="warning" level="5">\n                            {{ args.title }}\n                        </Title>\n                    </div>\n                    <div class="ded-toast-header-action">\n                        <div @click="onAction">\n                            Action\n                        </div>\n                    </div>\n                </div>\n                <p class="ded-description">{{ args.content }}</p>\n            </div>\n\n            <div class="ded-toast ded-toast-border-error">\n                <!-- toast - 關閉按鈕 -->\n                <Button class="ded-close-button" variant="text" themeColor="neutral" @click="onClose">\n                    <Icon name="close" size="20"></Icon>\n                </Button>\n                <!-- toast - 標題及說明文字 -->\n                <div class="ded-toast-header">\n                    <div class="ded-toast-header-message ded-toast-header-message-error">\n                        <Icon name="ErrorCircleIcon" size="20"></Icon>\n                        <Title themeColor="error" level="5">\n                            {{ args.title }}\n                        </Title>\n                    </div>\n                    <div class="ded-toast-header-action">\n                        <div @click="onAction">\n                            Action\n                        </div>\n                    </div>\n                </div>\n                <p class="ded-description">{{ args.content }}</p>\n            </div>\n\n            <div class="ded-toast ded-toast-border-info">\n                <!-- toast - 關閉按鈕 -->\n                <Button class="ded-close-button" variant="text" themeColor="neutral" @click="onClose">\n                    <Icon name="close" size="20"></Icon>\n                </Button>\n                <!-- toast - 標題及說明文字 -->\n                <div class="ded-toast-header">\n                    <div class="ded-toast-header-message ded-toast-header-message-info">\n                        <Icon name="InfoCircleIcon" size="20"></Icon>\n                        <Title themeColor="info" level="5">\n                            {{ args.title }}\n                        </Title>\n                    </div>\n                    <div class="ded-toast-header-action">\n                        <div @click="onAction">\n                            Action\n                        </div>\n                    </div>\n                </div>\n                <p class="ded-description">{{ args.content }}</p>\n            </div>\n\n            <div class="ded-toast ded-toast-border-neutral">\n                <!-- toast - 關閉按鈕 -->\n                <Button class="ded-close-button" variant="text" themeColor="neutral" @click="onClose">\n                    <Icon name="close" size="20"></Icon>\n                </Button>\n                <!-- toast - 標題及說明文字 -->\n                <div class="ded-toast-header">\n                    <div class="ded-toast-header-message ded-toast-header-message-neutral">\n                        <Icon name="DisableCircleIcon" size="20"></Icon>\n                        <Title themeColor="neutral" level="5">\n                            {{ args.title }}\n                        </Title>\n                    </div>\n                    <div class="ded-toast-header-action">\n                        <div @click="onAction">\n                            Action\n                        </div>\n                    </div>\n                </div>\n                <p class="ded-description">{{ args.content }}</p>\n            </div>\n        `\n  }),\n  parameters: {\n    controls: {\n      // include: [\'themeColor\', \'label\', \'value\', \'name\' ],\n    },\n    docs: {\n      source: {\n        transform: (src, storyContext) => {\n          const {\n            args\n          } = storyContext;\n          return [`<Toast`, `    v-for="toast in toasts"`, `    :key="toast.id"`, `    themeColor="success"`, `    :title="${args.title}"`, `    :content="${args.content}"`, `    prefix="SuccessCircleIcon"`, `    :duration="${args.duration}"`, `    className="${args.className}"`, `    @close="remove(toast.id)"`, `  >`, `    <template #action>`, `       <div>Action</div>`, `    </template>`, `</Toast>`, `<Button`, `    themeColor="primary"`, `    variant="filled"`, `    radius="4px"`, `    @click="showToast"`, `>`, `    Toast Trigger`, `</Button>`, `<Toast`, `    v-for="toast in toasts"`, `    :key="toast.id"`, `    themeColor="warning"`, `    :title="${args.title}"`, `    :content="${args.content}"`, `    prefix="WarningCircleIcon"`, `    :duration="${args.duration}"`, `    className="${args.className}"`, `    @close="remove(toast.id)"`, `  >`, `    <template #action>`, `       <div>Action</div>`, `    </template>`, `</Toast>`, `<Button`, `    themeColor="primary"`, `    variant="filled"`, `    radius="4px"`, `    @click="showToast"`, `>`, `    Toast Trigger`, `</Button>`, `<Toast`, `    v-for="toast in toasts"`, `    :key="toast.id"`, `    themeColor="error"`, `    :title="${args.title}"`, `    :content="${args.content}"`, `    prefix="ErrorCircleIcon"`, `    :duration="${args.duration}"`, `    className="${args.className}"`, `    @close="remove(toast.id)"`, `  >`, `    <template #action>`, `       <div>Action</div>`, `    </template>`, `</Toast>`, `<Button`, `    themeColor="primary"`, `    variant="filled"`, `    radius="4px"`, `    @click="showToast"`, `>`, `    Toast Trigger`, `</Button>`, `<Toast`, `    v-for="toast in toasts"`, `    :key="toast.id"`, `    themeColor="info"`, `    :title="${args.title}"`, `    :content="${args.content}"`, `    prefix="InfoCircleIcon"`, `    :duration="${args.duration}"`, `    className="${args.className}"`, `    @close="remove(toast.id)"`, `  >`, `    <template #action>`, `       <div>Action</div>`, `    </template>`, `</Toast>`, `<Button`, `    themeColor="primary"`, `    variant="filled"`, `    radius="4px"`, `    @click="showToast"`, `>`, `    Toast Trigger`, `</Button>`, `<Toast`, `    v-for="toast in toasts"`, `    :key="toast.id"`, `    themeColor="neutral"`, `    :title="${args.title}"`, `    :content="${args.content}"`, `    prefix="DisableCircleIcon"`, `    :duration="${args.duration}"`, `    className="${args.className}"`, `    @close="remove(toast.id)"`, `  >`, `    <template #action>`, `       <div>Action</div>`, `    </template>`, `</Toast>`, `<Button`, `    themeColor="primary"`, `    variant="filled"`, `    radius="4px"`, `    @click="showToast"`, `>`, `    Toast Trigger`, `</Button>`, \'\', \'<script setup>\', \'  import { useToast } from "@/path/to/useToast";\', \'\', \'  const { add, toasts, remove } = useToast();\', \'\', \'  const showToast = () => {\', \'    add({\', `      themeColor: "${args.themeColor}",`, `      title: "${args.title}",`, `      content: "${args.content}",`, \'    });\', \'  };\', \'<\/script>\'].join(\'\\n\').trim();\n        }\n      }\n    }\n  }\n}',...(x=(B=m.parameters)==null?void 0:B.docs)==null?void 0:x.source}}};var k,w,N;u.parameters={...u.parameters,docs:{...(k=u.parameters)==null?void 0:k.docs,source:{originalSource:`{
  name: "互動模式",
  args: {
    themeColor: "success",
    title: "Notification Title ",
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
                @close="remove(toast.id)"
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
    },
    docs: {
      source: {
        transform: (src, storyContext) => {
          const {
            args
          } = storyContext;
          return ['<template>', \`  <Toast\`, \`    v-for="toast in toasts"\`, \`    :key="toast.id"\`, \`    :themeColor="toast.themeColor"\`, \`    :title="toast.title"\`, \`    :content="toast.content"\`, \`    :prefix="\${args.prefix}"\`, \`    :duration="\${args.duration}"\`, \`    :className="\${args.className}"\`, \`    @close="remove(toast.id)"\`, \`  >\`, \`    <template #action>\`, \`       <div>Action</div>\`, \`    </template>\`, \`  </Toast>\`, \`  <Button\`, \`    themeColor="primary"\`, \`    variant="filled"\`, \`    radius="4px"\`, \`    @click="showToast"\`, \`  >\`, \`    Toast Trigger\`, \`  </Button>\`, '</template>', '', '<script setup>', '  import { useToast } from "@/path/to/useToast";', '', '  const { add, toasts, remove } = useToast();', '', '  const showToast = () => {', '    add({', \`      themeColor: "\${args.themeColor}",\`, \`      title: "\${args.title}",\`, \`      content: "\${args.content}",\`, '    });', '  };', '<\/script>'].join('\\n').trim();
        }
      }
    }
  }
}`,...(N=(w=u.parameters)==null?void 0:w.docs)==null?void 0:N.source}}};const et=["ToastDefault","ToastTotal","ToastInterAction"];export{d as ToastDefault,u as ToastInterAction,m as ToastTotal,et as __namedExportsOrder,tt as default};

import{f as k,j as S,E as z,C as E,e as r,b as l,D as T,r as D,t as h,n as W,T as V,o as j,q as F,c as U}from"./vue.esm-bundler-D-gFHCZh.js";import{_ as i}from"./Icon-BhqjPbyE.js";import{_ as v}from"./Button-00exNB20.js";import{_ as C}from"./Title-DhXiKbIf.js";import{_ as N}from"./StatusIndicator-Mzs-eovb.js";import"./iframe-Bd5YQskO.js";import"../sb-preview/runtime.js";const p=k([]),M=e=>{p.value=p.value.filter(o=>o.id!==e)},q=e=>{const o=Date.now(),t={...e,id:o};p.value.push(t)},H=()=>({add:q,remove:M,toasts:p}),L={class:"ded-toast-header"},O={class:"ded-toast-header-message"},G={class:"ded-toast-header-action"},J={class:"ded-description"},a={__name:"Toast",props:{themeColor:{type:String,validator:e=>["primary","secondary","neutral","info","success","warning","error"].includes(e)},title:{type:String},content:{type:String},prefix:{type:String,default:""},duration:{type:Number,default:3e3},className:{type:String,default:""}},emits:["close"],setup(e,{emit:o}){const t=o,n=e,c=()=>{t("close")};let s=k(null);const _=()=>{s.value&&clearTimeout(s.value),s.value=setTimeout(()=>{c()},n.duration)};return S(()=>{_()}),z(()=>{s.value&&clearTimeout(s.value)}),(b,K)=>(j(),E(V,{to:"#toast"},[r("div",{class:W(["ded-toast",[`ded-toast-border-${n.themeColor}`,n.className]])},[l(v,{class:"ded-close-button",variant:"text",themeColor:"neutral",onClick:c},{default:T(()=>[l(i,{name:"close",size:"20"})]),_:1}),r("div",L,[r("div",O,[l(i,{name:n.prefix,size:"20"},null,8,["name"]),l(C,{themeColor:n.themeColor,level:"5"},{default:T(()=>[F(h(n.title),1)]),_:1},8,["themeColor"])]),r("div",G,[D(b.$slots,"action")])]),r("p",J,h(n.content),1)],2)]))}};a.__docgenInfo={exportName:"default",displayName:"Toast",description:"",tags:{},props:[{name:"themeColor",type:{name:"string"},values:["primary","secondary","neutral","info","success","warning","error"]},{name:"title",type:{name:"string"}},{name:"content",type:{name:"string"}},{name:"prefix",type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"duration",type:{name:"number"},defaultValue:{func:!1,value:"3000"}},{name:"className",type:{name:"string"},defaultValue:{func:!1,value:'""'}}],events:[{name:"close"}],slots:[{name:"action"}],sourceFiles:["/Users/auouser/Desktop/Work_Space/DED-WDS_VUE/libs/src/ui/element/Toast/Toast.vue"]};const et={components:{Icon:i,Toast:a},title:"Component/Toast",component:a,tags:["autodocs"],argTypes:{themeColor:{description:"主題顏色",control:{type:"select"},options:["primary","secondary","neutral","info","success","warning","error"],table:{type:{summary:"primary | secondary | neutral | info | success | warning | error"}}},title:{description:"內容",control:{type:"text"}},content:{description:"說明文字",control:{type:"text"}},prefix:{description:"前綴",control:{type:"select",labels:{"":"none",InfoCircleIcon:"InfoCircleIcon",SuccessCircleIcon:"SuccessCircleIcon",WarningCircleIcon:"WarningCircleIcon",ErrorCircleIcon:"ErrorCircleIcon"}},options:["","InfoCircleIcon","SuccessCircleIcon","WarningCircleIcon","ErrorCircleIcon"]},duration:{description:"持續時間",control:{type:"range",min:500,max:5e3,step:100}},className:{description:"客製化樣式",control:{type:"text"}},close:{description:"關閉事件",table:{category:"Events",type:{summary:"emits"}}},action:{description:"Action slot",control:{type:"text"},table:{type:{summary:"Vue Component | HTML"}}}},parameters:{docs:{title:"Toast",description:{component:"Toast 組件的呈現及說明。"}}}},d={name:"預設項目",args:{themeColor:"success",title:"Title",content:"Content",prefix:"ErrorCircleIcon",duration:5e3,className:"",action:'<div @click="onAction">Action</div>'},render:e=>({components:{Toast:a,Button:v,Title:C,StatusIndicator:N,Icon:i},setup(){const o=()=>{window.alert("Close")},t=U(()=>`ded-toast-border-${e.themeColor}`);return{args:e,onClose:o,toastBorderClass:t,onAction:()=>{window.alert("Action")}}},template:`
            <div class="ded-toast" :class="toastBorderClass">
                <!-- toast - 關閉按鈕 -->
                <Button class="ded-close-button" variant="text" themeColor="neutral" @click="onClose">
                    <Icon name="close" size="20"></Icon>
                </Button>
                <div class="ded-toast-header">
                    <div class="ded-toast-header-message">
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
`).trim()}}}}},m={name:"預設項目",args:{title:"Title",content:"Content",duration:5e3,className:""},render:e=>({components:{Toast:a,Button:v,Title:C,StatusIndicator:N,Icon:i},setup(){return{args:e,onClose:()=>{window.alert("Close")},onAction:()=>{window.alert("Action")}}},template:`
            <div class="ded-toast ded-toast-border-success">
                <!-- toast - 關閉按鈕 -->
                <Button class="ded-close-button" variant="text" themeColor="neutral" @click="onClose">
                    <Icon name="close" size="20"></Icon>
                </Button>
                <!-- toast - 標題及說明文字 -->
                <div class="ded-toast-header">
                    <div class="ded-toast-header-message">
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
                    <div class="ded-toast-header-message">
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
                    <div class="ded-toast-header-message">
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
                    <div class="ded-toast-header-message">
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
        `}),parameters:{controls:{},docs:{source:{transform:(e,o)=>{const{args:t}=o;return["<Toast",'    v-for="toast in toasts"','    :key="toast.id"','    themeColor="success"',`    :title="${t.title}"`,`    :content="${t.content}"`,'    prefix="SuccessCircleIcon"',`    :duration="${t.duration}"`,`    className="${t.className}"`,'    @close="remove(toast.id)"',"  >","    <template #action>","       <div>Action</div>","    </template>","</Toast>","<Button",'    themeColor="primary"','    variant="filled"','    radius="4px"','    @click="showToast"',">","    Toast Trigger","</Button>","<Toast",'    v-for="toast in toasts"','    :key="toast.id"','    themeColor="warning"',`    :title="${t.title}"`,`    :content="${t.content}"`,'    prefix="WarningCircleIcon"',`    :duration="${t.duration}"`,`    className="${t.className}"`,'    @close="remove(toast.id)"',"  >","    <template #action>","       <div>Action</div>","    </template>","</Toast>","<Button",'    themeColor="primary"','    variant="filled"','    radius="4px"','    @click="showToast"',">","    Toast Trigger","</Button>","<Toast",'    v-for="toast in toasts"','    :key="toast.id"','    themeColor="error"',`    :title="${t.title}"`,`    :content="${t.content}"`,'    prefix="ErrorCircleIcon"',`    :duration="${t.duration}"`,`    className="${t.className}"`,'    @close="remove(toast.id)"',"  >","    <template #action>","       <div>Action</div>","    </template>","</Toast>","<Button",'    themeColor="primary"','    variant="filled"','    radius="4px"','    @click="showToast"',">","    Toast Trigger","</Button>","<Toast",'    v-for="toast in toasts"','    :key="toast.id"','    themeColor="info"',`    :title="${t.title}"`,`    :content="${t.content}"`,'    prefix="InfoCircleIcon"',`    :duration="${t.duration}"`,`    className="${t.className}"`,'    @close="remove(toast.id)"',"  >","    <template #action>","       <div>Action</div>","    </template>","</Toast>","<Button",'    themeColor="primary"','    variant="filled"','    radius="4px"','    @click="showToast"',">","    Toast Trigger","</Button>","","<script setup>",'  import { useToast } from "@/path/to/useToast";',"","  const { add, toasts, remove } = useToast();","","  const showToast = () => {","    add({",`      themeColor: "${t.themeColor}",`,`      title: "${t.title}",`,`      content: "${t.content}",`,"    });","  };","<\/script>"].join(`
`).trim()}}}}},u={name:"互動模式",args:{themeColor:"success",title:"Title",content:"Content",prefix:"SuccessCircleIcon",duration:5e3,className:""},render:e=>({components:{Toast:a,Button:v},setup(){const{add:o,toasts:t,remove:n}=H();return{args:e,toasts:t,remove:n,showToast:()=>{o({themeColor:e.themeColor,title:e.title,content:e.content})},onAction:()=>{window.alert("Action")}}},template:`
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
`).trim()}}}}};var g,f,I;d.parameters={...d.parameters,docs:{...(g=d.parameters)==null?void 0:g.docs,source:{originalSource:`{
  name: "預設項目",
  args: {
    themeColor: "success",
    title: "Title",
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
      const onAction = () => {
        window.alert('Action');
      };
      return {
        args,
        onClose,
        toastBorderClass,
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
                    <div class="ded-toast-header-message">
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
}`,...(I=(f=d.parameters)==null?void 0:f.docs)==null?void 0:I.source}}};var A,$,y;m.parameters={...m.parameters,docs:{...(A=m.parameters)==null?void 0:A.docs,source:{originalSource:'{\n  name: "預設項目",\n  args: {\n    title: "Title",\n    content: "Content",\n    duration: 5000,\n    className: ""\n  },\n  render: args => ({\n    components: {\n      Toast,\n      Button,\n      Title,\n      StatusIndicator,\n      Icon\n    },\n    setup() {\n      const onClose = () => {\n        window.alert(\'Close\');\n      };\n      const onAction = () => {\n        window.alert(\'Action\');\n      };\n      return {\n        args,\n        onClose,\n        onAction\n      };\n    },\n    template: `\n            <div class="ded-toast ded-toast-border-success">\n                <!-- toast - 關閉按鈕 -->\n                <Button class="ded-close-button" variant="text" themeColor="neutral" @click="onClose">\n                    <Icon name="close" size="20"></Icon>\n                </Button>\n                <!-- toast - 標題及說明文字 -->\n                <div class="ded-toast-header">\n                    <div class="ded-toast-header-message">\n                        <Icon name="SuccessCircleIcon" size="20"></Icon>\n                        <Title themeColor="success" level="5">\n                            {{ args.title }}\n                        </Title>\n                    </div>\n                    <div class="ded-toast-header-action">\n                        <div @click="onAction">\n                            Action\n                        </div>\n                    </div>\n                </div>\n                <p class="ded-description">{{ args.content }}</p>\n            </div>\n\n            <div class="ded-toast ded-toast-border-warning">\n                <!-- toast - 關閉按鈕 -->\n                <Button class="ded-close-button" variant="text" themeColor="neutral" @click="onClose">\n                    <Icon name="close" size="20"></Icon>\n                </Button>\n                <!-- toast - 標題及說明文字 -->\n                <div class="ded-toast-header">\n                    <div class="ded-toast-header-message">\n                        <Icon name="WarningCircleIcon" size="20"></Icon>\n                        <Title themeColor="warning" level="5">\n                            {{ args.title }}\n                        </Title>\n                    </div>\n                    <div class="ded-toast-header-action">\n                        <div @click="onAction">\n                            Action\n                        </div>\n                    </div>\n                </div>\n                <p class="ded-description">{{ args.content }}</p>\n            </div>\n\n            <div class="ded-toast ded-toast-border-error">\n                <!-- toast - 關閉按鈕 -->\n                <Button class="ded-close-button" variant="text" themeColor="neutral" @click="onClose">\n                    <Icon name="close" size="20"></Icon>\n                </Button>\n                <!-- toast - 標題及說明文字 -->\n                <div class="ded-toast-header">\n                    <div class="ded-toast-header-message">\n                        <Icon name="ErrorCircleIcon" size="20"></Icon>\n                        <Title themeColor="error" level="5">\n                            {{ args.title }}\n                        </Title>\n                    </div>\n                    <div class="ded-toast-header-action">\n                        <div @click="onAction">\n                            Action\n                        </div>\n                    </div>\n                </div>\n                <p class="ded-description">{{ args.content }}</p>\n            </div>\n\n            <div class="ded-toast ded-toast-border-info">\n                <!-- toast - 關閉按鈕 -->\n                <Button class="ded-close-button" variant="text" themeColor="neutral" @click="onClose">\n                    <Icon name="close" size="20"></Icon>\n                </Button>\n                <!-- toast - 標題及說明文字 -->\n                <div class="ded-toast-header">\n                    <div class="ded-toast-header-message">\n                        <Icon name="InfoCircleIcon" size="20"></Icon>\n                        <Title themeColor="info" level="5">\n                            {{ args.title }}\n                        </Title>\n                    </div>\n                    <div class="ded-toast-header-action">\n                        <div @click="onAction">\n                            Action\n                        </div>\n                    </div>\n                </div>\n                <p class="ded-description">{{ args.content }}</p>\n            </div>\n        `\n  }),\n  parameters: {\n    controls: {\n      // include: [\'themeColor\', \'label\', \'value\', \'name\' ],\n    },\n    docs: {\n      source: {\n        transform: (src, storyContext) => {\n          const {\n            args\n          } = storyContext;\n          return [`<Toast`, `    v-for="toast in toasts"`, `    :key="toast.id"`, `    themeColor="success"`, `    :title="${args.title}"`, `    :content="${args.content}"`, `    prefix="SuccessCircleIcon"`, `    :duration="${args.duration}"`, `    className="${args.className}"`, `    @close="remove(toast.id)"`, `  >`, `    <template #action>`, `       <div>Action</div>`, `    </template>`, `</Toast>`, `<Button`, `    themeColor="primary"`, `    variant="filled"`, `    radius="4px"`, `    @click="showToast"`, `>`, `    Toast Trigger`, `</Button>`, `<Toast`, `    v-for="toast in toasts"`, `    :key="toast.id"`, `    themeColor="warning"`, `    :title="${args.title}"`, `    :content="${args.content}"`, `    prefix="WarningCircleIcon"`, `    :duration="${args.duration}"`, `    className="${args.className}"`, `    @close="remove(toast.id)"`, `  >`, `    <template #action>`, `       <div>Action</div>`, `    </template>`, `</Toast>`, `<Button`, `    themeColor="primary"`, `    variant="filled"`, `    radius="4px"`, `    @click="showToast"`, `>`, `    Toast Trigger`, `</Button>`, `<Toast`, `    v-for="toast in toasts"`, `    :key="toast.id"`, `    themeColor="error"`, `    :title="${args.title}"`, `    :content="${args.content}"`, `    prefix="ErrorCircleIcon"`, `    :duration="${args.duration}"`, `    className="${args.className}"`, `    @close="remove(toast.id)"`, `  >`, `    <template #action>`, `       <div>Action</div>`, `    </template>`, `</Toast>`, `<Button`, `    themeColor="primary"`, `    variant="filled"`, `    radius="4px"`, `    @click="showToast"`, `>`, `    Toast Trigger`, `</Button>`, `<Toast`, `    v-for="toast in toasts"`, `    :key="toast.id"`, `    themeColor="info"`, `    :title="${args.title}"`, `    :content="${args.content}"`, `    prefix="InfoCircleIcon"`, `    :duration="${args.duration}"`, `    className="${args.className}"`, `    @close="remove(toast.id)"`, `  >`, `    <template #action>`, `       <div>Action</div>`, `    </template>`, `</Toast>`, `<Button`, `    themeColor="primary"`, `    variant="filled"`, `    radius="4px"`, `    @click="showToast"`, `>`, `    Toast Trigger`, `</Button>`, \'\', \'<script setup>\', \'  import { useToast } from "@/path/to/useToast";\', \'\', \'  const { add, toasts, remove } = useToast();\', \'\', \'  const showToast = () => {\', \'    add({\', `      themeColor: "${args.themeColor}",`, `      title: "${args.title}",`, `      content: "${args.content}",`, \'    });\', \'  };\', \'<\/script>\'].join(\'\\n\').trim();\n        }\n      }\n    }\n  }\n}',...(y=($=m.parameters)==null?void 0:$.docs)==null?void 0:y.source}}};var x,B,w;u.parameters={...u.parameters,docs:{...(x=u.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(w=(B=u.parameters)==null?void 0:B.docs)==null?void 0:w.source}}};const ot=["ToastDefault","ToastTotal","ToastInterAction"];export{d as ToastDefault,u as ToastInterAction,m as ToastTotal,ot as __namedExportsOrder,et as default};

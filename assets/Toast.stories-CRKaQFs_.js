import{k as N,q as D,s as E,j as V,a as r,b as l,d as g,n as h,r as W,t as T,T as j,o as M,f as H,g as f}from"./vue.esm-bundler-qCK_iSPY.js";import{_ as i}from"./Icon-BjVA2wzQ.js";import{_ as p}from"./Button-B4oQyK8P.js";import{_ as C}from"./Title-Bap0zsXG.js";import{_ as b}from"./StatusIndicator-4vtVLIw7.js";import"./iframe-BVAqVFki.js";import"../sb-preview/runtime.js";const v=N([]),F=e=>{v.value=v.value.filter(o=>o.id!==e)},q=e=>{const o=Date.now(),t={...e,id:o};v.value.push(t)},U=()=>({add:q,remove:F,toasts:v}),L={class:"ded-toast-header"},O={class:"ded-toast-header-action"},G={class:"ded-description"},a={__name:"Toast",props:{themeColor:{type:String,validator:e=>["primary","secondary","neutral","info","success","warning","error"].includes(e),default:"primary"},title:{type:String,required:!0},content:{type:String,default:"Content"},prefix:{type:String,default:""},duration:{type:Number,default:1e3},className:{type:String,default:""}},emits:["onClose"],setup(e,{emit:o}){const t=o,s=e,c=()=>{t("onClose")};let n=N(null);const _=()=>{n.value&&clearTimeout(n.value),n.value=setTimeout(()=>{c()},s.duration)};return D(()=>{_()}),E(()=>{n.value&&clearTimeout(n.value)}),(z,J)=>(M(),V(j,{to:"#toast"},[r("div",{class:h(["ded-toast",[`ded-toast-border-${s.themeColor}`,s.className]])},[l(p,{class:"ded-close-button",variant:"text",themeColor:"neutral",onClick:c},{default:g(()=>[l(i,{name:"SvgClose",size:"20"})]),_:1}),r("div",L,[r("div",{class:h(["ded-toast-header-message",`ded-toast-header-message-${s.themeColor}`])},[l(i,{name:s.prefix,size:"20"},null,8,["name"]),l(C,{themeColor:s.themeColor,level:"5"},{default:g(()=>[H(T(s.title),1)]),_:1},8,["themeColor"])],2),r("div",O,[W(z.$slots,"action")])]),r("p",G,T(s.content),1)],2)]))}};a.__docgenInfo={exportName:"default",displayName:"Toast",description:"",tags:{},props:[{name:"themeColor",type:{name:"string"},defaultValue:{func:!1,value:'"primary"'},values:["primary","secondary","neutral","info","success","warning","error"]},{name:"title",type:{name:"string"},required:!0},{name:"content",type:{name:"string"},defaultValue:{func:!1,value:'"Content"'}},{name:"prefix",type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"duration",type:{name:"number"},defaultValue:{func:!1,value:"1000"}},{name:"className",type:{name:"string"},defaultValue:{func:!1,value:'""'}}],events:[{name:"onClose"}],slots:[{name:"action"}],sourceFiles:["/Users/auouser/Desktop/Work_Space/DED-WDS_VUE/libs/src/ui/element/Toast/Toast.vue"]};const tt={components:{Icon:i,Toast:a},title:"Component/Toast",component:a,tags:["autodocs"],argTypes:{themeColor:{description:"主題顏色",control:{type:"select"},options:["primary","secondary","neutral","info","success","warning","error"],table:{type:{summary:"primary | secondary | neutral | info | success | warning | error"}}},title:{description:"內容",control:{type:"text"}},content:{description:"說明文字",control:{type:"text"}},prefix:{description:"前綴元素",control:{type:"select",labels:{"":"none",SvgInfoCircle:"SvgInfoCircle",SvgSuccessCircle:"SvgSuccessCircle",SvgWarningTri:"SvgWarningTri",SvgErrorCircle:"SvgErrorCircle",SvgDisableCircle:"SvgDisableCircle"}},options:["","SvgInfoCircle","SvgSuccessCircle","SvgWarningTri","SvgErrorCircle","SvgDisableCircle"]},duration:{description:"持續時間",control:{type:"range",min:500,max:5e3,step:100}},className:{description:"客製化樣式",control:{type:"text"}},onClose:{description:"關閉事件",table:{category:"EVENTS",type:{summary:"emits"}}},action:{description:"操作",control:{type:"text"},table:{type:{summary:"Vue Component | HTML"}}}},parameters:{docs:{title:"Toast",description:{component:"通知訊息組件的呈現及說明。"}}}},d={name:"預設項目",args:{themeColor:"success",title:"Notification Title",content:"Content",prefix:"SvgSuccessCircle",duration:500,className:"",action:'<div @click="onAction">Action</div>'},render:e=>({components:{Toast:a,Button:p,Title:C,StatusIndicator:b,Icon:i},setup(){const o=()=>{window.alert("Close")},t=f(()=>`ded-toast-border-${e.themeColor}`),s=f(()=>`ded-toast-header-message-${e.themeColor}`);return{args:e,onClose:o,toastBorderClass:t,toastHeaderMsgThemeClass:s,onAction:()=>{window.alert("Action")}}},template:`
            <div class="ded-toast" :class="toastBorderClass">
                <!-- toast - 關閉按鈕 -->
                <Button class="ded-close-button" variant="text" themeColor="neutral" @click="onClose">
                    <Icon name="SvgClose" size="20"></Icon>
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
        `}),parameters:{controls:{},docs:{source:{transform:(e,o)=>{const{args:t}=o;return["<template>","  <Toast",'    v-for="toast in toasts"','    :key="toast.id"','    :themeColor="toast.themeColor"',`    :title="${t.title}"`,`    :content="${t.content}"`,`    :prefix="${t.prefix}"`,`    :duration="${t.duration}"`,`    :className="${t.className}"`,'    @onClose="remove(toast.id)"',"  >","    <template #action>","       <div>Action</div>","    </template>","  </Toast>","  <Button",'    themeColor="primary"','    variant="filled"','    radius="md"','    @click="showToast"',"  >","    Toast Trigger","  </Button>","</template>","","<script setup>",'  import { useToast } from "@/path/to/useToast";',"","  const { add, toasts, remove } = useToast();","","  const showToast = () => {","    add({",`      themeColor: "${t.themeColor}",`,`      title: "${t.title}",`,`      content: "${t.content}",`,"    });","  };","<\/script>"].join(`
`).trim()}}}}},m={name:"訊息類型",args:{title:"Notification Title ",content:"Content",duration:5e3,className:""},render:e=>({components:{Toast:a,Button:p,Title:C,StatusIndicator:b,Icon:i},setup(){return{args:e,onClose:()=>{window.alert("Close")},onAction:()=>{window.alert("Action")}}},template:`
            <div class="ded-toast ded-toast-border-success">
                <!-- toast - 關閉按鈕 -->
                <Button class="ded-close-button" variant="text" themeColor="neutral" @click="onClose">
                    <Icon name="SvgClose" size="20"></Icon>
                </Button>
                <!-- toast - 標題及說明文字 -->
                <div class="ded-toast-header">
                    <div class="ded-toast-header-message ded-toast-header-message-success">
                        <Icon name="SvgSuccessCircle" size="20"></Icon>
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
                    <Icon name="SvgClose" size="20"></Icon>
                </Button>
                <!-- toast - 標題及說明文字 -->
                <div class="ded-toast-header">
                    <div class="ded-toast-header-message ded-toast-header-message-warning">
                        <Icon name="SvgWarningTri" size="20"></Icon>
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
                    <Icon name="SvgClose" size="20"></Icon>
                </Button>
                <!-- toast - 標題及說明文字 -->
                <div class="ded-toast-header">
                    <div class="ded-toast-header-message ded-toast-header-message-error">
                        <Icon name="SvgErrorCircle" size="20"></Icon>
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
                    <Icon name="SvgClose" size="20"></Icon>
                </Button>
                <!-- toast - 標題及說明文字 -->
                <div class="ded-toast-header">
                    <div class="ded-toast-header-message ded-toast-header-message-info">
                        <Icon name="SvgInfoCircle" size="20"></Icon>
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
                    <Icon name="SvgClose" size="20"></Icon>
                </Button>
                <!-- toast - 標題及說明文字 -->
                <div class="ded-toast-header">
                    <div class="ded-toast-header-message ded-toast-header-message-neutral">
                        <Icon name="SvgDisableCircle" size="20"></Icon>
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
        `}),parameters:{controls:{exclude:["themeColor","prefix","action","onClose"]},docs:{source:{transform:(e,o)=>{const{args:t}=o;return["<Toast",'    v-for="toast in toasts"','    :key="toast.id"','    themeColor="success"',`    :title="${t.title}"`,`    :content="${t.content}"`,'    prefix="SuccessCircleIcon"',`    :duration="${t.duration}"`,`    className="${t.className}"`,'    @onClose="remove(toast.id)"',"  >","    <template #action>","       <div>Action</div>","    </template>","</Toast>","<Button",'    themeColor="primary"','    variant="filled"','    radius="4px"','    @click="showToast"',">","    Toast Trigger","</Button>","<Toast",'    v-for="toast in toasts"','    :key="toast.id"','    themeColor="warning"',`    :title="${t.title}"`,`    :content="${t.content}"`,'    prefix="WarningCircleIcon"',`    :duration="${t.duration}"`,`    className="${t.className}"`,'    @onClose="remove(toast.id)"',"  >","    <template #action>","       <div>Action</div>","    </template>","</Toast>","<Button",'    themeColor="primary"','    variant="filled"','    radius="4px"','    @click="showToast"',">","    Toast Trigger","</Button>","<Toast",'    v-for="toast in toasts"','    :key="toast.id"','    themeColor="error"',`    :title="${t.title}"`,`    :content="${t.content}"`,'    prefix="ErrorCircleIcon"',`    :duration="${t.duration}"`,`    className="${t.className}"`,'    @onClose="remove(toast.id)"',"  >","    <template #action>","       <div>Action</div>","    </template>","</Toast>","<Button",'    themeColor="primary"','    variant="filled"','    radius="4px"','    @click="showToast"',">","    Toast Trigger","</Button>","<Toast",'    v-for="toast in toasts"','    :key="toast.id"','    themeColor="info"',`    :title="${t.title}"`,`    :content="${t.content}"`,'    prefix="InfoCircleIcon"',`    :duration="${t.duration}"`,`    className="${t.className}"`,'    @onClose="remove(toast.id)"',"  >","    <template #action>","       <div>Action</div>","    </template>","</Toast>","<Button",'    themeColor="primary"','    variant="filled"','    radius="4px"','    @click="showToast"',">","    Toast Trigger","</Button>","<Toast",'    v-for="toast in toasts"','    :key="toast.id"','    themeColor="neutral"',`    :title="${t.title}"`,`    :content="${t.content}"`,'    prefix="DisableCircleIcon"',`    :duration="${t.duration}"`,`    className="${t.className}"`,'    @onClose="remove(toast.id)"',"  >","    <template #action>","       <div>Action</div>","    </template>","</Toast>","<Button",'    themeColor="primary"','    variant="filled"','    radius="4px"','    @click="showToast"',">","    Toast Trigger","</Button>","","<script setup>",'  import { useToast } from "@/path/to/useToast";',"","  const { add, toasts, remove } = useToast();","","  const showToast = () => {","    add({",`      themeColor: "${t.themeColor}",`,`      title: "${t.title}",`,`      content: "${t.content}",`,"    });","  };","<\/script>"].join(`
`).trim()}}}}},u={name:"互動模式",args:{themeColor:"success",title:"Notification Title ",content:"Content",prefix:"SvgSuccessCircle",duration:5e3,className:"",action:'<div @click="onAction">Action</div>'},render:e=>({components:{Toast:a,Button:p},setup(){const{add:o,toasts:t,remove:s}=U();return{args:e,toasts:t,remove:s,showToast:()=>{o({themeColor:e.themeColor,title:e.title,content:e.content})},onAction:()=>{window.alert("Action")}}},template:`
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
        `}),parameters:{controls:{exclude:["onClose"]},docs:{source:{transform:(e,o)=>{const{args:t}=o;return["<template>","  <Toast",'    v-for="toast in toasts"','    :key="toast.id"','    :themeColor="toast.themeColor"','    :title="toast.title"','    :content="toast.content"',`    :prefix="${t.prefix}"`,`    :duration="${t.duration}"`,`    :className="${t.className}"`,'    @onClose="remove(toast.id)"',"  >","    <template #action>","       <div>Action</div>","    </template>","  </Toast>","  <Button",'    themeColor="primary"','    variant="filled"','    radius="4px"','    @click="showToast"',"  >","    Toast Trigger","  </Button>","</template>","","<script setup>",'  import { useToast } from "@/path/to/useToast";',"","  const { add, toasts, remove } = useToast();","","  const showToast = () => {","    add({",`      themeColor: "${t.themeColor}",`,`      title: "${t.title}",`,`      content: "${t.content}",`,"    });","  };","<\/script>"].join(`
`).trim()}}}}};var A,$,x;d.parameters={...d.parameters,docs:{...(A=d.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
          return ['<template>', \`  <Toast\`, \`    v-for="toast in toasts"\`, \`    :key="toast.id"\`, \`    :themeColor="toast.themeColor"\`, \`    :title="\${args.title}"\`, \`    :content="\${args.content}"\`, \`    :prefix="\${args.prefix}"\`, \`    :duration="\${args.duration}"\`, \`    :className="\${args.className}"\`, \`    @onClose="remove(toast.id)"\`, \`  >\`, \`    <template #action>\`, \`       <div>Action</div>\`, \`    </template>\`, \`  </Toast>\`, \`  <Button\`, \`    themeColor="primary"\`, \`    variant="filled"\`, \`    radius="md"\`, \`    @click="showToast"\`, \`  >\`, \`    Toast Trigger\`, \`  </Button>\`, '</template>', '', '<script setup>', '  import { useToast } from "@/path/to/useToast";', '', '  const { add, toasts, remove } = useToast();', '', '  const showToast = () => {', '    add({', \`      themeColor: "\${args.themeColor}",\`, \`      title: "\${args.title}",\`, \`      content: "\${args.content}",\`, '    });', '  };', '<\/script>'].join('\\n').trim();
        }
      }
    }
  }
}`,...(x=($=d.parameters)==null?void 0:$.docs)==null?void 0:x.source}}};var y,I,B;m.parameters={...m.parameters,docs:{...(y=m.parameters)==null?void 0:y.docs,source:{originalSource:'{\n  name: "訊息類型",\n  args: {\n    title: "Notification Title ",\n    content: "Content",\n    duration: 5000,\n    className: ""\n  },\n  render: args => ({\n    components: {\n      Toast,\n      Button,\n      Title,\n      StatusIndicator,\n      Icon\n    },\n    setup() {\n      const onClose = () => {\n        window.alert(\'Close\');\n      };\n      const onAction = () => {\n        window.alert(\'Action\');\n      };\n      return {\n        args,\n        onClose,\n        onAction\n      };\n    },\n    template: `\n            <div class="ded-toast ded-toast-border-success">\n                <!-- toast - 關閉按鈕 -->\n                <Button class="ded-close-button" variant="text" themeColor="neutral" @click="onClose">\n                    <Icon name="SvgClose" size="20"></Icon>\n                </Button>\n                <!-- toast - 標題及說明文字 -->\n                <div class="ded-toast-header">\n                    <div class="ded-toast-header-message ded-toast-header-message-success">\n                        <Icon name="SvgSuccessCircle" size="20"></Icon>\n                        <Title themeColor="success" level="5">\n                            {{ args.title }}\n                        </Title>\n                    </div>\n                    <div class="ded-toast-header-action">\n                        <div @click="onAction">\n                            Action\n                        </div>\n                    </div>\n                </div>\n                <p class="ded-description">{{ args.content }}</p>\n            </div>\n\n            <div class="ded-toast ded-toast-border-warning">\n                <!-- toast - 關閉按鈕 -->\n                <Button class="ded-close-button" variant="text" themeColor="neutral" @click="onClose">\n                    <Icon name="SvgClose" size="20"></Icon>\n                </Button>\n                <!-- toast - 標題及說明文字 -->\n                <div class="ded-toast-header">\n                    <div class="ded-toast-header-message ded-toast-header-message-warning">\n                        <Icon name="SvgWarningTri" size="20"></Icon>\n                        <Title themeColor="warning" level="5">\n                            {{ args.title }}\n                        </Title>\n                    </div>\n                    <div class="ded-toast-header-action">\n                        <div @click="onAction">\n                            Action\n                        </div>\n                    </div>\n                </div>\n                <p class="ded-description">{{ args.content }}</p>\n            </div>\n\n            <div class="ded-toast ded-toast-border-error">\n                <!-- toast - 關閉按鈕 -->\n                <Button class="ded-close-button" variant="text" themeColor="neutral" @click="onClose">\n                    <Icon name="SvgClose" size="20"></Icon>\n                </Button>\n                <!-- toast - 標題及說明文字 -->\n                <div class="ded-toast-header">\n                    <div class="ded-toast-header-message ded-toast-header-message-error">\n                        <Icon name="SvgErrorCircle" size="20"></Icon>\n                        <Title themeColor="error" level="5">\n                            {{ args.title }}\n                        </Title>\n                    </div>\n                    <div class="ded-toast-header-action">\n                        <div @click="onAction">\n                            Action\n                        </div>\n                    </div>\n                </div>\n                <p class="ded-description">{{ args.content }}</p>\n            </div>\n\n            <div class="ded-toast ded-toast-border-info">\n                <!-- toast - 關閉按鈕 -->\n                <Button class="ded-close-button" variant="text" themeColor="neutral" @click="onClose">\n                    <Icon name="SvgClose" size="20"></Icon>\n                </Button>\n                <!-- toast - 標題及說明文字 -->\n                <div class="ded-toast-header">\n                    <div class="ded-toast-header-message ded-toast-header-message-info">\n                        <Icon name="SvgInfoCircle" size="20"></Icon>\n                        <Title themeColor="info" level="5">\n                            {{ args.title }}\n                        </Title>\n                    </div>\n                    <div class="ded-toast-header-action">\n                        <div @click="onAction">\n                            Action\n                        </div>\n                    </div>\n                </div>\n                <p class="ded-description">{{ args.content }}</p>\n            </div>\n\n            <div class="ded-toast ded-toast-border-neutral">\n                <!-- toast - 關閉按鈕 -->\n                <Button class="ded-close-button" variant="text" themeColor="neutral" @click="onClose">\n                    <Icon name="SvgClose" size="20"></Icon>\n                </Button>\n                <!-- toast - 標題及說明文字 -->\n                <div class="ded-toast-header">\n                    <div class="ded-toast-header-message ded-toast-header-message-neutral">\n                        <Icon name="SvgDisableCircle" size="20"></Icon>\n                        <Title themeColor="neutral" level="5">\n                            {{ args.title }}\n                        </Title>\n                    </div>\n                    <div class="ded-toast-header-action">\n                        <div @click="onAction">\n                            Action\n                        </div>\n                    </div>\n                </div>\n                <p class="ded-description">{{ args.content }}</p>\n            </div>\n        `\n  }),\n  parameters: {\n    controls: {\n      // include: [\'themeColor\', \'label\', \'value\', \'name\' ],\n      exclude: [\'themeColor\', \'prefix\', \'action\', \'onClose\']\n    },\n    docs: {\n      source: {\n        transform: (src, storyContext) => {\n          const {\n            args\n          } = storyContext;\n          return [`<Toast`, `    v-for="toast in toasts"`, `    :key="toast.id"`, `    themeColor="success"`, `    :title="${args.title}"`, `    :content="${args.content}"`, `    prefix="SuccessCircleIcon"`, `    :duration="${args.duration}"`, `    className="${args.className}"`, `    @onClose="remove(toast.id)"`, `  >`, `    <template #action>`, `       <div>Action</div>`, `    </template>`, `</Toast>`, `<Button`, `    themeColor="primary"`, `    variant="filled"`, `    radius="4px"`, `    @click="showToast"`, `>`, `    Toast Trigger`, `</Button>`, `<Toast`, `    v-for="toast in toasts"`, `    :key="toast.id"`, `    themeColor="warning"`, `    :title="${args.title}"`, `    :content="${args.content}"`, `    prefix="WarningCircleIcon"`, `    :duration="${args.duration}"`, `    className="${args.className}"`, `    @onClose="remove(toast.id)"`, `  >`, `    <template #action>`, `       <div>Action</div>`, `    </template>`, `</Toast>`, `<Button`, `    themeColor="primary"`, `    variant="filled"`, `    radius="4px"`, `    @click="showToast"`, `>`, `    Toast Trigger`, `</Button>`, `<Toast`, `    v-for="toast in toasts"`, `    :key="toast.id"`, `    themeColor="error"`, `    :title="${args.title}"`, `    :content="${args.content}"`, `    prefix="ErrorCircleIcon"`, `    :duration="${args.duration}"`, `    className="${args.className}"`, `    @onClose="remove(toast.id)"`, `  >`, `    <template #action>`, `       <div>Action</div>`, `    </template>`, `</Toast>`, `<Button`, `    themeColor="primary"`, `    variant="filled"`, `    radius="4px"`, `    @click="showToast"`, `>`, `    Toast Trigger`, `</Button>`, `<Toast`, `    v-for="toast in toasts"`, `    :key="toast.id"`, `    themeColor="info"`, `    :title="${args.title}"`, `    :content="${args.content}"`, `    prefix="InfoCircleIcon"`, `    :duration="${args.duration}"`, `    className="${args.className}"`, `    @onClose="remove(toast.id)"`, `  >`, `    <template #action>`, `       <div>Action</div>`, `    </template>`, `</Toast>`, `<Button`, `    themeColor="primary"`, `    variant="filled"`, `    radius="4px"`, `    @click="showToast"`, `>`, `    Toast Trigger`, `</Button>`, `<Toast`, `    v-for="toast in toasts"`, `    :key="toast.id"`, `    themeColor="neutral"`, `    :title="${args.title}"`, `    :content="${args.content}"`, `    prefix="DisableCircleIcon"`, `    :duration="${args.duration}"`, `    className="${args.className}"`, `    @onClose="remove(toast.id)"`, `  >`, `    <template #action>`, `       <div>Action</div>`, `    </template>`, `</Toast>`, `<Button`, `    themeColor="primary"`, `    variant="filled"`, `    radius="4px"`, `    @click="showToast"`, `>`, `    Toast Trigger`, `</Button>`, \'\', \'<script setup>\', \'  import { useToast } from "@/path/to/useToast";\', \'\', \'  const { add, toasts, remove } = useToast();\', \'\', \'  const showToast = () => {\', \'    add({\', `      themeColor: "${args.themeColor}",`, `      title: "${args.title}",`, `      content: "${args.content}",`, \'    });\', \'  };\', \'<\/script>\'].join(\'\\n\').trim();\n        }\n      }\n    }\n  }\n}',...(B=(I=m.parameters)==null?void 0:I.docs)==null?void 0:B.source}}};var S,k,w;u.parameters={...u.parameters,docs:{...(S=u.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
          return ['<template>', \`  <Toast\`, \`    v-for="toast in toasts"\`, \`    :key="toast.id"\`, \`    :themeColor="toast.themeColor"\`, \`    :title="toast.title"\`, \`    :content="toast.content"\`, \`    :prefix="\${args.prefix}"\`, \`    :duration="\${args.duration}"\`, \`    :className="\${args.className}"\`, \`    @onClose="remove(toast.id)"\`, \`  >\`, \`    <template #action>\`, \`       <div>Action</div>\`, \`    </template>\`, \`  </Toast>\`, \`  <Button\`, \`    themeColor="primary"\`, \`    variant="filled"\`, \`    radius="4px"\`, \`    @click="showToast"\`, \`  >\`, \`    Toast Trigger\`, \`  </Button>\`, '</template>', '', '<script setup>', '  import { useToast } from "@/path/to/useToast";', '', '  const { add, toasts, remove } = useToast();', '', '  const showToast = () => {', '    add({', \`      themeColor: "\${args.themeColor}",\`, \`      title: "\${args.title}",\`, \`      content: "\${args.content}",\`, '    });', '  };', '<\/script>'].join('\\n').trim();
        }
      }
    }
  }
}`,...(w=(k=u.parameters)==null?void 0:k.docs)==null?void 0:w.source}}};const et=["ToastDefault","ToastTotal","ToastInterAction"];export{d as ToastDefault,u as ToastInterAction,m as ToastTotal,et as __namedExportsOrder,tt as default};

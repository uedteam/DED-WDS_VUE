import{r as C,d as b,C as B,I as x,M as H,T as S,o as g,N as c,c as f,b as t,g as d,e as w,f as $,s as E}from"./vue.esm-bundler-qOdkfnRX.js";import{_ as y}from"./Button-Bd-tcIh9.js";import{_ as I}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./index-Bb4qSo10.js";import"./Icon-Dd3pkEjK.js";import"./iframe-Dllg10h5.js";import"../sb-preview/runtime.js";const r=C(!1),F=()=>({showDialogStatus:r,showDialog:()=>{r.value=!0},closeDialog:()=>{r.value=!1}}),N={class:"dialog-wrapper"},A={class:"dialog-container"},R={class:"dialog-header"},T={class:"dialog-body"},V={class:"dialog-footer"},l={__name:"Dialog",props:{},setup(o){const e=F();return(a,n)=>(g(),b(S,{to:"#dialog"},[B(H,{name:"dialog"},{default:x(()=>[c(e).showDialogStatus.value?(g(),f("div",{key:0,class:"dialog-mask",onClick:n[0]||(n[0]=k=>c(e).closeDialog())},[t("div",N,[t("div",A,[t("div",R,[d(a.$slots,"dialogHeader")]),t("div",T,[d(a.$slots,"dialogBody")]),t("div",V,[d(a.$slots,"dialogFooter")])])])])):w("",!0)]),_:3})]))}};l.__docgenInfo={exportName:"default",displayName:"Dialog",description:"",tags:{},slots:[{name:"dialogHeader"},{name:"dialogBody"},{name:"dialogFooter"}],sourceFiles:["/Users/jony_worker/Documents/90_外部檔案/upstream/DED-WDS_VUE/libs/src/ui/element/Dialog/Dialog.vue"]};const j={class:"fakeContent",role:"presentation","aria-hidden":"true"},U={class:"fakeContent--text"},_={__name:"FakeContent",props:{height:{type:String}},setup(o){const e=o,a=$(()=>e.height?`${e.height}px`:"auto");return(n,k)=>(g(),f("div",{style:E({height:a.value})},[t("div",j,[t("b",U,[d(n.$slots,"default",{},void 0,!0)])])],4))}},z=I(_,[["__scopeId","data-v-c5de07b7"]]);_.__docgenInfo={exportName:"default",displayName:"FakeContent",description:"",tags:{},props:[{name:"height",type:{name:"string"}}],slots:[{name:"default"}],sourceFiles:["/Users/jony_worker/Documents/90_外部檔案/upstream/DED-WDS_VUE/libs/src/ui/utility/FakeContent/FakeContent.vue"]};const K={components:{Dialog:l},title:"Design System/Dialog",component:l,tags:["autodocs"],argTypes:{dialogHeader:{description:"Dialog 的 header 插槽，適合顯示主題或重要信息，支持 HTML 和文字內容。",control:{type:"text"}},dialogBody:{description:"Dialog 的 body 插槽，用於顯示主要內容。可包含文字、圖片、列表或任何其他組件。",control:{type:"text"}},dialogFooter:{description:"Dialog 的 footer 插槽，通常用於顯示按鈕或其他結尾內容，如確認、取消或其他操作。",control:{type:"text"}}},parameters:{docs:{title:"Dialog",description:{component:"Dialog 組件的呈現及說明。"}}}},i={name:"Dialog 觸發樣式",args:{dialogHeader:'<div class="title title-level-2 title-undefined">Replace Image?</div>',dialogBody:'<p>A file named "example.png" already exist! Do you what to replace it?</p>',dialogFooter:'<div style="display: flex; justify-content: flex-end; gap: 16px"><button class="button button-text button-fit button-text-error" @click="dialog.closeDialog()" >Cancel</button><button class="button button-contained button-fit button-contained-error" @click="dialog.closeDialog()">Replace</button></div>'},render:o=>({components:{Dialog:l,Button:y},setup(){const e=F();return{args:o,dialog:e}},template:`
            <Dialog>
                <template #dialogHeader>
                    <div v-html="args.dialogHeader"></div>
                </template>
                <template #dialogBody>
                    <div v-html="args.dialogBody"></div>
                </template>
                <template #dialogFooter>
                    <div v-html="args.dialogFooter"></div>
                </template>
            </Dialog>
            
            <!-- Dialog 觸發器 -->
            <Button themeColor="error" 
                    size="medium" 
                    prefix="replace" 
                    @click="dialog.showDialog">
                Replace Image
            </Button>
        `}),parameters:{controls:{}}},s={name:"Dialog 容器結構",args:{dialogHeader:"",dialogBody:"",dialogFooter:""},render:o=>({components:{Dialog:l,FakeContent:z,Button:y},setup(){return{args:o}},template:`
                <div class="dialog-wrapper">
                    <div class="dialog-container">

                        <div class="dialog-header">
                            <slot name="dialogHeader">
                                <template v-if="args.dialogHeader">
                                    <div v-html="args.dialogHeader"></div>
                                </template>
                                <template v-else>
                                    <FakeContent height="50">#dialogHeader</FakeContent>
                                </template>
                            </slot>
                        </div>

                        <div class="dialog-body">
                            <slot name="dialogBody">
                                <template v-if="args.dialogBody">
                                    <div v-html="args.dialogBody"></div>
                                </template>
                                <template v-else>
                                    <FakeContent height="80">#dialogBody</FakeContent>
                                </template>
                            </slot>
                        </div>

                        <div class="dialog-footer">
                            <slot name="dialogFooter">
                                <template v-if="args.dialogFooter">
                                    <div v-html="args.dialogFooter"></div>
                                </template>
                                <template v-else>
                                    <FakeContent height="50">#dialogFooter</FakeContent>
                                </template>
                            </slot>
                        </div>
                        
                    </div>
                </div>
                `}),parameters:{controls:{}}};var p,m,u;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: "Dialog 觸發樣式",
  args: {
    dialogHeader: \`<div class="title title-level-2 title-undefined">Replace Image?</div>\`,
    dialogBody: \`<p>A file named "example.png" already exist! Do you what to replace it?</p>\`,
    dialogFooter: \`<div style="display: flex; justify-content: flex-end; gap: 16px"><button class="button button-text button-fit button-text-error" @click="dialog.closeDialog()" >Cancel</button><button class="button button-contained button-fit button-contained-error" @click="dialog.closeDialog()">Replace</button></div>\`
  },
  render: args => ({
    components: {
      Dialog,
      Button
    },
    setup() {
      const dialog = useDialog();
      return {
        args,
        dialog
      };
    },
    template: \`
            <Dialog>
                <template #dialogHeader>
                    <div v-html="args.dialogHeader"></div>
                </template>
                <template #dialogBody>
                    <div v-html="args.dialogBody"></div>
                </template>
                <template #dialogFooter>
                    <div v-html="args.dialogFooter"></div>
                </template>
            </Dialog>
            
            <!-- Dialog 觸發器 -->
            <Button themeColor="error" 
                    size="medium" 
                    prefix="replace" 
                    @click="dialog.showDialog">
                Replace Image
            </Button>
        \`
  }),
  // 控制 controls 中能控制的參數
  parameters: {
    controls: {
      // include: ['themeColor', 'label', 'value', 'name' ],
    }
  }
}`,...(u=(m=i.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var v,D,h;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`{
  name: "Dialog 容器結構",
  args: {
    dialogHeader: \`\`,
    dialogBody: \`\`,
    dialogFooter: \`\`
  },
  render: args => ({
    components: {
      Dialog,
      FakeContent,
      Button
    },
    setup() {
      return {
        args
      };
    },
    template: \`
                <div class="dialog-wrapper">
                    <div class="dialog-container">

                        <div class="dialog-header">
                            <slot name="dialogHeader">
                                <template v-if="args.dialogHeader">
                                    <div v-html="args.dialogHeader"></div>
                                </template>
                                <template v-else>
                                    <FakeContent height="50">#dialogHeader</FakeContent>
                                </template>
                            </slot>
                        </div>

                        <div class="dialog-body">
                            <slot name="dialogBody">
                                <template v-if="args.dialogBody">
                                    <div v-html="args.dialogBody"></div>
                                </template>
                                <template v-else>
                                    <FakeContent height="80">#dialogBody</FakeContent>
                                </template>
                            </slot>
                        </div>

                        <div class="dialog-footer">
                            <slot name="dialogFooter">
                                <template v-if="args.dialogFooter">
                                    <div v-html="args.dialogFooter"></div>
                                </template>
                                <template v-else>
                                    <FakeContent height="50">#dialogFooter</FakeContent>
                                </template>
                            </slot>
                        </div>
                        
                    </div>
                </div>
                \`
  }),
  // 控制 controls 中能控制的參數
  parameters: {
    controls: {}
  }
}`,...(h=(D=s.parameters)==null?void 0:D.docs)==null?void 0:h.source}}};const P=["DialogClick","DialogSlotStyle"];export{i as DialogClick,s as DialogSlotStyle,P as __namedExportsOrder,K as default};

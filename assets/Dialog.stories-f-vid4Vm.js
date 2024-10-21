import{r as C,d as B,j as b,I as x,T as H,J as S,o as g,N as c,c as y,b as t,g as d,e as w,f as $,y as E}from"./vue.esm-bundler-B_DV3Cj1.js";import{_ as f}from"./Button-Bc-C4yM4.js";import"./index-Bb4qSo10.js";import"./Icon-Beb_Hq0_.js";import"./iframe-BcRfFM8S.js";import"../sb-preview/runtime.js";const r=C(!1),F=()=>({showDialogStatus:r,showDialog:()=>{r.value=!0},closeDialog:()=>{r.value=!1}}),N={class:"dialog-wrapper"},A={class:"dialog-container"},I={class:"dialog-header"},R={class:"dialog-body"},j={class:"dialog-footer"},l={__name:"Dialog",props:{},setup(o){const e=F();return(a,n)=>(g(),B(S,{to:"#dialog"},[b(H,{name:"dialog"},{default:x(()=>[c(e).showDialogStatus.value?(g(),y("div",{key:0,class:"dialog-mask",onClick:n[0]||(n[0]=k=>c(e).closeDialog())},[t("div",N,[t("div",A,[t("div",I,[d(a.$slots,"dialogHeader")]),t("div",R,[d(a.$slots,"dialogBody")]),t("div",j,[d(a.$slots,"dialogFooter")])])])])):w("",!0)]),_:3})]))}};l.__docgenInfo={exportName:"default",displayName:"Dialog",description:"",tags:{},slots:[{name:"dialogHeader"},{name:"dialogBody"},{name:"dialogFooter"}],sourceFiles:["/Users/jony_worker/Documents/90_外部檔案/upstream/DED-WDS_VUE/libs/src/ui/element/Dialog/Dialog.vue"]};const T={class:"fakeContent",role:"presentation","aria-hidden":"true"},V={class:"fakeContent--text"},_={__name:"FakeContent",props:{height:{type:String}},setup(o){const e=o,a=$(()=>e.height?`${e.height}px`:"auto");return(n,k)=>(g(),y("div",{style:E({height:a.value})},[t("div",T,[t("b",V,[d(n.$slots,"default")])])],4))}};_.__docgenInfo={exportName:"default",displayName:"FakeContent",description:"",tags:{},props:[{name:"height",type:{name:"string"}}],slots:[{name:"default"}],sourceFiles:["/Users/jony_worker/Documents/90_外部檔案/upstream/DED-WDS_VUE/libs/src/ui/utility/FakeContent/FakeContent.vue"]};const O={components:{Dialog:l},title:"Design System/Dialog",component:l,tags:["autodocs"],argTypes:{dialogHeader:{description:"Dialog 的 header 插槽，適合顯示主題或重要信息，支持 HTML 和文字內容。",control:{type:"text"}},dialogBody:{description:"Dialog 的 body 插槽，用於顯示主要內容。可包含文字、圖片、列表或任何其他組件。",control:{type:"text"}},dialogFooter:{description:"Dialog 的 footer 插槽，通常用於顯示按鈕或其他結尾內容，如確認、取消或其他操作。",control:{type:"text"}}},parameters:{docs:{title:"Dialog",description:{component:"Dialog 組件的呈現及說明。"}}}},i={name:"Dialog 觸發樣式",args:{dialogHeader:'<div class="title title-level-2 title-undefined">Replace Image?</div>',dialogBody:'<p>A file named "example.png" already exist! Do you what to replace it?</p>',dialogFooter:'<div style="display: flex; justify-content: flex-end; gap: 16px"><button class="button button-text button-fit button-text-error" @click="dialog.closeDialog()" >Cancel</button><button class="button button-contained button-fit button-contained-error" @click="dialog.closeDialog()">Replace</button></div>'},render:o=>({components:{Dialog:l,Button:f},setup(){const e=F();return{args:o,dialog:e}},template:`
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
        `}),parameters:{controls:{}}},s={name:"Dialog 容器結構",args:{dialogHeader:"",dialogBody:"",dialogFooter:""},render:o=>({components:{Dialog:l,FakeContent:_,Button:f},setup(){return{args:o}},template:`
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
}`,...(h=(D=s.parameters)==null?void 0:D.docs)==null?void 0:h.source}}};const q=["DialogClick","DialogSlotStyle"];export{i as DialogClick,s as DialogSlotStyle,q as __namedExportsOrder,O as default};
import{r as f,l as B,f as b,i as k,T as C,A as _,o as g,B as c,c as x,b as e,e as d,k as H}from"./vendor-M1HcLtCc.js";import{_ as y}from"./Button-D-2MdDEE.js";import"./Icon-Ch-G9Uph.js";const s=f(!1),F=()=>({showDialogStatus:s,showDialog:()=>{s.value=!0},closeDialog:()=>{s.value=!1}}),w={class:"dialog-wrapper"},S={class:"dialog-container"},A={class:"dialog-header"},E={class:"dialog-body"},R={class:"dialog-footer"},o={__name:"Dialog",setup(t){const a=F();return(i,r)=>(g(),B(_,{to:"#dialog"},[b(C,{name:"dialog"},{default:k(()=>[c(a).showDialogStatus.value?(g(),x("div",{key:0,class:"dialog-mask",onClick:r[0]||(r[0]=I=>c(a).closeDialog())},[e("div",w,[e("div",S,[e("div",A,[d(i.$slots,"dialogHeader")]),e("div",E,[d(i.$slots,"dialogBody")]),e("div",R,[d(i.$slots,"dialogFooter")])])])])):H("",!0)]),_:3})]))}};o.__docgenInfo={exportName:"default",displayName:"Dialog",description:"",tags:{},slots:[{name:"dialogHeader"},{name:"dialogBody"},{name:"dialogFooter"}],sourceFiles:["D:/98_測試/up/DED-WDS_VUE/libs/src/ui/element/Dialog/Dialog.vue"]};const V={components:{Dialog:o},title:"Design System/Dialog",component:o,tags:["autodocs"],argTypes:{dialogHeader:{description:"Dialog 的 header 插槽，適合顯示主題或重要信息，支持 HTML 和文字內容。",control:{type:"text"}},dialogBody:{description:"Dialog 的 body 插槽，用於顯示主要內容。可包含文字、圖片、列表或任何其他組件。",control:{type:"text"}},dialogFooter:{description:"Dialog 的 footer 插槽，通常用於顯示按鈕或其他結尾內容，如確認、取消或其他操作。",control:{type:"text"}}},parameters:{docs:{title:"Dialog",description:{component:"Dialog 組件的呈現及說明。"}}}},l={name:"Dialog 觸發樣式",args:{dialogHeader:'<div class="title title-level-2 title-undefined">Replace Image?</div>',dialogBody:'<p>A file named "example.png" already exist! Do you what to replace it?</p>',dialogFooter:'<div style="display: flex; justify-content: flex-end; gap: 16px"><button class="button button-text button-fit button-text-error" @click="dialog.closeDialog()" >Cancel</button><button class="button button-contained button-fit button-contained-error" @click="dialog.closeDialog()">Replace</button></div>'},render:t=>({components:{Dialog:o,Button:y},setup(){const a=F();return{args:t,dialog:a}},template:`
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
        `}),parameters:{controls:{}}},n={name:"Dialog 容器結構",args:{dialogHeader:"",dialogBody:"",dialogFooter:""},render:t=>({components:{Dialog:o,FakeContent,Button:y},setup(){return{args:t}},template:`
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
                `}),parameters:{controls:{}}};var m,p,u;l.parameters={...l.parameters,docs:{...(m=l.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(u=(p=l.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var v,D,h;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(h=(D=n.parameters)==null?void 0:D.docs)==null?void 0:h.source}}};const j=["DialogClick","DialogSlotStyle"];export{l as DialogClick,n as DialogSlotStyle,j as __namedExportsOrder,V as default};

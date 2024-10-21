import{r as f,l as h,f as _,i as y,T as b,A as x,o as d,B as c,c as m,b as t,e as n,k,g as B,C}from"./vendor-DM7lYiMX.js";import{_ as F}from"./Button-CBLSEQPA.js";import"./Icon-DnlUTCy3.js";const r=f(!1),D=()=>({showDialogStatus:r,showDialog:()=>{r.value=!0},closeDialog:()=>{r.value=!1}}),H={class:"dialog-wrapper"},$={class:"dialog-container"},w={class:"dialog-header"},S={class:"dialog-body"},E={class:"dialog-footer"},s={__name:"Dialog",setup(a){const e=D();return(o,l)=>(d(),h(x,{to:"#dialog"},[_(b,{name:"dialog"},{default:y(()=>[c(e).showDialogStatus.value?(d(),m("div",{key:0,class:"dialog-mask",onClick:l[0]||(l[0]=v=>c(e).closeDialog())},[t("div",H,[t("div",$,[t("div",w,[n(o.$slots,"dialogHeader")]),t("div",S,[n(o.$slots,"dialogBody")]),t("div",E,[n(o.$slots,"dialogFooter")])])])])):k("",!0)]),_:3})]))}};s.__docgenInfo={exportName:"default",displayName:"Dialog",description:"",tags:{},slots:[{name:"dialogHeader"},{name:"dialogBody"},{name:"dialogFooter"}],sourceFiles:["D:/98_測試/up/DED-WDS_VUE/libs/src/ui/element/Dialog/Dialog.vue"]};const N={class:"fakeContent",role:"presentation","aria-hidden":"true"},A={class:"fakeContent--text"},I={__name:"FakeContent",props:{height:{type:String}},setup(a){const e=a,o=B(()=>e.height?`${e.height}px`:"auto");return(l,v)=>(d(),m("div",{style:C({height:o.value})},[t("div",N,[t("b",A,[n(l.$slots,"default",{},void 0,!0)])])],4))}};I.__docgenInfo={exportName:"default",displayName:"FakeContent",description:"",tags:{},props:[{name:"height",type:{name:"string"}}],slots:[{name:"default"}],sourceFiles:["D:/98_測試/up/DED-WDS_VUE/libs/src/ui/utility/FakeContent/FakeContent.vue"]};const z={components:{Dialog:s},title:"Design System/Dialog",component:s,tags:["autodocs"],argTypes:{dialogHeader:{description:"Dialog 的 header 插槽，適合顯示主題或重要信息，支持 HTML 和文字內容。",control:{type:"text"}},dialogBody:{description:"Dialog 的 body 插槽，用於顯示主要內容。可包含文字、圖片、列表或任何其他組件。",control:{type:"text"}},dialogFooter:{description:"Dialog 的 footer 插槽，通常用於顯示按鈕或其他結尾內容，如確認、取消或其他操作。",control:{type:"text"}}},parameters:{docs:{title:"Dialog",description:{component:"Dialog 組件的呈現及說明。"}}}},i={name:"Dialog 觸發樣式",args:{dialogHeader:'<div class="title title-level-2 title-undefined">Replace Image?</div>',dialogBody:'<p>A file named "example.png" already exist! Do you what to replace it?</p>',dialogFooter:'<div style="display: flex; justify-content: flex-end; gap: 16px"><button class="button button-text button-fit button-text-error" @click="dialog.closeDialog()" >Cancel</button><button class="button button-contained button-fit button-contained-error" @click="dialog.closeDialog()">Replace</button></div>'},render:a=>({components:{Dialog:s,Button:F},setup(){const e=D();return{args:a,dialog:e}},template:`
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
        `}),parameters:{controls:{}}};var g,u,p;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(p=(u=i.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};const j=["DialogClick"];export{i as DialogClick,j as __namedExportsOrder,z as default};

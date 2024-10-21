const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./Button-Dj55cI3y.js","./vendor-CDUjWAn_.js","./Icon-CYV0WNBt.js"])))=>i.map(i=>d[i]);
import{r as u,l as H,f as S,i as A,T as E,A as w,o as c,B as p,c as B,b as o,e as s,k as $,g as I,C as R,_ as m,E as v}from"./vendor-CDUjWAn_.js";import C from"./Button-Dj55cI3y.js";import{_ as T}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./Icon-CYV0WNBt.js";const g=u(!1),b=()=>({showDialogStatus:g,showDialog:()=>{g.value=!0},closeDialog:()=>{g.value=!1}}),N={class:"dialog-wrapper"},P={class:"dialog-container"},V={class:"dialog-header"},M={class:"dialog-body"},O={class:"dialog-footer"},n={__name:"Dialog",setup(a){const e=b();return(t,l)=>(c(),H(w,{to:"#dialog"},[S(E,{name:"dialog"},{default:A(()=>[p(e).showDialogStatus.value?(c(),B("div",{key:0,class:"dialog-mask",onClick:l[0]||(l[0]=r=>p(e).closeDialog())},[o("div",N,[o("div",P,[o("div",V,[s(t.$slots,"dialogHeader")]),o("div",M,[s(t.$slots,"dialogBody")]),o("div",O,[s(t.$slots,"dialogFooter")])])])])):$("",!0)]),_:3})]))}};n.__docgenInfo={exportName:"default",displayName:"Dialog",description:"",tags:{},slots:[{name:"dialogHeader"},{name:"dialogBody"},{name:"dialogFooter"}],sourceFiles:["D:/98_測試/up/DED-WDS_VUE/libs/src/ui/element/Dialog/Dialog.vue"]};const j=Object.freeze(Object.defineProperty({__proto__:null,default:n},Symbol.toStringTag,{value:"Module"})),z={class:"fakeContent",role:"presentation","aria-hidden":"true"},L={class:"fakeContent--text"},k={__name:"FakeContent",props:{height:{type:String}},setup(a){const e=a,t=I(()=>e.height?`${e.height}px`:"auto");return(l,r)=>(c(),B("div",{style:R({height:t.value})},[o("div",z,[o("b",L,[s(l.$slots,"default",{},void 0,!0)])])],4))}},U=T(k,[["__scopeId","data-v-e3ed1f03"]]);k.__docgenInfo={exportName:"default",displayName:"FakeContent",description:"",tags:{},props:[{name:"height",type:{name:"string"}}],slots:[{name:"default"}],sourceFiles:["D:/98_測試/up/DED-WDS_VUE/libs/src/ui/utility/FakeContent/FakeContent.vue"]};const K={components:{Dialog:n},title:"Design System/Dialog",component:n,tags:["autodocs"],argTypes:{dialogHeader:{description:"Dialog 的 header 插槽，適合顯示主題或重要信息，支持 HTML 和文字內容。",control:{type:"text"}},dialogBody:{description:"Dialog 的 body 插槽，用於顯示主要內容。可包含文字、圖片、列表或任何其他組件。",control:{type:"text"}},dialogFooter:{description:"Dialog 的 footer 插槽，通常用於顯示按鈕或其他結尾內容，如確認、取消或其他操作。",control:{type:"text"}}},parameters:{docs:{title:"Dialog",description:{component:"Dialog 組件的呈現及說明。"}}}},i={name:"Dialog 觸發樣式",args:{dialogHeader:'<div class="title title-level-2 title-undefined">Replace Image?</div>',dialogBody:'<p>A file named "example.png" already exist! Do you what to replace it?</p>',dialogFooter:'<div style="display: flex; justify-content: flex-end; gap: 16px"><button class="button button-text button-fit button-text-error" @click="dialog.closeDialog()" >Cancel</button><button class="button button-contained button-fit button-contained-error" @click="dialog.closeDialog()">Replace</button></div>'},render:a=>({components:{Dialog:n,Button:C},setup(){const e=b(),t=u(null),l=u(null);return Promise.all([m(()=>Promise.resolve().then(()=>j),void 0,import.meta.url),m(()=>import("./Button-Dj55cI3y.js"),__vite__mapDeps([0,1,2]),import.meta.url)]).then(([r,x])=>{t.value=v(()=>r.default),l.value=v(()=>x.default)}),{args:a,dialog:e}},template:`
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
        `}),parameters:{controls:{}}},d={name:"Dialog 容器結構",args:{dialogHeader:"",dialogBody:"",dialogFooter:""},render:a=>({components:{Dialog:n,FakeContent:U,Button:C},setup(){return{args:a}},template:`
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
                `}),parameters:{controls:{}}};var D,f,h;i.parameters={...i.parameters,docs:{...(D=i.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
      const Dialog = ref(null);
      const Button = ref(null);
      Promise.all([import('./Dialog.vue'), import('@/ui/element/Button/Button.vue')]).then(([DialogModule, ButtonModule]) => {
        Dialog.value = defineAsyncComponent(() => DialogModule.default);
        Button.value = defineAsyncComponent(() => ButtonModule.default);
      });
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
}`,...(h=(f=i.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};var _,y,F;d.parameters={...d.parameters,docs:{...(_=d.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(F=(y=d.parameters)==null?void 0:y.docs)==null?void 0:F.source}}};const Q=["DialogClick","DialogSlotStyle"];export{i as DialogClick,d as DialogSlotStyle,Q as __namedExportsOrder,K as default};

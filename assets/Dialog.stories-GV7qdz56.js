import{e as _,g as k,j as b,D as x,K as H,T as S,o as g,M as c,a as y,b as a,r,f as $,c as w,d as E}from"./vue.esm-bundler-BaxPAcbg.js";import{_ as f}from"./Button-DpU9Zyee.js";import"./index-Bb4qSo10.js";import"./Icon-rUAUAOXH.js";import"./iframe-DDUDfrN7.js";import"../sb-preview/runtime.js";const s=_(!1),F=()=>({showDialogStatus:s,showDialog:()=>{s.value=!0},closeDialog:()=>{s.value=!1}}),I={class:"dialog-wrapper"},R={class:"dialog-container"},j={class:"dialog-header"},A={class:"dialog-body"},N={class:"dialog-footer"},l={__name:"Dialog",props:{},setup(o){const t=F();return(e,n)=>(g(),k(S,{to:"#dialog"},[b(H,{name:"dialog"},{default:x(()=>[c(t).showDialogStatus.value?(g(),y("div",{key:0,class:"dialog-mask",onClick:n[0]||(n[0]=C=>c(t).closeDialog())},[a("div",I,[a("div",R,[a("div",j,[r(e.$slots,"dialogHeader")]),a("div",A,[r(e.$slots,"dialogBody")]),a("div",N,[r(e.$slots,"dialogFooter")])])])])):$("",!0)]),_:3})]))}};l.__docgenInfo={exportName:"default",displayName:"Dialog",description:"",tags:{},slots:[{name:"dialogHeader"},{name:"dialogBody"},{name:"dialogFooter"}],sourceFiles:["D:/98_測試/up/DED-WDS_VUE/libs/src/ui/element/Dialog/Dialog.vue"]};const z={class:"fakeContent",role:"presentation","aria-hidden":"true"},T={class:"fakeContent--text"},B={__name:"FakeContent",props:{height:{type:String}},setup(o){const t=o,e=w(()=>t.height?`${t.height}px`:"auto");return(n,C)=>(g(),y("div",{style:E({height:e.value})},[a("div",z,[a("p",T,[r(n.$slots,"default")])])],4))}};B.__docgenInfo={exportName:"default",displayName:"FakeContent",description:"",tags:{},props:[{name:"height",type:{name:"string"}}],slots:[{name:"default"}],sourceFiles:["D:/98_測試/up/DED-WDS_VUE/libs/src/ui/utility/FakeContent/FakeContent.vue"]};const O={components:{Dialog:l},title:"Design System/Dialog*",component:l,tags:["autodocs"],argTypes:{dialogHeader:{description:"Dialog 的 header 插槽，適合顯示主題或重要信息，支持 HTML 和文字內容。",control:{type:"text"}},dialogBody:{description:"Dialog 的 body 插槽，用於顯示主要內容。可包含文字、圖片、列表或任何其他組件。",control:{type:"text"}},dialogFooter:{description:"Dialog 的 footer 插槽，通常用於顯示按鈕或其他結尾內容，如確認、取消或其他操作。",control:{type:"text"}}},parameters:{docs:{title:"Dialog",description:{component:"Dialog 組件的呈現及說明。"}}}},i={name:"預設項目",args:{dialogHeader:'<div class="ded-title ded-title-level-2 ded-title-undefined">Replace Image?</div>',dialogBody:'<p>A file named "example.png" already exist! Do you what to replace it?</p>',dialogFooter:`<div style="display: flex; justify-content: flex-end; gap: 16px">
<button class="ded-button ded-button-text ded-button-fit ded-button-text-error" @click="dialog.closeDialog()" >Cancel</button>
<button class="ded-button ded-button-contained ded-button-fit ded-button-contained-error" @click="dialog.closeDialog()">Replace</button>
</div>`},render:o=>({components:{Dialog:l,Button:f},setup(){const t=F();return{args:o,dialog:t}},template:`
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
                    variant="contained"
                    size="medium"
                    prefix="replace"
                    @click="dialog.showDialog">
                Replace Image
            </Button>
        `}),parameters:{controls:{},docs:{source:{transform:(o,t)=>{const{args:e}=t;return["<Dialog>","  <template #dialogHeader>",`    ${e.dialogHeader}"`,"  </template>","  <template #dialogBody>",`    ${e.dialogBody}"`,"  </template>","  <template #dialogFooter>",`    ${e.dialogFooter}"`,"  </template>","</Dialog>","","<!-- Dialog 觸發器 -->","<Button",'  themeColor="error"','  variant="contained"','  size="medium"','  prefix="replace"','  @click="dialog.showDialog"',">","  Replace Image","</Button>"].join(`
`).trim()}}}}},d={name:"容器結構",args:{dialogHeader:"",dialogBody:"",dialogFooter:""},render:o=>({components:{Dialog:l,FakeContent:B,Button:f},setup(){return{args:o}},template:`
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
        `}),parameters:{controls:{},docs:{source:{transform:(o,t)=>{const{args:e}=t;return["<Dialog>","  <template #dialogHeader>",`    ${e.dialogHeader}"`,"  </template>","  <template #dialogBody>",`    ${e.dialogBody}"`,"  </template>","  <template >",`    ${e.dialogFooter}"`,"  </template>","</Dialog>"].join(`
`).trim()}}}}};var m,p,u;i.parameters={...i.parameters,docs:{...(m=i.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: "預設項目",
  args: {
    dialogHeader: \`<div class="ded-title ded-title-level-2 ded-title-undefined">Replace Image?</div>\`,
    dialogBody: \`<p>A file named "example.png" already exist! Do you what to replace it?</p>\`,
    dialogFooter: \`<div style="display: flex; justify-content: flex-end; gap: 16px">
<button class="ded-button ded-button-text ded-button-fit ded-button-text-error" @click="dialog.closeDialog()" >Cancel</button>
<button class="ded-button ded-button-contained ded-button-fit ded-button-contained-error" @click="dialog.closeDialog()">Replace</button>
</div>\`
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
                    variant="contained"
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
    },
    docs: {
      source: {
        transform: (src, storyContext) => {
          const {
            args
          } = storyContext;
          // const dataSourceString = formatDataSource(args.dataSource);
          return ['<Dialog>', '  <template #dialogHeader>', \`    \${args.dialogHeader}"\`, '  </template>', '  <template #dialogBody>', \`    \${args.dialogBody}"\`, '  </template>', '  <template #dialogFooter>', \`    \${args.dialogFooter}"\`, '  </template>', '</Dialog>', '', '<!-- Dialog 觸發器 -->', '<Button', \`  themeColor="error"\`, \`  variant="contained"\`, \`  size="medium"\`, \`  prefix="replace"\`, \`  @click="dialog.showDialog"\`, '>', '  Replace Image', '</Button>'].join('\\n').trim();
        }
      }
    }
  }
}`,...(u=(p=i.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var v,D,h;d.parameters={...d.parameters,docs:{...(v=d.parameters)==null?void 0:v.docs,source:{originalSource:`{
  name: "容器結構",
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
    controls: {},
    docs: {
      source: {
        transform: (src, storyContext) => {
          const {
            args
          } = storyContext;
          // const dataSourceString = formatDataSource(args.dataSource);
          return ['<Dialog>', '  <template #dialogHeader>', \`    \${args.dialogHeader}"\`, '  </template>', '  <template #dialogBody>', \`    \${args.dialogBody}"\`, '  </template>', '  <template >', \`    \${args.dialogFooter}"\`, '  </template>', '</Dialog>'].join('\\n').trim();
        }
      }
    }
  }
}`,...(h=(D=d.parameters)==null?void 0:D.docs)==null?void 0:h.source}}};const q=["DialogClick","DialogSlotStyle"];export{i as DialogClick,d as DialogSlotStyle,q as __namedExportsOrder,O as default};

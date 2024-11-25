import{e as B,g as H,j as s,E as d,K as h,T as C,o as p,L as f,a as $,b as a,r as c,t as l,z as y,n as F,f as _}from"./vue.esm-bundler-_3atnb9w.js";import{s as S}from"./sanitizeHtml-AW0cDGJT.js";import{_ as g}from"./Button-COc-VGGW.js";import"./index-Bb4qSo10.js";import"./Icon-CAH_ZwBp.js";import"./iframe-CeK3pwPU.js";import"../sb-preview/runtime.js";const m=B(!1),T=()=>({showDialogStatus:m,showDialog:()=>{m.value=!0},closeDialog:()=>{m.value=!1}}),z={class:"ded-dialog-header"},N={class:"ded-dialog-title"},E={class:"ded-dialog-body"},V={class:"ded-dialog-footer"},i={__name:"Dialog",props:{title:{type:String,required:!0,default:""},content:{type:String,required:!0,default:""},confirmText:{type:String,default:"確認"},cancelText:{type:String,default:"取消"},className:{type:String,default:""}},setup(o){const t=T(),e=o;return(r,u)=>(p(),H(C,{to:"#dialog"},[s(h,{name:"dialog"},{default:d(()=>[f(t).showDialogStatus.value?(p(),$("div",{key:0,class:"ded-dialog-overlay",onClick:u[0]||(u[0]=k=>f(t).closeDialog())},[a("div",{class:F({"ded-dialog-content":!0,[e.className]:!!e.className})},[a("div",z,[c(r.$slots,"dialogHeader",{},()=>[a("h2",N,l(e.title),1)])]),a("div",E,[c(r.$slots,"dialogBody",{},()=>[a("p",null,l(e.content),1)])]),a("div",V,[c(r.$slots,"dialogFooter",{},()=>[s(g,{variant:"contained",themeColor:"primary",size:"medium",className:"ded-cancel-btn"},{default:d(()=>[y(l(e.cancelText),1)]),_:1}),s(g,{variant:"contained",themeColor:"error",size:"medium"},{default:d(()=>[y(l(e.confirmText),1)]),_:1})])])],2)])):_("",!0)]),_:3})]))}};i.__docgenInfo={exportName:"default",displayName:"Dialog",description:"",tags:{},props:[{name:"title",type:{name:"string"},required:!0,defaultValue:{func:!1,value:'""'}},{name:"content",type:{name:"string"},required:!0,defaultValue:{func:!1,value:'""'}},{name:"confirmText",type:{name:"string"},defaultValue:{func:!1,value:'"確認"'}},{name:"cancelText",type:{name:"string"},defaultValue:{func:!1,value:'"取消"'}},{name:"className",type:{name:"string"},defaultValue:{func:!1,value:'""'}}],slots:[{name:"dialogHeader"},{name:"dialogBody"},{name:"dialogFooter"}],sourceFiles:["D:/98_測試/up/DED-WDS_VUE/libs/src/ui/element/Dialog/Dialog.vue"]};const O={components:{Dialog:i},title:"Design System/Dialog*",component:i,tags:["autodocs"],argTypes:{title:{description:"標題",control:{type:"text"}},content:{description:"內文",control:{type:"text"}},confirmText:{description:"確認按鈕",control:{type:"text"}},cancelText:{description:"取消按鈕",control:{type:"text"}},className:{description:"客製化樣式",control:{type:"text"}},dialogHeader:{description:"header 插槽",control:{type:"text"},table:{type:{summary:"Vue Component | HTML"}}},dialogBody:{description:"body 插槽",control:{type:"text"},table:{type:{summary:"Vue Component | HTML"}}},dialogFooter:{description:"footer 插槽",control:{type:"text"},table:{type:{summary:"Vue Component | HTML"}}}},parameters:{docs:{title:"Dialog",description:{component:"Dialog 組件的呈現及說明。"}},actions:{disabled:!0}}},n={name:"預設項目",args:{title:"標題",content:"點擊「全部覆蓋」，即所有名稱相同的檔案皆以新檔案覆蓋",confirmText:"確認",cancelText:"取消",className:"",dialogHeader:`<script>alert('Hacked!')<\/script><h1 class="ded-dialog-title">安全內容</h1>`,dialogBody:"",dialogFooter:""},render:o=>({components:{Dialog:i,Button:g},setup(){const t=T();return{args:o,dialog:t,sanitizeHtml:S}},template:`
            <Dialog
                :title="args.title"
                :content="args.content"
                :confirmText="args.confirmText"
                :cancelText="args.cancelText"
            >
                <template #dialogHeader>
                    <template v-if="args.dialogHeader">
                        <div v-html="sanitizeHtml(args.dialogHeader)"></div>
                    </template>
                </template>
                <template #dialogBody>
                    <template v-if="args.dialogBody">
                        <div v-html="sanitizeHtml(args.dialogBody)"></div>
                    </template>
                </template>
                <template #dialogFooter>
                    <template v-if="args.dialogFooter">
                        <div v-html="sanitizeHtml(args.dialogFooter)"></div>
                    </template>
                </template>
            </Dialog>

            <!-- Dialog 觸發器 -->
            <Button themeColor="primary"
                    variant="contained"
                    size="medium"
                    prefix="replace"
                    @click="dialog.showDialog">
                Open Dialog
            </Button>
        `}),parameters:{controls:{},docs:{source:{transform:(o,t)=>{const{args:e}=t;return["<Dialog",`  :title="${e.title}"`,`  :content="${e.content}"`,`  :confirmText="${e.confirmText}"`,`  :cancelText="${e.cancelText}"`,">","  <template #dialogHeader>",'    <template v-if="${args.dialogHeader}">',`      {{ ${e.dialogHeader} }}`,"    </template>","  </template>","  <template #dialogBody>",'    <template v-if="${args.dialogBody}">',`      {{ ${e.dialogBody} }}`,"    </template>","  </template>","  <template #dialogFooter>",'    <template v-if="${args.dialogFooter}">',`      {{ ${e.dialogFooter} }}`,"    </template>","  </template>","</Dialog>"].join(`
`).trim()}}}}};var v,D,x;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`{
  name: "預設項目",
  args: {
    title: '標題',
    content: '點擊「全部覆蓋」，即所有名稱相同的檔案皆以新檔案覆蓋',
    confirmText: '確認',
    cancelText: '取消',
    className: '',
    dialogHeader: \`<script>alert('Hacked!')<\/script><h1 class="ded-dialog-title">安全內容</h1>\`,
    dialogBody: \`\`,
    dialogFooter: \`\`
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
        dialog,
        sanitizeHtml
      };
    },
    template: \`
            <Dialog
                :title="args.title"
                :content="args.content"
                :confirmText="args.confirmText"
                :cancelText="args.cancelText"
            >
                <template #dialogHeader>
                    <template v-if="args.dialogHeader">
                        <div v-html="sanitizeHtml(args.dialogHeader)"></div>
                    </template>
                </template>
                <template #dialogBody>
                    <template v-if="args.dialogBody">
                        <div v-html="sanitizeHtml(args.dialogBody)"></div>
                    </template>
                </template>
                <template #dialogFooter>
                    <template v-if="args.dialogFooter">
                        <div v-html="sanitizeHtml(args.dialogFooter)"></div>
                    </template>
                </template>
            </Dialog>

            <!-- Dialog 觸發器 -->
            <Button themeColor="primary"
                    variant="contained"
                    size="medium"
                    prefix="replace"
                    @click="dialog.showDialog">
                Open Dialog
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
          return ['<Dialog', \`  :title="\${args.title}"\`, \`  :content="\${args.content}"\`, \`  :confirmText="\${args.confirmText}"\`, \`  :cancelText="\${args.cancelText}"\`, '>', '  <template #dialogHeader>', '    <template v-if="\${args.dialogHeader}">', \`      {{ \${args.dialogHeader} }}\`, '    </template>', '  </template>', '  <template #dialogBody>', '    <template v-if="\${args.dialogBody}">', \`      {{ \${args.dialogBody} }}\`, '    </template>', '  </template>', '  <template #dialogFooter>', '    <template v-if="\${args.dialogFooter}">', \`      {{ \${args.dialogFooter} }}\`, '    </template>', '  </template>', '</Dialog>'].join('\\n').trim();
        }
      }
    }
  }
}`,...(x=(D=n.parameters)==null?void 0:D.docs)==null?void 0:x.source}}};const I=["DialogClick"];export{n as DialogClick,I as __namedExportsOrder,O as default};

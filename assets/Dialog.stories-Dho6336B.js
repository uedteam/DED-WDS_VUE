import{d as O,D as x,f as s,E as m,N as K,T as A,o as u,O as g,a as f,b as i,e as v,r as C,s as h,n as S,C as V}from"./vue.esm-bundler-C-bz8AVj.js";import{_ as d}from"./Button-juKgk1Zr.js";import{_ as T}from"./Icon-Bedpbpdt.js";import{_ as N}from"./Title-BPzy_Myd.js";import"./index-Bb4qSo10.js";import"./iframe-CBdo9rD4.js";import"../sb-preview/runtime.js";const p=O(!1),D=()=>({showDialogStatus:p,showDialog:()=>{p.value=!0},closeDialog:()=>{p.value=!1}}),$={class:"ded-dialog-header"},E={class:"ded-dialog-body"},F={class:"ded-dialog-footer"},l={__name:"Dialog",props:{hasClose:{type:Boolean,default:!1},className:{type:String,default:""}},setup(o){const e=D(),t=o;return(a,n)=>(u(),x(A,{to:"#dialog"},[s(K,{name:"dialog"},{default:m(()=>[g(e).showDialogStatus.value?(u(),f("div",{key:0,class:"mask-overlay",onClick:n[1]||(n[1]=V(_=>g(e).closeDialog(),["self"]))},[i("div",{class:S({"ded-dialog-content":!0,[t.className]:!!t.className})},[t.hasClose===!0?(u(),f("button",{key:0,class:"ded-dialog-close-btn",onClick:n[0]||(n[0]=_=>g(e).closeDialog())},[s(T,{name:"close",size:"20"})])):v("",!0),i("div",$,[C(a.$slots,"header")]),i("div",E,[C(a.$slots,"content")]),i("div",F,[C(a.$slots,"footer",{},()=>[s(d,{variant:"contained",size:"medium",className:"ded-cancel-btn"},{default:m(()=>n[2]||(n[2]=[h(" Cancel ")])),_:1}),s(d,{variant:"contained",themeColor:"primary",size:"medium"},{default:m(()=>n[3]||(n[3]=[h(" OK ")])),_:1})])])],2)])):v("",!0)]),_:3})]))}};l.__docgenInfo={exportName:"default",displayName:"Dialog",description:"",tags:{},props:[{name:"hasClose",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"className",type:{name:"string"},defaultValue:{func:!1,value:'""'}}],slots:[{name:"header"},{name:"content"},{name:"footer"}],sourceFiles:["/Users/auouser/Desktop/Work_Space/DED-WDS_VUE/libs/src/ui/element/Dialog/Dialog.vue"]};const q={components:{Title:N,Dialog:l},title:"Component/Dialog",component:l,tags:["autodocs"],argTypes:{hasClose:{description:"是否有關閉按鈕",control:{type:"boolean"}},className:{description:"客製化樣式",control:{type:"text"}},header:{description:"標題",control:{type:"text"},table:{type:{summary:"Vue Component | HTML"},defaultValue:{summary:"Title"}}},content:{description:"內容",control:{type:"text"},table:{type:{summary:"Vue Component | HTML"},defaultValue:{summary:"Content"}}},footer:{description:"附註",control:{type:"text"},table:{type:{summary:"Vue Component | HTML"}}}},parameters:{docs:{title:"Dialog",description:{component:"Dialog 組件的呈現及說明。"}},actions:{disabled:!0}}},r={name:"預設項目",args:{hasClose:!1,className:"",header:"Title",content:"Content"},render:o=>({components:{Dialog:l,Button:d,Icon:T},setup(){const e=D();return{args:o,dialog:e,onClose:()=>{window.alert("Close"),e.closeDialog()},onConfirm:()=>{window.alert("OK"),e.closeDialog()},onCancel:()=>{window.alert("Cancel"),e.closeDialog()}}},template:`
            <div :class="['ded-dialog-content', ...args.className.split(' ')]">
                <button v-if="args.hasClose" class="ded-dialog-close-btn" @click="onClose">
                    <Icon name="close" size="20"></Icon>
                </button>
                <div class="ded-dialog-header">
                    {{ args.header }}
                </div>
                <div class="ded-dialog-body">
                    {{ args.content }}
                </div>
                <div class="ded-dialog-footer">
                    <Button variant="contained" size="medium" class="ded-cancel-btn"
                            @click="onCancel">
                        Cancel
                    </Button>
                    <Button variant="contained" themeColor="primary" size="medium" @click="onConfirm">
                        OK
                    </Button>
                </div>
            </div>
        `}),parameters:{controls:{},docs:{source:{transform:(o,e)=>{const{args:t}=e;return["<Dialog",`  :hasClose="${t.hasClose}"`,'  className=""',">","  <template #footer>","    <Button",'      variant="contained"','      size="medium"','      class="ded-cancel-btn"','      @click="onCancel"',"    >","      Cancel","    </Button>","    <Button",'      variant="contained"','      themeColor="error"','      size="medium"','      @click="onConfirm"',"    >","      OK","    </Button>","  </template>","</Dialog>"].join(`
`).trim()}}}}},c={name:"互動模式",args:{content:"Content",hasClose:!0,className:""},render:o=>({components:{Dialog:l,Button:d,Title:N},setup(){const e=D();return{args:o,dialog:e,onClose:()=>{window.alert("Close"),e.closeDialog()},onConfirm:()=>{window.alert("OK"),e.closeDialog()},onCancel:()=>{window.alert("Cancel"),e.closeDialog()}}},template:`
            <Dialog
                :hasClose="args.hasClose"
                className=""
            >
                <template #header>
                    <Title :level="3">Title</Title>
                </template>
                <template #content>
                    <p>Content</p>
                </template>
                <template #footer>
                    <Button variant="contained" size="medium" class="ded-cancel-btn" @click="onCancel">
                        Cancel
                    </Button>
                    <Button variant="contained" themeColor="primary" size="medium" @click="onConfirm">
                        OK
                    </Button>
                </template>
            </Dialog>

            <!-- Dialog 觸發器 -->
            <Button themeColor="primary"
                    variant="contained"
                    size="medium"
                    @click="dialog.showDialog">
                Open Dialog
            </Button>
        `}),parameters:{controls:{},docs:{source:{transform:(o,e)=>['import { useDialog } from "@/ui/element/Dialog/useDialog.js";',"const dialog = useDialog();","","<Dialog",'  :hasClose="${args.hasClose}"','  className=""',">","  <template #title>",'    <Title level="3">Title</Title>',"  </template>","  <template #content>","    <p>Content</p>","  </template>","  <template #footer>","    <Button",'      variant="contained"','      size="medium"','      class="ded-cancel-btn"','      @click="onCancel"',"    >","      Cancel","    </Button>","    <Button",'      variant="contained"','      themeColor="primary"','      size="medium"','      @click="onConfirm"',"    >","      OK","    </Button>","  </template>","</Dialog>","","<!-- Dialog 觸發器 -->","<Button",'  themeColor="primary"','  variant="contained"','  size="medium"','  prefix="replace"','  @click="dialog.showDialog"',">","  Open Dialog","</Button>"].join("\\n").trim()}}}};var B,y,w;r.parameters={...r.parameters,docs:{...(B=r.parameters)==null?void 0:B.docs,source:{originalSource:`{
  name: "預設項目",
  args: {
    hasClose: false,
    className: '',
    header: 'Title',
    content: 'Content'
  },
  render: args => ({
    components: {
      Dialog,
      Button,
      Icon
    },
    setup() {
      const dialog = useDialog();
      const onClose = () => {
        window.alert('Close');
        dialog.closeDialog(); // 關閉對話框
      };
      const onConfirm = () => {
        window.alert('OK');
        dialog.closeDialog(); // 關閉對話框
      };
      const onCancel = () => {
        window.alert('Cancel');
        dialog.closeDialog(); // 關閉對話框
      };
      return {
        args,
        dialog,
        onClose,
        onConfirm,
        onCancel
      };
    },
    template: \`
            <div :class="['ded-dialog-content', ...args.className.split(' ')]">
                <button v-if="args.hasClose" class="ded-dialog-close-btn" @click="onClose">
                    <Icon name="close" size="20"></Icon>
                </button>
                <div class="ded-dialog-header">
                    {{ args.header }}
                </div>
                <div class="ded-dialog-body">
                    {{ args.content }}
                </div>
                <div class="ded-dialog-footer">
                    <Button variant="contained" size="medium" class="ded-cancel-btn"
                            @click="onCancel">
                        Cancel
                    </Button>
                    <Button variant="contained" themeColor="primary" size="medium" @click="onConfirm">
                        OK
                    </Button>
                </div>
            </div>
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
          return ['<Dialog', \`  :hasClose="\${args.hasClose}"\`, '  className=""', '>', '  <template #footer>', '    <Button', '      variant="contained"', '      size="medium"', '      class="ded-cancel-btn"', '      @click="onCancel"', '    >', '      Cancel', '    </Button>', '    <Button', '      variant="contained"', '      themeColor="error"', '      size="medium"', '      @click="onConfirm"', '    >', '      OK', '    </Button>', '  </template>', '</Dialog>'].join("\\n").trim();
        }
      }
    }
  }
}`,...(w=(y=r.parameters)==null?void 0:y.docs)==null?void 0:w.source}}};var k,b,z;c.parameters={...c.parameters,docs:{...(k=c.parameters)==null?void 0:k.docs,source:{originalSource:`{
  name: "互動模式",
  args: {
    content: 'Content',
    hasClose: true,
    className: ''
  },
  render: args => ({
    components: {
      Dialog,
      Button,
      Title
    },
    setup() {
      const dialog = useDialog();
      const onClose = () => {
        window.alert('Close');
        dialog.closeDialog(); // 關閉對話框
      };
      const onConfirm = () => {
        window.alert('OK');
        dialog.closeDialog(); // 關閉對話框
      };
      const onCancel = () => {
        window.alert('Cancel');
        dialog.closeDialog(); // 關閉對話框
      };
      return {
        args,
        dialog,
        onClose,
        onConfirm,
        onCancel
      };
    },
    template: \`
            <Dialog
                :hasClose="args.hasClose"
                className=""
            >
                <template #header>
                    <Title :level="3">Title</Title>
                </template>
                <template #content>
                    <p>Content</p>
                </template>
                <template #footer>
                    <Button variant="contained" size="medium" class="ded-cancel-btn" @click="onCancel">
                        Cancel
                    </Button>
                    <Button variant="contained" themeColor="primary" size="medium" @click="onConfirm">
                        OK
                    </Button>
                </template>
            </Dialog>

            <!-- Dialog 觸發器 -->
            <Button themeColor="primary"
                    variant="contained"
                    size="medium"
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
          return [\`import { useDialog } from "@/ui/element/Dialog/useDialog.js";\`, \`const dialog = useDialog();\`, '', '<Dialog', '  :hasClose="\${args.hasClose}"', '  className=""', '>', '  <template #title>', '    <Title level="3">Title</Title>', '  </template>', '  <template #content>', '    <p>Content</p>', '  </template>', '  <template #footer>', '    <Button', '      variant="contained"', '      size="medium"', '      class="ded-cancel-btn"', '      @click="onCancel"', '    >', '      Cancel', '    </Button>', '    <Button', '      variant="contained"', '      themeColor="primary"', '      size="medium"', '      @click="onConfirm"', '    >', '      OK', '    </Button>', '  </template>', '</Dialog>', '', '<!-- Dialog 觸發器 -->', '<Button', '  themeColor="primary"', '  variant="contained"', '  size="medium"', '  prefix="replace"', '  @click="dialog.showDialog"', '>', '  Open Dialog', '</Button>'].join("\\\\n").trim();
        }
      }
    }
  }
}`,...(z=(b=c.parameters)==null?void 0:b.docs)==null?void 0:z.source}}};const G=["DialogDefault","DialogDemo"];export{r as DialogDefault,c as DialogDemo,G as __namedExportsOrder,q as default};

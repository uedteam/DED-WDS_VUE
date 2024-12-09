import{d as x,D as $,f as s,E as u,N as K,T as S,o as g,O as C,a as v,b as i,e as B,r as p,s as r,t as h,n as V,C as A}from"./vue.esm-bundler-C-bz8AVj.js";import{_ as d}from"./Button-C6jzO9rj.js";import{_ as N}from"./Icon-Z8NrOAXH.js";import{_}from"./Title-BPzy_Myd.js";import"./index-Bb4qSo10.js";import"./iframe-DaIFIyPY.js";import"../sb-preview/runtime.js";const D=x(!1),f=()=>({showDialogStatus:D,showDialog:()=>{D.value=!0},closeDialog:()=>{D.value=!1}}),E={class:"ded-dialog-header"},I={class:"ded-dialog-body"},j={class:"ded-dialog-footer"},l={__name:"Dialog",props:{hasClose:{type:Boolean,default:!1},className:{type:String,default:""}},setup(t){const e=f(),n=t;return(a,o)=>(g(),$(S,{to:"#dialog"},[s(K,{name:"dialog"},{default:u(()=>[C(e).showDialogStatus.value?(g(),v("div",{key:0,class:"mask-overlay",onClick:o[1]||(o[1]=A(O=>C(e).closeDialog(),["self"]))},[i("div",{class:V({"ded-dialog-content":!0,[n.className]:!!n.className})},[n.hasClose===!0?(g(),v("button",{key:0,class:"ded-dialog-close-btn",onClick:o[0]||(o[0]=O=>C(e).closeDialog())},[s(N,{name:"close",size:"20"})])):B("",!0),i("div",E,[p(a.$slots,"title",{},()=>[r(h(n.title),1)])]),i("div",I,[p(a.$slots,"content",{},()=>[r(h(n.content),1)])]),i("div",j,[p(a.$slots,"footer",{},()=>[s(d,{variant:"contained",size:"medium",className:"ded-cancel-btn"},{default:u(()=>o[2]||(o[2]=[r(" Cancel ")])),_:1}),s(d,{variant:"contained",themeColor:"primary",size:"medium"},{default:u(()=>o[3]||(o[3]=[r(" OK ")])),_:1})])])],2)])):B("",!0)]),_:3})]))}};l.__docgenInfo={exportName:"default",displayName:"Dialog",description:"",tags:{},props:[{name:"hasClose",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"className",type:{name:"string"},defaultValue:{func:!1,value:'""'}}],slots:[{name:"title"},{name:"content"},{name:"footer"}],sourceFiles:["/Users/auouser/Desktop/Work_Space/DED-WDS_VUE/libs/src/ui/element/Dialog/Dialog.vue"]};const G={components:{Title:_,Dialog:l},title:"Component/Dialog",component:l,tags:["autodocs"],argTypes:{hasClose:{description:"是否有關閉按鈕",control:{type:"boolean"}},className:{description:"客製化樣式",control:{type:"text"}},title:{description:"標題",control:{type:"text"},table:{type:{summary:"Vue Component | HTML"},defaultValue:{summary:"Title"}}},content:{description:"內容",control:{type:"text"},table:{type:{summary:"Vue Component | HTML"},defaultValue:{summary:"Content"}}},footer:{description:"footer 插槽",control:{type:"text"},table:{type:{summary:"Vue Component | HTML"}}}},parameters:{docs:{title:"Dialog",description:{component:"Dialog 組件的呈現及說明。"}},actions:{disabled:!0}}},c={name:"預設項目",args:{hasClose:!1,className:"",title:"Title",content:"Content"},render:t=>({components:{Dialog:l,Button:d,Icon:N},setup(){const e=f();return{args:t,dialog:e,onClose:()=>{window.alert("Close"),e.closeDialog()},onConfirm:()=>{window.alert("OK"),e.closeDialog()},onCancel:()=>{window.alert("Cancel"),e.closeDialog()}}},template:`
            <div :class="['ded-dialog-content', ...args.className.split(' ')]">
                <button v-if="args.hasClose" class="ded-dialog-close-btn" @click="onClose">
                    <Icon name="close" size="20"></Icon>
                </button>
                <div class="ded-dialog-header">
                    {{ args.title }}
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
        `}),parameters:{controls:{},docs:{source:{transform:(t,e)=>{const{args:n}=e;return["<Dialog",`  :hasClose="${n.hasClose}"`,'  className=""',">","  <template #footer>","    <Button",'      variant="contained"','      size="medium"','      class="ded-cancel-btn"','      @click="onCancel"',"    >","      Cancel","    </Button>","    <Button",'      variant="contained"','      themeColor="error"','      size="medium"','      @click="onConfirm"',"    >","      OK","    </Button>","  </template>","</Dialog>"].join(`
`).trim()}}}}},m={name:"Demo",args:{hasClose:!0,className:""},render:t=>({components:{Dialog:l,Button:d,Title:_},setup(){const e=f();return{args:t,dialog:e,onConfirm:()=>{window.alert("OK"),e.closeDialog()},onCancel:()=>{window.alert("Cancel"),e.closeDialog()}}},template:`
            <Dialog
                title=""
                :content="args.content"
                :hasClose="args.hasClose"
                className=""
            >
                <template #title>
                    <Title level="3">Title</Title>
                </template>
                <template #footert>
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
        `}),parameters:{controls:{},docs:{source:{transform:(t,e)=>['import { useDialog } from "@/ui/element/Dialog/useDialog.js";',"const dialog = useDialog();","","<Dialog",'  title=""','  :content="${args.content}"','  :hasClose="${args.hasClose}"','  className=""',">","  <template #title>",'    <Title level="3">Title</Title>',"  </template>","  <template #footer>","    <Button",'      variant="contained"','      size="medium"','      class="ded-cancel-btn"','      @click="onCancel"',"    >","      Cancel","    </Button>","    <Button",'      variant="contained"','      themeColor="primary"','      size="medium"','      @click="onConfirm"',"    >","      OK","    </Button>","  </template>","</Dialog>","","<!-- Dialog 觸發器 -->","<Button",'  themeColor="primary"','  variant="contained"','  size="medium"','  prefix="replace"','  @click="dialog.showDialog"',">","  Open Dialog","</Button>"].join("\\n").trim()}}}};var y,k,b;c.parameters={...c.parameters,docs:{...(y=c.parameters)==null?void 0:y.docs,source:{originalSource:`{
  name: "預設項目",
  args: {
    hasClose: false,
    className: '',
    title: 'Title',
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
                    {{ args.title }}
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
}`,...(b=(k=c.parameters)==null?void 0:k.docs)==null?void 0:b.source}}};var w,z,T;m.parameters={...m.parameters,docs:{...(w=m.parameters)==null?void 0:w.docs,source:{originalSource:`{
  name: "Demo",
  args: {
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
        onConfirm,
        onCancel
      };
    },
    template: \`
            <Dialog
                title=""
                :content="args.content"
                :hasClose="args.hasClose"
                className=""
            >
                <template #title>
                    <Title level="3">Title</Title>
                </template>
                <template #footert>
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
          return [\`import { useDialog } from "@/ui/element/Dialog/useDialog.js";\`, \`const dialog = useDialog();\`, '', '<Dialog', '  title=""', '  :content="\${args.content}"', '  :hasClose="\${args.hasClose}"', '  className=""', '>', '  <template #title>', '    <Title level="3">Title</Title>', '  </template>', '  <template #footer>', '    <Button', '      variant="contained"', '      size="medium"', '      class="ded-cancel-btn"', '      @click="onCancel"', '    >', '      Cancel', '    </Button>', '    <Button', '      variant="contained"', '      themeColor="primary"', '      size="medium"', '      @click="onConfirm"', '    >', '      OK', '    </Button>', '  </template>', '</Dialog>', '', '<!-- Dialog 觸發器 -->', '<Button', '  themeColor="primary"', '  variant="contained"', '  size="medium"', '  prefix="replace"', '  @click="dialog.showDialog"', '>', '  Open Dialog', '</Button>'].join("\\\\n").trim();
        }
      }
    }
  }
}`,...(T=(z=m.parameters)==null?void 0:z.docs)==null?void 0:T.source}}};const J=["DialogDefault","DialogDemo"];export{c as DialogDefault,m as DialogDemo,J as __namedExportsOrder,G as default};

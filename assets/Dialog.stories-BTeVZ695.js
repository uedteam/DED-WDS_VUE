import{f as N,C as O,a as l,D as u,N as _,T as K,o as c,O as p,c as h,d as i,b as D,r as g,s as v,n as A,K as V}from"./vue.esm-bundler-g0-RGFhA.js";import{_ as m}from"./Button-g7vREGfy.js";import{_ as w}from"./Icon-DeWBP8aK.js";import{_ as C}from"./Title-Dx6JTtIH.js";import"./iframe-B--EIfDL.js";import"../sb-preview/runtime.js";const y=N(!1),f=()=>({showDialogStatus:y,showDialog:()=>{y.value=!0},closeDialog:()=>{y.value=!1}}),$={class:"ded-dialog-header"},E={class:"ded-dialog-body"},S={class:"ded-dialog-footer"},s={__name:"Dialog",props:{hasClose:{type:Boolean,default:!1},className:{type:String,default:""}},setup(o){const e=f(),n=o;return(a,t)=>(c(),O(K,{to:"#dialog"},[l(_,{name:"dialog"},{default:u(()=>[p(e).showDialogStatus.value?(c(),h("div",{key:0,class:"mask-overlay",onClick:t[1]||(t[1]=V(x=>p(e).closeDialog(),["self"]))},[i("div",{class:A({"ded-dialog-content":!0,[n.className]:!!n.className})},[n.hasClose===!0?(c(),h("button",{key:0,class:"ded-dialog-close-btn",onClick:t[0]||(t[0]=x=>p(e).closeDialog())},[l(w,{name:"close",size:"20"})])):D("",!0),i("div",$,[g(a.$slots,"header")]),i("div",E,[g(a.$slots,"content")]),i("div",S,[g(a.$slots,"footer",{},()=>[l(m,{variant:"contained",size:"medium",className:"ded-cancel-btn"},{default:u(()=>t[2]||(t[2]=[v(" Cancel ")])),_:1}),l(m,{variant:"contained",themeColor:"primary",size:"medium"},{default:u(()=>t[3]||(t[3]=[v(" OK ")])),_:1})])])],2)])):D("",!0)]),_:3})]))}};s.__docgenInfo={exportName:"default",displayName:"Dialog",description:"",tags:{},props:[{name:"hasClose",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"className",type:{name:"string"},defaultValue:{func:!1,value:'""'}}],slots:[{name:"header"},{name:"content"},{name:"footer"}],sourceFiles:["/Users/auouser/Desktop/Work_Space/DED-WDS_VUE/libs/src/ui/element/Dialog/Dialog.vue"]};const W={components:{Title:C,Dialog:s},title:"Component/Dialog",component:s,tags:["autodocs"],argTypes:{hasClose:{description:"是否有關閉按鈕",control:{type:"boolean"}},className:{description:"客製化樣式",control:{type:"text"}},header:{description:"標題",control:{type:"text"},table:{type:{summary:"Vue Component | HTML"},defaultValue:{summary:"Title"}}},content:{description:"內容",control:{type:"text"},table:{type:{summary:"Vue Component | HTML"},defaultValue:{summary:"Content"}}},footer:{description:"附註",control:{type:"text"},table:{type:{summary:"Vue Component | HTML"}}}},parameters:{docs:{title:"Dialog",description:{component:"Dialog 組件的呈現及說明。"}},actions:{disabled:!0}}},r={name:"預設項目",args:{hasClose:!0,className:"",header:'<Title themeColor="primary" :level="2" >Title</Title>',content:"<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard</p>",footer:'<Button variant="filled" radius="md" class="ded-cancel-btn" v-on:click="onCancel">Cancel</Button><Button variant="filled" radius="md" @click="onConfirm">OK</Button>'},render:o=>({components:{Dialog:s,Button:m,Icon:w,Title:C},setup(){const e=f();return{args:o,dialog:e,onClose:()=>{window.alert("Close"),e.closeDialog()},onConfirm:()=>{window.alert("OK"),e.closeDialog()},onCancel:()=>{window.alert("Cancel"),e.closeDialog()}}},template:`
            <div :class="['ded-dialog-content', ...args.className.split(' ')]">
                <button v-if="args.hasClose" class="ded-dialog-close-btn" @click="onClose">
                    <Icon name="close" size="20"></Icon>
                </button>
                <div class="ded-dialog-header">
                    <Title themeColor="primary" :level="2" >Title</Title>
                </div>
                <div class="ded-dialog-body">
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard</p>
                </div>
                <div class="ded-dialog-footer">
                    <Button variant="filled" radius="md" class="ded-cancel-btn"
                            @click="onCancel">
                        Cancel
                    </Button>
                    <Button variant="filled" radius="md" @click="onConfirm">
                        OK
                    </Button>
                </div>
            </div>
        `}),parameters:{controls:{},docs:{source:{transform:(o,e)=>{const{args:n}=e;return["<Dialog",`  :hasClose="${n.hasClose}"`,'  className=""',">","  <template #header>",'    <Title themeColor="primary" :level="2">Title</Title>',"  </template>","  <template #content>","    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard</p>","  </template>","  <template #footer>","    <Button",'      variant="filled"','      radius="md"','      class="ded-cancel-btn"','      @click="onCancel"',"    >","      Cancel","    </Button>","    <Button",'      variant="filled"','      radius="md"','      @click="onConfirm"',"    >","      OK","    </Button>","  </template>","</Dialog>","","<Button",'  variant="filled"','  radius="md"','  @click="dialog.showDialog"',">","  Open Dialog","</Button>"].join(`
`).trim()}}}}},d={name:"互動模式",args:{content:"Content",hasClose:!0,className:""},render:o=>({components:{Dialog:s,Button:m,Title:C},setup(){const e=f();return{args:o,dialog:e,onClose:()=>{window.alert("Close"),e.closeDialog()},onConfirm:()=>{window.alert("OK"),e.closeDialog()},onCancel:()=>{window.alert("Cancel"),e.closeDialog()}}},template:`
            <Dialog
                :hasClose="args.hasClose"
                className=""
            >
                <template #header>
                    <Title themeColor="primary" :level="2" >Title</Title>
                </template>
                <template #content>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard</p>
                </template>
                <template #footer>
                    <Button variant="filled" radius="md" class="ded-cancel-btn"
                            @click="onCancel">
                        Cancel
                    </Button>
                    <Button variant="filled" radius="md" @click="onConfirm">
                        OK
                    </Button>
                </template>
            </Dialog>
            
            <Button
                variant="filled"
                radius="md"
                @click="dialog.showDialog">
                Open Dialog
            </Button>
        `}),parameters:{controls:{},docs:{source:{transform:(o,e)=>{const{args:n}=e;return["<Dialog",`  :hasClose="${n.hasClose}"`,'  className=""',">","  <template #header>",'    <Title themeColor="primary" :level="2">Title</Title>',"  </template>","  <template #content>","    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard</p>","  </template>","  <template #footer>","    <Button",'      variant="filled"','      radius="md"','      class="ded-cancel-btn"','      @click="onCancel"',"    >","      Cancel","    </Button>","    <Button",'      variant="filled"','      radius="md"','      @click="onConfirm"',"    >","      OK","    </Button>","  </template>","</Dialog>","","<Button",'  variant="filled"','  radius="md"','  @click="dialog.showDialog"',">","  Open Dialog","</Button>"].join(`
`).trim()}}}}};var B,b,I;r.parameters={...r.parameters,docs:{...(B=r.parameters)==null?void 0:B.docs,source:{originalSource:`{
  name: "預設項目",
  args: {
    hasClose: true,
    className: '',
    header: \`<Title themeColor="primary" :level="2" >Title</Title>\`,
    content: \`<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard</p>\`,
    footer: \`<Button variant="filled" radius="md" class="ded-cancel-btn" v-on:click="onCancel">Cancel</Button><Button variant="filled" radius="md" @click="onConfirm">OK</Button>\`
  },
  render: args => ({
    components: {
      Dialog,
      Button,
      Icon,
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
            <div :class="['ded-dialog-content', ...args.className.split(' ')]">
                <button v-if="args.hasClose" class="ded-dialog-close-btn" @click="onClose">
                    <Icon name="close" size="20"></Icon>
                </button>
                <div class="ded-dialog-header">
                    <Title themeColor="primary" :level="2" >Title</Title>
                </div>
                <div class="ded-dialog-body">
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard</p>
                </div>
                <div class="ded-dialog-footer">
                    <Button variant="filled" radius="md" class="ded-cancel-btn"
                            @click="onCancel">
                        Cancel
                    </Button>
                    <Button variant="filled" radius="md" @click="onConfirm">
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
          return [\`<Dialog\`, \`  :hasClose="\${args.hasClose}"\`, \`  className=""\`, \`>\`, \`  <template #header>\`, \`    <Title themeColor="primary" :level="2">Title</Title>\`, \`  </template>\`, \`  <template #content>\`, \`    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard</p>\`, \`  </template>\`, \`  <template #footer>\`, \`    <Button\`, \`      variant="filled"\`, \`      radius="md"\`, \`      class="ded-cancel-btn"\`, \`      @click="onCancel"\`, \`    >\`, \`      Cancel\`, \`    </Button>\`, \`    <Button\`, \`      variant="filled"\`, \`      radius="md"\`, \`      @click="onConfirm"\`, \`    >\`, \`      OK\`, \`    </Button>\`, \`  </template>\`, \`</Dialog>\`, \`\`, \`<Button\`, \`  variant="filled"\`, \`  radius="md"\`, \`  @click="dialog.showDialog"\`, \`>\`, \`  Open Dialog\`, \`</Button>\`].join("\\n").trim();
        }
      }
    }
  }
}`,...(I=(b=r.parameters)==null?void 0:b.docs)==null?void 0:I.source}}};var T,L,k;d.parameters={...d.parameters,docs:{...(T=d.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
                    <Title themeColor="primary" :level="2" >Title</Title>
                </template>
                <template #content>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard</p>
                </template>
                <template #footer>
                    <Button variant="filled" radius="md" class="ded-cancel-btn"
                            @click="onCancel">
                        Cancel
                    </Button>
                    <Button variant="filled" radius="md" @click="onConfirm">
                        OK
                    </Button>
                </template>
            </Dialog>
            
            <Button
                variant="filled"
                radius="md"
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
          return [\`<Dialog\`, \`  :hasClose="\${args.hasClose}"\`, \`  className=""\`, \`>\`, \`  <template #header>\`, \`    <Title themeColor="primary" :level="2">Title</Title>\`, \`  </template>\`, \`  <template #content>\`, \`    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard</p>\`, \`  </template>\`, \`  <template #footer>\`, \`    <Button\`, \`      variant="filled"\`, \`      radius="md"\`, \`      class="ded-cancel-btn"\`, \`      @click="onCancel"\`, \`    >\`, \`      Cancel\`, \`    </Button>\`, \`    <Button\`, \`      variant="filled"\`, \`      radius="md"\`, \`      @click="onConfirm"\`, \`    >\`, \`      OK\`, \`    </Button>\`, \`  </template>\`, \`</Dialog>\`, \`\`, \`<Button\`, \`  variant="filled"\`, \`  radius="md"\`, \`  @click="dialog.showDialog"\`, \`>\`, \`  Open Dialog\`, \`</Button>\`].join("\\n").trim();
        }
      }
    }
  }
}`,...(k=(L=d.parameters)==null?void 0:L.docs)==null?void 0:k.source}}};const q=["DialogDefault","DialogDemo"];export{r as DialogDefault,d as DialogDemo,q as __namedExportsOrder,W as default};

import{h as O,D as R,b as i,d as u,P as K,T as $,o as c,Q as p,c as v,a as l,e as w,r as g,f as B,n as A,K as V}from"./vue.esm-bundler-C8tbd0VY.js";import{_ as m}from"./Button-Ck9oqLH6.js";import{_ as f}from"./Icon-D-NDJAD3.js";import{_ as h}from"./Title-D3Q4XMVN.js";import{_ as y,a as G,b as _}from"./Column-DYTY-mVX.js";import"./iframe-CrLK0dA1.js";import"../sb-preview/runtime.js";const C=O(!1),D=()=>({showDialogStatus:C,showDialog:()=>{C.value=!0},closeDialog:()=>{C.value=!1}}),E={class:"ded-dialog-header"},S={class:"ded-dialog-body"},z={class:"ded-dialog-footer"},a={__name:"Dialog",props:{hasClose:{type:Boolean,default:!1},className:{type:String,default:""}},setup(o){const t=D(),e=o;return(s,n)=>(c(),R($,{to:"#dialog"},[i(K,{name:"dialog"},{default:u(()=>[p(t).showDialogStatus.value?(c(),v("div",{key:0,class:"mask-overlay",onClick:n[1]||(n[1]=V(N=>p(t).closeDialog(),["self"]))},[l("div",{class:A({"ded-dialog-content":!0,[e.className]:!!e.className})},[e.hasClose===!0?(c(),v("button",{key:0,class:"ded-dialog-close-btn",onClick:n[0]||(n[0]=N=>p(t).closeDialog())},[i(f,{name:"close",size:"20"})])):w("",!0),l("div",E,[g(s.$slots,"header")]),l("div",S,[g(s.$slots,"content")]),l("div",z,[g(s.$slots,"footer",{},()=>[i(m,{variant:"contained",size:"medium",className:"ded-cancel-btn"},{default:u(()=>n[2]||(n[2]=[B(" Cancel ")])),_:1}),i(m,{variant:"contained",themeColor:"primary",size:"medium"},{default:u(()=>n[3]||(n[3]=[B(" OK ")])),_:1})])])],2)])):w("",!0)]),_:3})]))}};a.__docgenInfo={exportName:"default",displayName:"Dialog",description:"",tags:{},props:[{name:"hasClose",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"className",type:{name:"string"},defaultValue:{func:!1,value:'""'}}],slots:[{name:"header"},{name:"content"},{name:"footer"}],sourceFiles:["D:/98_測試/up/DED-WDS_VUE/libs/src/ui/element/Dialog/Dialog.vue"]};const W={components:{Column:y,Title:h,Dialog:a},title:"Component/Dialog",component:a,tags:["autodocs"],argTypes:{hasClose:{description:"是否有關閉按鈕",control:{type:"boolean"}},className:{description:"客製化樣式",control:{type:"text"}},header:{description:"標題",control:{type:"text"},table:{type:{summary:"Vue Component | HTML"},defaultValue:{summary:"Title"}}},content:{description:"內容",control:{type:"text"},table:{type:{summary:"Vue Component | HTML"},defaultValue:{summary:"Content"}}},footer:{description:"附註",control:{type:"text"},table:{type:{summary:"Vue Component | HTML"}}}},parameters:{docs:{title:"Dialog",description:{component:"Dialog 組件的呈現及說明。"}},actions:{disabled:!0}}},r={name:"預設項目",args:{hasClose:!0,className:"",header:'<Title :level="2" >Title</Title>',content:"<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard</p>",footer:'<Grid><Row :hasGap="true"><Column :sm="4"><Button variant="filled" radius="md" width="fluid" @click="onConfirm">OK</Button></Column><Column :sm="4"><Button variant="soft" radius="md" width="fluid" @click="onCancel">Cancel</Button></Column></Row></Grid>'},render:o=>({components:{Dialog:a,Button:m,Icon:f,Title:h,Grid:G,Row:_,Column:y},setup(){const t=D();return{args:o,dialog:t,onClose:()=>{window.alert("Close"),t.closeDialog()},onConfirm:()=>{window.alert("OK"),t.closeDialog()},onCancel:()=>{window.alert("Cancel"),t.closeDialog()}}},template:`
            <div :class="['ded-dialog-content', ...args.className.split(' ')]">
                <button v-if="args.hasClose" class="ded-dialog-close-btn" @click="onClose">
                    <Icon name="close" size="20"></Icon>
                </button>
                <div class="ded-dialog-header">
                    <Title :level="2" >Title</Title>
                </div>
                <div class="ded-dialog-body">
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard</p>
                </div>
                <div class="ded-dialog-footer">
                    <Grid>
                        <Row :hasGap="true">
                            <Column :sm="4">
                                <Button variant="filled" radius="md" width="fluid" @click="onConfirm">
                                    OK
                                </Button>
                            </Column>
                            <Column :sm="4">
                                <Button variant="soft" radius="md" width="fluid" @click="onCancel">
                                    Cancel
                                </Button>
                            </Column>
                        </Row>
                    </Grid>
                </div>
            </div>
        `}),parameters:{controls:{},docs:{source:{transform:(o,t)=>{const{args:e}=t;return["<Dialog",`  :hasClose="${e.hasClose}"`,'  className=""',">","  <template #header>",'    <Title :level="2">Title</Title>',"  </template>","  <template #content>","    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard</p>","  </template>","  <template #footer>","    <Button",'      variant="filled"','      radius="md"','      @click="onConfirm"',"    >","      OK","    </Button>","    <Button",'      variant="filled"','      radius="md"','      class="ded-cancel-btn"','      @click="onCancel"',"    >","      Cancel","    </Button>","  </template>","</Dialog>","","<Button",'  variant="filled"','  radius="md"','  @click="dialog.showDialog"',">","  Open Dialog","</Button>"].join(`
`).trim()}}}}},d={name:"互動模式",args:{content:"Content",hasClose:!0,className:""},render:o=>({components:{Dialog:a,Button:m,Icon:f,Title:h,Grid:G,Row:_,Column:y},setup(){const t=D();return{args:o,dialog:t,onClose:()=>{window.alert("Close"),t.closeDialog()},onConfirm:()=>{window.alert("OK"),t.closeDialog()},onCancel:()=>{window.alert("Cancel"),t.closeDialog()}}},template:`
            <Dialog
                :hasClose="args.hasClose"
                className=""
            >
                <template #header>
                    <Title :level="2" >Title</Title>
                </template>
                <template #content>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard</p>
                </template>
                <template #footer>
                    <Grid>
                        <Row :hasGap="true">
                            <Column :sm="4">
                                <Button variant="filled" radius="md" width="fluid" @click="onConfirm">
                                    OK
                                </Button>
                            </Column>
                            <Column :sm="4">
                                <Button variant="soft" radius="md" width="fluid" @click="onCancel">
                                    Cancel
                                </Button>
                            </Column>
                        </Row>
                    </Grid>
                </template>
            </Dialog>
            
            <Button
                variant="filled"
                radius="4px"
                @click="dialog.showDialog">
                Open Dialog
            </Button>
        `}),parameters:{controls:{},docs:{source:{transform:(o,t)=>{const{args:e}=t;return["<Dialog",`  :hasClose="${e.hasClose}"`,'  className=""',">","  <template #header>",'    <Title :level="2">Title</Title>',"  </template>","  <template #content>","    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard</p>","  </template>","  <template #footer>","    <Grid>",'      <Row :hasGap="true">','        <Column :sm="4">',"          <Button",'            variant="filled"','            radius="md"','            width="fluid"','            @click="onConfirm"',"          >","            OK","          </Button>","        </Column>",'        <Column :sm="4">',"          <Button",'            variant="soft"','            radius="md"','            width="fluid"','            @click="onCancel"',"          >","            Cancel","          </Button>","        </Column>","      </Row>","    </Grid>","  </template>","</Dialog>","","<Button",'  variant="filled"','  radius="4px"','  @click="dialog.showDialog"',">","  Open Dialog","</Button>"].join(`
`).trim()}}}}};var I,b,T;r.parameters={...r.parameters,docs:{...(I=r.parameters)==null?void 0:I.docs,source:{originalSource:`{
  name: "預設項目",
  args: {
    hasClose: true,
    className: '',
    header: \`<Title :level="2" >Title</Title>\`,
    content: \`<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard</p>\`,
    footer: \`<Grid><Row :hasGap="true"><Column :sm="4"><Button variant="filled" radius="md" width="fluid" @click="onConfirm">OK</Button></Column><Column :sm="4"><Button variant="soft" radius="md" width="fluid" @click="onCancel">Cancel</Button></Column></Row></Grid>\`
  },
  render: args => ({
    components: {
      Dialog,
      Button,
      Icon,
      Title,
      Grid,
      Row,
      Column
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
                    <Title :level="2" >Title</Title>
                </div>
                <div class="ded-dialog-body">
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard</p>
                </div>
                <div class="ded-dialog-footer">
                    <Grid>
                        <Row :hasGap="true">
                            <Column :sm="4">
                                <Button variant="filled" radius="md" width="fluid" @click="onConfirm">
                                    OK
                                </Button>
                            </Column>
                            <Column :sm="4">
                                <Button variant="soft" radius="md" width="fluid" @click="onCancel">
                                    Cancel
                                </Button>
                            </Column>
                        </Row>
                    </Grid>
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
          return [\`<Dialog\`, \`  :hasClose="\${args.hasClose}"\`, \`  className=""\`, \`>\`, \`  <template #header>\`, \`    <Title :level="2">Title</Title>\`, \`  </template>\`, \`  <template #content>\`, \`    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard</p>\`, \`  </template>\`, \`  <template #footer>\`, \`    <Button\`, \`      variant="filled"\`, \`      radius="md"\`, \`      @click="onConfirm"\`, \`    >\`, \`      OK\`, \`    </Button>\`, \`    <Button\`, \`      variant="filled"\`, \`      radius="md"\`, \`      class="ded-cancel-btn"\`, \`      @click="onCancel"\`, \`    >\`, \`      Cancel\`, \`    </Button>\`, \`  </template>\`, \`</Dialog>\`, \`\`, \`<Button\`, \`  variant="filled"\`, \`  radius="md"\`, \`  @click="dialog.showDialog"\`, \`>\`, \`  Open Dialog\`, \`</Button>\`].join("\\n").trim();
        }
      }
    }
  }
}`,...(T=(b=r.parameters)==null?void 0:b.docs)==null?void 0:T.source}}};var L,k,x;d.parameters={...d.parameters,docs:{...(L=d.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
      Icon,
      Title,
      Grid,
      Row,
      Column
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
                    <Title :level="2" >Title</Title>
                </template>
                <template #content>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard</p>
                </template>
                <template #footer>
                    <Grid>
                        <Row :hasGap="true">
                            <Column :sm="4">
                                <Button variant="filled" radius="md" width="fluid" @click="onConfirm">
                                    OK
                                </Button>
                            </Column>
                            <Column :sm="4">
                                <Button variant="soft" radius="md" width="fluid" @click="onCancel">
                                    Cancel
                                </Button>
                            </Column>
                        </Row>
                    </Grid>
                </template>
            </Dialog>
            
            <Button
                variant="filled"
                radius="4px"
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
          return [\`<Dialog\`, \`  :hasClose="\${args.hasClose}"\`, \`  className=""\`, \`>\`, \`  <template #header>\`, \`    <Title :level="2">Title</Title>\`, \`  </template>\`, \`  <template #content>\`, \`    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard</p>\`, \`  </template>\`, \`  <template #footer>\`, \`    <Grid>\`, \`      <Row :hasGap="true">\`, \`        <Column :sm="4">\`, \`          <Button\`, \`            variant="filled"\`, \`            radius="md"\`, \`            width="fluid"\`, \`            @click="onConfirm"\`, \`          >\`, \`            OK\`, \`          </Button>\`, \`        </Column>\`, \`        <Column :sm="4">\`, \`          <Button\`, \`            variant="soft"\`, \`            radius="md"\`, \`            width="fluid"\`, \`            @click="onCancel"\`, \`          >\`, \`            Cancel\`, \`          </Button>\`, \`        </Column>\`, \`      </Row>\`, \`    </Grid>\`, \`  </template>\`, \`</Dialog>\`, \`\`, \`<Button\`, \`  variant="filled"\`, \`  radius="4px"\`, \`  @click="dialog.showDialog"\`, \`>\`, \`  Open Dialog\`, \`</Button>\`].join("\\n").trim();
        }
      }
    }
  }
}`,...(x=(k=d.parameters)==null?void 0:k.docs)==null?void 0:x.source}}};const q=["DialogDefault","DialogDemo"];export{r as DialogDefault,d as DialogDemo,q as __namedExportsOrder,W as default};

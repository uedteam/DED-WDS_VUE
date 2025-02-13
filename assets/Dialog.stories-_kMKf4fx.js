import{m as k,u as x,j as G,b as a,d as m,I as N,T as R,o as u,c as y,a as l,e as h,r as p,f as v,n as _,J as $}from"./vue.esm-bundler-qCK_iSPY.js";import{_ as d}from"./Button-DOqzoiF2.js";import{_ as c}from"./Icon-DNPtS85k.js";import{_ as C}from"./Title-Bap0zsXG.js";import{_ as f,a as T,b as L}from"./Column-BeQtJE1y.js";import"./iframe-B08jCWer.js";import"../sb-preview/runtime.js";const K={class:"ded-dialog-header"},V={class:"ded-dialog-body"},A={class:"ded-dialog-footer"},s={__name:"Dialog",props:k({hasClose:{type:Boolean,default:!1},className:{type:String,default:""}},{modelValue:{},modelModifiers:{}}),emits:["update:modelValue"],setup(e){const t=x(e,"modelValue");return(o,n)=>(u(),G(R,{to:"#dialog"},[a(N,{name:"dialog"},{default:m(()=>[t.value?(u(),y("div",{key:0,class:"mask-overlay",onClick:n[2]||(n[2]=$(g=>t.value=!1,["self"]))},[l("div",{class:_({"ded-dialog-content":!0,[e.className]:!!e.className})},[e.hasClose===!0?(u(),y("button",{key:0,class:"ded-dialog-close-btn",onClick:n[0]||(n[0]=g=>t.value=!1)},[a(c,{name:"SvgClose",size:"20"})])):h("",!0),l("div",K,[p(o.$slots,"header")]),l("div",V,[p(o.$slots,"content")]),l("div",A,[p(o.$slots,"footer",{},()=>[a(d,{variant:"contained",size:"medium",className:"ded-cancel-btn",onClick:n[1]||(n[1]=g=>t.value=!1)},{default:m(()=>n[3]||(n[3]=[v(" Cancel ")])),_:1}),a(d,{variant:"contained",themeColor:"primary",size:"medium"},{default:m(()=>n[4]||(n[4]=[v(" OK ")])),_:1})])])],2)])):h("",!0)]),_:3})]))}};s.__docgenInfo={exportName:"default",displayName:"Dialog",description:"",tags:{},props:[{name:"hasClose",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"className",type:{name:"string"},defaultValue:{func:!1,value:'""'}}],slots:[{name:"header"},{name:"content"},{name:"footer"}],sourceFiles:["/Users/auouser/Desktop/Work_Space/DED-WDS_VUE/libs/src/ui/element/Dialog/Dialog.vue"]};const U={components:{Column:f,Title:C,Dialog:s},title:"Component/Dialog",component:s,tags:["autodocs"],argTypes:{modelIsOpen:{description:"是否開啟",control:{type:"boolean"},table:{category:"v-model"}},hasClose:{description:"是否有關閉按鈕",control:{type:"boolean"}},className:{description:"客製化樣式",control:{type:"text"}},header:{description:"標題",control:{type:"text"},table:{type:{summary:"Vue Component | HTML"},defaultValue:{summary:"Title"}}},content:{description:"內容",control:{type:"text"},table:{type:{summary:"Vue Component | HTML"},defaultValue:{summary:"Content"}}},footer:{description:"附註",control:{type:"text"},table:{type:{summary:"Vue Component | HTML"}}}},parameters:{docs:{title:"Dialog",description:{component:"彈窗組件的呈現及說明。"}},actions:{disabled:!0}}},i={name:"預設項目",args:{hasClose:!0,className:"",modelIsOpen:!0,header:'<Title themeColor="primary" :level="2" >Title</Title>',content:"<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard</p>",footer:'<Grid><Row :hasGap="true"><Column :sm="4"><Button variant="filled" radius="md" width="fluid" @click="onConfirm">OK</Button></Column><Column :sm="4"><Button variant="soft" radius="md" width="fluid" @click="onCancel">Cancel</Button></Column></Row></Grid>'},render:e=>({components:{Dialog:s,Button:d,Icon:c,Title:C,Grid:T,Row:L,Column:f},setup(){return{args:e,onClose:()=>{window.alert("Close"),e.modelIsOpen=!1},onConfirm:()=>{window.alert("OK"),e.modelIsOpen=!1},onCancel:()=>{window.alert("Cancel"),e.modelIsOpen=!1}}},template:`
            <div :class="['ded-dialog-content', ...args.className.split(' ')]" v-if="args.modelIsOpen">
                <button v-if="args.hasClose" class="ded-dialog-close-btn" @click="onClose">
                    <Icon name="SvgClose" size="20"></Icon>
                </button>
                <div class="ded-dialog-header">
                    <Title themeColor="primary" :level="2" >Title</Title>
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
        `}),parameters:{controls:{},docs:{source:{transform:(e,t)=>{const{args:o}=t;return["<Dialog",`  :hasClose="${o.hasClose}"`,'  v-model="modelIsOpen"','  className=""',">","  <template #header>",'    <Title :level="2">Title</Title>',"  </template>","  <template #content>","    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard</p>","  </template>","  <template #footer>","    <Button",'      variant="filled"','      radius="md"','      @click="onConfirm"',"    >","      OK","    </Button>","    <Button",'      variant="filled"','      radius="md"','      class="ded-cancel-btn"','      @click="onCancel"',"    >","      Cancel","    </Button>","  </template>","</Dialog>","","<Button",'  variant="filled"','  radius="md"','  @click="dialog.showDialog"',">","  Open Dialog","</Button>"].join(`
`).trim()}}}}},r={name:"互動模式",args:{hasClose:!0,modelIsOpen:!1,className:""},render:e=>({components:{Dialog:s,Button:d,Icon:c,Title:C,Grid:T,Row:L,Column:f},setup(){return{args:e,onClose:()=>{window.alert("Close"),e.modelIsOpen=!1},onConfirm:()=>{window.alert("OK"),e.modelIsOpen=!1},onCancel:()=>{window.alert("Cancel"),e.modelIsOpen=!1}}},template:`
            <Dialog
                :hasClose="args.hasClose"
                className=""
                v-model="args.modelIsOpen"
            >
                <template #header>
                    <Title themeColor="primary" :level="2" >Title</Title>
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
                @click="args.modelIsOpen = true">
                Open Dialog
            </Button>
        `}),parameters:{controls:{exclude:["header","content","footer"]},docs:{source:{transform:(e,t)=>{const{args:o}=t;return["<Dialog",`  :hasClose="${o.hasClose}"`,'  className=""',">","  <template #header>",'    <Title :level="2">Title</Title>',"  </template>","  <template #content>","    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard</p>","  </template>","  <template #footer>","    <Grid>",'      <Row :hasGap="true">','        <Column :sm="4">',"          <Button",'            variant="filled"','            radius="md"','            width="fluid"','            @click="onConfirm"',"          >","            OK","          </Button>","        </Column>",'        <Column :sm="4">',"          <Button",'            variant="soft"','            radius="md"','            width="fluid"','            @click="onCancel"',"          >","            Cancel","          </Button>","        </Column>","      </Row>","    </Grid>","  </template>","</Dialog>","","<Button",'  variant="filled"','  radius="4px"','  @click="dialog.showDialog"',">","  Open Dialog","</Button>"].join(`
`).trim()}}}}};var I,w,D;i.parameters={...i.parameters,docs:{...(I=i.parameters)==null?void 0:I.docs,source:{originalSource:`{
  name: "預設項目",
  args: {
    hasClose: true,
    className: '',
    modelIsOpen: true,
    header: \`<Title themeColor="primary" :level="2" >Title</Title>\`,
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
      const onClose = () => {
        window.alert('Close');
        args.modelIsOpen = false; // 關閉對話框
      };
      const onConfirm = () => {
        window.alert('OK');
        args.modelIsOpen = false; // 關閉對話框
      };
      const onCancel = () => {
        window.alert('Cancel');
        args.modelIsOpen = false; // 關閉對話框
      };
      return {
        args,
        onClose,
        onConfirm,
        onCancel
      };
    },
    template: \`
            <div :class="['ded-dialog-content', ...args.className.split(' ')]" v-if="args.modelIsOpen">
                <button v-if="args.hasClose" class="ded-dialog-close-btn" @click="onClose">
                    <Icon name="SvgClose" size="20"></Icon>
                </button>
                <div class="ded-dialog-header">
                    <Title themeColor="primary" :level="2" >Title</Title>
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
          return [\`<Dialog\`, \`  :hasClose="\${args.hasClose}"\`, \`  v-model="modelIsOpen"\`, \`  className=""\`, \`>\`, \`  <template #header>\`, \`    <Title :level="2">Title</Title>\`, \`  </template>\`, \`  <template #content>\`, \`    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard</p>\`, \`  </template>\`, \`  <template #footer>\`, \`    <Button\`, \`      variant="filled"\`, \`      radius="md"\`, \`      @click="onConfirm"\`, \`    >\`, \`      OK\`, \`    </Button>\`, \`    <Button\`, \`      variant="filled"\`, \`      radius="md"\`, \`      class="ded-cancel-btn"\`, \`      @click="onCancel"\`, \`    >\`, \`      Cancel\`, \`    </Button>\`, \`  </template>\`, \`</Dialog>\`, \`\`, \`<Button\`, \`  variant="filled"\`, \`  radius="md"\`, \`  @click="dialog.showDialog"\`, \`>\`, \`  Open Dialog\`, \`</Button>\`].join("\\n").trim();
        }
      }
    }
  }
}`,...(D=(w=i.parameters)==null?void 0:w.docs)==null?void 0:D.source}}};var B,O,b;r.parameters={...r.parameters,docs:{...(B=r.parameters)==null?void 0:B.docs,source:{originalSource:`{
  name: "互動模式",
  args: {
    hasClose: true,
    modelIsOpen: false,
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
      const onClose = () => {
        window.alert('Close');
        args.modelIsOpen = false; // 關閉對話框
      };
      const onConfirm = () => {
        window.alert('OK');
        args.modelIsOpen = false; // 關閉對話框
      };
      const onCancel = () => {
        window.alert('Cancel');
        args.modelIsOpen = false; // 關閉對話框
      };
      return {
        args,
        onClose,
        onConfirm,
        onCancel
      };
    },
    template: \`
            <Dialog
                :hasClose="args.hasClose"
                className=""
                v-model="args.modelIsOpen"
            >
                <template #header>
                    <Title themeColor="primary" :level="2" >Title</Title>
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
                @click="args.modelIsOpen = true">
                Open Dialog
            </Button>
        \`
  }),
  // 控制 controls 中能控制的參數
  parameters: {
    controls: {
      // include: ['themeColor', 'label', 'value', 'name' ],
      exclude: ['header', 'content', 'footer']
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
}`,...(b=(O=r.parameters)==null?void 0:O.docs)==null?void 0:b.source}}};const W=["DialogDefault","DialogDemo"];export{i as DialogDefault,r as DialogDemo,W as __namedExportsOrder,U as default};

import{m as V,u as x,j as G,b as s,d,I as N,T as O,o as u,c as h,a as l,e as g,r as p,f as v,n as R,J as _}from"./vue.esm-bundler-qCK_iSPY.js";import{_ as m}from"./Button-BCEQhSzR.js";import{_ as c}from"./Icon-CVEqTX2T.js";import{_ as C}from"./Title-B1whzWKf.js";import{_ as f,a as T,b as k}from"./Column-Bqa0hHha.js";import"./iframe-ChCRMyiJ.js";import"../sb-preview/runtime.js";const K={class:"ded-dialog-header"},$={class:"ded-dialog-body"},A={class:"ded-dialog-footer"},a={__name:"Dialog",props:V({hasClose:{type:Boolean,default:!1},className:{type:String,default:""}},{modelValue:{},modelModifiers:{}}),emits:["update:modelValue"],setup(e){const n=x(e,"modelValue");return(o,t)=>(u(),G(O,{to:"#dialog"},[s(N,{name:"dialog"},{default:d(()=>[n.value?(u(),h("div",{key:0,class:"mask-overlay",onClick:t[2]||(t[2]=_(y=>n.value=!1,["self"]))},[l("div",{class:R({"ded-dialog-content":!0,[e.className]:!!e.className})},[e.hasClose===!0?(u(),h("button",{key:0,class:"ded-dialog-close-btn",onClick:t[0]||(t[0]=y=>n.value=!1)},[s(c,{name:"SvgClose",size:"20"})])):g("",!0),l("div",K,[p(o.$slots,"header")]),l("div",$,[p(o.$slots,"content")]),l("div",A,[p(o.$slots,"footer",{},()=>[s(m,{variant:"contained",size:"medium",className:"ded-cancel-btn",onClick:t[1]||(t[1]=y=>n.value=!1)},{default:d(()=>t[3]||(t[3]=[v(" Cancel ")])),_:1}),s(m,{variant:"contained",themeColor:"primary",size:"medium"},{default:d(()=>t[4]||(t[4]=[v(" OK ")])),_:1})])])],2)])):g("",!0)]),_:3})]))}};a.__docgenInfo={exportName:"default",displayName:"Dialog",description:"",tags:{},props:[{name:"hasClose",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"className",type:{name:"string"},defaultValue:{func:!1,value:'""'}}],slots:[{name:"header"},{name:"content"},{name:"footer"}],sourceFiles:["/home/runner/work/DED-WDS_VUE/DED-WDS_VUE/libs/src/ui/element/Dialog/Dialog.vue"]};const U={components:{Column:f,Title:C,Dialog:a},title:"Component/Dialog",component:a,tags:["autodocs"],argTypes:{hasClose:{description:"是否有關閉按鈕",control:{type:"boolean"}},className:{description:"客製化樣式",control:{type:"text"}},modelValue:{description:"是否開啟",control:{type:"boolean"},table:{category:"v-model"}},header:{description:"標題",control:{type:"text"},table:{type:{summary:"Vue Component | HTML"},defaultValue:{summary:"Title"}}},content:{description:"內容",control:{type:"text"},table:{type:{summary:"Vue Component | HTML"},defaultValue:{summary:"Content"}}},footer:{description:"附註",control:{type:"text"},table:{type:{summary:"Vue Component | HTML"}}}},parameters:{docs:{title:"Dialog",description:{component:"彈窗組件的呈現及說明。"}},actions:{disabled:!0}}},i={name:"預設項目",args:{hasClose:!0,className:"",modelValue:!0,header:'<Title themeColor="primary" :level="2" >Title</Title>',content:"<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard</p>",footer:'<Grid><Row :hasGap="true"><Column :sm="4"><Button variant="filled" radius="md" width="fluid" @click="onConfirm">OK</Button></Column><Column :sm="4"><Button variant="soft" radius="md" width="fluid" @click="onCancel">Cancel</Button></Column></Row></Grid>'},render:e=>({components:{Dialog:a,Button:m,Icon:c,Title:C,Grid:T,Row:k,Column:f},setup(){return{args:e,onClose:()=>{window.alert("Close"),e.modelValue=!1},onConfirm:()=>{window.alert("OK"),e.modelValue=!1},onCancel:()=>{window.alert("Cancel"),e.modelValue=!1}}},template:`
            <div :class="['ded-dialog-content', ...args.className.split(' ')]" v-if="args.modelValue">
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
        `}),parameters:{controls:{},docs:{source:{transform:(e,n)=>{const{args:o}=n;return["<Dialog",`  :hasClose="${o.hasClose}"`,'  v-model="modelValue"','  className=""',">","  <template #header>",'    <Title :level="2">Title</Title>',"  </template>","  <template #content>","    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard</p>","  </template>","  <template #footer>","    <Button",'      variant="filled"','      radius="md"','      @click="onConfirm"',"    >","      OK","    </Button>","    <Button",'      variant="filled"','      radius="md"','      class="ded-cancel-btn"','      @click="onCancel"',"    >","      Cancel","    </Button>","  </template>","</Dialog>","","<Button",'  variant="filled"','  radius="md"','  @click="dialog.showDialog"',">","  Open Dialog","</Button>"].join(`
`).trim()}}}}},r={name:"互動模式",args:{hasClose:!0,modelValue:!1,className:"",header:'<Title themeColor="primary" :level="2" >Title</Title>',content:"<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard</p>",footer:'<Grid><Row :hasGap="true"><Column :sm="4"><Button variant="filled" radius="md" width="fluid" @click="onConfirm">OK</Button></Column><Column :sm="4"><Button variant="soft" radius="md" width="fluid" @click="onCancel">Cancel</Button></Column></Row></Grid>'},render:e=>({components:{Dialog:a,Button:m,Icon:c,Title:C,Grid:T,Row:k,Column:f},setup(){return{args:e,onClose:()=>{window.alert("Close"),e.modelValue=!1},onConfirm:()=>{window.alert("OK"),e.modelValue=!1},onCancel:()=>{window.alert("Cancel"),e.modelValue=!1}}},template:`
            <Dialog
                :hasClose="args.hasClose"
                :className="args.className"
                v-model="args.modelValue"
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
                @click="args.modelValue = true">
                Open Dialog
            </Button>
        `}),parameters:{controls:{},docs:{source:{transform:(e,n)=>{const{args:o}=n;return["<Dialog",`  :hasClose="${o.hasClose}"`,'  className=""',">","  <template #header>",'    <Title :level="2">Title</Title>',"  </template>","  <template #content>","    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard</p>","  </template>","  <template #footer>","    <Grid>",'      <Row :hasGap="true">','        <Column :sm="4">',"          <Button",'            variant="filled"','            radius="md"','            width="fluid"','            @click="onConfirm"',"          >","            OK","          </Button>","        </Column>",'        <Column :sm="4">',"          <Button",'            variant="soft"','            radius="md"','            width="fluid"','            @click="onCancel"',"          >","            Cancel","          </Button>","        </Column>","      </Row>","    </Grid>","  </template>","</Dialog>","","<Button",'  variant="filled"','  radius="4px"','  @click="dialog.showDialog"',">","  Open Dialog","</Button>"].join(`
`).trim()}}}}};var w,B,D;i.parameters={...i.parameters,docs:{...(w=i.parameters)==null?void 0:w.docs,source:{originalSource:`{
  name: "預設項目",
  args: {
    hasClose: true,
    className: '',
    modelValue: true,
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
        args.modelValue = false; // 關閉對話框
      };
      const onConfirm = () => {
        window.alert('OK');
        args.modelValue = false; // 關閉對話框
      };
      const onCancel = () => {
        window.alert('Cancel');
        args.modelValue = false; // 關閉對話框
      };
      return {
        args,
        onClose,
        onConfirm,
        onCancel
      };
    },
    template: \`
            <div :class="['ded-dialog-content', ...args.className.split(' ')]" v-if="args.modelValue">
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
          return [\`<Dialog\`, \`  :hasClose="\${args.hasClose}"\`, \`  v-model="modelValue"\`, \`  className=""\`, \`>\`, \`  <template #header>\`, \`    <Title :level="2">Title</Title>\`, \`  </template>\`, \`  <template #content>\`, \`    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard</p>\`, \`  </template>\`, \`  <template #footer>\`, \`    <Button\`, \`      variant="filled"\`, \`      radius="md"\`, \`      @click="onConfirm"\`, \`    >\`, \`      OK\`, \`    </Button>\`, \`    <Button\`, \`      variant="filled"\`, \`      radius="md"\`, \`      class="ded-cancel-btn"\`, \`      @click="onCancel"\`, \`    >\`, \`      Cancel\`, \`    </Button>\`, \`  </template>\`, \`</Dialog>\`, \`\`, \`<Button\`, \`  variant="filled"\`, \`  radius="md"\`, \`  @click="dialog.showDialog"\`, \`>\`, \`  Open Dialog\`, \`</Button>\`].join("\\n").trim();
        }
      }
    }
  }
}`,...(D=(B=i.parameters)==null?void 0:B.docs)==null?void 0:D.source}}};var I,b,L;r.parameters={...r.parameters,docs:{...(I=r.parameters)==null?void 0:I.docs,source:{originalSource:`{
  name: "互動模式",
  args: {
    hasClose: true,
    modelValue: false,
    className: '',
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
        args.modelValue = false; // 關閉對話框
      };
      const onConfirm = () => {
        window.alert('OK');
        args.modelValue = false; // 關閉對話框
      };
      const onCancel = () => {
        window.alert('Cancel');
        args.modelValue = false; // 關閉對話框
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
                :className="args.className"
                v-model="args.modelValue"
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
                @click="args.modelValue = true">
                Open Dialog
            </Button>
        \`
  }),
  // 控制 controls 中能控制的參數
  parameters: {
    controls: {
      // include: ['themeColor', 'label', 'value', 'name' ],
      // exclude:[ 'header', 'content', 'footer' ]
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
}`,...(L=(b=r.parameters)==null?void 0:b.docs)==null?void 0:L.source}}};const W=["DialogDefault","DialogDemo"];export{i as DialogDefault,r as DialogDemo,W as __namedExportsOrder,U as default};

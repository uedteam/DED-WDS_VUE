import{j as k,p as I,A as g,B as u,T as E,E as S,o as y,G as s,a as A,b as o,r as c,t as h,C as v,d as F}from"./vue.esm-bundler-CsTC-5Ev.js";import{B as r}from"./Button-DKyHAzLO.js";import"./index-Bb4qSo10.js";import"./Icon-Pq8-XFtv.js";import"./iframe-D3-rZU4J.js";import"../sb-preview/runtime.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const p=k(!1),w=()=>({showDialogStatus:p,showDialog:()=>{p.value=!0},closeDialog:()=>{p.value=!1}}),L={class:"dialog-wrapper"},V={class:"dialog-container"},T={class:"dialog-header"},z={class:"dialog-title"},N={class:"dialog-body"},R={class:"dialog-message"},$={class:"dialog-footer"},d={__name:"Dialog",props:{themeColor:{type:String,default:"primary",validator:a=>["primary","secondary","tertiary","success","warning","error","info"].includes(a)},title:{type:String,default:"Dialog title"},message:{type:String,default:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard "}},setup(a){const t=w(),l=a;return(m,e)=>(y(),I(S,{to:"#dialog"},[g(E,{name:"dialog"},{default:u(()=>[s(t).showDialogStatus.value?(y(),A("div",{key:0,class:"dialog-mask",onClick:e[2]||(e[2]=D=>s(t).closeDialog())},[o("div",L,[o("div",V,[o("div",T,[c(m.$slots,"dialogHeader",{},()=>[o("h3",z,h(l.title),1)])]),o("div",N,[c(m.$slots,"dialogBody",{},()=>[o("p",R,h(l.message),1)])]),o("div",$,[c(m.$slots,"dialogFooter",{},()=>[g(r,{themeColor:l.themeColor,variant:"text",onClick:e[0]||(e[0]=D=>s(t).closeDialog())},{default:u(()=>e[3]||(e[3]=[v(" Cancel")])),_:1},8,["themeColor"]),g(r,{themeColor:l.themeColor,onClick:e[1]||(e[1]=D=>s(t).closeDialog())},{default:u(()=>e[4]||(e[4]=[v("Enable")])),_:1},8,["themeColor"])])])])])])):F("",!0)]),_:3})]))}};d.__docgenInfo={exportName:"default",displayName:"Dialog",description:"",tags:{},props:[{name:"themeColor",type:{name:"string"},defaultValue:{func:!1,value:'"primary"'},values:["primary","secondary","tertiary","success","warning","error","info"]},{name:"title",type:{name:"string"},defaultValue:{func:!1,value:"'Dialog title'"}},{name:"message",type:{name:"string"},defaultValue:{func:!1,value:"'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\\'s standard '"}}],slots:[{name:"dialogHeader"},{name:"dialogBody"},{name:"dialogFooter"}],sourceFiles:["/Users/auouser/Desktop/Work_Space/DED-WDS_VUE/libs/src/ui/element/Dialog/Dialog.vue"]};const J={components:{Dialog:d},title:"Design System/Dialog",component:d,tags:["autodocs"],argTypes:{themeColor:{description:"主題顏色",control:{type:"select"},options:["primary","secondary","tertiary","success","warning","error","info"]},title:{description:"tooltip標題",control:{type:"text"}},message:{description:"tooltip說明文字",control:{type:"text"}}},parameters:{docs:{title:"Dialog",description:{component:"Dialog組件的呈現及說明。"}}}},n={name:"Dialog基礎樣式",render:()=>({components:{Button:r},template:`
                <div class="dialog-wrapper">
                    <div class="dialog-container">

                        <div class="dialog-header">
                            <slot name="dialog-header">
                                <h3 class="dialog-title">Dialog Title</h3>
                            </slot>
                        </div>

                        <div class="dialog-body">
                            <slot name="dialog-body">
                                <p class="dialog-message">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard </p>
                            </slot>
                        </div>

                        <div class="dialog-footer">
                            <slot name="dialog-footer">
                                <Button themeColor="primary" variant="text">
                                    Cancel
                                </Button>
                                <Button themeColor="primary" >Enable</Button>
                            </slot>
                        </div>
                    </div>
                </div>
        `}),parameters:{controls:{}}},i={name:"Dialog自訂按鈕",render:()=>({components:{Dialog:d,Button:r},setup(){const a=w(),t=k({title:"Replace Image?",message:'A file named "example.png" already exist! Do you what to replace it?'});return{dialog:a,dialogData:t}},template:`
            <div id="dialog"></div>
            <Dialog
                :title="dialogData.title"
                :message="dialogData.message">
                <template #dialogFooter>
                    <Button themeColor="error" size="medium" variant="text" @click="dialog.closeDialog()">Cancel</Button>
                    <Button themeColor="error" size="medium" @click="dialog.closeDialog()">Replace</Button>
                </template>
            </Dialog>
            <Button themeColor="error" 
                    size="medium" 
                    prefix="replace" 
                    @click="dialog.showDialog">
                Replace Image
            </Button>
        `}),parameters:{controls:{}}};var f,C,B;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
  name: "Dialog基礎樣式",
  render: () => ({
    components: {
      Button
    },
    template: \`
                <div class="dialog-wrapper">
                    <div class="dialog-container">

                        <div class="dialog-header">
                            <slot name="dialog-header">
                                <h3 class="dialog-title">Dialog Title</h3>
                            </slot>
                        </div>

                        <div class="dialog-body">
                            <slot name="dialog-body">
                                <p class="dialog-message">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard </p>
                            </slot>
                        </div>

                        <div class="dialog-footer">
                            <slot name="dialog-footer">
                                <Button themeColor="primary" variant="text">
                                    Cancel
                                </Button>
                                <Button themeColor="primary" >Enable</Button>
                            </slot>
                        </div>
                    </div>
                </div>
        \`
  }),
  // 控制 controls 中能控制的參數
  parameters: {
    controls: {
      // include: ['themeColor', 'label', 'value', 'name' ],
    }
  }
}`,...(B=(C=n.parameters)==null?void 0:C.docs)==null?void 0:B.source}}};var x,_,b;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`{
  name: "Dialog自訂按鈕",
  render: () => ({
    components: {
      Dialog,
      Button
    },
    setup() {
      const dialog = useDialog();
      const dialogData = ref({
        title: 'Replace Image?',
        message: 'A file named \\"example.png\\" already exist! Do you what to replace it?'
      });
      return {
        dialog,
        dialogData
      };
    },
    template: \`
            <div id="dialog"></div>
            <Dialog
                :title="dialogData.title"
                :message="dialogData.message">
                <template #dialogFooter>
                    <Button themeColor="error" size="medium" variant="text" @click="dialog.closeDialog()">Cancel</Button>
                    <Button themeColor="error" size="medium" @click="dialog.closeDialog()">Replace</Button>
                </template>
            </Dialog>
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
}`,...(b=(_=i.parameters)==null?void 0:_.docs)==null?void 0:b.source}}};const K=["DefaultDialog","CustomDialog"];export{i as CustomDialog,n as DefaultDialog,K as __namedExportsOrder,J as default};

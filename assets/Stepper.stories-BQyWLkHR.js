import{g as _,c as s,a as o,F as j,h as C,t as p,n as x,o as c,e as N}from"./vue.esm-bundler-qCK_iSPY.js";import{_ as k}from"./Button-B0XnDZTy.js";import"./Icon-DK8hP1Y7.js";import"./iframe-BZcle8FH.js";import"../sb-preview/runtime.js";const w={class:"ded-stepper-header"},z={class:"ded-step-circle"},E={class:"ded-step-group"},F={class:"ded-step-title"},M={key:0,class:"ded-step-description"},V={key:0,class:"ded-step-connector"},O={class:"ded-stepper-content"},i={__name:"Stepper",props:{dataSource:{type:Array,required:!0},currentStep:{type:Number,required:!0},direction:{type:String,default:"horizontal",validator:e=>["horizontal","vertical"].includes(e)},className:{type:String,default:""}},setup(e){const t=e,r=_(()=>a=>a===t.currentStep?"ded-step-active":a<t.currentStep?"ded-step-completed":"");return(a,n)=>{var f;return c(),s("div",{class:x({"ded-stepper":!0,[`ded-stepper-${t.direction}`]:t.direction,[t.className]:!!t.className})},[o("div",w,[(c(!0),s(j,null,C(t.dataSource,(g,u)=>(c(),s("div",{key:u,class:x(["ded-step",r.value(u)])},[o("div",z,p(u+1),1),o("div",E,[o("div",F,p(g.title),1),g.desc?(c(),s("div",M,p(g.desc),1)):N("",!0)]),e.direction==="vertical"&&u!==e.dataSource.length-1?(c(),s("div",V)):N("",!0)],2))),128))]),o("div",O,p(((f=e.dataSource[e.currentStep])==null?void 0:f.content)||"No content available for this step."),1)],2)}}};i.__docgenInfo={exportName:"default",displayName:"Stepper",description:"",tags:{},props:[{name:"dataSource",type:{name:"array"},required:!0},{name:"currentStep",type:{name:"number"},required:!0},{name:"direction",type:{name:"string"},defaultValue:{func:!1,value:'"horizontal"'},values:["horizontal","vertical"]},{name:"className",type:{name:"string"},defaultValue:{func:!1,value:'""'}}],sourceFiles:["/Users/auouser/Desktop/Work_Space/DED-WDS_VUE/libs/src/ui/element/Stepper/Stepper.vue"]};function m(e){return`[
        ${e.map(t=>`{
            title: "${t.title}",
            desc: "${t.desc}",
            content: "${t.content}",
        }`).join(`,
        `)}
    ]`}const v=[{title:"Step 1",desc:"Description",content:"Content for Step 1"},{title:"Step 2",desc:"Description",content:"Content for Step 2"},{title:"Step 3",desc:"Description",content:"Content for Step 3"}],L={title:"Component/Stepper",component:i,tags:["autodocs"],argTypes:{dataSource:{description:"步驟列表",control:{type:"object"},table:{type:{summary:"{ title: string; desc?: string | undefined; content?: Vue Component; }[]"}}},currentStep:{description:"當前步驟（從 0 開始）",control:{type:"number",min:0,max:2,step:1}},direction:{description:"方向",control:{type:"select"},options:["horizontal","vertical"],table:{type:{summary:"horizontal | vertical "}}},className:{description:"客製化樣式",control:{type:"text"}}},parameters:{docs:{title:"Stepper",description:{component:"Stepper 組件的呈現及說明。"}}}},d={name:"預設項目",args:{dataSource:v,currentStep:1,direction:"horizontal",className:""},render:e=>({components:{Stepper:i},setup(){return{args:e}},template:`
            <Stepper
                :dataSource="args.dataSource"
                :currentStep="args.currentStep"
                :direction="args.direction"
                :className="args.className"
            >
            </Stepper>
        `}),parameters:{controls:{},docs:{source:{transform:(e,t)=>{const{args:r}=t;return["<Stepper",`  :dataSource='${m(r.dataSource)}'`,`  :currentStep="${r.currentStep}"`,`  direction="${r.direction}"`,`  className="${r.className}"`,"></Stepper>"].join(`
`).trim()}}}}},S={name:"橫向互動模式",args:{dataSource:v,currentStep:1,direction:"horizontal",className:""},render:e=>({components:{Stepper:i,Button:k},setup(){const t=n=>{Object.assign(e,n)};return{args:e,goToPreviousStep:()=>{const n=Math.max(0,e.currentStep-1);t({currentStep:n})},goToNextStep:()=>{const n=Math.min(e.dataSource.length-1,e.currentStep+1);t({currentStep:n})}}},template:`
            <Stepper
                :dataSource="args.dataSource"
                :currentStep="args.currentStep"
                :direction="args.direction"
                :className="args.className"
            >
            </Stepper>
            <div style="display: flex; justify-content: flex-start; gap: 8px; margin-top: 16px;">
                <Button variant="filled" :isDisabled="args.currentStep === 0" @click="goToPreviousStep">
                    Previous
                </Button>
                <Button variant="filled" :isDisabled="args.currentStep === args.dataSource.length - 1" @click="goToNextStep">
                    Next
                </Button>
            </div>
        `}),parameters:{controls:{},docs:{source:{transform:(e,t)=>{const{args:r}=t;return["<Stepper",`  :dataSource='${m(r.dataSource)}'`,`  :currentStep="${r.currentStep}"`,`  direction="${r.direction}"`,`  className="${r.className}"`,"></Stepper>",'<div style="display:flex; justify-content: center; gap: 8px;">','  <Button variant="filled" :isDisabled="args.currentStep === 0" @click="goToPreviousStep">',"    Previous","  </Button>",'  <Button variant="filled" :isDisabled="args.currentStep === args.dataSource.length - 1" @click="goToNextStep">',"    Next","  </Button>","</div>"].join(`
`).trim()}}}}},l={name:"直向互動模式",args:{dataSource:v,currentStep:1,direction:"vertical",className:""},render:e=>({components:{Stepper:i,Button:k},setup(){const t=n=>{Object.assign(e,n)};return{args:e,goToPreviousStep:()=>{const n=Math.max(0,e.currentStep-1);t({currentStep:n})},goToNextStep:()=>{const n=Math.min(e.dataSource.length-1,e.currentStep+1);t({currentStep:n})}}},template:`
            <Stepper
                :dataSource="args.dataSource"
                :currentStep="args.currentStep"
                :direction="args.direction"
                :className="args.className"
            >
            </Stepper>
            <div style="display:flex; justify-content: flex-start; gap: 8px; margin-top: 16px;">
                <Button variant="filled" :isDisabled="args.currentStep === 0" @click="goToPreviousStep">
                    Previous
                </Button>
                <Button variant="filled" :isDisabled="args.currentStep === args.dataSource.length - 1" @click="goToNextStep">
                    Next
                </Button>
            </div>
        `}),parameters:{controls:{},docs:{source:{transform:(e,t)=>{const{args:r}=t;return["<Stepper",`  :dataSource='${m(r.dataSource)}'`,`  :currentStep="${r.currentStep}"`,`  direction="${r.direction}"`,`  className="${r.className}"`,"></Stepper>",'<div style="display:flex; justify-content: flex-start; gap: 8px; margin-top: 16px;">','  <Button variant="filled" :isDisabled="args.currentStep === 0" @click="goToPreviousStep">',"    Previous","  </Button>",'  <Button variant="filled" :isDisabled="args.currentStep === args.dataSource.length - 1" @click="goToNextStep">',"    Next","  </Button>","</div>"].join(`
`).trim()}}}}};var y,h,B;d.parameters={...d.parameters,docs:{...(y=d.parameters)==null?void 0:y.docs,source:{originalSource:`{
  name: "預設項目",
  args: {
    dataSource: dataSource,
    currentStep: 1,
    direction: "horizontal",
    className: ""
  },
  render: args => ({
    components: {
      Stepper
    },
    setup() {
      return {
        args
      };
    },
    template: \`
            <Stepper
                :dataSource="args.dataSource"
                :currentStep="args.currentStep"
                :direction="args.direction"
                :className="args.className"
            >
            </Stepper>
        \`
  }),
  // 控制 controls 中能控制的參數
  parameters: {
    controls: {
      // exclude: ['status', 'src', 'imageAlt', 'username' ],
    },
    docs: {
      source: {
        transform: (src, storyContext) => {
          const {
            args
          } = storyContext;
          const dataSourceString = formatDataSource(args.dataSource);
          return ['<Stepper', \`  :dataSource='\${dataSourceString}'\`, \`  :currentStep="\${args.currentStep}"\`, \`  direction="\${args.direction}"\`, \`  className="\${args.className}"\`, '></Stepper>'].join('\\n').trim();
        }
      }
    }
  }
}`,...(B=(h=d.parameters)==null?void 0:h.docs)==null?void 0:B.source}}};var D,T,$;S.parameters={...S.parameters,docs:{...(D=S.parameters)==null?void 0:D.docs,source:{originalSource:`{
  name: "橫向互動模式",
  args: {
    dataSource: dataSource,
    currentStep: 1,
    direction: "horizontal",
    className: ""
  },
  render: args => ({
    components: {
      Stepper,
      Button
    },
    setup() {
      const updateArgs = newArgs => {
        Object.assign(args, newArgs);
      };
      const goToPreviousStep = () => {
        const newStep = Math.max(0, args.currentStep - 1);
        updateArgs({
          currentStep: newStep
        });
      };
      const goToNextStep = () => {
        const newStep = Math.min(args.dataSource.length - 1, args.currentStep + 1);
        updateArgs({
          currentStep: newStep
        });
      };
      return {
        args,
        goToPreviousStep,
        goToNextStep
      };
    },
    template: \`
            <Stepper
                :dataSource="args.dataSource"
                :currentStep="args.currentStep"
                :direction="args.direction"
                :className="args.className"
            >
            </Stepper>
            <div style="display: flex; justify-content: flex-start; gap: 8px; margin-top: 16px;">
                <Button variant="filled" :isDisabled="args.currentStep === 0" @click="goToPreviousStep">
                    Previous
                </Button>
                <Button variant="filled" :isDisabled="args.currentStep === args.dataSource.length - 1" @click="goToNextStep">
                    Next
                </Button>
            </div>
        \`
  }),
  // 控制 controls 中能控制的參數
  parameters: {
    controls: {
      // exclude: ['status', 'src', 'imageAlt', 'username' ],
    },
    docs: {
      source: {
        transform: (src, storyContext) => {
          const {
            args
          } = storyContext;
          const dataSourceString = formatDataSource(args.dataSource);
          return ['<Stepper', \`  :dataSource='\${dataSourceString}'\`, \`  :currentStep="\${args.currentStep}"\`, \`  direction="\${args.direction}"\`, \`  className="\${args.className}"\`, '></Stepper>', '<div style="display:flex; justify-content: center; gap: 8px;">', '  <Button variant="filled" :isDisabled="args.currentStep === 0" @click="goToPreviousStep">', '    Previous', '  </Button>', '  <Button variant="filled" :isDisabled="args.currentStep === args.dataSource.length - 1" @click="goToNextStep">', '    Next', '  </Button>', '</div>'].join('\\n').trim();
        }
      }
    }
  }
}`,...($=(T=S.parameters)==null?void 0:T.docs)==null?void 0:$.source}}};var b,A,P;l.parameters={...l.parameters,docs:{...(b=l.parameters)==null?void 0:b.docs,source:{originalSource:`{
  name: "直向互動模式",
  args: {
    dataSource: dataSource,
    currentStep: 1,
    direction: "vertical",
    className: ""
  },
  render: args => ({
    components: {
      Stepper,
      Button
    },
    setup() {
      const updateArgs = newArgs => {
        Object.assign(args, newArgs);
      };
      const goToPreviousStep = () => {
        const newStep = Math.max(0, args.currentStep - 1);
        updateArgs({
          currentStep: newStep
        });
      };
      const goToNextStep = () => {
        const newStep = Math.min(args.dataSource.length - 1, args.currentStep + 1);
        updateArgs({
          currentStep: newStep
        });
      };
      return {
        args,
        goToPreviousStep,
        goToNextStep
      };
    },
    template: \`
            <Stepper
                :dataSource="args.dataSource"
                :currentStep="args.currentStep"
                :direction="args.direction"
                :className="args.className"
            >
            </Stepper>
            <div style="display:flex; justify-content: flex-start; gap: 8px; margin-top: 16px;">
                <Button variant="filled" :isDisabled="args.currentStep === 0" @click="goToPreviousStep">
                    Previous
                </Button>
                <Button variant="filled" :isDisabled="args.currentStep === args.dataSource.length - 1" @click="goToNextStep">
                    Next
                </Button>
            </div>
        \`
  }),
  // 控制 controls 中能控制的參數
  parameters: {
    controls: {
      // exclude: ['status', 'src', 'imageAlt', 'username' ],
    },
    docs: {
      source: {
        transform: (src, storyContext) => {
          const {
            args
          } = storyContext;
          const dataSourceString = formatDataSource(args.dataSource);
          return ['<Stepper', \`  :dataSource='\${dataSourceString}'\`, \`  :currentStep="\${args.currentStep}"\`, \`  direction="\${args.direction}"\`, \`  className="\${args.className}"\`, '></Stepper>', '<div style="display:flex; justify-content: flex-start; gap: 8px; margin-top: 16px;">', '  <Button variant="filled" :isDisabled="args.currentStep === 0" @click="goToPreviousStep">', '    Previous', '  </Button>', '  <Button variant="filled" :isDisabled="args.currentStep === args.dataSource.length - 1" @click="goToNextStep">', '    Next', '  </Button>', '</div>'].join('\\n').trim();
        }
      }
    }
  }
}`,...(P=(A=l.parameters)==null?void 0:A.docs)==null?void 0:P.source}}};const G=["StepperDefault","StepperHorizontal","StepperVertical"];export{d as StepperDefault,S as StepperHorizontal,l as StepperVertical,G as __namedExportsOrder,L as default};

import{e as P,c as o,d as a,F as _,B as k,t as u,n as v,o as p,b as x}from"./vue.esm-bundler-g0-RGFhA.js";import{_ as A}from"./Button-Cc1nvGt9.js";import"./Icon-CSsJY_hV.js";import"./iframe-BTfSE7oU.js";import"../sb-preview/runtime.js";const j={class:"ded-stepper-header"},w={class:"ded-step-circle"},z={class:"ded-step-group"},E={class:"ded-step-title"},F={key:0,class:"ded-step-description"},M={key:0,class:"ded-step-connector"},V={class:"ded-stepper-content"},c={__name:"Stepper",props:{steps:{type:Array,required:!0},currentStep:{type:Number,required:!0},direction:{type:String,default:"horizontal",validator:t=>["horizontal","vertical"].includes(t)},className:{type:String,default:""}},setup(t){const e=t,n=P(()=>s=>s===e.currentStep?"ded-step-active":s<e.currentStep?"ded-step-completed":"");return(s,r)=>{var f;return p(),o("div",{class:v({"ded-stepper":!0,[`ded-stepper-${e.direction}`]:e.direction,[e.className]:!!e.className})},[a("div",j,[(p(!0),o(_,null,k(e.steps,(g,i)=>(p(),o("div",{key:i,class:v(["ded-step",n.value(i)])},[a("div",w,u(i+1),1),a("div",z,[a("div",E,u(g.title),1),g.desc?(p(),o("div",F,u(g.desc),1)):x("",!0)]),t.direction==="vertical"&&i!==t.steps.length-1?(p(),o("div",M)):x("",!0)],2))),128))]),a("div",V,u(((f=t.steps[t.currentStep])==null?void 0:f.content)||"No content available for this step."),1)],2)}}};c.__docgenInfo={exportName:"default",displayName:"Stepper",description:"",tags:{},props:[{name:"steps",type:{name:"array"},required:!0},{name:"currentStep",type:{name:"number"},required:!0},{name:"direction",type:{name:"string"},defaultValue:{func:!1,value:'"horizontal"'},values:["horizontal","vertical"]},{name:"className",type:{name:"string"},defaultValue:{func:!1,value:'""'}}],sourceFiles:["D:/98_測試/up/DED-WDS_VUE/libs/src/ui/element/Stepper/Stepper.vue"]};function m(t){return`[
        ${t.map(e=>`{
            title: "${e.title}",
            desc: "${e.desc}",
            content: "${e.content}",
        }`).join(`,
        `)}
    ]`}const U={title:"Component/Stepper",component:c,tags:["autodocs"],argTypes:{steps:{description:"步驟列表",control:{type:"object"},table:{type:{summary:"{ title: string; desc?: string | undefined; content?: Vue Component; }[]"}}},currentStep:{description:"當前步驟（從 0 開始）",control:{type:"number",min:0,max:2,step:1}},direction:{description:"方向",control:{type:"select"},options:["horizontal","vertical"],table:{type:{summary:"horizontal | vertical "}}},className:{description:"客製化樣式",control:{type:"text"}}},parameters:{docs:{title:"Stepper",description:{component:"Stepper 組件的呈現及說明。"}}}},l={name:"預設項目",args:{steps:[{title:"Step 1",desc:"Description",content:"Content for Step 1"},{title:"Step 2",desc:"Description",content:"Content for Step 2"},{title:"Step 3",desc:"Description",content:"Content for Step 3"}],currentStep:1,direction:"horizontal",className:""},render:t=>({components:{Stepper:c},setup(){return{args:t}},template:`
            <Stepper
                :steps="args.steps"
                :currentStep="args.currentStep"
                :direction="args.direction"
                :className="args.className"
            >
            </Stepper>
        `}),parameters:{controls:{},docs:{source:{transform:(t,e)=>{const{args:n}=e;return["<Stepper",`  :steps='${m(n.steps)}'`,`  :currentStep="${n.currentStep}"`,`  direction="${n.direction}"`,`  className="${n.className}"`,"></Stepper>"].join(`
`).trim()}}}}},d={name:"橫向互動模式",args:{steps:[{title:"Step 1",desc:"Description",content:"Content for Step 1"},{title:"Step 2",desc:"Description",content:"Content for Step 2"},{title:"Step 3",desc:"Description",content:"Content for Step 3"}],currentStep:1,direction:"horizontal",className:""},render:t=>({components:{Stepper:c,Button:A},setup(){const e=r=>{Object.assign(t,r)};return{args:t,goToPreviousStep:()=>{const r=Math.max(0,t.currentStep-1);e({currentStep:r})},goToNextStep:()=>{const r=Math.min(t.steps.length-1,t.currentStep+1);e({currentStep:r})}}},template:`
            <Stepper
                :steps="args.steps"
                :currentStep="args.currentStep"
                :direction="args.direction"
                :className="args.className"
            >
            </Stepper>
            <div style="display: flex; justify-content: flex-start; gap: 8px; margin-top: 16px;">
                <Button variant="filled" :isDisabled="args.currentStep === 0" @click="goToPreviousStep">
                    Previous
                </Button>
                <Button variant="filled" :isDisabled="args.currentStep === args.steps.length - 1" @click="goToNextStep">
                    Next
                </Button>
            </div>
        `}),parameters:{controls:{},docs:{source:{transform:(t,e)=>{const{args:n}=e;return["<Stepper",`  :steps='${m(n.steps)}'`,`  :currentStep="${n.currentStep}"`,`  direction="${n.direction}"`,`  className="${n.className}"`,"></Stepper>",'<div style="display:flex; justify-content: center; gap: 8px;">','  <Button variant="filled" :isDisabled="args.currentStep === 0" @click="goToPreviousStep">',"    Previous","  </Button>",'  <Button variant="filled" :isDisabled="args.currentStep === args.steps.length - 1" @click="goToNextStep">',"    Next","  </Button>","</div>"].join(`
`).trim()}}}}},S={name:"直向互動模式",args:{steps:[{title:"Step 1",desc:"Description",content:"Content for Step 1"},{title:"Step 2",desc:"Description",content:"Content for Step 2"},{title:"Step 3",desc:"Description",content:"Content for Step 3"}],currentStep:1,direction:"vertical",className:""},render:t=>({components:{Stepper:c,Button:A},setup(){const e=r=>{Object.assign(t,r)};return{args:t,goToPreviousStep:()=>{const r=Math.max(0,t.currentStep-1);e({currentStep:r})},goToNextStep:()=>{const r=Math.min(t.steps.length-1,t.currentStep+1);e({currentStep:r})}}},template:`
            <Stepper
                :steps="args.steps"
                :currentStep="args.currentStep"
                :direction="args.direction"
                :className="args.className"
            >
            </Stepper>
            <div style="display:flex; justify-content: flex-start; gap: 8px; margin-top: 16px;">
                <Button variant="filled" :isDisabled="args.currentStep === 0" @click="goToPreviousStep">
                    Previous
                </Button>
                <Button variant="filled" :isDisabled="args.currentStep === args.steps.length - 1" @click="goToNextStep">
                    Next
                </Button>
            </div>
        `}),parameters:{controls:{},docs:{source:{transform:(t,e)=>{const{args:n}=e;return["<Stepper",`  :steps='${m(n.steps)}'`,`  :currentStep="${n.currentStep}"`,`  direction="${n.direction}"`,`  className="${n.className}"`,"></Stepper>",'<div style="display:flex; justify-content: flex-start; gap: 8px; margin-top: 16px;">','  <Button variant="filled" :isDisabled="args.currentStep === 0" @click="goToPreviousStep">',"    Previous","  </Button>",'  <Button variant="filled" :isDisabled="args.currentStep === args.steps.length - 1" @click="goToNextStep">',"    Next","  </Button>","</div>"].join(`
`).trim()}}}}};var N,y,D;l.parameters={...l.parameters,docs:{...(N=l.parameters)==null?void 0:N.docs,source:{originalSource:`{
  name: "預設項目",
  args: {
    steps: [{
      "title": "Step 1",
      "desc": "Description",
      "content": "Content for Step 1"
    }, {
      "title": "Step 2",
      "desc": "Description",
      "content": "Content for Step 2"
    }, {
      "title": "Step 3",
      "desc": "Description",
      "content": "Content for Step 3"
    }],
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
                :steps="args.steps"
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
          const dataSourceString = formatDataSource(args.steps);
          return ['<Stepper', \`  :steps='\${dataSourceString}'\`, \`  :currentStep="\${args.currentStep}"\`, \`  direction="\${args.direction}"\`, \`  className="\${args.className}"\`, '></Stepper>'].join('\\n').trim();
        }
      }
    }
  }
}`,...(D=(y=l.parameters)==null?void 0:y.docs)==null?void 0:D.source}}};var h,B,T;d.parameters={...d.parameters,docs:{...(h=d.parameters)==null?void 0:h.docs,source:{originalSource:`{
  name: "橫向互動模式",
  args: {
    steps: [{
      "title": "Step 1",
      "desc": "Description",
      "content": "Content for Step 1"
    }, {
      "title": "Step 2",
      "desc": "Description",
      "content": "Content for Step 2"
    }, {
      "title": "Step 3",
      "desc": "Description",
      "content": "Content for Step 3"
    }],
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
        const newStep = Math.min(args.steps.length - 1, args.currentStep + 1);
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
                :steps="args.steps"
                :currentStep="args.currentStep"
                :direction="args.direction"
                :className="args.className"
            >
            </Stepper>
            <div style="display: flex; justify-content: flex-start; gap: 8px; margin-top: 16px;">
                <Button variant="filled" :isDisabled="args.currentStep === 0" @click="goToPreviousStep">
                    Previous
                </Button>
                <Button variant="filled" :isDisabled="args.currentStep === args.steps.length - 1" @click="goToNextStep">
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
          const dataSourceString = formatDataSource(args.steps);
          return ['<Stepper', \`  :steps='\${dataSourceString}'\`, \`  :currentStep="\${args.currentStep}"\`, \`  direction="\${args.direction}"\`, \`  className="\${args.className}"\`, '></Stepper>', '<div style="display:flex; justify-content: center; gap: 8px;">', '  <Button variant="filled" :isDisabled="args.currentStep === 0" @click="goToPreviousStep">', '    Previous', '  </Button>', '  <Button variant="filled" :isDisabled="args.currentStep === args.steps.length - 1" @click="goToNextStep">', '    Next', '  </Button>', '</div>'].join('\\n').trim();
        }
      }
    }
  }
}`,...(T=(B=d.parameters)==null?void 0:B.docs)==null?void 0:T.source}}};var C,$,b;S.parameters={...S.parameters,docs:{...(C=S.parameters)==null?void 0:C.docs,source:{originalSource:`{
  name: "直向互動模式",
  args: {
    steps: [{
      "title": "Step 1",
      "desc": "Description",
      "content": "Content for Step 1"
    }, {
      "title": "Step 2",
      "desc": "Description",
      "content": "Content for Step 2"
    }, {
      "title": "Step 3",
      "desc": "Description",
      "content": "Content for Step 3"
    }],
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
        const newStep = Math.min(args.steps.length - 1, args.currentStep + 1);
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
                :steps="args.steps"
                :currentStep="args.currentStep"
                :direction="args.direction"
                :className="args.className"
            >
            </Stepper>
            <div style="display:flex; justify-content: flex-start; gap: 8px; margin-top: 16px;">
                <Button variant="filled" :isDisabled="args.currentStep === 0" @click="goToPreviousStep">
                    Previous
                </Button>
                <Button variant="filled" :isDisabled="args.currentStep === args.steps.length - 1" @click="goToNextStep">
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
          const dataSourceString = formatDataSource(args.steps);
          return ['<Stepper', \`  :steps='\${dataSourceString}'\`, \`  :currentStep="\${args.currentStep}"\`, \`  direction="\${args.direction}"\`, \`  className="\${args.className}"\`, '></Stepper>', '<div style="display:flex; justify-content: flex-start; gap: 8px; margin-top: 16px;">', '  <Button variant="filled" :isDisabled="args.currentStep === 0" @click="goToPreviousStep">', '    Previous', '  </Button>', '  <Button variant="filled" :isDisabled="args.currentStep === args.steps.length - 1" @click="goToNextStep">', '    Next', '  </Button>', '</div>'].join('\\n').trim();
        }
      }
    }
  }
}`,...(b=($=S.parameters)==null?void 0:$.docs)==null?void 0:b.source}}};const W=["StepperDefault","StepperHorizontal","StepperVertical"];export{l as StepperDefault,d as StepperHorizontal,S as StepperVertical,W as __namedExportsOrder,U as default};

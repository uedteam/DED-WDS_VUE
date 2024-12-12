import{c as A,a,b as c,F as P,B as k,r as _,n as v,o as p,t as l,e as f,s as j}from"./vue.esm-bundler-CTfO_w4g.js";import{_ as $}from"./Button-Bwxpskyf.js";import"./index-Bb4qSo10.js";import"./Icon-B1v4yc6p.js";import"./iframe-eB0XTDOC.js";import"../sb-preview/runtime.js";const w={class:"ded-stepper-header"},z={class:"ded-step-circle"},E={class:"ded-step-group"},F={class:"ded-step-title"},V={key:0,class:"ded-step-description"},M={key:0,class:"ded-step-connector"},O={class:"ded-stepper-content"},i={__name:"Stepper",props:{steps:{type:Array,required:!0},currentStep:{type:Number,required:!0},direction:{type:String,default:"horizontal",validator:t=>["horizontal","vertical"].includes(t)},className:{type:String,default:""}},setup(t){const e=t,n=A(()=>s=>s===e.currentStep?"active":s<e.currentStep?"completed":"");return(s,r)=>(p(),a("div",{class:v({"ded-stepper":!0,[e.direction]:!0,[e.className]:!!e.className})},[c("div",w,[(p(!0),a(P,null,k(e.steps,(o,u)=>(p(),a("div",{key:u,class:v(["ded-stepper-step",n.value(u)])},[c("div",z,l(u+1),1),c("div",E,[c("div",F,l(o.title),1),o.desc?(p(),a("div",V,l(o.desc),1)):f("",!0)]),t.direction==="vertical"&&u!==t.steps.length-1?(p(),a("div",M)):f("",!0)],2))),128))]),c("div",O,[_(s.$slots,"ded-step-content",{step:t.steps[e.currentStep]},()=>{var o;return[j(l(((o=t.steps[e.currentStep])==null?void 0:o.content)||"No content available for this step."),1)]})])],2))}};i.__docgenInfo={exportName:"default",displayName:"Stepper",description:"",tags:{},props:[{name:"steps",type:{name:"array"},required:!0},{name:"currentStep",type:{name:"number"},required:!0},{name:"direction",type:{name:"string"},defaultValue:{func:!1,value:'"horizontal"'},values:["horizontal","vertical"]},{name:"className",type:{name:"string"},defaultValue:{func:!1,value:'""'}}],slots:[{name:"ded-step-content",scoped:!0,bindings:[{name:"step",title:"binding"}]}],sourceFiles:["/Users/auouser/Desktop/Work_Space/DED-WDS_VUE/libs/src/ui/element/Stepper/Stepper.vue"]};function m(t){return`[
        ${t.map(e=>`{
            title: "${e.title}",
            desc: "${e.desc}",
            content: "${e.content}",
        }`).join(`,
        `)}
    ]`}const G={title:"Component/Stepper",component:i,tags:["autodocs"],argTypes:{steps:{description:"步驟列表",control:{type:"object"},table:{type:{summary:"{ title: string; desc?: string | undefined; content?: Vue Component; }[]"}}},currentStep:{description:"當前步驟（從 0 開始）",control:{type:"number"}},direction:{description:"方向",control:{type:"select"},options:["horizontal","vertical"],table:{type:{summary:"horizontal | vertical "}}},className:{description:"客製化樣式",control:{type:"text"}},"ded-step-content":{table:{disable:!0}}},parameters:{docs:{title:"Stepper",description:{component:"Stepper 組件的呈現及說明。"}}}},d={name:"預設項目",args:{steps:[{title:"Step 1",desc:"Description",content:"Content for Step 1"},{title:"Step 2",desc:"Description",content:"Content for Step 2"},{title:"Step 3",desc:"Description",content:"Content for Step 3"}],currentStep:1,direction:"horizontal",className:""},render:t=>({components:{Stepper:i},setup(){return{args:t}},template:`
            <Stepper
                :steps="args.steps"
                :currentStep="args.currentStep"
                :direction="args.direction"
                :className="args.className"
            >
            </Stepper>
        `}),parameters:{controls:{},docs:{source:{transform:(t,e)=>{const{args:n}=e;return["<Stepper",`  :steps='${m(n.steps)}'`,`  :currentStep="${n.currentStep}"`,`  direction="${n.direction}"`,`  className="${n.className}"`,"></Stepper>"].join(`
`).trim()}}}}},S={name:"橫向互動模式",args:{steps:[{title:"Step 1",desc:"Description",content:"Content for Step 1"},{title:"Step 2",desc:"Description",content:"Content for Step 2"},{title:"Step 3",desc:"Description",content:"Content for Step 3"}],currentStep:1,direction:"horizontal",className:""},render:t=>({components:{Stepper:i,Button:$},setup(){const e=r=>{Object.assign(t,r)};return{args:t,goToPreviousStep:()=>{const r=Math.max(0,t.currentStep-1);e({currentStep:r})},goToNextStep:()=>{const r=Math.min(t.steps.length-1,t.currentStep+1);e({currentStep:r})}}},template:`
            <Stepper
                :steps="args.steps"
                :currentStep="args.currentStep"
                :direction="args.direction"
                :className="args.className"
            >
            </Stepper>
            <div style="display:flex; justify-content: center; gap: 8px;">
                <Button variant="contained" :isDisabled="args.currentStep === 0" @click="goToPreviousStep">
                    Previous
                </Button>
                <Button variant="contained" :isDisabled="args.currentStep === args.steps.length - 1" @click="goToNextStep">
                    Next
                </Button>
            </div>
        `}),parameters:{controls:{},docs:{source:{transform:(t,e)=>{const{args:n}=e;return["<Stepper",`  :steps='${m(n.steps)}'`,`  :currentStep="${n.currentStep}"`,`  direction="${n.direction}"`,`  className="${n.className}"`,"></Stepper>",'<div style="display:flex; justify-content: center; gap: 8px;">','  <Button variant="contained" :isDisabled="args.currentStep === 0" @click="goToPreviousStep">',"    Previous","  </Button>",'  <Button variant="contained" :isDisabled="args.currentStep === args.steps.length - 1" @click="goToNextStep">',"    Next","  </Button>","</div>"].join(`
`).trim()}}}}},g={name:"直向互動模式",args:{steps:[{title:"Step 1",desc:"Description",content:"Content for Step 1"},{title:"Step 2",desc:"Description",content:"Content for Step 2"},{title:"Step 3",desc:"Description",content:"Content for Step 3"}],currentStep:1,direction:"vertical",className:""},render:t=>({components:{Stepper:i,Button:$},setup(){const e=r=>{Object.assign(t,r)};return{args:t,goToPreviousStep:()=>{const r=Math.max(0,t.currentStep-1);e({currentStep:r})},goToNextStep:()=>{const r=Math.min(t.steps.length-1,t.currentStep+1);e({currentStep:r})}}},template:`
            <Stepper
                :steps="args.steps"
                :currentStep="args.currentStep"
                :direction="args.direction"
                :className="args.className"
            >
            </Stepper>
            <div style="display:flex; justify-content: flex-start; gap: 8px; margin-top: 16px;">
                <Button variant="contained" :isDisabled="args.currentStep === 0" @click="goToPreviousStep">
                    Previous
                </Button>
                <Button variant="contained" :isDisabled="args.currentStep === args.steps.length - 1" @click="goToNextStep">
                    Next
                </Button>
            </div>
        `}),parameters:{controls:{},docs:{source:{transform:(t,e)=>{const{args:n}=e;return["<Stepper",`  :steps='${m(n.steps)}'`,`  :currentStep="${n.currentStep}"`,`  direction="${n.direction}"`,`  className="${n.className}"`,"></Stepper>",'<div style="display:flex; justify-content: flex-start; gap: 8px; margin-top: 16px;">','  <Button variant="contained" :isDisabled="args.currentStep === 0" @click="goToPreviousStep">',"    Previous","  </Button>",'  <Button variant="contained" :isDisabled="args.currentStep === args.steps.length - 1" @click="goToNextStep">',"    Next","  </Button>","</div>"].join(`
`).trim()}}}}};var N,x,y;d.parameters={...d.parameters,docs:{...(N=d.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
}`,...(y=(x=d.parameters)==null?void 0:x.docs)==null?void 0:y.source}}};var D,h,B;S.parameters={...S.parameters,docs:{...(D=S.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
            <div style="display:flex; justify-content: center; gap: 8px;">
                <Button variant="contained" :isDisabled="args.currentStep === 0" @click="goToPreviousStep">
                    Previous
                </Button>
                <Button variant="contained" :isDisabled="args.currentStep === args.steps.length - 1" @click="goToNextStep">
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
          return ['<Stepper', \`  :steps='\${dataSourceString}'\`, \`  :currentStep="\${args.currentStep}"\`, \`  direction="\${args.direction}"\`, \`  className="\${args.className}"\`, '></Stepper>', '<div style="display:flex; justify-content: center; gap: 8px;">', '  <Button variant="contained" :isDisabled="args.currentStep === 0" @click="goToPreviousStep">', '    Previous', '  </Button>', '  <Button variant="contained" :isDisabled="args.currentStep === args.steps.length - 1" @click="goToNextStep">', '    Next', '  </Button>', '</div>'].join('\\n').trim();
        }
      }
    }
  }
}`,...(B=(h=S.parameters)==null?void 0:h.docs)==null?void 0:B.source}}};var T,b,C;g.parameters={...g.parameters,docs:{...(T=g.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
                <Button variant="contained" :isDisabled="args.currentStep === 0" @click="goToPreviousStep">
                    Previous
                </Button>
                <Button variant="contained" :isDisabled="args.currentStep === args.steps.length - 1" @click="goToNextStep">
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
          return ['<Stepper', \`  :steps='\${dataSourceString}'\`, \`  :currentStep="\${args.currentStep}"\`, \`  direction="\${args.direction}"\`, \`  className="\${args.className}"\`, '></Stepper>', '<div style="display:flex; justify-content: flex-start; gap: 8px; margin-top: 16px;">', '  <Button variant="contained" :isDisabled="args.currentStep === 0" @click="goToPreviousStep">', '    Previous', '  </Button>', '  <Button variant="contained" :isDisabled="args.currentStep === args.steps.length - 1" @click="goToNextStep">', '    Next', '  </Button>', '</div>'].join('\\n').trim();
        }
      }
    }
  }
}`,...(C=(b=g.parameters)==null?void 0:b.docs)==null?void 0:C.source}}};const J=["StepperDefault","StepperHorizontal","StepperVertical"];export{d as StepperDefault,S as StepperHorizontal,g as StepperVertical,J as __namedExportsOrder,G as default};

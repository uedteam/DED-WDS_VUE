import{g as A,c as a,a as s,F as w,j as k,t as u,n as v,o as c,d as x}from"./vue.esm-bundler-DYHjuIM_.js";import{_ as P}from"./Button-DXW6KxhW.js";import"./Icon-DxmAzwbS.js";const _={class:"ded-stepper-header"},j={class:"ded-step-circle"},z={class:"ded-step-group"},E={class:"ded-step-title"},F={key:0,class:"ded-step-description"},V={key:0,class:"ded-step-connector"},M={class:"ded-stepper-content"},p={__name:"Stepper",props:{dataSource:{type:Array,required:!0},currentStep:{type:Number,required:!0},direction:{type:String,default:"horizontal",validator:e=>["horizontal","vertical"].includes(e)},className:{type:String,default:""}},setup(e){const t=e,r=A(()=>o=>o===t.currentStep?"ded-step-active":o<t.currentStep?"ded-step-completed":"");return(o,n)=>{var f;return c(),a("div",{class:v({"ded-stepper":!0,[`ded-stepper-${t.direction}`]:t.direction,[t.className]:!!t.className})},[s("div",_,[(c(!0),a(w,null,k(t.dataSource,(m,i)=>(c(),a("div",{key:i,class:v(["ded-step",r.value(i)])},[s("div",j,u(i+1),1),s("div",z,[s("div",E,u(m.title),1),m.desc?(c(),a("div",F,u(m.desc),1)):x("",!0)]),e.direction==="vertical"&&i!==e.dataSource.length-1?(c(),a("div",V)):x("",!0)],2))),128))]),s("div",M,u(((f=e.dataSource[e.currentStep])==null?void 0:f.content)||"No content available for this step."),1)],2)}}};p.__docgenInfo={exportName:"default",displayName:"Stepper",description:"",tags:{},props:[{name:"dataSource",type:{name:"array"},required:!0},{name:"currentStep",type:{name:"number"},required:!0},{name:"direction",type:{name:"string"},defaultValue:{func:!1,value:'"horizontal"'},values:["horizontal","vertical"]},{name:"className",type:{name:"string"},defaultValue:{func:!1,value:'""'}}],sourceFiles:["/home/runner/work/DED-WDS_VUE/DED-WDS_VUE/libs/src/ui/element/Stepper/Stepper.vue"]};function O(e){return`[
        ${e.map(t=>`{
            title: "${t.title}",
            desc: "${t.desc}",
            content: "${t.content}",
        }`).join(`,
        `)}
    ]`}const g=[{title:"Step 1",desc:"Description",content:"Content for Step 1"},{title:"Step 2",desc:"Description",content:"Content for Step 2"},{title:"Step 3",desc:"Description",content:"Content for Step 3"}],W={title:"Component/Stepper",component:p,tags:["autodocs"],argTypes:{dataSource:{description:"步驟列表",control:{type:"object"},table:{type:{summary:"{ title: string; desc?: string | undefined; content?: Vue Component; }[]"}}},currentStep:{description:"當前步驟（從 0 開始）",control:{type:"number",min:0,max:2,step:1}},direction:{description:"方向",control:{type:"select"},options:["horizontal","vertical"],table:{type:{summary:"horizontal | vertical "}}},className:{description:"客製化樣式",control:{type:"text"}}},parameters:{docs:{title:"Stepper",description:{component:"Stepper 組件的呈現及說明。"}}}},l={name:"預設項目",args:{dataSource:g,currentStep:1,direction:"horizontal",className:""},render:e=>({components:{Stepper:p},setup(){return{args:e}},template:`
            <Stepper
                :dataSource="args.dataSource"
                :currentStep="args.currentStep"
                :direction="args.direction"
                :className="args.className"
            ></Stepper>
        `}),parameters:{controls:{},docs:{source:{transform:(e,t)=>{const{args:r}=t;return["<script setup>",'import { Stepper } from "@ded-wds-vue/ui";',"<\/script>","","<template>","  <Stepper",`      :dataSource='${O(r.dataSource)}'`,`      ${r.currentStep!==void 0?`:currentStep="${r.currentStep}"`:""}`,`      ${r.direction?`direction="${r.direction}"`:""}`,`      ${r.className?`className="${r.className}"`:""}`,"  ></Stepper>","</template>"].filter(Boolean).join(`
`).trim()}}}}},d={name:"橫向互動模式",args:{dataSource:g,currentStep:1,direction:"horizontal",className:""},render:e=>({components:{Stepper:p,Button:P},setup(){const t=n=>{Object.assign(e,n)};return{args:e,goToPreviousStep:()=>{const n=Math.max(0,e.currentStep-1);t({currentStep:n})},goToNextStep:()=>{const n=Math.min(e.dataSource.length-1,e.currentStep+1);t({currentStep:n})}}},template:`
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
        `}),parameters:{controls:{},docs:{source:{transform:(e,t)=>{const{args:r}=t;return["<script setup>",'import { ref } from "vue";','import { Stepper, Button } from "@ded-wds-vue/ui";',"","const currentStep = ref(1);","const dataSource = [","  {",'    title: "Step 1",','    desc: "Description",','    content: "Content for Step 1",',"  },","  {",'    title: "Step 2",','    desc: "Description",','    content: "Content for Step 2",',"  },","  {",'    title: "Step 3",','    desc: "Description",','    content: "Content for Step 3",',"  }","];","","const goToPreviousStep = () => {","  if (currentStep.value > 0) {","    currentStep.value -= 1;","  }","};","","const goToNextStep = () => {","  if (currentStep.value < dataSource.length - 1) {","    currentStep.value += 1;","  }","};","","<\/script>","","<template>","  <Stepper","      :dataSource='dataSource'",'      :currentStep="currentStep"',`      ${r.direction?`direction="${r.direction}"`:""}`,`      ${r.className?`className="${r.className}"`:""}`,"  ></Stepper>",'  <div style="display: flex; justify-content: flex-start; gap: 8px; margin-top: 16px;">',"    <Button",'      variant="filled"','      :isDisabled="currentStep === 0"','      @click="goToPreviousStep()"',"    >","      Previous","    </Button>","  ","    <Button",'      variant="filled"','      :isDisabled="currentStep === dataSource.length - 1"','      @click="goToNextStep()"',"    >","      Next","    </Button>","  </div>","</template>"].filter(Boolean).join(`
`).trim()}}}}},S={name:"直向互動模式",args:{dataSource:g,currentStep:1,direction:"vertical",className:""},render:e=>({components:{Stepper:p,Button:P},setup(){const t=n=>{Object.assign(e,n)};return{args:e,goToPreviousStep:()=>{const n=Math.max(0,e.currentStep-1);t({currentStep:n})},goToNextStep:()=>{const n=Math.min(e.dataSource.length-1,e.currentStep+1);t({currentStep:n})}}},template:`
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
        `}),parameters:{controls:{},docs:{source:{transform:(e,t)=>{const{args:r}=t;return["<script setup>",'import { ref } from "vue";','import { Stepper, Button } from "@ded-wds-vue/ui";',"","const currentStep = ref(1);","const dataSource = [","  {",'    title: "Step 1",','    desc: "Description",','    content: "Content for Step 1",',"  },","  {",'    title: "Step 2",','    desc: "Description",','    content: "Content for Step 2",',"  },","  {",'    title: "Step 3",','    desc: "Description",','    content: "Content for Step 3",',"  }","];","","const goToPreviousStep = () => {","  if (currentStep.value > 0) {","    currentStep.value -= 1;","  }","};","","const goToNextStep = () => {","  if (currentStep.value < dataSource.length - 1) {","    currentStep.value += 1;","  }","};","","<\/script>","","<template>","  <Stepper","      :dataSource='dataSource'",'      :currentStep="currentStep"',`      ${r.direction?`direction="${r.direction}"`:""}`,`      ${r.className?`className="${r.className}"`:""}`,"  ></Stepper>",'  <div style="display: flex; justify-content: flex-start; gap: 8px; margin-top: 16px;">',"    <Button",'      variant="filled"','      :isDisabled="currentStep === 0"','      @click="goToPreviousStep()"',"    >","      Previous","    </Button>","  ","    <Button",'      variant="filled"','      :isDisabled="currentStep === dataSource.length - 1"','      @click="goToNextStep()"',"    >","      Next","    </Button>","  </div>","</template>"].filter(Boolean).join(`
`).trim()}}}}};var N,y,D;l.parameters={...l.parameters,docs:{...(N=l.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
            ></Stepper>
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
          return [\`<script setup>\`, \`import { Stepper } from "@ded-wds-vue/ui";\`, \`<\/script>\`, '', '<template>', '  <Stepper', \`      :dataSource='\${dataSourceString}'\`, \`      \${args.currentStep !== undefined ? \`:currentStep="\${args.currentStep}"\` : ""}\`, \`      \${args.direction ? \`direction="\${args.direction}"\` : ""}\`, \`      \${args.className ? \`className="\${args.className}"\` : ""}\`, '  ></Stepper>', '</template>'].filter(Boolean).join('\\n').trim();
        }
      }
    }
  }
}`,...(D=(y=l.parameters)==null?void 0:y.docs)==null?void 0:D.source}}};var B,h,T;d.parameters={...d.parameters,docs:{...(B=d.parameters)==null?void 0:B.docs,source:{originalSource:'{\n  name: "橫向互動模式",\n  args: {\n    dataSource: dataSource,\n    currentStep: 1,\n    direction: "horizontal",\n    className: ""\n  },\n  render: args => ({\n    components: {\n      Stepper,\n      Button\n    },\n    setup() {\n      const updateArgs = newArgs => {\n        Object.assign(args, newArgs);\n      };\n      const goToPreviousStep = () => {\n        const newStep = Math.max(0, args.currentStep - 1);\n        updateArgs({\n          currentStep: newStep\n        });\n      };\n      const goToNextStep = () => {\n        const newStep = Math.min(args.dataSource.length - 1, args.currentStep + 1);\n        updateArgs({\n          currentStep: newStep\n        });\n      };\n      return {\n        args,\n        goToPreviousStep,\n        goToNextStep\n      };\n    },\n    template: `\n            <Stepper\n                :dataSource="args.dataSource"\n                :currentStep="args.currentStep"\n                :direction="args.direction"\n                :className="args.className"\n            >\n            </Stepper>\n            <div style="display: flex; justify-content: flex-start; gap: 8px; margin-top: 16px;">\n                <Button variant="filled" :isDisabled="args.currentStep === 0" @click="goToPreviousStep">\n                    Previous\n                </Button>\n                <Button variant="filled" :isDisabled="args.currentStep === args.dataSource.length - 1" @click="goToNextStep">\n                    Next\n                </Button>\n            </div>\n        `\n  }),\n  // 控制 controls 中能控制的參數\n  parameters: {\n    controls: {\n      // exclude: [\'status\', \'src\', \'imageAlt\', \'username\' ],\n    },\n    docs: {\n      source: {\n        transform: (src, storyContext) => {\n          const {\n            args\n          } = storyContext;\n          return [`<script setup>`, `import { ref } from "vue";`, `import { Stepper, Button } from "@ded-wds-vue/ui";`, ``, `const currentStep = ref(1);`, `const dataSource = [`, `  {`, `    title: "Step 1",`, `    desc: "Description",`, `    content: "Content for Step 1",`, `  },`, `  {`, `    title: "Step 2",`, `    desc: "Description",`, `    content: "Content for Step 2",`, `  },`, `  {`, `    title: "Step 3",`, `    desc: "Description",`, `    content: "Content for Step 3",`, `  }`, `];`, ``, `const goToPreviousStep = () => {`, `  if (currentStep.value > 0) {`, `    currentStep.value -= 1;`, `  }`, `};`, ``, `const goToNextStep = () => {`, `  if (currentStep.value < dataSource.length - 1) {`, `    currentStep.value += 1;`, `  }`, `};`, ``, `<\/script>`, \'\', \'<template>\', \'  <Stepper\', `      :dataSource=\'dataSource\'`, `      :currentStep="currentStep"`, `      ${args.direction ? `direction="${args.direction}"` : ""}`, `      ${args.className ? `className="${args.className}"` : ""}`, \'  ></Stepper>\', `  <div style="display: flex; justify-content: flex-start; gap: 8px; margin-top: 16px;">`, `    <Button`, `      variant="filled"`, `      :isDisabled="currentStep === 0"`, `      @click="goToPreviousStep()"`, `    >`, `      Previous`, `    </Button>`, `  `, `    <Button`, `      variant="filled"`, `      :isDisabled="currentStep === dataSource.length - 1"`, `      @click="goToNextStep()"`, `    >`, `      Next`, `    </Button>`, `  </div>`, \'</template>\'].filter(Boolean).join(\'\\n\').trim();\n        }\n      }\n    }\n  }\n}',...(T=(h=d.parameters)==null?void 0:h.docs)==null?void 0:T.source}}};var $,C,b;S.parameters={...S.parameters,docs:{...($=S.parameters)==null?void 0:$.docs,source:{originalSource:'{\n  name: "直向互動模式",\n  args: {\n    dataSource: dataSource,\n    currentStep: 1,\n    direction: "vertical",\n    className: ""\n  },\n  render: args => ({\n    components: {\n      Stepper,\n      Button\n    },\n    setup() {\n      const updateArgs = newArgs => {\n        Object.assign(args, newArgs);\n      };\n      const goToPreviousStep = () => {\n        const newStep = Math.max(0, args.currentStep - 1);\n        updateArgs({\n          currentStep: newStep\n        });\n      };\n      const goToNextStep = () => {\n        const newStep = Math.min(args.dataSource.length - 1, args.currentStep + 1);\n        updateArgs({\n          currentStep: newStep\n        });\n      };\n      return {\n        args,\n        goToPreviousStep,\n        goToNextStep\n      };\n    },\n    template: `\n            <Stepper\n                :dataSource="args.dataSource"\n                :currentStep="args.currentStep"\n                :direction="args.direction"\n                :className="args.className"\n            >\n            </Stepper>\n            <div style="display:flex; justify-content: flex-start; gap: 8px; margin-top: 16px;">\n                <Button variant="filled" :isDisabled="args.currentStep === 0" @click="goToPreviousStep">\n                    Previous\n                </Button>\n                <Button variant="filled" :isDisabled="args.currentStep === args.dataSource.length - 1" @click="goToNextStep">\n                    Next\n                </Button>\n            </div>\n        `\n  }),\n  // 控制 controls 中能控制的參數\n  parameters: {\n    controls: {\n      // exclude: [\'status\', \'src\', \'imageAlt\', \'username\' ],\n    },\n    docs: {\n      source: {\n        transform: (src, storyContext) => {\n          const {\n            args\n          } = storyContext;\n          // const dataSourceString = formatDataSource(args.dataSource);\n          return [`<script setup>`, `import { ref } from "vue";`, `import { Stepper, Button } from "@ded-wds-vue/ui";`, ``, `const currentStep = ref(1);`, `const dataSource = [`, `  {`, `    title: "Step 1",`, `    desc: "Description",`, `    content: "Content for Step 1",`, `  },`, `  {`, `    title: "Step 2",`, `    desc: "Description",`, `    content: "Content for Step 2",`, `  },`, `  {`, `    title: "Step 3",`, `    desc: "Description",`, `    content: "Content for Step 3",`, `  }`, `];`, ``, `const goToPreviousStep = () => {`, `  if (currentStep.value > 0) {`, `    currentStep.value -= 1;`, `  }`, `};`, ``, `const goToNextStep = () => {`, `  if (currentStep.value < dataSource.length - 1) {`, `    currentStep.value += 1;`, `  }`, `};`, ``, `<\/script>`, \'\', \'<template>\', \'  <Stepper\', `      :dataSource=\'dataSource\'`, `      :currentStep="currentStep"`, `      ${args.direction ? `direction="${args.direction}"` : ""}`, `      ${args.className ? `className="${args.className}"` : ""}`, \'  ></Stepper>\', `  <div style="display: flex; justify-content: flex-start; gap: 8px; margin-top: 16px;">`, `    <Button`, `      variant="filled"`, `      :isDisabled="currentStep === 0"`, `      @click="goToPreviousStep()"`, `    >`, `      Previous`, `    </Button>`, `  `, `    <Button`, `      variant="filled"`, `      :isDisabled="currentStep === dataSource.length - 1"`, `      @click="goToNextStep()"`, `    >`, `      Next`, `    </Button>`, `  </div>`, \'</template>\'].filter(Boolean).join(\'\\n\').trim();\n        }\n      }\n    }\n  }\n}',...(b=(C=S.parameters)==null?void 0:C.docs)==null?void 0:b.source}}};const I=["StepperDefault","StepperHorizontal","StepperVertical"];export{l as StepperDefault,d as StepperHorizontal,S as StepperVertical,I as __namedExportsOrder,W as default};

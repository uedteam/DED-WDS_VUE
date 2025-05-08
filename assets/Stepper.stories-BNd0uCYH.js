import{_ as c}from"./Button-oTbtdPII.js";import{g as K,w as Q,c as i,a as l,F,q as R,j as X,l as Y,f as Z,t as g,n as k,o as s,d as b,r as y,y as P}from"./vue.esm-bundler-CRlgvgXF.js";import"./Icon-CUK9ssyM.js";const ee={class:"ded-stepper-header"},te=["onClick","data-index"],ne={class:"ded-step-circle"},re={class:"ded-step-group"},oe={class:"ded-step-title"},ae={key:0,class:"ded-step-description"},ue={key:0,class:"ded-step-connector"},se={class:"ded-stepper-content"},u={__name:"Stepper",props:{dataSource:{type:Array,required:!0},currentStep:{type:Number,required:!0},direction:{type:String,default:"horizontal",validator:t=>["horizontal","vertical"].includes(t)},className:{type:String,default:""}},emits:["update:currentStep","stepChange"],setup(t,{emit:n}){const e=t,a=n,r=K(()=>o=>o===e.currentStep?"ded-step-active":o<e.currentStep?"ded-step-completed":"");function S(o){o!==e.currentStep&&(a("update:currentStep",o),a("stepChange",o))}return Q(()=>e.currentStep,o=>{(o<0||o>=e.dataSource.length)&&console.warn("currentStep 超出範圍")}),(o,pe)=>{var D,T,C;return s(),i("div",{class:k(["ded-stepper",{[`ded-stepper-${e.direction}`]:e.direction,[e.className]:!!e.className}])},[l("div",ee,[(s(!0),i(F,null,R(e.dataSource,(N,p)=>(s(),i("div",{key:p,class:k(["ded-step",[r.value(p)]]),onClick:ie=>S(p),"data-index":p},[l("div",ne,g(p+1),1),l("div",re,[l("div",oe,g(N.title),1),N.desc?(s(),i("div",ae,g(N.desc),1)):b("",!0)]),t.direction==="vertical"&&p!==t.dataSource.length-1?(s(),i("div",ue)):b("",!0)],10,te))),128))]),l("div",se,[typeof((D=e.dataSource[e.currentStep])==null?void 0:D.content)=="object"?(s(),X(Y((T=e.dataSource[e.currentStep])==null?void 0:T.content),{key:0})):(s(),i(F,{key:1},[Z(g(((C=e.dataSource[e.currentStep])==null?void 0:C.content)||"No content available for this step."),1)],64))])],2)}}};u.__docgenInfo={exportName:"default",displayName:"Stepper",description:"",tags:{},props:[{name:"dataSource",type:{name:"array"},required:!0},{name:"currentStep",type:{name:"number"},required:!0},{name:"direction",type:{name:"string"},defaultValue:{func:!1,value:"'horizontal'"},values:["horizontal","vertical"]},{name:"className",type:{name:"string"},defaultValue:{func:!1,value:"''"}}],events:[{name:"update:currentStep"},{name:"stepChange"}],sourceFiles:["/home/runner/work/DED-WDS_VUE/DED-WDS_VUE/libs/src/ui/element/Stepper/Stepper.vue"]};function ce(t){return`    ${t.map(n=>{let e="";return typeof n.content=="string"?e=`"${n.content}"`:n.content&&typeof n.content=="object"&&(e="/* 在此處放置您的組件或HTML內容 */"),`{
        title: "${n.title}",
        desc: "${n.desc||""}",
        content: ${e},
    }`}).join(`,
    `)}`}const d=[{title:"Step 1",desc:"Description",content:"Content for Step 1"},{title:"Step 2",desc:"Description",content:"Content for Step 2"},{title:"Step 3",desc:"Description",content:"Content for Step 3"}],ge={title:"Component/Stepper",component:u,tags:["autodocs"],argTypes:{dataSource:{description:"步驟列表",control:{type:"object"},table:{type:{summary:"{ title: string; desc?: string | undefined; content?: string | VNode | Component; }[]"}}},currentStep:{description:"當前步驟（從 0 開始）",control:{type:"number",min:0,max:2,step:1}},direction:{description:"方向",control:{type:"select"},options:["horizontal","vertical"],table:{type:{summary:"horizontal | vertical "}}},className:{description:"客製化樣式",control:{type:"text"}}},parameters:{docs:{title:"Stepper",description:{component:"Stepper 組件的呈現及說明。可用於引導用戶完成分步驟流程，清晰地顯示當前進度。"}}}},m={name:"預設項目",args:{dataSource:d,currentStep:1,direction:"horizontal",className:""},render:t=>({components:{Stepper:u,Button:c},setup(){const n=y(t.currentStep);return{args:t,currentStep:n,goToPreviousStep:()=>{n.value>0&&(n.value-=1)},goToNextStep:()=>{n.value<t.dataSource.length-1&&(n.value+=1)}}},template:`
      <Stepper
        :dataSource="args.dataSource"
        :currentStep="currentStep"
        :direction="args.direction"
        :className="args.className"
      ></Stepper>
      
      <div style="display: flex; justify-content: flex-start; gap: 8px; margin-top: 16px;">
        <Button
          variant="filled"
          :isDisabled="currentStep === 0"
          @click="goToPreviousStep"
        >
          Previous
        </Button>

        <Button
          variant="filled"
          :isDisabled="currentStep === args.dataSource.length - 1"
          @click="goToNextStep"
        >
          Next
        </Button>
      </div>`}),parameters:{controls:{},docs:{source:{transform:(t,n)=>{const{args:e}=n;return["<script setup>",'import { ref } from "vue";','import { Stepper, Button } from "@ded-wds-vue/ui";',"const currentStep = ref(1);","const dataSource = [",`${ce(e.dataSource)}`,"];","","const goToPreviousStep = () => {","  if (currentStep.value > 0) {","    currentStep.value -= 1;","  }","};","","const goToNextStep = () => {","  if (currentStep.value < dataSource.length - 1) {","    currentStep.value += 1;","  }","};","<\/script>","","<template>","  <Stepper",'      :dataSource="dataSource"','      :currentStep="currentStep"',`      ${e.direction?`direction="${e.direction}"`:""}`,`      ${e.className?`className="${e.className}"`:""}`,"  ></Stepper>",'  <div style="display: flex; justify-content: flex-start; gap: 8px; margin-top: 16px;">',"    <Button",'      variant="filled"','      :isDisabled="currentStep === 0"','      @click="goToPreviousStep"',"    >","      Previous","    </Button>","    <Button",'      variant="filled"','      :isDisabled="currentStep === dataSource.length - 1"','      @click="goToNextStep"',"    >","      Next","    </Button>","  </div>","</template>"].filter(Boolean).join(`
`).trim()}}}}},v={name:"橫向互動模式",args:{dataSource:d,currentStep:1,direction:"horizontal",className:""},render:t=>({components:{Stepper:u,Button:c},setup(){const n=r=>{Object.assign(t,r)};return{args:t,goToPreviousStep:()=>{const r=Math.max(0,t.currentStep-1);n({currentStep:r})},goToNextStep:()=>{const r=Math.min(t.dataSource.length-1,t.currentStep+1);n({currentStep:r})}}},template:`
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
      </div>`}),parameters:{controls:{},docs:{source:{transform:(t,n)=>{const{args:e}=n;return["<script setup>",'import { ref } from "vue";','import { Stepper, Button } from "@ded-wds-vue/ui";',"","const currentStep = ref(1);","const dataSource = [","  {",'    title: "Step 1",','    desc: "Description",','    content: "Content for Step 1",',"  },","  {",'    title: "Step 2",','    desc: "Description",','    content: "Content for Step 2",',"  },","  {",'    title: "Step 3",','    desc: "Description",','    content: "Content for Step 3",',"  }","];","","const goToPreviousStep = () => {","  if (currentStep.value > 0) {","    currentStep.value -= 1;","  }","};","","const goToNextStep = () => {","  if (currentStep.value < dataSource.length - 1) {","    currentStep.value += 1;","  }","};","","<\/script>","","<template>","  <Stepper","      :dataSource='dataSource'",'      :currentStep="currentStep"',`      ${e.direction?`direction="${e.direction}"`:""}`,`      ${e.className?`className="${e.className}"`:""}`,"  ></Stepper>",'  <div style="display: flex; justify-content: flex-start; gap: 8px; margin-top: 16px;">',"    <Button",'      variant="filled"','      :isDisabled="currentStep === 0"','      @click="goToPreviousStep()"',"    >","      Previous","    </Button>","  ","    <Button",'      variant="filled"','      :isDisabled="currentStep === dataSource.length - 1"','      @click="goToNextStep()"',"    >","      Next","    </Button>","  </div>","</template>"].filter(Boolean).join(`
`).trim()}}}}},f={name:"直向互動模式",args:{dataSource:d,currentStep:1,direction:"vertical",className:""},render:t=>({components:{Stepper:u,Button:c},setup(){const n=r=>{Object.assign(t,r)};return{args:t,goToPreviousStep:()=>{const r=Math.max(0,t.currentStep-1);n({currentStep:r})},goToNextStep:()=>{const r=Math.min(t.dataSource.length-1,t.currentStep+1);n({currentStep:r})}}},template:`
      <Stepper
        :dataSource="args.dataSource"
        :currentStep="args.currentStep"
        :direction="args.direction"
        :className="args.className"
      >
      </Stepper>

      <div style="display: flex; justify-content: flex-start; gap: 8px; margin-top: 16px;">
        <Button
          variant="filled"
          :isDisabled="args.currentStep === 0"
          @click="goToPreviousStep"
        >
          Previous
        </Button>

        <Button
          variant="filled"
          :isDisabled="args.currentStep === args.dataSource.length - 1"
          @click="goToNextStep"
        >
          Next
        </Button>
      </div>`}),parameters:{controls:{},docs:{source:{transform:(t,n)=>{const{args:e}=n;return["<script setup>",'import { ref } from "vue";','import { Stepper, Button } from "@ded-wds-vue/ui";',"","const currentStep = ref(1);","const dataSource = [","  {",'    title: "Step 1",','    desc: "Description",','    content: "Content for Step 1",',"  },","  {",'    title: "Step 2",','    desc: "Description",','    content: "Content for Step 2",',"  },","  {",'    title: "Step 3",','    desc: "Description",','    content: "Content for Step 3",',"  }","];","","const goToPreviousStep = () => {","  if (currentStep.value > 0) {","    currentStep.value -= 1;","  }","};","","const goToNextStep = () => {","  if (currentStep.value < dataSource.length - 1) {","    currentStep.value += 1;","  }","};","","<\/script>","","<template>","  <Stepper","      :dataSource='dataSource'",'      :currentStep="currentStep"',`      ${e.direction?`direction="${e.direction}"`:""}`,`      ${e.className?`className="${e.className}"`:""}`,"  ></Stepper>",'  <div style="display: flex; justify-content: flex-start; gap: 8px; margin-top: 16px;">',"    <Button",'      variant="filled"','      :isDisabled="currentStep === 0"','      @click="goToPreviousStep()"',"    >","      Previous","    </Button>","  ","    <Button",'      variant="filled"','      :isDisabled="currentStep === dataSource.length - 1"','      @click="goToNextStep()"',"    >","      Next","    </Button>","  </div>","</template>"].filter(Boolean).join(`
`).trim()}}}}},x={name:"事件處理",args:{dataSource:d,currentStep:0,direction:"horizontal",className:""},render:t=>({components:{Stepper:u,Button:c},setup(){const n=y(t.currentStep);function e(S){console.log("Step changed to index:",S),n.value=S}return{args:t,step:n,handleStepChange:e,goToPreviousStep:()=>{n.value>0&&(n.value-=1)},goToNextStep:()=>{n.value<t.dataSource.length-1&&(n.value+=1)}}},template:`
      <div>
        <p style="font-size: 16px; margin-bottom: 10px;">當前步驟索引: <strong>{{ step }}</strong></p>
        <p style="font-size: 14px; margin-bottom: 15px;">點擊步驟圓圈可直接切換步驟</p>
        
        <Stepper
          :dataSource="args.dataSource"
          :currentStep="step"
          @update:currentStep="handleStepChange"
          :direction="args.direction"
          :className="args.className"
        ></Stepper>
        
        <div style="display: flex; justify-content: flex-start; gap: 8px; margin-top: 16px;">
          <Button
            variant="filled"
            :isDisabled="step === 0"
            @click="goToPreviousStep"
          >
            Previous
          </Button>

          <Button
            variant="filled"
            :isDisabled="step === args.dataSource.length - 1"
            @click="goToNextStep"
          >
            Next
          </Button>
        </div>
      </div>`}),parameters:{docs:{description:{story:"示範如何處理步驟切換事件並獲取當前索引。"},source:{code:`
<script setup>
import { ref } from 'vue';
import { Stepper, Button } from "@ded-wds-vue/ui";

const step = ref(0);
const dataSource = [
  {
    title: "Step 1",
    desc: "Description",
    content: "Content for Step 1",
  },
  {
    title: "Step 2",
    desc: "Description",
    content: "Content for Step 2",
  },
  {
    title: "Step 3",
    desc: "Description",
    content: "Content for Step 3",
  },
];

function handleStepChange(index) {
  console.log('Step changed to index:', index);
  step.value = index;
}

const goToPreviousStep = () => {
  if (step.value > 0) {
    step.value -= 1;
  }
};

const goToNextStep = () => {
  if (step.value < dataSource.length - 1) {
    step.value += 1;
  }
};
<\/script>

<template>
  <p>當前步驟索引: {{ step }}</p>
  <p>點擊步驟圓圈可直接切換步驟</p>
  
  <Stepper
    :dataSource="dataSource"
    :currentStep="step"
    @update:currentStep="handleStepChange"
    direction="horizontal"
  ></Stepper>
  
  <div style="display: flex; justify-content: flex-start; gap: 8px; margin-top: 16px;">
    <Button
      variant="filled"
      :isDisabled="step === 0"
      @click="goToPreviousStep"
    >
      Previous
    </Button>

    <Button
      variant="filled"
      :isDisabled="step === dataSource.length - 1"
      @click="goToNextStep"
    >
      Next
    </Button>
  </div>
</template>
        `,language:"vue"}}}},B={name:"v-model 綁定",args:{dataSource:d,direction:"horizontal",className:""},render:t=>({components:{Stepper:u,Button:c},setup(){const n=y(0);return{args:t,selectedStep:n}},template:`
      <div>
        <div style="margin-bottom: 15px; display: flex; gap: 10px; align-items: center;">
          <p style="font-size: 16px;">當前步驟索引: <strong>{{ selectedStep }}</strong></p>
          <button 
            v-for="i in args.dataSource.length" 
            :key="i" 
            @click="selectedStep = i-1"
            style="padding: 5px 10px; margin-right: 5px; cursor: pointer;"
            :style="selectedStep === i-1 ? 'background-color: #4CAF50; color: white;' : ''"
          >
            切換到步驟 {{ i }}
          </button>
        </div>
        
        <Stepper
          :dataSource="args.dataSource"
          v-model:currentStep="selectedStep"
          :direction="args.direction"
          :className="args.className"
        ></Stepper>
      </div>`}),parameters:{docs:{description:{story:"示範如何使用 v-model 雙向綁定步驟索引，並透過外部控制來切換步驟。"},source:{code:`
<script setup>
import { ref } from 'vue';
import { Stepper } from "@ded-wds-vue/ui";

const selectedStep = ref(0);
const dataSource = [
  {
    title: "Step 1",
    desc: "Description",
    content: "Content for Step 1",
  },
  {
    title: "Step 2",
    desc: "Description",
    content: "Content for Step 2",
  },
  {
    title: "Step 3",
    desc: "Description",
    content: "Content for Step 3",
  },
];
<\/script>

<template>
  <div>
    <div style="margin-bottom: 15px;">
      <p>當前步驟索引: {{ selectedStep }}</p>
      <button v-for="i in dataSource.length" :key="i" @click="selectedStep = i-1">
        切換到步驟 {{ i }}
      </button>
    </div>
    
    <Stepper
      :dataSource="dataSource"
      v-model:currentStep="selectedStep"
      direction="horizontal"
    ></Stepper>
  </div>
</template>
        `,language:"vue"}}}},h={name:"不同內容類型",args:{dataSource:[{title:"HTML內容",desc:"支援HTML格式",content:'這是<strong style="color: red;">HTML格式</strong>的內容'},{title:"組件內容",desc:"支援Vue組件",content:"這裡會顯示Button組件"},{title:"純文字",desc:"普通文字內容",content:"這是普通文字內容"}],currentStep:0,direction:"horizontal",className:""},render:t=>({components:{Stepper:u,Button:c},setup(){const n=y(t.currentStep),e=[{title:t.dataSource[0].title,desc:t.dataSource[0].desc,content:P("div",{innerHTML:t.dataSource[0].content})},{title:t.dataSource[1].title,desc:t.dataSource[1].desc,content:P(c,{themeColor:"primary",variant:"filled",size:"medium",onClick:()=>alert("Button clicked")},"Click me")},{title:t.dataSource[2].title,desc:t.dataSource[2].desc,content:t.dataSource[2].content}];return{args:t,enhancedDataSource:e,currentStep:n,goToPreviousStep:()=>{n.value>0&&(n.value-=1)},goToNextStep:()=>{n.value<e.length-1&&(n.value+=1)}}},template:`
      <Stepper
        :dataSource="enhancedDataSource"
        :currentStep="currentStep"
        :direction="args.direction"
        :className="args.className"
      ></Stepper>
      
      <div style="display: flex; justify-content: flex-start; gap: 8px; margin-top: 16px;">
        <Button
          variant="filled"
          :isDisabled="currentStep === 0"
          @click="goToPreviousStep"
        >
          Previous
        </Button>

        <Button
          variant="filled"
          :isDisabled="currentStep === enhancedDataSource.length - 1"
          @click="goToNextStep"
        >
          Next
        </Button>
      </div>`}),parameters:{docs:{description:{story:"示範如何在步驟中使用不同類型的內容：HTML和Button組件，並且可以切換步驟。"},source:{code:`
<script setup>
import { ref } from 'vue';
import { Stepper, Button } from "@ded-wds-vue/ui";
import { h } from 'vue';

const currentStep = ref(0);

// 帶有不同類型內容的資料來源
const dataSource = [
  {
    title: "HTML內容",
    desc: "支援HTML格式",
    content: h('div', { innerHTML: '這是<strong style="color: red;">HTML格式</strong>的內容' }),
  },
  {
    title: "組件內容",
    desc: "支援Vue組件",
    content: h(Button, {
      themeColor: 'primary',
      variant: 'filled',
      size: 'medium',
      onClick: () => alert('Button clicked')
    }, 'Click me'),
  },
  {
    title: "純文字",
    desc: "普通文字內容",
    content: "這是普通文字內容",
  },
];

const goToPreviousStep = () => {
  if (currentStep.value > 0) {
    currentStep.value -= 1;
  }
};

const goToNextStep = () => {
  if (currentStep.value < dataSource.length - 1) {
    currentStep.value += 1;
  }
};
<\/script>

<template>
  <Stepper
    :dataSource="dataSource"
    :currentStep="currentStep"
    direction="horizontal"
  ></Stepper>
  
  <div style="display: flex; justify-content: flex-start; gap: 8px; margin-top: 16px;">
    <Button
      variant="filled"
      :isDisabled="currentStep === 0"
      @click="goToPreviousStep"
    >
      Previous
    </Button>

    <Button
      variant="filled"
      :isDisabled="currentStep === dataSource.length - 1"
      @click="goToNextStep"
    >
      Next
    </Button>
  </div>
</template>
        `,language:"vue"}}}};var E,A,j;m.parameters={...m.parameters,docs:{...(E=m.parameters)==null?void 0:E.docs,source:{originalSource:`{
  name: '預設項目',
  args: {
    dataSource,
    currentStep: 1,
    direction: 'horizontal',
    className: ''
  },
  render: args => ({
    components: {
      Stepper,
      Button
    },
    setup() {
      const currentStep = ref(args.currentStep);
      const goToPreviousStep = () => {
        if (currentStep.value > 0) {
          currentStep.value -= 1;
        }
      };
      const goToNextStep = () => {
        if (currentStep.value < args.dataSource.length - 1) {
          currentStep.value += 1;
        }
      };
      return {
        args,
        currentStep,
        goToPreviousStep,
        goToNextStep
      };
    },
    template: \`
      <Stepper
        :dataSource="args.dataSource"
        :currentStep="currentStep"
        :direction="args.direction"
        :className="args.className"
      ></Stepper>
      
      <div style="display: flex; justify-content: flex-start; gap: 8px; margin-top: 16px;">
        <Button
          variant="filled"
          :isDisabled="currentStep === 0"
          @click="goToPreviousStep"
        >
          Previous
        </Button>

        <Button
          variant="filled"
          :isDisabled="currentStep === args.dataSource.length - 1"
          @click="goToNextStep"
        >
          Next
        </Button>
      </div>\`
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
          return [\`<script setup>\`, \`import { ref } from "vue";\`, \`import { Stepper, Button } from "@ded-wds-vue/ui";\`, \`const currentStep = ref(1);\`, \`const dataSource = [\`, \`\${dataSourceString}\`, \`];\`, \`\`, \`const goToPreviousStep = () => {\`, \`  if (currentStep.value > 0) {\`, \`    currentStep.value -= 1;\`, \`  }\`, \`};\`, \`\`, \`const goToNextStep = () => {\`, \`  if (currentStep.value < dataSource.length - 1) {\`, \`    currentStep.value += 1;\`, \`  }\`, \`};\`, \`<\/script>\`, '', '<template>', '  <Stepper', \`      :dataSource="dataSource"\`, \`      :currentStep="currentStep"\`, \`      \${args.direction ? \`direction="\${args.direction}"\` : ''}\`, \`      \${args.className ? \`className="\${args.className}"\` : ''}\`, '  ></Stepper>', \`  <div style="display: flex; justify-content: flex-start; gap: 8px; margin-top: 16px;">\`, \`    <Button\`, \`      variant="filled"\`, \`      :isDisabled="currentStep === 0"\`, \`      @click="goToPreviousStep"\`, \`    >\`, \`      Previous\`, \`    </Button>\`, \`    <Button\`, \`      variant="filled"\`, \`      :isDisabled="currentStep === dataSource.length - 1"\`, \`      @click="goToNextStep"\`, \`    >\`, \`      Next\`, \`    </Button>\`, \`  </div>\`, '</template>'].filter(Boolean).join('\\n').trim();
        }
      }
    }
  }
}`,...(j=(A=m.parameters)==null?void 0:A.docs)==null?void 0:j.source}}};var z,$,w;v.parameters={...v.parameters,docs:{...(z=v.parameters)==null?void 0:z.docs,source:{originalSource:'{\n  name: \'橫向互動模式\',\n  args: {\n    dataSource,\n    currentStep: 1,\n    direction: \'horizontal\',\n    className: \'\'\n  },\n  render: args => ({\n    components: {\n      Stepper,\n      Button\n    },\n    setup() {\n      const updateArgs = newArgs => {\n        Object.assign(args, newArgs);\n      };\n      const goToPreviousStep = () => {\n        const newStep = Math.max(0, args.currentStep - 1);\n        updateArgs({\n          currentStep: newStep\n        });\n      };\n      const goToNextStep = () => {\n        const newStep = Math.min(args.dataSource.length - 1, args.currentStep + 1);\n        updateArgs({\n          currentStep: newStep\n        });\n      };\n      return {\n        args,\n        goToPreviousStep,\n        goToNextStep\n      };\n    },\n    template: `\n      <Stepper\n        :dataSource="args.dataSource"\n        :currentStep="args.currentStep"\n        :direction="args.direction"\n        :className="args.className"\n      >\n      </Stepper>\n      <div style="display: flex; justify-content: flex-start; gap: 8px; margin-top: 16px;">\n        <Button variant="filled" :isDisabled="args.currentStep === 0" @click="goToPreviousStep">\n          Previous\n        </Button>\n        <Button variant="filled" :isDisabled="args.currentStep === args.dataSource.length - 1" @click="goToNextStep">\n          Next\n        </Button>\n      </div>`\n  }),\n  // 控制 controls 中能控制的參數\n  parameters: {\n    controls: {\n      // exclude: [\'status\', \'src\', \'imageAlt\', \'username\' ],\n    },\n    docs: {\n      source: {\n        transform: (src, storyContext) => {\n          const {\n            args\n          } = storyContext;\n          return [`<script setup>`, `import { ref } from "vue";`, `import { Stepper, Button } from "@ded-wds-vue/ui";`, ``, `const currentStep = ref(1);`, `const dataSource = [`, `  {`, `    title: "Step 1",`, `    desc: "Description",`, `    content: "Content for Step 1",`, `  },`, `  {`, `    title: "Step 2",`, `    desc: "Description",`, `    content: "Content for Step 2",`, `  },`, `  {`, `    title: "Step 3",`, `    desc: "Description",`, `    content: "Content for Step 3",`, `  }`, `];`, ``, `const goToPreviousStep = () => {`, `  if (currentStep.value > 0) {`, `    currentStep.value -= 1;`, `  }`, `};`, ``, `const goToNextStep = () => {`, `  if (currentStep.value < dataSource.length - 1) {`, `    currentStep.value += 1;`, `  }`, `};`, ``, `<\/script>`, \'\', \'<template>\', \'  <Stepper\', `      :dataSource=\'dataSource\'`, `      :currentStep="currentStep"`, `      ${args.direction ? `direction="${args.direction}"` : \'\'}`, `      ${args.className ? `className="${args.className}"` : \'\'}`, \'  ></Stepper>\', `  <div style="display: flex; justify-content: flex-start; gap: 8px; margin-top: 16px;">`, `    <Button`, `      variant="filled"`, `      :isDisabled="currentStep === 0"`, `      @click="goToPreviousStep()"`, `    >`, `      Previous`, `    </Button>`, `  `, `    <Button`, `      variant="filled"`, `      :isDisabled="currentStep === dataSource.length - 1"`, `      @click="goToNextStep()"`, `    >`, `      Next`, `    </Button>`, `  </div>`, \'</template>\'].filter(Boolean).join(\'\\n\').trim();\n        }\n      }\n    }\n  }\n}',...(w=($=v.parameters)==null?void 0:$.docs)==null?void 0:w.source}}};var M,_,H;f.parameters={...f.parameters,docs:{...(M=f.parameters)==null?void 0:M.docs,source:{originalSource:'{\n  name: \'直向互動模式\',\n  args: {\n    dataSource,\n    currentStep: 1,\n    direction: \'vertical\',\n    className: \'\'\n  },\n  render: args => ({\n    components: {\n      Stepper,\n      Button\n    },\n    setup() {\n      const updateArgs = newArgs => {\n        Object.assign(args, newArgs);\n      };\n      const goToPreviousStep = () => {\n        const newStep = Math.max(0, args.currentStep - 1);\n        updateArgs({\n          currentStep: newStep\n        });\n      };\n      const goToNextStep = () => {\n        const newStep = Math.min(args.dataSource.length - 1, args.currentStep + 1);\n        updateArgs({\n          currentStep: newStep\n        });\n      };\n      return {\n        args,\n        goToPreviousStep,\n        goToNextStep\n      };\n    },\n    template: `\n      <Stepper\n        :dataSource="args.dataSource"\n        :currentStep="args.currentStep"\n        :direction="args.direction"\n        :className="args.className"\n      >\n      </Stepper>\n\n      <div style="display: flex; justify-content: flex-start; gap: 8px; margin-top: 16px;">\n        <Button\n          variant="filled"\n          :isDisabled="args.currentStep === 0"\n          @click="goToPreviousStep"\n        >\n          Previous\n        </Button>\n\n        <Button\n          variant="filled"\n          :isDisabled="args.currentStep === args.dataSource.length - 1"\n          @click="goToNextStep"\n        >\n          Next\n        </Button>\n      </div>`\n  }),\n  parameters: {\n    controls: {\n      // exclude: [\'status\', \'src\', \'imageAlt\', \'username\' ],\n    },\n    docs: {\n      source: {\n        transform: (src, storyContext) => {\n          const {\n            args\n          } = storyContext;\n          return [`<script setup>`, `import { ref } from "vue";`, `import { Stepper, Button } from "@ded-wds-vue/ui";`, ``, `const currentStep = ref(1);`, `const dataSource = [`, `  {`, `    title: "Step 1",`, `    desc: "Description",`, `    content: "Content for Step 1",`, `  },`, `  {`, `    title: "Step 2",`, `    desc: "Description",`, `    content: "Content for Step 2",`, `  },`, `  {`, `    title: "Step 3",`, `    desc: "Description",`, `    content: "Content for Step 3",`, `  }`, `];`, ``, `const goToPreviousStep = () => {`, `  if (currentStep.value > 0) {`, `    currentStep.value -= 1;`, `  }`, `};`, ``, `const goToNextStep = () => {`, `  if (currentStep.value < dataSource.length - 1) {`, `    currentStep.value += 1;`, `  }`, `};`, ``, `<\/script>`, \'\', \'<template>\', \'  <Stepper\', `      :dataSource=\'dataSource\'`, `      :currentStep="currentStep"`, `      ${args.direction ? `direction="${args.direction}"` : \'\'}`, `      ${args.className ? `className="${args.className}"` : \'\'}`, \'  ></Stepper>\', `  <div style="display: flex; justify-content: flex-start; gap: 8px; margin-top: 16px;">`, `    <Button`, `      variant="filled"`, `      :isDisabled="currentStep === 0"`, `      @click="goToPreviousStep()"`, `    >`, `      Previous`, `    </Button>`, `  `, `    <Button`, `      variant="filled"`, `      :isDisabled="currentStep === dataSource.length - 1"`, `      @click="goToNextStep()"`, `    >`, `      Next`, `    </Button>`, `  </div>`, \'</template>\'].filter(Boolean).join(\'\\n\').trim();\n        }\n      }\n    }\n  }\n}',...(H=(_=f.parameters)==null?void 0:_.docs)==null?void 0:H.source}}};var L,V,q;x.parameters={...x.parameters,docs:{...(L=x.parameters)==null?void 0:L.docs,source:{originalSource:`{
  name: '事件處理',
  args: {
    dataSource,
    currentStep: 0,
    direction: 'horizontal',
    className: ''
  },
  render: args => ({
    components: {
      Stepper,
      Button
    },
    setup() {
      const step = ref(args.currentStep);
      function handleStepChange(index) {
        console.log('Step changed to index:', index);
        step.value = index;
      }
      const goToPreviousStep = () => {
        if (step.value > 0) {
          step.value -= 1;
        }
      };
      const goToNextStep = () => {
        if (step.value < args.dataSource.length - 1) {
          step.value += 1;
        }
      };
      return {
        args,
        step,
        handleStepChange,
        goToPreviousStep,
        goToNextStep
      };
    },
    template: \`
      <div>
        <p style="font-size: 16px; margin-bottom: 10px;">當前步驟索引: <strong>{{ step }}</strong></p>
        <p style="font-size: 14px; margin-bottom: 15px;">點擊步驟圓圈可直接切換步驟</p>
        
        <Stepper
          :dataSource="args.dataSource"
          :currentStep="step"
          @update:currentStep="handleStepChange"
          :direction="args.direction"
          :className="args.className"
        ></Stepper>
        
        <div style="display: flex; justify-content: flex-start; gap: 8px; margin-top: 16px;">
          <Button
            variant="filled"
            :isDisabled="step === 0"
            @click="goToPreviousStep"
          >
            Previous
          </Button>

          <Button
            variant="filled"
            :isDisabled="step === args.dataSource.length - 1"
            @click="goToNextStep"
          >
            Next
          </Button>
        </div>
      </div>\`
  }),
  parameters: {
    docs: {
      description: {
        story: '示範如何處理步驟切換事件並獲取當前索引。'
      },
      source: {
        code: \`
<script setup>
import { ref } from 'vue';
import { Stepper, Button } from "@ded-wds-vue/ui";

const step = ref(0);
const dataSource = [
  {
    title: "Step 1",
    desc: "Description",
    content: "Content for Step 1",
  },
  {
    title: "Step 2",
    desc: "Description",
    content: "Content for Step 2",
  },
  {
    title: "Step 3",
    desc: "Description",
    content: "Content for Step 3",
  },
];

function handleStepChange(index) {
  console.log('Step changed to index:', index);
  step.value = index;
}

const goToPreviousStep = () => {
  if (step.value > 0) {
    step.value -= 1;
  }
};

const goToNextStep = () => {
  if (step.value < dataSource.length - 1) {
    step.value += 1;
  }
};
<\/script>

<template>
  <p>當前步驟索引: {{ step }}</p>
  <p>點擊步驟圓圈可直接切換步驟</p>
  
  <Stepper
    :dataSource="dataSource"
    :currentStep="step"
    @update:currentStep="handleStepChange"
    direction="horizontal"
  ></Stepper>
  
  <div style="display: flex; justify-content: flex-start; gap: 8px; margin-top: 16px;">
    <Button
      variant="filled"
      :isDisabled="step === 0"
      @click="goToPreviousStep"
    >
      Previous
    </Button>

    <Button
      variant="filled"
      :isDisabled="step === dataSource.length - 1"
      @click="goToNextStep"
    >
      Next
    </Button>
  </div>
</template>
        \`,
        language: 'vue'
      }
    }
  }
}`,...(q=(V=x.parameters)==null?void 0:V.docs)==null?void 0:q.source}}};var O,U,W;B.parameters={...B.parameters,docs:{...(O=B.parameters)==null?void 0:O.docs,source:{originalSource:`{
  name: 'v-model 綁定',
  args: {
    dataSource,
    direction: 'horizontal',
    className: ''
  },
  render: args => ({
    components: {
      Stepper,
      Button
    },
    setup() {
      const selectedStep = ref(0);
      return {
        args,
        selectedStep
      };
    },
    template: \`
      <div>
        <div style="margin-bottom: 15px; display: flex; gap: 10px; align-items: center;">
          <p style="font-size: 16px;">當前步驟索引: <strong>{{ selectedStep }}</strong></p>
          <button 
            v-for="i in args.dataSource.length" 
            :key="i" 
            @click="selectedStep = i-1"
            style="padding: 5px 10px; margin-right: 5px; cursor: pointer;"
            :style="selectedStep === i-1 ? 'background-color: #4CAF50; color: white;' : ''"
          >
            切換到步驟 {{ i }}
          </button>
        </div>
        
        <Stepper
          :dataSource="args.dataSource"
          v-model:currentStep="selectedStep"
          :direction="args.direction"
          :className="args.className"
        ></Stepper>
      </div>\`
  }),
  parameters: {
    docs: {
      description: {
        story: '示範如何使用 v-model 雙向綁定步驟索引，並透過外部控制來切換步驟。'
      },
      source: {
        code: \`
<script setup>
import { ref } from 'vue';
import { Stepper } from "@ded-wds-vue/ui";

const selectedStep = ref(0);
const dataSource = [
  {
    title: "Step 1",
    desc: "Description",
    content: "Content for Step 1",
  },
  {
    title: "Step 2",
    desc: "Description",
    content: "Content for Step 2",
  },
  {
    title: "Step 3",
    desc: "Description",
    content: "Content for Step 3",
  },
];
<\/script>

<template>
  <div>
    <div style="margin-bottom: 15px;">
      <p>當前步驟索引: {{ selectedStep }}</p>
      <button v-for="i in dataSource.length" :key="i" @click="selectedStep = i-1">
        切換到步驟 {{ i }}
      </button>
    </div>
    
    <Stepper
      :dataSource="dataSource"
      v-model:currentStep="selectedStep"
      direction="horizontal"
    ></Stepper>
  </div>
</template>
        \`,
        language: 'vue'
      }
    }
  }
}`,...(W=(U=B.parameters)==null?void 0:U.docs)==null?void 0:W.source}}};var I,G,J;h.parameters={...h.parameters,docs:{...(I=h.parameters)==null?void 0:I.docs,source:{originalSource:`{
  name: '不同內容類型',
  args: {
    dataSource: [{
      title: 'HTML內容',
      desc: '支援HTML格式',
      content: '這是<strong style="color: red;">HTML格式</strong>的內容'
    }, {
      title: '組件內容',
      desc: '支援Vue組件',
      content: '這裡會顯示Button組件'
    }, {
      title: '純文字',
      desc: '普通文字內容',
      content: '這是普通文字內容'
    }],
    currentStep: 0,
    direction: 'horizontal',
    className: ''
  },
  render: args => ({
    components: {
      Stepper,
      Button
    },
    setup() {
      const currentStep = ref(args.currentStep);

      // 準備帶有動態組件的資料來源
      const enhancedDataSource = [{
        title: args.dataSource[0].title,
        desc: args.dataSource[0].desc,
        // 使用 v-html 指令來渲染 HTML
        content: h('div', {
          innerHTML: args.dataSource[0].content
        })
      }, {
        title: args.dataSource[1].title,
        desc: args.dataSource[1].desc,
        // 使用實際的 Button 組件
        content: h(Button, {
          themeColor: 'primary',
          variant: 'filled',
          size: 'medium',
          onClick: () => alert('Button clicked')
        }, 'Click me')
      }, {
        title: args.dataSource[2].title,
        desc: args.dataSource[2].desc,
        content: args.dataSource[2].content
      }];
      const goToPreviousStep = () => {
        if (currentStep.value > 0) {
          currentStep.value -= 1;
        }
      };
      const goToNextStep = () => {
        if (currentStep.value < enhancedDataSource.length - 1) {
          currentStep.value += 1;
        }
      };
      return {
        args,
        enhancedDataSource,
        currentStep,
        goToPreviousStep,
        goToNextStep
      };
    },
    template: \`
      <Stepper
        :dataSource="enhancedDataSource"
        :currentStep="currentStep"
        :direction="args.direction"
        :className="args.className"
      ></Stepper>
      
      <div style="display: flex; justify-content: flex-start; gap: 8px; margin-top: 16px;">
        <Button
          variant="filled"
          :isDisabled="currentStep === 0"
          @click="goToPreviousStep"
        >
          Previous
        </Button>

        <Button
          variant="filled"
          :isDisabled="currentStep === enhancedDataSource.length - 1"
          @click="goToNextStep"
        >
          Next
        </Button>
      </div>\`
  }),
  parameters: {
    docs: {
      description: {
        story: '示範如何在步驟中使用不同類型的內容：HTML和Button組件，並且可以切換步驟。'
      },
      source: {
        code: \`
<script setup>
import { ref } from 'vue';
import { Stepper, Button } from "@ded-wds-vue/ui";
import { h } from 'vue';

const currentStep = ref(0);

// 帶有不同類型內容的資料來源
const dataSource = [
  {
    title: "HTML內容",
    desc: "支援HTML格式",
    content: h('div', { innerHTML: '這是<strong style="color: red;">HTML格式</strong>的內容' }),
  },
  {
    title: "組件內容",
    desc: "支援Vue組件",
    content: h(Button, {
      themeColor: 'primary',
      variant: 'filled',
      size: 'medium',
      onClick: () => alert('Button clicked')
    }, 'Click me'),
  },
  {
    title: "純文字",
    desc: "普通文字內容",
    content: "這是普通文字內容",
  },
];

const goToPreviousStep = () => {
  if (currentStep.value > 0) {
    currentStep.value -= 1;
  }
};

const goToNextStep = () => {
  if (currentStep.value < dataSource.length - 1) {
    currentStep.value += 1;
  }
};
<\/script>

<template>
  <Stepper
    :dataSource="dataSource"
    :currentStep="currentStep"
    direction="horizontal"
  ></Stepper>
  
  <div style="display: flex; justify-content: flex-start; gap: 8px; margin-top: 16px;">
    <Button
      variant="filled"
      :isDisabled="currentStep === 0"
      @click="goToPreviousStep"
    >
      Previous
    </Button>

    <Button
      variant="filled"
      :isDisabled="currentStep === dataSource.length - 1"
      @click="goToNextStep"
    >
      Next
    </Button>
  </div>
</template>
        \`,
        language: 'vue'
      }
    }
  }
}`,...(J=(G=h.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};const me=["StepperDefault","StepperHorizontal","StepperVertical","StepperEventStory","StepperVModelStory","ContentTypesStory"];export{h as ContentTypesStory,m as StepperDefault,x as StepperEventStory,v as StepperHorizontal,B as StepperVModelStory,f as StepperVertical,me as __namedExportsOrder,ge as default};

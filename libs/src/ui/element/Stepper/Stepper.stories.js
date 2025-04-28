import Button from '@/ui/element/Button/Button.vue';
import Stepper from '@/ui/element/Stepper/Stepper.vue';
import { h, ref } from 'vue';

function formatDataSource(dataSource) {
  return `    ${dataSource
    .map((item) => {
      // 處理不同類型的 content
      let contentStr = '';
      if (typeof item.content === 'string') {
        contentStr = `"${item.content}"`;
      } else if (item.content && typeof item.content === 'object') {
        // 對於複雜內容，使用註解提示
        contentStr = '/* 在此處放置您的組件或HTML內容 */';
      }

      return `{
        title: "${item.title}",
        desc: "${item.desc || ''}",
        content: ${contentStr},
    }`;
    })
    .join(',\n    ')}`;
}

const dataSource = [
  {
    title: 'Step 1',
    desc: 'Description',
    content: 'Content for Step 1',
  },
  {
    title: 'Step 2',
    desc: 'Description',
    content: 'Content for Step 2',
  },
  {
    title: 'Step 3',
    desc: 'Description',
    content: 'Content for Step 3',
  },
];

export default {
  title: 'Component/Stepper',
  component: Stepper,
  tags: ['autodocs'],
  argTypes: {
    dataSource: {
      description: '步驟列表',
      control: {
        type: 'object',
      },
      table: {
        type: {
          summary:
            '{ title: string; desc?: string | undefined; content?: string | VNode | Component; }[]',
        },
      },
    },
    currentStep: {
      description: '當前步驟（從 0 開始）',
      control: {
        type: 'number',
        min: 0,
        max: 2,
        step: 1,
      },
    },
    direction: {
      description: '方向',
      control: { type: 'select' },
      options: ['horizontal', 'vertical'],
      table: {
        type: {
          summary: 'horizontal | vertical ',
        },
      },
    },
    className: {
      description: '客製化樣式',
      control: { type: 'text' },
    },
  },
  parameters: {
    // 自動文件
    docs: {
      title: 'Stepper',
      description: {
        component:
          'Stepper 組件的呈現及說明。可用於引導用戶完成分步驟流程，清晰地顯示當前進度。',
      },
    },
  },
};

// ==== 預設項目 ====//
export const StepperDefault = {
  name: '預設項目',
  args: {
    dataSource,
    currentStep: 1,
    direction: 'horizontal',
    className: '',
  },
  render: (args) => ({
    components: { Stepper, Button },
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
        goToNextStep,
      };
    },
    template: `
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
      </div>`,
  }),
  // 控制 controls 中能控制的參數
  parameters: {
    controls: {
      // exclude: ['status', 'src', 'imageAlt', 'username' ],
    },
    docs: {
      source: {
        transform: (src, storyContext) => {
          const { args } = storyContext;
          const dataSourceString = formatDataSource(args.dataSource);
          return [
            `<script setup>`,
            `import { ref } from "vue";`,
            `import { Stepper, Button } from "@ded-wds-vue/ui";`,
            `const currentStep = ref(1);`,
            `const dataSource = [`,
            `${dataSourceString}`,
            `];`,
            ``,
            `const goToPreviousStep = () => {`,
            `  if (currentStep.value > 0) {`,
            `    currentStep.value -= 1;`,
            `  }`,
            `};`,
            ``,
            `const goToNextStep = () => {`,
            `  if (currentStep.value < dataSource.length - 1) {`,
            `    currentStep.value += 1;`,
            `  }`,
            `};`,
            `</script>`,
            '',
            '<template>',
            '  <Stepper',
            `      :dataSource="dataSource"`,
            `      :currentStep="currentStep"`,
            `      ${args.direction ? `direction="${args.direction}"` : ''}`,
            `      ${args.className ? `className="${args.className}"` : ''}`,
            '  ></Stepper>',
            `  <div style="display: flex; justify-content: flex-start; gap: 8px; margin-top: 16px;">`,
            `    <Button`,
            `      variant="filled"`,
            `      :isDisabled="currentStep === 0"`,
            `      @click="goToPreviousStep"`,
            `    >`,
            `      Previous`,
            `    </Button>`,
            `    <Button`,
            `      variant="filled"`,
            `      :isDisabled="currentStep === dataSource.length - 1"`,
            `      @click="goToNextStep"`,
            `    >`,
            `      Next`,
            `    </Button>`,
            `  </div>`,
            '</template>',
          ]
            .filter(Boolean)
            .join('\n')
            .trim();
        },
      },
    },
  },
};

// ==== 橫向互動模式 ====//
export const StepperHorizontal = {
  name: '橫向互動模式',
  args: {
    dataSource,
    currentStep: 1,
    direction: 'horizontal',
    className: '',
  },
  render: (args) => ({
    components: { Stepper, Button },
    setup() {
      const updateArgs = (newArgs) => {
        Object.assign(args, newArgs);
      };

      const goToPreviousStep = () => {
        const newStep = Math.max(0, args.currentStep - 1);
        updateArgs({ currentStep: newStep });
      };

      const goToNextStep = () => {
        const newStep = Math.min(
          args.dataSource.length - 1,
          args.currentStep + 1,
        );
        updateArgs({ currentStep: newStep });
      };
      return {
        args,
        goToPreviousStep,
        goToNextStep,
      };
    },
    template: `
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
      </div>`,
  }),
  // 控制 controls 中能控制的參數
  parameters: {
    controls: {
      // exclude: ['status', 'src', 'imageAlt', 'username' ],
    },
    docs: {
      source: {
        transform: (src, storyContext) => {
          const { args } = storyContext;
          return [
            `<script setup>`,
            `import { ref } from "vue";`,
            `import { Stepper, Button } from "@ded-wds-vue/ui";`,
            ``,
            `const currentStep = ref(1);`,
            `const dataSource = [`,
            `  {`,
            `    title: "Step 1",`,
            `    desc: "Description",`,
            `    content: "Content for Step 1",`,
            `  },`,
            `  {`,
            `    title: "Step 2",`,
            `    desc: "Description",`,
            `    content: "Content for Step 2",`,
            `  },`,
            `  {`,
            `    title: "Step 3",`,
            `    desc: "Description",`,
            `    content: "Content for Step 3",`,
            `  }`,
            `];`,
            ``,
            `const goToPreviousStep = () => {`,
            `  if (currentStep.value > 0) {`,
            `    currentStep.value -= 1;`,
            `  }`,
            `};`,
            ``,
            `const goToNextStep = () => {`,
            `  if (currentStep.value < dataSource.length - 1) {`,
            `    currentStep.value += 1;`,
            `  }`,
            `};`,
            ``,
            `</script>`,
            '',
            '<template>',
            '  <Stepper',
            `      :dataSource='dataSource'`,
            `      :currentStep="currentStep"`,
            `      ${args.direction ? `direction="${args.direction}"` : ''}`,
            `      ${args.className ? `className="${args.className}"` : ''}`,
            '  ></Stepper>',

            `  <div style="display: flex; justify-content: flex-start; gap: 8px; margin-top: 16px;">`,
            `    <Button`,
            `      variant="filled"`,
            `      :isDisabled="currentStep === 0"`,
            `      @click="goToPreviousStep()"`,
            `    >`,
            `      Previous`,
            `    </Button>`,
            `  `,
            `    <Button`,
            `      variant="filled"`,
            `      :isDisabled="currentStep === dataSource.length - 1"`,
            `      @click="goToNextStep()"`,
            `    >`,
            `      Next`,
            `    </Button>`,
            `  </div>`,
            '</template>',
          ]
            .filter(Boolean)
            .join('\n')
            .trim();
        },
      },
    },
  },
};

// ==== 直向互動模式 ====//
export const StepperVertical = {
  name: '直向互動模式',
  args: {
    dataSource,
    currentStep: 1,
    direction: 'vertical',
    className: '',
  },
  render: (args) => ({
    components: { Stepper, Button },
    setup() {
      const updateArgs = (newArgs) => {
        Object.assign(args, newArgs);
      };

      const goToPreviousStep = () => {
        const newStep = Math.max(0, args.currentStep - 1);
        updateArgs({ currentStep: newStep });
      };

      const goToNextStep = () => {
        const newStep = Math.min(
          args.dataSource.length - 1,
          args.currentStep + 1,
        );
        updateArgs({ currentStep: newStep });
      };
      return {
        args,
        goToPreviousStep,
        goToNextStep,
      };
    },
    template: `
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
      </div>`,
  }),
  parameters: {
    controls: {
      // exclude: ['status', 'src', 'imageAlt', 'username' ],
    },
    docs: {
      source: {
        transform: (src, storyContext) => {
          const { args } = storyContext;
          return [
            `<script setup>`,
            `import { ref } from "vue";`,
            `import { Stepper, Button } from "@ded-wds-vue/ui";`,
            ``,
            `const currentStep = ref(1);`,
            `const dataSource = [`,
            `  {`,
            `    title: "Step 1",`,
            `    desc: "Description",`,
            `    content: "Content for Step 1",`,
            `  },`,
            `  {`,
            `    title: "Step 2",`,
            `    desc: "Description",`,
            `    content: "Content for Step 2",`,
            `  },`,
            `  {`,
            `    title: "Step 3",`,
            `    desc: "Description",`,
            `    content: "Content for Step 3",`,
            `  }`,
            `];`,
            ``,
            `const goToPreviousStep = () => {`,
            `  if (currentStep.value > 0) {`,
            `    currentStep.value -= 1;`,
            `  }`,
            `};`,
            ``,
            `const goToNextStep = () => {`,
            `  if (currentStep.value < dataSource.length - 1) {`,
            `    currentStep.value += 1;`,
            `  }`,
            `};`,
            ``,
            `</script>`,
            '',
            '<template>',
            '  <Stepper',
            `      :dataSource='dataSource'`,
            `      :currentStep="currentStep"`,
            `      ${args.direction ? `direction="${args.direction}"` : ''}`,
            `      ${args.className ? `className="${args.className}"` : ''}`,
            '  ></Stepper>',

            `  <div style="display: flex; justify-content: flex-start; gap: 8px; margin-top: 16px;">`,
            `    <Button`,
            `      variant="filled"`,
            `      :isDisabled="currentStep === 0"`,
            `      @click="goToPreviousStep()"`,
            `    >`,
            `      Previous`,
            `    </Button>`,
            `  `,
            `    <Button`,
            `      variant="filled"`,
            `      :isDisabled="currentStep === dataSource.length - 1"`,
            `      @click="goToNextStep()"`,
            `    >`,
            `      Next`,
            `    </Button>`,
            `  </div>`,
            '</template>',
          ]
            .filter(Boolean)
            .join('\n')
            .trim();
        },
      },
    },
  },
};

// ==== 事件處理示範 ====//
export const StepperEventStory = {
  name: '事件處理',
  args: {
    dataSource,
    currentStep: 0,
    direction: 'horizontal',
    className: '',
  },
  render: (args) => ({
    components: { Stepper, Button },
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
        goToNextStep,
      };
    },
    template: `
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
      </div>`,
  }),
  parameters: {
    docs: {
      description: {
        story: '示範如何處理步驟切換事件並獲取當前索引。',
      },
      source: {
        code: `
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
</script>

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
        `,
        language: 'vue',
      },
    },
  },
};

// ==== 使用 v-model 綁定索引 ====//
export const StepperVModelStory = {
  name: 'v-model 綁定',
  args: {
    dataSource,
    direction: 'horizontal',
    className: '',
  },
  render: (args) => ({
    components: { Stepper, Button },
    setup() {
      const selectedStep = ref(0);

      return {
        args,
        selectedStep,
      };
    },
    template: `
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
      </div>`,
  }),
  parameters: {
    docs: {
      description: {
        story:
          '示範如何使用 v-model 雙向綁定步驟索引，並透過外部控制來切換步驟。',
      },
      source: {
        code: `
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
</script>

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
        `,
        language: 'vue',
      },
    },
  },
};

// ==== 內容類型示範 ====//
export const ContentTypesStory = {
  name: '不同內容類型',
  args: {
    dataSource: [
      {
        title: 'HTML內容',
        desc: '支援HTML格式',
        content: '這是<strong style="color: red;">HTML格式</strong>的內容',
      },
      {
        title: '組件內容',
        desc: '支援Vue組件',
        content: '這裡會顯示Button組件',
      },
      {
        title: '純文字',
        desc: '普通文字內容',
        content: '這是普通文字內容',
      },
    ],
    currentStep: 0,
    direction: 'horizontal',
    className: '',
  },
  render: (args) => ({
    components: { Stepper, Button },
    setup() {
      const currentStep = ref(args.currentStep);

      // 準備帶有動態組件的資料來源
      const enhancedDataSource = [
        {
          title: args.dataSource[0].title,
          desc: args.dataSource[0].desc,
          // 使用 v-html 指令來渲染 HTML
          content: h('div', { innerHTML: args.dataSource[0].content }),
        },
        {
          title: args.dataSource[1].title,
          desc: args.dataSource[1].desc,
          // 使用實際的 Button 組件
          content: h(
            Button,
            {
              themeColor: 'primary',
              variant: 'filled',
              size: 'medium',
              onClick: () => alert('Button clicked'),
            },
            'Click me',
          ),
        },
        {
          title: args.dataSource[2].title,
          desc: args.dataSource[2].desc,
          content: args.dataSource[2].content,
        },
      ];

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
        goToNextStep,
      };
    },
    template: `
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
      </div>`,
  }),
  parameters: {
    docs: {
      description: {
        story:
          '示範如何在步驟中使用不同類型的內容：HTML和Button組件，並且可以切換步驟。',
      },
      source: {
        code: `
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
</script>

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
        `,
        language: 'vue',
      },
    },
  },
};

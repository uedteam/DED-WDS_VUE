import Tabs from '@/ui/element/Tabs/Tabs.vue';
import Button from '../Button/Button.vue';
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
        content: ${contentStr},
    }`;
    })
    .join(',\n    ')}`;
}

export default {
  title: 'Component/Tabs',
  component: Tabs,
  tags: ['Tabs'],
  argTypes: {
    themeColor: {
      description: '主題顏色',
      control: { type: 'select' },
      options: [
        'primary',
        'secondary',
        'neutral',
        'info',
        'success',
        'warning',
        'error',
      ],
      table: {
        type: {
          summary:
            'primary | secondary | neutral | info | success | warning | error',
        },
      },
    },
    dataSource: {
      description: '資料來源',
      control: { type: 'object' },
      table: {
        type: {
          summary: '{ title: string; content: string | VNode | Component; }[]',
        },
      },
    },
    activeIndex: {
      description: '活動頁籤索引',
      control: {
        type: 'number',
        min: 0,
        max: 2,
        step: 1,
      },
    },
    type: {
      description: '頁籤樣式',
      control: { type: 'select' },
      options: ['basic', 'outline', 'button'],
      table: {
        type: {
          summary: 'basic | outline | button ',
        },
      },
    },
    prefix: {
      description: '前綴元素',
      control: {
        type: 'select',
        labels: {
          '': 'none',
          SvgArrowDown: 'SvgArrowDown',
        },
      },
      options: ['', 'SvgArrowDown'],
    },
    isDisabled: {
      description: '是否禁用',
      control: { type: 'boolean' },
    },
    className: {
      description: '客製化樣式',
      control: { type: 'text' },
    },
  },
  parameters: {
    // 自動文件
    docs: {
      title: 'Tabs',
      description: {
        component: '頁籤組件的呈現及說明。',
      },
    },
  },
};

// ==== 預設項目 ====//
export const DefaultTabs = {
  name: '預設項目',
  args: {
    themeColor: 'primary',
    dataSource: [
      {
        title: 'Tab 1',
        content: 'Content 1',
      },
      {
        title: 'Tab 2',
        content: 'Content 2',
      },
      {
        title: 'Tab 3',
        content: 'Content 3',
      },
    ],
    activeIndex: 0,
    type: 'basic',
    prefix: 'SvgArrowDown',
    isDisabled: false,
    className: '',
  },
  render: (args) => ({
    components: { Tabs },
    setup() {
      return {
        args,
      };
    },
    template: `
      <Tabs
        :themeColor="args.themeColor"
        :dataSource="args.dataSource"
        :activeIndex="args.activeIndex"
        :type="args.type"
        :prefix="args.prefix"
        :isDisabled="args.isDisabled"
        :className="args.className"
      ></Tabs>`,
  }),
  // 控制 controls 中能控制的參數
  parameters: {
    controls: {
      // include: ['themeColor', 'label', 'value', 'name' ],
    },
    docs: {
      source: {
        transform: (src, storyContext) => {
          const { args } = storyContext;
          const dataSourceString = formatDataSource(args.dataSource);
          return [
            `<script setup>`,
            `import { Tabs } from "@ded-wds-vue/ui";`,
            `const dataSource = [`,
            `${dataSourceString}`,
            `];`,
            `</script>`,
            '',
            '<template>',
            '  <Tabs',
            `    ${args.themeColor ? `themeColor="${args.themeColor}"` : ''}`,
            `    :dataSource="dataSource"`,
            `    ${args.activeIndex !== undefined ? `:activeIndex="${args.activeIndex}"` : ''}`,
            `    ${args.type ? `type="${args.type}"` : ''}`,
            `    ${args.prefix ? `prefix="${args.prefix}"` : ''}`,
            `    ${args.isDisabled !== undefined ? `:isDisabled="${args.isDisabled}"` : ''}`,
            `    ${args.className ? `className="${args.className}"` : ''}`,
            '  ></Tabs>',
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

// ==== 頁籤類型 ====//
export const TabsTypesStory = {
  name: '頁籤類型',
  args: {
    themeColor: 'primary',
    dataSource: [
      {
        title: 'Tab 1',
        content: 'Content 1',
      },
      {
        title: 'Tab 2',
        content: 'Content 2',
      },
      {
        title: 'Tab 3',
        content: 'Content 3',
      },
    ],
    activeIndex: 0,
    // type: "default",
    prefix: 'SvgArrowDown',
    isDisabled: false,
    className: '',
  },
  render: (args) => ({
    components: { Tabs },
    setup() {
      return {
        args,
      };
    },
    template: `
      <div style="display:flex; flex-direction: column; gap:24px">
        <Tabs
          :themeColor="args.themeColor"
          :dataSource="args.dataSource"
          :activeIndex="args.activeIndex"
          type="basic"
          :prefix="args.prefix"
          :isDisabled="args.isDisabled"
          :className="args.className"
        ></Tabs>
        <Tabs
          :themeColor="args.themeColor"
          :dataSource="args.dataSource"
          :activeIndex="args.activeIndex"
          type="outline"
          :prefix="args.prefix"
          :isDisabled="args.isDisabled"
          :className="args.className"
        ></Tabs>
        <Tabs
          :themeColor="args.themeColor"
          :dataSource="args.dataSource"
          :activeIndex="args.activeIndex"
          type="button"
          :prefix="args.prefix"
          :isDisabled="args.isDisabled"
          :className="args.className"
        ></Tabs>
      </div>`,
  }),
  // 控制 controls 中能控制的參數
  parameters: {
    controls: {
      // include: ['themeColor', 'label', 'value', 'name' ],
      exclude: ['type'],
    },
    docs: {
      source: {
        transform: (src, storyContext) => {
          const { args } = storyContext;
          const dataSourceString = formatDataSource(args.dataSource);
          return [
            `<script setup>`,
            `import { Tabs } from "@ded-wds-vue/ui";`,
            `const dataSource = [`,
            `${dataSourceString}`,
            `];`,
            `</script>`,
            '',
            '<template>',
            '  <Tabs',
            `    ${args.themeColor ? `themeColor="${args.themeColor}"` : ''}`,
            `    :dataSource="dataSource"`,
            `    ${args.activeIndex !== undefined ? `:activeIndex="${args.activeIndex}"` : ''}`,
            `    type="basic"`,
            `    ${args.prefix ? `prefix="${args.prefix}"` : ''}`,
            `    ${args.isDisabled !== undefined ? `:isDisabled="${args.isDisabled}"` : ''}`,
            `    ${args.className ? `className="${args.className}"` : ''}`,
            '  ></Tabs>',
            '  <Tabs',
            `    ${args.themeColor ? `themeColor="${args.themeColor}"` : ''}`,
            `    :dataSource="dataSource"`,
            `    ${args.activeIndex !== undefined ? `:activeIndex="${args.activeIndex}"` : ''}`,
            `    type="outline"`,
            `    ${args.prefix ? `prefix="${args.prefix}"` : ''}`,
            `    ${args.isDisabled !== undefined ? `:isDisabled="${args.isDisabled}"` : ''}`,
            `    ${args.className ? `className="${args.className}"` : ''}`,
            '  ></Tabs>',
            '  <Tabs',
            `    ${args.themeColor ? `themeColor="${args.themeColor}"` : ''}`,
            `    :dataSource="dataSource"`,
            `    ${args.activeIndex !== undefined ? `:activeIndex="${args.activeIndex}"` : ''}`,
            `    type="button"`,
            `    ${args.prefix ? `prefix="${args.prefix}"` : ''}`,
            `    ${args.isDisabled !== undefined ? `:isDisabled="${args.isDisabled}"` : ''}`,
            `    ${args.className ? `className="${args.className}"` : ''}`,
            '  ></Tabs>',
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

// ==== 主題色彩 ====//
export const TabsColorStory = {
  name: '主題色彩',
  args: {
    // themeColor: "primary",
    dataSource: [
      {
        title: 'Tab 1',
        content: 'Content 1',
      },
      {
        title: 'Tab 2',
        content: 'Content 2',
      },
      {
        title: 'Tab 3',
        content: 'Content 3',
      },
    ],
    activeIndex: 0,
    type: 'button',
    prefix: 'SvgArrowDown',
    isDisabled: false,
    className: '',
  },
  render: (args) => ({
    components: { Tabs },
    setup() {
      return {
        args,
      };
    },
    template: `
      <div style="display:flex; flex-direction: column; gap:16px">
        <Tabs
          themeColor="primary"
          :dataSource="args.dataSource"
          :activeIndex="args.activeIndex"
          :type="args.type"
          :prefix="args.prefix"
          :isDisabled="args.isDisabled"
          :className="args.className"
        ></Tabs>
        <Tabs
          themeColor="secondary"
          :dataSource="args.dataSource"
          :activeIndex="args.activeIndex"
          :type="args.type"
          :prefix="args.prefix"
          :isDisabled="args.isDisabled"
          :className="args.className"
        ></Tabs>
        <Tabs
          themeColor="neutral"
          :dataSource="args.dataSource"
          :activeIndex="args.activeIndex"
          :type="args.type"
          :prefix="args.prefix"
          :isDisabled="args.isDisabled"
          :className="args.className"
        ></Tabs>
        <Tabs
          themeColor="info"
          :dataSource="args.dataSource"
          :activeIndex="args.activeIndex"
          :type="args.type"
          :prefix="args.prefix"
          :isDisabled="args.isDisabled"
          :className="args.className"
        ></Tabs>
        <Tabs
          themeColor="success"
          :dataSource="args.dataSource"
          :activeIndex="args.activeIndex"
          :type="args.type"
          :prefix="args.prefix"
          :isDisabled="args.isDisabled"
          :className="args.className"
        ></Tabs>
        <Tabs
          themeColor="warning"
          :dataSource="args.dataSource"
          :activeIndex="args.activeIndex"
          :type="args.type"
          :prefix="args.prefix"
          :isDisabled="args.isDisabled"
          :className="args.className"
        ></Tabs>
        <Tabs
          themeColor="error"
          :dataSource="args.dataSource"
          :activeIndex="args.activeIndex"
          :type="args.type"
          :prefix="args.prefix"
          :isDisabled="args.isDisabled"
          :className="args.className"
        ></Tabs>
      </div>`,
  }),
  // 控制 controls 中能控制的參數
  parameters: {
    controls: {
      // include: ['themeColor', 'label', 'value', 'name' ],
      exclude: ['themeColor'],
    },
    docs: {
      source: {
        transform: (src, storyContext) => {
          const { args } = storyContext;
          const dataSourceString = formatDataSource(args.dataSource);
          return [
            `<script setup>`,
            `import { Tabs } from "@ded-wds-vue/ui";`,
            `const dataSource = [`,
            `${dataSourceString}`,
            `];`,
            `</script>`,
            '',
            '<template>',
            '  <Tabs',
            `    themeColor="primary"`,
            `    :dataSource="dataSource"`,
            `    ${args.activeIndex !== undefined ? `:activeIndex="${args.activeIndex}"` : ''}`,
            `    ${args.type ? `type="${args.type}"` : ''}`,
            `    ${args.prefix ? `prefix="${args.prefix}"` : ''}`,
            `    ${args.isDisabled !== undefined ? `:isDisabled="${args.isDisabled}"` : ''}`,
            `    ${args.className ? `className="${args.className}"` : ''}`,
            '  ></Tabs>',
            '  <Tabs',
            `    themeColor="secondary"`,
            `    :dataSource="dataSource"`,
            `    ${args.activeIndex !== undefined ? `:activeIndex="${args.activeIndex}"` : ''}`,
            `    ${args.type ? `type="${args.type}"` : ''}`,
            `    ${args.prefix ? `prefix="${args.prefix}"` : ''}`,
            `    ${args.isDisabled !== undefined ? `:isDisabled="${args.isDisabled}"` : ''}`,
            `    ${args.className ? `className="${args.className}"` : ''}`,
            '  ></Tabs>',
            '  <Tabs',
            `    themeColor="neutral"`,
            `    :dataSource="dataSource"`,
            `    ${args.activeIndex !== undefined ? `:activeIndex="${args.activeIndex}"` : ''}`,
            `    ${args.type ? `type="${args.type}"` : ''}`,
            `    ${args.prefix ? `prefix="${args.prefix}"` : ''}`,
            `    ${args.isDisabled !== undefined ? `:isDisabled="${args.isDisabled}"` : ''}`,
            `    ${args.className ? `className="${args.className}"` : ''}`,
            '  ></Tabs>',
            '  <Tabs',
            `    themeColor="info"`,
            `    :dataSource="dataSource"`,
            `    ${args.activeIndex !== undefined ? `:activeIndex="${args.activeIndex}"` : ''}`,
            `    ${args.type ? `type="${args.type}"` : ''}`,
            `    ${args.prefix ? `prefix="${args.prefix}"` : ''}`,
            `    ${args.isDisabled !== undefined ? `:isDisabled="${args.isDisabled}"` : ''}`,
            `    ${args.className ? `className="${args.className}"` : ''}`,
            '  ></Tabs>',
            '  <Tabs',
            `    themeColor="success"`,
            `    :dataSource="dataSource"`,
            `    ${args.activeIndex !== undefined ? `:activeIndex="${args.activeIndex}"` : ''}`,
            `    ${args.type ? `type="${args.type}"` : ''}`,
            `    ${args.prefix ? `prefix="${args.prefix}"` : ''}`,
            `    ${args.isDisabled !== undefined ? `:isDisabled="${args.isDisabled}"` : ''}`,
            `    ${args.className ? `className="${args.className}"` : ''}`,
            '  ></Tabs>',
            '  <Tabs',
            `    themeColor="warning"`,
            `    :dataSource="dataSource"`,
            `    ${args.activeIndex !== undefined ? `:activeIndex="${args.activeIndex}"` : ''}`,
            `    ${args.type ? `type="${args.type}"` : ''}`,
            `    ${args.prefix ? `prefix="${args.prefix}"` : ''}`,
            `    ${args.isDisabled !== undefined ? `:isDisabled="${args.isDisabled}"` : ''}`,
            `    ${args.className ? `className="${args.className}"` : ''}`,
            '  ></Tabs>',
            '  <Tabs',
            `    themeColor="error"`,
            `    :dataSource="dataSource"`,
            `    ${args.activeIndex !== undefined ? `:activeIndex="${args.activeIndex}"` : ''}`,
            `    ${args.type ? `type="${args.type}"` : ''}`,
            `    ${args.prefix ? `prefix="${args.prefix}"` : ''}`,
            `    ${args.isDisabled !== undefined ? `:isDisabled="${args.isDisabled}"` : ''}`,
            `    ${args.className ? `className="${args.className}"` : ''}`,
            '  ></Tabs>',
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

// ==== 內容類型示範 ====//
export const ContentTypesStory = {
  name: '不同內容類型',
  args: {
    themeColor: 'primary',
    dataSource: [
      {
        title: '無內容',
        content: '',
      },
      {
        title: '純文字內容',
        content: '這是一個純文字內容的頁籤',
      },
      {
        title: 'HTML內容',
        content: '<div class="ded-button-custom">帶有樣式的HTML內容</div>',
      },
      {
        title: 'Button組件',
        content: '這裡會顯示Button組件',
      },
    ],
    activeIndex: 0,
    type: 'basic',
    prefix: '',
    isDisabled: false,
    className: '',
  },
  render: (args) => ({
    components: { Tabs, Button },
    setup() {
      // 準備帶有動態組件的資料來源
      const enhancedDataSource = [
        args.dataSource[0],
        args.dataSource[1],
        {
          title: args.dataSource[2].title,
          // 使用 v-html 指令來渲染 HTML
          content: h('div', { innerHTML: args.dataSource[2].content }),
        },
        {
          title: args.dataSource[3].title,
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
      ];

      return {
        args,
        enhancedDataSource,
      };
    },
    template: `
      <Tabs
        :themeColor="args.themeColor"
        :dataSource="enhancedDataSource"
        :activeIndex="args.activeIndex"
        :type="args.type"
        :prefix="args.prefix"
        :isDisabled="args.isDisabled"
        :className="args.className"
      ></Tabs>`,
  }),
  parameters: {
    docs: {
      description: {
        story: '示範如何在頁籤中使用不同類型的內容：純文字、HTML和Button組件。',
      },
      source: {
        code: `
<script setup>
import { Tabs, Button } from "@ded-wds-vue/ui";
import { h } from 'vue';

// 帶有不同類型內容的資料來源
const dataSource = [
  {
    title: '純文字內容',
    content: '這是一個純文字內容的頁籤',
  },
  {
    title: 'HTML內容',
    content: h('div', { innerHTML: '<div class="ded-button-custom">帶有樣式的HTML內容</div>' }),
  },
  {
    title: 'Button組件',
    content: h(Button, {
      themeColor: 'success',
      variant: 'filled',
      size: 'medium',
      onClick: () => alert('Button clicked')
    }, 'Click me'),
  },
];
</script>

<template>
  <Tabs
    themeColor="primary"
    :dataSource="dataSource"
    :activeIndex="0"
    type="basic"
  ></Tabs>
</template>
        `,
        language: 'vue',
      },
    },
  },
};

// ==== 事件示範 ====//
export const TabsEventStory = {
  name: '事件處理',
  args: {
    themeColor: 'primary',
    dataSource: [
      {
        title: 'Tab 1',
        content: 'Content 1',
      },
      {
        title: 'Tab 2',
        content: 'Content 2',
      },
      {
        title: 'Tab 3',
        content: 'Content 3',
      },
    ],
    activeIndex: 0,
    type: 'basic',
    prefix: '',
    isDisabled: false,
    className: '',
  },
  render: (args) => ({
    components: { Tabs },
    setup() {
      const currentIndex = ref(args.activeIndex);

      function handleTabChange(index) {
        console.log('Tab changed to index:', index);
        currentIndex.value = index;
      }

      return {
        args,
        currentIndex,
        handleTabChange,
      };
    },
    template: `
      <div>
        <p style="font-size: 16px; margin-bottom: 10px;">當前選中的頁籤索引: <strong>{{ currentIndex }}</strong></p>
        <Tabs
          :themeColor="args.themeColor"
          :dataSource="args.dataSource"
          :activeIndex="currentIndex"
          @update:activeIndex="handleTabChange"
          :type="args.type"
          :prefix="args.prefix"
          :isDisabled="args.isDisabled"
          :className="args.className"
        ></Tabs>
      </div>`,
  }),
  parameters: {
    docs: {
      description: {
        story: '示範如何處理頁籤切換事件並獲取當前索引。',
      },
      source: {
        code: `
<script setup>
import { ref } from 'vue';
import { Tabs } from "@ded-wds-vue/ui";

const dataSource = [
  {
    title: 'Tab 1',
    content: 'Content 1',
  },
  {
    title: 'Tab 2',
    content: 'Content 2',
  },
  {
    title: 'Tab 3',
    content: 'Content 3',
  },
];

const currentIndex = ref(0);

function handleTabChange(index) {
  console.log('Tab changed to index:', index);
  currentIndex.value = index;
}
</script>

<template>
  <p>當前選中的頁籤索引: {{ currentIndex }}</p>
  <Tabs
    themeColor="primary"
    :dataSource="dataSource"
    :activeIndex="currentIndex"
    @update:activeIndex="handleTabChange"
    type="basic"
  ></Tabs>
</template>
        `,
        language: 'vue',
      },
    },
  },
};

// ==== 使用 v-model 綁定索引 ====//
export const TabsVModelStory = {
  name: 'v-model 綁定',
  args: {
    themeColor: 'primary',
    dataSource: [
      {
        title: 'Tab 1',
        content: 'Content 1',
      },
      {
        title: 'Tab 2',
        content: 'Content 2',
      },
      {
        title: 'Tab 3',
        content: 'Content 3',
      },
    ],
    type: 'basic',
    prefix: '',
    isDisabled: false,
    className: '',
  },
  render: (args) => ({
    components: { Tabs },
    setup() {
      const selectedIndex = ref(0);

      return {
        args,
        selectedIndex,
      };
    },
    template: `
      <div>
        <div style="margin-bottom: 15px; display: flex; gap: 10px; align-items: center;">
          <p style="font-size: 16px;">當前選中的索引: <strong>{{ selectedIndex }}</strong></p>
          <button 
            v-for="i in 3" 
            :key="i" 
            @click="selectedIndex = i-1"
            style="padding: 5px 10px; margin-right: 5px; cursor: pointer;"
            :style="selectedIndex === i-1 ? 'background-color: #4CAF50; color: white;' : ''"
          >
            切換到 {{ i-1 }}
          </button>
        </div>
        
        <Tabs
          :themeColor="args.themeColor"
          :dataSource="args.dataSource"
          v-model:activeIndex="selectedIndex"
          :type="args.type"
          :prefix="args.prefix"
          :isDisabled="args.isDisabled"
          :className="args.className"
        ></Tabs>
      </div>`,
  }),
  parameters: {
    docs: {
      description: {
        story:
          '示範如何使用 v-model 雙向綁定頁籤索引，並透過外部控制來切換頁籤。',
      },
      source: {
        code: `
<script setup>
import { ref } from 'vue';
import { Tabs } from "@ded-wds-vue/ui";

const dataSource = [
  {
    title: 'Tab 1',
    content: 'Content 1',
  },
  {
    title: 'Tab 2',
    content: 'Content 2',
  },
  {
    title: 'Tab 3',
    content: 'Content 3',
  },
];

const selectedIndex = ref(0);
</script>

<template>
  <div>
    <div style="margin-bottom: 15px;">
      <p>當前選中的索引: {{ selectedIndex }}</p>
      <button v-for="i in 3" :key="i" @click="selectedIndex = i-1">
        切換到 {{ i-1 }}
      </button>
    </div>
    
    <Tabs
      themeColor="primary"
      :dataSource="dataSource"
      v-model:activeIndex="selectedIndex"
      type="basic"
    ></Tabs>
  </div>
</template>
        `,
        language: 'vue',
      },
    },
  },
};

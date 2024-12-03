/** @type { import('@storybook/vue3').Preview } */
import '@/style/globals.scss';
// import { Preview } from '@storybook/vue3';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

// 創建 Toast 容器
const toastContainer = document.createElement('div');
toastContainer.id = 'toast';
toastContainer.className = 'ded-toast-container';
document.body.appendChild(toastContainer);

// 創建 Dialog 容器
const dialogContainer = document.createElement('div');
dialogContainer.id = 'dialog';
document.body.appendChild(dialogContainer);

const preview = {
  parameters: {
    viewport: {
      viewports: INITIAL_VIEWPORTS, // 開啟更多 viewport 選擇
    },
    controls: {
      expanded: true,
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      values: [
        { name: 'light', value: '#fff' },
        { name: 'dark', value: '#333' },
        { name: 'gray', value: '#f0f0f0' },
      ],
    },
    options: {
      storySort: {
        method: 'alphabetical', // 可選擇 'alphabetical', 'configure', 或其他自定義方法
        order: ['Introduction', 'Components'], // 可根據需求調整順序
      },
    },
    html: {
      prettier: {
        tabWidth: 4,
        useTabs: true,
      },
    },
  },

  initialGlobals: {
    styles: {
      body: {
        margin: 0,
        padding: 0,
        fontFamily: 'Arial, sans-serif',
      },
    },
  },

  tags: ['autodocs'],
};

export default preview;

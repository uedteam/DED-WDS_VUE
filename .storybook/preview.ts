import '@/style/globals.scss';
import { Preview } from '@storybook/vue3';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

/* snipped for brevity */
// 創建 Toast 容器
const toastContainer = document.createElement('div');
toastContainer.id = 'toast';
toastContainer.className = 'toast-container';
document.body.appendChild(toastContainer);

// 創建 Dialog 容器
const dialogContainer = document.createElement('div');
dialogContainer.id = 'dialog';
document.body.appendChild(dialogContainer);

const preview: Preview = {
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
    // docs: {
    //   toc: {
    //     contentsSelector: '.sbdocs-content',
    //     headingSelector: 'h2, h3',
    //     ignoreSelector: '#primary',
    //     disable: false,
    //     unsafeTocbotOptions: {
    //       orderedList: false,
    //     },
    //   }, // 👈 Enables the table of contents
    // },
    options: {
      storySort: {
        method: 'alphabetical', // 可選擇 'alphabetical', 'configure', 或其他自定義方法
        order: ['Components', 'Intro'], // 可根據需求調整順序
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

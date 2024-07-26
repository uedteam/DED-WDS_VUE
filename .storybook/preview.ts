import '../libs/src/style/globals.scss';

import { Preview } from '@storybook/vue3';

/* snipped for brevity */

const preview: Preview = {
  parameters: {
    options: {
      storySort: {
        method: '',
        order: ['Components', 'Intro'],
        locales: '',
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

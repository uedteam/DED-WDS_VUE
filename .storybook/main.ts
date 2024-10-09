import type { StorybookConfig } from '@storybook/vue3-vite';

const config: StorybookConfig = {
  stories: [
    '../src/components/**/*.mdx',
    '../libs/src/**/*.@(mdx|stories.@(js|jsx|ts|tsx))',
  ],

  addons: [
    '@storybook/addon-controls',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-themes',
    'storybook-addon-deep-controls',
    '@chromatic-com/storybook',
  ],

  framework: {
    name: '@storybook/vue3-vite',
    options: {
      builder: {
        viteConfigPath: 'vite.config.ts',
      },
    },
  },

  docs: {},
};

export default config;

// To customize your Vite configuration you can use the viteFinal field.
// Check https://storybook.js.org/docs/react/builders/vite#configuration
// and https://nx.dev/recipes/storybook/custom-builder-configs

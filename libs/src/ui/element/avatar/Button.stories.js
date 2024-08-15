import Button from './Button.vue';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
export default {
  title: 'Example/Button',
  component: Button,
  // tags: ["autodocs"],
  argTypes: {
    type: {
      description: 'Overwritten description',
      control: { type: 'select' },
      options: ['filled', 'outline', 'text', 'icon'],
    },
    size: {
      control: { type: 'select' },
      options: ['xs', 'sm', 'base', 'lg', 'xl'],
    },
    borderRound: {
      control: { type: 'select' },
      options: ['none', 'base', 'md', 'lg', 'pill'],
    },
    btnWidth: {
      control: { type: 'radio' },
      options: ['fit', 'full'],
    },
    icon: {
      control: { type: 'text' },
    },
    prependIcon: {
      control: { type: 'select' },
      options: ['home', 'folder'],
      description: 'Overwritten description',
    },
    appendIcon: {
      control: { type: 'text' },
    },

    //以下參數不刪
    content: {
      control: { type: 'text' },
      description: '為按鈕添加文字',
    },
    variant: {
      description: '按鈕樣式',
      control: { type: 'select' },
      options: ['contained', 'outlined', 'text'],
    },
    themeColor: {
      control: { type: 'select' },
      options: [
        'primary',
        'secondary',
        'tertiary',
        'success',
        'warning',
        'error',
        'info',
      ],
    },
  },
  parameters: {
    // docs: {
    //   controls: { exclude: ['style'] },
    // },
    docs: {
      title: '按鈕',
      description: {
        component: '按鈕組件的呈現及說明。',
      },
    },
  },

  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  // args: { onClick: fn() },
};

export const ButtonDefault = {
  render: (args) => ({
    components: { Button },
    setup() {
      return {
        args,
      };
    },
    template: '<Button v-bind="args">{{args.content}}</Button>',
  }),
  args: {
    content: 'Button Text',
    variant: 'contained',
    prefix: 'home',
  },
  // 控制各個stroys能夠顯示controls的量
  parameters: {
    controls: {
      include: ['variant', 'content', 'themeColor'],
    },
  },
};

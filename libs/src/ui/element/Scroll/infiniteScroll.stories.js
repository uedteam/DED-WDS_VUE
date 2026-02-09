import InfiniteScroll from './InfiniteScroll.vue';

export default {
  title: 'Element/InfiniteScroll',
  component: InfiniteScroll,
  argTypes: {
    height: { control: { type: 'number', min: 100, max: 1000, step: 50 } },
    isLoading: { control: 'boolean' },
    onScrollBottom: { action: 'scrolled to bottom' },
  },
};

const Template = (args) => ({
  components: { InfiniteScroll },
  setup() {
    return { args };
  },
  template: `
    <InfiniteScroll v-bind="args">
      <div v-for="i in 30" :key="i" style="padding: 16px; border-bottom: 1px solid #eee;">
        Item #{{ i }}
      </div>
    </InfiniteScroll>
  `,
});

export const Default = Template.bind({});
Default.args = {
  height: 400,
  isLoading: false,
};

export const Loading = Template.bind({});
Loading.args = {
  height: 400,
  isLoading: true,
};

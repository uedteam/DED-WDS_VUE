import Link from '@/ui/element/Link/Link.vue';

export default {
  title: 'Component/Link',
  component: Link,
  tags: ['autodocs'],
  argTypes: {
    href: {
      description: '連結的 URL',
      control: { type: 'text' },
    },
    target: {
      description: '連結的開啟方式',
      control: { type: 'select' },
      options: ['_self', '_blank', '_parent', '_top'],
    },
    isDisabled: {
      description: '是否禁用',
      control: { type: 'boolean' },
    },
    size: {
      description: '連結的大小',
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
    },
    className: {
      description: '客製化樣式',
      control: { type: 'text' },
    },
    prefix: {
      description: '前置圖標',
      control: {
        type: 'select',
      },
      options: ['SvgHome', 'SvgSearch', 'SvgUser'],
    },
  },
  parameters: {
    docs: {
      title: 'Link',
      description: {
        component: 'Link 組件的呈現及說明。',
      },
    },
  },
};

// ==== 預設項目 ====//
export const LinkDefault = {
  name: '預設項目',
  args: {
    href: 'https://www.example.com',
    target: '_blank',
    isDisabled: false,
    size: 'medium',
    className: '',
    prefix: 'SvgHome',
  },
  render: (args) => ({
    components: { Link },
    setup() {
      return { args };
    },
    template: `
      <Link
        :href="args.href"
        :target="args.target"
        :isDisabled="args.isDisabled"
        :size="args.size"
        :className="args.className"
        :prefix="args.prefix"
      >
        <span>點擊這裡</span>
      </Link>
    `,
  }),
};

// ==== 小尺寸連結 ====//
export const LinkSmall = {
  name: '小尺寸連結',
  args: {
    href: 'https://www.example.com',
    target: '_self',
    isDisabled: false,
    size: 'small',
    className: '',
    prefix: 'SvgSearch',
  },
  render: (args) => ({
    components: { Link },
    setup() {
      return { args };
    },
    template: `
      <Link
        :href="args.href"
        :target="args.target"
        :isDisabled="args.isDisabled"
        :size="args.size"
        :className="args.className"
        :prefix="args.prefix"
      >
        小尺寸連結
      </Link>
    `,
  }),
};

// ==== 禁用連結 ====//
export const LinkDisabled = {
  name: '禁用連結',
  args: {
    href: 'https://www.example.com',
    target: '_self',
    isDisabled: true,
    size: 'large',
    className: '',
    prefix: 'SvgUser',
  },
  render: (args) => ({
    components: { Link },
    setup() {
      return { args };
    },
    template: `
      <Link
        :href="args.href"
        :target="args.target"
        :isDisabled="args.isDisabled"
        :size="args.size"
        :className="args.className"
        :prefix="args.prefix"
      >
        禁用連結
      </Link>
    `,
  }),
};

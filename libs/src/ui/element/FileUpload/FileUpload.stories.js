import FileUpload from '@/ui/element/FileUpload/FileUpload.vue';
import Button from '@/ui/element/Button/Button.vue';
import Title from '@/ui/element/Title/Title.vue';
import { h, handleError } from 'vue';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Component/FileUpload',
  component: FileUpload,
  tags: ['autodocs'],
  argTypes: {
    uploadUrl: {
      description: '上傳的 URL',
      control: { type: 'text' },
      defaultValue: '/upload',
    },
    allowedFileTypes: {
      description: '允許的檔案類型',
      control: { type: 'text' },
      defaultValue: 'image/*',
    },
    maxFileSize: {
      description: '檔案大小限制 (bytes)',
      control: { type: 'number' },
      defaultValue: 1048576,
    },
    maxTotalFileSize: {
      description: '總檔案大小限制 (bytes)',
      control: { type: 'number' },
      defaultValue: 10485760,
    },
    className: {
      description: '客製化樣式',
      control: { type: 'text' },
    },
    onUploadSuccess: {
      description: '上傳成功的回調函數',
      table: {
        category: 'EVENTS',
        type: { summary: 'emit' },
        defaultValue: { summary: () => ({}) },
      },
    },
    onUploadError: {
      description: '上傳失敗的回調函數',
      table: {
        category: 'EVENTS',
        type: { summary: 'emit' },
        defaultValue: { summary: () => ({}) },
      },
    },
    onFileAdded: {
      description: '檔案新增的回調函數',
      table: {
        category: 'EVENTS',
        type: { summary: 'emit' },
        defaultValue: { summary: () => ({}) },
      },
    },
    onFileRemoved: {
      description: '檔案移除的回調函數',
      table: {
        category: 'EVENTS',
        type: { summary: 'emit' },
        defaultValue: { summary: () => ({}) },
      },
    },
  },
  parameters: {
    docs: {
      title: 'FileUpload',
      description: {
        component:
          '檔案上傳元件，支援多種檔案類型與大小限制，並提供上傳成功、失敗等事件回調。',
      },
      source: {
        transform: (src, storyContext) => {
          const { args } = storyContext;
          return [
            `<script setup>`,
            `import { h } from "vue";`,
            `import { FileUpload, Title, Button } from "@ded-wds-vue/ui";`,
            `</script>`,
            '',
            '<template>',
            '  <FileUpload',
            `    uploadUrl="${args.uploadUrl}"`,
            `    allowedFileTypes="${args.allowedFileTypes}"`,
            `    maxFileSize="${args.maxFileSize}"`,
            `    maxTotalFileSize="${args.maxTotalFileSize}"`,
            `    ${args.className ? `className="${args.className}"` : ''}`,
            '    @onUploadSuccess="handleUploadSuccess"',
            '    @onUploadError="handleUploadError"',
            '    @onFileAdded="handleFileAdded"',
            '    @onFileRemoved="handleFileRemoved"',
            '  ></FileUpload>',
            '</template>',
          ]
            .join('\n')
            .trim();
        },
      },
    },
    controls: {
      expanded: true, // 展開控制面板
    },
  },
};

export const FileUploadDefault = {
  name: '預設項目',
  args: {
    uploadUrl: '/upload',
    allowedFileTypes: 'image/*',
    maxFileSize: 1048576,
    maxTotalFileSize: 10485760,
    className: '',
    onUploadSuccess: () => {
      action('onUploadSuccess');
    },
    onUploadError: () => {
      action('onUploadError');
    },
    onFileAdded: () => {
      action('onFileAdded');
    },
    onFileRemoved: () => {
      action('onFileRemoved');
    },
  },
  render: (args) => ({
    components: { FileUpload, Title, Button, h },
    setup() {
      return {
        args,
        handleUploadSuccess: (response) => {
          action('onUploadSuccess')(response);
        },
        handleUploadError: ({ error }) => {
          action('onUploadError')(error);
        },
        handleFileAdded: (file) => {
          action('onFileAdded')(file);
        },
        handleFileRemoved: (file) => {
          action('onFileRemoved')(file);
        },
        h,
      };
    },
    template: `
      <FileUpload
        :uploadUrl="args.uploadUrl"
        :maxFileSize="args.maxFileSize"
        :maxTotalFileSize="args.maxTotalFileSize"
        :className="args.className"
        @onUploadSuccess="handleUploadSuccess"
        @onUploadError="handleUploadError"
        @onFileAdded="handleFileAdded"
        @onFileRemoved="handleFileRemoved"
      ></FileUpload>
        `,
  }),
};

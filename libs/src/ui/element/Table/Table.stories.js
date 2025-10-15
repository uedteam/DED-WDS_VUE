import Button from '@/ui/element/Button/Button.vue';
import Table from '@/ui/element/Table/Table.vue';

const dataSource = [
  {
    head: 'Head-1',
    column1: 'td1',
    column2: 'td2',
    column3: 'td3',
    column4: 'td4',
    column5: 'td5',
  },
  {
    head: 'Head-2',
    column1: 'td1',
    column2: 'td2',
    column3: 'td3',
    column4: 'td4',
    column5: 'td5',
  },
  {
    head: 'Head-3',
    column1: 'td1',
    column2: 'td2',
    column3: 'td3',
    column4: 'td4',
    column5: 'td5',
  },
  {
    head: 'Head-4',
    column1: 'td1',
    column2: 'td2',
    column3: 'td3',
    column4: 'td4',
    column5: 'td5',
  },
];
const columns = [
  { key: 'head', title: 'TH', width: '100px' },
  { key: 'column1', title: 'TH', width: '180px' },
  { key: 'column2', title: 'TH', width: '180px' },
  { key: 'column3', title: 'TH', width: '180px' },
  { key: 'column4', title: 'TH', width: '120px' },
  { key: 'column5', title: 'TH', width: '120px', align: 'center' },
];
const customColumns = [
  { key: 'head', title: 'TH', width: '10vw' },
  { key: 'column1', title: 'TH', width: '20vw' },
  { key: 'column2', title: 'TH', width: '20vw' },
  { key: 'column3', title: 'TH', width: '20vw' },
  { key: 'column4', title: 'TH', width: '15vw' },
  { key: 'column5', title: 'TH', width: '15vw', align: 'center' },
];
const flexColumns = [
  { key: 'head', title: '名稱', width: '120px' }, // 固定寬度
  { key: 'column1', title: '描述', flex: 2 }, // 彈性寬度，佔剩餘空間的 2/4
  { key: 'column2', title: '狀態', width: '100px' }, // 固定寬度
  { key: 'column3', title: '類型', flex: 1 }, // 彈性寬度，佔剩餘空間的 1/4
  { key: 'column4', title: '日期', width: '150px' }, // 固定寬度
  { key: 'column5', title: '操作', flex: 1, align: 'center' }, // 彈性寬度，佔剩餘空間的 1/4
];

export default {
  components: { Button },
  title: 'Component/Table',
  component: Table,
  tags: ['autodocs'],
  argTypes: {
    columns: {
      description: '欄位配置，支援固定寬度(width)和彈性寬度(flex)',
      control: { type: 'object' },
      table: {
        type: {
          summary:
            '{ key: string; title: string; width?: string; flex?: number; align?: string }[]',
        },
        defaultValue: {
          detail:
            "width: 固定寬度（如 '120px', '10%'）\nflex: 彈性寬度係數（如 1, 2, 3）\n若都未設定則預設為 flex: 1",
        },
      },
    },
    dataSource: {
      description: '資料來源',
      control: { type: 'object' },
      table: {
        type: {
          summary:
            '{ head: string; key1: string; key2: string; ..., keyX: string }[]',
        },
      },
    },
    showCheckbox: {
      description: '是否顯示 checkbox',
      control: { type: 'boolean' },
    },
    showVerticalBorders: {
      description: '是否顯示垂直邊框',
      control: { type: 'boolean' },
    },
    isSprite: {
      description: '是否顯示條紋背景',
      control: { type: 'boolean' },
    },
    className: {
      description: '客製化樣式',
      control: { type: 'text' },
    },
    'columns.[key]': {
      description:
        'columns 中 `key` 的值可直接作為 slot 名稱，例如 `<template #[key]>`',
      control: false,
      table: {
        type: {
          summary: 'Vue Component | HTML',
        },
        category: 'SLOTS',
      },
    },
  },
  parameters: {
    docs: {
      title: 'Table',
      description: {
        component: 'Table 組件的呈現及說明。',
      },
    },
    actions: { disabled: true },
  },
};

// ==== 預設項目 ====//
export const TableDefault = {
  name: '預設項目',
  args: {
    dataSource,
    columns,
    showCheckbox: false,
    showVerticalBorders: false,
    isSprite: true,
    className: '',
  },
  render: (args) => ({
    components: { Table },
    setup() {
      return { args };
    },
    template: `
      <Table
        :dataSource="args.dataSource"
        :columns="args.columns"
        :showCheckbox="args.showCheckbox"
        :showVerticalBorders="args.showVerticalBorders"
        :isSprite="args.isSprite"
        :className="args.className"
      />
    `,
  }),
  parameters: {
    controls: {
      exclude: ['col.key'],
    },
    docs: {
      source: {
        transform: (src, storyContext) => {
          const { args } = storyContext;
          return [
            `<script setup>`,
            `import { Table } from "@ded-wds-vue/ui";`,
            `const dataSource = [`,
            `  { head: "Head-1", column1: "td1", column2: "td2", column3: "td3", column4: "td4", column5: "td5" },`,
            `  { head: "Head-2", column1: "td1", column2: "td2", column3: "td3", column4: "td4", column5: "td5" },`,
            `  { head: "Head-3", column1: "td1", column2: "td2", column3: "td3", column4: "td4", column5: "td5" },`,
            `  { head: "Head-4", column1: "td1", column2: "td2", column3: "td3", column4: "td4", column5: "td5" },`,
            `]`,
            `const columns = [`,
            `  { key: "head", title: "TH", width: "100px" },`,
            `  { key: "column1", title: "TH", width: "180px" },`,
            `  { key: "column2", title: "TH", width: "180px" },`,
            `  { key: "column3", title: "TH", width: "180px" },`,
            `  { key: "column4", title: "TH", width: "120px" },`,
            `  { key: "column5", title: "TH", width: "120px", align: "center" },`,
            `]`,
            `</script>`,
            '',
            '<template>',
            `  <Table`,
            `    :dataSource='dataSource'`,
            `    :columns='columns'`,
            `    ${
              args.showCheckbox !== undefined
                ? `:showCheckbox="${args.showCheckbox}"`
                : ''
            }`,
            `    ${
              args.showVerticalBorders !== undefined
                ? `:showVerticalBorders="${args.showVerticalBorders}"`
                : ''
            }`,
            `    ${
              args.isSprite !== undefined ? `:isSprite="${args.isSprite}"` : ''
            }`,
            `    ${args.className ? `className="${args.className}"` : ''}`,
            `  />`,
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

// ==== 框線表格 ====//
export const TableBorder = {
  name: '框線表格',
  args: {
    dataSource,
    columns,
    showCheckbox: false,
    showVerticalBorders: true,
    isSprite: false,
    className: '',
  },
  render: (args) => ({
    components: { Table },
    setup() {
      return { args };
    },
    template: `
      <Table
        :dataSource="args.dataSource"
        :columns="args.columns"
        :showCheckbox="args.showCheckbox"
        :showVerticalBorders="args.showVerticalBorders"
        :isSprite="args.isSprite"
        :className="args.className"
      />`,
  }),
  parameters: {
    docs: {
      source: {
        transform: (src, storyContext) => {
          const { args } = storyContext;
          return [
            `<script setup>`,
            `import { Table } from "@ded-wds-vue/ui";`,
            `const dataSource = [`,
            `  { head: "Head-1", column1: "td1", column2: "td2", column3: "td3", column4: "td4", column5: "td5" },`,
            `  { head: "Head-2", column1: "td1", column2: "td2", column3: "td3", column4: "td4", column5: "td5" },`,
            `  { head: "Head-3", column1: "td1", column2: "td2", column3: "td3", column4: "td4", column5: "td5" },`,
            `  { head: "Head-4", column1: "td1", column2: "td2", column3: "td3", column4: "td4", column5: "td5" },`,
            `]`,
            `const columns = [`,
            `  { key: "head", title: "TH", width: "100px" },`,
            `  { key: "column1", title: "TH", width: "180px" },`,
            `  { key: "column2", title: "TH", width: "180px" },`,
            `  { key: "column3", title: "TH", width: "180px" },`,
            `  { key: "column4", title: "TH", width: "120px" },`,
            `  { key: "column5", title: "TH", width: "120px", align: "center" },`,
            `]`,
            `</script>`,
            '',
            '<template>',
            `  <Table`,
            `    :dataSource='dataSource'`,
            `    :columns='columns'`,
            `    ${
              args.showCheckbox !== undefined
                ? `:showCheckbox="${args.showCheckbox}"`
                : ''
            }`,
            `    ${
              args.showVerticalBorders !== undefined
                ? `:showVerticalBorders="${args.showVerticalBorders}"`
                : ''
            }`,
            `    ${
              args.isSprite !== undefined ? `:isSprite="${args.isSprite}"` : ''
            }`,
            `    ${args.className ? `className="${args.className}"` : ''}`,
            `  />`,
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

// ==== 客製化欄位 ====//
export const TableSlot = {
  name: '客製化欄位',
  args: {
    dataSource,
    columns: customColumns,
    showCheckbox: false,
    showVerticalBorders: false,
    isSprite: false,
    className: '',
  },
  render: (args) => ({
    components: { Table, Button },
    setup() {
      const onClick = (val) => {
        window.alert(val);
      };
      return { args, onClick };
    },
    template: `
      <Table
        :columns="args.columns"
        :dataSource="args.dataSource"
        :showCheckbox="args.showCheckbox"
        :showVerticalBorders="args.showVerticalBorders"
        :isSprite="args.isSprite"
        :className="args.className"
      >
        <template #column5="{ item }">
          <Button
            themeColor="primary"
            variant="filled"
            size="small"
            width="fit"
            borderWidth="1px"
            radius="4px"
            @click="onClick(item.column5)"
          >
            View
          </Button>
        </template>
      </Table>`,
  }),
  parameters: {
    docs: {
      source: {
        transform: (src, storyContext) => {
          const { args } = storyContext;
          return [
            `<script setup>`,
            `import { Table, Button } from "@ded-wds-vue/ui";`,
            `const dataSource = [`,
            `  { head: "Head-1", column1: "td1", column2: "td2", column3: "td3", column4: "td4", column5: "td5" },`,
            `  { head: "Head-2", column1: "td1", column2: "td2", column3: "td3", column4: "td4", column5: "td5" },`,
            `  { head: "Head-3", column1: "td1", column2: "td2", column3: "td3", column4: "td4", column5: "td5" },`,
            `  { head: "Head-4", column1: "td1", column2: "td2", column3: "td3", column4: "td4", column5: "td5" },`,
            `]`,
            `const columns = [`,
            `  { key: "head", title: "TH", width: "10vw" },`,
            `  { key: "column1", title: "TH", width: "20vw" },`,
            `  { key: "column2", title: "TH", width: "20vw" },`,
            `  { key: "column3", title: "TH", width: "20vw" },`,
            `  { key: "column4", title: "TH", width: "15vw" },`,
            `  { key: "column5", title: "TH", width: "15vw", align: "center" },`,
            `]`,
            `const onClick = (val) => {`,
            `  window.alert(val.head + " " + val.column5);`,
            `};`,
            `</script>`,
            '',
            '<template>',
            `  <Table`,
            `    :dataSource='dataSource'`,
            `    :columns='columns'`,
            `    ${
              args.showCheckbox !== undefined
                ? `:showCheckbox="${args.showCheckbox}"`
                : ''
            }`,
            `    ${
              args.showVerticalBorders !== undefined
                ? `:showVerticalBorders="${args.showVerticalBorders}"`
                : ''
            }`,
            `    ${
              args.isSprite !== undefined ? `:isSprite="${args.isSprite}"` : ''
            }`,
            `    ${args.className ? `className="${args.className}"` : ''}`,
            `  >`,
            `    <template #column5="{item}">`,
            `      <Button`,
            `        themeColor="primary"`,
            `        variant="filled"`,
            `        size="small"`,
            `        width="fit"`,
            `        borderWidth="1px"`,
            `        radius="4px"`,
            `        @click="onClick(item)"`,
            `      >`,
            `        View`,
            `      </Button>`,
            `    </template>`,
            `  </Table>`,
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

// ==== 可勾選資料列 ====//
export const TableCheck = {
  name: '可勾選資料列',
  args: {
    dataSource,
    columns,
    showCheckbox: true,
    showVerticalBorders: true,
    isSprite: false,
    className: '',
  },
  render: (args) => ({
    components: { Table },
    setup() {
      return { args };
    },
    template: `
      <Table
        :columns="args.columns"
        :dataSource="args.dataSource"
        :showCheckbox="args.showCheckbox"
        :showVerticalBorders="args.showVerticalBorders"
        :isSprite="args.isSprite"
        :className="args.className"
      />`,
  }),
  parameters: {
    docs: {
      source: {
        transform: (src, storyContext) => {
          const { args } = storyContext;
          return [
            `<script setup>`,
            `import { Table } from "@ded-wds-vue/ui";`,
            `const dataSource = [`,
            `  { head: "Head-1", column1: "td1", column2: "td2", column3: "td3", column4: "td4", column5: "td5" },`,
            `  { head: "Head-2", column1: "td1", column2: "td2", column3: "td3", column4: "td4", column5: "td5" },`,
            `  { head: "Head-3", column1: "td1", column2: "td2", column3: "td3", column4: "td4", column5: "td5" },`,
            `  { head: "Head-4", column1: "td1", column2: "td2", column3: "td3", column4: "td4", column5: "td5" },`,
            `]`,
            `const columns = [`,
            `  { key: "head", title: "TH", width: "100px" },`,
            `  { key: "column1", title: "TH", width: "180px" },`,
            `  { key: "column2", title: "TH", width: "180px" },`,
            `  { key: "column3", title: "TH", width: "180px" },`,
            `  { key: "column4", title: "TH", width: "120px" },`,
            `  { key: "column5", title: "TH", width: "120px", align: "center" },`,
            `]`,
            `</script>`,
            '',
            '<template>',
            `  <Table`,
            `    :dataSource='dataSource'`,
            `    :columns='columns'`,
            `    ${
              args.showCheckbox !== undefined
                ? `:showCheckbox="${args.showCheckbox}"`
                : ''
            }`,
            `    ${
              args.showVerticalBorders !== undefined
                ? `:showVerticalBorders="${args.showVerticalBorders}"`
                : ''
            }`,
            `    ${
              args.isSprite !== undefined ? `:isSprite="${args.isSprite}"` : ''
            }`,
            `    ${args.className ? `className="${args.className}"` : ''}`,
            `  />`,
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

// ==== 彈性寬度表格 ====//
export const TableFlexWidth = {
  name: '彈性寬度表格',
  args: {
    dataSource,
    columns: flexColumns,
    showCheckbox: false,
    showVerticalBorders: true,
    isSprite: false,
    className: '',
  },
  render: (args) => ({
    components: { Table },
    setup() {
      return { args };
    },
    template: `
      <Table
        :columns="args.columns"
        :dataSource="args.dataSource"
        :showCheckbox="args.showCheckbox"
        :showVerticalBorders="args.showVerticalBorders"
        :isSprite="args.isSprite"
        :className="args.className"
      />`,
  }),
  parameters: {
    docs: {
      description: {
        story: '此範例展示了彈性寬度功能：固定寬度與彈性寬度的混合使用',
      },
    },
  },
};

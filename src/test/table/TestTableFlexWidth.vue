<template>
  <div class="test-table-flex-width">
    <h2>彈性寬度表格測試</h2>

    <h3>基本表格測試（無 checkbox）</h3>
    <Table
      :dataSource="dataSource"
      :columns="basicColumns"
      :showCheckbox="false"
      :showVerticalBorders="true"
      :isSprite="false"
    />

    <h3>彈性寬度測試（無 checkbox）</h3>
    <Table
      :dataSource="dataSource"
      :columns="flexColumns"
      :showCheckbox="false"
      :showVerticalBorders="true"
      :isSprite="false"
    />

    <h3>基本表格測試（有 checkbox）</h3>
    <Table
      :dataSource="dataSource"
      :columns="basicColumns"
      :showCheckbox="true"
      :showVerticalBorders="true"
      :isSprite="false"
    />

    <h3>彈性寬度測試（有 checkbox）</h3>
    <Table
      :dataSource="dataSource"
      :columns="flexColumns"
      :showCheckbox="true"
      :showVerticalBorders="true"
      :isSprite="true"
    />

    <h3>混合寬度測試（部分欄位無寬度設定）</h3>
    <Table
      :dataSource="dataSource"
      :columns="mixedColumns"
      :showCheckbox="true"
      :showVerticalBorders="true"
      :isSprite="false"
    />

    <h3>完全無寬度設定測試</h3>
    <Table
      :dataSource="dataSource"
      :columns="noWidthColumns"
      :showCheckbox="false"
      :showVerticalBorders="true"
      :isSprite="false"
    />
  </div>
</template>

<script setup>
import Table from '../../ui/element/Table/Table.vue';

const dataSource = [
  { head: '項目1', column1: '這是一個測試描述', column2: '啟用' },
  { head: '項目2', column1: '短描述', column2: '停用' },
  { head: '項目3', column1: '中等長度的描述文字內容', column2: '啟用' },
  { head: '項目4', column1: '另一個測試項目的描述', column2: '停用' },
];

// 基本固定寬度
const basicColumns = [
  { key: 'head', title: '名稱', width: '120px' },
  { key: 'column1', title: '描述', width: '200px' },
  { key: 'column2', title: '狀態', width: '100px' },
];

// 彈性寬度
const flexColumns = [
  { key: 'head', title: '名稱', width: '120px' }, // 固定寬度
  { key: 'column1', title: '描述', flex: 2 }, // 彈性寬度
  { key: 'column2', title: '狀態', flex: 1 }, // 彈性寬度
];

// 混合寬度設定 - 部分欄位無寬度設定
const mixedColumns = [
  { key: 'head', title: '名稱', width: '120px' }, // 固定寬度
  { key: 'column1', title: '描述' }, // 無寬度設定，應自動分配剩餘寬度
  { key: 'column2', title: '狀態', flex: 1 }, // 彈性寬度
];

// 完全無寬度設定 - 所有欄位都應平均分配寬度
const noWidthColumns = [
  { key: 'head', title: '名稱' }, // 無寬度設定
  { key: 'column1', title: '描述' }, // 無寬度設定
  { key: 'column2', title: '狀態' }, // 無寬度設定
];
</script>

<style scoped>
.test-table-flex-width {
  padding: 20px;
  max-width: 800px;
}

h2,
h3 {
  margin-top: 2rem;
  margin-bottom: 1rem;
}
</style>

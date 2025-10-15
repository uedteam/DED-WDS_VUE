<script setup>
import { computed, ref } from 'vue';

const props = defineProps({
  columns: {
    type: Array,
    required: true,
  },
  dataSource: {
    type: Array,
    required: true,
  },
  showCheckbox: {
    type: Boolean,
    default: false,
  },
  showVerticalBorders: {
    type: Boolean,
    default: false,
  },
  isSprite: {
    type: Boolean,
    default: false,
  },
  className: {
    type: String,
    default: '',
  },
  // onRowClick: Function,
  // onSelect: Function,
});

// Reactive State
const selectedRowKeys = ref([]);

// Computed Properties
const allSelected = computed(
  () => selectedRowKeys.value.length === props.dataSource.length
);
const someSelected = computed(
  () =>
    selectedRowKeys.value.length > 0 &&
    selectedRowKeys.value.length < props.dataSource.length
);

// 計算剩餘寬度的分配
const flexWidthCalculation = computed(() => {
  // 計算固定寬度的總和
  let fixedWidthSum = 0;
  let flexSum = 0;

  // 如果有 checkbox，先扣除 checkbox 欄位的寬度
  if (props.showCheckbox) {
    fixedWidthSum += 48; // checkbox 欄位固定 48px
  }

  props.columns.forEach((col) => {
    if (col.width) {
      // 對於固定寬度，嘗試解析為數字（假設 px 單位）
      const match = col.width.match(/(\d+(?:\.\d+)?)/);
      if (match) {
        fixedWidthSum += parseFloat(match[1]);
      }
    } else {
      // 沒有設定 width 的欄位，使用 flex 值（預設為 1）來分配剩餘寬度
      flexSum += col.flex || 1;
    }
  });

  return { fixedWidthSum, flexSum };
});

// 計算欄位樣式，支援固定寬度和彈性寬度
const getColumnStyle = computed(() => (col) => {
  const style = {
    textAlign: col.align || 'left',
  };

  // 如果有設定固定寬度，使用固定寬度
  if (col.width) {
    style.width = col.width;
  }
  // 如果沒有設定固定寬度，則使用彈性寬度分配剩餘空間
  else {
    const flex = col.flex || 1; // 如果沒有設定 flex，預設為 1
    const { flexSum } = flexWidthCalculation.value;

    // 使用百分比來分配剩餘空間
    if (flexSum > 0) {
      const percentage = (flex / flexSum) * 100;
      style.width = `${percentage}%`;
    } else {
      // 如果沒有任何彈性欄位，給予預設寬度
      style.width = 'auto';
    }
  }

  return style;
});

// Methods
function handleClick(record) {
  props.onRowClick && props.onRowClick(record);
}

function handleSelectRow(key) {
  if (selectedRowKeys.value.includes(key)) {
    selectedRowKeys.value = selectedRowKeys.value.filter(
      (rowKey) => rowKey !== key
    );
  } else {
    selectedRowKeys.value.push(key);
  }
  props.onSelect && props.onSelect([...selectedRowKeys.value]);
}

function handleSelectAll(event) {
  if (event.target.checked) {
    selectedRowKeys.value = props.dataSource.map((item) => item.head);
  } else {
    selectedRowKeys.value = [];
  }
  props.onSelect && props.onSelect([...selectedRowKeys.value]);
}
</script>

<template>
  <div
    class="ded-table-container"
    :class="{ [props.className]: !!props.className }"
    style="overflow-x: auto"
  >
    <table class="ded-table">
      <thead class="ded-table-thead">
        <tr class="ded-table-thead-tr">
          <th
            v-if="props.showCheckbox"
            class="ded-table-thead-tr-th ded-table-checkbox-col"
            :class="{
              'ded-table-thead-tr-th-border': props.showVerticalBorders,
            }"
          >
            <input
              type="checkbox"
              class="ded-table-checkbox"
              :checked="allSelected"
              :indeterminate="someSelected"
              @change="handleSelectAll"
            />
          </th>
          <th
            v-for="col in props.columns"
            :key="col.key"
            :style="getColumnStyle(col)"
            class="ded-table-thead-tr-th"
            :class="{
              'ded-table-thead-tr-th-border': props.showVerticalBorders,
            }"
          >
            {{ col.title }}
          </th>
        </tr>
      </thead>
      <tbody class="ded-table-tbody">
        <tr
          v-for="(item, rowIndex) in props.dataSource"
          :key="rowIndex"
          class="ded-table-tbody-tr"
          :class="{ 'ded-table-tbody-tr-sprite': props.isSprite }"
          @click="() => handleClick(item)"
        >
          <td
            v-if="props.showCheckbox"
            class="ded-table-tbody-tr-td ded-table-checkbox-col"
            :class="{
              'ded-table-tbody-tr-td-border': props.showVerticalBorders,
            }"
          >
            <input
              type="checkbox"
              class="ded-table-checkbox"
              :checked="selectedRowKeys.includes(item.head)"
              @change="() => handleSelectRow(item.head)"
            />
          </td>
          <td
            v-for="col in props.columns"
            :key="col.key"
            :style="getColumnStyle(col)"
            class="ded-table-tbody-tr-td"
            :class="{
              'ded-table-tbody-tr-td-border': props.showVerticalBorders,
            }"
          >
            <slot :name="col.key" :item="item">
              {{ item[col.key] }}
            </slot>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped></style>

<script setup>
import Select from '@/ui/element/Select/Select.vue';
import { ref, onMounted, nextTick } from 'vue';

// 定義 Select 元件的各種屬性
const dataSource = ref([
  { label: '選項 1', value: 'option1' },
  { label: '選項 2', value: 'option2' },
  { label: '選項 3', value: 'option3' },
  { label: '選項 4', value: 'option4' },
  { label: '選項 5', value: 'option5' },
]);
const placeholder = ref('請選擇選項');
const suffix = ref('SvgArrowDropDown');
const isDisabled = ref(false);
const className = ref('');
const selectedValue = ref('');
const selectRef = ref(null);

// 事件處理函數
const handleSelectChange = () => {
  console.log('Select changed:', selectedValue.value);
  showOperationMessage(`已選擇: ${getSelectedLabel()}`);
};

// 操作訊息顯示
const operationMessage = ref('');
const showOperationMessage = (message) => {
  operationMessage.value = message;
  setTimeout(() => {
    operationMessage.value = '';
  }, 3000);
};

// 取得選擇項目的標籤
const getSelectedLabel = () => {
  const selectedItem = dataSource.value.find(
    (item) => item.value === selectedValue.value,
  );
  return selectedItem ? selectedItem.label : '無';
};

// 可用圖標列表
const availableIcons = ['SvgArrowDropDown', 'SvgArrowDown', ''];

// 控制函數
const toggleDisabled = async () => {
  isDisabled.value = !isDisabled.value;
  await nextTick();
  showOperationMessage(`選擇框已${isDisabled.value ? '禁用' : '啟用'}`);
  console.log(`禁用狀態: ${isDisabled.value}`);
};

const toggleIcon = () => {
  const currentIndex = availableIcons.indexOf(suffix.value);
  const nextIndex = (currentIndex + 1) % availableIcons.length;
  suffix.value = availableIcons[nextIndex];
  showOperationMessage(`圖標已切換到: ${suffix.value || '無圖標'}`);
  console.log(`圖標已切換到: ${suffix.value}`);
};

const changePlaceholder = () => {
  const placeholders = [
    '請選擇選項',
    'Select an option',
    '選択してください',
    '請選取項目',
  ];
  const currentIndex = placeholders.indexOf(placeholder.value);
  placeholder.value = placeholders[(currentIndex + 1) % placeholders.length];
  showOperationMessage(`提示文字已切換到: ${placeholder.value}`);
};

const addOption = () => {
  const newIndex = dataSource.value.length + 1;
  dataSource.value.push({
    label: `新選項 ${newIndex}`,
    value: `new_option_${newIndex}`,
  });
  showOperationMessage(`已新增選項: 新選項 ${newIndex}`);
};

const removeLastOption = () => {
  if (dataSource.value.length > 1) {
    const removedOption = dataSource.value.pop();
    if (selectedValue.value === removedOption.value) {
      selectedValue.value = '';
    }
    showOperationMessage(`已移除選項: ${removedOption.label}`);
  } else {
    showOperationMessage('至少需要保留一個選項');
  }
};

const selectFirstOption = () => {
  if (dataSource.value.length > 0) {
    selectedValue.value = dataSource.value[0].value;
    showOperationMessage(`已選擇第一個選項: ${dataSource.value[0].label}`);
  }
};

const selectLastOption = () => {
  if (dataSource.value.length > 0) {
    const lastOption = dataSource.value[dataSource.value.length - 1];
    selectedValue.value = lastOption.value;
    showOperationMessage(`已選擇最後一個選項: ${lastOption.label}`);
  }
};

const clearSelection = () => {
  selectedValue.value = '';
  showOperationMessage('已清除選擇');
};

const resetOptions = () => {
  dataSource.value = [
    { label: '選項一', value: 'option1' },
    { label: '選項二', value: 'option2' },
    { label: '選項三', value: 'option3' },
    { label: '選項四', value: 'option4' },
    { label: '選項五', value: 'option5' },
  ];
  selectedValue.value = '';
  showOperationMessage('已重設選項');
};

const addCustomClass = () => {
  className.value = className.value ? '' : 'custom-select-class';
  showOperationMessage(`自訂樣式: ${className.value || '無'}`);
  console.log(`自訂樣式: ${className.value}`);
};

onMounted(() => {
  console.log('Select component mounted');
  console.log('初始選項:', dataSource.value);
  console.log('初始值:', selectedValue.value);
});
</script>

<template>
  <div class="test-select-container">
    <Select
      ref="selectRef"
      :dataSource="dataSource"
      :placeholder="placeholder"
      :suffix="suffix"
      :isDisabled="isDisabled"
      :className="className"
      v-model="selectedValue"
      @update:modelValue="handleSelectChange"
    />

    <!-- 操作訊息顯示 -->
    <!-- <div v-if="operationMessage" class="operation-message">
      {{ operationMessage }}
    </div> -->

    <div class="select-controls">
      <p>當前 Select 設定:</p>
      <ul>
        <li>
          選項數量: <strong>{{ dataSource.length }}</strong>
        </li>
        <li>
          提示文字: <strong>{{ placeholder }}</strong>
        </li>
        <li>
          後綴圖標: <strong>{{ suffix || '無' }}</strong>
        </li>
        <li>
          選擇值: <strong>{{ selectedValue || '無' }}</strong>
        </li>
        <li>
          選擇標籤: <strong>{{ getSelectedLabel() }}</strong>
        </li>
        <li>
          禁用狀態: <strong>{{ isDisabled ? '已禁用' : '已啟用' }}</strong>
        </li>
        <li>
          自訂樣式: <strong>{{ className || '無' }}</strong>
        </li>
      </ul>

      <div class="control-buttons">
        <button @click="toggleDisabled" class="control-button">
          {{ isDisabled ? '啟用' : '禁用' }}
        </button>
        <button @click="toggleIcon" class="control-button">切換圖標</button>
        <button @click="changePlaceholder" class="control-button">
          切換提示文字
        </button>
        <button @click="addOption" class="control-button">新增選項</button>
        <button @click="removeLastOption" class="control-button">
          移除最後選項
        </button>
        <button @click="selectFirstOption" class="control-button">
          選擇第一項
        </button>
        <button @click="selectLastOption" class="control-button">
          選擇最後一項
        </button>
        <button @click="clearSelection" class="control-button">清除選擇</button>
        <button @click="resetOptions" class="control-button">重設選項</button>
        <button @click="addCustomClass" class="control-button">
          {{ className ? '移除' : '添加' }}自訂樣式
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.test-select-container {
  background-color: #ffffff;
  padding: 20px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  width: 720px;
  margin: 20px auto;
  box-sizing: border-box;
}

@media (max-width: 768px) {
  .test-select-container {
    min-width: auto;
    width: calc(100% - 40px);
    margin: 20px;
  }
}

.operation-message {
  margin: 10px 0;
  padding: 8px 12px;
  background-color: #e3f2fd;
  border: 1px solid #2196f3;
  border-radius: 4px;
  color: #1976d2;
  font-size: 14px;
  animation: fadeIn 0.3s ease-in;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.select-controls {
  margin-top: 20px;
  padding-top: 15px;
  border-top: 1px solid #eaeaea;
}

.select-controls p {
  margin-bottom: 10px;
  font-weight: 500;
}

.select-controls ul {
  margin-bottom: 15px;
  padding-left: 20px;
}

.control-buttons {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 10px;
}

.control-button {
  padding: 6px 12px;
  background-color: #f0f0f0;
  border: 1px solid #ddd;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  transition: background-color 0.2s ease;
}

.control-button:hover {
  background-color: #e5e5e5;
}

.control-button:active {
  background-color: #d5d5d5;
}

/* 自訂樣式示例 */
.test-select-container :deep(.custom-select-class) {
  border: 2px solid #ff6b35;
  box-shadow: 0 2px 8px rgba(255, 107, 53, 0.3);
  border-radius: 8px;
}

.test-select-container :deep(.custom-select-class .ded-select) {
  border: none;
  background-color: rgba(255, 107, 53, 0.05);
}
</style>

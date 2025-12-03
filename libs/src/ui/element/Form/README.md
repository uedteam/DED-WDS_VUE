# Form 表單組件

Form 組件提供了完整的表單解決方案，包括數據綁定、驗證、布局控制等功能。

## 特點

- **數據綁定**: 使用 v-model 進行雙向數據綁定
- **表單驗證**: 內建驗證機制，支援自定義驗證規則
- **多種布局**: 支援垂直、水平、行內布局
- **標籤位置**: 靈活的標籤位置控制
- **響應式**: 在小屏幕設備上自動調整布局
- **TypeScript**: 完整的 TypeScript 類型支援

## 組件結構

Form 組件由兩個主要部分組成：

- `Form`: 表單容器，處理整體狀態和驗證
- `FormItem`: 表單項目，包裝個別的表單控制項

## 基本用法

```vue
<script setup>
import { ref } from 'vue';
import { Form, FormItem, Input, Button } from '@ded-wds-vue/ui';

const formData = ref({
  username: '',
  email: '',
  password: '',
});

const emailValidator = (value) => {
  if (!value) return true;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(value) || '請輸入有效的電子信箱格式';
};

const handleSubmit = (event) => {
  console.log('表單提交:', event);
};
</script>

<template>
  <Form
    title="基本表單"
    description="請填寫以下資訊"
    v-model="formData"
    @submit="handleSubmit"
  >
    <FormItem name="username" label="使用者名稱" :required="true">
      <template #username="{ fieldChange, fieldBlur, size, isDisabled }">
        <Input
          v-model="formData.username"
          placeholder="請輸入使用者名稱"
          :size="size"
          :isDisabled="isDisabled"
          @input="fieldChange"
          @blur="fieldBlur"
        />
      </template>
    </FormItem>

    <FormItem
      name="email"
      label="電子信箱"
      :required="true"
      :validator="emailValidator"
    >
      <template #email="{ fieldChange, fieldBlur, size, isDisabled }">
        <Input
          v-model="formData.email"
          type="email"
          placeholder="請輸入電子信箱"
          :size="size"
          :isDisabled="isDisabled"
          @input="fieldChange"
          @blur="fieldBlur"
        />
      </template>
    </FormItem>

    <template #actions>
      <Button variant="filled" themeColor="primary" type="submit">
        提交
      </Button>
    </template>
  </Form>
</template>
```

## Form Props

| 屬性                  | 類型                                   | 預設值     | 描述                                                     |
| --------------------- | -------------------------------------- | ---------- | -------------------------------------------------------- |
| title                 | string                                 | ''         | 表單標題                                                 |
| description           | string                                 | ''         | 表單描述                                                 |
| size                  | 'small' \| 'medium' \| 'large'         | 'medium'   | 表單尺寸                                                 |
| layout                | 'horizontal' \| 'vertical' \| 'inline' | 'vertical' | 表單布局                                                 |
| labelPosition         | 'top' \| 'left' \| 'right'             | 'top'      | 標籤位置                                                 |
| labelWidth            | string                                 | '120px'    | 標籤寬度（當 labelPosition 為 'left' 或 'right' 時有效） |
| isDisabled            | boolean                                | false      | 是否禁用整個表單                                         |
| showValidationSummary | boolean                                | false      | 是否顯示驗證錯誤摘要                                     |
| className             | string                                 | ''         | 自定義 CSS 類名                                          |
| modelValue            | object                                 | {}         | 表單數據（v-model）                                      |

## FormItem Props

| 屬性             | 類型                           | 預設值 | 描述                     |
| ---------------- | ------------------------------ | ------ | ------------------------ |
| name             | string                         | -      | 欄位名稱（必填）         |
| label            | string                         | ''     | 欄位標籤                 |
| required         | boolean                        | false  | 是否為必填欄位           |
| validator        | function                       | -      | 自定義驗證函數           |
| size             | 'small' \| 'medium' \| 'large' | ''     | 欄位尺寸（覆蓋表單尺寸） |
| labelPosition    | 'top' \| 'left' \| 'right'     | ''     | 標籤位置（覆蓋表單設定） |
| labelWidth       | string                         | ''     | 標籤寬度（覆蓋表單設定） |
| isDisabled       | boolean                        | false  | 是否禁用該欄位           |
| showErrorMessage | boolean                        | true   | 是否顯示錯誤訊息         |
| className        | string                         | ''     | 自定義 CSS 類名          |

## 事件

### Form 事件

| 事件名   | 參數                         | 描述           |
| -------- | ---------------------------- | -------------- |
| submit   | { values, isValid, errors? } | 表單提交時觸發 |
| reset    | { values }                   | 表單重設時觸發 |
| validate | { isValid, errors, values }  | 驗證完成時觸發 |

## 插槽

### Form 插槽

| 插槽名  | 參數                                           | 描述         |
| ------- | ---------------------------------------------- | ------------ |
| default | { formState, errors }                          | 表單內容區域 |
| actions | { formState, errors, validate, reset, submit } | 表單操作區域 |

### FormItem 插槽

| 插槽名 | 參數                                                                  | 描述           |
| ------ | --------------------------------------------------------------------- | -------------- |
| [name] | { fieldChange, fieldBlur, hasError, errorMessages, size, isDisabled } | 表單控制項區域 |

## 驗證

### 內建驗證

- **必填驗證**: 通過 `required` prop 啟用

### 自定義驗證

通過 `validator` prop 提供自定義驗證函數：

```javascript
const passwordValidator = (value) => {
  if (!value) return true; // 空值驗證交給 required

  const errors = [];
  if (value.length < 8) errors.push('密碼至少需要 8 個字元');
  if (!/[A-Z]/.test(value)) errors.push('密碼需包含至少一個大寫字母');
  if (!/[a-z]/.test(value)) errors.push('密碼需包含至少一個小寫字母');
  if (!/[0-9]/.test(value)) errors.push('密碼需包含至少一個數字');

  return errors.length > 0 ? errors : true;
};
```

### 驗證規則

- 返回 `true` 表示驗證通過
- 返回字符串表示單個錯誤訊息
- 返回字符串陣列表示多個錯誤訊息
- 拋出異常也會被視為驗證失敗

## 方法

通過 ref 可以訪問以下方法：

```vue
<script setup>
import { ref } from 'vue';

const formRef = ref();

// 驗證整個表單
const validateForm = async () => {
  const isValid = await formRef.value.validate();
  console.log('表單驗證結果:', isValid);
};

// 重設表單
const resetForm = () => {
  formRef.value.reset();
};

// 提交表單
const submitForm = () => {
  formRef.value.submit();
};
</script>

<template>
  <Form ref="formRef" v-model="formData">
    <!-- 表單內容 -->
  </Form>
</template>
```

## 布局範例

### 水平布局

```vue
<Form
  layout="vertical"
  labelPosition="left"
  labelWidth="120px"
  v-model="formData"
>
  <!-- 表單內容 -->
</Form>
```

### 行內布局

```vue
<Form layout="inline" v-model="formData">
  <!-- 表單內容 -->
</Form>
```

## 樣式自定義

組件使用 BEM 命名規範，可以通過覆蓋 CSS 類來自定義樣式：

```scss
.ded-form {
  // 自定義表單樣式
}

.ded-form-item {
  // 自定義表單項目樣式
}

.ded-form-item-error-text {
  // 自定義錯誤訊息樣式
}
```

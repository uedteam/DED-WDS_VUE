import { ref } from 'vue';
import Form from './Form.vue';
import FormItem from './FormItem.vue';
import Input from '@/ui/element/Input/Input.vue';
import Button from '@/ui/element/Button/Button.vue';
import Select from '@/ui/element/Select/Select.vue';
import Checkbox from '@/ui/element/Checkbox/Checkbox.vue';
import Radio from '@/ui/element/Radio/Radio.vue';
import Textarea from '@/ui/element/Textarea/Textarea.vue';

export default {
  title: 'Component/Form',
  component: Form,
  tags: ['autodocs'],
  argTypes: {
    title: {
      description: '表單標題',
      control: { type: 'text' },
    },
    description: {
      description: '表單描述',
      control: { type: 'text' },
    },
    size: {
      description: '表單尺寸',
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
      table: {
        type: { summary: 'small | medium | large' },
      },
    },
    layout: {
      description: '表單布局',
      control: { type: 'select' },
      options: ['horizontal', 'vertical', 'inline'],
      table: {
        type: { summary: 'horizontal | vertical | inline' },
      },
    },
    labelPosition: {
      description: '標籤位置',
      control: { type: 'select' },
      options: ['top', 'left', 'right'],
      table: {
        type: { summary: 'top | left | right' },
      },
    },
    labelWidth: {
      description: '標籤寬度',
      control: { type: 'text' },
    },
    isDisabled: {
      description: '是否禁用整個表單',
      control: { type: 'boolean' },
    },
    showValidationSummary: {
      description: '是否顯示驗證摘要',
      control: { type: 'boolean' },
    },
    className: {
      description: '客製化樣式',
      control: { type: 'text' },
    },
    modelValue: {
      description: '表單資料',
      control: { type: 'object' },
      table: {
        type: { summary: 'object' },
        category: 'v-model',
      },
    },
  },
  parameters: {
    docs: {
      title: 'Form',
      description: {
        component: '表單組件的呈現及說明，提供完整的表單驗證和數據綁定功能。',
      },
    },
  },
};

// ==== 基本表單 ====//
export const FormBasic = {
  name: '基本表單',
  args: {
    title: '基本表單',
    description: '請填寫以下資訊',
    size: 'medium',
    layout: 'vertical',
    labelPosition: 'top',
    labelWidth: '120px',
    isDisabled: false,
    showValidationSummary: false,
    className: '',
    modelValue: {
      username: '',
      email: '',
      password: '',
    },
  },
  render: (args) => ({
    components: {
      Form,
      FormItem,
      Input,
      Button,
    },
    setup() {
      const formData = ref(args.modelValue);

      const emailValidator = (value) => {
        if (!value) return true;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(value) || '請輸入有效的電子信箱格式';
      };

      const passwordValidator = (value) => {
        if (!value) return true;
        if (value.length < 6) return '密碼至少需要 6 個字元';
        return true;
      };

      const handleSubmit = (event) => {
        console.log('表單提交:', event);
      };

      const handleReset = () => {
        formData.value = {
          username: '',
          email: '',
          password: '',
        };
      };

      return {
        args,
        formData,
        emailValidator,
        passwordValidator,
        handleSubmit,
        handleReset,
      };
    },
    template: `
      <Form
        :title="args.title"
        :description="args.description"
        :size="args.size"
        :layout="args.layout"
        :labelPosition="args.labelPosition"
        :labelWidth="args.labelWidth"
        :isDisabled="args.isDisabled"
        :showValidationSummary="args.showValidationSummary"
        :className="args.className"
        v-model="formData"
        @submit="handleSubmit"
      >
        <FormItem
          name="username"
          label="使用者名稱"
          :required="true"
        >
          <template #username="{ fieldChange, fieldBlur, hasError, size, isDisabled, hint }">
            <Input
              v-model="formData.username"
              placeholder="請輸入使用者名稱"
              :size="size"
              :isDisabled="isDisabled"
              :hint="hint"
              prefix="SvgAccount"
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
          <template #email="{ fieldChange, fieldBlur, hasError, size, isDisabled, hint }">
            <Input
              v-model="formData.email"
              type="email"
              placeholder="請輸入電子信箱"
              :size="size"
              :isDisabled="isDisabled"
              :hint="hint"
              prefix="SvgMail"
              @input="fieldChange"
              @blur="fieldBlur"
            />
          </template>
        </FormItem>

        <FormItem
          name="password"
          label="密碼"
          :required="true"
          :validator="passwordValidator"
        >
          <template #password="{ fieldChange, fieldBlur, hasError, size, isDisabled, hint }">
            <Input
              v-model="formData.password"
              type="password"
              placeholder="請輸入密碼"
              :size="size"
              :isDisabled="isDisabled"
              :hint="hint"
              prefix="SvgLock"
              @input="fieldChange"
              @blur="fieldBlur"
            />
          </template>
        </FormItem>

        <template #actions="{ formState, validate, reset }">
          <div style="display: flex; gap: 8px; justify-content: flex-end;">
            <Button
              variant="outlined"
              themeColor="neutral"
              :size="args.size"
              @click="handleReset"
            >
              重設
            </Button>
            <Button
              variant="filled"
              themeColor="primary"
              :size="args.size"
              type="submit"
              :isDisabled="formState.isSubmitting"
            >
              提交
            </Button>
          </div>
        </template>
      </Form>
    `,
  }),
  parameters: {
    controls: {
      exclude: ['submit', 'reset', 'validate'],
    },
    docs: {
      source: {
        transform: (src, storyContext) => {
          const { args } = storyContext;
          return [
            `<script setup>`,
            `import { ref } from 'vue';`,
            `import { Form, FormItem, Input, Button } from '@ded-wds-vue/ui';`,
            ``,
            `const formData = ref({`,
            `  username: '',`,
            `  email: '',`,
            `  password: '',`,
            `});`,
            ``,
            `const emailValidator = (value) => {`,
            `  if (!value) return true;`,
            `  const emailRegex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;`,
            `  return emailRegex.test(value) || '請輸入有效的電子信箱格式';`,
            `};`,
            ``,
            `const passwordValidator = (value) => {`,
            `  if (!value) return true;`,
            `  if (value.length < 6) return '密碼至少需要 6 個字元';`,
            `  return true;`,
            `};`,
            ``,
            `const handleSubmit = (event) => {`,
            `  console.log('表單提交:', event);`,
            `};`,
            `</script>`,
            ``,
            `<template>`,
            `  <Form`,
            `    title="${args.title}"`,
            `    description="${args.description}"`,
            `    size="${args.size}"`,
            `    layout="${args.layout}"`,
            `    labelPosition="${args.labelPosition}"`,
            `    labelWidth="${args.labelWidth}"`,
            `    v-model="formData"`,
            `    @submit="handleSubmit"`,
            `  >`,
            `    <FormItem name="username" label="使用者名稱" :required="true">`,
            `      <template #username="{ fieldChange, fieldBlur, size, isDisabled }">`,
            `        <Input`,
            `          v-model="formData.username"`,
            `          placeholder="請輸入使用者名稱"`,
            `          :size="size"`,
            `          :isDisabled="isDisabled"`,
            `          prefix="SvgAccount"`,
            `          @input="fieldChange"`,
            `          @blur="fieldBlur"`,
            `        />`,
            `      </template>`,
            `    </FormItem>`,
            ``,
            `    <!-- 其他表單項目... -->`,
            ``,
            `    <template #actions>`,
            `      <Button variant="outlined" themeColor="neutral">重設</Button>`,
            `      <Button variant="filled" themeColor="primary" type="submit">提交</Button>`,
            `    </template>`,
            `  </Form>`,
            `</template>`,
          ].join('\n');
        },
      },
    },
  },
};

// ==== 水平布局表單 ====//
export const FormHorizontal = {
  name: '水平布局表單',
  args: {
    title: '水平布局表單',
    description: '標籤在左側的表單布局',
    size: 'medium',
    layout: 'vertical',
    labelPosition: 'left',
    labelWidth: '120px',
    isDisabled: false,
    showValidationSummary: false,
    className: '',
    modelValue: {
      name: '',
      gender: '',
      interests: [],
    },
  },
  render: (args) => ({
    components: {
      Form,
      FormItem,
      Input,
      Radio,
      Checkbox,
      Button,
    },
    setup() {
      const formData = ref(args.modelValue);

      const genderOptions = [
        { label: '男性', value: 'male' },
        { label: '女性', value: 'female' },
        { label: '其他', value: 'other' },
      ];

      const interestOptions = [
        { label: '閱讀', value: 'reading' },
        { label: '運動', value: 'sports' },
        { label: '音樂', value: 'music' },
        { label: '電影', value: 'movies' },
      ];

      const handleSubmit = (event) => {
        console.log('表單提交:', event);
      };

      return {
        args,
        formData,
        genderOptions,
        interestOptions,
        handleSubmit,
      };
    },
    template: `
      <Form
        :title="args.title"
        :description="args.description"
        :size="args.size"
        :layout="args.layout"
        :labelPosition="args.labelPosition"
        :labelWidth="args.labelWidth"
        :isDisabled="args.isDisabled"
        :showValidationSummary="args.showValidationSummary"
        :className="args.className"
        v-model="formData"
        @submit="handleSubmit"
      >
        <FormItem
          name="name"
          label="姓名"
          :required="true"
        >
          <template #name="{ fieldChange, fieldBlur, size, isDisabled, hint }">
            <Input
              v-model="formData.name"
              placeholder="請輸入姓名"
              :size="size"
              :isDisabled="isDisabled"
              :hint="hint"
              @input="fieldChange"
              @blur="fieldBlur"
            />
          </template>
        </FormItem>

        <FormItem
          name="gender"
          label="性別"
          :required="true"
        >
          <template #gender="{ fieldChange, size }">
            <Radio
              v-model="formData.gender"
              :dataSource="genderOptions"
              :size="size"
              @change="fieldChange"
            />
          </template>
        </FormItem>

        <FormItem
          name="interests"
          label="興趣"
        >
          <template #interests="{ fieldChange, size }">
            <Checkbox
              v-model="formData.interests"
              :dataSource="interestOptions"
              :size="size"
              @change="fieldChange"
            />
          </template>
        </FormItem>

        <template #actions>
          <div style="display: flex; gap: 8px; justify-content: flex-end;">
            <Button
              variant="outlined"
              themeColor="neutral"
              :size="args.size"
            >
              取消
            </Button>
            <Button
              variant="filled"
              themeColor="primary"
              :size="args.size"
              type="submit"
            >
              儲存
            </Button>
          </div>
        </template>
      </Form>
    `,
  }),
  parameters: {
    controls: {
      exclude: ['submit', 'reset', 'validate'],
    },
  },
};

// ==== 複雜表單 ====//
export const FormComplex = {
  name: '複雜表單',
  args: {
    title: '用戶註冊表單',
    description: '請詳細填寫您的個人資訊',
    size: 'medium',
    layout: 'vertical',
    labelPosition: 'top',
    labelWidth: '120px',
    isDisabled: false,
    showValidationSummary: true,
    className: '',
    modelValue: {
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
      country: '',
      bio: '',
      agreeTerms: [],
    },
  },
  render: (args) => ({
    components: {
      Form,
      FormItem,
      Input,
      Select,
      Textarea,
      Checkbox,
      Button,
    },
    setup() {
      const formData = ref(args.modelValue);

      const countryOptions = [
        { label: '台灣', value: 'taiwan' },
        { label: '香港', value: 'hongkong' },
        { label: '新加坡', value: 'singapore' },
        { label: '馬來西亞', value: 'malaysia' },
        { label: '其他', value: 'other' },
      ];

      const agreeTermsOptions = [
        { label: '我同意服務條款和隱私政策', value: true },
      ];

      // 驗證器
      const emailValidator = (value) => {
        if (!value) return true;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(value) || '請輸入有效的電子信箱格式';
      };

      const passwordValidator = (value) => {
        if (!value) return true;
        const errors = [];
        if (value.length < 8) errors.push('密碼至少需要 8 個字元');
        if (!/[A-Z]/.test(value)) errors.push('密碼需包含至少一個大寫字母');
        if (!/[a-z]/.test(value)) errors.push('密碼需包含至少一個小寫字母');
        if (!/[0-9]/.test(value)) errors.push('密碼需包含至少一個數字');
        return errors.length > 0 ? errors : true;
      };

      const confirmPasswordValidator = (value) => {
        if (!value) return true;
        return value === formData.value.password || '確認密碼與密碼不一致';
      };

      const agreeTermsValidator = (value) => {
        return (
          (Array.isArray(value) && value.includes(true)) ||
          '請同意服務條款才能繼續'
        );
      };

      const handleSubmit = (event) => {
        console.log('表單提交:', event);
      };

      return {
        args,
        formData,
        countryOptions,
        agreeTermsOptions,
        emailValidator,
        passwordValidator,
        confirmPasswordValidator,
        agreeTermsValidator,
        handleSubmit,
      };
    },
    template: `
      <Form
        :title="args.title"
        :description="args.description"
        :size="args.size"
        :layout="args.layout"
        :labelPosition="args.labelPosition"
        :labelWidth="args.labelWidth"
        :isDisabled="args.isDisabled"
        :showValidationSummary="args.showValidationSummary"
        :className="args.className"
        v-model="formData"
        @submit="handleSubmit"
      >
        <FormItem name="username" label="使用者名稱" :required="true">
          <template #username="{ fieldChange, fieldBlur, size, isDisabled, hint }">
            <Input
              v-model="formData.username"
              placeholder="請輸入使用者名稱"
              :size="size"
              :isDisabled="isDisabled"
              :hint="hint"
              prefix="SvgAccount"
              @input="fieldChange"
              @blur="fieldBlur"
            />
          </template>
        </FormItem>

        <FormItem name="email" label="電子信箱" :required="true" :validator="emailValidator">
          <template #email="{ fieldChange, fieldBlur, size, isDisabled, hint }">
            <Input
              v-model="formData.email"
              type="email"
              placeholder="請輸入電子信箱"
              :size="size"
              :isDisabled="isDisabled"
              :hint="hint"
              prefix="SvgMail"
              @input="fieldChange"
              @blur="fieldBlur"
            />
          </template>
        </FormItem>

        <FormItem name="password" label="密碼" :required="true" :validator="passwordValidator">
          <template #password="{ fieldChange, fieldBlur, size, isDisabled, hint }">
            <Input
              v-model="formData.password"
              type="password"
              placeholder="請輸入密碼"
              :size="size"
              :isDisabled="isDisabled"
              :hint="hint"
              prefix="SvgLock"
              @input="fieldChange"
              @blur="fieldBlur"
            />
          </template>
        </FormItem>

        <FormItem name="confirmPassword" label="確認密碼" :required="true" :validator="confirmPasswordValidator">
          <template #confirmPassword="{ fieldChange, fieldBlur, size, isDisabled, hint }">
            <Input
              v-model="formData.confirmPassword"
              type="password"
              placeholder="請再次輸入密碼"
              :size="size"
              :isDisabled="isDisabled"
              :hint="hint"
              prefix="SvgLock"
              @input="fieldChange"
              @blur="fieldBlur"
            />
          </template>
        </FormItem>

        <FormItem name="country" label="國家/地區" :required="true">
          <template #country="{ fieldChange, isDisabled }">
            <Select
              v-model="formData.country"
              :dataSource="countryOptions"
              placeholder="請選擇國家/地區"
              suffix="SvgArrowDown"
              :isDisabled="isDisabled"
              @change="fieldChange"
            />
          </template>
        </FormItem>

        <FormItem name="bio" label="個人簡介">
          <template #bio="{ fieldChange, fieldBlur, size, isDisabled, hint }">
            <Textarea
              v-model="formData.bio"
              placeholder="請簡單描述您自己"
              :size="size"
              :isDisabled="isDisabled"
              :hint="hint"
              @input="fieldChange"
              @blur="fieldBlur"
            />
          </template>
        </FormItem>

        <FormItem name="agreeTerms" :validator="agreeTermsValidator">
          <template #agreeTerms="{ fieldChange, size }">
            <Checkbox
              v-model="formData.agreeTerms"
              :dataSource="agreeTermsOptions"
              :size="size"
              @change="fieldChange"
            />
          </template>
        </FormItem>

        <template #actions="{ formState }">
          <div style="display: flex; gap: 8px; justify-content: flex-end;">
            <Button
              variant="outlined"
              themeColor="neutral"
              :size="args.size"
            >
              取消
            </Button>
            <Button
              variant="filled"
              themeColor="primary"
              :size="args.size"
              type="submit"
              :isDisabled="formState.isSubmitting"
            >
              {{ formState.isSubmitting ? '提交中...' : '註冊' }}
            </Button>
          </div>
        </template>
      </Form>
    `,
  }),
  parameters: {
    controls: {
      exclude: ['submit', 'reset', 'validate'],
    },
  },
};

// ==== 禁用狀態 ====//
export const FormDisabled = {
  name: '禁用狀態',
  args: {
    title: '禁用表單',
    description: '整個表單處於禁用狀態',
    size: 'medium',
    layout: 'vertical',
    labelPosition: 'top',
    labelWidth: '120px',
    isDisabled: true,
    showValidationSummary: false,
    className: '',
    modelValue: {
      username: 'john_doe',
      email: 'john@example.com',
      status: 'active',
    },
  },
  render: (args) => ({
    components: {
      Form,
      FormItem,
      Input,
      Select,
      Button,
    },
    setup() {
      const formData = ref(args.modelValue);

      const statusOptions = [
        { label: '啟用', value: 'active' },
        { label: '停用', value: 'inactive' },
        { label: '待審核', value: 'pending' },
      ];

      return {
        args,
        formData,
        statusOptions,
      };
    },
    template: `
      <Form
        :title="args.title"
        :description="args.description"
        :size="args.size"
        :layout="args.layout"
        :labelPosition="args.labelPosition"
        :labelWidth="args.labelWidth"
        :isDisabled="args.isDisabled"
        :showValidationSummary="args.showValidationSummary"
        :className="args.className"
        v-model="formData"
      >
        <FormItem name="username" label="使用者名稱">
          <template #username="{ size, isDisabled }">
            <Input
              v-model="formData.username"
              placeholder="請輸入使用者名稱"
              :size="size"
              :isDisabled="isDisabled"
              prefix="SvgAccount"
            />
          </template>
        </FormItem>

        <FormItem name="email" label="電子信箱">
          <template #email="{ size, isDisabled }">
            <Input
              v-model="formData.email"
              type="email"
              placeholder="請輸入電子信箱"
              :size="size"
              :isDisabled="isDisabled"
              prefix="SvgMail"
            />
          </template>
        </FormItem>

        <FormItem name="status" label="狀態">
          <template #status="{ size, isDisabled }">
            <Select
              v-model="formData.status"
              :dataSource="statusOptions"
              placeholder="請選擇狀態"
              suffix="SvgArrowDown"
              :isDisabled="isDisabled"
            />
          </template>
        </FormItem>

        <template #actions>
          <div style="display: flex; gap: 8px; justify-content: flex-end;">
            <Button
              variant="outlined"
              themeColor="neutral"
              :size="args.size"
              :isDisabled="args.isDisabled"
            >
              取消
            </Button>
            <Button
              variant="filled"
              themeColor="primary"
              :size="args.size"
              :isDisabled="args.isDisabled"
            >
              儲存
            </Button>
          </div>
        </template>
      </Form>
    `,
  }),
  parameters: {
    controls: {
      exclude: ['submit', 'reset', 'validate'],
    },
  },
};

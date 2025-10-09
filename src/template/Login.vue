<script setup>
import { ref, reactive } from 'vue';
import { useRouter } from 'vue-router';
import Card from '@/ui/element/Card/Card.vue';
import Title from '@/ui/element/Title/Title.vue';
import Input from '@/ui/element/Input/Input.vue';
import Button from '@/ui/element/Button/Button.vue';

// 定義 Props
defineProps({
  className: {
    type: String,
    default: '',
  },
});

// 定義 Emits
const emits = defineEmits(['login', 'forgotPassword']);

// 路由實例
const router = useRouter();

// 電子郵件驗證正則表達式
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// 電子郵件驗證輔助函數
const isValidEmail = (email) => {
  return emailRegex.test(email.trim());
};

// 檢查輸入是否為電子郵件格式
const isEmailFormat = (input) => {
  return input.includes('@');
};

// 表單資料
const loginForm = reactive({
  username: '',
  password: '',
});

// 表單驗證狀態
const formErrors = reactive({
  username: '',
  password: '',
});

// 載入狀態
const isLoading = ref(false);

// 表單驗證
const validateForm = () => {
  let isValid = true;

  // 重置錯誤
  formErrors.username = '';
  formErrors.password = '';

  // 驗證使用者名稱或電子郵件
  if (!loginForm.username.trim()) {
    formErrors.username = '請輸入使用者名稱或電子郵件';
    isValid = false;
  } else {
    const input = loginForm.username.trim();
    // 檢查是否為電子郵件格式
    if (isEmailFormat(input)) {
      if (!isValidEmail(input)) {
        formErrors.username =
          '請輸入有效的電子郵件格式 (例如: user@example.com)';
        isValid = false;
      }
    } else {
      // 如果不是電子郵件，則驗證使用者名稱長度
      if (input.length < 3) {
        formErrors.username = '使用者名稱至少需要 3 個字元';
        isValid = false;
      }
    }
  }

  // 驗證密碼
  if (!loginForm.password) {
    formErrors.password = '請輸入密碼';
    isValid = false;
  } else if (loginForm.password.length < 6) {
    formErrors.password = '密碼至少需要 6 個字元';
    isValid = false;
  }

  return isValid;
};

// 實時驗證單個欄位
const validateField = (fieldName) => {
  switch (fieldName) {
    case 'username': {
      const input = loginForm.username.trim();
      if (input) {
        // 檢查是否為電子郵件格式
        if (isEmailFormat(input)) {
          if (isValidEmail(input)) {
            formErrors.username = '';
          }
        } else {
          // 如果不是電子郵件，檢查使用者名稱長度
          if (input.length >= 3) {
            formErrors.username = '';
          }
        }
      }
      break;
    }
    case 'password':
      if (loginForm.password && loginForm.password.length >= 6) {
        formErrors.password = '';
      }
      break;
  }
};

// 處理使用者名稱輸入變化
const handleUsernameInput = () => {
  validateField('username');
};

// 處理密碼輸入變化
const handlePasswordInput = () => {
  validateField('password');
};

// 處理登入
const handleLogin = async () => {
  if (!validateForm()) {
    return;
  }

  isLoading.value = true;

  try {
    // 模擬 API 呼叫延遲
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // 觸發登入事件
    emits('login', {
      username: loginForm.username,
      password: loginForm.password,
    });

    // 登入成功後重定向到首頁
    router.push('/landing');
  } catch (error) {
    console.error('登入失敗:', error);
  } finally {
    isLoading.value = false;
  }
};

// 處理忘記密碼
const handleForgotPassword = () => {
  emits('forgotPassword');
};

// 處理 Enter 鍵登入
const handleKeyPress = (event) => {
  if (event.key === 'Enter') {
    handleLogin();
  }
};
</script>

<template>
  <div
    class="modern-background h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    :class="className"
  >
    <!-- 動態背景層 -->
    <div class="absolute inset-0 background-layers">
      <!-- 主要漸變背景 -->
      <div class="gradient-base"></div>

      <!-- 動態圓形元素 -->
      <div class="floating-shapes">
        <div class="shape shape-1"></div>
        <div class="shape shape-2"></div>
        <div class="shape shape-3"></div>
        <div class="shape shape-4"></div>
        <div class="shape shape-5"></div>
      </div>

      <!-- 網格覆層 -->
      <div class="grid-overlay"></div>

      <!-- 光暈效果 -->
      <div class="glow-effects">
        <div class="glow glow-1"></div>
        <div class="glow glow-2"></div>
      </div>
    </div>

    <!-- 內容層 -->
    <div class="max-w-md w-full space-y-8 relative z-10">
      <Card class="p-8 backdrop-blur-sm bg-white/90 border-0 shadow-2xl">
        <template #cardHeader>
          <div class="text-center">
            <Title
              :level="2"
              theme-color="primary"
              class="mb-2 w-full flex justify-center text-gray-800"
            >
              歡迎回到設計系統
            </Title>
            <p class="text-gray-600 text-sm">請登入您的帳戶以繼續</p>
          </div>
        </template>

        <div class="space-y-6">
          <!-- 使用者名稱輸入 -->
          <Input
            v-model="loginForm.username"
            label="使用者名稱或電子郵件"
            type="text"
            placeholder="請輸入使用者名稱或電子郵件"
            prefix="SvgUser"
            size="medium"
            :hint="{ error: formErrors.username }"
            :is-disabled="isLoading"
            @keypress="handleKeyPress"
            @input="handleUsernameInput"
            class="w-full"
          />

          <!-- 密碼輸入 -->
          <Input
            v-model="loginForm.password"
            label="密碼"
            type="password"
            placeholder="請輸入密碼"
            prefix="SvgLock"
            size="medium"
            :hint="{ error: formErrors.password }"
            :is-disabled="isLoading"
            @keypress="handleKeyPress"
            @input="handlePasswordInput"
            class="w-full"
          />

          <!-- 記住我 & 忘記密碼 -->
          <div class="flex items-center justify-between">
            <label class="flex items-center">
              <input
                type="checkbox"
                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
              />
              <span class="ml-2 text-sm text-gray-600">記住我</span>
            </label>

            <button
              type="button"
              @click="handleForgotPassword"
              class="text-sm text-blue-600 hover:text-blue-500 font-medium"
              :disabled="isLoading"
            >
              忘記密碼？
            </button>
          </div>

          <!-- 登入按鈕 -->
          <Button
            variant="filled"
            theme-color="primary"
            size="medium"
            width="full"
            :is-disabled="isLoading"
            @click="handleLogin"
            class="mt-6 w-full"
          >
            <span v-if="!isLoading">登入</span>
            <span v-else class="flex items-center justify-center">
              <svg
                class="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  class="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  stroke-width="4"
                ></circle>
                <path
                  class="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              登入中...
            </span>
          </Button>
        </div>

        <template #cardFooter>
          <div class="text-center mt-6">
            <p class="text-sm text-gray-600">
              還沒有帳戶？
              <a href="#" class="font-medium text-blue-600 hover:text-blue-500">
                立即註冊
              </a>
            </p>
          </div>
        </template>
      </Card>
    </div>
  </div>
</template>

<style scoped lang="scss">
/* 現代感背景設計 */
.modern-background {
  position: relative;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

.background-layers {
  position: absolute;
  inset: 0;
  z-index: 0;
}

/* 主要漸變背景 */
.gradient-base {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    135deg,
    #667eea 0%,
    #764ba2 25%,
    #f093fb 50%,
    #f5576c 75%,
    #4facfe 100%
  );
  background-size: 400% 400%;
  animation: gradientShift 15s ease infinite;
}

/* 浮動幾何形狀 */
.floating-shapes {
  position: absolute;
  inset: 0;
  overflow: hidden;
}

.shape {
  position: absolute;
  border-radius: 50%;
  background: linear-gradient(
    45deg,
    rgba(255, 255, 255, 0.1),
    rgba(255, 255, 255, 0.05)
  );
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  animation: float 20s infinite linear;
}

.shape-1 {
  width: 300px;
  height: 300px;
  top: -150px;
  left: -150px;
  animation-delay: 0s;
  animation-duration: 25s;
}

.shape-2 {
  width: 200px;
  height: 200px;
  top: 20%;
  right: -100px;
  animation-delay: -5s;
  animation-duration: 30s;
  animation-direction: reverse;
}

.shape-3 {
  width: 150px;
  height: 150px;
  bottom: 10%;
  left: 10%;
  animation-delay: -10s;
  animation-duration: 35s;
}

.shape-4 {
  width: 120px;
  height: 120px;
  top: 60%;
  right: 20%;
  animation-delay: -15s;
  animation-duration: 28s;
  animation-direction: reverse;
}

.shape-5 {
  width: 80px;
  height: 80px;
  bottom: -40px;
  right: -40px;
  animation-delay: -20s;
  animation-duration: 22s;
}

/* 網格覆層 */
.grid-overlay {
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px);
  background-size: 50px 50px;
  animation: gridPulse 8s ease-in-out infinite;
}

/* 光暈效果 */
.glow-effects {
  position: absolute;
  inset: 0;
  pointer-events: none;
}

.glow {
  position: absolute;
  border-radius: 50%;
  filter: blur(60px);
  opacity: 0.4;
  animation: glowPulse 6s ease-in-out infinite;
}

.glow-1 {
  width: 400px;
  height: 400px;
  background: radial-gradient(circle, #ff6b6b, transparent);
  top: 10%;
  left: 20%;
  animation-delay: 0s;
}

.glow-2 {
  width: 300px;
  height: 300px;
  background: radial-gradient(circle, #4ecdc4, transparent);
  bottom: 20%;
  right: 10%;
  animation-delay: -3s;
}

/* 動畫定義 */
@keyframes gradientShift {
  0%,
  100% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
}

@keyframes float {
  0%,
  100% {
    transform: translateY(0px) rotate(0deg);
  }
  25% {
    transform: translateY(-20px) rotate(90deg);
  }
  50% {
    transform: translateY(-40px) rotate(180deg);
  }
  75% {
    transform: translateY(-20px) rotate(270deg);
  }
}

@keyframes gridPulse {
  0%,
  100% {
    opacity: 0.3;
  }
  50% {
    opacity: 0.1;
  }
}

@keyframes glowPulse {
  0%,
  100% {
    opacity: 0.3;
    transform: scale(1);
  }
  50% {
    opacity: 0.6;
    transform: scale(1.1);
  }
}

/* 自定義樣式可以在這裡添加 */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* 響應式設計 */
@media (max-width: 768px) {
  .shape {
    display: none;
  }

  .glow {
    width: 250px;
    height: 250px;
  }

  .gradient-base {
    animation-duration: 10s;
  }
}

/* 深色模式支援 */
@media (prefers-color-scheme: dark) {
  .modern-background {
    background: linear-gradient(135deg, #2d3748 0%, #1a202c 100%);
  }

  .gradient-base {
    background: linear-gradient(
      135deg,
      #2d3748 0%,
      #4a5568 25%,
      #553c9a 50%,
      #b83280 75%,
      #3182ce 100%
    );
  }
}

/* 動畫性能優化 */
@media (prefers-reduced-motion: reduce) {
  .gradient-base,
  .shape,
  .glow,
  .grid-overlay {
    animation: none;
  }
}
</style>

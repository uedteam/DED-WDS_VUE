<template>
  <div class="chart-error-boundary">
    <template v-if="!hasError">
      <slot />
    </template>
    
    <div v-else class="error-fallback bg-gray-50 border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
      <div class="flex flex-col items-center space-y-4">
        <svg class="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
        
        <div>
          <h3 class="text-lg font-medium text-gray-900 mb-2">圖表載入失敗</h3>
          <p class="text-gray-600 text-sm mb-4">{{ errorMessage }}</p>
          
          <div class="space-x-3">
            <button 
              @click="retry"
              class="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors text-sm"
            >
              重試
            </button>
            
            <button 
              @click="showDetails = !showDetails"
              class="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition-colors text-sm"
            >
              {{ showDetails ? '隱藏' : '顯示' }}詳情
            </button>
          </div>
          
          <div v-if="showDetails" class="mt-4 p-3 bg-gray-100 rounded text-left text-xs text-gray-700">
            <strong>錯誤詳情：</strong><br>
            <pre class="whitespace-pre-wrap">{{ errorDetails }}</pre>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onErrorCaptured } from 'vue';

// Props
interface Props {
  fallbackMessage?: string;
}

const props = withDefaults(defineProps<Props>(), {
  fallbackMessage: '圖表渲染時發生錯誤'
});

// Emits
const emit = defineEmits<{
  error: [error: Error];
  retry: [];
}>();

// 響應式狀態
const hasError = ref(false);
const errorMessage = ref('');
const errorDetails = ref('');
const showDetails = ref(false);

// 重試功能
const retry = () => {
  hasError.value = false;
  errorMessage.value = '';
  errorDetails.value = '';
  showDetails.value = false;
  emit('retry');
};

// 錯誤捕獲
onErrorCaptured((err, target, errorInfo) => {
  console.error('ChartErrorBoundary 捕獲錯誤:', {
    error: err,
    target,
    errorInfo
  });

  hasError.value = true;
  errorMessage.value = err.message || props.fallbackMessage;
  errorDetails.value = `
錯誤類型: ${err.name || 'Error'}
錯誤訊息: ${err.message || '未知錯誤'}
錯誤堆疊: ${err.stack || '無堆疊訊息'}
組件訊息: ${errorInfo}
發生時間: ${new Date().toLocaleString()}
  `.trim();

  // 發送錯誤事件給父組件
  emit('error', err);

  // 返回 false 阻止錯誤繼續向上傳播
  return false;
});
</script>

<style scoped>
.chart-error-boundary {
  width: 100%;
  min-height: 200px;
}

.error-fallback {
  min-height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
}

pre {
  font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
  font-size: 11px;
  line-height: 1.4;
  max-height: 200px;
  overflow-y: auto;
}
</style>
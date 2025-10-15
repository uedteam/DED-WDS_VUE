<template>
  <div class="code-block">
    <div class="flex justify-between items-center mb-3">
      <h3 class="text-lg font-semibold text-gray-900">{{ title }}</h3>
      <div class="flex gap-2">
        <button
          v-if="showLanguageLabel"
          class="bg-gray-100 text-gray-700 px-3 py-1 rounded text-xs font-mono"
          disabled
        >
          {{ language }}
        </button>
        <button
          class="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm transition-colors"
          @click="copyToClipboard"
        >
          {{ copyText }}
        </button>
      </div>
    </div>

    <div class="relative">
      <pre
        class="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm leading-relaxed"
      ><code 
        ref="codeRef"
        :class="`language-${language}`"
        v-html="highlightedCode"
      ></code></pre>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, watch } from 'vue';
import hljs from 'highlight.js';
import 'highlight.js/styles/vs2015.css'; // 使用 VS Dark 主題

// Props
const props = defineProps({
  code: {
    type: String,
    required: true,
  },
  language: {
    type: String,
    default: 'html',
  },
  title: {
    type: String,
    default: '程式碼範例',
  },
  showLanguageLabel: {
    type: Boolean,
    default: true,
  },
});

// Refs
const codeRef = ref<HTMLElement>();
const copyText = ref('複製程式碼');

// 高亮後的程式碼
const highlightedCode = computed(() => {
  try {
    if (props.language && hljs.getLanguage(props.language)) {
      return hljs.highlight(props.code, { language: props.language }).value;
    } else {
      return hljs.highlightAuto(props.code).value;
    }
  } catch (error) {
    console.warn('程式碼高亮失敗:', error);
    return props.code;
  }
});

// 複製到剪貼簿
const copyToClipboard = async () => {
  try {
    await navigator.clipboard.writeText(props.code);
    copyText.value = '已複製';
    setTimeout(() => {
      copyText.value = '複製程式碼';
    }, 2000);
  } catch (err) {
    console.error('複製失敗:', err);
    // 降級方案
    const textArea = document.createElement('textarea');
    textArea.value = props.code;
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    try {
      document.execCommand('copy');
      copyText.value = '已複製';
      setTimeout(() => {
        copyText.value = '複製程式碼';
      }, 2000);
    } catch (fallbackErr) {
      console.error('降級複製也失敗:', fallbackErr);
    }
    document.body.removeChild(textArea);
  }
};

// 初始化高亮
onMounted(() => {
  if (codeRef.value) {
    hljs.highlightElement(codeRef.value);
  }
});

// 監聽程式碼變化重新高亮
watch(
  () => props.code,
  () => {
    if (codeRef.value) {
      hljs.highlightElement(codeRef.value);
    }
  }
);
</script>

<style scoped>
.code-block {
  background: white;
  border-radius: 0.5rem;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05);
  padding: 1.5rem;
}

/* 自定義高亮樣式 */
:deep(.hljs) {
  background: #1e1e1e !important;
  color: #d4d4d4 !important;
}

:deep(.hljs-tag) {
  color: #569cd6 !important;
}

:deep(.hljs-name) {
  color: #4fc1ff !important;
}

:deep(.hljs-attr) {
  color: #9cdcfe !important;
}

:deep(.hljs-string) {
  color: #ce9178 !important;
}

:deep(.hljs-number) {
  color: #b5cea8 !important;
}

:deep(.hljs-boolean) {
  color: #569cd6 !important;
}

:deep(.hljs-keyword) {
  color: #c586c0 !important;
}

:deep(.hljs-comment) {
  color: #6a9955 !important;
  font-style: italic;
}

:deep(.hljs-symbol) {
  color: #4fc1ff !important;
}

:deep(.hljs-variable) {
  color: #4fc1ff !important;
}

:deep(.hljs-title) {
  color: #dcdcaa !important;
}

/* Vue 特定語法高亮 */
:deep(.hljs-template-tag) {
  color: #808080 !important;
}

:deep(.hljs-template-variable) {
  color: #d4d4d4 !important;
}
</style>

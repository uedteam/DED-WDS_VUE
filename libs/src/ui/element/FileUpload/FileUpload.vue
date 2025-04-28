<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import Uppy from '@uppy/core';
import Dashboard from '@uppy/dashboard';
import Tus from '@uppy/tus';
import XHRUpload from '@uppy/xhr-upload';

import '@uppy/core/dist/style.min.css';
import '@uppy/dashboard/dist/style.min.css';

const UPLOADER = 'xhr';
const TUS_ENDPOINT = 'https://tusd.tusdemo.net/files/';
const XHR_ENDPOINT = 'gs://ded-wds-bucket/uat/wds/';

const props = defineProps({
  uploadUrl: {
    type: String,
    default: '/api/upload', // 後端文件上傳接口
    required: true,
  },
  allowedFileTypes: {
    type: Array,
    default: () => null, // 如 ['.jpg', '.png', '.pdf']
  },
  maxFileSize: {
    type: Number,
    default: null, // 如 10 * 1024 * 1024 (10MB)
  },
  maxTotalFileSize: {
    type: Number,
    default: null, // 如 10 * 1024 * 1024 (10MB)
  },
  className: {
    type: String,
    default: '',
  },
});

const emit = defineEmits([
  'onUploadSuccess',
  'onUploadError',
  'onFileAdded',
  'onFileRemoved',
]);

// 創建引用
const uppy = ref(null);
const uppyDashboardRef = ref(null);
const selectedFiles = ref([]);

onMounted(() => {
  uppy.value = new Uppy({
    id: 'uppy-file-upload',
    autoProceed: false, // 不要自動上傳
    debug: true,
    restrictions: {
      maxFileSize: props.maxFileSize,
      maxTotalFileSize: props.maxTotalFileSize,
      allowedFileTypes: props.allowedFileTypes,
    },
  }).use(Dashboard, {
    inline: true,
    target: uppyDashboardRef.value,
    showProgressDetails: true,
    proudlyDisplayPoweredByUppy: true,
  });

  switch (UPLOADER) {
    case 'xhr':
      uppy.value.use(XHRUpload, {
        endpoint: props.uploadUrl || XHR_ENDPOINT,
        bundle: true,
        limit: 6,
        formData: true,
        fieldName: 'file',
        headers: {
          'X-Requested-With': 'XMLHttpRequest',
        },
        timeout: 60000, // 超时时间（毫秒）
      });
      break;
    case 'tus':
      uppy.value.use(Tus, { endpoint: TUS_ENDPOINT, limit: 6 });
      break;
    default:
      break;
  }

  // 監聽上傳開始事件
  uppy.value.on('upload', () => {
    console.log('開始上傳');
  });

  // 監聽上傳完成事件
  uppy.value.on('complete', (result) => {
    console.log('上傳完成:', result);
    emit('onUploadSuccess', result);
  });

  // 監聽上傳錯誤事件
  uppy.value.on('upload-error', (file, error, response) => {
    console.error('上傳錯誤:', file, error, response);
    emit('onUploadError', { file, error, response });
  });

  // 監聽文件新增事件
  uppy.value.on('file-added', (file) => {
    console.log('文件已新增:', file);
    emit('onFileAdded', file);
  });

  // uppy.value.on('complete', (result) => {
  //   console.log(result);

  //   if (result.failed.length === 0) {
  //     selectedFiles.value.push({ ...result });
  //     console.log('Upload successful');
  //   } else {
  //     console.warn('Upload failed');
  //   }
  //   console.log('File added:', selectedFiles.value);
  //   console.log('successful files:', result.successful);
  //   console.log('failed files:', result.failed);
  // });
});

onBeforeUnmount(() => {
  if (uppy.value) {
    selectedFiles.value.forEach((file) => {
      URL.revokeObjectURL(file.preview);
    });
    uppy.value.close();
  }
});
</script>

<template>
  <div ref="uppyDashboardRef"></div>
</template>

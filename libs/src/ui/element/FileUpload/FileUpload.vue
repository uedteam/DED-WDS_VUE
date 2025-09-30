<script setup>
import { ref, onMounted, onBeforeUnmount, watch } from 'vue';
import Uppy from '@uppy/core';
import Dashboard from '@uppy/dashboard';
import Tus from '@uppy/tus';
import XHRUpload from '@uppy/xhr-upload';

import '@uppy/core/dist/style.min.css';
import '@uppy/dashboard/dist/style.min.css';

const UPLOADER = 'tus'; // 'xhr' 或 'tus'
// const TUS_ENDPOINT = 'https://tusd.tusdemo.net/files/';
// const XHR_ENDPOINT = 'gs://ded-wds-bucket/uat/wds/';

const props = defineProps({
  uploadUrl: {
    type: String,
    required: true,
  },
  allowedFileTypes: {
    type: Array,
    default: () => null,
  },
  maxFileSize: {
    type: Number,
    default: null,
  },
  maxTotalFileSize: {
    type: Number,
    default: null,
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

const uppy = ref(null);
const uppyDashboardRef = ref(null);

const initializeUppy = () => {
  if (uppy.value) {
    uppy.value.destroy(); // 清理之前的 Uppy 實例
  }

  uppy.value = new Uppy({
    id: 'uppy-file-upload',
    autoProceed: false,
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
        endpoint: props.uploadUrl,
        bundle: true,
        limit: 6,
        formData: true,
        fieldName: 'file',
        headers: {
          'X-Requested-With': 'XMLHttpRequest',
        },
        timeout: 60000,
      });
      break;
    case 'tus':
      uppy.value.use(Tus, {
        endpoint: props.uploadUrl,
        limit: 6,
      });
      break;
    default:
      break;
  }

  uppy.value.on('upload', () => {
    console.log('開始上傳');
  });

  uppy.value.on('complete', (result) => {
    console.log('上傳完成:', result);
    emit('onUploadSuccess', result);
  });

  uppy.value.on('upload-error', (file, error, response) => {
    console.error('上傳錯誤:', file, error, response);
    emit('onUploadError', { file, error, response });
  });

  uppy.value.on('file-added', (file) => {
    console.log('文件已新增:', file);
    emit('onFileAdded', file);
  });
};

onMounted(() => {
  initializeUppy();
});

// 監聽 props 的變化，重新初始化 Uppy
watch(
  () => [
    props.uploadUrl,
    props.allowedFileTypes,
    props.maxFileSize,
    props.maxTotalFileSize,
  ],
  () => {
    initializeUppy();
  },
  { deep: true }
);

onBeforeUnmount(() => {
  if (uppy.value) {
    selectedFiles.value.forEach((file) => {
      URL.revokeObjectURL(file.preview);
    });
    uppy.value.destroy();
  }
});
</script>

<template>
  <div ref="uppyDashboardRef"></div>
</template>

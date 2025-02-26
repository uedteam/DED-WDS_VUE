## V1.0.0 (2025-02-26)

### 🆙 Updates

- 檢整有微細疑慮的路徑，修改 storybook 將所有 ./元件.vue 的路徑改成 import Avatar from "@/ui/element/元件/元件.vue";

- 修改 packge.json 參考學長 script 加入
    "artifactregistry-login": "npx google-artifactregistry-auth",
    "print-access-token": "gcloud auth application-default print-access-token"

- 修改 gitignore 允許 .npmrc 檔上傳

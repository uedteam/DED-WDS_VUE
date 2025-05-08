// 自動匯入所有 SVG 檔案
const svgModules = import.meta.glob('./*.svg', { eager: true });

// 建立圖示物件，名稱與檔案名稱一致
const icons = Object.entries(svgModules).reduce((acc, [filePath, module]) => {
  const iconName = filePath
    .replace('./', '') // 移除路徑前綴
    .replace('.svg', '') // 移除副檔名
    .replace(/-([a-z])/g, (_, char) => char.toUpperCase()) // 將檔名轉為駝峰式命名
    .replace(/^./, (char) => char.toUpperCase()); // 首字母大寫
  acc[iconName] = module.default || module;

  return acc;
}, {});

export default icons;

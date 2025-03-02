let globIcons = import.meta.glob('/libs/src/assets/icons/*.svg', {
	eager: true,
	import: 'default',
});

// 如果 `/libs/src/assets/icons/` 內沒有載入任何圖標，則改用 `/src/assets/icons/`
if (Object.keys(globIcons).length === 0) {
	globIcons = import.meta.glob('/src/assets/icons/*.svg', {
		eager: true,
		import: 'default',
	});
}

export default Object.fromEntries(
	Object.entries(globIcons)
		.map(([path, component]) => {
			const match = path.match(/\/([^/]+)\.svg$/);
			if (!match) return null; // 確保 match 不為 null
			const name = match[1]; // 取出 SVG 檔名作為 key
			return [name, component];
		})
		.filter(Boolean) // 過濾掉 null 值
);

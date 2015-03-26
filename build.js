({
    baseUrl: ".",
    name: "main",			// 要递归合并依赖的模块
    out: "main-build.js",	// 合并后的文件
	paths: {
		"jquery": "lib/jquery-2.1.3.min",
		"angular": "lib/angular.min"
	},
	excludeShallow: ['angular', 'jquery']	// 不合并的模块列表
})
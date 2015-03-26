/*! main.js */
// 主模块 所有代码都从这儿开始运行

// 使用require.config()方法，我们可以对模块的加载行为进行自定义
require.config({
	baseUrl: ".",
	paths: {
		"jquery": "lib/jquery-2.1.3.min",
		"angular": "lib/angular.min"
	}
});

require(['jquery', 'ui/m3'], function ($, m3){
	console.log("m3=%o", m3);
});
require(['ui/m1', 'ui/m2', 'ui/m3'], function (m1, m2, m3){
	console.log("m1=%o, m2=%o, m3=%o", m1, m2, m3);
});
/*define(function(require,exprots,moudle){
    require('jquery');
    require('angular');
    

});*/

/*
备注：
	*创建全局函数会污染全局命名空间。更合理的方式是创建一个模块(module),然后在模块中创建控制器(controllerName)。
	*此处创建了一个名为hello的模块,然后在模块中创建了名为HelloAngular的控制器。
	*页面在使用的时候必须声明ng-app=“模块名”才能调用控制器的方法。
*/
var hello=angular.module('hello',[]);
hello.controller('HelloAngular',function($scope){
	$scope.greeting={
		text:'Hello',
		pp:2,
		ff:5
	};
});




























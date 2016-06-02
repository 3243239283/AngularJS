
/*
	在全局作用域中创建函数的方式并不合适，会污染全局命名空间。
	更合理的方式如下：
		1、创建一个模块（app）
		2、在模块中创建控制器（FirstController）
*/
var app=angular.module('app',[]);
app.controller('FirstController',function($scope){
	$scope.message={
		age:10
	};
	$scope.add=function(amount){
		$scope.message.age+=amount;	//自增1
	};
	$scope.subtract=function(amount){
		$scope.message.age-=amount;	//自减1
	};
});

app.controller('parent',function($scope){
	$scope.person={greeted:false};
});
app.controller('child',function($scope){
	$scope.person.name='Air li';
});
















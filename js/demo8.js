/*
	1、通过angularJS模块API中的.directive()方法，通过传入一个字符串和一个函数来注册一个“新指令”。其中字符串是指令的名(指令是驼峰命名风格,函数应该返回一个对象。)
	2、此处html里面定义的指令为my-directive,所以命名必须是myDirective。
	3、directive()方法返回对象中包含了用来定义和配置指令所需的方法和属性。
*/
var myApp=angular.module('myApp',[])
.directive('myDirective',function(){
	return{
		restrict:'A',
		/*用自定义元素取代指令声明,而不是嵌套在其内部。
		replace:true,*/
		template:'<a href="http://baidu.com">自定义指令</a>'
	}
})
.controller('greet',function($scope){
	$scope.greeting={
		txt:"HelloWorld!"
	}
})
.run(function($rootScope){
	//使用run访问$rootScope
	$rootScope.rootProperty='root scope';
})
.controller('ParentController',function($scope){
	$scope.parentProperty='parent scope';
})
.controller('ChildController',function($scope){
	$scope.childProperty='child scope';
	$scope.fullSentenceFromChild='Same $scope: We can access'+
		$scope.rootProperty+'and'+
		$scope.parentProperty+'and'+
		$scope.childProperty
});







































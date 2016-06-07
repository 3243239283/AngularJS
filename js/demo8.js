/*
	1、通过angularJS模块API中的.directive()方法，通过传入一个字符串和一个函数来注册一个“新指令”。其中字符串是指令的名(指令是驼峰命名风格,函数应该返回一个对象。)
	2、此处html里面定义的指令为my-directive,所以命名必须是myDirective。
	3、directive()方法返回对象中包含了用来定义和配置指令所需的方法和属性。
*/
var myApp=angular.module('myApp',[])
.directive('myDirective',function(){
	return{
		/*
			restrict 值可以是以下几种:
				E 只限元素名使用
				A 只限属性使用
				C 只限类名使用
				M 只限注释使用
			restrict 默认值为 EA, 即可以通过元素名和属性名来调用指令。
		*/
		restrict:'A',
		

		/*用自定义元素取代指令声明,而不是嵌套在其内部。*/
		//replace:true,
		

		scope:{
			myUrl:'@',		//绑定策略
			myLinkText:'@'	//绑定策略
		},
		/*
			由于作用域中的属性经常是私有的，因此可以指定我们希望将这个内部属性同哪个DOM属性进行绑定：
				scope:{
					myUrl:'@someAttr',		//绑定策略
					myLinkText:'@'	//绑定策略
				}
			对应html中要用some-attr代替my-url:
				<div my-directive some-attr="http://baidu.com" my-link-text="点击"></div>
		*/


		//template:'<a href="http://baidu.com">点击</a>'
		template:'<a href="{{myUrl}}">'+'{{myLinkText}}</a>'
		/*
		1、angularJS并没有限制在指令中硬编码字符串:
			template:'<a href="{{myUrl}}">{{myLinkText}}</a>'
		2、在对应的html文档中，可以给指令添加myUrl和myLinkText两个属性，这两个参数会成为指令内部作用域的属性：
			<div my-directive my-url="http://baidu.com" my-link-text="点击"></div>
		*/

	}
})
.directive('run', function() {
    return {
        restrict : 'A',
        template : '<h1>自定义指令!</h1>'
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







































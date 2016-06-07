angular.module('myApp',[])
.controller('SomeController',function($scope){
	$scope.someModel={
		someValue:'hello computer'
	}
	$scope.someAction=function(){
		$scope.someModel.someValue='hello human,from parent';
	};
})
.controller('ChildController',function($scope){
	$scope.ChildAction=function(){
		$scope.someModel.someValue='hello human,from child';
	};
})
.controller('PeopleController',function($scope){
	$scope.people=[
		{name:'Air',city:'San Francisco'},
		{name:'Erik',city:'Seattle'}
	]
})
.controller("myCtrl", function($scope) {
    $scope.people ={
    	name:"liliang",
    	city:"china"
    }
})
.controller("EquationController", function($scope) {
    $scope.equation={};
    $scope.change=function(){
    	$scope.equation.output=parseInt($scope.equation.x)+2;
    };
})
.controller("CountController", function($scope) {
	$scope.increment=function(){
		$scope.count=$scope.count+1;
	};
    $scope.decrement=function(){
    	$scope.count=$scope.count-1;
    };
})
.controller("CityController", function($scope) {
	$scope.cities=[
		{name:'Seattle'},
		{name:'San Francisco'},
		{name:'Chicago'},
		{name:'NewYork'},
		{name:'Boston'}
	]
})
.controller("LotteryController", function($scope) {
	$scope.generateNumber=function(){
		return Math.floor(Math.random()*10+1);
	};
})
angular.module('myApp',[])
.controller('MyController',function($scope,$interpolate){
	//设置监听($watch用来监听邮件正文的变化)
	$scope.$watch('emailBody',function(body){
		if(body){
			var template=$interpolate(body);
			//将emailBody属性的值进行字符插值后的结果赋值给previewText属性
			$scope.previewText=template({to:$scope.to});
		}
	});
});







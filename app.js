var myApp = angular.module('myApp', []);

myApp.controller('myController', ['$scope', function($scope, $http){
	$scope.obj = {};
	$scope.obj.score1 = 0;
	$scope.obj.score2 = 0;
	$scope.obj.total = 0;
	$scope.obj.total2 = 0;

	$scope.addRight = function(){
		if($scope.obj.score1 == 11 || $scope.obj.score2 == 11){
			$scope.obj.score1 = 0;
			$scope.obj.score2 = 0;
		}
		$scope.obj.score1 ++;
		$scope.obj.total ++;
		if($scope.obj.total === 2){
			$scope.obj.total = 0;
			$scope.obj.total2 ++;
		}
	}
	$scope.addLeft = function(){
		if($scope.obj.score1 == 11 || $scope.obj.score2 == 11){
			$scope.obj.score1 = 0;
			$scope.obj.score2 = 0;
		}
		$scope.obj.score2 ++;
		$scope.obj.total ++;
		if($scope.obj.total === 2){
			$scope.obj.total = 0;
			$scope.obj.total2 ++;
		}
	}
	$scope.resetAll = function(){
		$scope.obj.score1 = 0;
		$scope.obj.score2 = 0;
	}
	var hold = 0;
	$scope.set = function(y){
		var x = x + `${hold++}`
		$scope.obj.x = y;
	}
}])

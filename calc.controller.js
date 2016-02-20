
angular.module('stressApp.controllers').controller('Calc', ['$scope', '$http', function($scope, $http){
		$scope.values= {
			meetings = "";
			labs = "";
			presentations = "";
			interviews = "";
		};
		$scope.total = 0;
		$scope.result = 0;

		$scope.calculate = function(total){
			$scope.result = total / 4;
		};
			
		};

	
		
}]);

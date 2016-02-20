
angular.module('stressApp.controllers').controller('Calc', ['$scope', '$http', function($scope, $http){
		$scope.isStudent = false;
		$scope.isEmployee = false;

		$scope.result = 'pass';
  
		$scope.submitResult = function(result) {
		    
		    alert(result)
		 };

		 $scope.change='data';

      $scope.getVal=function(){
	        console.log($scope.radio);
	        $scope.change=$scope.radio;
    	}


    	$scope.student = $scope.isStudent;
    	$scope.employedStudent = $scope.isEmployedStudent;
    	$scope.employee = $scope.isEmployee;



		$scope.isStudent = function(){
			$scope.isStudent = true;
			$scope.values = [{
				lectures : "",
				labs : "",
				recitations : "",
				midterms : "",
				quizes : "",
				finals : ""}
			];
		};

		$scope.isEmployee = function(){
			$scope.isEmployee = true;
			$scope.values=[{
				meetings:""}
			];
		};

		$scope.inputErrorMsg="input error.";
		$scope.validateInput = function(values){
			if (!(values < 10 || values > 0) {
				this.inputErrorMsg = inputErrorMsg;
				$scope.values = "";
			};


		};

		$scope.total = 0;
		$scope.result = 0;

		$scope.calculate = function(total){
			$scope.result = total / 4;
		};
			
};

	
		
}]);

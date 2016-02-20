var stressApp = angular.module('stressApp',[])
.controller('Calc', function($scope){
		$scope.isStudent = false;
		$scope.isEmployee = false;
		$scope.radioVal = '';
		

		$scope.result = 'pass';
  
// 		$scope.submitResult = function(result) {
		    
// 		    alert(result)
// 		    console.log(result);
// 		 };

// 		 $scope.change='data';

      $scope.getVal=function(){
	        console.log($scope.radioVal);
	        $scope.change=$scope.radioVal;
	        if($scope.change === "student") {
	        	$scope.isStudent = true;
	        }
    	}

// 		$scope.isStudent = function(){
// 			$scope.isStudent = true;
// 			// $scope.values = {
// 			// 	lectures = "";
			
// 			// 	labs = "";
// 			// 	recitations = "";
// 			// 	midterms = "";
// 			// 	quizes = "";
// 			// 	finals = "";
// 			// };

// 		};

// 		$scope.isEmployee = function(){
// 			$scope.isEmployee = true;
// 			// $scope.values={
// 			// 	meetings="";
// 			// };
// 		};

// 		$scope.inputErrorMsg="input error.";
// 		$scope.validateInput = function(values){
// 			if (values > 10 || values < 0) {
// 				this.inputErrorMsg = inputErrorMsg;
// 				$scope.values = "";
// 			};


// 		};

// 		$scope.total = 0;
// 		$scope.result = 0;

// 		$scope.calculate = function(total){
// 			$scope.result = total / 4;
// 		};
			
// };

	
		
});

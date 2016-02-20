var stressApp = angular.module('stressApp',[])
.controller('Calc', function($scope){
		$scope.isStudent = false;
		$scope.isEmployee = false;
		$scope.isEmployedStudent = false;
		$scope.radioVal = '';
		$scope.lab = 0;
		

		$scope.result = 'pass';
  
// 		$scope.submitResult = function(result) {
		    
// 		    alert(result)
// 		    console.log(result);
// 		 };

// 		 $scope.change='data';

	    $scope.change = function(){
          console.log($scope.radioVal);
          if($scope.radioVal === "student") {
          	$scope.isStudent = true;
          }
          else if($scope.radioVal === "employedStudent") {
	        	$scope.isEmployedStudent = true;
	        }
	        else if($scope.radioVal === "employee") {
	        	$scope.isEmployee = true;
	        }
      };

      $scope.inputLab = function(lab) {
      	$scope.lab = lab;
      	console.log($scope.lab);
      };
      console.log($scope.lab);


      $scope.inputLecture = function() {
      	console.log($scope.lecture);
      };
      $scope.inputRecitation = function() {
      	console.log($scope.lecture);
      };
      $scope.inputMidterm = function() {
      	console.log($scope.lecture);
      };
      $scope.inputQuiz = function() {
      	console.log($scope.lecture);
      };
      $scope.inputFinal = function() {
      	console.log($scope.lecture);
      };


      $scope.inputMeeting = function() {
      	console.log($scope.lecture);
      };
      $scope.inputLecture = function() {
      	console.log($scope.lecture);
      };






      $scope.submit=function(){
    		console.log("submit putting clicked");
		};

    

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

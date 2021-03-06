var stressApp = angular.module('stressApp',[])
.controller('Calc', function($scope){
		$scope.isStudent = false;
		$scope.isEmployee = false;
		$scope.isEmployedStudent = false;
		$scope.radioVal = '';
		$scope.lab = 0;
		$scope.meetings = 0;
		$scope.recitation = 0;
		$scope.lecture = 0;
		$scope.midterm = 0;
		$scope.finals = 0;
		$scope.quiz = 0;
		$scope.total = 0;
 		$scope.result = 0;
 		$scope.work = 0;
 		$scope.performance = 0;
 		$scope.taxes = 0;
 		$scope.optiony = [];
 		$scope.displayError = false;
		

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
	


	  $scope.inputLecture = function() {
      	console.log($scope.lecture);
      };
      $scope.inputLab = function() {
      	console.log($scope.lab);
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

      $scope.inputLab = function(lab) {
      	$scope.lab = lab;
      	console.log($scope.lab);
      };
      console.log($scope.lab);


      $scope.inputLecture = function(lecture) {
      	$scope.lecture = lecture;
      	console.log($scope.lecture);
      	$scope.isInvalidValue(lecture);
      };

      $scope.inputRecitation = function(recitation) {
      	$scope.recitation = recitation;
      	console.log($scope.recitation);
      };
      $scope.inputMidterm = function(midterm) {
      	$scope.midterm = midterm;
      	console.log($scope.midterm);
      };
      $scope.inputQuiz = function(quiz) {
      	$scope.quiz = quiz;
      	console.log($scope.quiz);
      };
      $scope.inputFinals = function(finals) {
      	$scope.finals = finals;
      	console.log($scope.finals);
      };


      $scope.inputMeetings = function(meetings) {
      	$scope.meetings = meetings;
      	console.log($scope.meetings);
      };

      $scope.inputWork = function(work) {
      	$scope.work = work;
      	console.log($scope.work);
      }

      $scope.inputPerformance = function(performance) {
      	$scope.performance = performance;
      	console.log($scope.performance);
      }

      $scope.inputTaxes = function(taxes) {
      	$scope.taxes = taxes;
      	console.log($scope.taxes);
      }

      $scope.getArray = function() {
      	var optiony = new Array($scope.lab,
		$scope.meetings,
		$scope.recitation,
		$scope.lecture,
		$scope.midterm,
		$scope.finals,
		$scope.quiz,
		$scope.work,
		$scope.performance,
		$scope.taxes);

		$scope.optiony = optiony;
		console.log("array of optiony: " + optiony);
      }

    $scope.isInvalidValue = function(value) {
    	if(parseInt(value) < 0) {
    		return true;
    	}
    	else {
    		return false;
    	}
    };

    $scope.anyChanges = function() {
    	if($scope.optiony.length < 1) {
    		return false;
    	}
    	else {
    		return true;
    	}
    };


	$scope.calculate = function(){
		$scope.getArray();
		var tmp=0;
		if ($scope.optiony.length < 1) {
			$scope.anyChanges();
		}
		for (var i = 0; i < $scope.optiony.length; i++) {
			if (parseInt($scope.optiony[i]) > 0) {
				tmp++;
				$scope.total += parseInt($scope.optiony[i]);
			}
		};
		$scope.result = parseInt($scope.total) / tmp;
		console.log("length of array: " + $scope.optiony.length);
		console.log("tmp: " + tmp);
		console.log("result after parsing: " + parseInt($scope.result));
	};




      $scope.submit=function(){
    		console.log("submit putting clicked");
    		$scope.calculate();
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

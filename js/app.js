var dietApp = angular.module("dietApp", ["firebase"])

	.controller("MenuController",  function($scope, $firebaseArray){

		// Access the Database
		var menu = new Firebase("https://dietjournalapp.firebaseio.com/Menu");

		// Create a handle in this scope 
		$scope.menu = $firebaseArray(menu);

		$scope.addItem = function() {
		    $scope.menu.$add({
		    Name: $scope.newItemName,
		    Fat: $scope.newItemFat,
		    Protein: $scope.newItemPro,
		    Calories: $scope.newItemCal
			});
			clearForm();
		};

		var clearForm = function(){
			$scope.newItemName = '';
			$scope.newItemPro = '';
			$scope.newItemCal = '';
			$scope.newItemFat = '';
		}; 

		$scope.showMenu = function(){
			menuFormHidden = !menuFormHidden;
		}

	})

	.controller("UserController", function($scope, $firebaseArray){

		var users = new Firebase("https://dietjournalapp.firebaseio.com/Users"); 
		$scope.users = $firebaseArray(users);

		$scope.addUser = function (){
			$scope.users.$add({
				FirstName: $scope.firstName,
				LastName: $scope.lastName
			});
			clearForm(); 
		};

		var clearForm = function(){
			$scope.firstName = "";
			$scope.lastName = ""; 
		};

	})
var dietApp = angular.module("dietApp", ["firebase"])

	.controller("MainController",  function($scope, $firebaseArray){

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
			clearUserMenu();
		};

		var clearUserMenu = function(){
			$scope.newItemName = '';
			$scope.newItemPro = '';
			$scope.newItemCal = '';
			$scope.newItemFat = '';
		};


		$scope.showMenu = function(){
			menuFormHidden = !menuFormHidden;
		};

		// USER FUNCTIONS
		var users = new Firebase("https://dietjournalapp.firebaseio.com/Users"); 
		$scope.users = $firebaseArray(users);

		$scope.addUser = function (){
			$scope.users.$add({
				FirstName: $scope.firstName,
				LastName: $scope.lastName, 
				CurrentWeight: $scope.currentWeight,
				TargetWeight: $scope.targetWeight,
				TargetProtein: $scope.targetProtein,
				TargetFat: $scope.targetFat,
				TargetCalories: $scope.targetCalories, 
				Journal: {}
			});
			clearForm(); 
		};

		var clearForm = function(){
			$scope.firstName = "";
			$scope.lastName = "";
			$scope.currentWeight = "";
			$scope.targetWeight = "";
			$scope.targetProtein = ""; 
			$scope.targetFat = ""; 
			$scope.targetCalories = ""; 
		};

		// JOURNAL FUNCTIONS

		var journal = new Firebase("https://dietjournalapp.firebaseio.com/Journal"); 
		$scope.journal = $firebaseArray(journal); 

		$scope.addJournalEntry = function(){
			console.log($scope.this);
			// $scope.journal.$add({
			// 	//User: $scope.newEntry,
			// 	Food: $scope.newEntry, 
			// 	Time: Date()
			// });
		};

		$scope.displayItemStats = function(index){
			console.log(index);
		};

	})


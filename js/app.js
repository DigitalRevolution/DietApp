var dietApp = angular.module("dietApp", ["firebase"])

	// dietApp.controller("UserController", ["$scope", "$firebaseObject",
	//   function($scope, $firebaseObject) {
	//     var users = new Firebase("https://dietjournalapp.firebaseio.com/Users");
	//     $scope.menu = $firebaseObject(ref); 
	//     console.log($scope.menu); 
	//   }
	// ]);

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

	});

			// $scope.addItem = function(e){
			// 	if (e.keyCode === 13 && $scope.name){
			// 		console.log("adding item to DB");
			// 		$scope.menu.$add({
			// 			name : "test item"
			// 		})
			// 	}
			// }

	
	

	//   var addItem = function(item){
	//   	
	//   }
	 	

      // myApp.controller("MyController", ["$scope", "$firebaseArray",
      //   function($scope, $firebaseArray) {
      //     //CREATE A FIREBASE REFERENCE
      //     var ref = new Firebase("https://dietjournalapp.firebaseio.com/");

      //     // GET ALL ITEMS AS AN ARRAY OF OBJECTS
      //     $scope.messages = $firebaseArray(ref);

      //     //ADD MESSAGE METHOD
      //     $scope.addMessage = function(e) {

      //       //LISTEN FOR RETURN KEY
      //       if (e.keyCode === 13 && $scope.msg) {
      //         //ALLOW CUSTOM OR ANONYMOUS USER NAMES
      //         var name = $scope.name || "anonymous";

      //         //ADD TO FIREBASE
      //         $scope.messages.$add({
      //           from: name,
      //           body: $scope.msg
      //         });

      //         //RESET MESSAGE
      //         $scope.msg = "";
      //       }
      //     }
      //   }
      // ]);
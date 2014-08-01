var app = angular.module("inspirationalistApp", ["firebase"]);

function myController($scope, $firebase) {

	var dataRef = new Firebase("https://inspirationalistapp.firebaseio.com/");
	$scope.interests = $firebase(dataRef);

	$scope.addPin = function() {
		$scope.interests.$add({
			"description": $scope.newDescription,
			"picture": $scope.newPicture,
			"video": $scope.newVideo
		});
		$scope.newDescription = "";
		$scope.newPicture = "";
		$scope.newVideo = "";
		$('#myModal').modal('hide');
	};

	$scope.setModalPicture = function(picture) {
			$scope.modalPicture = picture;

	}

	// $scope.interests.$on("loaded", function() {	
	// 	$scope.interests.$add(
	// 	{
	// 		description: "test description",
	// 		picture: "http://www.hollywoodreporter.com/sites/default/files/imagecache/modal_800/2014/05/carrey.jpg",
	// 	});
	// });
};

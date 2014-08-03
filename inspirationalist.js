var app = angular.module("inspirationalistApp", ["firebase"]);

function myController($scope, $firebase) {

	var dataRef = new Firebase("https://inspirationalistapp.firebaseio.com/");
	$scope.interests = $firebase(dataRef);

	$scope.addPin = function() {
		$scope.interests.$add({
			"description": $scope.newDescription,
			"picture": $scope.newPicture,
			"video": $scope.newVideo,
			"favorite": false,
		});
		$scope.newDescription = "";
		$scope.newPicture = "";
		$scope.newVideo = "";
		$('#myModal').modal('hide');
	};

	$scope.setModalPicture = function(picture) {
			$scope.modalPicture = picture;
	}

	$scope.clickFavorite = function(interest) {
		var toggleFavorite = $firebase(dataRef);
		console.log(interest.favorite);
		toggleFavorite.$update({favorite: !interest.favorite});
		console.log(interest.favorite);
	}
};

app.directive('myYoutube', function($sce) {
  return {
    restrict: 'EA',
    scope: { code:'='},
    replace: true,
    template: '<div style="width:100%;"><iframe style="overflow:hidden;height:100%;width:100%" width="100%" height="100%" src="{{url}}" frameborder="0" allowfullscreen></iframe></div>',
    link: function (scope) {
        console.log(scope.code);
        var x = scope.code;
        y = x.split("=")[1];
        console.log(y);
        scope.$watch('code', function (newVal) {
           if (y) {
               scope.url = $sce.trustAsResourceUrl("http://www.youtube.com/embed/" + y);
           }
        });
    }
  };
});
var app = angular.module('InspirationalistApp', ['firebase']);

app.controller('WinController', ["$scope", "$firebase", function($scope, $firebase) {

	var dataRef = new Firebase("https://winterest.firebaseio.com/");
		$scope.interests = $firebase(dataRef);
		$scope.addPin = function() {
		$scope.interests.$add ({
			picture: $scope.newPicture,
			description: $scope.newDescription,
			video: $scope.newVideo,


		});
	};
}]);

// 	$scope.interests.push = [
// 		{
// 			picture:"http://totalrocky.com/films/rocky/photos/rocky-butkus-dog-street.jpg",
// 			description:"Need inspiration?  Read about Sylvester Stallon's story about how the movie Rocky was created.",
// 			profilePicture:"images/profile.jpg",
// 			username:"DaviD",
// 			category:"Inspiration/Motivation",
// 		},
// 		{
// 			picture:"http://totalrocky.com/films/rocky/photos/rocky-butkus-dog-street.jpg",
// 			description:"TES TES TES",
// 			profilePicture:"images/profile.jpg",
// 			username:"DaviD",
// 			category:"Inspiration/Motivation",
// 		},
// 		{
// 			picture:"http://totalrocky.com/films/rocky/photos/rocky-butkus-dog-street.jpg",
// 			description:"Need inspiration?  Read about Sylvester Stallon's story about how the movie Rocky was created.",
// 			profilePicture:"images/profile.jpg",
// 			username:"DaviD",
// 			category:"Inspiration/Motivation",
// 		},
// 		{
// 			picture:"http://totalrocky.com/films/rocky/photos/rocky-butkus-dog-street.jpg",
// 			description:"Need inspiration?  Read about Sylvester Stallon's story about how the movie Rocky was created.",
// 			profilePicture:"images/profile.jpg",
// 			username:"DaviD",
// 			category:"Inspiration/Motivation",
// 		},
// 		{
// 			picture:"http://totalrocky.com/films/rocky/photos/rocky-butkus-dog-street.jpg",
// 			description:"Need inspiration?  Read about Sylvester Stallon's story about how the movie Rocky was created.",
// 			profilePicture:"images/profile.jpg",
// 			username:"DaviD",
// 			category:"Inspiration/Motivation",
// 		},
// 		{
// 			picture:"http://totalrocky.com/films/rocky/photos/rocky-butkus-dog-street.jpg",
// 			description:"Need inspiration?  Read about Sylvester Stallon's story about how the movie Rocky was created.",
// 			profilePicture:"images/profile.jpg",
// 			username:"DaviD",
// 			category:"Inspiration/Motivation",
// 		},
// 	]
// }
// );
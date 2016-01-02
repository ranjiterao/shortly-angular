angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links, Auth) {
  // Your code here'
  $scope.link = {};
  $scope.addLink = function () {
    //validate link
    Links.addOne({url: $scope.url});

    // $scope.url = '';
    $location.path("/links");
  };

  $scope.isAuth = function () {
    if (Auth.isAuth()) {
      $location.path('/shorten');
    } else {
      $location.path('/signin');
    }
  };

});

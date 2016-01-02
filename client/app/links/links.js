angular.module('shortly.links', [])


.controller('LinksController', function ($scope, $location, Links, Auth) {
  // Your code here
  $scope.data = {};
  $scope.user = 'b';
  $scope.hello = "goodbye";
  $scope.testLinks = ["http://www.yahoo.com", "banana"];

  Links.getAll().then(function (links) {
    $scope.data.links = links;
  });

  $scope.displayLinks = function () {
    console.log($scope.data.links, "links");
  };

  $scope.isAuth = function () {
    if (Auth.isAuth()) {
      $location.path('/links');
    } else {
      $location.path('/signin');
    }
  };
});

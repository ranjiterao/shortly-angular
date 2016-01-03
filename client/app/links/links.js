angular.module('shortly.links', [])


.controller('LinksController', function ($scope, $location, $window, Links, Auth) {
  // Your code here
  $scope.data = {};
  $scope.user = 'b';
  $scope.hello = "goodbye";
  $scope.testLinks = ["http://www.yahoo.com", "banana"];

  Links.getAll().then(function (links) {
    $scope.data.links = links;
  });

  // $scope.displayLinks = function () {
  //   console.log($scope.data.links, "links");
  // };

  $scope.goToLink = function($index){
    var urlObj = $scope.data.links[$index];
    $window.location.href = urlObj.code;
  };
});

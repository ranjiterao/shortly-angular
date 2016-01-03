angular.module('shortly.links', [])


.controller('LinksController', function ($scope, $location, $window, Links, Auth) {
  // Your code here
  $scope.data = {};
  $scope.user = 'b';
  $scope.hello = "goodbye";
  $scope.testLinks = ["http://www.yahoo.com", "banana"];

  Links.getAll().then(function (links) {
    $scope.data.links = links.sort(function (a, b) {
      return b.visits - a.visits;
    });
    // if ($scope.filter) {
    //   links.filter(function (link) {
    //     return link.title.includes($scope.filter);
    //   });
    // }
  });

  $scope.goToLink = function ($index) {
    var urlObj = $scope.data.links[$index];
    $window.location.href = urlObj.code;
  };
});

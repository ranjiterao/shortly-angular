angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links, Auth) {
  var rValidUrl = /^(?!mailto:)(?:(?:https?|ftp):\/\/)?(?:\S+(?::\S*)?@)?(?:(?:(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[0-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]+-?)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]+-?)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))|localhost)(?::\d{2,5})?(?:\/[^\s]*)?$/i;
  // Your code here'
  // $scope.link = {};
  $scope.addLink = function () {
    //validate link
    if (isValidUrl($scope.url)) {

      Links.addOne({url: $scope.url}).then(function () {
        Links.getAll().then(function (promise) {
          $location.path("/links");
        });
      });
      $scope.url = '';
    }
  };

  var isValidUrl = function (url) {
    return url.match(rValidUrl);
  };

  $scope.urlMessage = function () {
    if (!isValidUrl($scope.url)) {
      return "Is not a valid URL";
    }
  };
});

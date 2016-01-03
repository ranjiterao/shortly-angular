// do not tamper with this code in here, study it, but do not touch
// this Auth controller is responsible for our client side authentication
// in our signup/signin forms using the injected Auth service
angular.module('shortly.auth', [])

.controller('AuthController', function ($scope, $window, $location, Auth) {
  var validUsername = '^[a-z0-9_-]{3,15}$';
  var validPassword = '^.{4,8}$';

  $scope.signin = function () {
    Auth.signin($scope.user)
      .then(function (token) {
        $window.localStorage.setItem('com.shortly', token);
        $location.path('/links');
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  $scope.signup = function () {
    Auth.signup($scope.user)
      .then(function (token) {
        $window.localStorage.setItem('com.shortly', token);
        $location.path('/links');
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  var isValidPattern = function (string, regex) {
    return string.match(regex);
  };

  $scope.usernameMessage = function () {
    if ($scope.user && $scope.user.username) {
      if (!isValidPattern($scope.user.username, validUsername)) {
        return "Not a valid Username";
      } else {
        return "you're good";
      }
    }
  };

  $scope.passwordMessage = function () {
    if ($scope.user && $scope.user.password) {
      if (!isValidPattern($scope.user.password, validPassword)) {
        return "Not a valid Password";
      } else {
        return "you're good";
      }
    }
  };


});

var app = angular.module('gathrApp');

app.directive('showProfileDetail', function() {
  return {
    restrict: 'E',
    replace: false,
    templateUrl: "profile-temp.html"
  }
});

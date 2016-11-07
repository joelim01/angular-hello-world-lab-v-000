function MainController($scope) {
  $scope.year = "2001"
  $scope.name = "A Movie About Space but not Really"
}

angular
  .module("app", [])
  .controller("MainController", MainController)

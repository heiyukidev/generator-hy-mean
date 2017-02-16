(function(angular) {
  function controllerFn($scope) {
    $scope.message = " Hello There!";
  }
  controllerFn.$inject = ['$scope'];
  angular.module('indexTitle').controller('IndexTitleController', controllerFn);
})(angular);

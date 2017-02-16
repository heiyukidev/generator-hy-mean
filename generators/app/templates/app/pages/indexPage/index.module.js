(function(angular) {
  function configFn($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
    $stateProvider.state('index', {
      url: '/',
      templateUrl: './pages/indexPage/index.view.html'
    });
  }
  configFn.$inject = ['$stateProvider', '$urlRouterProvider'];

  function runFn() {

  }
  runFn.$inject = [];


  angular.module('index', ['ui.router','indexTitle']).config(configFn).run(runFn);
})(angular);

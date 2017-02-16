(function (angular) {

    'use strict';

    function direvtiveFN() {
        return {
            restrict: 'E',
            templateUrl: './components/indexTitle/indexTitle.view.html'
        }
    }
   angular.module('indexTitle').directive('indexview', direvtiveFN);

})(angular);

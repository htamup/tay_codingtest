'use strict';

angular.module('myApp.home', ['ngRoute'])

  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/home', {
      templateUrl: 'home/home.html',
      controller: 'HomeCtrl'
    });
  }])



  .controller('HomeCtrl', ['UserService', '$timeout', '$scope', function (UserService, $timeout, $scope) {

    var vm = this;

    $scope.topFive = [];
    vm.GetAllUser = GetAllUser;

    (function initController() {
      GetAllUser();
    })();

    function GetAllUser() {
      $scope.topFive =  ["GrahamCampbell","fabpot","weierophinney","rkh","josh"]; 
    }

  }]);

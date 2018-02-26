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
      vm.dataLoading = true;
      UserService.GetAll().then(function (users) {
        if (users) {
          $scope.topFive = users.slice(0, 5);
          console.log(vm.topFive)
        }
      });
    }

  }]);

'use strict';

angular.module('myApp.home', ['ngRoute'])

  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/home', {
      templateUrl: 'home/home.html',
      controller: 'HomeCtrl'
    });
  }])



  .controller('HomeCtrl', ['UserService' , '$timeout', function (UserService, $timeout) {

    var vm = this;

    vm.topFive = [];
    vm.GetAllUser = GetAllUser;

    (function initController() {
      GetAllUser();
    })();

    function GetAllUser() {
      vm.dataLoading = true;
      UserService.GetAll().then(function (users) {
        if (users) {
          vm.topFive = users.slice(0, 5);
          console.log(vm.topFive)
        }
      });
  }

  }]);

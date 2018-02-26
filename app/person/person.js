'use strict';

angular.module('myApp.person', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/person/:id', {
    templateUrl: 'person/person.html',
    controller: 'PersonCtrl'
  });
}])

.controller('PersonCtrl', ['UserService' ,'$route','$scope' ,function(UserService, $route,$scope) {

  console.log()


  var vm = this;

  vm.userName = $route.current.params.id;
  
  (function initController() {
    getUser();
  })();

  vm.getUser = getUser;

  function getUser(){
    console.log(vm.userName)
    UserService.GetByUsername(vm.userName).then(function (user) {
      if (user) {
        $scope.user = user ; 
      }
    })
  }




}]);
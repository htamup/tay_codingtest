(function () {
  'use strict';

  angular
      .module('myApp')
      .factory('UserService', UserService);

  UserService.$inject = ['$http'];
  function UserService($http) {
      var service = {};

      service.GetAll = GetAll;
      service.GetByUsername = GetByUsername;

      return service;
 
      
      function GetAll() {
          return $http.get('https://api.github.com/users').then(handleSuccess, handleError('Error getting all users'));
      }
 
      function GetByUsername(username) {
          return $http.get('https://api.github.com/users/' + username).then(handleSuccess, handleError('Error getting user by username'));
      }
 
      // private functions

      function handleSuccess(res) { 
          return res.data;
          console.log(res.data)
      }

      function handleError(error) {
          return function () {
              return { success: false, message: error };
          };
      }
  }

})();
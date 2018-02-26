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

      var baseUserUrl = 'https://api.github.com/users'
      
      function GetAll() {
          return $http.get('https://api.github.com/users').then(handleSuccess, handleError('Error getting all users'));
      }
 
      function GetByUsername(username) {
          return $http.get(baseUserUrl + username).then(handleSuccess, handleError('Error getting user by username'));
      }
 
      // private functions

      function handleSuccess(res) { 
          return res.data;
      }

      function handleError(error) {
          return function () {
              return { success: false, message: error };
          };
      }
  }

})();
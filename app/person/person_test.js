'use strict';

describe('myApp.person module', function() {

  beforeEach(module('myApp.person'));

  describe('person controller', function(){

    it('should ....', inject(function($controller) {
      //spec body
      var PersonCtrl = $controller('PersonCtrl');
      expect(PersonCtrl).toBeDefined();
    }));

  });
});
'use strict';

describe('myApp.person module', function() {

  beforeEach(module('myApp.person'));

  describe('person controller', function(){

    it('should ....', inject(function($controller) {
      //spec body
      var view2Ctrl = $controller('PersonCtrl');
      expect(view2Ctrl).toBeDefined();
    }));

  });
});
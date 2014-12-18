'use strict';

/* jasmine specs for controllers go here */
describe('PhoneCat controllers', function() {

describe('PhoneListCtrl', function() {  
  var scope,ctrl,$httpBackend;

  beforeEach(module('phonecatApp'));
  beforeEach(inject(function(_$httpBackend_, $rootScope, $controller){
    $httpBackend=_$httpBackend_;
    $httpBackend.expectGet('phones/phones.json').respond([{name: 'Nexus S'}, {name: 'Motorola DROID'}]);
    scope = $rootScope.$new();
    ctrl = $controller('PhoneListCtrl',{$scope:scope});

  }));

  it('should create "phones" model with 2 phone fetched from xhr', function() {
      expect(scope.phones).tobeUndefined();
  });  

});
});
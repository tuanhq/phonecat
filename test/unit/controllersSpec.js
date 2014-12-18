'use strict';

/* jasmine specs for controllers go here */
describe('PhoneCat controllers', function() {

describe('PhoneListCtrl', function() {
  var scope, ctr;

  beforeEach(module('phonecatApp'));

  beforeEach(inject(function() {
    scope = {};
    ctrl = $controller('PhoneListCtrl', {$scope:scope});
  }));

  it('should creat "phones" model with 3 phones', function(){
    expect(scope.phones.length).toBe(3);
  });


  it('should set set default value of orderProp model', function() {
     expect(scope.orderProp).toBe('age'); 
  }); 

});
});
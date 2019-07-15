var e= require('chai').expect;
var a=require('D://javascripts//all_programs.js').a;
var b=require('D://javascripts//all_programs.js').b;
var a1=require('D://javascripts//all_programs.js').a1;
var b1=require('D://javascripts//all_programs.js').b1;
var a2=require('D://javascripts//all_programs.js').a2;
var b2=require('D://javascripts//all_programs.js').b2;
var a3=require('D://javascripts//all_programs.js').a3;
var b3=require('D://javascripts//all_programs.js').b3;
describe('check array sorted or not',function(){
    it('insertion sort for intiger',function(){
      e(b).to.have.ordered.members(a);
    });
    it('bubble sort for intiger',function(){
        e(b1).to.have.ordered.members(a1);
      });
      it('insertion sort for string',function(){
        e(b2).to.have.ordered.members(a2);
      });
    it('bubble sort for string',function(){
        e(b3).to.have.ordered.members(a3);
      });

}) ;
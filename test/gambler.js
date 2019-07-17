var chai= require('chai').expect;
var a=require('D://javascripts//functional//gambler.js').s;
var b= require('D://javascripts//functional//gambler.js').g;
describe('gambler game',function(){
    it('checking stakes and goals are valid or not',function(){
        chai(a).to.be.lessThan(b);
    })
}) ;
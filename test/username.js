var e=require('chai').expect;
var n=require('D://javascripts//functional//first.js').n;
describe('username',function(){
    it('check username valid or not',function(){
        e(n).to.be.greaterThan(2);
    });
});
var e=require('chai').expect;
var n=require('D://javascripts//functional//flipcoin.js').n;
describe('flip coin',function(){
    it('check no is positive',function(){
        e(n).to.be.greaterThan(0);
    });
});
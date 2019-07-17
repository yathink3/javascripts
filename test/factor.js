var e=require('chai').expect;
var n=require('D://javascripts//functional//factors.js').n;
describe('factors',function(){
    it('check no is grater than or equal to 2',function(){
        e(n).to.be.greaterThan(1);
    });
});
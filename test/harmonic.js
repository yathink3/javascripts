var e=require('chai').expect;
var n=require('D://javascripts//functional//harmonic.js').n;
describe('harmonic no',function(){
    it('check no is grater than or equal to 1',function(){
        e(n).to.be.greaterThan(0);
    });
});
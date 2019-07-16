var e=require('chai').expect;
var n=require('D://javascripts//poweroftwo.js').n;
describe('power of two',function(){
    it('checking n is valid or not',function(){
        e(n).to.be.greaterThan(0); e(n).to.be.lessThan(31);
    })
})
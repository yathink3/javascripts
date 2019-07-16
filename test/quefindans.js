var e=require('chai').expect;
var n=require('D://javascripts//quefindans.js').n;
describe('que to find answer',function(){
    it('n is power of 2',function(){
       while(n%2==0){
           n=n/2;
       } 
       e(n).to.be.equal(1);
    });
});
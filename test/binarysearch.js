var e=require('chai').expect;
var arr=require('D://javascripts//algorithm//binsearch.js').arr;
describe('binary search',function(){
    it('array sorted or not',function(){
        e(arr).to.have.ordered.members(arr);
    });
});
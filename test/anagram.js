var should=require('chai').should();
var a=require('D://javascripts//anagram.js').a;
var b=require('D://javascripts//anagram.js').b;
describe('value should be not null',function(){
    it('check null or not',function(){
        a.should.be.not.null;
        b.should.be.not.null;
    })
});
var chai= require('chai'),assert=chai.assert,should=chai.should();
describe('valid or not',function(){
  var a=require('D://javascripts//gambler.js').s;
  var b= require('D://javascripts//gambler.js').g;
    it('it is number',function(){
      assert.typeOf(a,"number");
    })
    it('Both are not equal',function(){
    a.should.not.equal(b);
    })
}) 
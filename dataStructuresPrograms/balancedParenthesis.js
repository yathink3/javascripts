/********************************************************************************************************************
* @Execution : default node : cmd> balancedParenthesis.js
* @Purpose : to study the data structures
* @description :Take an Arithmetic Expression such as (5+6)∗(7+8)/(4+3)(5+6)∗(7+8)/(4+3) where parentheses are used to order the performance of operations. Ensure parentheses must appear in a balanced fashion.
* @overview : Simple Balanced Parentheses
* @author : yathin k <yathink3@gmail.com>
* @version : 1.0
* @since : 24-july-2019
*******************************************************************************************************************/


//importing stack modules
let stack = require('./utility/stack');
//importing readline-sync
let s = new stack();
let r = require('readline-sync');
//read an expression from user
let express = r.question("enter the arithmatic expression:");
/*
at first it splits the string into array and then passes to foreach loop after that,
if element is '(' push if element is ')' pop it out
 */
express.split('').forEach(element => {
    if (element === '(') s.push('(');
    else if (element === ')') s.pop();
});
//at last if the stack is empty that means expression is balanced else not balanced
if (s.isempty()) console.log('arithematic expression ' + express + " is balanced");
else console.log('arithematic expression ' + express + " is not balanced");
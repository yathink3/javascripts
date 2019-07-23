/*
3.Simple Balanced Parentheses
    a.Desc -> Take an Arithmetic Expression such as (5+6)∗(7+8)/(4+3)(5+6)∗(7+8)/(4+3) where parentheses are used to order the performance of operations. Ensure parentheses must appear in a balanced fashion.
    b.I/P -> read in Arithmetic Expression such as (5+6)∗(7+8)/(4+3)(5+6)∗(7+8)/(4+3) 
    c.Logic -> Write a Stack Class to push open parenthesis “(“ and pop closed parenthesis “)”. At the End of the Expression if the Stack is Empty then the Arithmetic Expression is Balanced. Stack Class Methods are Stack(), push(), pop(), peak(), isEmpty(), size()
    d.O/P -> True or False to Show Arithmetic Expression is balanced or not.
*/
//importing stack modules
let stack=require('./utility/stack');
//importing readline-sync
let s=new stack();
let r=require('readline-sync');
//read an expression from user
let express=r.question("enter the arithmatic expression:");
/*
at first it splits the string into array and then passes to foreach loop after that,
if element is '(' push if element is ')' pop it out
 */
express.split('').forEach(element=>{
    if(element==='(') s.push('(');
    else if(element===')') s.pop();
});
//at last if the stack is empty that means expression is balanced else not balanced
if(s.isempty()) console.log('arithematic expression '+express+" is balanced");
else console.log('arithematic expression '+express+" is not balanced");

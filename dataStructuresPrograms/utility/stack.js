/*
creating a class node which will used to store the data and down pointer
*/
class Node {
    constructor(data, down = null) {
        this.data = data,
            this.down = down
    }
}
/*
creating a class stack  which has several operations like push(),pop(),&isempty()
*/
module.exports = class Stack {
    //constructer to make head=null
    constructor() {
        this.top = null;
    }
    //push operation will add data to the top of the stack
    push(data) {
        let newNode = new Node(data);
        newNode.down = this.top;
        this.top = newNode;
    }

    //pop operation will pop the element at top returns the element
    pop() {
        if (!this.top) this.push('');
        else {
            let temp = this.top;
            this.top = this.top.down;
            return temp.data;
        }
    }
    //isempty operation will check wheather stack is empty or not
    isempty() {
        if (!this.top) return true;
        return false;
    }

}
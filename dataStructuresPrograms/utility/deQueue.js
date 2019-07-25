/*
creating a class node which will used to store the data and next pointer
*/
class Node {
    constructor(data) {
        this.data = data,
            this.next = null;
        this.pre = null;
    }
}
/*
creating a class queue which has several operations like insertat rear(),delete at front()
getArray(),isempty()
*/
module.exports = class DeQueue {
    //constructer to make font and rear to null
    constructor() {
        this.front = null;
        this.rear = null;
    }
    //insert operation will add data to the rearend of the Queue
    insert(data) {
        let newNode = new Node(data);
        if (!this.front) {
            this.front = newNode;
            this.rear = this.front;
        } else {
            newNode.pre = this.rear;
            this.rear.next = newNode;
            this.rear = newNode;
        }
    }
    //deletefront operation will delete the element  at front of the queue
    deleteFront() {
        //if(!this.front)   return;
        if (this.front === this.rear) this.rear = null;
        this.front = this.front.next;
    }
    //deleterear operation will delete the element  at rear of the queue
    deleteRear() {
        // if(!this.rear) return;
        if (this.front === this.rear) this.front = null;
        this.rear = this.rear.pre;
    }
    /*checkispali will check data in queue is palindrome or not
        this will check if the font and rear data not equal return false
        if they are equal then it calls delete front and delete rear
        this while loop continue till this.front !=null if it is null returns true
    */
    checkIsPali() {
        while (this.front && this.front != this.rear) {
            if (this.front.data != this.rear.data) return false;
            else {
                console.log(this.getArray());
                this.deleteFront();
                this.deleteRear();
            }

        }
        return true;
    }
    //getArray operation will returns the array format of queue
    getArray() {
        let temp = this.front;
        let arr = [];
        while (temp != this.rear.next) {
            arr.push(temp.data);
            temp = temp.next;
        }
        return arr;
    }
    //isempty operation will check wheather queue is empty or not
    isempty() {
        if (!this.front) return true;
        return false;
    }
    //it will return size of the queue 
    getSize() {
        let temp = this.front;
        let count = 0;
        while (temp) {
            temp = temp.next;
            count++;
        }
        return count;
    }

}
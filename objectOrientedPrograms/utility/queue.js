/*
creating a class node which will used to store the data,purpose and next pointer
*/
class Node {
    constructor(data) {
        this.data = data,
        this.next = null;
    }
}

/*
creating a class queue which has several operations like insert at rear(),delete at front()
getArray(),isempty()
*/
module.exports = class Queue {
    //constructer to make front and rear to null and assign amount=0
    constructor() {
        this.front = null;
        this.rear = null;
    }
    //insert operation will add data to the rear end of the Queue
    insert(data) {
        let newNode = new Node(data);
        if (!this.front) {
            this.front = newNode;
            this.rear = this.front;
        } else {
            this.rear.next = newNode;
            this.rear = newNode;
        }
    }
    //delete operation will delete the element  at front of the queue
    delete() {
        if (!this.front) return;
        let temp = this.front;
        this.front = this.front.next;
        return temp.data;
    }

    //getArray operation will returns the array format of queue
    getArray() {
        let temp = this.front;
        let arr = [];
        while (temp) {
            arr.push(temp.data);
            temp = temp.next;
        }
        return arr;
    }
    //sort operation will sort the linkedlist 
    sort(rank) {
        let temp1 = this.front;
        while (temp1.next) {
            let temp = this.front;
            while (temp.next) {
                if (rank.indexOf(temp.data.split(" ")[0]) < rank.indexOf(temp.next.data.split(" ")[0])) {
                    let value = temp.data;
                    temp.data = temp.next.data;
                    temp.next.data = value;
                }
                temp = temp.next;
            }
            temp1 = temp1.next;
        }
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
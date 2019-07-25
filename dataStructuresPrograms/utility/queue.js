/*
creating a class node which will used to store the data,purpose and next pointer
*/
class Node {
    constructor(data, pur = 0) {
        this.data = data,
            this.pur = pur;
        this.next = null;
    }
}
/*
creating a class queue which has several operations like insert at rear(),delete at front()
getArray(),isempty(),getamount()
*/
module.exports = class Queue {
    //constructer to make front and rear to null and assign amount=0
    constructor(amount = 0) {
        this.front = null;
        this.rear = null;
        this.amount = amount;
    }
    //insert operation will add data to the rear end of the Queue
    insert(data, pur = 0) {
        let newNode = new Node(data, pur);
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
    //bank will manages the cashcounter
    bank() {
        while (this.getSize() != this.ifAllW()) {
            if (this.front.pur === 'D') this.amount = parseInt(this.amount) + parseInt(this.front.data);
            else if (this.front.pur === 'W' && this.amount < this.front.data) this.insert(this.front.data, this.front.pur);
            else this.amount = parseInt(this.amount) - parseInt(this.front.data);
            this.delete();
        }
    }

    //getArray operation will returns the array format of queue
    getArray() {
        let temp = this.front;
        let arr = [];
        while (temp) {
            if (temp.pur == 0) arr.push(temp.data);
            else arr.push([temp.data, temp.pur]);
            temp = temp.next;
        }
        return arr;
    }
    //isempty operation will check wheather queue is empty or not
    isempty() {
        if (!this.front) return true;
        return false;
    }
    getAmount() {
        return this.amount;
    }
    //Ifallw checking whether all are in queue for withdraw perpose or not
    ifAllW() {
        let temp = this.front;
        let c = 0;
        while (temp) {
            if (temp.pur === 'W' && this.amount < temp.data) c++;
            temp = temp.next;
        }
        return c;
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
/*
creating a class node which will used to store the data and next pointer
*/
class Data {
    constructor(name, shares, price) {
        this.name = name;
        this.shares = shares;
        this.price = price;
    }
}
class Node {
    constructor(name=null, shares=null, price=null) {
        this.data = new Data(name, shares, price);
        this.next = null;
    }
}
/*
creating a class linked list which has several operations like push(),add,insertat()
& pop(),delete(),deletelastnode(),sort() then orderedcheck(),ispresentdeleteoradd(),deletelist()
*/
module.exports = class LinkedList {
    //constructer to make head=null
    constructor() {
        this.head = null;
    }
    //push operation will add data to the front of the linkedlist
    push(name, shares, price) {
        let newNode = new Node(name, shares, price);
        newNode.next = this.head;
        this.head = newNode;
    }
    //add operation will add data to the end of the list
    add(name, shares, price) {
        let newNode = new Node(name, shares, price);
        if (!this.head) this.head = newNode;
        else {
            let temp = this.head;
            while (temp.next) temp = temp.next;
            temp.next = newNode;
        }
    }
    //pop operation will delete the element element at front end returns the element
    pop() {
        if (!this.head) return;
        let temp = this.head;
        this.head = this.head.next;
        return temp.data;
    }
    //delete operation will delete the item which is specified by the user
    delete(name, shares, price) {
        let temp = this.head;
        if (this.head.data === data)
            this.head = temp.next;
        else {
            let temppre = null;
            while (temp.data !== data) {
                temppre = temp;
                temp = temp.next;
            }
            temppre.next = temp.next;
        }
    }
    //deletelastnode operation will delete the last node of the linked list 
    deleteLastNode() {
        let temp = this.head;
        if (!temp.next) this.temp = null;
        else {
            while (!temp.next.next) temp = temp.next;
            temp.next = null
        }
    }
    //getArray operation will returns the array format of linkedlist
    getArray() {
        let temp = this.head;
        let arr = [];
        while (temp) {
            arr.push(temp.data);
            temp = temp.next;
        }
        return arr;
    }

    //deletelist operation will delete the entire linked list  
    deleteList() {
        this.head = null;
    }
    //isempty operation will check wheather linkedlist is empty or not
    isempty() {
        if (!this.head) return true;
        return false;
    }
}
/*
creating a class node which will used to store the data and next pointer
*/
class Node {
    constructor(data, next = null) {
        this.data = data,
            this.next = next
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
    push(data) {
        let newNode = new Node(data);
        newNode.next = this.head;
        this.head = newNode;
    }
    //add operation will add data to the end of the list
    add(data) {
        let newNode = new Node(data);
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
    delete(data) {
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
    //sort operation will sort the linkedlist 
    sort() {
        let temp1 = this.head;
        while (temp1.next) {
            let temp = this.head;
            while (temp.next) {
                if (parseInt(temp.data) > parseInt(temp.next.data)) {
                    let value = temp.data;
                    temp.data = temp.next.data;
                    temp.next.data = value;
                }
                temp = temp.next;
            }
            temp1 = temp1.next;
        }
    }
    /*
    it will check the user enterd element if it is present remove it ,
    if it is not present add appropriate position
    */
    orderedCheck(data) {
        let temp = this.head;
        while (temp) {
            if (temp.data === data) {
                this.delete(data);
                return console.log('removed data ' + data);
            }
            temp = temp.next;
        }
        this.add(data);
        this.sort();
        return console.log('added data ' + data);
    }
    /*
    it will check the user enterd element if it is present remove it ,
    if it is not present add at the end of linked list
    */
    isPresentDeleteOrAdd(data) {
        let temp = this.head;
        while (temp) {
            if (temp.data === data) {
                this.delete(data);
                return console.log('removed data ' + data);
            }
            temp = temp.next;
        }
        this.add(data);
        return console.log('added data ' + data);
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
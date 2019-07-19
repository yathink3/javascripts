/*
creating a class node which will used to store the data,purpose and next pointer
*/
class Node{
    constructor(data,pur){
        this.data = data,
        this.pur=pur;
        this.next = null;
    }
}
/*
creating a class queue which has several operations like insertat rear(),delete at front()
getArray(),isempty(),getamount()
*/
module.exports=class Queue{
    //constructer to make head=null
    constructor(amount=0){
        this.front = null;
        this.rear = null;
        this.amount=amount;
    }
    //insert operation will add data to the rearend of the Queue
    insert(data,pur){  
        let newNode = new Node(data,pur);
        if(!this.front){ 
             this.front = newNode;
             this.rear = this.front;
        }
        else{
            this.rear.next=newNode;
            this.rear=newNode;
        }
    }
    //pop operation will delete the element  at front of the queue
    delete(){
        if(!this.front)   return;
        if(this.front.pur==='D') this.amount=parseInt(this.amount)+parseInt(this.front.data);
        else this.amount=parseInt(this.amount)-parseInt(this.front.data);
        this.front = this.front.next;
    }
    //getArray operation will returns the array format of queue
    getArray(){
        let temp = this.front;
        let arr=[];
        while (temp) {
            arr.push([temp.data,temp.pur]);
            temp = temp.next;
        }
        return arr;
    }
    //isempty operation will check wheather queue is empty or not
    isempty (){
        if(!this.front) return true;
        return false;
    }
    getamount(){
        return this.amount;
    }
    
}

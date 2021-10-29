//Expected program 1 --> 2 --> 3 --> 4 --> 5
//Al final no usé esta estructura de datos porque no supe como emplearla :'(
class node{
    constructor(name,alias,number){
        this.name=name;
        this.alias=alias;
        this.number=number;
        this.next=null;
    }
}

module.exports=class singlyLL{
    constructor(){
        this.head=null;
        this.tail=this.head;
        this.length=0;
        return this;
    }

    //Adds an item at the end of the list
    append(name,alias,number){
        if (this.length===0) {
            this.head={
                name,
                alias,
                number,
                next:this.tail
            };
            this.tail=this.head;
            this.length++
            return this;
        }else{
            const newNode=new node(name,alias,number);
            this.tail.next=newNode;
            this.tail=newNode;
            this.length++;
            return this;
        }

    }

    //Adds an item at the beginning of the list
    prepend(name,alias,number){
        if (this.length===0) {

            return this.append(name,alias,number);

        }else{

            const currentHead=this.head;
            const newNode=new node(name,alias,number);
            this.head=newNode;
            this.head.next=currentHead;
            this.length++;
            return this;

        }
    }

    //Inserts an element at an specific index
    insert(name,alias,number,index){
        if (typeof(index)!==typeof(1)) {
            return 'Index is not a number'
        }else{
            if (index>this.length-1) {
                return this.append(name,alias,number); //Index is bigger than the list length. The element will be added to the end of the list
            }
            const accurateItem=this.getIndex(index-1); //(index-1) is passes to the funtion because is the correct way to add an element at the desired index. For instance:      1 --> 2 --> 4 --> 5  Will be resolved like this:  1 --> 2 --> 4 --> 5  And then  1 --> 2        4 --> 5 So, finnaly, we'll have 1 --> 2 --> 3 --> 4 --> 5
            //Don't write in this line                                                                                                                                                                                                   3 --- /\                       |--> 3- /\
            const newNode= new node(name,alias,number);
            newNode.next=accurateItem.next;
            accurateItem.next=newNode;
            this.length++;
            return this;
        }
    }

    update(name,alias,number,index){
        if (typeof(index)!==typeof(1)) {
            return 'Index is not a number'
        }else if (this.length===0 || index>this.length-1) {
            return this.append(name,alias,number)
        }else{
            const accurateItem=this.getIndex(index);
            accurateItem.name=name;
            accurateItem.alias=alias;
            accurateItem.number=number;
            return this
        }

    }

    getIndex(index){
        let i=0
        let currentNode=this.head;

        while (i!==index) {
           currentNode=currentNode.next
           i++ 
        }
        return currentNode
    }

    //Removes an element by the index
    remove(index){
        if(typeof(index)!==typeof(1) || index>(this.length-1)   || index<0){
            return undefined;
        } else if(index===0){
           this.head=this.head.next;
           this.length--;
           return this; 
        }
        const fakeBridge=this.getIndex(index);
        const previousIndex=this.getIndex(index-1);
        previousIndex.next=fakeBridge.next;
        this.length--;
        return this;
    }
}
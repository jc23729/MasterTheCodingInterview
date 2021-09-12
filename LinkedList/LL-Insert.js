class Node {
     constructor(value){
         this.value = value
         this.next = null
     }
 }
 
 class LinkedList {
     constructor(value) {
         const newNode = new Node(value)
         this.head = newNode
         this.tail = this.head
         this.length = 1
     }
 
     push(value) {
         const newNode = new Node(value)
         if (!this.head) {
             this.head = newNode
             this.tail = newNode
         } else {
             this.tail.next = newNode
             this.tail = newNode
         }
         this.length++
         return this
     }
 
     pop() {
        if(!this.head) return undefined
        let temp = this.head
        let pre = this.head
        while(temp.next) {
            pre = temp
            temp = temp.next
        }
        this.tail = pre
        this.tail.next = null
        this.length--
        if(this.length === 0) {
            this.head = null
            this.tail = null
        }
        return temp
    }
 
     unshift(value) {
         const newNode = new Node(value)
         if(!this.head) {
             this.head = newNode
             this.tail = newNode
         } else {
             newNode.next = this.head
             this.head = newNode
         }
         this.length++
         return this
     }
 
     shift() {
         if(!this.head) return undefined
         let temp = this.head
         this.head = this.head.next
         this.length--
         if(this.length === 0) {
             this.tail = null
         }
         temp.next = null
         return temp
     }
 
     get(index) {
         if(index < 0 || index >= this.length) return undefined
         let temp = this.head
         for(let i = 0; i < index; i++) {
             temp = temp.next
         }
         return temp
     }
 
     set(index, value) {
         let nodeToUpdate = this.get(index)
         if(nodeToUpdate) {
             nodeToUpdate.value = value
             return true
         }
         return false
     }
//  insert a new node at the specified position
     insert(index, value) {
        //  if it is out of the possible range less than 0 or greater than length return false
         if (index < 0 || index > this.length) return false
          if(index === this.length) return this.push(value)
          if(index === 0) return this.unshift(value)
        //   our new node 
         const newNode = new Node(value)
        //  temp node to hold the previous node or spot we want to insert
         const temp = this.get(index - 1)
        //  we want our new node to point to the node that was at the index we want to insert
         newNode.next = temp.next
        //  we want temp.next to point to our new node
         temp.next = newNode
        //  increment the length by 1
          this.length++
          return true
      }
 }
 
 let myLinkedList = new LinkedList(0)
 myLinkedList.push(2)
// // Building constructor
// class Linkedlist extends Component {
//     constructor(value) {
//         const newNode = new Node(value)
//         this.head = newNode
//         this.tail = this.head
//         this.length = 1
//     }
// }

// let myLink = new Linkedlist(4)

// create new Node
// create new Node
// create new Node
// create new Node

// constructor (value) {..}
// push(value) {..}  adds to the end of the list
// unshift(value) {..} adds to the beginning of the list
// insert (index, value) {..}  adds to the index of the value


// class Linkedlist extends Component {
//     constructor(value) {create new Node }
//     push(value) {create new Node
//     // add to the end of the list}
//         unshift(value) {create new Node
//         // adds Nodeto the beginning}
//             insert(index, value) {create new Node insert Node}
// }



// USING PUSH METHOD

class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
     }
    


class Linkedlist{
    constructor(value) {
        const newNode = new Node(value)
        this.head = newNode
        this.tail = this.head
        this.length = 1
    }
}

push(value) {
    const newNode = new Node(value)
    if(!this.head) {
        this.head = newNode
        this.tail = this.head
    } else {
        this.tail.next = newNode
        this.tail = newNode
    }
    this.length++
    return this 
}
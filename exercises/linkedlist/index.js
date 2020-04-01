// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
    constructor(data, next = null) {
        this.data = data
        this.next = next
    }
}

class LinkedList {
    constructor() {
        this.head = null
    }

    insertFirst(data) {
        // My soln (working)
        // if (this.head) {
        //     const newNode = new Node(data, this.head)
        //     this.head = newNode
        // } else {
        //     this.head = new Node(data)
        // }

        // Course soln
        this.head = new Node(data, this.head)
    }

    size() {
        // // My soln
        // if(!this.head) {
        //     return 0
        // }

        // let counter = 1
        // let currentNode = this.head

        // while(currentNode.next) {
        //     counter++
        //     currentNode = currentNode.next
        // }

        // return counter

        // Course Soln
        let counter = 0
        let node = this.head

        while(node) {
            counter++
            node = node.next
        }

        return counter
    }

    getFirst() {
        return this.head
    }

    getLast() {
        let node = this.head

        while(node.next) {
            node = node.next
        }

        return node
    }
}

module.exports = { Node, LinkedList };

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
        if (this.head) {
            const newNode = new Node(data, this.head)
            this.head = newNode
        } else {
            this.head = new Node(data)
        }
    }

    size() {

    }
}

module.exports = { Node, LinkedList };

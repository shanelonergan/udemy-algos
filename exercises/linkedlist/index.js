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
        // do we need this?
        if(!this.head) {
            return null
        }

        let node = this.head

        while(node.next) {
            node = node.next
        }

        return node
    }

    clear() {
        this.head = null
    }

    removeFirst() {
        if (!this.head) {
            return
        }

        this.head = this.head.next
    }

    removeLast() {
        // do we need this?
        if(!this.head) {
            return null
        }

        if(!this.head.next) {
            this.head = null
            return
        }

        let node = this.head.next
        let previous = this.head

        while(node.next) {
            previous = node
            node = node.next
        }

        previous.next = null
    }

    insertLast(data) {
        const last = this.getLast()
        const newNode = new Node(data)

        if(last) {
            last.next = newNode
        } else {
            this.head = newNode
        }
    }

    getAt(int) {
        if(int > this.size()){
            return null
        } else if (int === 0) {
            return this.head
        }

        let counter = 0
        let node = this.head

        while(node) {
            counter++
            node = node.next

            if(counter === int) {
                return node
            }
        }

        // Course soln
        // let counter = 0
        // let node = this.head

        // while(node {
        //     if(counter === index) {
        //         return node
        //     }
        //     counter++
        //     node = node.next
        // })

        // return null
    }

    removeAt(int) {
        // My soln
        // if(!this.head) {
        //     return
        // }
        // if (int === 0) {
        //     this.head = this.head.next
        // }
        // if (int > this.size()) {
        //     return null
        // }

        // let counter = 0
        // let node = this.head
        // let previous

        // while(node.next) {
        //     counter++
        //     previous = node
        //     node = node.next

        //     if(counter === int) {
        //         previous.next = node.next
        //     }
        // }

        // Course soln
        if(!this.head) {
            return
        }
        if (int === 0) {
            this.head = this.head.next
        }

        const previous = this.getAt(int - 1)
        if (!previous || !previous.next) {
            return
        }
        previous.next = previous.next.next

    }

    insertAt(data, int) {

        if(!this.head) {
            this.head = new Node(data)
            return
        }
        if (int === 0) {
            this.head = new Node(data, this.head)
            return
        }

        const previous = this.getAt(int - 1) || this.getLast()
        const current = this.getAt(int)
        if (!previous) {
            this.head = new Node (data, current)
            return
        }
        previous.next = new Node(data, current)
    }
}

module.exports = { Node, LinkedList };

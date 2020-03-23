// --- Directions
// Implement a Queue datastructure using two stacks.
// *Do not* create an array inside of the 'Queue' class.
// Queue should implement the methods 'add', 'remove', and 'peek'.
// For a reminder on what each method does, look back
// at the Queue exercise.
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.add(2);
//     q.peek();  // returns 1
//     q.remove(); // returns 1
//     q.remove(); // returns 2

const Stack = require('./stack');

class Queue {

    constructor(){
        this.data = new Stack
    }

    add(record) {
        this.data.push(record)
    }

    remove() {
        const temp = new Stack
        while(this.data.peek()) {
            temp.push(this.data.pop())
        }

        const item = temp.pop()

        while(temp.peek()) {
            this.data.push(temp.pop())
        }

        return item
    }

    peek() {
        const temp = new Stack
        while(this.data.peek()) {
            temp.push(this.data.pop())
        }

        const item = temp.peek()

        while(temp.peek()) {
            this.data.push(temp.pop())
        }

        return item
    }

}

class Queue2() {

    constructor() {
        this.first = new Stack
        this.second = new Stack
    }

    add(record) {
        this.first.push(record)
    }

    remove() {
        while(this.first.peek()) {
            const record = this.first.pop()
            this.second.push(record)
        }

        const record = this.second.pop

        while(this.second.peek()) {
            this.first.push(this.second.pop())
        }

        return record
    }
}

module.exports = Queue;

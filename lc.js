class Queue {
    constructor() {
        this.items = []
    }

    enqueue(element) {
        this.items.unshift(element)
    }

    dequeue() {
        let removed = this.items.pop()
        return removed
    }

    isEmpty() {
        return this.items.length === 0
    }

    front() {
        if (this.items.length === 0) return null
        return this.items[this.items.length - 1]
    }
}

const queue = new Queue 

queue.enqueue('dolphin')
queue.enqueue('whale')
queue.enqueue('orca')

console.log(queue);

class Stack {
    constructor() {
        this.items = []
    }

    push(element) {
        this.items.push(element)
    }

    pop() {
        return this.items.pop()
    }

    peek() {
        if (this.items.length === 0) return null 
        return this.items[this.items.length - 1]
    }
}


const stack = new Stack

stack.push('whale')
stack.push('orca')
stack.push('dolphin')


console.log(stack.peek());
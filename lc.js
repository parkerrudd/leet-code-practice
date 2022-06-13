class MinStack {
   constructor() {
       this.stack = []
   }
   
   push(element) {
       this.stack.push(element)
   }
   
   pop() {
       return this.stack.pop()
   }
   
   top() {
       return this.stack[this.stack.length - 1]
   }
   
   getMin() {
       let min = this.stack[0]
       this.stack.forEach(element => {
           if (element < min) {
               min = element
           }
       })
       return min
   }
}

const minStack = new MinStack 

minStack.push(-2)
minStack.push(0)
minStack.push(-3)

console.log(minStack.top())
//Asked by Google and many other big tech companies

// queue.push(1)
// queue.push(2) //adds elements to the end of the queue
// queue.peek() //gets the element at the front of the queue
// queque.pop() //removes the element at the front of the que
// queue.empty() //returns true or false based on if it is empty or not

// stack vs queque

// Stack: Last in First Out (think stack of plates)
// Queue: First in First Out (think line of people)

//How do we make a stack behave like a queue?
//pop elements from stack1 to stack2

// stack1          stack2
//   3               1
//   2               2    
//   1               3

//   then delete the last element of stack2 which would be 1; now it is acting like a queque
//   to add, add it to stack1
//   stack2 is for deleting


//implement a queue using stacks

const MyQueue = () => {
  this.pushStack = new Stack() //adding
  this.popStack = new Stack() //deleting
}

MyQueue.prototype.push = function(x) {
  this.pushStack.push(x)
}

MyQueue.prototype.pop = function() {

  if(this.popStack.empty()) {
    while (!this.pushStack.empty()) {
      this.popStack.push(this.pushStack.pop())
    }
  }

  return this.popStack.pop()
}

MyQueue.prototype.peek = function() {

  if(this.popStack.empty()) {
    while(!this.pushStack.empty()) {
      this.popStack.push(this.pushStack.pop())
    }
  }

  return this.popStack.peek()
}

MyQueue.prototype.empty = function() {
  return this.pushStack.empty() && this.popStack.empty()
}
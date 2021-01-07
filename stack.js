// Stack

// 4 <- stackpointer
// 3
// 2
// 1

// pop() <- removes the top element of the stack
// push() <- adds an element to the top of the stack

// Last in First Out data structure: because we are always dealing with elements at the top of the structure

//use a size var to keep track of the "index" of the stack
//5 methods commonly used in stacks:
// 1. push()
//   update size var to increase by one
// 2. pop()
//   update size var to decrease by one, return removed element
// 3. peek()
//   returns the element at the top of the stack
//   use size-1
// 4. size()
//   returns the amount of elements in the stack
//   return size var
// 5. empty()
      // checks the stack, if there are no elements, returns false, if there is an element returns false
      // check if size is 0
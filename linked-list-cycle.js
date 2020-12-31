// common question asked by many big companies
//You are given a function hasCycle()
//which takes in a linked list called head
//determine if that linked list is a cycle (return true or false)

//consider a loop 1 -> 2-> 3-> 4-> 5-> (pointing back to 1)
// if you have a slow(moves 1 node) and fast pointer(moves 2 nodes) 
//check to see if they ever line up on the same node again

const hasCycle = (head) => {
  let fastPointer = head
  let slowPointer = head

  while(fastPointer !== null && slowPointer !== null) {
    fastPointer = fastPointer.next.next
    slowPointer = slowPointer.next

    if (fastPointer === slowPointer) {
      return true
    }
  }

  return false

};
//Interesting, running this code in a repl, when one creates a cyclical linked list it successfully returns true
//however if the linked list does NOT have a cycle, it errors out 
// because 'Cannot read property 'next' of null at hasCycle' (fastpointer.next.next)


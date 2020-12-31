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

  while(fastPointer !== null && fastPointer.next !== null) {
    fastPointer = fastPointer.next.next
    slowPointer = slowPointer.next

    if (fastPointer === slowPointer) {
      return true
    }
  }

  return false

};

//For testing
let Node = function(value) {
  return { value: value, next: null };
};

let nodeA = Node('A');
let nodeB = nodeA.next = Node('B');
let nodeC = nodeB.next = Node('C');
let nodeD = nodeC.next = Node('D');
let nodeE = nodeD.next = Node('E');
// hasCycle(nodeA); // => false
nodeE.next = nodeB;
hasCycle(nodeA); // => true
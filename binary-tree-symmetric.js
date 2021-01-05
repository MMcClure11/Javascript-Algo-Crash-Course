//Amazon Algo problem
//Given a binary tree, and a function isTreeSymmetric
//return true if it a mirror of itself and false if it is not

//Recursion: a method of solving a problem where the solution depends on small instances of the same problem

const isSymmetric = (root) => {

  if(root === null) {
    return true
  }

  return isMirror(root.left, root.right)
}

const isMirror = (tree1, tree2) => {

  if(tree1 === null || tree2 === null) {
    return tree1 === tree2
  }

  if(tree1.val !== tree2.val) {
    return false
  }

  return isMirror(tree1.left, tree2.right) && isMirror(tree1.right, tree2.left)
}
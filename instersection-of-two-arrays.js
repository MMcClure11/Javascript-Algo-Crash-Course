// find the common elements between two arrays

// nums1 = [1,2,2,1]
// nums2 = [2,2]
// Output: [2]

// The Set object lets you store unique values of any type, whether primitive values or object references.
// The add() method appends a new element with a specified value to the end of a Set object.
// The has() method returns a boolean indicating whether an element with the specified value exists in a Set object or not.
// The Array.from() static method creates a new, shallow-copied Array instance from an array-like or iterable object.

let intersection = function(nums1, nums2) {

  let firstSet = new Set()

  for(let num of nums1) {
    firstSet.add(num)
  }

  let intersectionSet = new Set()

  for(let num of nums2) {

    if(firstSet.has(num)) {
      intersectionSet.add(num)
    }
    
  }

  return Array.from(intersectionSet)

}

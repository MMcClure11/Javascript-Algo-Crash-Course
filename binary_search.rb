#Goal: obtain O(lg(n)) binary search algorithm instead on O(n) which we might get if using built in methods

#specify an arr_size so we can reuse it
#To run this file: ruby binary_search.rb

#Two ways to write out the O(lg(n)) binary search algorithm, iteratively and recursively
#the iterative solution uses less space than the recursive version

#ITERATIVE BINARY SEARCH, continuously divide problem in half is how we get that O(lg(n))
def binary_search_iter(arr, el)
  max = arr.length - 1
  min = 0

  while min <= max #know that if the size difference between the min and the max is 0 or negative, we've gone through the whole array and did not find the element
    mid = (min + max) / 2
    if arr[mid] == el
      return mid
    elsif arr[mid] > el #if the mid is greater than element looking for, discount right side and focus on left
      max = mid - 1
    else #covers remaining logic, if mid is less than element looking for, discount left and focus on right
      min = mid + 1
    end
  end

  return nil
end
#return nil if not found, return for when we do find it, statements that change the conditions of the loop
#to push it towards breaking the loop
#to make sure we are not in an infinite loop, each iteration lowers max or raises min value which pushes us closer to breaking the loop
#eventually will break the loop and return nil or return the mid value


arr_size = 1000
r = Random.new

search_arr = Array.new(arr_size) do
  r.rand(arr_size)
end.sort
#to use binary search it has to be sorted
search_num = r.rand(arr_size)
#pretty good probability that the value is inside this array, but ok chance it is not
#so running it multiple times we can see worst and non-worst case scenarios

puts "Looking for #{search_num}"
puts
#LINEAR INDEX SEARCH
#Ruby index method O(n) linear search, returns nil if cannot find that num, or the index it was found at
puts "Ruby #index O(n)"
resi = search_arr.index(search_num)
puts resi.nil? ? "Could not find #{search_num}" : "Found #{search_arr[resi]} at index #{resi}"
#want to make sure that we found the right number for when we right our own methods

puts

puts "Binary Search Iterative O(lg(n))"
resbi = binary_search_iter(search_arr, search_num)
puts resbi.nil? ? "Could not find #{search_num}" : "Found #{search_arr[resbi]} at index #{resbi}"
#Note: we may not find the number at the same index every single time
#because there may be duplicates of the search_num in the search_array (Side effect of using a random number generator to populate it)
#AND because of the two different ways that linear vs binary search through the array
#linear searches left to right, and binary doesn't, you might find the correct number at a different index
#it is acceptable because it is returning the correct solution
#because both found A valid index with that number in it


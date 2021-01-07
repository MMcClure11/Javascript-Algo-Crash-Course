#Goal: obtain O(lg(n)) binary search algorithm instead on O(n) which we might get if using built in methods

#specify an arr_size so we can reuse it
#To run this file: ruby binary_search.rb

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

#LINEAR INDEX SEARCH
#Ruby index method O(n) linear search, returns nil if cannot find that num, or the index it was found at
puts "Ruby #index O(n)"
resi = search_arr.index(search_num)
puts resi.nil? ? "Could not find #{search_num}" : "Found #{search_arr[resi]} at index #{resi}"
#want to make sure that we found the right number for when we right our own methods


#Two ways to write out the O(lg(n)) binary search algorithm, iteratively and recursively
#the iterative solution uses less space than the recursive version
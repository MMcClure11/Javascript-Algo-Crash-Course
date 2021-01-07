#Goal: obtain O(lg(n)) binary search algorithm instead on O(n) which we might get if using built in methods

#specify an arr_size so we can reuse it

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

#Ruby index method O(n) linear search, returns nil if cannot find that num, or the index it was found at
puts "Ruby #index O(n)"
resi = search_arr.index(search_num)
puts resi.nil? ? "Could not find #{search_num}" : "Found #{search_arr[resi]} at index #{resi}"
#want to make sure that we found the right number for when we right our own methods

#Goal: obtain O(lg(n)) binary search algorithm instead on O(n) which we might get if using built in methods

#specify an arr_size so we can reuse it

arr_size = 1000
r = Random.new

search_arr = Array.new(arr_size) do
  r.rand(arr_size)
end

search_num = r.rand(arr_size)
#pretty good probability that the value is inside this array, but ok chance it is not
#so running it multiple times we can see worst and non-worst case scenarios

#Ruby index method

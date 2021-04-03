# Part 1. Given an integer return the largest possible integer made out of its digits
# assume positive numbers only and 0 is not included

# Part 2. Make the function take in a second optional argument that is a list of digits 
# in the order for the integer to be sorted in. 

defmodule NumberSort do

  @default_order ~w(9 8 7 6 5 4 3 2 1)

  def numberSort(num, order \\ @default_order) do 
    num
    |> Integer.to_string()
    |> String.split("", trim: true)
    |> Enum.sort(&(compare_num?(&1, &2, order)))
    |> Enum.join()
    |> String.to_integer()
  end

  defp compare_num?(a, b, order) do 
    Enum.find_index(order, &(&1 == a)) < Enum.find_index(order, &(&1 == b))
  end
end

IO.puts NumberSort.numberSort(1352) # 5321
IO.puts NumberSort.numberSort(38467) # 87643
order = ~w(3 4 5 2 1 7 6 8 9)
IO.puts NumberSort.numberSort(1352, order) # 3521
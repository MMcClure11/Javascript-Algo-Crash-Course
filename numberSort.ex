# Part 1. Given an integer return the largest possible integer made out of its digits
# assume positive numbers only and the integer does not start with 0.

# Part 2. Make the function take in a second optional argument that is a list of digits 
# in the order for the integer to be sorted in. 

defmodule NumberSort do

  @moduledoc """
  Documentation for `NumberSort`.
  """

  @default_order ~w(9 8 7 6 5 4 3 2 1 0)

  @doc """
  Orders the given `integer` to be the largest possible number. 
  A custom `order` may be provided, which will be used for sorting.
  
  ## Examples
  
      iex> NumberSort.numberSort(1352)
      5321
      
      iex> order = ~w(3 4 5 2 1 7 6 8 9)
      ...> NumberSort.numberSort(1352, order)
      3521
      """

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
IO.puts NumberSort.numberSort(384067) # 876430
order = ~w(3 4 5 2 1 7 6 0 8 9)
IO.puts NumberSort.numberSort(1352, order) # 3521
IO.puts NumberSort.numberSort(38467, order) # 34768
IO.puts NumberSort.numberSort(384067, order) # 347608


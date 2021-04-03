# Part 1. Given an integer return the largest possible integer made out of its digits
# assume positive numbers only and 0 is not included

defmodule NumberSort do
  def numberSort(num) do 
    num
    |> Integer.to_string()
    |> String.split("", trim: true)
    |> Enum.sort(:desc)
    |> Enum.join()
    |> String.to_integer()
  end
end

IO.puts NumberSort.numberSort(1352) # 5321
IO. puts NumberSort.numberSort(38467) # 87643
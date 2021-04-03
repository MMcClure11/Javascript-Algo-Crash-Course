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

defmodule Alphabetize do
  @moduledoc """
  Documentation for `Alphabetize`.
  """

  @default_alphabet ~w(a b c d e f g h i j k l m n o p q r s t u v w x y z)

  @doc """
  Alphabetizes the given `string`. A custom `alphabet` may be provided, which
  will be used for sorting.
  
  ## Examples
  
      iex> Alphabetize.alphabetize("newaperio")
      "aeeinoprw"
      
      iex> alphabet = ~w(n b c d e f g h i j k l m a o p q r s t u v w x y z)
      ...> Alphabetize.alphabetize("newaperio", alphabet)
      "neeiaoprw"
      
  """
  #sort: This function uses the merge sort algorithm. 
  #The given function should compare two arguments, 
  #and return true if the first argument precedes or is in the same place as the second one.
  def alphabetize(string, alphabet \\ @default_alphabet) do
    string
    |> String.split("")
    # |> Enum.sort(&compare_alpha(&1, &2, alphabet))
    |> Enum.sort(fn (a, b) -> compare_alpha(a, b, alphabet) end)
    |> Enum.join()
  end
#returns true or false for each pair of letters for if the index of the first is less than the index of the second
  defp compare_alpha(a, b, alphabet) do
    Enum.find_index(alphabet, fn x -> x == a end) < Enum.find_index(alphabet, &(&1 == b))
  end
end

IO.puts Alphabetize.alphabetize("newaperio")
# "aeeinoprw"
alphabet = ~w(n b c d e f g h i j k l m a o p q r s t u v w x y z)
IO.puts Alphabetize.alphabetize("newaperio", alphabet)
# "neeiaoprw"

# To run file: $ elixir alphabetize.ex

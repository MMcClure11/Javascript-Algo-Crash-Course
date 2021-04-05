
# defmodule Alphabetize do
#   @moduledoc """
#   Documentation for `Alphabetize`.
#   """

#   #Elixir developers often use module attributes when they wish to make a value more visible or resusable
#   #https://elixir-lang.org/getting-started/module-attributes.html
#   #sigils, which are one of the mechanisms provided by the language for working with textual representations. Sigils start with the tilde (~) character which is followed by a letter (which identifies the sigil) and then a delimiter; optionally, modifiers can be added after the final delimiter.
#   #The ~w sigil is used to generate lists of words (words are just regular strings). Inside the ~w sigil, words are separated by whitespace.
#   #https://elixir-lang.org/getting-started/sigils.html
#   @default_alphabet ~w(a b c d e f g h i j k l m n o p q r s t u v w x y z)

#   @doc """
#   Alphabetizes the given `string`. A custom `alphabet` may be provided, which
#   will be used for sorting.
  
#   ## Examples
  
#       iex> Alphabetize.alphabetize("newaperio")
#       "aeeinoprw"
      
#       iex> alphabet = ~w(n b c d e f g h i j k l m a o p q r s t u v w x y z)
#       ...> Alphabetize.alphabetize("newaperio", alphabet)
#       "neeiaoprw"
      
#   """
#   #sort: This function uses the merge sort algorithm. Which means it would be O (n log n).
#   #The given function should compare two arguments, 
#   #and return true if the first argument precedes or is in the same place as the second one.
#   def alphabetize(string, alphabet \\ @default_alphabet) do
#     string
#     |> String.split("")
#     # |> Enum.sort(&compare_alpha(&1, &2, alphabet))
#     |> Enum.sort(fn (a, b) -> compare_alpha(a, b, alphabet) end)
#     |> Enum.join()
#   end
# #returns true or false for each pair of letters for if the index of the first is less than the index of the second
#   defp compare_alpha(a, b, alphabet) do
#     Enum.find_index(alphabet, fn x -> x == a end) < Enum.find_index(alphabet, &(&1 == b))
#   end
# end

# IO.puts Alphabetize.alphabetize("newaperio")
# # "aeeinoprw"
# alphabet = ~w(n b c d e f g h i j k l m a o p q r s t u v w x y z)
# IO.puts Alphabetize.alphabetize("newaperio", alphabet)
# # "neeiaoprw"

# # To run file: $ elixir alphabetize.ex



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
  def alphabetize(string, alphabet \\ @default_alphabet) do
    string
    |> String.split("")
    |> Enum.sort(&compare_alpha?(&1, &2, alphabet))
    |> Enum.join()
  end

  defp compare_alpha?(a, b, alphabet) do
    Enum.find_index(alphabet, &(&1 == a)) < Enum.find_index(alphabet, &(&1 == b))
  end
end

IO.puts Alphabetize.alphabetize("learnelixir") # aeeiillnrrx
alphabet = ~w(n b c d e f g h i j k x l m a o p q r s t u v w y z)
IO.puts alphabet
IO.puts Alphabetize.alphabetize("learnelixir", alphabet) # neeiixllarr


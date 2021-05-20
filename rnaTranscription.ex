# https://exercism.io/tracks/elixir/exercises/rna-transcription/solutions/774c49b5d0a74120b85cc854e8ef96d5

# Exercism - Easy

# Given a DNA strand, return its RNA complement (per RNA transcription).

# Both DNA and RNA strands are a sequence of nucleotides.

# The four nucleotides found in DNA are adenine (A), cytosine (C), guanine (G) and thymine (T).

# The four nucleotides found in RNA are adenine (A), cytosine (C), guanine (G) and uracil (U).

# Given a DNA strand, its transcribed RNA strand is formed by replacing each nucleotide with its complement:

# G -> C
# C -> G
# T -> A
# A -> U

defmodule RnaTranscription do
  @doc """
  Transcribes a character list representing DNA nucleotides to RNA

  ## Examples

  iex> RnaTranscription.to_rna('ACTG')
  'UGAC'
  """

  @spec to_rna([char]) :: [char]
  def to_rna(dna) do
    map = %{
      ?C => ?G,
      ?G => ?C,
      ?T => ?A,
      ?A => ?U
    }
    Enum.map(dna, fn char -> map[char] end)
  end
end

# To run file: $ elixir rnaTranscription.ex
IO.puts RnaTranscription.to_rna('ACTG') #'UGAC'

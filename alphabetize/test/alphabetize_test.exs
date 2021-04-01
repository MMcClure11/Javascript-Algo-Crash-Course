defmodule AlphabetizeTest do
  use ExUnit.Case
  doctest Alphabetize

  test "greets the world" do
    assert Alphabetize.hello() == :world
  end
end

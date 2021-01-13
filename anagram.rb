#Given two strings s and t, write a function to determine if t is an anagram of s.
#run file ruby anagram.rb

def is_anagram(s, t)
  puts clean_string(s) === clean_string(t)
end

def clean_string(string)
  return string.split('').sort().join('')
end

is_anagram("anagram", "nagaram") #true
is_anagram("rat", "car") #false
#Given two strings s and t, write a function to determine if t is an anagram of s.
#run file ruby anagram.rb
#can shorten runtime by first checking if lengths are equal or not

#Time complexity: O(nlogn)
# assume n is the length of s, sorging costs O(nlogn) and comparing two strings costs O(n)
#sorting time dominates and overall time  complexity is O(nlogn)

#Space complexity: O(1)
#could improve by using a hash map:
  #time complexity would be O(n) because accesssing the counter table is a constant time operation
  #space complexity: O(1) because table's size stays constant no matter how large n is

def is_anagram(s, t)
  if s.length != t.length
    puts "False by length"
  end
  puts clean_string(s) == clean_string(t)
end

def clean_string(string)
  # return string.split('').sort.join('')
  return string.chars.sort
end

def hash_anagram(s, t)
  puts false if s.size != t.size
  puts true if s.empty? && t.empty?

  hash = Hash.new(0)

  s.each_char {|letter| hash[letter] += 1}

  t.each_char do |letter|
    if hash[letter]
      hash[letter] -= 1
    else
      puts false
    end
  end
  puts hash.all? {|k,v| v == 0}
end

is_anagram("anagram", "nagaram") #true
is_anagram("rat", "car") #false
is_anagram("fsfs", "fafafafa") #false

hash_anagram("anagram", "nagaram")
hash_anagram("rat", "car")
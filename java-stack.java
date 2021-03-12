/*
3/11/2021 Part 1/2 Confluent HackerRank challenge, must solve with java 7 or 8

Java Stack
Given a list of strings of bracket charactes: {}(),
the string of brackets is balanced under the folowwing conditions:

1. It is the empty string.
2. If strings a and b are balanced, then ab is balanced. 
3. If string a is balanced, the (a) and {a} are balanced. 

Write a class that determines whether the brackets in each string are balanced and returns
true if the string is balanced, or false if it is not. 

Example 0 

s = ["{}()", "{()}","({()})"]
s[0] exhibits condition 2 above. "{}" and "()" are balanced so "{}()"is balanced. return true
s[1] exhibits condition 3 above. "()" is balanced, so "{()}" is balanced. return true
s[2] exhibits condition 3 above. so "({())})" is balanced. return true
*/


/*
3/11/2021 Part 1/2 Confluent HackerRank challenge, must solve with java 7 or 8

Java Stack
Given a list of strings of bracket characters: {}(),
the string of brackets is balanced under the folowwing conditions:

1. It is the empty string.
2. If strings a and b are balanced, then ab is balanced. 
3. If string a is balanced, the (a) and {a} are balanced. 

Write a class that determines whether the brackets in each string are balanced and returns
true if the string is balanced, or false if it is not. 

Example 0 

s = ["{}()", "{()}","({()})"]
s[0] exhibits condition 2 above. "{}" and "()" are balanced so "{}()"is balanced. Return true.
s[1] exhibits condition 3 above. "()" is balanced, so "{()}" is balanced. Return true.
s[2] exhibits condition 3 above. so "({())})" is balanced. Return true.

Example 1 

s = ["{}(", "({)}", "((", "}{"]
s[0] rarr 2. "{}(" is an unbalanced string due to the open "(". Return false. 
s[1] rarr 2. "({)}" is an unbalanced string due to ")" before "{" has been closed. Return false.
s[2] rarr 2. "((" is an unbalanced string because neither "(" is closed. Return false.
s[3] rarr 2. "}{" is an unbalanced string because "}" is not closed. Return false. 

Function Description
The provided code contains the declaration for a class named Solution with a main method that does the following:
 - creates a Parser Object
 - Reads an unknown number of strings from stdin
 - Passes each string as an argument to the Parser object's isBalanced method and prints value 
  returned by the method on a new line

Complete the function isBalanced in the editor below. 

isBalanced has the following parameters:
  string s: a string of characters to check for balance
  Returns: 
    bool: a boolean that denotes whether the string is balanced:
      true if the string is balanced
      false if it is not

Constraints
  - Each string consist only of the characters {, }, (, )
  - Each string has fewer than 50 characters.
*/

// import java.util;

// class Parser {
//   public static boolean isBalanced(String s) {
//     Stack<Character> stack = new Stack<Character>();
//     if((s.length() & 1) == 1) return false;
//     for(int i = 0; i < s.length(); i++) {
//       char c = s.charAt(i);
//       if(c == '(' || c == '{') {
//         stack.push(c);
//       } else if (c == ')') {
//         if(stack.isEmpty() || stack.pop() != '(') {
//           return false;
//         }
//       } else if (c == '}') {
//         if(stack.isEmpty() || stack.pop() != '{') {
//           return false;
//         }
//       }
//     }
//     return true;
//   }
// }

//Passes 4/4 of the given HackerRank tests

// class Solution {
//   public static void main(String[] args){
//     Parser parser = new Parser();
//     Scanner in = new Scanner(Stystem.in);

//     while (in.hasNext()) {
//       System.out.println(parser.isBalanced(in.next()));
//     }
//   }
// }
// The above is part of the given solution class which I did not change at all


import java.util.*;
class BalancedParenthensies {

  public static void main(String args[]) {

      System.out.println(balancedParenthensies("{(a,b)}"));
      System.out.println(balancedParenthensies("{(a},b)"));
      System.out.println(balancedParenthensies("{)(a,b}"));
  }

  public static boolean balancedParenthensies(String s) {
      Stack<Character> stack  = new Stack<Character>();
      for(int i = 0; i < s.length(); i++) {
          char c = s.charAt(i);
          if(c == '[' || c == '(' || c == '{' ) {     
              stack.push(c);
          } else if(c == ']') {
              if(stack.isEmpty() || stack.pop() != '[') {
                  return false;
              }
          } else if(c == ')') {
              if(stack.isEmpty() || stack.pop() != '(') {
                  return false;
              }           
          } else if(c == '}') {
              if(stack.isEmpty() || stack.pop() != '{') {
                  return false;
              }
          }

      }
      return stack.isEmpty();
  }
}
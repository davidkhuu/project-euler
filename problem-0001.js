// Project Euler
// Problem 1 - Multiples of 3 and 5
// If we list all the natural numbers below 10 that are multiples of 3 or 5,
// we get 3, 5, 6 and 9. The sum of these multiples is 23.

// Find the sum of all the multiples of 3 or 5 below 1000.

// Author:  David Khuu
// Date:    May 20, 2016

function natural(num) {
  var answer = 0;

  for (var i = 1; i <= num; i++) {
    // Check if the current number is divisible by 3 or 5
    if (i % 3 == 0 || i % 5 == 0) {
      // If it is, add it to the current running sum
      answer += i;
    }
  }

  return answer;
}

console.log(natural(1000));

//////////////////////////////////////////////////////////////////
// CODE WARS //
//////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////
// Shortest Word

// Simple, given a string of words, return the length of the shortest word(s).
// String will never be empty and you do not need to account for different data types.

function findShort(s){
  var wordArray = s.split(' ');

  var newArray = wordArray.map(x => x.length);

  var counter = 1000;

  for(var i = 0; i < newArray.length; i++) {
    if (newArray[i] < counter) {
      counter = newArray[i];
    }
  }
return counter;
}

//////////////////////////////////////////////////////////////////
// Fake Binary
// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

// function fakeBin(x){
//   var arr = x.split('');
//
//   var newArray = [];
//
//   for(var i = 0; i < arr.length; i++) {
//     if (arr[i] >= 5) {
//       newArray.push(1);
//     } else {
//       newArray.push(0);
//     }
//   }
//   console.log(newArray.join('')) ;
// }
//
// fakeBin('983642238964');

// Other peoples solution
// function fakeBin(x) {
//     return x.split('').map(n => n < 5 ? 0 : 1).join('');
// }

//////////////////////////////////////////////////////////////////
// Invert Values

// Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.

// function invert(array) {
//   let newArray = [];
//   for(var i = 0; i < array.length; i++) {
//      if(array[i] === 0){
//        newArray.push(array[i]);
//      } else {
//        newArray.push(arrar[i] * -1);
//      }
//    }
//    return newArray;
// }

//////////////////////////////////////////////////////////////////
// Is this a triangle?
//
// Implement a method that accepts 3 integer values a, b, c. The method should return true if a triangle can be built with the sides of given length and false in any other case.
//
// (In this case, all triangles must have surface greater than 0 to be accepted).

// Triangle Inequality Theorem states that the sum of two side lengths of a triangle is always greater than the third side

// function isTriangle(a,b,c) {
//   if((a + b) > c && (b + c) > a && (a + c) > b && a > 0 && b > 0 && c > 0) {
//     return true;
//   } else {
//     return false;
//   }
// }

//////////////////////////////////////////////////////////////////
// Number of people in the bus
//
// There is a bus moving in the city, and it takes and drop some people in each bus stop.
//
// You are provided with a list (or array) of integer arrays (or tuples). Each integer array has two items which represent number of people get into bus (The first item) and number of people get off the bus (The second item) in a bus stop.
//
// Your task is to return number of people who are still in the bus after the last bus station (after the last array). Even though it is the last bus stop, the bus is not empty and some people are still in the bus, and they are probably sleeping there :D
//
// Take a look on the test cases.
//
// Please keep in mind that the test cases ensure that the number of people in the bus is always >= 0. So the return integer can't be negative.
//
// The second value in the first integer array is 0, since the bus is empty in the first bus stop.

// var number = function(busStops){
//   var counter = 0;
//
//   for(var i = 0; i < busStops.length; i++) {
//     counter += busStops[i][0];
//     counter -= busStops[i][1];
//   }
//
//   return counter;
// }

//////////////////////////////////////////////////////////////////
// Sum of positive
//
// You get an array of numbers, return the sum of all of the positives ones.
//
// Example [1,-4,7,12] => 1 + 7 + 12 = 20
//
// Note: if there is nothing to sum, the sum is default to 0.

// function positiveSum(arr) {
//   var sum = 0;
//
//   for(var i = 0; i < arr.length; i++) {
//     if (arr[i] > 0) {
//       sum += arr[i];
//     }
//   }
//
//   return sum;
// }

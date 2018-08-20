//////////////////////////////////////////////////////////////////
// CODE WARS //
//////////////////////////////////////////////////////////////////


//////////////////////////////////////////////////////////////////
// The Coupon Code

// Your online store likes to give out coupons for special occasions. Some customers try to cheat the system by entering invalid codes or using expired coupons.
// Write a function called checkCoupon to verify that a coupon is valid and not expired. If the coupon is good, return true. Otherwise, return false.
// A coupon expires at the END of the expiration date. All dates will be passed in as strings in this format: "June 15, 2014"

function checkCoupon (enteredCode, correctCode, currentDate, expirationDate) {
  var curDate = new Date(currentDate);
  var expDate = new Date(expirationDate);

  if (enteredCode === correctCode && curDate <= expDate) {
    return true;
  } else {
    return false;
  }
}

// Other peoples code...
function checkCoupon (enteredCode, correctCode, currentDate, expirationDate){
  return enteredCode === correctCode && Date.parse(expirationDate) >= Date.parse(currentDate)
}

//////////////////////////////////////////////////////////////////
// Make a function that does arithmetic!

// Given two numbers and an arithmetic operator (the name of it, as a string), return the result of the two numbers having that operator used on them.
// a and b will both be positive integers, and a will always be the first number in the operation, and b always the second.
// The four operators are "add", "subtract", "divide", "multiply".

function arithmetic(a, b, operator){
  switch (operator) {
    case "add":
        return a + b;
    case "subtract":
        return a - b;
    case "multiply":
        return a * b;
    case "divide":
        return a / b;
  }
}

//////////////////////////////////////////////////////////////////
// Square Every Digit

// You are asked to square every digit of a number.
// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.
// Note: The function accepts an integer and returns an integer

function squareDigits(num){
  var numArray = num.toString().split('');

  var squaredArray = [];

  numArray.map(x => {
    squaredArray.push(x * x);
  });

  var totalNumber = squaredArray.join('');

  return parseInt(squaredArray.join(''));

}

//////////////////////////////////////////////////////////////////
// Square(n) Sum

// Complete the squareSum/square_sum/SquareSum method so that it squares each number passed into it and then sums the results together.

function squareSum(numbers){

  var squared = []; // set an empty array

  var squaredNums = numbers.map( x => {
    squared.push( x * x );  // mapped thru numbers array &&
  }); // push squared numbers to empty squared array

  return squared.reduce((a, b) => a + b, 0);
  // reduced the squared array by adding every element together
}

// Other solution
function squareSum(numbers) {
  return numbers.reduce((s,a)=>s+a*a,0);
}

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

function fakeBin(x){
  var arr = x.split('');

  var newArray = [];

  for(var i = 0; i < arr.length; i++) {
    if (arr[i] >= 5) {
      newArray.push(1);
    } else {
      newArray.push(0);
    }
  }
  return newArray.join('');
}

fakeBin('983642238964');

// Other persons solution
function fakeBin(x) {
    return x.split('').map(n => n < 5 ? 0 : 1).join('');
}

//////////////////////////////////////////////////////////////////
// Invert Values

// Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.

function invert(array) {
  let newArray = [];

  for (var i = 0; i < array.length; i++) {
     if(array[i] === 0){
       newArray.push(array[i]);
     } else {
       newArray.push(arrar[i] * -1);
     }
   }
   return newArray;
}

//////////////////////////////////////////////////////////////////
// Is this a triangle?
//
// Implement a method that accepts 3 integer values a, b, c. The method should return true if a triangle can be built with the sides of given length and false in any other case.
//
// (In this case, all triangles must have surface greater than 0 to be accepted).

// Triangle Inequality Theorem states that the sum of two side lengths of a triangle is always greater than the third side

function isTriangle(a,b,c) {
  if((a + b) > c && (b + c) > a && (a + c) > b && a > 0 && b > 0 && c > 0) {
    return true;
  } else {
    return false;
  }
}

//////////////////////////////////////////////////////////////////
// Number of people in the bus

// There is a bus moving in the city, and it takes and drop some people in each bus stop.
// You are provided with a list (or array) of integer arrays (or tuples). Each integer array has two items which represent number of people get into bus (The first item) and number of people get off the bus (The second item) in a bus stop.
// Your task is to return number of people who are still in the bus after the last bus station (after the last array). Even though it is the last bus stop, the bus is not empty and some people are still in the bus, and they are probably sleeping there :D
// Please keep in mind that the test cases ensure that the number of people in the bus is always >= 0. So the return integer can't be negative.
// The second value in the first integer array is 0, since the bus is empty in the first bus stop.

var number = function(busStops){
  var counter = 0;

  for(var i = 0; i < busStops.length; i++) {
    counter += busStops[i][0];
    counter -= busStops[i][1];
  }

  return counter;
}

//////////////////////////////////////////////////////////////////
// Sum of positive

// You get an array of numbers, return the sum of all of the positives ones.
// Example [1,-4,7,12] => 1 + 7 + 12 = 20
// Note: if there is nothing to sum, the sum is default to 0.

function positiveSum(arr) {
  var sum = 0;

  for(var i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      sum += arr[i];
    }
  }
  return sum;
}

//////////////////////////////////////////////////////////////////
// Return Negative

// In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?

function makeNegative(num) {
  if(num < 0) {
    return num;
  } else {
    return num * -1;
  }
}

// Refactored with ternary operator
function makeNegative(num) {
  return num < 0 ? num : num * -1;
}

// Other persons code
function makeNegative(num) {
  return -Math.abs(num);
}

//////////////////////////////////////////////////////////////////
// Keep up the hoop

// Alex just got a new hula hoop, he loves it but feels discouraged because his little brother is better than him
// Write a program where Alex can input (n) how many times the hoop goes round and it will return him an encouraging message :)
// If Alex gets 10 or more hoops, return the string "Great, now move on to tricks".
// If he doesn't get 10 hoops, return the string "Keep at it until you get it".

function hoopCount (n) {
   return n < 10 ? "Keep at it until you get it" : "Great, now move on to tricks";
}

//////////////////////////////////////////////////////////////////
// Keep hydrated

// Nathan loves cycling & knows it is important to stay hydrated. He drinks 0.5 litres of water per hour of cycling.
// You get given the time in hours and you need to return the number of litres Nathan will drink, rounded to the smallest value.

function litres(time) {
  return Math.floor(time * .5);
}

//////////////////////////////////////////////////////////////////
// Reversed Strings

// Complete the solution so that it reverses the string value passed into it.

function solution(str){
  return str.split('').reverse().join('');
}

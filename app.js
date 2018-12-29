//////////////////////////////////////////////////////////////////
// CODE WARS //
//////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////
// Fibonacci

function fibonacci(position) {

  if (position < 3) {
    return 1
  } else {
    return (fibonacci(position - 1) + fibonacci(position - 2))
  }
}

console.log(fibonacci(20))
//////////////////////////////////////////////////////////////////
// Binary Search

// function binarySearch(numArray, key) {
//   var middleIdx = Math.floor(numArray.length / 2);
//   var middleElem = numArray[middleIdx];

//   if (middleElem === key) return true;
//   else if (middleElem < key && numArray.length > 1) {
//     return binarySearch(numArray.splice(middleIdx, numArray.length), key);
//   }
//   else if (middleElem > key && numArray.length > 1) {
//     return binarySearch(numArray.splice(0, middleIdx), key);
//   }
//   else return false;
// }

// binarySearch([5, 7, 12, 16, 36, 39, 42, 56, 71], 56);

//////////////////////////////////////////////////////////////////
// Two Sum

// function twoSum(numArray, sum) {
//   // return every pair of numbers from numArray that adds up to sum
//   // return an array of arrays
//   // may reuse numbers from numArray

//   // define array to put pairs into
//   var sumArray = [];
//   // push every number we interate through into hashtable
//   var hash = [];

//   // loop through all numbers in numArray
//   for (var i = 0; i < numArray.length; i++) {
//     // define the current number in the array
//     var currentNumber = numArray[i];
//     // define counterpart as diff between sum and current #
//     var counterpart = sum - currentNumber;
//     // if counterpart exists in the hashtable...
//     // push the array of pairs into sumArray
//     if (hash.indexOf(counterpart) !== -1) {
//       sumArray.push([currentNumber, counterpart])
//     }
//     // push the currentNumber into hashtable no matter what
//     hash.push(currentNumber)
//   }
//   console.log(sumArray)
// }

// twoSum([40, 11, 19, 17, -12], 28)

//////////////////////////////////////////////////////////////////
// Mean, Median, Mode

// function getAll(array) {
//   // call other three functions
//   // return object which has mean, median, mode included
//   console.log({
//     mean: getMean(array),
//     median: getMedian(array),
//     mode: getMode(array)
//   })
// }

// function getMean(array) {
//   var counter = 0;

//   for (var i = 0; i < array.length; i++) {
//     counter += array[i]
//   }

//   return (Math.floor(counter / array.length))
// }

// function getMedian(array) {
//   var sortedArray = array.sort(function (a, b) { return a - b });

//   var middleIndex = Math.floor((array.length + 1) / 2);

//   return (array[middleIndex])
// }

// function getMode(array) {
//   var mode = {};
//   var max = 0;
//   var count = 0;

//   array.forEach(function (x) {
//     if (mode[x]) { mode[x]++; }
//     else { mode[x] = 1; }

//     if (count < mode[x]) {
//       max = x;
//       count = mode[x];
//     }
//   });

//   return max;
// }

// getAll([12, 32, 43, 51, 26, 37, 84, 29])

//////////////////////////////////////////////////////////////////
// Reverse Array in Place

// Be sure to manipulate the array passed in
// Do NOT push elements into a new array & return it
// Do NOT use array.reverse() method

// function reverseArrayInPlace(arr) {
//   // for loop to iterate through array
//   // only loop through the first half of the array...
//   // otherwise it will return the original array
//   for (var i = 0; i < arr.length / 2; i++) {
//     // set a temporary variable to store the [i]th element
//     var tempVar = arr[i];

//     // switch the first element with the last,
//     // switch second element with the second to last, etc...
//     arr[i] = arr[arr.length - 1 - i];

//     // set the counterpart equal to the current element
//     arr[arr.length - 1 - i] = tempVar;
//   }

//   return arr;
// }

// reverseArrayInPlace([1, 2, 3, 4, 5, 6, 7, 8]);

// ////////////////////////////////////////////////////////////////
// Reverse Words in a String

// function reverseWords(string) {
//   var wordsArr = string.split(" ");
//   var reversedWordsArr = [];

//   wordsArr.forEach(word => {
//     var reversedWord = "";
//     for (var i = word.length - 1; i >= 0; i--) {
//       reversedWord += word[i];
//     }
//     reversedWordsArr.push(reversedWord);
//   });

//   console.log(reversedWordsArr.join(" "));
// }

// reverseWords("who let the dogs out?");

// function reverseWords(str) {
//   // split the string into words
//   var wordsArray = str.split(" ");

//   // new array
//   var newArray = [];

//   // new string
//   var newString = "";

//   // loop through each word and split them into new arrays
//   for (var i = 0; i < wordsArray.length; i++) {
//     // split each word push to new array
//     newArray.push(wordsArray[i].split("").reverse());
//   }

//   // join newArray to make newString
//   for (var j = 0; j < newArray.length; j++) {
//     // join arrays into words
//     // add to newString
//     newString += newArray[j].join("") + " ";
//   }
//   console.log(newString);
// }

// reverseWords("howdy ho neighborino");

// ////////////////////////////////////////////////////////////////
// Caesar Cipher

// function caesarCipher(str, num) {
//   var lowerString = str.toLowerCase();
//   var alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
//   var newString = "";

//   for (var i = 0; i < lowerString.length; i++) {
//     var currentLetter = lowerString[i];

//     if (currentLetter === " ") {
//       newString += current;
//       continue;
//     }

//     var currentIndex = alphabet.indexOf(currentLetter);
//     var newIndex = currentIndex + num;

//     if (newIndex > 26) {
//       newIndex -= 26;
//     }
//     if (newIndex < 0) {
//       newIndex += 26;
//     }

//     newString += alphabet[newIndex];
//     console.log(newString);
//   }
// }

// caesarCipher("hello", 3);

// ////////////////////////////////////////////////////////////////
// Product of ?s and !s

// Count the number of exclamation marks and question marks, return the product.

// function product(s){
//   var ss = s.split('');
//   var e = 0;
//   var q = 0;

//   for(var i = 0; i < ss.length; i++) {
//     if(ss[i] == "!") {e++}
//     if(ss[i] == "?") {q++}
//   }
//   return e * q;

// ////////////////////////////////////////////////////////////////
// Bumps in the Road

// Given a string showing either flat road ("_") or bumps ("n"), work out if you make it home safely.
// 15 bumps or under, return "Woohoo!", over 15 bumps return "Car Dead".

// function bump(x){
//   var newString = x.split('');
//   var counter = 0;

//   newString.forEach(elem => {
//     (elem == "n") ? counter++ : counter += 0;
//   })

//   return (counter <= 15) ? "Woohoo!" : "Car Dead";
// }

// // Other people's solution.....
// const bump=x=>x.split('n').length>16?"Car Dead":"Woohoo!"

//////////////////////////////////////////////////////////////////
// Index of the Middle Element

// Create a function that when provided with a triplet, returns the index of the numerical element that lies between the other two elements.
// The input to the function will be an array of three distinct numbers.
// For example: gimme([2, 3, 1]) => 0

// var gimme = function (inputArray) {

//   var copy = [...inputArray]
//   var sorted =inputArray.sort(function(a, b) {return a - b});
//   var middleNum = sorted[1];
//   return copy.indexOf(middleNum);
// };

// // Other people's solution.....
// var gimme = function (inputArray) {
//   return inputArray.indexOf(inputArray.slice(0).sort(function(a,b) { return a-b; })[1]);
// };

//////////////////////////////////////////////////////////////////
// List Filtering

// Create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.

// function filter_list(l) {
//   return l.filter(l => (typeof l === "number"));
// }

//////////////////////////////////////////////////////////////////
// We Haven Liftoff!

// You have an array of numbers 1 through n (where 1 <= n <= 10). The array needs to be formatted correctly for the person reading the countdown of a spaceship launch.
// Unfortunately, the person reading the countdown only knows how to read strings. After the array is sorted correctly make sure it's in a format he can understand.
// Between each number should be a space and after the final number (n) should be the word 'liftoff!'
//  Given instructions = [8,1,10,2,7,9,6,3,4,5]
//  Should return "10 9 8 7 6 5 4 3 2 1 liftoff!"
// Given instructions = [1,2,4,3,5]
// Should return "5 4 3 2 1 liftoff!"

// function liftoff(instructions){
//   var nums = instructions.sort(function(a,b) {return b - a});
//   var count = [];
//   for (var i = 0; i < nums.length; i++) {
//     count.push(nums[i].toString());
//   }
//   return count.join(' ') + " liftoff!";
// }

// // Much simpler solution...
// function liftoff(instructions){
//   return instructions.sort(function(a, b) {return b - a;}).join(' ') + ' liftoff!'
// }

//////////////////////////////////////////////////////////////////
// Summing a Number's digits

// Write a function named sumDigits which takes a number as input.
// Return the sum of the absolute value of each of the number's decimal digits.
// sumDigits(10);  // Returns 1
// sumDigits(99);  // Returns 18
// sumDigits(-32); // Returns 5

// function sumDigits(number) {

//   var numString = number.toString().split('');
//   var total = 0;

//   for(var i = 0; i < numString.length; i++) {
//     (numString[i] === '-') ? total = 0 : (total += parseInt(numString[i]));
//   }

//   return total;
// }

//////////////////////////////////////////////////////////////////
// Complementary DNA

// In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G".
// You have function with one side of the DNA string, you need to get the other complementary side.
// DNA strand is never empty or there is no DNA at all.
// DNAStrand ("ATTGC") # return "TAACG"
// DNAStrand ("GTAT") # return "CATA"

// function DNAStrand(dna){
//   var dnaArray = dna.split("");
//   var complement = [];

//   for (var i = 0; i < dna.length; i++) {
//     if(dnaArray[i] === "A") {
//       complement.push("T");
//     } else if(dnaArray[i] === "T") {
//       complement.push("A");
//     } else if(dnaArray[i] === "G") {
//       complement.push("C");
//     } else {
//       complement.push("G");
//     }
//   }

// // Other people's solution...
// function DNAStrand(dna) {
//   return dna.replace(/./g, function(c) {
//     return DNAStrand.pairs[c]
//   })
// }

// DNAStrand.pairs = {
//   A: 'T',
//   T: 'A',
//   C: 'G',
//   G: 'C',
// }

//////////////////////////////////////////////////////////////////
// Find the capitals

// Write a function that takes a single string (word) as argument.
// The function must return an ordered list containing the indexes of all capital letters in the string.

// var capitals = function (word) {
// 	// split word into array
//   // find which elements are capitals
//   // return their indexs

//   var wordArray = word.split('');
//   var indexArray = [];

//   for (var i = 0; i < wordArray.length; i++) {
//     if (wordArray[i] === wordArray[i].toUpperCase()) {
//       indexArray.push(wordArray.indexOf(wordArray[i]));
//     }
//   }
//   return indexArray;
// };

//////////////////////////////////////////////////////////////////
// Predict your age!

// My grandfather always predicted how old people would get, and right before he passed away he revealed his secret!
// In honor of my grandfather's memory we will write a function using his formula!
// Take a list of ages when each of your great-grandparent died.
// Multiply each number by itself.
// Add them all together.
// Take the square root of the result.
// Divide by two.
// predictAge(65, 60, 75, 55, 60, 63, 64, 45) === 86
// Note: the result should be rounded down to the nearest integer.

// function predictAge(age1,age2,age3,age4,age5,age6,age7,age8){
//   var totalAges = ((age1 * age1) + (age2 * age2) +
//   (age3 * age3) + (age4 * age4) + (age5 * age5) +
//   (age6 * age6) + (age7 * age7) + (age8 * age8));

//   return(Math.floor(Math.sqrt(totalAges)/2));
// }

// // Someone else's solution...
// const predictAge = (...ages) => Math.hypot(...ages) / 2 | 0;

//////////////////////////////////////////////////////////////////
// Get the Middle Character

// You are going to be given a word. Your job is to return the middle character of the word.
// If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

// function getMiddle(s) {
//   var sString = s.split('');
//   var sLength = sString.length;

//   if (sLength % 2 === 0) {
//     return (sString[sLength / 2 - 1] + sString[sLength / 2 ]);
//   } else {
//     return(sString[Math.floor(sLength / 2)]);
//   }
// }

// // Other peoples code...
// function getMiddle(s) {
//   return s.slice((s.length-1)/2, s.length/2+1);
// }

//////////////////////////////////////////////////////////////////
// The Coupon Code

// Your online store likes to give out coupons for special occasions. Some customers try to cheat the system by entering invalid codes or using expired coupons.
// Write a function called checkCoupon to verify that a coupon is valid and not expired. If the coupon is good, return true. Otherwise, return false.
// A coupon expires at the END of the expiration date. All dates will be passed in as strings in this format: "June 15, 2014"

// function checkCoupon (enteredCode, correctCode, currentDate, expirationDate) {
//   var curDate = new Date(currentDate);
//   var expDate = new Date(expirationDate);

//   if (enteredCode === correctCode && curDate <= expDate) {
//     return true;
//   } else {
//     return false;
//   }
// }

// // Other peoples code...
// function checkCoupon (enteredCode, correctCode, currentDate, expirationDate){
//   return enteredCode === correctCode && Date.parse(expirationDate) >= Date.parse(currentDate)
// }

//////////////////////////////////////////////////////////////////
// Make a function that does arithmetic!

// Given two numbers and an arithmetic operator (the name of it, as a string), return the result of the two numbers having that operator used on them.
// a and b will both be positive integers, and a will always be the first number in the operation, and b always the second.
// The four operators are "add", "subtract", "divide", "multiply".

// function arithmetic(a, b, operator){
//   switch (operator) {
//     case "add":
//         return a + b;
//     case "subtract":
//         return a - b;
//     case "multiply":
//         return a * b;
//     case "divide":
//         return a / b;
//   }
// }

//////////////////////////////////////////////////////////////////
// Square Every Digit

// You are asked to square every digit of a number.
// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.
// Note: The function accepts an integer and returns an integer

// function squareDigits(num){
//   var numArray = num.toString().split('');

//   var squaredArray = [];

//   numArray.map(x => {
//     squaredArray.push(x * x);
//   });

//   var totalNumber = squaredArray.join('');

//   return parseInt(squaredArray.join(''));

// }

//////////////////////////////////////////////////////////////////
// Square(n) Sum

// Complete the squareSum/square_sum/SquareSum method so that it squares each number passed into it and then sums the results together.

// function squareSum(numbers){

//   var squared = []; // set an empty array

//   var squaredNums = numbers.map( x => {
//     squared.push( x * x );  // mapped thru numbers array &&
//   }); // push squared numbers to empty squared array

//   return squared.reduce((a, b) => a + b, 0);
//   // reduced the squared array by adding every element together
// }

// // Other solution
// function squareSum(numbers) {
//   return numbers.reduce((s,a)=>s+a*a,0);
// }

//////////////////////////////////////////////////////////////////
// Shortest Word

// Simple, given a string of words, return the length of the shortest word(s).
// String will never be empty and you do not need to account for different data types.

// function findShort(s){
//   var wordArray = s.split(' ');

//   var newArray = wordArray.map(x => x.length);

//   var counter = 1000;

//   for(var i = 0; i < newArray.length; i++) {
//     if (newArray[i] < counter) {
//       counter = newArray[i];
//     }
//   }
// return counter;
// }

//////////////////////////////////////////////////////////////////
// Fake Binary
// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

// function fakeBin(x){
//   var arr = x.split('');

//   var newArray = [];

//   for(var i = 0; i < arr.length; i++) {
//     if (arr[i] >= 5) {
//       newArray.push(1);
//     } else {
//       newArray.push(0);
//     }
//   }
//   return newArray.join('');
// }

// fakeBin('983642238964');

// // Other persons solution
// function fakeBin(x) {
//     return x.split('').map(n => n < 5 ? 0 : 1).join('');
// }

//////////////////////////////////////////////////////////////////
// Invert Values

// Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.

// function invert(array) {
//   let newArray = [];

//   for (var i = 0; i < array.length; i++) {
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

// There is a bus moving in the city, and it takes and drop some people in each bus stop.
// You are provided with a list (or array) of integer arrays (or tuples). Each integer array has two items which represent number of people get into bus (The first item) and number of people get off the bus (The second item) in a bus stop.
// Your task is to return number of people who are still in the bus after the last bus station (after the last array). Even though it is the last bus stop, the bus is not empty and some people are still in the bus, and they are probably sleeping there :D
// Please keep in mind that the test cases ensure that the number of people in the bus is always >= 0. So the return integer can't be negative.
// The second value in the first integer array is 0, since the bus is empty in the first bus stop.

// var number = function(busStops){
//   var counter = 0;

//   for(var i = 0; i < busStops.length; i++) {
//     counter += busStops[i][0];
//     counter -= busStops[i][1];
//   }

//   return counter;
// }

//////////////////////////////////////////////////////////////////
// Sum of positive

// You get an array of numbers, return the sum of all of the positives ones.
// Example [1,-4,7,12] => 1 + 7 + 12 = 20
// Note: if there is nothing to sum, the sum is default to 0.

// function positiveSum(arr) {
//   var sum = 0;

//   for(var i = 0; i < arr.length; i++) {
//     if (arr[i] > 0) {
//       sum += arr[i];
//     }
//   }
//   return sum;
// }

//////////////////////////////////////////////////////////////////
// Return Negative

// In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?

// function makeNegative(num) {
//   if(num < 0) {
//     return num;
//   } else {
//     return num * -1;
//   }
// }

// // Refactored with ternary operator
// function makeNegative(num) {
//   return num < 0 ? num : num * -1;
// }

// // Other persons code
// function makeNegative(num) {
//   return -Math.abs(num);
// }

//////////////////////////////////////////////////////////////////
// Keep up the hoop

// Alex just got a new hula hoop, he loves it but feels discouraged because his little brother is better than him
// Write a program where Alex can input (n) how many times the hoop goes round and it will return him an encouraging message :)
// If Alex gets 10 or more hoops, return the string "Great, now move on to tricks".
// If he doesn't get 10 hoops, return the string "Keep at it until you get it".

// function hoopCount (n) {
//    return n < 10 ? "Keep at it until you get it" : "Great, now move on to tricks";
// }

//////////////////////////////////////////////////////////////////
// Keep hydrated

// Nathan loves cycling & knows it is important to stay hydrated. He drinks 0.5 litres of water per hour of cycling.
// You get given the time in hours and you need to return the number of litres Nathan will drink, rounded to the smallest value.

// function litres(time) {
//   return Math.floor(time * .5);
// }

//////////////////////////////////////////////////////////////////
// Reversed Strings

// Complete the solution so that it reverses the string value passed into it.

// function solution(str){
//   return str.split('').reverse().join('');
// };

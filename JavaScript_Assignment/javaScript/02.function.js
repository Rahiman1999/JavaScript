/*
// <---------------Easy----------------->

// 01.power function
function power(a, b) {
  console.log(Math.pow(a, b));
}
power(2, 3);

// 02.Hexagon function
function hexagon(s) {
  return (3 * Math.sqrt(3) * (s * s)) / 2;
}
console.log(hexagon(10));

//  03.counting words fuction
function noOfWords(s) {
  return s.split(" ").length;
}
console.log(noOfWords("we are alchemyst"));

// 04.Find minimum function

function findMin(...num) {
  return Math.min(...num);
}
console.log(findMin(3, 5));
console.log(findMin(3, 5, 9, 1));

// 05. Find maximum function
function findMax(...num) {
  return Math.max(...num);
}
console.log(findMax(3, 5));
console.log(findMax(3, 5, 9, 1));

// 06. Find Triangle Fuction

function typeOfTriangle(x, y, z) {
  if (x == y && y == z) {
    return "Equilateral Triangle";
  } else if (x == y || y == z || z == x) {
    return "Isosceles Triangle";
  } else if (x <= 0 || y <= 0 || z <= 0) {
    return "Not a triangle";
  } else {
    return "Scalan Triangle";
  }
}
console.log(typeOfTriangle(30, 60, 60));

// <------------------Medium------------------>

// 01. Array Length
let array1 = [1, 5, 3, 7, 8];

function arrayLength(l) {
  return l.length;
}
console.log(arrayLength(array1));

// 02.Array Index

let array = [1, 6, 3, 5, 8, 9];

function arrayIndexOf(arr, num) {
  return arr.indexOf(num);
}
console.log(arrayIndexOf(array, 3));

// 03.Array replace fuction
let arra = [1, 5, 3, 5, 6, 8];

function arrayReplace(arr, num1, num2) {
  for (let i = 0; i <= arr.length; i++) {
    if (arr[i] == num1) {
      arr[i] = num2;
    }
  }
  console.log(arr);
}
arrayReplace(arra, 5, 10);

// 04.Merge Array function
let arr1 = [1, 3, 5];
let arr2 = [2, 4, 6];
function mergeArray(...arr) {
  console.log([...arr]);
}
mergeArray(...arr1, ...arr2);

// 05.charAt string
function charat(str, index) {
  console.log(str.charAt(index));
}
charat("skillsafari", 4);

// 06.Min Date Function
function min_date(d1, d2) {
  var d3 = new Date(d1);
  var d4 = new Date(d2);
  let date1 = d3.toUTCString();
  let date2 = d4.toUTCString();
  date1 > date2 ? console.log(d2) : console.log(d1);
}
min_date("02/05/2021", "24/01/2021");

// <-----------------------------------------Advance---------------------------------------------------------->

// 01.Character Shifting

function encodeString(str, num) {
  str = str.toLowerCase();
  var encoded = " ";
  var charcode = 0;
  for (var i = 0; i < str.length; i++) {
    charcode = str[i].charCodeAt() + num;
    encoded += String.fromCharCode(charcode);
  }
  return encoded;
}
console.log(encodeString("skill", 2));

// 02. ToSentenceUpperCase function

function toSentenceUpperCase(string) {
  let words = string.split(" ");
  for (let i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].substr(1);
  }
  console.log(words.join(" "));
}
toSentenceUpperCase("we are alchemyst");

// 03.AscendingOrder
function sortArray(num) {
  const arr = num.sort((a, b) => a - b);
  console.log(arr);
}
sortArray([100, 83, 32, 9, 45, 61]);

// Reverse Character function
function reveseString(string) {
  return string.split("").reverse().join("").split(" ").reverse().join(" ");
}
console.log(reveseString("we are alchemyst"));
*/

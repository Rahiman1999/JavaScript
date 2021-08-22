/*
// 1.Adding 5 numbers

let num1, num2, num3, num4, num5;
num1 = 5;
num2 = 13;
num3 = 7;
num4 = 21;
num5 = 48;
let sum = 0;
sum = num1 + num2 + num3 + num4 + num5;
document.write(sum);
console.log(sum);

// 2.Odd or Even

const input = Number(prompt("enter the number"));
if (input % 2 == 0) {
  console.log("Even");
} else {
  console.log("Odd");
}

// 3.Max and Min

let num1 = 129;
let num2 = 251;
const maxNumber = Math.max(num1, num2);
const minMunber = Math.min(num1, num2);
console.log("The maximum num:" + maxNumber);
console.log("The Minimum num:" + minMunber);

// 4.Maximum

let num1 = 8;
let num2 = 23;
let num3 = 17;
console.log(Math.max(num1, num2, num3));

// 5.Minimum

let num1 = 35;
let num2 = 29;
let num3 = 46;
//    finiding minimum number

console.log(Math.min(num1, num2, num3));

// 6. Month
let input = Number(prompt("Enter the month in number"));
if (
  input == 1 ||
  input == 3 ||
  input == 5 ||
  input == 7 ||
  input == 9 ||
  input == 8 ||
  input == 10 ||
  input == 12
) {
  console.log("this month has 31 days");
} else {
  console.log("this month hasn't 31 days");
}

// 7.FizzBuzz
for (let i = 1; i <= 100; i++) {
  if (i % 3 == 0 && i % 5 == 0) {
    console.log("FizzBuzz");
  } else if (i % 3 == 0) {
    console.log("Fizz");
  } else if (i % 5 == 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}

//  8.Star pattern
for (let i = 1; i <= 5; i++) {
  let star = "";
  for (let j = 1; j <= i; j++) {
    star = star + " *";
  }
  console.log(star);
}

// 9.Multiplication table

for (let i = 1; i <= 10; i++) {
  console.log(`12 x ${i} = ${12 * i}`);
}

// 10.Fibonacci
let input = Number(prompt("Enter a number"));
let first = 0,
  second = 1,
  third;
for (let i = 1; i <= input; i++) {
  console.log(first);
  third = first + second;
  first = second;
  second = third;
}

// 11.Factorial
let input = Number(prompt("Enter the number"));
let f = 1;
for (let i = 1; i <= input; i++) {
  f = f * i;
}
console.log(`The Factorial of ${input} is: ` + f);

// 12.Prime
let input = Number(prompt("Enter the number"));
for (let i = 2; i <= input; i++) {
  if (input % i !== 0 || input == 2) {
    console.log(`${input} is  Prime Number`);
    break;
  } else {
    console.log(`${input} is not Prime Number`);
    break;
  }
}

// 13.WeedDays

let input = prompt("Enter a day");
const input1 = input.toLowerCase();

if (
  input1 == "monday" ||
  input1 == "tuesday" ||
  input1 == "wednesday" ||
  input1 == "thursday" ||
  input1 == "friday"
) {
  alert(`${input} is a Weekday`);
} else {
  alert(`${input} is a Weekend`);
}
*/

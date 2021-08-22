/*
// 01.sum

let num1 = Number(prompt("Input number 1"));
let num2 = Number(prompt("Input number 2"));
let sum = num1 + num2;
console.log(`${num1} + ${num2} = ${sum}`);

// 02.simple Intrest

let p = Number(prompt("Input Principle"));
let t = Number(prompt("Input Time"));
let r = Number(prompt("Input Rate"));

let SI = (p * t * r) / 100;
console.log(`${SI}`);

// 03.Kinetic Energy

let m = Number(prompt("Input Mass"));
let v = Number(prompt("Input Volume"));

let ke = 0.5 * m * v * v;
console.log(`${ke}`);

// 04. Farrenhite to Celsius

let T = Number(prompt("Input Temperature"));

let t1 = (T - 32) / 1.8;

console.log(`celsius is ${t1}`);

// 05.Calculating Side

let a = Number(prompt("Enter A"));
let area = a * a;

let perimeter = 4 * a;

let surface_Area = 6 * a * a;
let volume = a * a * a;

console.log(`The Area: ${area}`);
console.log(`The Perimeter: ${perimeter}`);
console.log(`The surface of area: ${surface_Area}`);
console.log(`The volume: ${volume}`);

// 06.Profit or Loss

let cp = Number(prompt("Input cost price"));
let sp = Number(prompt("Input selling price"));
let sub = sp - cp;
console.log(cp < sp ? `${Math.abs(sub)} Profit` : `${Math.abs(sub)} Loss`);

// 07.Natural Number

let number = parseInt(prompt("Input Natural number "));
let sum_1 = 0;
for (let i = 0; i <= number; i++) {
  sum_1 += i;
}
console.log(`The sum of ${number} is : ${sum_1}`);

// 08.Odd Number

let number_1 = parseInt(prompt("Input number "));

for (let i = 1; i < 2 * number_1; i++) {
  if (i % 2 !== 0) {
    console.log(i);
  }
}

// 09.Sum of all digit

const input = prompt("enter the number to calculate digit ");
let sum_2 = 0;
for (let i of input) {
  sum_2 += parseInt(i);
}
console.log("The sum of all digit: " + sum_2);

// 10.everse Number

const input_1 = Number(prompt("enter the number to reverse"));
const i = input_1 + " ";
let reversed = i.split("").reverse().join("");
console.log("the reversed num is: " + reversed);

// 11.cyclic rotate

const input_2 = Number(prompt("enter the number to rotate "));
const i_2 = input_2 + "";
let splited = i_2.split("");
const rotation = Number(prompt("Enter the rotation"));

let rotated;
for (let j = 0; j < rotation; j++) {
  rotated = splited.unshift(splited[splited.length - 1]);
  rotated = splited.pop();
}
console.log(`The rotated ${splited.join("")}`);

// 12. Decimal to binary

const input_4 = Number(prompt("Enter the number to convert decimal to binary"));
console.log("the binary of " + input_4 + " is: " + input_4.toString(2));

// 13. Octal to Decimal

const input_5 = Number(prompt("Enter the number to convert decimal to binary"));
console.log(`the Decimal of ${input_5} is: ${parseInt(input_5, 8)}`);
*/

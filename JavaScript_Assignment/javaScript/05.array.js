/*
// Find sum of an array and display the output

const arr1 = [10, 4, 5, 2, 5, 6, 9];

console.log("sum of an array: "+arr1.reduce((acc, current) => acc + current));



//  02.Average of an array

const arr2 = [10, 4, 5, 2, 5, 6, 9];

const sum = arr2.reduce((acc, current) => acc + current);

const avg = sum / arr2.length;

console.log("The avg of an array: " + Math.round(avg));




// 03. maximum and minimum of an array.

const arr3 = [10, 4, 5, 2, 5, 6, 9];

console.log("Maximum of an array : " + Math.max(...arr3));
console.log("Minimum of an array : " + Math.min(...arr3));




// 04.Median and Mode of an array

const arr4 = [10, 4, 5, 2, 5, 6, 9];
const mode = {};
let value = 1;
const median = function (arr, n) {
  if (n % 2 != 0) {
    return arr[parseInt(n / 2)];
  }
  return arr[parseInt(n - 1 / 2)] + arr[parseInt(n / 2)] / 2.0;
};
console.log("The Median of an array is : " + median(arr4, arr4.length));

for (let i = 0; i <= arr4.length; i++) {
  if (mode[arr4[i]]) {
    mode[arr4[i]]++;
  } else {
    mode[arr4[i]] = 1;
  }
}

for (let key in mode) {
  if (mode[key] > value) {
    console.log("The mode of an array is " + key);
  }
}



// 05.sum of two arrays

const arr_1 = [3, 5, 2, 9, 4];
const arr_2 = [6, 2, 8, 1, 3];

const a = arr_1.reduce((acc, cuurntValue) => acc + cuurntValue);
const b = arr_2.reduce((acc, cuurntValue) => acc + cuurntValue);

console.log(`The sum of two array is: ${a + b}`);



// 06.Number of constants and vowels in a string.

const str_1 = prompt("Enter the string to calculate consants and vowels");
const str_2 = str_1.split("");
const vowelsArr = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
let vowels = 0;
let constants = 0;
for (let i = 0; i <= str_2.length - 1; i++) {
  if (vowelsArr.includes(str_2[i])) {
    vowels++;
  } else {
    constants++;
  }
}
console.log(`vowels in the string is ${vowels}`);
console.log(`constant in the string is ${constants}`);



// 07.Shift an array to right

const arr_4 = [1, 2, 4, 7, 8, 9];
arr_4.unshift(arr_4[arr_4.length - 1]);
arr_4.pop();
console.log(arr_4);



// <------------------------------------------------Advanced---------------------------------------------------------------->

// 01.Find the sum of two matrix.

const a = [
  [1, 2],
  [3, 4],
];
const b = [
  [1, 2],
  [3, 4],
];

const c = [];
document.write("Matrix A (2x2):<br>");
for (let i = 0; i < 2; i++) {
  for (let j = 0; j < 2; j++) document.write(a[i][j] + " ");
  document.write("<br>");
}

document.write("Matrix B (2x2):<br>");

for (let i = 0; i < 2; i++) {
  for (let j = 0; j < 2; j++) document.write(b[i][j] + " ");
  document.write("<br>");
}

document.write("Matrix C = A + B (2x2):<br>");
for (let i = 0; i < 2; i++) {
  for (let j = 0; j < 2; j++) document.write(a[i][j] + b[i][j] + " ");
  document.write("<br>");
}



//Transpose of matrix

const arr__1 = [
  [1, 4],
  [5, 8],
];
const transpose = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < i; j++) {
      const tmp = arr[i][j];
      arr[i][j] = arr[j][i];
      arr[j][i] = tmp;
    }
  }
};
transpose(arr__1);
console.log(arr__1);



// 03.Identity matrix
document.write("Identity matrix 3x3 <br>");

for (let row = 0; row < 3; row++) {
  for (let col = 0; col < 3; col++) {
    if (row == col) document.write(1 + " ");
    else document.write(0 + " ");
  }
  document.write(" \n" + "<br>");
}

*/

/*
// 01.convet upperCase

const input = prompt("Enter the String");
console.log(input.toUpperCase());

// 02.Append String

const str1 = prompt("Enter the String1 to append");
const str2 = prompt("Enter the String2 to append");
console.log(str2.concat(str1));

// 03.count String

const str = prompt("Enter the String to count");
console.log(str.length);

// 04.String to Number

const str_1 = prompt("Enter the string to convert number");
console.log(parseInt(str_1));

// 05. Removing Vowels

const str4 = prompt("Enter the String to remove vowels");
const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
let removedVowels = "";
for (let i = 0; i <= str4.length - 1; i++) {
  if (!vowels.includes(str4[i]) && str.length <= 80) {
    removedVowels += str4[i];
  }
}
console.log(`After removed vowels:  ${removedVowels}`);

//  06.AlphaNumeric

const str_2 = prompt("Enter the string to find alphaNumeric");
const exp = /^[^0-9]+$/;
const exp1 = /^[0-9]+$/;

if (exp.test(str_2)) {
  console.log("Not Alpha Numeric");
} else if (exp1.test(str_2)) {
  console.log(" Not Alpha Numeric");
} else {
  console.log("Alpha Numeric");
}



// 07. A program that reads three strings and prints the longest and smallest one

const one = prompt("Enter the string1");
const two = prompt("Enter the string2");
const three = prompt("Enter the string3");

if (one.length > two.length && one.length > three.length) {
  console.log("largest :" + one);
} else if (two.length > one.length && two.length > three.length) {
  console.log("largest :" + two);
} else {
  console.log("largest :" + three);
}

if (one.length < two.length && one.length < three.length) {
  console.log("smallest :" + one);
} else if (two.length < one.length && two.length < three.length) {
  console.log("smallest :" + two);
} else {
  console.log("smallest :" + three);
}



// 08.number of vowels and consonants in a String

const countVowels = prompt("Enter the string to count vowels");

const vowels = ["A", "E", "I", "O", "U", "a", "e", "i", "o", "u"];

let v = 0;
let c = 0;
for (let i = 0; i <= countVowels.length; i++) {
  if (vowels.includes(countVowels[i])) {
    v += 1;
  } else {
    c += 1;
  }
}

console.log(`Vowels are ${v}`);
console.log(`consonants are ${c}`);


// 09.the length is greater than 7 without using strlen()

const wordsLen = prompt("Enter the String to calculate greater than 7");
let count = 0;

for (let strLen in wordsLen) {
  count = parseInt(strLen) + 1;
}
if (count >= 7) {
  console.log(true);
} else {
  console.log(false);
}



// 10.take two strings and copies smaller string into bigger string

const string_1 = prompt("Enter the string1");
const string_2 = prompt("Enter the string2");

if (string_1.length > string_2.length) {
  console.log(string_1 + string_2.slice());
} else {
  console.log(string_2 + string_1.slice());
}



// 11.palindrome

const palindrome = prompt("Enter the String:");
let palin = "";
let regax = /[a-z0-9A-z]/;
for (let i = palindrome.length - 1; i >= 0; i--) {
  if (!regax.test(palindrome[i])) {
    console.log("Enter alphaNumeric only");
    break;
  }
  palin += palindrome[i];
}
if (palindrome === palin) {
  console.log("it's a palindrome");
} else {
  console.log("it's not palindrom");
}


// 12.print all the possible substrings.Without using substr method

function subString(str, n) {
  for (let len = 1; len <= n; len++) {
    for (let i = 0; i <= n - len; i++) {
      let j = i + len - 1;
      for (let k = i; k <= j; k++) {
        document.write(str[k]);
      }

      document.write("<br>");
    }
  }
}

let str = prompt("Enter the string");
subString(str, str.length);




// 13.A program that removes the time from the given date string

const time = "Wed April 15, 7pm";
const timeRemoved = time.split(",")[0];
console.log(timeRemoved);



// 14.masks all but last four characters of the string

const mask = "5565534276455423";
let m = mask.slice(0, mask.length - 4).replace(/./g, "#") + mask.substr(-4);

console.log(m);




// 15.A string "tic tac toe is a fun game" convert the first 6 characters to capital case

const words = "tic tac toe is a fun game";
const w = words.slice(0, 8).toUpperCase() + words.slice(8);
console.log(w);




//  <-------------------------------------------Advance-------------------------------------------------------------->

// 01.An input string S and two characters c1 and c2, you need to replace every occurrence of character c1 with character c2 in the given string

const s = prompt("enter the string");
const c1 = prompt("Enter c1 to replace every occurrence of character c2");
const c2 = prompt("Enter c1 to replace every occurrence of character c2");
let arr = s.split("");

for (let i = 0; i <= arr.length; i++) {
  if (arr[i] === c1) {
    arr[i] = c2;
  } else if (arr[i] === c2) {
    arr[i] = c1;
  }
}
console.log(
  `After replace every occurrence of character c1 with character c2 in the given string:  ${arr.join(
    ""
  )}`
);



// 02.Given an input string S that contains multiple words, you need to remove all the spaces present in the input string. There can be multiple spaces present after any word

const s_1 = "hello guys good m or ning";
let removedSpace = s_1.split(" ");
console.log(removedSpace.join(""));




// 03.A program that counts the value of each character and prints the most repeated characte

const str = prompt("Enter the string to calculate the repeated character");
const repeated = {};
for (let i = 0; i <= str.length - 1; i++) {
  if (repeated[str[i]]) {
    repeated[str[i]]++;
  } else {
    repeated[str[i]] = 1;
  }
}
console.log(repeated);



// 04. A program to toggle case of each character of the string to uppercase

const str_3 = prompt("enter the string");
let s = str_3.split("");
let uc = "";
for (let i = 0; i <= s.length - 1; i++) {
  if (i % 2 !== 0) {
    uc += s[i].toUpperCase();
  } else {
    uc += s[i].toLowerCase();
  }
}
console.log(uc);

// 05.program that removes the occurrence of the specified word from given sentence.

const input = "how was your day?";
const input1 = input.split(" ");
console.log(`Removed word: ${input1.slice(0, 1)}`);
console.log(input1.slice(1).join(" "));


*/

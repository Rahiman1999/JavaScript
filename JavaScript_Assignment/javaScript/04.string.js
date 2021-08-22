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

//  06.

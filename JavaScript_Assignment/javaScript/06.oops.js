// 01.Object of syudent mark

const studentDetails = [
  {
    roll: "1",
    name: "Rohan Singh",
    maths: 86,
    science: 90,
    english: 75,
    computer: 85,
  },
  {
    roll: "2",
    name: "Ritvik Patel",
    maths: 27,
    science: 30,
    english: 35,
    computer: 30,
  },
  {
    roll: "3",
    name: "Neha Maurya",
    maths: 75,
    science: 69,
    english: 40,
    computer: 75,
  },
  {
    roll: "4",
    name: "Mohit Verma",
    maths: 21,
    science: 31,
    english: 45,
    computer: 40,
  },
  {
    roll: "5",
    name: "Karan Trivedi",
    maths: 70,
    science: 80,
    english: 35,
    computer: 60,
  },
];

//  ......................................Print the name and total marks of each student......................................................

studentDetails.map((student) => {
  const total =
    student.maths + student.science + student.english + student.computer;
  console.log(`Student name is ${student.name} and total mark is ${total}`);
});

//  ......................................Print the name of student whose total marks is highest.............................................

studentDetails.map((student) => {
  student.totalMark =
    student.maths + student.science + student.english + student.computer;
});
let higestScore = 0;
let name1 = "";
for (let i = 0; i <= studentDetails.length - 1; i++) {
  if (studentDetails[i].totalMark > higestScore) {
    higestScore = studentDetails[i].totalMark;
    name1 = studentDetails[i].name;
  }
}
console.log(`The highest score is: ${higestScore} and name is: ${name1} `);

// .........................................Print the name of student whose total marks is lowest...............................................

let lowestScore = 10000;
let name2 = "";
for (let i = 0; i <= studentDetails.length - 1; i++) {
  if (studentDetails[i].totalMark < lowestScore) {
    lowestScore = studentDetails[i].totalMark;
    name2 = studentDetails[i].name;
  }
}
console.log(`The lowest score is: ${lowestScore} and name is: ${name2} `);

// ..........................................Print the average marks of the class in computer subject..............................................
const computerAvg =
  studentDetails.reduce(
    (acc, studentDetails) => acc + studentDetails.computer,
    0
  ) / studentDetails.length;

console.log(
  `The average mark of the class in computer subject is: ${computerAvg}`
);

// ...........................................Print the grades of all students...................................................................

studentDetails.map((student) => {
  student.percentage = Math.round(student.totalMark / 4);
});

for (let i = 0; i < studentDetails.length; i++) {
  if (studentDetails[i].percentage >= 75) {
    studentDetails[i].grade = "Grade A";
  } else if (studentDetails[i].percentage >= 60) {
    studentDetails[i].grade = "Grade B";
  } else if (studentDetails[i].percentage >= 35) {
    studentDetails[i].grade = "Grade C";
  } else {
    studentDetails[i].grade = "Grade D";
  }
  console.log(
    `The name is ${studentDetails[i].name} and grade is ${studentDetails[i].grade}`
  );
}

//  .........................Print the total number of students passed and their names. Pass when total marks is greater than 35%..................

let totalNoPass = 0;
for (let i = 0; i < studentDetails.length; i++) {
  if (studentDetails[i].percentage > 35) {
    totalNoPass += 1;
  }
}
console.log(`The total number of student passed is: ${totalNoPass}`);
const res = studentDetails.filter((student) => {
  if (student.percentage > 35) {
    console.log(`Paased student name is: ${student.name}`);
  }
});

// .................................02.Salary calculation using OOPS concept.....................................................................

// Create a Class using ES6 in JavaScript named Employee and assign necessary data members and methods such as name, id, basic salary, HRA, Allowances; define getSalary method which will return the net salary.

class Employee {
  constructor(name, id, basicSalary, HRA, Allowances) {
    this.name = name;
    this.id = id;
    this.basicSalary = basicSalary;
    this.HRA = HRA;
    this.Allowances = Allowances;
  }

  // Call the getSalary method of each instance and return the net salary based on your computation.
  getSalary() {
    const netSalary = this.basicSalary + this.HRA + this.Allowances;
    return `The Net salary of ${this.name} is: ${netSalary}`;
  }
}

// Create two Instances of Employee with all necessary details.

const dataMember_1 = new Employee("Rahiman", 12345, 50000, 10000, 5000);
const dataMember_2 = new Employee("Ajay", 23456, 40000, 10000, 8000);
const dataMember_3 = new Employee("Ranganath", 156475, 80000, 15000, 60000);
console.log(dataMember_1.getSalary());
console.log(dataMember_2.getSalary());
console.log(dataMember_3.getSalary());

//  ...................................03.Bank Account (Object Oriented Programming in JavaScript)...........................................

// Create a class and define data members such as name, bank account number,account balance, account type, ifsc and name it as BankAccount.

var bankAccountDetails = [];

class BankAccount {
  constructor(name, bankAccountNumber, accountBalance, accountType, ifsc) {
    this.name = name;
    this.bankAccountNumber = bankAccountNumber;
    this.accountBalance = accountBalance;
    this.accountType = accountType;
    this.ifsc = ifsc;
    bankAccountDetails.push(this);
  }
}

// Create three Instances(three customers) of BankAccount with all necessary details.

const member_1 = new BankAccount(
  "Rahiman",
  1234567890,
  25000,
  "savings",
  "ODI789789"
);
const member_2 = new BankAccount(
  "Ranganath",
  4567891230,
  50000,
  "current",
  "ODI546456"
);
const member_3 = new BankAccount(
  "PK",
  8529637410,
  100000,
  "current",
  "ODI856568"
);

// Print the name of customers and their account balances.

bankAccountDetails.map((e) => {
  console.log(
    `The Bank account holder name is ${e.name} and Account balance is: ${e.accountBalance}`
  );
});

// Calculate the average account balance from all the instances.

const avgAccountBalance =
  bankAccountDetails.reduce(
    (acc, bankAccountDetails) => acc + bankAccountDetails.accountBalance,
    0
  ) / bankAccountDetails.length;

console.log(
  `the average account balance from all the instances is: ${Math.round(
    avgAccountBalance
  )}`
);

// .......................................04.Given an array of objects of items in cart, print...................................................

const cartItems = [
  {
    id: "101",
    name: "Oreo",
    count: 2,
    price: 30.0,
    discount: 0.18,
  },
  {
    id: "102",
    name: "Red Bull",
    count: 1,
    price: 99.0,
    discount: 0.15,
  },
  {
    id: "103",
    name: "Dairy Milk Silk",
    count: 3,
    price: 175.0,
    discount: 0.05,
  },
  {
    id: "104",
    name: "Pulse Candy Pack",
    count: 1,
    price: 135.0,
    discount: 0.2,
  },
];

// the total No. of items

console.log(`The total number of items is: ${cartItems.length}`);

// the total cart value

const cartValues = cartItems.reduce(
  (acc, cartItems) => acc + cartItems.price,
  0
);
console.log(`The total cart value is: ${cartValues}`);

// the total discounted value(sum of dicounted values on each item) based on the given discount

const totalDiscountedValues = cartItems.reduce(
  (accu, cartItems) => accu + cartItems.discount,
  0
);

console.log(`the total discounted value is: ${totalDiscountedValues}`);

//  total tax amount (18% tax, calculated on total cart value)

const tax = cartValues * (18 / 100);
console.log(`The total tax amount of cart values is: ${tax}`);

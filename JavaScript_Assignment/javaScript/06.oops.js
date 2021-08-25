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
let computerAvg = 0;
for (let i = 0; i < studentDetails.length; i++) {
  computerAvg += studentDetails[i].computer;
}
console.log(
  `The average mark of the class in computer subject is: ${
    computerAvg / studentDetails.length
  }`
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

const Employee = [
  {
    name: "Rahiman",
    id: 1234567,
    basicSalary: 50000,
    HRA: 10000,
    Allowances: 5000,
    grossSalary: {},
  },
];

console.log(Employee.grossSalary);

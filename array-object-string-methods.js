// easy
// // ascending order
let input = { b: 2, a: 1, c: 3 };
let output = [];
const Array = input.substring(1, input.length - 1);
console.log(Array);
const pairs = Array.split(",");
for (let i = 0; i < pairs.length; i++) {
  const [key, value] = pairs[i].split(":");
  output[key.trim()] = parseInt(value.trim());
}
console.log(output);
// array reverse

function Name1(lastName, firtName) {
  {
    lastName = Batbaatar;
    firstName = Battsetseg;
  }
  let name = "";
  if (lastName && firtName) {
    let upperLastName = Name1.lastName.toUpperCase();
    name = upperLastName + "" + Name1.firstName;
  } else {
    name = "Wrong value";
  }
  return name;
}

console.log(name);

// readme

// array reserve
let array = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
for (let i = 0; i < array.length; i++) {
  array.reverse();
}
console.log("+array+");

// sort by frequency
var arr = ["apple", "banana", "apple", "cherry", "cherry", "cherry"];
var freq = {};
for (var i in arr) freq[i] = freq[i] ? freq[i] + 1 : 0;
arr.sort(function (a, b) {
  return freq[a] > freq[b] ? -1 : 1;
});
for (var a = arr.length - 1; i > 0; i--)
  if (arr[i] == arr[i - 1]) arr.splice(i, 1);
alert(arr.join(","));

// updateStudentGrades
// function array(1){
//     Math:80, pizik:90,

// }
function studentGrades() {
  [
    { name: "Alice", grades: array(3), averageGrade: 80 },
    { name: "Bob", grades: array(3), averageGrade: 85 },
    { name: "Charlie", grades: array(3), averageGrade: 85 },
  ];
}

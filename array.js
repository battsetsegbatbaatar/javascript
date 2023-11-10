// easy
// array members average
let arr = [10, 20, 30, 40, 50];
let sum = 0;
for (let i = 0; i < arr.length; i++) {
  sum += arr[i];
  sum / arr.length;
}
console.log(sum);

//fibonacci sequence
let a = [0];
let b = [1];
let z = [];

for (let i = 2; i < 100; i++) {
  alert(a + b);
  [i] = a + b;
  x = y;
  z = y;
  return [i];
}
console.log([i]);

// change array last element
let array = [10, 20, 30, 40, 50];
let selct = [30];
for (let i = 0; i < array.length; i++) {
  array.pop();
  array.push(selct);
}
console.log(array);

// sum positive even number
let num = [2, -3, 5, 6, -8, 10];
let sum2 = 0;
for (let i = 0; i < num.length; i++) {
  if (num[i] > 0 && num[i] % 2 === 0) {
    sum2 += num[i];
    return sum2;
  }
}
console.log(sum2);

// medium
// chunk
let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
let insert = 2;
let chunk = [];
for (let i = 0; i < numbers.length; i++) {
  chunk.push(numbers.slice(i * insert, i * insert + insert));
}
console.log(chunk);

// sort an array
for (let i = 0; i < numbers.length; i++) {
  for (let j = 0; j < numbers.length; j++) {
    if (numbers[i] < numbers[j]) {
      var x = numbers[i];
      numbers[i] = numbers[j];
      numbers[j] = x;
    }
  }
}
console.log(numbers);

// find max and min
let findMax = 0;
let findMin = 0;
for (let i = 0; i < numbers.length; i++) {
  if ((numbers[i] = math.max)) {
    findMax = max;
  }
  if ((numbers[i] = math.min)) {
    findMin = min;
  }
}
console.log("Max" + findMax, "Min" + findMin);

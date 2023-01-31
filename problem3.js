// Questions 03: Write a function called make__avg() which will take an array of integers and the size of that array and return the average of those values.

// Ans:
function make__avg(arr, size) {
  let sum = 0;
  for (let i = 0; i < size; i++) {
    sum += arr[i];
  }
  return sum / size;
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const size = numbers.length;

const result = make__avg(numbers, size)
console.log(result);




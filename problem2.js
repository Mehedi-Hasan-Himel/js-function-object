/*
 Questions 2: Write a function called make__avg() which will take an three integer and return the average of those values. 
*/

// Ans:
function make__avg(num1, num2, num3) {
  const sum = num1 + num2 + num3;
  const avarage = sum / 3;

  return avarage;
}

const result = make__avg(80, 88, 85);
console.log(result);

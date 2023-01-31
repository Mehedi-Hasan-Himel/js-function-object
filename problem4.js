/* 
Write a function called odd_even() which takes an integer value and tells whether this value is even or odd. You need to do it in 4 ways:
1. has returns + has perameter 
2. no return + has perameter
*/

// function has no return value and takes a single parameter:
function odd_even(number) {
   if (number % 2 === 0) {
     console.log(`Even`);
   } else {
      console.log(`odd`);
  }
}

const result = odd_even(3001);

// function has a return value and takes a single parameter:
function odd_even2(num) {
  if (num % 2 == 0) {
    return "even";
  } else {
    return "odd";
  }
}

const result2 = odd_even2(30);
console.log(result2);
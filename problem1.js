/*
Questions 01: Write a function called foo() which prints "foo" and a function called bar() which prints "bar". Call function bar() in the foo() function after printing. What will be the output? Now call the foo() to see the output.  
*/

// Ans:
function foo() {
   console.log(`foo`);
}
function bar() {
   console.log(`bar`);
}

const funcBar = foo(bar())
foo()

// console.log(funcBar);
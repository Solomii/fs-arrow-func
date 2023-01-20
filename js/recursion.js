"use strict";

// function recursion(num) {
//     if (num === 0) {
//         return;
//     }
//     console.log(num);
//     recursion(num - 1);
// }

// recursion(10);

// 2**5 -> 2 *(2**4)
// 2**4 -> 2 *(2**3)
// 2**3 -> 2 *(2**2)
// 2**2 -> 2 *(2**1)
// 2**1 -> 2 *(2**0)
// 2**0 -> 1

// const power = (base, exp) => {
//     if (base === 0) {
//         return 1;
//     }
//     return base * power(base, exp - 1);
// };

// console.log(2,5)

// 5! = 5*4*3*2*1 120
// 3! = 3 * 2!
// 2! = 2 * 1!
//0! =1
//1! = 1
//  n! = n * (n-1)


const factorial = (num) => {
  if (num < 0) {
    return null;
  }

  if (num <= 1) {
    return 1;
  }

  return num * factorial(num-1);
  
}
console.log(factorial(5));
console.log(factorial(-5));
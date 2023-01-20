"use strict";

// function recursion(num) {
//     if (num === 0) {
//         return;
//     }
//     console.log(num);
//     recursion(num - 1);
// }

// recursion(10000);

// 2**5 -> 2 *(2**4)
// 2**4 -> 2 *(2**3)
// 2**3 -> 2 *(2**2)
// 2**2 -> 2 *(2**1)
// 2**1 -> 2 *(2**0)
// 2**0 -> 1

// const power = (base, exp) => {
//   if(typeof base !== number) {
//     throw new TypeError("type be number")
//   }

//   if(exp < 0  || exp > 10000) {
//     throw new RangeError("exp must be positive and have limits 10000")
//   }
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

// debugger
const factorial = (num) => {
    if (typeof num !== number) {
        throw new TypeError("num must be number");
    }

    if (num < 0 || num > 15) {
        throw new RangeError("num must be positive and have limits 10000");
    }

    if (num <= 1) {
        return 1;
    }

    return num * factorial(num - 1);
};
console.log(factorial(5));
console.log(factorial(-5));
console.log(factorial(0));
console.log(factorial(1));

// function recursion(num) {
//     if (typeof num !== number) {
//         throw new TypeError("num must be number");
//     }
//     if (num > 10000 || num < 0) {
//         throw new RangeError("num must be 0...10000");
//     }
//     if (num === 0) {
//         return;
//     }
//     console.log(num);
//     recursion(num - 1);
// }

// console.log(recursion(-4));

// console.log("infirmation");

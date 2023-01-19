"use strict";

// const sum = (number1, number2) => {
//     return number1 + number2;
// };

// const sum = (number1, number2) => number1 + number2;

// const square = (n) => n * n;

// const logHi = () => {
//     console.log("hi");
//     return 12;
// };

// console.log(sum(4, 3));
// console.log(logHi());
// console.log(square());

// const sum = new Function('a','b', return a + b)

const f1 = function (...rest) {
    console.log("f1", rest);
    // console.log('f1',arguments)
};
const f2 = (...args) => {
    console.log("f2", args);
    // console.log('f2',arguments)
};

console.dir(f1);
console.dir(f2);

const getSum = (...args) => {
    if (args.length === 0) {
        return null;
    }
    return args.reduce((acc, arg) => {
        return acc + arg;
    });
};

const getSum2 = (...args) =>
    args.length === 0 ? null : args.reduce((acc, arg) => acc + arg);

console.log(getSum());
console.log(getSum(1, 2, 3));
console.log(getSum2());
console.log(getSum2(1, 2, 3));

const getAverageArgs = (...args) =>
    args.length === 0
        ? null
        : args.reduce((acc, arg) => acc + arg) / args.length;

console.log(getAverageArgs(1, 2, 3));


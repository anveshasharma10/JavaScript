// Question 2: Find the Sum.

const prompt = require("prompt-sync")();

let N = Number(prompt("Enter the size of the array: "));
let arr = [];

console.log("Enter the array elements:");

for (let i = 0; i < N; i++) {
    arr.push(Number(prompt()));
}

function Find_Sum(arr) {
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }

    return sum;
}

console.log("Sum =", Find_Sum(arr));
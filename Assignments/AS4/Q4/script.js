// Question 4: Even Odd

const prompt = require("prompt-sync")();

let N = Number(prompt("Enter the size of the array: "));
let arr = [];

console.log("Enter the array elements:");

for (let i = 0; i < N; i++) {
    arr.push(Number(prompt()));
}

function findEvenOdd(N, arr) {

    let evenSum = 0;
    let oddSum = 0;

    for (let i = 0; i < N; i++) {

        if (arr[i] % 2 === 0) {
            evenSum += arr[i];
        } else {
            oddSum += arr[i];
        }
    }

    return [evenSum, oddSum];
}

let result = findEvenOdd(N, arr);

console.log("Even Sum =", result[0]);
console.log("Odd Sum =", result[1]);
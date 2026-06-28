 // Question 10: Min and Max

const prompt = require("prompt-sync")();

let N = Number(prompt("Enter the size of the array: "));
let arr = [];

console.log("Enter the array elements:");

for (let i = 0; i < N; i++) {
    arr.push(Number(prompt()));
}

function Min_Max(N, arr) {

    let min = arr[0];
    let max = arr[0];

    for (let i = 1; i < N; i++) {

        if (arr[i] < min) {
            min = arr[i];
        }

        if (arr[i] > max) {
            max = arr[i];
        }
    }

    return [min, max];
}

let result = Min_Max(N, arr);

console.log("Minimum =", result[0]);
console.log("Maximum =", result[1]);
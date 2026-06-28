// Question 3: Count Occurrences

const prompt = require("prompt-sync")();

let N = Number(prompt("Enter the size of the array: "));
let K = Number(prompt("Enter the number to count: "));

let arr = [];

console.log("Enter the array elements:");

for (let i = 0; i < N; i++) {
    arr.push(Number(prompt()));
}

function findCount(N, K, arr) {
    let count = 0;

    for (let i = 0; i < N; i++) {
        if (arr[i] === K) {
            count++;
        }
    }

    return count;
}

console.log("Count =", findCount(N, K, arr));
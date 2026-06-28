// Question 6: Higher Age

const prompt = require("prompt-sync")();

let N = Number(prompt("Enter the number of persons: "));
let arr = [];

console.log("Enter ages:");

for (let i = 0; i < N; i++) {
    arr.push(Number(prompt()));
}

function highAge(N, arr) {

    let result = [];

    for (let i = 0; i < N; i++) {

        if (arr[i] >= 18) {
            result.push(arr[i]);
        }
    }

    return result;
}

console.log("Eligible Ages:", highAge(N, arr));
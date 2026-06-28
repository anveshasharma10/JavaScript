 // Question 9: Unique Color Shirt

const prompt = require("prompt-sync")();

let N = Number(prompt("Enter the number of shirts: "));
let arr = [];

console.log("Enter shirt colors:");

for (let i = 0; i < N; i++) {
    arr.push(Number(prompt()));
}

function uniqueShirts(N, arr) {

    let frequency = {};

    for (let i = 0; i < N; i++) {

        if (frequency[arr[i]]) {
            frequency[arr[i]]++;
        } else {
            frequency[arr[i]] = 1;
        }
    }

    let count = 0;

    for (let key in frequency) {

        if (frequency[key] === 1) {
            count++;
        }
    }

    return count;
}

console.log("Unique Shirts =", uniqueShirts(N, arr));
// Question 3: Find Sum

const prompt = require("prompt-sync")();

let N = Number(prompt("Enter a number: "));

function findSum(N) {
    let sum = 0;

    for (let i = 2; i <= N; i += 2) {
        sum += i;
    }

    return sum;
}

console.log("Sum =", findSum(N));
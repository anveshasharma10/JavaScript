// Question 1: Find the number of digits

const prompt = require("prompt-sync")();

let N = Number(prompt("Enter a number: "));

function Find_Digits(N) {
    let count = 0;

    while (N > 0) {
        count++;
        N = Math.floor(N / 10);
    }

    return count;
}

console.log("Number of digits =", Find_Digits(N));